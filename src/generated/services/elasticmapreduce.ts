// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elasticmapreduce.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elasticmapreduce service.
 */
export class ElasticmapreduceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elasticmapreduce";

	/** [Write] elasticmapreduce:AccessAllEventLogs */
	static readonly AccessAllEventLogs = "elasticmapreduce:AccessAllEventLogs";
	/** [Write] elasticmapreduce:AddInstanceFleet */
	static readonly AddInstanceFleet = "elasticmapreduce:AddInstanceFleet";
	/** [Write] elasticmapreduce:AddInstanceGroups */
	static readonly AddInstanceGroups = "elasticmapreduce:AddInstanceGroups";
	/** [Write] elasticmapreduce:AddJobFlowSteps */
	static readonly AddJobFlowSteps = "elasticmapreduce:AddJobFlowSteps";
	/** [Tagging] elasticmapreduce:AddTags */
	static readonly AddTags = "elasticmapreduce:AddTags";
	/** [Write] elasticmapreduce:AttachEditor */
	static readonly AttachEditor = "elasticmapreduce:AttachEditor";
	/** [Write] elasticmapreduce:CancelSteps */
	static readonly CancelSteps = "elasticmapreduce:CancelSteps";
	/** [Write] elasticmapreduce:CreateEditor */
	static readonly CreateEditor = "elasticmapreduce:CreateEditor";
	/** [Write] elasticmapreduce:CreatePersistentAppUI */
	static readonly CreatePersistentAppUI =
		"elasticmapreduce:CreatePersistentAppUI";
	/** [Write] elasticmapreduce:CreateRepository */
	static readonly CreateRepository = "elasticmapreduce:CreateRepository";
	/** [Write] elasticmapreduce:CreateSecurityConfiguration */
	static readonly CreateSecurityConfiguration =
		"elasticmapreduce:CreateSecurityConfiguration";
	/** [Write] elasticmapreduce:CreateStudio */
	static readonly CreateStudio = "elasticmapreduce:CreateStudio";
	/** [Write] elasticmapreduce:CreateStudioPresignedUrl */
	static readonly CreateStudioPresignedUrl =
		"elasticmapreduce:CreateStudioPresignedUrl";
	/** [Write] elasticmapreduce:CreateStudioSessionMapping */
	static readonly CreateStudioSessionMapping =
		"elasticmapreduce:CreateStudioSessionMapping";
	/** [Write] elasticmapreduce:DeleteEditor */
	static readonly DeleteEditor = "elasticmapreduce:DeleteEditor";
	/** [Write] elasticmapreduce:DeleteRepository */
	static readonly DeleteRepository = "elasticmapreduce:DeleteRepository";
	/** [Write] elasticmapreduce:DeleteSecurityConfiguration */
	static readonly DeleteSecurityConfiguration =
		"elasticmapreduce:DeleteSecurityConfiguration";
	/** [Write] elasticmapreduce:DeleteStudio */
	static readonly DeleteStudio = "elasticmapreduce:DeleteStudio";
	/** [Write] elasticmapreduce:DeleteStudioSessionMapping */
	static readonly DeleteStudioSessionMapping =
		"elasticmapreduce:DeleteStudioSessionMapping";
	/** [PermissionManagement] elasticmapreduce:DeleteWorkspaceAccess */
	static readonly DeleteWorkspaceAccess =
		"elasticmapreduce:DeleteWorkspaceAccess";
	/** [Read] elasticmapreduce:DescribeCluster */
	static readonly DescribeCluster = "elasticmapreduce:DescribeCluster";
	/** [Read] elasticmapreduce:DescribeEditor */
	static readonly DescribeEditor = "elasticmapreduce:DescribeEditor";
	/** [Read] elasticmapreduce:DescribeJobFlows */
	static readonly DescribeJobFlows = "elasticmapreduce:DescribeJobFlows";
	/** [Read] elasticmapreduce:DescribeNotebookExecution */
	static readonly DescribeNotebookExecution =
		"elasticmapreduce:DescribeNotebookExecution";
	/** [Read] elasticmapreduce:DescribePersistentAppUI */
	static readonly DescribePersistentAppUI =
		"elasticmapreduce:DescribePersistentAppUI";
	/** [Read] elasticmapreduce:DescribeReleaseLabel */
	static readonly DescribeReleaseLabel =
		"elasticmapreduce:DescribeReleaseLabel";
	/** [Read] elasticmapreduce:DescribeRepository */
	static readonly DescribeRepository = "elasticmapreduce:DescribeRepository";
	/** [Read] elasticmapreduce:DescribeSecurityConfiguration */
	static readonly DescribeSecurityConfiguration =
		"elasticmapreduce:DescribeSecurityConfiguration";
	/** [Read] elasticmapreduce:DescribeStep */
	static readonly DescribeStep = "elasticmapreduce:DescribeStep";
	/** [Read] elasticmapreduce:DescribeStudio */
	static readonly DescribeStudio = "elasticmapreduce:DescribeStudio";
	/** [Write] elasticmapreduce:DetachEditor */
	static readonly DetachEditor = "elasticmapreduce:DetachEditor";
	/** [Read] elasticmapreduce:GetAutoTerminationPolicy */
	static readonly actionGetAutoTerminationPolicy =
		"elasticmapreduce:GetAutoTerminationPolicy";
	/** [Read] elasticmapreduce:GetBlockPublicAccessConfiguration */
	static readonly actionGetBlockPublicAccessConfiguration =
		"elasticmapreduce:GetBlockPublicAccessConfiguration";
	/** [Write] elasticmapreduce:GetClusterSessionCredentials */
	static readonly actionGetClusterSessionCredentials =
		"elasticmapreduce:GetClusterSessionCredentials";
	/** [Read] elasticmapreduce:GetManagedScalingPolicy */
	static readonly actionGetManagedScalingPolicy =
		"elasticmapreduce:GetManagedScalingPolicy";
	/** [Write] elasticmapreduce:GetOnClusterAppUIPresignedURL */
	static readonly actionGetOnClusterAppUIPresignedURL =
		"elasticmapreduce:GetOnClusterAppUIPresignedURL";
	/** [Write] elasticmapreduce:GetPersistentAppUIPresignedURL */
	static readonly actionGetPersistentAppUIPresignedURL =
		"elasticmapreduce:GetPersistentAppUIPresignedURL";
	/** [Read] elasticmapreduce:GetSession */
	static readonly actionGetSession = "elasticmapreduce:GetSession";
	/** [Write] elasticmapreduce:GetSessionEndpoint */
	static readonly actionGetSessionEndpoint =
		"elasticmapreduce:GetSessionEndpoint";
	/** [Read] elasticmapreduce:GetStudioSessionMapping */
	static readonly actionGetStudioSessionMapping =
		"elasticmapreduce:GetStudioSessionMapping";
	/** [Write] elasticmapreduce:LinkRepository */
	static readonly LinkRepository = "elasticmapreduce:LinkRepository";
	/** [Read] elasticmapreduce:ListBootstrapActions */
	static readonly ListBootstrapActions =
		"elasticmapreduce:ListBootstrapActions";
	/** [List] elasticmapreduce:ListClusters */
	static readonly ListClusters = "elasticmapreduce:ListClusters";
	/** [List] elasticmapreduce:ListEditors */
	static readonly ListEditors = "elasticmapreduce:ListEditors";
	/** [Read] elasticmapreduce:ListInstanceFleets */
	static readonly ListInstanceFleets = "elasticmapreduce:ListInstanceFleets";
	/** [Read] elasticmapreduce:ListInstanceGroups */
	static readonly ListInstanceGroups = "elasticmapreduce:ListInstanceGroups";
	/** [Read] elasticmapreduce:ListInstances */
	static readonly ListInstances = "elasticmapreduce:ListInstances";
	/** [List] elasticmapreduce:ListNotebookExecutions */
	static readonly ListNotebookExecutions =
		"elasticmapreduce:ListNotebookExecutions";
	/** [List] elasticmapreduce:ListReleaseLabels */
	static readonly ListReleaseLabels = "elasticmapreduce:ListReleaseLabels";
	/** [List] elasticmapreduce:ListRepositories */
	static readonly ListRepositories = "elasticmapreduce:ListRepositories";
	/** [List] elasticmapreduce:ListSecurityConfigurations */
	static readonly ListSecurityConfigurations =
		"elasticmapreduce:ListSecurityConfigurations";
	/** [List] elasticmapreduce:ListSessions */
	static readonly ListSessions = "elasticmapreduce:ListSessions";
	/** [Read] elasticmapreduce:ListSteps */
	static readonly ListSteps = "elasticmapreduce:ListSteps";
	/** [List] elasticmapreduce:ListStudioSessionMappings */
	static readonly ListStudioSessionMappings =
		"elasticmapreduce:ListStudioSessionMappings";
	/** [List] elasticmapreduce:ListStudios */
	static readonly ListStudios = "elasticmapreduce:ListStudios";
	/** [List] elasticmapreduce:ListSupportedInstanceTypes */
	static readonly ListSupportedInstanceTypes =
		"elasticmapreduce:ListSupportedInstanceTypes";
	/** [List] elasticmapreduce:ListWorkspaceAccessIdentities */
	static readonly ListWorkspaceAccessIdentities =
		"elasticmapreduce:ListWorkspaceAccessIdentities";
	/** [Write] elasticmapreduce:ModifyCluster */
	static readonly ModifyCluster = "elasticmapreduce:ModifyCluster";
	/** [Write] elasticmapreduce:ModifyInstanceFleet */
	static readonly ModifyInstanceFleet = "elasticmapreduce:ModifyInstanceFleet";
	/** [Write] elasticmapreduce:ModifyInstanceGroups */
	static readonly ModifyInstanceGroups =
		"elasticmapreduce:ModifyInstanceGroups";
	/** [Write] elasticmapreduce:OpenEditorInConsole */
	static readonly OpenEditorInConsole = "elasticmapreduce:OpenEditorInConsole";
	/** [Write] elasticmapreduce:PutAutoScalingPolicy */
	static readonly PutAutoScalingPolicy =
		"elasticmapreduce:PutAutoScalingPolicy";
	/** [Write] elasticmapreduce:PutAutoTerminationPolicy */
	static readonly PutAutoTerminationPolicy =
		"elasticmapreduce:PutAutoTerminationPolicy";
	/** [PermissionManagement] elasticmapreduce:PutBlockPublicAccessConfiguration */
	static readonly PutBlockPublicAccessConfiguration =
		"elasticmapreduce:PutBlockPublicAccessConfiguration";
	/** [Write] elasticmapreduce:PutManagedScalingPolicy */
	static readonly PutManagedScalingPolicy =
		"elasticmapreduce:PutManagedScalingPolicy";
	/** [PermissionManagement] elasticmapreduce:PutWorkspaceAccess */
	static readonly PutWorkspaceAccess = "elasticmapreduce:PutWorkspaceAccess";
	/** [Write] elasticmapreduce:RemoveAutoScalingPolicy */
	static readonly RemoveAutoScalingPolicy =
		"elasticmapreduce:RemoveAutoScalingPolicy";
	/** [Write] elasticmapreduce:RemoveAutoTerminationPolicy */
	static readonly RemoveAutoTerminationPolicy =
		"elasticmapreduce:RemoveAutoTerminationPolicy";
	/** [Write] elasticmapreduce:RemoveManagedScalingPolicy */
	static readonly RemoveManagedScalingPolicy =
		"elasticmapreduce:RemoveManagedScalingPolicy";
	/** [Tagging] elasticmapreduce:RemoveTags */
	static readonly RemoveTags = "elasticmapreduce:RemoveTags";
	/** [Write] elasticmapreduce:RunJobFlow */
	static readonly RunJobFlow = "elasticmapreduce:RunJobFlow";
	/** [Write] elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps */
	static readonly actionSetKeepJobFlowAliveWhenNoSteps =
		"elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps";
	/** [Write] elasticmapreduce:SetTerminationProtection */
	static readonly actionSetTerminationProtection =
		"elasticmapreduce:SetTerminationProtection";
	/** [Write] elasticmapreduce:SetUnhealthyNodeReplacement */
	static readonly actionSetUnhealthyNodeReplacement =
		"elasticmapreduce:SetUnhealthyNodeReplacement";
	/** [Write] elasticmapreduce:SetVisibleToAllUsers */
	static readonly actionSetVisibleToAllUsers =
		"elasticmapreduce:SetVisibleToAllUsers";
	/** [Write] elasticmapreduce:StartEditor */
	static readonly StartEditor = "elasticmapreduce:StartEditor";
	/** [Write] elasticmapreduce:StartNotebookExecution */
	static readonly StartNotebookExecution =
		"elasticmapreduce:StartNotebookExecution";
	/** [Write] elasticmapreduce:StartSession */
	static readonly StartSession = "elasticmapreduce:StartSession";
	/** [Write] elasticmapreduce:StopEditor */
	static readonly StopEditor = "elasticmapreduce:StopEditor";
	/** [Write] elasticmapreduce:StopNotebookExecution */
	static readonly StopNotebookExecution =
		"elasticmapreduce:StopNotebookExecution";
	/** [Write] elasticmapreduce:TerminateJobFlows */
	static readonly TerminateJobFlows = "elasticmapreduce:TerminateJobFlows";
	/** [Write] elasticmapreduce:TerminateSession */
	static readonly TerminateSession = "elasticmapreduce:TerminateSession";
	/** [Write] elasticmapreduce:UnlinkRepository */
	static readonly UnlinkRepository = "elasticmapreduce:UnlinkRepository";
	/** [Write] elasticmapreduce:UpdateEditor */
	static readonly UpdateEditor = "elasticmapreduce:UpdateEditor";
	/** [Write] elasticmapreduce:UpdateRepository */
	static readonly UpdateRepository = "elasticmapreduce:UpdateRepository";
	/** [Write] elasticmapreduce:UpdateStudio */
	static readonly UpdateStudio = "elasticmapreduce:UpdateStudio";
	/** [Write] elasticmapreduce:UpdateStudioSessionMapping */
	static readonly UpdateStudioSessionMapping =
		"elasticmapreduce:UpdateStudioSessionMapping";
	/** [List] elasticmapreduce:ViewEventsFromAllClustersInConsole */
	static readonly ViewEventsFromAllClustersInConsole =
		"elasticmapreduce:ViewEventsFromAllClustersInConsole";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElasticmapreduceActions.DescribeCluster,
		ElasticmapreduceActions.DescribeEditor,
		ElasticmapreduceActions.DescribeJobFlows,
		ElasticmapreduceActions.DescribeNotebookExecution,
		ElasticmapreduceActions.DescribePersistentAppUI,
		ElasticmapreduceActions.DescribeReleaseLabel,
		ElasticmapreduceActions.DescribeRepository,
		ElasticmapreduceActions.DescribeSecurityConfiguration,
		ElasticmapreduceActions.DescribeStep,
		ElasticmapreduceActions.DescribeStudio,
		ElasticmapreduceActions.actionGetAutoTerminationPolicy,
		ElasticmapreduceActions.actionGetBlockPublicAccessConfiguration,
		ElasticmapreduceActions.actionGetManagedScalingPolicy,
		ElasticmapreduceActions.actionGetSession,
		ElasticmapreduceActions.actionGetStudioSessionMapping,
		ElasticmapreduceActions.ListBootstrapActions,
		ElasticmapreduceActions.ListInstanceFleets,
		ElasticmapreduceActions.ListInstanceGroups,
		ElasticmapreduceActions.ListInstances,
		ElasticmapreduceActions.ListSteps,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElasticmapreduceActions.AccessAllEventLogs,
		ElasticmapreduceActions.AddInstanceFleet,
		ElasticmapreduceActions.AddInstanceGroups,
		ElasticmapreduceActions.AddJobFlowSteps,
		ElasticmapreduceActions.AttachEditor,
		ElasticmapreduceActions.CancelSteps,
		ElasticmapreduceActions.CreateEditor,
		ElasticmapreduceActions.CreatePersistentAppUI,
		ElasticmapreduceActions.CreateRepository,
		ElasticmapreduceActions.CreateSecurityConfiguration,
		ElasticmapreduceActions.CreateStudio,
		ElasticmapreduceActions.CreateStudioPresignedUrl,
		ElasticmapreduceActions.CreateStudioSessionMapping,
		ElasticmapreduceActions.DeleteEditor,
		ElasticmapreduceActions.DeleteRepository,
		ElasticmapreduceActions.DeleteSecurityConfiguration,
		ElasticmapreduceActions.DeleteStudio,
		ElasticmapreduceActions.DeleteStudioSessionMapping,
		ElasticmapreduceActions.DetachEditor,
		ElasticmapreduceActions.actionGetClusterSessionCredentials,
		ElasticmapreduceActions.actionGetOnClusterAppUIPresignedURL,
		ElasticmapreduceActions.actionGetPersistentAppUIPresignedURL,
		ElasticmapreduceActions.actionGetSessionEndpoint,
		ElasticmapreduceActions.LinkRepository,
		ElasticmapreduceActions.ModifyCluster,
		ElasticmapreduceActions.ModifyInstanceFleet,
		ElasticmapreduceActions.ModifyInstanceGroups,
		ElasticmapreduceActions.OpenEditorInConsole,
		ElasticmapreduceActions.PutAutoScalingPolicy,
		ElasticmapreduceActions.PutAutoTerminationPolicy,
		ElasticmapreduceActions.PutManagedScalingPolicy,
		ElasticmapreduceActions.RemoveAutoScalingPolicy,
		ElasticmapreduceActions.RemoveAutoTerminationPolicy,
		ElasticmapreduceActions.RemoveManagedScalingPolicy,
		ElasticmapreduceActions.RunJobFlow,
		ElasticmapreduceActions.actionSetKeepJobFlowAliveWhenNoSteps,
		ElasticmapreduceActions.actionSetTerminationProtection,
		ElasticmapreduceActions.actionSetUnhealthyNodeReplacement,
		ElasticmapreduceActions.actionSetVisibleToAllUsers,
		ElasticmapreduceActions.StartEditor,
		ElasticmapreduceActions.StartNotebookExecution,
		ElasticmapreduceActions.StartSession,
		ElasticmapreduceActions.StopEditor,
		ElasticmapreduceActions.StopNotebookExecution,
		ElasticmapreduceActions.TerminateJobFlows,
		ElasticmapreduceActions.TerminateSession,
		ElasticmapreduceActions.UnlinkRepository,
		ElasticmapreduceActions.UpdateEditor,
		ElasticmapreduceActions.UpdateRepository,
		ElasticmapreduceActions.UpdateStudio,
		ElasticmapreduceActions.UpdateStudioSessionMapping,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElasticmapreduceActions.ListClusters,
		ElasticmapreduceActions.ListEditors,
		ElasticmapreduceActions.ListNotebookExecutions,
		ElasticmapreduceActions.ListReleaseLabels,
		ElasticmapreduceActions.ListRepositories,
		ElasticmapreduceActions.ListSecurityConfigurations,
		ElasticmapreduceActions.ListSessions,
		ElasticmapreduceActions.ListStudioSessionMappings,
		ElasticmapreduceActions.ListStudios,
		ElasticmapreduceActions.ListSupportedInstanceTypes,
		ElasticmapreduceActions.ListWorkspaceAccessIdentities,
		ElasticmapreduceActions.ViewEventsFromAllClustersInConsole,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ElasticmapreduceActions.DeleteWorkspaceAccess,
		ElasticmapreduceActions.PutBlockPublicAccessConfiguration,
		ElasticmapreduceActions.PutWorkspaceAccess,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElasticmapreduceActions.AddTags,
		ElasticmapreduceActions.RemoveTags,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface ElasticmapreduceClusterArnProps {
	/** The ClusterId component of the ARN. */
	readonly clusterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface ElasticmapreduceClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterId component. */
	readonly clusterId: string;
}

