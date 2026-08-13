// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/nimble.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the nimble service.
 */
export class NimbleActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "nimble";

	/** [Write] nimble:AcceptEulas */
	static readonly ACCEPT_EULAS = "nimble:AcceptEulas";
	/** [Write] nimble:CreateLaunchProfile */
	static readonly CREATE_LAUNCH_PROFILE = "nimble:CreateLaunchProfile";
	/** [Write] nimble:CreateStreamingImage */
	static readonly CREATE_STREAMING_IMAGE = "nimble:CreateStreamingImage";
	/** [Write] nimble:CreateStreamingSession */
	static readonly CREATE_STREAMING_SESSION = "nimble:CreateStreamingSession";
	/** [Write] nimble:CreateStreamingSessionStream */
	static readonly CREATE_STREAMING_SESSION_STREAM =
		"nimble:CreateStreamingSessionStream";
	/** [Write] nimble:CreateStudio */
	static readonly CREATE_STUDIO = "nimble:CreateStudio";
	/** [Write] nimble:CreateStudioComponent */
	static readonly CREATE_STUDIO_COMPONENT = "nimble:CreateStudioComponent";
	/** [Write] nimble:DeleteLaunchProfile */
	static readonly DELETE_LAUNCH_PROFILE = "nimble:DeleteLaunchProfile";
	/** [Write] nimble:DeleteLaunchProfileMember */
	static readonly DELETE_LAUNCH_PROFILE_MEMBER =
		"nimble:DeleteLaunchProfileMember";
	/** [Write] nimble:DeleteStreamingImage */
	static readonly DELETE_STREAMING_IMAGE = "nimble:DeleteStreamingImage";
	/** [Write] nimble:DeleteStreamingSession */
	static readonly DELETE_STREAMING_SESSION = "nimble:DeleteStreamingSession";
	/** [Write] nimble:DeleteStudio */
	static readonly DELETE_STUDIO = "nimble:DeleteStudio";
	/** [Write] nimble:DeleteStudioComponent */
	static readonly DELETE_STUDIO_COMPONENT = "nimble:DeleteStudioComponent";
	/** [Write] nimble:DeleteStudioMember */
	static readonly DELETE_STUDIO_MEMBER = "nimble:DeleteStudioMember";
	/** [Read] nimble:GetEula */
	static readonly GET_EULA = "nimble:GetEula";
	/** [Read] nimble:GetFeatureMap */
	static readonly GET_FEATURE_MAP = "nimble:GetFeatureMap";
	/** [Read] nimble:GetLaunchProfile */
	static readonly GET_LAUNCH_PROFILE = "nimble:GetLaunchProfile";
	/** [Read] nimble:GetLaunchProfileDetails */
	static readonly GET_LAUNCH_PROFILE_DETAILS = "nimble:GetLaunchProfileDetails";
	/** [Read] nimble:GetLaunchProfileInitialization */
	static readonly GET_LAUNCH_PROFILE_INITIALIZATION =
		"nimble:GetLaunchProfileInitialization";
	/** [Read] nimble:GetLaunchProfileMember */
	static readonly GET_LAUNCH_PROFILE_MEMBER = "nimble:GetLaunchProfileMember";
	/** [Read] nimble:GetStreamingImage */
	static readonly GET_STREAMING_IMAGE = "nimble:GetStreamingImage";
	/** [Read] nimble:GetStreamingSession */
	static readonly GET_STREAMING_SESSION = "nimble:GetStreamingSession";
	/** [Read] nimble:GetStreamingSessionBackup */
	static readonly GET_STREAMING_SESSION_BACKUP =
		"nimble:GetStreamingSessionBackup";
	/** [Read] nimble:GetStreamingSessionStream */
	static readonly GET_STREAMING_SESSION_STREAM =
		"nimble:GetStreamingSessionStream";
	/** [Read] nimble:GetStudio */
	static readonly GET_STUDIO = "nimble:GetStudio";
	/** [Read] nimble:GetStudioComponent */
	static readonly GET_STUDIO_COMPONENT = "nimble:GetStudioComponent";
	/** [Read] nimble:GetStudioMember */
	static readonly GET_STUDIO_MEMBER = "nimble:GetStudioMember";
	/** [Read] nimble:ListEulaAcceptances */
	static readonly LIST_EULA_ACCEPTANCES = "nimble:ListEulaAcceptances";
	/** [Read] nimble:ListEulas */
	static readonly LIST_EULAS = "nimble:ListEulas";
	/** [Read] nimble:ListLaunchProfileMembers */
	static readonly LIST_LAUNCH_PROFILE_MEMBERS =
		"nimble:ListLaunchProfileMembers";
	/** [Read] nimble:ListLaunchProfiles */
	static readonly LIST_LAUNCH_PROFILES = "nimble:ListLaunchProfiles";
	/** [Read] nimble:ListStreamingImages */
	static readonly LIST_STREAMING_IMAGES = "nimble:ListStreamingImages";
	/** [Read] nimble:ListStreamingSessionBackups */
	static readonly LIST_STREAMING_SESSION_BACKUPS =
		"nimble:ListStreamingSessionBackups";
	/** [Read] nimble:ListStreamingSessions */
	static readonly LIST_STREAMING_SESSIONS = "nimble:ListStreamingSessions";
	/** [Read] nimble:ListStudioComponents */
	static readonly LIST_STUDIO_COMPONENTS = "nimble:ListStudioComponents";
	/** [Read] nimble:ListStudioMembers */
	static readonly LIST_STUDIO_MEMBERS = "nimble:ListStudioMembers";
	/** [Read] nimble:ListStudios */
	static readonly LIST_STUDIOS = "nimble:ListStudios";
	/** [Read] nimble:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "nimble:ListTagsForResource";
	/** [Write] nimble:PutLaunchProfileMembers */
	static readonly PUT_LAUNCH_PROFILE_MEMBERS = "nimble:PutLaunchProfileMembers";
	/** [Write] nimble:PutStudioLogEvents */
	static readonly PUT_STUDIO_LOG_EVENTS = "nimble:PutStudioLogEvents";
	/** [Write] nimble:PutStudioMembers */
	static readonly PUT_STUDIO_MEMBERS = "nimble:PutStudioMembers";
	/** [Write] nimble:StartStreamingSession */
	static readonly START_STREAMING_SESSION = "nimble:StartStreamingSession";
	/** [Write] nimble:StartStudioSSOConfigurationRepair */
	static readonly START_STUDIO_SSO_CONFIGURATION_REPAIR =
		"nimble:StartStudioSSOConfigurationRepair";
	/** [Write] nimble:StopStreamingSession */
	static readonly STOP_STREAMING_SESSION = "nimble:StopStreamingSession";
	/** [Tagging] nimble:TagResource */
	static readonly TAG_RESOURCE = "nimble:TagResource";
	/** [Tagging] nimble:UntagResource */
	static readonly UNTAG_RESOURCE = "nimble:UntagResource";
	/** [Write] nimble:UpdateLaunchProfile */
	static readonly UPDATE_LAUNCH_PROFILE = "nimble:UpdateLaunchProfile";
	/** [Write] nimble:UpdateLaunchProfileMember */
	static readonly UPDATE_LAUNCH_PROFILE_MEMBER =
		"nimble:UpdateLaunchProfileMember";
	/** [Write] nimble:UpdateStreamingImage */
	static readonly UPDATE_STREAMING_IMAGE = "nimble:UpdateStreamingImage";
	/** [Write] nimble:UpdateStudio */
	static readonly UPDATE_STUDIO = "nimble:UpdateStudio";
	/** [Write] nimble:UpdateStudioComponent */
	static readonly UPDATE_STUDIO_COMPONENT = "nimble:UpdateStudioComponent";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NimbleActions.GET_EULA,
		NimbleActions.GET_FEATURE_MAP,
		NimbleActions.GET_LAUNCH_PROFILE,
		NimbleActions.GET_LAUNCH_PROFILE_DETAILS,
		NimbleActions.GET_LAUNCH_PROFILE_INITIALIZATION,
		NimbleActions.GET_LAUNCH_PROFILE_MEMBER,
		NimbleActions.GET_STREAMING_IMAGE,
		NimbleActions.GET_STREAMING_SESSION,
		NimbleActions.GET_STREAMING_SESSION_BACKUP,
		NimbleActions.GET_STREAMING_SESSION_STREAM,
		NimbleActions.GET_STUDIO,
		NimbleActions.GET_STUDIO_COMPONENT,
		NimbleActions.GET_STUDIO_MEMBER,
		NimbleActions.LIST_EULA_ACCEPTANCES,
		NimbleActions.LIST_EULAS,
		NimbleActions.LIST_LAUNCH_PROFILE_MEMBERS,
		NimbleActions.LIST_LAUNCH_PROFILES,
		NimbleActions.LIST_STREAMING_IMAGES,
		NimbleActions.LIST_STREAMING_SESSION_BACKUPS,
		NimbleActions.LIST_STREAMING_SESSIONS,
		NimbleActions.LIST_STUDIO_COMPONENTS,
		NimbleActions.LIST_STUDIO_MEMBERS,
		NimbleActions.LIST_STUDIOS,
		NimbleActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NimbleActions.ACCEPT_EULAS,
		NimbleActions.CREATE_LAUNCH_PROFILE,
		NimbleActions.CREATE_STREAMING_IMAGE,
		NimbleActions.CREATE_STREAMING_SESSION,
		NimbleActions.CREATE_STREAMING_SESSION_STREAM,
		NimbleActions.CREATE_STUDIO,
		NimbleActions.CREATE_STUDIO_COMPONENT,
		NimbleActions.DELETE_LAUNCH_PROFILE,
		NimbleActions.DELETE_LAUNCH_PROFILE_MEMBER,
		NimbleActions.DELETE_STREAMING_IMAGE,
		NimbleActions.DELETE_STREAMING_SESSION,
		NimbleActions.DELETE_STUDIO,
		NimbleActions.DELETE_STUDIO_COMPONENT,
		NimbleActions.DELETE_STUDIO_MEMBER,
		NimbleActions.PUT_LAUNCH_PROFILE_MEMBERS,
		NimbleActions.PUT_STUDIO_LOG_EVENTS,
		NimbleActions.PUT_STUDIO_MEMBERS,
		NimbleActions.START_STREAMING_SESSION,
		NimbleActions.START_STUDIO_SSO_CONFIGURATION_REPAIR,
		NimbleActions.STOP_STREAMING_SESSION,
		NimbleActions.UPDATE_LAUNCH_PROFILE,
		NimbleActions.UPDATE_LAUNCH_PROFILE_MEMBER,
		NimbleActions.UPDATE_STREAMING_IMAGE,
		NimbleActions.UPDATE_STUDIO,
		NimbleActions.UPDATE_STUDIO_COMPONENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NimbleActions.TAG_RESOURCE,
		NimbleActions.UNTAG_RESOURCE,
	];
}

const EulaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):eula/(?<eulaId>[^:/?]+)$",
);
const EulaAcceptanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):eula-acceptance/(?<eulaAcceptanceId>[^:/?]+)$",
);
const LaunchProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):launch-profile/(?<launchProfileId>[^:/?]+)$",
);
const StreamingImageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-image/(?<streamingImageId>[^:/?]+)$",
);
const StreamingSessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-session/(?<streamingSessionId>[^:/?]+)$",
);
const StreamingSessionBackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-session-backup/(?<streamingSessionBackupId>[^:/?]+)$",
);
const StudioArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):studio/(?<studioId>[^:/?]+)$",
);
const StudioComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):studio-component/(?<studioComponentId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for nimble resources.
 */
export class NimbleResources {
	/**
	 * Builds an ARN for the eula resource.
	 */
	static eula(props: {
		/** The EulaId component of the ARN. */
		readonly eulaId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:eula/${props.eulaId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eula resource.
	 */
	static isValidEulaArn(arn: string): boolean {
		return EulaArnRegex.test(arn);
	}

	/**
	 * Parses a eula ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEulaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eulaId: string;
	} {
		const match = EulaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eula ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eulaId: match.groups!.eulaId,
		};
	}

	/**
	 * Builds an ARN for the eula-acceptance resource.
	 */
	static eulaAcceptance(props: {
		/** The EulaAcceptanceId component of the ARN. */
		readonly eulaAcceptanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:eula-acceptance/${props.eulaAcceptanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eula-acceptance resource.
	 */
	static isValidEulaAcceptanceArn(arn: string): boolean {
		return EulaAcceptanceArnRegex.test(arn);
	}

	/**
	 * Parses a eula-acceptance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEulaAcceptanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eulaAcceptanceId: string;
	} {
		const match = EulaAcceptanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eula-acceptance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eulaAcceptanceId: match.groups!.eulaAcceptanceId,
		};
	}

	/**
	 * Builds an ARN for the launch-profile resource.
	 */
	static launchProfile(props: {
		/** The LaunchProfileId component of the ARN. */
		readonly launchProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:launch-profile/${props.launchProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the launch-profile resource.
	 */
	static isValidLaunchProfileArn(arn: string): boolean {
		return LaunchProfileArnRegex.test(arn);
	}

	/**
	 * Parses a launch-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLaunchProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		launchProfileId: string;
	} {
		const match = LaunchProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid launch-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			launchProfileId: match.groups!.launchProfileId,
		};
	}

	/**
	 * Builds an ARN for the streaming-image resource.
	 */
	static streamingImage(props: {
		/** The StreamingImageId component of the ARN. */
		readonly streamingImageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:streaming-image/${props.streamingImageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the streaming-image resource.
	 */
	static isValidStreamingImageArn(arn: string): boolean {
		return StreamingImageArnRegex.test(arn);
	}

	/**
	 * Parses a streaming-image ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamingImageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamingImageId: string;
	} {
		const match = StreamingImageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid streaming-image ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamingImageId: match.groups!.streamingImageId,
		};
	}

	/**
	 * Builds an ARN for the streaming-session resource.
	 */
	static streamingSession(props: {
		/** The StreamingSessionId component of the ARN. */
		readonly streamingSessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:streaming-session/${props.streamingSessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the streaming-session resource.
	 */
	static isValidStreamingSessionArn(arn: string): boolean {
		return StreamingSessionArnRegex.test(arn);
	}

	/**
	 * Parses a streaming-session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamingSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamingSessionId: string;
	} {
		const match = StreamingSessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid streaming-session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamingSessionId: match.groups!.streamingSessionId,
		};
	}

	/**
	 * Builds an ARN for the streaming-session-backup resource.
	 */
	static streamingSessionBackup(props: {
		/** The StreamingSessionBackupId component of the ARN. */
		readonly streamingSessionBackupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:streaming-session-backup/${props.streamingSessionBackupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the streaming-session-backup resource.
	 */
	static isValidStreamingSessionBackupArn(arn: string): boolean {
		return StreamingSessionBackupArnRegex.test(arn);
	}

	/**
	 * Parses a streaming-session-backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamingSessionBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamingSessionBackupId: string;
	} {
		const match = StreamingSessionBackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid streaming-session-backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamingSessionBackupId: match.groups!.streamingSessionBackupId,
		};
	}

	/**
	 * Builds an ARN for the studio resource.
	 */
	static studio(props: {
		/** The StudioId component of the ARN. */
		readonly studioId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:studio/${props.studioId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the studio resource.
	 */
	static isValidStudioArn(arn: string): boolean {
		return StudioArnRegex.test(arn);
	}

	/**
	 * Parses a studio ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStudioArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		studioId: string;
	} {
		const match = StudioArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid studio ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			studioId: match.groups!.studioId,
		};
	}

	/**
	 * Builds an ARN for the studio-component resource.
	 */
	static studioComponent(props: {
		/** The StudioComponentId component of the ARN. */
		readonly studioComponentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:nimble:${props.region ?? "*"}:${props.account ?? "*"}:studio-component/${props.studioComponentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the studio-component resource.
	 */
	static isValidStudioComponentArn(arn: string): boolean {
		return StudioComponentArnRegex.test(arn);
	}

	/**
	 * Parses a studio-component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStudioComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		studioComponentId: string;
	} {
		const match = StudioComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid studio-component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			studioComponentId: match.groups!.studioComponentId,
		};
	}
}

/**
 * Condition key constants and builders for nimble.
 */
export class NimbleConditions {
	/** Condition keys applicable to the CreateLaunchProfile action. */
	static readonly CREATE_LAUNCH_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingImage action. */
	static readonly CREATE_STREAMING_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingSession action. */
	static readonly CREATE_STREAMING_SESSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingSessionStream action. */
	static readonly CREATE_STREAMING_SESSION_STREAM_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the CreateStudio action. */
	static readonly CREATE_STUDIO_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStudioComponent action. */
	static readonly CREATE_STUDIO_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteStreamingSession action. */
	static readonly DELETE_STREAMING_SESSION_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSession action. */
	static readonly GET_STREAMING_SESSION_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSessionBackup action. */
	static readonly GET_STREAMING_SESSION_BACKUP_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSessionStream action. */
	static readonly GET_STREAMING_SESSION_STREAM_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListLaunchProfiles action. */
	static readonly LIST_LAUNCH_PROFILES_CONDITION_KEYS: string[] = [
		"nimble:principalId",
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListStreamingSessionBackups action. */
	static readonly LIST_STREAMING_SESSION_BACKUPS_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListStreamingSessions action. */
	static readonly LIST_STREAMING_SESSIONS_CONDITION_KEYS: string[] = [
		"nimble:createdBy",
		"nimble:ownedBy",
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the StartStreamingSession action. */
	static readonly START_STREAMING_SESSION_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the StopStreamingSession action. */
	static readonly STOP_STREAMING_SESSION_CONDITION_KEYS: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
	/** Condition key: nimble:createdBy (String) */
	static readonly CREATED_BY = "nimble:createdBy";
	/** Condition key: nimble:ownedBy (String) */
	static readonly OWNED_BY = "nimble:ownedBy";
	/** Condition key: nimble:principalId (String) */
	static readonly PRINCIPAL_ID = "nimble:principalId";
	/** Condition key: nimble:requesterPrincipalId (String) */
	static readonly REQUESTER_PRINCIPAL_ID = "nimble:requesterPrincipalId";
	/** Condition key: nimble:studioId (ARN) */
	static readonly STUDIO_ID = "nimble:studioId";

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
	 * Generates a condition block for `nimble:createdBy`.
	 */
	static createdBy(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "nimble:createdBy": value } };
	}

	/**
	 * Generates a condition block for `nimble:ownedBy`.
	 */
	static ownedBy(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "nimble:ownedBy": value } };
	}

	/**
	 * Generates a condition block for `nimble:principalId`.
	 */
	static principalId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "nimble:principalId": value } };
	}

	/**
	 * Generates a condition block for `nimble:requesterPrincipalId`.
	 */
	static requesterPrincipalId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "nimble:requesterPrincipalId": value } };
	}

	/**
	 * Generates a condition block for `nimble:studioId`.
	 */
	static studioId(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "nimble:studioId": value } };
	}
}
