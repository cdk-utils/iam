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
	static readonly ACTIVATE_PIPELINE = "datapipeline:ActivatePipeline";
	/** [Tagging] datapipeline:AddTags */
	static readonly ADD_TAGS = "datapipeline:AddTags";
	/** [Write] datapipeline:CreatePipeline */
	static readonly CREATE_PIPELINE = "datapipeline:CreatePipeline";
	/** [Write] datapipeline:DeactivatePipeline */
	static readonly DEACTIVATE_PIPELINE = "datapipeline:DeactivatePipeline";
	/** [Write] datapipeline:DeletePipeline */
	static readonly DELETE_PIPELINE = "datapipeline:DeletePipeline";
	/** [Read] datapipeline:DescribeObjects */
	static readonly DESCRIBE_OBJECTS = "datapipeline:DescribeObjects";
	/** [Read] datapipeline:DescribePipelines */
	static readonly DESCRIBE_PIPELINES = "datapipeline:DescribePipelines";
	/** [Read] datapipeline:EvaluateExpression */
	static readonly EVALUATE_EXPRESSION = "datapipeline:EvaluateExpression";
	/** [List] datapipeline:GetAccountLimits */
	static readonly GET_ACCOUNT_LIMITS = "datapipeline:GetAccountLimits";
	/** [Read] datapipeline:GetPipelineDefinition */
	static readonly GET_PIPELINE_DEFINITION =
		"datapipeline:GetPipelineDefinition";
	/** [List] datapipeline:ListPipelines */
	static readonly LIST_PIPELINES = "datapipeline:ListPipelines";
	/** [Write] datapipeline:PollForTask */
	static readonly POLL_FOR_TASK = "datapipeline:PollForTask";
	/** [Write] datapipeline:PutAccountLimits */
	static readonly PUT_ACCOUNT_LIMITS = "datapipeline:PutAccountLimits";
	/** [Write] datapipeline:PutPipelineDefinition */
	static readonly PUT_PIPELINE_DEFINITION =
		"datapipeline:PutPipelineDefinition";
	/** [Read] datapipeline:QueryObjects */
	static readonly QUERY_OBJECTS = "datapipeline:QueryObjects";
	/** [Tagging] datapipeline:RemoveTags */
	static readonly REMOVE_TAGS = "datapipeline:RemoveTags";
	/** [Write] datapipeline:ReportTaskProgress */
	static readonly REPORT_TASK_PROGRESS = "datapipeline:ReportTaskProgress";
	/** [Write] datapipeline:ReportTaskRunnerHeartbeat */
	static readonly REPORT_TASK_RUNNER_HEARTBEAT =
		"datapipeline:ReportTaskRunnerHeartbeat";
	/** [Write] datapipeline:SetStatus */
	static readonly SET_STATUS = "datapipeline:SetStatus";
	/** [Write] datapipeline:SetTaskStatus */
	static readonly SET_TASK_STATUS = "datapipeline:SetTaskStatus";
	/** [Read] datapipeline:ValidatePipelineDefinition */
	static readonly VALIDATE_PIPELINE_DEFINITION =
		"datapipeline:ValidatePipelineDefinition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DatapipelineActions.DESCRIBE_OBJECTS,
		DatapipelineActions.DESCRIBE_PIPELINES,
		DatapipelineActions.EVALUATE_EXPRESSION,
		DatapipelineActions.GET_PIPELINE_DEFINITION,
		DatapipelineActions.QUERY_OBJECTS,
		DatapipelineActions.VALIDATE_PIPELINE_DEFINITION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DatapipelineActions.ACTIVATE_PIPELINE,
		DatapipelineActions.CREATE_PIPELINE,
		DatapipelineActions.DEACTIVATE_PIPELINE,
		DatapipelineActions.DELETE_PIPELINE,
		DatapipelineActions.POLL_FOR_TASK,
		DatapipelineActions.PUT_ACCOUNT_LIMITS,
		DatapipelineActions.PUT_PIPELINE_DEFINITION,
		DatapipelineActions.REPORT_TASK_PROGRESS,
		DatapipelineActions.REPORT_TASK_RUNNER_HEARTBEAT,
		DatapipelineActions.SET_STATUS,
		DatapipelineActions.SET_TASK_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DatapipelineActions.GET_ACCOUNT_LIMITS,
		DatapipelineActions.LIST_PIPELINES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DatapipelineActions.ADD_TAGS,
		DatapipelineActions.REMOVE_TAGS,
	];
}

