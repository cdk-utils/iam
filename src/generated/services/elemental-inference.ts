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
	static readonly ASSOCIATE_FEED = "elemental-inference:AssociateFeed";
	/** [Write] elemental-inference:CreateDictionary */
	static readonly CREATE_DICTIONARY = "elemental-inference:CreateDictionary";
	/** [Write] elemental-inference:CreateFeed */
	static readonly CREATE_FEED = "elemental-inference:CreateFeed";
	/** [Write] elemental-inference:DeleteDictionary */
	static readonly DELETE_DICTIONARY = "elemental-inference:DeleteDictionary";
	/** [Write] elemental-inference:DeleteFeed */
	static readonly DELETE_FEED = "elemental-inference:DeleteFeed";
	/** [Write] elemental-inference:DisassociateFeed */
	static readonly DISASSOCIATE_FEED = "elemental-inference:DisassociateFeed";
	/** [Read] elemental-inference:ExportDictionaryEntries */
	static readonly EXPORT_DICTIONARY_ENTRIES =
		"elemental-inference:ExportDictionaryEntries";
	/** [Read] elemental-inference:GetDictionary */
	static readonly GET_DICTIONARY = "elemental-inference:GetDictionary";
	/** [Read] elemental-inference:GetFeed */
	static readonly GET_FEED = "elemental-inference:GetFeed";
	/** [Read] elemental-inference:GetMetadata */
	static readonly GET_METADATA = "elemental-inference:GetMetadata";
	/** [List] elemental-inference:ListDictionaries */
	static readonly LIST_DICTIONARIES = "elemental-inference:ListDictionaries";
	/** [List] elemental-inference:ListFeeds */
	static readonly LIST_FEEDS = "elemental-inference:ListFeeds";
	/** [Read] elemental-inference:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"elemental-inference:ListTagsForResource";
	/** [Write] elemental-inference:PutMedia */
	static readonly PUT_MEDIA = "elemental-inference:PutMedia";
	/** [Tagging] elemental-inference:TagResource */
	static readonly TAG_RESOURCE = "elemental-inference:TagResource";
	/** [Tagging] elemental-inference:UntagResource */
	static readonly UNTAG_RESOURCE = "elemental-inference:UntagResource";
	/** [Write] elemental-inference:UpdateDictionary */
	static readonly UPDATE_DICTIONARY = "elemental-inference:UpdateDictionary";
	/** [Write] elemental-inference:UpdateFeed */
	static readonly UPDATE_FEED = "elemental-inference:UpdateFeed";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElementalInferenceActions.EXPORT_DICTIONARY_ENTRIES,
		ElementalInferenceActions.GET_DICTIONARY,
		ElementalInferenceActions.GET_FEED,
		ElementalInferenceActions.GET_METADATA,
		ElementalInferenceActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElementalInferenceActions.ASSOCIATE_FEED,
		ElementalInferenceActions.CREATE_DICTIONARY,
		ElementalInferenceActions.CREATE_FEED,
		ElementalInferenceActions.DELETE_DICTIONARY,
		ElementalInferenceActions.DELETE_FEED,
		ElementalInferenceActions.DISASSOCIATE_FEED,
		ElementalInferenceActions.PUT_MEDIA,
		ElementalInferenceActions.UPDATE_DICTIONARY,
		ElementalInferenceActions.UPDATE_FEED,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElementalInferenceActions.LIST_DICTIONARIES,
		ElementalInferenceActions.LIST_FEEDS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElementalInferenceActions.TAG_RESOURCE,
		ElementalInferenceActions.UNTAG_RESOURCE,
	];
}

const DictionaryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elemental-inference:(?<region>[^:]*):(?<account>[^:]*):dictionary/(?<id>[^:/?]+)$",
);
const FeedArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elemental-inference:(?<region>[^:]*):(?<account>[^:]*):feed/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elemental-inference resources.
 */
export class ElementalInferenceResources {
	/**
	 * Builds an ARN for the dictionary resource.
	 */
	static dictionary(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDictionaryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static feed(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFeedArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly ASSOCIATE_FEED: string[] = [
		"elemental-inference:AssociateFeed",
	];
	/** IAM actions required for the CreateDictionary API call. */
	static readonly CREATE_DICTIONARY: string[] = [
		"elemental-inference:CreateDictionary",
		"elemental-inference:TagResource",
	];
	/** IAM actions required for the CreateFeed API call. */
	static readonly CREATE_FEED: string[] = [
		"elemental-inference:CreateFeed",
		"iam:PassRole",
		"elemental-inference:TagResource",
	];
	/** IAM actions required for the DeleteDictionary API call. */
	static readonly DELETE_DICTIONARY: string[] = [
		"elemental-inference:DeleteDictionary",
	];
	/** IAM actions required for the DeleteFeed API call. */
	static readonly DELETE_FEED: string[] = ["elemental-inference:DeleteFeed"];
	/** IAM actions required for the DisassociateFeed API call. */
	static readonly DISASSOCIATE_FEED: string[] = [
		"elemental-inference:DisassociateFeed",
	];
	/** IAM actions required for the ExportDictionaryEntries API call. */
	static readonly EXPORT_DICTIONARY_ENTRIES: string[] = [
		"elemental-inference:ExportDictionaryEntries",
	];
	/** IAM actions required for the GetDictionary API call. */
	static readonly GET_DICTIONARY: string[] = [
		"elemental-inference:GetDictionary",
	];
	/** IAM actions required for the GetFeed API call. */
	static readonly GET_FEED: string[] = ["elemental-inference:GetFeed"];
	/** IAM actions required for the ListDictionaries API call. */
	static readonly LIST_DICTIONARIES: string[] = [
		"elemental-inference:ListDictionaries",
	];
	/** IAM actions required for the ListFeeds API call. */
	static readonly LIST_FEEDS: string[] = ["elemental-inference:ListFeeds"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"elemental-inference:ListTagsForResource",
	];
	/** IAM actions required for the SearchFixtures API call. */
	static readonly SEARCH_FIXTURES: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["elemental-inference:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"elemental-inference:UntagResource",
	];
	/** IAM actions required for the UpdateDictionary API call. */
	static readonly UPDATE_DICTIONARY: string[] = [
		"elemental-inference:UpdateDictionary",
	];
	/** IAM actions required for the UpdateFeed API call. */
	static readonly UPDATE_FEED: string[] = [
		"iam:PassRole",
		"elemental-inference:UpdateFeed",
	];
}

/**
 * Condition key constants and builders for elemental-inference.
 */
export class ElementalInferenceConditions {
	/** Condition keys applicable to the CreateDictionary action. */
	static readonly CREATE_DICTIONARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeed action. */
	static readonly CREATE_FEED_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
