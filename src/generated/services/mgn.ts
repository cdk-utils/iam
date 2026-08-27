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
	static readonly ArchiveApplication = "mgn:ArchiveApplication";
	/** [Write] mgn:ArchiveWave */
	static readonly ArchiveWave = "mgn:ArchiveWave";
	/** [Write] mgn:AssociateApplications */
	static readonly AssociateApplications = "mgn:AssociateApplications";
	/** [Write] mgn:AssociateSourceServers */
	static readonly AssociateSourceServers = "mgn:AssociateSourceServers";
	/** [Write] mgn:BatchCreateVolumeSnapshotGroupForMgn */
	static readonly BatchCreateVolumeSnapshotGroupForMgn =
		"mgn:BatchCreateVolumeSnapshotGroupForMgn";
	/** [Write] mgn:BatchDeleteSnapshotRequestForMgn */
	static readonly BatchDeleteSnapshotRequestForMgn =
		"mgn:BatchDeleteSnapshotRequestForMgn";
	/** [Write] mgn:ChangeServerLifeCycleState */
	static readonly ChangeServerLifeCycleState = "mgn:ChangeServerLifeCycleState";
	/** [Write] mgn:CreateApplication */
	static readonly CreateApplication = "mgn:CreateApplication";
	/** [Write] mgn:CreateConnector */
	static readonly CreateConnector = "mgn:CreateConnector";
	/** [Write] mgn:CreateLaunchConfigurationTemplate */
	static readonly CreateLaunchConfigurationTemplate =
		"mgn:CreateLaunchConfigurationTemplate";
	/** [Write] mgn:CreateNetworkMigrationDefinition */
	static readonly CreateNetworkMigrationDefinition =
		"mgn:CreateNetworkMigrationDefinition";
	/** [Write] mgn:CreateReplicationConfigurationTemplate */
	static readonly CreateReplicationConfigurationTemplate =
		"mgn:CreateReplicationConfigurationTemplate";
	/** [Write] mgn:CreateVcenterClientForMgn */
	static readonly CreateVcenterClientForMgn = "mgn:CreateVcenterClientForMgn";
	/** [Write] mgn:CreateWave */
	static readonly CreateWave = "mgn:CreateWave";
	/** [Write] mgn:DeleteApplication */
	static readonly DeleteApplication = "mgn:DeleteApplication";
	/** [Write] mgn:DeleteConnector */
	static readonly DeleteConnector = "mgn:DeleteConnector";
	/** [Write] mgn:DeleteJob */
	static readonly DeleteJob = "mgn:DeleteJob";
	/** [Write] mgn:DeleteLaunchConfigurationTemplate */
	static readonly DeleteLaunchConfigurationTemplate =
		"mgn:DeleteLaunchConfigurationTemplate";
	/** [Write] mgn:DeleteNetworkMigrationDefinition */
	static readonly DeleteNetworkMigrationDefinition =
		"mgn:DeleteNetworkMigrationDefinition";
	/** [Write] mgn:DeleteReplicationConfigurationTemplate */
	static readonly DeleteReplicationConfigurationTemplate =
		"mgn:DeleteReplicationConfigurationTemplate";
	/** [Write] mgn:DeleteSourceServer */
	static readonly DeleteSourceServer = "mgn:DeleteSourceServer";
	/** [Write] mgn:DeleteVcenterClient */
	static readonly DeleteVcenterClient = "mgn:DeleteVcenterClient";
	/** [Write] mgn:DeleteWave */
	static readonly DeleteWave = "mgn:DeleteWave";
	/** [Read] mgn:DescribeJobLogItems */
	static readonly DescribeJobLogItems = "mgn:DescribeJobLogItems";
	/** [List] mgn:DescribeJobs */
	static readonly DescribeJobs = "mgn:DescribeJobs";
	/** [List] mgn:DescribeLaunchConfigurationTemplates */
	static readonly DescribeLaunchConfigurationTemplates =
		"mgn:DescribeLaunchConfigurationTemplates";
	/** [List] mgn:DescribeReplicationConfigurationTemplates */
	static readonly DescribeReplicationConfigurationTemplates =
		"mgn:DescribeReplicationConfigurationTemplates";
	/** [Read] mgn:DescribeReplicationServerAssociationsForMgn */
	static readonly DescribeReplicationServerAssociationsForMgn =
		"mgn:DescribeReplicationServerAssociationsForMgn";
	/** [Read] mgn:DescribeSnapshotRequestsForMgn */
	static readonly DescribeSnapshotRequestsForMgn =
		"mgn:DescribeSnapshotRequestsForMgn";
	/** [List] mgn:DescribeSourceServers */
	static readonly DescribeSourceServers = "mgn:DescribeSourceServers";
	/** [List] mgn:DescribeVcenterClients */
	static readonly DescribeVcenterClients = "mgn:DescribeVcenterClients";
	/** [Write] mgn:DisassociateApplications */
	static readonly DisassociateApplications = "mgn:DisassociateApplications";
	/** [Write] mgn:DisassociateSourceServers */
	static readonly DisassociateSourceServers = "mgn:DisassociateSourceServers";
	/** [Write] mgn:DisconnectFromService */
	static readonly DisconnectFromService = "mgn:DisconnectFromService";
	/** [Write] mgn:FinalizeCutover */
	static readonly FinalizeCutover = "mgn:FinalizeCutover";
	/** [Read] mgn:GetAccountSettings */
	static readonly actionGetAccountSettings = "mgn:GetAccountSettings";
	/** [Read] mgn:GetAgentCommandForMgn */
	static readonly actionGetAgentCommandForMgn = "mgn:GetAgentCommandForMgn";
	/** [Read] mgn:GetAgentConfirmedResumeInfoForMgn */
	static readonly actionGetAgentConfirmedResumeInfoForMgn =
		"mgn:GetAgentConfirmedResumeInfoForMgn";
	/** [Read] mgn:GetAgentInstallationAssetsForMgn */
	static readonly actionGetAgentInstallationAssetsForMgn =
		"mgn:GetAgentInstallationAssetsForMgn";
	/** [Read] mgn:GetAgentReplicationInfoForMgn */
	static readonly actionGetAgentReplicationInfoForMgn =
		"mgn:GetAgentReplicationInfoForMgn";
	/** [Read] mgn:GetAgentRuntimeConfigurationForMgn */
	static readonly actionGetAgentRuntimeConfigurationForMgn =
		"mgn:GetAgentRuntimeConfigurationForMgn";
	/** [Read] mgn:GetAgentSnapshotCreditsForMgn */
	static readonly actionGetAgentSnapshotCreditsForMgn =
		"mgn:GetAgentSnapshotCreditsForMgn";
	/** [Read] mgn:GetChannelCommandsForMgn */
	static readonly actionGetChannelCommandsForMgn =
		"mgn:GetChannelCommandsForMgn";
	/** [Read] mgn:GetLaunchConfiguration */
	static readonly actionGetLaunchConfiguration = "mgn:GetLaunchConfiguration";
	/** [Read] mgn:GetNetworkMigrationDefinition */
	static readonly actionGetNetworkMigrationDefinition =
		"mgn:GetNetworkMigrationDefinition";
	/** [Read] mgn:GetNetworkMigrationMapperSegmentConstruct */
	static readonly actionGetNetworkMigrationMapperSegmentConstruct =
		"mgn:GetNetworkMigrationMapperSegmentConstruct";
	/** [Read] mgn:GetReplicationConfiguration */
	static readonly actionGetReplicationConfiguration =
		"mgn:GetReplicationConfiguration";
	/** [Read] mgn:GetVcenterClientCommandsForMgn */
	static readonly actionGetVcenterClientCommandsForMgn =
		"mgn:GetVcenterClientCommandsForMgn";
	/** [Write] mgn:InitializeService */
	static readonly InitializeService = "mgn:InitializeService";
	/** [Write] mgn:IssueClientCertificateForMgn */
	static readonly IssueClientCertificateForMgn =
		"mgn:IssueClientCertificateForMgn";
	/** [List] mgn:ListApplications */
	static readonly ListApplications = "mgn:ListApplications";
	/** [Read] mgn:ListConnectors */
	static readonly ListConnectors = "mgn:ListConnectors";
	/** [List] mgn:ListExportErrors */
	static readonly ListExportErrors = "mgn:ListExportErrors";
	/** [List] mgn:ListExports */
	static readonly ListExports = "mgn:ListExports";
	/** [List] mgn:ListImportErrors */
	static readonly ListImportErrors = "mgn:ListImportErrors";
	/** [List] mgn:ListImportFileEnrichments */
	static readonly ListImportFileEnrichments = "mgn:ListImportFileEnrichments";
	/** [List] mgn:ListImports */
	static readonly ListImports = "mgn:ListImports";
	/** [List] mgn:ListManagedAccounts */
	static readonly ListManagedAccounts = "mgn:ListManagedAccounts";
	/** [List] mgn:ListNetworkMigrationAnalyses */
	static readonly ListNetworkMigrationAnalyses =
		"mgn:ListNetworkMigrationAnalyses";
	/** [List] mgn:ListNetworkMigrationAnalysisResults */
	static readonly ListNetworkMigrationAnalysisResults =
		"mgn:ListNetworkMigrationAnalysisResults";
	/** [List] mgn:ListNetworkMigrationCodeGenerationSegments */
	static readonly ListNetworkMigrationCodeGenerationSegments =
		"mgn:ListNetworkMigrationCodeGenerationSegments";
	/** [List] mgn:ListNetworkMigrationCodeGenerations */
	static readonly ListNetworkMigrationCodeGenerations =
		"mgn:ListNetworkMigrationCodeGenerations";
	/** [List] mgn:ListNetworkMigrationDefinitions */
	static readonly ListNetworkMigrationDefinitions =
		"mgn:ListNetworkMigrationDefinitions";
	/** [List] mgn:ListNetworkMigrationDeployedStacks */
	static readonly ListNetworkMigrationDeployedStacks =
		"mgn:ListNetworkMigrationDeployedStacks";
	/** [List] mgn:ListNetworkMigrationDeployedStacksDeletions */
	static readonly ListNetworkMigrationDeployedStacksDeletions =
		"mgn:ListNetworkMigrationDeployedStacksDeletions";
	/** [List] mgn:ListNetworkMigrationDeployments */
	static readonly ListNetworkMigrationDeployments =
		"mgn:ListNetworkMigrationDeployments";
	/** [List] mgn:ListNetworkMigrationExecutionArtifacts */
	static readonly ListNetworkMigrationExecutionArtifacts =
		"mgn:ListNetworkMigrationExecutionArtifacts";
	/** [List] mgn:ListNetworkMigrationExecutions */
	static readonly ListNetworkMigrationExecutions =
		"mgn:ListNetworkMigrationExecutions";
	/** [List] mgn:ListNetworkMigrationMapperSegmentConstructs */
	static readonly ListNetworkMigrationMapperSegmentConstructs =
		"mgn:ListNetworkMigrationMapperSegmentConstructs";
	/** [List] mgn:ListNetworkMigrationMapperSegments */
	static readonly ListNetworkMigrationMapperSegments =
		"mgn:ListNetworkMigrationMapperSegments";
	/** [List] mgn:ListNetworkMigrationMappingUpdates */
	static readonly ListNetworkMigrationMappingUpdates =
		"mgn:ListNetworkMigrationMappingUpdates";
	/** [List] mgn:ListNetworkMigrationMappings */
	static readonly ListNetworkMigrationMappings =
		"mgn:ListNetworkMigrationMappings";
	/** [List] mgn:ListSourceServerActions */
	static readonly ListSourceServerActions = "mgn:ListSourceServerActions";
	/** [Read] mgn:ListTagsForResource */
	static readonly ListTagsForResource = "mgn:ListTagsForResource";
	/** [List] mgn:ListTemplateActions */
	static readonly ListTemplateActions = "mgn:ListTemplateActions";
	/** [List] mgn:ListWaves */
	static readonly ListWaves = "mgn:ListWaves";
	/** [Write] mgn:MarkAsArchived */
	static readonly MarkAsArchived = "mgn:MarkAsArchived";
	/** [Write] mgn:NotifyAgentAuthenticationForMgn */
	static readonly NotifyAgentAuthenticationForMgn =
		"mgn:NotifyAgentAuthenticationForMgn";
	/** [Write] mgn:NotifyAgentConnectedForMgn */
	static readonly NotifyAgentConnectedForMgn = "mgn:NotifyAgentConnectedForMgn";
	/** [Write] mgn:NotifyAgentDisconnectedForMgn */
	static readonly NotifyAgentDisconnectedForMgn =
		"mgn:NotifyAgentDisconnectedForMgn";
	/** [Write] mgn:NotifyAgentReplicationProgressForMgn */
	static readonly NotifyAgentReplicationProgressForMgn =
		"mgn:NotifyAgentReplicationProgressForMgn";
	/** [Write] mgn:NotifyVcenterClientStartedForMgn */
	static readonly NotifyVcenterClientStartedForMgn =
		"mgn:NotifyVcenterClientStartedForMgn";
	/** [Write] mgn:PauseReplication */
	static readonly PauseReplication = "mgn:PauseReplication";
	/** [Write] mgn:PutSourceServerAction */
	static readonly PutSourceServerAction = "mgn:PutSourceServerAction";
	/** [Write] mgn:PutTemplateAction */
	static readonly PutTemplateAction = "mgn:PutTemplateAction";
	/** [Write] mgn:RegisterAgentForMgn */
	static readonly RegisterAgentForMgn = "mgn:RegisterAgentForMgn";
	/** [Write] mgn:RemoveSourceServerAction */
	static readonly RemoveSourceServerAction = "mgn:RemoveSourceServerAction";
	/** [Write] mgn:RemoveTemplateAction */
	static readonly RemoveTemplateAction = "mgn:RemoveTemplateAction";
	/** [Write] mgn:ResumeReplication */
	static readonly ResumeReplication = "mgn:ResumeReplication";
	/** [Write] mgn:RetryDataReplication */
	static readonly RetryDataReplication = "mgn:RetryDataReplication";
	/** [Write] mgn:SendAgentLogsForMgn */
	static readonly SendAgentLogsForMgn = "mgn:SendAgentLogsForMgn";
	/** [Write] mgn:SendAgentMetricsForMgn */
	static readonly SendAgentMetricsForMgn = "mgn:SendAgentMetricsForMgn";
	/** [Write] mgn:SendChannelCommandResultForMgn */
	static readonly SendChannelCommandResultForMgn =
		"mgn:SendChannelCommandResultForMgn";
	/** [Write] mgn:SendClientLogsForMgn */
	static readonly SendClientLogsForMgn = "mgn:SendClientLogsForMgn";
	/** [Write] mgn:SendClientMetricsForMgn */
	static readonly SendClientMetricsForMgn = "mgn:SendClientMetricsForMgn";
	/** [Write] mgn:SendVcenterClientCommandResultForMgn */
	static readonly SendVcenterClientCommandResultForMgn =
		"mgn:SendVcenterClientCommandResultForMgn";
	/** [Write] mgn:SendVcenterClientLogsForMgn */
	static readonly SendVcenterClientLogsForMgn =
		"mgn:SendVcenterClientLogsForMgn";
	/** [Write] mgn:SendVcenterClientMetricsForMgn */
	static readonly SendVcenterClientMetricsForMgn =
		"mgn:SendVcenterClientMetricsForMgn";
	/** [Write] mgn:StartCutover */
	static readonly StartCutover = "mgn:StartCutover";
	/** [Write] mgn:StartExport */
	static readonly StartExport = "mgn:StartExport";
	/** [Write] mgn:StartImport */
	static readonly StartImport = "mgn:StartImport";
	/** [Write] mgn:StartImportFileEnrichment */
	static readonly StartImportFileEnrichment = "mgn:StartImportFileEnrichment";
	/** [Write] mgn:StartNetworkMigrationAnalysis */
	static readonly StartNetworkMigrationAnalysis =
		"mgn:StartNetworkMigrationAnalysis";
	/** [Write] mgn:StartNetworkMigrationCodeGeneration */
	static readonly StartNetworkMigrationCodeGeneration =
		"mgn:StartNetworkMigrationCodeGeneration";
	/** [Write] mgn:StartNetworkMigrationDeployedStacksDeletion */
	static readonly StartNetworkMigrationDeployedStacksDeletion =
		"mgn:StartNetworkMigrationDeployedStacksDeletion";
	/** [Write] mgn:StartNetworkMigrationDeployment */
	static readonly StartNetworkMigrationDeployment =
		"mgn:StartNetworkMigrationDeployment";
	/** [Write] mgn:StartNetworkMigrationMapping */
	static readonly StartNetworkMigrationMapping =
		"mgn:StartNetworkMigrationMapping";
	/** [Write] mgn:StartNetworkMigrationMappingUpdate */
	static readonly StartNetworkMigrationMappingUpdate =
		"mgn:StartNetworkMigrationMappingUpdate";
	/** [Write] mgn:StartReplication */
	static readonly StartReplication = "mgn:StartReplication";
	/** [Write] mgn:StartSnapshotGroupForMgn */
	static readonly StartSnapshotGroupForMgn = "mgn:StartSnapshotGroupForMgn";
	/** [Write] mgn:StartTest */
	static readonly StartTest = "mgn:StartTest";
	/** [Write] mgn:StopReplication */
	static readonly StopReplication = "mgn:StopReplication";
	/** [Tagging] mgn:TagResource */
	static readonly TagResource = "mgn:TagResource";
	/** [Write] mgn:TerminateTargetInstances */
	static readonly TerminateTargetInstances = "mgn:TerminateTargetInstances";
	/** [Write] mgn:UnarchiveApplication */
	static readonly UnarchiveApplication = "mgn:UnarchiveApplication";
	/** [Write] mgn:UnarchiveWave */
	static readonly UnarchiveWave = "mgn:UnarchiveWave";
	/** [Tagging] mgn:UntagResource */
	static readonly UntagResource = "mgn:UntagResource";
	/** [Write] mgn:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "mgn:UpdateAccountSettings";
	/** [Write] mgn:UpdateAgentBacklogForMgn */
	static readonly UpdateAgentBacklogForMgn = "mgn:UpdateAgentBacklogForMgn";
	/** [Write] mgn:UpdateAgentConversionInfoForMgn */
	static readonly UpdateAgentConversionInfoForMgn =
		"mgn:UpdateAgentConversionInfoForMgn";
	/** [Write] mgn:UpdateAgentReplicationInfoForMgn */
	static readonly UpdateAgentReplicationInfoForMgn =
		"mgn:UpdateAgentReplicationInfoForMgn";
	/** [Write] mgn:UpdateAgentReplicationProcessStateForMgn */
	static readonly UpdateAgentReplicationProcessStateForMgn =
		"mgn:UpdateAgentReplicationProcessStateForMgn";
	/** [Write] mgn:UpdateAgentSourcePropertiesForMgn */
	static readonly UpdateAgentSourcePropertiesForMgn =
		"mgn:UpdateAgentSourcePropertiesForMgn";
	/** [Write] mgn:UpdateApplication */
	static readonly UpdateApplication = "mgn:UpdateApplication";
	/** [Write] mgn:UpdateConnector */
	static readonly UpdateConnector = "mgn:UpdateConnector";
	/** [Write] mgn:UpdateLaunchConfiguration */
	static readonly UpdateLaunchConfiguration = "mgn:UpdateLaunchConfiguration";
	/** [Write] mgn:UpdateLaunchConfigurationTemplate */
	static readonly UpdateLaunchConfigurationTemplate =
		"mgn:UpdateLaunchConfigurationTemplate";
	/** [Write] mgn:UpdateNetworkMigrationDefinition */
	static readonly UpdateNetworkMigrationDefinition =
		"mgn:UpdateNetworkMigrationDefinition";
	/** [Write] mgn:UpdateNetworkMigrationMapperSegment */
	static readonly UpdateNetworkMigrationMapperSegment =
		"mgn:UpdateNetworkMigrationMapperSegment";
	/** [Write] mgn:UpdateNetworkMigrationMapperSegmentConstruct */
	static readonly UpdateNetworkMigrationMapperSegmentConstruct =
		"mgn:UpdateNetworkMigrationMapperSegmentConstruct";
	/** [Write] mgn:UpdateReplicationConfiguration */
	static readonly UpdateReplicationConfiguration =
		"mgn:UpdateReplicationConfiguration";
	/** [Write] mgn:UpdateReplicationConfigurationTemplate */
	static readonly UpdateReplicationConfigurationTemplate =
		"mgn:UpdateReplicationConfigurationTemplate";
	/** [Write] mgn:UpdateSourceServer */
	static readonly UpdateSourceServer = "mgn:UpdateSourceServer";
	/** [Write] mgn:UpdateSourceServerReplicationType */
	static readonly UpdateSourceServerReplicationType =
		"mgn:UpdateSourceServerReplicationType";
	/** [Write] mgn:UpdateWave */
	static readonly UpdateWave = "mgn:UpdateWave";
	/** [Read] mgn:VerifyClientRoleForMgn */
	static readonly VerifyClientRoleForMgn = "mgn:VerifyClientRoleForMgn";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MgnActions.DescribeJobLogItems,
		MgnActions.DescribeReplicationServerAssociationsForMgn,
		MgnActions.DescribeSnapshotRequestsForMgn,
		MgnActions.actionGetAccountSettings,
		MgnActions.actionGetAgentCommandForMgn,
		MgnActions.actionGetAgentConfirmedResumeInfoForMgn,
		MgnActions.actionGetAgentInstallationAssetsForMgn,
		MgnActions.actionGetAgentReplicationInfoForMgn,
		MgnActions.actionGetAgentRuntimeConfigurationForMgn,
		MgnActions.actionGetAgentSnapshotCreditsForMgn,
		MgnActions.actionGetChannelCommandsForMgn,
		MgnActions.actionGetLaunchConfiguration,
		MgnActions.actionGetNetworkMigrationDefinition,
		MgnActions.actionGetNetworkMigrationMapperSegmentConstruct,
		MgnActions.actionGetReplicationConfiguration,
		MgnActions.actionGetVcenterClientCommandsForMgn,
		MgnActions.ListConnectors,
		MgnActions.ListTagsForResource,
		MgnActions.VerifyClientRoleForMgn,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MgnActions.ArchiveApplication,
		MgnActions.ArchiveWave,
		MgnActions.AssociateApplications,
		MgnActions.AssociateSourceServers,
		MgnActions.BatchCreateVolumeSnapshotGroupForMgn,
		MgnActions.BatchDeleteSnapshotRequestForMgn,
		MgnActions.ChangeServerLifeCycleState,
		MgnActions.CreateApplication,
		MgnActions.CreateConnector,
		MgnActions.CreateLaunchConfigurationTemplate,
		MgnActions.CreateNetworkMigrationDefinition,
		MgnActions.CreateReplicationConfigurationTemplate,
		MgnActions.CreateVcenterClientForMgn,
		MgnActions.CreateWave,
		MgnActions.DeleteApplication,
		MgnActions.DeleteConnector,
		MgnActions.DeleteJob,
		MgnActions.DeleteLaunchConfigurationTemplate,
		MgnActions.DeleteNetworkMigrationDefinition,
		MgnActions.DeleteReplicationConfigurationTemplate,
		MgnActions.DeleteSourceServer,
		MgnActions.DeleteVcenterClient,
		MgnActions.DeleteWave,
		MgnActions.DisassociateApplications,
		MgnActions.DisassociateSourceServers,
		MgnActions.DisconnectFromService,
		MgnActions.FinalizeCutover,
		MgnActions.InitializeService,
		MgnActions.IssueClientCertificateForMgn,
		MgnActions.MarkAsArchived,
		MgnActions.NotifyAgentAuthenticationForMgn,
		MgnActions.NotifyAgentConnectedForMgn,
		MgnActions.NotifyAgentDisconnectedForMgn,
		MgnActions.NotifyAgentReplicationProgressForMgn,
		MgnActions.NotifyVcenterClientStartedForMgn,
		MgnActions.PauseReplication,
		MgnActions.PutSourceServerAction,
		MgnActions.PutTemplateAction,
		MgnActions.RegisterAgentForMgn,
		MgnActions.RemoveSourceServerAction,
		MgnActions.RemoveTemplateAction,
		MgnActions.ResumeReplication,
		MgnActions.RetryDataReplication,
		MgnActions.SendAgentLogsForMgn,
		MgnActions.SendAgentMetricsForMgn,
		MgnActions.SendChannelCommandResultForMgn,
		MgnActions.SendClientLogsForMgn,
		MgnActions.SendClientMetricsForMgn,
		MgnActions.SendVcenterClientCommandResultForMgn,
		MgnActions.SendVcenterClientLogsForMgn,
		MgnActions.SendVcenterClientMetricsForMgn,
		MgnActions.StartCutover,
		MgnActions.StartExport,
		MgnActions.StartImport,
		MgnActions.StartImportFileEnrichment,
		MgnActions.StartNetworkMigrationAnalysis,
		MgnActions.StartNetworkMigrationCodeGeneration,
		MgnActions.StartNetworkMigrationDeployedStacksDeletion,
		MgnActions.StartNetworkMigrationDeployment,
		MgnActions.StartNetworkMigrationMapping,
		MgnActions.StartNetworkMigrationMappingUpdate,
		MgnActions.StartReplication,
		MgnActions.StartSnapshotGroupForMgn,
		MgnActions.StartTest,
		MgnActions.StopReplication,
		MgnActions.TerminateTargetInstances,
		MgnActions.UnarchiveApplication,
		MgnActions.UnarchiveWave,
		MgnActions.UpdateAccountSettings,
		MgnActions.UpdateAgentBacklogForMgn,
		MgnActions.UpdateAgentConversionInfoForMgn,
		MgnActions.UpdateAgentReplicationInfoForMgn,
		MgnActions.UpdateAgentReplicationProcessStateForMgn,
		MgnActions.UpdateAgentSourcePropertiesForMgn,
		MgnActions.UpdateApplication,
		MgnActions.UpdateConnector,
		MgnActions.UpdateLaunchConfiguration,
		MgnActions.UpdateLaunchConfigurationTemplate,
		MgnActions.UpdateNetworkMigrationDefinition,
		MgnActions.UpdateNetworkMigrationMapperSegment,
		MgnActions.UpdateNetworkMigrationMapperSegmentConstruct,
		MgnActions.UpdateReplicationConfiguration,
		MgnActions.UpdateReplicationConfigurationTemplate,
		MgnActions.UpdateSourceServer,
		MgnActions.UpdateSourceServerReplicationType,
		MgnActions.UpdateWave,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MgnActions.DescribeJobs,
		MgnActions.DescribeLaunchConfigurationTemplates,
		MgnActions.DescribeReplicationConfigurationTemplates,
		MgnActions.DescribeSourceServers,
		MgnActions.DescribeVcenterClients,
		MgnActions.ListApplications,
		MgnActions.ListExportErrors,
		MgnActions.ListExports,
		MgnActions.ListImportErrors,
		MgnActions.ListImportFileEnrichments,
		MgnActions.ListImports,
		MgnActions.ListManagedAccounts,
		MgnActions.ListNetworkMigrationAnalyses,
		MgnActions.ListNetworkMigrationAnalysisResults,
		MgnActions.ListNetworkMigrationCodeGenerationSegments,
		MgnActions.ListNetworkMigrationCodeGenerations,
		MgnActions.ListNetworkMigrationDefinitions,
		MgnActions.ListNetworkMigrationDeployedStacks,
		MgnActions.ListNetworkMigrationDeployedStacksDeletions,
		MgnActions.ListNetworkMigrationDeployments,
		MgnActions.ListNetworkMigrationExecutionArtifacts,
		MgnActions.ListNetworkMigrationExecutions,
		MgnActions.ListNetworkMigrationMapperSegmentConstructs,
		MgnActions.ListNetworkMigrationMapperSegments,
		MgnActions.ListNetworkMigrationMappingUpdates,
		MgnActions.ListNetworkMigrationMappings,
		MgnActions.ListSourceServerActions,
		MgnActions.ListTemplateActions,
		MgnActions.ListWaves,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MgnActions.TagResource,
		MgnActions.UntagResource,
	];
}

