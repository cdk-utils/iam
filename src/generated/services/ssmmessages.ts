// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssmmessages.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssmmessages service.
 */
export class SsmmessagesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssmmessages";

	/** [Write] ssmmessages:CreateControlChannel */
	static readonly CreateControlChannel = "ssmmessages:CreateControlChannel";
	/** [Write] ssmmessages:CreateDataChannel */
	static readonly CreateDataChannel = "ssmmessages:CreateDataChannel";
	/** [Write] ssmmessages:OpenControlChannel */
	static readonly OpenControlChannel = "ssmmessages:OpenControlChannel";
	/** [Write] ssmmessages:OpenDataChannel */
	static readonly OpenDataChannel = "ssmmessages:OpenDataChannel";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SsmmessagesActions.CreateControlChannel,
		SsmmessagesActions.CreateDataChannel,
		SsmmessagesActions.OpenControlChannel,
		SsmmessagesActions.OpenDataChannel,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Condition key constants and builders for ssmmessages.
 */
export class SsmmessagesConditions {
	/** Condition keys applicable to the CreateControlChannel action. */
	static readonly CreateControlChannelConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];

	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
}
