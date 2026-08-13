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
	static readonly AssociateFailbackClientToRecoveryInstanceForDrs =
		"drs:AssociateFailbackClientToRecoveryInstanceForDrs";
	/** [Write] drs:AssociateSourceNetworkStack */
	static readonly AssociateSourceNetworkStack =
		"drs:AssociateSourceNetworkStack";
	/** [Write] drs:BatchCreateVolumeSnapshotGroupForDrs */
	static readonly BatchCreateVolumeSnapshotGroupForDrs =
		"drs:BatchCreateVolumeSnapshotGroupForDrs";
	/** [Write] drs:BatchDeleteSnapshotRequestForDrs */
	static readonly BatchDeleteSnapshotRequestForDrs =
		"drs:BatchDeleteSnapshotRequestForDrs";
	/** [Write] drs:CreateConvertedSnapshotForDrs */
	static readonly CreateConvertedSnapshotForDrs =
		"drs:CreateConvertedSnapshotForDrs";
	/** [Write] drs:CreateExtendedSourceServer */
	static readonly CreateExtendedSourceServer = "drs:CreateExtendedSourceServer";
	/** [Write] drs:CreateLaunchConfigurationTemplate */
	static readonly CreateLaunchConfigurationTemplate =
		"drs:CreateLaunchConfigurationTemplate";
	/** [Write] drs:CreateRecoveryInstanceForDrs */
	static readonly CreateRecoveryInstanceForDrs =
		"drs:CreateRecoveryInstanceForDrs";
	/** [Write] drs:CreateReplicationConfigurationTemplate */
	static readonly CreateReplicationConfigurationTemplate =
		"drs:CreateReplicationConfigurationTemplate";
	/** [Write] drs:CreateSourceNetwork */
	static readonly CreateSourceNetwork = "drs:CreateSourceNetwork";
	/** [Write] drs:CreateSourceServerForDrs */
	static readonly CreateSourceServerForDrs = "drs:CreateSourceServerForDrs";
	/** [Write] drs:DeleteJob */
	static readonly DeleteJob = "drs:DeleteJob";
	/** [Write] drs:DeleteLaunchAction */
	static readonly DeleteLaunchAction = "drs:DeleteLaunchAction";
	/** [Write] drs:DeleteLaunchConfigurationTemplate */
	static readonly DeleteLaunchConfigurationTemplate =
		"drs:DeleteLaunchConfigurationTemplate";
	/** [Write] drs:DeleteRecoveryInstance */
	static readonly DeleteRecoveryInstance = "drs:DeleteRecoveryInstance";
	/** [Write] drs:DeleteReplicationConfigurationTemplate */
	static readonly DeleteReplicationConfigurationTemplate =
		"drs:DeleteReplicationConfigurationTemplate";
	/** [Write] drs:DeleteSourceNetwork */
	static readonly DeleteSourceNetwork = "drs:DeleteSourceNetwork";
	/** [Write] drs:DeleteSourceServer */
	static readonly DeleteSourceServer = "drs:DeleteSourceServer";
	/** [Read] drs:DescribeJobLogItems */
	static readonly DescribeJobLogItems = "drs:DescribeJobLogItems";
	/** [Read] drs:DescribeJobs */
	static readonly DescribeJobs = "drs:DescribeJobs";
	/** [Read] drs:DescribeLaunchConfigurationTemplates */
	static readonly DescribeLaunchConfigurationTemplates =
		"drs:DescribeLaunchConfigurationTemplates";
	/** [Read] drs:DescribeRecoveryInstances */
	static readonly DescribeRecoveryInstances = "drs:DescribeRecoveryInstances";
	/** [Read] drs:DescribeRecoverySnapshots */
	static readonly DescribeRecoverySnapshots = "drs:DescribeRecoverySnapshots";
	/** [Read] drs:DescribeReplicationConfigurationTemplates */
	static readonly DescribeReplicationConfigurationTemplates =
		"drs:DescribeReplicationConfigurationTemplates";
	/** [Read] drs:DescribeReplicationServerAssociationsForDrs */
	static readonly DescribeReplicationServerAssociationsForDrs =
		"drs:DescribeReplicationServerAssociationsForDrs";
	/** [Read] drs:DescribeSnapshotRequestsForDrs */
	static readonly DescribeSnapshotRequestsForDrs =
		"drs:DescribeSnapshotRequestsForDrs";
	/** [Read] drs:DescribeSourceNetworks */
	static readonly DescribeSourceNetworks = "drs:DescribeSourceNetworks";
	/** [Read] drs:DescribeSourceServers */
	static readonly DescribeSourceServers = "drs:DescribeSourceServers";
	/** [Write] drs:DisconnectRecoveryInstance */
	static readonly DisconnectRecoveryInstance = "drs:DisconnectRecoveryInstance";
	/** [Write] drs:DisconnectSourceServer */
	static readonly DisconnectSourceServer = "drs:DisconnectSourceServer";
	/** [Write] drs:ExportSourceNetworkCfnTemplate */
	static readonly ExportSourceNetworkCfnTemplate =
		"drs:ExportSourceNetworkCfnTemplate";
	/** [Read] drs:GetAgentCommandForDrs */
	static readonly actionGetAgentCommandForDrs = "drs:GetAgentCommandForDrs";
	/** [Read] drs:GetAgentConfirmedResumeInfoForDrs */
	static readonly actionGetAgentConfirmedResumeInfoForDrs =
		"drs:GetAgentConfirmedResumeInfoForDrs";
	/** [Read] drs:GetAgentInstallationAssetsForDrs */
	static readonly actionGetAgentInstallationAssetsForDrs =
		"drs:GetAgentInstallationAssetsForDrs";
	/** [Read] drs:GetAgentReplicationInfoForDrs */
	static readonly actionGetAgentReplicationInfoForDrs =
		"drs:GetAgentReplicationInfoForDrs";
	/** [Read] drs:GetAgentRuntimeConfigurationForDrs */
	static readonly actionGetAgentRuntimeConfigurationForDrs =
		"drs:GetAgentRuntimeConfigurationForDrs";
	/** [Read] drs:GetAgentSnapshotCreditsForDrs */
	static readonly actionGetAgentSnapshotCreditsForDrs =
		"drs:GetAgentSnapshotCreditsForDrs";
	/** [Read] drs:GetChannelCommandsForDrs */
	static readonly actionGetChannelCommandsForDrs =
		"drs:GetChannelCommandsForDrs";
	/** [Read] drs:GetFailbackCommandForDrs */
	static readonly actionGetFailbackCommandForDrs =
		"drs:GetFailbackCommandForDrs";
	/** [Read] drs:GetFailbackLaunchRequestedForDrs */
	static readonly actionGetFailbackLaunchRequestedForDrs =
		"drs:GetFailbackLaunchRequestedForDrs";
	/** [Read] drs:GetFailbackReplicationConfiguration */
	static readonly actionGetFailbackReplicationConfiguration =
		"drs:GetFailbackReplicationConfiguration";
	/** [Read] drs:GetLaunchConfiguration */
	static readonly actionGetLaunchConfiguration = "drs:GetLaunchConfiguration";
	/** [Read] drs:GetReplicationConfiguration */
	static readonly actionGetReplicationConfiguration =
		"drs:GetReplicationConfiguration";
	/** [Read] drs:GetSuggestedFailbackClientDeviceMappingForDrs */
	static readonly actionGetSuggestedFailbackClientDeviceMappingForDrs =
		"drs:GetSuggestedFailbackClientDeviceMappingForDrs";
	/** [Write] drs:InitializeService */
	static readonly InitializeService = "drs:InitializeService";
	/** [Write] drs:IssueAgentCertificateForDrs */
	static readonly IssueAgentCertificateForDrs =
		"drs:IssueAgentCertificateForDrs";
	/** [Read] drs:ListExtensibleSourceServers */
	static readonly ListExtensibleSourceServers =
		"drs:ListExtensibleSourceServers";
	/** [Read] drs:ListLaunchActions */
	static readonly ListLaunchActions = "drs:ListLaunchActions";
	/** [Read] drs:ListStagingAccounts */
	static readonly ListStagingAccounts = "drs:ListStagingAccounts";
	/** [Read] drs:ListTagsForResource */
	static readonly ListTagsForResource = "drs:ListTagsForResource";
	/** [Write] drs:NotifyAgentAuthenticationForDrs */
	static readonly NotifyAgentAuthenticationForDrs =
		"drs:NotifyAgentAuthenticationForDrs";
	/** [Write] drs:NotifyAgentConnectedForDrs */
	static readonly NotifyAgentConnectedForDrs = "drs:NotifyAgentConnectedForDrs";
	/** [Write] drs:NotifyAgentDisconnectedForDrs */
	static readonly NotifyAgentDisconnectedForDrs =
		"drs:NotifyAgentDisconnectedForDrs";
	/** [Write] drs:NotifyAgentReplicationProgressForDrs */
	static readonly NotifyAgentReplicationProgressForDrs =
		"drs:NotifyAgentReplicationProgressForDrs";
	/** [Write] drs:NotifyConsistencyAttainedForDrs */
	static readonly NotifyConsistencyAttainedForDrs =
		"drs:NotifyConsistencyAttainedForDrs";
	/** [Write] drs:NotifyReplicationServerAuthenticationForDrs */
	static readonly NotifyReplicationServerAuthenticationForDrs =
		"drs:NotifyReplicationServerAuthenticationForDrs";
	/** [Write] drs:NotifyVolumeEventForDrs */
	static readonly NotifyVolumeEventForDrs = "drs:NotifyVolumeEventForDrs";
	/** [Write] drs:PutLaunchAction */
	static readonly PutLaunchAction = "drs:PutLaunchAction";
	/** [Write] drs:RetryDataReplication */
	static readonly RetryDataReplication = "drs:RetryDataReplication";
	/** [Write] drs:ReverseReplication */
	static readonly ReverseReplication = "drs:ReverseReplication";
	/** [Write] drs:SendAgentLogsForDrs */
	static readonly SendAgentLogsForDrs = "drs:SendAgentLogsForDrs";
	/** [Write] drs:SendAgentMetricsForDrs */
	static readonly SendAgentMetricsForDrs = "drs:SendAgentMetricsForDrs";
	/** [Write] drs:SendChannelCommandResultForDrs */
	static readonly SendChannelCommandResultForDrs =
		"drs:SendChannelCommandResultForDrs";
	/** [Write] drs:SendClientLogsForDrs */
	static readonly SendClientLogsForDrs = "drs:SendClientLogsForDrs";
	/** [Write] drs:SendClientMetricsForDrs */
	static readonly SendClientMetricsForDrs = "drs:SendClientMetricsForDrs";
	/** [Write] drs:SendVolumeStatsForDrs */
	static readonly SendVolumeStatsForDrs = "drs:SendVolumeStatsForDrs";
	/** [Write] drs:StartFailbackLaunch */
	static readonly StartFailbackLaunch = "drs:StartFailbackLaunch";
	/** [Write] drs:StartRecovery */
	static readonly StartRecovery = "drs:StartRecovery";
	/** [Write] drs:StartReplication */
	static readonly StartReplication = "drs:StartReplication";
	/** [Write] drs:StartSourceNetworkRecovery */
	static readonly StartSourceNetworkRecovery = "drs:StartSourceNetworkRecovery";
	/** [Write] drs:StartSourceNetworkReplication */
	static readonly StartSourceNetworkReplication =
		"drs:StartSourceNetworkReplication";
	/** [Write] drs:StopFailback */
	static readonly StopFailback = "drs:StopFailback";
	/** [Write] drs:StopReplication */
	static readonly StopReplication = "drs:StopReplication";
	/** [Write] drs:StopSourceNetworkReplication */
	static readonly StopSourceNetworkReplication =
		"drs:StopSourceNetworkReplication";
	/** [Tagging] drs:TagResource */
	static readonly TagResource = "drs:TagResource";
	/** [Write] drs:TerminateRecoveryInstances */
	static readonly TerminateRecoveryInstances = "drs:TerminateRecoveryInstances";
	/** [Tagging] drs:UntagResource */
	static readonly UntagResource = "drs:UntagResource";
	/** [Write] drs:UpdateAgentBacklogForDrs */
	static readonly UpdateAgentBacklogForDrs = "drs:UpdateAgentBacklogForDrs";
	/** [Write] drs:UpdateAgentConversionInfoForDrs */
	static readonly UpdateAgentConversionInfoForDrs =
		"drs:UpdateAgentConversionInfoForDrs";
	/** [Write] drs:UpdateAgentReplicationInfoForDrs */
	static readonly UpdateAgentReplicationInfoForDrs =
		"drs:UpdateAgentReplicationInfoForDrs";
	/** [Write] drs:UpdateAgentReplicationProcessStateForDrs */
	static readonly UpdateAgentReplicationProcessStateForDrs =
		"drs:UpdateAgentReplicationProcessStateForDrs";
	/** [Write] drs:UpdateAgentSourcePropertiesForDrs */
	static readonly UpdateAgentSourcePropertiesForDrs =
		"drs:UpdateAgentSourcePropertiesForDrs";
	/** [Write] drs:UpdateFailbackClientDeviceMappingForDrs */
	static readonly UpdateFailbackClientDeviceMappingForDrs =
		"drs:UpdateFailbackClientDeviceMappingForDrs";
	/** [Write] drs:UpdateFailbackClientLastSeenForDrs */
	static readonly UpdateFailbackClientLastSeenForDrs =
		"drs:UpdateFailbackClientLastSeenForDrs";
	/** [Write] drs:UpdateFailbackReplicationConfiguration */
	static readonly UpdateFailbackReplicationConfiguration =
		"drs:UpdateFailbackReplicationConfiguration";
	/** [Write] drs:UpdateLaunchConfiguration */
	static readonly UpdateLaunchConfiguration = "drs:UpdateLaunchConfiguration";
	/** [Write] drs:UpdateLaunchConfigurationTemplate */
	static readonly UpdateLaunchConfigurationTemplate =
		"drs:UpdateLaunchConfigurationTemplate";
	/** [Write] drs:UpdateReplicationCertificateForDrs */
	static readonly UpdateReplicationCertificateForDrs =
		"drs:UpdateReplicationCertificateForDrs";
	/** [Write] drs:UpdateReplicationConfiguration */
	static readonly UpdateReplicationConfiguration =
		"drs:UpdateReplicationConfiguration";
	/** [Write] drs:UpdateReplicationConfigurationTemplate */
	static readonly UpdateReplicationConfigurationTemplate =
		"drs:UpdateReplicationConfigurationTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DRSActions.DescribeJobLogItems,
		DRSActions.DescribeJobs,
		DRSActions.DescribeLaunchConfigurationTemplates,
		DRSActions.DescribeRecoveryInstances,
		DRSActions.DescribeRecoverySnapshots,
		DRSActions.DescribeReplicationConfigurationTemplates,
		DRSActions.DescribeReplicationServerAssociationsForDrs,
		DRSActions.DescribeSnapshotRequestsForDrs,
		DRSActions.DescribeSourceNetworks,
		DRSActions.DescribeSourceServers,
		DRSActions.actionGetAgentCommandForDrs,
		DRSActions.actionGetAgentConfirmedResumeInfoForDrs,
		DRSActions.actionGetAgentInstallationAssetsForDrs,
		DRSActions.actionGetAgentReplicationInfoForDrs,
		DRSActions.actionGetAgentRuntimeConfigurationForDrs,
		DRSActions.actionGetAgentSnapshotCreditsForDrs,
		DRSActions.actionGetChannelCommandsForDrs,
		DRSActions.actionGetFailbackCommandForDrs,
		DRSActions.actionGetFailbackLaunchRequestedForDrs,
		DRSActions.actionGetFailbackReplicationConfiguration,
		DRSActions.actionGetLaunchConfiguration,
		DRSActions.actionGetReplicationConfiguration,
		DRSActions.actionGetSuggestedFailbackClientDeviceMappingForDrs,
		DRSActions.ListExtensibleSourceServers,
		DRSActions.ListLaunchActions,
		DRSActions.ListStagingAccounts,
		DRSActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DRSActions.AssociateFailbackClientToRecoveryInstanceForDrs,
		DRSActions.AssociateSourceNetworkStack,
		DRSActions.BatchCreateVolumeSnapshotGroupForDrs,
		DRSActions.BatchDeleteSnapshotRequestForDrs,
		DRSActions.CreateConvertedSnapshotForDrs,
		DRSActions.CreateExtendedSourceServer,
		DRSActions.CreateLaunchConfigurationTemplate,
		DRSActions.CreateRecoveryInstanceForDrs,
		DRSActions.CreateReplicationConfigurationTemplate,
		DRSActions.CreateSourceNetwork,
		DRSActions.CreateSourceServerForDrs,
		DRSActions.DeleteJob,
		DRSActions.DeleteLaunchAction,
		DRSActions.DeleteLaunchConfigurationTemplate,
		DRSActions.DeleteRecoveryInstance,
		DRSActions.DeleteReplicationConfigurationTemplate,
		DRSActions.DeleteSourceNetwork,
		DRSActions.DeleteSourceServer,
		DRSActions.DisconnectRecoveryInstance,
		DRSActions.DisconnectSourceServer,
		DRSActions.ExportSourceNetworkCfnTemplate,
		DRSActions.InitializeService,
		DRSActions.IssueAgentCertificateForDrs,
		DRSActions.NotifyAgentAuthenticationForDrs,
		DRSActions.NotifyAgentConnectedForDrs,
		DRSActions.NotifyAgentDisconnectedForDrs,
		DRSActions.NotifyAgentReplicationProgressForDrs,
		DRSActions.NotifyConsistencyAttainedForDrs,
		DRSActions.NotifyReplicationServerAuthenticationForDrs,
		DRSActions.NotifyVolumeEventForDrs,
		DRSActions.PutLaunchAction,
		DRSActions.RetryDataReplication,
		DRSActions.ReverseReplication,
		DRSActions.SendAgentLogsForDrs,
		DRSActions.SendAgentMetricsForDrs,
		DRSActions.SendChannelCommandResultForDrs,
		DRSActions.SendClientLogsForDrs,
		DRSActions.SendClientMetricsForDrs,
		DRSActions.SendVolumeStatsForDrs,
		DRSActions.StartFailbackLaunch,
		DRSActions.StartRecovery,
		DRSActions.StartReplication,
		DRSActions.StartSourceNetworkRecovery,
		DRSActions.StartSourceNetworkReplication,
		DRSActions.StopFailback,
		DRSActions.StopReplication,
		DRSActions.StopSourceNetworkReplication,
		DRSActions.TerminateRecoveryInstances,
		DRSActions.UpdateAgentBacklogForDrs,
		DRSActions.UpdateAgentConversionInfoForDrs,
		DRSActions.UpdateAgentReplicationInfoForDrs,
		DRSActions.UpdateAgentReplicationProcessStateForDrs,
		DRSActions.UpdateAgentSourcePropertiesForDrs,
		DRSActions.UpdateFailbackClientDeviceMappingForDrs,
		DRSActions.UpdateFailbackClientLastSeenForDrs,
		DRSActions.UpdateFailbackReplicationConfiguration,
		DRSActions.UpdateLaunchConfiguration,
		DRSActions.UpdateLaunchConfigurationTemplate,
		DRSActions.UpdateReplicationCertificateForDrs,
		DRSActions.UpdateReplicationConfiguration,
		DRSActions.UpdateReplicationConfigurationTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DRSActions.TagResource,
		DRSActions.UntagResource,
	];
}

