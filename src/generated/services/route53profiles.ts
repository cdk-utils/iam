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
	static readonly AssociateProfile = "route53profiles:AssociateProfile";
	/** [Write] route53profiles:AssociateResourceToProfile */
	static readonly AssociateResourceToProfile =
		"route53profiles:AssociateResourceToProfile";
	/** [Write] route53profiles:CreateProfile */
	static readonly CreateProfile = "route53profiles:CreateProfile";
	/** [Write] route53profiles:DeleteProfile */
	static readonly DeleteProfile = "route53profiles:DeleteProfile";
	/** [Write] route53profiles:DisassociateProfile */
	static readonly DisassociateProfile = "route53profiles:DisassociateProfile";
	/** [Write] route53profiles:DisassociateResourceFromProfile */
	static readonly DisassociateResourceFromProfile =
		"route53profiles:DisassociateResourceFromProfile";
	/** [Read] route53profiles:GetProfile */
	static readonly actionGetProfile = "route53profiles:GetProfile";
	/** [Read] route53profiles:GetProfileAssociation */
	static readonly actionGetProfileAssociation =
		"route53profiles:GetProfileAssociation";
	/** [Read] route53profiles:GetProfilePolicy */
	static readonly actionGetProfilePolicy = "route53profiles:GetProfilePolicy";
	/** [Read] route53profiles:GetProfileResourceAssociation */
	static readonly actionGetProfileResourceAssociation =
		"route53profiles:GetProfileResourceAssociation";
	/** [List] route53profiles:ListProfileAssociations */
	static readonly ListProfileAssociations =
		"route53profiles:ListProfileAssociations";
	/** [List] route53profiles:ListProfileResourceAssociations */
	static readonly ListProfileResourceAssociations =
		"route53profiles:ListProfileResourceAssociations";
	/** [List] route53profiles:ListProfiles */
	static readonly ListProfiles = "route53profiles:ListProfiles";
	/** [List] route53profiles:ListTagsForResource */
	static readonly ListTagsForResource = "route53profiles:ListTagsForResource";
	/** [Write] route53profiles:PutProfilePolicy */
	static readonly PutProfilePolicy = "route53profiles:PutProfilePolicy";
	/** [Tagging] route53profiles:TagResource */
	static readonly TagResource = "route53profiles:TagResource";
	/** [Tagging] route53profiles:UntagResource */
	static readonly UntagResource = "route53profiles:UntagResource";
	/** [Write] route53profiles:UpdateProfileResourceAssociation */
	static readonly UpdateProfileResourceAssociation =
		"route53profiles:UpdateProfileResourceAssociation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53profilesActions.actionGetProfile,
		Route53profilesActions.actionGetProfileAssociation,
		Route53profilesActions.actionGetProfilePolicy,
		Route53profilesActions.actionGetProfileResourceAssociation,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53profilesActions.AssociateProfile,
		Route53profilesActions.AssociateResourceToProfile,
		Route53profilesActions.CreateProfile,
		Route53profilesActions.DeleteProfile,
		Route53profilesActions.DisassociateProfile,
		Route53profilesActions.DisassociateResourceFromProfile,
		Route53profilesActions.PutProfilePolicy,
		Route53profilesActions.UpdateProfileResourceAssociation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Route53profilesActions.ListProfileAssociations,
		Route53profilesActions.ListProfileResourceAssociations,
		Route53profilesActions.ListProfiles,
		Route53profilesActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Route53profilesActions.TagResource,
		Route53profilesActions.UntagResource,
	];
}

/**
 * Properties for building a profile ARN.
 */
export interface Route53profilesProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile ARN.
 */
export interface Route53profilesProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a profile-association ARN.
 */
export interface Route53profilesProfileAssociationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile-association ARN.
 */
export interface Route53profilesProfileAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):route53profiles:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<resourceId>[^:/?]+)$/;
const ProfileAssociationArnRegex =
	/^arn:(?<partition>[^:]+):route53profiles:(?<region>[^:]*):(?<account>[^:]*):profile-association\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for route53profiles resources.
 */