/**
 * Properties for building a ApplicationResource ARN.
 */
export interface MgnApplicationResourceArnProps {
	/** The ApplicationID component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApplicationResource ARN.
 */
export interface MgnApplicationResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationID component. */
	readonly applicationId: string;
}

/**
 * Properties for building a ConnectorResource ARN.
 */
export interface MgnConnectorResourceArnProps {
	/** The ConnectorID component of the ARN. */
	readonly connectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ConnectorResource ARN.
 */
export interface MgnConnectorResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorID component. */
	readonly connectorId: string;
}

/**
 * Properties for building a ExportResource ARN.
 */
export interface MgnExportResourceArnProps {
	/** The ExportID component of the ARN. */
	readonly exportId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ExportResource ARN.
 */
export interface MgnExportResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExportID component. */
	readonly exportId: string;
}

/**
 * Properties for building a ImportResource ARN.
 */
export interface MgnImportResourceArnProps {
	/** The ImportID component of the ARN. */
	readonly importId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ImportResource ARN.
 */
export interface MgnImportResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImportID component. */
	readonly importId: string;
}

/**
 * Properties for building a JobResource ARN.
 */
export interface MgnJobResourceArnProps {
	/** The JobID component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a JobResource ARN.
 */
export interface MgnJobResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobID component. */
	readonly jobId: string;
}

