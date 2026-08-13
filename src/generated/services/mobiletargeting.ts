// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mobiletargeting.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mobiletargeting service.
 */
export class MobiletargetingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mobiletargeting";

	/** [Write] mobiletargeting:CreateApp */
	static readonly CreateApp = "mobiletargeting:CreateApp";
	/** [Write] mobiletargeting:CreateCampaign */
	static readonly CreateCampaign = "mobiletargeting:CreateCampaign";
	/** [Write] mobiletargeting:CreateEmailTemplate */
	static readonly CreateEmailTemplate = "mobiletargeting:CreateEmailTemplate";
	/** [Write] mobiletargeting:CreateExportJob */
	static readonly CreateExportJob = "mobiletargeting:CreateExportJob";
	/** [Write] mobiletargeting:CreateImportJob */
	static readonly CreateImportJob = "mobiletargeting:CreateImportJob";
	/** [Write] mobiletargeting:CreateInAppTemplate */
	static readonly CreateInAppTemplate = "mobiletargeting:CreateInAppTemplate";
	/** [Write] mobiletargeting:CreateJourney */
	static readonly CreateJourney = "mobiletargeting:CreateJourney";
	/** [Write] mobiletargeting:CreatePushTemplate */
	static readonly CreatePushTemplate = "mobiletargeting:CreatePushTemplate";
	/** [Write] mobiletargeting:CreateRecommenderConfiguration */
	static readonly CreateRecommenderConfiguration =
		"mobiletargeting:CreateRecommenderConfiguration";
	/** [Write] mobiletargeting:CreateSegment */
	static readonly CreateSegment = "mobiletargeting:CreateSegment";
	/** [Write] mobiletargeting:CreateSmsTemplate */
	static readonly CreateSmsTemplate = "mobiletargeting:CreateSmsTemplate";
	/** [Write] mobiletargeting:CreateVoiceTemplate */
	static readonly CreateVoiceTemplate = "mobiletargeting:CreateVoiceTemplate";
	/** [Write] mobiletargeting:DeleteAdmChannel */
	static readonly DeleteAdmChannel = "mobiletargeting:DeleteAdmChannel";
	/** [Write] mobiletargeting:DeleteApnsChannel */
	static readonly DeleteApnsChannel = "mobiletargeting:DeleteApnsChannel";
	/** [Write] mobiletargeting:DeleteApnsSandboxChannel */
	static readonly DeleteApnsSandboxChannel =
		"mobiletargeting:DeleteApnsSandboxChannel";
	/** [Write] mobiletargeting:DeleteApnsVoipChannel */
	static readonly DeleteApnsVoipChannel =
		"mobiletargeting:DeleteApnsVoipChannel";
	/** [Write] mobiletargeting:DeleteApnsVoipSandboxChannel */
	static readonly DeleteApnsVoipSandboxChannel =
		"mobiletargeting:DeleteApnsVoipSandboxChannel";
	/** [Write] mobiletargeting:DeleteApp */
	static readonly DeleteApp = "mobiletargeting:DeleteApp";
	/** [Write] mobiletargeting:DeleteBaiduChannel */
	static readonly DeleteBaiduChannel = "mobiletargeting:DeleteBaiduChannel";
	/** [Write] mobiletargeting:DeleteCampaign */
	static readonly DeleteCampaign = "mobiletargeting:DeleteCampaign";
	/** [Write] mobiletargeting:DeleteEmailChannel */
	static readonly DeleteEmailChannel = "mobiletargeting:DeleteEmailChannel";
	/** [Write] mobiletargeting:DeleteEmailTemplate */
	static readonly DeleteEmailTemplate = "mobiletargeting:DeleteEmailTemplate";
	/** [Write] mobiletargeting:DeleteEndpoint */
	static readonly DeleteEndpoint = "mobiletargeting:DeleteEndpoint";
	/** [Write] mobiletargeting:DeleteEventStream */
	static readonly DeleteEventStream = "mobiletargeting:DeleteEventStream";
	/** [Write] mobiletargeting:DeleteGcmChannel */
	static readonly DeleteGcmChannel = "mobiletargeting:DeleteGcmChannel";
	/** [Write] mobiletargeting:DeleteInAppTemplate */
	static readonly DeleteInAppTemplate = "mobiletargeting:DeleteInAppTemplate";
	/** [Write] mobiletargeting:DeleteJourney */
	static readonly DeleteJourney = "mobiletargeting:DeleteJourney";
	/** [Write] mobiletargeting:DeletePushTemplate */
	static readonly DeletePushTemplate = "mobiletargeting:DeletePushTemplate";
	/** [Write] mobiletargeting:DeleteRecommenderConfiguration */
	static readonly DeleteRecommenderConfiguration =
		"mobiletargeting:DeleteRecommenderConfiguration";
	/** [Write] mobiletargeting:DeleteSegment */
	static readonly DeleteSegment = "mobiletargeting:DeleteSegment";
	/** [Write] mobiletargeting:DeleteSmsChannel */
	static readonly DeleteSmsChannel = "mobiletargeting:DeleteSmsChannel";
	/** [Write] mobiletargeting:DeleteSmsTemplate */
	static readonly DeleteSmsTemplate = "mobiletargeting:DeleteSmsTemplate";
	/** [Write] mobiletargeting:DeleteUserEndpoints */
	static readonly DeleteUserEndpoints = "mobiletargeting:DeleteUserEndpoints";
	/** [Write] mobiletargeting:DeleteVoiceChannel */
	static readonly DeleteVoiceChannel = "mobiletargeting:DeleteVoiceChannel";
	/** [Write] mobiletargeting:DeleteVoiceTemplate */
	static readonly DeleteVoiceTemplate = "mobiletargeting:DeleteVoiceTemplate";
	/** [Read] mobiletargeting:GetAdmChannel */
	static readonly actionGetAdmChannel = "mobiletargeting:GetAdmChannel";
	/** [Read] mobiletargeting:GetApnsChannel */
	static readonly actionGetApnsChannel = "mobiletargeting:GetApnsChannel";
	/** [Read] mobiletargeting:GetApnsSandboxChannel */
	static readonly actionGetApnsSandboxChannel =
		"mobiletargeting:GetApnsSandboxChannel";
	/** [Read] mobiletargeting:GetApnsVoipChannel */
	static readonly actionGetApnsVoipChannel =
		"mobiletargeting:GetApnsVoipChannel";
	/** [Read] mobiletargeting:GetApnsVoipSandboxChannel */
	static readonly actionGetApnsVoipSandboxChannel =
		"mobiletargeting:GetApnsVoipSandboxChannel";
	/** [Read] mobiletargeting:GetApp */
	static readonly actionGetApp = "mobiletargeting:GetApp";
	/** [Read] mobiletargeting:GetApplicationDateRangeKpi */
	static readonly actionGetApplicationDateRangeKpi =
		"mobiletargeting:GetApplicationDateRangeKpi";
	/** [List] mobiletargeting:GetApplicationSettings */
	static readonly actionGetApplicationSettings =
		"mobiletargeting:GetApplicationSettings";
	/** [Read] mobiletargeting:GetApps */
	static readonly actionGetApps = "mobiletargeting:GetApps";
	/** [Read] mobiletargeting:GetBaiduChannel */
	static readonly actionGetBaiduChannel = "mobiletargeting:GetBaiduChannel";
	/** [Read] mobiletargeting:GetCampaign */
	static readonly actionGetCampaign = "mobiletargeting:GetCampaign";
	/** [List] mobiletargeting:GetCampaignActivities */
	static readonly actionGetCampaignActivities =
		"mobiletargeting:GetCampaignActivities";
	/** [Read] mobiletargeting:GetCampaignDateRangeKpi */
	static readonly actionGetCampaignDateRangeKpi =
		"mobiletargeting:GetCampaignDateRangeKpi";
	/** [Read] mobiletargeting:GetCampaignVersion */
	static readonly actionGetCampaignVersion =
		"mobiletargeting:GetCampaignVersion";
	/** [List] mobiletargeting:GetCampaignVersions */
	static readonly actionGetCampaignVersions =
		"mobiletargeting:GetCampaignVersions";
	/** [List] mobiletargeting:GetCampaigns */
	static readonly actionGetCampaigns = "mobiletargeting:GetCampaigns";
	/** [List] mobiletargeting:GetChannels */
	static readonly actionGetChannels = "mobiletargeting:GetChannels";
	/** [Read] mobiletargeting:GetEmailChannel */
	static readonly actionGetEmailChannel = "mobiletargeting:GetEmailChannel";
	/** [Read] mobiletargeting:GetEmailTemplate */
	static readonly actionGetEmailTemplate = "mobiletargeting:GetEmailTemplate";
	/** [Read] mobiletargeting:GetEndpoint */
	static readonly actionGetEndpoint = "mobiletargeting:GetEndpoint";
	/** [Read] mobiletargeting:GetEventStream */
	static readonly actionGetEventStream = "mobiletargeting:GetEventStream";
	/** [Read] mobiletargeting:GetExportJob */
	static readonly actionGetExportJob = "mobiletargeting:GetExportJob";
	/** [List] mobiletargeting:GetExportJobs */
	static readonly actionGetExportJobs = "mobiletargeting:GetExportJobs";
	/** [Read] mobiletargeting:GetGcmChannel */
	static readonly actionGetGcmChannel = "mobiletargeting:GetGcmChannel";
	/** [Read] mobiletargeting:GetImportJob */
	static readonly actionGetImportJob = "mobiletargeting:GetImportJob";
	/** [List] mobiletargeting:GetImportJobs */
	static readonly actionGetImportJobs = "mobiletargeting:GetImportJobs";
	/** [Read] mobiletargeting:GetInAppMessages */
	static readonly actionGetInAppMessages = "mobiletargeting:GetInAppMessages";
	/** [Read] mobiletargeting:GetInAppTemplate */
	static readonly actionGetInAppTemplate = "mobiletargeting:GetInAppTemplate";
	/** [Read] mobiletargeting:GetJourney */
	static readonly actionGetJourney = "mobiletargeting:GetJourney";
	/** [Read] mobiletargeting:GetJourneyDateRangeKpi */
	static readonly actionGetJourneyDateRangeKpi =
		"mobiletargeting:GetJourneyDateRangeKpi";
	/** [Read] mobiletargeting:GetJourneyExecutionActivityMetrics */
	static readonly actionGetJourneyExecutionActivityMetrics =
		"mobiletargeting:GetJourneyExecutionActivityMetrics";
	/** [Read] mobiletargeting:GetJourneyExecutionMetrics */
	static readonly actionGetJourneyExecutionMetrics =
		"mobiletargeting:GetJourneyExecutionMetrics";
	/** [Read] mobiletargeting:GetJourneyRunExecutionActivityMetrics */
	static readonly actionGetJourneyRunExecutionActivityMetrics =
		"mobiletargeting:GetJourneyRunExecutionActivityMetrics";
	/** [Read] mobiletargeting:GetJourneyRunExecutionMetrics */
	static readonly actionGetJourneyRunExecutionMetrics =
		"mobiletargeting:GetJourneyRunExecutionMetrics";
	/** [List] mobiletargeting:GetJourneyRuns */
	static readonly actionGetJourneyRuns = "mobiletargeting:GetJourneyRuns";
	/** [Read] mobiletargeting:GetPushTemplate */
	static readonly actionGetPushTemplate = "mobiletargeting:GetPushTemplate";
	/** [Read] mobiletargeting:GetRecommenderConfiguration */
	static readonly actionGetRecommenderConfiguration =
		"mobiletargeting:GetRecommenderConfiguration";
	/** [List] mobiletargeting:GetRecommenderConfigurations */
	static readonly actionGetRecommenderConfigurations =
		"mobiletargeting:GetRecommenderConfigurations";
	/** [Read] mobiletargeting:GetReports */
	static readonly actionGetReports = "mobiletargeting:GetReports";
	/** [Read] mobiletargeting:GetSegment */
	static readonly actionGetSegment = "mobiletargeting:GetSegment";
	/** [List] mobiletargeting:GetSegmentExportJobs */
	static readonly actionGetSegmentExportJobs =
		"mobiletargeting:GetSegmentExportJobs";
	/** [List] mobiletargeting:GetSegmentImportJobs */
	static readonly actionGetSegmentImportJobs =
		"mobiletargeting:GetSegmentImportJobs";
	/** [Read] mobiletargeting:GetSegmentVersion */
	static readonly actionGetSegmentVersion = "mobiletargeting:GetSegmentVersion";
	/** [List] mobiletargeting:GetSegmentVersions */
	static readonly actionGetSegmentVersions =
		"mobiletargeting:GetSegmentVersions";
	/** [List] mobiletargeting:GetSegments */
	static readonly actionGetSegments = "mobiletargeting:GetSegments";
	/** [Read] mobiletargeting:GetSmsChannel */
	static readonly actionGetSmsChannel = "mobiletargeting:GetSmsChannel";
	/** [Read] mobiletargeting:GetSmsTemplate */
	static readonly actionGetSmsTemplate = "mobiletargeting:GetSmsTemplate";
	/** [Read] mobiletargeting:GetUserEndpoints */
	static readonly actionGetUserEndpoints = "mobiletargeting:GetUserEndpoints";
	/** [Read] mobiletargeting:GetVoiceChannel */
	static readonly actionGetVoiceChannel = "mobiletargeting:GetVoiceChannel";
	/** [Read] mobiletargeting:GetVoiceTemplate */
	static readonly actionGetVoiceTemplate = "mobiletargeting:GetVoiceTemplate";
	/** [List] mobiletargeting:ListJourneys */
	static readonly ListJourneys = "mobiletargeting:ListJourneys";
	/** [Read] mobiletargeting:ListTagsForResource */
	static readonly ListTagsForResource = "mobiletargeting:ListTagsForResource";
	/** [List] mobiletargeting:ListTemplateVersions */
	static readonly ListTemplateVersions = "mobiletargeting:ListTemplateVersions";
	/** [List] mobiletargeting:ListTemplates */
	static readonly ListTemplates = "mobiletargeting:ListTemplates";
	/** [Read] mobiletargeting:PhoneNumberValidate */
	static readonly PhoneNumberValidate = "mobiletargeting:PhoneNumberValidate";
	/** [Write] mobiletargeting:PutEventStream */
	static readonly PutEventStream = "mobiletargeting:PutEventStream";
	/** [Write] mobiletargeting:PutEvents */
	static readonly PutEvents = "mobiletargeting:PutEvents";
	/** [Write] mobiletargeting:RemoveAttributes */
	static readonly RemoveAttributes = "mobiletargeting:RemoveAttributes";
	/** [Write] mobiletargeting:SendMessages */
	static readonly SendMessages = "mobiletargeting:SendMessages";
	/** [Write] mobiletargeting:SendOTPMessage */
	static readonly SendOTPMessage = "mobiletargeting:SendOTPMessage";
	/** [Write] mobiletargeting:SendUsersMessages */
	static readonly SendUsersMessages = "mobiletargeting:SendUsersMessages";
	/** [Tagging] mobiletargeting:TagResource */
	static readonly TagResource = "mobiletargeting:TagResource";
	/** [Tagging] mobiletargeting:UntagResource */
	static readonly UntagResource = "mobiletargeting:UntagResource";
	/** [Write] mobiletargeting:UpdateAdmChannel */
	static readonly UpdateAdmChannel = "mobiletargeting:UpdateAdmChannel";
	/** [Write] mobiletargeting:UpdateApnsChannel */
	static readonly UpdateApnsChannel = "mobiletargeting:UpdateApnsChannel";
	/** [Write] mobiletargeting:UpdateApnsSandboxChannel */
	static readonly UpdateApnsSandboxChannel =
		"mobiletargeting:UpdateApnsSandboxChannel";
	/** [Write] mobiletargeting:UpdateApnsVoipChannel */
	static readonly UpdateApnsVoipChannel =
		"mobiletargeting:UpdateApnsVoipChannel";
	/** [Write] mobiletargeting:UpdateApnsVoipSandboxChannel */
	static readonly UpdateApnsVoipSandboxChannel =
		"mobiletargeting:UpdateApnsVoipSandboxChannel";
	/** [Write] mobiletargeting:UpdateApplicationSettings */
	static readonly UpdateApplicationSettings =
		"mobiletargeting:UpdateApplicationSettings";
	/** [Write] mobiletargeting:UpdateBaiduChannel */
	static readonly UpdateBaiduChannel = "mobiletargeting:UpdateBaiduChannel";
	/** [Write] mobiletargeting:UpdateCampaign */
	static readonly UpdateCampaign = "mobiletargeting:UpdateCampaign";
	/** [Write] mobiletargeting:UpdateEmailChannel */
	static readonly UpdateEmailChannel = "mobiletargeting:UpdateEmailChannel";
	/** [Write] mobiletargeting:UpdateEmailTemplate */
	static readonly UpdateEmailTemplate = "mobiletargeting:UpdateEmailTemplate";
	/** [Write] mobiletargeting:UpdateEndpoint */
	static readonly UpdateEndpoint = "mobiletargeting:UpdateEndpoint";
	/** [Write] mobiletargeting:UpdateEndpointsBatch */
	static readonly UpdateEndpointsBatch = "mobiletargeting:UpdateEndpointsBatch";
	/** [Write] mobiletargeting:UpdateGcmChannel */
	static readonly UpdateGcmChannel = "mobiletargeting:UpdateGcmChannel";
	/** [Write] mobiletargeting:UpdateInAppTemplate */
	static readonly UpdateInAppTemplate = "mobiletargeting:UpdateInAppTemplate";
	/** [Write] mobiletargeting:UpdateJourney */
	static readonly UpdateJourney = "mobiletargeting:UpdateJourney";
	/** [Write] mobiletargeting:UpdateJourneyState */
	static readonly UpdateJourneyState = "mobiletargeting:UpdateJourneyState";
	/** [Write] mobiletargeting:UpdatePushTemplate */
	static readonly UpdatePushTemplate = "mobiletargeting:UpdatePushTemplate";
	/** [Write] mobiletargeting:UpdateRecommenderConfiguration */
	static readonly UpdateRecommenderConfiguration =
		"mobiletargeting:UpdateRecommenderConfiguration";
	/** [Write] mobiletargeting:UpdateSegment */
	static readonly UpdateSegment = "mobiletargeting:UpdateSegment";
	/** [Write] mobiletargeting:UpdateSmsChannel */
	static readonly UpdateSmsChannel = "mobiletargeting:UpdateSmsChannel";
	/** [Write] mobiletargeting:UpdateSmsTemplate */
	static readonly UpdateSmsTemplate = "mobiletargeting:UpdateSmsTemplate";
	/** [Write] mobiletargeting:UpdateTemplateActiveVersion */
	static readonly UpdateTemplateActiveVersion =
		"mobiletargeting:UpdateTemplateActiveVersion";
	/** [Write] mobiletargeting:UpdateVoiceChannel */
	static readonly UpdateVoiceChannel = "mobiletargeting:UpdateVoiceChannel";
	/** [Write] mobiletargeting:UpdateVoiceTemplate */
	static readonly UpdateVoiceTemplate = "mobiletargeting:UpdateVoiceTemplate";
	/** [Write] mobiletargeting:VerifyOTPMessage */
	static readonly VerifyOTPMessage = "mobiletargeting:VerifyOTPMessage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MobiletargetingActions.actionGetAdmChannel,
		MobiletargetingActions.actionGetApnsChannel,
		MobiletargetingActions.actionGetApnsSandboxChannel,
		MobiletargetingActions.actionGetApnsVoipChannel,
		MobiletargetingActions.actionGetApnsVoipSandboxChannel,
		MobiletargetingActions.actionGetApp,
		MobiletargetingActions.actionGetApplicationDateRangeKpi,
		MobiletargetingActions.actionGetApps,
		MobiletargetingActions.actionGetBaiduChannel,
		MobiletargetingActions.actionGetCampaign,
		MobiletargetingActions.actionGetCampaignDateRangeKpi,
		MobiletargetingActions.actionGetCampaignVersion,
		MobiletargetingActions.actionGetEmailChannel,
		MobiletargetingActions.actionGetEmailTemplate,
		MobiletargetingActions.actionGetEndpoint,
		MobiletargetingActions.actionGetEventStream,
		MobiletargetingActions.actionGetExportJob,
		MobiletargetingActions.actionGetGcmChannel,
		MobiletargetingActions.actionGetImportJob,
		MobiletargetingActions.actionGetInAppMessages,
		MobiletargetingActions.actionGetInAppTemplate,
		MobiletargetingActions.actionGetJourney,
		MobiletargetingActions.actionGetJourneyDateRangeKpi,
		MobiletargetingActions.actionGetJourneyExecutionActivityMetrics,
		MobiletargetingActions.actionGetJourneyExecutionMetrics,
		MobiletargetingActions.actionGetJourneyRunExecutionActivityMetrics,
		MobiletargetingActions.actionGetJourneyRunExecutionMetrics,
		MobiletargetingActions.actionGetPushTemplate,
		MobiletargetingActions.actionGetRecommenderConfiguration,
		MobiletargetingActions.actionGetReports,
		MobiletargetingActions.actionGetSegment,
		MobiletargetingActions.actionGetSegmentVersion,
		MobiletargetingActions.actionGetSmsChannel,
		MobiletargetingActions.actionGetSmsTemplate,
		MobiletargetingActions.actionGetUserEndpoints,
		MobiletargetingActions.actionGetVoiceChannel,
		MobiletargetingActions.actionGetVoiceTemplate,
		MobiletargetingActions.ListTagsForResource,
		MobiletargetingActions.PhoneNumberValidate,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MobiletargetingActions.CreateApp,
		MobiletargetingActions.CreateCampaign,
		MobiletargetingActions.CreateEmailTemplate,
		MobiletargetingActions.CreateExportJob,
		MobiletargetingActions.CreateImportJob,
		MobiletargetingActions.CreateInAppTemplate,
		MobiletargetingActions.CreateJourney,
		MobiletargetingActions.CreatePushTemplate,
		MobiletargetingActions.CreateRecommenderConfiguration,
		MobiletargetingActions.CreateSegment,
		MobiletargetingActions.CreateSmsTemplate,
		MobiletargetingActions.CreateVoiceTemplate,
		MobiletargetingActions.DeleteAdmChannel,
		MobiletargetingActions.DeleteApnsChannel,
		MobiletargetingActions.DeleteApnsSandboxChannel,
		MobiletargetingActions.DeleteApnsVoipChannel,
		MobiletargetingActions.DeleteApnsVoipSandboxChannel,
		MobiletargetingActions.DeleteApp,
		MobiletargetingActions.DeleteBaiduChannel,
		MobiletargetingActions.DeleteCampaign,
		MobiletargetingActions.DeleteEmailChannel,
		MobiletargetingActions.DeleteEmailTemplate,
		MobiletargetingActions.DeleteEndpoint,
		MobiletargetingActions.DeleteEventStream,
		MobiletargetingActions.DeleteGcmChannel,
		MobiletargetingActions.DeleteInAppTemplate,
		MobiletargetingActions.DeleteJourney,
		MobiletargetingActions.DeletePushTemplate,
		MobiletargetingActions.DeleteRecommenderConfiguration,
		MobiletargetingActions.DeleteSegment,
		MobiletargetingActions.DeleteSmsChannel,
		MobiletargetingActions.DeleteSmsTemplate,
		MobiletargetingActions.DeleteUserEndpoints,
		MobiletargetingActions.DeleteVoiceChannel,
		MobiletargetingActions.DeleteVoiceTemplate,
		MobiletargetingActions.PutEventStream,
		MobiletargetingActions.PutEvents,
		MobiletargetingActions.RemoveAttributes,
		MobiletargetingActions.SendMessages,
		MobiletargetingActions.SendOTPMessage,
		MobiletargetingActions.SendUsersMessages,
		MobiletargetingActions.UpdateAdmChannel,
		MobiletargetingActions.UpdateApnsChannel,
		MobiletargetingActions.UpdateApnsSandboxChannel,
		MobiletargetingActions.UpdateApnsVoipChannel,
		MobiletargetingActions.UpdateApnsVoipSandboxChannel,
		MobiletargetingActions.UpdateApplicationSettings,
		MobiletargetingActions.UpdateBaiduChannel,
		MobiletargetingActions.UpdateCampaign,
		MobiletargetingActions.UpdateEmailChannel,
		MobiletargetingActions.UpdateEmailTemplate,
		MobiletargetingActions.UpdateEndpoint,
		MobiletargetingActions.UpdateEndpointsBatch,
		MobiletargetingActions.UpdateGcmChannel,
		MobiletargetingActions.UpdateInAppTemplate,
		MobiletargetingActions.UpdateJourney,
		MobiletargetingActions.UpdateJourneyState,
		MobiletargetingActions.UpdatePushTemplate,
		MobiletargetingActions.UpdateRecommenderConfiguration,
		MobiletargetingActions.UpdateSegment,
		MobiletargetingActions.UpdateSmsChannel,
		MobiletargetingActions.UpdateSmsTemplate,
		MobiletargetingActions.UpdateTemplateActiveVersion,
		MobiletargetingActions.UpdateVoiceChannel,
		MobiletargetingActions.UpdateVoiceTemplate,
		MobiletargetingActions.VerifyOTPMessage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MobiletargetingActions.actionGetApplicationSettings,
		MobiletargetingActions.actionGetCampaignActivities,
		MobiletargetingActions.actionGetCampaignVersions,
		MobiletargetingActions.actionGetCampaigns,
		MobiletargetingActions.actionGetChannels,
		MobiletargetingActions.actionGetExportJobs,
		MobiletargetingActions.actionGetImportJobs,
		MobiletargetingActions.actionGetJourneyRuns,
		MobiletargetingActions.actionGetRecommenderConfigurations,
		MobiletargetingActions.actionGetSegmentExportJobs,
		MobiletargetingActions.actionGetSegmentImportJobs,
		MobiletargetingActions.actionGetSegmentVersions,
		MobiletargetingActions.actionGetSegments,
		MobiletargetingActions.ListJourneys,
		MobiletargetingActions.ListTemplateVersions,
		MobiletargetingActions.ListTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MobiletargetingActions.TagResource,
		MobiletargetingActions.UntagResource,
	];
}

