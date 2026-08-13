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
	static readonly ApprovePlanExecutionStep =
		"arc-region-switch:ApprovePlanExecutionStep";
	/** [Write] arc-region-switch:CancelPlanExecution */
	static readonly CancelPlanExecution = "arc-region-switch:CancelPlanExecution";
	/** [Write] arc-region-switch:CreatePlan */
	static readonly CreatePlan = "arc-region-switch:CreatePlan";
	/** [Write] arc-region-switch:DeletePlan */
	static readonly DeletePlan = "arc-region-switch:DeletePlan";
	/** [PermissionManagement] arc-region-switch:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"arc-region-switch:DeleteResourcePolicy";
	/** [Read] arc-region-switch:GetPlan */
	static readonly actionGetPlan = "arc-region-switch:GetPlan";
	/** [Read] arc-region-switch:GetPlanEvaluationStatus */
	static readonly actionGetPlanEvaluationStatus =
		"arc-region-switch:GetPlanEvaluationStatus";
	/** [Read] arc-region-switch:GetPlanExecution */
	static readonly actionGetPlanExecution = "arc-region-switch:GetPlanExecution";
	/** [Read] arc-region-switch:GetPlanInRegion */
	static readonly actionGetPlanInRegion = "arc-region-switch:GetPlanInRegion";
	/** [PermissionManagement] arc-region-switch:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"arc-region-switch:GetResourcePolicy";
	/** [List] arc-region-switch:ListPlanExecutionEvents */
	static readonly ListPlanExecutionEvents =
		"arc-region-switch:ListPlanExecutionEvents";
	/** [List] arc-region-switch:ListPlanExecutions */
	static readonly ListPlanExecutions = "arc-region-switch:ListPlanExecutions";
	/** [List] arc-region-switch:ListPlans */
	static readonly ListPlans = "arc-region-switch:ListPlans";
	/** [List] arc-region-switch:ListPlansInRegion */
	static readonly ListPlansInRegion = "arc-region-switch:ListPlansInRegion";
	/** [List] arc-region-switch:ListRoute53HealthChecks */
	static readonly ListRoute53HealthChecks =
		"arc-region-switch:ListRoute53HealthChecks";
	/** [List] arc-region-switch:ListRoute53HealthChecksInRegion */
	static readonly ListRoute53HealthChecksInRegion =
		"arc-region-switch:ListRoute53HealthChecksInRegion";
	/** [Read] arc-region-switch:ListTagsForResource */
	static readonly ListTagsForResource = "arc-region-switch:ListTagsForResource";
	/** [PermissionManagement] arc-region-switch:PutResourcePolicy */
	static readonly PutResourcePolicy = "arc-region-switch:PutResourcePolicy";
	/** [Write] arc-region-switch:StartPlanExecution */
	static readonly StartPlanExecution = "arc-region-switch:StartPlanExecution";
	/** [Tagging] arc-region-switch:TagResource */
	static readonly TagResource = "arc-region-switch:TagResource";
	/** [Tagging] arc-region-switch:UntagResource */
	static readonly UntagResource = "arc-region-switch:UntagResource";
	/** [Write] arc-region-switch:UpdatePlan */
	static readonly UpdatePlan = "arc-region-switch:UpdatePlan";
	/** [Write] arc-region-switch:UpdatePlanExecution */
	static readonly UpdatePlanExecution = "arc-region-switch:UpdatePlanExecution";
	/** [Write] arc-region-switch:UpdatePlanExecutionStep */
	static readonly UpdatePlanExecutionStep =
		"arc-region-switch:UpdatePlanExecutionStep";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ArcRegionSwitchActions.actionGetPlan,
		ArcRegionSwitchActions.actionGetPlanEvaluationStatus,
		ArcRegionSwitchActions.actionGetPlanExecution,
		ArcRegionSwitchActions.actionGetPlanInRegion,
		ArcRegionSwitchActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ArcRegionSwitchActions.ApprovePlanExecutionStep,
		ArcRegionSwitchActions.CancelPlanExecution,
		ArcRegionSwitchActions.CreatePlan,
		ArcRegionSwitchActions.DeletePlan,
		ArcRegionSwitchActions.StartPlanExecution,
		ArcRegionSwitchActions.UpdatePlan,
		ArcRegionSwitchActions.UpdatePlanExecution,
		ArcRegionSwitchActions.UpdatePlanExecutionStep,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ArcRegionSwitchActions.ListPlanExecutionEvents,
		ArcRegionSwitchActions.ListPlanExecutions,
		ArcRegionSwitchActions.ListPlans,
		ArcRegionSwitchActions.ListPlansInRegion,
		ArcRegionSwitchActions.ListRoute53HealthChecks,
		ArcRegionSwitchActions.ListRoute53HealthChecksInRegion,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ArcRegionSwitchActions.DeleteResourcePolicy,
		ArcRegionSwitchActions.actionGetResourcePolicy,
		ArcRegionSwitchActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ArcRegionSwitchActions.TagResource,
		ArcRegionSwitchActions.UntagResource,
	];
}

