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
	static readonly CreateEvent = "bugbust:CreateEvent";
	/** [Write] bugbust:EvaluateProfilingGroups */
	static readonly EvaluateProfilingGroups = "bugbust:EvaluateProfilingGroups";
	/** [Read] bugbust:GetEvent */
	static readonly actionGetEvent = "bugbust:GetEvent";
	/** [Read] bugbust:GetJoinEventStatus */
	static readonly actionGetJoinEventStatus = "bugbust:GetJoinEventStatus";
	/** [Write] bugbust:JoinEvent */
	static readonly JoinEvent = "bugbust:JoinEvent";
	/** [Read] bugbust:ListBugs */
	static readonly ListBugs = "bugbust:ListBugs";
	/** [Read] bugbust:ListEventParticipants */
	static readonly ListEventParticipants = "bugbust:ListEventParticipants";
	/** [Read] bugbust:ListEventScores */
	static readonly ListEventScores = "bugbust:ListEventScores";
	/** [List] bugbust:ListEvents */
	static readonly ListEvents = "bugbust:ListEvents";
	/** [Read] bugbust:ListProfilingGroups */
	static readonly ListProfilingGroups = "bugbust:ListProfilingGroups";
	/** [Read] bugbust:ListPullRequests */
	static readonly ListPullRequests = "bugbust:ListPullRequests";
	/** [Read] bugbust:ListTagsForResource */
	static readonly ListTagsForResource = "bugbust:ListTagsForResource";
	/** [Tagging] bugbust:TagResource */
	static readonly TagResource = "bugbust:TagResource";
	/** [Tagging] bugbust:UntagResource */
	static readonly UntagResource = "bugbust:UntagResource";
	/** [Write] bugbust:UpdateEvent */
	static readonly UpdateEvent = "bugbust:UpdateEvent";
	/** [Write] bugbust:UpdateWorkItem */
	static readonly UpdateWorkItem = "bugbust:UpdateWorkItem";
	/** [Write] bugbust:UpdateWorkItemAdmin */
	static readonly UpdateWorkItemAdmin = "bugbust:UpdateWorkItemAdmin";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BugbustActions.actionGetEvent,
		BugbustActions.actionGetJoinEventStatus,
		BugbustActions.ListBugs,
		BugbustActions.ListEventParticipants,
		BugbustActions.ListEventScores,
		BugbustActions.ListProfilingGroups,
		BugbustActions.ListPullRequests,
		BugbustActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BugbustActions.CreateEvent,
		BugbustActions.EvaluateProfilingGroups,
		BugbustActions.JoinEvent,
		BugbustActions.UpdateEvent,
		BugbustActions.UpdateWorkItem,
		BugbustActions.UpdateWorkItemAdmin,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [BugbustActions.ListEvents];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BugbustActions.TagResource,
		BugbustActions.UntagResource,
	];
}

/**
 * Properties for building a Event ARN.
 */
export interface BugbustEventArnProps {
	/** The EventId component of the ARN. */
	readonly eventId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Event ARN.
 */
export interface BugbustEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventId component. */
	readonly eventId: string;
}

const EventArnRegex =
	/^arn:(?<partition>[^:]+):bugbust:(?<region>[^:]*):(?<account>[^:]*):events\/(?<eventId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bugbust resources.
 */
export class BugbustResources {
	/**
	 * Builds an ARN for the Event resource.
	 */
	static event(props: BugbustEventArnProps): string {
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
	static parseEventArn(arn: string): BugbustEventArnComponents {
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
	static readonly CreateEventConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EvaluateProfilingGroups action. */
	static readonly EvaluateProfilingGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEvent action. */
	static readonly actionGetEventConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetJoinEventStatus action. */
	static readonly actionGetJoinEventStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the JoinEvent action. */
	static readonly JoinEventConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListBugs action. */
	static readonly ListBugsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEventParticipants action. */
	static readonly ListEventParticipantsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEventScores action. */
	static readonly ListEventScoresConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListEvents action. */
	static readonly ListEventsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListProfilingGroups action. */
	static readonly ListProfilingGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPullRequests action. */
	static readonly ListPullRequestsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateEvent action. */
	static readonly UpdateEventConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkItem action. */
	static readonly UpdateWorkItemConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkItemAdmin action. */
	static readonly UpdateWorkItemAdminConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
