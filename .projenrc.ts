import { CDKUtilsTemplate } from "@cdk_utils/projen_template";

const project = new CDKUtilsTemplate({
	name: "@cdk_utils/iam",
	repositoryUrl: "https://github.com/cdk-utils/iam.git",
	description:
		"CDK Constructs and helper functions to streamline the creation of IAM resources",
	cdkVersion: "2.150.0",
	keywords: ["iam", "aws-cdk", "cdk", "constructs", "aws-iam"],
	devDeps: ["@cdk_utils/projen_template", "tsx"],
});

// Exclude scripts and data directories from npm package
project.npmignore?.addPatterns("/scripts/", "/data/");

// =============================================================================
// GitHub Actions: Automated Service Reference Update
// =============================================================================

const updateWorkflow = project.github!.addWorkflow("update-service-reference");
updateWorkflow.on({
	schedule: [{ cron: "0 6 * * 1-5" }], // Weekdays at 06:00 UTC
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
			run: [
				'BRANCH_NAME="feature/service_update_$(date +%Y-%m-%d)"',
				"git config user.name 'github-actions[bot]'",
				"git config user.email 'github-actions[bot]@users.noreply.github.com'",
				"git checkout -b $BRANCH_NAME",
				"git add -A",
				'git commit -m "feat: update AWS service reference data"',
				"git push origin $BRANCH_NAME",
				'echo "branch=$BRANCH_NAME" >> $GITHUB_OUTPUT',
			].join("\n"),
			id: "push",
		},
		{
			name: "Create Pull Request",
			if: "steps.changes.outputs.changed == 'true'",
			env: {
				GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
			},
			run: [
				"gh pr create \\",
				"  --base main \\",
				"  --head ${{ steps.push.outputs.branch }} \\",
				'  --title "feat: update AWS service reference data" \\',
				'  --body "## Automated Service Reference Update\\n\\nThis PR updates the AWS Service Authorization Reference data and regenerates the TypeScript constants.\\n\\n### Changes\\n- Updated service reference JSON files in \\`data/service-reference/\\`\\n- Regenerated TypeScript constants in \\`src/generated/services/\\`\\n- Regenerated barrel index\\n\\n### Triggered by\\n- Schedule: Weekdays at 06:00 UTC\\n- Or manual workflow dispatch"',
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

project.synth();
