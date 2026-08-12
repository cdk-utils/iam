import { CDKUtilsTemplate } from "@cdk_utils/projen_template";

new CDKUtilsTemplate({
	name: "@cdk_utils/iam",
	repositoryUrl: "https://github.com/cdk-utils/iam.git",
	description:
		"CDK Constructs and helper functions to streamline the creation of IAM resources",
	cdkVersion: "2.150.0",
	keywords: ["iam", "aws-cdk", "cdk", "constructs", "aws-iam"],
	devDeps: ["@cdk_utils/projen_template"],
});
