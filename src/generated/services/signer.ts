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
	static readonly AddProfilePermission = "signer:AddProfilePermission";
	/** [Write] signer:CancelSigningProfile */
	static readonly CancelSigningProfile = "signer:CancelSigningProfile";
	/** [Read] signer:DescribeSigningJob */
	static readonly DescribeSigningJob = "signer:DescribeSigningJob";
	/** [Read] signer:GetRevocationStatus */
	static readonly actionGetRevocationStatus = "signer:GetRevocationStatus";
	/** [Read] signer:GetSigningPlatform */
	static readonly actionGetSigningPlatform = "signer:GetSigningPlatform";
	/** [Read] signer:GetSigningProfile */
	static readonly actionGetSigningProfile = "signer:GetSigningProfile";
	/** [Read] signer:ListProfilePermissions */
	static readonly ListProfilePermissions = "signer:ListProfilePermissions";
	/** [List] signer:ListSigningJobs */
	static readonly ListSigningJobs = "signer:ListSigningJobs";
	/** [List] signer:ListSigningPlatforms */
	static readonly ListSigningPlatforms = "signer:ListSigningPlatforms";
	/** [List] signer:ListSigningProfiles */
	static readonly ListSigningProfiles = "signer:ListSigningProfiles";
	/** [Read] signer:ListTagsForResource */
	static readonly ListTagsForResource = "signer:ListTagsForResource";
	/** [Write] signer:PutSigningProfile */
	static readonly PutSigningProfile = "signer:PutSigningProfile";
	/** [PermissionManagement] signer:RemoveProfilePermission */
	static readonly RemoveProfilePermission = "signer:RemoveProfilePermission";
	/** [Write] signer:RevokeSignature */
	static readonly RevokeSignature = "signer:RevokeSignature";
	/** [Write] signer:RevokeSigningProfile */
	static readonly RevokeSigningProfile = "signer:RevokeSigningProfile";
	/** [Write] signer:SignPayload */
	static readonly SignPayload = "signer:SignPayload";
	/** [Write] signer:StartSigningJob */
	static readonly StartSigningJob = "signer:StartSigningJob";
	/** [Tagging] signer:TagResource */
	static readonly TagResource = "signer:TagResource";
	/** [Tagging] signer:UntagResource */
	static readonly UntagResource = "signer:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SignerActions.DescribeSigningJob,
		SignerActions.actionGetRevocationStatus,
		SignerActions.actionGetSigningPlatform,
		SignerActions.actionGetSigningProfile,
		SignerActions.ListProfilePermissions,
		SignerActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SignerActions.CancelSigningProfile,
		SignerActions.PutSigningProfile,
		SignerActions.RevokeSignature,
		SignerActions.RevokeSigningProfile,
		SignerActions.SignPayload,
		SignerActions.StartSigningJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SignerActions.ListSigningJobs,
		SignerActions.ListSigningPlatforms,
		SignerActions.ListSigningProfiles,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SignerActions.AddProfilePermission,
		SignerActions.RemoveProfilePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SignerActions.TagResource,
		SignerActions.UntagResource,
	];
}

/**
 * Properties for building a signing-job ARN.
 */
export interface SignerSigningJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a signing-job ARN.
 */
export interface SignerSigningJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a signing-profile ARN.
 */
export interface SignerSigningProfileArnProps {
	/** The ProfileName component of the ARN. */
	readonly profileName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a signing-profile ARN.
 */
export interface SignerSigningProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileName component. */
	readonly profileName: string;
}

const SigningJobArnRegex =
	/^arn:(?<partition>[^:]+):signer:(?<region>[^:]*):(?<account>[^:]*):\/signing-jobs\/(?<jobId>[^:/?]+)$/;
const SigningProfileArnRegex =
	/^arn:(?<partition>[^:]+):signer:(?<region>[^:]*):(?<account>[^:]*):\/signing-profiles\/(?<profileName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for signer resources.
 */
export class SignerResources {
	/**
	 * Builds an ARN for the signing-job resource.
	 */
	static signingJob(props: SignerSigningJobArnProps): string {
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
	static parseSigningJobArn(arn: string): SignerSigningJobArnComponents {
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
	static signingProfile(props: SignerSigningProfileArnProps): string {
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
	static parseSigningProfileArn(
		arn: string,
	): SignerSigningProfileArnComponents {
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
	static readonly AddProfilePermission: string[] = [
		"signer:AddProfilePermission",
	];
	/** IAM actions required for the CancelSigningProfile API call. */
	static readonly CancelSigningProfile: string[] = [
		"signer:CancelSigningProfile",
	];
	/** IAM actions required for the DescribeSigningJob API call. */
	static readonly DescribeSigningJob: string[] = ["signer:DescribeSigningJob"];
	/** IAM actions required for the GetRevocationStatus API call. */
	static readonly opGetRevocationStatus: string[] = [
		"signer:GetRevocationStatus",
	];
	/** IAM actions required for the GetSigningPlatform API call. */
	static readonly opGetSigningPlatform: string[] = [
		"signer:GetSigningPlatform",
	];
	/** IAM actions required for the GetSigningProfile API call. */
	static readonly opGetSigningProfile: string[] = ["signer:GetSigningProfile"];
	/** IAM actions required for the ListProfilePermissions API call. */
	static readonly ListProfilePermissions: string[] = [
		"signer:ListProfilePermissions",
	];
	/** IAM actions required for the ListSigningJobs API call. */
	static readonly ListSigningJobs: string[] = ["signer:ListSigningJobs"];
	/** IAM actions required for the ListSigningPlatforms API call. */
	static readonly ListSigningPlatforms: string[] = [
		"signer:ListSigningPlatforms",
	];
	/** IAM actions required for the ListSigningProfiles API call. */
	static readonly ListSigningProfiles: string[] = [
		"signer:ListSigningProfiles",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"signer:ListTagsForResource",
	];
	/** IAM actions required for the PutSigningProfile API call. */
	static readonly PutSigningProfile: string[] = [
		"signer:PutSigningProfile",
		"signer:TagResource",
	];
	/** IAM actions required for the RemoveProfilePermission API call. */
	static readonly RemoveProfilePermission: string[] = [
		"signer:RemoveProfilePermission",
	];
	/** IAM actions required for the RevokeSignature API call. */
	static readonly RevokeSignature: string[] = ["signer:RevokeSignature"];
	/** IAM actions required for the RevokeSigningProfile API call. */
	static readonly RevokeSigningProfile: string[] = [
		"signer:RevokeSigningProfile",
	];
	/** IAM actions required for the SignPayload API call. */
	static readonly SignPayload: string[] = ["signer:SignPayload"];
	/** IAM actions required for the StartSigningJob API call. */
	static readonly StartSigningJob: string[] = ["signer:StartSigningJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["signer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["signer:UntagResource"];
}

/**
 * Condition key constants and builders for signer.
 */
export class SignerConditions {
	/** Condition keys applicable to the CancelSigningProfile action. */
	static readonly CancelSigningProfileConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the GetSigningProfile action. */
	static readonly actionGetSigningProfileConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the PutSigningProfile action. */
	static readonly PutSigningProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RevokeSignature action. */
	static readonly RevokeSignatureConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the RevokeSigningProfile action. */
	static readonly RevokeSigningProfileConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the SignPayload action. */
	static readonly SignPayloadConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the StartSigningJob action. */
	static readonly StartSigningJobConditionKeys: string[] = [
		"signer:ProfileVersion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
