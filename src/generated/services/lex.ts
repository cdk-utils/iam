// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lex.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lex service.
 */
export class LexActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lex";

	/** [Write] lex:BatchCreateCustomVocabularyItem */
	static readonly BATCH_CREATE_CUSTOM_VOCABULARY_ITEM =
		"lex:BatchCreateCustomVocabularyItem";
	/** [Write] lex:BatchDeleteCustomVocabularyItem */
	static readonly BATCH_DELETE_CUSTOM_VOCABULARY_ITEM =
		"lex:BatchDeleteCustomVocabularyItem";
	/** [Write] lex:BatchUpdateCustomVocabularyItem */
	static readonly BATCH_UPDATE_CUSTOM_VOCABULARY_ITEM =
		"lex:BatchUpdateCustomVocabularyItem";
	/** [Write] lex:BuildBotLocale */
	static readonly BUILD_BOT_LOCALE = "lex:BuildBotLocale";
	/** [Write] lex:CreateBot */
	static readonly CREATE_BOT = "lex:CreateBot";
	/** [Write] lex:CreateBotAlias */
	static readonly CREATE_BOT_ALIAS = "lex:CreateBotAlias";
	/** [Write] lex:CreateBotChannel */
	static readonly CREATE_BOT_CHANNEL = "lex:CreateBotChannel";
	/** [Write] lex:CreateBotLocale */
	static readonly CREATE_BOT_LOCALE = "lex:CreateBotLocale";
	/** [Write] lex:CreateBotReplica */
	static readonly CREATE_BOT_REPLICA = "lex:CreateBotReplica";
	/** [Write] lex:CreateBotVersion */
	static readonly CREATE_BOT_VERSION = "lex:CreateBotVersion";
	/** [Write] lex:CreateCustomVocabulary */
	static readonly CREATE_CUSTOM_VOCABULARY = "lex:CreateCustomVocabulary";
	/** [Write] lex:CreateExport */
	static readonly CREATE_EXPORT = "lex:CreateExport";
	/** [Write] lex:CreateIntent */
	static readonly CREATE_INTENT = "lex:CreateIntent";
	/** [Write] lex:CreateIntentVersion */
	static readonly CREATE_INTENT_VERSION = "lex:CreateIntentVersion";
	/** [Write] lex:CreateResourcePolicy */
	static readonly CREATE_RESOURCE_POLICY = "lex:CreateResourcePolicy";
	/** [Write] lex:CreateResourcePolicyStatement */
	static readonly CREATE_RESOURCE_POLICY_STATEMENT =
		"lex:CreateResourcePolicyStatement";
	/** [Write] lex:CreateSlot */
	static readonly CREATE_SLOT = "lex:CreateSlot";
	/** [Write] lex:CreateSlotType */
	static readonly CREATE_SLOT_TYPE = "lex:CreateSlotType";
	/** [Write] lex:CreateSlotTypeVersion */
	static readonly CREATE_SLOT_TYPE_VERSION = "lex:CreateSlotTypeVersion";
	/** [Write] lex:CreateTestSet */
	static readonly CREATE_TEST_SET = "lex:CreateTestSet";
	/** [Write] lex:CreateTestSetDiscrepancyReport */
	static readonly CREATE_TEST_SET_DISCREPANCY_REPORT =
		"lex:CreateTestSetDiscrepancyReport";
	/** [Write] lex:CreateUploadUrl */
	static readonly CREATE_UPLOAD_URL = "lex:CreateUploadUrl";
	/** [Write] lex:DeleteBot */
	static readonly DELETE_BOT = "lex:DeleteBot";
	/** [Write] lex:DeleteBotAlias */
	static readonly DELETE_BOT_ALIAS = "lex:DeleteBotAlias";
	/** [Write] lex:DeleteBotAnalyzerRecommendation */
	static readonly DELETE_BOT_ANALYZER_RECOMMENDATION =
		"lex:DeleteBotAnalyzerRecommendation";
	/** [Write] lex:DeleteBotChannel */
	static readonly DELETE_BOT_CHANNEL = "lex:DeleteBotChannel";
	/** [Write] lex:DeleteBotChannelAssociation */
	static readonly DELETE_BOT_CHANNEL_ASSOCIATION =
		"lex:DeleteBotChannelAssociation";
	/** [Write] lex:DeleteBotLocale */
	static readonly DELETE_BOT_LOCALE = "lex:DeleteBotLocale";
	/** [Write] lex:DeleteBotReplica */
	static readonly DELETE_BOT_REPLICA = "lex:DeleteBotReplica";
	/** [Write] lex:DeleteBotVersion */
	static readonly DELETE_BOT_VERSION = "lex:DeleteBotVersion";
	/** [Write] lex:DeleteCustomVocabulary */
	static readonly DELETE_CUSTOM_VOCABULARY = "lex:DeleteCustomVocabulary";
	/** [Write] lex:DeleteExport */
	static readonly DELETE_EXPORT = "lex:DeleteExport";
	/** [Write] lex:DeleteImport */
	static readonly DELETE_IMPORT = "lex:DeleteImport";
	/** [Write] lex:DeleteIntent */
	static readonly DELETE_INTENT = "lex:DeleteIntent";
	/** [Write] lex:DeleteIntentVersion */
	static readonly DELETE_INTENT_VERSION = "lex:DeleteIntentVersion";
	/** [Write] lex:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "lex:DeleteResourcePolicy";
	/** [Write] lex:DeleteResourcePolicyStatement */
	static readonly DELETE_RESOURCE_POLICY_STATEMENT =
		"lex:DeleteResourcePolicyStatement";
	/** [Write] lex:DeleteSession */
	static readonly DELETE_SESSION = "lex:DeleteSession";
	/** [Write] lex:DeleteSlot */
	static readonly DELETE_SLOT = "lex:DeleteSlot";
	/** [Write] lex:DeleteSlotType */
	static readonly DELETE_SLOT_TYPE = "lex:DeleteSlotType";
	/** [Write] lex:DeleteSlotTypeVersion */
	static readonly DELETE_SLOT_TYPE_VERSION = "lex:DeleteSlotTypeVersion";
	/** [Write] lex:DeleteTestSet */
	static readonly DELETE_TEST_SET = "lex:DeleteTestSet";
	/** [Write] lex:DeleteUtterances */
	static readonly DELETE_UTTERANCES = "lex:DeleteUtterances";
	/** [Read] lex:DescribeBot */
	static readonly DESCRIBE_BOT = "lex:DescribeBot";
	/** [Read] lex:DescribeBotAlias */
	static readonly DESCRIBE_BOT_ALIAS = "lex:DescribeBotAlias";
	/** [Read] lex:DescribeBotAnalyzerRecommendation */
	static readonly DESCRIBE_BOT_ANALYZER_RECOMMENDATION =
		"lex:DescribeBotAnalyzerRecommendation";
	/** [Read] lex:DescribeBotChannel */
	static readonly DESCRIBE_BOT_CHANNEL = "lex:DescribeBotChannel";
	/** [Read] lex:DescribeBotLocale */
	static readonly DESCRIBE_BOT_LOCALE = "lex:DescribeBotLocale";
	/** [Read] lex:DescribeBotRecommendation */
	static readonly DESCRIBE_BOT_RECOMMENDATION = "lex:DescribeBotRecommendation";
	/** [Read] lex:DescribeBotReplica */
	static readonly DESCRIBE_BOT_REPLICA = "lex:DescribeBotReplica";
	/** [Read] lex:DescribeBotResourceGeneration */
	static readonly DESCRIBE_BOT_RESOURCE_GENERATION =
		"lex:DescribeBotResourceGeneration";
	/** [Read] lex:DescribeBotVersion */
	static readonly DESCRIBE_BOT_VERSION = "lex:DescribeBotVersion";
	/** [Read] lex:DescribeCustomVocabulary */
	static readonly DESCRIBE_CUSTOM_VOCABULARY = "lex:DescribeCustomVocabulary";
	/** [Read] lex:DescribeCustomVocabularyMetadata */
	static readonly DESCRIBE_CUSTOM_VOCABULARY_METADATA =
		"lex:DescribeCustomVocabularyMetadata";
	/** [Read] lex:DescribeExport */
	static readonly DESCRIBE_EXPORT = "lex:DescribeExport";
	/** [Read] lex:DescribeImport */
	static readonly DESCRIBE_IMPORT = "lex:DescribeImport";
	/** [Read] lex:DescribeIntent */
	static readonly DESCRIBE_INTENT = "lex:DescribeIntent";
	/** [Read] lex:DescribeResourcePolicy */
	static readonly DESCRIBE_RESOURCE_POLICY = "lex:DescribeResourcePolicy";
	/** [Read] lex:DescribeSlot */
	static readonly DESCRIBE_SLOT = "lex:DescribeSlot";
	/** [Read] lex:DescribeSlotType */
	static readonly DESCRIBE_SLOT_TYPE = "lex:DescribeSlotType";
	/** [Read] lex:DescribeTestExecution */
	static readonly DESCRIBE_TEST_EXECUTION = "lex:DescribeTestExecution";
	/** [Read] lex:DescribeTestSet */
	static readonly DESCRIBE_TEST_SET = "lex:DescribeTestSet";
	/** [Read] lex:DescribeTestSetDiscrepancyReport */
	static readonly DESCRIBE_TEST_SET_DISCREPANCY_REPORT =
		"lex:DescribeTestSetDiscrepancyReport";
	/** [Read] lex:DescribeTestSetGeneration */
	static readonly DESCRIBE_TEST_SET_GENERATION =
		"lex:DescribeTestSetGeneration";
	/** [Read] lex:GenerateBotElement */
	static readonly GENERATE_BOT_ELEMENT = "lex:GenerateBotElement";
	/** [Read] lex:GetBot */
	static readonly GET_BOT = "lex:GetBot";
	/** [Read] lex:GetBotAlias */
	static readonly GET_BOT_ALIAS = "lex:GetBotAlias";
	/** [List] lex:GetBotAliases */
	static readonly GET_BOT_ALIASES = "lex:GetBotAliases";
	/** [Read] lex:GetBotChannelAssociation */
	static readonly GET_BOT_CHANNEL_ASSOCIATION = "lex:GetBotChannelAssociation";
	/** [List] lex:GetBotChannelAssociations */
	static readonly GET_BOT_CHANNEL_ASSOCIATIONS =
		"lex:GetBotChannelAssociations";
	/** [List] lex:GetBotVersions */
	static readonly GET_BOT_VERSIONS = "lex:GetBotVersions";
	/** [List] lex:GetBots */
	static readonly GET_BOTS = "lex:GetBots";
	/** [Read] lex:GetBuiltinIntent */
	static readonly GET_BUILTIN_INTENT = "lex:GetBuiltinIntent";
	/** [Read] lex:GetBuiltinIntents */
	static readonly GET_BUILTIN_INTENTS = "lex:GetBuiltinIntents";
	/** [Read] lex:GetBuiltinSlotTypes */
	static readonly GET_BUILTIN_SLOT_TYPES = "lex:GetBuiltinSlotTypes";
	/** [Read] lex:GetExport */
	static readonly GET_EXPORT = "lex:GetExport";
	/** [Read] lex:GetImport */
	static readonly GET_IMPORT = "lex:GetImport";
	/** [Read] lex:GetIntent */
	static readonly GET_INTENT = "lex:GetIntent";
	/** [List] lex:GetIntentVersions */
	static readonly GET_INTENT_VERSIONS = "lex:GetIntentVersions";
	/** [List] lex:GetIntents */
	static readonly GET_INTENTS = "lex:GetIntents";
	/** [Read] lex:GetMigration */
	static readonly GET_MIGRATION = "lex:GetMigration";
	/** [List] lex:GetMigrations */
	static readonly GET_MIGRATIONS = "lex:GetMigrations";
	/** [Read] lex:GetSession */
	static readonly GET_SESSION = "lex:GetSession";
	/** [Read] lex:GetSlotType */
	static readonly GET_SLOT_TYPE = "lex:GetSlotType";
	/** [List] lex:GetSlotTypeVersions */
	static readonly GET_SLOT_TYPE_VERSIONS = "lex:GetSlotTypeVersions";
	/** [List] lex:GetSlotTypes */
	static readonly GET_SLOT_TYPES = "lex:GetSlotTypes";
	/** [Read] lex:GetTestExecutionArtifactsUrl */
	static readonly GET_TEST_EXECUTION_ARTIFACTS_URL =
		"lex:GetTestExecutionArtifactsUrl";
	/** [List] lex:GetUtterancesView */
	static readonly GET_UTTERANCES_VIEW = "lex:GetUtterancesView";
	/** [List] lex:ListAggregatedUtterances */
	static readonly LIST_AGGREGATED_UTTERANCES = "lex:ListAggregatedUtterances";
	/** [List] lex:ListBotAliasReplicas */
	static readonly LIST_BOT_ALIAS_REPLICAS = "lex:ListBotAliasReplicas";
	/** [List] lex:ListBotAliases */
	static readonly LIST_BOT_ALIASES = "lex:ListBotAliases";
	/** [List] lex:ListBotAnalyzerRecommendations */
	static readonly LIST_BOT_ANALYZER_RECOMMENDATIONS =
		"lex:ListBotAnalyzerRecommendations";
	/** [List] lex:ListBotChannels */
	static readonly LIST_BOT_CHANNELS = "lex:ListBotChannels";
	/** [List] lex:ListBotLocales */
	static readonly LIST_BOT_LOCALES = "lex:ListBotLocales";
	/** [List] lex:ListBotRecommendations */
	static readonly LIST_BOT_RECOMMENDATIONS = "lex:ListBotRecommendations";
	/** [List] lex:ListBotReplicas */
	static readonly LIST_BOT_REPLICAS = "lex:ListBotReplicas";
	/** [List] lex:ListBotResourceGenerations */
	static readonly LIST_BOT_RESOURCE_GENERATIONS =
		"lex:ListBotResourceGenerations";
	/** [List] lex:ListBotVersionReplicas */
	static readonly LIST_BOT_VERSION_REPLICAS = "lex:ListBotVersionReplicas";
	/** [List] lex:ListBotVersions */
	static readonly LIST_BOT_VERSIONS = "lex:ListBotVersions";
	/** [List] lex:ListBots */
	static readonly LIST_BOTS = "lex:ListBots";
	/** [List] lex:ListBuiltInIntents */
	static readonly LIST_BUILT_IN_INTENTS = "lex:ListBuiltInIntents";
	/** [List] lex:ListBuiltInSlotTypes */
	static readonly LIST_BUILT_IN_SLOT_TYPES = "lex:ListBuiltInSlotTypes";
	/** [List] lex:ListCustomVocabularyItems */
	static readonly LIST_CUSTOM_VOCABULARY_ITEMS =
		"lex:ListCustomVocabularyItems";
	/** [List] lex:ListExports */
	static readonly LIST_EXPORTS = "lex:ListExports";
	/** [List] lex:ListImports */
	static readonly LIST_IMPORTS = "lex:ListImports";
	/** [List] lex:ListIntentMetrics */
	static readonly LIST_INTENT_METRICS = "lex:ListIntentMetrics";
	/** [List] lex:ListIntentPaths */
	static readonly LIST_INTENT_PATHS = "lex:ListIntentPaths";
	/** [List] lex:ListIntentStageMetrics */
	static readonly LIST_INTENT_STAGE_METRICS = "lex:ListIntentStageMetrics";
	/** [List] lex:ListIntents */
	static readonly LIST_INTENTS = "lex:ListIntents";
	/** [List] lex:ListRecommendedIntents */
	static readonly LIST_RECOMMENDED_INTENTS = "lex:ListRecommendedIntents";
	/** [List] lex:ListSessionAnalyticsData */
	static readonly LIST_SESSION_ANALYTICS_DATA = "lex:ListSessionAnalyticsData";
	/** [List] lex:ListSessionMetrics */
	static readonly LIST_SESSION_METRICS = "lex:ListSessionMetrics";
	/** [List] lex:ListSlotTypes */
	static readonly LIST_SLOT_TYPES = "lex:ListSlotTypes";
	/** [List] lex:ListSlots */
	static readonly LIST_SLOTS = "lex:ListSlots";
	/** [Read] lex:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "lex:ListTagsForResource";
	/** [Read] lex:ListTestExecutionResultItems */
	static readonly LIST_TEST_EXECUTION_RESULT_ITEMS =
		"lex:ListTestExecutionResultItems";
	/** [List] lex:ListTestExecutions */
	static readonly LIST_TEST_EXECUTIONS = "lex:ListTestExecutions";
	/** [Read] lex:ListTestSetRecords */
	static readonly LIST_TEST_SET_RECORDS = "lex:ListTestSetRecords";
	/** [List] lex:ListTestSets */
	static readonly LIST_TEST_SETS = "lex:ListTestSets";
	/** [Write] lex:PostContent */
	static readonly POST_CONTENT = "lex:PostContent";
	/** [Write] lex:PostText */
	static readonly POST_TEXT = "lex:PostText";
	/** [Write] lex:PutBot */
	static readonly PUT_BOT = "lex:PutBot";
	/** [Write] lex:PutBotAlias */
	static readonly PUT_BOT_ALIAS = "lex:PutBotAlias";
	/** [Write] lex:PutIntent */
	static readonly PUT_INTENT = "lex:PutIntent";
	/** [Write] lex:PutSession */
	static readonly PUT_SESSION = "lex:PutSession";
	/** [Write] lex:PutSlotType */
	static readonly PUT_SLOT_TYPE = "lex:PutSlotType";
	/** [Write] lex:RecognizeText */
	static readonly RECOGNIZE_TEXT = "lex:RecognizeText";
	/** [Write] lex:RecognizeUtterance */
	static readonly RECOGNIZE_UTTERANCE = "lex:RecognizeUtterance";
	/** [List] lex:SearchAssociatedTranscripts */
	static readonly SEARCH_ASSOCIATED_TRANSCRIPTS =
		"lex:SearchAssociatedTranscripts";
	/** [Write] lex:StartBotAnalyzer */
	static readonly START_BOT_ANALYZER = "lex:StartBotAnalyzer";
	/** [Write] lex:StartBotRecommendation */
	static readonly START_BOT_RECOMMENDATION = "lex:StartBotRecommendation";
	/** [Write] lex:StartBotResourceGeneration */
	static readonly START_BOT_RESOURCE_GENERATION =
		"lex:StartBotResourceGeneration";
	/** [Write] lex:StartConversation */
	static readonly START_CONVERSATION = "lex:StartConversation";
	/** [Write] lex:StartImport */
	static readonly START_IMPORT = "lex:StartImport";
	/** [Write] lex:StartMigration */
	static readonly START_MIGRATION = "lex:StartMigration";
	/** [Write] lex:StartTestExecution */
	static readonly START_TEST_EXECUTION = "lex:StartTestExecution";
	/** [Write] lex:StartTestSetGeneration */
	static readonly START_TEST_SET_GENERATION = "lex:StartTestSetGeneration";
	/** [Write] lex:StopBotAnalyzer */
	static readonly STOP_BOT_ANALYZER = "lex:StopBotAnalyzer";
	/** [Write] lex:StopBotRecommendation */
	static readonly STOP_BOT_RECOMMENDATION = "lex:StopBotRecommendation";
	/** [Tagging] lex:TagResource */
	static readonly TAG_RESOURCE = "lex:TagResource";
	/** [Tagging] lex:UntagResource */
	static readonly UNTAG_RESOURCE = "lex:UntagResource";
	/** [Write] lex:UpdateBot */
	static readonly UPDATE_BOT = "lex:UpdateBot";
	/** [Write] lex:UpdateBotAlias */
	static readonly UPDATE_BOT_ALIAS = "lex:UpdateBotAlias";
	/** [Write] lex:UpdateBotLocale */
	static readonly UPDATE_BOT_LOCALE = "lex:UpdateBotLocale";
	/** [Write] lex:UpdateBotRecommendation */
	static readonly UPDATE_BOT_RECOMMENDATION = "lex:UpdateBotRecommendation";
	/** [Write] lex:UpdateCustomVocabulary */
	static readonly UPDATE_CUSTOM_VOCABULARY = "lex:UpdateCustomVocabulary";
	/** [Write] lex:UpdateExport */
	static readonly UPDATE_EXPORT = "lex:UpdateExport";
	/** [Write] lex:UpdateIntent */
	static readonly UPDATE_INTENT = "lex:UpdateIntent";
	/** [Write] lex:UpdateResourcePolicy */
	static readonly UPDATE_RESOURCE_POLICY = "lex:UpdateResourcePolicy";
	/** [Write] lex:UpdateSlot */
	static readonly UPDATE_SLOT = "lex:UpdateSlot";
	/** [Write] lex:UpdateSlotType */
	static readonly UPDATE_SLOT_TYPE = "lex:UpdateSlotType";
	/** [Write] lex:UpdateTestSet */
	static readonly UPDATE_TEST_SET = "lex:UpdateTestSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LexActions.DESCRIBE_BOT,
		LexActions.DESCRIBE_BOT_ALIAS,
		LexActions.DESCRIBE_BOT_ANALYZER_RECOMMENDATION,
		LexActions.DESCRIBE_BOT_CHANNEL,
		LexActions.DESCRIBE_BOT_LOCALE,
		LexActions.DESCRIBE_BOT_RECOMMENDATION,
		LexActions.DESCRIBE_BOT_REPLICA,
		LexActions.DESCRIBE_BOT_RESOURCE_GENERATION,
		LexActions.DESCRIBE_BOT_VERSION,
		LexActions.DESCRIBE_CUSTOM_VOCABULARY,
		LexActions.DESCRIBE_CUSTOM_VOCABULARY_METADATA,
		LexActions.DESCRIBE_EXPORT,
		LexActions.DESCRIBE_IMPORT,
		LexActions.DESCRIBE_INTENT,
		LexActions.DESCRIBE_RESOURCE_POLICY,
		LexActions.DESCRIBE_SLOT,
		LexActions.DESCRIBE_SLOT_TYPE,
		LexActions.DESCRIBE_TEST_EXECUTION,
		LexActions.DESCRIBE_TEST_SET,
		LexActions.DESCRIBE_TEST_SET_DISCREPANCY_REPORT,
		LexActions.DESCRIBE_TEST_SET_GENERATION,
		LexActions.GENERATE_BOT_ELEMENT,
		LexActions.GET_BOT,
		LexActions.GET_BOT_ALIAS,
		LexActions.GET_BOT_CHANNEL_ASSOCIATION,
		LexActions.GET_BUILTIN_INTENT,
		LexActions.GET_BUILTIN_INTENTS,
		LexActions.GET_BUILTIN_SLOT_TYPES,
		LexActions.GET_EXPORT,
		LexActions.GET_IMPORT,
		LexActions.GET_INTENT,
		LexActions.GET_MIGRATION,
		LexActions.GET_SESSION,
		LexActions.GET_SLOT_TYPE,
		LexActions.GET_TEST_EXECUTION_ARTIFACTS_URL,
		LexActions.LIST_TAGS_FOR_RESOURCE,
		LexActions.LIST_TEST_EXECUTION_RESULT_ITEMS,
		LexActions.LIST_TEST_SET_RECORDS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LexActions.BATCH_CREATE_CUSTOM_VOCABULARY_ITEM,
		LexActions.BATCH_DELETE_CUSTOM_VOCABULARY_ITEM,
		LexActions.BATCH_UPDATE_CUSTOM_VOCABULARY_ITEM,
		LexActions.BUILD_BOT_LOCALE,
		LexActions.CREATE_BOT,
		LexActions.CREATE_BOT_ALIAS,
		LexActions.CREATE_BOT_CHANNEL,
		LexActions.CREATE_BOT_LOCALE,
		LexActions.CREATE_BOT_REPLICA,
		LexActions.CREATE_BOT_VERSION,
		LexActions.CREATE_CUSTOM_VOCABULARY,
		LexActions.CREATE_EXPORT,
		LexActions.CREATE_INTENT,
		LexActions.CREATE_INTENT_VERSION,
		LexActions.CREATE_RESOURCE_POLICY,
		LexActions.CREATE_RESOURCE_POLICY_STATEMENT,
		LexActions.CREATE_SLOT,
		LexActions.CREATE_SLOT_TYPE,
		LexActions.CREATE_SLOT_TYPE_VERSION,
		LexActions.CREATE_TEST_SET,
		LexActions.CREATE_TEST_SET_DISCREPANCY_REPORT,
		LexActions.CREATE_UPLOAD_URL,
		LexActions.DELETE_BOT,
		LexActions.DELETE_BOT_ALIAS,
		LexActions.DELETE_BOT_ANALYZER_RECOMMENDATION,
		LexActions.DELETE_BOT_CHANNEL,
		LexActions.DELETE_BOT_CHANNEL_ASSOCIATION,
		LexActions.DELETE_BOT_LOCALE,
		LexActions.DELETE_BOT_REPLICA,
		LexActions.DELETE_BOT_VERSION,
		LexActions.DELETE_CUSTOM_VOCABULARY,
		LexActions.DELETE_EXPORT,
		LexActions.DELETE_IMPORT,
		LexActions.DELETE_INTENT,
		LexActions.DELETE_INTENT_VERSION,
		LexActions.DELETE_RESOURCE_POLICY,
		LexActions.DELETE_RESOURCE_POLICY_STATEMENT,
		LexActions.DELETE_SESSION,
		LexActions.DELETE_SLOT,
		LexActions.DELETE_SLOT_TYPE,
		LexActions.DELETE_SLOT_TYPE_VERSION,
		LexActions.DELETE_TEST_SET,
		LexActions.DELETE_UTTERANCES,
		LexActions.POST_CONTENT,
		LexActions.POST_TEXT,
		LexActions.PUT_BOT,
		LexActions.PUT_BOT_ALIAS,
		LexActions.PUT_INTENT,
		LexActions.PUT_SESSION,
		LexActions.PUT_SLOT_TYPE,
		LexActions.RECOGNIZE_TEXT,
		LexActions.RECOGNIZE_UTTERANCE,
		LexActions.START_BOT_ANALYZER,
		LexActions.START_BOT_RECOMMENDATION,
		LexActions.START_BOT_RESOURCE_GENERATION,
		LexActions.START_CONVERSATION,
		LexActions.START_IMPORT,
		LexActions.START_MIGRATION,
		LexActions.START_TEST_EXECUTION,
		LexActions.START_TEST_SET_GENERATION,
		LexActions.STOP_BOT_ANALYZER,
		LexActions.STOP_BOT_RECOMMENDATION,
		LexActions.UPDATE_BOT,
		LexActions.UPDATE_BOT_ALIAS,
		LexActions.UPDATE_BOT_LOCALE,
		LexActions.UPDATE_BOT_RECOMMENDATION,
		LexActions.UPDATE_CUSTOM_VOCABULARY,
		LexActions.UPDATE_EXPORT,
		LexActions.UPDATE_INTENT,
		LexActions.UPDATE_RESOURCE_POLICY,
		LexActions.UPDATE_SLOT,
		LexActions.UPDATE_SLOT_TYPE,
		LexActions.UPDATE_TEST_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LexActions.GET_BOT_ALIASES,
		LexActions.GET_BOT_CHANNEL_ASSOCIATIONS,
		LexActions.GET_BOT_VERSIONS,
		LexActions.GET_BOTS,
		LexActions.GET_INTENT_VERSIONS,
		LexActions.GET_INTENTS,
		LexActions.GET_MIGRATIONS,
		LexActions.GET_SLOT_TYPE_VERSIONS,
		LexActions.GET_SLOT_TYPES,
		LexActions.GET_UTTERANCES_VIEW,
		LexActions.LIST_AGGREGATED_UTTERANCES,
		LexActions.LIST_BOT_ALIAS_REPLICAS,
		LexActions.LIST_BOT_ALIASES,
		LexActions.LIST_BOT_ANALYZER_RECOMMENDATIONS,
		LexActions.LIST_BOT_CHANNELS,
		LexActions.LIST_BOT_LOCALES,
		LexActions.LIST_BOT_RECOMMENDATIONS,
		LexActions.LIST_BOT_REPLICAS,
		LexActions.LIST_BOT_RESOURCE_GENERATIONS,
		LexActions.LIST_BOT_VERSION_REPLICAS,
		LexActions.LIST_BOT_VERSIONS,
		LexActions.LIST_BOTS,
		LexActions.LIST_BUILT_IN_INTENTS,
		LexActions.LIST_BUILT_IN_SLOT_TYPES,
		LexActions.LIST_CUSTOM_VOCABULARY_ITEMS,
		LexActions.LIST_EXPORTS,
		LexActions.LIST_IMPORTS,
		LexActions.LIST_INTENT_METRICS,
		LexActions.LIST_INTENT_PATHS,
		LexActions.LIST_INTENT_STAGE_METRICS,
		LexActions.LIST_INTENTS,
		LexActions.LIST_RECOMMENDED_INTENTS,
		LexActions.LIST_SESSION_ANALYTICS_DATA,
		LexActions.LIST_SESSION_METRICS,
		LexActions.LIST_SLOT_TYPES,
		LexActions.LIST_SLOTS,
		LexActions.LIST_TEST_EXECUTIONS,
		LexActions.LIST_TEST_SETS,
		LexActions.SEARCH_ASSOCIATED_TRANSCRIPTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LexActions.TAG_RESOURCE,
		LexActions.UNTAG_RESOURCE,
	];
}

