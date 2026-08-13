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
	static readonly CreateChatToken = "ivschat:CreateChatToken";
	/** [Write] ivschat:CreateLoggingConfiguration */
	static readonly CreateLoggingConfiguration =
		"ivschat:CreateLoggingConfiguration";
	/** [Write] ivschat:CreateRoom */
	static readonly CreateRoom = "ivschat:CreateRoom";
	/** [Write] ivschat:DeleteLoggingConfiguration */
	static readonly DeleteLoggingConfiguration =
		"ivschat:DeleteLoggingConfiguration";
	/** [Write] ivschat:DeleteMessage */
	static readonly DeleteMessage = "ivschat:DeleteMessage";
	/** [Write] ivschat:DeleteRoom */
	static readonly DeleteRoom = "ivschat:DeleteRoom";
	/** [Write] ivschat:DisconnectUser */
	static readonly DisconnectUser = "ivschat:DisconnectUser";
	/** [Read] ivschat:GetLoggingConfiguration */
	static readonly actionGetLoggingConfiguration =
		"ivschat:GetLoggingConfiguration";
	/** [Read] ivschat:GetRoom */
	static readonly actionGetRoom = "ivschat:GetRoom";
	/** [List] ivschat:ListLoggingConfigurations */
	static readonly ListLoggingConfigurations =
		"ivschat:ListLoggingConfigurations";
	/** [List] ivschat:ListRooms */
	static readonly ListRooms = "ivschat:ListRooms";
	/** [Read] ivschat:ListTagsForResource */
	static readonly ListTagsForResource = "ivschat:ListTagsForResource";
	/** [Write] ivschat:SendEvent */
	static readonly SendEvent = "ivschat:SendEvent";
	/** [Tagging] ivschat:TagResource */
	static readonly TagResource = "ivschat:TagResource";
	/** [Tagging] ivschat:UntagResource */
	static readonly UntagResource = "ivschat:UntagResource";
	/** [Write] ivschat:UpdateLoggingConfiguration */
	static readonly UpdateLoggingConfiguration =
		"ivschat:UpdateLoggingConfiguration";
	/** [Write] ivschat:UpdateRoom */
	static readonly UpdateRoom = "ivschat:UpdateRoom";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IvschatActions.actionGetLoggingConfiguration,
		IvschatActions.actionGetRoom,
		IvschatActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IvschatActions.CreateChatToken,
		IvschatActions.CreateLoggingConfiguration,
		IvschatActions.CreateRoom,
		IvschatActions.DeleteLoggingConfiguration,
		IvschatActions.DeleteMessage,
		IvschatActions.DeleteRoom,
		IvschatActions.DisconnectUser,
		IvschatActions.SendEvent,
		IvschatActions.UpdateLoggingConfiguration,
		IvschatActions.UpdateRoom,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IvschatActions.ListLoggingConfigurations,
		IvschatActions.ListRooms,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IvschatActions.TagResource,
		IvschatActions.UntagResource,
	];
}

/**
 * Properties for building a Logging-Configuration ARN.
 */
export interface IvschatLoggingConfigurationArnProps {
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
 * Parsed components of a Logging-Configuration ARN.
 */
export interface IvschatLoggingConfigurationArnComponents {
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
 * Properties for building a Room ARN.
 */
export interface IvschatRoomArnProps {
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
 * Parsed components of a Room ARN.
 */
export interface IvschatRoomArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const LoggingConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):ivschat:(?<region>[^:]*):(?<account>[^:]*):logging-configuration\/(?<resourceId>[^:/?]+)$/;
const RoomArnRegex =
	/^arn:(?<partition>[^:]+):ivschat:(?<region>[^:]*):(?<account>[^:]*):room\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ivschat resources.
 */
export class IvschatResources {
	/**
	 * Builds an ARN for the Logging-Configuration resource.
	 */
	static loggingConfiguration(
		props: IvschatLoggingConfigurationArnProps,
	): string {
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
	static parseLoggingConfigurationArn(
		arn: string,
	): IvschatLoggingConfigurationArnComponents {
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
	static room(props: IvschatRoomArnProps): string {
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
	static parseRoomArn(arn: string): IvschatRoomArnComponents {
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
	static readonly CreateChatToken: string[] = ["ivschat:CreateChatToken"];
	/** IAM actions required for the CreateLoggingConfiguration API call. */
	static readonly CreateLoggingConfiguration: string[] = [
		"ivschat:CreateLoggingConfiguration",
		"ivschat:TagResource",
	];
	/** IAM actions required for the CreateRoom API call. */
	static readonly CreateRoom: string[] = [
		"ivschat:CreateRoom",
		"ivschat:TagResource",
	];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DeleteLoggingConfiguration: string[] = [
		"ivschat:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeleteMessage API call. */
	static readonly DeleteMessage: string[] = ["ivschat:DeleteMessage"];
	/** IAM actions required for the DeleteRoom API call. */
	static readonly DeleteRoom: string[] = ["ivschat:DeleteRoom"];
	/** IAM actions required for the DisconnectUser API call. */
	static readonly DisconnectUser: string[] = ["ivschat:DisconnectUser"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly opGetLoggingConfiguration: string[] = [
		"ivschat:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetRoom API call. */
	static readonly opGetRoom: string[] = ["ivschat:GetRoom"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly ListLoggingConfigurations: string[] = [
		"ivschat:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListRooms API call. */
	static readonly ListRooms: string[] = ["ivschat:ListRooms"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ivschat:ListTagsForResource",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SendEvent: string[] = ["ivschat:SendEvent"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ivschat:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ivschat:UntagResource"];
	/** IAM actions required for the UpdateLoggingConfiguration API call. */
	static readonly UpdateLoggingConfiguration: string[] = [
		"ivschat:UpdateLoggingConfiguration",
	];
	/** IAM actions required for the UpdateRoom API call. */
	static readonly UpdateRoom: string[] = ["ivschat:UpdateRoom"];
}

/**
 * Condition key constants and builders for ivschat.
 */
export class IvschatConditions {
	/** Condition keys applicable to the CreateChatToken action. */
	static readonly CreateChatTokenConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggingConfiguration action. */
	static readonly CreateLoggingConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoom action. */
	static readonly CreateRoomConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
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
