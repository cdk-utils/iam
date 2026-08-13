// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/license-manager-linux-subscriptions.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the license-manager-linux-subscriptions service.
 */
export class LicenseManagerLinuxSubscriptionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "license-manager-linux-subscriptions";

	/** [Write] license-manager-linux-subscriptions:DeregisterSubscriptionProvider */
	static readonly DEREGISTER_SUBSCRIPTION_PROVIDER =
		"license-manager-linux-subscriptions:DeregisterSubscriptionProvider";
	/** [Read] license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider */
	static readonly GET_REGISTERED_SUBSCRIPTION_PROVIDER =
		"license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider";
	/** [Read] license-manager-linux-subscriptions:GetServiceSettings */
	static readonly GET_SERVICE_SETTINGS =
		"license-manager-linux-subscriptions:GetServiceSettings";
	/** [Read] license-manager-linux-subscriptions:ListLinuxSubscriptionInstances */
	static readonly LIST_LINUX_SUBSCRIPTION_INSTANCES =
		"license-manager-linux-subscriptions:ListLinuxSubscriptionInstances";
	/** [Read] license-manager-linux-subscriptions:ListLinuxSubscriptions */
	static readonly LIST_LINUX_SUBSCRIPTIONS =
		"license-manager-linux-subscriptions:ListLinuxSubscriptions";
	/** [Read] license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders */
	static readonly LIST_REGISTERED_SUBSCRIPTION_PROVIDERS =
		"license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders";
	/** [Read] license-manager-linux-subscriptions:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"license-manager-linux-subscriptions:ListTagsForResource";
	/** [Write] license-manager-linux-subscriptions:RegisterSubscriptionProvider */
	static readonly REGISTER_SUBSCRIPTION_PROVIDER =
		"license-manager-linux-subscriptions:RegisterSubscriptionProvider";
	/** [Tagging] license-manager-linux-subscriptions:TagResource */
	static readonly TAG_RESOURCE =
		"license-manager-linux-subscriptions:TagResource";
	/** [Tagging] license-manager-linux-subscriptions:UntagResource */
	static readonly UNTAG_RESOURCE =
		"license-manager-linux-subscriptions:UntagResource";
	/** [Write] license-manager-linux-subscriptions:UpdateServiceSettings */
	static readonly UPDATE_SERVICE_SETTINGS =
		"license-manager-linux-subscriptions:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LicenseManagerLinuxSubscriptionsActions.GET_REGISTERED_SUBSCRIPTION_PROVIDER,
		LicenseManagerLinuxSubscriptionsActions.GET_SERVICE_SETTINGS,
		LicenseManagerLinuxSubscriptionsActions.LIST_LINUX_SUBSCRIPTION_INSTANCES,
		LicenseManagerLinuxSubscriptionsActions.LIST_LINUX_SUBSCRIPTIONS,
		LicenseManagerLinuxSubscriptionsActions.LIST_REGISTERED_SUBSCRIPTION_PROVIDERS,
		LicenseManagerLinuxSubscriptionsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LicenseManagerLinuxSubscriptionsActions.DEREGISTER_SUBSCRIPTION_PROVIDER,
		LicenseManagerLinuxSubscriptionsActions.REGISTER_SUBSCRIPTION_PROVIDER,
		LicenseManagerLinuxSubscriptionsActions.UPDATE_SERVICE_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LicenseManagerLinuxSubscriptionsActions.TAG_RESOURCE,
		LicenseManagerLinuxSubscriptionsActions.UNTAG_RESOURCE,
	];
}

const SubscriptionProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager-linux-subscriptions:(?<region>[^:]*):(?<account>[^:]*):subscription-provider/(?<subscriptionProviderId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for license-manager-linux-subscriptions resources.
 */
export class LicenseManagerLinuxSubscriptionsResources {
	/**
	 * Builds an ARN for the subscription-provider resource.
	 */
	static subscriptionProvider(props: {
		/** The SubscriptionProviderId component of the ARN. */
		readonly subscriptionProviderId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager-linux-subscriptions:${props.region ?? "*"}:${props.account ?? "*"}:subscription-provider/${props.subscriptionProviderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscription-provider resource.
	 */
	static isValidSubscriptionProviderArn(arn: string): boolean {
		return SubscriptionProviderArnRegex.test(arn);
	}

	/**
	 * Parses a subscription-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriptionProviderId: string;
	} {
		const match = SubscriptionProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscription-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriptionProviderId: match.groups!.subscriptionProviderId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for license-manager-linux-subscriptions.
 */
export class LicenseManagerLinuxSubscriptionsOperations {
	/** IAM actions required for the DeregisterSubscriptionProvider API call. */
	static readonly DEREGISTER_SUBSCRIPTION_PROVIDER: string[] = [
		"license-manager-linux-subscriptions:DeregisterSubscriptionProvider",
	];
	/** IAM actions required for the GetRegisteredSubscriptionProvider API call. */
	static readonly GET_REGISTERED_SUBSCRIPTION_PROVIDER: string[] = [
		"license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly GET_SERVICE_SETTINGS: string[] = [
		"license-manager-linux-subscriptions:GetServiceSettings",
	];
	/** IAM actions required for the ListLinuxSubscriptionInstances API call. */
	static readonly LIST_LINUX_SUBSCRIPTION_INSTANCES: string[] = [
		"license-manager-linux-subscriptions:ListLinuxSubscriptionInstances",
	];
	/** IAM actions required for the ListLinuxSubscriptions API call. */
	static readonly LIST_LINUX_SUBSCRIPTIONS: string[] = [
		"license-manager-linux-subscriptions:ListLinuxSubscriptions",
	];
	/** IAM actions required for the ListRegisteredSubscriptionProviders API call. */
	static readonly LIST_REGISTERED_SUBSCRIPTION_PROVIDERS: string[] = [
		"license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"license-manager-linux-subscriptions:ListTagsForResource",
	];
	/** IAM actions required for the RegisterSubscriptionProvider API call. */
	static readonly REGISTER_SUBSCRIPTION_PROVIDER: string[] = [
		"license-manager-linux-subscriptions:RegisterSubscriptionProvider",
		"license-manager-linux-subscriptions:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"license-manager-linux-subscriptions:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"license-manager-linux-subscriptions:UntagResource",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UPDATE_SERVICE_SETTINGS: string[] = [
		"license-manager-linux-subscriptions:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for license-manager-linux-subscriptions.
 */
export class LicenseManagerLinuxSubscriptionsConditions {
	/** Condition keys applicable to the RegisterSubscriptionProvider action. */
	static readonly REGISTER_SUBSCRIPTION_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
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
