// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/launchwizard.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the launchwizard service.
 */
export class LaunchwizardActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "launchwizard";

	/** [Write] launchwizard:CreateAdditionalNode */
	static readonly CreateAdditionalNode = "launchwizard:CreateAdditionalNode";
	/** [Write] launchwizard:CreateDeployment */
	static readonly CreateDeployment = "launchwizard:CreateDeployment";
	/** [Write] launchwizard:CreateSettingsSet */
	static readonly CreateSettingsSet = "launchwizard:CreateSettingsSet";
	/** [Write] launchwizard:DeleteAdditionalNode */
	static readonly DeleteAdditionalNode = "launchwizard:DeleteAdditionalNode";
	/** [Write] launchwizard:DeleteApp */
	static readonly DeleteApp = "launchwizard:DeleteApp";
	/** [Write] launchwizard:DeleteDeployment */
	static readonly DeleteDeployment = "launchwizard:DeleteDeployment";
	/** [Write] launchwizard:DeleteSettingsSet */
	static readonly DeleteSettingsSet = "launchwizard:DeleteSettingsSet";
	/** [Read] launchwizard:DescribeAdditionalNode */
	static readonly DescribeAdditionalNode =
		"launchwizard:DescribeAdditionalNode";
	/** [Read] launchwizard:DescribeProvisionedApp */
	static readonly DescribeProvisionedApp =
		"launchwizard:DescribeProvisionedApp";
	/** [Read] launchwizard:DescribeProvisioningEvents */
	static readonly DescribeProvisioningEvents =
		"launchwizard:DescribeProvisioningEvents";
	/** [Read] launchwizard:DescribeSettingsSet */
	static readonly DescribeSettingsSet = "launchwizard:DescribeSettingsSet";
	/** [Read] launchwizard:GetDeployment */
	static readonly actionGetDeployment = "launchwizard:GetDeployment";
	/** [Read] launchwizard:GetDeploymentPatternVersion */
	static readonly actionGetDeploymentPatternVersion =
		"launchwizard:GetDeploymentPatternVersion";
	/** [Read] launchwizard:GetInfrastructureSuggestion */
	static readonly actionGetInfrastructureSuggestion =
		"launchwizard:GetInfrastructureSuggestion";
	/** [Read] launchwizard:GetIpAddress */
	static readonly actionGetIpAddress = "launchwizard:GetIpAddress";
	/** [Read] launchwizard:GetResourceCostEstimate */
	static readonly actionGetResourceCostEstimate =
		"launchwizard:GetResourceCostEstimate";
	/** [Read] launchwizard:GetResourceRecommendation */
	static readonly actionGetResourceRecommendation =
		"launchwizard:GetResourceRecommendation";
	/** [Read] launchwizard:GetSettingsSet */
	static readonly actionGetSettingsSet = "launchwizard:GetSettingsSet";
	/** [Read] launchwizard:GetWorkload */
	static readonly actionGetWorkload = "launchwizard:GetWorkload";
	/** [Read] launchwizard:GetWorkloadAsset */
	static readonly actionGetWorkloadAsset = "launchwizard:GetWorkloadAsset";
	/** [Read] launchwizard:GetWorkloadAssets */
	static readonly actionGetWorkloadAssets = "launchwizard:GetWorkloadAssets";
	/** [Read] launchwizard:GetWorkloadDeploymentPattern */
	static readonly actionGetWorkloadDeploymentPattern =
		"launchwizard:GetWorkloadDeploymentPattern";
	/** [List] launchwizard:ListAdditionalNodes */
	static readonly ListAdditionalNodes = "launchwizard:ListAdditionalNodes";
	/** [List] launchwizard:ListAllowedResources */
	static readonly ListAllowedResources = "launchwizard:ListAllowedResources";
	/** [List] launchwizard:ListDeploymentEvents */
	static readonly ListDeploymentEvents = "launchwizard:ListDeploymentEvents";
	/** [List] launchwizard:ListDeploymentPatternVersions */
	static readonly ListDeploymentPatternVersions =
		"launchwizard:ListDeploymentPatternVersions";
	/** [List] launchwizard:ListDeployments */
	static readonly ListDeployments = "launchwizard:ListDeployments";
	/** [List] launchwizard:ListProvisionedApps */
	static readonly ListProvisionedApps = "launchwizard:ListProvisionedApps";
	/** [List] launchwizard:ListResourceCostEstimates */
	static readonly ListResourceCostEstimates =
		"launchwizard:ListResourceCostEstimates";
	/** [List] launchwizard:ListSettingsSets */
	static readonly ListSettingsSets = "launchwizard:ListSettingsSets";
	/** [Read] launchwizard:ListTagsForResource */
	static readonly ListTagsForResource = "launchwizard:ListTagsForResource";
	/** [List] launchwizard:ListWorkloadDeploymentOptions */
	static readonly ListWorkloadDeploymentOptions =
		"launchwizard:ListWorkloadDeploymentOptions";
	/** [List] launchwizard:ListWorkloadDeploymentPatterns */
	static readonly ListWorkloadDeploymentPatterns =
		"launchwizard:ListWorkloadDeploymentPatterns";
	/** [List] launchwizard:ListWorkloads */
	static readonly ListWorkloads = "launchwizard:ListWorkloads";
	/** [Write] launchwizard:PutSettingsSet */
	static readonly PutSettingsSet = "launchwizard:PutSettingsSet";
	/** [Write] launchwizard:StartProvisioning */
	static readonly StartProvisioning = "launchwizard:StartProvisioning";
	/** [Tagging] launchwizard:TagResource */
	static readonly TagResource = "launchwizard:TagResource";
	/** [Tagging] launchwizard:UntagResource */
	static readonly UntagResource = "launchwizard:UntagResource";
	/** [Write] launchwizard:UpdateDeployment */
	static readonly UpdateDeployment = "launchwizard:UpdateDeployment";
	/** [Write] launchwizard:UpdateSettingsSet */
	static readonly UpdateSettingsSet = "launchwizard:UpdateSettingsSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LaunchwizardActions.DescribeAdditionalNode,
		LaunchwizardActions.DescribeProvisionedApp,
		LaunchwizardActions.DescribeProvisioningEvents,
		LaunchwizardActions.DescribeSettingsSet,
		LaunchwizardActions.actionGetDeployment,
		LaunchwizardActions.actionGetDeploymentPatternVersion,
		LaunchwizardActions.actionGetInfrastructureSuggestion,
		LaunchwizardActions.actionGetIpAddress,
		LaunchwizardActions.actionGetResourceCostEstimate,
		LaunchwizardActions.actionGetResourceRecommendation,
		LaunchwizardActions.actionGetSettingsSet,
		LaunchwizardActions.actionGetWorkload,
		LaunchwizardActions.actionGetWorkloadAsset,
		LaunchwizardActions.actionGetWorkloadAssets,
		LaunchwizardActions.actionGetWorkloadDeploymentPattern,
		LaunchwizardActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LaunchwizardActions.CreateAdditionalNode,
		LaunchwizardActions.CreateDeployment,
		LaunchwizardActions.CreateSettingsSet,
		LaunchwizardActions.DeleteAdditionalNode,
		LaunchwizardActions.DeleteApp,
		LaunchwizardActions.DeleteDeployment,
		LaunchwizardActions.DeleteSettingsSet,
		LaunchwizardActions.PutSettingsSet,
		LaunchwizardActions.StartProvisioning,
		LaunchwizardActions.UpdateDeployment,
		LaunchwizardActions.UpdateSettingsSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LaunchwizardActions.ListAdditionalNodes,
		LaunchwizardActions.ListAllowedResources,
		LaunchwizardActions.ListDeploymentEvents,
		LaunchwizardActions.ListDeploymentPatternVersions,
		LaunchwizardActions.ListDeployments,
		LaunchwizardActions.ListProvisionedApps,
		LaunchwizardActions.ListResourceCostEstimates,
		LaunchwizardActions.ListSettingsSets,
		LaunchwizardActions.ListWorkloadDeploymentOptions,
		LaunchwizardActions.ListWorkloadDeploymentPatterns,
		LaunchwizardActions.ListWorkloads,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LaunchwizardActions.TagResource,
		LaunchwizardActions.UntagResource,
	];
}

