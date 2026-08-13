// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3-outposts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3-outposts service.
 */
export class S3OutpostsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3-outposts";

	/** [Write] s3-outposts:AbortMultipartUpload */
	static readonly AbortMultipartUpload = "s3-outposts:AbortMultipartUpload";
	/** [Write] s3-outposts:CreateAccessPoint */
	static readonly CreateAccessPoint = "s3-outposts:CreateAccessPoint";
	/** [Write] s3-outposts:CreateBucket */
	static readonly CreateBucket = "s3-outposts:CreateBucket";
	/** [Write] s3-outposts:CreateEndpoint */
	static readonly CreateEndpoint = "s3-outposts:CreateEndpoint";
	/** [Write] s3-outposts:DeleteAccessPoint */
	static readonly DeleteAccessPoint = "s3-outposts:DeleteAccessPoint";
	/** [PermissionManagement] s3-outposts:DeleteAccessPointPolicy */
	static readonly DeleteAccessPointPolicy =
		"s3-outposts:DeleteAccessPointPolicy";
	/** [Write] s3-outposts:DeleteBucket */
	static readonly DeleteBucket = "s3-outposts:DeleteBucket";
	/** [PermissionManagement] s3-outposts:DeleteBucketPolicy */
	static readonly DeleteBucketPolicy = "s3-outposts:DeleteBucketPolicy";
	/** [Write] s3-outposts:DeleteEndpoint */
	static readonly DeleteEndpoint = "s3-outposts:DeleteEndpoint";
	/** [Write] s3-outposts:DeleteObject */
	static readonly DeleteObject = "s3-outposts:DeleteObject";
	/** [Tagging] s3-outposts:DeleteObjectTagging */
	static readonly DeleteObjectTagging = "s3-outposts:DeleteObjectTagging";
	/** [Write] s3-outposts:DeleteObjectVersion */
	static readonly DeleteObjectVersion = "s3-outposts:DeleteObjectVersion";
	/** [Tagging] s3-outposts:DeleteObjectVersionTagging */
	static readonly DeleteObjectVersionTagging =
		"s3-outposts:DeleteObjectVersionTagging";
	/** [Read] s3-outposts:GetAccessPoint */
	static readonly actionGetAccessPoint = "s3-outposts:GetAccessPoint";
	/** [Read] s3-outposts:GetAccessPointPolicy */
	static readonly actionGetAccessPointPolicy =
		"s3-outposts:GetAccessPointPolicy";
	/** [Read] s3-outposts:GetBucket */
	static readonly actionGetBucket = "s3-outposts:GetBucket";
	/** [Read] s3-outposts:GetBucketPolicy */
	static readonly actionGetBucketPolicy = "s3-outposts:GetBucketPolicy";
	/** [Read] s3-outposts:GetBucketTagging */
	static readonly actionGetBucketTagging = "s3-outposts:GetBucketTagging";
	/** [Read] s3-outposts:GetBucketVersioning */
	static readonly actionGetBucketVersioning = "s3-outposts:GetBucketVersioning";
	/** [Read] s3-outposts:GetLifecycleConfiguration */
	static readonly actionGetLifecycleConfiguration =
		"s3-outposts:GetLifecycleConfiguration";
	/** [Read] s3-outposts:GetObject */
	static readonly actionGetObject = "s3-outposts:GetObject";
	/** [Read] s3-outposts:GetObjectTagging */
	static readonly actionGetObjectTagging = "s3-outposts:GetObjectTagging";
	/** [Read] s3-outposts:GetObjectVersion */
	static readonly actionGetObjectVersion = "s3-outposts:GetObjectVersion";
	/** [Read] s3-outposts:GetObjectVersionForReplication */
	static readonly actionGetObjectVersionForReplication =
		"s3-outposts:GetObjectVersionForReplication";
	/** [Read] s3-outposts:GetObjectVersionTagging */
	static readonly actionGetObjectVersionTagging =
		"s3-outposts:GetObjectVersionTagging";
	/** [Read] s3-outposts:GetReplicationConfiguration */
	static readonly actionGetReplicationConfiguration =
		"s3-outposts:GetReplicationConfiguration";
	/** [List] s3-outposts:ListAccessPoints */
	static readonly ListAccessPoints = "s3-outposts:ListAccessPoints";
	/** [List] s3-outposts:ListBucket */
	static readonly ListBucket = "s3-outposts:ListBucket";
	/** [List] s3-outposts:ListBucketMultipartUploads */
	static readonly ListBucketMultipartUploads =
		"s3-outposts:ListBucketMultipartUploads";
	/** [List] s3-outposts:ListBucketVersions */
	static readonly ListBucketVersions = "s3-outposts:ListBucketVersions";
	/** [List] s3-outposts:ListEndpoints */
	static readonly ListEndpoints = "s3-outposts:ListEndpoints";
	/** [List] s3-outposts:ListMultipartUploadParts */
	static readonly ListMultipartUploadParts =
		"s3-outposts:ListMultipartUploadParts";
	/** [List] s3-outposts:ListOutpostsWithS3 */
	static readonly ListOutpostsWithS3 = "s3-outposts:ListOutpostsWithS3";
	/** [List] s3-outposts:ListRegionalBuckets */
	static readonly ListRegionalBuckets = "s3-outposts:ListRegionalBuckets";
	/** [List] s3-outposts:ListSharedEndpoints */
	static readonly ListSharedEndpoints = "s3-outposts:ListSharedEndpoints";
	/** [PermissionManagement] s3-outposts:PutAccessPointPolicy */
	static readonly PutAccessPointPolicy = "s3-outposts:PutAccessPointPolicy";
	/** [PermissionManagement] s3-outposts:PutBucketPolicy */
	static readonly PutBucketPolicy = "s3-outposts:PutBucketPolicy";
	/** [Tagging] s3-outposts:PutBucketTagging */
	static readonly PutBucketTagging = "s3-outposts:PutBucketTagging";
	/** [Write] s3-outposts:PutBucketVersioning */
	static readonly PutBucketVersioning = "s3-outposts:PutBucketVersioning";
	/** [Write] s3-outposts:PutLifecycleConfiguration */
	static readonly PutLifecycleConfiguration =
		"s3-outposts:PutLifecycleConfiguration";
	/** [Write] s3-outposts:PutObject */
	static readonly PutObject = "s3-outposts:PutObject";
	/** [PermissionManagement] s3-outposts:PutObjectAcl */
	static readonly PutObjectAcl = "s3-outposts:PutObjectAcl";
	/** [Tagging] s3-outposts:PutObjectTagging */
	static readonly PutObjectTagging = "s3-outposts:PutObjectTagging";
	/** [Tagging] s3-outposts:PutObjectVersionTagging */
	static readonly PutObjectVersionTagging =
		"s3-outposts:PutObjectVersionTagging";
	/** [Write] s3-outposts:PutReplicationConfiguration */
	static readonly PutReplicationConfiguration =
		"s3-outposts:PutReplicationConfiguration";
	/** [Write] s3-outposts:ReplicateDelete */
	static readonly ReplicateDelete = "s3-outposts:ReplicateDelete";
	/** [Write] s3-outposts:ReplicateObject */
	static readonly ReplicateObject = "s3-outposts:ReplicateObject";
	/** [Tagging] s3-outposts:ReplicateTags */
	static readonly ReplicateTags = "s3-outposts:ReplicateTags";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3OutpostsActions.actionGetAccessPoint,
		S3OutpostsActions.actionGetAccessPointPolicy,
		S3OutpostsActions.actionGetBucket,
		S3OutpostsActions.actionGetBucketPolicy,
		S3OutpostsActions.actionGetBucketTagging,
		S3OutpostsActions.actionGetBucketVersioning,
		S3OutpostsActions.actionGetLifecycleConfiguration,
		S3OutpostsActions.actionGetObject,
		S3OutpostsActions.actionGetObjectTagging,
		S3OutpostsActions.actionGetObjectVersion,
		S3OutpostsActions.actionGetObjectVersionForReplication,
		S3OutpostsActions.actionGetObjectVersionTagging,
		S3OutpostsActions.actionGetReplicationConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3OutpostsActions.AbortMultipartUpload,
		S3OutpostsActions.CreateAccessPoint,
		S3OutpostsActions.CreateBucket,
		S3OutpostsActions.CreateEndpoint,
		S3OutpostsActions.DeleteAccessPoint,
		S3OutpostsActions.DeleteBucket,
		S3OutpostsActions.DeleteEndpoint,
		S3OutpostsActions.DeleteObject,
		S3OutpostsActions.DeleteObjectVersion,
		S3OutpostsActions.PutBucketVersioning,
		S3OutpostsActions.PutLifecycleConfiguration,
		S3OutpostsActions.PutObject,
		S3OutpostsActions.PutReplicationConfiguration,
		S3OutpostsActions.ReplicateDelete,
		S3OutpostsActions.ReplicateObject,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3OutpostsActions.ListAccessPoints,
		S3OutpostsActions.ListBucket,
		S3OutpostsActions.ListBucketMultipartUploads,
		S3OutpostsActions.ListBucketVersions,
		S3OutpostsActions.ListEndpoints,
		S3OutpostsActions.ListMultipartUploadParts,
		S3OutpostsActions.ListOutpostsWithS3,
		S3OutpostsActions.ListRegionalBuckets,
		S3OutpostsActions.ListSharedEndpoints,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3OutpostsActions.DeleteAccessPointPolicy,
		S3OutpostsActions.DeleteBucketPolicy,
		S3OutpostsActions.PutAccessPointPolicy,
		S3OutpostsActions.PutBucketPolicy,
		S3OutpostsActions.PutObjectAcl,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3OutpostsActions.DeleteObjectTagging,
		S3OutpostsActions.DeleteObjectVersionTagging,
		S3OutpostsActions.PutBucketTagging,
		S3OutpostsActions.PutObjectTagging,
		S3OutpostsActions.PutObjectVersionTagging,
		S3OutpostsActions.ReplicateTags,
	];
}

