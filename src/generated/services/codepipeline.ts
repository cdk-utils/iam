// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codepipeline.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codepipeline service.
 */
export class CodePipelineActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codepipeline";

	/** [Write] codepipeline:AcknowledgeJob */
	static readonly ACKNOWLEDGE_JOB = "codepipeline:AcknowledgeJob";
	/** [Write] codepipeline:AcknowledgeThirdPartyJob */
	static readonly ACKNOWLEDGE_THIRD_PARTY_JOB =
		"codepipeline:AcknowledgeThirdPartyJob";
	/** [Write] codepipeline:CreateCustomActionType */
	static readonly CREATE_CUSTOM_ACTION_TYPE =
		"codepipeline:CreateCustomActionType";
	/** [Write] codepipeline:CreatePipeline */
	static readonly CREATE_PIPELINE = "codepipeline:CreatePipeline";
	/** [Write] codepipeline:DeleteCustomActionType */
	static readonly DELETE_CUSTOM_ACTION_TYPE =
		"codepipeline:DeleteCustomActionType";
	/** [Write] codepipeline:DeletePipeline */
	static readonly DELETE_PIPELINE = "codepipeline:DeletePipeline";
	/** [Write] codepipeline:DeleteWebhook */
	static readonly DELETE_WEBHOOK = "codepipeline:DeleteWebhook";
	/** [Write] codepipeline:DeregisterWebhookWithThirdParty */
	static readonly DEREGISTER_WEBHOOK_WITH_THIRD_PARTY =
		"codepipeline:DeregisterWebhookWithThirdParty";
	/** [Write] codepipeline:DisableStageTransition */
	static readonly DISABLE_STAGE_TRANSITION =
		"codepipeline:DisableStageTransition";
	/** [Write] codepipeline:EnableStageTransition */
	static readonly ENABLE_STAGE_TRANSITION =
		"codepipeline:EnableStageTransition";
	/** [Read] codepipeline:GetActionType */
	static readonly GET_ACTION_TYPE = "codepipeline:GetActionType";
	/** [Read] codepipeline:GetJobDetails */
	static readonly GET_JOB_DETAILS = "codepipeline:GetJobDetails";
	/** [Read] codepipeline:GetPipeline */
	static readonly GET_PIPELINE = "codepipeline:GetPipeline";
	/** [Read] codepipeline:GetPipelineExecution */
	static readonly GET_PIPELINE_EXECUTION = "codepipeline:GetPipelineExecution";
	/** [Read] codepipeline:GetPipelineState */
	static readonly GET_PIPELINE_STATE = "codepipeline:GetPipelineState";
	/** [Read] codepipeline:GetThirdPartyJobDetails */
	static readonly GET_THIRD_PARTY_JOB_DETAILS =
		"codepipeline:GetThirdPartyJobDetails";
	/** [Read] codepipeline:ListActionExecutions */
	static readonly LIST_ACTION_EXECUTIONS = "codepipeline:ListActionExecutions";
	/** [Read] codepipeline:ListActionTypes */
	static readonly LIST_ACTION_TYPES = "codepipeline:ListActionTypes";
	/** [Read] codepipeline:ListDeployActionExecutionTargets */
	static readonly LIST_DEPLOY_ACTION_EXECUTION_TARGETS =
		"codepipeline:ListDeployActionExecutionTargets";
	/** [List] codepipeline:ListPipelineExecutions */
	static readonly LIST_PIPELINE_EXECUTIONS =
		"codepipeline:ListPipelineExecutions";
	/** [List] codepipeline:ListPipelines */
	static readonly LIST_PIPELINES = "codepipeline:ListPipelines";
	/** [Read] codepipeline:ListRuleExecutions */
	static readonly LIST_RULE_EXECUTIONS = "codepipeline:ListRuleExecutions";
	/** [Read] codepipeline:ListRuleTypes */
	static readonly LIST_RULE_TYPES = "codepipeline:ListRuleTypes";
	/** [Read] codepipeline:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codepipeline:ListTagsForResource";
	/** [List] codepipeline:ListWebhooks */
	static readonly LIST_WEBHOOKS = "codepipeline:ListWebhooks";
	/** [Write] codepipeline:OverrideStageCondition */
	static readonly OVERRIDE_STAGE_CONDITION =
		"codepipeline:OverrideStageCondition";
	/** [Write] codepipeline:PollForJobs */
	static readonly POLL_FOR_JOBS = "codepipeline:PollForJobs";
	/** [Write] codepipeline:PollForThirdPartyJobs */
	static readonly POLL_FOR_THIRD_PARTY_JOBS =
		"codepipeline:PollForThirdPartyJobs";
	/** [Write] codepipeline:PutActionRevision */
	static readonly PUT_ACTION_REVISION = "codepipeline:PutActionRevision";
	/** [Write] codepipeline:PutApprovalResult */
	static readonly PUT_APPROVAL_RESULT = "codepipeline:PutApprovalResult";
	/** [Write] codepipeline:PutJobFailureResult */
	static readonly PUT_JOB_FAILURE_RESULT = "codepipeline:PutJobFailureResult";
	/** [Write] codepipeline:PutJobSuccessResult */
	static readonly PUT_JOB_SUCCESS_RESULT = "codepipeline:PutJobSuccessResult";
	/** [Write] codepipeline:PutThirdPartyJobFailureResult */
	static readonly PUT_THIRD_PARTY_JOB_FAILURE_RESULT =
		"codepipeline:PutThirdPartyJobFailureResult";
	/** [Write] codepipeline:PutThirdPartyJobSuccessResult */
	static readonly PUT_THIRD_PARTY_JOB_SUCCESS_RESULT =
		"codepipeline:PutThirdPartyJobSuccessResult";
	/** [Write] codepipeline:PutWebhook */
	static readonly PUT_WEBHOOK = "codepipeline:PutWebhook";
	/** [Write] codepipeline:RegisterWebhookWithThirdParty */
	static readonly REGISTER_WEBHOOK_WITH_THIRD_PARTY =
		"codepipeline:RegisterWebhookWithThirdParty";
	/** [Write] codepipeline:RetryStageExecution */
	static readonly RETRY_STAGE_EXECUTION = "codepipeline:RetryStageExecution";
	/** [Write] codepipeline:RollbackStage */
	static readonly ROLLBACK_STAGE = "codepipeline:RollbackStage";
	/** [Write] codepipeline:StartPipelineExecution */
	static readonly START_PIPELINE_EXECUTION =
		"codepipeline:StartPipelineExecution";
	/** [Write] codepipeline:StopPipelineExecution */
	static readonly STOP_PIPELINE_EXECUTION =
		"codepipeline:StopPipelineExecution";
	/** [Tagging] codepipeline:TagResource */
	static readonly TAG_RESOURCE = "codepipeline:TagResource";
	/** [Tagging] codepipeline:UntagResource */
	static readonly UNTAG_RESOURCE = "codepipeline:UntagResource";
	/** [Write] codepipeline:UpdateActionType */
	static readonly UPDATE_ACTION_TYPE = "codepipeline:UpdateActionType";
	/** [Write] codepipeline:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "codepipeline:UpdatePipeline";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodePipelineActions.GET_ACTION_TYPE,
		CodePipelineActions.GET_JOB_DETAILS,
		CodePipelineActions.GET_PIPELINE,
		CodePipelineActions.GET_PIPELINE_EXECUTION,
		CodePipelineActions.GET_PIPELINE_STATE,
		CodePipelineActions.GET_THIRD_PARTY_JOB_DETAILS,
		CodePipelineActions.LIST_ACTION_EXECUTIONS,
		CodePipelineActions.LIST_ACTION_TYPES,
		CodePipelineActions.LIST_DEPLOY_ACTION_EXECUTION_TARGETS,
		CodePipelineActions.LIST_RULE_EXECUTIONS,
		CodePipelineActions.LIST_RULE_TYPES,
		CodePipelineActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodePipelineActions.ACKNOWLEDGE_JOB,
		CodePipelineActions.ACKNOWLEDGE_THIRD_PARTY_JOB,
		CodePipelineActions.CREATE_CUSTOM_ACTION_TYPE,
		CodePipelineActions.CREATE_PIPELINE,
		CodePipelineActions.DELETE_CUSTOM_ACTION_TYPE,
		CodePipelineActions.DELETE_PIPELINE,
		CodePipelineActions.DELETE_WEBHOOK,
		CodePipelineActions.DEREGISTER_WEBHOOK_WITH_THIRD_PARTY,
		CodePipelineActions.DISABLE_STAGE_TRANSITION,
		CodePipelineActions.ENABLE_STAGE_TRANSITION,
		CodePipelineActions.OVERRIDE_STAGE_CONDITION,
		CodePipelineActions.POLL_FOR_JOBS,
		CodePipelineActions.POLL_FOR_THIRD_PARTY_JOBS,
		CodePipelineActions.PUT_ACTION_REVISION,
		CodePipelineActions.PUT_APPROVAL_RESULT,
		CodePipelineActions.PUT_JOB_FAILURE_RESULT,
		CodePipelineActions.PUT_JOB_SUCCESS_RESULT,
		CodePipelineActions.PUT_THIRD_PARTY_JOB_FAILURE_RESULT,
		CodePipelineActions.PUT_THIRD_PARTY_JOB_SUCCESS_RESULT,
		CodePipelineActions.PUT_WEBHOOK,
		CodePipelineActions.REGISTER_WEBHOOK_WITH_THIRD_PARTY,
		CodePipelineActions.RETRY_STAGE_EXECUTION,
		CodePipelineActions.ROLLBACK_STAGE,
		CodePipelineActions.START_PIPELINE_EXECUTION,
		CodePipelineActions.STOP_PIPELINE_EXECUTION,
		CodePipelineActions.UPDATE_ACTION_TYPE,
		CodePipelineActions.UPDATE_PIPELINE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodePipelineActions.LIST_PIPELINE_EXECUTIONS,
		CodePipelineActions.LIST_PIPELINES,
		CodePipelineActions.LIST_WEBHOOKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodePipelineActions.TAG_RESOURCE,
		CodePipelineActions.UNTAG_RESOURCE,
	];
}

const ActionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)/(?<stageName>[^:/?]+)/(?<actionName>[^:/?]+)$",
);
const ActiontypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):actiontype:(?<owner>[^:/?]+)/(?<category>[^:/?]+)/(?<provider>[^:/?]+)/(?<version>[^:/?]+)$",
);
const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)$",
);
const StageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)/(?<stageName>[^:/?]+)$",
);
const WebhookArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):webhook:(?<webhookName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codepipeline resources.
 */