/**
 * Properties for building a editor ARN.
 */
export interface ElasticmapreduceEditorArnProps {
	/** The EditorId component of the ARN. */
	readonly editorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a editor ARN.
 */
export interface ElasticmapreduceEditorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EditorId component. */
	readonly editorId: string;
}

/**
 * Properties for building a notebook-execution ARN.
 */
export interface ElasticmapreduceNotebookExecutionArnProps {
	/** The NotebookExecutionId component of the ARN. */
	readonly notebookExecutionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notebook-execution ARN.
 */
export interface ElasticmapreduceNotebookExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotebookExecutionId component. */
	readonly notebookExecutionId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface ElasticmapreduceSessionArnProps {
	/** The ClusterId component of the ARN. */
	readonly clusterId: string;
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface ElasticmapreduceSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterId component. */
	readonly clusterId: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

/**
 * Properties for building a studio ARN.
 */
export interface ElasticmapreduceStudioArnProps {
	/** The StudioId component of the ARN. */
	readonly studioId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a studio ARN.
 */
export interface ElasticmapreduceStudioArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StudioId component. */
	readonly studioId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterId>[^:/?]+)$/;
const EditorArnRegex =
	/^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):editor\/(?<editorId>[^:/?]+)$/;
const NotebookExecutionArnRegex =
	/^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):notebook-execution\/(?<notebookExecutionId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterId>[^:/?]+)\/session\/(?<sessionId>[^:/?]+)$/;
