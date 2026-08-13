// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/glue.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the glue service.
 */
export class GlueActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "glue";

	/** [Read] glue:AccessDataQualityRuntimeConfiguration */
	static readonly AccessDataQualityRuntimeConfiguration =
		"glue:AccessDataQualityRuntimeConfiguration";
	/** [Write] glue:AuthorizeInboundIntegration */
	static readonly AuthorizeInboundIntegration =
		"glue:AuthorizeInboundIntegration";
	/** [Write] glue:BatchCreatePartition */
	static readonly BatchCreatePartition = "glue:BatchCreatePartition";
	/** [Write] glue:BatchDeleteConnection */
	static readonly BatchDeleteConnection = "glue:BatchDeleteConnection";
	/** [Write] glue:BatchDeletePartition */
	static readonly BatchDeletePartition = "glue:BatchDeletePartition";
	/** [Write] glue:BatchDeleteTable */
	static readonly BatchDeleteTable = "glue:BatchDeleteTable";
	/** [Write] glue:BatchDeleteTableVersion */
	static readonly BatchDeleteTableVersion = "glue:BatchDeleteTableVersion";
	/** [Read] glue:BatchGetBlueprints */
	static readonly BatchGetBlueprints = "glue:BatchGetBlueprints";
	/** [Read] glue:BatchGetCrawlers */
	static readonly BatchGetCrawlers = "glue:BatchGetCrawlers";
	/** [Read] glue:BatchGetCustomEntityTypes */
	static readonly BatchGetCustomEntityTypes = "glue:BatchGetCustomEntityTypes";
	/** [Read] glue:BatchGetDevEndpoints */
	static readonly BatchGetDevEndpoints = "glue:BatchGetDevEndpoints";
	/** [Read] glue:BatchGetJobs */
	static readonly BatchGetJobs = "glue:BatchGetJobs";
	/** [Read] glue:BatchGetPartition */
	static readonly BatchGetPartition = "glue:BatchGetPartition";
	/** [PermissionManagement] glue:BatchGetStageFiles */
	static readonly BatchGetStageFiles = "glue:BatchGetStageFiles";
	/** [Read] glue:BatchGetTableOptimizer */
	static readonly BatchGetTableOptimizer = "glue:BatchGetTableOptimizer";
	/** [Read] glue:BatchGetTriggers */
	static readonly BatchGetTriggers = "glue:BatchGetTriggers";
	/** [Read] glue:BatchGetWorkflows */
	static readonly BatchGetWorkflows = "glue:BatchGetWorkflows";
	/** [Write] glue:BatchStopJobRun */
	static readonly BatchStopJobRun = "glue:BatchStopJobRun";
	/** [Write] glue:BatchUpdatePartition */
	static readonly BatchUpdatePartition = "glue:BatchUpdatePartition";
	/** [Write] glue:CancelDataQualityRuleRecommendationRun */
	static readonly CancelDataQualityRuleRecommendationRun =
		"glue:CancelDataQualityRuleRecommendationRun";
	/** [Write] glue:CancelDataQualityRulesetEvaluationRun */
	static readonly CancelDataQualityRulesetEvaluationRun =
		"glue:CancelDataQualityRulesetEvaluationRun";
	/** [Write] glue:CancelMLTaskRun */
	static readonly CancelMLTaskRun = "glue:CancelMLTaskRun";
	/** [Write] glue:CancelStatement */
	static readonly CancelStatement = "glue:CancelStatement";
	/** [Read] glue:CheckSchemaVersionValidity */
	static readonly CheckSchemaVersionValidity =
		"glue:CheckSchemaVersionValidity";
	/** [Write] glue:CreateBlueprint */
	static readonly CreateBlueprint = "glue:CreateBlueprint";
	/** [Write] glue:CreateCatalog */
	static readonly CreateCatalog = "glue:CreateCatalog";
	/** [Write] glue:CreateClassifier */
	static readonly CreateClassifier = "glue:CreateClassifier";
	/** [Write] glue:CreateColumnStatisticsTaskSettings */
	static readonly CreateColumnStatisticsTaskSettings =
		"glue:CreateColumnStatisticsTaskSettings";
	/** [Write] glue:CreateConnection */
	static readonly CreateConnection = "glue:CreateConnection";
	/** [Write] glue:CreateCrawler */
	static readonly CreateCrawler = "glue:CreateCrawler";
	/** [Write] glue:CreateCustomEntityType */
	static readonly CreateCustomEntityType = "glue:CreateCustomEntityType";
	/** [Write] glue:CreateDataQualityRuleset */
	static readonly CreateDataQualityRuleset = "glue:CreateDataQualityRuleset";
	/** [Write] glue:CreateDatabase */
	static readonly CreateDatabase = "glue:CreateDatabase";
	/** [Write] glue:CreateDevEndpoint */
	static readonly CreateDevEndpoint = "glue:CreateDevEndpoint";
	/** [Write] glue:CreateGlueIdentityCenterConfiguration */
	static readonly CreateGlueIdentityCenterConfiguration =
		"glue:CreateGlueIdentityCenterConfiguration";
	/** [Write] glue:CreateInboundIntegration */
	static readonly CreateInboundIntegration = "glue:CreateInboundIntegration";
	/** [Write] glue:CreateIntegration */
	static readonly CreateIntegration = "glue:CreateIntegration";
	/** [Write] glue:CreateIntegrationResourceProperty */
	static readonly CreateIntegrationResourceProperty =
		"glue:CreateIntegrationResourceProperty";
	/** [Write] glue:CreateIntegrationTableProperties */
	static readonly CreateIntegrationTableProperties =
		"glue:CreateIntegrationTableProperties";
	/** [Write] glue:CreateJob */
	static readonly CreateJob = "glue:CreateJob";
	/** [Write] glue:CreateMLTransform */
	static readonly CreateMLTransform = "glue:CreateMLTransform";
	/** [Write] glue:CreatePartition */
	static readonly CreatePartition = "glue:CreatePartition";
	/** [Write] glue:CreatePartitionIndex */
	static readonly CreatePartitionIndex = "glue:CreatePartitionIndex";
	/** [Write] glue:CreateRegistry */
	static readonly CreateRegistry = "glue:CreateRegistry";
	/** [Write] glue:CreateSchema */
	static readonly CreateSchema = "glue:CreateSchema";
	/** [Write] glue:CreateScript */
	static readonly CreateScript = "glue:CreateScript";
	/** [Write] glue:CreateSecurityConfiguration */
	static readonly CreateSecurityConfiguration =
		"glue:CreateSecurityConfiguration";
	/** [Write] glue:CreateSession */
	static readonly CreateSession = "glue:CreateSession";
	/** [Write] glue:CreateTable */
	static readonly CreateTable = "glue:CreateTable";
	/** [Write] glue:CreateTableOptimizer */
	static readonly CreateTableOptimizer = "glue:CreateTableOptimizer";
	/** [Write] glue:CreateTrigger */
	static readonly CreateTrigger = "glue:CreateTrigger";
	/** [Write] glue:CreateUsageProfile */
	static readonly CreateUsageProfile = "glue:CreateUsageProfile";
	/** [Write] glue:CreateUserDefinedFunction */
	static readonly CreateUserDefinedFunction = "glue:CreateUserDefinedFunction";
	/** [Write] glue:CreateWorkflow */
	static readonly CreateWorkflow = "glue:CreateWorkflow";
	/** [Write] glue:DeleteBlueprint */
	static readonly DeleteBlueprint = "glue:DeleteBlueprint";
	/** [Write] glue:DeleteCatalog */
	static readonly DeleteCatalog = "glue:DeleteCatalog";
	/** [Write] glue:DeleteClassifier */
	static readonly DeleteClassifier = "glue:DeleteClassifier";
	/** [Write] glue:DeleteColumnStatisticsForPartition */
	static readonly DeleteColumnStatisticsForPartition =
		"glue:DeleteColumnStatisticsForPartition";
	/** [Write] glue:DeleteColumnStatisticsForTable */
	static readonly DeleteColumnStatisticsForTable =
		"glue:DeleteColumnStatisticsForTable";
	/** [Write] glue:DeleteColumnStatisticsTaskSettings */
	static readonly DeleteColumnStatisticsTaskSettings =
		"glue:DeleteColumnStatisticsTaskSettings";
	/** [Write] glue:DeleteConnection */
	static readonly DeleteConnection = "glue:DeleteConnection";
	/** [Write] glue:DeleteConnectionType */
	static readonly DeleteConnectionType = "glue:DeleteConnectionType";
	/** [Write] glue:DeleteCrawler */
	static readonly DeleteCrawler = "glue:DeleteCrawler";
	/** [Write] glue:DeleteCustomEntityType */
	static readonly DeleteCustomEntityType = "glue:DeleteCustomEntityType";
	/** [Write] glue:DeleteDataQualityRuleset */
	static readonly DeleteDataQualityRuleset = "glue:DeleteDataQualityRuleset";
	/** [Write] glue:DeleteDatabase */
	static readonly DeleteDatabase = "glue:DeleteDatabase";
	/** [Write] glue:DeleteDevEndpoint */
	static readonly DeleteDevEndpoint = "glue:DeleteDevEndpoint";
	/** [Write] glue:DeleteGlueIdentityCenterConfiguration */
	static readonly DeleteGlueIdentityCenterConfiguration =
		"glue:DeleteGlueIdentityCenterConfiguration";
	/** [Write] glue:DeleteIntegration */
	static readonly DeleteIntegration = "glue:DeleteIntegration";
	/** [Write] glue:DeleteIntegrationResourceProperty */
	static readonly DeleteIntegrationResourceProperty =
		"glue:DeleteIntegrationResourceProperty";
	/** [Write] glue:DeleteIntegrationTableProperties */
	static readonly DeleteIntegrationTableProperties =
		"glue:DeleteIntegrationTableProperties";
	/** [Write] glue:DeleteJob */
	static readonly DeleteJob = "glue:DeleteJob";
	/** [Write] glue:DeleteMLTransform */
	static readonly DeleteMLTransform = "glue:DeleteMLTransform";
	/** [Write] glue:DeletePartition */
	static readonly DeletePartition = "glue:DeletePartition";
	/** [Write] glue:DeletePartitionIndex */
	static readonly DeletePartitionIndex = "glue:DeletePartitionIndex";
	/** [Write] glue:DeleteRegistry */
	static readonly DeleteRegistry = "glue:DeleteRegistry";
	/** [PermissionManagement] glue:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "glue:DeleteResourcePolicy";
	/** [Write] glue:DeleteSchema */
	static readonly DeleteSchema = "glue:DeleteSchema";
	/** [Write] glue:DeleteSchemaVersions */
	static readonly DeleteSchemaVersions = "glue:DeleteSchemaVersions";
	/** [Write] glue:DeleteSecurityConfiguration */
	static readonly DeleteSecurityConfiguration =
		"glue:DeleteSecurityConfiguration";
	/** [Write] glue:DeleteSession */
	static readonly DeleteSession = "glue:DeleteSession";
	/** [Write] glue:DeleteTable */
	static readonly DeleteTable = "glue:DeleteTable";
	/** [Write] glue:DeleteTableOptimizer */
	static readonly DeleteTableOptimizer = "glue:DeleteTableOptimizer";
	/** [Write] glue:DeleteTableVersion */
	static readonly DeleteTableVersion = "glue:DeleteTableVersion";
	/** [Write] glue:DeleteTrigger */
	static readonly DeleteTrigger = "glue:DeleteTrigger";
	/** [Write] glue:DeleteUsageProfile */
	static readonly DeleteUsageProfile = "glue:DeleteUsageProfile";
	/** [Write] glue:DeleteUserDefinedFunction */
	static readonly DeleteUserDefinedFunction = "glue:DeleteUserDefinedFunction";
	/** [Write] glue:DeleteWorkflow */
	static readonly DeleteWorkflow = "glue:DeleteWorkflow";
	/** [PermissionManagement] glue:DeregisterDataPreview */
	static readonly DeregisterDataPreview = "glue:DeregisterDataPreview";
	/** [PermissionManagement] glue:DescribeConnectionType */
	static readonly DescribeConnectionType = "glue:DescribeConnectionType";
	/** [PermissionManagement] glue:DescribeEntity */
	static readonly DescribeEntity = "glue:DescribeEntity";
	/** [List] glue:DescribeInboundIntegrations */
	static readonly DescribeInboundIntegrations =
		"glue:DescribeInboundIntegrations";
	/** [List] glue:DescribeIntegrations */
	static readonly DescribeIntegrations = "glue:DescribeIntegrations";
	/** [Write] glue:FederateAuthorization */
	static readonly FederateAuthorization = "glue:FederateAuthorization";
	/** [Read] glue:GetBlueprint */
	static readonly actionGetBlueprint = "glue:GetBlueprint";
	/** [Read] glue:GetBlueprintRun */
	static readonly actionGetBlueprintRun = "glue:GetBlueprintRun";
	/** [Read] glue:GetBlueprintRuns */
	static readonly actionGetBlueprintRuns = "glue:GetBlueprintRuns";
	/** [Read] glue:GetCatalog */
	static readonly actionGetCatalog = "glue:GetCatalog";
	/** [Read] glue:GetCatalogImportStatus */
	static readonly actionGetCatalogImportStatus = "glue:GetCatalogImportStatus";
	/** [Read] glue:GetCatalogs */
	static readonly actionGetCatalogs = "glue:GetCatalogs";
	/** [Read] glue:GetClassifier */
	static readonly actionGetClassifier = "glue:GetClassifier";
	/** [Read] glue:GetClassifiers */
	static readonly actionGetClassifiers = "glue:GetClassifiers";
	/** [Read] glue:GetColumnStatisticsForPartition */
	static readonly actionGetColumnStatisticsForPartition =
		"glue:GetColumnStatisticsForPartition";
	/** [Read] glue:GetColumnStatisticsForTable */
	static readonly actionGetColumnStatisticsForTable =
		"glue:GetColumnStatisticsForTable";
	/** [Read] glue:GetColumnStatisticsTaskRun */
	static readonly actionGetColumnStatisticsTaskRun =
		"glue:GetColumnStatisticsTaskRun";
	/** [Read] glue:GetColumnStatisticsTaskRuns */
	static readonly actionGetColumnStatisticsTaskRuns =
		"glue:GetColumnStatisticsTaskRuns";
	/** [Read] glue:GetColumnStatisticsTaskSettings */
	static readonly actionGetColumnStatisticsTaskSettings =
		"glue:GetColumnStatisticsTaskSettings";
	/** [Read] glue:GetCompletion */
	static readonly actionGetCompletion = "glue:GetCompletion";
	/** [Read] glue:GetConnection */
	static readonly actionGetConnection = "glue:GetConnection";
	/** [Read] glue:GetConnections */
	static readonly actionGetConnections = "glue:GetConnections";
	/** [Read] glue:GetCrawler */
	static readonly actionGetCrawler = "glue:GetCrawler";
	/** [Read] glue:GetCrawlerMetrics */
	static readonly actionGetCrawlerMetrics = "glue:GetCrawlerMetrics";
	/** [Read] glue:GetCrawlers */
	static readonly actionGetCrawlers = "glue:GetCrawlers";
	/** [Read] glue:GetCustomEntityType */
	static readonly actionGetCustomEntityType = "glue:GetCustomEntityType";
	/** [Read] glue:GetDashboardUrl */
	static readonly actionGetDashboardUrl = "glue:GetDashboardUrl";
	/** [Read] glue:GetDataCatalogEncryptionSettings */
	static readonly actionGetDataCatalogEncryptionSettings =
		"glue:GetDataCatalogEncryptionSettings";
	/** [PermissionManagement] glue:GetDataPreviewStatement */
	static readonly actionGetDataPreviewStatement =
		"glue:GetDataPreviewStatement";
	/** [Read] glue:GetDataQualityModel */
	static readonly actionGetDataQualityModel = "glue:GetDataQualityModel";
	/** [Read] glue:GetDataQualityModelResult */
	static readonly actionGetDataQualityModelResult =
		"glue:GetDataQualityModelResult";
	/** [Read] glue:GetDataQualityResult */
	static readonly actionGetDataQualityResult = "glue:GetDataQualityResult";
	/** [Read] glue:GetDataQualityRuleRecommendationRun */
	static readonly actionGetDataQualityRuleRecommendationRun =
		"glue:GetDataQualityRuleRecommendationRun";
	/** [Read] glue:GetDataQualityRuleset */
	static readonly actionGetDataQualityRuleset = "glue:GetDataQualityRuleset";
	/** [Read] glue:GetDataQualityRulesetEvaluationRun */
	static readonly actionGetDataQualityRulesetEvaluationRun =
		"glue:GetDataQualityRulesetEvaluationRun";
	/** [Read] glue:GetDatabase */
	static readonly actionGetDatabase = "glue:GetDatabase";
	/** [Read] glue:GetDatabases */
	static readonly actionGetDatabases = "glue:GetDatabases";
	/** [Read] glue:GetDataflowGraph */
	static readonly actionGetDataflowGraph = "glue:GetDataflowGraph";
	/** [Read] glue:GetDevEndpoint */
	static readonly actionGetDevEndpoint = "glue:GetDevEndpoint";
	/** [Read] glue:GetDevEndpoints */
	static readonly actionGetDevEndpoints = "glue:GetDevEndpoints";
	/** [Read] glue:GetEntityRecords */
	static readonly actionGetEntityRecords = "glue:GetEntityRecords";
	/** [PermissionManagement] glue:GetEnvironment */
	static readonly actionGetEnvironment = "glue:GetEnvironment";
	/** [PermissionManagement] glue:GetExecutors */
	static readonly actionGetExecutors = "glue:GetExecutors";
	/** [PermissionManagement] glue:GetExecutorsThreads */
	static readonly actionGetExecutorsThreads = "glue:GetExecutorsThreads";
	/** [Read] glue:GetGeneratedCode */
	static readonly actionGetGeneratedCode = "glue:GetGeneratedCode";
	/** [Read] glue:GetGlueIdentityCenterConfiguration */
	static readonly actionGetGlueIdentityCenterConfiguration =
		"glue:GetGlueIdentityCenterConfiguration";
	/** [Read] glue:GetIntegrationResourceProperty */
	static readonly actionGetIntegrationResourceProperty =
		"glue:GetIntegrationResourceProperty";
	/** [Read] glue:GetIntegrationTableProperties */
	static readonly actionGetIntegrationTableProperties =
		"glue:GetIntegrationTableProperties";
	/** [Read] glue:GetJob */
	static readonly actionGetJob = "glue:GetJob";
	/** [Read] glue:GetJobBookmark */
	static readonly actionGetJobBookmark = "glue:GetJobBookmark";
	/** [Read] glue:GetJobRun */
	static readonly actionGetJobRun = "glue:GetJobRun";
	/** [Read] glue:GetJobRuns */
	static readonly actionGetJobRuns = "glue:GetJobRuns";
	/** [Read] glue:GetJobUpgradeAnalysis */
	static readonly actionGetJobUpgradeAnalysis = "glue:GetJobUpgradeAnalysis";
	/** [Read] glue:GetJobs */
	static readonly actionGetJobs = "glue:GetJobs";
	/** [PermissionManagement] glue:GetLogParsingStatus */
	static readonly actionGetLogParsingStatus = "glue:GetLogParsingStatus";
	/** [Read] glue:GetMLTaskRun */
	static readonly actionGetMLTaskRun = "glue:GetMLTaskRun";
	/** [List] glue:GetMLTaskRuns */
	static readonly actionGetMLTaskRuns = "glue:GetMLTaskRuns";
	/** [Read] glue:GetMLTransform */
	static readonly actionGetMLTransform = "glue:GetMLTransform";
	/** [List] glue:GetMLTransforms */
	static readonly actionGetMLTransforms = "glue:GetMLTransforms";
	/** [Read] glue:GetMapping */
	static readonly actionGetMapping = "glue:GetMapping";
	/** [PermissionManagement] glue:GetNotebookInstanceStatus */
	static readonly actionGetNotebookInstanceStatus =
		"glue:GetNotebookInstanceStatus";
	/** [Read] glue:GetPartition */
	static readonly actionGetPartition = "glue:GetPartition";
	/** [Read] glue:GetPartitionIndexes */
	static readonly actionGetPartitionIndexes = "glue:GetPartitionIndexes";
	/** [Read] glue:GetPartitions */
	static readonly actionGetPartitions = "glue:GetPartitions";
	/** [Read] glue:GetPlan */
	static readonly actionGetPlan = "glue:GetPlan";
	/** [PermissionManagement] glue:GetQueries */
	static readonly actionGetQueries = "glue:GetQueries";
	/** [PermissionManagement] glue:GetQuery */
	static readonly actionGetQuery = "glue:GetQuery";
	/** [PermissionManagement] glue:GetRecipeAction */
	static readonly actionGetRecipeAction = "glue:GetRecipeAction";
	/** [Read] glue:GetRegistry */
	static readonly actionGetRegistry = "glue:GetRegistry";
	/** [Read] glue:GetResourcePolicies */
	static readonly actionGetResourcePolicies = "glue:GetResourcePolicies";
	/** [Read] glue:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "glue:GetResourcePolicy";
	/** [Read] glue:GetSchema */
	static readonly actionGetSchema = "glue:GetSchema";
	/** [Read] glue:GetSchemaByDefinition */
	static readonly actionGetSchemaByDefinition = "glue:GetSchemaByDefinition";
	/** [Read] glue:GetSchemaVersion */
	static readonly actionGetSchemaVersion = "glue:GetSchemaVersion";
	/** [Read] glue:GetSchemaVersionsDiff */
	static readonly actionGetSchemaVersionsDiff = "glue:GetSchemaVersionsDiff";
	/** [Read] glue:GetSecurityConfiguration */
	static readonly actionGetSecurityConfiguration =
		"glue:GetSecurityConfiguration";
	/** [Read] glue:GetSecurityConfigurations */
	static readonly actionGetSecurityConfigurations =
		"glue:GetSecurityConfigurations";
	/** [Read] glue:GetSession */
	static readonly actionGetSession = "glue:GetSession";
	/** [Read] glue:GetSessionEndpoint */
	static readonly actionGetSessionEndpoint = "glue:GetSessionEndpoint";
	/** [PermissionManagement] glue:GetStage */
	static readonly actionGetStage = "glue:GetStage";
	/** [PermissionManagement] glue:GetStageAttempt */
	static readonly actionGetStageAttempt = "glue:GetStageAttempt";
	/** [PermissionManagement] glue:GetStageAttemptTaskList */
	static readonly actionGetStageAttemptTaskList =
		"glue:GetStageAttemptTaskList";
	/** [PermissionManagement] glue:GetStageAttemptTaskSummary */
	static readonly actionGetStageAttemptTaskSummary =
		"glue:GetStageAttemptTaskSummary";
	/** [PermissionManagement] glue:GetStageFiles */
	static readonly actionGetStageFiles = "glue:GetStageFiles";
	/** [PermissionManagement] glue:GetStages */
	static readonly actionGetStages = "glue:GetStages";
	/** [Read] glue:GetStatement */
	static readonly actionGetStatement = "glue:GetStatement";
	/** [PermissionManagement] glue:GetStorage */
	static readonly actionGetStorage = "glue:GetStorage";
	/** [PermissionManagement] glue:GetStorageUnit */
	static readonly actionGetStorageUnit = "glue:GetStorageUnit";
	/** [Read] glue:GetTable */
	static readonly actionGetTable = "glue:GetTable";
	/** [Read] glue:GetTableOptimizer */
	static readonly actionGetTableOptimizer = "glue:GetTableOptimizer";
	/** [Read] glue:GetTableVersion */
	static readonly actionGetTableVersion = "glue:GetTableVersion";
	/** [Read] glue:GetTableVersions */
	static readonly actionGetTableVersions = "glue:GetTableVersions";
	/** [Read] glue:GetTables */
	static readonly actionGetTables = "glue:GetTables";
	/** [Read] glue:GetTags */
	static readonly actionGetTags = "glue:GetTags";
	/** [Read] glue:GetTrigger */
	static readonly actionGetTrigger = "glue:GetTrigger";
	/** [Read] glue:GetTriggers */
	static readonly actionGetTriggers = "glue:GetTriggers";
	/** [Read] glue:GetUsageProfile */
	static readonly actionGetUsageProfile = "glue:GetUsageProfile";
	/** [Read] glue:GetUserDefinedFunction */
	static readonly actionGetUserDefinedFunction = "glue:GetUserDefinedFunction";
	/** [Read] glue:GetUserDefinedFunctions */
	static readonly actionGetUserDefinedFunctions =
		"glue:GetUserDefinedFunctions";
	/** [Read] glue:GetWorkflow */
	static readonly actionGetWorkflow = "glue:GetWorkflow";
	/** [Read] glue:GetWorkflowRun */
	static readonly actionGetWorkflowRun = "glue:GetWorkflowRun";
	/** [Read] glue:GetWorkflowRunProperties */
	static readonly actionGetWorkflowRunProperties =
		"glue:GetWorkflowRunProperties";
	/** [Read] glue:GetWorkflowRuns */
	static readonly actionGetWorkflowRuns = "glue:GetWorkflowRuns";
	/** [PermissionManagement] glue:GlueNotebookAuthorize */
	static readonly GlueNotebookAuthorize = "glue:GlueNotebookAuthorize";
	/** [PermissionManagement] glue:GlueNotebookRefreshCredentials */
	static readonly GlueNotebookRefreshCredentials =
		"glue:GlueNotebookRefreshCredentials";
	/** [Write] glue:ImportCatalogToGlue */
	static readonly ImportCatalogToGlue = "glue:ImportCatalogToGlue";
	/** [List] glue:ListBlueprints */
	static readonly ListBlueprints = "glue:ListBlueprints";
	/** [Read] glue:ListColumnStatisticsTaskRuns */
	static readonly ListColumnStatisticsTaskRuns =
		"glue:ListColumnStatisticsTaskRuns";
	/** [PermissionManagement] glue:ListConnectionTypes */
	static readonly ListConnectionTypes = "glue:ListConnectionTypes";
	/** [List] glue:ListCrawlers */
	static readonly ListCrawlers = "glue:ListCrawlers";
	/** [List] glue:ListCrawls */
	static readonly ListCrawls = "glue:ListCrawls";
	/** [List] glue:ListCustomEntityTypes */
	static readonly ListCustomEntityTypes = "glue:ListCustomEntityTypes";
	/** [List] glue:ListDataQualityResults */
	static readonly ListDataQualityResults = "glue:ListDataQualityResults";
	/** [List] glue:ListDataQualityRuleRecommendationRuns */
	static readonly ListDataQualityRuleRecommendationRuns =
		"glue:ListDataQualityRuleRecommendationRuns";
	/** [List] glue:ListDataQualityRulesetEvaluationRuns */
	static readonly ListDataQualityRulesetEvaluationRuns =
		"glue:ListDataQualityRulesetEvaluationRuns";
	/** [List] glue:ListDataQualityRulesets */
	static readonly ListDataQualityRulesets = "glue:ListDataQualityRulesets";
	/** [List] glue:ListDevEndpoints */
	static readonly ListDevEndpoints = "glue:ListDevEndpoints";
	/** [PermissionManagement] glue:ListEntities */
	static readonly ListEntities = "glue:ListEntities";
	/** [List] glue:ListIntegrationResourceProperties */
	static readonly ListIntegrationResourceProperties =
		"glue:ListIntegrationResourceProperties";
	/** [List] glue:ListJobUpgradeAnalyses */
	static readonly ListJobUpgradeAnalyses = "glue:ListJobUpgradeAnalyses";
	/** [List] glue:ListJobs */
	static readonly ListJobs = "glue:ListJobs";
	/** [List] glue:ListMLTransforms */
	static readonly ListMLTransforms = "glue:ListMLTransforms";
	/** [List] glue:ListRegistries */
	static readonly ListRegistries = "glue:ListRegistries";
	/** [List] glue:ListSchemaVersions */
	static readonly ListSchemaVersions = "glue:ListSchemaVersions";
	/** [List] glue:ListSchemas */
	static readonly ListSchemas = "glue:ListSchemas";
	/** [List] glue:ListSessions */
	static readonly ListSessions = "glue:ListSessions";
	/** [List] glue:ListStatements */
	static readonly ListStatements = "glue:ListStatements";
	/** [List] glue:ListTableOptimizerRuns */
	static readonly ListTableOptimizerRuns = "glue:ListTableOptimizerRuns";
	/** [List] glue:ListTriggers */
	static readonly ListTriggers = "glue:ListTriggers";
	/** [List] glue:ListUsageProfiles */
	static readonly ListUsageProfiles = "glue:ListUsageProfiles";
	/** [List] glue:ListWorkflows */
	static readonly ListWorkflows = "glue:ListWorkflows";
	/** [PermissionManagement] glue:ManagedConnector */
	static readonly ManagedConnector = "glue:ManagedConnector";
	/** [Write] glue:ModifyIntegration */
	static readonly ModifyIntegration = "glue:ModifyIntegration";
	/** [Write] glue:NotifyEvent */
	static readonly NotifyEvent = "glue:NotifyEvent";
	/** [Write] glue:PassConnection */
	static readonly PassConnection = "glue:PassConnection";
	/** [Write] glue:PublishDataQuality */
	static readonly PublishDataQuality = "glue:PublishDataQuality";
	/** [Write] glue:PutDataCatalogEncryptionSettings */
	static readonly PutDataCatalogEncryptionSettings =
		"glue:PutDataCatalogEncryptionSettings";
	/** [Write] glue:PutDataQualityProfileAnnotation */
	static readonly PutDataQualityProfileAnnotation =
		"glue:PutDataQualityProfileAnnotation";
	/** [Write] glue:PutDataQualityStatisticAnnotation */
	static readonly PutDataQualityStatisticAnnotation =
		"glue:PutDataQualityStatisticAnnotation";
	/** [PermissionManagement] glue:PutResourcePolicy */
	static readonly PutResourcePolicy = "glue:PutResourcePolicy";
	/** [Write] glue:PutSchemaVersionMetadata */
	static readonly PutSchemaVersionMetadata = "glue:PutSchemaVersionMetadata";
	/** [Write] glue:PutWorkflowRunProperties */
	static readonly PutWorkflowRunProperties = "glue:PutWorkflowRunProperties";
	/** [List] glue:QuerySchemaVersionMetadata */
	static readonly QuerySchemaVersionMetadata =
		"glue:QuerySchemaVersionMetadata";
	/** [PermissionManagement] glue:RefreshOAuth2Tokens */
	static readonly RefreshOAuth2Tokens = "glue:RefreshOAuth2Tokens";
	/** [Write] glue:RegisterConnectionType */
	static readonly RegisterConnectionType = "glue:RegisterConnectionType";
	/** [Write] glue:RegisterSchemaVersion */
	static readonly RegisterSchemaVersion = "glue:RegisterSchemaVersion";
	/** [Write] glue:RemoveSchemaVersionMetadata */
	static readonly RemoveSchemaVersionMetadata =
		"glue:RemoveSchemaVersionMetadata";
	/** [Write] glue:RenameTable */
	static readonly RenameTable = "glue:RenameTable";
	/** [PermissionManagement] glue:RequestLogParsing */
	static readonly RequestLogParsing = "glue:RequestLogParsing";
	/** [Write] glue:ResetJobBookmark */
	static readonly ResetJobBookmark = "glue:ResetJobBookmark";
	/** [Write] glue:ResumeWorkflowRun */
	static readonly ResumeWorkflowRun = "glue:ResumeWorkflowRun";
	/** [PermissionManagement] glue:RunDataPreviewStatement */
	static readonly RunDataPreviewStatement = "glue:RunDataPreviewStatement";
	/** [Write] glue:RunStatement */
	static readonly RunStatement = "glue:RunStatement";
	/** [Read] glue:SearchTables */
	static readonly SearchTables = "glue:SearchTables";
	/** [Write] glue:SendFeedback */
	static readonly SendFeedback = "glue:SendFeedback";
	/** [PermissionManagement] glue:SendRecipeAction */
	static readonly SendRecipeAction = "glue:SendRecipeAction";
	/** [Write] glue:StartBlueprintRun */
	static readonly StartBlueprintRun = "glue:StartBlueprintRun";
	/** [Write] glue:StartColumnStatisticsTaskRun */
	static readonly StartColumnStatisticsTaskRun =
		"glue:StartColumnStatisticsTaskRun";
	/** [Write] glue:StartColumnStatisticsTaskRunSchedule */
	static readonly StartColumnStatisticsTaskRunSchedule =
		"glue:StartColumnStatisticsTaskRunSchedule";
	/** [Write] glue:StartCompletion */
	static readonly StartCompletion = "glue:StartCompletion";
	/** [Write] glue:StartCrawler */
	static readonly StartCrawler = "glue:StartCrawler";
	/** [Write] glue:StartCrawlerSchedule */
	static readonly StartCrawlerSchedule = "glue:StartCrawlerSchedule";
	/** [Write] glue:StartDataQualityRuleRecommendationRun */
	static readonly StartDataQualityRuleRecommendationRun =
		"glue:StartDataQualityRuleRecommendationRun";
	/** [Write] glue:StartDataQualityRulesetEvaluationRun */
	static readonly StartDataQualityRulesetEvaluationRun =
		"glue:StartDataQualityRulesetEvaluationRun";
	/** [Write] glue:StartExportLabelsTaskRun */
	static readonly StartExportLabelsTaskRun = "glue:StartExportLabelsTaskRun";
	/** [Write] glue:StartImportLabelsTaskRun */
	static readonly StartImportLabelsTaskRun = "glue:StartImportLabelsTaskRun";
	/** [Write] glue:StartJobRun */
	static readonly StartJobRun = "glue:StartJobRun";
	/** [Write] glue:StartJobUpgradeAnalysis */
	static readonly StartJobUpgradeAnalysis = "glue:StartJobUpgradeAnalysis";
	/** [Write] glue:StartMLEvaluationTaskRun */
	static readonly StartMLEvaluationTaskRun = "glue:StartMLEvaluationTaskRun";
	/** [Write] glue:StartMLLabelingSetGenerationTaskRun */
	static readonly StartMLLabelingSetGenerationTaskRun =
		"glue:StartMLLabelingSetGenerationTaskRun";
	/** [PermissionManagement] glue:StartNotebook */
	static readonly StartNotebook = "glue:StartNotebook";
	/** [Write] glue:StartTrigger */
	static readonly StartTrigger = "glue:StartTrigger";
	/** [Write] glue:StartWorkflowRun */
	static readonly StartWorkflowRun = "glue:StartWorkflowRun";
	/** [Write] glue:StopColumnStatisticsTaskRun */
	static readonly StopColumnStatisticsTaskRun =
		"glue:StopColumnStatisticsTaskRun";
	/** [Write] glue:StopColumnStatisticsTaskRunSchedule */
	static readonly StopColumnStatisticsTaskRunSchedule =
		"glue:StopColumnStatisticsTaskRunSchedule";
	/** [Write] glue:StopCrawler */
	static readonly StopCrawler = "glue:StopCrawler";
	/** [Write] glue:StopCrawlerSchedule */
	static readonly StopCrawlerSchedule = "glue:StopCrawlerSchedule";
	/** [Write] glue:StopJobUpgradeAnalysis */
	static readonly StopJobUpgradeAnalysis = "glue:StopJobUpgradeAnalysis";
	/** [Write] glue:StopSession */
	static readonly StopSession = "glue:StopSession";
	/** [Write] glue:StopTrigger */
	static readonly StopTrigger = "glue:StopTrigger";
	/** [Write] glue:StopWorkflowRun */
	static readonly StopWorkflowRun = "glue:StopWorkflowRun";
	/** [Tagging] glue:TagResource */
	static readonly TagResource = "glue:TagResource";
	/** [PermissionManagement] glue:TerminateNotebook */
	static readonly TerminateNotebook = "glue:TerminateNotebook";
	/** [PermissionManagement] glue:TestConnection */
	static readonly TestConnection = "glue:TestConnection";
	/** [Tagging] glue:UntagResource */
	static readonly UntagResource = "glue:UntagResource";
	/** [Write] glue:UpdateBlueprint */
	static readonly UpdateBlueprint = "glue:UpdateBlueprint";
	/** [Write] glue:UpdateCatalog */
	static readonly UpdateCatalog = "glue:UpdateCatalog";
	/** [Write] glue:UpdateClassifier */
	static readonly UpdateClassifier = "glue:UpdateClassifier";
	/** [Write] glue:UpdateColumnStatisticsForPartition */
	static readonly UpdateColumnStatisticsForPartition =
		"glue:UpdateColumnStatisticsForPartition";
	/** [Write] glue:UpdateColumnStatisticsForTable */
	static readonly UpdateColumnStatisticsForTable =
		"glue:UpdateColumnStatisticsForTable";
	/** [Write] glue:UpdateColumnStatisticsTaskSettings */
	static readonly UpdateColumnStatisticsTaskSettings =
		"glue:UpdateColumnStatisticsTaskSettings";
	/** [Write] glue:UpdateConnection */
	static readonly UpdateConnection = "glue:UpdateConnection";
	/** [Write] glue:UpdateCrawler */
	static readonly UpdateCrawler = "glue:UpdateCrawler";
	/** [Write] glue:UpdateCrawlerSchedule */
	static readonly UpdateCrawlerSchedule = "glue:UpdateCrawlerSchedule";
	/** [Write] glue:UpdateDataQualityRuleset */
	static readonly UpdateDataQualityRuleset = "glue:UpdateDataQualityRuleset";
	/** [Write] glue:UpdateDatabase */
	static readonly UpdateDatabase = "glue:UpdateDatabase";
	/** [Write] glue:UpdateDevEndpoint */
	static readonly UpdateDevEndpoint = "glue:UpdateDevEndpoint";
	/** [Write] glue:UpdateGlueIdentityCenterConfiguration */
	static readonly UpdateGlueIdentityCenterConfiguration =
		"glue:UpdateGlueIdentityCenterConfiguration";
	/** [Write] glue:UpdateIntegrationResourceProperty */
	static readonly UpdateIntegrationResourceProperty =
		"glue:UpdateIntegrationResourceProperty";
	/** [Write] glue:UpdateIntegrationTableProperties */
	static readonly UpdateIntegrationTableProperties =
		"glue:UpdateIntegrationTableProperties";
	/** [Write] glue:UpdateJob */
	static readonly UpdateJob = "glue:UpdateJob";
	/** [Write] glue:UpdateJobFromSourceControl */
	static readonly UpdateJobFromSourceControl =
		"glue:UpdateJobFromSourceControl";
	/** [Write] glue:UpdateMLTransform */
	static readonly UpdateMLTransform = "glue:UpdateMLTransform";
	/** [Write] glue:UpdatePartition */
	static readonly UpdatePartition = "glue:UpdatePartition";
	/** [Write] glue:UpdateRegistry */
	static readonly UpdateRegistry = "glue:UpdateRegistry";
	/** [Write] glue:UpdateSchema */
	static readonly UpdateSchema = "glue:UpdateSchema";
	/** [Write] glue:UpdateSourceControlFromJob */
	static readonly UpdateSourceControlFromJob =
		"glue:UpdateSourceControlFromJob";
	/** [Write] glue:UpdateTable */
	static readonly UpdateTable = "glue:UpdateTable";
	/** [Write] glue:UpdateTableOptimizer */
	static readonly UpdateTableOptimizer = "glue:UpdateTableOptimizer";
	/** [Write] glue:UpdateTrigger */
	static readonly UpdateTrigger = "glue:UpdateTrigger";
	/** [Write] glue:UpdateUsageProfile */
	static readonly UpdateUsageProfile = "glue:UpdateUsageProfile";
	/** [Write] glue:UpdateUserDefinedFunction */
	static readonly UpdateUserDefinedFunction = "glue:UpdateUserDefinedFunction";
	/** [Write] glue:UpdateWorkflow */
	static readonly UpdateWorkflow = "glue:UpdateWorkflow";
	/** [Write] glue:UpgradeJob */
	static readonly UpgradeJob = "glue:UpgradeJob";
	/** [PermissionManagement] glue:UseGlueStudio */
	static readonly UseGlueStudio = "glue:UseGlueStudio";
	/** [Write] glue:UseMLTransforms */
	static readonly UseMLTransforms = "glue:UseMLTransforms";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GlueActions.AccessDataQualityRuntimeConfiguration,
		GlueActions.BatchGetBlueprints,
		GlueActions.BatchGetCrawlers,
		GlueActions.BatchGetCustomEntityTypes,
		GlueActions.BatchGetDevEndpoints,
		GlueActions.BatchGetJobs,
		GlueActions.BatchGetPartition,
		GlueActions.BatchGetTableOptimizer,
		GlueActions.BatchGetTriggers,
		GlueActions.BatchGetWorkflows,
		GlueActions.CheckSchemaVersionValidity,
		GlueActions.actionGetBlueprint,
		GlueActions.actionGetBlueprintRun,
		GlueActions.actionGetBlueprintRuns,
		GlueActions.actionGetCatalog,
		GlueActions.actionGetCatalogImportStatus,
		GlueActions.actionGetCatalogs,
		GlueActions.actionGetClassifier,
		GlueActions.actionGetClassifiers,
		GlueActions.actionGetColumnStatisticsForPartition,
		GlueActions.actionGetColumnStatisticsForTable,
		GlueActions.actionGetColumnStatisticsTaskRun,
		GlueActions.actionGetColumnStatisticsTaskRuns,
		GlueActions.actionGetColumnStatisticsTaskSettings,
		GlueActions.actionGetCompletion,
		GlueActions.actionGetConnection,
		GlueActions.actionGetConnections,
		GlueActions.actionGetCrawler,
		GlueActions.actionGetCrawlerMetrics,
		GlueActions.actionGetCrawlers,
		GlueActions.actionGetCustomEntityType,
		GlueActions.actionGetDashboardUrl,
		GlueActions.actionGetDataCatalogEncryptionSettings,
		GlueActions.actionGetDataQualityModel,
		GlueActions.actionGetDataQualityModelResult,
		GlueActions.actionGetDataQualityResult,
		GlueActions.actionGetDataQualityRuleRecommendationRun,
		GlueActions.actionGetDataQualityRuleset,
		GlueActions.actionGetDataQualityRulesetEvaluationRun,
		GlueActions.actionGetDatabase,
		GlueActions.actionGetDatabases,
		GlueActions.actionGetDataflowGraph,
		GlueActions.actionGetDevEndpoint,
		GlueActions.actionGetDevEndpoints,
		GlueActions.actionGetEntityRecords,
		GlueActions.actionGetGeneratedCode,
		GlueActions.actionGetGlueIdentityCenterConfiguration,
		GlueActions.actionGetIntegrationResourceProperty,
		GlueActions.actionGetIntegrationTableProperties,
		GlueActions.actionGetJob,
		GlueActions.actionGetJobBookmark,
		GlueActions.actionGetJobRun,
		GlueActions.actionGetJobRuns,
		GlueActions.actionGetJobUpgradeAnalysis,
		GlueActions.actionGetJobs,
		GlueActions.actionGetMLTaskRun,
		GlueActions.actionGetMLTransform,
		GlueActions.actionGetMapping,
		GlueActions.actionGetPartition,
		GlueActions.actionGetPartitionIndexes,
		GlueActions.actionGetPartitions,
		GlueActions.actionGetPlan,
		GlueActions.actionGetRegistry,
		GlueActions.actionGetResourcePolicies,
		GlueActions.actionGetResourcePolicy,
		GlueActions.actionGetSchema,
		GlueActions.actionGetSchemaByDefinition,
		GlueActions.actionGetSchemaVersion,
		GlueActions.actionGetSchemaVersionsDiff,
		GlueActions.actionGetSecurityConfiguration,
		GlueActions.actionGetSecurityConfigurations,
		GlueActions.actionGetSession,
		GlueActions.actionGetSessionEndpoint,
		GlueActions.actionGetStatement,
		GlueActions.actionGetTable,
		GlueActions.actionGetTableOptimizer,
		GlueActions.actionGetTableVersion,
		GlueActions.actionGetTableVersions,
		GlueActions.actionGetTables,
		GlueActions.actionGetTags,
		GlueActions.actionGetTrigger,
		GlueActions.actionGetTriggers,
		GlueActions.actionGetUsageProfile,
		GlueActions.actionGetUserDefinedFunction,
		GlueActions.actionGetUserDefinedFunctions,
		GlueActions.actionGetWorkflow,
		GlueActions.actionGetWorkflowRun,
		GlueActions.actionGetWorkflowRunProperties,
		GlueActions.actionGetWorkflowRuns,
		GlueActions.ListColumnStatisticsTaskRuns,
		GlueActions.SearchTables,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GlueActions.AuthorizeInboundIntegration,
		GlueActions.BatchCreatePartition,
		GlueActions.BatchDeleteConnection,
		GlueActions.BatchDeletePartition,
		GlueActions.BatchDeleteTable,
		GlueActions.BatchDeleteTableVersion,
		GlueActions.BatchStopJobRun,
		GlueActions.BatchUpdatePartition,
		GlueActions.CancelDataQualityRuleRecommendationRun,
		GlueActions.CancelDataQualityRulesetEvaluationRun,
		GlueActions.CancelMLTaskRun,
		GlueActions.CancelStatement,
		GlueActions.CreateBlueprint,
		GlueActions.CreateCatalog,
		GlueActions.CreateClassifier,
		GlueActions.CreateColumnStatisticsTaskSettings,
		GlueActions.CreateConnection,
		GlueActions.CreateCrawler,
		GlueActions.CreateCustomEntityType,
		GlueActions.CreateDataQualityRuleset,
		GlueActions.CreateDatabase,
		GlueActions.CreateDevEndpoint,
		GlueActions.CreateGlueIdentityCenterConfiguration,
		GlueActions.CreateInboundIntegration,
		GlueActions.CreateIntegration,
		GlueActions.CreateIntegrationResourceProperty,
		GlueActions.CreateIntegrationTableProperties,
		GlueActions.CreateJob,
		GlueActions.CreateMLTransform,
		GlueActions.CreatePartition,
		GlueActions.CreatePartitionIndex,
		GlueActions.CreateRegistry,
		GlueActions.CreateSchema,
		GlueActions.CreateScript,
		GlueActions.CreateSecurityConfiguration,
		GlueActions.CreateSession,
		GlueActions.CreateTable,
		GlueActions.CreateTableOptimizer,
		GlueActions.CreateTrigger,
		GlueActions.CreateUsageProfile,
		GlueActions.CreateUserDefinedFunction,
		GlueActions.CreateWorkflow,
		GlueActions.DeleteBlueprint,
		GlueActions.DeleteCatalog,
		GlueActions.DeleteClassifier,
		GlueActions.DeleteColumnStatisticsForPartition,
		GlueActions.DeleteColumnStatisticsForTable,
		GlueActions.DeleteColumnStatisticsTaskSettings,
		GlueActions.DeleteConnection,
		GlueActions.DeleteConnectionType,
		GlueActions.DeleteCrawler,
		GlueActions.DeleteCustomEntityType,
		GlueActions.DeleteDataQualityRuleset,
		GlueActions.DeleteDatabase,
		GlueActions.DeleteDevEndpoint,
		GlueActions.DeleteGlueIdentityCenterConfiguration,
		GlueActions.DeleteIntegration,
		GlueActions.DeleteIntegrationResourceProperty,
		GlueActions.DeleteIntegrationTableProperties,
		GlueActions.DeleteJob,
		GlueActions.DeleteMLTransform,
		GlueActions.DeletePartition,
		GlueActions.DeletePartitionIndex,
		GlueActions.DeleteRegistry,
		GlueActions.DeleteSchema,
		GlueActions.DeleteSchemaVersions,
		GlueActions.DeleteSecurityConfiguration,
		GlueActions.DeleteSession,
		GlueActions.DeleteTable,
		GlueActions.DeleteTableOptimizer,
		GlueActions.DeleteTableVersion,
		GlueActions.DeleteTrigger,
		GlueActions.DeleteUsageProfile,
		GlueActions.DeleteUserDefinedFunction,
		GlueActions.DeleteWorkflow,
		GlueActions.FederateAuthorization,
		GlueActions.ImportCatalogToGlue,
		GlueActions.ModifyIntegration,
		GlueActions.NotifyEvent,
		GlueActions.PassConnection,
		GlueActions.PublishDataQuality,
		GlueActions.PutDataCatalogEncryptionSettings,
		GlueActions.PutDataQualityProfileAnnotation,
		GlueActions.PutDataQualityStatisticAnnotation,
		GlueActions.PutSchemaVersionMetadata,
		GlueActions.PutWorkflowRunProperties,
		GlueActions.RegisterConnectionType,
		GlueActions.RegisterSchemaVersion,
		GlueActions.RemoveSchemaVersionMetadata,
		GlueActions.RenameTable,
		GlueActions.ResetJobBookmark,
		GlueActions.ResumeWorkflowRun,
		GlueActions.RunStatement,
		GlueActions.SendFeedback,
		GlueActions.StartBlueprintRun,
		GlueActions.StartColumnStatisticsTaskRun,
		GlueActions.StartColumnStatisticsTaskRunSchedule,
		GlueActions.StartCompletion,
		GlueActions.StartCrawler,
		GlueActions.StartCrawlerSchedule,
		GlueActions.StartDataQualityRuleRecommendationRun,
		GlueActions.StartDataQualityRulesetEvaluationRun,
		GlueActions.StartExportLabelsTaskRun,
		GlueActions.StartImportLabelsTaskRun,
		GlueActions.StartJobRun,
		GlueActions.StartJobUpgradeAnalysis,
		GlueActions.StartMLEvaluationTaskRun,
		GlueActions.StartMLLabelingSetGenerationTaskRun,
		GlueActions.StartTrigger,
		GlueActions.StartWorkflowRun,
		GlueActions.StopColumnStatisticsTaskRun,
		GlueActions.StopColumnStatisticsTaskRunSchedule,
		GlueActions.StopCrawler,
		GlueActions.StopCrawlerSchedule,
		GlueActions.StopJobUpgradeAnalysis,
		GlueActions.StopSession,
		GlueActions.StopTrigger,
		GlueActions.StopWorkflowRun,
		GlueActions.UpdateBlueprint,
		GlueActions.UpdateCatalog,
		GlueActions.UpdateClassifier,
		GlueActions.UpdateColumnStatisticsForPartition,
		GlueActions.UpdateColumnStatisticsForTable,
		GlueActions.UpdateColumnStatisticsTaskSettings,
		GlueActions.UpdateConnection,
		GlueActions.UpdateCrawler,
		GlueActions.UpdateCrawlerSchedule,
		GlueActions.UpdateDataQualityRuleset,
		GlueActions.UpdateDatabase,
		GlueActions.UpdateDevEndpoint,
		GlueActions.UpdateGlueIdentityCenterConfiguration,
		GlueActions.UpdateIntegrationResourceProperty,
		GlueActions.UpdateIntegrationTableProperties,
		GlueActions.UpdateJob,
		GlueActions.UpdateJobFromSourceControl,
		GlueActions.UpdateMLTransform,
		GlueActions.UpdatePartition,
		GlueActions.UpdateRegistry,
		GlueActions.UpdateSchema,
		GlueActions.UpdateSourceControlFromJob,
		GlueActions.UpdateTable,
		GlueActions.UpdateTableOptimizer,
		GlueActions.UpdateTrigger,
		GlueActions.UpdateUsageProfile,
		GlueActions.UpdateUserDefinedFunction,
		GlueActions.UpdateWorkflow,
		GlueActions.UpgradeJob,
		GlueActions.UseMLTransforms,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GlueActions.DescribeInboundIntegrations,
		GlueActions.DescribeIntegrations,
		GlueActions.actionGetMLTaskRuns,
		GlueActions.actionGetMLTransforms,
		GlueActions.ListBlueprints,
		GlueActions.ListCrawlers,
		GlueActions.ListCrawls,
		GlueActions.ListCustomEntityTypes,
		GlueActions.ListDataQualityResults,
		GlueActions.ListDataQualityRuleRecommendationRuns,
		GlueActions.ListDataQualityRulesetEvaluationRuns,
		GlueActions.ListDataQualityRulesets,
		GlueActions.ListDevEndpoints,
		GlueActions.ListIntegrationResourceProperties,
		GlueActions.ListJobUpgradeAnalyses,
		GlueActions.ListJobs,
		GlueActions.ListMLTransforms,
		GlueActions.ListRegistries,
		GlueActions.ListSchemaVersions,
		GlueActions.ListSchemas,
		GlueActions.ListSessions,
		GlueActions.ListStatements,
		GlueActions.ListTableOptimizerRuns,
		GlueActions.ListTriggers,
		GlueActions.ListUsageProfiles,
		GlueActions.ListWorkflows,
		GlueActions.QuerySchemaVersionMetadata,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		GlueActions.BatchGetStageFiles,
		GlueActions.DeleteResourcePolicy,
		GlueActions.DeregisterDataPreview,
		GlueActions.DescribeConnectionType,
		GlueActions.DescribeEntity,
		GlueActions.actionGetDataPreviewStatement,
		GlueActions.actionGetEnvironment,
		GlueActions.actionGetExecutors,
		GlueActions.actionGetExecutorsThreads,
		GlueActions.actionGetLogParsingStatus,
		GlueActions.actionGetNotebookInstanceStatus,
		GlueActions.actionGetQueries,
		GlueActions.actionGetQuery,
		GlueActions.actionGetRecipeAction,
		GlueActions.actionGetStage,
		GlueActions.actionGetStageAttempt,
		GlueActions.actionGetStageAttemptTaskList,
		GlueActions.actionGetStageAttemptTaskSummary,
		GlueActions.actionGetStageFiles,
		GlueActions.actionGetStages,
		GlueActions.actionGetStorage,
		GlueActions.actionGetStorageUnit,
		GlueActions.GlueNotebookAuthorize,
		GlueActions.GlueNotebookRefreshCredentials,
		GlueActions.ListConnectionTypes,
		GlueActions.ListEntities,
		GlueActions.ManagedConnector,
		GlueActions.PutResourcePolicy,
		GlueActions.RefreshOAuth2Tokens,
		GlueActions.RequestLogParsing,
		GlueActions.RunDataPreviewStatement,
		GlueActions.SendRecipeAction,
		GlueActions.StartNotebook,
		GlueActions.TerminateNotebook,
		GlueActions.TestConnection,
		GlueActions.UseGlueStudio,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GlueActions.TagResource,
		GlueActions.UntagResource,
	];
}

