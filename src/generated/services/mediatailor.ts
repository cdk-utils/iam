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
	static readonly ConfigureLogsForChannel =
		"mediatailor:ConfigureLogsForChannel";
	/** [Write] mediatailor:ConfigureLogsForPlaybackConfiguration */
	static readonly ConfigureLogsForPlaybackConfiguration =
		"mediatailor:ConfigureLogsForPlaybackConfiguration";
	/** [Write] mediatailor:CreateChannel */
	static readonly CreateChannel = "mediatailor:CreateChannel";
	/** [Write] mediatailor:CreateLiveSource */
	static readonly CreateLiveSource = "mediatailor:CreateLiveSource";
	/** [Write] mediatailor:CreatePrefetchSchedule */
	static readonly CreatePrefetchSchedule = "mediatailor:CreatePrefetchSchedule";
	/** [Write] mediatailor:CreateProgram */
	static readonly CreateProgram = "mediatailor:CreateProgram";
	/** [Write] mediatailor:CreateSourceLocation */
	static readonly CreateSourceLocation = "mediatailor:CreateSourceLocation";
	/** [Write] mediatailor:CreateVodSource */
	static readonly CreateVodSource = "mediatailor:CreateVodSource";
	/** [Write] mediatailor:DeleteChannel */
	static readonly DeleteChannel = "mediatailor:DeleteChannel";
	/** [PermissionManagement] mediatailor:DeleteChannelPolicy */
	static readonly DeleteChannelPolicy = "mediatailor:DeleteChannelPolicy";
	/** [Write] mediatailor:DeleteLiveSource */
	static readonly DeleteLiveSource = "mediatailor:DeleteLiveSource";
	/** [Write] mediatailor:DeletePlaybackConfiguration */
	static readonly DeletePlaybackConfiguration =
		"mediatailor:DeletePlaybackConfiguration";
	/** [Write] mediatailor:DeletePrefetchSchedule */
	static readonly DeletePrefetchSchedule = "mediatailor:DeletePrefetchSchedule";
	/** [Write] mediatailor:DeleteProgram */
	static readonly DeleteProgram = "mediatailor:DeleteProgram";
	/** [Write] mediatailor:DeleteSourceLocation */
	static readonly DeleteSourceLocation = "mediatailor:DeleteSourceLocation";
	/** [Write] mediatailor:DeleteVodSource */
	static readonly DeleteVodSource = "mediatailor:DeleteVodSource";
	/** [Read] mediatailor:DescribeChannel */
	static readonly DescribeChannel = "mediatailor:DescribeChannel";
	/** [Read] mediatailor:DescribeLiveSource */
	static readonly DescribeLiveSource = "mediatailor:DescribeLiveSource";
	/** [Read] mediatailor:DescribeProgram */
	static readonly DescribeProgram = "mediatailor:DescribeProgram";
	/** [Read] mediatailor:DescribeSourceLocation */
	static readonly DescribeSourceLocation = "mediatailor:DescribeSourceLocation";
	/** [Read] mediatailor:DescribeVodSource */
	static readonly DescribeVodSource = "mediatailor:DescribeVodSource";
	/** [Read] mediatailor:GetChannelPolicy */
	static readonly actionGetChannelPolicy = "mediatailor:GetChannelPolicy";
	/** [Read] mediatailor:GetChannelSchedule */
	static readonly actionGetChannelSchedule = "mediatailor:GetChannelSchedule";
	/** [Read] mediatailor:GetPlaybackConfiguration */
	static readonly actionGetPlaybackConfiguration =
		"mediatailor:GetPlaybackConfiguration";
	/** [Read] mediatailor:GetPrefetchSchedule */
	static readonly actionGetPrefetchSchedule = "mediatailor:GetPrefetchSchedule";
	/** [Read] mediatailor:ListAlerts */
	static readonly ListAlerts = "mediatailor:ListAlerts";
	/** [Read] mediatailor:ListChannels */
	static readonly ListChannels = "mediatailor:ListChannels";
	/** [Read] mediatailor:ListLiveSources */
	static readonly ListLiveSources = "mediatailor:ListLiveSources";
	/** [List] mediatailor:ListPlaybackConfigurations */
	static readonly ListPlaybackConfigurations =
		"mediatailor:ListPlaybackConfigurations";
	/** [List] mediatailor:ListPrefetchSchedules */
	static readonly ListPrefetchSchedules = "mediatailor:ListPrefetchSchedules";
	/** [Read] mediatailor:ListSourceLocations */
	static readonly ListSourceLocations = "mediatailor:ListSourceLocations";
	/** [Read] mediatailor:ListTagsForResource */
	static readonly ListTagsForResource = "mediatailor:ListTagsForResource";
	/** [Read] mediatailor:ListVodSources */
	static readonly ListVodSources = "mediatailor:ListVodSources";
	/** [PermissionManagement] mediatailor:PutChannelPolicy */
	static readonly PutChannelPolicy = "mediatailor:PutChannelPolicy";
	/** [Write] mediatailor:PutPlaybackConfiguration */
	static readonly PutPlaybackConfiguration =
		"mediatailor:PutPlaybackConfiguration";
	/** [Write] mediatailor:StartChannel */
	static readonly StartChannel = "mediatailor:StartChannel";
	/** [Write] mediatailor:StopChannel */
	static readonly StopChannel = "mediatailor:StopChannel";
	/** [Tagging] mediatailor:TagResource */
	static readonly TagResource = "mediatailor:TagResource";
	/** [Tagging] mediatailor:UntagResource */
	static readonly UntagResource = "mediatailor:UntagResource";
	/** [Write] mediatailor:UpdateChannel */
	static readonly UpdateChannel = "mediatailor:UpdateChannel";
	/** [Write] mediatailor:UpdateLiveSource */
	static readonly UpdateLiveSource = "mediatailor:UpdateLiveSource";
	/** [Write] mediatailor:UpdateProgram */
	static readonly UpdateProgram = "mediatailor:UpdateProgram";
	/** [Write] mediatailor:UpdateSourceLocation */
	static readonly UpdateSourceLocation = "mediatailor:UpdateSourceLocation";
	/** [Write] mediatailor:UpdateVodSource */
	static readonly UpdateVodSource = "mediatailor:UpdateVodSource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediaTailorActions.DescribeChannel,
		MediaTailorActions.DescribeLiveSource,
		MediaTailorActions.DescribeProgram,
		MediaTailorActions.DescribeSourceLocation,
		MediaTailorActions.DescribeVodSource,
		MediaTailorActions.actionGetChannelPolicy,
		MediaTailorActions.actionGetChannelSchedule,
		MediaTailorActions.actionGetPlaybackConfiguration,
		MediaTailorActions.actionGetPrefetchSchedule,
		MediaTailorActions.ListAlerts,
		MediaTailorActions.ListChannels,
		MediaTailorActions.ListLiveSources,
		MediaTailorActions.ListSourceLocations,
		MediaTailorActions.ListTagsForResource,
		MediaTailorActions.ListVodSources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaTailorActions.ConfigureLogsForChannel,
		MediaTailorActions.ConfigureLogsForPlaybackConfiguration,
		MediaTailorActions.CreateChannel,
		MediaTailorActions.CreateLiveSource,
		MediaTailorActions.CreatePrefetchSchedule,
		MediaTailorActions.CreateProgram,
		MediaTailorActions.CreateSourceLocation,
		MediaTailorActions.CreateVodSource,
		MediaTailorActions.DeleteChannel,
		MediaTailorActions.DeleteLiveSource,
		MediaTailorActions.DeletePlaybackConfiguration,
		MediaTailorActions.DeletePrefetchSchedule,
		MediaTailorActions.DeleteProgram,
		MediaTailorActions.DeleteSourceLocation,
		MediaTailorActions.DeleteVodSource,
		MediaTailorActions.PutPlaybackConfiguration,
		MediaTailorActions.StartChannel,
		MediaTailorActions.StopChannel,
		MediaTailorActions.UpdateChannel,
		MediaTailorActions.UpdateLiveSource,
		MediaTailorActions.UpdateProgram,
		MediaTailorActions.UpdateSourceLocation,
		MediaTailorActions.UpdateVodSource,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MediaTailorActions.ListPlaybackConfigurations,
		MediaTailorActions.ListPrefetchSchedules,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		MediaTailorActions.DeleteChannelPolicy,
		MediaTailorActions.PutChannelPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediaTailorActions.TagResource,
		MediaTailorActions.UntagResource,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface MediaTailorChannelArnProps {
	/** The ChannelName component of the ARN. */
	readonly channelName: string;
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
export interface MediaTailorChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelName component. */
	readonly channelName: string;
}

