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
	static readonly ASSOCIATE_USER =
		"license-manager-user-subscriptions:AssociateUser";
	/** [Write] license-manager-user-subscriptions:CreateLicenseServerEndpoint */
	static readonly CREATE_LICENSE_SERVER_ENDPOINT =
		"license-manager-user-subscriptions:CreateLicenseServerEndpoint";
	/** [Write] license-manager-user-subscriptions:DeleteLicenseServerEndpoint */
	static readonly DELETE_LICENSE_SERVER_ENDPOINT =
		"license-manager-user-subscriptions:DeleteLicenseServerEndpoint";
	/** [Write] license-manager-user-subscriptions:DeregisterIdentityProvider */
	static readonly DEREGISTER_IDENTITY_PROVIDER =
		"license-manager-user-subscriptions:DeregisterIdentityProvider";
	/** [Write] license-manager-user-subscriptions:DisassociateUser */
	static readonly DISASSOCIATE_USER =
		"license-manager-user-subscriptions:DisassociateUser";
	/** [List] license-manager-user-subscriptions:ListIdentityProviders */
	static readonly LIST_IDENTITY_PROVIDERS =
		"license-manager-user-subscriptions:ListIdentityProviders";
	/** [List] license-manager-user-subscriptions:ListInstances */
	static readonly LIST_INSTANCES =
		"license-manager-user-subscriptions:ListInstances";
	/** [List] license-manager-user-subscriptions:ListLicenseServerEndpoints */
	static readonly LIST_LICENSE_SERVER_ENDPOINTS =
		"license-manager-user-subscriptions:ListLicenseServerEndpoints";
	/** [List] license-manager-user-subscriptions:ListProductSubscriptions */
	static readonly LIST_PRODUCT_SUBSCRIPTIONS =
		"license-manager-user-subscriptions:ListProductSubscriptions";
	/** [Read] license-manager-user-subscriptions:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"license-manager-user-subscriptions:ListTagsForResource";
	/** [List] license-manager-user-subscriptions:ListUserAssociations */
	static readonly LIST_USER_ASSOCIATIONS =
		"license-manager-user-subscriptions:ListUserAssociations";
	/** [Write] license-manager-user-subscriptions:RegisterIdentityProvider */
	static readonly REGISTER_IDENTITY_PROVIDER =
		"license-manager-user-subscriptions:RegisterIdentityProvider";
	/** [Write] license-manager-user-subscriptions:StartProductSubscription */
	static readonly START_PRODUCT_SUBSCRIPTION =
		"license-manager-user-subscriptions:StartProductSubscription";
	/** [Write] license-manager-user-subscriptions:StopProductSubscription */
	static readonly STOP_PRODUCT_SUBSCRIPTION =
		"license-manager-user-subscriptions:StopProductSubscription";
	/** [Tagging] license-manager-user-subscriptions:TagResource */
	static readonly TAG_RESOURCE =
		"license-manager-user-subscriptions:TagResource";
	/** [Tagging] license-manager-user-subscriptions:UntagResource */
	static readonly UNTAG_RESOURCE =
		"license-manager-user-subscriptions:UntagResource";
	/** [Write] license-manager-user-subscriptions:UpdateIdentityProviderSettings */
	static readonly UPDATE_IDENTITY_PROVIDER_SETTINGS =
		"license-manager-user-subscriptions:UpdateIdentityProviderSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LicenseManagerUserSubscriptionsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LicenseManagerUserSubscriptionsActions.ASSOCIATE_USER,
		LicenseManagerUserSubscriptionsActions.CREATE_LICENSE_SERVER_ENDPOINT,
		LicenseManagerUserSubscriptionsActions.DELETE_LICENSE_SERVER_ENDPOINT,
		LicenseManagerUserSubscriptionsActions.DEREGISTER_IDENTITY_PROVIDER,
		LicenseManagerUserSubscriptionsActions.DISASSOCIATE_USER,
		LicenseManagerUserSubscriptionsActions.REGISTER_IDENTITY_PROVIDER,
		LicenseManagerUserSubscriptionsActions.START_PRODUCT_SUBSCRIPTION,
		LicenseManagerUserSubscriptionsActions.STOP_PRODUCT_SUBSCRIPTION,
		LicenseManagerUserSubscriptionsActions.UPDATE_IDENTITY_PROVIDER_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LicenseManagerUserSubscriptionsActions.LIST_IDENTITY_PROVIDERS,
		LicenseManagerUserSubscriptionsActions.LIST_INSTANCES,
		LicenseManagerUserSubscriptionsActions.LIST_LICENSE_SERVER_ENDPOINTS,
		LicenseManagerUserSubscriptionsActions.LIST_PRODUCT_SUBSCRIPTIONS,
		LicenseManagerUserSubscriptionsActions.LIST_USER_ASSOCIATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LicenseManagerUserSubscriptionsActions.TAG_RESOURCE,
		LicenseManagerUserSubscriptionsActions.UNTAG_RESOURCE,
	];
}

const IdentityProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):identity-provider/(?<identityProviderId>[^:/?]+)$",
);
const InstanceUserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):instance-user/(?<instanceUserId>[^:/?]+)$",
);
const LicenseServerEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):license-server-endpoint/(?<licenseServerEndpointId>[^:/?]+)$",
);
const ProductSubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager-user-subscriptions:(?<region>[^:]*):(?<account>[^:]*):product-subscription/(?<productSubscriptionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for license-manager-user-subscriptions resources.
 */
export class LicenseManagerUserSubscriptionsResources {
	/**
	 * Builds an ARN for the identity-provider resource.
	 */
	static identityProvider(props: {
		/** The IdentityProviderId component of the ARN. */
		readonly identityProviderId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIdentityProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityProviderId: string;
	} {
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
	static instanceUser(props: {
		/** The InstanceUserId component of the ARN. */
		readonly instanceUserId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInstanceUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceUserId: string;
	} {
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
	static licenseServerEndpoint(props: {
		/** The LicenseServerEndpointId component of the ARN. */
		readonly licenseServerEndpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLicenseServerEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		licenseServerEndpointId: string;
	} {
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
	static productSubscription(props: {
		/** The ProductSubscriptionId component of the ARN. */
		readonly productSubscriptionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProductSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		productSubscriptionId: string;
	} {
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
	static readonly ASSOCIATE_USER: string[] = [
		"license-manager-user-subscriptions:AssociateUser",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the CreateLicenseServerEndpoint API call. */
	static readonly CREATE_LICENSE_SERVER_ENDPOINT: string[] = [
		"license-manager-user-subscriptions:CreateLicenseServerEndpoint",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the DeleteLicenseServerEndpoint API call. */
	static readonly DELETE_LICENSE_SERVER_ENDPOINT: string[] = [
		"license-manager-user-subscriptions:DeleteLicenseServerEndpoint",
	];
	/** IAM actions required for the DeregisterIdentityProvider API call. */
	static readonly DEREGISTER_IDENTITY_PROVIDER: string[] = [
		"license-manager-user-subscriptions:DeregisterIdentityProvider",
	];
	/** IAM actions required for the DisassociateUser API call. */
	static readonly DISASSOCIATE_USER: string[] = [
		"license-manager-user-subscriptions:DisassociateUser",
	];
	/** IAM actions required for the ListIdentityProviders API call. */
	static readonly LIST_IDENTITY_PROVIDERS: string[] = [
		"license-manager-user-subscriptions:ListIdentityProviders",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = [
		"license-manager-user-subscriptions:ListInstances",
	];
	/** IAM actions required for the ListLicenseServerEndpoints API call. */
	static readonly LIST_LICENSE_SERVER_ENDPOINTS: string[] = [
		"license-manager-user-subscriptions:ListLicenseServerEndpoints",
	];
	/** IAM actions required for the ListProductSubscriptions API call. */
	static readonly LIST_PRODUCT_SUBSCRIPTIONS: string[] = [
		"license-manager-user-subscriptions:ListProductSubscriptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"license-manager-user-subscriptions:ListTagsForResource",
	];
	/** IAM actions required for the ListUserAssociations API call. */
	static readonly LIST_USER_ASSOCIATIONS: string[] = [
		"license-manager-user-subscriptions:ListUserAssociations",
	];
	/** IAM actions required for the RegisterIdentityProvider API call. */
	static readonly REGISTER_IDENTITY_PROVIDER: string[] = [
		"license-manager-user-subscriptions:RegisterIdentityProvider",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the StartProductSubscription API call. */
	static readonly START_PRODUCT_SUBSCRIPTION: string[] = [
		"license-manager-user-subscriptions:StartProductSubscription",
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the StopProductSubscription API call. */
	static readonly STOP_PRODUCT_SUBSCRIPTION: string[] = [
		"license-manager-user-subscriptions:StopProductSubscription",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"license-manager-user-subscriptions:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"license-manager-user-subscriptions:UntagResource",
	];
	/** IAM actions required for the UpdateIdentityProviderSettings API call. */
	static readonly UPDATE_IDENTITY_PROVIDER_SETTINGS: string[] = [
		"license-manager-user-subscriptions:UpdateIdentityProviderSettings",
	];
}

/**
 * Condition key constants and builders for license-manager-user-subscriptions.
 */
export class LicenseManagerUserSubscriptionsConditions {
	/** Condition keys applicable to the AssociateUser action. */
	static readonly ASSOCIATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseServerEndpoint action. */
	static readonly CREATE_LICENSE_SERVER_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterIdentityProvider action. */
	static readonly REGISTER_IDENTITY_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartProductSubscription action. */
	static readonly START_PRODUCT_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
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
