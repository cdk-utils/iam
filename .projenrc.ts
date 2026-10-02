import { CDKUtilsTemplate } from "@cdk_utils/projen_template";

// The exact title the daily service-reference update PR is opened with. Shared by
// the workflow (commit subject + PR title) and the Mergify auto-approve rule so
// the two can never drift out of sync.
const UPDATE_PR_TITLE = "feat: update AWS service reference data";
// The Mergify label that marks a PR as ready to merge (the org-standard template
// uses `do-not-merge` as the blocker and `merge` as the go-ahead).
const MERGE_LABEL = "merge";

const project = new CDKUtilsTemplate({
	name: "@cdk_utils/iam",
	repositoryUrl: "https://github.com/cdk-utils/iam.git",
	description:
		"CDK Constructs and helper functions to streamline the creation of IAM resources",
	cdkVersion: "2.150.0",
	keywords: ["iam", "aws-cdk", "cdk", "constructs", "aws-iam"],
	devDeps: ["@cdk_utils/projen_template", "tsx"],
});

// Override docgen to split documentation by submodule into docs/ directory
project.tasks
	.tryFind("docgen")!
	.reset("mkdir -p docs && jsii-docgen --split-by-submodule -o docs/API");

// Track docs/ directory instead of single API.md
project.gitignore.removePatterns("!/API.md");
project.gitignore.addPatterns("/API.md");
project.gitignore.exclude("!/docs/");

// Exclude scripts and data directories from npm package
project.npmignore?.addPatterns("/scripts/", "/data/", "/docs/");

// Speed up tests: use isolatedModules (transpile-only, no type-checking)
// Type-checking is already handled by the jsii compilation step
project.jest!.config.transform = {
	"^.+\\.[t]sx?$": [
		"ts-jest",
		{
			tsconfig: "tsconfig.dev.json",
			isolatedModules: true,
		},
	],
};

// =============================================================================
// GitHub Actions: Automated Service Reference Update
// =============================================================================

const updateWorkflow = project.github!.addWorkflow("update-service-reference");
updateWorkflow.on({
	schedule: [{ cron: "7 6 * * 1-5" }], // Weekdays at 06:07 UTC
	workflowDispatch: {}, // Allow manual triggers
});

updateWorkflow.addJob("update", {
	runsOn: ["ubuntu-latest"],
	permissions: {
		contents: "write" as any,
		pullRequests: "write" as any,
	},
	steps: [
		{
			name: "Checkout",
			uses: "actions/checkout@v4",
			with: {
				"fetch-depth": 0,
				token: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
			},
		},
		{
			name: "Setup Node.js",
			uses: "actions/setup-node@v4",
			with: {
				"node-version": "24.x",
			},
		},
		{
			name: "Install dependencies",
			run: "npm ci",
		},
		{
			name: "Update service reference",
			run: "npx projen update-service-reference",
		},
		{
			name: "Check for changes",
			id: "changes",
			run: [
				'if [ -z "$(git status --porcelain)" ]; then',
				'  echo "changed=false" >> $GITHUB_OUTPUT',
				'  echo "✅ No service reference updates available"',
				"else",
				'  echo "changed=true" >> $GITHUB_OUTPUT',
				'  echo "📦 Service reference updates detected"',
				"fi",
			].join("\n"),
		},
		{
			name: "Run projen build",
			if: "steps.changes.outputs.changed == 'true'",
			run: "npx projen build",
		},
		{
			name: "Create branch and push",
			if: "steps.changes.outputs.changed == 'true'",
			env: {
				GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
			},
			run: [
				'BRANCH_NAME="feature/service_update_$(date +%Y-%m-%d)"',
				"",
				"# Skip if an open PR already exists for today's update",
				'EXISTING_PR=$(gh pr list --head "$BRANCH_NAME" --state open --json number --jq ".[0].number")',
				'if [ -n "$EXISTING_PR" ]; then',
				'  echo "⏭️ PR #$EXISTING_PR already open for $BRANCH_NAME — skipping"',
				"  exit 0",
				"fi",
				"",
				"# Delete remote branch if it exists (from a prior failed run)",
				'git push origin --delete "$BRANCH_NAME" 2>/dev/null || true',
				"",
				"git config user.name 'github-actions[bot]'",
				"git config user.email 'github-actions[bot]@users.noreply.github.com'",
				"git checkout -b $BRANCH_NAME",
				"git add -A",
				`git commit -m "${UPDATE_PR_TITLE}"`,
				"git push origin $BRANCH_NAME",
				'echo "branch=$BRANCH_NAME" >> $GITHUB_OUTPUT',
			].join("\n"),
			id: "push",
		},
		{
			name: "Create Pull Request",
			if: "steps.changes.outputs.changed == 'true' && steps.push.outputs.branch",
			env: {
				GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
			},
			run: [
				'PR_BODY="## Automated Service Reference Update',
				"",
				"This PR updates the AWS Service Authorization Reference data and regenerates the TypeScript constants.",
				"",
				"### Changes",
				"- Updated service reference JSON files in \\`data/service-reference/\\`",
				"- Regenerated TypeScript constants in \\`src/generated/services/\\`",
				"- Regenerated barrel index",
				"",
				"### Triggered by",
				"- Schedule: Weekdays at 06:07 UTC",
				'- Or manual workflow dispatch"',
				"",
				"gh pr create \\",
				"  --base main \\",
				"  --head ${{ steps.push.outputs.branch }} \\",
				`  --title "${UPDATE_PR_TITLE}" \\`,
				`  --label "${MERGE_LABEL}" \\`,
				'  --body "$PR_BODY"',
			].join("\n"),
		},
	],
});

