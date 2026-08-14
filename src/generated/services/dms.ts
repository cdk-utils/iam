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
	static readonly AddTagsToResource = "dms:AddTagsToResource";
	/** [Write] dms:ApplyPendingMaintenanceAction */
	static readonly ApplyPendingMaintenanceAction =
		"dms:ApplyPendingMaintenanceAction";
	/** [Write] dms:AssociateExtensionPack */
	static readonly AssociateExtensionPack = "dms:AssociateExtensionPack";
	/** [Write] dms:BatchStartRecommendations */
	static readonly BatchStartRecommendations = "dms:BatchStartRecommendations";
	/** [Write] dms:CancelMetadataModelConversion */
	static readonly CancelMetadataModelConversion =
		"dms:CancelMetadataModelConversion";
	/** [Write] dms:CancelMetadataModelCreation */
	static readonly CancelMetadataModelCreation =
		"dms:CancelMetadataModelCreation";
	/** [Write] dms:CancelReplicationTaskAssessmentRun */
	static readonly CancelReplicationTaskAssessmentRun =
		"dms:CancelReplicationTaskAssessmentRun";
	/** [Write] dms:CreateDataMigration */
	static readonly CreateDataMigration = "dms:CreateDataMigration";
	/** [Write] dms:CreateDataProvider */
	static readonly CreateDataProvider = "dms:CreateDataProvider";
	/** [Write] dms:CreateEndpoint */
	static readonly CreateEndpoint = "dms:CreateEndpoint";
	/** [Write] dms:CreateEventSubscription */
	static readonly CreateEventSubscription = "dms:CreateEventSubscription";
	/** [Write] dms:CreateFleetAdvisorCollector */
	static readonly CreateFleetAdvisorCollector =
		"dms:CreateFleetAdvisorCollector";
	/** [Write] dms:CreateInstanceProfile */
	static readonly CreateInstanceProfile = "dms:CreateInstanceProfile";
	/** [Write] dms:CreateMigrationProject */
	static readonly CreateMigrationProject = "dms:CreateMigrationProject";
	/** [Write] dms:CreateOutboundIntegration */
	static readonly CreateOutboundIntegration = "dms:CreateOutboundIntegration";
	/** [Write] dms:CreateReplicationConfig */
	static readonly CreateReplicationConfig = "dms:CreateReplicationConfig";
	/** [Write] dms:CreateReplicationInstance */
	static readonly CreateReplicationInstance = "dms:CreateReplicationInstance";
	/** [Write] dms:CreateReplicationSubnetGroup */
	static readonly CreateReplicationSubnetGroup =
		"dms:CreateReplicationSubnetGroup";
	/** [Write] dms:CreateReplicationTask */
	static readonly CreateReplicationTask = "dms:CreateReplicationTask";
	/** [Write] dms:DeleteCertificate */
	static readonly DeleteCertificate = "dms:DeleteCertificate";
	/** [Write] dms:DeleteConnection */
	static readonly DeleteConnection = "dms:DeleteConnection";
	/** [Write] dms:DeleteDataMigration */
	static readonly DeleteDataMigration = "dms:DeleteDataMigration";
	/** [Write] dms:DeleteDataProvider */
	static readonly DeleteDataProvider = "dms:DeleteDataProvider";
	/** [Write] dms:DeleteEndpoint */
	static readonly DeleteEndpoint = "dms:DeleteEndpoint";
	/** [Write] dms:DeleteEventSubscription */
	static readonly DeleteEventSubscription = "dms:DeleteEventSubscription";
	/** [Write] dms:DeleteFleetAdvisorCollector */
	static readonly DeleteFleetAdvisorCollector =
		"dms:DeleteFleetAdvisorCollector";
	/** [Write] dms:DeleteFleetAdvisorDatabases */
	static readonly DeleteFleetAdvisorDatabases =
		"dms:DeleteFleetAdvisorDatabases";
	/** [Write] dms:DeleteInstanceProfile */
	static readonly DeleteInstanceProfile = "dms:DeleteInstanceProfile";
	/** [Write] dms:DeleteMigrationProject */
	static readonly DeleteMigrationProject = "dms:DeleteMigrationProject";
	/** [Write] dms:DeleteReplicationConfig */
	static readonly DeleteReplicationConfig = "dms:DeleteReplicationConfig";
	/** [Write] dms:DeleteReplicationInstance */
	static readonly DeleteReplicationInstance = "dms:DeleteReplicationInstance";
	/** [Write] dms:DeleteReplicationSubnetGroup */
	static readonly DeleteReplicationSubnetGroup =
		"dms:DeleteReplicationSubnetGroup";
	/** [Write] dms:DeleteReplicationTask */
	static readonly DeleteReplicationTask = "dms:DeleteReplicationTask";
	/** [Write] dms:DeleteReplicationTaskAssessmentRun */
	static readonly DeleteReplicationTaskAssessmentRun =
		"dms:DeleteReplicationTaskAssessmentRun";
	/** [Read] dms:DescribeAccountAttributes */
	static readonly DescribeAccountAttributes = "dms:DescribeAccountAttributes";
	/** [Read] dms:DescribeApplicableIndividualAssessments */
	static readonly DescribeApplicableIndividualAssessments =
		"dms:DescribeApplicableIndividualAssessments";
	/** [Read] dms:DescribeCertificates */
	static readonly DescribeCertificates = "dms:DescribeCertificates";
	/** [Read] dms:DescribeConnections */
	static readonly DescribeConnections = "dms:DescribeConnections";
	/** [Read] dms:DescribeConversionConfiguration */
	static readonly DescribeConversionConfiguration =
		"dms:DescribeConversionConfiguration";
	/** [Read] dms:DescribeDataMigrations */
	static readonly DescribeDataMigrations = "dms:DescribeDataMigrations";
	/** [Read] dms:DescribeEndpointSettings */
	static readonly DescribeEndpointSettings = "dms:DescribeEndpointSettings";
	/** [Read] dms:DescribeEndpointTypes */
	static readonly DescribeEndpointTypes = "dms:DescribeEndpointTypes";
	/** [Read] dms:DescribeEndpoints */
	static readonly DescribeEndpoints = "dms:DescribeEndpoints";
	/** [Read] dms:DescribeEngineVersions */
	static readonly DescribeEngineVersions = "dms:DescribeEngineVersions";
	/** [Read] dms:DescribeEventCategories */
	static readonly DescribeEventCategories = "dms:DescribeEventCategories";
	/** [Read] dms:DescribeEventSubscriptions */
	static readonly DescribeEventSubscriptions = "dms:DescribeEventSubscriptions";
	/** [Read] dms:DescribeEvents */
	static readonly DescribeEvents = "dms:DescribeEvents";
	/** [Read] dms:DescribeFleetAdvisorCollectors */
	static readonly DescribeFleetAdvisorCollectors =
		"dms:DescribeFleetAdvisorCollectors";
	/** [Read] dms:DescribeFleetAdvisorDatabases */
	static readonly DescribeFleetAdvisorDatabases =
		"dms:DescribeFleetAdvisorDatabases";
	/** [Read] dms:DescribeFleetAdvisorLsaAnalysis */
	static readonly DescribeFleetAdvisorLsaAnalysis =
		"dms:DescribeFleetAdvisorLsaAnalysis";
	/** [Read] dms:DescribeFleetAdvisorSchemaObjectSummary */
	static readonly DescribeFleetAdvisorSchemaObjectSummary =
		"dms:DescribeFleetAdvisorSchemaObjectSummary";
	/** [Read] dms:DescribeFleetAdvisorSchemas */
	static readonly DescribeFleetAdvisorSchemas =
		"dms:DescribeFleetAdvisorSchemas";
	/** [Read] dms:DescribeMetadataModel */
	static readonly DescribeMetadataModel = "dms:DescribeMetadataModel";
	/** [Read] dms:DescribeMetadataModelChildren */
	static readonly DescribeMetadataModelChildren =
		"dms:DescribeMetadataModelChildren";
	/** [Read] dms:DescribeMetadataModelCreations */
	static readonly DescribeMetadataModelCreations =
		"dms:DescribeMetadataModelCreations";
	/** [Read] dms:DescribeMetadataModelImports */
	static readonly DescribeMetadataModelImports =
		"dms:DescribeMetadataModelImports";
	/** [Read] dms:DescribeOrderableReplicationInstances */
	static readonly DescribeOrderableReplicationInstances =
		"dms:DescribeOrderableReplicationInstances";
	/** [Read] dms:DescribePendingMaintenanceActions */
	static readonly DescribePendingMaintenanceActions =
		"dms:DescribePendingMaintenanceActions";
	/** [Read] dms:DescribeRecommendationLimitations */
	static readonly DescribeRecommendationLimitations =
		"dms:DescribeRecommendationLimitations";
	/** [Read] dms:DescribeRecommendations */
	static readonly DescribeRecommendations = "dms:DescribeRecommendations";
	/** [Read] dms:DescribeRefreshSchemasStatus */
	static readonly DescribeRefreshSchemasStatus =
		"dms:DescribeRefreshSchemasStatus";
	/** [Read] dms:DescribeReplicationConfigs */
	static readonly DescribeReplicationConfigs = "dms:DescribeReplicationConfigs";
	/** [Read] dms:DescribeReplicationInstanceTaskLogs */
	static readonly DescribeReplicationInstanceTaskLogs =
		"dms:DescribeReplicationInstanceTaskLogs";
	/** [Read] dms:DescribeReplicationInstances */
	static readonly DescribeReplicationInstances =
		"dms:DescribeReplicationInstances";
	/** [Read] dms:DescribeReplicationSubnetGroups */
	static readonly DescribeReplicationSubnetGroups =
		"dms:DescribeReplicationSubnetGroups";
	/** [Read] dms:DescribeReplicationTableStatistics */
	static readonly DescribeReplicationTableStatistics =
		"dms:DescribeReplicationTableStatistics";
	/** [Read] dms:DescribeReplicationTaskAssessmentResults */
	static readonly DescribeReplicationTaskAssessmentResults =
		"dms:DescribeReplicationTaskAssessmentResults";
	/** [Read] dms:DescribeReplicationTaskAssessmentRuns */
	static readonly DescribeReplicationTaskAssessmentRuns =
		"dms:DescribeReplicationTaskAssessmentRuns";
	/** [Read] dms:DescribeReplicationTaskIndividualAssessments */
	static readonly DescribeReplicationTaskIndividualAssessments =
		"dms:DescribeReplicationTaskIndividualAssessments";
	/** [Read] dms:DescribeReplicationTasks */
	static readonly DescribeReplicationTasks = "dms:DescribeReplicationTasks";
	/** [Read] dms:DescribeReplications */
	static readonly DescribeReplications = "dms:DescribeReplications";
	/** [Read] dms:DescribeSchemas */
	static readonly DescribeSchemas = "dms:DescribeSchemas";
	/** [Read] dms:DescribeTableStatistics */
	static readonly DescribeTableStatistics = "dms:DescribeTableStatistics";
	/** [Write] dms:ExportMetadataModelAssessment */
	static readonly ExportMetadataModelAssessment =
		"dms:ExportMetadataModelAssessment";
	/** [Read] dms:GetMetadataModel */
	static readonly actionGetMetadataModel = "dms:GetMetadataModel";
	/** [Read] dms:GetTargetSelectionRules */
	static readonly actionGetTargetSelectionRules = "dms:GetTargetSelectionRules";
	/** [Write] dms:ImportCertificate */
	static readonly ImportCertificate = "dms:ImportCertificate";
	/** [Read] dms:ListDataProviders */
	static readonly ListDataProviders = "dms:ListDataProviders";
	/** [Read] dms:ListExtensionPacks */
	static readonly ListExtensionPacks = "dms:ListExtensionPacks";
	/** [Read] dms:ListInstanceProfiles */
	static readonly ListInstanceProfiles = "dms:ListInstanceProfiles";
	/** [Read] dms:ListMetadataModelAssessmentActionItems */
	static readonly ListMetadataModelAssessmentActionItems =
		"dms:ListMetadataModelAssessmentActionItems";
	/** [Read] dms:ListMetadataModelAssessments */
	static readonly ListMetadataModelAssessments =
		"dms:ListMetadataModelAssessments";
	/** [Read] dms:ListMetadataModelConversions */
	static readonly ListMetadataModelConversions =
		"dms:ListMetadataModelConversions";
	/** [Read] dms:ListMetadataModelExports */
	static readonly ListMetadataModelExports = "dms:ListMetadataModelExports";
	/** [Read] dms:ListMigrationProjects */
	static readonly ListMigrationProjects = "dms:ListMigrationProjects";
	/** [Read] dms:ListTagsForResource */
	static readonly ListTagsForResource = "dms:ListTagsForResource";
	/** [Write] dms:ModifyDataMigration */
	static readonly ModifyDataMigration = "dms:ModifyDataMigration";
	/** [Write] dms:ModifyEndpoint */
	static readonly ModifyEndpoint = "dms:ModifyEndpoint";
	/** [Write] dms:ModifyEventSubscription */
	static readonly ModifyEventSubscription = "dms:ModifyEventSubscription";
	/** [Write] dms:ModifyFleetAdvisorCollector */
	static readonly ModifyFleetAdvisorCollector =
		"dms:ModifyFleetAdvisorCollector";
	/** [Write] dms:ModifyFleetAdvisorCollectorStatuses */
	static readonly ModifyFleetAdvisorCollectorStatuses =
		"dms:ModifyFleetAdvisorCollectorStatuses";
	/** [Write] dms:ModifyOutboundIntegration */
	static readonly ModifyOutboundIntegration = "dms:ModifyOutboundIntegration";
	/** [Write] dms:ModifyReplicationConfig */
	static readonly ModifyReplicationConfig = "dms:ModifyReplicationConfig";
	/** [Write] dms:ModifyReplicationInstance */
	static readonly ModifyReplicationInstance = "dms:ModifyReplicationInstance";
	/** [Write] dms:ModifyReplicationSubnetGroup */
	static readonly ModifyReplicationSubnetGroup =
		"dms:ModifyReplicationSubnetGroup";
	/** [Write] dms:ModifyReplicationTask */
	static readonly ModifyReplicationTask = "dms:ModifyReplicationTask";
	/** [Write] dms:MoveReplicationTask */
	static readonly MoveReplicationTask = "dms:MoveReplicationTask";
	/** [Write] dms:RebootReplicationInstance */
	static readonly RebootReplicationInstance = "dms:RebootReplicationInstance";
	/** [Write] dms:RefreshSchemas */
	static readonly RefreshSchemas = "dms:RefreshSchemas";
	/** [Write] dms:ReloadReplicationTables */
	static readonly ReloadReplicationTables = "dms:ReloadReplicationTables";
	/** [Write] dms:ReloadTables */
	static readonly ReloadTables = "dms:ReloadTables";
	/** [Tagging] dms:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource = "dms:RemoveTagsFromResource";
	/** [Write] dms:RunFleetAdvisorLsaAnalysis */
	static readonly RunFleetAdvisorLsaAnalysis = "dms:RunFleetAdvisorLsaAnalysis";
	/** [Write] dms:StartDataMigration */
	static readonly StartDataMigration = "dms:StartDataMigration";
	/** [Write] dms:StartMetadataModelAssessment */
	static readonly StartMetadataModelAssessment =
		"dms:StartMetadataModelAssessment";
	/** [Write] dms:StartMetadataModelConversion */
	static readonly StartMetadataModelConversion =
		"dms:StartMetadataModelConversion";
	/** [Write] dms:StartMetadataModelCreation */
	static readonly StartMetadataModelCreation = "dms:StartMetadataModelCreation";
	/** [Write] dms:StartMetadataModelExportAsScripts */
	static readonly StartMetadataModelExportAsScripts =
		"dms:StartMetadataModelExportAsScripts";
	/** [Write] dms:StartMetadataModelExportToTarget */
	static readonly StartMetadataModelExportToTarget =
		"dms:StartMetadataModelExportToTarget";
	/** [Write] dms:StartMetadataModelImport */
	static readonly StartMetadataModelImport = "dms:StartMetadataModelImport";
	/** [Write] dms:StartRecommendations */
	static readonly StartRecommendations = "dms:StartRecommendations";
	/** [Write] dms:StartReplication */
	static readonly StartReplication = "dms:StartReplication";
	/** [Write] dms:StartReplicationTask */
	static readonly StartReplicationTask = "dms:StartReplicationTask";
	/** [Write] dms:StartReplicationTaskAssessment */
	static readonly StartReplicationTaskAssessment =
		"dms:StartReplicationTaskAssessment";
	/** [Write] dms:StartReplicationTaskAssessmentRun */
	static readonly StartReplicationTaskAssessmentRun =
		"dms:StartReplicationTaskAssessmentRun";
	/** [Write] dms:StopDataMigration */
	static readonly StopDataMigration = "dms:StopDataMigration";
	/** [Write] dms:StopReplication */
	static readonly StopReplication = "dms:StopReplication";
	/** [Write] dms:StopReplicationTask */
	static readonly StopReplicationTask = "dms:StopReplicationTask";
	/** [Read] dms:TestConnection */
	static readonly TestConnection = "dms:TestConnection";
	/** [Write] dms:UpdateConversionConfiguration */
	static readonly UpdateConversionConfiguration =
		"dms:UpdateConversionConfiguration";
	/** [Write] dms:UpdateDataProvider */
	static readonly UpdateDataProvider = "dms:UpdateDataProvider";
	/** [Write] dms:UpdateInstanceProfile */
	static readonly UpdateInstanceProfile = "dms:UpdateInstanceProfile";
	/** [Write] dms:UpdateMigrationProject */
	static readonly UpdateMigrationProject = "dms:UpdateMigrationProject";
	/** [Write] dms:UpdateSubscriptionsToEventBridge */
	static readonly UpdateSubscriptionsToEventBridge =
		"dms:UpdateSubscriptionsToEventBridge";
	/** [Write] dms:UploadFileMetadataList */
	static readonly UploadFileMetadataList = "dms:UploadFileMetadataList";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DmsActions.DescribeAccountAttributes,
		DmsActions.DescribeApplicableIndividualAssessments,
		DmsActions.DescribeCertificates,
		DmsActions.DescribeConnections,
		DmsActions.DescribeConversionConfiguration,
		DmsActions.DescribeDataMigrations,
		DmsActions.DescribeEndpointSettings,
		DmsActions.DescribeEndpointTypes,
		DmsActions.DescribeEndpoints,
		DmsActions.DescribeEngineVersions,
		DmsActions.DescribeEventCategories,
		DmsActions.DescribeEventSubscriptions,
		DmsActions.DescribeEvents,
		DmsActions.DescribeFleetAdvisorCollectors,
		DmsActions.DescribeFleetAdvisorDatabases,
		DmsActions.DescribeFleetAdvisorLsaAnalysis,
		DmsActions.DescribeFleetAdvisorSchemaObjectSummary,
		DmsActions.DescribeFleetAdvisorSchemas,
		DmsActions.DescribeMetadataModel,
		DmsActions.DescribeMetadataModelChildren,
		DmsActions.DescribeMetadataModelCreations,
		DmsActions.DescribeMetadataModelImports,
		DmsActions.DescribeOrderableReplicationInstances,
		DmsActions.DescribePendingMaintenanceActions,
		DmsActions.DescribeRecommendationLimitations,
		DmsActions.DescribeRecommendations,
		DmsActions.DescribeRefreshSchemasStatus,
		DmsActions.DescribeReplicationConfigs,
		DmsActions.DescribeReplicationInstanceTaskLogs,
		DmsActions.DescribeReplicationInstances,
		DmsActions.DescribeReplicationSubnetGroups,
		DmsActions.DescribeReplicationTableStatistics,
		DmsActions.DescribeReplicationTaskAssessmentResults,
		DmsActions.DescribeReplicationTaskAssessmentRuns,
		DmsActions.DescribeReplicationTaskIndividualAssessments,
		DmsActions.DescribeReplicationTasks,
		DmsActions.DescribeReplications,
		DmsActions.DescribeSchemas,
		DmsActions.DescribeTableStatistics,
		DmsActions.actionGetMetadataModel,
		DmsActions.actionGetTargetSelectionRules,
		DmsActions.ListDataProviders,
		DmsActions.ListExtensionPacks,
		DmsActions.ListInstanceProfiles,
		DmsActions.ListMetadataModelAssessmentActionItems,
		DmsActions.ListMetadataModelAssessments,
		DmsActions.ListMetadataModelConversions,
		DmsActions.ListMetadataModelExports,
		DmsActions.ListMigrationProjects,
		DmsActions.ListTagsForResource,
		DmsActions.TestConnection,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DmsActions.ApplyPendingMaintenanceAction,
		DmsActions.AssociateExtensionPack,
		DmsActions.BatchStartRecommendations,
		DmsActions.CancelMetadataModelConversion,
		DmsActions.CancelMetadataModelCreation,
		DmsActions.CancelReplicationTaskAssessmentRun,
		DmsActions.CreateDataMigration,
		DmsActions.CreateDataProvider,
		DmsActions.CreateEndpoint,
		DmsActions.CreateEventSubscription,
		DmsActions.CreateFleetAdvisorCollector,
		DmsActions.CreateInstanceProfile,
		DmsActions.CreateMigrationProject,
		DmsActions.CreateOutboundIntegration,
		DmsActions.CreateReplicationConfig,
		DmsActions.CreateReplicationInstance,
		DmsActions.CreateReplicationSubnetGroup,
		DmsActions.CreateReplicationTask,
		DmsActions.DeleteCertificate,
		DmsActions.DeleteConnection,
		DmsActions.DeleteDataMigration,
		DmsActions.DeleteDataProvider,
		DmsActions.DeleteEndpoint,
		DmsActions.DeleteEventSubscription,
		DmsActions.DeleteFleetAdvisorCollector,
		DmsActions.DeleteFleetAdvisorDatabases,
		DmsActions.DeleteInstanceProfile,
		DmsActions.DeleteMigrationProject,
		DmsActions.DeleteReplicationConfig,
		DmsActions.DeleteReplicationInstance,
		DmsActions.DeleteReplicationSubnetGroup,
		DmsActions.DeleteReplicationTask,
		DmsActions.DeleteReplicationTaskAssessmentRun,
		DmsActions.ExportMetadataModelAssessment,
		DmsActions.ImportCertificate,
		DmsActions.ModifyDataMigration,
		DmsActions.ModifyEndpoint,
		DmsActions.ModifyEventSubscription,
		DmsActions.ModifyFleetAdvisorCollector,
		DmsActions.ModifyFleetAdvisorCollectorStatuses,
		DmsActions.ModifyOutboundIntegration,
		DmsActions.ModifyReplicationConfig,
		DmsActions.ModifyReplicationInstance,
		DmsActions.ModifyReplicationSubnetGroup,
		DmsActions.ModifyReplicationTask,
		DmsActions.MoveReplicationTask,
		DmsActions.RebootReplicationInstance,
		DmsActions.RefreshSchemas,
		DmsActions.ReloadReplicationTables,
		DmsActions.ReloadTables,
		DmsActions.RunFleetAdvisorLsaAnalysis,
		DmsActions.StartDataMigration,
		DmsActions.StartMetadataModelAssessment,
		DmsActions.StartMetadataModelConversion,
		DmsActions.StartMetadataModelCreation,
		DmsActions.StartMetadataModelExportAsScripts,
		DmsActions.StartMetadataModelExportToTarget,
		DmsActions.StartMetadataModelImport,
		DmsActions.StartRecommendations,
		DmsActions.StartReplication,
		DmsActions.StartReplicationTask,
		DmsActions.StartReplicationTaskAssessment,
		DmsActions.StartReplicationTaskAssessmentRun,
		DmsActions.StopDataMigration,
		DmsActions.StopReplication,
		DmsActions.StopReplicationTask,
		DmsActions.UpdateConversionConfiguration,
		DmsActions.UpdateDataProvider,
		DmsActions.UpdateInstanceProfile,
		DmsActions.UpdateMigrationProject,
		DmsActions.UpdateSubscriptionsToEventBridge,
		DmsActions.UploadFileMetadataList,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DmsActions.AddTagsToResource,
		DmsActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a Certificate ARN.
 */
