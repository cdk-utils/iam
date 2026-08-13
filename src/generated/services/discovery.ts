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
	static readonly ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION =
		"discovery:AssociateConfigurationItemsToApplication";
	/** [Write] discovery:BatchDeleteAgents */
	static readonly BATCH_DELETE_AGENTS = "discovery:BatchDeleteAgents";
	/** [Write] discovery:BatchDeleteImportData */
	static readonly BATCH_DELETE_IMPORT_DATA = "discovery:BatchDeleteImportData";
	/** [Write] discovery:CreateApplication */
	static readonly CREATE_APPLICATION = "discovery:CreateApplication";
	/** [Tagging] discovery:CreateTags */
	static readonly CREATE_TAGS = "discovery:CreateTags";
	/** [Write] discovery:DeleteApplications */
	static readonly DELETE_APPLICATIONS = "discovery:DeleteApplications";
	/** [Tagging] discovery:DeleteTags */
	static readonly DELETE_TAGS = "discovery:DeleteTags";
	/** [Read] discovery:DescribeAgents */
	static readonly DESCRIBE_AGENTS = "discovery:DescribeAgents";
	/** [Read] discovery:DescribeBatchDeleteConfigurationTask */
	static readonly DESCRIBE_BATCH_DELETE_CONFIGURATION_TASK =
		"discovery:DescribeBatchDeleteConfigurationTask";
	/** [Read] discovery:DescribeConfigurations */
	static readonly DESCRIBE_CONFIGURATIONS = "discovery:DescribeConfigurations";
	/** [Read] discovery:DescribeContinuousExports */
	static readonly DESCRIBE_CONTINUOUS_EXPORTS =
		"discovery:DescribeContinuousExports";
	/** [Read] discovery:DescribeExportConfigurations */
	static readonly DESCRIBE_EXPORT_CONFIGURATIONS =
		"discovery:DescribeExportConfigurations";
	/** [Read] discovery:DescribeExportTasks */
	static readonly DESCRIBE_EXPORT_TASKS = "discovery:DescribeExportTasks";
	/** [List] discovery:DescribeImportTasks */
	static readonly DESCRIBE_IMPORT_TASKS = "discovery:DescribeImportTasks";
	/** [Read] discovery:DescribeTags */
	static readonly DESCRIBE_TAGS = "discovery:DescribeTags";
	/** [Write] discovery:DisassociateConfigurationItemsFromApplication */
	static readonly DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION =
		"discovery:DisassociateConfigurationItemsFromApplication";
	/** [Write] discovery:ExportConfigurations */
	static readonly EXPORT_CONFIGURATIONS = "discovery:ExportConfigurations";
	/** [Read] discovery:GetDiscoverySummary */
	static readonly GET_DISCOVERY_SUMMARY = "discovery:GetDiscoverySummary";
	/** [Read] discovery:GetNetworkConnectionGraph */
	static readonly GET_NETWORK_CONNECTION_GRAPH =
		"discovery:GetNetworkConnectionGraph";
	/** [List] discovery:ListConfigurations */
	static readonly LIST_CONFIGURATIONS = "discovery:ListConfigurations";
	/** [List] discovery:ListServerNeighbors */
	static readonly LIST_SERVER_NEIGHBORS = "discovery:ListServerNeighbors";
	/** [Write] discovery:StartBatchDeleteConfigurationTask */
	static readonly START_BATCH_DELETE_CONFIGURATION_TASK =
		"discovery:StartBatchDeleteConfigurationTask";
	/** [Write] discovery:StartContinuousExport */
	static readonly START_CONTINUOUS_EXPORT = "discovery:StartContinuousExport";
	/** [Write] discovery:StartDataCollectionByAgentIds */
	static readonly START_DATA_COLLECTION_BY_AGENT_IDS =
		"discovery:StartDataCollectionByAgentIds";
	/** [Write] discovery:StartExportTask */
	static readonly START_EXPORT_TASK = "discovery:StartExportTask";
	/** [Write] discovery:StartImportTask */
	static readonly START_IMPORT_TASK = "discovery:StartImportTask";
	/** [Write] discovery:StopContinuousExport */
	static readonly STOP_CONTINUOUS_EXPORT = "discovery:StopContinuousExport";
	/** [Write] discovery:StopDataCollectionByAgentIds */
	static readonly STOP_DATA_COLLECTION_BY_AGENT_IDS =
		"discovery:StopDataCollectionByAgentIds";
	/** [Write] discovery:UpdateApplication */
	static readonly UPDATE_APPLICATION = "discovery:UpdateApplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DiscoveryActions.DESCRIBE_AGENTS,
		DiscoveryActions.DESCRIBE_BATCH_DELETE_CONFIGURATION_TASK,
		DiscoveryActions.DESCRIBE_CONFIGURATIONS,
		DiscoveryActions.DESCRIBE_CONTINUOUS_EXPORTS,
		DiscoveryActions.DESCRIBE_EXPORT_CONFIGURATIONS,
		DiscoveryActions.DESCRIBE_EXPORT_TASKS,
		DiscoveryActions.DESCRIBE_TAGS,
		DiscoveryActions.GET_DISCOVERY_SUMMARY,
		DiscoveryActions.GET_NETWORK_CONNECTION_GRAPH,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DiscoveryActions.ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION,
		DiscoveryActions.BATCH_DELETE_AGENTS,
		DiscoveryActions.BATCH_DELETE_IMPORT_DATA,
		DiscoveryActions.CREATE_APPLICATION,
		DiscoveryActions.DELETE_APPLICATIONS,
		DiscoveryActions.DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION,
		DiscoveryActions.EXPORT_CONFIGURATIONS,
		DiscoveryActions.START_BATCH_DELETE_CONFIGURATION_TASK,
		DiscoveryActions.START_CONTINUOUS_EXPORT,
		DiscoveryActions.START_DATA_COLLECTION_BY_AGENT_IDS,
		DiscoveryActions.START_EXPORT_TASK,
		DiscoveryActions.START_IMPORT_TASK,
		DiscoveryActions.STOP_CONTINUOUS_EXPORT,
		DiscoveryActions.STOP_DATA_COLLECTION_BY_AGENT_IDS,
		DiscoveryActions.UPDATE_APPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DiscoveryActions.DESCRIBE_IMPORT_TASKS,
		DiscoveryActions.LIST_CONFIGURATIONS,
		DiscoveryActions.LIST_SERVER_NEIGHBORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DiscoveryActions.CREATE_TAGS,
		DiscoveryActions.DELETE_TAGS,
	];
}

