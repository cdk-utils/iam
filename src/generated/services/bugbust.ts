// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bugbust.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bugbust service.
 */
export class BugbustActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bugbust";

	/** [Write] bugbust:CreateEvent */
	static readonly CREATE_EVENT = "bugbust:CreateEvent";
	/** [Write] bugbust:EvaluateProfilingGroups */
	static readonly EVALUATE_PROFILING_GROUPS = "bugbust:EvaluateProfilingGroups";
	/** [Read] bugbust:GetEvent */
	static readonly GET_EVENT = "bugbust:GetEvent";
	/** [Read] bugbust:GetJoinEventStatus */
	static readonly GET_JOIN_EVENT_STATUS = "bugbust:GetJoinEventStatus";
	/** [Write] bugbust:JoinEvent */
	static readonly JOIN_EVENT = "bugbust:JoinEvent";
	/** [Read] bugbust:ListBugs */
	static readonly LIST_BUGS = "bugbust:ListBugs";
	/** [Read] bugbust:ListEventParticipants */
	static readonly LIST_EVENT_PARTICIPANTS = "bugbust:ListEventParticipants";
	/** [Read] bugbust:ListEventScores */
	static readonly LIST_EVENT_SCORES = "bugbust:ListEventScores";
	/** [List] bugbust:ListEvents */
	static readonly LIST_EVENTS = "bugbust:ListEvents";
	/** [Read] bugbust:ListProfilingGroups */
	static readonly LIST_PROFILING_GROUPS = "bugbust:ListProfilingGroups";
	/** [Read] bugbust:ListPullRequests */
	static readonly LIST_PULL_REQUESTS = "bugbust:ListPullRequests";
	/** [Read] bugbust:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "bugbust:ListTagsForResource";
	/** [Tagging] bugbust:TagResource */
	static readonly TAG_RESOURCE = "bugbust:TagResource";
	/** [Tagging] bugbust:UntagResource */
	static readonly UNTAG_RESOURCE = "bugbust:UntagResource";
	/** [Write] bugbust:UpdateEvent */
	static readonly UPDATE_EVENT = "bugbust:UpdateEvent";
	/** [Write] bugbust:UpdateWorkItem */
	static readonly UPDATE_WORK_ITEM = "bugbust:UpdateWorkItem";
	/** [Write] bugbust:UpdateWorkItemAdmin */
	static readonly UPDATE_WORK_ITEM_ADMIN = "bugbust:UpdateWorkItemAdmin";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BugbustActions.GET_EVENT,
		BugbustActions.GET_JOIN_EVENT_STATUS,
		BugbustActions.LIST_BUGS,
		BugbustActions.LIST_EVENT_PARTICIPANTS,
		BugbustActions.LIST_EVENT_SCORES,
		BugbustActions.LIST_PROFILING_GROUPS,
		BugbustActions.LIST_PULL_REQUESTS,
		BugbustActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BugbustActions.CREATE_EVENT,
		BugbustActions.EVALUATE_PROFILING_GROUPS,
		BugbustActions.JOIN_EVENT,
		BugbustActions.UPDATE_EVENT,
		BugbustActions.UPDATE_WORK_ITEM,
		BugbustActions.UPDATE_WORK_ITEM_ADMIN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [BugbustActions.LIST_EVENTS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BugbustActions.TAG_RESOURCE,
		BugbustActions.UNTAG_RESOURCE,
	];
}

const EventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bugbust:(?<region>[^:]*):(?<account>[^:]*):events/(?<eventId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bugbust resources.
 */
export class BugbustResources {
	/**
	 * Builds an ARN for the Event resource.
	 */
	static event(props: {
		/** The EventId component of the ARN. */
		readonly eventId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bugbust:${props.region ?? "*"}:${props.account ?? "*"}:events/${props.eventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Event resource.
	 */
	static isValidEventArn(arn: string): boolean {
		return EventArnRegex.test(arn);
	}

	/**
	 * Parses a Event ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventId: string;
	} {
		const match = EventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Event ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventId: match.groups!.eventId,
		};
	}
}

/**
 * Condition key constants and builders for bugbust.
 */
export class BugbustConditions {
	/** Condition keys applicable to the CreateEvent action. */
	static readonly CREATE_EVENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EvaluateProfilingGroups action. */
	static readonly EVALUATE_PROFILING_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEvent action. */
	static readonly GET_EVENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetJoinEventStatus action. */
	static readonly GET_JOIN_EVENT_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the JoinEvent action. */
	static readonly JOIN_EVENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListBugs action. */
	static readonly LIST_BUGS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEventParticipants action. */
	static readonly LIST_EVENT_PARTICIPANTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEventScores action. */
	static readonly LIST_EVENT_SCORES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEvents action. */
	static readonly LIST_EVENTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListProfilingGroups action. */
	static readonly LIST_PROFILING_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPullRequests action. */
	static readonly LIST_PULL_REQUESTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateEvent action. */
	static readonly UPDATE_EVENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkItem action. */
	static readonly UPDATE_WORK_ITEM_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkItemAdmin action. */
	static readonly UPDATE_WORK_ITEM_ADMIN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
