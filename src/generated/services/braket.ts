// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/braket.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the braket service.
 */
export class BraketActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "braket";

	/** [Write] braket:AcceptUserAgreement */
	static readonly AcceptUserAgreement = "braket:AcceptUserAgreement";
	/** [Write] braket:CancelJob */
	static readonly CancelJob = "braket:CancelJob";
	/** [Write] braket:CancelQuantumTask */
	static readonly CancelQuantumTask = "braket:CancelQuantumTask";
	/** [Write] braket:CreateJob */
	static readonly CreateJob = "braket:CreateJob";
	/** [Write] braket:CreateQuantumTask */
	static readonly CreateQuantumTask = "braket:CreateQuantumTask";
	/** [Write] braket:CreateSpendingLimit */
	static readonly CreateSpendingLimit = "braket:CreateSpendingLimit";
	/** [Write] braket:DeleteSpendingLimit */
	static readonly DeleteSpendingLimit = "braket:DeleteSpendingLimit";
	/** [Read] braket:GetDevice */
	static readonly actionGetDevice = "braket:GetDevice";
	/** [Read] braket:GetJob */
	static readonly actionGetJob = "braket:GetJob";
	/** [Read] braket:GetQuantumTask */
	static readonly actionGetQuantumTask = "braket:GetQuantumTask";
	/** [Read] braket:GetServiceLinkedRoleStatus */
	static readonly actionGetServiceLinkedRoleStatus =
		"braket:GetServiceLinkedRoleStatus";
	/** [Read] braket:GetUserAgreementStatus */
	static readonly actionGetUserAgreementStatus =
		"braket:GetUserAgreementStatus";
	/** [Read] braket:ListTagsForResource */
	static readonly ListTagsForResource = "braket:ListTagsForResource";
	/** [List] braket:SearchDevices */
	static readonly SearchDevices = "braket:SearchDevices";
	/** [List] braket:SearchJobs */
	static readonly SearchJobs = "braket:SearchJobs";
	/** [List] braket:SearchQuantumTasks */
	static readonly SearchQuantumTasks = "braket:SearchQuantumTasks";
	/** [Read] braket:SearchSpendingLimits */
	static readonly SearchSpendingLimits = "braket:SearchSpendingLimits";
	/** [Tagging] braket:TagResource */
	static readonly TagResource = "braket:TagResource";
	/** [Tagging] braket:UntagResource */
	static readonly UntagResource = "braket:UntagResource";
	/** [Write] braket:UpdateSpendingLimit */
	static readonly UpdateSpendingLimit = "braket:UpdateSpendingLimit";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BraketActions.actionGetDevice,
		BraketActions.actionGetJob,
		BraketActions.actionGetQuantumTask,
		BraketActions.actionGetServiceLinkedRoleStatus,
		BraketActions.actionGetUserAgreementStatus,
		BraketActions.ListTagsForResource,
		BraketActions.SearchSpendingLimits,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BraketActions.AcceptUserAgreement,
		BraketActions.CancelJob,
		BraketActions.CancelQuantumTask,
		BraketActions.CreateJob,
		BraketActions.CreateQuantumTask,
		BraketActions.CreateSpendingLimit,
		BraketActions.DeleteSpendingLimit,
		BraketActions.UpdateSpendingLimit,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BraketActions.SearchDevices,
		BraketActions.SearchJobs,
		BraketActions.SearchQuantumTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BraketActions.TagResource,
		BraketActions.UntagResource,
	];
}

/**
 * Properties for building a device ARN.
 */
export interface BraketDeviceArnProps {
	/** The DeviceType component of the ARN. */
	readonly deviceType: string;
	/** The Provider component of the ARN. */
	readonly provider: string;
	/** The DeviceId component of the ARN. */
	readonly deviceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device ARN.
 */
export interface BraketDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceType component. */
	readonly deviceType: string;
	/** The Provider component. */
	readonly provider: string;
	/** The DeviceId component. */
	readonly deviceId: string;
}

/**
 * Properties for building a job ARN.
 */
export interface BraketJobArnProps {
	/** The RandomId component of the ARN. */
	readonly randomId: string;
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
export interface BraketJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RandomId component. */
	readonly randomId: string;
}

/**
 * Properties for building a quantum-task ARN.
 */
export interface BraketQuantumTaskArnProps {
	/** The RandomId component of the ARN. */
	readonly randomId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a quantum-task ARN.
 */
export interface BraketQuantumTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RandomId component. */
	readonly randomId: string;
}

/**
 * Properties for building a spending-limit ARN.
 */
export interface BraketSpendingLimitArnProps {
	/** The RandomId component of the ARN. */
	readonly randomId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a spending-limit ARN.
 */
export interface BraketSpendingLimitArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RandomId component. */
	readonly randomId: string;
}

