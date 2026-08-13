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
	static readonly actionGetContainerization =
		"application-transformation:GetContainerization";
	/** [Read] application-transformation:GetDeployment */
	static readonly actionGetDeployment =
		"application-transformation:GetDeployment";
	/** [Read] application-transformation:GetGroupingAssessment */
	static readonly actionGetGroupingAssessment =
		"application-transformation:GetGroupingAssessment";
	/** [Read] application-transformation:GetPortingCompatibilityAssessment */
	static readonly actionGetPortingCompatibilityAssessment =
		"application-transformation:GetPortingCompatibilityAssessment";
	/** [Read] application-transformation:GetPortingRecommendationAssessment */
	static readonly actionGetPortingRecommendationAssessment =
		"application-transformation:GetPortingRecommendationAssessment";
	/** [Read] application-transformation:GetRuntimeAssessment */
	static readonly actionGetRuntimeAssessment =
		"application-transformation:GetRuntimeAssessment";
	/** [Write] application-transformation:PutLogData */
	static readonly PutLogData = "application-transformation:PutLogData";
	/** [Write] application-transformation:PutMetricData */
	static readonly PutMetricData = "application-transformation:PutMetricData";
	/** [Write] application-transformation:StartContainerization */
	static readonly StartContainerization =
		"application-transformation:StartContainerization";
	/** [Write] application-transformation:StartDeployment */
	static readonly StartDeployment =
		"application-transformation:StartDeployment";
	/** [Write] application-transformation:StartGroupingAssessment */
	static readonly StartGroupingAssessment =
		"application-transformation:StartGroupingAssessment";
	/** [Write] application-transformation:StartPortingCompatibilityAssessment */
	static readonly StartPortingCompatibilityAssessment =
		"application-transformation:StartPortingCompatibilityAssessment";
	/** [Write] application-transformation:StartPortingRecommendationAssessment */
	static readonly StartPortingRecommendationAssessment =
		"application-transformation:StartPortingRecommendationAssessment";
	/** [Write] application-transformation:StartRuntimeAssessment */
	static readonly StartRuntimeAssessment =
		"application-transformation:StartRuntimeAssessment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApplicationTransformationActions.actionGetContainerization,
		ApplicationTransformationActions.actionGetDeployment,
		ApplicationTransformationActions.actionGetGroupingAssessment,
		ApplicationTransformationActions.actionGetPortingCompatibilityAssessment,
		ApplicationTransformationActions.actionGetPortingRecommendationAssessment,
		ApplicationTransformationActions.actionGetRuntimeAssessment,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApplicationTransformationActions.PutLogData,
		ApplicationTransformationActions.PutMetricData,
		ApplicationTransformationActions.StartContainerization,
		ApplicationTransformationActions.StartDeployment,
		ApplicationTransformationActions.StartGroupingAssessment,
		ApplicationTransformationActions.StartPortingCompatibilityAssessment,
		ApplicationTransformationActions.StartPortingRecommendationAssessment,
		ApplicationTransformationActions.StartRuntimeAssessment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