/**
 * Properties for building a app ARN.
 */
export interface MobiletargetingAppArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a app ARN.
 */
export interface MobiletargetingAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a application-metrics ARN.
 */
export interface MobiletargetingApplicationMetricsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The KpiName component of the ARN. */
	readonly kpiName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application-metrics ARN.
 */
export interface MobiletargetingApplicationMetricsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The KpiName component. */
	readonly kpiName: string;
}

/**
 * Properties for building a apps ARN.
 */
export interface MobiletargetingAppsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a apps ARN.
 */
export interface MobiletargetingAppsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a attribute ARN.
 */
export interface MobiletargetingAttributeArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The AttributeType component of the ARN. */
	readonly attributeType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a attribute ARN.
 */
export interface MobiletargetingAttributeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The AttributeType component. */
	readonly attributeType: string;
}

/**
 * Properties for building a campaign ARN.
 */
export interface MobiletargetingCampaignArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The CampaignId component of the ARN. */
	readonly campaignId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign ARN.
 */
export interface MobiletargetingCampaignArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The CampaignId component. */
	readonly campaignId: string;
}

/**
 * Properties for building a campaign-metrics ARN.
 */
export interface MobiletargetingCampaignMetricsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The CampaignId component of the ARN. */
	readonly campaignId: string;
	/** The KpiName component of the ARN. */
	readonly kpiName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign-metrics ARN.
 */
export interface MobiletargetingCampaignMetricsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The CampaignId component. */
	readonly campaignId: string;
	/** The KpiName component. */
	readonly kpiName: string;
}

/**
 * Properties for building a channel ARN.
 */
export interface MobiletargetingChannelArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The ChannelType component of the ARN. */
	readonly channelType: string;
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
export interface MobiletargetingChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The ChannelType component. */
	readonly channelType: string;
}

/**
 * Properties for building a channels ARN.
 */
export interface MobiletargetingChannelsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a channels ARN.
 */
export interface MobiletargetingChannelsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a endpoint ARN.
 */
export interface MobiletargetingEndpointArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The EndpointId component of the ARN. */
	readonly endpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpoint ARN.
 */
export interface MobiletargetingEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The EndpointId component. */
	readonly endpointId: string;
}

/**
 * Properties for building a event-stream ARN.
 */
export interface MobiletargetingEventStreamArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-stream ARN.
 */
export interface MobiletargetingEventStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a events ARN.
 */
export interface MobiletargetingEventsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a events ARN.
 */
export interface MobiletargetingEventsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a export-job ARN.
 */
export interface MobiletargetingExportJobArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a export-job ARN.
 */
export interface MobiletargetingExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a import-job ARN.
 */
export interface MobiletargetingImportJobArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a import-job ARN.
 */
