// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lookoutequipment.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lookoutequipment service.
 */
export class LookoutEquipmentActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lookoutequipment";

	/** [Write] lookoutequipment:CreateDataset */
	static readonly CREATE_DATASET = "lookoutequipment:CreateDataset";
	/** [Write] lookoutequipment:CreateInferenceScheduler */
	static readonly CREATE_INFERENCE_SCHEDULER =
		"lookoutequipment:CreateInferenceScheduler";
	/** [Write] lookoutequipment:CreateLabel */
	static readonly CREATE_LABEL = "lookoutequipment:CreateLabel";
	/** [Write] lookoutequipment:CreateLabelGroup */
	static readonly CREATE_LABEL_GROUP = "lookoutequipment:CreateLabelGroup";
	/** [Write] lookoutequipment:CreateModel */
	static readonly CREATE_MODEL = "lookoutequipment:CreateModel";
	/** [Write] lookoutequipment:CreateRetrainingScheduler */
	static readonly CREATE_RETRAINING_SCHEDULER =
		"lookoutequipment:CreateRetrainingScheduler";
	/** [Write] lookoutequipment:DeleteDataset */
	static readonly DELETE_DATASET = "lookoutequipment:DeleteDataset";
	/** [Write] lookoutequipment:DeleteInferenceScheduler */
	static readonly DELETE_INFERENCE_SCHEDULER =
		"lookoutequipment:DeleteInferenceScheduler";
	/** [Write] lookoutequipment:DeleteLabel */
	static readonly DELETE_LABEL = "lookoutequipment:DeleteLabel";
	/** [Write] lookoutequipment:DeleteLabelGroup */
	static readonly DELETE_LABEL_GROUP = "lookoutequipment:DeleteLabelGroup";
	/** [Write] lookoutequipment:DeleteModel */
	static readonly DELETE_MODEL = "lookoutequipment:DeleteModel";
	/** [Write] lookoutequipment:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"lookoutequipment:DeleteResourcePolicy";
	/** [Write] lookoutequipment:DeleteRetrainingScheduler */
	static readonly DELETE_RETRAINING_SCHEDULER =
		"lookoutequipment:DeleteRetrainingScheduler";
	/** [Read] lookoutequipment:DescribeDataIngestionJob */
	static readonly DESCRIBE_DATA_INGESTION_JOB =
		"lookoutequipment:DescribeDataIngestionJob";
	/** [Read] lookoutequipment:DescribeDataset */
	static readonly DESCRIBE_DATASET = "lookoutequipment:DescribeDataset";
	/** [Read] lookoutequipment:DescribeInferenceScheduler */
	static readonly DESCRIBE_INFERENCE_SCHEDULER =
		"lookoutequipment:DescribeInferenceScheduler";
	/** [Read] lookoutequipment:DescribeLabelGroup */
	static readonly DESCRIBE_LABEL_GROUP = "lookoutequipment:DescribeLabelGroup";
	/** [Read] lookoutequipment:DescribeModel */
	static readonly DESCRIBE_MODEL = "lookoutequipment:DescribeModel";
	/** [Read] lookoutequipment:DescribeModelVersion */
	static readonly DESCRIBE_MODEL_VERSION =
		"lookoutequipment:DescribeModelVersion";
	/** [Read] lookoutequipment:DescribeResourcePolicy */
	static readonly DESCRIBE_RESOURCE_POLICY =
		"lookoutequipment:DescribeResourcePolicy";
	/** [Read] lookoutequipment:DescribeRetrainingScheduler */
	static readonly DESCRIBE_RETRAINING_SCHEDULER =
		"lookoutequipment:DescribeRetrainingScheduler";
	/** [Read] lookoutequipment:Describelabel */
	static readonly DESCRIBELABEL = "lookoutequipment:Describelabel";
	/** [Write] lookoutequipment:ImportDataset */
	static readonly IMPORT_DATASET = "lookoutequipment:ImportDataset";
	/** [Write] lookoutequipment:ImportModelVersion */
	static readonly IMPORT_MODEL_VERSION = "lookoutequipment:ImportModelVersion";
	/** [List] lookoutequipment:ListDataIngestionJobs */
	static readonly LIST_DATA_INGESTION_JOBS =
		"lookoutequipment:ListDataIngestionJobs";
	/** [List] lookoutequipment:ListDatasets */
	static readonly LIST_DATASETS = "lookoutequipment:ListDatasets";
	/** [Read] lookoutequipment:ListInferenceEvents */
	static readonly LIST_INFERENCE_EVENTS =
		"lookoutequipment:ListInferenceEvents";
	/** [Read] lookoutequipment:ListInferenceExecutions */
	static readonly LIST_INFERENCE_EXECUTIONS =
		"lookoutequipment:ListInferenceExecutions";
	/** [List] lookoutequipment:ListInferenceSchedulers */
	static readonly LIST_INFERENCE_SCHEDULERS =
		"lookoutequipment:ListInferenceSchedulers";
	/** [List] lookoutequipment:ListLabelGroups */
	static readonly LIST_LABEL_GROUPS = "lookoutequipment:ListLabelGroups";
	/** [List] lookoutequipment:ListLabels */
	static readonly LIST_LABELS = "lookoutequipment:ListLabels";
	/** [List] lookoutequipment:ListModelVersions */
	static readonly LIST_MODEL_VERSIONS = "lookoutequipment:ListModelVersions";
	/** [List] lookoutequipment:ListModels */
	static readonly LIST_MODELS = "lookoutequipment:ListModels";
	/** [List] lookoutequipment:ListRetrainingSchedulers */
	static readonly LIST_RETRAINING_SCHEDULERS =
		"lookoutequipment:ListRetrainingSchedulers";
	/** [List] lookoutequipment:ListSensorStatistics */
	static readonly LIST_SENSOR_STATISTICS =
		"lookoutequipment:ListSensorStatistics";
	/** [Read] lookoutequipment:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"lookoutequipment:ListTagsForResource";
	/** [Write] lookoutequipment:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "lookoutequipment:PutResourcePolicy";
	/** [Write] lookoutequipment:StartDataIngestionJob */
	static readonly START_DATA_INGESTION_JOB =
		"lookoutequipment:StartDataIngestionJob";
	/** [Write] lookoutequipment:StartInferenceScheduler */
	static readonly START_INFERENCE_SCHEDULER =
		"lookoutequipment:StartInferenceScheduler";
	/** [Write] lookoutequipment:StartRetrainingScheduler */
	static readonly START_RETRAINING_SCHEDULER =
		"lookoutequipment:StartRetrainingScheduler";
	/** [Write] lookoutequipment:StopInferenceScheduler */
	static readonly STOP_INFERENCE_SCHEDULER =
		"lookoutequipment:StopInferenceScheduler";
	/** [Write] lookoutequipment:StopRetrainingScheduler */
	static readonly STOP_RETRAINING_SCHEDULER =
		"lookoutequipment:StopRetrainingScheduler";
	/** [Tagging] lookoutequipment:TagResource */
	static readonly TAG_RESOURCE = "lookoutequipment:TagResource";
	/** [Tagging] lookoutequipment:UntagResource */
	static readonly UNTAG_RESOURCE = "lookoutequipment:UntagResource";
	/** [Write] lookoutequipment:UpdateActiveModelVersion */
	static readonly UPDATE_ACTIVE_MODEL_VERSION =
		"lookoutequipment:UpdateActiveModelVersion";
	/** [Write] lookoutequipment:UpdateInferenceScheduler */
	static readonly UPDATE_INFERENCE_SCHEDULER =
		"lookoutequipment:UpdateInferenceScheduler";
	/** [Write] lookoutequipment:UpdateLabelGroup */
	static readonly UPDATE_LABEL_GROUP = "lookoutequipment:UpdateLabelGroup";
	/** [Write] lookoutequipment:UpdateModel */
	static readonly UPDATE_MODEL = "lookoutequipment:UpdateModel";
	/** [Write] lookoutequipment:UpdateRetrainingScheduler */
	static readonly UPDATE_RETRAINING_SCHEDULER =
		"lookoutequipment:UpdateRetrainingScheduler";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LookoutEquipmentActions.DESCRIBE_DATA_INGESTION_JOB,
		LookoutEquipmentActions.DESCRIBE_DATASET,
		LookoutEquipmentActions.DESCRIBE_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.DESCRIBE_LABEL_GROUP,
		LookoutEquipmentActions.DESCRIBE_MODEL,
		LookoutEquipmentActions.DESCRIBE_MODEL_VERSION,
		LookoutEquipmentActions.DESCRIBE_RESOURCE_POLICY,
		LookoutEquipmentActions.DESCRIBE_RETRAINING_SCHEDULER,
		LookoutEquipmentActions.DESCRIBELABEL,
		LookoutEquipmentActions.LIST_INFERENCE_EVENTS,
		LookoutEquipmentActions.LIST_INFERENCE_EXECUTIONS,
		LookoutEquipmentActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LookoutEquipmentActions.CREATE_DATASET,
		LookoutEquipmentActions.CREATE_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.CREATE_LABEL,
		LookoutEquipmentActions.CREATE_LABEL_GROUP,
		LookoutEquipmentActions.CREATE_MODEL,
		LookoutEquipmentActions.CREATE_RETRAINING_SCHEDULER,
		LookoutEquipmentActions.DELETE_DATASET,
		LookoutEquipmentActions.DELETE_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.DELETE_LABEL,
		LookoutEquipmentActions.DELETE_LABEL_GROUP,
		LookoutEquipmentActions.DELETE_MODEL,
		LookoutEquipmentActions.DELETE_RESOURCE_POLICY,
		LookoutEquipmentActions.DELETE_RETRAINING_SCHEDULER,
		LookoutEquipmentActions.IMPORT_DATASET,
		LookoutEquipmentActions.IMPORT_MODEL_VERSION,
		LookoutEquipmentActions.PUT_RESOURCE_POLICY,
		LookoutEquipmentActions.START_DATA_INGESTION_JOB,
		LookoutEquipmentActions.START_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.START_RETRAINING_SCHEDULER,
		LookoutEquipmentActions.STOP_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.STOP_RETRAINING_SCHEDULER,
		LookoutEquipmentActions.UPDATE_ACTIVE_MODEL_VERSION,
		LookoutEquipmentActions.UPDATE_INFERENCE_SCHEDULER,
		LookoutEquipmentActions.UPDATE_LABEL_GROUP,
		LookoutEquipmentActions.UPDATE_MODEL,
		LookoutEquipmentActions.UPDATE_RETRAINING_SCHEDULER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LookoutEquipmentActions.LIST_DATA_INGESTION_JOBS,
		LookoutEquipmentActions.LIST_DATASETS,
		LookoutEquipmentActions.LIST_INFERENCE_SCHEDULERS,
		LookoutEquipmentActions.LIST_LABEL_GROUPS,
		LookoutEquipmentActions.LIST_LABELS,
		LookoutEquipmentActions.LIST_MODEL_VERSIONS,
		LookoutEquipmentActions.LIST_MODELS,
		LookoutEquipmentActions.LIST_RETRAINING_SCHEDULERS,
		LookoutEquipmentActions.LIST_SENSOR_STATISTICS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LookoutEquipmentActions.TAG_RESOURCE,
		LookoutEquipmentActions.UNTAG_RESOURCE,
	];
}

