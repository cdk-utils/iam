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
	static readonly DeleteRecommendationPreferences =
		"compute-optimizer:DeleteRecommendationPreferences";
	/** [List] compute-optimizer:DescribeRecommendationExportJobs */
	static readonly DescribeRecommendationExportJobs =
		"compute-optimizer:DescribeRecommendationExportJobs";
	/** [Write] compute-optimizer:ExportAutoScalingGroupRecommendations */
	static readonly ExportAutoScalingGroupRecommendations =
		"compute-optimizer:ExportAutoScalingGroupRecommendations";
	/** [Write] compute-optimizer:ExportEBSVolumeRecommendations */
	static readonly ExportEBSVolumeRecommendations =
		"compute-optimizer:ExportEBSVolumeRecommendations";
	/** [Write] compute-optimizer:ExportEC2InstanceRecommendations */
	static readonly ExportEC2InstanceRecommendations =
		"compute-optimizer:ExportEC2InstanceRecommendations";
	/** [Write] compute-optimizer:ExportECSServiceRecommendations */
	static readonly ExportECSServiceRecommendations =
		"compute-optimizer:ExportECSServiceRecommendations";
	/** [Write] compute-optimizer:ExportIdleRecommendations */
	static readonly ExportIdleRecommendations =
		"compute-optimizer:ExportIdleRecommendations";
	/** [Write] compute-optimizer:ExportLambdaFunctionRecommendations */
	static readonly ExportLambdaFunctionRecommendations =
		"compute-optimizer:ExportLambdaFunctionRecommendations";
	/** [Write] compute-optimizer:ExportLicenseRecommendations */
	static readonly ExportLicenseRecommendations =
		"compute-optimizer:ExportLicenseRecommendations";
	/** [Write] compute-optimizer:ExportRDSDatabaseRecommendations */
	static readonly ExportRDSDatabaseRecommendations =
		"compute-optimizer:ExportRDSDatabaseRecommendations";
	/** [List] compute-optimizer:GetAutoScalingGroupRecommendations */
	static readonly actionGetAutoScalingGroupRecommendations =
		"compute-optimizer:GetAutoScalingGroupRecommendations";
	/** [List] compute-optimizer:GetEBSVolumeRecommendations */
	static readonly actionGetEBSVolumeRecommendations =
		"compute-optimizer:GetEBSVolumeRecommendations";
	/** [List] compute-optimizer:GetEC2InstanceRecommendations */
	static readonly actionGetEC2InstanceRecommendations =
		"compute-optimizer:GetEC2InstanceRecommendations";
	/** [List] compute-optimizer:GetEC2RecommendationProjectedMetrics */
	static readonly actionGetEC2RecommendationProjectedMetrics =
		"compute-optimizer:GetEC2RecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetECSServiceRecommendationProjectedMetrics */
	static readonly actionGetECSServiceRecommendationProjectedMetrics =
		"compute-optimizer:GetECSServiceRecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetECSServiceRecommendations */
	static readonly actionGetECSServiceRecommendations =
		"compute-optimizer:GetECSServiceRecommendations";
	/** [Read] compute-optimizer:GetEffectiveRecommendationPreferences */
	static readonly actionGetEffectiveRecommendationPreferences =
		"compute-optimizer:GetEffectiveRecommendationPreferences";
	/** [List] compute-optimizer:GetEnrollmentStatus */
	static readonly actionGetEnrollmentStatus =
		"compute-optimizer:GetEnrollmentStatus";
	/** [List] compute-optimizer:GetEnrollmentStatusesForOrganization */
	static readonly actionGetEnrollmentStatusesForOrganization =
		"compute-optimizer:GetEnrollmentStatusesForOrganization";
	/** [List] compute-optimizer:GetIdleRecommendations */
	static readonly actionGetIdleRecommendations =
		"compute-optimizer:GetIdleRecommendations";
	/** [List] compute-optimizer:GetLambdaFunctionRecommendations */
	static readonly actionGetLambdaFunctionRecommendations =
		"compute-optimizer:GetLambdaFunctionRecommendations";
	/** [List] compute-optimizer:GetLicenseRecommendations */
	static readonly actionGetLicenseRecommendations =
		"compute-optimizer:GetLicenseRecommendations";
	/** [List] compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics */
	static readonly actionGetRDSDatabaseRecommendationProjectedMetrics =
		"compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics";
	/** [List] compute-optimizer:GetRDSDatabaseRecommendations */
	static readonly actionGetRDSDatabaseRecommendations =
		"compute-optimizer:GetRDSDatabaseRecommendations";
	/** [Read] compute-optimizer:GetRecommendationPreferences */
	static readonly actionGetRecommendationPreferences =
		"compute-optimizer:GetRecommendationPreferences";
	/** [List] compute-optimizer:GetRecommendationSummaries */
	static readonly actionGetRecommendationSummaries =
		"compute-optimizer:GetRecommendationSummaries";
	/** [Write] compute-optimizer:PutRecommendationPreferences */
	static readonly PutRecommendationPreferences =
		"compute-optimizer:PutRecommendationPreferences";
	/** [Write] compute-optimizer:UpdateEnrollmentStatus */
	static readonly UpdateEnrollmentStatus =
		"compute-optimizer:UpdateEnrollmentStatus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ComputeOptimizerActions.actionGetEffectiveRecommendationPreferences,
		ComputeOptimizerActions.actionGetRecommendationPreferences,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ComputeOptimizerActions.DeleteRecommendationPreferences,
		ComputeOptimizerActions.ExportAutoScalingGroupRecommendations,
		ComputeOptimizerActions.ExportEBSVolumeRecommendations,
		ComputeOptimizerActions.ExportEC2InstanceRecommendations,
		ComputeOptimizerActions.ExportECSServiceRecommendations,
		ComputeOptimizerActions.ExportIdleRecommendations,
		ComputeOptimizerActions.ExportLambdaFunctionRecommendations,
		ComputeOptimizerActions.ExportLicenseRecommendations,
		ComputeOptimizerActions.ExportRDSDatabaseRecommendations,
		ComputeOptimizerActions.PutRecommendationPreferences,
		ComputeOptimizerActions.UpdateEnrollmentStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ComputeOptimizerActions.DescribeRecommendationExportJobs,
		ComputeOptimizerActions.actionGetAutoScalingGroupRecommendations,
		ComputeOptimizerActions.actionGetEBSVolumeRecommendations,
		ComputeOptimizerActions.actionGetEC2InstanceRecommendations,
		ComputeOptimizerActions.actionGetEC2RecommendationProjectedMetrics,
		ComputeOptimizerActions.actionGetECSServiceRecommendationProjectedMetrics,
		ComputeOptimizerActions.actionGetECSServiceRecommendations,
		ComputeOptimizerActions.actionGetEnrollmentStatus,
		ComputeOptimizerActions.actionGetEnrollmentStatusesForOrganization,
		ComputeOptimizerActions.actionGetIdleRecommendations,
		ComputeOptimizerActions.actionGetLambdaFunctionRecommendations,
		ComputeOptimizerActions.actionGetLicenseRecommendations,
		ComputeOptimizerActions.actionGetRDSDatabaseRecommendationProjectedMetrics,
		ComputeOptimizerActions.actionGetRDSDatabaseRecommendations,
		ComputeOptimizerActions.actionGetRecommendationSummaries,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for compute-optimizer.
 */
