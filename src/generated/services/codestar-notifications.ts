// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codestar-notifications.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codestar-notifications service.
 */
export class CodestarNotificationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codestar-notifications";

	/** [Write] codestar-notifications:CreateNotificationRule */
	static readonly CREATE_NOTIFICATION_RULE =
		"codestar-notifications:CreateNotificationRule";
	/** [Write] codestar-notifications:DeleteNotificationRule */
	static readonly DELETE_NOTIFICATION_RULE =
		"codestar-notifications:DeleteNotificationRule";
	/** [Write] codestar-notifications:DeleteTarget */
	static readonly DELETE_TARGET = "codestar-notifications:DeleteTarget";
	/** [Read] codestar-notifications:DescribeNotificationRule */
	static readonly DESCRIBE_NOTIFICATION_RULE =
		"codestar-notifications:DescribeNotificationRule";
	/** [List] codestar-notifications:ListEventTypes */
	static readonly LIST_EVENT_TYPES = "codestar-notifications:ListEventTypes";
	/** [List] codestar-notifications:ListNotificationRules */
	static readonly LIST_NOTIFICATION_RULES =
		"codestar-notifications:ListNotificationRules";
	/** [List] codestar-notifications:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codestar-notifications:ListTagsForResource";
	/** [List] codestar-notifications:ListTargets */
	static readonly LIST_TARGETS = "codestar-notifications:ListTargets";
	/** [Write] codestar-notifications:Subscribe */
	static readonly SUBSCRIBE = "codestar-notifications:Subscribe";
	/** [Tagging] codestar-notifications:TagResource */
	static readonly TAG_RESOURCE = "codestar-notifications:TagResource";
	/** [Write] codestar-notifications:Unsubscribe */
	static readonly UNSUBSCRIBE = "codestar-notifications:Unsubscribe";
	/** [Tagging] codestar-notifications:UntagResource */
	static readonly UNTAG_RESOURCE = "codestar-notifications:UntagResource";
	/** [Write] codestar-notifications:UpdateNotificationRule */
	static readonly UPDATE_NOTIFICATION_RULE =
		"codestar-notifications:UpdateNotificationRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodestarNotificationsActions.DESCRIBE_NOTIFICATION_RULE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodestarNotificationsActions.CREATE_NOTIFICATION_RULE,
		CodestarNotificationsActions.DELETE_NOTIFICATION_RULE,
		CodestarNotificationsActions.DELETE_TARGET,
		CodestarNotificationsActions.SUBSCRIBE,
		CodestarNotificationsActions.UNSUBSCRIBE,
		CodestarNotificationsActions.UPDATE_NOTIFICATION_RULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodestarNotificationsActions.LIST_EVENT_TYPES,
		CodestarNotificationsActions.LIST_NOTIFICATION_RULES,
		CodestarNotificationsActions.LIST_TAGS_FOR_RESOURCE,
		CodestarNotificationsActions.LIST_TARGETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodestarNotificationsActions.TAG_RESOURCE,
		CodestarNotificationsActions.UNTAG_RESOURCE,
	];
}

const NotificationruleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codestar-notifications:(?<region>[^:]*):(?<account>[^:]*):notificationrule/(?<notificationRuleId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codestar-notifications resources.
 */
export class CodestarNotificationsResources {
	/**
	 * Builds an ARN for the notificationrule resource.
	 */
	static notificationrule(props: {
		/** The NotificationRuleId component of the ARN. */
		readonly notificationRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codestar-notifications:${props.region ?? "*"}:${props.account ?? "*"}:notificationrule/${props.notificationRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notificationrule resource.
	 */
	static isValidNotificationruleArn(arn: string): boolean {
		return NotificationruleArnRegex.test(arn);
	}

	/**
	 * Parses a notificationrule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotificationruleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notificationRuleId: string;
	} {
		const match = NotificationruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notificationrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notificationRuleId: match.groups!.notificationRuleId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codestar-notifications.
 */
export class CodestarNotificationsOperations {
	/** IAM actions required for the CreateNotificationRule API call. */
	static readonly CREATE_NOTIFICATION_RULE: string[] = [
		"codestar-notifications:CreateNotificationRule",
	];
	/** IAM actions required for the DeleteNotificationRule API call. */
	static readonly DELETE_NOTIFICATION_RULE: string[] = [
		"codestar-notifications:DeleteNotificationRule",
	];
	/** IAM actions required for the DeleteTarget API call. */
	static readonly DELETE_TARGET: string[] = [
		"codestar-notifications:DeleteTarget",
	];
	/** IAM actions required for the DescribeNotificationRule API call. */
	static readonly DESCRIBE_NOTIFICATION_RULE: string[] = [
		"codestar-notifications:DescribeNotificationRule",
	];
	/** IAM actions required for the ListEventTypes API call. */
	static readonly LIST_EVENT_TYPES: string[] = [
		"codestar-notifications:ListEventTypes",
	];
	/** IAM actions required for the ListNotificationRules API call. */
	static readonly LIST_NOTIFICATION_RULES: string[] = [
		"codestar-notifications:ListNotificationRules",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codestar-notifications:ListTagsForResource",
	];
	/** IAM actions required for the ListTargets API call. */
	static readonly LIST_TARGETS: string[] = [
		"codestar-notifications:ListTargets",
	];
	/** IAM actions required for the Subscribe API call. */
	static readonly SUBSCRIBE: string[] = ["codestar-notifications:Subscribe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"codestar-notifications:TagResource",
	];
	/** IAM actions required for the Unsubscribe API call. */
	static readonly UNSUBSCRIBE: string[] = [
		"codestar-notifications:Unsubscribe",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"codestar-notifications:UntagResource",
	];
	/** IAM actions required for the UpdateNotificationRule API call. */
	static readonly UPDATE_NOTIFICATION_RULE: string[] = [
		"codestar-notifications:UpdateNotificationRule",
	];
}

/**
 * Condition key constants and builders for codestar-notifications.
 */
export class CodestarNotificationsConditions {
	/** Condition keys applicable to the CreateNotificationRule action. */
	static readonly CREATE_NOTIFICATION_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the DeleteNotificationRule action. */
	static readonly DELETE_NOTIFICATION_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the DeleteTarget action. */
	static readonly DELETE_TARGET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeNotificationRule action. */
	static readonly DESCRIBE_NOTIFICATION_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTargets action. */
	static readonly LIST_TARGETS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Subscribe action. */
	static readonly SUBSCRIBE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Unsubscribe action. */
	static readonly UNSUBSCRIBE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotificationRule action. */
	static readonly UPDATE_NOTIFICATION_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: codestar-notifications:NotificationsForResource (ARN) */
	static readonly NOTIFICATIONS_FOR_RESOURCE =
		"codestar-notifications:NotificationsForResource";

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

	/**
	 * Generates a condition block for `codestar-notifications:NotificationsForResource`.
	 */
	static notificationsForResource(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "codestar-notifications:NotificationsForResource": value },
		};
	}
}
