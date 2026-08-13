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
	static readonly ABORT_MULTIPART_UPLOAD = "s3-outposts:AbortMultipartUpload";
	/** [Write] s3-outposts:CreateAccessPoint */
	static readonly CREATE_ACCESS_POINT = "s3-outposts:CreateAccessPoint";
	/** [Write] s3-outposts:CreateBucket */
	static readonly CREATE_BUCKET = "s3-outposts:CreateBucket";
	/** [Write] s3-outposts:CreateEndpoint */
	static readonly CREATE_ENDPOINT = "s3-outposts:CreateEndpoint";
	/** [Write] s3-outposts:DeleteAccessPoint */
	static readonly DELETE_ACCESS_POINT = "s3-outposts:DeleteAccessPoint";
	/** [PermissionManagement] s3-outposts:DeleteAccessPointPolicy */
	static readonly DELETE_ACCESS_POINT_POLICY = "s3-outposts:DeleteAccessPointPolicy";
	/** [Write] s3-outposts:DeleteBucket */
	static readonly DELETE_BUCKET = "s3-outposts:DeleteBucket";
	/** [PermissionManagement] s3-outposts:DeleteBucketPolicy */
	static readonly DELETE_BUCKET_POLICY = "s3-outposts:DeleteBucketPolicy";
	/** [Write] s3-outposts:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "s3-outposts:DeleteEndpoint";
	/** [Write] s3-outposts:DeleteObject */
	static readonly DELETE_OBJECT = "s3-outposts:DeleteObject";
	/** [Tagging] s3-outposts:DeleteObjectTagging */
	static readonly DELETE_OBJECT_TAGGING = "s3-outposts:DeleteObjectTagging";
	/** [Write] s3-outposts:DeleteObjectVersion */
	static readonly DELETE_OBJECT_VERSION = "s3-outposts:DeleteObjectVersion";
	/** [Tagging] s3-outposts:DeleteObjectVersionTagging */
	static readonly DELETE_OBJECT_VERSION_TAGGING = "s3-outposts:DeleteObjectVersionTagging";
	/** [Read] s3-outposts:GetAccessPoint */
	static readonly GET_ACCESS_POINT = "s3-outposts:GetAccessPoint";
	/** [Read] s3-outposts:GetAccessPointPolicy */
	static readonly GET_ACCESS_POINT_POLICY = "s3-outposts:GetAccessPointPolicy";
	/** [Read] s3-outposts:GetBucket */
	static readonly GET_BUCKET = "s3-outposts:GetBucket";
	/** [Read] s3-outposts:GetBucketPolicy */
	static readonly GET_BUCKET_POLICY = "s3-outposts:GetBucketPolicy";
	/** [Read] s3-outposts:GetBucketTagging */
	static readonly GET_BUCKET_TAGGING = "s3-outposts:GetBucketTagging";
	/** [Read] s3-outposts:GetBucketVersioning */
	static readonly GET_BUCKET_VERSIONING = "s3-outposts:GetBucketVersioning";
	/** [Read] s3-outposts:GetLifecycleConfiguration */
	static readonly GET_LIFECYCLE_CONFIGURATION = "s3-outposts:GetLifecycleConfiguration";
	/** [Read] s3-outposts:GetObject */
	static readonly GET_OBJECT = "s3-outposts:GetObject";
	/** [Read] s3-outposts:GetObjectTagging */
	static readonly GET_OBJECT_TAGGING = "s3-outposts:GetObjectTagging";
	/** [Read] s3-outposts:GetObjectVersion */
	static readonly GET_OBJECT_VERSION = "s3-outposts:GetObjectVersion";
	/** [Read] s3-outposts:GetObjectVersionForReplication */
	static readonly GET_OBJECT_VERSION_FOR_REPLICATION = "s3-outposts:GetObjectVersionForReplication";
	/** [Read] s3-outposts:GetObjectVersionTagging */
	static readonly GET_OBJECT_VERSION_TAGGING = "s3-outposts:GetObjectVersionTagging";
	/** [Read] s3-outposts:GetReplicationConfiguration */
	static readonly GET_REPLICATION_CONFIGURATION = "s3-outposts:GetReplicationConfiguration";
	/** [List] s3-outposts:ListAccessPoints */
	static readonly LIST_ACCESS_POINTS = "s3-outposts:ListAccessPoints";
	/** [List] s3-outposts:ListBucket */
	static readonly LIST_BUCKET = "s3-outposts:ListBucket";
	/** [List] s3-outposts:ListBucketMultipartUploads */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS = "s3-outposts:ListBucketMultipartUploads";
	/** [List] s3-outposts:ListBucketVersions */
	static readonly LIST_BUCKET_VERSIONS = "s3-outposts:ListBucketVersions";
	/** [List] s3-outposts:ListEndpoints */
	static readonly LIST_ENDPOINTS = "s3-outposts:ListEndpoints";
	/** [List] s3-outposts:ListMultipartUploadParts */
	static readonly LIST_MULTIPART_UPLOAD_PARTS = "s3-outposts:ListMultipartUploadParts";
	/** [List] s3-outposts:ListOutpostsWithS3 */
	static readonly LIST_OUTPOSTS_WITH_S3 = "s3-outposts:ListOutpostsWithS3";
	/** [List] s3-outposts:ListRegionalBuckets */
	static readonly LIST_REGIONAL_BUCKETS = "s3-outposts:ListRegionalBuckets";
	/** [List] s3-outposts:ListSharedEndpoints */
	static readonly LIST_SHARED_ENDPOINTS = "s3-outposts:ListSharedEndpoints";
	/** [PermissionManagement] s3-outposts:PutAccessPointPolicy */
	static readonly PUT_ACCESS_POINT_POLICY = "s3-outposts:PutAccessPointPolicy";
	/** [PermissionManagement] s3-outposts:PutBucketPolicy */
	static readonly PUT_BUCKET_POLICY = "s3-outposts:PutBucketPolicy";
	/** [Tagging] s3-outposts:PutBucketTagging */
	static readonly PUT_BUCKET_TAGGING = "s3-outposts:PutBucketTagging";
	/** [Write] s3-outposts:PutBucketVersioning */
	static readonly PUT_BUCKET_VERSIONING = "s3-outposts:PutBucketVersioning";
	/** [Write] s3-outposts:PutLifecycleConfiguration */
	static readonly PUT_LIFECYCLE_CONFIGURATION = "s3-outposts:PutLifecycleConfiguration";
	/** [Write] s3-outposts:PutObject */
	static readonly PUT_OBJECT = "s3-outposts:PutObject";
	/** [PermissionManagement] s3-outposts:PutObjectAcl */
	static readonly PUT_OBJECT_ACL = "s3-outposts:PutObjectAcl";
	/** [Tagging] s3-outposts:PutObjectTagging */
	static readonly PUT_OBJECT_TAGGING = "s3-outposts:PutObjectTagging";
	/** [Tagging] s3-outposts:PutObjectVersionTagging */
	static readonly PUT_OBJECT_VERSION_TAGGING = "s3-outposts:PutObjectVersionTagging";
	/** [Write] s3-outposts:PutReplicationConfiguration */
	static readonly PUT_REPLICATION_CONFIGURATION = "s3-outposts:PutReplicationConfiguration";
	/** [Write] s3-outposts:ReplicateDelete */
	static readonly REPLICATE_DELETE = "s3-outposts:ReplicateDelete";
	/** [Write] s3-outposts:ReplicateObject */
	static readonly REPLICATE_OBJECT = "s3-outposts:ReplicateObject";
	/** [Tagging] s3-outposts:ReplicateTags */
	static readonly REPLICATE_TAGS = "s3-outposts:ReplicateTags";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [S3OutpostsActions.GET_ACCESS_POINT, S3OutpostsActions.GET_ACCESS_POINT_POLICY, S3OutpostsActions.GET_BUCKET, S3OutpostsActions.GET_BUCKET_POLICY, S3OutpostsActions.GET_BUCKET_TAGGING, S3OutpostsActions.GET_BUCKET_VERSIONING, S3OutpostsActions.GET_LIFECYCLE_CONFIGURATION, S3OutpostsActions.GET_OBJECT, S3OutpostsActions.GET_OBJECT_TAGGING, S3OutpostsActions.GET_OBJECT_VERSION, S3OutpostsActions.GET_OBJECT_VERSION_FOR_REPLICATION, S3OutpostsActions.GET_OBJECT_VERSION_TAGGING, S3OutpostsActions.GET_REPLICATION_CONFIGURATION];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [S3OutpostsActions.ABORT_MULTIPART_UPLOAD, S3OutpostsActions.CREATE_ACCESS_POINT, S3OutpostsActions.CREATE_BUCKET, S3OutpostsActions.CREATE_ENDPOINT, S3OutpostsActions.DELETE_ACCESS_POINT, S3OutpostsActions.DELETE_BUCKET, S3OutpostsActions.DELETE_ENDPOINT, S3OutpostsActions.DELETE_OBJECT, S3OutpostsActions.DELETE_OBJECT_VERSION, S3OutpostsActions.PUT_BUCKET_VERSIONING, S3OutpostsActions.PUT_LIFECYCLE_CONFIGURATION, S3OutpostsActions.PUT_OBJECT, S3OutpostsActions.PUT_REPLICATION_CONFIGURATION, S3OutpostsActions.REPLICATE_DELETE, S3OutpostsActions.REPLICATE_OBJECT];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [S3OutpostsActions.LIST_ACCESS_POINTS, S3OutpostsActions.LIST_BUCKET, S3OutpostsActions.LIST_BUCKET_MULTIPART_UPLOADS, S3OutpostsActions.LIST_BUCKET_VERSIONS, S3OutpostsActions.LIST_ENDPOINTS, S3OutpostsActions.LIST_MULTIPART_UPLOAD_PARTS, S3OutpostsActions.LIST_OUTPOSTS_WITH_S3, S3OutpostsActions.LIST_REGIONAL_BUCKETS, S3OutpostsActions.LIST_SHARED_ENDPOINTS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [S3OutpostsActions.DELETE_ACCESS_POINT_POLICY, S3OutpostsActions.DELETE_BUCKET_POLICY, S3OutpostsActions.PUT_ACCESS_POINT_POLICY, S3OutpostsActions.PUT_BUCKET_POLICY, S3OutpostsActions.PUT_OBJECT_ACL];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [S3OutpostsActions.DELETE_OBJECT_TAGGING, S3OutpostsActions.DELETE_OBJECT_VERSION_TAGGING, S3OutpostsActions.PUT_BUCKET_TAGGING, S3OutpostsActions.PUT_OBJECT_TAGGING, S3OutpostsActions.PUT_OBJECT_VERSION_TAGGING, S3OutpostsActions.REPLICATE_TAGS];
}

