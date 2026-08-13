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
	static readonly AcceptDelegate = "chime:AcceptDelegate";
	/** [Write] chime:ActivateUsers */
	static readonly ActivateUsers = "chime:ActivateUsers";
	/** [Write] chime:AddDomain */
	static readonly AddDomain = "chime:AddDomain";
	/** [Write] chime:AddOrUpdateGroups */
	static readonly AddOrUpdateGroups = "chime:AddOrUpdateGroups";
	/** [Write] chime:AssociateChannelFlow */
	static readonly AssociateChannelFlow = "chime:AssociateChannelFlow";
	/** [Write] chime:AssociatePhoneNumberWithUser */
	static readonly AssociatePhoneNumberWithUser =
		"chime:AssociatePhoneNumberWithUser";
	/** [Write] chime:AssociatePhoneNumbersWithVoiceConnector */
	static readonly AssociatePhoneNumbersWithVoiceConnector =
		"chime:AssociatePhoneNumbersWithVoiceConnector";
	/** [Write] chime:AssociatePhoneNumbersWithVoiceConnectorGroup */
	static readonly AssociatePhoneNumbersWithVoiceConnectorGroup =
		"chime:AssociatePhoneNumbersWithVoiceConnectorGroup";
	/** [Write] chime:AssociateSigninDelegateGroupsWithAccount */
	static readonly AssociateSigninDelegateGroupsWithAccount =
		"chime:AssociateSigninDelegateGroupsWithAccount";
	/** [Write] chime:AssociateVoiceConnectorConnect */
	static readonly AssociateVoiceConnectorConnect =
		"chime:AssociateVoiceConnectorConnect";
	/** [Write] chime:AuthorizeDirectory */
	static readonly AuthorizeDirectory = "chime:AuthorizeDirectory";
	/** [Write] chime:BatchCreateAttendee */
	static readonly BatchCreateAttendee = "chime:BatchCreateAttendee";
	/** [Write] chime:BatchCreateChannelMembership */
	static readonly BatchCreateChannelMembership =
		"chime:BatchCreateChannelMembership";
	/** [Write] chime:BatchCreateRoomMembership */
	static readonly BatchCreateRoomMembership = "chime:BatchCreateRoomMembership";
	/** [Write] chime:BatchDeletePhoneNumber */
	static readonly BatchDeletePhoneNumber = "chime:BatchDeletePhoneNumber";
	/** [Write] chime:BatchSuspendUser */
	static readonly BatchSuspendUser = "chime:BatchSuspendUser";
	/** [Write] chime:BatchUnsuspendUser */
	static readonly BatchUnsuspendUser = "chime:BatchUnsuspendUser";
	/** [Write] chime:BatchUpdateAttendeeCapabilitiesExcept */
	static readonly BatchUpdateAttendeeCapabilitiesExcept =
		"chime:BatchUpdateAttendeeCapabilitiesExcept";
	/** [Write] chime:BatchUpdatePhoneNumber */
	static readonly BatchUpdatePhoneNumber = "chime:BatchUpdatePhoneNumber";
	/** [Write] chime:BatchUpdateUser */
	static readonly BatchUpdateUser = "chime:BatchUpdateUser";
	/** [Write] chime:ChannelFlowCallback */
	static readonly ChannelFlowCallback = "chime:ChannelFlowCallback";
	/** [Write] chime:Connect */
	static readonly Connect = "chime:Connect";
	/** [Write] chime:ConnectDirectory */
	static readonly ConnectDirectory = "chime:ConnectDirectory";
	/** [Write] chime:CreateAccount */
	static readonly CreateAccount = "chime:CreateAccount";
	/** [Write] chime:CreateApiKey */
	static readonly CreateApiKey = "chime:CreateApiKey";
	/** [Write] chime:CreateAppInstance */
	static readonly CreateAppInstance = "chime:CreateAppInstance";
	/** [Write] chime:CreateAppInstanceAdmin */
	static readonly CreateAppInstanceAdmin = "chime:CreateAppInstanceAdmin";
	/** [Write] chime:CreateAppInstanceBot */
	static readonly CreateAppInstanceBot = "chime:CreateAppInstanceBot";
	/** [Write] chime:CreateAppInstanceUser */
	static readonly CreateAppInstanceUser = "chime:CreateAppInstanceUser";
	/** [Write] chime:CreateAttendee */
	static readonly CreateAttendee = "chime:CreateAttendee";
	/** [Write] chime:CreateBot */
	static readonly CreateBot = "chime:CreateBot";
	/** [Write] chime:CreateCDRBucket */
	static readonly CreateCDRBucket = "chime:CreateCDRBucket";
	/** [Write] chime:CreateChannel */
	static readonly CreateChannel = "chime:CreateChannel";
	/** [Write] chime:CreateChannelBan */
	static readonly CreateChannelBan = "chime:CreateChannelBan";
	/** [Write] chime:CreateChannelFlow */
	static readonly CreateChannelFlow = "chime:CreateChannelFlow";
	/** [Write] chime:CreateChannelMembership */
	static readonly CreateChannelMembership = "chime:CreateChannelMembership";
	/** [Write] chime:CreateChannelModerator */
	static readonly CreateChannelModerator = "chime:CreateChannelModerator";
	/** [Write] chime:CreateConnectAnalyticsConnector */
	static readonly CreateConnectAnalyticsConnector =
		"chime:CreateConnectAnalyticsConnector";
	/** [Write] chime:CreateConnectCallTransferConnector */
	static readonly CreateConnectCallTransferConnector =
		"chime:CreateConnectCallTransferConnector";
	/** [Write] chime:CreateMediaCapturePipeline */
	static readonly CreateMediaCapturePipeline =
		"chime:CreateMediaCapturePipeline";
	/** [Write] chime:CreateMediaConcatenationPipeline */
	static readonly CreateMediaConcatenationPipeline =
		"chime:CreateMediaConcatenationPipeline";
	/** [Write] chime:CreateMediaInsightsPipeline */
	static readonly CreateMediaInsightsPipeline =
		"chime:CreateMediaInsightsPipeline";
	/** [Write] chime:CreateMediaInsightsPipelineConfiguration */
	static readonly CreateMediaInsightsPipelineConfiguration =
		"chime:CreateMediaInsightsPipelineConfiguration";
	/** [Write] chime:CreateMediaLiveConnectorPipeline */
	static readonly CreateMediaLiveConnectorPipeline =
		"chime:CreateMediaLiveConnectorPipeline";
	/** [Write] chime:CreateMediaPipelineKinesisVideoStreamPool */
	static readonly CreateMediaPipelineKinesisVideoStreamPool =
		"chime:CreateMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:CreateMediaStreamPipeline */
	static readonly CreateMediaStreamPipeline = "chime:CreateMediaStreamPipeline";
	/** [Write] chime:CreateMeeting */
	static readonly CreateMeeting = "chime:CreateMeeting";
	/** [Write] chime:CreateMeetingDialOut */
	static readonly CreateMeetingDialOut = "chime:CreateMeetingDialOut";
	/** [Write] chime:CreateMeetingWithAttendees */
	static readonly CreateMeetingWithAttendees =
		"chime:CreateMeetingWithAttendees";
	/** [Write] chime:CreatePhoneNumberOrder */
	static readonly CreatePhoneNumberOrder = "chime:CreatePhoneNumberOrder";
	/** [Write] chime:CreateProxySession */
	static readonly CreateProxySession = "chime:CreateProxySession";
	/** [Write] chime:CreateRoom */
	static readonly CreateRoom = "chime:CreateRoom";
	/** [Write] chime:CreateRoomMembership */
	static readonly CreateRoomMembership = "chime:CreateRoomMembership";
	/** [Write] chime:CreateSipMediaApplication */
	static readonly CreateSipMediaApplication = "chime:CreateSipMediaApplication";
	/** [Write] chime:CreateSipMediaApplicationCall */
	static readonly CreateSipMediaApplicationCall =
		"chime:CreateSipMediaApplicationCall";
	/** [Write] chime:CreateSipRule */
	static readonly CreateSipRule = "chime:CreateSipRule";
	/** [Write] chime:CreateUser */
	static readonly CreateUser = "chime:CreateUser";
	/** [Write] chime:CreateVoiceConnector */
	static readonly CreateVoiceConnector = "chime:CreateVoiceConnector";
	/** [Write] chime:CreateVoiceConnectorGroup */
	static readonly CreateVoiceConnectorGroup = "chime:CreateVoiceConnectorGroup";
	/** [Write] chime:CreateVoiceProfile */
	static readonly CreateVoiceProfile = "chime:CreateVoiceProfile";
	/** [Write] chime:CreateVoiceProfileDomain */
	static readonly CreateVoiceProfileDomain = "chime:CreateVoiceProfileDomain";
	/** [Write] chime:DeleteAccount */
	static readonly DeleteAccount = "chime:DeleteAccount";
	/** [Write] chime:DeleteAccountOpenIdConfig */
	static readonly DeleteAccountOpenIdConfig = "chime:DeleteAccountOpenIdConfig";
	/** [Write] chime:DeleteApiKey */
	static readonly DeleteApiKey = "chime:DeleteApiKey";
	/** [Write] chime:DeleteAppInstance */
	static readonly DeleteAppInstance = "chime:DeleteAppInstance";
	/** [Write] chime:DeleteAppInstanceAdmin */
	static readonly DeleteAppInstanceAdmin = "chime:DeleteAppInstanceAdmin";
	/** [Write] chime:DeleteAppInstanceBot */
	static readonly DeleteAppInstanceBot = "chime:DeleteAppInstanceBot";
	/** [Write] chime:DeleteAppInstanceStreamingConfigurations */
	static readonly DeleteAppInstanceStreamingConfigurations =
		"chime:DeleteAppInstanceStreamingConfigurations";
	/** [Write] chime:DeleteAppInstanceUser */
	static readonly DeleteAppInstanceUser = "chime:DeleteAppInstanceUser";
	/** [Write] chime:DeleteAttendee */
	static readonly DeleteAttendee = "chime:DeleteAttendee";
	/** [Write] chime:DeleteCDRBucket */
	static readonly DeleteCDRBucket = "chime:DeleteCDRBucket";
	/** [Write] chime:DeleteChannel */
	static readonly DeleteChannel = "chime:DeleteChannel";
	/** [Write] chime:DeleteChannelBan */
	static readonly DeleteChannelBan = "chime:DeleteChannelBan";
	/** [Write] chime:DeleteChannelFlow */
	static readonly DeleteChannelFlow = "chime:DeleteChannelFlow";
	/** [Write] chime:DeleteChannelMembership */
	static readonly DeleteChannelMembership = "chime:DeleteChannelMembership";
	/** [Write] chime:DeleteChannelMessage */
	static readonly DeleteChannelMessage = "chime:DeleteChannelMessage";
	/** [Write] chime:DeleteChannelModerator */
	static readonly DeleteChannelModerator = "chime:DeleteChannelModerator";
	/** [Write] chime:DeleteDelegate */
	static readonly DeleteDelegate = "chime:DeleteDelegate";
	/** [Write] chime:DeleteDomain */
	static readonly DeleteDomain = "chime:DeleteDomain";
	/** [Write] chime:DeleteEventsConfiguration */
	static readonly DeleteEventsConfiguration = "chime:DeleteEventsConfiguration";
	/** [Write] chime:DeleteGroups */
	static readonly DeleteGroups = "chime:DeleteGroups";
	/** [Write] chime:DeleteMediaCapturePipeline */
	static readonly DeleteMediaCapturePipeline =
		"chime:DeleteMediaCapturePipeline";
	/** [Write] chime:DeleteMediaInsightsPipelineConfiguration */
	static readonly DeleteMediaInsightsPipelineConfiguration =
		"chime:DeleteMediaInsightsPipelineConfiguration";
	/** [Write] chime:DeleteMediaPipeline */
	static readonly DeleteMediaPipeline = "chime:DeleteMediaPipeline";
	/** [Write] chime:DeleteMediaPipelineKinesisVideoStreamPool */
	static readonly DeleteMediaPipelineKinesisVideoStreamPool =
		"chime:DeleteMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:DeleteMeeting */
	static readonly DeleteMeeting = "chime:DeleteMeeting";
	/** [Write] chime:DeleteMessagingStreamingConfigurations */
	static readonly DeleteMessagingStreamingConfigurations =
		"chime:DeleteMessagingStreamingConfigurations";
	/** [Write] chime:DeletePhoneNumber */
	static readonly DeletePhoneNumber = "chime:DeletePhoneNumber";
	/** [Write] chime:DeleteProxySession */
	static readonly DeleteProxySession = "chime:DeleteProxySession";
	/** [Write] chime:DeleteRoom */
	static readonly DeleteRoom = "chime:DeleteRoom";
	/** [Write] chime:DeleteRoomMembership */
	static readonly DeleteRoomMembership = "chime:DeleteRoomMembership";
	/** [Write] chime:DeleteSipMediaApplication */
	static readonly DeleteSipMediaApplication = "chime:DeleteSipMediaApplication";
	/** [Write] chime:DeleteSipRule */
	static readonly DeleteSipRule = "chime:DeleteSipRule";
	/** [Write] chime:DeleteVoiceConnector */
	static readonly DeleteVoiceConnector = "chime:DeleteVoiceConnector";
	/** [Write] chime:DeleteVoiceConnectorEmergencyCallingConfiguration */
	static readonly DeleteVoiceConnectorEmergencyCallingConfiguration =
		"chime:DeleteVoiceConnectorEmergencyCallingConfiguration";
	/** [Write] chime:DeleteVoiceConnectorExternalSystemsConfiguration */
	static readonly DeleteVoiceConnectorExternalSystemsConfiguration =
		"chime:DeleteVoiceConnectorExternalSystemsConfiguration";
	/** [Write] chime:DeleteVoiceConnectorGroup */
	static readonly DeleteVoiceConnectorGroup = "chime:DeleteVoiceConnectorGroup";
	/** [Write] chime:DeleteVoiceConnectorOrigination */
	static readonly DeleteVoiceConnectorOrigination =
		"chime:DeleteVoiceConnectorOrigination";
	/** [Write] chime:DeleteVoiceConnectorProxy */
	static readonly DeleteVoiceConnectorProxy = "chime:DeleteVoiceConnectorProxy";
	/** [Write] chime:DeleteVoiceConnectorStreamingConfiguration */
	static readonly DeleteVoiceConnectorStreamingConfiguration =
		"chime:DeleteVoiceConnectorStreamingConfiguration";
	/** [Write] chime:DeleteVoiceConnectorTermination */
	static readonly DeleteVoiceConnectorTermination =
		"chime:DeleteVoiceConnectorTermination";
	/** [Write] chime:DeleteVoiceConnectorTerminationCredentials */
	static readonly DeleteVoiceConnectorTerminationCredentials =
		"chime:DeleteVoiceConnectorTerminationCredentials";
	/** [Write] chime:DeleteVoiceProfile */
	static readonly DeleteVoiceProfile = "chime:DeleteVoiceProfile";
	/** [Write] chime:DeleteVoiceProfileDomain */
	static readonly DeleteVoiceProfileDomain = "chime:DeleteVoiceProfileDomain";
	/** [Write] chime:DeregisterAppInstanceUserEndpoint */
	static readonly DeregisterAppInstanceUserEndpoint =
		"chime:DeregisterAppInstanceUserEndpoint";
	/** [Read] chime:DescribeAppInstance */
	static readonly DescribeAppInstance = "chime:DescribeAppInstance";
	/** [Read] chime:DescribeAppInstanceAdmin */
	static readonly DescribeAppInstanceAdmin = "chime:DescribeAppInstanceAdmin";
	/** [Read] chime:DescribeAppInstanceBot */
	static readonly DescribeAppInstanceBot = "chime:DescribeAppInstanceBot";
	/** [Read] chime:DescribeAppInstanceUser */
	static readonly DescribeAppInstanceUser = "chime:DescribeAppInstanceUser";
	/** [Read] chime:DescribeAppInstanceUserEndpoint */
	static readonly DescribeAppInstanceUserEndpoint =
		"chime:DescribeAppInstanceUserEndpoint";
	/** [Read] chime:DescribeChannel */
	static readonly DescribeChannel = "chime:DescribeChannel";
	/** [Read] chime:DescribeChannelBan */
	static readonly DescribeChannelBan = "chime:DescribeChannelBan";
	/** [Read] chime:DescribeChannelFlow */
	static readonly DescribeChannelFlow = "chime:DescribeChannelFlow";
	/** [Read] chime:DescribeChannelMembership */
	static readonly DescribeChannelMembership = "chime:DescribeChannelMembership";
	/** [Read] chime:DescribeChannelMembershipForAppInstanceUser */
	static readonly DescribeChannelMembershipForAppInstanceUser =
		"chime:DescribeChannelMembershipForAppInstanceUser";
	/** [Read] chime:DescribeChannelModeratedByAppInstanceUser */
	static readonly DescribeChannelModeratedByAppInstanceUser =
		"chime:DescribeChannelModeratedByAppInstanceUser";
	/** [Read] chime:DescribeChannelModerator */
	static readonly DescribeChannelModerator = "chime:DescribeChannelModerator";
	/** [Write] chime:DisassociateChannelFlow */
	static readonly DisassociateChannelFlow = "chime:DisassociateChannelFlow";
	/** [Write] chime:DisassociatePhoneNumberFromUser */
	static readonly DisassociatePhoneNumberFromUser =
		"chime:DisassociatePhoneNumberFromUser";
	/** [Write] chime:DisassociatePhoneNumbersFromVoiceConnector */
	static readonly DisassociatePhoneNumbersFromVoiceConnector =
		"chime:DisassociatePhoneNumbersFromVoiceConnector";
	/** [Write] chime:DisassociatePhoneNumbersFromVoiceConnectorGroup */
	static readonly DisassociatePhoneNumbersFromVoiceConnectorGroup =
		"chime:DisassociatePhoneNumbersFromVoiceConnectorGroup";
	/** [Write] chime:DisassociateSigninDelegateGroupsFromAccount */
	static readonly DisassociateSigninDelegateGroupsFromAccount =
		"chime:DisassociateSigninDelegateGroupsFromAccount";
	/** [Write] chime:DisassociateVoiceConnectorConnect */
	static readonly DisassociateVoiceConnectorConnect =
		"chime:DisassociateVoiceConnectorConnect";
	/** [Write] chime:DisconnectDirectory */
	static readonly DisconnectDirectory = "chime:DisconnectDirectory";
	/** [Read] chime:GetAccount */
	static readonly actionGetAccount = "chime:GetAccount";
	/** [Read] chime:GetAccountResource */
	static readonly actionGetAccountResource = "chime:GetAccountResource";
	/** [Read] chime:GetAccountSettings */
	static readonly actionGetAccountSettings = "chime:GetAccountSettings";
	/** [Read] chime:GetAccountWithOpenIdConfig */
	static readonly actionGetAccountWithOpenIdConfig =
		"chime:GetAccountWithOpenIdConfig";
	/** [Read] chime:GetAppInstanceRetentionSettings */
	static readonly actionGetAppInstanceRetentionSettings =
		"chime:GetAppInstanceRetentionSettings";
	/** [Read] chime:GetAppInstanceStreamingConfigurations */
	static readonly actionGetAppInstanceStreamingConfigurations =
		"chime:GetAppInstanceStreamingConfigurations";
	/** [Read] chime:GetAttendee */
	static readonly actionGetAttendee = "chime:GetAttendee";
	/** [Read] chime:GetBot */
	static readonly actionGetBot = "chime:GetBot";
	/** [Read] chime:GetCDRBucket */
	static readonly actionGetCDRBucket = "chime:GetCDRBucket";
	/** [Read] chime:GetChannelMembershipPreferences */
	static readonly actionGetChannelMembershipPreferences =
		"chime:GetChannelMembershipPreferences";
	/** [Read] chime:GetChannelMessage */
	static readonly actionGetChannelMessage = "chime:GetChannelMessage";
	/** [Read] chime:GetChannelMessageStatus */
	static readonly actionGetChannelMessageStatus =
		"chime:GetChannelMessageStatus";
	/** [Read] chime:GetDomain */
	static readonly actionGetDomain = "chime:GetDomain";
	/** [Read] chime:GetEventsConfiguration */
	static readonly actionGetEventsConfiguration = "chime:GetEventsConfiguration";
	/** [Read] chime:GetGlobalSettings */
	static readonly actionGetGlobalSettings = "chime:GetGlobalSettings";
	/** [Read] chime:GetMediaCapturePipeline */
	static readonly actionGetMediaCapturePipeline =
		"chime:GetMediaCapturePipeline";
	/** [Read] chime:GetMediaInsightsPipelineConfiguration */
	static readonly actionGetMediaInsightsPipelineConfiguration =
		"chime:GetMediaInsightsPipelineConfiguration";
	/** [Read] chime:GetMediaPipeline */
	static readonly actionGetMediaPipeline = "chime:GetMediaPipeline";
	/** [Read] chime:GetMediaPipelineKinesisVideoStreamPool */
	static readonly actionGetMediaPipelineKinesisVideoStreamPool =
		"chime:GetMediaPipelineKinesisVideoStreamPool";
	/** [Read] chime:GetMeeting */
	static readonly actionGetMeeting = "chime:GetMeeting";
	/** [Read] chime:GetMeetingDetail */
	static readonly actionGetMeetingDetail = "chime:GetMeetingDetail";
	/** [Read] chime:GetMessagingSessionEndpoint */
	static readonly actionGetMessagingSessionEndpoint =
		"chime:GetMessagingSessionEndpoint";
	/** [Read] chime:GetMessagingStreamingConfigurations */
	static readonly actionGetMessagingStreamingConfigurations =
		"chime:GetMessagingStreamingConfigurations";
	/** [Read] chime:GetPhoneNumber */
	static readonly actionGetPhoneNumber = "chime:GetPhoneNumber";
	/** [Read] chime:GetPhoneNumberOrder */
	static readonly actionGetPhoneNumberOrder = "chime:GetPhoneNumberOrder";
	/** [Read] chime:GetPhoneNumberSettings */
	static readonly actionGetPhoneNumberSettings = "chime:GetPhoneNumberSettings";
	/** [Read] chime:GetProxySession */
	static readonly actionGetProxySession = "chime:GetProxySession";
	/** [Read] chime:GetRetentionSettings */
	static readonly actionGetRetentionSettings = "chime:GetRetentionSettings";
	/** [Read] chime:GetRoom */
	static readonly actionGetRoom = "chime:GetRoom";
	/** [Read] chime:GetSipMediaApplication */
	static readonly actionGetSipMediaApplication = "chime:GetSipMediaApplication";
	/** [Read] chime:GetSipMediaApplicationAlexaSkillConfiguration */
	static readonly actionGetSipMediaApplicationAlexaSkillConfiguration =
		"chime:GetSipMediaApplicationAlexaSkillConfiguration";
	/** [Read] chime:GetSipMediaApplicationLoggingConfiguration */
	static readonly actionGetSipMediaApplicationLoggingConfiguration =
		"chime:GetSipMediaApplicationLoggingConfiguration";
	/** [Read] chime:GetSipRule */
	static readonly actionGetSipRule = "chime:GetSipRule";
	/** [Read] chime:GetSpeakerSearchTask */
	static readonly actionGetSpeakerSearchTask = "chime:GetSpeakerSearchTask";
	/** [Read] chime:GetTelephonyLimits */
	static readonly actionGetTelephonyLimits = "chime:GetTelephonyLimits";
	/** [Read] chime:GetUser */
	static readonly actionGetUser = "chime:GetUser";
	/** [Read] chime:GetUserActivityReportData */
	static readonly actionGetUserActivityReportData =
		"chime:GetUserActivityReportData";
	/** [Read] chime:GetUserByEmail */
	static readonly actionGetUserByEmail = "chime:GetUserByEmail";
	/** [Read] chime:GetUserSettings */
	static readonly actionGetUserSettings = "chime:GetUserSettings";
	/** [Read] chime:GetVoiceConnector */
	static readonly actionGetVoiceConnector = "chime:GetVoiceConnector";
	/** [Read] chime:GetVoiceConnectorEmergencyCallingConfiguration */
	static readonly actionGetVoiceConnectorEmergencyCallingConfiguration =
		"chime:GetVoiceConnectorEmergencyCallingConfiguration";
	/** [Read] chime:GetVoiceConnectorExternalSystemsConfiguration */
	static readonly actionGetVoiceConnectorExternalSystemsConfiguration =
		"chime:GetVoiceConnectorExternalSystemsConfiguration";
	/** [Read] chime:GetVoiceConnectorGroup */
	static readonly actionGetVoiceConnectorGroup = "chime:GetVoiceConnectorGroup";
	/** [Read] chime:GetVoiceConnectorLoggingConfiguration */
	static readonly actionGetVoiceConnectorLoggingConfiguration =
		"chime:GetVoiceConnectorLoggingConfiguration";
	/** [Read] chime:GetVoiceConnectorOrigination */
	static readonly actionGetVoiceConnectorOrigination =
		"chime:GetVoiceConnectorOrigination";
	/** [Read] chime:GetVoiceConnectorProxy */
	static readonly actionGetVoiceConnectorProxy = "chime:GetVoiceConnectorProxy";
	/** [Read] chime:GetVoiceConnectorStreamingConfiguration */
	static readonly actionGetVoiceConnectorStreamingConfiguration =
		"chime:GetVoiceConnectorStreamingConfiguration";
	/** [Read] chime:GetVoiceConnectorTermination */
	static readonly actionGetVoiceConnectorTermination =
		"chime:GetVoiceConnectorTermination";
	/** [Read] chime:GetVoiceConnectorTerminationHealth */
	static readonly actionGetVoiceConnectorTerminationHealth =
		"chime:GetVoiceConnectorTerminationHealth";
	/** [Read] chime:GetVoiceProfile */
	static readonly actionGetVoiceProfile = "chime:GetVoiceProfile";
	/** [Read] chime:GetVoiceProfileDomain */
	static readonly actionGetVoiceProfileDomain = "chime:GetVoiceProfileDomain";
	/** [Read] chime:GetVoiceToneAnalysisTask */
	static readonly actionGetVoiceToneAnalysisTask =
		"chime:GetVoiceToneAnalysisTask";
	/** [Write] chime:InviteDelegate */
	static readonly InviteDelegate = "chime:InviteDelegate";
	/** [Write] chime:InviteUsers */
	static readonly InviteUsers = "chime:InviteUsers";
	/** [Write] chime:InviteUsersFromProvider */
	static readonly InviteUsersFromProvider = "chime:InviteUsersFromProvider";
	/** [List] chime:ListAccountUsageReportData */
	static readonly ListAccountUsageReportData =
		"chime:ListAccountUsageReportData";
	/** [List] chime:ListAccounts */
	static readonly ListAccounts = "chime:ListAccounts";
	/** [List] chime:ListApiKeys */
	static readonly ListApiKeys = "chime:ListApiKeys";
	/** [List] chime:ListAppInstanceAdmins */
	static readonly ListAppInstanceAdmins = "chime:ListAppInstanceAdmins";
	/** [List] chime:ListAppInstanceBots */
	static readonly ListAppInstanceBots = "chime:ListAppInstanceBots";
	/** [List] chime:ListAppInstanceUserEndpoints */
	static readonly ListAppInstanceUserEndpoints =
		"chime:ListAppInstanceUserEndpoints";
	/** [List] chime:ListAppInstanceUsers */
	static readonly ListAppInstanceUsers = "chime:ListAppInstanceUsers";
	/** [List] chime:ListAppInstances */
	static readonly ListAppInstances = "chime:ListAppInstances";
	/** [List] chime:ListAttendeeTags */
	static readonly ListAttendeeTags = "chime:ListAttendeeTags";
	/** [List] chime:ListAttendees */
	static readonly ListAttendees = "chime:ListAttendees";
	/** [List] chime:ListAvailableVoiceConnectorRegions */
	static readonly ListAvailableVoiceConnectorRegions =
		"chime:ListAvailableVoiceConnectorRegions";
	/** [List] chime:ListBots */
	static readonly ListBots = "chime:ListBots";
	/** [List] chime:ListCDRBucket */
	static readonly ListCDRBucket = "chime:ListCDRBucket";
	/** [List] chime:ListCallingRegions */
	static readonly ListCallingRegions = "chime:ListCallingRegions";
	/** [List] chime:ListChannelBans */
	static readonly ListChannelBans = "chime:ListChannelBans";
	/** [List] chime:ListChannelFlows */
	static readonly ListChannelFlows = "chime:ListChannelFlows";
	/** [List] chime:ListChannelMemberships */
	static readonly ListChannelMemberships = "chime:ListChannelMemberships";
	/** [List] chime:ListChannelMembershipsForAppInstanceUser */
	static readonly ListChannelMembershipsForAppInstanceUser =
		"chime:ListChannelMembershipsForAppInstanceUser";
	/** [Read] chime:ListChannelMessages */
	static readonly ListChannelMessages = "chime:ListChannelMessages";
	/** [List] chime:ListChannelModerators */
	static readonly ListChannelModerators = "chime:ListChannelModerators";
	/** [List] chime:ListChannels */
	static readonly ListChannels = "chime:ListChannels";
	/** [List] chime:ListChannelsAssociatedWithChannelFlow */
	static readonly ListChannelsAssociatedWithChannelFlow =
		"chime:ListChannelsAssociatedWithChannelFlow";
	/** [List] chime:ListChannelsModeratedByAppInstanceUser */
	static readonly ListChannelsModeratedByAppInstanceUser =
		"chime:ListChannelsModeratedByAppInstanceUser";
	/** [List] chime:ListDelegates */
	static readonly ListDelegates = "chime:ListDelegates";
	/** [List] chime:ListDirectories */
	static readonly ListDirectories = "chime:ListDirectories";
	/** [List] chime:ListDomains */
	static readonly ListDomains = "chime:ListDomains";
	/** [List] chime:ListGroups */
	static readonly ListGroups = "chime:ListGroups";
	/** [List] chime:ListMediaCapturePipelines */
	static readonly ListMediaCapturePipelines = "chime:ListMediaCapturePipelines";
	/** [List] chime:ListMediaInsightsPipelineConfigurations */
	static readonly ListMediaInsightsPipelineConfigurations =
		"chime:ListMediaInsightsPipelineConfigurations";
	/** [List] chime:ListMediaPipelineKinesisVideoStreamPools */
	static readonly ListMediaPipelineKinesisVideoStreamPools =
		"chime:ListMediaPipelineKinesisVideoStreamPools";
	/** [List] chime:ListMediaPipelines */
	static readonly ListMediaPipelines = "chime:ListMediaPipelines";
	/** [List] chime:ListMeetingEvents */
	static readonly ListMeetingEvents = "chime:ListMeetingEvents";
	/** [List] chime:ListMeetingTags */
	static readonly ListMeetingTags = "chime:ListMeetingTags";
	/** [List] chime:ListMeetings */
	static readonly ListMeetings = "chime:ListMeetings";
	/** [List] chime:ListMeetingsReportData */
	static readonly ListMeetingsReportData = "chime:ListMeetingsReportData";
	/** [List] chime:ListPhoneNumberOrders */
	static readonly ListPhoneNumberOrders = "chime:ListPhoneNumberOrders";
	/** [List] chime:ListPhoneNumbers */
	static readonly ListPhoneNumbers = "chime:ListPhoneNumbers";
	/** [List] chime:ListProxySessions */
	static readonly ListProxySessions = "chime:ListProxySessions";
	/** [List] chime:ListRoomMemberships */
	static readonly ListRoomMemberships = "chime:ListRoomMemberships";
	/** [List] chime:ListRooms */
	static readonly ListRooms = "chime:ListRooms";
	/** [List] chime:ListSipMediaApplications */
	static readonly ListSipMediaApplications = "chime:ListSipMediaApplications";
	/** [List] chime:ListSipRules */
	static readonly ListSipRules = "chime:ListSipRules";
	/** [List] chime:ListSubChannels */
	static readonly ListSubChannels = "chime:ListSubChannels";
	/** [List] chime:ListSupportedPhoneNumberCountries */
	static readonly ListSupportedPhoneNumberCountries =
		"chime:ListSupportedPhoneNumberCountries";
	/** [Read] chime:ListTagsForResource */
	static readonly ListTagsForResource = "chime:ListTagsForResource";
	/** [List] chime:ListUsers */
	static readonly ListUsers = "chime:ListUsers";
	/** [List] chime:ListVoiceConnectorGroups */
	static readonly ListVoiceConnectorGroups = "chime:ListVoiceConnectorGroups";
	/** [List] chime:ListVoiceConnectorTerminationCredentials */
	static readonly ListVoiceConnectorTerminationCredentials =
		"chime:ListVoiceConnectorTerminationCredentials";
	/** [List] chime:ListVoiceConnectors */
	static readonly ListVoiceConnectors = "chime:ListVoiceConnectors";
	/** [List] chime:ListVoiceProfileDomains */
	static readonly ListVoiceProfileDomains = "chime:ListVoiceProfileDomains";
	/** [List] chime:ListVoiceProfiles */
	static readonly ListVoiceProfiles = "chime:ListVoiceProfiles";
	/** [Write] chime:LogoutUser */
	static readonly LogoutUser = "chime:LogoutUser";
	/** [Write] chime:PutAppInstanceRetentionSettings */
	static readonly PutAppInstanceRetentionSettings =
		"chime:PutAppInstanceRetentionSettings";
	/** [Write] chime:PutAppInstanceStreamingConfigurations */
	static readonly PutAppInstanceStreamingConfigurations =
		"chime:PutAppInstanceStreamingConfigurations";
	/** [Write] chime:PutAppInstanceUserExpirationSettings */
	static readonly PutAppInstanceUserExpirationSettings =
		"chime:PutAppInstanceUserExpirationSettings";
	/** [Write] chime:PutChannelExpirationSettings */
	static readonly PutChannelExpirationSettings =
		"chime:PutChannelExpirationSettings";
	/** [Write] chime:PutChannelMembershipPreferences */
	static readonly PutChannelMembershipPreferences =
		"chime:PutChannelMembershipPreferences";
	/** [Write] chime:PutEventsConfiguration */
	static readonly PutEventsConfiguration = "chime:PutEventsConfiguration";
	/** [Write] chime:PutMessagingStreamingConfigurations */
	static readonly PutMessagingStreamingConfigurations =
		"chime:PutMessagingStreamingConfigurations";
	/** [Write] chime:PutRetentionSettings */
	static readonly PutRetentionSettings = "chime:PutRetentionSettings";
	/** [Write] chime:PutSipMediaApplicationAlexaSkillConfiguration */
	static readonly PutSipMediaApplicationAlexaSkillConfiguration =
		"chime:PutSipMediaApplicationAlexaSkillConfiguration";
	/** [Write] chime:PutSipMediaApplicationLoggingConfiguration */
	static readonly PutSipMediaApplicationLoggingConfiguration =
		"chime:PutSipMediaApplicationLoggingConfiguration";
	/** [Write] chime:PutVoiceConnectorEmergencyCallingConfiguration */
	static readonly PutVoiceConnectorEmergencyCallingConfiguration =
		"chime:PutVoiceConnectorEmergencyCallingConfiguration";
	/** [Write] chime:PutVoiceConnectorExternalSystemsConfiguration */
	static readonly PutVoiceConnectorExternalSystemsConfiguration =
		"chime:PutVoiceConnectorExternalSystemsConfiguration";
	/** [Write] chime:PutVoiceConnectorLoggingConfiguration */
	static readonly PutVoiceConnectorLoggingConfiguration =
		"chime:PutVoiceConnectorLoggingConfiguration";
	/** [Write] chime:PutVoiceConnectorOrigination */
	static readonly PutVoiceConnectorOrigination =
		"chime:PutVoiceConnectorOrigination";
	/** [Write] chime:PutVoiceConnectorProxy */
	static readonly PutVoiceConnectorProxy = "chime:PutVoiceConnectorProxy";
	/** [Write] chime:PutVoiceConnectorStreamingConfiguration */
	static readonly PutVoiceConnectorStreamingConfiguration =
		"chime:PutVoiceConnectorStreamingConfiguration";
	/** [Write] chime:PutVoiceConnectorTermination */
	static readonly PutVoiceConnectorTermination =
		"chime:PutVoiceConnectorTermination";
	/** [Write] chime:PutVoiceConnectorTerminationCredentials */
	static readonly PutVoiceConnectorTerminationCredentials =
		"chime:PutVoiceConnectorTerminationCredentials";
	/** [Write] chime:RedactChannelMessage */
	static readonly RedactChannelMessage = "chime:RedactChannelMessage";
	/** [Write] chime:RedactConversationMessage */
	static readonly RedactConversationMessage = "chime:RedactConversationMessage";
	/** [Write] chime:RedactRoomMessage */
	static readonly RedactRoomMessage = "chime:RedactRoomMessage";
	/** [Write] chime:RegenerateSecurityToken */
	static readonly RegenerateSecurityToken = "chime:RegenerateSecurityToken";
	/** [Write] chime:RegisterAppInstanceUserEndpoint */
	static readonly RegisterAppInstanceUserEndpoint =
		"chime:RegisterAppInstanceUserEndpoint";
	/** [Write] chime:RenameAccount */
	static readonly RenameAccount = "chime:RenameAccount";
	/** [Write] chime:RenewDelegate */
	static readonly RenewDelegate = "chime:RenewDelegate";
	/** [Write] chime:ResetAccountResource */
	static readonly ResetAccountResource = "chime:ResetAccountResource";
	/** [Write] chime:ResetPersonalPIN */
	static readonly ResetPersonalPIN = "chime:ResetPersonalPIN";
	/** [Write] chime:RestorePhoneNumber */
	static readonly RestorePhoneNumber = "chime:RestorePhoneNumber";
	/** [Read] chime:RetrieveDataExports */
	static readonly RetrieveDataExports = "chime:RetrieveDataExports";
	/** [Read] chime:SearchAvailablePhoneNumbers */
	static readonly SearchAvailablePhoneNumbers =
		"chime:SearchAvailablePhoneNumbers";
	/** [List] chime:SearchChannels */
	static readonly SearchChannels = "chime:SearchChannels";
	/** [Write] chime:SendChannelMessage */
	static readonly SendChannelMessage = "chime:SendChannelMessage";
	/** [Write] chime:StartDataExport */
	static readonly StartDataExport = "chime:StartDataExport";
	/** [Write] chime:StartMeetingTranscription */
	static readonly StartMeetingTranscription = "chime:StartMeetingTranscription";
	/** [Write] chime:StartSpeakerSearchTask */
	static readonly StartSpeakerSearchTask = "chime:StartSpeakerSearchTask";
	/** [Write] chime:StartVoiceToneAnalysisTask */
	static readonly StartVoiceToneAnalysisTask =
		"chime:StartVoiceToneAnalysisTask";
	/** [Write] chime:StopMeetingTranscription */
	static readonly StopMeetingTranscription = "chime:StopMeetingTranscription";
	/** [Write] chime:StopSpeakerSearchTask */
	static readonly StopSpeakerSearchTask = "chime:StopSpeakerSearchTask";
	/** [Write] chime:StopVoiceToneAnalysisTask */
	static readonly StopVoiceToneAnalysisTask = "chime:StopVoiceToneAnalysisTask";
	/** [Write] chime:SubmitSupportRequest */
	static readonly SubmitSupportRequest = "chime:SubmitSupportRequest";
	/** [Write] chime:SuspendUsers */
	static readonly SuspendUsers = "chime:SuspendUsers";
	/** [Tagging] chime:TagAttendee */
	static readonly TagAttendee = "chime:TagAttendee";
	/** [Tagging] chime:TagMeeting */
	static readonly TagMeeting = "chime:TagMeeting";
	/** [Tagging] chime:TagResource */
	static readonly TagResource = "chime:TagResource";
	/** [Write] chime:UnauthorizeDirectory */
	static readonly UnauthorizeDirectory = "chime:UnauthorizeDirectory";
	/** [Tagging] chime:UntagAttendee */
	static readonly UntagAttendee = "chime:UntagAttendee";
	/** [Tagging] chime:UntagMeeting */
	static readonly UntagMeeting = "chime:UntagMeeting";
	/** [Tagging] chime:UntagResource */
	static readonly UntagResource = "chime:UntagResource";
	/** [Write] chime:UpdateAccount */
	static readonly UpdateAccount = "chime:UpdateAccount";
	/** [Write] chime:UpdateAccountOpenIdConfig */
	static readonly UpdateAccountOpenIdConfig = "chime:UpdateAccountOpenIdConfig";
	/** [Write] chime:UpdateAccountResource */
	static readonly UpdateAccountResource = "chime:UpdateAccountResource";
	/** [Write] chime:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "chime:UpdateAccountSettings";
	/** [Write] chime:UpdateAppInstance */
	static readonly UpdateAppInstance = "chime:UpdateAppInstance";
	/** [Write] chime:UpdateAppInstanceBot */
	static readonly UpdateAppInstanceBot = "chime:UpdateAppInstanceBot";
	/** [Write] chime:UpdateAppInstanceUser */
	static readonly UpdateAppInstanceUser = "chime:UpdateAppInstanceUser";
	/** [Write] chime:UpdateAppInstanceUserEndpoint */
	static readonly UpdateAppInstanceUserEndpoint =
		"chime:UpdateAppInstanceUserEndpoint";
	/** [Write] chime:UpdateAttendeeCapabilities */
	static readonly UpdateAttendeeCapabilities =
		"chime:UpdateAttendeeCapabilities";
	/** [Write] chime:UpdateBot */
	static readonly UpdateBot = "chime:UpdateBot";
	/** [Write] chime:UpdateCDRSettings */
	static readonly UpdateCDRSettings = "chime:UpdateCDRSettings";
	/** [Write] chime:UpdateChannel */
	static readonly UpdateChannel = "chime:UpdateChannel";
	/** [Write] chime:UpdateChannelFlow */
	static readonly UpdateChannelFlow = "chime:UpdateChannelFlow";
	/** [Write] chime:UpdateChannelMessage */
	static readonly UpdateChannelMessage = "chime:UpdateChannelMessage";
	/** [Write] chime:UpdateChannelReadMarker */
	static readonly UpdateChannelReadMarker = "chime:UpdateChannelReadMarker";
	/** [Write] chime:UpdateGlobalSettings */
	static readonly UpdateGlobalSettings = "chime:UpdateGlobalSettings";
	/** [Write] chime:UpdateMediaInsightsPipelineConfiguration */
	static readonly UpdateMediaInsightsPipelineConfiguration =
		"chime:UpdateMediaInsightsPipelineConfiguration";
	/** [Write] chime:UpdateMediaInsightsPipelineStatus */
	static readonly UpdateMediaInsightsPipelineStatus =
		"chime:UpdateMediaInsightsPipelineStatus";
	/** [Write] chime:UpdateMediaPipelineKinesisVideoStreamPool */
	static readonly UpdateMediaPipelineKinesisVideoStreamPool =
		"chime:UpdateMediaPipelineKinesisVideoStreamPool";
	/** [Write] chime:UpdatePhoneNumber */
	static readonly UpdatePhoneNumber = "chime:UpdatePhoneNumber";
	/** [Write] chime:UpdatePhoneNumberSettings */
	static readonly UpdatePhoneNumberSettings = "chime:UpdatePhoneNumberSettings";
	/** [Write] chime:UpdateProxySession */
	static readonly UpdateProxySession = "chime:UpdateProxySession";
	/** [Write] chime:UpdateRoom */
	static readonly UpdateRoom = "chime:UpdateRoom";
	/** [Write] chime:UpdateRoomMembership */
	static readonly UpdateRoomMembership = "chime:UpdateRoomMembership";
	/** [Write] chime:UpdateSipMediaApplication */
	static readonly UpdateSipMediaApplication = "chime:UpdateSipMediaApplication";
	/** [Write] chime:UpdateSipMediaApplicationCall */
	static readonly UpdateSipMediaApplicationCall =
		"chime:UpdateSipMediaApplicationCall";
	/** [Write] chime:UpdateSipRule */
	static readonly UpdateSipRule = "chime:UpdateSipRule";
	/** [Write] chime:UpdateSupportedLicenses */
	static readonly UpdateSupportedLicenses = "chime:UpdateSupportedLicenses";
	/** [Write] chime:UpdateUser */
	static readonly UpdateUser = "chime:UpdateUser";
	/** [Write] chime:UpdateUserLicenses */
	static readonly UpdateUserLicenses = "chime:UpdateUserLicenses";
	/** [Write] chime:UpdateUserSettings */
	static readonly UpdateUserSettings = "chime:UpdateUserSettings";
	/** [Write] chime:UpdateVoiceConnector */
	static readonly UpdateVoiceConnector = "chime:UpdateVoiceConnector";
	/** [Write] chime:UpdateVoiceConnectorGroup */
	static readonly UpdateVoiceConnectorGroup = "chime:UpdateVoiceConnectorGroup";
	/** [Write] chime:UpdateVoiceProfile */
	static readonly UpdateVoiceProfile = "chime:UpdateVoiceProfile";
	/** [Write] chime:UpdateVoiceProfileDomain */
	static readonly UpdateVoiceProfileDomain = "chime:UpdateVoiceProfileDomain";
	/** [Read] chime:ValidateAccountResource */
	static readonly ValidateAccountResource = "chime:ValidateAccountResource";
	/** [Read] chime:ValidateE911Address */
	static readonly ValidateE911Address = "chime:ValidateE911Address";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ChimeActions.DescribeAppInstance,
		ChimeActions.DescribeAppInstanceAdmin,
		ChimeActions.DescribeAppInstanceBot,
		ChimeActions.DescribeAppInstanceUser,
		ChimeActions.DescribeAppInstanceUserEndpoint,
		ChimeActions.DescribeChannel,
		ChimeActions.DescribeChannelBan,
		ChimeActions.DescribeChannelFlow,
		ChimeActions.DescribeChannelMembership,
		ChimeActions.DescribeChannelMembershipForAppInstanceUser,
		ChimeActions.DescribeChannelModeratedByAppInstanceUser,
		ChimeActions.DescribeChannelModerator,
		ChimeActions.actionGetAccount,
		ChimeActions.actionGetAccountResource,
		ChimeActions.actionGetAccountSettings,
		ChimeActions.actionGetAccountWithOpenIdConfig,
		ChimeActions.actionGetAppInstanceRetentionSettings,
		ChimeActions.actionGetAppInstanceStreamingConfigurations,
		ChimeActions.actionGetAttendee,
		ChimeActions.actionGetBot,
		ChimeActions.actionGetCDRBucket,
		ChimeActions.actionGetChannelMembershipPreferences,
		ChimeActions.actionGetChannelMessage,
		ChimeActions.actionGetChannelMessageStatus,
		ChimeActions.actionGetDomain,
		ChimeActions.actionGetEventsConfiguration,
		ChimeActions.actionGetGlobalSettings,
		ChimeActions.actionGetMediaCapturePipeline,
		ChimeActions.actionGetMediaInsightsPipelineConfiguration,
		ChimeActions.actionGetMediaPipeline,
		ChimeActions.actionGetMediaPipelineKinesisVideoStreamPool,
		ChimeActions.actionGetMeeting,
		ChimeActions.actionGetMeetingDetail,
		ChimeActions.actionGetMessagingSessionEndpoint,
		ChimeActions.actionGetMessagingStreamingConfigurations,
		ChimeActions.actionGetPhoneNumber,
		ChimeActions.actionGetPhoneNumberOrder,
		ChimeActions.actionGetPhoneNumberSettings,
		ChimeActions.actionGetProxySession,
		ChimeActions.actionGetRetentionSettings,
		ChimeActions.actionGetRoom,
		ChimeActions.actionGetSipMediaApplication,
		ChimeActions.actionGetSipMediaApplicationAlexaSkillConfiguration,
		ChimeActions.actionGetSipMediaApplicationLoggingConfiguration,
		ChimeActions.actionGetSipRule,
		ChimeActions.actionGetSpeakerSearchTask,
		ChimeActions.actionGetTelephonyLimits,
		ChimeActions.actionGetUser,
		ChimeActions.actionGetUserActivityReportData,
		ChimeActions.actionGetUserByEmail,
		ChimeActions.actionGetUserSettings,
		ChimeActions.actionGetVoiceConnector,
		ChimeActions.actionGetVoiceConnectorEmergencyCallingConfiguration,
		ChimeActions.actionGetVoiceConnectorExternalSystemsConfiguration,
		ChimeActions.actionGetVoiceConnectorGroup,
		ChimeActions.actionGetVoiceConnectorLoggingConfiguration,
		ChimeActions.actionGetVoiceConnectorOrigination,
		ChimeActions.actionGetVoiceConnectorProxy,
		ChimeActions.actionGetVoiceConnectorStreamingConfiguration,
		ChimeActions.actionGetVoiceConnectorTermination,
		ChimeActions.actionGetVoiceConnectorTerminationHealth,
		ChimeActions.actionGetVoiceProfile,
		ChimeActions.actionGetVoiceProfileDomain,
		ChimeActions.actionGetVoiceToneAnalysisTask,
		ChimeActions.ListChannelMessages,
		ChimeActions.ListTagsForResource,
		ChimeActions.RetrieveDataExports,
		ChimeActions.SearchAvailablePhoneNumbers,
		ChimeActions.ValidateAccountResource,
		ChimeActions.ValidateE911Address,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ChimeActions.AcceptDelegate,
		ChimeActions.ActivateUsers,
		ChimeActions.AddDomain,
		ChimeActions.AddOrUpdateGroups,
		ChimeActions.AssociateChannelFlow,
		ChimeActions.AssociatePhoneNumberWithUser,
		ChimeActions.AssociatePhoneNumbersWithVoiceConnector,
		ChimeActions.AssociatePhoneNumbersWithVoiceConnectorGroup,
		ChimeActions.AssociateSigninDelegateGroupsWithAccount,
		ChimeActions.AssociateVoiceConnectorConnect,
		ChimeActions.AuthorizeDirectory,
		ChimeActions.BatchCreateAttendee,
		ChimeActions.BatchCreateChannelMembership,
		ChimeActions.BatchCreateRoomMembership,
		ChimeActions.BatchDeletePhoneNumber,
		ChimeActions.BatchSuspendUser,
		ChimeActions.BatchUnsuspendUser,
		ChimeActions.BatchUpdateAttendeeCapabilitiesExcept,
		ChimeActions.BatchUpdatePhoneNumber,
		ChimeActions.BatchUpdateUser,
		ChimeActions.ChannelFlowCallback,
		ChimeActions.Connect,
		ChimeActions.ConnectDirectory,
		ChimeActions.CreateAccount,
		ChimeActions.CreateApiKey,
		ChimeActions.CreateAppInstance,
		ChimeActions.CreateAppInstanceAdmin,
		ChimeActions.CreateAppInstanceBot,
		ChimeActions.CreateAppInstanceUser,
		ChimeActions.CreateAttendee,
		ChimeActions.CreateBot,
		ChimeActions.CreateCDRBucket,
		ChimeActions.CreateChannel,
		ChimeActions.CreateChannelBan,
		ChimeActions.CreateChannelFlow,
		ChimeActions.CreateChannelMembership,
		ChimeActions.CreateChannelModerator,
		ChimeActions.CreateConnectAnalyticsConnector,
		ChimeActions.CreateConnectCallTransferConnector,
		ChimeActions.CreateMediaCapturePipeline,
		ChimeActions.CreateMediaConcatenationPipeline,
		ChimeActions.CreateMediaInsightsPipeline,
		ChimeActions.CreateMediaInsightsPipelineConfiguration,
		ChimeActions.CreateMediaLiveConnectorPipeline,
		ChimeActions.CreateMediaPipelineKinesisVideoStreamPool,
		ChimeActions.CreateMediaStreamPipeline,
		ChimeActions.CreateMeeting,
		ChimeActions.CreateMeetingDialOut,
		ChimeActions.CreateMeetingWithAttendees,
		ChimeActions.CreatePhoneNumberOrder,
		ChimeActions.CreateProxySession,
		ChimeActions.CreateRoom,
		ChimeActions.CreateRoomMembership,
		ChimeActions.CreateSipMediaApplication,
		ChimeActions.CreateSipMediaApplicationCall,
		ChimeActions.CreateSipRule,
		ChimeActions.CreateUser,
		ChimeActions.CreateVoiceConnector,
		ChimeActions.CreateVoiceConnectorGroup,
		ChimeActions.CreateVoiceProfile,
		ChimeActions.CreateVoiceProfileDomain,
		ChimeActions.DeleteAccount,
		ChimeActions.DeleteAccountOpenIdConfig,
		ChimeActions.DeleteApiKey,
		ChimeActions.DeleteAppInstance,
		ChimeActions.DeleteAppInstanceAdmin,
		ChimeActions.DeleteAppInstanceBot,
		ChimeActions.DeleteAppInstanceStreamingConfigurations,
		ChimeActions.DeleteAppInstanceUser,
		ChimeActions.DeleteAttendee,
		ChimeActions.DeleteCDRBucket,
		ChimeActions.DeleteChannel,
		ChimeActions.DeleteChannelBan,
		ChimeActions.DeleteChannelFlow,
		ChimeActions.DeleteChannelMembership,
		ChimeActions.DeleteChannelMessage,
		ChimeActions.DeleteChannelModerator,
		ChimeActions.DeleteDelegate,
		ChimeActions.DeleteDomain,
		ChimeActions.DeleteEventsConfiguration,
		ChimeActions.DeleteGroups,
		ChimeActions.DeleteMediaCapturePipeline,
		ChimeActions.DeleteMediaInsightsPipelineConfiguration,
		ChimeActions.DeleteMediaPipeline,
		ChimeActions.DeleteMediaPipelineKinesisVideoStreamPool,
		ChimeActions.DeleteMeeting,
		ChimeActions.DeleteMessagingStreamingConfigurations,
		ChimeActions.DeletePhoneNumber,
		ChimeActions.DeleteProxySession,
		ChimeActions.DeleteRoom,
		ChimeActions.DeleteRoomMembership,
		ChimeActions.DeleteSipMediaApplication,
		ChimeActions.DeleteSipRule,
		ChimeActions.DeleteVoiceConnector,
		ChimeActions.DeleteVoiceConnectorEmergencyCallingConfiguration,
		ChimeActions.DeleteVoiceConnectorExternalSystemsConfiguration,
		ChimeActions.DeleteVoiceConnectorGroup,
		ChimeActions.DeleteVoiceConnectorOrigination,
		ChimeActions.DeleteVoiceConnectorProxy,
		ChimeActions.DeleteVoiceConnectorStreamingConfiguration,
		ChimeActions.DeleteVoiceConnectorTermination,
		ChimeActions.DeleteVoiceConnectorTerminationCredentials,
		ChimeActions.DeleteVoiceProfile,
		ChimeActions.DeleteVoiceProfileDomain,
		ChimeActions.DeregisterAppInstanceUserEndpoint,
		ChimeActions.DisassociateChannelFlow,
		ChimeActions.DisassociatePhoneNumberFromUser,
		ChimeActions.DisassociatePhoneNumbersFromVoiceConnector,
		ChimeActions.DisassociatePhoneNumbersFromVoiceConnectorGroup,
		ChimeActions.DisassociateSigninDelegateGroupsFromAccount,
		ChimeActions.DisassociateVoiceConnectorConnect,
		ChimeActions.DisconnectDirectory,
		ChimeActions.InviteDelegate,
		ChimeActions.InviteUsers,
		ChimeActions.InviteUsersFromProvider,
		ChimeActions.LogoutUser,
		ChimeActions.PutAppInstanceRetentionSettings,
		ChimeActions.PutAppInstanceStreamingConfigurations,
		ChimeActions.PutAppInstanceUserExpirationSettings,
		ChimeActions.PutChannelExpirationSettings,
		ChimeActions.PutChannelMembershipPreferences,
		ChimeActions.PutEventsConfiguration,
		ChimeActions.PutMessagingStreamingConfigurations,
		ChimeActions.PutRetentionSettings,
		ChimeActions.PutSipMediaApplicationAlexaSkillConfiguration,
		ChimeActions.PutSipMediaApplicationLoggingConfiguration,
		ChimeActions.PutVoiceConnectorEmergencyCallingConfiguration,
		ChimeActions.PutVoiceConnectorExternalSystemsConfiguration,
		ChimeActions.PutVoiceConnectorLoggingConfiguration,
		ChimeActions.PutVoiceConnectorOrigination,
		ChimeActions.PutVoiceConnectorProxy,
		ChimeActions.PutVoiceConnectorStreamingConfiguration,
		ChimeActions.PutVoiceConnectorTermination,
		ChimeActions.PutVoiceConnectorTerminationCredentials,
		ChimeActions.RedactChannelMessage,
		ChimeActions.RedactConversationMessage,
		ChimeActions.RedactRoomMessage,
		ChimeActions.RegenerateSecurityToken,
		ChimeActions.RegisterAppInstanceUserEndpoint,
		ChimeActions.RenameAccount,
		ChimeActions.RenewDelegate,
		ChimeActions.ResetAccountResource,
		ChimeActions.ResetPersonalPIN,
		ChimeActions.RestorePhoneNumber,
		ChimeActions.SendChannelMessage,
		ChimeActions.StartDataExport,
		ChimeActions.StartMeetingTranscription,
		ChimeActions.StartSpeakerSearchTask,
		ChimeActions.StartVoiceToneAnalysisTask,
		ChimeActions.StopMeetingTranscription,
		ChimeActions.StopSpeakerSearchTask,
		ChimeActions.StopVoiceToneAnalysisTask,
		ChimeActions.SubmitSupportRequest,
		ChimeActions.SuspendUsers,
		ChimeActions.UnauthorizeDirectory,
		ChimeActions.UpdateAccount,
		ChimeActions.UpdateAccountOpenIdConfig,
		ChimeActions.UpdateAccountResource,
		ChimeActions.UpdateAccountSettings,
		ChimeActions.UpdateAppInstance,
		ChimeActions.UpdateAppInstanceBot,
		ChimeActions.UpdateAppInstanceUser,
		ChimeActions.UpdateAppInstanceUserEndpoint,
		ChimeActions.UpdateAttendeeCapabilities,
		ChimeActions.UpdateBot,
		ChimeActions.UpdateCDRSettings,
		ChimeActions.UpdateChannel,
		ChimeActions.UpdateChannelFlow,
		ChimeActions.UpdateChannelMessage,
		ChimeActions.UpdateChannelReadMarker,
		ChimeActions.UpdateGlobalSettings,
		ChimeActions.UpdateMediaInsightsPipelineConfiguration,
		ChimeActions.UpdateMediaInsightsPipelineStatus,
		ChimeActions.UpdateMediaPipelineKinesisVideoStreamPool,
		ChimeActions.UpdatePhoneNumber,
		ChimeActions.UpdatePhoneNumberSettings,
		ChimeActions.UpdateProxySession,
		ChimeActions.UpdateRoom,
		ChimeActions.UpdateRoomMembership,
		ChimeActions.UpdateSipMediaApplication,
		ChimeActions.UpdateSipMediaApplicationCall,
		ChimeActions.UpdateSipRule,
		ChimeActions.UpdateSupportedLicenses,
		ChimeActions.UpdateUser,
		ChimeActions.UpdateUserLicenses,
		ChimeActions.UpdateUserSettings,
		ChimeActions.UpdateVoiceConnector,
		ChimeActions.UpdateVoiceConnectorGroup,
		ChimeActions.UpdateVoiceProfile,
		ChimeActions.UpdateVoiceProfileDomain,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ChimeActions.ListAccountUsageReportData,
		ChimeActions.ListAccounts,
		ChimeActions.ListApiKeys,
		ChimeActions.ListAppInstanceAdmins,
		ChimeActions.ListAppInstanceBots,
		ChimeActions.ListAppInstanceUserEndpoints,
		ChimeActions.ListAppInstanceUsers,
		ChimeActions.ListAppInstances,
		ChimeActions.ListAttendeeTags,
		ChimeActions.ListAttendees,
		ChimeActions.ListAvailableVoiceConnectorRegions,
		ChimeActions.ListBots,
		ChimeActions.ListCDRBucket,
		ChimeActions.ListCallingRegions,
		ChimeActions.ListChannelBans,
		ChimeActions.ListChannelFlows,
		ChimeActions.ListChannelMemberships,
		ChimeActions.ListChannelMembershipsForAppInstanceUser,
		ChimeActions.ListChannelModerators,
		ChimeActions.ListChannels,
		ChimeActions.ListChannelsAssociatedWithChannelFlow,
		ChimeActions.ListChannelsModeratedByAppInstanceUser,
		ChimeActions.ListDelegates,
		ChimeActions.ListDirectories,
		ChimeActions.ListDomains,
		ChimeActions.ListGroups,
		ChimeActions.ListMediaCapturePipelines,
		ChimeActions.ListMediaInsightsPipelineConfigurations,
		ChimeActions.ListMediaPipelineKinesisVideoStreamPools,
		ChimeActions.ListMediaPipelines,
		ChimeActions.ListMeetingEvents,
		ChimeActions.ListMeetingTags,
		ChimeActions.ListMeetings,
		ChimeActions.ListMeetingsReportData,
		ChimeActions.ListPhoneNumberOrders,
		ChimeActions.ListPhoneNumbers,
		ChimeActions.ListProxySessions,
		ChimeActions.ListRoomMemberships,
		ChimeActions.ListRooms,
		ChimeActions.ListSipMediaApplications,
		ChimeActions.ListSipRules,
		ChimeActions.ListSubChannels,
		ChimeActions.ListSupportedPhoneNumberCountries,
		ChimeActions.ListUsers,
		ChimeActions.ListVoiceConnectorGroups,
		ChimeActions.ListVoiceConnectorTerminationCredentials,
		ChimeActions.ListVoiceConnectors,
		ChimeActions.ListVoiceProfileDomains,
		ChimeActions.ListVoiceProfiles,
		ChimeActions.SearchChannels,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ChimeActions.TagAttendee,
		ChimeActions.TagMeeting,
		ChimeActions.TagResource,
		ChimeActions.UntagAttendee,
		ChimeActions.UntagMeeting,
		ChimeActions.UntagResource,
	];
}

