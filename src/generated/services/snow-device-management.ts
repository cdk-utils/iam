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
	static readonly CancelTask = "snow-device-management:CancelTask";
	/** [Write] snow-device-management:CreateTask */
	static readonly CreateTask = "snow-device-management:CreateTask";
	/** [Read] snow-device-management:DescribeDevice */
	static readonly DescribeDevice = "snow-device-management:DescribeDevice";
	/** [Read] snow-device-management:DescribeDeviceEc2Instances */
	static readonly DescribeDeviceEc2Instances =
		"snow-device-management:DescribeDeviceEc2Instances";
	/** [Read] snow-device-management:DescribeExecution */
	static readonly DescribeExecution =
		"snow-device-management:DescribeExecution";
	/** [Read] snow-device-management:DescribeTask */
	static readonly DescribeTask = "snow-device-management:DescribeTask";
	/** [List] snow-device-management:ListDeviceResources */
	static readonly ListDeviceResources =
		"snow-device-management:ListDeviceResources";
	/** [List] snow-device-management:ListDevices */
	static readonly ListDevices = "snow-device-management:ListDevices";
	/** [List] snow-device-management:ListExecutions */
	static readonly ListExecutions = "snow-device-management:ListExecutions";
	/** [Read] snow-device-management:ListTagsForResource */
	static readonly ListTagsForResource =
		"snow-device-management:ListTagsForResource";
	/** [List] snow-device-management:ListTasks */
	static readonly ListTasks = "snow-device-management:ListTasks";
	/** [Tagging] snow-device-management:TagResource */
	static readonly TagResource = "snow-device-management:TagResource";
	/** [Tagging] snow-device-management:UntagResource */
	static readonly UntagResource = "snow-device-management:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SnowDeviceManagementActions.DescribeDevice,
		SnowDeviceManagementActions.DescribeDeviceEc2Instances,
		SnowDeviceManagementActions.DescribeExecution,
		SnowDeviceManagementActions.DescribeTask,
		SnowDeviceManagementActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SnowDeviceManagementActions.CancelTask,
		SnowDeviceManagementActions.CreateTask,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SnowDeviceManagementActions.ListDeviceResources,
		SnowDeviceManagementActions.ListDevices,
		SnowDeviceManagementActions.ListExecutions,
		SnowDeviceManagementActions.ListTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SnowDeviceManagementActions.TagResource,
		SnowDeviceManagementActions.UntagResource,
	];
}

/**
 * Properties for building a managed-device ARN.
 */
export interface SnowDeviceManagementManagedDeviceArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a managed-device ARN.
 */
export interface SnowDeviceManagementManagedDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface SnowDeviceManagementTaskArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
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
export interface SnowDeviceManagementTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ManagedDeviceArnRegex =
	/^arn:(?<partition>[^:]+):snow-device-management:(?<region>[^:]*):(?<account>[^:]*):managed-device\/(?<resourceId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):snow-device-management:(?<region>[^:]*):(?<account>[^:]*):task\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for snow-device-management resources.
 */
export class SnowDeviceManagementResources {
	/**
	 * Builds an ARN for the managed-device resource.
	 */
	static managedDevice(
		props: SnowDeviceManagementManagedDeviceArnProps,
	): string {
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
	static parseManagedDeviceArn(
		arn: string,
	): SnowDeviceManagementManagedDeviceArnComponents {
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
	static task(props: SnowDeviceManagementTaskArnProps): string {
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
	static parseTaskArn(arn: string): SnowDeviceManagementTaskArnComponents {
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
	static readonly CancelTask: string[] = ["snow-device-management:CancelTask"];
	/** IAM actions required for the CreateTask API call. */
	static readonly CreateTask: string[] = [
		"snow-device-management:CreateTask",
		"snow-device-management:TagResource",
	];
	/** IAM actions required for the DescribeDevice API call. */
	static readonly DescribeDevice: string[] = [
		"snow-device-management:DescribeDevice",
	];
	/** IAM actions required for the DescribeDeviceEc2Instances API call. */
	static readonly DescribeDeviceEc2Instances: string[] = [
		"snow-device-management:DescribeDeviceEc2Instances",
	];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DescribeExecution: string[] = [
		"snow-device-management:DescribeExecution",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DescribeTask: string[] = [
		"snow-device-management:DescribeTask",
	];
	/** IAM actions required for the ListDeviceResources API call. */
	static readonly ListDeviceResources: string[] = [
		"snow-device-management:ListDeviceResources",
	];
	/** IAM actions required for the ListDevices API call. */
	static readonly ListDevices: string[] = [
		"snow-device-management:ListDevices",
	];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = [
		"snow-device-management:ListExecutions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"snow-device-management:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly ListTasks: string[] = ["snow-device-management:ListTasks"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"snow-device-management:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"snow-device-management:UntagResource",
	];
}

/**
 * Condition key constants and builders for snow-device-management.
 */
export class SnowDeviceManagementConditions {
	/** Condition keys applicable to the CreateTask action. */
	static readonly CreateTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
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
