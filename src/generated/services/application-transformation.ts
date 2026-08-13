// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/application-transformation.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the application-transformation service.
 */
export class ApplicationTransformationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "application-transformation";

	/** [Read] application-transformation:GetContainerization */
	static readonly GET_CONTAINERIZATION =
		"application-transformation:GetContainerization";
	/** [Read] application-transformation:GetDeployment */
	static readonly GET_DEPLOYMENT = "application-transformation:GetDeployment";
	/** [Read] application-transformation:GetGroupingAssessment */
	static readonly GET_GROUPING_ASSESSMENT =
		"application-transformation:GetGroupingAssessment";
	/** [Read] application-transformation:GetPortingCompatibilityAssessment */
	static readonly GET_PORTING_COMPATIBILITY_ASSESSMENT =
		"application-transformation:GetPortingCompatibilityAssessment";
	/** [Read] application-transformation:GetPortingRecommendationAssessment */
	static readonly GET_PORTING_RECOMMENDATION_ASSESSMENT =
		"application-transformation:GetPortingRecommendationAssessment";
	/** [Read] application-transformation:GetRuntimeAssessment */
	static readonly GET_RUNTIME_ASSESSMENT =
		"application-transformation:GetRuntimeAssessment";
	/** [Write] application-transformation:PutLogData */
	static readonly PUT_LOG_DATA = "application-transformation:PutLogData";
	/** [Write] application-transformation:PutMetricData */
	static readonly PUT_METRIC_DATA = "application-transformation:PutMetricData";
	/** [Write] application-transformation:StartContainerization */
	static readonly START_CONTAINERIZATION =
		"application-transformation:StartContainerization";
	/** [Write] application-transformation:StartDeployment */
	static readonly START_DEPLOYMENT =
		"application-transformation:StartDeployment";
	/** [Write] application-transformation:StartGroupingAssessment */
	static readonly START_GROUPING_ASSESSMENT =
		"application-transformation:StartGroupingAssessment";
	/** [Write] application-transformation:StartPortingCompatibilityAssessment */
	static readonly START_PORTING_COMPATIBILITY_ASSESSMENT =
		"application-transformation:StartPortingCompatibilityAssessment";
	/** [Write] application-transformation:StartPortingRecommendationAssessment */
	static readonly START_PORTING_RECOMMENDATION_ASSESSMENT =
		"application-transformation:StartPortingRecommendationAssessment";
	/** [Write] application-transformation:StartRuntimeAssessment */
	static readonly START_RUNTIME_ASSESSMENT =
		"application-transformation:StartRuntimeAssessment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApplicationTransformationActions.GET_CONTAINERIZATION,
		ApplicationTransformationActions.GET_DEPLOYMENT,
		ApplicationTransformationActions.GET_GROUPING_ASSESSMENT,
		ApplicationTransformationActions.GET_PORTING_COMPATIBILITY_ASSESSMENT,
		ApplicationTransformationActions.GET_PORTING_RECOMMENDATION_ASSESSMENT,
		ApplicationTransformationActions.GET_RUNTIME_ASSESSMENT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApplicationTransformationActions.PUT_LOG_DATA,
		ApplicationTransformationActions.PUT_METRIC_DATA,
		ApplicationTransformationActions.START_CONTAINERIZATION,
		ApplicationTransformationActions.START_DEPLOYMENT,
		ApplicationTransformationActions.START_GROUPING_ASSESSMENT,
		ApplicationTransformationActions.START_PORTING_COMPATIBILITY_ASSESSMENT,
		ApplicationTransformationActions.START_PORTING_RECOMMENDATION_ASSESSMENT,
		ApplicationTransformationActions.START_RUNTIME_ASSESSMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
