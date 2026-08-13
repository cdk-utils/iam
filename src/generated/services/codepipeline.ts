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
	static readonly AcknowledgeJob = "codepipeline:AcknowledgeJob";
	/** [Write] codepipeline:AcknowledgeThirdPartyJob */
	static readonly AcknowledgeThirdPartyJob =
		"codepipeline:AcknowledgeThirdPartyJob";
	/** [Write] codepipeline:CreateCustomActionType */
	static readonly CreateCustomActionType =
		"codepipeline:CreateCustomActionType";
	/** [Write] codepipeline:CreatePipeline */
	static readonly CreatePipeline = "codepipeline:CreatePipeline";
	/** [Write] codepipeline:DeleteCustomActionType */
	static readonly DeleteCustomActionType =
		"codepipeline:DeleteCustomActionType";
	/** [Write] codepipeline:DeletePipeline */
	static readonly DeletePipeline = "codepipeline:DeletePipeline";
	/** [Write] codepipeline:DeleteWebhook */
	static readonly DeleteWebhook = "codepipeline:DeleteWebhook";
	/** [Write] codepipeline:DeregisterWebhookWithThirdParty */
	static readonly DeregisterWebhookWithThirdParty =
		"codepipeline:DeregisterWebhookWithThirdParty";
	/** [Write] codepipeline:DisableStageTransition */
	static readonly DisableStageTransition =
		"codepipeline:DisableStageTransition";
	/** [Write] codepipeline:EnableStageTransition */
	static readonly EnableStageTransition = "codepipeline:EnableStageTransition";
	/** [Read] codepipeline:GetActionType */
	static readonly actionGetActionType = "codepipeline:GetActionType";
	/** [Read] codepipeline:GetJobDetails */
	static readonly actionGetJobDetails = "codepipeline:GetJobDetails";
	/** [Read] codepipeline:GetPipeline */
	static readonly actionGetPipeline = "codepipeline:GetPipeline";
	/** [Read] codepipeline:GetPipelineExecution */
	static readonly actionGetPipelineExecution =
		"codepipeline:GetPipelineExecution";
	/** [Read] codepipeline:GetPipelineState */
	static readonly actionGetPipelineState = "codepipeline:GetPipelineState";
	/** [Read] codepipeline:GetThirdPartyJobDetails */
	static readonly actionGetThirdPartyJobDetails =
		"codepipeline:GetThirdPartyJobDetails";
	/** [Read] codepipeline:ListActionExecutions */
	static readonly ListActionExecutions = "codepipeline:ListActionExecutions";
	/** [Read] codepipeline:ListActionTypes */
	static readonly ListActionTypes = "codepipeline:ListActionTypes";
	/** [Read] codepipeline:ListDeployActionExecutionTargets */
	static readonly ListDeployActionExecutionTargets =
		"codepipeline:ListDeployActionExecutionTargets";
	/** [List] codepipeline:ListPipelineExecutions */
	static readonly ListPipelineExecutions =
		"codepipeline:ListPipelineExecutions";
	/** [List] codepipeline:ListPipelines */
	static readonly ListPipelines = "codepipeline:ListPipelines";
	/** [Read] codepipeline:ListRuleExecutions */
	static readonly ListRuleExecutions = "codepipeline:ListRuleExecutions";
	/** [Read] codepipeline:ListRuleTypes */
	static readonly ListRuleTypes = "codepipeline:ListRuleTypes";
	/** [Read] codepipeline:ListTagsForResource */
	static readonly ListTagsForResource = "codepipeline:ListTagsForResource";
	/** [List] codepipeline:ListWebhooks */
	static readonly ListWebhooks = "codepipeline:ListWebhooks";
	/** [Write] codepipeline:OverrideStageCondition */
	static readonly OverrideStageCondition =
		"codepipeline:OverrideStageCondition";
	/** [Write] codepipeline:PollForJobs */
	static readonly PollForJobs = "codepipeline:PollForJobs";
	/** [Write] codepipeline:PollForThirdPartyJobs */
	static readonly PollForThirdPartyJobs = "codepipeline:PollForThirdPartyJobs";
	/** [Write] codepipeline:PutActionRevision */
	static readonly PutActionRevision = "codepipeline:PutActionRevision";
	/** [Write] codepipeline:PutApprovalResult */
	static readonly PutApprovalResult = "codepipeline:PutApprovalResult";
	/** [Write] codepipeline:PutJobFailureResult */
	static readonly PutJobFailureResult = "codepipeline:PutJobFailureResult";
	/** [Write] codepipeline:PutJobSuccessResult */
	static readonly PutJobSuccessResult = "codepipeline:PutJobSuccessResult";
	/** [Write] codepipeline:PutThirdPartyJobFailureResult */
	static readonly PutThirdPartyJobFailureResult =
		"codepipeline:PutThirdPartyJobFailureResult";
	/** [Write] codepipeline:PutThirdPartyJobSuccessResult */
	static readonly PutThirdPartyJobSuccessResult =
		"codepipeline:PutThirdPartyJobSuccessResult";
	/** [Write] codepipeline:PutWebhook */
	static readonly PutWebhook = "codepipeline:PutWebhook";
	/** [Write] codepipeline:RegisterWebhookWithThirdParty */
	static readonly RegisterWebhookWithThirdParty =
		"codepipeline:RegisterWebhookWithThirdParty";
	/** [Write] codepipeline:RetryStageExecution */
	static readonly RetryStageExecution = "codepipeline:RetryStageExecution";
	/** [Write] codepipeline:RollbackStage */
	static readonly RollbackStage = "codepipeline:RollbackStage";
	/** [Write] codepipeline:StartPipelineExecution */
	static readonly StartPipelineExecution =
		"codepipeline:StartPipelineExecution";
	/** [Write] codepipeline:StopPipelineExecution */
	static readonly StopPipelineExecution = "codepipeline:StopPipelineExecution";
	/** [Tagging] codepipeline:TagResource */
	static readonly TagResource = "codepipeline:TagResource";
	/** [Tagging] codepipeline:UntagResource */
	static readonly UntagResource = "codepipeline:UntagResource";
	/** [Write] codepipeline:UpdateActionType */
	static readonly UpdateActionType = "codepipeline:UpdateActionType";
	/** [Write] codepipeline:UpdatePipeline */
	static readonly UpdatePipeline = "codepipeline:UpdatePipeline";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodePipelineActions.actionGetActionType,
		CodePipelineActions.actionGetJobDetails,
		CodePipelineActions.actionGetPipeline,
		CodePipelineActions.actionGetPipelineExecution,
		CodePipelineActions.actionGetPipelineState,
		CodePipelineActions.actionGetThirdPartyJobDetails,
		CodePipelineActions.ListActionExecutions,
		CodePipelineActions.ListActionTypes,
		CodePipelineActions.ListDeployActionExecutionTargets,
		CodePipelineActions.ListRuleExecutions,
		CodePipelineActions.ListRuleTypes,
		CodePipelineActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodePipelineActions.AcknowledgeJob,
		CodePipelineActions.AcknowledgeThirdPartyJob,
		CodePipelineActions.CreateCustomActionType,
		CodePipelineActions.CreatePipeline,
		CodePipelineActions.DeleteCustomActionType,
		CodePipelineActions.DeletePipeline,
		CodePipelineActions.DeleteWebhook,
		CodePipelineActions.DeregisterWebhookWithThirdParty,
		CodePipelineActions.DisableStageTransition,
		CodePipelineActions.EnableStageTransition,
		CodePipelineActions.OverrideStageCondition,
		CodePipelineActions.PollForJobs,
		CodePipelineActions.PollForThirdPartyJobs,
		CodePipelineActions.PutActionRevision,
		CodePipelineActions.PutApprovalResult,
		CodePipelineActions.PutJobFailureResult,
		CodePipelineActions.PutJobSuccessResult,
		CodePipelineActions.PutThirdPartyJobFailureResult,
		CodePipelineActions.PutThirdPartyJobSuccessResult,
		CodePipelineActions.PutWebhook,
		CodePipelineActions.RegisterWebhookWithThirdParty,
		CodePipelineActions.RetryStageExecution,
		CodePipelineActions.RollbackStage,
		CodePipelineActions.StartPipelineExecution,
		CodePipelineActions.StopPipelineExecution,
		CodePipelineActions.UpdateActionType,
		CodePipelineActions.UpdatePipeline,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodePipelineActions.ListPipelineExecutions,
		CodePipelineActions.ListPipelines,
		CodePipelineActions.ListWebhooks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodePipelineActions.TagResource,
		CodePipelineActions.UntagResource,
	];
}

