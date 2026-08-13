// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3 service.
 */
export class S3Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3";

	/** [Write] s3:AbortMultipartUpload */
	static readonly ABORT_MULTIPART_UPLOAD = "s3:AbortMultipartUpload";
	/** [Read] s3:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"s3:AllowVendedLogDeliveryForResource";
	/** [PermissionManagement] s3:AssociateAccessGrantsIdentityCenter */
	static readonly ASSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER =
		"s3:AssociateAccessGrantsIdentityCenter";
	/** [PermissionManagement] s3:BypassGovernanceRetention */
	static readonly BYPASS_GOVERNANCE_RETENTION = "s3:BypassGovernanceRetention";
	/** [PermissionManagement] s3:CreateAccessGrant */
	static readonly CREATE_ACCESS_GRANT = "s3:CreateAccessGrant";
	/** [PermissionManagement] s3:CreateAccessGrantsInstance */
	static readonly CREATE_ACCESS_GRANTS_INSTANCE =
		"s3:CreateAccessGrantsInstance";
	/** [PermissionManagement] s3:CreateAccessGrantsLocation */
	static readonly CREATE_ACCESS_GRANTS_LOCATION =
		"s3:CreateAccessGrantsLocation";
	/** [Write] s3:CreateAccessPoint */
	static readonly CREATE_ACCESS_POINT = "s3:CreateAccessPoint";
	/** [Write] s3:CreateAccessPointForObjectLambda */
	static readonly CREATE_ACCESS_POINT_FOR_OBJECT_LAMBDA =
		"s3:CreateAccessPointForObjectLambda";
	/** [Write] s3:CreateBucket */
	static readonly CREATE_BUCKET = "s3:CreateBucket";
	/** [Write] s3:CreateBucketMetadataTableConfiguration */
	static readonly CREATE_BUCKET_METADATA_TABLE_CONFIGURATION =
		"s3:CreateBucketMetadataTableConfiguration";
	/** [Write] s3:CreateJob */
	static readonly CREATE_JOB = "s3:CreateJob";
	/** [Write] s3:CreateMultiRegionAccessPoint */
	static readonly CREATE_MULTI_REGION_ACCESS_POINT =
		"s3:CreateMultiRegionAccessPoint";
	/** [Write] s3:CreateStorageLensGroup */
	static readonly CREATE_STORAGE_LENS_GROUP = "s3:CreateStorageLensGroup";
	/** [PermissionManagement] s3:DeleteAccessGrant */
	static readonly DELETE_ACCESS_GRANT = "s3:DeleteAccessGrant";
	/** [PermissionManagement] s3:DeleteAccessGrantsInstance */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE =
		"s3:DeleteAccessGrantsInstance";
	/** [PermissionManagement] s3:DeleteAccessGrantsInstanceResourcePolicy */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY =
		"s3:DeleteAccessGrantsInstanceResourcePolicy";
	/** [PermissionManagement] s3:DeleteAccessGrantsLocation */
	static readonly DELETE_ACCESS_GRANTS_LOCATION =
		"s3:DeleteAccessGrantsLocation";
	/** [Write] s3:DeleteAccessPoint */
	static readonly DELETE_ACCESS_POINT = "s3:DeleteAccessPoint";
	/** [Write] s3:DeleteAccessPointForObjectLambda */
	static readonly DELETE_ACCESS_POINT_FOR_OBJECT_LAMBDA =
		"s3:DeleteAccessPointForObjectLambda";
	/** [PermissionManagement] s3:DeleteAccessPointPolicy */
	static readonly DELETE_ACCESS_POINT_POLICY = "s3:DeleteAccessPointPolicy";
	/** [PermissionManagement] s3:DeleteAccessPointPolicyForObjectLambda */
	static readonly DELETE_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA =
		"s3:DeleteAccessPointPolicyForObjectLambda";
	/** [Write] s3:DeleteBucket */
	static readonly DELETE_BUCKET = "s3:DeleteBucket";
	/** [Write] s3:DeleteBucketMetadataTableConfiguration */
	static readonly DELETE_BUCKET_METADATA_TABLE_CONFIGURATION =
		"s3:DeleteBucketMetadataTableConfiguration";
	/** [PermissionManagement] s3:DeleteBucketPolicy */
	static readonly DELETE_BUCKET_POLICY = "s3:DeleteBucketPolicy";
	/** [Write] s3:DeleteBucketWebsite */
	static readonly DELETE_BUCKET_WEBSITE = "s3:DeleteBucketWebsite";
	/** [Tagging] s3:DeleteJobTagging */
	static readonly DELETE_JOB_TAGGING = "s3:DeleteJobTagging";
	/** [Write] s3:DeleteMultiRegionAccessPoint */
	static readonly DELETE_MULTI_REGION_ACCESS_POINT =
		"s3:DeleteMultiRegionAccessPoint";
	/** [Write] s3:DeleteObject */
	static readonly DELETE_OBJECT = "s3:DeleteObject";
	/** [Write] s3:DeleteObjectAnnotation */
	static readonly DELETE_OBJECT_ANNOTATION = "s3:DeleteObjectAnnotation";
	/** [Tagging] s3:DeleteObjectTagging */
	static readonly DELETE_OBJECT_TAGGING = "s3:DeleteObjectTagging";
	/** [Write] s3:DeleteObjectVersion */
	static readonly DELETE_OBJECT_VERSION = "s3:DeleteObjectVersion";
	/** [Write] s3:DeleteObjectVersionAnnotation */
	static readonly DELETE_OBJECT_VERSION_ANNOTATION =
		"s3:DeleteObjectVersionAnnotation";
	/** [Tagging] s3:DeleteObjectVersionTagging */
	static readonly DELETE_OBJECT_VERSION_TAGGING =
		"s3:DeleteObjectVersionTagging";
	/** [Write] s3:DeleteStorageLensConfiguration */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION =
		"s3:DeleteStorageLensConfiguration";
	/** [Tagging] s3:DeleteStorageLensConfigurationTagging */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION_TAGGING =
		"s3:DeleteStorageLensConfigurationTagging";
	/** [Write] s3:DeleteStorageLensGroup */
	static readonly DELETE_STORAGE_LENS_GROUP = "s3:DeleteStorageLensGroup";
	/** [Read] s3:DescribeJob */
	static readonly DESCRIBE_JOB = "s3:DescribeJob";
	/** [Read] s3:DescribeMultiRegionAccessPointOperation */
	static readonly DESCRIBE_MULTI_REGION_ACCESS_POINT_OPERATION =
		"s3:DescribeMultiRegionAccessPointOperation";
	/** [PermissionManagement] s3:DissociateAccessGrantsIdentityCenter */
	static readonly DISSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER =
		"s3:DissociateAccessGrantsIdentityCenter";
	/** [Read] s3:GetAccelerateConfiguration */
	static readonly GET_ACCELERATE_CONFIGURATION =
		"s3:GetAccelerateConfiguration";
	/** [Read] s3:GetAccessGrant */
	static readonly GET_ACCESS_GRANT = "s3:GetAccessGrant";
	/** [Read] s3:GetAccessGrantsInstance */
	static readonly GET_ACCESS_GRANTS_INSTANCE = "s3:GetAccessGrantsInstance";
	/** [Read] s3:GetAccessGrantsInstanceForPrefix */
	static readonly GET_ACCESS_GRANTS_INSTANCE_FOR_PREFIX =
		"s3:GetAccessGrantsInstanceForPrefix";
	/** [Read] s3:GetAccessGrantsInstanceResourcePolicy */
	static readonly GET_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY =
		"s3:GetAccessGrantsInstanceResourcePolicy";
	/** [Read] s3:GetAccessGrantsLocation */
	static readonly GET_ACCESS_GRANTS_LOCATION = "s3:GetAccessGrantsLocation";
	/** [Read] s3:GetAccessPoint */
	static readonly GET_ACCESS_POINT = "s3:GetAccessPoint";
	/** [Read] s3:GetAccessPointConfigurationForObjectLambda */
	static readonly GET_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA =
		"s3:GetAccessPointConfigurationForObjectLambda";
	/** [Read] s3:GetAccessPointForObjectLambda */
	static readonly GET_ACCESS_POINT_FOR_OBJECT_LAMBDA =
		"s3:GetAccessPointForObjectLambda";
	/** [Read] s3:GetAccessPointPolicy */
	static readonly GET_ACCESS_POINT_POLICY = "s3:GetAccessPointPolicy";
	/** [Read] s3:GetAccessPointPolicyForObjectLambda */
	static readonly GET_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA =
		"s3:GetAccessPointPolicyForObjectLambda";
	/** [Read] s3:GetAccessPointPolicyStatus */
	static readonly GET_ACCESS_POINT_POLICY_STATUS =
		"s3:GetAccessPointPolicyStatus";
	/** [Read] s3:GetAccessPointPolicyStatusForObjectLambda */
	static readonly GET_ACCESS_POINT_POLICY_STATUS_FOR_OBJECT_LAMBDA =
		"s3:GetAccessPointPolicyStatusForObjectLambda";
	/** [Read] s3:GetAccountPublicAccessBlock */
	static readonly GET_ACCOUNT_PUBLIC_ACCESS_BLOCK =
		"s3:GetAccountPublicAccessBlock";
	/** [Read] s3:GetAnalyticsConfiguration */
	static readonly GET_ANALYTICS_CONFIGURATION = "s3:GetAnalyticsConfiguration";
	/** [Read] s3:GetBucketAbac */
	static readonly GET_BUCKET_ABAC = "s3:GetBucketAbac";
	/** [Read] s3:GetBucketAcl */
	static readonly GET_BUCKET_ACL = "s3:GetBucketAcl";
	/** [Read] s3:GetBucketCORS */
	static readonly GET_BUCKET_CORS = "s3:GetBucketCORS";
	/** [Read] s3:GetBucketLocation */
	static readonly GET_BUCKET_LOCATION = "s3:GetBucketLocation";
	/** [Read] s3:GetBucketLogging */
	static readonly GET_BUCKET_LOGGING = "s3:GetBucketLogging";
	/** [Read] s3:GetBucketMetadataTableConfiguration */
	static readonly GET_BUCKET_METADATA_TABLE_CONFIGURATION =
		"s3:GetBucketMetadataTableConfiguration";
	/** [Read] s3:GetBucketNotification */
	static readonly GET_BUCKET_NOTIFICATION = "s3:GetBucketNotification";
	/** [Read] s3:GetBucketObjectLockConfiguration */
	static readonly GET_BUCKET_OBJECT_LOCK_CONFIGURATION =
		"s3:GetBucketObjectLockConfiguration";
	/** [Read] s3:GetBucketOwnershipControls */
	static readonly GET_BUCKET_OWNERSHIP_CONTROLS =
		"s3:GetBucketOwnershipControls";
	/** [Read] s3:GetBucketPolicy */
	static readonly GET_BUCKET_POLICY = "s3:GetBucketPolicy";
	/** [Read] s3:GetBucketPolicyStatus */
	static readonly GET_BUCKET_POLICY_STATUS = "s3:GetBucketPolicyStatus";
	/** [Read] s3:GetBucketPublicAccessBlock */
	static readonly GET_BUCKET_PUBLIC_ACCESS_BLOCK =
		"s3:GetBucketPublicAccessBlock";
	/** [Read] s3:GetBucketRequestPayment */
	static readonly GET_BUCKET_REQUEST_PAYMENT = "s3:GetBucketRequestPayment";
	/** [Read] s3:GetBucketTagging */
	static readonly GET_BUCKET_TAGGING = "s3:GetBucketTagging";
	/** [Read] s3:GetBucketVersioning */
	static readonly GET_BUCKET_VERSIONING = "s3:GetBucketVersioning";
	/** [Read] s3:GetBucketWebsite */
	static readonly GET_BUCKET_WEBSITE = "s3:GetBucketWebsite";
	/** [Read] s3:GetDataAccess */
	static readonly GET_DATA_ACCESS = "s3:GetDataAccess";
	/** [Read] s3:GetEncryptionConfiguration */
	static readonly GET_ENCRYPTION_CONFIGURATION =
		"s3:GetEncryptionConfiguration";
	/** [Read] s3:GetIntelligentTieringConfiguration */
	static readonly GET_INTELLIGENT_TIERING_CONFIGURATION =
		"s3:GetIntelligentTieringConfiguration";
	/** [Read] s3:GetInventoryConfiguration */
	static readonly GET_INVENTORY_CONFIGURATION = "s3:GetInventoryConfiguration";
	/** [Read] s3:GetJobTagging */
	static readonly GET_JOB_TAGGING = "s3:GetJobTagging";
	/** [Read] s3:GetLifecycleConfiguration */
	static readonly GET_LIFECYCLE_CONFIGURATION = "s3:GetLifecycleConfiguration";
	/** [Read] s3:GetMetricsConfiguration */
	static readonly GET_METRICS_CONFIGURATION = "s3:GetMetricsConfiguration";
	/** [Read] s3:GetMultiRegionAccessPoint */
	static readonly GET_MULTI_REGION_ACCESS_POINT =
		"s3:GetMultiRegionAccessPoint";
	/** [Read] s3:GetMultiRegionAccessPointPolicy */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY =
		"s3:GetMultiRegionAccessPointPolicy";
	/** [Read] s3:GetMultiRegionAccessPointPolicyStatus */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY_STATUS =
		"s3:GetMultiRegionAccessPointPolicyStatus";
	/** [Read] s3:GetMultiRegionAccessPointRoutes */
	static readonly GET_MULTI_REGION_ACCESS_POINT_ROUTES =
		"s3:GetMultiRegionAccessPointRoutes";
	/** [Read] s3:GetObject */
	static readonly GET_OBJECT = "s3:GetObject";
	/** [Read] s3:GetObjectAcl */
	static readonly GET_OBJECT_ACL = "s3:GetObjectAcl";
	/** [Read] s3:GetObjectAnnotation */
	static readonly GET_OBJECT_ANNOTATION = "s3:GetObjectAnnotation";
	/** [Read] s3:GetObjectAttributes */
	static readonly GET_OBJECT_ATTRIBUTES = "s3:GetObjectAttributes";
	/** [Read] s3:GetObjectLegalHold */
	static readonly GET_OBJECT_LEGAL_HOLD = "s3:GetObjectLegalHold";
	/** [Read] s3:GetObjectRetention */
	static readonly GET_OBJECT_RETENTION = "s3:GetObjectRetention";
	/** [Read] s3:GetObjectTagging */
	static readonly GET_OBJECT_TAGGING = "s3:GetObjectTagging";
	/** [Read] s3:GetObjectTorrent */
	static readonly GET_OBJECT_TORRENT = "s3:GetObjectTorrent";
	/** [Read] s3:GetObjectVersion */
	static readonly GET_OBJECT_VERSION = "s3:GetObjectVersion";
	/** [Read] s3:GetObjectVersionAcl */
	static readonly GET_OBJECT_VERSION_ACL = "s3:GetObjectVersionAcl";
	/** [Read] s3:GetObjectVersionAnnotation */
	static readonly GET_OBJECT_VERSION_ANNOTATION =
		"s3:GetObjectVersionAnnotation";
	/** [Read] s3:GetObjectVersionAnnotationForReplication */
	static readonly GET_OBJECT_VERSION_ANNOTATION_FOR_REPLICATION =
		"s3:GetObjectVersionAnnotationForReplication";
	/** [Read] s3:GetObjectVersionAttributes */
	static readonly GET_OBJECT_VERSION_ATTRIBUTES =
		"s3:GetObjectVersionAttributes";
	/** [Read] s3:GetObjectVersionForReplication */
	static readonly GET_OBJECT_VERSION_FOR_REPLICATION =
		"s3:GetObjectVersionForReplication";
	/** [Read] s3:GetObjectVersionTagging */
	static readonly GET_OBJECT_VERSION_TAGGING = "s3:GetObjectVersionTagging";
	/** [Read] s3:GetObjectVersionTorrent */
	static readonly GET_OBJECT_VERSION_TORRENT = "s3:GetObjectVersionTorrent";
	/** [Read] s3:GetReplicationConfiguration */
	static readonly GET_REPLICATION_CONFIGURATION =
		"s3:GetReplicationConfiguration";
	/** [Read] s3:GetStorageLensConfiguration */
	static readonly GET_STORAGE_LENS_CONFIGURATION =
		"s3:GetStorageLensConfiguration";
	/** [Read] s3:GetStorageLensConfigurationTagging */
	static readonly GET_STORAGE_LENS_CONFIGURATION_TAGGING =
		"s3:GetStorageLensConfigurationTagging";
	/** [Read] s3:GetStorageLensDashboard */
	static readonly GET_STORAGE_LENS_DASHBOARD = "s3:GetStorageLensDashboard";
	/** [Read] s3:GetStorageLensGroup */
	static readonly GET_STORAGE_LENS_GROUP = "s3:GetStorageLensGroup";
	/** [Write] s3:InitiateReplication */
	static readonly INITIATE_REPLICATION = "s3:InitiateReplication";
	/** [List] s3:ListAccessGrants */
	static readonly LIST_ACCESS_GRANTS = "s3:ListAccessGrants";
	/** [List] s3:ListAccessGrantsInstances */
	static readonly LIST_ACCESS_GRANTS_INSTANCES = "s3:ListAccessGrantsInstances";
	/** [List] s3:ListAccessGrantsLocations */
	static readonly LIST_ACCESS_GRANTS_LOCATIONS = "s3:ListAccessGrantsLocations";
	/** [List] s3:ListAccessPoints */
	static readonly LIST_ACCESS_POINTS = "s3:ListAccessPoints";
	/** [List] s3:ListAccessPointsForObjectLambda */
	static readonly LIST_ACCESS_POINTS_FOR_OBJECT_LAMBDA =
		"s3:ListAccessPointsForObjectLambda";
	/** [List] s3:ListAllMyBuckets */
	static readonly LIST_ALL_MY_BUCKETS = "s3:ListAllMyBuckets";
	/** [List] s3:ListBucket */
	static readonly LIST_BUCKET = "s3:ListBucket";
	/** [List] s3:ListBucketMultipartUploads */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS =
		"s3:ListBucketMultipartUploads";
	/** [List] s3:ListBucketVersions */
	static readonly LIST_BUCKET_VERSIONS = "s3:ListBucketVersions";
	/** [List] s3:ListCallerAccessGrants */
	static readonly LIST_CALLER_ACCESS_GRANTS = "s3:ListCallerAccessGrants";
	/** [List] s3:ListJobs */
	static readonly LIST_JOBS = "s3:ListJobs";
	/** [List] s3:ListMultiRegionAccessPoints */
	static readonly LIST_MULTI_REGION_ACCESS_POINTS =
		"s3:ListMultiRegionAccessPoints";
	/** [List] s3:ListMultipartUploadParts */
	static readonly LIST_MULTIPART_UPLOAD_PARTS = "s3:ListMultipartUploadParts";
	/** [List] s3:ListObjectAnnotations */
	static readonly LIST_OBJECT_ANNOTATIONS = "s3:ListObjectAnnotations";
	/** [List] s3:ListObjectVersionAnnotations */
	static readonly LIST_OBJECT_VERSION_ANNOTATIONS =
		"s3:ListObjectVersionAnnotations";
	/** [List] s3:ListStorageLensConfigurations */
	static readonly LIST_STORAGE_LENS_CONFIGURATIONS =
		"s3:ListStorageLensConfigurations";
	/** [List] s3:ListStorageLensGroups */
	static readonly LIST_STORAGE_LENS_GROUPS = "s3:ListStorageLensGroups";
	/** [List] s3:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "s3:ListTagsForResource";
	/** [PermissionManagement] s3:ObjectOwnerOverrideToBucketOwner */
	static readonly OBJECT_OWNER_OVERRIDE_TO_BUCKET_OWNER =
		"s3:ObjectOwnerOverrideToBucketOwner";
	/** [Write] s3:PauseReplication */
	static readonly PAUSE_REPLICATION = "s3:PauseReplication";
	/** [Write] s3:PutAccelerateConfiguration */
	static readonly PUT_ACCELERATE_CONFIGURATION =
		"s3:PutAccelerateConfiguration";
	/** [PermissionManagement] s3:PutAccessGrantsInstanceResourcePolicy */
	static readonly PUT_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY =
		"s3:PutAccessGrantsInstanceResourcePolicy";
	/** [Write] s3:PutAccessPointConfigurationForObjectLambda */
	static readonly PUT_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA =
		"s3:PutAccessPointConfigurationForObjectLambda";
	/** [PermissionManagement] s3:PutAccessPointPolicy */
	static readonly PUT_ACCESS_POINT_POLICY = "s3:PutAccessPointPolicy";
	/** [PermissionManagement] s3:PutAccessPointPolicyForObjectLambda */
	static readonly PUT_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA =
		"s3:PutAccessPointPolicyForObjectLambda";
	/** [PermissionManagement] s3:PutAccessPointPublicAccessBlock */
	static readonly PUT_ACCESS_POINT_PUBLIC_ACCESS_BLOCK =
		"s3:PutAccessPointPublicAccessBlock";
	/** [PermissionManagement] s3:PutAccountPublicAccessBlock */
	static readonly PUT_ACCOUNT_PUBLIC_ACCESS_BLOCK =
		"s3:PutAccountPublicAccessBlock";
	/** [Write] s3:PutAnalyticsConfiguration */
	static readonly PUT_ANALYTICS_CONFIGURATION = "s3:PutAnalyticsConfiguration";
	/** [Write] s3:PutBucketAbac */
	static readonly PUT_BUCKET_ABAC = "s3:PutBucketAbac";
	/** [PermissionManagement] s3:PutBucketAcl */
	static readonly PUT_BUCKET_ACL = "s3:PutBucketAcl";
	/** [Write] s3:PutBucketCORS */
	static readonly PUT_BUCKET_CORS = "s3:PutBucketCORS";
	/** [Write] s3:PutBucketLogging */
	static readonly PUT_BUCKET_LOGGING = "s3:PutBucketLogging";
	/** [Write] s3:PutBucketNotification */
	static readonly PUT_BUCKET_NOTIFICATION = "s3:PutBucketNotification";
	/** [Write] s3:PutBucketObjectLockConfiguration */
	static readonly PUT_BUCKET_OBJECT_LOCK_CONFIGURATION =
		"s3:PutBucketObjectLockConfiguration";
	/** [PermissionManagement] s3:PutBucketOwnershipControls */
	static readonly PUT_BUCKET_OWNERSHIP_CONTROLS =
		"s3:PutBucketOwnershipControls";
	/** [PermissionManagement] s3:PutBucketPolicy */
	static readonly PUT_BUCKET_POLICY = "s3:PutBucketPolicy";
	/** [PermissionManagement] s3:PutBucketPublicAccessBlock */
	static readonly PUT_BUCKET_PUBLIC_ACCESS_BLOCK =
		"s3:PutBucketPublicAccessBlock";
	/** [Write] s3:PutBucketRequestPayment */
	static readonly PUT_BUCKET_REQUEST_PAYMENT = "s3:PutBucketRequestPayment";
	/** [Tagging] s3:PutBucketTagging */
	static readonly PUT_BUCKET_TAGGING = "s3:PutBucketTagging";
	/** [Write] s3:PutBucketVersioning */
	static readonly PUT_BUCKET_VERSIONING = "s3:PutBucketVersioning";
	/** [Write] s3:PutBucketWebsite */
	static readonly PUT_BUCKET_WEBSITE = "s3:PutBucketWebsite";
	/** [Write] s3:PutEncryptionConfiguration */
	static readonly PUT_ENCRYPTION_CONFIGURATION =
		"s3:PutEncryptionConfiguration";
	/** [Write] s3:PutIntelligentTieringConfiguration */
	static readonly PUT_INTELLIGENT_TIERING_CONFIGURATION =
		"s3:PutIntelligentTieringConfiguration";
	/** [Write] s3:PutInventoryConfiguration */
	static readonly PUT_INVENTORY_CONFIGURATION = "s3:PutInventoryConfiguration";
	/** [Tagging] s3:PutJobTagging */
	static readonly PUT_JOB_TAGGING = "s3:PutJobTagging";
	/** [Write] s3:PutLifecycleConfiguration */
	static readonly PUT_LIFECYCLE_CONFIGURATION = "s3:PutLifecycleConfiguration";
	/** [Write] s3:PutMetricsConfiguration */
	static readonly PUT_METRICS_CONFIGURATION = "s3:PutMetricsConfiguration";
	/** [PermissionManagement] s3:PutMultiRegionAccessPointPolicy */
	static readonly PUT_MULTI_REGION_ACCESS_POINT_POLICY =
		"s3:PutMultiRegionAccessPointPolicy";
	/** [Write] s3:PutObject */
	static readonly PUT_OBJECT = "s3:PutObject";
	/** [PermissionManagement] s3:PutObjectAcl */
	static readonly PUT_OBJECT_ACL = "s3:PutObjectAcl";
	/** [Write] s3:PutObjectAnnotation */
	static readonly PUT_OBJECT_ANNOTATION = "s3:PutObjectAnnotation";
	/** [Write] s3:PutObjectLegalHold */
	static readonly PUT_OBJECT_LEGAL_HOLD = "s3:PutObjectLegalHold";
	/** [Write] s3:PutObjectRetention */
	static readonly PUT_OBJECT_RETENTION = "s3:PutObjectRetention";
	/** [Tagging] s3:PutObjectTagging */
	static readonly PUT_OBJECT_TAGGING = "s3:PutObjectTagging";
	/** [PermissionManagement] s3:PutObjectVersionAcl */
	static readonly PUT_OBJECT_VERSION_ACL = "s3:PutObjectVersionAcl";
	/** [Write] s3:PutObjectVersionAnnotation */
	static readonly PUT_OBJECT_VERSION_ANNOTATION =
		"s3:PutObjectVersionAnnotation";
	/** [Tagging] s3:PutObjectVersionTagging */
	static readonly PUT_OBJECT_VERSION_TAGGING = "s3:PutObjectVersionTagging";
	/** [Write] s3:PutReplicationConfiguration */
	static readonly PUT_REPLICATION_CONFIGURATION =
		"s3:PutReplicationConfiguration";
	/** [Write] s3:PutStorageLensConfiguration */
	static readonly PUT_STORAGE_LENS_CONFIGURATION =
		"s3:PutStorageLensConfiguration";
	/** [Tagging] s3:PutStorageLensConfigurationTagging */
	static readonly PUT_STORAGE_LENS_CONFIGURATION_TAGGING =
		"s3:PutStorageLensConfigurationTagging";
	/** [Write] s3:ReplicateDelete */
	static readonly REPLICATE_DELETE = "s3:ReplicateDelete";
	/** [Write] s3:ReplicateObject */
	static readonly REPLICATE_OBJECT = "s3:ReplicateObject";
	/** [Write] s3:ReplicateObjectAnnotation */
	static readonly REPLICATE_OBJECT_ANNOTATION = "s3:ReplicateObjectAnnotation";
	/** [Tagging] s3:ReplicateTags */
	static readonly REPLICATE_TAGS = "s3:ReplicateTags";
	/** [Write] s3:RestoreObject */
	static readonly RESTORE_OBJECT = "s3:RestoreObject";
	/** [Write] s3:SubmitMultiRegionAccessPointRoutes */
	static readonly SUBMIT_MULTI_REGION_ACCESS_POINT_ROUTES =
		"s3:SubmitMultiRegionAccessPointRoutes";
	/** [Tagging] s3:TagResource */
	static readonly TAG_RESOURCE = "s3:TagResource";
	/** [Tagging] s3:UntagResource */
	static readonly UNTAG_RESOURCE = "s3:UntagResource";
	/** [PermissionManagement] s3:UpdateAccessGrantsLocation */
	static readonly UPDATE_ACCESS_GRANTS_LOCATION =
		"s3:UpdateAccessGrantsLocation";
	/** [Write] s3:UpdateBucketMetadataAnnotationTableConfiguration */
	static readonly UPDATE_BUCKET_METADATA_ANNOTATION_TABLE_CONFIGURATION =
		"s3:UpdateBucketMetadataAnnotationTableConfiguration";
	/** [Write] s3:UpdateBucketMetadataInventoryTableConfiguration */
	static readonly UPDATE_BUCKET_METADATA_INVENTORY_TABLE_CONFIGURATION =
		"s3:UpdateBucketMetadataInventoryTableConfiguration";
	/** [Write] s3:UpdateBucketMetadataJournalTableConfiguration */
	static readonly UPDATE_BUCKET_METADATA_JOURNAL_TABLE_CONFIGURATION =
		"s3:UpdateBucketMetadataJournalTableConfiguration";
	/** [Write] s3:UpdateJobPriority */
	static readonly UPDATE_JOB_PRIORITY = "s3:UpdateJobPriority";
	/** [Write] s3:UpdateJobStatus */
	static readonly UPDATE_JOB_STATUS = "s3:UpdateJobStatus";
	/** [Write] s3:UpdateObjectEncryption */
	static readonly UPDATE_OBJECT_ENCRYPTION = "s3:UpdateObjectEncryption";
	/** [Write] s3:UpdateStorageLensGroup */
	static readonly UPDATE_STORAGE_LENS_GROUP = "s3:UpdateStorageLensGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		S3Actions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		S3Actions.DESCRIBE_JOB,
		S3Actions.DESCRIBE_MULTI_REGION_ACCESS_POINT_OPERATION,
		S3Actions.GET_ACCELERATE_CONFIGURATION,
		S3Actions.GET_ACCESS_GRANT,
		S3Actions.GET_ACCESS_GRANTS_INSTANCE,
		S3Actions.GET_ACCESS_GRANTS_INSTANCE_FOR_PREFIX,
		S3Actions.GET_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY,
		S3Actions.GET_ACCESS_GRANTS_LOCATION,
		S3Actions.GET_ACCESS_POINT,
		S3Actions.GET_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA,
		S3Actions.GET_ACCESS_POINT_FOR_OBJECT_LAMBDA,
		S3Actions.GET_ACCESS_POINT_POLICY,
		S3Actions.GET_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA,
		S3Actions.GET_ACCESS_POINT_POLICY_STATUS,
		S3Actions.GET_ACCESS_POINT_POLICY_STATUS_FOR_OBJECT_LAMBDA,
		S3Actions.GET_ACCOUNT_PUBLIC_ACCESS_BLOCK,
		S3Actions.GET_ANALYTICS_CONFIGURATION,
		S3Actions.GET_BUCKET_ABAC,
		S3Actions.GET_BUCKET_ACL,
		S3Actions.GET_BUCKET_CORS,
		S3Actions.GET_BUCKET_LOCATION,
		S3Actions.GET_BUCKET_LOGGING,
		S3Actions.GET_BUCKET_METADATA_TABLE_CONFIGURATION,
		S3Actions.GET_BUCKET_NOTIFICATION,
		S3Actions.GET_BUCKET_OBJECT_LOCK_CONFIGURATION,
		S3Actions.GET_BUCKET_OWNERSHIP_CONTROLS,
		S3Actions.GET_BUCKET_POLICY,
		S3Actions.GET_BUCKET_POLICY_STATUS,
		S3Actions.GET_BUCKET_PUBLIC_ACCESS_BLOCK,
		S3Actions.GET_BUCKET_REQUEST_PAYMENT,
		S3Actions.GET_BUCKET_TAGGING,
		S3Actions.GET_BUCKET_VERSIONING,
		S3Actions.GET_BUCKET_WEBSITE,
		S3Actions.GET_DATA_ACCESS,
		S3Actions.GET_ENCRYPTION_CONFIGURATION,
		S3Actions.GET_INTELLIGENT_TIERING_CONFIGURATION,
		S3Actions.GET_INVENTORY_CONFIGURATION,
		S3Actions.GET_JOB_TAGGING,
		S3Actions.GET_LIFECYCLE_CONFIGURATION,
		S3Actions.GET_METRICS_CONFIGURATION,
		S3Actions.GET_MULTI_REGION_ACCESS_POINT,
		S3Actions.GET_MULTI_REGION_ACCESS_POINT_POLICY,
		S3Actions.GET_MULTI_REGION_ACCESS_POINT_POLICY_STATUS,
		S3Actions.GET_MULTI_REGION_ACCESS_POINT_ROUTES,
		S3Actions.GET_OBJECT,
		S3Actions.GET_OBJECT_ACL,
		S3Actions.GET_OBJECT_ANNOTATION,
		S3Actions.GET_OBJECT_ATTRIBUTES,
		S3Actions.GET_OBJECT_LEGAL_HOLD,
		S3Actions.GET_OBJECT_RETENTION,
		S3Actions.GET_OBJECT_TAGGING,
		S3Actions.GET_OBJECT_TORRENT,
		S3Actions.GET_OBJECT_VERSION,
		S3Actions.GET_OBJECT_VERSION_ACL,
		S3Actions.GET_OBJECT_VERSION_ANNOTATION,
		S3Actions.GET_OBJECT_VERSION_ANNOTATION_FOR_REPLICATION,
		S3Actions.GET_OBJECT_VERSION_ATTRIBUTES,
		S3Actions.GET_OBJECT_VERSION_FOR_REPLICATION,
		S3Actions.GET_OBJECT_VERSION_TAGGING,
		S3Actions.GET_OBJECT_VERSION_TORRENT,
		S3Actions.GET_REPLICATION_CONFIGURATION,
		S3Actions.GET_STORAGE_LENS_CONFIGURATION,
		S3Actions.GET_STORAGE_LENS_CONFIGURATION_TAGGING,
		S3Actions.GET_STORAGE_LENS_DASHBOARD,
		S3Actions.GET_STORAGE_LENS_GROUP,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		S3Actions.ABORT_MULTIPART_UPLOAD,
		S3Actions.CREATE_ACCESS_POINT,
		S3Actions.CREATE_ACCESS_POINT_FOR_OBJECT_LAMBDA,
		S3Actions.CREATE_BUCKET,
		S3Actions.CREATE_BUCKET_METADATA_TABLE_CONFIGURATION,
		S3Actions.CREATE_JOB,
		S3Actions.CREATE_MULTI_REGION_ACCESS_POINT,
		S3Actions.CREATE_STORAGE_LENS_GROUP,
		S3Actions.DELETE_ACCESS_POINT,
		S3Actions.DELETE_ACCESS_POINT_FOR_OBJECT_LAMBDA,
		S3Actions.DELETE_BUCKET,
		S3Actions.DELETE_BUCKET_METADATA_TABLE_CONFIGURATION,
		S3Actions.DELETE_BUCKET_WEBSITE,
		S3Actions.DELETE_MULTI_REGION_ACCESS_POINT,
		S3Actions.DELETE_OBJECT,
		S3Actions.DELETE_OBJECT_ANNOTATION,
		S3Actions.DELETE_OBJECT_VERSION,
		S3Actions.DELETE_OBJECT_VERSION_ANNOTATION,
		S3Actions.DELETE_STORAGE_LENS_CONFIGURATION,
		S3Actions.DELETE_STORAGE_LENS_GROUP,
		S3Actions.INITIATE_REPLICATION,
		S3Actions.PAUSE_REPLICATION,
		S3Actions.PUT_ACCELERATE_CONFIGURATION,
		S3Actions.PUT_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA,
		S3Actions.PUT_ANALYTICS_CONFIGURATION,
		S3Actions.PUT_BUCKET_ABAC,
		S3Actions.PUT_BUCKET_CORS,
		S3Actions.PUT_BUCKET_LOGGING,
		S3Actions.PUT_BUCKET_NOTIFICATION,
		S3Actions.PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,
		S3Actions.PUT_BUCKET_REQUEST_PAYMENT,
		S3Actions.PUT_BUCKET_VERSIONING,
		S3Actions.PUT_BUCKET_WEBSITE,
		S3Actions.PUT_ENCRYPTION_CONFIGURATION,
		S3Actions.PUT_INTELLIGENT_TIERING_CONFIGURATION,
		S3Actions.PUT_INVENTORY_CONFIGURATION,
		S3Actions.PUT_LIFECYCLE_CONFIGURATION,
		S3Actions.PUT_METRICS_CONFIGURATION,
		S3Actions.PUT_OBJECT,
		S3Actions.PUT_OBJECT_ANNOTATION,
		S3Actions.PUT_OBJECT_LEGAL_HOLD,
		S3Actions.PUT_OBJECT_RETENTION,
		S3Actions.PUT_OBJECT_VERSION_ANNOTATION,
		S3Actions.PUT_REPLICATION_CONFIGURATION,
		S3Actions.PUT_STORAGE_LENS_CONFIGURATION,
		S3Actions.REPLICATE_DELETE,
		S3Actions.REPLICATE_OBJECT,
		S3Actions.REPLICATE_OBJECT_ANNOTATION,
		S3Actions.RESTORE_OBJECT,
		S3Actions.SUBMIT_MULTI_REGION_ACCESS_POINT_ROUTES,
		S3Actions.UPDATE_BUCKET_METADATA_ANNOTATION_TABLE_CONFIGURATION,
		S3Actions.UPDATE_BUCKET_METADATA_INVENTORY_TABLE_CONFIGURATION,
		S3Actions.UPDATE_BUCKET_METADATA_JOURNAL_TABLE_CONFIGURATION,
		S3Actions.UPDATE_JOB_PRIORITY,
		S3Actions.UPDATE_JOB_STATUS,
		S3Actions.UPDATE_OBJECT_ENCRYPTION,
		S3Actions.UPDATE_STORAGE_LENS_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		S3Actions.LIST_ACCESS_GRANTS,
		S3Actions.LIST_ACCESS_GRANTS_INSTANCES,
		S3Actions.LIST_ACCESS_GRANTS_LOCATIONS,
		S3Actions.LIST_ACCESS_POINTS,
		S3Actions.LIST_ACCESS_POINTS_FOR_OBJECT_LAMBDA,
		S3Actions.LIST_ALL_MY_BUCKETS,
		S3Actions.LIST_BUCKET,
		S3Actions.LIST_BUCKET_MULTIPART_UPLOADS,
		S3Actions.LIST_BUCKET_VERSIONS,
		S3Actions.LIST_CALLER_ACCESS_GRANTS,
		S3Actions.LIST_JOBS,
		S3Actions.LIST_MULTI_REGION_ACCESS_POINTS,
		S3Actions.LIST_MULTIPART_UPLOAD_PARTS,
		S3Actions.LIST_OBJECT_ANNOTATIONS,
		S3Actions.LIST_OBJECT_VERSION_ANNOTATIONS,
		S3Actions.LIST_STORAGE_LENS_CONFIGURATIONS,
		S3Actions.LIST_STORAGE_LENS_GROUPS,
		S3Actions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		S3Actions.ASSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER,
		S3Actions.BYPASS_GOVERNANCE_RETENTION,
		S3Actions.CREATE_ACCESS_GRANT,
		S3Actions.CREATE_ACCESS_GRANTS_INSTANCE,
		S3Actions.CREATE_ACCESS_GRANTS_LOCATION,
		S3Actions.DELETE_ACCESS_GRANT,
		S3Actions.DELETE_ACCESS_GRANTS_INSTANCE,
		S3Actions.DELETE_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY,
		S3Actions.DELETE_ACCESS_GRANTS_LOCATION,
		S3Actions.DELETE_ACCESS_POINT_POLICY,
		S3Actions.DELETE_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA,
		S3Actions.DELETE_BUCKET_POLICY,
		S3Actions.DISSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER,
		S3Actions.OBJECT_OWNER_OVERRIDE_TO_BUCKET_OWNER,
		S3Actions.PUT_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY,
		S3Actions.PUT_ACCESS_POINT_POLICY,
		S3Actions.PUT_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA,
		S3Actions.PUT_ACCESS_POINT_PUBLIC_ACCESS_BLOCK,
		S3Actions.PUT_ACCOUNT_PUBLIC_ACCESS_BLOCK,
		S3Actions.PUT_BUCKET_ACL,
		S3Actions.PUT_BUCKET_OWNERSHIP_CONTROLS,
		S3Actions.PUT_BUCKET_POLICY,
		S3Actions.PUT_BUCKET_PUBLIC_ACCESS_BLOCK,
		S3Actions.PUT_MULTI_REGION_ACCESS_POINT_POLICY,
		S3Actions.PUT_OBJECT_ACL,
		S3Actions.PUT_OBJECT_VERSION_ACL,
		S3Actions.UPDATE_ACCESS_GRANTS_LOCATION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		S3Actions.DELETE_JOB_TAGGING,
		S3Actions.DELETE_OBJECT_TAGGING,
		S3Actions.DELETE_OBJECT_VERSION_TAGGING,
		S3Actions.DELETE_STORAGE_LENS_CONFIGURATION_TAGGING,
		S3Actions.PUT_BUCKET_TAGGING,
		S3Actions.PUT_JOB_TAGGING,
		S3Actions.PUT_OBJECT_TAGGING,
		S3Actions.PUT_OBJECT_VERSION_TAGGING,
		S3Actions.PUT_STORAGE_LENS_CONFIGURATION_TAGGING,
		S3Actions.REPLICATE_TAGS,
		S3Actions.TAG_RESOURCE,
		S3Actions.UNTAG_RESOURCE,
	];
}

const AccessgrantArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants/default/grant/(?<token>[^:/?]+)$",
);
const AccessgrantsinstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants/default$",
);
const AccessgrantslocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants/default/location/(?<token>[^:/?]+)$",
);
const AccesspointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):accesspoint/(?<accessPointName>[^:/?]+)$",
);
const AccesspointobjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):accesspoint/(?<accessPointName>[^:/?]+)/object/(?<objectName>[^:/?]+)$",
);
const BucketArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const MultiregionaccesspointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3::(?<account>[^:]*):accesspoint/(?<accessPointAlias>[^:/?]+)$",
);
const MultiregionaccesspointrequestarnArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:us-west-2:(?<account>[^:]*):async-request/mrap/(?<operation>[^:/?]+)/(?<token>[^:/?]+)$",
);
const ObjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)/(?<objectName>[^:/?]+)$",
);
const ObjectlambdaaccesspointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3-object-lambda:(?<region>[^:]*):(?<account>[^:]*):accesspoint/(?<accessPointName>[^:/?]+)$",
);
const StoragelensconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):storage-lens/(?<configId>[^:/?]+)$",
);
const StoragelensgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):storage-lens-group/(?<name>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for s3 resources.
 */
export class S3Resources {
	/**
	 * Builds an ARN for the accessgrant resource.
	 */
	static accessgrant(props: {
		/** The Token component of the ARN. */
		readonly token: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:access-grants/default/grant/${props.token}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accessgrant resource.
	 */
	static isValidAccessgrantArn(arn: string): boolean {
		return AccessgrantArnRegex.test(arn);
	}

	/**
	 * Parses a accessgrant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessgrantArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		token: string;
	} {
		const match = AccessgrantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accessgrant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			token: match.groups!.token,
		};
	}

	/**
	 * Builds an ARN for the accessgrantsinstance resource.
	 */
	static accessgrantsinstance(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:access-grants/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accessgrantsinstance resource.
	 */
	static isValidAccessgrantsinstanceArn(arn: string): boolean {
		return AccessgrantsinstanceArnRegex.test(arn);
	}

	/**
	 * Parses a accessgrantsinstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessgrantsinstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = AccessgrantsinstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accessgrantsinstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the accessgrantslocation resource.
	 */
	static accessgrantslocation(props: {
		/** The Token component of the ARN. */
		readonly token: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:access-grants/default/location/${props.token}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accessgrantslocation resource.
	 */
	static isValidAccessgrantslocationArn(arn: string): boolean {
		return AccessgrantslocationArnRegex.test(arn);
	}

	/**
	 * Parses a accessgrantslocation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessgrantslocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		token: string;
	} {
		const match = AccessgrantslocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accessgrantslocation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			token: match.groups!.token,
		};
	}

	/**
	 * Builds an ARN for the accesspoint resource.
	 */
	static accesspoint(props: {
		/** The AccessPointName component of the ARN. */
		readonly accessPointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:accesspoint/${props.accessPointName}`;
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
	static parseAccesspointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPointName: string;
	} {
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
	 * Builds an ARN for the accesspointobject resource.
	 */
	static accesspointobject(props: {
		/** The AccessPointName component of the ARN. */
		readonly accessPointName: string;
		/** The ObjectName component of the ARN. */
		readonly objectName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:accesspoint/${props.accessPointName}/object/${props.objectName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accesspointobject resource.
	 */
	static isValidAccesspointobjectArn(arn: string): boolean {
		return AccesspointobjectArnRegex.test(arn);
	}

	/**
	 * Parses a accesspointobject ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccesspointobjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPointName: string;
		objectName: string;
	} {
		const match = AccesspointobjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accesspointobject ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPointName: match.groups!.accessPointName,
			objectName: match.groups!.objectName,
		};
	}

	/**
	 * Builds an ARN for the bucket resource.
	 */
	static bucket(props: {
		/** The BucketName component of the ARN. */
		readonly bucketName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:::${props.bucketName}`;
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
	static parseBucketArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bucketName: string;
	} {
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

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the multiregionaccesspoint resource.
	 */
	static multiregionaccesspoint(props: {
		/** The AccessPointAlias component of the ARN. */
		readonly accessPointAlias: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3::${props.account ?? "*"}:accesspoint/${props.accessPointAlias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multiregionaccesspoint resource.
	 */
	static isValidMultiregionaccesspointArn(arn: string): boolean {
		return MultiregionaccesspointArnRegex.test(arn);
	}

	/**
	 * Parses a multiregionaccesspoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiregionaccesspointArn(arn: string): {
		partition: string;
		account: string;
		accessPointAlias: string;
	} {
		const match = MultiregionaccesspointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multiregionaccesspoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			accessPointAlias: match.groups!.accessPointAlias,
		};
	}

	/**
	 * Builds an ARN for the multiregionaccesspointrequestarn resource.
	 */
	static multiregionaccesspointrequestarn(props: {
		/** The Operation component of the ARN. */
		readonly operation: string;
		/** The Token component of the ARN. */
		readonly token: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:us-west-2:${props.account ?? "*"}:async-request/mrap/${props.operation}/${props.token}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multiregionaccesspointrequestarn resource.
	 */
	static isValidMultiregionaccesspointrequestarnArn(arn: string): boolean {
		return MultiregionaccesspointrequestarnArnRegex.test(arn);
	}

	/**
	 * Parses a multiregionaccesspointrequestarn ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiregionaccesspointrequestarnArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		operation: string;
		token: string;
	} {
		const match = MultiregionaccesspointrequestarnArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multiregionaccesspointrequestarn ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			operation: match.groups!.operation,
			token: match.groups!.token,
		};
	}

	/**
	 * Builds an ARN for the object resource.
	 */
	static object(props: {
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
		return `arn:${props.partition ?? "aws"}:s3:::${props.bucketName}/${props.objectName}`;
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
	static parseObjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bucketName: string;
		objectName: string;
	} {
		const match = ObjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid object ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bucketName: match.groups!.bucketName,
			objectName: match.groups!.objectName,
		};
	}

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

	/**
	 * Builds an ARN for the storagelensconfiguration resource.
	 */
	static storagelensconfiguration(props: {
		/** The ConfigId component of the ARN. */
		readonly configId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:storage-lens/${props.configId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the storagelensconfiguration resource.
	 */
	static isValidStoragelensconfigurationArn(arn: string): boolean {
		return StoragelensconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a storagelensconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStoragelensconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configId: string;
	} {
		const match = StoragelensconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid storagelensconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configId: match.groups!.configId,
		};
	}

	/**
	 * Builds an ARN for the storagelensgroup resource.
	 */
	static storagelensgroup(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:${props.region ?? "*"}:${props.account ?? "*"}:storage-lens-group/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the storagelensgroup resource.
	 */
	static isValidStoragelensgroupArn(arn: string): boolean {
		return StoragelensgroupArnRegex.test(arn);
	}

	/**
	 * Parses a storagelensgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStoragelensgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
		const match = StoragelensgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid storagelensgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}
}

/**
 * API operation to required IAM actions mapping for s3.
 */
export class S3Operations {
	/** IAM actions required for the AbortMultipartUpload API call. */
	static readonly ABORT_MULTIPART_UPLOAD: string[] = [
		"s3:AbortMultipartUpload",
		"s3-object-lambda:AbortMultipartUpload",
	];
	/** IAM actions required for the AssociateAccessGrantsIdentityCenter API call. */
	static readonly ASSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER: string[] = [
		"s3:AssociateAccessGrantsIdentityCenter",
		"sso:CreateApplication",
		"sso:PutApplicationAuthenticationMethod",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the CompleteMultipartUpload API call. */
	static readonly COMPLETE_MULTIPART_UPLOAD: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
	];
	/** IAM actions required for the CopyObject API call. */
	static readonly COPY_OBJECT: string[] = [
		"s3:GetObject",
		"s3:GetObjectVersion",
		"s3:PutObject",
		"s3-object-lambda:PutObject",
		"s3:PutObjectAcl",
		"s3:PutObjectLegalHold",
		"s3:PutObjectRetention",
		"s3:PutObjectTagging",
	];
	/** IAM actions required for the CreateAccessGrant API call. */
	static readonly CREATE_ACCESS_GRANT: string[] = [
		"s3:CreateAccessGrant",
		"sso:DescribeApplication",
		"sso:DescribeInstance",
		"identitystore:DescribeUser",
	];
	/** IAM actions required for the CreateAccessGrantsInstance API call. */
	static readonly CREATE_ACCESS_GRANTS_INSTANCE: string[] = [
		"s3:CreateAccessGrantsInstance",
		"sso:CreateApplication",
		"sso:DescribeInstance",
		"sso:PutApplicationAuthenticationMethod",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the CreateAccessGrantsLocation API call. */
	static readonly CREATE_ACCESS_GRANTS_LOCATION: string[] = [
		"s3:CreateAccessGrantsLocation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAccessPoint API call. */
	static readonly CREATE_ACCESS_POINT: string[] = ["s3:CreateAccessPoint"];
	/** IAM actions required for the CreateAccessPointForObjectLambda API call. */
	static readonly CREATE_ACCESS_POINT_FOR_OBJECT_LAMBDA: string[] = [
		"s3:CreateAccessPointForObjectLambda",
	];
	/** IAM actions required for the CreateBucket API call. */
	static readonly CREATE_BUCKET: string[] = [
		"s3:CreateBucket",
		"s3:PutBucketAcl",
		"s3:PutBucketObjectLockConfiguration",
		"s3:PutBucketOwnershipControls",
		"s3:PutBucketVersioning",
	];
	/** IAM actions required for the CreateBucketMetadataConfiguration API call. */
	static readonly CREATE_BUCKET_METADATA_CONFIGURATION: string[] = [
		"s3:CreateBucketMetadataTableConfiguration",
		"s3tables:CreateNamespace",
		"s3tables:CreateTable",
		"s3tables:CreateTableBucket",
		"s3tables:GetTable",
		"s3tables:PutTableEncryption",
		"s3tables:PutTablePolicy",
	];
	/** IAM actions required for the CreateBucketMetadataTableConfiguration API call. */
	static readonly CREATE_BUCKET_METADATA_TABLE_CONFIGURATION: string[] = [
		"s3:CreateBucketMetadataTableConfiguration",
		"s3tables:CreateNamespace",
		"s3tables:CreateTable",
		"s3tables:GetTable",
		"s3tables:PutTablePolicy",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = ["s3:CreateJob"];
	/** IAM actions required for the CreateMultiRegionAccessPoint API call. */
	static readonly CREATE_MULTI_REGION_ACCESS_POINT: string[] = [
		"s3:CreateMultiRegionAccessPoint",
	];
	/** IAM actions required for the CreateMultipartUpload API call. */
	static readonly CREATE_MULTIPART_UPLOAD: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
		"s3:PutObjectAcl",
		"s3:PutObjectLegalHold",
		"s3:PutObjectRetention",
		"s3:PutObjectTagging",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CREATE_SESSION: string[] = [];
	/** IAM actions required for the CreateStorageLensGroup API call. */
	static readonly CREATE_STORAGE_LENS_GROUP: string[] = [
		"s3:CreateStorageLensGroup",
		"s3:TagResource",
	];
	/** IAM actions required for the DeleteAccessGrant API call. */
	static readonly DELETE_ACCESS_GRANT: string[] = ["s3:DeleteAccessGrant"];
	/** IAM actions required for the DeleteAccessGrantsInstance API call. */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE: string[] = [
		"s3:DeleteAccessGrantsInstance",
	];
	/** IAM actions required for the DeleteAccessGrantsInstanceResourcePolicy API call. */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY: string[] = [
		"s3:DeleteAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the DeleteAccessGrantsLocation API call. */
	static readonly DELETE_ACCESS_GRANTS_LOCATION: string[] = [
		"s3:DeleteAccessGrantsLocation",
	];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DELETE_ACCESS_POINT: string[] = ["s3:DeleteAccessPoint"];
	/** IAM actions required for the DeleteAccessPointForObjectLambda API call. */
	static readonly DELETE_ACCESS_POINT_FOR_OBJECT_LAMBDA: string[] = [
		"s3:DeleteAccessPointForObjectLambda",
	];
	/** IAM actions required for the DeleteAccessPointPolicy API call. */
	static readonly DELETE_ACCESS_POINT_POLICY: string[] = [
		"s3:DeleteAccessPointPolicy",
	];
	/** IAM actions required for the DeleteAccessPointPolicyForObjectLambda API call. */
	static readonly DELETE_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA: string[] = [
		"s3:DeleteAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the DeleteAccessPointScope API call. */
	static readonly DELETE_ACCESS_POINT_SCOPE: string[] = [];
	/** IAM actions required for the DeleteBucket API call. */
	static readonly DELETE_BUCKET: string[] = ["s3:DeleteBucket"];
	/** IAM actions required for the DeleteBucketAnalyticsConfiguration API call. */
	static readonly DELETE_BUCKET_ANALYTICS_CONFIGURATION: string[] = [
		"s3:PutAnalyticsConfiguration",
	];
	/** IAM actions required for the DeleteBucketCors API call. */
	static readonly DELETE_BUCKET_CORS: string[] = ["s3:PutBucketCORS"];
	/** IAM actions required for the DeleteBucketEncryption API call. */
	static readonly DELETE_BUCKET_ENCRYPTION: string[] = [
		"s3:PutEncryptionConfiguration",
	];
	/** IAM actions required for the DeleteBucketIntelligentTieringConfiguration API call. */
	static readonly DELETE_BUCKET_INTELLIGENT_TIERING_CONFIGURATION: string[] = [
		"s3:PutIntelligentTieringConfiguration",
	];
	/** IAM actions required for the DeleteBucketInventoryConfiguration API call. */
	static readonly DELETE_BUCKET_INVENTORY_CONFIGURATION: string[] = [
		"s3:PutInventoryConfiguration",
	];
	/** IAM actions required for the DeleteBucketLifecycle API call. */
	static readonly DELETE_BUCKET_LIFECYCLE: string[] = [
		"s3:PutLifecycleConfiguration",
	];
	/** IAM actions required for the DeleteBucketLifecycleConfiguration API call. */
	static readonly DELETE_BUCKET_LIFECYCLE_CONFIGURATION: string[] = [];
	/** IAM actions required for the DeleteBucketMetadataConfiguration API call. */
	static readonly DELETE_BUCKET_METADATA_CONFIGURATION: string[] = [
		"s3:DeleteBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the DeleteBucketMetadataTableConfiguration API call. */
	static readonly DELETE_BUCKET_METADATA_TABLE_CONFIGURATION: string[] = [
		"s3:DeleteBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the DeleteBucketMetricsConfiguration API call. */
	static readonly DELETE_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3:PutMetricsConfiguration",
	];
	/** IAM actions required for the DeleteBucketOwnershipControls API call. */
	static readonly DELETE_BUCKET_OWNERSHIP_CONTROLS: string[] = [
		"s3:PutBucketOwnershipControls",
	];
	/** IAM actions required for the DeleteBucketPolicy API call. */
	static readonly DELETE_BUCKET_POLICY: string[] = ["s3:DeleteBucketPolicy"];
	/** IAM actions required for the DeleteBucketReplication API call. */
	static readonly DELETE_BUCKET_REPLICATION: string[] = [
		"s3:PutReplicationConfiguration",
	];
	/** IAM actions required for the DeleteBucketTagging API call. */
	static readonly DELETE_BUCKET_TAGGING: string[] = ["s3:PutBucketTagging"];
	/** IAM actions required for the DeleteBucketWebsite API call. */
	static readonly DELETE_BUCKET_WEBSITE: string[] = ["s3:DeleteBucketWebsite"];
	/** IAM actions required for the DeleteJobTagging API call. */
	static readonly DELETE_JOB_TAGGING: string[] = ["s3:DeleteJobTagging"];
	/** IAM actions required for the DeleteMultiRegionAccessPoint API call. */
	static readonly DELETE_MULTI_REGION_ACCESS_POINT: string[] = [
		"s3:DeleteMultiRegionAccessPoint",
	];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DELETE_OBJECT: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:DeleteObject",
		"s3-object-lambda:DeleteObject",
		"s3:DeleteObjectVersion",
	];
	/** IAM actions required for the DeleteObjectAnnotation API call. */
	static readonly DELETE_OBJECT_ANNOTATION: string[] = [];
	/** IAM actions required for the DeleteObjectTagging API call. */
	static readonly DELETE_OBJECT_TAGGING: string[] = [
		"s3:DeleteObjectTagging",
		"s3-object-lambda:DeleteObjectTagging",
		"s3:DeleteObjectVersionTagging",
	];
	/** IAM actions required for the DeleteObjects API call. */
	static readonly DELETE_OBJECTS: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:DeleteObject",
		"s3:DeleteObjectVersion",
	];
	/** IAM actions required for the DeletePublicAccessBlock API call. */
	static readonly DELETE_PUBLIC_ACCESS_BLOCK: string[] = [
		"s3:PutBucketPublicAccessBlock",
	];
	/** IAM actions required for the DeleteStorageLensConfiguration API call. */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION: string[] = [
		"s3:DeleteStorageLensConfiguration",
	];
	/** IAM actions required for the DeleteStorageLensConfigurationTagging API call. */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION_TAGGING: string[] = [
		"s3:DeleteStorageLensConfigurationTagging",
	];
	/** IAM actions required for the DeleteStorageLensGroup API call. */
	static readonly DELETE_STORAGE_LENS_GROUP: string[] = [
		"s3:DeleteStorageLensGroup",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["s3:DescribeJob"];
	/** IAM actions required for the DescribeMultiRegionAccessPointOperation API call. */
	static readonly DESCRIBE_MULTI_REGION_ACCESS_POINT_OPERATION: string[] = [
		"s3:DescribeMultiRegionAccessPointOperation",
	];
	/** IAM actions required for the DissociateAccessGrantsIdentityCenter API call. */
	static readonly DISSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER: string[] = [
		"sso:DeleteApplication",
		"s3:DissociateAccessGrantsIdentityCenter",
	];
	/** IAM actions required for the GetAccessGrant API call. */
	static readonly GET_ACCESS_GRANT: string[] = ["s3:GetAccessGrant"];
	/** IAM actions required for the GetAccessGrantsInstance API call. */
	static readonly GET_ACCESS_GRANTS_INSTANCE: string[] = [
		"s3:GetAccessGrantsInstance",
	];
	/** IAM actions required for the GetAccessGrantsInstanceForPrefix API call. */
	static readonly GET_ACCESS_GRANTS_INSTANCE_FOR_PREFIX: string[] = [
		"s3:GetAccessGrantsInstanceForPrefix",
	];
	/** IAM actions required for the GetAccessGrantsInstanceResourcePolicy API call. */
	static readonly GET_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY: string[] = [
		"s3:GetAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the GetAccessGrantsLocation API call. */
	static readonly GET_ACCESS_GRANTS_LOCATION: string[] = [
		"s3:GetAccessGrantsLocation",
	];
	/** IAM actions required for the GetAccessPoint API call. */
	static readonly GET_ACCESS_POINT: string[] = ["s3:GetAccessPoint"];
	/** IAM actions required for the GetAccessPointConfigurationForObjectLambda API call. */
	static readonly GET_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA: string[] = [
		"s3:GetAccessPointConfigurationForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointForObjectLambda API call. */
	static readonly GET_ACCESS_POINT_FOR_OBJECT_LAMBDA: string[] = [
		"s3:GetAccessPointForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointPolicy API call. */
	static readonly GET_ACCESS_POINT_POLICY: string[] = [
		"s3:GetAccessPointPolicy",
	];
	/** IAM actions required for the GetAccessPointPolicyForObjectLambda API call. */
	static readonly GET_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA: string[] = [
		"s3:GetAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointPolicyStatus API call. */
	static readonly GET_ACCESS_POINT_POLICY_STATUS: string[] = [
		"s3:GetAccessPointPolicyStatus",
	];
	/** IAM actions required for the GetAccessPointPolicyStatusForObjectLambda API call. */
	static readonly GET_ACCESS_POINT_POLICY_STATUS_FOR_OBJECT_LAMBDA: string[] = [
		"s3:GetAccessPointPolicyStatusForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointScope API call. */
	static readonly GET_ACCESS_POINT_SCOPE: string[] = [];
	/** IAM actions required for the GetBucket API call. */
	static readonly GET_BUCKET: string[] = [];
	/** IAM actions required for the GetBucketAbac API call. */
	static readonly GET_BUCKET_ABAC: string[] = [];
	/** IAM actions required for the GetBucketAccelerateConfiguration API call. */
	static readonly GET_BUCKET_ACCELERATE_CONFIGURATION: string[] = [
		"s3:GetAccelerateConfiguration",
	];
	/** IAM actions required for the GetBucketAcl API call. */
	static readonly GET_BUCKET_ACL: string[] = ["s3:GetBucketAcl"];
	/** IAM actions required for the GetBucketAnalyticsConfiguration API call. */
	static readonly GET_BUCKET_ANALYTICS_CONFIGURATION: string[] = [
		"s3:GetAnalyticsConfiguration",
	];
	/** IAM actions required for the GetBucketCors API call. */
	static readonly GET_BUCKET_CORS: string[] = ["s3:GetBucketCORS"];
	/** IAM actions required for the GetBucketEncryption API call. */
	static readonly GET_BUCKET_ENCRYPTION: string[] = [
		"s3:GetEncryptionConfiguration",
	];
	/** IAM actions required for the GetBucketIntelligentTieringConfiguration API call. */
	static readonly GET_BUCKET_INTELLIGENT_TIERING_CONFIGURATION: string[] = [
		"s3:GetIntelligentTieringConfiguration",
	];
	/** IAM actions required for the GetBucketInventoryConfiguration API call. */
	static readonly GET_BUCKET_INVENTORY_CONFIGURATION: string[] = [
		"s3:GetInventoryConfiguration",
	];
	/** IAM actions required for the GetBucketLifecycle API call. */
	static readonly GET_BUCKET_LIFECYCLE: string[] = [
		"s3:GetLifecycleConfiguration",
	];
	/** IAM actions required for the GetBucketLifecycleConfiguration API call. */
	static readonly GET_BUCKET_LIFECYCLE_CONFIGURATION: string[] = [
		"s3:GetLifecycleConfiguration",
		"s3express:GetLifecycleConfiguration",
	];
	/** IAM actions required for the GetBucketLocation API call. */
	static readonly GET_BUCKET_LOCATION: string[] = ["s3:GetBucketLocation"];
	/** IAM actions required for the GetBucketLogging API call. */
	static readonly GET_BUCKET_LOGGING: string[] = ["s3:GetBucketLogging"];
	/** IAM actions required for the GetBucketMetadataConfiguration API call. */
	static readonly GET_BUCKET_METADATA_CONFIGURATION: string[] = [
		"s3:GetBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the GetBucketMetadataTableConfiguration API call. */
	static readonly GET_BUCKET_METADATA_TABLE_CONFIGURATION: string[] = [
		"s3:GetBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the GetBucketMetricsConfiguration API call. */
	static readonly GET_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3:GetMetricsConfiguration",
	];
	/** IAM actions required for the GetBucketNotification API call. */
	static readonly GET_BUCKET_NOTIFICATION: string[] = [
		"s3:GetBucketNotification",
	];
	/** IAM actions required for the GetBucketNotificationConfiguration API call. */
	static readonly GET_BUCKET_NOTIFICATION_CONFIGURATION: string[] = [
		"s3:GetBucketNotification",
	];
	/** IAM actions required for the GetBucketOwnershipControls API call. */
	static readonly GET_BUCKET_OWNERSHIP_CONTROLS: string[] = [
		"s3:GetBucketOwnershipControls",
	];
	/** IAM actions required for the GetBucketPolicy API call. */
	static readonly GET_BUCKET_POLICY: string[] = ["s3:GetBucketPolicy"];
	/** IAM actions required for the GetBucketPolicyStatus API call. */
	static readonly GET_BUCKET_POLICY_STATUS: string[] = [
		"s3:GetBucketPolicyStatus",
	];
	/** IAM actions required for the GetBucketReplication API call. */
	static readonly GET_BUCKET_REPLICATION: string[] = [
		"s3:GetReplicationConfiguration",
	];
	/** IAM actions required for the GetBucketRequestPayment API call. */
	static readonly GET_BUCKET_REQUEST_PAYMENT: string[] = [
		"s3:GetBucketRequestPayment",
	];
	/** IAM actions required for the GetBucketTagging API call. */
	static readonly GET_BUCKET_TAGGING: string[] = ["s3:GetBucketTagging"];
	/** IAM actions required for the GetBucketVersioning API call. */
	static readonly GET_BUCKET_VERSIONING: string[] = ["s3:GetBucketVersioning"];
	/** IAM actions required for the GetBucketWebsite API call. */
	static readonly GET_BUCKET_WEBSITE: string[] = ["s3:GetBucketWebsite"];
	/** IAM actions required for the GetDataAccess API call. */
	static readonly GET_DATA_ACCESS: string[] = ["s3:GetDataAccess"];
	/** IAM actions required for the GetJobTagging API call. */
	static readonly GET_JOB_TAGGING: string[] = ["s3:GetJobTagging"];
	/** IAM actions required for the GetMultiRegionAccessPoint API call. */
	static readonly GET_MULTI_REGION_ACCESS_POINT: string[] = [
		"s3:GetMultiRegionAccessPoint",
	];
	/** IAM actions required for the GetMultiRegionAccessPointPolicy API call. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY: string[] = [
		"s3:GetMultiRegionAccessPointPolicy",
	];
	/** IAM actions required for the GetMultiRegionAccessPointPolicyStatus API call. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY_STATUS: string[] = [
		"s3:GetMultiRegionAccessPointPolicyStatus",
	];
	/** IAM actions required for the GetMultiRegionAccessPointRoutes API call. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_ROUTES: string[] = [
		"s3:GetMultiRegionAccessPointRoutes",
	];
	/** IAM actions required for the GetObject API call. */
	static readonly GET_OBJECT: string[] = [
		"s3:GetObject",
		"s3-object-lambda:GetObject",
		"s3:GetObjectLegalHold",
		"s3:GetObjectRetention",
		"s3:GetObjectTagging",
		"s3:GetObjectVersion",
	];
	/** IAM actions required for the GetObjectAcl API call. */
	static readonly GET_OBJECT_ACL: string[] = [
		"s3:GetObjectAcl",
		"s3-object-lambda:GetObjectAcl",
		"s3:GetObjectVersionAcl",
	];
	/** IAM actions required for the GetObjectAnnotation API call. */
	static readonly GET_OBJECT_ANNOTATION: string[] = [];
	/** IAM actions required for the GetObjectAttributes API call. */
	static readonly GET_OBJECT_ATTRIBUTES: string[] = [
		"s3:GetObject",
		"s3:GetObjectVersion",
	];
	/** IAM actions required for the GetObjectLegalHold API call. */
	static readonly GET_OBJECT_LEGAL_HOLD: string[] = [
		"s3:GetObjectLegalHold",
		"s3-object-lambda:GetObjectLegalHold",
	];
	/** IAM actions required for the GetObjectLockConfiguration API call. */
	static readonly GET_OBJECT_LOCK_CONFIGURATION: string[] = [
		"s3:GetBucketObjectLockConfiguration",
	];
	/** IAM actions required for the GetObjectRetention API call. */
	static readonly GET_OBJECT_RETENTION: string[] = [
		"s3:GetObjectRetention",
		"s3-object-lambda:GetObjectRetention",
	];
	/** IAM actions required for the GetObjectTagging API call. */
	static readonly GET_OBJECT_TAGGING: string[] = [
		"s3:GetObjectTagging",
		"s3-object-lambda:GetObjectTagging",
		"s3:GetObjectVersionTagging",
	];
	/** IAM actions required for the GetObjectTorrent API call. */
	static readonly GET_OBJECT_TORRENT: string[] = ["s3:GetObject"];
	/** IAM actions required for the GetPublicAccessBlock API call. */
	static readonly GET_PUBLIC_ACCESS_BLOCK: string[] = [
		"s3:GetBucketPublicAccessBlock",
	];
	/** IAM actions required for the GetStorageLensConfiguration API call. */
	static readonly GET_STORAGE_LENS_CONFIGURATION: string[] = [
		"s3:GetStorageLensConfiguration",
	];
	/** IAM actions required for the GetStorageLensConfigurationTagging API call. */
	static readonly GET_STORAGE_LENS_CONFIGURATION_TAGGING: string[] = [
		"s3:GetStorageLensConfigurationTagging",
	];
	/** IAM actions required for the GetStorageLensGroup API call. */
	static readonly GET_STORAGE_LENS_GROUP: string[] = ["s3:GetStorageLensGroup"];
	/** IAM actions required for the HeadBucket API call. */
	static readonly HEAD_BUCKET: string[] = ["s3:ListBucket"];
	/** IAM actions required for the HeadObject API call. */
	static readonly HEAD_OBJECT: string[] = [
		"s3:GetObject",
		"s3-object-lambda:GetObject",
		"s3:GetObjectLegalHold",
		"s3:GetObjectRetention",
	];
	/** IAM actions required for the ListAccessGrants API call. */
	static readonly LIST_ACCESS_GRANTS: string[] = ["s3:ListAccessGrants"];
	/** IAM actions required for the ListAccessGrantsInstances API call. */
	static readonly LIST_ACCESS_GRANTS_INSTANCES: string[] = [
		"s3:ListAccessGrantsInstances",
	];
	/** IAM actions required for the ListAccessGrantsLocations API call. */
	static readonly LIST_ACCESS_GRANTS_LOCATIONS: string[] = [
		"s3:ListAccessGrantsLocations",
	];
	/** IAM actions required for the ListAccessPoints API call. */
	static readonly LIST_ACCESS_POINTS: string[] = ["s3:ListAccessPoints"];
	/** IAM actions required for the ListAccessPointsForDirectoryBuckets API call. */
	static readonly LIST_ACCESS_POINTS_FOR_DIRECTORY_BUCKETS: string[] = [];
	/** IAM actions required for the ListAccessPointsForObjectLambda API call. */
	static readonly LIST_ACCESS_POINTS_FOR_OBJECT_LAMBDA: string[] = [
		"s3:ListAccessPointsForObjectLambda",
	];
	/** IAM actions required for the ListBucketAnalyticsConfigurations API call. */
	static readonly LIST_BUCKET_ANALYTICS_CONFIGURATIONS: string[] = [
		"s3:GetAnalyticsConfiguration",
	];
	/** IAM actions required for the ListBucketIntelligentTieringConfigurations API call. */
	static readonly LIST_BUCKET_INTELLIGENT_TIERING_CONFIGURATIONS: string[] = [
		"s3:GetIntelligentTieringConfiguration",
	];
	/** IAM actions required for the ListBucketInventoryConfigurations API call. */
	static readonly LIST_BUCKET_INVENTORY_CONFIGURATIONS: string[] = [
		"s3:GetInventoryConfiguration",
	];
	/** IAM actions required for the ListBucketMetricsConfigurations API call. */
	static readonly LIST_BUCKET_METRICS_CONFIGURATIONS: string[] = [
		"s3:GetMetricsConfiguration",
	];
	/** IAM actions required for the ListBuckets API call. */
	static readonly LIST_BUCKETS: string[] = ["s3:ListAllMyBuckets"];
	/** IAM actions required for the ListCallerAccessGrants API call. */
	static readonly LIST_CALLER_ACCESS_GRANTS: string[] = [
		"s3:ListCallerAccessGrants",
	];
	/** IAM actions required for the ListDirectoryBuckets API call. */
	static readonly LIST_DIRECTORY_BUCKETS: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["s3:ListJobs"];
	/** IAM actions required for the ListMultiRegionAccessPoints API call. */
	static readonly LIST_MULTI_REGION_ACCESS_POINTS: string[] = [
		"s3:ListMultiRegionAccessPoints",
	];
	/** IAM actions required for the ListMultipartUploads API call. */
	static readonly LIST_MULTIPART_UPLOADS: string[] = [
		"s3:ListBucketMultipartUploads",
		"s3-object-lambda:ListBucketMultipartUploads",
	];
	/** IAM actions required for the ListObjectAnnotations API call. */
	static readonly LIST_OBJECT_ANNOTATIONS: string[] = [];
	/** IAM actions required for the ListObjectVersions API call. */
	static readonly LIST_OBJECT_VERSIONS: string[] = ["s3:ListBucketVersions"];
	/** IAM actions required for the ListObjects API call. */
	static readonly LIST_OBJECTS: string[] = [
		"s3:GetObjectAcl",
		"s3:ListBucket",
		"s3-object-lambda:ListBucket",
	];
	/** IAM actions required for the ListObjectsV2 API call. */
	static readonly LIST_OBJECTS_V2: string[] = [
		"s3:GetObjectAcl",
		"s3:ListBucket",
		"s3-object-lambda:ListBucket",
	];
	/** IAM actions required for the ListParts API call. */
	static readonly LIST_PARTS: string[] = [
		"s3:ListMultipartUploadParts",
		"s3-object-lambda:ListMultipartUploadParts",
	];
	/** IAM actions required for the ListRegionalBuckets API call. */
	static readonly LIST_REGIONAL_BUCKETS: string[] = [];
	/** IAM actions required for the ListStorageLensConfigurations API call. */
	static readonly LIST_STORAGE_LENS_CONFIGURATIONS: string[] = [
		"s3:ListStorageLensConfigurations",
	];
	/** IAM actions required for the ListStorageLensGroups API call. */
	static readonly LIST_STORAGE_LENS_GROUPS: string[] = [
		"s3:ListStorageLensGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["s3:ListTagsForResource"];
	/** IAM actions required for the PutAccessGrantsInstanceResourcePolicy API call. */
	static readonly PUT_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY: string[] = [
		"s3:PutAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the PutAccessPointConfigurationForObjectLambda API call. */
	static readonly PUT_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA: string[] = [
		"s3:PutAccessPointConfigurationForObjectLambda",
	];
	/** IAM actions required for the PutAccessPointPolicy API call. */
	static readonly PUT_ACCESS_POINT_POLICY: string[] = [
		"s3:PutAccessPointPolicy",
	];
	/** IAM actions required for the PutAccessPointPolicyForObjectLambda API call. */
	static readonly PUT_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA: string[] = [
		"s3:PutAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the PutAccessPointScope API call. */
	static readonly PUT_ACCESS_POINT_SCOPE: string[] = [];
	/** IAM actions required for the PutBucketAbac API call. */
	static readonly PUT_BUCKET_ABAC: string[] = [];
	/** IAM actions required for the PutBucketAccelerateConfiguration API call. */
	static readonly PUT_BUCKET_ACCELERATE_CONFIGURATION: string[] = [
		"s3:PutAccelerateConfiguration",
	];
	/** IAM actions required for the PutBucketAcl API call. */
	static readonly PUT_BUCKET_ACL: string[] = ["s3:PutBucketAcl"];
	/** IAM actions required for the PutBucketAnalyticsConfiguration API call. */
	static readonly PUT_BUCKET_ANALYTICS_CONFIGURATION: string[] = [
		"s3:PutAnalyticsConfiguration",
	];
	/** IAM actions required for the PutBucketCors API call. */
	static readonly PUT_BUCKET_CORS: string[] = ["s3:PutBucketCORS"];
	/** IAM actions required for the PutBucketEncryption API call. */
	static readonly PUT_BUCKET_ENCRYPTION: string[] = [
		"s3:PutEncryptionConfiguration",
	];
	/** IAM actions required for the PutBucketIntelligentTieringConfiguration API call. */
	static readonly PUT_BUCKET_INTELLIGENT_TIERING_CONFIGURATION: string[] = [
		"s3:PutIntelligentTieringConfiguration",
	];
	/** IAM actions required for the PutBucketInventoryConfiguration API call. */
	static readonly PUT_BUCKET_INVENTORY_CONFIGURATION: string[] = [
		"s3:PutInventoryConfiguration",
	];
	/** IAM actions required for the PutBucketLifecycle API call. */
	static readonly PUT_BUCKET_LIFECYCLE: string[] = [
		"s3:PutLifecycleConfiguration",
	];
	/** IAM actions required for the PutBucketLifecycleConfiguration API call. */
	static readonly PUT_BUCKET_LIFECYCLE_CONFIGURATION: string[] = [
		"s3:PutLifecycleConfiguration",
		"s3express:PutLifecycleConfiguration",
	];
	/** IAM actions required for the PutBucketLogging API call. */
	static readonly PUT_BUCKET_LOGGING: string[] = ["s3:PutBucketLogging"];
	/** IAM actions required for the PutBucketMetricsConfiguration API call. */
	static readonly PUT_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3:PutMetricsConfiguration",
	];
	/** IAM actions required for the PutBucketNotification API call. */
	static readonly PUT_BUCKET_NOTIFICATION: string[] = [];
	/** IAM actions required for the PutBucketNotificationConfiguration API call. */
	static readonly PUT_BUCKET_NOTIFICATION_CONFIGURATION: string[] = [
		"s3:PutBucketNotification",
	];
	/** IAM actions required for the PutBucketOwnershipControls API call. */
	static readonly PUT_BUCKET_OWNERSHIP_CONTROLS: string[] = [
		"s3:PutBucketOwnershipControls",
	];
	/** IAM actions required for the PutBucketPolicy API call. */
	static readonly PUT_BUCKET_POLICY: string[] = ["s3:PutBucketPolicy"];
	/** IAM actions required for the PutBucketReplication API call. */
	static readonly PUT_BUCKET_REPLICATION: string[] = [
		"iam:PassRole",
		"s3:PutReplicationConfiguration",
	];
	/** IAM actions required for the PutBucketRequestPayment API call. */
	static readonly PUT_BUCKET_REQUEST_PAYMENT: string[] = [
		"s3:PutBucketRequestPayment",
	];
	/** IAM actions required for the PutBucketTagging API call. */
	static readonly PUT_BUCKET_TAGGING: string[] = ["s3:PutBucketTagging"];
	/** IAM actions required for the PutBucketVersioning API call. */
	static readonly PUT_BUCKET_VERSIONING: string[] = ["s3:PutBucketVersioning"];
	/** IAM actions required for the PutBucketWebsite API call. */
	static readonly PUT_BUCKET_WEBSITE: string[] = ["s3:PutBucketWebsite"];
	/** IAM actions required for the PutJobTagging API call. */
	static readonly PUT_JOB_TAGGING: string[] = ["s3:PutJobTagging"];
	/** IAM actions required for the PutMultiRegionAccessPointPolicy API call. */
	static readonly PUT_MULTI_REGION_ACCESS_POINT_POLICY: string[] = [
		"s3:PutMultiRegionAccessPointPolicy",
	];
	/** IAM actions required for the PutObject API call. */
	static readonly PUT_OBJECT: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
		"s3:PutObjectAcl",
		"s3:PutObjectLegalHold",
		"s3:PutObjectRetention",
		"s3:PutObjectTagging",
	];
	/** IAM actions required for the PutObjectAcl API call. */
	static readonly PUT_OBJECT_ACL: string[] = [
		"s3:PutObjectAcl",
		"s3-object-lambda:PutObjectAcl",
		"s3:PutObjectVersionAcl",
	];
	/** IAM actions required for the PutObjectAnnotation API call. */
	static readonly PUT_OBJECT_ANNOTATION: string[] = [];
	/** IAM actions required for the PutObjectLegalHold API call. */
	static readonly PUT_OBJECT_LEGAL_HOLD: string[] = [
		"s3:PutObjectLegalHold",
		"s3-object-lambda:PutObjectLegalHold",
	];
	/** IAM actions required for the PutObjectLockConfiguration API call. */
	static readonly PUT_OBJECT_LOCK_CONFIGURATION: string[] = [
		"s3:PutBucketObjectLockConfiguration",
	];
	/** IAM actions required for the PutObjectRetention API call. */
	static readonly PUT_OBJECT_RETENTION: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:PutObjectRetention",
		"s3-object-lambda:PutObjectRetention",
	];
	/** IAM actions required for the PutObjectTagging API call. */
	static readonly PUT_OBJECT_TAGGING: string[] = [
		"s3:PutObjectTagging",
		"s3-object-lambda:PutObjectTagging",
		"s3:PutObjectVersionTagging",
	];
	/** IAM actions required for the PutPublicAccessBlock API call. */
	static readonly PUT_PUBLIC_ACCESS_BLOCK: string[] = [
		"s3:PutBucketPublicAccessBlock",
	];
	/** IAM actions required for the PutStorageLensConfiguration API call. */
	static readonly PUT_STORAGE_LENS_CONFIGURATION: string[] = [
		"s3:PutStorageLensConfiguration",
	];
	/** IAM actions required for the PutStorageLensConfigurationTagging API call. */
	static readonly PUT_STORAGE_LENS_CONFIGURATION_TAGGING: string[] = [
		"s3:PutStorageLensConfigurationTagging",
	];
	/** IAM actions required for the RenameObject API call. */
	static readonly RENAME_OBJECT: string[] = [];
	/** IAM actions required for the RestoreObject API call. */
	static readonly RESTORE_OBJECT: string[] = [
		"s3:RestoreObject",
		"s3-object-lambda:RestoreObject",
	];
	/** IAM actions required for the SelectObjectContent API call. */
	static readonly SELECT_OBJECT_CONTENT: string[] = ["s3:GetObject"];
	/** IAM actions required for the SubmitMultiRegionAccessPointRoutes API call. */
	static readonly SUBMIT_MULTI_REGION_ACCESS_POINT_ROUTES: string[] = [
		"s3:SubmitMultiRegionAccessPointRoutes",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["s3:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["s3:UntagResource"];
	/** IAM actions required for the UpdateAccessGrantsLocation API call. */
	static readonly UPDATE_ACCESS_GRANTS_LOCATION: string[] = [
		"s3:UpdateAccessGrantsLocation",
	];
	/** IAM actions required for the UpdateBucketMetadataAnnotationTableConfiguration API call. */
	static readonly UPDATE_BUCKET_METADATA_ANNOTATION_TABLE_CONFIGURATION: string[] =
		[];
	/** IAM actions required for the UpdateBucketMetadataInventoryTableConfiguration API call. */
	static readonly UPDATE_BUCKET_METADATA_INVENTORY_TABLE_CONFIGURATION: string[] =
		[
			"s3tables:CreateNamespace",
			"s3tables:CreateTable",
			"s3tables:CreateTableBucket",
			"s3tables:GetTable",
			"s3tables:PutTableEncryption",
			"s3tables:PutTablePolicy",
			"s3:UpdateBucketMetadataInventoryTableConfiguration",
		];
	/** IAM actions required for the UpdateBucketMetadataJournalTableConfiguration API call. */
	static readonly UPDATE_BUCKET_METADATA_JOURNAL_TABLE_CONFIGURATION: string[] =
		["s3:UpdateBucketMetadataJournalTableConfiguration"];
	/** IAM actions required for the UpdateJobPriority API call. */
	static readonly UPDATE_JOB_PRIORITY: string[] = ["s3:UpdateJobPriority"];
	/** IAM actions required for the UpdateJobStatus API call. */
	static readonly UPDATE_JOB_STATUS: string[] = ["s3:UpdateJobStatus"];
	/** IAM actions required for the UpdateObjectEncryption API call. */
	static readonly UPDATE_OBJECT_ENCRYPTION: string[] = [];
	/** IAM actions required for the UpdateStorageLensGroup API call. */
	static readonly UPDATE_STORAGE_LENS_GROUP: string[] = [
		"s3:UpdateStorageLensGroup",
	];
	/** IAM actions required for the UploadPart API call. */
	static readonly UPLOAD_PART: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
	];
	/** IAM actions required for the UploadPartCopy API call. */
	static readonly UPLOAD_PART_COPY: string[] = [
		"s3:GetObject",
		"s3:GetObjectVersion",
		"s3:PutObject",
	];
	/** IAM actions required for the WriteGetObjectResponse API call. */
	static readonly WRITE_GET_OBJECT_RESPONSE: string[] = [];
}

/**
 * Condition key constants and builders for s3.
 */
export class S3Conditions {
	/** Condition keys applicable to the AbortMultipartUpload action. */
	static readonly ABORT_MULTIPART_UPLOAD_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the AllowVendedLogDeliveryForResource action. */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE_CONDITION_KEYS: string[] =
		["s3:deliverySourceArn", "s3:logType", "s3:resourceArnBeingAuthorized"];
	/** Condition keys applicable to the AssociateAccessGrantsIdentityCenter action. */
	static readonly ASSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the BypassGovernanceRetention action. */
	static readonly BYPASS_GOVERNANCE_RETENTION_CONDITION_KEYS: string[] = [
		"s3:RequestObjectTag/<key>",
		"s3:RequestObjectTagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
		"s3:x-amz-copy-source",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
		"s3:x-amz-metadata-directive",
		"s3:x-amz-server-side-encryption",
		"s3:x-amz-server-side-encryption-aws-kms-key-id",
		"s3:x-amz-server-side-encryption-customer-algorithm",
		"s3:x-amz-storage-class",
		"s3:x-amz-website-redirect-location",
	];
	/** Condition keys applicable to the CreateAccessGrant action. */
	static readonly CREATE_ACCESS_GRANT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3:AccessGrantScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateAccessGrantsInstance action. */
	static readonly CREATE_ACCESS_GRANTS_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateAccessGrantsLocation action. */
	static readonly CREATE_ACCESS_GRANTS_LOCATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3:AccessGrantsLocationScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CREATE_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:locationconstraint",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateAccessPointForObjectLambda action. */
	static readonly CREATE_ACCESS_POINT_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CREATE_BUCKET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:locationconstraint",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-bucket-namespace",
		"s3:x-amz-content-sha256",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
		"s3:x-amz-object-ownership",
	];
	/** Condition keys applicable to the CreateBucketMetadataTableConfiguration action. */
	static readonly CREATE_BUCKET_METADATA_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:RequestJobOperation",
		"s3:RequestJobPriority",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the CreateMultiRegionAccessPoint action. */
	static readonly CREATE_MULTI_REGION_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"s3:AccessPointNetworkOrigin",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the CreateStorageLensGroup action. */
	static readonly CREATE_STORAGE_LENS_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessGrant action. */
	static readonly DELETE_ACCESS_GRANT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessGrantsInstance action. */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessGrantsInstanceResourcePolicy action. */
	static readonly DELETE_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteAccessGrantsLocation action. */
	static readonly DELETE_ACCESS_GRANTS_LOCATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantsLocationScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPoint action. */
	static readonly DELETE_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPointForObjectLambda action. */
	static readonly DELETE_ACCESS_POINT_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteAccessPointPolicy action. */
	static readonly DELETE_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessPointPolicyForObjectLambda action. */
	static readonly DELETE_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteBucket action. */
	static readonly DELETE_BUCKET_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketMetadataTableConfiguration action. */
	static readonly DELETE_BUCKET_METADATA_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteBucketPolicy action. */
	static readonly DELETE_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketWebsite action. */
	static readonly DELETE_BUCKET_WEBSITE_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteJobTagging action. */
	static readonly DELETE_JOB_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingJobOperation",
		"s3:ExistingJobPriority",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteMultiRegionAccessPoint action. */
	static readonly DELETE_MULTI_REGION_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"s3:AccessPointNetworkOrigin",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the DeleteObject action. */
	static readonly DELETE_OBJECT_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:if-match",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectAnnotation action. */
	static readonly DELETE_OBJECT_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
		"s3:x-amz-object-if-match",
	];
	/** Condition keys applicable to the DeleteObjectTagging action. */
	static readonly DELETE_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DELETE_OBJECT_VERSION_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectVersionAnnotation action. */
	static readonly DELETE_OBJECT_VERSION_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
		"s3:x-amz-object-if-match",
	];
	/** Condition keys applicable to the DeleteObjectVersionTagging action. */
	static readonly DELETE_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteStorageLensConfiguration action. */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteStorageLensConfigurationTagging action. */
	static readonly DELETE_STORAGE_LENS_CONFIGURATION_TAGGING_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteStorageLensGroup action. */
	static readonly DELETE_STORAGE_LENS_GROUP_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DescribeJob action. */
	static readonly DESCRIBE_JOB_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DescribeMultiRegionAccessPointOperation action. */
	static readonly DESCRIBE_MULTI_REGION_ACCESS_POINT_OPERATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the DissociateAccessGrantsIdentityCenter action. */
	static readonly DISSOCIATE_ACCESS_GRANTS_IDENTITY_CENTER_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccelerateConfiguration action. */
	static readonly GET_ACCELERATE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessGrant action. */
	static readonly GET_ACCESS_GRANT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessGrantsInstance action. */
	static readonly GET_ACCESS_GRANTS_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessGrantsInstanceForPrefix action. */
	static readonly GET_ACCESS_GRANTS_INSTANCE_FOR_PREFIX_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccessGrantsInstanceResourcePolicy action. */
	static readonly GET_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccessGrantsLocation action. */
	static readonly GET_ACCESS_GRANTS_LOCATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantsLocationScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPoint action. */
	static readonly GET_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointConfigurationForObjectLambda action. */
	static readonly GET_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccessPointForObjectLambda action. */
	static readonly GET_ACCESS_POINT_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccessPointPolicy action. */
	static readonly GET_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointPolicyForObjectLambda action. */
	static readonly GET_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccessPointPolicyStatus action. */
	static readonly GET_ACCESS_POINT_POLICY_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessPointPolicyStatusForObjectLambda action. */
	static readonly GET_ACCESS_POINT_POLICY_STATUS_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetAccountPublicAccessBlock action. */
	static readonly GET_ACCOUNT_PUBLIC_ACCESS_BLOCK_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAnalyticsConfiguration action. */
	static readonly GET_ANALYTICS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketAbac action. */
	static readonly GET_BUCKET_ABAC_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketAcl action. */
	static readonly GET_BUCKET_ACL_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketCORS action. */
	static readonly GET_BUCKET_CORS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketLocation action. */
	static readonly GET_BUCKET_LOCATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketLogging action. */
	static readonly GET_BUCKET_LOGGING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketMetadataTableConfiguration action. */
	static readonly GET_BUCKET_METADATA_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetBucketNotification action. */
	static readonly GET_BUCKET_NOTIFICATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketObjectLockConfiguration action. */
	static readonly GET_BUCKET_OBJECT_LOCK_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the GetBucketOwnershipControls action. */
	static readonly GET_BUCKET_OWNERSHIP_CONTROLS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicy action. */
	static readonly GET_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicyStatus action. */
	static readonly GET_BUCKET_POLICY_STATUS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPublicAccessBlock action. */
	static readonly GET_BUCKET_PUBLIC_ACCESS_BLOCK_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketRequestPayment action. */
	static readonly GET_BUCKET_REQUEST_PAYMENT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketTagging action. */
	static readonly GET_BUCKET_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketVersioning action. */
	static readonly GET_BUCKET_VERSIONING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketWebsite action. */
	static readonly GET_BUCKET_WEBSITE_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetDataAccess action. */
	static readonly GET_DATA_ACCESS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetEncryptionConfiguration action. */
	static readonly GET_ENCRYPTION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetIntelligentTieringConfiguration action. */
	static readonly GET_INTELLIGENT_TIERING_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetInventoryConfiguration action. */
	static readonly GET_INVENTORY_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetJobTagging action. */
	static readonly GET_JOB_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetLifecycleConfiguration action. */
	static readonly GET_LIFECYCLE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetMetricsConfiguration action. */
	static readonly GET_METRICS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetMultiRegionAccessPoint action. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"s3:AccessPointNetworkOrigin",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the GetMultiRegionAccessPointPolicy action. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the GetMultiRegionAccessPointPolicyStatus action. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_POLICY_STATUS_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the GetMultiRegionAccessPointRoutes action. */
	static readonly GET_MULTI_REGION_ACCESS_POINT_ROUTES_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the GetObject action. */
	static readonly GET_OBJECT_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectAcl action. */
	static readonly GET_OBJECT_ACL_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectAnnotation action. */
	static readonly GET_OBJECT_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectAttributes action. */
	static readonly GET_OBJECT_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectLegalHold action. */
	static readonly GET_OBJECT_LEGAL_HOLD_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectRetention action. */
	static readonly GET_OBJECT_RETENTION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly GET_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectTorrent action. */
	static readonly GET_OBJECT_TORRENT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly GET_OBJECT_VERSION_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionAcl action. */
	static readonly GET_OBJECT_VERSION_ACL_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionAnnotation action. */
	static readonly GET_OBJECT_VERSION_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionAnnotationForReplication action. */
	static readonly GET_OBJECT_VERSION_ANNOTATION_FOR_REPLICATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetObjectVersionAttributes action. */
	static readonly GET_OBJECT_VERSION_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionForReplication action. */
	static readonly GET_OBJECT_VERSION_FOR_REPLICATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly GET_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersionTorrent action. */
	static readonly GET_OBJECT_VERSION_TORRENT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetReplicationConfiguration action. */
	static readonly GET_REPLICATION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensConfiguration action. */
	static readonly GET_STORAGE_LENS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensConfigurationTagging action. */
	static readonly GET_STORAGE_LENS_CONFIGURATION_TAGGING_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetStorageLensDashboard action. */
	static readonly GET_STORAGE_LENS_DASHBOARD_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensGroup action. */
	static readonly GET_STORAGE_LENS_GROUP_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the InitiateReplication action. */
	static readonly INITIATE_REPLICATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
	];
	/** Condition keys applicable to the ListAccessGrants action. */
	static readonly LIST_ACCESS_GRANTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessGrantsInstances action. */
	static readonly LIST_ACCESS_GRANTS_INSTANCES_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessGrantsLocations action. */
	static readonly LIST_ACCESS_GRANTS_LOCATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPoints action. */
	static readonly LIST_ACCESS_POINTS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPointsForObjectLambda action. */
	static readonly LIST_ACCESS_POINTS_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the ListAllMyBuckets action. */
	static readonly LIST_ALL_MY_BUCKETS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucket action. */
	static readonly LIST_BUCKET_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:delimiter",
		"s3:max-keys",
		"s3:prefix",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucketMultipartUploads action. */
	static readonly LIST_BUCKET_MULTIPART_UPLOADS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantsInstanceArn",
		"s3:AccessPointNetworkOrigin",
		"s3:AccessPointTag/${TagKey}",
		"s3:DataAccessPointAccount",
		"s3:DataAccessPointArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucketVersions action. */
	static readonly LIST_BUCKET_VERSIONS_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:delimiter",
		"s3:max-keys",
		"s3:prefix",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListCallerAccessGrants action. */
	static readonly LIST_CALLER_ACCESS_GRANTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListJobs action. */
	static readonly LIST_JOBS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListMultiRegionAccessPoints action. */
	static readonly LIST_MULTI_REGION_ACCESS_POINTS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly LIST_MULTIPART_UPLOAD_PARTS_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListObjectAnnotations action. */
	static readonly LIST_OBJECT_ANNOTATIONS_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:annotation-prefix",
		"s3:authType",
		"s3:max-annotation-results",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListObjectVersionAnnotations action. */
	static readonly LIST_OBJECT_VERSION_ANNOTATIONS_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:annotation-prefix",
		"s3:authType",
		"s3:max-annotation-results",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListStorageLensConfigurations action. */
	static readonly LIST_STORAGE_LENS_CONFIGURATIONS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListStorageLensGroups action. */
	static readonly LIST_STORAGE_LENS_GROUPS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ObjectOwnerOverrideToBucketOwner action. */
	static readonly OBJECT_OWNER_OVERRIDE_TO_BUCKET_OWNER_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the PauseReplication action. */
	static readonly PAUSE_REPLICATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:destinationRegion",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccelerateConfiguration action. */
	static readonly PUT_ACCELERATE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessGrantsInstanceResourcePolicy action. */
	static readonly PUT_ACCESS_GRANTS_INSTANCE_RESOURCE_POLICY_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the PutAccessPointConfigurationForObjectLambda action. */
	static readonly PUT_ACCESS_POINT_CONFIGURATION_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the PutAccessPointPolicy action. */
	static readonly PUT_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessPointPolicyForObjectLambda action. */
	static readonly PUT_ACCESS_POINT_POLICY_FOR_OBJECT_LAMBDA_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the PutAccountPublicAccessBlock action. */
	static readonly PUT_ACCOUNT_PUBLIC_ACCESS_BLOCK_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAnalyticsConfiguration action. */
	static readonly PUT_ANALYTICS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketAbac action. */
	static readonly PUT_BUCKET_ABAC_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketAcl action. */
	static readonly PUT_BUCKET_ACL_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
	];
	/** Condition keys applicable to the PutBucketCORS action. */
	static readonly PUT_BUCKET_CORS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketLogging action. */
	static readonly PUT_BUCKET_LOGGING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketNotification action. */
	static readonly PUT_BUCKET_NOTIFICATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketObjectLockConfiguration action. */
	static readonly PUT_BUCKET_OBJECT_LOCK_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the PutBucketOwnershipControls action. */
	static readonly PUT_BUCKET_OWNERSHIP_CONTROLS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPolicy action. */
	static readonly PUT_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPublicAccessBlock action. */
	static readonly PUT_BUCKET_PUBLIC_ACCESS_BLOCK_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketRequestPayment action. */
	static readonly PUT_BUCKET_REQUEST_PAYMENT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketTagging action. */
	static readonly PUT_BUCKET_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketVersioning action. */
	static readonly PUT_BUCKET_VERSIONING_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketWebsite action. */
	static readonly PUT_BUCKET_WEBSITE_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutEncryptionConfiguration action. */
	static readonly PUT_ENCRYPTION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutIntelligentTieringConfiguration action. */
	static readonly PUT_INTELLIGENT_TIERING_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the PutInventoryConfiguration action. */
	static readonly PUT_INVENTORY_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:InventoryAccessibleOptionalFields",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutJobTagging action. */
	static readonly PUT_JOB_TAGGING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:ExistingJobOperation",
		"s3:ExistingJobPriority",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutLifecycleConfiguration action. */
	static readonly PUT_LIFECYCLE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutMetricsConfiguration action. */
	static readonly PUT_METRICS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutMultiRegionAccessPointPolicy action. */
	static readonly PUT_MULTI_REGION_ACCESS_POINT_POLICY_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the PutObject action. */
	static readonly PUT_OBJECT_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ObjectCreationOperation",
		"s3:RequestObjectTag/<key>",
		"s3:RequestObjectTagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:if-match",
		"s3:if-none-match",
		"s3:object-lock-legal-hold",
		"s3:object-lock-mode",
		"s3:object-lock-remaining-retention-days",
		"s3:object-lock-retain-until-date",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
		"s3:x-amz-copy-source",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
		"s3:x-amz-metadata-directive",
		"s3:x-amz-object-annotation-directive",
		"s3:x-amz-server-side-encryption",
		"s3:x-amz-server-side-encryption-aws-kms-key-id",
		"s3:x-amz-server-side-encryption-customer-algorithm",
		"s3:x-amz-storage-class",
		"s3:x-amz-website-redirect-location",
	];
	/** Condition keys applicable to the PutObjectAcl action. */
	static readonly PUT_OBJECT_ACL_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
		"s3:x-amz-storage-class",
	];
	/** Condition keys applicable to the PutObjectAnnotation action. */
	static readonly PUT_OBJECT_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
		"s3:x-amz-object-if-match",
	];
	/** Condition keys applicable to the PutObjectLegalHold action. */
	static readonly PUT_OBJECT_LEGAL_HOLD_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:object-lock-legal-hold",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObjectRetention action. */
	static readonly PUT_OBJECT_RETENTION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:object-lock-mode",
		"s3:object-lock-remaining-retention-days",
		"s3:object-lock-retain-until-date",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObjectTagging action. */
	static readonly PUT_OBJECT_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:RequestObjectTag/<key>",
		"s3:RequestObjectTagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObjectVersionAcl action. */
	static readonly PUT_OBJECT_VERSION_ACL_CONDITION_KEYS: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-acl",
		"s3:x-amz-content-sha256",
		"s3:x-amz-grant-full-control",
		"s3:x-amz-grant-read",
		"s3:x-amz-grant-read-acp",
		"s3:x-amz-grant-write",
		"s3:x-amz-grant-write-acp",
		"s3:x-amz-storage-class",
	];
	/** Condition keys applicable to the PutObjectVersionAnnotation action. */
	static readonly PUT_OBJECT_VERSION_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
		"s3:x-amz-object-if-match",
	];
	/** Condition keys applicable to the PutObjectVersionTagging action. */
	static readonly PUT_OBJECT_VERSION_TAGGING_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:RequestObjectTag/<key>",
		"s3:RequestObjectTagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutReplicationConfiguration action. */
	static readonly PUT_REPLICATION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:isReplicationPauseRequest",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutStorageLensConfiguration action. */
	static readonly PUT_STORAGE_LENS_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutStorageLensConfigurationTagging action. */
	static readonly PUT_STORAGE_LENS_CONFIGURATION_TAGGING_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the ReplicateDelete action. */
	static readonly REPLICATE_DELETE_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateObject action. */
	static readonly REPLICATE_OBJECT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
		"s3:x-amz-server-side-encryption",
		"s3:x-amz-server-side-encryption-aws-kms-key-id",
		"s3:x-amz-server-side-encryption-customer-algorithm",
	];
	/** Condition keys applicable to the ReplicateObjectAnnotation action. */
	static readonly REPLICATE_OBJECT_ANNOTATION_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateTags action. */
	static readonly REPLICATE_TAGS_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the RestoreObject action. */
	static readonly RESTORE_OBJECT_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the SubmitMultiRegionAccessPointRoutes action. */
	static readonly SUBMIT_MULTI_REGION_ACCESS_POINT_ROUTES_CONDITION_KEYS: string[] =
		[
			"s3:AccessPointNetworkOrigin",
			"s3:DataAccessPointAccount",
			"s3:DataAccessPointArn",
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UpdateAccessGrantsLocation action. */
	static readonly UPDATE_ACCESS_GRANTS_LOCATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:AccessGrantsLocationScope",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UpdateBucketMetadataAnnotationTableConfiguration action. */
	static readonly UPDATE_BUCKET_METADATA_ANNOTATION_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateBucketMetadataInventoryTableConfiguration action. */
	static readonly UPDATE_BUCKET_METADATA_INVENTORY_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateBucketMetadataJournalTableConfiguration action. */
	static readonly UPDATE_BUCKET_METADATA_JOURNAL_TABLE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateJobPriority action. */
	static readonly UPDATE_JOB_PRIORITY_CONDITION_KEYS: string[] = [
		"s3:ExistingJobOperation",
		"s3:ExistingJobPriority",
		"s3:RequestJobPriority",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UpdateJobStatus action. */
	static readonly UPDATE_JOB_STATUS_CONDITION_KEYS: string[] = [
		"s3:ExistingJobOperation",
		"s3:ExistingJobPriority",
		"s3:JobSuspendedCause",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UpdateObjectEncryption action. */
	static readonly UPDATE_OBJECT_ENCRYPTION_CONDITION_KEYS: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
		"s3:x-amz-server-side-encryption",
		"s3:x-amz-server-side-encryption-aws-kms-key-id",
	];
	/** Condition keys applicable to the UpdateStorageLensGroup action. */
	static readonly UPDATE_STORAGE_LENS_GROUP_CONDITION_KEYS: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: s3:AccessGrantScope (String) */
	static readonly ACCESS_GRANT_SCOPE = "s3:AccessGrantScope";
	/** Condition key: s3:AccessGrantsInstanceArn (ARN) */
	static readonly ACCESS_GRANTS_INSTANCE_ARN = "s3:AccessGrantsInstanceArn";
	/** Condition key: s3:AccessGrantsLocationScope (String) */
	static readonly ACCESS_GRANTS_LOCATION_SCOPE = "s3:AccessGrantsLocationScope";
	/** Condition key: s3:AccessPointNetworkOrigin (String) */
	static readonly ACCESS_POINT_NETWORK_ORIGIN = "s3:AccessPointNetworkOrigin";
	/** Condition key: s3:AccessPointTag/${TagKey} (String) */
	static readonly ACCESS_POINT_TAG = "s3:AccessPointTag/${TagKey}";
	/** Condition key: s3:BucketTag/${TagKey} (String) */
	static readonly BUCKET_TAG = "s3:BucketTag/${TagKey}";
	/** Condition key: s3:DataAccessPointAccount (String) */
	static readonly DATA_ACCESS_POINT_ACCOUNT = "s3:DataAccessPointAccount";
	/** Condition key: s3:DataAccessPointArn (ARN) */
	static readonly DATA_ACCESS_POINT_ARN = "s3:DataAccessPointArn";
	/** Condition key: s3:ExistingJobOperation (String) */
	static readonly EXISTING_JOB_OPERATION = "s3:ExistingJobOperation";
	/** Condition key: s3:ExistingJobPriority (Numeric) */
	static readonly EXISTING_JOB_PRIORITY = "s3:ExistingJobPriority";
	/** Condition key: s3:ExistingObjectTag/<key> (String) */
	static readonly EXISTING_OBJECT_TAG = "s3:ExistingObjectTag/<key>";
	/** Condition key: s3:InventoryAccessibleOptionalFields (ArrayOfString) */
	static readonly INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS =
		"s3:InventoryAccessibleOptionalFields";
	/** Condition key: s3:JobSuspendedCause (String) */
	static readonly JOB_SUSPENDED_CAUSE = "s3:JobSuspendedCause";
	/** Condition key: s3:ObjectCreationOperation (Bool) */
	static readonly OBJECT_CREATION_OPERATION = "s3:ObjectCreationOperation";
	/** Condition key: s3:RequestJobOperation (String) */
	static readonly REQUEST_JOB_OPERATION = "s3:RequestJobOperation";
	/** Condition key: s3:RequestJobPriority (Numeric) */
	static readonly REQUEST_JOB_PRIORITY = "s3:RequestJobPriority";
	/** Condition key: s3:RequestObjectTag/<key> (String) */
	static readonly REQUEST_OBJECT_TAG = "s3:RequestObjectTag/<key>";
	/** Condition key: s3:RequestObjectTagKeys (ArrayOfString) */
	static readonly REQUEST_OBJECT_TAG_KEYS = "s3:RequestObjectTagKeys";
	/** Condition key: s3:ResourceAccount (String) */
	static readonly RESOURCE_ACCOUNT = "s3:ResourceAccount";
	/** Condition key: s3:TlsVersion (Numeric) */
	static readonly TLS_VERSION = "s3:TlsVersion";
	/** Condition key: s3:annotation-prefix (String) */
	static readonly ANNOTATION_PREFIX = "s3:annotation-prefix";
	/** Condition key: s3:authType (String) */
	static readonly AUTH_TYPE = "s3:authType";
	/** Condition key: s3:delimiter (String) */
	static readonly DELIMITER = "s3:delimiter";
	/** Condition key: s3:deliverySourceArn (ARN) */
	static readonly DELIVERY_SOURCE_ARN = "s3:deliverySourceArn";
	/** Condition key: s3:destinationRegion (String) */
	static readonly DESTINATION_REGION = "s3:destinationRegion";
	/** Condition key: s3:if-match (String) */
	static readonly IF_MATCH = "s3:if-match";
	/** Condition key: s3:if-none-match (String) */
	static readonly IF_NONE_MATCH = "s3:if-none-match";
	/** Condition key: s3:isReplicationPauseRequest (Bool) */
	static readonly IS_REPLICATION_PAUSE_REQUEST = "s3:isReplicationPauseRequest";
	/** Condition key: s3:locationconstraint (String) */
	static readonly LOCATIONCONSTRAINT = "s3:locationconstraint";
	/** Condition key: s3:logType (String) */
	static readonly LOG_TYPE = "s3:logType";
	/** Condition key: s3:max-annotation-results (Numeric) */
	static readonly MAX_ANNOTATION_RESULTS = "s3:max-annotation-results";
	/** Condition key: s3:max-keys (Numeric) */
	static readonly MAX_KEYS = "s3:max-keys";
	/** Condition key: s3:object-lock-legal-hold (String) */
	static readonly OBJECT_LOCK_LEGAL_HOLD = "s3:object-lock-legal-hold";
	/** Condition key: s3:object-lock-mode (String) */
	static readonly OBJECT_LOCK_MODE = "s3:object-lock-mode";
	/** Condition key: s3:object-lock-remaining-retention-days (Numeric) */
	static readonly OBJECT_LOCK_REMAINING_RETENTION_DAYS =
		"s3:object-lock-remaining-retention-days";
	/** Condition key: s3:object-lock-retain-until-date (Date) */
	static readonly OBJECT_LOCK_RETAIN_UNTIL_DATE =
		"s3:object-lock-retain-until-date";
	/** Condition key: s3:prefix (String) */
	static readonly PREFIX = "s3:prefix";
	/** Condition key: s3:resourceArnBeingAuthorized (ARN) */
	static readonly RESOURCE_ARN_BEING_AUTHORIZED =
		"s3:resourceArnBeingAuthorized";
	/** Condition key: s3:signatureAge (Numeric) */
	static readonly SIGNATURE_AGE = "s3:signatureAge";
	/** Condition key: s3:signatureversion (String) */
	static readonly SIGNATUREVERSION = "s3:signatureversion";
	/** Condition key: s3:versionid (String) */
	static readonly VERSIONID = "s3:versionid";
	/** Condition key: s3:x-amz-acl (String) */
	static readonly X_AMZ_ACL = "s3:x-amz-acl";
	/** Condition key: s3:x-amz-bucket-namespace (String) */
	static readonly X_AMZ_BUCKET_NAMESPACE = "s3:x-amz-bucket-namespace";
	/** Condition key: s3:x-amz-content-sha256 (String) */
	static readonly X_AMZ_CONTENT_SHA256 = "s3:x-amz-content-sha256";
	/** Condition key: s3:x-amz-copy-source (String) */
	static readonly X_AMZ_COPY_SOURCE = "s3:x-amz-copy-source";
	/** Condition key: s3:x-amz-grant-full-control (String) */
	static readonly X_AMZ_GRANT_FULL_CONTROL = "s3:x-amz-grant-full-control";
	/** Condition key: s3:x-amz-grant-read (String) */
	static readonly X_AMZ_GRANT_READ = "s3:x-amz-grant-read";
	/** Condition key: s3:x-amz-grant-read-acp (String) */
	static readonly X_AMZ_GRANT_READ_ACP = "s3:x-amz-grant-read-acp";
	/** Condition key: s3:x-amz-grant-write (String) */
	static readonly X_AMZ_GRANT_WRITE = "s3:x-amz-grant-write";
	/** Condition key: s3:x-amz-grant-write-acp (String) */
	static readonly X_AMZ_GRANT_WRITE_ACP = "s3:x-amz-grant-write-acp";
	/** Condition key: s3:x-amz-metadata-directive (String) */
	static readonly X_AMZ_METADATA_DIRECTIVE = "s3:x-amz-metadata-directive";
	/** Condition key: s3:x-amz-object-annotation-directive (String) */
	static readonly X_AMZ_OBJECT_ANNOTATION_DIRECTIVE =
		"s3:x-amz-object-annotation-directive";
	/** Condition key: s3:x-amz-object-if-match (String) */
	static readonly X_AMZ_OBJECT_IF_MATCH = "s3:x-amz-object-if-match";
	/** Condition key: s3:x-amz-object-ownership (String) */
	static readonly X_AMZ_OBJECT_OWNERSHIP = "s3:x-amz-object-ownership";
	/** Condition key: s3:x-amz-server-side-encryption (String) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION =
		"s3:x-amz-server-side-encryption";
	/** Condition key: s3:x-amz-server-side-encryption-aws-kms-key-id (ARN) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID =
		"s3:x-amz-server-side-encryption-aws-kms-key-id";
	/** Condition key: s3:x-amz-server-side-encryption-customer-algorithm (String) */
	static readonly X_AMZ_SERVER_SIDE_ENCRYPTION_CUSTOMER_ALGORITHM =
		"s3:x-amz-server-side-encryption-customer-algorithm";
	/** Condition key: s3:x-amz-storage-class (String) */
	static readonly X_AMZ_STORAGE_CLASS = "s3:x-amz-storage-class";
	/** Condition key: s3:x-amz-website-redirect-location (String) */
	static readonly X_AMZ_WEBSITE_REDIRECT_LOCATION =
		"s3:x-amz-website-redirect-location";

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
	 * Generates a condition block for `s3:AccessGrantScope`.
	 */
	static accessGrantScope(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:AccessGrantScope": value } };
	}

	/**
	 * Generates a condition block for `s3:AccessGrantsInstanceArn`.
	 */
	static accessGrantsInstanceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3:AccessGrantsInstanceArn": value } };
	}

	/**
	 * Generates a condition block for `s3:AccessGrantsLocationScope`.
	 */
	static accessGrantsLocationScope(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:AccessGrantsLocationScope": value } };
	}

	/**
	 * Generates a condition block for `s3:AccessPointNetworkOrigin`.
	 */
	static accessPointNetworkOrigin(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:AccessPointNetworkOrigin": value } };
	}

	/**
	 * Generates a condition block for `s3:AccessPointTag/${TagKey}`.
	 */
	static accessPointTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:AccessPointTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3:BucketTag/${TagKey}`.
	 */
	static bucketTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:BucketTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3:DataAccessPointAccount`.
	 */
	static dataAccessPointAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:DataAccessPointAccount": value } };
	}

	/**
	 * Generates a condition block for `s3:DataAccessPointArn`.
	 */
	static dataAccessPointARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3:DataAccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `s3:ExistingJobOperation`.
	 */
	static existingJobOperation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:ExistingJobOperation": value } };
	}

	/**
	 * Generates a condition block for `s3:ExistingJobPriority`.
	 */
	static existingJobPriority(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:ExistingJobPriority": value } };
	}

	/**
	 * Generates a condition block for `s3:ExistingObjectTag/<key>`.
	 */
	static existingObjectTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:ExistingObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3:InventoryAccessibleOptionalFields`.
	 */
	static inventoryAccessibleOptionalFields(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"s3:InventoryAccessibleOptionalFields": values,
			},
		};
	}

	/**
	 * Generates a condition block for `s3:JobSuspendedCause`.
	 */
	static jobSuspendedCause(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:JobSuspendedCause": value } };
	}

	/**
	 * Generates a condition block for `s3:ObjectCreationOperation`.
	 */
	static objectCreationOperation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "s3:ObjectCreationOperation": value } };
	}

	/**
	 * Generates a condition block for `s3:RequestJobOperation`.
	 */
	static requestJobOperation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:RequestJobOperation": value } };
	}

	/**
	 * Generates a condition block for `s3:RequestJobPriority`.
	 */
	static requestJobPriority(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:RequestJobPriority": value } };
	}

	/**
	 * Generates a condition block for `s3:RequestObjectTag/<key>`.
	 */
	static requestObjectTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:RequestObjectTag/<key>": value } };
	}

	/**
	 * Generates a condition block for `s3:RequestObjectTagKeys`.
	 */
	static requestObjectTagKeys(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "s3:RequestObjectTagKeys": values },
		};
	}

	/**
	 * Generates a condition block for `s3:ResourceAccount`.
	 */
	static resourceAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:ResourceAccount": value } };
	}

	/**
	 * Generates a condition block for `s3:TlsVersion`.
	 */
	static tlsVersion(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:TlsVersion": value } };
	}

	/**
	 * Generates a condition block for `s3:annotation-prefix`.
	 */
	static annotationPrefix(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:annotation-prefix": value } };
	}

	/**
	 * Generates a condition block for `s3:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:authType": value } };
	}

	/**
	 * Generates a condition block for `s3:delimiter`.
	 */
	static delimiter(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:delimiter": value } };
	}

	/**
	 * Generates a condition block for `s3:deliverySourceArn`.
	 */
	static deliverySourceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3:deliverySourceArn": value } };
	}

	/**
	 * Generates a condition block for `s3:destinationRegion`.
	 */
	static destinationRegion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:destinationRegion": value } };
	}

	/**
	 * Generates a condition block for `s3:if-match`.
	 */
	static ifMatch(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:if-match": value } };
	}

	/**
	 * Generates a condition block for `s3:if-none-match`.
	 */
	static ifNoneMatch(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:if-none-match": value } };
	}

	/**
	 * Generates a condition block for `s3:isReplicationPauseRequest`.
	 */
	static isReplicationPauseRequest(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "s3:isReplicationPauseRequest": value } };
	}

	/**
	 * Generates a condition block for `s3:locationconstraint`.
	 */
	static locationconstraint(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:locationconstraint": value } };
	}

	/**
	 * Generates a condition block for `s3:logType`.
	 */
	static logType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:logType": value } };
	}

	/**
	 * Generates a condition block for `s3:max-annotation-results`.
	 */
	static maxAnnotationResults(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:max-annotation-results": value } };
	}

	/**
	 * Generates a condition block for `s3:max-keys`.
	 */
	static maxKeys(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:max-keys": value } };
	}

	/**
	 * Generates a condition block for `s3:object-lock-legal-hold`.
	 */
	static objectLockLegalHold(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:object-lock-legal-hold": value } };
	}

	/**
	 * Generates a condition block for `s3:object-lock-mode`.
	 */
	static objectLockMode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:object-lock-mode": value } };
	}

	/**
	 * Generates a condition block for `s3:object-lock-remaining-retention-days`.
	 */
	static objectLockRemainingRetentionDays(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "s3:object-lock-remaining-retention-days": value },
		};
	}

	/**
	 * Generates a condition block for `s3:object-lock-retain-until-date`.
	 */
	static objectLockRetainUntilDate(
		value: string,
	): Record<string, Record<string, string>> {
		return { DateEquals: { "s3:object-lock-retain-until-date": value } };
	}

	/**
	 * Generates a condition block for `s3:prefix`.
	 */
	static prefix(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:prefix": value } };
	}

	/**
	 * Generates a condition block for `s3:resourceArnBeingAuthorized`.
	 */
	static resourceARNBeingAuthorized(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3:resourceArnBeingAuthorized": value } };
	}

	/**
	 * Generates a condition block for `s3:signatureAge`.
	 */
	static signatureAge(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "s3:signatureAge": value } };
	}

	/**
	 * Generates a condition block for `s3:signatureversion`.
	 */
	static signatureversion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:signatureversion": value } };
	}

	/**
	 * Generates a condition block for `s3:versionid`.
	 */
	static versionid(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:versionid": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-acl`.
	 */
	static xAmzAcl(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-acl": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-bucket-namespace`.
	 */
	static xAmzBucketNamespace(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-bucket-namespace": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-content-sha256`.
	 */
	static xAmzContentSha256(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-content-sha256": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-copy-source`.
	 */
	static xAmzCopySource(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-copy-source": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-grant-full-control`.
	 */
	static xAmzGrantFullControl(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-grant-full-control": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-grant-read`.
	 */
	static xAmzGrantRead(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-grant-read": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-grant-read-acp`.
	 */
	static xAmzGrantReadAcp(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-grant-read-acp": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-grant-write`.
	 */
	static xAmzGrantWrite(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-grant-write": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-grant-write-acp`.
	 */
	static xAmzGrantWriteAcp(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-grant-write-acp": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-metadata-directive`.
	 */
	static xAmzMetadataDirective(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-metadata-directive": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-object-annotation-directive`.
	 */
	static xAmzObjectAnnotationDirective(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-object-annotation-directive": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-object-if-match`.
	 */
	static xAmzObjectIfMatch(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-object-if-match": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-object-ownership`.
	 */
	static xAmzObjectOwnership(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-object-ownership": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-server-side-encryption`.
	 */
	static xAmzServerSideEncryption(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-server-side-encryption": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-server-side-encryption-aws-kms-key-id`.
	 */
	static xAmzServerSideEncryptionAWSKMSKeyId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "s3:x-amz-server-side-encryption-aws-kms-key-id": value },
		};
	}

	/**
	 * Generates a condition block for `s3:x-amz-server-side-encryption-customer-algorithm`.
	 */
	static xAmzServerSideEncryptionCustomerAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"s3:x-amz-server-side-encryption-customer-algorithm": value,
			},
		};
	}

	/**
	 * Generates a condition block for `s3:x-amz-storage-class`.
	 */
	static xAmzStorageClass(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-storage-class": value } };
	}

	/**
	 * Generates a condition block for `s3:x-amz-website-redirect-location`.
	 */
	static xAmzWebsiteRedirectLocation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3:x-amz-website-redirect-location": value } };
	}
}