const StudioArnRegex =
	/^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):studio\/(?<studioId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elasticmapreduce resources.
 */
export class ElasticmapreduceResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: ElasticmapreduceClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticmapreduce:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): ElasticmapreduceClusterArnComponents {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
		};
	}

	/**
	 * Builds an ARN for the editor resource.
	 */
	static editor(props: ElasticmapreduceEditorArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticmapreduce:${props.region ?? "*"}:${props.account ?? "*"}:editor/${props.editorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the editor resource.
	 */
	static isValidEditorArn(arn: string): boolean {
		return EditorArnRegex.test(arn);
	}

	/**
	 * Parses a editor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEditorArn(arn: string): ElasticmapreduceEditorArnComponents {
		const match = EditorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid editor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			editorId: match.groups!.editorId,
		};
	}

	/**
	 * Builds an ARN for the notebook-execution resource.
	 */
	static notebookExecution(
		props: ElasticmapreduceNotebookExecutionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:elasticmapreduce:${props.region ?? "*"}:${props.account ?? "*"}:notebook-execution/${props.notebookExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notebook-execution resource.
	 */
	static isValidNotebookExecutionArn(arn: string): boolean {
		return NotebookExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a notebook-execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotebookExecutionArn(
		arn: string,
	): ElasticmapreduceNotebookExecutionArnComponents {
		const match = NotebookExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notebook-execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notebookExecutionId: match.groups!.notebookExecutionId,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: ElasticmapreduceSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticmapreduce:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterId}/session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): ElasticmapreduceSessionArnComponents {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
			sessionId: match.groups!.sessionId,
		};
	}

	/**
	 * Builds an ARN for the studio resource.
	 */
	static studio(props: ElasticmapreduceStudioArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticmapreduce:${props.region ?? "*"}:${props.account ?? "*"}:studio/${props.studioId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the studio resource.
	 */
	static isValidStudioArn(arn: string): boolean {
		return StudioArnRegex.test(arn);
	}

	/**
	 * Parses a studio ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStudioArn(arn: string): ElasticmapreduceStudioArnComponents {
		const match = StudioArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid studio ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			studioId: match.groups!.studioId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for elasticmapreduce.
 */
export class ElasticmapreduceOperations {
	/** IAM actions required for the AddInstanceFleet API call. */
	static readonly AddInstanceFleet: string[] = [
		"elasticmapreduce:AddInstanceFleet",
	];
	/** IAM actions required for the AddInstanceGroups API call. */
	static readonly AddInstanceGroups: string[] = [
		"elasticmapreduce:AddInstanceGroups",
	];
	/** IAM actions required for the AddJobFlowSteps API call. */
	static readonly AddJobFlowSteps: string[] = [
		"elasticmapreduce:AddJobFlowSteps",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["elasticmapreduce:AddTags"];
	/** IAM actions required for the CancelSteps API call. */
	static readonly CancelSteps: string[] = ["elasticmapreduce:CancelSteps"];
	/** IAM actions required for the CreatePersistentAppUI API call. */
	static readonly CreatePersistentAppUI: string[] = [
		"elasticmapreduce:AccessAllEventLogs",
		"elasticmapreduce:AddTags",
		"elasticmapreduce:CreatePersistentAppUI",
	];
	/** IAM actions required for the CreateSecurityConfiguration API call. */
	static readonly CreateSecurityConfiguration: string[] = [
		"elasticmapreduce:CreateSecurityConfiguration",
	];
	/** IAM actions required for the CreateStudio API call. */
	static readonly CreateStudio: string[] = [
		"elasticmapreduce:AddTags",
		"elasticmapreduce:CreateStudio",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateStudioSessionMapping API call. */
	static readonly CreateStudioSessionMapping: string[] = [
		"elasticmapreduce:CreateStudioSessionMapping",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DeleteSecurityConfiguration: string[] = [
		"elasticmapreduce:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteStudio API call. */
	static readonly DeleteStudio: string[] = ["elasticmapreduce:DeleteStudio"];
	/** IAM actions required for the DeleteStudioSessionMapping API call. */
	static readonly DeleteStudioSessionMapping: string[] = [
		"elasticmapreduce:DeleteStudioSessionMapping",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = [
		"elasticmapreduce:DescribeCluster",
	];
	/** IAM actions required for the DescribeJobFlows API call. */
	static readonly DescribeJobFlows: string[] = [
		"elasticmapreduce:DescribeJobFlows",
	];
	/** IAM actions required for the DescribeNotebookExecution API call. */
	static readonly DescribeNotebookExecution: string[] = [
		"elasticmapreduce:DescribeNotebookExecution",
	];
	/** IAM actions required for the DescribePersistentAppUI API call. */
	static readonly DescribePersistentAppUI: string[] = [
		"elasticmapreduce:DescribePersistentAppUI",
	];
	/** IAM actions required for the DescribeReleaseLabel API call. */
	static readonly DescribeReleaseLabel: string[] = [
		"elasticmapreduce:DescribeReleaseLabel",
	];
	/** IAM actions required for the DescribeSecurityConfiguration API call. */
	static readonly DescribeSecurityConfiguration: string[] = [
		"elasticmapreduce:DescribeSecurityConfiguration",
	];
	/** IAM actions required for the DescribeStep API call. */
	static readonly DescribeStep: string[] = ["elasticmapreduce:DescribeStep"];
	/** IAM actions required for the DescribeStudio API call. */
	static readonly DescribeStudio: string[] = [
		"elasticmapreduce:DescribeStudio",
	];
	/** IAM actions required for the GetAutoTerminationPolicy API call. */
	static readonly opGetAutoTerminationPolicy: string[] = [
		"elasticmapreduce:GetAutoTerminationPolicy",
	];
	/** IAM actions required for the GetBlockPublicAccessConfiguration API call. */
	static readonly opGetBlockPublicAccessConfiguration: string[] = [
		"elasticmapreduce:GetBlockPublicAccessConfiguration",
	];
	/** IAM actions required for the GetClusterSessionCredentials API call. */
	static readonly opGetClusterSessionCredentials: string[] = [
		"elasticmapreduce:GetClusterSessionCredentials",
	];
	/** IAM actions required for the GetManagedScalingPolicy API call. */
	static readonly opGetManagedScalingPolicy: string[] = [
		"elasticmapreduce:GetManagedScalingPolicy",
	];
	/** IAM actions required for the GetOnClusterAppUIPresignedURL API call. */
	static readonly opGetOnClusterAppUIPresignedURL: string[] = [
		"elasticmapreduce:GetOnClusterAppUIPresignedURL",
	];
	/** IAM actions required for the GetPersistentAppUIPresignedURL API call. */
	static readonly opGetPersistentAppUIPresignedURL: string[] = [
		"elasticmapreduce:GetPersistentAppUIPresignedURL",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["elasticmapreduce:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly opGetSessionEndpoint: string[] = [
		"elasticmapreduce:GetSessionEndpoint",
	];
	/** IAM actions required for the GetStudioSessionMapping API call. */
	static readonly opGetStudioSessionMapping: string[] = [
		"elasticmapreduce:GetStudioSessionMapping",
	];
	/** IAM actions required for the ListBootstrapActions API call. */
	static readonly ListBootstrapActions: string[] = [
		"elasticmapreduce:ListBootstrapActions",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["elasticmapreduce:ListClusters"];
	/** IAM actions required for the ListInstanceFleets API call. */
	static readonly ListInstanceFleets: string[] = [
		"elasticmapreduce:ListInstanceFleets",
	];
	/** IAM actions required for the ListInstanceGroups API call. */
	static readonly ListInstanceGroups: string[] = [
		"elasticmapreduce:ListInstanceGroups",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = ["elasticmapreduce:ListInstances"];
	/** IAM actions required for the ListNotebookExecutions API call. */
	static readonly ListNotebookExecutions: string[] = [
		"elasticmapreduce:ListNotebookExecutions",
	];
	/** IAM actions required for the ListReleaseLabels API call. */
	static readonly ListReleaseLabels: string[] = [
		"elasticmapreduce:ListReleaseLabels",
	];
	/** IAM actions required for the ListSecurityConfigurations API call. */
	static readonly ListSecurityConfigurations: string[] = [
		"elasticmapreduce:ListSecurityConfigurations",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["elasticmapreduce:ListSessions"];
	/** IAM actions required for the ListSteps API call. */
	static readonly ListSteps: string[] = ["elasticmapreduce:ListSteps"];
	/** IAM actions required for the ListStudioSessionMappings API call. */
	static readonly ListStudioSessionMappings: string[] = [
		"elasticmapreduce:ListStudioSessionMappings",
	];
	/** IAM actions required for the ListStudios API call. */
	static readonly ListStudios: string[] = ["elasticmapreduce:ListStudios"];
	/** IAM actions required for the ListSupportedInstanceTypes API call. */
	static readonly ListSupportedInstanceTypes: string[] = [
		"elasticmapreduce:ListSupportedInstanceTypes",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly ModifyCluster: string[] = ["elasticmapreduce:ModifyCluster"];
	/** IAM actions required for the ModifyInstanceFleet API call. */
	static readonly ModifyInstanceFleet: string[] = [
		"elasticmapreduce:ModifyInstanceFleet",
	];
	/** IAM actions required for the ModifyInstanceGroups API call. */
	static readonly ModifyInstanceGroups: string[] = [
		"elasticmapreduce:ModifyInstanceGroups",
	];
	/** IAM actions required for the PutAutoScalingPolicy API call. */
	static readonly PutAutoScalingPolicy: string[] = [
		"elasticmapreduce:PutAutoScalingPolicy",
	];
	/** IAM actions required for the PutAutoTerminationPolicy API call. */
	static readonly PutAutoTerminationPolicy: string[] = [
		"elasticmapreduce:PutAutoTerminationPolicy",
	];
	/** IAM actions required for the PutBlockPublicAccessConfiguration API call. */
	static readonly PutBlockPublicAccessConfiguration: string[] = [
		"elasticmapreduce:PutBlockPublicAccessConfiguration",
	];
	/** IAM actions required for the PutManagedScalingPolicy API call. */
	static readonly PutManagedScalingPolicy: string[] = [
		"elasticmapreduce:PutManagedScalingPolicy",
	];
	/** IAM actions required for the RemoveAutoScalingPolicy API call. */
	static readonly RemoveAutoScalingPolicy: string[] = [
		"elasticmapreduce:RemoveAutoScalingPolicy",
	];
	/** IAM actions required for the RemoveAutoTerminationPolicy API call. */
	static readonly RemoveAutoTerminationPolicy: string[] = [
		"elasticmapreduce:RemoveAutoTerminationPolicy",
	];
	/** IAM actions required for the RemoveManagedScalingPolicy API call. */
	static readonly RemoveManagedScalingPolicy: string[] = [
		"elasticmapreduce:RemoveManagedScalingPolicy",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly RemoveTags: string[] = ["elasticmapreduce:RemoveTags"];
	/** IAM actions required for the RunJobFlow API call. */
	static readonly RunJobFlow: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:RunJobFlow",
	];
	/** IAM actions required for the SetKeepJobFlowAliveWhenNoSteps API call. */
	static readonly opSetKeepJobFlowAliveWhenNoSteps: string[] = [
		"elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps",
	];
	/** IAM actions required for the SetTerminationProtection API call. */
	static readonly opSetTerminationProtection: string[] = [
		"elasticmapreduce:SetTerminationProtection",
	];
	/** IAM actions required for the SetUnhealthyNodeReplacement API call. */
	static readonly opSetUnhealthyNodeReplacement: string[] = [
		"elasticmapreduce:SetUnhealthyNodeReplacement",
	];
	/** IAM actions required for the SetVisibleToAllUsers API call. */
	static readonly opSetVisibleToAllUsers: string[] = [
		"elasticmapreduce:SetVisibleToAllUsers",
	];
	/** IAM actions required for the StartNotebookExecution API call. */
	static readonly StartNotebookExecution: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:StartNotebookExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly StartSession: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:StartSession",
	];
	/** IAM actions required for the StopNotebookExecution API call. */
	static readonly StopNotebookExecution: string[] = [
		"elasticmapreduce:StopNotebookExecution",
	];
	/** IAM actions required for the TerminateJobFlows API call. */
	static readonly TerminateJobFlows: string[] = [
		"elasticmapreduce:TerminateJobFlows",
	];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TerminateSession: string[] = [
		"elasticmapreduce:TerminateSession",
	];
	/** IAM actions required for the UpdateStudio API call. */
	static readonly UpdateStudio: string[] = [
		"iam:PassRole",
		"elasticmapreduce:UpdateStudio",
	];
	/** IAM actions required for the UpdateStudioSessionMapping API call. */
	static readonly UpdateStudioSessionMapping: string[] = [
		"elasticmapreduce:UpdateStudioSessionMapping",
	];
}

/**
 * Condition key constants and builders for elasticmapreduce.
 */
export class ElasticmapreduceConditions {
	/** Condition keys applicable to the AddJobFlowSteps action. */
	static readonly AddJobFlowStepsConditionKeys: string[] = [
		"elasticmapreduce:ExecutionRoleArn",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly AddTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEditor action. */
	static readonly CreateEditorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateStudio action. */
	static readonly CreateStudioConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetClusterSessionCredentials action. */
	static readonly actionGetClusterSessionCredentialsConditionKeys: string[] = [
		"elasticmapreduce:ExecutionRoleArn",
	];
	/** Condition keys applicable to the GetPersistentAppUIPresignedURL action. */
	static readonly actionGetPersistentAppUIPresignedURLConditionKeys: string[] =
		["elasticmapreduce:ExecutionRoleArn"];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly RemoveTagsConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the RunJobFlow action. */
	static readonly RunJobFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the StartNotebookExecution action. */
	static readonly StartNotebookExecutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly StartSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:ExecutionRoleArn",
		"elasticmapreduce:RequestTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: elasticmapreduce:ExecutionRoleArn (ARN) */
	static readonly EXECUTION_ROLE_ARN = "elasticmapreduce:ExecutionRoleArn";
	/** Condition key: elasticmapreduce:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "elasticmapreduce:RequestTag/${TagKey}";
	/** Condition key: elasticmapreduce:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "elasticmapreduce:ResourceTag/${TagKey}";

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
	 * Generates a condition block for `elasticmapreduce:ExecutionRoleArn`.
	 */
	static executionRoleARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticmapreduce:ExecutionRoleArn": value } };
	}
}
