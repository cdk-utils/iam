// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/groundtruthlabeling.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the groundtruthlabeling service.
 */
export class GroundtruthlabelingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "groundtruthlabeling";

	/** [Write] groundtruthlabeling:AssociatePatchToManifestJob */
	static readonly ASSOCIATE_PATCH_TO_MANIFEST_JOB =
		"groundtruthlabeling:AssociatePatchToManifestJob";
	/** [Write] groundtruthlabeling:CreateBatch */
	static readonly CREATE_BATCH = "groundtruthlabeling:CreateBatch";
	/** [Write] groundtruthlabeling:CreateIntakeForm */
	static readonly CREATE_INTAKE_FORM = "groundtruthlabeling:CreateIntakeForm";
	/** [Write] groundtruthlabeling:CreateProject */
	static readonly CREATE_PROJECT = "groundtruthlabeling:CreateProject";
	/** [Write] groundtruthlabeling:CreateWorkflowDefinition */
	static readonly CREATE_WORKFLOW_DEFINITION =
		"groundtruthlabeling:CreateWorkflowDefinition";
	/** [Read] groundtruthlabeling:DescribeConsoleJob */
	static readonly DESCRIBE_CONSOLE_JOB =
		"groundtruthlabeling:DescribeConsoleJob";
	/** [Write] groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob */
	static readonly GENERATE_LIDAR_PREVIEW_TASK_CONFIG_JOB =
		"groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob";
	/** [Read] groundtruthlabeling:GetBatch */
	static readonly GET_BATCH = "groundtruthlabeling:GetBatch";
	/** [Read] groundtruthlabeling:GetIntakeFormStatus */
	static readonly GET_INTAKE_FORM_STATUS =
		"groundtruthlabeling:GetIntakeFormStatus";
	/** [Read] groundtruthlabeling:ListBatches */
	static readonly LIST_BATCHES = "groundtruthlabeling:ListBatches";
	/** [Read] groundtruthlabeling:ListDatasetObjects */
	static readonly LIST_DATASET_OBJECTS =
		"groundtruthlabeling:ListDatasetObjects";
	/** [Read] groundtruthlabeling:ListProjects */
	static readonly LIST_PROJECTS = "groundtruthlabeling:ListProjects";
	/** [Write] groundtruthlabeling:RunFilterOrSampleDatasetJob */
	static readonly RUN_FILTER_OR_SAMPLE_DATASET_JOB =
		"groundtruthlabeling:RunFilterOrSampleDatasetJob";
	/** [Write] groundtruthlabeling:RunGenerateManifestByCrawlingJob */
	static readonly RUN_GENERATE_MANIFEST_BY_CRAWLING_JOB =
		"groundtruthlabeling:RunGenerateManifestByCrawlingJob";
	/** [Write] groundtruthlabeling:RunGenerateManifestMetricsJob */
	static readonly RUN_GENERATE_MANIFEST_METRICS_JOB =
		"groundtruthlabeling:RunGenerateManifestMetricsJob";
	/** [Write] groundtruthlabeling:UpdateBatch */
	static readonly UPDATE_BATCH = "groundtruthlabeling:UpdateBatch";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GroundtruthlabelingActions.DESCRIBE_CONSOLE_JOB,
		GroundtruthlabelingActions.GET_BATCH,
		GroundtruthlabelingActions.GET_INTAKE_FORM_STATUS,
		GroundtruthlabelingActions.LIST_BATCHES,
		GroundtruthlabelingActions.LIST_DATASET_OBJECTS,
		GroundtruthlabelingActions.LIST_PROJECTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GroundtruthlabelingActions.ASSOCIATE_PATCH_TO_MANIFEST_JOB,
		GroundtruthlabelingActions.CREATE_BATCH,
		GroundtruthlabelingActions.CREATE_INTAKE_FORM,
		GroundtruthlabelingActions.CREATE_PROJECT,
		GroundtruthlabelingActions.CREATE_WORKFLOW_DEFINITION,
		GroundtruthlabelingActions.GENERATE_LIDAR_PREVIEW_TASK_CONFIG_JOB,
		GroundtruthlabelingActions.RUN_FILTER_OR_SAMPLE_DATASET_JOB,
		GroundtruthlabelingActions.RUN_GENERATE_MANIFEST_BY_CRAWLING_JOB,
		GroundtruthlabelingActions.RUN_GENERATE_MANIFEST_METRICS_JOB,
		GroundtruthlabelingActions.UPDATE_BATCH,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
