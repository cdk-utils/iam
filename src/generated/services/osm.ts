// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/osm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the osm service.
 */
export class OsmActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "osm";

	/** [Read] osm:BatchGetEvent */
	static readonly BatchGetEvent = "osm:BatchGetEvent";
	/** [Write] osm:CreateEvent */
	static readonly CreateEvent = "osm:CreateEvent";
	/** [Write] osm:CreateMemory */
	static readonly CreateMemory = "osm:CreateMemory";
	/** [Write] osm:CreateSpace */
	static readonly CreateSpace = "osm:CreateSpace";
	/** [Write] osm:DeleteEvent */
	static readonly DeleteEvent = "osm:DeleteEvent";
	/** [Write] osm:DeleteMemory */
	static readonly DeleteMemory = "osm:DeleteMemory";
	/** [Write] osm:DeleteSpace */
	static readonly DeleteSpace = "osm:DeleteSpace";
	/** [Read] osm:GetEvent */
	static readonly actionGetEvent = "osm:GetEvent";
	/** [Read] osm:GetMemory */
	static readonly actionGetMemory = "osm:GetMemory";
	/** [Read] osm:GetSpace */
	static readonly actionGetSpace = "osm:GetSpace";
	/** [List] osm:ListEvents */
	static readonly ListEvents = "osm:ListEvents";
	/** [List] osm:ListMemories */
	static readonly ListMemories = "osm:ListMemories";
	/** [List] osm:ListSpaces */
	static readonly ListSpaces = "osm:ListSpaces";
	/** [Read] osm:ListTagsForResource */
	static readonly ListTagsForResource = "osm:ListTagsForResource";
	/** [Read] osm:SearchEvents */
	static readonly SearchEvents = "osm:SearchEvents";
	/** [Read] osm:SearchMemories */
	static readonly SearchMemories = "osm:SearchMemories";
	/** [Tagging] osm:TagResource */
	static readonly TagResource = "osm:TagResource";
	/** [Tagging] osm:UntagResource */
	static readonly UntagResource = "osm:UntagResource";
	/** [Write] osm:UpdateMemory */
	static readonly UpdateMemory = "osm:UpdateMemory";
	/** [Write] osm:UpdateSpace */
	static readonly UpdateSpace = "osm:UpdateSpace";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OsmActions.BatchGetEvent,
		OsmActions.actionGetEvent,
		OsmActions.actionGetMemory,
		OsmActions.actionGetSpace,
		OsmActions.ListTagsForResource,
		OsmActions.SearchEvents,
		OsmActions.SearchMemories,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OsmActions.CreateEvent,
		OsmActions.CreateMemory,
		OsmActions.CreateSpace,
		OsmActions.DeleteEvent,
		OsmActions.DeleteMemory,
		OsmActions.DeleteSpace,
		OsmActions.UpdateMemory,
		OsmActions.UpdateSpace,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OsmActions.ListEvents,
		OsmActions.ListMemories,
		OsmActions.ListSpaces,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OsmActions.TagResource,
		OsmActions.UntagResource,
	];
}

/**
 * Properties for building a space ARN.
 */
export interface OsmSpaceArnProps {
	/** The SpaceId component of the ARN. */
	readonly spaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a space ARN.
 */
export interface OsmSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SpaceId component. */
	readonly spaceId: string;
}

const SpaceArnRegex =
	/^arn:(?<partition>[^:]+):osm:(?<region>[^:]*):(?<account>[^:]*):space\/(?<spaceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for osm resources.
 */
export class OsmResources {
	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: OsmSpaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:osm:${props.region ?? "*"}:${props.account ?? "*"}:space/${props.spaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): OsmSpaceArnComponents {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			spaceId: match.groups!.spaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for osm.
 */
export class OsmOperations {
	/** IAM actions required for the BatchGetEvent API call. */
	static readonly BatchGetEvent: string[] = [];
	/** IAM actions required for the CreateEvent API call. */
	static readonly CreateEvent: string[] = [];
	/** IAM actions required for the CreateMemory API call. */
	static readonly CreateMemory: string[] = [];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CreateSpace: string[] = [];
	/** IAM actions required for the DeleteEvent API call. */
	static readonly DeleteEvent: string[] = [];
	/** IAM actions required for the DeleteMemory API call. */
	static readonly DeleteMemory: string[] = [];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DeleteSpace: string[] = [];
	/** IAM actions required for the GetEvent API call. */
	static readonly opGetEvent: string[] = [];
	/** IAM actions required for the GetMemory API call. */
	static readonly opGetMemory: string[] = [];
	/** IAM actions required for the GetSpace API call. */
	static readonly opGetSpace: string[] = [];
	/** IAM actions required for the ListEvents API call. */
	static readonly ListEvents: string[] = [];
	/** IAM actions required for the ListMemories API call. */
	static readonly ListMemories: string[] = [];
	/** IAM actions required for the ListSpaces API call. */
	static readonly ListSpaces: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the SearchEvents API call. */
	static readonly SearchEvents: string[] = [];
	/** IAM actions required for the SearchMemories API call. */
	static readonly SearchMemories: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdateMemory API call. */
	static readonly UpdateMemory: string[] = [];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UpdateSpace: string[] = [];
}

/**
 * Condition key constants and builders for osm.
 */
export class OsmConditions {
	/** Condition keys applicable to the BatchGetEvent action. */
	static readonly BatchGetEventConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the CreateEvent action. */
	static readonly CreateEventConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the CreateMemory action. */
	static readonly CreateMemoryConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CreateSpaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEvent action. */
	static readonly DeleteEventConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the DeleteMemory action. */
	static readonly DeleteMemoryConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];
	/** Condition keys applicable to the GetEvent action. */
	static readonly actionGetEventConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the GetMemory action. */
	static readonly actionGetMemoryConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];
	/** Condition keys applicable to the ListEvents action. */
	static readonly ListEventsConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the ListMemories action. */
	static readonly ListMemoriesConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];
	/** Condition keys applicable to the SearchEvents action. */
	static readonly SearchEventsConditionKeys: string[] = [
		"osm:actorId",
		"osm:sessionId",
	];
	/** Condition keys applicable to the SearchMemories action. */
	static readonly SearchMemoriesConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateMemory action. */
	static readonly UpdateMemoryConditionKeys: string[] = [
		"osm:actorId",
		"osm:strategyName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: osm:actorId (ArrayOfString) */
	static readonly ACTOR_ID = "osm:actorId";
	/** Condition key: osm:sessionId (ArrayOfString) */
	static readonly SESSION_ID = "osm:sessionId";
	/** Condition key: osm:strategyName (ArrayOfString) */
	static readonly STRATEGY_NAME = "osm:strategyName";

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
	 * Generates a condition block for `osm:actorId`.
	 */
	static actorId(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "osm:actorId": values } };
	}

	/**
	 * Generates a condition block for `osm:sessionId`.
	 */
	static sessionId(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "osm:sessionId": values } };
	}

	/**
	 * Generates a condition block for `osm:strategyName`.
	 */
	static strategyName(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "osm:strategyName": values } };
	}
}