/**
 * Properties for building a app-instance ARN.
 */
export interface ChimeAppInstanceArnProps {
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
}

/**
 * Parsed components of a app-instance ARN.
 */
export interface ChimeAppInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AppInstanceId component. */
	readonly appInstanceId: string;
}

/**
 * Properties for building a app-instance-bot ARN.
 */
export interface ChimeAppInstanceBotArnProps {
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
}

/**
 * Parsed components of a app-instance-bot ARN.
 */
export interface ChimeAppInstanceBotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AppInstanceId component. */
	readonly appInstanceId: string;
	/** The AppInstanceBotId component. */
	readonly appInstanceBotId: string;
}

/**
 * Properties for building a app-instance-user ARN.
 */
export interface ChimeAppInstanceUserArnProps {
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
}

/**
 * Parsed components of a app-instance-user ARN.
 */
export interface ChimeAppInstanceUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AppInstanceId component. */
	readonly appInstanceId: string;
	/** The AppInstanceUserId component. */
	readonly appInstanceUserId: string;
}

/**
 * Properties for building a channel ARN.
 */
export interface ChimeChannelArnProps {
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
}

/**
 * Parsed components of a channel ARN.
 */
export interface ChimeChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AppInstanceId component. */
	readonly appInstanceId: string;
	/** The ChannelId component. */
	readonly channelId: string;
}

