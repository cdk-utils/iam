// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/migrationhub-strategy.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the migrationhub-strategy service.
 */
export class MigrationhubStrategyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "migrationhub-strategy";

	/** [Read] migrationhub-strategy:GetAntiPattern */
	static readonly GET_ANTI_PATTERN = "migrationhub-strategy:GetAntiPattern";
	/** [Read] migrationhub-strategy:GetApplicationComponentDetails */
	static readonly GET_APPLICATION_COMPONENT_DETAILS =
		"migrationhub-strategy:GetApplicationComponentDetails";
	/** [Read] migrationhub-strategy:GetApplicationComponentStrategies */
	static readonly GET_APPLICATION_COMPONENT_STRATEGIES =
		"migrationhub-strategy:GetApplicationComponentStrategies";
	/** [Read] migrationhub-strategy:GetAssessment */
	static readonly GET_ASSESSMENT = "migrationhub-strategy:GetAssessment";
	/** [Read] migrationhub-strategy:GetImportFileTask */
	static readonly GET_IMPORT_FILE_TASK =
		"migrationhub-strategy:GetImportFileTask";
	/** [Read] migrationhub-strategy:GetLatestAssessmentId */
	static readonly GET_LATEST_ASSESSMENT_ID =
		"migrationhub-strategy:GetLatestAssessmentId";
	/** [Read] migrationhub-strategy:GetMessage */
	static readonly GET_MESSAGE = "migrationhub-strategy:GetMessage";
	/** [Read] migrationhub-strategy:GetPortfolioPreferences */
	static readonly GET_PORTFOLIO_PREFERENCES =
		"migrationhub-strategy:GetPortfolioPreferences";
	/** [Read] migrationhub-strategy:GetPortfolioSummary */
	static readonly GET_PORTFOLIO_SUMMARY =
		"migrationhub-strategy:GetPortfolioSummary";
	/** [Read] migrationhub-strategy:GetRecommendationReportDetails */
	static readonly GET_RECOMMENDATION_REPORT_DETAILS =
		"migrationhub-strategy:GetRecommendationReportDetails";
	/** [Read] migrationhub-strategy:GetServerDetails */
	static readonly GET_SERVER_DETAILS = "migrationhub-strategy:GetServerDetails";
	/** [Read] migrationhub-strategy:GetServerStrategies */
	static readonly GET_SERVER_STRATEGIES =
		"migrationhub-strategy:GetServerStrategies";
	/** [List] migrationhub-strategy:ListAnalyzableServers */
	static readonly LIST_ANALYZABLE_SERVERS =
		"migrationhub-strategy:ListAnalyzableServers";
	/** [List] migrationhub-strategy:ListAntiPatterns */
	static readonly LIST_ANTI_PATTERNS = "migrationhub-strategy:ListAntiPatterns";
	/** [List] migrationhub-strategy:ListApplicationComponents */
	static readonly LIST_APPLICATION_COMPONENTS =
		"migrationhub-strategy:ListApplicationComponents";
	/** [List] migrationhub-strategy:ListCollectors */
	static readonly LIST_COLLECTORS = "migrationhub-strategy:ListCollectors";
	/** [List] migrationhub-strategy:ListImportFileTask */
	static readonly LIST_IMPORT_FILE_TASK =
		"migrationhub-strategy:ListImportFileTask";
	/** [List] migrationhub-strategy:ListJarArtifacts */
	static readonly LIST_JAR_ARTIFACTS = "migrationhub-strategy:ListJarArtifacts";
	/** [List] migrationhub-strategy:ListServers */
	static readonly LIST_SERVERS = "migrationhub-strategy:ListServers";
	/** [Write] migrationhub-strategy:PutLogData */
	static readonly PUT_LOG_DATA = "migrationhub-strategy:PutLogData";
	/** [Write] migrationhub-strategy:PutMetricData */
	static readonly PUT_METRIC_DATA = "migrationhub-strategy:PutMetricData";
	/** [Write] migrationhub-strategy:PutPortfolioPreferences */
	static readonly PUT_PORTFOLIO_PREFERENCES =
		"migrationhub-strategy:PutPortfolioPreferences";
	/** [Write] migrationhub-strategy:RegisterCollector */
	static readonly REGISTER_COLLECTOR =
		"migrationhub-strategy:RegisterCollector";
	/** [Write] migrationhub-strategy:SendMessage */
	static readonly SEND_MESSAGE = "migrationhub-strategy:SendMessage";
	/** [Write] migrationhub-strategy:StartAssessment */
	static readonly START_ASSESSMENT = "migrationhub-strategy:StartAssessment";
	/** [Write] migrationhub-strategy:StartImportFileTask */
	static readonly START_IMPORT_FILE_TASK =
		"migrationhub-strategy:StartImportFileTask";
	/** [Write] migrationhub-strategy:StartRecommendationReportGeneration */
	static readonly START_RECOMMENDATION_REPORT_GENERATION =
		"migrationhub-strategy:StartRecommendationReportGeneration";
	/** [Write] migrationhub-strategy:StopAssessment */
	static readonly STOP_ASSESSMENT = "migrationhub-strategy:StopAssessment";
	/** [Write] migrationhub-strategy:UpdateApplicationComponentConfig */
	static readonly UPDATE_APPLICATION_COMPONENT_CONFIG =
		"migrationhub-strategy:UpdateApplicationComponentConfig";
	/** [Write] migrationhub-strategy:UpdateCollectorConfiguration */
	static readonly UPDATE_COLLECTOR_CONFIGURATION =
		"migrationhub-strategy:UpdateCollectorConfiguration";
	/** [Write] migrationhub-strategy:UpdateServerConfig */
	static readonly UPDATE_SERVER_CONFIG =
		"migrationhub-strategy:UpdateServerConfig";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MigrationhubStrategyActions.GET_ANTI_PATTERN,
		MigrationhubStrategyActions.GET_APPLICATION_COMPONENT_DETAILS,
		MigrationhubStrategyActions.GET_APPLICATION_COMPONENT_STRATEGIES,
		MigrationhubStrategyActions.GET_ASSESSMENT,
		MigrationhubStrategyActions.GET_IMPORT_FILE_TASK,
		MigrationhubStrategyActions.GET_LATEST_ASSESSMENT_ID,
		MigrationhubStrategyActions.GET_MESSAGE,
		MigrationhubStrategyActions.GET_PORTFOLIO_PREFERENCES,
		MigrationhubStrategyActions.GET_PORTFOLIO_SUMMARY,
		MigrationhubStrategyActions.GET_RECOMMENDATION_REPORT_DETAILS,
		MigrationhubStrategyActions.GET_SERVER_DETAILS,
		MigrationhubStrategyActions.GET_SERVER_STRATEGIES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MigrationhubStrategyActions.PUT_LOG_DATA,
		MigrationhubStrategyActions.PUT_METRIC_DATA,
		MigrationhubStrategyActions.PUT_PORTFOLIO_PREFERENCES,
		MigrationhubStrategyActions.REGISTER_COLLECTOR,
		MigrationhubStrategyActions.SEND_MESSAGE,
		MigrationhubStrategyActions.START_ASSESSMENT,
		MigrationhubStrategyActions.START_IMPORT_FILE_TASK,
		MigrationhubStrategyActions.START_RECOMMENDATION_REPORT_GENERATION,
		MigrationhubStrategyActions.STOP_ASSESSMENT,
		MigrationhubStrategyActions.UPDATE_APPLICATION_COMPONENT_CONFIG,
		MigrationhubStrategyActions.UPDATE_COLLECTOR_CONFIGURATION,
		MigrationhubStrategyActions.UPDATE_SERVER_CONFIG,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MigrationhubStrategyActions.LIST_ANALYZABLE_SERVERS,
		MigrationhubStrategyActions.LIST_ANTI_PATTERNS,
		MigrationhubStrategyActions.LIST_APPLICATION_COMPONENTS,
		MigrationhubStrategyActions.LIST_COLLECTORS,
		MigrationhubStrategyActions.LIST_IMPORT_FILE_TASK,
		MigrationhubStrategyActions.LIST_JAR_ARTIFACTS,
		MigrationhubStrategyActions.LIST_SERVERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for migrationhub-strategy.
 */