/**
 * Properties for building a action ARN.
 */
export interface CodePipelineActionArnProps {
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
}

/**
 * Parsed components of a action ARN.
 */
export interface CodePipelineActionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
	/** The StageName component. */
	readonly stageName: string;
	/** The ActionName component. */
	readonly actionName: string;
}

/**
 * Properties for building a actiontype ARN.
 */
export interface CodePipelineActiontypeArnProps {
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
}

/**
 * Parsed components of a actiontype ARN.
 */
export interface CodePipelineActiontypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Owner component. */
	readonly owner: string;
	/** The Category component. */
	readonly category: string;
	/** The Provider component. */
	readonly provider: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a pipeline ARN.
 */
export interface CodePipelinePipelineArnProps {
	/** The PipelineName component of the ARN. */
	readonly pipelineName: string;
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
export interface CodePipelinePipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
}

/**
 * Properties for building a stage ARN.
 */
export interface CodePipelineStageArnProps {
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
}

/**
 * Parsed components of a stage ARN.
 */
export interface CodePipelineStageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
	/** The StageName component. */
	readonly stageName: string;
}

/**
 * Properties for building a webhook ARN.
 */
export interface CodePipelineWebhookArnProps {
	/** The WebhookName component of the ARN. */
	readonly webhookName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a webhook ARN.
 */
export interface CodePipelineWebhookArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WebhookName component. */
	readonly webhookName: string;
}

