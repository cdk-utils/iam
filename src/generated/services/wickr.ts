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
	static readonly BatchCreateUser = "wickr:BatchCreateUser";
	/** [Write] wickr:BatchDeleteUser */
	static readonly BatchDeleteUser = "wickr:BatchDeleteUser";
	/** [Read] wickr:BatchLookupUserUname */
	static readonly BatchLookupUserUname = "wickr:BatchLookupUserUname";
	/** [Write] wickr:BatchReinviteUser */
	static readonly BatchReinviteUser = "wickr:BatchReinviteUser";
	/** [Write] wickr:BatchResetDevicesForUser */
	static readonly BatchResetDevicesForUser = "wickr:BatchResetDevicesForUser";
	/** [Write] wickr:BatchToggleUserSuspendStatus */
	static readonly BatchToggleUserSuspendStatus =
		"wickr:BatchToggleUserSuspendStatus";
	/** [Write] wickr:CreateAdminSession */
	static readonly CreateAdminSession = "wickr:CreateAdminSession";
	/** [Write] wickr:CreateBot */
	static readonly CreateBot = "wickr:CreateBot";
	/** [Write] wickr:CreateDataRetentionBot */
	static readonly CreateDataRetentionBot = "wickr:CreateDataRetentionBot";
	/** [Write] wickr:CreateDataRetentionBotChallenge */
	static readonly CreateDataRetentionBotChallenge =
		"wickr:CreateDataRetentionBotChallenge";
	/** [Write] wickr:CreateNetwork */
	static readonly CreateNetwork = "wickr:CreateNetwork";
	/** [Write] wickr:CreateSecurityGroup */
	static readonly CreateSecurityGroup = "wickr:CreateSecurityGroup";
	/** [Write] wickr:DeleteBot */
	static readonly DeleteBot = "wickr:DeleteBot";
	/** [Write] wickr:DeleteDataRetentionBot */
	static readonly DeleteDataRetentionBot = "wickr:DeleteDataRetentionBot";
	/** [Write] wickr:DeleteNetwork */
	static readonly DeleteNetwork = "wickr:DeleteNetwork";
	/** [Write] wickr:DeleteSecurityGroup */
	static readonly DeleteSecurityGroup = "wickr:DeleteSecurityGroup";
	/** [Read] wickr:GetBot */
	static readonly actionGetBot = "wickr:GetBot";
	/** [Read] wickr:GetBotsCount */
	static readonly actionGetBotsCount = "wickr:GetBotsCount";
	/** [Read] wickr:GetDataRetentionBot */
	static readonly actionGetDataRetentionBot = "wickr:GetDataRetentionBot";
	/** [Read] wickr:GetGuestUserHistoryCount */
	static readonly actionGetGuestUserHistoryCount =
		"wickr:GetGuestUserHistoryCount";
	/** [Read] wickr:GetNetwork */
	static readonly actionGetNetwork = "wickr:GetNetwork";
	/** [Read] wickr:GetNetworkSettings */
	static readonly actionGetNetworkSettings = "wickr:GetNetworkSettings";
	/** [Read] wickr:GetOidcInfo */
	static readonly actionGetOidcInfo = "wickr:GetOidcInfo";
	/** [Read] wickr:GetOpentdfConfig */
	static readonly actionGetOpentdfConfig = "wickr:GetOpentdfConfig";
	/** [Read] wickr:GetSecurityGroup */
	static readonly actionGetSecurityGroup = "wickr:GetSecurityGroup";
	/** [Read] wickr:GetUser */
	static readonly actionGetUser = "wickr:GetUser";
	/** [Read] wickr:GetUsersCount */
	static readonly actionGetUsersCount = "wickr:GetUsersCount";
	/** [Read] wickr:ListBlockedGuestUsers */
	static readonly ListBlockedGuestUsers = "wickr:ListBlockedGuestUsers";
	/** [Read] wickr:ListBots */
	static readonly ListBots = "wickr:ListBots";
	/** [Read] wickr:ListDevicesForUser */
	static readonly ListDevicesForUser = "wickr:ListDevicesForUser";
	/** [Read] wickr:ListGuestUsers */
	static readonly ListGuestUsers = "wickr:ListGuestUsers";
	/** [Read] wickr:ListNetworks */
	static readonly ListNetworks = "wickr:ListNetworks";
	/** [Read] wickr:ListSecurityGroupUsers */
	static readonly ListSecurityGroupUsers = "wickr:ListSecurityGroupUsers";
	/** [Read] wickr:ListSecurityGroups */
	static readonly ListSecurityGroups = "wickr:ListSecurityGroups";
	/** [Read] wickr:ListTagsForResource */
	static readonly ListTagsForResource = "wickr:ListTagsForResource";
	/** [Read] wickr:ListUsers */
	static readonly ListUsers = "wickr:ListUsers";
	/** [Write] wickr:RegisterOidcConfig */
	static readonly RegisterOidcConfig = "wickr:RegisterOidcConfig";
	/** [Write] wickr:RegisterOidcConfigTest */
	static readonly RegisterOidcConfigTest = "wickr:RegisterOidcConfigTest";
	/** [Write] wickr:RegisterOpentdfConfig */
	static readonly RegisterOpentdfConfig = "wickr:RegisterOpentdfConfig";
	/** [Tagging] wickr:TagResource */
	static readonly TagResource = "wickr:TagResource";
	/** [Tagging] wickr:UntagResource */
	static readonly UntagResource = "wickr:UntagResource";
	/** [Write] wickr:UpdateBot */
	static readonly UpdateBot = "wickr:UpdateBot";
	/** [Write] wickr:UpdateDataRetention */
	static readonly UpdateDataRetention = "wickr:UpdateDataRetention";
	/** [Write] wickr:UpdateGuestUser */
	static readonly UpdateGuestUser = "wickr:UpdateGuestUser";
	/** [Write] wickr:UpdateNetworkDetails */
	static readonly UpdateNetworkDetails = "wickr:UpdateNetworkDetails";
	/** [Write] wickr:UpdateNetworkSettings */
	static readonly UpdateNetworkSettings = "wickr:UpdateNetworkSettings";
	/** [Write] wickr:UpdateSecurityGroup */
	static readonly UpdateSecurityGroup = "wickr:UpdateSecurityGroup";
	/** [Write] wickr:UpdateUser */
	static readonly UpdateUser = "wickr:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WickrActions.BatchLookupUserUname,
		WickrActions.actionGetBot,
		WickrActions.actionGetBotsCount,
		WickrActions.actionGetDataRetentionBot,
		WickrActions.actionGetGuestUserHistoryCount,
		WickrActions.actionGetNetwork,
		WickrActions.actionGetNetworkSettings,
		WickrActions.actionGetOidcInfo,
		WickrActions.actionGetOpentdfConfig,
		WickrActions.actionGetSecurityGroup,
		WickrActions.actionGetUser,
		WickrActions.actionGetUsersCount,
		WickrActions.ListBlockedGuestUsers,
		WickrActions.ListBots,
		WickrActions.ListDevicesForUser,
		WickrActions.ListGuestUsers,
		WickrActions.ListNetworks,
		WickrActions.ListSecurityGroupUsers,
		WickrActions.ListSecurityGroups,
		WickrActions.ListTagsForResource,
		WickrActions.ListUsers,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WickrActions.BatchCreateUser,
		WickrActions.BatchDeleteUser,
		WickrActions.BatchReinviteUser,
		WickrActions.BatchResetDevicesForUser,
		WickrActions.BatchToggleUserSuspendStatus,
		WickrActions.CreateAdminSession,
		WickrActions.CreateBot,
		WickrActions.CreateDataRetentionBot,
		WickrActions.CreateDataRetentionBotChallenge,
		WickrActions.CreateNetwork,
		WickrActions.CreateSecurityGroup,
		WickrActions.DeleteBot,
		WickrActions.DeleteDataRetentionBot,
		WickrActions.DeleteNetwork,
		WickrActions.DeleteSecurityGroup,
		WickrActions.RegisterOidcConfig,
		WickrActions.RegisterOidcConfigTest,
		WickrActions.RegisterOpentdfConfig,
		WickrActions.UpdateBot,
		WickrActions.UpdateDataRetention,
		WickrActions.UpdateGuestUser,
		WickrActions.UpdateNetworkDetails,
		WickrActions.UpdateNetworkSettings,
		WickrActions.UpdateSecurityGroup,
		WickrActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WickrActions.TagResource,
		WickrActions.UntagResource,
	];
}

