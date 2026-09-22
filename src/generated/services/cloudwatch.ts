// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudwatch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudwatch service.
 */
export class CloudWatchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudwatch";

	/** [PermissionManagement] cloudwatch:AssumeAccessProfile */
	static readonly AssumeAccessProfile = "cloudwatch:AssumeAccessProfile";
	/** [Read] cloudwatch:BatchGetServiceLevelIndicatorReport */
	static readonly BatchGetServiceLevelIndicatorReport =
		"cloudwatch:BatchGetServiceLevelIndicatorReport";
	/** [Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport */
	static readonly BatchGetServiceLevelObjectiveBudgetReport =
		"cloudwatch:BatchGetServiceLevelObjectiveBudgetReport";
	/** [Write] cloudwatch:CallWithBearerToken */
	static readonly CallWithBearerToken = "cloudwatch:CallWithBearerToken";
	/** [PermissionManagement] cloudwatch:CreateAccessGrant */
	static readonly CreateAccessGrant = "cloudwatch:CreateAccessGrant";
	/** [PermissionManagement] cloudwatch:CreateAccessProfile */
	static readonly CreateAccessProfile = "cloudwatch:CreateAccessProfile";
	/** [Write] cloudwatch:CreateAlert */
	static readonly CreateAlert = "cloudwatch:CreateAlert";
	/** [Write] cloudwatch:CreateDomain */
	static readonly CreateDomain = "cloudwatch:CreateDomain";
	/** [PermissionManagement] cloudwatch:CreateDomainAccessGrantForOrganization */
	static readonly CreateDomainAccessGrantForOrganization =
		"cloudwatch:CreateDomainAccessGrantForOrganization";
	/** [Write] cloudwatch:CreateDomainForOrganization */
	static readonly CreateDomainForOrganization =
		"cloudwatch:CreateDomainForOrganization";
	/** [Write] cloudwatch:CreateIngestionEndpoint */
	static readonly CreateIngestionEndpoint =
		"cloudwatch:CreateIngestionEndpoint";
	/** [Write] cloudwatch:CreateIntegration */
	static readonly CreateIntegration = "cloudwatch:CreateIntegration";
	/** [Write] cloudwatch:CreateOmniDashboard */
	static readonly CreateOmniDashboard = "cloudwatch:CreateOmniDashboard";
	/** [Write] cloudwatch:CreateOmniThread */
	static readonly CreateOmniThread = "cloudwatch:CreateOmniThread";
	/** [Write] cloudwatch:CreateOneTimeDeepLinkCode */
	static readonly CreateOneTimeDeepLinkCode =
		"cloudwatch:CreateOneTimeDeepLinkCode";
	/** [Write] cloudwatch:CreateServiceLevelObjective */
	static readonly CreateServiceLevelObjective =
		"cloudwatch:CreateServiceLevelObjective";
	/** [Write] cloudwatch:CreateSpace */
	static readonly CreateSpace = "cloudwatch:CreateSpace";
	/** [Write] cloudwatch:CreateView */
	static readonly CreateView = "cloudwatch:CreateView";
	/** [PermissionManagement] cloudwatch:DeleteAccessGrant */
	static readonly DeleteAccessGrant = "cloudwatch:DeleteAccessGrant";
	/** [PermissionManagement] cloudwatch:DeleteAccessProfile */
	static readonly DeleteAccessProfile = "cloudwatch:DeleteAccessProfile";
	/** [Write] cloudwatch:DeleteAlarmMuteRule */
	static readonly DeleteAlarmMuteRule = "cloudwatch:DeleteAlarmMuteRule";
	/** [Write] cloudwatch:DeleteAlarms */
	static readonly DeleteAlarms = "cloudwatch:DeleteAlarms";
	/** [Write] cloudwatch:DeleteAlert */
	static readonly DeleteAlert = "cloudwatch:DeleteAlert";
	/** [Write] cloudwatch:DeleteAnomalyDetector */
	static readonly DeleteAnomalyDetector = "cloudwatch:DeleteAnomalyDetector";
	/** [Write] cloudwatch:DeleteDashboards */
	static readonly DeleteDashboards = "cloudwatch:DeleteDashboards";
	/** [Write] cloudwatch:DeleteDomain */
	static readonly DeleteDomain = "cloudwatch:DeleteDomain";
	/** [PermissionManagement] cloudwatch:DeleteDomainAccessGrantForOrganization */
	static readonly DeleteDomainAccessGrantForOrganization =
		"cloudwatch:DeleteDomainAccessGrantForOrganization";
	/** [Write] cloudwatch:DeleteDomainForOrganization */
	static readonly DeleteDomainForOrganization =
		"cloudwatch:DeleteDomainForOrganization";
	/** [Write] cloudwatch:DeleteIngestionEndpoint */
	static readonly DeleteIngestionEndpoint =
		"cloudwatch:DeleteIngestionEndpoint";
	/** [Write] cloudwatch:DeleteInsightRules */
	static readonly DeleteInsightRules = "cloudwatch:DeleteInsightRules";
	/** [Write] cloudwatch:DeleteIntegration */
	static readonly DeleteIntegration = "cloudwatch:DeleteIntegration";
	/** [Write] cloudwatch:DeleteMetricStream */
	static readonly DeleteMetricStream = "cloudwatch:DeleteMetricStream";
	/** [Write] cloudwatch:DeleteOmniDashboard */
	static readonly DeleteOmniDashboard = "cloudwatch:DeleteOmniDashboard";
	/** [Write] cloudwatch:DeleteOmniThread */
	static readonly DeleteOmniThread = "cloudwatch:DeleteOmniThread";
	/** [Write] cloudwatch:DeletePipelineRule */
	static readonly DeletePipelineRule = "cloudwatch:DeletePipelineRule";
	/** [Write] cloudwatch:DeleteServiceLevelObjective */
	static readonly DeleteServiceLevelObjective =
		"cloudwatch:DeleteServiceLevelObjective";
	/** [Write] cloudwatch:DeleteSpace */
	static readonly DeleteSpace = "cloudwatch:DeleteSpace";
	/** [Write] cloudwatch:DeleteView */
	static readonly DeleteView = "cloudwatch:DeleteView";
	/** [Read] cloudwatch:DescribeAlarmHistory */
	static readonly DescribeAlarmHistory = "cloudwatch:DescribeAlarmHistory";
	/** [Read] cloudwatch:DescribeAlarms */
	static readonly DescribeAlarms = "cloudwatch:DescribeAlarms";
	/** [Read] cloudwatch:DescribeAlarmsForMetric */
	static readonly DescribeAlarmsForMetric =
		"cloudwatch:DescribeAlarmsForMetric";
	/** [Read] cloudwatch:DescribeAnomalyDetectors */
	static readonly DescribeAnomalyDetectors =
		"cloudwatch:DescribeAnomalyDetectors";
	/** [Read] cloudwatch:DescribeInsightRules */
	static readonly DescribeInsightRules = "cloudwatch:DescribeInsightRules";
	/** [Write] cloudwatch:DisableAlarmActions */
	static readonly DisableAlarmActions = "cloudwatch:DisableAlarmActions";
	/** [Write] cloudwatch:DisableInsightRules */
	static readonly DisableInsightRules = "cloudwatch:DisableInsightRules";
	/** [Write] cloudwatch:EnableAlarmActions */
	static readonly EnableAlarmActions = "cloudwatch:EnableAlarmActions";
	/** [Write] cloudwatch:EnableInsightRules */
	static readonly EnableInsightRules = "cloudwatch:EnableInsightRules";
	/** [Write] cloudwatch:EnableTopologyDiscovery */
	static readonly EnableTopologyDiscovery =
		"cloudwatch:EnableTopologyDiscovery";
	/** [Read] cloudwatch:GenerateQuery */
	static readonly GenerateQuery = "cloudwatch:GenerateQuery";
	/** [Read] cloudwatch:GenerateQueryResultsSummary */
	static readonly GenerateQueryResultsSummary =
		"cloudwatch:GenerateQueryResultsSummary";
	/** [Read] cloudwatch:GetAccessGrant */
	static readonly actionGetAccessGrant = "cloudwatch:GetAccessGrant";
	/** [Read] cloudwatch:GetAccessProfile */
	static readonly actionGetAccessProfile = "cloudwatch:GetAccessProfile";
	/** [Read] cloudwatch:GetAgentGraph */
	static readonly actionGetAgentGraph = "cloudwatch:GetAgentGraph";
	/** [Read] cloudwatch:GetAlarmMuteRule */
	static readonly actionGetAlarmMuteRule = "cloudwatch:GetAlarmMuteRule";
	/** [Read] cloudwatch:GetAlert */
	static readonly actionGetAlert = "cloudwatch:GetAlert";
	/** [Read] cloudwatch:GetContextGraph */
	static readonly actionGetContextGraph = "cloudwatch:GetContextGraph";
	/** [Read] cloudwatch:GetDashboard */
	static readonly actionGetDashboard = "cloudwatch:GetDashboard";
	/** [Read] cloudwatch:GetDataset */
	static readonly actionGetDataset = "cloudwatch:GetDataset";
	/** [Read] cloudwatch:GetDomain */
	static readonly actionGetDomain = "cloudwatch:GetDomain";
	/** [Read] cloudwatch:GetDomainAccessGrantForOrganization */
	static readonly actionGetDomainAccessGrantForOrganization =
		"cloudwatch:GetDomainAccessGrantForOrganization";
	/** [Read] cloudwatch:GetDomainForOrganization */
	static readonly actionGetDomainForOrganization =
		"cloudwatch:GetDomainForOrganization";
	/** [Read] cloudwatch:GetIngestionEndpoint */
	static readonly actionGetIngestionEndpoint =
		"cloudwatch:GetIngestionEndpoint";
	/** [Read] cloudwatch:GetInsightRuleReport */
	static readonly actionGetInsightRuleReport =
		"cloudwatch:GetInsightRuleReport";
	/** [Read] cloudwatch:GetIntegration */
	static readonly actionGetIntegration = "cloudwatch:GetIntegration";
	/** [Read] cloudwatch:GetIntelligenceConfiguration */
	static readonly actionGetIntelligenceConfiguration =
		"cloudwatch:GetIntelligenceConfiguration";
	/** [Read] cloudwatch:GetMetricData */
	static readonly actionGetMetricData = "cloudwatch:GetMetricData";
	/** [Read] cloudwatch:GetMetricStatistics */
	static readonly actionGetMetricStatistics = "cloudwatch:GetMetricStatistics";
	/** [Read] cloudwatch:GetMetricStream */
	static readonly actionGetMetricStream = "cloudwatch:GetMetricStream";
	/** [Read] cloudwatch:GetMetricWidgetImage */
	static readonly actionGetMetricWidgetImage =
		"cloudwatch:GetMetricWidgetImage";
	/** [Read] cloudwatch:GetOTelEnrichment */
	static readonly actionGetOTelEnrichment = "cloudwatch:GetOTelEnrichment";
	/** [Read] cloudwatch:GetOmniDashboard */
	static readonly actionGetOmniDashboard = "cloudwatch:GetOmniDashboard";
	/** [Read] cloudwatch:GetOmniThread */
	static readonly actionGetOmniThread = "cloudwatch:GetOmniThread";
	/** [Read] cloudwatch:GetPreferences */
	static readonly actionGetPreferences = "cloudwatch:GetPreferences";
	/** [Read] cloudwatch:GetRecords */
	static readonly actionGetRecords = "cloudwatch:GetRecords";
	/** [Read] cloudwatch:GetService */
	static readonly actionGetService = "cloudwatch:GetService";
	/** [Read] cloudwatch:GetServiceData */
	static readonly actionGetServiceData = "cloudwatch:GetServiceData";
	/** [Read] cloudwatch:GetServiceLevelObjective */
	static readonly actionGetServiceLevelObjective =
		"cloudwatch:GetServiceLevelObjective";
	/** [Read] cloudwatch:GetSpace */
	static readonly actionGetSpace = "cloudwatch:GetSpace";
	/** [Read] cloudwatch:GetSpaceCredentials */
	static readonly actionGetSpaceCredentials = "cloudwatch:GetSpaceCredentials";
	/** [Read] cloudwatch:GetSpaceCredentialsForOrganization */
	static readonly actionGetSpaceCredentialsForOrganization =
		"cloudwatch:GetSpaceCredentialsForOrganization";
	/** [Read] cloudwatch:GetTelemetryQueryResults */
	static readonly actionGetTelemetryQueryResults =
		"cloudwatch:GetTelemetryQueryResults";
	/** [Read] cloudwatch:GetTopologyDiscoveryStatus */
	static readonly actionGetTopologyDiscoveryStatus =
		"cloudwatch:GetTopologyDiscoveryStatus";
	/** [Read] cloudwatch:GetTopologyMap */
	static readonly actionGetTopologyMap = "cloudwatch:GetTopologyMap";
	/** [Read] cloudwatch:GetView */
	static readonly actionGetView = "cloudwatch:GetView";
	/** [Write] cloudwatch:InvokeIntegration */
	static readonly InvokeIntegration = "cloudwatch:InvokeIntegration";
	/** [Write] cloudwatch:Link */
	static readonly Link = "cloudwatch:Link";
	/** [List] cloudwatch:ListAccessGrants */
	static readonly ListAccessGrants = "cloudwatch:ListAccessGrants";
	/** [List] cloudwatch:ListAccessProfiles */
	static readonly ListAccessProfiles = "cloudwatch:ListAccessProfiles";
	/** [List] cloudwatch:ListAlarmMuteRules */
	static readonly ListAlarmMuteRules = "cloudwatch:ListAlarmMuteRules";
	/** [List] cloudwatch:ListAlertContributors */
	static readonly ListAlertContributors = "cloudwatch:ListAlertContributors";
	/** [List] cloudwatch:ListAlerts */
	static readonly ListAlerts = "cloudwatch:ListAlerts";
	/** [List] cloudwatch:ListDashboards */
	static readonly ListDashboards = "cloudwatch:ListDashboards";
	/** [List] cloudwatch:ListDomainAccessGrantsForOrganization */
	static readonly ListDomainAccessGrantsForOrganization =
		"cloudwatch:ListDomainAccessGrantsForOrganization";
	/** [List] cloudwatch:ListDomains */
	static readonly ListDomains = "cloudwatch:ListDomains";
	/** [List] cloudwatch:ListEntitiesForMetric */
	static readonly ListEntitiesForMetric = "cloudwatch:ListEntitiesForMetric";
	/** [List] cloudwatch:ListIngestionEndpoints */
	static readonly ListIngestionEndpoints = "cloudwatch:ListIngestionEndpoints";
	/** [List] cloudwatch:ListIntegrations */
	static readonly ListIntegrations = "cloudwatch:ListIntegrations";
	/** [Read] cloudwatch:ListManagedInsightRules */
	static readonly ListManagedInsightRules =
		"cloudwatch:ListManagedInsightRules";
	/** [List] cloudwatch:ListMetricStreams */
	static readonly ListMetricStreams = "cloudwatch:ListMetricStreams";
	/** [List] cloudwatch:ListMetrics */
	static readonly ListMetrics = "cloudwatch:ListMetrics";
	/** [List] cloudwatch:ListOmniDashboards */
	static readonly ListOmniDashboards = "cloudwatch:ListOmniDashboards";
	/** [List] cloudwatch:ListOmniThreads */
	static readonly ListOmniThreads = "cloudwatch:ListOmniThreads";
	/** [List] cloudwatch:ListServiceLevelObjectives */
	static readonly ListServiceLevelObjectives =
		"cloudwatch:ListServiceLevelObjectives";
	/** [List] cloudwatch:ListServices */
	static readonly ListServices = "cloudwatch:ListServices";
	/** [List] cloudwatch:ListSpaceAccess */
	static readonly ListSpaceAccess = "cloudwatch:ListSpaceAccess";
	/** [List] cloudwatch:ListSpaces */
	static readonly ListSpaces = "cloudwatch:ListSpaces";
	/** [List] cloudwatch:ListSpacesForOrganization */
	static readonly ListSpacesForOrganization =
		"cloudwatch:ListSpacesForOrganization";
	/** [List] cloudwatch:ListTagsForResource */
	static readonly ListTagsForResource = "cloudwatch:ListTagsForResource";
	/** [List] cloudwatch:ListTelemetryFields */
	static readonly ListTelemetryFields = "cloudwatch:ListTelemetryFields";
	/** [List] cloudwatch:ListTelemetryQuerySessions */
	static readonly ListTelemetryQuerySessions =
		"cloudwatch:ListTelemetryQuerySessions";
	/** [List] cloudwatch:ListViews */
	static readonly ListViews = "cloudwatch:ListViews";
	/** [Write] cloudwatch:PutAlarmMuteRule */
	static readonly PutAlarmMuteRule = "cloudwatch:PutAlarmMuteRule";
	/** [Write] cloudwatch:PutAnomalyDetector */
	static readonly PutAnomalyDetector = "cloudwatch:PutAnomalyDetector";
	/** [Write] cloudwatch:PutCompositeAlarm */
	static readonly PutCompositeAlarm = "cloudwatch:PutCompositeAlarm";
	/** [Write] cloudwatch:PutDashboard */
	static readonly PutDashboard = "cloudwatch:PutDashboard";
	/** [Write] cloudwatch:PutInsightRule */
	static readonly PutInsightRule = "cloudwatch:PutInsightRule";
	/** [Write] cloudwatch:PutIntelligenceConfiguration */
	static readonly PutIntelligenceConfiguration =
		"cloudwatch:PutIntelligenceConfiguration";
	/** [Write] cloudwatch:PutLogAlarm */
	static readonly PutLogAlarm = "cloudwatch:PutLogAlarm";
	/** [Write] cloudwatch:PutManagedInsightRules */
	static readonly PutManagedInsightRules = "cloudwatch:PutManagedInsightRules";
	/** [Write] cloudwatch:PutMetricAlarm */
	static readonly PutMetricAlarm = "cloudwatch:PutMetricAlarm";
	/** [Write] cloudwatch:PutMetricData */
	static readonly PutMetricData = "cloudwatch:PutMetricData";
	/** [Write] cloudwatch:PutMetricStream */
	static readonly PutMetricStream = "cloudwatch:PutMetricStream";
	/** [Write] cloudwatch:PutPipelineRule */
	static readonly PutPipelineRule = "cloudwatch:PutPipelineRule";
	/** [Write] cloudwatch:QueryTraces */
	static readonly QueryTraces = "cloudwatch:QueryTraces";
	/** [Write] cloudwatch:SearchPrincipals */
	static readonly SearchPrincipals = "cloudwatch:SearchPrincipals";
	/** [Write] cloudwatch:SetAlarmState */
	static readonly actionSetAlarmState = "cloudwatch:SetAlarmState";
	/** [Write] cloudwatch:StartMetricStreams */
	static readonly StartMetricStreams = "cloudwatch:StartMetricStreams";
	/** [Write] cloudwatch:StartOTelEnrichment */
	static readonly StartOTelEnrichment = "cloudwatch:StartOTelEnrichment";
	/** [Write] cloudwatch:StartOmniThreadSession */
	static readonly StartOmniThreadSession = "cloudwatch:StartOmniThreadSession";
	/** [Write] cloudwatch:StartTelemetryQuery */
	static readonly StartTelemetryQuery = "cloudwatch:StartTelemetryQuery";
	/** [Write] cloudwatch:StartTelemetryQuerySession */
	static readonly StartTelemetryQuerySession =
		"cloudwatch:StartTelemetryQuerySession";
	/** [Write] cloudwatch:StopMetricStreams */
	static readonly StopMetricStreams = "cloudwatch:StopMetricStreams";
	/** [Write] cloudwatch:StopOTelEnrichment */
	static readonly StopOTelEnrichment = "cloudwatch:StopOTelEnrichment";
	/** [Write] cloudwatch:StopTelemetryQuery */
	static readonly StopTelemetryQuery = "cloudwatch:StopTelemetryQuery";
	/** [Write] cloudwatch:StopTelemetryQuerySession */
	static readonly StopTelemetryQuerySession =
		"cloudwatch:StopTelemetryQuerySession";
	/** [Write] cloudwatch:SubmitFeedback */
	static readonly SubmitFeedback = "cloudwatch:SubmitFeedback";
	/** [Tagging] cloudwatch:TagResource */
	static readonly TagResource = "cloudwatch:TagResource";
	/** [Tagging] cloudwatch:UntagResource */
	static readonly UntagResource = "cloudwatch:UntagResource";
	/** [PermissionManagement] cloudwatch:UpdateAccessProfile */
	static readonly UpdateAccessProfile = "cloudwatch:UpdateAccessProfile";
	/** [Write] cloudwatch:UpdateAlert */
	static readonly UpdateAlert = "cloudwatch:UpdateAlert";
	/** [Write] cloudwatch:UpdateDomain */
	static readonly UpdateDomain = "cloudwatch:UpdateDomain";
	/** [Write] cloudwatch:UpdateDomainForOrganization */
	static readonly UpdateDomainForOrganization =
		"cloudwatch:UpdateDomainForOrganization";
	/** [Write] cloudwatch:UpdateIngestionEndpoint */
	static readonly UpdateIngestionEndpoint =
		"cloudwatch:UpdateIngestionEndpoint";
	/** [Write] cloudwatch:UpdateIntegration */
	static readonly UpdateIntegration = "cloudwatch:UpdateIntegration";
	/** [Write] cloudwatch:UpdateOmniDashboard */
	static readonly UpdateOmniDashboard = "cloudwatch:UpdateOmniDashboard";
	/** [Write] cloudwatch:UpdateOmniThread */
	static readonly UpdateOmniThread = "cloudwatch:UpdateOmniThread";
	/** [Write] cloudwatch:UpdatePreferences */
	static readonly UpdatePreferences = "cloudwatch:UpdatePreferences";
	/** [Write] cloudwatch:UpdateServiceLevelObjective */
	static readonly UpdateServiceLevelObjective =
		"cloudwatch:UpdateServiceLevelObjective";
	/** [Write] cloudwatch:UpdateSpace */
	static readonly UpdateSpace = "cloudwatch:UpdateSpace";
	/** [Write] cloudwatch:UpdateView */
	static readonly UpdateView = "cloudwatch:UpdateView";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudWatchActions.BatchGetServiceLevelIndicatorReport,
		CloudWatchActions.BatchGetServiceLevelObjectiveBudgetReport,
		CloudWatchActions.DescribeAlarmHistory,
		CloudWatchActions.DescribeAlarms,
		CloudWatchActions.DescribeAlarmsForMetric,
		CloudWatchActions.DescribeAnomalyDetectors,
		CloudWatchActions.DescribeInsightRules,
		CloudWatchActions.GenerateQuery,
		CloudWatchActions.GenerateQueryResultsSummary,
		CloudWatchActions.actionGetAccessGrant,
		CloudWatchActions.actionGetAccessProfile,
		CloudWatchActions.actionGetAgentGraph,
		CloudWatchActions.actionGetAlarmMuteRule,
		CloudWatchActions.actionGetAlert,
		CloudWatchActions.actionGetContextGraph,
		CloudWatchActions.actionGetDashboard,
		CloudWatchActions.actionGetDataset,
		CloudWatchActions.actionGetDomain,
		CloudWatchActions.actionGetDomainAccessGrantForOrganization,
		CloudWatchActions.actionGetDomainForOrganization,
		CloudWatchActions.actionGetIngestionEndpoint,
		CloudWatchActions.actionGetInsightRuleReport,
		CloudWatchActions.actionGetIntegration,
		CloudWatchActions.actionGetIntelligenceConfiguration,
		CloudWatchActions.actionGetMetricData,
		CloudWatchActions.actionGetMetricStatistics,
		CloudWatchActions.actionGetMetricStream,
		CloudWatchActions.actionGetMetricWidgetImage,
		CloudWatchActions.actionGetOTelEnrichment,
		CloudWatchActions.actionGetOmniDashboard,
		CloudWatchActions.actionGetOmniThread,
		CloudWatchActions.actionGetPreferences,
		CloudWatchActions.actionGetRecords,
		CloudWatchActions.actionGetService,
		CloudWatchActions.actionGetServiceData,
		CloudWatchActions.actionGetServiceLevelObjective,
		CloudWatchActions.actionGetSpace,
		CloudWatchActions.actionGetSpaceCredentials,
		CloudWatchActions.actionGetSpaceCredentialsForOrganization,
		CloudWatchActions.actionGetTelemetryQueryResults,
		CloudWatchActions.actionGetTopologyDiscoveryStatus,
		CloudWatchActions.actionGetTopologyMap,
		CloudWatchActions.actionGetView,
		CloudWatchActions.ListManagedInsightRules,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudWatchActions.CallWithBearerToken,
		CloudWatchActions.CreateAlert,
		CloudWatchActions.CreateDomain,
		CloudWatchActions.CreateDomainForOrganization,
		CloudWatchActions.CreateIngestionEndpoint,
		CloudWatchActions.CreateIntegration,
		CloudWatchActions.CreateOmniDashboard,
		CloudWatchActions.CreateOmniThread,
		CloudWatchActions.CreateOneTimeDeepLinkCode,
		CloudWatchActions.CreateServiceLevelObjective,
		CloudWatchActions.CreateSpace,
		CloudWatchActions.CreateView,
		CloudWatchActions.DeleteAlarmMuteRule,
		CloudWatchActions.DeleteAlarms,
		CloudWatchActions.DeleteAlert,
		CloudWatchActions.DeleteAnomalyDetector,
		CloudWatchActions.DeleteDashboards,
		CloudWatchActions.DeleteDomain,
		CloudWatchActions.DeleteDomainForOrganization,
		CloudWatchActions.DeleteIngestionEndpoint,
		CloudWatchActions.DeleteInsightRules,
		CloudWatchActions.DeleteIntegration,
		CloudWatchActions.DeleteMetricStream,
		CloudWatchActions.DeleteOmniDashboard,
		CloudWatchActions.DeleteOmniThread,
		CloudWatchActions.DeletePipelineRule,
		CloudWatchActions.DeleteServiceLevelObjective,
		CloudWatchActions.DeleteSpace,
		CloudWatchActions.DeleteView,
		CloudWatchActions.DisableAlarmActions,
		CloudWatchActions.DisableInsightRules,
		CloudWatchActions.EnableAlarmActions,
		CloudWatchActions.EnableInsightRules,
		CloudWatchActions.EnableTopologyDiscovery,
		CloudWatchActions.InvokeIntegration,
		CloudWatchActions.Link,
		CloudWatchActions.PutAlarmMuteRule,
		CloudWatchActions.PutAnomalyDetector,
		CloudWatchActions.PutCompositeAlarm,
		CloudWatchActions.PutDashboard,
		CloudWatchActions.PutInsightRule,
		CloudWatchActions.PutIntelligenceConfiguration,
		CloudWatchActions.PutLogAlarm,
		CloudWatchActions.PutManagedInsightRules,
		CloudWatchActions.PutMetricAlarm,
		CloudWatchActions.PutMetricData,
		CloudWatchActions.PutMetricStream,
		CloudWatchActions.PutPipelineRule,
		CloudWatchActions.QueryTraces,
		CloudWatchActions.SearchPrincipals,
		CloudWatchActions.actionSetAlarmState,
		CloudWatchActions.StartMetricStreams,
		CloudWatchActions.StartOTelEnrichment,
		CloudWatchActions.StartOmniThreadSession,
		CloudWatchActions.StartTelemetryQuery,
		CloudWatchActions.StartTelemetryQuerySession,
		CloudWatchActions.StopMetricStreams,
		CloudWatchActions.StopOTelEnrichment,
		CloudWatchActions.StopTelemetryQuery,
		CloudWatchActions.StopTelemetryQuerySession,
		CloudWatchActions.SubmitFeedback,
		CloudWatchActions.UpdateAlert,
		CloudWatchActions.UpdateDomain,
		CloudWatchActions.UpdateDomainForOrganization,
		CloudWatchActions.UpdateIngestionEndpoint,
		CloudWatchActions.UpdateIntegration,
		CloudWatchActions.UpdateOmniDashboard,
		CloudWatchActions.UpdateOmniThread,
		CloudWatchActions.UpdatePreferences,
		CloudWatchActions.UpdateServiceLevelObjective,
		CloudWatchActions.UpdateSpace,
		CloudWatchActions.UpdateView,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudWatchActions.ListAccessGrants,
		CloudWatchActions.ListAccessProfiles,
		CloudWatchActions.ListAlarmMuteRules,
		CloudWatchActions.ListAlertContributors,
		CloudWatchActions.ListAlerts,
		CloudWatchActions.ListDashboards,
		CloudWatchActions.ListDomainAccessGrantsForOrganization,
		CloudWatchActions.ListDomains,
		CloudWatchActions.ListEntitiesForMetric,
		CloudWatchActions.ListIngestionEndpoints,
		CloudWatchActions.ListIntegrations,
		CloudWatchActions.ListMetricStreams,
		CloudWatchActions.ListMetrics,
		CloudWatchActions.ListOmniDashboards,
		CloudWatchActions.ListOmniThreads,
		CloudWatchActions.ListServiceLevelObjectives,
		CloudWatchActions.ListServices,
		CloudWatchActions.ListSpaceAccess,
		CloudWatchActions.ListSpaces,
		CloudWatchActions.ListSpacesForOrganization,
		CloudWatchActions.ListTagsForResource,
		CloudWatchActions.ListTelemetryFields,
		CloudWatchActions.ListTelemetryQuerySessions,
		CloudWatchActions.ListViews,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CloudWatchActions.AssumeAccessProfile,
		CloudWatchActions.CreateAccessGrant,
		CloudWatchActions.CreateAccessProfile,
		CloudWatchActions.CreateDomainAccessGrantForOrganization,
		CloudWatchActions.DeleteAccessGrant,
		CloudWatchActions.DeleteAccessProfile,
		CloudWatchActions.DeleteDomainAccessGrantForOrganization,
		CloudWatchActions.UpdateAccessProfile,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudWatchActions.TagResource,
		CloudWatchActions.UntagResource,
	];
}

