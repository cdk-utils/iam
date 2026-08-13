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
	static readonly CREATE_APP = "sms:CreateApp";
	/** [Write] sms:CreateReplicationJob */
	static readonly CREATE_REPLICATION_JOB = "sms:CreateReplicationJob";
	/** [Write] sms:DeleteApp */
	static readonly DELETE_APP = "sms:DeleteApp";
	/** [Write] sms:DeleteAppLaunchConfiguration */
	static readonly DELETE_APP_LAUNCH_CONFIGURATION =
		"sms:DeleteAppLaunchConfiguration";
	/** [Write] sms:DeleteAppReplicationConfiguration */
	static readonly DELETE_APP_REPLICATION_CONFIGURATION =
		"sms:DeleteAppReplicationConfiguration";
	/** [Write] sms:DeleteAppValidationConfiguration */
	static readonly DELETE_APP_VALIDATION_CONFIGURATION =
		"sms:DeleteAppValidationConfiguration";
	/** [Write] sms:DeleteReplicationJob */
	static readonly DELETE_REPLICATION_JOB = "sms:DeleteReplicationJob";
	/** [Write] sms:DeleteServerCatalog */
	static readonly DELETE_SERVER_CATALOG = "sms:DeleteServerCatalog";
	/** [Write] sms:DisassociateConnector */
	static readonly DISASSOCIATE_CONNECTOR = "sms:DisassociateConnector";
	/** [Write] sms:GenerateChangeSet */
	static readonly GENERATE_CHANGE_SET = "sms:GenerateChangeSet";
	/** [Write] sms:GenerateTemplate */
	static readonly GENERATE_TEMPLATE = "sms:GenerateTemplate";
	/** [Read] sms:GetApp */
	static readonly GET_APP = "sms:GetApp";
	/** [Read] sms:GetAppLaunchConfiguration */
	static readonly GET_APP_LAUNCH_CONFIGURATION =
		"sms:GetAppLaunchConfiguration";
	/** [Read] sms:GetAppReplicationConfiguration */
	static readonly GET_APP_REPLICATION_CONFIGURATION =
		"sms:GetAppReplicationConfiguration";
	/** [Read] sms:GetAppValidationConfiguration */
	static readonly GET_APP_VALIDATION_CONFIGURATION =
		"sms:GetAppValidationConfiguration";
	/** [Read] sms:GetAppValidationOutput */
	static readonly GET_APP_VALIDATION_OUTPUT = "sms:GetAppValidationOutput";
	/** [Read] sms:GetConnectors */
	static readonly GET_CONNECTORS = "sms:GetConnectors";
	/** [Read] sms:GetMessages */
	static readonly GET_MESSAGES = "sms:GetMessages";
	/** [Read] sms:GetReplicationJobs */
	static readonly GET_REPLICATION_JOBS = "sms:GetReplicationJobs";
	/** [Read] sms:GetReplicationRuns */
	static readonly GET_REPLICATION_RUNS = "sms:GetReplicationRuns";
	/** [Read] sms:GetServers */
	static readonly GET_SERVERS = "sms:GetServers";
	/** [Write] sms:ImportAppCatalog */
	static readonly IMPORT_APP_CATALOG = "sms:ImportAppCatalog";
	/** [Write] sms:ImportServerCatalog */
	static readonly IMPORT_SERVER_CATALOG = "sms:ImportServerCatalog";
	/** [Write] sms:LaunchApp */
	static readonly LAUNCH_APP = "sms:LaunchApp";
	/** [List] sms:ListApps */
	static readonly LIST_APPS = "sms:ListApps";
	/** [Write] sms:NotifyAppValidationOutput */
	static readonly NOTIFY_APP_VALIDATION_OUTPUT =
		"sms:NotifyAppValidationOutput";
	/** [Write] sms:PutAppLaunchConfiguration */
	static readonly PUT_APP_LAUNCH_CONFIGURATION =
		"sms:PutAppLaunchConfiguration";
	/** [Write] sms:PutAppReplicationConfiguration */
	static readonly PUT_APP_REPLICATION_CONFIGURATION =
		"sms:PutAppReplicationConfiguration";
	/** [Write] sms:PutAppValidationConfiguration */
	static readonly PUT_APP_VALIDATION_CONFIGURATION =
		"sms:PutAppValidationConfiguration";
	/** [Write] sms:SendMessage */
	static readonly SEND_MESSAGE = "sms:SendMessage";
	/** [Write] sms:StartAppReplication */
	static readonly START_APP_REPLICATION = "sms:StartAppReplication";
	/** [Write] sms:StartOnDemandAppReplication */
	static readonly START_ON_DEMAND_APP_REPLICATION =
		"sms:StartOnDemandAppReplication";
	/** [Write] sms:StartOnDemandReplicationRun */
	static readonly START_ON_DEMAND_REPLICATION_RUN =
		"sms:StartOnDemandReplicationRun";
	/** [Write] sms:StopAppReplication */
	static readonly STOP_APP_REPLICATION = "sms:StopAppReplication";
	/** [Write] sms:TerminateApp */
	static readonly TERMINATE_APP = "sms:TerminateApp";
	/** [Write] sms:UpdateApp */
	static readonly UPDATE_APP = "sms:UpdateApp";
	/** [Write] sms:UpdateReplicationJob */
	static readonly UPDATE_REPLICATION_JOB = "sms:UpdateReplicationJob";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SMSActions.GET_APP,
		SMSActions.GET_APP_LAUNCH_CONFIGURATION,
		SMSActions.GET_APP_REPLICATION_CONFIGURATION,
		SMSActions.GET_APP_VALIDATION_CONFIGURATION,
		SMSActions.GET_APP_VALIDATION_OUTPUT,
		SMSActions.GET_CONNECTORS,
		SMSActions.GET_MESSAGES,
		SMSActions.GET_REPLICATION_JOBS,
		SMSActions.GET_REPLICATION_RUNS,
		SMSActions.GET_SERVERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SMSActions.CREATE_APP,
		SMSActions.CREATE_REPLICATION_JOB,
		SMSActions.DELETE_APP,
		SMSActions.DELETE_APP_LAUNCH_CONFIGURATION,
		SMSActions.DELETE_APP_REPLICATION_CONFIGURATION,
		SMSActions.DELETE_APP_VALIDATION_CONFIGURATION,
		SMSActions.DELETE_REPLICATION_JOB,
		SMSActions.DELETE_SERVER_CATALOG,
		SMSActions.DISASSOCIATE_CONNECTOR,
		SMSActions.GENERATE_CHANGE_SET,
		SMSActions.GENERATE_TEMPLATE,
		SMSActions.IMPORT_APP_CATALOG,
		SMSActions.IMPORT_SERVER_CATALOG,
		SMSActions.LAUNCH_APP,
		SMSActions.NOTIFY_APP_VALIDATION_OUTPUT,
		SMSActions.PUT_APP_LAUNCH_CONFIGURATION,
		SMSActions.PUT_APP_REPLICATION_CONFIGURATION,
		SMSActions.PUT_APP_VALIDATION_CONFIGURATION,
		SMSActions.SEND_MESSAGE,
		SMSActions.START_APP_REPLICATION,
		SMSActions.START_ON_DEMAND_APP_REPLICATION,
		SMSActions.START_ON_DEMAND_REPLICATION_RUN,
		SMSActions.STOP_APP_REPLICATION,
		SMSActions.TERMINATE_APP,
		SMSActions.UPDATE_APP,
		SMSActions.UPDATE_REPLICATION_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [SMSActions.LIST_APPS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