export class Route53profilesResources {
	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: Route53profilesProfileArnProps): string {
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
	static parseProfileArn(arn: string): Route53profilesProfileArnComponents {
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
	static profileAssociation(
		props: Route53profilesProfileAssociationArnProps,
	): string {
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
	static parseProfileAssociationArn(
		arn: string,
	): Route53profilesProfileAssociationArnComponents {
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
	static readonly AssociateProfile: string[] = [
		"route53profiles:AssociateProfile",
		"route53profiles:TagResource",
	];
	/** IAM actions required for the AssociateResourceToProfile API call. */
	static readonly AssociateResourceToProfile: string[] = [
		"route53profiles:AssociateResourceToProfile",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = [
		"route53profiles:CreateProfile",
		"route53profiles:TagResource",
	];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["route53profiles:DeleteProfile"];
	/** IAM actions required for the DisassociateProfile API call. */
	static readonly DisassociateProfile: string[] = [
		"route53profiles:DisassociateProfile",
	];
	/** IAM actions required for the DisassociateResourceFromProfile API call. */
	static readonly DisassociateResourceFromProfile: string[] = [
		"route53profiles:DisassociateResourceFromProfile",
	];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = ["route53profiles:GetProfile"];
	/** IAM actions required for the GetProfileAssociation API call. */
	static readonly opGetProfileAssociation: string[] = [
		"route53profiles:GetProfileAssociation",
	];
	/** IAM actions required for the GetProfileResourceAssociation API call. */
	static readonly opGetProfileResourceAssociation: string[] = [
		"route53profiles:GetProfileResourceAssociation",
	];
	/** IAM actions required for the ListProfileAssociations API call. */
	static readonly ListProfileAssociations: string[] = [
		"route53profiles:ListProfileAssociations",
	];
	/** IAM actions required for the ListProfileResourceAssociations API call. */
	static readonly ListProfileResourceAssociations: string[] = [
		"route53profiles:ListProfileResourceAssociations",
	];
	/** IAM actions required for the ListProfiles API call. */
	static readonly ListProfiles: string[] = ["route53profiles:ListProfiles"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"route53profiles:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["route53profiles:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["route53profiles:UntagResource"];
	/** IAM actions required for the UpdateProfileResourceAssociation API call. */
	static readonly UpdateProfileResourceAssociation: string[] = [
		"route53profiles:UpdateProfileResourceAssociation",
	];
}

/**
 * Condition key constants and builders for route53profiles.
 */
export class Route53profilesConditions {
	/** Condition keys applicable to the AssociateProfile action. */
	static readonly AssociateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"route53profiles:ResourceIds",
	];
	/** Condition keys applicable to the AssociateResourceToProfile action. */
	static readonly AssociateResourceToProfileConditionKeys: string[] = [
		"route53profiles:FirewallRuleGroupPriority",
		"route53profiles:HostedZoneDomains",
		"route53profiles:ResolverRuleDomains",
		"route53profiles:ResourceArns",
		"route53profiles:ResourceTypes",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateProfile action. */
	static readonly DisassociateProfileConditionKeys: string[] = [
		"route53profiles:ResourceIds",
	];
	/** Condition keys applicable to the DisassociateResourceFromProfile action. */
	static readonly DisassociateResourceFromProfileConditionKeys: string[] = [
		"route53profiles:FirewallRuleGroupPriority",
		"route53profiles:HostedZoneDomains",
		"route53profiles:ResolverRuleDomains",
		"route53profiles:ResourceArns",
		"route53profiles:ResourceTypes",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProfileResourceAssociation action. */
	static readonly UpdateProfileResourceAssociationConditionKeys: string[] = [
		"route53profiles:FirewallRuleGroupPriority",
		"route53profiles:HostedZoneDomains",
		"route53profiles:ResolverRuleDomains",
		"route53profiles:ResourceTypes",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