export interface MobiletargetingImportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a journey ARN.
 */
export interface MobiletargetingJourneyArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JourneyId component of the ARN. */
	readonly journeyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a journey ARN.
 */
export interface MobiletargetingJourneyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JourneyId component. */
	readonly journeyId: string;
}

/**
 * Properties for building a journey-execution-activity-metrics ARN.
 */
export interface MobiletargetingJourneyExecutionActivityMetricsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JourneyId component of the ARN. */
	readonly journeyId: string;
	/** The JourneyActivityId component of the ARN. */
	readonly journeyActivityId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a journey-execution-activity-metrics ARN.
 */
export interface MobiletargetingJourneyExecutionActivityMetricsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JourneyId component. */
	readonly journeyId: string;
	/** The JourneyActivityId component. */
	readonly journeyActivityId: string;
}

/**
 * Properties for building a journey-execution-metrics ARN.
 */
export interface MobiletargetingJourneyExecutionMetricsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JourneyId component of the ARN. */
	readonly journeyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a journey-execution-metrics ARN.
 */
export interface MobiletargetingJourneyExecutionMetricsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JourneyId component. */
	readonly journeyId: string;
}

/**
 * Properties for building a journey-metrics ARN.
 */
export interface MobiletargetingJourneyMetricsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The JourneyId component of the ARN. */
	readonly journeyId: string;
	/** The KpiName component of the ARN. */
	readonly kpiName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a journey-metrics ARN.
 */
export interface MobiletargetingJourneyMetricsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The JourneyId component. */
	readonly journeyId: string;
	/** The KpiName component. */
	readonly kpiName: string;
}

/**
 * Properties for building a journeys ARN.
 */
export interface MobiletargetingJourneysArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a journeys ARN.
 */
export interface MobiletargetingJourneysArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a messages ARN.
 */
export interface MobiletargetingMessagesArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a messages ARN.
 */
export interface MobiletargetingMessagesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a otp ARN.
 */
export interface MobiletargetingOtpArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a otp ARN.
 */
export interface MobiletargetingOtpArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a phone-number-validate ARN.
 */
export interface MobiletargetingPhoneNumberValidateArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a phone-number-validate ARN.
 */
export interface MobiletargetingPhoneNumberValidateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a recommender ARN.
 */
export interface MobiletargetingRecommenderArnProps {
	/** The RecommenderId component of the ARN. */
	readonly recommenderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommender ARN.
 */
export interface MobiletargetingRecommenderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RecommenderId component. */
	readonly recommenderId: string;
}

/**
 * Properties for building a recommenders ARN.
 */
export interface MobiletargetingRecommendersArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommenders ARN.
 */
export interface MobiletargetingRecommendersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a reports ARN.
 */
export interface MobiletargetingReportsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reports ARN.
 */
export interface MobiletargetingReportsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a segment ARN.
 */
export interface MobiletargetingSegmentArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The SegmentId component of the ARN. */
	readonly segmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a segment ARN.
 */
export interface MobiletargetingSegmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The SegmentId component. */
	readonly segmentId: string;
}

/**
 * Properties for building a template ARN.
 */
export interface MobiletargetingTemplateArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The TemplateType component of the ARN. */
	readonly templateType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a template ARN.
 */
export interface MobiletargetingTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The TemplateType component. */
	readonly templateType: string;
}

/**
 * Properties for building a templates ARN.
 */
export interface MobiletargetingTemplatesArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a templates ARN.
 */
export interface MobiletargetingTemplatesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a user ARN.
 */
export interface MobiletargetingUserArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The UserId component of the ARN. */
	readonly userId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface MobiletargetingUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The UserId component. */
	readonly userId: string;
}

/**
 * Properties for building a verify-otp ARN.
 */
export interface MobiletargetingVerifyOtpArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a verify-otp ARN.
 */
export interface MobiletargetingVerifyOtpArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

const AppArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)$/;
const ApplicationMetricsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/kpis\/daterange\/(?<kpiName>[^:/?]+)$/;
const AppsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/.*$/;
const AttributeArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/attributes\/(?<attributeType>[^:/?]+)$/;
const CampaignArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/campaigns\/(?<campaignId>[^:/?]+)$/;
const CampaignMetricsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/campaigns\/(?<campaignId>[^:/?]+)\/kpis\/daterange\/(?<kpiName>[^:/?]+)$/;
const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/channels\/(?<channelType>[^:/?]+)$/;
const ChannelsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/channels$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/endpoints\/(?<endpointId>[^:/?]+)$/;
const EventStreamArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/eventstream$/;
const EventsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/events$/;
const ExportJobArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/jobs\/export\/(?<jobId>[^:/?]+)$/;
const ImportJobArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/jobs\/import\/(?<jobId>[^:/?]+)$/;
const JourneyArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/journeys\/(?<journeyId>[^:/?]+)$/;
const JourneyExecutionActivityMetricsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/journeys\/(?<journeyId>[^:/?]+)\/activities\/(?<journeyActivityId>[^:/?]+)\/execution-metrics$/;
const JourneyExecutionMetricsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/journeys\/(?<journeyId>[^:/?]+)\/execution-metrics$/;
const JourneyMetricsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/journeys\/(?<journeyId>[^:/?]+)\/kpis\/daterange\/(?<kpiName>[^:/?]+)$/;
const JourneysArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/journeys$/;
const MessagesArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/messages$/;
const OtpArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/otp$/;
const PhoneNumberValidateArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):phone\/number\/validate$/;
const RecommenderArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):recommenders\/(?<recommenderId>[^:/?]+)$/;
const RecommendersArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):recommenders\/.*$/;
const ReportsArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):reports$/;
const SegmentArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/segments\/(?<segmentId>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):templates\/(?<templateName>[^:/?]+)\/(?<templateType>[^:/?]+)$/;
const TemplatesArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):templates$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/users\/(?<userId>[^:/?]+)$/;
const VerifyOtpArnRegex =
	/^arn:(?<partition>[^:]+):mobiletargeting:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/verify-otp$/;

