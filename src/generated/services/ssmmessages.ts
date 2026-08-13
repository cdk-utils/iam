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
	static readonly CREATE_CONTROL_CHANNEL = "ssmmessages:CreateControlChannel";
	/** [Write] ssmmessages:CreateDataChannel */
	static readonly CREATE_DATA_CHANNEL = "ssmmessages:CreateDataChannel";
	/** [Write] ssmmessages:OpenControlChannel */
	static readonly OPEN_CONTROL_CHANNEL = "ssmmessages:OpenControlChannel";
	/** [Write] ssmmessages:OpenDataChannel */
	static readonly OPEN_DATA_CHANNEL = "ssmmessages:OpenDataChannel";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SsmmessagesActions.CREATE_CONTROL_CHANNEL,
		SsmmessagesActions.CREATE_DATA_CHANNEL,
		SsmmessagesActions.OPEN_CONTROL_CHANNEL,
		SsmmessagesActions.OPEN_DATA_CHANNEL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * Condition key constants and builders for ssmmessages.
 */
export class SsmmessagesConditions {
	/** Condition keys applicable to the CreateControlChannel action. */
	static readonly CREATE_CONTROL_CHANNEL_CONDITION_KEYS: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];

	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
	/** Condition key: ssm:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ssm:SourceInstanceARN";
}