/**
 * Properties for building a blueprint ARN.
 */
export interface GlueBlueprintArnProps {
	/** The BlueprintName component of the ARN. */
	readonly blueprintName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a blueprint ARN.
 */
export interface GlueBlueprintArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BlueprintName component. */
	readonly blueprintName: string;
}

/**
 * Properties for building a catalog ARN.
 */
export interface GlueCatalogArnProps {
	/** The CatalogName component of the ARN. */
	readonly catalogName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a catalog ARN.
 */
export interface GlueCatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
}

/**
 * Properties for building a completion ARN.
 */
export interface GlueCompletionArnProps {
	/** The CompletionId component of the ARN. */
	readonly completionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a completion ARN.
 */
export interface GlueCompletionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CompletionId component. */
	readonly completionId: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface GlueConnectionArnProps {
	/** The ConnectionName component of the ARN. */
	readonly connectionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connection ARN.
 */
export interface GlueConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionName component. */
	readonly connectionName: string;
}

/**
 * Properties for building a connectionType ARN.
 */
export interface GlueConnectionTypeArnProps {
	/** The ConnectionTypeName component of the ARN. */
	readonly connectionTypeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectionType ARN.
 */
export interface GlueConnectionTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionTypeName component. */
	readonly connectionTypeName: string;
}

/**
 * Properties for building a crawler ARN.
 */
export interface GlueCrawlerArnProps {
	/** The CrawlerName component of the ARN. */
	readonly crawlerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a crawler ARN.
 */
export interface GlueCrawlerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CrawlerName component. */
	readonly crawlerName: string;
}

/**
 * Properties for building a customEntityType ARN.
 */
export interface GlueCustomEntityTypeArnProps {
	/** The CustomEntityTypeId component of the ARN. */
	readonly customEntityTypeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customEntityType ARN.
 */
export interface GlueCustomEntityTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CustomEntityTypeId component. */
	readonly customEntityTypeId: string;
}

/**
 * Properties for building a dataQualityRuleset ARN.
 */
export interface GlueDataQualityRulesetArnProps {
	/** The RulesetName component of the ARN. */
	readonly rulesetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataQualityRuleset ARN.
 */
export interface GlueDataQualityRulesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RulesetName component. */
	readonly rulesetName: string;
}

/**
 * Properties for building a database ARN.
 */
export interface GlueDatabaseArnProps {
	/** The DatabaseName component of the ARN. */
	readonly databaseName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a database ARN.
 */
export interface GlueDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
}

/**
 * Properties for building a devendpoint ARN.
 */
export interface GlueDevendpointArnProps {
	/** The DevEndpointName component of the ARN. */
	readonly devEndpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a devendpoint ARN.
 */
export interface GlueDevendpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DevEndpointName component. */
	readonly devEndpointName: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface GlueIntegrationArnProps {
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
export interface GlueIntegrationArnComponents {
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
 * Properties for building a integrationResourceProperty ARN.
 */
export interface GlueIntegrationResourcePropertyArnProps {
	/** The ResourceType component of the ARN. */
	readonly resourceType: string;
	/** The ResourceName component of the ARN. */
	readonly resourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a integrationResourceProperty ARN.
 */
export interface GlueIntegrationResourcePropertyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceType component. */
	readonly resourceType: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface GlueJobArnProps {
	/** The JobName component of the ARN. */
	readonly jobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface GlueJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a mlTransform ARN.
 */
export interface GlueMlTransformArnProps {
	/** The TransformId component of the ARN. */
	readonly transformId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mlTransform ARN.
 */
export interface GlueMlTransformArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TransformId component. */
	readonly transformId: string;
}

/**
 * Properties for building a registry ARN.
 */
export interface GlueRegistryArnProps {
	/** The RegistryName component of the ARN. */
	readonly registryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a registry ARN.
 */
export interface GlueRegistryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryName component. */
	readonly registryName: string;
}

/**
 * Properties for building a rootcatalog ARN.
 */
export interface GlueRootcatalogArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rootcatalog ARN.
 */
export interface GlueRootcatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a schema ARN.
 */
export interface GlueSchemaArnProps {
	/** The SchemaName component of the ARN. */
	readonly schemaName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a schema ARN.
 */
export interface GlueSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SchemaName component. */
	readonly schemaName: string;
}

/**
 * Properties for building a session ARN.
 */
export interface GlueSessionArnProps {
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface GlueSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

/**
 * Properties for building a table ARN.
 */
export interface GlueTableArnProps {
	/** The DatabaseName component of the ARN. */
	readonly databaseName: string;
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a table ARN.
 */
export interface GlueTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
	/** The TableName component. */
	readonly tableName: string;
}

/**
 * Properties for building a tableversion ARN.
 */
export interface GlueTableversionArnProps {
	/** The DatabaseName component of the ARN. */
	readonly databaseName: string;
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The TableVersionName component of the ARN. */
	readonly tableVersionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tableversion ARN.
 */
export interface GlueTableversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The TableVersionName component. */
	readonly tableVersionName: string;
}

/**
 * Properties for building a trigger ARN.
 */
export interface GlueTriggerArnProps {
	/** The TriggerName component of the ARN. */
	readonly triggerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trigger ARN.
 */
export interface GlueTriggerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TriggerName component. */
	readonly triggerName: string;
}

/**
 * Properties for building a usageProfile ARN.
 */
export interface GlueUsageProfileArnProps {
	/** The UsageProfileId component of the ARN. */
	readonly usageProfileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a usageProfile ARN.
 */
export interface GlueUsageProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UsageProfileId component. */
	readonly usageProfileId: string;
}

/**
 * Properties for building a userdefinedfunction ARN.
 */
export interface GlueUserdefinedfunctionArnProps {
	/** The DatabaseName component of the ARN. */
	readonly databaseName: string;
	/** The UserDefinedFunctionName component of the ARN. */
	readonly userDefinedFunctionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a userdefinedfunction ARN.
 */
export interface GlueUserdefinedfunctionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
	/** The UserDefinedFunctionName component. */
	readonly userDefinedFunctionName: string;
}

/**
 * Properties for building a workflow ARN.
 */
export interface GlueWorkflowArnProps {
	/** The WorkflowName component of the ARN. */
	readonly workflowName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflow ARN.
 */
export interface GlueWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowName component. */
	readonly workflowName: string;
}

const BlueprintArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):blueprint\/(?<blueprintName>[^:/?]+)$/;
const CatalogArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):catalog\/(?<catalogName>[^:/?]+)$/;
const CompletionArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):completion\/(?<completionId>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<connectionName>[^:/?]+)$/;
const ConnectionTypeArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):connectionType:(?<connectionTypeName>[^:/?]+)$/;
const CrawlerArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):crawler\/(?<crawlerName>[^:/?]+)$/;
const CustomEntityTypeArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):customEntityType\/(?<customEntityTypeId>[^:/?]+)$/;
const DataQualityRulesetArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):dataQualityRuleset\/(?<rulesetName>[^:/?]+)$/;
const DatabaseArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):database\/(?<databaseName>[^:/?]+)$/;
const DevendpointArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):devEndpoint\/(?<devEndpointName>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationId>[^:/?]+)$/;
const IntegrationResourcePropertyArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):integrationresourceproperty\/(?<resourceType>[^:/?]+)\/(?<resourceName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobName>[^:/?]+)$/;
const MlTransformArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):mlTransform\/(?<transformId>[^:/?]+)$/;
const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryName>[^:/?]+)$/;
const RootcatalogArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):catalog$/;
const SchemaArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):schema\/(?<schemaName>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):session\/(?<sessionId>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):table\/(?<databaseName>[^:/?]+)\/(?<tableName>[^:/?]+)$/;
const TableversionArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):tableVersion\/(?<databaseName>[^:/?]+)\/(?<tableName>[^:/?]+)\/(?<tableVersionName>[^:/?]+)$/;
const TriggerArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):trigger\/(?<triggerName>[^:/?]+)$/;
const UsageProfileArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):usageProfile\/(?<usageProfileId>[^:/?]+)$/;
const UserdefinedfunctionArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):userDefinedFunction\/(?<databaseName>[^:/?]+)\/(?<userDefinedFunctionName>[^:/?]+)$/;
const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<workflowName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for glue resources.
 */
