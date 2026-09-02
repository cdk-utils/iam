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
	static readonly AddTagsToStream = "kinesis:AddTagsToStream";
	/** [Write] kinesis:AssociateStreamsWithChannel */
	static readonly AssociateStreamsWithChannel =
		"kinesis:AssociateStreamsWithChannel";
	/** [Tagging] kinesis:CreateChannel */
	static readonly CreateChannel = "kinesis:CreateChannel";
	/** [Write] kinesis:CreateStream */
	static readonly CreateStream = "kinesis:CreateStream";
	/** [Write] kinesis:DecreaseStreamRetentionPeriod */
	static readonly DecreaseStreamRetentionPeriod =
		"kinesis:DecreaseStreamRetentionPeriod";
	/** [Write] kinesis:DeleteChannel */
	static readonly DeleteChannel = "kinesis:DeleteChannel";
	/** [Write] kinesis:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "kinesis:DeleteResourcePolicy";
	/** [Write] kinesis:DeleteStream */
	static readonly DeleteStream = "kinesis:DeleteStream";
	/** [Write] kinesis:DeregisterStreamConsumer */
	static readonly DeregisterStreamConsumer = "kinesis:DeregisterStreamConsumer";
	/** [Read] kinesis:DescribeAccountSettings */
	static readonly DescribeAccountSettings = "kinesis:DescribeAccountSettings";
	/** [Read] kinesis:DescribeChannel */
	static readonly DescribeChannel = "kinesis:DescribeChannel";
	/** [Read] kinesis:DescribeLimits */
	static readonly DescribeLimits = "kinesis:DescribeLimits";
	/** [Read] kinesis:DescribeStream */
	static readonly DescribeStream = "kinesis:DescribeStream";
	/** [Read] kinesis:DescribeStreamConsumer */
	static readonly DescribeStreamConsumer = "kinesis:DescribeStreamConsumer";
	/** [Read] kinesis:DescribeStreamSummary */
	static readonly DescribeStreamSummary = "kinesis:DescribeStreamSummary";
	/** [Write] kinesis:DisableEnhancedMonitoring */
	static readonly DisableEnhancedMonitoring =
		"kinesis:DisableEnhancedMonitoring";
	/** [Write] kinesis:EnableEnhancedMonitoring */
	static readonly EnableEnhancedMonitoring = "kinesis:EnableEnhancedMonitoring";
	/** [Read] kinesis:GetRecords */
	static readonly actionGetRecords = "kinesis:GetRecords";
	/** [Read] kinesis:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "kinesis:GetResourcePolicy";
	/** [Read] kinesis:GetShardIterator */
	static readonly actionGetShardIterator = "kinesis:GetShardIterator";
	/** [Write] kinesis:IncreaseStreamRetentionPeriod */
	static readonly IncreaseStreamRetentionPeriod =
		"kinesis:IncreaseStreamRetentionPeriod";
	/** [Write] kinesis:InjectApiError */
	static readonly InjectApiError = "kinesis:InjectApiError";
	/** [List] kinesis:ListChannels */
	static readonly ListChannels = "kinesis:ListChannels";
	/** [List] kinesis:ListShards */
	static readonly ListShards = "kinesis:ListShards";
	/** [List] kinesis:ListStreamConsumers */
	static readonly ListStreamConsumers = "kinesis:ListStreamConsumers";
	/** [List] kinesis:ListStreams */
	static readonly ListStreams = "kinesis:ListStreams";
	/** [Read] kinesis:ListTagsForResource */
	static readonly ListTagsForResource = "kinesis:ListTagsForResource";
	/** [Read] kinesis:ListTagsForStream */
	static readonly ListTagsForStream = "kinesis:ListTagsForStream";
	/** [Write] kinesis:MergeShards */
	static readonly MergeShards = "kinesis:MergeShards";
	/** [Write] kinesis:PutRecord */
	static readonly PutRecord = "kinesis:PutRecord";
	/** [Write] kinesis:PutRecords */
	static readonly PutRecords = "kinesis:PutRecords";
	/** [Write] kinesis:PutResourcePolicy */
	static readonly PutResourcePolicy = "kinesis:PutResourcePolicy";
	/** [Write] kinesis:RegisterStreamConsumer */
	static readonly RegisterStreamConsumer = "kinesis:RegisterStreamConsumer";
	/** [Tagging] kinesis:RemoveTagsFromStream */
	static readonly RemoveTagsFromStream = "kinesis:RemoveTagsFromStream";
	/** [Write] kinesis:SplitShard */
	static readonly SplitShard = "kinesis:SplitShard";
	/** [Write] kinesis:StartStreamEncryption */
	static readonly StartStreamEncryption = "kinesis:StartStreamEncryption";
	/** [Write] kinesis:StopStreamEncryption */
	static readonly StopStreamEncryption = "kinesis:StopStreamEncryption";
	/** [Read] kinesis:SubscribeToShard */
	static readonly SubscribeToShard = "kinesis:SubscribeToShard";
	/** [Tagging] kinesis:TagResource */
	static readonly TagResource = "kinesis:TagResource";
	/** [Tagging] kinesis:UntagResource */
	static readonly UntagResource = "kinesis:UntagResource";
	/** [Write] kinesis:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "kinesis:UpdateAccountSettings";
	/** [Write] kinesis:UpdateChannel */
	static readonly UpdateChannel = "kinesis:UpdateChannel";
	/** [Write] kinesis:UpdateMaxRecordSize */
	static readonly UpdateMaxRecordSize = "kinesis:UpdateMaxRecordSize";
	/** [Write] kinesis:UpdateShardCount */
	static readonly UpdateShardCount = "kinesis:UpdateShardCount";
	/** [Write] kinesis:UpdateStreamMode */
	static readonly UpdateStreamMode = "kinesis:UpdateStreamMode";
	/** [Write] kinesis:UpdateStreamWarmThroughput */
	static readonly UpdateStreamWarmThroughput =
		"kinesis:UpdateStreamWarmThroughput";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KinesisActions.DescribeAccountSettings,
		KinesisActions.DescribeChannel,
		KinesisActions.DescribeLimits,
		KinesisActions.DescribeStream,
		KinesisActions.DescribeStreamConsumer,
		KinesisActions.DescribeStreamSummary,
		KinesisActions.actionGetRecords,
		KinesisActions.actionGetResourcePolicy,
		KinesisActions.actionGetShardIterator,
		KinesisActions.ListTagsForResource,
		KinesisActions.ListTagsForStream,
		KinesisActions.SubscribeToShard,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KinesisActions.AssociateStreamsWithChannel,
		KinesisActions.CreateStream,
		KinesisActions.DecreaseStreamRetentionPeriod,
		KinesisActions.DeleteChannel,
		KinesisActions.DeleteResourcePolicy,
		KinesisActions.DeleteStream,
		KinesisActions.DeregisterStreamConsumer,
		KinesisActions.DisableEnhancedMonitoring,
		KinesisActions.EnableEnhancedMonitoring,
		KinesisActions.IncreaseStreamRetentionPeriod,
		KinesisActions.InjectApiError,
		KinesisActions.MergeShards,
		KinesisActions.PutRecord,
		KinesisActions.PutRecords,
		KinesisActions.PutResourcePolicy,
		KinesisActions.RegisterStreamConsumer,
		KinesisActions.SplitShard,
		KinesisActions.StartStreamEncryption,
		KinesisActions.StopStreamEncryption,
		KinesisActions.UpdateAccountSettings,
		KinesisActions.UpdateChannel,
		KinesisActions.UpdateMaxRecordSize,
		KinesisActions.UpdateShardCount,
		KinesisActions.UpdateStreamMode,
		KinesisActions.UpdateStreamWarmThroughput,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KinesisActions.ListChannels,
		KinesisActions.ListShards,
		KinesisActions.ListStreamConsumers,
		KinesisActions.ListStreams,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KinesisActions.AddTagsToStream,
		KinesisActions.CreateChannel,
		KinesisActions.RemoveTagsFromStream,
		KinesisActions.TagResource,
		KinesisActions.UntagResource,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface KinesisChannelArnProps {
	/** The ChannelId component of the ARN. */
	readonly channelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a channel ARN.
 */
export interface KinesisChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelId component. */
	readonly channelId: string;
}