const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):braket:.*:.*:device\/(?<deviceType>[^:/?]+)\/(?<provider>[^:/?]+)\/(?<deviceId>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):job\/(?<randomId>[^:/?]+)$/;
const QuantumTaskArnRegex =
	/^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):quantum-task\/(?<randomId>[^:/?]+)$/;
const SpendingLimitArnRegex =
	/^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):spending-limit\/(?<randomId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for braket resources.
 */
export class BraketResources {
	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: BraketDeviceArnProps): string {
		return `arn:${props.partition ?? "aws"}:braket:*:*:device/${props.deviceType}/${props.provider}/${props.deviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device resource.
	 */
	static isValidDeviceArn(arn: string): boolean {
		return DeviceArnRegex.test(arn);
	}

	/**
	 * Parses a device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceArn(arn: string): BraketDeviceArnComponents {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceType: match.groups!.deviceType,
			provider: match.groups!.provider,
			deviceId: match.groups!.deviceId,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: BraketJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:braket:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.randomId}`;
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
	static parseJobArn(arn: string): BraketJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			randomId: match.groups!.randomId,
		};
	}

	/**
	 * Builds an ARN for the quantum-task resource.
	 */
	static quantumTask(props: BraketQuantumTaskArnProps): string {
		return `arn:${props.partition ?? "aws"}:braket:${props.region ?? "*"}:${props.account ?? "*"}:quantum-task/${props.randomId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the quantum-task resource.
	 */
	static isValidQuantumTaskArn(arn: string): boolean {
		return QuantumTaskArnRegex.test(arn);
	}

	/**
	 * Parses a quantum-task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuantumTaskArn(arn: string): BraketQuantumTaskArnComponents {
		const match = QuantumTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid quantum-task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			randomId: match.groups!.randomId,
		};
	}

	/**
	 * Builds an ARN for the spending-limit resource.
	 */
	static spendingLimit(props: BraketSpendingLimitArnProps): string {
		return `arn:${props.partition ?? "aws"}:braket:${props.region ?? "*"}:${props.account ?? "*"}:spending-limit/${props.randomId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the spending-limit resource.
	 */
	static isValidSpendingLimitArn(arn: string): boolean {
		return SpendingLimitArnRegex.test(arn);
	}

	/**
	 * Parses a spending-limit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpendingLimitArn(arn: string): BraketSpendingLimitArnComponents {
		const match = SpendingLimitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid spending-limit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			randomId: match.groups!.randomId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for braket.
 */
export class BraketOperations {
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["braket:CancelJob"];
	/** IAM actions required for the CancelQuantumTask API call. */
	static readonly CancelQuantumTask: string[] = ["braket:CancelQuantumTask"];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"braket:CreateJob",
		"iam:PassRole",
		"braket:TagResource",
	];
	/** IAM actions required for the CreateQuantumTask API call. */
	static readonly CreateQuantumTask: string[] = [
		"braket:CreateQuantumTask",
		"braket:TagResource",
	];
	/** IAM actions required for the CreateSpendingLimit API call. */
	static readonly CreateSpendingLimit: string[] = [
		"braket:CreateSpendingLimit",
		"braket:TagResource",
	];
	/** IAM actions required for the DeleteSpendingLimit API call. */
	static readonly DeleteSpendingLimit: string[] = [
		"braket:DeleteSpendingLimit",
	];
	/** IAM actions required for the GetDevice API call. */
	static readonly opGetDevice: string[] = ["braket:GetDevice"];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["braket:GetJob"];
	/** IAM actions required for the GetQuantumTask API call. */
	static readonly opGetQuantumTask: string[] = ["braket:GetQuantumTask"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"braket:ListTagsForResource",
	];
	/** IAM actions required for the SearchDevices API call. */
	static readonly SearchDevices: string[] = ["braket:SearchDevices"];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SearchJobs: string[] = ["braket:SearchJobs"];
	/** IAM actions required for the SearchQuantumTasks API call. */
	static readonly SearchQuantumTasks: string[] = ["braket:SearchQuantumTasks"];
	/** IAM actions required for the SearchSpendingLimits API call. */
	static readonly SearchSpendingLimits: string[] = [
		"braket:SearchSpendingLimits",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["braket:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["braket:UntagResource"];
	/** IAM actions required for the UpdateSpendingLimit API call. */
	static readonly UpdateSpendingLimit: string[] = [
		"braket:UpdateSpendingLimit",
	];
}

/**
 * Condition key constants and builders for braket.
 */
export class BraketConditions {
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuantumTask action. */
	static readonly CreateQuantumTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpendingLimit action. */
	static readonly CreateSpendingLimitConditionKeys: string[] = [
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
