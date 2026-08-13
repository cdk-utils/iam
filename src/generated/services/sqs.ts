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
	static readonly AddPermission = "sqs:AddPermission";
	/** [Write] sqs:CancelMessageMoveTask */
	static readonly CancelMessageMoveTask = "sqs:CancelMessageMoveTask";
	/** [Write] sqs:ChangeMessageVisibility */
	static readonly ChangeMessageVisibility = "sqs:ChangeMessageVisibility";
	/** [Write] sqs:CreateQueue */
	static readonly CreateQueue = "sqs:CreateQueue";
	/** [Write] sqs:DeleteMessage */
	static readonly DeleteMessage = "sqs:DeleteMessage";
	/** [Write] sqs:DeleteQueue */
	static readonly DeleteQueue = "sqs:DeleteQueue";
	/** [Read] sqs:GetQueueAttributes */
	static readonly actionGetQueueAttributes = "sqs:GetQueueAttributes";
	/** [Read] sqs:GetQueueUrl */
	static readonly actionGetQueueUrl = "sqs:GetQueueUrl";
	/** [Read] sqs:ListDeadLetterSourceQueues */
	static readonly ListDeadLetterSourceQueues = "sqs:ListDeadLetterSourceQueues";
	/** [Read] sqs:ListMessageMoveTasks */
	static readonly ListMessageMoveTasks = "sqs:ListMessageMoveTasks";
	/** [Read] sqs:ListQueueTags */
	static readonly ListQueueTags = "sqs:ListQueueTags";
	/** [Read] sqs:ListQueues */
	static readonly ListQueues = "sqs:ListQueues";
	/** [Write] sqs:PurgeQueue */
	static readonly PurgeQueue = "sqs:PurgeQueue";
	/** [Read] sqs:ReceiveMessage */
	static readonly ReceiveMessage = "sqs:ReceiveMessage";
	/** [PermissionManagement] sqs:RemovePermission */
	static readonly RemovePermission = "sqs:RemovePermission";
	/** [Write] sqs:SendMessage */
	static readonly SendMessage = "sqs:SendMessage";
	/** [PermissionManagement] sqs:SetQueueAttributes */
	static readonly actionSetQueueAttributes = "sqs:SetQueueAttributes";
	/** [Write] sqs:StartMessageMoveTask */
	static readonly StartMessageMoveTask = "sqs:StartMessageMoveTask";
	/** [Tagging] sqs:TagQueue */
	static readonly TagQueue = "sqs:TagQueue";
	/** [Tagging] sqs:UntagQueue */
	static readonly UntagQueue = "sqs:UntagQueue";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SQSActions.actionGetQueueAttributes,
		SQSActions.actionGetQueueUrl,
		SQSActions.ListDeadLetterSourceQueues,
		SQSActions.ListMessageMoveTasks,
		SQSActions.ListQueueTags,
		SQSActions.ListQueues,
		SQSActions.ReceiveMessage,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SQSActions.CancelMessageMoveTask,
		SQSActions.ChangeMessageVisibility,
		SQSActions.CreateQueue,
		SQSActions.DeleteMessage,
		SQSActions.DeleteQueue,
		SQSActions.PurgeQueue,
		SQSActions.SendMessage,
		SQSActions.StartMessageMoveTask,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SQSActions.AddPermission,
		SQSActions.RemovePermission,
		SQSActions.actionSetQueueAttributes,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SQSActions.TagQueue,
		SQSActions.UntagQueue,
	];
}

/**
 * Properties for building a queue ARN.
 */
export interface SQSQueueArnProps {
	/** The QueueName component of the ARN. */
	readonly queueName: string;
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
export interface SQSQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The QueueName component. */
	readonly queueName: string;
}

