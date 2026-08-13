// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm-quicksetup.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssm-quicksetup service.
 */
export class SSMQuicksetupActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm-quicksetup";

	/** [Write] ssm-quicksetup:CreateConfigurationManager */
	static readonly CreateConfigurationManager =
		"ssm-quicksetup:CreateConfigurationManager";
	/** [Write] ssm-quicksetup:DeleteConfigurationManager */
	static readonly DeleteConfigurationManager =
		"ssm-quicksetup:DeleteConfigurationManager";
	/** [Read] ssm-quicksetup:GetConfiguration */
	static readonly actionGetConfiguration = "ssm-quicksetup:GetConfiguration";
	/** [Read] ssm-quicksetup:GetConfigurationManager */
	static readonly actionGetConfigurationManager =
		"ssm-quicksetup:GetConfigurationManager";
	/** [Read] ssm-quicksetup:GetServiceSettings */
	static readonly actionGetServiceSettings =
		"ssm-quicksetup:GetServiceSettings";
	/** [List] ssm-quicksetup:ListConfigurationManagers */
	static readonly ListConfigurationManagers =
		"ssm-quicksetup:ListConfigurationManagers";
	/** [List] ssm-quicksetup:ListConfigurations */
	static readonly ListConfigurations = "ssm-quicksetup:ListConfigurations";
	/** [Read] ssm-quicksetup:ListQuickSetupTypes */
	static readonly ListQuickSetupTypes = "ssm-quicksetup:ListQuickSetupTypes";
	/** [Read] ssm-quicksetup:ListTagsForResource */
	static readonly ListTagsForResource = "ssm-quicksetup:ListTagsForResource";
	/** [Tagging] ssm-quicksetup:TagResource */
	static readonly TagResource = "ssm-quicksetup:TagResource";
	/** [Tagging] ssm-quicksetup:UntagResource */
	static readonly UntagResource = "ssm-quicksetup:UntagResource";
	/** [Write] ssm-quicksetup:UpdateConfigurationDefinition */
	static readonly UpdateConfigurationDefinition =
		"ssm-quicksetup:UpdateConfigurationDefinition";
	/** [Write] ssm-quicksetup:UpdateConfigurationManager */
	static readonly UpdateConfigurationManager =
		"ssm-quicksetup:UpdateConfigurationManager";
	/** [Write] ssm-quicksetup:UpdateServiceSettings */
	static readonly UpdateServiceSettings =
		"ssm-quicksetup:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMQuicksetupActions.actionGetConfiguration,
		SSMQuicksetupActions.actionGetConfigurationManager,
		SSMQuicksetupActions.actionGetServiceSettings,
		SSMQuicksetupActions.ListQuickSetupTypes,
		SSMQuicksetupActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMQuicksetupActions.CreateConfigurationManager,
		SSMQuicksetupActions.DeleteConfigurationManager,
		SSMQuicksetupActions.UpdateConfigurationDefinition,
		SSMQuicksetupActions.UpdateConfigurationManager,
		SSMQuicksetupActions.UpdateServiceSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMQuicksetupActions.ListConfigurationManagers,
		SSMQuicksetupActions.ListConfigurations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSMQuicksetupActions.TagResource,
		SSMQuicksetupActions.UntagResource,
	];
}

/**
 * Properties for building a configuration-manager ARN.
 */
export interface SSMQuicksetupConfigurationManagerArnProps {
	/** The ConfigurationManagerId component of the ARN. */
	readonly configurationManagerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration-manager ARN.
 */
export interface SSMQuicksetupConfigurationManagerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationManagerId component. */
	readonly configurationManagerId: string;
}

const ConfigurationManagerArnRegex =
	/^arn:(?<partition>[^:]+):ssm-quicksetup:(?<region>[^:]*):(?<account>[^:]*):configuration-manager\/(?<configurationManagerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssm-quicksetup resources.
 */
export class SSMQuicksetupResources {
	/**
	 * Builds an ARN for the configuration-manager resource.
	 */
	static configurationManager(
		props: SSMQuicksetupConfigurationManagerArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:ssm-quicksetup:${props.region ?? "*"}:${props.account ?? "*"}:configuration-manager/${props.configurationManagerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration-manager resource.
	 */
	static isValidConfigurationManagerArn(arn: string): boolean {
		return ConfigurationManagerArnRegex.test(arn);
	}

	/**
	 * Parses a configuration-manager ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationManagerArn(
		arn: string,
	): SSMQuicksetupConfigurationManagerArnComponents {
		const match = ConfigurationManagerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration-manager ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationManagerId: match.groups!.configurationManagerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ssm-quicksetup.
 */
export class SSMQuicksetupOperations {
	/** IAM actions required for the CreateConfigurationManager API call. */
	static readonly CreateConfigurationManager: string[] = [
		"ssm-quicksetup:CreateConfigurationManager",
		"iam:PassRole",
		"ssm-quicksetup:TagResource",
	];
	/** IAM actions required for the DeleteConfigurationManager API call. */
	static readonly DeleteConfigurationManager: string[] = [
		"ssm-quicksetup:DeleteConfigurationManager",
		"iam:PassRole",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly opGetConfiguration: string[] = [
		"ssm-quicksetup:GetConfiguration",
	];
	/** IAM actions required for the GetConfigurationManager API call. */
	static readonly opGetConfigurationManager: string[] = [
		"ssm-quicksetup:GetConfigurationManager",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly opGetServiceSettings: string[] = [
		"ssm-quicksetup:GetServiceSettings",
	];
	/** IAM actions required for the ListConfigurationManagers API call. */
	static readonly ListConfigurationManagers: string[] = [
		"ssm-quicksetup:ListConfigurationManagers",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly ListConfigurations: string[] = [
		"ssm-quicksetup:ListConfigurations",
	];
	/** IAM actions required for the ListQuickSetupTypes API call. */
	static readonly ListQuickSetupTypes: string[] = [
		"ssm-quicksetup:ListQuickSetupTypes",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ssm-quicksetup:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UntagResource",
	];
	/** IAM actions required for the UpdateConfigurationDefinition API call. */
	static readonly UpdateConfigurationDefinition: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UpdateConfigurationDefinition",
	];
	/** IAM actions required for the UpdateConfigurationManager API call. */
	static readonly UpdateConfigurationManager: string[] = [
		"ssm-quicksetup:UpdateConfigurationManager",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UpdateServiceSettings: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for ssm-quicksetup.
 */
export class SSMQuicksetupConditions {
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