/**
 * Properties for building a channel-flow ARN.
 */
export interface ChimeChannelFlowArnProps {
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
}

/**
 * Parsed components of a channel-flow ARN.
 */
export interface ChimeChannelFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The AppInstanceId component. */
	readonly appInstanceId: string;
	/** The ChannelFlowId component. */
	readonly channelFlowId: string;
}

/**
 * Properties for building a media-insights-pipeline-configuration ARN.
 */
export interface ChimeMediaInsightsPipelineConfigurationArnProps {
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
}

/**
 * Parsed components of a media-insights-pipeline-configuration ARN.
 */
export interface ChimeMediaInsightsPipelineConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The ConfigurationName component. */
	readonly configurationName: string;
}

/**
 * Properties for building a media-pipeline ARN.
 */
export interface ChimeMediaPipelineArnProps {
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
}

/**
 * Parsed components of a media-pipeline ARN.
 */
export interface ChimeMediaPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The MediaPipelineId component. */
	readonly mediaPipelineId: string;
}

/**
 * Properties for building a media-pipeline-kinesis-video-stream-pool ARN.
 */
export interface ChimeMediaPipelineKinesisVideoStreamPoolArnProps {
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
}

/**
 * Parsed components of a media-pipeline-kinesis-video-stream-pool ARN.
 */
