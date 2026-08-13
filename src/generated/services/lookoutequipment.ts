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
	static readonly CreateDataset = "lookoutequipment:CreateDataset";
	/** [Write] lookoutequipment:CreateInferenceScheduler */
	static readonly CreateInferenceScheduler =
		"lookoutequipment:CreateInferenceScheduler";
	/** [Write] lookoutequipment:CreateLabel */
	static readonly CreateLabel = "lookoutequipment:CreateLabel";
	/** [Write] lookoutequipment:CreateLabelGroup */
	static readonly CreateLabelGroup = "lookoutequipment:CreateLabelGroup";
	/** [Write] lookoutequipment:CreateModel */
	static readonly CreateModel = "lookoutequipment:CreateModel";
	/** [Write] lookoutequipment:CreateRetrainingScheduler */
	static readonly CreateRetrainingScheduler =
		"lookoutequipment:CreateRetrainingScheduler";
	/** [Write] lookoutequipment:DeleteDataset */
	static readonly DeleteDataset = "lookoutequipment:DeleteDataset";
	/** [Write] lookoutequipment:DeleteInferenceScheduler */
	static readonly DeleteInferenceScheduler =
		"lookoutequipment:DeleteInferenceScheduler";
	/** [Write] lookoutequipment:DeleteLabel */
	static readonly DeleteLabel = "lookoutequipment:DeleteLabel";
	/** [Write] lookoutequipment:DeleteLabelGroup */
	static readonly DeleteLabelGroup = "lookoutequipment:DeleteLabelGroup";
	/** [Write] lookoutequipment:DeleteModel */
	static readonly DeleteModel = "lookoutequipment:DeleteModel";
	/** [Write] lookoutequipment:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"lookoutequipment:DeleteResourcePolicy";
	/** [Write] lookoutequipment:DeleteRetrainingScheduler */
	static readonly DeleteRetrainingScheduler =
		"lookoutequipment:DeleteRetrainingScheduler";
	/** [Read] lookoutequipment:DescribeDataIngestionJob */
	static readonly DescribeDataIngestionJob =
		"lookoutequipment:DescribeDataIngestionJob";
	/** [Read] lookoutequipment:DescribeDataset */
	static readonly DescribeDataset = "lookoutequipment:DescribeDataset";
	/** [Read] lookoutequipment:DescribeInferenceScheduler */
	static readonly DescribeInferenceScheduler =
		"lookoutequipment:DescribeInferenceScheduler";
	/** [Read] lookoutequipment:DescribeLabelGroup */
	static readonly DescribeLabelGroup = "lookoutequipment:DescribeLabelGroup";
	/** [Read] lookoutequipment:DescribeModel */
	static readonly DescribeModel = "lookoutequipment:DescribeModel";
	/** [Read] lookoutequipment:DescribeModelVersion */
	static readonly DescribeModelVersion =
		"lookoutequipment:DescribeModelVersion";
	/** [Read] lookoutequipment:DescribeResourcePolicy */
	static readonly DescribeResourcePolicy =
		"lookoutequipment:DescribeResourcePolicy";
	/** [Read] lookoutequipment:DescribeRetrainingScheduler */
	static readonly DescribeRetrainingScheduler =
		"lookoutequipment:DescribeRetrainingScheduler";
	/** [Read] lookoutequipment:Describelabel */
	static readonly Describelabel = "lookoutequipment:Describelabel";
	/** [Write] lookoutequipment:ImportDataset */
	static readonly ImportDataset = "lookoutequipment:ImportDataset";
	/** [Write] lookoutequipment:ImportModelVersion */
	static readonly ImportModelVersion = "lookoutequipment:ImportModelVersion";
	/** [List] lookoutequipment:ListDataIngestionJobs */
	static readonly ListDataIngestionJobs =
		"lookoutequipment:ListDataIngestionJobs";
	/** [List] lookoutequipment:ListDatasets */
	static readonly ListDatasets = "lookoutequipment:ListDatasets";
	/** [Read] lookoutequipment:ListInferenceEvents */
	static readonly ListInferenceEvents = "lookoutequipment:ListInferenceEvents";
	/** [Read] lookoutequipment:ListInferenceExecutions */
	static readonly ListInferenceExecutions =
		"lookoutequipment:ListInferenceExecutions";
	/** [List] lookoutequipment:ListInferenceSchedulers */
	static readonly ListInferenceSchedulers =
		"lookoutequipment:ListInferenceSchedulers";
	/** [List] lookoutequipment:ListLabelGroups */
	static readonly ListLabelGroups = "lookoutequipment:ListLabelGroups";
	/** [List] lookoutequipment:ListLabels */
	static readonly ListLabels = "lookoutequipment:ListLabels";
	/** [List] lookoutequipment:ListModelVersions */
	static readonly ListModelVersions = "lookoutequipment:ListModelVersions";
	/** [List] lookoutequipment:ListModels */
	static readonly ListModels = "lookoutequipment:ListModels";
	/** [List] lookoutequipment:ListRetrainingSchedulers */
	static readonly ListRetrainingSchedulers =
		"lookoutequipment:ListRetrainingSchedulers";
	/** [List] lookoutequipment:ListSensorStatistics */
	static readonly ListSensorStatistics =
		"lookoutequipment:ListSensorStatistics";
	/** [Read] lookoutequipment:ListTagsForResource */
	static readonly ListTagsForResource = "lookoutequipment:ListTagsForResource";
	/** [Write] lookoutequipment:PutResourcePolicy */
	static readonly PutResourcePolicy = "lookoutequipment:PutResourcePolicy";
	/** [Write] lookoutequipment:StartDataIngestionJob */
	static readonly StartDataIngestionJob =
		"lookoutequipment:StartDataIngestionJob";
	/** [Write] lookoutequipment:StartInferenceScheduler */
	static readonly StartInferenceScheduler =
		"lookoutequipment:StartInferenceScheduler";
	/** [Write] lookoutequipment:StartRetrainingScheduler */
	static readonly StartRetrainingScheduler =
		"lookoutequipment:StartRetrainingScheduler";
	/** [Write] lookoutequipment:StopInferenceScheduler */
	static readonly StopInferenceScheduler =
		"lookoutequipment:StopInferenceScheduler";
	/** [Write] lookoutequipment:StopRetrainingScheduler */
	static readonly StopRetrainingScheduler =
		"lookoutequipment:StopRetrainingScheduler";
	/** [Tagging] lookoutequipment:TagResource */
	static readonly TagResource = "lookoutequipment:TagResource";
	/** [Tagging] lookoutequipment:UntagResource */
	static readonly UntagResource = "lookoutequipment:UntagResource";
	/** [Write] lookoutequipment:UpdateActiveModelVersion */
	static readonly UpdateActiveModelVersion =
		"lookoutequipment:UpdateActiveModelVersion";
	/** [Write] lookoutequipment:UpdateInferenceScheduler */
	static readonly UpdateInferenceScheduler =
		"lookoutequipment:UpdateInferenceScheduler";
	/** [Write] lookoutequipment:UpdateLabelGroup */
	static readonly UpdateLabelGroup = "lookoutequipment:UpdateLabelGroup";
	/** [Write] lookoutequipment:UpdateModel */
	static readonly UpdateModel = "lookoutequipment:UpdateModel";
	/** [Write] lookoutequipment:UpdateRetrainingScheduler */
	static readonly UpdateRetrainingScheduler =
		"lookoutequipment:UpdateRetrainingScheduler";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LookoutEquipmentActions.DescribeDataIngestionJob,
		LookoutEquipmentActions.DescribeDataset,
		LookoutEquipmentActions.DescribeInferenceScheduler,
		LookoutEquipmentActions.DescribeLabelGroup,
		LookoutEquipmentActions.DescribeModel,
		LookoutEquipmentActions.DescribeModelVersion,
		LookoutEquipmentActions.DescribeResourcePolicy,
		LookoutEquipmentActions.DescribeRetrainingScheduler,
		LookoutEquipmentActions.Describelabel,
		LookoutEquipmentActions.ListInferenceEvents,
		LookoutEquipmentActions.ListInferenceExecutions,
		LookoutEquipmentActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LookoutEquipmentActions.CreateDataset,
		LookoutEquipmentActions.CreateInferenceScheduler,
		LookoutEquipmentActions.CreateLabel,
		LookoutEquipmentActions.CreateLabelGroup,
		LookoutEquipmentActions.CreateModel,
		LookoutEquipmentActions.CreateRetrainingScheduler,
		LookoutEquipmentActions.DeleteDataset,
		LookoutEquipmentActions.DeleteInferenceScheduler,
		LookoutEquipmentActions.DeleteLabel,
		LookoutEquipmentActions.DeleteLabelGroup,
		LookoutEquipmentActions.DeleteModel,
		LookoutEquipmentActions.DeleteResourcePolicy,
		LookoutEquipmentActions.DeleteRetrainingScheduler,
		LookoutEquipmentActions.ImportDataset,
		LookoutEquipmentActions.ImportModelVersion,
		LookoutEquipmentActions.PutResourcePolicy,
		LookoutEquipmentActions.StartDataIngestionJob,
		LookoutEquipmentActions.StartInferenceScheduler,
		LookoutEquipmentActions.StartRetrainingScheduler,
		LookoutEquipmentActions.StopInferenceScheduler,
		LookoutEquipmentActions.StopRetrainingScheduler,
		LookoutEquipmentActions.UpdateActiveModelVersion,
		LookoutEquipmentActions.UpdateInferenceScheduler,
		LookoutEquipmentActions.UpdateLabelGroup,
		LookoutEquipmentActions.UpdateModel,
		LookoutEquipmentActions.UpdateRetrainingScheduler,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LookoutEquipmentActions.ListDataIngestionJobs,
		LookoutEquipmentActions.ListDatasets,
		LookoutEquipmentActions.ListInferenceSchedulers,
		LookoutEquipmentActions.ListLabelGroups,
		LookoutEquipmentActions.ListLabels,
		LookoutEquipmentActions.ListModelVersions,
		LookoutEquipmentActions.ListModels,
		LookoutEquipmentActions.ListRetrainingSchedulers,
		LookoutEquipmentActions.ListSensorStatistics,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LookoutEquipmentActions.TagResource,
		LookoutEquipmentActions.UntagResource,
	];
}

