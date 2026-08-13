// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediatailor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediatailor service.
 */
export class MediaTailorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediatailor";

	/** [Write] mediatailor:ConfigureLogsForChannel */
	static readonly CONFIGURE_LOGS_FOR_CHANNEL =
		"mediatailor:ConfigureLogsForChannel";
	/** [Write] mediatailor:ConfigureLogsForPlaybackConfiguration */
	static readonly CONFIGURE_LOGS_FOR_PLAYBACK_CONFIGURATION =
		"mediatailor:ConfigureLogsForPlaybackConfiguration";
	/** [Write] mediatailor:CreateChannel */
	static readonly CREATE_CHANNEL = "mediatailor:CreateChannel";
	/** [Write] mediatailor:CreateLiveSource */
	static readonly CREATE_LIVE_SOURCE = "mediatailor:CreateLiveSource";
	/** [Write] mediatailor:CreatePrefetchSchedule */
	static readonly CREATE_PREFETCH_SCHEDULE =
		"mediatailor:CreatePrefetchSchedule";
	/** [Write] mediatailor:CreateProgram */
	static readonly CREATE_PROGRAM = "mediatailor:CreateProgram";
	/** [Write] mediatailor:CreateSourceLocation */
	static readonly CREATE_SOURCE_LOCATION = "mediatailor:CreateSourceLocation";
	/** [Write] mediatailor:CreateVodSource */
	static readonly CREATE_VOD_SOURCE = "mediatailor:CreateVodSource";
	/** [Write] mediatailor:DeleteChannel */
	static readonly DELETE_CHANNEL = "mediatailor:DeleteChannel";
	/** [PermissionManagement] mediatailor:DeleteChannelPolicy */
	static readonly DELETE_CHANNEL_POLICY = "mediatailor:DeleteChannelPolicy";
	/** [Write] mediatailor:DeleteLiveSource */
	static readonly DELETE_LIVE_SOURCE = "mediatailor:DeleteLiveSource";
	/** [Write] mediatailor:DeletePlaybackConfiguration */
	static readonly DELETE_PLAYBACK_CONFIGURATION =
		"mediatailor:DeletePlaybackConfiguration";
	/** [Write] mediatailor:DeletePrefetchSchedule */
	static readonly DELETE_PREFETCH_SCHEDULE =
		"mediatailor:DeletePrefetchSchedule";
	/** [Write] mediatailor:DeleteProgram */
	static readonly DELETE_PROGRAM = "mediatailor:DeleteProgram";
	/** [Write] mediatailor:DeleteSourceLocation */
	static readonly DELETE_SOURCE_LOCATION = "mediatailor:DeleteSourceLocation";
	/** [Write] mediatailor:DeleteVodSource */
	static readonly DELETE_VOD_SOURCE = "mediatailor:DeleteVodSource";
	/** [Read] mediatailor:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "mediatailor:DescribeChannel";
	/** [Read] mediatailor:DescribeLiveSource */
	static readonly DESCRIBE_LIVE_SOURCE = "mediatailor:DescribeLiveSource";
	/** [Read] mediatailor:DescribeProgram */
	static readonly DESCRIBE_PROGRAM = "mediatailor:DescribeProgram";
	/** [Read] mediatailor:DescribeSourceLocation */
	static readonly DESCRIBE_SOURCE_LOCATION =
		"mediatailor:DescribeSourceLocation";
	/** [Read] mediatailor:DescribeVodSource */
	static readonly DESCRIBE_VOD_SOURCE = "mediatailor:DescribeVodSource";
	/** [Read] mediatailor:GetChannelPolicy */
	static readonly GET_CHANNEL_POLICY = "mediatailor:GetChannelPolicy";
	/** [Read] mediatailor:GetChannelSchedule */
	static readonly GET_CHANNEL_SCHEDULE = "mediatailor:GetChannelSchedule";
	/** [Read] mediatailor:GetPlaybackConfiguration */
	static readonly GET_PLAYBACK_CONFIGURATION =
		"mediatailor:GetPlaybackConfiguration";
	/** [Read] mediatailor:GetPrefetchSchedule */
	static readonly GET_PREFETCH_SCHEDULE = "mediatailor:GetPrefetchSchedule";
	/** [Read] mediatailor:ListAlerts */
	static readonly LIST_ALERTS = "mediatailor:ListAlerts";
	/** [Read] mediatailor:ListChannels */
	static readonly LIST_CHANNELS = "mediatailor:ListChannels";
	/** [Read] mediatailor:ListLiveSources */
	static readonly LIST_LIVE_SOURCES = "mediatailor:ListLiveSources";
	/** [List] mediatailor:ListPlaybackConfigurations */
	static readonly LIST_PLAYBACK_CONFIGURATIONS =
		"mediatailor:ListPlaybackConfigurations";
	/** [List] mediatailor:ListPrefetchSchedules */
	static readonly LIST_PREFETCH_SCHEDULES = "mediatailor:ListPrefetchSchedules";
	/** [Read] mediatailor:ListSourceLocations */
	static readonly LIST_SOURCE_LOCATIONS = "mediatailor:ListSourceLocations";
	/** [Read] mediatailor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediatailor:ListTagsForResource";
	/** [Read] mediatailor:ListVodSources */
	static readonly LIST_VOD_SOURCES = "mediatailor:ListVodSources";
	/** [PermissionManagement] mediatailor:PutChannelPolicy */
	static readonly PUT_CHANNEL_POLICY = "mediatailor:PutChannelPolicy";
	/** [Write] mediatailor:PutPlaybackConfiguration */
	static readonly PUT_PLAYBACK_CONFIGURATION =
		"mediatailor:PutPlaybackConfiguration";
	/** [Write] mediatailor:StartChannel */
	static readonly START_CHANNEL = "mediatailor:StartChannel";
	/** [Write] mediatailor:StopChannel */
	static readonly STOP_CHANNEL = "mediatailor:StopChannel";
	/** [Tagging] mediatailor:TagResource */
	static readonly TAG_RESOURCE = "mediatailor:TagResource";
	/** [Tagging] mediatailor:UntagResource */
	static readonly UNTAG_RESOURCE = "mediatailor:UntagResource";
	/** [Write] mediatailor:UpdateChannel */
	static readonly UPDATE_CHANNEL = "mediatailor:UpdateChannel";
	/** [Write] mediatailor:UpdateLiveSource */
	static readonly UPDATE_LIVE_SOURCE = "mediatailor:UpdateLiveSource";
	/** [Write] mediatailor:UpdateProgram */
	static readonly UPDATE_PROGRAM = "mediatailor:UpdateProgram";
	/** [Write] mediatailor:UpdateSourceLocation */
	static readonly UPDATE_SOURCE_LOCATION = "mediatailor:UpdateSourceLocation";
	/** [Write] mediatailor:UpdateVodSource */
	static readonly UPDATE_VOD_SOURCE = "mediatailor:UpdateVodSource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaTailorActions.DESCRIBE_CHANNEL,
		MediaTailorActions.DESCRIBE_LIVE_SOURCE,
		MediaTailorActions.DESCRIBE_PROGRAM,
		MediaTailorActions.DESCRIBE_SOURCE_LOCATION,
		MediaTailorActions.DESCRIBE_VOD_SOURCE,
		MediaTailorActions.GET_CHANNEL_POLICY,
		MediaTailorActions.GET_CHANNEL_SCHEDULE,
		MediaTailorActions.GET_PLAYBACK_CONFIGURATION,
		MediaTailorActions.GET_PREFETCH_SCHEDULE,
		MediaTailorActions.LIST_ALERTS,
		MediaTailorActions.LIST_CHANNELS,
		MediaTailorActions.LIST_LIVE_SOURCES,
		MediaTailorActions.LIST_SOURCE_LOCATIONS,
		MediaTailorActions.LIST_TAGS_FOR_RESOURCE,
		MediaTailorActions.LIST_VOD_SOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaTailorActions.CONFIGURE_LOGS_FOR_CHANNEL,
		MediaTailorActions.CONFIGURE_LOGS_FOR_PLAYBACK_CONFIGURATION,
		MediaTailorActions.CREATE_CHANNEL,
		MediaTailorActions.CREATE_LIVE_SOURCE,
		MediaTailorActions.CREATE_PREFETCH_SCHEDULE,
		MediaTailorActions.CREATE_PROGRAM,
		MediaTailorActions.CREATE_SOURCE_LOCATION,
		MediaTailorActions.CREATE_VOD_SOURCE,
		MediaTailorActions.DELETE_CHANNEL,
		MediaTailorActions.DELETE_LIVE_SOURCE,
		MediaTailorActions.DELETE_PLAYBACK_CONFIGURATION,
		MediaTailorActions.DELETE_PREFETCH_SCHEDULE,
		MediaTailorActions.DELETE_PROGRAM,
		MediaTailorActions.DELETE_SOURCE_LOCATION,
		MediaTailorActions.DELETE_VOD_SOURCE,
		MediaTailorActions.PUT_PLAYBACK_CONFIGURATION,
		MediaTailorActions.START_CHANNEL,
		MediaTailorActions.STOP_CHANNEL,
		MediaTailorActions.UPDATE_CHANNEL,
		MediaTailorActions.UPDATE_LIVE_SOURCE,
		MediaTailorActions.UPDATE_PROGRAM,
		MediaTailorActions.UPDATE_SOURCE_LOCATION,
		MediaTailorActions.UPDATE_VOD_SOURCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediaTailorActions.LIST_PLAYBACK_CONFIGURATIONS,
		MediaTailorActions.LIST_PREFETCH_SCHEDULES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		MediaTailorActions.DELETE_CHANNEL_POLICY,
		MediaTailorActions.PUT_CHANNEL_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaTailorActions.TAG_RESOURCE,
		MediaTailorActions.UNTAG_RESOURCE,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):channel/(?<channelName>[^:/?]+)$",
);
const LiveSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):liveSource/(?<sourceLocationName>[^:/?]+)/(?<liveSourceName>[^:/?]+)$",
);
const PlaybackConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):playbackConfiguration/(?<resourceId>[^:/?]+)$",
);
const PrefetchScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):prefetchSchedule/(?<resourceId>[^:/?]+)$",
);
const ProgramArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):program/(?<channelName>[^:/?]+)/(?<programName>[^:/?]+)$",
);
const SourceLocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):sourceLocation/(?<sourceLocationName>[^:/?]+)$",
);
const VodSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):vodSource/(?<sourceLocationName>[^:/?]+)/(?<vodSourceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediatailor resources.
 */
export class MediaTailorResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelName}`;
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
		};
	}

	/**
	 * Builds an ARN for the liveSource resource.
	 */
	static liveSource(props: {
		/** The SourceLocationName component of the ARN. */
		readonly sourceLocationName: string;
		/** The LiveSourceName component of the ARN. */
		readonly liveSourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:liveSource/${props.sourceLocationName}/${props.liveSourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the liveSource resource.
	 */
	static isValidLiveSourceArn(arn: string): boolean {
		return LiveSourceArnRegex.test(arn);
	}

	/**
	 * Parses a liveSource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLiveSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceLocationName: string;
		liveSourceName: string;
	} {
		const match = LiveSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid liveSource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceLocationName: match.groups!.sourceLocationName,
			liveSourceName: match.groups!.liveSourceName,
		};
	}

	/**
	 * Builds an ARN for the playbackConfiguration resource.
	 */
	static playbackConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:playbackConfiguration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the playbackConfiguration resource.
	 */
	static isValidPlaybackConfigurationArn(arn: string): boolean {
		return PlaybackConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a playbackConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlaybackConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = PlaybackConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid playbackConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the prefetchSchedule resource.
	 */
	static prefetchSchedule(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:prefetchSchedule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the prefetchSchedule resource.
	 */
	static isValidPrefetchScheduleArn(arn: string): boolean {
		return PrefetchScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a prefetchSchedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrefetchScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = PrefetchScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid prefetchSchedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the program resource.
	 */
	static program(props: {
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The ProgramName component of the ARN. */
		readonly programName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:program/${props.channelName}/${props.programName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the program resource.
	 */
	static isValidProgramArn(arn: string): boolean {
		return ProgramArnRegex.test(arn);
	}

	/**
	 * Parses a program ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProgramArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelName: string;
		programName: string;
	} {
		const match = ProgramArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid program ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelName: match.groups!.channelName,
			programName: match.groups!.programName,
		};
	}

	/**
	 * Builds an ARN for the sourceLocation resource.
	 */
	static sourceLocation(props: {
		/** The SourceLocationName component of the ARN. */
		readonly sourceLocationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:sourceLocation/${props.sourceLocationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sourceLocation resource.
	 */
	static isValidSourceLocationArn(arn: string): boolean {
		return SourceLocationArnRegex.test(arn);
	}

	/**
	 * Parses a sourceLocation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceLocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceLocationName: string;
	} {
		const match = SourceLocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sourceLocation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceLocationName: match.groups!.sourceLocationName,
		};
	}

	/**
	 * Builds an ARN for the vodSource resource.
	 */
	static vodSource(props: {
		/** The SourceLocationName component of the ARN. */
		readonly sourceLocationName: string;
		/** The VodSourceName component of the ARN. */
		readonly vodSourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediatailor:${props.region ?? "*"}:${props.account ?? "*"}:vodSource/${props.sourceLocationName}/${props.vodSourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vodSource resource.
	 */
	static isValidVodSourceArn(arn: string): boolean {
		return VodSourceArnRegex.test(arn);
	}

	/**
	 * Parses a vodSource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVodSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceLocationName: string;
		vodSourceName: string;
	} {
		const match = VodSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vodSource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceLocationName: match.groups!.sourceLocationName,
			vodSourceName: match.groups!.vodSourceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediatailor.
 */
export class MediaTailorOperations {
	/** IAM actions required for the ConfigureLogsForChannel API call. */
	static readonly CONFIGURE_LOGS_FOR_CHANNEL: string[] = [
		"mediatailor:ConfigureLogsForChannel",
	];
	/** IAM actions required for the ConfigureLogsForPlaybackConfiguration API call. */
	static readonly CONFIGURE_LOGS_FOR_PLAYBACK_CONFIGURATION: string[] = [
		"mediatailor:ConfigureLogsForPlaybackConfiguration",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"mediatailor:CreateChannel",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateLiveSource API call. */
	static readonly CREATE_LIVE_SOURCE: string[] = [
		"mediatailor:CreateLiveSource",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreatePrefetchSchedule API call. */
	static readonly CREATE_PREFETCH_SCHEDULE: string[] = [
		"mediatailor:CreatePrefetchSchedule",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateProgram API call. */
	static readonly CREATE_PROGRAM: string[] = [
		"mediatailor:CreateProgram",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateSourceLocation API call. */
	static readonly CREATE_SOURCE_LOCATION: string[] = [
		"mediatailor:CreateSourceLocation",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateVodSource API call. */
	static readonly CREATE_VOD_SOURCE: string[] = [
		"mediatailor:CreateVodSource",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["mediatailor:DeleteChannel"];
	/** IAM actions required for the DeleteChannelPolicy API call. */
	static readonly DELETE_CHANNEL_POLICY: string[] = [
		"mediatailor:DeleteChannelPolicy",
	];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DELETE_FUNCTION: string[] = [];
	/** IAM actions required for the DeleteLiveSource API call. */
	static readonly DELETE_LIVE_SOURCE: string[] = [
		"mediatailor:DeleteLiveSource",
	];
	/** IAM actions required for the DeletePlaybackConfiguration API call. */
	static readonly DELETE_PLAYBACK_CONFIGURATION: string[] = [
		"mediatailor:DeletePlaybackConfiguration",
	];
	/** IAM actions required for the DeletePrefetchSchedule API call. */
	static readonly DELETE_PREFETCH_SCHEDULE: string[] = [
		"mediatailor:DeletePrefetchSchedule",
	];
	/** IAM actions required for the DeleteProgram API call. */
	static readonly DELETE_PROGRAM: string[] = ["mediatailor:DeleteProgram"];
	/** IAM actions required for the DeleteSourceLocation API call. */
	static readonly DELETE_SOURCE_LOCATION: string[] = [
		"mediatailor:DeleteSourceLocation",
	];
	/** IAM actions required for the DeleteVodSource API call. */
	static readonly DELETE_VOD_SOURCE: string[] = ["mediatailor:DeleteVodSource"];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DESCRIBE_CHANNEL: string[] = ["mediatailor:DescribeChannel"];
	/** IAM actions required for the DescribeLiveSource API call. */
	static readonly DESCRIBE_LIVE_SOURCE: string[] = [
		"mediatailor:DescribeLiveSource",
	];
	/** IAM actions required for the DescribeProgram API call. */
	static readonly DESCRIBE_PROGRAM: string[] = ["mediatailor:DescribeProgram"];
	/** IAM actions required for the DescribeSourceLocation API call. */
	static readonly DESCRIBE_SOURCE_LOCATION: string[] = [
		"mediatailor:DescribeSourceLocation",
	];
	/** IAM actions required for the DescribeVodSource API call. */
	static readonly DESCRIBE_VOD_SOURCE: string[] = [
		"mediatailor:DescribeVodSource",
	];
	/** IAM actions required for the GetChannelPolicy API call. */
	static readonly GET_CHANNEL_POLICY: string[] = [
		"mediatailor:GetChannelPolicy",
	];
	/** IAM actions required for the GetChannelSchedule API call. */
	static readonly GET_CHANNEL_SCHEDULE: string[] = [
		"mediatailor:GetChannelSchedule",
	];
	/** IAM actions required for the GetFunction API call. */
	static readonly GET_FUNCTION: string[] = [];
	/** IAM actions required for the GetPlaybackConfiguration API call. */
	static readonly GET_PLAYBACK_CONFIGURATION: string[] = [
		"mediatailor:GetPlaybackConfiguration",
	];
	/** IAM actions required for the GetPrefetchSchedule API call. */
	static readonly GET_PREFETCH_SCHEDULE: string[] = [
		"mediatailor:GetPrefetchSchedule",
	];
	/** IAM actions required for the ListAlerts API call. */
	static readonly LIST_ALERTS: string[] = ["mediatailor:ListAlerts"];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["mediatailor:ListChannels"];
	/** IAM actions required for the ListFunctions API call. */
	static readonly LIST_FUNCTIONS: string[] = [];
	/** IAM actions required for the ListLiveSources API call. */
	static readonly LIST_LIVE_SOURCES: string[] = ["mediatailor:ListLiveSources"];
	/** IAM actions required for the ListPlaybackConfigurations API call. */
	static readonly LIST_PLAYBACK_CONFIGURATIONS: string[] = [
		"mediatailor:ListPlaybackConfigurations",
	];
	/** IAM actions required for the ListPrefetchSchedules API call. */
	static readonly LIST_PREFETCH_SCHEDULES: string[] = [
		"mediatailor:ListPrefetchSchedules",
	];
	/** IAM actions required for the ListSourceLocations API call. */
	static readonly LIST_SOURCE_LOCATIONS: string[] = [
		"mediatailor:ListSourceLocations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediatailor:ListTagsForResource",
	];
	/** IAM actions required for the ListVodSources API call. */
	static readonly LIST_VOD_SOURCES: string[] = ["mediatailor:ListVodSources"];
	/** IAM actions required for the PutChannelPolicy API call. */
	static readonly PUT_CHANNEL_POLICY: string[] = [
		"mediatailor:PutChannelPolicy",
	];
	/** IAM actions required for the PutFunction API call. */
	static readonly PUT_FUNCTION: string[] = ["mediatailor:TagResource"];
	/** IAM actions required for the PutPlaybackConfiguration API call. */
	static readonly PUT_PLAYBACK_CONFIGURATION: string[] = [
		"mediatailor:PutPlaybackConfiguration",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the StartChannel API call. */
	static readonly START_CHANNEL: string[] = ["mediatailor:StartChannel"];
	/** IAM actions required for the StopChannel API call. */
	static readonly STOP_CHANNEL: string[] = ["mediatailor:StopChannel"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediatailor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediatailor:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["mediatailor:UpdateChannel"];
	/** IAM actions required for the UpdateLiveSource API call. */
	static readonly UPDATE_LIVE_SOURCE: string[] = [
		"mediatailor:UpdateLiveSource",
	];
	/** IAM actions required for the UpdateProgram API call. */
	static readonly UPDATE_PROGRAM: string[] = ["mediatailor:UpdateProgram"];
	/** IAM actions required for the UpdateSourceLocation API call. */
	static readonly UPDATE_SOURCE_LOCATION: string[] = [
		"mediatailor:UpdateSourceLocation",
	];
	/** IAM actions required for the UpdateVodSource API call. */
	static readonly UPDATE_VOD_SOURCE: string[] = ["mediatailor:UpdateVodSource"];
}

/**
 * Condition key constants and builders for mediatailor.
 */
export class MediaTailorConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLiveSource action. */
	static readonly CREATE_LIVE_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSourceLocation action. */
	static readonly CREATE_SOURCE_LOCATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVodSource action. */
	static readonly CREATE_VOD_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutPlaybackConfiguration action. */
	static readonly PUT_PLAYBACK_CONFIGURATION_CONDITION_KEYS: string[] = [
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