/**
 * Properties for building a access-grant ARN.
 */
export interface CloudWatchAccessGrantArnProps {
	/** The GrantId component of the ARN. */
	readonly grantId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-grant ARN.
 */
export interface CloudWatchAccessGrantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GrantId component. */
	readonly grantId: string;
}

/**
 * Properties for building a access-profile ARN.
 */
export interface CloudWatchAccessProfileArnProps {
	/** The ProfileId component of the ARN. */
	readonly profileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-profile ARN.
 */
export interface CloudWatchAccessProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileId component. */
	readonly profileId: string;
}

/**
 * Properties for building a alarm ARN.
 */
export interface CloudWatchAlarmArnProps {
	/** The AlarmName component of the ARN. */
	readonly alarmName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alarm ARN.
 */
export interface CloudWatchAlarmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlarmName component. */
	readonly alarmName: string;
}

/**
 * Properties for building a alarm-mute-rule ARN.
 */
export interface CloudWatchAlarmMuteRuleArnProps {
	/** The AlarmMuteRuleName component of the ARN. */
	readonly alarmMuteRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alarm-mute-rule ARN.
 */
export interface CloudWatchAlarmMuteRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlarmMuteRuleName component. */
	readonly alarmMuteRuleName: string;
}

/**
 * Properties for building a alert ARN.
 */
