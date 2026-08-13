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
	static readonly ABORT_MULTIPART_READ_SET_UPLOAD =
		"omics:AbortMultipartReadSetUpload";
	/** [Write] omics:AcceptShare */
	static readonly ACCEPT_SHARE = "omics:AcceptShare";
	/** [Write] omics:BatchDeleteReadSet */
	static readonly BATCH_DELETE_READ_SET = "omics:BatchDeleteReadSet";
	/** [Write] omics:CancelAnnotationImportJob */
	static readonly CANCEL_ANNOTATION_IMPORT_JOB =
		"omics:CancelAnnotationImportJob";
	/** [Write] omics:CancelRun */
	static readonly CANCEL_RUN = "omics:CancelRun";
	/** [Write] omics:CancelRunBatch */
	static readonly CANCEL_RUN_BATCH = "omics:CancelRunBatch";
	/** [Write] omics:CancelVariantImportJob */
	static readonly CANCEL_VARIANT_IMPORT_JOB = "omics:CancelVariantImportJob";
	/** [Write] omics:CompleteMultipartReadSetUpload */
	static readonly COMPLETE_MULTIPART_READ_SET_UPLOAD =
		"omics:CompleteMultipartReadSetUpload";
	/** [Write] omics:CreateAnnotationStore */
	static readonly CREATE_ANNOTATION_STORE = "omics:CreateAnnotationStore";
	/** [Write] omics:CreateAnnotationStoreVersion */
	static readonly CREATE_ANNOTATION_STORE_VERSION =
		"omics:CreateAnnotationStoreVersion";
	/** [Write] omics:CreateConfiguration */
	static readonly CREATE_CONFIGURATION = "omics:CreateConfiguration";
	/** [Write] omics:CreateMultipartReadSetUpload */
	static readonly CREATE_MULTIPART_READ_SET_UPLOAD =
		"omics:CreateMultipartReadSetUpload";
	/** [Write] omics:CreateReferenceStore */
	static readonly CREATE_REFERENCE_STORE = "omics:CreateReferenceStore";
	/** [Write] omics:CreateRunCache */
	static readonly CREATE_RUN_CACHE = "omics:CreateRunCache";
	/** [Write] omics:CreateRunGroup */
	static readonly CREATE_RUN_GROUP = "omics:CreateRunGroup";
	/** [Write] omics:CreateSequenceStore */
	static readonly CREATE_SEQUENCE_STORE = "omics:CreateSequenceStore";
	/** [Write] omics:CreateShare */
	static readonly CREATE_SHARE = "omics:CreateShare";
	/** [Write] omics:CreateVariantStore */
	static readonly CREATE_VARIANT_STORE = "omics:CreateVariantStore";
	/** [Write] omics:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "omics:CreateWorkflow";
	/** [Write] omics:CreateWorkflowVersion */
	static readonly CREATE_WORKFLOW_VERSION = "omics:CreateWorkflowVersion";
	/** [Write] omics:DeleteAnnotationStore */
	static readonly DELETE_ANNOTATION_STORE = "omics:DeleteAnnotationStore";
	/** [Write] omics:DeleteAnnotationStoreVersions */
	static readonly DELETE_ANNOTATION_STORE_VERSIONS =
		"omics:DeleteAnnotationStoreVersions";
	/** [Write] omics:DeleteBatch */
	static readonly DELETE_BATCH = "omics:DeleteBatch";
	/** [Write] omics:DeleteConfiguration */
	static readonly DELETE_CONFIGURATION = "omics:DeleteConfiguration";
	/** [Write] omics:DeleteReference */
	static readonly DELETE_REFERENCE = "omics:DeleteReference";
	/** [Write] omics:DeleteReferenceStore */
	static readonly DELETE_REFERENCE_STORE = "omics:DeleteReferenceStore";
	/** [Write] omics:DeleteRun */
	static readonly DELETE_RUN = "omics:DeleteRun";
	/** [Write] omics:DeleteRunBatch */
	static readonly DELETE_RUN_BATCH = "omics:DeleteRunBatch";
	/** [Write] omics:DeleteRunCache */
	static readonly DELETE_RUN_CACHE = "omics:DeleteRunCache";
	/** [Write] omics:DeleteRunGroup */
	static readonly DELETE_RUN_GROUP = "omics:DeleteRunGroup";
	/** [Write] omics:DeleteS3AccessPolicy */
	static readonly DELETE_S3_ACCESS_POLICY = "omics:DeleteS3AccessPolicy";
	/** [Write] omics:DeleteSequenceStore */
	static readonly DELETE_SEQUENCE_STORE = "omics:DeleteSequenceStore";
	/** [Write] omics:DeleteShare */
	static readonly DELETE_SHARE = "omics:DeleteShare";
	/** [Write] omics:DeleteVariantStore */
	static readonly DELETE_VARIANT_STORE = "omics:DeleteVariantStore";
	/** [Write] omics:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "omics:DeleteWorkflow";
	/** [Write] omics:DeleteWorkflowVersion */
	static readonly DELETE_WORKFLOW_VERSION = "omics:DeleteWorkflowVersion";
	/** [Read] omics:GetAnnotationImportJob */
	static readonly GET_ANNOTATION_IMPORT_JOB = "omics:GetAnnotationImportJob";
	/** [Read] omics:GetAnnotationStore */
	static readonly GET_ANNOTATION_STORE = "omics:GetAnnotationStore";
	/** [Read] omics:GetAnnotationStoreVersion */
	static readonly GET_ANNOTATION_STORE_VERSION =
		"omics:GetAnnotationStoreVersion";
	/** [Read] omics:GetBatch */
	static readonly GET_BATCH = "omics:GetBatch";
	/** [Read] omics:GetConfiguration */
	static readonly GET_CONFIGURATION = "omics:GetConfiguration";
	/** [Read] omics:GetReadSet */
	static readonly GET_READ_SET = "omics:GetReadSet";
	/** [Read] omics:GetReadSetActivationJob */
	static readonly GET_READ_SET_ACTIVATION_JOB = "omics:GetReadSetActivationJob";
	/** [Read] omics:GetReadSetExportJob */
	static readonly GET_READ_SET_EXPORT_JOB = "omics:GetReadSetExportJob";
	/** [Read] omics:GetReadSetImportJob */
	static readonly GET_READ_SET_IMPORT_JOB = "omics:GetReadSetImportJob";
	/** [Read] omics:GetReadSetMetadata */
	static readonly GET_READ_SET_METADATA = "omics:GetReadSetMetadata";
	/** [Read] omics:GetReference */
	static readonly GET_REFERENCE = "omics:GetReference";
	/** [Read] omics:GetReferenceImportJob */
	static readonly GET_REFERENCE_IMPORT_JOB = "omics:GetReferenceImportJob";
	/** [Read] omics:GetReferenceMetadata */
	static readonly GET_REFERENCE_METADATA = "omics:GetReferenceMetadata";
	/** [Read] omics:GetReferenceStore */
	static readonly GET_REFERENCE_STORE = "omics:GetReferenceStore";
	/** [Read] omics:GetRun */
	static readonly GET_RUN = "omics:GetRun";
	/** [Read] omics:GetRunCache */
	static readonly GET_RUN_CACHE = "omics:GetRunCache";
	/** [Read] omics:GetRunGroup */
	static readonly GET_RUN_GROUP = "omics:GetRunGroup";
	/** [Read] omics:GetRunTask */
	static readonly GET_RUN_TASK = "omics:GetRunTask";
	/** [Read] omics:GetS3AccessPolicy */
	static readonly GET_S3_ACCESS_POLICY = "omics:GetS3AccessPolicy";
	/** [Read] omics:GetSequenceStore */
	static readonly GET_SEQUENCE_STORE = "omics:GetSequenceStore";
	/** [Read] omics:GetShare */
	static readonly GET_SHARE = "omics:GetShare";
	/** [Read] omics:GetVariantImportJob */
	static readonly GET_VARIANT_IMPORT_JOB = "omics:GetVariantImportJob";
	/** [Read] omics:GetVariantStore */
	static readonly GET_VARIANT_STORE = "omics:GetVariantStore";
	/** [Read] omics:GetWorkflow */
	static readonly GET_WORKFLOW = "omics:GetWorkflow";
	/** [Read] omics:GetWorkflowVersion */
	static readonly GET_WORKFLOW_VERSION = "omics:GetWorkflowVersion";
	/** [List] omics:ListAnnotationImportJobs */
	static readonly LIST_ANNOTATION_IMPORT_JOBS =
		"omics:ListAnnotationImportJobs";
	/** [List] omics:ListAnnotationStoreVersions */
	static readonly LIST_ANNOTATION_STORE_VERSIONS =
		"omics:ListAnnotationStoreVersions";
	/** [List] omics:ListAnnotationStores */
	static readonly LIST_ANNOTATION_STORES = "omics:ListAnnotationStores";
	/** [List] omics:ListBatch */
	static readonly LIST_BATCH = "omics:ListBatch";
	/** [List] omics:ListConfigurations */
	static readonly LIST_CONFIGURATIONS = "omics:ListConfigurations";
	/** [List] omics:ListMultipartReadSetUploads */
	static readonly LIST_MULTIPART_READ_SET_UPLOADS =
		"omics:ListMultipartReadSetUploads";
	/** [List] omics:ListReadSetActivationJobs */
	static readonly LIST_READ_SET_ACTIVATION_JOBS =
		"omics:ListReadSetActivationJobs";
	/** [List] omics:ListReadSetExportJobs */
	static readonly LIST_READ_SET_EXPORT_JOBS = "omics:ListReadSetExportJobs";
	/** [List] omics:ListReadSetImportJobs */
	static readonly LIST_READ_SET_IMPORT_JOBS = "omics:ListReadSetImportJobs";
	/** [List] omics:ListReadSetUploadParts */
	static readonly LIST_READ_SET_UPLOAD_PARTS = "omics:ListReadSetUploadParts";
	/** [List] omics:ListReadSets */
	static readonly LIST_READ_SETS = "omics:ListReadSets";
	/** [List] omics:ListReferenceImportJobs */
	static readonly LIST_REFERENCE_IMPORT_JOBS = "omics:ListReferenceImportJobs";
	/** [List] omics:ListReferenceStores */
	static readonly LIST_REFERENCE_STORES = "omics:ListReferenceStores";
	/** [List] omics:ListReferences */
	static readonly LIST_REFERENCES = "omics:ListReferences";
	/** [List] omics:ListRunCaches */
	static readonly LIST_RUN_CACHES = "omics:ListRunCaches";
	/** [List] omics:ListRunGroups */
	static readonly LIST_RUN_GROUPS = "omics:ListRunGroups";
	/** [List] omics:ListRunTasks */
	static readonly LIST_RUN_TASKS = "omics:ListRunTasks";
	/** [List] omics:ListRuns */
	static readonly LIST_RUNS = "omics:ListRuns";
	/** [List] omics:ListRunsInBatch */
	static readonly LIST_RUNS_IN_BATCH = "omics:ListRunsInBatch";
	/** [List] omics:ListSequenceStores */
	static readonly LIST_SEQUENCE_STORES = "omics:ListSequenceStores";
	/** [List] omics:ListShares */
	static readonly LIST_SHARES = "omics:ListShares";
	/** [List] omics:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "omics:ListTagsForResource";
	/** [List] omics:ListVariantImportJobs */
	static readonly LIST_VARIANT_IMPORT_JOBS = "omics:ListVariantImportJobs";
	/** [List] omics:ListVariantStores */
	static readonly LIST_VARIANT_STORES = "omics:ListVariantStores";
	/** [List] omics:ListWorkflowVersions */
	static readonly LIST_WORKFLOW_VERSIONS = "omics:ListWorkflowVersions";
	/** [List] omics:ListWorkflows */
	static readonly LIST_WORKFLOWS = "omics:ListWorkflows";
	/** [Write] omics:PutS3AccessPolicy */
	static readonly PUT_S3_ACCESS_POLICY = "omics:PutS3AccessPolicy";
	/** [Write] omics:StartAnnotationImportJob */
	static readonly START_ANNOTATION_IMPORT_JOB =
		"omics:StartAnnotationImportJob";
	/** [Write] omics:StartReadSetActivationJob */
	static readonly START_READ_SET_ACTIVATION_JOB =
		"omics:StartReadSetActivationJob";
	/** [Write] omics:StartReadSetExportJob */
	static readonly START_READ_SET_EXPORT_JOB = "omics:StartReadSetExportJob";
	/** [Write] omics:StartReadSetImportJob */
	static readonly START_READ_SET_IMPORT_JOB = "omics:StartReadSetImportJob";
	/** [Write] omics:StartReferenceImportJob */
	static readonly START_REFERENCE_IMPORT_JOB = "omics:StartReferenceImportJob";
	/** [Write] omics:StartRun */
	static readonly START_RUN = "omics:StartRun";
	/** [Write] omics:StartRunBatch */
	static readonly START_RUN_BATCH = "omics:StartRunBatch";
	/** [Write] omics:StartVariantImportJob */
	static readonly START_VARIANT_IMPORT_JOB = "omics:StartVariantImportJob";
	/** [Tagging] omics:TagResource */
	static readonly TAG_RESOURCE = "omics:TagResource";
	/** [Tagging] omics:UntagResource */
	static readonly UNTAG_RESOURCE = "omics:UntagResource";
	/** [Write] omics:UpdateAnnotationStore */
	static readonly UPDATE_ANNOTATION_STORE = "omics:UpdateAnnotationStore";
	/** [Write] omics:UpdateAnnotationStoreVersion */
	static readonly UPDATE_ANNOTATION_STORE_VERSION =
		"omics:UpdateAnnotationStoreVersion";
	/** [Write] omics:UpdateRunCache */
	static readonly UPDATE_RUN_CACHE = "omics:UpdateRunCache";
	/** [Write] omics:UpdateRunGroup */
	static readonly UPDATE_RUN_GROUP = "omics:UpdateRunGroup";
	/** [Write] omics:UpdateSequenceStore */
	static readonly UPDATE_SEQUENCE_STORE = "omics:UpdateSequenceStore";
	/** [Write] omics:UpdateVariantStore */
	static readonly UPDATE_VARIANT_STORE = "omics:UpdateVariantStore";
	/** [Write] omics:UpdateWorkflow */
	static readonly UPDATE_WORKFLOW = "omics:UpdateWorkflow";
	/** [Write] omics:UpdateWorkflowVersion */
	static readonly UPDATE_WORKFLOW_VERSION = "omics:UpdateWorkflowVersion";
	/** [Write] omics:UploadReadSetPart */
	static readonly UPLOAD_READ_SET_PART = "omics:UploadReadSetPart";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OmicsActions.GET_ANNOTATION_IMPORT_JOB,
		OmicsActions.GET_ANNOTATION_STORE,
		OmicsActions.GET_ANNOTATION_STORE_VERSION,
		OmicsActions.GET_BATCH,
		OmicsActions.GET_CONFIGURATION,
		OmicsActions.GET_READ_SET,
		OmicsActions.GET_READ_SET_ACTIVATION_JOB,
		OmicsActions.GET_READ_SET_EXPORT_JOB,
		OmicsActions.GET_READ_SET_IMPORT_JOB,
		OmicsActions.GET_READ_SET_METADATA,
		OmicsActions.GET_REFERENCE,
		OmicsActions.GET_REFERENCE_IMPORT_JOB,
		OmicsActions.GET_REFERENCE_METADATA,
		OmicsActions.GET_REFERENCE_STORE,
		OmicsActions.GET_RUN,
		OmicsActions.GET_RUN_CACHE,
		OmicsActions.GET_RUN_GROUP,
		OmicsActions.GET_RUN_TASK,
		OmicsActions.GET_S3_ACCESS_POLICY,
		OmicsActions.GET_SEQUENCE_STORE,
		OmicsActions.GET_SHARE,
		OmicsActions.GET_VARIANT_IMPORT_JOB,
		OmicsActions.GET_VARIANT_STORE,
		OmicsActions.GET_WORKFLOW,
		OmicsActions.GET_WORKFLOW_VERSION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OmicsActions.ABORT_MULTIPART_READ_SET_UPLOAD,
		OmicsActions.ACCEPT_SHARE,
		OmicsActions.BATCH_DELETE_READ_SET,
		OmicsActions.CANCEL_ANNOTATION_IMPORT_JOB,
		OmicsActions.CANCEL_RUN,
		OmicsActions.CANCEL_RUN_BATCH,
		OmicsActions.CANCEL_VARIANT_IMPORT_JOB,
		OmicsActions.COMPLETE_MULTIPART_READ_SET_UPLOAD,
		OmicsActions.CREATE_ANNOTATION_STORE,
		OmicsActions.CREATE_ANNOTATION_STORE_VERSION,
		OmicsActions.CREATE_CONFIGURATION,
		OmicsActions.CREATE_MULTIPART_READ_SET_UPLOAD,
		OmicsActions.CREATE_REFERENCE_STORE,
		OmicsActions.CREATE_RUN_CACHE,
		OmicsActions.CREATE_RUN_GROUP,
		OmicsActions.CREATE_SEQUENCE_STORE,
		OmicsActions.CREATE_SHARE,
		OmicsActions.CREATE_VARIANT_STORE,
		OmicsActions.CREATE_WORKFLOW,
		OmicsActions.CREATE_WORKFLOW_VERSION,
		OmicsActions.DELETE_ANNOTATION_STORE,
		OmicsActions.DELETE_ANNOTATION_STORE_VERSIONS,
		OmicsActions.DELETE_BATCH,
		OmicsActions.DELETE_CONFIGURATION,
		OmicsActions.DELETE_REFERENCE,
		OmicsActions.DELETE_REFERENCE_STORE,
		OmicsActions.DELETE_RUN,
		OmicsActions.DELETE_RUN_BATCH,
		OmicsActions.DELETE_RUN_CACHE,
		OmicsActions.DELETE_RUN_GROUP,
		OmicsActions.DELETE_S3_ACCESS_POLICY,
		OmicsActions.DELETE_SEQUENCE_STORE,
		OmicsActions.DELETE_SHARE,
		OmicsActions.DELETE_VARIANT_STORE,
		OmicsActions.DELETE_WORKFLOW,
		OmicsActions.DELETE_WORKFLOW_VERSION,
		OmicsActions.PUT_S3_ACCESS_POLICY,
		OmicsActions.START_ANNOTATION_IMPORT_JOB,
		OmicsActions.START_READ_SET_ACTIVATION_JOB,
		OmicsActions.START_READ_SET_EXPORT_JOB,
		OmicsActions.START_READ_SET_IMPORT_JOB,
		OmicsActions.START_REFERENCE_IMPORT_JOB,
		OmicsActions.START_RUN,
		OmicsActions.START_RUN_BATCH,
		OmicsActions.START_VARIANT_IMPORT_JOB,
		OmicsActions.UPDATE_ANNOTATION_STORE,
		OmicsActions.UPDATE_ANNOTATION_STORE_VERSION,
		OmicsActions.UPDATE_RUN_CACHE,
		OmicsActions.UPDATE_RUN_GROUP,
		OmicsActions.UPDATE_SEQUENCE_STORE,
		OmicsActions.UPDATE_VARIANT_STORE,
		OmicsActions.UPDATE_WORKFLOW,
		OmicsActions.UPDATE_WORKFLOW_VERSION,
		OmicsActions.UPLOAD_READ_SET_PART,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OmicsActions.LIST_ANNOTATION_IMPORT_JOBS,
		OmicsActions.LIST_ANNOTATION_STORE_VERSIONS,
		OmicsActions.LIST_ANNOTATION_STORES,
		OmicsActions.LIST_BATCH,
		OmicsActions.LIST_CONFIGURATIONS,
		OmicsActions.LIST_MULTIPART_READ_SET_UPLOADS,
		OmicsActions.LIST_READ_SET_ACTIVATION_JOBS,
		OmicsActions.LIST_READ_SET_EXPORT_JOBS,
		OmicsActions.LIST_READ_SET_IMPORT_JOBS,
		OmicsActions.LIST_READ_SET_UPLOAD_PARTS,
		OmicsActions.LIST_READ_SETS,
		OmicsActions.LIST_REFERENCE_IMPORT_JOBS,
		OmicsActions.LIST_REFERENCE_STORES,
		OmicsActions.LIST_REFERENCES,
		OmicsActions.LIST_RUN_CACHES,
		OmicsActions.LIST_RUN_GROUPS,
		OmicsActions.LIST_RUN_TASKS,
		OmicsActions.LIST_RUNS,
		OmicsActions.LIST_RUNS_IN_BATCH,
		OmicsActions.LIST_SEQUENCE_STORES,
		OmicsActions.LIST_SHARES,
		OmicsActions.LIST_TAGS_FOR_RESOURCE,
		OmicsActions.LIST_VARIANT_IMPORT_JOBS,
		OmicsActions.LIST_VARIANT_STORES,
		OmicsActions.LIST_WORKFLOW_VERSIONS,
		OmicsActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OmicsActions.TAG_RESOURCE,
		OmicsActions.UNTAG_RESOURCE,
	];
}

const AnnotationStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):annotationStore/(?<annotationStoreName>[^:/?]+)$",
);
const AnnotationStoreVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):annotationStore/(?<annotationStoreName>[^:/?]+)/version/(?<annotationStoreVersionName>[^:/?]+)$",
);
const TaskResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):task/(?<id>[^:/?]+)$",
);
const VariantStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):variantStore/(?<variantStoreName>[^:/?]+)$",
);
const WorkflowVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<id>[^:/?]+)/version/(?<versionName>[^:/?]+)$",
);
const ConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):configuration/(?<name>[^:/?]+)$",
);
const ReadSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):sequenceStore/(?<sequenceStoreId>[^:/?]+)/readSet/(?<readSetId>[^:/?]+)$",
);
const ReferenceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):referenceStore/(?<referenceStoreId>[^:/?]+)/reference/(?<referenceId>[^:/?]+)$",
);
const ReferenceStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):referenceStore/(?<referenceStoreId>[^:/?]+)$",
);
const RunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):run/(?<id>[^:/?]+)$",
);
const RunBatchArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runBatch/(?<batchId>[^:/?]+)$",
);
const RunCacheArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runCache/(?<id>[^:/?]+)$",
);
const RunGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):runGroup/(?<id>[^:/?]+)$",
);
const SequenceStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):sequenceStore/(?<sequenceStoreId>[^:/?]+)$",
);
const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):omics:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for omics resources.
 */