export class MigrationhubStrategyOperations {
	/** IAM actions required for the GetApplicationComponentDetails API call. */
	static readonly GET_APPLICATION_COMPONENT_DETAILS: string[] = [
		"migrationhub-strategy:GetApplicationComponentDetails",
	];
	/** IAM actions required for the GetApplicationComponentStrategies API call. */
	static readonly GET_APPLICATION_COMPONENT_STRATEGIES: string[] = [
		"migrationhub-strategy:GetApplicationComponentStrategies",
	];
	/** IAM actions required for the GetAssessment API call. */
	static readonly GET_ASSESSMENT: string[] = [
		"migrationhub-strategy:GetAssessment",
	];
	/** IAM actions required for the GetImportFileTask API call. */
	static readonly GET_IMPORT_FILE_TASK: string[] = [
		"migrationhub-strategy:GetImportFileTask",
	];
	/** IAM actions required for the GetLatestAssessmentId API call. */
	static readonly GET_LATEST_ASSESSMENT_ID: string[] = [
		"migrationhub-strategy:GetLatestAssessmentId",
	];
	/** IAM actions required for the GetPortfolioPreferences API call. */
	static readonly GET_PORTFOLIO_PREFERENCES: string[] = [
		"migrationhub-strategy:GetPortfolioPreferences",
	];
	/** IAM actions required for the GetPortfolioSummary API call. */
	static readonly GET_PORTFOLIO_SUMMARY: string[] = [
		"migrationhub-strategy:GetPortfolioSummary",
	];
	/** IAM actions required for the GetRecommendationReportDetails API call. */
	static readonly GET_RECOMMENDATION_REPORT_DETAILS: string[] = [
		"migrationhub-strategy:GetRecommendationReportDetails",
	];
	/** IAM actions required for the GetServerDetails API call. */
	static readonly GET_SERVER_DETAILS: string[] = [
		"migrationhub-strategy:GetServerDetails",
	];
	/** IAM actions required for the GetServerStrategies API call. */
	static readonly GET_SERVER_STRATEGIES: string[] = [
		"migrationhub-strategy:GetServerStrategies",
	];
	/** IAM actions required for the ListAnalyzableServers API call. */
	static readonly LIST_ANALYZABLE_SERVERS: string[] = [
		"migrationhub-strategy:ListAnalyzableServers",
	];
	/** IAM actions required for the ListApplicationComponents API call. */
	static readonly LIST_APPLICATION_COMPONENTS: string[] = [
		"migrationhub-strategy:ListApplicationComponents",
	];
	/** IAM actions required for the ListCollectors API call. */
	static readonly LIST_COLLECTORS: string[] = [
		"migrationhub-strategy:ListCollectors",
	];
	/** IAM actions required for the ListImportFileTask API call. */
	static readonly LIST_IMPORT_FILE_TASK: string[] = [
		"migrationhub-strategy:ListImportFileTask",
	];
	/** IAM actions required for the ListServers API call. */
	static readonly LIST_SERVERS: string[] = [
		"migrationhub-strategy:ListServers",
	];
	/** IAM actions required for the PutPortfolioPreferences API call. */
	static readonly PUT_PORTFOLIO_PREFERENCES: string[] = [
		"migrationhub-strategy:PutPortfolioPreferences",
	];
	/** IAM actions required for the StartAssessment API call. */
	static readonly START_ASSESSMENT: string[] = [
		"migrationhub-strategy:StartAssessment",
	];
	/** IAM actions required for the StartImportFileTask API call. */
	static readonly START_IMPORT_FILE_TASK: string[] = [
		"migrationhub-strategy:StartImportFileTask",
	];
	/** IAM actions required for the StartRecommendationReportGeneration API call. */
	static readonly START_RECOMMENDATION_REPORT_GENERATION: string[] = [
		"migrationhub-strategy:StartRecommendationReportGeneration",
	];
	/** IAM actions required for the StopAssessment API call. */
	static readonly STOP_ASSESSMENT: string[] = [
		"migrationhub-strategy:StopAssessment",
	];
	/** IAM actions required for the UpdateApplicationComponentConfig API call. */
	static readonly UPDATE_APPLICATION_COMPONENT_CONFIG: string[] = [
		"migrationhub-strategy:UpdateApplicationComponentConfig",
	];
	/** IAM actions required for the UpdateServerConfig API call. */
	static readonly UPDATE_SERVER_CONFIG: string[] = [
		"migrationhub-strategy:UpdateServerConfig",
	];
}
