// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/datapipeline.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the datapipeline service.
 */
export class DatapipelineActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "datapipeline";

	/** [Write] datapipeline:ActivatePipeline */
	static readonly ActivatePipeline = "datapipeline:ActivatePipeline";
	/** [Tagging] datapipeline:AddTags */
	static readonly AddTags = "datapipeline:AddTags";
	/** [Write] datapipeline:CreatePipeline */
	static readonly CreatePipeline = "datapipeline:CreatePipeline";
	/** [Write] datapipeline:DeactivatePipeline */
	static readonly DeactivatePipeline = "datapipeline:DeactivatePipeline";
	/** [Write] datapipeline:DeletePipeline */
	static readonly DeletePipeline = "datapipeline:DeletePipeline";
	/** [Read] datapipeline:DescribeObjects */
	static readonly DescribeObjects = "datapipeline:DescribeObjects";
	/** [Read] datapipeline:DescribePipelines */
	static readonly DescribePipelines = "datapipeline:DescribePipelines";
	/** [Read] datapipeline:EvaluateExpression */
	static readonly EvaluateExpression = "datapipeline:EvaluateExpression";
	/** [List] datapipeline:GetAccountLimits */
	static readonly actionGetAccountLimits = "datapipeline:GetAccountLimits";
	/** [Read] datapipeline:GetPipelineDefinition */
	static readonly actionGetPipelineDefinition =
		"datapipeline:GetPipelineDefinition";
	/** [List] datapipeline:ListPipelines */
	static readonly ListPipelines = "datapipeline:ListPipelines";
	/** [Write] datapipeline:PollForTask */
	static readonly PollForTask = "datapipeline:PollForTask";
	/** [Write] datapipeline:PutAccountLimits */
	static readonly PutAccountLimits = "datapipeline:PutAccountLimits";
	/** [Write] datapipeline:PutPipelineDefinition */
	static readonly PutPipelineDefinition = "datapipeline:PutPipelineDefinition";
	/** [Read] datapipeline:QueryObjects */
	static readonly QueryObjects = "datapipeline:QueryObjects";
	/** [Tagging] datapipeline:RemoveTags */
	static readonly RemoveTags = "datapipeline:RemoveTags";
	/** [Write] datapipeline:ReportTaskProgress */
	static readonly ReportTaskProgress = "datapipeline:ReportTaskProgress";
	/** [Write] datapipeline:ReportTaskRunnerHeartbeat */
	static readonly ReportTaskRunnerHeartbeat =
		"datapipeline:ReportTaskRunnerHeartbeat";
	/** [Write] datapipeline:SetStatus */
	static readonly actionSetStatus = "datapipeline:SetStatus";
	/** [Write] datapipeline:SetTaskStatus */
	static readonly actionSetTaskStatus = "datapipeline:SetTaskStatus";
	/** [Read] datapipeline:ValidatePipelineDefinition */
	static readonly ValidatePipelineDefinition =
		"datapipeline:ValidatePipelineDefinition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DatapipelineActions.DescribeObjects,
		DatapipelineActions.DescribePipelines,
		DatapipelineActions.EvaluateExpression,
		DatapipelineActions.actionGetPipelineDefinition,
		DatapipelineActions.QueryObjects,
		DatapipelineActions.ValidatePipelineDefinition,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DatapipelineActions.ActivatePipeline,
		DatapipelineActions.CreatePipeline,
		DatapipelineActions.DeactivatePipeline,
		DatapipelineActions.DeletePipeline,
		DatapipelineActions.PollForTask,
		DatapipelineActions.PutAccountLimits,
		DatapipelineActions.PutPipelineDefinition,
		DatapipelineActions.ReportTaskProgress,
		DatapipelineActions.ReportTaskRunnerHeartbeat,
		DatapipelineActions.actionSetStatus,
		DatapipelineActions.actionSetTaskStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DatapipelineActions.actionGetAccountLimits,
		DatapipelineActions.ListPipelines,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DatapipelineActions.AddTags,
		DatapipelineActions.RemoveTags,
	];
}

/**
 * Properties for building a pipeline ARN.
 */
export interface DatapipelinePipelineArnProps {
	/** The PipelineId component of the ARN. */
	readonly pipelineId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipeline ARN.
 */
export interface DatapipelinePipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineId component. */
	readonly pipelineId: string;
}

const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):datapipeline:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for datapipeline resources.
 */