const AccesspointArnRegex = new RegExp("^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost/(?<outpostId>[^:/?]+)/accesspoint/(?<accessPointName>[^:/?]+)$");
const BucketArnRegex = new RegExp("^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost/(?<outpostId>[^:/?]+)/bucket/(?<bucketName>[^:/?]+)$");
const EndpointArnRegex = new RegExp("^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost/(?<outpostId>[^:/?]+)/endpoint/(?<endpointId>[^:/?]+)$");
const ObjectArnRegex = new RegExp("^arn:(?<partition>[^:]+):s3-outposts:(?<region>[^:]*):(?<account>[^:]*):outpost/(?<outpostId>[^:/?]+)/bucket/(?<bucketName>[^:/?]+)/object/(?<objectName>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for s3-outposts resources.
 */
export class S3OutpostsResources {
	/**
	 * Builds an ARN for the accesspoint resource.
	 */
	static accesspoint(props: {
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
	}): string {
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
	static parseAccesspointArn(arn: string): { partition: string; region: string; account: string; outpostId: string; accessPointName: string } {
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
	static bucket(props: {
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
	}): string {
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
	static parseBucketArn(arn: string): { partition: string; region: string; account: string; outpostId: string; bucketName: string } {
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
	static endpoint(props: {
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
	}): string {
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
	static parseEndpointArn(arn: string): { partition: string; region: string; account: string; outpostId: string; endpointId: string } {
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
	static object(props: {
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
	}): string {
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
	static parseObjectArn(arn: string): { partition: string; region: string; account: string; outpostId: string; bucketName: string; objectName: string } {
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
	static readonly CREATE_ENDPOINT: string[] = ["s3-outposts:CreateEndpoint"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["s3-outposts:DeleteEndpoint"];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly LIST_ENDPOINTS: string[] = ["s3-outposts:ListEndpoints"];
	/** IAM actions required for the ListOutpostsWithS3 API call. */
	static readonly LIST_OUTPOSTS_WITH_S3: string[] = ["s3-outposts:ListOutpostsWithS3"];
	/** IAM actions required for the ListSharedEndpoints API call. */
	static readonly LIST_SHARED_ENDPOINTS: string[] = ["s3-outposts:ListSharedEndpoints"];
}

/**
 * Condition key constants and builders for s3-outposts.
 */
export class S3OutpostsConditions {
	/** Condition keys applicable to the AbortMultipartUpload action. */
	static readonly ABORT_MULTIPART_UPLOAD_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CREATE_ACCESS_POINT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CREATE_BUCKET_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteAccessPoint action. */
	static readonly DELETE_ACCESS_POINT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteAccessPointPolicy action. */
	static readonly DELETE_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteBucket action. */
	static readonly DELETE_BUCKET_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteBucketPolicy action. */
	static readonly DELETE_BUCKET_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteObject action. */
	static readonly DELETE_OBJECT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteObjectTagging action. */
	static readonly DELETE_OBJECT_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DELETE_OBJECT_VERSION_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:versionid", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the DeleteObjectVersionTagging action. */
	static readonly DELETE_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:versionid", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetAccessPoint action. */
	static readonly GET_ACCESS_POINT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetAccessPointPolicy action. */
	static readonly GET_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetBucket action. */
	static readonly GET_BUCKET_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetBucketPolicy action. */
	static readonly GET_BUCKET_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetBucketTagging action. */
	static readonly GET_BUCKET_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetBucketVersioning action. */
	static readonly GET_BUCKET_VERSIONING_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetLifecycleConfiguration action. */
	static readonly GET_LIFECYCLE_CONFIGURATION_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetObject action. */
	static readonly GET_OBJECT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly GET_OBJECT_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly GET_OBJECT_VERSION_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:versionid", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetObjectVersionForReplication action. */
	static readonly GET_OBJECT_VERSION_FOR_REPLICATION_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly GET_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:versionid", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the GetReplicationConfiguration action. */
	static readonly GET_REPLICATION_CONFIGURATION_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListAccessPoints action. */
	static readonly LIST_ACCESS_POINTS_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListBucket action. */
	static readonly LIST_BUCKET_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:delimiter", "s3-outposts:max-keys", "s3-outposts:prefix", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListBucketMultipartUploads action. */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListBucketVersions action. */
	static readonly LIST_BUCKET_VERSIONS_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:delimiter", "s3-outposts:max-keys", "s3-outposts:prefix", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly LIST_MULTIPART_UPLOAD_PARTS_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ListRegionalBuckets action. */
	static readonly LIST_REGIONAL_BUCKETS_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutAccessPointPolicy action. */
	static readonly PUT_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutBucketPolicy action. */
	static readonly PUT_BUCKET_POLICY_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutBucketTagging action. */
	static readonly PUT_BUCKET_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutBucketVersioning action. */
	static readonly PUT_BUCKET_VERSIONING_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutLifecycleConfiguration action. */
	static readonly PUT_LIFECYCLE_CONFIGURATION_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutObject action. */
	static readonly PUT_OBJECT_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:RequestObjectTag/<key>", "s3-outposts:RequestObjectTagKeys", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-acl", "s3-outposts:x-amz-content-sha256", "s3-outposts:x-amz-copy-source", "s3-outposts:x-amz-metadata-directive", "s3-outposts:x-amz-server-side-encryption", "s3-outposts:x-amz-storage-class"];
	/** Condition keys applicable to the PutObjectAcl action. */
	static readonly PUT_OBJECT_ACL_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-acl", "s3-outposts:x-amz-content-sha256", "s3-outposts:x-amz-storage-class"];
	/** Condition keys applicable to the PutObjectTagging action. */
	static readonly PUT_OBJECT_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:RequestObjectTag/<key>", "s3-outposts:RequestObjectTagKeys", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutObjectVersionTagging action. */
	static readonly PUT_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = ["s3-outposts:AccessPointNetworkOrigin", "s3-outposts:DataAccessPointAccount", "s3-outposts:DataAccessPointArn", "s3-outposts:ExistingObjectTag/<key>", "s3-outposts:RequestObjectTag/<key>", "s3-outposts:RequestObjectTagKeys", "s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:versionid", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the PutReplicationConfiguration action. */
	static readonly PUT_REPLICATION_CONFIGURATION_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ReplicateDelete action. */
	static readonly REPLICATE_DELETE_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];
	/** Condition keys applicable to the ReplicateObject action. */
	static readonly REPLICATE_OBJECT_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256", "s3-outposts:x-amz-server-side-encryption"];
	/** Condition keys applicable to the ReplicateTags action. */
	static readonly REPLICATE_TAGS_CONDITION_KEYS: string[] = ["s3-outposts:authType", "s3-outposts:signatureAge", "s3-outposts:signatureversion", "s3-outposts:x-amz-content-sha256"];

	/** Condition key: s3-outposts:AccessPointNetworkOrigin (String) */
	static readonly ACCESS_POINT_NETWORK_ORIGIN = "s3-outposts:AccessPointNetworkOrigin";
	/** Condition key: s3-outposts:DataAccessPointAccount (String) */
	static readonly DATA_ACCESS_POINT_ACCOUNT = "s3-outposts:DataAccessPointAccount";
	/** Condition key: s3-outposts:DataAccessPointArn (ARN) */
	static readonly DATA_ACCESS_POINT_ARN = "s3-outposts:DataAccessPointArn";
	/** Condition key: s3-outposts:ExistingObjectTag/<key> (String) */
	static readonly EXISTING_OBJECT_TAG/<KEY> = "s3-outposts:ExistingObjectTag/<key>";
	/** Condition key: s3-outposts:RequestObjectTag/<key> (String) */
	static readonly REQUEST_OBJECT_TAG/<KEY> = "s3-outposts:RequestObjectTag/<key>";
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
	static readonly X_AMZ_METADATA_DIRECTIVE = "s3-outposts:x-amz-metadata-directive";
	/** Condition key: s3-outposts:x-amz-server-side-encryption (String) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION = "s3-outposts:x-amz-server-side-encryption";
	/** Condition key: s3-outposts:x-amz-storage-class (String) */
	static readonly X_AMZ_STORAGE_CLASS = "s3-outposts:x-amz-storage-class";

	/**
	 * Generates a condition block for `s3-outposts:AccessPointNetworkOrigin`.
	 */
	static accessPointNetworkOrigin(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:AccessPointNetworkOrigin": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:DataAccessPointAccount`.
	 */
	static dataAccessPointAccount(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:DataAccessPointAccount": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:DataAccessPointArn`.
	 */
	static dataAccessPointARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "s3-outposts:DataAccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:ExistingObjectTag/<key>`.
	 */
	static existingObjectTag/<key>(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:ExistingObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:RequestObjectTag/<key>`.
	 */
	static requestObjectTag/<key>(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:RequestObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:RequestObjectTagKeys`.
	 */
	static requestObjectTagKeys(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:RequestObjectTagKeys": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:authType": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:delimiter`.
	 */
	static delimiter(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:delimiter": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:max-keys`.
	 */
	static maxKeys(value: number): Record<string, Record<string, number>> {
		return { "NumericEquals": { "s3-outposts:max-keys": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:prefix`.
	 */
	static prefix(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:prefix": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:signatureAge`.
	 */
	static signatureAge(value: number): Record<string, Record<string, number>> {
		return { "NumericEquals": { "s3-outposts:signatureAge": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:signatureversion`.
	 */
	static signatureversion(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:signatureversion": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:versionid`.
	 */
	static versionid(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:versionid": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-acl`.
	 */
	static xAmzAcl(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-acl": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-content-sha256`.
	 */
	static xAmzContentSha256(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-content-sha256": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-copy-source`.
	 */
	static xAmzCopySource(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-copy-source": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-metadata-directive`.
	 */
	static xAmzMetadataDirective(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-metadata-directive": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-server-side-encryption`.
	 */
	static xAmzServerSideEncryption(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-server-side-encryption": value } };
	}

	/**
	 * Generates a condition block for `s3-outposts:x-amz-storage-class`.
	 */
	static xAmzStorageClass(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "s3-outposts:x-amz-storage-class": value } };
	}

}