const QueueArnRegex =
	/^arn:(?<partition>[^:]+):sqs:(?<region>[^:]*):(?<account>[^:]*):(?<queueName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sqs resources.
 */
export class SQSResources {
	/**
	 * Builds an ARN for the queue resource.
	 */
	static queue(props: SQSQueueArnProps): string {
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
	static parseQueueArn(arn: string): SQSQueueArnComponents {
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
	static readonly AddPermission: string[] = ["sqs:AddPermission"];
	/** IAM actions required for the CancelMessageMoveTask API call. */
	static readonly CancelMessageMoveTask: string[] = [
		"sqs:CancelMessageMoveTask",
		"sqs:DeleteMessage",
		"sqs:GetQueueAttributes",
		"sqs:ReceiveMessage",
	];
	/** IAM actions required for the ChangeMessageVisibility API call. */
	static readonly ChangeMessageVisibility: string[] = [
		"sqs:ChangeMessageVisibility",
	];
	/** IAM actions required for the ChangeMessageVisibilityBatch API call. */
	static readonly ChangeMessageVisibilityBatch: string[] = [
		"sqs:ChangeMessageVisibility",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CreateQueue: string[] = ["sqs:CreateQueue", "sqs:TagQueue"];
	/** IAM actions required for the DeleteMessage API call. */
	static readonly DeleteMessage: string[] = ["sqs:DeleteMessage"];
	/** IAM actions required for the DeleteMessageBatch API call. */
	static readonly DeleteMessageBatch: string[] = ["sqs:DeleteMessage"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DeleteQueue: string[] = ["sqs:DeleteQueue"];
	/** IAM actions required for the GetQueueAttributes API call. */
	static readonly opGetQueueAttributes: string[] = ["sqs:GetQueueAttributes"];
	/** IAM actions required for the GetQueueUrl API call. */
	static readonly opGetQueueUrl: string[] = ["sqs:GetQueueUrl"];
	/** IAM actions required for the ListDeadLetterSourceQueues API call. */
	static readonly ListDeadLetterSourceQueues: string[] = [
		"sqs:ListDeadLetterSourceQueues",
	];
	/** IAM actions required for the ListMessageMoveTasks API call. */
	static readonly ListMessageMoveTasks: string[] = [
		"sqs:GetQueueAttributes",
		"sqs:ListMessageMoveTasks",
	];
	/** IAM actions required for the ListQueueTags API call. */
	static readonly ListQueueTags: string[] = ["sqs:ListQueueTags"];
	/** IAM actions required for the ListQueues API call. */
	static readonly ListQueues: string[] = ["sqs:ListQueues"];
	/** IAM actions required for the PurgeQueue API call. */
	static readonly PurgeQueue: string[] = ["sqs:PurgeQueue"];
	/** IAM actions required for the ReceiveMessage API call. */
	static readonly ReceiveMessage: string[] = ["sqs:ReceiveMessage"];
	/** IAM actions required for the RemovePermission API call. */
	static readonly RemovePermission: string[] = ["sqs:RemovePermission"];
	/** IAM actions required for the SendMessage API call. */
	static readonly SendMessage: string[] = ["sqs:SendMessage"];
	/** IAM actions required for the SendMessageBatch API call. */
	static readonly SendMessageBatch: string[] = ["sqs:SendMessage"];
	/** IAM actions required for the SetQueueAttributes API call. */
	static readonly opSetQueueAttributes: string[] = ["sqs:SetQueueAttributes"];
	/** IAM actions required for the StartMessageMoveTask API call. */
	static readonly StartMessageMoveTask: string[] = [
		"sqs:DeleteMessage",
		"sqs:GetQueueAttributes",
		"sqs:ReceiveMessage",
		"sqs:SendMessage",
		"sqs:StartMessageMoveTask",
	];
	/** IAM actions required for the TagQueue API call. */
	static readonly TagQueue: string[] = ["sqs:TagQueue"];
	/** IAM actions required for the UntagQueue API call. */
	static readonly UntagQueue: string[] = ["sqs:UntagQueue"];
}

/**
 * Condition key constants and builders for sqs.
 */
export class SQSConditions {
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CreateQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagQueue action. */
	static readonly TagQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagQueue action. */
	static readonly UntagQueueConditionKeys: string[] = ["aws:TagKeys"];

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
