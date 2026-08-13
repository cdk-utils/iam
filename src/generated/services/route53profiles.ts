// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53profiles.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53profiles service.
 */
export class Route53profilesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53profiles";

	/** [Write] route53profiles:AssociateProfile */
	static readonly ASSOCIATE_PROFILE = "route53profiles:AssociateProfile";
	/** [Write] route53profiles:AssociateResourceToProfile */
	static readonly ASSOCIATE_RESOURCE_TO_PROFILE =
		"route53profiles:AssociateResourceToProfile";
	/** [Write] route53profiles:CreateProfile */
	static readonly CREATE_PROFILE = "route53profiles:CreateProfile";
	/** [Write] route53profiles:DeleteProfile */
	static readonly DELETE_PROFILE = "route53profiles:DeleteProfile";
	/** [Write] route53profiles:DisassociateProfile */
	static readonly DISASSOCIATE_PROFILE = "route53profiles:DisassociateProfile";
	/** [Write] route53profiles:DisassociateResourceFromProfile */
	static readonly DISASSOCIATE_RESOURCE_FROM_PROFILE =
		"route53profiles:DisassociateResourceFromProfile";
	/** [Read] route53profiles:GetProfile */
	static readonly GET_PROFILE = "route53profiles:GetProfile";
	/** [Read] route53profiles:GetProfileAssociation */
	static readonly GET_PROFILE_ASSOCIATION =
		"route53profiles:GetProfileAssociation";
	/** [Read] route53profiles:GetProfilePolicy */
	static readonly GET_PROFILE_POLICY = "route53profiles:GetProfilePolicy";
	/** [Read] route53profiles:GetProfileResourceAssociation */
	static readonly GET_PROFILE_RESOURCE_ASSOCIATION =
		"route53profiles:GetProfileResourceAssociation";
	/** [List] route53profiles:ListProfileAssociations */
	static readonly LIST_PROFILE_ASSOCIATIONS =
		"route53profiles:ListProfileAssociations";
	/** [List] route53profiles:ListProfileResourceAssociations */
	static readonly LIST_PROFILE_RESOURCE_ASSOCIATIONS =
		"route53profiles:ListProfileResourceAssociations";
	/** [List] route53profiles:ListProfiles */
	static readonly LIST_PROFILES = "route53profiles:ListProfiles";
	/** [List] route53profiles:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"route53profiles:ListTagsForResource";
	/** [Write] route53profiles:PutProfilePolicy */
	static readonly PUT_PROFILE_POLICY = "route53profiles:PutProfilePolicy";
	/** [Tagging] route53profiles:TagResource */
	static readonly TAG_RESOURCE = "route53profiles:TagResource";
	/** [Tagging] route53profiles:UntagResource */
	static readonly UNTAG_RESOURCE = "route53profiles:UntagResource";
	/** [Write] route53profiles:UpdateProfileResourceAssociation */
	static readonly UPDATE_PROFILE_RESOURCE_ASSOCIATION =
		"route53profiles:UpdateProfileResourceAssociation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53profilesActions.GET_PROFILE,
		Route53profilesActions.GET_PROFILE_ASSOCIATION,
		Route53profilesActions.GET_PROFILE_POLICY,
		Route53profilesActions.GET_PROFILE_RESOURCE_ASSOCIATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53profilesActions.ASSOCIATE_PROFILE,
		Route53profilesActions.ASSOCIATE_RESOURCE_TO_PROFILE,
		Route53profilesActions.CREATE_PROFILE,
		Route53profilesActions.DELETE_PROFILE,
		Route53profilesActions.DISASSOCIATE_PROFILE,
		Route53profilesActions.DISASSOCIATE_RESOURCE_FROM_PROFILE,
		Route53profilesActions.PUT_PROFILE_POLICY,
		Route53profilesActions.UPDATE_PROFILE_RESOURCE_ASSOCIATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Route53profilesActions.LIST_PROFILE_ASSOCIATIONS,
		Route53profilesActions.LIST_PROFILE_RESOURCE_ASSOCIATIONS,
		Route53profilesActions.LIST_PROFILES,
		Route53profilesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53profilesActions.TAG_RESOURCE,
		Route53profilesActions.UNTAG_RESOURCE,
	];
}

const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53profiles:(?<region>[^:]*):(?<account>[^:]*):profile/(?<resourceId>[^:/?]+)$",
);
const ProfileAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53profiles:(?<region>[^:]*):(?<account>[^:]*):profile-association/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53profiles resources.
 */
