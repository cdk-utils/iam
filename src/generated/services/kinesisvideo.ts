// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kinesisvideo.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kinesisvideo service.
 */
export class KinesisvideoActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kinesisvideo";

	/** [Write] kinesisvideo:ConnectAsMaster */
	static readonly CONNECT_AS_MASTER = "kinesisvideo:ConnectAsMaster";
	/** [Write] kinesisvideo:ConnectAsViewer */
	static readonly CONNECT_AS_VIEWER = "kinesisvideo:ConnectAsViewer";
	/** [Write] kinesisvideo:CreateSignalingChannel */
	static readonly CREATE_SIGNALING_CHANNEL =
		"kinesisvideo:CreateSignalingChannel";
	/** [Write] kinesisvideo:CreateStream */
	static readonly CREATE_STREAM = "kinesisvideo:CreateStream";
	/** [Write] kinesisvideo:DeleteEdgeConfiguration */
	static readonly DELETE_EDGE_CONFIGURATION =
		"kinesisvideo:DeleteEdgeConfiguration";
	/** [Write] kinesisvideo:DeleteSignalingChannel */
	static readonly DELETE_SIGNALING_CHANNEL =
		"kinesisvideo:DeleteSignalingChannel";
	/** [Write] kinesisvideo:DeleteStream */
	static readonly DELETE_STREAM = "kinesisvideo:DeleteStream";
	/** [Read] kinesisvideo:DescribeEdgeConfiguration */
	static readonly DESCRIBE_EDGE_CONFIGURATION =
		"kinesisvideo:DescribeEdgeConfiguration";
	/** [Read] kinesisvideo:DescribeImageGenerationConfiguration */
	static readonly DESCRIBE_IMAGE_GENERATION_CONFIGURATION =
		"kinesisvideo:DescribeImageGenerationConfiguration";
	/** [List] kinesisvideo:DescribeMappedResourceConfiguration */
	static readonly DESCRIBE_MAPPED_RESOURCE_CONFIGURATION =
		"kinesisvideo:DescribeMappedResourceConfiguration";
	/** [Read] kinesisvideo:DescribeMediaStorageConfiguration */
	static readonly DESCRIBE_MEDIA_STORAGE_CONFIGURATION =
		"kinesisvideo:DescribeMediaStorageConfiguration";
	/** [Read] kinesisvideo:DescribeNotificationConfiguration */
	static readonly DESCRIBE_NOTIFICATION_CONFIGURATION =
		"kinesisvideo:DescribeNotificationConfiguration";
	/** [List] kinesisvideo:DescribeSignalingChannel */
	static readonly DESCRIBE_SIGNALING_CHANNEL =
		"kinesisvideo:DescribeSignalingChannel";
	/** [List] kinesisvideo:DescribeStream */
	static readonly DESCRIBE_STREAM = "kinesisvideo:DescribeStream";
	/** [Read] kinesisvideo:DescribeStreamStorageConfiguration */
	static readonly DESCRIBE_STREAM_STORAGE_CONFIGURATION =
		"kinesisvideo:DescribeStreamStorageConfiguration";
	/** [Read] kinesisvideo:GetClip */
	static readonly GET_CLIP = "kinesisvideo:GetClip";
	/** [Read] kinesisvideo:GetDASHStreamingSessionURL */
	static readonly GET_DASH_STREAMING_SESSION_URL =
		"kinesisvideo:GetDASHStreamingSessionURL";
	/** [Read] kinesisvideo:GetDataEndpoint */
	static readonly GET_DATA_ENDPOINT = "kinesisvideo:GetDataEndpoint";
	/** [Read] kinesisvideo:GetHLSStreamingSessionURL */
	static readonly GET_HLS_STREAMING_SESSION_URL =
		"kinesisvideo:GetHLSStreamingSessionURL";
	/** [Read] kinesisvideo:GetIceServerConfig */
	static readonly GET_ICE_SERVER_CONFIG = "kinesisvideo:GetIceServerConfig";
	/** [Read] kinesisvideo:GetImages */
	static readonly GET_IMAGES = "kinesisvideo:GetImages";
	/** [Read] kinesisvideo:GetMedia */
	static readonly GET_MEDIA = "kinesisvideo:GetMedia";
	/** [Read] kinesisvideo:GetMediaForFragmentList */
	static readonly GET_MEDIA_FOR_FRAGMENT_LIST =
		"kinesisvideo:GetMediaForFragmentList";
	/** [Read] kinesisvideo:GetSignalingChannelEndpoint */
	static readonly GET_SIGNALING_CHANNEL_ENDPOINT =
		"kinesisvideo:GetSignalingChannelEndpoint";
	/** [Write] kinesisvideo:JoinStorageSession */
	static readonly JOIN_STORAGE_SESSION = "kinesisvideo:JoinStorageSession";
	/** [Write] kinesisvideo:JoinStorageSessionAsViewer */
	static readonly JOIN_STORAGE_SESSION_AS_VIEWER =
		"kinesisvideo:JoinStorageSessionAsViewer";
	/** [List] kinesisvideo:ListEdgeAgentConfigurations */
	static readonly LIST_EDGE_AGENT_CONFIGURATIONS =
		"kinesisvideo:ListEdgeAgentConfigurations";
	/** [List] kinesisvideo:ListFragments */
	static readonly LIST_FRAGMENTS = "kinesisvideo:ListFragments";
	/** [List] kinesisvideo:ListSignalingChannels */
	static readonly LIST_SIGNALING_CHANNELS =
		"kinesisvideo:ListSignalingChannels";
	/** [List] kinesisvideo:ListStreams */
	static readonly LIST_STREAMS = "kinesisvideo:ListStreams";
	/** [Read] kinesisvideo:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kinesisvideo:ListTagsForResource";
	/** [Read] kinesisvideo:ListTagsForStream */
	static readonly LIST_TAGS_FOR_STREAM = "kinesisvideo:ListTagsForStream";
	/** [Write] kinesisvideo:PutMedia */
	static readonly PUT_MEDIA = "kinesisvideo:PutMedia";
	/** [Write] kinesisvideo:SendAlexaOfferToMaster */
	static readonly SEND_ALEXA_OFFER_TO_MASTER =
		"kinesisvideo:SendAlexaOfferToMaster";
	/** [Write] kinesisvideo:StartEdgeConfigurationUpdate */
	static readonly START_EDGE_CONFIGURATION_UPDATE =
		"kinesisvideo:StartEdgeConfigurationUpdate";
	/** [Tagging] kinesisvideo:TagResource */
	static readonly TAG_RESOURCE = "kinesisvideo:TagResource";
	/** [Tagging] kinesisvideo:TagStream */
	static readonly TAG_STREAM = "kinesisvideo:TagStream";
	/** [Tagging] kinesisvideo:UntagResource */
	static readonly UNTAG_RESOURCE = "kinesisvideo:UntagResource";
	/** [Tagging] kinesisvideo:UntagStream */
	static readonly UNTAG_STREAM = "kinesisvideo:UntagStream";
	/** [Write] kinesisvideo:UpdateDataRetention */
	static readonly UPDATE_DATA_RETENTION = "kinesisvideo:UpdateDataRetention";
	/** [Write] kinesisvideo:UpdateImageGenerationConfiguration */
	static readonly UPDATE_IMAGE_GENERATION_CONFIGURATION =
		"kinesisvideo:UpdateImageGenerationConfiguration";
	/** [Write] kinesisvideo:UpdateMediaStorageConfiguration */
	static readonly UPDATE_MEDIA_STORAGE_CONFIGURATION =
		"kinesisvideo:UpdateMediaStorageConfiguration";
	/** [Write] kinesisvideo:UpdateNotificationConfiguration */
	static readonly UPDATE_NOTIFICATION_CONFIGURATION =
		"kinesisvideo:UpdateNotificationConfiguration";
	/** [Write] kinesisvideo:UpdateSignalingChannel */
	static readonly UPDATE_SIGNALING_CHANNEL =
		"kinesisvideo:UpdateSignalingChannel";
	/** [Write] kinesisvideo:UpdateStream */
	static readonly UPDATE_STREAM = "kinesisvideo:UpdateStream";
	/** [Write] kinesisvideo:UpdateStreamStorageConfiguration */
	static readonly UPDATE_STREAM_STORAGE_CONFIGURATION =
		"kinesisvideo:UpdateStreamStorageConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KinesisvideoActions.DESCRIBE_EDGE_CONFIGURATION,
		KinesisvideoActions.DESCRIBE_IMAGE_GENERATION_CONFIGURATION,
		KinesisvideoActions.DESCRIBE_MEDIA_STORAGE_CONFIGURATION,
		KinesisvideoActions.DESCRIBE_NOTIFICATION_CONFIGURATION,
		KinesisvideoActions.DESCRIBE_STREAM_STORAGE_CONFIGURATION,
		KinesisvideoActions.GET_CLIP,
		KinesisvideoActions.GET_DASH_STREAMING_SESSION_URL,
		KinesisvideoActions.GET_DATA_ENDPOINT,
		KinesisvideoActions.GET_HLS_STREAMING_SESSION_URL,
		KinesisvideoActions.GET_ICE_SERVER_CONFIG,
		KinesisvideoActions.GET_IMAGES,
		KinesisvideoActions.GET_MEDIA,
		KinesisvideoActions.GET_MEDIA_FOR_FRAGMENT_LIST,
		KinesisvideoActions.GET_SIGNALING_CHANNEL_ENDPOINT,
		KinesisvideoActions.LIST_TAGS_FOR_RESOURCE,
		KinesisvideoActions.LIST_TAGS_FOR_STREAM,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KinesisvideoActions.CONNECT_AS_MASTER,
		KinesisvideoActions.CONNECT_AS_VIEWER,
		KinesisvideoActions.CREATE_SIGNALING_CHANNEL,
		KinesisvideoActions.CREATE_STREAM,
		KinesisvideoActions.DELETE_EDGE_CONFIGURATION,
		KinesisvideoActions.DELETE_SIGNALING_CHANNEL,
		KinesisvideoActions.DELETE_STREAM,
		KinesisvideoActions.JOIN_STORAGE_SESSION,
		KinesisvideoActions.JOIN_STORAGE_SESSION_AS_VIEWER,
		KinesisvideoActions.PUT_MEDIA,
		KinesisvideoActions.SEND_ALEXA_OFFER_TO_MASTER,
		KinesisvideoActions.START_EDGE_CONFIGURATION_UPDATE,
		KinesisvideoActions.UPDATE_DATA_RETENTION,
		KinesisvideoActions.UPDATE_IMAGE_GENERATION_CONFIGURATION,
		KinesisvideoActions.UPDATE_MEDIA_STORAGE_CONFIGURATION,
		KinesisvideoActions.UPDATE_NOTIFICATION_CONFIGURATION,
		KinesisvideoActions.UPDATE_SIGNALING_CHANNEL,
		KinesisvideoActions.UPDATE_STREAM,
		KinesisvideoActions.UPDATE_STREAM_STORAGE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KinesisvideoActions.DESCRIBE_MAPPED_RESOURCE_CONFIGURATION,
		KinesisvideoActions.DESCRIBE_SIGNALING_CHANNEL,
		KinesisvideoActions.DESCRIBE_STREAM,
		KinesisvideoActions.LIST_EDGE_AGENT_CONFIGURATIONS,
		KinesisvideoActions.LIST_FRAGMENTS,
		KinesisvideoActions.LIST_SIGNALING_CHANNELS,
		KinesisvideoActions.LIST_STREAMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KinesisvideoActions.TAG_RESOURCE,
		KinesisvideoActions.TAG_STREAM,
		KinesisvideoActions.UNTAG_RESOURCE,
		KinesisvideoActions.UNTAG_STREAM,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kinesisvideo:(?<region>[^:]*):(?<account>[^:]*):channel/(?<channelName>[^:/?]+)/(?<creationTime>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kinesisvideo:(?<region>[^:]*):(?<account>[^:]*):stream/(?<streamName>[^:/?]+)/(?<creationTime>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kinesisvideo resources.
 */
export class KinesisvideoResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The CreationTime component of the ARN. */
		readonly creationTime: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kinesisvideo:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelName}/${props.creationTime}`;
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
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelName: string;
		creationTime: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelName: match.groups!.channelName,
			creationTime: match.groups!.creationTime,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: {
		/** The StreamName component of the ARN. */
		readonly streamName: string;
		/** The CreationTime component of the ARN. */
		readonly creationTime: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kinesisvideo:${props.region ?? "*"}:${props.account ?? "*"}:stream/${props.streamName}/${props.creationTime}`;
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
		creationTime: string;
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
			creationTime: match.groups!.creationTime,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kinesisvideo.
 */
export class KinesisvideoOperations {
	/** IAM actions required for the CreateSignalingChannel API call. */
	static readonly CREATE_SIGNALING_CHANNEL: string[] = [
		"kinesisvideo:CreateSignalingChannel",
		"kinesisvideo:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CREATE_STREAM: string[] = [
		"kinesisvideo:CreateStream",
		"kinesisvideo:TagStream",
	];
	/** IAM actions required for the DeleteEdgeConfiguration API call. */
	static readonly DELETE_EDGE_CONFIGURATION: string[] = [
		"kinesisvideo:DeleteEdgeConfiguration",
	];
	/** IAM actions required for the DeleteSignalingChannel API call. */
	static readonly DELETE_SIGNALING_CHANNEL: string[] = [
		"kinesisvideo:DeleteSignalingChannel",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DELETE_STREAM: string[] = ["kinesisvideo:DeleteStream"];
	/** IAM actions required for the DescribeEdgeConfiguration API call. */
	static readonly DESCRIBE_EDGE_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeEdgeConfiguration",
	];
	/** IAM actions required for the DescribeImageGenerationConfiguration API call. */
	static readonly DESCRIBE_IMAGE_GENERATION_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeImageGenerationConfiguration",
	];
	/** IAM actions required for the DescribeMappedResourceConfiguration API call. */
	static readonly DESCRIBE_MAPPED_RESOURCE_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeMappedResourceConfiguration",
	];
	/** IAM actions required for the DescribeMediaStorageConfiguration API call. */
	static readonly DESCRIBE_MEDIA_STORAGE_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeMediaStorageConfiguration",
	];
	/** IAM actions required for the DescribeNotificationConfiguration API call. */
	static readonly DESCRIBE_NOTIFICATION_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeNotificationConfiguration",
	];
	/** IAM actions required for the DescribeSignalingChannel API call. */
	static readonly DESCRIBE_SIGNALING_CHANNEL: string[] = [
		"kinesisvideo:DescribeSignalingChannel",
	];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DESCRIBE_STREAM: string[] = ["kinesisvideo:DescribeStream"];
	/** IAM actions required for the DescribeStreamStorageConfiguration API call. */
	static readonly DESCRIBE_STREAM_STORAGE_CONFIGURATION: string[] = [
		"kinesisvideo:DescribeStreamStorageConfiguration",
	];
	/** IAM actions required for the GetClip API call. */
	static readonly GET_CLIP: string[] = ["kinesisvideo:GetClip"];
	/** IAM actions required for the GetDASHStreamingSessionURL API call. */
	static readonly GET_DASH_STREAMING_SESSION_URL: string[] = [
		"kinesisvideo:GetDASHStreamingSessionURL",
	];
	/** IAM actions required for the GetDataEndpoint API call. */
	static readonly GET_DATA_ENDPOINT: string[] = [
		"kinesisvideo:GetDataEndpoint",
	];
	/** IAM actions required for the GetHLSStreamingSessionURL API call. */
	static readonly GET_HLS_STREAMING_SESSION_URL: string[] = [
		"kinesisvideo:GetHLSStreamingSessionURL",
	];
	/** IAM actions required for the GetIceServerConfig API call. */
	static readonly GET_ICE_SERVER_CONFIG: string[] = [
		"kinesisvideo:GetIceServerConfig",
	];
	/** IAM actions required for the GetImages API call. */
	static readonly GET_IMAGES: string[] = ["kinesisvideo:GetImages"];
	/** IAM actions required for the GetMedia API call. */
	static readonly GET_MEDIA: string[] = ["kinesisvideo:GetMedia"];
	/** IAM actions required for the GetMediaForFragmentList API call. */
	static readonly GET_MEDIA_FOR_FRAGMENT_LIST: string[] = [
		"kinesisvideo:GetMediaForFragmentList",
	];
	/** IAM actions required for the GetSignalingChannelEndpoint API call. */
	static readonly GET_SIGNALING_CHANNEL_ENDPOINT: string[] = [
		"kinesisvideo:GetSignalingChannelEndpoint",
	];
	/** IAM actions required for the JoinStorageSession API call. */
	static readonly JOIN_STORAGE_SESSION: string[] = [
		"kinesisvideo:JoinStorageSession",
	];
	/** IAM actions required for the JoinStorageSessionAsViewer API call. */
	static readonly JOIN_STORAGE_SESSION_AS_VIEWER: string[] = [
		"kinesisvideo:JoinStorageSessionAsViewer",
	];
	/** IAM actions required for the ListEdgeAgentConfigurations API call. */
	static readonly LIST_EDGE_AGENT_CONFIGURATIONS: string[] = [
		"kinesisvideo:ListEdgeAgentConfigurations",
	];
	/** IAM actions required for the ListFragments API call. */
	static readonly LIST_FRAGMENTS: string[] = ["kinesisvideo:ListFragments"];
	/** IAM actions required for the ListSignalingChannels API call. */
	static readonly LIST_SIGNALING_CHANNELS: string[] = [
		"kinesisvideo:ListSignalingChannels",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["kinesisvideo:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kinesisvideo:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForStream API call. */
	static readonly LIST_TAGS_FOR_STREAM: string[] = [
		"kinesisvideo:ListTagsForStream",
	];
	/** IAM actions required for the SendAlexaOfferToMaster API call. */
	static readonly SEND_ALEXA_OFFER_TO_MASTER: string[] = [
		"kinesisvideo:SendAlexaOfferToMaster",
	];
	/** IAM actions required for the StartEdgeConfigurationUpdate API call. */
	static readonly START_EDGE_CONFIGURATION_UPDATE: string[] = [
		"kinesisvideo:StartEdgeConfigurationUpdate",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kinesisvideo:TagResource"];
	/** IAM actions required for the TagStream API call. */
	static readonly TAG_STREAM: string[] = ["kinesisvideo:TagStream"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kinesisvideo:UntagResource"];
	/** IAM actions required for the UntagStream API call. */
	static readonly UNTAG_STREAM: string[] = ["kinesisvideo:UntagStream"];
	/** IAM actions required for the UpdateDataRetention API call. */
	static readonly UPDATE_DATA_RETENTION: string[] = [
		"kinesisvideo:UpdateDataRetention",
	];
	/** IAM actions required for the UpdateImageGenerationConfiguration API call. */
	static readonly UPDATE_IMAGE_GENERATION_CONFIGURATION: string[] = [
		"kinesisvideo:UpdateImageGenerationConfiguration",
	];
	/** IAM actions required for the UpdateMediaStorageConfiguration API call. */
	static readonly UPDATE_MEDIA_STORAGE_CONFIGURATION: string[] = [
		"kinesisvideo:UpdateMediaStorageConfiguration",
	];
	/** IAM actions required for the UpdateNotificationConfiguration API call. */
	static readonly UPDATE_NOTIFICATION_CONFIGURATION: string[] = [
		"kinesisvideo:UpdateNotificationConfiguration",
	];
	/** IAM actions required for the UpdateSignalingChannel API call. */
	static readonly UPDATE_SIGNALING_CHANNEL: string[] = [
		"kinesisvideo:UpdateSignalingChannel",
	];
	/** IAM actions required for the UpdateStream API call. */
	static readonly UPDATE_STREAM: string[] = ["kinesisvideo:UpdateStream"];
	/** IAM actions required for the UpdateStreamStorageConfiguration API call. */
	static readonly UPDATE_STREAM_STORAGE_CONFIGURATION: string[] = [
		"kinesisvideo:UpdateStreamStorageConfiguration",
	];
}

/**
 * Condition key constants and builders for kinesisvideo.
 */
export class KinesisvideoConditions {
	/** Condition keys applicable to the CreateSignalingChannel action. */
	static readonly CREATE_SIGNALING_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CREATE_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagStream action. */
	static readonly TAG_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagStream action. */
	static readonly UNTAG_STREAM_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
