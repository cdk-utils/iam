// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/compute-optimizer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the compute-optimizer service.
 */
export class ComputeOptimizerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "compute-optimizer";

	/** [Write] compute-optimizer:DeleteRecommendationPreferences */
	static readonly DELETE_RECOMMENDATION_PREFERENCES =
		"compute-optimizer:DeleteRecommendationPreferences";
	/** [List] compute-optimizer:DescribeRecommendationExportJobs */
	static readonly DESCRIBE_RECOMMENDATION_EXPORT_JOBS =
		"compute-optimizer:DescribeRecommendationExportJobs";
	/** [Write] compute-optimizer:ExportAutoScalingGroupRecommendations */
	static readonly EXPORT_AUTO_SCALING_GROUP_RECOMMENDATIONS =
		"compute-optimizer:ExportAutoScalingGroupRecommendations";
	/** [Write] compute-optimizer:ExportEBSVolumeRecommendations */
	static readonly EXPORT_EBS_VOLUME_RECOMMENDATIONS =
		"compute-optimizer:ExportEBSVolumeRecommendations";
	/** [Write] compute-optimizer:ExportEC2InstanceRecommendations */
	static readonly EXPORT_EC2_INSTANCE_RECOMMENDATIONS =
		"compute-optimizer:ExportEC2InstanceRecommendations";
	/** [Write] compute-optimizer:ExportECSServiceRecommendations */
	static readonly EXPORT_ECS_SERVICE_RECOMMENDATIONS =
		"compute-optimizer:ExportECSServiceRecommendations";
	/** [Write] compute-optimizer:ExportIdleRecommendations */
	static readonly EXPORT_IDLE_RECOMMENDATIONS =
		"compute-optimizer:ExportIdleRecommendations";
	/** [Write] compute-optimizer:ExportLambdaFunctionRecommendations */
	static readonly EXPORT_LAMBDA_FUNCTION_RECOMMENDATIONS =
		"compute-optimizer:ExportLambdaFunctionRecommendations";
	/** [Write] compute-optimizer:ExportLicenseRecommendations */
	static readonly EXPORT_LICENSE_RECOMMENDATIONS =
		"compute-optimizer:ExportLicenseRecommendations";
	/** [Write] compute-optimizer:ExportRDSDatabaseRecommendations */
	static readonly EXPORT_RDS_DATABASE_RECOMMENDATIONS =
		"compute-optimizer:ExportRDSDatabaseRecommendations";
	/** [List] compute-optimizer:GetAutoScalingGroupRecommendations */
	static readonly GET_AUTO_SCALING_GROUP_RECOMMENDATIONS =
		"compute-optimizer:GetAutoScalingGroupRecommendations";
	/** [List] compute-optimizer:GetEBSVolumeRecommendations */
	static readonly GET_EBS_VOLUME_RECOMMENDATIONS =
		"compute-optimizer:GetEBSVolumeRecommendations";
	/** [List] compute-optimizer:GetEC2InstanceRecommendations */
	static readonly GET_EC2_INSTANCE_RECOMMENDATIONS =
		"compute-optimizer:GetEC2InstanceRecommendations";
	/** [List] compute-optimizer:GetEC2RecommendationProjectedMetrics */
	static readonly GET_EC2_RECOMMENDATION_PROJECTED_METRICS =
		"compute-optimizer:GetEC2RecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetECSServiceRecommendationProjectedMetrics */
	static readonly GET_ECS_SERVICE_RECOMMENDATION_PROJECTED_METRICS =
		"compute-optimizer:GetECSServiceRecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetECSServiceRecommendations */
	static readonly GET_ECS_SERVICE_RECOMMENDATIONS =
		"compute-optimizer:GetECSServiceRecommendations";
	/** [Read] compute-optimizer:GetEffectiveRecommendationPreferences */
	static readonly GET_EFFECTIVE_RECOMMENDATION_PREFERENCES =
		"compute-optimizer:GetEffectiveRecommendationPreferences";
	/** [List] compute-optimizer:GetEnrollmentStatus */
	static readonly GET_ENROLLMENT_STATUS =
		"compute-optimizer:GetEnrollmentStatus";
	/** [List] compute-optimizer:GetEnrollmentStatusesForOrganization */
	static readonly GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION =
		"compute-optimizer:GetEnrollmentStatusesForOrganization";
	/** [List] compute-optimizer:GetIdleRecommendations */
	static readonly GET_IDLE_RECOMMENDATIONS =
		"compute-optimizer:GetIdleRecommendations";
	/** [List] compute-optimizer:GetLambdaFunctionRecommendations */
	static readonly GET_LAMBDA_FUNCTION_RECOMMENDATIONS =
		"compute-optimizer:GetLambdaFunctionRecommendations";
	/** [List] compute-optimizer:GetLicenseRecommendations */
	static readonly GET_LICENSE_RECOMMENDATIONS =
		"compute-optimizer:GetLicenseRecommendations";
	/** [List] compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics */
	static readonly GET_RDS_DATABASE_RECOMMENDATION_PROJECTED_METRICS =
		"compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetRDSDatabaseRecommendations */
	static readonly GET_RDS_DATABASE_RECOMMENDATIONS =
		"compute-optimizer:GetRDSDatabaseRecommendations";
	/** [Read] compute-optimizer:GetRecommendationPreferences */
	static readonly GET_RECOMMENDATION_PREFERENCES =
		"compute-optimizer:GetRecommendationPreferences";
	/** [List] compute-optimizer:GetRecommendationSummaries */
	static readonly GET_RECOMMENDATION_SUMMARIES =
		"compute-optimizer:GetRecommendationSummaries";
	/** [Write] compute-optimizer:PutRecommendationPreferences */
	static readonly PUT_RECOMMENDATION_PREFERENCES =
		"compute-optimizer:PutRecommendationPreferences";
	/** [Write] compute-optimizer:UpdateEnrollmentStatus */
	static readonly UPDATE_ENROLLMENT_STATUS =
		"compute-optimizer:UpdateEnrollmentStatus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ComputeOptimizerActions.GET_EFFECTIVE_RECOMMENDATION_PREFERENCES,
		ComputeOptimizerActions.GET_RECOMMENDATION_PREFERENCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ComputeOptimizerActions.DELETE_RECOMMENDATION_PREFERENCES,
		ComputeOptimizerActions.EXPORT_AUTO_SCALING_GROUP_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_EBS_VOLUME_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_EC2_INSTANCE_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_ECS_SERVICE_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_IDLE_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_LAMBDA_FUNCTION_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_LICENSE_RECOMMENDATIONS,
		ComputeOptimizerActions.EXPORT_RDS_DATABASE_RECOMMENDATIONS,
		ComputeOptimizerActions.PUT_RECOMMENDATION_PREFERENCES,
		ComputeOptimizerActions.UPDATE_ENROLLMENT_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ComputeOptimizerActions.DESCRIBE_RECOMMENDATION_EXPORT_JOBS,
		ComputeOptimizerActions.GET_AUTO_SCALING_GROUP_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_EBS_VOLUME_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_EC2_INSTANCE_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_EC2_RECOMMENDATION_PROJECTED_METRICS,
		ComputeOptimizerActions.GET_ECS_SERVICE_RECOMMENDATION_PROJECTED_METRICS,
		ComputeOptimizerActions.GET_ECS_SERVICE_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_ENROLLMENT_STATUS,
		ComputeOptimizerActions.GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION,
		ComputeOptimizerActions.GET_IDLE_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_LAMBDA_FUNCTION_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_LICENSE_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_RDS_DATABASE_RECOMMENDATION_PROJECTED_METRICS,
		ComputeOptimizerActions.GET_RDS_DATABASE_RECOMMENDATIONS,
		ComputeOptimizerActions.GET_RECOMMENDATION_SUMMARIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for compute-optimizer.
 */