/**
 * Properties for building a network ARN.
 */
export interface WickrNetworkArnProps {
	/** The NetworkId component of the ARN. */
	readonly networkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network ARN.
 */
export interface WickrNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkId component. */
	readonly networkId: string;
}

const NetworkArnRegex =
	/^arn:(?<partition>[^:]+):wickr:(?<region>[^:]*):(?<account>[^:]*):network\/(?<networkId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for wickr resources.
 */
export class WickrResources {
	/**
	 * Builds an ARN for the network resource.
	 */
	static network(props: WickrNetworkArnProps): string {
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
	static parseNetworkArn(arn: string): WickrNetworkArnComponents {
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
	static readonly BatchCreateUser: string[] = ["wickr:BatchCreateUser"];
	/** IAM actions required for the BatchDeleteUser API call. */
	static readonly BatchDeleteUser: string[] = ["wickr:BatchDeleteUser"];
	/** IAM actions required for the BatchLookupUserUname API call. */
	static readonly BatchLookupUserUname: string[] = [
		"wickr:BatchLookupUserUname",
	];
	/** IAM actions required for the BatchReinviteUser API call. */
	static readonly BatchReinviteUser: string[] = ["wickr:BatchReinviteUser"];
	/** IAM actions required for the BatchResetDevicesForUser API call. */
	static readonly BatchResetDevicesForUser: string[] = [
		"wickr:BatchResetDevicesForUser",
	];
	/** IAM actions required for the BatchToggleUserSuspendStatus API call. */
	static readonly BatchToggleUserSuspendStatus: string[] = [
		"wickr:BatchToggleUserSuspendStatus",
	];
	/** IAM actions required for the CreateBot API call. */
	static readonly CreateBot: string[] = ["wickr:CreateBot"];
	/** IAM actions required for the CreateDataRetentionBot API call. */
	static readonly CreateDataRetentionBot: string[] = [
		"wickr:CreateDataRetentionBot",
	];
	/** IAM actions required for the CreateDataRetentionBotChallenge API call. */
	static readonly CreateDataRetentionBotChallenge: string[] = [
		"wickr:CreateDataRetentionBotChallenge",
	];
	/** IAM actions required for the CreateNetwork API call. */
	static readonly CreateNetwork: string[] = [
		"wickr:CreateNetwork",
		"wickr:TagResource",
	];
	/** IAM actions required for the CreateSecurityGroup API call. */
	static readonly CreateSecurityGroup: string[] = ["wickr:CreateSecurityGroup"];
	/** IAM actions required for the DeleteBot API call. */
	static readonly DeleteBot: string[] = ["wickr:DeleteBot"];
	/** IAM actions required for the DeleteDataRetentionBot API call. */
	static readonly DeleteDataRetentionBot: string[] = [
		"wickr:DeleteDataRetentionBot",
	];
	/** IAM actions required for the DeleteNetwork API call. */
	static readonly DeleteNetwork: string[] = ["wickr:DeleteNetwork"];
	/** IAM actions required for the DeleteSecurityGroup API call. */
	static readonly DeleteSecurityGroup: string[] = ["wickr:DeleteSecurityGroup"];
	/** IAM actions required for the GetBot API call. */
	static readonly opGetBot: string[] = ["wickr:GetBot"];
	/** IAM actions required for the GetBotsCount API call. */
	static readonly opGetBotsCount: string[] = ["wickr:GetBotsCount"];
	/** IAM actions required for the GetDataRetentionBot API call. */
	static readonly opGetDataRetentionBot: string[] = [
		"wickr:GetDataRetentionBot",
	];
	/** IAM actions required for the GetGuestUserHistoryCount API call. */
	static readonly opGetGuestUserHistoryCount: string[] = [
		"wickr:GetGuestUserHistoryCount",
	];
	/** IAM actions required for the GetNetwork API call. */
	static readonly opGetNetwork: string[] = ["wickr:GetNetwork"];
	/** IAM actions required for the GetNetworkSettings API call. */
	static readonly opGetNetworkSettings: string[] = ["wickr:GetNetworkSettings"];
	/** IAM actions required for the GetOidcInfo API call. */
	static readonly opGetOidcInfo: string[] = ["wickr:GetOidcInfo"];
	/** IAM actions required for the GetOpentdfConfig API call. */
	static readonly opGetOpentdfConfig: string[] = ["wickr:GetOpentdfConfig"];
	/** IAM actions required for the GetSecurityGroup API call. */
	static readonly opGetSecurityGroup: string[] = ["wickr:GetSecurityGroup"];
	/** IAM actions required for the GetUser API call. */
	static readonly opGetUser: string[] = ["wickr:GetUser"];
	/** IAM actions required for the GetUsersCount API call. */
	static readonly opGetUsersCount: string[] = ["wickr:GetUsersCount"];
	/** IAM actions required for the ListBlockedGuestUsers API call. */
	static readonly ListBlockedGuestUsers: string[] = [
		"wickr:ListBlockedGuestUsers",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly ListBots: string[] = ["wickr:ListBots"];
	/** IAM actions required for the ListDevicesForUser API call. */
	static readonly ListDevicesForUser: string[] = ["wickr:ListDevicesForUser"];
	/** IAM actions required for the ListGuestUsers API call. */
	static readonly ListGuestUsers: string[] = ["wickr:ListGuestUsers"];
	/** IAM actions required for the ListNetworks API call. */
	static readonly ListNetworks: string[] = ["wickr:ListNetworks"];
	/** IAM actions required for the ListSecurityGroupUsers API call. */
	static readonly ListSecurityGroupUsers: string[] = [
		"wickr:ListSecurityGroupUsers",
	];
	/** IAM actions required for the ListSecurityGroups API call. */
	static readonly ListSecurityGroups: string[] = ["wickr:ListSecurityGroups"];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["wickr:ListUsers"];
	/** IAM actions required for the RegisterOidcConfig API call. */
	static readonly RegisterOidcConfig: string[] = ["wickr:RegisterOidcConfig"];
	/** IAM actions required for the RegisterOidcConfigTest API call. */
	static readonly RegisterOidcConfigTest: string[] = [
		"wickr:RegisterOidcConfigTest",
	];
	/** IAM actions required for the RegisterOpentdfConfig API call. */
	static readonly RegisterOpentdfConfig: string[] = [
		"wickr:RegisterOpentdfConfig",
	];
	/** IAM actions required for the UpdateBot API call. */
	static readonly UpdateBot: string[] = ["wickr:UpdateBot"];
	/** IAM actions required for the UpdateDataRetention API call. */
	static readonly UpdateDataRetention: string[] = ["wickr:UpdateDataRetention"];
	/** IAM actions required for the UpdateGuestUser API call. */
	static readonly UpdateGuestUser: string[] = ["wickr:UpdateGuestUser"];
	/** IAM actions required for the UpdateNetwork API call. */
	static readonly UpdateNetwork: string[] = [];
	/** IAM actions required for the UpdateNetworkSettings API call. */
	static readonly UpdateNetworkSettings: string[] = [
		"wickr:UpdateNetworkSettings",
	];
	/** IAM actions required for the UpdateSecurityGroup API call. */
	static readonly UpdateSecurityGroup: string[] = ["wickr:UpdateSecurityGroup"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["wickr:UpdateUser"];
}

/**
 * Condition key constants and builders for wickr.
 */
export class WickrConditions {
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CreateNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