export interface ChimeMediaPipelineKinesisVideoStreamPoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The PoolName component. */
	readonly poolName: string;
}

/**
 * Properties for building a meeting ARN.
 */
export interface ChimeMeetingArnProps {
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
}

/**
 * Parsed components of a meeting ARN.
 */
export interface ChimeMeetingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The MeetingId component. */
	readonly meetingId: string;
}

/**
 * Properties for building a sip-media-application ARN.
 */
export interface ChimeSipMediaApplicationArnProps {
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
}

/**
 * Parsed components of a sip-media-application ARN.
 */
export interface ChimeSipMediaApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The SipMediaApplicationId component. */
	readonly sipMediaApplicationId: string;
}

/**
 * Properties for building a voice-connector ARN.
 */
export interface ChimeVoiceConnectorArnProps {
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
}

/**
 * Parsed components of a voice-connector ARN.
 */
export interface ChimeVoiceConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The VoiceConnectorId component. */
	readonly voiceConnectorId: string;
}

/**
 * Properties for building a voice-profile ARN.
 */
export interface ChimeVoiceProfileArnProps {
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
}

/**
 * Parsed components of a voice-profile ARN.
 */
export interface ChimeVoiceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The VoiceProfileId component. */
	readonly voiceProfileId: string;
}