const BotArnRegex = new RegExp(
	"^(?:arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot/(?<botId>[^:/?]+)|arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot:(?<botName>[^:/?]+))$",
);
const BotAliasArnRegex = new RegExp(
	"^(?:arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot-alias/(?<botId>[^:/?]+)/(?<botAliasId>[^:/?]+)|arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot:(?<botName>[^:/?]+):(?<botAlias>[^:/?]+))$",
);
const BotVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot:(?<botName>[^:/?]+):(?<botVersion>[^:/?]+)$",
);
const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):bot-channel:(?<botName>[^:/?]+):(?<botAlias>[^:/?]+):(?<channelName>[^:/?]+)$",
);
const IntentVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):intent:(?<intentName>[^:/?]+):(?<intentVersion>[^:/?]+)$",
);
const SlottypeVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):slottype:(?<slotName>[^:/?]+):(?<slotVersion>[^:/?]+)$",
);
const TestSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lex:(?<region>[^:]*):(?<account>[^:]*):test-set/(?<testSetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lex resources.
 */
export class LexResources {
	/**
	 * Builds an ARN for the botVariant1 resource.
	 */
	static botVariant1(props: {
		/** The BotId component of the ARN. */
		readonly botId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot/${props.botId}`;
	}

	/**
	 * Builds an ARN for the botVariant2 resource.
	 */
	static botVariant2(props: {
		/** The BotName component of the ARN. */
		readonly botName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot:${props.botName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bot resource.
	 */
	static isValidBotArn(arn: string): boolean {
		return BotArnRegex.test(arn);
	}

	/**
	 * Parses a bot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		botId: string;
	} {
		const match = BotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			botId: match.groups!.botId,
		};
	}

	/**
	 * Builds an ARN for the bot aliasVariant1 resource.
	 */
	static botAliasVariant1(props: {
		/** The BotId component of the ARN. */
		readonly botId: string;
		/** The BotAliasId component of the ARN. */
		readonly botAliasId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot-alias/${props.botId}/${props.botAliasId}`;
	}

	/**
	 * Builds an ARN for the bot aliasVariant2 resource.
	 */
	static botAliasVariant2(props: {
		/** The BotName component of the ARN. */
		readonly botName: string;
		/** The BotAlias component of the ARN. */
		readonly botAlias: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot:${props.botName}:${props.botAlias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bot alias resource.
	 */
	static isValidBotAliasArn(arn: string): boolean {
		return BotAliasArnRegex.test(arn);
	}

	/**
	 * Parses a bot alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBotAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		botId: string;
		botAliasId: string;
	} {
		const match = BotAliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bot alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			botId: match.groups!.botId,
			botAliasId: match.groups!.botAliasId,
		};
	}

	/**
	 * Builds an ARN for the bot version resource.
	 */
	static botVersion(props: {
		/** The BotName component of the ARN. */
		readonly botName: string;
		/** The BotVersion component of the ARN. */
		readonly botVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot:${props.botName}:${props.botVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bot version resource.
	 */
	static isValidBotVersionArn(arn: string): boolean {
		return BotVersionArnRegex.test(arn);
	}

	/**
	 * Parses a bot version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBotVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		botName: string;
		botVersion: string;
	} {
		const match = BotVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bot version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			botName: match.groups!.botName,
			botVersion: match.groups!.botVersion,
		};
	}

	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The BotName component of the ARN. */
		readonly botName: string;
		/** The BotAlias component of the ARN. */
		readonly botAlias: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:bot-channel:${props.botName}:${props.botAlias}:${props.channelName}`;
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
		botName: string;
		botAlias: string;
		channelName: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			botName: match.groups!.botName,
			botAlias: match.groups!.botAlias,
			channelName: match.groups!.channelName,
		};
	}

	/**
	 * Builds an ARN for the intent version resource.
	 */
	static intentVersion(props: {
		/** The IntentName component of the ARN. */
		readonly intentName: string;
		/** The IntentVersion component of the ARN. */
		readonly intentVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:intent:${props.intentName}:${props.intentVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the intent version resource.
	 */
	static isValidIntentVersionArn(arn: string): boolean {
		return IntentVersionArnRegex.test(arn);
	}

	/**
	 * Parses a intent version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntentVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		intentName: string;
		intentVersion: string;
	} {
		const match = IntentVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid intent version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			intentName: match.groups!.intentName,
			intentVersion: match.groups!.intentVersion,
		};
	}

	/**
	 * Builds an ARN for the slottype version resource.
	 */
	static slottypeVersion(props: {
		/** The SlotName component of the ARN. */
		readonly slotName: string;
		/** The SlotVersion component of the ARN. */
		readonly slotVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:slottype:${props.slotName}:${props.slotVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the slottype version resource.
	 */
	static isValidSlottypeVersionArn(arn: string): boolean {
		return SlottypeVersionArnRegex.test(arn);
	}

	/**
	 * Parses a slottype version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSlottypeVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		slotName: string;
		slotVersion: string;
	} {
		const match = SlottypeVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid slottype version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			slotName: match.groups!.slotName,
			slotVersion: match.groups!.slotVersion,
		};
	}

	/**
	 * Builds an ARN for the test set resource.
	 */
	static testSet(props: {
		/** The TestSetId component of the ARN. */
		readonly testSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:lex:${props.region ?? "*"}:${props.account ?? "*"}:test-set/${props.testSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the test set resource.
	 */
	static isValidTestSetArn(arn: string): boolean {
		return TestSetArnRegex.test(arn);
	}

	/**
	 * Parses a test set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testSetId: string;
	} {
		const match = TestSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid test set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testSetId: match.groups!.testSetId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for lex.
 */
export class LexOperations {
	/** IAM actions required for the BatchCreateCustomVocabularyItem API call. */
	static readonly BATCH_CREATE_CUSTOM_VOCABULARY_ITEM: string[] = [
		"lex:BatchCreateCustomVocabularyItem",
	];
	/** IAM actions required for the BatchDeleteCustomVocabularyItem API call. */
	static readonly BATCH_DELETE_CUSTOM_VOCABULARY_ITEM: string[] = [
		"lex:BatchDeleteCustomVocabularyItem",
	];
	/** IAM actions required for the BatchUpdateCustomVocabularyItem API call. */
	static readonly BATCH_UPDATE_CUSTOM_VOCABULARY_ITEM: string[] = [
		"lex:BatchUpdateCustomVocabularyItem",
	];
	/** IAM actions required for the BuildBotLocale API call. */
	static readonly BUILD_BOT_LOCALE: string[] = ["lex:BuildBotLocale"];
	/** IAM actions required for the CreateBot API call. */
	static readonly CREATE_BOT: string[] = [
		"lex:CreateBot",
		"lex:DescribeBotAlias",
		"lex:DescribeBotVersion",
		"iam:PassRole",
		"lex:TagResource",
	];
	/** IAM actions required for the CreateBotAlias API call. */
	static readonly CREATE_BOT_ALIAS: string[] = [
		"lex:CreateBotAlias",
		"lex:TagResource",
	];
	/** IAM actions required for the CreateBotLocale API call. */
	static readonly CREATE_BOT_LOCALE: string[] = ["lex:CreateBotLocale"];
	/** IAM actions required for the CreateBotReplica API call. */
	static readonly CREATE_BOT_REPLICA: string[] = ["lex:CreateBotReplica"];
	/** IAM actions required for the CreateBotVersion API call. */
	static readonly CREATE_BOT_VERSION: string[] = ["lex:CreateBotVersion"];
	/** IAM actions required for the CreateExport API call. */
	static readonly CREATE_EXPORT: string[] = ["lex:CreateExport"];
	/** IAM actions required for the CreateIntent API call. */
	static readonly CREATE_INTENT: string[] = ["lex:CreateIntent"];
	/** IAM actions required for the CreateIntentVersion API call. */
	static readonly CREATE_INTENT_VERSION: string[] = [];
	/** IAM actions required for the CreateResourcePolicy API call. */
	static readonly CREATE_RESOURCE_POLICY: string[] = [
		"lex:CreateResourcePolicy",
	];
	/** IAM actions required for the CreateResourcePolicyStatement API call. */
	static readonly CREATE_RESOURCE_POLICY_STATEMENT: string[] = [
		"lex:CreateResourcePolicy",
		"lex:UpdateResourcePolicy",
	];
	/** IAM actions required for the CreateSlot API call. */
	static readonly CREATE_SLOT: string[] = ["lex:CreateSlot"];
	/** IAM actions required for the CreateSlotType API call. */
	static readonly CREATE_SLOT_TYPE: string[] = ["lex:CreateSlotType"];
	/** IAM actions required for the CreateSlotTypeVersion API call. */
	static readonly CREATE_SLOT_TYPE_VERSION: string[] = [
		"lex:CreateSlotTypeVersion",
	];
	/** IAM actions required for the CreateTestSetDiscrepancyReport API call. */
	static readonly CREATE_TEST_SET_DISCREPANCY_REPORT: string[] = [
		"lex:CreateTestSetDiscrepancyReport",
	];
	/** IAM actions required for the CreateUploadUrl API call. */
	static readonly CREATE_UPLOAD_URL: string[] = ["lex:CreateUploadUrl"];
	/** IAM actions required for the DeleteBot API call. */
	static readonly DELETE_BOT: string[] = [
		"lex:DeleteBot",
		"lex:DeleteBotAlias",
		"lex:DeleteBotChannel",
		"lex:DeleteBotLocale",
		"lex:DeleteBotVersion",
		"lex:DeleteCustomVocabulary",
		"lex:DeleteIntent",
		"lex:DeleteResourcePolicy",
		"lex:DeleteSlot",
		"lex:DeleteSlotType",
	];
	/** IAM actions required for the DeleteBotAlias API call. */
	static readonly DELETE_BOT_ALIAS: string[] = [
		"lex:DeleteBotAlias",
		"lex:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteBotAnalyzerRecommendation API call. */
	static readonly DELETE_BOT_ANALYZER_RECOMMENDATION: string[] = [
		"lex:DeleteBotAnalyzerRecommendation",
	];
	/** IAM actions required for the DeleteBotChannelAssociation API call. */
	static readonly DELETE_BOT_CHANNEL_ASSOCIATION: string[] = [
		"lex:DeleteBotChannelAssociation",
	];
	/** IAM actions required for the DeleteBotLocale API call. */
	static readonly DELETE_BOT_LOCALE: string[] = [
		"lex:DeleteBotLocale",
		"lex:DeleteCustomVocabulary",
		"lex:DeleteIntent",
		"lex:DeleteSlot",
		"lex:DeleteSlotType",
	];
	/** IAM actions required for the DeleteBotReplica API call. */
	static readonly DELETE_BOT_REPLICA: string[] = ["lex:DeleteBotReplica"];
	/** IAM actions required for the DeleteBotVersion API call. */
	static readonly DELETE_BOT_VERSION: string[] = ["lex:DeleteBotVersion"];
	/** IAM actions required for the DeleteCustomVocabulary API call. */
	static readonly DELETE_CUSTOM_VOCABULARY: string[] = [
		"lex:DeleteCustomVocabulary",
	];
	/** IAM actions required for the DeleteExport API call. */
	static readonly DELETE_EXPORT: string[] = ["lex:DeleteExport"];
	/** IAM actions required for the DeleteImport API call. */
	static readonly DELETE_IMPORT: string[] = ["lex:DeleteImport"];
	/** IAM actions required for the DeleteIntent API call. */
	static readonly DELETE_INTENT: string[] = ["lex:DeleteIntent"];
	/** IAM actions required for the DeleteIntentVersion API call. */
	static readonly DELETE_INTENT_VERSION: string[] = ["lex:DeleteIntentVersion"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"lex:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteResourcePolicyStatement API call. */
	static readonly DELETE_RESOURCE_POLICY_STATEMENT: string[] = [
		"lex:DeleteResourcePolicy",
		"lex:UpdateResourcePolicy",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DELETE_SESSION: string[] = ["lex:DeleteSession"];
	/** IAM actions required for the DeleteSlot API call. */
	static readonly DELETE_SLOT: string[] = ["lex:DeleteSlot"];
	/** IAM actions required for the DeleteSlotType API call. */
	static readonly DELETE_SLOT_TYPE: string[] = ["lex:DeleteSlotType"];
	/** IAM actions required for the DeleteSlotTypeVersion API call. */
	static readonly DELETE_SLOT_TYPE_VERSION: string[] = [
		"lex:DeleteSlotTypeVersion",
	];
	/** IAM actions required for the DeleteTestSet API call. */
	static readonly DELETE_TEST_SET: string[] = ["lex:DeleteTestSet"];
	/** IAM actions required for the DeleteUtterances API call. */
	static readonly DELETE_UTTERANCES: string[] = ["lex:DeleteUtterances"];
	/** IAM actions required for the DescribeBot API call. */
	static readonly DESCRIBE_BOT: string[] = [
		"lex:DescribeBot",
		"lex:DescribeBotAlias",
		"lex:DescribeBotVersion",
	];
	/** IAM actions required for the DescribeBotAlias API call. */
	static readonly DESCRIBE_BOT_ALIAS: string[] = ["lex:DescribeBotAlias"];
	/** IAM actions required for the DescribeBotAnalyzerRecommendation API call. */
	static readonly DESCRIBE_BOT_ANALYZER_RECOMMENDATION: string[] = [
		"lex:DescribeBotAnalyzerRecommendation",
	];
	/** IAM actions required for the DescribeBotLocale API call. */
	static readonly DESCRIBE_BOT_LOCALE: string[] = ["lex:DescribeBotLocale"];
	/** IAM actions required for the DescribeBotRecommendation API call. */
	static readonly DESCRIBE_BOT_RECOMMENDATION: string[] = [
		"lex:DescribeBotRecommendation",
	];
	/** IAM actions required for the DescribeBotReplica API call. */
	static readonly DESCRIBE_BOT_REPLICA: string[] = ["lex:DescribeBotReplica"];
	/** IAM actions required for the DescribeBotResourceGeneration API call. */
	static readonly DESCRIBE_BOT_RESOURCE_GENERATION: string[] = [
		"lex:DescribeBotResourceGeneration",
	];
	/** IAM actions required for the DescribeBotVersion API call. */
	static readonly DESCRIBE_BOT_VERSION: string[] = [
		"lex:DescribeBotAlias",
		"lex:DescribeBotVersion",
	];
	/** IAM actions required for the DescribeCustomVocabularyMetadata API call. */
	static readonly DESCRIBE_CUSTOM_VOCABULARY_METADATA: string[] = [
		"lex:DescribeCustomVocabularyMetadata",
	];
	/** IAM actions required for the DescribeExport API call. */
	static readonly DESCRIBE_EXPORT: string[] = [
		"lex:DescribeBot",
		"lex:DescribeBotLocale",
		"lex:DescribeCustomVocabulary",
		"lex:DescribeExport",
		"lex:DescribeIntent",
		"lex:DescribeSlot",
		"lex:DescribeSlotType",
		"lex:DescribeTestSet",
		"lex:ListBotLocales",
		"lex:ListIntents",
		"lex:ListSlotTypes",
		"lex:ListSlots",
	];
	/** IAM actions required for the DescribeImport API call. */
	static readonly DESCRIBE_IMPORT: string[] = ["lex:DescribeImport"];
	/** IAM actions required for the DescribeIntent API call. */
	static readonly DESCRIBE_INTENT: string[] = ["lex:DescribeIntent"];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DESCRIBE_RESOURCE_POLICY: string[] = [
		"lex:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeSlot API call. */
	static readonly DESCRIBE_SLOT: string[] = ["lex:DescribeSlot"];
	/** IAM actions required for the DescribeSlotType API call. */
	static readonly DESCRIBE_SLOT_TYPE: string[] = ["lex:DescribeSlotType"];
	/** IAM actions required for the DescribeTestExecution API call. */
	static readonly DESCRIBE_TEST_EXECUTION: string[] = [
		"lex:DescribeTestExecution",
	];
	/** IAM actions required for the DescribeTestSet API call. */
	static readonly DESCRIBE_TEST_SET: string[] = ["lex:DescribeTestSet"];
	/** IAM actions required for the DescribeTestSetDiscrepancyReport API call. */
	static readonly DESCRIBE_TEST_SET_DISCREPANCY_REPORT: string[] = [
		"lex:DescribeTestSetDiscrepancyReport",
	];
	/** IAM actions required for the DescribeTestSetGeneration API call. */
	static readonly DESCRIBE_TEST_SET_GENERATION: string[] = [
		"lex:DescribeTestSetGeneration",
	];
	/** IAM actions required for the GenerateBotElement API call. */
	static readonly GENERATE_BOT_ELEMENT: string[] = ["lex:GenerateBotElement"];
	/** IAM actions required for the GetBot API call. */
	static readonly GET_BOT: string[] = ["lex:GetBot"];
	/** IAM actions required for the GetBotAlias API call. */
	static readonly GET_BOT_ALIAS: string[] = ["lex:GetBotAlias"];
	/** IAM actions required for the GetBotAliases API call. */
	static readonly GET_BOT_ALIASES: string[] = ["lex:GetBotAliases"];
	/** IAM actions required for the GetBotChannelAssociation API call. */
	static readonly GET_BOT_CHANNEL_ASSOCIATION: string[] = [
		"lex:GetBotChannelAssociation",
	];
	/** IAM actions required for the GetBotChannelAssociations API call. */
	static readonly GET_BOT_CHANNEL_ASSOCIATIONS: string[] = [
		"lex:GetBotChannelAssociations",
	];
	/** IAM actions required for the GetBotVersions API call. */
	static readonly GET_BOT_VERSIONS: string[] = ["lex:GetBotVersions"];
	/** IAM actions required for the GetBots API call. */
	static readonly GET_BOTS: string[] = ["lex:GetBots"];
	/** IAM actions required for the GetBuiltinIntent API call. */
	static readonly GET_BUILTIN_INTENT: string[] = ["lex:GetBuiltinIntent"];
	/** IAM actions required for the GetBuiltinIntents API call. */
	static readonly GET_BUILTIN_INTENTS: string[] = ["lex:GetBuiltinIntents"];
	/** IAM actions required for the GetBuiltinSlotTypes API call. */
	static readonly GET_BUILTIN_SLOT_TYPES: string[] = [
		"lex:GetBuiltinSlotTypes",
	];
	/** IAM actions required for the GetExport API call. */
	static readonly GET_EXPORT: string[] = ["lex:GetExport"];
	/** IAM actions required for the GetImport API call. */
	static readonly GET_IMPORT: string[] = ["lex:GetImport"];
	/** IAM actions required for the GetIntent API call. */
	static readonly GET_INTENT: string[] = ["lex:GetIntent"];
	/** IAM actions required for the GetIntentVersions API call. */
	static readonly GET_INTENT_VERSIONS: string[] = ["lex:GetIntentVersions"];
	/** IAM actions required for the GetIntents API call. */
	static readonly GET_INTENTS: string[] = ["lex:GetIntents"];
	/** IAM actions required for the GetMigration API call. */
	static readonly GET_MIGRATION: string[] = ["lex:GetMigration"];
	/** IAM actions required for the GetMigrations API call. */
	static readonly GET_MIGRATIONS: string[] = ["lex:GetMigrations"];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["lex:GetSession"];
	/** IAM actions required for the GetSlotType API call. */
	static readonly GET_SLOT_TYPE: string[] = ["lex:GetSlotType"];
	/** IAM actions required for the GetSlotTypeVersions API call. */
	static readonly GET_SLOT_TYPE_VERSIONS: string[] = [
		"lex:GetSlotTypeVersions",
	];
	/** IAM actions required for the GetSlotTypes API call. */
	static readonly GET_SLOT_TYPES: string[] = ["lex:GetSlotTypes"];
	/** IAM actions required for the GetTestExecutionArtifactsUrl API call. */
	static readonly GET_TEST_EXECUTION_ARTIFACTS_URL: string[] = [
		"lex:GetTestExecutionArtifactsUrl",
	];
	/** IAM actions required for the GetUtterancesView API call. */
	static readonly GET_UTTERANCES_VIEW: string[] = ["lex:GetUtterancesView"];
	/** IAM actions required for the ListAggregatedUtterances API call. */
	static readonly LIST_AGGREGATED_UTTERANCES: string[] = [
		"lex:ListAggregatedUtterances",
	];
	/** IAM actions required for the ListBotAliasReplicas API call. */
	static readonly LIST_BOT_ALIAS_REPLICAS: string[] = [
		"lex:ListBotAliasReplicas",
	];
	/** IAM actions required for the ListBotAliases API call. */
	static readonly LIST_BOT_ALIASES: string[] = ["lex:ListBotAliases"];
	/** IAM actions required for the ListBotAnalyzerHistory API call. */
	static readonly LIST_BOT_ANALYZER_HISTORY: string[] = [];
	/** IAM actions required for the ListBotLocales API call. */
	static readonly LIST_BOT_LOCALES: string[] = ["lex:ListBotLocales"];
	/** IAM actions required for the ListBotRecommendations API call. */
	static readonly LIST_BOT_RECOMMENDATIONS: string[] = [
		"lex:ListBotRecommendations",
	];
	/** IAM actions required for the ListBotReplicas API call. */
	static readonly LIST_BOT_REPLICAS: string[] = ["lex:ListBotReplicas"];
	/** IAM actions required for the ListBotResourceGenerations API call. */
	static readonly LIST_BOT_RESOURCE_GENERATIONS: string[] = [
		"lex:ListBotResourceGenerations",
	];
	/** IAM actions required for the ListBotVersionReplicas API call. */
	static readonly LIST_BOT_VERSION_REPLICAS: string[] = [
		"lex:ListBotVersionReplicas",
	];
	/** IAM actions required for the ListBotVersions API call. */
	static readonly LIST_BOT_VERSIONS: string[] = ["lex:ListBotVersions"];
	/** IAM actions required for the ListBots API call. */
	static readonly LIST_BOTS: string[] = ["lex:ListBots"];
	/** IAM actions required for the ListBuiltInIntents API call. */
	static readonly LIST_BUILT_IN_INTENTS: string[] = ["lex:ListBuiltInIntents"];
	/** IAM actions required for the ListBuiltInSlotTypes API call. */
	static readonly LIST_BUILT_IN_SLOT_TYPES: string[] = [
		"lex:ListBuiltInSlotTypes",
	];
	/** IAM actions required for the ListCustomVocabularyItems API call. */
	static readonly LIST_CUSTOM_VOCABULARY_ITEMS: string[] = [
		"lex:ListCustomVocabularyItems",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["lex:ListExports"];
	/** IAM actions required for the ListImports API call. */
	static readonly LIST_IMPORTS: string[] = ["lex:ListImports"];
	/** IAM actions required for the ListIntentMetrics API call. */
	static readonly LIST_INTENT_METRICS: string[] = ["lex:ListIntentMetrics"];
	/** IAM actions required for the ListIntentPaths API call. */
	static readonly LIST_INTENT_PATHS: string[] = ["lex:ListIntentPaths"];
	/** IAM actions required for the ListIntentStageMetrics API call. */
	static readonly LIST_INTENT_STAGE_METRICS: string[] = [
		"lex:ListIntentStageMetrics",
	];
	/** IAM actions required for the ListIntents API call. */
	static readonly LIST_INTENTS: string[] = ["lex:ListIntents"];
	/** IAM actions required for the ListRecommendedIntents API call. */
	static readonly LIST_RECOMMENDED_INTENTS: string[] = [
		"lex:ListRecommendedIntents",
	];
	/** IAM actions required for the ListSessionAnalyticsData API call. */
	static readonly LIST_SESSION_ANALYTICS_DATA: string[] = [
		"lex:ListSessionAnalyticsData",
	];
	/** IAM actions required for the ListSessionMetrics API call. */
	static readonly LIST_SESSION_METRICS: string[] = ["lex:ListSessionMetrics"];
	/** IAM actions required for the ListSlotTypes API call. */
	static readonly LIST_SLOT_TYPES: string[] = ["lex:ListSlotTypes"];
	/** IAM actions required for the ListSlots API call. */
	static readonly LIST_SLOTS: string[] = ["lex:ListSlots"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"lex:ListTagsForResource",
	];
	/** IAM actions required for the ListTestExecutionResultItems API call. */
	static readonly LIST_TEST_EXECUTION_RESULT_ITEMS: string[] = [
		"lex:ListTestExecutionResultItems",
		"lex:ListTestSetRecords",
	];
	/** IAM actions required for the ListTestExecutions API call. */
	static readonly LIST_TEST_EXECUTIONS: string[] = ["lex:ListTestExecutions"];
	/** IAM actions required for the ListTestSetRecords API call. */
	static readonly LIST_TEST_SET_RECORDS: string[] = ["lex:ListTestSetRecords"];
	/** IAM actions required for the ListTestSets API call. */
	static readonly LIST_TEST_SETS: string[] = ["lex:ListTestSets"];
	/** IAM actions required for the ListUtteranceAnalyticsData API call. */
	static readonly LIST_UTTERANCE_ANALYTICS_DATA: string[] = [
		"lex:ListAggregatedUtterances",
	];
	/** IAM actions required for the ListUtteranceMetrics API call. */
	static readonly LIST_UTTERANCE_METRICS: string[] = [
		"lex:ListAggregatedUtterances",
	];
	/** IAM actions required for the PostContent API call. */
	static readonly POST_CONTENT: string[] = ["lex:PostContent"];
	/** IAM actions required for the PostText API call. */
	static readonly POST_TEXT: string[] = ["lex:PostText"];
	/** IAM actions required for the PutBot API call. */
	static readonly PUT_BOT: string[] = ["lex:PutBot"];
	/** IAM actions required for the PutBotAlias API call. */
	static readonly PUT_BOT_ALIAS: string[] = [];
	/** IAM actions required for the PutIntent API call. */
	static readonly PUT_INTENT: string[] = ["lex:PutIntent"];
	/** IAM actions required for the PutSession API call. */
	static readonly PUT_SESSION: string[] = ["lex:PutSession"];
	/** IAM actions required for the PutSlotType API call. */
	static readonly PUT_SLOT_TYPE: string[] = ["lex:PutSlotType"];
	/** IAM actions required for the RecognizeText API call. */
	static readonly RECOGNIZE_TEXT: string[] = ["lex:RecognizeText"];
	/** IAM actions required for the RecognizeUtterance API call. */
	static readonly RECOGNIZE_UTTERANCE: string[] = ["lex:RecognizeUtterance"];
	/** IAM actions required for the SearchAssociatedTranscripts API call. */
	static readonly SEARCH_ASSOCIATED_TRANSCRIPTS: string[] = [
		"lex:SearchAssociatedTranscripts",
	];
	/** IAM actions required for the StartBotAnalyzer API call. */
	static readonly START_BOT_ANALYZER: string[] = ["lex:StartBotAnalyzer"];
	/** IAM actions required for the StartBotRecommendation API call. */
	static readonly START_BOT_RECOMMENDATION: string[] = [
		"lex:CreateIntent",
		"lex:CreateSlot",
		"lex:CreateSlotType",
		"lex:DeleteIntent",
		"lex:DeleteSlot",
		"lex:DeleteSlotType",
		"lex:StartBotRecommendation",
	];
	/** IAM actions required for the StartBotResourceGeneration API call. */
	static readonly START_BOT_RESOURCE_GENERATION: string[] = [
		"lex:StartBotResourceGeneration",
	];
	/** IAM actions required for the StartConversation API call. */
	static readonly START_CONVERSATION: string[] = ["lex:StartConversation"];
	/** IAM actions required for the StartImport API call. */
	static readonly START_IMPORT: string[] = [
		"lex:CreateBot",
		"lex:CreateBotLocale",
		"lex:CreateCustomVocabulary",
		"lex:CreateIntent",
		"lex:CreateSlot",
		"lex:CreateSlotType",
		"lex:CreateTestSet",
		"lex:DeleteBotLocale",
		"lex:DeleteCustomVocabulary",
		"lex:DeleteIntent",
		"lex:DeleteSlot",
		"lex:DeleteSlotType",
		"iam:PassRole",
		"lex:StartImport",
		"lex:TagResource",
		"lex:UpdateBot",
		"lex:UpdateBotLocale",
		"lex:UpdateCustomVocabulary",
		"lex:UpdateIntent",
		"lex:UpdateSlot",
		"lex:UpdateSlotType",
		"lex:UpdateTestSet",
	];
	/** IAM actions required for the StartMigration API call. */
	static readonly START_MIGRATION: string[] = [];
	/** IAM actions required for the StartTestExecution API call. */
	static readonly START_TEST_EXECUTION: string[] = ["lex:StartTestExecution"];
	/** IAM actions required for the StartTestSetGeneration API call. */
	static readonly START_TEST_SET_GENERATION: string[] = [
		"iam:PassRole",
		"lex:StartTestSetGeneration",
		"lex:TagResource",
	];
	/** IAM actions required for the StopBotAnalyzer API call. */
	static readonly STOP_BOT_ANALYZER: string[] = ["lex:StopBotAnalyzer"];
	/** IAM actions required for the StopBotRecommendation API call. */
	static readonly STOP_BOT_RECOMMENDATION: string[] = [
		"lex:StopBotRecommendation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["lex:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["lex:UntagResource"];
	/** IAM actions required for the UpdateBot API call. */
	static readonly UPDATE_BOT: string[] = [
		"lex:DescribeBotAlias",
		"lex:DescribeBotVersion",
		"iam:PassRole",
		"lex:UpdateBot",
	];
	/** IAM actions required for the UpdateBotAlias API call. */
	static readonly UPDATE_BOT_ALIAS: string[] = ["lex:UpdateBotAlias"];
	/** IAM actions required for the UpdateBotLocale API call. */
	static readonly UPDATE_BOT_LOCALE: string[] = ["lex:UpdateBotLocale"];
	/** IAM actions required for the UpdateBotRecommendation API call. */
	static readonly UPDATE_BOT_RECOMMENDATION: string[] = [
		"lex:UpdateBotRecommendation",
	];
	/** IAM actions required for the UpdateExport API call. */
	static readonly UPDATE_EXPORT: string[] = ["lex:UpdateExport"];
	/** IAM actions required for the UpdateIntent API call. */
	static readonly UPDATE_INTENT: string[] = ["lex:UpdateIntent"];
	/** IAM actions required for the UpdateResourcePolicy API call. */
	static readonly UPDATE_RESOURCE_POLICY: string[] = [
		"lex:UpdateResourcePolicy",
	];
	/** IAM actions required for the UpdateSlot API call. */
	static readonly UPDATE_SLOT: string[] = ["lex:UpdateSlot"];
	/** IAM actions required for the UpdateSlotType API call. */
	static readonly UPDATE_SLOT_TYPE: string[] = ["lex:UpdateSlotType"];
	/** IAM actions required for the UpdateTestSet API call. */
	static readonly UPDATE_TEST_SET: string[] = ["lex:UpdateTestSet"];
}

/**
 * Condition key constants and builders for lex.
 */
export class LexConditions {
	/** Condition keys applicable to the CreateBot action. */
	static readonly CREATE_BOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBotAlias action. */
	static readonly CREATE_BOT_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutBot action. */
	static readonly PUT_BOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutBotAlias action. */
	static readonly PUT_BOT_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartImport action. */
	static readonly START_IMPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: lex:associatedIntents (ArrayOfString) */
	static readonly ASSOCIATED_INTENTS = "lex:associatedIntents";
	/** Condition key: lex:associatedSlotTypes (ArrayOfString) */
	static readonly ASSOCIATED_SLOT_TYPES = "lex:associatedSlotTypes";
	/** Condition key: lex:channelType (String) */
	static readonly CHANNEL_TYPE = "lex:channelType";

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
	 * Generates a condition block for `lex:associatedIntents`.
	 */
	static associatedIntents(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "lex:associatedIntents": values } };
	}

	/**
	 * Generates a condition block for `lex:associatedSlotTypes`.
	 */
	static associatedSlotTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "lex:associatedSlotTypes": values },
		};
	}

	/**
	 * Generates a condition block for `lex:channelType`.
	 */
	static channelType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "lex:channelType": value } };
	}
}