/**
 * Properties for building a LaunchConfigurationTemplateResource ARN.
 */
export interface MgnLaunchConfigurationTemplateResourceArnProps {
	/** The LaunchConfigurationTemplateID component of the ARN. */
	readonly launchConfigurationTemplateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a LaunchConfigurationTemplateResource ARN.
 */
export interface MgnLaunchConfigurationTemplateResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LaunchConfigurationTemplateID component. */
	readonly launchConfigurationTemplateId: string;
}

/**
 * Properties for building a NetworkMigrationDefinitionResource ARN.
 */
export interface MgnNetworkMigrationDefinitionResourceArnProps {
	/** The NetworkMigrationDefinitionID component of the ARN. */
	readonly networkMigrationDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a NetworkMigrationDefinitionResource ARN.
 */
export interface MgnNetworkMigrationDefinitionResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkMigrationDefinitionID component. */
	readonly networkMigrationDefinitionId: string;
}

/**
 * Properties for building a ReplicationConfigurationTemplateResource ARN.
 */
export interface MgnReplicationConfigurationTemplateResourceArnProps {
	/** The ReplicationConfigurationTemplateID component of the ARN. */
	readonly replicationConfigurationTemplateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ReplicationConfigurationTemplateResource ARN.
 */
export interface MgnReplicationConfigurationTemplateResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReplicationConfigurationTemplateID component. */
	readonly replicationConfigurationTemplateId: string;
}

