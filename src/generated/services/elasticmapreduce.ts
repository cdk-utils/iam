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
	static readonly ACCESS_ALL_EVENT_LOGS = "elasticmapreduce:AccessAllEventLogs";
	/** [Write] elasticmapreduce:AddInstanceFleet */
	static readonly ADD_INSTANCE_FLEET = "elasticmapreduce:AddInstanceFleet";
	/** [Write] elasticmapreduce:AddInstanceGroups */
	static readonly ADD_INSTANCE_GROUPS = "elasticmapreduce:AddInstanceGroups";
	/** [Write] elasticmapreduce:AddJobFlowSteps */
	static readonly ADD_JOB_FLOW_STEPS = "elasticmapreduce:AddJobFlowSteps";
	/** [Tagging] elasticmapreduce:AddTags */
	static readonly ADD_TAGS = "elasticmapreduce:AddTags";
	/** [Write] elasticmapreduce:AttachEditor */
	static readonly ATTACH_EDITOR = "elasticmapreduce:AttachEditor";
	/** [Write] elasticmapreduce:CancelSteps */
	static readonly CANCEL_STEPS = "elasticmapreduce:CancelSteps";
	/** [Write] elasticmapreduce:CreateEditor */
	static readonly CREATE_EDITOR = "elasticmapreduce:CreateEditor";
	/** [Write] elasticmapreduce:CreatePersistentAppUI */
	static readonly CREATE_PERSISTENT_APP_UI =
		"elasticmapreduce:CreatePersistentAppUI";
	/** [Write] elasticmapreduce:CreateRepository */
	static readonly CREATE_REPOSITORY = "elasticmapreduce:CreateRepository";
	/** [Write] elasticmapreduce:CreateSecurityConfiguration */
	static readonly CREATE_SECURITY_CONFIGURATION =
		"elasticmapreduce:CreateSecurityConfiguration";
	/** [Write] elasticmapreduce:CreateStudio */
	static readonly CREATE_STUDIO = "elasticmapreduce:CreateStudio";
	/** [Write] elasticmapreduce:CreateStudioPresignedUrl */
	static readonly CREATE_STUDIO_PRESIGNED_URL =
		"elasticmapreduce:CreateStudioPresignedUrl";
	/** [Write] elasticmapreduce:CreateStudioSessionMapping */
	static readonly CREATE_STUDIO_SESSION_MAPPING =
		"elasticmapreduce:CreateStudioSessionMapping";
	/** [Write] elasticmapreduce:DeleteEditor */
	static readonly DELETE_EDITOR = "elasticmapreduce:DeleteEditor";
	/** [Write] elasticmapreduce:DeleteRepository */
	static readonly DELETE_REPOSITORY = "elasticmapreduce:DeleteRepository";
	/** [Write] elasticmapreduce:DeleteSecurityConfiguration */
	static readonly DELETE_SECURITY_CONFIGURATION =
		"elasticmapreduce:DeleteSecurityConfiguration";
	/** [Write] elasticmapreduce:DeleteStudio */
	static readonly DELETE_STUDIO = "elasticmapreduce:DeleteStudio";
	/** [Write] elasticmapreduce:DeleteStudioSessionMapping */
	static readonly DELETE_STUDIO_SESSION_MAPPING =
		"elasticmapreduce:DeleteStudioSessionMapping";
	/** [PermissionManagement] elasticmapreduce:DeleteWorkspaceAccess */
	static readonly DELETE_WORKSPACE_ACCESS =
		"elasticmapreduce:DeleteWorkspaceAccess";
	/** [Read] elasticmapreduce:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "elasticmapreduce:DescribeCluster";
	/** [Read] elasticmapreduce:DescribeEditor */
	static readonly DESCRIBE_EDITOR = "elasticmapreduce:DescribeEditor";
	/** [Read] elasticmapreduce:DescribeJobFlows */
	static readonly DESCRIBE_JOB_FLOWS = "elasticmapreduce:DescribeJobFlows";
	/** [Read] elasticmapreduce:DescribeNotebookExecution */
	static readonly DESCRIBE_NOTEBOOK_EXECUTION =
		"elasticmapreduce:DescribeNotebookExecution";
	/** [Read] elasticmapreduce:DescribePersistentAppUI */
	static readonly DESCRIBE_PERSISTENT_APP_UI =
		"elasticmapreduce:DescribePersistentAppUI";
	/** [Read] elasticmapreduce:DescribeReleaseLabel */
	static readonly DESCRIBE_RELEASE_LABEL =
		"elasticmapreduce:DescribeReleaseLabel";
	/** [Read] elasticmapreduce:DescribeRepository */
	static readonly DESCRIBE_REPOSITORY = "elasticmapreduce:DescribeRepository";
	/** [Read] elasticmapreduce:DescribeSecurityConfiguration */
	static readonly DESCRIBE_SECURITY_CONFIGURATION =
		"elasticmapreduce:DescribeSecurityConfiguration";
	/** [Read] elasticmapreduce:DescribeStep */
	static readonly DESCRIBE_STEP = "elasticmapreduce:DescribeStep";
	/** [Read] elasticmapreduce:DescribeStudio */
	static readonly DESCRIBE_STUDIO = "elasticmapreduce:DescribeStudio";
	/** [Write] elasticmapreduce:DetachEditor */
	static readonly DETACH_EDITOR = "elasticmapreduce:DetachEditor";
	/** [Read] elasticmapreduce:GetAutoTerminationPolicy */
	static readonly GET_AUTO_TERMINATION_POLICY =
		"elasticmapreduce:GetAutoTerminationPolicy";
	/** [Read] elasticmapreduce:GetBlockPublicAccessConfiguration */
	static readonly GET_BLOCK_PUBLIC_ACCESS_CONFIGURATION =
		"elasticmapreduce:GetBlockPublicAccessConfiguration";
	/** [Write] elasticmapreduce:GetClusterSessionCredentials */
	static readonly GET_CLUSTER_SESSION_CREDENTIALS =
		"elasticmapreduce:GetClusterSessionCredentials";
	/** [Read] elasticmapreduce:GetManagedScalingPolicy */
	static readonly GET_MANAGED_SCALING_POLICY =
		"elasticmapreduce:GetManagedScalingPolicy";
	/** [Write] elasticmapreduce:GetOnClusterAppUIPresignedURL */
	static readonly GET_ON_CLUSTER_APP_UI_PRESIGNED_URL =
		"elasticmapreduce:GetOnClusterAppUIPresignedURL";
	/** [Write] elasticmapreduce:GetPersistentAppUIPresignedURL */
	static readonly GET_PERSISTENT_APP_UI_PRESIGNED_URL =
		"elasticmapreduce:GetPersistentAppUIPresignedURL";
	/** [Read] elasticmapreduce:GetSession */
	static readonly GET_SESSION = "elasticmapreduce:GetSession";
	/** [Write] elasticmapreduce:GetSessionEndpoint */
	static readonly GET_SESSION_ENDPOINT = "elasticmapreduce:GetSessionEndpoint";
	/** [Read] elasticmapreduce:GetStudioSessionMapping */
	static readonly GET_STUDIO_SESSION_MAPPING =
		"elasticmapreduce:GetStudioSessionMapping";
	/** [Write] elasticmapreduce:LinkRepository */
	static readonly LINK_REPOSITORY = "elasticmapreduce:LinkRepository";
	/** [Read] elasticmapreduce:ListBootstrapActions */
	static readonly LIST_BOOTSTRAP_ACTIONS =
		"elasticmapreduce:ListBootstrapActions";
	/** [List] elasticmapreduce:ListClusters */
	static readonly LIST_CLUSTERS = "elasticmapreduce:ListClusters";
	/** [List] elasticmapreduce:ListEditors */
	static readonly LIST_EDITORS = "elasticmapreduce:ListEditors";
	/** [Read] elasticmapreduce:ListInstanceFleets */
	static readonly LIST_INSTANCE_FLEETS = "elasticmapreduce:ListInstanceFleets";
	/** [Read] elasticmapreduce:ListInstanceGroups */
	static readonly LIST_INSTANCE_GROUPS = "elasticmapreduce:ListInstanceGroups";
	/** [Read] elasticmapreduce:ListInstances */
	static readonly LIST_INSTANCES = "elasticmapreduce:ListInstances";
	/** [List] elasticmapreduce:ListNotebookExecutions */
	static readonly LIST_NOTEBOOK_EXECUTIONS =
		"elasticmapreduce:ListNotebookExecutions";
	/** [List] elasticmapreduce:ListReleaseLabels */
	static readonly LIST_RELEASE_LABELS = "elasticmapreduce:ListReleaseLabels";
	/** [List] elasticmapreduce:ListRepositories */
	static readonly LIST_REPOSITORIES = "elasticmapreduce:ListRepositories";
	/** [List] elasticmapreduce:ListSecurityConfigurations */
	static readonly LIST_SECURITY_CONFIGURATIONS =
		"elasticmapreduce:ListSecurityConfigurations";
	/** [List] elasticmapreduce:ListSessions */
	static readonly LIST_SESSIONS = "elasticmapreduce:ListSessions";
	/** [Read] elasticmapreduce:ListSteps */
	static readonly LIST_STEPS = "elasticmapreduce:ListSteps";
	/** [List] elasticmapreduce:ListStudioSessionMappings */
	static readonly LIST_STUDIO_SESSION_MAPPINGS =
		"elasticmapreduce:ListStudioSessionMappings";
	/** [List] elasticmapreduce:ListStudios */
	static readonly LIST_STUDIOS = "elasticmapreduce:ListStudios";
	/** [List] elasticmapreduce:ListSupportedInstanceTypes */
	static readonly LIST_SUPPORTED_INSTANCE_TYPES =
		"elasticmapreduce:ListSupportedInstanceTypes";
	/** [List] elasticmapreduce:ListWorkspaceAccessIdentities */
	static readonly LIST_WORKSPACE_ACCESS_IDENTITIES =
		"elasticmapreduce:ListWorkspaceAccessIdentities";
	/** [Write] elasticmapreduce:ModifyCluster */
	static readonly MODIFY_CLUSTER = "elasticmapreduce:ModifyCluster";
	/** [Write] elasticmapreduce:ModifyInstanceFleet */
	static readonly MODIFY_INSTANCE_FLEET =
		"elasticmapreduce:ModifyInstanceFleet";
	/** [Write] elasticmapreduce:ModifyInstanceGroups */
	static readonly MODIFY_INSTANCE_GROUPS =
		"elasticmapreduce:ModifyInstanceGroups";
	/** [Write] elasticmapreduce:OpenEditorInConsole */
	static readonly OPEN_EDITOR_IN_CONSOLE =
		"elasticmapreduce:OpenEditorInConsole";
	/** [Write] elasticmapreduce:PutAutoScalingPolicy */
	static readonly PUT_AUTO_SCALING_POLICY =
		"elasticmapreduce:PutAutoScalingPolicy";
	/** [Write] elasticmapreduce:PutAutoTerminationPolicy */
	static readonly PUT_AUTO_TERMINATION_POLICY =
		"elasticmapreduce:PutAutoTerminationPolicy";
	/** [PermissionManagement] elasticmapreduce:PutBlockPublicAccessConfiguration */
	static readonly PUT_BLOCK_PUBLIC_ACCESS_CONFIGURATION =
		"elasticmapreduce:PutBlockPublicAccessConfiguration";
	/** [Write] elasticmapreduce:PutManagedScalingPolicy */
	static readonly PUT_MANAGED_SCALING_POLICY =
		"elasticmapreduce:PutManagedScalingPolicy";
	/** [PermissionManagement] elasticmapreduce:PutWorkspaceAccess */
	static readonly PUT_WORKSPACE_ACCESS = "elasticmapreduce:PutWorkspaceAccess";
	/** [Write] elasticmapreduce:RemoveAutoScalingPolicy */
	static readonly REMOVE_AUTO_SCALING_POLICY =
		"elasticmapreduce:RemoveAutoScalingPolicy";
	/** [Write] elasticmapreduce:RemoveAutoTerminationPolicy */
	static readonly REMOVE_AUTO_TERMINATION_POLICY =
		"elasticmapreduce:RemoveAutoTerminationPolicy";
	/** [Write] elasticmapreduce:RemoveManagedScalingPolicy */
	static readonly REMOVE_MANAGED_SCALING_POLICY =
		"elasticmapreduce:RemoveManagedScalingPolicy";
	/** [Tagging] elasticmapreduce:RemoveTags */
	static readonly REMOVE_TAGS = "elasticmapreduce:RemoveTags";
	/** [Write] elasticmapreduce:RunJobFlow */
	static readonly RUN_JOB_FLOW = "elasticmapreduce:RunJobFlow";
	/** [Write] elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps */
	static readonly SET_KEEP_JOB_FLOW_ALIVE_WHEN_NO_STEPS =
		"elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps";
	/** [Write] elasticmapreduce:SetTerminationProtection */
	static readonly SET_TERMINATION_PROTECTION =
		"elasticmapreduce:SetTerminationProtection";
	/** [Write] elasticmapreduce:SetUnhealthyNodeReplacement */
	static readonly SET_UNHEALTHY_NODE_REPLACEMENT =
		"elasticmapreduce:SetUnhealthyNodeReplacement";
	/** [Write] elasticmapreduce:SetVisibleToAllUsers */
	static readonly SET_VISIBLE_TO_ALL_USERS =
		"elasticmapreduce:SetVisibleToAllUsers";
	/** [Write] elasticmapreduce:StartEditor */
	static readonly START_EDITOR = "elasticmapreduce:StartEditor";
	/** [Write] elasticmapreduce:StartNotebookExecution */
	static readonly START_NOTEBOOK_EXECUTION =
		"elasticmapreduce:StartNotebookExecution";
	/** [Write] elasticmapreduce:StartSession */
	static readonly START_SESSION = "elasticmapreduce:StartSession";
	/** [Write] elasticmapreduce:StopEditor */
	static readonly STOP_EDITOR = "elasticmapreduce:StopEditor";
	/** [Write] elasticmapreduce:StopNotebookExecution */
	static readonly STOP_NOTEBOOK_EXECUTION =
		"elasticmapreduce:StopNotebookExecution";
	/** [Write] elasticmapreduce:TerminateJobFlows */
	static readonly TERMINATE_JOB_FLOWS = "elasticmapreduce:TerminateJobFlows";
	/** [Write] elasticmapreduce:TerminateSession */
	static readonly TERMINATE_SESSION = "elasticmapreduce:TerminateSession";
	/** [Write] elasticmapreduce:UnlinkRepository */
	static readonly UNLINK_REPOSITORY = "elasticmapreduce:UnlinkRepository";
	/** [Write] elasticmapreduce:UpdateEditor */
	static readonly UPDATE_EDITOR = "elasticmapreduce:UpdateEditor";
	/** [Write] elasticmapreduce:UpdateRepository */
	static readonly UPDATE_REPOSITORY = "elasticmapreduce:UpdateRepository";
	/** [Write] elasticmapreduce:UpdateStudio */
	static readonly UPDATE_STUDIO = "elasticmapreduce:UpdateStudio";
	/** [Write] elasticmapreduce:UpdateStudioSessionMapping */
	static readonly UPDATE_STUDIO_SESSION_MAPPING =
		"elasticmapreduce:UpdateStudioSessionMapping";
	/** [List] elasticmapreduce:ViewEventsFromAllClustersInConsole */
	static readonly VIEW_EVENTS_FROM_ALL_CLUSTERS_IN_CONSOLE =
		"elasticmapreduce:ViewEventsFromAllClustersInConsole";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElasticmapreduceActions.DESCRIBE_CLUSTER,
		ElasticmapreduceActions.DESCRIBE_EDITOR,
		ElasticmapreduceActions.DESCRIBE_JOB_FLOWS,
		ElasticmapreduceActions.DESCRIBE_NOTEBOOK_EXECUTION,
		ElasticmapreduceActions.DESCRIBE_PERSISTENT_APP_UI,
		ElasticmapreduceActions.DESCRIBE_RELEASE_LABEL,
		ElasticmapreduceActions.DESCRIBE_REPOSITORY,
		ElasticmapreduceActions.DESCRIBE_SECURITY_CONFIGURATION,
		ElasticmapreduceActions.DESCRIBE_STEP,
		ElasticmapreduceActions.DESCRIBE_STUDIO,
		ElasticmapreduceActions.GET_AUTO_TERMINATION_POLICY,
		ElasticmapreduceActions.GET_BLOCK_PUBLIC_ACCESS_CONFIGURATION,
		ElasticmapreduceActions.GET_MANAGED_SCALING_POLICY,
		ElasticmapreduceActions.GET_SESSION,
		ElasticmapreduceActions.GET_STUDIO_SESSION_MAPPING,
		ElasticmapreduceActions.LIST_BOOTSTRAP_ACTIONS,
		ElasticmapreduceActions.LIST_INSTANCE_FLEETS,
		ElasticmapreduceActions.LIST_INSTANCE_GROUPS,
		ElasticmapreduceActions.LIST_INSTANCES,
		ElasticmapreduceActions.LIST_STEPS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElasticmapreduceActions.ACCESS_ALL_EVENT_LOGS,
		ElasticmapreduceActions.ADD_INSTANCE_FLEET,
		ElasticmapreduceActions.ADD_INSTANCE_GROUPS,
		ElasticmapreduceActions.ADD_JOB_FLOW_STEPS,
		ElasticmapreduceActions.ATTACH_EDITOR,
		ElasticmapreduceActions.CANCEL_STEPS,
		ElasticmapreduceActions.CREATE_EDITOR,
		ElasticmapreduceActions.CREATE_PERSISTENT_APP_UI,
		ElasticmapreduceActions.CREATE_REPOSITORY,
		ElasticmapreduceActions.CREATE_SECURITY_CONFIGURATION,
		ElasticmapreduceActions.CREATE_STUDIO,
		ElasticmapreduceActions.CREATE_STUDIO_PRESIGNED_URL,
		ElasticmapreduceActions.CREATE_STUDIO_SESSION_MAPPING,
		ElasticmapreduceActions.DELETE_EDITOR,
		ElasticmapreduceActions.DELETE_REPOSITORY,
		ElasticmapreduceActions.DELETE_SECURITY_CONFIGURATION,
		ElasticmapreduceActions.DELETE_STUDIO,
		ElasticmapreduceActions.DELETE_STUDIO_SESSION_MAPPING,
		ElasticmapreduceActions.DETACH_EDITOR,
		ElasticmapreduceActions.GET_CLUSTER_SESSION_CREDENTIALS,
		ElasticmapreduceActions.GET_ON_CLUSTER_APP_UI_PRESIGNED_URL,
		ElasticmapreduceActions.GET_PERSISTENT_APP_UI_PRESIGNED_URL,
		ElasticmapreduceActions.GET_SESSION_ENDPOINT,
		ElasticmapreduceActions.LINK_REPOSITORY,
		ElasticmapreduceActions.MODIFY_CLUSTER,
		ElasticmapreduceActions.MODIFY_INSTANCE_FLEET,
		ElasticmapreduceActions.MODIFY_INSTANCE_GROUPS,
		ElasticmapreduceActions.OPEN_EDITOR_IN_CONSOLE,
		ElasticmapreduceActions.PUT_AUTO_SCALING_POLICY,
		ElasticmapreduceActions.PUT_AUTO_TERMINATION_POLICY,
		ElasticmapreduceActions.PUT_MANAGED_SCALING_POLICY,
		ElasticmapreduceActions.REMOVE_AUTO_SCALING_POLICY,
		ElasticmapreduceActions.REMOVE_AUTO_TERMINATION_POLICY,
		ElasticmapreduceActions.REMOVE_MANAGED_SCALING_POLICY,
		ElasticmapreduceActions.RUN_JOB_FLOW,
		ElasticmapreduceActions.SET_KEEP_JOB_FLOW_ALIVE_WHEN_NO_STEPS,
		ElasticmapreduceActions.SET_TERMINATION_PROTECTION,
		ElasticmapreduceActions.SET_UNHEALTHY_NODE_REPLACEMENT,
		ElasticmapreduceActions.SET_VISIBLE_TO_ALL_USERS,
		ElasticmapreduceActions.START_EDITOR,
		ElasticmapreduceActions.START_NOTEBOOK_EXECUTION,
		ElasticmapreduceActions.START_SESSION,
		ElasticmapreduceActions.STOP_EDITOR,
		ElasticmapreduceActions.STOP_NOTEBOOK_EXECUTION,
		ElasticmapreduceActions.TERMINATE_JOB_FLOWS,
		ElasticmapreduceActions.TERMINATE_SESSION,
		ElasticmapreduceActions.UNLINK_REPOSITORY,
		ElasticmapreduceActions.UPDATE_EDITOR,
		ElasticmapreduceActions.UPDATE_REPOSITORY,
		ElasticmapreduceActions.UPDATE_STUDIO,
		ElasticmapreduceActions.UPDATE_STUDIO_SESSION_MAPPING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElasticmapreduceActions.LIST_CLUSTERS,
		ElasticmapreduceActions.LIST_EDITORS,
		ElasticmapreduceActions.LIST_NOTEBOOK_EXECUTIONS,
		ElasticmapreduceActions.LIST_RELEASE_LABELS,
		ElasticmapreduceActions.LIST_REPOSITORIES,
		ElasticmapreduceActions.LIST_SECURITY_CONFIGURATIONS,
		ElasticmapreduceActions.LIST_SESSIONS,
		ElasticmapreduceActions.LIST_STUDIO_SESSION_MAPPINGS,
		ElasticmapreduceActions.LIST_STUDIOS,
		ElasticmapreduceActions.LIST_SUPPORTED_INSTANCE_TYPES,
		ElasticmapreduceActions.LIST_WORKSPACE_ACCESS_IDENTITIES,
		ElasticmapreduceActions.VIEW_EVENTS_FROM_ALL_CLUSTERS_IN_CONSOLE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ElasticmapreduceActions.DELETE_WORKSPACE_ACCESS,
		ElasticmapreduceActions.PUT_BLOCK_PUBLIC_ACCESS_CONFIGURATION,
		ElasticmapreduceActions.PUT_WORKSPACE_ACCESS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElasticmapreduceActions.ADD_TAGS,
		ElasticmapreduceActions.REMOVE_TAGS,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterId>[^:/?]+)$",
);
const EditorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):editor/(?<editorId>[^:/?]+)$",
);
const NotebookExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):notebook-execution/(?<notebookExecutionId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterId>[^:/?]+)/session/(?<sessionId>[^:/?]+)$",
);
const StudioArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticmapreduce:(?<region>[^:]*):(?<account>[^:]*):studio/(?<studioId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elasticmapreduce resources.
 */
export class ElasticmapreduceResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
	} {
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
	static editor(props: {
		/** The EditorId component of the ARN. */
		readonly editorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEditorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		editorId: string;
	} {
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
	static notebookExecution(props: {
		/** The NotebookExecutionId component of the ARN. */
		readonly notebookExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNotebookExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notebookExecutionId: string;
	} {
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
	static session(props: {
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
	}): string {
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
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
		sessionId: string;
	} {
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
	static studio(props: {
		/** The StudioId component of the ARN. */
		readonly studioId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStudioArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		studioId: string;
	} {
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
	static readonly ADD_INSTANCE_FLEET: string[] = [
		"elasticmapreduce:AddInstanceFleet",
	];
	/** IAM actions required for the AddInstanceGroups API call. */
	static readonly ADD_INSTANCE_GROUPS: string[] = [
		"elasticmapreduce:AddInstanceGroups",
	];
	/** IAM actions required for the AddJobFlowSteps API call. */
	static readonly ADD_JOB_FLOW_STEPS: string[] = [
		"elasticmapreduce:AddJobFlowSteps",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["elasticmapreduce:AddTags"];
	/** IAM actions required for the CancelSteps API call. */
	static readonly CANCEL_STEPS: string[] = ["elasticmapreduce:CancelSteps"];
	/** IAM actions required for the CreatePersistentAppUI API call. */
	static readonly CREATE_PERSISTENT_APP_UI: string[] = [
		"elasticmapreduce:AccessAllEventLogs",
		"elasticmapreduce:AddTags",
		"elasticmapreduce:CreatePersistentAppUI",
	];
	/** IAM actions required for the CreateSecurityConfiguration API call. */
	static readonly CREATE_SECURITY_CONFIGURATION: string[] = [
		"elasticmapreduce:CreateSecurityConfiguration",
	];
	/** IAM actions required for the CreateStudio API call. */
	static readonly CREATE_STUDIO: string[] = [
		"elasticmapreduce:AddTags",
		"elasticmapreduce:CreateStudio",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateStudioSessionMapping API call. */
	static readonly CREATE_STUDIO_SESSION_MAPPING: string[] = [
		"elasticmapreduce:CreateStudioSessionMapping",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DELETE_SECURITY_CONFIGURATION: string[] = [
		"elasticmapreduce:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteStudio API call. */
	static readonly DELETE_STUDIO: string[] = ["elasticmapreduce:DeleteStudio"];
	/** IAM actions required for the DeleteStudioSessionMapping API call. */
	static readonly DELETE_STUDIO_SESSION_MAPPING: string[] = [
		"elasticmapreduce:DeleteStudioSessionMapping",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = [
		"elasticmapreduce:DescribeCluster",
	];
	/** IAM actions required for the DescribeJobFlows API call. */
	static readonly DESCRIBE_JOB_FLOWS: string[] = [
		"elasticmapreduce:DescribeJobFlows",
	];
	/** IAM actions required for the DescribeNotebookExecution API call. */
	static readonly DESCRIBE_NOTEBOOK_EXECUTION: string[] = [
		"elasticmapreduce:DescribeNotebookExecution",
	];
	/** IAM actions required for the DescribePersistentAppUI API call. */
	static readonly DESCRIBE_PERSISTENT_APP_UI: string[] = [
		"elasticmapreduce:DescribePersistentAppUI",
	];
	/** IAM actions required for the DescribeReleaseLabel API call. */
	static readonly DESCRIBE_RELEASE_LABEL: string[] = [
		"elasticmapreduce:DescribeReleaseLabel",
	];
	/** IAM actions required for the DescribeSecurityConfiguration API call. */
	static readonly DESCRIBE_SECURITY_CONFIGURATION: string[] = [
		"elasticmapreduce:DescribeSecurityConfiguration",
	];
	/** IAM actions required for the DescribeStep API call. */
	static readonly DESCRIBE_STEP: string[] = ["elasticmapreduce:DescribeStep"];
	/** IAM actions required for the DescribeStudio API call. */
	static readonly DESCRIBE_STUDIO: string[] = [
		"elasticmapreduce:DescribeStudio",
	];
	/** IAM actions required for the GetAutoTerminationPolicy API call. */
	static readonly GET_AUTO_TERMINATION_POLICY: string[] = [
		"elasticmapreduce:GetAutoTerminationPolicy",
	];
	/** IAM actions required for the GetBlockPublicAccessConfiguration API call. */
	static readonly GET_BLOCK_PUBLIC_ACCESS_CONFIGURATION: string[] = [
		"elasticmapreduce:GetBlockPublicAccessConfiguration",
	];
	/** IAM actions required for the GetClusterSessionCredentials API call. */
	static readonly GET_CLUSTER_SESSION_CREDENTIALS: string[] = [
		"elasticmapreduce:GetClusterSessionCredentials",
	];
	/** IAM actions required for the GetManagedScalingPolicy API call. */
	static readonly GET_MANAGED_SCALING_POLICY: string[] = [
		"elasticmapreduce:GetManagedScalingPolicy",
	];
	/** IAM actions required for the GetOnClusterAppUIPresignedURL API call. */
	static readonly GET_ON_CLUSTER_APP_UI_PRESIGNED_URL: string[] = [
		"elasticmapreduce:GetOnClusterAppUIPresignedURL",
	];
	/** IAM actions required for the GetPersistentAppUIPresignedURL API call. */
	static readonly GET_PERSISTENT_APP_UI_PRESIGNED_URL: string[] = [
		"elasticmapreduce:GetPersistentAppUIPresignedURL",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["elasticmapreduce:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly GET_SESSION_ENDPOINT: string[] = [
		"elasticmapreduce:GetSessionEndpoint",
	];
	/** IAM actions required for the GetStudioSessionMapping API call. */
	static readonly GET_STUDIO_SESSION_MAPPING: string[] = [
		"elasticmapreduce:GetStudioSessionMapping",
	];
	/** IAM actions required for the ListBootstrapActions API call. */
	static readonly LIST_BOOTSTRAP_ACTIONS: string[] = [
		"elasticmapreduce:ListBootstrapActions",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["elasticmapreduce:ListClusters"];
	/** IAM actions required for the ListInstanceFleets API call. */
	static readonly LIST_INSTANCE_FLEETS: string[] = [
		"elasticmapreduce:ListInstanceFleets",
	];
	/** IAM actions required for the ListInstanceGroups API call. */
	static readonly LIST_INSTANCE_GROUPS: string[] = [
		"elasticmapreduce:ListInstanceGroups",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = ["elasticmapreduce:ListInstances"];
	/** IAM actions required for the ListNotebookExecutions API call. */
	static readonly LIST_NOTEBOOK_EXECUTIONS: string[] = [
		"elasticmapreduce:ListNotebookExecutions",
	];
	/** IAM actions required for the ListReleaseLabels API call. */
	static readonly LIST_RELEASE_LABELS: string[] = [
		"elasticmapreduce:ListReleaseLabels",
	];
	/** IAM actions required for the ListSecurityConfigurations API call. */
	static readonly LIST_SECURITY_CONFIGURATIONS: string[] = [
		"elasticmapreduce:ListSecurityConfigurations",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["elasticmapreduce:ListSessions"];
	/** IAM actions required for the ListSteps API call. */
	static readonly LIST_STEPS: string[] = ["elasticmapreduce:ListSteps"];
	/** IAM actions required for the ListStudioSessionMappings API call. */
	static readonly LIST_STUDIO_SESSION_MAPPINGS: string[] = [
		"elasticmapreduce:ListStudioSessionMappings",
	];
	/** IAM actions required for the ListStudios API call. */
	static readonly LIST_STUDIOS: string[] = ["elasticmapreduce:ListStudios"];
	/** IAM actions required for the ListSupportedInstanceTypes API call. */
	static readonly LIST_SUPPORTED_INSTANCE_TYPES: string[] = [
		"elasticmapreduce:ListSupportedInstanceTypes",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly MODIFY_CLUSTER: string[] = ["elasticmapreduce:ModifyCluster"];
	/** IAM actions required for the ModifyInstanceFleet API call. */
	static readonly MODIFY_INSTANCE_FLEET: string[] = [
		"elasticmapreduce:ModifyInstanceFleet",
	];
	/** IAM actions required for the ModifyInstanceGroups API call. */
	static readonly MODIFY_INSTANCE_GROUPS: string[] = [
		"elasticmapreduce:ModifyInstanceGroups",
	];
	/** IAM actions required for the PutAutoScalingPolicy API call. */
	static readonly PUT_AUTO_SCALING_POLICY: string[] = [
		"elasticmapreduce:PutAutoScalingPolicy",
	];
	/** IAM actions required for the PutAutoTerminationPolicy API call. */
	static readonly PUT_AUTO_TERMINATION_POLICY: string[] = [
		"elasticmapreduce:PutAutoTerminationPolicy",
	];
	/** IAM actions required for the PutBlockPublicAccessConfiguration API call. */
	static readonly PUT_BLOCK_PUBLIC_ACCESS_CONFIGURATION: string[] = [
		"elasticmapreduce:PutBlockPublicAccessConfiguration",
	];
	/** IAM actions required for the PutManagedScalingPolicy API call. */
	static readonly PUT_MANAGED_SCALING_POLICY: string[] = [
		"elasticmapreduce:PutManagedScalingPolicy",
	];
	/** IAM actions required for the RemoveAutoScalingPolicy API call. */
	static readonly REMOVE_AUTO_SCALING_POLICY: string[] = [
		"elasticmapreduce:RemoveAutoScalingPolicy",
	];
	/** IAM actions required for the RemoveAutoTerminationPolicy API call. */
	static readonly REMOVE_AUTO_TERMINATION_POLICY: string[] = [
		"elasticmapreduce:RemoveAutoTerminationPolicy",
	];
	/** IAM actions required for the RemoveManagedScalingPolicy API call. */
	static readonly REMOVE_MANAGED_SCALING_POLICY: string[] = [
		"elasticmapreduce:RemoveManagedScalingPolicy",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["elasticmapreduce:RemoveTags"];
	/** IAM actions required for the RunJobFlow API call. */
	static readonly RUN_JOB_FLOW: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:RunJobFlow",
	];
	/** IAM actions required for the SetKeepJobFlowAliveWhenNoSteps API call. */
	static readonly SET_KEEP_JOB_FLOW_ALIVE_WHEN_NO_STEPS: string[] = [
		"elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps",
	];
	/** IAM actions required for the SetTerminationProtection API call. */
	static readonly SET_TERMINATION_PROTECTION: string[] = [
		"elasticmapreduce:SetTerminationProtection",
	];
	/** IAM actions required for the SetUnhealthyNodeReplacement API call. */
	static readonly SET_UNHEALTHY_NODE_REPLACEMENT: string[] = [
		"elasticmapreduce:SetUnhealthyNodeReplacement",
	];
	/** IAM actions required for the SetVisibleToAllUsers API call. */
	static readonly SET_VISIBLE_TO_ALL_USERS: string[] = [
		"elasticmapreduce:SetVisibleToAllUsers",
	];
	/** IAM actions required for the StartNotebookExecution API call. */
	static readonly START_NOTEBOOK_EXECUTION: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:StartNotebookExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly START_SESSION: string[] = [
		"elasticmapreduce:AddTags",
		"iam:PassRole",
		"elasticmapreduce:StartSession",
	];
	/** IAM actions required for the StopNotebookExecution API call. */
	static readonly STOP_NOTEBOOK_EXECUTION: string[] = [
		"elasticmapreduce:StopNotebookExecution",
	];
	/** IAM actions required for the TerminateJobFlows API call. */
	static readonly TERMINATE_JOB_FLOWS: string[] = [
		"elasticmapreduce:TerminateJobFlows",
	];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TERMINATE_SESSION: string[] = [
		"elasticmapreduce:TerminateSession",
	];
	/** IAM actions required for the UpdateStudio API call. */
	static readonly UPDATE_STUDIO: string[] = [
		"iam:PassRole",
		"elasticmapreduce:UpdateStudio",
	];
	/** IAM actions required for the UpdateStudioSessionMapping API call. */
	static readonly UPDATE_STUDIO_SESSION_MAPPING: string[] = [
		"elasticmapreduce:UpdateStudioSessionMapping",
	];
}

/**
 * Condition key constants and builders for elasticmapreduce.
 */
export class ElasticmapreduceConditions {
	/** Condition keys applicable to the AddJobFlowSteps action. */
	static readonly ADD_JOB_FLOW_STEPS_CONDITION_KEYS: string[] = [
		"elasticmapreduce:ExecutionRoleArn",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEditor action. */
	static readonly CREATE_EDITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateStudio action. */
	static readonly CREATE_STUDIO_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetClusterSessionCredentials action. */
	static readonly GET_CLUSTER_SESSION_CREDENTIALS_CONDITION_KEYS: string[] = [
		"elasticmapreduce:ExecutionRoleArn",
	];
	/** Condition keys applicable to the GetPersistentAppUIPresignedURL action. */
	static readonly GET_PERSISTENT_APP_UI_PRESIGNED_URL_CONDITION_KEYS: string[] =
		["elasticmapreduce:ExecutionRoleArn"];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the RunJobFlow action. */
	static readonly RUN_JOB_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the StartNotebookExecution action. */
	static readonly START_NOTEBOOK_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly START_SESSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticmapreduce:ExecutionRoleArn",
		"elasticmapreduce:RequestTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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

	/**
	 * Generates a condition block for `elasticmapreduce:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticmapreduce:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `elasticmapreduce:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return {
			StringEquals: { "elasticmapreduce:ResourceTag/${TagKey}": value },
		};
	}
}
