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
	static readonly CancelTimer = "swf:CancelTimer";
	/** [Write] swf:CancelWorkflowExecution */
	static readonly CancelWorkflowExecution = "swf:CancelWorkflowExecution";
	/** [Write] swf:CompleteWorkflowExecution */
	static readonly CompleteWorkflowExecution = "swf:CompleteWorkflowExecution";
	/** [Write] swf:ContinueAsNewWorkflowExecution */
	static readonly ContinueAsNewWorkflowExecution =
		"swf:ContinueAsNewWorkflowExecution";
	/** [Read] swf:CountClosedWorkflowExecutions */
	static readonly CountClosedWorkflowExecutions =
		"swf:CountClosedWorkflowExecutions";
	/** [Read] swf:CountOpenWorkflowExecutions */
	static readonly CountOpenWorkflowExecutions =
		"swf:CountOpenWorkflowExecutions";
	/** [Read] swf:CountPendingActivityTasks */
	static readonly CountPendingActivityTasks = "swf:CountPendingActivityTasks";
	/** [Read] swf:CountPendingDecisionTasks */
	static readonly CountPendingDecisionTasks = "swf:CountPendingDecisionTasks";
	/** [Write] swf:DeleteActivityType */
	static readonly DeleteActivityType = "swf:DeleteActivityType";
	/** [Write] swf:DeleteWorkflowType */
	static readonly DeleteWorkflowType = "swf:DeleteWorkflowType";
	/** [Write] swf:DeprecateActivityType */
	static readonly DeprecateActivityType = "swf:DeprecateActivityType";
	/** [Write] swf:DeprecateDomain */
	static readonly DeprecateDomain = "swf:DeprecateDomain";
	/** [Write] swf:DeprecateWorkflowType */
	static readonly DeprecateWorkflowType = "swf:DeprecateWorkflowType";
	/** [Read] swf:DescribeActivityType */
	static readonly DescribeActivityType = "swf:DescribeActivityType";
	/** [Read] swf:DescribeDomain */
	static readonly DescribeDomain = "swf:DescribeDomain";
	/** [Read] swf:DescribeWorkflowExecution */
	static readonly DescribeWorkflowExecution = "swf:DescribeWorkflowExecution";
	/** [Read] swf:DescribeWorkflowType */
	static readonly DescribeWorkflowType = "swf:DescribeWorkflowType";
	/** [Write] swf:FailWorkflowExecution */
	static readonly FailWorkflowExecution = "swf:FailWorkflowExecution";
	/** [Read] swf:GetWorkflowExecutionHistory */
	static readonly actionGetWorkflowExecutionHistory =
		"swf:GetWorkflowExecutionHistory";
	/** [List] swf:ListActivityTypes */
	static readonly ListActivityTypes = "swf:ListActivityTypes";
	/** [List] swf:ListClosedWorkflowExecutions */
	static readonly ListClosedWorkflowExecutions =
		"swf:ListClosedWorkflowExecutions";
	/** [List] swf:ListDomains */
	static readonly ListDomains = "swf:ListDomains";
	/** [List] swf:ListOpenWorkflowExecutions */
	static readonly ListOpenWorkflowExecutions = "swf:ListOpenWorkflowExecutions";
	/** [List] swf:ListTagsForResource */
	static readonly ListTagsForResource = "swf:ListTagsForResource";
	/** [List] swf:ListWorkflowTypes */
	static readonly ListWorkflowTypes = "swf:ListWorkflowTypes";
	/** [Write] swf:PollForActivityTask */
	static readonly PollForActivityTask = "swf:PollForActivityTask";
	/** [Write] swf:PollForDecisionTask */
	static readonly PollForDecisionTask = "swf:PollForDecisionTask";
	/** [Write] swf:RecordActivityTaskHeartbeat */
	static readonly RecordActivityTaskHeartbeat =
		"swf:RecordActivityTaskHeartbeat";
	/** [Write] swf:RecordMarker */
	static readonly RecordMarker = "swf:RecordMarker";
	/** [Write] swf:RegisterActivityType */
	static readonly RegisterActivityType = "swf:RegisterActivityType";
	/** [Write] swf:RegisterDomain */
	static readonly RegisterDomain = "swf:RegisterDomain";
	/** [Write] swf:RegisterWorkflowType */
	static readonly RegisterWorkflowType = "swf:RegisterWorkflowType";
	/** [Write] swf:RequestCancelActivityTask */
	static readonly RequestCancelActivityTask = "swf:RequestCancelActivityTask";
	/** [Write] swf:RequestCancelExternalWorkflowExecution */
	static readonly RequestCancelExternalWorkflowExecution =
		"swf:RequestCancelExternalWorkflowExecution";
	/** [Write] swf:RequestCancelWorkflowExecution */
	static readonly RequestCancelWorkflowExecution =
		"swf:RequestCancelWorkflowExecution";
	/** [Write] swf:RespondActivityTaskCanceled */
	static readonly RespondActivityTaskCanceled =
		"swf:RespondActivityTaskCanceled";
	/** [Write] swf:RespondActivityTaskCompleted */
	static readonly RespondActivityTaskCompleted =
		"swf:RespondActivityTaskCompleted";
	/** [Write] swf:RespondActivityTaskFailed */
	static readonly RespondActivityTaskFailed = "swf:RespondActivityTaskFailed";
	/** [Write] swf:RespondDecisionTaskCompleted */
	static readonly RespondDecisionTaskCompleted =
		"swf:RespondDecisionTaskCompleted";
	/** [Write] swf:ScheduleActivityTask */
	static readonly ScheduleActivityTask = "swf:ScheduleActivityTask";
	/** [Write] swf:SignalExternalWorkflowExecution */
	static readonly SignalExternalWorkflowExecution =
		"swf:SignalExternalWorkflowExecution";
	/** [Write] swf:SignalWorkflowExecution */
	static readonly SignalWorkflowExecution = "swf:SignalWorkflowExecution";
	/** [Write] swf:StartChildWorkflowExecution */
	static readonly StartChildWorkflowExecution =
		"swf:StartChildWorkflowExecution";
	/** [Write] swf:StartTimer */
	static readonly StartTimer = "swf:StartTimer";
	/** [Write] swf:StartWorkflowExecution */
	static readonly StartWorkflowExecution = "swf:StartWorkflowExecution";
	/** [Tagging] swf:TagResource */
	static readonly TagResource = "swf:TagResource";
	/** [Write] swf:TerminateWorkflowExecution */
	static readonly TerminateWorkflowExecution = "swf:TerminateWorkflowExecution";
	/** [Write] swf:UndeprecateActivityType */
	static readonly UndeprecateActivityType = "swf:UndeprecateActivityType";
	/** [Write] swf:UndeprecateDomain */
	static readonly UndeprecateDomain = "swf:UndeprecateDomain";
	/** [Write] swf:UndeprecateWorkflowType */
	static readonly UndeprecateWorkflowType = "swf:UndeprecateWorkflowType";
	/** [Tagging] swf:UntagResource */
	static readonly UntagResource = "swf:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SwfActions.CountClosedWorkflowExecutions,
		SwfActions.CountOpenWorkflowExecutions,
		SwfActions.CountPendingActivityTasks,
		SwfActions.CountPendingDecisionTasks,
		SwfActions.DescribeActivityType,
		SwfActions.DescribeDomain,
		SwfActions.DescribeWorkflowExecution,
		SwfActions.DescribeWorkflowType,
		SwfActions.actionGetWorkflowExecutionHistory,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SwfActions.CancelTimer,
		SwfActions.CancelWorkflowExecution,
		SwfActions.CompleteWorkflowExecution,
		SwfActions.ContinueAsNewWorkflowExecution,
		SwfActions.DeleteActivityType,
		SwfActions.DeleteWorkflowType,
		SwfActions.DeprecateActivityType,
		SwfActions.DeprecateDomain,
		SwfActions.DeprecateWorkflowType,
		SwfActions.FailWorkflowExecution,
		SwfActions.PollForActivityTask,
		SwfActions.PollForDecisionTask,
		SwfActions.RecordActivityTaskHeartbeat,
		SwfActions.RecordMarker,
		SwfActions.RegisterActivityType,
		SwfActions.RegisterDomain,
		SwfActions.RegisterWorkflowType,
		SwfActions.RequestCancelActivityTask,
		SwfActions.RequestCancelExternalWorkflowExecution,
		SwfActions.RequestCancelWorkflowExecution,
		SwfActions.RespondActivityTaskCanceled,
		SwfActions.RespondActivityTaskCompleted,
		SwfActions.RespondActivityTaskFailed,
		SwfActions.RespondDecisionTaskCompleted,
		SwfActions.ScheduleActivityTask,
		SwfActions.SignalExternalWorkflowExecution,
		SwfActions.SignalWorkflowExecution,
		SwfActions.StartChildWorkflowExecution,
		SwfActions.StartTimer,
		SwfActions.StartWorkflowExecution,
		SwfActions.TerminateWorkflowExecution,
		SwfActions.UndeprecateActivityType,
		SwfActions.UndeprecateDomain,
		SwfActions.UndeprecateWorkflowType,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SwfActions.ListActivityTypes,
		SwfActions.ListClosedWorkflowExecutions,
		SwfActions.ListDomains,
		SwfActions.ListOpenWorkflowExecutions,
		SwfActions.ListTagsForResource,
		SwfActions.ListWorkflowTypes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SwfActions.TagResource,
		SwfActions.UntagResource,
	];
}

