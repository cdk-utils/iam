// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/states.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the states service.
 */
export class StatesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "states";

	/** [Write] states:CreateActivity */
	static readonly CreateActivity = "states:CreateActivity";
	/** [Write] states:CreateStateMachine */
	static readonly CreateStateMachine = "states:CreateStateMachine";
	/** [Write] states:CreateStateMachineAlias */
	static readonly CreateStateMachineAlias = "states:CreateStateMachineAlias";
	/** [Write] states:DeleteActivity */
	static readonly DeleteActivity = "states:DeleteActivity";
	/** [Write] states:DeleteStateMachine */
	static readonly DeleteStateMachine = "states:DeleteStateMachine";
	/** [Write] states:DeleteStateMachineAlias */
	static readonly DeleteStateMachineAlias = "states:DeleteStateMachineAlias";
	/** [Write] states:DeleteStateMachineVersion */
	static readonly DeleteStateMachineVersion =
		"states:DeleteStateMachineVersion";
	/** [Read] states:DescribeActivity */
	static readonly DescribeActivity = "states:DescribeActivity";
	/** [Read] states:DescribeExecution */
	static readonly DescribeExecution = "states:DescribeExecution";
	/** [Read] states:DescribeMapRun */
	static readonly DescribeMapRun = "states:DescribeMapRun";
	/** [Read] states:DescribeStateMachine */
	static readonly DescribeStateMachine = "states:DescribeStateMachine";
	/** [Read] states:DescribeStateMachineAlias */
	static readonly DescribeStateMachineAlias =
		"states:DescribeStateMachineAlias";
	/** [Read] states:DescribeStateMachineForExecution */
	static readonly DescribeStateMachineForExecution =
		"states:DescribeStateMachineForExecution";
	/** [Write] states:GetActivityTask */
	static readonly actionGetActivityTask = "states:GetActivityTask";
	/** [Read] states:GetExecutionHistory */
	static readonly actionGetExecutionHistory = "states:GetExecutionHistory";
	/** [Write] states:InvokeHTTPEndpoint */
	static readonly InvokeHTTPEndpoint = "states:InvokeHTTPEndpoint";
	/** [List] states:ListActivities */
	static readonly ListActivities = "states:ListActivities";
	/** [List] states:ListExecutions */
	static readonly ListExecutions = "states:ListExecutions";
	/** [List] states:ListMapRuns */
	static readonly ListMapRuns = "states:ListMapRuns";
	/** [List] states:ListStateMachineAliases */
	static readonly ListStateMachineAliases = "states:ListStateMachineAliases";
	/** [List] states:ListStateMachineVersions */
	static readonly ListStateMachineVersions = "states:ListStateMachineVersions";
	/** [List] states:ListStateMachines */
	static readonly ListStateMachines = "states:ListStateMachines";
	/** [List] states:ListTagsForResource */
	static readonly ListTagsForResource = "states:ListTagsForResource";
	/** [Write] states:PublishStateMachineVersion */
	static readonly PublishStateMachineVersion =
		"states:PublishStateMachineVersion";
	/** [Write] states:RedriveExecution */
	static readonly RedriveExecution = "states:RedriveExecution";
	/** [Read] states:RevealSecrets */
	static readonly RevealSecrets = "states:RevealSecrets";
	/** [Write] states:SendTaskFailure */
	static readonly SendTaskFailure = "states:SendTaskFailure";
	/** [Write] states:SendTaskHeartbeat */
	static readonly SendTaskHeartbeat = "states:SendTaskHeartbeat";
	/** [Write] states:SendTaskSuccess */
	static readonly SendTaskSuccess = "states:SendTaskSuccess";
	/** [Write] states:StartExecution */
	static readonly StartExecution = "states:StartExecution";
	/** [Write] states:StartSyncExecution */
	static readonly StartSyncExecution = "states:StartSyncExecution";
	/** [Write] states:StopExecution */
	static readonly StopExecution = "states:StopExecution";
	/** [Tagging] states:TagResource */
	static readonly TagResource = "states:TagResource";
	/** [Write] states:TestState */
	static readonly TestState = "states:TestState";
	/** [Tagging] states:UntagResource */
	static readonly UntagResource = "states:UntagResource";
	/** [Write] states:UpdateMapRun */
	static readonly UpdateMapRun = "states:UpdateMapRun";
	/** [Write] states:UpdateStateMachine */
	static readonly UpdateStateMachine = "states:UpdateStateMachine";
	/** [Write] states:UpdateStateMachineAlias */
	static readonly UpdateStateMachineAlias = "states:UpdateStateMachineAlias";
	/** [Read] states:ValidateStateMachineDefinition */
	static readonly ValidateStateMachineDefinition =
		"states:ValidateStateMachineDefinition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		StatesActions.DescribeActivity,
		StatesActions.DescribeExecution,
		StatesActions.DescribeMapRun,
		StatesActions.DescribeStateMachine,
		StatesActions.DescribeStateMachineAlias,
		StatesActions.DescribeStateMachineForExecution,
		StatesActions.actionGetExecutionHistory,
		StatesActions.RevealSecrets,
		StatesActions.ValidateStateMachineDefinition,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		StatesActions.CreateActivity,
		StatesActions.CreateStateMachine,
		StatesActions.CreateStateMachineAlias,
		StatesActions.DeleteActivity,
		StatesActions.DeleteStateMachine,
		StatesActions.DeleteStateMachineAlias,
		StatesActions.DeleteStateMachineVersion,
		StatesActions.actionGetActivityTask,
		StatesActions.InvokeHTTPEndpoint,
		StatesActions.PublishStateMachineVersion,
		StatesActions.RedriveExecution,
		StatesActions.SendTaskFailure,
		StatesActions.SendTaskHeartbeat,
		StatesActions.SendTaskSuccess,
		StatesActions.StartExecution,
		StatesActions.StartSyncExecution,
		StatesActions.StopExecution,
		StatesActions.TestState,
		StatesActions.UpdateMapRun,
		StatesActions.UpdateStateMachine,
		StatesActions.UpdateStateMachineAlias,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		StatesActions.ListActivities,
		StatesActions.ListExecutions,
		StatesActions.ListMapRuns,
		StatesActions.ListStateMachineAliases,
		StatesActions.ListStateMachineVersions,
		StatesActions.ListStateMachines,
		StatesActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		StatesActions.TagResource,
		StatesActions.UntagResource,
	];
}

