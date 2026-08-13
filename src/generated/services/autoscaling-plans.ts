// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/autoscaling-plans.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the autoscaling-plans service.
 */
export class AutoscalingPlansActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "autoscaling-plans";

	/** [Write] autoscaling-plans:CreateScalingPlan */
	static readonly CREATE_SCALING_PLAN = "autoscaling-plans:CreateScalingPlan";
	/** [Write] autoscaling-plans:DeleteScalingPlan */
	static readonly DELETE_SCALING_PLAN = "autoscaling-plans:DeleteScalingPlan";
	/** [Read] autoscaling-plans:DescribeScalingPlanResources */
	static readonly DESCRIBE_SCALING_PLAN_RESOURCES =
		"autoscaling-plans:DescribeScalingPlanResources";
	/** [Read] autoscaling-plans:DescribeScalingPlans */
	static readonly DESCRIBE_SCALING_PLANS =
		"autoscaling-plans:DescribeScalingPlans";
	/** [Read] autoscaling-plans:GetScalingPlanResourceForecastData */
	static readonly GET_SCALING_PLAN_RESOURCE_FORECAST_DATA =
		"autoscaling-plans:GetScalingPlanResourceForecastData";
	/** [Write] autoscaling-plans:UpdateScalingPlan */
	static readonly UPDATE_SCALING_PLAN = "autoscaling-plans:UpdateScalingPlan";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AutoscalingPlansActions.DESCRIBE_SCALING_PLAN_RESOURCES,
		AutoscalingPlansActions.DESCRIBE_SCALING_PLANS,
		AutoscalingPlansActions.GET_SCALING_PLAN_RESOURCE_FORECAST_DATA,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AutoscalingPlansActions.CREATE_SCALING_PLAN,
		AutoscalingPlansActions.DELETE_SCALING_PLAN,
		AutoscalingPlansActions.UPDATE_SCALING_PLAN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for autoscaling-plans.
 */
export class AutoscalingPlansOperations {
	/** IAM actions required for the CreateScalingPlan API call. */
	static readonly CREATE_SCALING_PLAN: string[] = [
		"autoscaling-plans:CreateScalingPlan",
	];
	/** IAM actions required for the DeleteScalingPlan API call. */
	static readonly DELETE_SCALING_PLAN: string[] = [
		"autoscaling-plans:DeleteScalingPlan",
	];
	/** IAM actions required for the DescribeScalingPlanResources API call. */
	static readonly DESCRIBE_SCALING_PLAN_RESOURCES: string[] = [
		"autoscaling-plans:DescribeScalingPlanResources",
	];
	/** IAM actions required for the DescribeScalingPlans API call. */
	static readonly DESCRIBE_SCALING_PLANS: string[] = [
		"autoscaling-plans:DescribeScalingPlans",
	];
	/** IAM actions required for the GetScalingPlanResourceForecastData API call. */
	static readonly GET_SCALING_PLAN_RESOURCE_FORECAST_DATA: string[] = [
		"autoscaling-plans:GetScalingPlanResourceForecastData",
	];
	/** IAM actions required for the UpdateScalingPlan API call. */
	static readonly UPDATE_SCALING_PLAN: string[] = [
		"autoscaling-plans:UpdateScalingPlan",
	];
}
