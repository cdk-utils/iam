// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/b2bi.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the b2bi service.
 */
export class B2biActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "b2bi";

	/** [Write] b2bi:CreateCapability */
	static readonly CreateCapability = "b2bi:CreateCapability";
	/** [Write] b2bi:CreatePartnership */
	static readonly CreatePartnership = "b2bi:CreatePartnership";
	/** [Write] b2bi:CreateProfile */
	static readonly CreateProfile = "b2bi:CreateProfile";
	/** [Write] b2bi:CreateStarterMappingTemplate */
	static readonly CreateStarterMappingTemplate =
		"b2bi:CreateStarterMappingTemplate";
	/** [Write] b2bi:CreateTransformer */
	static readonly CreateTransformer = "b2bi:CreateTransformer";
	/** [Write] b2bi:DeleteCapability */
	static readonly DeleteCapability = "b2bi:DeleteCapability";
	/** [Write] b2bi:DeletePartnership */
	static readonly DeletePartnership = "b2bi:DeletePartnership";
	/** [Write] b2bi:DeleteProfile */
	static readonly DeleteProfile = "b2bi:DeleteProfile";
	/** [Write] b2bi:DeleteTransformer */
	static readonly DeleteTransformer = "b2bi:DeleteTransformer";
	/** [Write] b2bi:GenerateMapping */
	static readonly GenerateMapping = "b2bi:GenerateMapping";
	/** [Read] b2bi:GetCapability */
	static readonly actionGetCapability = "b2bi:GetCapability";
	/** [Read] b2bi:GetPartnership */
	static readonly actionGetPartnership = "b2bi:GetPartnership";
	/** [Read] b2bi:GetProfile */
	static readonly actionGetProfile = "b2bi:GetProfile";
	/** [Read] b2bi:GetTransformer */
	static readonly actionGetTransformer = "b2bi:GetTransformer";
	/** [Read] b2bi:GetTransformerJob */
	static readonly actionGetTransformerJob = "b2bi:GetTransformerJob";
	/** [List] b2bi:ListCapabilities */
	static readonly ListCapabilities = "b2bi:ListCapabilities";
	/** [List] b2bi:ListPartnerships */
	static readonly ListPartnerships = "b2bi:ListPartnerships";
	/** [List] b2bi:ListProfiles */
	static readonly ListProfiles = "b2bi:ListProfiles";
	/** [Read] b2bi:ListTagsForResource */
	static readonly ListTagsForResource = "b2bi:ListTagsForResource";
	/** [List] b2bi:ListTransformers */
	static readonly ListTransformers = "b2bi:ListTransformers";
	/** [Write] b2bi:StartTransformerJob */
	static readonly StartTransformerJob = "b2bi:StartTransformerJob";
	/** [Tagging] b2bi:TagResource */
	static readonly TagResource = "b2bi:TagResource";
	/** [Write] b2bi:TestConversion */
	static readonly TestConversion = "b2bi:TestConversion";
	/** [Write] b2bi:TestMapping */
	static readonly TestMapping = "b2bi:TestMapping";
	/** [Write] b2bi:TestParsing */
	static readonly TestParsing = "b2bi:TestParsing";
	/** [Tagging] b2bi:UntagResource */
	static readonly UntagResource = "b2bi:UntagResource";
	/** [Write] b2bi:UpdateCapability */
	static readonly UpdateCapability = "b2bi:UpdateCapability";
	/** [Write] b2bi:UpdatePartnership */
	static readonly UpdatePartnership = "b2bi:UpdatePartnership";
	/** [Write] b2bi:UpdateProfile */
	static readonly UpdateProfile = "b2bi:UpdateProfile";
	/** [Write] b2bi:UpdateTransformer */
	static readonly UpdateTransformer = "b2bi:UpdateTransformer";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		B2biActions.actionGetCapability,
		B2biActions.actionGetPartnership,
		B2biActions.actionGetProfile,
		B2biActions.actionGetTransformer,
		B2biActions.actionGetTransformerJob,
		B2biActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		B2biActions.CreateCapability,
		B2biActions.CreatePartnership,
		B2biActions.CreateProfile,
		B2biActions.CreateStarterMappingTemplate,
		B2biActions.CreateTransformer,
		B2biActions.DeleteCapability,
		B2biActions.DeletePartnership,
		B2biActions.DeleteProfile,
		B2biActions.DeleteTransformer,
		B2biActions.GenerateMapping,
		B2biActions.StartTransformerJob,
		B2biActions.TestConversion,
		B2biActions.TestMapping,
		B2biActions.TestParsing,
		B2biActions.UpdateCapability,
		B2biActions.UpdatePartnership,
		B2biActions.UpdateProfile,
		B2biActions.UpdateTransformer,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		B2biActions.ListCapabilities,
		B2biActions.ListPartnerships,
		B2biActions.ListProfiles,
		B2biActions.ListTransformers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		B2biActions.TagResource,
		B2biActions.UntagResource,
	];
}