/**
 * Properties for building a activity ARN.
 */
export interface StatesActivityArnProps {
	/** The ActivityName component of the ARN. */
	readonly activityName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a activity ARN.
 */
export interface StatesActivityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ActivityName component. */
	readonly activityName: string;
}

/**
 * Properties for building a execution ARN.
 */
export interface StatesExecutionArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The ExecutionId component of the ARN. */
	readonly executionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a execution ARN.
 */
export interface StatesExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The ExecutionId component. */
	readonly executionId: string;
}

/**
 * Properties for building a express ARN.
 */
export interface StatesExpressArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The ExecutionId component of the ARN. */
	readonly executionId: string;
	/** The ExpressId component of the ARN. */
	readonly expressId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a express ARN.
 */
export interface StatesExpressArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The ExecutionId component. */
	readonly executionId: string;
	/** The ExpressId component. */
	readonly expressId: string;
}

/**
 * Properties for building a labelled execution ARN.
 */
export interface StatesLabelledExecutionArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The MapRunLabel component of the ARN. */
	readonly mapRunLabel: string;
	/** The ExecutionId component of the ARN. */
	readonly executionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a labelled execution ARN.
 */
export interface StatesLabelledExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The MapRunLabel component. */
	readonly mapRunLabel: string;
	/** The ExecutionId component. */
	readonly executionId: string;
}

/**
 * Properties for building a labelled express ARN.
 */
