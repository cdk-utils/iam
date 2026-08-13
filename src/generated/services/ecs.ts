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
	static readonly AllowVendedLogDeliveryForResource =
		"ecs:AllowVendedLogDeliveryForResource";
	/** [Write] ecs:ContinueServiceDeployment */
	static readonly ContinueServiceDeployment = "ecs:ContinueServiceDeployment";
	/** [Write] ecs:CreateCapacityProvider */
	static readonly CreateCapacityProvider = "ecs:CreateCapacityProvider";
	/** [Write] ecs:CreateCluster */
	static readonly CreateCluster = "ecs:CreateCluster";
	/** [Write] ecs:CreateDaemon */
	static readonly CreateDaemon = "ecs:CreateDaemon";
	/** [Write] ecs:CreateExpressGatewayService */
	static readonly CreateExpressGatewayService =
		"ecs:CreateExpressGatewayService";
	/** [Write] ecs:CreateService */
	static readonly CreateService = "ecs:CreateService";
	/** [Write] ecs:CreateTaskSet */
	static readonly CreateTaskSet = "ecs:CreateTaskSet";
	/** [Write] ecs:DeleteAccountSetting */
	static readonly DeleteAccountSetting = "ecs:DeleteAccountSetting";
	/** [Write] ecs:DeleteAttributes */
	static readonly DeleteAttributes = "ecs:DeleteAttributes";
	/** [Write] ecs:DeleteCapacityProvider */
	static readonly DeleteCapacityProvider = "ecs:DeleteCapacityProvider";
	/** [Write] ecs:DeleteCluster */
	static readonly DeleteCluster = "ecs:DeleteCluster";
	/** [Write] ecs:DeleteDaemon */
	static readonly DeleteDaemon = "ecs:DeleteDaemon";
	/** [Write] ecs:DeleteDaemonTaskDefinition */
	static readonly DeleteDaemonTaskDefinition = "ecs:DeleteDaemonTaskDefinition";
	/** [Write] ecs:DeleteExpressGatewayService */
	static readonly DeleteExpressGatewayService =
		"ecs:DeleteExpressGatewayService";
	/** [Write] ecs:DeleteService */
	static readonly DeleteService = "ecs:DeleteService";
	/** [Write] ecs:DeleteTaskDefinitions */
	static readonly DeleteTaskDefinitions = "ecs:DeleteTaskDefinitions";
	/** [Write] ecs:DeleteTaskSet */
	static readonly DeleteTaskSet = "ecs:DeleteTaskSet";
	/** [Write] ecs:DeregisterContainerInstance */
	static readonly DeregisterContainerInstance =
		"ecs:DeregisterContainerInstance";
	/** [Write] ecs:DeregisterTaskDefinition */
	static readonly DeregisterTaskDefinition = "ecs:DeregisterTaskDefinition";
	/** [Read] ecs:DescribeCapacityProviders */
	static readonly DescribeCapacityProviders = "ecs:DescribeCapacityProviders";
	/** [Read] ecs:DescribeClusters */
	static readonly DescribeClusters = "ecs:DescribeClusters";
	/** [Read] ecs:DescribeContainerInstances */
	static readonly DescribeContainerInstances = "ecs:DescribeContainerInstances";
	/** [Read] ecs:DescribeDaemon */
	static readonly DescribeDaemon = "ecs:DescribeDaemon";
	/** [Read] ecs:DescribeDaemonDeployments */
	static readonly DescribeDaemonDeployments = "ecs:DescribeDaemonDeployments";
	/** [Read] ecs:DescribeDaemonRevisions */
	static readonly DescribeDaemonRevisions = "ecs:DescribeDaemonRevisions";
	/** [Read] ecs:DescribeDaemonTaskDefinition */
	static readonly DescribeDaemonTaskDefinition =
		"ecs:DescribeDaemonTaskDefinition";
	/** [Read] ecs:DescribeExpressGatewayService */
	static readonly DescribeExpressGatewayService =
		"ecs:DescribeExpressGatewayService";
	/** [Read] ecs:DescribeServiceDeployments */
	static readonly DescribeServiceDeployments = "ecs:DescribeServiceDeployments";
	/** [Read] ecs:DescribeServiceRevisions */
	static readonly DescribeServiceRevisions = "ecs:DescribeServiceRevisions";
	/** [Read] ecs:DescribeServices */
	static readonly DescribeServices = "ecs:DescribeServices";
	/** [Read] ecs:DescribeTaskDefinition */
	static readonly DescribeTaskDefinition = "ecs:DescribeTaskDefinition";
	/** [Read] ecs:DescribeTaskSets */
	static readonly DescribeTaskSets = "ecs:DescribeTaskSets";
	/** [Read] ecs:DescribeTasks */
	static readonly DescribeTasks = "ecs:DescribeTasks";
	/** [Write] ecs:DiscoverPollEndpoint */
	static readonly DiscoverPollEndpoint = "ecs:DiscoverPollEndpoint";
	/** [Write] ecs:ExecuteCommand */
	static readonly ExecuteCommand = "ecs:ExecuteCommand";
	/** [Read] ecs:GetTaskProtection */
	static readonly actionGetTaskProtection = "ecs:GetTaskProtection";
	/** [Read] ecs:ListAccountSettings */
	static readonly ListAccountSettings = "ecs:ListAccountSettings";
	/** [List] ecs:ListAttributes */
	static readonly ListAttributes = "ecs:ListAttributes";
	/** [List] ecs:ListClusters */
	static readonly ListClusters = "ecs:ListClusters";
	/** [List] ecs:ListContainerInstances */
	static readonly ListContainerInstances = "ecs:ListContainerInstances";
	/** [List] ecs:ListDaemonDeployments */
	static readonly ListDaemonDeployments = "ecs:ListDaemonDeployments";
	/** [List] ecs:ListDaemonTaskDefinitions */
	static readonly ListDaemonTaskDefinitions = "ecs:ListDaemonTaskDefinitions";
	/** [List] ecs:ListDaemons */
	static readonly ListDaemons = "ecs:ListDaemons";
	/** [List] ecs:ListServiceDeployments */
	static readonly ListServiceDeployments = "ecs:ListServiceDeployments";
	/** [List] ecs:ListServices */
	static readonly ListServices = "ecs:ListServices";
	/** [List] ecs:ListServicesByNamespace */
	static readonly ListServicesByNamespace = "ecs:ListServicesByNamespace";
	/** [Read] ecs:ListTagsForResource */
	static readonly ListTagsForResource = "ecs:ListTagsForResource";
	/** [List] ecs:ListTaskDefinitionFamilies */
	static readonly ListTaskDefinitionFamilies = "ecs:ListTaskDefinitionFamilies";
	/** [List] ecs:ListTaskDefinitions */
	static readonly ListTaskDefinitions = "ecs:ListTaskDefinitions";
	/** [List] ecs:ListTasks */
	static readonly ListTasks = "ecs:ListTasks";
	/** [Write] ecs:Poll */
	static readonly Poll = "ecs:Poll";
	/** [Write] ecs:PutAccountSetting */
	static readonly PutAccountSetting = "ecs:PutAccountSetting";
	/** [Write] ecs:PutAccountSettingDefault */
	static readonly PutAccountSettingDefault = "ecs:PutAccountSettingDefault";
	/** [Write] ecs:PutAttributes */
	static readonly PutAttributes = "ecs:PutAttributes";
	/** [Write] ecs:PutClusterCapacityProviders */
	static readonly PutClusterCapacityProviders =
		"ecs:PutClusterCapacityProviders";
	/** [Write] ecs:PutSystemLogEvents */
	static readonly PutSystemLogEvents = "ecs:PutSystemLogEvents";
	/** [Write] ecs:RegisterContainerInstance */
	static readonly RegisterContainerInstance = "ecs:RegisterContainerInstance";
	/** [Write] ecs:RegisterDaemonTaskDefinition */
	static readonly RegisterDaemonTaskDefinition =
		"ecs:RegisterDaemonTaskDefinition";
	/** [Write] ecs:RegisterTaskDefinition */
	static readonly RegisterTaskDefinition = "ecs:RegisterTaskDefinition";
	/** [Write] ecs:RunTask */
	static readonly RunTask = "ecs:RunTask";
	/** [Write] ecs:StartTask */
	static readonly StartTask = "ecs:StartTask";
	/** [Write] ecs:StartTelemetrySession */
	static readonly StartTelemetrySession = "ecs:StartTelemetrySession";
	/** [Write] ecs:StopServiceDeployment */
	static readonly StopServiceDeployment = "ecs:StopServiceDeployment";
	/** [Write] ecs:StopTask */
	static readonly StopTask = "ecs:StopTask";
	/** [Write] ecs:SubmitAttachmentStateChanges */
	static readonly SubmitAttachmentStateChanges =
		"ecs:SubmitAttachmentStateChanges";
	/** [Write] ecs:SubmitContainerStateChange */
	static readonly SubmitContainerStateChange = "ecs:SubmitContainerStateChange";
	/** [Write] ecs:SubmitTaskStateChange */
	static readonly SubmitTaskStateChange = "ecs:SubmitTaskStateChange";
	/** [Tagging] ecs:TagResource */
	static readonly TagResource = "ecs:TagResource";
	/** [Tagging] ecs:UntagResource */
	static readonly UntagResource = "ecs:UntagResource";
	/** [Write] ecs:UpdateCapacityProvider */
	static readonly UpdateCapacityProvider = "ecs:UpdateCapacityProvider";
	/** [Write] ecs:UpdateCluster */
	static readonly UpdateCluster = "ecs:UpdateCluster";
	/** [Write] ecs:UpdateClusterSettings */
	static readonly UpdateClusterSettings = "ecs:UpdateClusterSettings";
	/** [Write] ecs:UpdateContainerAgent */
	static readonly UpdateContainerAgent = "ecs:UpdateContainerAgent";
	/** [Write] ecs:UpdateContainerInstancesState */
	static readonly UpdateContainerInstancesState =
		"ecs:UpdateContainerInstancesState";
	/** [Write] ecs:UpdateDaemon */
	static readonly UpdateDaemon = "ecs:UpdateDaemon";
	/** [Write] ecs:UpdateExpressGatewayService */
	static readonly UpdateExpressGatewayService =
		"ecs:UpdateExpressGatewayService";
	/** [Write] ecs:UpdateService */
	static readonly UpdateService = "ecs:UpdateService";
	/** [Write] ecs:UpdateServicePrimaryTaskSet */
	static readonly UpdateServicePrimaryTaskSet =
		"ecs:UpdateServicePrimaryTaskSet";
	/** [Write] ecs:UpdateTaskProtection */
	static readonly UpdateTaskProtection = "ecs:UpdateTaskProtection";
	/** [Write] ecs:UpdateTaskSet */
	static readonly UpdateTaskSet = "ecs:UpdateTaskSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ECSActions.DescribeCapacityProviders,
		ECSActions.DescribeClusters,
		ECSActions.DescribeContainerInstances,
		ECSActions.DescribeDaemon,
		ECSActions.DescribeDaemonDeployments,
		ECSActions.DescribeDaemonRevisions,
		ECSActions.DescribeDaemonTaskDefinition,
		ECSActions.DescribeExpressGatewayService,
		ECSActions.DescribeServiceDeployments,
		ECSActions.DescribeServiceRevisions,
		ECSActions.DescribeServices,
		ECSActions.DescribeTaskDefinition,
		ECSActions.DescribeTaskSets,
		ECSActions.DescribeTasks,
		ECSActions.actionGetTaskProtection,
		ECSActions.ListAccountSettings,
		ECSActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ECSActions.ContinueServiceDeployment,
		ECSActions.CreateCapacityProvider,
		ECSActions.CreateCluster,
		ECSActions.CreateDaemon,
		ECSActions.CreateExpressGatewayService,
		ECSActions.CreateService,
		ECSActions.CreateTaskSet,
		ECSActions.DeleteAccountSetting,
		ECSActions.DeleteAttributes,
		ECSActions.DeleteCapacityProvider,
		ECSActions.DeleteCluster,
		ECSActions.DeleteDaemon,
		ECSActions.DeleteDaemonTaskDefinition,
		ECSActions.DeleteExpressGatewayService,
		ECSActions.DeleteService,
		ECSActions.DeleteTaskDefinitions,
		ECSActions.DeleteTaskSet,
		ECSActions.DeregisterContainerInstance,
		ECSActions.DeregisterTaskDefinition,
		ECSActions.DiscoverPollEndpoint,
		ECSActions.ExecuteCommand,
		ECSActions.Poll,
		ECSActions.PutAccountSetting,
		ECSActions.PutAccountSettingDefault,
		ECSActions.PutAttributes,
		ECSActions.PutClusterCapacityProviders,
		ECSActions.PutSystemLogEvents,
		ECSActions.RegisterContainerInstance,
		ECSActions.RegisterDaemonTaskDefinition,
		ECSActions.RegisterTaskDefinition,
		ECSActions.RunTask,
		ECSActions.StartTask,
		ECSActions.StartTelemetrySession,
		ECSActions.StopServiceDeployment,
		ECSActions.StopTask,
		ECSActions.SubmitAttachmentStateChanges,
		ECSActions.SubmitContainerStateChange,
		ECSActions.SubmitTaskStateChange,
		ECSActions.UpdateCapacityProvider,
		ECSActions.UpdateCluster,
		ECSActions.UpdateClusterSettings,
		ECSActions.UpdateContainerAgent,
		ECSActions.UpdateContainerInstancesState,
		ECSActions.UpdateDaemon,
		ECSActions.UpdateExpressGatewayService,
		ECSActions.UpdateService,
		ECSActions.UpdateServicePrimaryTaskSet,
		ECSActions.UpdateTaskProtection,
		ECSActions.UpdateTaskSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ECSActions.ListAttributes,
		ECSActions.ListClusters,
		ECSActions.ListContainerInstances,
		ECSActions.ListDaemonDeployments,
		ECSActions.ListDaemonTaskDefinitions,
		ECSActions.ListDaemons,
		ECSActions.ListServiceDeployments,
		ECSActions.ListServices,
		ECSActions.ListServicesByNamespace,
		ECSActions.ListTaskDefinitionFamilies,
		ECSActions.ListTaskDefinitions,
		ECSActions.ListTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ECSActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ECSActions.TagResource,
		ECSActions.UntagResource,
	];
}

