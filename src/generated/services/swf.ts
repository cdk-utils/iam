// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/swf.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the swf service.
 */
export class SwfActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "swf";

	/** [Write] swf:CancelTimer */
	static readonly CANCEL_TIMER = "swf:CancelTimer";
	/** [Write] swf:CancelWorkflowExecution */
	static readonly CANCEL_WORKFLOW_EXECUTION = "swf:CancelWorkflowExecution";
	/** [Write] swf:CompleteWorkflowExecution */
	static readonly COMPLETE_WORKFLOW_EXECUTION = "swf:CompleteWorkflowExecution";
	/** [Write] swf:ContinueAsNewWorkflowExecution */
	static readonly CONTINUE_AS_NEW_WORKFLOW_EXECUTION =
		"swf:ContinueAsNewWorkflowExecution";
	/** [Read] swf:CountClosedWorkflowExecutions */
	static readonly COUNT_CLOSED_WORKFLOW_EXECUTIONS =
		"swf:CountClosedWorkflowExecutions";
	/** [Read] swf:CountOpenWorkflowExecutions */
	static readonly COUNT_OPEN_WORKFLOW_EXECUTIONS =
		"swf:CountOpenWorkflowExecutions";
	/** [Read] swf:CountPendingActivityTasks */
	static readonly COUNT_PENDING_ACTIVITY_TASKS =
		"swf:CountPendingActivityTasks";
	/** [Read] swf:CountPendingDecisionTasks */
	static readonly COUNT_PENDING_DECISION_TASKS =
		"swf:CountPendingDecisionTasks";
	/** [Write] swf:DeleteActivityType */
	static readonly DELETE_ACTIVITY_TYPE = "swf:DeleteActivityType";
	/** [Write] swf:DeleteWorkflowType */
	static readonly DELETE_WORKFLOW_TYPE = "swf:DeleteWorkflowType";
	/** [Write] swf:DeprecateActivityType */
	static readonly DEPRECATE_ACTIVITY_TYPE = "swf:DeprecateActivityType";
	/** [Write] swf:DeprecateDomain */
	static readonly DEPRECATE_DOMAIN = "swf:DeprecateDomain";
	/** [Write] swf:DeprecateWorkflowType */
	static readonly DEPRECATE_WORKFLOW_TYPE = "swf:DeprecateWorkflowType";
	/** [Read] swf:DescribeActivityType */
	static readonly DESCRIBE_ACTIVITY_TYPE = "swf:DescribeActivityType";
	/** [Read] swf:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "swf:DescribeDomain";
	/** [Read] swf:DescribeWorkflowExecution */
	static readonly DESCRIBE_WORKFLOW_EXECUTION = "swf:DescribeWorkflowExecution";
	/** [Read] swf:DescribeWorkflowType */
	static readonly DESCRIBE_WORKFLOW_TYPE = "swf:DescribeWorkflowType";
	/** [Write] swf:FailWorkflowExecution */
	static readonly FAIL_WORKFLOW_EXECUTION = "swf:FailWorkflowExecution";
	/** [Read] swf:GetWorkflowExecutionHistory */
	static readonly GET_WORKFLOW_EXECUTION_HISTORY =
		"swf:GetWorkflowExecutionHistory";
	/** [List] swf:ListActivityTypes */
	static readonly LIST_ACTIVITY_TYPES = "swf:ListActivityTypes";
	/** [List] swf:ListClosedWorkflowExecutions */
	static readonly LIST_CLOSED_WORKFLOW_EXECUTIONS =
		"swf:ListClosedWorkflowExecutions";
	/** [List] swf:ListDomains */
	static readonly LIST_DOMAINS = "swf:ListDomains";
	/** [List] swf:ListOpenWorkflowExecutions */
	static readonly LIST_OPEN_WORKFLOW_EXECUTIONS =
		"swf:ListOpenWorkflowExecutions";
	/** [List] swf:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "swf:ListTagsForResource";
	/** [List] swf:ListWorkflowTypes */
	static readonly LIST_WORKFLOW_TYPES = "swf:ListWorkflowTypes";
	/** [Write] swf:PollForActivityTask */
	static readonly POLL_FOR_ACTIVITY_TASK = "swf:PollForActivityTask";
	/** [Write] swf:PollForDecisionTask */
	static readonly POLL_FOR_DECISION_TASK = "swf:PollForDecisionTask";
	/** [Write] swf:RecordActivityTaskHeartbeat */
	static readonly RECORD_ACTIVITY_TASK_HEARTBEAT =
		"swf:RecordActivityTaskHeartbeat";
	/** [Write] swf:RecordMarker */
	static readonly RECORD_MARKER = "swf:RecordMarker";
	/** [Write] swf:RegisterActivityType */
	static readonly REGISTER_ACTIVITY_TYPE = "swf:RegisterActivityType";
	/** [Write] swf:RegisterDomain */
	static readonly REGISTER_DOMAIN = "swf:RegisterDomain";
	/** [Write] swf:RegisterWorkflowType */
	static readonly REGISTER_WORKFLOW_TYPE = "swf:RegisterWorkflowType";
	/** [Write] swf:RequestCancelActivityTask */
	static readonly REQUEST_CANCEL_ACTIVITY_TASK =
		"swf:RequestCancelActivityTask";
	/** [Write] swf:RequestCancelExternalWorkflowExecution */
	static readonly REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION =
		"swf:RequestCancelExternalWorkflowExecution";
	/** [Write] swf:RequestCancelWorkflowExecution */
	static readonly REQUEST_CANCEL_WORKFLOW_EXECUTION =
		"swf:RequestCancelWorkflowExecution";
	/** [Write] swf:RespondActivityTaskCanceled */
	static readonly RESPOND_ACTIVITY_TASK_CANCELED =
		"swf:RespondActivityTaskCanceled";
	/** [Write] swf:RespondActivityTaskCompleted */
	static readonly RESPOND_ACTIVITY_TASK_COMPLETED =
		"swf:RespondActivityTaskCompleted";
	/** [Write] swf:RespondActivityTaskFailed */
	static readonly RESPOND_ACTIVITY_TASK_FAILED =
		"swf:RespondActivityTaskFailed";
	/** [Write] swf:RespondDecisionTaskCompleted */
	static readonly RESPOND_DECISION_TASK_COMPLETED =
		"swf:RespondDecisionTaskCompleted";
	/** [Write] swf:ScheduleActivityTask */
	static readonly SCHEDULE_ACTIVITY_TASK = "swf:ScheduleActivityTask";
	/** [Write] swf:SignalExternalWorkflowExecution */
	static readonly SIGNAL_EXTERNAL_WORKFLOW_EXECUTION =
		"swf:SignalExternalWorkflowExecution";
	/** [Write] swf:SignalWorkflowExecution */
	static readonly SIGNAL_WORKFLOW_EXECUTION = "swf:SignalWorkflowExecution";
	/** [Write] swf:StartChildWorkflowExecution */
	static readonly START_CHILD_WORKFLOW_EXECUTION =
		"swf:StartChildWorkflowExecution";
	/** [Write] swf:StartTimer */
	static readonly START_TIMER = "swf:StartTimer";
	/** [Write] swf:StartWorkflowExecution */
	static readonly START_WORKFLOW_EXECUTION = "swf:StartWorkflowExecution";
	/** [Tagging] swf:TagResource */
	static readonly TAG_RESOURCE = "swf:TagResource";
	/** [Write] swf:TerminateWorkflowExecution */
	static readonly TERMINATE_WORKFLOW_EXECUTION =
		"swf:TerminateWorkflowExecution";
	/** [Write] swf:UndeprecateActivityType */
	static readonly UNDEPRECATE_ACTIVITY_TYPE = "swf:UndeprecateActivityType";
	/** [Write] swf:UndeprecateDomain */
	static readonly UNDEPRECATE_DOMAIN = "swf:UndeprecateDomain";
	/** [Write] swf:UndeprecateWorkflowType */
	static readonly UNDEPRECATE_WORKFLOW_TYPE = "swf:UndeprecateWorkflowType";
	/** [Tagging] swf:UntagResource */
	static readonly UNTAG_RESOURCE = "swf:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SwfActions.COUNT_CLOSED_WORKFLOW_EXECUTIONS,
		SwfActions.COUNT_OPEN_WORKFLOW_EXECUTIONS,
		SwfActions.COUNT_PENDING_ACTIVITY_TASKS,
		SwfActions.COUNT_PENDING_DECISION_TASKS,
		SwfActions.DESCRIBE_ACTIVITY_TYPE,
		SwfActions.DESCRIBE_DOMAIN,
		SwfActions.DESCRIBE_WORKFLOW_EXECUTION,
		SwfActions.DESCRIBE_WORKFLOW_TYPE,
		SwfActions.GET_WORKFLOW_EXECUTION_HISTORY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SwfActions.CANCEL_TIMER,
		SwfActions.CANCEL_WORKFLOW_EXECUTION,
		SwfActions.COMPLETE_WORKFLOW_EXECUTION,
		SwfActions.CONTINUE_AS_NEW_WORKFLOW_EXECUTION,
		SwfActions.DELETE_ACTIVITY_TYPE,
		SwfActions.DELETE_WORKFLOW_TYPE,
		SwfActions.DEPRECATE_ACTIVITY_TYPE,
		SwfActions.DEPRECATE_DOMAIN,
		SwfActions.DEPRECATE_WORKFLOW_TYPE,
		SwfActions.FAIL_WORKFLOW_EXECUTION,
		SwfActions.POLL_FOR_ACTIVITY_TASK,
		SwfActions.POLL_FOR_DECISION_TASK,
		SwfActions.RECORD_ACTIVITY_TASK_HEARTBEAT,
		SwfActions.RECORD_MARKER,
		SwfActions.REGISTER_ACTIVITY_TYPE,
		SwfActions.REGISTER_DOMAIN,
		SwfActions.REGISTER_WORKFLOW_TYPE,
		SwfActions.REQUEST_CANCEL_ACTIVITY_TASK,
		SwfActions.REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION,
		SwfActions.REQUEST_CANCEL_WORKFLOW_EXECUTION,
		SwfActions.RESPOND_ACTIVITY_TASK_CANCELED,
		SwfActions.RESPOND_ACTIVITY_TASK_COMPLETED,
		SwfActions.RESPOND_ACTIVITY_TASK_FAILED,
		SwfActions.RESPOND_DECISION_TASK_COMPLETED,
		SwfActions.SCHEDULE_ACTIVITY_TASK,
		SwfActions.SIGNAL_EXTERNAL_WORKFLOW_EXECUTION,
		SwfActions.SIGNAL_WORKFLOW_EXECUTION,
		SwfActions.START_CHILD_WORKFLOW_EXECUTION,
		SwfActions.START_TIMER,
		SwfActions.START_WORKFLOW_EXECUTION,
		SwfActions.TERMINATE_WORKFLOW_EXECUTION,
		SwfActions.UNDEPRECATE_ACTIVITY_TYPE,
		SwfActions.UNDEPRECATE_DOMAIN,
		SwfActions.UNDEPRECATE_WORKFLOW_TYPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SwfActions.LIST_ACTIVITY_TYPES,
		SwfActions.LIST_CLOSED_WORKFLOW_EXECUTIONS,
		SwfActions.LIST_DOMAINS,
		SwfActions.LIST_OPEN_WORKFLOW_EXECUTIONS,
		SwfActions.LIST_TAGS_FOR_RESOURCE,
		SwfActions.LIST_WORKFLOW_TYPES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SwfActions.TAG_RESOURCE,
		SwfActions.UNTAG_RESOURCE,
	];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):swf::(?<account>[^:]*):/domain/(?<domainName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for swf resources.
 */
export class SwfResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:swf::${props.account ?? "*"}:/domain/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		account: string;
		domainName: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for swf.
 */
export class SwfOperations {
	/** IAM actions required for the CountClosedWorkflowExecutions API call. */
	static readonly COUNT_CLOSED_WORKFLOW_EXECUTIONS: string[] = [
		"swf:CountClosedWorkflowExecutions",
	];
	/** IAM actions required for the CountOpenWorkflowExecutions API call. */
	static readonly COUNT_OPEN_WORKFLOW_EXECUTIONS: string[] = [
		"swf:CountOpenWorkflowExecutions",
	];
	/** IAM actions required for the CountPendingActivityTasks API call. */
	static readonly COUNT_PENDING_ACTIVITY_TASKS: string[] = [
		"swf:CountPendingActivityTasks",
	];
	/** IAM actions required for the CountPendingDecisionTasks API call. */
	static readonly COUNT_PENDING_DECISION_TASKS: string[] = [
		"swf:CountPendingDecisionTasks",
	];
	/** IAM actions required for the DeleteActivityType API call. */
	static readonly DELETE_ACTIVITY_TYPE: string[] = ["swf:DeleteActivityType"];
	/** IAM actions required for the DeleteWorkflowType API call. */
	static readonly DELETE_WORKFLOW_TYPE: string[] = ["swf:DeleteWorkflowType"];
	/** IAM actions required for the DeprecateActivityType API call. */
	static readonly DEPRECATE_ACTIVITY_TYPE: string[] = [
		"swf:DeprecateActivityType",
	];
	/** IAM actions required for the DeprecateDomain API call. */
	static readonly DEPRECATE_DOMAIN: string[] = ["swf:DeprecateDomain"];
	/** IAM actions required for the DeprecateWorkflowType API call. */
	static readonly DEPRECATE_WORKFLOW_TYPE: string[] = [
		"swf:DeprecateWorkflowType",
	];
	/** IAM actions required for the DescribeActivityType API call. */
	static readonly DESCRIBE_ACTIVITY_TYPE: string[] = [
		"swf:DescribeActivityType",
	];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DESCRIBE_DOMAIN: string[] = ["swf:DescribeDomain"];
	/** IAM actions required for the DescribeWorkflowExecution API call. */
	static readonly DESCRIBE_WORKFLOW_EXECUTION: string[] = [
		"swf:DescribeWorkflowExecution",
	];
	/** IAM actions required for the DescribeWorkflowType API call. */
	static readonly DESCRIBE_WORKFLOW_TYPE: string[] = [
		"swf:DescribeWorkflowType",
	];
	/** IAM actions required for the GetWorkflowExecutionHistory API call. */
	static readonly GET_WORKFLOW_EXECUTION_HISTORY: string[] = [
		"swf:GetWorkflowExecutionHistory",
	];
	/** IAM actions required for the ListActivityTypes API call. */
	static readonly LIST_ACTIVITY_TYPES: string[] = ["swf:ListActivityTypes"];
	/** IAM actions required for the ListClosedWorkflowExecutions API call. */
	static readonly LIST_CLOSED_WORKFLOW_EXECUTIONS: string[] = [
		"swf:ListClosedWorkflowExecutions",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["swf:ListDomains"];
	/** IAM actions required for the ListOpenWorkflowExecutions API call. */
	static readonly LIST_OPEN_WORKFLOW_EXECUTIONS: string[] = [
		"swf:ListOpenWorkflowExecutions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"swf:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkflowTypes API call. */
	static readonly LIST_WORKFLOW_TYPES: string[] = ["swf:ListWorkflowTypes"];
	/** IAM actions required for the PollForActivityTask API call. */
	static readonly POLL_FOR_ACTIVITY_TASK: string[] = [
		"swf:PollForActivityTask",
	];
	/** IAM actions required for the PollForDecisionTask API call. */
	static readonly POLL_FOR_DECISION_TASK: string[] = [
		"swf:PollForDecisionTask",
	];
	/** IAM actions required for the RecordActivityTaskHeartbeat API call. */
	static readonly RECORD_ACTIVITY_TASK_HEARTBEAT: string[] = [
		"swf:RecordActivityTaskHeartbeat",
	];
	/** IAM actions required for the RegisterActivityType API call. */
	static readonly REGISTER_ACTIVITY_TYPE: string[] = [
		"swf:RegisterActivityType",
	];
	/** IAM actions required for the RegisterDomain API call. */
	static readonly REGISTER_DOMAIN: string[] = [
		"swf:RegisterDomain",
		"swf:TagResource",
	];
	/** IAM actions required for the RegisterWorkflowType API call. */
	static readonly REGISTER_WORKFLOW_TYPE: string[] = [
		"iam:PassRole",
		"swf:RegisterWorkflowType",
	];
	/** IAM actions required for the RequestCancelWorkflowExecution API call. */
	static readonly REQUEST_CANCEL_WORKFLOW_EXECUTION: string[] = [
		"swf:RequestCancelWorkflowExecution",
	];
	/** IAM actions required for the RespondActivityTaskCanceled API call. */
	static readonly RESPOND_ACTIVITY_TASK_CANCELED: string[] = [
		"swf:RespondActivityTaskCanceled",
	];
	/** IAM actions required for the RespondActivityTaskCompleted API call. */
	static readonly RESPOND_ACTIVITY_TASK_COMPLETED: string[] = [
		"swf:RespondActivityTaskCompleted",
	];
	/** IAM actions required for the RespondActivityTaskFailed API call. */
	static readonly RESPOND_ACTIVITY_TASK_FAILED: string[] = [
		"swf:RespondActivityTaskFailed",
	];
	/** IAM actions required for the RespondDecisionTaskCompleted API call. */
	static readonly RESPOND_DECISION_TASK_COMPLETED: string[] = [
		"iam:PassRole",
		"swf:RespondDecisionTaskCompleted",
	];
	/** IAM actions required for the SignalWorkflowExecution API call. */
	static readonly SIGNAL_WORKFLOW_EXECUTION: string[] = [
		"swf:SignalWorkflowExecution",
	];
	/** IAM actions required for the StartWorkflowExecution API call. */
	static readonly START_WORKFLOW_EXECUTION: string[] = [
		"iam:PassRole",
		"swf:StartWorkflowExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["swf:TagResource"];
	/** IAM actions required for the TerminateWorkflowExecution API call. */
	static readonly TERMINATE_WORKFLOW_EXECUTION: string[] = [
		"swf:TerminateWorkflowExecution",
	];
	/** IAM actions required for the UndeprecateActivityType API call. */
	static readonly UNDEPRECATE_ACTIVITY_TYPE: string[] = [
		"swf:UndeprecateActivityType",
	];
	/** IAM actions required for the UndeprecateDomain API call. */
	static readonly UNDEPRECATE_DOMAIN: string[] = ["swf:UndeprecateDomain"];
	/** IAM actions required for the UndeprecateWorkflowType API call. */
	static readonly UNDEPRECATE_WORKFLOW_TYPE: string[] = [
		"swf:UndeprecateWorkflowType",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["swf:UntagResource"];
}

/**
 * Condition key constants and builders for swf.
 */
export class SwfConditions {
	/** Condition keys applicable to the CountClosedWorkflowExecutions action. */
	static readonly COUNT_CLOSED_WORKFLOW_EXECUTIONS_CONDITION_KEYS: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the CountOpenWorkflowExecutions action. */
	static readonly COUNT_OPEN_WORKFLOW_EXECUTIONS_CONDITION_KEYS: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the CountPendingActivityTasks action. */
	static readonly COUNT_PENDING_ACTIVITY_TASKS_CONDITION_KEYS: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the CountPendingDecisionTasks action. */
	static readonly COUNT_PENDING_DECISION_TASKS_CONDITION_KEYS: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the DeleteActivityType action. */
	static readonly DELETE_ACTIVITY_TYPE_CONDITION_KEYS: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DeleteWorkflowType action. */
	static readonly DELETE_WORKFLOW_TYPE_CONDITION_KEYS: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the DeprecateActivityType action. */
	static readonly DEPRECATE_ACTIVITY_TYPE_CONDITION_KEYS: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DeprecateWorkflowType action. */
	static readonly DEPRECATE_WORKFLOW_TYPE_CONDITION_KEYS: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the DescribeActivityType action. */
	static readonly DESCRIBE_ACTIVITY_TYPE_CONDITION_KEYS: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DescribeWorkflowType action. */
	static readonly DESCRIBE_WORKFLOW_TYPE_CONDITION_KEYS: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the ListClosedWorkflowExecutions action. */
	static readonly LIST_CLOSED_WORKFLOW_EXECUTIONS_CONDITION_KEYS: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the ListOpenWorkflowExecutions action. */
	static readonly LIST_OPEN_WORKFLOW_EXECUTIONS_CONDITION_KEYS: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the PollForActivityTask action. */
	static readonly POLL_FOR_ACTIVITY_TASK_CONDITION_KEYS: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the PollForDecisionTask action. */
	static readonly POLL_FOR_DECISION_TASK_CONDITION_KEYS: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the RegisterActivityType action. */
	static readonly REGISTER_ACTIVITY_TYPE_CONDITION_KEYS: string[] = [
		"swf:defaultTaskList.name",
		"swf:name",
		"swf:version",
	];
	/** Condition keys applicable to the RegisterDomain action. */
	static readonly REGISTER_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterWorkflowType action. */
	static readonly REGISTER_WORKFLOW_TYPE_CONDITION_KEYS: string[] = [
		"swf:defaultTaskList.name",
		"swf:name",
		"swf:version",
	];
	/** Condition keys applicable to the RespondActivityTaskCompleted action. */
	static readonly RESPOND_ACTIVITY_TASK_COMPLETED_CONDITION_KEYS: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
		"swf:tagList.member.0",
		"swf:tagList.member.1",
		"swf:tagList.member.2",
		"swf:tagList.member.3",
		"swf:tagList.member.4",
		"swf:taskList.name",
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the StartWorkflowExecution action. */
	static readonly START_WORKFLOW_EXECUTION_CONDITION_KEYS: string[] = [
		"swf:tagList.member.0",
		"swf:tagList.member.1",
		"swf:tagList.member.2",
		"swf:tagList.member.3",
		"swf:tagList.member.4",
		"swf:taskList.name",
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UndeprecateActivityType action. */
	static readonly UNDEPRECATE_ACTIVITY_TYPE_CONDITION_KEYS: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the UndeprecateWorkflowType action. */
	static readonly UNDEPRECATE_WORKFLOW_TYPE_CONDITION_KEYS: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: swf:activityType.name (String) */
	static readonly ACTIVITY_TYPE_NAME = "swf:activityType.name";
	/** Condition key: swf:activityType.version (String) */
	static readonly ACTIVITY_TYPE_VERSION = "swf:activityType.version";
	/** Condition key: swf:defaultTaskList.name (String) */
	static readonly DEFAULT_TASK_LIST_NAME = "swf:defaultTaskList.name";
	/** Condition key: swf:name (String) */
	static readonly NAME = "swf:name";
	/** Condition key: swf:tagFilter.tag (String) */
	static readonly TAG_FILTER_TAG = "swf:tagFilter.tag";
	/** Condition key: swf:tagList.member.0 (String) */
	static readonly TAG_LIST_MEMBER_0 = "swf:tagList.member.0";
	/** Condition key: swf:tagList.member.1 (String) */
	static readonly TAG_LIST_MEMBER_1 = "swf:tagList.member.1";
	/** Condition key: swf:tagList.member.2 (String) */
	static readonly TAG_LIST_MEMBER_2 = "swf:tagList.member.2";
	/** Condition key: swf:tagList.member.3 (String) */
	static readonly TAG_LIST_MEMBER_3 = "swf:tagList.member.3";
	/** Condition key: swf:tagList.member.4 (String) */
	static readonly TAG_LIST_MEMBER_4 = "swf:tagList.member.4";
	/** Condition key: swf:taskList.name (String) */
	static readonly TASK_LIST_NAME = "swf:taskList.name";
	/** Condition key: swf:typeFilter.name (String) */
	static readonly TYPE_FILTER_NAME = "swf:typeFilter.name";
	/** Condition key: swf:typeFilter.version (String) */
	static readonly TYPE_FILTER_VERSION = "swf:typeFilter.version";
	/** Condition key: swf:version (String) */
	static readonly VERSION = "swf:version";
	/** Condition key: swf:workflowType.name (String) */
	static readonly WORKFLOW_TYPE_NAME = "swf:workflowType.name";
	/** Condition key: swf:workflowType.version (String) */
	static readonly WORKFLOW_TYPE_VERSION = "swf:workflowType.version";

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
	 * Generates a condition block for `swf:activityType.name`.
	 */
	static activityTypeName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:activityType.name": value } };
	}

	/**
	 * Generates a condition block for `swf:activityType.version`.
	 */
	static activityTypeVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:activityType.version": value } };
	}

	/**
	 * Generates a condition block for `swf:defaultTaskList.name`.
	 */
	static defaultTaskListName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:defaultTaskList.name": value } };
	}

	/**
	 * Generates a condition block for `swf:name`.
	 */
	static name(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:name": value } };
	}

	/**
	 * Generates a condition block for `swf:tagFilter.tag`.
	 */
	static tagFilterTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagFilter.tag": value } };
	}

	/**
	 * Generates a condition block for `swf:tagList.member.0`.
	 */
	static tagListMember0(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagList.member.0": value } };
	}

	/**
	 * Generates a condition block for `swf:tagList.member.1`.
	 */
	static tagListMember1(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagList.member.1": value } };
	}

	/**
	 * Generates a condition block for `swf:tagList.member.2`.
	 */
	static tagListMember2(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagList.member.2": value } };
	}

	/**
	 * Generates a condition block for `swf:tagList.member.3`.
	 */
	static tagListMember3(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagList.member.3": value } };
	}

	/**
	 * Generates a condition block for `swf:tagList.member.4`.
	 */
	static tagListMember4(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:tagList.member.4": value } };
	}

	/**
	 * Generates a condition block for `swf:taskList.name`.
	 */
	static taskListName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:taskList.name": value } };
	}

	/**
	 * Generates a condition block for `swf:typeFilter.name`.
	 */
	static typeFilterName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:typeFilter.name": value } };
	}

	/**
	 * Generates a condition block for `swf:typeFilter.version`.
	 */
	static typeFilterVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:typeFilter.version": value } };
	}

	/**
	 * Generates a condition block for `swf:version`.
	 */
	static version(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:version": value } };
	}

	/**
	 * Generates a condition block for `swf:workflowType.name`.
	 */
	static workflowTypeName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:workflowType.name": value } };
	}

	/**
	 * Generates a condition block for `swf:workflowType.version`.
	 */
	static workflowTypeVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "swf:workflowType.version": value } };
	}
}
