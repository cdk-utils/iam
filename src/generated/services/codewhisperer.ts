// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codewhisperer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codewhisperer service.
 */
export class CodewhispererActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codewhisperer";

	/** [PermissionManagement] codewhisperer:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"codewhisperer:AllowVendedLogDeliveryForResource";
	/** [Write] codewhisperer:AssociateCustomizationPermission */
	static readonly ASSOCIATE_CUSTOMIZATION_PERMISSION =
		"codewhisperer:AssociateCustomizationPermission";
	/** [Write] codewhisperer:CreateCustomization */
	static readonly CREATE_CUSTOMIZATION = "codewhisperer:CreateCustomization";
	/** [Write] codewhisperer:CreateProfile */
	static readonly CREATE_PROFILE = "codewhisperer:CreateProfile";
	/** [Write] codewhisperer:DeleteCustomization */
	static readonly DELETE_CUSTOMIZATION = "codewhisperer:DeleteCustomization";
	/** [Write] codewhisperer:DeleteProfile */
	static readonly DELETE_PROFILE = "codewhisperer:DeleteProfile";
	/** [Write] codewhisperer:DisassociateCustomizationPermission */
	static readonly DISASSOCIATE_CUSTOMIZATION_PERMISSION =
		"codewhisperer:DisassociateCustomizationPermission";
	/** [Read] codewhisperer:GenerateRecommendations */
	static readonly GENERATE_RECOMMENDATIONS =
		"codewhisperer:GenerateRecommendations";
	/** [Read] codewhisperer:GetCustomization */
	static readonly GET_CUSTOMIZATION = "codewhisperer:GetCustomization";
	/** [List] codewhisperer:ListCustomizationPermissions */
	static readonly LIST_CUSTOMIZATION_PERMISSIONS =
		"codewhisperer:ListCustomizationPermissions";
	/** [List] codewhisperer:ListCustomizationVersions */
	static readonly LIST_CUSTOMIZATION_VERSIONS =
		"codewhisperer:ListCustomizationVersions";
	/** [List] codewhisperer:ListCustomizations */
	static readonly LIST_CUSTOMIZATIONS = "codewhisperer:ListCustomizations";
	/** [List] codewhisperer:ListProfiles */
	static readonly LIST_PROFILES = "codewhisperer:ListProfiles";
	/** [List] codewhisperer:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codewhisperer:ListTagsForResource";
	/** [Tagging] codewhisperer:TagResource */
	static readonly TAG_RESOURCE = "codewhisperer:TagResource";
	/** [Tagging] codewhisperer:UntagResource */
	static readonly UNTAG_RESOURCE = "codewhisperer:UntagResource";
	/** [Write] codewhisperer:UpdateCustomization */
	static readonly UPDATE_CUSTOMIZATION = "codewhisperer:UpdateCustomization";
	/** [Write] codewhisperer:UpdateProfile */
	static readonly UPDATE_PROFILE = "codewhisperer:UpdateProfile";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodewhispererActions.GENERATE_RECOMMENDATIONS,
		CodewhispererActions.GET_CUSTOMIZATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodewhispererActions.ASSOCIATE_CUSTOMIZATION_PERMISSION,
		CodewhispererActions.CREATE_CUSTOMIZATION,
		CodewhispererActions.CREATE_PROFILE,
		CodewhispererActions.DELETE_CUSTOMIZATION,
		CodewhispererActions.DELETE_PROFILE,
		CodewhispererActions.DISASSOCIATE_CUSTOMIZATION_PERMISSION,
		CodewhispererActions.UPDATE_CUSTOMIZATION,
		CodewhispererActions.UPDATE_PROFILE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodewhispererActions.LIST_CUSTOMIZATION_PERMISSIONS,
		CodewhispererActions.LIST_CUSTOMIZATION_VERSIONS,
		CodewhispererActions.LIST_CUSTOMIZATIONS,
		CodewhispererActions.LIST_PROFILES,
		CodewhispererActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CodewhispererActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodewhispererActions.TAG_RESOURCE,
		CodewhispererActions.UNTAG_RESOURCE,
	];
}

const CustomizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):customization/(?<identifier>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):profile/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codewhisperer resources.
 */
export class CodewhispererResources {
	/**
	 * Builds an ARN for the customization resource.
	 */
	static customization(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codewhisperer:${props.region ?? "*"}:${props.account ?? "*"}:customization/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customization resource.
	 */
	static isValidCustomizationArn(arn: string): boolean {
		return CustomizationArnRegex.test(arn);
	}

	/**
	 * Parses a customization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
		const match = CustomizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codewhisperer:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.identifier}`;
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
		identifier: string;
	} {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * Condition key constants and builders for codewhisperer.
 */
export class CodewhispererConditions {
	/** Condition keys applicable to the AllowVendedLogDeliveryForResource action. */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AssociateCustomizationPermission action. */
	static readonly ASSOCIATE_CUSTOMIZATION_PERMISSION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateCustomization action. */
	static readonly CREATE_CUSTOMIZATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCustomization action. */
	static readonly DELETE_CUSTOMIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfile action. */
	static readonly DELETE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateCustomizationPermission action. */
	static readonly DISASSOCIATE_CUSTOMIZATION_PERMISSION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetCustomization action. */
	static readonly GET_CUSTOMIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCustomizationPermissions action. */
	static readonly LIST_CUSTOMIZATION_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCustomizationVersions action. */
	static readonly LIST_CUSTOMIZATION_VERSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCustomization action. */
	static readonly UPDATE_CUSTOMIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProfile action. */
	static readonly UPDATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
