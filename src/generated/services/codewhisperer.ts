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
	static readonly AllowVendedLogDeliveryForResource =
		"codewhisperer:AllowVendedLogDeliveryForResource";
	/** [Write] codewhisperer:AssociateCustomizationPermission */
	static readonly AssociateCustomizationPermission =
		"codewhisperer:AssociateCustomizationPermission";
	/** [Write] codewhisperer:CreateCustomization */
	static readonly CreateCustomization = "codewhisperer:CreateCustomization";
	/** [Write] codewhisperer:CreateProfile */
	static readonly CreateProfile = "codewhisperer:CreateProfile";
	/** [Write] codewhisperer:DeleteCustomization */
	static readonly DeleteCustomization = "codewhisperer:DeleteCustomization";
	/** [Write] codewhisperer:DeleteProfile */
	static readonly DeleteProfile = "codewhisperer:DeleteProfile";
	/** [Write] codewhisperer:DisassociateCustomizationPermission */
	static readonly DisassociateCustomizationPermission =
		"codewhisperer:DisassociateCustomizationPermission";
	/** [Read] codewhisperer:GenerateRecommendations */
	static readonly GenerateRecommendations =
		"codewhisperer:GenerateRecommendations";
	/** [Read] codewhisperer:GetCustomization */
	static readonly actionGetCustomization = "codewhisperer:GetCustomization";
	/** [List] codewhisperer:ListCustomizationPermissions */
	static readonly ListCustomizationPermissions =
		"codewhisperer:ListCustomizationPermissions";
	/** [List] codewhisperer:ListCustomizationVersions */
	static readonly ListCustomizationVersions =
		"codewhisperer:ListCustomizationVersions";
	/** [List] codewhisperer:ListCustomizations */
	static readonly ListCustomizations = "codewhisperer:ListCustomizations";
	/** [List] codewhisperer:ListProfiles */
	static readonly ListProfiles = "codewhisperer:ListProfiles";
	/** [List] codewhisperer:ListTagsForResource */
	static readonly ListTagsForResource = "codewhisperer:ListTagsForResource";
	/** [Tagging] codewhisperer:TagResource */
	static readonly TagResource = "codewhisperer:TagResource";
	/** [Tagging] codewhisperer:UntagResource */
	static readonly UntagResource = "codewhisperer:UntagResource";
	/** [Write] codewhisperer:UpdateCustomization */
	static readonly UpdateCustomization = "codewhisperer:UpdateCustomization";
	/** [Write] codewhisperer:UpdateProfile */
	static readonly UpdateProfile = "codewhisperer:UpdateProfile";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodewhispererActions.GenerateRecommendations,
		CodewhispererActions.actionGetCustomization,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodewhispererActions.AssociateCustomizationPermission,
		CodewhispererActions.CreateCustomization,
		CodewhispererActions.CreateProfile,
		CodewhispererActions.DeleteCustomization,
		CodewhispererActions.DeleteProfile,
		CodewhispererActions.DisassociateCustomizationPermission,
		CodewhispererActions.UpdateCustomization,
		CodewhispererActions.UpdateProfile,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodewhispererActions.ListCustomizationPermissions,
		CodewhispererActions.ListCustomizationVersions,
		CodewhispererActions.ListCustomizations,
		CodewhispererActions.ListProfiles,
		CodewhispererActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CodewhispererActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodewhispererActions.TagResource,
		CodewhispererActions.UntagResource,
	];
}

/**
 * Properties for building a customization ARN.
 */
export interface CodewhispererCustomizationArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customization ARN.
 */
export interface CodewhispererCustomizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface CodewhispererProfileArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
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
export interface CodewhispererProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const CustomizationArnRegex =
	/^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):customization\/(?<identifier>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codewhisperer resources.
 */
export class CodewhispererResources {
	/**
	 * Builds an ARN for the customization resource.
	 */
	static customization(props: CodewhispererCustomizationArnProps): string {
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
	static parseCustomizationArn(
		arn: string,
	): CodewhispererCustomizationArnComponents {
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
	static profile(props: CodewhispererProfileArnProps): string {
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
	static parseProfileArn(arn: string): CodewhispererProfileArnComponents {
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
	static readonly AllowVendedLogDeliveryForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateCustomizationPermission action. */
	static readonly AssociateCustomizationPermissionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateCustomization action. */
	static readonly CreateCustomizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCustomization action. */
	static readonly DeleteCustomizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfile action. */
	static readonly DeleteProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateCustomizationPermission action. */
	static readonly DisassociateCustomizationPermissionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCustomization action. */
	static readonly actionGetCustomizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCustomizationPermissions action. */
	static readonly ListCustomizationPermissionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCustomizationVersions action. */
	static readonly ListCustomizationVersionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCustomization action. */
	static readonly UpdateCustomizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProfile action. */
	static readonly UpdateProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
