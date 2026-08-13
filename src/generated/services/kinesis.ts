// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kinesis.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kinesis service.
 */
export class KinesisActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kinesis";

	/** [Tagging] kinesis:AddTagsToStream */
	static readonly ADD_TAGS_TO_STREAM = "kinesis:AddTagsToStream";
	/** [Write] kinesis:CreateStream */
	static readonly CREATE_STREAM = "kinesis:CreateStream";
	/** [Write] kinesis:DecreaseStreamRetentionPeriod */
	static readonly DECREASE_STREAM_RETENTION_PERIOD =
		"kinesis:DecreaseStreamRetentionPeriod";
	/** [Write] kinesis:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "kinesis:DeleteResourcePolicy";
	/** [Write] kinesis:DeleteStream */
	static readonly DELETE_STREAM = "kinesis:DeleteStream";
	/** [Write] kinesis:DeregisterStreamConsumer */
	static readonly DEREGISTER_STREAM_CONSUMER =
		"kinesis:DeregisterStreamConsumer";
	/** [Read] kinesis:DescribeAccountSettings */
	static readonly DESCRIBE_ACCOUNT_SETTINGS = "kinesis:DescribeAccountSettings";
	/** [Read] kinesis:DescribeLimits */
	static readonly DESCRIBE_LIMITS = "kinesis:DescribeLimits";
	/** [Read] kinesis:DescribeStream */
	static readonly DESCRIBE_STREAM = "kinesis:DescribeStream";
	/** [Read] kinesis:DescribeStreamConsumer */
	static readonly DESCRIBE_STREAM_CONSUMER = "kinesis:DescribeStreamConsumer";
	/** [Read] kinesis:DescribeStreamSummary */
	static readonly DESCRIBE_STREAM_SUMMARY = "kinesis:DescribeStreamSummary";
	/** [Write] kinesis:DisableEnhancedMonitoring */
	static readonly DISABLE_ENHANCED_MONITORING =
		"kinesis:DisableEnhancedMonitoring";
	/** [Write] kinesis:EnableEnhancedMonitoring */
	static readonly ENABLE_ENHANCED_MONITORING =
		"kinesis:EnableEnhancedMonitoring";
	/** [Read] kinesis:GetRecords */
	static readonly GET_RECORDS = "kinesis:GetRecords";
	/** [Read] kinesis:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "kinesis:GetResourcePolicy";
	/** [Read] kinesis:GetShardIterator */
	static readonly GET_SHARD_ITERATOR = "kinesis:GetShardIterator";
	/** [Write] kinesis:IncreaseStreamRetentionPeriod */
	static readonly INCREASE_STREAM_RETENTION_PERIOD =
		"kinesis:IncreaseStreamRetentionPeriod";
	/** [Write] kinesis:InjectApiError */
	static readonly INJECT_API_ERROR = "kinesis:InjectApiError";
	/** [List] kinesis:ListShards */
	static readonly LIST_SHARDS = "kinesis:ListShards";
	/** [List] kinesis:ListStreamConsumers */
	static readonly LIST_STREAM_CONSUMERS = "kinesis:ListStreamConsumers";
	/** [List] kinesis:ListStreams */
	static readonly LIST_STREAMS = "kinesis:ListStreams";
	/** [Read] kinesis:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kinesis:ListTagsForResource";
	/** [Read] kinesis:ListTagsForStream */
	static readonly LIST_TAGS_FOR_STREAM = "kinesis:ListTagsForStream";
	/** [Write] kinesis:MergeShards */
	static readonly MERGE_SHARDS = "kinesis:MergeShards";
	/** [Write] kinesis:PutRecord */
	static readonly PUT_RECORD = "kinesis:PutRecord";
	/** [Write] kinesis:PutRecords */
	static readonly PUT_RECORDS = "kinesis:PutRecords";
	/** [Write] kinesis:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "kinesis:PutResourcePolicy";
	/** [Write] kinesis:RegisterStreamConsumer */
	static readonly REGISTER_STREAM_CONSUMER = "kinesis:RegisterStreamConsumer";
	/** [Tagging] kinesis:RemoveTagsFromStream */
	static readonly REMOVE_TAGS_FROM_STREAM = "kinesis:RemoveTagsFromStream";
	/** [Write] kinesis:SplitShard */
	static readonly SPLIT_SHARD = "kinesis:SplitShard";
	/** [Write] kinesis:StartStreamEncryption */
	static readonly START_STREAM_ENCRYPTION = "kinesis:StartStreamEncryption";
	/** [Write] kinesis:StopStreamEncryption */
	static readonly STOP_STREAM_ENCRYPTION = "kinesis:StopStreamEncryption";
	/** [Read] kinesis:SubscribeToShard */
	static readonly SUBSCRIBE_TO_SHARD = "kinesis:SubscribeToShard";
	/** [Tagging] kinesis:TagResource */
	static readonly TAG_RESOURCE = "kinesis:TagResource";
	/** [Tagging] kinesis:UntagResource */
	static readonly UNTAG_RESOURCE = "kinesis:UntagResource";
	/** [Write] kinesis:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "kinesis:UpdateAccountSettings";
	/** [Write] kinesis:UpdateMaxRecordSize */
	static readonly UPDATE_MAX_RECORD_SIZE = "kinesis:UpdateMaxRecordSize";
	/** [Write] kinesis:UpdateShardCount */
	static readonly UPDATE_SHARD_COUNT = "kinesis:UpdateShardCount";
	/** [Write] kinesis:UpdateStreamMode */
	static readonly UPDATE_STREAM_MODE = "kinesis:UpdateStreamMode";
	/** [Write] kinesis:UpdateStreamWarmThroughput */
	static readonly UPDATE_STREAM_WARM_THROUGHPUT =
		"kinesis:UpdateStreamWarmThroughput";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KinesisActions.DESCRIBE_ACCOUNT_SETTINGS,
		KinesisActions.DESCRIBE_LIMITS,
		KinesisActions.DESCRIBE_STREAM,
		KinesisActions.DESCRIBE_STREAM_CONSUMER,
		KinesisActions.DESCRIBE_STREAM_SUMMARY,
		KinesisActions.GET_RECORDS,
		KinesisActions.GET_RESOURCE_POLICY,
		KinesisActions.GET_SHARD_ITERATOR,
		KinesisActions.LIST_TAGS_FOR_RESOURCE,
		KinesisActions.LIST_TAGS_FOR_STREAM,
		KinesisActions.SUBSCRIBE_TO_SHARD,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KinesisActions.CREATE_STREAM,
		KinesisActions.DECREASE_STREAM_RETENTION_PERIOD,
		KinesisActions.DELETE_RESOURCE_POLICY,
		KinesisActions.DELETE_STREAM,
		KinesisActions.DEREGISTER_STREAM_CONSUMER,
		KinesisActions.DISABLE_ENHANCED_MONITORING,
		KinesisActions.ENABLE_ENHANCED_MONITORING,
		KinesisActions.INCREASE_STREAM_RETENTION_PERIOD,
		KinesisActions.INJECT_API_ERROR,
		KinesisActions.MERGE_SHARDS,
		KinesisActions.PUT_RECORD,
		KinesisActions.PUT_RECORDS,
		KinesisActions.PUT_RESOURCE_POLICY,
		KinesisActions.REGISTER_STREAM_CONSUMER,
		KinesisActions.SPLIT_SHARD,
		KinesisActions.START_STREAM_ENCRYPTION,
		KinesisActions.STOP_STREAM_ENCRYPTION,
		KinesisActions.UPDATE_ACCOUNT_SETTINGS,
		KinesisActions.UPDATE_MAX_RECORD_SIZE,
		KinesisActions.UPDATE_SHARD_COUNT,
		KinesisActions.UPDATE_STREAM_MODE,
		KinesisActions.UPDATE_STREAM_WARM_THROUGHPUT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KinesisActions.LIST_SHARDS,
		KinesisActions.LIST_STREAM_CONSUMERS,
		KinesisActions.LIST_STREAMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KinesisActions.ADD_TAGS_TO_STREAM,
		KinesisActions.REMOVE_TAGS_FROM_STREAM,
		KinesisActions.TAG_RESOURCE,
		KinesisActions.UNTAG_RESOURCE,
	];
}

const ConsumerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kinesis:(?<region>[^:]*):(?<account>[^:]*):(?<streamType>[^:/?]+)/(?<streamName>[^:/?]+)/consumer/(?<consumerName>[^:/?]+):(?<consumerCreationTimpstamp>[^:/?]+)$",
);
const KMSKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key/(?<keyId>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kinesis:(?<region>[^:]*):(?<account>[^:]*):stream/(?<streamName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kinesis resources.
 */
export class KinesisResources {
	/**
	 * Builds an ARN for the consumer resource.
	 */
	static consumer(props: {
		/** The StreamType component of the ARN. */
		readonly streamType: string;
		/** The StreamName component of the ARN. */
		readonly streamName: string;
		/** The ConsumerName component of the ARN. */
		readonly consumerName: string;
		/** The ConsumerCreationTimpstamp component of the ARN. */
		readonly consumerCreationTimpstamp: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kinesis:${props.region ?? "*"}:${props.account ?? "*"}:${props.streamType}/${props.streamName}/consumer/${props.consumerName}:${props.consumerCreationTimpstamp}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the consumer resource.
	 */
	static isValidConsumerArn(arn: string): boolean {
		return ConsumerArnRegex.test(arn);
	}

	/**
	 * Parses a consumer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConsumerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamType: string;
		streamName: string;
		consumerName: string;
		consumerCreationTimpstamp: string;
	} {
		const match = ConsumerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid consumer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamType: match.groups!.streamType,
			streamName: match.groups!.streamName,
			consumerName: match.groups!.consumerName,
			consumerCreationTimpstamp: match.groups!.consumerCreationTimpstamp,
		};
	}

	/**
	 * Builds an ARN for the kmsKey resource.
	 */
	static kmsKey(props: {
		/** The KeyId component of the ARN. */
		readonly keyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kms:${props.region ?? "*"}:${props.account ?? "*"}:key/${props.keyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kmsKey resource.
	 */
	static isValidKMSKeyArn(arn: string): boolean {
		return KMSKeyArnRegex.test(arn);
	}

	/**
	 * Parses a kmsKey ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKMSKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyId: string;
	} {
		const match = KMSKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kmsKey ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyId: match.groups!.keyId,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: {
		/** The StreamName component of the ARN. */
		readonly streamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kinesis:${props.region ?? "*"}:${props.account ?? "*"}:stream/${props.streamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamName: string;
	} {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamName: match.groups!.streamName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kinesis.
 */
export class KinesisOperations {
	/** IAM actions required for the AddTagsToStream API call. */
	static readonly ADD_TAGS_TO_STREAM: string[] = ["kinesis:AddTagsToStream"];
	/** IAM actions required for the CreateStream API call. */
	static readonly CREATE_STREAM: string[] = [
		"kinesis:AddTagsToStream",
		"kinesis:CreateStream",
	];
	/** IAM actions required for the DecreaseStreamRetentionPeriod API call. */
	static readonly DECREASE_STREAM_RETENTION_PERIOD: string[] = [
		"kinesis:DecreaseStreamRetentionPeriod",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"kinesis:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DELETE_STREAM: string[] = ["kinesis:DeleteStream"];
	/** IAM actions required for the DeregisterStreamConsumer API call. */
	static readonly DEREGISTER_STREAM_CONSUMER: string[] = [
		"kinesis:DeregisterStreamConsumer",
	];
	/** IAM actions required for the DescribeAccountSettings API call. */
	static readonly DESCRIBE_ACCOUNT_SETTINGS: string[] = [
		"kinesis:DescribeAccountSettings",
	];
	/** IAM actions required for the DescribeLimits API call. */
	static readonly DESCRIBE_LIMITS: string[] = ["kinesis:DescribeLimits"];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DESCRIBE_STREAM: string[] = ["kinesis:DescribeStream"];
	/** IAM actions required for the DescribeStreamConsumer API call. */
	static readonly DESCRIBE_STREAM_CONSUMER: string[] = [
		"kinesis:DescribeStreamConsumer",
	];
	/** IAM actions required for the DescribeStreamSummary API call. */
	static readonly DESCRIBE_STREAM_SUMMARY: string[] = [
		"kinesis:DescribeStreamSummary",
	];
	/** IAM actions required for the DisableEnhancedMonitoring API call. */
	static readonly DISABLE_ENHANCED_MONITORING: string[] = [
		"kinesis:DisableEnhancedMonitoring",
	];
	/** IAM actions required for the EnableEnhancedMonitoring API call. */
	static readonly ENABLE_ENHANCED_MONITORING: string[] = [
		"kinesis:EnableEnhancedMonitoring",
	];
	/** IAM actions required for the GetRecords API call. */
	static readonly GET_RECORDS: string[] = ["kinesis:GetRecords"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["kinesis:GetResourcePolicy"];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly GET_SHARD_ITERATOR: string[] = ["kinesis:GetShardIterator"];
	/** IAM actions required for the IncreaseStreamRetentionPeriod API call. */
	static readonly INCREASE_STREAM_RETENTION_PERIOD: string[] = [
		"kinesis:IncreaseStreamRetentionPeriod",
	];
	/** IAM actions required for the ListShards API call. */
	static readonly LIST_SHARDS: string[] = ["kinesis:ListShards"];
	/** IAM actions required for the ListStreamConsumers API call. */
	static readonly LIST_STREAM_CONSUMERS: string[] = [
		"kinesis:ListStreamConsumers",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["kinesis:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kinesis:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForStream API call. */
	static readonly LIST_TAGS_FOR_STREAM: string[] = [
		"kinesis:ListTagsForStream",
	];
	/** IAM actions required for the MergeShards API call. */
	static readonly MERGE_SHARDS: string[] = ["kinesis:MergeShards"];
	/** IAM actions required for the PutRecord API call. */
	static readonly PUT_RECORD: string[] = ["kinesis:PutRecord"];
	/** IAM actions required for the PutRecords API call. */
	static readonly PUT_RECORDS: string[] = ["kinesis:PutRecords"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["kinesis:PutResourcePolicy"];
	/** IAM actions required for the RegisterStreamConsumer API call. */
	static readonly REGISTER_STREAM_CONSUMER: string[] = [
		"kinesis:RegisterStreamConsumer",
		"kinesis:TagResource",
	];
	/** IAM actions required for the RemoveTagsFromStream API call. */
	static readonly REMOVE_TAGS_FROM_STREAM: string[] = [
		"kinesis:RemoveTagsFromStream",
	];
	/** IAM actions required for the SplitShard API call. */
	static readonly SPLIT_SHARD: string[] = ["kinesis:SplitShard"];
	/** IAM actions required for the StartStreamEncryption API call. */
	static readonly START_STREAM_ENCRYPTION: string[] = [
		"kinesis:StartStreamEncryption",
	];
	/** IAM actions required for the StopStreamEncryption API call. */
	static readonly STOP_STREAM_ENCRYPTION: string[] = [
		"kinesis:StopStreamEncryption",
	];
	/** IAM actions required for the SubscribeToShard API call. */
	static readonly SUBSCRIBE_TO_SHARD: string[] = ["kinesis:SubscribeToShard"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kinesis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kinesis:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"kinesis:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateMaxRecordSize API call. */
	static readonly UPDATE_MAX_RECORD_SIZE: string[] = [
		"kinesis:UpdateMaxRecordSize",
	];
	/** IAM actions required for the UpdateShardCount API call. */
	static readonly UPDATE_SHARD_COUNT: string[] = ["kinesis:UpdateShardCount"];
	/** IAM actions required for the UpdateStreamMode API call. */
	static readonly UPDATE_STREAM_MODE: string[] = ["kinesis:UpdateStreamMode"];
	/** IAM actions required for the UpdateStreamWarmThroughput API call. */
	static readonly UPDATE_STREAM_WARM_THROUGHPUT: string[] = [
		"kinesis:UpdateStreamWarmThroughput",
	];
}

/**
 * Condition key constants and builders for kinesis.
 */
export class KinesisConditions {
	/** Condition keys applicable to the InjectApiError action. */
	static readonly INJECT_API_ERROR_CONDITION_KEYS: string[] = [
		"kinesis:FisActionId",
		"kinesis:FisInjectPercentage",
		"kinesis:FisTargetArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: kinesis:FisActionId (String) */
	static readonly FIS_ACTION_ID = "kinesis:FisActionId";
	/** Condition key: kinesis:FisInjectPercentage (Numeric) */
	static readonly FIS_INJECT_PERCENTAGE = "kinesis:FisInjectPercentage";
	/** Condition key: kinesis:FisTargetArns (ArrayOfARN) */
	static readonly FIS_TARGET_ARNS = "kinesis:FisTargetArns";

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
	 * Generates a condition block for `kinesis:FisActionId`.
	 */
	static fisActionId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kinesis:FisActionId": value } };
	}

	/**
	 * Generates a condition block for `kinesis:FisInjectPercentage`.
	 */
	static fisInjectPercentage(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "kinesis:FisInjectPercentage": value } };
	}

	/**
	 * Generates a condition block for `kinesis:FisTargetArns`.
	 */
	static fisTargetArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "kinesis:FisTargetArns": values } };
	}
}
