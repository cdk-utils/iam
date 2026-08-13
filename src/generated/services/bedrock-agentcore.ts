// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bedrock-agentcore.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the bedrock-agentcore service.
 */
export class BedrockAgentcoreActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bedrock-agentcore";

	/** [Write] bedrock-agentcore:AddDatasetExamples */
	static readonly ADD_DATASET_EXAMPLES = "bedrock-agentcore:AddDatasetExamples";
	/** [PermissionManagement] bedrock-agentcore:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE = "bedrock-agentcore:AllowVendedLogDeliveryForResource";
	/** [PermissionManagement] bedrock-agentcore:AuthorizeAction */
	static readonly AUTHORIZE_ACTION = "bedrock-agentcore:AuthorizeAction";
	/** [Write] bedrock-agentcore:BatchCreateMemoryRecords */
	static readonly BATCH_CREATE_MEMORY_RECORDS = "bedrock-agentcore:BatchCreateMemoryRecords";
	/** [Write] bedrock-agentcore:BatchDeleteMemoryRecords */
	static readonly BATCH_DELETE_MEMORY_RECORDS = "bedrock-agentcore:BatchDeleteMemoryRecords";
	/** [Write] bedrock-agentcore:BatchPutGatewayRateLimits */
	static readonly BATCH_PUT_GATEWAY_RATE_LIMITS = "bedrock-agentcore:BatchPutGatewayRateLimits";
	/** [Write] bedrock-agentcore:BatchUpdateMemoryRecords */
	static readonly BATCH_UPDATE_MEMORY_RECORDS = "bedrock-agentcore:BatchUpdateMemoryRecords";
	/** [Read] bedrock-agentcore:CompleteResourceTokenAuth */
	static readonly COMPLETE_RESOURCE_TOKEN_AUTH = "bedrock-agentcore:CompleteResourceTokenAuth";
	/** [Read] bedrock-agentcore:ConnectBrowserAutomationStream */
	static readonly CONNECT_BROWSER_AUTOMATION_STREAM = "bedrock-agentcore:ConnectBrowserAutomationStream";
	/** [Read] bedrock-agentcore:ConnectBrowserLiveViewStream */
	static readonly CONNECT_BROWSER_LIVE_VIEW_STREAM = "bedrock-agentcore:ConnectBrowserLiveViewStream";
	/** [Write] bedrock-agentcore:CreateABTest */
	static readonly CREATE_AB_TEST = "bedrock-agentcore:CreateABTest";
	/** [Write] bedrock-agentcore:CreateAgentRuntime */
	static readonly CREATE_AGENT_RUNTIME = "bedrock-agentcore:CreateAgentRuntime";
	/** [Write] bedrock-agentcore:CreateAgentRuntimeEndpoint */
	static readonly CREATE_AGENT_RUNTIME_ENDPOINT = "bedrock-agentcore:CreateAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:CreateApiKeyCredentialProvider */
	static readonly CREATE_API_KEY_CREDENTIAL_PROVIDER = "bedrock-agentcore:CreateApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:CreateBrowser */
	static readonly CREATE_BROWSER = "bedrock-agentcore:CreateBrowser";
	/** [Write] bedrock-agentcore:CreateBrowserProfile */
	static readonly CREATE_BROWSER_PROFILE = "bedrock-agentcore:CreateBrowserProfile";
	/** [Write] bedrock-agentcore:CreateCapacityProvider */
	static readonly CREATE_CAPACITY_PROVIDER = "bedrock-agentcore:CreateCapacityProvider";
	/** [Write] bedrock-agentcore:CreateCodeInterpreter */
	static readonly CREATE_CODE_INTERPRETER = "bedrock-agentcore:CreateCodeInterpreter";
	/** [Write] bedrock-agentcore:CreateConfigurationBundle */
	static readonly CREATE_CONFIGURATION_BUNDLE = "bedrock-agentcore:CreateConfigurationBundle";
	/** [Write] bedrock-agentcore:CreateDataset */
	static readonly CREATE_DATASET = "bedrock-agentcore:CreateDataset";
	/** [Write] bedrock-agentcore:CreateDatasetVersion */
	static readonly CREATE_DATASET_VERSION = "bedrock-agentcore:CreateDatasetVersion";
	/** [Write] bedrock-agentcore:CreateEvaluator */
	static readonly CREATE_EVALUATOR = "bedrock-agentcore:CreateEvaluator";
	/** [Write] bedrock-agentcore:CreateEvent */
	static readonly CREATE_EVENT = "bedrock-agentcore:CreateEvent";
	/** [Write] bedrock-agentcore:CreateGateway */
	static readonly CREATE_GATEWAY = "bedrock-agentcore:CreateGateway";
	/** [Write] bedrock-agentcore:CreateGatewayRateLimit */
	static readonly CREATE_GATEWAY_RATE_LIMIT = "bedrock-agentcore:CreateGatewayRateLimit";
	/** [Write] bedrock-agentcore:CreateGatewayRule */
	static readonly CREATE_GATEWAY_RULE = "bedrock-agentcore:CreateGatewayRule";
	/** [Write] bedrock-agentcore:CreateGatewayTarget */
	static readonly CREATE_GATEWAY_TARGET = "bedrock-agentcore:CreateGatewayTarget";
	/** [Write] bedrock-agentcore:CreateHarness */
	static readonly CREATE_HARNESS = "bedrock-agentcore:CreateHarness";
	/** [Write] bedrock-agentcore:CreateHarnessEndpoint */
	static readonly CREATE_HARNESS_ENDPOINT = "bedrock-agentcore:CreateHarnessEndpoint";
	/** [Write] bedrock-agentcore:CreateMemory */
	static readonly CREATE_MEMORY = "bedrock-agentcore:CreateMemory";
	/** [Write] bedrock-agentcore:CreateOauth2CredentialProvider */
	static readonly CREATE_OAUTH2_CREDENTIAL_PROVIDER = "bedrock-agentcore:CreateOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:CreateOnlineEvaluationConfig */
	static readonly CREATE_ONLINE_EVALUATION_CONFIG = "bedrock-agentcore:CreateOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:CreatePaymentConnector */
	static readonly CREATE_PAYMENT_CONNECTOR = "bedrock-agentcore:CreatePaymentConnector";
	/** [Write] bedrock-agentcore:CreatePaymentCredentialProvider */
	static readonly CREATE_PAYMENT_CREDENTIAL_PROVIDER = "bedrock-agentcore:CreatePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:CreatePaymentInstrument */
	static readonly CREATE_PAYMENT_INSTRUMENT = "bedrock-agentcore:CreatePaymentInstrument";
	/** [Write] bedrock-agentcore:CreatePaymentManager */
	static readonly CREATE_PAYMENT_MANAGER = "bedrock-agentcore:CreatePaymentManager";
	/** [Write] bedrock-agentcore:CreatePaymentSession */
	static readonly CREATE_PAYMENT_SESSION = "bedrock-agentcore:CreatePaymentSession";
	/** [Write] bedrock-agentcore:CreatePolicy */
	static readonly CREATE_POLICY = "bedrock-agentcore:CreatePolicy";
	/** [Write] bedrock-agentcore:CreatePolicyEngine */
	static readonly CREATE_POLICY_ENGINE = "bedrock-agentcore:CreatePolicyEngine";
	/** [Write] bedrock-agentcore:CreateRegistry */
	static readonly CREATE_REGISTRY = "bedrock-agentcore:CreateRegistry";
	/** [Write] bedrock-agentcore:CreateRegistryRecord */
	static readonly CREATE_REGISTRY_RECORD = "bedrock-agentcore:CreateRegistryRecord";
	/** [Write] bedrock-agentcore:CreateWorkloadIdentity */
	static readonly CREATE_WORKLOAD_IDENTITY = "bedrock-agentcore:CreateWorkloadIdentity";
	/** [Write] bedrock-agentcore:DeleteABTest */
	static readonly DELETE_AB_TEST = "bedrock-agentcore:DeleteABTest";
	/** [Write] bedrock-agentcore:DeleteAgentRuntime */
	static readonly DELETE_AGENT_RUNTIME = "bedrock-agentcore:DeleteAgentRuntime";
	/** [Write] bedrock-agentcore:DeleteAgentRuntimeEndpoint */
	static readonly DELETE_AGENT_RUNTIME_ENDPOINT = "bedrock-agentcore:DeleteAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:DeleteApiKeyCredentialProvider */
	static readonly DELETE_API_KEY_CREDENTIAL_PROVIDER = "bedrock-agentcore:DeleteApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:DeleteBatchEvaluation */
	static readonly DELETE_BATCH_EVALUATION = "bedrock-agentcore:DeleteBatchEvaluation";
	/** [Write] bedrock-agentcore:DeleteBrowser */
	static readonly DELETE_BROWSER = "bedrock-agentcore:DeleteBrowser";
	/** [Write] bedrock-agentcore:DeleteBrowserProfile */
	static readonly DELETE_BROWSER_PROFILE = "bedrock-agentcore:DeleteBrowserProfile";
	/** [Write] bedrock-agentcore:DeleteCapacityProvider */
	static readonly DELETE_CAPACITY_PROVIDER = "bedrock-agentcore:DeleteCapacityProvider";
	/** [Write] bedrock-agentcore:DeleteCapacityProviderSession */
	static readonly DELETE_CAPACITY_PROVIDER_SESSION = "bedrock-agentcore:DeleteCapacityProviderSession";
	/** [Write] bedrock-agentcore:DeleteCodeInterpreter */
	static readonly DELETE_CODE_INTERPRETER = "bedrock-agentcore:DeleteCodeInterpreter";
	/** [Write] bedrock-agentcore:DeleteConfigurationBundle */
	static readonly DELETE_CONFIGURATION_BUNDLE = "bedrock-agentcore:DeleteConfigurationBundle";
	/** [Write] bedrock-agentcore:DeleteDataset */
	static readonly DELETE_DATASET = "bedrock-agentcore:DeleteDataset";
	/** [Write] bedrock-agentcore:DeleteDatasetExamples */
	static readonly DELETE_DATASET_EXAMPLES = "bedrock-agentcore:DeleteDatasetExamples";
	/** [Write] bedrock-agentcore:DeleteEvaluator */
	static readonly DELETE_EVALUATOR = "bedrock-agentcore:DeleteEvaluator";
	/** [Write] bedrock-agentcore:DeleteEvent */
	static readonly DELETE_EVENT = "bedrock-agentcore:DeleteEvent";
	/** [Write] bedrock-agentcore:DeleteGateway */
	static readonly DELETE_GATEWAY = "bedrock-agentcore:DeleteGateway";
	/** [Write] bedrock-agentcore:DeleteGatewayRateLimit */
	static readonly DELETE_GATEWAY_RATE_LIMIT = "bedrock-agentcore:DeleteGatewayRateLimit";
	/** [Write] bedrock-agentcore:DeleteGatewayRule */
	static readonly DELETE_GATEWAY_RULE = "bedrock-agentcore:DeleteGatewayRule";
	/** [Write] bedrock-agentcore:DeleteGatewayTarget */
	static readonly DELETE_GATEWAY_TARGET = "bedrock-agentcore:DeleteGatewayTarget";
	/** [Write] bedrock-agentcore:DeleteHarness */
	static readonly DELETE_HARNESS = "bedrock-agentcore:DeleteHarness";
	/** [Write] bedrock-agentcore:DeleteHarnessEndpoint */
	static readonly DELETE_HARNESS_ENDPOINT = "bedrock-agentcore:DeleteHarnessEndpoint";
	/** [Write] bedrock-agentcore:DeleteMemory */
	static readonly DELETE_MEMORY = "bedrock-agentcore:DeleteMemory";
	/** [Write] bedrock-agentcore:DeleteMemoryRecord */
	static readonly DELETE_MEMORY_RECORD = "bedrock-agentcore:DeleteMemoryRecord";
	/** [Write] bedrock-agentcore:DeleteOauth2CredentialProvider */
	static readonly DELETE_OAUTH2_CREDENTIAL_PROVIDER = "bedrock-agentcore:DeleteOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:DeleteOnlineEvaluationConfig */
	static readonly DELETE_ONLINE_EVALUATION_CONFIG = "bedrock-agentcore:DeleteOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:DeletePaymentConnector */
	static readonly DELETE_PAYMENT_CONNECTOR = "bedrock-agentcore:DeletePaymentConnector";
	/** [Write] bedrock-agentcore:DeletePaymentCredentialProvider */
	static readonly DELETE_PAYMENT_CREDENTIAL_PROVIDER = "bedrock-agentcore:DeletePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:DeletePaymentInstrument */
	static readonly DELETE_PAYMENT_INSTRUMENT = "bedrock-agentcore:DeletePaymentInstrument";
	/** [Write] bedrock-agentcore:DeletePaymentManager */
	static readonly DELETE_PAYMENT_MANAGER = "bedrock-agentcore:DeletePaymentManager";
	/** [Write] bedrock-agentcore:DeletePaymentSession */
	static readonly DELETE_PAYMENT_SESSION = "bedrock-agentcore:DeletePaymentSession";
	/** [Write] bedrock-agentcore:DeletePolicy */
	static readonly DELETE_POLICY = "bedrock-agentcore:DeletePolicy";
	/** [Write] bedrock-agentcore:DeletePolicyEngine */
	static readonly DELETE_POLICY_ENGINE = "bedrock-agentcore:DeletePolicyEngine";
	/** [Write] bedrock-agentcore:DeleteRecommendation */
	static readonly DELETE_RECOMMENDATION = "bedrock-agentcore:DeleteRecommendation";
	/** [Write] bedrock-agentcore:DeleteRegistry */
	static readonly DELETE_REGISTRY = "bedrock-agentcore:DeleteRegistry";
	/** [Write] bedrock-agentcore:DeleteRegistryRecord */
	static readonly DELETE_REGISTRY_RECORD = "bedrock-agentcore:DeleteRegistryRecord";
	/** [Write] bedrock-agentcore:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "bedrock-agentcore:DeleteResourcePolicy";
	/** [Write] bedrock-agentcore:DeleteWorkloadIdentity */
	static readonly DELETE_WORKLOAD_IDENTITY = "bedrock-agentcore:DeleteWorkloadIdentity";
	/** [Write] bedrock-agentcore:Evaluate */
	static readonly EVALUATE = "bedrock-agentcore:Evaluate";
	/** [Write] bedrock-agentcore:GatewayAssociateWebACL */
	static readonly GATEWAY_ASSOCIATE_WEB_ACL = "bedrock-agentcore:GatewayAssociateWebACL";
	/** [Write] bedrock-agentcore:GatewayDisassociateWebACL */
	static readonly GATEWAY_DISASSOCIATE_WEB_ACL = "bedrock-agentcore:GatewayDisassociateWebACL";
	/** [Read] bedrock-agentcore:GatewayGetWebACLForResource */
	static readonly GATEWAY_GET_WEB_ACL_FOR_RESOURCE = "bedrock-agentcore:GatewayGetWebACLForResource";
	/** [List] bedrock-agentcore:GatewayListResourcesForWebACL */
	static readonly GATEWAY_LIST_RESOURCES_FOR_WEB_ACL = "bedrock-agentcore:GatewayListResourcesForWebACL";
	/** [Read] bedrock-agentcore:GetABTest */
	static readonly GET_AB_TEST = "bedrock-agentcore:GetABTest";
	/** [Read] bedrock-agentcore:GetAgentCard */
	static readonly GET_AGENT_CARD = "bedrock-agentcore:GetAgentCard";
	/** [Read] bedrock-agentcore:GetAgentRuntime */
	static readonly GET_AGENT_RUNTIME = "bedrock-agentcore:GetAgentRuntime";
	/** [Read] bedrock-agentcore:GetAgentRuntimeEndpoint */
	static readonly GET_AGENT_RUNTIME_ENDPOINT = "bedrock-agentcore:GetAgentRuntimeEndpoint";
	/** [Read] bedrock-agentcore:GetApiKeyCredentialProvider */
	static readonly GET_API_KEY_CREDENTIAL_PROVIDER = "bedrock-agentcore:GetApiKeyCredentialProvider";
	/** [Read] bedrock-agentcore:GetBatchEvaluation */
	static readonly GET_BATCH_EVALUATION = "bedrock-agentcore:GetBatchEvaluation";
	/** [Read] bedrock-agentcore:GetBrowser */
	static readonly GET_BROWSER = "bedrock-agentcore:GetBrowser";
	/** [Read] bedrock-agentcore:GetBrowserProfile */
	static readonly GET_BROWSER_PROFILE = "bedrock-agentcore:GetBrowserProfile";
	/** [Read] bedrock-agentcore:GetBrowserSession */
	static readonly GET_BROWSER_SESSION = "bedrock-agentcore:GetBrowserSession";
	/** [Read] bedrock-agentcore:GetCapacityProvider */
	static readonly GET_CAPACITY_PROVIDER = "bedrock-agentcore:GetCapacityProvider";
	/** [Read] bedrock-agentcore:GetCodeInterpreter */
	static readonly GET_CODE_INTERPRETER = "bedrock-agentcore:GetCodeInterpreter";
	/** [Read] bedrock-agentcore:GetCodeInterpreterSession */
	static readonly GET_CODE_INTERPRETER_SESSION = "bedrock-agentcore:GetCodeInterpreterSession";
	/** [Read] bedrock-agentcore:GetConfigurationBundle */
	static readonly GET_CONFIGURATION_BUNDLE = "bedrock-agentcore:GetConfigurationBundle";
	/** [Read] bedrock-agentcore:GetConfigurationBundleVersion */
	static readonly GET_CONFIGURATION_BUNDLE_VERSION = "bedrock-agentcore:GetConfigurationBundleVersion";
	/** [Read] bedrock-agentcore:GetDataset */
	static readonly GET_DATASET = "bedrock-agentcore:GetDataset";
	/** [Read] bedrock-agentcore:GetEvaluator */
	static readonly GET_EVALUATOR = "bedrock-agentcore:GetEvaluator";
	/** [Read] bedrock-agentcore:GetEvent */
	static readonly GET_EVENT = "bedrock-agentcore:GetEvent";
	/** [Read] bedrock-agentcore:GetGateway */
	static readonly GET_GATEWAY = "bedrock-agentcore:GetGateway";
	/** [Read] bedrock-agentcore:GetGatewayRateLimit */
	static readonly GET_GATEWAY_RATE_LIMIT = "bedrock-agentcore:GetGatewayRateLimit";
	/** [Read] bedrock-agentcore:GetGatewayRule */
	static readonly GET_GATEWAY_RULE = "bedrock-agentcore:GetGatewayRule";
	/** [Read] bedrock-agentcore:GetGatewayTarget */
	static readonly GET_GATEWAY_TARGET = "bedrock-agentcore:GetGatewayTarget";
	/** [Read] bedrock-agentcore:GetHarness */
	static readonly GET_HARNESS = "bedrock-agentcore:GetHarness";
	/** [Read] bedrock-agentcore:GetHarnessEndpoint */
	static readonly GET_HARNESS_ENDPOINT = "bedrock-agentcore:GetHarnessEndpoint";
	/** [Read] bedrock-agentcore:GetMemory */
	static readonly GET_MEMORY = "bedrock-agentcore:GetMemory";
	/** [Read] bedrock-agentcore:GetMemoryRecord */
	static readonly GET_MEMORY_RECORD = "bedrock-agentcore:GetMemoryRecord";
	/** [Read] bedrock-agentcore:GetOauth2CredentialProvider */
	static readonly GET_OAUTH2_CREDENTIAL_PROVIDER = "bedrock-agentcore:GetOauth2CredentialProvider";
	/** [Read] bedrock-agentcore:GetOnlineEvaluationConfig */
	static readonly GET_ONLINE_EVALUATION_CONFIG = "bedrock-agentcore:GetOnlineEvaluationConfig";
	/** [Read] bedrock-agentcore:GetPaymentConnector */
	static readonly GET_PAYMENT_CONNECTOR = "bedrock-agentcore:GetPaymentConnector";
	/** [Read] bedrock-agentcore:GetPaymentCredentialProvider */
	static readonly GET_PAYMENT_CREDENTIAL_PROVIDER = "bedrock-agentcore:GetPaymentCredentialProvider";
	/** [Read] bedrock-agentcore:GetPaymentInstrument */
	static readonly GET_PAYMENT_INSTRUMENT = "bedrock-agentcore:GetPaymentInstrument";
	/** [Read] bedrock-agentcore:GetPaymentInstrumentBalance */
	static readonly GET_PAYMENT_INSTRUMENT_BALANCE = "bedrock-agentcore:GetPaymentInstrumentBalance";
	/** [Read] bedrock-agentcore:GetPaymentManager */
	static readonly GET_PAYMENT_MANAGER = "bedrock-agentcore:GetPaymentManager";
	/** [Read] bedrock-agentcore:GetPaymentSession */
	static readonly GET_PAYMENT_SESSION = "bedrock-agentcore:GetPaymentSession";
	/** [Read] bedrock-agentcore:GetPolicy */
	static readonly GET_POLICY = "bedrock-agentcore:GetPolicy";
	/** [Read] bedrock-agentcore:GetPolicyEngine */
	static readonly GET_POLICY_ENGINE = "bedrock-agentcore:GetPolicyEngine";
	/** [Read] bedrock-agentcore:GetPolicyEngineSummary */
	static readonly GET_POLICY_ENGINE_SUMMARY = "bedrock-agentcore:GetPolicyEngineSummary";
	/** [Read] bedrock-agentcore:GetPolicyGeneration */
	static readonly GET_POLICY_GENERATION = "bedrock-agentcore:GetPolicyGeneration";
	/** [Read] bedrock-agentcore:GetPolicyGenerationSummary */
	static readonly GET_POLICY_GENERATION_SUMMARY = "bedrock-agentcore:GetPolicyGenerationSummary";
	/** [Read] bedrock-agentcore:GetPolicySummary */
	static readonly GET_POLICY_SUMMARY = "bedrock-agentcore:GetPolicySummary";
	/** [Read] bedrock-agentcore:GetRecommendation */
	static readonly GET_RECOMMENDATION = "bedrock-agentcore:GetRecommendation";
	/** [Read] bedrock-agentcore:GetRegistry */
	static readonly GET_REGISTRY = "bedrock-agentcore:GetRegistry";
	/** [Read] bedrock-agentcore:GetRegistryRecord */
	static readonly GET_REGISTRY_RECORD = "bedrock-agentcore:GetRegistryRecord";
	/** [Read] bedrock-agentcore:GetResourceApiKey */
	static readonly GET_RESOURCE_API_KEY = "bedrock-agentcore:GetResourceApiKey";
	/** [Read] bedrock-agentcore:GetResourceOauth2Token */
	static readonly GET_RESOURCE_OAUTH2_TOKEN = "bedrock-agentcore:GetResourceOauth2Token";
	/** [Read] bedrock-agentcore:GetResourcePaymentToken */
	static readonly GET_RESOURCE_PAYMENT_TOKEN = "bedrock-agentcore:GetResourcePaymentToken";
	/** [Read] bedrock-agentcore:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "bedrock-agentcore:GetResourcePolicy";
	/** [Read] bedrock-agentcore:GetTokenVault */
	static readonly GET_TOKEN_VAULT = "bedrock-agentcore:GetTokenVault";
	/** [Write] bedrock-agentcore:GetWorkloadAccessToken */
	static readonly GET_WORKLOAD_ACCESS_TOKEN = "bedrock-agentcore:GetWorkloadAccessToken";
	/** [Write] bedrock-agentcore:GetWorkloadAccessTokenForJWT */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_JWT = "bedrock-agentcore:GetWorkloadAccessTokenForJWT";
	/** [Write] bedrock-agentcore:GetWorkloadAccessTokenForUserId */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_USER_ID = "bedrock-agentcore:GetWorkloadAccessTokenForUserId";
	/** [Read] bedrock-agentcore:GetWorkloadIdentity */
	static readonly GET_WORKLOAD_IDENTITY = "bedrock-agentcore:GetWorkloadIdentity";
	/** [Write] bedrock-agentcore:InvokeAgentRuntime */
	static readonly INVOKE_AGENT_RUNTIME = "bedrock-agentcore:InvokeAgentRuntime";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeCommand */
	static readonly INVOKE_AGENT_RUNTIME_COMMAND = "bedrock-agentcore:InvokeAgentRuntimeCommand";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeCommandShell */
	static readonly INVOKE_AGENT_RUNTIME_COMMAND_SHELL = "bedrock-agentcore:InvokeAgentRuntimeCommandShell";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeForUser */
	static readonly INVOKE_AGENT_RUNTIME_FOR_USER = "bedrock-agentcore:InvokeAgentRuntimeForUser";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream */
	static readonly INVOKE_AGENT_RUNTIME_WITH_WEB_SOCKET_STREAM = "bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser */
	static readonly INVOKE_AGENT_RUNTIME_WITH_WEB_SOCKET_STREAM_FOR_USER = "bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser";
	/** [Write] bedrock-agentcore:InvokeCodeInterpreter */
	static readonly INVOKE_CODE_INTERPRETER = "bedrock-agentcore:InvokeCodeInterpreter";
	/** [PermissionManagement] bedrock-agentcore:InvokeGateway */
	static readonly INVOKE_GATEWAY = "bedrock-agentcore:InvokeGateway";
	/** [Write] bedrock-agentcore:InvokeHarness */
	static readonly INVOKE_HARNESS = "bedrock-agentcore:InvokeHarness";
	/** [Read] bedrock-agentcore:InvokeRegistryMcp */
	static readonly INVOKE_REGISTRY_MCP = "bedrock-agentcore:InvokeRegistryMcp";
	/** [PermissionManagement] bedrock-agentcore:InvokeWebSearch */
	static readonly INVOKE_WEB_SEARCH = "bedrock-agentcore:InvokeWebSearch";
	/** [List] bedrock-agentcore:ListABTests */
	static readonly LIST_AB_TESTS = "bedrock-agentcore:ListABTests";
	/** [List] bedrock-agentcore:ListActors */
	static readonly LIST_ACTORS = "bedrock-agentcore:ListActors";
	/** [List] bedrock-agentcore:ListAgentRuntimeEndpoints */
	static readonly LIST_AGENT_RUNTIME_ENDPOINTS = "bedrock-agentcore:ListAgentRuntimeEndpoints";
	/** [List] bedrock-agentcore:ListAgentRuntimeVersions */
	static readonly LIST_AGENT_RUNTIME_VERSIONS = "bedrock-agentcore:ListAgentRuntimeVersions";
	/** [List] bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider */
	static readonly LIST_AGENT_RUNTIME_VERSIONS_BY_CAPACITY_PROVIDER = "bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider";
	/** [List] bedrock-agentcore:ListAgentRuntimes */
	static readonly LIST_AGENT_RUNTIMES = "bedrock-agentcore:ListAgentRuntimes";
	/** [Read] bedrock-agentcore:ListApiKeyCredentialProviders */
	static readonly LIST_API_KEY_CREDENTIAL_PROVIDERS = "bedrock-agentcore:ListApiKeyCredentialProviders";
	/** [List] bedrock-agentcore:ListBatchEvaluations */
	static readonly LIST_BATCH_EVALUATIONS = "bedrock-agentcore:ListBatchEvaluations";
	/** [List] bedrock-agentcore:ListBrowserProfiles */
	static readonly LIST_BROWSER_PROFILES = "bedrock-agentcore:ListBrowserProfiles";
	/** [List] bedrock-agentcore:ListBrowserSessions */
	static readonly LIST_BROWSER_SESSIONS = "bedrock-agentcore:ListBrowserSessions";
	/** [List] bedrock-agentcore:ListBrowsers */
	static readonly LIST_BROWSERS = "bedrock-agentcore:ListBrowsers";
	/** [List] bedrock-agentcore:ListCapacityProviders */
	static readonly LIST_CAPACITY_PROVIDERS = "bedrock-agentcore:ListCapacityProviders";
	/** [List] bedrock-agentcore:ListCodeInterpreterSessions */
	static readonly LIST_CODE_INTERPRETER_SESSIONS = "bedrock-agentcore:ListCodeInterpreterSessions";
	/** [List] bedrock-agentcore:ListCodeInterpreters */
	static readonly LIST_CODE_INTERPRETERS = "bedrock-agentcore:ListCodeInterpreters";
	/** [List] bedrock-agentcore:ListConfigurationBundleVersions */
	static readonly LIST_CONFIGURATION_BUNDLE_VERSIONS = "bedrock-agentcore:ListConfigurationBundleVersions";
	/** [List] bedrock-agentcore:ListConfigurationBundles */
	static readonly LIST_CONFIGURATION_BUNDLES = "bedrock-agentcore:ListConfigurationBundles";
	/** [List] bedrock-agentcore:ListDatasetExamples */
	static readonly LIST_DATASET_EXAMPLES = "bedrock-agentcore:ListDatasetExamples";
	/** [List] bedrock-agentcore:ListDatasetVersions */
	static readonly LIST_DATASET_VERSIONS = "bedrock-agentcore:ListDatasetVersions";
	/** [List] bedrock-agentcore:ListDatasets */
	static readonly LIST_DATASETS = "bedrock-agentcore:ListDatasets";
	/** [List] bedrock-agentcore:ListEvaluators */
	static readonly LIST_EVALUATORS = "bedrock-agentcore:ListEvaluators";
	/** [List] bedrock-agentcore:ListEvents */
	static readonly LIST_EVENTS = "bedrock-agentcore:ListEvents";
	/** [List] bedrock-agentcore:ListGatewayRateLimits */
	static readonly LIST_GATEWAY_RATE_LIMITS = "bedrock-agentcore:ListGatewayRateLimits";
	/** [List] bedrock-agentcore:ListGatewayRules */
	static readonly LIST_GATEWAY_RULES = "bedrock-agentcore:ListGatewayRules";
	/** [List] bedrock-agentcore:ListGatewayTargets */
	static readonly LIST_GATEWAY_TARGETS = "bedrock-agentcore:ListGatewayTargets";
	/** [List] bedrock-agentcore:ListGateways */
	static readonly LIST_GATEWAYS = "bedrock-agentcore:ListGateways";
	/** [List] bedrock-agentcore:ListHarnessEndpoints */
	static readonly LIST_HARNESS_ENDPOINTS = "bedrock-agentcore:ListHarnessEndpoints";
	/** [List] bedrock-agentcore:ListHarnessVersions */
	static readonly LIST_HARNESS_VERSIONS = "bedrock-agentcore:ListHarnessVersions";
	/** [List] bedrock-agentcore:ListHarnesses */
	static readonly LIST_HARNESSES = "bedrock-agentcore:ListHarnesses";
	/** [List] bedrock-agentcore:ListMemories */
	static readonly LIST_MEMORIES = "bedrock-agentcore:ListMemories";
	/** [List] bedrock-agentcore:ListMemoryExtractionJobs */
	static readonly LIST_MEMORY_EXTRACTION_JOBS = "bedrock-agentcore:ListMemoryExtractionJobs";
	/** [List] bedrock-agentcore:ListMemoryRecords */
	static readonly LIST_MEMORY_RECORDS = "bedrock-agentcore:ListMemoryRecords";
	/** [Read] bedrock-agentcore:ListOauth2CredentialProviders */
	static readonly LIST_OAUTH2_CREDENTIAL_PROVIDERS = "bedrock-agentcore:ListOauth2CredentialProviders";
	/** [List] bedrock-agentcore:ListOnlineEvaluationConfigs */
	static readonly LIST_ONLINE_EVALUATION_CONFIGS = "bedrock-agentcore:ListOnlineEvaluationConfigs";
	/** [List] bedrock-agentcore:ListPaymentConnectors */
	static readonly LIST_PAYMENT_CONNECTORS = "bedrock-agentcore:ListPaymentConnectors";
	/** [List] bedrock-agentcore:ListPaymentCredentialProviders */
	static readonly LIST_PAYMENT_CREDENTIAL_PROVIDERS = "bedrock-agentcore:ListPaymentCredentialProviders";
	/** [List] bedrock-agentcore:ListPaymentInstruments */
	static readonly LIST_PAYMENT_INSTRUMENTS = "bedrock-agentcore:ListPaymentInstruments";
	/** [List] bedrock-agentcore:ListPaymentManagers */
	static readonly LIST_PAYMENT_MANAGERS = "bedrock-agentcore:ListPaymentManagers";
	/** [List] bedrock-agentcore:ListPaymentSessions */
	static readonly LIST_PAYMENT_SESSIONS = "bedrock-agentcore:ListPaymentSessions";
	/** [List] bedrock-agentcore:ListPolicies */
	static readonly LIST_POLICIES = "bedrock-agentcore:ListPolicies";
	/** [List] bedrock-agentcore:ListPolicyEngineSummaries */
	static readonly LIST_POLICY_ENGINE_SUMMARIES = "bedrock-agentcore:ListPolicyEngineSummaries";
	/** [List] bedrock-agentcore:ListPolicyEngines */
	static readonly LIST_POLICY_ENGINES = "bedrock-agentcore:ListPolicyEngines";
	/** [List] bedrock-agentcore:ListPolicyGenerationAssets */
	static readonly LIST_POLICY_GENERATION_ASSETS = "bedrock-agentcore:ListPolicyGenerationAssets";
	/** [List] bedrock-agentcore:ListPolicyGenerationSummaries */
	static readonly LIST_POLICY_GENERATION_SUMMARIES = "bedrock-agentcore:ListPolicyGenerationSummaries";
	/** [List] bedrock-agentcore:ListPolicyGenerations */
	static readonly LIST_POLICY_GENERATIONS = "bedrock-agentcore:ListPolicyGenerations";
	/** [List] bedrock-agentcore:ListPolicySummaries */
	static readonly LIST_POLICY_SUMMARIES = "bedrock-agentcore:ListPolicySummaries";
	/** [List] bedrock-agentcore:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "bedrock-agentcore:ListRecommendations";
	/** [List] bedrock-agentcore:ListRegistries */
	static readonly LIST_REGISTRIES = "bedrock-agentcore:ListRegistries";
	/** [List] bedrock-agentcore:ListRegistryRecords */
	static readonly LIST_REGISTRY_RECORDS = "bedrock-agentcore:ListRegistryRecords";
	/** [List] bedrock-agentcore:ListSessions */
	static readonly LIST_SESSIONS = "bedrock-agentcore:ListSessions";
	/** [List] bedrock-agentcore:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "bedrock-agentcore:ListTagsForResource";
	/** [Read] bedrock-agentcore:ListWorkloadIdentities */
	static readonly LIST_WORKLOAD_IDENTITIES = "bedrock-agentcore:ListWorkloadIdentities";
	/** [PermissionManagement] bedrock-agentcore:ManageAdminPolicy */
	static readonly MANAGE_ADMIN_POLICY = "bedrock-agentcore:ManageAdminPolicy";
	/** [PermissionManagement] bedrock-agentcore:ManageResourceScopedPolicy */
	static readonly MANAGE_RESOURCE_SCOPED_POLICY = "bedrock-agentcore:ManageResourceScopedPolicy";
	/** [PermissionManagement] bedrock-agentcore:PartiallyAuthorizeActions */
	static readonly PARTIALLY_AUTHORIZE_ACTIONS = "bedrock-agentcore:PartiallyAuthorizeActions";
	/** [Write] bedrock-agentcore:PassCapacityProvider */
	static readonly PASS_CAPACITY_PROVIDER = "bedrock-agentcore:PassCapacityProvider";
	/** [Write] bedrock-agentcore:ProcessPayment */
	static readonly PROCESS_PAYMENT = "bedrock-agentcore:ProcessPayment";
	/** [Write] bedrock-agentcore:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "bedrock-agentcore:PutResourcePolicy";
	/** [Write] bedrock-agentcore:PutSystemLogEvents */
	static readonly PUT_SYSTEM_LOG_EVENTS = "bedrock-agentcore:PutSystemLogEvents";
	/** [List] bedrock-agentcore:RetrieveMemoryRecords */
	static readonly RETRIEVE_MEMORY_RECORDS = "bedrock-agentcore:RetrieveMemoryRecords";
	/** [Write] bedrock-agentcore:SaveBrowserSessionProfile */
	static readonly SAVE_BROWSER_SESSION_PROFILE = "bedrock-agentcore:SaveBrowserSessionProfile";
	/** [Read] bedrock-agentcore:SearchRegistryRecords */
	static readonly SEARCH_REGISTRY_RECORDS = "bedrock-agentcore:SearchRegistryRecords";
	/** [Write] bedrock-agentcore:SetTokenVaultCMK */
	static readonly SET_TOKEN_VAULT_CMK = "bedrock-agentcore:SetTokenVaultCMK";
	/** [Write] bedrock-agentcore:StartBatchEvaluation */
	static readonly START_BATCH_EVALUATION = "bedrock-agentcore:StartBatchEvaluation";
	/** [Write] bedrock-agentcore:StartBrowserSession */
	static readonly START_BROWSER_SESSION = "bedrock-agentcore:StartBrowserSession";
	/** [Write] bedrock-agentcore:StartCodeInterpreterSession */
	static readonly START_CODE_INTERPRETER_SESSION = "bedrock-agentcore:StartCodeInterpreterSession";
	/** [Write] bedrock-agentcore:StartMemoryExtractionJob */
	static readonly START_MEMORY_EXTRACTION_JOB = "bedrock-agentcore:StartMemoryExtractionJob";
	/** [Write] bedrock-agentcore:StartPolicyGeneration */
	static readonly START_POLICY_GENERATION = "bedrock-agentcore:StartPolicyGeneration";
	/** [Write] bedrock-agentcore:StartRecommendation */
	static readonly START_RECOMMENDATION = "bedrock-agentcore:StartRecommendation";
	/** [Write] bedrock-agentcore:StopBatchEvaluation */
	static readonly STOP_BATCH_EVALUATION = "bedrock-agentcore:StopBatchEvaluation";
	/** [Write] bedrock-agentcore:StopBrowserSession */
	static readonly STOP_BROWSER_SESSION = "bedrock-agentcore:StopBrowserSession";
	/** [Write] bedrock-agentcore:StopCodeInterpreterSession */
	static readonly STOP_CODE_INTERPRETER_SESSION = "bedrock-agentcore:StopCodeInterpreterSession";
	/** [Write] bedrock-agentcore:StopRuntimeSession */
	static readonly STOP_RUNTIME_SESSION = "bedrock-agentcore:StopRuntimeSession";
	/** [Write] bedrock-agentcore:SubmitRegistryRecordForApproval */
	static readonly SUBMIT_REGISTRY_RECORD_FOR_APPROVAL = "bedrock-agentcore:SubmitRegistryRecordForApproval";
	/** [PermissionManagement] bedrock-agentcore:SynchronizeGatewayTargets */
	static readonly SYNCHRONIZE_GATEWAY_TARGETS = "bedrock-agentcore:SynchronizeGatewayTargets";
	/** [Tagging] bedrock-agentcore:TagResource */
	static readonly TAG_RESOURCE = "bedrock-agentcore:TagResource";
	/** [Tagging] bedrock-agentcore:UntagResource */
	static readonly UNTAG_RESOURCE = "bedrock-agentcore:UntagResource";
	/** [Write] bedrock-agentcore:UpdateABTest */
	static readonly UPDATE_AB_TEST = "bedrock-agentcore:UpdateABTest";
	/** [Write] bedrock-agentcore:UpdateAgentRuntime */
	static readonly UPDATE_AGENT_RUNTIME = "bedrock-agentcore:UpdateAgentRuntime";
	/** [Write] bedrock-agentcore:UpdateAgentRuntimeEndpoint */
	static readonly UPDATE_AGENT_RUNTIME_ENDPOINT = "bedrock-agentcore:UpdateAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:UpdateApiKeyCredentialProvider */
	static readonly UPDATE_API_KEY_CREDENTIAL_PROVIDER = "bedrock-agentcore:UpdateApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:UpdateBrowserStream */
	static readonly UPDATE_BROWSER_STREAM = "bedrock-agentcore:UpdateBrowserStream";
	/** [Write] bedrock-agentcore:UpdateCapacityProvider */
	static readonly UPDATE_CAPACITY_PROVIDER = "bedrock-agentcore:UpdateCapacityProvider";
	/** [Write] bedrock-agentcore:UpdateConfigurationBundle */
	static readonly UPDATE_CONFIGURATION_BUNDLE = "bedrock-agentcore:UpdateConfigurationBundle";
	/** [Write] bedrock-agentcore:UpdateDataset */
	static readonly UPDATE_DATASET = "bedrock-agentcore:UpdateDataset";
	/** [Write] bedrock-agentcore:UpdateDatasetExamples */
	static readonly UPDATE_DATASET_EXAMPLES = "bedrock-agentcore:UpdateDatasetExamples";
	/** [Write] bedrock-agentcore:UpdateEvaluator */
	static readonly UPDATE_EVALUATOR = "bedrock-agentcore:UpdateEvaluator";
	/** [Write] bedrock-agentcore:UpdateGateway */
	static readonly UPDATE_GATEWAY = "bedrock-agentcore:UpdateGateway";
	/** [Write] bedrock-agentcore:UpdateGatewayRateLimit */
	static readonly UPDATE_GATEWAY_RATE_LIMIT = "bedrock-agentcore:UpdateGatewayRateLimit";
	/** [Write] bedrock-agentcore:UpdateGatewayRule */
	static readonly UPDATE_GATEWAY_RULE = "bedrock-agentcore:UpdateGatewayRule";
	/** [Write] bedrock-agentcore:UpdateGatewayTarget */
	static readonly UPDATE_GATEWAY_TARGET = "bedrock-agentcore:UpdateGatewayTarget";
	/** [Write] bedrock-agentcore:UpdateHarness */
	static readonly UPDATE_HARNESS = "bedrock-agentcore:UpdateHarness";
	/** [Write] bedrock-agentcore:UpdateHarnessEndpoint */
	static readonly UPDATE_HARNESS_ENDPOINT = "bedrock-agentcore:UpdateHarnessEndpoint";
	/** [Write] bedrock-agentcore:UpdateMemory */
	static readonly UPDATE_MEMORY = "bedrock-agentcore:UpdateMemory";
	/** [Write] bedrock-agentcore:UpdateOauth2CredentialProvider */
	static readonly UPDATE_OAUTH2_CREDENTIAL_PROVIDER = "bedrock-agentcore:UpdateOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:UpdateOnlineEvaluationConfig */
	static readonly UPDATE_ONLINE_EVALUATION_CONFIG = "bedrock-agentcore:UpdateOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:UpdatePaymentConnector */
	static readonly UPDATE_PAYMENT_CONNECTOR = "bedrock-agentcore:UpdatePaymentConnector";
	/** [Write] bedrock-agentcore:UpdatePaymentCredentialProvider */
	static readonly UPDATE_PAYMENT_CREDENTIAL_PROVIDER = "bedrock-agentcore:UpdatePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:UpdatePaymentManager */
	static readonly UPDATE_PAYMENT_MANAGER = "bedrock-agentcore:UpdatePaymentManager";
	/** [Write] bedrock-agentcore:UpdatePolicy */
	static readonly UPDATE_POLICY = "bedrock-agentcore:UpdatePolicy";
	/** [Write] bedrock-agentcore:UpdatePolicyEngine */
	static readonly UPDATE_POLICY_ENGINE = "bedrock-agentcore:UpdatePolicyEngine";
	/** [Write] bedrock-agentcore:UpdateRegistry */
	static readonly UPDATE_REGISTRY = "bedrock-agentcore:UpdateRegistry";
	/** [Write] bedrock-agentcore:UpdateRegistryRecord */
	static readonly UPDATE_REGISTRY_RECORD = "bedrock-agentcore:UpdateRegistryRecord";
	/** [Write] bedrock-agentcore:UpdateRegistryRecordStatus */
	static readonly UPDATE_REGISTRY_RECORD_STATUS = "bedrock-agentcore:UpdateRegistryRecordStatus";
	/** [Write] bedrock-agentcore:UpdateWorkloadIdentity */
	static readonly UPDATE_WORKLOAD_IDENTITY = "bedrock-agentcore:UpdateWorkloadIdentity";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [BedrockAgentcoreActions.COMPLETE_RESOURCE_TOKEN_AUTH, BedrockAgentcoreActions.CONNECT_BROWSER_AUTOMATION_STREAM, BedrockAgentcoreActions.CONNECT_BROWSER_LIVE_VIEW_STREAM, BedrockAgentcoreActions.GATEWAY_GET_WEB_ACL_FOR_RESOURCE, BedrockAgentcoreActions.GET_AB_TEST, BedrockAgentcoreActions.GET_AGENT_CARD, BedrockAgentcoreActions.GET_AGENT_RUNTIME, BedrockAgentcoreActions.GET_AGENT_RUNTIME_ENDPOINT, BedrockAgentcoreActions.GET_API_KEY_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.GET_BATCH_EVALUATION, BedrockAgentcoreActions.GET_BROWSER, BedrockAgentcoreActions.GET_BROWSER_PROFILE, BedrockAgentcoreActions.GET_BROWSER_SESSION, BedrockAgentcoreActions.GET_CAPACITY_PROVIDER, BedrockAgentcoreActions.GET_CODE_INTERPRETER, BedrockAgentcoreActions.GET_CODE_INTERPRETER_SESSION, BedrockAgentcoreActions.GET_CONFIGURATION_BUNDLE, BedrockAgentcoreActions.GET_CONFIGURATION_BUNDLE_VERSION, BedrockAgentcoreActions.GET_DATASET, BedrockAgentcoreActions.GET_EVALUATOR, BedrockAgentcoreActions.GET_EVENT, BedrockAgentcoreActions.GET_GATEWAY, BedrockAgentcoreActions.GET_GATEWAY_RATE_LIMIT, BedrockAgentcoreActions.GET_GATEWAY_RULE, BedrockAgentcoreActions.GET_GATEWAY_TARGET, BedrockAgentcoreActions.GET_HARNESS, BedrockAgentcoreActions.GET_HARNESS_ENDPOINT, BedrockAgentcoreActions.GET_MEMORY, BedrockAgentcoreActions.GET_MEMORY_RECORD, BedrockAgentcoreActions.GET_OAUTH2_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.GET_ONLINE_EVALUATION_CONFIG, BedrockAgentcoreActions.GET_PAYMENT_CONNECTOR, BedrockAgentcoreActions.GET_PAYMENT_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.GET_PAYMENT_INSTRUMENT, BedrockAgentcoreActions.GET_PAYMENT_INSTRUMENT_BALANCE, BedrockAgentcoreActions.GET_PAYMENT_MANAGER, BedrockAgentcoreActions.GET_PAYMENT_SESSION, BedrockAgentcoreActions.GET_POLICY, BedrockAgentcoreActions.GET_POLICY_ENGINE, BedrockAgentcoreActions.GET_POLICY_ENGINE_SUMMARY, BedrockAgentcoreActions.GET_POLICY_GENERATION, BedrockAgentcoreActions.GET_POLICY_GENERATION_SUMMARY, BedrockAgentcoreActions.GET_POLICY_SUMMARY, BedrockAgentcoreActions.GET_RECOMMENDATION, BedrockAgentcoreActions.GET_REGISTRY, BedrockAgentcoreActions.GET_REGISTRY_RECORD, BedrockAgentcoreActions.GET_RESOURCE_API_KEY, BedrockAgentcoreActions.GET_RESOURCE_OAUTH2_TOKEN, BedrockAgentcoreActions.GET_RESOURCE_PAYMENT_TOKEN, BedrockAgentcoreActions.GET_RESOURCE_POLICY, BedrockAgentcoreActions.GET_TOKEN_VAULT, BedrockAgentcoreActions.GET_WORKLOAD_IDENTITY, BedrockAgentcoreActions.INVOKE_REGISTRY_MCP, BedrockAgentcoreActions.LIST_API_KEY_CREDENTIAL_PROVIDERS, BedrockAgentcoreActions.LIST_OAUTH2_CREDENTIAL_PROVIDERS, BedrockAgentcoreActions.LIST_WORKLOAD_IDENTITIES, BedrockAgentcoreActions.SEARCH_REGISTRY_RECORDS];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [BedrockAgentcoreActions.ADD_DATASET_EXAMPLES, BedrockAgentcoreActions.BATCH_CREATE_MEMORY_RECORDS, BedrockAgentcoreActions.BATCH_DELETE_MEMORY_RECORDS, BedrockAgentcoreActions.BATCH_PUT_GATEWAY_RATE_LIMITS, BedrockAgentcoreActions.BATCH_UPDATE_MEMORY_RECORDS, BedrockAgentcoreActions.CREATE_AB_TEST, BedrockAgentcoreActions.CREATE_AGENT_RUNTIME, BedrockAgentcoreActions.CREATE_AGENT_RUNTIME_ENDPOINT, BedrockAgentcoreActions.CREATE_API_KEY_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.CREATE_BROWSER, BedrockAgentcoreActions.CREATE_BROWSER_PROFILE, BedrockAgentcoreActions.CREATE_CAPACITY_PROVIDER, BedrockAgentcoreActions.CREATE_CODE_INTERPRETER, BedrockAgentcoreActions.CREATE_CONFIGURATION_BUNDLE, BedrockAgentcoreActions.CREATE_DATASET, BedrockAgentcoreActions.CREATE_DATASET_VERSION, BedrockAgentcoreActions.CREATE_EVALUATOR, BedrockAgentcoreActions.CREATE_EVENT, BedrockAgentcoreActions.CREATE_GATEWAY, BedrockAgentcoreActions.CREATE_GATEWAY_RATE_LIMIT, BedrockAgentcoreActions.CREATE_GATEWAY_RULE, BedrockAgentcoreActions.CREATE_GATEWAY_TARGET, BedrockAgentcoreActions.CREATE_HARNESS, BedrockAgentcoreActions.CREATE_HARNESS_ENDPOINT, BedrockAgentcoreActions.CREATE_MEMORY, BedrockAgentcoreActions.CREATE_OAUTH2_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.CREATE_ONLINE_EVALUATION_CONFIG, BedrockAgentcoreActions.CREATE_PAYMENT_CONNECTOR, BedrockAgentcoreActions.CREATE_PAYMENT_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.CREATE_PAYMENT_INSTRUMENT, BedrockAgentcoreActions.CREATE_PAYMENT_MANAGER, BedrockAgentcoreActions.CREATE_PAYMENT_SESSION, BedrockAgentcoreActions.CREATE_POLICY, BedrockAgentcoreActions.CREATE_POLICY_ENGINE, BedrockAgentcoreActions.CREATE_REGISTRY, BedrockAgentcoreActions.CREATE_REGISTRY_RECORD, BedrockAgentcoreActions.CREATE_WORKLOAD_IDENTITY, BedrockAgentcoreActions.DELETE_AB_TEST, BedrockAgentcoreActions.DELETE_AGENT_RUNTIME, BedrockAgentcoreActions.DELETE_AGENT_RUNTIME_ENDPOINT, BedrockAgentcoreActions.DELETE_API_KEY_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.DELETE_BATCH_EVALUATION, BedrockAgentcoreActions.DELETE_BROWSER, BedrockAgentcoreActions.DELETE_BROWSER_PROFILE, BedrockAgentcoreActions.DELETE_CAPACITY_PROVIDER, BedrockAgentcoreActions.DELETE_CAPACITY_PROVIDER_SESSION, BedrockAgentcoreActions.DELETE_CODE_INTERPRETER, BedrockAgentcoreActions.DELETE_CONFIGURATION_BUNDLE, BedrockAgentcoreActions.DELETE_DATASET, BedrockAgentcoreActions.DELETE_DATASET_EXAMPLES, BedrockAgentcoreActions.DELETE_EVALUATOR, BedrockAgentcoreActions.DELETE_EVENT, BedrockAgentcoreActions.DELETE_GATEWAY, BedrockAgentcoreActions.DELETE_GATEWAY_RATE_LIMIT, BedrockAgentcoreActions.DELETE_GATEWAY_RULE, BedrockAgentcoreActions.DELETE_GATEWAY_TARGET, BedrockAgentcoreActions.DELETE_HARNESS, BedrockAgentcoreActions.DELETE_HARNESS_ENDPOINT, BedrockAgentcoreActions.DELETE_MEMORY, BedrockAgentcoreActions.DELETE_MEMORY_RECORD, BedrockAgentcoreActions.DELETE_OAUTH2_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.DELETE_ONLINE_EVALUATION_CONFIG, BedrockAgentcoreActions.DELETE_PAYMENT_CONNECTOR, BedrockAgentcoreActions.DELETE_PAYMENT_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.DELETE_PAYMENT_INSTRUMENT, BedrockAgentcoreActions.DELETE_PAYMENT_MANAGER, BedrockAgentcoreActions.DELETE_PAYMENT_SESSION, BedrockAgentcoreActions.DELETE_POLICY, BedrockAgentcoreActions.DELETE_POLICY_ENGINE, BedrockAgentcoreActions.DELETE_RECOMMENDATION, BedrockAgentcoreActions.DELETE_REGISTRY, BedrockAgentcoreActions.DELETE_REGISTRY_RECORD, BedrockAgentcoreActions.DELETE_RESOURCE_POLICY, BedrockAgentcoreActions.DELETE_WORKLOAD_IDENTITY, BedrockAgentcoreActions.EVALUATE, BedrockAgentcoreActions.GATEWAY_ASSOCIATE_WEB_ACL, BedrockAgentcoreActions.GATEWAY_DISASSOCIATE_WEB_ACL, BedrockAgentcoreActions.GET_WORKLOAD_ACCESS_TOKEN, BedrockAgentcoreActions.GET_WORKLOAD_ACCESS_TOKEN_FOR_JWT, BedrockAgentcoreActions.GET_WORKLOAD_ACCESS_TOKEN_FOR_USER_ID, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME_COMMAND, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME_COMMAND_SHELL, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME_FOR_USER, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME_WITH_WEB_SOCKET_STREAM, BedrockAgentcoreActions.INVOKE_AGENT_RUNTIME_WITH_WEB_SOCKET_STREAM_FOR_USER, BedrockAgentcoreActions.INVOKE_CODE_INTERPRETER, BedrockAgentcoreActions.INVOKE_HARNESS, BedrockAgentcoreActions.PASS_CAPACITY_PROVIDER, BedrockAgentcoreActions.PROCESS_PAYMENT, BedrockAgentcoreActions.PUT_RESOURCE_POLICY, BedrockAgentcoreActions.PUT_SYSTEM_LOG_EVENTS, BedrockAgentcoreActions.SAVE_BROWSER_SESSION_PROFILE, BedrockAgentcoreActions.SET_TOKEN_VAULT_CMK, BedrockAgentcoreActions.START_BATCH_EVALUATION, BedrockAgentcoreActions.START_BROWSER_SESSION, BedrockAgentcoreActions.START_CODE_INTERPRETER_SESSION, BedrockAgentcoreActions.START_MEMORY_EXTRACTION_JOB, BedrockAgentcoreActions.START_POLICY_GENERATION, BedrockAgentcoreActions.START_RECOMMENDATION, BedrockAgentcoreActions.STOP_BATCH_EVALUATION, BedrockAgentcoreActions.STOP_BROWSER_SESSION, BedrockAgentcoreActions.STOP_CODE_INTERPRETER_SESSION, BedrockAgentcoreActions.STOP_RUNTIME_SESSION, BedrockAgentcoreActions.SUBMIT_REGISTRY_RECORD_FOR_APPROVAL, BedrockAgentcoreActions.UPDATE_AB_TEST, BedrockAgentcoreActions.UPDATE_AGENT_RUNTIME, BedrockAgentcoreActions.UPDATE_AGENT_RUNTIME_ENDPOINT, BedrockAgentcoreActions.UPDATE_API_KEY_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.UPDATE_BROWSER_STREAM, BedrockAgentcoreActions.UPDATE_CAPACITY_PROVIDER, BedrockAgentcoreActions.UPDATE_CONFIGURATION_BUNDLE, BedrockAgentcoreActions.UPDATE_DATASET, BedrockAgentcoreActions.UPDATE_DATASET_EXAMPLES, BedrockAgentcoreActions.UPDATE_EVALUATOR, BedrockAgentcoreActions.UPDATE_GATEWAY, BedrockAgentcoreActions.UPDATE_GATEWAY_RATE_LIMIT, BedrockAgentcoreActions.UPDATE_GATEWAY_RULE, BedrockAgentcoreActions.UPDATE_GATEWAY_TARGET, BedrockAgentcoreActions.UPDATE_HARNESS, BedrockAgentcoreActions.UPDATE_HARNESS_ENDPOINT, BedrockAgentcoreActions.UPDATE_MEMORY, BedrockAgentcoreActions.UPDATE_OAUTH2_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.UPDATE_ONLINE_EVALUATION_CONFIG, BedrockAgentcoreActions.UPDATE_PAYMENT_CONNECTOR, BedrockAgentcoreActions.UPDATE_PAYMENT_CREDENTIAL_PROVIDER, BedrockAgentcoreActions.UPDATE_PAYMENT_MANAGER, BedrockAgentcoreActions.UPDATE_POLICY, BedrockAgentcoreActions.UPDATE_POLICY_ENGINE, BedrockAgentcoreActions.UPDATE_REGISTRY, BedrockAgentcoreActions.UPDATE_REGISTRY_RECORD, BedrockAgentcoreActions.UPDATE_REGISTRY_RECORD_STATUS, BedrockAgentcoreActions.UPDATE_WORKLOAD_IDENTITY];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [BedrockAgentcoreActions.GATEWAY_LIST_RESOURCES_FOR_WEB_ACL, BedrockAgentcoreActions.LIST_AB_TESTS, BedrockAgentcoreActions.LIST_ACTORS, BedrockAgentcoreActions.LIST_AGENT_RUNTIME_ENDPOINTS, BedrockAgentcoreActions.LIST_AGENT_RUNTIME_VERSIONS, BedrockAgentcoreActions.LIST_AGENT_RUNTIME_VERSIONS_BY_CAPACITY_PROVIDER, BedrockAgentcoreActions.LIST_AGENT_RUNTIMES, BedrockAgentcoreActions.LIST_BATCH_EVALUATIONS, BedrockAgentcoreActions.LIST_BROWSER_PROFILES, BedrockAgentcoreActions.LIST_BROWSER_SESSIONS, BedrockAgentcoreActions.LIST_BROWSERS, BedrockAgentcoreActions.LIST_CAPACITY_PROVIDERS, BedrockAgentcoreActions.LIST_CODE_INTERPRETER_SESSIONS, BedrockAgentcoreActions.LIST_CODE_INTERPRETERS, BedrockAgentcoreActions.LIST_CONFIGURATION_BUNDLE_VERSIONS, BedrockAgentcoreActions.LIST_CONFIGURATION_BUNDLES, BedrockAgentcoreActions.LIST_DATASET_EXAMPLES, BedrockAgentcoreActions.LIST_DATASET_VERSIONS, BedrockAgentcoreActions.LIST_DATASETS, BedrockAgentcoreActions.LIST_EVALUATORS, BedrockAgentcoreActions.LIST_EVENTS, BedrockAgentcoreActions.LIST_GATEWAY_RATE_LIMITS, BedrockAgentcoreActions.LIST_GATEWAY_RULES, BedrockAgentcoreActions.LIST_GATEWAY_TARGETS, BedrockAgentcoreActions.LIST_GATEWAYS, BedrockAgentcoreActions.LIST_HARNESS_ENDPOINTS, BedrockAgentcoreActions.LIST_HARNESS_VERSIONS, BedrockAgentcoreActions.LIST_HARNESSES, BedrockAgentcoreActions.LIST_MEMORIES, BedrockAgentcoreActions.LIST_MEMORY_EXTRACTION_JOBS, BedrockAgentcoreActions.LIST_MEMORY_RECORDS, BedrockAgentcoreActions.LIST_ONLINE_EVALUATION_CONFIGS, BedrockAgentcoreActions.LIST_PAYMENT_CONNECTORS, BedrockAgentcoreActions.LIST_PAYMENT_CREDENTIAL_PROVIDERS, BedrockAgentcoreActions.LIST_PAYMENT_INSTRUMENTS, BedrockAgentcoreActions.LIST_PAYMENT_MANAGERS, BedrockAgentcoreActions.LIST_PAYMENT_SESSIONS, BedrockAgentcoreActions.LIST_POLICIES, BedrockAgentcoreActions.LIST_POLICY_ENGINE_SUMMARIES, BedrockAgentcoreActions.LIST_POLICY_ENGINES, BedrockAgentcoreActions.LIST_POLICY_GENERATION_ASSETS, BedrockAgentcoreActions.LIST_POLICY_GENERATION_SUMMARIES, BedrockAgentcoreActions.LIST_POLICY_GENERATIONS, BedrockAgentcoreActions.LIST_POLICY_SUMMARIES, BedrockAgentcoreActions.LIST_RECOMMENDATIONS, BedrockAgentcoreActions.LIST_REGISTRIES, BedrockAgentcoreActions.LIST_REGISTRY_RECORDS, BedrockAgentcoreActions.LIST_SESSIONS, BedrockAgentcoreActions.LIST_TAGS_FOR_RESOURCE, BedrockAgentcoreActions.RETRIEVE_MEMORY_RECORDS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [BedrockAgentcoreActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE, BedrockAgentcoreActions.AUTHORIZE_ACTION, BedrockAgentcoreActions.INVOKE_GATEWAY, BedrockAgentcoreActions.INVOKE_WEB_SEARCH, BedrockAgentcoreActions.MANAGE_ADMIN_POLICY, BedrockAgentcoreActions.MANAGE_RESOURCE_SCOPED_POLICY, BedrockAgentcoreActions.PARTIALLY_AUTHORIZE_ACTIONS, BedrockAgentcoreActions.SYNCHRONIZE_GATEWAY_TARGETS];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [BedrockAgentcoreActions.TAG_RESOURCE, BedrockAgentcoreActions.UNTAG_RESOURCE];
}

const AbTestArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):ab-test/(?<abTestId>[^:/?]+)$");
const ApikeycredentialproviderArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault/(?<tokenVaultId>[^:/?]+)/apikeycredentialprovider/(?<name>[^:/?]+)$");
const BatchEvaluateArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):batch-evaluate/(?<batchEvaluationId>[^:/?]+)$");
const BrowserArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):aws:browser/(?<browserId>[^:/?]+)$");
const BrowserCustomArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):browser-custom/(?<browserId>[^:/?]+)$");
const BrowserProfileArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):browser-profile/(?<browserProfileId>[^:/?]+)$");
const CapacityProviderArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):capacity-provider/(?<capacityProviderId>[^:/?]+)$");
const CodeInterpreterArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):aws:code-interpreter/(?<codeInterpreterId>[^:/?]+)$");
const CodeInterpreterCustomArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):code-interpreter-custom/(?<codeInterpreterId>[^:/?]+)$");
const ConfigurationBundleArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):configuration-bundle/(?<configurationBundleId>[^:/?]+)$");
const DatasetArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetId>[^:/?]+)$");
const EvaluatorArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):evaluator/(?<evaluatorId>[^:/?]+)$");
const GatewayArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$");
const HarnessArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):harness/(?<harnessId>[^:/?]+)$");
const HarnessEndpointArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):harness/(?<harnessId>[^:/?]+)/harness-endpoint/(?<name>[^:/?]+)$");
const MemoryArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):memory/(?<memoryId>[^:/?]+)$");
const Oauth2credentialproviderArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault/(?<tokenVaultId>[^:/?]+)/oauth2credentialprovider/(?<name>[^:/?]+)$");
const OnlineEvaluationConfigArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):online-evaluation-config/(?<onlineEvaluationConfigId>[^:/?]+)$");
const PaymentManagerArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):payment-manager/(?<paymentManagerId>[^:/?]+)$");
const PaymentcredentialproviderArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault/(?<tokenVaultId>[^:/?]+)/paymentcredentialprovider/(?<name>[^:/?]+)$");
const PolicyArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine/(?<policyEngineId>[^:/?]+)/policy/(?<policyId>[^:/?]+)$");
const PolicyEngineArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine/(?<policyEngineId>[^:/?]+)$");
const PolicyGenerationArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine/(?<policyEngineId>[^:/?]+)/policy-generation/(?<policyGenerationId>[^:/?]+)$");
const RecommendationArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):recommendation/(?<recommendationId>[^:/?]+)$");
const RegistryArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryId>[^:/?]+)$");
const RegistryRecordArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryId>[^:/?]+)/record/(?<recordId>[^:/?]+)$");
const RuntimeArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):runtime/(?<runtimeId>[^:/?]+)$");
const RuntimeEndpointArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):runtime/(?<runtimeId>[^:/?]+)/runtime-endpoint/(?<name>[^:/?]+)$");
const TokenVaultArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault/(?<tokenVaultId>[^:/?]+)$");
const WebSearchArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):tool/web-search\\.v1$");
const WorkloadIdentityArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):workload-identity-directory/(?<directoryId>[^:/?]+)/workload-identity/(?<workloadIdentityName>[^:/?]+)$");
const WorkloadIdentityDirectoryArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):workload-identity-directory/(?<directoryId>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for bedrock-agentcore resources.
 */
export class BedrockAgentcoreResources {
	/**
	 * Builds an ARN for the ab-test resource.
	 */
	static abTest(props: {
		/** The ABTestId component of the ARN. */
		readonly abTestId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:ab-test/${props.abTestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ab-test resource.
	 */
	static isValidAbTestArn(arn: string): boolean {
		return AbTestArnRegex.test(arn);
	}

	/**
	 * Parses a ab-test ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAbTestArn(arn: string): { partition: string; region: string; account: string; abTestId: string } {
		const match = AbTestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ab-test ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			abTestId: match.groups!.abTestId,
		};
	}

	/**
	 * Builds an ARN for the apikeycredentialprovider resource.
	 */
	static apikeycredentialprovider(props: {
		/** The TokenVaultId component of the ARN. */
		readonly tokenVaultId: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:token-vault/${props.tokenVaultId}/apikeycredentialprovider/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the apikeycredentialprovider resource.
	 */
	static isValidApikeycredentialproviderArn(arn: string): boolean {
		return ApikeycredentialproviderArnRegex.test(arn);
	}

	/**
	 * Parses a apikeycredentialprovider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApikeycredentialproviderArn(arn: string): { partition: string; region: string; account: string; tokenVaultId: string; name: string } {
		const match = ApikeycredentialproviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid apikeycredentialprovider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tokenVaultId: match.groups!.tokenVaultId,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the batch-evaluate resource.
	 */
	static batchEvaluate(props: {
		/** The BatchEvaluationId component of the ARN. */
		readonly batchEvaluationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:batch-evaluate/${props.batchEvaluationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batch-evaluate resource.
	 */
	static isValidBatchEvaluateArn(arn: string): boolean {
		return BatchEvaluateArnRegex.test(arn);
	}

	/**
	 * Parses a batch-evaluate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchEvaluateArn(arn: string): { partition: string; region: string; account: string; batchEvaluationId: string } {
		const match = BatchEvaluateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batch-evaluate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			batchEvaluationId: match.groups!.batchEvaluationId,
		};
	}

	/**
	 * Builds an ARN for the browser resource.
	 */
	static browser(props: {
		/** The BrowserId component of the ARN. */
		readonly browserId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:aws:browser/${props.browserId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the browser resource.
	 */
	static isValidBrowserArn(arn: string): boolean {
		return BrowserArnRegex.test(arn);
	}

	/**
	 * Parses a browser ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrowserArn(arn: string): { partition: string; region: string; account: string; browserId: string } {
		const match = BrowserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid browser ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			browserId: match.groups!.browserId,
		};
	}

	/**
	 * Builds an ARN for the browser-custom resource.
	 */
	static browserCustom(props: {
		/** The BrowserId component of the ARN. */
		readonly browserId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:browser-custom/${props.browserId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the browser-custom resource.
	 */
	static isValidBrowserCustomArn(arn: string): boolean {
		return BrowserCustomArnRegex.test(arn);
	}

	/**
	 * Parses a browser-custom ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrowserCustomArn(arn: string): { partition: string; region: string; account: string; browserId: string } {
		const match = BrowserCustomArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid browser-custom ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			browserId: match.groups!.browserId,
		};
	}

	/**
	 * Builds an ARN for the browser-profile resource.
	 */
	static browserProfile(props: {
		/** The BrowserProfileId component of the ARN. */
		readonly browserProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:browser-profile/${props.browserProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the browser-profile resource.
	 */
	static isValidBrowserProfileArn(arn: string): boolean {
		return BrowserProfileArnRegex.test(arn);
	}

	/**
	 * Parses a browser-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrowserProfileArn(arn: string): { partition: string; region: string; account: string; browserProfileId: string } {
		const match = BrowserProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid browser-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			browserProfileId: match.groups!.browserProfileId,
		};
	}

	/**
	 * Builds an ARN for the capacity-provider resource.
	 */
	static capacityProvider(props: {
		/** The CapacityProviderId component of the ARN. */
		readonly capacityProviderId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:capacity-provider/${props.capacityProviderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capacity-provider resource.
	 */
	static isValidCapacityProviderArn(arn: string): boolean {
		return CapacityProviderArnRegex.test(arn);
	}

	/**
	 * Parses a capacity-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapacityProviderArn(arn: string): { partition: string; region: string; account: string; capacityProviderId: string } {
		const match = CapacityProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capacity-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			capacityProviderId: match.groups!.capacityProviderId,
		};
	}

	/**
	 * Builds an ARN for the code-interpreter resource.
	 */
	static codeInterpreter(props: {
		/** The CodeInterpreterId component of the ARN. */
		readonly codeInterpreterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:aws:code-interpreter/${props.codeInterpreterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-interpreter resource.
	 */
	static isValidCodeInterpreterArn(arn: string): boolean {
		return CodeInterpreterArnRegex.test(arn);
	}

	/**
	 * Parses a code-interpreter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeInterpreterArn(arn: string): { partition: string; region: string; account: string; codeInterpreterId: string } {
		const match = CodeInterpreterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-interpreter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			codeInterpreterId: match.groups!.codeInterpreterId,
		};
	}

	/**
	 * Builds an ARN for the code-interpreter-custom resource.
	 */
	static codeInterpreterCustom(props: {
		/** The CodeInterpreterId component of the ARN. */
		readonly codeInterpreterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:code-interpreter-custom/${props.codeInterpreterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-interpreter-custom resource.
	 */
	static isValidCodeInterpreterCustomArn(arn: string): boolean {
		return CodeInterpreterCustomArnRegex.test(arn);
	}

	/**
	 * Parses a code-interpreter-custom ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeInterpreterCustomArn(arn: string): { partition: string; region: string; account: string; codeInterpreterId: string } {
		const match = CodeInterpreterCustomArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-interpreter-custom ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			codeInterpreterId: match.groups!.codeInterpreterId,
		};
	}

	/**
	 * Builds an ARN for the configuration-bundle resource.
	 */
	static configurationBundle(props: {
		/** The ConfigurationBundleId component of the ARN. */
		readonly configurationBundleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:configuration-bundle/${props.configurationBundleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration-bundle resource.
	 */
	static isValidConfigurationBundleArn(arn: string): boolean {
		return ConfigurationBundleArnRegex.test(arn);
	}

	/**
	 * Parses a configuration-bundle ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationBundleArn(arn: string): { partition: string; region: string; account: string; configurationBundleId: string } {
		const match = ConfigurationBundleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration-bundle ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationBundleId: match.groups!.configurationBundleId,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The DatasetId component of the ARN. */
		readonly datasetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}`;
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
	static parseDatasetArn(arn: string): { partition: string; region: string; account: string; datasetId: string } {
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
	 * Builds an ARN for the evaluator resource.
	 */
	static evaluator(props: {
		/** The EvaluatorId component of the ARN. */
		readonly evaluatorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:evaluator/${props.evaluatorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the evaluator resource.
	 */
	static isValidEvaluatorArn(arn: string): boolean {
		return EvaluatorArnRegex.test(arn);
	}

	/**
	 * Parses a evaluator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEvaluatorArn(arn: string): { partition: string; region: string; account: string; evaluatorId: string } {
		const match = EvaluatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid evaluator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			evaluatorId: match.groups!.evaluatorId,
		};
	}

	/**
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gateway resource.
	 */
	static isValidGatewayArn(arn: string): boolean {
		return GatewayArnRegex.test(arn);
	}

	/**
	 * Parses a gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayArn(arn: string): { partition: string; region: string; account: string; gatewayId: string } {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the harness resource.
	 */
	static harness(props: {
		/** The HarnessId component of the ARN. */
		readonly harnessId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:harness/${props.harnessId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the harness resource.
	 */
	static isValidHarnessArn(arn: string): boolean {
		return HarnessArnRegex.test(arn);
	}

	/**
	 * Parses a harness ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHarnessArn(arn: string): { partition: string; region: string; account: string; harnessId: string } {
		const match = HarnessArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid harness ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			harnessId: match.groups!.harnessId,
		};
	}

	/**
	 * Builds an ARN for the harness-endpoint resource.
	 */
	static harnessEndpoint(props: {
		/** The HarnessId component of the ARN. */
		readonly harnessId: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:harness/${props.harnessId}/harness-endpoint/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the harness-endpoint resource.
	 */
	static isValidHarnessEndpointArn(arn: string): boolean {
		return HarnessEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a harness-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHarnessEndpointArn(arn: string): { partition: string; region: string; account: string; harnessId: string; name: string } {
		const match = HarnessEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid harness-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			harnessId: match.groups!.harnessId,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the memory resource.
	 */
	static memory(props: {
		/** The MemoryId component of the ARN. */
		readonly memoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:memory/${props.memoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the memory resource.
	 */
	static isValidMemoryArn(arn: string): boolean {
		return MemoryArnRegex.test(arn);
	}

	/**
	 * Parses a memory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMemoryArn(arn: string): { partition: string; region: string; account: string; memoryId: string } {
		const match = MemoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid memory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			memoryId: match.groups!.memoryId,
		};
	}

	/**
	 * Builds an ARN for the oauth2credentialprovider resource.
	 */
	static oauth2credentialprovider(props: {
		/** The TokenVaultId component of the ARN. */
		readonly tokenVaultId: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:token-vault/${props.tokenVaultId}/oauth2credentialprovider/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauth2credentialprovider resource.
	 */
	static isValidOauth2credentialproviderArn(arn: string): boolean {
		return Oauth2credentialproviderArnRegex.test(arn);
	}

	/**
	 * Parses a oauth2credentialprovider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauth2credentialproviderArn(arn: string): { partition: string; region: string; account: string; tokenVaultId: string; name: string } {
		const match = Oauth2credentialproviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauth2credentialprovider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tokenVaultId: match.groups!.tokenVaultId,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the online-evaluation-config resource.
	 */
	static onlineEvaluationConfig(props: {
		/** The OnlineEvaluationConfigId component of the ARN. */
		readonly onlineEvaluationConfigId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:online-evaluation-config/${props.onlineEvaluationConfigId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the online-evaluation-config resource.
	 */
	static isValidOnlineEvaluationConfigArn(arn: string): boolean {
		return OnlineEvaluationConfigArnRegex.test(arn);
	}

	/**
	 * Parses a online-evaluation-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOnlineEvaluationConfigArn(arn: string): { partition: string; region: string; account: string; onlineEvaluationConfigId: string } {
		const match = OnlineEvaluationConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid online-evaluation-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			onlineEvaluationConfigId: match.groups!.onlineEvaluationConfigId,
		};
	}

	/**
	 * Builds an ARN for the payment-manager resource.
	 */
	static paymentManager(props: {
		/** The PaymentManagerId component of the ARN. */
		readonly paymentManagerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:payment-manager/${props.paymentManagerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the payment-manager resource.
	 */
	static isValidPaymentManagerArn(arn: string): boolean {
		return PaymentManagerArnRegex.test(arn);
	}

	/**
	 * Parses a payment-manager ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePaymentManagerArn(arn: string): { partition: string; region: string; account: string; paymentManagerId: string } {
		const match = PaymentManagerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid payment-manager ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			paymentManagerId: match.groups!.paymentManagerId,
		};
	}

	/**
	 * Builds an ARN for the paymentcredentialprovider resource.
	 */
	static paymentcredentialprovider(props: {
		/** The TokenVaultId component of the ARN. */
		readonly tokenVaultId: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:token-vault/${props.tokenVaultId}/paymentcredentialprovider/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the paymentcredentialprovider resource.
	 */
	static isValidPaymentcredentialproviderArn(arn: string): boolean {
		return PaymentcredentialproviderArnRegex.test(arn);
	}

	/**
	 * Parses a paymentcredentialprovider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePaymentcredentialproviderArn(arn: string): { partition: string; region: string; account: string; tokenVaultId: string; name: string } {
		const match = PaymentcredentialproviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid paymentcredentialprovider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tokenVaultId: match.groups!.tokenVaultId,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: {
		/** The PolicyEngineId component of the ARN. */
		readonly policyEngineId: string;
		/** The PolicyId component of the ARN. */
		readonly policyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:policy-engine/${props.policyEngineId}/policy/${props.policyId}`;
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
	static parsePolicyArn(arn: string): { partition: string; region: string; account: string; policyEngineId: string; policyId: string } {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyEngineId: match.groups!.policyEngineId,
			policyId: match.groups!.policyId,
		};
	}

	/**
	 * Builds an ARN for the policy-engine resource.
	 */
	static policyEngine(props: {
		/** The PolicyEngineId component of the ARN. */
		readonly policyEngineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:policy-engine/${props.policyEngineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy-engine resource.
	 */
	static isValidPolicyEngineArn(arn: string): boolean {
		return PolicyEngineArnRegex.test(arn);
	}

	/**
	 * Parses a policy-engine ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyEngineArn(arn: string): { partition: string; region: string; account: string; policyEngineId: string } {
		const match = PolicyEngineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy-engine ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyEngineId: match.groups!.policyEngineId,
		};
	}

	/**
	 * Builds an ARN for the policy-generation resource.
	 */
	static policyGeneration(props: {
		/** The PolicyEngineId component of the ARN. */
		readonly policyEngineId: string;
		/** The PolicyGenerationId component of the ARN. */
		readonly policyGenerationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:policy-engine/${props.policyEngineId}/policy-generation/${props.policyGenerationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy-generation resource.
	 */
	static isValidPolicyGenerationArn(arn: string): boolean {
		return PolicyGenerationArnRegex.test(arn);
	}

	/**
	 * Parses a policy-generation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyGenerationArn(arn: string): { partition: string; region: string; account: string; policyEngineId: string; policyGenerationId: string } {
		const match = PolicyGenerationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy-generation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyEngineId: match.groups!.policyEngineId,
			policyGenerationId: match.groups!.policyGenerationId,
		};
	}

	/**
	 * Builds an ARN for the recommendation resource.
	 */
	static recommendation(props: {
		/** The RecommendationId component of the ARN. */
		readonly recommendationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:recommendation/${props.recommendationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommendation resource.
	 */
	static isValidRecommendationArn(arn: string): boolean {
		return RecommendationArnRegex.test(arn);
	}

	/**
	 * Parses a recommendation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommendationArn(arn: string): { partition: string; region: string; account: string; recommendationId: string } {
		const match = RecommendationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommendation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recommendationId: match.groups!.recommendationId,
		};
	}

	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: {
		/** The RegistryId component of the ARN. */
		readonly registryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryId}`;
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
	static parseRegistryArn(arn: string): { partition: string; region: string; account: string; registryId: string } {
		const match = RegistryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryId: match.groups!.registryId,
		};
	}

	/**
	 * Builds an ARN for the registry-record resource.
	 */
	static registryRecord(props: {
		/** The RegistryId component of the ARN. */
		readonly registryId: string;
		/** The RecordId component of the ARN. */
		readonly recordId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryId}/record/${props.recordId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry-record resource.
	 */
	static isValidRegistryRecordArn(arn: string): boolean {
		return RegistryRecordArnRegex.test(arn);
	}

	/**
	 * Parses a registry-record ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryRecordArn(arn: string): { partition: string; region: string; account: string; registryId: string; recordId: string } {
		const match = RegistryRecordArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry-record ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryId: match.groups!.registryId,
			recordId: match.groups!.recordId,
		};
	}

	/**
	 * Builds an ARN for the runtime resource.
	 */
	static runtime(props: {
		/** The RuntimeId component of the ARN. */
		readonly runtimeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:runtime/${props.runtimeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the runtime resource.
	 */
	static isValidRuntimeArn(arn: string): boolean {
		return RuntimeArnRegex.test(arn);
	}

	/**
	 * Parses a runtime ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuntimeArn(arn: string): { partition: string; region: string; account: string; runtimeId: string } {
		const match = RuntimeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid runtime ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			runtimeId: match.groups!.runtimeId,
		};
	}

	/**
	 * Builds an ARN for the runtime-endpoint resource.
	 */
	static runtimeEndpoint(props: {
		/** The RuntimeId component of the ARN. */
		readonly runtimeId: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:runtime/${props.runtimeId}/runtime-endpoint/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the runtime-endpoint resource.
	 */
	static isValidRuntimeEndpointArn(arn: string): boolean {
		return RuntimeEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a runtime-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuntimeEndpointArn(arn: string): { partition: string; region: string; account: string; runtimeId: string; name: string } {
		const match = RuntimeEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid runtime-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			runtimeId: match.groups!.runtimeId,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the token-vault resource.
	 */
	static tokenVault(props: {
		/** The TokenVaultId component of the ARN. */
		readonly tokenVaultId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:token-vault/${props.tokenVaultId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the token-vault resource.
	 */
	static isValidTokenVaultArn(arn: string): boolean {
		return TokenVaultArnRegex.test(arn);
	}

	/**
	 * Parses a token-vault ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTokenVaultArn(arn: string): { partition: string; region: string; account: string; tokenVaultId: string } {
		const match = TokenVaultArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid token-vault ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tokenVaultId: match.groups!.tokenVaultId,
		};
	}

	/**
	 * Builds an ARN for the web-search resource.
	 */
	static webSearch(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:tool/web-search.v1`;
	}

	/**
	 * Validates whether a string is a valid ARN for the web-search resource.
	 */
	static isValidWebSearchArn(arn: string): boolean {
		return WebSearchArnRegex.test(arn);
	}

	/**
	 * Parses a web-search ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebSearchArn(arn: string): { partition: string; region: string; account: string } {
		const match = WebSearchArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid web-search ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,

		};
	}

	/**
	 * Builds an ARN for the workload-identity resource.
	 */
	static workloadIdentity(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** The WorkloadIdentityName component of the ARN. */
		readonly workloadIdentityName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:workload-identity-directory/${props.directoryId}/workload-identity/${props.workloadIdentityName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workload-identity resource.
	 */
	static isValidWorkloadIdentityArn(arn: string): boolean {
		return WorkloadIdentityArnRegex.test(arn);
	}

	/**
	 * Parses a workload-identity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkloadIdentityArn(arn: string): { partition: string; region: string; account: string; directoryId: string; workloadIdentityName: string } {
		const match = WorkloadIdentityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workload-identity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
			workloadIdentityName: match.groups!.workloadIdentityName,
		};
	}

	/**
	 * Builds an ARN for the workload-identity-directory resource.
	 */
	static workloadIdentityDirectory(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:workload-identity-directory/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workload-identity-directory resource.
	 */
	static isValidWorkloadIdentityDirectoryArn(arn: string): boolean {
		return WorkloadIdentityDirectoryArnRegex.test(arn);
	}

	/**
	 * Parses a workload-identity-directory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkloadIdentityDirectoryArn(arn: string): { partition: string; region: string; account: string; directoryId: string } {
		const match = WorkloadIdentityDirectoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workload-identity-directory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}

}

/**
 * API operation to required IAM actions mapping for bedrock-agentcore.
 */
export class BedrockAgentcoreOperations {
	/** IAM actions required for the AddDatasetExamples API call. */
	static readonly ADD_DATASET_EXAMPLES: string[] = ["bedrock-agentcore:AddDatasetExamples"];
	/** IAM actions required for the BatchCreateMemoryRecords API call. */
	static readonly BATCH_CREATE_MEMORY_RECORDS: string[] = ["bedrock-agentcore:BatchCreateMemoryRecords"];
	/** IAM actions required for the BatchDeleteMemoryRecords API call. */
	static readonly BATCH_DELETE_MEMORY_RECORDS: string[] = ["bedrock-agentcore:BatchDeleteMemoryRecords"];
	/** IAM actions required for the BatchPutGatewayRateLimits API call. */
	static readonly BATCH_PUT_GATEWAY_RATE_LIMITS: string[] = ["bedrock-agentcore:BatchPutGatewayRateLimits"];
	/** IAM actions required for the BatchUpdateMemoryRecords API call. */
	static readonly BATCH_UPDATE_MEMORY_RECORDS: string[] = ["bedrock-agentcore:BatchUpdateMemoryRecords"];
	/** IAM actions required for the CompleteResourceTokenAuth API call. */
	static readonly COMPLETE_RESOURCE_TOKEN_AUTH: string[] = ["bedrock-agentcore:CompleteResourceTokenAuth"];
	/** IAM actions required for the CreateABTest API call. */
	static readonly CREATE_AB_TEST: string[] = ["bedrock-agentcore:CreateABTest", "iam:PassRole"];
	/** IAM actions required for the CreateAgentRuntime API call. */
	static readonly CREATE_AGENT_RUNTIME: string[] = ["bedrock-agentcore:CreateAgentRuntime", "bedrock-agentcore:CreateAgentRuntimeEndpoint", "bedrock-agentcore:PassCapacityProvider", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateAgentRuntimeEndpoint API call. */
	static readonly CREATE_AGENT_RUNTIME_ENDPOINT: string[] = ["bedrock-agentcore:CreateAgentRuntimeEndpoint", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateApiKeyCredentialProvider API call. */
	static readonly CREATE_API_KEY_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:CreateApiKeyCredentialProvider", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateBrowser API call. */
	static readonly CREATE_BROWSER: string[] = ["bedrock-agentcore:CreateBrowser", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateBrowserProfile API call. */
	static readonly CREATE_BROWSER_PROFILE: string[] = ["bedrock-agentcore:CreateBrowserProfile", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CREATE_CAPACITY_PROVIDER: string[] = ["bedrock-agentcore:CreateCapacityProvider", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateCodeInterpreter API call. */
	static readonly CREATE_CODE_INTERPRETER: string[] = ["bedrock-agentcore:CreateCodeInterpreter", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateConfigurationBundle API call. */
	static readonly CREATE_CONFIGURATION_BUNDLE: string[] = ["bedrock-agentcore:CreateConfigurationBundle", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = ["bedrock-agentcore:CreateDataset", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateDatasetVersion API call. */
	static readonly CREATE_DATASET_VERSION: string[] = ["bedrock-agentcore:CreateDatasetVersion"];
	/** IAM actions required for the CreateEvaluator API call. */
	static readonly CREATE_EVALUATOR: string[] = ["bedrock-agentcore:CreateEvaluator", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateEvent API call. */
	static readonly CREATE_EVENT: string[] = ["bedrock-agentcore:CreateEvent"];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CREATE_GATEWAY: string[] = ["bedrock-agentcore:CreateGateway", "iam:PassRole", "bedrock-agentcore:SynchronizeGatewayTargets", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateGatewayRateLimit API call. */
	static readonly CREATE_GATEWAY_RATE_LIMIT: string[] = ["bedrock-agentcore:CreateGatewayRateLimit"];
	/** IAM actions required for the CreateGatewayRule API call. */
	static readonly CREATE_GATEWAY_RULE: string[] = ["bedrock-agentcore:CreateGatewayRule"];
	/** IAM actions required for the CreateGatewayTarget API call. */
	static readonly CREATE_GATEWAY_TARGET: string[] = ["bedrock-agentcore:CreateGatewayTarget", "bedrock-agentcore:SynchronizeGatewayTargets"];
	/** IAM actions required for the CreateHarness API call. */
	static readonly CREATE_HARNESS: string[] = ["bedrock-agentcore:CreateAgentRuntime", "bedrock-agentcore:CreateHarness", "bedrock-agentcore:CreateMemory", "bedrock-agentcore:GetMemory", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateHarnessEndpoint API call. */
	static readonly CREATE_HARNESS_ENDPOINT: string[] = ["bedrock-agentcore:CreateHarnessEndpoint", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateMemory API call. */
	static readonly CREATE_MEMORY: string[] = ["bedrock-agentcore:CreateMemory", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateOauth2CredentialProvider API call. */
	static readonly CREATE_OAUTH2_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:CreateOauth2CredentialProvider", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateOnlineEvaluationConfig API call. */
	static readonly CREATE_ONLINE_EVALUATION_CONFIG: string[] = ["bedrock-agentcore:CreateOnlineEvaluationConfig", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreatePaymentConnector API call. */
	static readonly CREATE_PAYMENT_CONNECTOR: string[] = ["bedrock-agentcore:CreatePaymentConnector"];
	/** IAM actions required for the CreatePaymentCredentialProvider API call. */
	static readonly CREATE_PAYMENT_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:CreatePaymentCredentialProvider", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreatePaymentInstrument API call. */
	static readonly CREATE_PAYMENT_INSTRUMENT: string[] = ["bedrock-agentcore:CreatePaymentInstrument"];
	/** IAM actions required for the CreatePaymentManager API call. */
	static readonly CREATE_PAYMENT_MANAGER: string[] = ["bedrock-agentcore:CreatePaymentManager", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreatePaymentSession API call. */
	static readonly CREATE_PAYMENT_SESSION: string[] = ["bedrock-agentcore:CreatePaymentSession"];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = ["bedrock-agentcore:CreatePolicy"];
	/** IAM actions required for the CreatePolicyEngine API call. */
	static readonly CREATE_POLICY_ENGINE: string[] = ["bedrock-agentcore:CreatePolicyEngine"];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CREATE_REGISTRY: string[] = ["bedrock-agentcore:CreateRegistry", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateRegistryRecord API call. */
	static readonly CREATE_REGISTRY_RECORD: string[] = ["bedrock-agentcore:CreateRegistryRecord", "iam:PassRole", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the CreateWorkloadIdentity API call. */
	static readonly CREATE_WORKLOAD_IDENTITY: string[] = ["bedrock-agentcore:CreateWorkloadIdentity", "bedrock-agentcore:TagResource"];
	/** IAM actions required for the DeleteABTest API call. */
	static readonly DELETE_AB_TEST: string[] = ["bedrock-agentcore:DeleteABTest"];
	/** IAM actions required for the DeleteAgentRuntime API call. */
	static readonly DELETE_AGENT_RUNTIME: string[] = ["bedrock-agentcore:DeleteAgentRuntime", "bedrock-agentcore:DeleteAgentRuntimeEndpoint", "bedrock-agentcore:DeleteWorkloadIdentity"];
	/** IAM actions required for the DeleteAgentRuntimeEndpoint API call. */
	static readonly DELETE_AGENT_RUNTIME_ENDPOINT: string[] = ["bedrock-agentcore:DeleteAgentRuntimeEndpoint"];
	/** IAM actions required for the DeleteApiKeyCredentialProvider API call. */
	static readonly DELETE_API_KEY_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:DeleteApiKeyCredentialProvider"];
	/** IAM actions required for the DeleteBatchEvaluation API call. */
	static readonly DELETE_BATCH_EVALUATION: string[] = ["bedrock-agentcore:DeleteBatchEvaluation"];
	/** IAM actions required for the DeleteBrowser API call. */
	static readonly DELETE_BROWSER: string[] = ["bedrock-agentcore:DeleteBrowser"];
	/** IAM actions required for the DeleteBrowserProfile API call. */
	static readonly DELETE_BROWSER_PROFILE: string[] = ["bedrock-agentcore:DeleteBrowserProfile"];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DELETE_CAPACITY_PROVIDER: string[] = ["bedrock-agentcore:DeleteCapacityProvider"];
	/** IAM actions required for the DeleteCapacityProviderSession API call. */
	static readonly DELETE_CAPACITY_PROVIDER_SESSION: string[] = ["bedrock-agentcore:DeleteCapacityProviderSession"];
	/** IAM actions required for the DeleteCodeInterpreter API call. */
	static readonly DELETE_CODE_INTERPRETER: string[] = ["bedrock-agentcore:DeleteCodeInterpreter"];
	/** IAM actions required for the DeleteConfigurationBundle API call. */
	static readonly DELETE_CONFIGURATION_BUNDLE: string[] = ["bedrock-agentcore:DeleteConfigurationBundle"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["bedrock-agentcore:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetExamples API call. */
	static readonly DELETE_DATASET_EXAMPLES: string[] = ["bedrock-agentcore:DeleteDatasetExamples"];
	/** IAM actions required for the DeleteEvaluator API call. */
	static readonly DELETE_EVALUATOR: string[] = ["bedrock-agentcore:DeleteEvaluator"];
	/** IAM actions required for the DeleteEvent API call. */
	static readonly DELETE_EVENT: string[] = ["bedrock-agentcore:DeleteEvent"];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DELETE_GATEWAY: string[] = ["bedrock-agentcore:DeleteGateway"];
	/** IAM actions required for the DeleteGatewayRateLimit API call. */
	static readonly DELETE_GATEWAY_RATE_LIMIT: string[] = ["bedrock-agentcore:DeleteGatewayRateLimit"];
	/** IAM actions required for the DeleteGatewayRule API call. */
	static readonly DELETE_GATEWAY_RULE: string[] = ["bedrock-agentcore:DeleteGatewayRule"];
	/** IAM actions required for the DeleteGatewayTarget API call. */
	static readonly DELETE_GATEWAY_TARGET: string[] = ["bedrock-agentcore:DeleteGatewayTarget"];
	/** IAM actions required for the DeleteHarness API call. */
	static readonly DELETE_HARNESS: string[] = ["bedrock-agentcore:DeleteAgentRuntime", "bedrock-agentcore:DeleteHarness"];
	/** IAM actions required for the DeleteHarnessEndpoint API call. */
	static readonly DELETE_HARNESS_ENDPOINT: string[] = ["bedrock-agentcore:DeleteHarnessEndpoint"];
	/** IAM actions required for the DeleteMemory API call. */
	static readonly DELETE_MEMORY: string[] = ["bedrock-agentcore:DeleteMemory"];
	/** IAM actions required for the DeleteMemoryRecord API call. */
	static readonly DELETE_MEMORY_RECORD: string[] = ["bedrock-agentcore:DeleteMemoryRecord"];
	/** IAM actions required for the DeleteOauth2CredentialProvider API call. */
	static readonly DELETE_OAUTH2_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:DeleteOauth2CredentialProvider"];
	/** IAM actions required for the DeleteOnlineEvaluationConfig API call. */
	static readonly DELETE_ONLINE_EVALUATION_CONFIG: string[] = ["bedrock-agentcore:DeleteOnlineEvaluationConfig"];
	/** IAM actions required for the DeletePaymentConnector API call. */
	static readonly DELETE_PAYMENT_CONNECTOR: string[] = ["bedrock-agentcore:DeletePaymentConnector"];
	/** IAM actions required for the DeletePaymentCredentialProvider API call. */
	static readonly DELETE_PAYMENT_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:DeletePaymentCredentialProvider"];
	/** IAM actions required for the DeletePaymentInstrument API call. */
	static readonly DELETE_PAYMENT_INSTRUMENT: string[] = ["bedrock-agentcore:DeletePaymentInstrument"];
	/** IAM actions required for the DeletePaymentManager API call. */
	static readonly DELETE_PAYMENT_MANAGER: string[] = ["bedrock-agentcore:DeletePaymentManager"];
	/** IAM actions required for the DeletePaymentSession API call. */
	static readonly DELETE_PAYMENT_SESSION: string[] = ["bedrock-agentcore:DeletePaymentSession"];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["bedrock-agentcore:DeletePolicy"];
	/** IAM actions required for the DeletePolicyEngine API call. */
	static readonly DELETE_POLICY_ENGINE: string[] = ["bedrock-agentcore:DeletePolicyEngine"];
	/** IAM actions required for the DeleteRecommendation API call. */
	static readonly DELETE_RECOMMENDATION: string[] = ["bedrock-agentcore:DeleteRecommendation"];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DELETE_REGISTRY: string[] = ["bedrock-agentcore:DeleteRegistry"];
	/** IAM actions required for the DeleteRegistryRecord API call. */
	static readonly DELETE_REGISTRY_RECORD: string[] = ["bedrock-agentcore:DeleteRegistryRecord"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = ["bedrock-agentcore:DeleteResourcePolicy"];
	/** IAM actions required for the DeleteWorkloadIdentity API call. */
	static readonly DELETE_WORKLOAD_IDENTITY: string[] = ["bedrock-agentcore:DeleteWorkloadIdentity"];
	/** IAM actions required for the Evaluate API call. */
	static readonly EVALUATE: string[] = ["bedrock-agentcore:Evaluate"];
	/** IAM actions required for the GetABTest API call. */
	static readonly GET_AB_TEST: string[] = ["bedrock-agentcore:GetABTest"];
	/** IAM actions required for the GetAgentCard API call. */
	static readonly GET_AGENT_CARD: string[] = ["bedrock-agentcore:GetAgentCard"];
	/** IAM actions required for the GetAgentRuntime API call. */
	static readonly GET_AGENT_RUNTIME: string[] = ["bedrock-agentcore:GetAgentRuntime"];
	/** IAM actions required for the GetAgentRuntimeEndpoint API call. */
	static readonly GET_AGENT_RUNTIME_ENDPOINT: string[] = ["bedrock-agentcore:GetAgentRuntimeEndpoint"];
	/** IAM actions required for the GetApiKeyCredentialProvider API call. */
	static readonly GET_API_KEY_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:GetApiKeyCredentialProvider"];
	/** IAM actions required for the GetBatchEvaluation API call. */
	static readonly GET_BATCH_EVALUATION: string[] = ["bedrock-agentcore:GetBatchEvaluation"];
	/** IAM actions required for the GetBrowser API call. */
	static readonly GET_BROWSER: string[] = ["bedrock-agentcore:GetBrowser"];
	/** IAM actions required for the GetBrowserProfile API call. */
	static readonly GET_BROWSER_PROFILE: string[] = ["bedrock-agentcore:GetBrowserProfile"];
	/** IAM actions required for the GetBrowserSession API call. */
	static readonly GET_BROWSER_SESSION: string[] = ["bedrock-agentcore:GetBrowserSession"];
	/** IAM actions required for the GetCapacityProvider API call. */
	static readonly GET_CAPACITY_PROVIDER: string[] = ["bedrock-agentcore:GetCapacityProvider"];
	/** IAM actions required for the GetCodeInterpreter API call. */
	static readonly GET_CODE_INTERPRETER: string[] = ["bedrock-agentcore:GetCodeInterpreter"];
	/** IAM actions required for the GetCodeInterpreterSession API call. */
	static readonly GET_CODE_INTERPRETER_SESSION: string[] = ["bedrock-agentcore:GetCodeInterpreterSession"];
	/** IAM actions required for the GetConfigurationBundle API call. */
	static readonly GET_CONFIGURATION_BUNDLE: string[] = ["bedrock-agentcore:GetConfigurationBundle"];
	/** IAM actions required for the GetConfigurationBundleVersion API call. */
	static readonly GET_CONFIGURATION_BUNDLE_VERSION: string[] = ["bedrock-agentcore:GetConfigurationBundleVersion"];
	/** IAM actions required for the GetDataset API call. */
	static readonly GET_DATASET: string[] = ["bedrock-agentcore:GetDataset"];
	/** IAM actions required for the GetEvaluator API call. */
	static readonly GET_EVALUATOR: string[] = ["bedrock-agentcore:GetEvaluator"];
	/** IAM actions required for the GetEvent API call. */
	static readonly GET_EVENT: string[] = ["bedrock-agentcore:GetEvent"];
	/** IAM actions required for the GetGateway API call. */
	static readonly GET_GATEWAY: string[] = ["bedrock-agentcore:GetGateway"];
	/** IAM actions required for the GetGatewayRateLimit API call. */
	static readonly GET_GATEWAY_RATE_LIMIT: string[] = ["bedrock-agentcore:GetGatewayRateLimit"];
	/** IAM actions required for the GetGatewayRule API call. */
	static readonly GET_GATEWAY_RULE: string[] = ["bedrock-agentcore:GetGatewayRule"];
	/** IAM actions required for the GetGatewayTarget API call. */
	static readonly GET_GATEWAY_TARGET: string[] = ["bedrock-agentcore:GetGatewayTarget"];
	/** IAM actions required for the GetHarness API call. */
	static readonly GET_HARNESS: string[] = ["bedrock-agentcore:GetHarness"];
	/** IAM actions required for the GetHarnessEndpoint API call. */
	static readonly GET_HARNESS_ENDPOINT: string[] = ["bedrock-agentcore:GetHarnessEndpoint"];
	/** IAM actions required for the GetMemory API call. */
	static readonly GET_MEMORY: string[] = ["bedrock-agentcore:GetMemory"];
	/** IAM actions required for the GetMemoryRecord API call. */
	static readonly GET_MEMORY_RECORD: string[] = ["bedrock-agentcore:GetMemoryRecord"];
	/** IAM actions required for the GetOauth2CredentialProvider API call. */
	static readonly GET_OAUTH2_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:GetOauth2CredentialProvider"];
	/** IAM actions required for the GetOnlineEvaluationConfig API call. */
	static readonly GET_ONLINE_EVALUATION_CONFIG: string[] = ["bedrock-agentcore:GetOnlineEvaluationConfig"];
	/** IAM actions required for the GetPaymentConnector API call. */
	static readonly GET_PAYMENT_CONNECTOR: string[] = ["bedrock-agentcore:GetPaymentConnector"];
	/** IAM actions required for the GetPaymentCredentialProvider API call. */
	static readonly GET_PAYMENT_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:GetPaymentCredentialProvider"];
	/** IAM actions required for the GetPaymentInstrument API call. */
	static readonly GET_PAYMENT_INSTRUMENT: string[] = ["bedrock-agentcore:GetPaymentInstrument"];
	/** IAM actions required for the GetPaymentInstrumentBalance API call. */
	static readonly GET_PAYMENT_INSTRUMENT_BALANCE: string[] = ["bedrock-agentcore:GetPaymentInstrumentBalance"];
	/** IAM actions required for the GetPaymentManager API call. */
	static readonly GET_PAYMENT_MANAGER: string[] = ["bedrock-agentcore:GetPaymentManager"];
	/** IAM actions required for the GetPaymentSession API call. */
	static readonly GET_PAYMENT_SESSION: string[] = ["bedrock-agentcore:GetPaymentSession"];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["bedrock-agentcore:GetPolicy"];
	/** IAM actions required for the GetPolicyEngine API call. */
	static readonly GET_POLICY_ENGINE: string[] = ["bedrock-agentcore:GetPolicyEngine"];
	/** IAM actions required for the GetPolicyEngineSummary API call. */
	static readonly GET_POLICY_ENGINE_SUMMARY: string[] = ["bedrock-agentcore:GetPolicyEngineSummary"];
	/** IAM actions required for the GetPolicyGeneration API call. */
	static readonly GET_POLICY_GENERATION: string[] = ["bedrock-agentcore:GetPolicyGeneration"];
	/** IAM actions required for the GetPolicyGenerationSummary API call. */
	static readonly GET_POLICY_GENERATION_SUMMARY: string[] = ["bedrock-agentcore:GetPolicyGenerationSummary"];
	/** IAM actions required for the GetPolicySummary API call. */
	static readonly GET_POLICY_SUMMARY: string[] = ["bedrock-agentcore:GetPolicySummary"];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly GET_RECOMMENDATION: string[] = ["bedrock-agentcore:GetRecommendation"];
	/** IAM actions required for the GetRegistry API call. */
	static readonly GET_REGISTRY: string[] = ["bedrock-agentcore:GetRegistry"];
	/** IAM actions required for the GetRegistryRecord API call. */
	static readonly GET_REGISTRY_RECORD: string[] = ["bedrock-agentcore:GetRegistryRecord"];
	/** IAM actions required for the GetResourceApiKey API call. */
	static readonly GET_RESOURCE_API_KEY: string[] = ["bedrock-agentcore:GetResourceApiKey"];
	/** IAM actions required for the GetResourceOauth2Token API call. */
	static readonly GET_RESOURCE_OAUTH2_TOKEN: string[] = ["bedrock-agentcore:GetResourceOauth2Token"];
	/** IAM actions required for the GetResourcePaymentToken API call. */
	static readonly GET_RESOURCE_PAYMENT_TOKEN: string[] = ["bedrock-agentcore:GetResourcePaymentToken"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["bedrock-agentcore:GetResourcePolicy"];
	/** IAM actions required for the GetTokenVault API call. */
	static readonly GET_TOKEN_VAULT: string[] = ["bedrock-agentcore:GetTokenVault"];
	/** IAM actions required for the GetWorkloadAccessToken API call. */
	static readonly GET_WORKLOAD_ACCESS_TOKEN: string[] = ["bedrock-agentcore:GetWorkloadAccessToken"];
	/** IAM actions required for the GetWorkloadAccessTokenForJWT API call. */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_JWT: string[] = ["bedrock-agentcore:GetWorkloadAccessTokenForJWT"];
	/** IAM actions required for the GetWorkloadAccessTokenForUserId API call. */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_USER_ID: string[] = ["bedrock-agentcore:GetWorkloadAccessTokenForUserId"];
	/** IAM actions required for the GetWorkloadIdentity API call. */
	static readonly GET_WORKLOAD_IDENTITY: string[] = ["bedrock-agentcore:GetWorkloadIdentity"];
	/** IAM actions required for the InvokeAgentRuntime API call. */
	static readonly INVOKE_AGENT_RUNTIME: string[] = ["bedrock-agentcore:InvokeAgentRuntime", "bedrock-agentcore:InvokeAgentRuntimeForUser"];
	/** IAM actions required for the InvokeAgentRuntimeCommand API call. */
	static readonly INVOKE_AGENT_RUNTIME_COMMAND: string[] = ["bedrock-agentcore:InvokeAgentRuntimeCommand"];
	/** IAM actions required for the InvokeBrowser API call. */
	static readonly INVOKE_BROWSER: string[] = [];
	/** IAM actions required for the InvokeCodeInterpreter API call. */
	static readonly INVOKE_CODE_INTERPRETER: string[] = ["bedrock-agentcore:InvokeCodeInterpreter", "bedrock-agentcore:StartCodeInterpreterSession"];
	/** IAM actions required for the InvokeHarness API call. */
	static readonly INVOKE_HARNESS: string[] = ["bedrock-agentcore:InvokeAgentRuntime", "bedrock-agentcore:InvokeHarness"];
	/** IAM actions required for the ListABTests API call. */
	static readonly LIST_AB_TESTS: string[] = ["bedrock-agentcore:ListABTests"];
	/** IAM actions required for the ListActors API call. */
	static readonly LIST_ACTORS: string[] = ["bedrock-agentcore:ListActors"];
	/** IAM actions required for the ListAgentRuntimeEndpoints API call. */
	static readonly LIST_AGENT_RUNTIME_ENDPOINTS: string[] = ["bedrock-agentcore:ListAgentRuntimeEndpoints"];
	/** IAM actions required for the ListAgentRuntimeVersions API call. */
	static readonly LIST_AGENT_RUNTIME_VERSIONS: string[] = ["bedrock-agentcore:ListAgentRuntimeVersions"];
	/** IAM actions required for the ListAgentRuntimeVersionsByCapacityProvider API call. */
	static readonly LIST_AGENT_RUNTIME_VERSIONS_BY_CAPACITY_PROVIDER: string[] = ["bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider"];
	/** IAM actions required for the ListAgentRuntimes API call. */
	static readonly LIST_AGENT_RUNTIMES: string[] = ["bedrock-agentcore:ListAgentRuntimes"];
	/** IAM actions required for the ListApiKeyCredentialProviders API call. */
	static readonly LIST_API_KEY_CREDENTIAL_PROVIDERS: string[] = ["bedrock-agentcore:ListApiKeyCredentialProviders"];
	/** IAM actions required for the ListBatchEvaluations API call. */
	static readonly LIST_BATCH_EVALUATIONS: string[] = ["bedrock-agentcore:ListBatchEvaluations"];
	/** IAM actions required for the ListBrowserProfiles API call. */
	static readonly LIST_BROWSER_PROFILES: string[] = ["bedrock-agentcore:ListBrowserProfiles"];
	/** IAM actions required for the ListBrowserSessions API call. */
	static readonly LIST_BROWSER_SESSIONS: string[] = ["bedrock-agentcore:ListBrowserSessions"];
	/** IAM actions required for the ListBrowsers API call. */
	static readonly LIST_BROWSERS: string[] = ["bedrock-agentcore:ListBrowsers"];
	/** IAM actions required for the ListCapacityProviders API call. */
	static readonly LIST_CAPACITY_PROVIDERS: string[] = ["bedrock-agentcore:ListCapacityProviders"];
	/** IAM actions required for the ListCodeInterpreterSessions API call. */
	static readonly LIST_CODE_INTERPRETER_SESSIONS: string[] = ["bedrock-agentcore:ListCodeInterpreterSessions"];
	/** IAM actions required for the ListCodeInterpreters API call. */
	static readonly LIST_CODE_INTERPRETERS: string[] = ["bedrock-agentcore:ListCodeInterpreters"];
	/** IAM actions required for the ListConfigurationBundleVersions API call. */
	static readonly LIST_CONFIGURATION_BUNDLE_VERSIONS: string[] = ["bedrock-agentcore:ListConfigurationBundleVersions"];
	/** IAM actions required for the ListConfigurationBundles API call. */
	static readonly LIST_CONFIGURATION_BUNDLES: string[] = ["bedrock-agentcore:ListConfigurationBundles"];
	/** IAM actions required for the ListDatasetExamples API call. */
	static readonly LIST_DATASET_EXAMPLES: string[] = ["bedrock-agentcore:ListDatasetExamples"];
	/** IAM actions required for the ListDatasetVersions API call. */
	static readonly LIST_DATASET_VERSIONS: string[] = ["bedrock-agentcore:ListDatasetVersions"];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["bedrock-agentcore:ListDatasets"];
	/** IAM actions required for the ListEvaluators API call. */
	static readonly LIST_EVALUATORS: string[] = ["bedrock-agentcore:ListEvaluators"];
	/** IAM actions required for the ListEvents API call. */
	static readonly LIST_EVENTS: string[] = ["bedrock-agentcore:ListEvents"];
	/** IAM actions required for the ListGatewayRateLimits API call. */
	static readonly LIST_GATEWAY_RATE_LIMITS: string[] = ["bedrock-agentcore:ListGatewayRateLimits"];
	/** IAM actions required for the ListGatewayRules API call. */
	static readonly LIST_GATEWAY_RULES: string[] = ["bedrock-agentcore:ListGatewayRules"];
	/** IAM actions required for the ListGatewayTargets API call. */
	static readonly LIST_GATEWAY_TARGETS: string[] = ["bedrock-agentcore:ListGatewayTargets"];
	/** IAM actions required for the ListGateways API call. */
	static readonly LIST_GATEWAYS: string[] = ["bedrock-agentcore:ListGateways"];
	/** IAM actions required for the ListHarnessEndpoints API call. */
	static readonly LIST_HARNESS_ENDPOINTS: string[] = ["bedrock-agentcore:ListHarnessEndpoints"];
	/** IAM actions required for the ListHarnessVersions API call. */
	static readonly LIST_HARNESS_VERSIONS: string[] = ["bedrock-agentcore:ListHarnessVersions"];
	/** IAM actions required for the ListHarnesses API call. */
	static readonly LIST_HARNESSES: string[] = ["bedrock-agentcore:ListHarnesses"];
	/** IAM actions required for the ListMemories API call. */
	static readonly LIST_MEMORIES: string[] = ["bedrock-agentcore:ListMemories"];
	/** IAM actions required for the ListMemoryExtractionJobs API call. */
	static readonly LIST_MEMORY_EXTRACTION_JOBS: string[] = ["bedrock-agentcore:ListMemoryExtractionJobs"];
	/** IAM actions required for the ListMemoryRecords API call. */
	static readonly LIST_MEMORY_RECORDS: string[] = ["bedrock-agentcore:ListMemoryRecords"];
	/** IAM actions required for the ListOauth2CredentialProviders API call. */
	static readonly LIST_OAUTH2_CREDENTIAL_PROVIDERS: string[] = ["bedrock-agentcore:ListOauth2CredentialProviders"];
	/** IAM actions required for the ListOnlineEvaluationConfigs API call. */
	static readonly LIST_ONLINE_EVALUATION_CONFIGS: string[] = ["bedrock-agentcore:ListOnlineEvaluationConfigs"];
	/** IAM actions required for the ListPaymentConnectors API call. */
	static readonly LIST_PAYMENT_CONNECTORS: string[] = ["bedrock-agentcore:ListPaymentConnectors"];
	/** IAM actions required for the ListPaymentCredentialProviders API call. */
	static readonly LIST_PAYMENT_CREDENTIAL_PROVIDERS: string[] = ["bedrock-agentcore:ListPaymentCredentialProviders"];
	/** IAM actions required for the ListPaymentInstruments API call. */
	static readonly LIST_PAYMENT_INSTRUMENTS: string[] = ["bedrock-agentcore:ListPaymentInstruments"];
	/** IAM actions required for the ListPaymentManagers API call. */
	static readonly LIST_PAYMENT_MANAGERS: string[] = ["bedrock-agentcore:ListPaymentManagers"];
	/** IAM actions required for the ListPaymentSessions API call. */
	static readonly LIST_PAYMENT_SESSIONS: string[] = ["bedrock-agentcore:ListPaymentSessions"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["bedrock-agentcore:ListPolicies"];
	/** IAM actions required for the ListPolicyEngineSummaries API call. */
	static readonly LIST_POLICY_ENGINE_SUMMARIES: string[] = ["bedrock-agentcore:ListPolicyEngineSummaries"];
	/** IAM actions required for the ListPolicyEngines API call. */
	static readonly LIST_POLICY_ENGINES: string[] = ["bedrock-agentcore:ListPolicyEngines"];
	/** IAM actions required for the ListPolicyGenerationAssets API call. */
	static readonly LIST_POLICY_GENERATION_ASSETS: string[] = ["bedrock-agentcore:ListPolicyGenerationAssets"];
	/** IAM actions required for the ListPolicyGenerationSummaries API call. */
	static readonly LIST_POLICY_GENERATION_SUMMARIES: string[] = ["bedrock-agentcore:ListPolicyGenerationSummaries"];
	/** IAM actions required for the ListPolicyGenerations API call. */
	static readonly LIST_POLICY_GENERATIONS: string[] = ["bedrock-agentcore:ListPolicyGenerations"];
	/** IAM actions required for the ListPolicySummaries API call. */
	static readonly LIST_POLICY_SUMMARIES: string[] = ["bedrock-agentcore:ListPolicySummaries"];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = ["bedrock-agentcore:ListRecommendations"];
	/** IAM actions required for the ListRegistries API call. */
	static readonly LIST_REGISTRIES: string[] = ["bedrock-agentcore:ListRegistries"];
	/** IAM actions required for the ListRegistryRecords API call. */
	static readonly LIST_REGISTRY_RECORDS: string[] = ["bedrock-agentcore:ListRegistryRecords"];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["bedrock-agentcore:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["bedrock-agentcore:ListTagsForResource"];
	/** IAM actions required for the ListWorkloadIdentities API call. */
	static readonly LIST_WORKLOAD_IDENTITIES: string[] = ["bedrock-agentcore:ListWorkloadIdentities"];
	/** IAM actions required for the ProcessPayment API call. */
	static readonly PROCESS_PAYMENT: string[] = ["bedrock-agentcore:ProcessPayment"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["bedrock-agentcore:PutResourcePolicy"];
	/** IAM actions required for the RetrieveMemoryRecords API call. */
	static readonly RETRIEVE_MEMORY_RECORDS: string[] = ["bedrock-agentcore:RetrieveMemoryRecords"];
	/** IAM actions required for the SaveBrowserSessionProfile API call. */
	static readonly SAVE_BROWSER_SESSION_PROFILE: string[] = ["bedrock-agentcore:SaveBrowserSessionProfile"];
	/** IAM actions required for the SearchRegistryRecords API call. */
	static readonly SEARCH_REGISTRY_RECORDS: string[] = ["bedrock-agentcore:SearchRegistryRecords"];
	/** IAM actions required for the SetTokenVaultCMK API call. */
	static readonly SET_TOKEN_VAULT_CMK: string[] = ["bedrock-agentcore:SetTokenVaultCMK"];
	/** IAM actions required for the StartBatchEvaluation API call. */
	static readonly START_BATCH_EVALUATION: string[] = ["bedrock-agentcore:StartBatchEvaluation"];
	/** IAM actions required for the StartBrowserSession API call. */
	static readonly START_BROWSER_SESSION: string[] = ["bedrock-agentcore:StartBrowserSession"];
	/** IAM actions required for the StartCodeInterpreterSession API call. */
	static readonly START_CODE_INTERPRETER_SESSION: string[] = ["bedrock-agentcore:StartCodeInterpreterSession"];
	/** IAM actions required for the StartMemoryExtractionJob API call. */
	static readonly START_MEMORY_EXTRACTION_JOB: string[] = ["bedrock-agentcore:StartMemoryExtractionJob"];
	/** IAM actions required for the StartPolicyGeneration API call. */
	static readonly START_POLICY_GENERATION: string[] = ["bedrock-agentcore:StartPolicyGeneration"];
	/** IAM actions required for the StartRecommendation API call. */
	static readonly START_RECOMMENDATION: string[] = ["bedrock-agentcore:StartRecommendation"];
	/** IAM actions required for the StopBatchEvaluation API call. */
	static readonly STOP_BATCH_EVALUATION: string[] = ["bedrock-agentcore:StopBatchEvaluation"];
	/** IAM actions required for the StopBrowserSession API call. */
	static readonly STOP_BROWSER_SESSION: string[] = ["bedrock-agentcore:StopBrowserSession"];
	/** IAM actions required for the StopCodeInterpreterSession API call. */
	static readonly STOP_CODE_INTERPRETER_SESSION: string[] = ["bedrock-agentcore:StopCodeInterpreterSession"];
	/** IAM actions required for the StopRuntimeSession API call. */
	static readonly STOP_RUNTIME_SESSION: string[] = ["bedrock-agentcore:StopRuntimeSession"];
	/** IAM actions required for the SubmitRegistryRecordForApproval API call. */
	static readonly SUBMIT_REGISTRY_RECORD_FOR_APPROVAL: string[] = ["bedrock-agentcore:SubmitRegistryRecordForApproval"];
	/** IAM actions required for the SynchronizeGatewayTargets API call. */
	static readonly SYNCHRONIZE_GATEWAY_TARGETS: string[] = ["bedrock-agentcore:SynchronizeGatewayTargets"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["bedrock-agentcore:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["bedrock-agentcore:UntagResource"];
	/** IAM actions required for the UpdateABTest API call. */
	static readonly UPDATE_AB_TEST: string[] = ["iam:PassRole", "bedrock-agentcore:UpdateABTest"];
	/** IAM actions required for the UpdateAgentRuntime API call. */
	static readonly UPDATE_AGENT_RUNTIME: string[] = ["bedrock-agentcore:PassCapacityProvider", "iam:PassRole", "bedrock-agentcore:UpdateAgentRuntime"];
	/** IAM actions required for the UpdateAgentRuntimeEndpoint API call. */
	static readonly UPDATE_AGENT_RUNTIME_ENDPOINT: string[] = ["bedrock-agentcore:UpdateAgentRuntimeEndpoint"];
	/** IAM actions required for the UpdateApiKeyCredentialProvider API call. */
	static readonly UPDATE_API_KEY_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:UpdateApiKeyCredentialProvider"];
	/** IAM actions required for the UpdateBrowserStream API call. */
	static readonly UPDATE_BROWSER_STREAM: string[] = ["bedrock-agentcore:UpdateBrowserStream"];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UPDATE_CAPACITY_PROVIDER: string[] = ["bedrock-agentcore:UpdateCapacityProvider"];
	/** IAM actions required for the UpdateConfigurationBundle API call. */
	static readonly UPDATE_CONFIGURATION_BUNDLE: string[] = ["bedrock-agentcore:UpdateConfigurationBundle"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UPDATE_DATASET: string[] = ["bedrock-agentcore:UpdateDataset"];
	/** IAM actions required for the UpdateDatasetExamples API call. */
	static readonly UPDATE_DATASET_EXAMPLES: string[] = ["bedrock-agentcore:UpdateDatasetExamples"];
	/** IAM actions required for the UpdateEvaluator API call. */
	static readonly UPDATE_EVALUATOR: string[] = ["bedrock-agentcore:UpdateEvaluator"];
	/** IAM actions required for the UpdateGateway API call. */
	static readonly UPDATE_GATEWAY: string[] = ["iam:PassRole", "bedrock-agentcore:UpdateGateway"];
	/** IAM actions required for the UpdateGatewayRateLimit API call. */
	static readonly UPDATE_GATEWAY_RATE_LIMIT: string[] = ["bedrock-agentcore:UpdateGatewayRateLimit"];
	/** IAM actions required for the UpdateGatewayRule API call. */
	static readonly UPDATE_GATEWAY_RULE: string[] = ["bedrock-agentcore:UpdateGatewayRule"];
	/** IAM actions required for the UpdateGatewayTarget API call. */
	static readonly UPDATE_GATEWAY_TARGET: string[] = ["bedrock-agentcore:SynchronizeGatewayTargets", "bedrock-agentcore:UpdateGatewayTarget"];
	/** IAM actions required for the UpdateHarness API call. */
	static readonly UPDATE_HARNESS: string[] = ["bedrock-agentcore:GetMemory", "iam:PassRole", "bedrock-agentcore:UpdateAgentRuntime", "bedrock-agentcore:UpdateHarness", "bedrock-agentcore:UpdateMemory"];
	/** IAM actions required for the UpdateHarnessEndpoint API call. */
	static readonly UPDATE_HARNESS_ENDPOINT: string[] = ["bedrock-agentcore:UpdateHarnessEndpoint"];
	/** IAM actions required for the UpdateMemory API call. */
	static readonly UPDATE_MEMORY: string[] = ["iam:PassRole", "bedrock-agentcore:UpdateMemory"];
	/** IAM actions required for the UpdateOauth2CredentialProvider API call. */
	static readonly UPDATE_OAUTH2_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:UpdateOauth2CredentialProvider"];
	/** IAM actions required for the UpdateOnlineEvaluationConfig API call. */
	static readonly UPDATE_ONLINE_EVALUATION_CONFIG: string[] = ["iam:PassRole", "bedrock-agentcore:UpdateOnlineEvaluationConfig"];
	/** IAM actions required for the UpdatePaymentConnector API call. */
	static readonly UPDATE_PAYMENT_CONNECTOR: string[] = ["bedrock-agentcore:UpdatePaymentConnector"];
	/** IAM actions required for the UpdatePaymentCredentialProvider API call. */
	static readonly UPDATE_PAYMENT_CREDENTIAL_PROVIDER: string[] = ["bedrock-agentcore:UpdatePaymentCredentialProvider"];
	/** IAM actions required for the UpdatePaymentManager API call. */
	static readonly UPDATE_PAYMENT_MANAGER: string[] = ["iam:PassRole", "bedrock-agentcore:UpdatePaymentManager"];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UPDATE_POLICY: string[] = ["bedrock-agentcore:UpdatePolicy"];
	/** IAM actions required for the UpdatePolicyEngine API call. */
	static readonly UPDATE_POLICY_ENGINE: string[] = ["bedrock-agentcore:UpdatePolicyEngine"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UPDATE_REGISTRY: string[] = ["bedrock-agentcore:UpdateRegistry"];
	/** IAM actions required for the UpdateRegistryRecord API call. */
	static readonly UPDATE_REGISTRY_RECORD: string[] = ["iam:PassRole", "bedrock-agentcore:UpdateRegistryRecord"];
	/** IAM actions required for the UpdateRegistryRecordStatus API call. */
	static readonly UPDATE_REGISTRY_RECORD_STATUS: string[] = ["bedrock-agentcore:UpdateRegistryRecordStatus"];
	/** IAM actions required for the UpdateWorkloadIdentity API call. */
	static readonly UPDATE_WORKLOAD_IDENTITY: string[] = ["bedrock-agentcore:UpdateWorkloadIdentity"];
}

/**
 * Condition key constants and builders for bedrock-agentcore.
 */
export class BedrockAgentcoreConditions {
	/** Condition keys applicable to the BatchCreateMemoryRecords action. */
	static readonly BATCH_CREATE_MEMORY_RECORDS_CONDITION_KEYS: string[] = ["bedrock-agentcore:namespace"];
	/** Condition keys applicable to the BatchUpdateMemoryRecords action. */
	static readonly BATCH_UPDATE_MEMORY_RECORDS_CONDITION_KEYS: string[] = ["bedrock-agentcore:namespace"];
	/** Condition keys applicable to the CompleteResourceTokenAuth action. */
	static readonly COMPLETE_RESOURCE_TOKEN_AUTH_CONDITION_KEYS: string[] = ["bedrock-agentcore:InboundJwtClaim/aud", "bedrock-agentcore:InboundJwtClaim/client_id", "bedrock-agentcore:InboundJwtClaim/iss", "bedrock-agentcore:InboundJwtClaim/scope", "bedrock-agentcore:InboundJwtClaim/sub", "bedrock-agentcore:userid"];
	/** Condition keys applicable to the CreateAgentRuntime action. */
	static readonly CREATE_AGENT_RUNTIME_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "bedrock-agentcore:RuntimeAuthorizerType", "bedrock-agentcore:securityGroups", "bedrock-agentcore:subnets"];
	/** Condition keys applicable to the CreateAgentRuntimeEndpoint action. */
	static readonly CREATE_AGENT_RUNTIME_ENDPOINT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateApiKeyCredentialProvider action. */
	static readonly CREATE_API_KEY_CREDENTIAL_PROVIDER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateBrowser action. */
	static readonly CREATE_BROWSER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "bedrock-agentcore:securityGroups", "bedrock-agentcore:subnets"];
	/** Condition keys applicable to the CreateBrowserProfile action. */
	static readonly CREATE_BROWSER_PROFILE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CREATE_CAPACITY_PROVIDER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCodeInterpreter action. */
	static readonly CREATE_CODE_INTERPRETER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "bedrock-agentcore:securityGroups", "bedrock-agentcore:subnets"];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEvaluator action. */
	static readonly CREATE_EVALUATOR_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEvent action. */
	static readonly CREATE_EVENT_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId", "bedrock-agentcore:sessionId"];
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CREATE_GATEWAY_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateHarness action. */
	static readonly CREATE_HARNESS_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateHarnessEndpoint action. */
	static readonly CREATE_HARNESS_ENDPOINT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMemory action. */
	static readonly CREATE_MEMORY_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "bedrock-agentcore:KmsKeyArn"];
	/** Condition keys applicable to the CreateOauth2CredentialProvider action. */
	static readonly CREATE_OAUTH2_CREDENTIAL_PROVIDER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateOnlineEvaluationConfig action. */
	static readonly CREATE_ONLINE_EVALUATION_CONFIG_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreatePaymentCredentialProvider action. */
	static readonly CREATE_PAYMENT_CREDENTIAL_PROVIDER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreatePaymentManager action. */
	static readonly CREATE_PAYMENT_MANAGER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "bedrock-agentcore:DiscoveryUrl"];
	/** Condition keys applicable to the CreatePolicyEngine action. */
	static readonly CREATE_POLICY_ENGINE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateWorkloadIdentity action. */
	static readonly CREATE_WORKLOAD_IDENTITY_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DeleteEvent action. */
	static readonly DELETE_EVENT_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId", "bedrock-agentcore:sessionId"];
	/** Condition keys applicable to the GetEvent action. */
	static readonly GET_EVENT_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId", "bedrock-agentcore:sessionId"];
	/** Condition keys applicable to the GetWorkloadAccessTokenForJWT action. */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_JWT_CONDITION_KEYS: string[] = ["bedrock-agentcore:InboundJwtClaim/aud", "bedrock-agentcore:InboundJwtClaim/client_id", "bedrock-agentcore:InboundJwtClaim/iss", "bedrock-agentcore:InboundJwtClaim/scope", "bedrock-agentcore:InboundJwtClaim/sub"];
	/** Condition keys applicable to the GetWorkloadAccessTokenForUserId action. */
	static readonly GET_WORKLOAD_ACCESS_TOKEN_FOR_USER_ID_CONDITION_KEYS: string[] = ["bedrock-agentcore:userid"];
	/** Condition keys applicable to the ListEvents action. */
	static readonly LIST_EVENTS_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId", "bedrock-agentcore:sessionId"];
	/** Condition keys applicable to the ListMemoryRecords action. */
	static readonly LIST_MEMORY_RECORDS_CONDITION_KEYS: string[] = ["bedrock-agentcore:namespace", "bedrock-agentcore:strategyId"];
	/** Condition keys applicable to the ListSessions action. */
	static readonly LIST_SESSIONS_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId"];
	/** Condition keys applicable to the PutSystemLogEvents action. */
	static readonly PUT_SYSTEM_LOG_EVENTS_CONDITION_KEYS: string[] = ["bedrock-agentcore:runtimeSessionId"];
	/** Condition keys applicable to the RetrieveMemoryRecords action. */
	static readonly RETRIEVE_MEMORY_RECORDS_CONDITION_KEYS: string[] = ["bedrock-agentcore:namespace", "bedrock-agentcore:strategyId"];
	/** Condition keys applicable to the StartMemoryExtractionJob action. */
	static readonly START_MEMORY_EXTRACTION_JOB_CONDITION_KEYS: string[] = ["bedrock-agentcore:actorId", "bedrock-agentcore:sessionId", "bedrock-agentcore:strategyId"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentRuntime action. */
	static readonly UPDATE_AGENT_RUNTIME_CONDITION_KEYS: string[] = ["bedrock-agentcore:RuntimeAuthorizerType", "bedrock-agentcore:securityGroups", "bedrock-agentcore:subnets"];
	/** Condition keys applicable to the UpdatePaymentManager action. */
	static readonly UPDATE_PAYMENT_MANAGER_CONDITION_KEYS: string[] = ["bedrock-agentcore:DiscoveryUrl"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: bedrock-agentcore:AllowedQueryParameters (ArrayOfString) */
	static readonly ALLOWED_QUERY_PARAMETERS = "bedrock-agentcore:AllowedQueryParameters";
	/** Condition key: bedrock-agentcore:AllowedRequestHeaders (ArrayOfString) */
	static readonly ALLOWED_REQUEST_HEADERS = "bedrock-agentcore:AllowedRequestHeaders";
	/** Condition key: bedrock-agentcore:AllowedResponseHeaders (ArrayOfString) */
	static readonly ALLOWED_RESPONSE_HEADERS = "bedrock-agentcore:AllowedResponseHeaders";
	/** Condition key: bedrock-agentcore:CredentialProviderScope (ArrayOfString) */
	static readonly CREDENTIAL_PROVIDER_SCOPE = "bedrock-agentcore:CredentialProviderScope";
	/** Condition key: bedrock-agentcore:CredentialProviderType (String) */
	static readonly CREDENTIAL_PROVIDER_TYPE = "bedrock-agentcore:CredentialProviderType";
	/** Condition key: bedrock-agentcore:DiscoveryUrl (String) */
	static readonly DISCOVERY_URL = "bedrock-agentcore:DiscoveryUrl";
	/** Condition key: bedrock-agentcore:GatewayAuthorizerType (String) */
	static readonly GATEWAY_AUTHORIZER_TYPE = "bedrock-agentcore:GatewayAuthorizerType";
	/** Condition key: bedrock-agentcore:HttpTargetConfigurationType (String) */
	static readonly HTTP_TARGET_CONFIGURATION_TYPE = "bedrock-agentcore:HttpTargetConfigurationType";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/aud (ArrayOfString) */
	static readonly INBOUND_JWT_CLAIM/AUD = "bedrock-agentcore:InboundJwtClaim/aud";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/client_id (String) */
	static readonly INBOUND_JWT_CLAIM/CLIENT_ID = "bedrock-agentcore:InboundJwtClaim/client_id";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/iss (String) */
	static readonly INBOUND_JWT_CLAIM/ISS = "bedrock-agentcore:InboundJwtClaim/iss";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/scope (ArrayOfString) */
	static readonly INBOUND_JWT_CLAIM/SCOPE = "bedrock-agentcore:InboundJwtClaim/scope";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/sub (String) */
	static readonly INBOUND_JWT_CLAIM/SUB = "bedrock-agentcore:InboundJwtClaim/sub";
	/** Condition key: bedrock-agentcore:InferenceTargetConfigurationType (String) */
	static readonly INFERENCE_TARGET_CONFIGURATION_TYPE = "bedrock-agentcore:InferenceTargetConfigurationType";
	/** Condition key: bedrock-agentcore:KmsKeyArn (String) */
	static readonly KMS_KEY_ARN = "bedrock-agentcore:KmsKeyArn";
	/** Condition key: bedrock-agentcore:McpTargetConfigurationType (String) */
	static readonly MCP_TARGET_CONFIGURATION_TYPE = "bedrock-agentcore:McpTargetConfigurationType";
	/** Condition key: bedrock-agentcore:PolicyEngineArn (String) */
	static readonly POLICY_ENGINE_ARN = "bedrock-agentcore:PolicyEngineArn";
	/** Condition key: bedrock-agentcore:PolicyEngineMode (String) */
	static readonly POLICY_ENGINE_MODE = "bedrock-agentcore:PolicyEngineMode";
	/** Condition key: bedrock-agentcore:PrivateEndpointType (String) */
	static readonly PRIVATE_ENDPOINT_TYPE = "bedrock-agentcore:PrivateEndpointType";
	/** Condition key: bedrock-agentcore:ProtocolType (String) */
	static readonly PROTOCOL_TYPE = "bedrock-agentcore:ProtocolType";
	/** Condition key: bedrock-agentcore:ResourceConfigurationIdentifier (String) */
	static readonly RESOURCE_CONFIGURATION_IDENTIFIER = "bedrock-agentcore:ResourceConfigurationIdentifier";
	/** Condition key: bedrock-agentcore:RuntimeAuthorizerType (String) */
	static readonly RUNTIME_AUTHORIZER_TYPE = "bedrock-agentcore:RuntimeAuthorizerType";
	/** Condition key: bedrock-agentcore:actorId (String) */
	static readonly ACTOR_ID = "bedrock-agentcore:actorId";
	/** Condition key: bedrock-agentcore:namespace (String) */
	static readonly NAMESPACE = "bedrock-agentcore:namespace";
	/** Condition key: bedrock-agentcore:runtimeSessionId (String) */
	static readonly RUNTIME_SESSION_ID = "bedrock-agentcore:runtimeSessionId";
	/** Condition key: bedrock-agentcore:securityGroups (ArrayOfString) */
	static readonly SECURITY_GROUPS = "bedrock-agentcore:securityGroups";
	/** Condition key: bedrock-agentcore:sessionId (String) */
	static readonly SESSION_ID = "bedrock-agentcore:sessionId";
	/** Condition key: bedrock-agentcore:strategyId (String) */
	static readonly STRATEGY_ID = "bedrock-agentcore:strategyId";
	/** Condition key: bedrock-agentcore:subnets (ArrayOfString) */
	static readonly SUBNETS = "bedrock-agentcore:subnets";
	/** Condition key: bedrock-agentcore:userid (String) */
	static readonly USERID = "bedrock-agentcore:userid";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:AllowedQueryParameters`.
	 */
	static allowedQueryParameters(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:AllowedQueryParameters": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:AllowedRequestHeaders`.
	 */
	static allowedRequestHeaders(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:AllowedRequestHeaders": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:AllowedResponseHeaders`.
	 */
	static allowedResponseHeaders(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:AllowedResponseHeaders": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:CredentialProviderScope`.
	 */
	static credentialProviderScope(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:CredentialProviderScope": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:CredentialProviderType`.
	 */
	static credentialProviderType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:CredentialProviderType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:DiscoveryUrl`.
	 */
	static discoveryURL(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:DiscoveryUrl": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:GatewayAuthorizerType`.
	 */
	static gatewayAuthorizerType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:GatewayAuthorizerType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:HttpTargetConfigurationType`.
	 */
	static httpTargetConfigurationType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:HttpTargetConfigurationType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/aud`.
	 */
	static inboundJwtClaim/aud(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:InboundJwtClaim/aud": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/client_id`.
	 */
	static inboundJwtClaim/clientId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:InboundJwtClaim/client_id": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/iss`.
	 */
	static inboundJwtClaim/iss(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:InboundJwtClaim/iss": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/scope`.
	 */
	static inboundJwtClaim/scope(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:InboundJwtClaim/scope": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/sub`.
	 */
	static inboundJwtClaim/sub(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:InboundJwtClaim/sub": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InferenceTargetConfigurationType`.
	 */
	static inferenceTargetConfigurationType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:InferenceTargetConfigurationType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:KmsKeyArn`.
	 */
	static kmsKeyARN(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:KmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:McpTargetConfigurationType`.
	 */
	static mcpTargetConfigurationType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:McpTargetConfigurationType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PolicyEngineArn`.
	 */
	static policyEngineARN(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:PolicyEngineArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PolicyEngineMode`.
	 */
	static policyEngineMode(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:PolicyEngineMode": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PrivateEndpointType`.
	 */
	static privateEndpointType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:PrivateEndpointType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:ProtocolType`.
	 */
	static protocolType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:ProtocolType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:ResourceConfigurationIdentifier`.
	 */
	static resourceConfigurationIdentifier(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:ResourceConfigurationIdentifier": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:RuntimeAuthorizerType`.
	 */
	static runtimeAuthorizerType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:RuntimeAuthorizerType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:actorId`.
	 */
	static actorId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:actorId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:namespace": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:runtimeSessionId`.
	 */
	static runtimeSessionId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:runtimeSessionId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:securityGroups`.
	 */
	static securityGroups(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:securityGroups": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:sessionId`.
	 */
	static sessionId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:sessionId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:strategyId`.
	 */
	static strategyId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:strategyId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:subnets`.
	 */
	static subnets(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-agentcore:subnets": values } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:userid`.
	 */
	static userid(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "bedrock-agentcore:userid": value } };
	}

}