/**
 * Properties for building a capability ARN.
 */
export interface B2biCapabilityArnProps {
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
 * Parsed components of a capability ARN.
 */
export interface B2biCapabilityArnComponents {
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
 * Properties for building a partnership ARN.
 */
export interface B2biPartnershipArnProps {
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
 * Parsed components of a partnership ARN.
 */
export interface B2biPartnershipArnComponents {
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
 * Properties for building a profile ARN.
 */
export interface B2biProfileArnProps {
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
export interface B2biProfileArnComponents {
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
 * Properties for building a transformer ARN.
 */
export interface B2biTransformerArnProps {
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
 * Parsed components of a transformer ARN.
 */
export interface B2biTransformerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const CapabilityArnRegex =
	/^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):capability\/(?<resourceId>[^:/?]+)$/;
const PartnershipArnRegex =
	/^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):partnership\/(?<resourceId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<resourceId>[^:/?]+)$/;
const TransformerArnRegex =
	/^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):transformer\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for b2bi resources.
 */
export class B2biResources {
	/**
	 * Builds an ARN for the capability resource.
	 */
	static capability(props: B2biCapabilityArnProps): string {
		return `arn:${props.partition ?? "aws"}:b2bi:${props.region ?? "*"}:${props.account ?? "*"}:capability/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capability resource.
	 */
	static isValidCapabilityArn(arn: string): boolean {
		return CapabilityArnRegex.test(arn);
	}

	/**
	 * Parses a capability ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapabilityArn(arn: string): B2biCapabilityArnComponents {
		const match = CapabilityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capability ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the partnership resource.
	 */
	static partnership(props: B2biPartnershipArnProps): string {
		return `arn:${props.partition ?? "aws"}:b2bi:${props.region ?? "*"}:${props.account ?? "*"}:partnership/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the partnership resource.
	 */
	static isValidPartnershipArn(arn: string): boolean {
		return PartnershipArnRegex.test(arn);
	}

	/**
	 * Parses a partnership ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePartnershipArn(arn: string): B2biPartnershipArnComponents {
		const match = PartnershipArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid partnership ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: B2biProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:b2bi:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.resourceId}`;
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
	static parseProfileArn(arn: string): B2biProfileArnComponents {
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
	 * Builds an ARN for the transformer resource.
	 */
	static transformer(props: B2biTransformerArnProps): string {
		return `arn:${props.partition ?? "aws"}:b2bi:${props.region ?? "*"}:${props.account ?? "*"}:transformer/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the transformer resource.
	 */
	static isValidTransformerArn(arn: string): boolean {
		return TransformerArnRegex.test(arn);
	}

	/**
	 * Parses a transformer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTransformerArn(arn: string): B2biTransformerArnComponents {
		const match = TransformerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid transformer ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for b2bi.
 */
export class B2biOperations {
	/** IAM actions required for the CreateCapability API call. */
	static readonly CreateCapability: string[] = [
		"b2bi:CreateCapability",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreatePartnership API call. */
	static readonly CreatePartnership: string[] = [
		"b2bi:CreatePartnership",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = [
		"b2bi:CreateProfile",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreateStarterMappingTemplate API call. */
	static readonly CreateStarterMappingTemplate: string[] = [
		"b2bi:CreateStarterMappingTemplate",
	];
	/** IAM actions required for the CreateTransformer API call. */
	static readonly CreateTransformer: string[] = [
		"b2bi:CreateTransformer",
		"b2bi:TagResource",
	];
	/** IAM actions required for the DeleteCapability API call. */
	static readonly DeleteCapability: string[] = ["b2bi:DeleteCapability"];
	/** IAM actions required for the DeletePartnership API call. */
	static readonly DeletePartnership: string[] = ["b2bi:DeletePartnership"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["b2bi:DeleteProfile"];
	/** IAM actions required for the DeleteTransformer API call. */
	static readonly DeleteTransformer: string[] = ["b2bi:DeleteTransformer"];
	/** IAM actions required for the GenerateMapping API call. */
	static readonly GenerateMapping: string[] = ["b2bi:GenerateMapping"];
	/** IAM actions required for the GetCapability API call. */
	static readonly opGetCapability: string[] = ["b2bi:GetCapability"];
	/** IAM actions required for the GetPartnership API call. */
	static readonly opGetPartnership: string[] = ["b2bi:GetPartnership"];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = ["b2bi:GetProfile"];
	/** IAM actions required for the GetTransformer API call. */
	static readonly opGetTransformer: string[] = ["b2bi:GetTransformer"];
	/** IAM actions required for the GetTransformerJob API call. */
	static readonly opGetTransformerJob: string[] = ["b2bi:GetTransformerJob"];
	/** IAM actions required for the ListCapabilities API call. */
	static readonly ListCapabilities: string[] = ["b2bi:ListCapabilities"];
	/** IAM actions required for the ListPartnerships API call. */
	static readonly ListPartnerships: string[] = ["b2bi:ListPartnerships"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly ListProfiles: string[] = ["b2bi:ListProfiles"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["b2bi:ListTagsForResource"];
	/** IAM actions required for the ListTransformers API call. */
	static readonly ListTransformers: string[] = ["b2bi:ListTransformers"];
	/** IAM actions required for the StartTransformerJob API call. */
	static readonly StartTransformerJob: string[] = ["b2bi:StartTransformerJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["b2bi:TagResource"];
	/** IAM actions required for the TestConversion API call. */
	static readonly TestConversion: string[] = ["b2bi:TestConversion"];
	/** IAM actions required for the TestMapping API call. */
	static readonly TestMapping: string[] = ["b2bi:TestMapping"];
	/** IAM actions required for the TestParsing API call. */
	static readonly TestParsing: string[] = ["b2bi:TestParsing"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["b2bi:UntagResource"];
	/** IAM actions required for the UpdateCapability API call. */
	static readonly UpdateCapability: string[] = ["b2bi:UpdateCapability"];
	/** IAM actions required for the UpdatePartnership API call. */
	static readonly UpdatePartnership: string[] = ["b2bi:UpdatePartnership"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UpdateProfile: string[] = ["b2bi:UpdateProfile"];
	/** IAM actions required for the UpdateTransformer API call. */
	static readonly UpdateTransformer: string[] = ["b2bi:UpdateTransformer"];
}

/**
 * Condition key constants and builders for b2bi.
 */
export class B2biConditions {
	/** Condition keys applicable to the CreateCapability action. */
	static readonly CreateCapabilityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartnership action. */
	static readonly CreatePartnershipConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransformer action. */
	static readonly CreateTransformerConditionKeys: string[] = [
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
