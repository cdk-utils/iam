// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/deadline.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the deadline service.
 */
export class DeadlineActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "deadline";

	/** [PermissionManagement] deadline:AssociateMemberToFarm */
	static readonly AssociateMemberToFarm = "deadline:AssociateMemberToFarm";
	/** [PermissionManagement] deadline:AssociateMemberToFleet */
	static readonly AssociateMemberToFleet = "deadline:AssociateMemberToFleet";
	/** [PermissionManagement] deadline:AssociateMemberToJob */
	static readonly AssociateMemberToJob = "deadline:AssociateMemberToJob";
	/** [PermissionManagement] deadline:AssociateMemberToQueue */
	static readonly AssociateMemberToQueue = "deadline:AssociateMemberToQueue";
	/** [Write] deadline:AssumeFleetRoleForRead */
	static readonly AssumeFleetRoleForRead = "deadline:AssumeFleetRoleForRead";
	/** [Write] deadline:AssumeFleetRoleForWorker */
	static readonly AssumeFleetRoleForWorker =
		"deadline:AssumeFleetRoleForWorker";
	/** [Write] deadline:AssumeQueueRoleForRead */
	static readonly AssumeQueueRoleForRead = "deadline:AssumeQueueRoleForRead";
	/** [Write] deadline:AssumeQueueRoleForUser */
	static readonly AssumeQueueRoleForUser = "deadline:AssumeQueueRoleForUser";
	/** [Write] deadline:AssumeQueueRoleForWorker */
	static readonly AssumeQueueRoleForWorker =
		"deadline:AssumeQueueRoleForWorker";
	/** [Read] deadline:BatchGetJobEntity */
	static readonly BatchGetJobEntity = "deadline:BatchGetJobEntity";
	/** [Write] deadline:CopyJobTemplate */
	static readonly CopyJobTemplate = "deadline:CopyJobTemplate";
	/** [Write] deadline:CreateBudget */
	static readonly CreateBudget = "deadline:CreateBudget";
	/** [Write] deadline:CreateFarm */
	static readonly CreateFarm = "deadline:CreateFarm";
	/** [Write] deadline:CreateFleet */
	static readonly CreateFleet = "deadline:CreateFleet";
	/** [Write] deadline:CreateJob */
	static readonly CreateJob = "deadline:CreateJob";
	/** [Write] deadline:CreateLicenseEndpoint */
	static readonly CreateLicenseEndpoint = "deadline:CreateLicenseEndpoint";
	/** [Write] deadline:CreateLimit */
	static readonly CreateLimit = "deadline:CreateLimit";
	/** [Write] deadline:CreateMonitor */
	static readonly CreateMonitor = "deadline:CreateMonitor";
	/** [Write] deadline:CreateQueue */
	static readonly CreateQueue = "deadline:CreateQueue";
	/** [Write] deadline:CreateQueueEnvironment */
	static readonly CreateQueueEnvironment = "deadline:CreateQueueEnvironment";
	/** [Write] deadline:CreateQueueFleetAssociation */
	static readonly CreateQueueFleetAssociation =
		"deadline:CreateQueueFleetAssociation";
	/** [Write] deadline:CreateQueueLimitAssociation */
	static readonly CreateQueueLimitAssociation =
		"deadline:CreateQueueLimitAssociation";
	/** [Write] deadline:CreateStorageProfile */
	static readonly CreateStorageProfile = "deadline:CreateStorageProfile";
	/** [Write] deadline:CreateWorker */
	static readonly CreateWorker = "deadline:CreateWorker";
	/** [Write] deadline:DeleteBudget */
	static readonly DeleteBudget = "deadline:DeleteBudget";
	/** [Write] deadline:DeleteFarm */
	static readonly DeleteFarm = "deadline:DeleteFarm";
	/** [Write] deadline:DeleteFleet */
	static readonly DeleteFleet = "deadline:DeleteFleet";
	/** [Write] deadline:DeleteLicenseEndpoint */
	static readonly DeleteLicenseEndpoint = "deadline:DeleteLicenseEndpoint";
	/** [Write] deadline:DeleteLimit */
	static readonly DeleteLimit = "deadline:DeleteLimit";
	/** [Write] deadline:DeleteMeteredProduct */
	static readonly DeleteMeteredProduct = "deadline:DeleteMeteredProduct";
	/** [Write] deadline:DeleteMonitor */
	static readonly DeleteMonitor = "deadline:DeleteMonitor";
	/** [Write] deadline:DeleteQueue */
	static readonly DeleteQueue = "deadline:DeleteQueue";
	/** [Write] deadline:DeleteQueueEnvironment */
	static readonly DeleteQueueEnvironment = "deadline:DeleteQueueEnvironment";
	/** [Write] deadline:DeleteQueueFleetAssociation */
	static readonly DeleteQueueFleetAssociation =
		"deadline:DeleteQueueFleetAssociation";
	/** [Write] deadline:DeleteQueueLimitAssociation */
	static readonly DeleteQueueLimitAssociation =
		"deadline:DeleteQueueLimitAssociation";
	/** [Write] deadline:DeleteStorageProfile */
	static readonly DeleteStorageProfile = "deadline:DeleteStorageProfile";
	/** [Write] deadline:DeleteVolume */
	static readonly DeleteVolume = "deadline:DeleteVolume";
	/** [Write] deadline:DeleteWorker */
	static readonly DeleteWorker = "deadline:DeleteWorker";
	/** [PermissionManagement] deadline:DisassociateMemberFromFarm */
	static readonly DisassociateMemberFromFarm =
		"deadline:DisassociateMemberFromFarm";
	/** [PermissionManagement] deadline:DisassociateMemberFromFleet */
	static readonly DisassociateMemberFromFleet =
		"deadline:DisassociateMemberFromFleet";
	/** [PermissionManagement] deadline:DisassociateMemberFromJob */
	static readonly DisassociateMemberFromJob =
		"deadline:DisassociateMemberFromJob";
	/** [PermissionManagement] deadline:DisassociateMemberFromQueue */
	static readonly DisassociateMemberFromQueue =
		"deadline:DisassociateMemberFromQueue";
	/** [Read] deadline:GetApplicationVersion */
	static readonly actionGetApplicationVersion =
		"deadline:GetApplicationVersion";
	/** [Read] deadline:GetBudget */
	static readonly actionGetBudget = "deadline:GetBudget";
	/** [Read] deadline:GetFarm */
	static readonly actionGetFarm = "deadline:GetFarm";
	/** [Read] deadline:GetFleet */
	static readonly actionGetFleet = "deadline:GetFleet";
	/** [Read] deadline:GetJob */
	static readonly actionGetJob = "deadline:GetJob";
	/** [Read] deadline:GetJobTemplate */
	static readonly actionGetJobTemplate = "deadline:GetJobTemplate";
	/** [Read] deadline:GetLicenseEndpoint */
	static readonly actionGetLicenseEndpoint = "deadline:GetLicenseEndpoint";
	/** [Read] deadline:GetLimit */
	static readonly actionGetLimit = "deadline:GetLimit";
	/** [Read] deadline:GetMonitor */
	static readonly actionGetMonitor = "deadline:GetMonitor";
	/** [Read] deadline:GetMonitorSettings */
	static readonly actionGetMonitorSettings = "deadline:GetMonitorSettings";
	/** [Read] deadline:GetQueue */
	static readonly actionGetQueue = "deadline:GetQueue";
	/** [Read] deadline:GetQueueEnvironment */
	static readonly actionGetQueueEnvironment = "deadline:GetQueueEnvironment";
	/** [Read] deadline:GetQueueFleetAssociation */
	static readonly actionGetQueueFleetAssociation =
		"deadline:GetQueueFleetAssociation";
	/** [Read] deadline:GetQueueLimitAssociation */
	static readonly actionGetQueueLimitAssociation =
		"deadline:GetQueueLimitAssociation";
	/** [Read] deadline:GetSession */
	static readonly actionGetSession = "deadline:GetSession";
	/** [Read] deadline:GetSessionAction */
	static readonly actionGetSessionAction = "deadline:GetSessionAction";
	/** [Read] deadline:GetSessionsStatisticsAggregation */
	static readonly actionGetSessionsStatisticsAggregation =
		"deadline:GetSessionsStatisticsAggregation";
	/** [Read] deadline:GetStep */
	static readonly actionGetStep = "deadline:GetStep";
	/** [Read] deadline:GetStorageProfile */
	static readonly actionGetStorageProfile = "deadline:GetStorageProfile";
	/** [Read] deadline:GetStorageProfileForQueue */
	static readonly actionGetStorageProfileForQueue =
		"deadline:GetStorageProfileForQueue";
	/** [Read] deadline:GetTask */
	static readonly actionGetTask = "deadline:GetTask";
	/** [Read] deadline:GetVolume */
	static readonly actionGetVolume = "deadline:GetVolume";
	/** [Read] deadline:GetWorker */
	static readonly actionGetWorker = "deadline:GetWorker";
	/** [List] deadline:ListAvailableMeteredProducts */
	static readonly ListAvailableMeteredProducts =
		"deadline:ListAvailableMeteredProducts";
	/** [List] deadline:ListBudgets */
	static readonly ListBudgets = "deadline:ListBudgets";
	/** [List] deadline:ListFarmMembers */
	static readonly ListFarmMembers = "deadline:ListFarmMembers";
	/** [List] deadline:ListFarms */
	static readonly ListFarms = "deadline:ListFarms";
	/** [List] deadline:ListFleetMembers */
	static readonly ListFleetMembers = "deadline:ListFleetMembers";
	/** [List] deadline:ListFleets */
	static readonly ListFleets = "deadline:ListFleets";
	/** [List] deadline:ListJobMembers */
	static readonly ListJobMembers = "deadline:ListJobMembers";
	/** [List] deadline:ListJobParameterDefinitions */
	static readonly ListJobParameterDefinitions =
		"deadline:ListJobParameterDefinitions";
	/** [List] deadline:ListJobs */
	static readonly ListJobs = "deadline:ListJobs";
	/** [List] deadline:ListLicenseEndpoints */
	static readonly ListLicenseEndpoints = "deadline:ListLicenseEndpoints";
	/** [List] deadline:ListLimits */
	static readonly ListLimits = "deadline:ListLimits";
	/** [List] deadline:ListMeteredProducts */
	static readonly ListMeteredProducts = "deadline:ListMeteredProducts";
	/** [List] deadline:ListMonitors */
	static readonly ListMonitors = "deadline:ListMonitors";
	/** [List] deadline:ListQueueEnvironments */
	static readonly ListQueueEnvironments = "deadline:ListQueueEnvironments";
	/** [List] deadline:ListQueueFleetAssociations */
	static readonly ListQueueFleetAssociations =
		"deadline:ListQueueFleetAssociations";
	/** [List] deadline:ListQueueLimitAssociations */
	static readonly ListQueueLimitAssociations =
		"deadline:ListQueueLimitAssociations";
	/** [List] deadline:ListQueueMembers */
	static readonly ListQueueMembers = "deadline:ListQueueMembers";
	/** [List] deadline:ListQueues */
	static readonly ListQueues = "deadline:ListQueues";
	/** [List] deadline:ListSessionActions */
	static readonly ListSessionActions = "deadline:ListSessionActions";
	/** [List] deadline:ListSessions */
	static readonly ListSessions = "deadline:ListSessions";
	/** [List] deadline:ListSessionsForWorker */
	static readonly ListSessionsForWorker = "deadline:ListSessionsForWorker";
	/** [List] deadline:ListStepConsumers */
	static readonly ListStepConsumers = "deadline:ListStepConsumers";
	/** [List] deadline:ListStepDependencies */
	static readonly ListStepDependencies = "deadline:ListStepDependencies";
	/** [List] deadline:ListSteps */
	static readonly ListSteps = "deadline:ListSteps";
	/** [List] deadline:ListStorageProfiles */
	static readonly ListStorageProfiles = "deadline:ListStorageProfiles";
	/** [List] deadline:ListStorageProfilesForQueue */
	static readonly ListStorageProfilesForQueue =
		"deadline:ListStorageProfilesForQueue";
	/** [Read] deadline:ListTagsForResource */
	static readonly ListTagsForResource = "deadline:ListTagsForResource";
	/** [List] deadline:ListTasks */
	static readonly ListTasks = "deadline:ListTasks";
	/** [List] deadline:ListVolumes */
	static readonly ListVolumes = "deadline:ListVolumes";
	/** [List] deadline:ListWorkers */
	static readonly ListWorkers = "deadline:ListWorkers";
	/** [Write] deadline:PutMeteredProduct */
	static readonly PutMeteredProduct = "deadline:PutMeteredProduct";
	/** [Read] deadline:SearchJobs */
	static readonly SearchJobs = "deadline:SearchJobs";
	/** [Read] deadline:SearchSteps */
	static readonly SearchSteps = "deadline:SearchSteps";
	/** [Read] deadline:SearchTasks */
	static readonly SearchTasks = "deadline:SearchTasks";
	/** [Read] deadline:SearchWorkers */
	static readonly SearchWorkers = "deadline:SearchWorkers";
	/** [Read] deadline:StartSessionsStatisticsAggregation */
	static readonly StartSessionsStatisticsAggregation =
		"deadline:StartSessionsStatisticsAggregation";
	/** [Tagging] deadline:TagResource */
	static readonly TagResource = "deadline:TagResource";
	/** [Tagging] deadline:UntagResource */
	static readonly UntagResource = "deadline:UntagResource";
	/** [Write] deadline:UpdateBudget */
	static readonly UpdateBudget = "deadline:UpdateBudget";
	/** [Write] deadline:UpdateFarm */
	static readonly UpdateFarm = "deadline:UpdateFarm";
	/** [Write] deadline:UpdateFleet */
	static readonly UpdateFleet = "deadline:UpdateFleet";
	/** [Write] deadline:UpdateJob */
	static readonly UpdateJob = "deadline:UpdateJob";
	/** [Write] deadline:UpdateLimit */
	static readonly UpdateLimit = "deadline:UpdateLimit";
	/** [Write] deadline:UpdateMonitor */
	static readonly UpdateMonitor = "deadline:UpdateMonitor";
	/** [Write] deadline:UpdateMonitorSettings */
	static readonly UpdateMonitorSettings = "deadline:UpdateMonitorSettings";
	/** [Write] deadline:UpdateQueue */
	static readonly UpdateQueue = "deadline:UpdateQueue";
	/** [Write] deadline:UpdateQueueEnvironment */
	static readonly UpdateQueueEnvironment = "deadline:UpdateQueueEnvironment";
	/** [Write] deadline:UpdateQueueFleetAssociation */
	static readonly UpdateQueueFleetAssociation =
		"deadline:UpdateQueueFleetAssociation";
	/** [Write] deadline:UpdateQueueLimitAssociation */
	static readonly UpdateQueueLimitAssociation =
		"deadline:UpdateQueueLimitAssociation";
	/** [Write] deadline:UpdateSession */
	static readonly UpdateSession = "deadline:UpdateSession";
	/** [Write] deadline:UpdateStep */
	static readonly UpdateStep = "deadline:UpdateStep";
	/** [Write] deadline:UpdateStorageProfile */
	static readonly UpdateStorageProfile = "deadline:UpdateStorageProfile";
	/** [Write] deadline:UpdateTask */
	static readonly UpdateTask = "deadline:UpdateTask";
	/** [Write] deadline:UpdateWorker */
	static readonly UpdateWorker = "deadline:UpdateWorker";
	/** [Write] deadline:UpdateWorkerSchedule */
	static readonly UpdateWorkerSchedule = "deadline:UpdateWorkerSchedule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DeadlineActions.BatchGetJobEntity,
		DeadlineActions.actionGetApplicationVersion,
		DeadlineActions.actionGetBudget,
		DeadlineActions.actionGetFarm,
		DeadlineActions.actionGetFleet,
		DeadlineActions.actionGetJob,
		DeadlineActions.actionGetJobTemplate,
		DeadlineActions.actionGetLicenseEndpoint,
		DeadlineActions.actionGetLimit,
		DeadlineActions.actionGetMonitor,
		DeadlineActions.actionGetMonitorSettings,
		DeadlineActions.actionGetQueue,
		DeadlineActions.actionGetQueueEnvironment,
		DeadlineActions.actionGetQueueFleetAssociation,
		DeadlineActions.actionGetQueueLimitAssociation,
		DeadlineActions.actionGetSession,
		DeadlineActions.actionGetSessionAction,
		DeadlineActions.actionGetSessionsStatisticsAggregation,
		DeadlineActions.actionGetStep,
		DeadlineActions.actionGetStorageProfile,
		DeadlineActions.actionGetStorageProfileForQueue,
		DeadlineActions.actionGetTask,
		DeadlineActions.actionGetVolume,
		DeadlineActions.actionGetWorker,
		DeadlineActions.ListTagsForResource,
		DeadlineActions.SearchJobs,
		DeadlineActions.SearchSteps,
		DeadlineActions.SearchTasks,
		DeadlineActions.SearchWorkers,
		DeadlineActions.StartSessionsStatisticsAggregation,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DeadlineActions.AssumeFleetRoleForRead,
		DeadlineActions.AssumeFleetRoleForWorker,
		DeadlineActions.AssumeQueueRoleForRead,
		DeadlineActions.AssumeQueueRoleForUser,
		DeadlineActions.AssumeQueueRoleForWorker,
		DeadlineActions.CopyJobTemplate,
		DeadlineActions.CreateBudget,
		DeadlineActions.CreateFarm,
		DeadlineActions.CreateFleet,
		DeadlineActions.CreateJob,
		DeadlineActions.CreateLicenseEndpoint,
		DeadlineActions.CreateLimit,
		DeadlineActions.CreateMonitor,
		DeadlineActions.CreateQueue,
		DeadlineActions.CreateQueueEnvironment,
		DeadlineActions.CreateQueueFleetAssociation,
		DeadlineActions.CreateQueueLimitAssociation,
		DeadlineActions.CreateStorageProfile,
		DeadlineActions.CreateWorker,
		DeadlineActions.DeleteBudget,
		DeadlineActions.DeleteFarm,
		DeadlineActions.DeleteFleet,
		DeadlineActions.DeleteLicenseEndpoint,
		DeadlineActions.DeleteLimit,
		DeadlineActions.DeleteMeteredProduct,
		DeadlineActions.DeleteMonitor,
		DeadlineActions.DeleteQueue,
		DeadlineActions.DeleteQueueEnvironment,
		DeadlineActions.DeleteQueueFleetAssociation,
		DeadlineActions.DeleteQueueLimitAssociation,
		DeadlineActions.DeleteStorageProfile,
		DeadlineActions.DeleteVolume,
		DeadlineActions.DeleteWorker,
		DeadlineActions.PutMeteredProduct,
		DeadlineActions.UpdateBudget,
		DeadlineActions.UpdateFarm,
		DeadlineActions.UpdateFleet,
		DeadlineActions.UpdateJob,
		DeadlineActions.UpdateLimit,
		DeadlineActions.UpdateMonitor,
		DeadlineActions.UpdateMonitorSettings,
		DeadlineActions.UpdateQueue,
		DeadlineActions.UpdateQueueEnvironment,
		DeadlineActions.UpdateQueueFleetAssociation,
		DeadlineActions.UpdateQueueLimitAssociation,
		DeadlineActions.UpdateSession,
		DeadlineActions.UpdateStep,
		DeadlineActions.UpdateStorageProfile,
		DeadlineActions.UpdateTask,
		DeadlineActions.UpdateWorker,
		DeadlineActions.UpdateWorkerSchedule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DeadlineActions.ListAvailableMeteredProducts,
		DeadlineActions.ListBudgets,
		DeadlineActions.ListFarmMembers,
		DeadlineActions.ListFarms,
		DeadlineActions.ListFleetMembers,
		DeadlineActions.ListFleets,
		DeadlineActions.ListJobMembers,
		DeadlineActions.ListJobParameterDefinitions,
		DeadlineActions.ListJobs,
		DeadlineActions.ListLicenseEndpoints,
		DeadlineActions.ListLimits,
		DeadlineActions.ListMeteredProducts,
		DeadlineActions.ListMonitors,
		DeadlineActions.ListQueueEnvironments,
		DeadlineActions.ListQueueFleetAssociations,
		DeadlineActions.ListQueueLimitAssociations,
		DeadlineActions.ListQueueMembers,
		DeadlineActions.ListQueues,
		DeadlineActions.ListSessionActions,
		DeadlineActions.ListSessions,
		DeadlineActions.ListSessionsForWorker,
		DeadlineActions.ListStepConsumers,
		DeadlineActions.ListStepDependencies,
		DeadlineActions.ListSteps,
		DeadlineActions.ListStorageProfiles,
		DeadlineActions.ListStorageProfilesForQueue,
		DeadlineActions.ListTasks,
		DeadlineActions.ListVolumes,
		DeadlineActions.ListWorkers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		DeadlineActions.AssociateMemberToFarm,
		DeadlineActions.AssociateMemberToFleet,
		DeadlineActions.AssociateMemberToJob,
		DeadlineActions.AssociateMemberToQueue,
		DeadlineActions.DisassociateMemberFromFarm,
		DeadlineActions.DisassociateMemberFromFleet,
		DeadlineActions.DisassociateMemberFromJob,
		DeadlineActions.DisassociateMemberFromQueue,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DeadlineActions.TagResource,
		DeadlineActions.UntagResource,
	];
}

