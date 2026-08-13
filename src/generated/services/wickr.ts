// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/wickr.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the wickr service.
 */
export class WickrActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "wickr";

	/** [Write] wickr:BatchCreateUser */
	static readonly BATCH_CREATE_USER = "wickr:BatchCreateUser";
	/** [Write] wickr:BatchDeleteUser */
	static readonly BATCH_DELETE_USER = "wickr:BatchDeleteUser";
	/** [Read] wickr:BatchLookupUserUname */
	static readonly BATCH_LOOKUP_USER_UNAME = "wickr:BatchLookupUserUname";
	/** [Write] wickr:BatchReinviteUser */
	static readonly BATCH_REINVITE_USER = "wickr:BatchReinviteUser";
	/** [Write] wickr:BatchResetDevicesForUser */
	static readonly BATCH_RESET_DEVICES_FOR_USER =
		"wickr:BatchResetDevicesForUser";
	/** [Write] wickr:BatchToggleUserSuspendStatus */
	static readonly BATCH_TOGGLE_USER_SUSPEND_STATUS =
		"wickr:BatchToggleUserSuspendStatus";
	/** [Write] wickr:CreateAdminSession */
	static readonly CREATE_ADMIN_SESSION = "wickr:CreateAdminSession";
	/** [Write] wickr:CreateBot */
	static readonly CREATE_BOT = "wickr:CreateBot";
	/** [Write] wickr:CreateDataRetentionBot */
	static readonly CREATE_DATA_RETENTION_BOT = "wickr:CreateDataRetentionBot";
	/** [Write] wickr:CreateDataRetentionBotChallenge */
	static readonly CREATE_DATA_RETENTION_BOT_CHALLENGE =
		"wickr:CreateDataRetentionBotChallenge";
	/** [Write] wickr:CreateNetwork */
	static readonly CREATE_NETWORK = "wickr:CreateNetwork";
	/** [Write] wickr:CreateSecurityGroup */
	static readonly CREATE_SECURITY_GROUP = "wickr:CreateSecurityGroup";
	/** [Write] wickr:DeleteBot */
	static readonly DELETE_BOT = "wickr:DeleteBot";
	/** [Write] wickr:DeleteDataRetentionBot */
	static readonly DELETE_DATA_RETENTION_BOT = "wickr:DeleteDataRetentionBot";
	/** [Write] wickr:DeleteNetwork */
	static readonly DELETE_NETWORK = "wickr:DeleteNetwork";
	/** [Write] wickr:DeleteSecurityGroup */
	static readonly DELETE_SECURITY_GROUP = "wickr:DeleteSecurityGroup";
	/** [Read] wickr:GetBot */
	static readonly GET_BOT = "wickr:GetBot";
	/** [Read] wickr:GetBotsCount */
	static readonly GET_BOTS_COUNT = "wickr:GetBotsCount";
	/** [Read] wickr:GetDataRetentionBot */
	static readonly GET_DATA_RETENTION_BOT = "wickr:GetDataRetentionBot";
	/** [Read] wickr:GetGuestUserHistoryCount */
	static readonly GET_GUEST_USER_HISTORY_COUNT =
		"wickr:GetGuestUserHistoryCount";
	/** [Read] wickr:GetNetwork */
	static readonly GET_NETWORK = "wickr:GetNetwork";
	/** [Read] wickr:GetNetworkSettings */
	static readonly GET_NETWORK_SETTINGS = "wickr:GetNetworkSettings";
	/** [Read] wickr:GetOidcInfo */
	static readonly GET_OIDC_INFO = "wickr:GetOidcInfo";
	/** [Read] wickr:GetOpentdfConfig */
	static readonly GET_OPENTDF_CONFIG = "wickr:GetOpentdfConfig";
	/** [Read] wickr:GetSecurityGroup */
	static readonly GET_SECURITY_GROUP = "wickr:GetSecurityGroup";
	/** [Read] wickr:GetUser */
	static readonly GET_USER = "wickr:GetUser";
	/** [Read] wickr:GetUsersCount */
	static readonly GET_USERS_COUNT = "wickr:GetUsersCount";
	/** [Read] wickr:ListBlockedGuestUsers */
	static readonly LIST_BLOCKED_GUEST_USERS = "wickr:ListBlockedGuestUsers";
	/** [Read] wickr:ListBots */
	static readonly LIST_BOTS = "wickr:ListBots";
	/** [Read] wickr:ListDevicesForUser */
	static readonly LIST_DEVICES_FOR_USER = "wickr:ListDevicesForUser";
	/** [Read] wickr:ListGuestUsers */
	static readonly LIST_GUEST_USERS = "wickr:ListGuestUsers";
	/** [Read] wickr:ListNetworks */
	static readonly LIST_NETWORKS = "wickr:ListNetworks";
	/** [Read] wickr:ListSecurityGroupUsers */
	static readonly LIST_SECURITY_GROUP_USERS = "wickr:ListSecurityGroupUsers";
	/** [Read] wickr:ListSecurityGroups */
	static readonly LIST_SECURITY_GROUPS = "wickr:ListSecurityGroups";
	/** [Read] wickr:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "wickr:ListTagsForResource";
	/** [Read] wickr:ListUsers */
	static readonly LIST_USERS = "wickr:ListUsers";
	/** [Write] wickr:RegisterOidcConfig */
	static readonly REGISTER_OIDC_CONFIG = "wickr:RegisterOidcConfig";
	/** [Write] wickr:RegisterOidcConfigTest */
	static readonly REGISTER_OIDC_CONFIG_TEST = "wickr:RegisterOidcConfigTest";
	/** [Write] wickr:RegisterOpentdfConfig */
	static readonly REGISTER_OPENTDF_CONFIG = "wickr:RegisterOpentdfConfig";
	/** [Tagging] wickr:TagResource */
	static readonly TAG_RESOURCE = "wickr:TagResource";
	/** [Tagging] wickr:UntagResource */
	static readonly UNTAG_RESOURCE = "wickr:UntagResource";
	/** [Write] wickr:UpdateBot */
	static readonly UPDATE_BOT = "wickr:UpdateBot";
	/** [Write] wickr:UpdateDataRetention */
	static readonly UPDATE_DATA_RETENTION = "wickr:UpdateDataRetention";
	/** [Write] wickr:UpdateGuestUser */
	static readonly UPDATE_GUEST_USER = "wickr:UpdateGuestUser";
	/** [Write] wickr:UpdateNetworkDetails */
	static readonly UPDATE_NETWORK_DETAILS = "wickr:UpdateNetworkDetails";
	/** [Write] wickr:UpdateNetworkSettings */
	static readonly UPDATE_NETWORK_SETTINGS = "wickr:UpdateNetworkSettings";
	/** [Write] wickr:UpdateSecurityGroup */
	static readonly UPDATE_SECURITY_GROUP = "wickr:UpdateSecurityGroup";
	/** [Write] wickr:UpdateUser */
	static readonly UPDATE_USER = "wickr:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WickrActions.BATCH_LOOKUP_USER_UNAME,
		WickrActions.GET_BOT,
		WickrActions.GET_BOTS_COUNT,
		WickrActions.GET_DATA_RETENTION_BOT,
		WickrActions.GET_GUEST_USER_HISTORY_COUNT,
		WickrActions.GET_NETWORK,
		WickrActions.GET_NETWORK_SETTINGS,
		WickrActions.GET_OIDC_INFO,
		WickrActions.GET_OPENTDF_CONFIG,
		WickrActions.GET_SECURITY_GROUP,
		WickrActions.GET_USER,
		WickrActions.GET_USERS_COUNT,
		WickrActions.LIST_BLOCKED_GUEST_USERS,
		WickrActions.LIST_BOTS,
		WickrActions.LIST_DEVICES_FOR_USER,
		WickrActions.LIST_GUEST_USERS,
		WickrActions.LIST_NETWORKS,
		WickrActions.LIST_SECURITY_GROUP_USERS,
		WickrActions.LIST_SECURITY_GROUPS,
		WickrActions.LIST_TAGS_FOR_RESOURCE,
		WickrActions.LIST_USERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WickrActions.BATCH_CREATE_USER,
		WickrActions.BATCH_DELETE_USER,
		WickrActions.BATCH_REINVITE_USER,
		WickrActions.BATCH_RESET_DEVICES_FOR_USER,
		WickrActions.BATCH_TOGGLE_USER_SUSPEND_STATUS,
		WickrActions.CREATE_ADMIN_SESSION,
		WickrActions.CREATE_BOT,
		WickrActions.CREATE_DATA_RETENTION_BOT,
		WickrActions.CREATE_DATA_RETENTION_BOT_CHALLENGE,
		WickrActions.CREATE_NETWORK,
		WickrActions.CREATE_SECURITY_GROUP,
		WickrActions.DELETE_BOT,
		WickrActions.DELETE_DATA_RETENTION_BOT,
		WickrActions.DELETE_NETWORK,
		WickrActions.DELETE_SECURITY_GROUP,
		WickrActions.REGISTER_OIDC_CONFIG,
		WickrActions.REGISTER_OIDC_CONFIG_TEST,
		WickrActions.REGISTER_OPENTDF_CONFIG,
		WickrActions.UPDATE_BOT,
		WickrActions.UPDATE_DATA_RETENTION,
		WickrActions.UPDATE_GUEST_USER,
		WickrActions.UPDATE_NETWORK_DETAILS,
		WickrActions.UPDATE_NETWORK_SETTINGS,
		WickrActions.UPDATE_SECURITY_GROUP,
		WickrActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WickrActions.TAG_RESOURCE,
		WickrActions.UNTAG_RESOURCE,
	];
}

const NetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wickr:(?<region>[^:]*):(?<account>[^:]*):network/(?<networkId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for wickr resources.
 */
export class WickrResources {
	/**
	 * Builds an ARN for the network resource.
	 */
	static network(props: {
		/** The NetworkId component of the ARN. */
		readonly networkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wickr:${props.region ?? "*"}:${props.account ?? "*"}:network/${props.networkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network resource.
	 */
	static isValidNetworkArn(arn: string): boolean {
		return NetworkArnRegex.test(arn);
	}

	/**
	 * Parses a network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkId: string;
	} {
		const match = NetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkId: match.groups!.networkId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for wickr.
 */
export class WickrOperations {
	/** IAM actions required for the BatchCreateUser API call. */
	static readonly BATCH_CREATE_USER: string[] = ["wickr:BatchCreateUser"];
	/** IAM actions required for the BatchDeleteUser API call. */
	static readonly BATCH_DELETE_USER: string[] = ["wickr:BatchDeleteUser"];
	/** IAM actions required for the BatchLookupUserUname API call. */
	static readonly BATCH_LOOKUP_USER_UNAME: string[] = [
		"wickr:BatchLookupUserUname",
	];
	/** IAM actions required for the BatchReinviteUser API call. */
	static readonly BATCH_REINVITE_USER: string[] = ["wickr:BatchReinviteUser"];
	/** IAM actions required for the BatchResetDevicesForUser API call. */
	static readonly BATCH_RESET_DEVICES_FOR_USER: string[] = [
		"wickr:BatchResetDevicesForUser",
	];
	/** IAM actions required for the BatchToggleUserSuspendStatus API call. */
	static readonly BATCH_TOGGLE_USER_SUSPEND_STATUS: string[] = [
		"wickr:BatchToggleUserSuspendStatus",
	];
	/** IAM actions required for the CreateBot API call. */
	static readonly CREATE_BOT: string[] = ["wickr:CreateBot"];
	/** IAM actions required for the CreateDataRetentionBot API call. */
	static readonly CREATE_DATA_RETENTION_BOT: string[] = [
		"wickr:CreateDataRetentionBot",
	];
	/** IAM actions required for the CreateDataRetentionBotChallenge API call. */
	static readonly CREATE_DATA_RETENTION_BOT_CHALLENGE: string[] = [
		"wickr:CreateDataRetentionBotChallenge",
	];
	/** IAM actions required for the CreateNetwork API call. */
	static readonly CREATE_NETWORK: string[] = [
		"wickr:CreateNetwork",
		"wickr:TagResource",
	];
	/** IAM actions required for the CreateSecurityGroup API call. */
	static readonly CREATE_SECURITY_GROUP: string[] = [
		"wickr:CreateSecurityGroup",
	];
	/** IAM actions required for the DeleteBot API call. */
	static readonly DELETE_BOT: string[] = ["wickr:DeleteBot"];
	/** IAM actions required for the DeleteDataRetentionBot API call. */
	static readonly DELETE_DATA_RETENTION_BOT: string[] = [
		"wickr:DeleteDataRetentionBot",
	];
	/** IAM actions required for the DeleteNetwork API call. */
	static readonly DELETE_NETWORK: string[] = ["wickr:DeleteNetwork"];
	/** IAM actions required for the DeleteSecurityGroup API call. */
	static readonly DELETE_SECURITY_GROUP: string[] = [
		"wickr:DeleteSecurityGroup",
	];
	/** IAM actions required for the GetBot API call. */
	static readonly GET_BOT: string[] = ["wickr:GetBot"];
	/** IAM actions required for the GetBotsCount API call. */
	static readonly GET_BOTS_COUNT: string[] = ["wickr:GetBotsCount"];
	/** IAM actions required for the GetDataRetentionBot API call. */
	static readonly GET_DATA_RETENTION_BOT: string[] = [
		"wickr:GetDataRetentionBot",
	];
	/** IAM actions required for the GetGuestUserHistoryCount API call. */
	static readonly GET_GUEST_USER_HISTORY_COUNT: string[] = [
		"wickr:GetGuestUserHistoryCount",
	];
	/** IAM actions required for the GetNetwork API call. */
	static readonly GET_NETWORK: string[] = ["wickr:GetNetwork"];
	/** IAM actions required for the GetNetworkSettings API call. */
	static readonly GET_NETWORK_SETTINGS: string[] = ["wickr:GetNetworkSettings"];
	/** IAM actions required for the GetOidcInfo API call. */
	static readonly GET_OIDC_INFO: string[] = ["wickr:GetOidcInfo"];
	/** IAM actions required for the GetOpentdfConfig API call. */
	static readonly GET_OPENTDF_CONFIG: string[] = ["wickr:GetOpentdfConfig"];
	/** IAM actions required for the GetSecurityGroup API call. */
	static readonly GET_SECURITY_GROUP: string[] = ["wickr:GetSecurityGroup"];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = ["wickr:GetUser"];
	/** IAM actions required for the GetUsersCount API call. */
	static readonly GET_USERS_COUNT: string[] = ["wickr:GetUsersCount"];
	/** IAM actions required for the ListBlockedGuestUsers API call. */
	static readonly LIST_BLOCKED_GUEST_USERS: string[] = [
		"wickr:ListBlockedGuestUsers",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly LIST_BOTS: string[] = ["wickr:ListBots"];
	/** IAM actions required for the ListDevicesForUser API call. */
	static readonly LIST_DEVICES_FOR_USER: string[] = [
		"wickr:ListDevicesForUser",
	];
	/** IAM actions required for the ListGuestUsers API call. */
	static readonly LIST_GUEST_USERS: string[] = ["wickr:ListGuestUsers"];
	/** IAM actions required for the ListNetworks API call. */
	static readonly LIST_NETWORKS: string[] = ["wickr:ListNetworks"];
	/** IAM actions required for the ListSecurityGroupUsers API call. */
	static readonly LIST_SECURITY_GROUP_USERS: string[] = [
		"wickr:ListSecurityGroupUsers",
	];
	/** IAM actions required for the ListSecurityGroups API call. */
	static readonly LIST_SECURITY_GROUPS: string[] = ["wickr:ListSecurityGroups"];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["wickr:ListUsers"];
	/** IAM actions required for the RegisterOidcConfig API call. */
	static readonly REGISTER_OIDC_CONFIG: string[] = ["wickr:RegisterOidcConfig"];
	/** IAM actions required for the RegisterOidcConfigTest API call. */
	static readonly REGISTER_OIDC_CONFIG_TEST: string[] = [
		"wickr:RegisterOidcConfigTest",
	];
	/** IAM actions required for the RegisterOpentdfConfig API call. */
	static readonly REGISTER_OPENTDF_CONFIG: string[] = [
		"wickr:RegisterOpentdfConfig",
	];
	/** IAM actions required for the UpdateBot API call. */
	static readonly UPDATE_BOT: string[] = ["wickr:UpdateBot"];
	/** IAM actions required for the UpdateDataRetention API call. */
	static readonly UPDATE_DATA_RETENTION: string[] = [
		"wickr:UpdateDataRetention",
	];
	/** IAM actions required for the UpdateGuestUser API call. */
	static readonly UPDATE_GUEST_USER: string[] = ["wickr:UpdateGuestUser"];
	/** IAM actions required for the UpdateNetwork API call. */
	static readonly UPDATE_NETWORK: string[] = [];
	/** IAM actions required for the UpdateNetworkSettings API call. */
	static readonly UPDATE_NETWORK_SETTINGS: string[] = [
		"wickr:UpdateNetworkSettings",
	];
	/** IAM actions required for the UpdateSecurityGroup API call. */
	static readonly UPDATE_SECURITY_GROUP: string[] = [
		"wickr:UpdateSecurityGroup",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["wickr:UpdateUser"];
}

/**
 * Condition key constants and builders for wickr.
 */
export class WickrConditions {
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CREATE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