export class ComputeOptimizerOperations {
	/** IAM actions required for the DeleteRecommendationPreferences API call. */
	static readonly DELETE_RECOMMENDATION_PREFERENCES: string[] = [
		"compute-optimizer:DeleteRecommendationPreferences",
	];
	/** IAM actions required for the DescribeRecommendationExportJobs API call. */
	static readonly DESCRIBE_RECOMMENDATION_EXPORT_JOBS: string[] = [
		"compute-optimizer:DescribeRecommendationExportJobs",
	];
	/** IAM actions required for the ExportAutoScalingGroupRecommendations API call. */
	static readonly EXPORT_AUTO_SCALING_GROUP_RECOMMENDATIONS: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"compute-optimizer:ExportAutoScalingGroupRecommendations",
		"compute-optimizer:GetAutoScalingGroupRecommendations",
	];
	/** IAM actions required for the ExportEBSVolumeRecommendations API call. */
	static readonly EXPORT_EBS_VOLUME_RECOMMENDATIONS: string[] = [
		"ec2:DescribeVolumes",
		"compute-optimizer:ExportEBSVolumeRecommendations",
		"compute-optimizer:GetEBSVolumeRecommendations",
	];
	/** IAM actions required for the ExportEC2InstanceRecommendations API call. */
	static readonly EXPORT_EC2_INSTANCE_RECOMMENDATIONS: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:ExportEC2InstanceRecommendations",
		"compute-optimizer:GetEC2InstanceRecommendations",
	];
	/** IAM actions required for the ExportECSServiceRecommendations API call. */
	static readonly EXPORT_ECS_SERVICE_RECOMMENDATIONS: string[] = [
		"compute-optimizer:ExportECSServiceRecommendations",
		"compute-optimizer:GetECSServiceRecommendations",
		"ecs:ListClusters",
		"ecs:ListServices",
	];
	/** IAM actions required for the ExportIdleRecommendations API call. */
	static readonly EXPORT_IDLE_RECOMMENDATIONS: string[] = [
		"compute-optimizer:ExportIdleRecommendations",
		"compute-optimizer:GetIdleRecommendations",
	];
	/** IAM actions required for the ExportLambdaFunctionRecommendations API call. */
	static readonly EXPORT_LAMBDA_FUNCTION_RECOMMENDATIONS: string[] = [
		"compute-optimizer:ExportLambdaFunctionRecommendations",
		"compute-optimizer:GetLambdaFunctionRecommendations",
		"lambda:ListFunctions",
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the ExportLicenseRecommendations API call. */
	static readonly EXPORT_LICENSE_RECOMMENDATIONS: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:ExportLicenseRecommendations",
		"compute-optimizer:GetLicenseRecommendations",
	];
	/** IAM actions required for the ExportRDSDatabaseRecommendations API call. */
	static readonly EXPORT_RDS_DATABASE_RECOMMENDATIONS: string[] = [
		"rds:DescribeDBClusters",
		"rds:DescribeDBInstances",
		"compute-optimizer:ExportRDSDatabaseRecommendations",
		"compute-optimizer:GetRDSDatabaseRecommendations",
	];
	/** IAM actions required for the GetAutoScalingGroupRecommendations API call. */
	static readonly GET_AUTO_SCALING_GROUP_RECOMMENDATIONS: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"compute-optimizer:GetAutoScalingGroupRecommendations",
	];
	/** IAM actions required for the GetEBSVolumeRecommendations API call. */
	static readonly GET_EBS_VOLUME_RECOMMENDATIONS: string[] = [
		"ec2:DescribeVolumes",
		"compute-optimizer:GetEBSVolumeRecommendations",
	];
	/** IAM actions required for the GetEC2InstanceRecommendations API call. */
	static readonly GET_EC2_INSTANCE_RECOMMENDATIONS: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetEC2InstanceRecommendations",
	];
	/** IAM actions required for the GetEC2RecommendationProjectedMetrics API call. */
	static readonly GET_EC2_RECOMMENDATION_PROJECTED_METRICS: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetEC2RecommendationProjectedMetrics",
	];
	/** IAM actions required for the GetECSServiceRecommendationProjectedMetrics API call. */
	static readonly GET_ECS_SERVICE_RECOMMENDATION_PROJECTED_METRICS: string[] = [
		"compute-optimizer:GetECSServiceRecommendationProjectedMetrics",
	];
	/** IAM actions required for the GetECSServiceRecommendations API call. */
	static readonly GET_ECS_SERVICE_RECOMMENDATIONS: string[] = [
		"compute-optimizer:GetECSServiceRecommendations",
		"ecs:ListClusters",
		"ecs:ListServices",
	];
	/** IAM actions required for the GetEffectiveRecommendationPreferences API call. */
	static readonly GET_EFFECTIVE_RECOMMENDATION_PREFERENCES: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"autoscaling:DescribeAutoScalingInstances",
		"ec2:DescribeInstances",
		"compute-optimizer:GetEffectiveRecommendationPreferences",
	];
	/** IAM actions required for the GetEnrollmentStatus API call. */
	static readonly GET_ENROLLMENT_STATUS: string[] = [
		"compute-optimizer:GetEnrollmentStatus",
	];
	/** IAM actions required for the GetEnrollmentStatusesForOrganization API call. */
	static readonly GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION: string[] = [
		"compute-optimizer:GetEnrollmentStatusesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the GetIdleRecommendations API call. */
	static readonly GET_IDLE_RECOMMENDATIONS: string[] = [
		"compute-optimizer:GetIdleRecommendations",
	];
	/** IAM actions required for the GetLambdaFunctionRecommendations API call. */
	static readonly GET_LAMBDA_FUNCTION_RECOMMENDATIONS: string[] = [
		"compute-optimizer:GetLambdaFunctionRecommendations",
		"lambda:ListFunctions",
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the GetLicenseRecommendations API call. */
	static readonly GET_LICENSE_RECOMMENDATIONS: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetLicenseRecommendations",
	];
	/** IAM actions required for the GetRDSDatabaseRecommendationProjectedMetrics API call. */
	static readonly GET_RDS_DATABASE_RECOMMENDATION_PROJECTED_METRICS: string[] =
		[
			"rds:DescribeDBInstances",
			"compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics",
		];
	/** IAM actions required for the GetRDSDatabaseRecommendations API call. */
	static readonly GET_RDS_DATABASE_RECOMMENDATIONS: string[] = [
		"rds:DescribeDBClusters",
		"rds:DescribeDBInstances",
		"compute-optimizer:GetRDSDatabaseRecommendations",
	];
	/** IAM actions required for the GetRecommendationPreferences API call. */
	static readonly GET_RECOMMENDATION_PREFERENCES: string[] = [
		"compute-optimizer:GetRecommendationPreferences",
	];
	/** IAM actions required for the GetRecommendationSummaries API call. */
	static readonly GET_RECOMMENDATION_SUMMARIES: string[] = [
		"compute-optimizer:GetRecommendationSummaries",
	];
	/** IAM actions required for the PutRecommendationPreferences API call. */
	static readonly PUT_RECOMMENDATION_PREFERENCES: string[] = [
		"compute-optimizer:PutRecommendationPreferences",
	];
	/** IAM actions required for the UpdateEnrollmentStatus API call. */
	static readonly UPDATE_ENROLLMENT_STATUS: string[] = [
		"compute-optimizer:UpdateEnrollmentStatus",
	];
}

