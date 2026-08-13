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
	static readonly ACCESS_DATA_QUALITY_RUNTIME_CONFIGURATION =
		"glue:AccessDataQualityRuntimeConfiguration";
	/** [Write] glue:AuthorizeInboundIntegration */
	static readonly AUTHORIZE_INBOUND_INTEGRATION =
		"glue:AuthorizeInboundIntegration";
	/** [Write] glue:BatchCreatePartition */
	static readonly BATCH_CREATE_PARTITION = "glue:BatchCreatePartition";
	/** [Write] glue:BatchDeleteConnection */
	static readonly BATCH_DELETE_CONNECTION = "glue:BatchDeleteConnection";
	/** [Write] glue:BatchDeletePartition */
	static readonly BATCH_DELETE_PARTITION = "glue:BatchDeletePartition";
	/** [Write] glue:BatchDeleteTable */
	static readonly BATCH_DELETE_TABLE = "glue:BatchDeleteTable";
	/** [Write] glue:BatchDeleteTableVersion */
	static readonly BATCH_DELETE_TABLE_VERSION = "glue:BatchDeleteTableVersion";
	/** [Read] glue:BatchGetBlueprints */
	static readonly BATCH_GET_BLUEPRINTS = "glue:BatchGetBlueprints";
	/** [Read] glue:BatchGetCrawlers */
	static readonly BATCH_GET_CRAWLERS = "glue:BatchGetCrawlers";
	/** [Read] glue:BatchGetCustomEntityTypes */
	static readonly BATCH_GET_CUSTOM_ENTITY_TYPES =
		"glue:BatchGetCustomEntityTypes";
	/** [Read] glue:BatchGetDevEndpoints */
	static readonly BATCH_GET_DEV_ENDPOINTS = "glue:BatchGetDevEndpoints";
	/** [Read] glue:BatchGetJobs */
	static readonly BATCH_GET_JOBS = "glue:BatchGetJobs";
	/** [Read] glue:BatchGetPartition */
	static readonly BATCH_GET_PARTITION = "glue:BatchGetPartition";
	/** [PermissionManagement] glue:BatchGetStageFiles */
	static readonly BATCH_GET_STAGE_FILES = "glue:BatchGetStageFiles";
	/** [Read] glue:BatchGetTableOptimizer */
	static readonly BATCH_GET_TABLE_OPTIMIZER = "glue:BatchGetTableOptimizer";
	/** [Read] glue:BatchGetTriggers */
	static readonly BATCH_GET_TRIGGERS = "glue:BatchGetTriggers";
	/** [Read] glue:BatchGetWorkflows */
	static readonly BATCH_GET_WORKFLOWS = "glue:BatchGetWorkflows";
	/** [Write] glue:BatchStopJobRun */
	static readonly BATCH_STOP_JOB_RUN = "glue:BatchStopJobRun";
	/** [Write] glue:BatchUpdatePartition */
	static readonly BATCH_UPDATE_PARTITION = "glue:BatchUpdatePartition";
	/** [Write] glue:CancelDataQualityRuleRecommendationRun */
	static readonly CANCEL_DATA_QUALITY_RULE_RECOMMENDATION_RUN =
		"glue:CancelDataQualityRuleRecommendationRun";
	/** [Write] glue:CancelDataQualityRulesetEvaluationRun */
	static readonly CANCEL_DATA_QUALITY_RULESET_EVALUATION_RUN =
		"glue:CancelDataQualityRulesetEvaluationRun";
	/** [Write] glue:CancelMLTaskRun */
	static readonly CANCEL_ML_TASK_RUN = "glue:CancelMLTaskRun";
	/** [Write] glue:CancelStatement */
	static readonly CANCEL_STATEMENT = "glue:CancelStatement";
	/** [Read] glue:CheckSchemaVersionValidity */
	static readonly CHECK_SCHEMA_VERSION_VALIDITY =
		"glue:CheckSchemaVersionValidity";
	/** [Write] glue:CreateBlueprint */
	static readonly CREATE_BLUEPRINT = "glue:CreateBlueprint";
	/** [Write] glue:CreateCatalog */
	static readonly CREATE_CATALOG = "glue:CreateCatalog";
	/** [Write] glue:CreateClassifier */
	static readonly CREATE_CLASSIFIER = "glue:CreateClassifier";
	/** [Write] glue:CreateColumnStatisticsTaskSettings */
	static readonly CREATE_COLUMN_STATISTICS_TASK_SETTINGS =
		"glue:CreateColumnStatisticsTaskSettings";
	/** [Write] glue:CreateConnection */
	static readonly CREATE_CONNECTION = "glue:CreateConnection";
	/** [Write] glue:CreateCrawler */
	static readonly CREATE_CRAWLER = "glue:CreateCrawler";
	/** [Write] glue:CreateCustomEntityType */
	static readonly CREATE_CUSTOM_ENTITY_TYPE = "glue:CreateCustomEntityType";
	/** [Write] glue:CreateDataQualityRuleset */
	static readonly CREATE_DATA_QUALITY_RULESET = "glue:CreateDataQualityRuleset";
	/** [Write] glue:CreateDatabase */
	static readonly CREATE_DATABASE = "glue:CreateDatabase";
	/** [Write] glue:CreateDevEndpoint */
	static readonly CREATE_DEV_ENDPOINT = "glue:CreateDevEndpoint";
	/** [Write] glue:CreateGlueIdentityCenterConfiguration */
	static readonly CREATE_GLUE_IDENTITY_CENTER_CONFIGURATION =
		"glue:CreateGlueIdentityCenterConfiguration";
	/** [Write] glue:CreateInboundIntegration */
	static readonly CREATE_INBOUND_INTEGRATION = "glue:CreateInboundIntegration";
	/** [Write] glue:CreateIntegration */
	static readonly CREATE_INTEGRATION = "glue:CreateIntegration";
	/** [Write] glue:CreateIntegrationResourceProperty */
	static readonly CREATE_INTEGRATION_RESOURCE_PROPERTY =
		"glue:CreateIntegrationResourceProperty";
	/** [Write] glue:CreateIntegrationTableProperties */
	static readonly CREATE_INTEGRATION_TABLE_PROPERTIES =
		"glue:CreateIntegrationTableProperties";
	/** [Write] glue:CreateJob */
	static readonly CREATE_JOB = "glue:CreateJob";
	/** [Write] glue:CreateMLTransform */
	static readonly CREATE_ML_TRANSFORM = "glue:CreateMLTransform";
	/** [Write] glue:CreatePartition */
	static readonly CREATE_PARTITION = "glue:CreatePartition";
	/** [Write] glue:CreatePartitionIndex */
	static readonly CREATE_PARTITION_INDEX = "glue:CreatePartitionIndex";
	/** [Write] glue:CreateRegistry */
	static readonly CREATE_REGISTRY = "glue:CreateRegistry";
	/** [Write] glue:CreateSchema */
	static readonly CREATE_SCHEMA = "glue:CreateSchema";
	/** [Write] glue:CreateScript */
	static readonly CREATE_SCRIPT = "glue:CreateScript";
	/** [Write] glue:CreateSecurityConfiguration */
	static readonly CREATE_SECURITY_CONFIGURATION =
		"glue:CreateSecurityConfiguration";
	/** [Write] glue:CreateSession */
	static readonly CREATE_SESSION = "glue:CreateSession";
	/** [Write] glue:CreateTable */
	static readonly CREATE_TABLE = "glue:CreateTable";
	/** [Write] glue:CreateTableOptimizer */
	static readonly CREATE_TABLE_OPTIMIZER = "glue:CreateTableOptimizer";
	/** [Write] glue:CreateTrigger */
	static readonly CREATE_TRIGGER = "glue:CreateTrigger";
	/** [Write] glue:CreateUsageProfile */
	static readonly CREATE_USAGE_PROFILE = "glue:CreateUsageProfile";
	/** [Write] glue:CreateUserDefinedFunction */
	static readonly CREATE_USER_DEFINED_FUNCTION =
		"glue:CreateUserDefinedFunction";
	/** [Write] glue:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "glue:CreateWorkflow";
	/** [Write] glue:DeleteBlueprint */
	static readonly DELETE_BLUEPRINT = "glue:DeleteBlueprint";
	/** [Write] glue:DeleteCatalog */
	static readonly DELETE_CATALOG = "glue:DeleteCatalog";
	/** [Write] glue:DeleteClassifier */
	static readonly DELETE_CLASSIFIER = "glue:DeleteClassifier";
	/** [Write] glue:DeleteColumnStatisticsForPartition */
	static readonly DELETE_COLUMN_STATISTICS_FOR_PARTITION =
		"glue:DeleteColumnStatisticsForPartition";
	/** [Write] glue:DeleteColumnStatisticsForTable */
	static readonly DELETE_COLUMN_STATISTICS_FOR_TABLE =
		"glue:DeleteColumnStatisticsForTable";
	/** [Write] glue:DeleteColumnStatisticsTaskSettings */
	static readonly DELETE_COLUMN_STATISTICS_TASK_SETTINGS =
		"glue:DeleteColumnStatisticsTaskSettings";
	/** [Write] glue:DeleteConnection */
	static readonly DELETE_CONNECTION = "glue:DeleteConnection";
	/** [Write] glue:DeleteConnectionType */
	static readonly DELETE_CONNECTION_TYPE = "glue:DeleteConnectionType";
	/** [Write] glue:DeleteCrawler */
	static readonly DELETE_CRAWLER = "glue:DeleteCrawler";
	/** [Write] glue:DeleteCustomEntityType */
	static readonly DELETE_CUSTOM_ENTITY_TYPE = "glue:DeleteCustomEntityType";
	/** [Write] glue:DeleteDataQualityRuleset */
	static readonly DELETE_DATA_QUALITY_RULESET = "glue:DeleteDataQualityRuleset";
	/** [Write] glue:DeleteDatabase */
	static readonly DELETE_DATABASE = "glue:DeleteDatabase";
	/** [Write] glue:DeleteDevEndpoint */
	static readonly DELETE_DEV_ENDPOINT = "glue:DeleteDevEndpoint";
	/** [Write] glue:DeleteGlueIdentityCenterConfiguration */
	static readonly DELETE_GLUE_IDENTITY_CENTER_CONFIGURATION =
		"glue:DeleteGlueIdentityCenterConfiguration";
	/** [Write] glue:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "glue:DeleteIntegration";
	/** [Write] glue:DeleteIntegrationResourceProperty */
	static readonly DELETE_INTEGRATION_RESOURCE_PROPERTY =
		"glue:DeleteIntegrationResourceProperty";
	/** [Write] glue:DeleteIntegrationTableProperties */
	static readonly DELETE_INTEGRATION_TABLE_PROPERTIES =
		"glue:DeleteIntegrationTableProperties";
	/** [Write] glue:DeleteJob */
	static readonly DELETE_JOB = "glue:DeleteJob";
	/** [Write] glue:DeleteMLTransform */
	static readonly DELETE_ML_TRANSFORM = "glue:DeleteMLTransform";
	/** [Write] glue:DeletePartition */
	static readonly DELETE_PARTITION = "glue:DeletePartition";
	/** [Write] glue:DeletePartitionIndex */
	static readonly DELETE_PARTITION_INDEX = "glue:DeletePartitionIndex";
	/** [Write] glue:DeleteRegistry */
	static readonly DELETE_REGISTRY = "glue:DeleteRegistry";
	/** [PermissionManagement] glue:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "glue:DeleteResourcePolicy";
	/** [Write] glue:DeleteSchema */
	static readonly DELETE_SCHEMA = "glue:DeleteSchema";
	/** [Write] glue:DeleteSchemaVersions */
	static readonly DELETE_SCHEMA_VERSIONS = "glue:DeleteSchemaVersions";
	/** [Write] glue:DeleteSecurityConfiguration */
	static readonly DELETE_SECURITY_CONFIGURATION =
		"glue:DeleteSecurityConfiguration";
	/** [Write] glue:DeleteSession */
	static readonly DELETE_SESSION = "glue:DeleteSession";
	/** [Write] glue:DeleteTable */
	static readonly DELETE_TABLE = "glue:DeleteTable";
	/** [Write] glue:DeleteTableOptimizer */
	static readonly DELETE_TABLE_OPTIMIZER = "glue:DeleteTableOptimizer";
	/** [Write] glue:DeleteTableVersion */
	static readonly DELETE_TABLE_VERSION = "glue:DeleteTableVersion";
	/** [Write] glue:DeleteTrigger */
	static readonly DELETE_TRIGGER = "glue:DeleteTrigger";
	/** [Write] glue:DeleteUsageProfile */
	static readonly DELETE_USAGE_PROFILE = "glue:DeleteUsageProfile";
	/** [Write] glue:DeleteUserDefinedFunction */
	static readonly DELETE_USER_DEFINED_FUNCTION =
		"glue:DeleteUserDefinedFunction";
	/** [Write] glue:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "glue:DeleteWorkflow";
	/** [PermissionManagement] glue:DeregisterDataPreview */
	static readonly DEREGISTER_DATA_PREVIEW = "glue:DeregisterDataPreview";
	/** [PermissionManagement] glue:DescribeConnectionType */
	static readonly DESCRIBE_CONNECTION_TYPE = "glue:DescribeConnectionType";
	/** [PermissionManagement] glue:DescribeEntity */
	static readonly DESCRIBE_ENTITY = "glue:DescribeEntity";
	/** [List] glue:DescribeInboundIntegrations */
	static readonly DESCRIBE_INBOUND_INTEGRATIONS =
		"glue:DescribeInboundIntegrations";
	/** [List] glue:DescribeIntegrations */
	static readonly DESCRIBE_INTEGRATIONS = "glue:DescribeIntegrations";
	/** [Write] glue:FederateAuthorization */
	static readonly FEDERATE_AUTHORIZATION = "glue:FederateAuthorization";
	/** [Read] glue:GetBlueprint */
	static readonly GET_BLUEPRINT = "glue:GetBlueprint";
	/** [Read] glue:GetBlueprintRun */
	static readonly GET_BLUEPRINT_RUN = "glue:GetBlueprintRun";
	/** [Read] glue:GetBlueprintRuns */
	static readonly GET_BLUEPRINT_RUNS = "glue:GetBlueprintRuns";
	/** [Read] glue:GetCatalog */
	static readonly GET_CATALOG = "glue:GetCatalog";
	/** [Read] glue:GetCatalogImportStatus */
	static readonly GET_CATALOG_IMPORT_STATUS = "glue:GetCatalogImportStatus";
	/** [Read] glue:GetCatalogs */
	static readonly GET_CATALOGS = "glue:GetCatalogs";
	/** [Read] glue:GetClassifier */
	static readonly GET_CLASSIFIER = "glue:GetClassifier";
	/** [Read] glue:GetClassifiers */
	static readonly GET_CLASSIFIERS = "glue:GetClassifiers";
	/** [Read] glue:GetColumnStatisticsForPartition */
	static readonly GET_COLUMN_STATISTICS_FOR_PARTITION =
		"glue:GetColumnStatisticsForPartition";
	/** [Read] glue:GetColumnStatisticsForTable */
	static readonly GET_COLUMN_STATISTICS_FOR_TABLE =
		"glue:GetColumnStatisticsForTable";
	/** [Read] glue:GetColumnStatisticsTaskRun */
	static readonly GET_COLUMN_STATISTICS_TASK_RUN =
		"glue:GetColumnStatisticsTaskRun";
	/** [Read] glue:GetColumnStatisticsTaskRuns */
	static readonly GET_COLUMN_STATISTICS_TASK_RUNS =
		"glue:GetColumnStatisticsTaskRuns";
	/** [Read] glue:GetColumnStatisticsTaskSettings */
	static readonly GET_COLUMN_STATISTICS_TASK_SETTINGS =
		"glue:GetColumnStatisticsTaskSettings";
	/** [Read] glue:GetCompletion */
	static readonly GET_COMPLETION = "glue:GetCompletion";
	/** [Read] glue:GetConnection */
	static readonly GET_CONNECTION = "glue:GetConnection";
	/** [Read] glue:GetConnections */
	static readonly GET_CONNECTIONS = "glue:GetConnections";
	/** [Read] glue:GetCrawler */
	static readonly GET_CRAWLER = "glue:GetCrawler";
	/** [Read] glue:GetCrawlerMetrics */
	static readonly GET_CRAWLER_METRICS = "glue:GetCrawlerMetrics";
	/** [Read] glue:GetCrawlers */
	static readonly GET_CRAWLERS = "glue:GetCrawlers";
	/** [Read] glue:GetCustomEntityType */
	static readonly GET_CUSTOM_ENTITY_TYPE = "glue:GetCustomEntityType";
	/** [Read] glue:GetDashboardUrl */
	static readonly GET_DASHBOARD_URL = "glue:GetDashboardUrl";
	/** [Read] glue:GetDataCatalogEncryptionSettings */
	static readonly GET_DATA_CATALOG_ENCRYPTION_SETTINGS =
		"glue:GetDataCatalogEncryptionSettings";
	/** [PermissionManagement] glue:GetDataPreviewStatement */
	static readonly GET_DATA_PREVIEW_STATEMENT = "glue:GetDataPreviewStatement";
	/** [Read] glue:GetDataQualityModel */
	static readonly GET_DATA_QUALITY_MODEL = "glue:GetDataQualityModel";
	/** [Read] glue:GetDataQualityModelResult */
	static readonly GET_DATA_QUALITY_MODEL_RESULT =
		"glue:GetDataQualityModelResult";
	/** [Read] glue:GetDataQualityResult */
	static readonly GET_DATA_QUALITY_RESULT = "glue:GetDataQualityResult";
	/** [Read] glue:GetDataQualityRuleRecommendationRun */
	static readonly GET_DATA_QUALITY_RULE_RECOMMENDATION_RUN =
		"glue:GetDataQualityRuleRecommendationRun";
	/** [Read] glue:GetDataQualityRuleset */
	static readonly GET_DATA_QUALITY_RULESET = "glue:GetDataQualityRuleset";
	/** [Read] glue:GetDataQualityRulesetEvaluationRun */
	static readonly GET_DATA_QUALITY_RULESET_EVALUATION_RUN =
		"glue:GetDataQualityRulesetEvaluationRun";
	/** [Read] glue:GetDatabase */
	static readonly GET_DATABASE = "glue:GetDatabase";
	/** [Read] glue:GetDatabases */
	static readonly GET_DATABASES = "glue:GetDatabases";
	/** [Read] glue:GetDataflowGraph */
	static readonly GET_DATAFLOW_GRAPH = "glue:GetDataflowGraph";
	/** [Read] glue:GetDevEndpoint */
	static readonly GET_DEV_ENDPOINT = "glue:GetDevEndpoint";
	/** [Read] glue:GetDevEndpoints */
	static readonly GET_DEV_ENDPOINTS = "glue:GetDevEndpoints";
	/** [Read] glue:GetEntityRecords */
	static readonly GET_ENTITY_RECORDS = "glue:GetEntityRecords";
	/** [PermissionManagement] glue:GetEnvironment */
	static readonly GET_ENVIRONMENT = "glue:GetEnvironment";
	/** [PermissionManagement] glue:GetExecutors */
	static readonly GET_EXECUTORS = "glue:GetExecutors";
	/** [PermissionManagement] glue:GetExecutorsThreads */
	static readonly GET_EXECUTORS_THREADS = "glue:GetExecutorsThreads";
	/** [Read] glue:GetGeneratedCode */
	static readonly GET_GENERATED_CODE = "glue:GetGeneratedCode";
	/** [Read] glue:GetGlueIdentityCenterConfiguration */
	static readonly GET_GLUE_IDENTITY_CENTER_CONFIGURATION =
		"glue:GetGlueIdentityCenterConfiguration";
	/** [Read] glue:GetIntegrationResourceProperty */
	static readonly GET_INTEGRATION_RESOURCE_PROPERTY =
		"glue:GetIntegrationResourceProperty";
	/** [Read] glue:GetIntegrationTableProperties */
	static readonly GET_INTEGRATION_TABLE_PROPERTIES =
		"glue:GetIntegrationTableProperties";
	/** [Read] glue:GetJob */
	static readonly GET_JOB = "glue:GetJob";
	/** [Read] glue:GetJobBookmark */
	static readonly GET_JOB_BOOKMARK = "glue:GetJobBookmark";
	/** [Read] glue:GetJobRun */
	static readonly GET_JOB_RUN = "glue:GetJobRun";
	/** [Read] glue:GetJobRuns */
	static readonly GET_JOB_RUNS = "glue:GetJobRuns";
	/** [Read] glue:GetJobUpgradeAnalysis */
	static readonly GET_JOB_UPGRADE_ANALYSIS = "glue:GetJobUpgradeAnalysis";
	/** [Read] glue:GetJobs */
	static readonly GET_JOBS = "glue:GetJobs";
	/** [PermissionManagement] glue:GetLogParsingStatus */
	static readonly GET_LOG_PARSING_STATUS = "glue:GetLogParsingStatus";
	/** [Read] glue:GetMLTaskRun */
	static readonly GET_ML_TASK_RUN = "glue:GetMLTaskRun";
	/** [List] glue:GetMLTaskRuns */
	static readonly GET_ML_TASK_RUNS = "glue:GetMLTaskRuns";
	/** [Read] glue:GetMLTransform */
	static readonly GET_ML_TRANSFORM = "glue:GetMLTransform";
	/** [List] glue:GetMLTransforms */
	static readonly GET_ML_TRANSFORMS = "glue:GetMLTransforms";
	/** [Read] glue:GetMapping */
	static readonly GET_MAPPING = "glue:GetMapping";
	/** [PermissionManagement] glue:GetNotebookInstanceStatus */
	static readonly GET_NOTEBOOK_INSTANCE_STATUS =
		"glue:GetNotebookInstanceStatus";
	/** [Read] glue:GetPartition */
	static readonly GET_PARTITION = "glue:GetPartition";
	/** [Read] glue:GetPartitionIndexes */
	static readonly GET_PARTITION_INDEXES = "glue:GetPartitionIndexes";
	/** [Read] glue:GetPartitions */
	static readonly GET_PARTITIONS = "glue:GetPartitions";
	/** [Read] glue:GetPlan */
	static readonly GET_PLAN = "glue:GetPlan";
	/** [PermissionManagement] glue:GetQueries */
	static readonly GET_QUERIES = "glue:GetQueries";
	/** [PermissionManagement] glue:GetQuery */
	static readonly GET_QUERY = "glue:GetQuery";
	/** [PermissionManagement] glue:GetRecipeAction */
	static readonly GET_RECIPE_ACTION = "glue:GetRecipeAction";
	/** [Read] glue:GetRegistry */
	static readonly GET_REGISTRY = "glue:GetRegistry";
	/** [Read] glue:GetResourcePolicies */
	static readonly GET_RESOURCE_POLICIES = "glue:GetResourcePolicies";
	/** [Read] glue:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "glue:GetResourcePolicy";
	/** [Read] glue:GetSchema */
	static readonly GET_SCHEMA = "glue:GetSchema";
	/** [Read] glue:GetSchemaByDefinition */
	static readonly GET_SCHEMA_BY_DEFINITION = "glue:GetSchemaByDefinition";
	/** [Read] glue:GetSchemaVersion */
	static readonly GET_SCHEMA_VERSION = "glue:GetSchemaVersion";
	/** [Read] glue:GetSchemaVersionsDiff */
	static readonly GET_SCHEMA_VERSIONS_DIFF = "glue:GetSchemaVersionsDiff";
	/** [Read] glue:GetSecurityConfiguration */
	static readonly GET_SECURITY_CONFIGURATION = "glue:GetSecurityConfiguration";
	/** [Read] glue:GetSecurityConfigurations */
	static readonly GET_SECURITY_CONFIGURATIONS =
		"glue:GetSecurityConfigurations";
	/** [Read] glue:GetSession */
	static readonly GET_SESSION = "glue:GetSession";
	/** [Read] glue:GetSessionEndpoint */
	static readonly GET_SESSION_ENDPOINT = "glue:GetSessionEndpoint";
	/** [PermissionManagement] glue:GetStage */
	static readonly GET_STAGE = "glue:GetStage";
	/** [PermissionManagement] glue:GetStageAttempt */
	static readonly GET_STAGE_ATTEMPT = "glue:GetStageAttempt";
	/** [PermissionManagement] glue:GetStageAttemptTaskList */
	static readonly GET_STAGE_ATTEMPT_TASK_LIST = "glue:GetStageAttemptTaskList";
	/** [PermissionManagement] glue:GetStageAttemptTaskSummary */
	static readonly GET_STAGE_ATTEMPT_TASK_SUMMARY =
		"glue:GetStageAttemptTaskSummary";
	/** [PermissionManagement] glue:GetStageFiles */
	static readonly GET_STAGE_FILES = "glue:GetStageFiles";
	/** [PermissionManagement] glue:GetStages */
	static readonly GET_STAGES = "glue:GetStages";
	/** [Read] glue:GetStatement */
	static readonly GET_STATEMENT = "glue:GetStatement";
	/** [PermissionManagement] glue:GetStorage */
	static readonly GET_STORAGE = "glue:GetStorage";
	/** [PermissionManagement] glue:GetStorageUnit */
	static readonly GET_STORAGE_UNIT = "glue:GetStorageUnit";
	/** [Read] glue:GetTable */
	static readonly GET_TABLE = "glue:GetTable";
	/** [Read] glue:GetTableOptimizer */
	static readonly GET_TABLE_OPTIMIZER = "glue:GetTableOptimizer";
	/** [Read] glue:GetTableVersion */
	static readonly GET_TABLE_VERSION = "glue:GetTableVersion";
	/** [Read] glue:GetTableVersions */
	static readonly GET_TABLE_VERSIONS = "glue:GetTableVersions";
	/** [Read] glue:GetTables */
	static readonly GET_TABLES = "glue:GetTables";
	/** [Read] glue:GetTags */
	static readonly GET_TAGS = "glue:GetTags";
	/** [Read] glue:GetTrigger */
	static readonly GET_TRIGGER = "glue:GetTrigger";
	/** [Read] glue:GetTriggers */
	static readonly GET_TRIGGERS = "glue:GetTriggers";
	/** [Read] glue:GetUsageProfile */
	static readonly GET_USAGE_PROFILE = "glue:GetUsageProfile";
	/** [Read] glue:GetUserDefinedFunction */
	static readonly GET_USER_DEFINED_FUNCTION = "glue:GetUserDefinedFunction";
	/** [Read] glue:GetUserDefinedFunctions */
	static readonly GET_USER_DEFINED_FUNCTIONS = "glue:GetUserDefinedFunctions";
	/** [Read] glue:GetWorkflow */
	static readonly GET_WORKFLOW = "glue:GetWorkflow";
	/** [Read] glue:GetWorkflowRun */
	static readonly GET_WORKFLOW_RUN = "glue:GetWorkflowRun";
	/** [Read] glue:GetWorkflowRunProperties */
	static readonly GET_WORKFLOW_RUN_PROPERTIES = "glue:GetWorkflowRunProperties";
	/** [Read] glue:GetWorkflowRuns */
	static readonly GET_WORKFLOW_RUNS = "glue:GetWorkflowRuns";
	/** [PermissionManagement] glue:GlueNotebookAuthorize */
	static readonly GLUE_NOTEBOOK_AUTHORIZE = "glue:GlueNotebookAuthorize";
	/** [PermissionManagement] glue:GlueNotebookRefreshCredentials */
	static readonly GLUE_NOTEBOOK_REFRESH_CREDENTIALS =
		"glue:GlueNotebookRefreshCredentials";
	/** [Write] glue:ImportCatalogToGlue */
	static readonly IMPORT_CATALOG_TO_GLUE = "glue:ImportCatalogToGlue";
	/** [List] glue:ListBlueprints */
	static readonly LIST_BLUEPRINTS = "glue:ListBlueprints";
	/** [Read] glue:ListColumnStatisticsTaskRuns */
	static readonly LIST_COLUMN_STATISTICS_TASK_RUNS =
		"glue:ListColumnStatisticsTaskRuns";
	/** [PermissionManagement] glue:ListConnectionTypes */
	static readonly LIST_CONNECTION_TYPES = "glue:ListConnectionTypes";
	/** [List] glue:ListCrawlers */
	static readonly LIST_CRAWLERS = "glue:ListCrawlers";
	/** [List] glue:ListCrawls */
	static readonly LIST_CRAWLS = "glue:ListCrawls";
	/** [List] glue:ListCustomEntityTypes */
	static readonly LIST_CUSTOM_ENTITY_TYPES = "glue:ListCustomEntityTypes";
	/** [List] glue:ListDataQualityResults */
	static readonly LIST_DATA_QUALITY_RESULTS = "glue:ListDataQualityResults";
	/** [List] glue:ListDataQualityRuleRecommendationRuns */
	static readonly LIST_DATA_QUALITY_RULE_RECOMMENDATION_RUNS =
		"glue:ListDataQualityRuleRecommendationRuns";
	/** [List] glue:ListDataQualityRulesetEvaluationRuns */
	static readonly LIST_DATA_QUALITY_RULESET_EVALUATION_RUNS =
		"glue:ListDataQualityRulesetEvaluationRuns";
	/** [List] glue:ListDataQualityRulesets */
	static readonly LIST_DATA_QUALITY_RULESETS = "glue:ListDataQualityRulesets";
	/** [List] glue:ListDevEndpoints */
	static readonly LIST_DEV_ENDPOINTS = "glue:ListDevEndpoints";
	/** [PermissionManagement] glue:ListEntities */
	static readonly LIST_ENTITIES = "glue:ListEntities";
	/** [List] glue:ListIntegrationResourceProperties */
	static readonly LIST_INTEGRATION_RESOURCE_PROPERTIES =
		"glue:ListIntegrationResourceProperties";
	/** [List] glue:ListJobUpgradeAnalyses */
	static readonly LIST_JOB_UPGRADE_ANALYSES = "glue:ListJobUpgradeAnalyses";
	/** [List] glue:ListJobs */
	static readonly LIST_JOBS = "glue:ListJobs";
	/** [List] glue:ListMLTransforms */
	static readonly LIST_ML_TRANSFORMS = "glue:ListMLTransforms";
	/** [List] glue:ListRegistries */
	static readonly LIST_REGISTRIES = "glue:ListRegistries";
	/** [List] glue:ListSchemaVersions */
	static readonly LIST_SCHEMA_VERSIONS = "glue:ListSchemaVersions";
	/** [List] glue:ListSchemas */
	static readonly LIST_SCHEMAS = "glue:ListSchemas";
	/** [List] glue:ListSessions */
	static readonly LIST_SESSIONS = "glue:ListSessions";
	/** [List] glue:ListStatements */
	static readonly LIST_STATEMENTS = "glue:ListStatements";
	/** [List] glue:ListTableOptimizerRuns */
	static readonly LIST_TABLE_OPTIMIZER_RUNS = "glue:ListTableOptimizerRuns";
	/** [List] glue:ListTriggers */
	static readonly LIST_TRIGGERS = "glue:ListTriggers";
	/** [List] glue:ListUsageProfiles */
	static readonly LIST_USAGE_PROFILES = "glue:ListUsageProfiles";
	/** [List] glue:ListWorkflows */
	static readonly LIST_WORKFLOWS = "glue:ListWorkflows";
	/** [PermissionManagement] glue:ManagedConnector */
	static readonly MANAGED_CONNECTOR = "glue:ManagedConnector";
	/** [Write] glue:ModifyIntegration */
	static readonly MODIFY_INTEGRATION = "glue:ModifyIntegration";
	/** [Write] glue:NotifyEvent */
	static readonly NOTIFY_EVENT = "glue:NotifyEvent";
	/** [Write] glue:PassConnection */
	static readonly PASS_CONNECTION = "glue:PassConnection";
	/** [Write] glue:PublishDataQuality */
	static readonly PUBLISH_DATA_QUALITY = "glue:PublishDataQuality";
	/** [Write] glue:PutDataCatalogEncryptionSettings */
	static readonly PUT_DATA_CATALOG_ENCRYPTION_SETTINGS =
		"glue:PutDataCatalogEncryptionSettings";
	/** [Write] glue:PutDataQualityProfileAnnotation */
	static readonly PUT_DATA_QUALITY_PROFILE_ANNOTATION =
		"glue:PutDataQualityProfileAnnotation";
	/** [Write] glue:PutDataQualityStatisticAnnotation */
	static readonly PUT_DATA_QUALITY_STATISTIC_ANNOTATION =
		"glue:PutDataQualityStatisticAnnotation";
	/** [PermissionManagement] glue:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "glue:PutResourcePolicy";
	/** [Write] glue:PutSchemaVersionMetadata */
	static readonly PUT_SCHEMA_VERSION_METADATA = "glue:PutSchemaVersionMetadata";
	/** [Write] glue:PutWorkflowRunProperties */
	static readonly PUT_WORKFLOW_RUN_PROPERTIES = "glue:PutWorkflowRunProperties";
	/** [List] glue:QuerySchemaVersionMetadata */
	static readonly QUERY_SCHEMA_VERSION_METADATA =
		"glue:QuerySchemaVersionMetadata";
	/** [PermissionManagement] glue:RefreshOAuth2Tokens */
	static readonly REFRESH_O_AUTH2_TOKENS = "glue:RefreshOAuth2Tokens";
	/** [Write] glue:RegisterConnectionType */
	static readonly REGISTER_CONNECTION_TYPE = "glue:RegisterConnectionType";
	/** [Write] glue:RegisterSchemaVersion */
	static readonly REGISTER_SCHEMA_VERSION = "glue:RegisterSchemaVersion";
	/** [Write] glue:RemoveSchemaVersionMetadata */
	static readonly REMOVE_SCHEMA_VERSION_METADATA =
		"glue:RemoveSchemaVersionMetadata";
	/** [Write] glue:RenameTable */
	static readonly RENAME_TABLE = "glue:RenameTable";
	/** [PermissionManagement] glue:RequestLogParsing */
	static readonly REQUEST_LOG_PARSING = "glue:RequestLogParsing";
	/** [Write] glue:ResetJobBookmark */
	static readonly RESET_JOB_BOOKMARK = "glue:ResetJobBookmark";
	/** [Write] glue:ResumeWorkflowRun */
	static readonly RESUME_WORKFLOW_RUN = "glue:ResumeWorkflowRun";
	/** [PermissionManagement] glue:RunDataPreviewStatement */
	static readonly RUN_DATA_PREVIEW_STATEMENT = "glue:RunDataPreviewStatement";
	/** [Write] glue:RunStatement */
	static readonly RUN_STATEMENT = "glue:RunStatement";
	/** [Read] glue:SearchTables */
	static readonly SEARCH_TABLES = "glue:SearchTables";
	/** [Write] glue:SendFeedback */
	static readonly SEND_FEEDBACK = "glue:SendFeedback";
	/** [PermissionManagement] glue:SendRecipeAction */
	static readonly SEND_RECIPE_ACTION = "glue:SendRecipeAction";
	/** [Write] glue:StartBlueprintRun */
	static readonly START_BLUEPRINT_RUN = "glue:StartBlueprintRun";
	/** [Write] glue:StartColumnStatisticsTaskRun */
	static readonly START_COLUMN_STATISTICS_TASK_RUN =
		"glue:StartColumnStatisticsTaskRun";
	/** [Write] glue:StartColumnStatisticsTaskRunSchedule */
	static readonly START_COLUMN_STATISTICS_TASK_RUN_SCHEDULE =
		"glue:StartColumnStatisticsTaskRunSchedule";
	/** [Write] glue:StartCompletion */
	static readonly START_COMPLETION = "glue:StartCompletion";
	/** [Write] glue:StartCrawler */
	static readonly START_CRAWLER = "glue:StartCrawler";
	/** [Write] glue:StartCrawlerSchedule */
	static readonly START_CRAWLER_SCHEDULE = "glue:StartCrawlerSchedule";
	/** [Write] glue:StartDataQualityRuleRecommendationRun */
	static readonly START_DATA_QUALITY_RULE_RECOMMENDATION_RUN =
		"glue:StartDataQualityRuleRecommendationRun";
	/** [Write] glue:StartDataQualityRulesetEvaluationRun */
	static readonly START_DATA_QUALITY_RULESET_EVALUATION_RUN =
		"glue:StartDataQualityRulesetEvaluationRun";
	/** [Write] glue:StartExportLabelsTaskRun */
	static readonly START_EXPORT_LABELS_TASK_RUN =
		"glue:StartExportLabelsTaskRun";
	/** [Write] glue:StartImportLabelsTaskRun */
	static readonly START_IMPORT_LABELS_TASK_RUN =
		"glue:StartImportLabelsTaskRun";
	/** [Write] glue:StartJobRun */
	static readonly START_JOB_RUN = "glue:StartJobRun";
	/** [Write] glue:StartJobUpgradeAnalysis */
	static readonly START_JOB_UPGRADE_ANALYSIS = "glue:StartJobUpgradeAnalysis";
	/** [Write] glue:StartMLEvaluationTaskRun */
	static readonly START_ML_EVALUATION_TASK_RUN =
		"glue:StartMLEvaluationTaskRun";
	/** [Write] glue:StartMLLabelingSetGenerationTaskRun */
	static readonly START_ML_LABELING_SET_GENERATION_TASK_RUN =
		"glue:StartMLLabelingSetGenerationTaskRun";
	/** [PermissionManagement] glue:StartNotebook */
	static readonly START_NOTEBOOK = "glue:StartNotebook";
	/** [Write] glue:StartTrigger */
	static readonly START_TRIGGER = "glue:StartTrigger";
	/** [Write] glue:StartWorkflowRun */
	static readonly START_WORKFLOW_RUN = "glue:StartWorkflowRun";
	/** [Write] glue:StopColumnStatisticsTaskRun */
	static readonly STOP_COLUMN_STATISTICS_TASK_RUN =
		"glue:StopColumnStatisticsTaskRun";
	/** [Write] glue:StopColumnStatisticsTaskRunSchedule */
	static readonly STOP_COLUMN_STATISTICS_TASK_RUN_SCHEDULE =
		"glue:StopColumnStatisticsTaskRunSchedule";
	/** [Write] glue:StopCrawler */
	static readonly STOP_CRAWLER = "glue:StopCrawler";
	/** [Write] glue:StopCrawlerSchedule */
	static readonly STOP_CRAWLER_SCHEDULE = "glue:StopCrawlerSchedule";
	/** [Write] glue:StopJobUpgradeAnalysis */
	static readonly STOP_JOB_UPGRADE_ANALYSIS = "glue:StopJobUpgradeAnalysis";
	/** [Write] glue:StopSession */
	static readonly STOP_SESSION = "glue:StopSession";
	/** [Write] glue:StopTrigger */
	static readonly STOP_TRIGGER = "glue:StopTrigger";
	/** [Write] glue:StopWorkflowRun */
	static readonly STOP_WORKFLOW_RUN = "glue:StopWorkflowRun";
	/** [Tagging] glue:TagResource */
	static readonly TAG_RESOURCE = "glue:TagResource";
	/** [PermissionManagement] glue:TerminateNotebook */
	static readonly TERMINATE_NOTEBOOK = "glue:TerminateNotebook";
	/** [PermissionManagement] glue:TestConnection */
	static readonly TEST_CONNECTION = "glue:TestConnection";
	/** [Tagging] glue:UntagResource */
	static readonly UNTAG_RESOURCE = "glue:UntagResource";
	/** [Write] glue:UpdateBlueprint */
	static readonly UPDATE_BLUEPRINT = "glue:UpdateBlueprint";
	/** [Write] glue:UpdateCatalog */
	static readonly UPDATE_CATALOG = "glue:UpdateCatalog";
	/** [Write] glue:UpdateClassifier */
	static readonly UPDATE_CLASSIFIER = "glue:UpdateClassifier";
	/** [Write] glue:UpdateColumnStatisticsForPartition */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_PARTITION =
		"glue:UpdateColumnStatisticsForPartition";
	/** [Write] glue:UpdateColumnStatisticsForTable */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_TABLE =
		"glue:UpdateColumnStatisticsForTable";
	/** [Write] glue:UpdateColumnStatisticsTaskSettings */
	static readonly UPDATE_COLUMN_STATISTICS_TASK_SETTINGS =
		"glue:UpdateColumnStatisticsTaskSettings";
	/** [Write] glue:UpdateConnection */
	static readonly UPDATE_CONNECTION = "glue:UpdateConnection";
	/** [Write] glue:UpdateCrawler */
	static readonly UPDATE_CRAWLER = "glue:UpdateCrawler";
	/** [Write] glue:UpdateCrawlerSchedule */
	static readonly UPDATE_CRAWLER_SCHEDULE = "glue:UpdateCrawlerSchedule";
	/** [Write] glue:UpdateDataQualityRuleset */
	static readonly UPDATE_DATA_QUALITY_RULESET = "glue:UpdateDataQualityRuleset";
	/** [Write] glue:UpdateDatabase */
	static readonly UPDATE_DATABASE = "glue:UpdateDatabase";
	/** [Write] glue:UpdateDevEndpoint */
	static readonly UPDATE_DEV_ENDPOINT = "glue:UpdateDevEndpoint";
	/** [Write] glue:UpdateGlueIdentityCenterConfiguration */
	static readonly UPDATE_GLUE_IDENTITY_CENTER_CONFIGURATION =
		"glue:UpdateGlueIdentityCenterConfiguration";
	/** [Write] glue:UpdateIntegrationResourceProperty */
	static readonly UPDATE_INTEGRATION_RESOURCE_PROPERTY =
		"glue:UpdateIntegrationResourceProperty";
	/** [Write] glue:UpdateIntegrationTableProperties */
	static readonly UPDATE_INTEGRATION_TABLE_PROPERTIES =
		"glue:UpdateIntegrationTableProperties";
	/** [Write] glue:UpdateJob */
	static readonly UPDATE_JOB = "glue:UpdateJob";
	/** [Write] glue:UpdateJobFromSourceControl */
	static readonly UPDATE_JOB_FROM_SOURCE_CONTROL =
		"glue:UpdateJobFromSourceControl";
	/** [Write] glue:UpdateMLTransform */
	static readonly UPDATE_ML_TRANSFORM = "glue:UpdateMLTransform";
	/** [Write] glue:UpdatePartition */
	static readonly UPDATE_PARTITION = "glue:UpdatePartition";
	/** [Write] glue:UpdateRegistry */
	static readonly UPDATE_REGISTRY = "glue:UpdateRegistry";
	/** [Write] glue:UpdateSchema */
	static readonly UPDATE_SCHEMA = "glue:UpdateSchema";
	/** [Write] glue:UpdateSourceControlFromJob */
	static readonly UPDATE_SOURCE_CONTROL_FROM_JOB =
		"glue:UpdateSourceControlFromJob";
	/** [Write] glue:UpdateTable */
	static readonly UPDATE_TABLE = "glue:UpdateTable";
	/** [Write] glue:UpdateTableOptimizer */
	static readonly UPDATE_TABLE_OPTIMIZER = "glue:UpdateTableOptimizer";
	/** [Write] glue:UpdateTrigger */
	static readonly UPDATE_TRIGGER = "glue:UpdateTrigger";
	/** [Write] glue:UpdateUsageProfile */
	static readonly UPDATE_USAGE_PROFILE = "glue:UpdateUsageProfile";
	/** [Write] glue:UpdateUserDefinedFunction */
	static readonly UPDATE_USER_DEFINED_FUNCTION =
		"glue:UpdateUserDefinedFunction";
	/** [Write] glue:UpdateWorkflow */
	static readonly UPDATE_WORKFLOW = "glue:UpdateWorkflow";
	/** [Write] glue:UpgradeJob */
	static readonly UPGRADE_JOB = "glue:UpgradeJob";
	/** [PermissionManagement] glue:UseGlueStudio */
	static readonly USE_GLUE_STUDIO = "glue:UseGlueStudio";
	/** [Write] glue:UseMLTransforms */
	static readonly USE_ML_TRANSFORMS = "glue:UseMLTransforms";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GlueActions.ACCESS_DATA_QUALITY_RUNTIME_CONFIGURATION,
		GlueActions.BATCH_GET_BLUEPRINTS,
		GlueActions.BATCH_GET_CRAWLERS,
		GlueActions.BATCH_GET_CUSTOM_ENTITY_TYPES,
		GlueActions.BATCH_GET_DEV_ENDPOINTS,
		GlueActions.BATCH_GET_JOBS,
		GlueActions.BATCH_GET_PARTITION,
		GlueActions.BATCH_GET_TABLE_OPTIMIZER,
		GlueActions.BATCH_GET_TRIGGERS,
		GlueActions.BATCH_GET_WORKFLOWS,
		GlueActions.CHECK_SCHEMA_VERSION_VALIDITY,
		GlueActions.GET_BLUEPRINT,
		GlueActions.GET_BLUEPRINT_RUN,
		GlueActions.GET_BLUEPRINT_RUNS,
		GlueActions.GET_CATALOG,
		GlueActions.GET_CATALOG_IMPORT_STATUS,
		GlueActions.GET_CATALOGS,
		GlueActions.GET_CLASSIFIER,
		GlueActions.GET_CLASSIFIERS,
		GlueActions.GET_COLUMN_STATISTICS_FOR_PARTITION,
		GlueActions.GET_COLUMN_STATISTICS_FOR_TABLE,
		GlueActions.GET_COLUMN_STATISTICS_TASK_RUN,
		GlueActions.GET_COLUMN_STATISTICS_TASK_RUNS,
		GlueActions.GET_COLUMN_STATISTICS_TASK_SETTINGS,
		GlueActions.GET_COMPLETION,
		GlueActions.GET_CONNECTION,
		GlueActions.GET_CONNECTIONS,
		GlueActions.GET_CRAWLER,
		GlueActions.GET_CRAWLER_METRICS,
		GlueActions.GET_CRAWLERS,
		GlueActions.GET_CUSTOM_ENTITY_TYPE,
		GlueActions.GET_DASHBOARD_URL,
		GlueActions.GET_DATA_CATALOG_ENCRYPTION_SETTINGS,
		GlueActions.GET_DATA_QUALITY_MODEL,
		GlueActions.GET_DATA_QUALITY_MODEL_RESULT,
		GlueActions.GET_DATA_QUALITY_RESULT,
		GlueActions.GET_DATA_QUALITY_RULE_RECOMMENDATION_RUN,
		GlueActions.GET_DATA_QUALITY_RULESET,
		GlueActions.GET_DATA_QUALITY_RULESET_EVALUATION_RUN,
		GlueActions.GET_DATABASE,
		GlueActions.GET_DATABASES,
		GlueActions.GET_DATAFLOW_GRAPH,
		GlueActions.GET_DEV_ENDPOINT,
		GlueActions.GET_DEV_ENDPOINTS,
		GlueActions.GET_ENTITY_RECORDS,
		GlueActions.GET_GENERATED_CODE,
		GlueActions.GET_GLUE_IDENTITY_CENTER_CONFIGURATION,
		GlueActions.GET_INTEGRATION_RESOURCE_PROPERTY,
		GlueActions.GET_INTEGRATION_TABLE_PROPERTIES,
		GlueActions.GET_JOB,
		GlueActions.GET_JOB_BOOKMARK,
		GlueActions.GET_JOB_RUN,
		GlueActions.GET_JOB_RUNS,
		GlueActions.GET_JOB_UPGRADE_ANALYSIS,
		GlueActions.GET_JOBS,
		GlueActions.GET_ML_TASK_RUN,
		GlueActions.GET_ML_TRANSFORM,
		GlueActions.GET_MAPPING,
		GlueActions.GET_PARTITION,
		GlueActions.GET_PARTITION_INDEXES,
		GlueActions.GET_PARTITIONS,
		GlueActions.GET_PLAN,
		GlueActions.GET_REGISTRY,
		GlueActions.GET_RESOURCE_POLICIES,
		GlueActions.GET_RESOURCE_POLICY,
		GlueActions.GET_SCHEMA,
		GlueActions.GET_SCHEMA_BY_DEFINITION,
		GlueActions.GET_SCHEMA_VERSION,
		GlueActions.GET_SCHEMA_VERSIONS_DIFF,
		GlueActions.GET_SECURITY_CONFIGURATION,
		GlueActions.GET_SECURITY_CONFIGURATIONS,
		GlueActions.GET_SESSION,
		GlueActions.GET_SESSION_ENDPOINT,
		GlueActions.GET_STATEMENT,
		GlueActions.GET_TABLE,
		GlueActions.GET_TABLE_OPTIMIZER,
		GlueActions.GET_TABLE_VERSION,
		GlueActions.GET_TABLE_VERSIONS,
		GlueActions.GET_TABLES,
		GlueActions.GET_TAGS,
		GlueActions.GET_TRIGGER,
		GlueActions.GET_TRIGGERS,
		GlueActions.GET_USAGE_PROFILE,
		GlueActions.GET_USER_DEFINED_FUNCTION,
		GlueActions.GET_USER_DEFINED_FUNCTIONS,
		GlueActions.GET_WORKFLOW,
		GlueActions.GET_WORKFLOW_RUN,
		GlueActions.GET_WORKFLOW_RUN_PROPERTIES,
		GlueActions.GET_WORKFLOW_RUNS,
		GlueActions.LIST_COLUMN_STATISTICS_TASK_RUNS,
		GlueActions.SEARCH_TABLES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GlueActions.AUTHORIZE_INBOUND_INTEGRATION,
		GlueActions.BATCH_CREATE_PARTITION,
		GlueActions.BATCH_DELETE_CONNECTION,
		GlueActions.BATCH_DELETE_PARTITION,
		GlueActions.BATCH_DELETE_TABLE,
		GlueActions.BATCH_DELETE_TABLE_VERSION,
		GlueActions.BATCH_STOP_JOB_RUN,
		GlueActions.BATCH_UPDATE_PARTITION,
		GlueActions.CANCEL_DATA_QUALITY_RULE_RECOMMENDATION_RUN,
		GlueActions.CANCEL_DATA_QUALITY_RULESET_EVALUATION_RUN,
		GlueActions.CANCEL_ML_TASK_RUN,
		GlueActions.CANCEL_STATEMENT,
		GlueActions.CREATE_BLUEPRINT,
		GlueActions.CREATE_CATALOG,
		GlueActions.CREATE_CLASSIFIER,
		GlueActions.CREATE_COLUMN_STATISTICS_TASK_SETTINGS,
		GlueActions.CREATE_CONNECTION,
		GlueActions.CREATE_CRAWLER,
		GlueActions.CREATE_CUSTOM_ENTITY_TYPE,
		GlueActions.CREATE_DATA_QUALITY_RULESET,
		GlueActions.CREATE_DATABASE,
		GlueActions.CREATE_DEV_ENDPOINT,
		GlueActions.CREATE_GLUE_IDENTITY_CENTER_CONFIGURATION,
		GlueActions.CREATE_INBOUND_INTEGRATION,
		GlueActions.CREATE_INTEGRATION,
		GlueActions.CREATE_INTEGRATION_RESOURCE_PROPERTY,
		GlueActions.CREATE_INTEGRATION_TABLE_PROPERTIES,
		GlueActions.CREATE_JOB,
		GlueActions.CREATE_ML_TRANSFORM,
		GlueActions.CREATE_PARTITION,
		GlueActions.CREATE_PARTITION_INDEX,
		GlueActions.CREATE_REGISTRY,
		GlueActions.CREATE_SCHEMA,
		GlueActions.CREATE_SCRIPT,
		GlueActions.CREATE_SECURITY_CONFIGURATION,
		GlueActions.CREATE_SESSION,
		GlueActions.CREATE_TABLE,
		GlueActions.CREATE_TABLE_OPTIMIZER,
		GlueActions.CREATE_TRIGGER,
		GlueActions.CREATE_USAGE_PROFILE,
		GlueActions.CREATE_USER_DEFINED_FUNCTION,
		GlueActions.CREATE_WORKFLOW,
		GlueActions.DELETE_BLUEPRINT,
		GlueActions.DELETE_CATALOG,
		GlueActions.DELETE_CLASSIFIER,
		GlueActions.DELETE_COLUMN_STATISTICS_FOR_PARTITION,
		GlueActions.DELETE_COLUMN_STATISTICS_FOR_TABLE,
		GlueActions.DELETE_COLUMN_STATISTICS_TASK_SETTINGS,
		GlueActions.DELETE_CONNECTION,
		GlueActions.DELETE_CONNECTION_TYPE,
		GlueActions.DELETE_CRAWLER,
		GlueActions.DELETE_CUSTOM_ENTITY_TYPE,
		GlueActions.DELETE_DATA_QUALITY_RULESET,
		GlueActions.DELETE_DATABASE,
		GlueActions.DELETE_DEV_ENDPOINT,
		GlueActions.DELETE_GLUE_IDENTITY_CENTER_CONFIGURATION,
		GlueActions.DELETE_INTEGRATION,
		GlueActions.DELETE_INTEGRATION_RESOURCE_PROPERTY,
		GlueActions.DELETE_INTEGRATION_TABLE_PROPERTIES,
		GlueActions.DELETE_JOB,
		GlueActions.DELETE_ML_TRANSFORM,
		GlueActions.DELETE_PARTITION,
		GlueActions.DELETE_PARTITION_INDEX,
		GlueActions.DELETE_REGISTRY,
		GlueActions.DELETE_SCHEMA,
		GlueActions.DELETE_SCHEMA_VERSIONS,
		GlueActions.DELETE_SECURITY_CONFIGURATION,
		GlueActions.DELETE_SESSION,
		GlueActions.DELETE_TABLE,
		GlueActions.DELETE_TABLE_OPTIMIZER,
		GlueActions.DELETE_TABLE_VERSION,
		GlueActions.DELETE_TRIGGER,
		GlueActions.DELETE_USAGE_PROFILE,
		GlueActions.DELETE_USER_DEFINED_FUNCTION,
		GlueActions.DELETE_WORKFLOW,
		GlueActions.FEDERATE_AUTHORIZATION,
		GlueActions.IMPORT_CATALOG_TO_GLUE,
		GlueActions.MODIFY_INTEGRATION,
		GlueActions.NOTIFY_EVENT,
		GlueActions.PASS_CONNECTION,
		GlueActions.PUBLISH_DATA_QUALITY,
		GlueActions.PUT_DATA_CATALOG_ENCRYPTION_SETTINGS,
		GlueActions.PUT_DATA_QUALITY_PROFILE_ANNOTATION,
		GlueActions.PUT_DATA_QUALITY_STATISTIC_ANNOTATION,
		GlueActions.PUT_SCHEMA_VERSION_METADATA,
		GlueActions.PUT_WORKFLOW_RUN_PROPERTIES,
		GlueActions.REGISTER_CONNECTION_TYPE,
		GlueActions.REGISTER_SCHEMA_VERSION,
		GlueActions.REMOVE_SCHEMA_VERSION_METADATA,
		GlueActions.RENAME_TABLE,
		GlueActions.RESET_JOB_BOOKMARK,
		GlueActions.RESUME_WORKFLOW_RUN,
		GlueActions.RUN_STATEMENT,
		GlueActions.SEND_FEEDBACK,
		GlueActions.START_BLUEPRINT_RUN,
		GlueActions.START_COLUMN_STATISTICS_TASK_RUN,
		GlueActions.START_COLUMN_STATISTICS_TASK_RUN_SCHEDULE,
		GlueActions.START_COMPLETION,
		GlueActions.START_CRAWLER,
		GlueActions.START_CRAWLER_SCHEDULE,
		GlueActions.START_DATA_QUALITY_RULE_RECOMMENDATION_RUN,
		GlueActions.START_DATA_QUALITY_RULESET_EVALUATION_RUN,
		GlueActions.START_EXPORT_LABELS_TASK_RUN,
		GlueActions.START_IMPORT_LABELS_TASK_RUN,
		GlueActions.START_JOB_RUN,
		GlueActions.START_JOB_UPGRADE_ANALYSIS,
		GlueActions.START_ML_EVALUATION_TASK_RUN,
		GlueActions.START_ML_LABELING_SET_GENERATION_TASK_RUN,
		GlueActions.START_TRIGGER,
		GlueActions.START_WORKFLOW_RUN,
		GlueActions.STOP_COLUMN_STATISTICS_TASK_RUN,
		GlueActions.STOP_COLUMN_STATISTICS_TASK_RUN_SCHEDULE,
		GlueActions.STOP_CRAWLER,
		GlueActions.STOP_CRAWLER_SCHEDULE,
		GlueActions.STOP_JOB_UPGRADE_ANALYSIS,
		GlueActions.STOP_SESSION,
		GlueActions.STOP_TRIGGER,
		GlueActions.STOP_WORKFLOW_RUN,
		GlueActions.UPDATE_BLUEPRINT,
		GlueActions.UPDATE_CATALOG,
		GlueActions.UPDATE_CLASSIFIER,
		GlueActions.UPDATE_COLUMN_STATISTICS_FOR_PARTITION,
		GlueActions.UPDATE_COLUMN_STATISTICS_FOR_TABLE,
		GlueActions.UPDATE_COLUMN_STATISTICS_TASK_SETTINGS,
		GlueActions.UPDATE_CONNECTION,
		GlueActions.UPDATE_CRAWLER,
		GlueActions.UPDATE_CRAWLER_SCHEDULE,
		GlueActions.UPDATE_DATA_QUALITY_RULESET,
		GlueActions.UPDATE_DATABASE,
		GlueActions.UPDATE_DEV_ENDPOINT,
		GlueActions.UPDATE_GLUE_IDENTITY_CENTER_CONFIGURATION,
		GlueActions.UPDATE_INTEGRATION_RESOURCE_PROPERTY,
		GlueActions.UPDATE_INTEGRATION_TABLE_PROPERTIES,
		GlueActions.UPDATE_JOB,
		GlueActions.UPDATE_JOB_FROM_SOURCE_CONTROL,
		GlueActions.UPDATE_ML_TRANSFORM,
		GlueActions.UPDATE_PARTITION,
		GlueActions.UPDATE_REGISTRY,
		GlueActions.UPDATE_SCHEMA,
		GlueActions.UPDATE_SOURCE_CONTROL_FROM_JOB,
		GlueActions.UPDATE_TABLE,
		GlueActions.UPDATE_TABLE_OPTIMIZER,
		GlueActions.UPDATE_TRIGGER,
		GlueActions.UPDATE_USAGE_PROFILE,
		GlueActions.UPDATE_USER_DEFINED_FUNCTION,
		GlueActions.UPDATE_WORKFLOW,
		GlueActions.UPGRADE_JOB,
		GlueActions.USE_ML_TRANSFORMS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GlueActions.DESCRIBE_INBOUND_INTEGRATIONS,
		GlueActions.DESCRIBE_INTEGRATIONS,
		GlueActions.GET_ML_TASK_RUNS,
		GlueActions.GET_ML_TRANSFORMS,
		GlueActions.LIST_BLUEPRINTS,
		GlueActions.LIST_CRAWLERS,
		GlueActions.LIST_CRAWLS,
		GlueActions.LIST_CUSTOM_ENTITY_TYPES,
		GlueActions.LIST_DATA_QUALITY_RESULTS,
		GlueActions.LIST_DATA_QUALITY_RULE_RECOMMENDATION_RUNS,
		GlueActions.LIST_DATA_QUALITY_RULESET_EVALUATION_RUNS,
		GlueActions.LIST_DATA_QUALITY_RULESETS,
		GlueActions.LIST_DEV_ENDPOINTS,
		GlueActions.LIST_INTEGRATION_RESOURCE_PROPERTIES,
		GlueActions.LIST_JOB_UPGRADE_ANALYSES,
		GlueActions.LIST_JOBS,
		GlueActions.LIST_ML_TRANSFORMS,
		GlueActions.LIST_REGISTRIES,
		GlueActions.LIST_SCHEMA_VERSIONS,
		GlueActions.LIST_SCHEMAS,
		GlueActions.LIST_SESSIONS,
		GlueActions.LIST_STATEMENTS,
		GlueActions.LIST_TABLE_OPTIMIZER_RUNS,
		GlueActions.LIST_TRIGGERS,
		GlueActions.LIST_USAGE_PROFILES,
		GlueActions.LIST_WORKFLOWS,
		GlueActions.QUERY_SCHEMA_VERSION_METADATA,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		GlueActions.BATCH_GET_STAGE_FILES,
		GlueActions.DELETE_RESOURCE_POLICY,
		GlueActions.DEREGISTER_DATA_PREVIEW,
		GlueActions.DESCRIBE_CONNECTION_TYPE,
		GlueActions.DESCRIBE_ENTITY,
		GlueActions.GET_DATA_PREVIEW_STATEMENT,
		GlueActions.GET_ENVIRONMENT,
		GlueActions.GET_EXECUTORS,
		GlueActions.GET_EXECUTORS_THREADS,
		GlueActions.GET_LOG_PARSING_STATUS,
		GlueActions.GET_NOTEBOOK_INSTANCE_STATUS,
		GlueActions.GET_QUERIES,
		GlueActions.GET_QUERY,
		GlueActions.GET_RECIPE_ACTION,
		GlueActions.GET_STAGE,
		GlueActions.GET_STAGE_ATTEMPT,
		GlueActions.GET_STAGE_ATTEMPT_TASK_LIST,
		GlueActions.GET_STAGE_ATTEMPT_TASK_SUMMARY,
		GlueActions.GET_STAGE_FILES,
		GlueActions.GET_STAGES,
		GlueActions.GET_STORAGE,
		GlueActions.GET_STORAGE_UNIT,
		GlueActions.GLUE_NOTEBOOK_AUTHORIZE,
		GlueActions.GLUE_NOTEBOOK_REFRESH_CREDENTIALS,
		GlueActions.LIST_CONNECTION_TYPES,
		GlueActions.LIST_ENTITIES,
		GlueActions.MANAGED_CONNECTOR,
		GlueActions.PUT_RESOURCE_POLICY,
		GlueActions.REFRESH_O_AUTH2_TOKENS,
		GlueActions.REQUEST_LOG_PARSING,
		GlueActions.RUN_DATA_PREVIEW_STATEMENT,
		GlueActions.SEND_RECIPE_ACTION,
		GlueActions.START_NOTEBOOK,
		GlueActions.TERMINATE_NOTEBOOK,
		GlueActions.TEST_CONNECTION,
		GlueActions.USE_GLUE_STUDIO,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GlueActions.TAG_RESOURCE,
		GlueActions.UNTAG_RESOURCE,
	];
}

const BlueprintArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):blueprint/(?<blueprintName>[^:/?]+)$",
);
const CatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalogName>[^:/?]+)$",
);
const CompletionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):completion/(?<completionId>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):connection/(?<connectionName>[^:/?]+)$",
);
const ConnectionTypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):connectionType:(?<connectionTypeName>[^:/?]+)$",
);
const CrawlerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):crawler/(?<crawlerName>[^:/?]+)$",
);
const CustomEntityTypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):customEntityType/(?<customEntityTypeId>[^:/?]+)$",
);
const DataQualityRulesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):dataQualityRuleset/(?<rulesetName>[^:/?]+)$",
);
const DatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):database/(?<databaseName>[^:/?]+)$",
);
const DevendpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):devEndpoint/(?<devEndpointName>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationId>[^:/?]+)$",
);
const IntegrationResourcePropertyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):integrationresourceproperty/(?<resourceType>[^:/?]+)/(?<resourceName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobName>[^:/?]+)$",
);
const MlTransformArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):mlTransform/(?<transformId>[^:/?]+)$",
);
const RegistryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryName>[^:/?]+)$",
);
const RootcatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):catalog$",
);
const SchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):schema/(?<schemaName>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):session/(?<sessionId>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):table/(?<databaseName>[^:/?]+)/(?<tableName>[^:/?]+)$",
);
const TableversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):tableVersion/(?<databaseName>[^:/?]+)/(?<tableName>[^:/?]+)/(?<tableVersionName>[^:/?]+)$",
);
const TriggerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):trigger/(?<triggerName>[^:/?]+)$",
);
const UsageProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):usageProfile/(?<usageProfileId>[^:/?]+)$",
);
const UserdefinedfunctionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):userDefinedFunction/(?<databaseName>[^:/?]+)/(?<userDefinedFunctionName>[^:/?]+)$",
);
const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glue:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<workflowName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for glue resources.
 */
