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
	static readonly CREATE_ADDITIONAL_NODE = "launchwizard:CreateAdditionalNode";
	/** [Write] launchwizard:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "launchwizard:CreateDeployment";
	/** [Write] launchwizard:CreateSettingsSet */
	static readonly CREATE_SETTINGS_SET = "launchwizard:CreateSettingsSet";
	/** [Write] launchwizard:DeleteAdditionalNode */
	static readonly DELETE_ADDITIONAL_NODE = "launchwizard:DeleteAdditionalNode";
	/** [Write] launchwizard:DeleteApp */
	static readonly DELETE_APP = "launchwizard:DeleteApp";
	/** [Write] launchwizard:DeleteDeployment */
	static readonly DELETE_DEPLOYMENT = "launchwizard:DeleteDeployment";
	/** [Write] launchwizard:DeleteSettingsSet */
	static readonly DELETE_SETTINGS_SET = "launchwizard:DeleteSettingsSet";
	/** [Read] launchwizard:DescribeAdditionalNode */
	static readonly DESCRIBE_ADDITIONAL_NODE =
		"launchwizard:DescribeAdditionalNode";
	/** [Read] launchwizard:DescribeProvisionedApp */
	static readonly DESCRIBE_PROVISIONED_APP =
		"launchwizard:DescribeProvisionedApp";
	/** [Read] launchwizard:DescribeProvisioningEvents */
	static readonly DESCRIBE_PROVISIONING_EVENTS =
		"launchwizard:DescribeProvisioningEvents";
	/** [Read] launchwizard:DescribeSettingsSet */
	static readonly DESCRIBE_SETTINGS_SET = "launchwizard:DescribeSettingsSet";
	/** [Read] launchwizard:GetDeployment */
	static readonly GET_DEPLOYMENT = "launchwizard:GetDeployment";
	/** [Read] launchwizard:GetDeploymentPatternVersion */
	static readonly GET_DEPLOYMENT_PATTERN_VERSION =
		"launchwizard:GetDeploymentPatternVersion";
	/** [Read] launchwizard:GetInfrastructureSuggestion */
	static readonly GET_INFRASTRUCTURE_SUGGESTION =
		"launchwizard:GetInfrastructureSuggestion";
	/** [Read] launchwizard:GetIpAddress */
	static readonly GET_IP_ADDRESS = "launchwizard:GetIpAddress";
	/** [Read] launchwizard:GetResourceCostEstimate */
	static readonly GET_RESOURCE_COST_ESTIMATE =
		"launchwizard:GetResourceCostEstimate";
	/** [Read] launchwizard:GetResourceRecommendation */
	static readonly GET_RESOURCE_RECOMMENDATION =
		"launchwizard:GetResourceRecommendation";
	/** [Read] launchwizard:GetSettingsSet */
	static readonly GET_SETTINGS_SET = "launchwizard:GetSettingsSet";
	/** [Read] launchwizard:GetWorkload */
	static readonly GET_WORKLOAD = "launchwizard:GetWorkload";
	/** [Read] launchwizard:GetWorkloadAsset */
	static readonly GET_WORKLOAD_ASSET = "launchwizard:GetWorkloadAsset";
	/** [Read] launchwizard:GetWorkloadAssets */
	static readonly GET_WORKLOAD_ASSETS = "launchwizard:GetWorkloadAssets";
	/** [Read] launchwizard:GetWorkloadDeploymentPattern */
	static readonly GET_WORKLOAD_DEPLOYMENT_PATTERN =
		"launchwizard:GetWorkloadDeploymentPattern";
	/** [List] launchwizard:ListAdditionalNodes */
	static readonly LIST_ADDITIONAL_NODES = "launchwizard:ListAdditionalNodes";
	/** [List] launchwizard:ListAllowedResources */
	static readonly LIST_ALLOWED_RESOURCES = "launchwizard:ListAllowedResources";
	/** [List] launchwizard:ListDeploymentEvents */
	static readonly LIST_DEPLOYMENT_EVENTS = "launchwizard:ListDeploymentEvents";
	/** [List] launchwizard:ListDeploymentPatternVersions */
	static readonly LIST_DEPLOYMENT_PATTERN_VERSIONS =
		"launchwizard:ListDeploymentPatternVersions";
	/** [List] launchwizard:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "launchwizard:ListDeployments";
	/** [List] launchwizard:ListProvisionedApps */
	static readonly LIST_PROVISIONED_APPS = "launchwizard:ListProvisionedApps";
	/** [List] launchwizard:ListResourceCostEstimates */
	static readonly LIST_RESOURCE_COST_ESTIMATES =
		"launchwizard:ListResourceCostEstimates";
	/** [List] launchwizard:ListSettingsSets */
	static readonly LIST_SETTINGS_SETS = "launchwizard:ListSettingsSets";
	/** [Read] launchwizard:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "launchwizard:ListTagsForResource";
	/** [List] launchwizard:ListWorkloadDeploymentOptions */
	static readonly LIST_WORKLOAD_DEPLOYMENT_OPTIONS =
		"launchwizard:ListWorkloadDeploymentOptions";
	/** [List] launchwizard:ListWorkloadDeploymentPatterns */
	static readonly LIST_WORKLOAD_DEPLOYMENT_PATTERNS =
		"launchwizard:ListWorkloadDeploymentPatterns";
	/** [List] launchwizard:ListWorkloads */
	static readonly LIST_WORKLOADS = "launchwizard:ListWorkloads";
	/** [Write] launchwizard:PutSettingsSet */
	static readonly PUT_SETTINGS_SET = "launchwizard:PutSettingsSet";
	/** [Write] launchwizard:StartProvisioning */
	static readonly START_PROVISIONING = "launchwizard:StartProvisioning";
	/** [Tagging] launchwizard:TagResource */
	static readonly TAG_RESOURCE = "launchwizard:TagResource";
	/** [Tagging] launchwizard:UntagResource */
	static readonly UNTAG_RESOURCE = "launchwizard:UntagResource";
	/** [Write] launchwizard:UpdateDeployment */
	static readonly UPDATE_DEPLOYMENT = "launchwizard:UpdateDeployment";
	/** [Write] launchwizard:UpdateSettingsSet */
	static readonly UPDATE_SETTINGS_SET = "launchwizard:UpdateSettingsSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LaunchwizardActions.DESCRIBE_ADDITIONAL_NODE,
		LaunchwizardActions.DESCRIBE_PROVISIONED_APP,
		LaunchwizardActions.DESCRIBE_PROVISIONING_EVENTS,
		LaunchwizardActions.DESCRIBE_SETTINGS_SET,
		LaunchwizardActions.GET_DEPLOYMENT,
		LaunchwizardActions.GET_DEPLOYMENT_PATTERN_VERSION,
		LaunchwizardActions.GET_INFRASTRUCTURE_SUGGESTION,
		LaunchwizardActions.GET_IP_ADDRESS,
		LaunchwizardActions.GET_RESOURCE_COST_ESTIMATE,
		LaunchwizardActions.GET_RESOURCE_RECOMMENDATION,
		LaunchwizardActions.GET_SETTINGS_SET,
		LaunchwizardActions.GET_WORKLOAD,
		LaunchwizardActions.GET_WORKLOAD_ASSET,
		LaunchwizardActions.GET_WORKLOAD_ASSETS,
		LaunchwizardActions.GET_WORKLOAD_DEPLOYMENT_PATTERN,
		LaunchwizardActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LaunchwizardActions.CREATE_ADDITIONAL_NODE,
		LaunchwizardActions.CREATE_DEPLOYMENT,
		LaunchwizardActions.CREATE_SETTINGS_SET,
		LaunchwizardActions.DELETE_ADDITIONAL_NODE,
		LaunchwizardActions.DELETE_APP,
		LaunchwizardActions.DELETE_DEPLOYMENT,
		LaunchwizardActions.DELETE_SETTINGS_SET,
		LaunchwizardActions.PUT_SETTINGS_SET,
		LaunchwizardActions.START_PROVISIONING,
		LaunchwizardActions.UPDATE_DEPLOYMENT,
		LaunchwizardActions.UPDATE_SETTINGS_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LaunchwizardActions.LIST_ADDITIONAL_NODES,
		LaunchwizardActions.LIST_ALLOWED_RESOURCES,
		LaunchwizardActions.LIST_DEPLOYMENT_EVENTS,
		LaunchwizardActions.LIST_DEPLOYMENT_PATTERN_VERSIONS,
		LaunchwizardActions.LIST_DEPLOYMENTS,
		LaunchwizardActions.LIST_PROVISIONED_APPS,
		LaunchwizardActions.LIST_RESOURCE_COST_ESTIMATES,
		LaunchwizardActions.LIST_SETTINGS_SETS,
		LaunchwizardActions.LIST_WORKLOAD_DEPLOYMENT_OPTIONS,
		LaunchwizardActions.LIST_WORKLOAD_DEPLOYMENT_PATTERNS,
		LaunchwizardActions.LIST_WORKLOADS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LaunchwizardActions.TAG_RESOURCE,
		LaunchwizardActions.UNTAG_RESOURCE,
	];
}

const DeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):launchwizard:(?<region>[^:]*):(?<account>[^:]*):deployment/(?<deploymentId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for launchwizard resources.
 */
export class LaunchwizardResources {
	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: {
		/** The DeploymentId component of the ARN. */
		readonly deploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deploymentId: string;
	} {
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
	static readonly CREATE_DEPLOYMENT: string[] = [
		"launchwizard:CreateDeployment",
		"launchwizard:TagResource",
	];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DELETE_DEPLOYMENT: string[] = [
		"launchwizard:DeleteDeployment",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["launchwizard:GetDeployment"];
	/** IAM actions required for the GetDeploymentPatternVersion API call. */
	static readonly GET_DEPLOYMENT_PATTERN_VERSION: string[] = [
		"launchwizard:GetDeploymentPatternVersion",
	];
	/** IAM actions required for the GetWorkload API call. */
	static readonly GET_WORKLOAD: string[] = ["launchwizard:GetWorkload"];
	/** IAM actions required for the GetWorkloadDeploymentPattern API call. */
	static readonly GET_WORKLOAD_DEPLOYMENT_PATTERN: string[] = [
		"launchwizard:GetWorkloadDeploymentPattern",
	];
	/** IAM actions required for the ListDeploymentEvents API call. */
	static readonly LIST_DEPLOYMENT_EVENTS: string[] = [
		"launchwizard:ListDeploymentEvents",
	];
	/** IAM actions required for the ListDeploymentPatternVersions API call. */
	static readonly LIST_DEPLOYMENT_PATTERN_VERSIONS: string[] = [
		"launchwizard:ListDeploymentPatternVersions",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["launchwizard:ListDeployments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"launchwizard:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkloadDeploymentPatterns API call. */
	static readonly LIST_WORKLOAD_DEPLOYMENT_PATTERNS: string[] = [
		"launchwizard:ListWorkloadDeploymentPatterns",
	];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly LIST_WORKLOADS: string[] = ["launchwizard:ListWorkloads"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["launchwizard:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["launchwizard:UntagResource"];
	/** IAM actions required for the UpdateDeployment API call. */
	static readonly UPDATE_DEPLOYMENT: string[] = [
		"launchwizard:UpdateDeployment",
	];
}

/**
 * Condition key constants and builders for launchwizard.
 */
export class LaunchwizardConditions {
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