/**
 * Condition key constants and builders for compute-optimizer.
 */
export class ComputeOptimizerConditions {
	/** Condition keys applicable to the DeleteRecommendationPreferences action. */
	static readonly DELETE_RECOMMENDATION_PREFERENCES_CONDITION_KEYS: string[] = [
		"compute-optimizer:ResourceType",
	];
	/** Condition keys applicable to the GetEffectiveRecommendationPreferences action. */
	static readonly GET_EFFECTIVE_RECOMMENDATION_PREFERENCES_CONDITION_KEYS: string[] =
		["compute-optimizer:ResourceType"];
	/** Condition keys applicable to the GetRecommendationPreferences action. */
	static readonly GET_RECOMMENDATION_PREFERENCES_CONDITION_KEYS: string[] = [
		"compute-optimizer:ResourceType",
	];
	/** Condition keys applicable to the PutRecommendationPreferences action. */
	static readonly PUT_RECOMMENDATION_PREFERENCES_CONDITION_KEYS: string[] = [
		"compute-optimizer:ResourceType",
	];

	/** Condition key: compute-optimizer:ResourceType (String) */
	static readonly RESOURCE_TYPE = "compute-optimizer:ResourceType";

	/**
	 * Generates a condition block for `compute-optimizer:ResourceType`.
	 */
	static resourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "compute-optimizer:ResourceType": value } };
	}
}
