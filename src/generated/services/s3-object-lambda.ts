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
	static readonly ABORT_MULTIPART_UPLOAD =
		"s3-object-lambda:AbortMultipartUpload";
	/** [Write] s3-object-lambda:DeleteObject */
	static readonly DELETE_OBJECT = "s3-object-lambda:DeleteObject";
	/** [Tagging] s3-object-lambda:DeleteObjectTagging */
	static readonly DELETE_OBJECT_TAGGING =
		"s3-object-lambda:DeleteObjectTagging";
	/** [Write] s3-object-lambda:DeleteObjectVersion */
	static readonly DELETE_OBJECT_VERSION =
		"s3-object-lambda:DeleteObjectVersion";
	/** [Tagging] s3-object-lambda:DeleteObjectVersionTagging */
	static readonly DELETE_OBJECT_VERSION_TAGGING =
		"s3-object-lambda:DeleteObjectVersionTagging";
	/** [Read] s3-object-lambda:GetObject */
	static readonly GET_OBJECT = "s3-object-lambda:GetObject";
	/** [Read] s3-object-lambda:GetObjectAcl */
	static readonly GET_OBJECT_ACL = "s3-object-lambda:GetObjectAcl";
	/** [Read] s3-object-lambda:GetObjectLegalHold */
	static readonly GET_OBJECT_LEGAL_HOLD = "s3-object-lambda:GetObjectLegalHold";
	/** [Read] s3-object-lambda:GetObjectRetention */
	static readonly GET_OBJECT_RETENTION = "s3-object-lambda:GetObjectRetention";
	/** [Read] s3-object-lambda:GetObjectTagging */
	static readonly GET_OBJECT_TAGGING = "s3-object-lambda:GetObjectTagging";
	/** [Read] s3-object-lambda:GetObjectVersion */
	static readonly GET_OBJECT_VERSION = "s3-object-lambda:GetObjectVersion";
	/** [Read] s3-object-lambda:GetObjectVersionAcl */
	static readonly GET_OBJECT_VERSION_ACL =
		"s3-object-lambda:GetObjectVersionAcl";
	/** [Read] s3-object-lambda:GetObjectVersionTagging */
	static readonly GET_OBJECT_VERSION_TAGGING =
		"s3-object-lambda:GetObjectVersionTagging";
	/** [List] s3-object-lambda:ListBucket */
	static readonly LIST_BUCKET = "s3-object-lambda:ListBucket";
	/** [List] s3-object-lambda:ListBucketMultipartUploads */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS =
		"s3-object-lambda:ListBucketMultipartUploads";
	/** [List] s3-object-lambda:ListBucketVersions */
	static readonly LIST_BUCKET_VERSIONS = "s3-object-lambda:ListBucketVersions";
	/** [List] s3-object-lambda:ListMultipartUploadParts */
	static readonly LIST_MULTIPART_UPLOAD_PARTS =
		"s3-object-lambda:ListMultipartUploadParts";
	/** [Write] s3-object-lambda:PutObject */
	static readonly PUT_OBJECT = "s3-object-lambda:PutObject";
	/** [PermissionManagement] s3-object-lambda:PutObjectAcl */
	static readonly PUT_OBJECT_ACL = "s3-object-lambda:PutObjectAcl";
	/** [Write] s3-object-lambda:PutObjectLegalHold */
	static readonly PUT_OBJECT_LEGAL_HOLD = "s3-object-lambda:PutObjectLegalHold";
	/** [Write] s3-object-lambda:PutObjectRetention */
	static readonly PUT_OBJECT_RETENTION = "s3-object-lambda:PutObjectRetention";
	/** [Tagging] s3-object-lambda:PutObjectTagging */
	static readonly PUT_OBJECT_TAGGING = "s3-object-lambda:PutObjectTagging";
	/** [PermissionManagement] s3-object-lambda:PutObjectVersionAcl */
	static readonly PUT_OBJECT_VERSION_ACL =
		"s3-object-lambda:PutObjectVersionAcl";
	/** [Tagging] s3-object-lambda:PutObjectVersionTagging */
	static readonly PUT_OBJECT_VERSION_TAGGING =
		"s3-object-lambda:PutObjectVersionTagging";
	/** [Write] s3-object-lambda:RestoreObject */
	static readonly RESTORE_OBJECT = "s3-object-lambda:RestoreObject";
	/** [Write] s3-object-lambda:WriteGetObjectResponse */
	static readonly WRITE_GET_OBJECT_RESPONSE =
		"s3-object-lambda:WriteGetObjectResponse";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		S3ObjectLambdaActions.GET_OBJECT,
		S3ObjectLambdaActions.GET_OBJECT_ACL,
		S3ObjectLambdaActions.GET_OBJECT_LEGAL_HOLD,
		S3ObjectLambdaActions.GET_OBJECT_RETENTION,
		S3ObjectLambdaActions.GET_OBJECT_TAGGING,
		S3ObjectLambdaActions.GET_OBJECT_VERSION,
		S3ObjectLambdaActions.GET_OBJECT_VERSION_ACL,
		S3ObjectLambdaActions.GET_OBJECT_VERSION_TAGGING,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		S3ObjectLambdaActions.ABORT_MULTIPART_UPLOAD,
		S3ObjectLambdaActions.DELETE_OBJECT,
		S3ObjectLambdaActions.DELETE_OBJECT_VERSION,
		S3ObjectLambdaActions.PUT_OBJECT,
		S3ObjectLambdaActions.PUT_OBJECT_LEGAL_HOLD,
		S3ObjectLambdaActions.PUT_OBJECT_RETENTION,
		S3ObjectLambdaActions.RESTORE_OBJECT,
		S3ObjectLambdaActions.WRITE_GET_OBJECT_RESPONSE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		S3ObjectLambdaActions.LIST_BUCKET,
		S3ObjectLambdaActions.LIST_BUCKET_MULTIPART_UPLOADS,
		S3ObjectLambdaActions.LIST_BUCKET_VERSIONS,
		S3ObjectLambdaActions.LIST_MULTIPART_UPLOAD_PARTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		S3ObjectLambdaActions.PUT_OBJECT_ACL,
		S3ObjectLambdaActions.PUT_OBJECT_VERSION_ACL,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		S3ObjectLambdaActions.DELETE_OBJECT_TAGGING,
		S3ObjectLambdaActions.DELETE_OBJECT_VERSION_TAGGING,
		S3ObjectLambdaActions.PUT_OBJECT_TAGGING,
		S3ObjectLambdaActions.PUT_OBJECT_VERSION_TAGGING,
	];
}

const ObjectlambdaaccesspointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3-object-lambda:(?<region>[^:]*):(?<account>[^:]*):accesspoint/(?<accessPointName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for s3-object-lambda resources.
 */
export class S3ObjectLambdaResources {
	/**
	 * Builds an ARN for the objectlambdaaccesspoint resource.
	 */
	static objectlambdaaccesspoint(props: {
		/** The AccessPointName component of the ARN. */
		readonly accessPointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseObjectlambdaaccesspointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPointName: string;
	} {
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
	static readonly ABORT_MULTIPART_UPLOAD_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObject action. */
	static readonly DELETE_OBJECT_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObjectTagging action. */
	static readonly DELETE_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DELETE_OBJECT_VERSION_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the DeleteObjectVersionTagging action. */
	static readonly DELETE_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObject action. */
	static readonly GET_OBJECT_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectAcl action. */
	static readonly GET_OBJECT_ACL_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectLegalHold action. */
	static readonly GET_OBJECT_LEGAL_HOLD_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectRetention action. */
	static readonly GET_OBJECT_RETENTION_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly GET_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly GET_OBJECT_VERSION_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObjectVersionAcl action. */
	static readonly GET_OBJECT_VERSION_ACL_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly GET_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the ListBucket action. */
	static readonly LIST_BUCKET_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListBucketMultipartUploads action. */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListBucketVersions action. */
	static readonly LIST_BUCKET_VERSIONS_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly LIST_MULTIPART_UPLOAD_PARTS_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObject action. */
	static readonly PUT_OBJECT_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectAcl action. */
	static readonly PUT_OBJECT_ACL_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectLegalHold action. */
	static readonly PUT_OBJECT_LEGAL_HOLD_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectRetention action. */
	static readonly PUT_OBJECT_RETENTION_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectTagging action. */
	static readonly PUT_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the PutObjectVersionAcl action. */
	static readonly PUT_OBJECT_VERSION_ACL_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the PutObjectVersionTagging action. */
	static readonly PUT_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
		"s3-object-lambda:versionid",
	];
	/** Condition keys applicable to the RestoreObject action. */
	static readonly RESTORE_OBJECT_CONDITION_KEYS: string[] = [
		"s3-object-lambda:TlsVersion",
		"s3-object-lambda:authType",
		"s3-object-lambda:signatureAge",
	];
	/** Condition keys applicable to the WriteGetObjectResponse action. */
	static readonly WRITE_GET_OBJECT_RESPONSE_CONDITION_KEYS: string[] = [
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
