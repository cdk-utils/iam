// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/license-manager-user-subscriptions.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the license-manager-user-subscriptions service.
 */
export class LicenseManagerUserSubscriptionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "license-manager-user-subscriptions";

	/** [Write] license-manager-user-subscriptions:AssociateUser */
	static readonly AssociateUser =
		"license-manager-user-subscriptions:AssociateUser";
	/** [Write] license-manager-user-subscriptions:CreateLicenseServerEndpoint */
	static readonly CreateLicenseServerEndpoint =
		"license-manager-user-subscriptions:CreateLicenseServerEndpoint";
	/** [Write] license-manager-user-subscriptions:DeleteLicenseServerEndpoint */
	static readonly DeleteLicenseServerEndpoint =
		"license-manager-user-subscriptions:DeleteLicenseServerEndpoint";
	/** [Write] license-manager-user-subscriptions:DeregisterIdentityProvider */
	static readonly DeregisterIdentityProvider =
		"license-manager-user-subscriptions:DeregisterIdentityProvider";
	/** [Write] license-manager-user-subscriptions:DisassociateUser */
	static readonly DisassociateUser =
		"license-manager-user-subscriptions:DisassociateUser";
	/** [List] license-manager-user-subscriptions:ListIdentityProviders */
	static readonly ListIdentityProviders =
		"license-manager-user-subscriptions:ListIdentityProviders";
	/** [List] license-manager-user-subscriptions:ListInstances */
	static readonly ListInstances =
		"license-manager-user-subscriptions:ListInstances";
	/** [List] license-manager-user-subscriptions:ListLicenseServerEndpoints */
	static readonly ListLicenseServerEndpoints =
		"license-manager-user-subscriptions:ListLicenseServerEndpoints";
	/** [List] license-manager-user-subscriptions:ListProductSubscriptions */
	static readonly ListProductSubscriptions =
		"license-manager-user-subscriptions:ListProductSubscriptions";
	/** [Read] license-manager-user-subscriptions:ListTagsForResource */
	static readonly ListTagsForResource =
		"license-manager-user-subscriptions:ListTagsForResource";
	/** [List] license-manager-user-subscriptions:ListUserAssociations */
	static readonly ListUserAssociations =
		"license-manager-user-subscriptions:ListUserAssociations";
	/** [Write] license-manager-user-subscriptions:RegisterIdentityProvider */
	static readonly RegisterIdentityProvider =
		"license-manager-user-subscriptions:RegisterIdentityProvider";
	/** [Write] license-manager-user-subscriptions:StartProductSubscription */
	static readonly StartProductSubscription =
		"license-manager-user-subscriptions:StartProductSubscription";
	/** [Write] license-manager-user-subscriptions:StopProductSubscription */
	static readonly StopProductSubscription =
		"license-manager-user-subscriptions:StopProductSubscription";
	/** [Tagging] license-manager-user-subscriptions:TagResource */
	static readonly TagResource =
		"license-manager-user-subscriptions:TagResource";
	/** [Tagging] license-manager-user-subscriptions:UntagResource */
	static readonly UntagResource =
		"license-manager-user-subscriptions:UntagResource";
	/** [Write] license-manager-user-subscriptions:UpdateIdentityProviderSettings */
	static readonly UpdateIdentityProviderSettings =
		"license-manager-user-subscriptions:UpdateIdentityProviderSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LicenseManagerUserSubscriptionsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LicenseManagerUserSubscriptionsActions.AssociateUser,
		LicenseManagerUserSubscriptionsActions.CreateLicenseServerEndpoint,
		LicenseManagerUserSubscriptionsActions.DeleteLicenseServerEndpoint,
		LicenseManagerUserSubscriptionsActions.DeregisterIdentityProvider,
		LicenseManagerUserSubscriptionsActions.DisassociateUser,
		LicenseManagerUserSubscriptionsActions.RegisterIdentityProvider,
		LicenseManagerUserSubscriptionsActions.StartProductSubscription,
		LicenseManagerUserSubscriptionsActions.StopProductSubscription,
		LicenseManagerUserSubscriptionsActions.UpdateIdentityProviderSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LicenseManagerUserSubscriptionsActions.ListIdentityProviders,
		LicenseManagerUserSubscriptionsActions.ListInstances,
		LicenseManagerUserSubscriptionsActions.ListLicenseServerEndpoints,
		LicenseManagerUserSubscriptionsActions.ListProductSubscriptions,
		LicenseManagerUserSubscriptionsActions.ListUserAssociations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LicenseManagerUserSubscriptionsActions.TagResource,
		LicenseManagerUserSubscriptionsActions.UntagResource,
	];
}