/**
 * Properties for building a capacity-provider ARN.
 */
export interface ECSCapacityProviderArnProps {
	/** The CapacityProviderName component of the ARN. */
	readonly capacityProviderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a capacity-provider ARN.
 */
export interface ECSCapacityProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CapacityProviderName component. */
	readonly capacityProviderName: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface ECSClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
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
export interface ECSClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a container-instance ARN.
 */
export interface ECSContainerInstanceArnProps {
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
}

/**
 * Parsed components of a container-instance ARN.
 */
export interface ECSContainerInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ContainerInstanceId component. */
	readonly containerInstanceId: string;
}

/**
 * Properties for building a daemon ARN.
 */
export interface ECSDaemonArnProps {
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
}

/**
 * Parsed components of a daemon ARN.
 */
export interface ECSDaemonArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DaemonName component. */
	readonly daemonName: string;
}

/**
 * Properties for building a daemon-deployment ARN.
 */
export interface ECSDaemonDeploymentArnProps {
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
}

/**
 * Parsed components of a daemon-deployment ARN.
 */
export interface ECSDaemonDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DaemonName component. */
	readonly daemonName: string;
	/** The DaemonDeploymentId component. */
	readonly daemonDeploymentId: string;
}

/**
 * Properties for building a daemon-revision ARN.
 */
