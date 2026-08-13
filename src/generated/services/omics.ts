// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/omics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the omics service.
 */
export class OmicsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "omics";

	/** [Write] omics:AbortMultipartReadSetUpload */
	static readonly AbortMultipartReadSetUpload =
		"omics:AbortMultipartReadSetUpload";
	/** [Write] omics:AcceptShare */
	static readonly AcceptShare = "omics:AcceptShare";
	/** [Write] omics:BatchDeleteReadSet */
	static readonly BatchDeleteReadSet = "omics:BatchDeleteReadSet";
	/** [Write] omics:CancelAnnotationImportJob */
	static readonly CancelAnnotationImportJob = "omics:CancelAnnotationImportJob";
	/** [Write] omics:CancelRun */
	static readonly CancelRun = "omics:CancelRun";
	/** [Write] omics:CancelRunBatch */
	static readonly CancelRunBatch = "omics:CancelRunBatch";
	/** [Write] omics:CancelVariantImportJob */
	static readonly CancelVariantImportJob = "omics:CancelVariantImportJob";
	/** [Write] omics:CompleteMultipartReadSetUpload */
	static readonly CompleteMultipartReadSetUpload =
		"omics:CompleteMultipartReadSetUpload";
	/** [Write] omics:CreateAnnotationStore */
	static readonly CreateAnnotationStore = "omics:CreateAnnotationStore";
	/** [Write] omics:CreateAnnotationStoreVersion */
	static readonly CreateAnnotationStoreVersion =
		"omics:CreateAnnotationStoreVersion";
	/** [Write] omics:CreateConfiguration */
	static readonly CreateConfiguration = "omics:CreateConfiguration";
	/** [Write] omics:CreateMultipartReadSetUpload */
	static readonly CreateMultipartReadSetUpload =
		"omics:CreateMultipartReadSetUpload";
	/** [Write] omics:CreateReferenceStore */
	static readonly CreateReferenceStore = "omics:CreateReferenceStore";
	/** [Write] omics:CreateRunCache */
	static readonly CreateRunCache = "omics:CreateRunCache";
	/** [Write] omics:CreateRunGroup */
	static readonly CreateRunGroup = "omics:CreateRunGroup";
	/** [Write] omics:CreateSequenceStore */
	static readonly CreateSequenceStore = "omics:CreateSequenceStore";
	/** [Write] omics:CreateShare */
	static readonly CreateShare = "omics:CreateShare";
	/** [Write] omics:CreateVariantStore */
	static readonly CreateVariantStore = "omics:CreateVariantStore";
	/** [Write] omics:CreateWorkflow */
	static readonly CreateWorkflow = "omics:CreateWorkflow";
	/** [Write] omics:CreateWorkflowVersion */
	static readonly CreateWorkflowVersion = "omics:CreateWorkflowVersion";
	/** [Write] omics:DeleteAnnotationStore */
	static readonly DeleteAnnotationStore = "omics:DeleteAnnotationStore";
	/** [Write] omics:DeleteAnnotationStoreVersions */
	static readonly DeleteAnnotationStoreVersions =
		"omics:DeleteAnnotationStoreVersions";
	/** [Write] omics:DeleteBatch */
	static readonly DeleteBatch = "omics:DeleteBatch";
	/** [Write] omics:DeleteConfiguration */
	static readonly DeleteConfiguration = "omics:DeleteConfiguration";
	/** [Write] omics:DeleteReference */
	static readonly DeleteReference = "omics:DeleteReference";
	/** [Write] omics:DeleteReferenceStore */
	static readonly DeleteReferenceStore = "omics:DeleteReferenceStore";
	/** [Write] omics:DeleteRun */
	static readonly DeleteRun = "omics:DeleteRun";
	/** [Write] omics:DeleteRunBatch */
	static readonly DeleteRunBatch = "omics:DeleteRunBatch";
	/** [Write] omics:DeleteRunCache */
	static readonly DeleteRunCache = "omics:DeleteRunCache";
	/** [Write] omics:DeleteRunGroup */
	static readonly DeleteRunGroup = "omics:DeleteRunGroup";
	/** [Write] omics:DeleteS3AccessPolicy */
	static readonly DeleteS3AccessPolicy = "omics:DeleteS3AccessPolicy";
	/** [Write] omics:DeleteSequenceStore */
	static readonly DeleteSequenceStore = "omics:DeleteSequenceStore";
	/** [Write] omics:DeleteShare */
	static readonly DeleteShare = "omics:DeleteShare";
	/** [Write] omics:DeleteVariantStore */
	static readonly DeleteVariantStore = "omics:DeleteVariantStore";
	/** [Write] omics:DeleteWorkflow */
	static readonly DeleteWorkflow = "omics:DeleteWorkflow";
	/** [Write] omics:DeleteWorkflowVersion */
	static readonly DeleteWorkflowVersion = "omics:DeleteWorkflowVersion";
	/** [Read] omics:GetAnnotationImportJob */
	static readonly actionGetAnnotationImportJob = "omics:GetAnnotationImportJob";
	/** [Read] omics:GetAnnotationStore */
	static readonly actionGetAnnotationStore = "omics:GetAnnotationStore";
	/** [Read] omics:GetAnnotationStoreVersion */
	static readonly actionGetAnnotationStoreVersion =
		"omics:GetAnnotationStoreVersion";
	/** [Read] omics:GetBatch */
	static readonly actionGetBatch = "omics:GetBatch";
	/** [Read] omics:GetConfiguration */
	static readonly actionGetConfiguration = "omics:GetConfiguration";
	/** [Read] omics:GetReadSet */
	static readonly actionGetReadSet = "omics:GetReadSet";
	/** [Read] omics:GetReadSetActivationJob */
	static readonly actionGetReadSetActivationJob =
		"omics:GetReadSetActivationJob";
	/** [Read] omics:GetReadSetExportJob */
	static readonly actionGetReadSetExportJob = "omics:GetReadSetExportJob";
	/** [Read] omics:GetReadSetImportJob */
	static readonly actionGetReadSetImportJob = "omics:GetReadSetImportJob";
	/** [Read] omics:GetReadSetMetadata */
	static readonly actionGetReadSetMetadata = "omics:GetReadSetMetadata";
	/** [Read] omics:GetReference */
	static readonly actionGetReference = "omics:GetReference";
	/** [Read] omics:GetReferenceImportJob */
	static readonly actionGetReferenceImportJob = "omics:GetReferenceImportJob";
	/** [Read] omics:GetReferenceMetadata */
	static readonly actionGetReferenceMetadata = "omics:GetReferenceMetadata";
	/** [Read] omics:GetReferenceStore */
	static readonly actionGetReferenceStore = "omics:GetReferenceStore";
	/** [Read] omics:GetRun */
	static readonly actionGetRun = "omics:GetRun";
	/** [Read] omics:GetRunCache */
	static readonly actionGetRunCache = "omics:GetRunCache";
	/** [Read] omics:GetRunGroup */
	static readonly actionGetRunGroup = "omics:GetRunGroup";
	/** [Read] omics:GetRunTask */
	static readonly actionGetRunTask = "omics:GetRunTask";
	/** [Read] omics:GetS3AccessPolicy */
	static readonly actionGetS3AccessPolicy = "omics:GetS3AccessPolicy";
	/** [Read] omics:GetSequenceStore */
	static readonly actionGetSequenceStore = "omics:GetSequenceStore";
	/** [Read] omics:GetShare */
	static readonly actionGetShare = "omics:GetShare";
	/** [Read] omics:GetVariantImportJob */
	static readonly actionGetVariantImportJob = "omics:GetVariantImportJob";
	/** [Read] omics:GetVariantStore */
	static readonly actionGetVariantStore = "omics:GetVariantStore";
	/** [Read] omics:GetWorkflow */
	static readonly actionGetWorkflow = "omics:GetWorkflow";
	/** [Read] omics:GetWorkflowVersion */
	static readonly actionGetWorkflowVersion = "omics:GetWorkflowVersion";
	/** [List] omics:ListAnnotationImportJobs */
	static readonly ListAnnotationImportJobs = "omics:ListAnnotationImportJobs";
	/** [List] omics:ListAnnotationStoreVersions */
	static readonly ListAnnotationStoreVersions =
		"omics:ListAnnotationStoreVersions";
	/** [List] omics:ListAnnotationStores */
	static readonly ListAnnotationStores = "omics:ListAnnotationStores";
	/** [List] omics:ListBatch */
	static readonly ListBatch = "omics:ListBatch";
	/** [List] omics:ListConfigurations */
	static readonly ListConfigurations = "omics:ListConfigurations";
	/** [List] omics:ListMultipartReadSetUploads */
	static readonly ListMultipartReadSetUploads =
		"omics:ListMultipartReadSetUploads";
	/** [List] omics:ListReadSetActivationJobs */
	static readonly ListReadSetActivationJobs = "omics:ListReadSetActivationJobs";
	/** [List] omics:ListReadSetExportJobs */
	static readonly ListReadSetExportJobs = "omics:ListReadSetExportJobs";
	/** [List] omics:ListReadSetImportJobs */
	static readonly ListReadSetImportJobs = "omics:ListReadSetImportJobs";
	/** [List] omics:ListReadSetUploadParts */
	static readonly ListReadSetUploadParts = "omics:ListReadSetUploadParts";
	/** [List] omics:ListReadSets */
	static readonly ListReadSets = "omics:ListReadSets";
	/** [List] omics:ListReferenceImportJobs */
	static readonly ListReferenceImportJobs = "omics:ListReferenceImportJobs";
	/** [List] omics:ListReferenceStores */
	static readonly ListReferenceStores = "omics:ListReferenceStores";
	/** [List] omics:ListReferences */
	static readonly ListReferences = "omics:ListReferences";
	/** [List] omics:ListRunCaches */
	static readonly ListRunCaches = "omics:ListRunCaches";
	/** [List] omics:ListRunGroups */
	static readonly ListRunGroups = "omics:ListRunGroups";
	/** [List] omics:ListRunTasks */
	static readonly ListRunTasks = "omics:ListRunTasks";
	/** [List] omics:ListRuns */
	static readonly ListRuns = "omics:ListRuns";
	/** [List] omics:ListRunsInBatch */
	static readonly ListRunsInBatch = "omics:ListRunsInBatch";
	/** [List] omics:ListSequenceStores */
	static readonly ListSequenceStores = "omics:ListSequenceStores";
	/** [List] omics:ListShares */
	static readonly ListShares = "omics:ListShares";
	/** [List] omics:ListTagsForResource */
	static readonly ListTagsForResource = "omics:ListTagsForResource";
	/** [List] omics:ListVariantImportJobs */
	static readonly ListVariantImportJobs = "omics:ListVariantImportJobs";
	/** [List] omics:ListVariantStores */
	static readonly ListVariantStores = "omics:ListVariantStores";
	/** [List] omics:ListWorkflowVersions */
	static readonly ListWorkflowVersions = "omics:ListWorkflowVersions";
	/** [List] omics:ListWorkflows */
	static readonly ListWorkflows = "omics:ListWorkflows";
	/** [Write] omics:PutS3AccessPolicy */
	static readonly PutS3AccessPolicy = "omics:PutS3AccessPolicy";
	/** [Write] omics:StartAnnotationImportJob */
	static readonly StartAnnotationImportJob = "omics:StartAnnotationImportJob";
	/** [Write] omics:StartReadSetActivationJob */
	static readonly StartReadSetActivationJob = "omics:StartReadSetActivationJob";
	/** [Write] omics:StartReadSetExportJob */
	static readonly StartReadSetExportJob = "omics:StartReadSetExportJob";
	/** [Write] omics:StartReadSetImportJob */
	static readonly StartReadSetImportJob = "omics:StartReadSetImportJob";
	/** [Write] omics:StartReferenceImportJob */
	static readonly StartReferenceImportJob = "omics:StartReferenceImportJob";
	/** [Write] omics:StartRun */
	static readonly StartRun = "omics:StartRun";
	/** [Write] omics:StartRunBatch */
	static readonly StartRunBatch = "omics:StartRunBatch";
	/** [Write] omics:StartVariantImportJob */
	static readonly StartVariantImportJob = "omics:StartVariantImportJob";
	/** [Tagging] omics:TagResource */
	static readonly TagResource = "omics:TagResource";
	/** [Tagging] omics:UntagResource */
	static readonly UntagResource = "omics:UntagResource";
	/** [Write] omics:UpdateAnnotationStore */
	static readonly UpdateAnnotationStore = "omics:UpdateAnnotationStore";
	/** [Write] omics:UpdateAnnotationStoreVersion */
	static readonly UpdateAnnotationStoreVersion =
		"omics:UpdateAnnotationStoreVersion";
	/** [Write] omics:UpdateRunCache */
	static readonly UpdateRunCache = "omics:UpdateRunCache";
	/** [Write] omics:UpdateRunGroup */
	static readonly UpdateRunGroup = "omics:UpdateRunGroup";
	/** [Write] omics:UpdateSequenceStore */
	static readonly UpdateSequenceStore = "omics:UpdateSequenceStore";
	/** [Write] omics:UpdateVariantStore */
	static readonly UpdateVariantStore = "omics:UpdateVariantStore";
	/** [Write] omics:UpdateWorkflow */
	static readonly UpdateWorkflow = "omics:UpdateWorkflow";
	/** [Write] omics:UpdateWorkflowVersion */
	static readonly UpdateWorkflowVersion = "omics:UpdateWorkflowVersion";
	/** [Write] omics:UploadReadSetPart */
	static readonly UploadReadSetPart = "omics:UploadReadSetPart";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OmicsActions.actionGetAnnotationImportJob,
		OmicsActions.actionGetAnnotationStore,
		OmicsActions.actionGetAnnotationStoreVersion,
		OmicsActions.actionGetBatch,
		OmicsActions.actionGetConfiguration,
		OmicsActions.actionGetReadSet,
		OmicsActions.actionGetReadSetActivationJob,
		OmicsActions.actionGetReadSetExportJob,
		OmicsActions.actionGetReadSetImportJob,
		OmicsActions.actionGetReadSetMetadata,
		OmicsActions.actionGetReference,
		OmicsActions.actionGetReferenceImportJob,
		OmicsActions.actionGetReferenceMetadata,
		OmicsActions.actionGetReferenceStore,
		OmicsActions.actionGetRun,
		OmicsActions.actionGetRunCache,
		OmicsActions.actionGetRunGroup,
		OmicsActions.actionGetRunTask,
		OmicsActions.actionGetS3AccessPolicy,
		OmicsActions.actionGetSequenceStore,
		OmicsActions.actionGetShare,
		OmicsActions.actionGetVariantImportJob,
		OmicsActions.actionGetVariantStore,
		OmicsActions.actionGetWorkflow,
		OmicsActions.actionGetWorkflowVersion,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OmicsActions.AbortMultipartReadSetUpload,
		OmicsActions.AcceptShare,
		OmicsActions.BatchDeleteReadSet,
		OmicsActions.CancelAnnotationImportJob,
		OmicsActions.CancelRun,
		OmicsActions.CancelRunBatch,
		OmicsActions.CancelVariantImportJob,
		OmicsActions.CompleteMultipartReadSetUpload,
		OmicsActions.CreateAnnotationStore,
		OmicsActions.CreateAnnotationStoreVersion,
		OmicsActions.CreateConfiguration,
		OmicsActions.CreateMultipartReadSetUpload,
		OmicsActions.CreateReferenceStore,
		OmicsActions.CreateRunCache,
		OmicsActions.CreateRunGroup,
		OmicsActions.CreateSequenceStore,
		OmicsActions.CreateShare,
		OmicsActions.CreateVariantStore,
		OmicsActions.CreateWorkflow,
		OmicsActions.CreateWorkflowVersion,
		OmicsActions.DeleteAnnotationStore,
		OmicsActions.DeleteAnnotationStoreVersions,
		OmicsActions.DeleteBatch,
		OmicsActions.DeleteConfiguration,
		OmicsActions.DeleteReference,
		OmicsActions.DeleteReferenceStore,
		OmicsActions.DeleteRun,
		OmicsActions.DeleteRunBatch,
		OmicsActions.DeleteRunCache,
		OmicsActions.DeleteRunGroup,
		OmicsActions.DeleteS3AccessPolicy,
		OmicsActions.DeleteSequenceStore,
		OmicsActions.DeleteShare,
		OmicsActions.DeleteVariantStore,
		OmicsActions.DeleteWorkflow,
		OmicsActions.DeleteWorkflowVersion,
		OmicsActions.PutS3AccessPolicy,
		OmicsActions.StartAnnotationImportJob,
		OmicsActions.StartReadSetActivationJob,
		OmicsActions.StartReadSetExportJob,
		OmicsActions.StartReadSetImportJob,
		OmicsActions.StartReferenceImportJob,
		OmicsActions.StartRun,
		OmicsActions.StartRunBatch,
		OmicsActions.StartVariantImportJob,
		OmicsActions.UpdateAnnotationStore,
		OmicsActions.UpdateAnnotationStoreVersion,
		OmicsActions.UpdateRunCache,
		OmicsActions.UpdateRunGroup,
		OmicsActions.UpdateSequenceStore,
		OmicsActions.UpdateVariantStore,
		OmicsActions.UpdateWorkflow,
		OmicsActions.UpdateWorkflowVersion,
		OmicsActions.UploadReadSetPart,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OmicsActions.ListAnnotationImportJobs,
		OmicsActions.ListAnnotationStoreVersions,
		OmicsActions.ListAnnotationStores,
		OmicsActions.ListBatch,
		OmicsActions.ListConfigurations,
		OmicsActions.ListMultipartReadSetUploads,
		OmicsActions.ListReadSetActivationJobs,
		OmicsActions.ListReadSetExportJobs,
		OmicsActions.ListReadSetImportJobs,
		OmicsActions.ListReadSetUploadParts,
		OmicsActions.ListReadSets,
		OmicsActions.ListReferenceImportJobs,
		OmicsActions.ListReferenceStores,
		OmicsActions.ListReferences,
		OmicsActions.ListRunCaches,
		OmicsActions.ListRunGroups,
		OmicsActions.ListRunTasks,
		OmicsActions.ListRuns,
		OmicsActions.ListRunsInBatch,
		OmicsActions.ListSequenceStores,
		OmicsActions.ListShares,
		OmicsActions.ListTagsForResource,
		OmicsActions.ListVariantImportJobs,
		OmicsActions.ListVariantStores,
		OmicsActions.ListWorkflowVersions,
		OmicsActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OmicsActions.TagResource,
		OmicsActions.UntagResource,
	];
}

