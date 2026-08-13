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
	static readonly AssociateAccounts = "aco-automation:AssociateAccounts";
	/** [Write] aco-automation:CreateAutomationRule */
	static readonly CreateAutomationRule = "aco-automation:CreateAutomationRule";
	/** [Write] aco-automation:DeleteAutomationRule */
	static readonly DeleteAutomationRule = "aco-automation:DeleteAutomationRule";
	/** [Write] aco-automation:DisassociateAccounts */
	static readonly DisassociateAccounts = "aco-automation:DisassociateAccounts";
	/** [Read] aco-automation:GetAutomationEvent */
	static readonly actionGetAutomationEvent =
		"aco-automation:GetAutomationEvent";
	/** [Read] aco-automation:GetAutomationRule */
	static readonly actionGetAutomationRule = "aco-automation:GetAutomationRule";
	/** [Read] aco-automation:GetEnrollmentConfiguration */
	static readonly actionGetEnrollmentConfiguration =
		"aco-automation:GetEnrollmentConfiguration";
	/** [List] aco-automation:ListAccounts */
	static readonly ListAccounts = "aco-automation:ListAccounts";
	/** [List] aco-automation:ListAutomationEventSteps */
	static readonly ListAutomationEventSteps =
		"aco-automation:ListAutomationEventSteps";
	/** [List] aco-automation:ListAutomationEventSummaries */
	static readonly ListAutomationEventSummaries =
		"aco-automation:ListAutomationEventSummaries";
	/** [List] aco-automation:ListAutomationEvents */
	static readonly ListAutomationEvents = "aco-automation:ListAutomationEvents";
	/** [List] aco-automation:ListAutomationRulePreview */
	static readonly ListAutomationRulePreview =
		"aco-automation:ListAutomationRulePreview";
	/** [List] aco-automation:ListAutomationRulePreviewSummaries */
	static readonly ListAutomationRulePreviewSummaries =
		"aco-automation:ListAutomationRulePreviewSummaries";
	/** [List] aco-automation:ListAutomationRules */
	static readonly ListAutomationRules = "aco-automation:ListAutomationRules";
	/** [List] aco-automation:ListRecommendedActionSummaries */
	static readonly ListRecommendedActionSummaries =
		"aco-automation:ListRecommendedActionSummaries";
	/** [List] aco-automation:ListRecommendedActions */
	static readonly ListRecommendedActions =
		"aco-automation:ListRecommendedActions";
	/** [List] aco-automation:ListTagsForResource */
	static readonly ListTagsForResource = "aco-automation:ListTagsForResource";
	/** [Write] aco-automation:RollbackAutomationEvent */
	static readonly RollbackAutomationEvent =
		"aco-automation:RollbackAutomationEvent";
	/** [Write] aco-automation:StartAutomationEvent */
	static readonly StartAutomationEvent = "aco-automation:StartAutomationEvent";
	/** [Tagging] aco-automation:TagResource */
	static readonly TagResource = "aco-automation:TagResource";
	/** [Tagging] aco-automation:UntagResource */
	static readonly UntagResource = "aco-automation:UntagResource";
	/** [Write] aco-automation:UpdateAutomationRule */
	static readonly UpdateAutomationRule = "aco-automation:UpdateAutomationRule";
	/** [Write] aco-automation:UpdateEnrollmentConfiguration */
	static readonly UpdateEnrollmentConfiguration =
		"aco-automation:UpdateEnrollmentConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AcoAutomationActions.actionGetAutomationEvent,
		AcoAutomationActions.actionGetAutomationRule,
		AcoAutomationActions.actionGetEnrollmentConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AcoAutomationActions.AssociateAccounts,
		AcoAutomationActions.CreateAutomationRule,
		AcoAutomationActions.DeleteAutomationRule,
		AcoAutomationActions.DisassociateAccounts,
		AcoAutomationActions.RollbackAutomationEvent,
		AcoAutomationActions.StartAutomationEvent,
		AcoAutomationActions.UpdateAutomationRule,
		AcoAutomationActions.UpdateEnrollmentConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AcoAutomationActions.ListAccounts,
		AcoAutomationActions.ListAutomationEventSteps,
		AcoAutomationActions.ListAutomationEventSummaries,
		AcoAutomationActions.ListAutomationEvents,
		AcoAutomationActions.ListAutomationRulePreview,
		AcoAutomationActions.ListAutomationRulePreviewSummaries,
		AcoAutomationActions.ListAutomationRules,
		AcoAutomationActions.ListRecommendedActionSummaries,
		AcoAutomationActions.ListRecommendedActions,
		AcoAutomationActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AcoAutomationActions.TagResource,
		AcoAutomationActions.UntagResource,
	];
}