const ActionArnRegex =
	/^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)\/(?<stageName>[^:/?]+)\/(?<actionName>[^:/?]+)$/;
const ActiontypeArnRegex =
	/^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):actiontype:(?<owner>[^:/?]+)\/(?<category>[^:/?]+)\/(?<provider>[^:/?]+)\/(?<version>[^:/?]+)$/;
const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)$/;
const StageArnRegex =
	/^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):(?<pipelineName>[^:/?]+)\/(?<stageName>[^:/?]+)$/;
const WebhookArnRegex =
	/^arn:(?<partition>[^:]+):codepipeline:(?<region>[^:]*):(?<account>[^:]*):webhook:(?<webhookName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codepipeline resources.
 */
export class CodePipelineResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: CodePipelineActionArnProps): string {
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
	static parseActionArn(arn: string): CodePipelineActionArnComponents {
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
	static actiontype(props: CodePipelineActiontypeArnProps): string {
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
	static parseActiontypeArn(arn: string): CodePipelineActiontypeArnComponents {
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
	static pipeline(props: CodePipelinePipelineArnProps): string {
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
	static parsePipelineArn(arn: string): CodePipelinePipelineArnComponents {
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
	static stage(props: CodePipelineStageArnProps): string {
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
	static parseStageArn(arn: string): CodePipelineStageArnComponents {
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
	static webhook(props: CodePipelineWebhookArnProps): string {
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
	static parseWebhookArn(arn: string): CodePipelineWebhookArnComponents {
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
	static readonly AcknowledgeJob: string[] = ["codepipeline:AcknowledgeJob"];
	/** IAM actions required for the AcknowledgeThirdPartyJob API call. */
	static readonly AcknowledgeThirdPartyJob: string[] = [
		"codepipeline:AcknowledgeThirdPartyJob",
	];
	/** IAM actions required for the CreateCustomActionType API call. */
	static readonly CreateCustomActionType: string[] = [
		"codepipeline:CreateCustomActionType",
		"codepipeline:TagResource",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CreatePipeline: string[] = [
		"codepipeline:CreatePipeline",
		"codestar-connections:PassConnection",
		"iam:PassRole",
		"codepipeline:TagResource",
	];
	/** IAM actions required for the DeleteCustomActionType API call. */
	static readonly DeleteCustomActionType: string[] = [
		"codepipeline:DeleteCustomActionType",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DeletePipeline: string[] = ["codepipeline:DeletePipeline"];
	/** IAM actions required for the DeleteWebhook API call. */
	static readonly DeleteWebhook: string[] = ["codepipeline:DeleteWebhook"];
	/** IAM actions required for the DeregisterWebhookWithThirdParty API call. */
	static readonly DeregisterWebhookWithThirdParty: string[] = [
		"codepipeline:DeregisterWebhookWithThirdParty",
	];
	/** IAM actions required for the DisableStageTransition API call. */
	static readonly DisableStageTransition: string[] = [
		"codepipeline:DisableStageTransition",
	];
	/** IAM actions required for the EnableStageTransition API call. */
	static readonly EnableStageTransition: string[] = [
		"codepipeline:EnableStageTransition",
	];
	/** IAM actions required for the GetActionType API call. */
	static readonly opGetActionType: string[] = ["codepipeline:GetActionType"];
	/** IAM actions required for the GetJobDetails API call. */
	static readonly opGetJobDetails: string[] = ["codepipeline:GetJobDetails"];
	/** IAM actions required for the GetPipeline API call. */
	static readonly opGetPipeline: string[] = ["codepipeline:GetPipeline"];
	/** IAM actions required for the GetPipelineExecution API call. */
	static readonly opGetPipelineExecution: string[] = [
		"codepipeline:GetPipelineExecution",
	];
	/** IAM actions required for the GetPipelineState API call. */
	static readonly opGetPipelineState: string[] = [
		"codepipeline:GetPipelineState",
	];
	/** IAM actions required for the GetThirdPartyJobDetails API call. */
	static readonly opGetThirdPartyJobDetails: string[] = [
		"codepipeline:GetThirdPartyJobDetails",
	];
	/** IAM actions required for the ListActionExecutions API call. */
	static readonly ListActionExecutions: string[] = [
		"codepipeline:ListActionExecutions",
	];
	/** IAM actions required for the ListActionTypes API call. */
	static readonly ListActionTypes: string[] = ["codepipeline:ListActionTypes"];
	/** IAM actions required for the ListDeployActionExecutionTargets API call. */
	static readonly ListDeployActionExecutionTargets: string[] = [
		"codepipeline:ListDeployActionExecutionTargets",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly ListPipelineExecutions: string[] = [
		"codepipeline:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly ListPipelines: string[] = ["codepipeline:ListPipelines"];
	/** IAM actions required for the ListRuleExecutions API call. */
	static readonly ListRuleExecutions: string[] = [
		"codepipeline:ListRuleExecutions",
	];
	/** IAM actions required for the ListRuleTypes API call. */
	static readonly ListRuleTypes: string[] = ["codepipeline:ListRuleTypes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codepipeline:ListTagsForResource",
	];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly ListWebhooks: string[] = ["codepipeline:ListWebhooks"];
	/** IAM actions required for the OverrideStageCondition API call. */
	static readonly OverrideStageCondition: string[] = [
		"codepipeline:OverrideStageCondition",
	];
	/** IAM actions required for the PollForJobs API call. */
	static readonly PollForJobs: string[] = ["codepipeline:PollForJobs"];
	/** IAM actions required for the PollForThirdPartyJobs API call. */
	static readonly PollForThirdPartyJobs: string[] = [
		"codepipeline:PollForThirdPartyJobs",
	];
	/** IAM actions required for the PutActionRevision API call. */
	static readonly PutActionRevision: string[] = [
		"codepipeline:PutActionRevision",
	];
	/** IAM actions required for the PutApprovalResult API call. */
	static readonly PutApprovalResult: string[] = [
		"codepipeline:PutApprovalResult",
	];
	/** IAM actions required for the PutJobFailureResult API call. */
	static readonly PutJobFailureResult: string[] = [
		"codepipeline:PutJobFailureResult",
	];
	/** IAM actions required for the PutJobSuccessResult API call. */
	static readonly PutJobSuccessResult: string[] = [
		"codepipeline:PutJobSuccessResult",
	];
	/** IAM actions required for the PutThirdPartyJobFailureResult API call. */
	static readonly PutThirdPartyJobFailureResult: string[] = [
		"codepipeline:PutThirdPartyJobFailureResult",
	];
	/** IAM actions required for the PutThirdPartyJobSuccessResult API call. */
	static readonly PutThirdPartyJobSuccessResult: string[] = [
		"codepipeline:PutThirdPartyJobSuccessResult",
	];
	/** IAM actions required for the PutWebhook API call. */
	static readonly PutWebhook: string[] = [
		"codepipeline:PutWebhook",
		"codepipeline:TagResource",
		"codepipeline:UntagResource",
	];
	/** IAM actions required for the RegisterWebhookWithThirdParty API call. */
	static readonly RegisterWebhookWithThirdParty: string[] = [
		"codepipeline:RegisterWebhookWithThirdParty",
	];
	/** IAM actions required for the RetryStageExecution API call. */
	static readonly RetryStageExecution: string[] = [
		"codepipeline:RetryStageExecution",
	];
	/** IAM actions required for the RollbackStage API call. */
	static readonly RollbackStage: string[] = ["codepipeline:RollbackStage"];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly StartPipelineExecution: string[] = [
		"codepipeline:StartPipelineExecution",
	];
	/** IAM actions required for the StopPipelineExecution API call. */
	static readonly StopPipelineExecution: string[] = [
		"codepipeline:StopPipelineExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codepipeline:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codepipeline:UntagResource"];
	/** IAM actions required for the UpdateActionType API call. */
	static readonly UpdateActionType: string[] = [
		"codepipeline:UpdateActionType",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UpdatePipeline: string[] = [
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
	static readonly CreateCustomActionTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutWebhook action. */
	static readonly PutWebhookConditionKeys: string[] = [
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