/**
 * Properties for building a accesspoint ARN.
 */
export interface S3OutpostsAccesspointArnProps {
	/** The OutpostId component of the ARN. */
	readonly outpostId: string;
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
export interface S3OutpostsAccesspointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutpostId component. */
	readonly outpostId: string;
	/** The AccessPointName component. */
	readonly accessPointName: string;
}

/**
 * Properties for building a bucket ARN.
 */
export interface S3OutpostsBucketArnProps {
	/** The OutpostId component of the ARN. */
	readonly outpostId: string;
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
export interface S3OutpostsBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutpostId component. */
	readonly outpostId: string;
	/** The BucketName component. */
	readonly bucketName: string;
}

/**
 * Properties for building a endpoint ARN.
 */
export interface S3OutpostsEndpointArnProps {
	/** The OutpostId component of the ARN. */
	readonly outpostId: string;
	/** The EndpointId component of the ARN. */
	readonly endpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpoint ARN.
 */
export interface S3OutpostsEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutpostId component. */
	readonly outpostId: string;
	/** The EndpointId component. */
	readonly endpointId: string;
}

/**
 * Properties for building a object ARN.
 */
export interface S3OutpostsObjectArnProps {
	/** The OutpostId component of the ARN. */
	readonly outpostId: string;
	/** The BucketName component of the ARN. */
	readonly bucketName: string;
	/** The ObjectName component of the ARN. */
	readonly objectName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a object ARN.
 */
export interface S3OutpostsObjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutpostId component. */
	readonly outpostId: string;
	/** The BucketName component. */
	readonly bucketName: string;
	/** The ObjectName component. */
	readonly objectName: string;
}

const AccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost\/(?<outpostId>[^:/?]+)\/accesspoint\/(?<accessPointName>[^:/?]+)$/;
const BucketArnRegex =
	/^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost\/(?<outpostId>[^:/?]+)\/bucket\/(?<bucketName>[^:/?]+)$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost\/(?<outpostId>[^:/?]+)\/endpoint\/(?<endpointId>[^:/?]+)$/;
const ObjectArnRegex =
	/^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost\/(?<outpostId>[^:/?]+)\/bucket\/(?<bucketName>[^:/?]+)\/object\/(?<objectName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3-outposts resources.
 */
export class S3OutpostsResources {
	/**
	 * Builds an ARN for the accesspoint resource.
	 */
	static accesspoint(props: S3OutpostsAccesspointArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3-outposts:${props.region ?? "*"}:${props.account ?? "*"}:outpost/${props.outpostId}/accesspoint/${props.accessPointName}`;
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
	static parseAccesspointArn(arn: string): S3OutpostsAccesspointArnComponents {
		const match = AccesspointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accesspoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outpostId: match.groups!.outpostId,
			accessPointName: match.groups!.accessPointName,
		};
	}

	/**
	 * Builds an ARN for the bucket resource.
	 */
	static bucket(props: S3OutpostsBucketArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3-outposts:${props.region ?? "*"}:${props.account ?? "*"}:outpost/${props.outpostId}/bucket/${props.bucketName}`;
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
	static parseBucketArn(arn: string): S3OutpostsBucketArnComponents {
		const match = BucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outpostId: match.groups!.outpostId,
			bucketName: match.groups!.bucketName,
		};
	}

	/**
	 * Builds an ARN for the endpoint resource.
	 */
	static endpoint(props: S3OutpostsEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3-outposts:${props.region ?? "*"}:${props.account ?? "*"}:outpost/${props.outpostId}/endpoint/${props.endpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): S3OutpostsEndpointArnComponents {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outpostId: match.groups!.outpostId,
			endpointId: match.groups!.endpointId,
		};
	}

	/**
	 * Builds an ARN for the object resource.
	 */
	static object(props: S3OutpostsObjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3-outposts:${props.region ?? "*"}:${props.account ?? "*"}:outpost/${props.outpostId}/bucket/${props.bucketName}/object/${props.objectName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the object resource.
	 */
	static isValidObjectArn(arn: string): boolean {
		return ObjectArnRegex.test(arn);
	}

	/**
	 * Parses a object ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObjectArn(arn: string): S3OutpostsObjectArnComponents {
		const match = ObjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid object ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outpostId: match.groups!.outpostId,
			bucketName: match.groups!.bucketName,
			objectName: match.groups!.objectName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for s3-outposts.
 */
export class S3OutpostsOperations {
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CreateEndpoint: string[] = ["s3-outposts:CreateEndpoint"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["s3-outposts:DeleteEndpoint"];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly ListEndpoints: string[] = ["s3-outposts:ListEndpoints"];
	/** IAM actions required for the ListOutpostsWithS3 API call. */
	static readonly ListOutpostsWithS3: string[] = [
		"s3-outposts:ListOutpostsWithS3",
	];
	/** IAM actions required for the ListSharedEndpoints API call. */
	static readonly ListSharedEndpoints: string[] = [
		"s3-outposts:ListSharedEndpoints",
	];
}

/**
 * Condition key constants and builders for s3-outposts.
 */
export class S3OutpostsConditions {
	/** Condition keys applicable to the AbortMultipartUpload action. */
	static readonly AbortMultipartUploadConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CreateAccessPointConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CreateBucketConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPoint action. */
	static readonly DeleteAccessPointConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPointPolicy action. */
	static readonly DeleteAccessPointPolicyConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucket action. */
	static readonly DeleteBucketConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketPolicy action. */
	static readonly DeleteBucketPolicyConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObject action. */
	static readonly DeleteObjectConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectTagging action. */
	static readonly DeleteObjectTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DeleteObjectVersionConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:versionid",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectVersionTagging action. */
	static readonly DeleteObjectVersionTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:versionid",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPoint action. */
	static readonly actionGetAccessPointConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointPolicy action. */
	static readonly actionGetAccessPointPolicyConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucket action. */
	static readonly actionGetBucketConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicy action. */
	static readonly actionGetBucketPolicyConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketTagging action. */
	static readonly actionGetBucketTaggingConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketVersioning action. */
	static readonly actionGetBucketVersioningConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetLifecycleConfiguration action. */
	static readonly actionGetLifecycleConfigurationConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObject action. */
	static readonly actionGetObjectConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly actionGetObjectTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly actionGetObjectVersionConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:versionid",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionForReplication action. */
	static readonly actionGetObjectVersionForReplicationConditionKeys: string[] =
		[
			"s3-outposts:authType",
			"s3-outposts:signatureAge",
			"s3-outposts:signatureversion",
			"s3-outposts:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly actionGetObjectVersionTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:versionid",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetReplicationConfiguration action. */
	static readonly actionGetReplicationConfigurationConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPoints action. */
	static readonly ListAccessPointsConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucket action. */
	static readonly ListBucketConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:delimiter",
		"s3-outposts:max-keys",
		"s3-outposts:prefix",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucketMultipartUploads action. */
	static readonly ListBucketMultipartUploadsConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucketVersions action. */
	static readonly ListBucketVersionsConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:delimiter",
		"s3-outposts:max-keys",
		"s3-outposts:prefix",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly ListMultipartUploadPartsConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListRegionalBuckets action. */
	static readonly ListRegionalBucketsConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessPointPolicy action. */
	static readonly PutAccessPointPolicyConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPolicy action. */
	static readonly PutBucketPolicyConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketTagging action. */
	static readonly PutBucketTaggingConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketVersioning action. */
	static readonly PutBucketVersioningConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutLifecycleConfiguration action. */
	static readonly PutLifecycleConfigurationConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObject action. */
	static readonly PutObjectConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:RequestObjectTag/<key>",
		"s3-outposts:RequestObjectTagKeys",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-acl",
		"s3-outposts:x-amz-content-sha256",
		"s3-outposts:x-amz-copy-source",
		"s3-outposts:x-amz-metadata-directive",
		"s3-outposts:x-amz-server-side-encryption",
		"s3-outposts:x-amz-storage-class",
	];
	/** Condition keys applicable to the PutObjectAcl action. */
	static readonly PutObjectAclConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-acl",
		"s3-outposts:x-amz-content-sha256",
		"s3-outposts:x-amz-storage-class",
	];
	/** Condition keys applicable to the PutObjectTagging action. */
	static readonly PutObjectTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:RequestObjectTag/<key>",
		"s3-outposts:RequestObjectTagKeys",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObjectVersionTagging action. */
	static readonly PutObjectVersionTaggingConditionKeys: string[] = [
		"s3-outposts:AccessPointNetworkOrigin",
		"s3-outposts:DataAccessPointAccount",
		"s3-outposts:DataAccessPointArn",
		"s3-outposts:ExistingObjectTag/<key>",
		"s3-outposts:RequestObjectTag/<key>",
		"s3-outposts:RequestObjectTagKeys",
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:versionid",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutReplicationConfiguration action. */
	static readonly PutReplicationConfigurationConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateDelete action. */
	static readonly ReplicateDeleteConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateObject action. */
	static readonly ReplicateObjectConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
		"s3-outposts:x-amz-server-side-encryption",
	];
	/** Condition keys applicable to the ReplicateTags action. */
	static readonly ReplicateTagsConditionKeys: string[] = [
		"s3-outposts:authType",
		"s3-outposts:signatureAge",
		"s3-outposts:signatureversion",
		"s3-outposts:x-amz-content-sha256",
	];

	/** Condition key: s3-outposts:AccessPointNetworkOrigin (String) */
	static readonly ACCESS_POINT_NETWORK_ORIGIN =
		"s3-outposts:AccessPointNetworkOrigin";
	/** Condition key: s3-outposts:DataAccessPointAccount (String) */
	static readonly DATA_ACCESS_POINT_ACCOUNT =
		"s3-outposts:DataAccessPointAccount";
	/** Condition key: s3-outposts:DataAccessPointArn (ARN) */
	static readonly DATA_ACCESS_POINT_ARN = "s3-outposts:DataAccessPointArn";
	/** Condition key: s3-outposts:ExistingObjectTag/<key> (String) */
	static readonly EXISTING_OBJECT_TAG = "s3-outposts:ExistingObjectTag/<key>";
	/** Condition key: s3-outposts:RequestObjectTag/<key> (String) */
	static readonly REQUEST_OBJECT_TAG = "s3-outposts:RequestObjectTag/<key>";
	/** Condition key: s3-outposts:RequestObjectTagKeys (String) */
	static readonly REQUEST_OBJECT_TAG_KEYS = "s3-outposts:RequestObjectTagKeys";
	/** Condition key: s3-outposts:authType (String) */
	static readonly AUTH_TYPE = "s3-outposts:authType";
	/** Condition key: s3-outposts:delimiter (String) */
	static readonly DELIMITER = "s3-outposts:delimiter";
	/** Condition key: s3-outposts:max-keys (Numeric) */
	static readonly MAX_KEYS = "s3-outposts:max-keys";
	/** Condition key: s3-outposts:prefix (String) */
	static readonly PREFIX = "s3-outposts:prefix";
	/** Condition key: s3-outposts:signatureAge (Numeric) */
	static readonly SIGNATURE_AGE = "s3-outposts:signatureAge";
	/** Condition key: s3-outposts:signatureversion (String) */
	static readonly SIGNATUREVERSION = "s3-outposts:signatureversion";
	/** Condition key: s3-outposts:versionid (String) */
	static readonly VERSIONID = "s3-outposts:versionid";
	/** Condition key: s3-outposts:x-amz-acl (String) */
	static readonly X_AMZ_ACL = "s3-outposts:x-amz-acl";
	/** Condition key: s3-outposts:x-amz-content-sha256 (String) */
	static readonly X_AMZ_CONTENT_SHA256 = "s3-outposts:x-amz-content-sha256";
	/** Condition key: s3-outposts:x-amz-copy-source (String) */
	static readonly X_AMZ_COPY_SOURCE = "s3-outposts:x-amz-copy-source";
	/** Condition key: s3-outposts:x-amz-metadata-directive (String) */
	static readonly X_AMZ_METADATA_DIRECTIVE =
		"s3-outposts:x-amz-metadata-directive";
	/** Condition key: s3-outposts:x-amz-server-side-encryption (String) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION =
		"s3-outposts:x-amz-server-side-encryption";
	/** Condition key: s3-outposts:x-amz-storage-class (String) */
	static readonly X_AMZ_STORAGE_CLASS = "s3-outposts:x-amz-storage-class";

	/**
	 * Generates a condition block for `s3-outposts:AccessPointNetworkOrigin`.
	 */
	static accessPointNetworkOrigin(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:AccessPointNetworkOrigin": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:DataAccessPointAccount`.
	 */
	static dataAccessPointAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:DataAccessPointAccount": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:DataAccessPointArn`.
	 */
	static dataAccessPointARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3-outposts:DataAccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:ExistingObjectTag/<key>`.
	 */
	static existingObjectTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:ExistingObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:RequestObjectTag/<key>`.
	 */
	static requestObjectTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:RequestObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:RequestObjectTagKeys`.
	 */
	static requestObjectTagKeys(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:RequestObjectTagKeys": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:authType": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:delimiter`.
	 */
	static delimiter(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:delimiter": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:max-keys`.
	 */
	static maxKeys(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3-outposts:max-keys": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:prefix`.
	 */
	static prefix(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:prefix": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:signatureAge`.
	 */
	static signatureAge(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3-outposts:signatureAge": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:signatureversion`.
	 */
	static signatureversion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:signatureversion": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:versionid`.
	 */
	static versionid(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:versionid": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-acl`.
	 */
	static xAmzAcl(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:x-amz-acl": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-content-sha256`.
	 */
	static xAmzContentSha256(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:x-amz-content-sha256": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-copy-source`.
	 */
	static xAmzCopySource(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:x-amz-copy-source": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-metadata-directive`.
	 */
	static xAmzMetadataDirective(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:x-amz-metadata-directive": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-server-side-encryption`.
	 */
	static xAmzServerSideEncryption(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "s3-outposts:x-amz-server-side-encryption": value },
		};
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-storage-class`.
	 */
	static xAmzStorageClass(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3-outposts:x-amz-storage-class": value } };
	}
}