/**
 * ARN builders, validators, and parsers for mobiletargeting resources.
 */
export class MobiletargetingResources {
	/**
	 * Builds an ARN for the app resource.
	 */
	static app(props: MobiletargetingAppArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app resource.
	 */
	static isValidAppArn(arn: string): boolean {
		return AppArnRegex.test(arn);
	}

	/**
	 * Parses a app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppArn(arn: string): MobiletargetingAppArnComponents {
		const match = AppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the application-metrics resource.
	 */
	static applicationMetrics(
		props: MobiletargetingApplicationMetricsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/kpis/daterange/${props.kpiName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application-metrics resource.
	 */
	static isValidApplicationMetricsArn(arn: string): boolean {
		return ApplicationMetricsArnRegex.test(arn);
	}

	/**
	 * Parses a application-metrics ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationMetricsArn(
		arn: string,
	): MobiletargetingApplicationMetricsArnComponents {
		const match = ApplicationMetricsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application-metrics ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			kpiName: match.groups!.kpiName,
		};
	}

	/**
	 * Builds an ARN for the apps resource.
	 */
	static apps(props: MobiletargetingAppsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the apps resource.
	 */
	static isValidAppsArn(arn: string): boolean {
		return AppsArnRegex.test(arn);
	}

	/**
	 * Parses a apps ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppsArn(arn: string): MobiletargetingAppsArnComponents {
		const match = AppsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid apps ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the attribute resource.
	 */
	static attribute(props: MobiletargetingAttributeArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/attributes/${props.attributeType}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attribute resource.
	 */
	static isValidAttributeArn(arn: string): boolean {
		return AttributeArnRegex.test(arn);
	}

	/**
	 * Parses a attribute ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttributeArn(arn: string): MobiletargetingAttributeArnComponents {
		const match = AttributeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attribute ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			attributeType: match.groups!.attributeType,
		};
	}

	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: MobiletargetingCampaignArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/campaigns/${props.campaignId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign resource.
	 */
	static isValidCampaignArn(arn: string): boolean {
		return CampaignArnRegex.test(arn);
	}

	/**
	 * Parses a campaign ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignArn(arn: string): MobiletargetingCampaignArnComponents {
		const match = CampaignArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			campaignId: match.groups!.campaignId,
		};
	}

	/**
	 * Builds an ARN for the campaign-metrics resource.
	 */
	static campaignMetrics(
		props: MobiletargetingCampaignMetricsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/campaigns/${props.campaignId}/kpis/daterange/${props.kpiName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign-metrics resource.
	 */
	static isValidCampaignMetricsArn(arn: string): boolean {
		return CampaignMetricsArnRegex.test(arn);
	}

	/**
	 * Parses a campaign-metrics ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignMetricsArn(
		arn: string,
	): MobiletargetingCampaignMetricsArnComponents {
		const match = CampaignMetricsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign-metrics ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			campaignId: match.groups!.campaignId,
			kpiName: match.groups!.kpiName,
		};
	}

	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: MobiletargetingChannelArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/channels/${props.channelType}`;
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
	static parseChannelArn(arn: string): MobiletargetingChannelArnComponents {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			channelType: match.groups!.channelType,
		};
	}

	/**
	 * Builds an ARN for the channels resource.
	 */
	static channels(props: MobiletargetingChannelsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/channels`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channels resource.
	 */
	static isValidChannelsArn(arn: string): boolean {
		return ChannelsArnRegex.test(arn);
	}

	/**
	 * Parses a channels ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelsArn(arn: string): MobiletargetingChannelsArnComponents {
		const match = ChannelsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channels ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the endpoint resource.
	 */
	static endpoint(props: MobiletargetingEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/endpoints/${props.endpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): MobiletargetingEndpointArnComponents {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			endpointId: match.groups!.endpointId,
		};
	}

	/**
	 * Builds an ARN for the event-stream resource.
	 */
	static eventStream(props: MobiletargetingEventStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/eventstream`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-stream resource.
	 */
	static isValidEventStreamArn(arn: string): boolean {
		return EventStreamArnRegex.test(arn);
	}

	/**
	 * Parses a event-stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventStreamArn(
		arn: string,
	): MobiletargetingEventStreamArnComponents {
		const match = EventStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the events resource.
	 */
	static events(props: MobiletargetingEventsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/events`;
	}

	/**
	 * Validates whether a string is a valid ARN for the events resource.
	 */
	static isValidEventsArn(arn: string): boolean {
		return EventsArnRegex.test(arn);
	}

	/**
	 * Parses a events ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventsArn(arn: string): MobiletargetingEventsArnComponents {
		const match = EventsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid events ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the export-job resource.
	 */
	static exportJob(props: MobiletargetingExportJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/jobs/export/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export-job resource.
	 */
	static isValidExportJobArn(arn: string): boolean {
		return ExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a export-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportJobArn(arn: string): MobiletargetingExportJobArnComponents {
		const match = ExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the import-job resource.
	 */
	static importJob(props: MobiletargetingImportJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/jobs/import/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the import-job resource.
	 */
	static isValidImportJobArn(arn: string): boolean {
		return ImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a import-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportJobArn(arn: string): MobiletargetingImportJobArnComponents {
		const match = ImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid import-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the journey resource.
	 */
	static journey(props: MobiletargetingJourneyArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/journeys/${props.journeyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the journey resource.
	 */
	static isValidJourneyArn(arn: string): boolean {
		return JourneyArnRegex.test(arn);
	}

	/**
	 * Parses a journey ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJourneyArn(arn: string): MobiletargetingJourneyArnComponents {
		const match = JourneyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid journey ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			journeyId: match.groups!.journeyId,
		};
	}

	/**
	 * Builds an ARN for the journey-execution-activity-metrics resource.
	 */
	static journeyExecutionActivityMetrics(
		props: MobiletargetingJourneyExecutionActivityMetricsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/journeys/${props.journeyId}/activities/${props.journeyActivityId}/execution-metrics`;
	}

	/**
	 * Validates whether a string is a valid ARN for the journey-execution-activity-metrics resource.
	 */
	static isValidJourneyExecutionActivityMetricsArn(arn: string): boolean {
		return JourneyExecutionActivityMetricsArnRegex.test(arn);
	}

	/**
	 * Parses a journey-execution-activity-metrics ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJourneyExecutionActivityMetricsArn(
		arn: string,
	): MobiletargetingJourneyExecutionActivityMetricsArnComponents {
		const match = JourneyExecutionActivityMetricsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid journey-execution-activity-metrics ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			journeyId: match.groups!.journeyId,
			journeyActivityId: match.groups!.journeyActivityId,
		};
	}

	/**
	 * Builds an ARN for the journey-execution-metrics resource.
	 */
	static journeyExecutionMetrics(
		props: MobiletargetingJourneyExecutionMetricsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/journeys/${props.journeyId}/execution-metrics`;
	}

	/**
	 * Validates whether a string is a valid ARN for the journey-execution-metrics resource.
	 */
	static isValidJourneyExecutionMetricsArn(arn: string): boolean {
		return JourneyExecutionMetricsArnRegex.test(arn);
	}

	/**
	 * Parses a journey-execution-metrics ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJourneyExecutionMetricsArn(
		arn: string,
	): MobiletargetingJourneyExecutionMetricsArnComponents {
		const match = JourneyExecutionMetricsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid journey-execution-metrics ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			journeyId: match.groups!.journeyId,
		};
	}

	/**
	 * Builds an ARN for the journey-metrics resource.
	 */
	static journeyMetrics(props: MobiletargetingJourneyMetricsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/journeys/${props.journeyId}/kpis/daterange/${props.kpiName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the journey-metrics resource.
	 */
	static isValidJourneyMetricsArn(arn: string): boolean {
		return JourneyMetricsArnRegex.test(arn);
	}

	/**
	 * Parses a journey-metrics ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJourneyMetricsArn(
		arn: string,
	): MobiletargetingJourneyMetricsArnComponents {
		const match = JourneyMetricsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid journey-metrics ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			journeyId: match.groups!.journeyId,
			kpiName: match.groups!.kpiName,
		};
	}

	/**
	 * Builds an ARN for the journeys resource.
	 */
	static journeys(props: MobiletargetingJourneysArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/journeys`;
	}

	/**
	 * Validates whether a string is a valid ARN for the journeys resource.
	 */
	static isValidJourneysArn(arn: string): boolean {
		return JourneysArnRegex.test(arn);
	}

	/**
	 * Parses a journeys ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJourneysArn(arn: string): MobiletargetingJourneysArnComponents {
		const match = JourneysArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid journeys ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the messages resource.
	 */
	static messages(props: MobiletargetingMessagesArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/messages`;
	}

	/**
	 * Validates whether a string is a valid ARN for the messages resource.
	 */
	static isValidMessagesArn(arn: string): boolean {
		return MessagesArnRegex.test(arn);
	}

	/**
	 * Parses a messages ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMessagesArn(arn: string): MobiletargetingMessagesArnComponents {
		const match = MessagesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid messages ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the otp resource.
	 */
	static otp(props: MobiletargetingOtpArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/otp`;
	}

	/**
	 * Validates whether a string is a valid ARN for the otp resource.
	 */
	static isValidOtpArn(arn: string): boolean {
		return OtpArnRegex.test(arn);
	}

	/**
	 * Parses a otp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOtpArn(arn: string): MobiletargetingOtpArnComponents {
		const match = OtpArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid otp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the phone-number-validate resource.
	 */
	static phoneNumberValidate(
		props: MobiletargetingPhoneNumberValidateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:phone/number/validate`;
	}

	/**
	 * Validates whether a string is a valid ARN for the phone-number-validate resource.
	 */
	static isValidPhoneNumberValidateArn(arn: string): boolean {
		return PhoneNumberValidateArnRegex.test(arn);
	}

	/**
	 * Parses a phone-number-validate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePhoneNumberValidateArn(
		arn: string,
	): MobiletargetingPhoneNumberValidateArnComponents {
		const match = PhoneNumberValidateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid phone-number-validate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the recommender resource.
	 */
	static recommender(props: MobiletargetingRecommenderArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:recommenders/${props.recommenderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommender resource.
	 */
	static isValidRecommenderArn(arn: string): boolean {
		return RecommenderArnRegex.test(arn);
	}

	/**
	 * Parses a recommender ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommenderArn(
		arn: string,
	): MobiletargetingRecommenderArnComponents {
		const match = RecommenderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommender ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recommenderId: match.groups!.recommenderId,
		};
	}

	/**
	 * Builds an ARN for the recommenders resource.
	 */
	static recommenders(props: MobiletargetingRecommendersArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:recommenders/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommenders resource.
	 */
	static isValidRecommendersArn(arn: string): boolean {
		return RecommendersArnRegex.test(arn);
	}

	/**
	 * Parses a recommenders ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommendersArn(
		arn: string,
	): MobiletargetingRecommendersArnComponents {
		const match = RecommendersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommenders ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the reports resource.
	 */
	static reports(props: MobiletargetingReportsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:reports`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reports resource.
	 */
	static isValidReportsArn(arn: string): boolean {
		return ReportsArnRegex.test(arn);
	}

	/**
	 * Parses a reports ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportsArn(arn: string): MobiletargetingReportsArnComponents {
		const match = ReportsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reports ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the segment resource.
	 */
	static segment(props: MobiletargetingSegmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/segments/${props.segmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the segment resource.
	 */
	static isValidSegmentArn(arn: string): boolean {
		return SegmentArnRegex.test(arn);
	}

	/**
	 * Parses a segment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSegmentArn(arn: string): MobiletargetingSegmentArnComponents {
		const match = SegmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid segment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			segmentId: match.groups!.segmentId,
		};
	}

	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: MobiletargetingTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:templates/${props.templateName}/${props.templateType}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): MobiletargetingTemplateArnComponents {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			templateType: match.groups!.templateType,
		};
	}

	/**
	 * Builds an ARN for the templates resource.
	 */
	static templates(props: MobiletargetingTemplatesArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:templates`;
	}

	/**
	 * Validates whether a string is a valid ARN for the templates resource.
	 */
	static isValidTemplatesArn(arn: string): boolean {
		return TemplatesArnRegex.test(arn);
	}

	/**
	 * Parses a templates ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplatesArn(arn: string): MobiletargetingTemplatesArnComponents {
		const match = TemplatesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid templates ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: MobiletargetingUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/users/${props.userId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): MobiletargetingUserArnComponents {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			userId: match.groups!.userId,
		};
	}

	/**
	 * Builds an ARN for the verify-otp resource.
	 */
	static verifyOtp(props: MobiletargetingVerifyOtpArnProps): string {
		return `arn:${props.partition ?? "aws"}:mobiletargeting:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/verify-otp`;
	}

	/**
	 * Validates whether a string is a valid ARN for the verify-otp resource.
	 */
	static isValidVerifyOtpArn(arn: string): boolean {
		return VerifyOtpArnRegex.test(arn);
	}

	/**
	 * Parses a verify-otp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVerifyOtpArn(arn: string): MobiletargetingVerifyOtpArnComponents {
		const match = VerifyOtpArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid verify-otp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mobiletargeting.
 */
export class MobiletargetingOperations {
	/** IAM actions required for the CreateApp API call. */
	static readonly CreateApp: string[] = [
		"mobiletargeting:CreateApp",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CreateCampaign: string[] = [
		"mobiletargeting:CreateCampaign",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateEmailTemplate API call. */
	static readonly CreateEmailTemplate: string[] = [
		"mobiletargeting:CreateEmailTemplate",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateExportJob API call. */
	static readonly CreateExportJob: string[] = [
		"mobiletargeting:CreateExportJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateImportJob API call. */
	static readonly CreateImportJob: string[] = [
		"mobiletargeting:CreateImportJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInAppTemplate API call. */
	static readonly CreateInAppTemplate: string[] = [
		"mobiletargeting:CreateInAppTemplate",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateJourney API call. */
	static readonly CreateJourney: string[] = [
		"mobiletargeting:CreateJourney",
		"iam:PassRole",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreatePushTemplate API call. */
	static readonly CreatePushTemplate: string[] = [
		"mobiletargeting:CreatePushTemplate",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateRecommenderConfiguration API call. */
	static readonly CreateRecommenderConfiguration: string[] = [
		"mobiletargeting:CreateRecommenderConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSegment API call. */
	static readonly CreateSegment: string[] = [
		"mobiletargeting:CreateSegment",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateSmsTemplate API call. */
	static readonly CreateSmsTemplate: string[] = [
		"mobiletargeting:CreateSmsTemplate",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the CreateVoiceTemplate API call. */
	static readonly CreateVoiceTemplate: string[] = [
		"mobiletargeting:CreateVoiceTemplate",
		"mobiletargeting:TagResource",
	];
	/** IAM actions required for the DeleteAdmChannel API call. */
	static readonly DeleteAdmChannel: string[] = [
		"mobiletargeting:DeleteAdmChannel",
	];
	/** IAM actions required for the DeleteApnsChannel API call. */
	static readonly DeleteApnsChannel: string[] = [
		"mobiletargeting:DeleteApnsChannel",
	];
	/** IAM actions required for the DeleteApnsSandboxChannel API call. */
	static readonly DeleteApnsSandboxChannel: string[] = [
		"mobiletargeting:DeleteApnsSandboxChannel",
	];
	/** IAM actions required for the DeleteApnsVoipChannel API call. */
	static readonly DeleteApnsVoipChannel: string[] = [
		"mobiletargeting:DeleteApnsVoipChannel",
	];
	/** IAM actions required for the DeleteApnsVoipSandboxChannel API call. */
	static readonly DeleteApnsVoipSandboxChannel: string[] = [
		"mobiletargeting:DeleteApnsVoipSandboxChannel",
	];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DeleteApp: string[] = ["mobiletargeting:DeleteApp"];
	/** IAM actions required for the DeleteBaiduChannel API call. */
	static readonly DeleteBaiduChannel: string[] = [
		"mobiletargeting:DeleteBaiduChannel",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DeleteCampaign: string[] = ["mobiletargeting:DeleteCampaign"];
	/** IAM actions required for the DeleteEmailChannel API call. */
	static readonly DeleteEmailChannel: string[] = [
		"mobiletargeting:DeleteEmailChannel",
	];
	/** IAM actions required for the DeleteEmailTemplate API call. */
	static readonly DeleteEmailTemplate: string[] = [
		"mobiletargeting:DeleteEmailTemplate",
	];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["mobiletargeting:DeleteEndpoint"];
	/** IAM actions required for the DeleteEventStream API call. */
	static readonly DeleteEventStream: string[] = [
		"mobiletargeting:DeleteEventStream",
	];
	/** IAM actions required for the DeleteGcmChannel API call. */
	static readonly DeleteGcmChannel: string[] = [
		"mobiletargeting:DeleteGcmChannel",
	];
	/** IAM actions required for the DeleteInAppTemplate API call. */
	static readonly DeleteInAppTemplate: string[] = [
		"mobiletargeting:DeleteInAppTemplate",
	];
	/** IAM actions required for the DeleteJourney API call. */
	static readonly DeleteJourney: string[] = ["mobiletargeting:DeleteJourney"];
	/** IAM actions required for the DeletePushTemplate API call. */
	static readonly DeletePushTemplate: string[] = [
		"mobiletargeting:DeletePushTemplate",
	];
	/** IAM actions required for the DeleteRecommenderConfiguration API call. */
	static readonly DeleteRecommenderConfiguration: string[] = [
		"mobiletargeting:DeleteRecommenderConfiguration",
	];
	/** IAM actions required for the DeleteSegment API call. */
	static readonly DeleteSegment: string[] = ["mobiletargeting:DeleteSegment"];
	/** IAM actions required for the DeleteSmsChannel API call. */
	static readonly DeleteSmsChannel: string[] = [
		"mobiletargeting:DeleteSmsChannel",
	];
	/** IAM actions required for the DeleteSmsTemplate API call. */
	static readonly DeleteSmsTemplate: string[] = [
		"mobiletargeting:DeleteSmsTemplate",
	];
	/** IAM actions required for the DeleteUserEndpoints API call. */
	static readonly DeleteUserEndpoints: string[] = [
		"mobiletargeting:DeleteUserEndpoints",
	];
	/** IAM actions required for the DeleteVoiceChannel API call. */
	static readonly DeleteVoiceChannel: string[] = [
		"mobiletargeting:DeleteVoiceChannel",
	];
	/** IAM actions required for the DeleteVoiceTemplate API call. */
	static readonly DeleteVoiceTemplate: string[] = [
		"mobiletargeting:DeleteVoiceTemplate",
	];
	/** IAM actions required for the GetAdmChannel API call. */
	static readonly opGetAdmChannel: string[] = ["mobiletargeting:GetAdmChannel"];
	/** IAM actions required for the GetApnsChannel API call. */
	static readonly opGetApnsChannel: string[] = [
		"mobiletargeting:GetApnsChannel",
	];
	/** IAM actions required for the GetApnsSandboxChannel API call. */
	static readonly opGetApnsSandboxChannel: string[] = [
		"mobiletargeting:GetApnsSandboxChannel",
	];
	/** IAM actions required for the GetApnsVoipChannel API call. */
	static readonly opGetApnsVoipChannel: string[] = [
		"mobiletargeting:GetApnsVoipChannel",
	];
	/** IAM actions required for the GetApnsVoipSandboxChannel API call. */
	static readonly opGetApnsVoipSandboxChannel: string[] = [
		"mobiletargeting:GetApnsVoipSandboxChannel",
	];
	/** IAM actions required for the GetApp API call. */
	static readonly opGetApp: string[] = ["mobiletargeting:GetApp"];
	/** IAM actions required for the GetApplicationDateRangeKpi API call. */
	static readonly opGetApplicationDateRangeKpi: string[] = [
		"mobiletargeting:GetApplicationDateRangeKpi",
	];
	/** IAM actions required for the GetApplicationSettings API call. */
	static readonly opGetApplicationSettings: string[] = [
		"mobiletargeting:GetApplicationSettings",
	];
	/** IAM actions required for the GetApps API call. */
	static readonly opGetApps: string[] = ["mobiletargeting:GetApps"];
	/** IAM actions required for the GetBaiduChannel API call. */
	static readonly opGetBaiduChannel: string[] = [
		"mobiletargeting:GetBaiduChannel",
	];
	/** IAM actions required for the GetCampaign API call. */
	static readonly opGetCampaign: string[] = ["mobiletargeting:GetCampaign"];
	/** IAM actions required for the GetCampaignActivities API call. */
	static readonly opGetCampaignActivities: string[] = [
		"mobiletargeting:GetCampaignActivities",
	];
	/** IAM actions required for the GetCampaignDateRangeKpi API call. */
	static readonly opGetCampaignDateRangeKpi: string[] = [
		"mobiletargeting:GetCampaignDateRangeKpi",
	];
	/** IAM actions required for the GetCampaignVersion API call. */
	static readonly opGetCampaignVersion: string[] = [
		"mobiletargeting:GetCampaignVersion",
	];
	/** IAM actions required for the GetCampaignVersions API call. */
	static readonly opGetCampaignVersions: string[] = [
		"mobiletargeting:GetCampaignVersions",
	];
	/** IAM actions required for the GetCampaigns API call. */
	static readonly opGetCampaigns: string[] = ["mobiletargeting:GetCampaigns"];
	/** IAM actions required for the GetChannels API call. */
	static readonly opGetChannels: string[] = ["mobiletargeting:GetChannels"];
	/** IAM actions required for the GetEmailChannel API call. */
	static readonly opGetEmailChannel: string[] = [
		"mobiletargeting:GetEmailChannel",
	];
	/** IAM actions required for the GetEmailTemplate API call. */
	static readonly opGetEmailTemplate: string[] = [
		"mobiletargeting:GetEmailTemplate",
	];
	/** IAM actions required for the GetEndpoint API call. */
	static readonly opGetEndpoint: string[] = ["mobiletargeting:GetEndpoint"];
	/** IAM actions required for the GetEventStream API call. */
	static readonly opGetEventStream: string[] = [
		"mobiletargeting:GetEventStream",
	];
	/** IAM actions required for the GetExportJob API call. */
	static readonly opGetExportJob: string[] = ["mobiletargeting:GetExportJob"];
	/** IAM actions required for the GetExportJobs API call. */
	static readonly opGetExportJobs: string[] = ["mobiletargeting:GetExportJobs"];
	/** IAM actions required for the GetGcmChannel API call. */
	static readonly opGetGcmChannel: string[] = ["mobiletargeting:GetGcmChannel"];
	/** IAM actions required for the GetImportJob API call. */
	static readonly opGetImportJob: string[] = ["mobiletargeting:GetImportJob"];
	/** IAM actions required for the GetImportJobs API call. */
	static readonly opGetImportJobs: string[] = ["mobiletargeting:GetImportJobs"];
	/** IAM actions required for the GetInAppMessages API call. */
	static readonly opGetInAppMessages: string[] = [
		"mobiletargeting:GetInAppMessages",
	];
	/** IAM actions required for the GetInAppTemplate API call. */
	static readonly opGetInAppTemplate: string[] = [
		"mobiletargeting:GetInAppTemplate",
	];
	/** IAM actions required for the GetJourney API call. */
	static readonly opGetJourney: string[] = ["mobiletargeting:GetJourney"];
	/** IAM actions required for the GetJourneyDateRangeKpi API call. */
	static readonly opGetJourneyDateRangeKpi: string[] = [
		"mobiletargeting:GetJourneyDateRangeKpi",
	];
	/** IAM actions required for the GetJourneyExecutionActivityMetrics API call. */
	static readonly opGetJourneyExecutionActivityMetrics: string[] = [
		"mobiletargeting:GetJourneyExecutionActivityMetrics",
	];
	/** IAM actions required for the GetJourneyExecutionMetrics API call. */
	static readonly opGetJourneyExecutionMetrics: string[] = [
		"mobiletargeting:GetJourneyExecutionMetrics",
	];
	/** IAM actions required for the GetJourneyRunExecutionActivityMetrics API call. */
	static readonly opGetJourneyRunExecutionActivityMetrics: string[] = [
		"mobiletargeting:GetJourneyRunExecutionActivityMetrics",
	];
	/** IAM actions required for the GetJourneyRunExecutionMetrics API call. */
	static readonly opGetJourneyRunExecutionMetrics: string[] = [
		"mobiletargeting:GetJourneyRunExecutionMetrics",
	];
	/** IAM actions required for the GetJourneyRuns API call. */
	static readonly opGetJourneyRuns: string[] = [
		"mobiletargeting:GetJourneyRuns",
	];
	/** IAM actions required for the GetPushTemplate API call. */
	static readonly opGetPushTemplate: string[] = [
		"mobiletargeting:GetPushTemplate",
	];
	/** IAM actions required for the GetRecommenderConfiguration API call. */
	static readonly opGetRecommenderConfiguration: string[] = [
		"mobiletargeting:GetRecommenderConfiguration",
	];
	/** IAM actions required for the GetRecommenderConfigurations API call. */
	static readonly opGetRecommenderConfigurations: string[] = [
		"mobiletargeting:GetRecommenderConfigurations",
	];
	/** IAM actions required for the GetSegment API call. */
	static readonly opGetSegment: string[] = ["mobiletargeting:GetSegment"];
	/** IAM actions required for the GetSegmentExportJobs API call. */
	static readonly opGetSegmentExportJobs: string[] = [
		"mobiletargeting:GetSegmentExportJobs",
	];
	/** IAM actions required for the GetSegmentImportJobs API call. */
	static readonly opGetSegmentImportJobs: string[] = [
		"mobiletargeting:GetSegmentImportJobs",
	];
	/** IAM actions required for the GetSegmentVersion API call. */
	static readonly opGetSegmentVersion: string[] = [
		"mobiletargeting:GetSegmentVersion",
	];
	/** IAM actions required for the GetSegmentVersions API call. */
	static readonly opGetSegmentVersions: string[] = [
		"mobiletargeting:GetSegmentVersions",
	];
	/** IAM actions required for the GetSegments API call. */
	static readonly opGetSegments: string[] = ["mobiletargeting:GetSegments"];
	/** IAM actions required for the GetSmsChannel API call. */
	static readonly opGetSmsChannel: string[] = ["mobiletargeting:GetSmsChannel"];
	/** IAM actions required for the GetSmsTemplate API call. */
	static readonly opGetSmsTemplate: string[] = [
		"mobiletargeting:GetSmsTemplate",
	];
	/** IAM actions required for the GetUserEndpoints API call. */
	static readonly opGetUserEndpoints: string[] = [
		"mobiletargeting:GetUserEndpoints",
	];
	/** IAM actions required for the GetVoiceChannel API call. */
	static readonly opGetVoiceChannel: string[] = [
		"mobiletargeting:GetVoiceChannel",
	];
	/** IAM actions required for the GetVoiceTemplate API call. */
	static readonly opGetVoiceTemplate: string[] = [
		"mobiletargeting:GetVoiceTemplate",
	];
	/** IAM actions required for the ListJourneys API call. */
	static readonly ListJourneys: string[] = ["mobiletargeting:ListJourneys"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mobiletargeting:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateVersions API call. */
	static readonly ListTemplateVersions: string[] = [
		"mobiletargeting:ListTemplateVersions",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = ["mobiletargeting:ListTemplates"];
	/** IAM actions required for the PhoneNumberValidate API call. */
	static readonly PhoneNumberValidate: string[] = [
		"mobiletargeting:PhoneNumberValidate",
	];
	/** IAM actions required for the PutEventStream API call. */
	static readonly PutEventStream: string[] = [
		"iam:PassRole",
		"mobiletargeting:PutEventStream",
	];
	/** IAM actions required for the PutEvents API call. */
	static readonly PutEvents: string[] = ["mobiletargeting:PutEvents"];
	/** IAM actions required for the RemoveAttributes API call. */
	static readonly RemoveAttributes: string[] = [
		"mobiletargeting:RemoveAttributes",
	];
	/** IAM actions required for the SendMessages API call. */
	static readonly SendMessages: string[] = ["mobiletargeting:SendMessages"];
	/** IAM actions required for the SendOTPMessage API call. */
	static readonly SendOTPMessage: string[] = ["mobiletargeting:SendOTPMessage"];
	/** IAM actions required for the SendUsersMessages API call. */
	static readonly SendUsersMessages: string[] = [
		"mobiletargeting:SendUsersMessages",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mobiletargeting:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mobiletargeting:UntagResource"];
	/** IAM actions required for the UpdateAdmChannel API call. */
	static readonly UpdateAdmChannel: string[] = [
		"mobiletargeting:UpdateAdmChannel",
	];
	/** IAM actions required for the UpdateApnsChannel API call. */
	static readonly UpdateApnsChannel: string[] = [
		"mobiletargeting:UpdateApnsChannel",
	];
	/** IAM actions required for the UpdateApnsSandboxChannel API call. */
	static readonly UpdateApnsSandboxChannel: string[] = [
		"mobiletargeting:UpdateApnsSandboxChannel",
	];
	/** IAM actions required for the UpdateApnsVoipChannel API call. */
	static readonly UpdateApnsVoipChannel: string[] = [
		"mobiletargeting:UpdateApnsVoipChannel",
	];
	/** IAM actions required for the UpdateApnsVoipSandboxChannel API call. */
	static readonly UpdateApnsVoipSandboxChannel: string[] = [
		"mobiletargeting:UpdateApnsVoipSandboxChannel",
	];
	/** IAM actions required for the UpdateApplicationSettings API call. */
	static readonly UpdateApplicationSettings: string[] = [
		"mobiletargeting:UpdateApplicationSettings",
	];
	/** IAM actions required for the UpdateBaiduChannel API call. */
	static readonly UpdateBaiduChannel: string[] = [
		"mobiletargeting:UpdateBaiduChannel",
	];
	/** IAM actions required for the UpdateCampaign API call. */
	static readonly UpdateCampaign: string[] = ["mobiletargeting:UpdateCampaign"];
	/** IAM actions required for the UpdateEmailChannel API call. */
	static readonly UpdateEmailChannel: string[] = [
		"iam:PassRole",
		"mobiletargeting:UpdateEmailChannel",
	];
	/** IAM actions required for the UpdateEmailTemplate API call. */
	static readonly UpdateEmailTemplate: string[] = [
		"mobiletargeting:UpdateEmailTemplate",
	];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UpdateEndpoint: string[] = ["mobiletargeting:UpdateEndpoint"];
	/** IAM actions required for the UpdateEndpointsBatch API call. */
	static readonly UpdateEndpointsBatch: string[] = [
		"mobiletargeting:UpdateEndpointsBatch",
	];
	/** IAM actions required for the UpdateGcmChannel API call. */
	static readonly UpdateGcmChannel: string[] = [
		"mobiletargeting:UpdateGcmChannel",
	];
	/** IAM actions required for the UpdateInAppTemplate API call. */
	static readonly UpdateInAppTemplate: string[] = [
		"mobiletargeting:UpdateInAppTemplate",
	];
	/** IAM actions required for the UpdateJourney API call. */
	static readonly UpdateJourney: string[] = [
		"iam:PassRole",
		"mobiletargeting:UpdateJourney",
	];
	/** IAM actions required for the UpdateJourneyState API call. */
	static readonly UpdateJourneyState: string[] = [
		"mobiletargeting:UpdateJourneyState",
	];
	/** IAM actions required for the UpdatePushTemplate API call. */
	static readonly UpdatePushTemplate: string[] = [
		"mobiletargeting:UpdatePushTemplate",
	];
	/** IAM actions required for the UpdateRecommenderConfiguration API call. */
	static readonly UpdateRecommenderConfiguration: string[] = [
		"iam:PassRole",
		"mobiletargeting:UpdateRecommenderConfiguration",
	];
	/** IAM actions required for the UpdateSegment API call. */
	static readonly UpdateSegment: string[] = ["mobiletargeting:UpdateSegment"];
	/** IAM actions required for the UpdateSmsChannel API call. */
	static readonly UpdateSmsChannel: string[] = [
		"mobiletargeting:UpdateSmsChannel",
	];
	/** IAM actions required for the UpdateSmsTemplate API call. */
	static readonly UpdateSmsTemplate: string[] = [
		"mobiletargeting:UpdateSmsTemplate",
	];
	/** IAM actions required for the UpdateTemplateActiveVersion API call. */
	static readonly UpdateTemplateActiveVersion: string[] = [
		"mobiletargeting:UpdateTemplateActiveVersion",
	];
	/** IAM actions required for the UpdateVoiceChannel API call. */
	static readonly UpdateVoiceChannel: string[] = [
		"mobiletargeting:UpdateVoiceChannel",
	];
	/** IAM actions required for the UpdateVoiceTemplate API call. */
	static readonly UpdateVoiceTemplate: string[] = [
		"mobiletargeting:UpdateVoiceTemplate",
	];
	/** IAM actions required for the VerifyOTPMessage API call. */
	static readonly VerifyOTPMessage: string[] = [
		"mobiletargeting:VerifyOTPMessage",
	];
}

/**
 * Condition key constants and builders for mobiletargeting.
 */
export class MobiletargetingConditions {
	/** Condition keys applicable to the CreateApp action. */
	static readonly CreateAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CreateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEmailTemplate action. */
	static readonly CreateEmailTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInAppTemplate action. */
	static readonly CreateInAppTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJourney action. */
	static readonly CreateJourneyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePushTemplate action. */
	static readonly CreatePushTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSegment action. */
	static readonly CreateSegmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSmsTemplate action. */
	static readonly CreateSmsTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVoiceTemplate action. */
	static readonly CreateVoiceTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCampaign action. */
	static readonly UpdateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateEmailTemplate action. */
	static readonly UpdateEmailTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateInAppTemplate action. */
	static readonly UpdateInAppTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateJourney action. */
	static readonly UpdateJourneyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateJourneyState action. */
	static readonly UpdateJourneyStateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePushTemplate action. */
	static readonly UpdatePushTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSegment action. */
	static readonly UpdateSegmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSmsTemplate action. */
	static readonly UpdateSmsTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateVoiceTemplate action. */
	static readonly UpdateVoiceTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
