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
	static readonly AssociateToConfiguration = "chatbot:AssociateToConfiguration";
	/** [Write] chatbot:CreateChimeWebhookConfiguration */
	static readonly CreateChimeWebhookConfiguration =
		"chatbot:CreateChimeWebhookConfiguration";
	/** [Write] chatbot:CreateCustomAction */
	static readonly CreateCustomAction = "chatbot:CreateCustomAction";
	/** [Write] chatbot:CreateMicrosoftTeamsChannelConfiguration */
	static readonly CreateMicrosoftTeamsChannelConfiguration =
		"chatbot:CreateMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:CreateSlackChannelConfiguration */
	static readonly CreateSlackChannelConfiguration =
		"chatbot:CreateSlackChannelConfiguration";
	/** [Write] chatbot:DeleteChimeWebhookConfiguration */
	static readonly DeleteChimeWebhookConfiguration =
		"chatbot:DeleteChimeWebhookConfiguration";
	/** [Write] chatbot:DeleteCustomAction */
	static readonly DeleteCustomAction = "chatbot:DeleteCustomAction";
	/** [Write] chatbot:DeleteMicrosoftTeamsChannelConfiguration */
	static readonly DeleteMicrosoftTeamsChannelConfiguration =
		"chatbot:DeleteMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:DeleteMicrosoftTeamsConfiguredTeam */
	static readonly DeleteMicrosoftTeamsConfiguredTeam =
		"chatbot:DeleteMicrosoftTeamsConfiguredTeam";
	/** [Write] chatbot:DeleteMicrosoftTeamsUserIdentity */
	static readonly DeleteMicrosoftTeamsUserIdentity =
		"chatbot:DeleteMicrosoftTeamsUserIdentity";
	/** [Write] chatbot:DeleteSlackChannelConfiguration */
	static readonly DeleteSlackChannelConfiguration =
		"chatbot:DeleteSlackChannelConfiguration";
	/** [Write] chatbot:DeleteSlackUserIdentity */
	static readonly DeleteSlackUserIdentity = "chatbot:DeleteSlackUserIdentity";
	/** [Write] chatbot:DeleteSlackWorkspaceAuthorization */
	static readonly DeleteSlackWorkspaceAuthorization =
		"chatbot:DeleteSlackWorkspaceAuthorization";
	/** [Read] chatbot:DescribeChimeWebhookConfigurations */
	static readonly DescribeChimeWebhookConfigurations =
		"chatbot:DescribeChimeWebhookConfigurations";
	/** [Read] chatbot:DescribeSlackChannelConfigurations */
	static readonly DescribeSlackChannelConfigurations =
		"chatbot:DescribeSlackChannelConfigurations";
	/** [Read] chatbot:DescribeSlackChannels */
	static readonly DescribeSlackChannels = "chatbot:DescribeSlackChannels";
	/** [Read] chatbot:DescribeSlackUserIdentities */
	static readonly DescribeSlackUserIdentities =
		"chatbot:DescribeSlackUserIdentities";
	/** [Read] chatbot:DescribeSlackWorkspaces */
	static readonly DescribeSlackWorkspaces = "chatbot:DescribeSlackWorkspaces";
	/** [Write] chatbot:DisassociateFromConfiguration */
	static readonly DisassociateFromConfiguration =
		"chatbot:DisassociateFromConfiguration";
	/** [Read] chatbot:GetAccountPreferences */
	static readonly actionGetAccountPreferences = "chatbot:GetAccountPreferences";
	/** [Read] chatbot:GetCustomAction */
	static readonly actionGetCustomAction = "chatbot:GetCustomAction";
	/** [Read] chatbot:GetMicrosoftTeamsChannelConfiguration */
	static readonly actionGetMicrosoftTeamsChannelConfiguration =
		"chatbot:GetMicrosoftTeamsChannelConfiguration";
	/** [Read] chatbot:GetMicrosoftTeamsOauthParameters */
	static readonly actionGetMicrosoftTeamsOauthParameters =
		"chatbot:GetMicrosoftTeamsOauthParameters";
	/** [Read] chatbot:GetSlackOauthParameters */
	static readonly actionGetSlackOauthParameters =
		"chatbot:GetSlackOauthParameters";
	/** [Read] chatbot:ListAssociations */
	static readonly ListAssociations = "chatbot:ListAssociations";
	/** [List] chatbot:ListCustomActions */
	static readonly ListCustomActions = "chatbot:ListCustomActions";
	/** [Read] chatbot:ListMicrosoftTeamsChannelConfigurations */
	static readonly ListMicrosoftTeamsChannelConfigurations =
		"chatbot:ListMicrosoftTeamsChannelConfigurations";
	/** [Read] chatbot:ListMicrosoftTeamsConfiguredTeams */
	static readonly ListMicrosoftTeamsConfiguredTeams =
		"chatbot:ListMicrosoftTeamsConfiguredTeams";
	/** [Read] chatbot:ListMicrosoftTeamsUserIdentities */
	static readonly ListMicrosoftTeamsUserIdentities =
		"chatbot:ListMicrosoftTeamsUserIdentities";
	/** [Read] chatbot:ListTagsForResource */
	static readonly ListTagsForResource = "chatbot:ListTagsForResource";
	/** [Write] chatbot:RedeemMicrosoftTeamsOauthCode */
	static readonly RedeemMicrosoftTeamsOauthCode =
		"chatbot:RedeemMicrosoftTeamsOauthCode";
	/** [Write] chatbot:RedeemSlackOauthCode */
	static readonly RedeemSlackOauthCode = "chatbot:RedeemSlackOauthCode";
	/** [Tagging] chatbot:TagResource */
	static readonly TagResource = "chatbot:TagResource";
	/** [Tagging] chatbot:UntagResource */
	static readonly UntagResource = "chatbot:UntagResource";
	/** [Write] chatbot:UpdateAccountPreferences */
	static readonly UpdateAccountPreferences = "chatbot:UpdateAccountPreferences";
	/** [Write] chatbot:UpdateChimeWebhookConfiguration */
	static readonly UpdateChimeWebhookConfiguration =
		"chatbot:UpdateChimeWebhookConfiguration";
	/** [Write] chatbot:UpdateCustomAction */
	static readonly UpdateCustomAction = "chatbot:UpdateCustomAction";
	/** [Write] chatbot:UpdateMicrosoftTeamsChannelConfiguration */
	static readonly UpdateMicrosoftTeamsChannelConfiguration =
		"chatbot:UpdateMicrosoftTeamsChannelConfiguration";
	/** [Write] chatbot:UpdateSlackChannelConfiguration */
	static readonly UpdateSlackChannelConfiguration =
		"chatbot:UpdateSlackChannelConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ChatbotActions.DescribeChimeWebhookConfigurations,
		ChatbotActions.DescribeSlackChannelConfigurations,
		ChatbotActions.DescribeSlackChannels,
		ChatbotActions.DescribeSlackUserIdentities,
		ChatbotActions.DescribeSlackWorkspaces,
		ChatbotActions.actionGetAccountPreferences,
		ChatbotActions.actionGetCustomAction,
		ChatbotActions.actionGetMicrosoftTeamsChannelConfiguration,
		ChatbotActions.actionGetMicrosoftTeamsOauthParameters,
		ChatbotActions.actionGetSlackOauthParameters,
		ChatbotActions.ListAssociations,
		ChatbotActions.ListMicrosoftTeamsChannelConfigurations,
		ChatbotActions.ListMicrosoftTeamsConfiguredTeams,
		ChatbotActions.ListMicrosoftTeamsUserIdentities,
		ChatbotActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ChatbotActions.AssociateToConfiguration,
		ChatbotActions.CreateChimeWebhookConfiguration,
		ChatbotActions.CreateCustomAction,
		ChatbotActions.CreateMicrosoftTeamsChannelConfiguration,
		ChatbotActions.CreateSlackChannelConfiguration,
		ChatbotActions.DeleteChimeWebhookConfiguration,
		ChatbotActions.DeleteCustomAction,
		ChatbotActions.DeleteMicrosoftTeamsChannelConfiguration,
		ChatbotActions.DeleteMicrosoftTeamsConfiguredTeam,
		ChatbotActions.DeleteMicrosoftTeamsUserIdentity,
		ChatbotActions.DeleteSlackChannelConfiguration,
		ChatbotActions.DeleteSlackUserIdentity,
		ChatbotActions.DeleteSlackWorkspaceAuthorization,
		ChatbotActions.DisassociateFromConfiguration,
		ChatbotActions.RedeemMicrosoftTeamsOauthCode,
		ChatbotActions.RedeemSlackOauthCode,
		ChatbotActions.UpdateAccountPreferences,
		ChatbotActions.UpdateChimeWebhookConfiguration,
		ChatbotActions.UpdateCustomAction,
		ChatbotActions.UpdateMicrosoftTeamsChannelConfiguration,
		ChatbotActions.UpdateSlackChannelConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [ChatbotActions.ListCustomActions];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ChatbotActions.TagResource,
		ChatbotActions.UntagResource,
	];
}

