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
	static readonly CREATE_CAPABILITY = "b2bi:CreateCapability";
	/** [Write] b2bi:CreatePartnership */
	static readonly CREATE_PARTNERSHIP = "b2bi:CreatePartnership";
	/** [Write] b2bi:CreateProfile */
	static readonly CREATE_PROFILE = "b2bi:CreateProfile";
	/** [Write] b2bi:CreateStarterMappingTemplate */
	static readonly CREATE_STARTER_MAPPING_TEMPLATE =
		"b2bi:CreateStarterMappingTemplate";
	/** [Write] b2bi:CreateTransformer */
	static readonly CREATE_TRANSFORMER = "b2bi:CreateTransformer";
	/** [Write] b2bi:DeleteCapability */
	static readonly DELETE_CAPABILITY = "b2bi:DeleteCapability";
	/** [Write] b2bi:DeletePartnership */
	static readonly DELETE_PARTNERSHIP = "b2bi:DeletePartnership";
	/** [Write] b2bi:DeleteProfile */
	static readonly DELETE_PROFILE = "b2bi:DeleteProfile";
	/** [Write] b2bi:DeleteTransformer */
	static readonly DELETE_TRANSFORMER = "b2bi:DeleteTransformer";
	/** [Write] b2bi:GenerateMapping */
	static readonly GENERATE_MAPPING = "b2bi:GenerateMapping";
	/** [Read] b2bi:GetCapability */
	static readonly GET_CAPABILITY = "b2bi:GetCapability";
	/** [Read] b2bi:GetPartnership */
	static readonly GET_PARTNERSHIP = "b2bi:GetPartnership";
	/** [Read] b2bi:GetProfile */
	static readonly GET_PROFILE = "b2bi:GetProfile";
	/** [Read] b2bi:GetTransformer */
	static readonly GET_TRANSFORMER = "b2bi:GetTransformer";
	/** [Read] b2bi:GetTransformerJob */
	static readonly GET_TRANSFORMER_JOB = "b2bi:GetTransformerJob";
	/** [List] b2bi:ListCapabilities */
	static readonly LIST_CAPABILITIES = "b2bi:ListCapabilities";
	/** [List] b2bi:ListPartnerships */
	static readonly LIST_PARTNERSHIPS = "b2bi:ListPartnerships";
	/** [List] b2bi:ListProfiles */
	static readonly LIST_PROFILES = "b2bi:ListProfiles";
	/** [Read] b2bi:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "b2bi:ListTagsForResource";
	/** [List] b2bi:ListTransformers */
	static readonly LIST_TRANSFORMERS = "b2bi:ListTransformers";
	/** [Write] b2bi:StartTransformerJob */
	static readonly START_TRANSFORMER_JOB = "b2bi:StartTransformerJob";
	/** [Tagging] b2bi:TagResource */
	static readonly TAG_RESOURCE = "b2bi:TagResource";
	/** [Write] b2bi:TestConversion */
	static readonly TEST_CONVERSION = "b2bi:TestConversion";
	/** [Write] b2bi:TestMapping */
	static readonly TEST_MAPPING = "b2bi:TestMapping";
	/** [Write] b2bi:TestParsing */
	static readonly TEST_PARSING = "b2bi:TestParsing";
	/** [Tagging] b2bi:UntagResource */
	static readonly UNTAG_RESOURCE = "b2bi:UntagResource";
	/** [Write] b2bi:UpdateCapability */
	static readonly UPDATE_CAPABILITY = "b2bi:UpdateCapability";
	/** [Write] b2bi:UpdatePartnership */
	static readonly UPDATE_PARTNERSHIP = "b2bi:UpdatePartnership";
	/** [Write] b2bi:UpdateProfile */
	static readonly UPDATE_PROFILE = "b2bi:UpdateProfile";
	/** [Write] b2bi:UpdateTransformer */
	static readonly UPDATE_TRANSFORMER = "b2bi:UpdateTransformer";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		B2biActions.GET_CAPABILITY,
		B2biActions.GET_PARTNERSHIP,
		B2biActions.GET_PROFILE,
		B2biActions.GET_TRANSFORMER,
		B2biActions.GET_TRANSFORMER_JOB,
		B2biActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		B2biActions.CREATE_CAPABILITY,
		B2biActions.CREATE_PARTNERSHIP,
		B2biActions.CREATE_PROFILE,
		B2biActions.CREATE_STARTER_MAPPING_TEMPLATE,
		B2biActions.CREATE_TRANSFORMER,
		B2biActions.DELETE_CAPABILITY,
		B2biActions.DELETE_PARTNERSHIP,
		B2biActions.DELETE_PROFILE,
		B2biActions.DELETE_TRANSFORMER,
		B2biActions.GENERATE_MAPPING,
		B2biActions.START_TRANSFORMER_JOB,
		B2biActions.TEST_CONVERSION,
		B2biActions.TEST_MAPPING,
		B2biActions.TEST_PARSING,
		B2biActions.UPDATE_CAPABILITY,
		B2biActions.UPDATE_PARTNERSHIP,
		B2biActions.UPDATE_PROFILE,
		B2biActions.UPDATE_TRANSFORMER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		B2biActions.LIST_CAPABILITIES,
		B2biActions.LIST_PARTNERSHIPS,
		B2biActions.LIST_PROFILES,
		B2biActions.LIST_TRANSFORMERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		B2biActions.TAG_RESOURCE,
		B2biActions.UNTAG_RESOURCE,
	];
}

const CapabilityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):capability/(?<resourceId>[^:/?]+)$",
);
const PartnershipArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):partnership/(?<resourceId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):profile/(?<resourceId>[^:/?]+)$",
);
const TransformerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):b2bi:(?<region>[^:]*):(?<account>[^:]*):transformer/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for b2bi resources.
 */
export class B2biResources {
	/**
	 * Builds an ARN for the capability resource.
	 */
	static capability(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCapabilityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static partnership(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePartnershipArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	 * Builds an ARN for the transformer resource.
	 */
	static transformer(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTransformerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_CAPABILITY: string[] = [
		"b2bi:CreateCapability",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreatePartnership API call. */
	static readonly CREATE_PARTNERSHIP: string[] = [
		"b2bi:CreatePartnership",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CREATE_PROFILE: string[] = [
		"b2bi:CreateProfile",
		"b2bi:TagResource",
	];
	/** IAM actions required for the CreateStarterMappingTemplate API call. */
	static readonly CREATE_STARTER_MAPPING_TEMPLATE: string[] = [
		"b2bi:CreateStarterMappingTemplate",
	];
	/** IAM actions required for the CreateTransformer API call. */
	static readonly CREATE_TRANSFORMER: string[] = [
		"b2bi:CreateTransformer",
		"b2bi:TagResource",
	];
	/** IAM actions required for the DeleteCapability API call. */
	static readonly DELETE_CAPABILITY: string[] = ["b2bi:DeleteCapability"];
	/** IAM actions required for the DeletePartnership API call. */
	static readonly DELETE_PARTNERSHIP: string[] = ["b2bi:DeletePartnership"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["b2bi:DeleteProfile"];
	/** IAM actions required for the DeleteTransformer API call. */
	static readonly DELETE_TRANSFORMER: string[] = ["b2bi:DeleteTransformer"];
	/** IAM actions required for the GenerateMapping API call. */
	static readonly GENERATE_MAPPING: string[] = ["b2bi:GenerateMapping"];
	/** IAM actions required for the GetCapability API call. */
	static readonly GET_CAPABILITY: string[] = ["b2bi:GetCapability"];
	/** IAM actions required for the GetPartnership API call. */
	static readonly GET_PARTNERSHIP: string[] = ["b2bi:GetPartnership"];
	/** IAM actions required for the GetProfile API call. */
	static readonly GET_PROFILE: string[] = ["b2bi:GetProfile"];
	/** IAM actions required for the GetTransformer API call. */
	static readonly GET_TRANSFORMER: string[] = ["b2bi:GetTransformer"];
	/** IAM actions required for the GetTransformerJob API call. */
	static readonly GET_TRANSFORMER_JOB: string[] = ["b2bi:GetTransformerJob"];
	/** IAM actions required for the ListCapabilities API call. */
	static readonly LIST_CAPABILITIES: string[] = ["b2bi:ListCapabilities"];
	/** IAM actions required for the ListPartnerships API call. */
	static readonly LIST_PARTNERSHIPS: string[] = ["b2bi:ListPartnerships"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly LIST_PROFILES: string[] = ["b2bi:ListProfiles"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"b2bi:ListTagsForResource",
	];
	/** IAM actions required for the ListTransformers API call. */
	static readonly LIST_TRANSFORMERS: string[] = ["b2bi:ListTransformers"];
	/** IAM actions required for the StartTransformerJob API call. */
	static readonly START_TRANSFORMER_JOB: string[] = [
		"b2bi:StartTransformerJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["b2bi:TagResource"];
	/** IAM actions required for the TestConversion API call. */
	static readonly TEST_CONVERSION: string[] = ["b2bi:TestConversion"];
	/** IAM actions required for the TestMapping API call. */
	static readonly TEST_MAPPING: string[] = ["b2bi:TestMapping"];
	/** IAM actions required for the TestParsing API call. */
	static readonly TEST_PARSING: string[] = ["b2bi:TestParsing"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["b2bi:UntagResource"];
	/** IAM actions required for the UpdateCapability API call. */
	static readonly UPDATE_CAPABILITY: string[] = ["b2bi:UpdateCapability"];
	/** IAM actions required for the UpdatePartnership API call. */
	static readonly UPDATE_PARTNERSHIP: string[] = ["b2bi:UpdatePartnership"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UPDATE_PROFILE: string[] = ["b2bi:UpdateProfile"];
	/** IAM actions required for the UpdateTransformer API call. */
	static readonly UPDATE_TRANSFORMER: string[] = ["b2bi:UpdateTransformer"];
}

/**
 * Condition key constants and builders for b2bi.
 */
export class B2biConditions {
	/** Condition keys applicable to the CreateCapability action. */
	static readonly CREATE_CAPABILITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartnership action. */
	static readonly CREATE_PARTNERSHIP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransformer action. */
	static readonly CREATE_TRANSFORMER_CONDITION_KEYS: string[] = [
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
