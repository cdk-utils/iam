// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sqs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sqs service.
 */
export class SQSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sqs";

	/** [PermissionManagement] sqs:AddPermission */
	static readonly ADD_PERMISSION = "sqs:AddPermission";
	/** [Write] sqs:CancelMessageMoveTask */
	static readonly CANCEL_MESSAGE_MOVE_TASK = "sqs:CancelMessageMoveTask";
	/** [Write] sqs:ChangeMessageVisibility */
	static readonly CHANGE_MESSAGE_VISIBILITY = "sqs:ChangeMessageVisibility";
	/** [Write] sqs:CreateQueue */
	static readonly CREATE_QUEUE = "sqs:CreateQueue";
	/** [Write] sqs:DeleteMessage */
	static readonly DELETE_MESSAGE = "sqs:DeleteMessage";
	/** [Write] sqs:DeleteQueue */
	static readonly DELETE_QUEUE = "sqs:DeleteQueue";
	/** [Read] sqs:GetQueueAttributes */
	static readonly GET_QUEUE_ATTRIBUTES = "sqs:GetQueueAttributes";
	/** [Read] sqs:GetQueueUrl */
	static readonly GET_QUEUE_URL = "sqs:GetQueueUrl";
	/** [Read] sqs:ListDeadLetterSourceQueues */
	static readonly LIST_DEAD_LETTER_SOURCE_QUEUES =
		"sqs:ListDeadLetterSourceQueues";
	/** [Read] sqs:ListMessageMoveTasks */
	static readonly LIST_MESSAGE_MOVE_TASKS = "sqs:ListMessageMoveTasks";
	/** [Read] sqs:ListQueueTags */
	static readonly LIST_QUEUE_TAGS = "sqs:ListQueueTags";
	/** [Read] sqs:ListQueues */
	static readonly LIST_QUEUES = "sqs:ListQueues";
	/** [Write] sqs:PurgeQueue */
	static readonly PURGE_QUEUE = "sqs:PurgeQueue";
	/** [Read] sqs:ReceiveMessage */
	static readonly RECEIVE_MESSAGE = "sqs:ReceiveMessage";
	/** [PermissionManagement] sqs:RemovePermission */
	static readonly REMOVE_PERMISSION = "sqs:RemovePermission";
	/** [Write] sqs:SendMessage */
	static readonly SEND_MESSAGE = "sqs:SendMessage";
	/** [PermissionManagement] sqs:SetQueueAttributes */
	static readonly SET_QUEUE_ATTRIBUTES = "sqs:SetQueueAttributes";
	/** [Write] sqs:StartMessageMoveTask */
	static readonly START_MESSAGE_MOVE_TASK = "sqs:StartMessageMoveTask";
	/** [Tagging] sqs:TagQueue */
	static readonly TAG_QUEUE = "sqs:TagQueue";
	/** [Tagging] sqs:UntagQueue */
	static readonly UNTAG_QUEUE = "sqs:UntagQueue";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SQSActions.GET_QUEUE_ATTRIBUTES,
		SQSActions.GET_QUEUE_URL,
		SQSActions.LIST_DEAD_LETTER_SOURCE_QUEUES,
		SQSActions.LIST_MESSAGE_MOVE_TASKS,
		SQSActions.LIST_QUEUE_TAGS,
		SQSActions.LIST_QUEUES,
		SQSActions.RECEIVE_MESSAGE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SQSActions.CANCEL_MESSAGE_MOVE_TASK,
		SQSActions.CHANGE_MESSAGE_VISIBILITY,
		SQSActions.CREATE_QUEUE,
		SQSActions.DELETE_MESSAGE,
		SQSActions.DELETE_QUEUE,
		SQSActions.PURGE_QUEUE,
		SQSActions.SEND_MESSAGE,
		SQSActions.START_MESSAGE_MOVE_TASK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SQSActions.ADD_PERMISSION,
		SQSActions.REMOVE_PERMISSION,
		SQSActions.SET_QUEUE_ATTRIBUTES,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SQSActions.TAG_QUEUE,
		SQSActions.UNTAG_QUEUE,
	];
}

const QueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sqs:(?<region>[^:]*):(?<account>[^:]*):(?<queueName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sqs resources.
 */
export class SQSResources {
	/**
	 * Builds an ARN for the queue resource.
	 */
	static queue(props: {
		/** The QueueName component of the ARN. */
		readonly queueName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sqs:${props.region ?? "*"}:${props.account ?? "*"}:${props.queueName}`;
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
		queueName: string;
	} {
		const match = QueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			queueName: match.groups!.queueName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sqs.
 */
export class SQSOperations {
	/** IAM actions required for the AddPermission API call. */
	static readonly ADD_PERMISSION: string[] = ["sqs:AddPermission"];
	/** IAM actions required for the CancelMessageMoveTask API call. */
	static readonly CANCEL_MESSAGE_MOVE_TASK: string[] = [
		"sqs:CancelMessageMoveTask",
		"sqs:DeleteMessage",
		"sqs:GetQueueAttributes",
		"sqs:ReceiveMessage",
	];
	/** IAM actions required for the ChangeMessageVisibility API call. */
	static readonly CHANGE_MESSAGE_VISIBILITY: string[] = [
		"sqs:ChangeMessageVisibility",
	];
	/** IAM actions required for the ChangeMessageVisibilityBatch API call. */
	static readonly CHANGE_MESSAGE_VISIBILITY_BATCH: string[] = [
		"sqs:ChangeMessageVisibility",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CREATE_QUEUE: string[] = ["sqs:CreateQueue", "sqs:TagQueue"];
	/** IAM actions required for the DeleteMessage API call. */
	static readonly DELETE_MESSAGE: string[] = ["sqs:DeleteMessage"];
	/** IAM actions required for the DeleteMessageBatch API call. */
	static readonly DELETE_MESSAGE_BATCH: string[] = ["sqs:DeleteMessage"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DELETE_QUEUE: string[] = ["sqs:DeleteQueue"];
	/** IAM actions required for the GetQueueAttributes API call. */
	static readonly GET_QUEUE_ATTRIBUTES: string[] = ["sqs:GetQueueAttributes"];
	/** IAM actions required for the GetQueueUrl API call. */
	static readonly GET_QUEUE_URL: string[] = ["sqs:GetQueueUrl"];
	/** IAM actions required for the ListDeadLetterSourceQueues API call. */
	static readonly LIST_DEAD_LETTER_SOURCE_QUEUES: string[] = [
		"sqs:ListDeadLetterSourceQueues",
	];
	/** IAM actions required for the ListMessageMoveTasks API call. */
	static readonly LIST_MESSAGE_MOVE_TASKS: string[] = [
		"sqs:GetQueueAttributes",
		"sqs:ListMessageMoveTasks",
	];
	/** IAM actions required for the ListQueueTags API call. */
	static readonly LIST_QUEUE_TAGS: string[] = ["sqs:ListQueueTags"];
	/** IAM actions required for the ListQueues API call. */
	static readonly LIST_QUEUES: string[] = ["sqs:ListQueues"];
	/** IAM actions required for the PurgeQueue API call. */
	static readonly PURGE_QUEUE: string[] = ["sqs:PurgeQueue"];
	/** IAM actions required for the ReceiveMessage API call. */
	static readonly RECEIVE_MESSAGE: string[] = ["sqs:ReceiveMessage"];
	/** IAM actions required for the RemovePermission API call. */
	static readonly REMOVE_PERMISSION: string[] = ["sqs:RemovePermission"];
	/** IAM actions required for the SendMessage API call. */
	static readonly SEND_MESSAGE: string[] = ["sqs:SendMessage"];
	/** IAM actions required for the SendMessageBatch API call. */
	static readonly SEND_MESSAGE_BATCH: string[] = ["sqs:SendMessage"];
	/** IAM actions required for the SetQueueAttributes API call. */
	static readonly SET_QUEUE_ATTRIBUTES: string[] = ["sqs:SetQueueAttributes"];
	/** IAM actions required for the StartMessageMoveTask API call. */
	static readonly START_MESSAGE_MOVE_TASK: string[] = [
		"sqs:DeleteMessage",
		"sqs:GetQueueAttributes",
		"sqs:ReceiveMessage",
		"sqs:SendMessage",
		"sqs:StartMessageMoveTask",
	];
	/** IAM actions required for the TagQueue API call. */
	static readonly TAG_QUEUE: string[] = ["sqs:TagQueue"];
	/** IAM actions required for the UntagQueue API call. */
	static readonly UNTAG_QUEUE: string[] = ["sqs:UntagQueue"];
}

/**
 * Condition key constants and builders for sqs.
 */
export class SQSConditions {
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CREATE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagQueue action. */
	static readonly TAG_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagQueue action. */
	static readonly UNTAG_QUEUE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
