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
	static readonly CreateNotificationRule =
		"codestar-notifications:CreateNotificationRule";
	/** [Write] codestar-notifications:DeleteNotificationRule */
	static readonly DeleteNotificationRule =
		"codestar-notifications:DeleteNotificationRule";
	/** [Write] codestar-notifications:DeleteTarget */
	static readonly DeleteTarget = "codestar-notifications:DeleteTarget";
	/** [Read] codestar-notifications:DescribeNotificationRule */
	static readonly DescribeNotificationRule =
		"codestar-notifications:DescribeNotificationRule";
	/** [List] codestar-notifications:ListEventTypes */
	static readonly ListEventTypes = "codestar-notifications:ListEventTypes";
	/** [List] codestar-notifications:ListNotificationRules */
	static readonly ListNotificationRules =
		"codestar-notifications:ListNotificationRules";
	/** [List] codestar-notifications:ListTagsForResource */
	static readonly ListTagsForResource =
		"codestar-notifications:ListTagsForResource";
	/** [List] codestar-notifications:ListTargets */
	static readonly ListTargets = "codestar-notifications:ListTargets";
	/** [Write] codestar-notifications:Subscribe */
	static readonly Subscribe = "codestar-notifications:Subscribe";
	/** [Tagging] codestar-notifications:TagResource */
	static readonly TagResource = "codestar-notifications:TagResource";
	/** [Write] codestar-notifications:Unsubscribe */
	static readonly Unsubscribe = "codestar-notifications:Unsubscribe";
	/** [Tagging] codestar-notifications:UntagResource */
	static readonly UntagResource = "codestar-notifications:UntagResource";
	/** [Write] codestar-notifications:UpdateNotificationRule */
	static readonly UpdateNotificationRule =
		"codestar-notifications:UpdateNotificationRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodestarNotificationsActions.DescribeNotificationRule,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodestarNotificationsActions.CreateNotificationRule,
		CodestarNotificationsActions.DeleteNotificationRule,
		CodestarNotificationsActions.DeleteTarget,
		CodestarNotificationsActions.Subscribe,
		CodestarNotificationsActions.Unsubscribe,
		CodestarNotificationsActions.UpdateNotificationRule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodestarNotificationsActions.ListEventTypes,
		CodestarNotificationsActions.ListNotificationRules,
		CodestarNotificationsActions.ListTagsForResource,
		CodestarNotificationsActions.ListTargets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodestarNotificationsActions.TagResource,
		CodestarNotificationsActions.UntagResource,
	];
}

/**
 * Properties for building a notificationrule ARN.
 */
export interface CodestarNotificationsNotificationruleArnProps {
	/** The NotificationRuleId component of the ARN. */
	readonly notificationRuleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notificationrule ARN.
 */
export interface CodestarNotificationsNotificationruleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotificationRuleId component. */
	readonly notificationRuleId: string;
}

const NotificationruleArnRegex =
	/^arn:(?<partition>[^:]+):codestar-notifications:(?<region>[^:]*):(?<account>[^:]*):notificationrule\/(?<notificationRuleId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codestar-notifications resources.
 */
export class CodestarNotificationsResources {
	/**
	 * Builds an ARN for the notificationrule resource.
	 */
	static notificationrule(
		props: CodestarNotificationsNotificationruleArnProps,
	): string {
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
	static parseNotificationruleArn(
		arn: string,
	): CodestarNotificationsNotificationruleArnComponents {
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
	static readonly CreateNotificationRule: string[] = [
		"codestar-notifications:CreateNotificationRule",
	];
	/** IAM actions required for the DeleteNotificationRule API call. */
	static readonly DeleteNotificationRule: string[] = [
		"codestar-notifications:DeleteNotificationRule",
	];
	/** IAM actions required for the DeleteTarget API call. */
	static readonly DeleteTarget: string[] = [
		"codestar-notifications:DeleteTarget",
	];
	/** IAM actions required for the DescribeNotificationRule API call. */
	static readonly DescribeNotificationRule: string[] = [
		"codestar-notifications:DescribeNotificationRule",
	];
	/** IAM actions required for the ListEventTypes API call. */
	static readonly ListEventTypes: string[] = [
		"codestar-notifications:ListEventTypes",
	];
	/** IAM actions required for the ListNotificationRules API call. */
	static readonly ListNotificationRules: string[] = [
		"codestar-notifications:ListNotificationRules",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codestar-notifications:ListTagsForResource",
	];
	/** IAM actions required for the ListTargets API call. */
	static readonly ListTargets: string[] = [
		"codestar-notifications:ListTargets",
	];
	/** IAM actions required for the Subscribe API call. */
	static readonly Subscribe: string[] = ["codestar-notifications:Subscribe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"codestar-notifications:TagResource",
	];
	/** IAM actions required for the Unsubscribe API call. */
	static readonly Unsubscribe: string[] = [
		"codestar-notifications:Unsubscribe",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"codestar-notifications:UntagResource",
	];
	/** IAM actions required for the UpdateNotificationRule API call. */
	static readonly UpdateNotificationRule: string[] = [
		"codestar-notifications:UpdateNotificationRule",
	];
}

/**
 * Condition key constants and builders for codestar-notifications.
 */
export class CodestarNotificationsConditions {
	/** Condition keys applicable to the CreateNotificationRule action. */
	static readonly CreateNotificationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the DeleteNotificationRule action. */
	static readonly DeleteNotificationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the DeleteTarget action. */
	static readonly DeleteTargetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeNotificationRule action. */
	static readonly DescribeNotificationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTargets action. */
	static readonly ListTargetsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Subscribe action. */
	static readonly SubscribeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Unsubscribe action. */
	static readonly UnsubscribeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotificationRule action. */
	static readonly UpdateNotificationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"codestar-notifications:NotificationsForResource",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
