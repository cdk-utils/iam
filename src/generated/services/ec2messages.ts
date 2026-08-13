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
	static readonly AcknowledgeMessage = "ec2messages:AcknowledgeMessage";
	/** [Write] ec2messages:DeleteMessage */
	static readonly DeleteMessage = "ec2messages:DeleteMessage";
	/** [Write] ec2messages:FailMessage */
	static readonly FailMessage = "ec2messages:FailMessage";
	/** [Read] ec2messages:GetEndpoint */
	static readonly actionGetEndpoint = "ec2messages:GetEndpoint";
	/** [Read] ec2messages:GetMessages */
	static readonly actionGetMessages = "ec2messages:GetMessages";
	/** [Write] ec2messages:SendReply */
	static readonly SendReply = "ec2messages:SendReply";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Ec2messagesActions.actionGetEndpoint,
		Ec2messagesActions.actionGetMessages,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Ec2messagesActions.AcknowledgeMessage,
		Ec2messagesActions.DeleteMessage,
		Ec2messagesActions.FailMessage,
		Ec2messagesActions.SendReply,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Condition key constants and builders for ec2messages.
 */
export class Ec2messagesConditions {
	/** Condition keys applicable to the GetMessages action. */
	static readonly actionGetMessagesConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the SendReply action. */
	static readonly SendReplyConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];

	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
}
