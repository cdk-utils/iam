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

// Add a projen task to sync AWS Service Reference data
project.addTask("sync-service-reference", {
	description: "Fetch and store the latest AWS Service Authorization Reference data",
	exec: "tsx scripts/run-sync.ts",
});

// Unified update: sync data + regenerate constants for changed services
project.addTask("update-service-reference", {
	description: "Sync AWS service reference data and regenerate constants for updated services",
	exec: "tsx scripts/run-update.ts",
});

// Add projen tasks for code generation
project.addTask("generate-constants", {
	description: "Generate TypeScript constants from all service reference data",
	exec: "tsx scripts/generate-all.ts",
});

project.addTask("generate-service", {
	description: "Generate constants for a single service (pass file path as arg)",
	exec: "tsx scripts/generate-service.ts",
});

project.addTask("generate-index", {
	description: "Regenerate the barrel index for generated services",
	exec: "tsx scripts/generate-index.ts",
});

project.synth();
