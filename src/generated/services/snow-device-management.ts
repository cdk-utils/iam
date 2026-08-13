// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/snow-device-management.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the snow-device-management service.
 */
export class SnowDeviceManagementActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "snow-device-management";

	/** [Write] snow-device-management:CancelTask */
	static readonly CANCEL_TASK = "snow-device-management:CancelTask";
	/** [Write] snow-device-management:CreateTask */
	static readonly CREATE_TASK = "snow-device-management:CreateTask";
	/** [Read] snow-device-management:DescribeDevice */
	static readonly DESCRIBE_DEVICE = "snow-device-management:DescribeDevice";
	/** [Read] snow-device-management:DescribeDeviceEc2Instances */
	static readonly DESCRIBE_DEVICE_EC2_INSTANCES =
		"snow-device-management:DescribeDeviceEc2Instances";
	/** [Read] snow-device-management:DescribeExecution */
	static readonly DESCRIBE_EXECUTION =
		"snow-device-management:DescribeExecution";
	/** [Read] snow-device-management:DescribeTask */
	static readonly DESCRIBE_TASK = "snow-device-management:DescribeTask";
	/** [List] snow-device-management:ListDeviceResources */
	static readonly LIST_DEVICE_RESOURCES =
		"snow-device-management:ListDeviceResources";
	/** [List] snow-device-management:ListDevices */
	static readonly LIST_DEVICES = "snow-device-management:ListDevices";
	/** [List] snow-device-management:ListExecutions */
	static readonly LIST_EXECUTIONS = "snow-device-management:ListExecutions";
	/** [Read] snow-device-management:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"snow-device-management:ListTagsForResource";
	/** [List] snow-device-management:ListTasks */
	static readonly LIST_TASKS = "snow-device-management:ListTasks";
	/** [Tagging] snow-device-management:TagResource */
	static readonly TAG_RESOURCE = "snow-device-management:TagResource";
	/** [Tagging] snow-device-management:UntagResource */
	static readonly UNTAG_RESOURCE = "snow-device-management:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SnowDeviceManagementActions.DESCRIBE_DEVICE,
		SnowDeviceManagementActions.DESCRIBE_DEVICE_EC2_INSTANCES,
		SnowDeviceManagementActions.DESCRIBE_EXECUTION,
		SnowDeviceManagementActions.DESCRIBE_TASK,
		SnowDeviceManagementActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SnowDeviceManagementActions.CANCEL_TASK,
		SnowDeviceManagementActions.CREATE_TASK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SnowDeviceManagementActions.LIST_DEVICE_RESOURCES,
		SnowDeviceManagementActions.LIST_DEVICES,
		SnowDeviceManagementActions.LIST_EXECUTIONS,
		SnowDeviceManagementActions.LIST_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SnowDeviceManagementActions.TAG_RESOURCE,
		SnowDeviceManagementActions.UNTAG_RESOURCE,
	];
}

const ManagedDeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):snow-device-management:(?<region>[^:]*):(?<account>[^:]*):managed-device/(?<resourceId>[^:/?]+)$",
);
const TaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):snow-device-management:(?<region>[^:]*):(?<account>[^:]*):task/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for snow-device-management resources.
 */
export class SnowDeviceManagementResources {
	/**
	 * Builds an ARN for the managed-device resource.
	 */
	static managedDevice(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:snow-device-management:${props.region ?? "*"}:${props.account ?? "*"}:managed-device/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-device resource.
	 */
	static isValidManagedDeviceArn(arn: string): boolean {
		return ManagedDeviceArnRegex.test(arn);
	}

	/**
	 * Parses a managed-device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ManagedDeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:snow-device-management:${props.region ?? "*"}:${props.account ?? "*"}:task/${props.resourceId}`;
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
		resourceId: string;
	} {
		const match = TaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for snow-device-management.
 */
export class SnowDeviceManagementOperations {
	/** IAM actions required for the CancelTask API call. */
	static readonly CANCEL_TASK: string[] = ["snow-device-management:CancelTask"];
	/** IAM actions required for the CreateTask API call. */
	static readonly CREATE_TASK: string[] = [
		"snow-device-management:CreateTask",
		"snow-device-management:TagResource",
	];
	/** IAM actions required for the DescribeDevice API call. */
	static readonly DESCRIBE_DEVICE: string[] = [
		"snow-device-management:DescribeDevice",
	];
	/** IAM actions required for the DescribeDeviceEc2Instances API call. */
	static readonly DESCRIBE_DEVICE_EC2_INSTANCES: string[] = [
		"snow-device-management:DescribeDeviceEc2Instances",
	];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DESCRIBE_EXECUTION: string[] = [
		"snow-device-management:DescribeExecution",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DESCRIBE_TASK: string[] = [
		"snow-device-management:DescribeTask",
	];
	/** IAM actions required for the ListDeviceResources API call. */
	static readonly LIST_DEVICE_RESOURCES: string[] = [
		"snow-device-management:ListDeviceResources",
	];
	/** IAM actions required for the ListDevices API call. */
	static readonly LIST_DEVICES: string[] = [
		"snow-device-management:ListDevices",
	];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = [
		"snow-device-management:ListExecutions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"snow-device-management:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly LIST_TASKS: string[] = ["snow-device-management:ListTasks"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"snow-device-management:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"snow-device-management:UntagResource",
	];
}

/**
 * Condition key constants and builders for snow-device-management.
 */
export class SnowDeviceManagementConditions {
	/** Condition keys applicable to the CreateTask action. */
	static readonly CREATE_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
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
