// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/snowball.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the snowball service.
 */
export class SnowballActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "snowball";

	/** [Write] snowball:CancelCluster */
	static readonly CancelCluster = "snowball:CancelCluster";
	/** [Write] snowball:CancelJob */
	static readonly CancelJob = "snowball:CancelJob";
	/** [Write] snowball:CreateAddress */
	static readonly CreateAddress = "snowball:CreateAddress";
	/** [Write] snowball:CreateCluster */
	static readonly CreateCluster = "snowball:CreateCluster";
	/** [Write] snowball:CreateJob */
	static readonly CreateJob = "snowball:CreateJob";
	/** [Write] snowball:CreateLongTermPricing */
	static readonly CreateLongTermPricing = "snowball:CreateLongTermPricing";
	/** [Write] snowball:CreateReturnShippingLabel */
	static readonly CreateReturnShippingLabel =
		"snowball:CreateReturnShippingLabel";
	/** [Read] snowball:DescribeAddress */
	static readonly DescribeAddress = "snowball:DescribeAddress";
	/** [List] snowball:DescribeAddresses */
	static readonly DescribeAddresses = "snowball:DescribeAddresses";
	/** [Read] snowball:DescribeCluster */
	static readonly DescribeCluster = "snowball:DescribeCluster";
	/** [Read] snowball:DescribeJob */
	static readonly DescribeJob = "snowball:DescribeJob";
	/** [Read] snowball:DescribeReturnShippingLabel */
	static readonly DescribeReturnShippingLabel =
		"snowball:DescribeReturnShippingLabel";
	/** [Read] snowball:GetJobManifest */
	static readonly actionGetJobManifest = "snowball:GetJobManifest";
	/** [Read] snowball:GetJobUnlockCode */
	static readonly actionGetJobUnlockCode = "snowball:GetJobUnlockCode";
	/** [Read] snowball:GetSnowballUsage */
	static readonly actionGetSnowballUsage = "snowball:GetSnowballUsage";
	/** [Read] snowball:GetSoftwareUpdates */
	static readonly actionGetSoftwareUpdates = "snowball:GetSoftwareUpdates";
	/** [List] snowball:ListClusterJobs */
	static readonly ListClusterJobs = "snowball:ListClusterJobs";
	/** [List] snowball:ListClusters */
	static readonly ListClusters = "snowball:ListClusters";
	/** [List] snowball:ListCompatibleImages */
	static readonly ListCompatibleImages = "snowball:ListCompatibleImages";
	/** [List] snowball:ListJobs */
	static readonly ListJobs = "snowball:ListJobs";
	/** [Read] snowball:ListLongTermPricing */
	static readonly ListLongTermPricing = "snowball:ListLongTermPricing";
	/** [List] snowball:ListPickupLocations */
	static readonly ListPickupLocations = "snowball:ListPickupLocations";
	/** [List] snowball:ListServiceVersions */
	static readonly ListServiceVersions = "snowball:ListServiceVersions";
	/** [Write] snowball:UpdateCluster */
	static readonly UpdateCluster = "snowball:UpdateCluster";
	/** [Write] snowball:UpdateJob */
	static readonly UpdateJob = "snowball:UpdateJob";
	/** [Write] snowball:UpdateJobShipmentState */
	static readonly UpdateJobShipmentState = "snowball:UpdateJobShipmentState";
	/** [Write] snowball:UpdateLongTermPricing */
	static readonly UpdateLongTermPricing = "snowball:UpdateLongTermPricing";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SnowballActions.DescribeAddress,
		SnowballActions.DescribeCluster,
		SnowballActions.DescribeJob,
		SnowballActions.DescribeReturnShippingLabel,
		SnowballActions.actionGetJobManifest,
		SnowballActions.actionGetJobUnlockCode,
		SnowballActions.actionGetSnowballUsage,
		SnowballActions.actionGetSoftwareUpdates,
		SnowballActions.ListLongTermPricing,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SnowballActions.CancelCluster,
		SnowballActions.CancelJob,
		SnowballActions.CreateAddress,
		SnowballActions.CreateCluster,
		SnowballActions.CreateJob,
		SnowballActions.CreateLongTermPricing,
		SnowballActions.CreateReturnShippingLabel,
		SnowballActions.UpdateCluster,
		SnowballActions.UpdateJob,
		SnowballActions.UpdateJobShipmentState,
		SnowballActions.UpdateLongTermPricing,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SnowballActions.DescribeAddresses,
		SnowballActions.ListClusterJobs,
		SnowballActions.ListClusters,
		SnowballActions.ListCompatibleImages,
		SnowballActions.ListJobs,
		SnowballActions.ListPickupLocations,
		SnowballActions.ListServiceVersions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for snowball.
 */
