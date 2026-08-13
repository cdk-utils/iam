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
	static readonly CANCEL_CLUSTER = "snowball:CancelCluster";
	/** [Write] snowball:CancelJob */
	static readonly CANCEL_JOB = "snowball:CancelJob";
	/** [Write] snowball:CreateAddress */
	static readonly CREATE_ADDRESS = "snowball:CreateAddress";
	/** [Write] snowball:CreateCluster */
	static readonly CREATE_CLUSTER = "snowball:CreateCluster";
	/** [Write] snowball:CreateJob */
	static readonly CREATE_JOB = "snowball:CreateJob";
	/** [Write] snowball:CreateLongTermPricing */
	static readonly CREATE_LONG_TERM_PRICING = "snowball:CreateLongTermPricing";
	/** [Write] snowball:CreateReturnShippingLabel */
	static readonly CREATE_RETURN_SHIPPING_LABEL =
		"snowball:CreateReturnShippingLabel";
	/** [Read] snowball:DescribeAddress */
	static readonly DESCRIBE_ADDRESS = "snowball:DescribeAddress";
	/** [List] snowball:DescribeAddresses */
	static readonly DESCRIBE_ADDRESSES = "snowball:DescribeAddresses";
	/** [Read] snowball:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "snowball:DescribeCluster";
	/** [Read] snowball:DescribeJob */
	static readonly DESCRIBE_JOB = "snowball:DescribeJob";
	/** [Read] snowball:DescribeReturnShippingLabel */
	static readonly DESCRIBE_RETURN_SHIPPING_LABEL =
		"snowball:DescribeReturnShippingLabel";
	/** [Read] snowball:GetJobManifest */
	static readonly GET_JOB_MANIFEST = "snowball:GetJobManifest";
	/** [Read] snowball:GetJobUnlockCode */
	static readonly GET_JOB_UNLOCK_CODE = "snowball:GetJobUnlockCode";
	/** [Read] snowball:GetSnowballUsage */
	static readonly GET_SNOWBALL_USAGE = "snowball:GetSnowballUsage";
	/** [Read] snowball:GetSoftwareUpdates */
	static readonly GET_SOFTWARE_UPDATES = "snowball:GetSoftwareUpdates";
	/** [List] snowball:ListClusterJobs */
	static readonly LIST_CLUSTER_JOBS = "snowball:ListClusterJobs";
	/** [List] snowball:ListClusters */
	static readonly LIST_CLUSTERS = "snowball:ListClusters";
	/** [List] snowball:ListCompatibleImages */
	static readonly LIST_COMPATIBLE_IMAGES = "snowball:ListCompatibleImages";
	/** [List] snowball:ListJobs */
	static readonly LIST_JOBS = "snowball:ListJobs";
	/** [Read] snowball:ListLongTermPricing */
	static readonly LIST_LONG_TERM_PRICING = "snowball:ListLongTermPricing";
	/** [List] snowball:ListPickupLocations */
	static readonly LIST_PICKUP_LOCATIONS = "snowball:ListPickupLocations";
	/** [List] snowball:ListServiceVersions */
	static readonly LIST_SERVICE_VERSIONS = "snowball:ListServiceVersions";
	/** [Write] snowball:UpdateCluster */
	static readonly UPDATE_CLUSTER = "snowball:UpdateCluster";
	/** [Write] snowball:UpdateJob */
	static readonly UPDATE_JOB = "snowball:UpdateJob";
	/** [Write] snowball:UpdateJobShipmentState */
	static readonly UPDATE_JOB_SHIPMENT_STATE = "snowball:UpdateJobShipmentState";
	/** [Write] snowball:UpdateLongTermPricing */
	static readonly UPDATE_LONG_TERM_PRICING = "snowball:UpdateLongTermPricing";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SnowballActions.DESCRIBE_ADDRESS,
		SnowballActions.DESCRIBE_CLUSTER,
		SnowballActions.DESCRIBE_JOB,
		SnowballActions.DESCRIBE_RETURN_SHIPPING_LABEL,
		SnowballActions.GET_JOB_MANIFEST,
		SnowballActions.GET_JOB_UNLOCK_CODE,
		SnowballActions.GET_SNOWBALL_USAGE,
		SnowballActions.GET_SOFTWARE_UPDATES,
		SnowballActions.LIST_LONG_TERM_PRICING,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SnowballActions.CANCEL_CLUSTER,
		SnowballActions.CANCEL_JOB,
		SnowballActions.CREATE_ADDRESS,
		SnowballActions.CREATE_CLUSTER,
		SnowballActions.CREATE_JOB,
		SnowballActions.CREATE_LONG_TERM_PRICING,
		SnowballActions.CREATE_RETURN_SHIPPING_LABEL,
		SnowballActions.UPDATE_CLUSTER,
		SnowballActions.UPDATE_JOB,
		SnowballActions.UPDATE_JOB_SHIPMENT_STATE,
		SnowballActions.UPDATE_LONG_TERM_PRICING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SnowballActions.DESCRIBE_ADDRESSES,
		SnowballActions.LIST_CLUSTER_JOBS,
		SnowballActions.LIST_CLUSTERS,
		SnowballActions.LIST_COMPATIBLE_IMAGES,
		SnowballActions.LIST_JOBS,
		SnowballActions.LIST_PICKUP_LOCATIONS,
		SnowballActions.LIST_SERVICE_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for snowball.
 */
