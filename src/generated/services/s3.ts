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
	static readonly AbortMultipartUpload = "s3:AbortMultipartUpload";
	/** [Read] s3:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"s3:AllowVendedLogDeliveryForResource";
	/** [PermissionManagement] s3:AssociateAccessGrantsIdentityCenter */
	static readonly AssociateAccessGrantsIdentityCenter =
		"s3:AssociateAccessGrantsIdentityCenter";
	/** [PermissionManagement] s3:BypassGovernanceRetention */
	static readonly BypassGovernanceRetention = "s3:BypassGovernanceRetention";
	/** [PermissionManagement] s3:CreateAccessGrant */
	static readonly CreateAccessGrant = "s3:CreateAccessGrant";
	/** [PermissionManagement] s3:CreateAccessGrantsInstance */
	static readonly CreateAccessGrantsInstance = "s3:CreateAccessGrantsInstance";
	/** [PermissionManagement] s3:CreateAccessGrantsLocation */
	static readonly CreateAccessGrantsLocation = "s3:CreateAccessGrantsLocation";
	/** [Write] s3:CreateAccessPoint */
	static readonly CreateAccessPoint = "s3:CreateAccessPoint";
	/** [Write] s3:CreateAccessPointForObjectLambda */
	static readonly CreateAccessPointForObjectLambda =
		"s3:CreateAccessPointForObjectLambda";
	/** [Write] s3:CreateBucket */
	static readonly CreateBucket = "s3:CreateBucket";
	/** [Write] s3:CreateBucketMetadataTableConfiguration */
	static readonly CreateBucketMetadataTableConfiguration =
		"s3:CreateBucketMetadataTableConfiguration";
	/** [Write] s3:CreateJob */
	static readonly CreateJob = "s3:CreateJob";
	/** [Write] s3:CreateMultiRegionAccessPoint */
	static readonly CreateMultiRegionAccessPoint =
		"s3:CreateMultiRegionAccessPoint";
	/** [Write] s3:CreateStorageLensGroup */
	static readonly CreateStorageLensGroup = "s3:CreateStorageLensGroup";
	/** [PermissionManagement] s3:DeleteAccessGrant */
	static readonly DeleteAccessGrant = "s3:DeleteAccessGrant";
	/** [PermissionManagement] s3:DeleteAccessGrantsInstance */
	static readonly DeleteAccessGrantsInstance = "s3:DeleteAccessGrantsInstance";
	/** [PermissionManagement] s3:DeleteAccessGrantsInstanceResourcePolicy */
	static readonly DeleteAccessGrantsInstanceResourcePolicy =
		"s3:DeleteAccessGrantsInstanceResourcePolicy";
	/** [PermissionManagement] s3:DeleteAccessGrantsLocation */
	static readonly DeleteAccessGrantsLocation = "s3:DeleteAccessGrantsLocation";
	/** [Write] s3:DeleteAccessPoint */
	static readonly DeleteAccessPoint = "s3:DeleteAccessPoint";
	/** [Write] s3:DeleteAccessPointForObjectLambda */
	static readonly DeleteAccessPointForObjectLambda =
		"s3:DeleteAccessPointForObjectLambda";
	/** [PermissionManagement] s3:DeleteAccessPointPolicy */
	static readonly DeleteAccessPointPolicy = "s3:DeleteAccessPointPolicy";
	/** [PermissionManagement] s3:DeleteAccessPointPolicyForObjectLambda */
	static readonly DeleteAccessPointPolicyForObjectLambda =
		"s3:DeleteAccessPointPolicyForObjectLambda";
	/** [Write] s3:DeleteBucket */
	static readonly DeleteBucket = "s3:DeleteBucket";
	/** [Write] s3:DeleteBucketMetadataTableConfiguration */
	static readonly DeleteBucketMetadataTableConfiguration =
		"s3:DeleteBucketMetadataTableConfiguration";
	/** [PermissionManagement] s3:DeleteBucketPolicy */
	static readonly DeleteBucketPolicy = "s3:DeleteBucketPolicy";
	/** [Write] s3:DeleteBucketWebsite */
	static readonly DeleteBucketWebsite = "s3:DeleteBucketWebsite";
	/** [Tagging] s3:DeleteJobTagging */
	static readonly DeleteJobTagging = "s3:DeleteJobTagging";
	/** [Write] s3:DeleteMultiRegionAccessPoint */
	static readonly DeleteMultiRegionAccessPoint =
		"s3:DeleteMultiRegionAccessPoint";
	/** [Write] s3:DeleteObject */
	static readonly DeleteObject = "s3:DeleteObject";
	/** [Write] s3:DeleteObjectAnnotation */
	static readonly DeleteObjectAnnotation = "s3:DeleteObjectAnnotation";
	/** [Tagging] s3:DeleteObjectTagging */
	static readonly DeleteObjectTagging = "s3:DeleteObjectTagging";
	/** [Write] s3:DeleteObjectVersion */
	static readonly DeleteObjectVersion = "s3:DeleteObjectVersion";
	/** [Write] s3:DeleteObjectVersionAnnotation */
	static readonly DeleteObjectVersionAnnotation =
		"s3:DeleteObjectVersionAnnotation";
	/** [Tagging] s3:DeleteObjectVersionTagging */
	static readonly DeleteObjectVersionTagging = "s3:DeleteObjectVersionTagging";
	/** [Write] s3:DeleteStorageLensConfiguration */
	static readonly DeleteStorageLensConfiguration =
		"s3:DeleteStorageLensConfiguration";
	/** [Tagging] s3:DeleteStorageLensConfigurationTagging */
	static readonly DeleteStorageLensConfigurationTagging =
		"s3:DeleteStorageLensConfigurationTagging";
	/** [Write] s3:DeleteStorageLensGroup */
	static readonly DeleteStorageLensGroup = "s3:DeleteStorageLensGroup";
	/** [Read] s3:DescribeJob */
	static readonly DescribeJob = "s3:DescribeJob";
	/** [Read] s3:DescribeMultiRegionAccessPointOperation */
	static readonly DescribeMultiRegionAccessPointOperation =
		"s3:DescribeMultiRegionAccessPointOperation";
	/** [PermissionManagement] s3:DissociateAccessGrantsIdentityCenter */
	static readonly DissociateAccessGrantsIdentityCenter =
		"s3:DissociateAccessGrantsIdentityCenter";
	/** [Read] s3:GetAccelerateConfiguration */
	static readonly actionGetAccelerateConfiguration =
		"s3:GetAccelerateConfiguration";
	/** [Read] s3:GetAccessGrant */
	static readonly actionGetAccessGrant = "s3:GetAccessGrant";
	/** [Read] s3:GetAccessGrantsInstance */
	static readonly actionGetAccessGrantsInstance = "s3:GetAccessGrantsInstance";
	/** [Read] s3:GetAccessGrantsInstanceForPrefix */
	static readonly actionGetAccessGrantsInstanceForPrefix =
		"s3:GetAccessGrantsInstanceForPrefix";
	/** [Read] s3:GetAccessGrantsInstanceResourcePolicy */
	static readonly actionGetAccessGrantsInstanceResourcePolicy =
		"s3:GetAccessGrantsInstanceResourcePolicy";
	/** [Read] s3:GetAccessGrantsLocation */
	static readonly actionGetAccessGrantsLocation = "s3:GetAccessGrantsLocation";
	/** [Read] s3:GetAccessPoint */
	static readonly actionGetAccessPoint = "s3:GetAccessPoint";
	/** [Read] s3:GetAccessPointConfigurationForObjectLambda */
	static readonly actionGetAccessPointConfigurationForObjectLambda =
		"s3:GetAccessPointConfigurationForObjectLambda";
	/** [Read] s3:GetAccessPointForObjectLambda */
	static readonly actionGetAccessPointForObjectLambda =
		"s3:GetAccessPointForObjectLambda";
	/** [Read] s3:GetAccessPointPolicy */
	static readonly actionGetAccessPointPolicy = "s3:GetAccessPointPolicy";
	/** [Read] s3:GetAccessPointPolicyForObjectLambda */
	static readonly actionGetAccessPointPolicyForObjectLambda =
		"s3:GetAccessPointPolicyForObjectLambda";
	/** [Read] s3:GetAccessPointPolicyStatus */
	static readonly actionGetAccessPointPolicyStatus =
		"s3:GetAccessPointPolicyStatus";
	/** [Read] s3:GetAccessPointPolicyStatusForObjectLambda */
	static readonly actionGetAccessPointPolicyStatusForObjectLambda =
		"s3:GetAccessPointPolicyStatusForObjectLambda";
	/** [Read] s3:GetAccountPublicAccessBlock */
	static readonly actionGetAccountPublicAccessBlock =
		"s3:GetAccountPublicAccessBlock";
	/** [Read] s3:GetAnalyticsConfiguration */
	static readonly actionGetAnalyticsConfiguration =
		"s3:GetAnalyticsConfiguration";
	/** [Read] s3:GetBucketAbac */
	static readonly actionGetBucketAbac = "s3:GetBucketAbac";
	/** [Read] s3:GetBucketAcl */
	static readonly actionGetBucketAcl = "s3:GetBucketAcl";
	/** [Read] s3:GetBucketCORS */
	static readonly actionGetBucketCORS = "s3:GetBucketCORS";
	/** [Read] s3:GetBucketLocation */
	static readonly actionGetBucketLocation = "s3:GetBucketLocation";
	/** [Read] s3:GetBucketLogging */
	static readonly actionGetBucketLogging = "s3:GetBucketLogging";
	/** [Read] s3:GetBucketMetadataTableConfiguration */
	static readonly actionGetBucketMetadataTableConfiguration =
		"s3:GetBucketMetadataTableConfiguration";
	/** [Read] s3:GetBucketNotification */
	static readonly actionGetBucketNotification = "s3:GetBucketNotification";
	/** [Read] s3:GetBucketObjectLockConfiguration */
	static readonly actionGetBucketObjectLockConfiguration =
		"s3:GetBucketObjectLockConfiguration";
	/** [Read] s3:GetBucketOwnershipControls */
	static readonly actionGetBucketOwnershipControls =
		"s3:GetBucketOwnershipControls";
	/** [Read] s3:GetBucketPolicy */
	static readonly actionGetBucketPolicy = "s3:GetBucketPolicy";
	/** [Read] s3:GetBucketPolicyStatus */
	static readonly actionGetBucketPolicyStatus = "s3:GetBucketPolicyStatus";
	/** [Read] s3:GetBucketPublicAccessBlock */
	static readonly actionGetBucketPublicAccessBlock =
		"s3:GetBucketPublicAccessBlock";
	/** [Read] s3:GetBucketRequestPayment */
	static readonly actionGetBucketRequestPayment = "s3:GetBucketRequestPayment";
	/** [Read] s3:GetBucketTagging */
	static readonly actionGetBucketTagging = "s3:GetBucketTagging";
	/** [Read] s3:GetBucketVersioning */
	static readonly actionGetBucketVersioning = "s3:GetBucketVersioning";
	/** [Read] s3:GetBucketWebsite */
	static readonly actionGetBucketWebsite = "s3:GetBucketWebsite";
	/** [Read] s3:GetDataAccess */
	static readonly actionGetDataAccess = "s3:GetDataAccess";
	/** [Read] s3:GetEncryptionConfiguration */
	static readonly actionGetEncryptionConfiguration =
		"s3:GetEncryptionConfiguration";
	/** [Read] s3:GetIntelligentTieringConfiguration */
	static readonly actionGetIntelligentTieringConfiguration =
		"s3:GetIntelligentTieringConfiguration";
	/** [Read] s3:GetInventoryConfiguration */
	static readonly actionGetInventoryConfiguration =
		"s3:GetInventoryConfiguration";
	/** [Read] s3:GetJobTagging */
	static readonly actionGetJobTagging = "s3:GetJobTagging";
	/** [Read] s3:GetLifecycleConfiguration */
	static readonly actionGetLifecycleConfiguration =
		"s3:GetLifecycleConfiguration";
	/** [Read] s3:GetMetricsConfiguration */
	static readonly actionGetMetricsConfiguration = "s3:GetMetricsConfiguration";
	/** [Read] s3:GetMultiRegionAccessPoint */
	static readonly actionGetMultiRegionAccessPoint =
		"s3:GetMultiRegionAccessPoint";
	/** [Read] s3:GetMultiRegionAccessPointPolicy */
	static readonly actionGetMultiRegionAccessPointPolicy =
		"s3:GetMultiRegionAccessPointPolicy";
	/** [Read] s3:GetMultiRegionAccessPointPolicyStatus */
	static readonly actionGetMultiRegionAccessPointPolicyStatus =
		"s3:GetMultiRegionAccessPointPolicyStatus";
	/** [Read] s3:GetMultiRegionAccessPointRoutes */
	static readonly actionGetMultiRegionAccessPointRoutes =
		"s3:GetMultiRegionAccessPointRoutes";
	/** [Read] s3:GetObject */
	static readonly actionGetObject = "s3:GetObject";
	/** [Read] s3:GetObjectAcl */
	static readonly actionGetObjectAcl = "s3:GetObjectAcl";
	/** [Read] s3:GetObjectAnnotation */
	static readonly actionGetObjectAnnotation = "s3:GetObjectAnnotation";
	/** [Read] s3:GetObjectAttributes */
	static readonly actionGetObjectAttributes = "s3:GetObjectAttributes";
	/** [Read] s3:GetObjectLegalHold */
	static readonly actionGetObjectLegalHold = "s3:GetObjectLegalHold";
	/** [Read] s3:GetObjectRetention */
	static readonly actionGetObjectRetention = "s3:GetObjectRetention";
	/** [Read] s3:GetObjectTagging */
	static readonly actionGetObjectTagging = "s3:GetObjectTagging";
	/** [Read] s3:GetObjectTorrent */
	static readonly actionGetObjectTorrent = "s3:GetObjectTorrent";
	/** [Read] s3:GetObjectVersion */
	static readonly actionGetObjectVersion = "s3:GetObjectVersion";
	/** [Read] s3:GetObjectVersionAcl */
	static readonly actionGetObjectVersionAcl = "s3:GetObjectVersionAcl";
	/** [Read] s3:GetObjectVersionAnnotation */
	static readonly actionGetObjectVersionAnnotation =
		"s3:GetObjectVersionAnnotation";
	/** [Read] s3:GetObjectVersionAnnotationForReplication */
	static readonly actionGetObjectVersionAnnotationForReplication =
		"s3:GetObjectVersionAnnotationForReplication";
	/** [Read] s3:GetObjectVersionAttributes */
	static readonly actionGetObjectVersionAttributes =
		"s3:GetObjectVersionAttributes";
	/** [Read] s3:GetObjectVersionForReplication */
	static readonly actionGetObjectVersionForReplication =
		"s3:GetObjectVersionForReplication";
	/** [Read] s3:GetObjectVersionTagging */
	static readonly actionGetObjectVersionTagging = "s3:GetObjectVersionTagging";
	/** [Read] s3:GetObjectVersionTorrent */
	static readonly actionGetObjectVersionTorrent = "s3:GetObjectVersionTorrent";
	/** [Read] s3:GetReplicationConfiguration */
	static readonly actionGetReplicationConfiguration =
		"s3:GetReplicationConfiguration";
	/** [Read] s3:GetStorageLensConfiguration */
	static readonly actionGetStorageLensConfiguration =
		"s3:GetStorageLensConfiguration";
	/** [Read] s3:GetStorageLensConfigurationTagging */
	static readonly actionGetStorageLensConfigurationTagging =
		"s3:GetStorageLensConfigurationTagging";
	/** [Read] s3:GetStorageLensDashboard */
	static readonly actionGetStorageLensDashboard = "s3:GetStorageLensDashboard";
	/** [Read] s3:GetStorageLensGroup */
	static readonly actionGetStorageLensGroup = "s3:GetStorageLensGroup";
	/** [Write] s3:InitiateReplication */
	static readonly InitiateReplication = "s3:InitiateReplication";
	/** [List] s3:ListAccessGrants */
	static readonly ListAccessGrants = "s3:ListAccessGrants";
	/** [List] s3:ListAccessGrantsInstances */
	static readonly ListAccessGrantsInstances = "s3:ListAccessGrantsInstances";
	/** [List] s3:ListAccessGrantsLocations */
	static readonly ListAccessGrantsLocations = "s3:ListAccessGrantsLocations";
	/** [List] s3:ListAccessPoints */
	static readonly ListAccessPoints = "s3:ListAccessPoints";
	/** [List] s3:ListAccessPointsForObjectLambda */
	static readonly ListAccessPointsForObjectLambda =
		"s3:ListAccessPointsForObjectLambda";
	/** [List] s3:ListAllMyBuckets */
	static readonly ListAllMyBuckets = "s3:ListAllMyBuckets";
	/** [List] s3:ListBucket */
	static readonly ListBucket = "s3:ListBucket";
	/** [List] s3:ListBucketMultipartUploads */
	static readonly ListBucketMultipartUploads = "s3:ListBucketMultipartUploads";
	/** [List] s3:ListBucketVersions */
	static readonly ListBucketVersions = "s3:ListBucketVersions";
	/** [List] s3:ListCallerAccessGrants */
	static readonly ListCallerAccessGrants = "s3:ListCallerAccessGrants";
	/** [List] s3:ListJobs */
	static readonly ListJobs = "s3:ListJobs";
	/** [List] s3:ListMultiRegionAccessPoints */
	static readonly ListMultiRegionAccessPoints =
		"s3:ListMultiRegionAccessPoints";
	/** [List] s3:ListMultipartUploadParts */
	static readonly ListMultipartUploadParts = "s3:ListMultipartUploadParts";
	/** [List] s3:ListObjectAnnotations */
	static readonly ListObjectAnnotations = "s3:ListObjectAnnotations";
	/** [List] s3:ListObjectVersionAnnotations */
	static readonly ListObjectVersionAnnotations =
		"s3:ListObjectVersionAnnotations";
	/** [List] s3:ListStorageLensConfigurations */
	static readonly ListStorageLensConfigurations =
		"s3:ListStorageLensConfigurations";
	/** [List] s3:ListStorageLensGroups */
	static readonly ListStorageLensGroups = "s3:ListStorageLensGroups";
	/** [List] s3:ListTagsForResource */
	static readonly ListTagsForResource = "s3:ListTagsForResource";
	/** [PermissionManagement] s3:ObjectOwnerOverrideToBucketOwner */
	static readonly ObjectOwnerOverrideToBucketOwner =
		"s3:ObjectOwnerOverrideToBucketOwner";
	/** [Write] s3:PauseReplication */
	static readonly PauseReplication = "s3:PauseReplication";
	/** [Write] s3:PutAccelerateConfiguration */
	static readonly PutAccelerateConfiguration = "s3:PutAccelerateConfiguration";
	/** [PermissionManagement] s3:PutAccessGrantsInstanceResourcePolicy */
	static readonly PutAccessGrantsInstanceResourcePolicy =
		"s3:PutAccessGrantsInstanceResourcePolicy";
	/** [Write] s3:PutAccessPointConfigurationForObjectLambda */
	static readonly PutAccessPointConfigurationForObjectLambda =
		"s3:PutAccessPointConfigurationForObjectLambda";
	/** [PermissionManagement] s3:PutAccessPointPolicy */
	static readonly PutAccessPointPolicy = "s3:PutAccessPointPolicy";
	/** [PermissionManagement] s3:PutAccessPointPolicyForObjectLambda */
	static readonly PutAccessPointPolicyForObjectLambda =
		"s3:PutAccessPointPolicyForObjectLambda";
	/** [PermissionManagement] s3:PutAccessPointPublicAccessBlock */
	static readonly PutAccessPointPublicAccessBlock =
		"s3:PutAccessPointPublicAccessBlock";
	/** [PermissionManagement] s3:PutAccountPublicAccessBlock */
	static readonly PutAccountPublicAccessBlock =
		"s3:PutAccountPublicAccessBlock";
	/** [Write] s3:PutAnalyticsConfiguration */
	static readonly PutAnalyticsConfiguration = "s3:PutAnalyticsConfiguration";
	/** [Write] s3:PutBucketAbac */
	static readonly PutBucketAbac = "s3:PutBucketAbac";
	/** [PermissionManagement] s3:PutBucketAcl */
	static readonly PutBucketAcl = "s3:PutBucketAcl";
	/** [Write] s3:PutBucketCORS */
	static readonly PutBucketCORS = "s3:PutBucketCORS";
	/** [Write] s3:PutBucketLogging */
	static readonly PutBucketLogging = "s3:PutBucketLogging";
	/** [Write] s3:PutBucketNotification */
	static readonly PutBucketNotification = "s3:PutBucketNotification";
	/** [Write] s3:PutBucketObjectLockConfiguration */
	static readonly PutBucketObjectLockConfiguration =
		"s3:PutBucketObjectLockConfiguration";
	/** [PermissionManagement] s3:PutBucketOwnershipControls */
	static readonly PutBucketOwnershipControls = "s3:PutBucketOwnershipControls";
	/** [PermissionManagement] s3:PutBucketPolicy */
	static readonly PutBucketPolicy = "s3:PutBucketPolicy";
	/** [PermissionManagement] s3:PutBucketPublicAccessBlock */
	static readonly PutBucketPublicAccessBlock = "s3:PutBucketPublicAccessBlock";
	/** [Write] s3:PutBucketRequestPayment */
	static readonly PutBucketRequestPayment = "s3:PutBucketRequestPayment";
	/** [Tagging] s3:PutBucketTagging */
	static readonly PutBucketTagging = "s3:PutBucketTagging";
	/** [Write] s3:PutBucketVersioning */
	static readonly PutBucketVersioning = "s3:PutBucketVersioning";
	/** [Write] s3:PutBucketWebsite */
	static readonly PutBucketWebsite = "s3:PutBucketWebsite";
	/** [Write] s3:PutEncryptionConfiguration */
	static readonly PutEncryptionConfiguration = "s3:PutEncryptionConfiguration";
	/** [Write] s3:PutIntelligentTieringConfiguration */
	static readonly PutIntelligentTieringConfiguration =
		"s3:PutIntelligentTieringConfiguration";
	/** [Write] s3:PutInventoryConfiguration */
	static readonly PutInventoryConfiguration = "s3:PutInventoryConfiguration";
	/** [Tagging] s3:PutJobTagging */
	static readonly PutJobTagging = "s3:PutJobTagging";
	/** [Write] s3:PutLifecycleConfiguration */
	static readonly PutLifecycleConfiguration = "s3:PutLifecycleConfiguration";
	/** [Write] s3:PutMetricsConfiguration */
	static readonly PutMetricsConfiguration = "s3:PutMetricsConfiguration";
	/** [PermissionManagement] s3:PutMultiRegionAccessPointPolicy */
	static readonly PutMultiRegionAccessPointPolicy =
		"s3:PutMultiRegionAccessPointPolicy";
	/** [Write] s3:PutObject */
	static readonly PutObject = "s3:PutObject";
	/** [PermissionManagement] s3:PutObjectAcl */
	static readonly PutObjectAcl = "s3:PutObjectAcl";
	/** [Write] s3:PutObjectAnnotation */
	static readonly PutObjectAnnotation = "s3:PutObjectAnnotation";
	/** [Write] s3:PutObjectLegalHold */
	static readonly PutObjectLegalHold = "s3:PutObjectLegalHold";
	/** [Write] s3:PutObjectRetention */
	static readonly PutObjectRetention = "s3:PutObjectRetention";
	/** [Tagging] s3:PutObjectTagging */
	static readonly PutObjectTagging = "s3:PutObjectTagging";
	/** [PermissionManagement] s3:PutObjectVersionAcl */
	static readonly PutObjectVersionAcl = "s3:PutObjectVersionAcl";
	/** [Write] s3:PutObjectVersionAnnotation */
	static readonly PutObjectVersionAnnotation = "s3:PutObjectVersionAnnotation";
	/** [Tagging] s3:PutObjectVersionTagging */
	static readonly PutObjectVersionTagging = "s3:PutObjectVersionTagging";
	/** [Write] s3:PutReplicationConfiguration */
	static readonly PutReplicationConfiguration =
		"s3:PutReplicationConfiguration";
	/** [Write] s3:PutStorageLensConfiguration */
	static readonly PutStorageLensConfiguration =
		"s3:PutStorageLensConfiguration";
	/** [Tagging] s3:PutStorageLensConfigurationTagging */
	static readonly PutStorageLensConfigurationTagging =
		"s3:PutStorageLensConfigurationTagging";
	/** [Write] s3:ReplicateDelete */
	static readonly ReplicateDelete = "s3:ReplicateDelete";
	/** [Write] s3:ReplicateObject */
	static readonly ReplicateObject = "s3:ReplicateObject";
	/** [Write] s3:ReplicateObjectAnnotation */
	static readonly ReplicateObjectAnnotation = "s3:ReplicateObjectAnnotation";
	/** [Tagging] s3:ReplicateTags */
	static readonly ReplicateTags = "s3:ReplicateTags";
	/** [Write] s3:RestoreObject */
	static readonly RestoreObject = "s3:RestoreObject";
	/** [Write] s3:SubmitMultiRegionAccessPointRoutes */
	static readonly SubmitMultiRegionAccessPointRoutes =
		"s3:SubmitMultiRegionAccessPointRoutes";
	/** [Tagging] s3:TagResource */
	static readonly TagResource = "s3:TagResource";
	/** [Tagging] s3:UntagResource */
	static readonly UntagResource = "s3:UntagResource";
	/** [PermissionManagement] s3:UpdateAccessGrantsLocation */
	static readonly UpdateAccessGrantsLocation = "s3:UpdateAccessGrantsLocation";
	/** [Write] s3:UpdateBucketMetadataAnnotationTableConfiguration */
	static readonly UpdateBucketMetadataAnnotationTableConfiguration =
		"s3:UpdateBucketMetadataAnnotationTableConfiguration";
	/** [Write] s3:UpdateBucketMetadataInventoryTableConfiguration */
	static readonly UpdateBucketMetadataInventoryTableConfiguration =
		"s3:UpdateBucketMetadataInventoryTableConfiguration";
	/** [Write] s3:UpdateBucketMetadataJournalTableConfiguration */
	static readonly UpdateBucketMetadataJournalTableConfiguration =
		"s3:UpdateBucketMetadataJournalTableConfiguration";
	/** [Write] s3:UpdateJobPriority */
	static readonly UpdateJobPriority = "s3:UpdateJobPriority";
	/** [Write] s3:UpdateJobStatus */
	static readonly UpdateJobStatus = "s3:UpdateJobStatus";
	/** [Write] s3:UpdateObjectEncryption */
	static readonly UpdateObjectEncryption = "s3:UpdateObjectEncryption";
	/** [Write] s3:UpdateStorageLensGroup */
	static readonly UpdateStorageLensGroup = "s3:UpdateStorageLensGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3Actions.AllowVendedLogDeliveryForResource,
		S3Actions.DescribeJob,
		S3Actions.DescribeMultiRegionAccessPointOperation,
		S3Actions.actionGetAccelerateConfiguration,
		S3Actions.actionGetAccessGrant,
		S3Actions.actionGetAccessGrantsInstance,
		S3Actions.actionGetAccessGrantsInstanceForPrefix,
		S3Actions.actionGetAccessGrantsInstanceResourcePolicy,
		S3Actions.actionGetAccessGrantsLocation,
		S3Actions.actionGetAccessPoint,
		S3Actions.actionGetAccessPointConfigurationForObjectLambda,
		S3Actions.actionGetAccessPointForObjectLambda,
		S3Actions.actionGetAccessPointPolicy,
		S3Actions.actionGetAccessPointPolicyForObjectLambda,
		S3Actions.actionGetAccessPointPolicyStatus,
		S3Actions.actionGetAccessPointPolicyStatusForObjectLambda,
		S3Actions.actionGetAccountPublicAccessBlock,
		S3Actions.actionGetAnalyticsConfiguration,
		S3Actions.actionGetBucketAbac,
		S3Actions.actionGetBucketAcl,
		S3Actions.actionGetBucketCORS,
		S3Actions.actionGetBucketLocation,
		S3Actions.actionGetBucketLogging,
		S3Actions.actionGetBucketMetadataTableConfiguration,
		S3Actions.actionGetBucketNotification,
		S3Actions.actionGetBucketObjectLockConfiguration,
		S3Actions.actionGetBucketOwnershipControls,
		S3Actions.actionGetBucketPolicy,
		S3Actions.actionGetBucketPolicyStatus,
		S3Actions.actionGetBucketPublicAccessBlock,
		S3Actions.actionGetBucketRequestPayment,
		S3Actions.actionGetBucketTagging,
		S3Actions.actionGetBucketVersioning,
		S3Actions.actionGetBucketWebsite,
		S3Actions.actionGetDataAccess,
		S3Actions.actionGetEncryptionConfiguration,
		S3Actions.actionGetIntelligentTieringConfiguration,
		S3Actions.actionGetInventoryConfiguration,
		S3Actions.actionGetJobTagging,
		S3Actions.actionGetLifecycleConfiguration,
		S3Actions.actionGetMetricsConfiguration,
		S3Actions.actionGetMultiRegionAccessPoint,
		S3Actions.actionGetMultiRegionAccessPointPolicy,
		S3Actions.actionGetMultiRegionAccessPointPolicyStatus,
		S3Actions.actionGetMultiRegionAccessPointRoutes,
		S3Actions.actionGetObject,
		S3Actions.actionGetObjectAcl,
		S3Actions.actionGetObjectAnnotation,
		S3Actions.actionGetObjectAttributes,
		S3Actions.actionGetObjectLegalHold,
		S3Actions.actionGetObjectRetention,
		S3Actions.actionGetObjectTagging,
		S3Actions.actionGetObjectTorrent,
		S3Actions.actionGetObjectVersion,
		S3Actions.actionGetObjectVersionAcl,
		S3Actions.actionGetObjectVersionAnnotation,
		S3Actions.actionGetObjectVersionAnnotationForReplication,
		S3Actions.actionGetObjectVersionAttributes,
		S3Actions.actionGetObjectVersionForReplication,
		S3Actions.actionGetObjectVersionTagging,
		S3Actions.actionGetObjectVersionTorrent,
		S3Actions.actionGetReplicationConfiguration,
		S3Actions.actionGetStorageLensConfiguration,
		S3Actions.actionGetStorageLensConfigurationTagging,
		S3Actions.actionGetStorageLensDashboard,
		S3Actions.actionGetStorageLensGroup,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3Actions.AbortMultipartUpload,
		S3Actions.CreateAccessPoint,
		S3Actions.CreateAccessPointForObjectLambda,
		S3Actions.CreateBucket,
		S3Actions.CreateBucketMetadataTableConfiguration,
		S3Actions.CreateJob,
		S3Actions.CreateMultiRegionAccessPoint,
		S3Actions.CreateStorageLensGroup,
		S3Actions.DeleteAccessPoint,
		S3Actions.DeleteAccessPointForObjectLambda,
		S3Actions.DeleteBucket,
		S3Actions.DeleteBucketMetadataTableConfiguration,
		S3Actions.DeleteBucketWebsite,
		S3Actions.DeleteMultiRegionAccessPoint,
		S3Actions.DeleteObject,
		S3Actions.DeleteObjectAnnotation,
		S3Actions.DeleteObjectVersion,
		S3Actions.DeleteObjectVersionAnnotation,
		S3Actions.DeleteStorageLensConfiguration,
		S3Actions.DeleteStorageLensGroup,
		S3Actions.InitiateReplication,
		S3Actions.PauseReplication,
		S3Actions.PutAccelerateConfiguration,
		S3Actions.PutAccessPointConfigurationForObjectLambda,
		S3Actions.PutAnalyticsConfiguration,
		S3Actions.PutBucketAbac,
		S3Actions.PutBucketCORS,
		S3Actions.PutBucketLogging,
		S3Actions.PutBucketNotification,
		S3Actions.PutBucketObjectLockConfiguration,
		S3Actions.PutBucketRequestPayment,
		S3Actions.PutBucketVersioning,
		S3Actions.PutBucketWebsite,
		S3Actions.PutEncryptionConfiguration,
		S3Actions.PutIntelligentTieringConfiguration,
		S3Actions.PutInventoryConfiguration,
		S3Actions.PutLifecycleConfiguration,
		S3Actions.PutMetricsConfiguration,
		S3Actions.PutObject,
		S3Actions.PutObjectAnnotation,
		S3Actions.PutObjectLegalHold,
		S3Actions.PutObjectRetention,
		S3Actions.PutObjectVersionAnnotation,
		S3Actions.PutReplicationConfiguration,
		S3Actions.PutStorageLensConfiguration,
		S3Actions.ReplicateDelete,
		S3Actions.ReplicateObject,
		S3Actions.ReplicateObjectAnnotation,
		S3Actions.RestoreObject,
		S3Actions.SubmitMultiRegionAccessPointRoutes,
		S3Actions.UpdateBucketMetadataAnnotationTableConfiguration,
		S3Actions.UpdateBucketMetadataInventoryTableConfiguration,
		S3Actions.UpdateBucketMetadataJournalTableConfiguration,
		S3Actions.UpdateJobPriority,
		S3Actions.UpdateJobStatus,
		S3Actions.UpdateObjectEncryption,
		S3Actions.UpdateStorageLensGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3Actions.ListAccessGrants,
		S3Actions.ListAccessGrantsInstances,
		S3Actions.ListAccessGrantsLocations,
		S3Actions.ListAccessPoints,
		S3Actions.ListAccessPointsForObjectLambda,
		S3Actions.ListAllMyBuckets,
		S3Actions.ListBucket,
		S3Actions.ListBucketMultipartUploads,
		S3Actions.ListBucketVersions,
		S3Actions.ListCallerAccessGrants,
		S3Actions.ListJobs,
		S3Actions.ListMultiRegionAccessPoints,
		S3Actions.ListMultipartUploadParts,
		S3Actions.ListObjectAnnotations,
		S3Actions.ListObjectVersionAnnotations,
		S3Actions.ListStorageLensConfigurations,
		S3Actions.ListStorageLensGroups,
		S3Actions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3Actions.AssociateAccessGrantsIdentityCenter,
		S3Actions.BypassGovernanceRetention,
		S3Actions.CreateAccessGrant,
		S3Actions.CreateAccessGrantsInstance,
		S3Actions.CreateAccessGrantsLocation,
		S3Actions.DeleteAccessGrant,
		S3Actions.DeleteAccessGrantsInstance,
		S3Actions.DeleteAccessGrantsInstanceResourcePolicy,
		S3Actions.DeleteAccessGrantsLocation,
		S3Actions.DeleteAccessPointPolicy,
		S3Actions.DeleteAccessPointPolicyForObjectLambda,
		S3Actions.DeleteBucketPolicy,
		S3Actions.DissociateAccessGrantsIdentityCenter,
		S3Actions.ObjectOwnerOverrideToBucketOwner,
		S3Actions.PutAccessGrantsInstanceResourcePolicy,
		S3Actions.PutAccessPointPolicy,
		S3Actions.PutAccessPointPolicyForObjectLambda,
		S3Actions.PutAccessPointPublicAccessBlock,
		S3Actions.PutAccountPublicAccessBlock,
		S3Actions.PutBucketAcl,
		S3Actions.PutBucketOwnershipControls,
		S3Actions.PutBucketPolicy,
		S3Actions.PutBucketPublicAccessBlock,
		S3Actions.PutMultiRegionAccessPointPolicy,
		S3Actions.PutObjectAcl,
		S3Actions.PutObjectVersionAcl,
		S3Actions.UpdateAccessGrantsLocation,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3Actions.DeleteJobTagging,
		S3Actions.DeleteObjectTagging,
		S3Actions.DeleteObjectVersionTagging,
		S3Actions.DeleteStorageLensConfigurationTagging,
		S3Actions.PutBucketTagging,
		S3Actions.PutJobTagging,
		S3Actions.PutObjectTagging,
		S3Actions.PutObjectVersionTagging,
		S3Actions.PutStorageLensConfigurationTagging,
		S3Actions.ReplicateTags,
		S3Actions.TagResource,
		S3Actions.UntagResource,
	];
}