export class SnowballOperations {
	/** IAM actions required for the CancelCluster API call. */
	static readonly CancelCluster: string[] = ["snowball:CancelCluster"];
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["snowball:CancelJob"];
	/** IAM actions required for the CreateAddress API call. */
	static readonly CreateAddress: string[] = ["snowball:CreateAddress"];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"snowball:CreateCluster",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = ["snowball:CreateJob", "iam:PassRole"];
	/** IAM actions required for the CreateLongTermPricing API call. */
	static readonly CreateLongTermPricing: string[] = [
		"snowball:CreateLongTermPricing",
	];
	/** IAM actions required for the CreateReturnShippingLabel API call. */
	static readonly CreateReturnShippingLabel: string[] = [
		"snowball:CreateReturnShippingLabel",
	];
	/** IAM actions required for the DescribeAddress API call. */
	static readonly DescribeAddress: string[] = ["snowball:DescribeAddress"];
	/** IAM actions required for the DescribeAddresses API call. */
	static readonly DescribeAddresses: string[] = ["snowball:DescribeAddresses"];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = ["snowball:DescribeCluster"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["snowball:DescribeJob"];
	/** IAM actions required for the DescribeReturnShippingLabel API call. */
	static readonly DescribeReturnShippingLabel: string[] = [
		"snowball:DescribeReturnShippingLabel",
	];
	/** IAM actions required for the GetJobManifest API call. */
	static readonly opGetJobManifest: string[] = ["snowball:GetJobManifest"];
	/** IAM actions required for the GetJobUnlockCode API call. */
	static readonly opGetJobUnlockCode: string[] = ["snowball:GetJobUnlockCode"];
	/** IAM actions required for the GetSnowballUsage API call. */
	static readonly opGetSnowballUsage: string[] = ["snowball:GetSnowballUsage"];
	/** IAM actions required for the GetSoftwareUpdates API call. */
	static readonly opGetSoftwareUpdates: string[] = [
		"snowball:GetSoftwareUpdates",
	];
	/** IAM actions required for the ListClusterJobs API call. */
	static readonly ListClusterJobs: string[] = ["snowball:ListClusterJobs"];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["snowball:ListClusters"];
	/** IAM actions required for the ListCompatibleImages API call. */
	static readonly ListCompatibleImages: string[] = [
		"snowball:ListCompatibleImages",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["snowball:ListJobs"];
	/** IAM actions required for the ListLongTermPricing API call. */
	static readonly ListLongTermPricing: string[] = [
		"snowball:ListLongTermPricing",
	];
	/** IAM actions required for the ListPickupLocations API call. */
	static readonly ListPickupLocations: string[] = [
		"snowball:ListPickupLocations",
	];
	/** IAM actions required for the ListServiceVersions API call. */
	static readonly ListServiceVersions: string[] = [
		"snowball:ListServiceVersions",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = [
		"iam:PassRole",
		"snowball:UpdateCluster",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UpdateJob: string[] = ["iam:PassRole", "snowball:UpdateJob"];
	/** IAM actions required for the UpdateJobShipmentState API call. */
	static readonly UpdateJobShipmentState: string[] = [
		"snowball:UpdateJobShipmentState",
	];
	/** IAM actions required for the UpdateLongTermPricing API call. */
	static readonly UpdateLongTermPricing: string[] = [
		"snowball:UpdateLongTermPricing",
	];
}