export interface StatesLabelledExpressArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The MapRunLabel component of the ARN. */
	readonly mapRunLabel: string;
	/** The ExecutionId component of the ARN. */
	readonly executionId: string;
	/** The ExpressId component of the ARN. */
	readonly expressId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a labelled express ARN.
 */
export interface StatesLabelledExpressArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The MapRunLabel component. */
	readonly mapRunLabel: string;
	/** The ExecutionId component. */
	readonly executionId: string;
	/** The ExpressId component. */
	readonly expressId: string;
}

/**
 * Properties for building a maprun ARN.
 */
export interface StatesMaprunArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The MapRunLabel component of the ARN. */
	readonly mapRunLabel: string;
	/** The MapRunId component of the ARN. */
	readonly mapRunId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a maprun ARN.
 */
export interface StatesMaprunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The MapRunLabel component. */
	readonly mapRunLabel: string;
	/** The MapRunId component. */
	readonly mapRunId: string;
}

/**
 * Properties for building a statemachine ARN.
 */
export interface StatesStatemachineArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a statemachine ARN.
 */
export interface StatesStatemachineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
}

/**
 * Properties for building a statemachinealias ARN.
 */
export interface StatesStatemachinealiasArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The StateMachineAliasName component of the ARN. */
	readonly stateMachineAliasName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a statemachinealias ARN.
 */
export interface StatesStatemachinealiasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The StateMachineAliasName component. */
	readonly stateMachineAliasName: string;
}

/**
 * Properties for building a statemachineversion ARN.
 */
export interface StatesStatemachineversionArnProps {
	/** The StateMachineName component of the ARN. */
	readonly stateMachineName: string;
	/** The StateMachineVersionId component of the ARN. */
	readonly stateMachineVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a statemachineversion ARN.
 */
export interface StatesStatemachineversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateMachineName component. */
	readonly stateMachineName: string;
	/** The StateMachineVersionId component. */
	readonly stateMachineVersionId: string;
}

const ActivityArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):activity:(?<activityName>[^:/?]+)$/;
const ExecutionArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):execution:(?<stateMachineName>[^:/?]+):(?<executionId>[^:/?]+)$/;
const ExpressArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):express:(?<stateMachineName>[^:/?]+):(?<executionId>[^:/?]+):(?<expressId>[^:/?]+)$/;
const LabelledExecutionArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):execution:(?<stateMachineName>[^:/?]+)\/(?<mapRunLabel>[^:/?]+):(?<executionId>[^:/?]+)$/;
const LabelledExpressArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):express:(?<stateMachineName>[^:/?]+)\/(?<mapRunLabel>[^:/?]+):(?<executionId>[^:/?]+):(?<expressId>[^:/?]+)$/;
const MaprunArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):mapRun:(?<stateMachineName>[^:/?]+)\/(?<mapRunLabel>[^:/?]+):(?<mapRunId>[^:/?]+)$/;
const StatemachineArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+)$/;
const StatemachinealiasArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+):(?<stateMachineAliasName>[^:/?]+)$/;
const StatemachineversionArnRegex =
	/^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+):(?<stateMachineVersionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for states resources.
 */
export class StatesResources {
	/**
	 * Builds an ARN for the activity resource.
	 */
	static activity(props: StatesActivityArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:activity:${props.activityName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the activity resource.
	 */
	static isValidActivityArn(arn: string): boolean {
		return ActivityArnRegex.test(arn);
	}

	/**
	 * Parses a activity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActivityArn(arn: string): StatesActivityArnComponents {
		const match = ActivityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid activity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			activityName: match.groups!.activityName,
		};
	}

	/**
	 * Builds an ARN for the execution resource.
	 */
	static execution(props: StatesExecutionArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:execution:${props.stateMachineName}:${props.executionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the execution resource.
	 */
	static isValidExecutionArn(arn: string): boolean {
		return ExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExecutionArn(arn: string): StatesExecutionArnComponents {
		const match = ExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			executionId: match.groups!.executionId,
		};
	}

	/**
	 * Builds an ARN for the express resource.
	 */
	static express(props: StatesExpressArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:express:${props.stateMachineName}:${props.executionId}:${props.expressId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the express resource.
	 */
	static isValidExpressArn(arn: string): boolean {
		return ExpressArnRegex.test(arn);
	}

	/**
	 * Parses a express ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExpressArn(arn: string): StatesExpressArnComponents {
		const match = ExpressArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid express ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			executionId: match.groups!.executionId,
			expressId: match.groups!.expressId,
		};
	}

	/**
	 * Builds an ARN for the labelled execution resource.
	 */
	static labelledExecution(props: StatesLabelledExecutionArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:execution:${props.stateMachineName}/${props.mapRunLabel}:${props.executionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the labelled execution resource.
	 */
	static isValidLabelledExecutionArn(arn: string): boolean {
		return LabelledExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a labelled execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLabelledExecutionArn(
		arn: string,
	): StatesLabelledExecutionArnComponents {
		const match = LabelledExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid labelled execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			mapRunLabel: match.groups!.mapRunLabel,
			executionId: match.groups!.executionId,
		};
	}

	/**
	 * Builds an ARN for the labelled express resource.
	 */
	static labelledExpress(props: StatesLabelledExpressArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:express:${props.stateMachineName}/${props.mapRunLabel}:${props.executionId}:${props.expressId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the labelled express resource.
	 */
	static isValidLabelledExpressArn(arn: string): boolean {
		return LabelledExpressArnRegex.test(arn);
	}

	/**
	 * Parses a labelled express ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLabelledExpressArn(
		arn: string,
	): StatesLabelledExpressArnComponents {
		const match = LabelledExpressArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid labelled express ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			mapRunLabel: match.groups!.mapRunLabel,
			executionId: match.groups!.executionId,
			expressId: match.groups!.expressId,
		};
	}

	/**
	 * Builds an ARN for the maprun resource.
	 */
	static maprun(props: StatesMaprunArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:mapRun:${props.stateMachineName}/${props.mapRunLabel}:${props.mapRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the maprun resource.
	 */
	static isValidMaprunArn(arn: string): boolean {
		return MaprunArnRegex.test(arn);
	}

	/**
	 * Parses a maprun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMaprunArn(arn: string): StatesMaprunArnComponents {
		const match = MaprunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid maprun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			mapRunLabel: match.groups!.mapRunLabel,
			mapRunId: match.groups!.mapRunId,
		};
	}

	/**
	 * Builds an ARN for the statemachine resource.
	 */
	static statemachine(props: StatesStatemachineArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:stateMachine:${props.stateMachineName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the statemachine resource.
	 */
	static isValidStatemachineArn(arn: string): boolean {
		return StatemachineArnRegex.test(arn);
	}

	/**
	 * Parses a statemachine ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStatemachineArn(arn: string): StatesStatemachineArnComponents {
		const match = StatemachineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid statemachine ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
		};
	}

	/**
	 * Builds an ARN for the statemachinealias resource.
	 */
	static statemachinealias(props: StatesStatemachinealiasArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:stateMachine:${props.stateMachineName}:${props.stateMachineAliasName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the statemachinealias resource.
	 */
	static isValidStatemachinealiasArn(arn: string): boolean {
		return StatemachinealiasArnRegex.test(arn);
	}

	/**
	 * Parses a statemachinealias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStatemachinealiasArn(
		arn: string,
	): StatesStatemachinealiasArnComponents {
		const match = StatemachinealiasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid statemachinealias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			stateMachineAliasName: match.groups!.stateMachineAliasName,
		};
	}

	/**
	 * Builds an ARN for the statemachineversion resource.
	 */
	static statemachineversion(props: StatesStatemachineversionArnProps): string {
		return `arn:${props.partition ?? "aws"}:states:${props.region ?? "*"}:${props.account ?? "*"}:stateMachine:${props.stateMachineName}:${props.stateMachineVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the statemachineversion resource.
	 */
	static isValidStatemachineversionArn(arn: string): boolean {
		return StatemachineversionArnRegex.test(arn);
	}

	/**
	 * Parses a statemachineversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStatemachineversionArn(
		arn: string,
	): StatesStatemachineversionArnComponents {
		const match = StatemachineversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid statemachineversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateMachineName: match.groups!.stateMachineName,
			stateMachineVersionId: match.groups!.stateMachineVersionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for states.
 */
export class StatesOperations {
	/** IAM actions required for the CreateActivity API call. */
	static readonly CreateActivity: string[] = [
		"states:CreateActivity",
		"states:TagResource",
	];
	/** IAM actions required for the CreateStateMachine API call. */
	static readonly CreateStateMachine: string[] = [
		"states:CreateStateMachine",
		"iam:PassRole",
		"states:PublishStateMachineVersion",
		"states:TagResource",
	];
	/** IAM actions required for the CreateStateMachineAlias API call. */
	static readonly CreateStateMachineAlias: string[] = [
		"states:CreateStateMachineAlias",
	];
	/** IAM actions required for the DeleteActivity API call. */
	static readonly DeleteActivity: string[] = ["states:DeleteActivity"];
	/** IAM actions required for the DeleteStateMachine API call. */
	static readonly DeleteStateMachine: string[] = ["states:DeleteStateMachine"];
	/** IAM actions required for the DeleteStateMachineAlias API call. */
	static readonly DeleteStateMachineAlias: string[] = [
		"states:DeleteStateMachineAlias",
	];
	/** IAM actions required for the DeleteStateMachineVersion API call. */
	static readonly DeleteStateMachineVersion: string[] = [
		"states:DeleteStateMachineVersion",
	];
	/** IAM actions required for the DescribeActivity API call. */
	static readonly DescribeActivity: string[] = ["states:DescribeActivity"];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DescribeExecution: string[] = ["states:DescribeExecution"];
	/** IAM actions required for the DescribeMapRun API call. */
	static readonly DescribeMapRun: string[] = ["states:DescribeMapRun"];
	/** IAM actions required for the DescribeStateMachine API call. */
	static readonly DescribeStateMachine: string[] = [
		"states:DescribeStateMachine",
	];
	/** IAM actions required for the DescribeStateMachineAlias API call. */
	static readonly DescribeStateMachineAlias: string[] = [
		"states:DescribeStateMachineAlias",
	];
	/** IAM actions required for the DescribeStateMachineForExecution API call. */
	static readonly DescribeStateMachineForExecution: string[] = [
		"states:DescribeStateMachineForExecution",
	];
	/** IAM actions required for the GetActivityTask API call. */
	static readonly opGetActivityTask: string[] = ["states:GetActivityTask"];
	/** IAM actions required for the GetExecutionHistory API call. */
	static readonly opGetExecutionHistory: string[] = [
		"states:GetExecutionHistory",
	];
	/** IAM actions required for the ListActivities API call. */
	static readonly ListActivities: string[] = ["states:ListActivities"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = ["states:ListExecutions"];
	/** IAM actions required for the ListMapRuns API call. */
	static readonly ListMapRuns: string[] = ["states:ListMapRuns"];
	/** IAM actions required for the ListStateMachineAliases API call. */
	static readonly ListStateMachineAliases: string[] = [
		"states:ListStateMachineAliases",
	];
	/** IAM actions required for the ListStateMachineVersions API call. */
	static readonly ListStateMachineVersions: string[] = [
		"states:ListStateMachineVersions",
	];
	/** IAM actions required for the ListStateMachines API call. */
	static readonly ListStateMachines: string[] = ["states:ListStateMachines"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"states:ListTagsForResource",
	];
	/** IAM actions required for the PublishStateMachineVersion API call. */
	static readonly PublishStateMachineVersion: string[] = [
		"states:PublishStateMachineVersion",
	];
	/** IAM actions required for the RedriveExecution API call. */
	static readonly RedriveExecution: string[] = ["states:RedriveExecution"];
	/** IAM actions required for the SendTaskFailure API call. */
	static readonly SendTaskFailure: string[] = ["states:SendTaskFailure"];
	/** IAM actions required for the SendTaskHeartbeat API call. */
	static readonly SendTaskHeartbeat: string[] = ["states:SendTaskHeartbeat"];
	/** IAM actions required for the SendTaskSuccess API call. */
	static readonly SendTaskSuccess: string[] = ["states:SendTaskSuccess"];
	/** IAM actions required for the StartExecution API call. */
	static readonly StartExecution: string[] = [
		"states:DescribeExecution",
		"states:StartExecution",
	];
	/** IAM actions required for the StartSyncExecution API call. */
	static readonly StartSyncExecution: string[] = ["states:StartSyncExecution"];
	/** IAM actions required for the StopExecution API call. */
	static readonly StopExecution: string[] = ["states:StopExecution"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["states:TagResource"];
	/** IAM actions required for the TestState API call. */
	static readonly TestState: string[] = [
		"iam:PassRole",
		"states:RevealSecrets",
		"states:TestState",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["states:UntagResource"];
	/** IAM actions required for the UpdateMapRun API call. */
	static readonly UpdateMapRun: string[] = ["states:UpdateMapRun"];
	/** IAM actions required for the UpdateStateMachine API call. */
	static readonly UpdateStateMachine: string[] = [
		"iam:PassRole",
		"states:PublishStateMachineVersion",
		"states:UpdateStateMachine",
	];
	/** IAM actions required for the UpdateStateMachineAlias API call. */
	static readonly UpdateStateMachineAlias: string[] = [
		"states:UpdateStateMachineAlias",
	];
	/** IAM actions required for the ValidateStateMachineDefinition API call. */
	static readonly ValidateStateMachineDefinition: string[] = [
		"states:ValidateStateMachineDefinition",
	];
}

/**
 * Condition key constants and builders for states.
 */
export class StatesConditions {
	/** Condition keys applicable to the CreateActivity action. */
	static readonly CreateActivityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateMachine action. */
	static readonly CreateStateMachineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateMachineAlias action. */
	static readonly CreateStateMachineAliasConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DeleteStateMachineAlias action. */
	static readonly DeleteStateMachineAliasConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DeleteStateMachineVersion action. */
	static readonly DeleteStateMachineVersionConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DescribeStateMachine action. */
	static readonly DescribeStateMachineConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DescribeStateMachineAlias action. */
	static readonly DescribeStateMachineAliasConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the ListExecutions action. */
	static readonly ListExecutionsConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the ListStateMachineAliases action. */
	static readonly ListStateMachineAliasesConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the StartExecution action. */
	static readonly StartExecutionConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the StartSyncExecution action. */
	static readonly StartSyncExecutionConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateStateMachine action. */
	static readonly UpdateStateMachineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateStateMachineAlias action. */
	static readonly UpdateStateMachineAliasConditionKeys: string[] = [
		"states:StateMachineQualifier",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: states:HTTPEndpoint (String) */
	static readonly HTTP_ENDPOINT = "states:HTTPEndpoint";
	/** Condition key: states:HTTPMethod (String) */
	static readonly HTTP_METHOD = "states:HTTPMethod";
	/** Condition key: states:StateMachineQualifier (ArrayOfString) */
	static readonly STATE_MACHINE_QUALIFIER = "states:StateMachineQualifier";

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
	 * Generates a condition block for `states:HTTPEndpoint`.
	 */
	static httpEndpoint(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "states:HTTPEndpoint": value } };
	}

	/**
	 * Generates a condition block for `states:HTTPMethod`.
	 */
	static httpMethod(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "states:HTTPMethod": value } };
	}

	/**
	 * Generates a condition block for `states:StateMachineQualifier`.
	 */
	static stateMachineQualifier(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "states:StateMachineQualifier": values },
		};
	}
}
