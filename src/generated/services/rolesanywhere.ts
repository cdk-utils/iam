// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rolesanywhere.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rolesanywhere service.
 */
export class RolesanywhereActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rolesanywhere";

	/** [Write] rolesanywhere:CreateProfile */
	static readonly CreateProfile = "rolesanywhere:CreateProfile";
	/** [Write] rolesanywhere:CreateTrustAnchor */
	static readonly CreateTrustAnchor = "rolesanywhere:CreateTrustAnchor";
	/** [Write] rolesanywhere:DeleteAttributeMapping */
	static readonly DeleteAttributeMapping =
		"rolesanywhere:DeleteAttributeMapping";
	/** [Write] rolesanywhere:DeleteCrl */
	static readonly DeleteCrl = "rolesanywhere:DeleteCrl";
	/** [Write] rolesanywhere:DeleteProfile */
	static readonly DeleteProfile = "rolesanywhere:DeleteProfile";
	/** [Write] rolesanywhere:DeleteTrustAnchor */
	static readonly DeleteTrustAnchor = "rolesanywhere:DeleteTrustAnchor";
	/** [Write] rolesanywhere:DisableCrl */
	static readonly DisableCrl = "rolesanywhere:DisableCrl";
	/** [Write] rolesanywhere:DisableProfile */
	static readonly DisableProfile = "rolesanywhere:DisableProfile";
	/** [Write] rolesanywhere:DisableTrustAnchor */
	static readonly DisableTrustAnchor = "rolesanywhere:DisableTrustAnchor";
	/** [Write] rolesanywhere:EnableCrl */
	static readonly EnableCrl = "rolesanywhere:EnableCrl";
	/** [Write] rolesanywhere:EnableProfile */
	static readonly EnableProfile = "rolesanywhere:EnableProfile";
	/** [Write] rolesanywhere:EnableTrustAnchor */
	static readonly EnableTrustAnchor = "rolesanywhere:EnableTrustAnchor";
	/** [Read] rolesanywhere:GetCrl */
	static readonly actionGetCrl = "rolesanywhere:GetCrl";
	/** [Read] rolesanywhere:GetProfile */
	static readonly actionGetProfile = "rolesanywhere:GetProfile";
	/** [Read] rolesanywhere:GetSubject */
	static readonly actionGetSubject = "rolesanywhere:GetSubject";
	/** [Read] rolesanywhere:GetTrustAnchor */
	static readonly actionGetTrustAnchor = "rolesanywhere:GetTrustAnchor";
	/** [Write] rolesanywhere:ImportCrl */
	static readonly ImportCrl = "rolesanywhere:ImportCrl";
	/** [List] rolesanywhere:ListCrls */
	static readonly ListCrls = "rolesanywhere:ListCrls";
	/** [List] rolesanywhere:ListProfiles */
	static readonly ListProfiles = "rolesanywhere:ListProfiles";
	/** [List] rolesanywhere:ListSubjects */
	static readonly ListSubjects = "rolesanywhere:ListSubjects";
	/** [List] rolesanywhere:ListTagsForResource */
	static readonly ListTagsForResource = "rolesanywhere:ListTagsForResource";
	/** [List] rolesanywhere:ListTrustAnchors */
	static readonly ListTrustAnchors = "rolesanywhere:ListTrustAnchors";
	/** [Write] rolesanywhere:PutAttributeMapping */
	static readonly PutAttributeMapping = "rolesanywhere:PutAttributeMapping";
	/** [Write] rolesanywhere:PutNotificationSettings */
	static readonly PutNotificationSettings =
		"rolesanywhere:PutNotificationSettings";
	/** [Write] rolesanywhere:ResetNotificationSettings */
	static readonly ResetNotificationSettings =
		"rolesanywhere:ResetNotificationSettings";
	/** [Tagging] rolesanywhere:TagResource */
	static readonly TagResource = "rolesanywhere:TagResource";
	/** [Tagging] rolesanywhere:UntagResource */
	static readonly UntagResource = "rolesanywhere:UntagResource";
	/** [Write] rolesanywhere:UpdateCrl */
	static readonly UpdateCrl = "rolesanywhere:UpdateCrl";
	/** [Write] rolesanywhere:UpdateProfile */
	static readonly UpdateProfile = "rolesanywhere:UpdateProfile";
	/** [Write] rolesanywhere:UpdateTrustAnchor */
	static readonly UpdateTrustAnchor = "rolesanywhere:UpdateTrustAnchor";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RolesanywhereActions.actionGetCrl,
		RolesanywhereActions.actionGetProfile,
		RolesanywhereActions.actionGetSubject,
		RolesanywhereActions.actionGetTrustAnchor,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RolesanywhereActions.CreateProfile,
		RolesanywhereActions.CreateTrustAnchor,
		RolesanywhereActions.DeleteAttributeMapping,
		RolesanywhereActions.DeleteCrl,
		RolesanywhereActions.DeleteProfile,
		RolesanywhereActions.DeleteTrustAnchor,
		RolesanywhereActions.DisableCrl,
		RolesanywhereActions.DisableProfile,
		RolesanywhereActions.DisableTrustAnchor,
		RolesanywhereActions.EnableCrl,
		RolesanywhereActions.EnableProfile,
		RolesanywhereActions.EnableTrustAnchor,
		RolesanywhereActions.ImportCrl,
		RolesanywhereActions.PutAttributeMapping,
		RolesanywhereActions.PutNotificationSettings,
		RolesanywhereActions.ResetNotificationSettings,
		RolesanywhereActions.UpdateCrl,
		RolesanywhereActions.UpdateProfile,
		RolesanywhereActions.UpdateTrustAnchor,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RolesanywhereActions.ListCrls,
		RolesanywhereActions.ListProfiles,
		RolesanywhereActions.ListSubjects,
		RolesanywhereActions.ListTagsForResource,
		RolesanywhereActions.ListTrustAnchors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RolesanywhereActions.TagResource,
		RolesanywhereActions.UntagResource,
	];
}