export interface DmsCertificateArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Certificate ARN.
 */
export interface DmsCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a DataMigration ARN.
 */
export interface DmsDataMigrationArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DataMigration ARN.
 */
export interface DmsDataMigrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a DataProvider ARN.
 */
export interface DmsDataProviderArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DataProvider ARN.
 */
export interface DmsDataProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Endpoint ARN.
 */
export interface DmsEndpointArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Endpoint ARN.
 */
export interface DmsEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a EventSubscription ARN.
 */
export interface DmsEventSubscriptionArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EventSubscription ARN.
 */
export interface DmsEventSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a InstanceProfile ARN.
 */
export interface DmsInstanceProfileArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a InstanceProfile ARN.
 */
export interface DmsInstanceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a MigrationProject ARN.
 */
export interface DmsMigrationProjectArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a MigrationProject ARN.
 */
export interface DmsMigrationProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationConfig ARN.
 */
export interface DmsReplicationConfigArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationConfig ARN.
 */
export interface DmsReplicationConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationInstance ARN.
 */
export interface DmsReplicationInstanceArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationInstance ARN.
 */
export interface DmsReplicationInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationSubnetGroup ARN.
 */
export interface DmsReplicationSubnetGroupArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationSubnetGroup ARN.
 */