export class Route53profilesResources {
	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53profiles:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the profile-association resource.
	 */
	static profileAssociation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53profiles:${props.region ?? "*"}:${props.account ?? "*"}:profile-association/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile-association resource.
	 */
	static isValidProfileAssociationArn(arn: string): boolean {
		return ProfileAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a profile-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProfileAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53profiles.
 */
export class Route53profilesOperations {
	/** IAM actions required for the AssociateProfile API call. */
	static readonly ASSOCIATE_PROFILE: string[] = [
		"route53profiles:AssociateProfile",
		"route53profiles:TagResource",
	];
	/** IAM actions required for the AssociateResourceToProfile API call. */
	static readonly ASSOCIATE_RESOURCE_TO_PROFILE: string[] = [
		"route53profiles:AssociateResourceToProfile",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CREATE_PROFILE: string[] = [
		"route53profiles:CreateProfile",
		"route53profiles:TagResource",
	];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["route53profiles:DeleteProfile"];
	/** IAM actions required for the DisassociateProfile API call. */
	static readonly DISASSOCIATE_PROFILE: string[] = [
		"route53profiles:DisassociateProfile",
	];
	/** IAM actions required for the DisassociateResourceFromProfile API call. */
	static readonly DISASSOCIATE_RESOURCE_FROM_PROFILE: string[] = [
		"route53profiles:DisassociateResourceFromProfile",
	];
	/** IAM actions required for the GetProfile API call. */
	static readonly GET_PROFILE: string[] = ["route53profiles:GetProfile"];
	/** IAM actions required for the GetProfileAssociation API call. */
	static readonly GET_PROFILE_ASSOCIATION: string[] = [
		"route53profiles:GetProfileAssociation",
	];
	/** IAM actions required for the GetProfileResourceAssociation API call. */
	static readonly GET_PROFILE_RESOURCE_ASSOCIATION: string[] = [
		"route53profiles:GetProfileResourceAssociation",
	];
	/** IAM actions required for the ListProfileAssociations API call. */
	static readonly LIST_PROFILE_ASSOCIATIONS: string[] = [
		"route53profiles:ListProfileAssociations",
	];
	/** IAM actions required for the ListProfileResourceAssociations API call. */
	static readonly LIST_PROFILE_RESOURCE_ASSOCIATIONS: string[] = [
		"route53profiles:ListProfileResourceAssociations",
	];
	/** IAM actions required for the ListProfiles API call. */
	static readonly LIST_PROFILES: string[] = ["route53profiles:ListProfiles"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"route53profiles:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["route53profiles:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["route53profiles:UntagResource"];
	/** IAM actions required for the UpdateProfileResourceAssociation API call. */
	static readonly UPDATE_PROFILE_RESOURCE_ASSOCIATION: string[] = [
		"route53profiles:UpdateProfileResourceAssociation",
	];
}

/**
 * Condition key constants and builders for route53profiles.
 */
export class Route53profilesConditions {
	/** Condition keys applicable to the AssociateProfile action. */
	static readonly ASSOCIATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"route53profiles:ResourceIds",
	];
	/** Condition keys applicable to the AssociateResourceToProfile action. */
	static readonly ASSOCIATE_RESOURCE_TO_PROFILE_CONDITION_KEYS: string[] = [
		"route53profiles:FirewallRuleGroupPriority",
		"route53profiles:HostedZoneDomains",
		"route53profiles:ResolverRuleDomains",
		"route53profiles:ResourceArns",
		"route53profiles:ResourceTypes",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateProfile action. */
	static readonly DISASSOCIATE_PROFILE_CONDITION_KEYS: string[] = [
		"route53profiles:ResourceIds",
	];
	/** Condition keys applicable to the DisassociateResourceFromProfile action. */
	static readonly DISASSOCIATE_RESOURCE_FROM_PROFILE_CONDITION_KEYS: string[] =
		[
			"route53profiles:FirewallRuleGroupPriority",
			"route53profiles:HostedZoneDomains",
			"route53profiles:ResolverRuleDomains",
			"route53profiles:ResourceArns",
			"route53profiles:ResourceTypes",
		];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProfileResourceAssociation action. */
	static readonly UPDATE_PROFILE_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"route53profiles:FirewallRuleGroupPriority",
			"route53profiles:HostedZoneDomains",
			"route53profiles:ResolverRuleDomains",
			"route53profiles:ResourceTypes",
		];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: route53profiles:FirewallRuleGroupPriority (Numeric) */
	static readonly FIREWALL_RULE_GROUP_PRIORITY =
		"route53profiles:FirewallRuleGroupPriority";
	/** Condition key: route53profiles:HostedZoneDomains (String) */
	static readonly HOSTED_ZONE_DOMAINS = "route53profiles:HostedZoneDomains";
	/** Condition key: route53profiles:ResolverRuleDomains (String) */
	static readonly RESOLVER_RULE_DOMAINS = "route53profiles:ResolverRuleDomains";
	/** Condition key: route53profiles:ResourceArns (ARN) */
	static readonly RESOURCE_ARNS = "route53profiles:ResourceArns";
	/** Condition key: route53profiles:ResourceIds (String) */
	static readonly RESOURCE_IDS = "route53profiles:ResourceIds";
	/** Condition key: route53profiles:ResourceTypes (String) */
	static readonly RESOURCE_TYPES = "route53profiles:ResourceTypes";

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

	/**
	 * Generates a condition block for `route53profiles:FirewallRuleGroupPriority`.
	 */
	static firewallRuleGroupPriority(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "route53profiles:FirewallRuleGroupPriority": value },
		};
	}

	/**
	 * Generates a condition block for `route53profiles:HostedZoneDomains`.
	 */
	static hostedZoneDomains(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "route53profiles:HostedZoneDomains": value } };
	}

	/**
	 * Generates a condition block for `route53profiles:ResolverRuleDomains`.
	 */
	static resolverRuleDomains(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "route53profiles:ResolverRuleDomains": value } };
	}

	/**
	 * Generates a condition block for `route53profiles:ResourceArns`.
	 */
	static resourceArns(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "route53profiles:ResourceArns": value } };
	}

	/**
	 * Generates a condition block for `route53profiles:ResourceIds`.
	 */
	static resourceIds(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "route53profiles:ResourceIds": value } };
	}

	/**
	 * Generates a condition block for `route53profiles:ResourceTypes`.
	 */
	static resourceTypes(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "route53profiles:ResourceTypes": value } };
	}
}