export class OmicsResources {
	/**
	 * Builds an ARN for the AnnotationStore resource.
	 */
	static annotationStore(props: {
		/** The AnnotationStoreName component of the ARN. */
		readonly annotationStoreName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAnnotationStoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		annotationStoreName: string;
	} {
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
	static annotationStoreVersion(props: {
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
	}): string {
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
	static parseAnnotationStoreVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		annotationStoreName: string;
		annotationStoreVersionName: string;
	} {
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
	static taskResource(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTaskResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static variantStore(props: {
		/** The VariantStoreName component of the ARN. */
		readonly variantStoreName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVariantStoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		variantStoreName: string;
	} {
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
	static workflowVersion(props: {
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
	}): string {
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
	static parseWorkflowVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
		versionName: string;
	} {
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
	static configuration(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static readSet(props: {
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
	}): string {
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
	static parseReadSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sequenceStoreId: string;
		readSetId: string;
	} {
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
	static reference(props: {
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
	}): string {
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
	static parseReferenceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		referenceStoreId: string;
		referenceId: string;
	} {
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
	static referenceStore(props: {
		/** The ReferenceStoreId component of the ARN. */
		readonly referenceStoreId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseReferenceStoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		referenceStoreId: string;
	} {
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
	static run(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static runBatch(props: {
		/** The BatchId component of the ARN. */
		readonly batchId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRunBatchArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		batchId: string;
	} {
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
	static runCache(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRunCacheArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static runGroup(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRunGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static sequenceStore(props: {
		/** The SequenceStoreId component of the ARN. */
		readonly sequenceStoreId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSequenceStoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sequenceStoreId: string;
	} {
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
	static workflow(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly ABORT_MULTIPART_READ_SET_UPLOAD: string[] = [
		"omics:AbortMultipartReadSetUpload",
	];
	/** IAM actions required for the AcceptShare API call. */
	static readonly ACCEPT_SHARE: string[] = ["omics:AcceptShare"];
	/** IAM actions required for the BatchDeleteReadSet API call. */
	static readonly BATCH_DELETE_READ_SET: string[] = [
		"omics:BatchDeleteReadSet",
	];
	/** IAM actions required for the CancelAnnotationImportJob API call. */
	static readonly CANCEL_ANNOTATION_IMPORT_JOB: string[] = [
		"omics:CancelAnnotationImportJob",
	];
	/** IAM actions required for the CancelRun API call. */
	static readonly CANCEL_RUN: string[] = ["omics:CancelRun"];
	/** IAM actions required for the CancelRunBatch API call. */
	static readonly CANCEL_RUN_BATCH: string[] = ["omics:CancelRunBatch"];
	/** IAM actions required for the CancelVariantImportJob API call. */
	static readonly CANCEL_VARIANT_IMPORT_JOB: string[] = [
		"omics:CancelVariantImportJob",
	];
	/** IAM actions required for the CompleteMultipartReadSetUpload API call. */
	static readonly COMPLETE_MULTIPART_READ_SET_UPLOAD: string[] = [
		"omics:CompleteMultipartReadSetUpload",
	];
	/** IAM actions required for the CreateAnnotationStore API call. */
	static readonly CREATE_ANNOTATION_STORE: string[] = [
		"omics:CreateAnnotationStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateAnnotationStoreVersion API call. */
	static readonly CREATE_ANNOTATION_STORE_VERSION: string[] = [
		"omics:CreateAnnotationStoreVersion",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CREATE_CONFIGURATION: string[] = [
		"omics:CreateConfiguration",
		"ec2:DescribeSecurityGroups",
		"ec2:DescribeSubnets",
		"codeconnections:PassConnection",
		"iam:PassRole",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateMultipartReadSetUpload API call. */
	static readonly CREATE_MULTIPART_READ_SET_UPLOAD: string[] = [
		"omics:CreateMultipartReadSetUpload",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateReferenceStore API call. */
	static readonly CREATE_REFERENCE_STORE: string[] = [
		"omics:CreateReferenceStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateRunCache API call. */
	static readonly CREATE_RUN_CACHE: string[] = [
		"omics:CreateRunCache",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateRunGroup API call. */
	static readonly CREATE_RUN_GROUP: string[] = [
		"omics:CreateRunGroup",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateSequenceStore API call. */
	static readonly CREATE_SEQUENCE_STORE: string[] = [
		"omics:CreateSequenceStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateShare API call. */
	static readonly CREATE_SHARE: string[] = ["omics:CreateShare"];
	/** IAM actions required for the CreateVariantStore API call. */
	static readonly CREATE_VARIANT_STORE: string[] = [
		"omics:CreateVariantStore",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"omics:CreateWorkflow",
		"codeconnections:PassConnection",
		"omics:TagResource",
	];
	/** IAM actions required for the CreateWorkflowVersion API call. */
	static readonly CREATE_WORKFLOW_VERSION: string[] = [
		"omics:CreateWorkflowVersion",
		"codeconnections:PassConnection",
		"omics:TagResource",
	];
	/** IAM actions required for the DeleteAnnotationStore API call. */
	static readonly DELETE_ANNOTATION_STORE: string[] = [
		"omics:DeleteAnnotationStore",
	];
	/** IAM actions required for the DeleteAnnotationStoreVersions API call. */
	static readonly DELETE_ANNOTATION_STORE_VERSIONS: string[] = [
		"omics:DeleteAnnotationStoreVersions",
	];
	/** IAM actions required for the DeleteBatch API call. */
	static readonly DELETE_BATCH: string[] = ["omics:DeleteBatch"];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DELETE_CONFIGURATION: string[] = [
		"omics:DeleteConfiguration",
	];
	/** IAM actions required for the DeleteReference API call. */
	static readonly DELETE_REFERENCE: string[] = ["omics:DeleteReference"];
	/** IAM actions required for the DeleteReferenceStore API call. */
	static readonly DELETE_REFERENCE_STORE: string[] = [
		"omics:DeleteReferenceStore",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DELETE_RUN: string[] = ["omics:DeleteRun"];
	/** IAM actions required for the DeleteRunBatch API call. */
	static readonly DELETE_RUN_BATCH: string[] = ["omics:DeleteRunBatch"];
	/** IAM actions required for the DeleteRunCache API call. */
	static readonly DELETE_RUN_CACHE: string[] = ["omics:DeleteRunCache"];
	/** IAM actions required for the DeleteRunGroup API call. */
	static readonly DELETE_RUN_GROUP: string[] = ["omics:DeleteRunGroup"];
	/** IAM actions required for the DeleteS3AccessPolicy API call. */
	static readonly DELETE_S3_ACCESS_POLICY: string[] = [
		"omics:DeleteS3AccessPolicy",
	];
	/** IAM actions required for the DeleteSequenceStore API call. */
	static readonly DELETE_SEQUENCE_STORE: string[] = [
		"omics:DeleteSequenceStore",
	];
	/** IAM actions required for the DeleteShare API call. */
	static readonly DELETE_SHARE: string[] = ["omics:DeleteShare"];
	/** IAM actions required for the DeleteVariantStore API call. */
	static readonly DELETE_VARIANT_STORE: string[] = ["omics:DeleteVariantStore"];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = ["omics:DeleteWorkflow"];
	/** IAM actions required for the DeleteWorkflowVersion API call. */
	static readonly DELETE_WORKFLOW_VERSION: string[] = [
		"omics:DeleteWorkflowVersion",
	];
	/** IAM actions required for the GetAnnotationImportJob API call. */
	static readonly GET_ANNOTATION_IMPORT_JOB: string[] = [
		"omics:GetAnnotationImportJob",
	];
	/** IAM actions required for the GetAnnotationStore API call. */
	static readonly GET_ANNOTATION_STORE: string[] = ["omics:GetAnnotationStore"];
	/** IAM actions required for the GetAnnotationStoreVersion API call. */
	static readonly GET_ANNOTATION_STORE_VERSION: string[] = [
		"omics:GetAnnotationStoreVersion",
	];
	/** IAM actions required for the GetBatch API call. */
	static readonly GET_BATCH: string[] = ["omics:GetBatch"];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly GET_CONFIGURATION: string[] = ["omics:GetConfiguration"];
	/** IAM actions required for the GetReadSet API call. */
	static readonly GET_READ_SET: string[] = ["omics:GetReadSet"];
	/** IAM actions required for the GetReadSetActivationJob API call. */
	static readonly GET_READ_SET_ACTIVATION_JOB: string[] = [
		"omics:GetReadSetActivationJob",
	];
	/** IAM actions required for the GetReadSetExportJob API call. */
	static readonly GET_READ_SET_EXPORT_JOB: string[] = [
		"omics:GetReadSetExportJob",
	];
	/** IAM actions required for the GetReadSetImportJob API call. */
	static readonly GET_READ_SET_IMPORT_JOB: string[] = [
		"omics:GetReadSetImportJob",
	];
	/** IAM actions required for the GetReadSetMetadata API call. */
	static readonly GET_READ_SET_METADATA: string[] = [
		"omics:GetReadSetMetadata",
	];
	/** IAM actions required for the GetReference API call. */
	static readonly GET_REFERENCE: string[] = ["omics:GetReference"];
	/** IAM actions required for the GetReferenceImportJob API call. */
	static readonly GET_REFERENCE_IMPORT_JOB: string[] = [
		"omics:GetReferenceImportJob",
	];
	/** IAM actions required for the GetReferenceMetadata API call. */
	static readonly GET_REFERENCE_METADATA: string[] = [
		"omics:GetReferenceMetadata",
	];
	/** IAM actions required for the GetReferenceStore API call. */
	static readonly GET_REFERENCE_STORE: string[] = ["omics:GetReferenceStore"];
	/** IAM actions required for the GetRun API call. */
	static readonly GET_RUN: string[] = ["omics:GetRun"];
	/** IAM actions required for the GetRunCache API call. */
	static readonly GET_RUN_CACHE: string[] = ["omics:GetRunCache"];
	/** IAM actions required for the GetRunGroup API call. */
	static readonly GET_RUN_GROUP: string[] = ["omics:GetRunGroup"];
	/** IAM actions required for the GetRunTask API call. */
	static readonly GET_RUN_TASK: string[] = ["omics:GetRunTask"];
	/** IAM actions required for the GetS3AccessPolicy API call. */
	static readonly GET_S3_ACCESS_POLICY: string[] = ["omics:GetS3AccessPolicy"];
	/** IAM actions required for the GetSequenceStore API call. */
	static readonly GET_SEQUENCE_STORE: string[] = ["omics:GetSequenceStore"];
	/** IAM actions required for the GetShare API call. */
	static readonly GET_SHARE: string[] = ["omics:GetShare"];
	/** IAM actions required for the GetVariantImportJob API call. */
	static readonly GET_VARIANT_IMPORT_JOB: string[] = [
		"omics:GetVariantImportJob",
	];
	/** IAM actions required for the GetVariantStore API call. */
	static readonly GET_VARIANT_STORE: string[] = ["omics:GetVariantStore"];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = ["omics:GetWorkflow"];
	/** IAM actions required for the GetWorkflowVersion API call. */
	static readonly GET_WORKFLOW_VERSION: string[] = ["omics:GetWorkflowVersion"];
	/** IAM actions required for the ListAnnotationImportJobs API call. */
	static readonly LIST_ANNOTATION_IMPORT_JOBS: string[] = [
		"omics:ListAnnotationImportJobs",
	];
	/** IAM actions required for the ListAnnotationStoreVersions API call. */
	static readonly LIST_ANNOTATION_STORE_VERSIONS: string[] = [
		"omics:ListAnnotationStoreVersions",
	];
	/** IAM actions required for the ListAnnotationStores API call. */
	static readonly LIST_ANNOTATION_STORES: string[] = [
		"omics:ListAnnotationStores",
	];
	/** IAM actions required for the ListBatch API call. */
	static readonly LIST_BATCH: string[] = ["omics:ListBatch"];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly LIST_CONFIGURATIONS: string[] = ["omics:ListConfigurations"];
	/** IAM actions required for the ListMultipartReadSetUploads API call. */
	static readonly LIST_MULTIPART_READ_SET_UPLOADS: string[] = [
		"omics:ListMultipartReadSetUploads",
	];
	/** IAM actions required for the ListReadSetActivationJobs API call. */
	static readonly LIST_READ_SET_ACTIVATION_JOBS: string[] = [
		"omics:ListReadSetActivationJobs",
	];
	/** IAM actions required for the ListReadSetExportJobs API call. */
	static readonly LIST_READ_SET_EXPORT_JOBS: string[] = [
		"omics:ListReadSetExportJobs",
	];
	/** IAM actions required for the ListReadSetImportJobs API call. */
	static readonly LIST_READ_SET_IMPORT_JOBS: string[] = [
		"omics:ListReadSetImportJobs",
	];
	/** IAM actions required for the ListReadSetUploadParts API call. */
	static readonly LIST_READ_SET_UPLOAD_PARTS: string[] = [
		"omics:ListReadSetUploadParts",
	];
	/** IAM actions required for the ListReadSets API call. */
	static readonly LIST_READ_SETS: string[] = ["omics:ListReadSets"];
	/** IAM actions required for the ListReferenceImportJobs API call. */
	static readonly LIST_REFERENCE_IMPORT_JOBS: string[] = [
		"omics:ListReferenceImportJobs",
	];
	/** IAM actions required for the ListReferenceStores API call. */
	static readonly LIST_REFERENCE_STORES: string[] = [
		"omics:ListReferenceStores",
	];
	/** IAM actions required for the ListReferences API call. */
	static readonly LIST_REFERENCES: string[] = ["omics:ListReferences"];
	/** IAM actions required for the ListRunCaches API call. */
	static readonly LIST_RUN_CACHES: string[] = ["omics:ListRunCaches"];
	/** IAM actions required for the ListRunGroups API call. */
	static readonly LIST_RUN_GROUPS: string[] = ["omics:ListRunGroups"];
	/** IAM actions required for the ListRunTasks API call. */
	static readonly LIST_RUN_TASKS: string[] = ["omics:ListRunTasks"];
	/** IAM actions required for the ListRuns API call. */
	static readonly LIST_RUNS: string[] = ["omics:ListRuns"];
	/** IAM actions required for the ListRunsInBatch API call. */
	static readonly LIST_RUNS_IN_BATCH: string[] = ["omics:ListRunsInBatch"];
	/** IAM actions required for the ListSequenceStores API call. */
	static readonly LIST_SEQUENCE_STORES: string[] = ["omics:ListSequenceStores"];
	/** IAM actions required for the ListShares API call. */
	static readonly LIST_SHARES: string[] = ["omics:ListShares"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"omics:ListTagsForResource",
	];
	/** IAM actions required for the ListVariantImportJobs API call. */
	static readonly LIST_VARIANT_IMPORT_JOBS: string[] = [
		"omics:ListVariantImportJobs",
	];
	/** IAM actions required for the ListVariantStores API call. */
	static readonly LIST_VARIANT_STORES: string[] = ["omics:ListVariantStores"];
	/** IAM actions required for the ListWorkflowVersions API call. */
	static readonly LIST_WORKFLOW_VERSIONS: string[] = [
		"omics:ListWorkflowVersions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = ["omics:ListWorkflows"];
	/** IAM actions required for the PutS3AccessPolicy API call. */
	static readonly PUT_S3_ACCESS_POLICY: string[] = ["omics:PutS3AccessPolicy"];
	/** IAM actions required for the StartAnnotationImportJob API call. */
	static readonly START_ANNOTATION_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"omics:StartAnnotationImportJob",
	];
	/** IAM actions required for the StartReadSetActivationJob API call. */
	static readonly START_READ_SET_ACTIVATION_JOB: string[] = [
		"omics:StartReadSetActivationJob",
	];
	/** IAM actions required for the StartReadSetExportJob API call. */
	static readonly START_READ_SET_EXPORT_JOB: string[] = [
		"iam:PassRole",
		"omics:StartReadSetExportJob",
	];
	/** IAM actions required for the StartReadSetImportJob API call. */
	static readonly START_READ_SET_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"omics:StartReadSetImportJob",
		"omics:TagResource",
	];
	/** IAM actions required for the StartReferenceImportJob API call. */
	static readonly START_REFERENCE_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"omics:StartReferenceImportJob",
		"omics:TagResource",
	];
	/** IAM actions required for the StartRun API call. */
	static readonly START_RUN: string[] = [
		"iam:PassRole",
		"omics:StartRun",
		"omics:TagResource",
	];
	/** IAM actions required for the StartRunBatch API call. */
	static readonly START_RUN_BATCH: string[] = [
		"iam:PassRole",
		"omics:StartRun",
		"omics:StartRunBatch",
		"omics:TagResource",
	];
	/** IAM actions required for the StartVariantImportJob API call. */
	static readonly START_VARIANT_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"omics:StartVariantImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"omics:CreateRunGroup",
		"omics:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["omics:UntagResource"];
	/** IAM actions required for the UpdateAnnotationStore API call. */
	static readonly UPDATE_ANNOTATION_STORE: string[] = [
		"omics:UpdateAnnotationStore",
	];
	/** IAM actions required for the UpdateAnnotationStoreVersion API call. */
	static readonly UPDATE_ANNOTATION_STORE_VERSION: string[] = [
		"omics:UpdateAnnotationStoreVersion",
	];
	/** IAM actions required for the UpdateRunCache API call. */
	static readonly UPDATE_RUN_CACHE: string[] = ["omics:UpdateRunCache"];
	/** IAM actions required for the UpdateRunGroup API call. */
	static readonly UPDATE_RUN_GROUP: string[] = ["omics:UpdateRunGroup"];
	/** IAM actions required for the UpdateSequenceStore API call. */
	static readonly UPDATE_SEQUENCE_STORE: string[] = [
		"omics:UpdateSequenceStore",
	];
	/** IAM actions required for the UpdateVariantStore API call. */
	static readonly UPDATE_VARIANT_STORE: string[] = ["omics:UpdateVariantStore"];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UPDATE_WORKFLOW: string[] = ["omics:UpdateWorkflow"];
	/** IAM actions required for the UpdateWorkflowVersion API call. */
	static readonly UPDATE_WORKFLOW_VERSION: string[] = [
		"omics:UpdateWorkflowVersion",
	];
	/** IAM actions required for the UploadReadSetPart API call. */
	static readonly UPLOAD_READ_SET_PART: string[] = ["omics:UploadReadSetPart"];
}

/**
 * Condition key constants and builders for omics.
 */
export class OmicsConditions {
	/** Condition keys applicable to the CreateAnnotationStore action. */
	static readonly CREATE_ANNOTATION_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnnotationStoreVersion action. */
	static readonly CREATE_ANNOTATION_STORE_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfiguration action. */
	static readonly CREATE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReferenceStore action. */
	static readonly CREATE_REFERENCE_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRunCache action. */
	static readonly CREATE_RUN_CACHE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRunGroup action. */
	static readonly CREATE_RUN_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSequenceStore action. */
	static readonly CREATE_SEQUENCE_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVariantStore action. */
	static readonly CREATE_VARIANT_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflowVersion action. */
	static readonly CREATE_WORKFLOW_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRun action. */
	static readonly START_RUN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartRunBatch action. */
	static readonly START_RUN_BATCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
