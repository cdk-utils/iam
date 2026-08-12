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

project.synth();
