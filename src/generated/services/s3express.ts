// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3express.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3express service.
 */
export class S3expressActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3express";

	/** [Write] s3express:CreateAccessPoint */
	static readonly CreateAccessPoint = "s3express:CreateAccessPoint";
	/** [Write] s3express:CreateBucket */
	static readonly CreateBucket = "s3express:CreateBucket";
	/** [Write] s3express:CreateSession */
	static readonly CreateSession = "s3express:CreateSession";
	/** [Write] s3express:DeleteAccessPoint */
	static readonly DeleteAccessPoint = "s3express:DeleteAccessPoint";
	/** [PermissionManagement] s3express:DeleteAccessPointPolicy */
	static readonly DeleteAccessPointPolicy = "s3express:DeleteAccessPointPolicy";
	/** [PermissionManagement] s3express:DeleteAccessPointScope */
	static readonly DeleteAccessPointScope = "s3express:DeleteAccessPointScope";
	/** [Write] s3express:DeleteBucket */
	static readonly DeleteBucket = "s3express:DeleteBucket";
	/** [PermissionManagement] s3express:DeleteBucketPolicy */
	static readonly DeleteBucketPolicy = "s3express:DeleteBucketPolicy";
	/** [Read] s3express:GetAccessPoint */
	static readonly actionGetAccessPoint = "s3express:GetAccessPoint";
	/** [Read] s3express:GetAccessPointPolicy */
	static readonly actionGetAccessPointPolicy = "s3express:GetAccessPointPolicy";
	/** [Read] s3express:GetAccessPointScope */
	static readonly actionGetAccessPointScope = "s3express:GetAccessPointScope";
	/** [Read] s3express:GetBucketPolicy */
	static readonly actionGetBucketPolicy = "s3express:GetBucketPolicy";
	/** [Read] s3express:GetEncryptionConfiguration */
	static readonly actionGetEncryptionConfiguration =
		"s3express:GetEncryptionConfiguration";
	/** [Read] s3express:GetInventoryConfiguration */
	static readonly actionGetInventoryConfiguration =
		"s3express:GetInventoryConfiguration";
	/** [Read] s3express:GetLifecycleConfiguration */
	static readonly actionGetLifecycleConfiguration =
		"s3express:GetLifecycleConfiguration";
	/** [Read] s3express:GetMetricsConfiguration */
	static readonly actionGetMetricsConfiguration =
		"s3express:GetMetricsConfiguration";
	/** [List] s3express:ListAccessPointsForDirectoryBuckets */
	static readonly ListAccessPointsForDirectoryBuckets =
		"s3express:ListAccessPointsForDirectoryBuckets";
	/** [List] s3express:ListAllMyDirectoryBuckets */
	static readonly ListAllMyDirectoryBuckets =
		"s3express:ListAllMyDirectoryBuckets";
	/** [List] s3express:ListTagsForResource */
	static readonly ListTagsForResource = "s3express:ListTagsForResource";
	/** [PermissionManagement] s3express:PutAccessPointPolicy */
	static readonly PutAccessPointPolicy = "s3express:PutAccessPointPolicy";
	/** [PermissionManagement] s3express:PutAccessPointScope */
	static readonly PutAccessPointScope = "s3express:PutAccessPointScope";
	/** [PermissionManagement] s3express:PutBucketPolicy */
	static readonly PutBucketPolicy = "s3express:PutBucketPolicy";
	/** [Write] s3express:PutEncryptionConfiguration */
	static readonly PutEncryptionConfiguration =
		"s3express:PutEncryptionConfiguration";
	/** [Write] s3express:PutInventoryConfiguration */
	static readonly PutInventoryConfiguration =
		"s3express:PutInventoryConfiguration";
	/** [Write] s3express:PutLifecycleConfiguration */
	static readonly PutLifecycleConfiguration =
		"s3express:PutLifecycleConfiguration";
	/** [Write] s3express:PutMetricsConfiguration */
	static readonly PutMetricsConfiguration = "s3express:PutMetricsConfiguration";
	/** [Tagging] s3express:TagResource */
	static readonly TagResource = "s3express:TagResource";
	/** [Tagging] s3express:UntagResource */
	static readonly UntagResource = "s3express:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3expressActions.actionGetAccessPoint,
		S3expressActions.actionGetAccessPointPolicy,
		S3expressActions.actionGetAccessPointScope,
		S3expressActions.actionGetBucketPolicy,
		S3expressActions.actionGetEncryptionConfiguration,
		S3expressActions.actionGetInventoryConfiguration,
		S3expressActions.actionGetLifecycleConfiguration,
		S3expressActions.actionGetMetricsConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3expressActions.CreateAccessPoint,
		S3expressActions.CreateBucket,
		S3expressActions.CreateSession,
		S3expressActions.DeleteAccessPoint,
		S3expressActions.DeleteBucket,
		S3expressActions.PutEncryptionConfiguration,
		S3expressActions.PutInventoryConfiguration,
		S3expressActions.PutLifecycleConfiguration,
		S3expressActions.PutMetricsConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3expressActions.ListAccessPointsForDirectoryBuckets,
		S3expressActions.ListAllMyDirectoryBuckets,
		S3expressActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3expressActions.DeleteAccessPointPolicy,
		S3expressActions.DeleteAccessPointScope,
		S3expressActions.DeleteBucketPolicy,
		S3expressActions.PutAccessPointPolicy,
		S3expressActions.PutAccessPointScope,
		S3expressActions.PutBucketPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3expressActions.TagResource,
		S3expressActions.UntagResource,
	];
}

