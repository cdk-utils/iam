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
	static readonly CreateDataset = "lookoutvision:CreateDataset";
	/** [Write] lookoutvision:CreateModel */
	static readonly CreateModel = "lookoutvision:CreateModel";
	/** [Write] lookoutvision:CreateProject */
	static readonly CreateProject = "lookoutvision:CreateProject";
	/** [Write] lookoutvision:DeleteDataset */
	static readonly DeleteDataset = "lookoutvision:DeleteDataset";
	/** [Write] lookoutvision:DeleteModel */
	static readonly DeleteModel = "lookoutvision:DeleteModel";
	/** [Write] lookoutvision:DeleteProject */
	static readonly DeleteProject = "lookoutvision:DeleteProject";
	/** [Read] lookoutvision:DescribeDataset */
	static readonly DescribeDataset = "lookoutvision:DescribeDataset";
	/** [Read] lookoutvision:DescribeModel */
	static readonly DescribeModel = "lookoutvision:DescribeModel";
	/** [Read] lookoutvision:DescribeModelPackagingJob */
	static readonly DescribeModelPackagingJob =
		"lookoutvision:DescribeModelPackagingJob";
	/** [Read] lookoutvision:DescribeProject */
	static readonly DescribeProject = "lookoutvision:DescribeProject";
	/** [Read] lookoutvision:DescribeTrialDetection */
	static readonly DescribeTrialDetection =
		"lookoutvision:DescribeTrialDetection";
	/** [Write] lookoutvision:DetectAnomalies */
	static readonly DetectAnomalies = "lookoutvision:DetectAnomalies";
	/** [Read] lookoutvision:ListDatasetEntries */
	static readonly ListDatasetEntries = "lookoutvision:ListDatasetEntries";
	/** [List] lookoutvision:ListModelPackagingJobs */
	static readonly ListModelPackagingJobs =
		"lookoutvision:ListModelPackagingJobs";
	/** [List] lookoutvision:ListModels */
	static readonly ListModels = "lookoutvision:ListModels";
	/** [List] lookoutvision:ListProjects */
	static readonly ListProjects = "lookoutvision:ListProjects";
	/** [Read] lookoutvision:ListTagsForResource */
	static readonly ListTagsForResource = "lookoutvision:ListTagsForResource";
	/** [List] lookoutvision:ListTrialDetections */
	static readonly ListTrialDetections = "lookoutvision:ListTrialDetections";
	/** [Write] lookoutvision:StartModel */
	static readonly StartModel = "lookoutvision:StartModel";
	/** [Write] lookoutvision:StartModelPackagingJob */
	static readonly StartModelPackagingJob =
		"lookoutvision:StartModelPackagingJob";
	/** [Write] lookoutvision:StartTrialDetection */
	static readonly StartTrialDetection = "lookoutvision:StartTrialDetection";
	/** [Write] lookoutvision:StopModel */
	static readonly StopModel = "lookoutvision:StopModel";
	/** [Tagging] lookoutvision:TagResource */
	static readonly TagResource = "lookoutvision:TagResource";
	/** [Tagging] lookoutvision:UntagResource */
	static readonly UntagResource = "lookoutvision:UntagResource";
	/** [Write] lookoutvision:UpdateDatasetEntries */
	static readonly UpdateDatasetEntries = "lookoutvision:UpdateDatasetEntries";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LookoutVisionActions.DescribeDataset,
		LookoutVisionActions.DescribeModel,
		LookoutVisionActions.DescribeModelPackagingJob,
		LookoutVisionActions.DescribeProject,
		LookoutVisionActions.DescribeTrialDetection,
		LookoutVisionActions.ListDatasetEntries,
		LookoutVisionActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LookoutVisionActions.CreateDataset,
		LookoutVisionActions.CreateModel,
		LookoutVisionActions.CreateProject,
		LookoutVisionActions.DeleteDataset,
		LookoutVisionActions.DeleteModel,
		LookoutVisionActions.DeleteProject,
		LookoutVisionActions.DetectAnomalies,
		LookoutVisionActions.StartModel,
		LookoutVisionActions.StartModelPackagingJob,
		LookoutVisionActions.StartTrialDetection,
		LookoutVisionActions.StopModel,
		LookoutVisionActions.UpdateDatasetEntries,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LookoutVisionActions.ListModelPackagingJobs,
		LookoutVisionActions.ListModels,
		LookoutVisionActions.ListProjects,
		LookoutVisionActions.ListTrialDetections,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LookoutVisionActions.TagResource,
		LookoutVisionActions.UntagResource,
	];
}

/**
 * Properties for building a model ARN.
 */
export interface LookoutVisionModelArnProps {
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
}

/**
 * Parsed components of a model ARN.
 */
export interface LookoutVisionModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The ModelVersion component. */
	readonly modelVersion: string;
}

/**
 * Properties for building a project ARN.
 */
export interface LookoutVisionProjectArnProps {
	/** The ProjectName component of the ARN. */
	readonly projectName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface LookoutVisionProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
}

const ModelArnRegex =
	/^arn:(?<partition>[^:]+):lookoutvision:(?<region>[^:]*):(?<account>[^:]*):model\/(?<projectName>[^:/?]+)\/(?<modelVersion>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):lookoutvision:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for lookoutvision resources.
 */
export class LookoutVisionResources {
	/**
	 * Builds an ARN for the model resource.
	 */
	static model(props: LookoutVisionModelArnProps): string {
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
	static parseModelArn(arn: string): LookoutVisionModelArnComponents {
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
	static project(props: LookoutVisionProjectArnProps): string {
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
	static parseProjectArn(arn: string): LookoutVisionProjectArnComponents {
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
	static readonly CreateModelConditionKeys: string[] = [
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