/**
 * Properties for building a consumer ARN.
 */
export interface KinesisConsumerArnProps {
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
}

/**
 * Parsed components of a consumer ARN.
 */
export interface KinesisConsumerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamType component. */
	readonly streamType: string;
	/** The StreamName component. */
	readonly streamName: string;
	/** The ConsumerName component. */
	readonly consumerName: string;
	/** The ConsumerCreationTimpstamp component. */
	readonly consumerCreationTimpstamp: string;
}

/**
 * Properties for building a kmsKey ARN.
 */
export interface KinesisKMSKeyArnProps {
	/** The KeyId component of the ARN. */
	readonly keyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a kmsKey ARN.
 */
export interface KinesisKMSKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyId component. */
	readonly keyId: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface KinesisStreamArnProps {
	/** The StreamName component of the ARN. */
	readonly streamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stream ARN.
 */
export interface KinesisStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamName component. */
	readonly streamName: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):kinesis:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelId>[^:/?]+)$/;
const ConsumerArnRegex =
	/^arn:(?<partition>[^:]+):kinesis:(?<region>[^:]*):(?<account>[^:]*):(?<streamType>[^:/?]+)\/(?<streamName>[^:/?]+)\/consumer\/(?<consumerName>[^:/?]+):(?<consumerCreationTimpstamp>[^:/?]+)$/;
