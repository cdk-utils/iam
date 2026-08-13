// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/chime.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the chime service.
 */
export class ChimeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "chime";

	/** [Write] chime:AcceptDelegate */
	static readonly ACCEPT_DELEGATE = "chime:AcceptDelegate";
	/** [Write] chime:ActivateUsers */
	static readonly ACTIVATE_USERS = "chime:ActivateUsers";
	/** [Write] chime:AddDomain */
	static readonly ADD_DOMAIN = "chime:AddDomain";
	/** [Write] chime:AddOrUpdateGroups */
	static readonly ADD_OR_UPDATE_GROUPS = "chime:AddOrUpdateGroups";
	/** [Write] chime:AssociateChannelFlow */
	static readonly ASSOCIATE_CHANNEL_FLOW = "chime:AssociateChannelFlow";
	/** [Write] chime:AssociatePhoneNumberWithUser */
	static readonly ASSOCIATE_PHONE_NUMBER_WITH_USER =
		"chime:AssociatePhoneNumberWithUser";
	/** [Write] chime:AssociatePhoneNumbersWithVoiceConnector */
	static readonly ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR =
		"chime:AssociatePhoneNumbersWithVoiceConnector";
	/** [Write] chime:AssociatePhoneNumbersWithVoiceConnectorGroup */
	static readonly ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR_GROUP =
		"chime:AssociatePhoneNumbersWithVoiceConnectorGroup";
	/** [Write] chime:AssociateSigninDelegateGroupsWithAccount */
	static readonly ASSOCIATE_SIGNIN_DELEGATE_GROUPS_WITH_ACCOUNT =
		"chime:AssociateSigninDelegateGroupsWithAccount";
	/** [Write] chime:AssociateVoiceConnectorConnect */
	static readonly ASSOCIATE_VOICE_CONNECTOR_CONNECT =
		"chime:AssociateVoiceConnectorConnect";
	/** [Write] chime:AuthorizeDirectory */
	static readonly AUTHORIZE_DIRECTORY = "chime:AuthorizeDirectory";
	/** [Write] chime:BatchCreateAttendee */
	static readonly BATCH_CREATE_ATTENDEE = "chime:BatchCreateAttendee";
	/** [Write] chime:BatchCreateChannelMembership */
	static readonly BATCH_CREATE_CHANNEL_MEMBERSHIP =
		"chime:BatchCreateChannelMembership";
	/** [Write] chime:BatchCreateRoomMembership */
	static readonly BATCH_CREATE_ROOM_MEMBERSHIP =
		"chime:BatchCreateRoomMembership";
	/** [Write] chime:BatchDeletePhoneNumber */
	static readonly BATCH_DELETE_PHONE_NUMBER = "chime:BatchDeletePhoneNumber";
	/** [Write] chime:BatchSuspendUser */
	static readonly BATCH_SUSPEND_USER = "chime:BatchSuspendUser";
	/** [Write] chime:BatchUnsuspendUser */
	static readonly BATCH_UNSUSPEND_USER = "chime:BatchUnsuspendUser";
	/** [Write] chime:BatchUpdateAttendeeCapabilitiesExcept */
	static readonly BATCH_UPDATE_ATTENDEE_CAPABILITIES_EXCEPT =
		"chime:BatchUpdateAttendeeCapabilitiesExcept";
	/** [Write] chime:BatchUpdatePhoneNumber */
	static readonly BATCH_UPDATE_PHONE_NUMBER = "chime:BatchUpdatePhoneNumber";
	/** [Write] chime:BatchUpdateUser */
	static readonly BATCH_UPDATE_USER = "chime:BatchUpdateUser";
	/** [Write] chime:ChannelFlowCallback */
	static readonly CHANNEL_FLOW_CALLBACK = "chime:ChannelFlowCallback";
	/** [Write] chime:Connect */
	static readonly CONNECT = "chime:Connect";
	/** [Write] chime:ConnectDirectory */
	static readonly CONNECT_DIRECTORY = "chime:ConnectDirectory";
	/** [Write] chime:CreateAccount */
	static readonly CREATE_ACCOUNT = "chime:CreateAccount";
	/** [Write] chime:CreateApiKey */
	static readonly CREATE_API_KEY = "chime:CreateApiKey";
	/** [Write] chime:CreateAppInstance */
	static readonly CREATE_APP_INSTANCE = "chime:CreateAppInstance";
	/** [Write] chime:CreateAppInstanceAdmin */
	static readonly CREATE_APP_INSTANCE_ADMIN = "chime:CreateAppInstanceAdmin";
	/** [Write] chime:CreateAppInstanceBot */
	static readonly CREATE_APP_INSTANCE_BOT = "chime:CreateAppInstanceBot";
	/** [Write] chime:CreateAppInstanceUser */
	static readonly CREATE_APP_INSTANCE_USER = "chime:CreateAppInstanceUser";
	/** [Write] chime:CreateAttendee */
	static readonly CREATE_ATTENDEE = "chime:CreateAttendee";
	/** [Write] chime:CreateBot */
	static readonly CREATE_BOT = "chime:CreateBot";
	/** [Write] chime:CreateCDRBucket */
	static readonly CREATE_CDR_BUCKET = "chime:CreateCDRBucket";
	/** [Write] chime:CreateChannel */
	static readonly CREATE_CHANNEL = "chime:CreateChannel";
	/** [Write] chime:CreateChannelBan */
	static readonly CREATE_CHANNEL_BAN = "chime:CreateChannelBan";
	/** [Write] chime:CreateChannelFlow */
	static readonly CREATE_CHANNEL_FLOW = "chime:CreateChannelFlow";
	/** [Write] chime:CreateChannelMembership */
	static readonly CREATE_CHANNEL_MEMBERSHIP = "chime:CreateChannelMembership";
	/** [Write] chime:CreateChannelModerator */
	static readonly CREATE_CHANNEL_MODERATOR = "chime:CreateChannelModerator";
	/** [Write] chime:CreateConnectAnalyticsConnector */
	static readonly CREATE_CONNECT_ANALYTICS_CONNECTOR =
		"chime:CreateConnectAnalyticsConnector";
	/** [Write] chime:CreateConnectCallTransferConnector */
	static readonly CREATE_CONNECT_CALL_TRANSFER_CONNECTOR =
		"chime:CreateConnectCallTransferConnector";
	/** [Write] chime:CreateMediaCapturePipeline */
	static readonly CREATE_MEDIA_CAPTURE_PIPELINE =
		"chime:CreateMediaCapturePipeline";
	/** [Write] chime:CreateMediaConcatenationPipeline */
	static readonly CREATE_MEDIA_CONCATENATION_PIPELINE =
		"chime:CreateMediaConcatenationPipeline";
	/** [Write] chime:CreateMediaInsightsPipeline */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE =
		"chime:CreateMediaInsightsPipeline";
	/** [Write] chime:CreateMediaInsightsPipelineConfiguration */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION =
		"chime:CreateMediaInsightsPipelineConfiguration";
	/** [Write] chime:CreateMediaLiveConnectorPipeline */
	static readonly CREATE_MEDIA_LIVE_CONNECTOR_PIPELINE =
		"chime:CreateMediaLiveConnectorPipeline";
	/** [Write] chime:CreateMediaPipelineKinesisVideoStreamPool */
	static readonly CREATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL =
		"chime:CreateMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:CreateMediaStreamPipeline */
	static readonly CREATE_MEDIA_STREAM_PIPELINE =
		"chime:CreateMediaStreamPipeline";
	/** [Write] chime:CreateMeeting */
	static readonly CREATE_MEETING = "chime:CreateMeeting";
	/** [Write] chime:CreateMeetingDialOut */
	static readonly CREATE_MEETING_DIAL_OUT = "chime:CreateMeetingDialOut";
	/** [Write] chime:CreateMeetingWithAttendees */
	static readonly CREATE_MEETING_WITH_ATTENDEES =
		"chime:CreateMeetingWithAttendees";
	/** [Write] chime:CreatePhoneNumberOrder */
	static readonly CREATE_PHONE_NUMBER_ORDER = "chime:CreatePhoneNumberOrder";
	/** [Write] chime:CreateProxySession */
	static readonly CREATE_PROXY_SESSION = "chime:CreateProxySession";
	/** [Write] chime:CreateRoom */
	static readonly CREATE_ROOM = "chime:CreateRoom";
	/** [Write] chime:CreateRoomMembership */
	static readonly CREATE_ROOM_MEMBERSHIP = "chime:CreateRoomMembership";
	/** [Write] chime:CreateSipMediaApplication */
	static readonly CREATE_SIP_MEDIA_APPLICATION =
		"chime:CreateSipMediaApplication";
	/** [Write] chime:CreateSipMediaApplicationCall */
	static readonly CREATE_SIP_MEDIA_APPLICATION_CALL =
		"chime:CreateSipMediaApplicationCall";
	/** [Write] chime:CreateSipRule */
	static readonly CREATE_SIP_RULE = "chime:CreateSipRule";
	/** [Write] chime:CreateUser */
	static readonly CREATE_USER = "chime:CreateUser";
	/** [Write] chime:CreateVoiceConnector */
	static readonly CREATE_VOICE_CONNECTOR = "chime:CreateVoiceConnector";
	/** [Write] chime:CreateVoiceConnectorGroup */
	static readonly CREATE_VOICE_CONNECTOR_GROUP =
		"chime:CreateVoiceConnectorGroup";
	/** [Write] chime:CreateVoiceProfile */
	static readonly CREATE_VOICE_PROFILE = "chime:CreateVoiceProfile";
	/** [Write] chime:CreateVoiceProfileDomain */
	static readonly CREATE_VOICE_PROFILE_DOMAIN =
		"chime:CreateVoiceProfileDomain";
	/** [Write] chime:DeleteAccount */
	static readonly DELETE_ACCOUNT = "chime:DeleteAccount";
	/** [Write] chime:DeleteAccountOpenIdConfig */
	static readonly DELETE_ACCOUNT_OPEN_ID_CONFIG =
		"chime:DeleteAccountOpenIdConfig";
	/** [Write] chime:DeleteApiKey */
	static readonly DELETE_API_KEY = "chime:DeleteApiKey";
	/** [Write] chime:DeleteAppInstance */
	static readonly DELETE_APP_INSTANCE = "chime:DeleteAppInstance";
	/** [Write] chime:DeleteAppInstanceAdmin */
	static readonly DELETE_APP_INSTANCE_ADMIN = "chime:DeleteAppInstanceAdmin";
	/** [Write] chime:DeleteAppInstanceBot */
	static readonly DELETE_APP_INSTANCE_BOT = "chime:DeleteAppInstanceBot";
	/** [Write] chime:DeleteAppInstanceStreamingConfigurations */
	static readonly DELETE_APP_INSTANCE_STREAMING_CONFIGURATIONS =
		"chime:DeleteAppInstanceStreamingConfigurations";
	/** [Write] chime:DeleteAppInstanceUser */
	static readonly DELETE_APP_INSTANCE_USER = "chime:DeleteAppInstanceUser";
	/** [Write] chime:DeleteAttendee */
	static readonly DELETE_ATTENDEE = "chime:DeleteAttendee";
	/** [Write] chime:DeleteCDRBucket */
	static readonly DELETE_CDR_BUCKET = "chime:DeleteCDRBucket";
	/** [Write] chime:DeleteChannel */
	static readonly DELETE_CHANNEL = "chime:DeleteChannel";
	/** [Write] chime:DeleteChannelBan */
	static readonly DELETE_CHANNEL_BAN = "chime:DeleteChannelBan";
	/** [Write] chime:DeleteChannelFlow */
	static readonly DELETE_CHANNEL_FLOW = "chime:DeleteChannelFlow";
	/** [Write] chime:DeleteChannelMembership */
	static readonly DELETE_CHANNEL_MEMBERSHIP = "chime:DeleteChannelMembership";
	/** [Write] chime:DeleteChannelMessage */
	static readonly DELETE_CHANNEL_MESSAGE = "chime:DeleteChannelMessage";
	/** [Write] chime:DeleteChannelModerator */
	static readonly DELETE_CHANNEL_MODERATOR = "chime:DeleteChannelModerator";
	/** [Write] chime:DeleteDelegate */
	static readonly DELETE_DELEGATE = "chime:DeleteDelegate";
	/** [Write] chime:DeleteDomain */
	static readonly DELETE_DOMAIN = "chime:DeleteDomain";
	/** [Write] chime:DeleteEventsConfiguration */
	static readonly DELETE_EVENTS_CONFIGURATION =
		"chime:DeleteEventsConfiguration";
	/** [Write] chime:DeleteGroups */
	static readonly DELETE_GROUPS = "chime:DeleteGroups";
	/** [Write] chime:DeleteMediaCapturePipeline */
	static readonly DELETE_MEDIA_CAPTURE_PIPELINE =
		"chime:DeleteMediaCapturePipeline";
	/** [Write] chime:DeleteMediaInsightsPipelineConfiguration */
	static readonly DELETE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION =
		"chime:DeleteMediaInsightsPipelineConfiguration";
	/** [Write] chime:DeleteMediaPipeline */
	static readonly DELETE_MEDIA_PIPELINE = "chime:DeleteMediaPipeline";
	/** [Write] chime:DeleteMediaPipelineKinesisVideoStreamPool */
	static readonly DELETE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL =
		"chime:DeleteMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:DeleteMeeting */
	static readonly DELETE_MEETING = "chime:DeleteMeeting";
	/** [Write] chime:DeleteMessagingStreamingConfigurations */
	static readonly DELETE_MESSAGING_STREAMING_CONFIGURATIONS =
		"chime:DeleteMessagingStreamingConfigurations";
	/** [Write] chime:DeletePhoneNumber */
	static readonly DELETE_PHONE_NUMBER = "chime:DeletePhoneNumber";
	/** [Write] chime:DeleteProxySession */
	static readonly DELETE_PROXY_SESSION = "chime:DeleteProxySession";
	/** [Write] chime:DeleteRoom */
	static readonly DELETE_ROOM = "chime:DeleteRoom";
	/** [Write] chime:DeleteRoomMembership */
	static readonly DELETE_ROOM_MEMBERSHIP = "chime:DeleteRoomMembership";
	/** [Write] chime:DeleteSipMediaApplication */
	static readonly DELETE_SIP_MEDIA_APPLICATION =
		"chime:DeleteSipMediaApplication";
	/** [Write] chime:DeleteSipRule */
	static readonly DELETE_SIP_RULE = "chime:DeleteSipRule";
	/** [Write] chime:DeleteVoiceConnector */
	static readonly DELETE_VOICE_CONNECTOR = "chime:DeleteVoiceConnector";
	/** [Write] chime:DeleteVoiceConnectorEmergencyCallingConfiguration */
	static readonly DELETE_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION =
		"chime:DeleteVoiceConnectorEmergencyCallingConfiguration";
	/** [Write] chime:DeleteVoiceConnectorExternalSystemsConfiguration */
	static readonly DELETE_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION =
		"chime:DeleteVoiceConnectorExternalSystemsConfiguration";
	/** [Write] chime:DeleteVoiceConnectorGroup */
	static readonly DELETE_VOICE_CONNECTOR_GROUP =
		"chime:DeleteVoiceConnectorGroup";
	/** [Write] chime:DeleteVoiceConnectorOrigination */
	static readonly DELETE_VOICE_CONNECTOR_ORIGINATION =
		"chime:DeleteVoiceConnectorOrigination";
	/** [Write] chime:DeleteVoiceConnectorProxy */
	static readonly DELETE_VOICE_CONNECTOR_PROXY =
		"chime:DeleteVoiceConnectorProxy";
	/** [Write] chime:DeleteVoiceConnectorStreamingConfiguration */
	static readonly DELETE_VOICE_CONNECTOR_STREAMING_CONFIGURATION =
		"chime:DeleteVoiceConnectorStreamingConfiguration";
	/** [Write] chime:DeleteVoiceConnectorTermination */
	static readonly DELETE_VOICE_CONNECTOR_TERMINATION =
		"chime:DeleteVoiceConnectorTermination";
	/** [Write] chime:DeleteVoiceConnectorTerminationCredentials */
	static readonly DELETE_VOICE_CONNECTOR_TERMINATION_CREDENTIALS =
		"chime:DeleteVoiceConnectorTerminationCredentials";
	/** [Write] chime:DeleteVoiceProfile */
	static readonly DELETE_VOICE_PROFILE = "chime:DeleteVoiceProfile";
	/** [Write] chime:DeleteVoiceProfileDomain */
	static readonly DELETE_VOICE_PROFILE_DOMAIN =
		"chime:DeleteVoiceProfileDomain";
	/** [Write] chime:DeregisterAppInstanceUserEndpoint */
	static readonly DEREGISTER_APP_INSTANCE_USER_ENDPOINT =
		"chime:DeregisterAppInstanceUserEndpoint";
	/** [Read] chime:DescribeAppInstance */
	static readonly DESCRIBE_APP_INSTANCE = "chime:DescribeAppInstance";
	/** [Read] chime:DescribeAppInstanceAdmin */
	static readonly DESCRIBE_APP_INSTANCE_ADMIN =
		"chime:DescribeAppInstanceAdmin";
	/** [Read] chime:DescribeAppInstanceBot */
	static readonly DESCRIBE_APP_INSTANCE_BOT = "chime:DescribeAppInstanceBot";
	/** [Read] chime:DescribeAppInstanceUser */
	static readonly DESCRIBE_APP_INSTANCE_USER = "chime:DescribeAppInstanceUser";
	/** [Read] chime:DescribeAppInstanceUserEndpoint */
	static readonly DESCRIBE_APP_INSTANCE_USER_ENDPOINT =
		"chime:DescribeAppInstanceUserEndpoint";
	/** [Read] chime:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "chime:DescribeChannel";
	/** [Read] chime:DescribeChannelBan */
	static readonly DESCRIBE_CHANNEL_BAN = "chime:DescribeChannelBan";
	/** [Read] chime:DescribeChannelFlow */
	static readonly DESCRIBE_CHANNEL_FLOW = "chime:DescribeChannelFlow";
	/** [Read] chime:DescribeChannelMembership */
	static readonly DESCRIBE_CHANNEL_MEMBERSHIP =
		"chime:DescribeChannelMembership";
	/** [Read] chime:DescribeChannelMembershipForAppInstanceUser */
	static readonly DESCRIBE_CHANNEL_MEMBERSHIP_FOR_APP_INSTANCE_USER =
		"chime:DescribeChannelMembershipForAppInstanceUser";
	/** [Read] chime:DescribeChannelModeratedByAppInstanceUser */
	static readonly DESCRIBE_CHANNEL_MODERATED_BY_APP_INSTANCE_USER =
		"chime:DescribeChannelModeratedByAppInstanceUser";
	/** [Read] chime:DescribeChannelModerator */
	static readonly DESCRIBE_CHANNEL_MODERATOR = "chime:DescribeChannelModerator";
	/** [Write] chime:DisassociateChannelFlow */
	static readonly DISASSOCIATE_CHANNEL_FLOW = "chime:DisassociateChannelFlow";
	/** [Write] chime:DisassociatePhoneNumberFromUser */
	static readonly DISASSOCIATE_PHONE_NUMBER_FROM_USER =
		"chime:DisassociatePhoneNumberFromUser";
	/** [Write] chime:DisassociatePhoneNumbersFromVoiceConnector */
	static readonly DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR =
		"chime:DisassociatePhoneNumbersFromVoiceConnector";
	/** [Write] chime:DisassociatePhoneNumbersFromVoiceConnectorGroup */
	static readonly DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR_GROUP =
		"chime:DisassociatePhoneNumbersFromVoiceConnectorGroup";
	/** [Write] chime:DisassociateSigninDelegateGroupsFromAccount */
	static readonly DISASSOCIATE_SIGNIN_DELEGATE_GROUPS_FROM_ACCOUNT =
		"chime:DisassociateSigninDelegateGroupsFromAccount";
	/** [Write] chime:DisassociateVoiceConnectorConnect */
	static readonly DISASSOCIATE_VOICE_CONNECTOR_CONNECT =
		"chime:DisassociateVoiceConnectorConnect";
	/** [Write] chime:DisconnectDirectory */
	static readonly DISCONNECT_DIRECTORY = "chime:DisconnectDirectory";
	/** [Read] chime:GetAccount */
	static readonly GET_ACCOUNT = "chime:GetAccount";
	/** [Read] chime:GetAccountResource */
	static readonly GET_ACCOUNT_RESOURCE = "chime:GetAccountResource";
	/** [Read] chime:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "chime:GetAccountSettings";
	/** [Read] chime:GetAccountWithOpenIdConfig */
	static readonly GET_ACCOUNT_WITH_OPEN_ID_CONFIG =
		"chime:GetAccountWithOpenIdConfig";
	/** [Read] chime:GetAppInstanceRetentionSettings */
	static readonly GET_APP_INSTANCE_RETENTION_SETTINGS =
		"chime:GetAppInstanceRetentionSettings";
	/** [Read] chime:GetAppInstanceStreamingConfigurations */
	static readonly GET_APP_INSTANCE_STREAMING_CONFIGURATIONS =
		"chime:GetAppInstanceStreamingConfigurations";
	/** [Read] chime:GetAttendee */
	static readonly GET_ATTENDEE = "chime:GetAttendee";
	/** [Read] chime:GetBot */
	static readonly GET_BOT = "chime:GetBot";
	/** [Read] chime:GetCDRBucket */
	static readonly GET_CDR_BUCKET = "chime:GetCDRBucket";
	/** [Read] chime:GetChannelMembershipPreferences */
	static readonly GET_CHANNEL_MEMBERSHIP_PREFERENCES =
		"chime:GetChannelMembershipPreferences";
	/** [Read] chime:GetChannelMessage */
	static readonly GET_CHANNEL_MESSAGE = "chime:GetChannelMessage";
	/** [Read] chime:GetChannelMessageStatus */
	static readonly GET_CHANNEL_MESSAGE_STATUS = "chime:GetChannelMessageStatus";
	/** [Read] chime:GetDomain */
	static readonly GET_DOMAIN = "chime:GetDomain";
	/** [Read] chime:GetEventsConfiguration */
	static readonly GET_EVENTS_CONFIGURATION = "chime:GetEventsConfiguration";
	/** [Read] chime:GetGlobalSettings */
	static readonly GET_GLOBAL_SETTINGS = "chime:GetGlobalSettings";
	/** [Read] chime:GetMediaCapturePipeline */
	static readonly GET_MEDIA_CAPTURE_PIPELINE = "chime:GetMediaCapturePipeline";
	/** [Read] chime:GetMediaInsightsPipelineConfiguration */
	static readonly GET_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION =
		"chime:GetMediaInsightsPipelineConfiguration";
	/** [Read] chime:GetMediaPipeline */
	static readonly GET_MEDIA_PIPELINE = "chime:GetMediaPipeline";
	/** [Read] chime:GetMediaPipelineKinesisVideoStreamPool */
	static readonly GET_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL =
		"chime:GetMediaPipelineKinesisVideoStreamPool";
	/** [Read] chime:GetMeeting */
	static readonly GET_MEETING = "chime:GetMeeting";
	/** [Read] chime:GetMeetingDetail */
	static readonly GET_MEETING_DETAIL = "chime:GetMeetingDetail";
	/** [Read] chime:GetMessagingSessionEndpoint */
	static readonly GET_MESSAGING_SESSION_ENDPOINT =
		"chime:GetMessagingSessionEndpoint";
	/** [Read] chime:GetMessagingStreamingConfigurations */
	static readonly GET_MESSAGING_STREAMING_CONFIGURATIONS =
		"chime:GetMessagingStreamingConfigurations";
	/** [Read] chime:GetPhoneNumber */
	static readonly GET_PHONE_NUMBER = "chime:GetPhoneNumber";
	/** [Read] chime:GetPhoneNumberOrder */
	static readonly GET_PHONE_NUMBER_ORDER = "chime:GetPhoneNumberOrder";
	/** [Read] chime:GetPhoneNumberSettings */
	static readonly GET_PHONE_NUMBER_SETTINGS = "chime:GetPhoneNumberSettings";
	/** [Read] chime:GetProxySession */
	static readonly GET_PROXY_SESSION = "chime:GetProxySession";
	/** [Read] chime:GetRetentionSettings */
	static readonly GET_RETENTION_SETTINGS = "chime:GetRetentionSettings";
	/** [Read] chime:GetRoom */
	static readonly GET_ROOM = "chime:GetRoom";
	/** [Read] chime:GetSipMediaApplication */
	static readonly GET_SIP_MEDIA_APPLICATION = "chime:GetSipMediaApplication";
	/** [Read] chime:GetSipMediaApplicationAlexaSkillConfiguration */
	static readonly GET_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION =
		"chime:GetSipMediaApplicationAlexaSkillConfiguration";
	/** [Read] chime:GetSipMediaApplicationLoggingConfiguration */
	static readonly GET_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION =
		"chime:GetSipMediaApplicationLoggingConfiguration";
	/** [Read] chime:GetSipRule */
	static readonly GET_SIP_RULE = "chime:GetSipRule";
	/** [Read] chime:GetSpeakerSearchTask */
	static readonly GET_SPEAKER_SEARCH_TASK = "chime:GetSpeakerSearchTask";
	/** [Read] chime:GetTelephonyLimits */
	static readonly GET_TELEPHONY_LIMITS = "chime:GetTelephonyLimits";
	/** [Read] chime:GetUser */
	static readonly GET_USER = "chime:GetUser";
	/** [Read] chime:GetUserActivityReportData */
	static readonly GET_USER_ACTIVITY_REPORT_DATA =
		"chime:GetUserActivityReportData";
	/** [Read] chime:GetUserByEmail */
	static readonly GET_USER_BY_EMAIL = "chime:GetUserByEmail";
	/** [Read] chime:GetUserSettings */
	static readonly GET_USER_SETTINGS = "chime:GetUserSettings";
	/** [Read] chime:GetVoiceConnector */
	static readonly GET_VOICE_CONNECTOR = "chime:GetVoiceConnector";
	/** [Read] chime:GetVoiceConnectorEmergencyCallingConfiguration */
	static readonly GET_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION =
		"chime:GetVoiceConnectorEmergencyCallingConfiguration";
	/** [Read] chime:GetVoiceConnectorExternalSystemsConfiguration */
	static readonly GET_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION =
		"chime:GetVoiceConnectorExternalSystemsConfiguration";
	/** [Read] chime:GetVoiceConnectorGroup */
	static readonly GET_VOICE_CONNECTOR_GROUP = "chime:GetVoiceConnectorGroup";
	/** [Read] chime:GetVoiceConnectorLoggingConfiguration */
	static readonly GET_VOICE_CONNECTOR_LOGGING_CONFIGURATION =
		"chime:GetVoiceConnectorLoggingConfiguration";
	/** [Read] chime:GetVoiceConnectorOrigination */
	static readonly GET_VOICE_CONNECTOR_ORIGINATION =
		"chime:GetVoiceConnectorOrigination";
	/** [Read] chime:GetVoiceConnectorProxy */
	static readonly GET_VOICE_CONNECTOR_PROXY = "chime:GetVoiceConnectorProxy";
	/** [Read] chime:GetVoiceConnectorStreamingConfiguration */
	static readonly GET_VOICE_CONNECTOR_STREAMING_CONFIGURATION =
		"chime:GetVoiceConnectorStreamingConfiguration";
	/** [Read] chime:GetVoiceConnectorTermination */
	static readonly GET_VOICE_CONNECTOR_TERMINATION =
		"chime:GetVoiceConnectorTermination";
	/** [Read] chime:GetVoiceConnectorTerminationHealth */
	static readonly GET_VOICE_CONNECTOR_TERMINATION_HEALTH =
		"chime:GetVoiceConnectorTerminationHealth";
	/** [Read] chime:GetVoiceProfile */
	static readonly GET_VOICE_PROFILE = "chime:GetVoiceProfile";
	/** [Read] chime:GetVoiceProfileDomain */
	static readonly GET_VOICE_PROFILE_DOMAIN = "chime:GetVoiceProfileDomain";
	/** [Read] chime:GetVoiceToneAnalysisTask */
	static readonly GET_VOICE_TONE_ANALYSIS_TASK =
		"chime:GetVoiceToneAnalysisTask";
	/** [Write] chime:InviteDelegate */
	static readonly INVITE_DELEGATE = "chime:InviteDelegate";
	/** [Write] chime:InviteUsers */
	static readonly INVITE_USERS = "chime:InviteUsers";
	/** [Write] chime:InviteUsersFromProvider */
	static readonly INVITE_USERS_FROM_PROVIDER = "chime:InviteUsersFromProvider";
	/** [List] chime:ListAccountUsageReportData */
	static readonly LIST_ACCOUNT_USAGE_REPORT_DATA =
		"chime:ListAccountUsageReportData";
	/** [List] chime:ListAccounts */
	static readonly LIST_ACCOUNTS = "chime:ListAccounts";
	/** [List] chime:ListApiKeys */
	static readonly LIST_API_KEYS = "chime:ListApiKeys";
	/** [List] chime:ListAppInstanceAdmins */
	static readonly LIST_APP_INSTANCE_ADMINS = "chime:ListAppInstanceAdmins";
	/** [List] chime:ListAppInstanceBots */
	static readonly LIST_APP_INSTANCE_BOTS = "chime:ListAppInstanceBots";
	/** [List] chime:ListAppInstanceUserEndpoints */
	static readonly LIST_APP_INSTANCE_USER_ENDPOINTS =
		"chime:ListAppInstanceUserEndpoints";
	/** [List] chime:ListAppInstanceUsers */
	static readonly LIST_APP_INSTANCE_USERS = "chime:ListAppInstanceUsers";
	/** [List] chime:ListAppInstances */
	static readonly LIST_APP_INSTANCES = "chime:ListAppInstances";
	/** [List] chime:ListAttendeeTags */
	static readonly LIST_ATTENDEE_TAGS = "chime:ListAttendeeTags";
	/** [List] chime:ListAttendees */
	static readonly LIST_ATTENDEES = "chime:ListAttendees";
	/** [List] chime:ListAvailableVoiceConnectorRegions */
	static readonly LIST_AVAILABLE_VOICE_CONNECTOR_REGIONS =
		"chime:ListAvailableVoiceConnectorRegions";
	/** [List] chime:ListBots */
	static readonly LIST_BOTS = "chime:ListBots";
	/** [List] chime:ListCDRBucket */
	static readonly LIST_CDR_BUCKET = "chime:ListCDRBucket";
	/** [List] chime:ListCallingRegions */
	static readonly LIST_CALLING_REGIONS = "chime:ListCallingRegions";
	/** [List] chime:ListChannelBans */
	static readonly LIST_CHANNEL_BANS = "chime:ListChannelBans";
	/** [List] chime:ListChannelFlows */
	static readonly LIST_CHANNEL_FLOWS = "chime:ListChannelFlows";
	/** [List] chime:ListChannelMemberships */
	static readonly LIST_CHANNEL_MEMBERSHIPS = "chime:ListChannelMemberships";
	/** [List] chime:ListChannelMembershipsForAppInstanceUser */
	static readonly LIST_CHANNEL_MEMBERSHIPS_FOR_APP_INSTANCE_USER =
		"chime:ListChannelMembershipsForAppInstanceUser";
	/** [Read] chime:ListChannelMessages */
	static readonly LIST_CHANNEL_MESSAGES = "chime:ListChannelMessages";
	/** [List] chime:ListChannelModerators */
	static readonly LIST_CHANNEL_MODERATORS = "chime:ListChannelModerators";
	/** [List] chime:ListChannels */
	static readonly LIST_CHANNELS = "chime:ListChannels";
	/** [List] chime:ListChannelsAssociatedWithChannelFlow */
	static readonly LIST_CHANNELS_ASSOCIATED_WITH_CHANNEL_FLOW =
		"chime:ListChannelsAssociatedWithChannelFlow";
	/** [List] chime:ListChannelsModeratedByAppInstanceUser */
	static readonly LIST_CHANNELS_MODERATED_BY_APP_INSTANCE_USER =
		"chime:ListChannelsModeratedByAppInstanceUser";
	/** [List] chime:ListDelegates */
	static readonly LIST_DELEGATES = "chime:ListDelegates";
	/** [List] chime:ListDirectories */
	static readonly LIST_DIRECTORIES = "chime:ListDirectories";
	/** [List] chime:ListDomains */
	static readonly LIST_DOMAINS = "chime:ListDomains";
	/** [List] chime:ListGroups */
	static readonly LIST_GROUPS = "chime:ListGroups";
	/** [List] chime:ListMediaCapturePipelines */
	static readonly LIST_MEDIA_CAPTURE_PIPELINES =
		"chime:ListMediaCapturePipelines";
	/** [List] chime:ListMediaInsightsPipelineConfigurations */
	static readonly LIST_MEDIA_INSIGHTS_PIPELINE_CONFIGURATIONS =
		"chime:ListMediaInsightsPipelineConfigurations";
	/** [List] chime:ListMediaPipelineKinesisVideoStreamPools */
	static readonly LIST_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOLS =
		"chime:ListMediaPipelineKinesisVideoStreamPools";
	/** [List] chime:ListMediaPipelines */
	static readonly LIST_MEDIA_PIPELINES = "chime:ListMediaPipelines";
	/** [List] chime:ListMeetingEvents */
	static readonly LIST_MEETING_EVENTS = "chime:ListMeetingEvents";
	/** [List] chime:ListMeetingTags */
	static readonly LIST_MEETING_TAGS = "chime:ListMeetingTags";
	/** [List] chime:ListMeetings */
	static readonly LIST_MEETINGS = "chime:ListMeetings";
	/** [List] chime:ListMeetingsReportData */
	static readonly LIST_MEETINGS_REPORT_DATA = "chime:ListMeetingsReportData";
	/** [List] chime:ListPhoneNumberOrders */
	static readonly LIST_PHONE_NUMBER_ORDERS = "chime:ListPhoneNumberOrders";
	/** [List] chime:ListPhoneNumbers */
	static readonly LIST_PHONE_NUMBERS = "chime:ListPhoneNumbers";
	/** [List] chime:ListProxySessions */
	static readonly LIST_PROXY_SESSIONS = "chime:ListProxySessions";
	/** [List] chime:ListRoomMemberships */
	static readonly LIST_ROOM_MEMBERSHIPS = "chime:ListRoomMemberships";
	/** [List] chime:ListRooms */
	static readonly LIST_ROOMS = "chime:ListRooms";
	/** [List] chime:ListSipMediaApplications */
	static readonly LIST_SIP_MEDIA_APPLICATIONS =
		"chime:ListSipMediaApplications";
	/** [List] chime:ListSipRules */
	static readonly LIST_SIP_RULES = "chime:ListSipRules";
	/** [List] chime:ListSubChannels */
	static readonly LIST_SUB_CHANNELS = "chime:ListSubChannels";
	/** [List] chime:ListSupportedPhoneNumberCountries */
	static readonly LIST_SUPPORTED_PHONE_NUMBER_COUNTRIES =
		"chime:ListSupportedPhoneNumberCountries";
	/** [Read] chime:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "chime:ListTagsForResource";
	/** [List] chime:ListUsers */
	static readonly LIST_USERS = "chime:ListUsers";
	/** [List] chime:ListVoiceConnectorGroups */
	static readonly LIST_VOICE_CONNECTOR_GROUPS =
		"chime:ListVoiceConnectorGroups";
	/** [List] chime:ListVoiceConnectorTerminationCredentials */
	static readonly LIST_VOICE_CONNECTOR_TERMINATION_CREDENTIALS =
		"chime:ListVoiceConnectorTerminationCredentials";
	/** [List] chime:ListVoiceConnectors */
	static readonly LIST_VOICE_CONNECTORS = "chime:ListVoiceConnectors";
	/** [List] chime:ListVoiceProfileDomains */
	static readonly LIST_VOICE_PROFILE_DOMAINS = "chime:ListVoiceProfileDomains";
	/** [List] chime:ListVoiceProfiles */
	static readonly LIST_VOICE_PROFILES = "chime:ListVoiceProfiles";
	/** [Write] chime:LogoutUser */
	static readonly LOGOUT_USER = "chime:LogoutUser";
	/** [Write] chime:PutAppInstanceRetentionSettings */
	static readonly PUT_APP_INSTANCE_RETENTION_SETTINGS =
		"chime:PutAppInstanceRetentionSettings";
	/** [Write] chime:PutAppInstanceStreamingConfigurations */
	static readonly PUT_APP_INSTANCE_STREAMING_CONFIGURATIONS =
		"chime:PutAppInstanceStreamingConfigurations";
	/** [Write] chime:PutAppInstanceUserExpirationSettings */
	static readonly PUT_APP_INSTANCE_USER_EXPIRATION_SETTINGS =
		"chime:PutAppInstanceUserExpirationSettings";
	/** [Write] chime:PutChannelExpirationSettings */
	static readonly PUT_CHANNEL_EXPIRATION_SETTINGS =
		"chime:PutChannelExpirationSettings";
	/** [Write] chime:PutChannelMembershipPreferences */
	static readonly PUT_CHANNEL_MEMBERSHIP_PREFERENCES =
		"chime:PutChannelMembershipPreferences";
	/** [Write] chime:PutEventsConfiguration */
	static readonly PUT_EVENTS_CONFIGURATION = "chime:PutEventsConfiguration";
	/** [Write] chime:PutMessagingStreamingConfigurations */
	static readonly PUT_MESSAGING_STREAMING_CONFIGURATIONS =
		"chime:PutMessagingStreamingConfigurations";
	/** [Write] chime:PutRetentionSettings */
	static readonly PUT_RETENTION_SETTINGS = "chime:PutRetentionSettings";
	/** [Write] chime:PutSipMediaApplicationAlexaSkillConfiguration */
	static readonly PUT_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION =
		"chime:PutSipMediaApplicationAlexaSkillConfiguration";
	/** [Write] chime:PutSipMediaApplicationLoggingConfiguration */
	static readonly PUT_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION =
		"chime:PutSipMediaApplicationLoggingConfiguration";
	/** [Write] chime:PutVoiceConnectorEmergencyCallingConfiguration */
	static readonly PUT_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION =
		"chime:PutVoiceConnectorEmergencyCallingConfiguration";
	/** [Write] chime:PutVoiceConnectorExternalSystemsConfiguration */
	static readonly PUT_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION =
		"chime:PutVoiceConnectorExternalSystemsConfiguration";
	/** [Write] chime:PutVoiceConnectorLoggingConfiguration */
	static readonly PUT_VOICE_CONNECTOR_LOGGING_CONFIGURATION =
		"chime:PutVoiceConnectorLoggingConfiguration";
	/** [Write] chime:PutVoiceConnectorOrigination */
	static readonly PUT_VOICE_CONNECTOR_ORIGINATION =
		"chime:PutVoiceConnectorOrigination";
	/** [Write] chime:PutVoiceConnectorProxy */
	static readonly PUT_VOICE_CONNECTOR_PROXY = "chime:PutVoiceConnectorProxy";
	/** [Write] chime:PutVoiceConnectorStreamingConfiguration */
	static readonly PUT_VOICE_CONNECTOR_STREAMING_CONFIGURATION =
		"chime:PutVoiceConnectorStreamingConfiguration";
	/** [Write] chime:PutVoiceConnectorTermination */
	static readonly PUT_VOICE_CONNECTOR_TERMINATION =
		"chime:PutVoiceConnectorTermination";
	/** [Write] chime:PutVoiceConnectorTerminationCredentials */
	static readonly PUT_VOICE_CONNECTOR_TERMINATION_CREDENTIALS =
		"chime:PutVoiceConnectorTerminationCredentials";
	/** [Write] chime:RedactChannelMessage */
	static readonly REDACT_CHANNEL_MESSAGE = "chime:RedactChannelMessage";
	/** [Write] chime:RedactConversationMessage */
	static readonly REDACT_CONVERSATION_MESSAGE =
		"chime:RedactConversationMessage";
	/** [Write] chime:RedactRoomMessage */
	static readonly REDACT_ROOM_MESSAGE = "chime:RedactRoomMessage";
	/** [Write] chime:RegenerateSecurityToken */
	static readonly REGENERATE_SECURITY_TOKEN = "chime:RegenerateSecurityToken";
	/** [Write] chime:RegisterAppInstanceUserEndpoint */
	static readonly REGISTER_APP_INSTANCE_USER_ENDPOINT =
		"chime:RegisterAppInstanceUserEndpoint";
	/** [Write] chime:RenameAccount */
	static readonly RENAME_ACCOUNT = "chime:RenameAccount";
	/** [Write] chime:RenewDelegate */
	static readonly RENEW_DELEGATE = "chime:RenewDelegate";
	/** [Write] chime:ResetAccountResource */
	static readonly RESET_ACCOUNT_RESOURCE = "chime:ResetAccountResource";
	/** [Write] chime:ResetPersonalPIN */
	static readonly RESET_PERSONAL_PIN = "chime:ResetPersonalPIN";
	/** [Write] chime:RestorePhoneNumber */
	static readonly RESTORE_PHONE_NUMBER = "chime:RestorePhoneNumber";
	/** [Read] chime:RetrieveDataExports */
	static readonly RETRIEVE_DATA_EXPORTS = "chime:RetrieveDataExports";
	/** [Read] chime:SearchAvailablePhoneNumbers */
	static readonly SEARCH_AVAILABLE_PHONE_NUMBERS =
		"chime:SearchAvailablePhoneNumbers";
	/** [List] chime:SearchChannels */
	static readonly SEARCH_CHANNELS = "chime:SearchChannels";
	/** [Write] chime:SendChannelMessage */
	static readonly SEND_CHANNEL_MESSAGE = "chime:SendChannelMessage";
	/** [Write] chime:StartDataExport */
	static readonly START_DATA_EXPORT = "chime:StartDataExport";
	/** [Write] chime:StartMeetingTranscription */
	static readonly START_MEETING_TRANSCRIPTION =
		"chime:StartMeetingTranscription";
	/** [Write] chime:StartSpeakerSearchTask */
	static readonly START_SPEAKER_SEARCH_TASK = "chime:StartSpeakerSearchTask";
	/** [Write] chime:StartVoiceToneAnalysisTask */
	static readonly START_VOICE_TONE_ANALYSIS_TASK =
		"chime:StartVoiceToneAnalysisTask";
	/** [Write] chime:StopMeetingTranscription */
	static readonly STOP_MEETING_TRANSCRIPTION = "chime:StopMeetingTranscription";
	/** [Write] chime:StopSpeakerSearchTask */
	static readonly STOP_SPEAKER_SEARCH_TASK = "chime:StopSpeakerSearchTask";
	/** [Write] chime:StopVoiceToneAnalysisTask */
	static readonly STOP_VOICE_TONE_ANALYSIS_TASK =
		"chime:StopVoiceToneAnalysisTask";
	/** [Write] chime:SubmitSupportRequest */
	static readonly SUBMIT_SUPPORT_REQUEST = "chime:SubmitSupportRequest";
	/** [Write] chime:SuspendUsers */
	static readonly SUSPEND_USERS = "chime:SuspendUsers";
	/** [Tagging] chime:TagAttendee */
	static readonly TAG_ATTENDEE = "chime:TagAttendee";
	/** [Tagging] chime:TagMeeting */
	static readonly TAG_MEETING = "chime:TagMeeting";
	/** [Tagging] chime:TagResource */
	static readonly TAG_RESOURCE = "chime:TagResource";
	/** [Write] chime:UnauthorizeDirectory */
	static readonly UNAUTHORIZE_DIRECTORY = "chime:UnauthorizeDirectory";
	/** [Tagging] chime:UntagAttendee */
	static readonly UNTAG_ATTENDEE = "chime:UntagAttendee";
	/** [Tagging] chime:UntagMeeting */
	static readonly UNTAG_MEETING = "chime:UntagMeeting";
	/** [Tagging] chime:UntagResource */
	static readonly UNTAG_RESOURCE = "chime:UntagResource";
	/** [Write] chime:UpdateAccount */
	static readonly UPDATE_ACCOUNT = "chime:UpdateAccount";
	/** [Write] chime:UpdateAccountOpenIdConfig */
	static readonly UPDATE_ACCOUNT_OPEN_ID_CONFIG =
		"chime:UpdateAccountOpenIdConfig";
	/** [Write] chime:UpdateAccountResource */
	static readonly UPDATE_ACCOUNT_RESOURCE = "chime:UpdateAccountResource";
	/** [Write] chime:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "chime:UpdateAccountSettings";
	/** [Write] chime:UpdateAppInstance */
	static readonly UPDATE_APP_INSTANCE = "chime:UpdateAppInstance";
	/** [Write] chime:UpdateAppInstanceBot */
	static readonly UPDATE_APP_INSTANCE_BOT = "chime:UpdateAppInstanceBot";
	/** [Write] chime:UpdateAppInstanceUser */
	static readonly UPDATE_APP_INSTANCE_USER = "chime:UpdateAppInstanceUser";
	/** [Write] chime:UpdateAppInstanceUserEndpoint */
	static readonly UPDATE_APP_INSTANCE_USER_ENDPOINT =
		"chime:UpdateAppInstanceUserEndpoint";
	/** [Write] chime:UpdateAttendeeCapabilities */
	static readonly UPDATE_ATTENDEE_CAPABILITIES =
		"chime:UpdateAttendeeCapabilities";
	/** [Write] chime:UpdateBot */
	static readonly UPDATE_BOT = "chime:UpdateBot";
	/** [Write] chime:UpdateCDRSettings */
	static readonly UPDATE_CDR_SETTINGS = "chime:UpdateCDRSettings";
	/** [Write] chime:UpdateChannel */
	static readonly UPDATE_CHANNEL = "chime:UpdateChannel";
	/** [Write] chime:UpdateChannelFlow */
	static readonly UPDATE_CHANNEL_FLOW = "chime:UpdateChannelFlow";
	/** [Write] chime:UpdateChannelMessage */
	static readonly UPDATE_CHANNEL_MESSAGE = "chime:UpdateChannelMessage";
	/** [Write] chime:UpdateChannelReadMarker */
	static readonly UPDATE_CHANNEL_READ_MARKER = "chime:UpdateChannelReadMarker";
	/** [Write] chime:UpdateGlobalSettings */
	static readonly UPDATE_GLOBAL_SETTINGS = "chime:UpdateGlobalSettings";
	/** [Write] chime:UpdateMediaInsightsPipelineConfiguration */
	static readonly UPDATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION =
		"chime:UpdateMediaInsightsPipelineConfiguration";
	/** [Write] chime:UpdateMediaInsightsPipelineStatus */
	static readonly UPDATE_MEDIA_INSIGHTS_PIPELINE_STATUS =
		"chime:UpdateMediaInsightsPipelineStatus";
	/** [Write] chime:UpdateMediaPipelineKinesisVideoStreamPool */
	static readonly UPDATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL =
		"chime:UpdateMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:UpdatePhoneNumber */
	static readonly UPDATE_PHONE_NUMBER = "chime:UpdatePhoneNumber";
	/** [Write] chime:UpdatePhoneNumberSettings */
	static readonly UPDATE_PHONE_NUMBER_SETTINGS =
		"chime:UpdatePhoneNumberSettings";
	/** [Write] chime:UpdateProxySession */
	static readonly UPDATE_PROXY_SESSION = "chime:UpdateProxySession";
	/** [Write] chime:UpdateRoom */
	static readonly UPDATE_ROOM = "chime:UpdateRoom";
	/** [Write] chime:UpdateRoomMembership */
	static readonly UPDATE_ROOM_MEMBERSHIP = "chime:UpdateRoomMembership";
	/** [Write] chime:UpdateSipMediaApplication */
	static readonly UPDATE_SIP_MEDIA_APPLICATION =
		"chime:UpdateSipMediaApplication";
	/** [Write] chime:UpdateSipMediaApplicationCall */
	static readonly UPDATE_SIP_MEDIA_APPLICATION_CALL =
		"chime:UpdateSipMediaApplicationCall";
	/** [Write] chime:UpdateSipRule */
	static readonly UPDATE_SIP_RULE = "chime:UpdateSipRule";
	/** [Write] chime:UpdateSupportedLicenses */
	static readonly UPDATE_SUPPORTED_LICENSES = "chime:UpdateSupportedLicenses";
	/** [Write] chime:UpdateUser */
	static readonly UPDATE_USER = "chime:UpdateUser";
	/** [Write] chime:UpdateUserLicenses */
	static readonly UPDATE_USER_LICENSES = "chime:UpdateUserLicenses";
	/** [Write] chime:UpdateUserSettings */
	static readonly UPDATE_USER_SETTINGS = "chime:UpdateUserSettings";
	/** [Write] chime:UpdateVoiceConnector */
	static readonly UPDATE_VOICE_CONNECTOR = "chime:UpdateVoiceConnector";
	/** [Write] chime:UpdateVoiceConnectorGroup */
	static readonly UPDATE_VOICE_CONNECTOR_GROUP =
		"chime:UpdateVoiceConnectorGroup";
	/** [Write] chime:UpdateVoiceProfile */
	static readonly UPDATE_VOICE_PROFILE = "chime:UpdateVoiceProfile";
	/** [Write] chime:UpdateVoiceProfileDomain */
	static readonly UPDATE_VOICE_PROFILE_DOMAIN =
		"chime:UpdateVoiceProfileDomain";
	/** [Read] chime:ValidateAccountResource */
	static readonly VALIDATE_ACCOUNT_RESOURCE = "chime:ValidateAccountResource";
	/** [Read] chime:ValidateE911Address */
	static readonly VALIDATE_E911_ADDRESS = "chime:ValidateE911Address";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ChimeActions.DESCRIBE_APP_INSTANCE,
		ChimeActions.DESCRIBE_APP_INSTANCE_ADMIN,
		ChimeActions.DESCRIBE_APP_INSTANCE_BOT,
		ChimeActions.DESCRIBE_APP_INSTANCE_USER,
		ChimeActions.DESCRIBE_APP_INSTANCE_USER_ENDPOINT,
		ChimeActions.DESCRIBE_CHANNEL,
		ChimeActions.DESCRIBE_CHANNEL_BAN,
		ChimeActions.DESCRIBE_CHANNEL_FLOW,
		ChimeActions.DESCRIBE_CHANNEL_MEMBERSHIP,
		ChimeActions.DESCRIBE_CHANNEL_MEMBERSHIP_FOR_APP_INSTANCE_USER,
		ChimeActions.DESCRIBE_CHANNEL_MODERATED_BY_APP_INSTANCE_USER,
		ChimeActions.DESCRIBE_CHANNEL_MODERATOR,
		ChimeActions.GET_ACCOUNT,
		ChimeActions.GET_ACCOUNT_RESOURCE,
		ChimeActions.GET_ACCOUNT_SETTINGS,
		ChimeActions.GET_ACCOUNT_WITH_OPEN_ID_CONFIG,
		ChimeActions.GET_APP_INSTANCE_RETENTION_SETTINGS,
		ChimeActions.GET_APP_INSTANCE_STREAMING_CONFIGURATIONS,
		ChimeActions.GET_ATTENDEE,
		ChimeActions.GET_BOT,
		ChimeActions.GET_CDR_BUCKET,
		ChimeActions.GET_CHANNEL_MEMBERSHIP_PREFERENCES,
		ChimeActions.GET_CHANNEL_MESSAGE,
		ChimeActions.GET_CHANNEL_MESSAGE_STATUS,
		ChimeActions.GET_DOMAIN,
		ChimeActions.GET_EVENTS_CONFIGURATION,
		ChimeActions.GET_GLOBAL_SETTINGS,
		ChimeActions.GET_MEDIA_CAPTURE_PIPELINE,
		ChimeActions.GET_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION,
		ChimeActions.GET_MEDIA_PIPELINE,
		ChimeActions.GET_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL,
		ChimeActions.GET_MEETING,
		ChimeActions.GET_MEETING_DETAIL,
		ChimeActions.GET_MESSAGING_SESSION_ENDPOINT,
		ChimeActions.GET_MESSAGING_STREAMING_CONFIGURATIONS,
		ChimeActions.GET_PHONE_NUMBER,
		ChimeActions.GET_PHONE_NUMBER_ORDER,
		ChimeActions.GET_PHONE_NUMBER_SETTINGS,
		ChimeActions.GET_PROXY_SESSION,
		ChimeActions.GET_RETENTION_SETTINGS,
		ChimeActions.GET_ROOM,
		ChimeActions.GET_SIP_MEDIA_APPLICATION,
		ChimeActions.GET_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION,
		ChimeActions.GET_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION,
		ChimeActions.GET_SIP_RULE,
		ChimeActions.GET_SPEAKER_SEARCH_TASK,
		ChimeActions.GET_TELEPHONY_LIMITS,
		ChimeActions.GET_USER,
		ChimeActions.GET_USER_ACTIVITY_REPORT_DATA,
		ChimeActions.GET_USER_BY_EMAIL,
		ChimeActions.GET_USER_SETTINGS,
		ChimeActions.GET_VOICE_CONNECTOR,
		ChimeActions.GET_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION,
		ChimeActions.GET_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION,
		ChimeActions.GET_VOICE_CONNECTOR_GROUP,
		ChimeActions.GET_VOICE_CONNECTOR_LOGGING_CONFIGURATION,
		ChimeActions.GET_VOICE_CONNECTOR_ORIGINATION,
		ChimeActions.GET_VOICE_CONNECTOR_PROXY,
		ChimeActions.GET_VOICE_CONNECTOR_STREAMING_CONFIGURATION,
		ChimeActions.GET_VOICE_CONNECTOR_TERMINATION,
		ChimeActions.GET_VOICE_CONNECTOR_TERMINATION_HEALTH,
		ChimeActions.GET_VOICE_PROFILE,
		ChimeActions.GET_VOICE_PROFILE_DOMAIN,
		ChimeActions.GET_VOICE_TONE_ANALYSIS_TASK,
		ChimeActions.LIST_CHANNEL_MESSAGES,
		ChimeActions.LIST_TAGS_FOR_RESOURCE,
		ChimeActions.RETRIEVE_DATA_EXPORTS,
		ChimeActions.SEARCH_AVAILABLE_PHONE_NUMBERS,
		ChimeActions.VALIDATE_ACCOUNT_RESOURCE,
		ChimeActions.VALIDATE_E911_ADDRESS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ChimeActions.ACCEPT_DELEGATE,
		ChimeActions.ACTIVATE_USERS,
		ChimeActions.ADD_DOMAIN,
		ChimeActions.ADD_OR_UPDATE_GROUPS,
		ChimeActions.ASSOCIATE_CHANNEL_FLOW,
		ChimeActions.ASSOCIATE_PHONE_NUMBER_WITH_USER,
		ChimeActions.ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR,
		ChimeActions.ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR_GROUP,
		ChimeActions.ASSOCIATE_SIGNIN_DELEGATE_GROUPS_WITH_ACCOUNT,
		ChimeActions.ASSOCIATE_VOICE_CONNECTOR_CONNECT,
		ChimeActions.AUTHORIZE_DIRECTORY,
		ChimeActions.BATCH_CREATE_ATTENDEE,
		ChimeActions.BATCH_CREATE_CHANNEL_MEMBERSHIP,
		ChimeActions.BATCH_CREATE_ROOM_MEMBERSHIP,
		ChimeActions.BATCH_DELETE_PHONE_NUMBER,
		ChimeActions.BATCH_SUSPEND_USER,
		ChimeActions.BATCH_UNSUSPEND_USER,
		ChimeActions.BATCH_UPDATE_ATTENDEE_CAPABILITIES_EXCEPT,
		ChimeActions.BATCH_UPDATE_PHONE_NUMBER,
		ChimeActions.BATCH_UPDATE_USER,
		ChimeActions.CHANNEL_FLOW_CALLBACK,
		ChimeActions.CONNECT,
		ChimeActions.CONNECT_DIRECTORY,
		ChimeActions.CREATE_ACCOUNT,
		ChimeActions.CREATE_API_KEY,
		ChimeActions.CREATE_APP_INSTANCE,
		ChimeActions.CREATE_APP_INSTANCE_ADMIN,
		ChimeActions.CREATE_APP_INSTANCE_BOT,
		ChimeActions.CREATE_APP_INSTANCE_USER,
		ChimeActions.CREATE_ATTENDEE,
		ChimeActions.CREATE_BOT,
		ChimeActions.CREATE_CDR_BUCKET,
		ChimeActions.CREATE_CHANNEL,
		ChimeActions.CREATE_CHANNEL_BAN,
		ChimeActions.CREATE_CHANNEL_FLOW,
		ChimeActions.CREATE_CHANNEL_MEMBERSHIP,
		ChimeActions.CREATE_CHANNEL_MODERATOR,
		ChimeActions.CREATE_CONNECT_ANALYTICS_CONNECTOR,
		ChimeActions.CREATE_CONNECT_CALL_TRANSFER_CONNECTOR,
		ChimeActions.CREATE_MEDIA_CAPTURE_PIPELINE,
		ChimeActions.CREATE_MEDIA_CONCATENATION_PIPELINE,
		ChimeActions.CREATE_MEDIA_INSIGHTS_PIPELINE,
		ChimeActions.CREATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION,
		ChimeActions.CREATE_MEDIA_LIVE_CONNECTOR_PIPELINE,
		ChimeActions.CREATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL,
		ChimeActions.CREATE_MEDIA_STREAM_PIPELINE,
		ChimeActions.CREATE_MEETING,
		ChimeActions.CREATE_MEETING_DIAL_OUT,
		ChimeActions.CREATE_MEETING_WITH_ATTENDEES,
		ChimeActions.CREATE_PHONE_NUMBER_ORDER,
		ChimeActions.CREATE_PROXY_SESSION,
		ChimeActions.CREATE_ROOM,
		ChimeActions.CREATE_ROOM_MEMBERSHIP,
		ChimeActions.CREATE_SIP_MEDIA_APPLICATION,
		ChimeActions.CREATE_SIP_MEDIA_APPLICATION_CALL,
		ChimeActions.CREATE_SIP_RULE,
		ChimeActions.CREATE_USER,
		ChimeActions.CREATE_VOICE_CONNECTOR,
		ChimeActions.CREATE_VOICE_CONNECTOR_GROUP,
		ChimeActions.CREATE_VOICE_PROFILE,
		ChimeActions.CREATE_VOICE_PROFILE_DOMAIN,
		ChimeActions.DELETE_ACCOUNT,
		ChimeActions.DELETE_ACCOUNT_OPEN_ID_CONFIG,
		ChimeActions.DELETE_API_KEY,
		ChimeActions.DELETE_APP_INSTANCE,
		ChimeActions.DELETE_APP_INSTANCE_ADMIN,
		ChimeActions.DELETE_APP_INSTANCE_BOT,
		ChimeActions.DELETE_APP_INSTANCE_STREAMING_CONFIGURATIONS,
		ChimeActions.DELETE_APP_INSTANCE_USER,
		ChimeActions.DELETE_ATTENDEE,
		ChimeActions.DELETE_CDR_BUCKET,
		ChimeActions.DELETE_CHANNEL,
		ChimeActions.DELETE_CHANNEL_BAN,
		ChimeActions.DELETE_CHANNEL_FLOW,
		ChimeActions.DELETE_CHANNEL_MEMBERSHIP,
		ChimeActions.DELETE_CHANNEL_MESSAGE,
		ChimeActions.DELETE_CHANNEL_MODERATOR,
		ChimeActions.DELETE_DELEGATE,
		ChimeActions.DELETE_DOMAIN,
		ChimeActions.DELETE_EVENTS_CONFIGURATION,
		ChimeActions.DELETE_GROUPS,
		ChimeActions.DELETE_MEDIA_CAPTURE_PIPELINE,
		ChimeActions.DELETE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION,
		ChimeActions.DELETE_MEDIA_PIPELINE,
		ChimeActions.DELETE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL,
		ChimeActions.DELETE_MEETING,
		ChimeActions.DELETE_MESSAGING_STREAMING_CONFIGURATIONS,
		ChimeActions.DELETE_PHONE_NUMBER,
		ChimeActions.DELETE_PROXY_SESSION,
		ChimeActions.DELETE_ROOM,
		ChimeActions.DELETE_ROOM_MEMBERSHIP,
		ChimeActions.DELETE_SIP_MEDIA_APPLICATION,
		ChimeActions.DELETE_SIP_RULE,
		ChimeActions.DELETE_VOICE_CONNECTOR,
		ChimeActions.DELETE_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION,
		ChimeActions.DELETE_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION,
		ChimeActions.DELETE_VOICE_CONNECTOR_GROUP,
		ChimeActions.DELETE_VOICE_CONNECTOR_ORIGINATION,
		ChimeActions.DELETE_VOICE_CONNECTOR_PROXY,
		ChimeActions.DELETE_VOICE_CONNECTOR_STREAMING_CONFIGURATION,
		ChimeActions.DELETE_VOICE_CONNECTOR_TERMINATION,
		ChimeActions.DELETE_VOICE_CONNECTOR_TERMINATION_CREDENTIALS,
		ChimeActions.DELETE_VOICE_PROFILE,
		ChimeActions.DELETE_VOICE_PROFILE_DOMAIN,
		ChimeActions.DEREGISTER_APP_INSTANCE_USER_ENDPOINT,
		ChimeActions.DISASSOCIATE_CHANNEL_FLOW,
		ChimeActions.DISASSOCIATE_PHONE_NUMBER_FROM_USER,
		ChimeActions.DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR,
		ChimeActions.DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR_GROUP,
		ChimeActions.DISASSOCIATE_SIGNIN_DELEGATE_GROUPS_FROM_ACCOUNT,
		ChimeActions.DISASSOCIATE_VOICE_CONNECTOR_CONNECT,
		ChimeActions.DISCONNECT_DIRECTORY,
		ChimeActions.INVITE_DELEGATE,
		ChimeActions.INVITE_USERS,
		ChimeActions.INVITE_USERS_FROM_PROVIDER,
		ChimeActions.LOGOUT_USER,
		ChimeActions.PUT_APP_INSTANCE_RETENTION_SETTINGS,
		ChimeActions.PUT_APP_INSTANCE_STREAMING_CONFIGURATIONS,
		ChimeActions.PUT_APP_INSTANCE_USER_EXPIRATION_SETTINGS,
		ChimeActions.PUT_CHANNEL_EXPIRATION_SETTINGS,
		ChimeActions.PUT_CHANNEL_MEMBERSHIP_PREFERENCES,
		ChimeActions.PUT_EVENTS_CONFIGURATION,
		ChimeActions.PUT_MESSAGING_STREAMING_CONFIGURATIONS,
		ChimeActions.PUT_RETENTION_SETTINGS,
		ChimeActions.PUT_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION,
		ChimeActions.PUT_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION,
		ChimeActions.PUT_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION,
		ChimeActions.PUT_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION,
		ChimeActions.PUT_VOICE_CONNECTOR_LOGGING_CONFIGURATION,
		ChimeActions.PUT_VOICE_CONNECTOR_ORIGINATION,
		ChimeActions.PUT_VOICE_CONNECTOR_PROXY,
		ChimeActions.PUT_VOICE_CONNECTOR_STREAMING_CONFIGURATION,
		ChimeActions.PUT_VOICE_CONNECTOR_TERMINATION,
		ChimeActions.PUT_VOICE_CONNECTOR_TERMINATION_CREDENTIALS,
		ChimeActions.REDACT_CHANNEL_MESSAGE,
		ChimeActions.REDACT_CONVERSATION_MESSAGE,
		ChimeActions.REDACT_ROOM_MESSAGE,
		ChimeActions.REGENERATE_SECURITY_TOKEN,
		ChimeActions.REGISTER_APP_INSTANCE_USER_ENDPOINT,
		ChimeActions.RENAME_ACCOUNT,
		ChimeActions.RENEW_DELEGATE,
		ChimeActions.RESET_ACCOUNT_RESOURCE,
		ChimeActions.RESET_PERSONAL_PIN,
		ChimeActions.RESTORE_PHONE_NUMBER,
		ChimeActions.SEND_CHANNEL_MESSAGE,
		ChimeActions.START_DATA_EXPORT,
		ChimeActions.START_MEETING_TRANSCRIPTION,
		ChimeActions.START_SPEAKER_SEARCH_TASK,
		ChimeActions.START_VOICE_TONE_ANALYSIS_TASK,
		ChimeActions.STOP_MEETING_TRANSCRIPTION,
		ChimeActions.STOP_SPEAKER_SEARCH_TASK,
		ChimeActions.STOP_VOICE_TONE_ANALYSIS_TASK,
		ChimeActions.SUBMIT_SUPPORT_REQUEST,
		ChimeActions.SUSPEND_USERS,
		ChimeActions.UNAUTHORIZE_DIRECTORY,
		ChimeActions.UPDATE_ACCOUNT,
		ChimeActions.UPDATE_ACCOUNT_OPEN_ID_CONFIG,
		ChimeActions.UPDATE_ACCOUNT_RESOURCE,
		ChimeActions.UPDATE_ACCOUNT_SETTINGS,
		ChimeActions.UPDATE_APP_INSTANCE,
		ChimeActions.UPDATE_APP_INSTANCE_BOT,
		ChimeActions.UPDATE_APP_INSTANCE_USER,
		ChimeActions.UPDATE_APP_INSTANCE_USER_ENDPOINT,
		ChimeActions.UPDATE_ATTENDEE_CAPABILITIES,
		ChimeActions.UPDATE_BOT,
		ChimeActions.UPDATE_CDR_SETTINGS,
		ChimeActions.UPDATE_CHANNEL,
		ChimeActions.UPDATE_CHANNEL_FLOW,
		ChimeActions.UPDATE_CHANNEL_MESSAGE,
		ChimeActions.UPDATE_CHANNEL_READ_MARKER,
		ChimeActions.UPDATE_GLOBAL_SETTINGS,
		ChimeActions.UPDATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION,
		ChimeActions.UPDATE_MEDIA_INSIGHTS_PIPELINE_STATUS,
		ChimeActions.UPDATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL,
		ChimeActions.UPDATE_PHONE_NUMBER,
		ChimeActions.UPDATE_PHONE_NUMBER_SETTINGS,
		ChimeActions.UPDATE_PROXY_SESSION,
		ChimeActions.UPDATE_ROOM,
		ChimeActions.UPDATE_ROOM_MEMBERSHIP,
		ChimeActions.UPDATE_SIP_MEDIA_APPLICATION,
		ChimeActions.UPDATE_SIP_MEDIA_APPLICATION_CALL,
		ChimeActions.UPDATE_SIP_RULE,
		ChimeActions.UPDATE_SUPPORTED_LICENSES,
		ChimeActions.UPDATE_USER,
		ChimeActions.UPDATE_USER_LICENSES,
		ChimeActions.UPDATE_USER_SETTINGS,
		ChimeActions.UPDATE_VOICE_CONNECTOR,
		ChimeActions.UPDATE_VOICE_CONNECTOR_GROUP,
		ChimeActions.UPDATE_VOICE_PROFILE,
		ChimeActions.UPDATE_VOICE_PROFILE_DOMAIN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ChimeActions.LIST_ACCOUNT_USAGE_REPORT_DATA,
		ChimeActions.LIST_ACCOUNTS,
		ChimeActions.LIST_API_KEYS,
		ChimeActions.LIST_APP_INSTANCE_ADMINS,
		ChimeActions.LIST_APP_INSTANCE_BOTS,
		ChimeActions.LIST_APP_INSTANCE_USER_ENDPOINTS,
		ChimeActions.LIST_APP_INSTANCE_USERS,
		ChimeActions.LIST_APP_INSTANCES,
		ChimeActions.LIST_ATTENDEE_TAGS,
		ChimeActions.LIST_ATTENDEES,
		ChimeActions.LIST_AVAILABLE_VOICE_CONNECTOR_REGIONS,
		ChimeActions.LIST_BOTS,
		ChimeActions.LIST_CDR_BUCKET,
		ChimeActions.LIST_CALLING_REGIONS,
		ChimeActions.LIST_CHANNEL_BANS,
		ChimeActions.LIST_CHANNEL_FLOWS,
		ChimeActions.LIST_CHANNEL_MEMBERSHIPS,
		ChimeActions.LIST_CHANNEL_MEMBERSHIPS_FOR_APP_INSTANCE_USER,
		ChimeActions.LIST_CHANNEL_MODERATORS,
		ChimeActions.LIST_CHANNELS,
		ChimeActions.LIST_CHANNELS_ASSOCIATED_WITH_CHANNEL_FLOW,
		ChimeActions.LIST_CHANNELS_MODERATED_BY_APP_INSTANCE_USER,
		ChimeActions.LIST_DELEGATES,
		ChimeActions.LIST_DIRECTORIES,
		ChimeActions.LIST_DOMAINS,
		ChimeActions.LIST_GROUPS,
		ChimeActions.LIST_MEDIA_CAPTURE_PIPELINES,
		ChimeActions.LIST_MEDIA_INSIGHTS_PIPELINE_CONFIGURATIONS,
		ChimeActions.LIST_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOLS,
		ChimeActions.LIST_MEDIA_PIPELINES,
		ChimeActions.LIST_MEETING_EVENTS,
		ChimeActions.LIST_MEETING_TAGS,
		ChimeActions.LIST_MEETINGS,
		ChimeActions.LIST_MEETINGS_REPORT_DATA,
		ChimeActions.LIST_PHONE_NUMBER_ORDERS,
		ChimeActions.LIST_PHONE_NUMBERS,
		ChimeActions.LIST_PROXY_SESSIONS,
		ChimeActions.LIST_ROOM_MEMBERSHIPS,
		ChimeActions.LIST_ROOMS,
		ChimeActions.LIST_SIP_MEDIA_APPLICATIONS,
		ChimeActions.LIST_SIP_RULES,
		ChimeActions.LIST_SUB_CHANNELS,
		ChimeActions.LIST_SUPPORTED_PHONE_NUMBER_COUNTRIES,
		ChimeActions.LIST_USERS,
		ChimeActions.LIST_VOICE_CONNECTOR_GROUPS,
		ChimeActions.LIST_VOICE_CONNECTOR_TERMINATION_CREDENTIALS,
		ChimeActions.LIST_VOICE_CONNECTORS,
		ChimeActions.LIST_VOICE_PROFILE_DOMAINS,
		ChimeActions.LIST_VOICE_PROFILES,
		ChimeActions.SEARCH_CHANNELS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ChimeActions.TAG_ATTENDEE,
		ChimeActions.TAG_MEETING,
		ChimeActions.TAG_RESOURCE,
		ChimeActions.UNTAG_ATTENDEE,
		ChimeActions.UNTAG_MEETING,
		ChimeActions.UNTAG_RESOURCE,
	];
}

const AppInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance/(?<appInstanceId>[^:/?]+)$",
);
const AppInstanceBotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance/(?<appInstanceId>[^:/?]+)/bot/(?<appInstanceBotId>[^:/?]+)$",
);
const AppInstanceUserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance/(?<appInstanceId>[^:/?]+)/user/(?<appInstanceUserId>[^:/?]+)$",
);
const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance/(?<appInstanceId>[^:/?]+)/channel/(?<channelId>[^:/?]+)$",
);
const ChannelFlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance/(?<appInstanceId>[^:/?]+)/channel-flow/(?<channelFlowId>[^:/?]+)$",
);
const MediaInsightsPipelineConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-insights-pipeline-configuration/(?<configurationName>[^:/?]+)$",
);
const MediaPipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-pipeline/(?<mediaPipelineId>[^:/?]+)$",
);
const MediaPipelineKinesisVideoStreamPoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-pipeline-kinesis-video-stream-pool/(?<poolName>[^:/?]+)$",
);
const MeetingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):meeting/(?<meetingId>[^:/?]+)$",
);
const SipMediaApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):sma/(?<sipMediaApplicationId>[^:/?]+)$",
);
const VoiceConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):vc/(?<voiceConnectorId>[^:/?]+)$",
);
const VoiceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):voice-profile/(?<voiceProfileId>[^:/?]+)$",
);
const VoiceProfileDomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):voice-profile-domain/(?<voiceProfileDomainId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for chime resources.
 */
export class ChimeResources {
	/**
	 * Builds an ARN for the app-instance resource.
	 */
	static appInstance(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AppInstanceId component of the ARN. */
		readonly appInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:app-instance/${props.appInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-instance resource.
	 */
	static isValidAppInstanceArn(arn: string): boolean {
		return AppInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a app-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		appInstanceId: string;
	} {
		const match = AppInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			appInstanceId: match.groups!.appInstanceId,
		};
	}

	/**
	 * Builds an ARN for the app-instance-bot resource.
	 */
	static appInstanceBot(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AppInstanceId component of the ARN. */
		readonly appInstanceId: string;
		/** The AppInstanceBotId component of the ARN. */
		readonly appInstanceBotId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:app-instance/${props.appInstanceId}/bot/${props.appInstanceBotId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-instance-bot resource.
	 */
	static isValidAppInstanceBotArn(arn: string): boolean {
		return AppInstanceBotArnRegex.test(arn);
	}

	/**
	 * Parses a app-instance-bot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppInstanceBotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		appInstanceId: string;
		appInstanceBotId: string;
	} {
		const match = AppInstanceBotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-instance-bot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			appInstanceId: match.groups!.appInstanceId,
			appInstanceBotId: match.groups!.appInstanceBotId,
		};
	}

	/**
	 * Builds an ARN for the app-instance-user resource.
	 */
	static appInstanceUser(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AppInstanceId component of the ARN. */
		readonly appInstanceId: string;
		/** The AppInstanceUserId component of the ARN. */
		readonly appInstanceUserId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:app-instance/${props.appInstanceId}/user/${props.appInstanceUserId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-instance-user resource.
	 */
	static isValidAppInstanceUserArn(arn: string): boolean {
		return AppInstanceUserArnRegex.test(arn);
	}

	/**
	 * Parses a app-instance-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppInstanceUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		appInstanceId: string;
		appInstanceUserId: string;
	} {
		const match = AppInstanceUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-instance-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			appInstanceId: match.groups!.appInstanceId,
			appInstanceUserId: match.groups!.appInstanceUserId,
		};
	}

	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AppInstanceId component of the ARN. */
		readonly appInstanceId: string;
		/** The ChannelId component of the ARN. */
		readonly channelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:app-instance/${props.appInstanceId}/channel/${props.channelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		appInstanceId: string;
		channelId: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			appInstanceId: match.groups!.appInstanceId,
			channelId: match.groups!.channelId,
		};
	}

	/**
	 * Builds an ARN for the channel-flow resource.
	 */
	static channelFlow(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The AppInstanceId component of the ARN. */
		readonly appInstanceId: string;
		/** The ChannelFlowId component of the ARN. */
		readonly channelFlowId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:app-instance/${props.appInstanceId}/channel-flow/${props.channelFlowId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel-flow resource.
	 */
	static isValidChannelFlowArn(arn: string): boolean {
		return ChannelFlowArnRegex.test(arn);
	}

	/**
	 * Parses a channel-flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		appInstanceId: string;
		channelFlowId: string;
	} {
		const match = ChannelFlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel-flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			appInstanceId: match.groups!.appInstanceId,
			channelFlowId: match.groups!.channelFlowId,
		};
	}

	/**
	 * Builds an ARN for the media-insights-pipeline-configuration resource.
	 */
	static mediaInsightsPipelineConfiguration(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The ConfigurationName component of the ARN. */
		readonly configurationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:media-insights-pipeline-configuration/${props.configurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the media-insights-pipeline-configuration resource.
	 */
	static isValidMediaInsightsPipelineConfigurationArn(arn: string): boolean {
		return MediaInsightsPipelineConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a media-insights-pipeline-configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMediaInsightsPipelineConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		configurationName: string;
	} {
		const match = MediaInsightsPipelineConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid media-insights-pipeline-configuration ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			configurationName: match.groups!.configurationName,
		};
	}

	/**
	 * Builds an ARN for the media-pipeline resource.
	 */
	static mediaPipeline(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The MediaPipelineId component of the ARN. */
		readonly mediaPipelineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:media-pipeline/${props.mediaPipelineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the media-pipeline resource.
	 */
	static isValidMediaPipelineArn(arn: string): boolean {
		return MediaPipelineArnRegex.test(arn);
	}

	/**
	 * Parses a media-pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMediaPipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		mediaPipelineId: string;
	} {
		const match = MediaPipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid media-pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			mediaPipelineId: match.groups!.mediaPipelineId,
		};
	}

	/**
	 * Builds an ARN for the media-pipeline-kinesis-video-stream-pool resource.
	 */
	static mediaPipelineKinesisVideoStreamPool(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The PoolName component of the ARN. */
		readonly poolName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:media-pipeline-kinesis-video-stream-pool/${props.poolName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the media-pipeline-kinesis-video-stream-pool resource.
	 */
	static isValidMediaPipelineKinesisVideoStreamPoolArn(arn: string): boolean {
		return MediaPipelineKinesisVideoStreamPoolArnRegex.test(arn);
	}

	/**
	 * Parses a media-pipeline-kinesis-video-stream-pool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMediaPipelineKinesisVideoStreamPoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		poolName: string;
	} {
		const match = MediaPipelineKinesisVideoStreamPoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid media-pipeline-kinesis-video-stream-pool ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			poolName: match.groups!.poolName,
		};
	}

	/**
	 * Builds an ARN for the meeting resource.
	 */
	static meeting(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The MeetingId component of the ARN. */
		readonly meetingId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:meeting/${props.meetingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the meeting resource.
	 */
	static isValidMeetingArn(arn: string): boolean {
		return MeetingArnRegex.test(arn);
	}

	/**
	 * Parses a meeting ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMeetingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		meetingId: string;
	} {
		const match = MeetingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid meeting ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			meetingId: match.groups!.meetingId,
		};
	}

	/**
	 * Builds an ARN for the sip-media-application resource.
	 */
	static sipMediaApplication(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The SipMediaApplicationId component of the ARN. */
		readonly sipMediaApplicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:sma/${props.sipMediaApplicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sip-media-application resource.
	 */
	static isValidSipMediaApplicationArn(arn: string): boolean {
		return SipMediaApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a sip-media-application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSipMediaApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		sipMediaApplicationId: string;
	} {
		const match = SipMediaApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sip-media-application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			sipMediaApplicationId: match.groups!.sipMediaApplicationId,
		};
	}

	/**
	 * Builds an ARN for the voice-connector resource.
	 */
	static voiceConnector(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The VoiceConnectorId component of the ARN. */
		readonly voiceConnectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:vc/${props.voiceConnectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the voice-connector resource.
	 */
	static isValidVoiceConnectorArn(arn: string): boolean {
		return VoiceConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a voice-connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVoiceConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		voiceConnectorId: string;
	} {
		const match = VoiceConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid voice-connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			voiceConnectorId: match.groups!.voiceConnectorId,
		};
	}

	/**
	 * Builds an ARN for the voice-profile resource.
	 */
	static voiceProfile(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The VoiceProfileId component of the ARN. */
		readonly voiceProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:voice-profile/${props.voiceProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the voice-profile resource.
	 */
	static isValidVoiceProfileArn(arn: string): boolean {
		return VoiceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a voice-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVoiceProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		voiceProfileId: string;
	} {
		const match = VoiceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid voice-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			voiceProfileId: match.groups!.voiceProfileId,
		};
	}

	/**
	 * Builds an ARN for the voice-profile-domain resource.
	 */
	static voiceProfileDomain(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The VoiceProfileDomainId component of the ARN. */
		readonly voiceProfileDomainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:chime:${props.region ?? "*"}:${props.accountId}:voice-profile-domain/${props.voiceProfileDomainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the voice-profile-domain resource.
	 */
	static isValidVoiceProfileDomainArn(arn: string): boolean {
		return VoiceProfileDomainArnRegex.test(arn);
	}

	/**
	 * Parses a voice-profile-domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVoiceProfileDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		voiceProfileDomainId: string;
	} {
		const match = VoiceProfileDomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid voice-profile-domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			voiceProfileDomainId: match.groups!.voiceProfileDomainId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for chime.
 */
export class ChimeOperations {
	/** IAM actions required for the AssociateChannelFlow API call. */
	static readonly ASSOCIATE_CHANNEL_FLOW: string[] = [
		"chime:AssociateChannelFlow",
	];
	/** IAM actions required for the AssociatePhoneNumberWithUser API call. */
	static readonly ASSOCIATE_PHONE_NUMBER_WITH_USER: string[] = [];
	/** IAM actions required for the AssociatePhoneNumbersWithVoiceConnector API call. */
	static readonly ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR: string[] = [
		"chime:AssociatePhoneNumbersWithVoiceConnector",
	];
	/** IAM actions required for the AssociatePhoneNumbersWithVoiceConnectorGroup API call. */
	static readonly ASSOCIATE_PHONE_NUMBERS_WITH_VOICE_CONNECTOR_GROUP: string[] =
		["chime:AssociatePhoneNumbersWithVoiceConnectorGroup"];
	/** IAM actions required for the AssociateSigninDelegateGroupsWithAccount API call. */
	static readonly ASSOCIATE_SIGNIN_DELEGATE_GROUPS_WITH_ACCOUNT: string[] = [];
	/** IAM actions required for the BatchCreateAttendee API call. */
	static readonly BATCH_CREATE_ATTENDEE: string[] = [
		"chime:BatchCreateAttendee",
	];
	/** IAM actions required for the BatchCreateChannelMembership API call. */
	static readonly BATCH_CREATE_CHANNEL_MEMBERSHIP: string[] = [
		"chime:BatchCreateChannelMembership",
	];
	/** IAM actions required for the BatchCreateRoomMembership API call. */
	static readonly BATCH_CREATE_ROOM_MEMBERSHIP: string[] = [
		"chime:BatchCreateRoomMembership",
	];
	/** IAM actions required for the BatchDeletePhoneNumber API call. */
	static readonly BATCH_DELETE_PHONE_NUMBER: string[] = [
		"chime:BatchDeletePhoneNumber",
	];
	/** IAM actions required for the BatchSuspendUser API call. */
	static readonly BATCH_SUSPEND_USER: string[] = [];
	/** IAM actions required for the BatchUnsuspendUser API call. */
	static readonly BATCH_UNSUSPEND_USER: string[] = [];
	/** IAM actions required for the BatchUpdateAttendeeCapabilitiesExcept API call. */
	static readonly BATCH_UPDATE_ATTENDEE_CAPABILITIES_EXCEPT: string[] = [
		"chime:BatchUpdateAttendeeCapabilitiesExcept",
	];
	/** IAM actions required for the BatchUpdatePhoneNumber API call. */
	static readonly BATCH_UPDATE_PHONE_NUMBER: string[] = [
		"chime:BatchUpdatePhoneNumber",
	];
	/** IAM actions required for the BatchUpdateUser API call. */
	static readonly BATCH_UPDATE_USER: string[] = [];
	/** IAM actions required for the ChannelFlowCallback API call. */
	static readonly CHANNEL_FLOW_CALLBACK: string[] = [
		"chime:ChannelFlowCallback",
	];
	/** IAM actions required for the CreateAccount API call. */
	static readonly CREATE_ACCOUNT: string[] = ["chime:CreateAccount"];
	/** IAM actions required for the CreateAppInstance API call. */
	static readonly CREATE_APP_INSTANCE: string[] = [
		"chime:CreateAppInstance",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAppInstanceAdmin API call. */
	static readonly CREATE_APP_INSTANCE_ADMIN: string[] = [
		"chime:CreateAppInstanceAdmin",
	];
	/** IAM actions required for the CreateAppInstanceBot API call. */
	static readonly CREATE_APP_INSTANCE_BOT: string[] = [
		"chime:CreateAppInstanceBot",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAppInstanceUser API call. */
	static readonly CREATE_APP_INSTANCE_USER: string[] = [
		"chime:CreateAppInstanceUser",
		"chime:PutAppInstanceUserExpirationSettings",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAttendee API call. */
	static readonly CREATE_ATTENDEE: string[] = [
		"chime:CreateAttendee",
		"chime:TagAttendee",
	];
	/** IAM actions required for the CreateBot API call. */
	static readonly CREATE_BOT: string[] = ["chime:CreateBot"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"chime:CreateChannel",
		"chime:CreateChannelMembership",
		"chime:CreateChannelModerator",
		"chime:PutChannelExpirationSettings",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateChannelBan API call. */
	static readonly CREATE_CHANNEL_BAN: string[] = ["chime:CreateChannelBan"];
	/** IAM actions required for the CreateChannelFlow API call. */
	static readonly CREATE_CHANNEL_FLOW: string[] = [
		"chime:CreateChannelFlow",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateChannelMembership API call. */
	static readonly CREATE_CHANNEL_MEMBERSHIP: string[] = [
		"chime:CreateChannelMembership",
	];
	/** IAM actions required for the CreateChannelModerator API call. */
	static readonly CREATE_CHANNEL_MODERATOR: string[] = [
		"chime:CreateChannelModerator",
	];
	/** IAM actions required for the CreateMediaCapturePipeline API call. */
	static readonly CREATE_MEDIA_CAPTURE_PIPELINE: string[] = [
		"chime:CreateMediaCapturePipeline",
		"iam:PassRole",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaConcatenationPipeline API call. */
	static readonly CREATE_MEDIA_CONCATENATION_PIPELINE: string[] = [
		"chime:CreateMediaConcatenationPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaInsightsPipeline API call. */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE: string[] = [
		"chime:CreateMediaInsightsPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaInsightsPipelineConfiguration API call. */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION: string[] = [
		"chime:CreateMediaInsightsPipelineConfiguration",
		"iam:PassRole",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaLiveConnectorPipeline API call. */
	static readonly CREATE_MEDIA_LIVE_CONNECTOR_PIPELINE: string[] = [
		"chime:CreateMediaLiveConnectorPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaPipelineKinesisVideoStreamPool API call. */
	static readonly CREATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL: string[] = [
		"chime:CreateMediaPipelineKinesisVideoStreamPool",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaStreamPipeline API call. */
	static readonly CREATE_MEDIA_STREAM_PIPELINE: string[] = [
		"chime:CreateMediaStreamPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMeeting API call. */
	static readonly CREATE_MEETING: string[] = [
		"chime:CreateMeeting",
		"chime:TagMeeting",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMeetingDialOut API call. */
	static readonly CREATE_MEETING_DIAL_OUT: string[] = [
		"chime:CreateMeetingDialOut",
	];
	/** IAM actions required for the CreateMeetingWithAttendees API call. */
	static readonly CREATE_MEETING_WITH_ATTENDEES: string[] = [
		"chime:CreateMeetingWithAttendees",
		"chime:TagResource",
	];
	/** IAM actions required for the CreatePhoneNumberOrder API call. */
	static readonly CREATE_PHONE_NUMBER_ORDER: string[] = [
		"chime:CreatePhoneNumberOrder",
	];
	/** IAM actions required for the CreateProxySession API call. */
	static readonly CREATE_PROXY_SESSION: string[] = ["chime:CreateProxySession"];
	/** IAM actions required for the CreateRoom API call. */
	static readonly CREATE_ROOM: string[] = ["chime:CreateRoom"];
	/** IAM actions required for the CreateRoomMembership API call. */
	static readonly CREATE_ROOM_MEMBERSHIP: string[] = [
		"chime:CreateRoomMembership",
	];
	/** IAM actions required for the CreateSipMediaApplication API call. */
	static readonly CREATE_SIP_MEDIA_APPLICATION: string[] = [
		"chime:CreateSipMediaApplication",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateSipMediaApplicationCall API call. */
	static readonly CREATE_SIP_MEDIA_APPLICATION_CALL: string[] = [
		"chime:CreateSipMediaApplicationCall",
	];
	/** IAM actions required for the CreateSipRule API call. */
	static readonly CREATE_SIP_RULE: string[] = ["chime:CreateSipRule"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [];
	/** IAM actions required for the CreateVoiceConnector API call. */
	static readonly CREATE_VOICE_CONNECTOR: string[] = [
		"chime:CreateConnectAnalyticsConnector",
		"chime:CreateConnectCallTransferConnector",
		"chime:CreateVoiceConnector",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateVoiceConnectorGroup API call. */
	static readonly CREATE_VOICE_CONNECTOR_GROUP: string[] = [
		"chime:CreateVoiceConnectorGroup",
	];
	/** IAM actions required for the CreateVoiceProfile API call. */
	static readonly CREATE_VOICE_PROFILE: string[] = ["chime:CreateVoiceProfile"];
	/** IAM actions required for the CreateVoiceProfileDomain API call. */
	static readonly CREATE_VOICE_PROFILE_DOMAIN: string[] = [
		"chime:CreateVoiceProfileDomain",
		"chime:TagResource",
	];
	/** IAM actions required for the DeleteAccount API call. */
	static readonly DELETE_ACCOUNT: string[] = ["chime:DeleteAccount"];
	/** IAM actions required for the DeleteAppInstance API call. */
	static readonly DELETE_APP_INSTANCE: string[] = ["chime:DeleteAppInstance"];
	/** IAM actions required for the DeleteAppInstanceAdmin API call. */
	static readonly DELETE_APP_INSTANCE_ADMIN: string[] = [
		"chime:DeleteAppInstanceAdmin",
	];
	/** IAM actions required for the DeleteAppInstanceBot API call. */
	static readonly DELETE_APP_INSTANCE_BOT: string[] = [
		"chime:DeleteAppInstanceBot",
	];
	/** IAM actions required for the DeleteAppInstanceUser API call. */
	static readonly DELETE_APP_INSTANCE_USER: string[] = [
		"chime:DeleteAppInstanceUser",
	];
	/** IAM actions required for the DeleteAttendee API call. */
	static readonly DELETE_ATTENDEE: string[] = ["chime:DeleteAttendee"];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["chime:DeleteChannel"];
	/** IAM actions required for the DeleteChannelBan API call. */
	static readonly DELETE_CHANNEL_BAN: string[] = ["chime:DeleteChannelBan"];
	/** IAM actions required for the DeleteChannelFlow API call. */
	static readonly DELETE_CHANNEL_FLOW: string[] = ["chime:DeleteChannelFlow"];
	/** IAM actions required for the DeleteChannelMembership API call. */
	static readonly DELETE_CHANNEL_MEMBERSHIP: string[] = [
		"chime:DeleteChannelMembership",
	];
	/** IAM actions required for the DeleteChannelMessage API call. */
	static readonly DELETE_CHANNEL_MESSAGE: string[] = [
		"chime:DeleteChannelMessage",
	];
	/** IAM actions required for the DeleteChannelModerator API call. */
	static readonly DELETE_CHANNEL_MODERATOR: string[] = [
		"chime:DeleteChannelModerator",
	];
	/** IAM actions required for the DeleteEventsConfiguration API call. */
	static readonly DELETE_EVENTS_CONFIGURATION: string[] = [
		"chime:DeleteEventsConfiguration",
	];
	/** IAM actions required for the DeleteMediaCapturePipeline API call. */
	static readonly DELETE_MEDIA_CAPTURE_PIPELINE: string[] = [
		"chime:DeleteMediaCapturePipeline",
	];
	/** IAM actions required for the DeleteMediaInsightsPipelineConfiguration API call. */
	static readonly DELETE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION: string[] = [
		"chime:DeleteMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the DeleteMediaPipeline API call. */
	static readonly DELETE_MEDIA_PIPELINE: string[] = [
		"chime:DeleteMediaPipeline",
	];
	/** IAM actions required for the DeleteMediaPipelineKinesisVideoStreamPool API call. */
	static readonly DELETE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL: string[] = [
		"chime:DeleteMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the DeleteMeeting API call. */
	static readonly DELETE_MEETING: string[] = ["chime:DeleteMeeting"];
	/** IAM actions required for the DeleteMessagingStreamingConfigurations API call. */
	static readonly DELETE_MESSAGING_STREAMING_CONFIGURATIONS: string[] = [
		"chime:DeleteMessagingStreamingConfigurations",
	];
	/** IAM actions required for the DeletePhoneNumber API call. */
	static readonly DELETE_PHONE_NUMBER: string[] = ["chime:DeletePhoneNumber"];
	/** IAM actions required for the DeleteProxySession API call. */
	static readonly DELETE_PROXY_SESSION: string[] = ["chime:DeleteProxySession"];
	/** IAM actions required for the DeleteRoom API call. */
	static readonly DELETE_ROOM: string[] = ["chime:DeleteRoom"];
	/** IAM actions required for the DeleteRoomMembership API call. */
	static readonly DELETE_ROOM_MEMBERSHIP: string[] = [
		"chime:DeleteRoomMembership",
	];
	/** IAM actions required for the DeleteSipMediaApplication API call. */
	static readonly DELETE_SIP_MEDIA_APPLICATION: string[] = [
		"chime:DeleteSipMediaApplication",
	];
	/** IAM actions required for the DeleteSipRule API call. */
	static readonly DELETE_SIP_RULE: string[] = ["chime:DeleteSipRule"];
	/** IAM actions required for the DeleteVoiceConnector API call. */
	static readonly DELETE_VOICE_CONNECTOR: string[] = [
		"chime:DeleteVoiceConnector",
	];
	/** IAM actions required for the DeleteVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly DELETE_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION: string[] =
		["chime:DeleteVoiceConnectorEmergencyCallingConfiguration"];
	/** IAM actions required for the DeleteVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly DELETE_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION: string[] =
		["chime:DeleteVoiceConnectorExternalSystemsConfiguration"];
	/** IAM actions required for the DeleteVoiceConnectorGroup API call. */
	static readonly DELETE_VOICE_CONNECTOR_GROUP: string[] = [
		"chime:DeleteVoiceConnectorGroup",
	];
	/** IAM actions required for the DeleteVoiceConnectorOrigination API call. */
	static readonly DELETE_VOICE_CONNECTOR_ORIGINATION: string[] = [
		"chime:DeleteVoiceConnectorOrigination",
	];
	/** IAM actions required for the DeleteVoiceConnectorProxy API call. */
	static readonly DELETE_VOICE_CONNECTOR_PROXY: string[] = [
		"chime:DeleteVoiceConnectorProxy",
	];
	/** IAM actions required for the DeleteVoiceConnectorStreamingConfiguration API call. */
	static readonly DELETE_VOICE_CONNECTOR_STREAMING_CONFIGURATION: string[] = [
		"chime:DeleteVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the DeleteVoiceConnectorTermination API call. */
	static readonly DELETE_VOICE_CONNECTOR_TERMINATION: string[] = [
		"chime:DeleteVoiceConnectorTermination",
	];
	/** IAM actions required for the DeleteVoiceConnectorTerminationCredentials API call. */
	static readonly DELETE_VOICE_CONNECTOR_TERMINATION_CREDENTIALS: string[] = [
		"chime:DeleteVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the DeleteVoiceProfile API call. */
	static readonly DELETE_VOICE_PROFILE: string[] = ["chime:DeleteVoiceProfile"];
	/** IAM actions required for the DeleteVoiceProfileDomain API call. */
	static readonly DELETE_VOICE_PROFILE_DOMAIN: string[] = [
		"chime:DeleteVoiceProfileDomain",
	];
	/** IAM actions required for the DeregisterAppInstanceUserEndpoint API call. */
	static readonly DEREGISTER_APP_INSTANCE_USER_ENDPOINT: string[] = [
		"chime:DeregisterAppInstanceUserEndpoint",
	];
	/** IAM actions required for the DescribeAppInstance API call. */
	static readonly DESCRIBE_APP_INSTANCE: string[] = [
		"chime:DescribeAppInstance",
	];
	/** IAM actions required for the DescribeAppInstanceAdmin API call. */
	static readonly DESCRIBE_APP_INSTANCE_ADMIN: string[] = [
		"chime:DescribeAppInstanceAdmin",
	];
	/** IAM actions required for the DescribeAppInstanceBot API call. */
	static readonly DESCRIBE_APP_INSTANCE_BOT: string[] = [
		"chime:DescribeAppInstanceBot",
	];
	/** IAM actions required for the DescribeAppInstanceUser API call. */
	static readonly DESCRIBE_APP_INSTANCE_USER: string[] = [
		"chime:DescribeAppInstanceUser",
	];
	/** IAM actions required for the DescribeAppInstanceUserEndpoint API call. */
	static readonly DESCRIBE_APP_INSTANCE_USER_ENDPOINT: string[] = [
		"chime:DescribeAppInstanceUserEndpoint",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DESCRIBE_CHANNEL: string[] = ["chime:DescribeChannel"];
	/** IAM actions required for the DescribeChannelBan API call. */
	static readonly DESCRIBE_CHANNEL_BAN: string[] = ["chime:DescribeChannelBan"];
	/** IAM actions required for the DescribeChannelFlow API call. */
	static readonly DESCRIBE_CHANNEL_FLOW: string[] = [
		"chime:DescribeChannelFlow",
	];
	/** IAM actions required for the DescribeChannelMembership API call. */
	static readonly DESCRIBE_CHANNEL_MEMBERSHIP: string[] = [
		"chime:DescribeChannelMembership",
	];
	/** IAM actions required for the DescribeChannelMembershipForAppInstanceUser API call. */
	static readonly DESCRIBE_CHANNEL_MEMBERSHIP_FOR_APP_INSTANCE_USER: string[] =
		["chime:DescribeChannelMembershipForAppInstanceUser"];
	/** IAM actions required for the DescribeChannelModeratedByAppInstanceUser API call. */
	static readonly DESCRIBE_CHANNEL_MODERATED_BY_APP_INSTANCE_USER: string[] = [
		"chime:DescribeChannelModeratedByAppInstanceUser",
	];
	/** IAM actions required for the DescribeChannelModerator API call. */
	static readonly DESCRIBE_CHANNEL_MODERATOR: string[] = [
		"chime:DescribeChannelModerator",
	];
	/** IAM actions required for the DisassociateChannelFlow API call. */
	static readonly DISASSOCIATE_CHANNEL_FLOW: string[] = [
		"chime:DisassociateChannelFlow",
	];
	/** IAM actions required for the DisassociatePhoneNumberFromUser API call. */
	static readonly DISASSOCIATE_PHONE_NUMBER_FROM_USER: string[] = [];
	/** IAM actions required for the DisassociatePhoneNumbersFromVoiceConnector API call. */
	static readonly DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR: string[] = [
		"chime:DisassociatePhoneNumbersFromVoiceConnector",
	];
	/** IAM actions required for the DisassociatePhoneNumbersFromVoiceConnectorGroup API call. */
	static readonly DISASSOCIATE_PHONE_NUMBERS_FROM_VOICE_CONNECTOR_GROUP: string[] =
		["chime:DisassociatePhoneNumbersFromVoiceConnectorGroup"];
	/** IAM actions required for the DisassociateSigninDelegateGroupsFromAccount API call. */
	static readonly DISASSOCIATE_SIGNIN_DELEGATE_GROUPS_FROM_ACCOUNT: string[] =
		[];
	/** IAM actions required for the GetAccount API call. */
	static readonly GET_ACCOUNT: string[] = ["chime:GetAccount"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = ["chime:GetAccountSettings"];
	/** IAM actions required for the GetAppInstanceRetentionSettings API call. */
	static readonly GET_APP_INSTANCE_RETENTION_SETTINGS: string[] = [
		"chime:GetAppInstanceRetentionSettings",
	];
	/** IAM actions required for the GetAttendee API call. */
	static readonly GET_ATTENDEE: string[] = ["chime:GetAttendee"];
	/** IAM actions required for the GetBot API call. */
	static readonly GET_BOT: string[] = ["chime:GetBot"];
	/** IAM actions required for the GetChannelMembershipPreferences API call. */
	static readonly GET_CHANNEL_MEMBERSHIP_PREFERENCES: string[] = [
		"chime:GetChannelMembershipPreferences",
	];
	/** IAM actions required for the GetChannelMessage API call. */
	static readonly GET_CHANNEL_MESSAGE: string[] = ["chime:GetChannelMessage"];
	/** IAM actions required for the GetChannelMessageStatus API call. */
	static readonly GET_CHANNEL_MESSAGE_STATUS: string[] = [
		"chime:GetChannelMessageStatus",
	];
	/** IAM actions required for the GetEventsConfiguration API call. */
	static readonly GET_EVENTS_CONFIGURATION: string[] = [
		"chime:GetEventsConfiguration",
	];
	/** IAM actions required for the GetGlobalSettings API call. */
	static readonly GET_GLOBAL_SETTINGS: string[] = ["chime:GetGlobalSettings"];
	/** IAM actions required for the GetMediaCapturePipeline API call. */
	static readonly GET_MEDIA_CAPTURE_PIPELINE: string[] = [
		"chime:GetMediaCapturePipeline",
	];
	/** IAM actions required for the GetMediaInsightsPipelineConfiguration API call. */
	static readonly GET_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION: string[] = [
		"chime:GetMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the GetMediaPipeline API call. */
	static readonly GET_MEDIA_PIPELINE: string[] = ["chime:GetMediaPipeline"];
	/** IAM actions required for the GetMediaPipelineKinesisVideoStreamPool API call. */
	static readonly GET_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL: string[] = [
		"chime:GetMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the GetMeeting API call. */
	static readonly GET_MEETING: string[] = ["chime:GetMeeting"];
	/** IAM actions required for the GetMessagingSessionEndpoint API call. */
	static readonly GET_MESSAGING_SESSION_ENDPOINT: string[] = [
		"chime:GetMessagingSessionEndpoint",
	];
	/** IAM actions required for the GetMessagingStreamingConfigurations API call. */
	static readonly GET_MESSAGING_STREAMING_CONFIGURATIONS: string[] = [
		"chime:GetMessagingStreamingConfigurations",
	];
	/** IAM actions required for the GetPhoneNumber API call. */
	static readonly GET_PHONE_NUMBER: string[] = ["chime:GetPhoneNumber"];
	/** IAM actions required for the GetPhoneNumberOrder API call. */
	static readonly GET_PHONE_NUMBER_ORDER: string[] = [
		"chime:GetPhoneNumberOrder",
	];
	/** IAM actions required for the GetPhoneNumberSettings API call. */
	static readonly GET_PHONE_NUMBER_SETTINGS: string[] = [
		"chime:GetPhoneNumberSettings",
	];
	/** IAM actions required for the GetProxySession API call. */
	static readonly GET_PROXY_SESSION: string[] = ["chime:GetProxySession"];
	/** IAM actions required for the GetRetentionSettings API call. */
	static readonly GET_RETENTION_SETTINGS: string[] = [
		"chime:GetRetentionSettings",
	];
	/** IAM actions required for the GetRoom API call. */
	static readonly GET_ROOM: string[] = ["chime:GetRoom"];
	/** IAM actions required for the GetSipMediaApplication API call. */
	static readonly GET_SIP_MEDIA_APPLICATION: string[] = [
		"chime:GetSipMediaApplication",
	];
	/** IAM actions required for the GetSipMediaApplicationAlexaSkillConfiguration API call. */
	static readonly GET_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION: string[] =
		["chime:GetSipMediaApplicationAlexaSkillConfiguration"];
	/** IAM actions required for the GetSipMediaApplicationLoggingConfiguration API call. */
	static readonly GET_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION: string[] = [
		"chime:GetSipMediaApplicationLoggingConfiguration",
	];
	/** IAM actions required for the GetSipRule API call. */
	static readonly GET_SIP_RULE: string[] = ["chime:GetSipRule"];
	/** IAM actions required for the GetSpeakerSearchTask API call. */
	static readonly GET_SPEAKER_SEARCH_TASK: string[] = [
		"chime:GetSpeakerSearchTask",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = ["chime:GetUser"];
	/** IAM actions required for the GetUserSettings API call. */
	static readonly GET_USER_SETTINGS: string[] = ["chime:GetUserSettings"];
	/** IAM actions required for the GetVoiceConnector API call. */
	static readonly GET_VOICE_CONNECTOR: string[] = ["chime:GetVoiceConnector"];
	/** IAM actions required for the GetVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly GET_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION: string[] =
		["chime:GetVoiceConnectorEmergencyCallingConfiguration"];
	/** IAM actions required for the GetVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly GET_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION: string[] =
		["chime:GetVoiceConnectorExternalSystemsConfiguration"];
	/** IAM actions required for the GetVoiceConnectorGroup API call. */
	static readonly GET_VOICE_CONNECTOR_GROUP: string[] = [
		"chime:GetVoiceConnectorGroup",
	];
	/** IAM actions required for the GetVoiceConnectorLoggingConfiguration API call. */
	static readonly GET_VOICE_CONNECTOR_LOGGING_CONFIGURATION: string[] = [
		"chime:GetVoiceConnectorLoggingConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorOrigination API call. */
	static readonly GET_VOICE_CONNECTOR_ORIGINATION: string[] = [
		"chime:GetVoiceConnectorOrigination",
	];
	/** IAM actions required for the GetVoiceConnectorProxy API call. */
	static readonly GET_VOICE_CONNECTOR_PROXY: string[] = [
		"chime:GetVoiceConnectorProxy",
	];
	/** IAM actions required for the GetVoiceConnectorStreamingConfiguration API call. */
	static readonly GET_VOICE_CONNECTOR_STREAMING_CONFIGURATION: string[] = [
		"chime:GetVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorTermination API call. */
	static readonly GET_VOICE_CONNECTOR_TERMINATION: string[] = [
		"chime:GetVoiceConnectorTermination",
	];
	/** IAM actions required for the GetVoiceConnectorTerminationHealth API call. */
	static readonly GET_VOICE_CONNECTOR_TERMINATION_HEALTH: string[] = [
		"chime:GetVoiceConnectorTerminationHealth",
	];
	/** IAM actions required for the GetVoiceProfile API call. */
	static readonly GET_VOICE_PROFILE: string[] = ["chime:GetVoiceProfile"];
	/** IAM actions required for the GetVoiceProfileDomain API call. */
	static readonly GET_VOICE_PROFILE_DOMAIN: string[] = [
		"chime:GetVoiceProfileDomain",
	];
	/** IAM actions required for the GetVoiceToneAnalysisTask API call. */
	static readonly GET_VOICE_TONE_ANALYSIS_TASK: string[] = [
		"chime:GetVoiceToneAnalysisTask",
	];
	/** IAM actions required for the InviteUsers API call. */
	static readonly INVITE_USERS: string[] = ["chime:InviteUsers"];
	/** IAM actions required for the ListAccounts API call. */
	static readonly LIST_ACCOUNTS: string[] = ["chime:ListAccounts"];
	/** IAM actions required for the ListAppInstanceAdmins API call. */
	static readonly LIST_APP_INSTANCE_ADMINS: string[] = [
		"chime:ListAppInstanceAdmins",
	];
	/** IAM actions required for the ListAppInstanceBots API call. */
	static readonly LIST_APP_INSTANCE_BOTS: string[] = [
		"chime:ListAppInstanceBots",
	];
	/** IAM actions required for the ListAppInstanceUserEndpoints API call. */
	static readonly LIST_APP_INSTANCE_USER_ENDPOINTS: string[] = [
		"chime:ListAppInstanceUserEndpoints",
	];
	/** IAM actions required for the ListAppInstanceUsers API call. */
	static readonly LIST_APP_INSTANCE_USERS: string[] = [
		"chime:ListAppInstanceUsers",
	];
	/** IAM actions required for the ListAppInstances API call. */
	static readonly LIST_APP_INSTANCES: string[] = ["chime:ListAppInstances"];
	/** IAM actions required for the ListAttendees API call. */
	static readonly LIST_ATTENDEES: string[] = ["chime:ListAttendees"];
	/** IAM actions required for the ListAvailableVoiceConnectorRegions API call. */
	static readonly LIST_AVAILABLE_VOICE_CONNECTOR_REGIONS: string[] = [
		"chime:ListAvailableVoiceConnectorRegions",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly LIST_BOTS: string[] = ["chime:ListBots"];
	/** IAM actions required for the ListChannelBans API call. */
	static readonly LIST_CHANNEL_BANS: string[] = ["chime:ListChannelBans"];
	/** IAM actions required for the ListChannelFlows API call. */
	static readonly LIST_CHANNEL_FLOWS: string[] = ["chime:ListChannelFlows"];
	/** IAM actions required for the ListChannelMemberships API call. */
	static readonly LIST_CHANNEL_MEMBERSHIPS: string[] = [
		"chime:ListChannelMemberships",
	];
	/** IAM actions required for the ListChannelMembershipsForAppInstanceUser API call. */
	static readonly LIST_CHANNEL_MEMBERSHIPS_FOR_APP_INSTANCE_USER: string[] = [
		"chime:ListChannelMembershipsForAppInstanceUser",
	];
	/** IAM actions required for the ListChannelMessages API call. */
	static readonly LIST_CHANNEL_MESSAGES: string[] = [
		"chime:ListChannelMessages",
	];
	/** IAM actions required for the ListChannelModerators API call. */
	static readonly LIST_CHANNEL_MODERATORS: string[] = [
		"chime:ListChannelModerators",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["chime:ListChannels"];
	/** IAM actions required for the ListChannelsAssociatedWithChannelFlow API call. */
	static readonly LIST_CHANNELS_ASSOCIATED_WITH_CHANNEL_FLOW: string[] = [
		"chime:ListChannelsAssociatedWithChannelFlow",
	];
	/** IAM actions required for the ListChannelsModeratedByAppInstanceUser API call. */
	static readonly LIST_CHANNELS_MODERATED_BY_APP_INSTANCE_USER: string[] = [
		"chime:ListChannelsModeratedByAppInstanceUser",
	];
	/** IAM actions required for the ListMediaCapturePipelines API call. */
	static readonly LIST_MEDIA_CAPTURE_PIPELINES: string[] = [
		"chime:ListMediaCapturePipelines",
	];
	/** IAM actions required for the ListMediaInsightsPipelineConfigurations API call. */
	static readonly LIST_MEDIA_INSIGHTS_PIPELINE_CONFIGURATIONS: string[] = [
		"chime:ListMediaInsightsPipelineConfigurations",
	];
	/** IAM actions required for the ListMediaPipelineKinesisVideoStreamPools API call. */
	static readonly LIST_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOLS: string[] = [
		"chime:ListMediaPipelineKinesisVideoStreamPools",
	];
	/** IAM actions required for the ListMediaPipelines API call. */
	static readonly LIST_MEDIA_PIPELINES: string[] = ["chime:ListMediaPipelines"];
	/** IAM actions required for the ListPhoneNumberOrders API call. */
	static readonly LIST_PHONE_NUMBER_ORDERS: string[] = [
		"chime:ListPhoneNumberOrders",
	];
	/** IAM actions required for the ListPhoneNumbers API call. */
	static readonly LIST_PHONE_NUMBERS: string[] = ["chime:ListPhoneNumbers"];
	/** IAM actions required for the ListProxySessions API call. */
	static readonly LIST_PROXY_SESSIONS: string[] = ["chime:ListProxySessions"];
	/** IAM actions required for the ListRoomMemberships API call. */
	static readonly LIST_ROOM_MEMBERSHIPS: string[] = [
		"chime:ListRoomMemberships",
	];
	/** IAM actions required for the ListRooms API call. */
	static readonly LIST_ROOMS: string[] = ["chime:ListRooms"];
	/** IAM actions required for the ListSipMediaApplications API call. */
	static readonly LIST_SIP_MEDIA_APPLICATIONS: string[] = [
		"chime:ListSipMediaApplications",
	];
	/** IAM actions required for the ListSipRules API call. */
	static readonly LIST_SIP_RULES: string[] = ["chime:ListSipRules"];
	/** IAM actions required for the ListSubChannels API call. */
	static readonly LIST_SUB_CHANNELS: string[] = ["chime:ListSubChannels"];
	/** IAM actions required for the ListSupportedPhoneNumberCountries API call. */
	static readonly LIST_SUPPORTED_PHONE_NUMBER_COUNTRIES: string[] = [
		"chime:ListSupportedPhoneNumberCountries",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"chime:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["chime:ListUsers"];
	/** IAM actions required for the ListVoiceConnectorGroups API call. */
	static readonly LIST_VOICE_CONNECTOR_GROUPS: string[] = [
		"chime:ListVoiceConnectorGroups",
	];
	/** IAM actions required for the ListVoiceConnectorTerminationCredentials API call. */
	static readonly LIST_VOICE_CONNECTOR_TERMINATION_CREDENTIALS: string[] = [
		"chime:ListVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the ListVoiceConnectors API call. */
	static readonly LIST_VOICE_CONNECTORS: string[] = [
		"chime:ListVoiceConnectors",
	];
	/** IAM actions required for the ListVoiceProfileDomains API call. */
	static readonly LIST_VOICE_PROFILE_DOMAINS: string[] = [
		"chime:ListVoiceProfileDomains",
	];
	/** IAM actions required for the ListVoiceProfiles API call. */
	static readonly LIST_VOICE_PROFILES: string[] = ["chime:ListVoiceProfiles"];
	/** IAM actions required for the LogoutUser API call. */
	static readonly LOGOUT_USER: string[] = ["chime:LogoutUser"];
	/** IAM actions required for the PutAppInstanceRetentionSettings API call. */
	static readonly PUT_APP_INSTANCE_RETENTION_SETTINGS: string[] = [
		"chime:PutAppInstanceRetentionSettings",
	];
	/** IAM actions required for the PutAppInstanceUserExpirationSettings API call. */
	static readonly PUT_APP_INSTANCE_USER_EXPIRATION_SETTINGS: string[] = [
		"chime:PutAppInstanceUserExpirationSettings",
	];
	/** IAM actions required for the PutChannelExpirationSettings API call. */
	static readonly PUT_CHANNEL_EXPIRATION_SETTINGS: string[] = [
		"chime:PutChannelExpirationSettings",
	];
	/** IAM actions required for the PutChannelMembershipPreferences API call. */
	static readonly PUT_CHANNEL_MEMBERSHIP_PREFERENCES: string[] = [
		"chime:PutChannelMembershipPreferences",
	];
	/** IAM actions required for the PutEventsConfiguration API call. */
	static readonly PUT_EVENTS_CONFIGURATION: string[] = [
		"chime:PutEventsConfiguration",
	];
	/** IAM actions required for the PutMessagingStreamingConfigurations API call. */
	static readonly PUT_MESSAGING_STREAMING_CONFIGURATIONS: string[] = [
		"chime:PutMessagingStreamingConfigurations",
	];
	/** IAM actions required for the PutRetentionSettings API call. */
	static readonly PUT_RETENTION_SETTINGS: string[] = [
		"chime:PutRetentionSettings",
	];
	/** IAM actions required for the PutSipMediaApplicationAlexaSkillConfiguration API call. */
	static readonly PUT_SIP_MEDIA_APPLICATION_ALEXA_SKILL_CONFIGURATION: string[] =
		["chime:PutSipMediaApplicationAlexaSkillConfiguration"];
	/** IAM actions required for the PutSipMediaApplicationLoggingConfiguration API call. */
	static readonly PUT_SIP_MEDIA_APPLICATION_LOGGING_CONFIGURATION: string[] = [
		"chime:PutSipMediaApplicationLoggingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly PUT_VOICE_CONNECTOR_EMERGENCY_CALLING_CONFIGURATION: string[] =
		["chime:PutVoiceConnectorEmergencyCallingConfiguration"];
	/** IAM actions required for the PutVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly PUT_VOICE_CONNECTOR_EXTERNAL_SYSTEMS_CONFIGURATION: string[] =
		["chime:PutVoiceConnectorExternalSystemsConfiguration"];
	/** IAM actions required for the PutVoiceConnectorLoggingConfiguration API call. */
	static readonly PUT_VOICE_CONNECTOR_LOGGING_CONFIGURATION: string[] = [
		"chime:PutVoiceConnectorLoggingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorOrigination API call. */
	static readonly PUT_VOICE_CONNECTOR_ORIGINATION: string[] = [
		"chime:PutVoiceConnectorOrigination",
	];
	/** IAM actions required for the PutVoiceConnectorProxy API call. */
	static readonly PUT_VOICE_CONNECTOR_PROXY: string[] = [
		"chime:PutVoiceConnectorProxy",
	];
	/** IAM actions required for the PutVoiceConnectorStreamingConfiguration API call. */
	static readonly PUT_VOICE_CONNECTOR_STREAMING_CONFIGURATION: string[] = [
		"chime:PutVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorTermination API call. */
	static readonly PUT_VOICE_CONNECTOR_TERMINATION: string[] = [
		"chime:PutVoiceConnectorTermination",
	];
	/** IAM actions required for the PutVoiceConnectorTerminationCredentials API call. */
	static readonly PUT_VOICE_CONNECTOR_TERMINATION_CREDENTIALS: string[] = [
		"chime:PutVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the RedactChannelMessage API call. */
	static readonly REDACT_CHANNEL_MESSAGE: string[] = [
		"chime:RedactChannelMessage",
	];
	/** IAM actions required for the RedactConversationMessage API call. */
	static readonly REDACT_CONVERSATION_MESSAGE: string[] = [
		"chime:RedactConversationMessage",
	];
	/** IAM actions required for the RedactRoomMessage API call. */
	static readonly REDACT_ROOM_MESSAGE: string[] = ["chime:RedactRoomMessage"];
	/** IAM actions required for the RegenerateSecurityToken API call. */
	static readonly REGENERATE_SECURITY_TOKEN: string[] = [
		"chime:RegenerateSecurityToken",
	];
	/** IAM actions required for the RegisterAppInstanceUserEndpoint API call. */
	static readonly REGISTER_APP_INSTANCE_USER_ENDPOINT: string[] = [
		"chime:RegisterAppInstanceUserEndpoint",
	];
	/** IAM actions required for the ResetPersonalPIN API call. */
	static readonly RESET_PERSONAL_PIN: string[] = [];
	/** IAM actions required for the RestorePhoneNumber API call. */
	static readonly RESTORE_PHONE_NUMBER: string[] = ["chime:RestorePhoneNumber"];
	/** IAM actions required for the SearchAvailablePhoneNumbers API call. */
	static readonly SEARCH_AVAILABLE_PHONE_NUMBERS: string[] = [
		"chime:SearchAvailablePhoneNumbers",
	];
	/** IAM actions required for the SearchChannels API call. */
	static readonly SEARCH_CHANNELS: string[] = ["chime:SearchChannels"];
	/** IAM actions required for the SendChannelMessage API call. */
	static readonly SEND_CHANNEL_MESSAGE: string[] = ["chime:SendChannelMessage"];
	/** IAM actions required for the StartMeetingTranscription API call. */
	static readonly START_MEETING_TRANSCRIPTION: string[] = [
		"chime:StartMeetingTranscription",
	];
	/** IAM actions required for the StartSpeakerSearchTask API call. */
	static readonly START_SPEAKER_SEARCH_TASK: string[] = [
		"chime:StartSpeakerSearchTask",
	];
	/** IAM actions required for the StartVoiceToneAnalysisTask API call. */
	static readonly START_VOICE_TONE_ANALYSIS_TASK: string[] = [
		"chime:StartVoiceToneAnalysisTask",
	];
	/** IAM actions required for the StopMeetingTranscription API call. */
	static readonly STOP_MEETING_TRANSCRIPTION: string[] = [
		"chime:StopMeetingTranscription",
	];
	/** IAM actions required for the StopSpeakerSearchTask API call. */
	static readonly STOP_SPEAKER_SEARCH_TASK: string[] = [
		"chime:StopSpeakerSearchTask",
	];
	/** IAM actions required for the StopVoiceToneAnalysisTask API call. */
	static readonly STOP_VOICE_TONE_ANALYSIS_TASK: string[] = [
		"chime:StopVoiceToneAnalysisTask",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["chime:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["chime:UntagResource"];
	/** IAM actions required for the UpdateAccount API call. */
	static readonly UPDATE_ACCOUNT: string[] = [];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [];
	/** IAM actions required for the UpdateAppInstance API call. */
	static readonly UPDATE_APP_INSTANCE: string[] = ["chime:UpdateAppInstance"];
	/** IAM actions required for the UpdateAppInstanceBot API call. */
	static readonly UPDATE_APP_INSTANCE_BOT: string[] = [
		"chime:UpdateAppInstanceBot",
	];
	/** IAM actions required for the UpdateAppInstanceUser API call. */
	static readonly UPDATE_APP_INSTANCE_USER: string[] = [
		"chime:UpdateAppInstanceUser",
	];
	/** IAM actions required for the UpdateAppInstanceUserEndpoint API call. */
	static readonly UPDATE_APP_INSTANCE_USER_ENDPOINT: string[] = [
		"chime:UpdateAppInstanceUserEndpoint",
	];
	/** IAM actions required for the UpdateAttendeeCapabilities API call. */
	static readonly UPDATE_ATTENDEE_CAPABILITIES: string[] = [
		"chime:UpdateAttendeeCapabilities",
	];
	/** IAM actions required for the UpdateBot API call. */
	static readonly UPDATE_BOT: string[] = ["chime:UpdateBot"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["chime:UpdateChannel"];
	/** IAM actions required for the UpdateChannelFlow API call. */
	static readonly UPDATE_CHANNEL_FLOW: string[] = ["chime:UpdateChannelFlow"];
	/** IAM actions required for the UpdateChannelMessage API call. */
	static readonly UPDATE_CHANNEL_MESSAGE: string[] = [
		"chime:UpdateChannelMessage",
	];
	/** IAM actions required for the UpdateChannelReadMarker API call. */
	static readonly UPDATE_CHANNEL_READ_MARKER: string[] = [
		"chime:UpdateChannelReadMarker",
	];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UPDATE_GLOBAL_SETTINGS: string[] = [
		"chime:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateMediaInsightsPipelineConfiguration API call. */
	static readonly UPDATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION: string[] = [
		"iam:PassRole",
		"chime:UpdateMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the UpdateMediaInsightsPipelineStatus API call. */
	static readonly UPDATE_MEDIA_INSIGHTS_PIPELINE_STATUS: string[] = [
		"chime:UpdateMediaInsightsPipelineStatus",
	];
	/** IAM actions required for the UpdateMediaPipelineKinesisVideoStreamPool API call. */
	static readonly UPDATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL: string[] = [
		"chime:UpdateMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the UpdatePhoneNumber API call. */
	static readonly UPDATE_PHONE_NUMBER: string[] = ["chime:UpdatePhoneNumber"];
	/** IAM actions required for the UpdatePhoneNumberSettings API call. */
	static readonly UPDATE_PHONE_NUMBER_SETTINGS: string[] = [
		"chime:UpdatePhoneNumberSettings",
	];
	/** IAM actions required for the UpdateProxySession API call. */
	static readonly UPDATE_PROXY_SESSION: string[] = ["chime:UpdateProxySession"];
	/** IAM actions required for the UpdateRoom API call. */
	static readonly UPDATE_ROOM: string[] = ["chime:UpdateRoom"];
	/** IAM actions required for the UpdateRoomMembership API call. */
	static readonly UPDATE_ROOM_MEMBERSHIP: string[] = [
		"chime:UpdateRoomMembership",
	];
	/** IAM actions required for the UpdateSipMediaApplication API call. */
	static readonly UPDATE_SIP_MEDIA_APPLICATION: string[] = [
		"chime:UpdateSipMediaApplication",
	];
	/** IAM actions required for the UpdateSipMediaApplicationCall API call. */
	static readonly UPDATE_SIP_MEDIA_APPLICATION_CALL: string[] = [
		"chime:UpdateSipMediaApplicationCall",
	];
	/** IAM actions required for the UpdateSipRule API call. */
	static readonly UPDATE_SIP_RULE: string[] = ["chime:UpdateSipRule"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [];
	/** IAM actions required for the UpdateUserSettings API call. */
	static readonly UPDATE_USER_SETTINGS: string[] = [];
	/** IAM actions required for the UpdateVoiceConnector API call. */
	static readonly UPDATE_VOICE_CONNECTOR: string[] = [
		"chime:UpdateVoiceConnector",
	];
	/** IAM actions required for the UpdateVoiceConnectorGroup API call. */
	static readonly UPDATE_VOICE_CONNECTOR_GROUP: string[] = [
		"chime:UpdateVoiceConnectorGroup",
	];
	/** IAM actions required for the UpdateVoiceProfile API call. */
	static readonly UPDATE_VOICE_PROFILE: string[] = ["chime:UpdateVoiceProfile"];
	/** IAM actions required for the UpdateVoiceProfileDomain API call. */
	static readonly UPDATE_VOICE_PROFILE_DOMAIN: string[] = [
		"chime:UpdateVoiceProfileDomain",
	];
	/** IAM actions required for the ValidateE911Address API call. */
	static readonly VALIDATE_E911_ADDRESS: string[] = [
		"chime:ValidateE911Address",
	];
}

/**
 * Condition key constants and builders for chime.
 */
export class ChimeConditions {
	/** Condition keys applicable to the CreateAppInstance action. */
	static readonly CREATE_APP_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppInstanceBot action. */
	static readonly CREATE_APP_INSTANCE_BOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppInstanceUser action. */
	static readonly CREATE_APP_INSTANCE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelFlow action. */
	static readonly CREATE_CHANNEL_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectAnalyticsConnector action. */
	static readonly CREATE_CONNECT_ANALYTICS_CONNECTOR_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateConnectCallTransferConnector action. */
	static readonly CREATE_CONNECT_CALL_TRANSFER_CONNECTOR_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaCapturePipeline action. */
	static readonly CREATE_MEDIA_CAPTURE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaConcatenationPipeline action. */
	static readonly CREATE_MEDIA_CONCATENATION_PIPELINE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaInsightsPipeline action. */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaInsightsPipelineConfiguration action. */
	static readonly CREATE_MEDIA_INSIGHTS_PIPELINE_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaLiveConnectorPipeline action. */
	static readonly CREATE_MEDIA_LIVE_CONNECTOR_PIPELINE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaPipelineKinesisVideoStreamPool action. */
	static readonly CREATE_MEDIA_PIPELINE_KINESIS_VIDEO_STREAM_POOL_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaStreamPipeline action. */
	static readonly CREATE_MEDIA_STREAM_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMeeting action. */
	static readonly CREATE_MEETING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMeetingWithAttendees action. */
	static readonly CREATE_MEETING_WITH_ATTENDEES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSipMediaApplication action. */
	static readonly CREATE_SIP_MEDIA_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVoiceConnector action. */
	static readonly CREATE_VOICE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVoiceProfileDomain action. */
	static readonly CREATE_VOICE_PROFILE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMeeting action. */
	static readonly TAG_MEETING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
