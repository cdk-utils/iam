// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/comprehendmedical.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the comprehendmedical service.
 */
export class ComprehendmedicalActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "comprehendmedical";

	/** [Read] comprehendmedical:DescribeEntitiesDetectionV2Job */
	static readonly DescribeEntitiesDetectionV2Job =
		"comprehendmedical:DescribeEntitiesDetectionV2Job";
	/** [Read] comprehendmedical:DescribeICD10CMInferenceJob */
	static readonly DescribeICD10CMInferenceJob =
		"comprehendmedical:DescribeICD10CMInferenceJob";
	/** [Read] comprehendmedical:DescribePHIDetectionJob */
	static readonly DescribePHIDetectionJob =
		"comprehendmedical:DescribePHIDetectionJob";
	/** [Read] comprehendmedical:DescribeRxNormInferenceJob */
	static readonly DescribeRxNormInferenceJob =
		"comprehendmedical:DescribeRxNormInferenceJob";
	/** [Read] comprehendmedical:DescribeSNOMEDCTInferenceJob */
	static readonly DescribeSNOMEDCTInferenceJob =
		"comprehendmedical:DescribeSNOMEDCTInferenceJob";
	/** [Read] comprehendmedical:DetectEntitiesV2 */
	static readonly DetectEntitiesV2 = "comprehendmedical:DetectEntitiesV2";
	/** [Read] comprehendmedical:DetectPHI */
	static readonly DetectPHI = "comprehendmedical:DetectPHI";
	/** [Read] comprehendmedical:InferICD10CM */
	static readonly InferICD10CM = "comprehendmedical:InferICD10CM";
	/** [Read] comprehendmedical:InferRxNorm */
	static readonly InferRxNorm = "comprehendmedical:InferRxNorm";
	/** [Read] comprehendmedical:InferSNOMEDCT */
	static readonly InferSNOMEDCT = "comprehendmedical:InferSNOMEDCT";
	/** [Read] comprehendmedical:ListEntitiesDetectionV2Jobs */
	static readonly ListEntitiesDetectionV2Jobs =
		"comprehendmedical:ListEntitiesDetectionV2Jobs";
	/** [Read] comprehendmedical:ListICD10CMInferenceJobs */
	static readonly ListICD10CMInferenceJobs =
		"comprehendmedical:ListICD10CMInferenceJobs";
	/** [Read] comprehendmedical:ListPHIDetectionJobs */
	static readonly ListPHIDetectionJobs =
		"comprehendmedical:ListPHIDetectionJobs";
	/** [Read] comprehendmedical:ListRxNormInferenceJobs */
	static readonly ListRxNormInferenceJobs =
		"comprehendmedical:ListRxNormInferenceJobs";
	/** [Read] comprehendmedical:ListSNOMEDCTInferenceJobs */
	static readonly ListSNOMEDCTInferenceJobs =
		"comprehendmedical:ListSNOMEDCTInferenceJobs";
	/** [Write] comprehendmedical:StartEntitiesDetectionV2Job */
	static readonly StartEntitiesDetectionV2Job =
		"comprehendmedical:StartEntitiesDetectionV2Job";
	/** [Write] comprehendmedical:StartICD10CMInferenceJob */
	static readonly StartICD10CMInferenceJob =
		"comprehendmedical:StartICD10CMInferenceJob";
	/** [Write] comprehendmedical:StartPHIDetectionJob */
	static readonly StartPHIDetectionJob =
		"comprehendmedical:StartPHIDetectionJob";
	/** [Write] comprehendmedical:StartRxNormInferenceJob */
	static readonly StartRxNormInferenceJob =
		"comprehendmedical:StartRxNormInferenceJob";
	/** [Write] comprehendmedical:StartSNOMEDCTInferenceJob */
	static readonly StartSNOMEDCTInferenceJob =
		"comprehendmedical:StartSNOMEDCTInferenceJob";
	/** [Write] comprehendmedical:StopEntitiesDetectionV2Job */
	static readonly StopEntitiesDetectionV2Job =
		"comprehendmedical:StopEntitiesDetectionV2Job";
	/** [Write] comprehendmedical:StopICD10CMInferenceJob */
	static readonly StopICD10CMInferenceJob =
		"comprehendmedical:StopICD10CMInferenceJob";
	/** [Write] comprehendmedical:StopPHIDetectionJob */
	static readonly StopPHIDetectionJob = "comprehendmedical:StopPHIDetectionJob";
	/** [Write] comprehendmedical:StopRxNormInferenceJob */
	static readonly StopRxNormInferenceJob =
		"comprehendmedical:StopRxNormInferenceJob";
	/** [Write] comprehendmedical:StopSNOMEDCTInferenceJob */
	static readonly StopSNOMEDCTInferenceJob =
		"comprehendmedical:StopSNOMEDCTInferenceJob";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ComprehendmedicalActions.DescribeEntitiesDetectionV2Job,
		ComprehendmedicalActions.DescribeICD10CMInferenceJob,
		ComprehendmedicalActions.DescribePHIDetectionJob,
		ComprehendmedicalActions.DescribeRxNormInferenceJob,
		ComprehendmedicalActions.DescribeSNOMEDCTInferenceJob,
		ComprehendmedicalActions.DetectEntitiesV2,
		ComprehendmedicalActions.DetectPHI,
		ComprehendmedicalActions.InferICD10CM,
		ComprehendmedicalActions.InferRxNorm,
		ComprehendmedicalActions.InferSNOMEDCT,
		ComprehendmedicalActions.ListEntitiesDetectionV2Jobs,
		ComprehendmedicalActions.ListICD10CMInferenceJobs,
		ComprehendmedicalActions.ListPHIDetectionJobs,
		ComprehendmedicalActions.ListRxNormInferenceJobs,
		ComprehendmedicalActions.ListSNOMEDCTInferenceJobs,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ComprehendmedicalActions.StartEntitiesDetectionV2Job,
		ComprehendmedicalActions.StartICD10CMInferenceJob,
		ComprehendmedicalActions.StartPHIDetectionJob,
		ComprehendmedicalActions.StartRxNormInferenceJob,
		ComprehendmedicalActions.StartSNOMEDCTInferenceJob,
		ComprehendmedicalActions.StopEntitiesDetectionV2Job,
		ComprehendmedicalActions.StopICD10CMInferenceJob,
		ComprehendmedicalActions.StopPHIDetectionJob,
		ComprehendmedicalActions.StopRxNormInferenceJob,
		ComprehendmedicalActions.StopSNOMEDCTInferenceJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for comprehendmedical.
 */
