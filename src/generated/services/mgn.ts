// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mgn.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mgn service.
 */
export class MgnActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mgn";

	/** [Write] mgn:ArchiveApplication */
	static readonly ARCHIVE_APPLICATION = "mgn:ArchiveApplication";
	/** [Write] mgn:ArchiveWave */
	static readonly ARCHIVE_WAVE = "mgn:ArchiveWave";
	/** [Write] mgn:AssociateApplications */
	static readonly ASSOCIATE_APPLICATIONS = "mgn:AssociateApplications";
	/** [Write] mgn:AssociateSourceServers */
	static readonly ASSOCIATE_SOURCE_SERVERS = "mgn:AssociateSourceServers";
	/** [Write] mgn:BatchCreateVolumeSnapshotGroupForMgn */
	static readonly BATCH_CREATE_VOLUME_SNAPSHOT_GROUP_FOR_MGN =
		"mgn:BatchCreateVolumeSnapshotGroupForMgn";
	/** [Write] mgn:BatchDeleteSnapshotRequestForMgn */
	static readonly BATCH_DELETE_SNAPSHOT_REQUEST_FOR_MGN =
		"mgn:BatchDeleteSnapshotRequestForMgn";
	/** [Write] mgn:ChangeServerLifeCycleState */
	static readonly CHANGE_SERVER_LIFE_CYCLE_STATE =
		"mgn:ChangeServerLifeCycleState";
	/** [Write] mgn:CreateApplication */
	static readonly CREATE_APPLICATION = "mgn:CreateApplication";
	/** [Write] mgn:CreateConnector */
	static readonly CREATE_CONNECTOR = "mgn:CreateConnector";
	/** [Write] mgn:CreateLaunchConfigurationTemplate */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE =
		"mgn:CreateLaunchConfigurationTemplate";
	/** [Write] mgn:CreateNetworkMigrationDefinition */
	static readonly CREATE_NETWORK_MIGRATION_DEFINITION =
		"mgn:CreateNetworkMigrationDefinition";
	/** [Write] mgn:CreateReplicationConfigurationTemplate */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE =
		"mgn:CreateReplicationConfigurationTemplate";
	/** [Write] mgn:CreateVcenterClientForMgn */
	static readonly CREATE_VCENTER_CLIENT_FOR_MGN =
		"mgn:CreateVcenterClientForMgn";
	/** [Write] mgn:CreateWave */
	static readonly CREATE_WAVE = "mgn:CreateWave";
	/** [Write] mgn:DeleteApplication */
	static readonly DELETE_APPLICATION = "mgn:DeleteApplication";
	/** [Write] mgn:DeleteConnector */
	static readonly DELETE_CONNECTOR = "mgn:DeleteConnector";
	/** [Write] mgn:DeleteJob */
	static readonly DELETE_JOB = "mgn:DeleteJob";
	/** [Write] mgn:DeleteLaunchConfigurationTemplate */
	static readonly DELETE_LAUNCH_CONFIGURATION_TEMPLATE =
		"mgn:DeleteLaunchConfigurationTemplate";
	/** [Write] mgn:DeleteNetworkMigrationDefinition */
	static readonly DELETE_NETWORK_MIGRATION_DEFINITION =
		"mgn:DeleteNetworkMigrationDefinition";
	/** [Write] mgn:DeleteReplicationConfigurationTemplate */
	static readonly DELETE_REPLICATION_CONFIGURATION_TEMPLATE =
		"mgn:DeleteReplicationConfigurationTemplate";
	/** [Write] mgn:DeleteSourceServer */
	static readonly DELETE_SOURCE_SERVER = "mgn:DeleteSourceServer";
	/** [Write] mgn:DeleteVcenterClient */
	static readonly DELETE_VCENTER_CLIENT = "mgn:DeleteVcenterClient";
	/** [Write] mgn:DeleteWave */
	static readonly DELETE_WAVE = "mgn:DeleteWave";
	/** [Read] mgn:DescribeJobLogItems */
	static readonly DESCRIBE_JOB_LOG_ITEMS = "mgn:DescribeJobLogItems";
	/** [List] mgn:DescribeJobs */
	static readonly DESCRIBE_JOBS = "mgn:DescribeJobs";
	/** [List] mgn:DescribeLaunchConfigurationTemplates */
	static readonly DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES =
		"mgn:DescribeLaunchConfigurationTemplates";
	/** [List] mgn:DescribeReplicationConfigurationTemplates */
	static readonly DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES =
		"mgn:DescribeReplicationConfigurationTemplates";
	/** [Read] mgn:DescribeReplicationServerAssociationsForMgn */
	static readonly DESCRIBE_REPLICATION_SERVER_ASSOCIATIONS_FOR_MGN =
		"mgn:DescribeReplicationServerAssociationsForMgn";
	/** [Read] mgn:DescribeSnapshotRequestsForMgn */
	static readonly DESCRIBE_SNAPSHOT_REQUESTS_FOR_MGN =
		"mgn:DescribeSnapshotRequestsForMgn";
	/** [List] mgn:DescribeSourceServers */
	static readonly DESCRIBE_SOURCE_SERVERS = "mgn:DescribeSourceServers";
	/** [List] mgn:DescribeVcenterClients */
	static readonly DESCRIBE_VCENTER_CLIENTS = "mgn:DescribeVcenterClients";
	/** [Write] mgn:DisassociateApplications */
	static readonly DISASSOCIATE_APPLICATIONS = "mgn:DisassociateApplications";
	/** [Write] mgn:DisassociateSourceServers */
	static readonly DISASSOCIATE_SOURCE_SERVERS = "mgn:DisassociateSourceServers";
	/** [Write] mgn:DisconnectFromService */
	static readonly DISCONNECT_FROM_SERVICE = "mgn:DisconnectFromService";
	/** [Write] mgn:FinalizeCutover */
	static readonly FINALIZE_CUTOVER = "mgn:FinalizeCutover";
	/** [Read] mgn:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "mgn:GetAccountSettings";
	/** [Read] mgn:GetAgentCommandForMgn */
	static readonly GET_AGENT_COMMAND_FOR_MGN = "mgn:GetAgentCommandForMgn";
	/** [Read] mgn:GetAgentConfirmedResumeInfoForMgn */
	static readonly GET_AGENT_CONFIRMED_RESUME_INFO_FOR_MGN =
		"mgn:GetAgentConfirmedResumeInfoForMgn";
	/** [Read] mgn:GetAgentInstallationAssetsForMgn */
	static readonly GET_AGENT_INSTALLATION_ASSETS_FOR_MGN =
		"mgn:GetAgentInstallationAssetsForMgn";
	/** [Read] mgn:GetAgentReplicationInfoForMgn */
	static readonly GET_AGENT_REPLICATION_INFO_FOR_MGN =
		"mgn:GetAgentReplicationInfoForMgn";
	/** [Read] mgn:GetAgentRuntimeConfigurationForMgn */
	static readonly GET_AGENT_RUNTIME_CONFIGURATION_FOR_MGN =
		"mgn:GetAgentRuntimeConfigurationForMgn";
	/** [Read] mgn:GetAgentSnapshotCreditsForMgn */
	static readonly GET_AGENT_SNAPSHOT_CREDITS_FOR_MGN =
		"mgn:GetAgentSnapshotCreditsForMgn";
	/** [Read] mgn:GetChannelCommandsForMgn */
	static readonly GET_CHANNEL_COMMANDS_FOR_MGN = "mgn:GetChannelCommandsForMgn";
	/** [Read] mgn:GetLaunchConfiguration */
	static readonly GET_LAUNCH_CONFIGURATION = "mgn:GetLaunchConfiguration";
	/** [Read] mgn:GetNetworkMigrationDefinition */
	static readonly GET_NETWORK_MIGRATION_DEFINITION =
		"mgn:GetNetworkMigrationDefinition";
	/** [Read] mgn:GetNetworkMigrationMapperSegmentConstruct */
	static readonly GET_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCT =
		"mgn:GetNetworkMigrationMapperSegmentConstruct";
	/** [Read] mgn:GetReplicationConfiguration */
	static readonly GET_REPLICATION_CONFIGURATION =
		"mgn:GetReplicationConfiguration";
	/** [Read] mgn:GetVcenterClientCommandsForMgn */
	static readonly GET_VCENTER_CLIENT_COMMANDS_FOR_MGN =
		"mgn:GetVcenterClientCommandsForMgn";
	/** [Write] mgn:InitializeService */
	static readonly INITIALIZE_SERVICE = "mgn:InitializeService";
	/** [Write] mgn:IssueClientCertificateForMgn */
	static readonly ISSUE_CLIENT_CERTIFICATE_FOR_MGN =
		"mgn:IssueClientCertificateForMgn";
	/** [List] mgn:ListApplications */
	static readonly LIST_APPLICATIONS = "mgn:ListApplications";
	/** [Read] mgn:ListConnectors */
	static readonly LIST_CONNECTORS = "mgn:ListConnectors";
	/** [List] mgn:ListExportErrors */
	static readonly LIST_EXPORT_ERRORS = "mgn:ListExportErrors";
	/** [List] mgn:ListExports */
	static readonly LIST_EXPORTS = "mgn:ListExports";
	/** [List] mgn:ListImportErrors */
	static readonly LIST_IMPORT_ERRORS = "mgn:ListImportErrors";
	/** [List] mgn:ListImportFileEnrichments */
	static readonly LIST_IMPORT_FILE_ENRICHMENTS =
		"mgn:ListImportFileEnrichments";
	/** [List] mgn:ListImports */
	static readonly LIST_IMPORTS = "mgn:ListImports";
	/** [List] mgn:ListManagedAccounts */
	static readonly LIST_MANAGED_ACCOUNTS = "mgn:ListManagedAccounts";
	/** [List] mgn:ListNetworkMigrationAnalyses */
	static readonly LIST_NETWORK_MIGRATION_ANALYSES =
		"mgn:ListNetworkMigrationAnalyses";
	/** [List] mgn:ListNetworkMigrationAnalysisResults */
	static readonly LIST_NETWORK_MIGRATION_ANALYSIS_RESULTS =
		"mgn:ListNetworkMigrationAnalysisResults";
	/** [List] mgn:ListNetworkMigrationCodeGenerationSegments */
	static readonly LIST_NETWORK_MIGRATION_CODE_GENERATION_SEGMENTS =
		"mgn:ListNetworkMigrationCodeGenerationSegments";
	/** [List] mgn:ListNetworkMigrationCodeGenerations */
	static readonly LIST_NETWORK_MIGRATION_CODE_GENERATIONS =
		"mgn:ListNetworkMigrationCodeGenerations";
	/** [List] mgn:ListNetworkMigrationDefinitions */
	static readonly LIST_NETWORK_MIGRATION_DEFINITIONS =
		"mgn:ListNetworkMigrationDefinitions";
	/** [List] mgn:ListNetworkMigrationDeployedStacks */
	static readonly LIST_NETWORK_MIGRATION_DEPLOYED_STACKS =
		"mgn:ListNetworkMigrationDeployedStacks";
	/** [List] mgn:ListNetworkMigrationDeployedStacksDeletions */
	static readonly LIST_NETWORK_MIGRATION_DEPLOYED_STACKS_DELETIONS =
		"mgn:ListNetworkMigrationDeployedStacksDeletions";
	/** [List] mgn:ListNetworkMigrationDeployments */
	static readonly LIST_NETWORK_MIGRATION_DEPLOYMENTS =
		"mgn:ListNetworkMigrationDeployments";
	/** [List] mgn:ListNetworkMigrationExecutions */
	static readonly LIST_NETWORK_MIGRATION_EXECUTIONS =
		"mgn:ListNetworkMigrationExecutions";
	/** [List] mgn:ListNetworkMigrationMapperSegmentConstructs */
	static readonly LIST_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCTS =
		"mgn:ListNetworkMigrationMapperSegmentConstructs";
	/** [List] mgn:ListNetworkMigrationMapperSegments */
	static readonly LIST_NETWORK_MIGRATION_MAPPER_SEGMENTS =
		"mgn:ListNetworkMigrationMapperSegments";
	/** [List] mgn:ListNetworkMigrationMappingUpdates */
	static readonly LIST_NETWORK_MIGRATION_MAPPING_UPDATES =
		"mgn:ListNetworkMigrationMappingUpdates";
	/** [List] mgn:ListNetworkMigrationMappings */
	static readonly LIST_NETWORK_MIGRATION_MAPPINGS =
		"mgn:ListNetworkMigrationMappings";
	/** [List] mgn:ListSourceServerActions */
	static readonly LIST_SOURCE_SERVER_ACTIONS = "mgn:ListSourceServerActions";
	/** [Read] mgn:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mgn:ListTagsForResource";
	/** [List] mgn:ListTemplateActions */
	static readonly LIST_TEMPLATE_ACTIONS = "mgn:ListTemplateActions";
	/** [List] mgn:ListWaves */
	static readonly LIST_WAVES = "mgn:ListWaves";
	/** [Write] mgn:MarkAsArchived */
	static readonly MARK_AS_ARCHIVED = "mgn:MarkAsArchived";
	/** [Write] mgn:NotifyAgentAuthenticationForMgn */
	static readonly NOTIFY_AGENT_AUTHENTICATION_FOR_MGN =
		"mgn:NotifyAgentAuthenticationForMgn";
	/** [Write] mgn:NotifyAgentConnectedForMgn */
	static readonly NOTIFY_AGENT_CONNECTED_FOR_MGN =
		"mgn:NotifyAgentConnectedForMgn";
	/** [Write] mgn:NotifyAgentDisconnectedForMgn */
	static readonly NOTIFY_AGENT_DISCONNECTED_FOR_MGN =
		"mgn:NotifyAgentDisconnectedForMgn";
	/** [Write] mgn:NotifyAgentReplicationProgressForMgn */
	static readonly NOTIFY_AGENT_REPLICATION_PROGRESS_FOR_MGN =
		"mgn:NotifyAgentReplicationProgressForMgn";
	/** [Write] mgn:NotifyVcenterClientStartedForMgn */
	static readonly NOTIFY_VCENTER_CLIENT_STARTED_FOR_MGN =
		"mgn:NotifyVcenterClientStartedForMgn";
	/** [Write] mgn:PauseReplication */
	static readonly PAUSE_REPLICATION = "mgn:PauseReplication";
	/** [Write] mgn:PutSourceServerAction */
	static readonly PUT_SOURCE_SERVER_ACTION = "mgn:PutSourceServerAction";
	/** [Write] mgn:PutTemplateAction */
	static readonly PUT_TEMPLATE_ACTION = "mgn:PutTemplateAction";
	/** [Write] mgn:RegisterAgentForMgn */
	static readonly REGISTER_AGENT_FOR_MGN = "mgn:RegisterAgentForMgn";
	/** [Write] mgn:RemoveSourceServerAction */
	static readonly REMOVE_SOURCE_SERVER_ACTION = "mgn:RemoveSourceServerAction";
	/** [Write] mgn:RemoveTemplateAction */
	static readonly REMOVE_TEMPLATE_ACTION = "mgn:RemoveTemplateAction";
	/** [Write] mgn:ResumeReplication */
	static readonly RESUME_REPLICATION = "mgn:ResumeReplication";
	/** [Write] mgn:RetryDataReplication */
	static readonly RETRY_DATA_REPLICATION = "mgn:RetryDataReplication";
	/** [Write] mgn:SendAgentLogsForMgn */
	static readonly SEND_AGENT_LOGS_FOR_MGN = "mgn:SendAgentLogsForMgn";
	/** [Write] mgn:SendAgentMetricsForMgn */
	static readonly SEND_AGENT_METRICS_FOR_MGN = "mgn:SendAgentMetricsForMgn";
	/** [Write] mgn:SendChannelCommandResultForMgn */
	static readonly SEND_CHANNEL_COMMAND_RESULT_FOR_MGN =
		"mgn:SendChannelCommandResultForMgn";
	/** [Write] mgn:SendClientLogsForMgn */
	static readonly SEND_CLIENT_LOGS_FOR_MGN = "mgn:SendClientLogsForMgn";
	/** [Write] mgn:SendClientMetricsForMgn */
	static readonly SEND_CLIENT_METRICS_FOR_MGN = "mgn:SendClientMetricsForMgn";
	/** [Write] mgn:SendVcenterClientCommandResultForMgn */
	static readonly SEND_VCENTER_CLIENT_COMMAND_RESULT_FOR_MGN =
		"mgn:SendVcenterClientCommandResultForMgn";
	/** [Write] mgn:SendVcenterClientLogsForMgn */
	static readonly SEND_VCENTER_CLIENT_LOGS_FOR_MGN =
		"mgn:SendVcenterClientLogsForMgn";
	/** [Write] mgn:SendVcenterClientMetricsForMgn */
	static readonly SEND_VCENTER_CLIENT_METRICS_FOR_MGN =
		"mgn:SendVcenterClientMetricsForMgn";
	/** [Write] mgn:StartCutover */
	static readonly START_CUTOVER = "mgn:StartCutover";
	/** [Write] mgn:StartExport */
	static readonly START_EXPORT = "mgn:StartExport";
	/** [Write] mgn:StartImport */
	static readonly START_IMPORT = "mgn:StartImport";
	/** [Write] mgn:StartImportFileEnrichment */
	static readonly START_IMPORT_FILE_ENRICHMENT =
		"mgn:StartImportFileEnrichment";
	/** [Write] mgn:StartNetworkMigrationAnalysis */
	static readonly START_NETWORK_MIGRATION_ANALYSIS =
		"mgn:StartNetworkMigrationAnalysis";
	/** [Write] mgn:StartNetworkMigrationCodeGeneration */
	static readonly START_NETWORK_MIGRATION_CODE_GENERATION =
		"mgn:StartNetworkMigrationCodeGeneration";
	/** [Write] mgn:StartNetworkMigrationDeployedStacksDeletion */
	static readonly START_NETWORK_MIGRATION_DEPLOYED_STACKS_DELETION =
		"mgn:StartNetworkMigrationDeployedStacksDeletion";
	/** [Write] mgn:StartNetworkMigrationDeployment */
	static readonly START_NETWORK_MIGRATION_DEPLOYMENT =
		"mgn:StartNetworkMigrationDeployment";
	/** [Write] mgn:StartNetworkMigrationMapping */
	static readonly START_NETWORK_MIGRATION_MAPPING =
		"mgn:StartNetworkMigrationMapping";
	/** [Write] mgn:StartNetworkMigrationMappingUpdate */
	static readonly START_NETWORK_MIGRATION_MAPPING_UPDATE =
		"mgn:StartNetworkMigrationMappingUpdate";
	/** [Write] mgn:StartReplication */
	static readonly START_REPLICATION = "mgn:StartReplication";
	/** [Write] mgn:StartSnapshotGroupForMgn */
	static readonly START_SNAPSHOT_GROUP_FOR_MGN = "mgn:StartSnapshotGroupForMgn";
	/** [Write] mgn:StartTest */
	static readonly START_TEST = "mgn:StartTest";
	/** [Write] mgn:StopReplication */
	static readonly STOP_REPLICATION = "mgn:StopReplication";
	/** [Tagging] mgn:TagResource */
	static readonly TAG_RESOURCE = "mgn:TagResource";
	/** [Write] mgn:TerminateTargetInstances */
	static readonly TERMINATE_TARGET_INSTANCES = "mgn:TerminateTargetInstances";
	/** [Write] mgn:UnarchiveApplication */
	static readonly UNARCHIVE_APPLICATION = "mgn:UnarchiveApplication";
	/** [Write] mgn:UnarchiveWave */
	static readonly UNARCHIVE_WAVE = "mgn:UnarchiveWave";
	/** [Tagging] mgn:UntagResource */
	static readonly UNTAG_RESOURCE = "mgn:UntagResource";
	/** [Write] mgn:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "mgn:UpdateAccountSettings";
	/** [Write] mgn:UpdateAgentBacklogForMgn */
	static readonly UPDATE_AGENT_BACKLOG_FOR_MGN = "mgn:UpdateAgentBacklogForMgn";
	/** [Write] mgn:UpdateAgentConversionInfoForMgn */
	static readonly UPDATE_AGENT_CONVERSION_INFO_FOR_MGN =
		"mgn:UpdateAgentConversionInfoForMgn";
	/** [Write] mgn:UpdateAgentReplicationInfoForMgn */
	static readonly UPDATE_AGENT_REPLICATION_INFO_FOR_MGN =
		"mgn:UpdateAgentReplicationInfoForMgn";
	/** [Write] mgn:UpdateAgentReplicationProcessStateForMgn */
	static readonly UPDATE_AGENT_REPLICATION_PROCESS_STATE_FOR_MGN =
		"mgn:UpdateAgentReplicationProcessStateForMgn";
	/** [Write] mgn:UpdateAgentSourcePropertiesForMgn */
	static readonly UPDATE_AGENT_SOURCE_PROPERTIES_FOR_MGN =
		"mgn:UpdateAgentSourcePropertiesForMgn";
	/** [Write] mgn:UpdateApplication */
	static readonly UPDATE_APPLICATION = "mgn:UpdateApplication";
	/** [Write] mgn:UpdateConnector */
	static readonly UPDATE_CONNECTOR = "mgn:UpdateConnector";
	/** [Write] mgn:UpdateLaunchConfiguration */
	static readonly UPDATE_LAUNCH_CONFIGURATION = "mgn:UpdateLaunchConfiguration";
	/** [Write] mgn:UpdateLaunchConfigurationTemplate */
	static readonly UPDATE_LAUNCH_CONFIGURATION_TEMPLATE =
		"mgn:UpdateLaunchConfigurationTemplate";
	/** [Write] mgn:UpdateNetworkMigrationDefinition */
	static readonly UPDATE_NETWORK_MIGRATION_DEFINITION =
		"mgn:UpdateNetworkMigrationDefinition";
	/** [Write] mgn:UpdateNetworkMigrationMapperSegment */
	static readonly UPDATE_NETWORK_MIGRATION_MAPPER_SEGMENT =
		"mgn:UpdateNetworkMigrationMapperSegment";
	/** [Write] mgn:UpdateNetworkMigrationMapperSegmentConstruct */
	static readonly UPDATE_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCT =
		"mgn:UpdateNetworkMigrationMapperSegmentConstruct";
	/** [Write] mgn:UpdateReplicationConfiguration */
	static readonly UPDATE_REPLICATION_CONFIGURATION =
		"mgn:UpdateReplicationConfiguration";
	/** [Write] mgn:UpdateReplicationConfigurationTemplate */
	static readonly UPDATE_REPLICATION_CONFIGURATION_TEMPLATE =
		"mgn:UpdateReplicationConfigurationTemplate";
	/** [Write] mgn:UpdateSourceServer */
	static readonly UPDATE_SOURCE_SERVER = "mgn:UpdateSourceServer";
	/** [Write] mgn:UpdateSourceServerReplicationType */
	static readonly UPDATE_SOURCE_SERVER_REPLICATION_TYPE =
		"mgn:UpdateSourceServerReplicationType";
	/** [Write] mgn:UpdateWave */
	static readonly UPDATE_WAVE = "mgn:UpdateWave";
	/** [Read] mgn:VerifyClientRoleForMgn */
	static readonly VERIFY_CLIENT_ROLE_FOR_MGN = "mgn:VerifyClientRoleForMgn";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MgnActions.DESCRIBE_JOB_LOG_ITEMS,
		MgnActions.DESCRIBE_REPLICATION_SERVER_ASSOCIATIONS_FOR_MGN,
		MgnActions.DESCRIBE_SNAPSHOT_REQUESTS_FOR_MGN,
		MgnActions.GET_ACCOUNT_SETTINGS,
		MgnActions.GET_AGENT_COMMAND_FOR_MGN,
		MgnActions.GET_AGENT_CONFIRMED_RESUME_INFO_FOR_MGN,
		MgnActions.GET_AGENT_INSTALLATION_ASSETS_FOR_MGN,
		MgnActions.GET_AGENT_REPLICATION_INFO_FOR_MGN,
		MgnActions.GET_AGENT_RUNTIME_CONFIGURATION_FOR_MGN,
		MgnActions.GET_AGENT_SNAPSHOT_CREDITS_FOR_MGN,
		MgnActions.GET_CHANNEL_COMMANDS_FOR_MGN,
		MgnActions.GET_LAUNCH_CONFIGURATION,
		MgnActions.GET_NETWORK_MIGRATION_DEFINITION,
		MgnActions.GET_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCT,
		MgnActions.GET_REPLICATION_CONFIGURATION,
		MgnActions.GET_VCENTER_CLIENT_COMMANDS_FOR_MGN,
		MgnActions.LIST_CONNECTORS,
		MgnActions.LIST_TAGS_FOR_RESOURCE,
		MgnActions.VERIFY_CLIENT_ROLE_FOR_MGN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MgnActions.ARCHIVE_APPLICATION,
		MgnActions.ARCHIVE_WAVE,
		MgnActions.ASSOCIATE_APPLICATIONS,
		MgnActions.ASSOCIATE_SOURCE_SERVERS,
		MgnActions.BATCH_CREATE_VOLUME_SNAPSHOT_GROUP_FOR_MGN,
		MgnActions.BATCH_DELETE_SNAPSHOT_REQUEST_FOR_MGN,
		MgnActions.CHANGE_SERVER_LIFE_CYCLE_STATE,
		MgnActions.CREATE_APPLICATION,
		MgnActions.CREATE_CONNECTOR,
		MgnActions.CREATE_LAUNCH_CONFIGURATION_TEMPLATE,
		MgnActions.CREATE_NETWORK_MIGRATION_DEFINITION,
		MgnActions.CREATE_REPLICATION_CONFIGURATION_TEMPLATE,
		MgnActions.CREATE_VCENTER_CLIENT_FOR_MGN,
		MgnActions.CREATE_WAVE,
		MgnActions.DELETE_APPLICATION,
		MgnActions.DELETE_CONNECTOR,
		MgnActions.DELETE_JOB,
		MgnActions.DELETE_LAUNCH_CONFIGURATION_TEMPLATE,
		MgnActions.DELETE_NETWORK_MIGRATION_DEFINITION,
		MgnActions.DELETE_REPLICATION_CONFIGURATION_TEMPLATE,
		MgnActions.DELETE_SOURCE_SERVER,
		MgnActions.DELETE_VCENTER_CLIENT,
		MgnActions.DELETE_WAVE,
		MgnActions.DISASSOCIATE_APPLICATIONS,
		MgnActions.DISASSOCIATE_SOURCE_SERVERS,
		MgnActions.DISCONNECT_FROM_SERVICE,
		MgnActions.FINALIZE_CUTOVER,
		MgnActions.INITIALIZE_SERVICE,
		MgnActions.ISSUE_CLIENT_CERTIFICATE_FOR_MGN,
		MgnActions.MARK_AS_ARCHIVED,
		MgnActions.NOTIFY_AGENT_AUTHENTICATION_FOR_MGN,
		MgnActions.NOTIFY_AGENT_CONNECTED_FOR_MGN,
		MgnActions.NOTIFY_AGENT_DISCONNECTED_FOR_MGN,
		MgnActions.NOTIFY_AGENT_REPLICATION_PROGRESS_FOR_MGN,
		MgnActions.NOTIFY_VCENTER_CLIENT_STARTED_FOR_MGN,
		MgnActions.PAUSE_REPLICATION,
		MgnActions.PUT_SOURCE_SERVER_ACTION,
		MgnActions.PUT_TEMPLATE_ACTION,
		MgnActions.REGISTER_AGENT_FOR_MGN,
		MgnActions.REMOVE_SOURCE_SERVER_ACTION,
		MgnActions.REMOVE_TEMPLATE_ACTION,
		MgnActions.RESUME_REPLICATION,
		MgnActions.RETRY_DATA_REPLICATION,
		MgnActions.SEND_AGENT_LOGS_FOR_MGN,
		MgnActions.SEND_AGENT_METRICS_FOR_MGN,
		MgnActions.SEND_CHANNEL_COMMAND_RESULT_FOR_MGN,
		MgnActions.SEND_CLIENT_LOGS_FOR_MGN,
		MgnActions.SEND_CLIENT_METRICS_FOR_MGN,
		MgnActions.SEND_VCENTER_CLIENT_COMMAND_RESULT_FOR_MGN,
		MgnActions.SEND_VCENTER_CLIENT_LOGS_FOR_MGN,
		MgnActions.SEND_VCENTER_CLIENT_METRICS_FOR_MGN,
		MgnActions.START_CUTOVER,
		MgnActions.START_EXPORT,
		MgnActions.START_IMPORT,
		MgnActions.START_IMPORT_FILE_ENRICHMENT,
		MgnActions.START_NETWORK_MIGRATION_ANALYSIS,
		MgnActions.START_NETWORK_MIGRATION_CODE_GENERATION,
		MgnActions.START_NETWORK_MIGRATION_DEPLOYED_STACKS_DELETION,
		MgnActions.START_NETWORK_MIGRATION_DEPLOYMENT,
		MgnActions.START_NETWORK_MIGRATION_MAPPING,
		MgnActions.START_NETWORK_MIGRATION_MAPPING_UPDATE,
		MgnActions.START_REPLICATION,
		MgnActions.START_SNAPSHOT_GROUP_FOR_MGN,
		MgnActions.START_TEST,
		MgnActions.STOP_REPLICATION,
		MgnActions.TERMINATE_TARGET_INSTANCES,
		MgnActions.UNARCHIVE_APPLICATION,
		MgnActions.UNARCHIVE_WAVE,
		MgnActions.UPDATE_ACCOUNT_SETTINGS,
		MgnActions.UPDATE_AGENT_BACKLOG_FOR_MGN,
		MgnActions.UPDATE_AGENT_CONVERSION_INFO_FOR_MGN,
		MgnActions.UPDATE_AGENT_REPLICATION_INFO_FOR_MGN,
		MgnActions.UPDATE_AGENT_REPLICATION_PROCESS_STATE_FOR_MGN,
		MgnActions.UPDATE_AGENT_SOURCE_PROPERTIES_FOR_MGN,
		MgnActions.UPDATE_APPLICATION,
		MgnActions.UPDATE_CONNECTOR,
		MgnActions.UPDATE_LAUNCH_CONFIGURATION,
		MgnActions.UPDATE_LAUNCH_CONFIGURATION_TEMPLATE,
		MgnActions.UPDATE_NETWORK_MIGRATION_DEFINITION,
		MgnActions.UPDATE_NETWORK_MIGRATION_MAPPER_SEGMENT,
		MgnActions.UPDATE_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCT,
		MgnActions.UPDATE_REPLICATION_CONFIGURATION,
		MgnActions.UPDATE_REPLICATION_CONFIGURATION_TEMPLATE,
		MgnActions.UPDATE_SOURCE_SERVER,
		MgnActions.UPDATE_SOURCE_SERVER_REPLICATION_TYPE,
		MgnActions.UPDATE_WAVE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MgnActions.DESCRIBE_JOBS,
		MgnActions.DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES,
		MgnActions.DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES,
		MgnActions.DESCRIBE_SOURCE_SERVERS,
		MgnActions.DESCRIBE_VCENTER_CLIENTS,
		MgnActions.LIST_APPLICATIONS,
		MgnActions.LIST_EXPORT_ERRORS,
		MgnActions.LIST_EXPORTS,
		MgnActions.LIST_IMPORT_ERRORS,
		MgnActions.LIST_IMPORT_FILE_ENRICHMENTS,
		MgnActions.LIST_IMPORTS,
		MgnActions.LIST_MANAGED_ACCOUNTS,
		MgnActions.LIST_NETWORK_MIGRATION_ANALYSES,
		MgnActions.LIST_NETWORK_MIGRATION_ANALYSIS_RESULTS,
		MgnActions.LIST_NETWORK_MIGRATION_CODE_GENERATION_SEGMENTS,
		MgnActions.LIST_NETWORK_MIGRATION_CODE_GENERATIONS,
		MgnActions.LIST_NETWORK_MIGRATION_DEFINITIONS,
		MgnActions.LIST_NETWORK_MIGRATION_DEPLOYED_STACKS,
		MgnActions.LIST_NETWORK_MIGRATION_DEPLOYED_STACKS_DELETIONS,
		MgnActions.LIST_NETWORK_MIGRATION_DEPLOYMENTS,
		MgnActions.LIST_NETWORK_MIGRATION_EXECUTIONS,
		MgnActions.LIST_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCTS,
		MgnActions.LIST_NETWORK_MIGRATION_MAPPER_SEGMENTS,
		MgnActions.LIST_NETWORK_MIGRATION_MAPPING_UPDATES,
		MgnActions.LIST_NETWORK_MIGRATION_MAPPINGS,
		MgnActions.LIST_SOURCE_SERVER_ACTIONS,
		MgnActions.LIST_TEMPLATE_ACTIONS,
		MgnActions.LIST_WAVES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MgnActions.TAG_RESOURCE,
		MgnActions.UNTAG_RESOURCE,
	];
}

const ApplicationResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const ConnectorResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);
const ExportResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):export/(?<exportId>[^:/?]+)$",
);
const ImportResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):import/(?<importId>[^:/?]+)$",
);
const JobResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const LaunchConfigurationTemplateResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):launch-configuration-template/(?<launchConfigurationTemplateId>[^:/?]+)$",
);
const NetworkMigrationDefinitionResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):network-migration-definition/(?<networkMigrationDefinitionId>[^:/?]+)$",
);
const ReplicationConfigurationTemplateResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):replication-configuration-template/(?<replicationConfigurationTemplateId>[^:/?]+)$",
);
const SourceServerResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):source-server/(?<sourceServerId>[^:/?]+)$",
);
const VcenterClientResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):vcenter-client/(?<vcenterClientId>[^:/?]+)$",
);
const WaveResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):wave/(?<waveId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mgn resources.
 */
export class MgnResources {
	/**
	 * Builds an ARN for the ApplicationResource resource.
	 */
	static applicationResource(props: {
		/** The ApplicationID component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApplicationResource resource.
	 */
	static isValidApplicationResourceArn(arn: string): boolean {
		return ApplicationResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ApplicationResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
		const match = ApplicationResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApplicationResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the ConnectorResource resource.
	 */
	static connectorResource(props: {
		/** The ConnectorID component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConnectorResource resource.
	 */
	static isValidConnectorResourceArn(arn: string): boolean {
		return ConnectorResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ConnectorResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
		const match = ConnectorResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConnectorResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the ExportResource resource.
	 */
	static exportResource(props: {
		/** The ExportID component of the ARN. */
		readonly exportId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:export/${props.exportId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ExportResource resource.
	 */
	static isValidExportResourceArn(arn: string): boolean {
		return ExportResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ExportResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		exportId: string;
	} {
		const match = ExportResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ExportResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			exportId: match.groups!.exportId,
		};
	}

	/**
	 * Builds an ARN for the ImportResource resource.
	 */
	static importResource(props: {
		/** The ImportID component of the ARN. */
		readonly importId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:import/${props.importId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ImportResource resource.
	 */
	static isValidImportResourceArn(arn: string): boolean {
		return ImportResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ImportResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		importId: string;
	} {
		const match = ImportResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ImportResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			importId: match.groups!.importId,
		};
	}

	/**
	 * Builds an ARN for the JobResource resource.
	 */
	static jobResource(props: {
		/** The JobID component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the JobResource resource.
	 */
	static isValidJobResourceArn(arn: string): boolean {
		return JobResourceArnRegex.test(arn);
	}

	/**
	 * Parses a JobResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = JobResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid JobResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the LaunchConfigurationTemplateResource resource.
	 */
	static launchConfigurationTemplateResource(props: {
		/** The LaunchConfigurationTemplateID component of the ARN. */
		readonly launchConfigurationTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:launch-configuration-template/${props.launchConfigurationTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the LaunchConfigurationTemplateResource resource.
	 */
	static isValidLaunchConfigurationTemplateResourceArn(arn: string): boolean {
		return LaunchConfigurationTemplateResourceArnRegex.test(arn);
	}

	/**
	 * Parses a LaunchConfigurationTemplateResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLaunchConfigurationTemplateResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		launchConfigurationTemplateId: string;
	} {
		const match = LaunchConfigurationTemplateResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid LaunchConfigurationTemplateResource ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			launchConfigurationTemplateId:
				match.groups!.launchConfigurationTemplateId,
		};
	}

	/**
	 * Builds an ARN for the NetworkMigrationDefinitionResource resource.
	 */
	static networkMigrationDefinitionResource(props: {
		/** The NetworkMigrationDefinitionID component of the ARN. */
		readonly networkMigrationDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:network-migration-definition/${props.networkMigrationDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the NetworkMigrationDefinitionResource resource.
	 */
	static isValidNetworkMigrationDefinitionResourceArn(arn: string): boolean {
		return NetworkMigrationDefinitionResourceArnRegex.test(arn);
	}

	/**
	 * Parses a NetworkMigrationDefinitionResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkMigrationDefinitionResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkMigrationDefinitionId: string;
	} {
		const match = NetworkMigrationDefinitionResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid NetworkMigrationDefinitionResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkMigrationDefinitionId: match.groups!.networkMigrationDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the ReplicationConfigurationTemplateResource resource.
	 */
	static replicationConfigurationTemplateResource(props: {
		/** The ReplicationConfigurationTemplateID component of the ARN. */
		readonly replicationConfigurationTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:replication-configuration-template/${props.replicationConfigurationTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ReplicationConfigurationTemplateResource resource.
	 */
	static isValidReplicationConfigurationTemplateResourceArn(
		arn: string,
	): boolean {
		return ReplicationConfigurationTemplateResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ReplicationConfigurationTemplateResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationConfigurationTemplateResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		replicationConfigurationTemplateId: string;
	} {
		const match = ReplicationConfigurationTemplateResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid ReplicationConfigurationTemplateResource ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			replicationConfigurationTemplateId:
				match.groups!.replicationConfigurationTemplateId,
		};
	}

	/**
	 * Builds an ARN for the SourceServerResource resource.
	 */
	static sourceServerResource(props: {
		/** The SourceServerID component of the ARN. */
		readonly sourceServerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:source-server/${props.sourceServerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SourceServerResource resource.
	 */
	static isValidSourceServerResourceArn(arn: string): boolean {
		return SourceServerResourceArnRegex.test(arn);
	}

	/**
	 * Parses a SourceServerResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceServerResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceServerId: string;
	} {
		const match = SourceServerResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SourceServerResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceServerId: match.groups!.sourceServerId,
		};
	}

	/**
	 * Builds an ARN for the VcenterClientResource resource.
	 */
	static vcenterClientResource(props: {
		/** The VcenterClientID component of the ARN. */
		readonly vcenterClientId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:vcenter-client/${props.vcenterClientId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VcenterClientResource resource.
	 */
	static isValidVcenterClientResourceArn(arn: string): boolean {
		return VcenterClientResourceArnRegex.test(arn);
	}

	/**
	 * Parses a VcenterClientResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVcenterClientResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vcenterClientId: string;
	} {
		const match = VcenterClientResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VcenterClientResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vcenterClientId: match.groups!.vcenterClientId,
		};
	}

	/**
	 * Builds an ARN for the WaveResource resource.
	 */
	static waveResource(props: {
		/** The WaveID component of the ARN. */
		readonly waveId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mgn:${props.region ?? "*"}:${props.account ?? "*"}:wave/${props.waveId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the WaveResource resource.
	 */
	static isValidWaveResourceArn(arn: string): boolean {
		return WaveResourceArnRegex.test(arn);
	}

	/**
	 * Parses a WaveResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWaveResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		waveId: string;
	} {
		const match = WaveResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid WaveResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			waveId: match.groups!.waveId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mgn.
 */
export class MgnOperations {
	/** IAM actions required for the ArchiveApplication API call. */
	static readonly ARCHIVE_APPLICATION: string[] = ["mgn:ArchiveApplication"];
	/** IAM actions required for the ArchiveWave API call. */
	static readonly ARCHIVE_WAVE: string[] = ["mgn:ArchiveWave"];
	/** IAM actions required for the AssociateApplications API call. */
	static readonly ASSOCIATE_APPLICATIONS: string[] = [
		"mgn:AssociateApplications",
	];
	/** IAM actions required for the AssociateSourceServers API call. */
	static readonly ASSOCIATE_SOURCE_SERVERS: string[] = [
		"mgn:AssociateSourceServers",
	];
	/** IAM actions required for the ChangeServerLifeCycleState API call. */
	static readonly CHANGE_SERVER_LIFE_CYCLE_STATE: string[] = [
		"mgn:ChangeServerLifeCycleState",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"mgn:CreateApplication",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"mgn:CreateConnector",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateLaunchConfigurationTemplate API call. */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:CreateLaunchConfigurationTemplate",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateNetworkMigrationDefinition API call. */
	static readonly CREATE_NETWORK_MIGRATION_DEFINITION: string[] = [
		"mgn:CreateNetworkMigrationDefinition",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateReplicationConfigurationTemplate API call. */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:CreateReplicationConfigurationTemplate",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateWave API call. */
	static readonly CREATE_WAVE: string[] = ["mgn:CreateWave", "mgn:TagResource"];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = ["mgn:DeleteApplication"];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["mgn:DeleteConnector"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["mgn:DeleteJob"];
	/** IAM actions required for the DeleteLaunchConfigurationTemplate API call. */
	static readonly DELETE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:DeleteLaunchConfigurationTemplate",
	];
	/** IAM actions required for the DeleteNetworkMigrationDefinition API call. */
	static readonly DELETE_NETWORK_MIGRATION_DEFINITION: string[] = [
		"mgn:DeleteNetworkMigrationDefinition",
	];
	/** IAM actions required for the DeleteReplicationConfigurationTemplate API call. */
	static readonly DELETE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:DeleteReplicationConfigurationTemplate",
	];
	/** IAM actions required for the DeleteSourceServer API call. */
	static readonly DELETE_SOURCE_SERVER: string[] = ["mgn:DeleteSourceServer"];
	/** IAM actions required for the DeleteVcenterClient API call. */
	static readonly DELETE_VCENTER_CLIENT: string[] = ["mgn:DeleteVcenterClient"];
	/** IAM actions required for the DeleteWave API call. */
	static readonly DELETE_WAVE: string[] = ["mgn:DeleteWave"];
	/** IAM actions required for the DescribeJobLogItems API call. */
	static readonly DESCRIBE_JOB_LOG_ITEMS: string[] = [
		"mgn:DescribeJobLogItems",
	];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DESCRIBE_JOBS: string[] = ["mgn:DescribeJobs"];
	/** IAM actions required for the DescribeLaunchConfigurationTemplates API call. */
	static readonly DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES: string[] = [
		"mgn:DescribeLaunchConfigurationTemplates",
	];
	/** IAM actions required for the DescribeReplicationConfigurationTemplates API call. */
	static readonly DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES: string[] = [
		"mgn:DescribeReplicationConfigurationTemplates",
	];
	/** IAM actions required for the DescribeSourceServers API call. */
	static readonly DESCRIBE_SOURCE_SERVERS: string[] = [
		"mgn:DescribeSourceServers",
	];
	/** IAM actions required for the DescribeVcenterClients API call. */
	static readonly DESCRIBE_VCENTER_CLIENTS: string[] = [
		"mgn:DescribeVcenterClients",
	];
	/** IAM actions required for the DisassociateApplications API call. */
	static readonly DISASSOCIATE_APPLICATIONS: string[] = [
		"mgn:DisassociateApplications",
	];
	/** IAM actions required for the DisassociateSourceServers API call. */
	static readonly DISASSOCIATE_SOURCE_SERVERS: string[] = [
		"mgn:DisassociateSourceServers",
	];
	/** IAM actions required for the DisconnectFromService API call. */
	static readonly DISCONNECT_FROM_SERVICE: string[] = [
		"mgn:DisconnectFromService",
	];
	/** IAM actions required for the FinalizeCutover API call. */
	static readonly FINALIZE_CUTOVER: string[] = ["mgn:FinalizeCutover"];
	/** IAM actions required for the GetLaunchConfiguration API call. */
	static readonly GET_LAUNCH_CONFIGURATION: string[] = [
		"mgn:GetLaunchConfiguration",
	];
	/** IAM actions required for the GetNetworkMigrationDefinition API call. */
	static readonly GET_NETWORK_MIGRATION_DEFINITION: string[] = [
		"mgn:GetNetworkMigrationDefinition",
	];
	/** IAM actions required for the GetNetworkMigrationMapperSegmentConstruct API call. */
	static readonly GET_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCT: string[] = [
		"mgn:GetNetworkMigrationMapperSegmentConstruct",
	];
	/** IAM actions required for the GetReplicationConfiguration API call. */
	static readonly GET_REPLICATION_CONFIGURATION: string[] = [
		"mgn:GetReplicationConfiguration",
	];
	/** IAM actions required for the InitializeService API call. */
	static readonly INITIALIZE_SERVICE: string[] = ["mgn:InitializeService"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["mgn:ListApplications"];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["mgn:ListConnectors"];
	/** IAM actions required for the ListExportErrors API call. */
	static readonly LIST_EXPORT_ERRORS: string[] = ["mgn:ListExportErrors"];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["mgn:ListExports"];
	/** IAM actions required for the ListImportErrors API call. */
	static readonly LIST_IMPORT_ERRORS: string[] = ["mgn:ListImportErrors"];
	/** IAM actions required for the ListImportFileEnrichments API call. */
	static readonly LIST_IMPORT_FILE_ENRICHMENTS: string[] = [
		"mgn:ListImportFileEnrichments",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly LIST_IMPORTS: string[] = ["mgn:ListImports"];
	/** IAM actions required for the ListManagedAccounts API call. */
	static readonly LIST_MANAGED_ACCOUNTS: string[] = ["mgn:ListManagedAccounts"];
	/** IAM actions required for the ListNetworkMigrationAnalyses API call. */
	static readonly LIST_NETWORK_MIGRATION_ANALYSES: string[] = [
		"mgn:ListNetworkMigrationAnalyses",
	];
	/** IAM actions required for the ListNetworkMigrationAnalysisResults API call. */
	static readonly LIST_NETWORK_MIGRATION_ANALYSIS_RESULTS: string[] = [
		"mgn:ListNetworkMigrationAnalysisResults",
	];
	/** IAM actions required for the ListNetworkMigrationCodeGenerationSegments API call. */
	static readonly LIST_NETWORK_MIGRATION_CODE_GENERATION_SEGMENTS: string[] = [
		"mgn:ListNetworkMigrationCodeGenerationSegments",
	];
	/** IAM actions required for the ListNetworkMigrationCodeGenerations API call. */
	static readonly LIST_NETWORK_MIGRATION_CODE_GENERATIONS: string[] = [
		"mgn:ListNetworkMigrationCodeGenerations",
	];
	/** IAM actions required for the ListNetworkMigrationDefinitions API call. */
	static readonly LIST_NETWORK_MIGRATION_DEFINITIONS: string[] = [
		"mgn:ListNetworkMigrationDefinitions",
	];
	/** IAM actions required for the ListNetworkMigrationDeployedStacks API call. */
	static readonly LIST_NETWORK_MIGRATION_DEPLOYED_STACKS: string[] = [
		"mgn:ListNetworkMigrationDeployedStacks",
	];
	/** IAM actions required for the ListNetworkMigrationDeployments API call. */
	static readonly LIST_NETWORK_MIGRATION_DEPLOYMENTS: string[] = [
		"mgn:ListNetworkMigrationDeployments",
	];
	/** IAM actions required for the ListNetworkMigrationExecutions API call. */
	static readonly LIST_NETWORK_MIGRATION_EXECUTIONS: string[] = [
		"mgn:ListNetworkMigrationExecutions",
	];
	/** IAM actions required for the ListNetworkMigrationMapperSegmentConstructs API call. */
	static readonly LIST_NETWORK_MIGRATION_MAPPER_SEGMENT_CONSTRUCTS: string[] = [
		"mgn:ListNetworkMigrationMapperSegmentConstructs",
	];
	/** IAM actions required for the ListNetworkMigrationMapperSegments API call. */
	static readonly LIST_NETWORK_MIGRATION_MAPPER_SEGMENTS: string[] = [
		"mgn:ListNetworkMigrationMapperSegments",
	];
	/** IAM actions required for the ListNetworkMigrationMappingUpdates API call. */
	static readonly LIST_NETWORK_MIGRATION_MAPPING_UPDATES: string[] = [
		"mgn:ListNetworkMigrationMappingUpdates",
	];
	/** IAM actions required for the ListNetworkMigrationMappings API call. */
	static readonly LIST_NETWORK_MIGRATION_MAPPINGS: string[] = [
		"mgn:ListNetworkMigrationMappings",
	];
	/** IAM actions required for the ListSourceServerActions API call. */
	static readonly LIST_SOURCE_SERVER_ACTIONS: string[] = [
		"mgn:ListSourceServerActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mgn:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateActions API call. */
	static readonly LIST_TEMPLATE_ACTIONS: string[] = ["mgn:ListTemplateActions"];
	/** IAM actions required for the ListWaves API call. */
	static readonly LIST_WAVES: string[] = ["mgn:ListWaves"];
	/** IAM actions required for the MarkAsArchived API call. */
	static readonly MARK_AS_ARCHIVED: string[] = ["mgn:MarkAsArchived"];
	/** IAM actions required for the PauseReplication API call. */
	static readonly PAUSE_REPLICATION: string[] = ["mgn:PauseReplication"];
	/** IAM actions required for the PutSourceServerAction API call. */
	static readonly PUT_SOURCE_SERVER_ACTION: string[] = [
		"mgn:PutSourceServerAction",
	];
	/** IAM actions required for the PutTemplateAction API call. */
	static readonly PUT_TEMPLATE_ACTION: string[] = ["mgn:PutTemplateAction"];
	/** IAM actions required for the RemoveSourceServerAction API call. */
	static readonly REMOVE_SOURCE_SERVER_ACTION: string[] = [
		"mgn:RemoveSourceServerAction",
	];
	/** IAM actions required for the RemoveTemplateAction API call. */
	static readonly REMOVE_TEMPLATE_ACTION: string[] = [
		"mgn:RemoveTemplateAction",
	];
	/** IAM actions required for the ResumeReplication API call. */
	static readonly RESUME_REPLICATION: string[] = ["mgn:ResumeReplication"];
	/** IAM actions required for the RetryDataReplication API call. */
	static readonly RETRY_DATA_REPLICATION: string[] = [
		"mgn:RetryDataReplication",
	];
	/** IAM actions required for the StartCutover API call. */
	static readonly START_CUTOVER: string[] = [
		"mgn:StartCutover",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartExport API call. */
	static readonly START_EXPORT: string[] = [
		"mgn:StartExport",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartImport API call. */
	static readonly START_IMPORT: string[] = [
		"mgn:StartImport",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartImportFileEnrichment API call. */
	static readonly START_IMPORT_FILE_ENRICHMENT: string[] = [
		"mgn:StartImportFileEnrichment",
	];
	/** IAM actions required for the StartNetworkMigrationAnalysis API call. */
	static readonly START_NETWORK_MIGRATION_ANALYSIS: string[] = [
		"mgn:StartNetworkMigrationAnalysis",
	];
	/** IAM actions required for the StartNetworkMigrationCodeGeneration API call. */
	static readonly START_NETWORK_MIGRATION_CODE_GENERATION: string[] = [
		"mgn:StartNetworkMigrationCodeGeneration",
	];
	/** IAM actions required for the StartNetworkMigrationDeployment API call. */
	static readonly START_NETWORK_MIGRATION_DEPLOYMENT: string[] = [
		"mgn:StartNetworkMigrationDeployment",
	];
	/** IAM actions required for the StartNetworkMigrationMapping API call. */
	static readonly START_NETWORK_MIGRATION_MAPPING: string[] = [
		"mgn:StartNetworkMigrationMapping",
	];
	/** IAM actions required for the StartNetworkMigrationMappingUpdate API call. */
	static readonly START_NETWORK_MIGRATION_MAPPING_UPDATE: string[] = [
		"mgn:StartNetworkMigrationMappingUpdate",
	];
	/** IAM actions required for the StartReplication API call. */
	static readonly START_REPLICATION: string[] = ["mgn:StartReplication"];
	/** IAM actions required for the StartTest API call. */
	static readonly START_TEST: string[] = ["mgn:StartTest", "mgn:TagResource"];
	/** IAM actions required for the StopReplication API call. */
	static readonly STOP_REPLICATION: string[] = ["mgn:StopReplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mgn:TagResource"];
	/** IAM actions required for the TerminateTargetInstances API call. */
	static readonly TERMINATE_TARGET_INSTANCES: string[] = [
		"mgn:TagResource",
		"mgn:TerminateTargetInstances",
	];
	/** IAM actions required for the UnarchiveApplication API call. */
	static readonly UNARCHIVE_APPLICATION: string[] = [
		"mgn:UnarchiveApplication",
	];
	/** IAM actions required for the UnarchiveWave API call. */
	static readonly UNARCHIVE_WAVE: string[] = ["mgn:UnarchiveWave"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mgn:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = ["mgn:UpdateApplication"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UPDATE_CONNECTOR: string[] = ["mgn:UpdateConnector"];
	/** IAM actions required for the UpdateLaunchConfiguration API call. */
	static readonly UPDATE_LAUNCH_CONFIGURATION: string[] = [
		"mgn:UpdateLaunchConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfigurationTemplate API call. */
	static readonly UPDATE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:UpdateLaunchConfigurationTemplate",
	];
	/** IAM actions required for the UpdateNetworkMigrationDefinition API call. */
	static readonly UPDATE_NETWORK_MIGRATION_DEFINITION: string[] = [
		"mgn:UpdateNetworkMigrationDefinition",
	];
	/** IAM actions required for the UpdateNetworkMigrationMapperSegment API call. */
	static readonly UPDATE_NETWORK_MIGRATION_MAPPER_SEGMENT: string[] = [
		"mgn:UpdateNetworkMigrationMapperSegment",
	];
	/** IAM actions required for the UpdateReplicationConfiguration API call. */
	static readonly UPDATE_REPLICATION_CONFIGURATION: string[] = [
		"mgn:UpdateReplicationConfiguration",
	];
	/** IAM actions required for the UpdateReplicationConfigurationTemplate API call. */
	static readonly UPDATE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"mgn:UpdateReplicationConfigurationTemplate",
	];
	/** IAM actions required for the UpdateSourceServer API call. */
	static readonly UPDATE_SOURCE_SERVER: string[] = ["mgn:UpdateSourceServer"];
	/** IAM actions required for the UpdateSourceServerReplicationType API call. */
	static readonly UPDATE_SOURCE_SERVER_REPLICATION_TYPE: string[] = [
		"mgn:UpdateSourceServerReplicationType",
	];
	/** IAM actions required for the UpdateWave API call. */
	static readonly UPDATE_WAVE: string[] = ["mgn:UpdateWave"];
}

/**
 * Condition key constants and builders for mgn.
 */
export class MgnConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfigurationTemplate action. */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateNetworkMigrationDefinition action. */
	static readonly CREATE_NETWORK_MIGRATION_DEFINITION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateReplicationConfigurationTemplate action. */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateVcenterClientForMgn action. */
	static readonly CREATE_VCENTER_CLIENT_FOR_MGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWave action. */
	static readonly CREATE_WAVE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterAgentForMgn action. */
	static readonly REGISTER_AGENT_FOR_MGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCutover action. */
	static readonly START_CUTOVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartExport action. */
	static readonly START_EXPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartImport action. */
	static readonly START_IMPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTest action. */
	static readonly START_TEST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"mgn:CreateAction",
	];
	/** Condition keys applicable to the TerminateTargetInstances action. */
	static readonly TERMINATE_TARGET_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: mgn:CreateAction (String) */
	static readonly CREATE_ACTION = "mgn:CreateAction";

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
	 * Generates a condition block for `mgn:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "mgn:CreateAction": value } };
	}
}