/**
 * Properties for building a ChatbotConfiguration ARN.
 */
export interface ChatbotChatbotConfigurationArnProps {
	/** The ConfigurationType component of the ARN. */
	readonly configurationType: string;
	/** The ChatbotConfigurationName component of the ARN. */
	readonly chatbotConfigurationName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ChatbotConfiguration ARN.
 */
export interface ChatbotChatbotConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationType component. */
	readonly configurationType: string;
	/** The ChatbotConfigurationName component. */
	readonly chatbotConfigurationName: string;
}

/**
 * Properties for building a custom-action ARN.
 */
export interface ChatbotCustomActionArnProps {
	/** The ActionName component of the ARN. */
	readonly actionName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a custom-action ARN.
 */
export interface ChatbotCustomActionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ActionName component. */
	readonly actionName: string;
}

const ChatbotConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):chatbot::(?<account>[^:]*):chat-configuration\/(?<configurationType>[^:/?]+)\/(?<chatbotConfigurationName>[^:/?]+)$/;
const CustomActionArnRegex =
	/^arn:(?<partition>[^:]+):chatbot::(?<account>[^:]*):custom-action\/(?<actionName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for chatbot resources.
 */
export class ChatbotResources {
	/**
	 * Builds an ARN for the ChatbotConfiguration resource.
	 */
	static chatbotConfiguration(
		props: ChatbotChatbotConfigurationArnProps,
	): string {
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
	static parseChatbotConfigurationArn(
		arn: string,
	): ChatbotChatbotConfigurationArnComponents {
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
	static customAction(props: ChatbotCustomActionArnProps): string {
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
	static parseCustomActionArn(arn: string): ChatbotCustomActionArnComponents {
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
	static readonly AssociateToConfiguration: string[] = [
		"chatbot:AssociateToConfiguration",
	];
	/** IAM actions required for the CreateChimeWebhookConfiguration API call. */
	static readonly CreateChimeWebhookConfiguration: string[] = [
		"chatbot:CreateChimeWebhookConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateCustomAction API call. */
	static readonly CreateCustomAction: string[] = [
		"chatbot:CreateCustomAction",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateMicrosoftTeamsChannelConfiguration API call. */
	static readonly CreateMicrosoftTeamsChannelConfiguration: string[] = [
		"chatbot:CreateMicrosoftTeamsChannelConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the CreateSlackChannelConfiguration API call. */
	static readonly CreateSlackChannelConfiguration: string[] = [
		"chatbot:CreateSlackChannelConfiguration",
		"iam:PassRole",
		"chatbot:TagResource",
	];
	/** IAM actions required for the DeleteChimeWebhookConfiguration API call. */
	static readonly DeleteChimeWebhookConfiguration: string[] = [
		"chatbot:DeleteChimeWebhookConfiguration",
	];
	/** IAM actions required for the DeleteCustomAction API call. */
	static readonly DeleteCustomAction: string[] = ["chatbot:DeleteCustomAction"];
	/** IAM actions required for the DeleteMicrosoftTeamsChannelConfiguration API call. */
	static readonly DeleteMicrosoftTeamsChannelConfiguration: string[] = [
		"chatbot:DeleteMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the DeleteMicrosoftTeamsConfiguredTeam API call. */
	static readonly DeleteMicrosoftTeamsConfiguredTeam: string[] = [
		"chatbot:DeleteMicrosoftTeamsConfiguredTeam",
	];
	/** IAM actions required for the DeleteMicrosoftTeamsUserIdentity API call. */
	static readonly DeleteMicrosoftTeamsUserIdentity: string[] = [
		"chatbot:DeleteMicrosoftTeamsUserIdentity",
	];
	/** IAM actions required for the DeleteSlackChannelConfiguration API call. */
	static readonly DeleteSlackChannelConfiguration: string[] = [
		"chatbot:DeleteSlackChannelConfiguration",
	];
	/** IAM actions required for the DeleteSlackUserIdentity API call. */
	static readonly DeleteSlackUserIdentity: string[] = [
		"chatbot:DeleteSlackUserIdentity",
	];
	/** IAM actions required for the DeleteSlackWorkspaceAuthorization API call. */
	static readonly DeleteSlackWorkspaceAuthorization: string[] = [
		"chatbot:DeleteSlackWorkspaceAuthorization",
	];
	/** IAM actions required for the DescribeChimeWebhookConfigurations API call. */
	static readonly DescribeChimeWebhookConfigurations: string[] = [
		"chatbot:DescribeChimeWebhookConfigurations",
	];
	/** IAM actions required for the DescribeSlackChannelConfigurations API call. */
	static readonly DescribeSlackChannelConfigurations: string[] = [
		"chatbot:DescribeSlackChannelConfigurations",
	];
	/** IAM actions required for the DescribeSlackUserIdentities API call. */
	static readonly DescribeSlackUserIdentities: string[] = [
		"chatbot:DescribeSlackUserIdentities",
	];
	/** IAM actions required for the DescribeSlackWorkspaces API call. */
	static readonly DescribeSlackWorkspaces: string[] = [
		"chatbot:DescribeSlackWorkspaces",
	];
	/** IAM actions required for the DisassociateFromConfiguration API call. */
	static readonly DisassociateFromConfiguration: string[] = [
		"chatbot:DisassociateFromConfiguration",
	];
	/** IAM actions required for the GetAccountPreferences API call. */
	static readonly opGetAccountPreferences: string[] = [
		"chatbot:GetAccountPreferences",
	];
	/** IAM actions required for the GetCustomAction API call. */
	static readonly opGetCustomAction: string[] = ["chatbot:GetCustomAction"];
	/** IAM actions required for the GetMicrosoftTeamsChannelConfiguration API call. */
	static readonly opGetMicrosoftTeamsChannelConfiguration: string[] = [
		"chatbot:GetMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the ListAssociations API call. */
	static readonly ListAssociations: string[] = ["chatbot:ListAssociations"];
	/** IAM actions required for the ListCustomActions API call. */
	static readonly ListCustomActions: string[] = ["chatbot:ListCustomActions"];
	/** IAM actions required for the ListMicrosoftTeamsChannelConfigurations API call. */
	static readonly ListMicrosoftTeamsChannelConfigurations: string[] = [
		"chatbot:ListMicrosoftTeamsChannelConfigurations",
	];
	/** IAM actions required for the ListMicrosoftTeamsConfiguredTeams API call. */
	static readonly ListMicrosoftTeamsConfiguredTeams: string[] = [
		"chatbot:ListMicrosoftTeamsConfiguredTeams",
	];
	/** IAM actions required for the ListMicrosoftTeamsUserIdentities API call. */
	static readonly ListMicrosoftTeamsUserIdentities: string[] = [
		"chatbot:ListMicrosoftTeamsUserIdentities",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"chatbot:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["chatbot:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["chatbot:UntagResource"];
	/** IAM actions required for the UpdateAccountPreferences API call. */
	static readonly UpdateAccountPreferences: string[] = [
		"chatbot:UpdateAccountPreferences",
	];
	/** IAM actions required for the UpdateChimeWebhookConfiguration API call. */
	static readonly UpdateChimeWebhookConfiguration: string[] = [
		"iam:PassRole",
		"chatbot:UpdateChimeWebhookConfiguration",
	];
	/** IAM actions required for the UpdateCustomAction API call. */
	static readonly UpdateCustomAction: string[] = ["chatbot:UpdateCustomAction"];
	/** IAM actions required for the UpdateMicrosoftTeamsChannelConfiguration API call. */
	static readonly UpdateMicrosoftTeamsChannelConfiguration: string[] = [
		"iam:PassRole",
		"chatbot:UpdateMicrosoftTeamsChannelConfiguration",
	];
	/** IAM actions required for the UpdateSlackChannelConfiguration API call. */
	static readonly UpdateSlackChannelConfiguration: string[] = [
		"iam:PassRole",
		"chatbot:UpdateSlackChannelConfiguration",
	];
}

/**
 * Condition key constants and builders for chatbot.
 */
export class ChatbotConditions {
	/** Condition keys applicable to the AssociateToConfiguration action. */
	static readonly AssociateToConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateChimeWebhookConfiguration action. */
	static readonly CreateChimeWebhookConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomAction action. */
	static readonly CreateCustomActionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMicrosoftTeamsChannelConfiguration action. */
	static readonly CreateMicrosoftTeamsChannelConfigurationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSlackChannelConfiguration action. */
	static readonly CreateSlackChannelConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteChimeWebhookConfiguration action. */
	static readonly DeleteChimeWebhookConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCustomAction action. */
	static readonly DeleteCustomActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteMicrosoftTeamsChannelConfiguration action. */
	static readonly DeleteMicrosoftTeamsChannelConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteSlackChannelConfiguration action. */
	static readonly DeleteSlackChannelConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateFromConfiguration action. */
	static readonly DisassociateFromConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCustomAction action. */
	static readonly actionGetCustomActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMicrosoftTeamsChannelConfiguration action. */
	static readonly actionGetMicrosoftTeamsChannelConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateChimeWebhookConfiguration action. */
	static readonly UpdateChimeWebhookConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCustomAction action. */
	static readonly UpdateCustomActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateMicrosoftTeamsChannelConfiguration action. */
	static readonly UpdateMicrosoftTeamsChannelConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateSlackChannelConfiguration action. */
	static readonly UpdateSlackChannelConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