export class DatapipelineResources {
	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: DatapipelinePipelineArnProps): string {
		return `arn:${props.partition ?? "aws"}:datapipeline:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline resource.
	 */
	static isValidPipelineArn(arn: string): boolean {
		return PipelineArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineArn(arn: string): DatapipelinePipelineArnComponents {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineId: match.groups!.pipelineId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for datapipeline.
 */
export class DatapipelineOperations {
	/** IAM actions required for the ActivatePipeline API call. */
	static readonly ActivatePipeline: string[] = [
		"datapipeline:ActivatePipeline",
		"iam:PassRole",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["datapipeline:AddTags"];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CreatePipeline: string[] = [
		"datapipeline:AddTags",
		"datapipeline:CreatePipeline",
	];
	/** IAM actions required for the DeactivatePipeline API call. */
	static readonly DeactivatePipeline: string[] = [
		"datapipeline:DeactivatePipeline",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DeletePipeline: string[] = ["datapipeline:DeletePipeline"];
	/** IAM actions required for the DescribeObjects API call. */
	static readonly DescribeObjects: string[] = ["datapipeline:DescribeObjects"];
	/** IAM actions required for the DescribePipelines API call. */
	static readonly DescribePipelines: string[] = [
		"datapipeline:DescribePipelines",
	];
	/** IAM actions required for the EvaluateExpression API call. */
	static readonly EvaluateExpression: string[] = [
		"datapipeline:EvaluateExpression",
	];
	/** IAM actions required for the GetPipelineDefinition API call. */
	static readonly opGetPipelineDefinition: string[] = [
		"datapipeline:GetPipelineDefinition",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly ListPipelines: string[] = ["datapipeline:ListPipelines"];
	/** IAM actions required for the PollForTask API call. */
	static readonly PollForTask: string[] = ["datapipeline:PollForTask"];
	/** IAM actions required for the PutPipelineDefinition API call. */
	static readonly PutPipelineDefinition: string[] = [
		"iam:PassRole",
		"datapipeline:PutPipelineDefinition",
	];
	/** IAM actions required for the QueryObjects API call. */
	static readonly QueryObjects: string[] = ["datapipeline:QueryObjects"];
	/** IAM actions required for the RemoveTags API call. */
	static readonly RemoveTags: string[] = ["datapipeline:RemoveTags"];
	/** IAM actions required for the ReportTaskProgress API call. */
	static readonly ReportTaskProgress: string[] = [
		"datapipeline:ReportTaskProgress",
	];
	/** IAM actions required for the ReportTaskRunnerHeartbeat API call. */
	static readonly ReportTaskRunnerHeartbeat: string[] = [
		"datapipeline:ReportTaskRunnerHeartbeat",
	];
	/** IAM actions required for the SetStatus API call. */
	static readonly opSetStatus: string[] = ["datapipeline:SetStatus"];
	/** IAM actions required for the SetTaskStatus API call. */
	static readonly opSetTaskStatus: string[] = ["datapipeline:SetTaskStatus"];
	/** IAM actions required for the ValidatePipelineDefinition API call. */
	static readonly ValidatePipelineDefinition: string[] = [
		"iam:PassRole",
		"datapipeline:ValidatePipelineDefinition",
	];
}

/**
 * Condition key constants and builders for datapipeline.
 */
export class DatapipelineConditions {
	/** Condition keys applicable to the ActivatePipeline action. */
	static readonly ActivatePipelineConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly AddTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DeactivatePipeline action. */
	static readonly DeactivatePipelineConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the DeletePipeline action. */
	static readonly DeletePipelineConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeObjects action. */
	static readonly DescribeObjectsConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePipelines action. */
	static readonly DescribePipelinesConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the EvaluateExpression action. */
	static readonly EvaluateExpressionConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the GetPipelineDefinition action. */
	static readonly actionGetPipelineDefinitionConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the PollForTask action. */
	static readonly PollForTaskConditionKeys: string[] = [
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the PutPipelineDefinition action. */
	static readonly PutPipelineDefinitionConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the QueryObjects action. */
	static readonly QueryObjectsConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly RemoveTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the SetStatus action. */
	static readonly actionSetStatusConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the ValidatePipelineDefinition action. */
	static readonly ValidatePipelineDefinitionConditionKeys: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: datapipeline:PipelineCreator (ArrayOfString) */
	static readonly PIPELINE_CREATOR = "datapipeline:PipelineCreator";
	/** Condition key: datapipeline:Tag/${TagKey} (String) */
	static readonly TAG = "datapipeline:Tag/${TagKey}";
	/** Condition key: datapipeline:workerGroup (ArrayOfString) */
	static readonly WORKER_GROUP = "datapipeline:workerGroup";

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
	 * Generates a condition block for `datapipeline:PipelineCreator`.
	 */
	static pipelineCreator(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "datapipeline:PipelineCreator": values },
		};
	}

	/**
	 * Generates a condition block for `datapipeline:Tag/${TagKey}`.
	 */
	static tag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "datapipeline:Tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `datapipeline:workerGroup`.
	 */
	static workerGroup(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "datapipeline:workerGroup": values },
		};
	}
}