export class SnowballOperations {
	/** IAM actions required for the CancelCluster API call. */
	static readonly CANCEL_CLUSTER: string[] = ["snowball:CancelCluster"];
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = ["snowball:CancelJob"];
	/** IAM actions required for the CreateAddress API call. */
	static readonly CREATE_ADDRESS: string[] = ["snowball:CreateAddress"];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"snowball:CreateCluster",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = ["snowball:CreateJob", "iam:PassRole"];
	/** IAM actions required for the CreateLongTermPricing API call. */
	static readonly CREATE_LONG_TERM_PRICING: string[] = [
		"snowball:CreateLongTermPricing",
	];
	/** IAM actions required for the CreateReturnShippingLabel API call. */
	static readonly CREATE_RETURN_SHIPPING_LABEL: string[] = [
		"snowball:CreateReturnShippingLabel",
	];
	/** IAM actions required for the DescribeAddress API call. */
	static readonly DESCRIBE_ADDRESS: string[] = ["snowball:DescribeAddress"];
	/** IAM actions required for the DescribeAddresses API call. */
	static readonly DESCRIBE_ADDRESSES: string[] = ["snowball:DescribeAddresses"];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = ["snowball:DescribeCluster"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["snowball:DescribeJob"];
	/** IAM actions required for the DescribeReturnShippingLabel API call. */
	static readonly DESCRIBE_RETURN_SHIPPING_LABEL: string[] = [
		"snowball:DescribeReturnShippingLabel",
	];
	/** IAM actions required for the GetJobManifest API call. */
	static readonly GET_JOB_MANIFEST: string[] = ["snowball:GetJobManifest"];
	/** IAM actions required for the GetJobUnlockCode API call. */
	static readonly GET_JOB_UNLOCK_CODE: string[] = ["snowball:GetJobUnlockCode"];
	/** IAM actions required for the GetSnowballUsage API call. */
	static readonly GET_SNOWBALL_USAGE: string[] = ["snowball:GetSnowballUsage"];
	/** IAM actions required for the GetSoftwareUpdates API call. */
	static readonly GET_SOFTWARE_UPDATES: string[] = [
		"snowball:GetSoftwareUpdates",
	];
	/** IAM actions required for the ListClusterJobs API call. */
	static readonly LIST_CLUSTER_JOBS: string[] = ["snowball:ListClusterJobs"];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["snowball:ListClusters"];
	/** IAM actions required for the ListCompatibleImages API call. */
	static readonly LIST_COMPATIBLE_IMAGES: string[] = [
		"snowball:ListCompatibleImages",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["snowball:ListJobs"];
	/** IAM actions required for the ListLongTermPricing API call. */
	static readonly LIST_LONG_TERM_PRICING: string[] = [
		"snowball:ListLongTermPricing",
	];
	/** IAM actions required for the ListPickupLocations API call. */
	static readonly LIST_PICKUP_LOCATIONS: string[] = [
		"snowball:ListPickupLocations",
	];
	/** IAM actions required for the ListServiceVersions API call. */
	static readonly LIST_SERVICE_VERSIONS: string[] = [
		"snowball:ListServiceVersions",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = [
		"iam:PassRole",
		"snowball:UpdateCluster",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UPDATE_JOB: string[] = ["iam:PassRole", "snowball:UpdateJob"];
	/** IAM actions required for the UpdateJobShipmentState API call. */
	static readonly UPDATE_JOB_SHIPMENT_STATE: string[] = [
		"snowball:UpdateJobShipmentState",
	];
	/** IAM actions required for the UpdateLongTermPricing API call. */
	static readonly UPDATE_LONG_TERM_PRICING: string[] = [
		"snowball:UpdateLongTermPricing",
	];
}
