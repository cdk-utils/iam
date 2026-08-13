// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3-object-lambda.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3-object-lambda service.
 */
export class S3ObjectLambdaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3-object-lambda";

	/** [Write] s3-object-lambda:AbortMultipartUpload */
	static readonly AbortMultipartUpload =
		"s3-object-lambda:AbortMultipartUpload";
	/** [Write] s3-object-lambda:DeleteObject */
	static readonly DeleteObject = "s3-object-lambda:DeleteObject";
	/** [Tagging] s3-object-lambda:DeleteObjectTagging */
	static readonly DeleteObjectTagging = "s3-object-lambda:DeleteObjectTagging";
	/** [Write] s3-object-lambda:DeleteObjectVersion */
	static readonly DeleteObjectVersion = "s3-object-lambda:DeleteObjectVersion";
	/** [Tagging] s3-object-lambda:DeleteObjectVersionTagging */
	static readonly DeleteObjectVersionTagging =
		"s3-object-lambda:DeleteObjectVersionTagging";
	/** [Read] s3-object-lambda:GetObject */
	static readonly actionGetObject = "s3-object-lambda:GetObject";
	/** [Read] s3-object-lambda:GetObjectAcl */
	static readonly actionGetObjectAcl = "s3-object-lambda:GetObjectAcl";
	/** [Read] s3-object-lambda:GetObjectLegalHold */
	static readonly actionGetObjectLegalHold =
		"s3-object-lambda:GetObjectLegalHold";
	/** [Read] s3-object-lambda:GetObjectRetention */
	static readonly actionGetObjectRetention =
		"s3-object-lambda:GetObjectRetention";
	/** [Read] s3-object-lambda:GetObjectTagging */
	static readonly actionGetObjectTagging = "s3-object-lambda:GetObjectTagging";
	/** [Read] s3-object-lambda:GetObjectVersion */
	static readonly actionGetObjectVersion = "s3-object-lambda:GetObjectVersion";
	/** [Read] s3-object-lambda:GetObjectVersionAcl */
	static readonly actionGetObjectVersionAcl =
		"s3-object-lambda:GetObjectVersionAcl";
	/** [Read] s3-object-lambda:GetObjectVersionTagging */
	static readonly actionGetObjectVersionTagging =
		"s3-object-lambda:GetObjectVersionTagging";
	/** [List] s3-object-lambda:ListBucket */
	static readonly ListBucket = "s3-object-lambda:ListBucket";
	/** [List] s3-object-lambda:ListBucketMultipartUploads */
	static readonly ListBucketMultipartUploads =
		"s3-object-lambda:ListBucketMultipartUploads";
	/** [List] s3-object-lambda:ListBucketVersions */
	static readonly ListBucketVersions = "s3-object-lambda:ListBucketVersions";
	/** [List] s3-object-lambda:ListMultipartUploadParts */
	static readonly ListMultipartUploadParts =
		"s3-object-lambda:ListMultipartUploadParts";
	/** [Write] s3-object-lambda:PutObject */
	static readonly PutObject = "s3-object-lambda:PutObject";
	/** [PermissionManagement] s3-object-lambda:PutObjectAcl */
	static readonly PutObjectAcl = "s3-object-lambda:PutObjectAcl";
	/** [Write] s3-object-lambda:PutObjectLegalHold */
	static readonly PutObjectLegalHold = "s3-object-lambda:PutObjectLegalHold";
	/** [Write] s3-object-lambda:PutObjectRetention */
	static readonly PutObjectRetention = "s3-object-lambda:PutObjectRetention";
	/** [Tagging] s3-object-lambda:PutObjectTagging */
	static readonly PutObjectTagging = "s3-object-lambda:PutObjectTagging";
	/** [PermissionManagement] s3-object-lambda:PutObjectVersionAcl */
	static readonly PutObjectVersionAcl = "s3-object-lambda:PutObjectVersionAcl";
	/** [Tagging] s3-object-lambda:PutObjectVersionTagging */
	static readonly PutObjectVersionTagging =
		"s3-object-lambda:PutObjectVersionTagging";
	/** [Write] s3-object-lambda:RestoreObject */
	static readonly RestoreObject = "s3-object-lambda:RestoreObject";
	/** [Write] s3-object-lambda:WriteGetObjectResponse */
	static readonly WriteGetObjectResponse =
		"s3-object-lambda:WriteGetObjectResponse";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3ObjectLambdaActions.actionGetObject,
		S3ObjectLambdaActions.actionGetObjectAcl,
		S3ObjectLambdaActions.actionGetObjectLegalHold,
		S3ObjectLambdaActions.actionGetObjectRetention,
		S3ObjectLambdaActions.actionGetObjectTagging,
		S3ObjectLambdaActions.actionGetObjectVersion,
		S3ObjectLambdaActions.actionGetObjectVersionAcl,
		S3ObjectLambdaActions.actionGetObjectVersionTagging,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3ObjectLambdaActions.AbortMultipartUpload,
		S3ObjectLambdaActions.DeleteObject,
		S3ObjectLambdaActions.DeleteObjectVersion,
		S3ObjectLambdaActions.PutObject,
		S3ObjectLambdaActions.PutObjectLegalHold,
		S3ObjectLambdaActions.PutObjectRetention,
		S3ObjectLambdaActions.RestoreObject,
		S3ObjectLambdaActions.WriteGetObjectResponse,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3ObjectLambdaActions.ListBucket,
		S3ObjectLambdaActions.ListBucketMultipartUploads,
		S3ObjectLambdaActions.ListBucketVersions,
		S3ObjectLambdaActions.ListMultipartUploadParts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3ObjectLambdaActions.PutObjectAcl,
		S3ObjectLambdaActions.PutObjectVersionAcl,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3ObjectLambdaActions.DeleteObjectTagging,
		S3ObjectLambdaActions.DeleteObjectVersionTagging,
		S3ObjectLambdaActions.PutObjectTagging,
		S3ObjectLambdaActions.PutObjectVersionTagging,
	];
}