/**
 * Properties for building a AnnotationStore ARN.
 */
export interface OmicsAnnotationStoreArnProps {
	/** The AnnotationStoreName component of the ARN. */
	readonly annotationStoreName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AnnotationStore ARN.
 */
export interface OmicsAnnotationStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnnotationStoreName component. */
	readonly annotationStoreName: string;
}

/**
 * Properties for building a AnnotationStoreVersion ARN.
 */
export interface OmicsAnnotationStoreVersionArnProps {
	/** The AnnotationStoreName component of the ARN. */
	readonly annotationStoreName: string;
	/** The AnnotationStoreVersionName component of the ARN. */
	readonly annotationStoreVersionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AnnotationStoreVersion ARN.
 */
export interface OmicsAnnotationStoreVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnnotationStoreName component. */
	readonly annotationStoreName: string;
	/** The AnnotationStoreVersionName component. */
	readonly annotationStoreVersionName: string;
}

/**
 * Properties for building a TaskResource ARN.
 */
export interface OmicsTaskResourceArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TaskResource ARN.
 */
export interface OmicsTaskResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a VariantStore ARN.
 */
export interface OmicsVariantStoreArnProps {
	/** The VariantStoreName component of the ARN. */
	readonly variantStoreName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VariantStore ARN.
 */
export interface OmicsVariantStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VariantStoreName component. */
	readonly variantStoreName: string;
}

