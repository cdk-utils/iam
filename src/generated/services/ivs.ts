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
	static readonly BATCH_GET_CHANNEL = "ivs:BatchGetChannel";
	/** [Read] ivs:BatchGetStreamKey */
	static readonly BATCH_GET_STREAM_KEY = "ivs:BatchGetStreamKey";
	/** [Write] ivs:BatchStartViewerSessionRevocation */
	static readonly BATCH_START_VIEWER_SESSION_REVOCATION =
		"ivs:BatchStartViewerSessionRevocation";
	/** [Write] ivs:CreateAdConfiguration */
	static readonly CREATE_AD_CONFIGURATION = "ivs:CreateAdConfiguration";
	/** [Write] ivs:CreateChannel */
	static readonly CREATE_CHANNEL = "ivs:CreateChannel";
	/** [Write] ivs:CreateEncoderConfiguration */
	static readonly CREATE_ENCODER_CONFIGURATION =
		"ivs:CreateEncoderConfiguration";
	/** [Write] ivs:CreateIngestConfiguration */
	static readonly CREATE_INGEST_CONFIGURATION = "ivs:CreateIngestConfiguration";
	/** [Write] ivs:CreateParticipantToken */
	static readonly CREATE_PARTICIPANT_TOKEN = "ivs:CreateParticipantToken";
	/** [Write] ivs:CreatePlaybackRestrictionPolicy */
	static readonly CREATE_PLAYBACK_RESTRICTION_POLICY =
		"ivs:CreatePlaybackRestrictionPolicy";
	/** [Write] ivs:CreateRecordingConfiguration */
	static readonly CREATE_RECORDING_CONFIGURATION =
		"ivs:CreateRecordingConfiguration";
	/** [Write] ivs:CreateStage */
	static readonly CREATE_STAGE = "ivs:CreateStage";
	/** [Write] ivs:CreateStorageConfiguration */
	static readonly CREATE_STORAGE_CONFIGURATION =
		"ivs:CreateStorageConfiguration";
	/** [Write] ivs:CreateStreamKey */
	static readonly CREATE_STREAM_KEY = "ivs:CreateStreamKey";
	/** [Write] ivs:DeleteAdConfiguration */
	static readonly DELETE_AD_CONFIGURATION = "ivs:DeleteAdConfiguration";
	/** [Write] ivs:DeleteChannel */
	static readonly DELETE_CHANNEL = "ivs:DeleteChannel";
	/** [Write] ivs:DeleteEncoderConfiguration */
	static readonly DELETE_ENCODER_CONFIGURATION =
		"ivs:DeleteEncoderConfiguration";
	/** [Write] ivs:DeleteIngestConfiguration */
	static readonly DELETE_INGEST_CONFIGURATION = "ivs:DeleteIngestConfiguration";
	/** [Write] ivs:DeletePlaybackKeyPair */
	static readonly DELETE_PLAYBACK_KEY_PAIR = "ivs:DeletePlaybackKeyPair";
	/** [Write] ivs:DeletePlaybackRestrictionPolicy */
	static readonly DELETE_PLAYBACK_RESTRICTION_POLICY =
		"ivs:DeletePlaybackRestrictionPolicy";
	/** [Write] ivs:DeletePublicKey */
	static readonly DELETE_PUBLIC_KEY = "ivs:DeletePublicKey";
	/** [Write] ivs:DeleteRecordingConfiguration */
	static readonly DELETE_RECORDING_CONFIGURATION =
		"ivs:DeleteRecordingConfiguration";
	/** [Write] ivs:DeleteStage */
	static readonly DELETE_STAGE = "ivs:DeleteStage";
	/** [Write] ivs:DeleteStorageConfiguration */
	static readonly DELETE_STORAGE_CONFIGURATION =
		"ivs:DeleteStorageConfiguration";
	/** [Write] ivs:DeleteStreamKey */
	static readonly DELETE_STREAM_KEY = "ivs:DeleteStreamKey";
	/** [Write] ivs:DisconnectParticipant */
	static readonly DISCONNECT_PARTICIPANT = "ivs:DisconnectParticipant";
	/** [Read] ivs:GetAdConfiguration */
	static readonly GET_AD_CONFIGURATION = "ivs:GetAdConfiguration";
	/** [Read] ivs:GetChannel */
	static readonly GET_CHANNEL = "ivs:GetChannel";
	/** [Read] ivs:GetComposition */
	static readonly GET_COMPOSITION = "ivs:GetComposition";
	/** [Read] ivs:GetEncoderConfiguration */
	static readonly GET_ENCODER_CONFIGURATION = "ivs:GetEncoderConfiguration";
	/** [Read] ivs:GetIngestConfiguration */
	static readonly GET_INGEST_CONFIGURATION = "ivs:GetIngestConfiguration";
	/** [Read] ivs:GetParticipant */
	static readonly GET_PARTICIPANT = "ivs:GetParticipant";
	/** [Read] ivs:GetPlaybackKeyPair */
	static readonly GET_PLAYBACK_KEY_PAIR = "ivs:GetPlaybackKeyPair";
	/** [Read] ivs:GetPlaybackRestrictionPolicy */
	static readonly GET_PLAYBACK_RESTRICTION_POLICY =
		"ivs:GetPlaybackRestrictionPolicy";
	/** [Read] ivs:GetPublicKey */
	static readonly GET_PUBLIC_KEY = "ivs:GetPublicKey";
	/** [Read] ivs:GetRecordingConfiguration */
	static readonly GET_RECORDING_CONFIGURATION = "ivs:GetRecordingConfiguration";
	/** [Read] ivs:GetStage */
	static readonly GET_STAGE = "ivs:GetStage";
	/** [Read] ivs:GetStageSession */
	static readonly GET_STAGE_SESSION = "ivs:GetStageSession";
	/** [Read] ivs:GetStorageConfiguration */
	static readonly GET_STORAGE_CONFIGURATION = "ivs:GetStorageConfiguration";
	/** [Read] ivs:GetStream */
	static readonly GET_STREAM = "ivs:GetStream";
	/** [Read] ivs:GetStreamKey */
	static readonly GET_STREAM_KEY = "ivs:GetStreamKey";
	/** [Read] ivs:GetStreamSession */
	static readonly GET_STREAM_SESSION = "ivs:GetStreamSession";
	/** [Write] ivs:ImportPlaybackKeyPair */
	static readonly IMPORT_PLAYBACK_KEY_PAIR = "ivs:ImportPlaybackKeyPair";
	/** [Write] ivs:ImportPublicKey */
	static readonly IMPORT_PUBLIC_KEY = "ivs:ImportPublicKey";
	/** [Write] ivs:InsertAdBreak */
	static readonly INSERT_AD_BREAK = "ivs:InsertAdBreak";
	/** [List] ivs:ListAdConfigurations */
	static readonly LIST_AD_CONFIGURATIONS = "ivs:ListAdConfigurations";
	/** [List] ivs:ListChannels */
	static readonly LIST_CHANNELS = "ivs:ListChannels";
	/** [List] ivs:ListCompositions */
	static readonly LIST_COMPOSITIONS = "ivs:ListCompositions";
	/** [List] ivs:ListEncoderConfigurations */
	static readonly LIST_ENCODER_CONFIGURATIONS = "ivs:ListEncoderConfigurations";
	/** [List] ivs:ListIngestConfigurations */
	static readonly LIST_INGEST_CONFIGURATIONS = "ivs:ListIngestConfigurations";
	/** [List] ivs:ListParticipantEvents */
	static readonly LIST_PARTICIPANT_EVENTS = "ivs:ListParticipantEvents";
	/** [List] ivs:ListParticipantReplicas */
	static readonly LIST_PARTICIPANT_REPLICAS = "ivs:ListParticipantReplicas";
	/** [List] ivs:ListParticipants */
	static readonly LIST_PARTICIPANTS = "ivs:ListParticipants";
	/** [List] ivs:ListPlaybackKeyPairs */
	static readonly LIST_PLAYBACK_KEY_PAIRS = "ivs:ListPlaybackKeyPairs";
	/** [List] ivs:ListPlaybackRestrictionPolicies */
	static readonly LIST_PLAYBACK_RESTRICTION_POLICIES =
		"ivs:ListPlaybackRestrictionPolicies";
	/** [List] ivs:ListPublicKeys */
	static readonly LIST_PUBLIC_KEYS = "ivs:ListPublicKeys";
	/** [List] ivs:ListRecordingConfigurations */
	static readonly LIST_RECORDING_CONFIGURATIONS =
		"ivs:ListRecordingConfigurations";
	/** [List] ivs:ListStageSessions */
	static readonly LIST_STAGE_SESSIONS = "ivs:ListStageSessions";
	/** [List] ivs:ListStages */
	static readonly LIST_STAGES = "ivs:ListStages";
	/** [List] ivs:ListStorageConfigurations */
	static readonly LIST_STORAGE_CONFIGURATIONS = "ivs:ListStorageConfigurations";
	/** [List] ivs:ListStreamKeys */
	static readonly LIST_STREAM_KEYS = "ivs:ListStreamKeys";
	/** [List] ivs:ListStreamSessions */
	static readonly LIST_STREAM_SESSIONS = "ivs:ListStreamSessions";
	/** [List] ivs:ListStreams */
	static readonly LIST_STREAMS = "ivs:ListStreams";
	/** [Read] ivs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ivs:ListTagsForResource";
	/** [Write] ivs:PutMetadata */
	static readonly PUT_METADATA = "ivs:PutMetadata";
	/** [Write] ivs:StartComposition */
	static readonly START_COMPOSITION = "ivs:StartComposition";
	/** [Write] ivs:StartParticipantReplication */
	static readonly START_PARTICIPANT_REPLICATION =
		"ivs:StartParticipantReplication";
	/** [Write] ivs:StartViewerSessionRevocation */
	static readonly START_VIEWER_SESSION_REVOCATION =
		"ivs:StartViewerSessionRevocation";
	/** [Write] ivs:StopComposition */
	static readonly STOP_COMPOSITION = "ivs:StopComposition";
	/** [Write] ivs:StopParticipantReplication */
	static readonly STOP_PARTICIPANT_REPLICATION =
		"ivs:StopParticipantReplication";
	/** [Write] ivs:StopStream */
	static readonly STOP_STREAM = "ivs:StopStream";
	/** [Tagging] ivs:TagResource */
	static readonly TAG_RESOURCE = "ivs:TagResource";
	/** [Tagging] ivs:UntagResource */
	static readonly UNTAG_RESOURCE = "ivs:UntagResource";
	/** [Write] ivs:UpdateAdConfiguration */
	static readonly UPDATE_AD_CONFIGURATION = "ivs:UpdateAdConfiguration";
	/** [Write] ivs:UpdateChannel */
	static readonly UPDATE_CHANNEL = "ivs:UpdateChannel";
	/** [Write] ivs:UpdateIngestConfiguration */
	static readonly UPDATE_INGEST_CONFIGURATION = "ivs:UpdateIngestConfiguration";
	/** [Write] ivs:UpdatePlaybackRestrictionPolicy */
	static readonly UPDATE_PLAYBACK_RESTRICTION_POLICY =
		"ivs:UpdatePlaybackRestrictionPolicy";
	/** [Write] ivs:UpdateStage */
	static readonly UPDATE_STAGE = "ivs:UpdateStage";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IvsActions.BATCH_GET_CHANNEL,
		IvsActions.BATCH_GET_STREAM_KEY,
		IvsActions.GET_AD_CONFIGURATION,
		IvsActions.GET_CHANNEL,
		IvsActions.GET_COMPOSITION,
		IvsActions.GET_ENCODER_CONFIGURATION,
		IvsActions.GET_INGEST_CONFIGURATION,
		IvsActions.GET_PARTICIPANT,
		IvsActions.GET_PLAYBACK_KEY_PAIR,
		IvsActions.GET_PLAYBACK_RESTRICTION_POLICY,
		IvsActions.GET_PUBLIC_KEY,
		IvsActions.GET_RECORDING_CONFIGURATION,
		IvsActions.GET_STAGE,
		IvsActions.GET_STAGE_SESSION,
		IvsActions.GET_STORAGE_CONFIGURATION,
		IvsActions.GET_STREAM,
		IvsActions.GET_STREAM_KEY,
		IvsActions.GET_STREAM_SESSION,
		IvsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IvsActions.BATCH_START_VIEWER_SESSION_REVOCATION,
		IvsActions.CREATE_AD_CONFIGURATION,
		IvsActions.CREATE_CHANNEL,
		IvsActions.CREATE_ENCODER_CONFIGURATION,
		IvsActions.CREATE_INGEST_CONFIGURATION,
		IvsActions.CREATE_PARTICIPANT_TOKEN,
		IvsActions.CREATE_PLAYBACK_RESTRICTION_POLICY,
		IvsActions.CREATE_RECORDING_CONFIGURATION,
		IvsActions.CREATE_STAGE,
		IvsActions.CREATE_STORAGE_CONFIGURATION,
		IvsActions.CREATE_STREAM_KEY,
		IvsActions.DELETE_AD_CONFIGURATION,
		IvsActions.DELETE_CHANNEL,
		IvsActions.DELETE_ENCODER_CONFIGURATION,
		IvsActions.DELETE_INGEST_CONFIGURATION,
		IvsActions.DELETE_PLAYBACK_KEY_PAIR,
		IvsActions.DELETE_PLAYBACK_RESTRICTION_POLICY,
		IvsActions.DELETE_PUBLIC_KEY,
		IvsActions.DELETE_RECORDING_CONFIGURATION,
		IvsActions.DELETE_STAGE,
		IvsActions.DELETE_STORAGE_CONFIGURATION,
		IvsActions.DELETE_STREAM_KEY,
		IvsActions.DISCONNECT_PARTICIPANT,
		IvsActions.IMPORT_PLAYBACK_KEY_PAIR,
		IvsActions.IMPORT_PUBLIC_KEY,
		IvsActions.INSERT_AD_BREAK,
		IvsActions.PUT_METADATA,
		IvsActions.START_COMPOSITION,
		IvsActions.START_PARTICIPANT_REPLICATION,
		IvsActions.START_VIEWER_SESSION_REVOCATION,
		IvsActions.STOP_COMPOSITION,
		IvsActions.STOP_PARTICIPANT_REPLICATION,
		IvsActions.STOP_STREAM,
		IvsActions.UPDATE_AD_CONFIGURATION,
		IvsActions.UPDATE_CHANNEL,
		IvsActions.UPDATE_INGEST_CONFIGURATION,
		IvsActions.UPDATE_PLAYBACK_RESTRICTION_POLICY,
		IvsActions.UPDATE_STAGE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IvsActions.LIST_AD_CONFIGURATIONS,
		IvsActions.LIST_CHANNELS,
		IvsActions.LIST_COMPOSITIONS,
		IvsActions.LIST_ENCODER_CONFIGURATIONS,
		IvsActions.LIST_INGEST_CONFIGURATIONS,
		IvsActions.LIST_PARTICIPANT_EVENTS,
		IvsActions.LIST_PARTICIPANT_REPLICAS,
		IvsActions.LIST_PARTICIPANTS,
		IvsActions.LIST_PLAYBACK_KEY_PAIRS,
		IvsActions.LIST_PLAYBACK_RESTRICTION_POLICIES,
		IvsActions.LIST_PUBLIC_KEYS,
		IvsActions.LIST_RECORDING_CONFIGURATIONS,
		IvsActions.LIST_STAGE_SESSIONS,
		IvsActions.LIST_STAGES,
		IvsActions.LIST_STORAGE_CONFIGURATIONS,
		IvsActions.LIST_STREAM_KEYS,
		IvsActions.LIST_STREAM_SESSIONS,
		IvsActions.LIST_STREAMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IvsActions.TAG_RESOURCE,
		IvsActions.UNTAG_RESOURCE,
	];
}

const AdConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):ad-configuration/(?<resourceId>[^:/?]+)$",
);
const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):channel/(?<resourceId>[^:/?]+)$",
);
const CompositionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):composition/(?<resourceId>[^:/?]+)$",
);
const EncoderConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):encoder-configuration/(?<resourceId>[^:/?]+)$",
);
const IngestConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):ingest-configuration/(?<resourceId>[^:/?]+)$",
);
const PlaybackKeyPairArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):playback-key/(?<resourceId>[^:/?]+)$",
);
const PlaybackRestrictionPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):playback-restriction-policy/(?<resourceId>[^:/?]+)$",
);
const PublicKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):public-key/(?<resourceId>[^:/?]+)$",
);
const RecordingConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):recording-configuration/(?<resourceId>[^:/?]+)$",
);
const StageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):stage/(?<resourceId>[^:/?]+)$",
);
const StorageConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):storage-configuration/(?<resourceId>[^:/?]+)$",
);
const StreamKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivs:(?<region>[^:]*):(?<account>[^:]*):stream-key/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ivs resources.
 */
export class IvsResources {
	/**
	 * Builds an ARN for the Ad-Configuration resource.
	 */
	static adConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAdConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static channel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static composition(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCompositionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static encoderConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEncoderConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static ingestConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIngestConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static playbackKeyPair(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePlaybackKeyPairArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static playbackRestrictionPolicy(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePlaybackRestrictionPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static publicKey(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePublicKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static recordingConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRecordingConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static stage(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static storageConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStorageConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static streamKey(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStreamKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly BATCH_GET_CHANNEL: string[] = ["ivs:BatchGetChannel"];
	/** IAM actions required for the BatchGetStreamKey API call. */
	static readonly BATCH_GET_STREAM_KEY: string[] = ["ivs:BatchGetStreamKey"];
	/** IAM actions required for the BatchStartViewerSessionRevocation API call. */
	static readonly BATCH_START_VIEWER_SESSION_REVOCATION: string[] = [
		"ivs:BatchStartViewerSessionRevocation",
	];
	/** IAM actions required for the CreateAdConfiguration API call. */
	static readonly CREATE_AD_CONFIGURATION: string[] = [
		"ivs:CreateAdConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"ivs:CreateChannel",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateEncoderConfiguration API call. */
	static readonly CREATE_ENCODER_CONFIGURATION: string[] = [
		"ivs:CreateEncoderConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateIngestConfiguration API call. */
	static readonly CREATE_INGEST_CONFIGURATION: string[] = [
		"ivs:CreateIngestConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateParticipantToken API call. */
	static readonly CREATE_PARTICIPANT_TOKEN: string[] = [
		"ivs:CreateParticipantToken",
	];
	/** IAM actions required for the CreatePlaybackRestrictionPolicy API call. */
	static readonly CREATE_PLAYBACK_RESTRICTION_POLICY: string[] = [
		"ivs:CreatePlaybackRestrictionPolicy",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateRecordingConfiguration API call. */
	static readonly CREATE_RECORDING_CONFIGURATION: string[] = [
		"ivs:CreateRecordingConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStage API call. */
	static readonly CREATE_STAGE: string[] = [
		"ivs:CreateStage",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStorageConfiguration API call. */
	static readonly CREATE_STORAGE_CONFIGURATION: string[] = [
		"ivs:CreateStorageConfiguration",
		"ivs:TagResource",
	];
	/** IAM actions required for the CreateStreamKey API call. */
	static readonly CREATE_STREAM_KEY: string[] = [
		"ivs:CreateStreamKey",
		"ivs:TagResource",
	];
	/** IAM actions required for the DeleteAdConfiguration API call. */
	static readonly DELETE_AD_CONFIGURATION: string[] = [
		"ivs:DeleteAdConfiguration",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["ivs:DeleteChannel"];
	/** IAM actions required for the DeleteEncoderConfiguration API call. */
	static readonly DELETE_ENCODER_CONFIGURATION: string[] = [
		"ivs:DeleteEncoderConfiguration",
	];
	/** IAM actions required for the DeleteIngestConfiguration API call. */
	static readonly DELETE_INGEST_CONFIGURATION: string[] = [
		"ivs:DeleteIngestConfiguration",
	];
	/** IAM actions required for the DeletePlaybackKeyPair API call. */
	static readonly DELETE_PLAYBACK_KEY_PAIR: string[] = [
		"ivs:DeletePlaybackKeyPair",
	];
	/** IAM actions required for the DeletePlaybackRestrictionPolicy API call. */
	static readonly DELETE_PLAYBACK_RESTRICTION_POLICY: string[] = [
		"ivs:DeletePlaybackRestrictionPolicy",
	];
	/** IAM actions required for the DeletePublicKey API call. */
	static readonly DELETE_PUBLIC_KEY: string[] = ["ivs:DeletePublicKey"];
	/** IAM actions required for the DeleteRecordingConfiguration API call. */
	static readonly DELETE_RECORDING_CONFIGURATION: string[] = [
		"ivs:DeleteRecordingConfiguration",
	];
	/** IAM actions required for the DeleteStage API call. */
	static readonly DELETE_STAGE: string[] = ["ivs:DeleteStage"];
	/** IAM actions required for the DeleteStorageConfiguration API call. */
	static readonly DELETE_STORAGE_CONFIGURATION: string[] = [
		"ivs:DeleteStorageConfiguration",
	];
	/** IAM actions required for the DeleteStreamKey API call. */
	static readonly DELETE_STREAM_KEY: string[] = ["ivs:DeleteStreamKey"];
	/** IAM actions required for the DisconnectParticipant API call. */
	static readonly DISCONNECT_PARTICIPANT: string[] = [
		"ivs:DisconnectParticipant",
	];
	/** IAM actions required for the GetAdConfiguration API call. */
	static readonly GET_AD_CONFIGURATION: string[] = ["ivs:GetAdConfiguration"];
	/** IAM actions required for the GetChannel API call. */
	static readonly GET_CHANNEL: string[] = ["ivs:GetChannel"];
	/** IAM actions required for the GetComposition API call. */
	static readonly GET_COMPOSITION: string[] = ["ivs:GetComposition"];
	/** IAM actions required for the GetEncoderConfiguration API call. */
	static readonly GET_ENCODER_CONFIGURATION: string[] = [
		"ivs:GetEncoderConfiguration",
	];
	/** IAM actions required for the GetIngestConfiguration API call. */
	static readonly GET_INGEST_CONFIGURATION: string[] = [
		"ivs:GetIngestConfiguration",
	];
	/** IAM actions required for the GetParticipant API call. */
	static readonly GET_PARTICIPANT: string[] = ["ivs:GetParticipant"];
	/** IAM actions required for the GetPlaybackKeyPair API call. */
	static readonly GET_PLAYBACK_KEY_PAIR: string[] = ["ivs:GetPlaybackKeyPair"];
	/** IAM actions required for the GetPlaybackRestrictionPolicy API call. */
	static readonly GET_PLAYBACK_RESTRICTION_POLICY: string[] = [
		"ivs:GetPlaybackRestrictionPolicy",
	];
	/** IAM actions required for the GetPublicKey API call. */
	static readonly GET_PUBLIC_KEY: string[] = ["ivs:GetPublicKey"];
	/** IAM actions required for the GetRecordingConfiguration API call. */
	static readonly GET_RECORDING_CONFIGURATION: string[] = [
		"ivs:GetRecordingConfiguration",
	];
	/** IAM actions required for the GetStage API call. */
	static readonly GET_STAGE: string[] = ["ivs:GetStage"];
	/** IAM actions required for the GetStageSession API call. */
	static readonly GET_STAGE_SESSION: string[] = ["ivs:GetStageSession"];
	/** IAM actions required for the GetStorageConfiguration API call. */
	static readonly GET_STORAGE_CONFIGURATION: string[] = [
		"ivs:GetStorageConfiguration",
	];
	/** IAM actions required for the GetStream API call. */
	static readonly GET_STREAM: string[] = ["ivs:GetStream"];
	/** IAM actions required for the GetStreamKey API call. */
	static readonly GET_STREAM_KEY: string[] = ["ivs:GetStreamKey"];
	/** IAM actions required for the GetStreamSession API call. */
	static readonly GET_STREAM_SESSION: string[] = ["ivs:GetStreamSession"];
	/** IAM actions required for the ImportPlaybackKeyPair API call. */
	static readonly IMPORT_PLAYBACK_KEY_PAIR: string[] = [
		"ivs:ImportPlaybackKeyPair",
		"ivs:TagResource",
	];
	/** IAM actions required for the ImportPublicKey API call. */
	static readonly IMPORT_PUBLIC_KEY: string[] = [
		"ivs:ImportPublicKey",
		"ivs:TagResource",
	];
	/** IAM actions required for the InsertAdBreak API call. */
	static readonly INSERT_AD_BREAK: string[] = ["ivs:InsertAdBreak"];
	/** IAM actions required for the ListAdConfigurations API call. */
	static readonly LIST_AD_CONFIGURATIONS: string[] = [
		"ivs:ListAdConfigurations",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["ivs:ListChannels"];
	/** IAM actions required for the ListCompositions API call. */
	static readonly LIST_COMPOSITIONS: string[] = ["ivs:ListCompositions"];
	/** IAM actions required for the ListEncoderConfigurations API call. */
	static readonly LIST_ENCODER_CONFIGURATIONS: string[] = [
		"ivs:ListEncoderConfigurations",
	];
	/** IAM actions required for the ListIngestConfigurations API call. */
	static readonly LIST_INGEST_CONFIGURATIONS: string[] = [
		"ivs:ListIngestConfigurations",
	];
	/** IAM actions required for the ListParticipantEvents API call. */
	static readonly LIST_PARTICIPANT_EVENTS: string[] = [
		"ivs:ListParticipantEvents",
	];
	/** IAM actions required for the ListParticipantReplicas API call. */
	static readonly LIST_PARTICIPANT_REPLICAS: string[] = [
		"ivs:ListParticipantReplicas",
	];
	/** IAM actions required for the ListParticipants API call. */
	static readonly LIST_PARTICIPANTS: string[] = ["ivs:ListParticipants"];
	/** IAM actions required for the ListPlaybackKeyPairs API call. */
	static readonly LIST_PLAYBACK_KEY_PAIRS: string[] = [
		"ivs:ListPlaybackKeyPairs",
	];
	/** IAM actions required for the ListPlaybackRestrictionPolicies API call. */
	static readonly LIST_PLAYBACK_RESTRICTION_POLICIES: string[] = [
		"ivs:ListPlaybackRestrictionPolicies",
	];
	/** IAM actions required for the ListPublicKeys API call. */
	static readonly LIST_PUBLIC_KEYS: string[] = ["ivs:ListPublicKeys"];
	/** IAM actions required for the ListRecordingConfigurations API call. */
	static readonly LIST_RECORDING_CONFIGURATIONS: string[] = [
		"ivs:ListRecordingConfigurations",
	];
	/** IAM actions required for the ListStageSessions API call. */
	static readonly LIST_STAGE_SESSIONS: string[] = ["ivs:ListStageSessions"];
	/** IAM actions required for the ListStages API call. */
	static readonly LIST_STAGES: string[] = ["ivs:ListStages"];
	/** IAM actions required for the ListStorageConfigurations API call. */
	static readonly LIST_STORAGE_CONFIGURATIONS: string[] = [
		"ivs:ListStorageConfigurations",
	];
	/** IAM actions required for the ListStreamKeys API call. */
	static readonly LIST_STREAM_KEYS: string[] = ["ivs:ListStreamKeys"];
	/** IAM actions required for the ListStreamSessions API call. */
	static readonly LIST_STREAM_SESSIONS: string[] = ["ivs:ListStreamSessions"];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["ivs:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ivs:ListTagsForResource",
	];
	/** IAM actions required for the PutMetadata API call. */
	static readonly PUT_METADATA: string[] = ["ivs:PutMetadata"];
	/** IAM actions required for the StartComposition API call. */
	static readonly START_COMPOSITION: string[] = [
		"ivs:StartComposition",
		"ivs:TagResource",
	];
	/** IAM actions required for the StartParticipantReplication API call. */
	static readonly START_PARTICIPANT_REPLICATION: string[] = [
		"ivs:StartParticipantReplication",
	];
	/** IAM actions required for the StartViewerSessionRevocation API call. */
	static readonly START_VIEWER_SESSION_REVOCATION: string[] = [
		"ivs:StartViewerSessionRevocation",
	];
	/** IAM actions required for the StopComposition API call. */
	static readonly STOP_COMPOSITION: string[] = ["ivs:StopComposition"];
	/** IAM actions required for the StopParticipantReplication API call. */
	static readonly STOP_PARTICIPANT_REPLICATION: string[] = [
		"ivs:StopParticipantReplication",
	];
	/** IAM actions required for the StopStream API call. */
	static readonly STOP_STREAM: string[] = ["ivs:StopStream"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ivs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ivs:UntagResource"];
	/** IAM actions required for the UpdateAdConfiguration API call. */
	static readonly UPDATE_AD_CONFIGURATION: string[] = [
		"ivs:UpdateAdConfiguration",
	];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["ivs:UpdateChannel"];
	/** IAM actions required for the UpdateIngestConfiguration API call. */
	static readonly UPDATE_INGEST_CONFIGURATION: string[] = [
		"ivs:UpdateIngestConfiguration",
	];
	/** IAM actions required for the UpdatePlaybackRestrictionPolicy API call. */
	static readonly UPDATE_PLAYBACK_RESTRICTION_POLICY: string[] = [
		"ivs:UpdatePlaybackRestrictionPolicy",
	];
	/** IAM actions required for the UpdateStage API call. */
	static readonly UPDATE_STAGE: string[] = ["ivs:UpdateStage"];
}

/**
 * Condition key constants and builders for ivs.
 */
export class IvsConditions {
	/** Condition keys applicable to the CreateAdConfiguration action. */
	static readonly CREATE_AD_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEncoderConfiguration action. */
	static readonly CREATE_ENCODER_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestConfiguration action. */
	static readonly CREATE_INGEST_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateParticipantToken action. */
	static readonly CREATE_PARTICIPANT_TOKEN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlaybackRestrictionPolicy action. */
	static readonly CREATE_PLAYBACK_RESTRICTION_POLICY_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRecordingConfiguration action. */
	static readonly CREATE_RECORDING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStage action. */
	static readonly CREATE_STAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStorageConfiguration action. */
	static readonly CREATE_STORAGE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamKey action. */
	static readonly CREATE_STREAM_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportPlaybackKeyPair action. */
	static readonly IMPORT_PLAYBACK_KEY_PAIR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportPublicKey action. */
	static readonly IMPORT_PUBLIC_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartComposition action. */
	static readonly START_COMPOSITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartParticipantReplication action. */
	static readonly START_PARTICIPANT_REPLICATION_CONDITION_KEYS: string[] = [
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