/**
 * Properties for building a identity-provider ARN.
 */
export interface LicenseManagerUserSubscriptionsIdentityProviderArnProps {
	/** The IdentityProviderId component of the ARN. */
	readonly identityProviderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identity-provider ARN.
 */
export interface LicenseManagerUserSubscriptionsIdentityProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityProviderId component. */
	readonly identityProviderId: string;
}

/**
 * Properties for building a instance-user ARN.
 */
export interface LicenseManagerUserSubscriptionsInstanceUserArnProps {
	/** The InstanceUserId component of the ARN. */
	readonly instanceUserId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance-user ARN.
 */
export interface LicenseManagerUserSubscriptionsInstanceUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceUserId component. */
	readonly instanceUserId: string;
}

/**
 * Properties for building a license-server-endpoint ARN.
 */
export interface LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps {
	/** The LicenseServerEndpointId component of the ARN. */
	readonly licenseServerEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license-server-endpoint ARN.
 */
export interface LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseServerEndpointId component. */
	readonly licenseServerEndpointId: string;
}

/**
 * Properties for building a product-subscription ARN.
 */
export interface LicenseManagerUserSubscriptionsProductSubscriptionArnProps {
	/** The ProductSubscriptionId component of the ARN. */
	readonly productSubscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a product-subscription ARN.
 */
export interface LicenseManagerUserSubscriptionsProductSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductSubscriptionId component. */
	readonly productSubscriptionId: string;
}

const IdentityProviderArnRegex =
	/^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):identity-provider\/(?<identityProviderId>[^:/?]+)$/;
const InstanceUserArnRegex =
	/^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):instance-user\/(?<instanceUserId>[^:/?]+)$/;
const LicenseServerEndpointArnRegex =
	/^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):license-server-endpoint\/(?<licenseServerEndpointId>[^:/?]+)$/;
const ProductSubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):product-subscription\/(?<productSubscriptionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for license-manager-user-subscriptions resources.
 */
export class LicenseManagerUserSubscriptionsResources {
	/**
	 * Builds an ARN for the identity-provider resource.
	 */
	static identityProvider(
		props: LicenseManagerUserSubscriptionsIdentityProviderArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:license-manager-user-subscriptions:${props.region ?? "*"}:${props.account ?? "*"}:identity-provider/${props.identityProviderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identity-provider resource.
	 */
	static isValidIdentityProviderArn(arn: string): boolean {
		return IdentityProviderArnRegex.test(arn);
	}

	/**
	 * Parses a identity-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentityProviderArn(
		arn: string,
	): LicenseManagerUserSubscriptionsIdentityProviderArnComponents {
		const match = IdentityProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identity-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityProviderId: match.groups!.identityProviderId,
		};
	}

	/**
	 * Builds an ARN for the instance-user resource.
	 */
	static instanceUser(
		props: LicenseManagerUserSubscriptionsInstanceUserArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:license-manager-user-subscriptions:${props.region ?? "*"}:${props.account ?? "*"}:instance-user/${props.instanceUserId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance-user resource.
	 */
	static isValidInstanceUserArn(arn: string): boolean {
		return InstanceUserArnRegex.test(arn);
	}

	/**
	 * Parses a instance-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceUserArn(
		arn: string,
	): LicenseManagerUserSubscriptionsInstanceUserArnComponents {
		const match = InstanceUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceUserId: match.groups!.instanceUserId,
		};
	}

	/**
	 * Builds an ARN for the license-server-endpoint resource.
	 */
	static licenseServerEndpoint(
		props: LicenseManagerUserSubscriptionsLicenseServerEndpointArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:license-manager-user-subscriptions:${props.region ?? "*"}:${props.account ?? "*"}:license-server-endpoint/${props.licenseServerEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license-server-endpoint resource.
	 */
	static isValidLicenseServerEndpointArn(arn: string): boolean {
		return LicenseServerEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a license-server-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseServerEndpointArn(
		arn: string,
	): LicenseManagerUserSubscriptionsLicenseServerEndpointArnComponents {
		const match = LicenseServerEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license-server-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			licenseServerEndpointId: match.groups!.licenseServerEndpointId,
		};
	}

	/**
	 * Builds an ARN for the product-subscription resource.
	 */
	static productSubscription(
		props: LicenseManagerUserSubscriptionsProductSubscriptionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:license-manager-user-subscriptions:${props.region ?? "*"}:${props.account ?? "*"}:product-subscription/${props.productSubscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the product-subscription resource.
	 */
	static isValidProductSubscriptionArn(arn: string): boolean {
		return ProductSubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a product-subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductSubscriptionArn(
		arn: string,
	): LicenseManagerUserSubscriptionsProductSubscriptionArnComponents {
		const match = ProductSubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid product-subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productSubscriptionId: match.groups!.productSubscriptionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for license-manager-user-subscriptions.
 */
export class LicenseManagerUserSubscriptionsOperations {
	/** IAM actions required for the AssociateUser API call. */
	static readonly AssociateUser: string[] = [
		"license-manager-user-subscriptions:AssociateUser",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the CreateLicenseServerEndpoint API call. */
	static readonly CreateLicenseServerEndpoint: string[] = [
		"license-manager-user-subscriptions:CreateLicenseServerEndpoint",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the DeleteLicenseServerEndpoint API call. */
	static readonly DeleteLicenseServerEndpoint: string[] = [
		"license-manager-user-subscriptions:DeleteLicenseServerEndpoint",
	];
	/** IAM actions required for the DeregisterIdentityProvider API call. */
	static readonly DeregisterIdentityProvider: string[] = [
		"license-manager-user-subscriptions:DeregisterIdentityProvider",
	];
	/** IAM actions required for the DisassociateUser API call. */
	static readonly DisassociateUser: string[] = [
		"license-manager-user-subscriptions:DisassociateUser",
	];
	/** IAM actions required for the ListIdentityProviders API call. */
	static readonly ListIdentityProviders: string[] = [
		"license-manager-user-subscriptions:ListIdentityProviders",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = [
		"license-manager-user-subscriptions:ListInstances",
	];
	/** IAM actions required for the ListLicenseServerEndpoints API call. */
	static readonly ListLicenseServerEndpoints: string[] = [
		"license-manager-user-subscriptions:ListLicenseServerEndpoints",
	];
	/** IAM actions required for the ListProductSubscriptions API call. */
	static readonly ListProductSubscriptions: string[] = [
		"license-manager-user-subscriptions:ListProductSubscriptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"license-manager-user-subscriptions:ListTagsForResource",
	];
	/** IAM actions required for the ListUserAssociations API call. */
	static readonly ListUserAssociations: string[] = [
		"license-manager-user-subscriptions:ListUserAssociations",
	];
	/** IAM actions required for the RegisterIdentityProvider API call. */
	static readonly RegisterIdentityProvider: string[] = [
		"license-manager-user-subscriptions:RegisterIdentityProvider",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the StartProductSubscription API call. */
	static readonly StartProductSubscription: string[] = [
		"license-manager-user-subscriptions:StartProductSubscription",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the StopProductSubscription API call. */
	static readonly StopProductSubscription: string[] = [
		"license-manager-user-subscriptions:StopProductSubscription",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"license-manager-user-subscriptions:UntagResource",
	];
	/** IAM actions required for the UpdateIdentityProviderSettings API call. */
	static readonly UpdateIdentityProviderSettings: string[] = [
		"license-manager-user-subscriptions:UpdateIdentityProviderSettings",
	];
}

/**
 * Condition key constants and builders for license-manager-user-subscriptions.
 */
export class LicenseManagerUserSubscriptionsConditions {
	/** Condition keys applicable to the AssociateUser action. */
	static readonly AssociateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseServerEndpoint action. */
	static readonly CreateLicenseServerEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterIdentityProvider action. */
	static readonly RegisterIdentityProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartProductSubscription action. */
	static readonly StartProductSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
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
