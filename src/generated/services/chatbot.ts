// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/chatbot.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the chatbot service.
 */
export class ChatbotActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "chatbot";

	/** [Write] chatbot:AssociateToConfiguration */
	static readonly ASSOCIATE_TO_CONFIGURATION =
		"chatbot:AssociateToConfiguration";
	/** [Write] chatbot:CreateChimeWebhookConfiguration */
	static readonly CREATE_CHIME_WEBHOOK_CONFIGURATION =
		"chatbot:CreateChimeWebhookConfiguration";
	/** [Write] chatbot:CreateCustomAction */
	static readonly CREATE_CUSTOM_ACTION = "chatbot:CreateCustomAction";
	/** [Write] chatbot:CreateMicrosoftTeamsChannelConfiguration */
	static readonly CREATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION =
		"chatbot:CreateMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:CreateSlackChannelConfiguration */
	static readonly CREATE_SLACK_CHANNEL_CONFIGURATION =
		"chatbot:CreateSlackChannelConfiguration";
	/** [Write] chatbot:DeleteChimeWebhookConfiguration */
	static readonly DELETE_CHIME_WEBHOOK_CONFIGURATION =
		"chatbot:DeleteChimeWebhookConfiguration";
	/** [Write] chatbot:DeleteCustomAction */
	static readonly DELETE_CUSTOM_ACTION = "chatbot:DeleteCustomAction";
	/** [Write] chatbot:DeleteMicrosoftTeamsChannelConfiguration */
	static readonly DELETE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION =
		"chatbot:DeleteMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:DeleteMicrosoftTeamsConfiguredTeam */
	static readonly DELETE_MICROSOFT_TEAMS_CONFIGURED_TEAM =
		"chatbot:DeleteMicrosoftTeamsConfiguredTeam";
	/** [Write] chatbot:DeleteMicrosoftTeamsUserIdentity */
	static readonly DELETE_MICROSOFT_TEAMS_USER_IDENTITY =
		"chatbot:DeleteMicrosoftTeamsUserIdentity";
	/** [Write] chatbot:DeleteSlackChannelConfiguration */
	static readonly DELETE_SLACK_CHANNEL_CONFIGURATION =
		"chatbot:DeleteSlackChannelConfiguration";
	/** [Write] chatbot:DeleteSlackUserIdentity */
	static readonly DELETE_SLACK_USER_IDENTITY =
		"chatbot:DeleteSlackUserIdentity";
	/** [Write] chatbot:DeleteSlackWorkspaceAuthorization */
	static readonly DELETE_SLACK_WORKSPACE_AUTHORIZATION =
		"chatbot:DeleteSlackWorkspaceAuthorization";
	/** [Read] chatbot:DescribeChimeWebhookConfigurations */
	static readonly DESCRIBE_CHIME_WEBHOOK_CONFIGURATIONS =
		"chatbot:DescribeChimeWebhookConfigurations";
	/** [Read] chatbot:DescribeSlackChannelConfigurations */
	static readonly DESCRIBE_SLACK_CHANNEL_CONFIGURATIONS =
		"chatbot:DescribeSlackChannelConfigurations";
	/** [Read] chatbot:DescribeSlackChannels */
	static readonly DESCRIBE_SLACK_CHANNELS = "chatbot:DescribeSlackChannels";
	/** [Read] chatbot:DescribeSlackUserIdentities */
	static readonly DESCRIBE_SLACK_USER_IDENTITIES =
		"chatbot:DescribeSlackUserIdentities";
	/** [Read] chatbot:DescribeSlackWorkspaces */
	static readonly DESCRIBE_SLACK_WORKSPACES = "chatbot:DescribeSlackWorkspaces";
	/** [Write] chatbot:DisassociateFromConfiguration */
	static readonly DISASSOCIATE_FROM_CONFIGURATION =
		"chatbot:DisassociateFromConfiguration";
	/** [Read] chatbot:GetAccountPreferences */
	static readonly GET_ACCOUNT_PREFERENCES = "chatbot:GetAccountPreferences";
	/** [Read] chatbot:GetCustomAction */
	static readonly GET_CUSTOM_ACTION = "chatbot:GetCustomAction";
	/** [Read] chatbot:GetMicrosoftTeamsChannelConfiguration */
	static readonly GET_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION =
		"chatbot:GetMicrosoftTeamsChannelConfiguration";
	/** [Read] chatbot:GetMicrosoftTeamsOauthParameters */
	static readonly GET_MICROSOFT_TEAMS_OAUTH_PARAMETERS =
		"chatbot:GetMicrosoftTeamsOauthParameters";
	/** [Read] chatbot:GetSlackOauthParameters */
	static readonly GET_SLACK_OAUTH_PARAMETERS =
		"chatbot:GetSlackOauthParameters";
	/** [Read] chatbot:ListAssociations */
	static readonly LIST_ASSOCIATIONS = "chatbot:ListAssociations";
	/** [List] chatbot:ListCustomActions */
	static readonly LIST_CUSTOM_ACTIONS = "chatbot:ListCustomActions";
	/** [Read] chatbot:ListMicrosoftTeamsChannelConfigurations */
	static readonly LIST_MICROSOFT_TEAMS_CHANNEL_CONFIGURATIONS =
		"chatbot:ListMicrosoftTeamsChannelConfigurations";
	/** [Read] chatbot:ListMicrosoftTeamsConfiguredTeams */
	static readonly LIST_MICROSOFT_TEAMS_CONFIGURED_TEAMS =
		"chatbot:ListMicrosoftTeamsConfiguredTeams";
	/** [Read] chatbot:ListMicrosoftTeamsUserIdentities */
	static readonly LIST_MICROSOFT_TEAMS_USER_IDENTITIES =
		"chatbot:ListMicrosoftTeamsUserIdentities";
	/** [Read] chatbot:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "chatbot:ListTagsForResource";
	/** [Write] chatbot:RedeemMicrosoftTeamsOauthCode */
	static readonly REDEEM_MICROSOFT_TEAMS_OAUTH_CODE =
		"chatbot:RedeemMicrosoftTeamsOauthCode";
	/** [Write] chatbot:RedeemSlackOauthCode */
	static readonly REDEEM_SLACK_OAUTH_CODE = "chatbot:RedeemSlackOauthCode";
	/** [Tagging] chatbot:TagResource */
	static readonly TAG_RESOURCE = "chatbot:TagResource";
	/** [Tagging] chatbot:UntagResource */
	static readonly UNTAG_RESOURCE = "chatbot:UntagResource";
	/** [Write] chatbot:UpdateAccountPreferences */
	static readonly UPDATE_ACCOUNT_PREFERENCES =
		"chatbot:UpdateAccountPreferences";
	/** [Write] chatbot:UpdateChimeWebhookConfiguration */
	static readonly UPDATE_CHIME_WEBHOOK_CONFIGURATION =
		"chatbot:UpdateChimeWebhookConfiguration";
	/** [Write] chatbot:UpdateCustomAction */
	static readonly UPDATE_CUSTOM_ACTION = "chatbot:UpdateCustomAction";
	/** [Write] chatbot:UpdateMicrosoftTeamsChannelConfiguration */
	static readonly UPDATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION =
		"chatbot:UpdateMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:UpdateSlackChannelConfiguration */
	static readonly UPDATE_SLACK_CHANNEL_CONFIGURATION =
		"chatbot:UpdateSlackChannelConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ChatbotActions.DESCRIBE_CHIME_WEBHOOK_CONFIGURATIONS,
		ChatbotActions.DESCRIBE_SLACK_CHANNEL_CONFIGURATIONS,
		ChatbotActions.DESCRIBE_SLACK_CHANNELS,
		ChatbotActions.DESCRIBE_SLACK_USER_IDENTITIES,
		ChatbotActions.DESCRIBE_SLACK_WORKSPACES,
		ChatbotActions.GET_ACCOUNT_PREFERENCES,
		ChatbotActions.GET_CUSTOM_ACTION,
		ChatbotActions.GET_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION,
		ChatbotActions.GET_MICROSOFT_TEAMS_OAUTH_PARAMETERS,
		ChatbotActions.GET_SLACK_OAUTH_PARAMETERS,
		ChatbotActions.LIST_ASSOCIATIONS,
		ChatbotActions.LIST_MICROSOFT_TEAMS_CHANNEL_CONFIGURATIONS,
		ChatbotActions.LIST_MICROSOFT_TEAMS_CONFIGURED_TEAMS,
		ChatbotActions.LIST_MICROSOFT_TEAMS_USER_IDENTITIES,
		ChatbotActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ChatbotActions.ASSOCIATE_TO_CONFIGURATION,
		ChatbotActions.CREATE_CHIME_WEBHOOK_CONFIGURATION,
		ChatbotActions.CREATE_CUSTOM_ACTION,
		ChatbotActions.CREATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION,
		ChatbotActions.CREATE_SLACK_CHANNEL_CONFIGURATION,
		ChatbotActions.DELETE_CHIME_WEBHOOK_CONFIGURATION,
		ChatbotActions.DELETE_CUSTOM_ACTION,
		ChatbotActions.DELETE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION,
		ChatbotActions.DELETE_MICROSOFT_TEAMS_CONFIGURED_TEAM,
		ChatbotActions.DELETE_MICROSOFT_TEAMS_USER_IDENTITY,
		ChatbotActions.DELETE_SLACK_CHANNEL_CONFIGURATION,
		ChatbotActions.DELETE_SLACK_USER_IDENTITY,
		ChatbotActions.DELETE_SLACK_WORKSPACE_AUTHORIZATION,
		ChatbotActions.DISASSOCIATE_FROM_CONFIGURATION,
		ChatbotActions.REDEEM_MICROSOFT_TEAMS_OAUTH_CODE,
		ChatbotActions.REDEEM_SLACK_OAUTH_CODE,
		ChatbotActions.UPDATE_ACCOUNT_PREFERENCES,
		ChatbotActions.UPDATE_CHIME_WEBHOOK_CONFIGURATION,
		ChatbotActions.UPDATE_CUSTOM_ACTION,
		ChatbotActions.UPDATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION,
		ChatbotActions.UPDATE_SLACK_CHANNEL_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [ChatbotActions.LIST_CUSTOM_ACTIONS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ChatbotActions.TAG_RESOURCE,
		ChatbotActions.UNTAG_RESOURCE,
	];
}

const ChatbotConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chatbot::(?<account>[^:]*):chat-configuration/(?<configurationType>[^:/?]+)/(?<chatbotConfigurationName>[^:/?]+)$",
);
const CustomActionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chatbot::(?<account>[^:]*):custom-action/(?<actionName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for chatbot resources.
 */
export class ChatbotResources {
	/**
	 * Builds an ARN for the ChatbotConfiguration resource.
	 */
	static chatbotConfiguration(props: {
		/** The ConfigurationType component of the ARN. */
		readonly configurationType: string;
		/** The ChatbotConfigurationName component of the ARN. */
		readonly chatbotConfigurationName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chatbot::${props.account ?? "*"}:chat-configuration/${props.configurationType}/${props.chatbotConfigurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ChatbotConfiguration resource.
	 */
	static isValidChatbotConfigurationArn(arn: string): boolean {
		return ChatbotConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a ChatbotConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChatbotConfigurationArn(arn: string): {
		partition: string;
		account: string;
		configurationType: string;
		chatbotConfigurationName: string;
	} {
		const match = ChatbotConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ChatbotConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			configurationType: match.groups!.configurationType,
			chatbotConfigurationName: match.groups!.chatbotConfigurationName,
		};
	}

	/**
	 * Builds an ARN for the custom-action resource.
	 */
	static customAction(props: {
		/** The ActionName component of the ARN. */
		readonly actionName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chatbot::${props.account ?? "*"}:custom-action/${props.actionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custom-action resource.
	 */
	static isValidCustomActionArn(arn: string): boolean {
		return CustomActionArnRegex.test(arn);
	}

	/**
	 * Parses a custom-action ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomActionArn(arn: string): {
		partition: string;
		account: string;
		actionName: string;
	} {
		const match = CustomActionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custom-action ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			actionName: match.groups!.actionName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for chatbot.
 */
export class ChatbotOperations {
	/** IAM actions required for the AssociateToConfiguration API call. */
	static readonly ASSOCIATE_TO_CONFIGURATION: string[] = [
		"chatbot:AssociateToConfiguration",
	];
	/** IAM actions required for the CreateChimeWebhookConfiguration API call. */
	static readonly CREATE_CHIME_WEBHOOK_CONFIGURATION: string[] = [
		"chatbot:CreateChimeWebhookConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateCustomAction API call. */
	static readonly CREATE_CUSTOM_ACTION: string[] = [
		"chatbot:CreateCustomAction",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateMicrosoftTeamsChannelConfiguration API call. */
	static readonly CREATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION: string[] = [
		"chatbot:CreateMicrosoftTeamsChannelConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateSlackChannelConfiguration API call. */
	static readonly CREATE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"chatbot:CreateSlackChannelConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the DeleteChimeWebhookConfiguration API call. */
	static readonly DELETE_CHIME_WEBHOOK_CONFIGURATION: string[] = [
		"chatbot:DeleteChimeWebhookConfiguration",
	];
	/** IAM actions required for the DeleteCustomAction API call. */
	static readonly DELETE_CUSTOM_ACTION: string[] = [
		"chatbot:DeleteCustomAction",
	];
	/** IAM actions required for the DeleteMicrosoftTeamsChannelConfiguration API call. */
	static readonly DELETE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION: string[] = [
		"chatbot:DeleteMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the DeleteMicrosoftTeamsConfiguredTeam API call. */
	static readonly DELETE_MICROSOFT_TEAMS_CONFIGURED_TEAM: string[] = [
		"chatbot:DeleteMicrosoftTeamsConfiguredTeam",
	];
	/** IAM actions required for the DeleteMicrosoftTeamsUserIdentity API call. */
	static readonly DELETE_MICROSOFT_TEAMS_USER_IDENTITY: string[] = [
		"chatbot:DeleteMicrosoftTeamsUserIdentity",
	];
	/** IAM actions required for the DeleteSlackChannelConfiguration API call. */
	static readonly DELETE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"chatbot:DeleteSlackChannelConfiguration",
	];
	/** IAM actions required for the DeleteSlackUserIdentity API call. */
	static readonly DELETE_SLACK_USER_IDENTITY: string[] = [
		"chatbot:DeleteSlackUserIdentity",
	];
	/** IAM actions required for the DeleteSlackWorkspaceAuthorization API call. */
	static readonly DELETE_SLACK_WORKSPACE_AUTHORIZATION: string[] = [
		"chatbot:DeleteSlackWorkspaceAuthorization",
	];
	/** IAM actions required for the DescribeChimeWebhookConfigurations API call. */
	static readonly DESCRIBE_CHIME_WEBHOOK_CONFIGURATIONS: string[] = [
		"chatbot:DescribeChimeWebhookConfigurations",
	];
	/** IAM actions required for the DescribeSlackChannelConfigurations API call. */
	static readonly DESCRIBE_SLACK_CHANNEL_CONFIGURATIONS: string[] = [
		"chatbot:DescribeSlackChannelConfigurations",
	];
	/** IAM actions required for the DescribeSlackUserIdentities API call. */
	static readonly DESCRIBE_SLACK_USER_IDENTITIES: string[] = [
		"chatbot:DescribeSlackUserIdentities",
	];
	/** IAM actions required for the DescribeSlackWorkspaces API call. */
	static readonly DESCRIBE_SLACK_WORKSPACES: string[] = [
		"chatbot:DescribeSlackWorkspaces",
	];
	/** IAM actions required for the DisassociateFromConfiguration API call. */
	static readonly DISASSOCIATE_FROM_CONFIGURATION: string[] = [
		"chatbot:DisassociateFromConfiguration",
	];
	/** IAM actions required for the GetAccountPreferences API call. */
	static readonly GET_ACCOUNT_PREFERENCES: string[] = [
		"chatbot:GetAccountPreferences",
	];
	/** IAM actions required for the GetCustomAction API call. */
	static readonly GET_CUSTOM_ACTION: string[] = ["chatbot:GetCustomAction"];
	/** IAM actions required for the GetMicrosoftTeamsChannelConfiguration API call. */
	static readonly GET_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION: string[] = [
		"chatbot:GetMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the ListAssociations API call. */
	static readonly LIST_ASSOCIATIONS: string[] = ["chatbot:ListAssociations"];
	/** IAM actions required for the ListCustomActions API call. */
	static readonly LIST_CUSTOM_ACTIONS: string[] = ["chatbot:ListCustomActions"];
	/** IAM actions required for the ListMicrosoftTeamsChannelConfigurations API call. */
	static readonly LIST_MICROSOFT_TEAMS_CHANNEL_CONFIGURATIONS: string[] = [
		"chatbot:ListMicrosoftTeamsChannelConfigurations",
	];
	/** IAM actions required for the ListMicrosoftTeamsConfiguredTeams API call. */
	static readonly LIST_MICROSOFT_TEAMS_CONFIGURED_TEAMS: string[] = [
		"chatbot:ListMicrosoftTeamsConfiguredTeams",
	];
	/** IAM actions required for the ListMicrosoftTeamsUserIdentities API call. */
	static readonly LIST_MICROSOFT_TEAMS_USER_IDENTITIES: string[] = [
		"chatbot:ListMicrosoftTeamsUserIdentities",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"chatbot:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["chatbot:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["chatbot:UntagResource"];
	/** IAM actions required for the UpdateAccountPreferences API call. */
	static readonly UPDATE_ACCOUNT_PREFERENCES: string[] = [
		"chatbot:UpdateAccountPreferences",
	];
	/** IAM actions required for the UpdateChimeWebhookConfiguration API call. */
	static readonly UPDATE_CHIME_WEBHOOK_CONFIGURATION: string[] = [
		"iam:PassRole",
		"chatbot:UpdateChimeWebhookConfiguration",
	];
	/** IAM actions required for the UpdateCustomAction API call. */
	static readonly UPDATE_CUSTOM_ACTION: string[] = [
		"chatbot:UpdateCustomAction",
	];
	/** IAM actions required for the UpdateMicrosoftTeamsChannelConfiguration API call. */
	static readonly UPDATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION: string[] = [
		"iam:PassRole",
		"chatbot:UpdateMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the UpdateSlackChannelConfiguration API call. */
	static readonly UPDATE_SLACK_CHANNEL_CONFIGURATION: string[] = [
		"iam:PassRole",
		"chatbot:UpdateSlackChannelConfiguration",
	];
}

/**
 * Condition key constants and builders for chatbot.
 */
export class ChatbotConditions {
	/** Condition keys applicable to the AssociateToConfiguration action. */
	static readonly ASSOCIATE_TO_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateChimeWebhookConfiguration action. */
	static readonly CREATE_CHIME_WEBHOOK_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCustomAction action. */
	static readonly CREATE_CUSTOM_ACTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMicrosoftTeamsChannelConfiguration action. */
	static readonly CREATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSlackChannelConfiguration action. */
	static readonly CREATE_SLACK_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DeleteChimeWebhookConfiguration action. */
	static readonly DELETE_CHIME_WEBHOOK_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteCustomAction action. */
	static readonly DELETE_CUSTOM_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteMicrosoftTeamsChannelConfiguration action. */
	static readonly DELETE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteSlackChannelConfiguration action. */
	static readonly DELETE_SLACK_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateFromConfiguration action. */
	static readonly DISASSOCIATE_FROM_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCustomAction action. */
	static readonly GET_CUSTOM_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMicrosoftTeamsChannelConfiguration action. */
	static readonly GET_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateChimeWebhookConfiguration action. */
	static readonly UPDATE_CHIME_WEBHOOK_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateCustomAction action. */
	static readonly UPDATE_CUSTOM_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateMicrosoftTeamsChannelConfiguration action. */
	static readonly UPDATE_MICROSOFT_TEAMS_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateSlackChannelConfiguration action. */
	static readonly UPDATE_SLACK_CHANNEL_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

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
