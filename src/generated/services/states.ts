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
	static readonly CREATE_ACTIVITY = "states:CreateActivity";
	/** [Write] states:CreateStateMachine */
	static readonly CREATE_STATE_MACHINE = "states:CreateStateMachine";
	/** [Write] states:CreateStateMachineAlias */
	static readonly CREATE_STATE_MACHINE_ALIAS = "states:CreateStateMachineAlias";
	/** [Write] states:DeleteActivity */
	static readonly DELETE_ACTIVITY = "states:DeleteActivity";
	/** [Write] states:DeleteStateMachine */
	static readonly DELETE_STATE_MACHINE = "states:DeleteStateMachine";
	/** [Write] states:DeleteStateMachineAlias */
	static readonly DELETE_STATE_MACHINE_ALIAS = "states:DeleteStateMachineAlias";
	/** [Write] states:DeleteStateMachineVersion */
	static readonly DELETE_STATE_MACHINE_VERSION =
		"states:DeleteStateMachineVersion";
	/** [Read] states:DescribeActivity */
	static readonly DESCRIBE_ACTIVITY = "states:DescribeActivity";
	/** [Read] states:DescribeExecution */
	static readonly DESCRIBE_EXECUTION = "states:DescribeExecution";
	/** [Read] states:DescribeMapRun */
	static readonly DESCRIBE_MAP_RUN = "states:DescribeMapRun";
	/** [Read] states:DescribeStateMachine */
	static readonly DESCRIBE_STATE_MACHINE = "states:DescribeStateMachine";
	/** [Read] states:DescribeStateMachineAlias */
	static readonly DESCRIBE_STATE_MACHINE_ALIAS =
		"states:DescribeStateMachineAlias";
	/** [Read] states:DescribeStateMachineForExecution */
	static readonly DESCRIBE_STATE_MACHINE_FOR_EXECUTION =
		"states:DescribeStateMachineForExecution";
	/** [Write] states:GetActivityTask */
	static readonly GET_ACTIVITY_TASK = "states:GetActivityTask";
	/** [Read] states:GetExecutionHistory */
	static readonly GET_EXECUTION_HISTORY = "states:GetExecutionHistory";
	/** [Write] states:InvokeHTTPEndpoint */
	static readonly INVOKE_HTTP_ENDPOINT = "states:InvokeHTTPEndpoint";
	/** [List] states:ListActivities */
	static readonly LIST_ACTIVITIES = "states:ListActivities";
	/** [List] states:ListExecutions */
	static readonly LIST_EXECUTIONS = "states:ListExecutions";
	/** [List] states:ListMapRuns */
	static readonly LIST_MAP_RUNS = "states:ListMapRuns";
	/** [List] states:ListStateMachineAliases */
	static readonly LIST_STATE_MACHINE_ALIASES = "states:ListStateMachineAliases";
	/** [List] states:ListStateMachineVersions */
	static readonly LIST_STATE_MACHINE_VERSIONS =
		"states:ListStateMachineVersions";
	/** [List] states:ListStateMachines */
	static readonly LIST_STATE_MACHINES = "states:ListStateMachines";
	/** [List] states:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "states:ListTagsForResource";
	/** [Write] states:PublishStateMachineVersion */
	static readonly PUBLISH_STATE_MACHINE_VERSION =
		"states:PublishStateMachineVersion";
	/** [Write] states:RedriveExecution */
	static readonly REDRIVE_EXECUTION = "states:RedriveExecution";
	/** [Read] states:RevealSecrets */
	static readonly REVEAL_SECRETS = "states:RevealSecrets";
	/** [Write] states:SendTaskFailure */
	static readonly SEND_TASK_FAILURE = "states:SendTaskFailure";
	/** [Write] states:SendTaskHeartbeat */
	static readonly SEND_TASK_HEARTBEAT = "states:SendTaskHeartbeat";
	/** [Write] states:SendTaskSuccess */
	static readonly SEND_TASK_SUCCESS = "states:SendTaskSuccess";
	/** [Write] states:StartExecution */
	static readonly START_EXECUTION = "states:StartExecution";
	/** [Write] states:StartSyncExecution */
	static readonly START_SYNC_EXECUTION = "states:StartSyncExecution";
	/** [Write] states:StopExecution */
	static readonly STOP_EXECUTION = "states:StopExecution";
	/** [Tagging] states:TagResource */
	static readonly TAG_RESOURCE = "states:TagResource";
	/** [Write] states:TestState */
	static readonly TEST_STATE = "states:TestState";
	/** [Tagging] states:UntagResource */
	static readonly UNTAG_RESOURCE = "states:UntagResource";
	/** [Write] states:UpdateMapRun */
	static readonly UPDATE_MAP_RUN = "states:UpdateMapRun";
	/** [Write] states:UpdateStateMachine */
	static readonly UPDATE_STATE_MACHINE = "states:UpdateStateMachine";
	/** [Write] states:UpdateStateMachineAlias */
	static readonly UPDATE_STATE_MACHINE_ALIAS = "states:UpdateStateMachineAlias";
	/** [Read] states:ValidateStateMachineDefinition */
	static readonly VALIDATE_STATE_MACHINE_DEFINITION =
		"states:ValidateStateMachineDefinition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		StatesActions.DESCRIBE_ACTIVITY,
		StatesActions.DESCRIBE_EXECUTION,
		StatesActions.DESCRIBE_MAP_RUN,
		StatesActions.DESCRIBE_STATE_MACHINE,
		StatesActions.DESCRIBE_STATE_MACHINE_ALIAS,
		StatesActions.DESCRIBE_STATE_MACHINE_FOR_EXECUTION,
		StatesActions.GET_EXECUTION_HISTORY,
		StatesActions.REVEAL_SECRETS,
		StatesActions.VALIDATE_STATE_MACHINE_DEFINITION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		StatesActions.CREATE_ACTIVITY,
		StatesActions.CREATE_STATE_MACHINE,
		StatesActions.CREATE_STATE_MACHINE_ALIAS,
		StatesActions.DELETE_ACTIVITY,
		StatesActions.DELETE_STATE_MACHINE,
		StatesActions.DELETE_STATE_MACHINE_ALIAS,
		StatesActions.DELETE_STATE_MACHINE_VERSION,
		StatesActions.GET_ACTIVITY_TASK,
		StatesActions.INVOKE_HTTP_ENDPOINT,
		StatesActions.PUBLISH_STATE_MACHINE_VERSION,
		StatesActions.REDRIVE_EXECUTION,
		StatesActions.SEND_TASK_FAILURE,
		StatesActions.SEND_TASK_HEARTBEAT,
		StatesActions.SEND_TASK_SUCCESS,
		StatesActions.START_EXECUTION,
		StatesActions.START_SYNC_EXECUTION,
		StatesActions.STOP_EXECUTION,
		StatesActions.TEST_STATE,
		StatesActions.UPDATE_MAP_RUN,
		StatesActions.UPDATE_STATE_MACHINE,
		StatesActions.UPDATE_STATE_MACHINE_ALIAS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		StatesActions.LIST_ACTIVITIES,
		StatesActions.LIST_EXECUTIONS,
		StatesActions.LIST_MAP_RUNS,
		StatesActions.LIST_STATE_MACHINE_ALIASES,
		StatesActions.LIST_STATE_MACHINE_VERSIONS,
		StatesActions.LIST_STATE_MACHINES,
		StatesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		StatesActions.TAG_RESOURCE,
		StatesActions.UNTAG_RESOURCE,
	];
}

const ActivityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):activity:(?<activityName>[^:/?]+)$",
);
const ExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):execution:(?<stateMachineName>[^:/?]+):(?<executionId>[^:/?]+)$",
);
const ExpressArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):express:(?<stateMachineName>[^:/?]+):(?<executionId>[^:/?]+):(?<expressId>[^:/?]+)$",
);
const LabelledExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):execution:(?<stateMachineName>[^:/?]+)/(?<mapRunLabel>[^:/?]+):(?<executionId>[^:/?]+)$",
);
const LabelledExpressArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):express:(?<stateMachineName>[^:/?]+)/(?<mapRunLabel>[^:/?]+):(?<executionId>[^:/?]+):(?<expressId>[^:/?]+)$",
);
const MaprunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):mapRun:(?<stateMachineName>[^:/?]+)/(?<mapRunLabel>[^:/?]+):(?<mapRunId>[^:/?]+)$",
);
const StatemachineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+)$",
);
const StatemachinealiasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+):(?<stateMachineAliasName>[^:/?]+)$",
);
const StatemachineversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):states:(?<region>[^:]*):(?<account>[^:]*):stateMachine:(?<stateMachineName>[^:/?]+):(?<stateMachineVersionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for states resources.
 */
export class StatesResources {
	/**
	 * Builds an ARN for the activity resource.
	 */
	static activity(props: {
		/** The ActivityName component of the ARN. */
		readonly activityName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseActivityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		activityName: string;
	} {
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
	static execution(props: {
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
	}): string {
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
	static parseExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		executionId: string;
	} {
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
	static express(props: {
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
	}): string {
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
	static parseExpressArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		executionId: string;
		expressId: string;
	} {
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
	static labelledExecution(props: {
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
	}): string {
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
	static parseLabelledExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		mapRunLabel: string;
		executionId: string;
	} {
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
	static labelledExpress(props: {
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
	}): string {
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
	static parseLabelledExpressArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		mapRunLabel: string;
		executionId: string;
		expressId: string;
	} {
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
	static maprun(props: {
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
	}): string {
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
	static parseMaprunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		mapRunLabel: string;
		mapRunId: string;
	} {
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
	static statemachine(props: {
		/** The StateMachineName component of the ARN. */
		readonly stateMachineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStatemachineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
	} {
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
	static statemachinealias(props: {
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
	}): string {
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
	static parseStatemachinealiasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		stateMachineAliasName: string;
	} {
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
	static statemachineversion(props: {
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
	}): string {
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
	static parseStatemachineversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateMachineName: string;
		stateMachineVersionId: string;
	} {
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
	static readonly CREATE_ACTIVITY: string[] = [
		"states:CreateActivity",
		"states:TagResource",
	];
	/** IAM actions required for the CreateStateMachine API call. */
	static readonly CREATE_STATE_MACHINE: string[] = [
		"states:CreateStateMachine",
		"iam:PassRole",
		"states:PublishStateMachineVersion",
		"states:TagResource",
	];
	/** IAM actions required for the CreateStateMachineAlias API call. */
	static readonly CREATE_STATE_MACHINE_ALIAS: string[] = [
		"states:CreateStateMachineAlias",
	];
	/** IAM actions required for the DeleteActivity API call. */
	static readonly DELETE_ACTIVITY: string[] = ["states:DeleteActivity"];
	/** IAM actions required for the DeleteStateMachine API call. */
	static readonly DELETE_STATE_MACHINE: string[] = [
		"states:DeleteStateMachine",
	];
	/** IAM actions required for the DeleteStateMachineAlias API call. */
	static readonly DELETE_STATE_MACHINE_ALIAS: string[] = [
		"states:DeleteStateMachineAlias",
	];
	/** IAM actions required for the DeleteStateMachineVersion API call. */
	static readonly DELETE_STATE_MACHINE_VERSION: string[] = [
		"states:DeleteStateMachineVersion",
	];
	/** IAM actions required for the DescribeActivity API call. */
	static readonly DESCRIBE_ACTIVITY: string[] = ["states:DescribeActivity"];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DESCRIBE_EXECUTION: string[] = ["states:DescribeExecution"];
	/** IAM actions required for the DescribeMapRun API call. */
	static readonly DESCRIBE_MAP_RUN: string[] = ["states:DescribeMapRun"];
	/** IAM actions required for the DescribeStateMachine API call. */
	static readonly DESCRIBE_STATE_MACHINE: string[] = [
		"states:DescribeStateMachine",
	];
	/** IAM actions required for the DescribeStateMachineAlias API call. */
	static readonly DESCRIBE_STATE_MACHINE_ALIAS: string[] = [
		"states:DescribeStateMachineAlias",
	];
	/** IAM actions required for the DescribeStateMachineForExecution API call. */
	static readonly DESCRIBE_STATE_MACHINE_FOR_EXECUTION: string[] = [
		"states:DescribeStateMachineForExecution",
	];
	/** IAM actions required for the GetActivityTask API call. */
	static readonly GET_ACTIVITY_TASK: string[] = ["states:GetActivityTask"];
	/** IAM actions required for the GetExecutionHistory API call. */
	static readonly GET_EXECUTION_HISTORY: string[] = [
		"states:GetExecutionHistory",
	];
	/** IAM actions required for the ListActivities API call. */
	static readonly LIST_ACTIVITIES: string[] = ["states:ListActivities"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = ["states:ListExecutions"];
	/** IAM actions required for the ListMapRuns API call. */
	static readonly LIST_MAP_RUNS: string[] = ["states:ListMapRuns"];
	/** IAM actions required for the ListStateMachineAliases API call. */
	static readonly LIST_STATE_MACHINE_ALIASES: string[] = [
		"states:ListStateMachineAliases",
	];
	/** IAM actions required for the ListStateMachineVersions API call. */
	static readonly LIST_STATE_MACHINE_VERSIONS: string[] = [
		"states:ListStateMachineVersions",
	];
	/** IAM actions required for the ListStateMachines API call. */
	static readonly LIST_STATE_MACHINES: string[] = ["states:ListStateMachines"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"states:ListTagsForResource",
	];
	/** IAM actions required for the PublishStateMachineVersion API call. */
	static readonly PUBLISH_STATE_MACHINE_VERSION: string[] = [
		"states:PublishStateMachineVersion",
	];
	/** IAM actions required for the RedriveExecution API call. */
	static readonly REDRIVE_EXECUTION: string[] = ["states:RedriveExecution"];
	/** IAM actions required for the SendTaskFailure API call. */
	static readonly SEND_TASK_FAILURE: string[] = ["states:SendTaskFailure"];
	/** IAM actions required for the SendTaskHeartbeat API call. */
	static readonly SEND_TASK_HEARTBEAT: string[] = ["states:SendTaskHeartbeat"];
	/** IAM actions required for the SendTaskSuccess API call. */
	static readonly SEND_TASK_SUCCESS: string[] = ["states:SendTaskSuccess"];
	/** IAM actions required for the StartExecution API call. */
	static readonly START_EXECUTION: string[] = [
		"states:DescribeExecution",
		"states:StartExecution",
	];
	/** IAM actions required for the StartSyncExecution API call. */
	static readonly START_SYNC_EXECUTION: string[] = [
		"states:StartSyncExecution",
	];
	/** IAM actions required for the StopExecution API call. */
	static readonly STOP_EXECUTION: string[] = ["states:StopExecution"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["states:TagResource"];
	/** IAM actions required for the TestState API call. */
	static readonly TEST_STATE: string[] = [
		"iam:PassRole",
		"states:RevealSecrets",
		"states:TestState",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["states:UntagResource"];
	/** IAM actions required for the UpdateMapRun API call. */
	static readonly UPDATE_MAP_RUN: string[] = ["states:UpdateMapRun"];
	/** IAM actions required for the UpdateStateMachine API call. */
	static readonly UPDATE_STATE_MACHINE: string[] = [
		"iam:PassRole",
		"states:PublishStateMachineVersion",
		"states:UpdateStateMachine",
	];
	/** IAM actions required for the UpdateStateMachineAlias API call. */
	static readonly UPDATE_STATE_MACHINE_ALIAS: string[] = [
		"states:UpdateStateMachineAlias",
	];
	/** IAM actions required for the ValidateStateMachineDefinition API call. */
	static readonly VALIDATE_STATE_MACHINE_DEFINITION: string[] = [
		"states:ValidateStateMachineDefinition",
	];
}

/**
 * Condition key constants and builders for states.
 */
export class StatesConditions {
	/** Condition keys applicable to the CreateActivity action. */
	static readonly CREATE_ACTIVITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateMachine action. */
	static readonly CREATE_STATE_MACHINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateMachineAlias action. */
	static readonly CREATE_STATE_MACHINE_ALIAS_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DeleteStateMachineAlias action. */
	static readonly DELETE_STATE_MACHINE_ALIAS_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DeleteStateMachineVersion action. */
	static readonly DELETE_STATE_MACHINE_VERSION_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DescribeStateMachine action. */
	static readonly DESCRIBE_STATE_MACHINE_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the DescribeStateMachineAlias action. */
	static readonly DESCRIBE_STATE_MACHINE_ALIAS_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the ListExecutions action. */
	static readonly LIST_EXECUTIONS_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the ListStateMachineAliases action. */
	static readonly LIST_STATE_MACHINE_ALIASES_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the StartExecution action. */
	static readonly START_EXECUTION_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the StartSyncExecution action. */
	static readonly START_SYNC_EXECUTION_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateStateMachine action. */
	static readonly UPDATE_STATE_MACHINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateStateMachineAlias action. */
	static readonly UPDATE_STATE_MACHINE_ALIAS_CONDITION_KEYS: string[] = [
		"states:StateMachineQualifier",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