// =============================================================================
// Projen Tasks
// =============================================================================

// Add a projen task to sync AWS Service Reference data
project.addTask("sync-service-reference", {
	description:
		"Fetch and store the latest AWS Service Authorization Reference data",
	exec: "tsx scripts/run-sync.ts",
});

// Unified update: sync data + regenerate constants for changed services
project.addTask("update-service-reference", {
	description:
		"Sync AWS service reference data and regenerate constants for updated services",
	exec: "tsx scripts/run-update.ts",
});

// Add projen tasks for code generation
project.addTask("generate-constants", {
	description: "Generate TypeScript constants from all service reference data",
	exec: "tsx scripts/generate-all.ts",
});

project.addTask("generate-service", {
	description:
		"Generate constants for a single service (pass file path as arg)",
	exec: "tsx scripts/generate-service.ts",
});

project.addTask("generate-index", {
	description: "Regenerate the barrel index for generated services",
	exec: "tsx scripts/generate-index.ts",
});

// =============================================================================
// Mergify: auto-approve + auto-merge the daily service-reference update PRs
// =============================================================================
//
// The `update-service-reference` workflow opens a PR titled exactly
// "feat: update AWS service reference data" (authored by the admin, since it
// pushes with PROJEN_GITHUB_TOKEN). We want those PRs to merge themselves once
// CI is green, WITHOUT the manual do-not-merge -> merge label swap the template's
// org-standard rules impose on admin PRs.
//
// How the template rules interact (the Mergify component is append-only, so we
// work WITH them, not against them):
//   - "Add Blocking label on default PRs" adds `do-not-merge` to an admin PR that
//     has NEITHER `do-not-merge` NOR `merge`. Its `-label~=(merge)` guard is the
//     seam we use: a PR that already carries `merge` is never blocked.
//   - projen's AwsCdkConstructLibrary auto-merge rule + queue merge a PR once it
//     has an approval, no `do-not-merge`, and build + package-js are green.
//
// Two coordinated changes make the update PR self-merge with no race:
//   1. The workflow creates the PR already carrying the `merge` label (see the
//      `gh pr create --label merge` step above). Because the label exists BEFORE
//      Mergify first evaluates the PR, the blocking rule's `-label~=(merge)`
//      guard is already false, so `do-not-merge` is never added. No label race.
//   2. The rule below approves that PR (matched by its exact title) so the
//      auto-merge rule's `#approved-reviews-by>=1` is satisfied without a human.
// With `merge` present, no `do-not-merge`, an approval, and green checks, the
// existing auto-merge rule/queue merges it and deletes the branch.
project.tryFindObjectFile(".mergify.yml")?.addToArray("pull_request_rules", {
	name: "Auto-approve daily service-reference update PRs",
	conditions: [
		`title=${UPDATE_PR_TITLE}`,
		"author=Lorenzohidalgo",
		`label=${MERGE_LABEL}`,
		"-label~=(do-not-merge)",
	],
	actions: {
		review: {
			type: "APPROVE",
			message: "Auto-approved: scheduled AWS service-reference data update.",
		},
		comment: {
			message:
				"@Lorenzohidalgo a new AWS service-reference update has been approved and will be merged and published shortly once CI passes.",
		},
	},
});

project.synth();