const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datapipeline:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for datapipeline resources.
 */
export class DatapipelineResources {
	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The PipelineId component of the ARN. */
		readonly pipelineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineId: string;
	} {
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
	static readonly ACTIVATE_PIPELINE: string[] = [
		"datapipeline:ActivatePipeline",
		"iam:PassRole",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["datapipeline:AddTags"];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CREATE_PIPELINE: string[] = [
		"datapipeline:AddTags",
		"datapipeline:CreatePipeline",
	];
	/** IAM actions required for the DeactivatePipeline API call. */
	static readonly DEACTIVATE_PIPELINE: string[] = [
		"datapipeline:DeactivatePipeline",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DELETE_PIPELINE: string[] = ["datapipeline:DeletePipeline"];
	/** IAM actions required for the DescribeObjects API call. */
	static readonly DESCRIBE_OBJECTS: string[] = ["datapipeline:DescribeObjects"];
	/** IAM actions required for the DescribePipelines API call. */
	static readonly DESCRIBE_PIPELINES: string[] = [
		"datapipeline:DescribePipelines",
	];
	/** IAM actions required for the EvaluateExpression API call. */
	static readonly EVALUATE_EXPRESSION: string[] = [
		"datapipeline:EvaluateExpression",
	];
	/** IAM actions required for the GetPipelineDefinition API call. */
	static readonly GET_PIPELINE_DEFINITION: string[] = [
		"datapipeline:GetPipelineDefinition",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly LIST_PIPELINES: string[] = ["datapipeline:ListPipelines"];
	/** IAM actions required for the PollForTask API call. */
	static readonly POLL_FOR_TASK: string[] = ["datapipeline:PollForTask"];
	/** IAM actions required for the PutPipelineDefinition API call. */
	static readonly PUT_PIPELINE_DEFINITION: string[] = [
		"iam:PassRole",
		"datapipeline:PutPipelineDefinition",
	];
	/** IAM actions required for the QueryObjects API call. */
	static readonly QUERY_OBJECTS: string[] = ["datapipeline:QueryObjects"];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["datapipeline:RemoveTags"];
	/** IAM actions required for the ReportTaskProgress API call. */
	static readonly REPORT_TASK_PROGRESS: string[] = [
		"datapipeline:ReportTaskProgress",
	];
	/** IAM actions required for the ReportTaskRunnerHeartbeat API call. */
	static readonly REPORT_TASK_RUNNER_HEARTBEAT: string[] = [
		"datapipeline:ReportTaskRunnerHeartbeat",
	];
	/** IAM actions required for the SetStatus API call. */
	static readonly SET_STATUS: string[] = ["datapipeline:SetStatus"];
	/** IAM actions required for the SetTaskStatus API call. */
	static readonly SET_TASK_STATUS: string[] = ["datapipeline:SetTaskStatus"];
	/** IAM actions required for the ValidatePipelineDefinition API call. */
	static readonly VALIDATE_PIPELINE_DEFINITION: string[] = [
		"iam:PassRole",
		"datapipeline:ValidatePipelineDefinition",
	];
}

/**
 * Condition key constants and builders for datapipeline.
 */
export class DatapipelineConditions {
	/** Condition keys applicable to the ActivatePipeline action. */
	static readonly ACTIVATE_PIPELINE_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DeactivatePipeline action. */
	static readonly DEACTIVATE_PIPELINE_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the DeletePipeline action. */
	static readonly DELETE_PIPELINE_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeObjects action. */
	static readonly DESCRIBE_OBJECTS_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePipelines action. */
	static readonly DESCRIBE_PIPELINES_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the EvaluateExpression action. */
	static readonly EVALUATE_EXPRESSION_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the GetPipelineDefinition action. */
	static readonly GET_PIPELINE_DEFINITION_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the PollForTask action. */
	static readonly POLL_FOR_TASK_CONDITION_KEYS: string[] = [
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the PutPipelineDefinition action. */
	static readonly PUT_PIPELINE_DEFINITION_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];
	/** Condition keys applicable to the QueryObjects action. */
	static readonly QUERY_OBJECTS_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the SetStatus action. */
	static readonly SET_STATUS_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
	];
	/** Condition keys applicable to the ValidatePipelineDefinition action. */
	static readonly VALIDATE_PIPELINE_DEFINITION_CONDITION_KEYS: string[] = [
		"datapipeline:PipelineCreator",
		"datapipeline:Tag/${TagKey}",
		"datapipeline:workerGroup",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
