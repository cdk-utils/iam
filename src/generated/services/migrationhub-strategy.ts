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
	static readonly actionGetAntiPattern = "migrationhub-strategy:GetAntiPattern";
	/** [Read] migrationhub-strategy:GetApplicationComponentDetails */
	static readonly actionGetApplicationComponentDetails =
		"migrationhub-strategy:GetApplicationComponentDetails";
	/** [Read] migrationhub-strategy:GetApplicationComponentStrategies */
	static readonly actionGetApplicationComponentStrategies =
		"migrationhub-strategy:GetApplicationComponentStrategies";
	/** [Read] migrationhub-strategy:GetAssessment */
	static readonly actionGetAssessment = "migrationhub-strategy:GetAssessment";
	/** [Read] migrationhub-strategy:GetImportFileTask */
	static readonly actionGetImportFileTask =
		"migrationhub-strategy:GetImportFileTask";
	/** [Read] migrationhub-strategy:GetLatestAssessmentId */
	static readonly actionGetLatestAssessmentId =
		"migrationhub-strategy:GetLatestAssessmentId";
	/** [Read] migrationhub-strategy:GetMessage */
	static readonly actionGetMessage = "migrationhub-strategy:GetMessage";
	/** [Read] migrationhub-strategy:GetPortfolioPreferences */
	static readonly actionGetPortfolioPreferences =
		"migrationhub-strategy:GetPortfolioPreferences";
	/** [Read] migrationhub-strategy:GetPortfolioSummary */
	static readonly actionGetPortfolioSummary =
		"migrationhub-strategy:GetPortfolioSummary";
	/** [Read] migrationhub-strategy:GetRecommendationReportDetails */
	static readonly actionGetRecommendationReportDetails =
		"migrationhub-strategy:GetRecommendationReportDetails";
	/** [Read] migrationhub-strategy:GetServerDetails */
	static readonly actionGetServerDetails =
		"migrationhub-strategy:GetServerDetails";
	/** [Read] migrationhub-strategy:GetServerStrategies */
	static readonly actionGetServerStrategies =
		"migrationhub-strategy:GetServerStrategies";
	/** [List] migrationhub-strategy:ListAnalyzableServers */
	static readonly ListAnalyzableServers =
		"migrationhub-strategy:ListAnalyzableServers";
	/** [List] migrationhub-strategy:ListAntiPatterns */
	static readonly ListAntiPatterns = "migrationhub-strategy:ListAntiPatterns";
	/** [List] migrationhub-strategy:ListApplicationComponents */
	static readonly ListApplicationComponents =
		"migrationhub-strategy:ListApplicationComponents";
	/** [List] migrationhub-strategy:ListCollectors */
	static readonly ListCollectors = "migrationhub-strategy:ListCollectors";
	/** [List] migrationhub-strategy:ListImportFileTask */
	static readonly ListImportFileTask =
		"migrationhub-strategy:ListImportFileTask";
	/** [List] migrationhub-strategy:ListJarArtifacts */
	static readonly ListJarArtifacts = "migrationhub-strategy:ListJarArtifacts";
	/** [List] migrationhub-strategy:ListServers */
	static readonly ListServers = "migrationhub-strategy:ListServers";
	/** [Write] migrationhub-strategy:PutLogData */
	static readonly PutLogData = "migrationhub-strategy:PutLogData";
	/** [Write] migrationhub-strategy:PutMetricData */
	static readonly PutMetricData = "migrationhub-strategy:PutMetricData";
	/** [Write] migrationhub-strategy:PutPortfolioPreferences */
	static readonly PutPortfolioPreferences =
		"migrationhub-strategy:PutPortfolioPreferences";
	/** [Write] migrationhub-strategy:RegisterCollector */
	static readonly RegisterCollector = "migrationhub-strategy:RegisterCollector";
	/** [Write] migrationhub-strategy:SendMessage */
	static readonly SendMessage = "migrationhub-strategy:SendMessage";
	/** [Write] migrationhub-strategy:StartAssessment */
	static readonly StartAssessment = "migrationhub-strategy:StartAssessment";
	/** [Write] migrationhub-strategy:StartImportFileTask */
	static readonly StartImportFileTask =
		"migrationhub-strategy:StartImportFileTask";
	/** [Write] migrationhub-strategy:StartRecommendationReportGeneration */
	static readonly StartRecommendationReportGeneration =
		"migrationhub-strategy:StartRecommendationReportGeneration";
	/** [Write] migrationhub-strategy:StopAssessment */
	static readonly StopAssessment = "migrationhub-strategy:StopAssessment";
	/** [Write] migrationhub-strategy:UpdateApplicationComponentConfig */
	static readonly UpdateApplicationComponentConfig =
		"migrationhub-strategy:UpdateApplicationComponentConfig";
	/** [Write] migrationhub-strategy:UpdateCollectorConfiguration */
	static readonly UpdateCollectorConfiguration =
		"migrationhub-strategy:UpdateCollectorConfiguration";
	/** [Write] migrationhub-strategy:UpdateServerConfig */
	static readonly UpdateServerConfig =
		"migrationhub-strategy:UpdateServerConfig";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MigrationhubStrategyActions.actionGetAntiPattern,
		MigrationhubStrategyActions.actionGetApplicationComponentDetails,
		MigrationhubStrategyActions.actionGetApplicationComponentStrategies,
		MigrationhubStrategyActions.actionGetAssessment,
		MigrationhubStrategyActions.actionGetImportFileTask,
		MigrationhubStrategyActions.actionGetLatestAssessmentId,
		MigrationhubStrategyActions.actionGetMessage,
		MigrationhubStrategyActions.actionGetPortfolioPreferences,
		MigrationhubStrategyActions.actionGetPortfolioSummary,
		MigrationhubStrategyActions.actionGetRecommendationReportDetails,
		MigrationhubStrategyActions.actionGetServerDetails,
		MigrationhubStrategyActions.actionGetServerStrategies,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MigrationhubStrategyActions.PutLogData,
		MigrationhubStrategyActions.PutMetricData,
		MigrationhubStrategyActions.PutPortfolioPreferences,
		MigrationhubStrategyActions.RegisterCollector,
		MigrationhubStrategyActions.SendMessage,
		MigrationhubStrategyActions.StartAssessment,
		MigrationhubStrategyActions.StartImportFileTask,
		MigrationhubStrategyActions.StartRecommendationReportGeneration,
		MigrationhubStrategyActions.StopAssessment,
		MigrationhubStrategyActions.UpdateApplicationComponentConfig,
		MigrationhubStrategyActions.UpdateCollectorConfiguration,
		MigrationhubStrategyActions.UpdateServerConfig,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MigrationhubStrategyActions.ListAnalyzableServers,
		MigrationhubStrategyActions.ListAntiPatterns,
		MigrationhubStrategyActions.ListApplicationComponents,
		MigrationhubStrategyActions.ListCollectors,
		MigrationhubStrategyActions.ListImportFileTask,
		MigrationhubStrategyActions.ListJarArtifacts,
		MigrationhubStrategyActions.ListServers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for migrationhub-strategy.
 */
