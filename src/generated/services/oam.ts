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
	static readonly CreateLink = "oam:CreateLink";
	/** [Write] oam:CreateSink */
	static readonly CreateSink = "oam:CreateSink";
	/** [Write] oam:DeleteLink */
	static readonly DeleteLink = "oam:DeleteLink";
	/** [Write] oam:DeleteSink */
	static readonly DeleteSink = "oam:DeleteSink";
	/** [Read] oam:GetLink */
	static readonly actionGetLink = "oam:GetLink";
	/** [Read] oam:GetSink */
	static readonly actionGetSink = "oam:GetSink";
	/** [Read] oam:GetSinkPolicy */
	static readonly actionGetSinkPolicy = "oam:GetSinkPolicy";
	/** [Read] oam:ListAttachedLinks */
	static readonly ListAttachedLinks = "oam:ListAttachedLinks";
	/** [Read] oam:ListLinks */
	static readonly ListLinks = "oam:ListLinks";
	/** [Read] oam:ListSinks */
	static readonly ListSinks = "oam:ListSinks";
	/** [Read] oam:ListTagsForResource */
	static readonly ListTagsForResource = "oam:ListTagsForResource";
	/** [Write] oam:PutSinkPolicy */
	static readonly PutSinkPolicy = "oam:PutSinkPolicy";
	/** [Tagging] oam:TagResource */
	static readonly TagResource = "oam:TagResource";
	/** [Tagging] oam:UntagResource */
	static readonly UntagResource = "oam:UntagResource";
	/** [Write] oam:UpdateLink */
	static readonly UpdateLink = "oam:UpdateLink";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OamActions.actionGetLink,
		OamActions.actionGetSink,
		OamActions.actionGetSinkPolicy,
		OamActions.ListAttachedLinks,
		OamActions.ListLinks,
		OamActions.ListSinks,
		OamActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OamActions.CreateLink,
		OamActions.CreateSink,
		OamActions.DeleteLink,
		OamActions.DeleteSink,
		OamActions.PutSinkPolicy,
		OamActions.UpdateLink,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OamActions.TagResource,
		OamActions.UntagResource,
	];
}

/**
 * Properties for building a Link ARN.
 */
export interface OamLinkArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Link ARN.
 */
export interface OamLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Sink ARN.
 */
export interface OamSinkArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Sink ARN.
 */
export interface OamSinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const LinkArnRegex =
	/^arn:(?<partition>[^:]+):oam:(?<region>[^:]*):(?<account>[^:]*):link\/(?<resourceId>[^:/?]+)$/;
const SinkArnRegex =
	/^arn:(?<partition>[^:]+):oam:(?<region>[^:]*):(?<account>[^:]*):sink\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for oam resources.
 */
export class OamResources {
	/**
	 * Builds an ARN for the Link resource.
	 */
	static link(props: OamLinkArnProps): string {
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
	static parseLinkArn(arn: string): OamLinkArnComponents {
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
	static sink(props: OamSinkArnProps): string {
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
	static parseSinkArn(arn: string): OamSinkArnComponents {
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
	static readonly CreateLink: string[] = [];
	/** IAM actions required for the CreateSink API call. */
	static readonly CreateSink: string[] = [];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DeleteLink: string[] = [];
	/** IAM actions required for the DeleteSink API call. */
	static readonly DeleteSink: string[] = [];
	/** IAM actions required for the GetLink API call. */
	static readonly opGetLink: string[] = [];
	/** IAM actions required for the GetSink API call. */
	static readonly opGetSink: string[] = [];
	/** IAM actions required for the GetSinkPolicy API call. */
	static readonly opGetSinkPolicy: string[] = [];
	/** IAM actions required for the ListAttachedLinks API call. */
	static readonly ListAttachedLinks: string[] = [];
	/** IAM actions required for the ListLinks API call. */
	static readonly ListLinks: string[] = [];
	/** IAM actions required for the ListSinks API call. */
	static readonly ListSinks: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the PutSinkPolicy API call. */
	static readonly PutSinkPolicy: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UpdateLink: string[] = [];
}

/**
 * Condition key constants and builders for oam.
 */
export class OamConditions {
	/** Condition keys applicable to the CreateLink action. */
	static readonly CreateLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"oam:ResourceTypes",
	];
	/** Condition keys applicable to the CreateSink action. */
	static readonly CreateSinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteLink action. */
	static readonly DeleteLinkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSink action. */
	static readonly DeleteSinkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLink action. */
	static readonly actionGetLinkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSink action. */
	static readonly actionGetSinkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSinkPolicy action. */
	static readonly actionGetSinkPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAttachedLinks action. */
	static readonly ListAttachedLinksConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutSinkPolicy action. */
	static readonly PutSinkPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLink action. */
	static readonly UpdateLinkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"oam:ResourceTypes",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
