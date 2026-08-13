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
	static readonly CreateSlackChannelConfiguration =
		"supportapp:CreateSlackChannelConfiguration";
	/** [Write] supportapp:DeleteAccountAlias */
	static readonly DeleteAccountAlias = "supportapp:DeleteAccountAlias";
	/** [Write] supportapp:DeleteSlackChannelConfiguration */
	static readonly DeleteSlackChannelConfiguration =
		"supportapp:DeleteSlackChannelConfiguration";
	/** [Write] supportapp:DeleteSlackWorkspaceConfiguration */
	static readonly DeleteSlackWorkspaceConfiguration =
		"supportapp:DeleteSlackWorkspaceConfiguration";
	/** [Read] supportapp:DescribeSlackChannels */
	static readonly DescribeSlackChannels = "supportapp:DescribeSlackChannels";
	/** [Read] supportapp:GetAccountAlias */
	static readonly actionGetAccountAlias = "supportapp:GetAccountAlias";
	/** [Read] supportapp:GetSlackOauthParameters */
	static readonly actionGetSlackOauthParameters =
		"supportapp:GetSlackOauthParameters";
	/** [Read] supportapp:ListSlackChannelConfigurations */
	static readonly ListSlackChannelConfigurations =
		"supportapp:ListSlackChannelConfigurations";
	/** [Read] supportapp:ListSlackWorkspaceConfigurations */
	static readonly ListSlackWorkspaceConfigurations =
		"supportapp:ListSlackWorkspaceConfigurations";
	/** [Write] supportapp:PutAccountAlias */
	static readonly PutAccountAlias = "supportapp:PutAccountAlias";
	/** [Write] supportapp:RedeemSlackOauthCode */
	static readonly RedeemSlackOauthCode = "supportapp:RedeemSlackOauthCode";
	/** [Write] supportapp:RegisterSlackWorkspaceForOrganization */
	static readonly RegisterSlackWorkspaceForOrganization =
		"supportapp:RegisterSlackWorkspaceForOrganization";
	/** [Write] supportapp:UpdateSlackChannelConfiguration */
	static readonly UpdateSlackChannelConfiguration =
		"supportapp:UpdateSlackChannelConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SupportappActions.DescribeSlackChannels,
		SupportappActions.actionGetAccountAlias,
		SupportappActions.actionGetSlackOauthParameters,
		SupportappActions.ListSlackChannelConfigurations,
		SupportappActions.ListSlackWorkspaceConfigurations,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SupportappActions.CreateSlackChannelConfiguration,
		SupportappActions.DeleteAccountAlias,
		SupportappActions.DeleteSlackChannelConfiguration,
		SupportappActions.DeleteSlackWorkspaceConfiguration,
		SupportappActions.PutAccountAlias,
		SupportappActions.RedeemSlackOauthCode,
		SupportappActions.RegisterSlackWorkspaceForOrganization,
		SupportappActions.UpdateSlackChannelConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for supportapp.
 */
export class SupportappOperations {
	/** IAM actions required for the CreateSlackChannelConfiguration API call. */
	static readonly CreateSlackChannelConfiguration: string[] = [
		"supportapp:CreateSlackChannelConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAccountAlias API call. */
	static readonly DeleteAccountAlias: string[] = [
		"supportapp:DeleteAccountAlias",
	];
	/** IAM actions required for the DeleteSlackChannelConfiguration API call. */
	static readonly DeleteSlackChannelConfiguration: string[] = [
		"supportapp:DeleteSlackChannelConfiguration",
	];
	/** IAM actions required for the DeleteSlackWorkspaceConfiguration API call. */
	static readonly DeleteSlackWorkspaceConfiguration: string[] = [
		"supportapp:DeleteSlackWorkspaceConfiguration",
	];
	/** IAM actions required for the GetAccountAlias API call. */
	static readonly opGetAccountAlias: string[] = ["supportapp:GetAccountAlias"];
	/** IAM actions required for the ListSlackChannelConfigurations API call. */
	static readonly ListSlackChannelConfigurations: string[] = [
		"supportapp:ListSlackChannelConfigurations",
	];
	/** IAM actions required for the ListSlackWorkspaceConfigurations API call. */
	static readonly ListSlackWorkspaceConfigurations: string[] = [
		"supportapp:ListSlackWorkspaceConfigurations",
	];
	/** IAM actions required for the PutAccountAlias API call. */
	static readonly PutAccountAlias: string[] = ["supportapp:PutAccountAlias"];
	/** IAM actions required for the RegisterSlackWorkspaceForOrganization API call. */
	static readonly RegisterSlackWorkspaceForOrganization: string[] = [
		"supportapp:RegisterSlackWorkspaceForOrganization",
	];
	/** IAM actions required for the UpdateSlackChannelConfiguration API call. */
	static readonly UpdateSlackChannelConfiguration: string[] = [
		"iam:PassRole",
		"supportapp:UpdateSlackChannelConfiguration",
	];
}