/**
 * Properties for building a budget ARN.
 */
export interface DeadlineBudgetArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The BudgetId component of the ARN. */
	readonly budgetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a budget ARN.
 */
export interface DeadlineBudgetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The BudgetId component. */
	readonly budgetId: string;
}

/**
 * Properties for building a farm ARN.
 */
export interface DeadlineFarmArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a farm ARN.
 */
export interface DeadlineFarmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
}

/**
 * Properties for building a fleet ARN.
 */
export interface DeadlineFleetArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface DeadlineFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The FleetId component. */
	readonly fleetId: string;
}

/**
 * Properties for building a job ARN.
 */
export interface DeadlineJobArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The QueueId component of the ARN. */
	readonly queueId: string;
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface DeadlineJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The QueueId component. */
	readonly queueId: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a license-endpoint ARN.
 */
export interface DeadlineLicenseEndpointArnProps {
	/** The LicenseEndpointId component of the ARN. */
	readonly licenseEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license-endpoint ARN.
 */
export interface DeadlineLicenseEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseEndpointId component. */
	readonly licenseEndpointId: string;
}

/**
 * Properties for building a monitor ARN.
 */
export interface DeadlineMonitorArnProps {
	/** The MonitorId component of the ARN. */
	readonly monitorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a monitor ARN.
 */
export interface DeadlineMonitorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitorId component. */
	readonly monitorId: string;
}