/**
 * Properties for building a accesspoint ARN.
 */
export interface S3expressAccesspointArnProps {
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
 * Parsed components of a accesspoint ARN.
 */
export interface S3expressAccesspointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointName component. */
	readonly accessPointName: string;
}

/**
 * Properties for building a bucket ARN.
 */
export interface S3expressBucketArnProps {
	/** The BucketName component of the ARN. */
	readonly bucketName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bucket ARN.
 */
export interface S3expressBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
}

const AccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3express:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)$/;
const BucketArnRegex =
	/^arn:(?<partition>[^:]+):s3express:(?<region>[^:]*):(?<account>[^:]*):bucket\/(?<bucketName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3express resources.
 */
export class S3expressResources {
	/**
	 * Builds an ARN for the accesspoint resource.
	 */
	static accesspoint(props: S3expressAccesspointArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3express:${props.region ?? "*"}:${props.account ?? "*"}:accesspoint/${props.accessPointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accesspoint resource.
	 */
	static isValidAccesspointArn(arn: string): boolean {
		return AccesspointArnRegex.test(arn);
	}

	/**
	 * Parses a accesspoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccesspointArn(arn: string): S3expressAccesspointArnComponents {
		const match = AccesspointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accesspoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPointName: match.groups!.accessPointName,
		};
	}

	/**
	 * Builds an ARN for the bucket resource.
	 */
	static bucket(props: S3expressBucketArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3express:${props.region ?? "*"}:${props.account ?? "*"}:bucket/${props.bucketName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bucket resource.
	 */
	static isValidBucketArn(arn: string): boolean {
		return BucketArnRegex.test(arn);
	}

	/**
	 * Parses a bucket ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBucketArn(arn: string): S3expressBucketArnComponents {
		const match = BucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bucketName: match.groups!.bucketName,
		};
	}
}

/**
 * Condition key constants and builders for s3express.
 */
export class S3expressConditions {
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CreateAccessPointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:LocationName",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CreateBucketConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3express:LocationName",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CreateSessionConditionKeys: string[] = [
		"s3express:AllAccessRestrictedToLocalZoneGroup",
		"s3express:Permissions",
		"s3express:ResourceAccount",
		"s3express:SessionMode",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureAge",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
		"s3express:x-amz-server-side-encryption",
		"s3express:x-amz-server-side-encryption-aws-kms-key-id",
	];
	/** Condition keys applicable to the DeleteAccessPoint action. */
	static readonly DeleteAccessPointConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPointPolicy action. */
	static readonly DeleteAccessPointPolicyConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPointScope action. */
	static readonly DeleteAccessPointScopeConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucket action. */
	static readonly DeleteBucketConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketPolicy action. */
	static readonly DeleteBucketPolicyConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPoint action. */
	static readonly actionGetAccessPointConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointPolicy action. */
	static readonly actionGetAccessPointPolicyConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointScope action. */
	static readonly actionGetAccessPointScopeConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicy action. */
	static readonly actionGetBucketPolicyConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetEncryptionConfiguration action. */
	static readonly actionGetEncryptionConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetInventoryConfiguration action. */
	static readonly actionGetInventoryConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetLifecycleConfiguration action. */
	static readonly actionGetLifecycleConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetMetricsConfiguration action. */
	static readonly actionGetMetricsConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPointsForDirectoryBuckets action. */
	static readonly ListAccessPointsForDirectoryBucketsConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAllMyDirectoryBuckets action. */
	static readonly ListAllMyDirectoryBucketsConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessPointPolicy action. */
	static readonly PutAccessPointPolicyConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessPointScope action. */
	static readonly PutAccessPointScopeConditionKeys: string[] = [
		"s3express:AccessPointNetworkOrigin",
		"s3express:DataAccessPointAccount",
		"s3express:DataAccessPointArn",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPolicy action. */
	static readonly PutBucketPolicyConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutEncryptionConfiguration action. */
	static readonly PutEncryptionConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutInventoryConfiguration action. */
	static readonly PutInventoryConfigurationConditionKeys: string[] = [
		"s3express:InventoryAccessibleOptionalFields",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutLifecycleConfiguration action. */
	static readonly PutLifecycleConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutMetricsConfiguration action. */
	static readonly PutMetricsConfigurationConditionKeys: string[] = [
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"s3express:ResourceAccount",
		"s3express:TlsVersion",
		"s3express:authType",
		"s3express:signatureversion",
		"s3express:x-amz-content-sha256",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: s3express:AccessPointNetworkOrigin (String) */
	static readonly ACCESS_POINT_NETWORK_ORIGIN =
		"s3express:AccessPointNetworkOrigin";
	/** Condition key: s3express:AccessPointTag/${TagKey} (String) */
	static readonly ACCESS_POINT_TAG = "s3express:AccessPointTag/${TagKey}";
	/** Condition key: s3express:AllAccessRestrictedToLocalZoneGroup (String) */
	static readonly ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP =
		"s3express:AllAccessRestrictedToLocalZoneGroup";
	/** Condition key: s3express:BucketTag/${TagKey} (String) */
	static readonly BUCKET_TAG = "s3express:BucketTag/${TagKey}";
	/** Condition key: s3express:DataAccessPointAccount (String) */
	static readonly DATA_ACCESS_POINT_ACCOUNT =
		"s3express:DataAccessPointAccount";
	/** Condition key: s3express:DataAccessPointArn (ARN) */
	static readonly DATA_ACCESS_POINT_ARN = "s3express:DataAccessPointArn";
	/** Condition key: s3express:InventoryAccessibleOptionalFields (ArrayOfString) */
	static readonly INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS =
		"s3express:InventoryAccessibleOptionalFields";
	/** Condition key: s3express:LocationName (String) */
	static readonly LOCATION_NAME = "s3express:LocationName";
	/** Condition key: s3express:Permissions (ArrayOfString) */
	static readonly PERMISSIONS = "s3express:Permissions";
	/** Condition key: s3express:ResourceAccount (String) */
	static readonly RESOURCE_ACCOUNT = "s3express:ResourceAccount";
	/** Condition key: s3express:SessionMode (String) */
	static readonly SESSION_MODE = "s3express:SessionMode";
	/** Condition key: s3express:TlsVersion (Numeric) */
	static readonly TLS_VERSION = "s3express:TlsVersion";
	/** Condition key: s3express:authType (String) */
	static readonly AUTH_TYPE = "s3express:authType";
	/** Condition key: s3express:signatureAge (Numeric) */
	static readonly SIGNATURE_AGE = "s3express:signatureAge";
	/** Condition key: s3express:signatureversion (String) */
	static readonly SIGNATUREVERSION = "s3express:signatureversion";
	/** Condition key: s3express:x-amz-content-sha256 (String) */
	static readonly X_AMZ_CONTENT_SHA256 = "s3express:x-amz-content-sha256";
	/** Condition key: s3express:x-amz-server-side-encryption (String) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION =
		"s3express:x-amz-server-side-encryption";
	/** Condition key: s3express:x-amz-server-side-encryption-aws-kms-key-id (ARN) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID =
		"s3express:x-amz-server-side-encryption-aws-kms-key-id";

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
	 * Generates a condition block for `s3express:AccessPointNetworkOrigin`.
	 */
	static accessPointNetworkOrigin(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:AccessPointNetworkOrigin": value } };
	}

	/**
	 * Generates a condition block for `s3express:AccessPointTag/${TagKey}`.
	 */
	static accessPointTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:AccessPointTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3express:AllAccessRestrictedToLocalZoneGroup`.
	 */
	static allAccessRestrictedToLocalZoneGroup(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "s3express:AllAccessRestrictedToLocalZoneGroup": value },
		};
	}

	/**
	 * Generates a condition block for `s3express:BucketTag/${TagKey}`.
	 */
	static bucketTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:BucketTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3express:DataAccessPointAccount`.
	 */
	static dataAccessPointAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:DataAccessPointAccount": value } };
	}

	/**
	 * Generates a condition block for `s3express:DataAccessPointArn`.
	 */
	static dataAccessPointARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3express:DataAccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `s3express:InventoryAccessibleOptionalFields`.
	 */
	static inventoryAccessibleOptionalFields(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"s3express:InventoryAccessibleOptionalFields": values,
			},
		};
	}

	/**
	 * Generates a condition block for `s3express:LocationName`.
	 */
	static locationName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:LocationName": value } };
	}

	/**
	 * Generates a condition block for `s3express:Permissions`.
	 */
	static permissions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "s3express:Permissions": values } };
	}

	/**
	 * Generates a condition block for `s3express:ResourceAccount`.
	 */
	static resourceAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:ResourceAccount": value } };
	}

	/**
	 * Generates a condition block for `s3express:SessionMode`.
	 */
	static sessionMode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:SessionMode": value } };
	}

	/**
	 * Generates a condition block for `s3express:TlsVersion`.
	 */
	static tlsVersion(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3express:TlsVersion": value } };
	}

	/**
	 * Generates a condition block for `s3express:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:authType": value } };
	}

	/**
	 * Generates a condition block for `s3express:signatureAge`.
	 */
	static signatureAge(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3express:signatureAge": value } };
	}

	/**
	 * Generates a condition block for `s3express:signatureversion`.
	 */
	static signatureversion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:signatureversion": value } };
	}

	/**
	 * Generates a condition block for `s3express:x-amz-content-sha256`.
	 */
	static xAmzContentSha256(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3express:x-amz-content-sha256": value } };
	}

	/**
	 * Generates a condition block for `s3express:x-amz-server-side-encryption`.
	 */
	static xAmzServerSideEncryption(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "s3express:x-amz-server-side-encryption": value },
		};
	}

	/**
	 * Generates a condition block for `s3express:x-amz-server-side-encryption-aws-kms-key-id`.
	 */
	static xAmzServerSideEncryptionAWSKMSKeyId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: {
				"s3express:x-amz-server-side-encryption-aws-kms-key-id": value,
			},
		};
	}
}
