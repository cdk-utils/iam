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
	static readonly ConnectAsMaster = "kinesisvideo:ConnectAsMaster";
	/** [Write] kinesisvideo:ConnectAsViewer */
	static readonly ConnectAsViewer = "kinesisvideo:ConnectAsViewer";
	/** [Write] kinesisvideo:CreateSignalingChannel */
	static readonly CreateSignalingChannel =
		"kinesisvideo:CreateSignalingChannel";
	/** [Write] kinesisvideo:CreateStream */
	static readonly CreateStream = "kinesisvideo:CreateStream";
	/** [Write] kinesisvideo:DeleteEdgeConfiguration */
	static readonly DeleteEdgeConfiguration =
		"kinesisvideo:DeleteEdgeConfiguration";
	/** [Write] kinesisvideo:DeleteSignalingChannel */
	static readonly DeleteSignalingChannel =
		"kinesisvideo:DeleteSignalingChannel";
	/** [Write] kinesisvideo:DeleteStream */
	static readonly DeleteStream = "kinesisvideo:DeleteStream";
	/** [Read] kinesisvideo:DescribeEdgeConfiguration */
	static readonly DescribeEdgeConfiguration =
		"kinesisvideo:DescribeEdgeConfiguration";
	/** [Read] kinesisvideo:DescribeImageGenerationConfiguration */
	static readonly DescribeImageGenerationConfiguration =
		"kinesisvideo:DescribeImageGenerationConfiguration";
	/** [List] kinesisvideo:DescribeMappedResourceConfiguration */
	static readonly DescribeMappedResourceConfiguration =
		"kinesisvideo:DescribeMappedResourceConfiguration";
	/** [Read] kinesisvideo:DescribeMediaStorageConfiguration */
	static readonly DescribeMediaStorageConfiguration =
		"kinesisvideo:DescribeMediaStorageConfiguration";
	/** [Read] kinesisvideo:DescribeNotificationConfiguration */
	static readonly DescribeNotificationConfiguration =
		"kinesisvideo:DescribeNotificationConfiguration";
	/** [List] kinesisvideo:DescribeSignalingChannel */
	static readonly DescribeSignalingChannel =
		"kinesisvideo:DescribeSignalingChannel";
	/** [List] kinesisvideo:DescribeStream */
	static readonly DescribeStream = "kinesisvideo:DescribeStream";
	/** [Read] kinesisvideo:DescribeStreamStorageConfiguration */
	static readonly DescribeStreamStorageConfiguration =
		"kinesisvideo:DescribeStreamStorageConfiguration";
	/** [Read] kinesisvideo:GetClip */
	static readonly actionGetClip = "kinesisvideo:GetClip";
	/** [Read] kinesisvideo:GetDASHStreamingSessionURL */
	static readonly actionGetDASHStreamingSessionURL =
		"kinesisvideo:GetDASHStreamingSessionURL";
	/** [Read] kinesisvideo:GetDataEndpoint */
	static readonly actionGetDataEndpoint = "kinesisvideo:GetDataEndpoint";
	/** [Read] kinesisvideo:GetHLSStreamingSessionURL */
	static readonly actionGetHLSStreamingSessionURL =
		"kinesisvideo:GetHLSStreamingSessionURL";
	/** [Read] kinesisvideo:GetIceServerConfig */
	static readonly actionGetIceServerConfig = "kinesisvideo:GetIceServerConfig";
	/** [Read] kinesisvideo:GetImages */
	static readonly actionGetImages = "kinesisvideo:GetImages";
	/** [Read] kinesisvideo:GetMedia */
	static readonly actionGetMedia = "kinesisvideo:GetMedia";
	/** [Read] kinesisvideo:GetMediaForFragmentList */
	static readonly actionGetMediaForFragmentList =
		"kinesisvideo:GetMediaForFragmentList";
	/** [Read] kinesisvideo:GetSignalingChannelEndpoint */
	static readonly actionGetSignalingChannelEndpoint =
		"kinesisvideo:GetSignalingChannelEndpoint";
	/** [Write] kinesisvideo:JoinStorageSession */
	static readonly JoinStorageSession = "kinesisvideo:JoinStorageSession";
	/** [Write] kinesisvideo:JoinStorageSessionAsViewer */
	static readonly JoinStorageSessionAsViewer =
		"kinesisvideo:JoinStorageSessionAsViewer";
	/** [List] kinesisvideo:ListEdgeAgentConfigurations */
	static readonly ListEdgeAgentConfigurations =
		"kinesisvideo:ListEdgeAgentConfigurations";
	/** [List] kinesisvideo:ListFragments */
	static readonly ListFragments = "kinesisvideo:ListFragments";
	/** [List] kinesisvideo:ListSignalingChannels */
	static readonly ListSignalingChannels = "kinesisvideo:ListSignalingChannels";
	/** [List] kinesisvideo:ListStreams */
	static readonly ListStreams = "kinesisvideo:ListStreams";
	/** [Read] kinesisvideo:ListTagsForResource */
	static readonly ListTagsForResource = "kinesisvideo:ListTagsForResource";
	/** [Read] kinesisvideo:ListTagsForStream */
	static readonly ListTagsForStream = "kinesisvideo:ListTagsForStream";
	/** [Write] kinesisvideo:PutMedia */
	static readonly PutMedia = "kinesisvideo:PutMedia";
	/** [Write] kinesisvideo:SendAlexaOfferToMaster */
	static readonly SendAlexaOfferToMaster =
		"kinesisvideo:SendAlexaOfferToMaster";
	/** [Write] kinesisvideo:StartEdgeConfigurationUpdate */
	static readonly StartEdgeConfigurationUpdate =
		"kinesisvideo:StartEdgeConfigurationUpdate";
	/** [Tagging] kinesisvideo:TagResource */
	static readonly TagResource = "kinesisvideo:TagResource";
	/** [Tagging] kinesisvideo:TagStream */
	static readonly TagStream = "kinesisvideo:TagStream";
	/** [Tagging] kinesisvideo:UntagResource */
	static readonly UntagResource = "kinesisvideo:UntagResource";
	/** [Tagging] kinesisvideo:UntagStream */
	static readonly UntagStream = "kinesisvideo:UntagStream";
	/** [Write] kinesisvideo:UpdateDataRetention */
	static readonly UpdateDataRetention = "kinesisvideo:UpdateDataRetention";
	/** [Write] kinesisvideo:UpdateImageGenerationConfiguration */
	static readonly UpdateImageGenerationConfiguration =
		"kinesisvideo:UpdateImageGenerationConfiguration";
	/** [Write] kinesisvideo:UpdateMediaStorageConfiguration */
	static readonly UpdateMediaStorageConfiguration =
		"kinesisvideo:UpdateMediaStorageConfiguration";
	/** [Write] kinesisvideo:UpdateNotificationConfiguration */
	static readonly UpdateNotificationConfiguration =
		"kinesisvideo:UpdateNotificationConfiguration";
	/** [Write] kinesisvideo:UpdateSignalingChannel */
	static readonly UpdateSignalingChannel =
		"kinesisvideo:UpdateSignalingChannel";
	/** [Write] kinesisvideo:UpdateStream */
	static readonly UpdateStream = "kinesisvideo:UpdateStream";
	/** [Write] kinesisvideo:UpdateStreamStorageConfiguration */
	static readonly UpdateStreamStorageConfiguration =
		"kinesisvideo:UpdateStreamStorageConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KinesisvideoActions.DescribeEdgeConfiguration,
		KinesisvideoActions.DescribeImageGenerationConfiguration,
		KinesisvideoActions.DescribeMediaStorageConfiguration,
		KinesisvideoActions.DescribeNotificationConfiguration,
		KinesisvideoActions.DescribeStreamStorageConfiguration,
		KinesisvideoActions.actionGetClip,
		KinesisvideoActions.actionGetDASHStreamingSessionURL,
		KinesisvideoActions.actionGetDataEndpoint,
		KinesisvideoActions.actionGetHLSStreamingSessionURL,
		KinesisvideoActions.actionGetIceServerConfig,
		KinesisvideoActions.actionGetImages,
		KinesisvideoActions.actionGetMedia,
		KinesisvideoActions.actionGetMediaForFragmentList,
		KinesisvideoActions.actionGetSignalingChannelEndpoint,
		KinesisvideoActions.ListTagsForResource,
		KinesisvideoActions.ListTagsForStream,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KinesisvideoActions.ConnectAsMaster,
		KinesisvideoActions.ConnectAsViewer,
		KinesisvideoActions.CreateSignalingChannel,
		KinesisvideoActions.CreateStream,
		KinesisvideoActions.DeleteEdgeConfiguration,
		KinesisvideoActions.DeleteSignalingChannel,
		KinesisvideoActions.DeleteStream,
		KinesisvideoActions.JoinStorageSession,
		KinesisvideoActions.JoinStorageSessionAsViewer,
		KinesisvideoActions.PutMedia,
		KinesisvideoActions.SendAlexaOfferToMaster,
		KinesisvideoActions.StartEdgeConfigurationUpdate,
		KinesisvideoActions.UpdateDataRetention,
		KinesisvideoActions.UpdateImageGenerationConfiguration,
		KinesisvideoActions.UpdateMediaStorageConfiguration,
		KinesisvideoActions.UpdateNotificationConfiguration,
		KinesisvideoActions.UpdateSignalingChannel,
		KinesisvideoActions.UpdateStream,
		KinesisvideoActions.UpdateStreamStorageConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KinesisvideoActions.DescribeMappedResourceConfiguration,
		KinesisvideoActions.DescribeSignalingChannel,
		KinesisvideoActions.DescribeStream,
		KinesisvideoActions.ListEdgeAgentConfigurations,
		KinesisvideoActions.ListFragments,
		KinesisvideoActions.ListSignalingChannels,
		KinesisvideoActions.ListStreams,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KinesisvideoActions.TagResource,
		KinesisvideoActions.TagStream,
		KinesisvideoActions.UntagResource,
		KinesisvideoActions.UntagStream,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface KinesisvideoChannelArnProps {
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
}

