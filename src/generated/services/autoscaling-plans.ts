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
	static readonly CreateScalingPlan = "autoscaling-plans:CreateScalingPlan";
	/** [Write] autoscaling-plans:DeleteScalingPlan */
	static readonly DeleteScalingPlan = "autoscaling-plans:DeleteScalingPlan";
	/** [Read] autoscaling-plans:DescribeScalingPlanResources */
	static readonly DescribeScalingPlanResources =
		"autoscaling-plans:DescribeScalingPlanResources";
	/** [Read] autoscaling-plans:DescribeScalingPlans */
	static readonly DescribeScalingPlans =
		"autoscaling-plans:DescribeScalingPlans";
	/** [Read] autoscaling-plans:GetScalingPlanResourceForecastData */
	static readonly actionGetScalingPlanResourceForecastData =
		"autoscaling-plans:GetScalingPlanResourceForecastData";
	/** [Write] autoscaling-plans:UpdateScalingPlan */
	static readonly UpdateScalingPlan = "autoscaling-plans:UpdateScalingPlan";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AutoscalingPlansActions.DescribeScalingPlanResources,
		AutoscalingPlansActions.DescribeScalingPlans,
		AutoscalingPlansActions.actionGetScalingPlanResourceForecastData,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AutoscalingPlansActions.CreateScalingPlan,
		AutoscalingPlansActions.DeleteScalingPlan,
		AutoscalingPlansActions.UpdateScalingPlan,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for autoscaling-plans.
 */
export class AutoscalingPlansOperations {
	/** IAM actions required for the CreateScalingPlan API call. */
	static readonly CreateScalingPlan: string[] = [
		"autoscaling-plans:CreateScalingPlan",
	];
	/** IAM actions required for the DeleteScalingPlan API call. */
	static readonly DeleteScalingPlan: string[] = [
		"autoscaling-plans:DeleteScalingPlan",
	];
	/** IAM actions required for the DescribeScalingPlanResources API call. */
	static readonly DescribeScalingPlanResources: string[] = [
		"autoscaling-plans:DescribeScalingPlanResources",
	];
	/** IAM actions required for the DescribeScalingPlans API call. */
	static readonly DescribeScalingPlans: string[] = [
		"autoscaling-plans:DescribeScalingPlans",
	];
	/** IAM actions required for the GetScalingPlanResourceForecastData API call. */
	static readonly opGetScalingPlanResourceForecastData: string[] = [
		"autoscaling-plans:GetScalingPlanResourceForecastData",
	];
	/** IAM actions required for the UpdateScalingPlan API call. */
	static readonly UpdateScalingPlan: string[] = [
		"autoscaling-plans:UpdateScalingPlan",
	];
}
