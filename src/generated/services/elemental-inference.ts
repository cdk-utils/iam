// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elemental-inference.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elemental-inference service.
 */
export class ElementalInferenceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elemental-inference";

	/** [Write] elemental-inference:AssociateFeed */
	static readonly AssociateFeed = "elemental-inference:AssociateFeed";
	/** [Write] elemental-inference:CreateDictionary */
	static readonly CreateDictionary = "elemental-inference:CreateDictionary";
	/** [Write] elemental-inference:CreateFeed */
	static readonly CreateFeed = "elemental-inference:CreateFeed";
	/** [Write] elemental-inference:DeleteDictionary */
	static readonly DeleteDictionary = "elemental-inference:DeleteDictionary";
	/** [Write] elemental-inference:DeleteFeed */
	static readonly DeleteFeed = "elemental-inference:DeleteFeed";
	/** [Write] elemental-inference:DisassociateFeed */
	static readonly DisassociateFeed = "elemental-inference:DisassociateFeed";
	/** [Read] elemental-inference:ExportDictionaryEntries */
	static readonly ExportDictionaryEntries =
		"elemental-inference:ExportDictionaryEntries";
	/** [Read] elemental-inference:GetDictionary */
	static readonly actionGetDictionary = "elemental-inference:GetDictionary";
	/** [Read] elemental-inference:GetFeed */
	static readonly actionGetFeed = "elemental-inference:GetFeed";
	/** [Read] elemental-inference:GetMetadata */
	static readonly actionGetMetadata = "elemental-inference:GetMetadata";
	/** [List] elemental-inference:ListDictionaries */
	static readonly ListDictionaries = "elemental-inference:ListDictionaries";
	/** [List] elemental-inference:ListFeeds */
	static readonly ListFeeds = "elemental-inference:ListFeeds";
	/** [Read] elemental-inference:ListTagsForResource */
	static readonly ListTagsForResource =
		"elemental-inference:ListTagsForResource";
	/** [Write] elemental-inference:PutMedia */
	static readonly PutMedia = "elemental-inference:PutMedia";
	/** [Tagging] elemental-inference:TagResource */
	static readonly TagResource = "elemental-inference:TagResource";
	/** [Tagging] elemental-inference:UntagResource */
	static readonly UntagResource = "elemental-inference:UntagResource";
	/** [Write] elemental-inference:UpdateDictionary */
	static readonly UpdateDictionary = "elemental-inference:UpdateDictionary";
	/** [Write] elemental-inference:UpdateFeed */
	static readonly UpdateFeed = "elemental-inference:UpdateFeed";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElementalInferenceActions.ExportDictionaryEntries,
		ElementalInferenceActions.actionGetDictionary,
		ElementalInferenceActions.actionGetFeed,
		ElementalInferenceActions.actionGetMetadata,
		ElementalInferenceActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElementalInferenceActions.AssociateFeed,
		ElementalInferenceActions.CreateDictionary,
		ElementalInferenceActions.CreateFeed,
		ElementalInferenceActions.DeleteDictionary,
		ElementalInferenceActions.DeleteFeed,
		ElementalInferenceActions.DisassociateFeed,
		ElementalInferenceActions.PutMedia,
		ElementalInferenceActions.UpdateDictionary,
		ElementalInferenceActions.UpdateFeed,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElementalInferenceActions.ListDictionaries,
		ElementalInferenceActions.ListFeeds,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElementalInferenceActions.TagResource,
		ElementalInferenceActions.UntagResource,
	];
}

/**
 * Properties for building a dictionary ARN.
 */
export interface ElementalInferenceDictionaryArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dictionary ARN.
 */
export interface ElementalInferenceDictionaryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a feed ARN.
 */
export interface ElementalInferenceFeedArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a feed ARN.
 */
export interface ElementalInferenceFeedArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const DictionaryArnRegex =
	/^arn:(?<partition>[^:]+):elemental-inference:(?<region>[^:]*):(?<account>[^:]*):dictionary\/(?<id>[^:/?]+)$/;