export interface ECSDaemonRevisionArnProps {
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
}

/**
 * Parsed components of a daemon-revision ARN.
 */
export interface ECSDaemonRevisionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DaemonName component. */
	readonly daemonName: string;
	/** The DaemonRevisionId component. */
	readonly daemonRevisionId: string;
}

/**
 * Properties for building a daemon-task-definition ARN.
 */
export interface ECSDaemonTaskDefinitionArnProps {
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
}

/**
 * Parsed components of a daemon-task-definition ARN.
 */
export interface ECSDaemonTaskDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DaemonTaskDefinitionFamilyName component. */
	readonly daemonTaskDefinitionFamilyName: string;
	/** The DaemonTaskDefinitionRevisionNumber component. */
	readonly daemonTaskDefinitionRevisionNumber: string;
}

/**
 * Properties for building a service ARN.
 */
export interface ECSServiceArnProps {
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
}

/**
 * Parsed components of a service ARN.
 */
export interface ECSServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ServiceName component. */
	readonly serviceName: string;
}

/**
 * Properties for building a service-deployment ARN.
 */
export interface ECSServiceDeploymentArnProps {
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
}

/**
 * Parsed components of a service-deployment ARN.
 */
export interface ECSServiceDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The ServiceDeploymentId component. */
	readonly serviceDeploymentId: string;
}