/**
 * Properties for building a accessgrant ARN.
 */
export interface S3AccessgrantArnProps {
	/** The Token component of the ARN. */
	readonly token: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accessgrant ARN.
 */
export interface S3AccessgrantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Token component. */
	readonly token: string;
}

/**
 * Properties for building a accessgrantsinstance ARN.
 */
export interface S3AccessgrantsinstanceArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accessgrantsinstance ARN.
 */
export interface S3AccessgrantsinstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a accessgrantslocation ARN.
 */
export interface S3AccessgrantslocationArnProps {
	/** The Token component of the ARN. */
	readonly token: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accessgrantslocation ARN.
 */
export interface S3AccessgrantslocationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Token component. */
	readonly token: string;
}

/**
 * Properties for building a accesspoint ARN.
 */
export interface S3AccesspointArnProps {
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
export interface S3AccesspointArnComponents {
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
 * Properties for building a accesspointobject ARN.
 */
export interface S3AccesspointobjectArnProps {
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
}

/**
 * Parsed components of a accesspointobject ARN.
 */
export interface S3AccesspointobjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointName component. */
	readonly accessPointName: string;
	/** The ObjectName component. */
	readonly objectName: string;
}

/**
 * Properties for building a bucket ARN.
 */
export interface S3BucketArnProps {
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
export interface S3BucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface S3JobArnProps {
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
 * Parsed components of a job ARN.
 */
export interface S3JobArnComponents {
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
 * Properties for building a multiregionaccesspoint ARN.
 */
export interface S3MultiregionaccesspointArnProps {
	/** The AccessPointAlias component of the ARN. */
	readonly accessPointAlias: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a multiregionaccesspoint ARN.
 */
export interface S3MultiregionaccesspointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointAlias component. */
	readonly accessPointAlias: string;
}

/**
 * Properties for building a multiregionaccesspointrequestarn ARN.
 */
export interface S3MultiregionaccesspointrequestarnArnProps {
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
}

/**
 * Parsed components of a multiregionaccesspointrequestarn ARN.
 */
export interface S3MultiregionaccesspointrequestarnArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Operation component. */
	readonly operation: string;
	/** The Token component. */
	readonly token: string;
}

/**
 * Properties for building a object ARN.
 */
export interface S3ObjectArnProps {
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
export interface S3ObjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
	/** The ObjectName component. */
	readonly objectName: string;
}

/**
 * Properties for building a objectlambdaaccesspoint ARN.
 */
export interface S3ObjectlambdaaccesspointArnProps {
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
export interface S3ObjectlambdaaccesspointArnComponents {
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
 * Properties for building a storagelensconfiguration ARN.
 */
export interface S3StoragelensconfigurationArnProps {
	/** The ConfigId component of the ARN. */
	readonly configId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a storagelensconfiguration ARN.
 */
export interface S3StoragelensconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigId component. */
	readonly configId: string;
}

/**
 * Properties for building a storagelensgroup ARN.
 */
export interface S3StoragelensgroupArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a storagelensgroup ARN.
 */
export interface S3StoragelensgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

const AccessgrantArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants\/default\/grant\/(?<token>[^:/?]+)$/;
const AccessgrantsinstanceArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants\/default$/;
const AccessgrantslocationArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):access-grants\/default\/location\/(?<token>[^:/?]+)$/;
const AccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)$/;
const AccesspointobjectArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)\/object\/(?<objectName>[^:/?]+)$/;
const BucketArnRegex = /^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const MultiregionaccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3::(?<account>[^:]*):accesspoint\/(?<accessPointAlias>[^:/?]+)$/;
const MultiregionaccesspointrequestarnArnRegex =
	/^arn:(?<partition>[^:]+):s3:us-west-2:(?<account>[^:]*):async-request\/mrap\/(?<operation>[^:/?]+)\/(?<token>[^:/?]+)$/;
const ObjectArnRegex =
	/^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)\/(?<objectName>[^:/?]+)$/;
const ObjectlambdaaccesspointArnRegex =
	/^arn:(?<partition>[^:]+):s3-object-lambda:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)$/;
const StoragelensconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):storage-lens\/(?<configId>[^:/?]+)$/;
const StoragelensgroupArnRegex =
	/^arn:(?<partition>[^:]+):s3:(?<region>[^:]*):(?<account>[^:]*):storage-lens-group\/(?<name>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3 resources.
 */
export class S3Resources {
	/**
	 * Builds an ARN for the accessgrant resource.
	 */
	static accessgrant(props: S3AccessgrantArnProps): string {
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
	static parseAccessgrantArn(arn: string): S3AccessgrantArnComponents {
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
	static accessgrantsinstance(props: S3AccessgrantsinstanceArnProps): string {
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
	static parseAccessgrantsinstanceArn(
		arn: string,
	): S3AccessgrantsinstanceArnComponents {
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
	static accessgrantslocation(props: S3AccessgrantslocationArnProps): string {
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
	static parseAccessgrantslocationArn(
		arn: string,
	): S3AccessgrantslocationArnComponents {
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
	static accesspoint(props: S3AccesspointArnProps): string {
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
	static parseAccesspointArn(arn: string): S3AccesspointArnComponents {
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
	static accesspointobject(props: S3AccesspointobjectArnProps): string {
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
	static parseAccesspointobjectArn(
		arn: string,
	): S3AccesspointobjectArnComponents {
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
	static bucket(props: S3BucketArnProps): string {
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
	static parseBucketArn(arn: string): S3BucketArnComponents {
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
	static job(props: S3JobArnProps): string {
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
	static parseJobArn(arn: string): S3JobArnComponents {
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
	static multiregionaccesspoint(
		props: S3MultiregionaccesspointArnProps,
	): string {
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
	static parseMultiregionaccesspointArn(
		arn: string,
	): S3MultiregionaccesspointArnComponents {
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
	static multiregionaccesspointrequestarn(
		props: S3MultiregionaccesspointrequestarnArnProps,
	): string {
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
	static parseMultiregionaccesspointrequestarnArn(
		arn: string,
	): S3MultiregionaccesspointrequestarnArnComponents {
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
	static object(props: S3ObjectArnProps): string {
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
	static parseObjectArn(arn: string): S3ObjectArnComponents {
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
	static objectlambdaaccesspoint(
		props: S3ObjectlambdaaccesspointArnProps,
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
	): S3ObjectlambdaaccesspointArnComponents {
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
	static storagelensconfiguration(
		props: S3StoragelensconfigurationArnProps,
	): string {
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
	static parseStoragelensconfigurationArn(
		arn: string,
	): S3StoragelensconfigurationArnComponents {
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
	static storagelensgroup(props: S3StoragelensgroupArnProps): string {
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
	static parseStoragelensgroupArn(
		arn: string,
	): S3StoragelensgroupArnComponents {
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
	static readonly AbortMultipartUpload: string[] = [
		"s3:AbortMultipartUpload",
		"s3-object-lambda:AbortMultipartUpload",
	];
	/** IAM actions required for the AssociateAccessGrantsIdentityCenter API call. */
	static readonly AssociateAccessGrantsIdentityCenter: string[] = [
		"s3:AssociateAccessGrantsIdentityCenter",
		"sso:CreateApplication",
		"sso:PutApplicationAuthenticationMethod",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the CompleteMultipartUpload API call. */
	static readonly CompleteMultipartUpload: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
	];
	/** IAM actions required for the CopyObject API call. */
	static readonly CopyObject: string[] = [
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
	static readonly CreateAccessGrant: string[] = [
		"s3:CreateAccessGrant",
		"sso:DescribeApplication",
		"sso:DescribeInstance",
		"identitystore:DescribeUser",
	];
	/** IAM actions required for the CreateAccessGrantsInstance API call. */
	static readonly CreateAccessGrantsInstance: string[] = [
		"s3:CreateAccessGrantsInstance",
		"sso:CreateApplication",
		"sso:DescribeInstance",
		"sso:PutApplicationAuthenticationMethod",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the CreateAccessGrantsLocation API call. */
	static readonly CreateAccessGrantsLocation: string[] = [
		"s3:CreateAccessGrantsLocation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAccessPoint API call. */
	static readonly CreateAccessPoint: string[] = ["s3:CreateAccessPoint"];
	/** IAM actions required for the CreateAccessPointForObjectLambda API call. */
	static readonly CreateAccessPointForObjectLambda: string[] = [
		"s3:CreateAccessPointForObjectLambda",
	];
	/** IAM actions required for the CreateBucket API call. */
	static readonly CreateBucket: string[] = [
		"s3:CreateBucket",
		"s3:PutBucketAcl",
		"s3:PutBucketObjectLockConfiguration",
		"s3:PutBucketOwnershipControls",
		"s3:PutBucketVersioning",
	];
	/** IAM actions required for the CreateBucketMetadataConfiguration API call. */
	static readonly CreateBucketMetadataConfiguration: string[] = [
		"s3:CreateBucketMetadataTableConfiguration",
		"s3tables:CreateNamespace",
		"s3tables:CreateTable",
		"s3tables:CreateTableBucket",
		"s3tables:GetTable",
		"s3tables:PutTableEncryption",
		"s3tables:PutTablePolicy",
	];
	/** IAM actions required for the CreateBucketMetadataTableConfiguration API call. */
	static readonly CreateBucketMetadataTableConfiguration: string[] = [
		"s3:CreateBucketMetadataTableConfiguration",
		"s3tables:CreateNamespace",
		"s3tables:CreateTable",
		"s3tables:GetTable",
		"s3tables:PutTablePolicy",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = ["s3:CreateJob"];
	/** IAM actions required for the CreateMultiRegionAccessPoint API call. */
	static readonly CreateMultiRegionAccessPoint: string[] = [
		"s3:CreateMultiRegionAccessPoint",
	];
	/** IAM actions required for the CreateMultipartUpload API call. */
	static readonly CreateMultipartUpload: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
		"s3:PutObjectAcl",
		"s3:PutObjectLegalHold",
		"s3:PutObjectRetention",
		"s3:PutObjectTagging",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CreateSession: string[] = [];
	/** IAM actions required for the CreateStorageLensGroup API call. */
	static readonly CreateStorageLensGroup: string[] = [
		"s3:CreateStorageLensGroup",
		"s3:TagResource",
	];
	/** IAM actions required for the DeleteAccessGrant API call. */
	static readonly DeleteAccessGrant: string[] = ["s3:DeleteAccessGrant"];
	/** IAM actions required for the DeleteAccessGrantsInstance API call. */
	static readonly DeleteAccessGrantsInstance: string[] = [
		"s3:DeleteAccessGrantsInstance",
	];
	/** IAM actions required for the DeleteAccessGrantsInstanceResourcePolicy API call. */
	static readonly DeleteAccessGrantsInstanceResourcePolicy: string[] = [
		"s3:DeleteAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the DeleteAccessGrantsLocation API call. */
	static readonly DeleteAccessGrantsLocation: string[] = [
		"s3:DeleteAccessGrantsLocation",
	];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DeleteAccessPoint: string[] = ["s3:DeleteAccessPoint"];
	/** IAM actions required for the DeleteAccessPointForObjectLambda API call. */
	static readonly DeleteAccessPointForObjectLambda: string[] = [
		"s3:DeleteAccessPointForObjectLambda",
	];
	/** IAM actions required for the DeleteAccessPointPolicy API call. */
	static readonly DeleteAccessPointPolicy: string[] = [
		"s3:DeleteAccessPointPolicy",
	];
	/** IAM actions required for the DeleteAccessPointPolicyForObjectLambda API call. */
	static readonly DeleteAccessPointPolicyForObjectLambda: string[] = [
		"s3:DeleteAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the DeleteAccessPointScope API call. */
	static readonly DeleteAccessPointScope: string[] = [];
	/** IAM actions required for the DeleteBucket API call. */
	static readonly DeleteBucket: string[] = ["s3:DeleteBucket"];
	/** IAM actions required for the DeleteBucketAnalyticsConfiguration API call. */
	static readonly DeleteBucketAnalyticsConfiguration: string[] = [
		"s3:PutAnalyticsConfiguration",
	];
	/** IAM actions required for the DeleteBucketCors API call. */
	static readonly DeleteBucketCors: string[] = ["s3:PutBucketCORS"];
	/** IAM actions required for the DeleteBucketEncryption API call. */
	static readonly DeleteBucketEncryption: string[] = [
		"s3:PutEncryptionConfiguration",
	];
	/** IAM actions required for the DeleteBucketIntelligentTieringConfiguration API call. */
	static readonly DeleteBucketIntelligentTieringConfiguration: string[] = [
		"s3:PutIntelligentTieringConfiguration",
	];
	/** IAM actions required for the DeleteBucketInventoryConfiguration API call. */
	static readonly DeleteBucketInventoryConfiguration: string[] = [
		"s3:PutInventoryConfiguration",
	];
	/** IAM actions required for the DeleteBucketLifecycle API call. */
	static readonly DeleteBucketLifecycle: string[] = [
		"s3:PutLifecycleConfiguration",
	];
	/** IAM actions required for the DeleteBucketLifecycleConfiguration API call. */
	static readonly DeleteBucketLifecycleConfiguration: string[] = [];
	/** IAM actions required for the DeleteBucketMetadataConfiguration API call. */
	static readonly DeleteBucketMetadataConfiguration: string[] = [
		"s3:DeleteBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the DeleteBucketMetadataTableConfiguration API call. */
	static readonly DeleteBucketMetadataTableConfiguration: string[] = [
		"s3:DeleteBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the DeleteBucketMetricsConfiguration API call. */
	static readonly DeleteBucketMetricsConfiguration: string[] = [
		"s3:PutMetricsConfiguration",
	];
	/** IAM actions required for the DeleteBucketOwnershipControls API call. */
	static readonly DeleteBucketOwnershipControls: string[] = [
		"s3:PutBucketOwnershipControls",
	];
	/** IAM actions required for the DeleteBucketPolicy API call. */
	static readonly DeleteBucketPolicy: string[] = ["s3:DeleteBucketPolicy"];
	/** IAM actions required for the DeleteBucketReplication API call. */
	static readonly DeleteBucketReplication: string[] = [
		"s3:PutReplicationConfiguration",
	];
	/** IAM actions required for the DeleteBucketTagging API call. */
	static readonly DeleteBucketTagging: string[] = ["s3:PutBucketTagging"];
	/** IAM actions required for the DeleteBucketWebsite API call. */
	static readonly DeleteBucketWebsite: string[] = ["s3:DeleteBucketWebsite"];
	/** IAM actions required for the DeleteJobTagging API call. */
	static readonly DeleteJobTagging: string[] = ["s3:DeleteJobTagging"];
	/** IAM actions required for the DeleteMultiRegionAccessPoint API call. */
	static readonly DeleteMultiRegionAccessPoint: string[] = [
		"s3:DeleteMultiRegionAccessPoint",
	];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DeleteObject: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:DeleteObject",
		"s3-object-lambda:DeleteObject",
		"s3:DeleteObjectVersion",
	];
	/** IAM actions required for the DeleteObjectAnnotation API call. */
	static readonly DeleteObjectAnnotation: string[] = [];
	/** IAM actions required for the DeleteObjectTagging API call. */
	static readonly DeleteObjectTagging: string[] = [
		"s3:DeleteObjectTagging",
		"s3-object-lambda:DeleteObjectTagging",
		"s3:DeleteObjectVersionTagging",
	];
	/** IAM actions required for the DeleteObjects API call. */
	static readonly DeleteObjects: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:DeleteObject",
		"s3:DeleteObjectVersion",
	];
	/** IAM actions required for the DeletePublicAccessBlock API call. */
	static readonly DeletePublicAccessBlock: string[] = [
		"s3:PutBucketPublicAccessBlock",
	];
	/** IAM actions required for the DeleteStorageLensConfiguration API call. */
	static readonly DeleteStorageLensConfiguration: string[] = [
		"s3:DeleteStorageLensConfiguration",
	];
	/** IAM actions required for the DeleteStorageLensConfigurationTagging API call. */
	static readonly DeleteStorageLensConfigurationTagging: string[] = [
		"s3:DeleteStorageLensConfigurationTagging",
	];
	/** IAM actions required for the DeleteStorageLensGroup API call. */
	static readonly DeleteStorageLensGroup: string[] = [
		"s3:DeleteStorageLensGroup",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["s3:DescribeJob"];
	/** IAM actions required for the DescribeMultiRegionAccessPointOperation API call. */
	static readonly DescribeMultiRegionAccessPointOperation: string[] = [
		"s3:DescribeMultiRegionAccessPointOperation",
	];
	/** IAM actions required for the DissociateAccessGrantsIdentityCenter API call. */
	static readonly DissociateAccessGrantsIdentityCenter: string[] = [
		"sso:DeleteApplication",
		"s3:DissociateAccessGrantsIdentityCenter",
	];
	/** IAM actions required for the GetAccessGrant API call. */
	static readonly opGetAccessGrant: string[] = ["s3:GetAccessGrant"];
	/** IAM actions required for the GetAccessGrantsInstance API call. */
	static readonly opGetAccessGrantsInstance: string[] = [
		"s3:GetAccessGrantsInstance",
	];
	/** IAM actions required for the GetAccessGrantsInstanceForPrefix API call. */
	static readonly opGetAccessGrantsInstanceForPrefix: string[] = [
		"s3:GetAccessGrantsInstanceForPrefix",
	];
	/** IAM actions required for the GetAccessGrantsInstanceResourcePolicy API call. */
	static readonly opGetAccessGrantsInstanceResourcePolicy: string[] = [
		"s3:GetAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the GetAccessGrantsLocation API call. */
	static readonly opGetAccessGrantsLocation: string[] = [
		"s3:GetAccessGrantsLocation",
	];
	/** IAM actions required for the GetAccessPoint API call. */
	static readonly opGetAccessPoint: string[] = ["s3:GetAccessPoint"];
	/** IAM actions required for the GetAccessPointConfigurationForObjectLambda API call. */
	static readonly opGetAccessPointConfigurationForObjectLambda: string[] = [
		"s3:GetAccessPointConfigurationForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointForObjectLambda API call. */
	static readonly opGetAccessPointForObjectLambda: string[] = [
		"s3:GetAccessPointForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointPolicy API call. */
	static readonly opGetAccessPointPolicy: string[] = [
		"s3:GetAccessPointPolicy",
	];
	/** IAM actions required for the GetAccessPointPolicyForObjectLambda API call. */
	static readonly opGetAccessPointPolicyForObjectLambda: string[] = [
		"s3:GetAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointPolicyStatus API call. */
	static readonly opGetAccessPointPolicyStatus: string[] = [
		"s3:GetAccessPointPolicyStatus",
	];
	/** IAM actions required for the GetAccessPointPolicyStatusForObjectLambda API call. */
	static readonly opGetAccessPointPolicyStatusForObjectLambda: string[] = [
		"s3:GetAccessPointPolicyStatusForObjectLambda",
	];
	/** IAM actions required for the GetAccessPointScope API call. */
	static readonly opGetAccessPointScope: string[] = [];
	/** IAM actions required for the GetBucket API call. */
	static readonly opGetBucket: string[] = [];
	/** IAM actions required for the GetBucketAbac API call. */
	static readonly opGetBucketAbac: string[] = [];
	/** IAM actions required for the GetBucketAccelerateConfiguration API call. */
	static readonly opGetBucketAccelerateConfiguration: string[] = [
		"s3:GetAccelerateConfiguration",
	];
	/** IAM actions required for the GetBucketAcl API call. */
	static readonly opGetBucketAcl: string[] = ["s3:GetBucketAcl"];
	/** IAM actions required for the GetBucketAnalyticsConfiguration API call. */
	static readonly opGetBucketAnalyticsConfiguration: string[] = [
		"s3:GetAnalyticsConfiguration",
	];
	/** IAM actions required for the GetBucketCors API call. */
	static readonly opGetBucketCors: string[] = ["s3:GetBucketCORS"];
	/** IAM actions required for the GetBucketEncryption API call. */
	static readonly opGetBucketEncryption: string[] = [
		"s3:GetEncryptionConfiguration",
	];
	/** IAM actions required for the GetBucketIntelligentTieringConfiguration API call. */
	static readonly opGetBucketIntelligentTieringConfiguration: string[] = [
		"s3:GetIntelligentTieringConfiguration",
	];
	/** IAM actions required for the GetBucketInventoryConfiguration API call. */
	static readonly opGetBucketInventoryConfiguration: string[] = [
		"s3:GetInventoryConfiguration",
	];
	/** IAM actions required for the GetBucketLifecycle API call. */
	static readonly opGetBucketLifecycle: string[] = [
		"s3:GetLifecycleConfiguration",
	];
	/** IAM actions required for the GetBucketLifecycleConfiguration API call. */
	static readonly opGetBucketLifecycleConfiguration: string[] = [
		"s3:GetLifecycleConfiguration",
		"s3express:GetLifecycleConfiguration",
	];
	/** IAM actions required for the GetBucketLocation API call. */
	static readonly opGetBucketLocation: string[] = ["s3:GetBucketLocation"];
	/** IAM actions required for the GetBucketLogging API call. */
	static readonly opGetBucketLogging: string[] = ["s3:GetBucketLogging"];
	/** IAM actions required for the GetBucketMetadataConfiguration API call. */
	static readonly opGetBucketMetadataConfiguration: string[] = [
		"s3:GetBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the GetBucketMetadataTableConfiguration API call. */
	static readonly opGetBucketMetadataTableConfiguration: string[] = [
		"s3:GetBucketMetadataTableConfiguration",
	];
	/** IAM actions required for the GetBucketMetricsConfiguration API call. */
	static readonly opGetBucketMetricsConfiguration: string[] = [
		"s3:GetMetricsConfiguration",
	];
	/** IAM actions required for the GetBucketNotification API call. */
	static readonly opGetBucketNotification: string[] = [
		"s3:GetBucketNotification",
	];
	/** IAM actions required for the GetBucketNotificationConfiguration API call. */
	static readonly opGetBucketNotificationConfiguration: string[] = [
		"s3:GetBucketNotification",
	];
	/** IAM actions required for the GetBucketOwnershipControls API call. */
	static readonly opGetBucketOwnershipControls: string[] = [
		"s3:GetBucketOwnershipControls",
	];
	/** IAM actions required for the GetBucketPolicy API call. */
	static readonly opGetBucketPolicy: string[] = ["s3:GetBucketPolicy"];
	/** IAM actions required for the GetBucketPolicyStatus API call. */
	static readonly opGetBucketPolicyStatus: string[] = [
		"s3:GetBucketPolicyStatus",
	];
	/** IAM actions required for the GetBucketReplication API call. */
	static readonly opGetBucketReplication: string[] = [
		"s3:GetReplicationConfiguration",
	];
	/** IAM actions required for the GetBucketRequestPayment API call. */
	static readonly opGetBucketRequestPayment: string[] = [
		"s3:GetBucketRequestPayment",
	];
	/** IAM actions required for the GetBucketTagging API call. */
	static readonly opGetBucketTagging: string[] = ["s3:GetBucketTagging"];
	/** IAM actions required for the GetBucketVersioning API call. */
	static readonly opGetBucketVersioning: string[] = ["s3:GetBucketVersioning"];
	/** IAM actions required for the GetBucketWebsite API call. */
	static readonly opGetBucketWebsite: string[] = ["s3:GetBucketWebsite"];
	/** IAM actions required for the GetDataAccess API call. */
	static readonly opGetDataAccess: string[] = ["s3:GetDataAccess"];
	/** IAM actions required for the GetJobTagging API call. */
	static readonly opGetJobTagging: string[] = ["s3:GetJobTagging"];
	/** IAM actions required for the GetMultiRegionAccessPoint API call. */
	static readonly opGetMultiRegionAccessPoint: string[] = [
		"s3:GetMultiRegionAccessPoint",
	];
	/** IAM actions required for the GetMultiRegionAccessPointPolicy API call. */
	static readonly opGetMultiRegionAccessPointPolicy: string[] = [
		"s3:GetMultiRegionAccessPointPolicy",
	];
	/** IAM actions required for the GetMultiRegionAccessPointPolicyStatus API call. */
	static readonly opGetMultiRegionAccessPointPolicyStatus: string[] = [
		"s3:GetMultiRegionAccessPointPolicyStatus",
	];
	/** IAM actions required for the GetMultiRegionAccessPointRoutes API call. */
	static readonly opGetMultiRegionAccessPointRoutes: string[] = [
		"s3:GetMultiRegionAccessPointRoutes",
	];
	/** IAM actions required for the GetObject API call. */
	static readonly opGetObject: string[] = [
		"s3:GetObject",
		"s3-object-lambda:GetObject",
		"s3:GetObjectLegalHold",
		"s3:GetObjectRetention",
		"s3:GetObjectTagging",
		"s3:GetObjectVersion",
	];
	/** IAM actions required for the GetObjectAcl API call. */
	static readonly opGetObjectAcl: string[] = [
		"s3:GetObjectAcl",
		"s3-object-lambda:GetObjectAcl",
		"s3:GetObjectVersionAcl",
	];
	/** IAM actions required for the GetObjectAnnotation API call. */
	static readonly opGetObjectAnnotation: string[] = [];
	/** IAM actions required for the GetObjectAttributes API call. */
	static readonly opGetObjectAttributes: string[] = [
		"s3:GetObject",
		"s3:GetObjectVersion",
	];
	/** IAM actions required for the GetObjectLegalHold API call. */
	static readonly opGetObjectLegalHold: string[] = [
		"s3:GetObjectLegalHold",
		"s3-object-lambda:GetObjectLegalHold",
	];
	/** IAM actions required for the GetObjectLockConfiguration API call. */
	static readonly opGetObjectLockConfiguration: string[] = [
		"s3:GetBucketObjectLockConfiguration",
	];
	/** IAM actions required for the GetObjectRetention API call. */
	static readonly opGetObjectRetention: string[] = [
		"s3:GetObjectRetention",
		"s3-object-lambda:GetObjectRetention",
	];
	/** IAM actions required for the GetObjectTagging API call. */
	static readonly opGetObjectTagging: string[] = [
		"s3:GetObjectTagging",
		"s3-object-lambda:GetObjectTagging",
		"s3:GetObjectVersionTagging",
	];
	/** IAM actions required for the GetObjectTorrent API call. */
	static readonly opGetObjectTorrent: string[] = ["s3:GetObject"];
	/** IAM actions required for the GetPublicAccessBlock API call. */
	static readonly opGetPublicAccessBlock: string[] = [
		"s3:GetBucketPublicAccessBlock",
	];
	/** IAM actions required for the GetStorageLensConfiguration API call. */
	static readonly opGetStorageLensConfiguration: string[] = [
		"s3:GetStorageLensConfiguration",
	];
	/** IAM actions required for the GetStorageLensConfigurationTagging API call. */
	static readonly opGetStorageLensConfigurationTagging: string[] = [
		"s3:GetStorageLensConfigurationTagging",
	];
	/** IAM actions required for the GetStorageLensGroup API call. */
	static readonly opGetStorageLensGroup: string[] = ["s3:GetStorageLensGroup"];
	/** IAM actions required for the HeadBucket API call. */
	static readonly HeadBucket: string[] = ["s3:ListBucket"];
	/** IAM actions required for the HeadObject API call. */
	static readonly HeadObject: string[] = [
		"s3:GetObject",
		"s3-object-lambda:GetObject",
		"s3:GetObjectLegalHold",
		"s3:GetObjectRetention",
	];
	/** IAM actions required for the ListAccessGrants API call. */
	static readonly ListAccessGrants: string[] = ["s3:ListAccessGrants"];
	/** IAM actions required for the ListAccessGrantsInstances API call. */
	static readonly ListAccessGrantsInstances: string[] = [
		"s3:ListAccessGrantsInstances",
	];
	/** IAM actions required for the ListAccessGrantsLocations API call. */
	static readonly ListAccessGrantsLocations: string[] = [
		"s3:ListAccessGrantsLocations",
	];
	/** IAM actions required for the ListAccessPoints API call. */
	static readonly ListAccessPoints: string[] = ["s3:ListAccessPoints"];
	/** IAM actions required for the ListAccessPointsForDirectoryBuckets API call. */
	static readonly ListAccessPointsForDirectoryBuckets: string[] = [];
	/** IAM actions required for the ListAccessPointsForObjectLambda API call. */
	static readonly ListAccessPointsForObjectLambda: string[] = [
		"s3:ListAccessPointsForObjectLambda",
	];
	/** IAM actions required for the ListBucketAnalyticsConfigurations API call. */
	static readonly ListBucketAnalyticsConfigurations: string[] = [
		"s3:GetAnalyticsConfiguration",
	];
	/** IAM actions required for the ListBucketIntelligentTieringConfigurations API call. */
	static readonly ListBucketIntelligentTieringConfigurations: string[] = [
		"s3:GetIntelligentTieringConfiguration",
	];
	/** IAM actions required for the ListBucketInventoryConfigurations API call. */
	static readonly ListBucketInventoryConfigurations: string[] = [
		"s3:GetInventoryConfiguration",
	];
	/** IAM actions required for the ListBucketMetricsConfigurations API call. */
	static readonly ListBucketMetricsConfigurations: string[] = [
		"s3:GetMetricsConfiguration",
	];
	/** IAM actions required for the ListBuckets API call. */
	static readonly ListBuckets: string[] = ["s3:ListAllMyBuckets"];
	/** IAM actions required for the ListCallerAccessGrants API call. */
	static readonly ListCallerAccessGrants: string[] = [
		"s3:ListCallerAccessGrants",
	];
	/** IAM actions required for the ListDirectoryBuckets API call. */
	static readonly ListDirectoryBuckets: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["s3:ListJobs"];
	/** IAM actions required for the ListMultiRegionAccessPoints API call. */
	static readonly ListMultiRegionAccessPoints: string[] = [
		"s3:ListMultiRegionAccessPoints",
	];
	/** IAM actions required for the ListMultipartUploads API call. */
	static readonly ListMultipartUploads: string[] = [
		"s3:ListBucketMultipartUploads",
		"s3-object-lambda:ListBucketMultipartUploads",
	];
	/** IAM actions required for the ListObjectAnnotations API call. */
	static readonly ListObjectAnnotations: string[] = [];
	/** IAM actions required for the ListObjectVersions API call. */
	static readonly ListObjectVersions: string[] = ["s3:ListBucketVersions"];
	/** IAM actions required for the ListObjects API call. */
	static readonly ListObjects: string[] = [
		"s3:GetObjectAcl",
		"s3:ListBucket",
		"s3-object-lambda:ListBucket",
	];
	/** IAM actions required for the ListObjectsV2 API call. */
	static readonly ListObjectsV2: string[] = [
		"s3:GetObjectAcl",
		"s3:ListBucket",
		"s3-object-lambda:ListBucket",
	];
	/** IAM actions required for the ListParts API call. */
	static readonly ListParts: string[] = [
		"s3:ListMultipartUploadParts",
		"s3-object-lambda:ListMultipartUploadParts",
	];
	/** IAM actions required for the ListRegionalBuckets API call. */
	static readonly ListRegionalBuckets: string[] = [];
	/** IAM actions required for the ListStorageLensConfigurations API call. */
	static readonly ListStorageLensConfigurations: string[] = [
		"s3:ListStorageLensConfigurations",
	];
	/** IAM actions required for the ListStorageLensGroups API call. */
	static readonly ListStorageLensGroups: string[] = [
		"s3:ListStorageLensGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["s3:ListTagsForResource"];
	/** IAM actions required for the PutAccessGrantsInstanceResourcePolicy API call. */
	static readonly PutAccessGrantsInstanceResourcePolicy: string[] = [
		"s3:PutAccessGrantsInstanceResourcePolicy",
	];
	/** IAM actions required for the PutAccessPointConfigurationForObjectLambda API call. */
	static readonly PutAccessPointConfigurationForObjectLambda: string[] = [
		"s3:PutAccessPointConfigurationForObjectLambda",
	];
	/** IAM actions required for the PutAccessPointPolicy API call. */
	static readonly PutAccessPointPolicy: string[] = ["s3:PutAccessPointPolicy"];
	/** IAM actions required for the PutAccessPointPolicyForObjectLambda API call. */
	static readonly PutAccessPointPolicyForObjectLambda: string[] = [
		"s3:PutAccessPointPolicyForObjectLambda",
	];
	/** IAM actions required for the PutAccessPointScope API call. */
	static readonly PutAccessPointScope: string[] = [];
	/** IAM actions required for the PutBucketAbac API call. */
	static readonly PutBucketAbac: string[] = [];
	/** IAM actions required for the PutBucketAccelerateConfiguration API call. */
	static readonly PutBucketAccelerateConfiguration: string[] = [
		"s3:PutAccelerateConfiguration",
	];
	/** IAM actions required for the PutBucketAcl API call. */
	static readonly PutBucketAcl: string[] = ["s3:PutBucketAcl"];
	/** IAM actions required for the PutBucketAnalyticsConfiguration API call. */
	static readonly PutBucketAnalyticsConfiguration: string[] = [
		"s3:PutAnalyticsConfiguration",
	];
	/** IAM actions required for the PutBucketCors API call. */
	static readonly PutBucketCors: string[] = ["s3:PutBucketCORS"];
	/** IAM actions required for the PutBucketEncryption API call. */
	static readonly PutBucketEncryption: string[] = [
		"s3:PutEncryptionConfiguration",
	];
	/** IAM actions required for the PutBucketIntelligentTieringConfiguration API call. */
	static readonly PutBucketIntelligentTieringConfiguration: string[] = [
		"s3:PutIntelligentTieringConfiguration",
	];
	/** IAM actions required for the PutBucketInventoryConfiguration API call. */
	static readonly PutBucketInventoryConfiguration: string[] = [
		"s3:PutInventoryConfiguration",
	];
	/** IAM actions required for the PutBucketLifecycle API call. */
	static readonly PutBucketLifecycle: string[] = [
		"s3:PutLifecycleConfiguration",
	];
	/** IAM actions required for the PutBucketLifecycleConfiguration API call. */
	static readonly PutBucketLifecycleConfiguration: string[] = [
		"s3:PutLifecycleConfiguration",
		"s3express:PutLifecycleConfiguration",
	];
	/** IAM actions required for the PutBucketLogging API call. */
	static readonly PutBucketLogging: string[] = ["s3:PutBucketLogging"];
	/** IAM actions required for the PutBucketMetricsConfiguration API call. */
	static readonly PutBucketMetricsConfiguration: string[] = [
		"s3:PutMetricsConfiguration",
	];
	/** IAM actions required for the PutBucketNotification API call. */
	static readonly PutBucketNotification: string[] = [];
	/** IAM actions required for the PutBucketNotificationConfiguration API call. */
	static readonly PutBucketNotificationConfiguration: string[] = [
		"s3:PutBucketNotification",
	];
	/** IAM actions required for the PutBucketOwnershipControls API call. */
	static readonly PutBucketOwnershipControls: string[] = [
		"s3:PutBucketOwnershipControls",
	];
	/** IAM actions required for the PutBucketPolicy API call. */
	static readonly PutBucketPolicy: string[] = ["s3:PutBucketPolicy"];
	/** IAM actions required for the PutBucketReplication API call. */
	static readonly PutBucketReplication: string[] = [
		"iam:PassRole",
		"s3:PutReplicationConfiguration",
	];
	/** IAM actions required for the PutBucketRequestPayment API call. */
	static readonly PutBucketRequestPayment: string[] = [
		"s3:PutBucketRequestPayment",
	];
	/** IAM actions required for the PutBucketTagging API call. */
	static readonly PutBucketTagging: string[] = ["s3:PutBucketTagging"];
	/** IAM actions required for the PutBucketVersioning API call. */
	static readonly PutBucketVersioning: string[] = ["s3:PutBucketVersioning"];
	/** IAM actions required for the PutBucketWebsite API call. */
	static readonly PutBucketWebsite: string[] = ["s3:PutBucketWebsite"];
	/** IAM actions required for the PutJobTagging API call. */
	static readonly PutJobTagging: string[] = ["s3:PutJobTagging"];
	/** IAM actions required for the PutMultiRegionAccessPointPolicy API call. */
	static readonly PutMultiRegionAccessPointPolicy: string[] = [
		"s3:PutMultiRegionAccessPointPolicy",
	];
	/** IAM actions required for the PutObject API call. */
	static readonly PutObject: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
		"s3:PutObjectAcl",
		"s3:PutObjectLegalHold",
		"s3:PutObjectRetention",
		"s3:PutObjectTagging",
	];
	/** IAM actions required for the PutObjectAcl API call. */
	static readonly PutObjectAcl: string[] = [
		"s3:PutObjectAcl",
		"s3-object-lambda:PutObjectAcl",
		"s3:PutObjectVersionAcl",
	];
	/** IAM actions required for the PutObjectAnnotation API call. */
	static readonly PutObjectAnnotation: string[] = [];
	/** IAM actions required for the PutObjectLegalHold API call. */
	static readonly PutObjectLegalHold: string[] = [
		"s3:PutObjectLegalHold",
		"s3-object-lambda:PutObjectLegalHold",
	];
	/** IAM actions required for the PutObjectLockConfiguration API call. */
	static readonly PutObjectLockConfiguration: string[] = [
		"s3:PutBucketObjectLockConfiguration",
	];
	/** IAM actions required for the PutObjectRetention API call. */
	static readonly PutObjectRetention: string[] = [
		"s3:BypassGovernanceRetention",
		"s3:PutObjectRetention",
		"s3-object-lambda:PutObjectRetention",
	];
	/** IAM actions required for the PutObjectTagging API call. */
	static readonly PutObjectTagging: string[] = [
		"s3:PutObjectTagging",
		"s3-object-lambda:PutObjectTagging",
		"s3:PutObjectVersionTagging",
	];
	/** IAM actions required for the PutPublicAccessBlock API call. */
	static readonly PutPublicAccessBlock: string[] = [
		"s3:PutBucketPublicAccessBlock",
	];
	/** IAM actions required for the PutStorageLensConfiguration API call. */
	static readonly PutStorageLensConfiguration: string[] = [
		"s3:PutStorageLensConfiguration",
	];
	/** IAM actions required for the PutStorageLensConfigurationTagging API call. */
	static readonly PutStorageLensConfigurationTagging: string[] = [
		"s3:PutStorageLensConfigurationTagging",
	];
	/** IAM actions required for the RenameObject API call. */
	static readonly RenameObject: string[] = [];
	/** IAM actions required for the RestoreObject API call. */
	static readonly RestoreObject: string[] = [
		"s3:RestoreObject",
		"s3-object-lambda:RestoreObject",
	];
	/** IAM actions required for the SelectObjectContent API call. */
	static readonly SelectObjectContent: string[] = ["s3:GetObject"];
	/** IAM actions required for the SubmitMultiRegionAccessPointRoutes API call. */
	static readonly SubmitMultiRegionAccessPointRoutes: string[] = [
		"s3:SubmitMultiRegionAccessPointRoutes",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["s3:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["s3:UntagResource"];
	/** IAM actions required for the UpdateAccessGrantsLocation API call. */
	static readonly UpdateAccessGrantsLocation: string[] = [
		"s3:UpdateAccessGrantsLocation",
	];
	/** IAM actions required for the UpdateBucketMetadataAnnotationTableConfiguration API call. */
	static readonly UpdateBucketMetadataAnnotationTableConfiguration: string[] =
		[];
	/** IAM actions required for the UpdateBucketMetadataInventoryTableConfiguration API call. */
	static readonly UpdateBucketMetadataInventoryTableConfiguration: string[] = [
		"s3tables:CreateNamespace",
		"s3tables:CreateTable",
		"s3tables:CreateTableBucket",
		"s3tables:GetTable",
		"s3tables:PutTableEncryption",
		"s3tables:PutTablePolicy",
		"s3:UpdateBucketMetadataInventoryTableConfiguration",
	];
	/** IAM actions required for the UpdateBucketMetadataJournalTableConfiguration API call. */
	static readonly UpdateBucketMetadataJournalTableConfiguration: string[] = [
		"s3:UpdateBucketMetadataJournalTableConfiguration",
	];
	/** IAM actions required for the UpdateJobPriority API call. */
	static readonly UpdateJobPriority: string[] = ["s3:UpdateJobPriority"];
	/** IAM actions required for the UpdateJobStatus API call. */
	static readonly UpdateJobStatus: string[] = ["s3:UpdateJobStatus"];
	/** IAM actions required for the UpdateObjectEncryption API call. */
	static readonly UpdateObjectEncryption: string[] = [];
	/** IAM actions required for the UpdateStorageLensGroup API call. */
	static readonly UpdateStorageLensGroup: string[] = [
		"s3:UpdateStorageLensGroup",
	];
	/** IAM actions required for the UploadPart API call. */
	static readonly UploadPart: string[] = [
		"s3:PutObject",
		"s3-object-lambda:PutObject",
	];
	/** IAM actions required for the UploadPartCopy API call. */
	static readonly UploadPartCopy: string[] = [
		"s3:GetObject",
		"s3:GetObjectVersion",
		"s3:PutObject",
	];
	/** IAM actions required for the WriteGetObjectResponse API call. */
	static readonly WriteGetObjectResponse: string[] = [];
}

/**
 * Condition key constants and builders for s3.
 */
export class S3Conditions {
	/** Condition keys applicable to the AbortMultipartUpload action. */
	static readonly AbortMultipartUploadConditionKeys: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the AllowVendedLogDeliveryForResource action. */
	static readonly AllowVendedLogDeliveryForResourceConditionKeys: string[] = [
		"s3:deliverySourceArn",
		"s3:logType",
		"s3:resourceArnBeingAuthorized",
	];
	/** Condition keys applicable to the AssociateAccessGrantsIdentityCenter action. */
	static readonly AssociateAccessGrantsIdentityCenterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the BypassGovernanceRetention action. */
	static readonly BypassGovernanceRetentionConditionKeys: string[] = [
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
	static readonly CreateAccessGrantConditionKeys: string[] = [
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
	static readonly CreateAccessGrantsInstanceConditionKeys: string[] = [
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
	static readonly CreateAccessGrantsLocationConditionKeys: string[] = [
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
	static readonly CreateAccessPointConditionKeys: string[] = [
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
	static readonly CreateAccessPointForObjectLambdaConditionKeys: string[] = [
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
	static readonly CreateBucketConditionKeys: string[] = [
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
	static readonly CreateBucketMetadataTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
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
	static readonly CreateMultiRegionAccessPointConditionKeys: string[] = [
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
	static readonly CreateStorageLensGroupConditionKeys: string[] = [
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
	static readonly DeleteAccessGrantConditionKeys: string[] = [
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
	static readonly DeleteAccessGrantsInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteAccessGrantsInstanceResourcePolicy action. */
	static readonly DeleteAccessGrantsInstanceResourcePolicyConditionKeys: string[] =
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
	static readonly DeleteAccessGrantsLocationConditionKeys: string[] = [
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
	static readonly DeleteAccessPointConditionKeys: string[] = [
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
	static readonly DeleteAccessPointForObjectLambdaConditionKeys: string[] = [
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
	static readonly DeleteAccessPointPolicyConditionKeys: string[] = [
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
	static readonly DeleteAccessPointPolicyForObjectLambdaConditionKeys: string[] =
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
	static readonly DeleteBucketConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketMetadataTableConfiguration action. */
	static readonly DeleteBucketMetadataTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteBucketPolicy action. */
	static readonly DeleteBucketPolicyConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteBucketWebsite action. */
	static readonly DeleteBucketWebsiteConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteJobTagging action. */
	static readonly DeleteJobTaggingConditionKeys: string[] = [
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
	static readonly DeleteMultiRegionAccessPointConditionKeys: string[] = [
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
	static readonly DeleteObjectConditionKeys: string[] = [
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
	static readonly DeleteObjectAnnotationConditionKeys: string[] = [
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
	static readonly DeleteObjectTaggingConditionKeys: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteObjectVersion action. */
	static readonly DeleteObjectVersionConditionKeys: string[] = [
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
	static readonly DeleteObjectVersionAnnotationConditionKeys: string[] = [
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
	static readonly DeleteObjectVersionTaggingConditionKeys: string[] = [
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
	static readonly DeleteStorageLensConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DeleteStorageLensConfigurationTagging action. */
	static readonly DeleteStorageLensConfigurationTaggingConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the DeleteStorageLensGroup action. */
	static readonly DeleteStorageLensGroupConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DescribeJob action. */
	static readonly DescribeJobConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the DescribeMultiRegionAccessPointOperation action. */
	static readonly DescribeMultiRegionAccessPointOperationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the DissociateAccessGrantsIdentityCenter action. */
	static readonly DissociateAccessGrantsIdentityCenterConditionKeys: string[] =
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
	static readonly actionGetAccelerateConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessGrant action. */
	static readonly actionGetAccessGrantConditionKeys: string[] = [
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
	static readonly actionGetAccessGrantsInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAccessGrantsInstanceForPrefix action. */
	static readonly actionGetAccessGrantsInstanceForPrefixConditionKeys: string[] =
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
	static readonly actionGetAccessGrantsInstanceResourcePolicyConditionKeys: string[] =
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
	static readonly actionGetAccessGrantsLocationConditionKeys: string[] = [
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
	static readonly actionGetAccessPointConditionKeys: string[] = [
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
	static readonly actionGetAccessPointConfigurationForObjectLambdaConditionKeys: string[] =
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
	static readonly actionGetAccessPointForObjectLambdaConditionKeys: string[] = [
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
	static readonly actionGetAccessPointPolicyConditionKeys: string[] = [
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
	static readonly actionGetAccessPointPolicyForObjectLambdaConditionKeys: string[] =
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
	static readonly actionGetAccessPointPolicyStatusConditionKeys: string[] = [
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
	static readonly actionGetAccessPointPolicyStatusForObjectLambdaConditionKeys: string[] =
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
	static readonly actionGetAccountPublicAccessBlockConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetAnalyticsConfiguration action. */
	static readonly actionGetAnalyticsConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketAbac action. */
	static readonly actionGetBucketAbacConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketAcl action. */
	static readonly actionGetBucketAclConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketCORS action. */
	static readonly actionGetBucketCORSConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketLocation action. */
	static readonly actionGetBucketLocationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketLogging action. */
	static readonly actionGetBucketLoggingConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketMetadataTableConfiguration action. */
	static readonly actionGetBucketMetadataTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetBucketNotification action. */
	static readonly actionGetBucketNotificationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketObjectLockConfiguration action. */
	static readonly actionGetBucketObjectLockConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:signatureversion",
		];
	/** Condition keys applicable to the GetBucketOwnershipControls action. */
	static readonly actionGetBucketOwnershipControlsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicy action. */
	static readonly actionGetBucketPolicyConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPolicyStatus action. */
	static readonly actionGetBucketPolicyStatusConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketPublicAccessBlock action. */
	static readonly actionGetBucketPublicAccessBlockConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketRequestPayment action. */
	static readonly actionGetBucketRequestPaymentConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketTagging action. */
	static readonly actionGetBucketTaggingConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketVersioning action. */
	static readonly actionGetBucketVersioningConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetBucketWebsite action. */
	static readonly actionGetBucketWebsiteConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetDataAccess action. */
	static readonly actionGetDataAccessConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetEncryptionConfiguration action. */
	static readonly actionGetEncryptionConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetIntelligentTieringConfiguration action. */
	static readonly actionGetIntelligentTieringConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetInventoryConfiguration action. */
	static readonly actionGetInventoryConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetJobTagging action. */
	static readonly actionGetJobTaggingConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetLifecycleConfiguration action. */
	static readonly actionGetLifecycleConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetMetricsConfiguration action. */
	static readonly actionGetMetricsConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetMultiRegionAccessPoint action. */
	static readonly actionGetMultiRegionAccessPointConditionKeys: string[] = [
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
	static readonly actionGetMultiRegionAccessPointPolicyConditionKeys: string[] =
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
	static readonly actionGetMultiRegionAccessPointPolicyStatusConditionKeys: string[] =
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
	static readonly actionGetMultiRegionAccessPointRoutesConditionKeys: string[] =
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
	static readonly actionGetObjectConditionKeys: string[] = [
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
	static readonly actionGetObjectAclConditionKeys: string[] = [
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
	static readonly actionGetObjectAnnotationConditionKeys: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectAttributes action. */
	static readonly actionGetObjectAttributesConditionKeys: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectLegalHold action. */
	static readonly actionGetObjectLegalHoldConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectRetention action. */
	static readonly actionGetObjectRetentionConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectTagging action. */
	static readonly actionGetObjectTaggingConditionKeys: string[] = [
		"s3:ExistingObjectTag/<key>",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectTorrent action. */
	static readonly actionGetObjectTorrentConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetObjectVersion action. */
	static readonly actionGetObjectVersionConditionKeys: string[] = [
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
	static readonly actionGetObjectVersionAclConditionKeys: string[] = [
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
	static readonly actionGetObjectVersionAnnotationConditionKeys: string[] = [
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
	static readonly actionGetObjectVersionAnnotationForReplicationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetObjectVersionAttributes action. */
	static readonly actionGetObjectVersionAttributesConditionKeys: string[] = [
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
	static readonly actionGetObjectVersionForReplicationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetObjectVersionTagging action. */
	static readonly actionGetObjectVersionTaggingConditionKeys: string[] = [
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
	static readonly actionGetObjectVersionTorrentConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:versionid",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetReplicationConfiguration action. */
	static readonly actionGetReplicationConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensConfiguration action. */
	static readonly actionGetStorageLensConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensConfigurationTagging action. */
	static readonly actionGetStorageLensConfigurationTaggingConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the GetStorageLensDashboard action. */
	static readonly actionGetStorageLensDashboardConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the GetStorageLensGroup action. */
	static readonly actionGetStorageLensGroupConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the InitiateReplication action. */
	static readonly InitiateReplicationConditionKeys: string[] = [
		"s3:ResourceAccount",
	];
	/** Condition keys applicable to the ListAccessGrants action. */
	static readonly ListAccessGrantsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessGrantsInstances action. */
	static readonly ListAccessGrantsInstancesConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessGrantsLocations action. */
	static readonly ListAccessGrantsLocationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPoints action. */
	static readonly ListAccessPointsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAccessPointsForObjectLambda action. */
	static readonly ListAccessPointsForObjectLambdaConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListAllMyBuckets action. */
	static readonly ListAllMyBucketsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListBucket action. */
	static readonly ListBucketConditionKeys: string[] = [
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
	static readonly ListBucketMultipartUploadsConditionKeys: string[] = [
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
	static readonly ListBucketVersionsConditionKeys: string[] = [
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
	static readonly ListCallerAccessGrantsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListJobs action. */
	static readonly ListJobsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListMultiRegionAccessPoints action. */
	static readonly ListMultiRegionAccessPointsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the ListMultipartUploadParts action. */
	static readonly ListMultipartUploadPartsConditionKeys: string[] = [
		"s3:AccessGrantsInstanceArn",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListObjectAnnotations action. */
	static readonly ListObjectAnnotationsConditionKeys: string[] = [
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
	static readonly ListObjectVersionAnnotationsConditionKeys: string[] = [
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
	static readonly ListStorageLensConfigurationsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListStorageLensGroups action. */
	static readonly ListStorageLensGroupsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ObjectOwnerOverrideToBucketOwner action. */
	static readonly ObjectOwnerOverrideToBucketOwnerConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PauseReplication action. */
	static readonly PauseReplicationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:destinationRegion",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccelerateConfiguration action. */
	static readonly PutAccelerateConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessGrantsInstanceResourcePolicy action. */
	static readonly PutAccessGrantsInstanceResourcePolicyConditionKeys: string[] =
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
	static readonly PutAccessPointConfigurationForObjectLambdaConditionKeys: string[] =
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
	static readonly PutAccessPointPolicyConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAccessPointPolicyForObjectLambda action. */
	static readonly PutAccessPointPolicyForObjectLambdaConditionKeys: string[] = [
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
	static readonly PutAccountPublicAccessBlockConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutAnalyticsConfiguration action. */
	static readonly PutAnalyticsConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketAbac action. */
	static readonly PutBucketAbacConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketAcl action. */
	static readonly PutBucketAclConditionKeys: string[] = [
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
	static readonly PutBucketCORSConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketLogging action. */
	static readonly PutBucketLoggingConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketNotification action. */
	static readonly PutBucketNotificationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketObjectLockConfiguration action. */
	static readonly PutBucketObjectLockConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
	];
	/** Condition keys applicable to the PutBucketOwnershipControls action. */
	static readonly PutBucketOwnershipControlsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPolicy action. */
	static readonly PutBucketPolicyConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketPublicAccessBlock action. */
	static readonly PutBucketPublicAccessBlockConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketRequestPayment action. */
	static readonly PutBucketRequestPaymentConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketTagging action. */
	static readonly PutBucketTaggingConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketVersioning action. */
	static readonly PutBucketVersioningConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutBucketWebsite action. */
	static readonly PutBucketWebsiteConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutEncryptionConfiguration action. */
	static readonly PutEncryptionConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutIntelligentTieringConfiguration action. */
	static readonly PutIntelligentTieringConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutInventoryConfiguration action. */
	static readonly PutInventoryConfigurationConditionKeys: string[] = [
		"s3:InventoryAccessibleOptionalFields",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutJobTagging action. */
	static readonly PutJobTaggingConditionKeys: string[] = [
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
	static readonly PutLifecycleConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutMetricsConfiguration action. */
	static readonly PutMetricsConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutMultiRegionAccessPointPolicy action. */
	static readonly PutMultiRegionAccessPointPolicyConditionKeys: string[] = [
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
	static readonly PutObjectConditionKeys: string[] = [
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
	static readonly PutObjectAclConditionKeys: string[] = [
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
	static readonly PutObjectAnnotationConditionKeys: string[] = [
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
	static readonly PutObjectLegalHoldConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:object-lock-legal-hold",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutObjectRetention action. */
	static readonly PutObjectRetentionConditionKeys: string[] = [
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
	static readonly PutObjectTaggingConditionKeys: string[] = [
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
	static readonly PutObjectVersionAclConditionKeys: string[] = [
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
	static readonly PutObjectVersionAnnotationConditionKeys: string[] = [
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
	static readonly PutObjectVersionTaggingConditionKeys: string[] = [
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
	static readonly PutReplicationConfigurationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:isReplicationPauseRequest",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the PutStorageLensConfiguration action. */
	static readonly PutStorageLensConfigurationConditionKeys: string[] = [
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
	static readonly PutStorageLensConfigurationTaggingConditionKeys: string[] = [
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
	static readonly ReplicateDeleteConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateObject action. */
	static readonly ReplicateObjectConditionKeys: string[] = [
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
	static readonly ReplicateObjectAnnotationConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the ReplicateTags action. */
	static readonly ReplicateTagsConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the RestoreObject action. */
	static readonly RestoreObjectConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the SubmitMultiRegionAccessPointRoutes action. */
	static readonly SubmitMultiRegionAccessPointRoutesConditionKeys: string[] = [
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
	static readonly TagResourceConditionKeys: string[] = [
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
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];
	/** Condition keys applicable to the UpdateAccessGrantsLocation action. */
	static readonly UpdateAccessGrantsLocationConditionKeys: string[] = [
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
	static readonly UpdateBucketMetadataAnnotationTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateBucketMetadataInventoryTableConfiguration action. */
	static readonly UpdateBucketMetadataInventoryTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateBucketMetadataJournalTableConfiguration action. */
	static readonly UpdateBucketMetadataJournalTableConfigurationConditionKeys: string[] =
		[
			"s3:ResourceAccount",
			"s3:TlsVersion",
			"s3:authType",
			"s3:signatureAge",
			"s3:signatureversion",
			"s3:x-amz-content-sha256",
		];
	/** Condition keys applicable to the UpdateJobPriority action. */
	static readonly UpdateJobPriorityConditionKeys: string[] = [
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
	static readonly UpdateJobStatusConditionKeys: string[] = [
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
	static readonly UpdateObjectEncryptionConditionKeys: string[] = [
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
	static readonly UpdateStorageLensGroupConditionKeys: string[] = [
		"s3:ResourceAccount",
		"s3:TlsVersion",
		"s3:authType",
		"s3:signatureAge",
		"s3:signatureversion",
		"s3:x-amz-content-sha256",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
