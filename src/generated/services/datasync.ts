// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/datasync.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the datasync service.
 */
export class DatasyncActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "datasync";

	/** [Write] datasync:AddStorageSystem */
	static readonly ADD_STORAGE_SYSTEM = "datasync:AddStorageSystem";
	/** [Write] datasync:CancelTaskExecution */
	static readonly CANCEL_TASK_EXECUTION = "datasync:CancelTaskExecution";
	/** [Write] datasync:CreateAgent */
	static readonly CREATE_AGENT = "datasync:CreateAgent";
	/** [Write] datasync:CreateLocationAzureBlob */
	static readonly CREATE_LOCATION_AZURE_BLOB =
		"datasync:CreateLocationAzureBlob";
	/** [Write] datasync:CreateLocationEfs */
	static readonly CREATE_LOCATION_EFS = "datasync:CreateLocationEfs";
	/** [Write] datasync:CreateLocationFsxLustre */
	static readonly CREATE_LOCATION_FSX_LUSTRE =
		"datasync:CreateLocationFsxLustre";
	/** [Write] datasync:CreateLocationFsxOntap */
	static readonly CREATE_LOCATION_FSX_ONTAP = "datasync:CreateLocationFsxOntap";
	/** [Write] datasync:CreateLocationFsxOpenZfs */
	static readonly CREATE_LOCATION_FSX_OPEN_ZFS =
		"datasync:CreateLocationFsxOpenZfs";
	/** [Write] datasync:CreateLocationFsxWindows */
	static readonly CREATE_LOCATION_FSX_WINDOWS =
		"datasync:CreateLocationFsxWindows";
	/** [Write] datasync:CreateLocationHdfs */
	static readonly CREATE_LOCATION_HDFS = "datasync:CreateLocationHdfs";
	/** [Write] datasync:CreateLocationNfs */
	static readonly CREATE_LOCATION_NFS = "datasync:CreateLocationNfs";
	/** [Write] datasync:CreateLocationObjectStorage */
	static readonly CREATE_LOCATION_OBJECT_STORAGE =
		"datasync:CreateLocationObjectStorage";
	/** [Write] datasync:CreateLocationS3 */
	static readonly CREATE_LOCATION_S3 = "datasync:CreateLocationS3";
	/** [Write] datasync:CreateLocationSmb */
	static readonly CREATE_LOCATION_SMB = "datasync:CreateLocationSmb";
	/** [Write] datasync:CreateTask */
	static readonly CREATE_TASK = "datasync:CreateTask";
	/** [Write] datasync:DeleteAgent */
	static readonly DELETE_AGENT = "datasync:DeleteAgent";
	/** [Write] datasync:DeleteLocation */
	static readonly DELETE_LOCATION = "datasync:DeleteLocation";
	/** [Write] datasync:DeleteTask */
	static readonly DELETE_TASK = "datasync:DeleteTask";
	/** [Read] datasync:DescribeAgent */
	static readonly DESCRIBE_AGENT = "datasync:DescribeAgent";
	/** [Read] datasync:DescribeDiscoveryJob */
	static readonly DESCRIBE_DISCOVERY_JOB = "datasync:DescribeDiscoveryJob";
	/** [Read] datasync:DescribeLocationAzureBlob */
	static readonly DESCRIBE_LOCATION_AZURE_BLOB =
		"datasync:DescribeLocationAzureBlob";
	/** [Read] datasync:DescribeLocationEfs */
	static readonly DESCRIBE_LOCATION_EFS = "datasync:DescribeLocationEfs";
	/** [Read] datasync:DescribeLocationFsxLustre */
	static readonly DESCRIBE_LOCATION_FSX_LUSTRE =
		"datasync:DescribeLocationFsxLustre";
	/** [Read] datasync:DescribeLocationFsxOntap */
	static readonly DESCRIBE_LOCATION_FSX_ONTAP =
		"datasync:DescribeLocationFsxOntap";
	/** [Read] datasync:DescribeLocationFsxOpenZfs */
	static readonly DESCRIBE_LOCATION_FSX_OPEN_ZFS =
		"datasync:DescribeLocationFsxOpenZfs";
	/** [Read] datasync:DescribeLocationFsxWindows */
	static readonly DESCRIBE_LOCATION_FSX_WINDOWS =
		"datasync:DescribeLocationFsxWindows";
	/** [Read] datasync:DescribeLocationHdfs */
	static readonly DESCRIBE_LOCATION_HDFS = "datasync:DescribeLocationHdfs";
	/** [Read] datasync:DescribeLocationNfs */
	static readonly DESCRIBE_LOCATION_NFS = "datasync:DescribeLocationNfs";
	/** [Read] datasync:DescribeLocationObjectStorage */
	static readonly DESCRIBE_LOCATION_OBJECT_STORAGE =
		"datasync:DescribeLocationObjectStorage";
	/** [Read] datasync:DescribeLocationS3 */
	static readonly DESCRIBE_LOCATION_S3 = "datasync:DescribeLocationS3";
	/** [Read] datasync:DescribeLocationSmb */
	static readonly DESCRIBE_LOCATION_SMB = "datasync:DescribeLocationSmb";
	/** [Read] datasync:DescribeStorageSystem */
	static readonly DESCRIBE_STORAGE_SYSTEM = "datasync:DescribeStorageSystem";
	/** [List] datasync:DescribeStorageSystemResourceMetrics */
	static readonly DESCRIBE_STORAGE_SYSTEM_RESOURCE_METRICS =
		"datasync:DescribeStorageSystemResourceMetrics";
	/** [List] datasync:DescribeStorageSystemResources */
	static readonly DESCRIBE_STORAGE_SYSTEM_RESOURCES =
		"datasync:DescribeStorageSystemResources";
	/** [Read] datasync:DescribeTask */
	static readonly DESCRIBE_TASK = "datasync:DescribeTask";
	/** [Read] datasync:DescribeTaskExecution */
	static readonly DESCRIBE_TASK_EXECUTION = "datasync:DescribeTaskExecution";
	/** [Write] datasync:GenerateRecommendations */
	static readonly GENERATE_RECOMMENDATIONS = "datasync:GenerateRecommendations";
	/** [List] datasync:ListAgents */
	static readonly LIST_AGENTS = "datasync:ListAgents";
	/** [List] datasync:ListDiscoveryJobs */
	static readonly LIST_DISCOVERY_JOBS = "datasync:ListDiscoveryJobs";
	/** [List] datasync:ListLocations */
	static readonly LIST_LOCATIONS = "datasync:ListLocations";
	/** [List] datasync:ListStorageSystems */
	static readonly LIST_STORAGE_SYSTEMS = "datasync:ListStorageSystems";
	/** [Read] datasync:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "datasync:ListTagsForResource";
	/** [List] datasync:ListTaskExecutions */
	static readonly LIST_TASK_EXECUTIONS = "datasync:ListTaskExecutions";
	/** [List] datasync:ListTasks */
	static readonly LIST_TASKS = "datasync:ListTasks";
	/** [Write] datasync:RemoveStorageSystem */
	static readonly REMOVE_STORAGE_SYSTEM = "datasync:RemoveStorageSystem";
	/** [Write] datasync:StartDiscoveryJob */
	static readonly START_DISCOVERY_JOB = "datasync:StartDiscoveryJob";
	/** [Write] datasync:StartTaskExecution */
	static readonly START_TASK_EXECUTION = "datasync:StartTaskExecution";
	/** [Write] datasync:StopDiscoveryJob */
	static readonly STOP_DISCOVERY_JOB = "datasync:StopDiscoveryJob";
	/** [Tagging] datasync:TagResource */
	static readonly TAG_RESOURCE = "datasync:TagResource";
	/** [Tagging] datasync:UntagResource */
	static readonly UNTAG_RESOURCE = "datasync:UntagResource";
	/** [Write] datasync:UpdateAgent */
	static readonly UPDATE_AGENT = "datasync:UpdateAgent";
	/** [Write] datasync:UpdateDiscoveryJob */
	static readonly UPDATE_DISCOVERY_JOB = "datasync:UpdateDiscoveryJob";
	/** [Write] datasync:UpdateLocationAzureBlob */
	static readonly UPDATE_LOCATION_AZURE_BLOB =
		"datasync:UpdateLocationAzureBlob";
	/** [Write] datasync:UpdateLocationEfs */
	static readonly UPDATE_LOCATION_EFS = "datasync:UpdateLocationEfs";
	/** [Write] datasync:UpdateLocationFsxLustre */
	static readonly UPDATE_LOCATION_FSX_LUSTRE =
		"datasync:UpdateLocationFsxLustre";
	/** [Write] datasync:UpdateLocationFsxOntap */
	static readonly UPDATE_LOCATION_FSX_ONTAP = "datasync:UpdateLocationFsxOntap";
	/** [Write] datasync:UpdateLocationFsxOpenZfs */
	static readonly UPDATE_LOCATION_FSX_OPEN_ZFS =
		"datasync:UpdateLocationFsxOpenZfs";
	/** [Write] datasync:UpdateLocationFsxWindows */
	static readonly UPDATE_LOCATION_FSX_WINDOWS =
		"datasync:UpdateLocationFsxWindows";
	/** [Write] datasync:UpdateLocationHdfs */
	static readonly UPDATE_LOCATION_HDFS = "datasync:UpdateLocationHdfs";
	/** [Write] datasync:UpdateLocationNfs */
	static readonly UPDATE_LOCATION_NFS = "datasync:UpdateLocationNfs";
	/** [Write] datasync:UpdateLocationObjectStorage */
	static readonly UPDATE_LOCATION_OBJECT_STORAGE =
		"datasync:UpdateLocationObjectStorage";
	/** [Write] datasync:UpdateLocationS3 */
	static readonly UPDATE_LOCATION_S3 = "datasync:UpdateLocationS3";
	/** [Write] datasync:UpdateLocationSmb */
	static readonly UPDATE_LOCATION_SMB = "datasync:UpdateLocationSmb";
	/** [Write] datasync:UpdateStorageSystem */
	static readonly UPDATE_STORAGE_SYSTEM = "datasync:UpdateStorageSystem";
	/** [Write] datasync:UpdateTask */
	static readonly UPDATE_TASK = "datasync:UpdateTask";
	/** [Write] datasync:UpdateTaskExecution */
	static readonly UPDATE_TASK_EXECUTION = "datasync:UpdateTaskExecution";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DatasyncActions.DESCRIBE_AGENT,
		DatasyncActions.DESCRIBE_DISCOVERY_JOB,
		DatasyncActions.DESCRIBE_LOCATION_AZURE_BLOB,
		DatasyncActions.DESCRIBE_LOCATION_EFS,
		DatasyncActions.DESCRIBE_LOCATION_FSX_LUSTRE,
		DatasyncActions.DESCRIBE_LOCATION_FSX_ONTAP,
		DatasyncActions.DESCRIBE_LOCATION_FSX_OPEN_ZFS,
		DatasyncActions.DESCRIBE_LOCATION_FSX_WINDOWS,
		DatasyncActions.DESCRIBE_LOCATION_HDFS,
		DatasyncActions.DESCRIBE_LOCATION_NFS,
		DatasyncActions.DESCRIBE_LOCATION_OBJECT_STORAGE,
		DatasyncActions.DESCRIBE_LOCATION_S3,
		DatasyncActions.DESCRIBE_LOCATION_SMB,
		DatasyncActions.DESCRIBE_STORAGE_SYSTEM,
		DatasyncActions.DESCRIBE_TASK,
		DatasyncActions.DESCRIBE_TASK_EXECUTION,
		DatasyncActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DatasyncActions.ADD_STORAGE_SYSTEM,
		DatasyncActions.CANCEL_TASK_EXECUTION,
		DatasyncActions.CREATE_AGENT,
		DatasyncActions.CREATE_LOCATION_AZURE_BLOB,
		DatasyncActions.CREATE_LOCATION_EFS,
		DatasyncActions.CREATE_LOCATION_FSX_LUSTRE,
		DatasyncActions.CREATE_LOCATION_FSX_ONTAP,
		DatasyncActions.CREATE_LOCATION_FSX_OPEN_ZFS,
		DatasyncActions.CREATE_LOCATION_FSX_WINDOWS,
		DatasyncActions.CREATE_LOCATION_HDFS,
		DatasyncActions.CREATE_LOCATION_NFS,
		DatasyncActions.CREATE_LOCATION_OBJECT_STORAGE,
		DatasyncActions.CREATE_LOCATION_S3,
		DatasyncActions.CREATE_LOCATION_SMB,
		DatasyncActions.CREATE_TASK,
		DatasyncActions.DELETE_AGENT,
		DatasyncActions.DELETE_LOCATION,
		DatasyncActions.DELETE_TASK,
		DatasyncActions.GENERATE_RECOMMENDATIONS,
		DatasyncActions.REMOVE_STORAGE_SYSTEM,
		DatasyncActions.START_DISCOVERY_JOB,
		DatasyncActions.START_TASK_EXECUTION,
		DatasyncActions.STOP_DISCOVERY_JOB,
		DatasyncActions.UPDATE_AGENT,
		DatasyncActions.UPDATE_DISCOVERY_JOB,
		DatasyncActions.UPDATE_LOCATION_AZURE_BLOB,
		DatasyncActions.UPDATE_LOCATION_EFS,
		DatasyncActions.UPDATE_LOCATION_FSX_LUSTRE,
		DatasyncActions.UPDATE_LOCATION_FSX_ONTAP,
		DatasyncActions.UPDATE_LOCATION_FSX_OPEN_ZFS,
		DatasyncActions.UPDATE_LOCATION_FSX_WINDOWS,
		DatasyncActions.UPDATE_LOCATION_HDFS,
		DatasyncActions.UPDATE_LOCATION_NFS,
		DatasyncActions.UPDATE_LOCATION_OBJECT_STORAGE,
		DatasyncActions.UPDATE_LOCATION_S3,
		DatasyncActions.UPDATE_LOCATION_SMB,
		DatasyncActions.UPDATE_STORAGE_SYSTEM,
		DatasyncActions.UPDATE_TASK,
		DatasyncActions.UPDATE_TASK_EXECUTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DatasyncActions.DESCRIBE_STORAGE_SYSTEM_RESOURCE_METRICS,
		DatasyncActions.DESCRIBE_STORAGE_SYSTEM_RESOURCES,
		DatasyncActions.LIST_AGENTS,
		DatasyncActions.LIST_DISCOVERY_JOBS,
		DatasyncActions.LIST_LOCATIONS,
		DatasyncActions.LIST_STORAGE_SYSTEMS,
		DatasyncActions.LIST_TASK_EXECUTIONS,
		DatasyncActions.LIST_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DatasyncActions.TAG_RESOURCE,
		DatasyncActions.UNTAG_RESOURCE,
	];
}

const AgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):agent/(?<agentId>[^:/?]+)$",
);
const DiscoveryjobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):system/(?<storageSystemId>[^:/?]+)/job/(?<discoveryJobId>[^:/?]+)$",
);
const LocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):location/(?<locationId>[^:/?]+)$",
);
const StoragesystemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):system/(?<storageSystemId>[^:/?]+)$",
);
const TaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):task/(?<taskId>[^:/?]+)$",
);
const TaskexecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):task/(?<taskId>[^:/?]+)/execution/(?<executionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for datasync resources.
 */
export class DatasyncResources {
	/**
	 * Builds an ARN for the agent resource.
	 */
	static agent(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AgentId component of the ARN. */
		readonly agentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:agent/${props.agentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent resource.
	 */
	static isValidAgentArn(arn: string): boolean {
		return AgentArnRegex.test(arn);
	}

	/**
	 * Parses a agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		agentId: string;
	} {
		const match = AgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			agentId: match.groups!.agentId,
		};
	}

	/**
	 * Builds an ARN for the discoveryjob resource.
	 */
	static discoveryjob(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The StorageSystemId component of the ARN. */
		readonly storageSystemId: string;
		/** The DiscoveryJobId component of the ARN. */
		readonly discoveryJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:system/${props.storageSystemId}/job/${props.discoveryJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the discoveryjob resource.
	 */
	static isValidDiscoveryjobArn(arn: string): boolean {
		return DiscoveryjobArnRegex.test(arn);
	}

	/**
	 * Parses a discoveryjob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDiscoveryjobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		storageSystemId: string;
		discoveryJobId: string;
	} {
		const match = DiscoveryjobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid discoveryjob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			storageSystemId: match.groups!.storageSystemId,
			discoveryJobId: match.groups!.discoveryJobId,
		};
	}

	/**
	 * Builds an ARN for the location resource.
	 */
	static location(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The LocationId component of the ARN. */
		readonly locationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:location/${props.locationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the location resource.
	 */
	static isValidLocationArn(arn: string): boolean {
		return LocationArnRegex.test(arn);
	}

	/**
	 * Parses a location ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		locationId: string;
	} {
		const match = LocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid location ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			locationId: match.groups!.locationId,
		};
	}

	/**
	 * Builds an ARN for the storagesystem resource.
	 */
	static storagesystem(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The StorageSystemId component of the ARN. */
		readonly storageSystemId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:system/${props.storageSystemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the storagesystem resource.
	 */
	static isValidStoragesystemArn(arn: string): boolean {
		return StoragesystemArnRegex.test(arn);
	}

	/**
	 * Parses a storagesystem ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStoragesystemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		storageSystemId: string;
	} {
		const match = StoragesystemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid storagesystem ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			storageSystemId: match.groups!.storageSystemId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:task/${props.taskId}`;
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
		accountId: string;
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
			accountId: match.groups!.accountId,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the taskexecution resource.
	 */
	static taskexecution(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** The ExecutionId component of the ARN. */
		readonly executionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datasync:${props.region ?? "*"}:${props.accountId}:task/${props.taskId}/execution/${props.executionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the taskexecution resource.
	 */
	static isValidTaskexecutionArn(arn: string): boolean {
		return TaskexecutionArnRegex.test(arn);
	}

	/**
	 * Parses a taskexecution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskexecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		taskId: string;
		executionId: string;
	} {
		const match = TaskexecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid taskexecution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			taskId: match.groups!.taskId,
			executionId: match.groups!.executionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for datasync.
 */
export class DatasyncOperations {
	/** IAM actions required for the CancelTaskExecution API call. */
	static readonly CANCEL_TASK_EXECUTION: string[] = [
		"datasync:CancelTaskExecution",
	];
	/** IAM actions required for the CreateAgent API call. */
	static readonly CREATE_AGENT: string[] = [
		"datasync:CreateAgent",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationAzureBlob API call. */
	static readonly CREATE_LOCATION_AZURE_BLOB: string[] = [
		"datasync:CreateLocationAzureBlob",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationEfs API call. */
	static readonly CREATE_LOCATION_EFS: string[] = [
		"datasync:CreateLocationEfs",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxLustre API call. */
	static readonly CREATE_LOCATION_FSX_LUSTRE: string[] = [
		"datasync:CreateLocationFsxLustre",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxOntap API call. */
	static readonly CREATE_LOCATION_FSX_ONTAP: string[] = [
		"datasync:CreateLocationFsxOntap",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxOpenZfs API call. */
	static readonly CREATE_LOCATION_FSX_OPEN_ZFS: string[] = [
		"datasync:CreateLocationFsxOpenZfs",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxWindows API call. */
	static readonly CREATE_LOCATION_FSX_WINDOWS: string[] = [
		"datasync:CreateLocationFsxWindows",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationHdfs API call. */
	static readonly CREATE_LOCATION_HDFS: string[] = [
		"datasync:CreateLocationHdfs",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationNfs API call. */
	static readonly CREATE_LOCATION_NFS: string[] = [
		"datasync:CreateLocationNfs",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationObjectStorage API call. */
	static readonly CREATE_LOCATION_OBJECT_STORAGE: string[] = [
		"datasync:CreateLocationObjectStorage",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationS3 API call. */
	static readonly CREATE_LOCATION_S3: string[] = [
		"datasync:CreateLocationS3",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationSmb API call. */
	static readonly CREATE_LOCATION_SMB: string[] = [
		"datasync:CreateLocationSmb",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateTask API call. */
	static readonly CREATE_TASK: string[] = [
		"datasync:CreateTask",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the DeleteAgent API call. */
	static readonly DELETE_AGENT: string[] = ["datasync:DeleteAgent"];
	/** IAM actions required for the DeleteLocation API call. */
	static readonly DELETE_LOCATION: string[] = ["datasync:DeleteLocation"];
	/** IAM actions required for the DeleteTask API call. */
	static readonly DELETE_TASK: string[] = ["datasync:DeleteTask"];
	/** IAM actions required for the DescribeAgent API call. */
	static readonly DESCRIBE_AGENT: string[] = ["datasync:DescribeAgent"];
	/** IAM actions required for the DescribeLocationAzureBlob API call. */
	static readonly DESCRIBE_LOCATION_AZURE_BLOB: string[] = [
		"datasync:DescribeLocationAzureBlob",
	];
	/** IAM actions required for the DescribeLocationEfs API call. */
	static readonly DESCRIBE_LOCATION_EFS: string[] = [
		"datasync:DescribeLocationEfs",
	];
	/** IAM actions required for the DescribeLocationFsxLustre API call. */
	static readonly DESCRIBE_LOCATION_FSX_LUSTRE: string[] = [
		"datasync:DescribeLocationFsxLustre",
	];
	/** IAM actions required for the DescribeLocationFsxOntap API call. */
	static readonly DESCRIBE_LOCATION_FSX_ONTAP: string[] = [
		"datasync:DescribeLocationFsxOntap",
	];
	/** IAM actions required for the DescribeLocationFsxOpenZfs API call. */
	static readonly DESCRIBE_LOCATION_FSX_OPEN_ZFS: string[] = [
		"datasync:DescribeLocationFsxOpenZfs",
	];
	/** IAM actions required for the DescribeLocationFsxWindows API call. */
	static readonly DESCRIBE_LOCATION_FSX_WINDOWS: string[] = [
		"datasync:DescribeLocationFsxWindows",
	];
	/** IAM actions required for the DescribeLocationHdfs API call. */
	static readonly DESCRIBE_LOCATION_HDFS: string[] = [
		"datasync:DescribeLocationHdfs",
	];
	/** IAM actions required for the DescribeLocationNfs API call. */
	static readonly DESCRIBE_LOCATION_NFS: string[] = [
		"datasync:DescribeLocationNfs",
	];
	/** IAM actions required for the DescribeLocationObjectStorage API call. */
	static readonly DESCRIBE_LOCATION_OBJECT_STORAGE: string[] = [
		"datasync:DescribeLocationObjectStorage",
	];
	/** IAM actions required for the DescribeLocationS3 API call. */
	static readonly DESCRIBE_LOCATION_S3: string[] = [
		"datasync:DescribeLocationS3",
	];
	/** IAM actions required for the DescribeLocationSmb API call. */
	static readonly DESCRIBE_LOCATION_SMB: string[] = [
		"datasync:DescribeLocationSmb",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DESCRIBE_TASK: string[] = ["datasync:DescribeTask"];
	/** IAM actions required for the DescribeTaskExecution API call. */
	static readonly DESCRIBE_TASK_EXECUTION: string[] = [
		"datasync:DescribeTaskExecution",
	];
	/** IAM actions required for the ListAgents API call. */
	static readonly LIST_AGENTS: string[] = ["datasync:ListAgents"];
	/** IAM actions required for the ListLocations API call. */
	static readonly LIST_LOCATIONS: string[] = ["datasync:ListLocations"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"datasync:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskExecutions API call. */
	static readonly LIST_TASK_EXECUTIONS: string[] = [
		"datasync:ListTaskExecutions",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly LIST_TASKS: string[] = ["datasync:ListTasks"];
	/** IAM actions required for the StartTaskExecution API call. */
	static readonly START_TASK_EXECUTION: string[] = [
		"iam:PassRole",
		"datasync:StartTaskExecution",
		"datasync:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["datasync:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["datasync:UntagResource"];
	/** IAM actions required for the UpdateAgent API call. */
	static readonly UPDATE_AGENT: string[] = ["datasync:UpdateAgent"];
	/** IAM actions required for the UpdateLocationAzureBlob API call. */
	static readonly UPDATE_LOCATION_AZURE_BLOB: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationAzureBlob",
	];
	/** IAM actions required for the UpdateLocationEfs API call. */
	static readonly UPDATE_LOCATION_EFS: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationEfs",
	];
	/** IAM actions required for the UpdateLocationFsxLustre API call. */
	static readonly UPDATE_LOCATION_FSX_LUSTRE: string[] = [
		"datasync:UpdateLocationFsxLustre",
	];
	/** IAM actions required for the UpdateLocationFsxOntap API call. */
	static readonly UPDATE_LOCATION_FSX_ONTAP: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationFsxOntap",
	];
	/** IAM actions required for the UpdateLocationFsxOpenZfs API call. */
	static readonly UPDATE_LOCATION_FSX_OPEN_ZFS: string[] = [
		"datasync:UpdateLocationFsxOpenZfs",
	];
	/** IAM actions required for the UpdateLocationFsxWindows API call. */
	static readonly UPDATE_LOCATION_FSX_WINDOWS: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationFsxWindows",
	];
	/** IAM actions required for the UpdateLocationHdfs API call. */
	static readonly UPDATE_LOCATION_HDFS: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationHdfs",
	];
	/** IAM actions required for the UpdateLocationNfs API call. */
	static readonly UPDATE_LOCATION_NFS: string[] = [
		"datasync:UpdateLocationNfs",
	];
	/** IAM actions required for the UpdateLocationObjectStorage API call. */
	static readonly UPDATE_LOCATION_OBJECT_STORAGE: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationObjectStorage",
	];
	/** IAM actions required for the UpdateLocationS3 API call. */
	static readonly UPDATE_LOCATION_S3: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationS3",
	];
	/** IAM actions required for the UpdateLocationSmb API call. */
	static readonly UPDATE_LOCATION_SMB: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationSmb",
	];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UPDATE_TASK: string[] = [
		"iam:PassRole",
		"datasync:UpdateTask",
	];
	/** IAM actions required for the UpdateTaskExecution API call. */
	static readonly UPDATE_TASK_EXECUTION: string[] = [
		"datasync:UpdateTaskExecution",
	];
}

/**
 * Condition key constants and builders for datasync.
 */
export class DatasyncConditions {
	/** Condition keys applicable to the AddStorageSystem action. */
	static readonly ADD_STORAGE_SYSTEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CancelTaskExecution action. */
	static readonly CANCEL_TASK_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgent action. */
	static readonly CREATE_AGENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationAzureBlob action. */
	static readonly CREATE_LOCATION_AZURE_BLOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationEfs action. */
	static readonly CREATE_LOCATION_EFS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxLustre action. */
	static readonly CREATE_LOCATION_FSX_LUSTRE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxOntap action. */
	static readonly CREATE_LOCATION_FSX_ONTAP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxOpenZfs action. */
	static readonly CREATE_LOCATION_FSX_OPEN_ZFS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxWindows action. */
	static readonly CREATE_LOCATION_FSX_WINDOWS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationHdfs action. */
	static readonly CREATE_LOCATION_HDFS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationNfs action. */
	static readonly CREATE_LOCATION_NFS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationObjectStorage action. */
	static readonly CREATE_LOCATION_OBJECT_STORAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationS3 action. */
	static readonly CREATE_LOCATION_S3_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationSmb action. */
	static readonly CREATE_LOCATION_SMB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTask action. */
	static readonly CREATE_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTaskExecution action. */
	static readonly DESCRIBE_TASK_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTaskExecutions action. */
	static readonly LIST_TASK_EXECUTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartTaskExecution action. */
	static readonly START_TASK_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateTaskExecution action. */
	static readonly UPDATE_TASK_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
}
