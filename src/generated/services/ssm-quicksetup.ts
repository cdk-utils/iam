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
	static readonly CREATE_CONFIGURATION_MANAGER =
		"ssm-quicksetup:CreateConfigurationManager";
	/** [Write] ssm-quicksetup:DeleteConfigurationManager */
	static readonly DELETE_CONFIGURATION_MANAGER =
		"ssm-quicksetup:DeleteConfigurationManager";
	/** [Read] ssm-quicksetup:GetConfiguration */
	static readonly GET_CONFIGURATION = "ssm-quicksetup:GetConfiguration";
	/** [Read] ssm-quicksetup:GetConfigurationManager */
	static readonly GET_CONFIGURATION_MANAGER =
		"ssm-quicksetup:GetConfigurationManager";
	/** [Read] ssm-quicksetup:GetServiceSettings */
	static readonly GET_SERVICE_SETTINGS = "ssm-quicksetup:GetServiceSettings";
	/** [List] ssm-quicksetup:ListConfigurationManagers */
	static readonly LIST_CONFIGURATION_MANAGERS =
		"ssm-quicksetup:ListConfigurationManagers";
	/** [List] ssm-quicksetup:ListConfigurations */
	static readonly LIST_CONFIGURATIONS = "ssm-quicksetup:ListConfigurations";
	/** [Read] ssm-quicksetup:ListQuickSetupTypes */
	static readonly LIST_QUICK_SETUP_TYPES = "ssm-quicksetup:ListQuickSetupTypes";
	/** [Read] ssm-quicksetup:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ssm-quicksetup:ListTagsForResource";
	/** [Tagging] ssm-quicksetup:TagResource */
	static readonly TAG_RESOURCE = "ssm-quicksetup:TagResource";
	/** [Tagging] ssm-quicksetup:UntagResource */
	static readonly UNTAG_RESOURCE = "ssm-quicksetup:UntagResource";
	/** [Write] ssm-quicksetup:UpdateConfigurationDefinition */
	static readonly UPDATE_CONFIGURATION_DEFINITION =
		"ssm-quicksetup:UpdateConfigurationDefinition";
	/** [Write] ssm-quicksetup:UpdateConfigurationManager */
	static readonly UPDATE_CONFIGURATION_MANAGER =
		"ssm-quicksetup:UpdateConfigurationManager";
	/** [Write] ssm-quicksetup:UpdateServiceSettings */
	static readonly UPDATE_SERVICE_SETTINGS =
		"ssm-quicksetup:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSMQuicksetupActions.GET_CONFIGURATION,
		SSMQuicksetupActions.GET_CONFIGURATION_MANAGER,
		SSMQuicksetupActions.GET_SERVICE_SETTINGS,
		SSMQuicksetupActions.LIST_QUICK_SETUP_TYPES,
		SSMQuicksetupActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSMQuicksetupActions.CREATE_CONFIGURATION_MANAGER,
		SSMQuicksetupActions.DELETE_CONFIGURATION_MANAGER,
		SSMQuicksetupActions.UPDATE_CONFIGURATION_DEFINITION,
		SSMQuicksetupActions.UPDATE_CONFIGURATION_MANAGER,
		SSMQuicksetupActions.UPDATE_SERVICE_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSMQuicksetupActions.LIST_CONFIGURATION_MANAGERS,
		SSMQuicksetupActions.LIST_CONFIGURATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SSMQuicksetupActions.TAG_RESOURCE,
		SSMQuicksetupActions.UNTAG_RESOURCE,
	];
}

const ConfigurationManagerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-quicksetup:(?<region>[^:]*):(?<account>[^:]*):configuration-manager/(?<configurationManagerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ssm-quicksetup resources.
 */
export class SSMQuicksetupResources {
	/**
	 * Builds an ARN for the configuration-manager resource.
	 */
	static configurationManager(props: {
		/** The ConfigurationManagerId component of the ARN. */
		readonly configurationManagerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConfigurationManagerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationManagerId: string;
	} {
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
	static readonly CREATE_CONFIGURATION_MANAGER: string[] = [
		"ssm-quicksetup:CreateConfigurationManager",
		"iam:PassRole",
		"ssm-quicksetup:TagResource",
	];
	/** IAM actions required for the DeleteConfigurationManager API call. */
	static readonly DELETE_CONFIGURATION_MANAGER: string[] = [
		"ssm-quicksetup:DeleteConfigurationManager",
		"iam:PassRole",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly GET_CONFIGURATION: string[] = [
		"ssm-quicksetup:GetConfiguration",
	];
	/** IAM actions required for the GetConfigurationManager API call. */
	static readonly GET_CONFIGURATION_MANAGER: string[] = [
		"ssm-quicksetup:GetConfigurationManager",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly GET_SERVICE_SETTINGS: string[] = [
		"ssm-quicksetup:GetServiceSettings",
	];
	/** IAM actions required for the ListConfigurationManagers API call. */
	static readonly LIST_CONFIGURATION_MANAGERS: string[] = [
		"ssm-quicksetup:ListConfigurationManagers",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly LIST_CONFIGURATIONS: string[] = [
		"ssm-quicksetup:ListConfigurations",
	];
	/** IAM actions required for the ListQuickSetupTypes API call. */
	static readonly LIST_QUICK_SETUP_TYPES: string[] = [
		"ssm-quicksetup:ListQuickSetupTypes",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ssm-quicksetup:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UntagResource",
	];
	/** IAM actions required for the UpdateConfigurationDefinition API call. */
	static readonly UPDATE_CONFIGURATION_DEFINITION: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UpdateConfigurationDefinition",
	];
	/** IAM actions required for the UpdateConfigurationManager API call. */
	static readonly UPDATE_CONFIGURATION_MANAGER: string[] = [
		"ssm-quicksetup:UpdateConfigurationManager",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UPDATE_SERVICE_SETTINGS: string[] = [
		"iam:PassRole",
		"ssm-quicksetup:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for ssm-quicksetup.
 */
export class SSMQuicksetupConditions {
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