/**
 * Properties for building a dataset ARN.
 */
export interface LookoutEquipmentDatasetArnProps {
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
}

/**
 * Parsed components of a dataset ARN.
 */
export interface LookoutEquipmentDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatasetName component. */
	readonly datasetName: string;
	/** The DatasetId component. */
	readonly datasetId: string;
}

/**
 * Properties for building a inference-scheduler ARN.
 */
export interface LookoutEquipmentInferenceSchedulerArnProps {
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
}

/**
 * Parsed components of a inference-scheduler ARN.
 */
export interface LookoutEquipmentInferenceSchedulerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InferenceSchedulerName component. */
	readonly inferenceSchedulerName: string;
	/** The InferenceSchedulerId component. */
	readonly inferenceSchedulerId: string;
}

/**
 * Properties for building a label-group ARN.
 */
export interface LookoutEquipmentLabelGroupArnProps {
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
}

/**
 * Parsed components of a label-group ARN.
 */
export interface LookoutEquipmentLabelGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LabelGroupName component. */
	readonly labelGroupName: string;
	/** The LabelGroupId component. */
	readonly labelGroupId: string;
}

/**
 * Properties for building a model ARN.
 */
export interface LookoutEquipmentModelArnProps {
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
}

/**
 * Parsed components of a model ARN.
 */