/**
 * Properties for building a service-revision ARN.
 */
export interface ECSServiceRevisionArnProps {
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
}

/**
 * Parsed components of a service-revision ARN.
 */
export interface ECSServiceRevisionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The ServiceRevisionId component. */
	readonly serviceRevisionId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface ECSTaskArnProps {
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
}

/**
 * Parsed components of a task ARN.
 */
export interface ECSTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The TaskId component. */
	readonly taskId: string;
}

/**
 * Properties for building a task-definition ARN.
 */
export interface ECSTaskDefinitionArnProps {
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
}

/**
 * Parsed components of a task-definition ARN.
 */
export interface ECSTaskDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TaskDefinitionFamilyName component. */
	readonly taskDefinitionFamilyName: string;
	/** The TaskDefinitionRevisionNumber component. */
	readonly taskDefinitionRevisionNumber: string;
}

/**
 * Properties for building a task-set ARN.
 */
export interface ECSTaskSetArnProps {
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
}

/**
 * Parsed components of a task-set ARN.
 */
export interface ECSTaskSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The TaskSetId component. */
	readonly taskSetId: string;
}

const CapacityProviderArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):capacity-provider\/(?<capacityProviderName>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)$/;
const ContainerInstanceArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):container-instance\/(?<clusterName>[^:/?]+)\/(?<containerInstanceId>[^:/?]+)$/;
const DaemonArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon\/(?<clusterName>[^:/?]+)\/(?<daemonName>[^:/?]+)$/;
const DaemonDeploymentArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-deployment\/(?<clusterName>[^:/?]+)\/(?<daemonName>[^:/?]+)\/(?<daemonDeploymentId>[^:/?]+)$/;
const DaemonRevisionArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-revision\/(?<clusterName>[^:/?]+)\/(?<daemonName>[^:/?]+)\/(?<daemonRevisionId>[^:/?]+)$/;
const DaemonTaskDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):daemon-task-definition\/(?<daemonTaskDefinitionFamilyName>[^:/?]+):(?<daemonTaskDefinitionRevisionNumber>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service\/(?<clusterName>[^:/?]+)\/(?<serviceName>[^:/?]+)$/;
const ServiceDeploymentArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service-deployment\/(?<clusterName>[^:/?]+)\/(?<serviceName>[^:/?]+)\/(?<serviceDeploymentId>[^:/?]+)$/;
const ServiceRevisionArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):service-revision\/(?<clusterName>[^:/?]+)\/(?<serviceName>[^:/?]+)\/(?<serviceRevisionId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task\/(?<clusterName>[^:/?]+)\/(?<taskId>[^:/?]+)$/;
const TaskDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task-definition\/(?<taskDefinitionFamilyName>[^:/?]+):(?<taskDefinitionRevisionNumber>[^:/?]+)$/;
const TaskSetArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task-set\/(?<clusterName>[^:/?]+)\/(?<serviceName>[^:/?]+)\/(?<taskSetId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ecs resources.
 */
export class ECSResources {
	/**
	 * Builds an ARN for the capacity-provider resource.
	 */
	static capacityProvider(props: ECSCapacityProviderArnProps): string {
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
	static parseCapacityProviderArn(
		arn: string,
	): ECSCapacityProviderArnComponents {
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
	static cluster(props: ECSClusterArnProps): string {
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
	static parseClusterArn(arn: string): ECSClusterArnComponents {
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
	static containerInstance(props: ECSContainerInstanceArnProps): string {
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
	static parseContainerInstanceArn(
		arn: string,
	): ECSContainerInstanceArnComponents {
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
	static daemon(props: ECSDaemonArnProps): string {
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
	static parseDaemonArn(arn: string): ECSDaemonArnComponents {
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
	static daemonDeployment(props: ECSDaemonDeploymentArnProps): string {
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
	static parseDaemonDeploymentArn(
		arn: string,
	): ECSDaemonDeploymentArnComponents {
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
	static daemonRevision(props: ECSDaemonRevisionArnProps): string {
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
	static parseDaemonRevisionArn(arn: string): ECSDaemonRevisionArnComponents {
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
	static daemonTaskDefinition(props: ECSDaemonTaskDefinitionArnProps): string {
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
	static parseDaemonTaskDefinitionArn(
		arn: string,
	): ECSDaemonTaskDefinitionArnComponents {
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
	static service(props: ECSServiceArnProps): string {
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
	static parseServiceArn(arn: string): ECSServiceArnComponents {
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
	static serviceDeployment(props: ECSServiceDeploymentArnProps): string {
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
	static parseServiceDeploymentArn(
		arn: string,
	): ECSServiceDeploymentArnComponents {
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
	static serviceRevision(props: ECSServiceRevisionArnProps): string {
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
	static parseServiceRevisionArn(arn: string): ECSServiceRevisionArnComponents {
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
	static task(props: ECSTaskArnProps): string {
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
	static parseTaskArn(arn: string): ECSTaskArnComponents {
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
	static taskDefinition(props: ECSTaskDefinitionArnProps): string {
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
	static parseTaskDefinitionArn(arn: string): ECSTaskDefinitionArnComponents {
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
	static taskSet(props: ECSTaskSetArnProps): string {
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
	static parseTaskSetArn(arn: string): ECSTaskSetArnComponents {
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
	static readonly ContinueServiceDeployment: string[] = [
		"ecs:ContinueServiceDeployment",
	];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CreateCapacityProvider: string[] = [
		"ecs:CreateCapacityProvider",
		"iam:PassRole",
		"ecs:PutClusterCapacityProviders",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"ecs:CreateCluster",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateDaemon API call. */
	static readonly CreateDaemon: string[] = [
		"ecs:CreateDaemon",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateExpressGatewayService API call. */
	static readonly CreateExpressGatewayService: string[] = [
		"ecs:CreateCluster",
		"ecs:CreateExpressGatewayService",
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"ecs:CreateService",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the CreateTaskSet API call. */
	static readonly CreateTaskSet: string[] = [
		"ecs:CreateTaskSet",
		"iam:PassRole",
		"ecs:TagResource",
	];
	/** IAM actions required for the DeleteAccountSetting API call. */
	static readonly DeleteAccountSetting: string[] = ["ecs:DeleteAccountSetting"];
	/** IAM actions required for the DeleteAttributes API call. */
	static readonly DeleteAttributes: string[] = ["ecs:DeleteAttributes"];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DeleteCapacityProvider: string[] = [
		"ecs:DeleteCapacityProvider",
		"ecs:PutClusterCapacityProviders",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["ecs:DeleteCluster"];
	/** IAM actions required for the DeleteDaemon API call. */
	static readonly DeleteDaemon: string[] = ["ecs:DeleteDaemon"];
	/** IAM actions required for the DeleteDaemonTaskDefinition API call. */
	static readonly DeleteDaemonTaskDefinition: string[] = [
		"ecs:DeleteDaemonTaskDefinition",
	];
	/** IAM actions required for the DeleteExpressGatewayService API call. */
	static readonly DeleteExpressGatewayService: string[] = [
		"ecs:DeleteExpressGatewayService",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = ["ecs:DeleteService"];
	/** IAM actions required for the DeleteTaskDefinitions API call. */
	static readonly DeleteTaskDefinitions: string[] = [
		"ecs:DeleteTaskDefinitions",
	];
	/** IAM actions required for the DeleteTaskSet API call. */
	static readonly DeleteTaskSet: string[] = ["ecs:DeleteTaskSet"];
	/** IAM actions required for the DeregisterContainerInstance API call. */
	static readonly DeregisterContainerInstance: string[] = [
		"ecs:DeregisterContainerInstance",
	];
	/** IAM actions required for the DeregisterTaskDefinition API call. */
	static readonly DeregisterTaskDefinition: string[] = [
		"ecs:DeregisterTaskDefinition",
	];
	/** IAM actions required for the DescribeCapacityProviders API call. */
	static readonly DescribeCapacityProviders: string[] = [
		"ecs:DescribeCapacityProviders",
	];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DescribeClusters: string[] = ["ecs:DescribeClusters"];
	/** IAM actions required for the DescribeContainerInstances API call. */
	static readonly DescribeContainerInstances: string[] = [
		"ecs:DescribeContainerInstances",
	];
	/** IAM actions required for the DescribeDaemon API call. */
	static readonly DescribeDaemon: string[] = ["ecs:DescribeDaemon"];
	/** IAM actions required for the DescribeDaemonDeployments API call. */
	static readonly DescribeDaemonDeployments: string[] = [
		"ecs:DescribeDaemonDeployments",
	];
	/** IAM actions required for the DescribeDaemonRevisions API call. */
	static readonly DescribeDaemonRevisions: string[] = [
		"ecs:DescribeDaemonRevisions",
	];
	/** IAM actions required for the DescribeDaemonTaskDefinition API call. */
	static readonly DescribeDaemonTaskDefinition: string[] = [
		"ecs:DescribeDaemonTaskDefinition",
	];
	/** IAM actions required for the DescribeExpressGatewayService API call. */
	static readonly DescribeExpressGatewayService: string[] = [
		"ecs:DescribeExpressGatewayService",
	];
	/** IAM actions required for the DescribeServiceDeployments API call. */
	static readonly DescribeServiceDeployments: string[] = [
		"ecs:DescribeServiceDeployments",
	];
	/** IAM actions required for the DescribeServiceRevisions API call. */
	static readonly DescribeServiceRevisions: string[] = [
		"ecs:DescribeServiceRevisions",
	];
	/** IAM actions required for the DescribeServices API call. */
	static readonly DescribeServices: string[] = ["ecs:DescribeServices"];
	/** IAM actions required for the DescribeTaskDefinition API call. */
	static readonly DescribeTaskDefinition: string[] = [
		"ecs:DescribeTaskDefinition",
	];
	/** IAM actions required for the DescribeTaskSets API call. */
	static readonly DescribeTaskSets: string[] = ["ecs:DescribeTaskSets"];
	/** IAM actions required for the DescribeTasks API call. */
	static readonly DescribeTasks: string[] = ["ecs:DescribeTasks"];
	/** IAM actions required for the DiscoverPollEndpoint API call. */
	static readonly DiscoverPollEndpoint: string[] = ["ecs:DiscoverPollEndpoint"];
	/** IAM actions required for the ExecuteCommand API call. */
	static readonly ExecuteCommand: string[] = ["ecs:ExecuteCommand"];
	/** IAM actions required for the GetTaskProtection API call. */
	static readonly opGetTaskProtection: string[] = ["ecs:GetTaskProtection"];
	/** IAM actions required for the ListAccountSettings API call. */
	static readonly ListAccountSettings: string[] = ["ecs:ListAccountSettings"];
	/** IAM actions required for the ListAttributes API call. */
	static readonly ListAttributes: string[] = ["ecs:ListAttributes"];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["ecs:ListClusters"];
	/** IAM actions required for the ListContainerInstances API call. */
	static readonly ListContainerInstances: string[] = [
		"ecs:ListContainerInstances",
	];
	/** IAM actions required for the ListDaemonDeployments API call. */
	static readonly ListDaemonDeployments: string[] = [
		"ecs:ListDaemonDeployments",
	];
	/** IAM actions required for the ListDaemonTaskDefinitions API call. */
	static readonly ListDaemonTaskDefinitions: string[] = [
		"ecs:ListDaemonTaskDefinitions",
	];
	/** IAM actions required for the ListDaemons API call. */
	static readonly ListDaemons: string[] = ["ecs:ListDaemons"];
	/** IAM actions required for the ListServiceDeployments API call. */
	static readonly ListServiceDeployments: string[] = [
		"ecs:ListServiceDeployments",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["ecs:ListServices"];
	/** IAM actions required for the ListServicesByNamespace API call. */
	static readonly ListServicesByNamespace: string[] = [
		"ecs:ListServicesByNamespace",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ecs:ListTagsForResource"];
	/** IAM actions required for the ListTaskDefinitionFamilies API call. */
	static readonly ListTaskDefinitionFamilies: string[] = [
		"ecs:ListTaskDefinitionFamilies",
	];
	/** IAM actions required for the ListTaskDefinitions API call. */
	static readonly ListTaskDefinitions: string[] = ["ecs:ListTaskDefinitions"];
	/** IAM actions required for the ListTasks API call. */
	static readonly ListTasks: string[] = ["ecs:ListTasks"];
	/** IAM actions required for the PutAccountSetting API call. */
	static readonly PutAccountSetting: string[] = ["ecs:PutAccountSetting"];
	/** IAM actions required for the PutAccountSettingDefault API call. */
	static readonly PutAccountSettingDefault: string[] = [
		"ecs:PutAccountSettingDefault",
	];
	/** IAM actions required for the PutAttributes API call. */
	static readonly PutAttributes: string[] = ["ecs:PutAttributes"];
	/** IAM actions required for the PutClusterCapacityProviders API call. */
	static readonly PutClusterCapacityProviders: string[] = [
		"ecs:PutClusterCapacityProviders",
	];
	/** IAM actions required for the RegisterContainerInstance API call. */
	static readonly RegisterContainerInstance: string[] = [
		"ecs:RegisterContainerInstance",
		"ecs:TagResource",
	];
	/** IAM actions required for the RegisterDaemonTaskDefinition API call. */
	static readonly RegisterDaemonTaskDefinition: string[] = [
		"iam:PassRole",
		"ecs:RegisterDaemonTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the RegisterTaskDefinition API call. */
	static readonly RegisterTaskDefinition: string[] = [
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:TagResource",
	];
	/** IAM actions required for the RunTask API call. */
	static readonly RunTask: string[] = [
		"iam:PassRole",
		"ecs:RunTask",
		"ecs:TagResource",
	];
	/** IAM actions required for the StartTask API call. */
	static readonly StartTask: string[] = [
		"iam:PassRole",
		"ecs:StartTask",
		"ecs:TagResource",
	];
	/** IAM actions required for the StopServiceDeployment API call. */
	static readonly StopServiceDeployment: string[] = [
		"ecs:StopServiceDeployment",
	];
	/** IAM actions required for the StopTask API call. */
	static readonly StopTask: string[] = ["ecs:StopTask"];
	/** IAM actions required for the SubmitAttachmentStateChanges API call. */
	static readonly SubmitAttachmentStateChanges: string[] = [
		"ecs:SubmitAttachmentStateChanges",
	];
	/** IAM actions required for the SubmitContainerStateChange API call. */
	static readonly SubmitContainerStateChange: string[] = [
		"ecs:SubmitContainerStateChange",
	];
	/** IAM actions required for the SubmitTaskStateChange API call. */
	static readonly SubmitTaskStateChange: string[] = [
		"ecs:SubmitTaskStateChange",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ecs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ecs:UntagResource"];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UpdateCapacityProvider: string[] = [
		"iam:PassRole",
		"ecs:PutClusterCapacityProviders",
		"ecs:UpdateCapacityProvider",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = ["ecs:UpdateCluster"];
	/** IAM actions required for the UpdateClusterSettings API call. */
	static readonly UpdateClusterSettings: string[] = [
		"ecs:UpdateClusterSettings",
	];
	/** IAM actions required for the UpdateContainerAgent API call. */
	static readonly UpdateContainerAgent: string[] = ["ecs:UpdateContainerAgent"];
	/** IAM actions required for the UpdateContainerInstancesState API call. */
	static readonly UpdateContainerInstancesState: string[] = [
		"ecs:UpdateContainerInstancesState",
	];
	/** IAM actions required for the UpdateDaemon API call. */
	static readonly UpdateDaemon: string[] = ["iam:PassRole", "ecs:UpdateDaemon"];
	/** IAM actions required for the UpdateExpressGatewayService API call. */
	static readonly UpdateExpressGatewayService: string[] = [
		"iam:PassRole",
		"ecs:RegisterTaskDefinition",
		"ecs:UpdateExpressGatewayService",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UpdateService: string[] = [
		"iam:PassRole",
		"ecs:UpdateService",
	];
	/** IAM actions required for the UpdateServicePrimaryTaskSet API call. */
	static readonly UpdateServicePrimaryTaskSet: string[] = [
		"ecs:UpdateServicePrimaryTaskSet",
	];
	/** IAM actions required for the UpdateTaskProtection API call. */
	static readonly UpdateTaskProtection: string[] = ["ecs:UpdateTaskProtection"];
	/** IAM actions required for the UpdateTaskSet API call. */
	static readonly UpdateTaskSet: string[] = ["ecs:UpdateTaskSet"];
}

/**
 * Condition key constants and builders for ecs.
 */
export class ECSConditions {
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CreateCapacityProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:instance-metadata-tags-propagation",
		"ecs:propagate-tags",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:fargate-ephemeral-storage-kms-key",
	];
	/** Condition keys applicable to the CreateDaemon action. */
	static readonly CreateDaemonConditionKeys: string[] = [
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
	static readonly CreateExpressGatewayServiceConditionKeys: string[] = [
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
	static readonly CreateServiceConditionKeys: string[] = [
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
	static readonly CreateTaskSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:cluster",
		"ecs:service",
		"ecs:task-definition",
	];
	/** Condition keys applicable to the DeleteAccountSetting action. */
	static readonly DeleteAccountSettingConditionKeys: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the DeleteAttributes action. */
	static readonly DeleteAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DeleteCapacityProvider action. */
	static readonly DeleteCapacityProviderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DeleteServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DeleteTaskDefinitions action. */
	static readonly DeleteTaskDefinitionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTaskSet action. */
	static readonly DeleteTaskSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];
	/** Condition keys applicable to the DescribeCapacityProviders action. */
	static readonly DescribeCapacityProvidersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeContainerInstances action. */
	static readonly DescribeContainerInstancesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DescribeServices action. */
	static readonly DescribeServicesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the DescribeTaskSets action. */
	static readonly DescribeTaskSetsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];
	/** Condition keys applicable to the DescribeTasks action. */
	static readonly DescribeTasksConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the ExecuteCommand action. */
	static readonly ExecuteCommandConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:container-name",
		"ecs:task",
	];
	/** Condition keys applicable to the GetTaskProtection action. */
	static readonly actionGetTaskProtectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the ListDaemons action. */
	static readonly ListDaemonsConditionKeys: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the ListServices action. */
	static readonly ListServicesConditionKeys: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the ListServicesByNamespace action. */
	static readonly ListServicesByNamespaceConditionKeys: string[] = [
		"ecs:namespace",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTasks action. */
	static readonly ListTasksConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the Poll action. */
	static readonly PollConditionKeys: string[] = ["ecs:cluster"];
	/** Condition keys applicable to the PutAccountSetting action. */
	static readonly PutAccountSettingConditionKeys: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the PutAccountSettingDefault action. */
	static readonly PutAccountSettingDefaultConditionKeys: string[] = [
		"ecs:account-setting",
	];
	/** Condition keys applicable to the PutAttributes action. */
	static readonly PutAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the PutClusterCapacityProviders action. */
	static readonly PutClusterCapacityProvidersConditionKeys: string[] = [
		"ecs:capacity-provider",
	];
	/** Condition keys applicable to the RegisterContainerInstance action. */
	static readonly RegisterContainerInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterDaemonTaskDefinition action. */
	static readonly RegisterDaemonTaskDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:privileged",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the RegisterTaskDefinition action. */
	static readonly RegisterTaskDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ecs:compute-compatibility",
		"ecs:privileged",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the RunTask action. */
	static readonly RunTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:capacity-provider",
		"ecs:cluster",
		"ecs:enable-ebs-volumes",
		"ecs:enable-execute-command",
	];
	/** Condition keys applicable to the StartTask action. */
	static readonly StartTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:cluster",
		"ecs:container-instances",
		"ecs:enable-ebs-volumes",
		"ecs:enable-execute-command",
	];
	/** Condition keys applicable to the StartTelemetrySession action. */
	static readonly StartTelemetrySessionConditionKeys: string[] = [
		"ecs:cluster",
	];
	/** Condition keys applicable to the StopTask action. */
	static readonly StopTaskConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ecs:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCapacityProvider action. */
	static readonly UpdateCapacityProviderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:instance-metadata-tags-propagation",
		"ecs:propagate-tags",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UpdateClusterConditionKeys: string[] = [
		"ecs:fargate-ephemeral-storage-kms-key",
	];
	/** Condition keys applicable to the UpdateContainerAgent action. */
	static readonly UpdateContainerAgentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateContainerInstancesState action. */
	static readonly UpdateContainerInstancesStateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateDaemon action. */
	static readonly UpdateDaemonConditionKeys: string[] = [
		"ecs:capacity-provider",
		"ecs:daemon-task-definition",
		"ecs:enable-ecs-managed-tags",
		"ecs:enable-execute-command",
		"ecs:propagate-tags",
		"ecs:task-cpu",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the UpdateExpressGatewayService action. */
	static readonly UpdateExpressGatewayServiceConditionKeys: string[] = [
		"ecs:enable-ecs-managed-tags",
		"ecs:propagate-tags",
		"ecs:subnet",
		"ecs:task-cpu",
		"ecs:task-definition",
		"ecs:task-memory",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UpdateServiceConditionKeys: string[] = [
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
	static readonly UpdateServicePrimaryTaskSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateTaskProtection action. */
	static readonly UpdateTaskProtectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
	];
	/** Condition keys applicable to the UpdateTaskSet action. */
	static readonly UpdateTaskSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ecs:cluster",
		"ecs:service",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
