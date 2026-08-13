// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/discovery.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the discovery service.
 */
export class DiscoveryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "discovery";

	/** [Write] discovery:AssociateConfigurationItemsToApplication */
	static readonly AssociateConfigurationItemsToApplication =
		"discovery:AssociateConfigurationItemsToApplication";
	/** [Write] discovery:BatchDeleteAgents */
	static readonly BatchDeleteAgents = "discovery:BatchDeleteAgents";
	/** [Write] discovery:BatchDeleteImportData */
	static readonly BatchDeleteImportData = "discovery:BatchDeleteImportData";
	/** [Write] discovery:CreateApplication */
	static readonly CreateApplication = "discovery:CreateApplication";
	/** [Tagging] discovery:CreateTags */
	static readonly CreateTags = "discovery:CreateTags";
	/** [Write] discovery:DeleteApplications */
	static readonly DeleteApplications = "discovery:DeleteApplications";
	/** [Tagging] discovery:DeleteTags */
	static readonly DeleteTags = "discovery:DeleteTags";
	/** [Read] discovery:DescribeAgents */
	static readonly DescribeAgents = "discovery:DescribeAgents";
	/** [Read] discovery:DescribeBatchDeleteConfigurationTask */
	static readonly DescribeBatchDeleteConfigurationTask =
		"discovery:DescribeBatchDeleteConfigurationTask";
	/** [Read] discovery:DescribeConfigurations */
	static readonly DescribeConfigurations = "discovery:DescribeConfigurations";
	/** [Read] discovery:DescribeContinuousExports */
	static readonly DescribeContinuousExports =
		"discovery:DescribeContinuousExports";
	/** [Read] discovery:DescribeExportConfigurations */
	static readonly DescribeExportConfigurations =
		"discovery:DescribeExportConfigurations";
	/** [Read] discovery:DescribeExportTasks */
	static readonly DescribeExportTasks = "discovery:DescribeExportTasks";
	/** [List] discovery:DescribeImportTasks */
	static readonly DescribeImportTasks = "discovery:DescribeImportTasks";
	/** [Read] discovery:DescribeTags */
	static readonly DescribeTags = "discovery:DescribeTags";
	/** [Write] discovery:DisassociateConfigurationItemsFromApplication */
	static readonly DisassociateConfigurationItemsFromApplication =
		"discovery:DisassociateConfigurationItemsFromApplication";
	/** [Write] discovery:ExportConfigurations */
	static readonly ExportConfigurations = "discovery:ExportConfigurations";
	/** [Read] discovery:GetDiscoverySummary */
	static readonly actionGetDiscoverySummary = "discovery:GetDiscoverySummary";
	/** [Read] discovery:GetNetworkConnectionGraph */
	static readonly actionGetNetworkConnectionGraph =
		"discovery:GetNetworkConnectionGraph";
	/** [List] discovery:ListConfigurations */
	static readonly ListConfigurations = "discovery:ListConfigurations";
	/** [List] discovery:ListServerNeighbors */
	static readonly ListServerNeighbors = "discovery:ListServerNeighbors";
	/** [Write] discovery:StartBatchDeleteConfigurationTask */
	static readonly StartBatchDeleteConfigurationTask =
		"discovery:StartBatchDeleteConfigurationTask";
	/** [Write] discovery:StartContinuousExport */
	static readonly StartContinuousExport = "discovery:StartContinuousExport";
	/** [Write] discovery:StartDataCollectionByAgentIds */
	static readonly StartDataCollectionByAgentIds =
		"discovery:StartDataCollectionByAgentIds";
	/** [Write] discovery:StartExportTask */
	static readonly StartExportTask = "discovery:StartExportTask";
	/** [Write] discovery:StartImportTask */
	static readonly StartImportTask = "discovery:StartImportTask";
	/** [Write] discovery:StopContinuousExport */
	static readonly StopContinuousExport = "discovery:StopContinuousExport";
	/** [Write] discovery:StopDataCollectionByAgentIds */
	static readonly StopDataCollectionByAgentIds =
		"discovery:StopDataCollectionByAgentIds";
	/** [Write] discovery:UpdateApplication */
	static readonly UpdateApplication = "discovery:UpdateApplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DiscoveryActions.DescribeAgents,
		DiscoveryActions.DescribeBatchDeleteConfigurationTask,
		DiscoveryActions.DescribeConfigurations,
		DiscoveryActions.DescribeContinuousExports,
		DiscoveryActions.DescribeExportConfigurations,
		DiscoveryActions.DescribeExportTasks,
		DiscoveryActions.DescribeTags,
		DiscoveryActions.actionGetDiscoverySummary,
		DiscoveryActions.actionGetNetworkConnectionGraph,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DiscoveryActions.AssociateConfigurationItemsToApplication,
		DiscoveryActions.BatchDeleteAgents,
		DiscoveryActions.BatchDeleteImportData,
		DiscoveryActions.CreateApplication,
		DiscoveryActions.DeleteApplications,
		DiscoveryActions.DisassociateConfigurationItemsFromApplication,
		DiscoveryActions.ExportConfigurations,
		DiscoveryActions.StartBatchDeleteConfigurationTask,
		DiscoveryActions.StartContinuousExport,
		DiscoveryActions.StartDataCollectionByAgentIds,
		DiscoveryActions.StartExportTask,
		DiscoveryActions.StartImportTask,
		DiscoveryActions.StopContinuousExport,
		DiscoveryActions.StopDataCollectionByAgentIds,
		DiscoveryActions.UpdateApplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DiscoveryActions.DescribeImportTasks,
		DiscoveryActions.ListConfigurations,
		DiscoveryActions.ListServerNeighbors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DiscoveryActions.CreateTags,
		DiscoveryActions.DeleteTags,
	];
}

