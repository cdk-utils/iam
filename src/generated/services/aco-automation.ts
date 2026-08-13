// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aco-automation.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aco-automation service.
 */
export class AcoAutomationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aco-automation";

	/** [Write] aco-automation:AssociateAccounts */
	static readonly ASSOCIATE_ACCOUNTS = "aco-automation:AssociateAccounts";
	/** [Write] aco-automation:CreateAutomationRule */
	static readonly CREATE_AUTOMATION_RULE =
		"aco-automation:CreateAutomationRule";
	/** [Write] aco-automation:DeleteAutomationRule */
	static readonly DELETE_AUTOMATION_RULE =
		"aco-automation:DeleteAutomationRule";
	/** [Write] aco-automation:DisassociateAccounts */
	static readonly DISASSOCIATE_ACCOUNTS = "aco-automation:DisassociateAccounts";
	/** [Read] aco-automation:GetAutomationEvent */
	static readonly GET_AUTOMATION_EVENT = "aco-automation:GetAutomationEvent";
	/** [Read] aco-automation:GetAutomationRule */
	static readonly GET_AUTOMATION_RULE = "aco-automation:GetAutomationRule";
	/** [Read] aco-automation:GetEnrollmentConfiguration */
	static readonly GET_ENROLLMENT_CONFIGURATION =
		"aco-automation:GetEnrollmentConfiguration";
	/** [List] aco-automation:ListAccounts */
	static readonly LIST_ACCOUNTS = "aco-automation:ListAccounts";
	/** [List] aco-automation:ListAutomationEventSteps */
	static readonly LIST_AUTOMATION_EVENT_STEPS =
		"aco-automation:ListAutomationEventSteps";
	/** [List] aco-automation:ListAutomationEventSummaries */
	static readonly LIST_AUTOMATION_EVENT_SUMMARIES =
		"aco-automation:ListAutomationEventSummaries";
	/** [List] aco-automation:ListAutomationEvents */
	static readonly LIST_AUTOMATION_EVENTS =
		"aco-automation:ListAutomationEvents";
	/** [List] aco-automation:ListAutomationRulePreview */
	static readonly LIST_AUTOMATION_RULE_PREVIEW =
		"aco-automation:ListAutomationRulePreview";
	/** [List] aco-automation:ListAutomationRulePreviewSummaries */
	static readonly LIST_AUTOMATION_RULE_PREVIEW_SUMMARIES =
		"aco-automation:ListAutomationRulePreviewSummaries";
	/** [List] aco-automation:ListAutomationRules */
	static readonly LIST_AUTOMATION_RULES = "aco-automation:ListAutomationRules";
	/** [List] aco-automation:ListRecommendedActionSummaries */
	static readonly LIST_RECOMMENDED_ACTION_SUMMARIES =
		"aco-automation:ListRecommendedActionSummaries";
	/** [List] aco-automation:ListRecommendedActions */
	static readonly LIST_RECOMMENDED_ACTIONS =
		"aco-automation:ListRecommendedActions";
	/** [List] aco-automation:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "aco-automation:ListTagsForResource";
	/** [Write] aco-automation:RollbackAutomationEvent */
	static readonly ROLLBACK_AUTOMATION_EVENT =
		"aco-automation:RollbackAutomationEvent";
	/** [Write] aco-automation:StartAutomationEvent */
	static readonly START_AUTOMATION_EVENT =
		"aco-automation:StartAutomationEvent";
	/** [Tagging] aco-automation:TagResource */
	static readonly TAG_RESOURCE = "aco-automation:TagResource";
	/** [Tagging] aco-automation:UntagResource */
	static readonly UNTAG_RESOURCE = "aco-automation:UntagResource";
	/** [Write] aco-automation:UpdateAutomationRule */
	static readonly UPDATE_AUTOMATION_RULE =
		"aco-automation:UpdateAutomationRule";
	/** [Write] aco-automation:UpdateEnrollmentConfiguration */
	static readonly UPDATE_ENROLLMENT_CONFIGURATION =
		"aco-automation:UpdateEnrollmentConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AcoAutomationActions.GET_AUTOMATION_EVENT,
		AcoAutomationActions.GET_AUTOMATION_RULE,
		AcoAutomationActions.GET_ENROLLMENT_CONFIGURATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AcoAutomationActions.ASSOCIATE_ACCOUNTS,
		AcoAutomationActions.CREATE_AUTOMATION_RULE,
		AcoAutomationActions.DELETE_AUTOMATION_RULE,
		AcoAutomationActions.DISASSOCIATE_ACCOUNTS,
		AcoAutomationActions.ROLLBACK_AUTOMATION_EVENT,
		AcoAutomationActions.START_AUTOMATION_EVENT,
		AcoAutomationActions.UPDATE_AUTOMATION_RULE,
		AcoAutomationActions.UPDATE_ENROLLMENT_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AcoAutomationActions.LIST_ACCOUNTS,
		AcoAutomationActions.LIST_AUTOMATION_EVENT_STEPS,
		AcoAutomationActions.LIST_AUTOMATION_EVENT_SUMMARIES,
		AcoAutomationActions.LIST_AUTOMATION_EVENTS,
		AcoAutomationActions.LIST_AUTOMATION_RULE_PREVIEW,
		AcoAutomationActions.LIST_AUTOMATION_RULE_PREVIEW_SUMMARIES,
		AcoAutomationActions.LIST_AUTOMATION_RULES,
		AcoAutomationActions.LIST_RECOMMENDED_ACTION_SUMMARIES,
		AcoAutomationActions.LIST_RECOMMENDED_ACTIONS,
		AcoAutomationActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AcoAutomationActions.TAG_RESOURCE,
		AcoAutomationActions.UNTAG_RESOURCE,
	];
}

const AutomationRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):compute-optimizer::(?<account>[^:]*):automation-rule/(?<ruleId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for aco-automation resources.
 */
export class AcoAutomationResources {
	/**
	 * Builds an ARN for the AutomationRule resource.
	 */
	static automationRule(props: {
		/** The RuleId component of the ARN. */
		readonly ruleId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:compute-optimizer::${props.account ?? "*"}:automation-rule/${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AutomationRule resource.
	 */
	static isValidAutomationRuleArn(arn: string): boolean {
		return AutomationRuleArnRegex.test(arn);
	}

	/**
	 * Parses a AutomationRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationRuleArn(arn: string): {
		partition: string;
		account: string;
		ruleId: string;
	} {
		const match = AutomationRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AutomationRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			ruleId: match.groups!.ruleId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aco-automation.
 */
export class AcoAutomationOperations {
	/** IAM actions required for the AssociateAccounts API call. */
	static readonly ASSOCIATE_ACCOUNTS: string[] = [
		"aco-automation:AssociateAccounts",
	];
	/** IAM actions required for the CreateAutomationRule API call. */
	static readonly CREATE_AUTOMATION_RULE: string[] = [
		"aco-automation:CreateAutomationRule",
		"aco-automation:TagResource",
	];
	/** IAM actions required for the DeleteAutomationRule API call. */
	static readonly DELETE_AUTOMATION_RULE: string[] = [
		"aco-automation:DeleteAutomationRule",
	];
	/** IAM actions required for the DisassociateAccounts API call. */
	static readonly DISASSOCIATE_ACCOUNTS: string[] = [
		"aco-automation:DisassociateAccounts",
	];
	/** IAM actions required for the GetAutomationEvent API call. */
	static readonly GET_AUTOMATION_EVENT: string[] = [
		"aco-automation:GetAutomationEvent",
	];
	/** IAM actions required for the GetAutomationRule API call. */
	static readonly GET_AUTOMATION_RULE: string[] = [
		"aco-automation:GetAutomationRule",
	];
	/** IAM actions required for the GetEnrollmentConfiguration API call. */
	static readonly GET_ENROLLMENT_CONFIGURATION: string[] = [
		"aco-automation:GetEnrollmentConfiguration",
	];
	/** IAM actions required for the ListAccounts API call. */
	static readonly LIST_ACCOUNTS: string[] = ["aco-automation:ListAccounts"];
	/** IAM actions required for the ListAutomationEventSteps API call. */
	static readonly LIST_AUTOMATION_EVENT_STEPS: string[] = [
		"aco-automation:ListAutomationEventSteps",
	];
	/** IAM actions required for the ListAutomationEventSummaries API call. */
	static readonly LIST_AUTOMATION_EVENT_SUMMARIES: string[] = [
		"aco-automation:ListAutomationEventSummaries",
	];
	/** IAM actions required for the ListAutomationEvents API call. */
	static readonly LIST_AUTOMATION_EVENTS: string[] = [
		"aco-automation:ListAutomationEvents",
	];
	/** IAM actions required for the ListAutomationRulePreview API call. */
	static readonly LIST_AUTOMATION_RULE_PREVIEW: string[] = [
		"ec2:DescribeVolumes",
		"aco-automation:ListAutomationRulePreview",
	];
	/** IAM actions required for the ListAutomationRulePreviewSummaries API call. */
	static readonly LIST_AUTOMATION_RULE_PREVIEW_SUMMARIES: string[] = [
		"aco-automation:ListAutomationRulePreviewSummaries",
	];
	/** IAM actions required for the ListAutomationRules API call. */
	static readonly LIST_AUTOMATION_RULES: string[] = [
		"aco-automation:ListAutomationRules",
	];
	/** IAM actions required for the ListRecommendedActionSummaries API call. */
	static readonly LIST_RECOMMENDED_ACTION_SUMMARIES: string[] = [
		"aco-automation:ListRecommendedActionSummaries",
	];
	/** IAM actions required for the ListRecommendedActions API call. */
	static readonly LIST_RECOMMENDED_ACTIONS: string[] = [
		"ec2:DescribeVolumes",
		"aco-automation:ListRecommendedActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aco-automation:ListTagsForResource",
	];
	/** IAM actions required for the RollbackAutomationEvent API call. */
	static readonly ROLLBACK_AUTOMATION_EVENT: string[] = [
		"aco-automation:RollbackAutomationEvent",
	];
	/** IAM actions required for the StartAutomationEvent API call. */
	static readonly START_AUTOMATION_EVENT: string[] = [
		"aco-automation:StartAutomationEvent",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aco-automation:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aco-automation:UntagResource"];
	/** IAM actions required for the UpdateAutomationRule API call. */
	static readonly UPDATE_AUTOMATION_RULE: string[] = [
		"aco-automation:UpdateAutomationRule",
	];
	/** IAM actions required for the UpdateEnrollmentConfiguration API call. */
	static readonly UPDATE_ENROLLMENT_CONFIGURATION: string[] = [
		"aco-automation:UpdateEnrollmentConfiguration",
	];
}

/**
 * Condition key constants and builders for aco-automation.
 */
export class AcoAutomationConditions {
	/** Condition keys applicable to the CreateAutomationRule action. */
	static readonly CREATE_AUTOMATION_RULE_CONDITION_KEYS: string[] = [
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
