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
	static readonly DESCRIBE_ENTITIES_DETECTION_V2_JOB =
		"comprehendmedical:DescribeEntitiesDetectionV2Job";
	/** [Read] comprehendmedical:DescribeICD10CMInferenceJob */
	static readonly DESCRIBE_ICD10_CM_INFERENCE_JOB =
		"comprehendmedical:DescribeICD10CMInferenceJob";
	/** [Read] comprehendmedical:DescribePHIDetectionJob */
	static readonly DESCRIBE_PHI_DETECTION_JOB =
		"comprehendmedical:DescribePHIDetectionJob";
	/** [Read] comprehendmedical:DescribeRxNormInferenceJob */
	static readonly DESCRIBE_RX_NORM_INFERENCE_JOB =
		"comprehendmedical:DescribeRxNormInferenceJob";
	/** [Read] comprehendmedical:DescribeSNOMEDCTInferenceJob */
	static readonly DESCRIBE_SNOMEDCT_INFERENCE_JOB =
		"comprehendmedical:DescribeSNOMEDCTInferenceJob";
	/** [Read] comprehendmedical:DetectEntitiesV2 */
	static readonly DETECT_ENTITIES_V2 = "comprehendmedical:DetectEntitiesV2";
	/** [Read] comprehendmedical:DetectPHI */
	static readonly DETECT_PHI = "comprehendmedical:DetectPHI";
	/** [Read] comprehendmedical:InferICD10CM */
	static readonly INFER_ICD10_CM = "comprehendmedical:InferICD10CM";
	/** [Read] comprehendmedical:InferRxNorm */
	static readonly INFER_RX_NORM = "comprehendmedical:InferRxNorm";
	/** [Read] comprehendmedical:InferSNOMEDCT */
	static readonly INFER_SNOMEDCT = "comprehendmedical:InferSNOMEDCT";
	/** [Read] comprehendmedical:ListEntitiesDetectionV2Jobs */
	static readonly LIST_ENTITIES_DETECTION_V2_JOBS =
		"comprehendmedical:ListEntitiesDetectionV2Jobs";
	/** [Read] comprehendmedical:ListICD10CMInferenceJobs */
	static readonly LIST_ICD10_CM_INFERENCE_JOBS =
		"comprehendmedical:ListICD10CMInferenceJobs";
	/** [Read] comprehendmedical:ListPHIDetectionJobs */
	static readonly LIST_PHI_DETECTION_JOBS =
		"comprehendmedical:ListPHIDetectionJobs";
	/** [Read] comprehendmedical:ListRxNormInferenceJobs */
	static readonly LIST_RX_NORM_INFERENCE_JOBS =
		"comprehendmedical:ListRxNormInferenceJobs";
	/** [Read] comprehendmedical:ListSNOMEDCTInferenceJobs */
	static readonly LIST_SNOMEDCT_INFERENCE_JOBS =
		"comprehendmedical:ListSNOMEDCTInferenceJobs";
	/** [Write] comprehendmedical:StartEntitiesDetectionV2Job */
	static readonly START_ENTITIES_DETECTION_V2_JOB =
		"comprehendmedical:StartEntitiesDetectionV2Job";
	/** [Write] comprehendmedical:StartICD10CMInferenceJob */
	static readonly START_ICD10_CM_INFERENCE_JOB =
		"comprehendmedical:StartICD10CMInferenceJob";
	/** [Write] comprehendmedical:StartPHIDetectionJob */
	static readonly START_PHI_DETECTION_JOB =
		"comprehendmedical:StartPHIDetectionJob";
	/** [Write] comprehendmedical:StartRxNormInferenceJob */
	static readonly START_RX_NORM_INFERENCE_JOB =
		"comprehendmedical:StartRxNormInferenceJob";
	/** [Write] comprehendmedical:StartSNOMEDCTInferenceJob */
	static readonly START_SNOMEDCT_INFERENCE_JOB =
		"comprehendmedical:StartSNOMEDCTInferenceJob";
	/** [Write] comprehendmedical:StopEntitiesDetectionV2Job */
	static readonly STOP_ENTITIES_DETECTION_V2_JOB =
		"comprehendmedical:StopEntitiesDetectionV2Job";
	/** [Write] comprehendmedical:StopICD10CMInferenceJob */
	static readonly STOP_ICD10_CM_INFERENCE_JOB =
		"comprehendmedical:StopICD10CMInferenceJob";
	/** [Write] comprehendmedical:StopPHIDetectionJob */
	static readonly STOP_PHI_DETECTION_JOB =
		"comprehendmedical:StopPHIDetectionJob";
	/** [Write] comprehendmedical:StopRxNormInferenceJob */
	static readonly STOP_RX_NORM_INFERENCE_JOB =
		"comprehendmedical:StopRxNormInferenceJob";
	/** [Write] comprehendmedical:StopSNOMEDCTInferenceJob */
	static readonly STOP_SNOMEDCT_INFERENCE_JOB =
		"comprehendmedical:StopSNOMEDCTInferenceJob";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ComprehendmedicalActions.DESCRIBE_ENTITIES_DETECTION_V2_JOB,
		ComprehendmedicalActions.DESCRIBE_ICD10_CM_INFERENCE_JOB,
		ComprehendmedicalActions.DESCRIBE_PHI_DETECTION_JOB,
		ComprehendmedicalActions.DESCRIBE_RX_NORM_INFERENCE_JOB,
		ComprehendmedicalActions.DESCRIBE_SNOMEDCT_INFERENCE_JOB,
		ComprehendmedicalActions.DETECT_ENTITIES_V2,
		ComprehendmedicalActions.DETECT_PHI,
		ComprehendmedicalActions.INFER_ICD10_CM,
		ComprehendmedicalActions.INFER_RX_NORM,
		ComprehendmedicalActions.INFER_SNOMEDCT,
		ComprehendmedicalActions.LIST_ENTITIES_DETECTION_V2_JOBS,
		ComprehendmedicalActions.LIST_ICD10_CM_INFERENCE_JOBS,
		ComprehendmedicalActions.LIST_PHI_DETECTION_JOBS,
		ComprehendmedicalActions.LIST_RX_NORM_INFERENCE_JOBS,
		ComprehendmedicalActions.LIST_SNOMEDCT_INFERENCE_JOBS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ComprehendmedicalActions.START_ENTITIES_DETECTION_V2_JOB,
		ComprehendmedicalActions.START_ICD10_CM_INFERENCE_JOB,
		ComprehendmedicalActions.START_PHI_DETECTION_JOB,
		ComprehendmedicalActions.START_RX_NORM_INFERENCE_JOB,
		ComprehendmedicalActions.START_SNOMEDCT_INFERENCE_JOB,
		ComprehendmedicalActions.STOP_ENTITIES_DETECTION_V2_JOB,
		ComprehendmedicalActions.STOP_ICD10_CM_INFERENCE_JOB,
		ComprehendmedicalActions.STOP_PHI_DETECTION_JOB,
		ComprehendmedicalActions.STOP_RX_NORM_INFERENCE_JOB,
		ComprehendmedicalActions.STOP_SNOMEDCT_INFERENCE_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for comprehendmedical.
 */