/**
 * API operation to required IAM actions mapping for discovery.
 */
export class DiscoveryOperations {
	/** IAM actions required for the AssociateConfigurationItemsToApplication API call. */
	static readonly ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION: string[] = [
		"discovery:AssociateConfigurationItemsToApplication",
	];
	/** IAM actions required for the BatchDeleteAgents API call. */
	static readonly BATCH_DELETE_AGENTS: string[] = [
		"discovery:BatchDeleteAgents",
	];
	/** IAM actions required for the BatchDeleteImportData API call. */
	static readonly BATCH_DELETE_IMPORT_DATA: string[] = [
		"discovery:BatchDeleteImportData",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"discovery:CreateApplication",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = ["discovery:CreateTags"];
	/** IAM actions required for the DeleteApplications API call. */
	static readonly DELETE_APPLICATIONS: string[] = [
		"discovery:DeleteApplications",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["discovery:DeleteTags"];
	/** IAM actions required for the DescribeAgents API call. */
	static readonly DESCRIBE_AGENTS: string[] = ["discovery:DescribeAgents"];
	/** IAM actions required for the DescribeBatchDeleteConfigurationTask API call. */
	static readonly DESCRIBE_BATCH_DELETE_CONFIGURATION_TASK: string[] = [
		"discovery:DescribeBatchDeleteConfigurationTask",
	];
	/** IAM actions required for the DescribeConfigurations API call. */
	static readonly DESCRIBE_CONFIGURATIONS: string[] = [
		"discovery:DescribeConfigurations",
	];
	/** IAM actions required for the DescribeContinuousExports API call. */
	static readonly DESCRIBE_CONTINUOUS_EXPORTS: string[] = [
		"discovery:DescribeContinuousExports",
	];
	/** IAM actions required for the DescribeExportConfigurations API call. */
	static readonly DESCRIBE_EXPORT_CONFIGURATIONS: string[] = [
		"discovery:DescribeExportConfigurations",
	];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DESCRIBE_EXPORT_TASKS: string[] = [
		"discovery:DescribeExportTasks",
	];
	/** IAM actions required for the DescribeImportTasks API call. */
	static readonly DESCRIBE_IMPORT_TASKS: string[] = [
		"discovery:DescribeImportTasks",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["discovery:DescribeTags"];
	/** IAM actions required for the DisassociateConfigurationItemsFromApplication API call. */
	static readonly DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION: string[] =
		["discovery:DisassociateConfigurationItemsFromApplication"];
	/** IAM actions required for the ExportConfigurations API call. */
	static readonly EXPORT_CONFIGURATIONS: string[] = [
		"discovery:ExportConfigurations",
	];
	/** IAM actions required for the GetDiscoverySummary API call. */
	static readonly GET_DISCOVERY_SUMMARY: string[] = [
		"discovery:GetDiscoverySummary",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly LIST_CONFIGURATIONS: string[] = [
		"discovery:ListConfigurations",
	];
	/** IAM actions required for the ListServerNeighbors API call. */
	static readonly LIST_SERVER_NEIGHBORS: string[] = [
		"discovery:ListServerNeighbors",
	];
	/** IAM actions required for the StartBatchDeleteConfigurationTask API call. */
	static readonly START_BATCH_DELETE_CONFIGURATION_TASK: string[] = [
		"discovery:StartBatchDeleteConfigurationTask",
	];
	/** IAM actions required for the StartContinuousExport API call. */
	static readonly START_CONTINUOUS_EXPORT: string[] = [
		"discovery:StartContinuousExport",
	];
	/** IAM actions required for the StartDataCollectionByAgentIds API call. */
	static readonly START_DATA_COLLECTION_BY_AGENT_IDS: string[] = [
		"discovery:StartDataCollectionByAgentIds",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly START_EXPORT_TASK: string[] = ["discovery:StartExportTask"];
	/** IAM actions required for the StartImportTask API call. */
	static readonly START_IMPORT_TASK: string[] = ["discovery:StartImportTask"];
	/** IAM actions required for the StopContinuousExport API call. */
	static readonly STOP_CONTINUOUS_EXPORT: string[] = [
		"discovery:StopContinuousExport",
	];
	/** IAM actions required for the StopDataCollectionByAgentIds API call. */
	static readonly STOP_DATA_COLLECTION_BY_AGENT_IDS: string[] = [
		"discovery:StopDataCollectionByAgentIds",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"discovery:UpdateApplication",
	];
}

/**
 * Condition key constants and builders for discovery.
 */
export class DiscoveryConditions {
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