export class GlueResources {
	/**
	 * Builds an ARN for the blueprint resource.
	 */
	static blueprint(props: GlueBlueprintArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:blueprint/${props.blueprintName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the blueprint resource.
	 */
	static isValidBlueprintArn(arn: string): boolean {
		return BlueprintArnRegex.test(arn);
	}

	/**
	 * Parses a blueprint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBlueprintArn(arn: string): GlueBlueprintArnComponents {
		const match = BlueprintArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid blueprint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			blueprintName: match.groups!.blueprintName,
		};
	}

	/**
	 * Builds an ARN for the catalog resource.
	 */
	static catalog(props: GlueCatalogArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalogName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the catalog resource.
	 */
	static isValidCatalogArn(arn: string): boolean {
		return CatalogArnRegex.test(arn);
	}

	/**
	 * Parses a catalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCatalogArn(arn: string): GlueCatalogArnComponents {
		const match = CatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid catalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
		};
	}

	/**
	 * Builds an ARN for the completion resource.
	 */
	static completion(props: GlueCompletionArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:completion/${props.completionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the completion resource.
	 */
	static isValidCompletionArn(arn: string): boolean {
		return CompletionArnRegex.test(arn);
	}

	/**
	 * Parses a completion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCompletionArn(arn: string): GlueCompletionArnComponents {
		const match = CompletionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid completion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			completionId: match.groups!.completionId,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: GlueConnectionArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.connectionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): GlueConnectionArnComponents {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionName: match.groups!.connectionName,
		};
	}

	/**
	 * Builds an ARN for the connectionType resource.
	 */
	static connectionType(props: GlueConnectionTypeArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:connectionType:${props.connectionTypeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectionType resource.
	 */
	static isValidConnectionTypeArn(arn: string): boolean {
		return ConnectionTypeArnRegex.test(arn);
	}

	/**
	 * Parses a connectionType ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionTypeArn(arn: string): GlueConnectionTypeArnComponents {
		const match = ConnectionTypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectionType ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionTypeName: match.groups!.connectionTypeName,
		};
	}

	/**
	 * Builds an ARN for the crawler resource.
	 */
	static crawler(props: GlueCrawlerArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:crawler/${props.crawlerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the crawler resource.
	 */
	static isValidCrawlerArn(arn: string): boolean {
		return CrawlerArnRegex.test(arn);
	}

	/**
	 * Parses a crawler ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCrawlerArn(arn: string): GlueCrawlerArnComponents {
		const match = CrawlerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid crawler ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			crawlerName: match.groups!.crawlerName,
		};
	}

	/**
	 * Builds an ARN for the customEntityType resource.
	 */
	static customEntityType(props: GlueCustomEntityTypeArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:customEntityType/${props.customEntityTypeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customEntityType resource.
	 */
	static isValidCustomEntityTypeArn(arn: string): boolean {
		return CustomEntityTypeArnRegex.test(arn);
	}

	/**
	 * Parses a customEntityType ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomEntityTypeArn(
		arn: string,
	): GlueCustomEntityTypeArnComponents {
		const match = CustomEntityTypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customEntityType ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			customEntityTypeId: match.groups!.customEntityTypeId,
		};
	}

	/**
	 * Builds an ARN for the dataQualityRuleset resource.
	 */
	static dataQualityRuleset(props: GlueDataQualityRulesetArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:dataQualityRuleset/${props.rulesetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataQualityRuleset resource.
	 */
	static isValidDataQualityRulesetArn(arn: string): boolean {
		return DataQualityRulesetArnRegex.test(arn);
	}

	/**
	 * Parses a dataQualityRuleset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataQualityRulesetArn(
		arn: string,
	): GlueDataQualityRulesetArnComponents {
		const match = DataQualityRulesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataQualityRuleset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			rulesetName: match.groups!.rulesetName,
		};
	}

	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: GlueDatabaseArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:database/${props.databaseName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the database resource.
	 */
	static isValidDatabaseArn(arn: string): boolean {
		return DatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatabaseArn(arn: string): GlueDatabaseArnComponents {
		const match = DatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			databaseName: match.groups!.databaseName,
		};
	}

	/**
	 * Builds an ARN for the devendpoint resource.
	 */
	static devendpoint(props: GlueDevendpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:devEndpoint/${props.devEndpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the devendpoint resource.
	 */
	static isValidDevendpointArn(arn: string): boolean {
		return DevendpointArnRegex.test(arn);
	}

	/**
	 * Parses a devendpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDevendpointArn(arn: string): GlueDevendpointArnComponents {
		const match = DevendpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid devendpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			devEndpointName: match.groups!.devEndpointName,
		};
	}

	/**
	 * Builds an ARN for the integration resource.
	 */
	static integration(props: GlueIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:integration:${props.integrationId}`;
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
	static parseIntegrationArn(arn: string): GlueIntegrationArnComponents {
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
	 * Builds an ARN for the integrationResourceProperty resource.
	 */
	static integrationResourceProperty(
		props: GlueIntegrationResourcePropertyArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:integrationresourceproperty/${props.resourceType}/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integrationResourceProperty resource.
	 */
	static isValidIntegrationResourcePropertyArn(arn: string): boolean {
		return IntegrationResourcePropertyArnRegex.test(arn);
	}

	/**
	 * Parses a integrationResourceProperty ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationResourcePropertyArn(
		arn: string,
	): GlueIntegrationResourcePropertyArnComponents {
		const match = IntegrationResourcePropertyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integrationResourceProperty ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceType: match.groups!.resourceType,
			resourceName: match.groups!.resourceName,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: GlueJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): GlueJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the mlTransform resource.
	 */
	static mlTransform(props: GlueMlTransformArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:mlTransform/${props.transformId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mlTransform resource.
	 */
	static isValidMlTransformArn(arn: string): boolean {
		return MlTransformArnRegex.test(arn);
	}

	/**
	 * Parses a mlTransform ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMlTransformArn(arn: string): GlueMlTransformArnComponents {
		const match = MlTransformArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mlTransform ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			transformId: match.groups!.transformId,
		};
	}

	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: GlueRegistryArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry resource.
	 */
	static isValidRegistryArn(arn: string): boolean {
		return RegistryArnRegex.test(arn);
	}

	/**
	 * Parses a registry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryArn(arn: string): GlueRegistryArnComponents {
		const match = RegistryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryName: match.groups!.registryName,
		};
	}

	/**
	 * Builds an ARN for the rootcatalog resource.
	 */
	static rootcatalog(props: GlueRootcatalogArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:catalog`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rootcatalog resource.
	 */
	static isValidRootcatalogArn(arn: string): boolean {
		return RootcatalogArnRegex.test(arn);
	}

	/**
	 * Parses a rootcatalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRootcatalogArn(arn: string): GlueRootcatalogArnComponents {
		const match = RootcatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rootcatalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the schema resource.
	 */
	static schema(props: GlueSchemaArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:schema/${props.schemaName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schema resource.
	 */
	static isValidSchemaArn(arn: string): boolean {
		return SchemaArnRegex.test(arn);
	}

	/**
	 * Parses a schema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSchemaArn(arn: string): GlueSchemaArnComponents {
		const match = SchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			schemaName: match.groups!.schemaName,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: GlueSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): GlueSessionArnComponents {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sessionId: match.groups!.sessionId,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: GlueTableArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.databaseName}/${props.tableName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): GlueTableArnComponents {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			databaseName: match.groups!.databaseName,
			tableName: match.groups!.tableName,
		};
	}

	/**
	 * Builds an ARN for the tableversion resource.
	 */
	static tableversion(props: GlueTableversionArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:tableVersion/${props.databaseName}/${props.tableName}/${props.tableVersionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tableversion resource.
	 */
	static isValidTableversionArn(arn: string): boolean {
		return TableversionArnRegex.test(arn);
	}

	/**
	 * Parses a tableversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableversionArn(arn: string): GlueTableversionArnComponents {
		const match = TableversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tableversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			databaseName: match.groups!.databaseName,
			tableName: match.groups!.tableName,
			tableVersionName: match.groups!.tableVersionName,
		};
	}

	/**
	 * Builds an ARN for the trigger resource.
	 */
	static trigger(props: GlueTriggerArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:trigger/${props.triggerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trigger resource.
	 */
	static isValidTriggerArn(arn: string): boolean {
		return TriggerArnRegex.test(arn);
	}

	/**
	 * Parses a trigger ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTriggerArn(arn: string): GlueTriggerArnComponents {
		const match = TriggerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trigger ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			triggerName: match.groups!.triggerName,
		};
	}

	/**
	 * Builds an ARN for the usageProfile resource.
	 */
	static usageProfile(props: GlueUsageProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:usageProfile/${props.usageProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the usageProfile resource.
	 */
	static isValidUsageProfileArn(arn: string): boolean {
		return UsageProfileArnRegex.test(arn);
	}

	/**
	 * Parses a usageProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsageProfileArn(arn: string): GlueUsageProfileArnComponents {
		const match = UsageProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid usageProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			usageProfileId: match.groups!.usageProfileId,
		};
	}

	/**
	 * Builds an ARN for the userdefinedfunction resource.
	 */
	static userdefinedfunction(props: GlueUserdefinedfunctionArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:userDefinedFunction/${props.databaseName}/${props.userDefinedFunctionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the userdefinedfunction resource.
	 */
	static isValidUserdefinedfunctionArn(arn: string): boolean {
		return UserdefinedfunctionArnRegex.test(arn);
	}

	/**
	 * Parses a userdefinedfunction ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserdefinedfunctionArn(
		arn: string,
	): GlueUserdefinedfunctionArnComponents {
		const match = UserdefinedfunctionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid userdefinedfunction ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			databaseName: match.groups!.databaseName,
			userDefinedFunctionName: match.groups!.userDefinedFunctionName,
		};
	}

	/**
	 * Builds an ARN for the workflow resource.
	 */
	static workflow(props: GlueWorkflowArnProps): string {
		return `arn:${props.partition ?? "aws"}:glue:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.workflowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow resource.
	 */
	static isValidWorkflowArn(arn: string): boolean {
		return WorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a workflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowArn(arn: string): GlueWorkflowArnComponents {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowName: match.groups!.workflowName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for glue.
 */
export class GlueOperations {
	/** IAM actions required for the AssociateGlossaryTerms API call. */
	static readonly AssociateGlossaryTerms: string[] = [];
	/** IAM actions required for the BatchCreatePartition API call. */
	static readonly BatchCreatePartition: string[] = [];
	/** IAM actions required for the BatchDeleteConnection API call. */
	static readonly BatchDeleteConnection: string[] = [
		"glue:BatchDeleteConnection",
		"glue:DeleteConnection",
	];
	/** IAM actions required for the BatchDeletePartition API call. */
	static readonly BatchDeletePartition: string[] = [];
	/** IAM actions required for the BatchDeleteTable API call. */
	static readonly BatchDeleteTable: string[] = [];
	/** IAM actions required for the BatchDeleteTableVersion API call. */
	static readonly BatchDeleteTableVersion: string[] = [
		"glue:BatchDeleteTableVersion",
		"glue:DeleteTableVersion",
	];
	/** IAM actions required for the BatchGetBlueprints API call. */
	static readonly BatchGetBlueprints: string[] = [
		"glue:BatchGetBlueprints",
		"glue:GetBlueprint",
	];
	/** IAM actions required for the BatchGetCrawlers API call. */
	static readonly BatchGetCrawlers: string[] = ["glue:BatchGetCrawlers"];
	/** IAM actions required for the BatchGetCustomEntityTypes API call. */
	static readonly BatchGetCustomEntityTypes: string[] = [
		"glue:BatchGetCustomEntityTypes",
		"glue:GetCustomEntityType",
	];
	/** IAM actions required for the BatchGetDataQualityResult API call. */
	static readonly BatchGetDataQualityResult: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the BatchGetDataQualityRulesetEvaluationRun API call. */
	static readonly BatchGetDataQualityRulesetEvaluationRun: string[] = [];
	/** IAM actions required for the BatchGetDevEndpoints API call. */
	static readonly BatchGetDevEndpoints: string[] = [
		"glue:BatchGetDevEndpoints",
		"glue:GetDevEndpoint",
	];
	/** IAM actions required for the BatchGetIterableForms API call. */
	static readonly BatchGetIterableForms: string[] = [];
	/** IAM actions required for the BatchGetJobs API call. */
	static readonly BatchGetJobs: string[] = ["glue:BatchGetJobs", "glue:GetJob"];
	/** IAM actions required for the BatchGetPartition API call. */
	static readonly BatchGetPartition: string[] = [];
	/** IAM actions required for the BatchGetTableOptimizer API call. */
	static readonly BatchGetTableOptimizer: string[] = [
		"glue:BatchGetTableOptimizer",
	];
	/** IAM actions required for the BatchGetTriggers API call. */
	static readonly BatchGetTriggers: string[] = [
		"glue:BatchGetTriggers",
		"glue:GetTrigger",
	];
	/** IAM actions required for the BatchGetWorkflows API call. */
	static readonly BatchGetWorkflows: string[] = [
		"glue:BatchGetWorkflows",
		"glue:GetWorkflow",
	];
	/** IAM actions required for the BatchPutDataQualityStatisticAnnotation API call. */
	static readonly BatchPutDataQualityStatisticAnnotation: string[] = [
		"glue:PutDataQualityStatisticAnnotation",
	];
	/** IAM actions required for the BatchStopJobRun API call. */
	static readonly BatchStopJobRun: string[] = ["glue:BatchStopJobRun"];
	/** IAM actions required for the BatchUpdatePartition API call. */
	static readonly BatchUpdatePartition: string[] = [];
	/** IAM actions required for the CancelDataQualityRuleRecommendationRun API call. */
	static readonly CancelDataQualityRuleRecommendationRun: string[] = [
		"glue:CancelDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the CancelDataQualityRulesetEvaluationRun API call. */
	static readonly CancelDataQualityRulesetEvaluationRun: string[] = [
		"glue:CancelDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the CancelMLTaskRun API call. */
	static readonly CancelMLTaskRun: string[] = ["glue:CancelMLTaskRun"];
	/** IAM actions required for the CancelStatement API call. */
	static readonly CancelStatement: string[] = ["glue:CancelStatement"];
	/** IAM actions required for the CheckSchemaVersionValidity API call. */
	static readonly CheckSchemaVersionValidity: string[] = [
		"glue:CheckSchemaVersionValidity",
	];
	/** IAM actions required for the CreateBlueprint API call. */
	static readonly CreateBlueprint: string[] = [
		"glue:CreateBlueprint",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCatalog API call. */
	static readonly CreateCatalog: string[] = [
		"glue:CreateCatalog",
		"glue:PassConnection",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateClassifier API call. */
	static readonly CreateClassifier: string[] = ["glue:CreateClassifier"];
	/** IAM actions required for the CreateColumnStatisticsTaskSettings API call. */
	static readonly CreateColumnStatisticsTaskSettings: string[] = [
		"glue:CreateColumnStatisticsTaskSettings",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CreateConnection: string[] = [
		"glue:CreateConnection",
		"glue:DescribeConnectionType",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCrawler API call. */
	static readonly CreateCrawler: string[] = [
		"glue:CreateCrawler",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCustomEntityType API call. */
	static readonly CreateCustomEntityType: string[] = [
		"glue:CreateCustomEntityType",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDataQualityRuleset API call. */
	static readonly CreateDataQualityRuleset: string[] = [
		"glue:CreateDataQualityRuleset",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDatabase API call. */
	static readonly CreateDatabase: string[] = [
		"glue:CreateDatabase",
		"glue:PassConnection",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDevEndpoint API call. */
	static readonly CreateDevEndpoint: string[] = [
		"glue:CreateDevEndpoint",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateGlossary API call. */
	static readonly CreateGlossary: string[] = [];
	/** IAM actions required for the CreateGlossaryTerm API call. */
	static readonly CreateGlossaryTerm: string[] = [];
	/** IAM actions required for the CreateGlueIdentityCenterConfiguration API call. */
	static readonly CreateGlueIdentityCenterConfiguration: string[] = [
		"glue:CreateGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [
		"glue:CreateIntegration",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateIntegrationResourceProperty API call. */
	static readonly CreateIntegrationResourceProperty: string[] = [
		"glue:CreateIntegrationResourceProperty",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateIntegrationTableProperties API call. */
	static readonly CreateIntegrationTableProperties: string[] = [
		"glue:CreateIntegrationTableProperties",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"glue:CreateJob",
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateMLTransform API call. */
	static readonly CreateMLTransform: string[] = [
		"glue:CreateMLTransform",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreatePartition API call. */
	static readonly CreatePartition: string[] = ["glue:CreatePartition"];
	/** IAM actions required for the CreatePartitionIndex API call. */
	static readonly CreatePartitionIndex: string[] = ["glue:UpdateTable"];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CreateRegistry: string[] = [
		"glue:CreateRegistry",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CreateSchema: string[] = [
		"glue:CreateSchema",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateScript API call. */
	static readonly CreateScript: string[] = ["glue:CreateScript"];
	/** IAM actions required for the CreateSecurityConfiguration API call. */
	static readonly CreateSecurityConfiguration: string[] = [
		"glue:CreateSecurityConfiguration",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CreateSession: string[] = [
		"glue:CreateSession",
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CreateTable: string[] = [
		"glue:CreateTable",
		"glue:PassConnection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTableOptimizer API call. */
	static readonly CreateTableOptimizer: string[] = [
		"glue:CreateTableOptimizer",
		"glue:PassConnection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTrigger API call. */
	static readonly CreateTrigger: string[] = [
		"glue:CreateTrigger",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateUsageProfile API call. */
	static readonly CreateUsageProfile: string[] = [
		"glue:CreateUsageProfile",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateUserDefinedFunction API call. */
	static readonly CreateUserDefinedFunction: string[] = [
		"glue:CreateUserDefinedFunction",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CreateWorkflow: string[] = [
		"glue:CreateWorkflow",
		"glue:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DeleteAsset: string[] = [];
	/** IAM actions required for the DeleteAssetType API call. */
	static readonly DeleteAssetType: string[] = [];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DeleteAttachment: string[] = [];
	/** IAM actions required for the DeleteBlueprint API call. */
	static readonly DeleteBlueprint: string[] = ["glue:DeleteBlueprint"];
	/** IAM actions required for the DeleteCatalog API call. */
	static readonly DeleteCatalog: string[] = ["glue:DeleteCatalog"];
	/** IAM actions required for the DeleteClassifier API call. */
	static readonly DeleteClassifier: string[] = ["glue:DeleteClassifier"];
	/** IAM actions required for the DeleteColumnStatisticsForPartition API call. */
	static readonly DeleteColumnStatisticsForPartition: string[] = [
		"glue:UpdatePartition",
	];
	/** IAM actions required for the DeleteColumnStatisticsForTable API call. */
	static readonly DeleteColumnStatisticsForTable: string[] = [
		"glue:UpdateTable",
	];
	/** IAM actions required for the DeleteColumnStatisticsTaskSettings API call. */
	static readonly DeleteColumnStatisticsTaskSettings: string[] = [
		"glue:DeleteColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = ["glue:DeleteConnection"];
	/** IAM actions required for the DeleteConnectionType API call. */
	static readonly DeleteConnectionType: string[] = [
		"glue:DeleteConnectionType",
	];
	/** IAM actions required for the DeleteCrawler API call. */
	static readonly DeleteCrawler: string[] = ["glue:DeleteCrawler"];
	/** IAM actions required for the DeleteCustomEntityType API call. */
	static readonly DeleteCustomEntityType: string[] = [
		"glue:DeleteCustomEntityType",
	];
	/** IAM actions required for the DeleteDataQualityRuleset API call. */
	static readonly DeleteDataQualityRuleset: string[] = [
		"glue:DeleteDataQualityRuleset",
	];
	/** IAM actions required for the DeleteDatabase API call. */
	static readonly DeleteDatabase: string[] = ["glue:DeleteDatabase"];
	/** IAM actions required for the DeleteDevEndpoint API call. */
	static readonly DeleteDevEndpoint: string[] = ["glue:DeleteDevEndpoint"];
	/** IAM actions required for the DeleteFormType API call. */
	static readonly DeleteFormType: string[] = [];
	/** IAM actions required for the DeleteGlossary API call. */
	static readonly DeleteGlossary: string[] = [];
	/** IAM actions required for the DeleteGlossaryTerm API call. */
	static readonly DeleteGlossaryTerm: string[] = [];
	/** IAM actions required for the DeleteGlueIdentityCenterConfiguration API call. */
	static readonly DeleteGlueIdentityCenterConfiguration: string[] = [
		"glue:DeleteGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["glue:DeleteIntegration"];
	/** IAM actions required for the DeleteIntegrationResourceProperty API call. */
	static readonly DeleteIntegrationResourceProperty: string[] = [
		"glue:DeleteIntegrationResourceProperty",
	];
	/** IAM actions required for the DeleteIntegrationTableProperties API call. */
	static readonly DeleteIntegrationTableProperties: string[] = [
		"glue:DeleteIntegrationTableProperties",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["glue:DeleteJob"];
	/** IAM actions required for the DeleteMLTransform API call. */
	static readonly DeleteMLTransform: string[] = ["glue:DeleteMLTransform"];
	/** IAM actions required for the DeletePartition API call. */
	static readonly DeletePartition: string[] = ["glue:DeletePartition"];
	/** IAM actions required for the DeletePartitionIndex API call. */
	static readonly DeletePartitionIndex: string[] = ["glue:UpdateTable"];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DeleteRegistry: string[] = ["glue:DeleteRegistry"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DeleteSchema: string[] = ["glue:DeleteSchema"];
	/** IAM actions required for the DeleteSchemaVersions API call. */
	static readonly DeleteSchemaVersions: string[] = [
		"glue:DeleteSchemaVersions",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DeleteSecurityConfiguration: string[] = [
		"glue:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DeleteSession: string[] = ["glue:DeleteSession"];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DeleteTable: string[] = ["glue:DeleteTable"];
	/** IAM actions required for the DeleteTableOptimizer API call. */
	static readonly DeleteTableOptimizer: string[] = [
		"glue:DeleteTableOptimizer",
	];
	/** IAM actions required for the DeleteTableVersion API call. */
	static readonly DeleteTableVersion: string[] = ["glue:DeleteTableVersion"];
	/** IAM actions required for the DeleteTrigger API call. */
	static readonly DeleteTrigger: string[] = ["glue:DeleteTrigger"];
	/** IAM actions required for the DeleteUsageProfile API call. */
	static readonly DeleteUsageProfile: string[] = ["glue:DeleteUsageProfile"];
	/** IAM actions required for the DeleteUserDefinedFunction API call. */
	static readonly DeleteUserDefinedFunction: string[] = [
		"glue:DeleteUserDefinedFunction",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = ["glue:DeleteWorkflow"];
	/** IAM actions required for the DescribeConnectionType API call. */
	static readonly DescribeConnectionType: string[] = [
		"glue:DescribeConnectionType",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DescribeEntity: string[] = ["glue:DescribeEntity"];
	/** IAM actions required for the DescribeInboundIntegrations API call. */
	static readonly DescribeInboundIntegrations: string[] = [
		"glue:DescribeInboundIntegrations",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DescribeIntegrations: string[] = [
		"glue:DescribeIntegrations",
	];
	/** IAM actions required for the DisassociateGlossaryTerms API call. */
	static readonly DisassociateGlossaryTerms: string[] = [];
	/** IAM actions required for the GetAsset API call. */
	static readonly opGetAsset: string[] = [];
	/** IAM actions required for the GetAssetType API call. */
	static readonly opGetAssetType: string[] = [];
	/** IAM actions required for the GetBlueprint API call. */
	static readonly opGetBlueprint: string[] = ["glue:GetBlueprint"];
	/** IAM actions required for the GetBlueprintRun API call. */
	static readonly opGetBlueprintRun: string[] = ["glue:GetBlueprintRun"];
	/** IAM actions required for the GetBlueprintRuns API call. */
	static readonly opGetBlueprintRuns: string[] = ["glue:GetBlueprintRuns"];
	/** IAM actions required for the GetCatalog API call. */
	static readonly opGetCatalog: string[] = ["glue:GetCatalog"];
	/** IAM actions required for the GetCatalogImportStatus API call. */
	static readonly opGetCatalogImportStatus: string[] = [
		"glue:GetCatalogImportStatus",
	];
	/** IAM actions required for the GetCatalogs API call. */
	static readonly opGetCatalogs: string[] = [
		"athena:GetCatalogs",
		"glue:GetCatalogs",
	];
	/** IAM actions required for the GetClassifier API call. */
	static readonly opGetClassifier: string[] = ["glue:GetClassifier"];
	/** IAM actions required for the GetClassifiers API call. */
	static readonly opGetClassifiers: string[] = ["glue:GetClassifiers"];
	/** IAM actions required for the GetColumnStatisticsForPartition API call. */
	static readonly opGetColumnStatisticsForPartition: string[] = [
		"glue:GetPartition",
	];
	/** IAM actions required for the GetColumnStatisticsForTable API call. */
	static readonly opGetColumnStatisticsForTable: string[] = ["glue:GetTable"];
	/** IAM actions required for the GetColumnStatisticsTaskRun API call. */
	static readonly opGetColumnStatisticsTaskRun: string[] = [
		"glue:GetColumnStatisticsTaskRun",
	];
	/** IAM actions required for the GetColumnStatisticsTaskRuns API call. */
	static readonly opGetColumnStatisticsTaskRuns: string[] = [
		"glue:GetColumnStatisticsTaskRuns",
	];
	/** IAM actions required for the GetColumnStatisticsTaskSettings API call. */
	static readonly opGetColumnStatisticsTaskSettings: string[] = [
		"glue:GetColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = ["glue:GetConnection"];
	/** IAM actions required for the GetConnections API call. */
	static readonly opGetConnections: string[] = ["glue:GetConnections"];
	/** IAM actions required for the GetCrawler API call. */
	static readonly opGetCrawler: string[] = ["glue:GetCrawler"];
	/** IAM actions required for the GetCrawlerMetrics API call. */
	static readonly opGetCrawlerMetrics: string[] = ["glue:GetCrawlerMetrics"];
	/** IAM actions required for the GetCrawlers API call. */
	static readonly opGetCrawlers: string[] = ["glue:GetCrawlers"];
	/** IAM actions required for the GetCustomEntityType API call. */
	static readonly opGetCustomEntityType: string[] = [
		"glue:GetCustomEntityType",
	];
	/** IAM actions required for the GetDashboardUrl API call. */
	static readonly opGetDashboardUrl: string[] = ["glue:GetDashboardUrl"];
	/** IAM actions required for the GetDataCatalogEncryptionSettings API call. */
	static readonly opGetDataCatalogEncryptionSettings: string[] = [
		"glue:GetDataCatalogEncryptionSettings",
	];
	/** IAM actions required for the GetDataCatalogExportConfiguration API call. */
	static readonly opGetDataCatalogExportConfiguration: string[] = [];
	/** IAM actions required for the GetDataQualityModel API call. */
	static readonly opGetDataQualityModel: string[] = [
		"glue:GetDataQualityModel",
	];
	/** IAM actions required for the GetDataQualityModelResult API call. */
	static readonly opGetDataQualityModelResult: string[] = [
		"glue:GetDataQualityModelResult",
	];
	/** IAM actions required for the GetDataQualityResult API call. */
	static readonly opGetDataQualityResult: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the GetDataQualityRuleRecommendationRun API call. */
	static readonly opGetDataQualityRuleRecommendationRun: string[] = [
		"glue:GetDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the GetDataQualityRuleset API call. */
	static readonly opGetDataQualityRuleset: string[] = [
		"glue:GetDataQualityRuleset",
	];
	/** IAM actions required for the GetDataQualityRulesetEvaluationRun API call. */
	static readonly opGetDataQualityRulesetEvaluationRun: string[] = [
		"glue:GetDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the GetDatabase API call. */
	static readonly opGetDatabase: string[] = ["glue:GetDatabase"];
	/** IAM actions required for the GetDatabases API call. */
	static readonly opGetDatabases: string[] = ["glue:GetDatabases"];
	/** IAM actions required for the GetDataflowGraph API call. */
	static readonly opGetDataflowGraph: string[] = ["glue:GetDataflowGraph"];
	/** IAM actions required for the GetDevEndpoint API call. */
	static readonly opGetDevEndpoint: string[] = ["glue:GetDevEndpoint"];
	/** IAM actions required for the GetDevEndpoints API call. */
	static readonly opGetDevEndpoints: string[] = ["glue:GetDevEndpoints"];
	/** IAM actions required for the GetEntityRecords API call. */
	static readonly opGetEntityRecords: string[] = ["glue:GetEntityRecords"];
	/** IAM actions required for the GetFormType API call. */
	static readonly opGetFormType: string[] = [];
	/** IAM actions required for the GetGlossary API call. */
	static readonly opGetGlossary: string[] = [];
	/** IAM actions required for the GetGlossaryTerm API call. */
	static readonly opGetGlossaryTerm: string[] = [];
	/** IAM actions required for the GetGlueIdentityCenterConfiguration API call. */
	static readonly opGetGlueIdentityCenterConfiguration: string[] = [
		"glue:GetGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the GetIntegrationResourceProperty API call. */
	static readonly opGetIntegrationResourceProperty: string[] = [
		"glue:GetIntegrationResourceProperty",
	];
	/** IAM actions required for the GetIntegrationTableProperties API call. */
	static readonly opGetIntegrationTableProperties: string[] = [
		"glue:GetIntegrationTableProperties",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["glue:GetJob", "iam:PassRole"];
	/** IAM actions required for the GetJobBookmark API call. */
	static readonly opGetJobBookmark: string[] = ["glue:GetJobBookmark"];
	/** IAM actions required for the GetJobRun API call. */
	static readonly opGetJobRun: string[] = ["glue:GetJobRun"];
	/** IAM actions required for the GetJobRuns API call. */
	static readonly opGetJobRuns: string[] = ["glue:GetJobRuns"];
	/** IAM actions required for the GetJobs API call. */
	static readonly opGetJobs: string[] = ["glue:GetJobs", "iam:PassRole"];
	/** IAM actions required for the GetMLTaskRun API call. */
	static readonly opGetMLTaskRun: string[] = ["glue:GetMLTaskRun"];
	/** IAM actions required for the GetMLTaskRuns API call. */
	static readonly opGetMLTaskRuns: string[] = ["glue:GetMLTaskRuns"];
	/** IAM actions required for the GetMLTransform API call. */
	static readonly opGetMLTransform: string[] = ["glue:GetMLTransform"];
	/** IAM actions required for the GetMLTransforms API call. */
	static readonly opGetMLTransforms: string[] = ["glue:GetMLTransforms"];
	/** IAM actions required for the GetMapping API call. */
	static readonly opGetMapping: string[] = ["glue:GetMapping"];
	/** IAM actions required for the GetMaterializedViewRefreshTaskRun API call. */
	static readonly opGetMaterializedViewRefreshTaskRun: string[] = [];
	/** IAM actions required for the GetPartition API call. */
	static readonly opGetPartition: string[] = ["glue:GetPartition"];
	/** IAM actions required for the GetPartitionIndexes API call. */
	static readonly opGetPartitionIndexes: string[] = [];
	/** IAM actions required for the GetPartitions API call. */
	static readonly opGetPartitions: string[] = ["glue:GetPartitions"];
	/** IAM actions required for the GetPlan API call. */
	static readonly opGetPlan: string[] = ["glue:GetPlan"];
	/** IAM actions required for the GetRegistry API call. */
	static readonly opGetRegistry: string[] = ["glue:GetRegistry"];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly opGetResourcePolicies: string[] = [];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [];
	/** IAM actions required for the GetSchema API call. */
	static readonly opGetSchema: string[] = ["glue:GetSchema"];
	/** IAM actions required for the GetSchemaByDefinition API call. */
	static readonly opGetSchemaByDefinition: string[] = [
		"glue:GetSchemaByDefinition",
	];
	/** IAM actions required for the GetSchemaVersion API call. */
	static readonly opGetSchemaVersion: string[] = ["glue:GetSchemaVersion"];
	/** IAM actions required for the GetSchemaVersionsDiff API call. */
	static readonly opGetSchemaVersionsDiff: string[] = [
		"glue:GetSchemaVersionsDiff",
	];
	/** IAM actions required for the GetSecurityConfiguration API call. */
	static readonly opGetSecurityConfiguration: string[] = [
		"glue:GetSecurityConfiguration",
	];
	/** IAM actions required for the GetSecurityConfigurations API call. */
	static readonly opGetSecurityConfigurations: string[] = [
		"glue:GetSecurityConfigurations",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["glue:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly opGetSessionEndpoint: string[] = ["glue:GetSessionEndpoint"];
	/** IAM actions required for the GetStatement API call. */
	static readonly opGetStatement: string[] = ["glue:GetStatement"];
	/** IAM actions required for the GetTable API call. */
	static readonly opGetTable: string[] = ["athena:GetTable", "glue:GetTable"];
	/** IAM actions required for the GetTableOptimizer API call. */
	static readonly opGetTableOptimizer: string[] = ["glue:GetTableOptimizer"];
	/** IAM actions required for the GetTableVersion API call. */
	static readonly opGetTableVersion: string[] = ["glue:GetTableVersion"];
	/** IAM actions required for the GetTableVersions API call. */
	static readonly opGetTableVersions: string[] = ["glue:GetTableVersions"];
	/** IAM actions required for the GetTables API call. */
	static readonly opGetTables: string[] = [
		"athena:GetTables",
		"glue:GetTables",
	];
	/** IAM actions required for the GetTags API call. */
	static readonly opGetTags: string[] = ["glue:GetTags"];
	/** IAM actions required for the GetTrigger API call. */
	static readonly opGetTrigger: string[] = ["glue:GetTrigger"];
	/** IAM actions required for the GetTriggers API call. */
	static readonly opGetTriggers: string[] = ["glue:GetTriggers"];
	/** IAM actions required for the GetUnfilteredPartitionMetadata API call. */
	static readonly opGetUnfilteredPartitionMetadata: string[] = [];
	/** IAM actions required for the GetUnfilteredPartitionsMetadata API call. */
	static readonly opGetUnfilteredPartitionsMetadata: string[] = [];
	/** IAM actions required for the GetUnfilteredTableMetadata API call. */
	static readonly opGetUnfilteredTableMetadata: string[] = [];
	/** IAM actions required for the GetUsageProfile API call. */
	static readonly opGetUsageProfile: string[] = ["glue:GetUsageProfile"];
	/** IAM actions required for the GetUserDefinedFunction API call. */
	static readonly opGetUserDefinedFunction: string[] = [
		"glue:GetUserDefinedFunction",
	];
	/** IAM actions required for the GetUserDefinedFunctions API call. */
	static readonly opGetUserDefinedFunctions: string[] = [
		"glue:GetUserDefinedFunctions",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = ["glue:GetWorkflow"];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly opGetWorkflowRun: string[] = ["glue:GetWorkflowRun"];
	/** IAM actions required for the GetWorkflowRunProperties API call. */
	static readonly opGetWorkflowRunProperties: string[] = [
		"glue:GetWorkflowRunProperties",
	];
	/** IAM actions required for the GetWorkflowRuns API call. */
	static readonly opGetWorkflowRuns: string[] = ["glue:GetWorkflowRuns"];
	/** IAM actions required for the ImportCatalogToGlue API call. */
	static readonly ImportCatalogToGlue: string[] = ["glue:ImportCatalogToGlue"];
	/** IAM actions required for the ListAssetTypes API call. */
	static readonly ListAssetTypes: string[] = [];
	/** IAM actions required for the ListBlueprints API call. */
	static readonly ListBlueprints: string[] = ["glue:ListBlueprints"];
	/** IAM actions required for the ListColumnStatisticsTaskRuns API call. */
	static readonly ListColumnStatisticsTaskRuns: string[] = [
		"glue:ListColumnStatisticsTaskRuns",
	];
	/** IAM actions required for the ListConnectionTypes API call. */
	static readonly ListConnectionTypes: string[] = ["glue:ListConnectionTypes"];
	/** IAM actions required for the ListCrawlers API call. */
	static readonly ListCrawlers: string[] = ["glue:ListCrawlers"];
	/** IAM actions required for the ListCrawls API call. */
	static readonly ListCrawls: string[] = ["glue:ListCrawls"];
	/** IAM actions required for the ListCustomEntityTypes API call. */
	static readonly ListCustomEntityTypes: string[] = [
		"glue:ListCustomEntityTypes",
	];
	/** IAM actions required for the ListDataQualityResults API call. */
	static readonly ListDataQualityResults: string[] = [
		"glue:ListDataQualityResults",
	];
	/** IAM actions required for the ListDataQualityRuleRecommendationRuns API call. */
	static readonly ListDataQualityRuleRecommendationRuns: string[] = [
		"glue:ListDataQualityRuleRecommendationRuns",
	];
	/** IAM actions required for the ListDataQualityRulesetEvaluationRuns API call. */
	static readonly ListDataQualityRulesetEvaluationRuns: string[] = [
		"glue:ListDataQualityRulesetEvaluationRuns",
	];
	/** IAM actions required for the ListDataQualityRulesets API call. */
	static readonly ListDataQualityRulesets: string[] = [
		"glue:ListDataQualityRulesets",
	];
	/** IAM actions required for the ListDataQualityStatisticAnnotations API call. */
	static readonly ListDataQualityStatisticAnnotations: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the ListDataQualityStatistics API call. */
	static readonly ListDataQualityStatistics: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the ListDevEndpoints API call. */
	static readonly ListDevEndpoints: string[] = ["glue:ListDevEndpoints"];
	/** IAM actions required for the ListEntities API call. */
	static readonly ListEntities: string[] = ["glue:ListEntities"];
	/** IAM actions required for the ListFormTypes API call. */
	static readonly ListFormTypes: string[] = [];
	/** IAM actions required for the ListGlossaries API call. */
	static readonly ListGlossaries: string[] = [];
	/** IAM actions required for the ListGlossaryTerms API call. */
	static readonly ListGlossaryTerms: string[] = [];
	/** IAM actions required for the ListIntegrationResourceProperties API call. */
	static readonly ListIntegrationResourceProperties: string[] = [
		"glue:ListIntegrationResourceProperties",
	];
	/** IAM actions required for the ListIterableForms API call. */
	static readonly ListIterableForms: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["glue:ListJobs"];
	/** IAM actions required for the ListMLTransforms API call. */
	static readonly ListMLTransforms: string[] = ["glue:ListMLTransforms"];
	/** IAM actions required for the ListMaterializedViewRefreshTaskRuns API call. */
	static readonly ListMaterializedViewRefreshTaskRuns: string[] = [];
	/** IAM actions required for the ListRegistries API call. */
	static readonly ListRegistries: string[] = ["glue:ListRegistries"];
	/** IAM actions required for the ListSchemaVersions API call. */
	static readonly ListSchemaVersions: string[] = ["glue:ListSchemaVersions"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly ListSchemas: string[] = ["glue:ListSchemas"];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["glue:ListSessions"];
	/** IAM actions required for the ListStatements API call. */
	static readonly ListStatements: string[] = ["glue:ListStatements"];
	/** IAM actions required for the ListTableOptimizerRuns API call. */
	static readonly ListTableOptimizerRuns: string[] = [
		"glue:ListTableOptimizerRuns",
	];
	/** IAM actions required for the ListTriggers API call. */
	static readonly ListTriggers: string[] = ["glue:ListTriggers"];
	/** IAM actions required for the ListUsageProfiles API call. */
	static readonly ListUsageProfiles: string[] = ["glue:ListUsageProfiles"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = ["glue:ListWorkflows"];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly ModifyIntegration: string[] = ["glue:ModifyIntegration"];
	/** IAM actions required for the PutAsset API call. */
	static readonly PutAsset: string[] = [];
	/** IAM actions required for the PutAssetType API call. */
	static readonly PutAssetType: string[] = [];
	/** IAM actions required for the PutAttachment API call. */
	static readonly PutAttachment: string[] = [];
	/** IAM actions required for the PutDataCatalogEncryptionSettings API call. */
	static readonly PutDataCatalogEncryptionSettings: string[] = [
		"iam:PassRole",
		"glue:PutDataCatalogEncryptionSettings",
	];
	/** IAM actions required for the PutDataCatalogExportConfiguration API call. */
	static readonly PutDataCatalogExportConfiguration: string[] = [];
	/** IAM actions required for the PutDataQualityProfileAnnotation API call. */
	static readonly PutDataQualityProfileAnnotation: string[] = [
		"glue:PutDataQualityProfileAnnotation",
	];
	/** IAM actions required for the PutFormType API call. */
	static readonly PutFormType: string[] = [];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [];
	/** IAM actions required for the PutSchemaVersionMetadata API call. */
	static readonly PutSchemaVersionMetadata: string[] = [
		"glue:PutSchemaVersionMetadata",
	];
	/** IAM actions required for the PutWorkflowRunProperties API call. */
	static readonly PutWorkflowRunProperties: string[] = [
		"glue:PutWorkflowRunProperties",
	];
	/** IAM actions required for the QuerySchemaVersionMetadata API call. */
	static readonly QuerySchemaVersionMetadata: string[] = [
		"glue:QuerySchemaVersionMetadata",
	];
	/** IAM actions required for the RegisterConnectionType API call. */
	static readonly RegisterConnectionType: string[] = [
		"glue:RegisterConnectionType",
		"glue:TagResource",
	];
	/** IAM actions required for the RegisterSchemaVersion API call. */
	static readonly RegisterSchemaVersion: string[] = [
		"glue:RegisterSchemaVersion",
	];
	/** IAM actions required for the RemoveSchemaVersionMetadata API call. */
	static readonly RemoveSchemaVersionMetadata: string[] = [
		"glue:RemoveSchemaVersionMetadata",
	];
	/** IAM actions required for the ResetJobBookmark API call. */
	static readonly ResetJobBookmark: string[] = ["glue:ResetJobBookmark"];
	/** IAM actions required for the ResumeWorkflowRun API call. */
	static readonly ResumeWorkflowRun: string[] = ["glue:ResumeWorkflowRun"];
	/** IAM actions required for the RunStatement API call. */
	static readonly RunStatement: string[] = ["glue:RunStatement"];
	/** IAM actions required for the SearchAssets API call. */
	static readonly SearchAssets: string[] = [];
	/** IAM actions required for the SearchTables API call. */
	static readonly SearchTables: string[] = ["glue:SearchTables"];
	/** IAM actions required for the StartBlueprintRun API call. */
	static readonly StartBlueprintRun: string[] = [
		"iam:PassRole",
		"glue:StartBlueprintRun",
	];
	/** IAM actions required for the StartColumnStatisticsTaskRun API call. */
	static readonly StartColumnStatisticsTaskRun: string[] = [
		"iam:PassRole",
		"glue:StartColumnStatisticsTaskRun",
	];
	/** IAM actions required for the StartColumnStatisticsTaskRunSchedule API call. */
	static readonly StartColumnStatisticsTaskRunSchedule: string[] = [
		"glue:StartColumnStatisticsTaskRunSchedule",
	];
	/** IAM actions required for the StartCrawler API call. */
	static readonly StartCrawler: string[] = ["glue:StartCrawler"];
	/** IAM actions required for the StartCrawlerSchedule API call. */
	static readonly StartCrawlerSchedule: string[] = [
		"glue:StartCrawlerSchedule",
	];
	/** IAM actions required for the StartDataQualityRuleRecommendationRun API call. */
	static readonly StartDataQualityRuleRecommendationRun: string[] = [
		"iam:PassRole",
		"glue:StartDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the StartDataQualityRulesetEvaluationRun API call. */
	static readonly StartDataQualityRulesetEvaluationRun: string[] = [
		"iam:PassRole",
		"glue:StartDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the StartExportLabelsTaskRun API call. */
	static readonly StartExportLabelsTaskRun: string[] = [
		"glue:StartExportLabelsTaskRun",
	];
	/** IAM actions required for the StartImportLabelsTaskRun API call. */
	static readonly StartImportLabelsTaskRun: string[] = [
		"glue:StartImportLabelsTaskRun",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly StartJobRun: string[] = [
		"glue:GetUsageProfile",
		"glue:StartJobRun",
	];
	/** IAM actions required for the StartMLEvaluationTaskRun API call. */
	static readonly StartMLEvaluationTaskRun: string[] = [
		"glue:StartMLEvaluationTaskRun",
	];
	/** IAM actions required for the StartMLLabelingSetGenerationTaskRun API call. */
	static readonly StartMLLabelingSetGenerationTaskRun: string[] = [
		"glue:StartMLLabelingSetGenerationTaskRun",
	];
	/** IAM actions required for the StartMaterializedViewRefreshTaskRun API call. */
	static readonly StartMaterializedViewRefreshTaskRun: string[] = [];
	/** IAM actions required for the StartTrigger API call. */
	static readonly StartTrigger: string[] = ["glue:StartTrigger"];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly StartWorkflowRun: string[] = ["glue:StartWorkflowRun"];
	/** IAM actions required for the StopColumnStatisticsTaskRun API call. */
	static readonly StopColumnStatisticsTaskRun: string[] = [
		"glue:StopColumnStatisticsTaskRun",
	];
	/** IAM actions required for the StopColumnStatisticsTaskRunSchedule API call. */
	static readonly StopColumnStatisticsTaskRunSchedule: string[] = [
		"glue:StopColumnStatisticsTaskRunSchedule",
	];
	/** IAM actions required for the StopCrawler API call. */
	static readonly StopCrawler: string[] = ["glue:StopCrawler"];
	/** IAM actions required for the StopCrawlerSchedule API call. */
	static readonly StopCrawlerSchedule: string[] = ["glue:StopCrawlerSchedule"];
	/** IAM actions required for the StopMaterializedViewRefreshTaskRun API call. */
	static readonly StopMaterializedViewRefreshTaskRun: string[] = [];
	/** IAM actions required for the StopSession API call. */
	static readonly StopSession: string[] = ["glue:StopSession"];
	/** IAM actions required for the StopTrigger API call. */
	static readonly StopTrigger: string[] = ["glue:StopTrigger"];
	/** IAM actions required for the StopWorkflowRun API call. */
	static readonly StopWorkflowRun: string[] = ["glue:StopWorkflowRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["glue:TagResource"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TestConnection: string[] = [
		"iam:PassRole",
		"glue:TestConnection",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["glue:UntagResource"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UpdateAsset: string[] = [];
	/** IAM actions required for the UpdateBlueprint API call. */
	static readonly UpdateBlueprint: string[] = ["glue:UpdateBlueprint"];
	/** IAM actions required for the UpdateCatalog API call. */
	static readonly UpdateCatalog: string[] = [
		"iam:PassRole",
		"glue:UpdateCatalog",
	];
	/** IAM actions required for the UpdateClassifier API call. */
	static readonly UpdateClassifier: string[] = ["glue:UpdateClassifier"];
	/** IAM actions required for the UpdateColumnStatisticsForPartition API call. */
	static readonly UpdateColumnStatisticsForPartition: string[] = [
		"glue:UpdatePartition",
	];
	/** IAM actions required for the UpdateColumnStatisticsForTable API call. */
	static readonly UpdateColumnStatisticsForTable: string[] = [
		"glue:UpdateTable",
	];
	/** IAM actions required for the UpdateColumnStatisticsTaskSettings API call. */
	static readonly UpdateColumnStatisticsTaskSettings: string[] = [
		"iam:PassRole",
		"glue:UpdateColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UpdateConnection: string[] = [
		"iam:PassRole",
		"glue:UpdateConnection",
	];
	/** IAM actions required for the UpdateCrawler API call. */
	static readonly UpdateCrawler: string[] = [
		"iam:PassRole",
		"glue:UpdateCrawler",
	];
	/** IAM actions required for the UpdateCrawlerSchedule API call. */
	static readonly UpdateCrawlerSchedule: string[] = [
		"glue:UpdateCrawlerSchedule",
	];
	/** IAM actions required for the UpdateDataQualityRuleset API call. */
	static readonly UpdateDataQualityRuleset: string[] = [
		"glue:UpdateDataQualityRuleset",
	];
	/** IAM actions required for the UpdateDatabase API call. */
	static readonly UpdateDatabase: string[] = ["glue:UpdateDatabase"];
	/** IAM actions required for the UpdateDevEndpoint API call. */
	static readonly UpdateDevEndpoint: string[] = ["glue:UpdateDevEndpoint"];
	/** IAM actions required for the UpdateGlossary API call. */
	static readonly UpdateGlossary: string[] = [];
	/** IAM actions required for the UpdateGlossaryTerm API call. */
	static readonly UpdateGlossaryTerm: string[] = [];
	/** IAM actions required for the UpdateGlueIdentityCenterConfiguration API call. */
	static readonly UpdateGlueIdentityCenterConfiguration: string[] = [
		"glue:UpdateGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the UpdateIntegrationResourceProperty API call. */
	static readonly UpdateIntegrationResourceProperty: string[] = [
		"iam:PassRole",
		"glue:UpdateIntegrationResourceProperty",
	];
	/** IAM actions required for the UpdateIntegrationTableProperties API call. */
	static readonly UpdateIntegrationTableProperties: string[] = [
		"glue:UpdateIntegrationTableProperties",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UpdateJob: string[] = [
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:UpdateJob",
	];
	/** IAM actions required for the UpdateJobFromSourceControl API call. */
	static readonly UpdateJobFromSourceControl: string[] = [
		"glue:UpdateJobFromSourceControl",
	];
	/** IAM actions required for the UpdateMLTransform API call. */
	static readonly UpdateMLTransform: string[] = [
		"iam:PassRole",
		"glue:UpdateMLTransform",
	];
	/** IAM actions required for the UpdatePartition API call. */
	static readonly UpdatePartition: string[] = ["glue:UpdatePartition"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UpdateRegistry: string[] = ["glue:UpdateRegistry"];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UpdateSchema: string[] = ["glue:UpdateSchema"];
	/** IAM actions required for the UpdateSourceControlFromJob API call. */
	static readonly UpdateSourceControlFromJob: string[] = [
		"glue:UpdateSourceControlFromJob",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UpdateTable: string[] = [
		"glue:PassConnection",
		"iam:PassRole",
		"glue:UpdateTable",
	];
	/** IAM actions required for the UpdateTableOptimizer API call. */
	static readonly UpdateTableOptimizer: string[] = [
		"glue:PassConnection",
		"iam:PassRole",
		"glue:UpdateTableOptimizer",
	];
	/** IAM actions required for the UpdateTrigger API call. */
	static readonly UpdateTrigger: string[] = ["glue:UpdateTrigger"];
	/** IAM actions required for the UpdateUsageProfile API call. */
	static readonly UpdateUsageProfile: string[] = ["glue:UpdateUsageProfile"];
	/** IAM actions required for the UpdateUserDefinedFunction API call. */
	static readonly UpdateUserDefinedFunction: string[] = [
		"glue:UpdateUserDefinedFunction",
	];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UpdateWorkflow: string[] = ["glue:UpdateWorkflow"];
}

/**
 * Condition key constants and builders for glue.
 */
export class GlueConditions {
	/** Condition keys applicable to the BatchCreatePartition action. */
	static readonly BatchCreatePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteConnection action. */
	static readonly BatchDeleteConnectionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeletePartition action. */
	static readonly BatchDeletePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteTable action. */
	static readonly BatchDeleteTableConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteTableVersion action. */
	static readonly BatchDeleteTableVersionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchGetPartition action. */
	static readonly BatchGetPartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchUpdatePartition action. */
	static readonly BatchUpdatePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateBlueprint action. */
	static readonly CreateBlueprintConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCatalog action. */
	static readonly CreateCatalogConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateCrawler action. */
	static readonly CreateCrawlerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomEntityType action. */
	static readonly CreateCustomEntityTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataQualityRuleset action. */
	static readonly CreateDataQualityRulesetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatabase action. */
	static readonly CreateDatabaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateDevEndpoint action. */
	static readonly CreateDevEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegrationResourceProperty action. */
	static readonly CreateIntegrationResourcePropertyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the CreateMLTransform action. */
	static readonly CreateMLTransformConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartition action. */
	static readonly CreatePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreatePartitionIndex action. */
	static readonly CreatePartitionIndexConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CreateRegistryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchema action. */
	static readonly CreateSchemaConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CreateSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CreateTableConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateTrigger action. */
	static readonly CreateTriggerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUsageProfile action. */
	static readonly CreateUsageProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUserDefinedFunction action. */
	static readonly CreateUserDefinedFunctionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCatalog action. */
	static readonly DeleteCatalogConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteColumnStatisticsForPartition action. */
	static readonly DeleteColumnStatisticsForPartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteColumnStatisticsForTable action. */
	static readonly DeleteColumnStatisticsForTableConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteConnection action. */
	static readonly DeleteConnectionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteDatabase action. */
	static readonly DeleteDatabaseConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteIntegration action. */
	static readonly DeleteIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePartition action. */
	static readonly DeletePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeletePartitionIndex action. */
	static readonly DeletePartitionIndexConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteTable action. */
	static readonly DeleteTableConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteTableVersion action. */
	static readonly DeleteTableVersionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteUserDefinedFunction action. */
	static readonly DeleteUserDefinedFunctionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DescribeIntegrationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the FederateAuthorization action. */
	static readonly FederateAuthorizationConditionKeys: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
	];
	/** Condition keys applicable to the GetCatalog action. */
	static readonly actionGetCatalogConditionKeys: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetCatalogImportStatus action. */
	static readonly actionGetCatalogImportStatusConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetCatalogs action. */
	static readonly actionGetCatalogsConditionKeys: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetColumnStatisticsForPartition action. */
	static readonly actionGetColumnStatisticsForPartitionConditionKeys: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the GetColumnStatisticsForTable action. */
	static readonly actionGetColumnStatisticsForTableConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly actionGetConnectionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetConnections action. */
	static readonly actionGetConnectionsConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetDatabase action. */
	static readonly actionGetDatabaseConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetDatabases action. */
	static readonly actionGetDatabasesConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartition action. */
	static readonly actionGetPartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartitionIndexes action. */
	static readonly actionGetPartitionIndexesConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartitions action. */
	static readonly actionGetPartitionsConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTable action. */
	static readonly actionGetTableConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTableVersion action. */
	static readonly actionGetTableVersionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTableVersions action. */
	static readonly actionGetTableVersionsConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTables action. */
	static readonly actionGetTablesConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetUserDefinedFunction action. */
	static readonly actionGetUserDefinedFunctionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetUserDefinedFunctions action. */
	static readonly actionGetUserDefinedFunctionsConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the ImportCatalogToGlue action. */
	static readonly ImportCatalogToGlueConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the ModifyIntegration action. */
	static readonly ModifyIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterConnectionType action. */
	static readonly RegisterConnectionTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RenameTable action. */
	static readonly RenameTableConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the SearchTables action. */
	static readonly SearchTablesConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateCatalog action. */
	static readonly UpdateCatalogConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateColumnStatisticsForPartition action. */
	static readonly UpdateColumnStatisticsForPartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateColumnStatisticsForTable action. */
	static readonly UpdateColumnStatisticsForTableConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateConnection action. */
	static readonly UpdateConnectionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateDatabase action. */
	static readonly UpdateDatabaseConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateJob action. */
	static readonly UpdateJobConditionKeys: string[] = [
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the UpdatePartition action. */
	static readonly UpdatePartitionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateTable action. */
	static readonly UpdateTableConditionKeys: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateUserDefinedFunction action. */
	static readonly UpdateUserDefinedFunctionConditionKeys: string[] = [
		"glue:LakeFormationPermissions",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: glue:CredentialIssuingService (String) */
	static readonly CREDENTIAL_ISSUING_SERVICE = "glue:CredentialIssuingService";
	/** Condition key: glue:EnabledForRedshiftAutoDiscovery (Bool) */
	static readonly ENABLED_FOR_REDSHIFT_AUTO_DISCOVERY =
		"glue:EnabledForRedshiftAutoDiscovery";
	/** Condition key: glue:FederatedAuthorizationSource (String) */
	static readonly FEDERATED_AUTHORIZATION_SOURCE =
		"glue:FederatedAuthorizationSource";
	/** Condition key: glue:LakeFormationPermissions (String) */
	static readonly LAKE_FORMATION_PERMISSIONS = "glue:LakeFormationPermissions";
	/** Condition key: glue:RoleAssumedBy (String) */
	static readonly ROLE_ASSUMED_BY = "glue:RoleAssumedBy";
	/** Condition key: glue:SecurityGroupIds (ArrayOfString) */
	static readonly SECURITY_GROUP_IDS = "glue:SecurityGroupIds";
	/** Condition key: glue:SubnetIds (ArrayOfString) */
	static readonly SUBNET_IDS = "glue:SubnetIds";
	/** Condition key: glue:VpcIds (ArrayOfString) */
	static readonly VPC_IDS = "glue:VpcIds";

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
	 * Generates a condition block for `glue:CredentialIssuingService`.
	 */
	static credentialIssuingService(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "glue:CredentialIssuingService": value } };
	}

	/**
	 * Generates a condition block for `glue:EnabledForRedshiftAutoDiscovery`.
	 */
	static enabledForRedshiftAutoDiscovery(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "glue:EnabledForRedshiftAutoDiscovery": value } };
	}

	/**
	 * Generates a condition block for `glue:FederatedAuthorizationSource`.
	 */
	static federatedAuthorizationSource(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "glue:FederatedAuthorizationSource": value } };
	}

	/**
	 * Generates a condition block for `glue:LakeFormationPermissions`.
	 */
	static lakeFormationPermissions(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "glue:LakeFormationPermissions": value } };
	}

	/**
	 * Generates a condition block for `glue:RoleAssumedBy`.
	 */
	static roleAssumedBy(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "glue:RoleAssumedBy": value } };
	}

	/**
	 * Generates a condition block for `glue:SecurityGroupIds`.
	 */
	static securityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "glue:SecurityGroupIds": values } };
	}

	/**
	 * Generates a condition block for `glue:SubnetIds`.
	 */
	static subnetIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "glue:SubnetIds": values } };
	}

	/**
	 * Generates a condition block for `glue:VpcIds`.
	 */
	static vpcIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "glue:VpcIds": values } };
	}
}
