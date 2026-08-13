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
	static readonly ACCEPT_USER_AGREEMENT = "braket:AcceptUserAgreement";
	/** [Write] braket:CancelJob */
	static readonly CANCEL_JOB = "braket:CancelJob";
	/** [Write] braket:CancelQuantumTask */
	static readonly CANCEL_QUANTUM_TASK = "braket:CancelQuantumTask";
	/** [Write] braket:CreateJob */
	static readonly CREATE_JOB = "braket:CreateJob";
	/** [Write] braket:CreateQuantumTask */
	static readonly CREATE_QUANTUM_TASK = "braket:CreateQuantumTask";
	/** [Write] braket:CreateSpendingLimit */
	static readonly CREATE_SPENDING_LIMIT = "braket:CreateSpendingLimit";
	/** [Write] braket:DeleteSpendingLimit */
	static readonly DELETE_SPENDING_LIMIT = "braket:DeleteSpendingLimit";
	/** [Read] braket:GetDevice */
	static readonly GET_DEVICE = "braket:GetDevice";
	/** [Read] braket:GetJob */
	static readonly GET_JOB = "braket:GetJob";
	/** [Read] braket:GetQuantumTask */
	static readonly GET_QUANTUM_TASK = "braket:GetQuantumTask";
	/** [Read] braket:GetServiceLinkedRoleStatus */
	static readonly GET_SERVICE_LINKED_ROLE_STATUS =
		"braket:GetServiceLinkedRoleStatus";
	/** [Read] braket:GetUserAgreementStatus */
	static readonly GET_USER_AGREEMENT_STATUS = "braket:GetUserAgreementStatus";
	/** [Read] braket:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "braket:ListTagsForResource";
	/** [List] braket:SearchDevices */
	static readonly SEARCH_DEVICES = "braket:SearchDevices";
	/** [List] braket:SearchJobs */
	static readonly SEARCH_JOBS = "braket:SearchJobs";
	/** [List] braket:SearchQuantumTasks */
	static readonly SEARCH_QUANTUM_TASKS = "braket:SearchQuantumTasks";
	/** [Read] braket:SearchSpendingLimits */
	static readonly SEARCH_SPENDING_LIMITS = "braket:SearchSpendingLimits";
	/** [Tagging] braket:TagResource */
	static readonly TAG_RESOURCE = "braket:TagResource";
	/** [Tagging] braket:UntagResource */
	static readonly UNTAG_RESOURCE = "braket:UntagResource";
	/** [Write] braket:UpdateSpendingLimit */
	static readonly UPDATE_SPENDING_LIMIT = "braket:UpdateSpendingLimit";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BraketActions.GET_DEVICE,
		BraketActions.GET_JOB,
		BraketActions.GET_QUANTUM_TASK,
		BraketActions.GET_SERVICE_LINKED_ROLE_STATUS,
		BraketActions.GET_USER_AGREEMENT_STATUS,
		BraketActions.LIST_TAGS_FOR_RESOURCE,
		BraketActions.SEARCH_SPENDING_LIMITS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BraketActions.ACCEPT_USER_AGREEMENT,
		BraketActions.CANCEL_JOB,
		BraketActions.CANCEL_QUANTUM_TASK,
		BraketActions.CREATE_JOB,
		BraketActions.CREATE_QUANTUM_TASK,
		BraketActions.CREATE_SPENDING_LIMIT,
		BraketActions.DELETE_SPENDING_LIMIT,
		BraketActions.UPDATE_SPENDING_LIMIT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BraketActions.SEARCH_DEVICES,
		BraketActions.SEARCH_JOBS,
		BraketActions.SEARCH_QUANTUM_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BraketActions.TAG_RESOURCE,
		BraketActions.UNTAG_RESOURCE,
	];
}

const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):braket:.*:.*:device/(?<deviceType>[^:/?]+)/(?<provider>[^:/?]+)/(?<deviceId>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):job/(?<randomId>[^:/?]+)$",
);
const QuantumTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):quantum-task/(?<randomId>[^:/?]+)$",
);
const SpendingLimitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):braket:(?<region>[^:]*):(?<account>[^:]*):spending-limit/(?<randomId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for braket resources.
 */
export class BraketResources {
	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: {
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
	}): string {
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
	static parseDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceType: string;
		provider: string;
		deviceId: string;
	} {
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
	static job(props: {
		/** The RandomId component of the ARN. */
		readonly randomId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		randomId: string;
	} {
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
	static quantumTask(props: {
		/** The RandomId component of the ARN. */
		readonly randomId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseQuantumTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		randomId: string;
	} {
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
	static spendingLimit(props: {
		/** The RandomId component of the ARN. */
		readonly randomId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSpendingLimitArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		randomId: string;
	} {
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
	static readonly CANCEL_JOB: string[] = ["braket:CancelJob"];
	/** IAM actions required for the CancelQuantumTask API call. */
	static readonly CANCEL_QUANTUM_TASK: string[] = ["braket:CancelQuantumTask"];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"braket:CreateJob",
		"iam:PassRole",
		"braket:TagResource",
	];
	/** IAM actions required for the CreateQuantumTask API call. */
	static readonly CREATE_QUANTUM_TASK: string[] = [
		"braket:CreateQuantumTask",
		"braket:TagResource",
	];
	/** IAM actions required for the CreateSpendingLimit API call. */
	static readonly CREATE_SPENDING_LIMIT: string[] = [
		"braket:CreateSpendingLimit",
		"braket:TagResource",
	];
	/** IAM actions required for the DeleteSpendingLimit API call. */
	static readonly DELETE_SPENDING_LIMIT: string[] = [
		"braket:DeleteSpendingLimit",
	];
	/** IAM actions required for the GetDevice API call. */
	static readonly GET_DEVICE: string[] = ["braket:GetDevice"];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["braket:GetJob"];
	/** IAM actions required for the GetQuantumTask API call. */
	static readonly GET_QUANTUM_TASK: string[] = ["braket:GetQuantumTask"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"braket:ListTagsForResource",
	];
	/** IAM actions required for the SearchDevices API call. */
	static readonly SEARCH_DEVICES: string[] = ["braket:SearchDevices"];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SEARCH_JOBS: string[] = ["braket:SearchJobs"];
	/** IAM actions required for the SearchQuantumTasks API call. */
	static readonly SEARCH_QUANTUM_TASKS: string[] = [
		"braket:SearchQuantumTasks",
	];
	/** IAM actions required for the SearchSpendingLimits API call. */
	static readonly SEARCH_SPENDING_LIMITS: string[] = [
		"braket:SearchSpendingLimits",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["braket:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["braket:UntagResource"];
	/** IAM actions required for the UpdateSpendingLimit API call. */
	static readonly UPDATE_SPENDING_LIMIT: string[] = [
		"braket:UpdateSpendingLimit",
	];
}

/**
 * Condition key constants and builders for braket.
 */
export class BraketConditions {
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuantumTask action. */
	static readonly CREATE_QUANTUM_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpendingLimit action. */
	static readonly CREATE_SPENDING_LIMIT_CONDITION_KEYS: string[] = [
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
