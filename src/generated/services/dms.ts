// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dms.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dms service.
 */
export class DmsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dms";

	/** [Tagging] dms:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "dms:AddTagsToResource";
	/** [Write] dms:ApplyPendingMaintenanceAction */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION =
		"dms:ApplyPendingMaintenanceAction";
	/** [Write] dms:AssociateExtensionPack */
	static readonly ASSOCIATE_EXTENSION_PACK = "dms:AssociateExtensionPack";
	/** [Write] dms:BatchStartRecommendations */
	static readonly BATCH_START_RECOMMENDATIONS = "dms:BatchStartRecommendations";
	/** [Write] dms:CancelMetadataModelConversion */
	static readonly CANCEL_METADATA_MODEL_CONVERSION =
		"dms:CancelMetadataModelConversion";
	/** [Write] dms:CancelMetadataModelCreation */
	static readonly CANCEL_METADATA_MODEL_CREATION =
		"dms:CancelMetadataModelCreation";
	/** [Write] dms:CancelReplicationTaskAssessmentRun */
	static readonly CANCEL_REPLICATION_TASK_ASSESSMENT_RUN =
		"dms:CancelReplicationTaskAssessmentRun";
	/** [Write] dms:CreateDataMigration */
	static readonly CREATE_DATA_MIGRATION = "dms:CreateDataMigration";
	/** [Write] dms:CreateDataProvider */
	static readonly CREATE_DATA_PROVIDER = "dms:CreateDataProvider";
	/** [Write] dms:CreateEndpoint */
	static readonly CREATE_ENDPOINT = "dms:CreateEndpoint";
	/** [Write] dms:CreateEventSubscription */
	static readonly CREATE_EVENT_SUBSCRIPTION = "dms:CreateEventSubscription";
	/** [Write] dms:CreateFleetAdvisorCollector */
	static readonly CREATE_FLEET_ADVISOR_COLLECTOR =
		"dms:CreateFleetAdvisorCollector";
	/** [Write] dms:CreateInstanceProfile */
	static readonly CREATE_INSTANCE_PROFILE = "dms:CreateInstanceProfile";
	/** [Write] dms:CreateMigrationProject */
	static readonly CREATE_MIGRATION_PROJECT = "dms:CreateMigrationProject";
	/** [Write] dms:CreateOutboundIntegration */
	static readonly CREATE_OUTBOUND_INTEGRATION = "dms:CreateOutboundIntegration";
	/** [Write] dms:CreateReplicationConfig */
	static readonly CREATE_REPLICATION_CONFIG = "dms:CreateReplicationConfig";
	/** [Write] dms:CreateReplicationInstance */
	static readonly CREATE_REPLICATION_INSTANCE = "dms:CreateReplicationInstance";
	/** [Write] dms:CreateReplicationSubnetGroup */
	static readonly CREATE_REPLICATION_SUBNET_GROUP =
		"dms:CreateReplicationSubnetGroup";
	/** [Write] dms:CreateReplicationTask */
	static readonly CREATE_REPLICATION_TASK = "dms:CreateReplicationTask";
	/** [Write] dms:DeleteCertificate */
	static readonly DELETE_CERTIFICATE = "dms:DeleteCertificate";
	/** [Write] dms:DeleteConnection */
	static readonly DELETE_CONNECTION = "dms:DeleteConnection";
	/** [Write] dms:DeleteDataMigration */
	static readonly DELETE_DATA_MIGRATION = "dms:DeleteDataMigration";
	/** [Write] dms:DeleteDataProvider */
	static readonly DELETE_DATA_PROVIDER = "dms:DeleteDataProvider";
	/** [Write] dms:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "dms:DeleteEndpoint";
	/** [Write] dms:DeleteEventSubscription */
	static readonly DELETE_EVENT_SUBSCRIPTION = "dms:DeleteEventSubscription";
	/** [Write] dms:DeleteFleetAdvisorCollector */
	static readonly DELETE_FLEET_ADVISOR_COLLECTOR =
		"dms:DeleteFleetAdvisorCollector";
	/** [Write] dms:DeleteFleetAdvisorDatabases */
	static readonly DELETE_FLEET_ADVISOR_DATABASES =
		"dms:DeleteFleetAdvisorDatabases";
	/** [Write] dms:DeleteInstanceProfile */
	static readonly DELETE_INSTANCE_PROFILE = "dms:DeleteInstanceProfile";
	/** [Write] dms:DeleteMigrationProject */
	static readonly DELETE_MIGRATION_PROJECT = "dms:DeleteMigrationProject";
	/** [Write] dms:DeleteReplicationConfig */
	static readonly DELETE_REPLICATION_CONFIG = "dms:DeleteReplicationConfig";
	/** [Write] dms:DeleteReplicationInstance */
	static readonly DELETE_REPLICATION_INSTANCE = "dms:DeleteReplicationInstance";
	/** [Write] dms:DeleteReplicationSubnetGroup */
	static readonly DELETE_REPLICATION_SUBNET_GROUP =
		"dms:DeleteReplicationSubnetGroup";
	/** [Write] dms:DeleteReplicationTask */
	static readonly DELETE_REPLICATION_TASK = "dms:DeleteReplicationTask";
	/** [Write] dms:DeleteReplicationTaskAssessmentRun */
	static readonly DELETE_REPLICATION_TASK_ASSESSMENT_RUN =
		"dms:DeleteReplicationTaskAssessmentRun";
	/** [Read] dms:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES = "dms:DescribeAccountAttributes";
	/** [Read] dms:DescribeApplicableIndividualAssessments */
	static readonly DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS =
		"dms:DescribeApplicableIndividualAssessments";
	/** [Read] dms:DescribeCertificates */
	static readonly DESCRIBE_CERTIFICATES = "dms:DescribeCertificates";
	/** [Read] dms:DescribeConnections */
	static readonly DESCRIBE_CONNECTIONS = "dms:DescribeConnections";
	/** [Read] dms:DescribeConversionConfiguration */
	static readonly DESCRIBE_CONVERSION_CONFIGURATION =
		"dms:DescribeConversionConfiguration";
	/** [Read] dms:DescribeDataMigrations */
	static readonly DESCRIBE_DATA_MIGRATIONS = "dms:DescribeDataMigrations";
	/** [Read] dms:DescribeEndpointSettings */
	static readonly DESCRIBE_ENDPOINT_SETTINGS = "dms:DescribeEndpointSettings";
	/** [Read] dms:DescribeEndpointTypes */
	static readonly DESCRIBE_ENDPOINT_TYPES = "dms:DescribeEndpointTypes";
	/** [Read] dms:DescribeEndpoints */
	static readonly DESCRIBE_ENDPOINTS = "dms:DescribeEndpoints";
	/** [Read] dms:DescribeEngineVersions */
	static readonly DESCRIBE_ENGINE_VERSIONS = "dms:DescribeEngineVersions";
	/** [Read] dms:DescribeEventCategories */
	static readonly DESCRIBE_EVENT_CATEGORIES = "dms:DescribeEventCategories";
	/** [Read] dms:DescribeEventSubscriptions */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS =
		"dms:DescribeEventSubscriptions";
	/** [Read] dms:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "dms:DescribeEvents";
	/** [Read] dms:DescribeFleetAdvisorCollectors */
	static readonly DESCRIBE_FLEET_ADVISOR_COLLECTORS =
		"dms:DescribeFleetAdvisorCollectors";
	/** [Read] dms:DescribeFleetAdvisorDatabases */
	static readonly DESCRIBE_FLEET_ADVISOR_DATABASES =
		"dms:DescribeFleetAdvisorDatabases";
	/** [Read] dms:DescribeFleetAdvisorLsaAnalysis */
	static readonly DESCRIBE_FLEET_ADVISOR_LSA_ANALYSIS =
		"dms:DescribeFleetAdvisorLsaAnalysis";
	/** [Read] dms:DescribeFleetAdvisorSchemaObjectSummary */
	static readonly DESCRIBE_FLEET_ADVISOR_SCHEMA_OBJECT_SUMMARY =
		"dms:DescribeFleetAdvisorSchemaObjectSummary";
	/** [Read] dms:DescribeFleetAdvisorSchemas */
	static readonly DESCRIBE_FLEET_ADVISOR_SCHEMAS =
		"dms:DescribeFleetAdvisorSchemas";
	/** [Read] dms:DescribeMetadataModel */
	static readonly DESCRIBE_METADATA_MODEL = "dms:DescribeMetadataModel";
	/** [Read] dms:DescribeMetadataModelChildren */
	static readonly DESCRIBE_METADATA_MODEL_CHILDREN =
		"dms:DescribeMetadataModelChildren";
	/** [Read] dms:DescribeMetadataModelCreations */
	static readonly DESCRIBE_METADATA_MODEL_CREATIONS =
		"dms:DescribeMetadataModelCreations";
	/** [Read] dms:DescribeMetadataModelImports */
	static readonly DESCRIBE_METADATA_MODEL_IMPORTS =
		"dms:DescribeMetadataModelImports";
	/** [Read] dms:DescribeOrderableReplicationInstances */
	static readonly DESCRIBE_ORDERABLE_REPLICATION_INSTANCES =
		"dms:DescribeOrderableReplicationInstances";
	/** [Read] dms:DescribePendingMaintenanceActions */
	static readonly DESCRIBE_PENDING_MAINTENANCE_ACTIONS =
		"dms:DescribePendingMaintenanceActions";
	/** [Read] dms:DescribeRecommendationLimitations */
	static readonly DESCRIBE_RECOMMENDATION_LIMITATIONS =
		"dms:DescribeRecommendationLimitations";
	/** [Read] dms:DescribeRecommendations */
	static readonly DESCRIBE_RECOMMENDATIONS = "dms:DescribeRecommendations";
	/** [Read] dms:DescribeRefreshSchemasStatus */
	static readonly DESCRIBE_REFRESH_SCHEMAS_STATUS =
		"dms:DescribeRefreshSchemasStatus";
	/** [Read] dms:DescribeReplicationConfigs */
	static readonly DESCRIBE_REPLICATION_CONFIGS =
		"dms:DescribeReplicationConfigs";
	/** [Read] dms:DescribeReplicationInstanceTaskLogs */
	static readonly DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS =
		"dms:DescribeReplicationInstanceTaskLogs";
	/** [Read] dms:DescribeReplicationInstances */
	static readonly DESCRIBE_REPLICATION_INSTANCES =
		"dms:DescribeReplicationInstances";
	/** [Read] dms:DescribeReplicationSubnetGroups */
	static readonly DESCRIBE_REPLICATION_SUBNET_GROUPS =
		"dms:DescribeReplicationSubnetGroups";
	/** [Read] dms:DescribeReplicationTableStatistics */
	static readonly DESCRIBE_REPLICATION_TABLE_STATISTICS =
		"dms:DescribeReplicationTableStatistics";
	/** [Read] dms:DescribeReplicationTaskAssessmentResults */
	static readonly DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS =
		"dms:DescribeReplicationTaskAssessmentResults";
	/** [Read] dms:DescribeReplicationTaskAssessmentRuns */
	static readonly DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS =
		"dms:DescribeReplicationTaskAssessmentRuns";
	/** [Read] dms:DescribeReplicationTaskIndividualAssessments */
	static readonly DESCRIBE_REPLICATION_TASK_INDIVIDUAL_ASSESSMENTS =
		"dms:DescribeReplicationTaskIndividualAssessments";
	/** [Read] dms:DescribeReplicationTasks */
	static readonly DESCRIBE_REPLICATION_TASKS = "dms:DescribeReplicationTasks";
	/** [Read] dms:DescribeReplications */
	static readonly DESCRIBE_REPLICATIONS = "dms:DescribeReplications";
	/** [Read] dms:DescribeSchemas */
	static readonly DESCRIBE_SCHEMAS = "dms:DescribeSchemas";
	/** [Read] dms:DescribeTableStatistics */
	static readonly DESCRIBE_TABLE_STATISTICS = "dms:DescribeTableStatistics";
	/** [Write] dms:ExportMetadataModelAssessment */
	static readonly EXPORT_METADATA_MODEL_ASSESSMENT =
		"dms:ExportMetadataModelAssessment";
	/** [Read] dms:GetMetadataModel */
	static readonly GET_METADATA_MODEL = "dms:GetMetadataModel";
	/** [Read] dms:GetTargetSelectionRules */
	static readonly GET_TARGET_SELECTION_RULES = "dms:GetTargetSelectionRules";
	/** [Write] dms:ImportCertificate */
	static readonly IMPORT_CERTIFICATE = "dms:ImportCertificate";
	/** [Read] dms:ListDataProviders */
	static readonly LIST_DATA_PROVIDERS = "dms:ListDataProviders";
	/** [Read] dms:ListExtensionPacks */
	static readonly LIST_EXTENSION_PACKS = "dms:ListExtensionPacks";
	/** [Read] dms:ListInstanceProfiles */
	static readonly LIST_INSTANCE_PROFILES = "dms:ListInstanceProfiles";
	/** [Read] dms:ListMetadataModelAssessmentActionItems */
	static readonly LIST_METADATA_MODEL_ASSESSMENT_ACTION_ITEMS =
		"dms:ListMetadataModelAssessmentActionItems";
	/** [Read] dms:ListMetadataModelAssessments */
	static readonly LIST_METADATA_MODEL_ASSESSMENTS =
		"dms:ListMetadataModelAssessments";
	/** [Read] dms:ListMetadataModelConversions */
	static readonly LIST_METADATA_MODEL_CONVERSIONS =
		"dms:ListMetadataModelConversions";
	/** [Read] dms:ListMetadataModelExports */
	static readonly LIST_METADATA_MODEL_EXPORTS = "dms:ListMetadataModelExports";
	/** [Read] dms:ListMigrationProjects */
	static readonly LIST_MIGRATION_PROJECTS = "dms:ListMigrationProjects";
	/** [Read] dms:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "dms:ListTagsForResource";
	/** [Write] dms:ModifyDataMigration */
	static readonly MODIFY_DATA_MIGRATION = "dms:ModifyDataMigration";
	/** [Write] dms:ModifyEndpoint */
	static readonly MODIFY_ENDPOINT = "dms:ModifyEndpoint";
	/** [Write] dms:ModifyEventSubscription */
	static readonly MODIFY_EVENT_SUBSCRIPTION = "dms:ModifyEventSubscription";
	/** [Write] dms:ModifyFleetAdvisorCollector */
	static readonly MODIFY_FLEET_ADVISOR_COLLECTOR =
		"dms:ModifyFleetAdvisorCollector";
	/** [Write] dms:ModifyFleetAdvisorCollectorStatuses */
	static readonly MODIFY_FLEET_ADVISOR_COLLECTOR_STATUSES =
		"dms:ModifyFleetAdvisorCollectorStatuses";
	/** [Write] dms:ModifyOutboundIntegration */
	static readonly MODIFY_OUTBOUND_INTEGRATION = "dms:ModifyOutboundIntegration";
	/** [Write] dms:ModifyReplicationConfig */
	static readonly MODIFY_REPLICATION_CONFIG = "dms:ModifyReplicationConfig";
	/** [Write] dms:ModifyReplicationInstance */
	static readonly MODIFY_REPLICATION_INSTANCE = "dms:ModifyReplicationInstance";
	/** [Write] dms:ModifyReplicationSubnetGroup */
	static readonly MODIFY_REPLICATION_SUBNET_GROUP =
		"dms:ModifyReplicationSubnetGroup";
	/** [Write] dms:ModifyReplicationTask */
	static readonly MODIFY_REPLICATION_TASK = "dms:ModifyReplicationTask";
	/** [Write] dms:MoveReplicationTask */
	static readonly MOVE_REPLICATION_TASK = "dms:MoveReplicationTask";
	/** [Write] dms:RebootReplicationInstance */
	static readonly REBOOT_REPLICATION_INSTANCE = "dms:RebootReplicationInstance";
	/** [Write] dms:RefreshSchemas */
	static readonly REFRESH_SCHEMAS = "dms:RefreshSchemas";
	/** [Write] dms:ReloadReplicationTables */
	static readonly RELOAD_REPLICATION_TABLES = "dms:ReloadReplicationTables";
	/** [Write] dms:ReloadTables */
	static readonly RELOAD_TABLES = "dms:ReloadTables";
	/** [Tagging] dms:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE = "dms:RemoveTagsFromResource";
	/** [Write] dms:RunFleetAdvisorLsaAnalysis */
	static readonly RUN_FLEET_ADVISOR_LSA_ANALYSIS =
		"dms:RunFleetAdvisorLsaAnalysis";
	/** [Write] dms:StartDataMigration */
	static readonly START_DATA_MIGRATION = "dms:StartDataMigration";
	/** [Write] dms:StartMetadataModelAssessment */
	static readonly START_METADATA_MODEL_ASSESSMENT =
		"dms:StartMetadataModelAssessment";
	/** [Write] dms:StartMetadataModelConversion */
	static readonly START_METADATA_MODEL_CONVERSION =
		"dms:StartMetadataModelConversion";
	/** [Write] dms:StartMetadataModelCreation */
	static readonly START_METADATA_MODEL_CREATION =
		"dms:StartMetadataModelCreation";
	/** [Write] dms:StartMetadataModelExportAsScripts */
	static readonly START_METADATA_MODEL_EXPORT_AS_SCRIPTS =
		"dms:StartMetadataModelExportAsScripts";
	/** [Write] dms:StartMetadataModelExportToTarget */
	static readonly START_METADATA_MODEL_EXPORT_TO_TARGET =
		"dms:StartMetadataModelExportToTarget";
	/** [Write] dms:StartMetadataModelImport */
	static readonly START_METADATA_MODEL_IMPORT = "dms:StartMetadataModelImport";
	/** [Write] dms:StartRecommendations */
	static readonly START_RECOMMENDATIONS = "dms:StartRecommendations";
	/** [Write] dms:StartReplication */
	static readonly START_REPLICATION = "dms:StartReplication";
	/** [Write] dms:StartReplicationTask */
	static readonly START_REPLICATION_TASK = "dms:StartReplicationTask";
	/** [Write] dms:StartReplicationTaskAssessment */
	static readonly START_REPLICATION_TASK_ASSESSMENT =
		"dms:StartReplicationTaskAssessment";
	/** [Write] dms:StartReplicationTaskAssessmentRun */
	static readonly START_REPLICATION_TASK_ASSESSMENT_RUN =
		"dms:StartReplicationTaskAssessmentRun";
	/** [Write] dms:StopDataMigration */
	static readonly STOP_DATA_MIGRATION = "dms:StopDataMigration";
	/** [Write] dms:StopReplication */
	static readonly STOP_REPLICATION = "dms:StopReplication";
	/** [Write] dms:StopReplicationTask */
	static readonly STOP_REPLICATION_TASK = "dms:StopReplicationTask";
	/** [Read] dms:TestConnection */
	static readonly TEST_CONNECTION = "dms:TestConnection";
	/** [Write] dms:UpdateConversionConfiguration */
	static readonly UPDATE_CONVERSION_CONFIGURATION =
		"dms:UpdateConversionConfiguration";
	/** [Write] dms:UpdateDataProvider */
	static readonly UPDATE_DATA_PROVIDER = "dms:UpdateDataProvider";
	/** [Write] dms:UpdateInstanceProfile */
	static readonly UPDATE_INSTANCE_PROFILE = "dms:UpdateInstanceProfile";
	/** [Write] dms:UpdateMigrationProject */
	static readonly UPDATE_MIGRATION_PROJECT = "dms:UpdateMigrationProject";
	/** [Write] dms:UpdateSubscriptionsToEventBridge */
	static readonly UPDATE_SUBSCRIPTIONS_TO_EVENT_BRIDGE =
		"dms:UpdateSubscriptionsToEventBridge";
	/** [Write] dms:UploadFileMetadataList */
	static readonly UPLOAD_FILE_METADATA_LIST = "dms:UploadFileMetadataList";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DmsActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		DmsActions.DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS,
		DmsActions.DESCRIBE_CERTIFICATES,
		DmsActions.DESCRIBE_CONNECTIONS,
		DmsActions.DESCRIBE_CONVERSION_CONFIGURATION,
		DmsActions.DESCRIBE_DATA_MIGRATIONS,
		DmsActions.DESCRIBE_ENDPOINT_SETTINGS,
		DmsActions.DESCRIBE_ENDPOINT_TYPES,
		DmsActions.DESCRIBE_ENDPOINTS,
		DmsActions.DESCRIBE_ENGINE_VERSIONS,
		DmsActions.DESCRIBE_EVENT_CATEGORIES,
		DmsActions.DESCRIBE_EVENT_SUBSCRIPTIONS,
		DmsActions.DESCRIBE_EVENTS,
		DmsActions.DESCRIBE_FLEET_ADVISOR_COLLECTORS,
		DmsActions.DESCRIBE_FLEET_ADVISOR_DATABASES,
		DmsActions.DESCRIBE_FLEET_ADVISOR_LSA_ANALYSIS,
		DmsActions.DESCRIBE_FLEET_ADVISOR_SCHEMA_OBJECT_SUMMARY,
		DmsActions.DESCRIBE_FLEET_ADVISOR_SCHEMAS,
		DmsActions.DESCRIBE_METADATA_MODEL,
		DmsActions.DESCRIBE_METADATA_MODEL_CHILDREN,
		DmsActions.DESCRIBE_METADATA_MODEL_CREATIONS,
		DmsActions.DESCRIBE_METADATA_MODEL_IMPORTS,
		DmsActions.DESCRIBE_ORDERABLE_REPLICATION_INSTANCES,
		DmsActions.DESCRIBE_PENDING_MAINTENANCE_ACTIONS,
		DmsActions.DESCRIBE_RECOMMENDATION_LIMITATIONS,
		DmsActions.DESCRIBE_RECOMMENDATIONS,
		DmsActions.DESCRIBE_REFRESH_SCHEMAS_STATUS,
		DmsActions.DESCRIBE_REPLICATION_CONFIGS,
		DmsActions.DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS,
		DmsActions.DESCRIBE_REPLICATION_INSTANCES,
		DmsActions.DESCRIBE_REPLICATION_SUBNET_GROUPS,
		DmsActions.DESCRIBE_REPLICATION_TABLE_STATISTICS,
		DmsActions.DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS,
		DmsActions.DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS,
		DmsActions.DESCRIBE_REPLICATION_TASK_INDIVIDUAL_ASSESSMENTS,
		DmsActions.DESCRIBE_REPLICATION_TASKS,
		DmsActions.DESCRIBE_REPLICATIONS,
		DmsActions.DESCRIBE_SCHEMAS,
		DmsActions.DESCRIBE_TABLE_STATISTICS,
		DmsActions.GET_METADATA_MODEL,
		DmsActions.GET_TARGET_SELECTION_RULES,
		DmsActions.LIST_DATA_PROVIDERS,
		DmsActions.LIST_EXTENSION_PACKS,
		DmsActions.LIST_INSTANCE_PROFILES,
		DmsActions.LIST_METADATA_MODEL_ASSESSMENT_ACTION_ITEMS,
		DmsActions.LIST_METADATA_MODEL_ASSESSMENTS,
		DmsActions.LIST_METADATA_MODEL_CONVERSIONS,
		DmsActions.LIST_METADATA_MODEL_EXPORTS,
		DmsActions.LIST_MIGRATION_PROJECTS,
		DmsActions.LIST_TAGS_FOR_RESOURCE,
		DmsActions.TEST_CONNECTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DmsActions.APPLY_PENDING_MAINTENANCE_ACTION,
		DmsActions.ASSOCIATE_EXTENSION_PACK,
		DmsActions.BATCH_START_RECOMMENDATIONS,
		DmsActions.CANCEL_METADATA_MODEL_CONVERSION,
		DmsActions.CANCEL_METADATA_MODEL_CREATION,
		DmsActions.CANCEL_REPLICATION_TASK_ASSESSMENT_RUN,
		DmsActions.CREATE_DATA_MIGRATION,
		DmsActions.CREATE_DATA_PROVIDER,
		DmsActions.CREATE_ENDPOINT,
		DmsActions.CREATE_EVENT_SUBSCRIPTION,
		DmsActions.CREATE_FLEET_ADVISOR_COLLECTOR,
		DmsActions.CREATE_INSTANCE_PROFILE,
		DmsActions.CREATE_MIGRATION_PROJECT,
		DmsActions.CREATE_OUTBOUND_INTEGRATION,
		DmsActions.CREATE_REPLICATION_CONFIG,
		DmsActions.CREATE_REPLICATION_INSTANCE,
		DmsActions.CREATE_REPLICATION_SUBNET_GROUP,
		DmsActions.CREATE_REPLICATION_TASK,
		DmsActions.DELETE_CERTIFICATE,
		DmsActions.DELETE_CONNECTION,
		DmsActions.DELETE_DATA_MIGRATION,
		DmsActions.DELETE_DATA_PROVIDER,
		DmsActions.DELETE_ENDPOINT,
		DmsActions.DELETE_EVENT_SUBSCRIPTION,
		DmsActions.DELETE_FLEET_ADVISOR_COLLECTOR,
		DmsActions.DELETE_FLEET_ADVISOR_DATABASES,
		DmsActions.DELETE_INSTANCE_PROFILE,
		DmsActions.DELETE_MIGRATION_PROJECT,
		DmsActions.DELETE_REPLICATION_CONFIG,
		DmsActions.DELETE_REPLICATION_INSTANCE,
		DmsActions.DELETE_REPLICATION_SUBNET_GROUP,
		DmsActions.DELETE_REPLICATION_TASK,
		DmsActions.DELETE_REPLICATION_TASK_ASSESSMENT_RUN,
		DmsActions.EXPORT_METADATA_MODEL_ASSESSMENT,
		DmsActions.IMPORT_CERTIFICATE,
		DmsActions.MODIFY_DATA_MIGRATION,
		DmsActions.MODIFY_ENDPOINT,
		DmsActions.MODIFY_EVENT_SUBSCRIPTION,
		DmsActions.MODIFY_FLEET_ADVISOR_COLLECTOR,
		DmsActions.MODIFY_FLEET_ADVISOR_COLLECTOR_STATUSES,
		DmsActions.MODIFY_OUTBOUND_INTEGRATION,
		DmsActions.MODIFY_REPLICATION_CONFIG,
		DmsActions.MODIFY_REPLICATION_INSTANCE,
		DmsActions.MODIFY_REPLICATION_SUBNET_GROUP,
		DmsActions.MODIFY_REPLICATION_TASK,
		DmsActions.MOVE_REPLICATION_TASK,
		DmsActions.REBOOT_REPLICATION_INSTANCE,
		DmsActions.REFRESH_SCHEMAS,
		DmsActions.RELOAD_REPLICATION_TABLES,
		DmsActions.RELOAD_TABLES,
		DmsActions.RUN_FLEET_ADVISOR_LSA_ANALYSIS,
		DmsActions.START_DATA_MIGRATION,
		DmsActions.START_METADATA_MODEL_ASSESSMENT,
		DmsActions.START_METADATA_MODEL_CONVERSION,
		DmsActions.START_METADATA_MODEL_CREATION,
		DmsActions.START_METADATA_MODEL_EXPORT_AS_SCRIPTS,
		DmsActions.START_METADATA_MODEL_EXPORT_TO_TARGET,
		DmsActions.START_METADATA_MODEL_IMPORT,
		DmsActions.START_RECOMMENDATIONS,
		DmsActions.START_REPLICATION,
		DmsActions.START_REPLICATION_TASK,
		DmsActions.START_REPLICATION_TASK_ASSESSMENT,
		DmsActions.START_REPLICATION_TASK_ASSESSMENT_RUN,
		DmsActions.STOP_DATA_MIGRATION,
		DmsActions.STOP_REPLICATION,
		DmsActions.STOP_REPLICATION_TASK,
		DmsActions.UPDATE_CONVERSION_CONFIGURATION,
		DmsActions.UPDATE_DATA_PROVIDER,
		DmsActions.UPDATE_INSTANCE_PROFILE,
		DmsActions.UPDATE_MIGRATION_PROJECT,
		DmsActions.UPDATE_SUBSCRIPTIONS_TO_EVENT_BRIDGE,
		DmsActions.UPLOAD_FILE_METADATA_LIST,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DmsActions.ADD_TAGS_TO_RESOURCE,
		DmsActions.REMOVE_TAGS_FROM_RESOURCE,
	];
}

const CertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):cert:.*$",
);
const DataMigrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):data-migration:.*$",
);
const DataProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):data-provider:.*$",
);
const EndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):endpoint:.*$",
);
const EventSubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):es:.*$",
);
const InstanceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):instance-profile:.*$",
);
const MigrationProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):migration-project:.*$",
);
const ReplicationConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):replication-config:.*$",
);
const ReplicationInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):rep:.*$",
);
const ReplicationSubnetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):subgrp:.*$",
);
const ReplicationTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):task:.*$",
);
const ReplicationTaskAssessmentRunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):assessment-run:.*$",
);
const ReplicationTaskIndividualAssessmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):individual-assessment:.*$",
);

/**
 * ARN builders, validators, and parsers for dms resources.
 */
export class DmsResources {
	/**
	 * Builds an ARN for the Certificate resource.
	 */
	static certificate(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:cert:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Certificate resource.
	 */
	static isValidCertificateArn(arn: string): boolean {
		return CertificateArnRegex.test(arn);
	}

	/**
	 * Parses a Certificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = CertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Certificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the DataMigration resource.
	 */
	static dataMigration(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:data-migration:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DataMigration resource.
	 */
	static isValidDataMigrationArn(arn: string): boolean {
		return DataMigrationArnRegex.test(arn);
	}

	/**
	 * Parses a DataMigration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataMigrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = DataMigrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DataMigration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the DataProvider resource.
	 */
	static dataProvider(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:data-provider:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DataProvider resource.
	 */
	static isValidDataProviderArn(arn: string): boolean {
		return DataProviderArnRegex.test(arn);
	}

	/**
	 * Parses a DataProvider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = DataProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DataProvider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Endpoint resource.
	 */
	static endpoint(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:endpoint:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a Endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the EventSubscription resource.
	 */
	static eventSubscription(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:es:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EventSubscription resource.
	 */
	static isValidEventSubscriptionArn(arn: string): boolean {
		return EventSubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a EventSubscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = EventSubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EventSubscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the InstanceProfile resource.
	 */
	static instanceProfile(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:instance-profile:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the InstanceProfile resource.
	 */
	static isValidInstanceProfileArn(arn: string): boolean {
		return InstanceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a InstanceProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = InstanceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid InstanceProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the MigrationProject resource.
	 */
	static migrationProject(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:migration-project:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MigrationProject resource.
	 */
	static isValidMigrationProjectArn(arn: string): boolean {
		return MigrationProjectArnRegex.test(arn);
	}

	/**
	 * Parses a MigrationProject ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMigrationProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = MigrationProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MigrationProject ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationConfig resource.
	 */
	static replicationConfig(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:replication-config:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationConfig resource.
	 */
	static isValidReplicationConfigArn(arn: string): boolean {
		return ReplicationConfigArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationConfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ReplicationConfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationInstance resource.
	 */
	static replicationInstance(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:rep:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationInstance resource.
	 */
	static isValidReplicationInstanceArn(arn: string): boolean {
		return ReplicationInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationInstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ReplicationInstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationSubnetGroup resource.
	 */
	static replicationSubnetGroup(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:subgrp:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationSubnetGroup resource.
	 */
	static isValidReplicationSubnetGroupArn(arn: string): boolean {
		return ReplicationSubnetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationSubnetGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationSubnetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationSubnetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ReplicationSubnetGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationTask resource.
	 */
	static replicationTask(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:task:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationTask resource.
	 */
	static isValidReplicationTaskArn(arn: string): boolean {
		return ReplicationTaskArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ReplicationTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationTaskAssessmentRun resource.
	 */
	static replicationTaskAssessmentRun(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:assessment-run:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationTaskAssessmentRun resource.
	 */
	static isValidReplicationTaskAssessmentRunArn(arn: string): boolean {
		return ReplicationTaskAssessmentRunArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationTaskAssessmentRun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationTaskAssessmentRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationTaskAssessmentRunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ReplicationTaskAssessmentRun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ReplicationTaskIndividualAssessment resource.
	 */
	static replicationTaskIndividualAssessment(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dms:${props.region ?? "*"}:${props.account ?? "*"}:individual-assessment:*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationTaskIndividualAssessment resource.
	 */
	static isValidReplicationTaskIndividualAssessmentArn(arn: string): boolean {
		return ReplicationTaskIndividualAssessmentArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationTaskIndividualAssessment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationTaskIndividualAssessmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ReplicationTaskIndividualAssessmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid ReplicationTaskIndividualAssessment ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dms.
 */
export class DmsOperations {
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = ["dms:AddTagsToResource"];
	/** IAM actions required for the ApplyPendingMaintenanceAction API call. */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION: string[] = [
		"dms:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the BatchStartRecommendations API call. */
	static readonly BATCH_START_RECOMMENDATIONS: string[] = [
		"dms:BatchStartRecommendations",
	];
	/** IAM actions required for the CancelMetadataModelConversion API call. */
	static readonly CANCEL_METADATA_MODEL_CONVERSION: string[] = [
		"dms:CancelMetadataModelConversion",
	];
	/** IAM actions required for the CancelMetadataModelCreation API call. */
	static readonly CANCEL_METADATA_MODEL_CREATION: string[] = [
		"dms:CancelMetadataModelCreation",
	];
	/** IAM actions required for the CancelReplicationTaskAssessmentRun API call. */
	static readonly CANCEL_REPLICATION_TASK_ASSESSMENT_RUN: string[] = [
		"dms:CancelReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the CreateDataMigration API call. */
	static readonly CREATE_DATA_MIGRATION: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateDataMigration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataProvider API call. */
	static readonly CREATE_DATA_PROVIDER: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateDataProvider",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CREATE_ENDPOINT: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CREATE_EVENT_SUBSCRIPTION: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateEventSubscription",
	];
	/** IAM actions required for the CreateFleetAdvisorCollector API call. */
	static readonly CREATE_FLEET_ADVISOR_COLLECTOR: string[] = [
		"dms:CreateFleetAdvisorCollector",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CREATE_INSTANCE_PROFILE: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateInstanceProfile",
	];
	/** IAM actions required for the CreateMigrationProject API call. */
	static readonly CREATE_MIGRATION_PROJECT: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateMigrationProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReplicationConfig API call. */
	static readonly CREATE_REPLICATION_CONFIG: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationConfig",
	];
	/** IAM actions required for the CreateReplicationInstance API call. */
	static readonly CREATE_REPLICATION_INSTANCE: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReplicationSubnetGroup API call. */
	static readonly CREATE_REPLICATION_SUBNET_GROUP: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationSubnetGroup",
	];
	/** IAM actions required for the CreateReplicationTask API call. */
	static readonly CREATE_REPLICATION_TASK: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationTask",
	];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DELETE_CERTIFICATE: string[] = ["dms:DeleteCertificate"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = ["dms:DeleteConnection"];
	/** IAM actions required for the DeleteDataMigration API call. */
	static readonly DELETE_DATA_MIGRATION: string[] = ["dms:DeleteDataMigration"];
	/** IAM actions required for the DeleteDataProvider API call. */
	static readonly DELETE_DATA_PROVIDER: string[] = ["dms:DeleteDataProvider"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["dms:DeleteEndpoint"];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DELETE_EVENT_SUBSCRIPTION: string[] = [
		"dms:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteFleetAdvisorCollector API call. */
	static readonly DELETE_FLEET_ADVISOR_COLLECTOR: string[] = [
		"dms:DeleteFleetAdvisorCollector",
	];
	/** IAM actions required for the DeleteFleetAdvisorDatabases API call. */
	static readonly DELETE_FLEET_ADVISOR_DATABASES: string[] = [
		"dms:DeleteFleetAdvisorDatabases",
	];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DELETE_INSTANCE_PROFILE: string[] = [
		"dms:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteMigrationProject API call. */
	static readonly DELETE_MIGRATION_PROJECT: string[] = [
		"dms:DeleteMigrationProject",
	];
	/** IAM actions required for the DeleteReplicationConfig API call. */
	static readonly DELETE_REPLICATION_CONFIG: string[] = [
		"dms:DeleteReplicationConfig",
	];
	/** IAM actions required for the DeleteReplicationInstance API call. */
	static readonly DELETE_REPLICATION_INSTANCE: string[] = [
		"dms:DeleteReplicationInstance",
	];
	/** IAM actions required for the DeleteReplicationSubnetGroup API call. */
	static readonly DELETE_REPLICATION_SUBNET_GROUP: string[] = [
		"dms:DeleteReplicationSubnetGroup",
	];
	/** IAM actions required for the DeleteReplicationTask API call. */
	static readonly DELETE_REPLICATION_TASK: string[] = [
		"dms:DeleteReplicationTask",
	];
	/** IAM actions required for the DeleteReplicationTaskAssessmentRun API call. */
	static readonly DELETE_REPLICATION_TASK_ASSESSMENT_RUN: string[] = [
		"dms:DeleteReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES: string[] = [
		"dms:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeApplicableIndividualAssessments API call. */
	static readonly DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS: string[] = [
		"dms:DescribeApplicableIndividualAssessments",
	];
	/** IAM actions required for the DescribeCertificates API call. */
	static readonly DESCRIBE_CERTIFICATES: string[] = [
		"dms:DescribeCertificates",
	];
	/** IAM actions required for the DescribeConnections API call. */
	static readonly DESCRIBE_CONNECTIONS: string[] = ["dms:DescribeConnections"];
	/** IAM actions required for the DescribeConversionConfiguration API call. */
	static readonly DESCRIBE_CONVERSION_CONFIGURATION: string[] = [
		"dms:DescribeConversionConfiguration",
	];
	/** IAM actions required for the DescribeDataMigrations API call. */
	static readonly DESCRIBE_DATA_MIGRATIONS: string[] = [
		"dms:DescribeDataMigrations",
	];
	/** IAM actions required for the DescribeDataProviders API call. */
	static readonly DESCRIBE_DATA_PROVIDERS: string[] = ["dms:ListDataProviders"];
	/** IAM actions required for the DescribeEndpointSettings API call. */
	static readonly DESCRIBE_ENDPOINT_SETTINGS: string[] = [
		"dms:DescribeEndpointSettings",
	];
	/** IAM actions required for the DescribeEndpointTypes API call. */
	static readonly DESCRIBE_ENDPOINT_TYPES: string[] = [
		"dms:DescribeEndpointTypes",
	];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DESCRIBE_ENDPOINTS: string[] = ["dms:DescribeEndpoints"];
	/** IAM actions required for the DescribeEngineVersions API call. */
	static readonly DESCRIBE_ENGINE_VERSIONS: string[] = [
		"dms:DescribeEngineVersions",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DESCRIBE_EVENT_CATEGORIES: string[] = [
		"dms:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS: string[] = [
		"dms:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["dms:DescribeEvents"];
	/** IAM actions required for the DescribeExtensionPackAssociations API call. */
	static readonly DESCRIBE_EXTENSION_PACK_ASSOCIATIONS: string[] = [
		"dms:ListExtensionPacks",
	];
	/** IAM actions required for the DescribeFleetAdvisorCollectors API call. */
	static readonly DESCRIBE_FLEET_ADVISOR_COLLECTORS: string[] = [
		"dms:DescribeFleetAdvisorCollectors",
	];
	/** IAM actions required for the DescribeFleetAdvisorDatabases API call. */
	static readonly DESCRIBE_FLEET_ADVISOR_DATABASES: string[] = [
		"dms:DescribeFleetAdvisorDatabases",
	];
	/** IAM actions required for the DescribeFleetAdvisorLsaAnalysis API call. */
	static readonly DESCRIBE_FLEET_ADVISOR_LSA_ANALYSIS: string[] = [
		"dms:DescribeFleetAdvisorLsaAnalysis",
	];
	/** IAM actions required for the DescribeFleetAdvisorSchemaObjectSummary API call. */
	static readonly DESCRIBE_FLEET_ADVISOR_SCHEMA_OBJECT_SUMMARY: string[] = [
		"dms:DescribeFleetAdvisorSchemaObjectSummary",
	];
	/** IAM actions required for the DescribeFleetAdvisorSchemas API call. */
	static readonly DESCRIBE_FLEET_ADVISOR_SCHEMAS: string[] = [
		"dms:DescribeFleetAdvisorSchemas",
	];
	/** IAM actions required for the DescribeInstanceProfiles API call. */
	static readonly DESCRIBE_INSTANCE_PROFILES: string[] = [
		"dms:ListInstanceProfiles",
	];
	/** IAM actions required for the DescribeMetadataModel API call. */
	static readonly DESCRIBE_METADATA_MODEL: string[] = [
		"dms:DescribeMetadataModel",
	];
	/** IAM actions required for the DescribeMetadataModelAssessments API call. */
	static readonly DESCRIBE_METADATA_MODEL_ASSESSMENTS: string[] = [
		"dms:ListMetadataModelAssessments",
	];
	/** IAM actions required for the DescribeMetadataModelChildren API call. */
	static readonly DESCRIBE_METADATA_MODEL_CHILDREN: string[] = [
		"dms:DescribeMetadataModelChildren",
	];
	/** IAM actions required for the DescribeMetadataModelConversions API call. */
	static readonly DESCRIBE_METADATA_MODEL_CONVERSIONS: string[] = [
		"dms:ListMetadataModelConversions",
	];
	/** IAM actions required for the DescribeMetadataModelCreations API call. */
	static readonly DESCRIBE_METADATA_MODEL_CREATIONS: string[] = [
		"dms:DescribeMetadataModelCreations",
	];
	/** IAM actions required for the DescribeMetadataModelExportsAsScript API call. */
	static readonly DESCRIBE_METADATA_MODEL_EXPORTS_AS_SCRIPT: string[] = [
		"dms:ListMetadataModelExports",
	];
	/** IAM actions required for the DescribeMetadataModelExportsToTarget API call. */
	static readonly DESCRIBE_METADATA_MODEL_EXPORTS_TO_TARGET: string[] = [
		"dms:ListMetadataModelExports",
	];
	/** IAM actions required for the DescribeMetadataModelImports API call. */
	static readonly DESCRIBE_METADATA_MODEL_IMPORTS: string[] = [
		"dms:DescribeMetadataModelImports",
	];
	/** IAM actions required for the DescribeMigrationProjects API call. */
	static readonly DESCRIBE_MIGRATION_PROJECTS: string[] = [
		"dms:ListMigrationProjects",
	];
	/** IAM actions required for the DescribeOrderableReplicationInstances API call. */
	static readonly DESCRIBE_ORDERABLE_REPLICATION_INSTANCES: string[] = [
		"dms:DescribeOrderableReplicationInstances",
	];
	/** IAM actions required for the DescribePendingMaintenanceActions API call. */
	static readonly DESCRIBE_PENDING_MAINTENANCE_ACTIONS: string[] = [
		"dms:DescribePendingMaintenanceActions",
	];
	/** IAM actions required for the DescribeRecommendationLimitations API call. */
	static readonly DESCRIBE_RECOMMENDATION_LIMITATIONS: string[] = [
		"dms:DescribeRecommendationLimitations",
	];
	/** IAM actions required for the DescribeRecommendations API call. */
	static readonly DESCRIBE_RECOMMENDATIONS: string[] = [
		"dms:DescribeRecommendations",
	];
	/** IAM actions required for the DescribeRefreshSchemasStatus API call. */
	static readonly DESCRIBE_REFRESH_SCHEMAS_STATUS: string[] = [
		"dms:DescribeRefreshSchemasStatus",
	];
	/** IAM actions required for the DescribeReplicationConfigs API call. */
	static readonly DESCRIBE_REPLICATION_CONFIGS: string[] = [
		"dms:DescribeReplicationConfigs",
	];
	/** IAM actions required for the DescribeReplicationInstanceTaskLogs API call. */
	static readonly DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS: string[] = [
		"dms:DescribeReplicationInstanceTaskLogs",
	];
	/** IAM actions required for the DescribeReplicationInstances API call. */
	static readonly DESCRIBE_REPLICATION_INSTANCES: string[] = [
		"dms:DescribeReplicationInstances",
	];
	/** IAM actions required for the DescribeReplicationSubnetGroups API call. */
	static readonly DESCRIBE_REPLICATION_SUBNET_GROUPS: string[] = [
		"dms:DescribeReplicationSubnetGroups",
	];
	/** IAM actions required for the DescribeReplicationTableStatistics API call. */
	static readonly DESCRIBE_REPLICATION_TABLE_STATISTICS: string[] = [
		"dms:DescribeReplicationTableStatistics",
	];
	/** IAM actions required for the DescribeReplicationTaskAssessmentResults API call. */
	static readonly DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS: string[] = [
		"dms:DescribeReplicationTaskAssessmentResults",
	];
	/** IAM actions required for the DescribeReplicationTaskAssessmentRuns API call. */
	static readonly DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS: string[] = [
		"dms:DescribeReplicationTaskAssessmentRuns",
	];
	/** IAM actions required for the DescribeReplicationTaskIndividualAssessments API call. */
	static readonly DESCRIBE_REPLICATION_TASK_INDIVIDUAL_ASSESSMENTS: string[] = [
		"dms:DescribeReplicationTaskIndividualAssessments",
	];
	/** IAM actions required for the DescribeReplicationTasks API call. */
	static readonly DESCRIBE_REPLICATION_TASKS: string[] = [
		"dms:DescribeReplicationTasks",
	];
	/** IAM actions required for the DescribeReplications API call. */
	static readonly DESCRIBE_REPLICATIONS: string[] = [
		"dms:DescribeReplications",
	];
	/** IAM actions required for the DescribeSchemas API call. */
	static readonly DESCRIBE_SCHEMAS: string[] = ["dms:DescribeSchemas"];
	/** IAM actions required for the DescribeTableStatistics API call. */
	static readonly DESCRIBE_TABLE_STATISTICS: string[] = [
		"dms:DescribeTableStatistics",
	];
	/** IAM actions required for the ExportMetadataModelAssessment API call. */
	static readonly EXPORT_METADATA_MODEL_ASSESSMENT: string[] = [
		"dms:ExportMetadataModelAssessment",
	];
	/** IAM actions required for the GetTargetSelectionRules API call. */
	static readonly GET_TARGET_SELECTION_RULES: string[] = [
		"dms:GetTargetSelectionRules",
	];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly IMPORT_CERTIFICATE: string[] = [
		"dms:AddTagsToResource",
		"dms:ImportCertificate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"dms:ListTagsForResource",
	];
	/** IAM actions required for the ModifyConversionConfiguration API call. */
	static readonly MODIFY_CONVERSION_CONFIGURATION: string[] = [
		"dms:UpdateConversionConfiguration",
	];
	/** IAM actions required for the ModifyDataMigration API call. */
	static readonly MODIFY_DATA_MIGRATION: string[] = [
		"dms:ModifyDataMigration",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDataProvider API call. */
	static readonly MODIFY_DATA_PROVIDER: string[] = [
		"iam:PassRole",
		"dms:UpdateDataProvider",
	];
	/** IAM actions required for the ModifyEndpoint API call. */
	static readonly MODIFY_ENDPOINT: string[] = [
		"dms:ModifyEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly MODIFY_EVENT_SUBSCRIPTION: string[] = [
		"dms:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyInstanceProfile API call. */
	static readonly MODIFY_INSTANCE_PROFILE: string[] = [
		"dms:UpdateInstanceProfile",
	];
	/** IAM actions required for the ModifyMigrationProject API call. */
	static readonly MODIFY_MIGRATION_PROJECT: string[] = [
		"iam:PassRole",
		"dms:UpdateMigrationProject",
	];
	/** IAM actions required for the ModifyReplicationConfig API call. */
	static readonly MODIFY_REPLICATION_CONFIG: string[] = [
		"dms:ModifyReplicationConfig",
	];
	/** IAM actions required for the ModifyReplicationInstance API call. */
	static readonly MODIFY_REPLICATION_INSTANCE: string[] = [
		"dms:ModifyReplicationInstance",
	];
	/** IAM actions required for the ModifyReplicationSubnetGroup API call. */
	static readonly MODIFY_REPLICATION_SUBNET_GROUP: string[] = [
		"dms:ModifyReplicationSubnetGroup",
	];
	/** IAM actions required for the ModifyReplicationTask API call. */
	static readonly MODIFY_REPLICATION_TASK: string[] = [
		"dms:ModifyReplicationTask",
	];
	/** IAM actions required for the MoveReplicationTask API call. */
	static readonly MOVE_REPLICATION_TASK: string[] = ["dms:MoveReplicationTask"];
	/** IAM actions required for the RebootReplicationInstance API call. */
	static readonly REBOOT_REPLICATION_INSTANCE: string[] = [
		"dms:RebootReplicationInstance",
	];
	/** IAM actions required for the RefreshSchemas API call. */
	static readonly REFRESH_SCHEMAS: string[] = ["dms:RefreshSchemas"];
	/** IAM actions required for the ReloadReplicationTables API call. */
	static readonly RELOAD_REPLICATION_TABLES: string[] = [
		"dms:ReloadReplicationTables",
	];
	/** IAM actions required for the ReloadTables API call. */
	static readonly RELOAD_TABLES: string[] = ["dms:ReloadTables"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [
		"dms:RemoveTagsFromResource",
	];
	/** IAM actions required for the RunFleetAdvisorLsaAnalysis API call. */
	static readonly RUN_FLEET_ADVISOR_LSA_ANALYSIS: string[] = [
		"dms:RunFleetAdvisorLsaAnalysis",
	];
	/** IAM actions required for the StartDataMigration API call. */
	static readonly START_DATA_MIGRATION: string[] = ["dms:StartDataMigration"];
	/** IAM actions required for the StartExtensionPackAssociation API call. */
	static readonly START_EXTENSION_PACK_ASSOCIATION: string[] = [
		"dms:AssociateExtensionPack",
	];
	/** IAM actions required for the StartMetadataModelAssessment API call. */
	static readonly START_METADATA_MODEL_ASSESSMENT: string[] = [
		"dms:StartMetadataModelAssessment",
	];
	/** IAM actions required for the StartMetadataModelConversion API call. */
	static readonly START_METADATA_MODEL_CONVERSION: string[] = [
		"dms:StartMetadataModelConversion",
	];
	/** IAM actions required for the StartMetadataModelCreation API call. */
	static readonly START_METADATA_MODEL_CREATION: string[] = [
		"dms:StartMetadataModelCreation",
	];
	/** IAM actions required for the StartMetadataModelExportAsScript API call. */
	static readonly START_METADATA_MODEL_EXPORT_AS_SCRIPT: string[] = [
		"dms:StartMetadataModelExportAsScripts",
	];
	/** IAM actions required for the StartMetadataModelExportToTarget API call. */
	static readonly START_METADATA_MODEL_EXPORT_TO_TARGET: string[] = [
		"dms:StartMetadataModelExportToTarget",
	];
	/** IAM actions required for the StartMetadataModelImport API call. */
	static readonly START_METADATA_MODEL_IMPORT: string[] = [
		"dms:StartMetadataModelImport",
	];
	/** IAM actions required for the StartRecommendations API call. */
	static readonly START_RECOMMENDATIONS: string[] = [
		"dms:StartRecommendations",
	];
	/** IAM actions required for the StartReplication API call. */
	static readonly START_REPLICATION: string[] = ["dms:StartReplication"];
	/** IAM actions required for the StartReplicationTask API call. */
	static readonly START_REPLICATION_TASK: string[] = [
		"dms:StartReplicationTask",
	];
	/** IAM actions required for the StartReplicationTaskAssessment API call. */
	static readonly START_REPLICATION_TASK_ASSESSMENT: string[] = [
		"dms:StartReplicationTaskAssessment",
	];
	/** IAM actions required for the StartReplicationTaskAssessmentRun API call. */
	static readonly START_REPLICATION_TASK_ASSESSMENT_RUN: string[] = [
		"dms:AddTagsToResource",
		"iam:PassRole",
		"dms:StartReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the StopDataMigration API call. */
	static readonly STOP_DATA_MIGRATION: string[] = ["dms:StopDataMigration"];
	/** IAM actions required for the StopReplication API call. */
	static readonly STOP_REPLICATION: string[] = ["dms:StopReplication"];
	/** IAM actions required for the StopReplicationTask API call. */
	static readonly STOP_REPLICATION_TASK: string[] = ["dms:StopReplicationTask"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TEST_CONNECTION: string[] = ["dms:TestConnection"];
	/** IAM actions required for the UpdateSubscriptionsToEventBridge API call. */
	static readonly UPDATE_SUBSCRIPTIONS_TO_EVENT_BRIDGE: string[] = [
		"dms:UpdateSubscriptionsToEventBridge",
	];
}

/**
 * Condition key constants and builders for dms.
 */
export class DmsConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataMigration action. */
	static readonly CREATE_DATA_MIGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataProvider action. */
	static readonly CREATE_DATA_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CREATE_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CREATE_EVENT_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateInstanceProfile action. */
	static readonly CREATE_INSTANCE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateMigrationProject action. */
	static readonly CREATE_MIGRATION_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateOutboundIntegration action. */
	static readonly CREATE_OUTBOUND_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationConfig action. */
	static readonly CREATE_REPLICATION_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationInstance action. */
	static readonly CREATE_REPLICATION_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationSubnetGroup action. */
	static readonly CREATE_REPLICATION_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationTask action. */
	static readonly CREATE_REPLICATION_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReplicationInstanceTaskLogs action. */
	static readonly DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly IMPORT_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: dms:assessment-run-tag/${TagKey} (String) */
	static readonly ASSESSMENT_RUN_TAG = "dms:assessment-run-tag/${TagKey}";
	/** Condition key: dms:cert-tag/${TagKey} (String) */
	static readonly CERT_TAG = "dms:cert-tag/${TagKey}";
	/** Condition key: dms:data-migration-tag/${TagKey} (String) */
	static readonly DATA_MIGRATION_TAG = "dms:data-migration-tag/${TagKey}";
	/** Condition key: dms:data-provider-tag/${TagKey} (String) */
	static readonly DATA_PROVIDER_TAG = "dms:data-provider-tag/${TagKey}";
	/** Condition key: dms:endpoint-tag/${TagKey} (String) */
	static readonly ENDPOINT_TAG = "dms:endpoint-tag/${TagKey}";
	/** Condition key: dms:es-tag/${TagKey} (String) */
	static readonly ES_TAG = "dms:es-tag/${TagKey}";
	/** Condition key: dms:individual-assessment-tag/${TagKey} (String) */
	static readonly INDIVIDUAL_ASSESSMENT_TAG =
		"dms:individual-assessment-tag/${TagKey}";
	/** Condition key: dms:instance-profile-tag/${TagKey} (String) */
	static readonly INSTANCE_PROFILE_TAG = "dms:instance-profile-tag/${TagKey}";
	/** Condition key: dms:migration-project-tag/${TagKey} (String) */
	static readonly MIGRATION_PROJECT_TAG = "dms:migration-project-tag/${TagKey}";
	/** Condition key: dms:rep-tag/${TagKey} (String) */
	static readonly REP_TAG = "dms:rep-tag/${TagKey}";
	/** Condition key: dms:replication-config-tag/${TagKey} (String) */
	static readonly REPLICATION_CONFIG_TAG =
		"dms:replication-config-tag/${TagKey}";
	/** Condition key: dms:req-tag/${TagKey} (String) */
	static readonly REQ_TAG = "dms:req-tag/${TagKey}";
	/** Condition key: dms:subgrp-tag/${TagKey} (String) */
	static readonly SUBGRP_TAG = "dms:subgrp-tag/${TagKey}";
	/** Condition key: dms:task-tag/${TagKey} (String) */
	static readonly TASK_TAG = "dms:task-tag/${TagKey}";

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
	 * Generates a condition block for `dms:assessment-run-tag/${TagKey}`.
	 */
	static assessmentRunTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:assessment-run-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:cert-tag/${TagKey}`.
	 */
	static certTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:cert-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:data-migration-tag/${TagKey}`.
	 */
	static dataMigrationTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:data-migration-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:data-provider-tag/${TagKey}`.
	 */
	static dataProviderTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:data-provider-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:endpoint-tag/${TagKey}`.
	 */
	static endpointTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:endpoint-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:es-tag/${TagKey}`.
	 */
	static esTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:es-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:individual-assessment-tag/${TagKey}`.
	 */
	static individualAssessmentTag(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "dms:individual-assessment-tag/${TagKey}": value },
		};
	}

	/**
	 * Generates a condition block for `dms:instance-profile-tag/${TagKey}`.
	 */
	static instanceProfileTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:instance-profile-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:migration-project-tag/${TagKey}`.
	 */
	static migrationProjectTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:migration-project-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:rep-tag/${TagKey}`.
	 */
	static repTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:rep-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:replication-config-tag/${TagKey}`.
	 */
	static replicationConfigTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:replication-config-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:req-tag/${TagKey}`.
	 */
	static reqTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:req-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:subgrp-tag/${TagKey}`.
	 */
	static subgrpTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:subgrp-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `dms:task-tag/${TagKey}`.
	 */
	static taskTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dms:task-tag/${TagKey}": value } };
	}
}