/**
 * Properties for building a plan ARN.
 */
export interface ArcRegionSwitchPlanArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a plan ARN.
 */
export interface ArcRegionSwitchPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const PlanArnRegex =
	/^arn:(?<partition>[^:]+):arc-region-switch::(?<account>[^:]*):plan\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for arc-region-switch resources.
 */
export class ArcRegionSwitchResources {
	/**
	 * Builds an ARN for the plan resource.
	 */
	static plan(props: ArcRegionSwitchPlanArnProps): string {
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
	static parsePlanArn(arn: string): ArcRegionSwitchPlanArnComponents {
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
	static readonly ApprovePlanExecutionStep: string[] = [
		"arc-region-switch:ApprovePlanExecutionStep",
	];
	/** IAM actions required for the CancelPlanExecution API call. */
	static readonly CancelPlanExecution: string[] = [
		"arc-region-switch:CancelPlanExecution",
	];
	/** IAM actions required for the CreatePlan API call. */
	static readonly CreatePlan: string[] = [
		"arc-region-switch:CreatePlan",
		"arc-region-switch:GetPlan",
		"iam:PassRole",
		"arc-region-switch:TagResource",
	];
	/** IAM actions required for the DeletePlan API call. */
	static readonly DeletePlan: string[] = ["arc-region-switch:DeletePlan"];
	/** IAM actions required for the GetPlan API call. */
	static readonly opGetPlan: string[] = ["arc-region-switch:GetPlan"];
	/** IAM actions required for the GetPlanEvaluationStatus API call. */
	static readonly opGetPlanEvaluationStatus: string[] = [
		"arc-region-switch:GetPlanEvaluationStatus",
	];
	/** IAM actions required for the GetPlanExecution API call. */
	static readonly opGetPlanExecution: string[] = [
		"arc-region-switch:GetPlanExecution",
	];
	/** IAM actions required for the GetPlanInRegion API call. */
	static readonly opGetPlanInRegion: string[] = [
		"arc-region-switch:GetPlanInRegion",
	];
	/** IAM actions required for the ListPlanExecutionEvents API call. */
	static readonly ListPlanExecutionEvents: string[] = [
		"arc-region-switch:ListPlanExecutionEvents",
	];
	/** IAM actions required for the ListPlanExecutions API call. */
	static readonly ListPlanExecutions: string[] = [
		"arc-region-switch:ListPlanExecutions",
	];
	/** IAM actions required for the ListPlans API call. */
	static readonly ListPlans: string[] = ["arc-region-switch:ListPlans"];
	/** IAM actions required for the ListPlansInRegion API call. */
	static readonly ListPlansInRegion: string[] = [
		"arc-region-switch:ListPlansInRegion",
	];
	/** IAM actions required for the ListRoute53HealthChecks API call. */
	static readonly ListRoute53HealthChecks: string[] = [
		"arc-region-switch:ListRoute53HealthChecks",
	];
	/** IAM actions required for the ListRoute53HealthChecksInRegion API call. */
	static readonly ListRoute53HealthChecksInRegion: string[] = [
		"arc-region-switch:ListRoute53HealthChecksInRegion",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"arc-region-switch:ListTagsForResource",
	];
	/** IAM actions required for the StartPlanExecution API call. */
	static readonly StartPlanExecution: string[] = [
		"arc-region-switch:StartPlanExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["arc-region-switch:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["arc-region-switch:UntagResource"];
	/** IAM actions required for the UpdatePlan API call. */
	static readonly UpdatePlan: string[] = [
		"arc-region-switch:GetPlan",
		"iam:PassRole",
		"arc-region-switch:UpdatePlan",
	];
	/** IAM actions required for the UpdatePlanExecution API call. */
	static readonly UpdatePlanExecution: string[] = [
		"arc-region-switch:UpdatePlanExecution",
	];
	/** IAM actions required for the UpdatePlanExecutionStep API call. */
	static readonly UpdatePlanExecutionStep: string[] = [
		"arc-region-switch:UpdatePlanExecutionStep",
	];
}

/**
 * Condition key constants and builders for arc-region-switch.
 */
export class ArcRegionSwitchConditions {
	/** Condition keys applicable to the CreatePlan action. */
	static readonly CreatePlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