/**
 * Properties for building a AutomationRule ARN.
 */
export interface AcoAutomationAutomationRuleArnProps {
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AutomationRule ARN.
 */
export interface AcoAutomationAutomationRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

const AutomationRuleArnRegex =
	/^arn:(?<partition>[^:]+):compute-optimizer::(?<account>[^:]*):automation-rule\/(?<ruleId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aco-automation resources.
 */
export class AcoAutomationResources {
	/**
	 * Builds an ARN for the AutomationRule resource.
	 */
	static automationRule(props: AcoAutomationAutomationRuleArnProps): string {
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
	static parseAutomationRuleArn(
		arn: string,
	): AcoAutomationAutomationRuleArnComponents {
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
	static readonly AssociateAccounts: string[] = [
		"aco-automation:AssociateAccounts",
	];
	/** IAM actions required for the CreateAutomationRule API call. */
	static readonly CreateAutomationRule: string[] = [
		"aco-automation:CreateAutomationRule",
		"aco-automation:TagResource",
	];
	/** IAM actions required for the DeleteAutomationRule API call. */
	static readonly DeleteAutomationRule: string[] = [
		"aco-automation:DeleteAutomationRule",
	];
	/** IAM actions required for the DisassociateAccounts API call. */
	static readonly DisassociateAccounts: string[] = [
		"aco-automation:DisassociateAccounts",
	];
	/** IAM actions required for the GetAutomationEvent API call. */
	static readonly opGetAutomationEvent: string[] = [
		"aco-automation:GetAutomationEvent",
	];
	/** IAM actions required for the GetAutomationRule API call. */
	static readonly opGetAutomationRule: string[] = [
		"aco-automation:GetAutomationRule",
	];
	/** IAM actions required for the GetEnrollmentConfiguration API call. */
	static readonly opGetEnrollmentConfiguration: string[] = [
		"aco-automation:GetEnrollmentConfiguration",
	];
	/** IAM actions required for the ListAccounts API call. */
	static readonly ListAccounts: string[] = ["aco-automation:ListAccounts"];
	/** IAM actions required for the ListAutomationEventSteps API call. */
	static readonly ListAutomationEventSteps: string[] = [
		"aco-automation:ListAutomationEventSteps",
	];
	/** IAM actions required for the ListAutomationEventSummaries API call. */
	static readonly ListAutomationEventSummaries: string[] = [
		"aco-automation:ListAutomationEventSummaries",
	];
	/** IAM actions required for the ListAutomationEvents API call. */
	static readonly ListAutomationEvents: string[] = [
		"aco-automation:ListAutomationEvents",
	];
	/** IAM actions required for the ListAutomationRulePreview API call. */
	static readonly ListAutomationRulePreview: string[] = [
		"ec2:DescribeVolumes",
		"aco-automation:ListAutomationRulePreview",
	];
	/** IAM actions required for the ListAutomationRulePreviewSummaries API call. */
	static readonly ListAutomationRulePreviewSummaries: string[] = [
		"aco-automation:ListAutomationRulePreviewSummaries",
	];
	/** IAM actions required for the ListAutomationRules API call. */
	static readonly ListAutomationRules: string[] = [
		"aco-automation:ListAutomationRules",
	];
	/** IAM actions required for the ListRecommendedActionSummaries API call. */
	static readonly ListRecommendedActionSummaries: string[] = [
		"aco-automation:ListRecommendedActionSummaries",
	];
	/** IAM actions required for the ListRecommendedActions API call. */
	static readonly ListRecommendedActions: string[] = [
		"ec2:DescribeVolumes",
		"aco-automation:ListRecommendedActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"aco-automation:ListTagsForResource",
	];
	/** IAM actions required for the RollbackAutomationEvent API call. */
	static readonly RollbackAutomationEvent: string[] = [
		"aco-automation:RollbackAutomationEvent",
	];
	/** IAM actions required for the StartAutomationEvent API call. */
	static readonly StartAutomationEvent: string[] = [
		"aco-automation:StartAutomationEvent",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["aco-automation:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aco-automation:UntagResource"];
	/** IAM actions required for the UpdateAutomationRule API call. */
	static readonly UpdateAutomationRule: string[] = [
		"aco-automation:UpdateAutomationRule",
	];
	/** IAM actions required for the UpdateEnrollmentConfiguration API call. */
	static readonly UpdateEnrollmentConfiguration: string[] = [
		"aco-automation:UpdateEnrollmentConfiguration",
	];
}

/**
 * Condition key constants and builders for aco-automation.
 */
export class AcoAutomationConditions {
	/** Condition keys applicable to the CreateAutomationRule action. */
	static readonly CreateAutomationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
