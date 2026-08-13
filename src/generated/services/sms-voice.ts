// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sms-voice.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sms-voice service.
 */
export class SMSVoiceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sms-voice";

	/** [Write] sms-voice:AssociateOriginationIdentity */
	static readonly ASSOCIATE_ORIGINATION_IDENTITY =
		"sms-voice:AssociateOriginationIdentity";
	/** [Write] sms-voice:AssociateProtectConfiguration */
	static readonly ASSOCIATE_PROTECT_CONFIGURATION =
		"sms-voice:AssociateProtectConfiguration";
	/** [Read] sms-voice:CarrierLookup */
	static readonly CARRIER_LOOKUP = "sms-voice:CarrierLookup";
	/** [Write] sms-voice:CreateConfigurationSet */
	static readonly CREATE_CONFIGURATION_SET = "sms-voice:CreateConfigurationSet";
	/** [Write] sms-voice:CreateConfigurationSetEventDestination */
	static readonly CREATE_CONFIGURATION_SET_EVENT_DESTINATION =
		"sms-voice:CreateConfigurationSetEventDestination";
	/** [Write] sms-voice:CreateEventDestination */
	static readonly CREATE_EVENT_DESTINATION = "sms-voice:CreateEventDestination";
	/** [Write] sms-voice:CreateNotifyConfiguration */
	static readonly CREATE_NOTIFY_CONFIGURATION =
		"sms-voice:CreateNotifyConfiguration";
	/** [Write] sms-voice:CreateOptOutList */
	static readonly CREATE_OPT_OUT_LIST = "sms-voice:CreateOptOutList";
	/** [Write] sms-voice:CreatePool */
	static readonly CREATE_POOL = "sms-voice:CreatePool";
	/** [Write] sms-voice:CreateProtectConfiguration */
	static readonly CREATE_PROTECT_CONFIGURATION =
		"sms-voice:CreateProtectConfiguration";
	/** [Write] sms-voice:CreateRcsAgent */
	static readonly CREATE_RCS_AGENT = "sms-voice:CreateRcsAgent";
	/** [Write] sms-voice:CreateRegistration */
	static readonly CREATE_REGISTRATION = "sms-voice:CreateRegistration";
	/** [Write] sms-voice:CreateRegistrationAssociation */
	static readonly CREATE_REGISTRATION_ASSOCIATION =
		"sms-voice:CreateRegistrationAssociation";
	/** [Write] sms-voice:CreateRegistrationAttachment */
	static readonly CREATE_REGISTRATION_ATTACHMENT =
		"sms-voice:CreateRegistrationAttachment";
	/** [Write] sms-voice:CreateRegistrationVersion */
	static readonly CREATE_REGISTRATION_VERSION =
		"sms-voice:CreateRegistrationVersion";
	/** [Write] sms-voice:CreateVerifiedDestinationNumber */
	static readonly CREATE_VERIFIED_DESTINATION_NUMBER =
		"sms-voice:CreateVerifiedDestinationNumber";
	/** [Write] sms-voice:DeleteAccountDefaultProtectConfiguration */
	static readonly DELETE_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION =
		"sms-voice:DeleteAccountDefaultProtectConfiguration";
	/** [Write] sms-voice:DeleteConfigurationSet */
	static readonly DELETE_CONFIGURATION_SET = "sms-voice:DeleteConfigurationSet";
	/** [Write] sms-voice:DeleteConfigurationSetEventDestination */
	static readonly DELETE_CONFIGURATION_SET_EVENT_DESTINATION =
		"sms-voice:DeleteConfigurationSetEventDestination";
	/** [Write] sms-voice:DeleteDefaultMessageType */
	static readonly DELETE_DEFAULT_MESSAGE_TYPE =
		"sms-voice:DeleteDefaultMessageType";
	/** [Write] sms-voice:DeleteDefaultSenderId */
	static readonly DELETE_DEFAULT_SENDER_ID = "sms-voice:DeleteDefaultSenderId";
	/** [Write] sms-voice:DeleteEventDestination */
	static readonly DELETE_EVENT_DESTINATION = "sms-voice:DeleteEventDestination";
	/** [Write] sms-voice:DeleteKeyword */
	static readonly DELETE_KEYWORD = "sms-voice:DeleteKeyword";
	/** [Write] sms-voice:DeleteMediaMessageSpendLimitOverride */
	static readonly DELETE_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:DeleteMediaMessageSpendLimitOverride";
	/** [Write] sms-voice:DeleteNotifyConfiguration */
	static readonly DELETE_NOTIFY_CONFIGURATION =
		"sms-voice:DeleteNotifyConfiguration";
	/** [Write] sms-voice:DeleteNotifyMessageSpendLimitOverride */
	static readonly DELETE_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:DeleteNotifyMessageSpendLimitOverride";
	/** [Write] sms-voice:DeleteOptOutList */
	static readonly DELETE_OPT_OUT_LIST = "sms-voice:DeleteOptOutList";
	/** [Write] sms-voice:DeleteOptedOutNumber */
	static readonly DELETE_OPTED_OUT_NUMBER = "sms-voice:DeleteOptedOutNumber";
	/** [Write] sms-voice:DeletePool */
	static readonly DELETE_POOL = "sms-voice:DeletePool";
	/** [Write] sms-voice:DeleteProtectConfiguration */
	static readonly DELETE_PROTECT_CONFIGURATION =
		"sms-voice:DeleteProtectConfiguration";
	/** [Write] sms-voice:DeleteProtectConfigurationRuleSetNumberOverride */
	static readonly DELETE_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE =
		"sms-voice:DeleteProtectConfigurationRuleSetNumberOverride";
	/** [Write] sms-voice:DeleteRcsAgent */
	static readonly DELETE_RCS_AGENT = "sms-voice:DeleteRcsAgent";
	/** [Write] sms-voice:DeleteRcsMessageSpendLimitOverride */
	static readonly DELETE_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:DeleteRcsMessageSpendLimitOverride";
	/** [Write] sms-voice:DeleteRegistration */
	static readonly DELETE_REGISTRATION = "sms-voice:DeleteRegistration";
	/** [Write] sms-voice:DeleteRegistrationAttachment */
	static readonly DELETE_REGISTRATION_ATTACHMENT =
		"sms-voice:DeleteRegistrationAttachment";
	/** [Write] sms-voice:DeleteRegistrationFieldValue */
	static readonly DELETE_REGISTRATION_FIELD_VALUE =
		"sms-voice:DeleteRegistrationFieldValue";
	/** [PermissionManagement] sms-voice:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "sms-voice:DeleteResourcePolicy";
	/** [Write] sms-voice:DeleteTextMessageSpendLimitOverride */
	static readonly DELETE_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:DeleteTextMessageSpendLimitOverride";
	/** [Write] sms-voice:DeleteVerifiedDestinationNumber */
	static readonly DELETE_VERIFIED_DESTINATION_NUMBER =
		"sms-voice:DeleteVerifiedDestinationNumber";
	/** [Write] sms-voice:DeleteVoiceMessageSpendLimitOverride */
	static readonly DELETE_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:DeleteVoiceMessageSpendLimitOverride";
	/** [Read] sms-voice:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES =
		"sms-voice:DescribeAccountAttributes";
	/** [Read] sms-voice:DescribeAccountLimits */
	static readonly DESCRIBE_ACCOUNT_LIMITS = "sms-voice:DescribeAccountLimits";
	/** [Read] sms-voice:DescribeConfigurationSets */
	static readonly DESCRIBE_CONFIGURATION_SETS =
		"sms-voice:DescribeConfigurationSets";
	/** [Read] sms-voice:DescribeKeywords */
	static readonly DESCRIBE_KEYWORDS = "sms-voice:DescribeKeywords";
	/** [Read] sms-voice:DescribeNotifyConfigurations */
	static readonly DESCRIBE_NOTIFY_CONFIGURATIONS =
		"sms-voice:DescribeNotifyConfigurations";
	/** [Read] sms-voice:DescribeNotifyTemplates */
	static readonly DESCRIBE_NOTIFY_TEMPLATES =
		"sms-voice:DescribeNotifyTemplates";
	/** [Read] sms-voice:DescribeOptOutLists */
	static readonly DESCRIBE_OPT_OUT_LISTS = "sms-voice:DescribeOptOutLists";
	/** [Read] sms-voice:DescribeOptedOutNumbers */
	static readonly DESCRIBE_OPTED_OUT_NUMBERS =
		"sms-voice:DescribeOptedOutNumbers";
	/** [Read] sms-voice:DescribePhoneNumbers */
	static readonly DESCRIBE_PHONE_NUMBERS = "sms-voice:DescribePhoneNumbers";
	/** [Read] sms-voice:DescribePools */
	static readonly DESCRIBE_POOLS = "sms-voice:DescribePools";
	/** [Read] sms-voice:DescribeProtectConfigurations */
	static readonly DESCRIBE_PROTECT_CONFIGURATIONS =
		"sms-voice:DescribeProtectConfigurations";
	/** [Read] sms-voice:DescribeRcsAgentCountryLaunchStatus */
	static readonly DESCRIBE_RCS_AGENT_COUNTRY_LAUNCH_STATUS =
		"sms-voice:DescribeRcsAgentCountryLaunchStatus";
	/** [Read] sms-voice:DescribeRcsAgents */
	static readonly DESCRIBE_RCS_AGENTS = "sms-voice:DescribeRcsAgents";
	/** [Read] sms-voice:DescribeRegistrationAttachments */
	static readonly DESCRIBE_REGISTRATION_ATTACHMENTS =
		"sms-voice:DescribeRegistrationAttachments";
	/** [Read] sms-voice:DescribeRegistrationFieldDefinitions */
	static readonly DESCRIBE_REGISTRATION_FIELD_DEFINITIONS =
		"sms-voice:DescribeRegistrationFieldDefinitions";
	/** [Read] sms-voice:DescribeRegistrationFieldValues */
	static readonly DESCRIBE_REGISTRATION_FIELD_VALUES =
		"sms-voice:DescribeRegistrationFieldValues";
	/** [Read] sms-voice:DescribeRegistrationSectionDefinitions */
	static readonly DESCRIBE_REGISTRATION_SECTION_DEFINITIONS =
		"sms-voice:DescribeRegistrationSectionDefinitions";
	/** [Read] sms-voice:DescribeRegistrationTypeDefinitions */
	static readonly DESCRIBE_REGISTRATION_TYPE_DEFINITIONS =
		"sms-voice:DescribeRegistrationTypeDefinitions";
	/** [Read] sms-voice:DescribeRegistrationVersions */
	static readonly DESCRIBE_REGISTRATION_VERSIONS =
		"sms-voice:DescribeRegistrationVersions";
	/** [Read] sms-voice:DescribeRegistrations */
	static readonly DESCRIBE_REGISTRATIONS = "sms-voice:DescribeRegistrations";
	/** [Read] sms-voice:DescribeSenderIds */
	static readonly DESCRIBE_SENDER_IDS = "sms-voice:DescribeSenderIds";
	/** [Read] sms-voice:DescribeSpendLimits */
	static readonly DESCRIBE_SPEND_LIMITS = "sms-voice:DescribeSpendLimits";
	/** [Read] sms-voice:DescribeVerifiedDestinationNumbers */
	static readonly DESCRIBE_VERIFIED_DESTINATION_NUMBERS =
		"sms-voice:DescribeVerifiedDestinationNumbers";
	/** [Write] sms-voice:DisassociateOriginationIdentity */
	static readonly DISASSOCIATE_ORIGINATION_IDENTITY =
		"sms-voice:DisassociateOriginationIdentity";
	/** [Write] sms-voice:DisassociateProtectConfiguration */
	static readonly DISASSOCIATE_PROTECT_CONFIGURATION =
		"sms-voice:DisassociateProtectConfiguration";
	/** [Write] sms-voice:DiscardRegistrationVersion */
	static readonly DISCARD_REGISTRATION_VERSION =
		"sms-voice:DiscardRegistrationVersion";
	/** [Read] sms-voice:GetConfigurationSetEventDestinations */
	static readonly GET_CONFIGURATION_SET_EVENT_DESTINATIONS =
		"sms-voice:GetConfigurationSetEventDestinations";
	/** [Read] sms-voice:GetProtectConfigurationCountryRuleSet */
	static readonly GET_PROTECT_CONFIGURATION_COUNTRY_RULE_SET =
		"sms-voice:GetProtectConfigurationCountryRuleSet";
	/** [Read] sms-voice:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "sms-voice:GetResourcePolicy";
	/** [Read] sms-voice:ListConfigurationSets */
	static readonly LIST_CONFIGURATION_SETS = "sms-voice:ListConfigurationSets";
	/** [Read] sms-voice:ListNotifyCountries */
	static readonly LIST_NOTIFY_COUNTRIES = "sms-voice:ListNotifyCountries";
	/** [Read] sms-voice:ListPoolOriginationIdentities */
	static readonly LIST_POOL_ORIGINATION_IDENTITIES =
		"sms-voice:ListPoolOriginationIdentities";
	/** [Read] sms-voice:ListProtectConfigurationRuleSetNumberOverrides */
	static readonly LIST_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDES =
		"sms-voice:ListProtectConfigurationRuleSetNumberOverrides";
	/** [Read] sms-voice:ListRegistrationAssociations */
	static readonly LIST_REGISTRATION_ASSOCIATIONS =
		"sms-voice:ListRegistrationAssociations";
	/** [Read] sms-voice:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "sms-voice:ListTagsForResource";
	/** [Write] sms-voice:PutKeyword */
	static readonly PUT_KEYWORD = "sms-voice:PutKeyword";
	/** [Write] sms-voice:PutMessageFeedback */
	static readonly PUT_MESSAGE_FEEDBACK = "sms-voice:PutMessageFeedback";
	/** [Write] sms-voice:PutOptedOutNumber */
	static readonly PUT_OPTED_OUT_NUMBER = "sms-voice:PutOptedOutNumber";
	/** [Write] sms-voice:PutProtectConfigurationRuleSetNumberOverride */
	static readonly PUT_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE =
		"sms-voice:PutProtectConfigurationRuleSetNumberOverride";
	/** [Write] sms-voice:PutRegistrationFieldValue */
	static readonly PUT_REGISTRATION_FIELD_VALUE =
		"sms-voice:PutRegistrationFieldValue";
	/** [PermissionManagement] sms-voice:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "sms-voice:PutResourcePolicy";
	/** [Write] sms-voice:ReleasePhoneNumber */
	static readonly RELEASE_PHONE_NUMBER = "sms-voice:ReleasePhoneNumber";
	/** [Write] sms-voice:ReleaseSenderId */
	static readonly RELEASE_SENDER_ID = "sms-voice:ReleaseSenderId";
	/** [Write] sms-voice:RequestPhoneNumber */
	static readonly REQUEST_PHONE_NUMBER = "sms-voice:RequestPhoneNumber";
	/** [Write] sms-voice:RequestSenderId */
	static readonly REQUEST_SENDER_ID = "sms-voice:RequestSenderId";
	/** [Write] sms-voice:SendDestinationNumberVerificationCode */
	static readonly SEND_DESTINATION_NUMBER_VERIFICATION_CODE =
		"sms-voice:SendDestinationNumberVerificationCode";
	/** [Write] sms-voice:SendMediaMessage */
	static readonly SEND_MEDIA_MESSAGE = "sms-voice:SendMediaMessage";
	/** [Write] sms-voice:SendNotifyTextMessage */
	static readonly SEND_NOTIFY_TEXT_MESSAGE = "sms-voice:SendNotifyTextMessage";
	/** [Write] sms-voice:SendNotifyVoiceMessage */
	static readonly SEND_NOTIFY_VOICE_MESSAGE =
		"sms-voice:SendNotifyVoiceMessage";
	/** [Write] sms-voice:SendRcsMessage */
	static readonly SEND_RCS_MESSAGE = "sms-voice:SendRcsMessage";
	/** [Write] sms-voice:SendTextMessage */
	static readonly SEND_TEXT_MESSAGE = "sms-voice:SendTextMessage";
	/** [Write] sms-voice:SendVoiceMessage */
	static readonly SEND_VOICE_MESSAGE = "sms-voice:SendVoiceMessage";
	/** [Write] sms-voice:SetAccountDefaultProtectConfiguration */
	static readonly SET_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION =
		"sms-voice:SetAccountDefaultProtectConfiguration";
	/** [Write] sms-voice:SetDefaultMessageFeedbackEnabled */
	static readonly SET_DEFAULT_MESSAGE_FEEDBACK_ENABLED =
		"sms-voice:SetDefaultMessageFeedbackEnabled";
	/** [Write] sms-voice:SetDefaultMessageType */
	static readonly SET_DEFAULT_MESSAGE_TYPE = "sms-voice:SetDefaultMessageType";
	/** [Write] sms-voice:SetDefaultSenderId */
	static readonly SET_DEFAULT_SENDER_ID = "sms-voice:SetDefaultSenderId";
	/** [Write] sms-voice:SetMediaMessageSpendLimitOverride */
	static readonly SET_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:SetMediaMessageSpendLimitOverride";
	/** [Write] sms-voice:SetNotifyMessageSpendLimitOverride */
	static readonly SET_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:SetNotifyMessageSpendLimitOverride";
	/** [Write] sms-voice:SetRcsMessageSpendLimitOverride */
	static readonly SET_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:SetRcsMessageSpendLimitOverride";
	/** [Write] sms-voice:SetTextMessageSpendLimitOverride */
	static readonly SET_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:SetTextMessageSpendLimitOverride";
	/** [Write] sms-voice:SetVoiceMessageSpendLimitOverride */
	static readonly SET_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE =
		"sms-voice:SetVoiceMessageSpendLimitOverride";
	/** [Write] sms-voice:SubmitRegistrationVersion */
	static readonly SUBMIT_REGISTRATION_VERSION =
		"sms-voice:SubmitRegistrationVersion";
	/** [Tagging] sms-voice:TagResource */
	static readonly TAG_RESOURCE = "sms-voice:TagResource";
	/** [Tagging] sms-voice:UntagResource */
	static readonly UNTAG_RESOURCE = "sms-voice:UntagResource";
	/** [Write] sms-voice:UpdateConfigurationSetEventDestination */
	static readonly UPDATE_CONFIGURATION_SET_EVENT_DESTINATION =
		"sms-voice:UpdateConfigurationSetEventDestination";
	/** [Write] sms-voice:UpdateEventDestination */
	static readonly UPDATE_EVENT_DESTINATION = "sms-voice:UpdateEventDestination";
	/** [Write] sms-voice:UpdateNotifyConfiguration */
	static readonly UPDATE_NOTIFY_CONFIGURATION =
		"sms-voice:UpdateNotifyConfiguration";
	/** [Write] sms-voice:UpdatePhoneNumber */
	static readonly UPDATE_PHONE_NUMBER = "sms-voice:UpdatePhoneNumber";
	/** [Write] sms-voice:UpdatePool */
	static readonly UPDATE_POOL = "sms-voice:UpdatePool";
	/** [Write] sms-voice:UpdateProtectConfiguration */
	static readonly UPDATE_PROTECT_CONFIGURATION =
		"sms-voice:UpdateProtectConfiguration";
	/** [Write] sms-voice:UpdateProtectConfigurationCountryRuleSet */
	static readonly UPDATE_PROTECT_CONFIGURATION_COUNTRY_RULE_SET =
		"sms-voice:UpdateProtectConfigurationCountryRuleSet";
	/** [Write] sms-voice:UpdateRcsAgent */
	static readonly UPDATE_RCS_AGENT = "sms-voice:UpdateRcsAgent";
	/** [Write] sms-voice:UpdateSenderId */
	static readonly UPDATE_SENDER_ID = "sms-voice:UpdateSenderId";
	/** [Write] sms-voice:VerifyDestinationNumber */
	static readonly VERIFY_DESTINATION_NUMBER =
		"sms-voice:VerifyDestinationNumber";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SMSVoiceActions.CARRIER_LOOKUP,
		SMSVoiceActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		SMSVoiceActions.DESCRIBE_ACCOUNT_LIMITS,
		SMSVoiceActions.DESCRIBE_CONFIGURATION_SETS,
		SMSVoiceActions.DESCRIBE_KEYWORDS,
		SMSVoiceActions.DESCRIBE_NOTIFY_CONFIGURATIONS,
		SMSVoiceActions.DESCRIBE_NOTIFY_TEMPLATES,
		SMSVoiceActions.DESCRIBE_OPT_OUT_LISTS,
		SMSVoiceActions.DESCRIBE_OPTED_OUT_NUMBERS,
		SMSVoiceActions.DESCRIBE_PHONE_NUMBERS,
		SMSVoiceActions.DESCRIBE_POOLS,
		SMSVoiceActions.DESCRIBE_PROTECT_CONFIGURATIONS,
		SMSVoiceActions.DESCRIBE_RCS_AGENT_COUNTRY_LAUNCH_STATUS,
		SMSVoiceActions.DESCRIBE_RCS_AGENTS,
		SMSVoiceActions.DESCRIBE_REGISTRATION_ATTACHMENTS,
		SMSVoiceActions.DESCRIBE_REGISTRATION_FIELD_DEFINITIONS,
		SMSVoiceActions.DESCRIBE_REGISTRATION_FIELD_VALUES,
		SMSVoiceActions.DESCRIBE_REGISTRATION_SECTION_DEFINITIONS,
		SMSVoiceActions.DESCRIBE_REGISTRATION_TYPE_DEFINITIONS,
		SMSVoiceActions.DESCRIBE_REGISTRATION_VERSIONS,
		SMSVoiceActions.DESCRIBE_REGISTRATIONS,
		SMSVoiceActions.DESCRIBE_SENDER_IDS,
		SMSVoiceActions.DESCRIBE_SPEND_LIMITS,
		SMSVoiceActions.DESCRIBE_VERIFIED_DESTINATION_NUMBERS,
		SMSVoiceActions.GET_CONFIGURATION_SET_EVENT_DESTINATIONS,
		SMSVoiceActions.GET_PROTECT_CONFIGURATION_COUNTRY_RULE_SET,
		SMSVoiceActions.GET_RESOURCE_POLICY,
		SMSVoiceActions.LIST_CONFIGURATION_SETS,
		SMSVoiceActions.LIST_NOTIFY_COUNTRIES,
		SMSVoiceActions.LIST_POOL_ORIGINATION_IDENTITIES,
		SMSVoiceActions.LIST_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDES,
		SMSVoiceActions.LIST_REGISTRATION_ASSOCIATIONS,
		SMSVoiceActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SMSVoiceActions.ASSOCIATE_ORIGINATION_IDENTITY,
		SMSVoiceActions.ASSOCIATE_PROTECT_CONFIGURATION,
		SMSVoiceActions.CREATE_CONFIGURATION_SET,
		SMSVoiceActions.CREATE_CONFIGURATION_SET_EVENT_DESTINATION,
		SMSVoiceActions.CREATE_EVENT_DESTINATION,
		SMSVoiceActions.CREATE_NOTIFY_CONFIGURATION,
		SMSVoiceActions.CREATE_OPT_OUT_LIST,
		SMSVoiceActions.CREATE_POOL,
		SMSVoiceActions.CREATE_PROTECT_CONFIGURATION,
		SMSVoiceActions.CREATE_RCS_AGENT,
		SMSVoiceActions.CREATE_REGISTRATION,
		SMSVoiceActions.CREATE_REGISTRATION_ASSOCIATION,
		SMSVoiceActions.CREATE_REGISTRATION_ATTACHMENT,
		SMSVoiceActions.CREATE_REGISTRATION_VERSION,
		SMSVoiceActions.CREATE_VERIFIED_DESTINATION_NUMBER,
		SMSVoiceActions.DELETE_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION,
		SMSVoiceActions.DELETE_CONFIGURATION_SET,
		SMSVoiceActions.DELETE_CONFIGURATION_SET_EVENT_DESTINATION,
		SMSVoiceActions.DELETE_DEFAULT_MESSAGE_TYPE,
		SMSVoiceActions.DELETE_DEFAULT_SENDER_ID,
		SMSVoiceActions.DELETE_EVENT_DESTINATION,
		SMSVoiceActions.DELETE_KEYWORD,
		SMSVoiceActions.DELETE_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.DELETE_NOTIFY_CONFIGURATION,
		SMSVoiceActions.DELETE_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.DELETE_OPT_OUT_LIST,
		SMSVoiceActions.DELETE_OPTED_OUT_NUMBER,
		SMSVoiceActions.DELETE_POOL,
		SMSVoiceActions.DELETE_PROTECT_CONFIGURATION,
		SMSVoiceActions.DELETE_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE,
		SMSVoiceActions.DELETE_RCS_AGENT,
		SMSVoiceActions.DELETE_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.DELETE_REGISTRATION,
		SMSVoiceActions.DELETE_REGISTRATION_ATTACHMENT,
		SMSVoiceActions.DELETE_REGISTRATION_FIELD_VALUE,
		SMSVoiceActions.DELETE_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.DELETE_VERIFIED_DESTINATION_NUMBER,
		SMSVoiceActions.DELETE_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.DISASSOCIATE_ORIGINATION_IDENTITY,
		SMSVoiceActions.DISASSOCIATE_PROTECT_CONFIGURATION,
		SMSVoiceActions.DISCARD_REGISTRATION_VERSION,
		SMSVoiceActions.PUT_KEYWORD,
		SMSVoiceActions.PUT_MESSAGE_FEEDBACK,
		SMSVoiceActions.PUT_OPTED_OUT_NUMBER,
		SMSVoiceActions.PUT_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE,
		SMSVoiceActions.PUT_REGISTRATION_FIELD_VALUE,
		SMSVoiceActions.RELEASE_PHONE_NUMBER,
		SMSVoiceActions.RELEASE_SENDER_ID,
		SMSVoiceActions.REQUEST_PHONE_NUMBER,
		SMSVoiceActions.REQUEST_SENDER_ID,
		SMSVoiceActions.SEND_DESTINATION_NUMBER_VERIFICATION_CODE,
		SMSVoiceActions.SEND_MEDIA_MESSAGE,
		SMSVoiceActions.SEND_NOTIFY_TEXT_MESSAGE,
		SMSVoiceActions.SEND_NOTIFY_VOICE_MESSAGE,
		SMSVoiceActions.SEND_RCS_MESSAGE,
		SMSVoiceActions.SEND_TEXT_MESSAGE,
		SMSVoiceActions.SEND_VOICE_MESSAGE,
		SMSVoiceActions.SET_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION,
		SMSVoiceActions.SET_DEFAULT_MESSAGE_FEEDBACK_ENABLED,
		SMSVoiceActions.SET_DEFAULT_MESSAGE_TYPE,
		SMSVoiceActions.SET_DEFAULT_SENDER_ID,
		SMSVoiceActions.SET_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.SET_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.SET_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.SET_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.SET_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE,
		SMSVoiceActions.SUBMIT_REGISTRATION_VERSION,
		SMSVoiceActions.UPDATE_CONFIGURATION_SET_EVENT_DESTINATION,
		SMSVoiceActions.UPDATE_EVENT_DESTINATION,
		SMSVoiceActions.UPDATE_NOTIFY_CONFIGURATION,
		SMSVoiceActions.UPDATE_PHONE_NUMBER,
		SMSVoiceActions.UPDATE_POOL,
		SMSVoiceActions.UPDATE_PROTECT_CONFIGURATION,
		SMSVoiceActions.UPDATE_PROTECT_CONFIGURATION_COUNTRY_RULE_SET,
		SMSVoiceActions.UPDATE_RCS_AGENT,
		SMSVoiceActions.UPDATE_SENDER_ID,
		SMSVoiceActions.VERIFY_DESTINATION_NUMBER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SMSVoiceActions.DELETE_RESOURCE_POLICY,
		SMSVoiceActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SMSVoiceActions.TAG_RESOURCE,
		SMSVoiceActions.UNTAG_RESOURCE,
	];
}

const ConfigurationSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):configuration-set/(?<configurationSetName>[^:/?]+)$",
);
const MessageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):message/(?<messageId>[^:/?]+)$",
);
const NotifyConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):notify-configuration/(?<notifyConfigurationId>[^:/?]+)$",
);
const OptOutListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):opt-out-list/(?<optOutListName>[^:/?]+)$",
);
const PhoneNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):phone-number/(?<phoneNumberId>[^:/?]+)$",
);
const PoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):pool/(?<poolId>[^:/?]+)$",
);
const ProtectConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):protect-configuration/(?<protectConfigurationId>[^:/?]+)$",
);
const RcsAgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):rcs-agent/(?<rcsAgentId>[^:/?]+)$",
);
const RegistrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):registration/(?<registrationId>[^:/?]+)$",
);
const RegistrationAttachmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):registration-attachment/(?<registrationAttachmentId>[^:/?]+)$",
);
const SenderIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):sender-id/(?<senderId>[^:/?]+)/(?<isoCountryCode>[^:/?]+)$",
);
const VerifiedDestinationNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sms-voice:(?<region>[^:]*):(?<account>[^:]*):verified-destination-number/(?<verifiedDestinationNumberId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sms-voice resources.
 */
export class SMSVoiceResources {
	/**
	 * Builds an ARN for the ConfigurationSet resource.
	 */
	static configurationSet(props: {
		/** The ConfigurationSetName component of the ARN. */
		readonly configurationSetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:configuration-set/${props.configurationSetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConfigurationSet resource.
	 */
	static isValidConfigurationSetArn(arn: string): boolean {
		return ConfigurationSetArnRegex.test(arn);
	}

	/**
	 * Parses a ConfigurationSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationSetName: string;
	} {
		const match = ConfigurationSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConfigurationSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationSetName: match.groups!.configurationSetName,
		};
	}

	/**
	 * Builds an ARN for the Message resource.
	 */
	static message(props: {
		/** The MessageId component of the ARN. */
		readonly messageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:message/${props.messageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Message resource.
	 */
	static isValidMessageArn(arn: string): boolean {
		return MessageArnRegex.test(arn);
	}

	/**
	 * Parses a Message ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMessageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		messageId: string;
	} {
		const match = MessageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Message ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			messageId: match.groups!.messageId,
		};
	}

	/**
	 * Builds an ARN for the NotifyConfiguration resource.
	 */
	static notifyConfiguration(props: {
		/** The NotifyConfigurationId component of the ARN. */
		readonly notifyConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:notify-configuration/${props.notifyConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the NotifyConfiguration resource.
	 */
	static isValidNotifyConfigurationArn(arn: string): boolean {
		return NotifyConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a NotifyConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotifyConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notifyConfigurationId: string;
	} {
		const match = NotifyConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid NotifyConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notifyConfigurationId: match.groups!.notifyConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the OptOutList resource.
	 */
	static optOutList(props: {
		/** The OptOutListName component of the ARN. */
		readonly optOutListName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:opt-out-list/${props.optOutListName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OptOutList resource.
	 */
	static isValidOptOutListArn(arn: string): boolean {
		return OptOutListArnRegex.test(arn);
	}

	/**
	 * Parses a OptOutList ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOptOutListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		optOutListName: string;
	} {
		const match = OptOutListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OptOutList ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			optOutListName: match.groups!.optOutListName,
		};
	}

	/**
	 * Builds an ARN for the PhoneNumber resource.
	 */
	static phoneNumber(props: {
		/** The PhoneNumberId component of the ARN. */
		readonly phoneNumberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:phone-number/${props.phoneNumberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PhoneNumber resource.
	 */
	static isValidPhoneNumberArn(arn: string): boolean {
		return PhoneNumberArnRegex.test(arn);
	}

	/**
	 * Parses a PhoneNumber ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePhoneNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		phoneNumberId: string;
	} {
		const match = PhoneNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PhoneNumber ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			phoneNumberId: match.groups!.phoneNumberId,
		};
	}

	/**
	 * Builds an ARN for the Pool resource.
	 */
	static pool(props: {
		/** The PoolId component of the ARN. */
		readonly poolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:pool/${props.poolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Pool resource.
	 */
	static isValidPoolArn(arn: string): boolean {
		return PoolArnRegex.test(arn);
	}

	/**
	 * Parses a Pool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		poolId: string;
	} {
		const match = PoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Pool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			poolId: match.groups!.poolId,
		};
	}

	/**
	 * Builds an ARN for the ProtectConfiguration resource.
	 */
	static protectConfiguration(props: {
		/** The ProtectConfigurationId component of the ARN. */
		readonly protectConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:protect-configuration/${props.protectConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProtectConfiguration resource.
	 */
	static isValidProtectConfigurationArn(arn: string): boolean {
		return ProtectConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a ProtectConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProtectConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		protectConfigurationId: string;
	} {
		const match = ProtectConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProtectConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			protectConfigurationId: match.groups!.protectConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the RcsAgent resource.
	 */
	static rcsAgent(props: {
		/** The RcsAgentId component of the ARN. */
		readonly rcsAgentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:rcs-agent/${props.rcsAgentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RcsAgent resource.
	 */
	static isValidRcsAgentArn(arn: string): boolean {
		return RcsAgentArnRegex.test(arn);
	}

	/**
	 * Parses a RcsAgent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRcsAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		rcsAgentId: string;
	} {
		const match = RcsAgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RcsAgent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			rcsAgentId: match.groups!.rcsAgentId,
		};
	}

	/**
	 * Builds an ARN for the Registration resource.
	 */
	static registration(props: {
		/** The RegistrationId component of the ARN. */
		readonly registrationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:registration/${props.registrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Registration resource.
	 */
	static isValidRegistrationArn(arn: string): boolean {
		return RegistrationArnRegex.test(arn);
	}

	/**
	 * Parses a Registration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registrationId: string;
	} {
		const match = RegistrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Registration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registrationId: match.groups!.registrationId,
		};
	}

	/**
	 * Builds an ARN for the RegistrationAttachment resource.
	 */
	static registrationAttachment(props: {
		/** The RegistrationAttachmentId component of the ARN. */
		readonly registrationAttachmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:registration-attachment/${props.registrationAttachmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RegistrationAttachment resource.
	 */
	static isValidRegistrationAttachmentArn(arn: string): boolean {
		return RegistrationAttachmentArnRegex.test(arn);
	}

	/**
	 * Parses a RegistrationAttachment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistrationAttachmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registrationAttachmentId: string;
	} {
		const match = RegistrationAttachmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RegistrationAttachment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registrationAttachmentId: match.groups!.registrationAttachmentId,
		};
	}

	/**
	 * Builds an ARN for the SenderId resource.
	 */
	static senderId(props: {
		/** The SenderId component of the ARN. */
		readonly senderId: string;
		/** The IsoCountryCode component of the ARN. */
		readonly isoCountryCode: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:sender-id/${props.senderId}/${props.isoCountryCode}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SenderId resource.
	 */
	static isValidSenderIdArn(arn: string): boolean {
		return SenderIdArnRegex.test(arn);
	}

	/**
	 * Parses a SenderId ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSenderIdArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		senderId: string;
		isoCountryCode: string;
	} {
		const match = SenderIdArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SenderId ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			senderId: match.groups!.senderId,
			isoCountryCode: match.groups!.isoCountryCode,
		};
	}

	/**
	 * Builds an ARN for the VerifiedDestinationNumber resource.
	 */
	static verifiedDestinationNumber(props: {
		/** The VerifiedDestinationNumberId component of the ARN. */
		readonly verifiedDestinationNumberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sms-voice:${props.region ?? "*"}:${props.account ?? "*"}:verified-destination-number/${props.verifiedDestinationNumberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VerifiedDestinationNumber resource.
	 */
	static isValidVerifiedDestinationNumberArn(arn: string): boolean {
		return VerifiedDestinationNumberArnRegex.test(arn);
	}

	/**
	 * Parses a VerifiedDestinationNumber ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVerifiedDestinationNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		verifiedDestinationNumberId: string;
	} {
		const match = VerifiedDestinationNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VerifiedDestinationNumber ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			verifiedDestinationNumberId: match.groups!.verifiedDestinationNumberId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sms-voice.
 */
export class SMSVoiceOperations {
	/** IAM actions required for the AssociateOriginationIdentity API call. */
	static readonly ASSOCIATE_ORIGINATION_IDENTITY: string[] = [
		"sms-voice:AssociateOriginationIdentity",
	];
	/** IAM actions required for the AssociateProtectConfiguration API call. */
	static readonly ASSOCIATE_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:AssociateProtectConfiguration",
	];
	/** IAM actions required for the CarrierLookup API call. */
	static readonly CARRIER_LOOKUP: string[] = ["sms-voice:CarrierLookup"];
	/** IAM actions required for the CreateConfigurationSet API call. */
	static readonly CREATE_CONFIGURATION_SET: string[] = [
		"sms-voice:CreateConfigurationSet",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateConfigurationSetEventDestination API call. */
	static readonly CREATE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"sms-voice:CreateConfigurationSetEventDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventDestination API call. */
	static readonly CREATE_EVENT_DESTINATION: string[] = [
		"sms-voice:CreateEventDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateNotifyConfiguration API call. */
	static readonly CREATE_NOTIFY_CONFIGURATION: string[] = [
		"sms-voice:CreateNotifyConfiguration",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateOptOutList API call. */
	static readonly CREATE_OPT_OUT_LIST: string[] = [
		"sms-voice:CreateOptOutList",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreatePool API call. */
	static readonly CREATE_POOL: string[] = [
		"sms-voice:CreatePool",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateProtectConfiguration API call. */
	static readonly CREATE_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:CreateProtectConfiguration",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateRcsAgent API call. */
	static readonly CREATE_RCS_AGENT: string[] = [
		"sms-voice:CreateRcsAgent",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateRegistration API call. */
	static readonly CREATE_REGISTRATION: string[] = [
		"sms-voice:CreateRegistration",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateRegistrationAssociation API call. */
	static readonly CREATE_REGISTRATION_ASSOCIATION: string[] = [
		"sms-voice:CreateRegistrationAssociation",
	];
	/** IAM actions required for the CreateRegistrationAttachment API call. */
	static readonly CREATE_REGISTRATION_ATTACHMENT: string[] = [
		"sms-voice:CreateRegistrationAttachment",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the CreateRegistrationVersion API call. */
	static readonly CREATE_REGISTRATION_VERSION: string[] = [
		"sms-voice:CreateRegistrationVersion",
	];
	/** IAM actions required for the CreateVerifiedDestinationNumber API call. */
	static readonly CREATE_VERIFIED_DESTINATION_NUMBER: string[] = [
		"sms-voice:CreateVerifiedDestinationNumber",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the DeleteAccountDefaultProtectConfiguration API call. */
	static readonly DELETE_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:DeleteAccountDefaultProtectConfiguration",
	];
	/** IAM actions required for the DeleteConfigurationSet API call. */
	static readonly DELETE_CONFIGURATION_SET: string[] = [
		"sms-voice:DeleteConfigurationSet",
	];
	/** IAM actions required for the DeleteConfigurationSetEventDestination API call. */
	static readonly DELETE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"sms-voice:DeleteConfigurationSetEventDestination",
	];
	/** IAM actions required for the DeleteDefaultMessageType API call. */
	static readonly DELETE_DEFAULT_MESSAGE_TYPE: string[] = [
		"sms-voice:DeleteDefaultMessageType",
	];
	/** IAM actions required for the DeleteDefaultSenderId API call. */
	static readonly DELETE_DEFAULT_SENDER_ID: string[] = [
		"sms-voice:DeleteDefaultSenderId",
	];
	/** IAM actions required for the DeleteEventDestination API call. */
	static readonly DELETE_EVENT_DESTINATION: string[] = [
		"sms-voice:DeleteEventDestination",
	];
	/** IAM actions required for the DeleteKeyword API call. */
	static readonly DELETE_KEYWORD: string[] = ["sms-voice:DeleteKeyword"];
	/** IAM actions required for the DeleteMediaMessageSpendLimitOverride API call. */
	static readonly DELETE_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:DeleteMediaMessageSpendLimitOverride",
	];
	/** IAM actions required for the DeleteNotifyConfiguration API call. */
	static readonly DELETE_NOTIFY_CONFIGURATION: string[] = [
		"sms-voice:DeleteNotifyConfiguration",
	];
	/** IAM actions required for the DeleteNotifyMessageSpendLimitOverride API call. */
	static readonly DELETE_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:DeleteNotifyMessageSpendLimitOverride",
	];
	/** IAM actions required for the DeleteOptOutList API call. */
	static readonly DELETE_OPT_OUT_LIST: string[] = [
		"sms-voice:DeleteOptOutList",
	];
	/** IAM actions required for the DeleteOptedOutNumber API call. */
	static readonly DELETE_OPTED_OUT_NUMBER: string[] = [
		"sms-voice:DeleteOptedOutNumber",
	];
	/** IAM actions required for the DeletePool API call. */
	static readonly DELETE_POOL: string[] = ["sms-voice:DeletePool"];
	/** IAM actions required for the DeleteProtectConfiguration API call. */
	static readonly DELETE_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:DeleteProtectConfiguration",
	];
	/** IAM actions required for the DeleteProtectConfigurationRuleSetNumberOverride API call. */
	static readonly DELETE_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE: string[] =
		["sms-voice:DeleteProtectConfigurationRuleSetNumberOverride"];
	/** IAM actions required for the DeleteRcsAgent API call. */
	static readonly DELETE_RCS_AGENT: string[] = ["sms-voice:DeleteRcsAgent"];
	/** IAM actions required for the DeleteRcsMessageSpendLimitOverride API call. */
	static readonly DELETE_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:DeleteRcsMessageSpendLimitOverride",
	];
	/** IAM actions required for the DeleteRegistration API call. */
	static readonly DELETE_REGISTRATION: string[] = [
		"sms-voice:DeleteRegistration",
	];
	/** IAM actions required for the DeleteRegistrationAttachment API call. */
	static readonly DELETE_REGISTRATION_ATTACHMENT: string[] = [
		"sms-voice:DeleteRegistrationAttachment",
	];
	/** IAM actions required for the DeleteRegistrationFieldValue API call. */
	static readonly DELETE_REGISTRATION_FIELD_VALUE: string[] = [
		"sms-voice:DeleteRegistrationFieldValue",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"sms-voice:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteTextMessageSpendLimitOverride API call. */
	static readonly DELETE_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:DeleteTextMessageSpendLimitOverride",
	];
	/** IAM actions required for the DeleteVerifiedDestinationNumber API call. */
	static readonly DELETE_VERIFIED_DESTINATION_NUMBER: string[] = [
		"sms-voice:DeleteVerifiedDestinationNumber",
	];
	/** IAM actions required for the DeleteVoiceMessageSpendLimitOverride API call. */
	static readonly DELETE_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:DeleteVoiceMessageSpendLimitOverride",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES: string[] = [
		"sms-voice:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DESCRIBE_ACCOUNT_LIMITS: string[] = [
		"sms-voice:DescribeAccountLimits",
	];
	/** IAM actions required for the DescribeConfigurationSets API call. */
	static readonly DESCRIBE_CONFIGURATION_SETS: string[] = [
		"sms-voice:DescribeConfigurationSets",
	];
	/** IAM actions required for the DescribeKeywords API call. */
	static readonly DESCRIBE_KEYWORDS: string[] = ["sms-voice:DescribeKeywords"];
	/** IAM actions required for the DescribeNotifyConfigurations API call. */
	static readonly DESCRIBE_NOTIFY_CONFIGURATIONS: string[] = [
		"sms-voice:DescribeNotifyConfigurations",
	];
	/** IAM actions required for the DescribeNotifyTemplates API call. */
	static readonly DESCRIBE_NOTIFY_TEMPLATES: string[] = [
		"sms-voice:DescribeNotifyTemplates",
	];
	/** IAM actions required for the DescribeOptOutLists API call. */
	static readonly DESCRIBE_OPT_OUT_LISTS: string[] = [
		"sms-voice:DescribeOptOutLists",
	];
	/** IAM actions required for the DescribeOptedOutNumbers API call. */
	static readonly DESCRIBE_OPTED_OUT_NUMBERS: string[] = [
		"sms-voice:DescribeOptedOutNumbers",
	];
	/** IAM actions required for the DescribePhoneNumbers API call. */
	static readonly DESCRIBE_PHONE_NUMBERS: string[] = [
		"sms-voice:DescribePhoneNumbers",
	];
	/** IAM actions required for the DescribePools API call. */
	static readonly DESCRIBE_POOLS: string[] = ["sms-voice:DescribePools"];
	/** IAM actions required for the DescribeProtectConfigurations API call. */
	static readonly DESCRIBE_PROTECT_CONFIGURATIONS: string[] = [
		"sms-voice:DescribeProtectConfigurations",
	];
	/** IAM actions required for the DescribeRcsAgentCountryLaunchStatus API call. */
	static readonly DESCRIBE_RCS_AGENT_COUNTRY_LAUNCH_STATUS: string[] = [
		"sms-voice:DescribeRcsAgentCountryLaunchStatus",
	];
	/** IAM actions required for the DescribeRcsAgents API call. */
	static readonly DESCRIBE_RCS_AGENTS: string[] = [
		"sms-voice:DescribeRcsAgents",
	];
	/** IAM actions required for the DescribeRegistrationAttachments API call. */
	static readonly DESCRIBE_REGISTRATION_ATTACHMENTS: string[] = [
		"sms-voice:DescribeRegistrationAttachments",
	];
	/** IAM actions required for the DescribeRegistrationFieldDefinitions API call. */
	static readonly DESCRIBE_REGISTRATION_FIELD_DEFINITIONS: string[] = [
		"sms-voice:DescribeRegistrationFieldDefinitions",
	];
	/** IAM actions required for the DescribeRegistrationFieldValues API call. */
	static readonly DESCRIBE_REGISTRATION_FIELD_VALUES: string[] = [
		"sms-voice:DescribeRegistrationFieldValues",
	];
	/** IAM actions required for the DescribeRegistrationSectionDefinitions API call. */
	static readonly DESCRIBE_REGISTRATION_SECTION_DEFINITIONS: string[] = [
		"sms-voice:DescribeRegistrationSectionDefinitions",
	];
	/** IAM actions required for the DescribeRegistrationTypeDefinitions API call. */
	static readonly DESCRIBE_REGISTRATION_TYPE_DEFINITIONS: string[] = [
		"sms-voice:DescribeRegistrationTypeDefinitions",
	];
	/** IAM actions required for the DescribeRegistrationVersions API call. */
	static readonly DESCRIBE_REGISTRATION_VERSIONS: string[] = [
		"sms-voice:DescribeRegistrationVersions",
	];
	/** IAM actions required for the DescribeRegistrations API call. */
	static readonly DESCRIBE_REGISTRATIONS: string[] = [
		"sms-voice:DescribeRegistrations",
	];
	/** IAM actions required for the DescribeSenderIds API call. */
	static readonly DESCRIBE_SENDER_IDS: string[] = [
		"sms-voice:DescribeSenderIds",
	];
	/** IAM actions required for the DescribeSpendLimits API call. */
	static readonly DESCRIBE_SPEND_LIMITS: string[] = [
		"sms-voice:DescribeSpendLimits",
	];
	/** IAM actions required for the DescribeVerifiedDestinationNumbers API call. */
	static readonly DESCRIBE_VERIFIED_DESTINATION_NUMBERS: string[] = [
		"sms-voice:DescribeVerifiedDestinationNumbers",
	];
	/** IAM actions required for the DisassociateOriginationIdentity API call. */
	static readonly DISASSOCIATE_ORIGINATION_IDENTITY: string[] = [
		"sms-voice:DisassociateOriginationIdentity",
	];
	/** IAM actions required for the DisassociateProtectConfiguration API call. */
	static readonly DISASSOCIATE_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:DisassociateProtectConfiguration",
	];
	/** IAM actions required for the DiscardRegistrationVersion API call. */
	static readonly DISCARD_REGISTRATION_VERSION: string[] = [
		"sms-voice:DiscardRegistrationVersion",
	];
	/** IAM actions required for the GetConfigurationSetEventDestinations API call. */
	static readonly GET_CONFIGURATION_SET_EVENT_DESTINATIONS: string[] = [
		"sms-voice:GetConfigurationSetEventDestinations",
	];
	/** IAM actions required for the GetProtectConfigurationCountryRuleSet API call. */
	static readonly GET_PROTECT_CONFIGURATION_COUNTRY_RULE_SET: string[] = [
		"sms-voice:GetProtectConfigurationCountryRuleSet",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"sms-voice:GetResourcePolicy",
	];
	/** IAM actions required for the ListConfigurationSets API call. */
	static readonly LIST_CONFIGURATION_SETS: string[] = [
		"sms-voice:ListConfigurationSets",
	];
	/** IAM actions required for the ListNotifyCountries API call. */
	static readonly LIST_NOTIFY_COUNTRIES: string[] = [
		"sms-voice:ListNotifyCountries",
	];
	/** IAM actions required for the ListPoolOriginationIdentities API call. */
	static readonly LIST_POOL_ORIGINATION_IDENTITIES: string[] = [
		"sms-voice:ListPoolOriginationIdentities",
	];
	/** IAM actions required for the ListProtectConfigurationRuleSetNumberOverrides API call. */
	static readonly LIST_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDES: string[] =
		["sms-voice:ListProtectConfigurationRuleSetNumberOverrides"];
	/** IAM actions required for the ListRegistrationAssociations API call. */
	static readonly LIST_REGISTRATION_ASSOCIATIONS: string[] = [
		"sms-voice:ListRegistrationAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"sms-voice:ListTagsForResource",
	];
	/** IAM actions required for the PutKeyword API call. */
	static readonly PUT_KEYWORD: string[] = ["sms-voice:PutKeyword"];
	/** IAM actions required for the PutMessageFeedback API call. */
	static readonly PUT_MESSAGE_FEEDBACK: string[] = [
		"sms-voice:PutMessageFeedback",
	];
	/** IAM actions required for the PutOptedOutNumber API call. */
	static readonly PUT_OPTED_OUT_NUMBER: string[] = [
		"sms-voice:PutOptedOutNumber",
	];
	/** IAM actions required for the PutProtectConfigurationRuleSetNumberOverride API call. */
	static readonly PUT_PROTECT_CONFIGURATION_RULE_SET_NUMBER_OVERRIDE: string[] =
		["sms-voice:PutProtectConfigurationRuleSetNumberOverride"];
	/** IAM actions required for the PutRegistrationFieldValue API call. */
	static readonly PUT_REGISTRATION_FIELD_VALUE: string[] = [
		"sms-voice:PutRegistrationFieldValue",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"sms-voice:PutResourcePolicy",
	];
	/** IAM actions required for the ReleasePhoneNumber API call. */
	static readonly RELEASE_PHONE_NUMBER: string[] = [
		"sms-voice:ReleasePhoneNumber",
	];
	/** IAM actions required for the ReleaseSenderId API call. */
	static readonly RELEASE_SENDER_ID: string[] = ["sms-voice:ReleaseSenderId"];
	/** IAM actions required for the RequestPhoneNumber API call. */
	static readonly REQUEST_PHONE_NUMBER: string[] = [
		"sms-voice:AssociateOriginationIdentity",
		"sms-voice:RequestPhoneNumber",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the RequestSenderId API call. */
	static readonly REQUEST_SENDER_ID: string[] = [
		"sms-voice:RequestSenderId",
		"sms-voice:TagResource",
	];
	/** IAM actions required for the SendDestinationNumberVerificationCode API call. */
	static readonly SEND_DESTINATION_NUMBER_VERIFICATION_CODE: string[] = [
		"sms-voice:SendDestinationNumberVerificationCode",
		"sms-voice:SendTextMessage",
		"sms-voice:SendVoiceMessage",
	];
	/** IAM actions required for the SendMediaMessage API call. */
	static readonly SEND_MEDIA_MESSAGE: string[] = ["sms-voice:SendMediaMessage"];
	/** IAM actions required for the SendNotifyTextMessage API call. */
	static readonly SEND_NOTIFY_TEXT_MESSAGE: string[] = [
		"sms-voice:SendNotifyTextMessage",
	];
	/** IAM actions required for the SendNotifyVoiceMessage API call. */
	static readonly SEND_NOTIFY_VOICE_MESSAGE: string[] = [
		"sms-voice:SendNotifyVoiceMessage",
	];
	/** IAM actions required for the SendRcsMessage API call. */
	static readonly SEND_RCS_MESSAGE: string[] = ["sms-voice:SendRcsMessage"];
	/** IAM actions required for the SendTextMessage API call. */
	static readonly SEND_TEXT_MESSAGE: string[] = ["sms-voice:SendTextMessage"];
	/** IAM actions required for the SendVoiceMessage API call. */
	static readonly SEND_VOICE_MESSAGE: string[] = ["sms-voice:SendVoiceMessage"];
	/** IAM actions required for the SetAccountDefaultProtectConfiguration API call. */
	static readonly SET_ACCOUNT_DEFAULT_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:SetAccountDefaultProtectConfiguration",
	];
	/** IAM actions required for the SetDefaultMessageFeedbackEnabled API call. */
	static readonly SET_DEFAULT_MESSAGE_FEEDBACK_ENABLED: string[] = [
		"sms-voice:SetDefaultMessageFeedbackEnabled",
	];
	/** IAM actions required for the SetDefaultMessageType API call. */
	static readonly SET_DEFAULT_MESSAGE_TYPE: string[] = [
		"sms-voice:SetDefaultMessageType",
	];
	/** IAM actions required for the SetDefaultSenderId API call. */
	static readonly SET_DEFAULT_SENDER_ID: string[] = [
		"sms-voice:SetDefaultSenderId",
	];
	/** IAM actions required for the SetMediaMessageSpendLimitOverride API call. */
	static readonly SET_MEDIA_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:SetMediaMessageSpendLimitOverride",
	];
	/** IAM actions required for the SetNotifyMessageSpendLimitOverride API call. */
	static readonly SET_NOTIFY_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:SetNotifyMessageSpendLimitOverride",
	];
	/** IAM actions required for the SetRcsMessageSpendLimitOverride API call. */
	static readonly SET_RCS_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:SetRcsMessageSpendLimitOverride",
	];
	/** IAM actions required for the SetTextMessageSpendLimitOverride API call. */
	static readonly SET_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:SetTextMessageSpendLimitOverride",
	];
	/** IAM actions required for the SetVoiceMessageSpendLimitOverride API call. */
	static readonly SET_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE: string[] = [
		"sms-voice:SetVoiceMessageSpendLimitOverride",
	];
	/** IAM actions required for the SubmitRegistrationVersion API call. */
	static readonly SUBMIT_REGISTRATION_VERSION: string[] = [
		"sms-voice:SubmitRegistrationVersion",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["sms-voice:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["sms-voice:UntagResource"];
	/** IAM actions required for the UpdateConfigurationSetEventDestination API call. */
	static readonly UPDATE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"sms-voice:UpdateConfigurationSetEventDestination",
	];
	/** IAM actions required for the UpdateEventDestination API call. */
	static readonly UPDATE_EVENT_DESTINATION: string[] = [
		"iam:PassRole",
		"sms-voice:UpdateEventDestination",
	];
	/** IAM actions required for the UpdateNotifyConfiguration API call. */
	static readonly UPDATE_NOTIFY_CONFIGURATION: string[] = [
		"sms-voice:UpdateNotifyConfiguration",
	];
	/** IAM actions required for the UpdatePhoneNumber API call. */
	static readonly UPDATE_PHONE_NUMBER: string[] = [
		"iam:PassRole",
		"sms-voice:UpdatePhoneNumber",
	];
	/** IAM actions required for the UpdatePool API call. */
	static readonly UPDATE_POOL: string[] = [
		"iam:PassRole",
		"sms-voice:UpdatePool",
	];
	/** IAM actions required for the UpdateProtectConfiguration API call. */
	static readonly UPDATE_PROTECT_CONFIGURATION: string[] = [
		"sms-voice:UpdateProtectConfiguration",
	];
	/** IAM actions required for the UpdateProtectConfigurationCountryRuleSet API call. */
	static readonly UPDATE_PROTECT_CONFIGURATION_COUNTRY_RULE_SET: string[] = [
		"sms-voice:UpdateProtectConfigurationCountryRuleSet",
	];
	/** IAM actions required for the UpdateRcsAgent API call. */
	static readonly UPDATE_RCS_AGENT: string[] = [
		"iam:PassRole",
		"sms-voice:UpdateRcsAgent",
	];
	/** IAM actions required for the UpdateSenderId API call. */
	static readonly UPDATE_SENDER_ID: string[] = ["sms-voice:UpdateSenderId"];
	/** IAM actions required for the VerifyDestinationNumber API call. */
	static readonly VERIFY_DESTINATION_NUMBER: string[] = [
		"sms-voice:VerifyDestinationNumber",
	];
}

/**
 * Condition key constants and builders for sms-voice.
 */
export class SMSVoiceConditions {
	/** Condition keys applicable to the CreateConfigurationSet action. */
	static readonly CREATE_CONFIGURATION_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotifyConfiguration action. */
	static readonly CREATE_NOTIFY_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOptOutList action. */
	static readonly CREATE_OPT_OUT_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePool action. */
	static readonly CREATE_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProtectConfiguration action. */
	static readonly CREATE_PROTECT_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRcsAgent action. */
	static readonly CREATE_RCS_AGENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistration action. */
	static readonly CREATE_REGISTRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistrationAttachment action. */
	static readonly CREATE_REGISTRATION_ATTACHMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVerifiedDestinationNumber action. */
	static readonly CREATE_VERIFIED_DESTINATION_NUMBER_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the RequestPhoneNumber action. */
	static readonly REQUEST_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RequestSenderId action. */
	static readonly REQUEST_SENDER_ID_CONDITION_KEYS: string[] = [
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