export class MigrationhubStrategyOperations {
	/** IAM actions required for the GetApplicationComponentDetails API call. */
	static readonly opGetApplicationComponentDetails: string[] = [
		"migrationhub-strategy:GetApplicationComponentDetails",
	];
	/** IAM actions required for the GetApplicationComponentStrategies API call. */
	static readonly opGetApplicationComponentStrategies: string[] = [
		"migrationhub-strategy:GetApplicationComponentStrategies",
	];
	/** IAM actions required for the GetAssessment API call. */
	static readonly opGetAssessment: string[] = [
		"migrationhub-strategy:GetAssessment",
	];
	/** IAM actions required for the GetImportFileTask API call. */
	static readonly opGetImportFileTask: string[] = [
		"migrationhub-strategy:GetImportFileTask",
	];
	/** IAM actions required for the GetLatestAssessmentId API call. */
	static readonly opGetLatestAssessmentId: string[] = [
		"migrationhub-strategy:GetLatestAssessmentId",
	];
	/** IAM actions required for the GetPortfolioPreferences API call. */
	static readonly opGetPortfolioPreferences: string[] = [
		"migrationhub-strategy:GetPortfolioPreferences",
	];
	/** IAM actions required for the GetPortfolioSummary API call. */
	static readonly opGetPortfolioSummary: string[] = [
		"migrationhub-strategy:GetPortfolioSummary",
	];
	/** IAM actions required for the GetRecommendationReportDetails API call. */
	static readonly opGetRecommendationReportDetails: string[] = [
		"migrationhub-strategy:GetRecommendationReportDetails",
	];
	/** IAM actions required for the GetServerDetails API call. */
	static readonly opGetServerDetails: string[] = [
		"migrationhub-strategy:GetServerDetails",
	];
	/** IAM actions required for the GetServerStrategies API call. */
	static readonly opGetServerStrategies: string[] = [
		"migrationhub-strategy:GetServerStrategies",
	];
	/** IAM actions required for the ListAnalyzableServers API call. */
	static readonly ListAnalyzableServers: string[] = [
		"migrationhub-strategy:ListAnalyzableServers",
	];
	/** IAM actions required for the ListApplicationComponents API call. */
	static readonly ListApplicationComponents: string[] = [
		"migrationhub-strategy:ListApplicationComponents",
	];
	/** IAM actions required for the ListCollectors API call. */
	static readonly ListCollectors: string[] = [
		"migrationhub-strategy:ListCollectors",
	];
	/** IAM actions required for the ListImportFileTask API call. */
	static readonly ListImportFileTask: string[] = [
		"migrationhub-strategy:ListImportFileTask",
	];
	/** IAM actions required for the ListServers API call. */
	static readonly ListServers: string[] = ["migrationhub-strategy:ListServers"];
	/** IAM actions required for the PutPortfolioPreferences API call. */
	static readonly PutPortfolioPreferences: string[] = [
		"migrationhub-strategy:PutPortfolioPreferences",
	];
	/** IAM actions required for the StartAssessment API call. */
	static readonly StartAssessment: string[] = [
		"migrationhub-strategy:StartAssessment",
	];
	/** IAM actions required for the StartImportFileTask API call. */
	static readonly StartImportFileTask: string[] = [
		"migrationhub-strategy:StartImportFileTask",
	];
	/** IAM actions required for the StartRecommendationReportGeneration API call. */
	static readonly StartRecommendationReportGeneration: string[] = [
		"migrationhub-strategy:StartRecommendationReportGeneration",
	];
	/** IAM actions required for the StopAssessment API call. */
	static readonly StopAssessment: string[] = [
		"migrationhub-strategy:StopAssessment",
	];
	/** IAM actions required for the UpdateApplicationComponentConfig API call. */
	static readonly UpdateApplicationComponentConfig: string[] = [
		"migrationhub-strategy:UpdateApplicationComponentConfig",
	];
	/** IAM actions required for the UpdateServerConfig API call. */
	static readonly UpdateServerConfig: string[] = [
		"migrationhub-strategy:UpdateServerConfig",
	];
}