/**
 * Properties for building a WorkflowVersion ARN.
 */
export interface OmicsWorkflowVersionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** The VersionName component of the ARN. */
	readonly versionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a WorkflowVersion ARN.
 */
export interface OmicsWorkflowVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
	/** The VersionName component. */
	readonly versionName: string;
}

/**
 * Properties for building a configuration ARN.
 */
export interface OmicsConfigurationArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration ARN.
 */
export interface OmicsConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a readSet ARN.
 */
export interface OmicsReadSetArnProps {
	/** The SequenceStoreId component of the ARN. */
	readonly sequenceStoreId: string;
	/** The ReadSetId component of the ARN. */
	readonly readSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a readSet ARN.
 */
export interface OmicsReadSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SequenceStoreId component. */
	readonly sequenceStoreId: string;
	/** The ReadSetId component. */
	readonly readSetId: string;
}

/**
 * Properties for building a reference ARN.
 */
export interface OmicsReferenceArnProps {
	/** The ReferenceStoreId component of the ARN. */
	readonly referenceStoreId: string;
	/** The ReferenceId component of the ARN. */
	readonly referenceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reference ARN.
 */
export interface OmicsReferenceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReferenceStoreId component. */
	readonly referenceStoreId: string;
	/** The ReferenceId component. */
	readonly referenceId: string;
}

