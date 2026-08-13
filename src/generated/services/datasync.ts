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
	static readonly AddStorageSystem = "datasync:AddStorageSystem";
	/** [Write] datasync:CancelTaskExecution */
	static readonly CancelTaskExecution = "datasync:CancelTaskExecution";
	/** [Write] datasync:CreateAgent */
	static readonly CreateAgent = "datasync:CreateAgent";
	/** [Write] datasync:CreateLocationAzureBlob */
	static readonly CreateLocationAzureBlob = "datasync:CreateLocationAzureBlob";
	/** [Write] datasync:CreateLocationEfs */
	static readonly CreateLocationEfs = "datasync:CreateLocationEfs";
	/** [Write] datasync:CreateLocationFsxLustre */
	static readonly CreateLocationFsxLustre = "datasync:CreateLocationFsxLustre";
	/** [Write] datasync:CreateLocationFsxOntap */
	static readonly CreateLocationFsxOntap = "datasync:CreateLocationFsxOntap";
	/** [Write] datasync:CreateLocationFsxOpenZfs */
	static readonly CreateLocationFsxOpenZfs =
		"datasync:CreateLocationFsxOpenZfs";
	/** [Write] datasync:CreateLocationFsxWindows */
	static readonly CreateLocationFsxWindows =
		"datasync:CreateLocationFsxWindows";
	/** [Write] datasync:CreateLocationHdfs */
	static readonly CreateLocationHdfs = "datasync:CreateLocationHdfs";
	/** [Write] datasync:CreateLocationNfs */
	static readonly CreateLocationNfs = "datasync:CreateLocationNfs";
	/** [Write] datasync:CreateLocationObjectStorage */
	static readonly CreateLocationObjectStorage =
		"datasync:CreateLocationObjectStorage";
	/** [Write] datasync:CreateLocationS3 */
	static readonly CreateLocationS3 = "datasync:CreateLocationS3";
	/** [Write] datasync:CreateLocationSmb */
	static readonly CreateLocationSmb = "datasync:CreateLocationSmb";
	/** [Write] datasync:CreateTask */
	static readonly CreateTask = "datasync:CreateTask";
	/** [Write] datasync:DeleteAgent */
	static readonly DeleteAgent = "datasync:DeleteAgent";
	/** [Write] datasync:DeleteLocation */
	static readonly DeleteLocation = "datasync:DeleteLocation";
	/** [Write] datasync:DeleteTask */
	static readonly DeleteTask = "datasync:DeleteTask";
	/** [Read] datasync:DescribeAgent */
	static readonly DescribeAgent = "datasync:DescribeAgent";
	/** [Read] datasync:DescribeDiscoveryJob */
	static readonly DescribeDiscoveryJob = "datasync:DescribeDiscoveryJob";
	/** [Read] datasync:DescribeLocationAzureBlob */
	static readonly DescribeLocationAzureBlob =
		"datasync:DescribeLocationAzureBlob";
	/** [Read] datasync:DescribeLocationEfs */
	static readonly DescribeLocationEfs = "datasync:DescribeLocationEfs";
	/** [Read] datasync:DescribeLocationFsxLustre */
	static readonly DescribeLocationFsxLustre =
		"datasync:DescribeLocationFsxLustre";
	/** [Read] datasync:DescribeLocationFsxOntap */
	static readonly DescribeLocationFsxOntap =
		"datasync:DescribeLocationFsxOntap";
	/** [Read] datasync:DescribeLocationFsxOpenZfs */
	static readonly DescribeLocationFsxOpenZfs =
		"datasync:DescribeLocationFsxOpenZfs";
	/** [Read] datasync:DescribeLocationFsxWindows */
	static readonly DescribeLocationFsxWindows =
		"datasync:DescribeLocationFsxWindows";
	/** [Read] datasync:DescribeLocationHdfs */
	static readonly DescribeLocationHdfs = "datasync:DescribeLocationHdfs";
	/** [Read] datasync:DescribeLocationNfs */
	static readonly DescribeLocationNfs = "datasync:DescribeLocationNfs";
	/** [Read] datasync:DescribeLocationObjectStorage */
	static readonly DescribeLocationObjectStorage =
		"datasync:DescribeLocationObjectStorage";
	/** [Read] datasync:DescribeLocationS3 */
	static readonly DescribeLocationS3 = "datasync:DescribeLocationS3";
	/** [Read] datasync:DescribeLocationSmb */
	static readonly DescribeLocationSmb = "datasync:DescribeLocationSmb";
	/** [Read] datasync:DescribeStorageSystem */
	static readonly DescribeStorageSystem = "datasync:DescribeStorageSystem";
	/** [List] datasync:DescribeStorageSystemResourceMetrics */
	static readonly DescribeStorageSystemResourceMetrics =
		"datasync:DescribeStorageSystemResourceMetrics";
	/** [List] datasync:DescribeStorageSystemResources */
	static readonly DescribeStorageSystemResources =
		"datasync:DescribeStorageSystemResources";
	/** [Read] datasync:DescribeTask */
	static readonly DescribeTask = "datasync:DescribeTask";
	/** [Read] datasync:DescribeTaskExecution */
	static readonly DescribeTaskExecution = "datasync:DescribeTaskExecution";
	/** [Write] datasync:GenerateRecommendations */
	static readonly GenerateRecommendations = "datasync:GenerateRecommendations";
	/** [List] datasync:ListAgents */
	static readonly ListAgents = "datasync:ListAgents";
	/** [List] datasync:ListDiscoveryJobs */
	static readonly ListDiscoveryJobs = "datasync:ListDiscoveryJobs";
	/** [List] datasync:ListLocations */
	static readonly ListLocations = "datasync:ListLocations";
	/** [List] datasync:ListStorageSystems */
	static readonly ListStorageSystems = "datasync:ListStorageSystems";
	/** [Read] datasync:ListTagsForResource */
	static readonly ListTagsForResource = "datasync:ListTagsForResource";
	/** [List] datasync:ListTaskExecutions */
	static readonly ListTaskExecutions = "datasync:ListTaskExecutions";
	/** [List] datasync:ListTasks */
	static readonly ListTasks = "datasync:ListTasks";
	/** [Write] datasync:RemoveStorageSystem */
	static readonly RemoveStorageSystem = "datasync:RemoveStorageSystem";
	/** [Write] datasync:StartDiscoveryJob */
	static readonly StartDiscoveryJob = "datasync:StartDiscoveryJob";
	/** [Write] datasync:StartTaskExecution */
	static readonly StartTaskExecution = "datasync:StartTaskExecution";
	/** [Write] datasync:StopDiscoveryJob */
	static readonly StopDiscoveryJob = "datasync:StopDiscoveryJob";
	/** [Tagging] datasync:TagResource */
	static readonly TagResource = "datasync:TagResource";
	/** [Tagging] datasync:UntagResource */
	static readonly UntagResource = "datasync:UntagResource";
	/** [Write] datasync:UpdateAgent */
	static readonly UpdateAgent = "datasync:UpdateAgent";
	/** [Write] datasync:UpdateDiscoveryJob */
	static readonly UpdateDiscoveryJob = "datasync:UpdateDiscoveryJob";
	/** [Write] datasync:UpdateLocationAzureBlob */
	static readonly UpdateLocationAzureBlob = "datasync:UpdateLocationAzureBlob";
	/** [Write] datasync:UpdateLocationEfs */
	static readonly UpdateLocationEfs = "datasync:UpdateLocationEfs";
	/** [Write] datasync:UpdateLocationFsxLustre */
	static readonly UpdateLocationFsxLustre = "datasync:UpdateLocationFsxLustre";
	/** [Write] datasync:UpdateLocationFsxOntap */
	static readonly UpdateLocationFsxOntap = "datasync:UpdateLocationFsxOntap";
	/** [Write] datasync:UpdateLocationFsxOpenZfs */
	static readonly UpdateLocationFsxOpenZfs =
		"datasync:UpdateLocationFsxOpenZfs";
	/** [Write] datasync:UpdateLocationFsxWindows */
	static readonly UpdateLocationFsxWindows =
		"datasync:UpdateLocationFsxWindows";
	/** [Write] datasync:UpdateLocationHdfs */
	static readonly UpdateLocationHdfs = "datasync:UpdateLocationHdfs";
	/** [Write] datasync:UpdateLocationNfs */
	static readonly UpdateLocationNfs = "datasync:UpdateLocationNfs";
	/** [Write] datasync:UpdateLocationObjectStorage */
	static readonly UpdateLocationObjectStorage =
		"datasync:UpdateLocationObjectStorage";
	/** [Write] datasync:UpdateLocationS3 */
	static readonly UpdateLocationS3 = "datasync:UpdateLocationS3";
	/** [Write] datasync:UpdateLocationSmb */
	static readonly UpdateLocationSmb = "datasync:UpdateLocationSmb";
	/** [Write] datasync:UpdateStorageSystem */
	static readonly UpdateStorageSystem = "datasync:UpdateStorageSystem";
	/** [Write] datasync:UpdateTask */
	static readonly UpdateTask = "datasync:UpdateTask";
	/** [Write] datasync:UpdateTaskExecution */
	static readonly UpdateTaskExecution = "datasync:UpdateTaskExecution";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DatasyncActions.DescribeAgent,
		DatasyncActions.DescribeDiscoveryJob,
		DatasyncActions.DescribeLocationAzureBlob,
		DatasyncActions.DescribeLocationEfs,
		DatasyncActions.DescribeLocationFsxLustre,
		DatasyncActions.DescribeLocationFsxOntap,
		DatasyncActions.DescribeLocationFsxOpenZfs,
		DatasyncActions.DescribeLocationFsxWindows,
		DatasyncActions.DescribeLocationHdfs,
		DatasyncActions.DescribeLocationNfs,
		DatasyncActions.DescribeLocationObjectStorage,
		DatasyncActions.DescribeLocationS3,
		DatasyncActions.DescribeLocationSmb,
		DatasyncActions.DescribeStorageSystem,
		DatasyncActions.DescribeTask,
		DatasyncActions.DescribeTaskExecution,
		DatasyncActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DatasyncActions.AddStorageSystem,
		DatasyncActions.CancelTaskExecution,
		DatasyncActions.CreateAgent,
		DatasyncActions.CreateLocationAzureBlob,
		DatasyncActions.CreateLocationEfs,
		DatasyncActions.CreateLocationFsxLustre,
		DatasyncActions.CreateLocationFsxOntap,
		DatasyncActions.CreateLocationFsxOpenZfs,
		DatasyncActions.CreateLocationFsxWindows,
		DatasyncActions.CreateLocationHdfs,
		DatasyncActions.CreateLocationNfs,
		DatasyncActions.CreateLocationObjectStorage,
		DatasyncActions.CreateLocationS3,
		DatasyncActions.CreateLocationSmb,
		DatasyncActions.CreateTask,
		DatasyncActions.DeleteAgent,
		DatasyncActions.DeleteLocation,
		DatasyncActions.DeleteTask,
		DatasyncActions.GenerateRecommendations,
		DatasyncActions.RemoveStorageSystem,
		DatasyncActions.StartDiscoveryJob,
		DatasyncActions.StartTaskExecution,
		DatasyncActions.StopDiscoveryJob,
		DatasyncActions.UpdateAgent,
		DatasyncActions.UpdateDiscoveryJob,
		DatasyncActions.UpdateLocationAzureBlob,
		DatasyncActions.UpdateLocationEfs,
		DatasyncActions.UpdateLocationFsxLustre,
		DatasyncActions.UpdateLocationFsxOntap,
		DatasyncActions.UpdateLocationFsxOpenZfs,
		DatasyncActions.UpdateLocationFsxWindows,
		DatasyncActions.UpdateLocationHdfs,
		DatasyncActions.UpdateLocationNfs,
		DatasyncActions.UpdateLocationObjectStorage,
		DatasyncActions.UpdateLocationS3,
		DatasyncActions.UpdateLocationSmb,
		DatasyncActions.UpdateStorageSystem,
		DatasyncActions.UpdateTask,
		DatasyncActions.UpdateTaskExecution,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DatasyncActions.DescribeStorageSystemResourceMetrics,
		DatasyncActions.DescribeStorageSystemResources,
		DatasyncActions.ListAgents,
		DatasyncActions.ListDiscoveryJobs,
		DatasyncActions.ListLocations,
		DatasyncActions.ListStorageSystems,
		DatasyncActions.ListTaskExecutions,
		DatasyncActions.ListTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DatasyncActions.TagResource,
		DatasyncActions.UntagResource,
	];
}