/**
 * Properties for building a SourceServerResource ARN.
 */
export interface MgnSourceServerResourceArnProps {
	/** The SourceServerID component of the ARN. */
	readonly sourceServerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SourceServerResource ARN.
 */
export interface MgnSourceServerResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceServerID component. */
	readonly sourceServerId: string;
}

/**
 * Properties for building a VcenterClientResource ARN.
 */
export interface MgnVcenterClientResourceArnProps {
	/** The VcenterClientID component of the ARN. */
	readonly vcenterClientId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VcenterClientResource ARN.
 */
export interface MgnVcenterClientResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VcenterClientID component. */
	readonly vcenterClientId: string;
}

/**
 * Properties for building a WaveResource ARN.
 */
export interface MgnWaveResourceArnProps {
	/** The WaveID component of the ARN. */
	readonly waveId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a WaveResource ARN.
 */
export interface MgnWaveResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WaveID component. */
	readonly waveId: string;
}

const ApplicationResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const ConnectorResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;
const ExportResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):export\/(?<exportId>[^:/?]+)$/;
const ImportResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):import\/(?<importId>[^:/?]+)$/;
const JobResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const LaunchConfigurationTemplateResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):launch-configuration-template\/(?<launchConfigurationTemplateId>[^:/?]+)$/;
const NetworkMigrationDefinitionResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):network-migration-definition\/(?<networkMigrationDefinitionId>[^:/?]+)$/;
const ReplicationConfigurationTemplateResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):replication-configuration-template\/(?<replicationConfigurationTemplateId>[^:/?]+)$/;
const SourceServerResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):source-server\/(?<sourceServerId>[^:/?]+)$/;
const VcenterClientResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):vcenter-client\/(?<vcenterClientId>[^:/?]+)$/;
const WaveResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgn:(?<region>[^:]*):(?<account>[^:]*):wave\/(?<waveId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mgn resources.
 */
export class MgnResources {
	/**
	 * Builds an ARN for the ApplicationResource resource.
	 */
	static applicationResource(props: MgnApplicationResourceArnProps): string {
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
	static parseApplicationResourceArn(
		arn: string,
	): MgnApplicationResourceArnComponents {
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
	static connectorResource(props: MgnConnectorResourceArnProps): string {
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
	static parseConnectorResourceArn(
		arn: string,
	): MgnConnectorResourceArnComponents {
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
	static exportResource(props: MgnExportResourceArnProps): string {
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
	static parseExportResourceArn(arn: string): MgnExportResourceArnComponents {
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
	static importResource(props: MgnImportResourceArnProps): string {
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
	static parseImportResourceArn(arn: string): MgnImportResourceArnComponents {
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
	static jobResource(props: MgnJobResourceArnProps): string {
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
	static parseJobResourceArn(arn: string): MgnJobResourceArnComponents {
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
	static launchConfigurationTemplateResource(
		props: MgnLaunchConfigurationTemplateResourceArnProps,
	): string {
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
	static parseLaunchConfigurationTemplateResourceArn(
		arn: string,
	): MgnLaunchConfigurationTemplateResourceArnComponents {
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
	static networkMigrationDefinitionResource(
		props: MgnNetworkMigrationDefinitionResourceArnProps,
	): string {
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
	static parseNetworkMigrationDefinitionResourceArn(
		arn: string,
	): MgnNetworkMigrationDefinitionResourceArnComponents {
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
	static replicationConfigurationTemplateResource(
		props: MgnReplicationConfigurationTemplateResourceArnProps,
	): string {
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
	static parseReplicationConfigurationTemplateResourceArn(
		arn: string,
	): MgnReplicationConfigurationTemplateResourceArnComponents {
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
	static sourceServerResource(props: MgnSourceServerResourceArnProps): string {
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
	static parseSourceServerResourceArn(
		arn: string,
	): MgnSourceServerResourceArnComponents {
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
	static vcenterClientResource(
		props: MgnVcenterClientResourceArnProps,
	): string {
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
	static parseVcenterClientResourceArn(
		arn: string,
	): MgnVcenterClientResourceArnComponents {
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
	static waveResource(props: MgnWaveResourceArnProps): string {
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
	static parseWaveResourceArn(arn: string): MgnWaveResourceArnComponents {
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
	static readonly ArchiveApplication: string[] = ["mgn:ArchiveApplication"];
	/** IAM actions required for the ArchiveWave API call. */
	static readonly ArchiveWave: string[] = ["mgn:ArchiveWave"];
	/** IAM actions required for the AssociateApplications API call. */
	static readonly AssociateApplications: string[] = [
		"mgn:AssociateApplications",
	];
	/** IAM actions required for the AssociateSourceServers API call. */
	static readonly AssociateSourceServers: string[] = [
		"mgn:AssociateSourceServers",
	];
	/** IAM actions required for the ChangeServerLifeCycleState API call. */
	static readonly ChangeServerLifeCycleState: string[] = [
		"mgn:ChangeServerLifeCycleState",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"mgn:CreateApplication",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CreateConnector: string[] = [
		"mgn:CreateConnector",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateLaunchConfigurationTemplate API call. */
	static readonly CreateLaunchConfigurationTemplate: string[] = [
		"mgn:CreateLaunchConfigurationTemplate",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateNetworkMigrationDefinition API call. */
	static readonly CreateNetworkMigrationDefinition: string[] = [
		"mgn:CreateNetworkMigrationDefinition",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateReplicationConfigurationTemplate API call. */
	static readonly CreateReplicationConfigurationTemplate: string[] = [
		"mgn:CreateReplicationConfigurationTemplate",
		"mgn:TagResource",
	];
	/** IAM actions required for the CreateWave API call. */
	static readonly CreateWave: string[] = ["mgn:CreateWave", "mgn:TagResource"];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["mgn:DeleteApplication"];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["mgn:DeleteConnector"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["mgn:DeleteJob"];
	/** IAM actions required for the DeleteLaunchConfigurationTemplate API call. */
	static readonly DeleteLaunchConfigurationTemplate: string[] = [
		"mgn:DeleteLaunchConfigurationTemplate",
	];
	/** IAM actions required for the DeleteNetworkMigrationDefinition API call. */
	static readonly DeleteNetworkMigrationDefinition: string[] = [
		"mgn:DeleteNetworkMigrationDefinition",
	];
	/** IAM actions required for the DeleteReplicationConfigurationTemplate API call. */
	static readonly DeleteReplicationConfigurationTemplate: string[] = [
		"mgn:DeleteReplicationConfigurationTemplate",
	];
	/** IAM actions required for the DeleteSourceServer API call. */
	static readonly DeleteSourceServer: string[] = ["mgn:DeleteSourceServer"];
	/** IAM actions required for the DeleteVcenterClient API call. */
	static readonly DeleteVcenterClient: string[] = ["mgn:DeleteVcenterClient"];
	/** IAM actions required for the DeleteWave API call. */
	static readonly DeleteWave: string[] = ["mgn:DeleteWave"];
	/** IAM actions required for the DescribeJobLogItems API call. */
	static readonly DescribeJobLogItems: string[] = ["mgn:DescribeJobLogItems"];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DescribeJobs: string[] = ["mgn:DescribeJobs"];
	/** IAM actions required for the DescribeLaunchConfigurationTemplates API call. */
	static readonly DescribeLaunchConfigurationTemplates: string[] = [
		"mgn:DescribeLaunchConfigurationTemplates",
	];
	/** IAM actions required for the DescribeReplicationConfigurationTemplates API call. */
	static readonly DescribeReplicationConfigurationTemplates: string[] = [
		"mgn:DescribeReplicationConfigurationTemplates",
	];
	/** IAM actions required for the DescribeSourceServers API call. */
	static readonly DescribeSourceServers: string[] = [
		"mgn:DescribeSourceServers",
	];
	/** IAM actions required for the DescribeVcenterClients API call. */
	static readonly DescribeVcenterClients: string[] = [
		"mgn:DescribeVcenterClients",
	];
	/** IAM actions required for the DisassociateApplications API call. */
	static readonly DisassociateApplications: string[] = [
		"mgn:DisassociateApplications",
	];
	/** IAM actions required for the DisassociateSourceServers API call. */
	static readonly DisassociateSourceServers: string[] = [
		"mgn:DisassociateSourceServers",
	];
	/** IAM actions required for the DisconnectFromService API call. */
	static readonly DisconnectFromService: string[] = [
		"mgn:DisconnectFromService",
	];
	/** IAM actions required for the FinalizeCutover API call. */
	static readonly FinalizeCutover: string[] = ["mgn:FinalizeCutover"];
	/** IAM actions required for the GetLaunchConfiguration API call. */
	static readonly opGetLaunchConfiguration: string[] = [
		"mgn:GetLaunchConfiguration",
	];
	/** IAM actions required for the GetNetworkMigrationDefinition API call. */
	static readonly opGetNetworkMigrationDefinition: string[] = [
		"mgn:GetNetworkMigrationDefinition",
	];
	/** IAM actions required for the GetNetworkMigrationMapperSegmentConstruct API call. */
	static readonly opGetNetworkMigrationMapperSegmentConstruct: string[] = [
		"mgn:GetNetworkMigrationMapperSegmentConstruct",
	];
	/** IAM actions required for the GetReplicationConfiguration API call. */
	static readonly opGetReplicationConfiguration: string[] = [
		"mgn:GetReplicationConfiguration",
	];
	/** IAM actions required for the InitializeService API call. */
	static readonly InitializeService: string[] = ["mgn:InitializeService"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["mgn:ListApplications"];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["mgn:ListConnectors"];
	/** IAM actions required for the ListExportErrors API call. */
	static readonly ListExportErrors: string[] = ["mgn:ListExportErrors"];
	/** IAM actions required for the ListExports API call. */
	static readonly ListExports: string[] = ["mgn:ListExports"];
	/** IAM actions required for the ListImportErrors API call. */
	static readonly ListImportErrors: string[] = ["mgn:ListImportErrors"];
	/** IAM actions required for the ListImportFileEnrichments API call. */
	static readonly ListImportFileEnrichments: string[] = [
		"mgn:ListImportFileEnrichments",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly ListImports: string[] = ["mgn:ListImports"];
	/** IAM actions required for the ListManagedAccounts API call. */
	static readonly ListManagedAccounts: string[] = ["mgn:ListManagedAccounts"];
	/** IAM actions required for the ListNetworkMigrationAnalyses API call. */
	static readonly ListNetworkMigrationAnalyses: string[] = [
		"mgn:ListNetworkMigrationAnalyses",
	];
	/** IAM actions required for the ListNetworkMigrationAnalysisResults API call. */
	static readonly ListNetworkMigrationAnalysisResults: string[] = [
		"mgn:ListNetworkMigrationAnalysisResults",
	];
	/** IAM actions required for the ListNetworkMigrationCodeGenerationSegments API call. */
	static readonly ListNetworkMigrationCodeGenerationSegments: string[] = [
		"mgn:ListNetworkMigrationCodeGenerationSegments",
	];
	/** IAM actions required for the ListNetworkMigrationCodeGenerations API call. */
	static readonly ListNetworkMigrationCodeGenerations: string[] = [
		"mgn:ListNetworkMigrationCodeGenerations",
	];
	/** IAM actions required for the ListNetworkMigrationDefinitions API call. */
	static readonly ListNetworkMigrationDefinitions: string[] = [
		"mgn:ListNetworkMigrationDefinitions",
	];
	/** IAM actions required for the ListNetworkMigrationDeployedStacks API call. */
	static readonly ListNetworkMigrationDeployedStacks: string[] = [
		"mgn:ListNetworkMigrationDeployedStacks",
	];
	/** IAM actions required for the ListNetworkMigrationDeployments API call. */
	static readonly ListNetworkMigrationDeployments: string[] = [
		"mgn:ListNetworkMigrationDeployments",
	];
	/** IAM actions required for the ListNetworkMigrationExecutions API call. */
	static readonly ListNetworkMigrationExecutions: string[] = [
		"mgn:ListNetworkMigrationExecutions",
	];
	/** IAM actions required for the ListNetworkMigrationMapperSegmentConstructs API call. */
	static readonly ListNetworkMigrationMapperSegmentConstructs: string[] = [
		"mgn:ListNetworkMigrationMapperSegmentConstructs",
	];
	/** IAM actions required for the ListNetworkMigrationMapperSegments API call. */
	static readonly ListNetworkMigrationMapperSegments: string[] = [
		"mgn:ListNetworkMigrationMapperSegments",
	];
	/** IAM actions required for the ListNetworkMigrationMappingUpdates API call. */
	static readonly ListNetworkMigrationMappingUpdates: string[] = [
		"mgn:ListNetworkMigrationMappingUpdates",
	];
	/** IAM actions required for the ListNetworkMigrationMappings API call. */
	static readonly ListNetworkMigrationMappings: string[] = [
		"mgn:ListNetworkMigrationMappings",
	];
	/** IAM actions required for the ListSourceServerActions API call. */
	static readonly ListSourceServerActions: string[] = [
		"mgn:ListSourceServerActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["mgn:ListTagsForResource"];
	/** IAM actions required for the ListTemplateActions API call. */
	static readonly ListTemplateActions: string[] = ["mgn:ListTemplateActions"];
	/** IAM actions required for the ListWaves API call. */
	static readonly ListWaves: string[] = ["mgn:ListWaves"];
	/** IAM actions required for the MarkAsArchived API call. */
	static readonly MarkAsArchived: string[] = ["mgn:MarkAsArchived"];
	/** IAM actions required for the PauseReplication API call. */
	static readonly PauseReplication: string[] = ["mgn:PauseReplication"];
	/** IAM actions required for the PutSourceServerAction API call. */
	static readonly PutSourceServerAction: string[] = [
		"mgn:PutSourceServerAction",
	];
	/** IAM actions required for the PutTemplateAction API call. */
	static readonly PutTemplateAction: string[] = ["mgn:PutTemplateAction"];
	/** IAM actions required for the RemoveSourceServerAction API call. */
	static readonly RemoveSourceServerAction: string[] = [
		"mgn:RemoveSourceServerAction",
	];
	/** IAM actions required for the RemoveTemplateAction API call. */
	static readonly RemoveTemplateAction: string[] = ["mgn:RemoveTemplateAction"];
	/** IAM actions required for the ResumeReplication API call. */
	static readonly ResumeReplication: string[] = ["mgn:ResumeReplication"];
	/** IAM actions required for the RetryDataReplication API call. */
	static readonly RetryDataReplication: string[] = ["mgn:RetryDataReplication"];
	/** IAM actions required for the StartCutover API call. */
	static readonly StartCutover: string[] = [
		"mgn:StartCutover",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartExport API call. */
	static readonly StartExport: string[] = [
		"mgn:StartExport",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartImport API call. */
	static readonly StartImport: string[] = [
		"mgn:StartImport",
		"mgn:TagResource",
	];
	/** IAM actions required for the StartImportFileEnrichment API call. */
	static readonly StartImportFileEnrichment: string[] = [
		"mgn:StartImportFileEnrichment",
	];
	/** IAM actions required for the StartNetworkMigrationAnalysis API call. */
	static readonly StartNetworkMigrationAnalysis: string[] = [
		"mgn:StartNetworkMigrationAnalysis",
	];
	/** IAM actions required for the StartNetworkMigrationCodeGeneration API call. */
	static readonly StartNetworkMigrationCodeGeneration: string[] = [
		"mgn:StartNetworkMigrationCodeGeneration",
	];
	/** IAM actions required for the StartNetworkMigrationDeployment API call. */
	static readonly StartNetworkMigrationDeployment: string[] = [
		"mgn:StartNetworkMigrationDeployment",
	];
	/** IAM actions required for the StartNetworkMigrationMapping API call. */
	static readonly StartNetworkMigrationMapping: string[] = [
		"mgn:StartNetworkMigrationMapping",
	];
	/** IAM actions required for the StartNetworkMigrationMappingUpdate API call. */
	static readonly StartNetworkMigrationMappingUpdate: string[] = [
		"mgn:StartNetworkMigrationMappingUpdate",
	];
	/** IAM actions required for the StartReplication API call. */
	static readonly StartReplication: string[] = ["mgn:StartReplication"];
	/** IAM actions required for the StartTest API call. */
	static readonly StartTest: string[] = ["mgn:StartTest", "mgn:TagResource"];
	/** IAM actions required for the StopReplication API call. */
	static readonly StopReplication: string[] = ["mgn:StopReplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mgn:TagResource"];
	/** IAM actions required for the TerminateTargetInstances API call. */
	static readonly TerminateTargetInstances: string[] = [
		"mgn:TagResource",
		"mgn:TerminateTargetInstances",
	];
	/** IAM actions required for the UnarchiveApplication API call. */
	static readonly UnarchiveApplication: string[] = ["mgn:UnarchiveApplication"];
	/** IAM actions required for the UnarchiveWave API call. */
	static readonly UnarchiveWave: string[] = ["mgn:UnarchiveWave"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mgn:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = ["mgn:UpdateApplication"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UpdateConnector: string[] = ["mgn:UpdateConnector"];
	/** IAM actions required for the UpdateLaunchConfiguration API call. */
	static readonly UpdateLaunchConfiguration: string[] = [
		"mgn:UpdateLaunchConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfigurationTemplate API call. */
	static readonly UpdateLaunchConfigurationTemplate: string[] = [
		"mgn:UpdateLaunchConfigurationTemplate",
	];
	/** IAM actions required for the UpdateNetworkMigrationDefinition API call. */
	static readonly UpdateNetworkMigrationDefinition: string[] = [
		"mgn:UpdateNetworkMigrationDefinition",
	];
	/** IAM actions required for the UpdateNetworkMigrationMapperSegment API call. */
	static readonly UpdateNetworkMigrationMapperSegment: string[] = [
		"mgn:UpdateNetworkMigrationMapperSegment",
	];
	/** IAM actions required for the UpdateReplicationConfiguration API call. */
	static readonly UpdateReplicationConfiguration: string[] = [
		"mgn:UpdateReplicationConfiguration",
	];
	/** IAM actions required for the UpdateReplicationConfigurationTemplate API call. */
	static readonly UpdateReplicationConfigurationTemplate: string[] = [
		"mgn:UpdateReplicationConfigurationTemplate",
	];
	/** IAM actions required for the UpdateSourceServer API call. */
	static readonly UpdateSourceServer: string[] = ["mgn:UpdateSourceServer"];
	/** IAM actions required for the UpdateSourceServerReplicationType API call. */
	static readonly UpdateSourceServerReplicationType: string[] = [
		"mgn:UpdateSourceServerReplicationType",
	];
	/** IAM actions required for the UpdateWave API call. */
	static readonly UpdateWave: string[] = ["mgn:UpdateWave"];
}

/**
 * Condition key constants and builders for mgn.
 */
export class MgnConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfigurationTemplate action. */
	static readonly CreateLaunchConfigurationTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkMigrationDefinition action. */
	static readonly CreateNetworkMigrationDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReplicationConfigurationTemplate action. */
	static readonly CreateReplicationConfigurationTemplateConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateVcenterClientForMgn action. */
	static readonly CreateVcenterClientForMgnConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWave action. */
	static readonly CreateWaveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterAgentForMgn action. */
	static readonly RegisterAgentForMgnConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCutover action. */
	static readonly StartCutoverConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartExport action. */
	static readonly StartExportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartImport action. */
	static readonly StartImportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTest action. */
	static readonly StartTestConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"mgn:CreateAction",
	];
	/** Condition keys applicable to the TerminateTargetInstances action. */
	static readonly TerminateTargetInstancesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