export class ComprehendmedicalOperations {
	/** IAM actions required for the DescribeEntitiesDetectionV2Job API call. */
	static readonly DESCRIBE_ENTITIES_DETECTION_V2_JOB: string[] = [
		"comprehendmedical:DescribeEntitiesDetectionV2Job",
	];
	/** IAM actions required for the DescribeICD10CMInferenceJob API call. */
	static readonly DESCRIBE_ICD10_CM_INFERENCE_JOB: string[] = [
		"comprehendmedical:DescribeICD10CMInferenceJob",
	];
	/** IAM actions required for the DescribePHIDetectionJob API call. */
	static readonly DESCRIBE_PHI_DETECTION_JOB: string[] = [
		"comprehendmedical:DescribePHIDetectionJob",
	];
	/** IAM actions required for the DescribeRxNormInferenceJob API call. */
	static readonly DESCRIBE_RX_NORM_INFERENCE_JOB: string[] = [
		"comprehendmedical:DescribeRxNormInferenceJob",
	];
	/** IAM actions required for the DescribeSNOMEDCTInferenceJob API call. */
	static readonly DESCRIBE_SNOMEDCT_INFERENCE_JOB: string[] = [
		"comprehendmedical:DescribeSNOMEDCTInferenceJob",
	];
	/** IAM actions required for the DetectEntities API call. */
	static readonly DETECT_ENTITIES: string[] = [];
	/** IAM actions required for the DetectEntitiesV2 API call. */
	static readonly DETECT_ENTITIES_V2: string[] = [
		"comprehendmedical:DetectEntitiesV2",
	];
	/** IAM actions required for the DetectPHI API call. */
	static readonly DETECT_PHI: string[] = ["comprehendmedical:DetectPHI"];
	/** IAM actions required for the InferICD10CM API call. */
	static readonly INFER_ICD10_CM: string[] = ["comprehendmedical:InferICD10CM"];
	/** IAM actions required for the InferRxNorm API call. */
	static readonly INFER_RX_NORM: string[] = ["comprehendmedical:InferRxNorm"];
	/** IAM actions required for the InferSNOMEDCT API call. */
	static readonly INFER_SNOMEDCT: string[] = [
		"comprehendmedical:InferSNOMEDCT",
	];
	/** IAM actions required for the ListEntitiesDetectionV2Jobs API call. */
	static readonly LIST_ENTITIES_DETECTION_V2_JOBS: string[] = [
		"comprehendmedical:ListEntitiesDetectionV2Jobs",
	];
	/** IAM actions required for the ListICD10CMInferenceJobs API call. */
	static readonly LIST_ICD10_CM_INFERENCE_JOBS: string[] = [
		"comprehendmedical:ListICD10CMInferenceJobs",
	];
	/** IAM actions required for the ListPHIDetectionJobs API call. */
	static readonly LIST_PHI_DETECTION_JOBS: string[] = [
		"comprehendmedical:ListPHIDetectionJobs",
	];
	/** IAM actions required for the ListRxNormInferenceJobs API call. */
	static readonly LIST_RX_NORM_INFERENCE_JOBS: string[] = [
		"comprehendmedical:ListRxNormInferenceJobs",
	];
	/** IAM actions required for the ListSNOMEDCTInferenceJobs API call. */
	static readonly LIST_SNOMEDCT_INFERENCE_JOBS: string[] = [
		"comprehendmedical:ListSNOMEDCTInferenceJobs",
	];
	/** IAM actions required for the StartEntitiesDetectionV2Job API call. */
	static readonly START_ENTITIES_DETECTION_V2_JOB: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartEntitiesDetectionV2Job",
	];
	/** IAM actions required for the StartICD10CMInferenceJob API call. */
	static readonly START_ICD10_CM_INFERENCE_JOB: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartICD10CMInferenceJob",
	];
	/** IAM actions required for the StartPHIDetectionJob API call. */
	static readonly START_PHI_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartPHIDetectionJob",
	];
	/** IAM actions required for the StartRxNormInferenceJob API call. */
	static readonly START_RX_NORM_INFERENCE_JOB: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartRxNormInferenceJob",
	];
	/** IAM actions required for the StartSNOMEDCTInferenceJob API call. */
	static readonly START_SNOMEDCT_INFERENCE_JOB: string[] = [
		"iam:PassRole",
		"comprehendmedical:StartSNOMEDCTInferenceJob",
	];
	/** IAM actions required for the StopEntitiesDetectionV2Job API call. */
	static readonly STOP_ENTITIES_DETECTION_V2_JOB: string[] = [
		"comprehendmedical:StopEntitiesDetectionV2Job",
	];
	/** IAM actions required for the StopICD10CMInferenceJob API call. */
	static readonly STOP_ICD10_CM_INFERENCE_JOB: string[] = [
		"comprehendmedical:StopICD10CMInferenceJob",
	];
	/** IAM actions required for the StopPHIDetectionJob API call. */
	static readonly STOP_PHI_DETECTION_JOB: string[] = [
		"comprehendmedical:StopPHIDetectionJob",
	];
	/** IAM actions required for the StopRxNormInferenceJob API call. */
	static readonly STOP_RX_NORM_INFERENCE_JOB: string[] = [
		"comprehendmedical:StopRxNormInferenceJob",
	];
	/** IAM actions required for the StopSNOMEDCTInferenceJob API call. */
	static readonly STOP_SNOMEDCT_INFERENCE_JOB: string[] = [
		"comprehendmedical:StopSNOMEDCTInferenceJob",
	];
}

/**
 * Condition key constants and builders for comprehendmedical.
 */
export class ComprehendmedicalConditions {
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
