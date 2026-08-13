// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ivs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ivs service.
 */
export class IvsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ivs";

	/** [Read] ivs:BatchGetChannel */
	static readonly BatchGetChannel = "ivs:BatchGetChannel";
	/** [Read] ivs:BatchGetStreamKey */
	static readonly BatchGetStreamKey = "ivs:BatchGetStreamKey";
	/** [Write] ivs:BatchStartViewerSessionRevocation */
	static readonly BatchStartViewerSessionRevocation =
		"ivs:BatchStartViewerSessionRevocation";
	/** [Write] ivs:CreateAdConfiguration */
	static readonly CreateAdConfiguration = "ivs:CreateAdConfiguration";
	/** [Write] ivs:CreateChannel */
	static readonly CreateChannel = "ivs:CreateChannel";
	/** [Write] ivs:CreateEncoderConfiguration */
	static readonly CreateEncoderConfiguration = "ivs:CreateEncoderConfiguration";
	/** [Write] ivs:CreateIngestConfiguration */
	static readonly CreateIngestConfiguration = "ivs:CreateIngestConfiguration";
	/** [Write] ivs:CreateParticipantToken */
	static readonly CreateParticipantToken = "ivs:CreateParticipantToken";
	/** [Write] ivs:CreatePlaybackRestrictionPolicy */
	static readonly CreatePlaybackRestrictionPolicy =
		"ivs:CreatePlaybackRestrictionPolicy";
	/** [Write] ivs:CreateRecordingConfiguration */
	static readonly CreateRecordingConfiguration =
		"ivs:CreateRecordingConfiguration";
	/** [Write] ivs:CreateStage */
	static readonly CreateStage = "ivs:CreateStage";
	/** [Write] ivs:CreateStorageConfiguration */
	static readonly CreateStorageConfiguration = "ivs:CreateStorageConfiguration";
	/** [Write] ivs:CreateStreamKey */
	static readonly CreateStreamKey = "ivs:CreateStreamKey";
	/** [Write] ivs:DeleteAdConfiguration */
	static readonly DeleteAdConfiguration = "ivs:DeleteAdConfiguration";
	/** [Write] ivs:DeleteChannel */
	static readonly DeleteChannel = "ivs:DeleteChannel";
	/** [Write] ivs:DeleteEncoderConfiguration */
	static readonly DeleteEncoderConfiguration = "ivs:DeleteEncoderConfiguration";
	/** [Write] ivs:DeleteIngestConfiguration */
	static readonly DeleteIngestConfiguration = "ivs:DeleteIngestConfiguration";
	/** [Write] ivs:DeletePlaybackKeyPair */
	static readonly DeletePlaybackKeyPair = "ivs:DeletePlaybackKeyPair";
	/** [Write] ivs:DeletePlaybackRestrictionPolicy */
	static readonly DeletePlaybackRestrictionPolicy =
		"ivs:DeletePlaybackRestrictionPolicy";
	/** [Write] ivs:DeletePublicKey */
	static readonly DeletePublicKey = "ivs:DeletePublicKey";
	/** [Write] ivs:DeleteRecordingConfiguration */
	static readonly DeleteRecordingConfiguration =
		"ivs:DeleteRecordingConfiguration";
	/** [Write] ivs:DeleteStage */
	static readonly DeleteStage = "ivs:DeleteStage";
	/** [Write] ivs:DeleteStorageConfiguration */
	static readonly DeleteStorageConfiguration = "ivs:DeleteStorageConfiguration";
	/** [Write] ivs:DeleteStreamKey */
	static readonly DeleteStreamKey = "ivs:DeleteStreamKey";
	/** [Write] ivs:DisconnectParticipant */
	static readonly DisconnectParticipant = "ivs:DisconnectParticipant";
	/** [Read] ivs:GetAdConfiguration */
	static readonly actionGetAdConfiguration = "ivs:GetAdConfiguration";
	/** [Read] ivs:GetChannel */
	static readonly actionGetChannel = "ivs:GetChannel";
	/** [Read] ivs:GetComposition */
	static readonly actionGetComposition = "ivs:GetComposition";
	/** [Read] ivs:GetEncoderConfiguration */
	static readonly actionGetEncoderConfiguration = "ivs:GetEncoderConfiguration";
	/** [Read] ivs:GetIngestConfiguration */
	static readonly actionGetIngestConfiguration = "ivs:GetIngestConfiguration";
	/** [Read] ivs:GetParticipant */
	static readonly actionGetParticipant = "ivs:GetParticipant";
	/** [Read] ivs:GetPlaybackKeyPair */
	static readonly actionGetPlaybackKeyPair = "ivs:GetPlaybackKeyPair";
	/** [Read] ivs:GetPlaybackRestrictionPolicy */
	static readonly actionGetPlaybackRestrictionPolicy =
		"ivs:GetPlaybackRestrictionPolicy";
	/** [Read] ivs:GetPublicKey */
	static readonly actionGetPublicKey = "ivs:GetPublicKey";
	/** [Read] ivs:GetRecordingConfiguration */
	static readonly actionGetRecordingConfiguration =
		"ivs:GetRecordingConfiguration";
	/** [Read] ivs:GetStage */
	static readonly actionGetStage = "ivs:GetStage";
	/** [Read] ivs:GetStageSession */
	static readonly actionGetStageSession = "ivs:GetStageSession";
	/** [Read] ivs:GetStorageConfiguration */
	static readonly actionGetStorageConfiguration = "ivs:GetStorageConfiguration";
	/** [Read] ivs:GetStream */
	static readonly actionGetStream = "ivs:GetStream";
	/** [Read] ivs:GetStreamKey */
	static readonly actionGetStreamKey = "ivs:GetStreamKey";
	/** [Read] ivs:GetStreamSession */
	static readonly actionGetStreamSession = "ivs:GetStreamSession";
	/** [Write] ivs:ImportPlaybackKeyPair */
	static readonly ImportPlaybackKeyPair = "ivs:ImportPlaybackKeyPair";
	/** [Write] ivs:ImportPublicKey */
	static readonly ImportPublicKey = "ivs:ImportPublicKey";
	/** [Write] ivs:InsertAdBreak */
	static readonly InsertAdBreak = "ivs:InsertAdBreak";
	/** [List] ivs:ListAdConfigurations */
	static readonly ListAdConfigurations = "ivs:ListAdConfigurations";
	/** [List] ivs:ListChannels */
	static readonly ListChannels = "ivs:ListChannels";
	/** [List] ivs:ListCompositions */
	static readonly ListCompositions = "ivs:ListCompositions";
	/** [List] ivs:ListEncoderConfigurations */
	static readonly ListEncoderConfigurations = "ivs:ListEncoderConfigurations";
	/** [List] ivs:ListIngestConfigurations */
	static readonly ListIngestConfigurations = "ivs:ListIngestConfigurations";
	/** [List] ivs:ListParticipantEvents */
	static readonly ListParticipantEvents = "ivs:ListParticipantEvents";
	/** [List] ivs:ListParticipantReplicas */
	static readonly ListParticipantReplicas = "ivs:ListParticipantReplicas";
	/** [List] ivs:ListParticipants */
	static readonly ListParticipants = "ivs:ListParticipants";
	/** [List] ivs:ListPlaybackKeyPairs */
	static readonly ListPlaybackKeyPairs = "ivs:ListPlaybackKeyPairs";
	/** [List] ivs:ListPlaybackRestrictionPolicies */
	static readonly ListPlaybackRestrictionPolicies =
		"ivs:ListPlaybackRestrictionPolicies";
	/** [List] ivs:ListPublicKeys */
	static readonly ListPublicKeys = "ivs:ListPublicKeys";
	/** [List] ivs:ListRecordingConfigurations */
	static readonly ListRecordingConfigurations =
		"ivs:ListRecordingConfigurations";
	/** [List] ivs:ListStageSessions */
	static readonly ListStageSessions = "ivs:ListStageSessions";
	/** [List] ivs:ListStages */
	static readonly ListStages = "ivs:ListStages";
	/** [List] ivs:ListStorageConfigurations */
	static readonly ListStorageConfigurations = "ivs:ListStorageConfigurations";
	/** [List] ivs:ListStreamKeys */
	static readonly ListStreamKeys = "ivs:ListStreamKeys";
	/** [List] ivs:ListStreamSessions */
	static readonly ListStreamSessions = "ivs:ListStreamSessions";
	/** [List] ivs:ListStreams */
	static readonly ListStreams = "ivs:ListStreams";
	/** [Read] ivs:ListTagsForResource */
	static readonly ListTagsForResource = "ivs:ListTagsForResource";
	/** [Write] ivs:PutMetadata */
	static readonly PutMetadata = "ivs:PutMetadata";
	/** [Write] ivs:StartComposition */
	static readonly StartComposition = "ivs:StartComposition";
	/** [Write] ivs:StartParticipantReplication */
	static readonly StartParticipantReplication =
		"ivs:StartParticipantReplication";
	/** [Write] ivs:StartViewerSessionRevocation */
	static readonly StartViewerSessionRevocation =
		"ivs:StartViewerSessionRevocation";
	/** [Write] ivs:StopComposition */
	static readonly StopComposition = "ivs:StopComposition";
	/** [Write] ivs:StopParticipantReplication */
	static readonly StopParticipantReplication = "ivs:StopParticipantReplication";
	/** [Write] ivs:StopStream */
	static readonly StopStream = "ivs:StopStream";
	/** [Tagging] ivs:TagResource */
	static readonly TagResource = "ivs:TagResource";
	/** [Tagging] ivs:UntagResource */
	static readonly UntagResource = "ivs:UntagResource";
	/** [Write] ivs:UpdateAdConfiguration */
	static readonly UpdateAdConfiguration = "ivs:UpdateAdConfiguration";
	/** [Write] ivs:UpdateChannel */
	static readonly UpdateChannel = "ivs:UpdateChannel";
	/** [Write] ivs:UpdateIngestConfiguration */
	static readonly UpdateIngestConfiguration = "ivs:UpdateIngestConfiguration";
	/** [Write] ivs:UpdatePlaybackRestrictionPolicy */
	static readonly UpdatePlaybackRestrictionPolicy =
		"ivs:UpdatePlaybackRestrictionPolicy";
	/** [Write] ivs:UpdateStage */
	static readonly UpdateStage = "ivs:UpdateStage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IvsActions.BatchGetChannel,
		IvsActions.BatchGetStreamKey,
		IvsActions.actionGetAdConfiguration,
		IvsActions.actionGetChannel,
		IvsActions.actionGetComposition,
		IvsActions.actionGetEncoderConfiguration,
		IvsActions.actionGetIngestConfiguration,
		IvsActions.actionGetParticipant,
		IvsActions.actionGetPlaybackKeyPair,
		IvsActions.actionGetPlaybackRestrictionPolicy,
		IvsActions.actionGetPublicKey,
		IvsActions.actionGetRecordingConfiguration,
		IvsActions.actionGetStage,
		IvsActions.actionGetStageSession,
		IvsActions.actionGetStorageConfiguration,
		IvsActions.actionGetStream,
		IvsActions.actionGetStreamKey,
		IvsActions.actionGetStreamSession,
		IvsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IvsActions.BatchStartViewerSessionRevocation,
		IvsActions.CreateAdConfiguration,
		IvsActions.CreateChannel,
		IvsActions.CreateEncoderConfiguration,
		IvsActions.CreateIngestConfiguration,
		IvsActions.CreateParticipantToken,
		IvsActions.CreatePlaybackRestrictionPolicy,
		IvsActions.CreateRecordingConfiguration,
		IvsActions.CreateStage,
		IvsActions.CreateStorageConfiguration,
		IvsActions.CreateStreamKey,
		IvsActions.DeleteAdConfiguration,
		IvsActions.DeleteChannel,
		IvsActions.DeleteEncoderConfiguration,
		IvsActions.DeleteIngestConfiguration,
		IvsActions.DeletePlaybackKeyPair,
		IvsActions.DeletePlaybackRestrictionPolicy,
		IvsActions.DeletePublicKey,
		IvsActions.DeleteRecordingConfiguration,
		IvsActions.DeleteStage,
		IvsActions.DeleteStorageConfiguration,
		IvsActions.DeleteStreamKey,
		IvsActions.DisconnectParticipant,
		IvsActions.ImportPlaybackKeyPair,
		IvsActions.ImportPublicKey,
		IvsActions.InsertAdBreak,
		IvsActions.PutMetadata,
		IvsActions.StartComposition,
		IvsActions.StartParticipantReplication,
		IvsActions.StartViewerSessionRevocation,
		IvsActions.StopComposition,
		IvsActions.StopParticipantReplication,
		IvsActions.StopStream,
		IvsActions.UpdateAdConfiguration,
		IvsActions.UpdateChannel,
		IvsActions.UpdateIngestConfiguration,
		IvsActions.UpdatePlaybackRestrictionPolicy,
		IvsActions.UpdateStage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IvsActions.ListAdConfigurations,
		IvsActions.ListChannels,
		IvsActions.ListCompositions,
		IvsActions.ListEncoderConfigurations,
		IvsActions.ListIngestConfigurations,
		IvsActions.ListParticipantEvents,
		IvsActions.ListParticipantReplicas,
		IvsActions.ListParticipants,
		IvsActions.ListPlaybackKeyPairs,
		IvsActions.ListPlaybackRestrictionPolicies,
		IvsActions.ListPublicKeys,
		IvsActions.ListRecordingConfigurations,
		IvsActions.ListStageSessions,
		IvsActions.ListStages,
		IvsActions.ListStorageConfigurations,
		IvsActions.ListStreamKeys,
		IvsActions.ListStreamSessions,
		IvsActions.ListStreams,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IvsActions.TagResource,
		IvsActions.UntagResource,
	];
}

