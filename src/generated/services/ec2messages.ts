// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ec2messages.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ec2messages service.
 */
export class Ec2messagesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ec2messages";

	/** [Write] ec2messages:AcknowledgeMessage */
	static readonly ACKNOWLEDGE_MESSAGE = "ec2messages:AcknowledgeMessage";
	/** [Write] ec2messages:DeleteMessage */
	static readonly DELETE_MESSAGE = "ec2messages:DeleteMessage";
	/** [Write] ec2messages:FailMessage */
	static readonly FAIL_MESSAGE = "ec2messages:FailMessage";
	/** [Read] ec2messages:GetEndpoint */
	static readonly GET_ENDPOINT = "ec2messages:GetEndpoint";
	/** [Read] ec2messages:GetMessages */
	static readonly GET_MESSAGES = "ec2messages:GetMessages";
	/** [Write] ec2messages:SendReply */
	static readonly SEND_REPLY = "ec2messages:SendReply";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Ec2messagesActions.GET_ENDPOINT,
		Ec2messagesActions.GET_MESSAGES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Ec2messagesActions.ACKNOWLEDGE_MESSAGE,
		Ec2messagesActions.DELETE_MESSAGE,
		Ec2messagesActions.FAIL_MESSAGE,
		Ec2messagesActions.SEND_REPLY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * Condition key constants and builders for ec2messages.
 */
export class Ec2messagesConditions {
	/** Condition keys applicable to the GetMessages action. */
	static readonly GET_MESSAGES_CONDITION_KEYS: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the SendReply action. */
	static readonly SEND_REPLY_CONDITION_KEYS: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];

	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
	/** Condition key: ssm:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ssm:SourceInstanceARN";
}
