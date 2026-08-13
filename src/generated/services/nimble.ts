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
	static readonly AcceptEulas = "nimble:AcceptEulas";
	/** [Write] nimble:CreateLaunchProfile */
	static readonly CreateLaunchProfile = "nimble:CreateLaunchProfile";
	/** [Write] nimble:CreateStreamingImage */
	static readonly CreateStreamingImage = "nimble:CreateStreamingImage";
	/** [Write] nimble:CreateStreamingSession */
	static readonly CreateStreamingSession = "nimble:CreateStreamingSession";
	/** [Write] nimble:CreateStreamingSessionStream */
	static readonly CreateStreamingSessionStream =
		"nimble:CreateStreamingSessionStream";
	/** [Write] nimble:CreateStudio */
	static readonly CreateStudio = "nimble:CreateStudio";
	/** [Write] nimble:CreateStudioComponent */
	static readonly CreateStudioComponent = "nimble:CreateStudioComponent";
	/** [Write] nimble:DeleteLaunchProfile */
	static readonly DeleteLaunchProfile = "nimble:DeleteLaunchProfile";
	/** [Write] nimble:DeleteLaunchProfileMember */
	static readonly DeleteLaunchProfileMember =
		"nimble:DeleteLaunchProfileMember";
	/** [Write] nimble:DeleteStreamingImage */
	static readonly DeleteStreamingImage = "nimble:DeleteStreamingImage";
	/** [Write] nimble:DeleteStreamingSession */
	static readonly DeleteStreamingSession = "nimble:DeleteStreamingSession";
	/** [Write] nimble:DeleteStudio */
	static readonly DeleteStudio = "nimble:DeleteStudio";
	/** [Write] nimble:DeleteStudioComponent */
	static readonly DeleteStudioComponent = "nimble:DeleteStudioComponent";
	/** [Write] nimble:DeleteStudioMember */
	static readonly DeleteStudioMember = "nimble:DeleteStudioMember";
	/** [Read] nimble:GetEula */
	static readonly actionGetEula = "nimble:GetEula";
	/** [Read] nimble:GetFeatureMap */
	static readonly actionGetFeatureMap = "nimble:GetFeatureMap";
	/** [Read] nimble:GetLaunchProfile */
	static readonly actionGetLaunchProfile = "nimble:GetLaunchProfile";
	/** [Read] nimble:GetLaunchProfileDetails */
	static readonly actionGetLaunchProfileDetails =
		"nimble:GetLaunchProfileDetails";
	/** [Read] nimble:GetLaunchProfileInitialization */
	static readonly actionGetLaunchProfileInitialization =
		"nimble:GetLaunchProfileInitialization";
	/** [Read] nimble:GetLaunchProfileMember */
	static readonly actionGetLaunchProfileMember =
		"nimble:GetLaunchProfileMember";
	/** [Read] nimble:GetStreamingImage */
	static readonly actionGetStreamingImage = "nimble:GetStreamingImage";
	/** [Read] nimble:GetStreamingSession */
	static readonly actionGetStreamingSession = "nimble:GetStreamingSession";
	/** [Read] nimble:GetStreamingSessionBackup */
	static readonly actionGetStreamingSessionBackup =
		"nimble:GetStreamingSessionBackup";
	/** [Read] nimble:GetStreamingSessionStream */
	static readonly actionGetStreamingSessionStream =
		"nimble:GetStreamingSessionStream";
	/** [Read] nimble:GetStudio */
	static readonly actionGetStudio = "nimble:GetStudio";
	/** [Read] nimble:GetStudioComponent */
	static readonly actionGetStudioComponent = "nimble:GetStudioComponent";
	/** [Read] nimble:GetStudioMember */
	static readonly actionGetStudioMember = "nimble:GetStudioMember";
	/** [Read] nimble:ListEulaAcceptances */
	static readonly ListEulaAcceptances = "nimble:ListEulaAcceptances";
	/** [Read] nimble:ListEulas */
	static readonly ListEulas = "nimble:ListEulas";
	/** [Read] nimble:ListLaunchProfileMembers */
	static readonly ListLaunchProfileMembers = "nimble:ListLaunchProfileMembers";
	/** [Read] nimble:ListLaunchProfiles */
	static readonly ListLaunchProfiles = "nimble:ListLaunchProfiles";
	/** [Read] nimble:ListStreamingImages */
	static readonly ListStreamingImages = "nimble:ListStreamingImages";
	/** [Read] nimble:ListStreamingSessionBackups */
	static readonly ListStreamingSessionBackups =
		"nimble:ListStreamingSessionBackups";
	/** [Read] nimble:ListStreamingSessions */
	static readonly ListStreamingSessions = "nimble:ListStreamingSessions";
	/** [Read] nimble:ListStudioComponents */
	static readonly ListStudioComponents = "nimble:ListStudioComponents";
	/** [Read] nimble:ListStudioMembers */
	static readonly ListStudioMembers = "nimble:ListStudioMembers";
	/** [Read] nimble:ListStudios */
	static readonly ListStudios = "nimble:ListStudios";
	/** [Read] nimble:ListTagsForResource */
	static readonly ListTagsForResource = "nimble:ListTagsForResource";
	/** [Write] nimble:PutLaunchProfileMembers */
	static readonly PutLaunchProfileMembers = "nimble:PutLaunchProfileMembers";
	/** [Write] nimble:PutStudioLogEvents */
	static readonly PutStudioLogEvents = "nimble:PutStudioLogEvents";
	/** [Write] nimble:PutStudioMembers */
	static readonly PutStudioMembers = "nimble:PutStudioMembers";
	/** [Write] nimble:StartStreamingSession */
	static readonly StartStreamingSession = "nimble:StartStreamingSession";
	/** [Write] nimble:StartStudioSSOConfigurationRepair */
	static readonly StartStudioSSOConfigurationRepair =
		"nimble:StartStudioSSOConfigurationRepair";
	/** [Write] nimble:StopStreamingSession */
	static readonly StopStreamingSession = "nimble:StopStreamingSession";
	/** [Tagging] nimble:TagResource */
	static readonly TagResource = "nimble:TagResource";
	/** [Tagging] nimble:UntagResource */
	static readonly UntagResource = "nimble:UntagResource";
	/** [Write] nimble:UpdateLaunchProfile */
	static readonly UpdateLaunchProfile = "nimble:UpdateLaunchProfile";
	/** [Write] nimble:UpdateLaunchProfileMember */
	static readonly UpdateLaunchProfileMember =
		"nimble:UpdateLaunchProfileMember";
	/** [Write] nimble:UpdateStreamingImage */
	static readonly UpdateStreamingImage = "nimble:UpdateStreamingImage";
	/** [Write] nimble:UpdateStudio */
	static readonly UpdateStudio = "nimble:UpdateStudio";
	/** [Write] nimble:UpdateStudioComponent */
	static readonly UpdateStudioComponent = "nimble:UpdateStudioComponent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NimbleActions.actionGetEula,
		NimbleActions.actionGetFeatureMap,
		NimbleActions.actionGetLaunchProfile,
		NimbleActions.actionGetLaunchProfileDetails,
		NimbleActions.actionGetLaunchProfileInitialization,
		NimbleActions.actionGetLaunchProfileMember,
		NimbleActions.actionGetStreamingImage,
		NimbleActions.actionGetStreamingSession,
		NimbleActions.actionGetStreamingSessionBackup,
		NimbleActions.actionGetStreamingSessionStream,
		NimbleActions.actionGetStudio,
		NimbleActions.actionGetStudioComponent,
		NimbleActions.actionGetStudioMember,
		NimbleActions.ListEulaAcceptances,
		NimbleActions.ListEulas,
		NimbleActions.ListLaunchProfileMembers,
		NimbleActions.ListLaunchProfiles,
		NimbleActions.ListStreamingImages,
		NimbleActions.ListStreamingSessionBackups,
		NimbleActions.ListStreamingSessions,
		NimbleActions.ListStudioComponents,
		NimbleActions.ListStudioMembers,
		NimbleActions.ListStudios,
		NimbleActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NimbleActions.AcceptEulas,
		NimbleActions.CreateLaunchProfile,
		NimbleActions.CreateStreamingImage,
		NimbleActions.CreateStreamingSession,
		NimbleActions.CreateStreamingSessionStream,
		NimbleActions.CreateStudio,
		NimbleActions.CreateStudioComponent,
		NimbleActions.DeleteLaunchProfile,
		NimbleActions.DeleteLaunchProfileMember,
		NimbleActions.DeleteStreamingImage,
		NimbleActions.DeleteStreamingSession,
		NimbleActions.DeleteStudio,
		NimbleActions.DeleteStudioComponent,
		NimbleActions.DeleteStudioMember,
		NimbleActions.PutLaunchProfileMembers,
		NimbleActions.PutStudioLogEvents,
		NimbleActions.PutStudioMembers,
		NimbleActions.StartStreamingSession,
		NimbleActions.StartStudioSSOConfigurationRepair,
		NimbleActions.StopStreamingSession,
		NimbleActions.UpdateLaunchProfile,
		NimbleActions.UpdateLaunchProfileMember,
		NimbleActions.UpdateStreamingImage,
		NimbleActions.UpdateStudio,
		NimbleActions.UpdateStudioComponent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NimbleActions.TagResource,
		NimbleActions.UntagResource,
	];
}