/**
 * Properties for building a referenceStore ARN.
 */
export interface OmicsReferenceStoreArnProps {
	/** The ReferenceStoreId component of the ARN. */
	readonly referenceStoreId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a referenceStore ARN.
 */
export interface OmicsReferenceStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReferenceStoreId component. */
	readonly referenceStoreId: string;
}

/**
 * Properties for building a run ARN.
 */
export interface OmicsRunArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a run ARN.
 */
export interface OmicsRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a runBatch ARN.
 */
export interface OmicsRunBatchArnProps {
	/** The BatchId component of the ARN. */
	readonly batchId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a runBatch ARN.
 */
export interface OmicsRunBatchArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BatchId component. */
	readonly batchId: string;
}

/**
 * Properties for building a runCache ARN.
 */
export interface OmicsRunCacheArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a runCache ARN.
 */
export interface OmicsRunCacheArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a runGroup ARN.
 */
export interface OmicsRunGroupArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a runGroup ARN.
 */
export interface OmicsRunGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a sequenceStore ARN.
 */
export interface OmicsSequenceStoreArnProps {
	/** The SequenceStoreId component of the ARN. */
	readonly sequenceStoreId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sequenceStore ARN.
 */
export interface OmicsSequenceStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SequenceStoreId component. */
	readonly sequenceStoreId: string;
}

/**
 * Properties for building a workflow ARN.
 */
export interface OmicsWorkflowArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflow ARN.
 */
export interface OmicsWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const AnnotationStoreArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):annotationStore\/(?<annotationStoreName>[^:/?]+)$/;
const AnnotationStoreVersionArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):annotationStore\/(?<annotationStoreName>[^:/?]+)\/version\/(?<annotationStoreVersionName>[^:/?]+)$/;
const TaskResourceArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):task\/(?<id>[^:/?]+)$/;
const VariantStoreArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):variantStore\/(?<variantStoreName>[^:/?]+)$/;
const WorkflowVersionArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<id>[^:/?]+)\/version\/(?<versionName>[^:/?]+)$/;
const ConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):configuration\/(?<name>[^:/?]+)$/;
const ReadSetArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):sequenceStore\/(?<sequenceStoreId>[^:/?]+)\/readSet\/(?<readSetId>[^:/?]+)$/;
const ReferenceArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):referenceStore\/(?<referenceStoreId>[^:/?]+)\/reference\/(?<referenceId>[^:/?]+)$/;
const ReferenceStoreArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):referenceStore\/(?<referenceStoreId>[^:/?]+)$/;
const RunArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):run\/(?<id>[^:/?]+)$/;
const RunBatchArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runBatch\/(?<batchId>[^:/?]+)$/;
const RunCacheArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runCache\/(?<id>[^:/?]+)$/;
const RunGroupArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runGroup\/(?<id>[^:/?]+)$/;
const SequenceStoreArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):sequenceStore\/(?<sequenceStoreId>[^:/?]+)$/;
const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for omics resources.
 */
