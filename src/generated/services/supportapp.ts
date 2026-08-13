// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/supportapp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the supportapp service.
 */
export class SupportappActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "supportapp";

	/** [Write] supportapp:CreateSlackChannelConfiguration */
	static readonly CREATE_SLACK_CHANNEL_CONFIGURATION =
		"supportapp:CreateSlackChannelConfiguration";
	/** [Write] supportapp:DeleteAccountAlias */
	static readonly DELETE_ACCOUNT_ALIAS = "supportapp:DeleteAccountAlias";
	/** [Write] supportapp:DeleteSlackChannelConfiguration */
	static readonly DELETE_SLACK_CHANNEL_CONFIGURATION =
		"supportapp:DeleteSlackChannelConfiguration";
	/** [Write] supportapp:DeleteSlackWorkspaceConfiguration */
	static readonly DELETE_SLACK_WORKSPACE_CONFIGURATION =
		"supportapp:DeleteSlackWorkspaceConfiguration";
	/** [Read] supportapp:DescribeSlackChannels */
	static readonly DESCRIBE_SLACK_CHANNELS = "supportapp:DescribeSlackChannels";
	/** [Read] supportapp:GetAccountAlias */
	static readonly GET_ACCOUNT_ALIAS = "supportapp:GetAccountAlias";
	/** [Read] supportapp:GetSlackOauthParameters */
	static readonly GET_SLACK_OAUTH_PARAMETERS =
		"supportapp:GetSlackOauthParameters";
	/** [Read] supportapp:ListSlackChannelConfigurations */
	static readonly LIST_SLACK_CHANNEL_CONFIGURATIONS =
		"supportapp:ListSlackChannelConfigurations";
	/** [Read] supportapp:ListSlackWorkspaceConfigurations */
	static readonly LIST_SLACK_WORKSPACE_CONFIGURATIONS =
		"supportapp:ListSlackWorkspaceConfigurations";
	/** [Write] supportapp:PutAccountAlias */
	static readonly PUT_ACCOUNT_ALIAS = "supportapp:PutAccountAlias";
	/** [Write] supportapp:RedeemSlackOauthCode */
	static readonly REDEEM_SLACK_OAUTH_CODE = "supportapp:RedeemSlackOauthCode";
	/** [Write] supportapp:RegisterSlackWorkspaceForOrganization */
	static readonly REGISTER_SLACK_WORKSPACE_FOR_ORGANIZATION =
		"supportapp:RegisterSlackWorkspaceForOrganization";
	/** [Write] supportapp:UpdateSlackChannelConfiguration */
	static readonly UPDATE_SLACK_CHANNEL_CONFIGURATION =
		"supportapp:UpdateSlackChannelConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SupportappActions.DESCRIBE_SLACK_CHANNELS,
		SupportappActions.GET_ACCOUNT_ALIAS,
		SupportappActions.GET_SLACK_OAUTH_PARAMETERS,
		SupportappActions.LIST_SLACK_CHANNEL_CONFIGURATIONS,
		SupportappActions.LIST_SLACK_WORKSPACE_CONFIGURATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SupportappActions.CREATE_SLACK_CHANNEL_CONFIGURATION,
		SupportappActions.DELETE_ACCOUNT_ALIAS,
		SupportappActions.DELETE_SLACK_CHANNEL_CONFIGURATION,
		SupportappActions.DELETE_SLACK_WORKSPACE_CONFIGURATION,
		SupportappActions.PUT_ACCOUNT_ALIAS,
		SupportappActions.REDEEM_SLACK_OAUTH_CODE,
		SupportappActions.REGISTER_SLACK_WORKSPACE_FOR_ORGANIZATION,
		SupportappActions.UPDATE_SLACK_CHANNEL_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for supportapp.
 */
export class SupportappOperations {
	/** IAM actions required for the CreateSlackChannelConfiguration API call. */
	static readonly CREATE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"supportapp:CreateSlackChannelConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAccountAlias API call. */
	static readonly DELETE_ACCOUNT_ALIAS: string[] = [
		"supportapp:DeleteAccountAlias",
	];
	/** IAM actions required for the DeleteSlackChannelConfiguration API call. */
	static readonly DELETE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"supportapp:DeleteSlackChannelConfiguration",
	];
	/** IAM actions required for the DeleteSlackWorkspaceConfiguration API call. */
	static readonly DELETE_SLACK_WORKSPACE_CONFIGURATION: string[] = [
		"supportapp:DeleteSlackWorkspaceConfiguration",
	];
	/** IAM actions required for the GetAccountAlias API call. */
	static readonly GET_ACCOUNT_ALIAS: string[] = ["supportapp:GetAccountAlias"];
	/** IAM actions required for the ListSlackChannelConfigurations API call. */
	static readonly LIST_SLACK_CHANNEL_CONFIGURATIONS: string[] = [
		"supportapp:ListSlackChannelConfigurations",
	];
	/** IAM actions required for the ListSlackWorkspaceConfigurations API call. */
	static readonly LIST_SLACK_WORKSPACE_CONFIGURATIONS: string[] = [
		"supportapp:ListSlackWorkspaceConfigurations",
	];
	/** IAM actions required for the PutAccountAlias API call. */
	static readonly PUT_ACCOUNT_ALIAS: string[] = ["supportapp:PutAccountAlias"];
	/** IAM actions required for the RegisterSlackWorkspaceForOrganization API call. */
	static readonly REGISTER_SLACK_WORKSPACE_FOR_ORGANIZATION: string[] = [
		"supportapp:RegisterSlackWorkspaceForOrganization",
	];
	/** IAM actions required for the UpdateSlackChannelConfiguration API call. */
	static readonly UPDATE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"iam:PassRole",
		"supportapp:UpdateSlackChannelConfiguration",
	];
}