/**
 * Properties for building a voice-profile-domain ARN.
 */
export interface ChimeVoiceProfileDomainArnProps {
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
}

/**
 * Parsed components of a voice-profile-domain ARN.
 */
export interface ChimeVoiceProfileDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The VoiceProfileDomainId component. */
	readonly voiceProfileDomainId: string;
}

const AppInstanceArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance\/(?<appInstanceId>[^:/?]+)$/;
const AppInstanceBotArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance\/(?<appInstanceId>[^:/?]+)\/bot\/(?<appInstanceBotId>[^:/?]+)$/;
const AppInstanceUserArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance\/(?<appInstanceId>[^:/?]+)\/user\/(?<appInstanceUserId>[^:/?]+)$/;
const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance\/(?<appInstanceId>[^:/?]+)\/channel\/(?<channelId>[^:/?]+)$/;
const ChannelFlowArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):app-instance\/(?<appInstanceId>[^:/?]+)\/channel-flow\/(?<channelFlowId>[^:/?]+)$/;
const MediaInsightsPipelineConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-insights-pipeline-configuration\/(?<configurationName>[^:/?]+)$/;
const MediaPipelineArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-pipeline\/(?<mediaPipelineId>[^:/?]+)$/;
const MediaPipelineKinesisVideoStreamPoolArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):media-pipeline-kinesis-video-stream-pool\/(?<poolName>[^:/?]+)$/;
const MeetingArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):meeting\/(?<meetingId>[^:/?]+)$/;
const SipMediaApplicationArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):sma\/(?<sipMediaApplicationId>[^:/?]+)$/;
const VoiceConnectorArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):vc\/(?<voiceConnectorId>[^:/?]+)$/;
const VoiceProfileArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):voice-profile\/(?<voiceProfileId>[^:/?]+)$/;
const VoiceProfileDomainArnRegex =
	/^arn:(?<partition>[^:]+):chime:(?<region>[^:]*):(?<accountId>[^:/?]+):voice-profile-domain\/(?<voiceProfileDomainId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for chime resources.
 */
export class ChimeResources {
	/**
	 * Builds an ARN for the app-instance resource.
	 */
	static appInstance(props: ChimeAppInstanceArnProps): string {
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
	static parseAppInstanceArn(arn: string): ChimeAppInstanceArnComponents {
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
	static appInstanceBot(props: ChimeAppInstanceBotArnProps): string {
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
	static parseAppInstanceBotArn(arn: string): ChimeAppInstanceBotArnComponents {
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
	static appInstanceUser(props: ChimeAppInstanceUserArnProps): string {
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
	static parseAppInstanceUserArn(
		arn: string,
	): ChimeAppInstanceUserArnComponents {
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
	static channel(props: ChimeChannelArnProps): string {
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
	static parseChannelArn(arn: string): ChimeChannelArnComponents {
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
	static channelFlow(props: ChimeChannelFlowArnProps): string {
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
	static parseChannelFlowArn(arn: string): ChimeChannelFlowArnComponents {
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
	static mediaInsightsPipelineConfiguration(
		props: ChimeMediaInsightsPipelineConfigurationArnProps,
	): string {
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
	static parseMediaInsightsPipelineConfigurationArn(
		arn: string,
	): ChimeMediaInsightsPipelineConfigurationArnComponents {
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
	static mediaPipeline(props: ChimeMediaPipelineArnProps): string {
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
	static parseMediaPipelineArn(arn: string): ChimeMediaPipelineArnComponents {
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
	static mediaPipelineKinesisVideoStreamPool(
		props: ChimeMediaPipelineKinesisVideoStreamPoolArnProps,
	): string {
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
	static parseMediaPipelineKinesisVideoStreamPoolArn(
		arn: string,
	): ChimeMediaPipelineKinesisVideoStreamPoolArnComponents {
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
	static meeting(props: ChimeMeetingArnProps): string {
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
	static parseMeetingArn(arn: string): ChimeMeetingArnComponents {
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
	static sipMediaApplication(props: ChimeSipMediaApplicationArnProps): string {
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
	static parseSipMediaApplicationArn(
		arn: string,
	): ChimeSipMediaApplicationArnComponents {
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
	static voiceConnector(props: ChimeVoiceConnectorArnProps): string {
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
	static parseVoiceConnectorArn(arn: string): ChimeVoiceConnectorArnComponents {
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
	static voiceProfile(props: ChimeVoiceProfileArnProps): string {
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
	static parseVoiceProfileArn(arn: string): ChimeVoiceProfileArnComponents {
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
	static voiceProfileDomain(props: ChimeVoiceProfileDomainArnProps): string {
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
	static parseVoiceProfileDomainArn(
		arn: string,
	): ChimeVoiceProfileDomainArnComponents {
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
	static readonly AssociateChannelFlow: string[] = [
		"chime:AssociateChannelFlow",
	];
	/** IAM actions required for the AssociatePhoneNumberWithUser API call. */
	static readonly AssociatePhoneNumberWithUser: string[] = [];
	/** IAM actions required for the AssociatePhoneNumbersWithVoiceConnector API call. */
	static readonly AssociatePhoneNumbersWithVoiceConnector: string[] = [
		"chime:AssociatePhoneNumbersWithVoiceConnector",
	];
	/** IAM actions required for the AssociatePhoneNumbersWithVoiceConnectorGroup API call. */
	static readonly AssociatePhoneNumbersWithVoiceConnectorGroup: string[] = [
		"chime:AssociatePhoneNumbersWithVoiceConnectorGroup",
	];
	/** IAM actions required for the AssociateSigninDelegateGroupsWithAccount API call. */
	static readonly AssociateSigninDelegateGroupsWithAccount: string[] = [];
	/** IAM actions required for the BatchCreateAttendee API call. */
	static readonly BatchCreateAttendee: string[] = ["chime:BatchCreateAttendee"];
	/** IAM actions required for the BatchCreateChannelMembership API call. */
	static readonly BatchCreateChannelMembership: string[] = [
		"chime:BatchCreateChannelMembership",
	];
	/** IAM actions required for the BatchCreateRoomMembership API call. */
	static readonly BatchCreateRoomMembership: string[] = [
		"chime:BatchCreateRoomMembership",
	];
	/** IAM actions required for the BatchDeletePhoneNumber API call. */
	static readonly BatchDeletePhoneNumber: string[] = [
		"chime:BatchDeletePhoneNumber",
	];
	/** IAM actions required for the BatchSuspendUser API call. */
	static readonly BatchSuspendUser: string[] = [];
	/** IAM actions required for the BatchUnsuspendUser API call. */
	static readonly BatchUnsuspendUser: string[] = [];
	/** IAM actions required for the BatchUpdateAttendeeCapabilitiesExcept API call. */
	static readonly BatchUpdateAttendeeCapabilitiesExcept: string[] = [
		"chime:BatchUpdateAttendeeCapabilitiesExcept",
	];
	/** IAM actions required for the BatchUpdatePhoneNumber API call. */
	static readonly BatchUpdatePhoneNumber: string[] = [
		"chime:BatchUpdatePhoneNumber",
	];
	/** IAM actions required for the BatchUpdateUser API call. */
	static readonly BatchUpdateUser: string[] = [];
	/** IAM actions required for the ChannelFlowCallback API call. */
	static readonly ChannelFlowCallback: string[] = ["chime:ChannelFlowCallback"];
	/** IAM actions required for the CreateAccount API call. */
	static readonly CreateAccount: string[] = ["chime:CreateAccount"];
	/** IAM actions required for the CreateAppInstance API call. */
	static readonly CreateAppInstance: string[] = [
		"chime:CreateAppInstance",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAppInstanceAdmin API call. */
	static readonly CreateAppInstanceAdmin: string[] = [
		"chime:CreateAppInstanceAdmin",
	];
	/** IAM actions required for the CreateAppInstanceBot API call. */
	static readonly CreateAppInstanceBot: string[] = [
		"chime:CreateAppInstanceBot",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAppInstanceUser API call. */
	static readonly CreateAppInstanceUser: string[] = [
		"chime:CreateAppInstanceUser",
		"chime:PutAppInstanceUserExpirationSettings",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateAttendee API call. */
	static readonly CreateAttendee: string[] = [
		"chime:CreateAttendee",
		"chime:TagAttendee",
	];
	/** IAM actions required for the CreateBot API call. */
	static readonly CreateBot: string[] = ["chime:CreateBot"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"chime:CreateChannel",
		"chime:CreateChannelMembership",
		"chime:CreateChannelModerator",
		"chime:PutChannelExpirationSettings",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateChannelBan API call. */
	static readonly CreateChannelBan: string[] = ["chime:CreateChannelBan"];
	/** IAM actions required for the CreateChannelFlow API call. */
	static readonly CreateChannelFlow: string[] = [
		"chime:CreateChannelFlow",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateChannelMembership API call. */
	static readonly CreateChannelMembership: string[] = [
		"chime:CreateChannelMembership",
	];
	/** IAM actions required for the CreateChannelModerator API call. */
	static readonly CreateChannelModerator: string[] = [
		"chime:CreateChannelModerator",
	];
	/** IAM actions required for the CreateMediaCapturePipeline API call. */
	static readonly CreateMediaCapturePipeline: string[] = [
		"chime:CreateMediaCapturePipeline",
		"iam:PassRole",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaConcatenationPipeline API call. */
	static readonly CreateMediaConcatenationPipeline: string[] = [
		"chime:CreateMediaConcatenationPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaInsightsPipeline API call. */
	static readonly CreateMediaInsightsPipeline: string[] = [
		"chime:CreateMediaInsightsPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaInsightsPipelineConfiguration API call. */
	static readonly CreateMediaInsightsPipelineConfiguration: string[] = [
		"chime:CreateMediaInsightsPipelineConfiguration",
		"iam:PassRole",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaLiveConnectorPipeline API call. */
	static readonly CreateMediaLiveConnectorPipeline: string[] = [
		"chime:CreateMediaLiveConnectorPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaPipelineKinesisVideoStreamPool API call. */
	static readonly CreateMediaPipelineKinesisVideoStreamPool: string[] = [
		"chime:CreateMediaPipelineKinesisVideoStreamPool",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMediaStreamPipeline API call. */
	static readonly CreateMediaStreamPipeline: string[] = [
		"chime:CreateMediaStreamPipeline",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMeeting API call. */
	static readonly CreateMeeting: string[] = [
		"chime:CreateMeeting",
		"chime:TagMeeting",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateMeetingDialOut API call. */
	static readonly CreateMeetingDialOut: string[] = [
		"chime:CreateMeetingDialOut",
	];
	/** IAM actions required for the CreateMeetingWithAttendees API call. */
	static readonly CreateMeetingWithAttendees: string[] = [
		"chime:CreateMeetingWithAttendees",
		"chime:TagResource",
	];
	/** IAM actions required for the CreatePhoneNumberOrder API call. */
	static readonly CreatePhoneNumberOrder: string[] = [
		"chime:CreatePhoneNumberOrder",
	];
	/** IAM actions required for the CreateProxySession API call. */
	static readonly CreateProxySession: string[] = ["chime:CreateProxySession"];
	/** IAM actions required for the CreateRoom API call. */
	static readonly CreateRoom: string[] = ["chime:CreateRoom"];
	/** IAM actions required for the CreateRoomMembership API call. */
	static readonly CreateRoomMembership: string[] = [
		"chime:CreateRoomMembership",
	];
	/** IAM actions required for the CreateSipMediaApplication API call. */
	static readonly CreateSipMediaApplication: string[] = [
		"chime:CreateSipMediaApplication",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateSipMediaApplicationCall API call. */
	static readonly CreateSipMediaApplicationCall: string[] = [
		"chime:CreateSipMediaApplicationCall",
	];
	/** IAM actions required for the CreateSipRule API call. */
	static readonly CreateSipRule: string[] = ["chime:CreateSipRule"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [];
	/** IAM actions required for the CreateVoiceConnector API call. */
	static readonly CreateVoiceConnector: string[] = [
		"chime:CreateConnectAnalyticsConnector",
		"chime:CreateConnectCallTransferConnector",
		"chime:CreateVoiceConnector",
		"chime:TagResource",
	];
	/** IAM actions required for the CreateVoiceConnectorGroup API call. */
	static readonly CreateVoiceConnectorGroup: string[] = [
		"chime:CreateVoiceConnectorGroup",
	];
	/** IAM actions required for the CreateVoiceProfile API call. */
	static readonly CreateVoiceProfile: string[] = ["chime:CreateVoiceProfile"];
	/** IAM actions required for the CreateVoiceProfileDomain API call. */
	static readonly CreateVoiceProfileDomain: string[] = [
		"chime:CreateVoiceProfileDomain",
		"chime:TagResource",
	];
	/** IAM actions required for the DeleteAccount API call. */
	static readonly DeleteAccount: string[] = ["chime:DeleteAccount"];
	/** IAM actions required for the DeleteAppInstance API call. */
	static readonly DeleteAppInstance: string[] = ["chime:DeleteAppInstance"];
	/** IAM actions required for the DeleteAppInstanceAdmin API call. */
	static readonly DeleteAppInstanceAdmin: string[] = [
		"chime:DeleteAppInstanceAdmin",
	];
	/** IAM actions required for the DeleteAppInstanceBot API call. */
	static readonly DeleteAppInstanceBot: string[] = [
		"chime:DeleteAppInstanceBot",
	];
	/** IAM actions required for the DeleteAppInstanceUser API call. */
	static readonly DeleteAppInstanceUser: string[] = [
		"chime:DeleteAppInstanceUser",
	];
	/** IAM actions required for the DeleteAttendee API call. */
	static readonly DeleteAttendee: string[] = ["chime:DeleteAttendee"];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["chime:DeleteChannel"];
	/** IAM actions required for the DeleteChannelBan API call. */
	static readonly DeleteChannelBan: string[] = ["chime:DeleteChannelBan"];
	/** IAM actions required for the DeleteChannelFlow API call. */
	static readonly DeleteChannelFlow: string[] = ["chime:DeleteChannelFlow"];
	/** IAM actions required for the DeleteChannelMembership API call. */
	static readonly DeleteChannelMembership: string[] = [
		"chime:DeleteChannelMembership",
	];
	/** IAM actions required for the DeleteChannelMessage API call. */
	static readonly DeleteChannelMessage: string[] = [
		"chime:DeleteChannelMessage",
	];
	/** IAM actions required for the DeleteChannelModerator API call. */
	static readonly DeleteChannelModerator: string[] = [
		"chime:DeleteChannelModerator",
	];
	/** IAM actions required for the DeleteEventsConfiguration API call. */
	static readonly DeleteEventsConfiguration: string[] = [
		"chime:DeleteEventsConfiguration",
	];
	/** IAM actions required for the DeleteMediaCapturePipeline API call. */
	static readonly DeleteMediaCapturePipeline: string[] = [
		"chime:DeleteMediaCapturePipeline",
	];
	/** IAM actions required for the DeleteMediaInsightsPipelineConfiguration API call. */
	static readonly DeleteMediaInsightsPipelineConfiguration: string[] = [
		"chime:DeleteMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the DeleteMediaPipeline API call. */
	static readonly DeleteMediaPipeline: string[] = ["chime:DeleteMediaPipeline"];
	/** IAM actions required for the DeleteMediaPipelineKinesisVideoStreamPool API call. */
	static readonly DeleteMediaPipelineKinesisVideoStreamPool: string[] = [
		"chime:DeleteMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the DeleteMeeting API call. */
	static readonly DeleteMeeting: string[] = ["chime:DeleteMeeting"];
	/** IAM actions required for the DeleteMessagingStreamingConfigurations API call. */
	static readonly DeleteMessagingStreamingConfigurations: string[] = [
		"chime:DeleteMessagingStreamingConfigurations",
	];
	/** IAM actions required for the DeletePhoneNumber API call. */
	static readonly DeletePhoneNumber: string[] = ["chime:DeletePhoneNumber"];
	/** IAM actions required for the DeleteProxySession API call. */
	static readonly DeleteProxySession: string[] = ["chime:DeleteProxySession"];
	/** IAM actions required for the DeleteRoom API call. */
	static readonly DeleteRoom: string[] = ["chime:DeleteRoom"];
	/** IAM actions required for the DeleteRoomMembership API call. */
	static readonly DeleteRoomMembership: string[] = [
		"chime:DeleteRoomMembership",
	];
	/** IAM actions required for the DeleteSipMediaApplication API call. */
	static readonly DeleteSipMediaApplication: string[] = [
		"chime:DeleteSipMediaApplication",
	];
	/** IAM actions required for the DeleteSipRule API call. */
	static readonly DeleteSipRule: string[] = ["chime:DeleteSipRule"];
	/** IAM actions required for the DeleteVoiceConnector API call. */
	static readonly DeleteVoiceConnector: string[] = [
		"chime:DeleteVoiceConnector",
	];
	/** IAM actions required for the DeleteVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly DeleteVoiceConnectorEmergencyCallingConfiguration: string[] =
		["chime:DeleteVoiceConnectorEmergencyCallingConfiguration"];
	/** IAM actions required for the DeleteVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly DeleteVoiceConnectorExternalSystemsConfiguration: string[] = [
		"chime:DeleteVoiceConnectorExternalSystemsConfiguration",
	];
	/** IAM actions required for the DeleteVoiceConnectorGroup API call. */
	static readonly DeleteVoiceConnectorGroup: string[] = [
		"chime:DeleteVoiceConnectorGroup",
	];
	/** IAM actions required for the DeleteVoiceConnectorOrigination API call. */
	static readonly DeleteVoiceConnectorOrigination: string[] = [
		"chime:DeleteVoiceConnectorOrigination",
	];
	/** IAM actions required for the DeleteVoiceConnectorProxy API call. */
	static readonly DeleteVoiceConnectorProxy: string[] = [
		"chime:DeleteVoiceConnectorProxy",
	];
	/** IAM actions required for the DeleteVoiceConnectorStreamingConfiguration API call. */
	static readonly DeleteVoiceConnectorStreamingConfiguration: string[] = [
		"chime:DeleteVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the DeleteVoiceConnectorTermination API call. */
	static readonly DeleteVoiceConnectorTermination: string[] = [
		"chime:DeleteVoiceConnectorTermination",
	];
	/** IAM actions required for the DeleteVoiceConnectorTerminationCredentials API call. */
	static readonly DeleteVoiceConnectorTerminationCredentials: string[] = [
		"chime:DeleteVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the DeleteVoiceProfile API call. */
	static readonly DeleteVoiceProfile: string[] = ["chime:DeleteVoiceProfile"];
	/** IAM actions required for the DeleteVoiceProfileDomain API call. */
	static readonly DeleteVoiceProfileDomain: string[] = [
		"chime:DeleteVoiceProfileDomain",
	];
	/** IAM actions required for the DeregisterAppInstanceUserEndpoint API call. */
	static readonly DeregisterAppInstanceUserEndpoint: string[] = [
		"chime:DeregisterAppInstanceUserEndpoint",
	];
	/** IAM actions required for the DescribeAppInstance API call. */
	static readonly DescribeAppInstance: string[] = ["chime:DescribeAppInstance"];
	/** IAM actions required for the DescribeAppInstanceAdmin API call. */
	static readonly DescribeAppInstanceAdmin: string[] = [
		"chime:DescribeAppInstanceAdmin",
	];
	/** IAM actions required for the DescribeAppInstanceBot API call. */
	static readonly DescribeAppInstanceBot: string[] = [
		"chime:DescribeAppInstanceBot",
	];
	/** IAM actions required for the DescribeAppInstanceUser API call. */
	static readonly DescribeAppInstanceUser: string[] = [
		"chime:DescribeAppInstanceUser",
	];
	/** IAM actions required for the DescribeAppInstanceUserEndpoint API call. */
	static readonly DescribeAppInstanceUserEndpoint: string[] = [
		"chime:DescribeAppInstanceUserEndpoint",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DescribeChannel: string[] = ["chime:DescribeChannel"];
	/** IAM actions required for the DescribeChannelBan API call. */
	static readonly DescribeChannelBan: string[] = ["chime:DescribeChannelBan"];
	/** IAM actions required for the DescribeChannelFlow API call. */
	static readonly DescribeChannelFlow: string[] = ["chime:DescribeChannelFlow"];
	/** IAM actions required for the DescribeChannelMembership API call. */
	static readonly DescribeChannelMembership: string[] = [
		"chime:DescribeChannelMembership",
	];
	/** IAM actions required for the DescribeChannelMembershipForAppInstanceUser API call. */
	static readonly DescribeChannelMembershipForAppInstanceUser: string[] = [
		"chime:DescribeChannelMembershipForAppInstanceUser",
	];
	/** IAM actions required for the DescribeChannelModeratedByAppInstanceUser API call. */
	static readonly DescribeChannelModeratedByAppInstanceUser: string[] = [
		"chime:DescribeChannelModeratedByAppInstanceUser",
	];
	/** IAM actions required for the DescribeChannelModerator API call. */
	static readonly DescribeChannelModerator: string[] = [
		"chime:DescribeChannelModerator",
	];
	/** IAM actions required for the DisassociateChannelFlow API call. */
	static readonly DisassociateChannelFlow: string[] = [
		"chime:DisassociateChannelFlow",
	];
	/** IAM actions required for the DisassociatePhoneNumberFromUser API call. */
	static readonly DisassociatePhoneNumberFromUser: string[] = [];
	/** IAM actions required for the DisassociatePhoneNumbersFromVoiceConnector API call. */
	static readonly DisassociatePhoneNumbersFromVoiceConnector: string[] = [
		"chime:DisassociatePhoneNumbersFromVoiceConnector",
	];
	/** IAM actions required for the DisassociatePhoneNumbersFromVoiceConnectorGroup API call. */
	static readonly DisassociatePhoneNumbersFromVoiceConnectorGroup: string[] = [
		"chime:DisassociatePhoneNumbersFromVoiceConnectorGroup",
	];
	/** IAM actions required for the DisassociateSigninDelegateGroupsFromAccount API call. */
	static readonly DisassociateSigninDelegateGroupsFromAccount: string[] = [];
	/** IAM actions required for the GetAccount API call. */
	static readonly opGetAccount: string[] = ["chime:GetAccount"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = ["chime:GetAccountSettings"];
	/** IAM actions required for the GetAppInstanceRetentionSettings API call. */
	static readonly opGetAppInstanceRetentionSettings: string[] = [
		"chime:GetAppInstanceRetentionSettings",
	];
	/** IAM actions required for the GetAttendee API call. */
	static readonly opGetAttendee: string[] = ["chime:GetAttendee"];
	/** IAM actions required for the GetBot API call. */
	static readonly opGetBot: string[] = ["chime:GetBot"];
	/** IAM actions required for the GetChannelMembershipPreferences API call. */
	static readonly opGetChannelMembershipPreferences: string[] = [
		"chime:GetChannelMembershipPreferences",
	];
	/** IAM actions required for the GetChannelMessage API call. */
	static readonly opGetChannelMessage: string[] = ["chime:GetChannelMessage"];
	/** IAM actions required for the GetChannelMessageStatus API call. */
	static readonly opGetChannelMessageStatus: string[] = [
		"chime:GetChannelMessageStatus",
	];
	/** IAM actions required for the GetEventsConfiguration API call. */
	static readonly opGetEventsConfiguration: string[] = [
		"chime:GetEventsConfiguration",
	];
	/** IAM actions required for the GetGlobalSettings API call. */
	static readonly opGetGlobalSettings: string[] = ["chime:GetGlobalSettings"];
	/** IAM actions required for the GetMediaCapturePipeline API call. */
	static readonly opGetMediaCapturePipeline: string[] = [
		"chime:GetMediaCapturePipeline",
	];
	/** IAM actions required for the GetMediaInsightsPipelineConfiguration API call. */
	static readonly opGetMediaInsightsPipelineConfiguration: string[] = [
		"chime:GetMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the GetMediaPipeline API call. */
	static readonly opGetMediaPipeline: string[] = ["chime:GetMediaPipeline"];
	/** IAM actions required for the GetMediaPipelineKinesisVideoStreamPool API call. */
	static readonly opGetMediaPipelineKinesisVideoStreamPool: string[] = [
		"chime:GetMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the GetMeeting API call. */
	static readonly opGetMeeting: string[] = ["chime:GetMeeting"];
	/** IAM actions required for the GetMessagingSessionEndpoint API call. */
	static readonly opGetMessagingSessionEndpoint: string[] = [
		"chime:GetMessagingSessionEndpoint",
	];
	/** IAM actions required for the GetMessagingStreamingConfigurations API call. */
	static readonly opGetMessagingStreamingConfigurations: string[] = [
		"chime:GetMessagingStreamingConfigurations",
	];
	/** IAM actions required for the GetPhoneNumber API call. */
	static readonly opGetPhoneNumber: string[] = ["chime:GetPhoneNumber"];
	/** IAM actions required for the GetPhoneNumberOrder API call. */
	static readonly opGetPhoneNumberOrder: string[] = [
		"chime:GetPhoneNumberOrder",
	];
	/** IAM actions required for the GetPhoneNumberSettings API call. */
	static readonly opGetPhoneNumberSettings: string[] = [
		"chime:GetPhoneNumberSettings",
	];
	/** IAM actions required for the GetProxySession API call. */
	static readonly opGetProxySession: string[] = ["chime:GetProxySession"];
	/** IAM actions required for the GetRetentionSettings API call. */
	static readonly opGetRetentionSettings: string[] = [
		"chime:GetRetentionSettings",
	];
	/** IAM actions required for the GetRoom API call. */
	static readonly opGetRoom: string[] = ["chime:GetRoom"];
	/** IAM actions required for the GetSipMediaApplication API call. */
	static readonly opGetSipMediaApplication: string[] = [
		"chime:GetSipMediaApplication",
	];
	/** IAM actions required for the GetSipMediaApplicationAlexaSkillConfiguration API call. */
	static readonly opGetSipMediaApplicationAlexaSkillConfiguration: string[] = [
		"chime:GetSipMediaApplicationAlexaSkillConfiguration",
	];
	/** IAM actions required for the GetSipMediaApplicationLoggingConfiguration API call. */
	static readonly opGetSipMediaApplicationLoggingConfiguration: string[] = [
		"chime:GetSipMediaApplicationLoggingConfiguration",
	];
	/** IAM actions required for the GetSipRule API call. */
	static readonly opGetSipRule: string[] = ["chime:GetSipRule"];
	/** IAM actions required for the GetSpeakerSearchTask API call. */
	static readonly opGetSpeakerSearchTask: string[] = [
		"chime:GetSpeakerSearchTask",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly opGetUser: string[] = ["chime:GetUser"];
	/** IAM actions required for the GetUserSettings API call. */
	static readonly opGetUserSettings: string[] = ["chime:GetUserSettings"];
	/** IAM actions required for the GetVoiceConnector API call. */
	static readonly opGetVoiceConnector: string[] = ["chime:GetVoiceConnector"];
	/** IAM actions required for the GetVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly opGetVoiceConnectorEmergencyCallingConfiguration: string[] = [
		"chime:GetVoiceConnectorEmergencyCallingConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly opGetVoiceConnectorExternalSystemsConfiguration: string[] = [
		"chime:GetVoiceConnectorExternalSystemsConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorGroup API call. */
	static readonly opGetVoiceConnectorGroup: string[] = [
		"chime:GetVoiceConnectorGroup",
	];
	/** IAM actions required for the GetVoiceConnectorLoggingConfiguration API call. */
	static readonly opGetVoiceConnectorLoggingConfiguration: string[] = [
		"chime:GetVoiceConnectorLoggingConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorOrigination API call. */
	static readonly opGetVoiceConnectorOrigination: string[] = [
		"chime:GetVoiceConnectorOrigination",
	];
	/** IAM actions required for the GetVoiceConnectorProxy API call. */
	static readonly opGetVoiceConnectorProxy: string[] = [
		"chime:GetVoiceConnectorProxy",
	];
	/** IAM actions required for the GetVoiceConnectorStreamingConfiguration API call. */
	static readonly opGetVoiceConnectorStreamingConfiguration: string[] = [
		"chime:GetVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the GetVoiceConnectorTermination API call. */
	static readonly opGetVoiceConnectorTermination: string[] = [
		"chime:GetVoiceConnectorTermination",
	];
	/** IAM actions required for the GetVoiceConnectorTerminationHealth API call. */
	static readonly opGetVoiceConnectorTerminationHealth: string[] = [
		"chime:GetVoiceConnectorTerminationHealth",
	];
	/** IAM actions required for the GetVoiceProfile API call. */
	static readonly opGetVoiceProfile: string[] = ["chime:GetVoiceProfile"];
	/** IAM actions required for the GetVoiceProfileDomain API call. */
	static readonly opGetVoiceProfileDomain: string[] = [
		"chime:GetVoiceProfileDomain",
	];
	/** IAM actions required for the GetVoiceToneAnalysisTask API call. */
	static readonly opGetVoiceToneAnalysisTask: string[] = [
		"chime:GetVoiceToneAnalysisTask",
	];
	/** IAM actions required for the InviteUsers API call. */
	static readonly InviteUsers: string[] = ["chime:InviteUsers"];
	/** IAM actions required for the ListAccounts API call. */
	static readonly ListAccounts: string[] = ["chime:ListAccounts"];
	/** IAM actions required for the ListAppInstanceAdmins API call. */
	static readonly ListAppInstanceAdmins: string[] = [
		"chime:ListAppInstanceAdmins",
	];
	/** IAM actions required for the ListAppInstanceBots API call. */
	static readonly ListAppInstanceBots: string[] = ["chime:ListAppInstanceBots"];
	/** IAM actions required for the ListAppInstanceUserEndpoints API call. */
	static readonly ListAppInstanceUserEndpoints: string[] = [
		"chime:ListAppInstanceUserEndpoints",
	];
	/** IAM actions required for the ListAppInstanceUsers API call. */
	static readonly ListAppInstanceUsers: string[] = [
		"chime:ListAppInstanceUsers",
	];
	/** IAM actions required for the ListAppInstances API call. */
	static readonly ListAppInstances: string[] = ["chime:ListAppInstances"];
	/** IAM actions required for the ListAttendees API call. */
	static readonly ListAttendees: string[] = ["chime:ListAttendees"];
	/** IAM actions required for the ListAvailableVoiceConnectorRegions API call. */
	static readonly ListAvailableVoiceConnectorRegions: string[] = [
		"chime:ListAvailableVoiceConnectorRegions",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly ListBots: string[] = ["chime:ListBots"];
	/** IAM actions required for the ListChannelBans API call. */
	static readonly ListChannelBans: string[] = ["chime:ListChannelBans"];
	/** IAM actions required for the ListChannelFlows API call. */
	static readonly ListChannelFlows: string[] = ["chime:ListChannelFlows"];
	/** IAM actions required for the ListChannelMemberships API call. */
	static readonly ListChannelMemberships: string[] = [
		"chime:ListChannelMemberships",
	];
	/** IAM actions required for the ListChannelMembershipsForAppInstanceUser API call. */
	static readonly ListChannelMembershipsForAppInstanceUser: string[] = [
		"chime:ListChannelMembershipsForAppInstanceUser",
	];
	/** IAM actions required for the ListChannelMessages API call. */
	static readonly ListChannelMessages: string[] = ["chime:ListChannelMessages"];
	/** IAM actions required for the ListChannelModerators API call. */
	static readonly ListChannelModerators: string[] = [
		"chime:ListChannelModerators",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["chime:ListChannels"];
	/** IAM actions required for the ListChannelsAssociatedWithChannelFlow API call. */
	static readonly ListChannelsAssociatedWithChannelFlow: string[] = [
		"chime:ListChannelsAssociatedWithChannelFlow",
	];
	/** IAM actions required for the ListChannelsModeratedByAppInstanceUser API call. */
	static readonly ListChannelsModeratedByAppInstanceUser: string[] = [
		"chime:ListChannelsModeratedByAppInstanceUser",
	];
	/** IAM actions required for the ListMediaCapturePipelines API call. */
	static readonly ListMediaCapturePipelines: string[] = [
		"chime:ListMediaCapturePipelines",
	];
	/** IAM actions required for the ListMediaInsightsPipelineConfigurations API call. */
	static readonly ListMediaInsightsPipelineConfigurations: string[] = [
		"chime:ListMediaInsightsPipelineConfigurations",
	];
	/** IAM actions required for the ListMediaPipelineKinesisVideoStreamPools API call. */
	static readonly ListMediaPipelineKinesisVideoStreamPools: string[] = [
		"chime:ListMediaPipelineKinesisVideoStreamPools",
	];
	/** IAM actions required for the ListMediaPipelines API call. */
	static readonly ListMediaPipelines: string[] = ["chime:ListMediaPipelines"];
	/** IAM actions required for the ListPhoneNumberOrders API call. */
	static readonly ListPhoneNumberOrders: string[] = [
		"chime:ListPhoneNumberOrders",
	];
	/** IAM actions required for the ListPhoneNumbers API call. */
	static readonly ListPhoneNumbers: string[] = ["chime:ListPhoneNumbers"];
	/** IAM actions required for the ListProxySessions API call. */
	static readonly ListProxySessions: string[] = ["chime:ListProxySessions"];
	/** IAM actions required for the ListRoomMemberships API call. */
	static readonly ListRoomMemberships: string[] = ["chime:ListRoomMemberships"];
	/** IAM actions required for the ListRooms API call. */
	static readonly ListRooms: string[] = ["chime:ListRooms"];
	/** IAM actions required for the ListSipMediaApplications API call. */
	static readonly ListSipMediaApplications: string[] = [
		"chime:ListSipMediaApplications",
	];
	/** IAM actions required for the ListSipRules API call. */
	static readonly ListSipRules: string[] = ["chime:ListSipRules"];
	/** IAM actions required for the ListSubChannels API call. */
	static readonly ListSubChannels: string[] = ["chime:ListSubChannels"];
	/** IAM actions required for the ListSupportedPhoneNumberCountries API call. */
	static readonly ListSupportedPhoneNumberCountries: string[] = [
		"chime:ListSupportedPhoneNumberCountries",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["chime:ListTagsForResource"];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["chime:ListUsers"];
	/** IAM actions required for the ListVoiceConnectorGroups API call. */
	static readonly ListVoiceConnectorGroups: string[] = [
		"chime:ListVoiceConnectorGroups",
	];
	/** IAM actions required for the ListVoiceConnectorTerminationCredentials API call. */
	static readonly ListVoiceConnectorTerminationCredentials: string[] = [
		"chime:ListVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the ListVoiceConnectors API call. */
	static readonly ListVoiceConnectors: string[] = ["chime:ListVoiceConnectors"];
	/** IAM actions required for the ListVoiceProfileDomains API call. */
	static readonly ListVoiceProfileDomains: string[] = [
		"chime:ListVoiceProfileDomains",
	];
	/** IAM actions required for the ListVoiceProfiles API call. */
	static readonly ListVoiceProfiles: string[] = ["chime:ListVoiceProfiles"];
	/** IAM actions required for the LogoutUser API call. */
	static readonly LogoutUser: string[] = ["chime:LogoutUser"];
	/** IAM actions required for the PutAppInstanceRetentionSettings API call. */
	static readonly PutAppInstanceRetentionSettings: string[] = [
		"chime:PutAppInstanceRetentionSettings",
	];
	/** IAM actions required for the PutAppInstanceUserExpirationSettings API call. */
	static readonly PutAppInstanceUserExpirationSettings: string[] = [
		"chime:PutAppInstanceUserExpirationSettings",
	];
	/** IAM actions required for the PutChannelExpirationSettings API call. */
	static readonly PutChannelExpirationSettings: string[] = [
		"chime:PutChannelExpirationSettings",
	];
	/** IAM actions required for the PutChannelMembershipPreferences API call. */
	static readonly PutChannelMembershipPreferences: string[] = [
		"chime:PutChannelMembershipPreferences",
	];
	/** IAM actions required for the PutEventsConfiguration API call. */
	static readonly PutEventsConfiguration: string[] = [
		"chime:PutEventsConfiguration",
	];
	/** IAM actions required for the PutMessagingStreamingConfigurations API call. */
	static readonly PutMessagingStreamingConfigurations: string[] = [
		"chime:PutMessagingStreamingConfigurations",
	];
	/** IAM actions required for the PutRetentionSettings API call. */
	static readonly PutRetentionSettings: string[] = [
		"chime:PutRetentionSettings",
	];
	/** IAM actions required for the PutSipMediaApplicationAlexaSkillConfiguration API call. */
	static readonly PutSipMediaApplicationAlexaSkillConfiguration: string[] = [
		"chime:PutSipMediaApplicationAlexaSkillConfiguration",
	];
	/** IAM actions required for the PutSipMediaApplicationLoggingConfiguration API call. */
	static readonly PutSipMediaApplicationLoggingConfiguration: string[] = [
		"chime:PutSipMediaApplicationLoggingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorEmergencyCallingConfiguration API call. */
	static readonly PutVoiceConnectorEmergencyCallingConfiguration: string[] = [
		"chime:PutVoiceConnectorEmergencyCallingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorExternalSystemsConfiguration API call. */
	static readonly PutVoiceConnectorExternalSystemsConfiguration: string[] = [
		"chime:PutVoiceConnectorExternalSystemsConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorLoggingConfiguration API call. */
	static readonly PutVoiceConnectorLoggingConfiguration: string[] = [
		"chime:PutVoiceConnectorLoggingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorOrigination API call. */
	static readonly PutVoiceConnectorOrigination: string[] = [
		"chime:PutVoiceConnectorOrigination",
	];
	/** IAM actions required for the PutVoiceConnectorProxy API call. */
	static readonly PutVoiceConnectorProxy: string[] = [
		"chime:PutVoiceConnectorProxy",
	];
	/** IAM actions required for the PutVoiceConnectorStreamingConfiguration API call. */
	static readonly PutVoiceConnectorStreamingConfiguration: string[] = [
		"chime:PutVoiceConnectorStreamingConfiguration",
	];
	/** IAM actions required for the PutVoiceConnectorTermination API call. */
	static readonly PutVoiceConnectorTermination: string[] = [
		"chime:PutVoiceConnectorTermination",
	];
	/** IAM actions required for the PutVoiceConnectorTerminationCredentials API call. */
	static readonly PutVoiceConnectorTerminationCredentials: string[] = [
		"chime:PutVoiceConnectorTerminationCredentials",
	];
	/** IAM actions required for the RedactChannelMessage API call. */
	static readonly RedactChannelMessage: string[] = [
		"chime:RedactChannelMessage",
	];
	/** IAM actions required for the RedactConversationMessage API call. */
	static readonly RedactConversationMessage: string[] = [
		"chime:RedactConversationMessage",
	];
	/** IAM actions required for the RedactRoomMessage API call. */
	static readonly RedactRoomMessage: string[] = ["chime:RedactRoomMessage"];
	/** IAM actions required for the RegenerateSecurityToken API call. */
	static readonly RegenerateSecurityToken: string[] = [
		"chime:RegenerateSecurityToken",
	];
	/** IAM actions required for the RegisterAppInstanceUserEndpoint API call. */
	static readonly RegisterAppInstanceUserEndpoint: string[] = [
		"chime:RegisterAppInstanceUserEndpoint",
	];
	/** IAM actions required for the ResetPersonalPIN API call. */
	static readonly ResetPersonalPIN: string[] = [];
	/** IAM actions required for the RestorePhoneNumber API call. */
	static readonly RestorePhoneNumber: string[] = ["chime:RestorePhoneNumber"];
	/** IAM actions required for the SearchAvailablePhoneNumbers API call. */
	static readonly SearchAvailablePhoneNumbers: string[] = [
		"chime:SearchAvailablePhoneNumbers",
	];
	/** IAM actions required for the SearchChannels API call. */
	static readonly SearchChannels: string[] = ["chime:SearchChannels"];
	/** IAM actions required for the SendChannelMessage API call. */
	static readonly SendChannelMessage: string[] = ["chime:SendChannelMessage"];
	/** IAM actions required for the StartMeetingTranscription API call. */
	static readonly StartMeetingTranscription: string[] = [
		"chime:StartMeetingTranscription",
	];
	/** IAM actions required for the StartSpeakerSearchTask API call. */
	static readonly StartSpeakerSearchTask: string[] = [
		"chime:StartSpeakerSearchTask",
	];
	/** IAM actions required for the StartVoiceToneAnalysisTask API call. */
	static readonly StartVoiceToneAnalysisTask: string[] = [
		"chime:StartVoiceToneAnalysisTask",
	];
	/** IAM actions required for the StopMeetingTranscription API call. */
	static readonly StopMeetingTranscription: string[] = [
		"chime:StopMeetingTranscription",
	];
	/** IAM actions required for the StopSpeakerSearchTask API call. */
	static readonly StopSpeakerSearchTask: string[] = [
		"chime:StopSpeakerSearchTask",
	];
	/** IAM actions required for the StopVoiceToneAnalysisTask API call. */
	static readonly StopVoiceToneAnalysisTask: string[] = [
		"chime:StopVoiceToneAnalysisTask",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["chime:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["chime:UntagResource"];
	/** IAM actions required for the UpdateAccount API call. */
	static readonly UpdateAccount: string[] = [];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [];
	/** IAM actions required for the UpdateAppInstance API call. */
	static readonly UpdateAppInstance: string[] = ["chime:UpdateAppInstance"];
	/** IAM actions required for the UpdateAppInstanceBot API call. */
	static readonly UpdateAppInstanceBot: string[] = [
		"chime:UpdateAppInstanceBot",
	];
	/** IAM actions required for the UpdateAppInstanceUser API call. */
	static readonly UpdateAppInstanceUser: string[] = [
		"chime:UpdateAppInstanceUser",
	];
	/** IAM actions required for the UpdateAppInstanceUserEndpoint API call. */
	static readonly UpdateAppInstanceUserEndpoint: string[] = [
		"chime:UpdateAppInstanceUserEndpoint",
	];
	/** IAM actions required for the UpdateAttendeeCapabilities API call. */
	static readonly UpdateAttendeeCapabilities: string[] = [
		"chime:UpdateAttendeeCapabilities",
	];
	/** IAM actions required for the UpdateBot API call. */
	static readonly UpdateBot: string[] = ["chime:UpdateBot"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["chime:UpdateChannel"];
	/** IAM actions required for the UpdateChannelFlow API call. */
	static readonly UpdateChannelFlow: string[] = ["chime:UpdateChannelFlow"];
	/** IAM actions required for the UpdateChannelMessage API call. */
	static readonly UpdateChannelMessage: string[] = [
		"chime:UpdateChannelMessage",
	];
	/** IAM actions required for the UpdateChannelReadMarker API call. */
	static readonly UpdateChannelReadMarker: string[] = [
		"chime:UpdateChannelReadMarker",
	];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UpdateGlobalSettings: string[] = [
		"chime:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateMediaInsightsPipelineConfiguration API call. */
	static readonly UpdateMediaInsightsPipelineConfiguration: string[] = [
		"iam:PassRole",
		"chime:UpdateMediaInsightsPipelineConfiguration",
	];
	/** IAM actions required for the UpdateMediaInsightsPipelineStatus API call. */
	static readonly UpdateMediaInsightsPipelineStatus: string[] = [
		"chime:UpdateMediaInsightsPipelineStatus",
	];
	/** IAM actions required for the UpdateMediaPipelineKinesisVideoStreamPool API call. */
	static readonly UpdateMediaPipelineKinesisVideoStreamPool: string[] = [
		"chime:UpdateMediaPipelineKinesisVideoStreamPool",
	];
	/** IAM actions required for the UpdatePhoneNumber API call. */
	static readonly UpdatePhoneNumber: string[] = ["chime:UpdatePhoneNumber"];
	/** IAM actions required for the UpdatePhoneNumberSettings API call. */
	static readonly UpdatePhoneNumberSettings: string[] = [
		"chime:UpdatePhoneNumberSettings",
	];
	/** IAM actions required for the UpdateProxySession API call. */
	static readonly UpdateProxySession: string[] = ["chime:UpdateProxySession"];
	/** IAM actions required for the UpdateRoom API call. */
	static readonly UpdateRoom: string[] = ["chime:UpdateRoom"];
	/** IAM actions required for the UpdateRoomMembership API call. */
	static readonly UpdateRoomMembership: string[] = [
		"chime:UpdateRoomMembership",
	];
	/** IAM actions required for the UpdateSipMediaApplication API call. */
	static readonly UpdateSipMediaApplication: string[] = [
		"chime:UpdateSipMediaApplication",
	];
	/** IAM actions required for the UpdateSipMediaApplicationCall API call. */
	static readonly UpdateSipMediaApplicationCall: string[] = [
		"chime:UpdateSipMediaApplicationCall",
	];
	/** IAM actions required for the UpdateSipRule API call. */
	static readonly UpdateSipRule: string[] = ["chime:UpdateSipRule"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [];
	/** IAM actions required for the UpdateUserSettings API call. */
	static readonly UpdateUserSettings: string[] = [];
	/** IAM actions required for the UpdateVoiceConnector API call. */
	static readonly UpdateVoiceConnector: string[] = [
		"chime:UpdateVoiceConnector",
	];
	/** IAM actions required for the UpdateVoiceConnectorGroup API call. */
	static readonly UpdateVoiceConnectorGroup: string[] = [
		"chime:UpdateVoiceConnectorGroup",
	];
	/** IAM actions required for the UpdateVoiceProfile API call. */
	static readonly UpdateVoiceProfile: string[] = ["chime:UpdateVoiceProfile"];
	/** IAM actions required for the UpdateVoiceProfileDomain API call. */
	static readonly UpdateVoiceProfileDomain: string[] = [
		"chime:UpdateVoiceProfileDomain",
	];
	/** IAM actions required for the ValidateE911Address API call. */
	static readonly ValidateE911Address: string[] = ["chime:ValidateE911Address"];
}

/**
 * Condition key constants and builders for chime.
 */
export class ChimeConditions {
	/** Condition keys applicable to the CreateAppInstance action. */
	static readonly CreateAppInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppInstanceBot action. */
	static readonly CreateAppInstanceBotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppInstanceUser action. */
	static readonly CreateAppInstanceUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelFlow action. */
	static readonly CreateChannelFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectAnalyticsConnector action. */
	static readonly CreateConnectAnalyticsConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectCallTransferConnector action. */
	static readonly CreateConnectCallTransferConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaCapturePipeline action. */
	static readonly CreateMediaCapturePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaConcatenationPipeline action. */
	static readonly CreateMediaConcatenationPipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaInsightsPipeline action. */
	static readonly CreateMediaInsightsPipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaInsightsPipelineConfiguration action. */
	static readonly CreateMediaInsightsPipelineConfigurationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaLiveConnectorPipeline action. */
	static readonly CreateMediaLiveConnectorPipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMediaPipelineKinesisVideoStreamPool action. */
	static readonly CreateMediaPipelineKinesisVideoStreamPoolConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMediaStreamPipeline action. */
	static readonly CreateMediaStreamPipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMeeting action. */
	static readonly CreateMeetingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMeetingWithAttendees action. */
	static readonly CreateMeetingWithAttendeesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSipMediaApplication action. */
	static readonly CreateSipMediaApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVoiceConnector action. */
	static readonly CreateVoiceConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVoiceProfileDomain action. */
	static readonly CreateVoiceProfileDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMeeting action. */
	static readonly TagMeetingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
