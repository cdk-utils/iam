// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ivschat.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ivschat service.
 */
export class IvschatActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ivschat";

	/** [Write] ivschat:CreateChatToken */
	static readonly CREATE_CHAT_TOKEN = "ivschat:CreateChatToken";
	/** [Write] ivschat:CreateLoggingConfiguration */
	static readonly CREATE_LOGGING_CONFIGURATION =
		"ivschat:CreateLoggingConfiguration";
	/** [Write] ivschat:CreateRoom */
	static readonly CREATE_ROOM = "ivschat:CreateRoom";
	/** [Write] ivschat:DeleteLoggingConfiguration */
	static readonly DELETE_LOGGING_CONFIGURATION =
		"ivschat:DeleteLoggingConfiguration";
	/** [Write] ivschat:DeleteMessage */
	static readonly DELETE_MESSAGE = "ivschat:DeleteMessage";
	/** [Write] ivschat:DeleteRoom */
	static readonly DELETE_ROOM = "ivschat:DeleteRoom";
	/** [Write] ivschat:DisconnectUser */
	static readonly DISCONNECT_USER = "ivschat:DisconnectUser";
	/** [Read] ivschat:GetLoggingConfiguration */
	static readonly GET_LOGGING_CONFIGURATION = "ivschat:GetLoggingConfiguration";
	/** [Read] ivschat:GetRoom */
	static readonly GET_ROOM = "ivschat:GetRoom";
	/** [List] ivschat:ListLoggingConfigurations */
	static readonly LIST_LOGGING_CONFIGURATIONS =
		"ivschat:ListLoggingConfigurations";
	/** [List] ivschat:ListRooms */
	static readonly LIST_ROOMS = "ivschat:ListRooms";
	/** [Read] ivschat:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ivschat:ListTagsForResource";
	/** [Write] ivschat:SendEvent */
	static readonly SEND_EVENT = "ivschat:SendEvent";
	/** [Tagging] ivschat:TagResource */
	static readonly TAG_RESOURCE = "ivschat:TagResource";
	/** [Tagging] ivschat:UntagResource */
	static readonly UNTAG_RESOURCE = "ivschat:UntagResource";
	/** [Write] ivschat:UpdateLoggingConfiguration */
	static readonly UPDATE_LOGGING_CONFIGURATION =
		"ivschat:UpdateLoggingConfiguration";
	/** [Write] ivschat:UpdateRoom */
	static readonly UPDATE_ROOM = "ivschat:UpdateRoom";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IvschatActions.GET_LOGGING_CONFIGURATION,
		IvschatActions.GET_ROOM,
		IvschatActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IvschatActions.CREATE_CHAT_TOKEN,
		IvschatActions.CREATE_LOGGING_CONFIGURATION,
		IvschatActions.CREATE_ROOM,
		IvschatActions.DELETE_LOGGING_CONFIGURATION,
		IvschatActions.DELETE_MESSAGE,
		IvschatActions.DELETE_ROOM,
		IvschatActions.DISCONNECT_USER,
		IvschatActions.SEND_EVENT,
		IvschatActions.UPDATE_LOGGING_CONFIGURATION,
		IvschatActions.UPDATE_ROOM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IvschatActions.LIST_LOGGING_CONFIGURATIONS,
		IvschatActions.LIST_ROOMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IvschatActions.TAG_RESOURCE,
		IvschatActions.UNTAG_RESOURCE,
	];
}

const LoggingConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivschat:(?<region>[^:]*):(?<account>[^:]*):logging-configuration/(?<resourceId>[^:/?]+)$",
);
const RoomArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ivschat:(?<region>[^:]*):(?<account>[^:]*):room/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ivschat resources.
 */
export class IvschatResources {
	/**
	 * Builds an ARN for the Logging-Configuration resource.
	 */
	static loggingConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ivschat:${props.region ?? "*"}:${props.account ?? "*"}:logging-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Logging-Configuration resource.
	 */
	static isValidLoggingConfigurationArn(arn: string): boolean {
		return LoggingConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Logging-Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoggingConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = LoggingConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Logging-Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Room resource.
	 */
	static room(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ivschat:${props.region ?? "*"}:${props.account ?? "*"}:room/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Room resource.
	 */
	static isValidRoomArn(arn: string): boolean {
		return RoomArnRegex.test(arn);
	}

	/**
	 * Parses a Room ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoomArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RoomArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Room ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for ivschat.
 */
export class IvschatOperations {
	/** IAM actions required for the CreateChatToken API call. */
	static readonly CREATE_CHAT_TOKEN: string[] = ["ivschat:CreateChatToken"];
	/** IAM actions required for the CreateLoggingConfiguration API call. */
	static readonly CREATE_LOGGING_CONFIGURATION: string[] = [
		"ivschat:CreateLoggingConfiguration",
		"ivschat:TagResource",
	];
	/** IAM actions required for the CreateRoom API call. */
	static readonly CREATE_ROOM: string[] = [
		"ivschat:CreateRoom",
		"ivschat:TagResource",
	];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DELETE_LOGGING_CONFIGURATION: string[] = [
		"ivschat:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeleteMessage API call. */
	static readonly DELETE_MESSAGE: string[] = ["ivschat:DeleteMessage"];
	/** IAM actions required for the DeleteRoom API call. */
	static readonly DELETE_ROOM: string[] = ["ivschat:DeleteRoom"];
	/** IAM actions required for the DisconnectUser API call. */
	static readonly DISCONNECT_USER: string[] = ["ivschat:DisconnectUser"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly GET_LOGGING_CONFIGURATION: string[] = [
		"ivschat:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetRoom API call. */
	static readonly GET_ROOM: string[] = ["ivschat:GetRoom"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly LIST_LOGGING_CONFIGURATIONS: string[] = [
		"ivschat:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListRooms API call. */
	static readonly LIST_ROOMS: string[] = ["ivschat:ListRooms"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ivschat:ListTagsForResource",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SEND_EVENT: string[] = ["ivschat:SendEvent"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ivschat:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ivschat:UntagResource"];
	/** IAM actions required for the UpdateLoggingConfiguration API call. */
	static readonly UPDATE_LOGGING_CONFIGURATION: string[] = [
		"ivschat:UpdateLoggingConfiguration",
	];
	/** IAM actions required for the UpdateRoom API call. */
	static readonly UPDATE_ROOM: string[] = ["ivschat:UpdateRoom"];
}

/**
 * Condition key constants and builders for ivschat.
 */
export class IvschatConditions {
	/** Condition keys applicable to the CreateChatToken action. */
	static readonly CREATE_CHAT_TOKEN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggingConfiguration action. */
	static readonly CREATE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoom action. */
	static readonly CREATE_ROOM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
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