/**
 * Properties for building a objectlambdaaccesspoint ARN.
 */
export interface S3ObjectLambdaObjectlambdaaccesspointArnProps {
	/** The AccessPointName component of the ARN. */
	readonly accessPointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a objectlambdaaccesspoint ARN.
 */
export interface S3ObjectLambdaObjectlambdaaccesspointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointName component. */
	readonly accessPointName: string;
}

const ObjectlambdaaccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3-object-lambda:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3-object-lambda resources.
 */
export class S3ObjectLambdaResources {
	/**
	 * Builds an ARN for the objectlambdaaccesspoint resource.
	 */
	static objectlambdaaccesspoint(
		props: S3ObjectLambdaObjectlambdaaccesspointArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:s3-object-lambda:${props.region ?? "*"}:${props.account ?? "*"}:accesspoint/${props.accessPointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the objectlambdaaccesspoint resource.
	 */
	static isValidObjectlambdaaccesspointArn(arn: string): boolean {
		return ObjectlambdaaccesspointArnRegex.test(arn);
	}

	/**
	 * Parses a objectlambdaaccesspoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObjectlambdaaccesspointArn(
		arn: string,
	): S3ObjectLambdaObjectlambdaaccesspointArnComponents {
		const match = ObjectlambdaaccesspointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid objectlambdaaccesspoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPointName: match.groups!.accessPointName,
		};
	}
}

/**
 * Condition key constants and builders for s3-object-lambda.
 */
export class S3ObjectLambdaConditions {
	/** Condition keys applicable to the AbortMultipartUpload action. */
	static readonly AbortMultipartUploadConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObject action. */
	static readonly DeleteObjectConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObjectTagging action. */
	static readonly DeleteObjectTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DeleteObjectVersionConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the DeleteObjectVersionTagging action. */
	static readonly DeleteObjectVersionTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObject action. */
	static readonly actionGetObjectConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectAcl action. */
	static readonly actionGetObjectAclConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectLegalHold action. */
	static readonly actionGetObjectLegalHoldConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectRetention action. */
	static readonly actionGetObjectRetentionConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly actionGetObjectTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly actionGetObjectVersionConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObjectVersionAcl action. */
	static readonly actionGetObjectVersionAclConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly actionGetObjectVersionTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the ListBucket action. */
	static readonly ListBucketConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListBucketMultipartUploads action. */
	static readonly ListBucketMultipartUploadsConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListBucketVersions action. */
	static readonly ListBucketVersionsConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly ListMultipartUploadPartsConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObject action. */
	static readonly PutObjectConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectAcl action. */
	static readonly PutObjectAclConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectLegalHold action. */
	static readonly PutObjectLegalHoldConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectRetention action. */
	static readonly PutObjectRetentionConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectTagging action. */
	static readonly PutObjectTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectVersionAcl action. */
	static readonly PutObjectVersionAclConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the PutObjectVersionTagging action. */
	static readonly PutObjectVersionTaggingConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the RestoreObject action. */
	static readonly RestoreObjectConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the WriteGetObjectResponse action. */
	static readonly WriteGetObjectResponseConditionKeys: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];

	/** Condition key: s3-object-lambda:TlsVersion (Numeric) */
	static readonly TLS_VERSION = "s3-object-lambda:TlsVersion";
	/** Condition key: s3-object-lambda:authType (String) */
	static readonly AUTH_TYPE = "s3-object-lambda:authType";
	/** Condition key: s3-object-lambda:signatureAge (Numeric) */
	static readonly SIGNATURE_AGE = "s3-object-lambda:signatureAge";
	/** Condition key: s3-object-lambda:versionid (String) */
	static readonly VERSIONID = "s3-object-lambda:versionid";

	/**
	 * Generates a condition block for `s3-object-lambda:TlsVersion`.
	 */
	static tlsVersion(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3-object-lambda:TlsVersion": value } };
	}

	/**
	 * Generates a condition block for `s3-object-lambda:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-object-lambda:authType": value } };
	}

	/**
	 * Generates a condition block for `s3-object-lambda:signatureAge`.
	 */
	static signatureAge(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3-object-lambda:signatureAge": value } };
	}

	/**
	 * Generates a condition block for `s3-object-lambda:versionid`.
	 */
	static versionid(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-object-lambda:versionid": value } };
	}
}
