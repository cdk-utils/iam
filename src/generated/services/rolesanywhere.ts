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
	static readonly CREATE_PROFILE = "rolesanywhere:CreateProfile";
	/** [Write] rolesanywhere:CreateTrustAnchor */
	static readonly CREATE_TRUST_ANCHOR = "rolesanywhere:CreateTrustAnchor";
	/** [Write] rolesanywhere:DeleteAttributeMapping */
	static readonly DELETE_ATTRIBUTE_MAPPING =
		"rolesanywhere:DeleteAttributeMapping";
	/** [Write] rolesanywhere:DeleteCrl */
	static readonly DELETE_CRL = "rolesanywhere:DeleteCrl";
	/** [Write] rolesanywhere:DeleteProfile */
	static readonly DELETE_PROFILE = "rolesanywhere:DeleteProfile";
	/** [Write] rolesanywhere:DeleteTrustAnchor */
	static readonly DELETE_TRUST_ANCHOR = "rolesanywhere:DeleteTrustAnchor";
	/** [Write] rolesanywhere:DisableCrl */
	static readonly DISABLE_CRL = "rolesanywhere:DisableCrl";
	/** [Write] rolesanywhere:DisableProfile */
	static readonly DISABLE_PROFILE = "rolesanywhere:DisableProfile";
	/** [Write] rolesanywhere:DisableTrustAnchor */
	static readonly DISABLE_TRUST_ANCHOR = "rolesanywhere:DisableTrustAnchor";
	/** [Write] rolesanywhere:EnableCrl */
	static readonly ENABLE_CRL = "rolesanywhere:EnableCrl";
	/** [Write] rolesanywhere:EnableProfile */
	static readonly ENABLE_PROFILE = "rolesanywhere:EnableProfile";
	/** [Write] rolesanywhere:EnableTrustAnchor */
	static readonly ENABLE_TRUST_ANCHOR = "rolesanywhere:EnableTrustAnchor";
	/** [Read] rolesanywhere:GetCrl */
	static readonly GET_CRL = "rolesanywhere:GetCrl";
	/** [Read] rolesanywhere:GetProfile */
	static readonly GET_PROFILE = "rolesanywhere:GetProfile";
	/** [Read] rolesanywhere:GetSubject */
	static readonly GET_SUBJECT = "rolesanywhere:GetSubject";
	/** [Read] rolesanywhere:GetTrustAnchor */
	static readonly GET_TRUST_ANCHOR = "rolesanywhere:GetTrustAnchor";
	/** [Write] rolesanywhere:ImportCrl */
	static readonly IMPORT_CRL = "rolesanywhere:ImportCrl";
	/** [List] rolesanywhere:ListCrls */
	static readonly LIST_CRLS = "rolesanywhere:ListCrls";
	/** [List] rolesanywhere:ListProfiles */
	static readonly LIST_PROFILES = "rolesanywhere:ListProfiles";
	/** [List] rolesanywhere:ListSubjects */
	static readonly LIST_SUBJECTS = "rolesanywhere:ListSubjects";
	/** [List] rolesanywhere:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rolesanywhere:ListTagsForResource";
	/** [List] rolesanywhere:ListTrustAnchors */
	static readonly LIST_TRUST_ANCHORS = "rolesanywhere:ListTrustAnchors";
	/** [Write] rolesanywhere:PutAttributeMapping */
	static readonly PUT_ATTRIBUTE_MAPPING = "rolesanywhere:PutAttributeMapping";
	/** [Write] rolesanywhere:PutNotificationSettings */
	static readonly PUT_NOTIFICATION_SETTINGS =
		"rolesanywhere:PutNotificationSettings";
	/** [Write] rolesanywhere:ResetNotificationSettings */
	static readonly RESET_NOTIFICATION_SETTINGS =
		"rolesanywhere:ResetNotificationSettings";
	/** [Tagging] rolesanywhere:TagResource */
	static readonly TAG_RESOURCE = "rolesanywhere:TagResource";
	/** [Tagging] rolesanywhere:UntagResource */
	static readonly UNTAG_RESOURCE = "rolesanywhere:UntagResource";
	/** [Write] rolesanywhere:UpdateCrl */
	static readonly UPDATE_CRL = "rolesanywhere:UpdateCrl";
	/** [Write] rolesanywhere:UpdateProfile */
	static readonly UPDATE_PROFILE = "rolesanywhere:UpdateProfile";
	/** [Write] rolesanywhere:UpdateTrustAnchor */
	static readonly UPDATE_TRUST_ANCHOR = "rolesanywhere:UpdateTrustAnchor";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RolesanywhereActions.GET_CRL,
		RolesanywhereActions.GET_PROFILE,
		RolesanywhereActions.GET_SUBJECT,
		RolesanywhereActions.GET_TRUST_ANCHOR,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RolesanywhereActions.CREATE_PROFILE,
		RolesanywhereActions.CREATE_TRUST_ANCHOR,
		RolesanywhereActions.DELETE_ATTRIBUTE_MAPPING,
		RolesanywhereActions.DELETE_CRL,
		RolesanywhereActions.DELETE_PROFILE,
		RolesanywhereActions.DELETE_TRUST_ANCHOR,
		RolesanywhereActions.DISABLE_CRL,
		RolesanywhereActions.DISABLE_PROFILE,
		RolesanywhereActions.DISABLE_TRUST_ANCHOR,
		RolesanywhereActions.ENABLE_CRL,
		RolesanywhereActions.ENABLE_PROFILE,
		RolesanywhereActions.ENABLE_TRUST_ANCHOR,
		RolesanywhereActions.IMPORT_CRL,
		RolesanywhereActions.PUT_ATTRIBUTE_MAPPING,
		RolesanywhereActions.PUT_NOTIFICATION_SETTINGS,
		RolesanywhereActions.RESET_NOTIFICATION_SETTINGS,
		RolesanywhereActions.UPDATE_CRL,
		RolesanywhereActions.UPDATE_PROFILE,
		RolesanywhereActions.UPDATE_TRUST_ANCHOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RolesanywhereActions.LIST_CRLS,
		RolesanywhereActions.LIST_PROFILES,
		RolesanywhereActions.LIST_SUBJECTS,
		RolesanywhereActions.LIST_TAGS_FOR_RESOURCE,
		RolesanywhereActions.LIST_TRUST_ANCHORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RolesanywhereActions.TAG_RESOURCE,
		RolesanywhereActions.UNTAG_RESOURCE,
	];
}

const CrlArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):crl/(?<crlId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):profile/(?<profileId>[^:/?]+)$",
);
const SubjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):subject/(?<subjectId>[^:/?]+)$",
);
const TrustAnchorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rolesanywhere:(?<region>[^:]*):(?<account>[^:]*):trust-anchor/(?<trustAnchorId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rolesanywhere resources.
 */
export class RolesanywhereResources {
	/**
	 * Builds an ARN for the crl resource.
	 */
	static crl(props: {
		/** The CrlId component of the ARN. */
		readonly crlId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCrlArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		crlId: string;
	} {
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
	static profile(props: {
		/** The ProfileId component of the ARN. */
		readonly profileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileId: string;
	} {
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
	static subject(props: {
		/** The SubjectId component of the ARN. */
		readonly subjectId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSubjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subjectId: string;
	} {
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
	static trustAnchor(props: {
		/** The TrustAnchorId component of the ARN. */
		readonly trustAnchorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTrustAnchorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trustAnchorId: string;
	} {
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
	static readonly CREATE_PROFILE: string[] = [
		"rolesanywhere:CreateProfile",
		"iam:PassRole",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the CreateTrustAnchor API call. */
	static readonly CREATE_TRUST_ANCHOR: string[] = [
		"rolesanywhere:CreateTrustAnchor",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the DeleteAttributeMapping API call. */
	static readonly DELETE_ATTRIBUTE_MAPPING: string[] = [
		"rolesanywhere:DeleteAttributeMapping",
	];
	/** IAM actions required for the DeleteCrl API call. */
	static readonly DELETE_CRL: string[] = ["rolesanywhere:DeleteCrl"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["rolesanywhere:DeleteProfile"];
	/** IAM actions required for the DeleteTrustAnchor API call. */
	static readonly DELETE_TRUST_ANCHOR: string[] = [
		"rolesanywhere:DeleteTrustAnchor",
	];
	/** IAM actions required for the DisableCrl API call. */
	static readonly DISABLE_CRL: string[] = ["rolesanywhere:DisableCrl"];
	/** IAM actions required for the DisableProfile API call. */
	static readonly DISABLE_PROFILE: string[] = ["rolesanywhere:DisableProfile"];
	/** IAM actions required for the DisableTrustAnchor API call. */
	static readonly DISABLE_TRUST_ANCHOR: string[] = [
		"rolesanywhere:DisableTrustAnchor",
	];
	/** IAM actions required for the EnableCrl API call. */
	static readonly ENABLE_CRL: string[] = ["rolesanywhere:EnableCrl"];
	/** IAM actions required for the EnableProfile API call. */
	static readonly ENABLE_PROFILE: string[] = [
		"rolesanywhere:EnableProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the EnableTrustAnchor API call. */
	static readonly ENABLE_TRUST_ANCHOR: string[] = [
		"rolesanywhere:EnableTrustAnchor",
	];
	/** IAM actions required for the GetCrl API call. */
	static readonly GET_CRL: string[] = ["rolesanywhere:GetCrl"];
	/** IAM actions required for the GetProfile API call. */
	static readonly GET_PROFILE: string[] = ["rolesanywhere:GetProfile"];
	/** IAM actions required for the GetSubject API call. */
	static readonly GET_SUBJECT: string[] = ["rolesanywhere:GetSubject"];
	/** IAM actions required for the GetTrustAnchor API call. */
	static readonly GET_TRUST_ANCHOR: string[] = ["rolesanywhere:GetTrustAnchor"];
	/** IAM actions required for the ImportCrl API call. */
	static readonly IMPORT_CRL: string[] = [
		"rolesanywhere:ImportCrl",
		"rolesanywhere:TagResource",
	];
	/** IAM actions required for the ListCrls API call. */
	static readonly LIST_CRLS: string[] = ["rolesanywhere:ListCrls"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly LIST_PROFILES: string[] = ["rolesanywhere:ListProfiles"];
	/** IAM actions required for the ListSubjects API call. */
	static readonly LIST_SUBJECTS: string[] = ["rolesanywhere:ListSubjects"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"rolesanywhere:ListTagsForResource",
	];
	/** IAM actions required for the ListTrustAnchors API call. */
	static readonly LIST_TRUST_ANCHORS: string[] = [
		"rolesanywhere:ListTrustAnchors",
	];
	/** IAM actions required for the PutAttributeMapping API call. */
	static readonly PUT_ATTRIBUTE_MAPPING: string[] = [
		"rolesanywhere:PutAttributeMapping",
	];
	/** IAM actions required for the PutNotificationSettings API call. */
	static readonly PUT_NOTIFICATION_SETTINGS: string[] = [
		"rolesanywhere:PutNotificationSettings",
	];
	/** IAM actions required for the ResetNotificationSettings API call. */
	static readonly RESET_NOTIFICATION_SETTINGS: string[] = [
		"rolesanywhere:ResetNotificationSettings",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["rolesanywhere:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["rolesanywhere:UntagResource"];
	/** IAM actions required for the UpdateCrl API call. */
	static readonly UPDATE_CRL: string[] = ["rolesanywhere:UpdateCrl"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UPDATE_PROFILE: string[] = [
		"iam:PassRole",
		"rolesanywhere:UpdateProfile",
	];
	/** IAM actions required for the UpdateTrustAnchor API call. */
	static readonly UPDATE_TRUST_ANCHOR: string[] = [
		"rolesanywhere:UpdateTrustAnchor",
	];
}

/**
 * Condition key constants and builders for rolesanywhere.
 */
export class RolesanywhereConditions {
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustAnchor action. */
	static readonly CREATE_TRUST_ANCHOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportCrl action. */
	static readonly IMPORT_CRL_CONDITION_KEYS: string[] = [
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