/**
 * Properties for building a agent ARN.
 */
export interface DatasyncAgentArnProps {
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
}

/**
 * Parsed components of a agent ARN.
 */
export interface DatasyncAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AgentId component. */
	readonly agentId: string;
}

/**
 * Properties for building a discoveryjob ARN.
 */
export interface DatasyncDiscoveryjobArnProps {
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
}

/**
 * Parsed components of a discoveryjob ARN.
 */
export interface DatasyncDiscoveryjobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The StorageSystemId component. */
	readonly storageSystemId: string;
	/** The DiscoveryJobId component. */
	readonly discoveryJobId: string;
}

/**
 * Properties for building a location ARN.
 */
export interface DatasyncLocationArnProps {
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
}

/**
 * Parsed components of a location ARN.
 */
export interface DatasyncLocationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The LocationId component. */
	readonly locationId: string;
}

/**
 * Properties for building a storagesystem ARN.
 */
export interface DatasyncStoragesystemArnProps {
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
}

/**
 * Parsed components of a storagesystem ARN.
 */
export interface DatasyncStoragesystemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The StorageSystemId component. */
	readonly storageSystemId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface DatasyncTaskArnProps {
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
}

/**
 * Parsed components of a task ARN.
 */
export interface DatasyncTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The TaskId component. */
	readonly taskId: string;
}