export class CodePipelineResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** The StageName component of the ARN. */
		readonly stageName: string;
		/** The ActionName component of the ARN. */
		readonly actionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codepipeline:${props.region ?? "*"}:${props.account ?? "*"}:${props.pipelineName}/${props.stageName}/${props.actionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the action resource.
	 */
	static isValidActionArn(arn: string): boolean {
		return ActionArnRegex.test(arn);
	}

	/**
	 * Parses a action ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineName: string;
		stageName: string;
		actionName: string;
	} {
		const match = ActionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid action ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
			stageName: match.groups!.stageName,
			actionName: match.groups!.actionName,
		};
	}

	/**
	 * Builds an ARN for the actiontype resource.
	 */
	static actiontype(props: {
		/** The Owner component of the ARN. */
		readonly owner: string;
		/** The Category component of the ARN. */
		readonly category: string;
		/** The Provider component of the ARN. */
		readonly provider: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codepipeline:${props.region ?? "*"}:${props.account ?? "*"}:actiontype:${props.owner}/${props.category}/${props.provider}/${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the actiontype resource.
	 */
	static isValidActiontypeArn(arn: string): boolean {
		return ActiontypeArnRegex.test(arn);
	}

	/**
	 * Parses a actiontype ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActiontypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		owner: string;
		category: string;
		provider: string;
		version: string;
	} {
		const match = ActiontypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid actiontype ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			owner: match.groups!.owner,
			category: match.groups!.category,
			provider: match.groups!.provider,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codepipeline:${props.region ?? "*"}:${props.account ?? "*"}:${props.pipelineName}`;
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
		pipelineName: string;
	} {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
		};
	}

	/**
	 * Builds an ARN for the stage resource.
	 */
	static stage(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** The StageName component of the ARN. */
		readonly stageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codepipeline:${props.region ?? "*"}:${props.account ?? "*"}:${props.pipelineName}/${props.stageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stage resource.
	 */
	static isValidStageArn(arn: string): boolean {
		return StageArnRegex.test(arn);
	}

	/**
	 * Parses a stage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineName: string;
		stageName: string;
	} {
		const match = StageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
			stageName: match.groups!.stageName,
		};
	}

	/**
	 * Builds an ARN for the webhook resource.
	 */
	static webhook(props: {
		/** The WebhookName component of the ARN. */
		readonly webhookName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codepipeline:${props.region ?? "*"}:${props.account ?? "*"}:webhook:${props.webhookName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webhook resource.
	 */
	static isValidWebhookArn(arn: string): boolean {
		return WebhookArnRegex.test(arn);
	}

	/**
	 * Parses a webhook ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebhookArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		webhookName: string;
	} {
		const match = WebhookArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webhook ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			webhookName: match.groups!.webhookName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codepipeline.
 */
export class CodePipelineOperations {
	/** IAM actions required for the AcknowledgeJob API call. */
	static readonly ACKNOWLEDGE_JOB: string[] = ["codepipeline:AcknowledgeJob"];
	/** IAM actions required for the AcknowledgeThirdPartyJob API call. */
	static readonly ACKNOWLEDGE_THIRD_PARTY_JOB: string[] = [
		"codepipeline:AcknowledgeThirdPartyJob",
	];
	/** IAM actions required for the CreateCustomActionType API call. */
	static readonly CREATE_CUSTOM_ACTION_TYPE: string[] = [
		"codepipeline:CreateCustomActionType",
		"codepipeline:TagResource",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CREATE_PIPELINE: string[] = [
		"codepipeline:CreatePipeline",
		"codestar-connections:PassConnection",
		"iam:PassRole",
		"codepipeline:TagResource",
	];
	/** IAM actions required for the DeleteCustomActionType API call. */
	static readonly DELETE_CUSTOM_ACTION_TYPE: string[] = [
		"codepipeline:DeleteCustomActionType",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DELETE_PIPELINE: string[] = ["codepipeline:DeletePipeline"];
	/** IAM actions required for the DeleteWebhook API call. */
	static readonly DELETE_WEBHOOK: string[] = ["codepipeline:DeleteWebhook"];
	/** IAM actions required for the DeregisterWebhookWithThirdParty API call. */
	static readonly DEREGISTER_WEBHOOK_WITH_THIRD_PARTY: string[] = [
		"codepipeline:DeregisterWebhookWithThirdParty",
	];
	/** IAM actions required for the DisableStageTransition API call. */
	static readonly DISABLE_STAGE_TRANSITION: string[] = [
		"codepipeline:DisableStageTransition",
	];
	/** IAM actions required for the EnableStageTransition API call. */
	static readonly ENABLE_STAGE_TRANSITION: string[] = [
		"codepipeline:EnableStageTransition",
	];
	/** IAM actions required for the GetActionType API call. */
	static readonly GET_ACTION_TYPE: string[] = ["codepipeline:GetActionType"];
	/** IAM actions required for the GetJobDetails API call. */
	static readonly GET_JOB_DETAILS: string[] = ["codepipeline:GetJobDetails"];
	/** IAM actions required for the GetPipeline API call. */
	static readonly GET_PIPELINE: string[] = ["codepipeline:GetPipeline"];
	/** IAM actions required for the GetPipelineExecution API call. */
	static readonly GET_PIPELINE_EXECUTION: string[] = [
		"codepipeline:GetPipelineExecution",
	];
	/** IAM actions required for the GetPipelineState API call. */
	static readonly GET_PIPELINE_STATE: string[] = [
		"codepipeline:GetPipelineState",
	];
	/** IAM actions required for the GetThirdPartyJobDetails API call. */
	static readonly GET_THIRD_PARTY_JOB_DETAILS: string[] = [
		"codepipeline:GetThirdPartyJobDetails",
	];
	/** IAM actions required for the ListActionExecutions API call. */
	static readonly LIST_ACTION_EXECUTIONS: string[] = [
		"codepipeline:ListActionExecutions",
	];
	/** IAM actions required for the ListActionTypes API call. */
	static readonly LIST_ACTION_TYPES: string[] = [
		"codepipeline:ListActionTypes",
	];
	/** IAM actions required for the ListDeployActionExecutionTargets API call. */
	static readonly LIST_DEPLOY_ACTION_EXECUTION_TARGETS: string[] = [
		"codepipeline:ListDeployActionExecutionTargets",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly LIST_PIPELINE_EXECUTIONS: string[] = [
		"codepipeline:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly LIST_PIPELINES: string[] = ["codepipeline:ListPipelines"];
	/** IAM actions required for the ListRuleExecutions API call. */
	static readonly LIST_RULE_EXECUTIONS: string[] = [
		"codepipeline:ListRuleExecutions",
	];
	/** IAM actions required for the ListRuleTypes API call. */
	static readonly LIST_RULE_TYPES: string[] = ["codepipeline:ListRuleTypes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codepipeline:ListTagsForResource",
	];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly LIST_WEBHOOKS: string[] = ["codepipeline:ListWebhooks"];
	/** IAM actions required for the OverrideStageCondition API call. */
	static readonly OVERRIDE_STAGE_CONDITION: string[] = [
		"codepipeline:OverrideStageCondition",
	];
	/** IAM actions required for the PollForJobs API call. */
	static readonly POLL_FOR_JOBS: string[] = ["codepipeline:PollForJobs"];
	/** IAM actions required for the PollForThirdPartyJobs API call. */
	static readonly POLL_FOR_THIRD_PARTY_JOBS: string[] = [
		"codepipeline:PollForThirdPartyJobs",
	];
	/** IAM actions required for the PutActionRevision API call. */
	static readonly PUT_ACTION_REVISION: string[] = [
		"codepipeline:PutActionRevision",
	];
	/** IAM actions required for the PutApprovalResult API call. */
	static readonly PUT_APPROVAL_RESULT: string[] = [
		"codepipeline:PutApprovalResult",
	];
	/** IAM actions required for the PutJobFailureResult API call. */
	static readonly PUT_JOB_FAILURE_RESULT: string[] = [
		"codepipeline:PutJobFailureResult",
	];
	/** IAM actions required for the PutJobSuccessResult API call. */
	static readonly PUT_JOB_SUCCESS_RESULT: string[] = [
		"codepipeline:PutJobSuccessResult",
	];
	/** IAM actions required for the PutThirdPartyJobFailureResult API call. */
	static readonly PUT_THIRD_PARTY_JOB_FAILURE_RESULT: string[] = [
		"codepipeline:PutThirdPartyJobFailureResult",
	];
	/** IAM actions required for the PutThirdPartyJobSuccessResult API call. */
	static readonly PUT_THIRD_PARTY_JOB_SUCCESS_RESULT: string[] = [
		"codepipeline:PutThirdPartyJobSuccessResult",
	];
	/** IAM actions required for the PutWebhook API call. */
	static readonly PUT_WEBHOOK: string[] = [
		"codepipeline:PutWebhook",
		"codepipeline:TagResource",
		"codepipeline:UntagResource",
	];
	/** IAM actions required for the RegisterWebhookWithThirdParty API call. */
	static readonly REGISTER_WEBHOOK_WITH_THIRD_PARTY: string[] = [
		"codepipeline:RegisterWebhookWithThirdParty",
	];
	/** IAM actions required for the RetryStageExecution API call. */
	static readonly RETRY_STAGE_EXECUTION: string[] = [
		"codepipeline:RetryStageExecution",
	];
	/** IAM actions required for the RollbackStage API call. */
	static readonly ROLLBACK_STAGE: string[] = ["codepipeline:RollbackStage"];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly START_PIPELINE_EXECUTION: string[] = [
		"codepipeline:StartPipelineExecution",
	];
	/** IAM actions required for the StopPipelineExecution API call. */
	static readonly STOP_PIPELINE_EXECUTION: string[] = [
		"codepipeline:StopPipelineExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codepipeline:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["codepipeline:UntagResource"];
	/** IAM actions required for the UpdateActionType API call. */
	static readonly UPDATE_ACTION_TYPE: string[] = [
		"codepipeline:UpdateActionType",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UPDATE_PIPELINE: string[] = [
		"codestar-connections:PassConnection",
		"iam:PassRole",
		"codepipeline:UpdatePipeline",
	];
}

/**
 * Condition key constants and builders for codepipeline.
 */
export class CodePipelineConditions {
	/** Condition keys applicable to the CreateCustomActionType action. */
	static readonly CREATE_CUSTOM_ACTION_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutWebhook action. */
	static readonly PUT_WEBHOOK_CONDITION_KEYS: string[] = [
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