/**
 * Properties for building a liveSource ARN.
 */
export interface MediaTailorLiveSourceArnProps {
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
}

/**
 * Parsed components of a liveSource ARN.
 */
export interface MediaTailorLiveSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceLocationName component. */
	readonly sourceLocationName: string;
	/** The LiveSourceName component. */
	readonly liveSourceName: string;
}

/**
 * Properties for building a playbackConfiguration ARN.
 */
export interface MediaTailorPlaybackConfigurationArnProps {
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
 * Parsed components of a playbackConfiguration ARN.
 */
export interface MediaTailorPlaybackConfigurationArnComponents {
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
 * Properties for building a prefetchSchedule ARN.
 */
export interface MediaTailorPrefetchScheduleArnProps {
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
 * Parsed components of a prefetchSchedule ARN.
 */
export interface MediaTailorPrefetchScheduleArnComponents {
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
 * Properties for building a program ARN.
 */
export interface MediaTailorProgramArnProps {
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
}

/**
 * Parsed components of a program ARN.
 */
export interface MediaTailorProgramArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelName component. */
	readonly channelName: string;
	/** The ProgramName component. */
	readonly programName: string;
}

/**
 * Properties for building a sourceLocation ARN.
 */
export interface MediaTailorSourceLocationArnProps {
	/** The SourceLocationName component of the ARN. */
	readonly sourceLocationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sourceLocation ARN.
 */
export interface MediaTailorSourceLocationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceLocationName component. */
	readonly sourceLocationName: string;
}

/**
 * Properties for building a vodSource ARN.
 */
export interface MediaTailorVodSourceArnProps {
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
}

/**
 * Parsed components of a vodSource ARN.
 */
export interface MediaTailorVodSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceLocationName component. */
	readonly sourceLocationName: string;
	/** The VodSourceName component. */
	readonly vodSourceName: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelName>[^:/?]+)$/;
const LiveSourceArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):liveSource\/(?<sourceLocationName>[^:/?]+)\/(?<liveSourceName>[^:/?]+)$/;
const PlaybackConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):playbackConfiguration\/(?<resourceId>[^:/?]+)$/;
const PrefetchScheduleArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):prefetchSchedule\/(?<resourceId>[^:/?]+)$/;
const ProgramArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):program\/(?<channelName>[^:/?]+)\/(?<programName>[^:/?]+)$/;
const SourceLocationArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):sourceLocation\/(?<sourceLocationName>[^:/?]+)$/;
const VodSourceArnRegex =
	/^arn:(?<partition>[^:]+):mediatailor:(?<region>[^:]*):(?<account>[^:]*):vodSource\/(?<sourceLocationName>[^:/?]+)\/(?<vodSourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediatailor resources.
 */
export class MediaTailorResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: MediaTailorChannelArnProps): string {
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
	static parseChannelArn(arn: string): MediaTailorChannelArnComponents {
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
	static liveSource(props: MediaTailorLiveSourceArnProps): string {
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
	static parseLiveSourceArn(arn: string): MediaTailorLiveSourceArnComponents {
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
	static playbackConfiguration(
		props: MediaTailorPlaybackConfigurationArnProps,
	): string {
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
	static parsePlaybackConfigurationArn(
		arn: string,
	): MediaTailorPlaybackConfigurationArnComponents {
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
	static prefetchSchedule(props: MediaTailorPrefetchScheduleArnProps): string {
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
	static parsePrefetchScheduleArn(
		arn: string,
	): MediaTailorPrefetchScheduleArnComponents {
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
	static program(props: MediaTailorProgramArnProps): string {
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
	static parseProgramArn(arn: string): MediaTailorProgramArnComponents {
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
	static sourceLocation(props: MediaTailorSourceLocationArnProps): string {
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
	static parseSourceLocationArn(
		arn: string,
	): MediaTailorSourceLocationArnComponents {
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
	static vodSource(props: MediaTailorVodSourceArnProps): string {
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
	static parseVodSourceArn(arn: string): MediaTailorVodSourceArnComponents {
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
	static readonly ConfigureLogsForChannel: string[] = [
		"mediatailor:ConfigureLogsForChannel",
	];
	/** IAM actions required for the ConfigureLogsForPlaybackConfiguration API call. */
	static readonly ConfigureLogsForPlaybackConfiguration: string[] = [
		"mediatailor:ConfigureLogsForPlaybackConfiguration",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"mediatailor:CreateChannel",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateLiveSource API call. */
	static readonly CreateLiveSource: string[] = [
		"mediatailor:CreateLiveSource",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreatePrefetchSchedule API call. */
	static readonly CreatePrefetchSchedule: string[] = [
		"mediatailor:CreatePrefetchSchedule",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateProgram API call. */
	static readonly CreateProgram: string[] = [
		"mediatailor:CreateProgram",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateSourceLocation API call. */
	static readonly CreateSourceLocation: string[] = [
		"mediatailor:CreateSourceLocation",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the CreateVodSource API call. */
	static readonly CreateVodSource: string[] = [
		"mediatailor:CreateVodSource",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["mediatailor:DeleteChannel"];
	/** IAM actions required for the DeleteChannelPolicy API call. */
	static readonly DeleteChannelPolicy: string[] = [
		"mediatailor:DeleteChannelPolicy",
	];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DeleteFunction: string[] = [];
	/** IAM actions required for the DeleteLiveSource API call. */
	static readonly DeleteLiveSource: string[] = ["mediatailor:DeleteLiveSource"];
	/** IAM actions required for the DeletePlaybackConfiguration API call. */
	static readonly DeletePlaybackConfiguration: string[] = [
		"mediatailor:DeletePlaybackConfiguration",
	];
	/** IAM actions required for the DeletePrefetchSchedule API call. */
	static readonly DeletePrefetchSchedule: string[] = [
		"mediatailor:DeletePrefetchSchedule",
	];
	/** IAM actions required for the DeleteProgram API call. */
	static readonly DeleteProgram: string[] = ["mediatailor:DeleteProgram"];
	/** IAM actions required for the DeleteSourceLocation API call. */
	static readonly DeleteSourceLocation: string[] = [
		"mediatailor:DeleteSourceLocation",
	];
	/** IAM actions required for the DeleteVodSource API call. */
	static readonly DeleteVodSource: string[] = ["mediatailor:DeleteVodSource"];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DescribeChannel: string[] = ["mediatailor:DescribeChannel"];
	/** IAM actions required for the DescribeLiveSource API call. */
	static readonly DescribeLiveSource: string[] = [
		"mediatailor:DescribeLiveSource",
	];
	/** IAM actions required for the DescribeProgram API call. */
	static readonly DescribeProgram: string[] = ["mediatailor:DescribeProgram"];
	/** IAM actions required for the DescribeSourceLocation API call. */
	static readonly DescribeSourceLocation: string[] = [
		"mediatailor:DescribeSourceLocation",
	];
	/** IAM actions required for the DescribeVodSource API call. */
	static readonly DescribeVodSource: string[] = [
		"mediatailor:DescribeVodSource",
	];
	/** IAM actions required for the GetChannelPolicy API call. */
	static readonly opGetChannelPolicy: string[] = [
		"mediatailor:GetChannelPolicy",
	];
	/** IAM actions required for the GetChannelSchedule API call. */
	static readonly opGetChannelSchedule: string[] = [
		"mediatailor:GetChannelSchedule",
	];
	/** IAM actions required for the GetFunction API call. */
	static readonly opGetFunction: string[] = [];
	/** IAM actions required for the GetPlaybackConfiguration API call. */
	static readonly opGetPlaybackConfiguration: string[] = [
		"mediatailor:GetPlaybackConfiguration",
	];
	/** IAM actions required for the GetPrefetchSchedule API call. */
	static readonly opGetPrefetchSchedule: string[] = [
		"mediatailor:GetPrefetchSchedule",
	];
	/** IAM actions required for the ListAlerts API call. */
	static readonly ListAlerts: string[] = ["mediatailor:ListAlerts"];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["mediatailor:ListChannels"];
	/** IAM actions required for the ListFunctions API call. */
	static readonly ListFunctions: string[] = [];
	/** IAM actions required for the ListLiveSources API call. */
	static readonly ListLiveSources: string[] = ["mediatailor:ListLiveSources"];
	/** IAM actions required for the ListPlaybackConfigurations API call. */
	static readonly ListPlaybackConfigurations: string[] = [
		"mediatailor:ListPlaybackConfigurations",
	];
	/** IAM actions required for the ListPrefetchSchedules API call. */
	static readonly ListPrefetchSchedules: string[] = [
		"mediatailor:ListPrefetchSchedules",
	];
	/** IAM actions required for the ListSourceLocations API call. */
	static readonly ListSourceLocations: string[] = [
		"mediatailor:ListSourceLocations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediatailor:ListTagsForResource",
	];
	/** IAM actions required for the ListVodSources API call. */
	static readonly ListVodSources: string[] = ["mediatailor:ListVodSources"];
	/** IAM actions required for the PutChannelPolicy API call. */
	static readonly PutChannelPolicy: string[] = ["mediatailor:PutChannelPolicy"];
	/** IAM actions required for the PutFunction API call. */
	static readonly PutFunction: string[] = ["mediatailor:TagResource"];
	/** IAM actions required for the PutPlaybackConfiguration API call. */
	static readonly PutPlaybackConfiguration: string[] = [
		"mediatailor:PutPlaybackConfiguration",
		"mediatailor:TagResource",
	];
	/** IAM actions required for the StartChannel API call. */
	static readonly StartChannel: string[] = ["mediatailor:StartChannel"];
	/** IAM actions required for the StopChannel API call. */
	static readonly StopChannel: string[] = ["mediatailor:StopChannel"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediatailor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediatailor:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["mediatailor:UpdateChannel"];
	/** IAM actions required for the UpdateLiveSource API call. */
	static readonly UpdateLiveSource: string[] = ["mediatailor:UpdateLiveSource"];
	/** IAM actions required for the UpdateProgram API call. */
	static readonly UpdateProgram: string[] = ["mediatailor:UpdateProgram"];
	/** IAM actions required for the UpdateSourceLocation API call. */
	static readonly UpdateSourceLocation: string[] = [
		"mediatailor:UpdateSourceLocation",
	];
	/** IAM actions required for the UpdateVodSource API call. */
	static readonly UpdateVodSource: string[] = ["mediatailor:UpdateVodSource"];
}

/**
 * Condition key constants and builders for mediatailor.
 */
export class MediaTailorConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLiveSource action. */
	static readonly CreateLiveSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSourceLocation action. */
	static readonly CreateSourceLocationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVodSource action. */
	static readonly CreateVodSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutPlaybackConfiguration action. */
	static readonly PutPlaybackConfigurationConditionKeys: string[] = [
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
