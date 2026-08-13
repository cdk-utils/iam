// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/arc-region-switch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the arc-region-switch service.
 */
export class ArcRegionSwitchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "arc-region-switch";

	/** [Write] arc-region-switch:ApprovePlanExecutionStep */
	static readonly APPROVE_PLAN_EXECUTION_STEP =
		"arc-region-switch:ApprovePlanExecutionStep";
	/** [Write] arc-region-switch:CancelPlanExecution */
	static readonly CANCEL_PLAN_EXECUTION =
		"arc-region-switch:CancelPlanExecution";
	/** [Write] arc-region-switch:CreatePlan */
	static readonly CREATE_PLAN = "arc-region-switch:CreatePlan";
	/** [Write] arc-region-switch:DeletePlan */
	static readonly DELETE_PLAN = "arc-region-switch:DeletePlan";
	/** [PermissionManagement] arc-region-switch:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"arc-region-switch:DeleteResourcePolicy";
	/** [Read] arc-region-switch:GetPlan */
	static readonly GET_PLAN = "arc-region-switch:GetPlan";
	/** [Read] arc-region-switch:GetPlanEvaluationStatus */
	static readonly GET_PLAN_EVALUATION_STATUS =
		"arc-region-switch:GetPlanEvaluationStatus";
	/** [Read] arc-region-switch:GetPlanExecution */
	static readonly GET_PLAN_EXECUTION = "arc-region-switch:GetPlanExecution";
	/** [Read] arc-region-switch:GetPlanInRegion */
	static readonly GET_PLAN_IN_REGION = "arc-region-switch:GetPlanInRegion";
	/** [PermissionManagement] arc-region-switch:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "arc-region-switch:GetResourcePolicy";
	/** [List] arc-region-switch:ListPlanExecutionEvents */
	static readonly LIST_PLAN_EXECUTION_EVENTS =
		"arc-region-switch:ListPlanExecutionEvents";
	/** [List] arc-region-switch:ListPlanExecutions */
	static readonly LIST_PLAN_EXECUTIONS = "arc-region-switch:ListPlanExecutions";
	/** [List] arc-region-switch:ListPlans */
	static readonly LIST_PLANS = "arc-region-switch:ListPlans";
	/** [List] arc-region-switch:ListPlansInRegion */
	static readonly LIST_PLANS_IN_REGION = "arc-region-switch:ListPlansInRegion";
	/** [List] arc-region-switch:ListRoute53HealthChecks */
	static readonly LIST_ROUTE53_HEALTH_CHECKS =
		"arc-region-switch:ListRoute53HealthChecks";
	/** [List] arc-region-switch:ListRoute53HealthChecksInRegion */
	static readonly LIST_ROUTE53_HEALTH_CHECKS_IN_REGION =
		"arc-region-switch:ListRoute53HealthChecksInRegion";
	/** [Read] arc-region-switch:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"arc-region-switch:ListTagsForResource";
	/** [PermissionManagement] arc-region-switch:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "arc-region-switch:PutResourcePolicy";
	/** [Write] arc-region-switch:StartPlanExecution */
	static readonly START_PLAN_EXECUTION = "arc-region-switch:StartPlanExecution";
	/** [Tagging] arc-region-switch:TagResource */
	static readonly TAG_RESOURCE = "arc-region-switch:TagResource";
	/** [Tagging] arc-region-switch:UntagResource */
	static readonly UNTAG_RESOURCE = "arc-region-switch:UntagResource";
	/** [Write] arc-region-switch:UpdatePlan */
	static readonly UPDATE_PLAN = "arc-region-switch:UpdatePlan";
	/** [Write] arc-region-switch:UpdatePlanExecution */
	static readonly UPDATE_PLAN_EXECUTION =
		"arc-region-switch:UpdatePlanExecution";
	/** [Write] arc-region-switch:UpdatePlanExecutionStep */
	static readonly UPDATE_PLAN_EXECUTION_STEP =
		"arc-region-switch:UpdatePlanExecutionStep";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ArcRegionSwitchActions.GET_PLAN,
		ArcRegionSwitchActions.GET_PLAN_EVALUATION_STATUS,
		ArcRegionSwitchActions.GET_PLAN_EXECUTION,
		ArcRegionSwitchActions.GET_PLAN_IN_REGION,
		ArcRegionSwitchActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ArcRegionSwitchActions.APPROVE_PLAN_EXECUTION_STEP,
		ArcRegionSwitchActions.CANCEL_PLAN_EXECUTION,
		ArcRegionSwitchActions.CREATE_PLAN,
		ArcRegionSwitchActions.DELETE_PLAN,
		ArcRegionSwitchActions.START_PLAN_EXECUTION,
		ArcRegionSwitchActions.UPDATE_PLAN,
		ArcRegionSwitchActions.UPDATE_PLAN_EXECUTION,
		ArcRegionSwitchActions.UPDATE_PLAN_EXECUTION_STEP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ArcRegionSwitchActions.LIST_PLAN_EXECUTION_EVENTS,
		ArcRegionSwitchActions.LIST_PLAN_EXECUTIONS,
		ArcRegionSwitchActions.LIST_PLANS,
		ArcRegionSwitchActions.LIST_PLANS_IN_REGION,
		ArcRegionSwitchActions.LIST_ROUTE53_HEALTH_CHECKS,
		ArcRegionSwitchActions.LIST_ROUTE53_HEALTH_CHECKS_IN_REGION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ArcRegionSwitchActions.DELETE_RESOURCE_POLICY,
		ArcRegionSwitchActions.GET_RESOURCE_POLICY,
		ArcRegionSwitchActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ArcRegionSwitchActions.TAG_RESOURCE,
		ArcRegionSwitchActions.UNTAG_RESOURCE,
	];
}

const PlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):arc-region-switch::(?<account>[^:]*):plan/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for arc-region-switch resources.
 */
export class ArcRegionSwitchResources {
	/**
	 * Builds an ARN for the plan resource.
	 */
	static plan(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:arc-region-switch::${props.account ?? "*"}:plan/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the plan resource.
	 */
	static isValidPlanArn(arn: string): boolean {
		return PlanArnRegex.test(arn);
	}

	/**
	 * Parses a plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlanArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = PlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for arc-region-switch.
 */
export class ArcRegionSwitchOperations {
	/** IAM actions required for the ApprovePlanExecutionStep API call. */
	static readonly APPROVE_PLAN_EXECUTION_STEP: string[] = [
		"arc-region-switch:ApprovePlanExecutionStep",
	];
	/** IAM actions required for the CancelPlanExecution API call. */
	static readonly CANCEL_PLAN_EXECUTION: string[] = [
		"arc-region-switch:CancelPlanExecution",
	];
	/** IAM actions required for the CreatePlan API call. */
	static readonly CREATE_PLAN: string[] = [
		"arc-region-switch:CreatePlan",
		"arc-region-switch:GetPlan",
		"iam:PassRole",
		"arc-region-switch:TagResource",
	];
	/** IAM actions required for the DeletePlan API call. */
	static readonly DELETE_PLAN: string[] = ["arc-region-switch:DeletePlan"];
	/** IAM actions required for the GetPlan API call. */
	static readonly GET_PLAN: string[] = ["arc-region-switch:GetPlan"];
	/** IAM actions required for the GetPlanEvaluationStatus API call. */
	static readonly GET_PLAN_EVALUATION_STATUS: string[] = [
		"arc-region-switch:GetPlanEvaluationStatus",
	];
	/** IAM actions required for the GetPlanExecution API call. */
	static readonly GET_PLAN_EXECUTION: string[] = [
		"arc-region-switch:GetPlanExecution",
	];
	/** IAM actions required for the GetPlanInRegion API call. */
	static readonly GET_PLAN_IN_REGION: string[] = [
		"arc-region-switch:GetPlanInRegion",
	];
	/** IAM actions required for the ListPlanExecutionEvents API call. */
	static readonly LIST_PLAN_EXECUTION_EVENTS: string[] = [
		"arc-region-switch:ListPlanExecutionEvents",
	];
	/** IAM actions required for the ListPlanExecutions API call. */
	static readonly LIST_PLAN_EXECUTIONS: string[] = [
		"arc-region-switch:ListPlanExecutions",
	];
	/** IAM actions required for the ListPlans API call. */
	static readonly LIST_PLANS: string[] = ["arc-region-switch:ListPlans"];
	/** IAM actions required for the ListPlansInRegion API call. */
	static readonly LIST_PLANS_IN_REGION: string[] = [
		"arc-region-switch:ListPlansInRegion",
	];
	/** IAM actions required for the ListRoute53HealthChecks API call. */
	static readonly LIST_ROUTE53_HEALTH_CHECKS: string[] = [
		"arc-region-switch:ListRoute53HealthChecks",
	];
	/** IAM actions required for the ListRoute53HealthChecksInRegion API call. */
	static readonly LIST_ROUTE53_HEALTH_CHECKS_IN_REGION: string[] = [
		"arc-region-switch:ListRoute53HealthChecksInRegion",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"arc-region-switch:ListTagsForResource",
	];
	/** IAM actions required for the StartPlanExecution API call. */
	static readonly START_PLAN_EXECUTION: string[] = [
		"arc-region-switch:StartPlanExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["arc-region-switch:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"arc-region-switch:UntagResource",
	];
	/** IAM actions required for the UpdatePlan API call. */
	static readonly UPDATE_PLAN: string[] = [
		"arc-region-switch:GetPlan",
		"iam:PassRole",
		"arc-region-switch:UpdatePlan",
	];
	/** IAM actions required for the UpdatePlanExecution API call. */
	static readonly UPDATE_PLAN_EXECUTION: string[] = [
		"arc-region-switch:UpdatePlanExecution",
	];
	/** IAM actions required for the UpdatePlanExecutionStep API call. */
	static readonly UPDATE_PLAN_EXECUTION_STEP: string[] = [
		"arc-region-switch:UpdatePlanExecutionStep",
	];
}

/**
 * Condition key constants and builders for arc-region-switch.
 */
export class ArcRegionSwitchConditions {
	/** Condition keys applicable to the CreatePlan action. */
	static readonly CREATE_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
