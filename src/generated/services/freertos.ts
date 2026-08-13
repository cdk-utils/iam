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
	static readonly CreateSoftwareConfiguration =
		"freertos:CreateSoftwareConfiguration";
	/** [Write] freertos:CreateSubscription */
	static readonly CreateSubscription = "freertos:CreateSubscription";
	/** [Write] freertos:DeleteSoftwareConfiguration */
	static readonly DeleteSoftwareConfiguration =
		"freertos:DeleteSoftwareConfiguration";
	/** [Read] freertos:DescribeHardwarePlatform */
	static readonly DescribeHardwarePlatform =
		"freertos:DescribeHardwarePlatform";
	/** [Read] freertos:DescribeSoftwareConfiguration */
	static readonly DescribeSoftwareConfiguration =
		"freertos:DescribeSoftwareConfiguration";
	/** [Read] freertos:DescribeSubscription */
	static readonly DescribeSubscription = "freertos:DescribeSubscription";
	/** [Read] freertos:GetEmpPatchUrl */
	static readonly actionGetEmpPatchUrl = "freertos:GetEmpPatchUrl";
	/** [Read] freertos:GetSoftwareURL */
	static readonly actionGetSoftwareURL = "freertos:GetSoftwareURL";
	/** [Read] freertos:GetSoftwareURLForConfiguration */
	static readonly actionGetSoftwareURLForConfiguration =
		"freertos:GetSoftwareURLForConfiguration";
	/** [Read] freertos:GetSubscriptionBillingAmount */
	static readonly actionGetSubscriptionBillingAmount =
		"freertos:GetSubscriptionBillingAmount";
	/** [List] freertos:ListFreeRTOSVersions */
	static readonly ListFreeRTOSVersions = "freertos:ListFreeRTOSVersions";
	/** [List] freertos:ListHardwarePlatforms */
	static readonly ListHardwarePlatforms = "freertos:ListHardwarePlatforms";
	/** [List] freertos:ListHardwareVendors */
	static readonly ListHardwareVendors = "freertos:ListHardwareVendors";
	/** [List] freertos:ListSoftwareConfigurations */
	static readonly ListSoftwareConfigurations =
		"freertos:ListSoftwareConfigurations";
	/** [List] freertos:ListSoftwarePatches */
	static readonly ListSoftwarePatches = "freertos:ListSoftwarePatches";
	/** [List] freertos:ListSubscriptionEmails */
	static readonly ListSubscriptionEmails = "freertos:ListSubscriptionEmails";
	/** [List] freertos:ListSubscriptions */
	static readonly ListSubscriptions = "freertos:ListSubscriptions";
	/** [Write] freertos:UpdateEmailRecipients */
	static readonly UpdateEmailRecipients = "freertos:UpdateEmailRecipients";
	/** [Write] freertos:UpdateSoftwareConfiguration */
	static readonly UpdateSoftwareConfiguration =
		"freertos:UpdateSoftwareConfiguration";
	/** [Write] freertos:VerifyEmail */
	static readonly VerifyEmail = "freertos:VerifyEmail";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FreertosActions.DescribeHardwarePlatform,
		FreertosActions.DescribeSoftwareConfiguration,
		FreertosActions.DescribeSubscription,
		FreertosActions.actionGetEmpPatchUrl,
		FreertosActions.actionGetSoftwareURL,
		FreertosActions.actionGetSoftwareURLForConfiguration,
		FreertosActions.actionGetSubscriptionBillingAmount,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FreertosActions.CreateSoftwareConfiguration,
		FreertosActions.CreateSubscription,
		FreertosActions.DeleteSoftwareConfiguration,
		FreertosActions.UpdateEmailRecipients,
		FreertosActions.UpdateSoftwareConfiguration,
		FreertosActions.VerifyEmail,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FreertosActions.ListFreeRTOSVersions,
		FreertosActions.ListHardwarePlatforms,
		FreertosActions.ListHardwareVendors,
		FreertosActions.ListSoftwareConfigurations,
		FreertosActions.ListSoftwarePatches,
		FreertosActions.ListSubscriptionEmails,
		FreertosActions.ListSubscriptions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a configuration ARN.
 */
export interface FreertosConfigurationArnProps {
	/** The ConfigurationName component of the ARN. */
	readonly configurationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration ARN.
 */
export interface FreertosConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationName component. */
	readonly configurationName: string;
}

/**
 * Properties for building a subscription ARN.
 */
export interface FreertosSubscriptionArnProps {
	/** The SubscriptionID component of the ARN. */
	readonly subscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscription ARN.
 */
export interface FreertosSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionID component. */
	readonly subscriptionId: string;
}

const ConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):freertos:(?<region>[^:]*):(?<account>[^:]*):configuration\/(?<configurationName>[^:/?]+)$/;
const SubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):freertos:(?<region>[^:]*):(?<account>[^:]*):subscription\/(?<subscriptionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for freertos resources.
 */
export class FreertosResources {
	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: FreertosConfigurationArnProps): string {
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
	static parseConfigurationArn(
		arn: string,
	): FreertosConfigurationArnComponents {
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
	static subscription(props: FreertosSubscriptionArnProps): string {
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
	static parseSubscriptionArn(arn: string): FreertosSubscriptionArnComponents {
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
	static readonly CreateSoftwareConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscription action. */
	static readonly CreateSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