export interface LookoutEquipmentModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelName component. */
	readonly modelName: string;
	/** The ModelId component. */
	readonly modelId: string;
}

/**
 * Properties for building a model-version ARN.
 */
export interface LookoutEquipmentModelVersionArnProps {
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
}

/**
 * Parsed components of a model-version ARN.
 */
export interface LookoutEquipmentModelVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelName component. */
	readonly modelName: string;
	/** The ModelId component. */
	readonly modelId: string;
	/** The ModelVersionNumber component. */
	readonly modelVersionNumber: string;
}

const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetName>[^:/?]+)\/(?<datasetId>[^:/?]+)$/;
const InferenceSchedulerArnRegex =
	/^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):inference-scheduler\/(?<inferenceSchedulerName>[^:/?]+)\/(?<inferenceSchedulerId>[^:/?]+)$/;
const LabelGroupArnRegex =
	/^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):label-group\/(?<labelGroupName>[^:/?]+)\/(?<labelGroupId>[^:/?]+)$/;
const ModelArnRegex =
	/^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):model\/(?<modelName>[^:/?]+)\/(?<modelId>[^:/?]+)$/;
const ModelVersionArnRegex =
	/^arn:(?<partition>[^:]+):lookoutequipment:(?<region>[^:]*):(?<account>[^:]*):model\/(?<modelName>[^:/?]+)\/(?<modelId>[^:/?]+)\/model-version\/(?<modelVersionNumber>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for lookoutequipment resources.
 */
export class LookoutEquipmentResources {
	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: LookoutEquipmentDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): LookoutEquipmentDatasetArnComponents {
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
	static inferenceScheduler(
		props: LookoutEquipmentInferenceSchedulerArnProps,
	): string {
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
	static parseInferenceSchedulerArn(
		arn: string,
	): LookoutEquipmentInferenceSchedulerArnComponents {
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
	static labelGroup(props: LookoutEquipmentLabelGroupArnProps): string {
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
	static parseLabelGroupArn(
		arn: string,
	): LookoutEquipmentLabelGroupArnComponents {
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
	static model(props: LookoutEquipmentModelArnProps): string {
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
	static parseModelArn(arn: string): LookoutEquipmentModelArnComponents {
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
	static modelVersion(props: LookoutEquipmentModelVersionArnProps): string {
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
	static parseModelVersionArn(
		arn: string,
	): LookoutEquipmentModelVersionArnComponents {
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
	static readonly CreateDataset: string[] = [
		"lookoutequipment:CreateDataset",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateInferenceScheduler API call. */
	static readonly CreateInferenceScheduler: string[] = [
		"lookoutequipment:CreateInferenceScheduler",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateLabel API call. */
	static readonly CreateLabel: string[] = ["lookoutequipment:CreateLabel"];
	/** IAM actions required for the CreateLabelGroup API call. */
	static readonly CreateLabelGroup: string[] = [
		"lookoutequipment:CreateLabelGroup",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CreateModel: string[] = [
		"lookoutequipment:CreateModel",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the CreateRetrainingScheduler API call. */
	static readonly CreateRetrainingScheduler: string[] = [
		"lookoutequipment:CreateRetrainingScheduler",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["lookoutequipment:DeleteDataset"];
	/** IAM actions required for the DeleteInferenceScheduler API call. */
	static readonly DeleteInferenceScheduler: string[] = [
		"lookoutequipment:DeleteInferenceScheduler",
	];
	/** IAM actions required for the DeleteLabel API call. */
	static readonly DeleteLabel: string[] = ["lookoutequipment:DeleteLabel"];
	/** IAM actions required for the DeleteLabelGroup API call. */
	static readonly DeleteLabelGroup: string[] = [
		"lookoutequipment:DeleteLabelGroup",
	];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DeleteModel: string[] = ["lookoutequipment:DeleteModel"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"lookoutequipment:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRetrainingScheduler API call. */
	static readonly DeleteRetrainingScheduler: string[] = [
		"lookoutequipment:DeleteRetrainingScheduler",
	];
	/** IAM actions required for the DescribeDataIngestionJob API call. */
	static readonly DescribeDataIngestionJob: string[] = [
		"lookoutequipment:DescribeDataIngestionJob",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = [
		"lookoutequipment:DescribeDataset",
	];
	/** IAM actions required for the DescribeInferenceScheduler API call. */
	static readonly DescribeInferenceScheduler: string[] = [
		"lookoutequipment:DescribeInferenceScheduler",
	];
	/** IAM actions required for the DescribeLabel API call. */
	static readonly DescribeLabel: string[] = ["lookoutequipment:Describelabel"];
	/** IAM actions required for the DescribeLabelGroup API call. */
	static readonly DescribeLabelGroup: string[] = [
		"lookoutequipment:DescribeLabelGroup",
	];
	/** IAM actions required for the DescribeModel API call. */
	static readonly DescribeModel: string[] = ["lookoutequipment:DescribeModel"];
	/** IAM actions required for the DescribeModelVersion API call. */
	static readonly DescribeModelVersion: string[] = [
		"lookoutequipment:DescribeModelVersion",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DescribeResourcePolicy: string[] = [
		"lookoutequipment:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeRetrainingScheduler API call. */
	static readonly DescribeRetrainingScheduler: string[] = [
		"lookoutequipment:DescribeRetrainingScheduler",
	];
	/** IAM actions required for the ImportDataset API call. */
	static readonly ImportDataset: string[] = [
		"lookoutequipment:ImportDataset",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the ImportModelVersion API call. */
	static readonly ImportModelVersion: string[] = [
		"lookoutequipment:ImportModelVersion",
		"iam:PassRole",
		"lookoutequipment:TagResource",
	];
	/** IAM actions required for the ListDataIngestionJobs API call. */
	static readonly ListDataIngestionJobs: string[] = [
		"lookoutequipment:ListDataIngestionJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["lookoutequipment:ListDatasets"];
	/** IAM actions required for the ListInferenceEvents API call. */
	static readonly ListInferenceEvents: string[] = [
		"lookoutequipment:ListInferenceEvents",
	];
	/** IAM actions required for the ListInferenceExecutions API call. */
	static readonly ListInferenceExecutions: string[] = [
		"lookoutequipment:ListInferenceExecutions",
	];
	/** IAM actions required for the ListInferenceSchedulers API call. */
	static readonly ListInferenceSchedulers: string[] = [
		"lookoutequipment:ListInferenceSchedulers",
	];
	/** IAM actions required for the ListLabelGroups API call. */
	static readonly ListLabelGroups: string[] = [
		"lookoutequipment:ListLabelGroups",
	];
	/** IAM actions required for the ListLabels API call. */
	static readonly ListLabels: string[] = ["lookoutequipment:ListLabels"];
	/** IAM actions required for the ListModelVersions API call. */
	static readonly ListModelVersions: string[] = [
		"lookoutequipment:ListModelVersions",
	];
	/** IAM actions required for the ListModels API call. */
	static readonly ListModels: string[] = ["lookoutequipment:ListModels"];
	/** IAM actions required for the ListRetrainingSchedulers API call. */
	static readonly ListRetrainingSchedulers: string[] = [
		"lookoutequipment:ListRetrainingSchedulers",
	];
	/** IAM actions required for the ListSensorStatistics API call. */
	static readonly ListSensorStatistics: string[] = [
		"lookoutequipment:ListSensorStatistics",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"lookoutequipment:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"lookoutequipment:PutResourcePolicy",
	];
	/** IAM actions required for the StartDataIngestionJob API call. */
	static readonly StartDataIngestionJob: string[] = [
		"iam:PassRole",
		"lookoutequipment:StartDataIngestionJob",
	];
	/** IAM actions required for the StartInferenceScheduler API call. */
	static readonly StartInferenceScheduler: string[] = [
		"lookoutequipment:StartInferenceScheduler",
	];
	/** IAM actions required for the StartRetrainingScheduler API call. */
	static readonly StartRetrainingScheduler: string[] = [
		"lookoutequipment:StartRetrainingScheduler",
	];
	/** IAM actions required for the StopInferenceScheduler API call. */
	static readonly StopInferenceScheduler: string[] = [
		"lookoutequipment:StopInferenceScheduler",
	];
	/** IAM actions required for the StopRetrainingScheduler API call. */
	static readonly StopRetrainingScheduler: string[] = [
		"lookoutequipment:StopRetrainingScheduler",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["lookoutequipment:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["lookoutequipment:UntagResource"];
	/** IAM actions required for the UpdateActiveModelVersion API call. */
	static readonly UpdateActiveModelVersion: string[] = [
		"lookoutequipment:UpdateActiveModelVersion",
	];
	/** IAM actions required for the UpdateInferenceScheduler API call. */
	static readonly UpdateInferenceScheduler: string[] = [
		"iam:PassRole",
		"lookoutequipment:UpdateInferenceScheduler",
	];
	/** IAM actions required for the UpdateLabelGroup API call. */
	static readonly UpdateLabelGroup: string[] = [
		"lookoutequipment:UpdateLabelGroup",
	];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UpdateModel: string[] = [
		"iam:PassRole",
		"lookoutequipment:UpdateModel",
	];
	/** IAM actions required for the UpdateRetrainingScheduler API call. */
	static readonly UpdateRetrainingScheduler: string[] = [
		"lookoutequipment:UpdateRetrainingScheduler",
	];
}

/**
 * Condition key constants and builders for lookoutequipment.
 */
export class LookoutEquipmentConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceScheduler action. */
	static readonly CreateInferenceSchedulerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLabelGroup action. */
	static readonly CreateLabelGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CreateModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportDataset action. */
	static readonly ImportDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportModelVersion action. */
	static readonly ImportModelVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lookoutequipment:IsImportingData",
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
