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
	static readonly DeregisterSubscriptionProvider =
		"license-manager-linux-subscriptions:DeregisterSubscriptionProvider";
	/** [Read] license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider */
	static readonly actionGetRegisteredSubscriptionProvider =
		"license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider";
	/** [Read] license-manager-linux-subscriptions:GetServiceSettings */
	static readonly actionGetServiceSettings =
		"license-manager-linux-subscriptions:GetServiceSettings";
	/** [Read] license-manager-linux-subscriptions:ListLinuxSubscriptionInstances */
	static readonly ListLinuxSubscriptionInstances =
		"license-manager-linux-subscriptions:ListLinuxSubscriptionInstances";
	/** [Read] license-manager-linux-subscriptions:ListLinuxSubscriptions */
	static readonly ListLinuxSubscriptions =
		"license-manager-linux-subscriptions:ListLinuxSubscriptions";
	/** [Read] license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders */
	static readonly ListRegisteredSubscriptionProviders =
		"license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders";
	/** [Read] license-manager-linux-subscriptions:ListTagsForResource */
	static readonly ListTagsForResource =
		"license-manager-linux-subscriptions:ListTagsForResource";
	/** [Write] license-manager-linux-subscriptions:RegisterSubscriptionProvider */
	static readonly RegisterSubscriptionProvider =
		"license-manager-linux-subscriptions:RegisterSubscriptionProvider";
	/** [Tagging] license-manager-linux-subscriptions:TagResource */
	static readonly TagResource =
		"license-manager-linux-subscriptions:TagResource";
	/** [Tagging] license-manager-linux-subscriptions:UntagResource */
	static readonly UntagResource =
		"license-manager-linux-subscriptions:UntagResource";
	/** [Write] license-manager-linux-subscriptions:UpdateServiceSettings */
	static readonly UpdateServiceSettings =
		"license-manager-linux-subscriptions:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LicenseManagerLinuxSubscriptionsActions.actionGetRegisteredSubscriptionProvider,
		LicenseManagerLinuxSubscriptionsActions.actionGetServiceSettings,
		LicenseManagerLinuxSubscriptionsActions.ListLinuxSubscriptionInstances,
		LicenseManagerLinuxSubscriptionsActions.ListLinuxSubscriptions,
		LicenseManagerLinuxSubscriptionsActions.ListRegisteredSubscriptionProviders,
		LicenseManagerLinuxSubscriptionsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LicenseManagerLinuxSubscriptionsActions.DeregisterSubscriptionProvider,
		LicenseManagerLinuxSubscriptionsActions.RegisterSubscriptionProvider,
		LicenseManagerLinuxSubscriptionsActions.UpdateServiceSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LicenseManagerLinuxSubscriptionsActions.TagResource,
		LicenseManagerLinuxSubscriptionsActions.UntagResource,
	];
}

/**
 * Properties for building a subscription-provider ARN.
 */
export interface LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps {
	/** The SubscriptionProviderId component of the ARN. */
	readonly subscriptionProviderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscription-provider ARN.
 */
export interface LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionProviderId component. */
	readonly subscriptionProviderId: string;
}

const SubscriptionProviderArnRegex =
	/^arn:(?<partition>[^:]+):license-manager-linux-subscriptions:(?<region>[^:]*):(?<account>[^:]*):subscription-provider\/(?<subscriptionProviderId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for license-manager-linux-subscriptions resources.
 */
export class LicenseManagerLinuxSubscriptionsResources {
	/**
	 * Builds an ARN for the subscription-provider resource.
	 */
	static subscriptionProvider(
		props: LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps,
	): string {
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
	static parseSubscriptionProviderArn(
		arn: string,
	): LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents {
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
	static readonly DeregisterSubscriptionProvider: string[] = [
		"license-manager-linux-subscriptions:DeregisterSubscriptionProvider",
	];
	/** IAM actions required for the GetRegisteredSubscriptionProvider API call. */
	static readonly opGetRegisteredSubscriptionProvider: string[] = [
		"license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly opGetServiceSettings: string[] = [
		"license-manager-linux-subscriptions:GetServiceSettings",
	];
	/** IAM actions required for the ListLinuxSubscriptionInstances API call. */
	static readonly ListLinuxSubscriptionInstances: string[] = [
		"license-manager-linux-subscriptions:ListLinuxSubscriptionInstances",
	];
	/** IAM actions required for the ListLinuxSubscriptions API call. */
	static readonly ListLinuxSubscriptions: string[] = [
		"license-manager-linux-subscriptions:ListLinuxSubscriptions",
	];
	/** IAM actions required for the ListRegisteredSubscriptionProviders API call. */
	static readonly ListRegisteredSubscriptionProviders: string[] = [
		"license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"license-manager-linux-subscriptions:ListTagsForResource",
	];
	/** IAM actions required for the RegisterSubscriptionProvider API call. */
	static readonly RegisterSubscriptionProvider: string[] = [
		"license-manager-linux-subscriptions:RegisterSubscriptionProvider",
		"license-manager-linux-subscriptions:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"license-manager-linux-subscriptions:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"license-manager-linux-subscriptions:UntagResource",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UpdateServiceSettings: string[] = [
		"license-manager-linux-subscriptions:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for license-manager-linux-subscriptions.
 */
export class LicenseManagerLinuxSubscriptionsConditions {
	/** Condition keys applicable to the RegisterSubscriptionProvider action. */
	static readonly RegisterSubscriptionProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
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