export class OmicsResources {
	/**
	 * Builds an ARN for the AnnotationStore resource.
	 */
	static annotationStore(props: OmicsAnnotationStoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:annotationStore/${props.annotationStoreName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AnnotationStore resource.
	 */
	static isValidAnnotationStoreArn(arn: string): boolean {
		return AnnotationStoreArnRegex.test(arn);
	}

	/**
	 * Parses a AnnotationStore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnnotationStoreArn(
		arn: string,
	): OmicsAnnotationStoreArnComponents {
		const match = AnnotationStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AnnotationStore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			annotationStoreName: match.groups!.annotationStoreName,
		};
	}

	/**
	 * Builds an ARN for the AnnotationStoreVersion resource.
	 */
	static annotationStoreVersion(
		props: OmicsAnnotationStoreVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:annotationStore/${props.annotationStoreName}/version/${props.annotationStoreVersionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AnnotationStoreVersion resource.
	 */
	static isValidAnnotationStoreVersionArn(arn: string): boolean {
		return AnnotationStoreVersionArnRegex.test(arn);
	}

	/**
	 * Parses a AnnotationStoreVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnnotationStoreVersionArn(
		arn: string,
	): OmicsAnnotationStoreVersionArnComponents {
		const match = AnnotationStoreVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AnnotationStoreVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			annotationStoreName: match.groups!.annotationStoreName,
			annotationStoreVersionName: match.groups!.annotationStoreVersionName,
		};
	}

	/**
	 * Builds an ARN for the TaskResource resource.
	 */
	static taskResource(props: OmicsTaskResourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:task/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TaskResource resource.
	 */
	static isValidTaskResourceArn(arn: string): boolean {
		return TaskResourceArnRegex.test(arn);
	}

	/**
	 * Parses a TaskResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskResourceArn(arn: string): OmicsTaskResourceArnComponents {
		const match = TaskResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TaskResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the VariantStore resource.
	 */
	static variantStore(props: OmicsVariantStoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:variantStore/${props.variantStoreName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VariantStore resource.
	 */
	static isValidVariantStoreArn(arn: string): boolean {
		return VariantStoreArnRegex.test(arn);
	}

	/**
	 * Parses a VariantStore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVariantStoreArn(arn: string): OmicsVariantStoreArnComponents {
		const match = VariantStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VariantStore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			variantStoreName: match.groups!.variantStoreName,
		};
	}

	/**
	 * Builds an ARN for the WorkflowVersion resource.
	 */
	static workflowVersion(props: OmicsWorkflowVersionArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.id}/version/${props.versionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the WorkflowVersion resource.
	 */
	static isValidWorkflowVersionArn(arn: string): boolean {
		return WorkflowVersionArnRegex.test(arn);
	}

	/**
	 * Parses a WorkflowVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowVersionArn(
		arn: string,
	): OmicsWorkflowVersionArnComponents {
		const match = WorkflowVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid WorkflowVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
			versionName: match.groups!.versionName,
		};
	}

	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: OmicsConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:configuration/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration resource.
	 */
	static isValidConfigurationArn(arn: string): boolean {
		return ConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationArn(arn: string): OmicsConfigurationArnComponents {
		const match = ConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the readSet resource.
	 */
	static readSet(props: OmicsReadSetArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:sequenceStore/${props.sequenceStoreId}/readSet/${props.readSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the readSet resource.
	 */
	static isValidReadSetArn(arn: string): boolean {
		return ReadSetArnRegex.test(arn);
	}

	/**
	 * Parses a readSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReadSetArn(arn: string): OmicsReadSetArnComponents {
		const match = ReadSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid readSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sequenceStoreId: match.groups!.sequenceStoreId,
			readSetId: match.groups!.readSetId,
		};
	}

	/**
	 * Builds an ARN for the reference resource.
	 */
	static reference(props: OmicsReferenceArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:referenceStore/${props.referenceStoreId}/reference/${props.referenceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reference resource.
	 */
	static isValidReferenceArn(arn: string): boolean {
		return ReferenceArnRegex.test(arn);
	}

	/**
	 * Parses a reference ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReferenceArn(arn: string): OmicsReferenceArnComponents {
		const match = ReferenceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reference ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			referenceStoreId: match.groups!.referenceStoreId,
			referenceId: match.groups!.referenceId,
		};
	}

	/**
	 * Builds an ARN for the referenceStore resource.
	 */
	static referenceStore(props: OmicsReferenceStoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:referenceStore/${props.referenceStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the referenceStore resource.
	 */
	static isValidReferenceStoreArn(arn: string): boolean {
		return ReferenceStoreArnRegex.test(arn);
	}

	/**
	 * Parses a referenceStore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReferenceStoreArn(arn: string): OmicsReferenceStoreArnComponents {
		const match = ReferenceStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid referenceStore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			referenceStoreId: match.groups!.referenceStoreId,
		};
	}

	/**
	 * Builds an ARN for the run resource.
	 */
	static run(props: OmicsRunArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:run/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the run resource.
	 */
	static isValidRunArn(arn: string): boolean {
		return RunArnRegex.test(arn);
	}

	/**
	 * Parses a run ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRunArn(arn: string): OmicsRunArnComponents {
		const match = RunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid run ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the runBatch resource.
	 */
	static runBatch(props: OmicsRunBatchArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:runBatch/${props.batchId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the runBatch resource.
	 */
	static isValidRunBatchArn(arn: string): boolean {
		return RunBatchArnRegex.test(arn);
	}

	/**
	 * Parses a runBatch ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRunBatchArn(arn: string): OmicsRunBatchArnComponents {
		const match = RunBatchArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid runBatch ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			batchId: match.groups!.batchId,
		};
	}

	/**
	 * Builds an ARN for the runCache resource.
	 */
	static runCache(props: OmicsRunCacheArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:runCache/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the runCache resource.
	 */
	static isValidRunCacheArn(arn: string): boolean {
		return RunCacheArnRegex.test(arn);
	}

	/**
	 * Parses a runCache ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRunCacheArn(arn: string): OmicsRunCacheArnComponents {
		const match = RunCacheArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid runCache ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the runGroup resource.
	 */
	static runGroup(props: OmicsRunGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:runGroup/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the runGroup resource.
	 */
	static isValidRunGroupArn(arn: string): boolean {
		return RunGroupArnRegex.test(arn);
	}

	/**
	 * Parses a runGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRunGroupArn(arn: string): OmicsRunGroupArnComponents {
		const match = RunGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid runGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the sequenceStore resource.
	 */
	static sequenceStore(props: OmicsSequenceStoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:sequenceStore/${props.sequenceStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sequenceStore resource.
	 */
	static isValidSequenceStoreArn(arn: string): boolean {
		return SequenceStoreArnRegex.test(arn);
	}

	/**
	 * Parses a sequenceStore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSequenceStoreArn(arn: string): OmicsSequenceStoreArnComponents {
		const match = SequenceStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sequenceStore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sequenceStoreId: match.groups!.sequenceStoreId,
		};
	}

	/**
	 * Builds an ARN for the workflow resource.
	 */
	static workflow(props: OmicsWorkflowArnProps): string {
		return `arn:${props.partition ?? "aws"}:omics:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow resource.
	 */
	static isValidWorkflowArn(arn: string): boolean {
		return WorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a workflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowArn(arn: string): OmicsWorkflowArnComponents {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for omics.
 */
export class OmicsOperations {
	/** IAM actions required for the AbortMultipartReadSetUpload API call. */
	static readonly AbortMultipartReadSetUpload: string[] = [
		"omics:AbortMultipartReadSetUpload",
	];
	/** IAM actions required for the AcceptShare API call. */
	static readonly AcceptShare: string[] = ["omics:AcceptShare"];
	/** IAM actions required for the BatchDeleteReadSet API call. */
	static readonly BatchDeleteReadSet: string[] = ["omics:BatchDeleteReadSet"];
	/** IAM actions required for the CancelAnnotationImportJob API call. */
	static readonly CancelAnnotationImportJob: string[] = [
		"omics:CancelAnnotationImportJob",
	];
	/** IAM actions required for the CancelRun API call. */
	static readonly CancelRun: string[] = ["omics:CancelRun"];
	/** IAM actions required for the CancelRunBatch API call. */
	static readonly CancelRunBatch: string[] = ["omics:CancelRunBatch"];
	/** IAM actions required for the CancelVariantImportJob API call. */
	static readonly CancelVariantImportJob: string[] = [
		"omics:CancelVariantImportJob",
	];
	/** IAM actions required for the CompleteMultipartReadSetUpload API call. */
	static readonly CompleteMultipartReadSetUpload: string[] = [
		"omics:CompleteMultipartReadSetUpload",
	];
	/** IAM actions required for the CreateAnnotationStore API call. */
	static readonly CreateAnnotationStore: string[] = [
		"omics:CreateAnnotationStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateAnnotationStoreVersion API call. */
	static readonly CreateAnnotationStoreVersion: string[] = [
		"omics:CreateAnnotationStoreVersion",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CreateConfiguration: string[] = [
		"omics:CreateConfiguration",
		"ec2:DescribeSecurityGroups",
		"ec2:DescribeSubnets",
		"codeconnections:PassConnection",
		"iam:PassRole",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateMultipartReadSetUpload API call. */
	static readonly CreateMultipartReadSetUpload: string[] = [
		"omics:CreateMultipartReadSetUpload",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateReferenceStore API call. */
	static readonly CreateReferenceStore: string[] = [
		"omics:CreateReferenceStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateRunCache API call. */
	static readonly CreateRunCache: string[] = [
		"omics:CreateRunCache",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateRunGroup API call. */
	static readonly CreateRunGroup: string[] = [
		"omics:CreateRunGroup",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateSequenceStore API call. */
	static readonly CreateSequenceStore: string[] = [
		"omics:CreateSequenceStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateShare API call. */
	static readonly CreateShare: string[] = ["omics:CreateShare"];
	/** IAM actions required for the CreateVariantStore API call. */
	static readonly CreateVariantStore: string[] = [
		"omics:CreateVariantStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CreateWorkflow: string[] = [
		"omics:CreateWorkflow",
		"codeconnections:PassConnection",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateWorkflowVersion API call. */
	static readonly CreateWorkflowVersion: string[] = [
		"omics:CreateWorkflowVersion",
		"codeconnections:PassConnection",
		"omics:TagResource",
	];
	/** IAM actions required for the DeleteAnnotationStore API call. */
	static readonly DeleteAnnotationStore: string[] = [
		"omics:DeleteAnnotationStore",
	];
	/** IAM actions required for the DeleteAnnotationStoreVersions API call. */
	static readonly DeleteAnnotationStoreVersions: string[] = [
		"omics:DeleteAnnotationStoreVersions",
	];
	/** IAM actions required for the DeleteBatch API call. */
	static readonly DeleteBatch: string[] = ["omics:DeleteBatch"];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DeleteConfiguration: string[] = ["omics:DeleteConfiguration"];
	/** IAM actions required for the DeleteReference API call. */
	static readonly DeleteReference: string[] = ["omics:DeleteReference"];
	/** IAM actions required for the DeleteReferenceStore API call. */
	static readonly DeleteReferenceStore: string[] = [
		"omics:DeleteReferenceStore",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DeleteRun: string[] = ["omics:DeleteRun"];
	/** IAM actions required for the DeleteRunBatch API call. */
	static readonly DeleteRunBatch: string[] = ["omics:DeleteRunBatch"];
	/** IAM actions required for the DeleteRunCache API call. */
	static readonly DeleteRunCache: string[] = ["omics:DeleteRunCache"];
	/** IAM actions required for the DeleteRunGroup API call. */
	static readonly DeleteRunGroup: string[] = ["omics:DeleteRunGroup"];
	/** IAM actions required for the DeleteS3AccessPolicy API call. */
	static readonly DeleteS3AccessPolicy: string[] = [
		"omics:DeleteS3AccessPolicy",
	];
	/** IAM actions required for the DeleteSequenceStore API call. */
	static readonly DeleteSequenceStore: string[] = ["omics:DeleteSequenceStore"];
	/** IAM actions required for the DeleteShare API call. */
	static readonly DeleteShare: string[] = ["omics:DeleteShare"];
	/** IAM actions required for the DeleteVariantStore API call. */
	static readonly DeleteVariantStore: string[] = ["omics:DeleteVariantStore"];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = ["omics:DeleteWorkflow"];
	/** IAM actions required for the DeleteWorkflowVersion API call. */
	static readonly DeleteWorkflowVersion: string[] = [
		"omics:DeleteWorkflowVersion",
	];
	/** IAM actions required for the GetAnnotationImportJob API call. */
	static readonly opGetAnnotationImportJob: string[] = [
		"omics:GetAnnotationImportJob",
	];
	/** IAM actions required for the GetAnnotationStore API call. */
	static readonly opGetAnnotationStore: string[] = ["omics:GetAnnotationStore"];
	/** IAM actions required for the GetAnnotationStoreVersion API call. */
	static readonly opGetAnnotationStoreVersion: string[] = [
		"omics:GetAnnotationStoreVersion",
	];
	/** IAM actions required for the GetBatch API call. */
	static readonly opGetBatch: string[] = ["omics:GetBatch"];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly opGetConfiguration: string[] = ["omics:GetConfiguration"];
	/** IAM actions required for the GetReadSet API call. */
	static readonly opGetReadSet: string[] = ["omics:GetReadSet"];
	/** IAM actions required for the GetReadSetActivationJob API call. */
	static readonly opGetReadSetActivationJob: string[] = [
		"omics:GetReadSetActivationJob",
	];
	/** IAM actions required for the GetReadSetExportJob API call. */
	static readonly opGetReadSetExportJob: string[] = [
		"omics:GetReadSetExportJob",
	];
	/** IAM actions required for the GetReadSetImportJob API call. */
	static readonly opGetReadSetImportJob: string[] = [
		"omics:GetReadSetImportJob",
	];
	/** IAM actions required for the GetReadSetMetadata API call. */
	static readonly opGetReadSetMetadata: string[] = ["omics:GetReadSetMetadata"];
	/** IAM actions required for the GetReference API call. */
	static readonly opGetReference: string[] = ["omics:GetReference"];
	/** IAM actions required for the GetReferenceImportJob API call. */
	static readonly opGetReferenceImportJob: string[] = [
		"omics:GetReferenceImportJob",
	];
	/** IAM actions required for the GetReferenceMetadata API call. */
	static readonly opGetReferenceMetadata: string[] = [
		"omics:GetReferenceMetadata",
	];
	/** IAM actions required for the GetReferenceStore API call. */
	static readonly opGetReferenceStore: string[] = ["omics:GetReferenceStore"];
	/** IAM actions required for the GetRun API call. */
	static readonly opGetRun: string[] = ["omics:GetRun"];
	/** IAM actions required for the GetRunCache API call. */
	static readonly opGetRunCache: string[] = ["omics:GetRunCache"];
	/** IAM actions required for the GetRunGroup API call. */
	static readonly opGetRunGroup: string[] = ["omics:GetRunGroup"];
	/** IAM actions required for the GetRunTask API call. */
	static readonly opGetRunTask: string[] = ["omics:GetRunTask"];
	/** IAM actions required for the GetS3AccessPolicy API call. */
	static readonly opGetS3AccessPolicy: string[] = ["omics:GetS3AccessPolicy"];
	/** IAM actions required for the GetSequenceStore API call. */
	static readonly opGetSequenceStore: string[] = ["omics:GetSequenceStore"];
	/** IAM actions required for the GetShare API call. */
	static readonly opGetShare: string[] = ["omics:GetShare"];
	/** IAM actions required for the GetVariantImportJob API call. */
	static readonly opGetVariantImportJob: string[] = [
		"omics:GetVariantImportJob",
	];
	/** IAM actions required for the GetVariantStore API call. */
	static readonly opGetVariantStore: string[] = ["omics:GetVariantStore"];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = ["omics:GetWorkflow"];
	/** IAM actions required for the GetWorkflowVersion API call. */
	static readonly opGetWorkflowVersion: string[] = ["omics:GetWorkflowVersion"];
	/** IAM actions required for the ListAnnotationImportJobs API call. */
	static readonly ListAnnotationImportJobs: string[] = [
		"omics:ListAnnotationImportJobs",
	];
	/** IAM actions required for the ListAnnotationStoreVersions API call. */
	static readonly ListAnnotationStoreVersions: string[] = [
		"omics:ListAnnotationStoreVersions",
	];
	/** IAM actions required for the ListAnnotationStores API call. */
	static readonly ListAnnotationStores: string[] = [
		"omics:ListAnnotationStores",
	];
	/** IAM actions required for the ListBatch API call. */
	static readonly ListBatch: string[] = ["omics:ListBatch"];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly ListConfigurations: string[] = ["omics:ListConfigurations"];
	/** IAM actions required for the ListMultipartReadSetUploads API call. */
	static readonly ListMultipartReadSetUploads: string[] = [
		"omics:ListMultipartReadSetUploads",
	];
	/** IAM actions required for the ListReadSetActivationJobs API call. */
	static readonly ListReadSetActivationJobs: string[] = [
		"omics:ListReadSetActivationJobs",
	];
	/** IAM actions required for the ListReadSetExportJobs API call. */
	static readonly ListReadSetExportJobs: string[] = [
		"omics:ListReadSetExportJobs",
	];
	/** IAM actions required for the ListReadSetImportJobs API call. */
	static readonly ListReadSetImportJobs: string[] = [
		"omics:ListReadSetImportJobs",
	];
	/** IAM actions required for the ListReadSetUploadParts API call. */
	static readonly ListReadSetUploadParts: string[] = [
		"omics:ListReadSetUploadParts",
	];
	/** IAM actions required for the ListReadSets API call. */
	static readonly ListReadSets: string[] = ["omics:ListReadSets"];
	/** IAM actions required for the ListReferenceImportJobs API call. */
	static readonly ListReferenceImportJobs: string[] = [
		"omics:ListReferenceImportJobs",
	];
	/** IAM actions required for the ListReferenceStores API call. */
	static readonly ListReferenceStores: string[] = ["omics:ListReferenceStores"];
	/** IAM actions required for the ListReferences API call. */
	static readonly ListReferences: string[] = ["omics:ListReferences"];
	/** IAM actions required for the ListRunCaches API call. */
	static readonly ListRunCaches: string[] = ["omics:ListRunCaches"];
	/** IAM actions required for the ListRunGroups API call. */
	static readonly ListRunGroups: string[] = ["omics:ListRunGroups"];
	/** IAM actions required for the ListRunTasks API call. */
	static readonly ListRunTasks: string[] = ["omics:ListRunTasks"];
	/** IAM actions required for the ListRuns API call. */
	static readonly ListRuns: string[] = ["omics:ListRuns"];
	/** IAM actions required for the ListRunsInBatch API call. */
	static readonly ListRunsInBatch: string[] = ["omics:ListRunsInBatch"];
	/** IAM actions required for the ListSequenceStores API call. */
	static readonly ListSequenceStores: string[] = ["omics:ListSequenceStores"];
	/** IAM actions required for the ListShares API call. */
	static readonly ListShares: string[] = ["omics:ListShares"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["omics:ListTagsForResource"];
	/** IAM actions required for the ListVariantImportJobs API call. */
	static readonly ListVariantImportJobs: string[] = [
		"omics:ListVariantImportJobs",
	];
	/** IAM actions required for the ListVariantStores API call. */
	static readonly ListVariantStores: string[] = ["omics:ListVariantStores"];
	/** IAM actions required for the ListWorkflowVersions API call. */
	static readonly ListWorkflowVersions: string[] = [
		"omics:ListWorkflowVersions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = ["omics:ListWorkflows"];
	/** IAM actions required for the PutS3AccessPolicy API call. */
	static readonly PutS3AccessPolicy: string[] = ["omics:PutS3AccessPolicy"];
	/** IAM actions required for the StartAnnotationImportJob API call. */
	static readonly StartAnnotationImportJob: string[] = [
		"iam:PassRole",
		"omics:StartAnnotationImportJob",
	];
	/** IAM actions required for the StartReadSetActivationJob API call. */
	static readonly StartReadSetActivationJob: string[] = [
		"omics:StartReadSetActivationJob",
	];
	/** IAM actions required for the StartReadSetExportJob API call. */
	static readonly StartReadSetExportJob: string[] = [
		"iam:PassRole",
		"omics:StartReadSetExportJob",
	];
	/** IAM actions required for the StartReadSetImportJob API call. */
	static readonly StartReadSetImportJob: string[] = [
		"iam:PassRole",
		"omics:StartReadSetImportJob",
		"omics:TagResource",
	];
	/** IAM actions required for the StartReferenceImportJob API call. */
	static readonly StartReferenceImportJob: string[] = [
		"iam:PassRole",
		"omics:StartReferenceImportJob",
		"omics:TagResource",
	];
	/** IAM actions required for the StartRun API call. */
	static readonly StartRun: string[] = [
		"iam:PassRole",
		"omics:StartRun",
		"omics:TagResource",
	];
	/** IAM actions required for the StartRunBatch API call. */
	static readonly StartRunBatch: string[] = [
		"iam:PassRole",
		"omics:StartRun",
		"omics:StartRunBatch",
		"omics:TagResource",
	];
	/** IAM actions required for the StartVariantImportJob API call. */
	static readonly StartVariantImportJob: string[] = [
		"iam:PassRole",
		"omics:StartVariantImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"omics:CreateRunGroup",
		"omics:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["omics:UntagResource"];
	/** IAM actions required for the UpdateAnnotationStore API call. */
	static readonly UpdateAnnotationStore: string[] = [
		"omics:UpdateAnnotationStore",
	];
	/** IAM actions required for the UpdateAnnotationStoreVersion API call. */
	static readonly UpdateAnnotationStoreVersion: string[] = [
		"omics:UpdateAnnotationStoreVersion",
	];
	/** IAM actions required for the UpdateRunCache API call. */
	static readonly UpdateRunCache: string[] = ["omics:UpdateRunCache"];
	/** IAM actions required for the UpdateRunGroup API call. */
	static readonly UpdateRunGroup: string[] = ["omics:UpdateRunGroup"];
	/** IAM actions required for the UpdateSequenceStore API call. */
	static readonly UpdateSequenceStore: string[] = ["omics:UpdateSequenceStore"];
	/** IAM actions required for the UpdateVariantStore API call. */
	static readonly UpdateVariantStore: string[] = ["omics:UpdateVariantStore"];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UpdateWorkflow: string[] = ["omics:UpdateWorkflow"];
	/** IAM actions required for the UpdateWorkflowVersion API call. */
	static readonly UpdateWorkflowVersion: string[] = [
		"omics:UpdateWorkflowVersion",
	];
	/** IAM actions required for the UploadReadSetPart API call. */
	static readonly UploadReadSetPart: string[] = ["omics:UploadReadSetPart"];
}

/**
 * Condition key constants and builders for omics.
 */
export class OmicsConditions {
	/** Condition keys applicable to the CreateAnnotationStore action. */
	static readonly CreateAnnotationStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnnotationStoreVersion action. */
	static readonly CreateAnnotationStoreVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfiguration action. */
	static readonly CreateConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReferenceStore action. */
	static readonly CreateReferenceStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRunCache action. */
	static readonly CreateRunCacheConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRunGroup action. */
	static readonly CreateRunGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSequenceStore action. */
	static readonly CreateSequenceStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVariantStore action. */
	static readonly CreateVariantStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflowVersion action. */
	static readonly CreateWorkflowVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRun action. */
	static readonly StartRunConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRunBatch action. */
	static readonly StartRunBatchConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
