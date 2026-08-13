// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/oam.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the oam service.
 */
export class OamActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "oam";

	/** [Write] oam:CreateLink */
	static readonly CREATE_LINK = "oam:CreateLink";
	/** [Write] oam:CreateSink */
	static readonly CREATE_SINK = "oam:CreateSink";
	/** [Write] oam:DeleteLink */
	static readonly DELETE_LINK = "oam:DeleteLink";
	/** [Write] oam:DeleteSink */
	static readonly DELETE_SINK = "oam:DeleteSink";
	/** [Read] oam:GetLink */
	static readonly GET_LINK = "oam:GetLink";
	/** [Read] oam:GetSink */
	static readonly GET_SINK = "oam:GetSink";
	/** [Read] oam:GetSinkPolicy */
	static readonly GET_SINK_POLICY = "oam:GetSinkPolicy";
	/** [Read] oam:ListAttachedLinks */
	static readonly LIST_ATTACHED_LINKS = "oam:ListAttachedLinks";
	/** [Read] oam:ListLinks */
	static readonly LIST_LINKS = "oam:ListLinks";
	/** [Read] oam:ListSinks */
	static readonly LIST_SINKS = "oam:ListSinks";
	/** [Read] oam:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "oam:ListTagsForResource";
	/** [Write] oam:PutSinkPolicy */
	static readonly PUT_SINK_POLICY = "oam:PutSinkPolicy";
	/** [Tagging] oam:TagResource */
	static readonly TAG_RESOURCE = "oam:TagResource";
	/** [Tagging] oam:UntagResource */
	static readonly UNTAG_RESOURCE = "oam:UntagResource";
	/** [Write] oam:UpdateLink */
	static readonly UPDATE_LINK = "oam:UpdateLink";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OamActions.GET_LINK,
		OamActions.GET_SINK,
		OamActions.GET_SINK_POLICY,
		OamActions.LIST_ATTACHED_LINKS,
		OamActions.LIST_LINKS,
		OamActions.LIST_SINKS,
		OamActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OamActions.CREATE_LINK,
		OamActions.CREATE_SINK,
		OamActions.DELETE_LINK,
		OamActions.DELETE_SINK,
		OamActions.PUT_SINK_POLICY,
		OamActions.UPDATE_LINK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OamActions.TAG_RESOURCE,
		OamActions.UNTAG_RESOURCE,
	];
}

const LinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):oam:(?<region>[^:]*):(?<account>[^:]*):link/(?<resourceId>[^:/?]+)$",
);
const SinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):oam:(?<region>[^:]*):(?<account>[^:]*):sink/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for oam resources.
 */
export class OamResources {
	/**
	 * Builds an ARN for the Link resource.
	 */
	static link(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:oam:${props.region ?? "*"}:${props.account ?? "*"}:link/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Link resource.
	 */
	static isValidLinkArn(arn: string): boolean {
		return LinkArnRegex.test(arn);
	}

	/**
	 * Parses a Link ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = LinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Link ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Sink resource.
	 */
	static sink(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:oam:${props.region ?? "*"}:${props.account ?? "*"}:sink/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Sink resource.
	 */
	static isValidSinkArn(arn: string): boolean {
		return SinkArnRegex.test(arn);
	}

	/**
	 * Parses a Sink ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Sink ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for oam.
 */
export class OamOperations {
	/** IAM actions required for the CreateLink API call. */
	static readonly CREATE_LINK: string[] = [];
	/** IAM actions required for the CreateSink API call. */
	static readonly CREATE_SINK: string[] = [];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DELETE_LINK: string[] = [];
	/** IAM actions required for the DeleteSink API call. */
	static readonly DELETE_SINK: string[] = [];
	/** IAM actions required for the GetLink API call. */
	static readonly GET_LINK: string[] = [];
	/** IAM actions required for the GetSink API call. */
	static readonly GET_SINK: string[] = [];
	/** IAM actions required for the GetSinkPolicy API call. */
	static readonly GET_SINK_POLICY: string[] = [];
	/** IAM actions required for the ListAttachedLinks API call. */
	static readonly LIST_ATTACHED_LINKS: string[] = [];
	/** IAM actions required for the ListLinks API call. */
	static readonly LIST_LINKS: string[] = [];
	/** IAM actions required for the ListSinks API call. */
	static readonly LIST_SINKS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the PutSinkPolicy API call. */
	static readonly PUT_SINK_POLICY: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UPDATE_LINK: string[] = [];
}

/**
 * Condition key constants and builders for oam.
 */
export class OamConditions {
	/** Condition keys applicable to the CreateLink action. */
	static readonly CREATE_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"oam:ResourceTypes",
	];
	/** Condition keys applicable to the CreateSink action. */
	static readonly CREATE_SINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteLink action. */
	static readonly DELETE_LINK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSink action. */
	static readonly DELETE_SINK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLink action. */
	static readonly GET_LINK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSink action. */
	static readonly GET_SINK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSinkPolicy action. */
	static readonly GET_SINK_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAttachedLinks action. */
	static readonly LIST_ATTACHED_LINKS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutSinkPolicy action. */
	static readonly PUT_SINK_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLink action. */
	static readonly UPDATE_LINK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"oam:ResourceTypes",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: oam:ResourceTypes (ArrayOfString) */
	static readonly RESOURCE_TYPES = "oam:ResourceTypes";

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
	 * Generates a condition block for `oam:ResourceTypes`.
	 */
	static resourceTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "oam:ResourceTypes": values } };
	}
}
