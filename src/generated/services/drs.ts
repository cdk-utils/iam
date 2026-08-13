// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/drs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the drs service.
 */
export class DRSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "drs";

	/** [Write] drs:AssociateFailbackClientToRecoveryInstanceForDrs */
	static readonly ASSOCIATE_FAILBACK_CLIENT_TO_RECOVERY_INSTANCE_FOR_DRS =
		"drs:AssociateFailbackClientToRecoveryInstanceForDrs";
	/** [Write] drs:AssociateSourceNetworkStack */
	static readonly ASSOCIATE_SOURCE_NETWORK_STACK =
		"drs:AssociateSourceNetworkStack";
	/** [Write] drs:BatchCreateVolumeSnapshotGroupForDrs */
	static readonly BATCH_CREATE_VOLUME_SNAPSHOT_GROUP_FOR_DRS =
		"drs:BatchCreateVolumeSnapshotGroupForDrs";
	/** [Write] drs:BatchDeleteSnapshotRequestForDrs */
	static readonly BATCH_DELETE_SNAPSHOT_REQUEST_FOR_DRS =
		"drs:BatchDeleteSnapshotRequestForDrs";
	/** [Write] drs:CreateConvertedSnapshotForDrs */
	static readonly CREATE_CONVERTED_SNAPSHOT_FOR_DRS =
		"drs:CreateConvertedSnapshotForDrs";
	/** [Write] drs:CreateExtendedSourceServer */
	static readonly CREATE_EXTENDED_SOURCE_SERVER =
		"drs:CreateExtendedSourceServer";
	/** [Write] drs:CreateLaunchConfigurationTemplate */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE =
		"drs:CreateLaunchConfigurationTemplate";
	/** [Write] drs:CreateRecoveryInstanceForDrs */
	static readonly CREATE_RECOVERY_INSTANCE_FOR_DRS =
		"drs:CreateRecoveryInstanceForDrs";
	/** [Write] drs:CreateReplicationConfigurationTemplate */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE =
		"drs:CreateReplicationConfigurationTemplate";
	/** [Write] drs:CreateSourceNetwork */
	static readonly CREATE_SOURCE_NETWORK = "drs:CreateSourceNetwork";
	/** [Write] drs:CreateSourceServerForDrs */
	static readonly CREATE_SOURCE_SERVER_FOR_DRS = "drs:CreateSourceServerForDrs";
	/** [Write] drs:DeleteJob */
	static readonly DELETE_JOB = "drs:DeleteJob";
	/** [Write] drs:DeleteLaunchAction */
	static readonly DELETE_LAUNCH_ACTION = "drs:DeleteLaunchAction";
	/** [Write] drs:DeleteLaunchConfigurationTemplate */
	static readonly DELETE_LAUNCH_CONFIGURATION_TEMPLATE =
		"drs:DeleteLaunchConfigurationTemplate";
	/** [Write] drs:DeleteRecoveryInstance */
	static readonly DELETE_RECOVERY_INSTANCE = "drs:DeleteRecoveryInstance";
	/** [Write] drs:DeleteReplicationConfigurationTemplate */
	static readonly DELETE_REPLICATION_CONFIGURATION_TEMPLATE =
		"drs:DeleteReplicationConfigurationTemplate";
	/** [Write] drs:DeleteSourceNetwork */
	static readonly DELETE_SOURCE_NETWORK = "drs:DeleteSourceNetwork";
	/** [Write] drs:DeleteSourceServer */
	static readonly DELETE_SOURCE_SERVER = "drs:DeleteSourceServer";
	/** [Read] drs:DescribeJobLogItems */
	static readonly DESCRIBE_JOB_LOG_ITEMS = "drs:DescribeJobLogItems";
	/** [Read] drs:DescribeJobs */
	static readonly DESCRIBE_JOBS = "drs:DescribeJobs";
	/** [Read] drs:DescribeLaunchConfigurationTemplates */
	static readonly DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES =
		"drs:DescribeLaunchConfigurationTemplates";
	/** [Read] drs:DescribeRecoveryInstances */
	static readonly DESCRIBE_RECOVERY_INSTANCES = "drs:DescribeRecoveryInstances";
	/** [Read] drs:DescribeRecoverySnapshots */
	static readonly DESCRIBE_RECOVERY_SNAPSHOTS = "drs:DescribeRecoverySnapshots";
	/** [Read] drs:DescribeReplicationConfigurationTemplates */
	static readonly DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES =
		"drs:DescribeReplicationConfigurationTemplates";
	/** [Read] drs:DescribeReplicationServerAssociationsForDrs */
	static readonly DESCRIBE_REPLICATION_SERVER_ASSOCIATIONS_FOR_DRS =
		"drs:DescribeReplicationServerAssociationsForDrs";
	/** [Read] drs:DescribeSnapshotRequestsForDrs */
	static readonly DESCRIBE_SNAPSHOT_REQUESTS_FOR_DRS =
		"drs:DescribeSnapshotRequestsForDrs";
	/** [Read] drs:DescribeSourceNetworks */
	static readonly DESCRIBE_SOURCE_NETWORKS = "drs:DescribeSourceNetworks";
	/** [Read] drs:DescribeSourceServers */
	static readonly DESCRIBE_SOURCE_SERVERS = "drs:DescribeSourceServers";
	/** [Write] drs:DisconnectRecoveryInstance */
	static readonly DISCONNECT_RECOVERY_INSTANCE =
		"drs:DisconnectRecoveryInstance";
	/** [Write] drs:DisconnectSourceServer */
	static readonly DISCONNECT_SOURCE_SERVER = "drs:DisconnectSourceServer";
	/** [Write] drs:ExportSourceNetworkCfnTemplate */
	static readonly EXPORT_SOURCE_NETWORK_CFN_TEMPLATE =
		"drs:ExportSourceNetworkCfnTemplate";
	/** [Read] drs:GetAgentCommandForDrs */
	static readonly GET_AGENT_COMMAND_FOR_DRS = "drs:GetAgentCommandForDrs";
	/** [Read] drs:GetAgentConfirmedResumeInfoForDrs */
	static readonly GET_AGENT_CONFIRMED_RESUME_INFO_FOR_DRS =
		"drs:GetAgentConfirmedResumeInfoForDrs";
	/** [Read] drs:GetAgentInstallationAssetsForDrs */
	static readonly GET_AGENT_INSTALLATION_ASSETS_FOR_DRS =
		"drs:GetAgentInstallationAssetsForDrs";
	/** [Read] drs:GetAgentReplicationInfoForDrs */
	static readonly GET_AGENT_REPLICATION_INFO_FOR_DRS =
		"drs:GetAgentReplicationInfoForDrs";
	/** [Read] drs:GetAgentRuntimeConfigurationForDrs */
	static readonly GET_AGENT_RUNTIME_CONFIGURATION_FOR_DRS =
		"drs:GetAgentRuntimeConfigurationForDrs";
	/** [Read] drs:GetAgentSnapshotCreditsForDrs */
	static readonly GET_AGENT_SNAPSHOT_CREDITS_FOR_DRS =
		"drs:GetAgentSnapshotCreditsForDrs";
	/** [Read] drs:GetChannelCommandsForDrs */
	static readonly GET_CHANNEL_COMMANDS_FOR_DRS = "drs:GetChannelCommandsForDrs";
	/** [Read] drs:GetFailbackCommandForDrs */
	static readonly GET_FAILBACK_COMMAND_FOR_DRS = "drs:GetFailbackCommandForDrs";
	/** [Read] drs:GetFailbackLaunchRequestedForDrs */
	static readonly GET_FAILBACK_LAUNCH_REQUESTED_FOR_DRS =
		"drs:GetFailbackLaunchRequestedForDrs";
	/** [Read] drs:GetFailbackReplicationConfiguration */
	static readonly GET_FAILBACK_REPLICATION_CONFIGURATION =
		"drs:GetFailbackReplicationConfiguration";
	/** [Read] drs:GetLaunchConfiguration */
	static readonly GET_LAUNCH_CONFIGURATION = "drs:GetLaunchConfiguration";
	/** [Read] drs:GetReplicationConfiguration */
	static readonly GET_REPLICATION_CONFIGURATION =
		"drs:GetReplicationConfiguration";
	/** [Read] drs:GetSuggestedFailbackClientDeviceMappingForDrs */
	static readonly GET_SUGGESTED_FAILBACK_CLIENT_DEVICE_MAPPING_FOR_DRS =
		"drs:GetSuggestedFailbackClientDeviceMappingForDrs";
	/** [Write] drs:InitializeService */
	static readonly INITIALIZE_SERVICE = "drs:InitializeService";
	/** [Write] drs:IssueAgentCertificateForDrs */
	static readonly ISSUE_AGENT_CERTIFICATE_FOR_DRS =
		"drs:IssueAgentCertificateForDrs";
	/** [Read] drs:ListExtensibleSourceServers */
	static readonly LIST_EXTENSIBLE_SOURCE_SERVERS =
		"drs:ListExtensibleSourceServers";
	/** [Read] drs:ListLaunchActions */
	static readonly LIST_LAUNCH_ACTIONS = "drs:ListLaunchActions";
	/** [Read] drs:ListStagingAccounts */
	static readonly LIST_STAGING_ACCOUNTS = "drs:ListStagingAccounts";
	/** [Read] drs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "drs:ListTagsForResource";
	/** [Write] drs:NotifyAgentAuthenticationForDrs */
	static readonly NOTIFY_AGENT_AUTHENTICATION_FOR_DRS =
		"drs:NotifyAgentAuthenticationForDrs";
	/** [Write] drs:NotifyAgentConnectedForDrs */
	static readonly NOTIFY_AGENT_CONNECTED_FOR_DRS =
		"drs:NotifyAgentConnectedForDrs";
	/** [Write] drs:NotifyAgentDisconnectedForDrs */
	static readonly NOTIFY_AGENT_DISCONNECTED_FOR_DRS =
		"drs:NotifyAgentDisconnectedForDrs";
	/** [Write] drs:NotifyAgentReplicationProgressForDrs */
	static readonly NOTIFY_AGENT_REPLICATION_PROGRESS_FOR_DRS =
		"drs:NotifyAgentReplicationProgressForDrs";
	/** [Write] drs:NotifyConsistencyAttainedForDrs */
	static readonly NOTIFY_CONSISTENCY_ATTAINED_FOR_DRS =
		"drs:NotifyConsistencyAttainedForDrs";
	/** [Write] drs:NotifyReplicationServerAuthenticationForDrs */
	static readonly NOTIFY_REPLICATION_SERVER_AUTHENTICATION_FOR_DRS =
		"drs:NotifyReplicationServerAuthenticationForDrs";
	/** [Write] drs:NotifyVolumeEventForDrs */
	static readonly NOTIFY_VOLUME_EVENT_FOR_DRS = "drs:NotifyVolumeEventForDrs";
	/** [Write] drs:PutLaunchAction */
	static readonly PUT_LAUNCH_ACTION = "drs:PutLaunchAction";
	/** [Write] drs:RetryDataReplication */
	static readonly RETRY_DATA_REPLICATION = "drs:RetryDataReplication";
	/** [Write] drs:ReverseReplication */
	static readonly REVERSE_REPLICATION = "drs:ReverseReplication";
	/** [Write] drs:SendAgentLogsForDrs */
	static readonly SEND_AGENT_LOGS_FOR_DRS = "drs:SendAgentLogsForDrs";
	/** [Write] drs:SendAgentMetricsForDrs */
	static readonly SEND_AGENT_METRICS_FOR_DRS = "drs:SendAgentMetricsForDrs";
	/** [Write] drs:SendChannelCommandResultForDrs */
	static readonly SEND_CHANNEL_COMMAND_RESULT_FOR_DRS =
		"drs:SendChannelCommandResultForDrs";
	/** [Write] drs:SendClientLogsForDrs */
	static readonly SEND_CLIENT_LOGS_FOR_DRS = "drs:SendClientLogsForDrs";
	/** [Write] drs:SendClientMetricsForDrs */
	static readonly SEND_CLIENT_METRICS_FOR_DRS = "drs:SendClientMetricsForDrs";
	/** [Write] drs:SendVolumeStatsForDrs */
	static readonly SEND_VOLUME_STATS_FOR_DRS = "drs:SendVolumeStatsForDrs";
	/** [Write] drs:StartFailbackLaunch */
	static readonly START_FAILBACK_LAUNCH = "drs:StartFailbackLaunch";
	/** [Write] drs:StartRecovery */
	static readonly START_RECOVERY = "drs:StartRecovery";
	/** [Write] drs:StartReplication */
	static readonly START_REPLICATION = "drs:StartReplication";
	/** [Write] drs:StartSourceNetworkRecovery */
	static readonly START_SOURCE_NETWORK_RECOVERY =
		"drs:StartSourceNetworkRecovery";
	/** [Write] drs:StartSourceNetworkReplication */
	static readonly START_SOURCE_NETWORK_REPLICATION =
		"drs:StartSourceNetworkReplication";
	/** [Write] drs:StopFailback */
	static readonly STOP_FAILBACK = "drs:StopFailback";
	/** [Write] drs:StopReplication */
	static readonly STOP_REPLICATION = "drs:StopReplication";
	/** [Write] drs:StopSourceNetworkReplication */
	static readonly STOP_SOURCE_NETWORK_REPLICATION =
		"drs:StopSourceNetworkReplication";
	/** [Tagging] drs:TagResource */
	static readonly TAG_RESOURCE = "drs:TagResource";
	/** [Write] drs:TerminateRecoveryInstances */
	static readonly TERMINATE_RECOVERY_INSTANCES =
		"drs:TerminateRecoveryInstances";
	/** [Tagging] drs:UntagResource */
	static readonly UNTAG_RESOURCE = "drs:UntagResource";
	/** [Write] drs:UpdateAgentBacklogForDrs */
	static readonly UPDATE_AGENT_BACKLOG_FOR_DRS = "drs:UpdateAgentBacklogForDrs";
	/** [Write] drs:UpdateAgentConversionInfoForDrs */
	static readonly UPDATE_AGENT_CONVERSION_INFO_FOR_DRS =
		"drs:UpdateAgentConversionInfoForDrs";
	/** [Write] drs:UpdateAgentReplicationInfoForDrs */
	static readonly UPDATE_AGENT_REPLICATION_INFO_FOR_DRS =
		"drs:UpdateAgentReplicationInfoForDrs";
	/** [Write] drs:UpdateAgentReplicationProcessStateForDrs */
	static readonly UPDATE_AGENT_REPLICATION_PROCESS_STATE_FOR_DRS =
		"drs:UpdateAgentReplicationProcessStateForDrs";
	/** [Write] drs:UpdateAgentSourcePropertiesForDrs */
	static readonly UPDATE_AGENT_SOURCE_PROPERTIES_FOR_DRS =
		"drs:UpdateAgentSourcePropertiesForDrs";
	/** [Write] drs:UpdateFailbackClientDeviceMappingForDrs */
	static readonly UPDATE_FAILBACK_CLIENT_DEVICE_MAPPING_FOR_DRS =
		"drs:UpdateFailbackClientDeviceMappingForDrs";
	/** [Write] drs:UpdateFailbackClientLastSeenForDrs */
	static readonly UPDATE_FAILBACK_CLIENT_LAST_SEEN_FOR_DRS =
		"drs:UpdateFailbackClientLastSeenForDrs";
	/** [Write] drs:UpdateFailbackReplicationConfiguration */
	static readonly UPDATE_FAILBACK_REPLICATION_CONFIGURATION =
		"drs:UpdateFailbackReplicationConfiguration";
	/** [Write] drs:UpdateLaunchConfiguration */
	static readonly UPDATE_LAUNCH_CONFIGURATION = "drs:UpdateLaunchConfiguration";
	/** [Write] drs:UpdateLaunchConfigurationTemplate */
	static readonly UPDATE_LAUNCH_CONFIGURATION_TEMPLATE =
		"drs:UpdateLaunchConfigurationTemplate";
	/** [Write] drs:UpdateReplicationCertificateForDrs */
	static readonly UPDATE_REPLICATION_CERTIFICATE_FOR_DRS =
		"drs:UpdateReplicationCertificateForDrs";
	/** [Write] drs:UpdateReplicationConfiguration */
	static readonly UPDATE_REPLICATION_CONFIGURATION =
		"drs:UpdateReplicationConfiguration";
	/** [Write] drs:UpdateReplicationConfigurationTemplate */
	static readonly UPDATE_REPLICATION_CONFIGURATION_TEMPLATE =
		"drs:UpdateReplicationConfigurationTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DRSActions.DESCRIBE_JOB_LOG_ITEMS,
		DRSActions.DESCRIBE_JOBS,
		DRSActions.DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES,
		DRSActions.DESCRIBE_RECOVERY_INSTANCES,
		DRSActions.DESCRIBE_RECOVERY_SNAPSHOTS,
		DRSActions.DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES,
		DRSActions.DESCRIBE_REPLICATION_SERVER_ASSOCIATIONS_FOR_DRS,
		DRSActions.DESCRIBE_SNAPSHOT_REQUESTS_FOR_DRS,
		DRSActions.DESCRIBE_SOURCE_NETWORKS,
		DRSActions.DESCRIBE_SOURCE_SERVERS,
		DRSActions.GET_AGENT_COMMAND_FOR_DRS,
		DRSActions.GET_AGENT_CONFIRMED_RESUME_INFO_FOR_DRS,
		DRSActions.GET_AGENT_INSTALLATION_ASSETS_FOR_DRS,
		DRSActions.GET_AGENT_REPLICATION_INFO_FOR_DRS,
		DRSActions.GET_AGENT_RUNTIME_CONFIGURATION_FOR_DRS,
		DRSActions.GET_AGENT_SNAPSHOT_CREDITS_FOR_DRS,
		DRSActions.GET_CHANNEL_COMMANDS_FOR_DRS,
		DRSActions.GET_FAILBACK_COMMAND_FOR_DRS,
		DRSActions.GET_FAILBACK_LAUNCH_REQUESTED_FOR_DRS,
		DRSActions.GET_FAILBACK_REPLICATION_CONFIGURATION,
		DRSActions.GET_LAUNCH_CONFIGURATION,
		DRSActions.GET_REPLICATION_CONFIGURATION,
		DRSActions.GET_SUGGESTED_FAILBACK_CLIENT_DEVICE_MAPPING_FOR_DRS,
		DRSActions.LIST_EXTENSIBLE_SOURCE_SERVERS,
		DRSActions.LIST_LAUNCH_ACTIONS,
		DRSActions.LIST_STAGING_ACCOUNTS,
		DRSActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DRSActions.ASSOCIATE_FAILBACK_CLIENT_TO_RECOVERY_INSTANCE_FOR_DRS,
		DRSActions.ASSOCIATE_SOURCE_NETWORK_STACK,
		DRSActions.BATCH_CREATE_VOLUME_SNAPSHOT_GROUP_FOR_DRS,
		DRSActions.BATCH_DELETE_SNAPSHOT_REQUEST_FOR_DRS,
		DRSActions.CREATE_CONVERTED_SNAPSHOT_FOR_DRS,
		DRSActions.CREATE_EXTENDED_SOURCE_SERVER,
		DRSActions.CREATE_LAUNCH_CONFIGURATION_TEMPLATE,
		DRSActions.CREATE_RECOVERY_INSTANCE_FOR_DRS,
		DRSActions.CREATE_REPLICATION_CONFIGURATION_TEMPLATE,
		DRSActions.CREATE_SOURCE_NETWORK,
		DRSActions.CREATE_SOURCE_SERVER_FOR_DRS,
		DRSActions.DELETE_JOB,
		DRSActions.DELETE_LAUNCH_ACTION,
		DRSActions.DELETE_LAUNCH_CONFIGURATION_TEMPLATE,
		DRSActions.DELETE_RECOVERY_INSTANCE,
		DRSActions.DELETE_REPLICATION_CONFIGURATION_TEMPLATE,
		DRSActions.DELETE_SOURCE_NETWORK,
		DRSActions.DELETE_SOURCE_SERVER,
		DRSActions.DISCONNECT_RECOVERY_INSTANCE,
		DRSActions.DISCONNECT_SOURCE_SERVER,
		DRSActions.EXPORT_SOURCE_NETWORK_CFN_TEMPLATE,
		DRSActions.INITIALIZE_SERVICE,
		DRSActions.ISSUE_AGENT_CERTIFICATE_FOR_DRS,
		DRSActions.NOTIFY_AGENT_AUTHENTICATION_FOR_DRS,
		DRSActions.NOTIFY_AGENT_CONNECTED_FOR_DRS,
		DRSActions.NOTIFY_AGENT_DISCONNECTED_FOR_DRS,
		DRSActions.NOTIFY_AGENT_REPLICATION_PROGRESS_FOR_DRS,
		DRSActions.NOTIFY_CONSISTENCY_ATTAINED_FOR_DRS,
		DRSActions.NOTIFY_REPLICATION_SERVER_AUTHENTICATION_FOR_DRS,
		DRSActions.NOTIFY_VOLUME_EVENT_FOR_DRS,
		DRSActions.PUT_LAUNCH_ACTION,
		DRSActions.RETRY_DATA_REPLICATION,
		DRSActions.REVERSE_REPLICATION,
		DRSActions.SEND_AGENT_LOGS_FOR_DRS,
		DRSActions.SEND_AGENT_METRICS_FOR_DRS,
		DRSActions.SEND_CHANNEL_COMMAND_RESULT_FOR_DRS,
		DRSActions.SEND_CLIENT_LOGS_FOR_DRS,
		DRSActions.SEND_CLIENT_METRICS_FOR_DRS,
		DRSActions.SEND_VOLUME_STATS_FOR_DRS,
		DRSActions.START_FAILBACK_LAUNCH,
		DRSActions.START_RECOVERY,
		DRSActions.START_REPLICATION,
		DRSActions.START_SOURCE_NETWORK_RECOVERY,
		DRSActions.START_SOURCE_NETWORK_REPLICATION,
		DRSActions.STOP_FAILBACK,
		DRSActions.STOP_REPLICATION,
		DRSActions.STOP_SOURCE_NETWORK_REPLICATION,
		DRSActions.TERMINATE_RECOVERY_INSTANCES,
		DRSActions.UPDATE_AGENT_BACKLOG_FOR_DRS,
		DRSActions.UPDATE_AGENT_CONVERSION_INFO_FOR_DRS,
		DRSActions.UPDATE_AGENT_REPLICATION_INFO_FOR_DRS,
		DRSActions.UPDATE_AGENT_REPLICATION_PROCESS_STATE_FOR_DRS,
		DRSActions.UPDATE_AGENT_SOURCE_PROPERTIES_FOR_DRS,
		DRSActions.UPDATE_FAILBACK_CLIENT_DEVICE_MAPPING_FOR_DRS,
		DRSActions.UPDATE_FAILBACK_CLIENT_LAST_SEEN_FOR_DRS,
		DRSActions.UPDATE_FAILBACK_REPLICATION_CONFIGURATION,
		DRSActions.UPDATE_LAUNCH_CONFIGURATION,
		DRSActions.UPDATE_LAUNCH_CONFIGURATION_TEMPLATE,
		DRSActions.UPDATE_REPLICATION_CERTIFICATE_FOR_DRS,
		DRSActions.UPDATE_REPLICATION_CONFIGURATION,
		DRSActions.UPDATE_REPLICATION_CONFIGURATION_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DRSActions.TAG_RESOURCE,
		DRSActions.UNTAG_RESOURCE,
	];
}

const JobResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const LaunchConfigurationTemplateResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):launch-configuration-template/(?<launchConfigurationTemplateId>[^:/?]+)$",
);
const RecoveryInstanceResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):recovery-instance/(?<recoveryInstanceId>[^:/?]+)$",
);
const ReplicationConfigurationTemplateResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):replication-configuration-template/(?<replicationConfigurationTemplateId>[^:/?]+)$",
);
const SourceNetworkResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):source-network/(?<sourceNetworkId>[^:/?]+)$",
);
const SourceServerResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):source-server/(?<sourceServerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for drs resources.
 */
export class DRSResources {
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
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
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
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:launch-configuration-template/${props.launchConfigurationTemplateId}`;
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
	 * Builds an ARN for the RecoveryInstanceResource resource.
	 */
	static recoveryInstanceResource(props: {
		/** The RecoveryInstanceID component of the ARN. */
		readonly recoveryInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:recovery-instance/${props.recoveryInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RecoveryInstanceResource resource.
	 */
	static isValidRecoveryInstanceResourceArn(arn: string): boolean {
		return RecoveryInstanceResourceArnRegex.test(arn);
	}

	/**
	 * Parses a RecoveryInstanceResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecoveryInstanceResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		recoveryInstanceId: string;
	} {
		const match = RecoveryInstanceResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RecoveryInstanceResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recoveryInstanceId: match.groups!.recoveryInstanceId,
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
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:replication-configuration-template/${props.replicationConfigurationTemplateId}`;
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
	 * Builds an ARN for the SourceNetworkResource resource.
	 */
	static sourceNetworkResource(props: {
		/** The SourceNetworkID component of the ARN. */
		readonly sourceNetworkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:source-network/${props.sourceNetworkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SourceNetworkResource resource.
	 */
	static isValidSourceNetworkResourceArn(arn: string): boolean {
		return SourceNetworkResourceArnRegex.test(arn);
	}

	/**
	 * Parses a SourceNetworkResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceNetworkResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceNetworkId: string;
	} {
		const match = SourceNetworkResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SourceNetworkResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceNetworkId: match.groups!.sourceNetworkId,
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
		return `arn:${props.partition ?? "aws"}:drs:${props.region ?? "*"}:${props.account ?? "*"}:source-server/${props.sourceServerId}`;
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
}

/**
 * API operation to required IAM actions mapping for drs.
 */
export class DRSOperations {
	/** IAM actions required for the AssociateSourceNetworkStack API call. */
	static readonly ASSOCIATE_SOURCE_NETWORK_STACK: string[] = [
		"drs:AssociateSourceNetworkStack",
	];
	/** IAM actions required for the CreateExtendedSourceServer API call. */
	static readonly CREATE_EXTENDED_SOURCE_SERVER: string[] = [
		"drs:CreateExtendedSourceServer",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateLaunchConfigurationTemplate API call. */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"drs:CreateLaunchConfigurationTemplate",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateReplicationConfigurationTemplate API call. */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"drs:CreateReplicationConfigurationTemplate",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateSourceNetwork API call. */
	static readonly CREATE_SOURCE_NETWORK: string[] = [
		"drs:CreateSourceNetwork",
		"drs:TagResource",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["drs:DeleteJob"];
	/** IAM actions required for the DeleteLaunchAction API call. */
	static readonly DELETE_LAUNCH_ACTION: string[] = ["drs:DeleteLaunchAction"];
	/** IAM actions required for the DeleteLaunchConfigurationTemplate API call. */
	static readonly DELETE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"drs:DeleteLaunchConfigurationTemplate",
	];
	/** IAM actions required for the DeleteRecoveryInstance API call. */
	static readonly DELETE_RECOVERY_INSTANCE: string[] = [
		"drs:DeleteRecoveryInstance",
	];
	/** IAM actions required for the DeleteReplicationConfigurationTemplate API call. */
	static readonly DELETE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"drs:DeleteReplicationConfigurationTemplate",
	];
	/** IAM actions required for the DeleteSourceNetwork API call. */
	static readonly DELETE_SOURCE_NETWORK: string[] = ["drs:DeleteSourceNetwork"];
	/** IAM actions required for the DeleteSourceServer API call. */
	static readonly DELETE_SOURCE_SERVER: string[] = ["drs:DeleteSourceServer"];
	/** IAM actions required for the DescribeJobLogItems API call. */
	static readonly DESCRIBE_JOB_LOG_ITEMS: string[] = [
		"drs:DescribeJobLogItems",
	];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DESCRIBE_JOBS: string[] = ["drs:DescribeJobs"];
	/** IAM actions required for the DescribeLaunchConfigurationTemplates API call. */
	static readonly DESCRIBE_LAUNCH_CONFIGURATION_TEMPLATES: string[] = [
		"drs:DescribeLaunchConfigurationTemplates",
	];
	/** IAM actions required for the DescribeRecoveryInstances API call. */
	static readonly DESCRIBE_RECOVERY_INSTANCES: string[] = [
		"drs:DescribeRecoveryInstances",
	];
	/** IAM actions required for the DescribeRecoverySnapshots API call. */
	static readonly DESCRIBE_RECOVERY_SNAPSHOTS: string[] = [
		"drs:DescribeRecoverySnapshots",
	];
	/** IAM actions required for the DescribeReplicationConfigurationTemplates API call. */
	static readonly DESCRIBE_REPLICATION_CONFIGURATION_TEMPLATES: string[] = [
		"drs:DescribeReplicationConfigurationTemplates",
	];
	/** IAM actions required for the DescribeSourceNetworks API call. */
	static readonly DESCRIBE_SOURCE_NETWORKS: string[] = [
		"drs:DescribeSourceNetworks",
	];
	/** IAM actions required for the DescribeSourceServers API call. */
	static readonly DESCRIBE_SOURCE_SERVERS: string[] = [
		"drs:DescribeSourceServers",
	];
	/** IAM actions required for the DisconnectRecoveryInstance API call. */
	static readonly DISCONNECT_RECOVERY_INSTANCE: string[] = [
		"drs:DisconnectRecoveryInstance",
	];
	/** IAM actions required for the DisconnectSourceServer API call. */
	static readonly DISCONNECT_SOURCE_SERVER: string[] = [
		"drs:DisconnectSourceServer",
	];
	/** IAM actions required for the ExportSourceNetworkCfnTemplate API call. */
	static readonly EXPORT_SOURCE_NETWORK_CFN_TEMPLATE: string[] = [
		"drs:ExportSourceNetworkCfnTemplate",
	];
	/** IAM actions required for the GetFailbackReplicationConfiguration API call. */
	static readonly GET_FAILBACK_REPLICATION_CONFIGURATION: string[] = [
		"drs:GetFailbackReplicationConfiguration",
	];
	/** IAM actions required for the GetLaunchConfiguration API call. */
	static readonly GET_LAUNCH_CONFIGURATION: string[] = [
		"drs:GetLaunchConfiguration",
	];
	/** IAM actions required for the GetReplicationConfiguration API call. */
	static readonly GET_REPLICATION_CONFIGURATION: string[] = [
		"drs:GetReplicationConfiguration",
	];
	/** IAM actions required for the InitializeService API call. */
	static readonly INITIALIZE_SERVICE: string[] = ["drs:InitializeService"];
	/** IAM actions required for the ListExtensibleSourceServers API call. */
	static readonly LIST_EXTENSIBLE_SOURCE_SERVERS: string[] = [
		"drs:ListExtensibleSourceServers",
	];
	/** IAM actions required for the ListLaunchActions API call. */
	static readonly LIST_LAUNCH_ACTIONS: string[] = ["drs:ListLaunchActions"];
	/** IAM actions required for the ListStagingAccounts API call. */
	static readonly LIST_STAGING_ACCOUNTS: string[] = ["drs:ListStagingAccounts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"drs:ListTagsForResource",
	];
	/** IAM actions required for the PutLaunchAction API call. */
	static readonly PUT_LAUNCH_ACTION: string[] = ["drs:PutLaunchAction"];
	/** IAM actions required for the RetryDataReplication API call. */
	static readonly RETRY_DATA_REPLICATION: string[] = [
		"drs:RetryDataReplication",
	];
	/** IAM actions required for the ReverseReplication API call. */
	static readonly REVERSE_REPLICATION: string[] = ["drs:ReverseReplication"];
	/** IAM actions required for the StartFailbackLaunch API call. */
	static readonly START_FAILBACK_LAUNCH: string[] = [];
	/** IAM actions required for the StartRecovery API call. */
	static readonly START_RECOVERY: string[] = [
		"drs:StartRecovery",
		"drs:TagResource",
	];
	/** IAM actions required for the StartReplication API call. */
	static readonly START_REPLICATION: string[] = ["drs:StartReplication"];
	/** IAM actions required for the StartSourceNetworkRecovery API call. */
	static readonly START_SOURCE_NETWORK_RECOVERY: string[] = [
		"drs:StartSourceNetworkRecovery",
		"drs:TagResource",
	];
	/** IAM actions required for the StartSourceNetworkReplication API call. */
	static readonly START_SOURCE_NETWORK_REPLICATION: string[] = [
		"drs:StartSourceNetworkReplication",
	];
	/** IAM actions required for the StopFailback API call. */
	static readonly STOP_FAILBACK: string[] = ["drs:StopFailback"];
	/** IAM actions required for the StopReplication API call. */
	static readonly STOP_REPLICATION: string[] = ["drs:StopReplication"];
	/** IAM actions required for the StopSourceNetworkReplication API call. */
	static readonly STOP_SOURCE_NETWORK_REPLICATION: string[] = [
		"drs:StopSourceNetworkReplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["drs:TagResource"];
	/** IAM actions required for the TerminateRecoveryInstances API call. */
	static readonly TERMINATE_RECOVERY_INSTANCES: string[] = [
		"drs:TerminateRecoveryInstances",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["drs:UntagResource"];
	/** IAM actions required for the UpdateFailbackReplicationConfiguration API call. */
	static readonly UPDATE_FAILBACK_REPLICATION_CONFIGURATION: string[] = [
		"drs:UpdateFailbackReplicationConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfiguration API call. */
	static readonly UPDATE_LAUNCH_CONFIGURATION: string[] = [
		"drs:UpdateLaunchConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfigurationTemplate API call. */
	static readonly UPDATE_LAUNCH_CONFIGURATION_TEMPLATE: string[] = [
		"drs:UpdateLaunchConfigurationTemplate",
	];
	/** IAM actions required for the UpdateReplicationConfiguration API call. */
	static readonly UPDATE_REPLICATION_CONFIGURATION: string[] = [
		"drs:UpdateReplicationConfiguration",
	];
	/** IAM actions required for the UpdateReplicationConfigurationTemplate API call. */
	static readonly UPDATE_REPLICATION_CONFIGURATION_TEMPLATE: string[] = [
		"drs:UpdateReplicationConfigurationTemplate",
	];
}

/**
 * Condition key constants and builders for drs.
 */
export class DRSConditions {
	/** Condition keys applicable to the AssociateSourceNetworkStack action. */
	static readonly ASSOCIATE_SOURCE_NETWORK_STACK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConvertedSnapshotForDrs action. */
	static readonly CREATE_CONVERTED_SNAPSHOT_FOR_DRS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtendedSourceServer action. */
	static readonly CREATE_EXTENDED_SOURCE_SERVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfigurationTemplate action. */
	static readonly CREATE_LAUNCH_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRecoveryInstanceForDrs action. */
	static readonly CREATE_RECOVERY_INSTANCE_FOR_DRS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReplicationConfigurationTemplate action. */
	static readonly CREATE_REPLICATION_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSourceNetwork action. */
	static readonly CREATE_SOURCE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSourceServerForDrs action. */
	static readonly CREATE_SOURCE_SERVER_FOR_DRS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExportSourceNetworkCfnTemplate action. */
	static readonly EXPORT_SOURCE_NETWORK_CFN_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the ReverseReplication action. */
	static readonly REVERSE_REPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartFailbackLaunch action. */
	static readonly START_FAILBACK_LAUNCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRecovery action. */
	static readonly START_RECOVERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSourceNetworkRecovery action. */
	static readonly START_SOURCE_NETWORK_RECOVERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"drs:CreateAction",
	];
	/** Condition keys applicable to the TerminateRecoveryInstances action. */
	static readonly TERMINATE_RECOVERY_INSTANCES_CONDITION_KEYS: string[] = [
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
	/** Condition key: drs:CreateAction (String) */
	static readonly CREATE_ACTION = "drs:CreateAction";
	/** Condition key: drs:EC2InstanceARN (ARN) */
	static readonly EC2_INSTANCE_ARN = "drs:EC2InstanceARN";

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
	 * Generates a condition block for `drs:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "drs:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `drs:EC2InstanceARN`.
	 */
	static ec2InstanceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "drs:EC2InstanceARN": value } };
	}
}