const FeedArnRegex =
	/^arn:(?<partition>[^:]+):elemental-inference:(?<region>[^:]*):(?<account>[^:]*):feed\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elemental-inference resources.
 */
export class ElementalInferenceResources {
	/**
	 * Builds an ARN for the dictionary resource.
	 */
	static dictionary(props: ElementalInferenceDictionaryArnProps): string {
		return `arn:${props.partition ?? "aws"}:elemental-inference:${props.region ?? "*"}:${props.account ?? "*"}:dictionary/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dictionary resource.
	 */
	static isValidDictionaryArn(arn: string): boolean {
		return DictionaryArnRegex.test(arn);
	}

	/**
	 * Parses a dictionary ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDictionaryArn(
		arn: string,
	): ElementalInferenceDictionaryArnComponents {
		const match = DictionaryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dictionary ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the feed resource.
	 */
	static feed(props: ElementalInferenceFeedArnProps): string {
		return `arn:${props.partition ?? "aws"}:elemental-inference:${props.region ?? "*"}:${props.account ?? "*"}:feed/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the feed resource.
	 */
	static isValidFeedArn(arn: string): boolean {
		return FeedArnRegex.test(arn);
	}

	/**
	 * Parses a feed ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFeedArn(arn: string): ElementalInferenceFeedArnComponents {
		const match = FeedArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid feed ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for elemental-inference.
 */
export class ElementalInferenceOperations {
	/** IAM actions required for the AssociateFeed API call. */
	static readonly AssociateFeed: string[] = [
		"elemental-inference:AssociateFeed",
	];
	/** IAM actions required for the CreateDictionary API call. */
	static readonly CreateDictionary: string[] = [
		"elemental-inference:CreateDictionary",
		"elemental-inference:TagResource",
	];
	/** IAM actions required for the CreateFeed API call. */
	static readonly CreateFeed: string[] = [
		"elemental-inference:CreateFeed",
		"iam:PassRole",
		"elemental-inference:TagResource",
	];
	/** IAM actions required for the DeleteDictionary API call. */
	static readonly DeleteDictionary: string[] = [
		"elemental-inference:DeleteDictionary",
	];
	/** IAM actions required for the DeleteFeed API call. */
	static readonly DeleteFeed: string[] = ["elemental-inference:DeleteFeed"];
	/** IAM actions required for the DisassociateFeed API call. */
	static readonly DisassociateFeed: string[] = [
		"elemental-inference:DisassociateFeed",
	];
	/** IAM actions required for the ExportDictionaryEntries API call. */
	static readonly ExportDictionaryEntries: string[] = [
		"elemental-inference:ExportDictionaryEntries",
	];
	/** IAM actions required for the GetDictionary API call. */
	static readonly opGetDictionary: string[] = [
		"elemental-inference:GetDictionary",
	];
	/** IAM actions required for the GetFeed API call. */
	static readonly opGetFeed: string[] = ["elemental-inference:GetFeed"];
	/** IAM actions required for the GetFixture API call. */
	static readonly opGetFixture: string[] = [];
	/** IAM actions required for the ListDictionaries API call. */
	static readonly ListDictionaries: string[] = [
		"elemental-inference:ListDictionaries",
	];
	/** IAM actions required for the ListFeeds API call. */
	static readonly ListFeeds: string[] = ["elemental-inference:ListFeeds"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"elemental-inference:ListTagsForResource",
	];
	/** IAM actions required for the SearchFixtures API call. */
	static readonly SearchFixtures: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["elemental-inference:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"elemental-inference:UntagResource",
	];
	/** IAM actions required for the UpdateDictionary API call. */
	static readonly UpdateDictionary: string[] = [
		"elemental-inference:UpdateDictionary",
	];
	/** IAM actions required for the UpdateFeed API call. */
	static readonly UpdateFeed: string[] = [
		"iam:PassRole",
		"elemental-inference:UpdateFeed",
	];
}

/**
 * Condition key constants and builders for elemental-inference.
 */
export class ElementalInferenceConditions {
	/** Condition keys applicable to the CreateDictionary action. */
	static readonly CreateDictionaryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeed action. */
	static readonly CreateFeedConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
