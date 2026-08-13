// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/resiliencehub.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the resiliencehub service.
 */
export class ResiliencehubActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "resiliencehub";

	/** [Write] resiliencehub:AcceptResourceGroupingRecommendations */
	static readonly ACCEPT_RESOURCE_GROUPING_RECOMMENDATIONS =
		"resiliencehub:AcceptResourceGroupingRecommendations";
	/** [Write] resiliencehub:AddDraftAppVersionResourceMappings */
	static readonly ADD_DRAFT_APP_VERSION_RESOURCE_MAPPINGS =
		"resiliencehub:AddDraftAppVersionResourceMappings";
	/** [Write] resiliencehub:BatchUpdateRecommendationStatus */
	static readonly BATCH_UPDATE_RECOMMENDATION_STATUS =
		"resiliencehub:BatchUpdateRecommendationStatus";
	/** [Write] resiliencehub:CreateApp */
	static readonly CREATE_APP = "resiliencehub:CreateApp";
	/** [Write] resiliencehub:CreateAppVersionAppComponent */
	static readonly CREATE_APP_VERSION_APP_COMPONENT =
		"resiliencehub:CreateAppVersionAppComponent";
	/** [Write] resiliencehub:CreateAppVersionResource */
	static readonly CREATE_APP_VERSION_RESOURCE =
		"resiliencehub:CreateAppVersionResource";
	/** [Write] resiliencehub:CreateAssertion */
	static readonly CREATE_ASSERTION = "resiliencehub:CreateAssertion";
	/** [Write] resiliencehub:CreateInputSource */
	static readonly CREATE_INPUT_SOURCE = "resiliencehub:CreateInputSource";
	/** [Write] resiliencehub:CreatePolicy */
	static readonly CREATE_POLICY = "resiliencehub:CreatePolicy";
	/** [Write] resiliencehub:CreateRecommendationTemplate */
	static readonly CREATE_RECOMMENDATION_TEMPLATE =
		"resiliencehub:CreateRecommendationTemplate";
	/** [Write] resiliencehub:CreateReport */
	static readonly CREATE_REPORT = "resiliencehub:CreateReport";
	/** [Write] resiliencehub:CreateResiliencyPolicy */
	static readonly CREATE_RESILIENCY_POLICY =
		"resiliencehub:CreateResiliencyPolicy";
	/** [Write] resiliencehub:CreateService */
	static readonly CREATE_SERVICE = "resiliencehub:CreateService";
	/** [Write] resiliencehub:CreateServiceFunction */
	static readonly CREATE_SERVICE_FUNCTION =
		"resiliencehub:CreateServiceFunction";
	/** [Write] resiliencehub:CreateServiceFunctionResources */
	static readonly CREATE_SERVICE_FUNCTION_RESOURCES =
		"resiliencehub:CreateServiceFunctionResources";
	/** [Write] resiliencehub:CreateSystem */
	static readonly CREATE_SYSTEM = "resiliencehub:CreateSystem";
	/** [Write] resiliencehub:CreateTest */
	static readonly CREATE_TEST = "resiliencehub:CreateTest";
	/** [Write] resiliencehub:CreateUserJourney */
	static readonly CREATE_USER_JOURNEY = "resiliencehub:CreateUserJourney";
	/** [Write] resiliencehub:DeleteApp */
	static readonly DELETE_APP = "resiliencehub:DeleteApp";
	/** [Write] resiliencehub:DeleteAppAssessment */
	static readonly DELETE_APP_ASSESSMENT = "resiliencehub:DeleteAppAssessment";
	/** [Write] resiliencehub:DeleteAppInputSource */
	static readonly DELETE_APP_INPUT_SOURCE =
		"resiliencehub:DeleteAppInputSource";
	/** [Write] resiliencehub:DeleteAppVersionAppComponent */
	static readonly DELETE_APP_VERSION_APP_COMPONENT =
		"resiliencehub:DeleteAppVersionAppComponent";
	/** [Write] resiliencehub:DeleteAppVersionResource */
	static readonly DELETE_APP_VERSION_RESOURCE =
		"resiliencehub:DeleteAppVersionResource";
	/** [Write] resiliencehub:DeleteAssertion */
	static readonly DELETE_ASSERTION = "resiliencehub:DeleteAssertion";
	/** [Write] resiliencehub:DeleteInputSource */
	static readonly DELETE_INPUT_SOURCE = "resiliencehub:DeleteInputSource";
	/** [Write] resiliencehub:DeletePolicy */
	static readonly DELETE_POLICY = "resiliencehub:DeletePolicy";
	/** [Write] resiliencehub:DeleteRecommendationTemplate */
	static readonly DELETE_RECOMMENDATION_TEMPLATE =
		"resiliencehub:DeleteRecommendationTemplate";
	/** [Write] resiliencehub:DeleteResiliencyPolicy */
	static readonly DELETE_RESILIENCY_POLICY =
		"resiliencehub:DeleteResiliencyPolicy";
	/** [Write] resiliencehub:DeleteService */
	static readonly DELETE_SERVICE = "resiliencehub:DeleteService";
	/** [Write] resiliencehub:DeleteServiceFunction */
	static readonly DELETE_SERVICE_FUNCTION =
		"resiliencehub:DeleteServiceFunction";
	/** [Write] resiliencehub:DeleteServiceFunctionResources */
	static readonly DELETE_SERVICE_FUNCTION_RESOURCES =
		"resiliencehub:DeleteServiceFunctionResources";
	/** [Write] resiliencehub:DeleteSystem */
	static readonly DELETE_SYSTEM = "resiliencehub:DeleteSystem";
	/** [Write] resiliencehub:DeleteTest */
	static readonly DELETE_TEST = "resiliencehub:DeleteTest";
	/** [Write] resiliencehub:DeleteTestSources */
	static readonly DELETE_TEST_SOURCES = "resiliencehub:DeleteTestSources";
	/** [Write] resiliencehub:DeleteUserJourney */
	static readonly DELETE_USER_JOURNEY = "resiliencehub:DeleteUserJourney";
	/** [Read] resiliencehub:DescribeApp */
	static readonly DESCRIBE_APP = "resiliencehub:DescribeApp";
	/** [Read] resiliencehub:DescribeAppAssessment */
	static readonly DESCRIBE_APP_ASSESSMENT =
		"resiliencehub:DescribeAppAssessment";
	/** [Read] resiliencehub:DescribeAppVersion */
	static readonly DESCRIBE_APP_VERSION = "resiliencehub:DescribeAppVersion";
	/** [Read] resiliencehub:DescribeAppVersionAppComponent */
	static readonly DESCRIBE_APP_VERSION_APP_COMPONENT =
		"resiliencehub:DescribeAppVersionAppComponent";
	/** [Read] resiliencehub:DescribeAppVersionResource */
	static readonly DESCRIBE_APP_VERSION_RESOURCE =
		"resiliencehub:DescribeAppVersionResource";
	/** [Read] resiliencehub:DescribeAppVersionResourcesResolutionStatus */
	static readonly DESCRIBE_APP_VERSION_RESOURCES_RESOLUTION_STATUS =
		"resiliencehub:DescribeAppVersionResourcesResolutionStatus";
	/** [Read] resiliencehub:DescribeAppVersionTemplate */
	static readonly DESCRIBE_APP_VERSION_TEMPLATE =
		"resiliencehub:DescribeAppVersionTemplate";
	/** [Read] resiliencehub:DescribeDraftAppVersionResourcesImportStatus */
	static readonly DESCRIBE_DRAFT_APP_VERSION_RESOURCES_IMPORT_STATUS =
		"resiliencehub:DescribeDraftAppVersionResourcesImportStatus";
	/** [Read] resiliencehub:DescribeMetricsExport */
	static readonly DESCRIBE_METRICS_EXPORT =
		"resiliencehub:DescribeMetricsExport";
	/** [Read] resiliencehub:DescribeResiliencyPolicy */
	static readonly DESCRIBE_RESILIENCY_POLICY =
		"resiliencehub:DescribeResiliencyPolicy";
	/** [Read] resiliencehub:DescribeResourceGroupingRecommendationTask */
	static readonly DESCRIBE_RESOURCE_GROUPING_RECOMMENDATION_TASK =
		"resiliencehub:DescribeResourceGroupingRecommendationTask";
	/** [Read] resiliencehub:GetFailureModeFinding */
	static readonly GET_FAILURE_MODE_FINDING =
		"resiliencehub:GetFailureModeFinding";
	/** [Read] resiliencehub:GetPolicy */
	static readonly GET_POLICY = "resiliencehub:GetPolicy";
	/** [Read] resiliencehub:GetService */
	static readonly GET_SERVICE = "resiliencehub:GetService";
	/** [Read] resiliencehub:GetSystem */
	static readonly GET_SYSTEM = "resiliencehub:GetSystem";
	/** [Read] resiliencehub:GetTest */
	static readonly GET_TEST = "resiliencehub:GetTest";
	/** [Read] resiliencehub:GetTestRun */
	static readonly GET_TEST_RUN = "resiliencehub:GetTestRun";
	/** [Read] resiliencehub:GetTestTemplate */
	static readonly GET_TEST_TEMPLATE = "resiliencehub:GetTestTemplate";
	/** [Read] resiliencehub:GetUserJourney */
	static readonly GET_USER_JOURNEY = "resiliencehub:GetUserJourney";
	/** [Write] resiliencehub:ImportApp */
	static readonly IMPORT_APP = "resiliencehub:ImportApp";
	/** [Write] resiliencehub:ImportPolicy */
	static readonly IMPORT_POLICY = "resiliencehub:ImportPolicy";
	/** [Write] resiliencehub:ImportResourcesToDraftAppVersion */
	static readonly IMPORT_RESOURCES_TO_DRAFT_APP_VERSION =
		"resiliencehub:ImportResourcesToDraftAppVersion";
	/** [List] resiliencehub:ListAlarmRecommendations */
	static readonly LIST_ALARM_RECOMMENDATIONS =
		"resiliencehub:ListAlarmRecommendations";
	/** [List] resiliencehub:ListAppAssessmentComplianceDrifts */
	static readonly LIST_APP_ASSESSMENT_COMPLIANCE_DRIFTS =
		"resiliencehub:ListAppAssessmentComplianceDrifts";
	/** [List] resiliencehub:ListAppAssessmentResourceDrifts */
	static readonly LIST_APP_ASSESSMENT_RESOURCE_DRIFTS =
		"resiliencehub:ListAppAssessmentResourceDrifts";
	/** [List] resiliencehub:ListAppAssessments */
	static readonly LIST_APP_ASSESSMENTS = "resiliencehub:ListAppAssessments";
	/** [List] resiliencehub:ListAppComponentCompliances */
	static readonly LIST_APP_COMPONENT_COMPLIANCES =
		"resiliencehub:ListAppComponentCompliances";
	/** [List] resiliencehub:ListAppComponentRecommendations */
	static readonly LIST_APP_COMPONENT_RECOMMENDATIONS =
		"resiliencehub:ListAppComponentRecommendations";
	/** [List] resiliencehub:ListAppInputSources */
	static readonly LIST_APP_INPUT_SOURCES = "resiliencehub:ListAppInputSources";
	/** [List] resiliencehub:ListAppVersionAppComponents */
	static readonly LIST_APP_VERSION_APP_COMPONENTS =
		"resiliencehub:ListAppVersionAppComponents";
	/** [List] resiliencehub:ListAppVersionResourceMappings */
	static readonly LIST_APP_VERSION_RESOURCE_MAPPINGS =
		"resiliencehub:ListAppVersionResourceMappings";
	/** [List] resiliencehub:ListAppVersionResources */
	static readonly LIST_APP_VERSION_RESOURCES =
		"resiliencehub:ListAppVersionResources";
	/** [List] resiliencehub:ListAppVersions */
	static readonly LIST_APP_VERSIONS = "resiliencehub:ListAppVersions";
	/** [List] resiliencehub:ListApps */
	static readonly LIST_APPS = "resiliencehub:ListApps";
	/** [Read] resiliencehub:ListAssertions */
	static readonly LIST_ASSERTIONS = "resiliencehub:ListAssertions";
	/** [Read] resiliencehub:ListDependencies */
	static readonly LIST_DEPENDENCIES = "resiliencehub:ListDependencies";
	/** [Read] resiliencehub:ListFailureModeAssessments */
	static readonly LIST_FAILURE_MODE_ASSESSMENTS =
		"resiliencehub:ListFailureModeAssessments";
	/** [Read] resiliencehub:ListFailureModeFindings */
	static readonly LIST_FAILURE_MODE_FINDINGS =
		"resiliencehub:ListFailureModeFindings";
	/** [Read] resiliencehub:ListInputSources */
	static readonly LIST_INPUT_SOURCES = "resiliencehub:ListInputSources";
	/** [List] resiliencehub:ListMetrics */
	static readonly LIST_METRICS = "resiliencehub:ListMetrics";
	/** [Read] resiliencehub:ListPolicies */
	static readonly LIST_POLICIES = "resiliencehub:ListPolicies";
	/** [List] resiliencehub:ListRecommendationTemplates */
	static readonly LIST_RECOMMENDATION_TEMPLATES =
		"resiliencehub:ListRecommendationTemplates";
	/** [Read] resiliencehub:ListReports */
	static readonly LIST_REPORTS = "resiliencehub:ListReports";
	/** [List] resiliencehub:ListResiliencyPolicies */
	static readonly LIST_RESILIENCY_POLICIES =
		"resiliencehub:ListResiliencyPolicies";
	/** [Read] resiliencehub:ListResolvedTestRunTargetResources */
	static readonly LIST_RESOLVED_TEST_RUN_TARGET_RESOURCES =
		"resiliencehub:ListResolvedTestRunTargetResources";
	/** [List] resiliencehub:ListResourceGroupingRecommendations */
	static readonly LIST_RESOURCE_GROUPING_RECOMMENDATIONS =
		"resiliencehub:ListResourceGroupingRecommendations";
	/** [Read] resiliencehub:ListResources */
	static readonly LIST_RESOURCES = "resiliencehub:ListResources";
	/** [Read] resiliencehub:ListServiceEvents */
	static readonly LIST_SERVICE_EVENTS = "resiliencehub:ListServiceEvents";
	/** [Read] resiliencehub:ListServiceFunctions */
	static readonly LIST_SERVICE_FUNCTIONS = "resiliencehub:ListServiceFunctions";
	/** [Read] resiliencehub:ListServiceTopologyEdges */
	static readonly LIST_SERVICE_TOPOLOGY_EDGES =
		"resiliencehub:ListServiceTopologyEdges";
	/** [Read] resiliencehub:ListServices */
	static readonly LIST_SERVICES = "resiliencehub:ListServices";
	/** [List] resiliencehub:ListSopRecommendations */
	static readonly LIST_SOP_RECOMMENDATIONS =
		"resiliencehub:ListSopRecommendations";
	/** [List] resiliencehub:ListSuggestedResiliencyPolicies */
	static readonly LIST_SUGGESTED_RESILIENCY_POLICIES =
		"resiliencehub:ListSuggestedResiliencyPolicies";
	/** [Read] resiliencehub:ListSystemEvents */
	static readonly LIST_SYSTEM_EVENTS = "resiliencehub:ListSystemEvents";
	/** [Read] resiliencehub:ListSystems */
	static readonly LIST_SYSTEMS = "resiliencehub:ListSystems";
	/** [Read] resiliencehub:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "resiliencehub:ListTagsForResource";
	/** [List] resiliencehub:ListTestRecommendations */
	static readonly LIST_TEST_RECOMMENDATIONS =
		"resiliencehub:ListTestRecommendations";
	/** [Read] resiliencehub:ListTestRunEvents */
	static readonly LIST_TEST_RUN_EVENTS = "resiliencehub:ListTestRunEvents";
	/** [Read] resiliencehub:ListTestRunSources */
	static readonly LIST_TEST_RUN_SOURCES = "resiliencehub:ListTestRunSources";
	/** [Read] resiliencehub:ListTestRuns */
	static readonly LIST_TEST_RUNS = "resiliencehub:ListTestRuns";
	/** [Read] resiliencehub:ListTestSources */
	static readonly LIST_TEST_SOURCES = "resiliencehub:ListTestSources";
	/** [Read] resiliencehub:ListTestTemplates */
	static readonly LIST_TEST_TEMPLATES = "resiliencehub:ListTestTemplates";
	/** [Read] resiliencehub:ListTests */
	static readonly LIST_TESTS = "resiliencehub:ListTests";
	/** [List] resiliencehub:ListUnsupportedAppVersionResources */
	static readonly LIST_UNSUPPORTED_APP_VERSION_RESOURCES =
		"resiliencehub:ListUnsupportedAppVersionResources";
	/** [Read] resiliencehub:ListUserJourneys */
	static readonly LIST_USER_JOURNEYS = "resiliencehub:ListUserJourneys";
	/** [Write] resiliencehub:PublishAppVersion */
	static readonly PUBLISH_APP_VERSION = "resiliencehub:PublishAppVersion";
	/** [Write] resiliencehub:PutDraftAppVersionTemplate */
	static readonly PUT_DRAFT_APP_VERSION_TEMPLATE =
		"resiliencehub:PutDraftAppVersionTemplate";
	/** [Write] resiliencehub:PutTestSources */
	static readonly PUT_TEST_SOURCES = "resiliencehub:PutTestSources";
	/** [Write] resiliencehub:RejectResourceGroupingRecommendations */
	static readonly REJECT_RESOURCE_GROUPING_RECOMMENDATIONS =
		"resiliencehub:RejectResourceGroupingRecommendations";
	/** [Write] resiliencehub:RemoveDraftAppVersionResourceMappings */
	static readonly REMOVE_DRAFT_APP_VERSION_RESOURCE_MAPPINGS =
		"resiliencehub:RemoveDraftAppVersionResourceMappings";
	/** [Write] resiliencehub:ResolveAppVersionResources */
	static readonly RESOLVE_APP_VERSION_RESOURCES =
		"resiliencehub:ResolveAppVersionResources";
	/** [Write] resiliencehub:StartAppAssessment */
	static readonly START_APP_ASSESSMENT = "resiliencehub:StartAppAssessment";
	/** [Write] resiliencehub:StartFailureModeAssessment */
	static readonly START_FAILURE_MODE_ASSESSMENT =
		"resiliencehub:StartFailureModeAssessment";
	/** [Write] resiliencehub:StartMetricsExport */
	static readonly START_METRICS_EXPORT = "resiliencehub:StartMetricsExport";
	/** [Write] resiliencehub:StartResourceGroupingRecommendationTask */
	static readonly START_RESOURCE_GROUPING_RECOMMENDATION_TASK =
		"resiliencehub:StartResourceGroupingRecommendationTask";
	/** [Write] resiliencehub:StartTestRun */
	static readonly START_TEST_RUN = "resiliencehub:StartTestRun";
	/** [Write] resiliencehub:StopTestRun */
	static readonly STOP_TEST_RUN = "resiliencehub:StopTestRun";
	/** [Tagging] resiliencehub:TagResource */
	static readonly TAG_RESOURCE = "resiliencehub:TagResource";
	/** [Tagging] resiliencehub:UntagResource */
	static readonly UNTAG_RESOURCE = "resiliencehub:UntagResource";
	/** [Write] resiliencehub:UpdateApp */
	static readonly UPDATE_APP = "resiliencehub:UpdateApp";
	/** [Write] resiliencehub:UpdateAppVersion */
	static readonly UPDATE_APP_VERSION = "resiliencehub:UpdateAppVersion";
	/** [Write] resiliencehub:UpdateAppVersionAppComponent */
	static readonly UPDATE_APP_VERSION_APP_COMPONENT =
		"resiliencehub:UpdateAppVersionAppComponent";
	/** [Write] resiliencehub:UpdateAppVersionResource */
	static readonly UPDATE_APP_VERSION_RESOURCE =
		"resiliencehub:UpdateAppVersionResource";
	/** [Write] resiliencehub:UpdateAssertion */
	static readonly UPDATE_ASSERTION = "resiliencehub:UpdateAssertion";
	/** [Write] resiliencehub:UpdateDependency */
	static readonly UPDATE_DEPENDENCY = "resiliencehub:UpdateDependency";
	/** [Write] resiliencehub:UpdateFailureModeFinding */
	static readonly UPDATE_FAILURE_MODE_FINDING =
		"resiliencehub:UpdateFailureModeFinding";
	/** [Write] resiliencehub:UpdatePolicy */
	static readonly UPDATE_POLICY = "resiliencehub:UpdatePolicy";
	/** [Write] resiliencehub:UpdateResiliencyPolicy */
	static readonly UPDATE_RESILIENCY_POLICY =
		"resiliencehub:UpdateResiliencyPolicy";
	/** [Write] resiliencehub:UpdateService */
	static readonly UPDATE_SERVICE = "resiliencehub:UpdateService";
	/** [Write] resiliencehub:UpdateServiceFunction */
	static readonly UPDATE_SERVICE_FUNCTION =
		"resiliencehub:UpdateServiceFunction";
	/** [Write] resiliencehub:UpdateSystem */
	static readonly UPDATE_SYSTEM = "resiliencehub:UpdateSystem";
	/** [Write] resiliencehub:UpdateTest */
	static readonly UPDATE_TEST = "resiliencehub:UpdateTest";
	/** [Write] resiliencehub:UpdateUserJourney */
	static readonly UPDATE_USER_JOURNEY = "resiliencehub:UpdateUserJourney";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ResiliencehubActions.DESCRIBE_APP,
		ResiliencehubActions.DESCRIBE_APP_ASSESSMENT,
		ResiliencehubActions.DESCRIBE_APP_VERSION,
		ResiliencehubActions.DESCRIBE_APP_VERSION_APP_COMPONENT,
		ResiliencehubActions.DESCRIBE_APP_VERSION_RESOURCE,
		ResiliencehubActions.DESCRIBE_APP_VERSION_RESOURCES_RESOLUTION_STATUS,
		ResiliencehubActions.DESCRIBE_APP_VERSION_TEMPLATE,
		ResiliencehubActions.DESCRIBE_DRAFT_APP_VERSION_RESOURCES_IMPORT_STATUS,
		ResiliencehubActions.DESCRIBE_METRICS_EXPORT,
		ResiliencehubActions.DESCRIBE_RESILIENCY_POLICY,
		ResiliencehubActions.DESCRIBE_RESOURCE_GROUPING_RECOMMENDATION_TASK,
		ResiliencehubActions.GET_FAILURE_MODE_FINDING,
		ResiliencehubActions.GET_POLICY,
		ResiliencehubActions.GET_SERVICE,
		ResiliencehubActions.GET_SYSTEM,
		ResiliencehubActions.GET_TEST,
		ResiliencehubActions.GET_TEST_RUN,
		ResiliencehubActions.GET_TEST_TEMPLATE,
		ResiliencehubActions.GET_USER_JOURNEY,
		ResiliencehubActions.LIST_ASSERTIONS,
		ResiliencehubActions.LIST_DEPENDENCIES,
		ResiliencehubActions.LIST_FAILURE_MODE_ASSESSMENTS,
		ResiliencehubActions.LIST_FAILURE_MODE_FINDINGS,
		ResiliencehubActions.LIST_INPUT_SOURCES,
		ResiliencehubActions.LIST_POLICIES,
		ResiliencehubActions.LIST_REPORTS,
		ResiliencehubActions.LIST_RESOLVED_TEST_RUN_TARGET_RESOURCES,
		ResiliencehubActions.LIST_RESOURCES,
		ResiliencehubActions.LIST_SERVICE_EVENTS,
		ResiliencehubActions.LIST_SERVICE_FUNCTIONS,
		ResiliencehubActions.LIST_SERVICE_TOPOLOGY_EDGES,
		ResiliencehubActions.LIST_SERVICES,
		ResiliencehubActions.LIST_SYSTEM_EVENTS,
		ResiliencehubActions.LIST_SYSTEMS,
		ResiliencehubActions.LIST_TAGS_FOR_RESOURCE,
		ResiliencehubActions.LIST_TEST_RUN_EVENTS,
		ResiliencehubActions.LIST_TEST_RUN_SOURCES,
		ResiliencehubActions.LIST_TEST_RUNS,
		ResiliencehubActions.LIST_TEST_SOURCES,
		ResiliencehubActions.LIST_TEST_TEMPLATES,
		ResiliencehubActions.LIST_TESTS,
		ResiliencehubActions.LIST_USER_JOURNEYS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ResiliencehubActions.ACCEPT_RESOURCE_GROUPING_RECOMMENDATIONS,
		ResiliencehubActions.ADD_DRAFT_APP_VERSION_RESOURCE_MAPPINGS,
		ResiliencehubActions.BATCH_UPDATE_RECOMMENDATION_STATUS,
		ResiliencehubActions.CREATE_APP,
		ResiliencehubActions.CREATE_APP_VERSION_APP_COMPONENT,
		ResiliencehubActions.CREATE_APP_VERSION_RESOURCE,
		ResiliencehubActions.CREATE_ASSERTION,
		ResiliencehubActions.CREATE_INPUT_SOURCE,
		ResiliencehubActions.CREATE_POLICY,
		ResiliencehubActions.CREATE_RECOMMENDATION_TEMPLATE,
		ResiliencehubActions.CREATE_REPORT,
		ResiliencehubActions.CREATE_RESILIENCY_POLICY,
		ResiliencehubActions.CREATE_SERVICE,
		ResiliencehubActions.CREATE_SERVICE_FUNCTION,
		ResiliencehubActions.CREATE_SERVICE_FUNCTION_RESOURCES,
		ResiliencehubActions.CREATE_SYSTEM,
		ResiliencehubActions.CREATE_TEST,
		ResiliencehubActions.CREATE_USER_JOURNEY,
		ResiliencehubActions.DELETE_APP,
		ResiliencehubActions.DELETE_APP_ASSESSMENT,
		ResiliencehubActions.DELETE_APP_INPUT_SOURCE,
		ResiliencehubActions.DELETE_APP_VERSION_APP_COMPONENT,
		ResiliencehubActions.DELETE_APP_VERSION_RESOURCE,
		ResiliencehubActions.DELETE_ASSERTION,
		ResiliencehubActions.DELETE_INPUT_SOURCE,
		ResiliencehubActions.DELETE_POLICY,
		ResiliencehubActions.DELETE_RECOMMENDATION_TEMPLATE,
		ResiliencehubActions.DELETE_RESILIENCY_POLICY,
		ResiliencehubActions.DELETE_SERVICE,
		ResiliencehubActions.DELETE_SERVICE_FUNCTION,
		ResiliencehubActions.DELETE_SERVICE_FUNCTION_RESOURCES,
		ResiliencehubActions.DELETE_SYSTEM,
		ResiliencehubActions.DELETE_TEST,
		ResiliencehubActions.DELETE_TEST_SOURCES,
		ResiliencehubActions.DELETE_USER_JOURNEY,
		ResiliencehubActions.IMPORT_APP,
		ResiliencehubActions.IMPORT_POLICY,
		ResiliencehubActions.IMPORT_RESOURCES_TO_DRAFT_APP_VERSION,
		ResiliencehubActions.PUBLISH_APP_VERSION,
		ResiliencehubActions.PUT_DRAFT_APP_VERSION_TEMPLATE,
		ResiliencehubActions.PUT_TEST_SOURCES,
		ResiliencehubActions.REJECT_RESOURCE_GROUPING_RECOMMENDATIONS,
		ResiliencehubActions.REMOVE_DRAFT_APP_VERSION_RESOURCE_MAPPINGS,
		ResiliencehubActions.RESOLVE_APP_VERSION_RESOURCES,
		ResiliencehubActions.START_APP_ASSESSMENT,
		ResiliencehubActions.START_FAILURE_MODE_ASSESSMENT,
		ResiliencehubActions.START_METRICS_EXPORT,
		ResiliencehubActions.START_RESOURCE_GROUPING_RECOMMENDATION_TASK,
		ResiliencehubActions.START_TEST_RUN,
		ResiliencehubActions.STOP_TEST_RUN,
		ResiliencehubActions.UPDATE_APP,
		ResiliencehubActions.UPDATE_APP_VERSION,
		ResiliencehubActions.UPDATE_APP_VERSION_APP_COMPONENT,
		ResiliencehubActions.UPDATE_APP_VERSION_RESOURCE,
		ResiliencehubActions.UPDATE_ASSERTION,
		ResiliencehubActions.UPDATE_DEPENDENCY,
		ResiliencehubActions.UPDATE_FAILURE_MODE_FINDING,
		ResiliencehubActions.UPDATE_POLICY,
		ResiliencehubActions.UPDATE_RESILIENCY_POLICY,
		ResiliencehubActions.UPDATE_SERVICE,
		ResiliencehubActions.UPDATE_SERVICE_FUNCTION,
		ResiliencehubActions.UPDATE_SYSTEM,
		ResiliencehubActions.UPDATE_TEST,
		ResiliencehubActions.UPDATE_USER_JOURNEY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ResiliencehubActions.LIST_ALARM_RECOMMENDATIONS,
		ResiliencehubActions.LIST_APP_ASSESSMENT_COMPLIANCE_DRIFTS,
		ResiliencehubActions.LIST_APP_ASSESSMENT_RESOURCE_DRIFTS,
		ResiliencehubActions.LIST_APP_ASSESSMENTS,
		ResiliencehubActions.LIST_APP_COMPONENT_COMPLIANCES,
		ResiliencehubActions.LIST_APP_COMPONENT_RECOMMENDATIONS,
		ResiliencehubActions.LIST_APP_INPUT_SOURCES,
		ResiliencehubActions.LIST_APP_VERSION_APP_COMPONENTS,
		ResiliencehubActions.LIST_APP_VERSION_RESOURCE_MAPPINGS,
		ResiliencehubActions.LIST_APP_VERSION_RESOURCES,
		ResiliencehubActions.LIST_APP_VERSIONS,
		ResiliencehubActions.LIST_APPS,
		ResiliencehubActions.LIST_METRICS,
		ResiliencehubActions.LIST_RECOMMENDATION_TEMPLATES,
		ResiliencehubActions.LIST_RESILIENCY_POLICIES,
		ResiliencehubActions.LIST_RESOURCE_GROUPING_RECOMMENDATIONS,
		ResiliencehubActions.LIST_SOP_RECOMMENDATIONS,
		ResiliencehubActions.LIST_SUGGESTED_RESILIENCY_POLICIES,
		ResiliencehubActions.LIST_TEST_RECOMMENDATIONS,
		ResiliencehubActions.LIST_UNSUPPORTED_APP_VERSION_RESOURCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ResiliencehubActions.TAG_RESOURCE,
		ResiliencehubActions.UNTAG_RESOURCE,
	];
}

const AppAssessmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):app-assessment/(?<appAssessmentId>[^:/?]+)$",
);
const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):app/(?<appId>[^:/?]+)$",
);
const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):policy/(?<policyId>[^:/?]+)$",
);
const RecommendationTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):recommendation-template/(?<recommendationTemplateId>[^:/?]+)$",
);
const ResiliencyPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):resiliency-policy/(?<resiliencyPolicyId>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)$",
);
const SystemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):system/(?<systemId>[^:/?]+)$",
);
const TestTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resiliencehub:(?<region>[^:]*):(?<account>[^:]*):test-template/(?<testTemplateId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for resiliencehub resources.
 */
export class ResiliencehubResources {
	/**
	 * Builds an ARN for the app-assessment resource.
	 */
	static appAssessment(props: {
		/** The AppAssessmentId component of the ARN. */
		readonly appAssessmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:app-assessment/${props.appAssessmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-assessment resource.
	 */
	static isValidAppAssessmentArn(arn: string): boolean {
		return AppAssessmentArnRegex.test(arn);
	}

	/**
	 * Parses a app-assessment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppAssessmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appAssessmentId: string;
	} {
		const match = AppAssessmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-assessment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appAssessmentId: match.groups!.appAssessmentId,
		};
	}

	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: {
		/** The PolicyId component of the ARN. */
		readonly policyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:policy/${props.policyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy resource.
	 */
	static isValidPolicyArn(arn: string): boolean {
		return PolicyArnRegex.test(arn);
	}

	/**
	 * Parses a policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		policyId: string;
	} {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyId: match.groups!.policyId,
		};
	}

	/**
	 * Builds an ARN for the recommendation-template resource.
	 */
	static recommendationTemplate(props: {
		/** The RecommendationTemplateId component of the ARN. */
		readonly recommendationTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:recommendation-template/${props.recommendationTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommendation-template resource.
	 */
	static isValidRecommendationTemplateArn(arn: string): boolean {
		return RecommendationTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a recommendation-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommendationTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		recommendationTemplateId: string;
	} {
		const match = RecommendationTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommendation-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recommendationTemplateId: match.groups!.recommendationTemplateId,
		};
	}

	/**
	 * Builds an ARN for the resiliency-policy resource.
	 */
	static resiliencyPolicy(props: {
		/** The ResiliencyPolicyId component of the ARN. */
		readonly resiliencyPolicyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:resiliency-policy/${props.resiliencyPolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resiliency-policy resource.
	 */
	static isValidResiliencyPolicyArn(arn: string): boolean {
		return ResiliencyPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a resiliency-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResiliencyPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resiliencyPolicyId: string;
	} {
		const match = ResiliencyPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resiliency-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resiliencyPolicyId: match.groups!.resiliencyPolicyId,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}`;
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
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
		};
	}

	/**
	 * Builds an ARN for the system resource.
	 */
	static system(props: {
		/** The SystemId component of the ARN. */
		readonly systemId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:system/${props.systemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the system resource.
	 */
	static isValidSystemArn(arn: string): boolean {
		return SystemArnRegex.test(arn);
	}

	/**
	 * Parses a system ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSystemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		systemId: string;
	} {
		const match = SystemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid system ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			systemId: match.groups!.systemId,
		};
	}

	/**
	 * Builds an ARN for the test-template resource.
	 */
	static testTemplate(props: {
		/** The TestTemplateId component of the ARN. */
		readonly testTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resiliencehub:${props.region ?? "*"}:${props.account ?? "*"}:test-template/${props.testTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the test-template resource.
	 */
	static isValidTestTemplateArn(arn: string): boolean {
		return TestTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a test-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testTemplateId: string;
	} {
		const match = TestTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid test-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testTemplateId: match.groups!.testTemplateId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for resiliencehub.
 */
export class ResiliencehubOperations {
	/** IAM actions required for the AcceptResourceGroupingRecommendations API call. */
	static readonly ACCEPT_RESOURCE_GROUPING_RECOMMENDATIONS: string[] = [
		"resiliencehub:AcceptResourceGroupingRecommendations",
	];
	/** IAM actions required for the AddDraftAppVersionResourceMappings API call. */
	static readonly ADD_DRAFT_APP_VERSION_RESOURCE_MAPPINGS: string[] = [
		"resiliencehub:AddDraftAppVersionResourceMappings",
	];
	/** IAM actions required for the BatchUpdateRecommendationStatus API call. */
	static readonly BATCH_UPDATE_RECOMMENDATION_STATUS: string[] = [
		"resiliencehub:BatchUpdateRecommendationStatus",
	];
	/** IAM actions required for the CreateApp API call. */
	static readonly CREATE_APP: string[] = [
		"resiliencehub:CreateApp",
		"iam:PassRole",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateAppVersionAppComponent API call. */
	static readonly CREATE_APP_VERSION_APP_COMPONENT: string[] = [
		"resiliencehub:CreateAppVersionAppComponent",
	];
	/** IAM actions required for the CreateAppVersionResource API call. */
	static readonly CREATE_APP_VERSION_RESOURCE: string[] = [
		"resiliencehub:CreateAppVersionResource",
	];
	/** IAM actions required for the CreateAssertion API call. */
	static readonly CREATE_ASSERTION: string[] = [
		"resiliencehub:CreateAssertion",
	];
	/** IAM actions required for the CreateInputSource API call. */
	static readonly CREATE_INPUT_SOURCE: string[] = [
		"resiliencehub:CreateInputSource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = [
		"resiliencehub:CreatePolicy",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateRecommendationTemplate API call. */
	static readonly CREATE_RECOMMENDATION_TEMPLATE: string[] = [
		"resiliencehub:CreateRecommendationTemplate",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateReport API call. */
	static readonly CREATE_REPORT: string[] = ["resiliencehub:CreateReport"];
	/** IAM actions required for the CreateResiliencyPolicy API call. */
	static readonly CREATE_RESILIENCY_POLICY: string[] = [
		"resiliencehub:CreateResiliencyPolicy",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"resiliencehub:CreateService",
		"iam:PassRole",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateServiceFunction API call. */
	static readonly CREATE_SERVICE_FUNCTION: string[] = [
		"resiliencehub:CreateServiceFunction",
	];
	/** IAM actions required for the CreateServiceFunctionResources API call. */
	static readonly CREATE_SERVICE_FUNCTION_RESOURCES: string[] = [
		"resiliencehub:CreateServiceFunctionResources",
	];
	/** IAM actions required for the CreateSystem API call. */
	static readonly CREATE_SYSTEM: string[] = [
		"resiliencehub:CreateSystem",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the CreateTest API call. */
	static readonly CREATE_TEST: string[] = ["resiliencehub:CreateTest"];
	/** IAM actions required for the CreateUserJourney API call. */
	static readonly CREATE_USER_JOURNEY: string[] = [
		"resiliencehub:CreateUserJourney",
	];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DELETE_APP: string[] = ["resiliencehub:DeleteApp"];
	/** IAM actions required for the DeleteAppAssessment API call. */
	static readonly DELETE_APP_ASSESSMENT: string[] = [
		"resiliencehub:DeleteAppAssessment",
	];
	/** IAM actions required for the DeleteAppInputSource API call. */
	static readonly DELETE_APP_INPUT_SOURCE: string[] = [
		"resiliencehub:DeleteAppInputSource",
	];
	/** IAM actions required for the DeleteAppVersionAppComponent API call. */
	static readonly DELETE_APP_VERSION_APP_COMPONENT: string[] = [
		"resiliencehub:DeleteAppVersionAppComponent",
	];
	/** IAM actions required for the DeleteAppVersionResource API call. */
	static readonly DELETE_APP_VERSION_RESOURCE: string[] = [
		"resiliencehub:DeleteAppVersionResource",
	];
	/** IAM actions required for the DeleteAssertion API call. */
	static readonly DELETE_ASSERTION: string[] = [
		"resiliencehub:DeleteAssertion",
	];
	/** IAM actions required for the DeleteInputSource API call. */
	static readonly DELETE_INPUT_SOURCE: string[] = [
		"resiliencehub:DeleteInputSource",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["resiliencehub:DeletePolicy"];
	/** IAM actions required for the DeleteRecommendationTemplate API call. */
	static readonly DELETE_RECOMMENDATION_TEMPLATE: string[] = [
		"resiliencehub:DeleteRecommendationTemplate",
	];
	/** IAM actions required for the DeleteResiliencyPolicy API call. */
	static readonly DELETE_RESILIENCY_POLICY: string[] = [
		"resiliencehub:DeleteResiliencyPolicy",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["resiliencehub:DeleteService"];
	/** IAM actions required for the DeleteServiceFunction API call. */
	static readonly DELETE_SERVICE_FUNCTION: string[] = [
		"resiliencehub:DeleteServiceFunction",
	];
	/** IAM actions required for the DeleteServiceFunctionResources API call. */
	static readonly DELETE_SERVICE_FUNCTION_RESOURCES: string[] = [
		"resiliencehub:DeleteServiceFunctionResources",
	];
	/** IAM actions required for the DeleteSystem API call. */
	static readonly DELETE_SYSTEM: string[] = ["resiliencehub:DeleteSystem"];
	/** IAM actions required for the DeleteTest API call. */
	static readonly DELETE_TEST: string[] = ["resiliencehub:DeleteTest"];
	/** IAM actions required for the DeleteTestSources API call. */
	static readonly DELETE_TEST_SOURCES: string[] = [
		"resiliencehub:DeleteTestSources",
	];
	/** IAM actions required for the DeleteUserJourney API call. */
	static readonly DELETE_USER_JOURNEY: string[] = [
		"resiliencehub:DeleteUserJourney",
	];
	/** IAM actions required for the DescribeApp API call. */
	static readonly DESCRIBE_APP: string[] = ["resiliencehub:DescribeApp"];
	/** IAM actions required for the DescribeAppAssessment API call. */
	static readonly DESCRIBE_APP_ASSESSMENT: string[] = [
		"resiliencehub:DescribeAppAssessment",
	];
	/** IAM actions required for the DescribeAppVersion API call. */
	static readonly DESCRIBE_APP_VERSION: string[] = [
		"resiliencehub:DescribeAppVersion",
	];
	/** IAM actions required for the DescribeAppVersionAppComponent API call. */
	static readonly DESCRIBE_APP_VERSION_APP_COMPONENT: string[] = [
		"resiliencehub:DescribeAppVersionAppComponent",
	];
	/** IAM actions required for the DescribeAppVersionResource API call. */
	static readonly DESCRIBE_APP_VERSION_RESOURCE: string[] = [
		"resiliencehub:DescribeAppVersionResource",
	];
	/** IAM actions required for the DescribeAppVersionResourcesResolutionStatus API call. */
	static readonly DESCRIBE_APP_VERSION_RESOURCES_RESOLUTION_STATUS: string[] = [
		"resiliencehub:DescribeAppVersionResourcesResolutionStatus",
	];
	/** IAM actions required for the DescribeAppVersionTemplate API call. */
	static readonly DESCRIBE_APP_VERSION_TEMPLATE: string[] = [
		"resiliencehub:DescribeAppVersionTemplate",
	];
	/** IAM actions required for the DescribeDraftAppVersionResourcesImportStatus API call. */
	static readonly DESCRIBE_DRAFT_APP_VERSION_RESOURCES_IMPORT_STATUS: string[] =
		["resiliencehub:DescribeDraftAppVersionResourcesImportStatus"];
	/** IAM actions required for the DescribeMetricsExport API call. */
	static readonly DESCRIBE_METRICS_EXPORT: string[] = [
		"resiliencehub:DescribeMetricsExport",
	];
	/** IAM actions required for the DescribeResiliencyPolicy API call. */
	static readonly DESCRIBE_RESILIENCY_POLICY: string[] = [
		"resiliencehub:DescribeResiliencyPolicy",
	];
	/** IAM actions required for the DescribeResourceGroupingRecommendationTask API call. */
	static readonly DESCRIBE_RESOURCE_GROUPING_RECOMMENDATION_TASK: string[] = [
		"resiliencehub:DescribeResourceGroupingRecommendationTask",
	];
	/** IAM actions required for the GetFailureModeFinding API call. */
	static readonly GET_FAILURE_MODE_FINDING: string[] = [
		"resiliencehub:GetFailureModeFinding",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["resiliencehub:GetPolicy"];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["resiliencehub:GetService"];
	/** IAM actions required for the GetSystem API call. */
	static readonly GET_SYSTEM: string[] = ["resiliencehub:GetSystem"];
	/** IAM actions required for the GetTest API call. */
	static readonly GET_TEST: string[] = ["resiliencehub:GetTest"];
	/** IAM actions required for the GetTestRun API call. */
	static readonly GET_TEST_RUN: string[] = ["resiliencehub:GetTestRun"];
	/** IAM actions required for the GetTestTemplate API call. */
	static readonly GET_TEST_TEMPLATE: string[] = [
		"resiliencehub:GetTestTemplate",
	];
	/** IAM actions required for the GetUserJourney API call. */
	static readonly GET_USER_JOURNEY: string[] = ["resiliencehub:GetUserJourney"];
	/** IAM actions required for the ImportApp API call. */
	static readonly IMPORT_APP: string[] = ["resiliencehub:ImportApp"];
	/** IAM actions required for the ImportPolicy API call. */
	static readonly IMPORT_POLICY: string[] = ["resiliencehub:ImportPolicy"];
	/** IAM actions required for the ImportResourcesToDraftAppVersion API call. */
	static readonly IMPORT_RESOURCES_TO_DRAFT_APP_VERSION: string[] = [
		"resiliencehub:ImportResourcesToDraftAppVersion",
	];
	/** IAM actions required for the ListAlarmRecommendations API call. */
	static readonly LIST_ALARM_RECOMMENDATIONS: string[] = [
		"resiliencehub:ListAlarmRecommendations",
	];
	/** IAM actions required for the ListAppAssessmentComplianceDrifts API call. */
	static readonly LIST_APP_ASSESSMENT_COMPLIANCE_DRIFTS: string[] = [
		"resiliencehub:ListAppAssessmentComplianceDrifts",
	];
	/** IAM actions required for the ListAppAssessmentResourceDrifts API call. */
	static readonly LIST_APP_ASSESSMENT_RESOURCE_DRIFTS: string[] = [
		"resiliencehub:ListAppAssessmentResourceDrifts",
	];
	/** IAM actions required for the ListAppAssessments API call. */
	static readonly LIST_APP_ASSESSMENTS: string[] = [
		"resiliencehub:ListAppAssessments",
	];
	/** IAM actions required for the ListAppComponentCompliances API call. */
	static readonly LIST_APP_COMPONENT_COMPLIANCES: string[] = [
		"resiliencehub:ListAppComponentCompliances",
	];
	/** IAM actions required for the ListAppComponentRecommendations API call. */
	static readonly LIST_APP_COMPONENT_RECOMMENDATIONS: string[] = [
		"resiliencehub:ListAppComponentRecommendations",
	];
	/** IAM actions required for the ListAppInputSources API call. */
	static readonly LIST_APP_INPUT_SOURCES: string[] = [
		"resiliencehub:ListAppInputSources",
	];
	/** IAM actions required for the ListAppVersionAppComponents API call. */
	static readonly LIST_APP_VERSION_APP_COMPONENTS: string[] = [
		"resiliencehub:ListAppVersionAppComponents",
	];
	/** IAM actions required for the ListAppVersionResourceMappings API call. */
	static readonly LIST_APP_VERSION_RESOURCE_MAPPINGS: string[] = [
		"resiliencehub:ListAppVersionResourceMappings",
	];
	/** IAM actions required for the ListAppVersionResources API call. */
	static readonly LIST_APP_VERSION_RESOURCES: string[] = [
		"resiliencehub:ListAppVersionResources",
	];
	/** IAM actions required for the ListAppVersions API call. */
	static readonly LIST_APP_VERSIONS: string[] = [
		"resiliencehub:ListAppVersions",
	];
	/** IAM actions required for the ListApps API call. */
	static readonly LIST_APPS: string[] = ["resiliencehub:ListApps"];
	/** IAM actions required for the ListAssertions API call. */
	static readonly LIST_ASSERTIONS: string[] = ["resiliencehub:ListAssertions"];
	/** IAM actions required for the ListDependencies API call. */
	static readonly LIST_DEPENDENCIES: string[] = [
		"resiliencehub:ListDependencies",
	];
	/** IAM actions required for the ListFailureModeAssessments API call. */
	static readonly LIST_FAILURE_MODE_ASSESSMENTS: string[] = [
		"resiliencehub:ListFailureModeAssessments",
	];
	/** IAM actions required for the ListFailureModeFindings API call. */
	static readonly LIST_FAILURE_MODE_FINDINGS: string[] = [
		"resiliencehub:ListFailureModeFindings",
	];
	/** IAM actions required for the ListInputSources API call. */
	static readonly LIST_INPUT_SOURCES: string[] = [
		"resiliencehub:ListInputSources",
	];
	/** IAM actions required for the ListMetrics API call. */
	static readonly LIST_METRICS: string[] = ["resiliencehub:ListMetrics"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["resiliencehub:ListPolicies"];
	/** IAM actions required for the ListRecommendationTemplates API call. */
	static readonly LIST_RECOMMENDATION_TEMPLATES: string[] = [
		"resiliencehub:ListRecommendationTemplates",
	];
	/** IAM actions required for the ListReports API call. */
	static readonly LIST_REPORTS: string[] = ["resiliencehub:ListReports"];
	/** IAM actions required for the ListResiliencyPolicies API call. */
	static readonly LIST_RESILIENCY_POLICIES: string[] = [
		"resiliencehub:ListResiliencyPolicies",
	];
	/** IAM actions required for the ListResolvedTestRunTargetResources API call. */
	static readonly LIST_RESOLVED_TEST_RUN_TARGET_RESOURCES: string[] = [
		"resiliencehub:ListResolvedTestRunTargetResources",
	];
	/** IAM actions required for the ListResourceGroupingRecommendations API call. */
	static readonly LIST_RESOURCE_GROUPING_RECOMMENDATIONS: string[] = [
		"resiliencehub:ListResourceGroupingRecommendations",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = ["resiliencehub:ListResources"];
	/** IAM actions required for the ListServiceEvents API call. */
	static readonly LIST_SERVICE_EVENTS: string[] = [
		"resiliencehub:ListServiceEvents",
	];
	/** IAM actions required for the ListServiceFunctions API call. */
	static readonly LIST_SERVICE_FUNCTIONS: string[] = [
		"resiliencehub:ListServiceFunctions",
	];
	/** IAM actions required for the ListServiceTopologyEdges API call. */
	static readonly LIST_SERVICE_TOPOLOGY_EDGES: string[] = [
		"resiliencehub:ListServiceTopologyEdges",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["resiliencehub:ListServices"];
	/** IAM actions required for the ListSopRecommendations API call. */
	static readonly LIST_SOP_RECOMMENDATIONS: string[] = [
		"resiliencehub:ListSopRecommendations",
	];
	/** IAM actions required for the ListSuggestedResiliencyPolicies API call. */
	static readonly LIST_SUGGESTED_RESILIENCY_POLICIES: string[] = [
		"resiliencehub:ListSuggestedResiliencyPolicies",
	];
	/** IAM actions required for the ListSystemEvents API call. */
	static readonly LIST_SYSTEM_EVENTS: string[] = [
		"resiliencehub:ListSystemEvents",
	];
	/** IAM actions required for the ListSystems API call. */
	static readonly LIST_SYSTEMS: string[] = ["resiliencehub:ListSystems"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"resiliencehub:ListTagsForResource",
	];
	/** IAM actions required for the ListTestRecommendations API call. */
	static readonly LIST_TEST_RECOMMENDATIONS: string[] = [
		"resiliencehub:ListTestRecommendations",
	];
	/** IAM actions required for the ListTestRunEvents API call. */
	static readonly LIST_TEST_RUN_EVENTS: string[] = [
		"resiliencehub:ListTestRunEvents",
	];
	/** IAM actions required for the ListTestRunSources API call. */
	static readonly LIST_TEST_RUN_SOURCES: string[] = [
		"resiliencehub:ListTestRunSources",
	];
	/** IAM actions required for the ListTestRuns API call. */
	static readonly LIST_TEST_RUNS: string[] = ["resiliencehub:ListTestRuns"];
	/** IAM actions required for the ListTestSources API call. */
	static readonly LIST_TEST_SOURCES: string[] = [
		"resiliencehub:ListTestSources",
	];
	/** IAM actions required for the ListTestTemplates API call. */
	static readonly LIST_TEST_TEMPLATES: string[] = [
		"resiliencehub:ListTestTemplates",
	];
	/** IAM actions required for the ListTests API call. */
	static readonly LIST_TESTS: string[] = ["resiliencehub:ListTests"];
	/** IAM actions required for the ListUnsupportedAppVersionResources API call. */
	static readonly LIST_UNSUPPORTED_APP_VERSION_RESOURCES: string[] = [
		"resiliencehub:ListUnsupportedAppVersionResources",
	];
	/** IAM actions required for the ListUserJourneys API call. */
	static readonly LIST_USER_JOURNEYS: string[] = [
		"resiliencehub:ListUserJourneys",
	];
	/** IAM actions required for the PublishAppVersion API call. */
	static readonly PUBLISH_APP_VERSION: string[] = [
		"resiliencehub:PublishAppVersion",
	];
	/** IAM actions required for the PutDraftAppVersionTemplate API call. */
	static readonly PUT_DRAFT_APP_VERSION_TEMPLATE: string[] = [
		"resiliencehub:PutDraftAppVersionTemplate",
	];
	/** IAM actions required for the PutTestSources API call. */
	static readonly PUT_TEST_SOURCES: string[] = ["resiliencehub:PutTestSources"];
	/** IAM actions required for the RejectResourceGroupingRecommendations API call. */
	static readonly REJECT_RESOURCE_GROUPING_RECOMMENDATIONS: string[] = [
		"resiliencehub:RejectResourceGroupingRecommendations",
	];
	/** IAM actions required for the RemoveDraftAppVersionResourceMappings API call. */
	static readonly REMOVE_DRAFT_APP_VERSION_RESOURCE_MAPPINGS: string[] = [
		"resiliencehub:RemoveDraftAppVersionResourceMappings",
	];
	/** IAM actions required for the ResolveAppVersionResources API call. */
	static readonly RESOLVE_APP_VERSION_RESOURCES: string[] = [
		"resiliencehub:ResolveAppVersionResources",
	];
	/** IAM actions required for the StartAppAssessment API call. */
	static readonly START_APP_ASSESSMENT: string[] = [
		"resiliencehub:StartAppAssessment",
		"resiliencehub:TagResource",
	];
	/** IAM actions required for the StartFailureModeAssessment API call. */
	static readonly START_FAILURE_MODE_ASSESSMENT: string[] = [
		"resiliencehub:StartFailureModeAssessment",
	];
	/** IAM actions required for the StartMetricsExport API call. */
	static readonly START_METRICS_EXPORT: string[] = [
		"resiliencehub:StartMetricsExport",
	];
	/** IAM actions required for the StartResourceGroupingRecommendationTask API call. */
	static readonly START_RESOURCE_GROUPING_RECOMMENDATION_TASK: string[] = [
		"resiliencehub:StartResourceGroupingRecommendationTask",
	];
	/** IAM actions required for the StartTestRun API call. */
	static readonly START_TEST_RUN: string[] = ["resiliencehub:StartTestRun"];
	/** IAM actions required for the StopTestRun API call. */
	static readonly STOP_TEST_RUN: string[] = ["resiliencehub:StopTestRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["resiliencehub:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["resiliencehub:UntagResource"];
	/** IAM actions required for the UpdateApp API call. */
	static readonly UPDATE_APP: string[] = [
		"iam:PassRole",
		"resiliencehub:UpdateApp",
	];
	/** IAM actions required for the UpdateAppVersion API call. */
	static readonly UPDATE_APP_VERSION: string[] = [
		"resiliencehub:UpdateAppVersion",
	];
	/** IAM actions required for the UpdateAppVersionAppComponent API call. */
	static readonly UPDATE_APP_VERSION_APP_COMPONENT: string[] = [
		"resiliencehub:UpdateAppVersionAppComponent",
	];
	/** IAM actions required for the UpdateAppVersionResource API call. */
	static readonly UPDATE_APP_VERSION_RESOURCE: string[] = [
		"resiliencehub:UpdateAppVersionResource",
	];
	/** IAM actions required for the UpdateAssertion API call. */
	static readonly UPDATE_ASSERTION: string[] = [
		"resiliencehub:UpdateAssertion",
	];
	/** IAM actions required for the UpdateDependency API call. */
	static readonly UPDATE_DEPENDENCY: string[] = [
		"resiliencehub:UpdateDependency",
	];
	/** IAM actions required for the UpdateFailureModeFinding API call. */
	static readonly UPDATE_FAILURE_MODE_FINDING: string[] = [
		"resiliencehub:UpdateFailureModeFinding",
	];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UPDATE_POLICY: string[] = ["resiliencehub:UpdatePolicy"];
	/** IAM actions required for the UpdateResiliencyPolicy API call. */
	static readonly UPDATE_RESILIENCY_POLICY: string[] = [
		"resiliencehub:UpdateResiliencyPolicy",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = [
		"iam:PassRole",
		"resiliencehub:UpdateService",
	];
	/** IAM actions required for the UpdateServiceFunction API call. */
	static readonly UPDATE_SERVICE_FUNCTION: string[] = [
		"resiliencehub:UpdateServiceFunction",
	];
	/** IAM actions required for the UpdateSystem API call. */
	static readonly UPDATE_SYSTEM: string[] = ["resiliencehub:UpdateSystem"];
	/** IAM actions required for the UpdateTest API call. */
	static readonly UPDATE_TEST: string[] = ["resiliencehub:UpdateTest"];
	/** IAM actions required for the UpdateUserJourney API call. */
	static readonly UPDATE_USER_JOURNEY: string[] = [
		"resiliencehub:UpdateUserJourney",
	];
}

/**
 * Condition key constants and builders for resiliencehub.
 */
export class ResiliencehubConditions {
	/** Condition keys applicable to the CreateApp action. */
	static readonly CREATE_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecommendationTemplate action. */
	static readonly CREATE_RECOMMENDATION_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResiliencyPolicy action. */
	static readonly CREATE_RESILIENCY_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartAppAssessment action. */
	static readonly START_APP_ASSESSMENT_CONDITION_KEYS: string[] = [
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