/**
 * Properties for building a JobResource ARN.
 */
export interface DRSJobResourceArnProps {
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
export interface DRSJobResourceArnComponents {
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
export interface DRSLaunchConfigurationTemplateResourceArnProps {
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
export interface DRSLaunchConfigurationTemplateResourceArnComponents {
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
 * Properties for building a RecoveryInstanceResource ARN.
 */
export interface DRSRecoveryInstanceResourceArnProps {
	/** The RecoveryInstanceID component of the ARN. */
	readonly recoveryInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RecoveryInstanceResource ARN.
 */
export interface DRSRecoveryInstanceResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RecoveryInstanceID component. */
	readonly recoveryInstanceId: string;
}

/**
 * Properties for building a ReplicationConfigurationTemplateResource ARN.
 */
export interface DRSReplicationConfigurationTemplateResourceArnProps {
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
export interface DRSReplicationConfigurationTemplateResourceArnComponents {
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
 * Properties for building a SourceNetworkResource ARN.
 */
export interface DRSSourceNetworkResourceArnProps {
	/** The SourceNetworkID component of the ARN. */
	readonly sourceNetworkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SourceNetworkResource ARN.
 */
export interface DRSSourceNetworkResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceNetworkID component. */
	readonly sourceNetworkId: string;
}

/**
 * Properties for building a SourceServerResource ARN.
 */
export interface DRSSourceServerResourceArnProps {
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
export interface DRSSourceServerResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceServerID component. */
	readonly sourceServerId: string;
}

const JobResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const LaunchConfigurationTemplateResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):launch-configuration-template\/(?<launchConfigurationTemplateId>[^:/?]+)$/;
const RecoveryInstanceResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):recovery-instance\/(?<recoveryInstanceId>[^:/?]+)$/;
const ReplicationConfigurationTemplateResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):replication-configuration-template\/(?<replicationConfigurationTemplateId>[^:/?]+)$/;
const SourceNetworkResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):source-network\/(?<sourceNetworkId>[^:/?]+)$/;
const SourceServerResourceArnRegex =
	/^arn:(?<partition>[^:]+):drs:(?<region>[^:]*):(?<account>[^:]*):source-server\/(?<sourceServerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for drs resources.
 */
export class DRSResources {
	/**
	 * Builds an ARN for the JobResource resource.
	 */
	static jobResource(props: DRSJobResourceArnProps): string {
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
	static parseJobResourceArn(arn: string): DRSJobResourceArnComponents {
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
		props: DRSLaunchConfigurationTemplateResourceArnProps,
	): string {
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
	static parseLaunchConfigurationTemplateResourceArn(
		arn: string,
	): DRSLaunchConfigurationTemplateResourceArnComponents {
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
	static recoveryInstanceResource(
		props: DRSRecoveryInstanceResourceArnProps,
	): string {
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
	static parseRecoveryInstanceResourceArn(
		arn: string,
	): DRSRecoveryInstanceResourceArnComponents {
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
	static replicationConfigurationTemplateResource(
		props: DRSReplicationConfigurationTemplateResourceArnProps,
	): string {
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
	static parseReplicationConfigurationTemplateResourceArn(
		arn: string,
	): DRSReplicationConfigurationTemplateResourceArnComponents {
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
	static sourceNetworkResource(
		props: DRSSourceNetworkResourceArnProps,
	): string {
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
	static parseSourceNetworkResourceArn(
		arn: string,
	): DRSSourceNetworkResourceArnComponents {
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
	static sourceServerResource(props: DRSSourceServerResourceArnProps): string {
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
	static parseSourceServerResourceArn(
		arn: string,
	): DRSSourceServerResourceArnComponents {
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
	static readonly AssociateSourceNetworkStack: string[] = [
		"drs:AssociateSourceNetworkStack",
	];
	/** IAM actions required for the CreateExtendedSourceServer API call. */
	static readonly CreateExtendedSourceServer: string[] = [
		"drs:CreateExtendedSourceServer",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateLaunchConfigurationTemplate API call. */
	static readonly CreateLaunchConfigurationTemplate: string[] = [
		"drs:CreateLaunchConfigurationTemplate",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateReplicationConfigurationTemplate API call. */
	static readonly CreateReplicationConfigurationTemplate: string[] = [
		"drs:CreateReplicationConfigurationTemplate",
		"drs:TagResource",
	];
	/** IAM actions required for the CreateSourceNetwork API call. */
	static readonly CreateSourceNetwork: string[] = [
		"drs:CreateSourceNetwork",
		"drs:TagResource",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["drs:DeleteJob"];
	/** IAM actions required for the DeleteLaunchAction API call. */
	static readonly DeleteLaunchAction: string[] = ["drs:DeleteLaunchAction"];
	/** IAM actions required for the DeleteLaunchConfigurationTemplate API call. */
	static readonly DeleteLaunchConfigurationTemplate: string[] = [
		"drs:DeleteLaunchConfigurationTemplate",
	];
	/** IAM actions required for the DeleteRecoveryInstance API call. */
	static readonly DeleteRecoveryInstance: string[] = [
		"drs:DeleteRecoveryInstance",
	];
	/** IAM actions required for the DeleteReplicationConfigurationTemplate API call. */
	static readonly DeleteReplicationConfigurationTemplate: string[] = [
		"drs:DeleteReplicationConfigurationTemplate",
	];
	/** IAM actions required for the DeleteSourceNetwork API call. */
	static readonly DeleteSourceNetwork: string[] = ["drs:DeleteSourceNetwork"];
	/** IAM actions required for the DeleteSourceServer API call. */
	static readonly DeleteSourceServer: string[] = ["drs:DeleteSourceServer"];
	/** IAM actions required for the DescribeJobLogItems API call. */
	static readonly DescribeJobLogItems: string[] = ["drs:DescribeJobLogItems"];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DescribeJobs: string[] = ["drs:DescribeJobs"];
	/** IAM actions required for the DescribeLaunchConfigurationTemplates API call. */
	static readonly DescribeLaunchConfigurationTemplates: string[] = [
		"drs:DescribeLaunchConfigurationTemplates",
	];
	/** IAM actions required for the DescribeRecoveryInstances API call. */
	static readonly DescribeRecoveryInstances: string[] = [
		"drs:DescribeRecoveryInstances",
	];
	/** IAM actions required for the DescribeRecoverySnapshots API call. */
	static readonly DescribeRecoverySnapshots: string[] = [
		"drs:DescribeRecoverySnapshots",
	];
	/** IAM actions required for the DescribeReplicationConfigurationTemplates API call. */
	static readonly DescribeReplicationConfigurationTemplates: string[] = [
		"drs:DescribeReplicationConfigurationTemplates",
	];
	/** IAM actions required for the DescribeSourceNetworks API call. */
	static readonly DescribeSourceNetworks: string[] = [
		"drs:DescribeSourceNetworks",
	];
	/** IAM actions required for the DescribeSourceServers API call. */
	static readonly DescribeSourceServers: string[] = [
		"drs:DescribeSourceServers",
	];
	/** IAM actions required for the DisconnectRecoveryInstance API call. */
	static readonly DisconnectRecoveryInstance: string[] = [
		"drs:DisconnectRecoveryInstance",
	];
	/** IAM actions required for the DisconnectSourceServer API call. */
	static readonly DisconnectSourceServer: string[] = [
		"drs:DisconnectSourceServer",
	];
	/** IAM actions required for the ExportSourceNetworkCfnTemplate API call. */
	static readonly ExportSourceNetworkCfnTemplate: string[] = [
		"drs:ExportSourceNetworkCfnTemplate",
	];
	/** IAM actions required for the GetFailbackReplicationConfiguration API call. */
	static readonly opGetFailbackReplicationConfiguration: string[] = [
		"drs:GetFailbackReplicationConfiguration",
	];
	/** IAM actions required for the GetLaunchConfiguration API call. */
	static readonly opGetLaunchConfiguration: string[] = [
		"drs:GetLaunchConfiguration",
	];
	/** IAM actions required for the GetReplicationConfiguration API call. */
	static readonly opGetReplicationConfiguration: string[] = [
		"drs:GetReplicationConfiguration",
	];
	/** IAM actions required for the InitializeService API call. */
	static readonly InitializeService: string[] = ["drs:InitializeService"];
	/** IAM actions required for the ListExtensibleSourceServers API call. */
	static readonly ListExtensibleSourceServers: string[] = [
		"drs:ListExtensibleSourceServers",
	];
	/** IAM actions required for the ListLaunchActions API call. */
	static readonly ListLaunchActions: string[] = ["drs:ListLaunchActions"];
	/** IAM actions required for the ListStagingAccounts API call. */
	static readonly ListStagingAccounts: string[] = ["drs:ListStagingAccounts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["drs:ListTagsForResource"];
	/** IAM actions required for the PutLaunchAction API call. */
	static readonly PutLaunchAction: string[] = ["drs:PutLaunchAction"];
	/** IAM actions required for the RetryDataReplication API call. */
	static readonly RetryDataReplication: string[] = ["drs:RetryDataReplication"];
	/** IAM actions required for the ReverseReplication API call. */
	static readonly ReverseReplication: string[] = ["drs:ReverseReplication"];
	/** IAM actions required for the StartFailbackLaunch API call. */
	static readonly StartFailbackLaunch: string[] = [];
	/** IAM actions required for the StartRecovery API call. */
	static readonly StartRecovery: string[] = [
		"drs:StartRecovery",
		"drs:TagResource",
	];
	/** IAM actions required for the StartReplication API call. */
	static readonly StartReplication: string[] = ["drs:StartReplication"];
	/** IAM actions required for the StartSourceNetworkRecovery API call. */
	static readonly StartSourceNetworkRecovery: string[] = [
		"drs:StartSourceNetworkRecovery",
		"drs:TagResource",
	];
	/** IAM actions required for the StartSourceNetworkReplication API call. */
	static readonly StartSourceNetworkReplication: string[] = [
		"drs:StartSourceNetworkReplication",
	];
	/** IAM actions required for the StopFailback API call. */
	static readonly StopFailback: string[] = ["drs:StopFailback"];
	/** IAM actions required for the StopReplication API call. */
	static readonly StopReplication: string[] = ["drs:StopReplication"];
	/** IAM actions required for the StopSourceNetworkReplication API call. */
	static readonly StopSourceNetworkReplication: string[] = [
		"drs:StopSourceNetworkReplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["drs:TagResource"];
	/** IAM actions required for the TerminateRecoveryInstances API call. */
	static readonly TerminateRecoveryInstances: string[] = [
		"drs:TerminateRecoveryInstances",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["drs:UntagResource"];
	/** IAM actions required for the UpdateFailbackReplicationConfiguration API call. */
	static readonly UpdateFailbackReplicationConfiguration: string[] = [
		"drs:UpdateFailbackReplicationConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfiguration API call. */
	static readonly UpdateLaunchConfiguration: string[] = [
		"drs:UpdateLaunchConfiguration",
	];
	/** IAM actions required for the UpdateLaunchConfigurationTemplate API call. */
	static readonly UpdateLaunchConfigurationTemplate: string[] = [
		"drs:UpdateLaunchConfigurationTemplate",
	];
	/** IAM actions required for the UpdateReplicationConfiguration API call. */
	static readonly UpdateReplicationConfiguration: string[] = [
		"drs:UpdateReplicationConfiguration",
	];
	/** IAM actions required for the UpdateReplicationConfigurationTemplate API call. */
	static readonly UpdateReplicationConfigurationTemplate: string[] = [
		"drs:UpdateReplicationConfigurationTemplate",
	];
}

/**
 * Condition key constants and builders for drs.
 */
export class DRSConditions {
	/** Condition keys applicable to the AssociateSourceNetworkStack action. */
	static readonly AssociateSourceNetworkStackConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConvertedSnapshotForDrs action. */
	static readonly CreateConvertedSnapshotForDrsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtendedSourceServer action. */
	static readonly CreateExtendedSourceServerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfigurationTemplate action. */
	static readonly CreateLaunchConfigurationTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecoveryInstanceForDrs action. */
	static readonly CreateRecoveryInstanceForDrsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReplicationConfigurationTemplate action. */
	static readonly CreateReplicationConfigurationTemplateConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSourceNetwork action. */
	static readonly CreateSourceNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSourceServerForDrs action. */
	static readonly CreateSourceServerForDrsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExportSourceNetworkCfnTemplate action. */
	static readonly ExportSourceNetworkCfnTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ReverseReplication action. */
	static readonly ReverseReplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartFailbackLaunch action. */
	static readonly StartFailbackLaunchConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRecovery action. */
	static readonly StartRecoveryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSourceNetworkRecovery action. */
	static readonly StartSourceNetworkRecoveryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"drs:CreateAction",
	];
	/** Condition keys applicable to the TerminateRecoveryInstances action. */
	static readonly TerminateRecoveryInstancesConditionKeys: string[] = [
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
