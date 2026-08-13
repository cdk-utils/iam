// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/gameliftstreams.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the gameliftstreams service.
 */
export class GameliftstreamsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "gameliftstreams";

	/** [Write] gameliftstreams:AddStreamGroupLocations */
	static readonly ADD_STREAM_GROUP_LOCATIONS =
		"gameliftstreams:AddStreamGroupLocations";
	/** [Write] gameliftstreams:AssociateApplications */
	static readonly ASSOCIATE_APPLICATIONS =
		"gameliftstreams:AssociateApplications";
	/** [Write] gameliftstreams:CreateApplication */
	static readonly CREATE_APPLICATION = "gameliftstreams:CreateApplication";
	/** [Write] gameliftstreams:CreateStreamGroup */
	static readonly CREATE_STREAM_GROUP = "gameliftstreams:CreateStreamGroup";
	/** [Write] gameliftstreams:CreateStreamSessionAdminShell */
	static readonly CREATE_STREAM_SESSION_ADMIN_SHELL =
		"gameliftstreams:CreateStreamSessionAdminShell";
	/** [Write] gameliftstreams:CreateStreamSessionConnection */
	static readonly CREATE_STREAM_SESSION_CONNECTION =
		"gameliftstreams:CreateStreamSessionConnection";
	/** [Write] gameliftstreams:CreateStreamUrl */
	static readonly CREATE_STREAM_URL = "gameliftstreams:CreateStreamUrl";
	/** [Write] gameliftstreams:DeleteApplication */
	static readonly DELETE_APPLICATION = "gameliftstreams:DeleteApplication";
	/** [Write] gameliftstreams:DeleteStreamGroup */
	static readonly DELETE_STREAM_GROUP = "gameliftstreams:DeleteStreamGroup";
	/** [Write] gameliftstreams:DisassociateApplications */
	static readonly DISASSOCIATE_APPLICATIONS =
		"gameliftstreams:DisassociateApplications";
	/** [Write] gameliftstreams:ExportStreamSessionFiles */
	static readonly EXPORT_STREAM_SESSION_FILES =
		"gameliftstreams:ExportStreamSessionFiles";
	/** [Read] gameliftstreams:GetApplication */
	static readonly GET_APPLICATION = "gameliftstreams:GetApplication";
	/** [Read] gameliftstreams:GetStreamGroup */
	static readonly GET_STREAM_GROUP = "gameliftstreams:GetStreamGroup";
	/** [Read] gameliftstreams:GetStreamSession */
	static readonly GET_STREAM_SESSION = "gameliftstreams:GetStreamSession";
	/** [Read] gameliftstreams:GetStreamUrl */
	static readonly GET_STREAM_URL = "gameliftstreams:GetStreamUrl";
	/** [List] gameliftstreams:ListApplicationShaderCaches */
	static readonly LIST_APPLICATION_SHADER_CACHES =
		"gameliftstreams:ListApplicationShaderCaches";
	/** [List] gameliftstreams:ListApplications */
	static readonly LIST_APPLICATIONS = "gameliftstreams:ListApplications";
	/** [List] gameliftstreams:ListStreamGroups */
	static readonly LIST_STREAM_GROUPS = "gameliftstreams:ListStreamGroups";
	/** [Read] gameliftstreams:ListStreamSessions */
	static readonly LIST_STREAM_SESSIONS = "gameliftstreams:ListStreamSessions";
	/** [Read] gameliftstreams:ListStreamSessionsByAccount */
	static readonly LIST_STREAM_SESSIONS_BY_ACCOUNT =
		"gameliftstreams:ListStreamSessionsByAccount";
	/** [List] gameliftstreams:ListStreamUrls */
	static readonly LIST_STREAM_URLS = "gameliftstreams:ListStreamUrls";
	/** [Read] gameliftstreams:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"gameliftstreams:ListTagsForResource";
	/** [Write] gameliftstreams:RemoveStreamGroupLocations */
	static readonly REMOVE_STREAM_GROUP_LOCATIONS =
		"gameliftstreams:RemoveStreamGroupLocations";
	/** [Write] gameliftstreams:RevokeStreamUrl */
	static readonly REVOKE_STREAM_URL = "gameliftstreams:RevokeStreamUrl";
	/** [Write] gameliftstreams:StartStreamSession */
	static readonly START_STREAM_SESSION = "gameliftstreams:StartStreamSession";
	/** [Tagging] gameliftstreams:TagResource */
	static readonly TAG_RESOURCE = "gameliftstreams:TagResource";
	/** [Write] gameliftstreams:TerminateStreamSession */
	static readonly TERMINATE_STREAM_SESSION =
		"gameliftstreams:TerminateStreamSession";
	/** [Tagging] gameliftstreams:UntagResource */
	static readonly UNTAG_RESOURCE = "gameliftstreams:UntagResource";
	/** [Write] gameliftstreams:UpdateApplication */
	static readonly UPDATE_APPLICATION = "gameliftstreams:UpdateApplication";
	/** [Write] gameliftstreams:UpdateStreamGroup */
	static readonly UPDATE_STREAM_GROUP = "gameliftstreams:UpdateStreamGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GameliftstreamsActions.GET_APPLICATION,
		GameliftstreamsActions.GET_STREAM_GROUP,
		GameliftstreamsActions.GET_STREAM_SESSION,
		GameliftstreamsActions.GET_STREAM_URL,
		GameliftstreamsActions.LIST_STREAM_SESSIONS,
		GameliftstreamsActions.LIST_STREAM_SESSIONS_BY_ACCOUNT,
		GameliftstreamsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GameliftstreamsActions.ADD_STREAM_GROUP_LOCATIONS,
		GameliftstreamsActions.ASSOCIATE_APPLICATIONS,
		GameliftstreamsActions.CREATE_APPLICATION,
		GameliftstreamsActions.CREATE_STREAM_GROUP,
		GameliftstreamsActions.CREATE_STREAM_SESSION_ADMIN_SHELL,
		GameliftstreamsActions.CREATE_STREAM_SESSION_CONNECTION,
		GameliftstreamsActions.CREATE_STREAM_URL,
		GameliftstreamsActions.DELETE_APPLICATION,
		GameliftstreamsActions.DELETE_STREAM_GROUP,
		GameliftstreamsActions.DISASSOCIATE_APPLICATIONS,
		GameliftstreamsActions.EXPORT_STREAM_SESSION_FILES,
		GameliftstreamsActions.REMOVE_STREAM_GROUP_LOCATIONS,
		GameliftstreamsActions.REVOKE_STREAM_URL,
		GameliftstreamsActions.START_STREAM_SESSION,
		GameliftstreamsActions.TERMINATE_STREAM_SESSION,
		GameliftstreamsActions.UPDATE_APPLICATION,
		GameliftstreamsActions.UPDATE_STREAM_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GameliftstreamsActions.LIST_APPLICATION_SHADER_CACHES,
		GameliftstreamsActions.LIST_APPLICATIONS,
		GameliftstreamsActions.LIST_STREAM_GROUPS,
		GameliftstreamsActions.LIST_STREAM_URLS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GameliftstreamsActions.TAG_RESOURCE,
		GameliftstreamsActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gameliftstreams:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const StreamGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gameliftstreams:(?<region>[^:]*):(?<account>[^:]*):streamgroup/(?<streamGroupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for gameliftstreams resources.
 */
export class GameliftstreamsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gameliftstreams:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the stream group resource.
	 */
	static streamGroup(props: {
		/** The StreamGroupId component of the ARN. */
		readonly streamGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gameliftstreams:${props.region ?? "*"}:${props.account ?? "*"}:streamgroup/${props.streamGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream group resource.
	 */
	static isValidStreamGroupArn(arn: string): boolean {
		return StreamGroupArnRegex.test(arn);
	}

	/**
	 * Parses a stream group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamGroupId: string;
	} {
		const match = StreamGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamGroupId: match.groups!.streamGroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for gameliftstreams.
 */
export class GameliftstreamsOperations {
	/** IAM actions required for the AddStreamGroupLocations API call. */
	static readonly ADD_STREAM_GROUP_LOCATIONS: string[] = [
		"gameliftstreams:AddStreamGroupLocations",
	];
	/** IAM actions required for the AssociateApplications API call. */
	static readonly ASSOCIATE_APPLICATIONS: string[] = [
		"gameliftstreams:AssociateApplications",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"gameliftstreams:CreateApplication",
		"gameliftstreams:TagResource",
	];
	/** IAM actions required for the CreateStreamGroup API call. */
	static readonly CREATE_STREAM_GROUP: string[] = [
		"gameliftstreams:AssociateApplications",
		"gameliftstreams:CreateStreamGroup",
		"gameliftstreams:TagResource",
	];
	/** IAM actions required for the CreateStreamSessionAdminShell API call. */
	static readonly CREATE_STREAM_SESSION_ADMIN_SHELL: string[] = [
		"gameliftstreams:CreateStreamSessionAdminShell",
	];
	/** IAM actions required for the CreateStreamSessionConnection API call. */
	static readonly CREATE_STREAM_SESSION_CONNECTION: string[] = [
		"gameliftstreams:CreateStreamSessionConnection",
	];
	/** IAM actions required for the CreateStreamUrl API call. */
	static readonly CREATE_STREAM_URL: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"gameliftstreams:DeleteApplication",
	];
	/** IAM actions required for the DeleteStreamGroup API call. */
	static readonly DELETE_STREAM_GROUP: string[] = [
		"gameliftstreams:DeleteStreamGroup",
	];
	/** IAM actions required for the DisassociateApplications API call. */
	static readonly DISASSOCIATE_APPLICATIONS: string[] = [
		"gameliftstreams:DisassociateApplications",
	];
	/** IAM actions required for the ExportStreamSessionFiles API call. */
	static readonly EXPORT_STREAM_SESSION_FILES: string[] = [
		"gameliftstreams:ExportStreamSessionFiles",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = [
		"gameliftstreams:GetApplication",
	];
	/** IAM actions required for the GetStreamGroup API call. */
	static readonly GET_STREAM_GROUP: string[] = [
		"gameliftstreams:GetStreamGroup",
	];
	/** IAM actions required for the GetStreamSession API call. */
	static readonly GET_STREAM_SESSION: string[] = [
		"gameliftstreams:GetStreamSession",
	];
	/** IAM actions required for the GetStreamUrl API call. */
	static readonly GET_STREAM_URL: string[] = ["gameliftstreams:GetStreamUrl"];
	/** IAM actions required for the ListApplicationShaderCaches API call. */
	static readonly LIST_APPLICATION_SHADER_CACHES: string[] = [
		"gameliftstreams:ListApplicationShaderCaches",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"gameliftstreams:ListApplications",
	];
	/** IAM actions required for the ListStreamGroups API call. */
	static readonly LIST_STREAM_GROUPS: string[] = [
		"gameliftstreams:ListStreamGroups",
	];
	/** IAM actions required for the ListStreamSessions API call. */
	static readonly LIST_STREAM_SESSIONS: string[] = [
		"gameliftstreams:ListStreamSessions",
	];
	/** IAM actions required for the ListStreamSessionsByAccount API call. */
	static readonly LIST_STREAM_SESSIONS_BY_ACCOUNT: string[] = [
		"gameliftstreams:ListStreamSessionsByAccount",
	];
	/** IAM actions required for the ListStreamUrls API call. */
	static readonly LIST_STREAM_URLS: string[] = [
		"gameliftstreams:ListStreamUrls",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"gameliftstreams:ListTagsForResource",
	];
	/** IAM actions required for the RemoveStreamGroupLocations API call. */
	static readonly REMOVE_STREAM_GROUP_LOCATIONS: string[] = [
		"gameliftstreams:RemoveStreamGroupLocations",
	];
	/** IAM actions required for the RevokeStreamUrl API call. */
	static readonly REVOKE_STREAM_URL: string[] = [
		"gameliftstreams:RevokeStreamUrl",
	];
	/** IAM actions required for the StartStreamSession API call. */
	static readonly START_STREAM_SESSION: string[] = [
		"iam:PassRole",
		"gameliftstreams:StartStreamSession",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["gameliftstreams:TagResource"];
	/** IAM actions required for the TerminateStreamSession API call. */
	static readonly TERMINATE_STREAM_SESSION: string[] = [
		"gameliftstreams:TerminateStreamSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["gameliftstreams:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"gameliftstreams:UpdateApplication",
	];
	/** IAM actions required for the UpdateStreamGroup API call. */
	static readonly UPDATE_STREAM_GROUP: string[] = [
		"gameliftstreams:UpdateStreamGroup",
	];
}

/**
 * Condition key constants and builders for gameliftstreams.
 */
export class GameliftstreamsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamGroup action. */
	static readonly CREATE_STREAM_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamUrl action. */
	static readonly CREATE_STREAM_URL_CONDITION_KEYS: string[] = [
		"gameliftstreams:RoleArn",
	];
	/** Condition keys applicable to the StartStreamSession action. */
	static readonly START_STREAM_SESSION_CONDITION_KEYS: string[] = [
		"gameliftstreams:RoleArn",
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
	/** Condition key: gameliftstreams:RoleArn (ARN) */
	static readonly ROLE_ARN = "gameliftstreams:RoleArn";

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
	 * Generates a condition block for `gameliftstreams:RoleArn`.
	 */
	static roleARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "gameliftstreams:RoleArn": value } };
	}
}