/**
 * Properties for building a domain ARN.
 */
export interface SwfDomainArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface SwfDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

const DomainArnRegex =
	/^arn:(?<partition>[^:]+):swf::(?<account>[^:]*):\/domain\/(?<domainName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for swf resources.
 */
export class SwfResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: SwfDomainArnProps): string {
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
	static parseDomainArn(arn: string): SwfDomainArnComponents {
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
	static readonly CountClosedWorkflowExecutions: string[] = [
		"swf:CountClosedWorkflowExecutions",
	];
	/** IAM actions required for the CountOpenWorkflowExecutions API call. */
	static readonly CountOpenWorkflowExecutions: string[] = [
		"swf:CountOpenWorkflowExecutions",
	];
	/** IAM actions required for the CountPendingActivityTasks API call. */
	static readonly CountPendingActivityTasks: string[] = [
		"swf:CountPendingActivityTasks",
	];
	/** IAM actions required for the CountPendingDecisionTasks API call. */
	static readonly CountPendingDecisionTasks: string[] = [
		"swf:CountPendingDecisionTasks",
	];
	/** IAM actions required for the DeleteActivityType API call. */
	static readonly DeleteActivityType: string[] = ["swf:DeleteActivityType"];
	/** IAM actions required for the DeleteWorkflowType API call. */
	static readonly DeleteWorkflowType: string[] = ["swf:DeleteWorkflowType"];
	/** IAM actions required for the DeprecateActivityType API call. */
	static readonly DeprecateActivityType: string[] = [
		"swf:DeprecateActivityType",
	];
	/** IAM actions required for the DeprecateDomain API call. */
	static readonly DeprecateDomain: string[] = ["swf:DeprecateDomain"];
	/** IAM actions required for the DeprecateWorkflowType API call. */
	static readonly DeprecateWorkflowType: string[] = [
		"swf:DeprecateWorkflowType",
	];
	/** IAM actions required for the DescribeActivityType API call. */
	static readonly DescribeActivityType: string[] = ["swf:DescribeActivityType"];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DescribeDomain: string[] = ["swf:DescribeDomain"];
	/** IAM actions required for the DescribeWorkflowExecution API call. */
	static readonly DescribeWorkflowExecution: string[] = [
		"swf:DescribeWorkflowExecution",
	];
	/** IAM actions required for the DescribeWorkflowType API call. */
	static readonly DescribeWorkflowType: string[] = ["swf:DescribeWorkflowType"];
	/** IAM actions required for the GetWorkflowExecutionHistory API call. */
	static readonly opGetWorkflowExecutionHistory: string[] = [
		"swf:GetWorkflowExecutionHistory",
	];
	/** IAM actions required for the ListActivityTypes API call. */
	static readonly ListActivityTypes: string[] = ["swf:ListActivityTypes"];
	/** IAM actions required for the ListClosedWorkflowExecutions API call. */
	static readonly ListClosedWorkflowExecutions: string[] = [
		"swf:ListClosedWorkflowExecutions",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["swf:ListDomains"];
	/** IAM actions required for the ListOpenWorkflowExecutions API call. */
	static readonly ListOpenWorkflowExecutions: string[] = [
		"swf:ListOpenWorkflowExecutions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["swf:ListTagsForResource"];
	/** IAM actions required for the ListWorkflowTypes API call. */
	static readonly ListWorkflowTypes: string[] = ["swf:ListWorkflowTypes"];
	/** IAM actions required for the PollForActivityTask API call. */
	static readonly PollForActivityTask: string[] = ["swf:PollForActivityTask"];
	/** IAM actions required for the PollForDecisionTask API call. */
	static readonly PollForDecisionTask: string[] = ["swf:PollForDecisionTask"];
	/** IAM actions required for the RecordActivityTaskHeartbeat API call. */
	static readonly RecordActivityTaskHeartbeat: string[] = [
		"swf:RecordActivityTaskHeartbeat",
	];
	/** IAM actions required for the RegisterActivityType API call. */
	static readonly RegisterActivityType: string[] = ["swf:RegisterActivityType"];
	/** IAM actions required for the RegisterDomain API call. */
	static readonly RegisterDomain: string[] = [
		"swf:RegisterDomain",
		"swf:TagResource",
	];
	/** IAM actions required for the RegisterWorkflowType API call. */
	static readonly RegisterWorkflowType: string[] = [
		"iam:PassRole",
		"swf:RegisterWorkflowType",
	];
	/** IAM actions required for the RequestCancelWorkflowExecution API call. */
	static readonly RequestCancelWorkflowExecution: string[] = [
		"swf:RequestCancelWorkflowExecution",
	];
	/** IAM actions required for the RespondActivityTaskCanceled API call. */
	static readonly RespondActivityTaskCanceled: string[] = [
		"swf:RespondActivityTaskCanceled",
	];
	/** IAM actions required for the RespondActivityTaskCompleted API call. */
	static readonly RespondActivityTaskCompleted: string[] = [
		"swf:RespondActivityTaskCompleted",
	];
	/** IAM actions required for the RespondActivityTaskFailed API call. */
	static readonly RespondActivityTaskFailed: string[] = [
		"swf:RespondActivityTaskFailed",
	];
	/** IAM actions required for the RespondDecisionTaskCompleted API call. */
	static readonly RespondDecisionTaskCompleted: string[] = [
		"iam:PassRole",
		"swf:RespondDecisionTaskCompleted",
	];
	/** IAM actions required for the SignalWorkflowExecution API call. */
	static readonly SignalWorkflowExecution: string[] = [
		"swf:SignalWorkflowExecution",
	];
	/** IAM actions required for the StartWorkflowExecution API call. */
	static readonly StartWorkflowExecution: string[] = [
		"iam:PassRole",
		"swf:StartWorkflowExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["swf:TagResource"];
	/** IAM actions required for the TerminateWorkflowExecution API call. */
	static readonly TerminateWorkflowExecution: string[] = [
		"swf:TerminateWorkflowExecution",
	];
	/** IAM actions required for the UndeprecateActivityType API call. */
	static readonly UndeprecateActivityType: string[] = [
		"swf:UndeprecateActivityType",
	];
	/** IAM actions required for the UndeprecateDomain API call. */
	static readonly UndeprecateDomain: string[] = ["swf:UndeprecateDomain"];
	/** IAM actions required for the UndeprecateWorkflowType API call. */
	static readonly UndeprecateWorkflowType: string[] = [
		"swf:UndeprecateWorkflowType",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["swf:UntagResource"];
}

/**
 * Condition key constants and builders for swf.
 */
export class SwfConditions {
	/** Condition keys applicable to the CountClosedWorkflowExecutions action. */
	static readonly CountClosedWorkflowExecutionsConditionKeys: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the CountOpenWorkflowExecutions action. */
	static readonly CountOpenWorkflowExecutionsConditionKeys: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the CountPendingActivityTasks action. */
	static readonly CountPendingActivityTasksConditionKeys: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the CountPendingDecisionTasks action. */
	static readonly CountPendingDecisionTasksConditionKeys: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the DeleteActivityType action. */
	static readonly DeleteActivityTypeConditionKeys: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DeleteWorkflowType action. */
	static readonly DeleteWorkflowTypeConditionKeys: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the DeprecateActivityType action. */
	static readonly DeprecateActivityTypeConditionKeys: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DeprecateWorkflowType action. */
	static readonly DeprecateWorkflowTypeConditionKeys: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the DescribeActivityType action. */
	static readonly DescribeActivityTypeConditionKeys: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the DescribeWorkflowType action. */
	static readonly DescribeWorkflowTypeConditionKeys: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the ListClosedWorkflowExecutions action. */
	static readonly ListClosedWorkflowExecutionsConditionKeys: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the ListOpenWorkflowExecutions action. */
	static readonly ListOpenWorkflowExecutionsConditionKeys: string[] = [
		"swf:tagFilter.tag",
		"swf:typeFilter.name",
		"swf:typeFilter.version",
	];
	/** Condition keys applicable to the PollForActivityTask action. */
	static readonly PollForActivityTaskConditionKeys: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the PollForDecisionTask action. */
	static readonly PollForDecisionTaskConditionKeys: string[] = [
		"swf:taskList.name",
	];
	/** Condition keys applicable to the RegisterActivityType action. */
	static readonly RegisterActivityTypeConditionKeys: string[] = [
		"swf:defaultTaskList.name",
		"swf:name",
		"swf:version",
	];
	/** Condition keys applicable to the RegisterDomain action. */
	static readonly RegisterDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterWorkflowType action. */
	static readonly RegisterWorkflowTypeConditionKeys: string[] = [
		"swf:defaultTaskList.name",
		"swf:name",
		"swf:version",
	];
	/** Condition keys applicable to the RespondActivityTaskCompleted action. */
	static readonly RespondActivityTaskCompletedConditionKeys: string[] = [
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
	static readonly StartWorkflowExecutionConditionKeys: string[] = [
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
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UndeprecateActivityType action. */
	static readonly UndeprecateActivityTypeConditionKeys: string[] = [
		"swf:activityType.name",
		"swf:activityType.version",
	];
	/** Condition keys applicable to the UndeprecateWorkflowType action. */
	static readonly UndeprecateWorkflowTypeConditionKeys: string[] = [
		"swf:workflowType.name",
		"swf:workflowType.version",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
	static conditionName(value: string): Record<string, Record<string, string>> {
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