/**
 * Properties for building a crl ARN.
 */
export interface RolesanywhereCrlArnProps {
	/** The CrlId component of the ARN. */
	readonly crlId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a crl ARN.
 */
export interface RolesanywhereCrlArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CrlId component. */
	readonly crlId: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface RolesanywhereProfileArnProps {
	/** The ProfileId component of the ARN. */
	readonly profileId: string;
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
export interface RolesanywhereProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileId component. */
	readonly profileId: string;
}

/**
 * Properties for building a subject ARN.
 */
export interface RolesanywhereSubjectArnProps {
	/** The SubjectId component of the ARN. */
	readonly subjectId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subject ARN.
 */
export interface RolesanywhereSubjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubjectId component. */
	readonly subjectId: string;
}

/**
 * Properties for building a trust-anchor ARN.
 */
export interface RolesanywhereTrustAnchorArnProps {
	/** The TrustAnchorId component of the ARN. */
	readonly trustAnchorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trust-anchor ARN.
 */
export interface RolesanywhereTrustAnchorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrustAnchorId component. */
	readonly trustAnchorId: string;
}

const CrlArnRegex =
	/^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):crl\/(?<crlId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<profileId>[^:/?]+)$/;
const SubjectArnRegex =
	/^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):subject\/(?<subjectId>[^:/?]+)$/;