/**
 * API operation to required IAM actions mapping for discovery.
 */
export class DiscoveryOperations {
	/** IAM actions required for the AssociateConfigurationItemsToApplication API call. */
	static readonly AssociateConfigurationItemsToApplication: string[] = [
		"discovery:AssociateConfigurationItemsToApplication",
	];
	/** IAM actions required for the BatchDeleteAgents API call. */
	static readonly BatchDeleteAgents: string[] = ["discovery:BatchDeleteAgents"];
	/** IAM actions required for the BatchDeleteImportData API call. */
	static readonly BatchDeleteImportData: string[] = [
		"discovery:BatchDeleteImportData",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = ["discovery:CreateApplication"];
	/** IAM actions required for the CreateTags API call. */
	static readonly CreateTags: string[] = ["discovery:CreateTags"];
	/** IAM actions required for the DeleteApplications API call. */
	static readonly DeleteApplications: string[] = [
		"discovery:DeleteApplications",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["discovery:DeleteTags"];
	/** IAM actions required for the DescribeAgents API call. */
	static readonly DescribeAgents: string[] = ["discovery:DescribeAgents"];
	/** IAM actions required for the DescribeBatchDeleteConfigurationTask API call. */
	static readonly DescribeBatchDeleteConfigurationTask: string[] = [
		"discovery:DescribeBatchDeleteConfigurationTask",
	];
	/** IAM actions required for the DescribeConfigurations API call. */
	static readonly DescribeConfigurations: string[] = [
		"discovery:DescribeConfigurations",
	];
	/** IAM actions required for the DescribeContinuousExports API call. */
	static readonly DescribeContinuousExports: string[] = [
		"discovery:DescribeContinuousExports",
	];
	/** IAM actions required for the DescribeExportConfigurations API call. */
	static readonly DescribeExportConfigurations: string[] = [
		"discovery:DescribeExportConfigurations",
	];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DescribeExportTasks: string[] = [
		"discovery:DescribeExportTasks",
	];
	/** IAM actions required for the DescribeImportTasks API call. */
	static readonly DescribeImportTasks: string[] = [
		"discovery:DescribeImportTasks",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["discovery:DescribeTags"];
	/** IAM actions required for the DisassociateConfigurationItemsFromApplication API call. */
	static readonly DisassociateConfigurationItemsFromApplication: string[] = [
		"discovery:DisassociateConfigurationItemsFromApplication",
	];
	/** IAM actions required for the ExportConfigurations API call. */
	static readonly ExportConfigurations: string[] = [
		"discovery:ExportConfigurations",
	];
	/** IAM actions required for the GetDiscoverySummary API call. */
	static readonly opGetDiscoverySummary: string[] = [
		"discovery:GetDiscoverySummary",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly ListConfigurations: string[] = [
		"discovery:ListConfigurations",
	];
	/** IAM actions required for the ListServerNeighbors API call. */
	static readonly ListServerNeighbors: string[] = [
		"discovery:ListServerNeighbors",
	];
	/** IAM actions required for the StartBatchDeleteConfigurationTask API call. */
	static readonly StartBatchDeleteConfigurationTask: string[] = [
		"discovery:StartBatchDeleteConfigurationTask",
	];
	/** IAM actions required for the StartContinuousExport API call. */
	static readonly StartContinuousExport: string[] = [
		"discovery:StartContinuousExport",
	];
	/** IAM actions required for the StartDataCollectionByAgentIds API call. */
	static readonly StartDataCollectionByAgentIds: string[] = [
		"discovery:StartDataCollectionByAgentIds",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly StartExportTask: string[] = ["discovery:StartExportTask"];
	/** IAM actions required for the StartImportTask API call. */
	static readonly StartImportTask: string[] = ["discovery:StartImportTask"];
	/** IAM actions required for the StopContinuousExport API call. */
	static readonly StopContinuousExport: string[] = [
		"discovery:StopContinuousExport",
	];
	/** IAM actions required for the StopDataCollectionByAgentIds API call. */
	static readonly StopDataCollectionByAgentIds: string[] = [
		"discovery:StopDataCollectionByAgentIds",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = ["discovery:UpdateApplication"];
}

/**
 * Condition key constants and builders for discovery.
 */
export class DiscoveryConditions {
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