/**
 * Properties for building a taskexecution ARN.
 */
export interface DatasyncTaskexecutionArnProps {
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
}

/**
 * Parsed components of a taskexecution ARN.
 */
export interface DatasyncTaskexecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The TaskId component. */
	readonly taskId: string;
	/** The ExecutionId component. */
	readonly executionId: string;
}

const AgentArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):agent\/(?<agentId>[^:/?]+)$/;
const DiscoveryjobArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):system\/(?<storageSystemId>[^:/?]+)\/job\/(?<discoveryJobId>[^:/?]+)$/;
const LocationArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):location\/(?<locationId>[^:/?]+)$/;
const StoragesystemArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):system\/(?<storageSystemId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):task\/(?<taskId>[^:/?]+)$/;
const TaskexecutionArnRegex =
	/^arn:(?<partition>[^:]+):datasync:(?<region>[^:]*):(?<accountId>[^:/?]+):task\/(?<taskId>[^:/?]+)\/execution\/(?<executionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for datasync resources.
 */
export class DatasyncResources {
	/**
	 * Builds an ARN for the agent resource.
	 */
	static agent(props: DatasyncAgentArnProps): string {
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
	static parseAgentArn(arn: string): DatasyncAgentArnComponents {
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
	static discoveryjob(props: DatasyncDiscoveryjobArnProps): string {
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
	static parseDiscoveryjobArn(arn: string): DatasyncDiscoveryjobArnComponents {
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
	static location(props: DatasyncLocationArnProps): string {
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
	static parseLocationArn(arn: string): DatasyncLocationArnComponents {
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
	static storagesystem(props: DatasyncStoragesystemArnProps): string {
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
	static parseStoragesystemArn(
		arn: string,
	): DatasyncStoragesystemArnComponents {
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
	static task(props: DatasyncTaskArnProps): string {
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
	static parseTaskArn(arn: string): DatasyncTaskArnComponents {
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
	static taskexecution(props: DatasyncTaskexecutionArnProps): string {
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
	static parseTaskexecutionArn(
		arn: string,
	): DatasyncTaskexecutionArnComponents {
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
	static readonly CancelTaskExecution: string[] = [
		"datasync:CancelTaskExecution",
	];
	/** IAM actions required for the CreateAgent API call. */
	static readonly CreateAgent: string[] = [
		"datasync:CreateAgent",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationAzureBlob API call. */
	static readonly CreateLocationAzureBlob: string[] = [
		"datasync:CreateLocationAzureBlob",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationEfs API call. */
	static readonly CreateLocationEfs: string[] = [
		"datasync:CreateLocationEfs",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxLustre API call. */
	static readonly CreateLocationFsxLustre: string[] = [
		"datasync:CreateLocationFsxLustre",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxOntap API call. */
	static readonly CreateLocationFsxOntap: string[] = [
		"datasync:CreateLocationFsxOntap",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxOpenZfs API call. */
	static readonly CreateLocationFsxOpenZfs: string[] = [
		"datasync:CreateLocationFsxOpenZfs",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationFsxWindows API call. */
	static readonly CreateLocationFsxWindows: string[] = [
		"datasync:CreateLocationFsxWindows",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationHdfs API call. */
	static readonly CreateLocationHdfs: string[] = [
		"datasync:CreateLocationHdfs",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationNfs API call. */
	static readonly CreateLocationNfs: string[] = [
		"datasync:CreateLocationNfs",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationObjectStorage API call. */
	static readonly CreateLocationObjectStorage: string[] = [
		"datasync:CreateLocationObjectStorage",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationS3 API call. */
	static readonly CreateLocationS3: string[] = [
		"datasync:CreateLocationS3",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateLocationSmb API call. */
	static readonly CreateLocationSmb: string[] = [
		"datasync:CreateLocationSmb",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the CreateTask API call. */
	static readonly CreateTask: string[] = [
		"datasync:CreateTask",
		"iam:PassRole",
		"datasync:TagResource",
	];
	/** IAM actions required for the DeleteAgent API call. */
	static readonly DeleteAgent: string[] = ["datasync:DeleteAgent"];
	/** IAM actions required for the DeleteLocation API call. */
	static readonly DeleteLocation: string[] = ["datasync:DeleteLocation"];
	/** IAM actions required for the DeleteTask API call. */
	static readonly DeleteTask: string[] = ["datasync:DeleteTask"];
	/** IAM actions required for the DescribeAgent API call. */
	static readonly DescribeAgent: string[] = ["datasync:DescribeAgent"];
	/** IAM actions required for the DescribeLocationAzureBlob API call. */
	static readonly DescribeLocationAzureBlob: string[] = [
		"datasync:DescribeLocationAzureBlob",
	];
	/** IAM actions required for the DescribeLocationEfs API call. */
	static readonly DescribeLocationEfs: string[] = [
		"datasync:DescribeLocationEfs",
	];
	/** IAM actions required for the DescribeLocationFsxLustre API call. */
	static readonly DescribeLocationFsxLustre: string[] = [
		"datasync:DescribeLocationFsxLustre",
	];
	/** IAM actions required for the DescribeLocationFsxOntap API call. */
	static readonly DescribeLocationFsxOntap: string[] = [
		"datasync:DescribeLocationFsxOntap",
	];
	/** IAM actions required for the DescribeLocationFsxOpenZfs API call. */
	static readonly DescribeLocationFsxOpenZfs: string[] = [
		"datasync:DescribeLocationFsxOpenZfs",
	];
	/** IAM actions required for the DescribeLocationFsxWindows API call. */
	static readonly DescribeLocationFsxWindows: string[] = [
		"datasync:DescribeLocationFsxWindows",
	];
	/** IAM actions required for the DescribeLocationHdfs API call. */
	static readonly DescribeLocationHdfs: string[] = [
		"datasync:DescribeLocationHdfs",
	];
	/** IAM actions required for the DescribeLocationNfs API call. */
	static readonly DescribeLocationNfs: string[] = [
		"datasync:DescribeLocationNfs",
	];
	/** IAM actions required for the DescribeLocationObjectStorage API call. */
	static readonly DescribeLocationObjectStorage: string[] = [
		"datasync:DescribeLocationObjectStorage",
	];
	/** IAM actions required for the DescribeLocationS3 API call. */
	static readonly DescribeLocationS3: string[] = [
		"datasync:DescribeLocationS3",
	];
	/** IAM actions required for the DescribeLocationSmb API call. */
	static readonly DescribeLocationSmb: string[] = [
		"datasync:DescribeLocationSmb",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DescribeTask: string[] = ["datasync:DescribeTask"];
	/** IAM actions required for the DescribeTaskExecution API call. */
	static readonly DescribeTaskExecution: string[] = [
		"datasync:DescribeTaskExecution",
	];
	/** IAM actions required for the ListAgents API call. */
	static readonly ListAgents: string[] = ["datasync:ListAgents"];
	/** IAM actions required for the ListLocations API call. */
	static readonly ListLocations: string[] = ["datasync:ListLocations"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"datasync:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskExecutions API call. */
	static readonly ListTaskExecutions: string[] = [
		"datasync:ListTaskExecutions",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly ListTasks: string[] = ["datasync:ListTasks"];
	/** IAM actions required for the StartTaskExecution API call. */
	static readonly StartTaskExecution: string[] = [
		"iam:PassRole",
		"datasync:StartTaskExecution",
		"datasync:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["datasync:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["datasync:UntagResource"];
	/** IAM actions required for the UpdateAgent API call. */
	static readonly UpdateAgent: string[] = ["datasync:UpdateAgent"];
	/** IAM actions required for the UpdateLocationAzureBlob API call. */
	static readonly UpdateLocationAzureBlob: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationAzureBlob",
	];
	/** IAM actions required for the UpdateLocationEfs API call. */
	static readonly UpdateLocationEfs: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationEfs",
	];
	/** IAM actions required for the UpdateLocationFsxLustre API call. */
	static readonly UpdateLocationFsxLustre: string[] = [
		"datasync:UpdateLocationFsxLustre",
	];
	/** IAM actions required for the UpdateLocationFsxOntap API call. */
	static readonly UpdateLocationFsxOntap: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationFsxOntap",
	];
	/** IAM actions required for the UpdateLocationFsxOpenZfs API call. */
	static readonly UpdateLocationFsxOpenZfs: string[] = [
		"datasync:UpdateLocationFsxOpenZfs",
	];
	/** IAM actions required for the UpdateLocationFsxWindows API call. */
	static readonly UpdateLocationFsxWindows: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationFsxWindows",
	];
	/** IAM actions required for the UpdateLocationHdfs API call. */
	static readonly UpdateLocationHdfs: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationHdfs",
	];
	/** IAM actions required for the UpdateLocationNfs API call. */
	static readonly UpdateLocationNfs: string[] = ["datasync:UpdateLocationNfs"];
	/** IAM actions required for the UpdateLocationObjectStorage API call. */
	static readonly UpdateLocationObjectStorage: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationObjectStorage",
	];
	/** IAM actions required for the UpdateLocationS3 API call. */
	static readonly UpdateLocationS3: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationS3",
	];
	/** IAM actions required for the UpdateLocationSmb API call. */
	static readonly UpdateLocationSmb: string[] = [
		"iam:PassRole",
		"datasync:UpdateLocationSmb",
	];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UpdateTask: string[] = [
		"iam:PassRole",
		"datasync:UpdateTask",
	];
	/** IAM actions required for the UpdateTaskExecution API call. */
	static readonly UpdateTaskExecution: string[] = [
		"datasync:UpdateTaskExecution",
	];
}

/**
 * Condition key constants and builders for datasync.
 */
export class DatasyncConditions {
	/** Condition keys applicable to the AddStorageSystem action. */
	static readonly AddStorageSystemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CancelTaskExecution action. */
	static readonly CancelTaskExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgent action. */
	static readonly CreateAgentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationAzureBlob action. */
	static readonly CreateLocationAzureBlobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationEfs action. */
	static readonly CreateLocationEfsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxLustre action. */
	static readonly CreateLocationFsxLustreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxOntap action. */
	static readonly CreateLocationFsxOntapConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxOpenZfs action. */
	static readonly CreateLocationFsxOpenZfsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationFsxWindows action. */
	static readonly CreateLocationFsxWindowsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationHdfs action. */
	static readonly CreateLocationHdfsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationNfs action. */
	static readonly CreateLocationNfsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationObjectStorage action. */
	static readonly CreateLocationObjectStorageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationS3 action. */
	static readonly CreateLocationS3ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocationSmb action. */
	static readonly CreateLocationSmbConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTask action. */
	static readonly CreateTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTaskExecution action. */
	static readonly DescribeTaskExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTaskExecutions action. */
	static readonly ListTaskExecutionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartTaskExecution action. */
	static readonly StartTaskExecutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateTaskExecution action. */
	static readonly UpdateTaskExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
