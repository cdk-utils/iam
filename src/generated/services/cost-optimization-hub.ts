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
	static readonly actionGetPreferences = "cost-optimization-hub:GetPreferences";
	/** [Read] cost-optimization-hub:GetRecommendation */
	static readonly actionGetRecommendation =
		"cost-optimization-hub:GetRecommendation";
	/** [List] cost-optimization-hub:ListEfficiencyMetrics */
	static readonly ListEfficiencyMetrics =
		"cost-optimization-hub:ListEfficiencyMetrics";
	/** [List] cost-optimization-hub:ListEnrollmentStatuses */
	static readonly ListEnrollmentStatuses =
		"cost-optimization-hub:ListEnrollmentStatuses";
	/** [List] cost-optimization-hub:ListRecommendationSummaries */
	static readonly ListRecommendationSummaries =
		"cost-optimization-hub:ListRecommendationSummaries";
	/** [List] cost-optimization-hub:ListRecommendations */
	static readonly ListRecommendations =
		"cost-optimization-hub:ListRecommendations";
	/** [Write] cost-optimization-hub:UpdateEnrollmentStatus */
	static readonly UpdateEnrollmentStatus =
		"cost-optimization-hub:UpdateEnrollmentStatus";
	/** [Write] cost-optimization-hub:UpdatePreferences */
	static readonly UpdatePreferences = "cost-optimization-hub:UpdatePreferences";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CostOptimizationHubActions.actionGetPreferences,
		CostOptimizationHubActions.actionGetRecommendation,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CostOptimizationHubActions.UpdateEnrollmentStatus,
		CostOptimizationHubActions.UpdatePreferences,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CostOptimizationHubActions.ListEfficiencyMetrics,
		CostOptimizationHubActions.ListEnrollmentStatuses,
		CostOptimizationHubActions.ListRecommendationSummaries,
		CostOptimizationHubActions.ListRecommendations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for cost-optimization-hub.
 */
export class CostOptimizationHubOperations {
	/** IAM actions required for the GetPreferences API call. */
	static readonly opGetPreferences: string[] = [
		"cost-optimization-hub:GetPreferences",
	];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly opGetRecommendation: string[] = [
		"cost-optimization-hub:GetRecommendation",
	];
	/** IAM actions required for the ListEfficiencyMetrics API call. */
	static readonly ListEfficiencyMetrics: string[] = [
		"cost-optimization-hub:ListEfficiencyMetrics",
	];
	/** IAM actions required for the ListEnrollmentStatuses API call. */
	static readonly ListEnrollmentStatuses: string[] = [
		"cost-optimization-hub:ListEnrollmentStatuses",
	];
	/** IAM actions required for the ListRecommendationSummaries API call. */
	static readonly ListRecommendationSummaries: string[] = [
		"cost-optimization-hub:ListRecommendationSummaries",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"cost-optimization-hub:ListRecommendations",
	];
	/** IAM actions required for the UpdateEnrollmentStatus API call. */
	static readonly UpdateEnrollmentStatus: string[] = [
		"cost-optimization-hub:UpdateEnrollmentStatus",
	];
	/** IAM actions required for the UpdatePreferences API call. */
	static readonly UpdatePreferences: string[] = [
		"cost-optimization-hub:UpdatePreferences",
	];
}