/**
 * Properties for building a deployment ARN.
 */
export interface LaunchwizardDeploymentArnProps {
	/** The DeploymentId component of the ARN. */
	readonly deploymentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deployment ARN.
 */
export interface LaunchwizardDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentId component. */
	readonly deploymentId: string;
}

const DeploymentArnRegex =
	/^arn:(?<partition>[^:]+):launchwizard:(?<region>[^:]*):(?<account>[^:]*):deployment\/(?<deploymentId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for launchwizard resources.
 */
export class LaunchwizardResources {
	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: LaunchwizardDeploymentArnProps): string {
		return `arn:${props.partition ?? "aws"}:launchwizard:${props.region ?? "*"}:${props.account ?? "*"}:deployment/${props.deploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(arn: string): LaunchwizardDeploymentArnComponents {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentId: match.groups!.deploymentId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for launchwizard.
 */
export class LaunchwizardOperations {
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = [
		"launchwizard:CreateDeployment",
		"launchwizard:TagResource",
	];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DeleteDeployment: string[] = [
		"launchwizard:DeleteDeployment",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["launchwizard:GetDeployment"];
	/** IAM actions required for the GetDeploymentPatternVersion API call. */
	static readonly opGetDeploymentPatternVersion: string[] = [
		"launchwizard:GetDeploymentPatternVersion",
	];
	/** IAM actions required for the GetWorkload API call. */
	static readonly opGetWorkload: string[] = ["launchwizard:GetWorkload"];
	/** IAM actions required for the GetWorkloadDeploymentPattern API call. */
	static readonly opGetWorkloadDeploymentPattern: string[] = [
		"launchwizard:GetWorkloadDeploymentPattern",
	];
	/** IAM actions required for the ListDeploymentEvents API call. */
	static readonly ListDeploymentEvents: string[] = [
		"launchwizard:ListDeploymentEvents",
	];
	/** IAM actions required for the ListDeploymentPatternVersions API call. */
	static readonly ListDeploymentPatternVersions: string[] = [
		"launchwizard:ListDeploymentPatternVersions",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["launchwizard:ListDeployments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"launchwizard:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkloadDeploymentPatterns API call. */
	static readonly ListWorkloadDeploymentPatterns: string[] = [
		"launchwizard:ListWorkloadDeploymentPatterns",
	];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly ListWorkloads: string[] = ["launchwizard:ListWorkloads"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["launchwizard:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["launchwizard:UntagResource"];
	/** IAM actions required for the UpdateDeployment API call. */
	static readonly UpdateDeployment: string[] = [
		"launchwizard:UpdateDeployment",
	];
}

/**
 * Condition key constants and builders for launchwizard.
 */
export class LaunchwizardConditions {
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
