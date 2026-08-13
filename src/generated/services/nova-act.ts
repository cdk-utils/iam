// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/nova-act.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the nova-act service.
 */
export class NovaActActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "nova-act";

	/** [Write] nova-act:CreateAct */
	static readonly CREATE_ACT = "nova-act:CreateAct";
	/** [Write] nova-act:CreateSession */
	static readonly CREATE_SESSION = "nova-act:CreateSession";
	/** [Write] nova-act:CreateWorkflowDefinition */
	static readonly CREATE_WORKFLOW_DEFINITION =
		"nova-act:CreateWorkflowDefinition";
	/** [Write] nova-act:CreateWorkflowRun */
	static readonly CREATE_WORKFLOW_RUN = "nova-act:CreateWorkflowRun";
	/** [Write] nova-act:DeleteWorkflowDefinition */
	static readonly DELETE_WORKFLOW_DEFINITION =
		"nova-act:DeleteWorkflowDefinition";
	/** [Write] nova-act:DeleteWorkflowRun */
	static readonly DELETE_WORKFLOW_RUN = "nova-act:DeleteWorkflowRun";
	/** [Read] nova-act:GetWorkflowDefinition */
	static readonly GET_WORKFLOW_DEFINITION = "nova-act:GetWorkflowDefinition";
	/** [Read] nova-act:GetWorkflowRun */
	static readonly GET_WORKFLOW_RUN = "nova-act:GetWorkflowRun";
	/** [Write] nova-act:InvokeActStep */
	static readonly INVOKE_ACT_STEP = "nova-act:InvokeActStep";
	/** [Read] nova-act:ListActs */
	static readonly LIST_ACTS = "nova-act:ListActs";
	/** [Read] nova-act:ListModels */
	static readonly LIST_MODELS = "nova-act:ListModels";
	/** [Read] nova-act:ListSessions */
	static readonly LIST_SESSIONS = "nova-act:ListSessions";
	/** [List] nova-act:ListWorkflowDefinitions */
	static readonly LIST_WORKFLOW_DEFINITIONS =
		"nova-act:ListWorkflowDefinitions";
	/** [List] nova-act:ListWorkflowRuns */
	static readonly LIST_WORKFLOW_RUNS = "nova-act:ListWorkflowRuns";
	/** [Write] nova-act:UpdateAct */
	static readonly UPDATE_ACT = "nova-act:UpdateAct";
	/** [Write] nova-act:UpdateWorkflowRun */
	static readonly UPDATE_WORKFLOW_RUN = "nova-act:UpdateWorkflowRun";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NovaActActions.GET_WORKFLOW_DEFINITION,
		NovaActActions.GET_WORKFLOW_RUN,
		NovaActActions.LIST_ACTS,
		NovaActActions.LIST_MODELS,
		NovaActActions.LIST_SESSIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NovaActActions.CREATE_ACT,
		NovaActActions.CREATE_SESSION,
		NovaActActions.CREATE_WORKFLOW_DEFINITION,
		NovaActActions.CREATE_WORKFLOW_RUN,
		NovaActActions.DELETE_WORKFLOW_DEFINITION,
		NovaActActions.DELETE_WORKFLOW_RUN,
		NovaActActions.INVOKE_ACT_STEP,
		NovaActActions.UPDATE_ACT,
		NovaActActions.UPDATE_WORKFLOW_RUN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NovaActActions.LIST_WORKFLOW_DEFINITIONS,
		NovaActActions.LIST_WORKFLOW_RUNS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const WorkflowDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nova-act:(?<region>[^:]*):(?<account>[^:]*):workflow-definition/(?<workflowDefinitionName>[^:/?]+)$",
);
const WorkflowRunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nova-act:(?<region>[^:]*):(?<account>[^:]*):workflow-definition/(?<workflowDefinitionName>[^:/?]+)/workflow-run/(?<workflowRunId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for nova-act resources.
 */
export class NovaActResources {
	/**
	 * Builds an ARN for the workflow-definition resource.
	 */
	static workflowDefinition(props: {
		/** The WorkflowDefinitionName component of the ARN. */
		readonly workflowDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nova-act:${props.region ?? "*"}:${props.account ?? "*"}:workflow-definition/${props.workflowDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow-definition resource.
	 */
	static isValidWorkflowDefinitionArn(arn: string): boolean {
		return WorkflowDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a workflow-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowDefinitionName: string;
	} {
		const match = WorkflowDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowDefinitionName: match.groups!.workflowDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the workflow-run resource.
	 */
	static workflowRun(props: {
		/** The WorkflowDefinitionName component of the ARN. */
		readonly workflowDefinitionName: string;
		/** The WorkflowRunId component of the ARN. */
		readonly workflowRunId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nova-act:${props.region ?? "*"}:${props.account ?? "*"}:workflow-definition/${props.workflowDefinitionName}/workflow-run/${props.workflowRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow-run resource.
	 */
	static isValidWorkflowRunArn(arn: string): boolean {
		return WorkflowRunArnRegex.test(arn);
	}

	/**
	 * Parses a workflow-run ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowDefinitionName: string;
		workflowRunId: string;
	} {
		const match = WorkflowRunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow-run ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowDefinitionName: match.groups!.workflowDefinitionName,
			workflowRunId: match.groups!.workflowRunId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for nova-act.
 */
export class NovaActOperations {
	/** IAM actions required for the CreateAct API call. */
	static readonly CREATE_ACT: string[] = ["nova-act:CreateAct"];
	/** IAM actions required for the CreateSession API call. */
	static readonly CREATE_SESSION: string[] = ["nova-act:CreateSession"];
	/** IAM actions required for the CreateWorkflowDefinition API call. */
	static readonly CREATE_WORKFLOW_DEFINITION: string[] = [
		"nova-act:CreateWorkflowDefinition",
	];
	/** IAM actions required for the CreateWorkflowRun API call. */
	static readonly CREATE_WORKFLOW_RUN: string[] = [
		"nova-act:CreateWorkflowRun",
	];
	/** IAM actions required for the DeleteWorkflowDefinition API call. */
	static readonly DELETE_WORKFLOW_DEFINITION: string[] = [
		"nova-act:DeleteWorkflowDefinition",
	];
	/** IAM actions required for the DeleteWorkflowRun API call. */
	static readonly DELETE_WORKFLOW_RUN: string[] = [
		"nova-act:DeleteWorkflowRun",
	];
	/** IAM actions required for the GetWorkflowDefinition API call. */
	static readonly GET_WORKFLOW_DEFINITION: string[] = [
		"nova-act:GetWorkflowDefinition",
	];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly GET_WORKFLOW_RUN: string[] = ["nova-act:GetWorkflowRun"];
	/** IAM actions required for the InvokeActStep API call. */
	static readonly INVOKE_ACT_STEP: string[] = ["nova-act:InvokeActStep"];
	/** IAM actions required for the ListActs API call. */
	static readonly LIST_ACTS: string[] = ["nova-act:ListActs"];
	/** IAM actions required for the ListModels API call. */
	static readonly LIST_MODELS: string[] = ["nova-act:ListModels"];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["nova-act:ListSessions"];
	/** IAM actions required for the ListWorkflowDefinitions API call. */
	static readonly LIST_WORKFLOW_DEFINITIONS: string[] = [
		"nova-act:ListWorkflowDefinitions",
	];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly LIST_WORKFLOW_RUNS: string[] = ["nova-act:ListWorkflowRuns"];
	/** IAM actions required for the UpdateAct API call. */
	static readonly UPDATE_ACT: string[] = ["nova-act:UpdateAct"];
	/** IAM actions required for the UpdateWorkflowRun API call. */
	static readonly UPDATE_WORKFLOW_RUN: string[] = [
		"nova-act:UpdateWorkflowRun",
	];
}
