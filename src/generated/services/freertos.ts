// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/freertos.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the freertos service.
 */
export class FreertosActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "freertos";

	/** [Write] freertos:CreateSoftwareConfiguration */
	static readonly CREATE_SOFTWARE_CONFIGURATION =
		"freertos:CreateSoftwareConfiguration";
	/** [Write] freertos:CreateSubscription */
	static readonly CREATE_SUBSCRIPTION = "freertos:CreateSubscription";
	/** [Write] freertos:DeleteSoftwareConfiguration */
	static readonly DELETE_SOFTWARE_CONFIGURATION =
		"freertos:DeleteSoftwareConfiguration";
	/** [Read] freertos:DescribeHardwarePlatform */
	static readonly DESCRIBE_HARDWARE_PLATFORM =
		"freertos:DescribeHardwarePlatform";
	/** [Read] freertos:DescribeSoftwareConfiguration */
	static readonly DESCRIBE_SOFTWARE_CONFIGURATION =
		"freertos:DescribeSoftwareConfiguration";
	/** [Read] freertos:DescribeSubscription */
	static readonly DESCRIBE_SUBSCRIPTION = "freertos:DescribeSubscription";
	/** [Read] freertos:GetEmpPatchUrl */
	static readonly GET_EMP_PATCH_URL = "freertos:GetEmpPatchUrl";
	/** [Read] freertos:GetSoftwareURL */
	static readonly GET_SOFTWARE_URL = "freertos:GetSoftwareURL";
	/** [Read] freertos:GetSoftwareURLForConfiguration */
	static readonly GET_SOFTWARE_URL_FOR_CONFIGURATION =
		"freertos:GetSoftwareURLForConfiguration";
	/** [Read] freertos:GetSubscriptionBillingAmount */
	static readonly GET_SUBSCRIPTION_BILLING_AMOUNT =
		"freertos:GetSubscriptionBillingAmount";
	/** [List] freertos:ListFreeRTOSVersions */
	static readonly LIST_FREE_RTOS_VERSIONS = "freertos:ListFreeRTOSVersions";
	/** [List] freertos:ListHardwarePlatforms */
	static readonly LIST_HARDWARE_PLATFORMS = "freertos:ListHardwarePlatforms";
	/** [List] freertos:ListHardwareVendors */
	static readonly LIST_HARDWARE_VENDORS = "freertos:ListHardwareVendors";
	/** [List] freertos:ListSoftwareConfigurations */
	static readonly LIST_SOFTWARE_CONFIGURATIONS =
		"freertos:ListSoftwareConfigurations";
	/** [List] freertos:ListSoftwarePatches */
	static readonly LIST_SOFTWARE_PATCHES = "freertos:ListSoftwarePatches";
	/** [List] freertos:ListSubscriptionEmails */
	static readonly LIST_SUBSCRIPTION_EMAILS = "freertos:ListSubscriptionEmails";
	/** [List] freertos:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "freertos:ListSubscriptions";
	/** [Write] freertos:UpdateEmailRecipients */
	static readonly UPDATE_EMAIL_RECIPIENTS = "freertos:UpdateEmailRecipients";
	/** [Write] freertos:UpdateSoftwareConfiguration */
	static readonly UPDATE_SOFTWARE_CONFIGURATION =
		"freertos:UpdateSoftwareConfiguration";
	/** [Write] freertos:VerifyEmail */
	static readonly VERIFY_EMAIL = "freertos:VerifyEmail";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FreertosActions.DESCRIBE_HARDWARE_PLATFORM,
		FreertosActions.DESCRIBE_SOFTWARE_CONFIGURATION,
		FreertosActions.DESCRIBE_SUBSCRIPTION,
		FreertosActions.GET_EMP_PATCH_URL,
		FreertosActions.GET_SOFTWARE_URL,
		FreertosActions.GET_SOFTWARE_URL_FOR_CONFIGURATION,
		FreertosActions.GET_SUBSCRIPTION_BILLING_AMOUNT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FreertosActions.CREATE_SOFTWARE_CONFIGURATION,
		FreertosActions.CREATE_SUBSCRIPTION,
		FreertosActions.DELETE_SOFTWARE_CONFIGURATION,
		FreertosActions.UPDATE_EMAIL_RECIPIENTS,
		FreertosActions.UPDATE_SOFTWARE_CONFIGURATION,
		FreertosActions.VERIFY_EMAIL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FreertosActions.LIST_FREE_RTOS_VERSIONS,
		FreertosActions.LIST_HARDWARE_PLATFORMS,
		FreertosActions.LIST_HARDWARE_VENDORS,
		FreertosActions.LIST_SOFTWARE_CONFIGURATIONS,
		FreertosActions.LIST_SOFTWARE_PATCHES,
		FreertosActions.LIST_SUBSCRIPTION_EMAILS,
		FreertosActions.LIST_SUBSCRIPTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):freertos:(?<region>[^:]*):(?<account>[^:]*):configuration/(?<configurationName>[^:/?]+)$",
);
const SubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):freertos:(?<region>[^:]*):(?<account>[^:]*):subscription/(?<subscriptionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for freertos resources.
 */
export class FreertosResources {
	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: {
		/** The ConfigurationName component of the ARN. */
		readonly configurationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:freertos:${props.region ?? "*"}:${props.account ?? "*"}:configuration/${props.configurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration resource.
	 */
	static isValidConfigurationArn(arn: string): boolean {
		return ConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationName: string;
	} {
		const match = ConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationName: match.groups!.configurationName,
		};
	}

	/**
	 * Builds an ARN for the subscription resource.
	 */
	static subscription(props: {
		/** The SubscriptionID component of the ARN. */
		readonly subscriptionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:freertos:${props.region ?? "*"}:${props.account ?? "*"}:subscription/${props.subscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscription resource.
	 */
	static isValidSubscriptionArn(arn: string): boolean {
		return SubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriptionId: string;
	} {
		const match = SubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriptionId: match.groups!.subscriptionId,
		};
	}
}

/**
 * Condition key constants and builders for freertos.
 */
export class FreertosConditions {
	/** Condition keys applicable to the CreateSoftwareConfiguration action. */
	static readonly CREATE_SOFTWARE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscription action. */
	static readonly CREATE_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