/**
 * Properties for building a eula ARN.
 */
export interface NimbleEulaArnProps {
	/** The EulaId component of the ARN. */
	readonly eulaId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eula ARN.
 */
export interface NimbleEulaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EulaId component. */
	readonly eulaId: string;
}

/**
 * Properties for building a eula-acceptance ARN.
 */
export interface NimbleEulaAcceptanceArnProps {
	/** The EulaAcceptanceId component of the ARN. */
	readonly eulaAcceptanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eula-acceptance ARN.
 */
export interface NimbleEulaAcceptanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EulaAcceptanceId component. */
	readonly eulaAcceptanceId: string;
}

/**
 * Properties for building a launch-profile ARN.
 */
export interface NimbleLaunchProfileArnProps {
	/** The LaunchProfileId component of the ARN. */
	readonly launchProfileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a launch-profile ARN.
 */
export interface NimbleLaunchProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LaunchProfileId component. */
	readonly launchProfileId: string;
}

/**
 * Properties for building a streaming-image ARN.
 */
export interface NimbleStreamingImageArnProps {
	/** The StreamingImageId component of the ARN. */
	readonly streamingImageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a streaming-image ARN.
 */
export interface NimbleStreamingImageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamingImageId component. */
	readonly streamingImageId: string;
}

/**
 * Properties for building a streaming-session ARN.
 */
