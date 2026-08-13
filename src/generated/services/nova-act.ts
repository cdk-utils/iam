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
	static readonly CreateAct = "nova-act:CreateAct";
	/** [Write] nova-act:CreateSession */
	static readonly CreateSession = "nova-act:CreateSession";
	/** [Write] nova-act:CreateWorkflowDefinition */
	static readonly CreateWorkflowDefinition =
		"nova-act:CreateWorkflowDefinition";
	/** [Write] nova-act:CreateWorkflowRun */
	static readonly CreateWorkflowRun = "nova-act:CreateWorkflowRun";
	/** [Write] nova-act:DeleteWorkflowDefinition */
	static readonly DeleteWorkflowDefinition =
		"nova-act:DeleteWorkflowDefinition";
	/** [Write] nova-act:DeleteWorkflowRun */
	static readonly DeleteWorkflowRun = "nova-act:DeleteWorkflowRun";
	/** [Read] nova-act:GetWorkflowDefinition */
	static readonly actionGetWorkflowDefinition =
		"nova-act:GetWorkflowDefinition";
	/** [Read] nova-act:GetWorkflowRun */
	static readonly actionGetWorkflowRun = "nova-act:GetWorkflowRun";
	/** [Write] nova-act:InvokeActStep */
	static readonly InvokeActStep = "nova-act:InvokeActStep";
	/** [Read] nova-act:ListActs */
	static readonly ListActs = "nova-act:ListActs";
	/** [Read] nova-act:ListModels */
	static readonly ListModels = "nova-act:ListModels";
	/** [Read] nova-act:ListSessions */
	static readonly ListSessions = "nova-act:ListSessions";
	/** [List] nova-act:ListWorkflowDefinitions */
	static readonly ListWorkflowDefinitions = "nova-act:ListWorkflowDefinitions";
	/** [List] nova-act:ListWorkflowRuns */
	static readonly ListWorkflowRuns = "nova-act:ListWorkflowRuns";
	/** [Write] nova-act:UpdateAct */
	static readonly UpdateAct = "nova-act:UpdateAct";
	/** [Write] nova-act:UpdateWorkflowRun */
	static readonly UpdateWorkflowRun = "nova-act:UpdateWorkflowRun";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NovaActActions.actionGetWorkflowDefinition,
		NovaActActions.actionGetWorkflowRun,
		NovaActActions.ListActs,
		NovaActActions.ListModels,
		NovaActActions.ListSessions,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NovaActActions.CreateAct,
		NovaActActions.CreateSession,
		NovaActActions.CreateWorkflowDefinition,
		NovaActActions.CreateWorkflowRun,
		NovaActActions.DeleteWorkflowDefinition,
		NovaActActions.DeleteWorkflowRun,
		NovaActActions.InvokeActStep,
		NovaActActions.UpdateAct,
		NovaActActions.UpdateWorkflowRun,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NovaActActions.ListWorkflowDefinitions,
		NovaActActions.ListWorkflowRuns,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a workflow-definition ARN.
 */
export interface NovaActWorkflowDefinitionArnProps {
	/** The WorkflowDefinitionName component of the ARN. */
	readonly workflowDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflow-definition ARN.
 */
export interface NovaActWorkflowDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowDefinitionName component. */
	readonly workflowDefinitionName: string;
}

/**
 * Properties for building a workflow-run ARN.
 */
export interface NovaActWorkflowRunArnProps {
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
}

/**
 * Parsed components of a workflow-run ARN.
 */
export interface NovaActWorkflowRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowDefinitionName component. */
	readonly workflowDefinitionName: string;
	/** The WorkflowRunId component. */
	readonly workflowRunId: string;
}

const WorkflowDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):nova-act:(?<region>[^:]*):(?<account>[^:]*):workflow-definition\/(?<workflowDefinitionName>[^:/?]+)$/;
const WorkflowRunArnRegex =
	/^arn:(?<partition>[^:]+):nova-act:(?<region>[^:]*):(?<account>[^:]*):workflow-definition\/(?<workflowDefinitionName>[^:/?]+)\/workflow-run\/(?<workflowRunId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for nova-act resources.
 */
export class NovaActResources {
	/**
	 * Builds an ARN for the workflow-definition resource.
	 */
	static workflowDefinition(props: NovaActWorkflowDefinitionArnProps): string {
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
	static parseWorkflowDefinitionArn(
		arn: string,
	): NovaActWorkflowDefinitionArnComponents {
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
	static workflowRun(props: NovaActWorkflowRunArnProps): string {
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
	static parseWorkflowRunArn(arn: string): NovaActWorkflowRunArnComponents {
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
	static readonly CreateAct: string[] = ["nova-act:CreateAct"];
	/** IAM actions required for the CreateSession API call. */
	static readonly CreateSession: string[] = ["nova-act:CreateSession"];
	/** IAM actions required for the CreateWorkflowDefinition API call. */
	static readonly CreateWorkflowDefinition: string[] = [
		"nova-act:CreateWorkflowDefinition",
	];
	/** IAM actions required for the CreateWorkflowRun API call. */
	static readonly CreateWorkflowRun: string[] = ["nova-act:CreateWorkflowRun"];
	/** IAM actions required for the DeleteWorkflowDefinition API call. */
	static readonly DeleteWorkflowDefinition: string[] = [
		"nova-act:DeleteWorkflowDefinition",
	];
	/** IAM actions required for the DeleteWorkflowRun API call. */
	static readonly DeleteWorkflowRun: string[] = ["nova-act:DeleteWorkflowRun"];
	/** IAM actions required for the GetWorkflowDefinition API call. */
	static readonly opGetWorkflowDefinition: string[] = [
		"nova-act:GetWorkflowDefinition",
	];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly opGetWorkflowRun: string[] = ["nova-act:GetWorkflowRun"];
	/** IAM actions required for the InvokeActStep API call. */
	static readonly InvokeActStep: string[] = ["nova-act:InvokeActStep"];
	/** IAM actions required for the ListActs API call. */
	static readonly ListActs: string[] = ["nova-act:ListActs"];
	/** IAM actions required for the ListModels API call. */
	static readonly ListModels: string[] = ["nova-act:ListModels"];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["nova-act:ListSessions"];
	/** IAM actions required for the ListWorkflowDefinitions API call. */
	static readonly ListWorkflowDefinitions: string[] = [
		"nova-act:ListWorkflowDefinitions",
	];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly ListWorkflowRuns: string[] = ["nova-act:ListWorkflowRuns"];
	/** IAM actions required for the UpdateAct API call. */
	static readonly UpdateAct: string[] = ["nova-act:UpdateAct"];
	/** IAM actions required for the UpdateWorkflowRun API call. */
	static readonly UpdateWorkflowRun: string[] = ["nova-act:UpdateWorkflowRun"];
}