export class GlueResources {
	/**
	 * Builds an ARN for the blueprint resource.
	 */
	static blueprint(props: {
		/** The BlueprintName component of the ARN. */
		readonly blueprintName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBlueprintArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		blueprintName: string;
	} {
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
	static catalog(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
	} {
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
	static completion(props: {
		/** The CompletionId component of the ARN. */
		readonly completionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCompletionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		completionId: string;
	} {
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
	static connection(props: {
		/** The ConnectionName component of the ARN. */
		readonly connectionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionName: string;
	} {
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
	static connectionType(props: {
		/** The ConnectionTypeName component of the ARN. */
		readonly connectionTypeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionTypeName: string;
	} {
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
	static crawler(props: {
		/** The CrawlerName component of the ARN. */
		readonly crawlerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCrawlerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		crawlerName: string;
	} {
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
	static customEntityType(props: {
		/** The CustomEntityTypeId component of the ARN. */
		readonly customEntityTypeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCustomEntityTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		customEntityTypeId: string;
	} {
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
	static dataQualityRuleset(props: {
		/** The RulesetName component of the ARN. */
		readonly rulesetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDataQualityRulesetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		rulesetName: string;
	} {
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
	static database(props: {
		/** The DatabaseName component of the ARN. */
		readonly databaseName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		databaseName: string;
	} {
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
	static devendpoint(props: {
		/** The DevEndpointName component of the ARN. */
		readonly devEndpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDevendpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		devEndpointName: string;
	} {
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
	static integration(props: {
		/** The IntegrationId component of the ARN. */
		readonly integrationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		integrationId: string;
	} {
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
	static integrationResourceProperty(props: {
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
	}): string {
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
	static parseIntegrationResourcePropertyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceType: string;
		resourceName: string;
	} {
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
	static job(props: {
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobName: string;
	} {
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
	static mlTransform(props: {
		/** The TransformId component of the ARN. */
		readonly transformId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMlTransformArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		transformId: string;
	} {
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
	static registry(props: {
		/** The RegistryName component of the ARN. */
		readonly registryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRegistryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registryName: string;
	} {
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
	static rootcatalog(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRootcatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static schema(props: {
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		schemaName: string;
	} {
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
	static session(props: {
		/** The SessionId component of the ARN. */
		readonly sessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sessionId: string;
	} {
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
	static table(props: {
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
	}): string {
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
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		databaseName: string;
		tableName: string;
	} {
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
	static tableversion(props: {
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
	}): string {
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
	static parseTableversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		databaseName: string;
		tableName: string;
		tableVersionName: string;
	} {
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
	static trigger(props: {
		/** The TriggerName component of the ARN. */
		readonly triggerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTriggerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		triggerName: string;
	} {
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
	static usageProfile(props: {
		/** The UsageProfileId component of the ARN. */
		readonly usageProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUsageProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		usageProfileId: string;
	} {
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
	static userdefinedfunction(props: {
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
	}): string {
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
	static parseUserdefinedfunctionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		databaseName: string;
		userDefinedFunctionName: string;
	} {
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
	static workflow(props: {
		/** The WorkflowName component of the ARN. */
		readonly workflowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowName: string;
	} {
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
	static readonly ASSOCIATE_GLOSSARY_TERMS: string[] = [];
	/** IAM actions required for the BatchCreatePartition API call. */
	static readonly BATCH_CREATE_PARTITION: string[] = [];
	/** IAM actions required for the BatchDeleteConnection API call. */
	static readonly BATCH_DELETE_CONNECTION: string[] = [
		"glue:BatchDeleteConnection",
		"glue:DeleteConnection",
	];
	/** IAM actions required for the BatchDeletePartition API call. */
	static readonly BATCH_DELETE_PARTITION: string[] = [];
	/** IAM actions required for the BatchDeleteTable API call. */
	static readonly BATCH_DELETE_TABLE: string[] = [];
	/** IAM actions required for the BatchDeleteTableVersion API call. */
	static readonly BATCH_DELETE_TABLE_VERSION: string[] = [
		"glue:BatchDeleteTableVersion",
		"glue:DeleteTableVersion",
	];
	/** IAM actions required for the BatchGetBlueprints API call. */
	static readonly BATCH_GET_BLUEPRINTS: string[] = [
		"glue:BatchGetBlueprints",
		"glue:GetBlueprint",
	];
	/** IAM actions required for the BatchGetCrawlers API call. */
	static readonly BATCH_GET_CRAWLERS: string[] = ["glue:BatchGetCrawlers"];
	/** IAM actions required for the BatchGetCustomEntityTypes API call. */
	static readonly BATCH_GET_CUSTOM_ENTITY_TYPES: string[] = [
		"glue:BatchGetCustomEntityTypes",
		"glue:GetCustomEntityType",
	];
	/** IAM actions required for the BatchGetDataQualityResult API call. */
	static readonly BATCH_GET_DATA_QUALITY_RESULT: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the BatchGetDataQualityRulesetEvaluationRun API call. */
	static readonly BATCH_GET_DATA_QUALITY_RULESET_EVALUATION_RUN: string[] = [];
	/** IAM actions required for the BatchGetDevEndpoints API call. */
	static readonly BATCH_GET_DEV_ENDPOINTS: string[] = [
		"glue:BatchGetDevEndpoints",
		"glue:GetDevEndpoint",
	];
	/** IAM actions required for the BatchGetIterableForms API call. */
	static readonly BATCH_GET_ITERABLE_FORMS: string[] = [];
	/** IAM actions required for the BatchGetJobs API call. */
	static readonly BATCH_GET_JOBS: string[] = [
		"glue:BatchGetJobs",
		"glue:GetJob",
	];
	/** IAM actions required for the BatchGetPartition API call. */
	static readonly BATCH_GET_PARTITION: string[] = [];
	/** IAM actions required for the BatchGetTableOptimizer API call. */
	static readonly BATCH_GET_TABLE_OPTIMIZER: string[] = [
		"glue:BatchGetTableOptimizer",
	];
	/** IAM actions required for the BatchGetTriggers API call. */
	static readonly BATCH_GET_TRIGGERS: string[] = [
		"glue:BatchGetTriggers",
		"glue:GetTrigger",
	];
	/** IAM actions required for the BatchGetWorkflows API call. */
	static readonly BATCH_GET_WORKFLOWS: string[] = [
		"glue:BatchGetWorkflows",
		"glue:GetWorkflow",
	];
	/** IAM actions required for the BatchPutDataQualityStatisticAnnotation API call. */
	static readonly BATCH_PUT_DATA_QUALITY_STATISTIC_ANNOTATION: string[] = [
		"glue:PutDataQualityStatisticAnnotation",
	];
	/** IAM actions required for the BatchStopJobRun API call. */
	static readonly BATCH_STOP_JOB_RUN: string[] = ["glue:BatchStopJobRun"];
	/** IAM actions required for the BatchUpdatePartition API call. */
	static readonly BATCH_UPDATE_PARTITION: string[] = [];
	/** IAM actions required for the CancelDataQualityRuleRecommendationRun API call. */
	static readonly CANCEL_DATA_QUALITY_RULE_RECOMMENDATION_RUN: string[] = [
		"glue:CancelDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the CancelDataQualityRulesetEvaluationRun API call. */
	static readonly CANCEL_DATA_QUALITY_RULESET_EVALUATION_RUN: string[] = [
		"glue:CancelDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the CancelMLTaskRun API call. */
	static readonly CANCEL_ML_TASK_RUN: string[] = ["glue:CancelMLTaskRun"];
	/** IAM actions required for the CancelStatement API call. */
	static readonly CANCEL_STATEMENT: string[] = ["glue:CancelStatement"];
	/** IAM actions required for the CheckSchemaVersionValidity API call. */
	static readonly CHECK_SCHEMA_VERSION_VALIDITY: string[] = [
		"glue:CheckSchemaVersionValidity",
	];
	/** IAM actions required for the CreateBlueprint API call. */
	static readonly CREATE_BLUEPRINT: string[] = [
		"glue:CreateBlueprint",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCatalog API call. */
	static readonly CREATE_CATALOG: string[] = [
		"glue:CreateCatalog",
		"glue:PassConnection",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateClassifier API call. */
	static readonly CREATE_CLASSIFIER: string[] = ["glue:CreateClassifier"];
	/** IAM actions required for the CreateColumnStatisticsTaskSettings API call. */
	static readonly CREATE_COLUMN_STATISTICS_TASK_SETTINGS: string[] = [
		"glue:CreateColumnStatisticsTaskSettings",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"glue:CreateConnection",
		"glue:DescribeConnectionType",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCrawler API call. */
	static readonly CREATE_CRAWLER: string[] = [
		"glue:CreateCrawler",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateCustomEntityType API call. */
	static readonly CREATE_CUSTOM_ENTITY_TYPE: string[] = [
		"glue:CreateCustomEntityType",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDataQualityRuleset API call. */
	static readonly CREATE_DATA_QUALITY_RULESET: string[] = [
		"glue:CreateDataQualityRuleset",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDatabase API call. */
	static readonly CREATE_DATABASE: string[] = [
		"glue:CreateDatabase",
		"glue:PassConnection",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateDevEndpoint API call. */
	static readonly CREATE_DEV_ENDPOINT: string[] = [
		"glue:CreateDevEndpoint",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateGlossary API call. */
	static readonly CREATE_GLOSSARY: string[] = [];
	/** IAM actions required for the CreateGlossaryTerm API call. */
	static readonly CREATE_GLOSSARY_TERM: string[] = [];
	/** IAM actions required for the CreateGlueIdentityCenterConfiguration API call. */
	static readonly CREATE_GLUE_IDENTITY_CENTER_CONFIGURATION: string[] = [
		"glue:CreateGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CREATE_INTEGRATION: string[] = [
		"glue:CreateIntegration",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateIntegrationResourceProperty API call. */
	static readonly CREATE_INTEGRATION_RESOURCE_PROPERTY: string[] = [
		"glue:CreateIntegrationResourceProperty",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateIntegrationTableProperties API call. */
	static readonly CREATE_INTEGRATION_TABLE_PROPERTIES: string[] = [
		"glue:CreateIntegrationTableProperties",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"glue:CreateJob",
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateMLTransform API call. */
	static readonly CREATE_ML_TRANSFORM: string[] = [
		"glue:CreateMLTransform",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreatePartition API call. */
	static readonly CREATE_PARTITION: string[] = ["glue:CreatePartition"];
	/** IAM actions required for the CreatePartitionIndex API call. */
	static readonly CREATE_PARTITION_INDEX: string[] = ["glue:UpdateTable"];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CREATE_REGISTRY: string[] = [
		"glue:CreateRegistry",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CREATE_SCHEMA: string[] = [
		"glue:CreateSchema",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateScript API call. */
	static readonly CREATE_SCRIPT: string[] = ["glue:CreateScript"];
	/** IAM actions required for the CreateSecurityConfiguration API call. */
	static readonly CREATE_SECURITY_CONFIGURATION: string[] = [
		"glue:CreateSecurityConfiguration",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CREATE_SESSION: string[] = [
		"glue:CreateSession",
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CREATE_TABLE: string[] = [
		"glue:CreateTable",
		"glue:PassConnection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTableOptimizer API call. */
	static readonly CREATE_TABLE_OPTIMIZER: string[] = [
		"glue:CreateTableOptimizer",
		"glue:PassConnection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTrigger API call. */
	static readonly CREATE_TRIGGER: string[] = [
		"glue:CreateTrigger",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateUsageProfile API call. */
	static readonly CREATE_USAGE_PROFILE: string[] = [
		"glue:CreateUsageProfile",
		"glue:TagResource",
	];
	/** IAM actions required for the CreateUserDefinedFunction API call. */
	static readonly CREATE_USER_DEFINED_FUNCTION: string[] = [
		"glue:CreateUserDefinedFunction",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"glue:CreateWorkflow",
		"glue:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = [];
	/** IAM actions required for the DeleteAssetType API call. */
	static readonly DELETE_ASSET_TYPE: string[] = [];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DELETE_ATTACHMENT: string[] = [];
	/** IAM actions required for the DeleteBlueprint API call. */
	static readonly DELETE_BLUEPRINT: string[] = ["glue:DeleteBlueprint"];
	/** IAM actions required for the DeleteCatalog API call. */
	static readonly DELETE_CATALOG: string[] = ["glue:DeleteCatalog"];
	/** IAM actions required for the DeleteClassifier API call. */
	static readonly DELETE_CLASSIFIER: string[] = ["glue:DeleteClassifier"];
	/** IAM actions required for the DeleteColumnStatisticsForPartition API call. */
	static readonly DELETE_COLUMN_STATISTICS_FOR_PARTITION: string[] = [
		"glue:UpdatePartition",
	];
	/** IAM actions required for the DeleteColumnStatisticsForTable API call. */
	static readonly DELETE_COLUMN_STATISTICS_FOR_TABLE: string[] = [
		"glue:UpdateTable",
	];
	/** IAM actions required for the DeleteColumnStatisticsTaskSettings API call. */
	static readonly DELETE_COLUMN_STATISTICS_TASK_SETTINGS: string[] = [
		"glue:DeleteColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = ["glue:DeleteConnection"];
	/** IAM actions required for the DeleteConnectionType API call. */
	static readonly DELETE_CONNECTION_TYPE: string[] = [
		"glue:DeleteConnectionType",
	];
	/** IAM actions required for the DeleteCrawler API call. */
	static readonly DELETE_CRAWLER: string[] = ["glue:DeleteCrawler"];
	/** IAM actions required for the DeleteCustomEntityType API call. */
	static readonly DELETE_CUSTOM_ENTITY_TYPE: string[] = [
		"glue:DeleteCustomEntityType",
	];
	/** IAM actions required for the DeleteDataQualityRuleset API call. */
	static readonly DELETE_DATA_QUALITY_RULESET: string[] = [
		"glue:DeleteDataQualityRuleset",
	];
	/** IAM actions required for the DeleteDatabase API call. */
	static readonly DELETE_DATABASE: string[] = ["glue:DeleteDatabase"];
	/** IAM actions required for the DeleteDevEndpoint API call. */
	static readonly DELETE_DEV_ENDPOINT: string[] = ["glue:DeleteDevEndpoint"];
	/** IAM actions required for the DeleteFormType API call. */
	static readonly DELETE_FORM_TYPE: string[] = [];
	/** IAM actions required for the DeleteGlossary API call. */
	static readonly DELETE_GLOSSARY: string[] = [];
	/** IAM actions required for the DeleteGlossaryTerm API call. */
	static readonly DELETE_GLOSSARY_TERM: string[] = [];
	/** IAM actions required for the DeleteGlueIdentityCenterConfiguration API call. */
	static readonly DELETE_GLUE_IDENTITY_CENTER_CONFIGURATION: string[] = [
		"glue:DeleteGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["glue:DeleteIntegration"];
	/** IAM actions required for the DeleteIntegrationResourceProperty API call. */
	static readonly DELETE_INTEGRATION_RESOURCE_PROPERTY: string[] = [
		"glue:DeleteIntegrationResourceProperty",
	];
	/** IAM actions required for the DeleteIntegrationTableProperties API call. */
	static readonly DELETE_INTEGRATION_TABLE_PROPERTIES: string[] = [
		"glue:DeleteIntegrationTableProperties",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["glue:DeleteJob"];
	/** IAM actions required for the DeleteMLTransform API call. */
	static readonly DELETE_ML_TRANSFORM: string[] = ["glue:DeleteMLTransform"];
	/** IAM actions required for the DeletePartition API call. */
	static readonly DELETE_PARTITION: string[] = ["glue:DeletePartition"];
	/** IAM actions required for the DeletePartitionIndex API call. */
	static readonly DELETE_PARTITION_INDEX: string[] = ["glue:UpdateTable"];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DELETE_REGISTRY: string[] = ["glue:DeleteRegistry"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DELETE_SCHEMA: string[] = ["glue:DeleteSchema"];
	/** IAM actions required for the DeleteSchemaVersions API call. */
	static readonly DELETE_SCHEMA_VERSIONS: string[] = [
		"glue:DeleteSchemaVersions",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DELETE_SECURITY_CONFIGURATION: string[] = [
		"glue:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DELETE_SESSION: string[] = ["glue:DeleteSession"];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DELETE_TABLE: string[] = ["glue:DeleteTable"];
	/** IAM actions required for the DeleteTableOptimizer API call. */
	static readonly DELETE_TABLE_OPTIMIZER: string[] = [
		"glue:DeleteTableOptimizer",
	];
	/** IAM actions required for the DeleteTableVersion API call. */
	static readonly DELETE_TABLE_VERSION: string[] = ["glue:DeleteTableVersion"];
	/** IAM actions required for the DeleteTrigger API call. */
	static readonly DELETE_TRIGGER: string[] = ["glue:DeleteTrigger"];
	/** IAM actions required for the DeleteUsageProfile API call. */
	static readonly DELETE_USAGE_PROFILE: string[] = ["glue:DeleteUsageProfile"];
	/** IAM actions required for the DeleteUserDefinedFunction API call. */
	static readonly DELETE_USER_DEFINED_FUNCTION: string[] = [
		"glue:DeleteUserDefinedFunction",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = ["glue:DeleteWorkflow"];
	/** IAM actions required for the DescribeConnectionType API call. */
	static readonly DESCRIBE_CONNECTION_TYPE: string[] = [
		"glue:DescribeConnectionType",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DESCRIBE_ENTITY: string[] = ["glue:DescribeEntity"];
	/** IAM actions required for the DescribeInboundIntegrations API call. */
	static readonly DESCRIBE_INBOUND_INTEGRATIONS: string[] = [
		"glue:DescribeInboundIntegrations",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DESCRIBE_INTEGRATIONS: string[] = [
		"glue:DescribeIntegrations",
	];
	/** IAM actions required for the DisassociateGlossaryTerms API call. */
	static readonly DISASSOCIATE_GLOSSARY_TERMS: string[] = [];
	/** IAM actions required for the GetAsset API call. */
	static readonly GET_ASSET: string[] = [];
	/** IAM actions required for the GetAssetType API call. */
	static readonly GET_ASSET_TYPE: string[] = [];
	/** IAM actions required for the GetBlueprint API call. */
	static readonly GET_BLUEPRINT: string[] = ["glue:GetBlueprint"];
	/** IAM actions required for the GetBlueprintRun API call. */
	static readonly GET_BLUEPRINT_RUN: string[] = ["glue:GetBlueprintRun"];
	/** IAM actions required for the GetBlueprintRuns API call. */
	static readonly GET_BLUEPRINT_RUNS: string[] = ["glue:GetBlueprintRuns"];
	/** IAM actions required for the GetCatalog API call. */
	static readonly GET_CATALOG: string[] = ["glue:GetCatalog"];
	/** IAM actions required for the GetCatalogImportStatus API call. */
	static readonly GET_CATALOG_IMPORT_STATUS: string[] = [
		"glue:GetCatalogImportStatus",
	];
	/** IAM actions required for the GetCatalogs API call. */
	static readonly GET_CATALOGS: string[] = [
		"athena:GetCatalogs",
		"glue:GetCatalogs",
	];
	/** IAM actions required for the GetClassifier API call. */
	static readonly GET_CLASSIFIER: string[] = ["glue:GetClassifier"];
	/** IAM actions required for the GetClassifiers API call. */
	static readonly GET_CLASSIFIERS: string[] = ["glue:GetClassifiers"];
	/** IAM actions required for the GetColumnStatisticsForPartition API call. */
	static readonly GET_COLUMN_STATISTICS_FOR_PARTITION: string[] = [
		"glue:GetPartition",
	];
	/** IAM actions required for the GetColumnStatisticsForTable API call. */
	static readonly GET_COLUMN_STATISTICS_FOR_TABLE: string[] = ["glue:GetTable"];
	/** IAM actions required for the GetColumnStatisticsTaskRun API call. */
	static readonly GET_COLUMN_STATISTICS_TASK_RUN: string[] = [
		"glue:GetColumnStatisticsTaskRun",
	];
	/** IAM actions required for the GetColumnStatisticsTaskRuns API call. */
	static readonly GET_COLUMN_STATISTICS_TASK_RUNS: string[] = [
		"glue:GetColumnStatisticsTaskRuns",
	];
	/** IAM actions required for the GetColumnStatisticsTaskSettings API call. */
	static readonly GET_COLUMN_STATISTICS_TASK_SETTINGS: string[] = [
		"glue:GetColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = ["glue:GetConnection"];
	/** IAM actions required for the GetConnections API call. */
	static readonly GET_CONNECTIONS: string[] = ["glue:GetConnections"];
	/** IAM actions required for the GetCrawler API call. */
	static readonly GET_CRAWLER: string[] = ["glue:GetCrawler"];
	/** IAM actions required for the GetCrawlerMetrics API call. */
	static readonly GET_CRAWLER_METRICS: string[] = ["glue:GetCrawlerMetrics"];
	/** IAM actions required for the GetCrawlers API call. */
	static readonly GET_CRAWLERS: string[] = ["glue:GetCrawlers"];
	/** IAM actions required for the GetCustomEntityType API call. */
	static readonly GET_CUSTOM_ENTITY_TYPE: string[] = [
		"glue:GetCustomEntityType",
	];
	/** IAM actions required for the GetDashboardUrl API call. */
	static readonly GET_DASHBOARD_URL: string[] = ["glue:GetDashboardUrl"];
	/** IAM actions required for the GetDataCatalogEncryptionSettings API call. */
	static readonly GET_DATA_CATALOG_ENCRYPTION_SETTINGS: string[] = [
		"glue:GetDataCatalogEncryptionSettings",
	];
	/** IAM actions required for the GetDataCatalogExportConfiguration API call. */
	static readonly GET_DATA_CATALOG_EXPORT_CONFIGURATION: string[] = [];
	/** IAM actions required for the GetDataQualityModel API call. */
	static readonly GET_DATA_QUALITY_MODEL: string[] = [
		"glue:GetDataQualityModel",
	];
	/** IAM actions required for the GetDataQualityModelResult API call. */
	static readonly GET_DATA_QUALITY_MODEL_RESULT: string[] = [
		"glue:GetDataQualityModelResult",
	];
	/** IAM actions required for the GetDataQualityResult API call. */
	static readonly GET_DATA_QUALITY_RESULT: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the GetDataQualityRuleRecommendationRun API call. */
	static readonly GET_DATA_QUALITY_RULE_RECOMMENDATION_RUN: string[] = [
		"glue:GetDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the GetDataQualityRuleset API call. */
	static readonly GET_DATA_QUALITY_RULESET: string[] = [
		"glue:GetDataQualityRuleset",
	];
	/** IAM actions required for the GetDataQualityRulesetEvaluationRun API call. */
	static readonly GET_DATA_QUALITY_RULESET_EVALUATION_RUN: string[] = [
		"glue:GetDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the GetDatabase API call. */
	static readonly GET_DATABASE: string[] = ["glue:GetDatabase"];
	/** IAM actions required for the GetDatabases API call. */
	static readonly GET_DATABASES: string[] = ["glue:GetDatabases"];
	/** IAM actions required for the GetDataflowGraph API call. */
	static readonly GET_DATAFLOW_GRAPH: string[] = ["glue:GetDataflowGraph"];
	/** IAM actions required for the GetDevEndpoint API call. */
	static readonly GET_DEV_ENDPOINT: string[] = ["glue:GetDevEndpoint"];
	/** IAM actions required for the GetDevEndpoints API call. */
	static readonly GET_DEV_ENDPOINTS: string[] = ["glue:GetDevEndpoints"];
	/** IAM actions required for the GetEntityRecords API call. */
	static readonly GET_ENTITY_RECORDS: string[] = ["glue:GetEntityRecords"];
	/** IAM actions required for the GetFormType API call. */
	static readonly GET_FORM_TYPE: string[] = [];
	/** IAM actions required for the GetGlossary API call. */
	static readonly GET_GLOSSARY: string[] = [];
	/** IAM actions required for the GetGlossaryTerm API call. */
	static readonly GET_GLOSSARY_TERM: string[] = [];
	/** IAM actions required for the GetGlueIdentityCenterConfiguration API call. */
	static readonly GET_GLUE_IDENTITY_CENTER_CONFIGURATION: string[] = [
		"glue:GetGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the GetIntegrationResourceProperty API call. */
	static readonly GET_INTEGRATION_RESOURCE_PROPERTY: string[] = [
		"glue:GetIntegrationResourceProperty",
	];
	/** IAM actions required for the GetIntegrationTableProperties API call. */
	static readonly GET_INTEGRATION_TABLE_PROPERTIES: string[] = [
		"glue:GetIntegrationTableProperties",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["glue:GetJob", "iam:PassRole"];
	/** IAM actions required for the GetJobBookmark API call. */
	static readonly GET_JOB_BOOKMARK: string[] = ["glue:GetJobBookmark"];
	/** IAM actions required for the GetJobRun API call. */
	static readonly GET_JOB_RUN: string[] = ["glue:GetJobRun"];
	/** IAM actions required for the GetJobRuns API call. */
	static readonly GET_JOB_RUNS: string[] = ["glue:GetJobRuns"];
	/** IAM actions required for the GetJobs API call. */
	static readonly GET_JOBS: string[] = ["glue:GetJobs", "iam:PassRole"];
	/** IAM actions required for the GetMLTaskRun API call. */
	static readonly GET_ML_TASK_RUN: string[] = ["glue:GetMLTaskRun"];
	/** IAM actions required for the GetMLTaskRuns API call. */
	static readonly GET_ML_TASK_RUNS: string[] = ["glue:GetMLTaskRuns"];
	/** IAM actions required for the GetMLTransform API call. */
	static readonly GET_ML_TRANSFORM: string[] = ["glue:GetMLTransform"];
	/** IAM actions required for the GetMLTransforms API call. */
	static readonly GET_ML_TRANSFORMS: string[] = ["glue:GetMLTransforms"];
	/** IAM actions required for the GetMapping API call. */
	static readonly GET_MAPPING: string[] = ["glue:GetMapping"];
	/** IAM actions required for the GetMaterializedViewRefreshTaskRun API call. */
	static readonly GET_MATERIALIZED_VIEW_REFRESH_TASK_RUN: string[] = [];
	/** IAM actions required for the GetPartition API call. */
	static readonly GET_PARTITION: string[] = ["glue:GetPartition"];
	/** IAM actions required for the GetPartitionIndexes API call. */
	static readonly GET_PARTITION_INDEXES: string[] = [];
	/** IAM actions required for the GetPartitions API call. */
	static readonly GET_PARTITIONS: string[] = ["glue:GetPartitions"];
	/** IAM actions required for the GetPlan API call. */
	static readonly GET_PLAN: string[] = ["glue:GetPlan"];
	/** IAM actions required for the GetRegistry API call. */
	static readonly GET_REGISTRY: string[] = ["glue:GetRegistry"];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly GET_RESOURCE_POLICIES: string[] = [];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [];
	/** IAM actions required for the GetSchema API call. */
	static readonly GET_SCHEMA: string[] = ["glue:GetSchema"];
	/** IAM actions required for the GetSchemaByDefinition API call. */
	static readonly GET_SCHEMA_BY_DEFINITION: string[] = [
		"glue:GetSchemaByDefinition",
	];
	/** IAM actions required for the GetSchemaVersion API call. */
	static readonly GET_SCHEMA_VERSION: string[] = ["glue:GetSchemaVersion"];
	/** IAM actions required for the GetSchemaVersionsDiff API call. */
	static readonly GET_SCHEMA_VERSIONS_DIFF: string[] = [
		"glue:GetSchemaVersionsDiff",
	];
	/** IAM actions required for the GetSecurityConfiguration API call. */
	static readonly GET_SECURITY_CONFIGURATION: string[] = [
		"glue:GetSecurityConfiguration",
	];
	/** IAM actions required for the GetSecurityConfigurations API call. */
	static readonly GET_SECURITY_CONFIGURATIONS: string[] = [
		"glue:GetSecurityConfigurations",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["glue:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly GET_SESSION_ENDPOINT: string[] = ["glue:GetSessionEndpoint"];
	/** IAM actions required for the GetStatement API call. */
	static readonly GET_STATEMENT: string[] = ["glue:GetStatement"];
	/** IAM actions required for the GetTable API call. */
	static readonly GET_TABLE: string[] = ["athena:GetTable", "glue:GetTable"];
	/** IAM actions required for the GetTableOptimizer API call. */
	static readonly GET_TABLE_OPTIMIZER: string[] = ["glue:GetTableOptimizer"];
	/** IAM actions required for the GetTableVersion API call. */
	static readonly GET_TABLE_VERSION: string[] = ["glue:GetTableVersion"];
	/** IAM actions required for the GetTableVersions API call. */
	static readonly GET_TABLE_VERSIONS: string[] = ["glue:GetTableVersions"];
	/** IAM actions required for the GetTables API call. */
	static readonly GET_TABLES: string[] = ["athena:GetTables", "glue:GetTables"];
	/** IAM actions required for the GetTags API call. */
	static readonly GET_TAGS: string[] = ["glue:GetTags"];
	/** IAM actions required for the GetTrigger API call. */
	static readonly GET_TRIGGER: string[] = ["glue:GetTrigger"];
	/** IAM actions required for the GetTriggers API call. */
	static readonly GET_TRIGGERS: string[] = ["glue:GetTriggers"];
	/** IAM actions required for the GetUnfilteredPartitionMetadata API call. */
	static readonly GET_UNFILTERED_PARTITION_METADATA: string[] = [];
	/** IAM actions required for the GetUnfilteredPartitionsMetadata API call. */
	static readonly GET_UNFILTERED_PARTITIONS_METADATA: string[] = [];
	/** IAM actions required for the GetUnfilteredTableMetadata API call. */
	static readonly GET_UNFILTERED_TABLE_METADATA: string[] = [];
	/** IAM actions required for the GetUsageProfile API call. */
	static readonly GET_USAGE_PROFILE: string[] = ["glue:GetUsageProfile"];
	/** IAM actions required for the GetUserDefinedFunction API call. */
	static readonly GET_USER_DEFINED_FUNCTION: string[] = [
		"glue:GetUserDefinedFunction",
	];
	/** IAM actions required for the GetUserDefinedFunctions API call. */
	static readonly GET_USER_DEFINED_FUNCTIONS: string[] = [
		"glue:GetUserDefinedFunctions",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = ["glue:GetWorkflow"];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly GET_WORKFLOW_RUN: string[] = ["glue:GetWorkflowRun"];
	/** IAM actions required for the GetWorkflowRunProperties API call. */
	static readonly GET_WORKFLOW_RUN_PROPERTIES: string[] = [
		"glue:GetWorkflowRunProperties",
	];
	/** IAM actions required for the GetWorkflowRuns API call. */
	static readonly GET_WORKFLOW_RUNS: string[] = ["glue:GetWorkflowRuns"];
	/** IAM actions required for the ImportCatalogToGlue API call. */
	static readonly IMPORT_CATALOG_TO_GLUE: string[] = [
		"glue:ImportCatalogToGlue",
	];
	/** IAM actions required for the ListAssetTypes API call. */
	static readonly LIST_ASSET_TYPES: string[] = [];
	/** IAM actions required for the ListBlueprints API call. */
	static readonly LIST_BLUEPRINTS: string[] = ["glue:ListBlueprints"];
	/** IAM actions required for the ListColumnStatisticsTaskRuns API call. */
	static readonly LIST_COLUMN_STATISTICS_TASK_RUNS: string[] = [
		"glue:ListColumnStatisticsTaskRuns",
	];
	/** IAM actions required for the ListConnectionTypes API call. */
	static readonly LIST_CONNECTION_TYPES: string[] = [
		"glue:ListConnectionTypes",
	];
	/** IAM actions required for the ListCrawlers API call. */
	static readonly LIST_CRAWLERS: string[] = ["glue:ListCrawlers"];
	/** IAM actions required for the ListCrawls API call. */
	static readonly LIST_CRAWLS: string[] = ["glue:ListCrawls"];
	/** IAM actions required for the ListCustomEntityTypes API call. */
	static readonly LIST_CUSTOM_ENTITY_TYPES: string[] = [
		"glue:ListCustomEntityTypes",
	];
	/** IAM actions required for the ListDataQualityResults API call. */
	static readonly LIST_DATA_QUALITY_RESULTS: string[] = [
		"glue:ListDataQualityResults",
	];
	/** IAM actions required for the ListDataQualityRuleRecommendationRuns API call. */
	static readonly LIST_DATA_QUALITY_RULE_RECOMMENDATION_RUNS: string[] = [
		"glue:ListDataQualityRuleRecommendationRuns",
	];
	/** IAM actions required for the ListDataQualityRulesetEvaluationRuns API call. */
	static readonly LIST_DATA_QUALITY_RULESET_EVALUATION_RUNS: string[] = [
		"glue:ListDataQualityRulesetEvaluationRuns",
	];
	/** IAM actions required for the ListDataQualityRulesets API call. */
	static readonly LIST_DATA_QUALITY_RULESETS: string[] = [
		"glue:ListDataQualityRulesets",
	];
	/** IAM actions required for the ListDataQualityStatisticAnnotations API call. */
	static readonly LIST_DATA_QUALITY_STATISTIC_ANNOTATIONS: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the ListDataQualityStatistics API call. */
	static readonly LIST_DATA_QUALITY_STATISTICS: string[] = [
		"glue:GetDataQualityResult",
	];
	/** IAM actions required for the ListDevEndpoints API call. */
	static readonly LIST_DEV_ENDPOINTS: string[] = ["glue:ListDevEndpoints"];
	/** IAM actions required for the ListEntities API call. */
	static readonly LIST_ENTITIES: string[] = ["glue:ListEntities"];
	/** IAM actions required for the ListFormTypes API call. */
	static readonly LIST_FORM_TYPES: string[] = [];
	/** IAM actions required for the ListGlossaries API call. */
	static readonly LIST_GLOSSARIES: string[] = [];
	/** IAM actions required for the ListGlossaryTerms API call. */
	static readonly LIST_GLOSSARY_TERMS: string[] = [];
	/** IAM actions required for the ListIntegrationResourceProperties API call. */
	static readonly LIST_INTEGRATION_RESOURCE_PROPERTIES: string[] = [
		"glue:ListIntegrationResourceProperties",
	];
	/** IAM actions required for the ListIterableForms API call. */
	static readonly LIST_ITERABLE_FORMS: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["glue:ListJobs"];
	/** IAM actions required for the ListMLTransforms API call. */
	static readonly LIST_ML_TRANSFORMS: string[] = ["glue:ListMLTransforms"];
	/** IAM actions required for the ListMaterializedViewRefreshTaskRuns API call. */
	static readonly LIST_MATERIALIZED_VIEW_REFRESH_TASK_RUNS: string[] = [];
	/** IAM actions required for the ListRegistries API call. */
	static readonly LIST_REGISTRIES: string[] = ["glue:ListRegistries"];
	/** IAM actions required for the ListSchemaVersions API call. */
	static readonly LIST_SCHEMA_VERSIONS: string[] = ["glue:ListSchemaVersions"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly LIST_SCHEMAS: string[] = ["glue:ListSchemas"];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["glue:ListSessions"];
	/** IAM actions required for the ListStatements API call. */
	static readonly LIST_STATEMENTS: string[] = ["glue:ListStatements"];
	/** IAM actions required for the ListTableOptimizerRuns API call. */
	static readonly LIST_TABLE_OPTIMIZER_RUNS: string[] = [
		"glue:ListTableOptimizerRuns",
	];
	/** IAM actions required for the ListTriggers API call. */
	static readonly LIST_TRIGGERS: string[] = ["glue:ListTriggers"];
	/** IAM actions required for the ListUsageProfiles API call. */
	static readonly LIST_USAGE_PROFILES: string[] = ["glue:ListUsageProfiles"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = ["glue:ListWorkflows"];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly MODIFY_INTEGRATION: string[] = ["glue:ModifyIntegration"];
	/** IAM actions required for the PutAsset API call. */
	static readonly PUT_ASSET: string[] = [];
	/** IAM actions required for the PutAssetType API call. */
	static readonly PUT_ASSET_TYPE: string[] = [];
	/** IAM actions required for the PutAttachment API call. */
	static readonly PUT_ATTACHMENT: string[] = [];
	/** IAM actions required for the PutDataCatalogEncryptionSettings API call. */
	static readonly PUT_DATA_CATALOG_ENCRYPTION_SETTINGS: string[] = [
		"iam:PassRole",
		"glue:PutDataCatalogEncryptionSettings",
	];
	/** IAM actions required for the PutDataCatalogExportConfiguration API call. */
	static readonly PUT_DATA_CATALOG_EXPORT_CONFIGURATION: string[] = [];
	/** IAM actions required for the PutDataQualityProfileAnnotation API call. */
	static readonly PUT_DATA_QUALITY_PROFILE_ANNOTATION: string[] = [
		"glue:PutDataQualityProfileAnnotation",
	];
	/** IAM actions required for the PutFormType API call. */
	static readonly PUT_FORM_TYPE: string[] = [];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [];
	/** IAM actions required for the PutSchemaVersionMetadata API call. */
	static readonly PUT_SCHEMA_VERSION_METADATA: string[] = [
		"glue:PutSchemaVersionMetadata",
	];
	/** IAM actions required for the PutWorkflowRunProperties API call. */
	static readonly PUT_WORKFLOW_RUN_PROPERTIES: string[] = [
		"glue:PutWorkflowRunProperties",
	];
	/** IAM actions required for the QuerySchemaVersionMetadata API call. */
	static readonly QUERY_SCHEMA_VERSION_METADATA: string[] = [
		"glue:QuerySchemaVersionMetadata",
	];
	/** IAM actions required for the RegisterConnectionType API call. */
	static readonly REGISTER_CONNECTION_TYPE: string[] = [
		"glue:RegisterConnectionType",
		"glue:TagResource",
	];
	/** IAM actions required for the RegisterSchemaVersion API call. */
	static readonly REGISTER_SCHEMA_VERSION: string[] = [
		"glue:RegisterSchemaVersion",
	];
	/** IAM actions required for the RemoveSchemaVersionMetadata API call. */
	static readonly REMOVE_SCHEMA_VERSION_METADATA: string[] = [
		"glue:RemoveSchemaVersionMetadata",
	];
	/** IAM actions required for the ResetJobBookmark API call. */
	static readonly RESET_JOB_BOOKMARK: string[] = ["glue:ResetJobBookmark"];
	/** IAM actions required for the ResumeWorkflowRun API call. */
	static readonly RESUME_WORKFLOW_RUN: string[] = ["glue:ResumeWorkflowRun"];
	/** IAM actions required for the RunStatement API call. */
	static readonly RUN_STATEMENT: string[] = ["glue:RunStatement"];
	/** IAM actions required for the SearchAssets API call. */
	static readonly SEARCH_ASSETS: string[] = [];
	/** IAM actions required for the SearchTables API call. */
	static readonly SEARCH_TABLES: string[] = ["glue:SearchTables"];
	/** IAM actions required for the StartBlueprintRun API call. */
	static readonly START_BLUEPRINT_RUN: string[] = [
		"iam:PassRole",
		"glue:StartBlueprintRun",
	];
	/** IAM actions required for the StartColumnStatisticsTaskRun API call. */
	static readonly START_COLUMN_STATISTICS_TASK_RUN: string[] = [
		"iam:PassRole",
		"glue:StartColumnStatisticsTaskRun",
	];
	/** IAM actions required for the StartColumnStatisticsTaskRunSchedule API call. */
	static readonly START_COLUMN_STATISTICS_TASK_RUN_SCHEDULE: string[] = [
		"glue:StartColumnStatisticsTaskRunSchedule",
	];
	/** IAM actions required for the StartCrawler API call. */
	static readonly START_CRAWLER: string[] = ["glue:StartCrawler"];
	/** IAM actions required for the StartCrawlerSchedule API call. */
	static readonly START_CRAWLER_SCHEDULE: string[] = [
		"glue:StartCrawlerSchedule",
	];
	/** IAM actions required for the StartDataQualityRuleRecommendationRun API call. */
	static readonly START_DATA_QUALITY_RULE_RECOMMENDATION_RUN: string[] = [
		"iam:PassRole",
		"glue:StartDataQualityRuleRecommendationRun",
	];
	/** IAM actions required for the StartDataQualityRulesetEvaluationRun API call. */
	static readonly START_DATA_QUALITY_RULESET_EVALUATION_RUN: string[] = [
		"iam:PassRole",
		"glue:StartDataQualityRulesetEvaluationRun",
	];
	/** IAM actions required for the StartExportLabelsTaskRun API call. */
	static readonly START_EXPORT_LABELS_TASK_RUN: string[] = [
		"glue:StartExportLabelsTaskRun",
	];
	/** IAM actions required for the StartImportLabelsTaskRun API call. */
	static readonly START_IMPORT_LABELS_TASK_RUN: string[] = [
		"glue:StartImportLabelsTaskRun",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly START_JOB_RUN: string[] = [
		"glue:GetUsageProfile",
		"glue:StartJobRun",
	];
	/** IAM actions required for the StartMLEvaluationTaskRun API call. */
	static readonly START_ML_EVALUATION_TASK_RUN: string[] = [
		"glue:StartMLEvaluationTaskRun",
	];
	/** IAM actions required for the StartMLLabelingSetGenerationTaskRun API call. */
	static readonly START_ML_LABELING_SET_GENERATION_TASK_RUN: string[] = [
		"glue:StartMLLabelingSetGenerationTaskRun",
	];
	/** IAM actions required for the StartMaterializedViewRefreshTaskRun API call. */
	static readonly START_MATERIALIZED_VIEW_REFRESH_TASK_RUN: string[] = [];
	/** IAM actions required for the StartTrigger API call. */
	static readonly START_TRIGGER: string[] = ["glue:StartTrigger"];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly START_WORKFLOW_RUN: string[] = ["glue:StartWorkflowRun"];
	/** IAM actions required for the StopColumnStatisticsTaskRun API call. */
	static readonly STOP_COLUMN_STATISTICS_TASK_RUN: string[] = [
		"glue:StopColumnStatisticsTaskRun",
	];
	/** IAM actions required for the StopColumnStatisticsTaskRunSchedule API call. */
	static readonly STOP_COLUMN_STATISTICS_TASK_RUN_SCHEDULE: string[] = [
		"glue:StopColumnStatisticsTaskRunSchedule",
	];
	/** IAM actions required for the StopCrawler API call. */
	static readonly STOP_CRAWLER: string[] = ["glue:StopCrawler"];
	/** IAM actions required for the StopCrawlerSchedule API call. */
	static readonly STOP_CRAWLER_SCHEDULE: string[] = [
		"glue:StopCrawlerSchedule",
	];
	/** IAM actions required for the StopMaterializedViewRefreshTaskRun API call. */
	static readonly STOP_MATERIALIZED_VIEW_REFRESH_TASK_RUN: string[] = [];
	/** IAM actions required for the StopSession API call. */
	static readonly STOP_SESSION: string[] = ["glue:StopSession"];
	/** IAM actions required for the StopTrigger API call. */
	static readonly STOP_TRIGGER: string[] = ["glue:StopTrigger"];
	/** IAM actions required for the StopWorkflowRun API call. */
	static readonly STOP_WORKFLOW_RUN: string[] = ["glue:StopWorkflowRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["glue:TagResource"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TEST_CONNECTION: string[] = [
		"iam:PassRole",
		"glue:TestConnection",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["glue:UntagResource"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UPDATE_ASSET: string[] = [];
	/** IAM actions required for the UpdateBlueprint API call. */
	static readonly UPDATE_BLUEPRINT: string[] = ["glue:UpdateBlueprint"];
	/** IAM actions required for the UpdateCatalog API call. */
	static readonly UPDATE_CATALOG: string[] = [
		"iam:PassRole",
		"glue:UpdateCatalog",
	];
	/** IAM actions required for the UpdateClassifier API call. */
	static readonly UPDATE_CLASSIFIER: string[] = ["glue:UpdateClassifier"];
	/** IAM actions required for the UpdateColumnStatisticsForPartition API call. */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_PARTITION: string[] = [
		"glue:UpdatePartition",
	];
	/** IAM actions required for the UpdateColumnStatisticsForTable API call. */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_TABLE: string[] = [
		"glue:UpdateTable",
	];
	/** IAM actions required for the UpdateColumnStatisticsTaskSettings API call. */
	static readonly UPDATE_COLUMN_STATISTICS_TASK_SETTINGS: string[] = [
		"iam:PassRole",
		"glue:UpdateColumnStatisticsTaskSettings",
	];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = [
		"iam:PassRole",
		"glue:UpdateConnection",
	];
	/** IAM actions required for the UpdateCrawler API call. */
	static readonly UPDATE_CRAWLER: string[] = [
		"iam:PassRole",
		"glue:UpdateCrawler",
	];
	/** IAM actions required for the UpdateCrawlerSchedule API call. */
	static readonly UPDATE_CRAWLER_SCHEDULE: string[] = [
		"glue:UpdateCrawlerSchedule",
	];
	/** IAM actions required for the UpdateDataQualityRuleset API call. */
	static readonly UPDATE_DATA_QUALITY_RULESET: string[] = [
		"glue:UpdateDataQualityRuleset",
	];
	/** IAM actions required for the UpdateDatabase API call. */
	static readonly UPDATE_DATABASE: string[] = ["glue:UpdateDatabase"];
	/** IAM actions required for the UpdateDevEndpoint API call. */
	static readonly UPDATE_DEV_ENDPOINT: string[] = ["glue:UpdateDevEndpoint"];
	/** IAM actions required for the UpdateGlossary API call. */
	static readonly UPDATE_GLOSSARY: string[] = [];
	/** IAM actions required for the UpdateGlossaryTerm API call. */
	static readonly UPDATE_GLOSSARY_TERM: string[] = [];
	/** IAM actions required for the UpdateGlueIdentityCenterConfiguration API call. */
	static readonly UPDATE_GLUE_IDENTITY_CENTER_CONFIGURATION: string[] = [
		"glue:UpdateGlueIdentityCenterConfiguration",
	];
	/** IAM actions required for the UpdateIntegrationResourceProperty API call. */
	static readonly UPDATE_INTEGRATION_RESOURCE_PROPERTY: string[] = [
		"iam:PassRole",
		"glue:UpdateIntegrationResourceProperty",
	];
	/** IAM actions required for the UpdateIntegrationTableProperties API call. */
	static readonly UPDATE_INTEGRATION_TABLE_PROPERTIES: string[] = [
		"glue:UpdateIntegrationTableProperties",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UPDATE_JOB: string[] = [
		"glue:GetUsageProfile",
		"iam:PassRole",
		"glue:UpdateJob",
	];
	/** IAM actions required for the UpdateJobFromSourceControl API call. */
	static readonly UPDATE_JOB_FROM_SOURCE_CONTROL: string[] = [
		"glue:UpdateJobFromSourceControl",
	];
	/** IAM actions required for the UpdateMLTransform API call. */
	static readonly UPDATE_ML_TRANSFORM: string[] = [
		"iam:PassRole",
		"glue:UpdateMLTransform",
	];
	/** IAM actions required for the UpdatePartition API call. */
	static readonly UPDATE_PARTITION: string[] = ["glue:UpdatePartition"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UPDATE_REGISTRY: string[] = ["glue:UpdateRegistry"];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UPDATE_SCHEMA: string[] = ["glue:UpdateSchema"];
	/** IAM actions required for the UpdateSourceControlFromJob API call. */
	static readonly UPDATE_SOURCE_CONTROL_FROM_JOB: string[] = [
		"glue:UpdateSourceControlFromJob",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UPDATE_TABLE: string[] = [
		"glue:PassConnection",
		"iam:PassRole",
		"glue:UpdateTable",
	];
	/** IAM actions required for the UpdateTableOptimizer API call. */
	static readonly UPDATE_TABLE_OPTIMIZER: string[] = [
		"glue:PassConnection",
		"iam:PassRole",
		"glue:UpdateTableOptimizer",
	];
	/** IAM actions required for the UpdateTrigger API call. */
	static readonly UPDATE_TRIGGER: string[] = ["glue:UpdateTrigger"];
	/** IAM actions required for the UpdateUsageProfile API call. */
	static readonly UPDATE_USAGE_PROFILE: string[] = ["glue:UpdateUsageProfile"];
	/** IAM actions required for the UpdateUserDefinedFunction API call. */
	static readonly UPDATE_USER_DEFINED_FUNCTION: string[] = [
		"glue:UpdateUserDefinedFunction",
	];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UPDATE_WORKFLOW: string[] = ["glue:UpdateWorkflow"];
}

/**
 * Condition key constants and builders for glue.
 */
export class GlueConditions {
	/** Condition keys applicable to the BatchCreatePartition action. */
	static readonly BATCH_CREATE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteConnection action. */
	static readonly BATCH_DELETE_CONNECTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeletePartition action. */
	static readonly BATCH_DELETE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteTable action. */
	static readonly BATCH_DELETE_TABLE_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchDeleteTableVersion action. */
	static readonly BATCH_DELETE_TABLE_VERSION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchGetPartition action. */
	static readonly BATCH_GET_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the BatchUpdatePartition action. */
	static readonly BATCH_UPDATE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateBlueprint action. */
	static readonly CREATE_BLUEPRINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCatalog action. */
	static readonly CREATE_CATALOG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateCrawler action. */
	static readonly CREATE_CRAWLER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomEntityType action. */
	static readonly CREATE_CUSTOM_ENTITY_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataQualityRuleset action. */
	static readonly CREATE_DATA_QUALITY_RULESET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatabase action. */
	static readonly CREATE_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateDevEndpoint action. */
	static readonly CREATE_DEV_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CREATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegrationResourceProperty action. */
	static readonly CREATE_INTEGRATION_RESOURCE_PROPERTY_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the CreateMLTransform action. */
	static readonly CREATE_ML_TRANSFORM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartition action. */
	static readonly CREATE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreatePartitionIndex action. */
	static readonly CREATE_PARTITION_INDEX_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CREATE_REGISTRY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchema action. */
	static readonly CREATE_SCHEMA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CREATE_SESSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CREATE_TABLE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateTrigger action. */
	static readonly CREATE_TRIGGER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUsageProfile action. */
	static readonly CREATE_USAGE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUserDefinedFunction action. */
	static readonly CREATE_USER_DEFINED_FUNCTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCatalog action. */
	static readonly DELETE_CATALOG_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteColumnStatisticsForPartition action. */
	static readonly DELETE_COLUMN_STATISTICS_FOR_PARTITION_CONDITION_KEYS: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the DeleteColumnStatisticsForTable action. */
	static readonly DELETE_COLUMN_STATISTICS_FOR_TABLE_CONDITION_KEYS: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the DeleteConnection action. */
	static readonly DELETE_CONNECTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteDatabase action. */
	static readonly DELETE_DATABASE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteIntegration action. */
	static readonly DELETE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePartition action. */
	static readonly DELETE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeletePartitionIndex action. */
	static readonly DELETE_PARTITION_INDEX_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteTable action. */
	static readonly DELETE_TABLE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteTableVersion action. */
	static readonly DELETE_TABLE_VERSION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DeleteUserDefinedFunction action. */
	static readonly DELETE_USER_DEFINED_FUNCTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DESCRIBE_INTEGRATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the FederateAuthorization action. */
	static readonly FEDERATE_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
	];
	/** Condition keys applicable to the GetCatalog action. */
	static readonly GET_CATALOG_CONDITION_KEYS: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetCatalogImportStatus action. */
	static readonly GET_CATALOG_IMPORT_STATUS_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetCatalogs action. */
	static readonly GET_CATALOGS_CONDITION_KEYS: string[] = [
		"glue:EnabledForRedshiftAutoDiscovery",
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetColumnStatisticsForPartition action. */
	static readonly GET_COLUMN_STATISTICS_FOR_PARTITION_CONDITION_KEYS: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the GetColumnStatisticsForTable action. */
	static readonly GET_COLUMN_STATISTICS_FOR_TABLE_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly GET_CONNECTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetConnections action. */
	static readonly GET_CONNECTIONS_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetDatabase action. */
	static readonly GET_DATABASE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetDatabases action. */
	static readonly GET_DATABASES_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartition action. */
	static readonly GET_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartitionIndexes action. */
	static readonly GET_PARTITION_INDEXES_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetPartitions action. */
	static readonly GET_PARTITIONS_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTable action. */
	static readonly GET_TABLE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTableVersion action. */
	static readonly GET_TABLE_VERSION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTableVersions action. */
	static readonly GET_TABLE_VERSIONS_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetTables action. */
	static readonly GET_TABLES_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetUserDefinedFunction action. */
	static readonly GET_USER_DEFINED_FUNCTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the GetUserDefinedFunctions action. */
	static readonly GET_USER_DEFINED_FUNCTIONS_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the ImportCatalogToGlue action. */
	static readonly IMPORT_CATALOG_TO_GLUE_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the ModifyIntegration action. */
	static readonly MODIFY_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterConnectionType action. */
	static readonly REGISTER_CONNECTION_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RenameTable action. */
	static readonly RENAME_TABLE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the SearchTables action. */
	static readonly SEARCH_TABLES_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateCatalog action. */
	static readonly UPDATE_CATALOG_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateColumnStatisticsForPartition action. */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_PARTITION_CONDITION_KEYS: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the UpdateColumnStatisticsForTable action. */
	static readonly UPDATE_COLUMN_STATISTICS_FOR_TABLE_CONDITION_KEYS: string[] =
		["glue:LakeFormationPermissions"];
	/** Condition keys applicable to the UpdateConnection action. */
	static readonly UPDATE_CONNECTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateDatabase action. */
	static readonly UPDATE_DATABASE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateJob action. */
	static readonly UPDATE_JOB_CONDITION_KEYS: string[] = [
		"glue:SecurityGroupIds",
		"glue:SubnetIds",
		"glue:VpcIds",
	];
	/** Condition keys applicable to the UpdatePartition action. */
	static readonly UPDATE_PARTITION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateTable action. */
	static readonly UPDATE_TABLE_CONDITION_KEYS: string[] = [
		"glue:FederatedAuthorizationSource",
		"glue:LakeFormationPermissions",
	];
	/** Condition keys applicable to the UpdateUserDefinedFunction action. */
	static readonly UPDATE_USER_DEFINED_FUNCTION_CONDITION_KEYS: string[] = [
		"glue:LakeFormationPermissions",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
