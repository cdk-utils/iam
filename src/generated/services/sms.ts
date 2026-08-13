// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sms.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sms service.
 */
export class SMSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sms";

	/** [Write] sms:CreateApp */
	static readonly CreateApp = "sms:CreateApp";
	/** [Write] sms:CreateReplicationJob */
	static readonly CreateReplicationJob = "sms:CreateReplicationJob";
	/** [Write] sms:DeleteApp */
	static readonly DeleteApp = "sms:DeleteApp";
	/** [Write] sms:DeleteAppLaunchConfiguration */
	static readonly DeleteAppLaunchConfiguration =
		"sms:DeleteAppLaunchConfiguration";
	/** [Write] sms:DeleteAppReplicationConfiguration */
	static readonly DeleteAppReplicationConfiguration =
		"sms:DeleteAppReplicationConfiguration";
	/** [Write] sms:DeleteAppValidationConfiguration */
	static readonly DeleteAppValidationConfiguration =
		"sms:DeleteAppValidationConfiguration";
	/** [Write] sms:DeleteReplicationJob */
	static readonly DeleteReplicationJob = "sms:DeleteReplicationJob";
	/** [Write] sms:DeleteServerCatalog */
	static readonly DeleteServerCatalog = "sms:DeleteServerCatalog";
	/** [Write] sms:DisassociateConnector */
	static readonly DisassociateConnector = "sms:DisassociateConnector";
	/** [Write] sms:GenerateChangeSet */
	static readonly GenerateChangeSet = "sms:GenerateChangeSet";
	/** [Write] sms:GenerateTemplate */
	static readonly GenerateTemplate = "sms:GenerateTemplate";
	/** [Read] sms:GetApp */
	static readonly actionGetApp = "sms:GetApp";
	/** [Read] sms:GetAppLaunchConfiguration */
	static readonly actionGetAppLaunchConfiguration =
		"sms:GetAppLaunchConfiguration";
	/** [Read] sms:GetAppReplicationConfiguration */
	static readonly actionGetAppReplicationConfiguration =
		"sms:GetAppReplicationConfiguration";
	/** [Read] sms:GetAppValidationConfiguration */
	static readonly actionGetAppValidationConfiguration =
		"sms:GetAppValidationConfiguration";
	/** [Read] sms:GetAppValidationOutput */
	static readonly actionGetAppValidationOutput = "sms:GetAppValidationOutput";
	/** [Read] sms:GetConnectors */
	static readonly actionGetConnectors = "sms:GetConnectors";
	/** [Read] sms:GetMessages */
	static readonly actionGetMessages = "sms:GetMessages";
	/** [Read] sms:GetReplicationJobs */
	static readonly actionGetReplicationJobs = "sms:GetReplicationJobs";
	/** [Read] sms:GetReplicationRuns */
	static readonly actionGetReplicationRuns = "sms:GetReplicationRuns";
	/** [Read] sms:GetServers */
	static readonly actionGetServers = "sms:GetServers";
	/** [Write] sms:ImportAppCatalog */
	static readonly ImportAppCatalog = "sms:ImportAppCatalog";
	/** [Write] sms:ImportServerCatalog */
	static readonly ImportServerCatalog = "sms:ImportServerCatalog";
	/** [Write] sms:LaunchApp */
	static readonly LaunchApp = "sms:LaunchApp";
	/** [List] sms:ListApps */
	static readonly ListApps = "sms:ListApps";
	/** [Write] sms:NotifyAppValidationOutput */
	static readonly NotifyAppValidationOutput = "sms:NotifyAppValidationOutput";
	/** [Write] sms:PutAppLaunchConfiguration */
	static readonly PutAppLaunchConfiguration = "sms:PutAppLaunchConfiguration";
	/** [Write] sms:PutAppReplicationConfiguration */
	static readonly PutAppReplicationConfiguration =
		"sms:PutAppReplicationConfiguration";
	/** [Write] sms:PutAppValidationConfiguration */
	static readonly PutAppValidationConfiguration =
		"sms:PutAppValidationConfiguration";
	/** [Write] sms:SendMessage */
	static readonly SendMessage = "sms:SendMessage";
	/** [Write] sms:StartAppReplication */
	static readonly StartAppReplication = "sms:StartAppReplication";
	/** [Write] sms:StartOnDemandAppReplication */
	static readonly StartOnDemandAppReplication =
		"sms:StartOnDemandAppReplication";
	/** [Write] sms:StartOnDemandReplicationRun */
	static readonly StartOnDemandReplicationRun =
		"sms:StartOnDemandReplicationRun";
	/** [Write] sms:StopAppReplication */
	static readonly StopAppReplication = "sms:StopAppReplication";
	/** [Write] sms:TerminateApp */
	static readonly TerminateApp = "sms:TerminateApp";
	/** [Write] sms:UpdateApp */
	static readonly UpdateApp = "sms:UpdateApp";
	/** [Write] sms:UpdateReplicationJob */
	static readonly UpdateReplicationJob = "sms:UpdateReplicationJob";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SMSActions.actionGetApp,
		SMSActions.actionGetAppLaunchConfiguration,
		SMSActions.actionGetAppReplicationConfiguration,
		SMSActions.actionGetAppValidationConfiguration,
		SMSActions.actionGetAppValidationOutput,
		SMSActions.actionGetConnectors,
		SMSActions.actionGetMessages,
		SMSActions.actionGetReplicationJobs,
		SMSActions.actionGetReplicationRuns,
		SMSActions.actionGetServers,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SMSActions.CreateApp,
		SMSActions.CreateReplicationJob,
		SMSActions.DeleteApp,
		SMSActions.DeleteAppLaunchConfiguration,
		SMSActions.DeleteAppReplicationConfiguration,
		SMSActions.DeleteAppValidationConfiguration,
		SMSActions.DeleteReplicationJob,
		SMSActions.DeleteServerCatalog,
		SMSActions.DisassociateConnector,
		SMSActions.GenerateChangeSet,
		SMSActions.GenerateTemplate,
		SMSActions.ImportAppCatalog,
		SMSActions.ImportServerCatalog,
		SMSActions.LaunchApp,
		SMSActions.NotifyAppValidationOutput,
		SMSActions.PutAppLaunchConfiguration,
		SMSActions.PutAppReplicationConfiguration,
		SMSActions.PutAppValidationConfiguration,
		SMSActions.SendMessage,
		SMSActions.StartAppReplication,
		SMSActions.StartOnDemandAppReplication,
		SMSActions.StartOnDemandReplicationRun,
		SMSActions.StopAppReplication,
		SMSActions.TerminateApp,
		SMSActions.UpdateApp,
		SMSActions.UpdateReplicationJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [SMSActions.ListApps];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
