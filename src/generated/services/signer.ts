// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/signer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the signer service.
 */
export class SignerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "signer";

	/** [PermissionManagement] signer:AddProfilePermission */
	static readonly ADD_PROFILE_PERMISSION = "signer:AddProfilePermission";
	/** [Write] signer:CancelSigningProfile */
	static readonly CANCEL_SIGNING_PROFILE = "signer:CancelSigningProfile";
	/** [Read] signer:DescribeSigningJob */
	static readonly DESCRIBE_SIGNING_JOB = "signer:DescribeSigningJob";
	/** [Read] signer:GetRevocationStatus */
	static readonly GET_REVOCATION_STATUS = "signer:GetRevocationStatus";
	/** [Read] signer:GetSigningPlatform */
	static readonly GET_SIGNING_PLATFORM = "signer:GetSigningPlatform";
	/** [Read] signer:GetSigningProfile */
	static readonly GET_SIGNING_PROFILE = "signer:GetSigningProfile";
	/** [Read] signer:ListProfilePermissions */
	static readonly LIST_PROFILE_PERMISSIONS = "signer:ListProfilePermissions";
	/** [List] signer:ListSigningJobs */
	static readonly LIST_SIGNING_JOBS = "signer:ListSigningJobs";
	/** [List] signer:ListSigningPlatforms */
	static readonly LIST_SIGNING_PLATFORMS = "signer:ListSigningPlatforms";
	/** [List] signer:ListSigningProfiles */
	static readonly LIST_SIGNING_PROFILES = "signer:ListSigningProfiles";
	/** [Read] signer:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "signer:ListTagsForResource";
	/** [Write] signer:PutSigningProfile */
	static readonly PUT_SIGNING_PROFILE = "signer:PutSigningProfile";
	/** [PermissionManagement] signer:RemoveProfilePermission */
	static readonly REMOVE_PROFILE_PERMISSION = "signer:RemoveProfilePermission";
	/** [Write] signer:RevokeSignature */
	static readonly REVOKE_SIGNATURE = "signer:RevokeSignature";
	/** [Write] signer:RevokeSigningProfile */
	static readonly REVOKE_SIGNING_PROFILE = "signer:RevokeSigningProfile";
	/** [Write] signer:SignPayload */
	static readonly SIGN_PAYLOAD = "signer:SignPayload";
	/** [Write] signer:StartSigningJob */
	static readonly START_SIGNING_JOB = "signer:StartSigningJob";
	/** [Tagging] signer:TagResource */
	static readonly TAG_RESOURCE = "signer:TagResource";
	/** [Tagging] signer:UntagResource */
	static readonly UNTAG_RESOURCE = "signer:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SignerActions.DESCRIBE_SIGNING_JOB,
		SignerActions.GET_REVOCATION_STATUS,
		SignerActions.GET_SIGNING_PLATFORM,
		SignerActions.GET_SIGNING_PROFILE,
		SignerActions.LIST_PROFILE_PERMISSIONS,
		SignerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SignerActions.CANCEL_SIGNING_PROFILE,
		SignerActions.PUT_SIGNING_PROFILE,
		SignerActions.REVOKE_SIGNATURE,
		SignerActions.REVOKE_SIGNING_PROFILE,
		SignerActions.SIGN_PAYLOAD,
		SignerActions.START_SIGNING_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SignerActions.LIST_SIGNING_JOBS,
		SignerActions.LIST_SIGNING_PLATFORMS,
		SignerActions.LIST_SIGNING_PROFILES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SignerActions.ADD_PROFILE_PERMISSION,
		SignerActions.REMOVE_PROFILE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SignerActions.TAG_RESOURCE,
		SignerActions.UNTAG_RESOURCE,
	];
}

const SigningJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signer:(?<region>[^:]*):(?<account>[^:]*):/signing-jobs/(?<jobId>[^:/?]+)$",
);
const SigningProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signer:(?<region>[^:]*):(?<account>[^:]*):/signing-profiles/(?<profileName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for signer resources.
 */
export class SignerResources {
	/**
	 * Builds an ARN for the signing-job resource.
	 */
	static signingJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:signer:${props.region ?? "*"}:${props.account ?? "*"}:/signing-jobs/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the signing-job resource.
	 */
	static isValidSigningJobArn(arn: string): boolean {
		return SigningJobArnRegex.test(arn);
	}

	/**
	 * Parses a signing-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSigningJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = SigningJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid signing-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the signing-profile resource.
	 */
	static signingProfile(props: {
		/** The ProfileName component of the ARN. */
		readonly profileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:signer:${props.region ?? "*"}:${props.account ?? "*"}:/signing-profiles/${props.profileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the signing-profile resource.
	 */
	static isValidSigningProfileArn(arn: string): boolean {
		return SigningProfileArnRegex.test(arn);
	}

	/**
	 * Parses a signing-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSigningProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileName: string;
	} {
		const match = SigningProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid signing-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileName: match.groups!.profileName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for signer.
 */
export class SignerOperations {
	/** IAM actions required for the AddProfilePermission API call. */
	static readonly ADD_PROFILE_PERMISSION: string[] = [
		"signer:AddProfilePermission",
	];
	/** IAM actions required for the CancelSigningProfile API call. */
	static readonly CANCEL_SIGNING_PROFILE: string[] = [
		"signer:CancelSigningProfile",
	];
	/** IAM actions required for the DescribeSigningJob API call. */
	static readonly DESCRIBE_SIGNING_JOB: string[] = [
		"signer:DescribeSigningJob",
	];
	/** IAM actions required for the GetRevocationStatus API call. */
	static readonly GET_REVOCATION_STATUS: string[] = [
		"signer:GetRevocationStatus",
	];
	/** IAM actions required for the GetSigningPlatform API call. */
	static readonly GET_SIGNING_PLATFORM: string[] = [
		"signer:GetSigningPlatform",
	];
	/** IAM actions required for the GetSigningProfile API call. */
	static readonly GET_SIGNING_PROFILE: string[] = ["signer:GetSigningProfile"];
	/** IAM actions required for the ListProfilePermissions API call. */
	static readonly LIST_PROFILE_PERMISSIONS: string[] = [
		"signer:ListProfilePermissions",
	];
	/** IAM actions required for the ListSigningJobs API call. */
	static readonly LIST_SIGNING_JOBS: string[] = ["signer:ListSigningJobs"];
	/** IAM actions required for the ListSigningPlatforms API call. */
	static readonly LIST_SIGNING_PLATFORMS: string[] = [
		"signer:ListSigningPlatforms",
	];
	/** IAM actions required for the ListSigningProfiles API call. */
	static readonly LIST_SIGNING_PROFILES: string[] = [
		"signer:ListSigningProfiles",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"signer:ListTagsForResource",
	];
	/** IAM actions required for the PutSigningProfile API call. */
	static readonly PUT_SIGNING_PROFILE: string[] = [
		"signer:PutSigningProfile",
		"signer:TagResource",
	];
	/** IAM actions required for the RemoveProfilePermission API call. */
	static readonly REMOVE_PROFILE_PERMISSION: string[] = [
		"signer:RemoveProfilePermission",
	];
	/** IAM actions required for the RevokeSignature API call. */
	static readonly REVOKE_SIGNATURE: string[] = ["signer:RevokeSignature"];
	/** IAM actions required for the RevokeSigningProfile API call. */
	static readonly REVOKE_SIGNING_PROFILE: string[] = [
		"signer:RevokeSigningProfile",
	];
	/** IAM actions required for the SignPayload API call. */
	static readonly SIGN_PAYLOAD: string[] = ["signer:SignPayload"];
	/** IAM actions required for the StartSigningJob API call. */
	static readonly START_SIGNING_JOB: string[] = ["signer:StartSigningJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["signer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["signer:UntagResource"];
}

/**
 * Condition key constants and builders for signer.
 */
export class SignerConditions {
	/** Condition keys applicable to the CancelSigningProfile action. */
	static readonly CANCEL_SIGNING_PROFILE_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the GetSigningProfile action. */
	static readonly GET_SIGNING_PROFILE_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the PutSigningProfile action. */
	static readonly PUT_SIGNING_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RevokeSignature action. */
	static readonly REVOKE_SIGNATURE_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the RevokeSigningProfile action. */
	static readonly REVOKE_SIGNING_PROFILE_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the SignPayload action. */
	static readonly SIGN_PAYLOAD_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the StartSigningJob action. */
	static readonly START_SIGNING_JOB_CONDITION_KEYS: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: signer:ProfileVersion (String) */
	static readonly PROFILE_VERSION = "signer:ProfileVersion";

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
	 * Generates a condition block for `signer:ProfileVersion`.
	 */
	static profileVersion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "signer:ProfileVersion": value } };
	}
}