const TrustAnchorArnRegex =
	/^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):trust-anchor\/(?<trustAnchorId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rolesanywhere resources.
 */
export class RolesanywhereResources {
	/**
	 * Builds an ARN for the crl resource.
	 */
	static crl(props: RolesanywhereCrlArnProps): string {
		return `arn:${props.partition ?? "aws"}:rolesanywhere:${props.region ?? "*"}:${props.account ?? "*"}:crl/${props.crlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the crl resource.
	 */
	static isValidCrlArn(arn: string): boolean {
		return CrlArnRegex.test(arn);
	}

	/**
	 * Parses a crl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCrlArn(arn: string): RolesanywhereCrlArnComponents {
		const match = CrlArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid crl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			crlId: match.groups!.crlId,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: RolesanywhereProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:rolesanywhere:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.profileId}`;
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
	static parseProfileArn(arn: string): RolesanywhereProfileArnComponents {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileId: match.groups!.profileId,
		};
	}

	/**
	 * Builds an ARN for the subject resource.
	 */
	static subject(props: RolesanywhereSubjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:rolesanywhere:${props.region ?? "*"}:${props.account ?? "*"}:subject/${props.subjectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subject resource.
	 */
	static isValidSubjectArn(arn: string): boolean {
		return SubjectArnRegex.test(arn);
	}

	/**
	 * Parses a subject ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubjectArn(arn: string): RolesanywhereSubjectArnComponents {
		const match = SubjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subject ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subjectId: match.groups!.subjectId,
		};
	}

	/**
	 * Builds an ARN for the trust-anchor resource.
	 */
	static trustAnchor(props: RolesanywhereTrustAnchorArnProps): string {
		return `arn:${props.partition ?? "aws"}:rolesanywhere:${props.region ?? "*"}:${props.account ?? "*"}:trust-anchor/${props.trustAnchorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trust-anchor resource.
	 */
	static isValidTrustAnchorArn(arn: string): boolean {
		return TrustAnchorArnRegex.test(arn);
	}

	/**
	 * Parses a trust-anchor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrustAnchorArn(
		arn: string,
	): RolesanywhereTrustAnchorArnComponents {
		const match = TrustAnchorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trust-anchor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trustAnchorId: match.groups!.trustAnchorId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rolesanywhere.
 */
export class RolesanywhereOperations {
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = [
		"rolesanywhere:CreateProfile",
		"iam:PassRole",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the CreateTrustAnchor API call. */
	static readonly CreateTrustAnchor: string[] = [
		"rolesanywhere:CreateTrustAnchor",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the DeleteAttributeMapping API call. */
	static readonly DeleteAttributeMapping: string[] = [
		"rolesanywhere:DeleteAttributeMapping",
	];
	/** IAM actions required for the DeleteCrl API call. */
	static readonly DeleteCrl: string[] = ["rolesanywhere:DeleteCrl"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["rolesanywhere:DeleteProfile"];
	/** IAM actions required for the DeleteTrustAnchor API call. */
	static readonly DeleteTrustAnchor: string[] = [
		"rolesanywhere:DeleteTrustAnchor",
	];
	/** IAM actions required for the DisableCrl API call. */
	static readonly DisableCrl: string[] = ["rolesanywhere:DisableCrl"];
	/** IAM actions required for the DisableProfile API call. */
	static readonly DisableProfile: string[] = ["rolesanywhere:DisableProfile"];
	/** IAM actions required for the DisableTrustAnchor API call. */
	static readonly DisableTrustAnchor: string[] = [
		"rolesanywhere:DisableTrustAnchor",
	];
	/** IAM actions required for the EnableCrl API call. */
	static readonly EnableCrl: string[] = ["rolesanywhere:EnableCrl"];
	/** IAM actions required for the EnableProfile API call. */
	static readonly EnableProfile: string[] = [
		"rolesanywhere:EnableProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the EnableTrustAnchor API call. */
	static readonly EnableTrustAnchor: string[] = [
		"rolesanywhere:EnableTrustAnchor",
	];
	/** IAM actions required for the GetCrl API call. */
	static readonly opGetCrl: string[] = ["rolesanywhere:GetCrl"];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = ["rolesanywhere:GetProfile"];
	/** IAM actions required for the GetSubject API call. */
	static readonly opGetSubject: string[] = ["rolesanywhere:GetSubject"];
	/** IAM actions required for the GetTrustAnchor API call. */
	static readonly opGetTrustAnchor: string[] = ["rolesanywhere:GetTrustAnchor"];
	/** IAM actions required for the ImportCrl API call. */
	static readonly ImportCrl: string[] = [
		"rolesanywhere:ImportCrl",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the ListCrls API call. */
	static readonly ListCrls: string[] = ["rolesanywhere:ListCrls"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly ListProfiles: string[] = ["rolesanywhere:ListProfiles"];
	/** IAM actions required for the ListSubjects API call. */
	static readonly ListSubjects: string[] = ["rolesanywhere:ListSubjects"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"rolesanywhere:ListTagsForResource",
	];
	/** IAM actions required for the ListTrustAnchors API call. */
	static readonly ListTrustAnchors: string[] = [
		"rolesanywhere:ListTrustAnchors",
	];
	/** IAM actions required for the PutAttributeMapping API call. */
	static readonly PutAttributeMapping: string[] = [
		"rolesanywhere:PutAttributeMapping",
	];
	/** IAM actions required for the PutNotificationSettings API call. */
	static readonly PutNotificationSettings: string[] = [
		"rolesanywhere:PutNotificationSettings",
	];
	/** IAM actions required for the ResetNotificationSettings API call. */
	static readonly ResetNotificationSettings: string[] = [
		"rolesanywhere:ResetNotificationSettings",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["rolesanywhere:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["rolesanywhere:UntagResource"];
	/** IAM actions required for the UpdateCrl API call. */
	static readonly UpdateCrl: string[] = ["rolesanywhere:UpdateCrl"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UpdateProfile: string[] = [
		"iam:PassRole",
		"rolesanywhere:UpdateProfile",
	];
	/** IAM actions required for the UpdateTrustAnchor API call. */
	static readonly UpdateTrustAnchor: string[] = [
		"rolesanywhere:UpdateTrustAnchor",
	];
}

/**
 * Condition key constants and builders for rolesanywhere.
 */
export class RolesanywhereConditions {
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustAnchor action. */
	static readonly CreateTrustAnchorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportCrl action. */
	static readonly ImportCrlConditionKeys: string[] = [
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