/**
 * Properties for building a queue ARN.
 */
export interface DeadlineQueueArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The QueueId component of the ARN. */
	readonly queueId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a queue ARN.
 */
export interface DeadlineQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The QueueId component. */
	readonly queueId: string;
}

/**
 * Properties for building a volume ARN.
 */
export interface DeadlineVolumeArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** The VolumeId component of the ARN. */
	readonly volumeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a volume ARN.
 */
export interface DeadlineVolumeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The FleetId component. */
	readonly fleetId: string;
	/** The VolumeId component. */
	readonly volumeId: string;
}

/**
 * Properties for building a worker ARN.
 */
export interface DeadlineWorkerArnProps {
	/** The FarmId component of the ARN. */
	readonly farmId: string;
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** The WorkerId component of the ARN. */
	readonly workerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a worker ARN.
 */
export interface DeadlineWorkerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FarmId component. */
	readonly farmId: string;
	/** The FleetId component. */
	readonly fleetId: string;
	/** The WorkerId component. */
	readonly workerId: string;
}

const BudgetArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/budget\/(?<budgetId>[^:/?]+)$/;
const FarmArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)$/;
const FleetArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/fleet\/(?<fleetId>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/queue\/(?<queueId>[^:/?]+)\/job\/(?<jobId>[^:/?]+)$/;
const LicenseEndpointArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):license-endpoint\/(?<licenseEndpointId>[^:/?]+)$/;
const MonitorArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<monitorId>[^:/?]+)$/;
const QueueArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/queue\/(?<queueId>[^:/?]+)$/;
const VolumeArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/fleet\/(?<fleetId>[^:/?]+)\/volume\/(?<volumeId>[^:/?]+)$/;
const WorkerArnRegex =
	/^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm\/(?<farmId>[^:/?]+)\/fleet\/(?<fleetId>[^:/?]+)\/worker\/(?<workerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for deadline resources.
 */
export class DeadlineResources {
	/**
	 * Builds an ARN for the budget resource.
	 */
	static budget(props: DeadlineBudgetArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/budget/${props.budgetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the budget resource.
	 */
	static isValidBudgetArn(arn: string): boolean {
		return BudgetArnRegex.test(arn);
	}

	/**
	 * Parses a budget ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBudgetArn(arn: string): DeadlineBudgetArnComponents {
		const match = BudgetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid budget ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			budgetId: match.groups!.budgetId,
		};
	}

	/**
	 * Builds an ARN for the farm resource.
	 */
	static farm(props: DeadlineFarmArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the farm resource.
	 */
	static isValidFarmArn(arn: string): boolean {
		return FarmArnRegex.test(arn);
	}

	/**
	 * Parses a farm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFarmArn(arn: string): DeadlineFarmArnComponents {
		const match = FarmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid farm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
		};
	}

	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: DeadlineFleetArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/fleet/${props.fleetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleet resource.
	 */
	static isValidFleetArn(arn: string): boolean {
		return FleetArnRegex.test(arn);
	}

	/**
	 * Parses a fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetArn(arn: string): DeadlineFleetArnComponents {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			fleetId: match.groups!.fleetId,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: DeadlineJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/queue/${props.queueId}/job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): DeadlineJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			queueId: match.groups!.queueId,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the license-endpoint resource.
	 */
	static licenseEndpoint(props: DeadlineLicenseEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:license-endpoint/${props.licenseEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license-endpoint resource.
	 */
	static isValidLicenseEndpointArn(arn: string): boolean {
		return LicenseEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a license-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseEndpointArn(
		arn: string,
	): DeadlineLicenseEndpointArnComponents {
		const match = LicenseEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			licenseEndpointId: match.groups!.licenseEndpointId,
		};
	}

	/**
	 * Builds an ARN for the monitor resource.
	 */
	static monitor(props: DeadlineMonitorArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.monitorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the monitor resource.
	 */
	static isValidMonitorArn(arn: string): boolean {
		return MonitorArnRegex.test(arn);
	}

	/**
	 * Parses a monitor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMonitorArn(arn: string): DeadlineMonitorArnComponents {
		const match = MonitorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid monitor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitorId: match.groups!.monitorId,
		};
	}

	/**
	 * Builds an ARN for the queue resource.
	 */
	static queue(props: DeadlineQueueArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/queue/${props.queueId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the queue resource.
	 */
	static isValidQueueArn(arn: string): boolean {
		return QueueArnRegex.test(arn);
	}

	/**
	 * Parses a queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueueArn(arn: string): DeadlineQueueArnComponents {
		const match = QueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			queueId: match.groups!.queueId,
		};
	}

	/**
	 * Builds an ARN for the volume resource.
	 */
	static volume(props: DeadlineVolumeArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/fleet/${props.fleetId}/volume/${props.volumeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the volume resource.
	 */
	static isValidVolumeArn(arn: string): boolean {
		return VolumeArnRegex.test(arn);
	}

	/**
	 * Parses a volume ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVolumeArn(arn: string): DeadlineVolumeArnComponents {
		const match = VolumeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid volume ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			fleetId: match.groups!.fleetId,
			volumeId: match.groups!.volumeId,
		};
	}

	/**
	 * Builds an ARN for the worker resource.
	 */
	static worker(props: DeadlineWorkerArnProps): string {
		return `arn:${props.partition ?? "aws"}:deadline:${props.region ?? "*"}:${props.account ?? "*"}:farm/${props.farmId}/fleet/${props.fleetId}/worker/${props.workerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the worker resource.
	 */
	static isValidWorkerArn(arn: string): boolean {
		return WorkerArnRegex.test(arn);
	}

	/**
	 * Parses a worker ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkerArn(arn: string): DeadlineWorkerArnComponents {
		const match = WorkerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid worker ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			farmId: match.groups!.farmId,
			fleetId: match.groups!.fleetId,
			workerId: match.groups!.workerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for deadline.
 */
export class DeadlineOperations {
	/** IAM actions required for the AssociateMemberToFarm API call. */
	static readonly AssociateMemberToFarm: string[] = [
		"deadline:AssociateMemberToFarm",
	];
	/** IAM actions required for the AssociateMemberToFleet API call. */
	static readonly AssociateMemberToFleet: string[] = [
		"deadline:AssociateMemberToFleet",
	];
	/** IAM actions required for the AssociateMemberToJob API call. */
	static readonly AssociateMemberToJob: string[] = [
		"deadline:AssociateMemberToJob",
	];
	/** IAM actions required for the AssociateMemberToQueue API call. */
	static readonly AssociateMemberToQueue: string[] = [
		"deadline:AssociateMemberToQueue",
	];
	/** IAM actions required for the AssumeFleetRoleForRead API call. */
	static readonly AssumeFleetRoleForRead: string[] = [
		"deadline:AssumeFleetRoleForRead",
	];
	/** IAM actions required for the AssumeFleetRoleForWorker API call. */
	static readonly AssumeFleetRoleForWorker: string[] = [
		"deadline:AssumeFleetRoleForWorker",
	];
	/** IAM actions required for the AssumeQueueRoleForRead API call. */
	static readonly AssumeQueueRoleForRead: string[] = [
		"deadline:AssumeQueueRoleForRead",
	];
	/** IAM actions required for the AssumeQueueRoleForUser API call. */
	static readonly AssumeQueueRoleForUser: string[] = [
		"deadline:AssumeQueueRoleForUser",
	];
	/** IAM actions required for the AssumeQueueRoleForWorker API call. */
	static readonly AssumeQueueRoleForWorker: string[] = [
		"deadline:AssumeQueueRoleForWorker",
	];
	/** IAM actions required for the BatchGetJob API call. */
	static readonly BatchGetJob: string[] = ["deadline:GetJob"];
	/** IAM actions required for the BatchGetJobEntity API call. */
	static readonly BatchGetJobEntity: string[] = ["deadline:BatchGetJobEntity"];
	/** IAM actions required for the BatchGetSession API call. */
	static readonly BatchGetSession: string[] = ["deadline:GetSession"];
	/** IAM actions required for the BatchGetSessionAction API call. */
	static readonly BatchGetSessionAction: string[] = [
		"deadline:GetSessionAction",
	];
	/** IAM actions required for the BatchGetStep API call. */
	static readonly BatchGetStep: string[] = ["deadline:GetStep"];
	/** IAM actions required for the BatchGetTask API call. */
	static readonly BatchGetTask: string[] = ["deadline:GetTask"];
	/** IAM actions required for the BatchGetWorker API call. */
	static readonly BatchGetWorker: string[] = ["deadline:GetWorker"];
	/** IAM actions required for the BatchUpdateJob API call. */
	static readonly BatchUpdateJob: string[] = ["deadline:UpdateJob"];
	/** IAM actions required for the BatchUpdateTask API call. */
	static readonly BatchUpdateTask: string[] = ["deadline:UpdateTask"];
	/** IAM actions required for the CopyJobTemplate API call. */
	static readonly CopyJobTemplate: string[] = [
		"deadline:CopyJobTemplate",
		"deadline:GetJobTemplate",
	];
	/** IAM actions required for the CreateBudget API call. */
	static readonly CreateBudget: string[] = [
		"deadline:CreateBudget",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateFarm API call. */
	static readonly CreateFarm: string[] = [
		"deadline:CreateFarm",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CreateFleet: string[] = [
		"deadline:CreateFleet",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"deadline:CreateJob",
		"deadline:GetJobTemplate",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateLicenseEndpoint API call. */
	static readonly CreateLicenseEndpoint: string[] = [
		"deadline:CreateLicenseEndpoint",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateLimit API call. */
	static readonly CreateLimit: string[] = ["deadline:CreateLimit"];
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CreateMonitor: string[] = [
		"deadline:CreateMonitor",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CreateQueue: string[] = [
		"deadline:CreateQueue",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateQueueEnvironment API call. */
	static readonly CreateQueueEnvironment: string[] = [
		"deadline:CreateQueueEnvironment",
	];
	/** IAM actions required for the CreateQueueFleetAssociation API call. */
	static readonly CreateQueueFleetAssociation: string[] = [
		"deadline:CreateQueueFleetAssociation",
	];
	/** IAM actions required for the CreateQueueLimitAssociation API call. */
	static readonly CreateQueueLimitAssociation: string[] = [
		"deadline:CreateQueueLimitAssociation",
	];
	/** IAM actions required for the CreateStorageProfile API call. */
	static readonly CreateStorageProfile: string[] = [
		"deadline:CreateStorageProfile",
	];
	/** IAM actions required for the CreateWorker API call. */
	static readonly CreateWorker: string[] = [
		"deadline:CreateWorker",
		"deadline:ListTagsForResource",
		"deadline:TagResource",
	];
	/** IAM actions required for the DeleteBudget API call. */
	static readonly DeleteBudget: string[] = ["deadline:DeleteBudget"];
	/** IAM actions required for the DeleteFarm API call. */
	static readonly DeleteFarm: string[] = ["deadline:DeleteFarm"];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DeleteFleet: string[] = ["deadline:DeleteFleet"];
	/** IAM actions required for the DeleteLicenseEndpoint API call. */
	static readonly DeleteLicenseEndpoint: string[] = [
		"deadline:DeleteLicenseEndpoint",
	];
	/** IAM actions required for the DeleteLimit API call. */
	static readonly DeleteLimit: string[] = ["deadline:DeleteLimit"];
	/** IAM actions required for the DeleteMeteredProduct API call. */
	static readonly DeleteMeteredProduct: string[] = [
		"deadline:DeleteMeteredProduct",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DeleteMonitor: string[] = ["deadline:DeleteMonitor"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DeleteQueue: string[] = ["deadline:DeleteQueue"];
	/** IAM actions required for the DeleteQueueEnvironment API call. */
	static readonly DeleteQueueEnvironment: string[] = [
		"deadline:DeleteQueueEnvironment",
	];
	/** IAM actions required for the DeleteQueueFleetAssociation API call. */
	static readonly DeleteQueueFleetAssociation: string[] = [
		"deadline:DeleteQueueFleetAssociation",
	];
	/** IAM actions required for the DeleteQueueLimitAssociation API call. */
	static readonly DeleteQueueLimitAssociation: string[] = [
		"deadline:DeleteQueueLimitAssociation",
	];
	/** IAM actions required for the DeleteStorageProfile API call. */
	static readonly DeleteStorageProfile: string[] = [
		"deadline:DeleteStorageProfile",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DeleteVolume: string[] = ["deadline:DeleteVolume"];
	/** IAM actions required for the DeleteWorker API call. */
	static readonly DeleteWorker: string[] = ["deadline:DeleteWorker"];
	/** IAM actions required for the DisassociateMemberFromFarm API call. */
	static readonly DisassociateMemberFromFarm: string[] = [
		"deadline:DisassociateMemberFromFarm",
	];
	/** IAM actions required for the DisassociateMemberFromFleet API call. */
	static readonly DisassociateMemberFromFleet: string[] = [
		"deadline:DisassociateMemberFromFleet",
	];
	/** IAM actions required for the DisassociateMemberFromJob API call. */
	static readonly DisassociateMemberFromJob: string[] = [
		"deadline:DisassociateMemberFromJob",
	];
	/** IAM actions required for the DisassociateMemberFromQueue API call. */
	static readonly DisassociateMemberFromQueue: string[] = [
		"deadline:DisassociateMemberFromQueue",
	];
	/** IAM actions required for the GetBudget API call. */
	static readonly opGetBudget: string[] = ["deadline:GetBudget"];
	/** IAM actions required for the GetFarm API call. */
	static readonly opGetFarm: string[] = ["deadline:GetFarm"];
	/** IAM actions required for the GetFleet API call. */
	static readonly opGetFleet: string[] = ["deadline:GetFleet"];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["deadline:GetJob"];
	/** IAM actions required for the GetLicenseEndpoint API call. */
	static readonly opGetLicenseEndpoint: string[] = [
		"deadline:GetLicenseEndpoint",
	];
	/** IAM actions required for the GetLimit API call. */
	static readonly opGetLimit: string[] = ["deadline:GetLimit"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly opGetMonitor: string[] = ["deadline:GetMonitor"];
	/** IAM actions required for the GetMonitorSettings API call. */
	static readonly opGetMonitorSettings: string[] = [
		"deadline:GetMonitorSettings",
	];
	/** IAM actions required for the GetQueue API call. */
	static readonly opGetQueue: string[] = ["deadline:GetQueue"];
	/** IAM actions required for the GetQueueEnvironment API call. */
	static readonly opGetQueueEnvironment: string[] = [
		"deadline:GetQueueEnvironment",
	];
	/** IAM actions required for the GetQueueFleetAssociation API call. */
	static readonly opGetQueueFleetAssociation: string[] = [
		"deadline:GetQueueFleetAssociation",
	];
	/** IAM actions required for the GetQueueLimitAssociation API call. */
	static readonly opGetQueueLimitAssociation: string[] = [
		"deadline:GetQueueLimitAssociation",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["deadline:GetSession"];
	/** IAM actions required for the GetSessionAction API call. */
	static readonly opGetSessionAction: string[] = ["deadline:GetSessionAction"];
	/** IAM actions required for the GetSessionsStatisticsAggregation API call. */
	static readonly opGetSessionsStatisticsAggregation: string[] = [
		"deadline:GetSessionsStatisticsAggregation",
	];
	/** IAM actions required for the GetStep API call. */
	static readonly opGetStep: string[] = ["deadline:GetStep"];
	/** IAM actions required for the GetStorageProfile API call. */
	static readonly opGetStorageProfile: string[] = [
		"deadline:GetStorageProfile",
	];
	/** IAM actions required for the GetStorageProfileForQueue API call. */
	static readonly opGetStorageProfileForQueue: string[] = [
		"deadline:GetStorageProfileForQueue",
	];
	/** IAM actions required for the GetTask API call. */
	static readonly opGetTask: string[] = ["deadline:GetTask"];
	/** IAM actions required for the GetVolume API call. */
	static readonly opGetVolume: string[] = ["deadline:GetVolume"];
	/** IAM actions required for the GetWorker API call. */
	static readonly opGetWorker: string[] = ["deadline:GetWorker"];
	/** IAM actions required for the ListAvailableMeteredProducts API call. */
	static readonly ListAvailableMeteredProducts: string[] = [
		"deadline:ListAvailableMeteredProducts",
	];
	/** IAM actions required for the ListBudgets API call. */
	static readonly ListBudgets: string[] = ["deadline:ListBudgets"];
	/** IAM actions required for the ListFarmMembers API call. */
	static readonly ListFarmMembers: string[] = ["deadline:ListFarmMembers"];
	/** IAM actions required for the ListFarms API call. */
	static readonly ListFarms: string[] = ["deadline:ListFarms"];
	/** IAM actions required for the ListFleetMembers API call. */
	static readonly ListFleetMembers: string[] = ["deadline:ListFleetMembers"];
	/** IAM actions required for the ListFleets API call. */
	static readonly ListFleets: string[] = ["deadline:ListFleets"];
	/** IAM actions required for the ListJobMembers API call. */
	static readonly ListJobMembers: string[] = ["deadline:ListJobMembers"];
	/** IAM actions required for the ListJobParameterDefinitions API call. */
	static readonly ListJobParameterDefinitions: string[] = [
		"deadline:ListJobParameterDefinitions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["deadline:ListJobs"];
	/** IAM actions required for the ListLicenseEndpoints API call. */
	static readonly ListLicenseEndpoints: string[] = [
		"deadline:ListLicenseEndpoints",
	];
	/** IAM actions required for the ListLimits API call. */
	static readonly ListLimits: string[] = ["deadline:ListLimits"];
	/** IAM actions required for the ListMeteredProducts API call. */
	static readonly ListMeteredProducts: string[] = [
		"deadline:ListMeteredProducts",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly ListMonitors: string[] = ["deadline:ListMonitors"];
	/** IAM actions required for the ListQueueEnvironments API call. */
	static readonly ListQueueEnvironments: string[] = [
		"deadline:ListQueueEnvironments",
	];
	/** IAM actions required for the ListQueueFleetAssociations API call. */
	static readonly ListQueueFleetAssociations: string[] = [
		"deadline:ListQueueFleetAssociations",
	];
	/** IAM actions required for the ListQueueLimitAssociations API call. */
	static readonly ListQueueLimitAssociations: string[] = [
		"deadline:ListQueueLimitAssociations",
	];
	/** IAM actions required for the ListQueueMembers API call. */
	static readonly ListQueueMembers: string[] = ["deadline:ListQueueMembers"];
	/** IAM actions required for the ListQueues API call. */
	static readonly ListQueues: string[] = ["deadline:ListQueues"];
	/** IAM actions required for the ListSessionActions API call. */
	static readonly ListSessionActions: string[] = [
		"deadline:ListSessionActions",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["deadline:ListSessions"];
	/** IAM actions required for the ListSessionsForWorker API call. */
	static readonly ListSessionsForWorker: string[] = [
		"deadline:ListSessionsForWorker",
	];
	/** IAM actions required for the ListStepConsumers API call. */
	static readonly ListStepConsumers: string[] = ["deadline:ListStepConsumers"];
	/** IAM actions required for the ListStepDependencies API call. */
	static readonly ListStepDependencies: string[] = [
		"deadline:ListStepDependencies",
	];
	/** IAM actions required for the ListSteps API call. */
	static readonly ListSteps: string[] = ["deadline:ListSteps"];
	/** IAM actions required for the ListStorageProfiles API call. */
	static readonly ListStorageProfiles: string[] = [
		"deadline:ListStorageProfiles",
	];
	/** IAM actions required for the ListStorageProfilesForQueue API call. */
	static readonly ListStorageProfilesForQueue: string[] = [
		"deadline:ListStorageProfilesForQueue",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"deadline:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly ListTasks: string[] = ["deadline:ListTasks"];
	/** IAM actions required for the ListVolumes API call. */
	static readonly ListVolumes: string[] = ["deadline:ListVolumes"];
	/** IAM actions required for the ListWorkers API call. */
	static readonly ListWorkers: string[] = ["deadline:ListWorkers"];
	/** IAM actions required for the PutMeteredProduct API call. */
	static readonly PutMeteredProduct: string[] = ["deadline:PutMeteredProduct"];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SearchJobs: string[] = ["deadline:SearchJobs"];
	/** IAM actions required for the SearchSteps API call. */
	static readonly SearchSteps: string[] = ["deadline:SearchSteps"];
	/** IAM actions required for the SearchTasks API call. */
	static readonly SearchTasks: string[] = ["deadline:SearchTasks"];
	/** IAM actions required for the SearchWorkers API call. */
	static readonly SearchWorkers: string[] = ["deadline:SearchWorkers"];
	/** IAM actions required for the StartSessionsStatisticsAggregation API call. */
	static readonly StartSessionsStatisticsAggregation: string[] = [
		"deadline:StartSessionsStatisticsAggregation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["deadline:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["deadline:UntagResource"];
	/** IAM actions required for the UpdateBudget API call. */
	static readonly UpdateBudget: string[] = ["deadline:UpdateBudget"];
	/** IAM actions required for the UpdateFarm API call. */
	static readonly UpdateFarm: string[] = ["deadline:UpdateFarm"];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UpdateFleet: string[] = [
		"iam:PassRole",
		"deadline:UpdateFleet",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UpdateJob: string[] = ["deadline:UpdateJob"];
	/** IAM actions required for the UpdateLimit API call. */
	static readonly UpdateLimit: string[] = ["deadline:UpdateLimit"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UpdateMonitor: string[] = [
		"iam:PassRole",
		"deadline:UpdateMonitor",
	];
	/** IAM actions required for the UpdateMonitorSettings API call. */
	static readonly UpdateMonitorSettings: string[] = [
		"deadline:UpdateMonitorSettings",
	];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UpdateQueue: string[] = [
		"iam:PassRole",
		"deadline:UpdateQueue",
	];
	/** IAM actions required for the UpdateQueueEnvironment API call. */
	static readonly UpdateQueueEnvironment: string[] = [
		"deadline:UpdateQueueEnvironment",
	];
	/** IAM actions required for the UpdateQueueFleetAssociation API call. */
	static readonly UpdateQueueFleetAssociation: string[] = [
		"deadline:UpdateQueueFleetAssociation",
	];
	/** IAM actions required for the UpdateQueueLimitAssociation API call. */
	static readonly UpdateQueueLimitAssociation: string[] = [
		"deadline:UpdateQueueLimitAssociation",
	];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UpdateSession: string[] = ["deadline:UpdateSession"];
	/** IAM actions required for the UpdateStep API call. */
	static readonly UpdateStep: string[] = ["deadline:UpdateStep"];
	/** IAM actions required for the UpdateStorageProfile API call. */
	static readonly UpdateStorageProfile: string[] = [
		"deadline:UpdateStorageProfile",
	];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UpdateTask: string[] = ["deadline:UpdateTask"];
	/** IAM actions required for the UpdateWorker API call. */
	static readonly UpdateWorker: string[] = ["deadline:UpdateWorker"];
	/** IAM actions required for the UpdateWorkerSchedule API call. */
	static readonly UpdateWorkerSchedule: string[] = [
		"deadline:UpdateWorkerSchedule",
	];
}

/**
 * Condition key constants and builders for deadline.
 */
export class DeadlineConditions {
	/** Condition keys applicable to the AssociateMemberToFarm action. */
	static readonly AssociateMemberToFarmConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToFleet action. */
	static readonly AssociateMemberToFleetConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToJob action. */
	static readonly AssociateMemberToJobConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToQueue action. */
	static readonly AssociateMemberToQueueConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the CreateBudget action. */
	static readonly CreateBudgetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFarm action. */
	static readonly CreateFarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseEndpoint action. */
	static readonly CreateLicenseEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CreateMonitorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CreateQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorker action. */
	static readonly CreateWorkerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateMemberFromFarm action. */
	static readonly DisassociateMemberFromFarmConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromFleet action. */
	static readonly DisassociateMemberFromFleetConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromJob action. */
	static readonly DisassociateMemberFromJobConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromQueue action. */
	static readonly DisassociateMemberFromQueueConditionKeys: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the ListFarms action. */
	static readonly ListFarmsConditionKeys: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListFleets action. */
	static readonly ListFleetsConditionKeys: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListJobs action. */
	static readonly ListJobsConditionKeys: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListQueues action. */
	static readonly ListQueuesConditionKeys: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"deadline:CalledAction",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"deadline:CalledAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: deadline:AssociatedMembershipLevel (String) */
	static readonly ASSOCIATED_MEMBERSHIP_LEVEL =
		"deadline:AssociatedMembershipLevel";
	/** Condition key: deadline:CalledAction (String) */
	static readonly CALLED_ACTION = "deadline:CalledAction";
	/** Condition key: deadline:FarmMembershipLevels (ArrayOfString) */
	static readonly FARM_MEMBERSHIP_LEVELS = "deadline:FarmMembershipLevels";
	/** Condition key: deadline:FleetMembershipLevels (ArrayOfString) */
	static readonly FLEET_MEMBERSHIP_LEVELS = "deadline:FleetMembershipLevels";
	/** Condition key: deadline:JobMembershipLevels (ArrayOfString) */
	static readonly JOB_MEMBERSHIP_LEVELS = "deadline:JobMembershipLevels";
	/** Condition key: deadline:MembershipLevel (String) */
	static readonly MEMBERSHIP_LEVEL = "deadline:MembershipLevel";
	/** Condition key: deadline:PrincipalId (String) */
	static readonly PRINCIPAL_ID = "deadline:PrincipalId";
	/** Condition key: deadline:QueueMembershipLevels (ArrayOfString) */
	static readonly QUEUE_MEMBERSHIP_LEVELS = "deadline:QueueMembershipLevels";
	/** Condition key: deadline:RequesterPrincipalId (String) */
	static readonly REQUESTER_PRINCIPAL_ID = "deadline:RequesterPrincipalId";

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
	 * Generates a condition block for `deadline:AssociatedMembershipLevel`.
	 */
	static associatedMembershipLevel(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "deadline:AssociatedMembershipLevel": value } };
	}

	/**
	 * Generates a condition block for `deadline:CalledAction`.
	 */
	static calledAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "deadline:CalledAction": value } };
	}

	/**
	 * Generates a condition block for `deadline:FarmMembershipLevels`.
	 */
	static farmMembershipLevels(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "deadline:FarmMembershipLevels": values },
		};
	}

	/**
	 * Generates a condition block for `deadline:FleetMembershipLevels`.
	 */
	static fleetMembershipLevels(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "deadline:FleetMembershipLevels": values },
		};
	}

	/**
	 * Generates a condition block for `deadline:JobMembershipLevels`.
	 */
	static jobMembershipLevels(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "deadline:JobMembershipLevels": values },
		};
	}

	/**
	 * Generates a condition block for `deadline:MembershipLevel`.
	 */
	static membershipLevel(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "deadline:MembershipLevel": value } };
	}

	/**
	 * Generates a condition block for `deadline:PrincipalId`.
	 */
	static principalId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "deadline:PrincipalId": value } };
	}

	/**
	 * Generates a condition block for `deadline:QueueMembershipLevels`.
	 */
	static queueMembershipLevels(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "deadline:QueueMembershipLevels": values },
		};
	}

	/**
	 * Generates a condition block for `deadline:RequesterPrincipalId`.
	 */
	static requesterPrincipalId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "deadline:RequesterPrincipalId": value } };
	}
}
