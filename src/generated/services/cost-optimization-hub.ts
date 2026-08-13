// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cost-optimization-hub.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cost-optimization-hub service.
 */
export class CostOptimizationHubActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cost-optimization-hub";

	/** [Read] cost-optimization-hub:GetPreferences */
	static readonly GET_PREFERENCES = "cost-optimization-hub:GetPreferences";
	/** [Read] cost-optimization-hub:GetRecommendation */
	static readonly GET_RECOMMENDATION =
		"cost-optimization-hub:GetRecommendation";
	/** [List] cost-optimization-hub:ListEfficiencyMetrics */
	static readonly LIST_EFFICIENCY_METRICS =
		"cost-optimization-hub:ListEfficiencyMetrics";
	/** [List] cost-optimization-hub:ListEnrollmentStatuses */
	static readonly LIST_ENROLLMENT_STATUSES =
		"cost-optimization-hub:ListEnrollmentStatuses";
	/** [List] cost-optimization-hub:ListRecommendationSummaries */
	static readonly LIST_RECOMMENDATION_SUMMARIES =
		"cost-optimization-hub:ListRecommendationSummaries";
	/** [List] cost-optimization-hub:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS =
		"cost-optimization-hub:ListRecommendations";
	/** [Write] cost-optimization-hub:UpdateEnrollmentStatus */
	static readonly UPDATE_ENROLLMENT_STATUS =
		"cost-optimization-hub:UpdateEnrollmentStatus";
	/** [Write] cost-optimization-hub:UpdatePreferences */
	static readonly UPDATE_PREFERENCES =
		"cost-optimization-hub:UpdatePreferences";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CostOptimizationHubActions.GET_PREFERENCES,
		CostOptimizationHubActions.GET_RECOMMENDATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CostOptimizationHubActions.UPDATE_ENROLLMENT_STATUS,
		CostOptimizationHubActions.UPDATE_PREFERENCES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CostOptimizationHubActions.LIST_EFFICIENCY_METRICS,
		CostOptimizationHubActions.LIST_ENROLLMENT_STATUSES,
		CostOptimizationHubActions.LIST_RECOMMENDATION_SUMMARIES,
		CostOptimizationHubActions.LIST_RECOMMENDATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for cost-optimization-hub.
 */
export class CostOptimizationHubOperations {
	/** IAM actions required for the GetPreferences API call. */
	static readonly GET_PREFERENCES: string[] = [
		"cost-optimization-hub:GetPreferences",
	];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly GET_RECOMMENDATION: string[] = [
		"cost-optimization-hub:GetRecommendation",
	];
	/** IAM actions required for the ListEfficiencyMetrics API call. */
	static readonly LIST_EFFICIENCY_METRICS: string[] = [
		"cost-optimization-hub:ListEfficiencyMetrics",
	];
	/** IAM actions required for the ListEnrollmentStatuses API call. */
	static readonly LIST_ENROLLMENT_STATUSES: string[] = [
		"cost-optimization-hub:ListEnrollmentStatuses",
	];
	/** IAM actions required for the ListRecommendationSummaries API call. */
	static readonly LIST_RECOMMENDATION_SUMMARIES: string[] = [
		"cost-optimization-hub:ListRecommendationSummaries",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [
		"cost-optimization-hub:ListRecommendations",
	];
	/** IAM actions required for the UpdateEnrollmentStatus API call. */
	static readonly UPDATE_ENROLLMENT_STATUS: string[] = [
		"cost-optimization-hub:UpdateEnrollmentStatus",
	];
	/** IAM actions required for the UpdatePreferences API call. */
	static readonly UPDATE_PREFERENCES: string[] = [
		"cost-optimization-hub:UpdatePreferences",
	];
}