/**
 * Properties for building a Ad-Configuration ARN.
 */
export interface IvsAdConfigurationArnProps {
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
 * Parsed components of a Ad-Configuration ARN.
 */
export interface IvsAdConfigurationArnComponents {
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
 * Properties for building a Channel ARN.
 */
export interface IvsChannelArnProps {
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
 * Parsed components of a Channel ARN.
 */
export interface IvsChannelArnComponents {
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
 * Properties for building a Composition ARN.
 */
export interface IvsCompositionArnProps {
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
 * Parsed components of a Composition ARN.
 */
export interface IvsCompositionArnComponents {
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
 * Properties for building a Encoder-Configuration ARN.
 */
export interface IvsEncoderConfigurationArnProps {
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
 * Parsed components of a Encoder-Configuration ARN.
 */
export interface IvsEncoderConfigurationArnComponents {
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
 * Properties for building a Ingest-Configuration ARN.
 */
export interface IvsIngestConfigurationArnProps {
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
 * Parsed components of a Ingest-Configuration ARN.
 */
export interface IvsIngestConfigurationArnComponents {
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
 * Properties for building a Playback-Key-Pair ARN.
 */
export interface IvsPlaybackKeyPairArnProps {
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
 * Parsed components of a Playback-Key-Pair ARN.
 */
export interface IvsPlaybackKeyPairArnComponents {
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
 * Properties for building a Playback-Restriction-Policy ARN.
 */
export interface IvsPlaybackRestrictionPolicyArnProps {
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
 * Parsed components of a Playback-Restriction-Policy ARN.
 */
export interface IvsPlaybackRestrictionPolicyArnComponents {
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
 * Properties for building a Public-Key ARN.
 */
export interface IvsPublicKeyArnProps {
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
 * Parsed components of a Public-Key ARN.
 */
export interface IvsPublicKeyArnComponents {
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
 * Properties for building a Recording-Configuration ARN.
 */
export interface IvsRecordingConfigurationArnProps {
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
 * Parsed components of a Recording-Configuration ARN.
 */
export interface IvsRecordingConfigurationArnComponents {
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
 * Properties for building a Stage ARN.
 */
export interface IvsStageArnProps {
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
 * Parsed components of a Stage ARN.
 */
export interface IvsStageArnComponents {
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
 * Properties for building a Storage-Configuration ARN.
 */
export interface IvsStorageConfigurationArnProps {
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
 * Parsed components of a Storage-Configuration ARN.
 */
export interface IvsStorageConfigurationArnComponents {
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
 * Properties for building a Stream-Key ARN.
 */
export interface IvsStreamKeyArnProps {
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
 * Parsed components of a Stream-Key ARN.
 */
export interface IvsStreamKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AdConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):ad-configuration\/(?<resourceId>[^:/?]+)$/;
const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<resourceId>[^:/?]+)$/;
const CompositionArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):composition\/(?<resourceId>[^:/?]+)$/;
const EncoderConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):encoder-configuration\/(?<resourceId>[^:/?]+)$/;
const IngestConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):ingest-configuration\/(?<resourceId>[^:/?]+)$/;
const PlaybackKeyPairArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):playback-key\/(?<resourceId>[^:/?]+)$/;
const PlaybackRestrictionPolicyArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):playback-restriction-policy\/(?<resourceId>[^:/?]+)$/;
const PublicKeyArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):public-key\/(?<resourceId>[^:/?]+)$/;
const RecordingConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):recording-configuration\/(?<resourceId>[^:/?]+)$/;
const StageArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):stage\/(?<resourceId>[^:/?]+)$/;
const StorageConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):storage-configuration\/(?<resourceId>[^:/?]+)$/;
const StreamKeyArnRegex =
	/^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):stream-key\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ivs resources.
 */
export class IvsResources {
	/**
	 * Builds an ARN for the Ad-Configuration resource.
	 */
	static adConfiguration(props: IvsAdConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:ad-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Ad-Configuration resource.
	 */
	static isValidAdConfigurationArn(arn: string): boolean {
		return AdConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Ad-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdConfigurationArn(arn: string): IvsAdConfigurationArnComponents {
		const match = AdConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Ad-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Channel resource.
	 */
	static channel(props: IvsChannelArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a Channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): IvsChannelArnComponents {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Composition resource.
	 */
	static composition(props: IvsCompositionArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:composition/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Composition resource.
	 */
	static isValidCompositionArn(arn: string): boolean {
		return CompositionArnRegex.test(arn);
	}

	/**
	 * Parses a Composition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCompositionArn(arn: string): IvsCompositionArnComponents {
		const match = CompositionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Composition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Encoder-Configuration resource.
	 */
	static encoderConfiguration(props: IvsEncoderConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:encoder-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Encoder-Configuration resource.
	 */
	static isValidEncoderConfigurationArn(arn: string): boolean {
		return EncoderConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Encoder-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEncoderConfigurationArn(
		arn: string,
	): IvsEncoderConfigurationArnComponents {
		const match = EncoderConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Encoder-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Ingest-Configuration resource.
	 */
	static ingestConfiguration(props: IvsIngestConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:ingest-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Ingest-Configuration resource.
	 */
	static isValidIngestConfigurationArn(arn: string): boolean {
		return IngestConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Ingest-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIngestConfigurationArn(
		arn: string,
	): IvsIngestConfigurationArnComponents {
		const match = IngestConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Ingest-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Playback-Key-Pair resource.
	 */
	static playbackKeyPair(props: IvsPlaybackKeyPairArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:playback-key/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Playback-Key-Pair resource.
	 */
	static isValidPlaybackKeyPairArn(arn: string): boolean {
		return PlaybackKeyPairArnRegex.test(arn);
	}

	/**
	 * Parses a Playback-Key-Pair ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlaybackKeyPairArn(arn: string): IvsPlaybackKeyPairArnComponents {
		const match = PlaybackKeyPairArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Playback-Key-Pair ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Playback-Restriction-Policy resource.
	 */
	static playbackRestrictionPolicy(
		props: IvsPlaybackRestrictionPolicyArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:playback-restriction-policy/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Playback-Restriction-Policy resource.
	 */
	static isValidPlaybackRestrictionPolicyArn(arn: string): boolean {
		return PlaybackRestrictionPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a Playback-Restriction-Policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlaybackRestrictionPolicyArn(
		arn: string,
	): IvsPlaybackRestrictionPolicyArnComponents {
		const match = PlaybackRestrictionPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Playback-Restriction-Policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Public-Key resource.
	 */
	static publicKey(props: IvsPublicKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:public-key/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Public-Key resource.
	 */
	static isValidPublicKeyArn(arn: string): boolean {
		return PublicKeyArnRegex.test(arn);
	}

	/**
	 * Parses a Public-Key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePublicKeyArn(arn: string): IvsPublicKeyArnComponents {
		const match = PublicKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Public-Key ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Recording-Configuration resource.
	 */
	static recordingConfiguration(
		props: IvsRecordingConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:recording-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Recording-Configuration resource.
	 */
	static isValidRecordingConfigurationArn(arn: string): boolean {
		return RecordingConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Recording-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecordingConfigurationArn(
		arn: string,
	): IvsRecordingConfigurationArnComponents {
		const match = RecordingConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Recording-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Stage resource.
	 */
	static stage(props: IvsStageArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:stage/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Stage resource.
	 */
	static isValidStageArn(arn: string): boolean {
		return StageArnRegex.test(arn);
	}

	/**
	 * Parses a Stage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStageArn(arn: string): IvsStageArnComponents {
		const match = StageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Stage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Storage-Configuration resource.
	 */
	static storageConfiguration(props: IvsStorageConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:storage-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Storage-Configuration resource.
	 */
	static isValidStorageConfigurationArn(arn: string): boolean {
		return StorageConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Storage-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStorageConfigurationArn(
		arn: string,
	): IvsStorageConfigurationArnComponents {
		const match = StorageConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Storage-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Stream-Key resource.
	 */
	static streamKey(props: IvsStreamKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:ivs:${props.region ?? "*"}:${props.account ?? "*"}:stream-key/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Stream-Key resource.
	 */
	static isValidStreamKeyArn(arn: string): boolean {
		return StreamKeyArnRegex.test(arn);
	}

	/**
	 * Parses a Stream-Key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamKeyArn(arn: string): IvsStreamKeyArnComponents {
		const match = StreamKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Stream-Key ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for ivs.
 */
export class IvsOperations {
	/** IAM actions required for the BatchGetChannel API call. */
	static readonly BatchGetChannel: string[] = ["ivs:BatchGetChannel"];
	/** IAM actions required for the BatchGetStreamKey API call. */
	static readonly BatchGetStreamKey: string[] = ["ivs:BatchGetStreamKey"];
	/** IAM actions required for the BatchStartViewerSessionRevocation API call. */
	static readonly BatchStartViewerSessionRevocation: string[] = [
		"ivs:BatchStartViewerSessionRevocation",
	];
	/** IAM actions required for the CreateAdConfiguration API call. */
	static readonly CreateAdConfiguration: string[] = [
		"ivs:CreateAdConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"ivs:CreateChannel",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateEncoderConfiguration API call. */
	static readonly CreateEncoderConfiguration: string[] = [
		"ivs:CreateEncoderConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateIngestConfiguration API call. */
	static readonly CreateIngestConfiguration: string[] = [
		"ivs:CreateIngestConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateParticipantToken API call. */
	static readonly CreateParticipantToken: string[] = [
		"ivs:CreateParticipantToken",
	];
	/** IAM actions required for the CreatePlaybackRestrictionPolicy API call. */
	static readonly CreatePlaybackRestrictionPolicy: string[] = [
		"ivs:CreatePlaybackRestrictionPolicy",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateRecordingConfiguration API call. */
	static readonly CreateRecordingConfiguration: string[] = [
		"ivs:CreateRecordingConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStage API call. */
	static readonly CreateStage: string[] = [
		"ivs:CreateStage",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStorageConfiguration API call. */
	static readonly CreateStorageConfiguration: string[] = [
		"ivs:CreateStorageConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStreamKey API call. */
	static readonly CreateStreamKey: string[] = [
		"ivs:CreateStreamKey",
		"ivs:TagResource",
	];
	/** IAM actions required for the DeleteAdConfiguration API call. */
	static readonly DeleteAdConfiguration: string[] = [
		"ivs:DeleteAdConfiguration",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["ivs:DeleteChannel"];
	/** IAM actions required for the DeleteEncoderConfiguration API call. */
	static readonly DeleteEncoderConfiguration: string[] = [
		"ivs:DeleteEncoderConfiguration",
	];
	/** IAM actions required for the DeleteIngestConfiguration API call. */
	static readonly DeleteIngestConfiguration: string[] = [
		"ivs:DeleteIngestConfiguration",
	];
	/** IAM actions required for the DeletePlaybackKeyPair API call. */
	static readonly DeletePlaybackKeyPair: string[] = [
		"ivs:DeletePlaybackKeyPair",
	];
	/** IAM actions required for the DeletePlaybackRestrictionPolicy API call. */
	static readonly DeletePlaybackRestrictionPolicy: string[] = [
		"ivs:DeletePlaybackRestrictionPolicy",
	];
	/** IAM actions required for the DeletePublicKey API call. */
	static readonly DeletePublicKey: string[] = ["ivs:DeletePublicKey"];
	/** IAM actions required for the DeleteRecordingConfiguration API call. */
	static readonly DeleteRecordingConfiguration: string[] = [
		"ivs:DeleteRecordingConfiguration",
	];
	/** IAM actions required for the DeleteStage API call. */
	static readonly DeleteStage: string[] = ["ivs:DeleteStage"];
	/** IAM actions required for the DeleteStorageConfiguration API call. */
	static readonly DeleteStorageConfiguration: string[] = [
		"ivs:DeleteStorageConfiguration",
	];
	/** IAM actions required for the DeleteStreamKey API call. */
	static readonly DeleteStreamKey: string[] = ["ivs:DeleteStreamKey"];
	/** IAM actions required for the DisconnectParticipant API call. */
	static readonly DisconnectParticipant: string[] = [
		"ivs:DisconnectParticipant",
	];
	/** IAM actions required for the GetAdConfiguration API call. */
	static readonly opGetAdConfiguration: string[] = ["ivs:GetAdConfiguration"];
	/** IAM actions required for the GetChannel API call. */
	static readonly opGetChannel: string[] = ["ivs:GetChannel"];
	/** IAM actions required for the GetComposition API call. */
	static readonly opGetComposition: string[] = ["ivs:GetComposition"];
	/** IAM actions required for the GetEncoderConfiguration API call. */
	static readonly opGetEncoderConfiguration: string[] = [
		"ivs:GetEncoderConfiguration",
	];
	/** IAM actions required for the GetIngestConfiguration API call. */
	static readonly opGetIngestConfiguration: string[] = [
		"ivs:GetIngestConfiguration",
	];
	/** IAM actions required for the GetParticipant API call. */
	static readonly opGetParticipant: string[] = ["ivs:GetParticipant"];
	/** IAM actions required for the GetPlaybackKeyPair API call. */
	static readonly opGetPlaybackKeyPair: string[] = ["ivs:GetPlaybackKeyPair"];
	/** IAM actions required for the GetPlaybackRestrictionPolicy API call. */
	static readonly opGetPlaybackRestrictionPolicy: string[] = [
		"ivs:GetPlaybackRestrictionPolicy",
	];
	/** IAM actions required for the GetPublicKey API call. */
	static readonly opGetPublicKey: string[] = ["ivs:GetPublicKey"];
	/** IAM actions required for the GetRecordingConfiguration API call. */
	static readonly opGetRecordingConfiguration: string[] = [
		"ivs:GetRecordingConfiguration",
	];
	/** IAM actions required for the GetStage API call. */
	static readonly opGetStage: string[] = ["ivs:GetStage"];
	/** IAM actions required for the GetStageSession API call. */
	static readonly opGetStageSession: string[] = ["ivs:GetStageSession"];
	/** IAM actions required for the GetStorageConfiguration API call. */
	static readonly opGetStorageConfiguration: string[] = [
		"ivs:GetStorageConfiguration",
	];
	/** IAM actions required for the GetStream API call. */
	static readonly opGetStream: string[] = ["ivs:GetStream"];
	/** IAM actions required for the GetStreamKey API call. */
	static readonly opGetStreamKey: string[] = ["ivs:GetStreamKey"];
	/** IAM actions required for the GetStreamSession API call. */
	static readonly opGetStreamSession: string[] = ["ivs:GetStreamSession"];
	/** IAM actions required for the ImportPlaybackKeyPair API call. */
	static readonly ImportPlaybackKeyPair: string[] = [
		"ivs:ImportPlaybackKeyPair",
		"ivs:TagResource",
	];
	/** IAM actions required for the ImportPublicKey API call. */
	static readonly ImportPublicKey: string[] = [
		"ivs:ImportPublicKey",
		"ivs:TagResource",
	];
	/** IAM actions required for the InsertAdBreak API call. */
	static readonly InsertAdBreak: string[] = ["ivs:InsertAdBreak"];
	/** IAM actions required for the ListAdConfigurations API call. */
	static readonly ListAdConfigurations: string[] = ["ivs:ListAdConfigurations"];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["ivs:ListChannels"];
	/** IAM actions required for the ListCompositions API call. */
	static readonly ListCompositions: string[] = ["ivs:ListCompositions"];
	/** IAM actions required for the ListEncoderConfigurations API call. */
	static readonly ListEncoderConfigurations: string[] = [
		"ivs:ListEncoderConfigurations",
	];
	/** IAM actions required for the ListIngestConfigurations API call. */
	static readonly ListIngestConfigurations: string[] = [
		"ivs:ListIngestConfigurations",
	];
	/** IAM actions required for the ListParticipantEvents API call. */
	static readonly ListParticipantEvents: string[] = [
		"ivs:ListParticipantEvents",
	];
	/** IAM actions required for the ListParticipantReplicas API call. */
	static readonly ListParticipantReplicas: string[] = [
		"ivs:ListParticipantReplicas",
	];
	/** IAM actions required for the ListParticipants API call. */
	static readonly ListParticipants: string[] = ["ivs:ListParticipants"];
	/** IAM actions required for the ListPlaybackKeyPairs API call. */
	static readonly ListPlaybackKeyPairs: string[] = ["ivs:ListPlaybackKeyPairs"];
	/** IAM actions required for the ListPlaybackRestrictionPolicies API call. */
	static readonly ListPlaybackRestrictionPolicies: string[] = [
		"ivs:ListPlaybackRestrictionPolicies",
	];
	/** IAM actions required for the ListPublicKeys API call. */
	static readonly ListPublicKeys: string[] = ["ivs:ListPublicKeys"];
	/** IAM actions required for the ListRecordingConfigurations API call. */
	static readonly ListRecordingConfigurations: string[] = [
		"ivs:ListRecordingConfigurations",
	];
	/** IAM actions required for the ListStageSessions API call. */
	static readonly ListStageSessions: string[] = ["ivs:ListStageSessions"];
	/** IAM actions required for the ListStages API call. */
	static readonly ListStages: string[] = ["ivs:ListStages"];
	/** IAM actions required for the ListStorageConfigurations API call. */
	static readonly ListStorageConfigurations: string[] = [
		"ivs:ListStorageConfigurations",
	];
	/** IAM actions required for the ListStreamKeys API call. */
	static readonly ListStreamKeys: string[] = ["ivs:ListStreamKeys"];
	/** IAM actions required for the ListStreamSessions API call. */
	static readonly ListStreamSessions: string[] = ["ivs:ListStreamSessions"];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["ivs:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ivs:ListTagsForResource"];
	/** IAM actions required for the PutMetadata API call. */
	static readonly PutMetadata: string[] = ["ivs:PutMetadata"];
	/** IAM actions required for the StartComposition API call. */
	static readonly StartComposition: string[] = [
		"ivs:StartComposition",
		"ivs:TagResource",
	];
	/** IAM actions required for the StartParticipantReplication API call. */
	static readonly StartParticipantReplication: string[] = [
		"ivs:StartParticipantReplication",
	];
	/** IAM actions required for the StartViewerSessionRevocation API call. */
	static readonly StartViewerSessionRevocation: string[] = [
		"ivs:StartViewerSessionRevocation",
	];
	/** IAM actions required for the StopComposition API call. */
	static readonly StopComposition: string[] = ["ivs:StopComposition"];
	/** IAM actions required for the StopParticipantReplication API call. */
	static readonly StopParticipantReplication: string[] = [
		"ivs:StopParticipantReplication",
	];
	/** IAM actions required for the StopStream API call. */
	static readonly StopStream: string[] = ["ivs:StopStream"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ivs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ivs:UntagResource"];
	/** IAM actions required for the UpdateAdConfiguration API call. */
	static readonly UpdateAdConfiguration: string[] = [
		"ivs:UpdateAdConfiguration",
	];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["ivs:UpdateChannel"];
	/** IAM actions required for the UpdateIngestConfiguration API call. */
	static readonly UpdateIngestConfiguration: string[] = [
		"ivs:UpdateIngestConfiguration",
	];
	/** IAM actions required for the UpdatePlaybackRestrictionPolicy API call. */
	static readonly UpdatePlaybackRestrictionPolicy: string[] = [
		"ivs:UpdatePlaybackRestrictionPolicy",
	];
	/** IAM actions required for the UpdateStage API call. */
	static readonly UpdateStage: string[] = ["ivs:UpdateStage"];
}

/**
 * Condition key constants and builders for ivs.
 */
export class IvsConditions {
	/** Condition keys applicable to the CreateAdConfiguration action. */
	static readonly CreateAdConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEncoderConfiguration action. */
	static readonly CreateEncoderConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestConfiguration action. */
	static readonly CreateIngestConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateParticipantToken action. */
	static readonly CreateParticipantTokenConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlaybackRestrictionPolicy action. */
	static readonly CreatePlaybackRestrictionPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecordingConfiguration action. */
	static readonly CreateRecordingConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStage action. */
	static readonly CreateStageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStorageConfiguration action. */
	static readonly CreateStorageConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamKey action. */
	static readonly CreateStreamKeyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportPlaybackKeyPair action. */
	static readonly ImportPlaybackKeyPairConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportPublicKey action. */
	static readonly ImportPublicKeyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartComposition action. */
	static readonly StartCompositionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartParticipantReplication action. */
	static readonly StartParticipantReplicationConditionKeys: string[] = [
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