const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetName>[^:/?]+)/(?<datasetId>[^:/?]+)$",
);
const InferenceSchedulerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):inference-scheduler/(?<inferenceSchedulerName>[^:/?]+)/(?<inferenceSchedulerId>[^:/?]+)$",
);
const LabelGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):label-group/(?<labelGroupName>[^:/?]+)/(?<labelGroupId>[^:/?]+)$",
);
const ModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):model/(?<modelName>[^:/?]+)/(?<modelId>[^:/?]+)$",
);
const ModelVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):model/(?<modelName>[^:/?]+)/(?<modelId>[^:/?]+)/model-version/(?<modelVersionNumber>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lookoutequipment resources.
 */
export class LookoutEquipmentResources {
	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The DatasetName component of the ARN. */
		readonly datasetName: string;
		/** The DatasetId component of the ARN. */
		readonly datasetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutequipment:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetName}/${props.datasetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasetName: string;
		datasetId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetName: match.groups!.datasetName,
			datasetId: match.groups!.datasetId,
		};
	}

	/**
	 * Builds an ARN for the inference-scheduler resource.
	 */
	static inferenceScheduler(props: {
		/** The InferenceSchedulerName component of the ARN. */
		readonly inferenceSchedulerName: string;
		/** The InferenceSchedulerId component of the ARN. */
		readonly inferenceSchedulerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutequipment:${props.region ?? "*"}:${props.account ?? "*"}:inference-scheduler/${props.inferenceSchedulerName}/${props.inferenceSchedulerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the inference-scheduler resource.
	 */
	static isValidInferenceSchedulerArn(arn: string): boolean {
		return InferenceSchedulerArnRegex.test(arn);
	}

	/**
	 * Parses a inference-scheduler ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInferenceSchedulerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inferenceSchedulerName: string;
		inferenceSchedulerId: string;
	} {
		const match = InferenceSchedulerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid inference-scheduler ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inferenceSchedulerName: match.groups!.inferenceSchedulerName,
			inferenceSchedulerId: match.groups!.inferenceSchedulerId,
		};
	}

	/**
	 * Builds an ARN for the label-group resource.
	 */
	static labelGroup(props: {
		/** The LabelGroupName component of the ARN. */
		readonly labelGroupName: string;
		/** The LabelGroupId component of the ARN. */
		readonly labelGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutequipment:${props.region ?? "*"}:${props.account ?? "*"}:label-group/${props.labelGroupName}/${props.labelGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the label-group resource.
	 */
	static isValidLabelGroupArn(arn: string): boolean {
		return LabelGroupArnRegex.test(arn);
	}

	/**
	 * Parses a label-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLabelGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		labelGroupName: string;
		labelGroupId: string;
	} {
		const match = LabelGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid label-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			labelGroupName: match.groups!.labelGroupName,
			labelGroupId: match.groups!.labelGroupId,
		};
	}

	/**
	 * Builds an ARN for the model resource.
	 */
	static model(props: {
		/** The ModelName component of the ARN. */
		readonly modelName: string;
		/** The ModelId component of the ARN. */
		readonly modelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutequipment:${props.region ?? "*"}:${props.account ?? "*"}:model/${props.modelName}/${props.modelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model resource.
	 */
	static isValidModelArn(arn: string): boolean {
		return ModelArnRegex.test(arn);
	}

	/**
	 * Parses a model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelName: string;
		modelId: string;
	} {
		const match = ModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelName: match.groups!.modelName,
			modelId: match.groups!.modelId,
		};
	}

	/**
	 * Builds an ARN for the model-version resource.
	 */
	static modelVersion(props: {
		/** The ModelName component of the ARN. */
		readonly modelName: string;
		/** The ModelId component of the ARN. */
		readonly modelId: string;
		/** The ModelVersionNumber component of the ARN. */
		readonly modelVersionNumber: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutequipment:${props.region ?? "*"}:${props.account ?? "*"}:model/${props.modelName}/${props.modelId}/model-version/${props.modelVersionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-version resource.
	 */
	static isValidModelVersionArn(arn: string): boolean {
		return ModelVersionArnRegex.test(arn);
	}

	/**
	 * Parses a model-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelName: string;
		modelId: string;
		modelVersionNumber: string;
	} {
		const match = ModelVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelName: match.groups!.modelName,
			modelId: match.groups!.modelId,
			modelVersionNumber: match.groups!.modelVersionNumber,
		};
	}
}

/**
 * API operation to required IAM actions mapping for lookoutequipment.
 */
export class LookoutEquipmentOperations {
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"lookoutequipment:CreateDataset",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateInferenceScheduler API call. */
	static readonly CREATE_INFERENCE_SCHEDULER: string[] = [
		"lookoutequipment:CreateInferenceScheduler",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateLabel API call. */
	static readonly CREATE_LABEL: string[] = ["lookoutequipment:CreateLabel"];
	/** IAM actions required for the CreateLabelGroup API call. */
	static readonly CREATE_LABEL_GROUP: string[] = [
		"lookoutequipment:CreateLabelGroup",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CREATE_MODEL: string[] = [
		"lookoutequipment:CreateModel",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateRetrainingScheduler API call. */
	static readonly CREATE_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:CreateRetrainingScheduler",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["lookoutequipment:DeleteDataset"];
	/** IAM actions required for the DeleteInferenceScheduler API call. */
	static readonly DELETE_INFERENCE_SCHEDULER: string[] = [
		"lookoutequipment:DeleteInferenceScheduler",
	];
	/** IAM actions required for the DeleteLabel API call. */
	static readonly DELETE_LABEL: string[] = ["lookoutequipment:DeleteLabel"];
	/** IAM actions required for the DeleteLabelGroup API call. */
	static readonly DELETE_LABEL_GROUP: string[] = [
		"lookoutequipment:DeleteLabelGroup",
	];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DELETE_MODEL: string[] = ["lookoutequipment:DeleteModel"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"lookoutequipment:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRetrainingScheduler API call. */
	static readonly DELETE_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:DeleteRetrainingScheduler",
	];
	/** IAM actions required for the DescribeDataIngestionJob API call. */
	static readonly DESCRIBE_DATA_INGESTION_JOB: string[] = [
		"lookoutequipment:DescribeDataIngestionJob",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = [
		"lookoutequipment:DescribeDataset",
	];
	/** IAM actions required for the DescribeInferenceScheduler API call. */
	static readonly DESCRIBE_INFERENCE_SCHEDULER: string[] = [
		"lookoutequipment:DescribeInferenceScheduler",
	];
	/** IAM actions required for the DescribeLabel API call. */
	static readonly DESCRIBE_LABEL: string[] = ["lookoutequipment:Describelabel"];
	/** IAM actions required for the DescribeLabelGroup API call. */
	static readonly DESCRIBE_LABEL_GROUP: string[] = [
		"lookoutequipment:DescribeLabelGroup",
	];
	/** IAM actions required for the DescribeModel API call. */
	static readonly DESCRIBE_MODEL: string[] = ["lookoutequipment:DescribeModel"];
	/** IAM actions required for the DescribeModelVersion API call. */
	static readonly DESCRIBE_MODEL_VERSION: string[] = [
		"lookoutequipment:DescribeModelVersion",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DESCRIBE_RESOURCE_POLICY: string[] = [
		"lookoutequipment:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeRetrainingScheduler API call. */
	static readonly DESCRIBE_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:DescribeRetrainingScheduler",
	];
	/** IAM actions required for the ImportDataset API call. */
	static readonly IMPORT_DATASET: string[] = [
		"lookoutequipment:ImportDataset",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the ImportModelVersion API call. */
	static readonly IMPORT_MODEL_VERSION: string[] = [
		"lookoutequipment:ImportModelVersion",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the ListDataIngestionJobs API call. */
	static readonly LIST_DATA_INGESTION_JOBS: string[] = [
		"lookoutequipment:ListDataIngestionJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["lookoutequipment:ListDatasets"];
	/** IAM actions required for the ListInferenceEvents API call. */
	static readonly LIST_INFERENCE_EVENTS: string[] = [
		"lookoutequipment:ListInferenceEvents",
	];
	/** IAM actions required for the ListInferenceExecutions API call. */
	static readonly LIST_INFERENCE_EXECUTIONS: string[] = [
		"lookoutequipment:ListInferenceExecutions",
	];
	/** IAM actions required for the ListInferenceSchedulers API call. */
	static readonly LIST_INFERENCE_SCHEDULERS: string[] = [
		"lookoutequipment:ListInferenceSchedulers",
	];
	/** IAM actions required for the ListLabelGroups API call. */
	static readonly LIST_LABEL_GROUPS: string[] = [
		"lookoutequipment:ListLabelGroups",
	];
	/** IAM actions required for the ListLabels API call. */
	static readonly LIST_LABELS: string[] = ["lookoutequipment:ListLabels"];
	/** IAM actions required for the ListModelVersions API call. */
	static readonly LIST_MODEL_VERSIONS: string[] = [
		"lookoutequipment:ListModelVersions",
	];
	/** IAM actions required for the ListModels API call. */
	static readonly LIST_MODELS: string[] = ["lookoutequipment:ListModels"];
	/** IAM actions required for the ListRetrainingSchedulers API call. */
	static readonly LIST_RETRAINING_SCHEDULERS: string[] = [
		"lookoutequipment:ListRetrainingSchedulers",
	];
	/** IAM actions required for the ListSensorStatistics API call. */
	static readonly LIST_SENSOR_STATISTICS: string[] = [
		"lookoutequipment:ListSensorStatistics",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"lookoutequipment:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"lookoutequipment:PutResourcePolicy",
	];
	/** IAM actions required for the StartDataIngestionJob API call. */
	static readonly START_DATA_INGESTION_JOB: string[] = [
		"iam:PassRole",
		"lookoutequipment:StartDataIngestionJob",
	];
	/** IAM actions required for the StartInferenceScheduler API call. */
	static readonly START_INFERENCE_SCHEDULER: string[] = [
		"lookoutequipment:StartInferenceScheduler",
	];
	/** IAM actions required for the StartRetrainingScheduler API call. */
	static readonly START_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:StartRetrainingScheduler",
	];
	/** IAM actions required for the StopInferenceScheduler API call. */
	static readonly STOP_INFERENCE_SCHEDULER: string[] = [
		"lookoutequipment:StopInferenceScheduler",
	];
	/** IAM actions required for the StopRetrainingScheduler API call. */
	static readonly STOP_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:StopRetrainingScheduler",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["lookoutequipment:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["lookoutequipment:UntagResource"];
	/** IAM actions required for the UpdateActiveModelVersion API call. */
	static readonly UPDATE_ACTIVE_MODEL_VERSION: string[] = [
		"lookoutequipment:UpdateActiveModelVersion",
	];
	/** IAM actions required for the UpdateInferenceScheduler API call. */
	static readonly UPDATE_INFERENCE_SCHEDULER: string[] = [
		"iam:PassRole",
		"lookoutequipment:UpdateInferenceScheduler",
	];
	/** IAM actions required for the UpdateLabelGroup API call. */
	static readonly UPDATE_LABEL_GROUP: string[] = [
		"lookoutequipment:UpdateLabelGroup",
	];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UPDATE_MODEL: string[] = [
		"iam:PassRole",
		"lookoutequipment:UpdateModel",
	];
	/** IAM actions required for the UpdateRetrainingScheduler API call. */
	static readonly UPDATE_RETRAINING_SCHEDULER: string[] = [
		"lookoutequipment:UpdateRetrainingScheduler",
	];
}

/**
 * Condition key constants and builders for lookoutequipment.
 */
export class LookoutEquipmentConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceScheduler action. */
	static readonly CREATE_INFERENCE_SCHEDULER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLabelGroup action. */
	static readonly CREATE_LABEL_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CREATE_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportDataset action. */
	static readonly IMPORT_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportModelVersion action. */
	static readonly IMPORT_MODEL_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lookoutequipment:IsImportingData",
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
	/** Condition key: lookoutequipment:IsImportingData (Bool) */
	static readonly IS_IMPORTING_DATA = "lookoutequipment:IsImportingData";

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

	/**
	 * Generates a condition block for `lookoutequipment:IsImportingData`.
	 */
	static isImportingData(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "lookoutequipment:IsImportingData": value } };
	}
}