/**
 * Parsed components of a channel ARN.
 */
export interface KinesisvideoChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelName component. */
	readonly channelName: string;
	/** The CreationTime component. */
	readonly creationTime: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface KinesisvideoStreamArnProps {
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
}

/**
 * Parsed components of a stream ARN.
 */
export interface KinesisvideoStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamName component. */
	readonly streamName: string;
	/** The CreationTime component. */
	readonly creationTime: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):kinesisvideo:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelName>[^:/?]+)\/(?<creationTime>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):kinesisvideo:(?<region>[^:]*):(?<account>[^:]*):stream\/(?<streamName>[^:/?]+)\/(?<creationTime>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kinesisvideo resources.
 */
export class KinesisvideoResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: KinesisvideoChannelArnProps): string {
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
	static parseChannelArn(arn: string): KinesisvideoChannelArnComponents {
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
	static stream(props: KinesisvideoStreamArnProps): string {
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
	static parseStreamArn(arn: string): KinesisvideoStreamArnComponents {
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
	static readonly CreateSignalingChannel: string[] = [
		"kinesisvideo:CreateSignalingChannel",
		"kinesisvideo:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CreateStream: string[] = [
		"kinesisvideo:CreateStream",
		"kinesisvideo:TagStream",
	];
	/** IAM actions required for the DeleteEdgeConfiguration API call. */
	static readonly DeleteEdgeConfiguration: string[] = [
		"kinesisvideo:DeleteEdgeConfiguration",
	];
	/** IAM actions required for the DeleteSignalingChannel API call. */
	static readonly DeleteSignalingChannel: string[] = [
		"kinesisvideo:DeleteSignalingChannel",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DeleteStream: string[] = ["kinesisvideo:DeleteStream"];
	/** IAM actions required for the DescribeEdgeConfiguration API call. */
	static readonly DescribeEdgeConfiguration: string[] = [
		"kinesisvideo:DescribeEdgeConfiguration",
	];
	/** IAM actions required for the DescribeImageGenerationConfiguration API call. */
	static readonly DescribeImageGenerationConfiguration: string[] = [
		"kinesisvideo:DescribeImageGenerationConfiguration",
	];
	/** IAM actions required for the DescribeMappedResourceConfiguration API call. */
	static readonly DescribeMappedResourceConfiguration: string[] = [
		"kinesisvideo:DescribeMappedResourceConfiguration",
	];
	/** IAM actions required for the DescribeMediaStorageConfiguration API call. */
	static readonly DescribeMediaStorageConfiguration: string[] = [
		"kinesisvideo:DescribeMediaStorageConfiguration",
	];
	/** IAM actions required for the DescribeNotificationConfiguration API call. */
	static readonly DescribeNotificationConfiguration: string[] = [
		"kinesisvideo:DescribeNotificationConfiguration",
	];
	/** IAM actions required for the DescribeSignalingChannel API call. */
	static readonly DescribeSignalingChannel: string[] = [
		"kinesisvideo:DescribeSignalingChannel",
	];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DescribeStream: string[] = ["kinesisvideo:DescribeStream"];
	/** IAM actions required for the DescribeStreamStorageConfiguration API call. */
	static readonly DescribeStreamStorageConfiguration: string[] = [
		"kinesisvideo:DescribeStreamStorageConfiguration",
	];
	/** IAM actions required for the GetClip API call. */
	static readonly opGetClip: string[] = ["kinesisvideo:GetClip"];
	/** IAM actions required for the GetDASHStreamingSessionURL API call. */
	static readonly opGetDASHStreamingSessionURL: string[] = [
		"kinesisvideo:GetDASHStreamingSessionURL",
	];
	/** IAM actions required for the GetDataEndpoint API call. */
	static readonly opGetDataEndpoint: string[] = [
		"kinesisvideo:GetDataEndpoint",
	];
	/** IAM actions required for the GetHLSStreamingSessionURL API call. */
	static readonly opGetHLSStreamingSessionURL: string[] = [
		"kinesisvideo:GetHLSStreamingSessionURL",
	];
	/** IAM actions required for the GetIceServerConfig API call. */
	static readonly opGetIceServerConfig: string[] = [
		"kinesisvideo:GetIceServerConfig",
	];
	/** IAM actions required for the GetImages API call. */
	static readonly opGetImages: string[] = ["kinesisvideo:GetImages"];
	/** IAM actions required for the GetMedia API call. */
	static readonly opGetMedia: string[] = ["kinesisvideo:GetMedia"];
	/** IAM actions required for the GetMediaForFragmentList API call. */
	static readonly opGetMediaForFragmentList: string[] = [
		"kinesisvideo:GetMediaForFragmentList",
	];
	/** IAM actions required for the GetSignalingChannelEndpoint API call. */
	static readonly opGetSignalingChannelEndpoint: string[] = [
		"kinesisvideo:GetSignalingChannelEndpoint",
	];
	/** IAM actions required for the JoinStorageSession API call. */
	static readonly JoinStorageSession: string[] = [
		"kinesisvideo:JoinStorageSession",
	];
	/** IAM actions required for the JoinStorageSessionAsViewer API call. */
	static readonly JoinStorageSessionAsViewer: string[] = [
		"kinesisvideo:JoinStorageSessionAsViewer",
	];
	/** IAM actions required for the ListEdgeAgentConfigurations API call. */
	static readonly ListEdgeAgentConfigurations: string[] = [
		"kinesisvideo:ListEdgeAgentConfigurations",
	];
	/** IAM actions required for the ListFragments API call. */
	static readonly ListFragments: string[] = ["kinesisvideo:ListFragments"];
	/** IAM actions required for the ListSignalingChannels API call. */
	static readonly ListSignalingChannels: string[] = [
		"kinesisvideo:ListSignalingChannels",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["kinesisvideo:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kinesisvideo:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForStream API call. */
	static readonly ListTagsForStream: string[] = [
		"kinesisvideo:ListTagsForStream",
	];
	/** IAM actions required for the SendAlexaOfferToMaster API call. */
	static readonly SendAlexaOfferToMaster: string[] = [
		"kinesisvideo:SendAlexaOfferToMaster",
	];
	/** IAM actions required for the StartEdgeConfigurationUpdate API call. */
	static readonly StartEdgeConfigurationUpdate: string[] = [
		"kinesisvideo:StartEdgeConfigurationUpdate",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kinesisvideo:TagResource"];
	/** IAM actions required for the TagStream API call. */
	static readonly TagStream: string[] = ["kinesisvideo:TagStream"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kinesisvideo:UntagResource"];
	/** IAM actions required for the UntagStream API call. */
	static readonly UntagStream: string[] = ["kinesisvideo:UntagStream"];
	/** IAM actions required for the UpdateDataRetention API call. */
	static readonly UpdateDataRetention: string[] = [
		"kinesisvideo:UpdateDataRetention",
	];
	/** IAM actions required for the UpdateImageGenerationConfiguration API call. */
	static readonly UpdateImageGenerationConfiguration: string[] = [
		"kinesisvideo:UpdateImageGenerationConfiguration",
	];
	/** IAM actions required for the UpdateMediaStorageConfiguration API call. */
	static readonly UpdateMediaStorageConfiguration: string[] = [
		"kinesisvideo:UpdateMediaStorageConfiguration",
	];
	/** IAM actions required for the UpdateNotificationConfiguration API call. */
	static readonly UpdateNotificationConfiguration: string[] = [
		"kinesisvideo:UpdateNotificationConfiguration",
	];
	/** IAM actions required for the UpdateSignalingChannel API call. */
	static readonly UpdateSignalingChannel: string[] = [
		"kinesisvideo:UpdateSignalingChannel",
	];
	/** IAM actions required for the UpdateStream API call. */
	static readonly UpdateStream: string[] = ["kinesisvideo:UpdateStream"];
	/** IAM actions required for the UpdateStreamStorageConfiguration API call. */
	static readonly UpdateStreamStorageConfiguration: string[] = [
		"kinesisvideo:UpdateStreamStorageConfiguration",
	];
}

/**
 * Condition key constants and builders for kinesisvideo.
 */
export class KinesisvideoConditions {
	/** Condition keys applicable to the CreateSignalingChannel action. */
	static readonly CreateSignalingChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CreateStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagStream action. */
	static readonly TagStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagStream action. */
	static readonly UntagStreamConditionKeys: string[] = ["aws:TagKeys"];

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