export class ComprehendmedicalOperations {
	/** IAM actions required for the DescribeEntitiesDetectionV2Job API call. */
	static readonly DescribeEntitiesDetectionV2Job: string[] = [
		"comprehendmedical:DescribeEntitiesDetectionV2Job",
	];
	/** IAM actions required for the DescribeICD10CMInferenceJob API call. */
	static readonly DescribeICD10CMInferenceJob: string[] = [
		"comprehendmedical:DescribeICD10CMInferenceJob",
	];
	/** IAM actions required for the DescribePHIDetectionJob API call. */
	static readonly DescribePHIDetectionJob: string[] = [
		"comprehendmedical:DescribePHIDetectionJob",
	];
	/** IAM actions required for the DescribeRxNormInferenceJob API call. */
	static readonly DescribeRxNormInferenceJob: string[] = [
		"comprehendmedical:DescribeRxNormInferenceJob",
	];
	/** IAM actions required for the DescribeSNOMEDCTInferenceJob API call. */
	static readonly DescribeSNOMEDCTInferenceJob: string[] = [
		"comprehendmedical:DescribeSNOMEDCTInferenceJob",
	];
	/** IAM actions required for the DetectEntities API call. */
	static readonly DetectEntities: string[] = [];
	/** IAM actions required for the DetectEntitiesV2 API call. */
	static readonly DetectEntitiesV2: string[] = [
		"comprehendmedical:DetectEntitiesV2",
	];
	/** IAM actions required for the DetectPHI API call. */
	static readonly DetectPHI: string[] = ["comprehendmedical:DetectPHI"];
	/** IAM actions required for the InferICD10CM API call. */
	static readonly InferICD10CM: string[] = ["comprehendmedical:InferICD10CM"];
	/** IAM actions required for the InferRxNorm API call. */
	static readonly InferRxNorm: string[] = ["comprehendmedical:InferRxNorm"];
	/** IAM actions required for the InferSNOMEDCT API call. */
	static readonly InferSNOMEDCT: string[] = ["comprehendmedical:InferSNOMEDCT"];
	/** IAM actions required for the ListEntitiesDetectionV2Jobs API call. */
	static readonly ListEntitiesDetectionV2Jobs: string[] = [
		"comprehendmedical:ListEntitiesDetectionV2Jobs",
	];
	/** IAM actions required for the ListICD10CMInferenceJobs API call. */
	static readonly ListICD10CMInferenceJobs: string[] = [
		"comprehendmedical:ListICD10CMInferenceJobs",
	];
	/** IAM actions required for the ListPHIDetectionJobs API call. */
	static readonly ListPHIDetectionJobs: string[] = [
		"comprehendmedical:ListPHIDetectionJobs",
	];
	/** IAM actions required for the ListRxNormInferenceJobs API call. */
	static readonly ListRxNormInferenceJobs: string[] = [
		"comprehendmedical:ListRxNormInferenceJobs",
	];
	/** IAM actions required for the ListSNOMEDCTInferenceJobs API call. */
	static readonly ListSNOMEDCTInferenceJobs: string[] = [
		"comprehendmedical:ListSNOMEDCTInferenceJobs",
	];
	/** IAM actions required for the StartEntitiesDetectionV2Job API call. */
	static readonly StartEntitiesDetectionV2Job: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartEntitiesDetectionV2Job",
	];
	/** IAM actions required for the StartICD10CMInferenceJob API call. */
	static readonly StartICD10CMInferenceJob: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartICD10CMInferenceJob",
	];
	/** IAM actions required for the StartPHIDetectionJob API call. */
	static readonly StartPHIDetectionJob: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartPHIDetectionJob",
	];
	/** IAM actions required for the StartRxNormInferenceJob API call. */
	static readonly StartRxNormInferenceJob: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartRxNormInferenceJob",
	];
	/** IAM actions required for the StartSNOMEDCTInferenceJob API call. */
	static readonly StartSNOMEDCTInferenceJob: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartSNOMEDCTInferenceJob",
	];
	/** IAM actions required for the StopEntitiesDetectionV2Job API call. */
	static readonly StopEntitiesDetectionV2Job: string[] = [
		"comprehendmedical:StopEntitiesDetectionV2Job",
	];
	/** IAM actions required for the StopICD10CMInferenceJob API call. */
	static readonly StopICD10CMInferenceJob: string[] = [
		"comprehendmedical:StopICD10CMInferenceJob",
	];
	/** IAM actions required for the StopPHIDetectionJob API call. */
	static readonly StopPHIDetectionJob: string[] = [
		"comprehendmedical:StopPHIDetectionJob",
	];
	/** IAM actions required for the StopRxNormInferenceJob API call. */
	static readonly StopRxNormInferenceJob: string[] = [
		"comprehendmedical:StopRxNormInferenceJob",
	];
	/** IAM actions required for the StopSNOMEDCTInferenceJob API call. */
	static readonly StopSNOMEDCTInferenceJob: string[] = [
		"comprehendmedical:StopSNOMEDCTInferenceJob",
	];
}

/**
 * Condition key constants and builders for comprehendmedical.
 */
export class ComprehendmedicalConditions {
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