export interface NimbleStreamingSessionArnProps {
	/** The StreamingSessionId component of the ARN. */
	readonly streamingSessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a streaming-session ARN.
 */
export interface NimbleStreamingSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamingSessionId component. */
	readonly streamingSessionId: string;
}

/**
 * Properties for building a streaming-session-backup ARN.
 */
export interface NimbleStreamingSessionBackupArnProps {
	/** The StreamingSessionBackupId component of the ARN. */
	readonly streamingSessionBackupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a streaming-session-backup ARN.
 */
export interface NimbleStreamingSessionBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamingSessionBackupId component. */
	readonly streamingSessionBackupId: string;
}

/**
 * Properties for building a studio ARN.
 */
export interface NimbleStudioArnProps {
	/** The StudioId component of the ARN. */
	readonly studioId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a studio ARN.
 */
export interface NimbleStudioArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StudioId component. */
	readonly studioId: string;
}

/**
 * Properties for building a studio-component ARN.
 */
export interface NimbleStudioComponentArnProps {
	/** The StudioComponentId component of the ARN. */
	readonly studioComponentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a studio-component ARN.
 */
export interface NimbleStudioComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StudioComponentId component. */
	readonly studioComponentId: string;
}

const EulaArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):eula\/(?<eulaId>[^:/?]+)$/;
const EulaAcceptanceArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):eula-acceptance\/(?<eulaAcceptanceId>[^:/?]+)$/;
const LaunchProfileArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):launch-profile\/(?<launchProfileId>[^:/?]+)$/;
const StreamingImageArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-image\/(?<streamingImageId>[^:/?]+)$/;
const StreamingSessionArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-session\/(?<streamingSessionId>[^:/?]+)$/;
const StreamingSessionBackupArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):streaming-session-backup\/(?<streamingSessionBackupId>[^:/?]+)$/;
const StudioArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):studio\/(?<studioId>[^:/?]+)$/;
const StudioComponentArnRegex =
	/^arn:(?<partition>[^:]+):nimble:(?<region>[^:]*):(?<account>[^:]*):studio-component\/(?<studioComponentId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for nimble resources.
 */
export class NimbleResources {
	/**
	 * Builds an ARN for the eula resource.
	 */
	static eula(props: NimbleEulaArnProps): string {
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
	static parseEulaArn(arn: string): NimbleEulaArnComponents {
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
	static eulaAcceptance(props: NimbleEulaAcceptanceArnProps): string {
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
	static parseEulaAcceptanceArn(
		arn: string,
	): NimbleEulaAcceptanceArnComponents {
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
	static launchProfile(props: NimbleLaunchProfileArnProps): string {
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
	static parseLaunchProfileArn(arn: string): NimbleLaunchProfileArnComponents {
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
	static streamingImage(props: NimbleStreamingImageArnProps): string {
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
	static parseStreamingImageArn(
		arn: string,
	): NimbleStreamingImageArnComponents {
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
	static streamingSession(props: NimbleStreamingSessionArnProps): string {
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
	static parseStreamingSessionArn(
		arn: string,
	): NimbleStreamingSessionArnComponents {
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
	static streamingSessionBackup(
		props: NimbleStreamingSessionBackupArnProps,
	): string {
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
	static parseStreamingSessionBackupArn(
		arn: string,
	): NimbleStreamingSessionBackupArnComponents {
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
	static studio(props: NimbleStudioArnProps): string {
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
	static parseStudioArn(arn: string): NimbleStudioArnComponents {
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
	static studioComponent(props: NimbleStudioComponentArnProps): string {
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
	static parseStudioComponentArn(
		arn: string,
	): NimbleStudioComponentArnComponents {
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
	static readonly CreateLaunchProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingImage action. */
	static readonly CreateStreamingImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingSession action. */
	static readonly CreateStreamingSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingSessionStream action. */
	static readonly CreateStreamingSessionStreamConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the CreateStudio action. */
	static readonly CreateStudioConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStudioComponent action. */
	static readonly CreateStudioComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteStreamingSession action. */
	static readonly DeleteStreamingSessionConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSession action. */
	static readonly actionGetStreamingSessionConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSessionBackup action. */
	static readonly actionGetStreamingSessionBackupConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the GetStreamingSessionStream action. */
	static readonly actionGetStreamingSessionStreamConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListLaunchProfiles action. */
	static readonly ListLaunchProfilesConditionKeys: string[] = [
		"nimble:principalId",
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListStreamingSessionBackups action. */
	static readonly ListStreamingSessionBackupsConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the ListStreamingSessions action. */
	static readonly ListStreamingSessionsConditionKeys: string[] = [
		"nimble:createdBy",
		"nimble:ownedBy",
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the StartStreamingSession action. */
	static readonly StartStreamingSessionConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the StopStreamingSession action. */
	static readonly StopStreamingSessionConditionKeys: string[] = [
		"nimble:requesterPrincipalId",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
