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
	static readonly ASSOCIATE_MEMBER_TO_FARM = "deadline:AssociateMemberToFarm";
	/** [PermissionManagement] deadline:AssociateMemberToFleet */
	static readonly ASSOCIATE_MEMBER_TO_FLEET = "deadline:AssociateMemberToFleet";
	/** [PermissionManagement] deadline:AssociateMemberToJob */
	static readonly ASSOCIATE_MEMBER_TO_JOB = "deadline:AssociateMemberToJob";
	/** [PermissionManagement] deadline:AssociateMemberToQueue */
	static readonly ASSOCIATE_MEMBER_TO_QUEUE = "deadline:AssociateMemberToQueue";
	/** [Write] deadline:AssumeFleetRoleForRead */
	static readonly ASSUME_FLEET_ROLE_FOR_READ =
		"deadline:AssumeFleetRoleForRead";
	/** [Write] deadline:AssumeFleetRoleForWorker */
	static readonly ASSUME_FLEET_ROLE_FOR_WORKER =
		"deadline:AssumeFleetRoleForWorker";
	/** [Write] deadline:AssumeQueueRoleForRead */
	static readonly ASSUME_QUEUE_ROLE_FOR_READ =
		"deadline:AssumeQueueRoleForRead";
	/** [Write] deadline:AssumeQueueRoleForUser */
	static readonly ASSUME_QUEUE_ROLE_FOR_USER =
		"deadline:AssumeQueueRoleForUser";
	/** [Write] deadline:AssumeQueueRoleForWorker */
	static readonly ASSUME_QUEUE_ROLE_FOR_WORKER =
		"deadline:AssumeQueueRoleForWorker";
	/** [Read] deadline:BatchGetJobEntity */
	static readonly BATCH_GET_JOB_ENTITY = "deadline:BatchGetJobEntity";
	/** [Write] deadline:CopyJobTemplate */
	static readonly COPY_JOB_TEMPLATE = "deadline:CopyJobTemplate";
	/** [Write] deadline:CreateBudget */
	static readonly CREATE_BUDGET = "deadline:CreateBudget";
	/** [Write] deadline:CreateFarm */
	static readonly CREATE_FARM = "deadline:CreateFarm";
	/** [Write] deadline:CreateFleet */
	static readonly CREATE_FLEET = "deadline:CreateFleet";
	/** [Write] deadline:CreateJob */
	static readonly CREATE_JOB = "deadline:CreateJob";
	/** [Write] deadline:CreateLicenseEndpoint */
	static readonly CREATE_LICENSE_ENDPOINT = "deadline:CreateLicenseEndpoint";
	/** [Write] deadline:CreateLimit */
	static readonly CREATE_LIMIT = "deadline:CreateLimit";
	/** [Write] deadline:CreateMonitor */
	static readonly CREATE_MONITOR = "deadline:CreateMonitor";
	/** [Write] deadline:CreateQueue */
	static readonly CREATE_QUEUE = "deadline:CreateQueue";
	/** [Write] deadline:CreateQueueEnvironment */
	static readonly CREATE_QUEUE_ENVIRONMENT = "deadline:CreateQueueEnvironment";
	/** [Write] deadline:CreateQueueFleetAssociation */
	static readonly CREATE_QUEUE_FLEET_ASSOCIATION =
		"deadline:CreateQueueFleetAssociation";
	/** [Write] deadline:CreateQueueLimitAssociation */
	static readonly CREATE_QUEUE_LIMIT_ASSOCIATION =
		"deadline:CreateQueueLimitAssociation";
	/** [Write] deadline:CreateStorageProfile */
	static readonly CREATE_STORAGE_PROFILE = "deadline:CreateStorageProfile";
	/** [Write] deadline:CreateWorker */
	static readonly CREATE_WORKER = "deadline:CreateWorker";
	/** [Write] deadline:DeleteBudget */
	static readonly DELETE_BUDGET = "deadline:DeleteBudget";
	/** [Write] deadline:DeleteFarm */
	static readonly DELETE_FARM = "deadline:DeleteFarm";
	/** [Write] deadline:DeleteFleet */
	static readonly DELETE_FLEET = "deadline:DeleteFleet";
	/** [Write] deadline:DeleteLicenseEndpoint */
	static readonly DELETE_LICENSE_ENDPOINT = "deadline:DeleteLicenseEndpoint";
	/** [Write] deadline:DeleteLimit */
	static readonly DELETE_LIMIT = "deadline:DeleteLimit";
	/** [Write] deadline:DeleteMeteredProduct */
	static readonly DELETE_METERED_PRODUCT = "deadline:DeleteMeteredProduct";
	/** [Write] deadline:DeleteMonitor */
	static readonly DELETE_MONITOR = "deadline:DeleteMonitor";
	/** [Write] deadline:DeleteQueue */
	static readonly DELETE_QUEUE = "deadline:DeleteQueue";
	/** [Write] deadline:DeleteQueueEnvironment */
	static readonly DELETE_QUEUE_ENVIRONMENT = "deadline:DeleteQueueEnvironment";
	/** [Write] deadline:DeleteQueueFleetAssociation */
	static readonly DELETE_QUEUE_FLEET_ASSOCIATION =
		"deadline:DeleteQueueFleetAssociation";
	/** [Write] deadline:DeleteQueueLimitAssociation */
	static readonly DELETE_QUEUE_LIMIT_ASSOCIATION =
		"deadline:DeleteQueueLimitAssociation";
	/** [Write] deadline:DeleteStorageProfile */
	static readonly DELETE_STORAGE_PROFILE = "deadline:DeleteStorageProfile";
	/** [Write] deadline:DeleteVolume */
	static readonly DELETE_VOLUME = "deadline:DeleteVolume";
	/** [Write] deadline:DeleteWorker */
	static readonly DELETE_WORKER = "deadline:DeleteWorker";
	/** [PermissionManagement] deadline:DisassociateMemberFromFarm */
	static readonly DISASSOCIATE_MEMBER_FROM_FARM =
		"deadline:DisassociateMemberFromFarm";
	/** [PermissionManagement] deadline:DisassociateMemberFromFleet */
	static readonly DISASSOCIATE_MEMBER_FROM_FLEET =
		"deadline:DisassociateMemberFromFleet";
	/** [PermissionManagement] deadline:DisassociateMemberFromJob */
	static readonly DISASSOCIATE_MEMBER_FROM_JOB =
		"deadline:DisassociateMemberFromJob";
	/** [PermissionManagement] deadline:DisassociateMemberFromQueue */
	static readonly DISASSOCIATE_MEMBER_FROM_QUEUE =
		"deadline:DisassociateMemberFromQueue";
	/** [Read] deadline:GetApplicationVersion */
	static readonly GET_APPLICATION_VERSION = "deadline:GetApplicationVersion";
	/** [Read] deadline:GetBudget */
	static readonly GET_BUDGET = "deadline:GetBudget";
	/** [Read] deadline:GetFarm */
	static readonly GET_FARM = "deadline:GetFarm";
	/** [Read] deadline:GetFleet */
	static readonly GET_FLEET = "deadline:GetFleet";
	/** [Read] deadline:GetJob */
	static readonly GET_JOB = "deadline:GetJob";
	/** [Read] deadline:GetJobTemplate */
	static readonly GET_JOB_TEMPLATE = "deadline:GetJobTemplate";
	/** [Read] deadline:GetLicenseEndpoint */
	static readonly GET_LICENSE_ENDPOINT = "deadline:GetLicenseEndpoint";
	/** [Read] deadline:GetLimit */
	static readonly GET_LIMIT = "deadline:GetLimit";
	/** [Read] deadline:GetMonitor */
	static readonly GET_MONITOR = "deadline:GetMonitor";
	/** [Read] deadline:GetMonitorSettings */
	static readonly GET_MONITOR_SETTINGS = "deadline:GetMonitorSettings";
	/** [Read] deadline:GetQueue */
	static readonly GET_QUEUE = "deadline:GetQueue";
	/** [Read] deadline:GetQueueEnvironment */
	static readonly GET_QUEUE_ENVIRONMENT = "deadline:GetQueueEnvironment";
	/** [Read] deadline:GetQueueFleetAssociation */
	static readonly GET_QUEUE_FLEET_ASSOCIATION =
		"deadline:GetQueueFleetAssociation";
	/** [Read] deadline:GetQueueLimitAssociation */
	static readonly GET_QUEUE_LIMIT_ASSOCIATION =
		"deadline:GetQueueLimitAssociation";
	/** [Read] deadline:GetSession */
	static readonly GET_SESSION = "deadline:GetSession";
	/** [Read] deadline:GetSessionAction */
	static readonly GET_SESSION_ACTION = "deadline:GetSessionAction";
	/** [Read] deadline:GetSessionsStatisticsAggregation */
	static readonly GET_SESSIONS_STATISTICS_AGGREGATION =
		"deadline:GetSessionsStatisticsAggregation";
	/** [Read] deadline:GetStep */
	static readonly GET_STEP = "deadline:GetStep";
	/** [Read] deadline:GetStorageProfile */
	static readonly GET_STORAGE_PROFILE = "deadline:GetStorageProfile";
	/** [Read] deadline:GetStorageProfileForQueue */
	static readonly GET_STORAGE_PROFILE_FOR_QUEUE =
		"deadline:GetStorageProfileForQueue";
	/** [Read] deadline:GetTask */
	static readonly GET_TASK = "deadline:GetTask";
	/** [Read] deadline:GetVolume */
	static readonly GET_VOLUME = "deadline:GetVolume";
	/** [Read] deadline:GetWorker */
	static readonly GET_WORKER = "deadline:GetWorker";
	/** [List] deadline:ListAvailableMeteredProducts */
	static readonly LIST_AVAILABLE_METERED_PRODUCTS =
		"deadline:ListAvailableMeteredProducts";
	/** [List] deadline:ListBudgets */
	static readonly LIST_BUDGETS = "deadline:ListBudgets";
	/** [List] deadline:ListFarmMembers */
	static readonly LIST_FARM_MEMBERS = "deadline:ListFarmMembers";
	/** [List] deadline:ListFarms */
	static readonly LIST_FARMS = "deadline:ListFarms";
	/** [List] deadline:ListFleetMembers */
	static readonly LIST_FLEET_MEMBERS = "deadline:ListFleetMembers";
	/** [List] deadline:ListFleets */
	static readonly LIST_FLEETS = "deadline:ListFleets";
	/** [List] deadline:ListJobMembers */
	static readonly LIST_JOB_MEMBERS = "deadline:ListJobMembers";
	/** [List] deadline:ListJobParameterDefinitions */
	static readonly LIST_JOB_PARAMETER_DEFINITIONS =
		"deadline:ListJobParameterDefinitions";
	/** [List] deadline:ListJobs */
	static readonly LIST_JOBS = "deadline:ListJobs";
	/** [List] deadline:ListLicenseEndpoints */
	static readonly LIST_LICENSE_ENDPOINTS = "deadline:ListLicenseEndpoints";
	/** [List] deadline:ListLimits */
	static readonly LIST_LIMITS = "deadline:ListLimits";
	/** [List] deadline:ListMeteredProducts */
	static readonly LIST_METERED_PRODUCTS = "deadline:ListMeteredProducts";
	/** [List] deadline:ListMonitors */
	static readonly LIST_MONITORS = "deadline:ListMonitors";
	/** [List] deadline:ListQueueEnvironments */
	static readonly LIST_QUEUE_ENVIRONMENTS = "deadline:ListQueueEnvironments";
	/** [List] deadline:ListQueueFleetAssociations */
	static readonly LIST_QUEUE_FLEET_ASSOCIATIONS =
		"deadline:ListQueueFleetAssociations";
	/** [List] deadline:ListQueueLimitAssociations */
	static readonly LIST_QUEUE_LIMIT_ASSOCIATIONS =
		"deadline:ListQueueLimitAssociations";
	/** [List] deadline:ListQueueMembers */
	static readonly LIST_QUEUE_MEMBERS = "deadline:ListQueueMembers";
	/** [List] deadline:ListQueues */
	static readonly LIST_QUEUES = "deadline:ListQueues";
	/** [List] deadline:ListSessionActions */
	static readonly LIST_SESSION_ACTIONS = "deadline:ListSessionActions";
	/** [List] deadline:ListSessions */
	static readonly LIST_SESSIONS = "deadline:ListSessions";
	/** [List] deadline:ListSessionsForWorker */
	static readonly LIST_SESSIONS_FOR_WORKER = "deadline:ListSessionsForWorker";
	/** [List] deadline:ListStepConsumers */
	static readonly LIST_STEP_CONSUMERS = "deadline:ListStepConsumers";
	/** [List] deadline:ListStepDependencies */
	static readonly LIST_STEP_DEPENDENCIES = "deadline:ListStepDependencies";
	/** [List] deadline:ListSteps */
	static readonly LIST_STEPS = "deadline:ListSteps";
	/** [List] deadline:ListStorageProfiles */
	static readonly LIST_STORAGE_PROFILES = "deadline:ListStorageProfiles";
	/** [List] deadline:ListStorageProfilesForQueue */
	static readonly LIST_STORAGE_PROFILES_FOR_QUEUE =
		"deadline:ListStorageProfilesForQueue";
	/** [Read] deadline:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "deadline:ListTagsForResource";
	/** [List] deadline:ListTasks */
	static readonly LIST_TASKS = "deadline:ListTasks";
	/** [List] deadline:ListVolumes */
	static readonly LIST_VOLUMES = "deadline:ListVolumes";
	/** [List] deadline:ListWorkers */
	static readonly LIST_WORKERS = "deadline:ListWorkers";
	/** [Write] deadline:PutMeteredProduct */
	static readonly PUT_METERED_PRODUCT = "deadline:PutMeteredProduct";
	/** [Read] deadline:SearchJobs */
	static readonly SEARCH_JOBS = "deadline:SearchJobs";
	/** [Read] deadline:SearchSteps */
	static readonly SEARCH_STEPS = "deadline:SearchSteps";
	/** [Read] deadline:SearchTasks */
	static readonly SEARCH_TASKS = "deadline:SearchTasks";
	/** [Read] deadline:SearchWorkers */
	static readonly SEARCH_WORKERS = "deadline:SearchWorkers";
	/** [Read] deadline:StartSessionsStatisticsAggregation */
	static readonly START_SESSIONS_STATISTICS_AGGREGATION =
		"deadline:StartSessionsStatisticsAggregation";
	/** [Tagging] deadline:TagResource */
	static readonly TAG_RESOURCE = "deadline:TagResource";
	/** [Tagging] deadline:UntagResource */
	static readonly UNTAG_RESOURCE = "deadline:UntagResource";
	/** [Write] deadline:UpdateBudget */
	static readonly UPDATE_BUDGET = "deadline:UpdateBudget";
	/** [Write] deadline:UpdateFarm */
	static readonly UPDATE_FARM = "deadline:UpdateFarm";
	/** [Write] deadline:UpdateFleet */
	static readonly UPDATE_FLEET = "deadline:UpdateFleet";
	/** [Write] deadline:UpdateJob */
	static readonly UPDATE_JOB = "deadline:UpdateJob";
	/** [Write] deadline:UpdateLimit */
	static readonly UPDATE_LIMIT = "deadline:UpdateLimit";
	/** [Write] deadline:UpdateMonitor */
	static readonly UPDATE_MONITOR = "deadline:UpdateMonitor";
	/** [Write] deadline:UpdateMonitorSettings */
	static readonly UPDATE_MONITOR_SETTINGS = "deadline:UpdateMonitorSettings";
	/** [Write] deadline:UpdateQueue */
	static readonly UPDATE_QUEUE = "deadline:UpdateQueue";
	/** [Write] deadline:UpdateQueueEnvironment */
	static readonly UPDATE_QUEUE_ENVIRONMENT = "deadline:UpdateQueueEnvironment";
	/** [Write] deadline:UpdateQueueFleetAssociation */
	static readonly UPDATE_QUEUE_FLEET_ASSOCIATION =
		"deadline:UpdateQueueFleetAssociation";
	/** [Write] deadline:UpdateQueueLimitAssociation */
	static readonly UPDATE_QUEUE_LIMIT_ASSOCIATION =
		"deadline:UpdateQueueLimitAssociation";
	/** [Write] deadline:UpdateSession */
	static readonly UPDATE_SESSION = "deadline:UpdateSession";
	/** [Write] deadline:UpdateStep */
	static readonly UPDATE_STEP = "deadline:UpdateStep";
	/** [Write] deadline:UpdateStorageProfile */
	static readonly UPDATE_STORAGE_PROFILE = "deadline:UpdateStorageProfile";
	/** [Write] deadline:UpdateTask */
	static readonly UPDATE_TASK = "deadline:UpdateTask";
	/** [Write] deadline:UpdateWorker */
	static readonly UPDATE_WORKER = "deadline:UpdateWorker";
	/** [Write] deadline:UpdateWorkerSchedule */
	static readonly UPDATE_WORKER_SCHEDULE = "deadline:UpdateWorkerSchedule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DeadlineActions.BATCH_GET_JOB_ENTITY,
		DeadlineActions.GET_APPLICATION_VERSION,
		DeadlineActions.GET_BUDGET,
		DeadlineActions.GET_FARM,
		DeadlineActions.GET_FLEET,
		DeadlineActions.GET_JOB,
		DeadlineActions.GET_JOB_TEMPLATE,
		DeadlineActions.GET_LICENSE_ENDPOINT,
		DeadlineActions.GET_LIMIT,
		DeadlineActions.GET_MONITOR,
		DeadlineActions.GET_MONITOR_SETTINGS,
		DeadlineActions.GET_QUEUE,
		DeadlineActions.GET_QUEUE_ENVIRONMENT,
		DeadlineActions.GET_QUEUE_FLEET_ASSOCIATION,
		DeadlineActions.GET_QUEUE_LIMIT_ASSOCIATION,
		DeadlineActions.GET_SESSION,
		DeadlineActions.GET_SESSION_ACTION,
		DeadlineActions.GET_SESSIONS_STATISTICS_AGGREGATION,
		DeadlineActions.GET_STEP,
		DeadlineActions.GET_STORAGE_PROFILE,
		DeadlineActions.GET_STORAGE_PROFILE_FOR_QUEUE,
		DeadlineActions.GET_TASK,
		DeadlineActions.GET_VOLUME,
		DeadlineActions.GET_WORKER,
		DeadlineActions.LIST_TAGS_FOR_RESOURCE,
		DeadlineActions.SEARCH_JOBS,
		DeadlineActions.SEARCH_STEPS,
		DeadlineActions.SEARCH_TASKS,
		DeadlineActions.SEARCH_WORKERS,
		DeadlineActions.START_SESSIONS_STATISTICS_AGGREGATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DeadlineActions.ASSUME_FLEET_ROLE_FOR_READ,
		DeadlineActions.ASSUME_FLEET_ROLE_FOR_WORKER,
		DeadlineActions.ASSUME_QUEUE_ROLE_FOR_READ,
		DeadlineActions.ASSUME_QUEUE_ROLE_FOR_USER,
		DeadlineActions.ASSUME_QUEUE_ROLE_FOR_WORKER,
		DeadlineActions.COPY_JOB_TEMPLATE,
		DeadlineActions.CREATE_BUDGET,
		DeadlineActions.CREATE_FARM,
		DeadlineActions.CREATE_FLEET,
		DeadlineActions.CREATE_JOB,
		DeadlineActions.CREATE_LICENSE_ENDPOINT,
		DeadlineActions.CREATE_LIMIT,
		DeadlineActions.CREATE_MONITOR,
		DeadlineActions.CREATE_QUEUE,
		DeadlineActions.CREATE_QUEUE_ENVIRONMENT,
		DeadlineActions.CREATE_QUEUE_FLEET_ASSOCIATION,
		DeadlineActions.CREATE_QUEUE_LIMIT_ASSOCIATION,
		DeadlineActions.CREATE_STORAGE_PROFILE,
		DeadlineActions.CREATE_WORKER,
		DeadlineActions.DELETE_BUDGET,
		DeadlineActions.DELETE_FARM,
		DeadlineActions.DELETE_FLEET,
		DeadlineActions.DELETE_LICENSE_ENDPOINT,
		DeadlineActions.DELETE_LIMIT,
		DeadlineActions.DELETE_METERED_PRODUCT,
		DeadlineActions.DELETE_MONITOR,
		DeadlineActions.DELETE_QUEUE,
		DeadlineActions.DELETE_QUEUE_ENVIRONMENT,
		DeadlineActions.DELETE_QUEUE_FLEET_ASSOCIATION,
		DeadlineActions.DELETE_QUEUE_LIMIT_ASSOCIATION,
		DeadlineActions.DELETE_STORAGE_PROFILE,
		DeadlineActions.DELETE_VOLUME,
		DeadlineActions.DELETE_WORKER,
		DeadlineActions.PUT_METERED_PRODUCT,
		DeadlineActions.UPDATE_BUDGET,
		DeadlineActions.UPDATE_FARM,
		DeadlineActions.UPDATE_FLEET,
		DeadlineActions.UPDATE_JOB,
		DeadlineActions.UPDATE_LIMIT,
		DeadlineActions.UPDATE_MONITOR,
		DeadlineActions.UPDATE_MONITOR_SETTINGS,
		DeadlineActions.UPDATE_QUEUE,
		DeadlineActions.UPDATE_QUEUE_ENVIRONMENT,
		DeadlineActions.UPDATE_QUEUE_FLEET_ASSOCIATION,
		DeadlineActions.UPDATE_QUEUE_LIMIT_ASSOCIATION,
		DeadlineActions.UPDATE_SESSION,
		DeadlineActions.UPDATE_STEP,
		DeadlineActions.UPDATE_STORAGE_PROFILE,
		DeadlineActions.UPDATE_TASK,
		DeadlineActions.UPDATE_WORKER,
		DeadlineActions.UPDATE_WORKER_SCHEDULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DeadlineActions.LIST_AVAILABLE_METERED_PRODUCTS,
		DeadlineActions.LIST_BUDGETS,
		DeadlineActions.LIST_FARM_MEMBERS,
		DeadlineActions.LIST_FARMS,
		DeadlineActions.LIST_FLEET_MEMBERS,
		DeadlineActions.LIST_FLEETS,
		DeadlineActions.LIST_JOB_MEMBERS,
		DeadlineActions.LIST_JOB_PARAMETER_DEFINITIONS,
		DeadlineActions.LIST_JOBS,
		DeadlineActions.LIST_LICENSE_ENDPOINTS,
		DeadlineActions.LIST_LIMITS,
		DeadlineActions.LIST_METERED_PRODUCTS,
		DeadlineActions.LIST_MONITORS,
		DeadlineActions.LIST_QUEUE_ENVIRONMENTS,
		DeadlineActions.LIST_QUEUE_FLEET_ASSOCIATIONS,
		DeadlineActions.LIST_QUEUE_LIMIT_ASSOCIATIONS,
		DeadlineActions.LIST_QUEUE_MEMBERS,
		DeadlineActions.LIST_QUEUES,
		DeadlineActions.LIST_SESSION_ACTIONS,
		DeadlineActions.LIST_SESSIONS,
		DeadlineActions.LIST_SESSIONS_FOR_WORKER,
		DeadlineActions.LIST_STEP_CONSUMERS,
		DeadlineActions.LIST_STEP_DEPENDENCIES,
		DeadlineActions.LIST_STEPS,
		DeadlineActions.LIST_STORAGE_PROFILES,
		DeadlineActions.LIST_STORAGE_PROFILES_FOR_QUEUE,
		DeadlineActions.LIST_TASKS,
		DeadlineActions.LIST_VOLUMES,
		DeadlineActions.LIST_WORKERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		DeadlineActions.ASSOCIATE_MEMBER_TO_FARM,
		DeadlineActions.ASSOCIATE_MEMBER_TO_FLEET,
		DeadlineActions.ASSOCIATE_MEMBER_TO_JOB,
		DeadlineActions.ASSOCIATE_MEMBER_TO_QUEUE,
		DeadlineActions.DISASSOCIATE_MEMBER_FROM_FARM,
		DeadlineActions.DISASSOCIATE_MEMBER_FROM_FLEET,
		DeadlineActions.DISASSOCIATE_MEMBER_FROM_JOB,
		DeadlineActions.DISASSOCIATE_MEMBER_FROM_QUEUE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DeadlineActions.TAG_RESOURCE,
		DeadlineActions.UNTAG_RESOURCE,
	];
}

const BudgetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/budget/(?<budgetId>[^:/?]+)$",
);
const FarmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)$",
);
const FleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/fleet/(?<fleetId>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/queue/(?<queueId>[^:/?]+)/job/(?<jobId>[^:/?]+)$",
);
const LicenseEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):license-endpoint/(?<licenseEndpointId>[^:/?]+)$",
);
const MonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<monitorId>[^:/?]+)$",
);
const QueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/queue/(?<queueId>[^:/?]+)$",
);
const VolumeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/fleet/(?<fleetId>[^:/?]+)/volume/(?<volumeId>[^:/?]+)$",
);
const WorkerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):deadline:(?<region>[^:]*):(?<account>[^:]*):farm/(?<farmId>[^:/?]+)/fleet/(?<fleetId>[^:/?]+)/worker/(?<workerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for deadline resources.
 */
export class DeadlineResources {
	/**
	 * Builds an ARN for the budget resource.
	 */
	static budget(props: {
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
	}): string {
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
	static parseBudgetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		budgetId: string;
	} {
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
	static farm(props: {
		/** The FarmId component of the ARN. */
		readonly farmId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFarmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
	} {
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
	static fleet(props: {
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
	}): string {
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
	static parseFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		fleetId: string;
	} {
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
	static job(props: {
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
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		queueId: string;
		jobId: string;
	} {
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
	static licenseEndpoint(props: {
		/** The LicenseEndpointId component of the ARN. */
		readonly licenseEndpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLicenseEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		licenseEndpointId: string;
	} {
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
	static monitor(props: {
		/** The MonitorId component of the ARN. */
		readonly monitorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMonitorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		monitorId: string;
	} {
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
	static queue(props: {
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
	}): string {
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
	static parseQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		queueId: string;
	} {
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
	static volume(props: {
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
	}): string {
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
	static parseVolumeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		fleetId: string;
		volumeId: string;
	} {
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
	static worker(props: {
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
	}): string {
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
	static parseWorkerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		farmId: string;
		fleetId: string;
		workerId: string;
	} {
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
	static readonly ASSOCIATE_MEMBER_TO_FARM: string[] = [
		"deadline:AssociateMemberToFarm",
	];
	/** IAM actions required for the AssociateMemberToFleet API call. */
	static readonly ASSOCIATE_MEMBER_TO_FLEET: string[] = [
		"deadline:AssociateMemberToFleet",
	];
	/** IAM actions required for the AssociateMemberToJob API call. */
	static readonly ASSOCIATE_MEMBER_TO_JOB: string[] = [
		"deadline:AssociateMemberToJob",
	];
	/** IAM actions required for the AssociateMemberToQueue API call. */
	static readonly ASSOCIATE_MEMBER_TO_QUEUE: string[] = [
		"deadline:AssociateMemberToQueue",
	];
	/** IAM actions required for the AssumeFleetRoleForRead API call. */
	static readonly ASSUME_FLEET_ROLE_FOR_READ: string[] = [
		"deadline:AssumeFleetRoleForRead",
	];
	/** IAM actions required for the AssumeFleetRoleForWorker API call. */
	static readonly ASSUME_FLEET_ROLE_FOR_WORKER: string[] = [
		"deadline:AssumeFleetRoleForWorker",
	];
	/** IAM actions required for the AssumeQueueRoleForRead API call. */
	static readonly ASSUME_QUEUE_ROLE_FOR_READ: string[] = [
		"deadline:AssumeQueueRoleForRead",
	];
	/** IAM actions required for the AssumeQueueRoleForUser API call. */
	static readonly ASSUME_QUEUE_ROLE_FOR_USER: string[] = [
		"deadline:AssumeQueueRoleForUser",
	];
	/** IAM actions required for the AssumeQueueRoleForWorker API call. */
	static readonly ASSUME_QUEUE_ROLE_FOR_WORKER: string[] = [
		"deadline:AssumeQueueRoleForWorker",
	];
	/** IAM actions required for the BatchGetJob API call. */
	static readonly BATCH_GET_JOB: string[] = ["deadline:GetJob"];
	/** IAM actions required for the BatchGetJobEntity API call. */
	static readonly BATCH_GET_JOB_ENTITY: string[] = [
		"deadline:BatchGetJobEntity",
	];
	/** IAM actions required for the BatchGetSession API call. */
	static readonly BATCH_GET_SESSION: string[] = ["deadline:GetSession"];
	/** IAM actions required for the BatchGetSessionAction API call. */
	static readonly BATCH_GET_SESSION_ACTION: string[] = [
		"deadline:GetSessionAction",
	];
	/** IAM actions required for the BatchGetStep API call. */
	static readonly BATCH_GET_STEP: string[] = ["deadline:GetStep"];
	/** IAM actions required for the BatchGetTask API call. */
	static readonly BATCH_GET_TASK: string[] = ["deadline:GetTask"];
	/** IAM actions required for the BatchGetWorker API call. */
	static readonly BATCH_GET_WORKER: string[] = ["deadline:GetWorker"];
	/** IAM actions required for the BatchUpdateJob API call. */
	static readonly BATCH_UPDATE_JOB: string[] = ["deadline:UpdateJob"];
	/** IAM actions required for the BatchUpdateTask API call. */
	static readonly BATCH_UPDATE_TASK: string[] = ["deadline:UpdateTask"];
	/** IAM actions required for the CopyJobTemplate API call. */
	static readonly COPY_JOB_TEMPLATE: string[] = [
		"deadline:CopyJobTemplate",
		"deadline:GetJobTemplate",
	];
	/** IAM actions required for the CreateBudget API call. */
	static readonly CREATE_BUDGET: string[] = [
		"deadline:CreateBudget",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateFarm API call. */
	static readonly CREATE_FARM: string[] = [
		"deadline:CreateFarm",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CREATE_FLEET: string[] = [
		"deadline:CreateFleet",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"deadline:CreateJob",
		"deadline:GetJobTemplate",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateLicenseEndpoint API call. */
	static readonly CREATE_LICENSE_ENDPOINT: string[] = [
		"deadline:CreateLicenseEndpoint",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateLimit API call. */
	static readonly CREATE_LIMIT: string[] = ["deadline:CreateLimit"];
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CREATE_MONITOR: string[] = [
		"deadline:CreateMonitor",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CREATE_QUEUE: string[] = [
		"deadline:CreateQueue",
		"iam:PassRole",
		"deadline:TagResource",
	];
	/** IAM actions required for the CreateQueueEnvironment API call. */
	static readonly CREATE_QUEUE_ENVIRONMENT: string[] = [
		"deadline:CreateQueueEnvironment",
	];
	/** IAM actions required for the CreateQueueFleetAssociation API call. */
	static readonly CREATE_QUEUE_FLEET_ASSOCIATION: string[] = [
		"deadline:CreateQueueFleetAssociation",
	];
	/** IAM actions required for the CreateQueueLimitAssociation API call. */
	static readonly CREATE_QUEUE_LIMIT_ASSOCIATION: string[] = [
		"deadline:CreateQueueLimitAssociation",
	];
	/** IAM actions required for the CreateStorageProfile API call. */
	static readonly CREATE_STORAGE_PROFILE: string[] = [
		"deadline:CreateStorageProfile",
	];
	/** IAM actions required for the CreateWorker API call. */
	static readonly CREATE_WORKER: string[] = [
		"deadline:CreateWorker",
		"deadline:ListTagsForResource",
		"deadline:TagResource",
	];
	/** IAM actions required for the DeleteBudget API call. */
	static readonly DELETE_BUDGET: string[] = ["deadline:DeleteBudget"];
	/** IAM actions required for the DeleteFarm API call. */
	static readonly DELETE_FARM: string[] = ["deadline:DeleteFarm"];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DELETE_FLEET: string[] = ["deadline:DeleteFleet"];
	/** IAM actions required for the DeleteLicenseEndpoint API call. */
	static readonly DELETE_LICENSE_ENDPOINT: string[] = [
		"deadline:DeleteLicenseEndpoint",
	];
	/** IAM actions required for the DeleteLimit API call. */
	static readonly DELETE_LIMIT: string[] = ["deadline:DeleteLimit"];
	/** IAM actions required for the DeleteMeteredProduct API call. */
	static readonly DELETE_METERED_PRODUCT: string[] = [
		"deadline:DeleteMeteredProduct",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DELETE_MONITOR: string[] = ["deadline:DeleteMonitor"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DELETE_QUEUE: string[] = ["deadline:DeleteQueue"];
	/** IAM actions required for the DeleteQueueEnvironment API call. */
	static readonly DELETE_QUEUE_ENVIRONMENT: string[] = [
		"deadline:DeleteQueueEnvironment",
	];
	/** IAM actions required for the DeleteQueueFleetAssociation API call. */
	static readonly DELETE_QUEUE_FLEET_ASSOCIATION: string[] = [
		"deadline:DeleteQueueFleetAssociation",
	];
	/** IAM actions required for the DeleteQueueLimitAssociation API call. */
	static readonly DELETE_QUEUE_LIMIT_ASSOCIATION: string[] = [
		"deadline:DeleteQueueLimitAssociation",
	];
	/** IAM actions required for the DeleteStorageProfile API call. */
	static readonly DELETE_STORAGE_PROFILE: string[] = [
		"deadline:DeleteStorageProfile",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DELETE_VOLUME: string[] = ["deadline:DeleteVolume"];
	/** IAM actions required for the DeleteWorker API call. */
	static readonly DELETE_WORKER: string[] = ["deadline:DeleteWorker"];
	/** IAM actions required for the DisassociateMemberFromFarm API call. */
	static readonly DISASSOCIATE_MEMBER_FROM_FARM: string[] = [
		"deadline:DisassociateMemberFromFarm",
	];
	/** IAM actions required for the DisassociateMemberFromFleet API call. */
	static readonly DISASSOCIATE_MEMBER_FROM_FLEET: string[] = [
		"deadline:DisassociateMemberFromFleet",
	];
	/** IAM actions required for the DisassociateMemberFromJob API call. */
	static readonly DISASSOCIATE_MEMBER_FROM_JOB: string[] = [
		"deadline:DisassociateMemberFromJob",
	];
	/** IAM actions required for the DisassociateMemberFromQueue API call. */
	static readonly DISASSOCIATE_MEMBER_FROM_QUEUE: string[] = [
		"deadline:DisassociateMemberFromQueue",
	];
	/** IAM actions required for the GetBudget API call. */
	static readonly GET_BUDGET: string[] = ["deadline:GetBudget"];
	/** IAM actions required for the GetFarm API call. */
	static readonly GET_FARM: string[] = ["deadline:GetFarm"];
	/** IAM actions required for the GetFleet API call. */
	static readonly GET_FLEET: string[] = ["deadline:GetFleet"];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["deadline:GetJob"];
	/** IAM actions required for the GetLicenseEndpoint API call. */
	static readonly GET_LICENSE_ENDPOINT: string[] = [
		"deadline:GetLicenseEndpoint",
	];
	/** IAM actions required for the GetLimit API call. */
	static readonly GET_LIMIT: string[] = ["deadline:GetLimit"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly GET_MONITOR: string[] = ["deadline:GetMonitor"];
	/** IAM actions required for the GetMonitorSettings API call. */
	static readonly GET_MONITOR_SETTINGS: string[] = [
		"deadline:GetMonitorSettings",
	];
	/** IAM actions required for the GetQueue API call. */
	static readonly GET_QUEUE: string[] = ["deadline:GetQueue"];
	/** IAM actions required for the GetQueueEnvironment API call. */
	static readonly GET_QUEUE_ENVIRONMENT: string[] = [
		"deadline:GetQueueEnvironment",
	];
	/** IAM actions required for the GetQueueFleetAssociation API call. */
	static readonly GET_QUEUE_FLEET_ASSOCIATION: string[] = [
		"deadline:GetQueueFleetAssociation",
	];
	/** IAM actions required for the GetQueueLimitAssociation API call. */
	static readonly GET_QUEUE_LIMIT_ASSOCIATION: string[] = [
		"deadline:GetQueueLimitAssociation",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["deadline:GetSession"];
	/** IAM actions required for the GetSessionAction API call. */
	static readonly GET_SESSION_ACTION: string[] = ["deadline:GetSessionAction"];
	/** IAM actions required for the GetSessionsStatisticsAggregation API call. */
	static readonly GET_SESSIONS_STATISTICS_AGGREGATION: string[] = [
		"deadline:GetSessionsStatisticsAggregation",
	];
	/** IAM actions required for the GetStep API call. */
	static readonly GET_STEP: string[] = ["deadline:GetStep"];
	/** IAM actions required for the GetStorageProfile API call. */
	static readonly GET_STORAGE_PROFILE: string[] = [
		"deadline:GetStorageProfile",
	];
	/** IAM actions required for the GetStorageProfileForQueue API call. */
	static readonly GET_STORAGE_PROFILE_FOR_QUEUE: string[] = [
		"deadline:GetStorageProfileForQueue",
	];
	/** IAM actions required for the GetTask API call. */
	static readonly GET_TASK: string[] = ["deadline:GetTask"];
	/** IAM actions required for the GetVolume API call. */
	static readonly GET_VOLUME: string[] = ["deadline:GetVolume"];
	/** IAM actions required for the GetWorker API call. */
	static readonly GET_WORKER: string[] = ["deadline:GetWorker"];
	/** IAM actions required for the ListAvailableMeteredProducts API call. */
	static readonly LIST_AVAILABLE_METERED_PRODUCTS: string[] = [
		"deadline:ListAvailableMeteredProducts",
	];
	/** IAM actions required for the ListBudgets API call. */
	static readonly LIST_BUDGETS: string[] = ["deadline:ListBudgets"];
	/** IAM actions required for the ListFarmMembers API call. */
	static readonly LIST_FARM_MEMBERS: string[] = ["deadline:ListFarmMembers"];
	/** IAM actions required for the ListFarms API call. */
	static readonly LIST_FARMS: string[] = ["deadline:ListFarms"];
	/** IAM actions required for the ListFleetMembers API call. */
	static readonly LIST_FLEET_MEMBERS: string[] = ["deadline:ListFleetMembers"];
	/** IAM actions required for the ListFleets API call. */
	static readonly LIST_FLEETS: string[] = ["deadline:ListFleets"];
	/** IAM actions required for the ListJobMembers API call. */
	static readonly LIST_JOB_MEMBERS: string[] = ["deadline:ListJobMembers"];
	/** IAM actions required for the ListJobParameterDefinitions API call. */
	static readonly LIST_JOB_PARAMETER_DEFINITIONS: string[] = [
		"deadline:ListJobParameterDefinitions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["deadline:ListJobs"];
	/** IAM actions required for the ListLicenseEndpoints API call. */
	static readonly LIST_LICENSE_ENDPOINTS: string[] = [
		"deadline:ListLicenseEndpoints",
	];
	/** IAM actions required for the ListLimits API call. */
	static readonly LIST_LIMITS: string[] = ["deadline:ListLimits"];
	/** IAM actions required for the ListMeteredProducts API call. */
	static readonly LIST_METERED_PRODUCTS: string[] = [
		"deadline:ListMeteredProducts",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly LIST_MONITORS: string[] = ["deadline:ListMonitors"];
	/** IAM actions required for the ListQueueEnvironments API call. */
	static readonly LIST_QUEUE_ENVIRONMENTS: string[] = [
		"deadline:ListQueueEnvironments",
	];
	/** IAM actions required for the ListQueueFleetAssociations API call. */
	static readonly LIST_QUEUE_FLEET_ASSOCIATIONS: string[] = [
		"deadline:ListQueueFleetAssociations",
	];
	/** IAM actions required for the ListQueueLimitAssociations API call. */
	static readonly LIST_QUEUE_LIMIT_ASSOCIATIONS: string[] = [
		"deadline:ListQueueLimitAssociations",
	];
	/** IAM actions required for the ListQueueMembers API call. */
	static readonly LIST_QUEUE_MEMBERS: string[] = ["deadline:ListQueueMembers"];
	/** IAM actions required for the ListQueues API call. */
	static readonly LIST_QUEUES: string[] = ["deadline:ListQueues"];
	/** IAM actions required for the ListSessionActions API call. */
	static readonly LIST_SESSION_ACTIONS: string[] = [
		"deadline:ListSessionActions",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["deadline:ListSessions"];
	/** IAM actions required for the ListSessionsForWorker API call. */
	static readonly LIST_SESSIONS_FOR_WORKER: string[] = [
		"deadline:ListSessionsForWorker",
	];
	/** IAM actions required for the ListStepConsumers API call. */
	static readonly LIST_STEP_CONSUMERS: string[] = [
		"deadline:ListStepConsumers",
	];
	/** IAM actions required for the ListStepDependencies API call. */
	static readonly LIST_STEP_DEPENDENCIES: string[] = [
		"deadline:ListStepDependencies",
	];
	/** IAM actions required for the ListSteps API call. */
	static readonly LIST_STEPS: string[] = ["deadline:ListSteps"];
	/** IAM actions required for the ListStorageProfiles API call. */
	static readonly LIST_STORAGE_PROFILES: string[] = [
		"deadline:ListStorageProfiles",
	];
	/** IAM actions required for the ListStorageProfilesForQueue API call. */
	static readonly LIST_STORAGE_PROFILES_FOR_QUEUE: string[] = [
		"deadline:ListStorageProfilesForQueue",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"deadline:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly LIST_TASKS: string[] = ["deadline:ListTasks"];
	/** IAM actions required for the ListVolumes API call. */
	static readonly LIST_VOLUMES: string[] = ["deadline:ListVolumes"];
	/** IAM actions required for the ListWorkers API call. */
	static readonly LIST_WORKERS: string[] = ["deadline:ListWorkers"];
	/** IAM actions required for the PutMeteredProduct API call. */
	static readonly PUT_METERED_PRODUCT: string[] = [
		"deadline:PutMeteredProduct",
	];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SEARCH_JOBS: string[] = ["deadline:SearchJobs"];
	/** IAM actions required for the SearchSteps API call. */
	static readonly SEARCH_STEPS: string[] = ["deadline:SearchSteps"];
	/** IAM actions required for the SearchTasks API call. */
	static readonly SEARCH_TASKS: string[] = ["deadline:SearchTasks"];
	/** IAM actions required for the SearchWorkers API call. */
	static readonly SEARCH_WORKERS: string[] = ["deadline:SearchWorkers"];
	/** IAM actions required for the StartSessionsStatisticsAggregation API call. */
	static readonly START_SESSIONS_STATISTICS_AGGREGATION: string[] = [
		"deadline:StartSessionsStatisticsAggregation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["deadline:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["deadline:UntagResource"];
	/** IAM actions required for the UpdateBudget API call. */
	static readonly UPDATE_BUDGET: string[] = ["deadline:UpdateBudget"];
	/** IAM actions required for the UpdateFarm API call. */
	static readonly UPDATE_FARM: string[] = ["deadline:UpdateFarm"];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UPDATE_FLEET: string[] = [
		"iam:PassRole",
		"deadline:UpdateFleet",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UPDATE_JOB: string[] = ["deadline:UpdateJob"];
	/** IAM actions required for the UpdateLimit API call. */
	static readonly UPDATE_LIMIT: string[] = ["deadline:UpdateLimit"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UPDATE_MONITOR: string[] = [
		"iam:PassRole",
		"deadline:UpdateMonitor",
	];
	/** IAM actions required for the UpdateMonitorSettings API call. */
	static readonly UPDATE_MONITOR_SETTINGS: string[] = [
		"deadline:UpdateMonitorSettings",
	];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UPDATE_QUEUE: string[] = [
		"iam:PassRole",
		"deadline:UpdateQueue",
	];
	/** IAM actions required for the UpdateQueueEnvironment API call. */
	static readonly UPDATE_QUEUE_ENVIRONMENT: string[] = [
		"deadline:UpdateQueueEnvironment",
	];
	/** IAM actions required for the UpdateQueueFleetAssociation API call. */
	static readonly UPDATE_QUEUE_FLEET_ASSOCIATION: string[] = [
		"deadline:UpdateQueueFleetAssociation",
	];
	/** IAM actions required for the UpdateQueueLimitAssociation API call. */
	static readonly UPDATE_QUEUE_LIMIT_ASSOCIATION: string[] = [
		"deadline:UpdateQueueLimitAssociation",
	];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UPDATE_SESSION: string[] = ["deadline:UpdateSession"];
	/** IAM actions required for the UpdateStep API call. */
	static readonly UPDATE_STEP: string[] = ["deadline:UpdateStep"];
	/** IAM actions required for the UpdateStorageProfile API call. */
	static readonly UPDATE_STORAGE_PROFILE: string[] = [
		"deadline:UpdateStorageProfile",
	];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UPDATE_TASK: string[] = ["deadline:UpdateTask"];
	/** IAM actions required for the UpdateWorker API call. */
	static readonly UPDATE_WORKER: string[] = ["deadline:UpdateWorker"];
	/** IAM actions required for the UpdateWorkerSchedule API call. */
	static readonly UPDATE_WORKER_SCHEDULE: string[] = [
		"deadline:UpdateWorkerSchedule",
	];
}

/**
 * Condition key constants and builders for deadline.
 */
export class DeadlineConditions {
	/** Condition keys applicable to the AssociateMemberToFarm action. */
	static readonly ASSOCIATE_MEMBER_TO_FARM_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToFleet action. */
	static readonly ASSOCIATE_MEMBER_TO_FLEET_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToJob action. */
	static readonly ASSOCIATE_MEMBER_TO_JOB_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the AssociateMemberToQueue action. */
	static readonly ASSOCIATE_MEMBER_TO_QUEUE_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
		"deadline:MembershipLevel",
	];
	/** Condition keys applicable to the CreateBudget action. */
	static readonly CREATE_BUDGET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFarm action. */
	static readonly CREATE_FARM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseEndpoint action. */
	static readonly CREATE_LICENSE_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CREATE_MONITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CREATE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorker action. */
	static readonly CREATE_WORKER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateMemberFromFarm action. */
	static readonly DISASSOCIATE_MEMBER_FROM_FARM_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromFleet action. */
	static readonly DISASSOCIATE_MEMBER_FROM_FLEET_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromJob action. */
	static readonly DISASSOCIATE_MEMBER_FROM_JOB_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the DisassociateMemberFromQueue action. */
	static readonly DISASSOCIATE_MEMBER_FROM_QUEUE_CONDITION_KEYS: string[] = [
		"deadline:AssociatedMembershipLevel",
	];
	/** Condition keys applicable to the ListFarms action. */
	static readonly LIST_FARMS_CONDITION_KEYS: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListFleets action. */
	static readonly LIST_FLEETS_CONDITION_KEYS: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListJobs action. */
	static readonly LIST_JOBS_CONDITION_KEYS: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListQueues action. */
	static readonly LIST_QUEUES_CONDITION_KEYS: string[] = [
		"deadline:PrincipalId",
		"deadline:RequesterPrincipalId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"deadline:CalledAction",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"deadline:CalledAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