export interface DmsReplicationSubnetGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationTask ARN.
 */
export interface DmsReplicationTaskArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationTask ARN.
 */
export interface DmsReplicationTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationTaskAssessmentRun ARN.
 */
export interface DmsReplicationTaskAssessmentRunArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationTaskAssessmentRun ARN.
 */
export interface DmsReplicationTaskAssessmentRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ReplicationTaskIndividualAssessment ARN.
 */
export interface DmsReplicationTaskIndividualAssessmentArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationTaskIndividualAssessment ARN.
 */
export interface DmsReplicationTaskIndividualAssessmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const CertificateArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):cert:.*$/;
const DataMigrationArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):data-migration:.*$/;
const DataProviderArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):data-provider:.*$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):endpoint:.*$/;
const EventSubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):es:.*$/;
const InstanceProfileArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):instance-profile:.*$/;
const MigrationProjectArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):migration-project:.*$/;
const ReplicationConfigArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):replication-config:.*$/;
const ReplicationInstanceArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):rep:.*$/;
const ReplicationSubnetGroupArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):subgrp:.*$/;
const ReplicationTaskArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):task:.*$/;
const ReplicationTaskAssessmentRunArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):assessment-run:.*$/;
const ReplicationTaskIndividualAssessmentArnRegex =
	/^arn:(?<partition>[^:]+):dms:(?<region>[^:]*):(?<account>[^:]*):individual-assessment:.*$/;