export class ComputeOptimizerOperations {
	/** IAM actions required for the DeleteRecommendationPreferences API call. */
	static readonly DeleteRecommendationPreferences: string[] = [
		"compute-optimizer:DeleteRecommendationPreferences",
	];
	/** IAM actions required for the DescribeRecommendationExportJobs API call. */
	static readonly DescribeRecommendationExportJobs: string[] = [
		"compute-optimizer:DescribeRecommendationExportJobs",
	];
	/** IAM actions required for the ExportAutoScalingGroupRecommendations API call. */
	static readonly ExportAutoScalingGroupRecommendations: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"compute-optimizer:ExportAutoScalingGroupRecommendations",
		"compute-optimizer:GetAutoScalingGroupRecommendations",
	];
	/** IAM actions required for the ExportEBSVolumeRecommendations API call. */
	static readonly ExportEBSVolumeRecommendations: string[] = [
		"ec2:DescribeVolumes",
		"compute-optimizer:ExportEBSVolumeRecommendations",
		"compute-optimizer:GetEBSVolumeRecommendations",
	];
	/** IAM actions required for the ExportEC2InstanceRecommendations API call. */
	static readonly ExportEC2InstanceRecommendations: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:ExportEC2InstanceRecommendations",
		"compute-optimizer:GetEC2InstanceRecommendations",
	];
	/** IAM actions required for the ExportECSServiceRecommendations API call. */
	static readonly ExportECSServiceRecommendations: string[] = [
		"compute-optimizer:ExportECSServiceRecommendations",
		"compute-optimizer:GetECSServiceRecommendations",
		"ecs:ListClusters",
		"ecs:ListServices",
	];
	/** IAM actions required for the ExportIdleRecommendations API call. */
	static readonly ExportIdleRecommendations: string[] = [
		"compute-optimizer:ExportIdleRecommendations",
		"compute-optimizer:GetIdleRecommendations",
	];
	/** IAM actions required for the ExportLambdaFunctionRecommendations API call. */
	static readonly ExportLambdaFunctionRecommendations: string[] = [
		"compute-optimizer:ExportLambdaFunctionRecommendations",
		"compute-optimizer:GetLambdaFunctionRecommendations",
		"lambda:ListFunctions",
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the ExportLicenseRecommendations API call. */
	static readonly ExportLicenseRecommendations: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:ExportLicenseRecommendations",
		"compute-optimizer:GetLicenseRecommendations",
	];
	/** IAM actions required for the ExportRDSDatabaseRecommendations API call. */
	static readonly ExportRDSDatabaseRecommendations: string[] = [
		"rds:DescribeDBClusters",
		"rds:DescribeDBInstances",
		"compute-optimizer:ExportRDSDatabaseRecommendations",
		"compute-optimizer:GetRDSDatabaseRecommendations",
	];
	/** IAM actions required for the GetAutoScalingGroupRecommendations API call. */
	static readonly opGetAutoScalingGroupRecommendations: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"compute-optimizer:GetAutoScalingGroupRecommendations",
	];
	/** IAM actions required for the GetEBSVolumeRecommendations API call. */
	static readonly opGetEBSVolumeRecommendations: string[] = [
		"ec2:DescribeVolumes",
		"compute-optimizer:GetEBSVolumeRecommendations",
	];
	/** IAM actions required for the GetEC2InstanceRecommendations API call. */
	static readonly opGetEC2InstanceRecommendations: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetEC2InstanceRecommendations",
	];
	/** IAM actions required for the GetEC2RecommendationProjectedMetrics API call. */
	static readonly opGetEC2RecommendationProjectedMetrics: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetEC2RecommendationProjectedMetrics",
	];
	/** IAM actions required for the GetECSServiceRecommendationProjectedMetrics API call. */
	static readonly opGetECSServiceRecommendationProjectedMetrics: string[] = [
		"compute-optimizer:GetECSServiceRecommendationProjectedMetrics",
	];
	/** IAM actions required for the GetECSServiceRecommendations API call. */
	static readonly opGetECSServiceRecommendations: string[] = [
		"compute-optimizer:GetECSServiceRecommendations",
		"ecs:ListClusters",
		"ecs:ListServices",
	];
	/** IAM actions required for the GetEffectiveRecommendationPreferences API call. */
	static readonly opGetEffectiveRecommendationPreferences: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
		"autoscaling:DescribeAutoScalingInstances",
		"ec2:DescribeInstances",
		"compute-optimizer:GetEffectiveRecommendationPreferences",
	];
	/** IAM actions required for the GetEnrollmentStatus API call. */
	static readonly opGetEnrollmentStatus: string[] = [
		"compute-optimizer:GetEnrollmentStatus",
	];
	/** IAM actions required for the GetEnrollmentStatusesForOrganization API call. */
	static readonly opGetEnrollmentStatusesForOrganization: string[] = [
		"compute-optimizer:GetEnrollmentStatusesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the GetIdleRecommendations API call. */
	static readonly opGetIdleRecommendations: string[] = [
		"compute-optimizer:GetIdleRecommendations",
	];
	/** IAM actions required for the GetLambdaFunctionRecommendations API call. */
	static readonly opGetLambdaFunctionRecommendations: string[] = [
		"compute-optimizer:GetLambdaFunctionRecommendations",
		"lambda:ListFunctions",
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the GetLicenseRecommendations API call. */
	static readonly opGetLicenseRecommendations: string[] = [
		"ec2:DescribeInstances",
		"compute-optimizer:GetLicenseRecommendations",
	];
	/** IAM actions required for the GetRDSDatabaseRecommendationProjectedMetrics API call. */
	static readonly opGetRDSDatabaseRecommendationProjectedMetrics: string[] = [
		"rds:DescribeDBInstances",
		"compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics",
	];
	/** IAM actions required for the GetRDSDatabaseRecommendations API call. */
	static readonly opGetRDSDatabaseRecommendations: string[] = [
		"rds:DescribeDBClusters",
		"rds:DescribeDBInstances",
		"compute-optimizer:GetRDSDatabaseRecommendations",
	];
	/** IAM actions required for the GetRecommendationPreferences API call. */
	static readonly opGetRecommendationPreferences: string[] = [
		"compute-optimizer:GetRecommendationPreferences",
	];
	/** IAM actions required for the GetRecommendationSummaries API call. */
	static readonly opGetRecommendationSummaries: string[] = [
		"compute-optimizer:GetRecommendationSummaries",
	];
	/** IAM actions required for the PutRecommendationPreferences API call. */
	static readonly PutRecommendationPreferences: string[] = [
		"compute-optimizer:PutRecommendationPreferences",
	];
	/** IAM actions required for the UpdateEnrollmentStatus API call. */
	static readonly UpdateEnrollmentStatus: string[] = [
		"compute-optimizer:UpdateEnrollmentStatus",
	];
}

/**
 * Condition key constants and builders for compute-optimizer.
 */
export class ComputeOptimizerConditions {
	/** Condition keys applicable to the DeleteRecommendationPreferences action. */
	static readonly DeleteRecommendationPreferencesConditionKeys: string[] = [
		"compute-optimizer:ResourceType",
	];
	/** Condition keys applicable to the GetEffectiveRecommendationPreferences action. */
	static readonly actionGetEffectiveRecommendationPreferencesConditionKeys: string[] =
		["compute-optimizer:ResourceType"];
	/** Condition keys applicable to the GetRecommendationPreferences action. */
	static readonly actionGetRecommendationPreferencesConditionKeys: string[] = [
		"compute-optimizer:ResourceType",
	];
	/** Condition keys applicable to the PutRecommendationPreferences action. */
	static readonly PutRecommendationPreferencesConditionKeys: string[] = [
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
