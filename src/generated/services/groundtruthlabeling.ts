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
	static readonly AssociatePatchToManifestJob =
		"groundtruthlabeling:AssociatePatchToManifestJob";
	/** [Write] groundtruthlabeling:CreateBatch */
	static readonly CreateBatch = "groundtruthlabeling:CreateBatch";
	/** [Write] groundtruthlabeling:CreateIntakeForm */
	static readonly CreateIntakeForm = "groundtruthlabeling:CreateIntakeForm";
	/** [Write] groundtruthlabeling:CreateProject */
	static readonly CreateProject = "groundtruthlabeling:CreateProject";
	/** [Write] groundtruthlabeling:CreateWorkflowDefinition */
	static readonly CreateWorkflowDefinition =
		"groundtruthlabeling:CreateWorkflowDefinition";
	/** [Read] groundtruthlabeling:DescribeConsoleJob */
	static readonly DescribeConsoleJob = "groundtruthlabeling:DescribeConsoleJob";
	/** [Write] groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob */
	static readonly GenerateLIDARPreviewTaskConfigJob =
		"groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob";
	/** [Read] groundtruthlabeling:GetBatch */
	static readonly actionGetBatch = "groundtruthlabeling:GetBatch";
	/** [Read] groundtruthlabeling:GetIntakeFormStatus */
	static readonly actionGetIntakeFormStatus =
		"groundtruthlabeling:GetIntakeFormStatus";
	/** [Read] groundtruthlabeling:ListBatches */
	static readonly ListBatches = "groundtruthlabeling:ListBatches";
	/** [Read] groundtruthlabeling:ListDatasetObjects */
	static readonly ListDatasetObjects = "groundtruthlabeling:ListDatasetObjects";
	/** [Read] groundtruthlabeling:ListProjects */
	static readonly ListProjects = "groundtruthlabeling:ListProjects";
	/** [Write] groundtruthlabeling:RunFilterOrSampleDatasetJob */
	static readonly RunFilterOrSampleDatasetJob =
		"groundtruthlabeling:RunFilterOrSampleDatasetJob";
	/** [Write] groundtruthlabeling:RunGenerateManifestByCrawlingJob */
	static readonly RunGenerateManifestByCrawlingJob =
		"groundtruthlabeling:RunGenerateManifestByCrawlingJob";
	/** [Write] groundtruthlabeling:RunGenerateManifestMetricsJob */
	static readonly RunGenerateManifestMetricsJob =
		"groundtruthlabeling:RunGenerateManifestMetricsJob";
	/** [Write] groundtruthlabeling:UpdateBatch */
	static readonly UpdateBatch = "groundtruthlabeling:UpdateBatch";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GroundtruthlabelingActions.DescribeConsoleJob,
		GroundtruthlabelingActions.actionGetBatch,
		GroundtruthlabelingActions.actionGetIntakeFormStatus,
		GroundtruthlabelingActions.ListBatches,
		GroundtruthlabelingActions.ListDatasetObjects,
		GroundtruthlabelingActions.ListProjects,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GroundtruthlabelingActions.AssociatePatchToManifestJob,
		GroundtruthlabelingActions.CreateBatch,
		GroundtruthlabelingActions.CreateIntakeForm,
		GroundtruthlabelingActions.CreateProject,
		GroundtruthlabelingActions.CreateWorkflowDefinition,
		GroundtruthlabelingActions.GenerateLIDARPreviewTaskConfigJob,
		GroundtruthlabelingActions.RunFilterOrSampleDatasetJob,
		GroundtruthlabelingActions.RunGenerateManifestByCrawlingJob,
		GroundtruthlabelingActions.RunGenerateManifestMetricsJob,
		GroundtruthlabelingActions.UpdateBatch,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