const KMSKeyArnRegex =
	/^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key\/(?<keyId>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):kinesis:(?<region>[^:]*):(?<account>[^:]*):stream\/(?<streamName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kinesis resources.
 */
export class KinesisResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: KinesisChannelArnProps): string {
		return `arn:${props.partition ?? "aws"}:kinesis:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): KinesisChannelArnComponents {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelId: match.groups!.channelId,
		};
	}

	/**
	 * Builds an ARN for the consumer resource.
	 */
	static consumer(props: KinesisConsumerArnProps): string {
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
	static parseConsumerArn(arn: string): KinesisConsumerArnComponents {
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
	static kmsKey(props: KinesisKMSKeyArnProps): string {
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
	static parseKMSKeyArn(arn: string): KinesisKMSKeyArnComponents {
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
	static stream(props: KinesisStreamArnProps): string {
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
	static parseStreamArn(arn: string): KinesisStreamArnComponents {
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
	static readonly AddTagsToStream: string[] = ["kinesis:AddTagsToStream"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"kinesis:AssociateStreamsWithChannel",
		"kinesis:CreateChannel",
		"iam:PassRole",
		"kinesis:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CreateStream: string[] = [
		"kinesis:AddTagsToStream",
		"kinesis:CreateStream",
	];
	/** IAM actions required for the DecreaseStreamRetentionPeriod API call. */
	static readonly DecreaseStreamRetentionPeriod: string[] = [
		"kinesis:DecreaseStreamRetentionPeriod",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["kinesis:DeleteChannel"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"kinesis:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DeleteStream: string[] = ["kinesis:DeleteStream"];
	/** IAM actions required for the DeregisterStreamConsumer API call. */
	static readonly DeregisterStreamConsumer: string[] = [
		"kinesis:DeregisterStreamConsumer",
	];
	/** IAM actions required for the DescribeAccountSettings API call. */
	static readonly DescribeAccountSettings: string[] = [
		"kinesis:DescribeAccountSettings",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DescribeChannel: string[] = ["kinesis:DescribeChannel"];
	/** IAM actions required for the DescribeLimits API call. */
	static readonly DescribeLimits: string[] = ["kinesis:DescribeLimits"];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DescribeStream: string[] = ["kinesis:DescribeStream"];
	/** IAM actions required for the DescribeStreamConsumer API call. */
	static readonly DescribeStreamConsumer: string[] = [
		"kinesis:DescribeStreamConsumer",
	];
	/** IAM actions required for the DescribeStreamSummary API call. */
	static readonly DescribeStreamSummary: string[] = [
		"kinesis:DescribeStreamSummary",
	];
	/** IAM actions required for the DisableEnhancedMonitoring API call. */
	static readonly DisableEnhancedMonitoring: string[] = [
		"kinesis:DisableEnhancedMonitoring",
	];
	/** IAM actions required for the EnableEnhancedMonitoring API call. */
	static readonly EnableEnhancedMonitoring: string[] = [
		"kinesis:EnableEnhancedMonitoring",
	];
	/** IAM actions required for the GetRecords API call. */
	static readonly opGetRecords: string[] = ["kinesis:GetRecords"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["kinesis:GetResourcePolicy"];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly opGetShardIterator: string[] = ["kinesis:GetShardIterator"];
	/** IAM actions required for the IncreaseStreamRetentionPeriod API call. */
	static readonly IncreaseStreamRetentionPeriod: string[] = [
		"kinesis:IncreaseStreamRetentionPeriod",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["kinesis:ListChannels"];
	/** IAM actions required for the ListShards API call. */
	static readonly ListShards: string[] = ["kinesis:ListShards"];
	/** IAM actions required for the ListStreamConsumers API call. */
	static readonly ListStreamConsumers: string[] = [
		"kinesis:ListStreamConsumers",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["kinesis:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kinesis:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForStream API call. */
	static readonly ListTagsForStream: string[] = ["kinesis:ListTagsForStream"];
	/** IAM actions required for the MergeShards API call. */
	static readonly MergeShards: string[] = ["kinesis:MergeShards"];
	/** IAM actions required for the PutRecord API call. */
	static readonly PutRecord: string[] = ["kinesis:PutRecord"];
	/** IAM actions required for the PutRecords API call. */
	static readonly PutRecords: string[] = ["kinesis:PutRecords"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["kinesis:PutResourcePolicy"];
	/** IAM actions required for the RegisterStreamConsumer API call. */
	static readonly RegisterStreamConsumer: string[] = [
		"kinesis:RegisterStreamConsumer",
		"kinesis:TagResource",
	];
	/** IAM actions required for the RemoveTagsFromStream API call. */
	static readonly RemoveTagsFromStream: string[] = [
		"kinesis:RemoveTagsFromStream",
	];
	/** IAM actions required for the SplitShard API call. */
	static readonly SplitShard: string[] = ["kinesis:SplitShard"];
	/** IAM actions required for the StartStreamEncryption API call. */
	static readonly StartStreamEncryption: string[] = [
		"kinesis:StartStreamEncryption",
	];
	/** IAM actions required for the StopStreamEncryption API call. */
	static readonly StopStreamEncryption: string[] = [
		"kinesis:StopStreamEncryption",
	];
	/** IAM actions required for the SubscribeToShard API call. */
	static readonly SubscribeToShard: string[] = ["kinesis:SubscribeToShard"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kinesis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kinesis:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"kinesis:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["kinesis:UpdateChannel"];
	/** IAM actions required for the UpdateMaxRecordSize API call. */
	static readonly UpdateMaxRecordSize: string[] = [
		"kinesis:UpdateMaxRecordSize",
	];
	/** IAM actions required for the UpdateShardCount API call. */
	static readonly UpdateShardCount: string[] = ["kinesis:UpdateShardCount"];
	/** IAM actions required for the UpdateStreamMode API call. */
	static readonly UpdateStreamMode: string[] = ["kinesis:UpdateStreamMode"];
	/** IAM actions required for the UpdateStreamWarmThroughput API call. */
	static readonly UpdateStreamWarmThroughput: string[] = [
		"kinesis:UpdateStreamWarmThroughput",
	];
}

/**
 * Condition key constants and builders for kinesis.
 */
export class KinesisConditions {
	/** Condition keys applicable to the InjectApiError action. */
	static readonly InjectApiErrorConditionKeys: string[] = [
		"kinesis:FisActionId",
		"kinesis:FisInjectPercentage",
		"kinesis:FisTargetArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
