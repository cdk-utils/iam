import { CDKUtilsTemplate } from "@cdk_utils/projen_template";
import { JsonPatch } from "projen";

// The exact title the daily service-reference update PR is opened with. Shared by
// the workflow (commit subject + PR title) and the Mergify auto-approve rule so
// the two can never drift out of sync.
const UPDATE_PR_TITLE = "feat: update AWS service reference data";

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
// Mechanism (Mergify owns the whole lifecycle, keyed on the PR TITLE — no label
// is set by the workflow, so nothing lands before checks and nothing is
// mis-attributed to the admin user):
//   1. Exclude the update PR from the template's "Add Blocking label" rule, so it
//      never gets `do-not-merge`. Done with a guarded JSON patch below, since the
//      Mergify component is append-only and cannot mutate a template rule.
//   2. Approve the update PR by title (the rule below).
//   3. The existing auto-merge rule + queue merge it once `build` + `package-js`
//      pass. The WAIT-FOR-CHECKS guarantee lives in the queue's `status-success`
//      conditions, NOT in a label — which is why no `merge` label is needed.
//
// Why not label at creation (the previous, broken approach): `gh pr create
// --label merge` ran as the admin's PAT, so the label was attributed to the user
// (not Mergify) AND was present before any check ran. The label was never a
// checks-passed signal, so it only removed the block prematurely. Excluding the
// PR from the blocking rule by title is the correct, race-free equivalent.
const mergifyFile = project.tryFindObjectFile(".mergify.yml");

// The template contributes "Add Blocking label on default PRs" as the SECOND
// pull_request_rule (index 1); projen's auto-merge rule is index 0. The `test`
// op asserts that identity, so if the template ever reorders or renames its
// rules the synth fails loudly instead of patching the wrong rule.
mergifyFile?.patch(
	JsonPatch.test(
		"/pull_request_rules/1/name",
		"Add Blocking label on default PRs",
	),
	JsonPatch.add("/pull_request_rules/1/conditions/-", `-title=${UPDATE_PR_TITLE}`),
);

mergifyFile?.addToArray("pull_request_rules", {
	name: "Auto-approve daily service-reference update PRs",
	conditions: [
		`title=${UPDATE_PR_TITLE}`,
		"author=Lorenzohidalgo",
		"-label~=(do-not-merge)",
		// Only approve + comment once CI has actually PASSED. `status-success=X`
		// is false while X is still running and false if X failed, so this rule
		// never fires early or on a red build. These mirror the queue's own
		// status-success conditions, so the approval cannot outrun the merge gate.
		"status-success=build",
		"status-success=package-js",
	],
	actions: {
		review: {
			type: "APPROVE",
			message: "Auto-approved: scheduled AWS service-reference data update.",
		},
		comment: {
			message:
				"@Lorenzohidalgo a new AWS service-reference update has passed all checks and will be merged and published shortly.",
		},
	},
});

project.synth();
