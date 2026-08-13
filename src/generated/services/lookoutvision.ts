// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lookoutvision.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lookoutvision service.
 */
export class LookoutVisionActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lookoutvision";

	/** [Write] lookoutvision:CreateDataset */
	static readonly CREATE_DATASET = "lookoutvision:CreateDataset";
	/** [Write] lookoutvision:CreateModel */
	static readonly CREATE_MODEL = "lookoutvision:CreateModel";
	/** [Write] lookoutvision:CreateProject */
	static readonly CREATE_PROJECT = "lookoutvision:CreateProject";
	/** [Write] lookoutvision:DeleteDataset */
	static readonly DELETE_DATASET = "lookoutvision:DeleteDataset";
	/** [Write] lookoutvision:DeleteModel */
	static readonly DELETE_MODEL = "lookoutvision:DeleteModel";
	/** [Write] lookoutvision:DeleteProject */
	static readonly DELETE_PROJECT = "lookoutvision:DeleteProject";
	/** [Read] lookoutvision:DescribeDataset */
	static readonly DESCRIBE_DATASET = "lookoutvision:DescribeDataset";
	/** [Read] lookoutvision:DescribeModel */
	static readonly DESCRIBE_MODEL = "lookoutvision:DescribeModel";
	/** [Read] lookoutvision:DescribeModelPackagingJob */
	static readonly DESCRIBE_MODEL_PACKAGING_JOB =
		"lookoutvision:DescribeModelPackagingJob";
	/** [Read] lookoutvision:DescribeProject */
	static readonly DESCRIBE_PROJECT = "lookoutvision:DescribeProject";
	/** [Read] lookoutvision:DescribeTrialDetection */
	static readonly DESCRIBE_TRIAL_DETECTION =
		"lookoutvision:DescribeTrialDetection";
	/** [Write] lookoutvision:DetectAnomalies */
	static readonly DETECT_ANOMALIES = "lookoutvision:DetectAnomalies";
	/** [Read] lookoutvision:ListDatasetEntries */
	static readonly LIST_DATASET_ENTRIES = "lookoutvision:ListDatasetEntries";
	/** [List] lookoutvision:ListModelPackagingJobs */
	static readonly LIST_MODEL_PACKAGING_JOBS =
		"lookoutvision:ListModelPackagingJobs";
	/** [List] lookoutvision:ListModels */
	static readonly LIST_MODELS = "lookoutvision:ListModels";
	/** [List] lookoutvision:ListProjects */
	static readonly LIST_PROJECTS = "lookoutvision:ListProjects";
	/** [Read] lookoutvision:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "lookoutvision:ListTagsForResource";
	/** [List] lookoutvision:ListTrialDetections */
	static readonly LIST_TRIAL_DETECTIONS = "lookoutvision:ListTrialDetections";
	/** [Write] lookoutvision:StartModel */
	static readonly START_MODEL = "lookoutvision:StartModel";
	/** [Write] lookoutvision:StartModelPackagingJob */
	static readonly START_MODEL_PACKAGING_JOB =
		"lookoutvision:StartModelPackagingJob";
	/** [Write] lookoutvision:StartTrialDetection */
	static readonly START_TRIAL_DETECTION = "lookoutvision:StartTrialDetection";
	/** [Write] lookoutvision:StopModel */
	static readonly STOP_MODEL = "lookoutvision:StopModel";
	/** [Tagging] lookoutvision:TagResource */
	static readonly TAG_RESOURCE = "lookoutvision:TagResource";
	/** [Tagging] lookoutvision:UntagResource */
	static readonly UNTAG_RESOURCE = "lookoutvision:UntagResource";
	/** [Write] lookoutvision:UpdateDatasetEntries */
	static readonly UPDATE_DATASET_ENTRIES = "lookoutvision:UpdateDatasetEntries";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LookoutVisionActions.DESCRIBE_DATASET,
		LookoutVisionActions.DESCRIBE_MODEL,
		LookoutVisionActions.DESCRIBE_MODEL_PACKAGING_JOB,
		LookoutVisionActions.DESCRIBE_PROJECT,
		LookoutVisionActions.DESCRIBE_TRIAL_DETECTION,
		LookoutVisionActions.LIST_DATASET_ENTRIES,
		LookoutVisionActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LookoutVisionActions.CREATE_DATASET,
		LookoutVisionActions.CREATE_MODEL,
		LookoutVisionActions.CREATE_PROJECT,
		LookoutVisionActions.DELETE_DATASET,
		LookoutVisionActions.DELETE_MODEL,
		LookoutVisionActions.DELETE_PROJECT,
		LookoutVisionActions.DETECT_ANOMALIES,
		LookoutVisionActions.START_MODEL,
		LookoutVisionActions.START_MODEL_PACKAGING_JOB,
		LookoutVisionActions.START_TRIAL_DETECTION,
		LookoutVisionActions.STOP_MODEL,
		LookoutVisionActions.UPDATE_DATASET_ENTRIES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LookoutVisionActions.LIST_MODEL_PACKAGING_JOBS,
		LookoutVisionActions.LIST_MODELS,
		LookoutVisionActions.LIST_PROJECTS,
		LookoutVisionActions.LIST_TRIAL_DETECTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LookoutVisionActions.TAG_RESOURCE,
		LookoutVisionActions.UNTAG_RESOURCE,
	];
}

const ModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutvision:(?<region>[^:]*):(?<account>[^:]*):model/(?<projectName>[^:/?]+)/(?<modelVersion>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutvision:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lookoutvision resources.
 */
export class LookoutVisionResources {
	/**
	 * Builds an ARN for the model resource.
	 */
	static model(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The ModelVersion component of the ARN. */
		readonly modelVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutvision:${props.region ?? "*"}:${props.account ?? "*"}:model/${props.projectName}/${props.modelVersion}`;
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
		projectName: string;
		modelVersion: string;
	} {
		const match = ModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			modelVersion: match.groups!.modelVersion,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lookoutvision:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
		};
	}
}

/**
 * Condition key constants and builders for lookoutvision.
 */
export class LookoutVisionConditions {
	/** Condition keys applicable to the CreateModel action. */
	static readonly CREATE_MODEL_CONDITION_KEYS: string[] = [
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
