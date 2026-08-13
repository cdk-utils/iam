// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ecs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ecs service.
 */
export class ECSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ecs";

	/** [PermissionManagement] ecs:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"ecs:AllowVendedLogDeliveryForResource";
	/** [Write] ecs:ContinueServiceDeployment */
	static readonly CONTINUE_SERVICE_DEPLOYMENT = "ecs:ContinueServiceDeployment";
	/** [Write] ecs:CreateCapacityProvider */
	static readonly CREATE_CAPACITY_PROVIDER = "ecs:CreateCapacityProvider";
	/** [Write] ecs:CreateCluster */
	static readonly CREATE_CLUSTER = "ecs:CreateCluster";
	/** [Write] ecs:CreateDaemon */
	static readonly CREATE_DAEMON = "ecs:CreateDaemon";
	/** [Write] ecs:CreateExpressGatewayService */
	static readonly CREATE_EXPRESS_GATEWAY_SERVICE =
		"ecs:CreateExpressGatewayService";
	/** [Write] ecs:CreateService */
	static readonly CREATE_SERVICE = "ecs:CreateService";
	/** [Write] ecs:CreateTaskSet */
	static readonly CREATE_TASK_SET = "ecs:CreateTaskSet";
	/** [Write] ecs:DeleteAccountSetting */
	static readonly DELETE_ACCOUNT_SETTING = "ecs:DeleteAccountSetting";
	/** [Write] ecs:DeleteAttributes */
	static readonly DELETE_ATTRIBUTES = "ecs:DeleteAttributes";
	/** [Write] ecs:DeleteCapacityProvider */
	static readonly DELETE_CAPACITY_PROVIDER = "ecs:DeleteCapacityProvider";
	/** [Write] ecs:DeleteCluster */
	static readonly DELETE_CLUSTER = "ecs:DeleteCluster";
	/** [Write] ecs:DeleteDaemon */
	static readonly DELETE_DAEMON = "ecs:DeleteDaemon";
	/** [Write] ecs:DeleteDaemonTaskDefinition */
	static readonly DELETE_DAEMON_TASK_DEFINITION =
		"ecs:DeleteDaemonTaskDefinition";
	/** [Write] ecs:DeleteExpressGatewayService */
	static readonly DELETE_EXPRESS_GATEWAY_SERVICE =
		"ecs:DeleteExpressGatewayService";
	/** [Write] ecs:DeleteService */
	static readonly DELETE_SERVICE = "ecs:DeleteService";
	/** [Write] ecs:DeleteTaskDefinitions */
	static readonly DELETE_TASK_DEFINITIONS = "ecs:DeleteTaskDefinitions";
	/** [Write] ecs:DeleteTaskSet */
	static readonly DELETE_TASK_SET = "ecs:DeleteTaskSet";
	/** [Write] ecs:DeregisterContainerInstance */
	static readonly DEREGISTER_CONTAINER_INSTANCE =
		"ecs:DeregisterContainerInstance";
	/** [Write] ecs:DeregisterTaskDefinition */
	static readonly DEREGISTER_TASK_DEFINITION = "ecs:DeregisterTaskDefinition";
	/** [Read] ecs:DescribeCapacityProviders */
	static readonly DESCRIBE_CAPACITY_PROVIDERS = "ecs:DescribeCapacityProviders";
	/** [Read] ecs:DescribeClusters */
	static readonly DESCRIBE_CLUSTERS = "ecs:DescribeClusters";
	/** [Read] ecs:DescribeContainerInstances */
	static readonly DESCRIBE_CONTAINER_INSTANCES =
		"ecs:DescribeContainerInstances";
	/** [Read] ecs:DescribeDaemon */
	static readonly DESCRIBE_DAEMON = "ecs:DescribeDaemon";
	/** [Read] ecs:DescribeDaemonDeployments */
	static readonly DESCRIBE_DAEMON_DEPLOYMENTS = "ecs:DescribeDaemonDeployments";
	/** [Read] ecs:DescribeDaemonRevisions */
	static readonly DESCRIBE_DAEMON_REVISIONS = "ecs:DescribeDaemonRevisions";
	/** [Read] ecs:DescribeDaemonTaskDefinition */
	static readonly DESCRIBE_DAEMON_TASK_DEFINITION =
		"ecs:DescribeDaemonTaskDefinition";
	/** [Read] ecs:DescribeExpressGatewayService */
	static readonly DESCRIBE_EXPRESS_GATEWAY_SERVICE =
		"ecs:DescribeExpressGatewayService";
	/** [Read] ecs:DescribeServiceDeployments */
	static readonly DESCRIBE_SERVICE_DEPLOYMENTS =
		"ecs:DescribeServiceDeployments";
	/** [Read] ecs:DescribeServiceRevisions */
	static readonly DESCRIBE_SERVICE_REVISIONS = "ecs:DescribeServiceRevisions";
	/** [Read] ecs:DescribeServices */
	static readonly DESCRIBE_SERVICES = "ecs:DescribeServices";
	/** [Read] ecs:DescribeTaskDefinition */
	static readonly DESCRIBE_TASK_DEFINITION = "ecs:DescribeTaskDefinition";
	/** [Read] ecs:DescribeTaskSets */
	static readonly DESCRIBE_TASK_SETS = "ecs:DescribeTaskSets";
	/** [Read] ecs:DescribeTasks */
	static readonly DESCRIBE_TASKS = "ecs:DescribeTasks";
	/** [Write] ecs:DiscoverPollEndpoint */
	static readonly DISCOVER_POLL_ENDPOINT = "ecs:DiscoverPollEndpoint";
	/** [Write] ecs:ExecuteCommand */
	static readonly EXECUTE_COMMAND = "ecs:ExecuteCommand";
	/** [Read] ecs:GetTaskProtection */
	static readonly GET_TASK_PROTECTION = "ecs:GetTaskProtection";
	/** [Read] ecs:ListAccountSettings */
	static readonly LIST_ACCOUNT_SETTINGS = "ecs:ListAccountSettings";
	/** [List] ecs:ListAttributes */
	static readonly LIST_ATTRIBUTES = "ecs:ListAttributes";
	/** [List] ecs:ListClusters */
	static readonly LIST_CLUSTERS = "ecs:ListClusters";
	/** [List] ecs:ListContainerInstances */
	static readonly LIST_CONTAINER_INSTANCES = "ecs:ListContainerInstances";
	/** [List] ecs:ListDaemonDeployments */
	static readonly LIST_DAEMON_DEPLOYMENTS = "ecs:ListDaemonDeployments";
	/** [List] ecs:ListDaemonTaskDefinitions */
	static readonly LIST_DAEMON_TASK_DEFINITIONS =
		"ecs:ListDaemonTaskDefinitions";
	/** [List] ecs:ListDaemons */
	static readonly LIST_DAEMONS = "ecs:ListDaemons";
	/** [List] ecs:ListServiceDeployments */
	static readonly LIST_SERVICE_DEPLOYMENTS = "ecs:ListServiceDeployments";
	/** [List] ecs:ListServices */
	static readonly LIST_SERVICES = "ecs:ListServices";
	/** [List] ecs:ListServicesByNamespace */
	static readonly LIST_SERVICES_BY_NAMESPACE = "ecs:ListServicesByNamespace";
	/** [Read] ecs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ecs:ListTagsForResource";
	/** [List] ecs:ListTaskDefinitionFamilies */
	static readonly LIST_TASK_DEFINITION_FAMILIES =
		"ecs:ListTaskDefinitionFamilies";
	/** [List] ecs:ListTaskDefinitions */
	static readonly LIST_TASK_DEFINITIONS = "ecs:ListTaskDefinitions";
	/** [List] ecs:ListTasks */
	static readonly LIST_TASKS = "ecs:ListTasks";
	/** [Write] ecs:Poll */
	static readonly POLL = "ecs:Poll";
	/** [Write] ecs:PutAccountSetting */
	static readonly PUT_ACCOUNT_SETTING = "ecs:PutAccountSetting";
	/** [Write] ecs:PutAccountSettingDefault */
	static readonly PUT_ACCOUNT_SETTING_DEFAULT = "ecs:PutAccountSettingDefault";
	/** [Write] ecs:PutAttributes */
	static readonly PUT_ATTRIBUTES = "ecs:PutAttributes";
	/** [Write] ecs:PutClusterCapacityProviders */
	static readonly PUT_CLUSTER_CAPACITY_PROVIDERS =
		"ecs:PutClusterCapacityProviders";
	/** [Write] ecs:PutSystemLogEvents */
	static readonly PUT_SYSTEM_LOG_EVENTS = "ecs:PutSystemLogEvents";
	/** [Write] ecs:RegisterContainerInstance */
	static readonly REGISTER_CONTAINER_INSTANCE = "ecs:RegisterContainerInstance";
	/** [Write] ecs:RegisterDaemonTaskDefinition */
	static readonly REGISTER_DAEMON_TASK_DEFINITION =
		"ecs:RegisterDaemonTaskDefinition";
	/** [Write] ecs:RegisterTaskDefinition */
	static readonly REGISTER_TASK_DEFINITION = "ecs:RegisterTaskDefinition";
	/** [Write] ecs:RunTask */
	static readonly RUN_TASK = "ecs:RunTask";
	/** [Write] ecs:StartTask */
	static readonly START_TASK = "ecs:StartTask";
	/** [Write] ecs:StartTelemetrySession */
	static readonly START_TELEMETRY_SESSION = "ecs:StartTelemetrySession";
	/** [Write] ecs:StopServiceDeployment */
	static readonly STOP_SERVICE_DEPLOYMENT = "ecs:StopServiceDeployment";
	/** [Write] ecs:StopTask */
	static readonly STOP_TASK = "ecs:StopTask";
	/** [Write] ecs:SubmitAttachmentStateChanges */
	static readonly SUBMIT_ATTACHMENT_STATE_CHANGES =
		"ecs:SubmitAttachmentStateChanges";
	/** [Write] ecs:SubmitContainerStateChange */
	static readonly SUBMIT_CONTAINER_STATE_CHANGE =
		"ecs:SubmitContainerStateChange";
	/** [Write] ecs:SubmitTaskStateChange */
	static readonly SUBMIT_TASK_STATE_CHANGE = "ecs:SubmitTaskStateChange";
	/** [Tagging] ecs:TagResource */
	static readonly TAG_RESOURCE = "ecs:TagResource";
	/** [Tagging] ecs:UntagResource */
	static readonly UNTAG_RESOURCE = "ecs:UntagResource";
	/** [Write] ecs:UpdateCapacityProvider */
	static readonly UPDATE_CAPACITY_PROVIDER = "ecs:UpdateCapacityProvider";
	/** [Write] ecs:UpdateCluster */
	static readonly UPDATE_CLUSTER = "ecs:UpdateCluster";
	/** [Write] ecs:UpdateClusterSettings */
	static readonly UPDATE_CLUSTER_SETTINGS = "ecs:UpdateClusterSettings";
	/** [Write] ecs:UpdateContainerAgent */
	static readonly UPDATE_CONTAINER_AGENT = "ecs:UpdateContainerAgent";
	/** [Write] ecs:UpdateContainerInstancesState */
	static readonly UPDATE_CONTAINER_INSTANCES_STATE =
		"ecs:UpdateContainerInstancesState";
	/** [Write] ecs:UpdateDaemon */
	static readonly UPDATE_DAEMON = "ecs:UpdateDaemon";
	/** [Write] ecs:UpdateExpressGatewayService */
	static readonly UPDATE_EXPRESS_GATEWAY_SERVICE =
		"ecs:UpdateExpressGatewayService";
	/** [Write] ecs:UpdateService */
	static readonly UPDATE_SERVICE = "ecs:UpdateService";
	/** [Write] ecs:UpdateServicePrimaryTaskSet */
	static readonly UPDATE_SERVICE_PRIMARY_TASK_SET =
		"ecs:UpdateServicePrimaryTaskSet";
	/** [Write] ecs:UpdateTaskProtection */
	static readonly UPDATE_TASK_PROTECTION = "ecs:UpdateTaskProtection";
	/** [Write] ecs:UpdateTaskSet */
	static readonly UPDATE_TASK_SET = "ecs:UpdateTaskSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ECSActions.DESCRIBE_CAPACITY_PROVIDERS,
		ECSActions.DESCRIBE_CLUSTERS,
		ECSActions.DESCRIBE_CONTAINER_INSTANCES,
		ECSActions.DESCRIBE_DAEMON,
		ECSActions.DESCRIBE_DAEMON_DEPLOYMENTS,
		ECSActions.DESCRIBE_DAEMON_REVISIONS,
		ECSActions.DESCRIBE_DAEMON_TASK_DEFINITION,
		ECSActions.DESCRIBE_EXPRESS_GATEWAY_SERVICE,
		ECSActions.DESCRIBE_SERVICE_DEPLOYMENTS,
		ECSActions.DESCRIBE_SERVICE_REVISIONS,
		ECSActions.DESCRIBE_SERVICES,
		ECSActions.DESCRIBE_TASK_DEFINITION,
		ECSActions.DESCRIBE_TASK_SETS,
		ECSActions.DESCRIBE_TASKS,
		ECSActions.GET_TASK_PROTECTION,
		ECSActions.LIST_ACCOUNT_SETTINGS,
		ECSActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ECSActions.CONTINUE_SERVICE_DEPLOYMENT,
		ECSActions.CREATE_CAPACITY_PROVIDER,
		ECSActions.CREATE_CLUSTER,
		ECSActions.CREATE_DAEMON,
		ECSActions.CREATE_EXPRESS_GATEWAY_SERVICE,
		ECSActions.CREATE_SERVICE,
		ECSActions.CREATE_TASK_SET,
		ECSActions.DELETE_ACCOUNT_SETTING,
		ECSActions.DELETE_ATTRIBUTES,
		ECSActions.DELETE_CAPACITY_PROVIDER,
		ECSActions.DELETE_CLUSTER,
		ECSActions.DELETE_DAEMON,
		ECSActions.DELETE_DAEMON_TASK_DEFINITION,
		ECSActions.DELETE_EXPRESS_GATEWAY_SERVICE,
		ECSActions.DELETE_SERVICE,
		ECSActions.DELETE_TASK_DEFINITIONS,
		ECSActions.DELETE_TASK_SET,
		ECSActions.DEREGISTER_CONTAINER_INSTANCE,
		ECSActions.DEREGISTER_TASK_DEFINITION,
		ECSActions.DISCOVER_POLL_ENDPOINT,
		ECSActions.EXECUTE_COMMAND,
		ECSActions.POLL,
		ECSActions.PUT_ACCOUNT_SETTING,
		ECSActions.PUT_ACCOUNT_SETTING_DEFAULT,
		ECSActions.PUT_ATTRIBUTES,
		ECSActions.PUT_CLUSTER_CAPACITY_PROVIDERS,
		ECSActions.PUT_SYSTEM_LOG_EVENTS,
		ECSActions.REGISTER_CONTAINER_INSTANCE,
		ECSActions.REGISTER_DAEMON_TASK_DEFINITION,
		ECSActions.REGISTER_TASK_DEFINITION,
		ECSActions.RUN_TASK,
		ECSActions.START_TASK,
		ECSActions.START_TELEMETRY_SESSION,
		ECSActions.STOP_SERVICE_DEPLOYMENT,
		ECSActions.STOP_TASK,
		ECSActions.SUBMIT_ATTACHMENT_STATE_CHANGES,
		ECSActions.SUBMIT_CONTAINER_STATE_CHANGE,
		ECSActions.SUBMIT_TASK_STATE_CHANGE,
		ECSActions.UPDATE_CAPACITY_PROVIDER,
		ECSActions.UPDATE_CLUSTER,
		ECSActions.UPDATE_CLUSTER_SETTINGS,
		ECSActions.UPDATE_CONTAINER_AGENT,
		ECSActions.UPDATE_CONTAINER_INSTANCES_STATE,
		ECSActions.UPDATE_DAEMON,
		ECSActions.UPDATE_EXPRESS_GATEWAY_SERVICE,
		ECSActions.UPDATE_SERVICE,
		ECSActions.UPDATE_SERVICE_PRIMARY_TASK_SET,
		ECSActions.UPDATE_TASK_PROTECTION,
		ECSActions.UPDATE_TASK_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ECSActions.LIST_ATTRIBUTES,
		ECSActions.LIST_CLUSTERS,
		ECSActions.LIST_CONTAINER_INSTANCES,
		ECSActions.LIST_DAEMON_DEPLOYMENTS,
		ECSActions.LIST_DAEMON_TASK_DEFINITIONS,
		ECSActions.LIST_DAEMONS,
		ECSActions.LIST_SERVICE_DEPLOYMENTS,
		ECSActions.LIST_SERVICES,
		ECSActions.LIST_SERVICES_BY_NAMESPACE,
		ECSActions.LIST_TASK_DEFINITION_FAMILIES,
		ECSActions.LIST_TASK_DEFINITIONS,
		ECSActions.LIST_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ECSActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ECSActions.TAG_RESOURCE,
		ECSActions.UNTAG_RESOURCE,
	];
}

const CapacityProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):capacity-provider/(?<capacityProviderName>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)$",
);
const ContainerInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):container-instance/(?<clusterName>[^:/?]+)/(?<containerInstanceId>[^:/?]+)$",
);
const DaemonArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon/(?<clusterName>[^:/?]+)/(?<daemonName>[^:/?]+)$",
);
const DaemonDeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-deployment/(?<clusterName>[^:/?]+)/(?<daemonName>[^:/?]+)/(?<daemonDeploymentId>[^:/?]+)$",
);
const DaemonRevisionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-revision/(?<clusterName>[^:/?]+)/(?<daemonName>[^:/?]+)/(?<daemonRevisionId>[^:/?]+)$",
);
const DaemonTaskDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-task-definition/(?<daemonTaskDefinitionFamilyName>[^:/?]+):(?<daemonTaskDefinitionRevisionNumber>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service/(?<clusterName>[^:/?]+)/(?<serviceName>[^:/?]+)$",
);
const ServiceDeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service-deployment/(?<clusterName>[^:/?]+)/(?<serviceName>[^:/?]+)/(?<serviceDeploymentId>[^:/?]+)$",
);
const ServiceRevisionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service-revision/(?<clusterName>[^:/?]+)/(?<serviceName>[^:/?]+)/(?<serviceRevisionId>[^:/?]+)$",
);
const TaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task/(?<clusterName>[^:/?]+)/(?<taskId>[^:/?]+)$",
);
const TaskDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task-definition/(?<taskDefinitionFamilyName>[^:/?]+):(?<taskDefinitionRevisionNumber>[^:/?]+)$",
);
const TaskSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task-set/(?<clusterName>[^:/?]+)/(?<serviceName>[^:/?]+)/(?<taskSetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ecs resources.
 */
export class ECSResources {
	/**
	 * Builds an ARN for the capacity-provider resource.
	 */
	static capacityProvider(props: {
		/** The CapacityProviderName component of the ARN. */
		readonly capacityProviderName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:capacity-provider/${props.capacityProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capacity-provider resource.
	 */
	static isValidCapacityProviderArn(arn: string): boolean {
		return CapacityProviderArnRegex.test(arn);
	}

	/**
	 * Parses a capacity-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapacityProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		capacityProviderName: string;
	} {
		const match = CapacityProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capacity-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			capacityProviderName: match.groups!.capacityProviderName,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}`;
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
		clusterName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the container-instance resource.
	 */
	static containerInstance(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ContainerInstanceId component of the ARN. */
		readonly containerInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:container-instance/${props.clusterName}/${props.containerInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the container-instance resource.
	 */
	static isValidContainerInstanceArn(arn: string): boolean {
		return ContainerInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a container-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		containerInstanceId: string;
	} {
		const match = ContainerInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid container-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			containerInstanceId: match.groups!.containerInstanceId,
		};
	}

	/**
	 * Builds an ARN for the daemon resource.
	 */
	static daemon(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DaemonName component of the ARN. */
		readonly daemonName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:daemon/${props.clusterName}/${props.daemonName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the daemon resource.
	 */
	static isValidDaemonArn(arn: string): boolean {
		return DaemonArnRegex.test(arn);
	}

	/**
	 * Parses a daemon ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDaemonArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		daemonName: string;
	} {
		const match = DaemonArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid daemon ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			daemonName: match.groups!.daemonName,
		};
	}

	/**
	 * Builds an ARN for the daemon-deployment resource.
	 */
	static daemonDeployment(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DaemonName component of the ARN. */
		readonly daemonName: string;
		/** The DaemonDeploymentId component of the ARN. */
		readonly daemonDeploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:daemon-deployment/${props.clusterName}/${props.daemonName}/${props.daemonDeploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the daemon-deployment resource.
	 */
	static isValidDaemonDeploymentArn(arn: string): boolean {
		return DaemonDeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a daemon-deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDaemonDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		daemonName: string;
		daemonDeploymentId: string;
	} {
		const match = DaemonDeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid daemon-deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			daemonName: match.groups!.daemonName,
			daemonDeploymentId: match.groups!.daemonDeploymentId,
		};
	}

	/**
	 * Builds an ARN for the daemon-revision resource.
	 */
	static daemonRevision(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DaemonName component of the ARN. */
		readonly daemonName: string;
		/** The DaemonRevisionId component of the ARN. */
		readonly daemonRevisionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:daemon-revision/${props.clusterName}/${props.daemonName}/${props.daemonRevisionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the daemon-revision resource.
	 */
	static isValidDaemonRevisionArn(arn: string): boolean {
		return DaemonRevisionArnRegex.test(arn);
	}

	/**
	 * Parses a daemon-revision ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDaemonRevisionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		daemonName: string;
		daemonRevisionId: string;
	} {
		const match = DaemonRevisionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid daemon-revision ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			daemonName: match.groups!.daemonName,
			daemonRevisionId: match.groups!.daemonRevisionId,
		};
	}

	/**
	 * Builds an ARN for the daemon-task-definition resource.
	 */
	static daemonTaskDefinition(props: {
		/** The DaemonTaskDefinitionFamilyName component of the ARN. */
		readonly daemonTaskDefinitionFamilyName: string;
		/** The DaemonTaskDefinitionRevisionNumber component of the ARN. */
		readonly daemonTaskDefinitionRevisionNumber: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:daemon-task-definition/${props.daemonTaskDefinitionFamilyName}:${props.daemonTaskDefinitionRevisionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the daemon-task-definition resource.
	 */
	static isValidDaemonTaskDefinitionArn(arn: string): boolean {
		return DaemonTaskDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a daemon-task-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDaemonTaskDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		daemonTaskDefinitionFamilyName: string;
		daemonTaskDefinitionRevisionNumber: string;
	} {
		const match = DaemonTaskDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid daemon-task-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			daemonTaskDefinitionFamilyName:
				match.groups!.daemonTaskDefinitionFamilyName,
			daemonTaskDefinitionRevisionNumber:
				match.groups!.daemonTaskDefinitionRevisionNumber,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.clusterName}/${props.serviceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		serviceName: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			serviceName: match.groups!.serviceName,
		};
	}

	/**
	 * Builds an ARN for the service-deployment resource.
	 */
	static serviceDeployment(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** The ServiceDeploymentId component of the ARN. */
		readonly serviceDeploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:service-deployment/${props.clusterName}/${props.serviceName}/${props.serviceDeploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-deployment resource.
	 */
	static isValidServiceDeploymentArn(arn: string): boolean {
		return ServiceDeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a service-deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		serviceName: string;
		serviceDeploymentId: string;
	} {
		const match = ServiceDeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			serviceName: match.groups!.serviceName,
			serviceDeploymentId: match.groups!.serviceDeploymentId,
		};
	}

	/**
	 * Builds an ARN for the service-revision resource.
	 */
	static serviceRevision(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** The ServiceRevisionId component of the ARN. */
		readonly serviceRevisionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:service-revision/${props.clusterName}/${props.serviceName}/${props.serviceRevisionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-revision resource.
	 */
	static isValidServiceRevisionArn(arn: string): boolean {
		return ServiceRevisionArnRegex.test(arn);
	}

	/**
	 * Parses a service-revision ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceRevisionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		serviceName: string;
		serviceRevisionId: string;
	} {
		const match = ServiceRevisionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-revision ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			serviceName: match.groups!.serviceName,
			serviceRevisionId: match.groups!.serviceRevisionId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:task/${props.clusterName}/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task resource.
	 */
	static isValidTaskArn(arn: string): boolean {
		return TaskArnRegex.test(arn);
	}

	/**
	 * Parses a task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		taskId: string;
	} {
		const match = TaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the task-definition resource.
	 */
	static taskDefinition(props: {
		/** The TaskDefinitionFamilyName component of the ARN. */
		readonly taskDefinitionFamilyName: string;
		/** The TaskDefinitionRevisionNumber component of the ARN. */
		readonly taskDefinitionRevisionNumber: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:task-definition/${props.taskDefinitionFamilyName}:${props.taskDefinitionRevisionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task-definition resource.
	 */
	static isValidTaskDefinitionArn(arn: string): boolean {
		return TaskDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a task-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		taskDefinitionFamilyName: string;
		taskDefinitionRevisionNumber: string;
	} {
		const match = TaskDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			taskDefinitionFamilyName: match.groups!.taskDefinitionFamilyName,
			taskDefinitionRevisionNumber: match.groups!.taskDefinitionRevisionNumber,
		};
	}

	/**
	 * Builds an ARN for the task-set resource.
	 */
	static taskSet(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** The TaskSetId component of the ARN. */
		readonly taskSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:task-set/${props.clusterName}/${props.serviceName}/${props.taskSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task-set resource.
	 */
	static isValidTaskSetArn(arn: string): boolean {
		return TaskSetArnRegex.test(arn);
	}

	/**
	 * Parses a task-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		serviceName: string;
		taskSetId: string;
	} {
		const match = TaskSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			serviceName: match.groups!.serviceName,
			taskSetId: match.groups!.taskSetId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ecs.
 */
export class ECSOperations {
	/** IAM actions required for the ContinueServiceDeployment API call. */
	static readonly CONTINUE_SERVICE_DEPLOYMENT: string[] = [
		"ecs:ContinueServiceDeployment",
	];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CREATE_CAPACITY_PROVIDER: string[] = [
		"ecs:CreateCapacityProvider",
		"iam:PassRole",
		"ecs:PutClusterCapacityProviders",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"ecs:CreateCluster",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateDaemon API call. */
	static readonly CREATE_DAEMON: string[] = [
		"ecs:CreateDaemon",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateExpressGatewayService API call. */
	static readonly CREATE_EXPRESS_GATEWAY_SERVICE: string[] = [
		"ecs:CreateCluster",
		"ecs:CreateExpressGatewayService",
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"ecs:CreateService",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateTaskSet API call. */
	static readonly CREATE_TASK_SET: string[] = [
		"ecs:CreateTaskSet",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the DeleteAccountSetting API call. */
	static readonly DELETE_ACCOUNT_SETTING: string[] = [
		"ecs:DeleteAccountSetting",
	];
	/** IAM actions required for the DeleteAttributes API call. */
	static readonly DELETE_ATTRIBUTES: string[] = ["ecs:DeleteAttributes"];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DELETE_CAPACITY_PROVIDER: string[] = [
		"ecs:DeleteCapacityProvider",
		"ecs:PutClusterCapacityProviders",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["ecs:DeleteCluster"];
	/** IAM actions required for the DeleteDaemon API call. */
	static readonly DELETE_DAEMON: string[] = ["ecs:DeleteDaemon"];
	/** IAM actions required for the DeleteDaemonTaskDefinition API call. */
	static readonly DELETE_DAEMON_TASK_DEFINITION: string[] = [
		"ecs:DeleteDaemonTaskDefinition",
	];
	/** IAM actions required for the DeleteExpressGatewayService API call. */
	static readonly DELETE_EXPRESS_GATEWAY_SERVICE: string[] = [
		"ecs:DeleteExpressGatewayService",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["ecs:DeleteService"];
	/** IAM actions required for the DeleteTaskDefinitions API call. */
	static readonly DELETE_TASK_DEFINITIONS: string[] = [
		"ecs:DeleteTaskDefinitions",
	];
	/** IAM actions required for the DeleteTaskSet API call. */
	static readonly DELETE_TASK_SET: string[] = ["ecs:DeleteTaskSet"];
	/** IAM actions required for the DeregisterContainerInstance API call. */
	static readonly DEREGISTER_CONTAINER_INSTANCE: string[] = [
		"ecs:DeregisterContainerInstance",
	];
	/** IAM actions required for the DeregisterTaskDefinition API call. */
	static readonly DEREGISTER_TASK_DEFINITION: string[] = [
		"ecs:DeregisterTaskDefinition",
	];
	/** IAM actions required for the DescribeCapacityProviders API call. */
	static readonly DESCRIBE_CAPACITY_PROVIDERS: string[] = [
		"ecs:DescribeCapacityProviders",
	];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DESCRIBE_CLUSTERS: string[] = ["ecs:DescribeClusters"];
	/** IAM actions required for the DescribeContainerInstances API call. */
	static readonly DESCRIBE_CONTAINER_INSTANCES: string[] = [
		"ecs:DescribeContainerInstances",
	];
	/** IAM actions required for the DescribeDaemon API call. */
	static readonly DESCRIBE_DAEMON: string[] = ["ecs:DescribeDaemon"];
	/** IAM actions required for the DescribeDaemonDeployments API call. */
	static readonly DESCRIBE_DAEMON_DEPLOYMENTS: string[] = [
		"ecs:DescribeDaemonDeployments",
	];
	/** IAM actions required for the DescribeDaemonRevisions API call. */
	static readonly DESCRIBE_DAEMON_REVISIONS: string[] = [
		"ecs:DescribeDaemonRevisions",
	];
	/** IAM actions required for the DescribeDaemonTaskDefinition API call. */
	static readonly DESCRIBE_DAEMON_TASK_DEFINITION: string[] = [
		"ecs:DescribeDaemonTaskDefinition",
	];
	/** IAM actions required for the DescribeExpressGatewayService API call. */
	static readonly DESCRIBE_EXPRESS_GATEWAY_SERVICE: string[] = [
		"ecs:DescribeExpressGatewayService",
	];
	/** IAM actions required for the DescribeServiceDeployments API call. */
	static readonly DESCRIBE_SERVICE_DEPLOYMENTS: string[] = [
		"ecs:DescribeServiceDeployments",
	];
	/** IAM actions required for the DescribeServiceRevisions API call. */
	static readonly DESCRIBE_SERVICE_REVISIONS: string[] = [
		"ecs:DescribeServiceRevisions",
	];
	/** IAM actions required for the DescribeServices API call. */
	static readonly DESCRIBE_SERVICES: string[] = ["ecs:DescribeServices"];
	/** IAM actions required for the DescribeTaskDefinition API call. */
	static readonly DESCRIBE_TASK_DEFINITION: string[] = [
		"ecs:DescribeTaskDefinition",
	];
	/** IAM actions required for the DescribeTaskSets API call. */
	static readonly DESCRIBE_TASK_SETS: string[] = ["ecs:DescribeTaskSets"];
	/** IAM actions required for the DescribeTasks API call. */
	static readonly DESCRIBE_TASKS: string[] = ["ecs:DescribeTasks"];
	/** IAM actions required for the DiscoverPollEndpoint API call. */
	static readonly DISCOVER_POLL_ENDPOINT: string[] = [
		"ecs:DiscoverPollEndpoint",
	];
	/** IAM actions required for the ExecuteCommand API call. */
	static readonly EXECUTE_COMMAND: string[] = ["ecs:ExecuteCommand"];
	/** IAM actions required for the GetTaskProtection API call. */
	static readonly GET_TASK_PROTECTION: string[] = ["ecs:GetTaskProtection"];
	/** IAM actions required for the ListAccountSettings API call. */
	static readonly LIST_ACCOUNT_SETTINGS: string[] = ["ecs:ListAccountSettings"];
	/** IAM actions required for the ListAttributes API call. */
	static readonly LIST_ATTRIBUTES: string[] = ["ecs:ListAttributes"];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["ecs:ListClusters"];
	/** IAM actions required for the ListContainerInstances API call. */
	static readonly LIST_CONTAINER_INSTANCES: string[] = [
		"ecs:ListContainerInstances",
	];
	/** IAM actions required for the ListDaemonDeployments API call. */
	static readonly LIST_DAEMON_DEPLOYMENTS: string[] = [
		"ecs:ListDaemonDeployments",
	];
	/** IAM actions required for the ListDaemonTaskDefinitions API call. */
	static readonly LIST_DAEMON_TASK_DEFINITIONS: string[] = [
		"ecs:ListDaemonTaskDefinitions",
	];
	/** IAM actions required for the ListDaemons API call. */
	static readonly LIST_DAEMONS: string[] = ["ecs:ListDaemons"];
	/** IAM actions required for the ListServiceDeployments API call. */
	static readonly LIST_SERVICE_DEPLOYMENTS: string[] = [
		"ecs:ListServiceDeployments",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["ecs:ListServices"];
	/** IAM actions required for the ListServicesByNamespace API call. */
	static readonly LIST_SERVICES_BY_NAMESPACE: string[] = [
		"ecs:ListServicesByNamespace",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ecs:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskDefinitionFamilies API call. */
	static readonly LIST_TASK_DEFINITION_FAMILIES: string[] = [
		"ecs:ListTaskDefinitionFamilies",
	];
	/** IAM actions required for the ListTaskDefinitions API call. */
	static readonly LIST_TASK_DEFINITIONS: string[] = ["ecs:ListTaskDefinitions"];
	/** IAM actions required for the ListTasks API call. */
	static readonly LIST_TASKS: string[] = ["ecs:ListTasks"];
	/** IAM actions required for the PutAccountSetting API call. */
	static readonly PUT_ACCOUNT_SETTING: string[] = ["ecs:PutAccountSetting"];
	/** IAM actions required for the PutAccountSettingDefault API call. */
	static readonly PUT_ACCOUNT_SETTING_DEFAULT: string[] = [
		"ecs:PutAccountSettingDefault",
	];
	/** IAM actions required for the PutAttributes API call. */
	static readonly PUT_ATTRIBUTES: string[] = ["ecs:PutAttributes"];
	/** IAM actions required for the PutClusterCapacityProviders API call. */
	static readonly PUT_CLUSTER_CAPACITY_PROVIDERS: string[] = [
		"ecs:PutClusterCapacityProviders",
	];
	/** IAM actions required for the RegisterContainerInstance API call. */
	static readonly REGISTER_CONTAINER_INSTANCE: string[] = [
		"ecs:RegisterContainerInstance",
		"ecs:TagResource",
	];
	/** IAM actions required for the RegisterDaemonTaskDefinition API call. */
	static readonly REGISTER_DAEMON_TASK_DEFINITION: string[] = [
		"iam:PassRole",
		"ecs:RegisterDaemonTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the RegisterTaskDefinition API call. */
	static readonly REGISTER_TASK_DEFINITION: string[] = [
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the RunTask API call. */
	static readonly RUN_TASK: string[] = [
		"iam:PassRole",
		"ecs:RunTask",
		"ecs:TagResource",
	];
	/** IAM actions required for the StartTask API call. */
	static readonly START_TASK: string[] = [
		"iam:PassRole",
		"ecs:StartTask",
		"ecs:TagResource",
	];
	/** IAM actions required for the StopServiceDeployment API call. */
	static readonly STOP_SERVICE_DEPLOYMENT: string[] = [
		"ecs:StopServiceDeployment",
	];
	/** IAM actions required for the StopTask API call. */
	static readonly STOP_TASK: string[] = ["ecs:StopTask"];
	/** IAM actions required for the SubmitAttachmentStateChanges API call. */
	static readonly SUBMIT_ATTACHMENT_STATE_CHANGES: string[] = [
		"ecs:SubmitAttachmentStateChanges",
	];
	/** IAM actions required for the SubmitContainerStateChange API call. */
	static readonly SUBMIT_CONTAINER_STATE_CHANGE: string[] = [
		"ecs:SubmitContainerStateChange",
	];
	/** IAM actions required for the SubmitTaskStateChange API call. */
	static readonly SUBMIT_TASK_STATE_CHANGE: string[] = [
		"ecs:SubmitTaskStateChange",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ecs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ecs:UntagResource"];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UPDATE_CAPACITY_PROVIDER: string[] = [
		"iam:PassRole",
		"ecs:PutClusterCapacityProviders",
		"ecs:UpdateCapacityProvider",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["ecs:UpdateCluster"];
	/** IAM actions required for the UpdateClusterSettings API call. */
	static readonly UPDATE_CLUSTER_SETTINGS: string[] = [
		"ecs:UpdateClusterSettings",
	];
	/** IAM actions required for the UpdateContainerAgent API call. */
	static readonly UPDATE_CONTAINER_AGENT: string[] = [
		"ecs:UpdateContainerAgent",
	];
	/** IAM actions required for the UpdateContainerInstancesState API call. */
	static readonly UPDATE_CONTAINER_INSTANCES_STATE: string[] = [
		"ecs:UpdateContainerInstancesState",
	];
	/** IAM actions required for the UpdateDaemon API call. */
	static readonly UPDATE_DAEMON: string[] = [
		"iam:PassRole",
		"ecs:UpdateDaemon",
	];
	/** IAM actions required for the UpdateExpressGatewayService API call. */
	static readonly UPDATE_EXPRESS_GATEWAY_SERVICE: string[] = [
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:UpdateExpressGatewayService",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = [
		"iam:PassRole",
		"ecs:UpdateService",
	];
	/** IAM actions required for the UpdateServicePrimaryTaskSet API call. */
	static readonly UPDATE_SERVICE_PRIMARY_TASK_SET: string[] = [
		"ecs:UpdateServicePrimaryTaskSet",
	];
	/** IAM actions required for the UpdateTaskProtection API call. */
	static readonly UPDATE_TASK_PROTECTION: string[] = [
		"ecs:UpdateTaskProtection",
	];
	/** IAM actions required for the UpdateTaskSet API call. */
	static readonly UPDATE_TASK_SET: string[] = ["ecs:UpdateTaskSet"];
}

/**
 * Condition key constants and builders for ecs.
 */
export class ECSConditions {
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CREATE_CAPACITY_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:instance-metadata-tags-propagation",
		"ecs:propagate-tags",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:fargate-ephemeral-storage-kms-key",
	];
	/** Condition keys applicable to the CreateDaemon action. */
	static readonly CREATE_DAEMON_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:daemon-task-definition",
		"ecs:enable-ecs-managed-tags",
		"ecs:enable-execute-command",
		"ecs:propagate-tags",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the CreateExpressGatewayService action. */
	static readonly CREATE_EXPRESS_GATEWAY_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:enable-ecs-managed-tags",
		"ecs:propagate-tags",
		"ecs:subnet",
		"ecs:task-cpu",
		"ecs:task-definition",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:auto-assign-public-ip",
		"ecs:capacity-provider",
		"ecs:enable-ebs-volumes",
		"ecs:enable-ecs-managed-tags",
		"ecs:enable-execute-command",
		"ecs:enable-service-connect",
		"ecs:enable-vpc-lattice",
		"ecs:namespace",
		"ecs:propagate-tags",
		"ecs:subnet",
		"ecs:task-cpu",
		"ecs:task-definition",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the CreateTaskSet action. */
	static readonly CREATE_TASK_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:cluster",
		"ecs:service",
		"ecs:task-definition",
	];
	/** Condition keys applicable to the DeleteAccountSetting action. */
	static readonly DELETE_ACCOUNT_SETTING_CONDITION_KEYS: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the DeleteAttributes action. */
	static readonly DELETE_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DeleteCapacityProvider action. */
	static readonly DELETE_CAPACITY_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DELETE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DeleteTaskDefinitions action. */
	static readonly DELETE_TASK_DEFINITIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTaskSet action. */
	static readonly DELETE_TASK_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];
	/** Condition keys applicable to the DescribeCapacityProviders action. */
	static readonly DESCRIBE_CAPACITY_PROVIDERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeContainerInstances action. */
	static readonly DESCRIBE_CONTAINER_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DescribeServices action. */
	static readonly DESCRIBE_SERVICES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DescribeTaskSets action. */
	static readonly DESCRIBE_TASK_SETS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];
	/** Condition keys applicable to the DescribeTasks action. */
	static readonly DESCRIBE_TASKS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the ExecuteCommand action. */
	static readonly EXECUTE_COMMAND_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:container-name",
		"ecs:task",
	];
	/** Condition keys applicable to the GetTaskProtection action. */
	static readonly GET_TASK_PROTECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the ListDaemons action. */
	static readonly LIST_DAEMONS_CONDITION_KEYS: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the ListServices action. */
	static readonly LIST_SERVICES_CONDITION_KEYS: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the ListServicesByNamespace action. */
	static readonly LIST_SERVICES_BY_NAMESPACE_CONDITION_KEYS: string[] = [
		"ecs:namespace",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTasks action. */
	static readonly LIST_TASKS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the Poll action. */
	static readonly POLL_CONDITION_KEYS: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the PutAccountSetting action. */
	static readonly PUT_ACCOUNT_SETTING_CONDITION_KEYS: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the PutAccountSettingDefault action. */
	static readonly PUT_ACCOUNT_SETTING_DEFAULT_CONDITION_KEYS: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the PutAttributes action. */
	static readonly PUT_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the PutClusterCapacityProviders action. */
	static readonly PUT_CLUSTER_CAPACITY_PROVIDERS_CONDITION_KEYS: string[] = [
		"ecs:capacity-provider",
	];
	/** Condition keys applicable to the RegisterContainerInstance action. */
	static readonly REGISTER_CONTAINER_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterDaemonTaskDefinition action. */
	static readonly REGISTER_DAEMON_TASK_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:privileged",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the RegisterTaskDefinition action. */
	static readonly REGISTER_TASK_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:compute-compatibility",
		"ecs:privileged",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the RunTask action. */
	static readonly RUN_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:cluster",
		"ecs:enable-ebs-volumes",
		"ecs:enable-execute-command",
	];
	/** Condition keys applicable to the StartTask action. */
	static readonly START_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:cluster",
		"ecs:container-instances",
		"ecs:enable-ebs-volumes",
		"ecs:enable-execute-command",
	];
	/** Condition keys applicable to the StartTelemetrySession action. */
	static readonly START_TELEMETRY_SESSION_CONDITION_KEYS: string[] = [
		"ecs:cluster",
	];
	/** Condition keys applicable to the StopTask action. */
	static readonly STOP_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCapacityProvider action. */
	static readonly UPDATE_CAPACITY_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:instance-metadata-tags-propagation",
		"ecs:propagate-tags",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"ecs:fargate-ephemeral-storage-kms-key",
	];
	/** Condition keys applicable to the UpdateContainerAgent action. */
	static readonly UPDATE_CONTAINER_AGENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateContainerInstancesState action. */
	static readonly UPDATE_CONTAINER_INSTANCES_STATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateDaemon action. */
	static readonly UPDATE_DAEMON_CONDITION_KEYS: string[] = [
		"ecs:capacity-provider",
		"ecs:daemon-task-definition",
		"ecs:enable-ecs-managed-tags",
		"ecs:enable-execute-command",
		"ecs:propagate-tags",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the UpdateExpressGatewayService action. */
	static readonly UPDATE_EXPRESS_GATEWAY_SERVICE_CONDITION_KEYS: string[] = [
		"ecs:enable-ecs-managed-tags",
		"ecs:propagate-tags",
		"ecs:subnet",
		"ecs:task-cpu",
		"ecs:task-definition",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UPDATE_SERVICE_CONDITION_KEYS: string[] = [
		"ecs:auto-assign-public-ip",
		"ecs:capacity-provider",
		"ecs:enable-ebs-volumes",
		"ecs:enable-ecs-managed-tags",
		"ecs:enable-execute-command",
		"ecs:enable-service-connect",
		"ecs:enable-vpc-lattice",
		"ecs:namespace",
		"ecs:propagate-tags",
		"ecs:subnet",
		"ecs:task-cpu",
		"ecs:task-definition",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the UpdateServicePrimaryTaskSet action. */
	static readonly UPDATE_SERVICE_PRIMARY_TASK_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateTaskProtection action. */
	static readonly UPDATE_TASK_PROTECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateTaskSet action. */
	static readonly UPDATE_TASK_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: ecs:CreateAction (String) */
	static readonly CREATE_ACTION = "ecs:CreateAction";
	/** Condition key: ecs:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ecs:ResourceTag/${TagKey}";
	/** Condition key: ecs:account-setting (String) */
	static readonly ACCOUNT_SETTING = "ecs:account-setting";
	/** Condition key: ecs:auto-assign-public-ip (Bool) */
	static readonly AUTO_ASSIGN_PUBLIC_IP = "ecs:auto-assign-public-ip";
	/** Condition key: ecs:capacity-provider (ArrayOfARN) */
	static readonly CAPACITY_PROVIDER = "ecs:capacity-provider";
	/** Condition key: ecs:cluster (ARN) */
	static readonly CLUSTER = "ecs:cluster";
	/** Condition key: ecs:compute-compatibility (ArrayOfString) */
	static readonly COMPUTE_COMPATIBILITY = "ecs:compute-compatibility";
	/** Condition key: ecs:container-instances (ARN) */
	static readonly CONTAINER_INSTANCES = "ecs:container-instances";
	/** Condition key: ecs:container-name (String) */
	static readonly CONTAINER_NAME = "ecs:container-name";
	/** Condition key: ecs:daemon (ARN) */
	static readonly DAEMON = "ecs:daemon";
	/** Condition key: ecs:daemon-task-definition (ARN) */
	static readonly DAEMON_TASK_DEFINITION = "ecs:daemon-task-definition";
	/** Condition key: ecs:enable-ebs-volumes (String) */
	static readonly ENABLE_EBS_VOLUMES = "ecs:enable-ebs-volumes";
	/** Condition key: ecs:enable-ecs-managed-tags (Bool) */
	static readonly ENABLE_ECS_MANAGED_TAGS = "ecs:enable-ecs-managed-tags";
	/** Condition key: ecs:enable-execute-command (String) */
	static readonly ENABLE_EXECUTE_COMMAND = "ecs:enable-execute-command";
	/** Condition key: ecs:enable-service-connect (String) */
	static readonly ENABLE_SERVICE_CONNECT = "ecs:enable-service-connect";
	/** Condition key: ecs:enable-vpc-lattice (String) */
	static readonly ENABLE_VPC_LATTICE = "ecs:enable-vpc-lattice";
	/** Condition key: ecs:fargate-ephemeral-storage-kms-key (String) */
	static readonly FARGATE_EPHEMERAL_STORAGE_KMS_KEY =
		"ecs:fargate-ephemeral-storage-kms-key";
	/** Condition key: ecs:gateway (ARN) */
	static readonly GATEWAY = "ecs:gateway";
	/** Condition key: ecs:instance-metadata-tags-propagation (Bool) */
	static readonly INSTANCE_METADATA_TAGS_PROPAGATION =
		"ecs:instance-metadata-tags-propagation";
	/** Condition key: ecs:namespace (ARN) */
	static readonly NAMESPACE = "ecs:namespace";
	/** Condition key: ecs:privileged (String) */
	static readonly PRIVILEGED = "ecs:privileged";
	/** Condition key: ecs:propagate-tags (String) */
	static readonly PROPAGATE_TAGS = "ecs:propagate-tags";
	/** Condition key: ecs:service (ARN) */
	static readonly SERVICE = "ecs:service";
	/** Condition key: ecs:subnet (ArrayOfString) */
	static readonly SUBNET = "ecs:subnet";
	/** Condition key: ecs:task (ARN) */
	static readonly TASK = "ecs:task";
	/** Condition key: ecs:task-cpu (Numeric) */
	static readonly TASK_CPU = "ecs:task-cpu";
	/** Condition key: ecs:task-definition (ARN) */
	static readonly TASK_DEFINITION = "ecs:task-definition";
	/** Condition key: ecs:task-memory (Numeric) */
	static readonly TASK_MEMORY = "ecs:task-memory";

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
	 * Generates a condition block for `ecs:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `ecs:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `ecs:account-setting`.
	 */
	static accountSetting(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:account-setting": value } };
	}

	/**
	 * Generates a condition block for `ecs:auto-assign-public-ip`.
	 */
	static autoAssignPublicIP(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ecs:auto-assign-public-ip": value } };
	}

	/**
	 * Generates a condition block for `ecs:capacity-provider`.
	 */
	static capacityProvider(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "ecs:capacity-provider": values } };
	}

	/**
	 * Generates a condition block for `ecs:cluster`.
	 */
	static cluster(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:cluster": value } };
	}

	/**
	 * Generates a condition block for `ecs:compute-compatibility`.
	 */
	static computeCompatibility(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "ecs:compute-compatibility": values },
		};
	}

	/**
	 * Generates a condition block for `ecs:container-instances`.
	 */
	static containerInstances(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:container-instances": value } };
	}

	/**
	 * Generates a condition block for `ecs:container-name`.
	 */
	static containerName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:container-name": value } };
	}

	/**
	 * Generates a condition block for `ecs:daemon`.
	 */
	static daemon(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:daemon": value } };
	}

	/**
	 * Generates a condition block for `ecs:daemon-task-definition`.
	 */
	static daemonTaskDefinition(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:daemon-task-definition": value } };
	}

	/**
	 * Generates a condition block for `ecs:enable-ebs-volumes`.
	 */
	static enableEBSVolumes(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:enable-ebs-volumes": value } };
	}

	/**
	 * Generates a condition block for `ecs:enable-ecs-managed-tags`.
	 */
	static enableECSManagedTags(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ecs:enable-ecs-managed-tags": value } };
	}

	/**
	 * Generates a condition block for `ecs:enable-execute-command`.
	 */
	static enableExecuteCommand(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:enable-execute-command": value } };
	}

	/**
	 * Generates a condition block for `ecs:enable-service-connect`.
	 */
	static enableServiceConnect(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:enable-service-connect": value } };
	}

	/**
	 * Generates a condition block for `ecs:enable-vpc-lattice`.
	 */
	static enableVPCLattice(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:enable-vpc-lattice": value } };
	}

	/**
	 * Generates a condition block for `ecs:fargate-ephemeral-storage-kms-key`.
	 */
	static fargateEphemeralStorageKMSKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:fargate-ephemeral-storage-kms-key": value } };
	}

	/**
	 * Generates a condition block for `ecs:gateway`.
	 */
	static gateway(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:gateway": value } };
	}

	/**
	 * Generates a condition block for `ecs:instance-metadata-tags-propagation`.
	 */
	static instanceMetadataTagsPropagation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ecs:instance-metadata-tags-propagation": value } };
	}

	/**
	 * Generates a condition block for `ecs:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:namespace": value } };
	}

	/**
	 * Generates a condition block for `ecs:privileged`.
	 */
	static privileged(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:privileged": value } };
	}

	/**
	 * Generates a condition block for `ecs:propagate-tags`.
	 */
	static propagateTags(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecs:propagate-tags": value } };
	}

	/**
	 * Generates a condition block for `ecs:service`.
	 */
	static service(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:service": value } };
	}

	/**
	 * Generates a condition block for `ecs:subnet`.
	 */
	static subnet(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ecs:subnet": values } };
	}

	/**
	 * Generates a condition block for `ecs:task`.
	 */
	static task(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:task": value } };
	}

	/**
	 * Generates a condition block for `ecs:task-cpu`.
	 */
	static taskCpu(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "ecs:task-cpu": value } };
	}

	/**
	 * Generates a condition block for `ecs:task-definition`.
	 */
	static taskDefinition(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ecs:task-definition": value } };
	}

	/**
	 * Generates a condition block for `ecs:task-memory`.
	 */
	static taskMemory(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "ecs:task-memory": value } };
	}
}