/**
 * ARN builders, validators, and parsers for dms resources.
 */
export class DmsResources {
	/**
	 * Builds an ARN for the Certificate resource.
	 */
	static certificate(props: DmsCertificateArnProps): string {
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
	static parseCertificateArn(arn: string): DmsCertificateArnComponents {
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
	static dataMigration(props: DmsDataMigrationArnProps): string {
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
	static parseDataMigrationArn(arn: string): DmsDataMigrationArnComponents {
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
	static dataProvider(props: DmsDataProviderArnProps): string {
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
	static parseDataProviderArn(arn: string): DmsDataProviderArnComponents {
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
	static endpoint(props: DmsEndpointArnProps): string {
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
	static parseEndpointArn(arn: string): DmsEndpointArnComponents {
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
	static eventSubscription(props: DmsEventSubscriptionArnProps): string {
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
	static parseEventSubscriptionArn(
		arn: string,
	): DmsEventSubscriptionArnComponents {
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
	static instanceProfile(props: DmsInstanceProfileArnProps): string {
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
	static parseInstanceProfileArn(arn: string): DmsInstanceProfileArnComponents {
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
	static migrationProject(props: DmsMigrationProjectArnProps): string {
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
	static parseMigrationProjectArn(
		arn: string,
	): DmsMigrationProjectArnComponents {
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
	static replicationConfig(props: DmsReplicationConfigArnProps): string {
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
	static parseReplicationConfigArn(
		arn: string,
	): DmsReplicationConfigArnComponents {
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
	static replicationInstance(props: DmsReplicationInstanceArnProps): string {
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
	static parseReplicationInstanceArn(
		arn: string,
	): DmsReplicationInstanceArnComponents {
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
	static replicationSubnetGroup(
		props: DmsReplicationSubnetGroupArnProps,
	): string {
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
	static parseReplicationSubnetGroupArn(
		arn: string,
	): DmsReplicationSubnetGroupArnComponents {
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
	static replicationTask(props: DmsReplicationTaskArnProps): string {
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
	static parseReplicationTaskArn(arn: string): DmsReplicationTaskArnComponents {
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
	static replicationTaskAssessmentRun(
		props: DmsReplicationTaskAssessmentRunArnProps,
	): string {
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
	static parseReplicationTaskAssessmentRunArn(
		arn: string,
	): DmsReplicationTaskAssessmentRunArnComponents {
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
	static replicationTaskIndividualAssessment(
		props: DmsReplicationTaskIndividualAssessmentArnProps,
	): string {
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
	static parseReplicationTaskIndividualAssessmentArn(
		arn: string,
	): DmsReplicationTaskIndividualAssessmentArnComponents {
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
	static readonly AddTagsToResource: string[] = ["dms:AddTagsToResource"];
	/** IAM actions required for the ApplyPendingMaintenanceAction API call. */
	static readonly ApplyPendingMaintenanceAction: string[] = [
		"dms:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the BatchStartRecommendations API call. */
	static readonly BatchStartRecommendations: string[] = [
		"dms:BatchStartRecommendations",
	];
	/** IAM actions required for the CancelMetadataModelConversion API call. */
	static readonly CancelMetadataModelConversion: string[] = [
		"dms:CancelMetadataModelConversion",
	];
	/** IAM actions required for the CancelMetadataModelCreation API call. */
	static readonly CancelMetadataModelCreation: string[] = [
		"dms:CancelMetadataModelCreation",
	];
	/** IAM actions required for the CancelReplicationTaskAssessmentRun API call. */
	static readonly CancelReplicationTaskAssessmentRun: string[] = [
		"dms:CancelReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the CreateDataMigration API call. */
	static readonly CreateDataMigration: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateDataMigration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataProvider API call. */
	static readonly CreateDataProvider: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateDataProvider",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CreateEndpoint: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CreateEventSubscription: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateEventSubscription",
	];
	/** IAM actions required for the CreateFleetAdvisorCollector API call. */
	static readonly CreateFleetAdvisorCollector: string[] = [
		"dms:CreateFleetAdvisorCollector",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CreateInstanceProfile: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateInstanceProfile",
	];
	/** IAM actions required for the CreateMigrationProject API call. */
	static readonly CreateMigrationProject: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateMigrationProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReplicationConfig API call. */
	static readonly CreateReplicationConfig: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationConfig",
	];
	/** IAM actions required for the CreateReplicationInstance API call. */
	static readonly CreateReplicationInstance: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReplicationSubnetGroup API call. */
	static readonly CreateReplicationSubnetGroup: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationSubnetGroup",
	];
	/** IAM actions required for the CreateReplicationTask API call. */
	static readonly CreateReplicationTask: string[] = [
		"dms:AddTagsToResource",
		"dms:CreateReplicationTask",
	];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DeleteCertificate: string[] = ["dms:DeleteCertificate"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = ["dms:DeleteConnection"];
	/** IAM actions required for the DeleteDataMigration API call. */
	static readonly DeleteDataMigration: string[] = ["dms:DeleteDataMigration"];
	/** IAM actions required for the DeleteDataProvider API call. */
	static readonly DeleteDataProvider: string[] = ["dms:DeleteDataProvider"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["dms:DeleteEndpoint"];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DeleteEventSubscription: string[] = [
		"dms:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteFleetAdvisorCollector API call. */
	static readonly DeleteFleetAdvisorCollector: string[] = [
		"dms:DeleteFleetAdvisorCollector",
	];
	/** IAM actions required for the DeleteFleetAdvisorDatabases API call. */
	static readonly DeleteFleetAdvisorDatabases: string[] = [
		"dms:DeleteFleetAdvisorDatabases",
	];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DeleteInstanceProfile: string[] = [
		"dms:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteMigrationProject API call. */
	static readonly DeleteMigrationProject: string[] = [
		"dms:DeleteMigrationProject",
	];
	/** IAM actions required for the DeleteReplicationConfig API call. */
	static readonly DeleteReplicationConfig: string[] = [
		"dms:DeleteReplicationConfig",
	];
	/** IAM actions required for the DeleteReplicationInstance API call. */
	static readonly DeleteReplicationInstance: string[] = [
		"dms:DeleteReplicationInstance",
	];
	/** IAM actions required for the DeleteReplicationSubnetGroup API call. */
	static readonly DeleteReplicationSubnetGroup: string[] = [
		"dms:DeleteReplicationSubnetGroup",
	];
	/** IAM actions required for the DeleteReplicationTask API call. */
	static readonly DeleteReplicationTask: string[] = [
		"dms:DeleteReplicationTask",
	];
	/** IAM actions required for the DeleteReplicationTaskAssessmentRun API call. */
	static readonly DeleteReplicationTaskAssessmentRun: string[] = [
		"dms:DeleteReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DescribeAccountAttributes: string[] = [
		"dms:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeApplicableIndividualAssessments API call. */
	static readonly DescribeApplicableIndividualAssessments: string[] = [
		"dms:DescribeApplicableIndividualAssessments",
	];
	/** IAM actions required for the DescribeCertificates API call. */
	static readonly DescribeCertificates: string[] = ["dms:DescribeCertificates"];
	/** IAM actions required for the DescribeConnections API call. */
	static readonly DescribeConnections: string[] = ["dms:DescribeConnections"];
	/** IAM actions required for the DescribeConversionConfiguration API call. */
	static readonly DescribeConversionConfiguration: string[] = [
		"dms:DescribeConversionConfiguration",
	];
	/** IAM actions required for the DescribeDataMigrations API call. */
	static readonly DescribeDataMigrations: string[] = [
		"dms:DescribeDataMigrations",
	];
	/** IAM actions required for the DescribeDataProviders API call. */
	static readonly DescribeDataProviders: string[] = ["dms:ListDataProviders"];
	/** IAM actions required for the DescribeEndpointSettings API call. */
	static readonly DescribeEndpointSettings: string[] = [
		"dms:DescribeEndpointSettings",
	];
	/** IAM actions required for the DescribeEndpointTypes API call. */
	static readonly DescribeEndpointTypes: string[] = [
		"dms:DescribeEndpointTypes",
	];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DescribeEndpoints: string[] = ["dms:DescribeEndpoints"];
	/** IAM actions required for the DescribeEngineVersions API call. */
	static readonly DescribeEngineVersions: string[] = [
		"dms:DescribeEngineVersions",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DescribeEventCategories: string[] = [
		"dms:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DescribeEventSubscriptions: string[] = [
		"dms:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["dms:DescribeEvents"];
	/** IAM actions required for the DescribeExtensionPackAssociations API call. */
	static readonly DescribeExtensionPackAssociations: string[] = [
		"dms:ListExtensionPacks",
	];
	/** IAM actions required for the DescribeFleetAdvisorCollectors API call. */
	static readonly DescribeFleetAdvisorCollectors: string[] = [
		"dms:DescribeFleetAdvisorCollectors",
	];
	/** IAM actions required for the DescribeFleetAdvisorDatabases API call. */
	static readonly DescribeFleetAdvisorDatabases: string[] = [
		"dms:DescribeFleetAdvisorDatabases",
	];
	/** IAM actions required for the DescribeFleetAdvisorLsaAnalysis API call. */
	static readonly DescribeFleetAdvisorLsaAnalysis: string[] = [
		"dms:DescribeFleetAdvisorLsaAnalysis",
	];
	/** IAM actions required for the DescribeFleetAdvisorSchemaObjectSummary API call. */
	static readonly DescribeFleetAdvisorSchemaObjectSummary: string[] = [
		"dms:DescribeFleetAdvisorSchemaObjectSummary",
	];
	/** IAM actions required for the DescribeFleetAdvisorSchemas API call. */
	static readonly DescribeFleetAdvisorSchemas: string[] = [
		"dms:DescribeFleetAdvisorSchemas",
	];
	/** IAM actions required for the DescribeInstanceProfiles API call. */
	static readonly DescribeInstanceProfiles: string[] = [
		"dms:ListInstanceProfiles",
	];
	/** IAM actions required for the DescribeMetadataModel API call. */
	static readonly DescribeMetadataModel: string[] = [
		"dms:DescribeMetadataModel",
	];
	/** IAM actions required for the DescribeMetadataModelAssessments API call. */
	static readonly DescribeMetadataModelAssessments: string[] = [
		"dms:ListMetadataModelAssessments",
	];
	/** IAM actions required for the DescribeMetadataModelChildren API call. */
	static readonly DescribeMetadataModelChildren: string[] = [
		"dms:DescribeMetadataModelChildren",
	];
	/** IAM actions required for the DescribeMetadataModelConversions API call. */
	static readonly DescribeMetadataModelConversions: string[] = [
		"dms:ListMetadataModelConversions",
	];
	/** IAM actions required for the DescribeMetadataModelCreations API call. */
	static readonly DescribeMetadataModelCreations: string[] = [
		"dms:DescribeMetadataModelCreations",
	];
	/** IAM actions required for the DescribeMetadataModelExportsAsScript API call. */
	static readonly DescribeMetadataModelExportsAsScript: string[] = [
		"dms:ListMetadataModelExports",
	];
	/** IAM actions required for the DescribeMetadataModelExportsToTarget API call. */
	static readonly DescribeMetadataModelExportsToTarget: string[] = [
		"dms:ListMetadataModelExports",
	];
	/** IAM actions required for the DescribeMetadataModelImports API call. */
	static readonly DescribeMetadataModelImports: string[] = [
		"dms:DescribeMetadataModelImports",
	];
	/** IAM actions required for the DescribeMigrationProjects API call. */
	static readonly DescribeMigrationProjects: string[] = [
		"dms:ListMigrationProjects",
	];
	/** IAM actions required for the DescribeOrderableReplicationInstances API call. */
	static readonly DescribeOrderableReplicationInstances: string[] = [
		"dms:DescribeOrderableReplicationInstances",
	];
	/** IAM actions required for the DescribePendingMaintenanceActions API call. */
	static readonly DescribePendingMaintenanceActions: string[] = [
		"dms:DescribePendingMaintenanceActions",
	];
	/** IAM actions required for the DescribeRecommendationLimitations API call. */
	static readonly DescribeRecommendationLimitations: string[] = [
		"dms:DescribeRecommendationLimitations",
	];
	/** IAM actions required for the DescribeRecommendations API call. */
	static readonly DescribeRecommendations: string[] = [
		"dms:DescribeRecommendations",
	];
	/** IAM actions required for the DescribeRefreshSchemasStatus API call. */
	static readonly DescribeRefreshSchemasStatus: string[] = [
		"dms:DescribeRefreshSchemasStatus",
	];
	/** IAM actions required for the DescribeReplicationConfigs API call. */
	static readonly DescribeReplicationConfigs: string[] = [
		"dms:DescribeReplicationConfigs",
	];
	/** IAM actions required for the DescribeReplicationInstanceTaskLogs API call. */
	static readonly DescribeReplicationInstanceTaskLogs: string[] = [
		"dms:DescribeReplicationInstanceTaskLogs",
	];
	/** IAM actions required for the DescribeReplicationInstances API call. */
	static readonly DescribeReplicationInstances: string[] = [
		"dms:DescribeReplicationInstances",
	];
	/** IAM actions required for the DescribeReplicationSubnetGroups API call. */
	static readonly DescribeReplicationSubnetGroups: string[] = [
		"dms:DescribeReplicationSubnetGroups",
	];
	/** IAM actions required for the DescribeReplicationTableStatistics API call. */
	static readonly DescribeReplicationTableStatistics: string[] = [
		"dms:DescribeReplicationTableStatistics",
	];
	/** IAM actions required for the DescribeReplicationTaskAssessmentResults API call. */
	static readonly DescribeReplicationTaskAssessmentResults: string[] = [
		"dms:DescribeReplicationTaskAssessmentResults",
	];
	/** IAM actions required for the DescribeReplicationTaskAssessmentRuns API call. */
	static readonly DescribeReplicationTaskAssessmentRuns: string[] = [
		"dms:DescribeReplicationTaskAssessmentRuns",
	];
	/** IAM actions required for the DescribeReplicationTaskIndividualAssessments API call. */
	static readonly DescribeReplicationTaskIndividualAssessments: string[] = [
		"dms:DescribeReplicationTaskIndividualAssessments",
	];
	/** IAM actions required for the DescribeReplicationTasks API call. */
	static readonly DescribeReplicationTasks: string[] = [
		"dms:DescribeReplicationTasks",
	];
	/** IAM actions required for the DescribeReplications API call. */
	static readonly DescribeReplications: string[] = ["dms:DescribeReplications"];
	/** IAM actions required for the DescribeSchemas API call. */
	static readonly DescribeSchemas: string[] = ["dms:DescribeSchemas"];
	/** IAM actions required for the DescribeTableStatistics API call. */
	static readonly DescribeTableStatistics: string[] = [
		"dms:DescribeTableStatistics",
	];
	/** IAM actions required for the ExportMetadataModelAssessment API call. */
	static readonly ExportMetadataModelAssessment: string[] = [
		"dms:ExportMetadataModelAssessment",
	];
	/** IAM actions required for the GetTargetSelectionRules API call. */
	static readonly opGetTargetSelectionRules: string[] = [
		"dms:GetTargetSelectionRules",
	];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly ImportCertificate: string[] = [
		"dms:AddTagsToResource",
		"dms:ImportCertificate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["dms:ListTagsForResource"];
	/** IAM actions required for the ModifyConversionConfiguration API call. */
	static readonly ModifyConversionConfiguration: string[] = [
		"dms:UpdateConversionConfiguration",
	];
	/** IAM actions required for the ModifyDataMigration API call. */
	static readonly ModifyDataMigration: string[] = [
		"dms:ModifyDataMigration",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDataProvider API call. */
	static readonly ModifyDataProvider: string[] = [
		"iam:PassRole",
		"dms:UpdateDataProvider",
	];
	/** IAM actions required for the ModifyEndpoint API call. */
	static readonly ModifyEndpoint: string[] = [
		"dms:ModifyEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly ModifyEventSubscription: string[] = [
		"dms:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyInstanceProfile API call. */
	static readonly ModifyInstanceProfile: string[] = [
		"dms:UpdateInstanceProfile",
	];
	/** IAM actions required for the ModifyMigrationProject API call. */
	static readonly ModifyMigrationProject: string[] = [
		"iam:PassRole",
		"dms:UpdateMigrationProject",
	];
	/** IAM actions required for the ModifyReplicationConfig API call. */
	static readonly ModifyReplicationConfig: string[] = [
		"dms:ModifyReplicationConfig",
	];
	/** IAM actions required for the ModifyReplicationInstance API call. */
	static readonly ModifyReplicationInstance: string[] = [
		"dms:ModifyReplicationInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyReplicationSubnetGroup API call. */
	static readonly ModifyReplicationSubnetGroup: string[] = [
		"dms:ModifyReplicationSubnetGroup",
	];
	/** IAM actions required for the ModifyReplicationTask API call. */
	static readonly ModifyReplicationTask: string[] = [
		"dms:ModifyReplicationTask",
	];
	/** IAM actions required for the MoveReplicationTask API call. */
	static readonly MoveReplicationTask: string[] = ["dms:MoveReplicationTask"];
	/** IAM actions required for the RebootReplicationInstance API call. */
	static readonly RebootReplicationInstance: string[] = [
		"dms:RebootReplicationInstance",
	];
	/** IAM actions required for the RefreshSchemas API call. */
	static readonly RefreshSchemas: string[] = ["dms:RefreshSchemas"];
	/** IAM actions required for the ReloadReplicationTables API call. */
	static readonly ReloadReplicationTables: string[] = [
		"dms:ReloadReplicationTables",
	];
	/** IAM actions required for the ReloadTables API call. */
	static readonly ReloadTables: string[] = ["dms:ReloadTables"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"dms:RemoveTagsFromResource",
	];
	/** IAM actions required for the RunFleetAdvisorLsaAnalysis API call. */
	static readonly RunFleetAdvisorLsaAnalysis: string[] = [
		"dms:RunFleetAdvisorLsaAnalysis",
	];
	/** IAM actions required for the StartDataMigration API call. */
	static readonly StartDataMigration: string[] = ["dms:StartDataMigration"];
	/** IAM actions required for the StartExtensionPackAssociation API call. */
	static readonly StartExtensionPackAssociation: string[] = [
		"dms:AssociateExtensionPack",
	];
	/** IAM actions required for the StartMetadataModelAssessment API call. */
	static readonly StartMetadataModelAssessment: string[] = [
		"dms:StartMetadataModelAssessment",
	];
	/** IAM actions required for the StartMetadataModelConversion API call. */
	static readonly StartMetadataModelConversion: string[] = [
		"dms:StartMetadataModelConversion",
	];
	/** IAM actions required for the StartMetadataModelCreation API call. */
	static readonly StartMetadataModelCreation: string[] = [
		"dms:StartMetadataModelCreation",
	];
	/** IAM actions required for the StartMetadataModelExportAsScript API call. */
	static readonly StartMetadataModelExportAsScript: string[] = [
		"dms:StartMetadataModelExportAsScripts",
	];
	/** IAM actions required for the StartMetadataModelExportToTarget API call. */
	static readonly StartMetadataModelExportToTarget: string[] = [
		"dms:StartMetadataModelExportToTarget",
	];
	/** IAM actions required for the StartMetadataModelImport API call. */
	static readonly StartMetadataModelImport: string[] = [
		"dms:StartMetadataModelImport",
	];
	/** IAM actions required for the StartRecommendations API call. */
	static readonly StartRecommendations: string[] = ["dms:StartRecommendations"];
	/** IAM actions required for the StartReplication API call. */
	static readonly StartReplication: string[] = ["dms:StartReplication"];
	/** IAM actions required for the StartReplicationTask API call. */
	static readonly StartReplicationTask: string[] = ["dms:StartReplicationTask"];
	/** IAM actions required for the StartReplicationTaskAssessment API call. */
	static readonly StartReplicationTaskAssessment: string[] = [
		"dms:StartReplicationTaskAssessment",
	];
	/** IAM actions required for the StartReplicationTaskAssessmentRun API call. */
	static readonly StartReplicationTaskAssessmentRun: string[] = [
		"dms:AddTagsToResource",
		"iam:PassRole",
		"dms:StartReplicationTaskAssessmentRun",
	];
	/** IAM actions required for the StopDataMigration API call. */
	static readonly StopDataMigration: string[] = ["dms:StopDataMigration"];
	/** IAM actions required for the StopReplication API call. */
	static readonly StopReplication: string[] = ["dms:StopReplication"];
	/** IAM actions required for the StopReplicationTask API call. */
	static readonly StopReplicationTask: string[] = ["dms:StopReplicationTask"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TestConnection: string[] = ["dms:TestConnection"];
	/** IAM actions required for the UpdateSubscriptionsToEventBridge API call. */
	static readonly UpdateSubscriptionsToEventBridge: string[] = [
		"dms:UpdateSubscriptionsToEventBridge",
	];
}

/**
 * Condition key constants and builders for dms.
 */
export class DmsConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataMigration action. */
	static readonly CreateDataMigrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataProvider action. */
	static readonly CreateDataProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CreateEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CreateEventSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateInstanceProfile action. */
	static readonly CreateInstanceProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateMigrationProject action. */
	static readonly CreateMigrationProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateOutboundIntegration action. */
	static readonly CreateOutboundIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationConfig action. */
	static readonly CreateReplicationConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationInstance action. */
	static readonly CreateReplicationInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationSubnetGroup action. */
	static readonly CreateReplicationSubnetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationTask action. */
	static readonly CreateReplicationTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"dms:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReplicationInstanceTaskLogs action. */
	static readonly DescribeReplicationInstanceTaskLogsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly ImportCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