export interface CloudWatchAlertArnProps {
	/** The AlertId component of the ARN. */
	readonly alertId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alert ARN.
 */
export interface CloudWatchAlertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlertId component. */
	readonly alertId: string;
}

/**
 * Properties for building a dashboard ARN.
 */
export interface CloudWatchDashboardArnProps {
	/** The DashboardName component of the ARN. */
	readonly dashboardName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface CloudWatchDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface CloudWatchDatasetArnProps {
	/** The DatasetId component of the ARN. */
	readonly datasetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataset ARN.
 */
export interface CloudWatchDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatasetId component. */
	readonly datasetId: string;
}

/**
 * Properties for building a domain ARN.
 */
export interface CloudWatchDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface CloudWatchDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a ingestion-endpoint ARN.
 */
export interface CloudWatchIngestionEndpointArnProps {
	/** The IngestionEndpointName component of the ARN. */
	readonly ingestionEndpointName: string;
	/** The IngestionEndpointId component of the ARN. */
	readonly ingestionEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ingestion-endpoint ARN.
 */
export interface CloudWatchIngestionEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IngestionEndpointName component. */
	readonly ingestionEndpointName: string;
	/** The IngestionEndpointId component. */
	readonly ingestionEndpointId: string;
}

/**
 * Properties for building a insight-rule ARN.
 */
export interface CloudWatchInsightRuleArnProps {
	/** The InsightRuleName component of the ARN. */
	readonly insightRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a insight-rule ARN.
 */
export interface CloudWatchInsightRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InsightRuleName component. */
	readonly insightRuleName: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface CloudWatchIntegrationArnProps {
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a integration ARN.
 */
export interface CloudWatchIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a metric-stream ARN.
 */
export interface CloudWatchMetricStreamArnProps {
	/** The MetricStreamName component of the ARN. */
	readonly metricStreamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a metric-stream ARN.
 */
export interface CloudWatchMetricStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MetricStreamName component. */
	readonly metricStreamName: string;
}

/**
 * Properties for building a omni-dashboard ARN.
 */
export interface CloudWatchOmniDashboardArnProps {
	/** The DashboardId component of the ARN. */
	readonly dashboardId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a omni-dashboard ARN.
 */
export interface CloudWatchOmniDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardId component. */
	readonly dashboardId: string;
}

/**
 * Properties for building a organization-access-grant ARN.
 */
export interface CloudWatchOrganizationAccessGrantArnProps {
	/** The GrantId component of the ARN. */
	readonly grantId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization-access-grant ARN.
 */
export interface CloudWatchOrganizationAccessGrantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GrantId component. */
	readonly grantId: string;
}

/**
 * Properties for building a organization-domain ARN.
 */
export interface CloudWatchOrganizationDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization-domain ARN.
 */
export interface CloudWatchOrganizationDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a service ARN.
 */
export interface CloudWatchServiceArnProps {
	/** The ServiceName component of the ARN. */
	readonly serviceName: string;
	/** The UniqueAttributesHex component of the ARN. */
	readonly uniqueAttributesHex: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service ARN.
 */
export interface CloudWatchServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The UniqueAttributesHex component. */
	readonly uniqueAttributesHex: string;
}

/**
 * Properties for building a slo ARN.
 */
export interface CloudWatchSloArnProps {
	/** The SloName component of the ARN. */
	readonly sloName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a slo ARN.
 */
export interface CloudWatchSloArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SloName component. */
	readonly sloName: string;
}

/**
 * Properties for building a space ARN.
 */
export interface CloudWatchSpaceArnProps {
	/** The SpaceId component of the ARN. */
	readonly spaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a space ARN.
 */
export interface CloudWatchSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SpaceId component. */
	readonly spaceId: string;
}

/**
 * Properties for building a view ARN.
 */
export interface CloudWatchViewArnProps {
	/** The ViewName component of the ARN. */
	readonly viewName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a view ARN.
 */
export interface CloudWatchViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ViewName component. */
	readonly viewName: string;
}

const AccessGrantArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):access-grant\/(?<grantId>[^:/?]+)$/;
const AccessProfileArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):access-profile\/(?<profileId>[^:/?]+)$/;
const AlarmArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm:(?<alarmName>[^:/?]+)$/;
const AlarmMuteRuleArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm-mute-rule:(?<alarmMuteRuleName>[^:/?]+)$/;
const AlertArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alert\/(?<alertId>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch::(?<account>[^:]*):dashboard\/(?<dashboardName>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetId>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)$/;
const IngestionEndpointArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):ingestion-endpoint\/(?<ingestionEndpointName>[^:/?]+)\/(?<ingestionEndpointId>[^:/?]+)$/;
const InsightRuleArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):insight-rule\/(?<insightRuleName>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):integration\/(?<integrationId>[^:/?]+)$/;
const MetricStreamArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):metric-stream\/(?<metricStreamName>[^:/?]+)$/;
const OmniDashboardArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):omni-dashboard\/(?<dashboardId>[^:/?]+)$/;
const OrganizationAccessGrantArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):organization-access-grant\/(?<grantId>[^:/?]+)$/;
const OrganizationDomainArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):organization-domain\/(?<domainId>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceName>[^:/?]+)-(?<uniqueAttributesHex>[^:/?]+)$/;
const SloArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):slo\/(?<sloName>[^:/?]+)$/;
const SpaceArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):space\/(?<spaceId>[^:/?]+)$/;
const ViewArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):view\/(?<viewName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudwatch resources.
 */
export class CloudWatchResources {
	/**
	 * Builds an ARN for the access-grant resource.
	 */
	static accessGrant(props: CloudWatchAccessGrantArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:access-grant/${props.grantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-grant resource.
	 */
	static isValidAccessGrantArn(arn: string): boolean {
		return AccessGrantArnRegex.test(arn);
	}

	/**
	 * Parses a access-grant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessGrantArn(arn: string): CloudWatchAccessGrantArnComponents {
		const match = AccessGrantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-grant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			grantId: match.groups!.grantId,
		};
	}

	/**
	 * Builds an ARN for the access-profile resource.
	 */
	static accessProfile(props: CloudWatchAccessProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:access-profile/${props.profileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-profile resource.
	 */
	static isValidAccessProfileArn(arn: string): boolean {
		return AccessProfileArnRegex.test(arn);
	}

	/**
	 * Parses a access-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessProfileArn(
		arn: string,
	): CloudWatchAccessProfileArnComponents {
		const match = AccessProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileId: match.groups!.profileId,
		};
	}

	/**
	 * Builds an ARN for the alarm resource.
	 */
	static alarm(props: CloudWatchAlarmArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:alarm:${props.alarmName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alarm resource.
	 */
	static isValidAlarmArn(arn: string): boolean {
		return AlarmArnRegex.test(arn);
	}

	/**
	 * Parses a alarm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmArn(arn: string): CloudWatchAlarmArnComponents {
		const match = AlarmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alarm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alarmName: match.groups!.alarmName,
		};
	}

	/**
	 * Builds an ARN for the alarm-mute-rule resource.
	 */
	static alarmMuteRule(props: CloudWatchAlarmMuteRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:alarm-mute-rule:${props.alarmMuteRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alarm-mute-rule resource.
	 */
	static isValidAlarmMuteRuleArn(arn: string): boolean {
		return AlarmMuteRuleArnRegex.test(arn);
	}

	/**
	 * Parses a alarm-mute-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmMuteRuleArn(
		arn: string,
	): CloudWatchAlarmMuteRuleArnComponents {
		const match = AlarmMuteRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alarm-mute-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alarmMuteRuleName: match.groups!.alarmMuteRuleName,
		};
	}

	/**
	 * Builds an ARN for the alert resource.
	 */
	static alert(props: CloudWatchAlertArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:alert/${props.alertId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alert resource.
	 */
	static isValidAlertArn(arn: string): boolean {
		return AlertArnRegex.test(arn);
	}

	/**
	 * Parses a alert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlertArn(arn: string): CloudWatchAlertArnComponents {
		const match = AlertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alertId: match.groups!.alertId,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: CloudWatchDashboardArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch::${props.account ?? "*"}:dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): CloudWatchDashboardArnComponents {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: CloudWatchDatasetArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): CloudWatchDatasetArnComponents {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetId: match.groups!.datasetId,
		};
	}

	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: CloudWatchDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): CloudWatchDomainArnComponents {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the ingestion-endpoint resource.
	 */
	static ingestionEndpoint(props: CloudWatchIngestionEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:ingestion-endpoint/${props.ingestionEndpointName}/${props.ingestionEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ingestion-endpoint resource.
	 */
	static isValidIngestionEndpointArn(arn: string): boolean {
		return IngestionEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a ingestion-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIngestionEndpointArn(
		arn: string,
	): CloudWatchIngestionEndpointArnComponents {
		const match = IngestionEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ingestion-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ingestionEndpointName: match.groups!.ingestionEndpointName,
			ingestionEndpointId: match.groups!.ingestionEndpointId,
		};
	}

	/**
	 * Builds an ARN for the insight-rule resource.
	 */
	static insightRule(props: CloudWatchInsightRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:insight-rule/${props.insightRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the insight-rule resource.
	 */
	static isValidInsightRuleArn(arn: string): boolean {
		return InsightRuleArnRegex.test(arn);
	}

	/**
	 * Parses a insight-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInsightRuleArn(arn: string): CloudWatchInsightRuleArnComponents {
		const match = InsightRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid insight-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			insightRuleName: match.groups!.insightRuleName,
		};
	}

	/**
	 * Builds an ARN for the integration resource.
	 */
	static integration(props: CloudWatchIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:integration/${props.integrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(arn: string): CloudWatchIntegrationArnComponents {
		const match = IntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the metric-stream resource.
	 */
	static metricStream(props: CloudWatchMetricStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:metric-stream/${props.metricStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metric-stream resource.
	 */
	static isValidMetricStreamArn(arn: string): boolean {
		return MetricStreamArnRegex.test(arn);
	}

	/**
	 * Parses a metric-stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricStreamArn(
		arn: string,
	): CloudWatchMetricStreamArnComponents {
		const match = MetricStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metric-stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			metricStreamName: match.groups!.metricStreamName,
		};
	}

	/**
	 * Builds an ARN for the omni-dashboard resource.
	 */
	static omniDashboard(props: CloudWatchOmniDashboardArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:omni-dashboard/${props.dashboardId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the omni-dashboard resource.
	 */
	static isValidOmniDashboardArn(arn: string): boolean {
		return OmniDashboardArnRegex.test(arn);
	}

	/**
	 * Parses a omni-dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOmniDashboardArn(
		arn: string,
	): CloudWatchOmniDashboardArnComponents {
		const match = OmniDashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid omni-dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dashboardId: match.groups!.dashboardId,
		};
	}

	/**
	 * Builds an ARN for the organization-access-grant resource.
	 */
	static organizationAccessGrant(
		props: CloudWatchOrganizationAccessGrantArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:organization-access-grant/${props.grantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization-access-grant resource.
	 */
	static isValidOrganizationAccessGrantArn(arn: string): boolean {
		return OrganizationAccessGrantArnRegex.test(arn);
	}

	/**
	 * Parses a organization-access-grant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationAccessGrantArn(
		arn: string,
	): CloudWatchOrganizationAccessGrantArnComponents {
		const match = OrganizationAccessGrantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization-access-grant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			grantId: match.groups!.grantId,
		};
	}

	/**
	 * Builds an ARN for the organization-domain resource.
	 */
	static organizationDomain(
		props: CloudWatchOrganizationDomainArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:organization-domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization-domain resource.
	 */
	static isValidOrganizationDomainArn(arn: string): boolean {
		return OrganizationDomainArnRegex.test(arn);
	}

	/**
	 * Parses a organization-domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationDomainArn(
		arn: string,
	): CloudWatchOrganizationDomainArnComponents {
		const match = OrganizationDomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization-domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: CloudWatchServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceName}-${props.uniqueAttributesHex}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): CloudWatchServiceArnComponents {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceName: match.groups!.serviceName,
			uniqueAttributesHex: match.groups!.uniqueAttributesHex,
		};
	}

	/**
	 * Builds an ARN for the slo resource.
	 */
	static slo(props: CloudWatchSloArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:slo/${props.sloName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the slo resource.
	 */
	static isValidSloArn(arn: string): boolean {
		return SloArnRegex.test(arn);
	}

	/**
	 * Parses a slo ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSloArn(arn: string): CloudWatchSloArnComponents {
		const match = SloArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid slo ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sloName: match.groups!.sloName,
		};
	}

	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: CloudWatchSpaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:space/${props.spaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): CloudWatchSpaceArnComponents {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			spaceId: match.groups!.spaceId,
		};
	}

	/**
	 * Builds an ARN for the view resource.
	 */
	static view(props: CloudWatchViewArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:view/${props.viewName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the view resource.
	 */
	static isValidViewArn(arn: string): boolean {
		return ViewArnRegex.test(arn);
	}

	/**
	 * Parses a view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseViewArn(arn: string): CloudWatchViewArnComponents {
		const match = ViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			viewName: match.groups!.viewName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudwatch.
 */
export class CloudWatchOperations {
	/** IAM actions required for the AssociateDatasetKmsKey API call. */
	static readonly AssociateDatasetKmsKey: string[] = [];
	/** IAM actions required for the DeleteAlarmMuteRule API call. */
	static readonly DeleteAlarmMuteRule: string[] = [
		"cloudwatch:DeleteAlarmMuteRule",
	];
	/** IAM actions required for the DeleteAlarms API call. */
	static readonly DeleteAlarms: string[] = ["cloudwatch:DeleteAlarms"];
	/** IAM actions required for the DeleteAnomalyDetector API call. */
	static readonly DeleteAnomalyDetector: string[] = [
		"cloudwatch:DeleteAnomalyDetector",
	];
	/** IAM actions required for the DeleteDashboards API call. */
	static readonly DeleteDashboards: string[] = ["cloudwatch:DeleteDashboards"];
	/** IAM actions required for the DeleteInsightRules API call. */
	static readonly DeleteInsightRules: string[] = [
		"cloudwatch:DeleteInsightRules",
	];
	/** IAM actions required for the DeleteMetricStream API call. */
	static readonly DeleteMetricStream: string[] = [
		"cloudwatch:DeleteMetricStream",
	];
	/** IAM actions required for the DescribeAlarmContributors API call. */
	static readonly DescribeAlarmContributors: string[] = [];
	/** IAM actions required for the DescribeAlarmHistory API call. */
	static readonly DescribeAlarmHistory: string[] = [
		"cloudwatch:DescribeAlarmHistory",
	];
	/** IAM actions required for the DescribeAlarms API call. */
	static readonly DescribeAlarms: string[] = ["cloudwatch:DescribeAlarms"];
	/** IAM actions required for the DescribeAlarmsForMetric API call. */
	static readonly DescribeAlarmsForMetric: string[] = [
		"cloudwatch:DescribeAlarmsForMetric",
	];
	/** IAM actions required for the DescribeAnomalyDetectors API call. */
	static readonly DescribeAnomalyDetectors: string[] = [
		"cloudwatch:DescribeAnomalyDetectors",
	];
	/** IAM actions required for the DescribeInsightRules API call. */
	static readonly DescribeInsightRules: string[] = [
		"cloudwatch:DescribeInsightRules",
	];
	/** IAM actions required for the DisableAlarmActions API call. */
	static readonly DisableAlarmActions: string[] = [
		"cloudwatch:DisableAlarmActions",
	];
	/** IAM actions required for the DisableInsightRules API call. */
	static readonly DisableInsightRules: string[] = [
		"cloudwatch:DisableInsightRules",
	];
	/** IAM actions required for the DisassociateDatasetKmsKey API call. */
	static readonly DisassociateDatasetKmsKey: string[] = [];
	/** IAM actions required for the EnableAlarmActions API call. */
	static readonly EnableAlarmActions: string[] = [
		"cloudwatch:EnableAlarmActions",
	];
	/** IAM actions required for the EnableInsightRules API call. */
	static readonly EnableInsightRules: string[] = [
		"cloudwatch:EnableInsightRules",
	];
	/** IAM actions required for the GetAlarmMuteRule API call. */
	static readonly opGetAlarmMuteRule: string[] = [
		"cloudwatch:GetAlarmMuteRule",
	];
	/** IAM actions required for the GetDashboard API call. */
	static readonly opGetDashboard: string[] = ["cloudwatch:GetDashboard"];
	/** IAM actions required for the GetDataset API call. */
	static readonly opGetDataset: string[] = ["cloudwatch:GetDataset"];
	/** IAM actions required for the GetInsightRuleReport API call. */
	static readonly opGetInsightRuleReport: string[] = [
		"cloudwatch:GetInsightRuleReport",
	];
	/** IAM actions required for the GetMetricData API call. */
	static readonly opGetMetricData: string[] = ["cloudwatch:GetMetricData"];
	/** IAM actions required for the GetMetricStatistics API call. */
	static readonly opGetMetricStatistics: string[] = [
		"cloudwatch:GetMetricStatistics",
	];
	/** IAM actions required for the GetMetricStream API call. */
	static readonly opGetMetricStream: string[] = ["cloudwatch:GetMetricStream"];
	/** IAM actions required for the GetMetricWidgetImage API call. */
	static readonly opGetMetricWidgetImage: string[] = [
		"cloudwatch:GetMetricWidgetImage",
	];
	/** IAM actions required for the GetOTelEnrichment API call. */
	static readonly opGetOTelEnrichment: string[] = [
		"cloudwatch:GetOTelEnrichment",
	];
	/** IAM actions required for the ListAlarmMuteRules API call. */
	static readonly ListAlarmMuteRules: string[] = [
		"cloudwatch:ListAlarmMuteRules",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly ListDashboards: string[] = ["cloudwatch:ListDashboards"];
	/** IAM actions required for the ListManagedInsightRules API call. */
	static readonly ListManagedInsightRules: string[] = [
		"cloudwatch:ListManagedInsightRules",
	];
	/** IAM actions required for the ListMetricStreams API call. */
	static readonly ListMetricStreams: string[] = [
		"cloudwatch:ListMetricStreams",
	];
	/** IAM actions required for the ListMetrics API call. */
	static readonly ListMetrics: string[] = ["cloudwatch:ListMetrics"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"cloudwatch:ListTagsForResource",
		"oam:ListTagsForResource",
	];
	/** IAM actions required for the PutAlarmMuteRule API call. */
	static readonly PutAlarmMuteRule: string[] = [
		"cloudwatch:PutAlarmMuteRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutAnomalyDetector API call. */
	static readonly PutAnomalyDetector: string[] = [
		"cloudwatch:PutAnomalyDetector",
	];
	/** IAM actions required for the PutCompositeAlarm API call. */
	static readonly PutCompositeAlarm: string[] = [
		"cloudwatch:PutCompositeAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutDashboard API call. */
	static readonly PutDashboard: string[] = [
		"cloudwatch:PutDashboard",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutInsightRule API call. */
	static readonly PutInsightRule: string[] = [
		"cloudwatch:PutInsightRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutLogAlarm API call. */
	static readonly PutLogAlarm: string[] = [
		"iam:PassRole",
		"cloudwatch:PutLogAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutManagedInsightRules API call. */
	static readonly PutManagedInsightRules: string[] = [
		"cloudwatch:PutManagedInsightRules",
	];
	/** IAM actions required for the PutMetricAlarm API call. */
	static readonly PutMetricAlarm: string[] = [
		"cloudwatch:PutMetricAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutMetricData API call. */
	static readonly PutMetricData: string[] = ["cloudwatch:PutMetricData"];
	/** IAM actions required for the PutMetricStream API call. */
	static readonly PutMetricStream: string[] = [
		"iam:PassRole",
		"cloudwatch:PutMetricStream",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the SetAlarmState API call. */
	static readonly opSetAlarmState: string[] = ["cloudwatch:SetAlarmState"];
	/** IAM actions required for the StartMetricStreams API call. */
	static readonly StartMetricStreams: string[] = [
		"cloudwatch:StartMetricStreams",
	];
	/** IAM actions required for the StartOTelEnrichment API call. */
	static readonly StartOTelEnrichment: string[] = [
		"cloudwatch:StartOTelEnrichment",
	];
	/** IAM actions required for the StopMetricStreams API call. */
	static readonly StopMetricStreams: string[] = [
		"cloudwatch:StopMetricStreams",
	];
	/** IAM actions required for the StopOTelEnrichment API call. */
	static readonly StopOTelEnrichment: string[] = [
		"cloudwatch:StopOTelEnrichment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"cloudwatch:TagResource",
		"oam:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"cloudwatch:UntagResource",
		"oam:UntagResource",
	];
}

/**
 * Condition key constants and builders for cloudwatch.
 */
export class CloudWatchConditions {
	/** Condition keys applicable to the AssumeAccessProfile action. */
	static readonly AssumeAccessProfileConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateAccessGrant action. */
	static readonly CreateAccessGrantConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateAccessProfile action. */
	static readonly CreateAccessProfileConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateAlert action. */
	static readonly CreateAlertConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateDomainAccessGrantForOrganization action. */
	static readonly CreateDomainAccessGrantForOrganizationConditionKeys: string[] =
		["cloudwatch:HasAccessGrant"];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateOmniDashboard action. */
	static readonly CreateOmniDashboardConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateOmniThread action. */
	static readonly CreateOmniThreadConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the CreateServiceLevelObjective action. */
	static readonly CreateServiceLevelObjectiveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateView action. */
	static readonly CreateViewConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteAccessGrant action. */
	static readonly DeleteAccessGrantConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteAccessProfile action. */
	static readonly DeleteAccessProfileConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteAlert action. */
	static readonly DeleteAlertConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteDomainAccessGrantForOrganization action. */
	static readonly DeleteDomainAccessGrantForOrganizationConditionKeys: string[] =
		["cloudwatch:HasAccessGrant"];
	/** Condition keys applicable to the DeleteIntegration action. */
	static readonly DeleteIntegrationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteOmniDashboard action. */
	static readonly DeleteOmniDashboardConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteOmniThread action. */
	static readonly DeleteOmniThreadConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the DeleteView action. */
	static readonly DeleteViewConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetAccessGrant action. */
	static readonly actionGetAccessGrantConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetAccessProfile action. */
	static readonly actionGetAccessProfileConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetAlert action. */
	static readonly actionGetAlertConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetContextGraph action. */
	static readonly actionGetContextGraphConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetDataset action. */
	static readonly actionGetDatasetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDomain action. */
	static readonly actionGetDomainConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetDomainAccessGrantForOrganization action. */
	static readonly actionGetDomainAccessGrantForOrganizationConditionKeys: string[] =
		["cloudwatch:HasAccessGrant"];
	/** Condition keys applicable to the GetIntegration action. */
	static readonly actionGetIntegrationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetIntelligenceConfiguration action. */
	static readonly actionGetIntelligenceConfigurationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetMetricData action. */
	static readonly actionGetMetricDataConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetOmniDashboard action. */
	static readonly actionGetOmniDashboardConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetOmniThread action. */
	static readonly actionGetOmniThreadConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetPreferences action. */
	static readonly actionGetPreferencesConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetRecords action. */
	static readonly actionGetRecordsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetSpace action. */
	static readonly actionGetSpaceConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetTelemetryQueryResults action. */
	static readonly actionGetTelemetryQueryResultsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the GetView action. */
	static readonly actionGetViewConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the InvokeIntegration action. */
	static readonly InvokeIntegrationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListAccessGrants action. */
	static readonly ListAccessGrantsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListAccessProfiles action. */
	static readonly ListAccessProfilesConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListAlertContributors action. */
	static readonly ListAlertContributorsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListAlerts action. */
	static readonly ListAlertsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListDomainAccessGrantsForOrganization action. */
	static readonly ListDomainAccessGrantsForOrganizationConditionKeys: string[] =
		["cloudwatch:HasAccessGrant"];
	/** Condition keys applicable to the ListIntegrations action. */
	static readonly ListIntegrationsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListManagedInsightRules action. */
	static readonly ListManagedInsightRulesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the ListMetrics action. */
	static readonly ListMetricsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListOmniDashboards action. */
	static readonly ListOmniDashboardsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListOmniThreads action. */
	static readonly ListOmniThreadsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListSpaceAccess action. */
	static readonly ListSpaceAccessConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListSpaces action. */
	static readonly ListSpacesConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListSpacesForOrganization action. */
	static readonly ListSpacesForOrganizationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListTelemetryFields action. */
	static readonly ListTelemetryFieldsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListTelemetryQuerySessions action. */
	static readonly ListTelemetryQuerySessionsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the ListViews action. */
	static readonly ListViewsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the PutAlarmMuteRule action. */
	static readonly PutAlarmMuteRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutCompositeAlarm action. */
	static readonly PutCompositeAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutDashboard action. */
	static readonly PutDashboardConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutInsightRule action. */
	static readonly PutInsightRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestInsightRuleLogGroups",
	];
	/** Condition keys applicable to the PutIntelligenceConfiguration action. */
	static readonly PutIntelligenceConfigurationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the PutLogAlarm action. */
	static readonly PutLogAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutManagedInsightRules action. */
	static readonly PutManagedInsightRulesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the PutMetricAlarm action. */
	static readonly PutMetricAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutMetricData action. */
	static readonly PutMetricDataConditionKeys: string[] = [
		"cloudwatch:namespace",
	];
	/** Condition keys applicable to the PutMetricStream action. */
	static readonly PutMetricStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the SearchPrincipals action. */
	static readonly SearchPrincipalsConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the StartOmniThreadSession action. */
	static readonly StartOmniThreadSessionConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the StartTelemetryQuery action. */
	static readonly StartTelemetryQueryConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the StartTelemetryQuerySession action. */
	static readonly StartTelemetryQuerySessionConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the StopTelemetryQuery action. */
	static readonly StopTelemetryQueryConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the StopTelemetryQuerySession action. */
	static readonly StopTelemetryQuerySessionConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the SubmitFeedback action. */
	static readonly SubmitFeedbackConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateAccessProfile action. */
	static readonly UpdateAccessProfileConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateAlert action. */
	static readonly UpdateAlertConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateIntegration action. */
	static readonly UpdateIntegrationConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateOmniDashboard action. */
	static readonly UpdateOmniDashboardConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateOmniThread action. */
	static readonly UpdateOmniThreadConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdatePreferences action. */
	static readonly UpdatePreferencesConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateSpace action. */
	static readonly UpdateSpaceConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];
	/** Condition keys applicable to the UpdateView action. */
	static readonly UpdateViewConditionKeys: string[] = [
		"cloudwatch:HasAccessGrant",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: cloudwatch:AlarmActions (ArrayOfString) */
	static readonly ALARM_ACTIONS = "cloudwatch:AlarmActions";
	/** Condition key: cloudwatch:HasAccessGrant (String) */
	static readonly HAS_ACCESS_GRANT = "cloudwatch:HasAccessGrant";
	/** Condition key: cloudwatch:namespace (String) */
	static readonly NAMESPACE = "cloudwatch:namespace";
	/** Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString) */
	static readonly REQUEST_INSIGHT_RULE_LOG_GROUPS =
		"cloudwatch:requestInsightRuleLogGroups";
	/** Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN) */
	static readonly REQUEST_MANAGED_RESOURCE_AR_NS =
		"cloudwatch:requestManagedResourceARNs";

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

	/**
	 * Generates a condition block for `cloudwatch:AlarmActions`.
	 */
	static alarmActions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "cloudwatch:AlarmActions": values },
		};
	}

	/**
	 * Generates a condition block for `cloudwatch:HasAccessGrant`.
	 */
	static hasAccessGrant(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudwatch:HasAccessGrant": value } };
	}

	/**
	 * Generates a condition block for `cloudwatch:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudwatch:namespace": value } };
	}

	/**
	 * Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`.
	 */
	static requestInsightRuleLogGroups(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"cloudwatch:requestInsightRuleLogGroups": values,
			},
		};
	}

	/**
	 * Generates a condition block for `cloudwatch:requestManagedResourceARNs`.
	 */
	static requestManagedResourceArNs(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"cloudwatch:requestManagedResourceARNs": values,
			},
		};
	}
}
