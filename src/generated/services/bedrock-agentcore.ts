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
	static readonly AddDatasetExamples = "bedrock-agentcore:AddDatasetExamples";
	/** [PermissionManagement] bedrock-agentcore:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"bedrock-agentcore:AllowVendedLogDeliveryForResource";
	/** [PermissionManagement] bedrock-agentcore:AuthorizeAction */
	static readonly AuthorizeAction = "bedrock-agentcore:AuthorizeAction";
	/** [Write] bedrock-agentcore:BatchCreateMemoryRecords */
	static readonly BatchCreateMemoryRecords =
		"bedrock-agentcore:BatchCreateMemoryRecords";
	/** [Write] bedrock-agentcore:BatchDeleteMemoryRecords */
	static readonly BatchDeleteMemoryRecords =
		"bedrock-agentcore:BatchDeleteMemoryRecords";
	/** [Write] bedrock-agentcore:BatchPutGatewayRateLimits */
	static readonly BatchPutGatewayRateLimits =
		"bedrock-agentcore:BatchPutGatewayRateLimits";
	/** [Write] bedrock-agentcore:BatchUpdateMemoryRecords */
	static readonly BatchUpdateMemoryRecords =
		"bedrock-agentcore:BatchUpdateMemoryRecords";
	/** [Read] bedrock-agentcore:CompleteResourceTokenAuth */
	static readonly CompleteResourceTokenAuth =
		"bedrock-agentcore:CompleteResourceTokenAuth";
	/** [Read] bedrock-agentcore:ConnectBrowserAutomationStream */
	static readonly ConnectBrowserAutomationStream =
		"bedrock-agentcore:ConnectBrowserAutomationStream";
	/** [Read] bedrock-agentcore:ConnectBrowserLiveViewStream */
	static readonly ConnectBrowserLiveViewStream =
		"bedrock-agentcore:ConnectBrowserLiveViewStream";
	/** [Write] bedrock-agentcore:CreateABTest */
	static readonly CreateABTest = "bedrock-agentcore:CreateABTest";
	/** [Write] bedrock-agentcore:CreateAgentRuntime */
	static readonly CreateAgentRuntime = "bedrock-agentcore:CreateAgentRuntime";
	/** [Write] bedrock-agentcore:CreateAgentRuntimeEndpoint */
	static readonly CreateAgentRuntimeEndpoint =
		"bedrock-agentcore:CreateAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:CreateApiKeyCredentialProvider */
	static readonly CreateApiKeyCredentialProvider =
		"bedrock-agentcore:CreateApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:CreateBrowser */
	static readonly CreateBrowser = "bedrock-agentcore:CreateBrowser";
	/** [Write] bedrock-agentcore:CreateBrowserProfile */
	static readonly CreateBrowserProfile =
		"bedrock-agentcore:CreateBrowserProfile";
	/** [Write] bedrock-agentcore:CreateCapacityProvider */
	static readonly CreateCapacityProvider =
		"bedrock-agentcore:CreateCapacityProvider";
	/** [Write] bedrock-agentcore:CreateCodeInterpreter */
	static readonly CreateCodeInterpreter =
		"bedrock-agentcore:CreateCodeInterpreter";
	/** [Write] bedrock-agentcore:CreateConfigurationBundle */
	static readonly CreateConfigurationBundle =
		"bedrock-agentcore:CreateConfigurationBundle";
	/** [Write] bedrock-agentcore:CreateDataset */
	static readonly CreateDataset = "bedrock-agentcore:CreateDataset";
	/** [Write] bedrock-agentcore:CreateDatasetVersion */
	static readonly CreateDatasetVersion =
		"bedrock-agentcore:CreateDatasetVersion";
	/** [Write] bedrock-agentcore:CreateEvaluator */
	static readonly CreateEvaluator = "bedrock-agentcore:CreateEvaluator";
	/** [Write] bedrock-agentcore:CreateEvent */
	static readonly CreateEvent = "bedrock-agentcore:CreateEvent";
	/** [Write] bedrock-agentcore:CreateGateway */
	static readonly CreateGateway = "bedrock-agentcore:CreateGateway";
	/** [Write] bedrock-agentcore:CreateGatewayRateLimit */
	static readonly CreateGatewayRateLimit =
		"bedrock-agentcore:CreateGatewayRateLimit";
	/** [Write] bedrock-agentcore:CreateGatewayRule */
	static readonly CreateGatewayRule = "bedrock-agentcore:CreateGatewayRule";
	/** [Write] bedrock-agentcore:CreateGatewayTarget */
	static readonly CreateGatewayTarget = "bedrock-agentcore:CreateGatewayTarget";
	/** [Write] bedrock-agentcore:CreateHarness */
	static readonly CreateHarness = "bedrock-agentcore:CreateHarness";
	/** [Write] bedrock-agentcore:CreateHarnessEndpoint */
	static readonly CreateHarnessEndpoint =
		"bedrock-agentcore:CreateHarnessEndpoint";
	/** [Write] bedrock-agentcore:CreateMemory */
	static readonly CreateMemory = "bedrock-agentcore:CreateMemory";
	/** [Write] bedrock-agentcore:CreateOauth2CredentialProvider */
	static readonly CreateOauth2CredentialProvider =
		"bedrock-agentcore:CreateOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:CreateOnlineEvaluationConfig */
	static readonly CreateOnlineEvaluationConfig =
		"bedrock-agentcore:CreateOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:CreatePaymentConnector */
	static readonly CreatePaymentConnector =
		"bedrock-agentcore:CreatePaymentConnector";
	/** [Write] bedrock-agentcore:CreatePaymentCredentialProvider */
	static readonly CreatePaymentCredentialProvider =
		"bedrock-agentcore:CreatePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:CreatePaymentInstrument */
	static readonly CreatePaymentInstrument =
		"bedrock-agentcore:CreatePaymentInstrument";
	/** [Write] bedrock-agentcore:CreatePaymentManager */
	static readonly CreatePaymentManager =
		"bedrock-agentcore:CreatePaymentManager";
	/** [Write] bedrock-agentcore:CreatePaymentSession */
	static readonly CreatePaymentSession =
		"bedrock-agentcore:CreatePaymentSession";
	/** [Write] bedrock-agentcore:CreatePolicy */
	static readonly CreatePolicy = "bedrock-agentcore:CreatePolicy";
	/** [Write] bedrock-agentcore:CreatePolicyEngine */
	static readonly CreatePolicyEngine = "bedrock-agentcore:CreatePolicyEngine";
	/** [Write] bedrock-agentcore:CreateRegistry */
	static readonly CreateRegistry = "bedrock-agentcore:CreateRegistry";
	/** [Write] bedrock-agentcore:CreateRegistryRecord */
	static readonly CreateRegistryRecord =
		"bedrock-agentcore:CreateRegistryRecord";
	/** [Write] bedrock-agentcore:CreateWorkloadIdentity */
	static readonly CreateWorkloadIdentity =
		"bedrock-agentcore:CreateWorkloadIdentity";
	/** [Write] bedrock-agentcore:DeleteABTest */
	static readonly DeleteABTest = "bedrock-agentcore:DeleteABTest";
	/** [Write] bedrock-agentcore:DeleteAgentRuntime */
	static readonly DeleteAgentRuntime = "bedrock-agentcore:DeleteAgentRuntime";
	/** [Write] bedrock-agentcore:DeleteAgentRuntimeEndpoint */
	static readonly DeleteAgentRuntimeEndpoint =
		"bedrock-agentcore:DeleteAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:DeleteApiKeyCredentialProvider */
	static readonly DeleteApiKeyCredentialProvider =
		"bedrock-agentcore:DeleteApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:DeleteBatchEvaluation */
	static readonly DeleteBatchEvaluation =
		"bedrock-agentcore:DeleteBatchEvaluation";
	/** [Write] bedrock-agentcore:DeleteBrowser */
	static readonly DeleteBrowser = "bedrock-agentcore:DeleteBrowser";
	/** [Write] bedrock-agentcore:DeleteBrowserProfile */
	static readonly DeleteBrowserProfile =
		"bedrock-agentcore:DeleteBrowserProfile";
	/** [Write] bedrock-agentcore:DeleteCapacityProvider */
	static readonly DeleteCapacityProvider =
		"bedrock-agentcore:DeleteCapacityProvider";
	/** [Write] bedrock-agentcore:DeleteCapacityProviderSession */
	static readonly DeleteCapacityProviderSession =
		"bedrock-agentcore:DeleteCapacityProviderSession";
	/** [Write] bedrock-agentcore:DeleteCodeInterpreter */
	static readonly DeleteCodeInterpreter =
		"bedrock-agentcore:DeleteCodeInterpreter";
	/** [Write] bedrock-agentcore:DeleteConfigurationBundle */
	static readonly DeleteConfigurationBundle =
		"bedrock-agentcore:DeleteConfigurationBundle";
	/** [Write] bedrock-agentcore:DeleteDataset */
	static readonly DeleteDataset = "bedrock-agentcore:DeleteDataset";
	/** [Write] bedrock-agentcore:DeleteDatasetExamples */
	static readonly DeleteDatasetExamples =
		"bedrock-agentcore:DeleteDatasetExamples";
	/** [Write] bedrock-agentcore:DeleteEvaluator */
	static readonly DeleteEvaluator = "bedrock-agentcore:DeleteEvaluator";
	/** [Write] bedrock-agentcore:DeleteEvent */
	static readonly DeleteEvent = "bedrock-agentcore:DeleteEvent";
	/** [Write] bedrock-agentcore:DeleteGateway */
	static readonly DeleteGateway = "bedrock-agentcore:DeleteGateway";
	/** [Write] bedrock-agentcore:DeleteGatewayRateLimit */
	static readonly DeleteGatewayRateLimit =
		"bedrock-agentcore:DeleteGatewayRateLimit";
	/** [Write] bedrock-agentcore:DeleteGatewayRule */
	static readonly DeleteGatewayRule = "bedrock-agentcore:DeleteGatewayRule";
	/** [Write] bedrock-agentcore:DeleteGatewayTarget */
	static readonly DeleteGatewayTarget = "bedrock-agentcore:DeleteGatewayTarget";
	/** [Write] bedrock-agentcore:DeleteHarness */
	static readonly DeleteHarness = "bedrock-agentcore:DeleteHarness";
	/** [Write] bedrock-agentcore:DeleteHarnessEndpoint */
	static readonly DeleteHarnessEndpoint =
		"bedrock-agentcore:DeleteHarnessEndpoint";
	/** [Write] bedrock-agentcore:DeleteMemory */
	static readonly DeleteMemory = "bedrock-agentcore:DeleteMemory";
	/** [Write] bedrock-agentcore:DeleteMemoryRecord */
	static readonly DeleteMemoryRecord = "bedrock-agentcore:DeleteMemoryRecord";
	/** [Write] bedrock-agentcore:DeleteOauth2CredentialProvider */
	static readonly DeleteOauth2CredentialProvider =
		"bedrock-agentcore:DeleteOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:DeleteOnlineEvaluationConfig */
	static readonly DeleteOnlineEvaluationConfig =
		"bedrock-agentcore:DeleteOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:DeletePaymentConnector */
	static readonly DeletePaymentConnector =
		"bedrock-agentcore:DeletePaymentConnector";
	/** [Write] bedrock-agentcore:DeletePaymentCredentialProvider */
	static readonly DeletePaymentCredentialProvider =
		"bedrock-agentcore:DeletePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:DeletePaymentInstrument */
	static readonly DeletePaymentInstrument =
		"bedrock-agentcore:DeletePaymentInstrument";
	/** [Write] bedrock-agentcore:DeletePaymentManager */
	static readonly DeletePaymentManager =
		"bedrock-agentcore:DeletePaymentManager";
	/** [Write] bedrock-agentcore:DeletePaymentSession */
	static readonly DeletePaymentSession =
		"bedrock-agentcore:DeletePaymentSession";
	/** [Write] bedrock-agentcore:DeletePolicy */
	static readonly DeletePolicy = "bedrock-agentcore:DeletePolicy";
	/** [Write] bedrock-agentcore:DeletePolicyEngine */
	static readonly DeletePolicyEngine = "bedrock-agentcore:DeletePolicyEngine";
	/** [Write] bedrock-agentcore:DeleteRecommendation */
	static readonly DeleteRecommendation =
		"bedrock-agentcore:DeleteRecommendation";
	/** [Write] bedrock-agentcore:DeleteRegistry */
	static readonly DeleteRegistry = "bedrock-agentcore:DeleteRegistry";
	/** [Write] bedrock-agentcore:DeleteRegistryRecord */
	static readonly DeleteRegistryRecord =
		"bedrock-agentcore:DeleteRegistryRecord";
	/** [Write] bedrock-agentcore:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"bedrock-agentcore:DeleteResourcePolicy";
	/** [Write] bedrock-agentcore:DeleteWorkloadIdentity */
	static readonly DeleteWorkloadIdentity =
		"bedrock-agentcore:DeleteWorkloadIdentity";
	/** [Write] bedrock-agentcore:Evaluate */
	static readonly Evaluate = "bedrock-agentcore:Evaluate";
	/** [Write] bedrock-agentcore:GatewayAssociateWebACL */
	static readonly GatewayAssociateWebACL =
		"bedrock-agentcore:GatewayAssociateWebACL";
	/** [Write] bedrock-agentcore:GatewayDisassociateWebACL */
	static readonly GatewayDisassociateWebACL =
		"bedrock-agentcore:GatewayDisassociateWebACL";
	/** [Read] bedrock-agentcore:GatewayGetWebACLForResource */
	static readonly GatewayGetWebACLForResource =
		"bedrock-agentcore:GatewayGetWebACLForResource";
	/** [List] bedrock-agentcore:GatewayListResourcesForWebACL */
	static readonly GatewayListResourcesForWebACL =
		"bedrock-agentcore:GatewayListResourcesForWebACL";
	/** [Read] bedrock-agentcore:GetABTest */
	static readonly actionGetABTest = "bedrock-agentcore:GetABTest";
	/** [Read] bedrock-agentcore:GetAgentCard */
	static readonly actionGetAgentCard = "bedrock-agentcore:GetAgentCard";
	/** [Read] bedrock-agentcore:GetAgentRuntime */
	static readonly actionGetAgentRuntime = "bedrock-agentcore:GetAgentRuntime";
	/** [Read] bedrock-agentcore:GetAgentRuntimeEndpoint */
	static readonly actionGetAgentRuntimeEndpoint =
		"bedrock-agentcore:GetAgentRuntimeEndpoint";
	/** [Read] bedrock-agentcore:GetApiKeyCredentialProvider */
	static readonly actionGetApiKeyCredentialProvider =
		"bedrock-agentcore:GetApiKeyCredentialProvider";
	/** [Read] bedrock-agentcore:GetBatchEvaluation */
	static readonly actionGetBatchEvaluation =
		"bedrock-agentcore:GetBatchEvaluation";
	/** [Read] bedrock-agentcore:GetBrowser */
	static readonly actionGetBrowser = "bedrock-agentcore:GetBrowser";
	/** [Read] bedrock-agentcore:GetBrowserProfile */
	static readonly actionGetBrowserProfile =
		"bedrock-agentcore:GetBrowserProfile";
	/** [Read] bedrock-agentcore:GetBrowserSession */
	static readonly actionGetBrowserSession =
		"bedrock-agentcore:GetBrowserSession";
	/** [Read] bedrock-agentcore:GetCapacityProvider */
	static readonly actionGetCapacityProvider =
		"bedrock-agentcore:GetCapacityProvider";
	/** [Read] bedrock-agentcore:GetCodeInterpreter */
	static readonly actionGetCodeInterpreter =
		"bedrock-agentcore:GetCodeInterpreter";
	/** [Read] bedrock-agentcore:GetCodeInterpreterSession */
	static readonly actionGetCodeInterpreterSession =
		"bedrock-agentcore:GetCodeInterpreterSession";
	/** [Read] bedrock-agentcore:GetConfigurationBundle */
	static readonly actionGetConfigurationBundle =
		"bedrock-agentcore:GetConfigurationBundle";
	/** [Read] bedrock-agentcore:GetConfigurationBundleVersion */
	static readonly actionGetConfigurationBundleVersion =
		"bedrock-agentcore:GetConfigurationBundleVersion";
	/** [Read] bedrock-agentcore:GetDataset */
	static readonly actionGetDataset = "bedrock-agentcore:GetDataset";
	/** [Read] bedrock-agentcore:GetEvaluator */
	static readonly actionGetEvaluator = "bedrock-agentcore:GetEvaluator";
	/** [Read] bedrock-agentcore:GetEvent */
	static readonly actionGetEvent = "bedrock-agentcore:GetEvent";
	/** [Read] bedrock-agentcore:GetGateway */
	static readonly actionGetGateway = "bedrock-agentcore:GetGateway";
	/** [Read] bedrock-agentcore:GetGatewayRateLimit */
	static readonly actionGetGatewayRateLimit =
		"bedrock-agentcore:GetGatewayRateLimit";
	/** [Read] bedrock-agentcore:GetGatewayRule */
	static readonly actionGetGatewayRule = "bedrock-agentcore:GetGatewayRule";
	/** [Read] bedrock-agentcore:GetGatewayTarget */
	static readonly actionGetGatewayTarget = "bedrock-agentcore:GetGatewayTarget";
	/** [Read] bedrock-agentcore:GetHarness */
	static readonly actionGetHarness = "bedrock-agentcore:GetHarness";
	/** [Read] bedrock-agentcore:GetHarnessEndpoint */
	static readonly actionGetHarnessEndpoint =
		"bedrock-agentcore:GetHarnessEndpoint";
	/** [Read] bedrock-agentcore:GetMemory */
	static readonly actionGetMemory = "bedrock-agentcore:GetMemory";
	/** [Read] bedrock-agentcore:GetMemoryRecord */
	static readonly actionGetMemoryRecord = "bedrock-agentcore:GetMemoryRecord";
	/** [Read] bedrock-agentcore:GetOauth2CredentialProvider */
	static readonly actionGetOauth2CredentialProvider =
		"bedrock-agentcore:GetOauth2CredentialProvider";
	/** [Read] bedrock-agentcore:GetOnlineEvaluationConfig */
	static readonly actionGetOnlineEvaluationConfig =
		"bedrock-agentcore:GetOnlineEvaluationConfig";
	/** [Read] bedrock-agentcore:GetPaymentConnector */
	static readonly actionGetPaymentConnector =
		"bedrock-agentcore:GetPaymentConnector";
	/** [Read] bedrock-agentcore:GetPaymentCredentialProvider */
	static readonly actionGetPaymentCredentialProvider =
		"bedrock-agentcore:GetPaymentCredentialProvider";
	/** [Read] bedrock-agentcore:GetPaymentInstrument */
	static readonly actionGetPaymentInstrument =
		"bedrock-agentcore:GetPaymentInstrument";
	/** [Read] bedrock-agentcore:GetPaymentInstrumentBalance */
	static readonly actionGetPaymentInstrumentBalance =
		"bedrock-agentcore:GetPaymentInstrumentBalance";
	/** [Read] bedrock-agentcore:GetPaymentManager */
	static readonly actionGetPaymentManager =
		"bedrock-agentcore:GetPaymentManager";
	/** [Read] bedrock-agentcore:GetPaymentSession */
	static readonly actionGetPaymentSession =
		"bedrock-agentcore:GetPaymentSession";
	/** [Read] bedrock-agentcore:GetPolicy */
	static readonly actionGetPolicy = "bedrock-agentcore:GetPolicy";
	/** [Read] bedrock-agentcore:GetPolicyEngine */
	static readonly actionGetPolicyEngine = "bedrock-agentcore:GetPolicyEngine";
	/** [Read] bedrock-agentcore:GetPolicyEngineSummary */
	static readonly actionGetPolicyEngineSummary =
		"bedrock-agentcore:GetPolicyEngineSummary";
	/** [Read] bedrock-agentcore:GetPolicyGeneration */
	static readonly actionGetPolicyGeneration =
		"bedrock-agentcore:GetPolicyGeneration";
	/** [Read] bedrock-agentcore:GetPolicyGenerationSummary */
	static readonly actionGetPolicyGenerationSummary =
		"bedrock-agentcore:GetPolicyGenerationSummary";
	/** [Read] bedrock-agentcore:GetPolicySummary */
	static readonly actionGetPolicySummary = "bedrock-agentcore:GetPolicySummary";
	/** [Read] bedrock-agentcore:GetRecommendation */
	static readonly actionGetRecommendation =
		"bedrock-agentcore:GetRecommendation";
	/** [Read] bedrock-agentcore:GetRegistry */
	static readonly actionGetRegistry = "bedrock-agentcore:GetRegistry";
	/** [Read] bedrock-agentcore:GetRegistryRecord */
	static readonly actionGetRegistryRecord =
		"bedrock-agentcore:GetRegistryRecord";
	/** [Read] bedrock-agentcore:GetResourceApiKey */
	static readonly actionGetResourceApiKey =
		"bedrock-agentcore:GetResourceApiKey";
	/** [Read] bedrock-agentcore:GetResourceOauth2Token */
	static readonly actionGetResourceOauth2Token =
		"bedrock-agentcore:GetResourceOauth2Token";
	/** [Read] bedrock-agentcore:GetResourcePaymentToken */
	static readonly actionGetResourcePaymentToken =
		"bedrock-agentcore:GetResourcePaymentToken";
	/** [Read] bedrock-agentcore:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"bedrock-agentcore:GetResourcePolicy";
	/** [Read] bedrock-agentcore:GetTokenVault */
	static readonly actionGetTokenVault = "bedrock-agentcore:GetTokenVault";
	/** [Write] bedrock-agentcore:GetWorkloadAccessToken */
	static readonly actionGetWorkloadAccessToken =
		"bedrock-agentcore:GetWorkloadAccessToken";
	/** [Write] bedrock-agentcore:GetWorkloadAccessTokenForJWT */
	static readonly actionGetWorkloadAccessTokenForJWT =
		"bedrock-agentcore:GetWorkloadAccessTokenForJWT";
	/** [Write] bedrock-agentcore:GetWorkloadAccessTokenForUserId */
	static readonly actionGetWorkloadAccessTokenForUserId =
		"bedrock-agentcore:GetWorkloadAccessTokenForUserId";
	/** [Read] bedrock-agentcore:GetWorkloadIdentity */
	static readonly actionGetWorkloadIdentity =
		"bedrock-agentcore:GetWorkloadIdentity";
	/** [Write] bedrock-agentcore:InvokeAgentRuntime */
	static readonly InvokeAgentRuntime = "bedrock-agentcore:InvokeAgentRuntime";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeCommand */
	static readonly InvokeAgentRuntimeCommand =
		"bedrock-agentcore:InvokeAgentRuntimeCommand";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeCommandShell */
	static readonly InvokeAgentRuntimeCommandShell =
		"bedrock-agentcore:InvokeAgentRuntimeCommandShell";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeForUser */
	static readonly InvokeAgentRuntimeForUser =
		"bedrock-agentcore:InvokeAgentRuntimeForUser";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream */
	static readonly InvokeAgentRuntimeWithWebSocketStream =
		"bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream";
	/** [Write] bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser */
	static readonly InvokeAgentRuntimeWithWebSocketStreamForUser =
		"bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser";
	/** [Write] bedrock-agentcore:InvokeCodeInterpreter */
	static readonly InvokeCodeInterpreter =
		"bedrock-agentcore:InvokeCodeInterpreter";
	/** [PermissionManagement] bedrock-agentcore:InvokeGateway */
	static readonly InvokeGateway = "bedrock-agentcore:InvokeGateway";
	/** [Write] bedrock-agentcore:InvokeHarness */
	static readonly InvokeHarness = "bedrock-agentcore:InvokeHarness";
	/** [Read] bedrock-agentcore:InvokeRegistryMcp */
	static readonly InvokeRegistryMcp = "bedrock-agentcore:InvokeRegistryMcp";
	/** [PermissionManagement] bedrock-agentcore:InvokeWebSearch */
	static readonly InvokeWebSearch = "bedrock-agentcore:InvokeWebSearch";
	/** [List] bedrock-agentcore:ListABTests */
	static readonly ListABTests = "bedrock-agentcore:ListABTests";
	/** [List] bedrock-agentcore:ListActors */
	static readonly ListActors = "bedrock-agentcore:ListActors";
	/** [List] bedrock-agentcore:ListAgentRuntimeEndpoints */
	static readonly ListAgentRuntimeEndpoints =
		"bedrock-agentcore:ListAgentRuntimeEndpoints";
	/** [List] bedrock-agentcore:ListAgentRuntimeVersions */
	static readonly ListAgentRuntimeVersions =
		"bedrock-agentcore:ListAgentRuntimeVersions";
	/** [List] bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider */
	static readonly ListAgentRuntimeVersionsByCapacityProvider =
		"bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider";
	/** [List] bedrock-agentcore:ListAgentRuntimes */
	static readonly ListAgentRuntimes = "bedrock-agentcore:ListAgentRuntimes";
	/** [Read] bedrock-agentcore:ListApiKeyCredentialProviders */
	static readonly ListApiKeyCredentialProviders =
		"bedrock-agentcore:ListApiKeyCredentialProviders";
	/** [List] bedrock-agentcore:ListBatchEvaluations */
	static readonly ListBatchEvaluations =
		"bedrock-agentcore:ListBatchEvaluations";
	/** [List] bedrock-agentcore:ListBrowserProfiles */
	static readonly ListBrowserProfiles = "bedrock-agentcore:ListBrowserProfiles";
	/** [List] bedrock-agentcore:ListBrowserSessions */
	static readonly ListBrowserSessions = "bedrock-agentcore:ListBrowserSessions";
	/** [List] bedrock-agentcore:ListBrowsers */
	static readonly ListBrowsers = "bedrock-agentcore:ListBrowsers";
	/** [List] bedrock-agentcore:ListCapacityProviders */
	static readonly ListCapacityProviders =
		"bedrock-agentcore:ListCapacityProviders";
	/** [List] bedrock-agentcore:ListCodeInterpreterSessions */
	static readonly ListCodeInterpreterSessions =
		"bedrock-agentcore:ListCodeInterpreterSessions";
	/** [List] bedrock-agentcore:ListCodeInterpreters */
	static readonly ListCodeInterpreters =
		"bedrock-agentcore:ListCodeInterpreters";
	/** [List] bedrock-agentcore:ListConfigurationBundleVersions */
	static readonly ListConfigurationBundleVersions =
		"bedrock-agentcore:ListConfigurationBundleVersions";
	/** [List] bedrock-agentcore:ListConfigurationBundles */
	static readonly ListConfigurationBundles =
		"bedrock-agentcore:ListConfigurationBundles";
	/** [List] bedrock-agentcore:ListDatasetExamples */
	static readonly ListDatasetExamples = "bedrock-agentcore:ListDatasetExamples";
	/** [List] bedrock-agentcore:ListDatasetVersions */
	static readonly ListDatasetVersions = "bedrock-agentcore:ListDatasetVersions";
	/** [List] bedrock-agentcore:ListDatasets */
	static readonly ListDatasets = "bedrock-agentcore:ListDatasets";
	/** [List] bedrock-agentcore:ListEvaluators */
	static readonly ListEvaluators = "bedrock-agentcore:ListEvaluators";
	/** [List] bedrock-agentcore:ListEvents */
	static readonly ListEvents = "bedrock-agentcore:ListEvents";
	/** [List] bedrock-agentcore:ListGatewayRateLimits */
	static readonly ListGatewayRateLimits =
		"bedrock-agentcore:ListGatewayRateLimits";
	/** [List] bedrock-agentcore:ListGatewayRules */
	static readonly ListGatewayRules = "bedrock-agentcore:ListGatewayRules";
	/** [List] bedrock-agentcore:ListGatewayTargets */
	static readonly ListGatewayTargets = "bedrock-agentcore:ListGatewayTargets";
	/** [List] bedrock-agentcore:ListGateways */
	static readonly ListGateways = "bedrock-agentcore:ListGateways";
	/** [List] bedrock-agentcore:ListHarnessEndpoints */
	static readonly ListHarnessEndpoints =
		"bedrock-agentcore:ListHarnessEndpoints";
	/** [List] bedrock-agentcore:ListHarnessVersions */
	static readonly ListHarnessVersions = "bedrock-agentcore:ListHarnessVersions";
	/** [List] bedrock-agentcore:ListHarnesses */
	static readonly ListHarnesses = "bedrock-agentcore:ListHarnesses";
	/** [List] bedrock-agentcore:ListMemories */
	static readonly ListMemories = "bedrock-agentcore:ListMemories";
	/** [List] bedrock-agentcore:ListMemoryExtractionJobs */
	static readonly ListMemoryExtractionJobs =
		"bedrock-agentcore:ListMemoryExtractionJobs";
	/** [List] bedrock-agentcore:ListMemoryRecords */
	static readonly ListMemoryRecords = "bedrock-agentcore:ListMemoryRecords";
	/** [Read] bedrock-agentcore:ListOauth2CredentialProviders */
	static readonly ListOauth2CredentialProviders =
		"bedrock-agentcore:ListOauth2CredentialProviders";
	/** [List] bedrock-agentcore:ListOnlineEvaluationConfigs */
	static readonly ListOnlineEvaluationConfigs =
		"bedrock-agentcore:ListOnlineEvaluationConfigs";
	/** [List] bedrock-agentcore:ListPaymentConnectors */
	static readonly ListPaymentConnectors =
		"bedrock-agentcore:ListPaymentConnectors";
	/** [List] bedrock-agentcore:ListPaymentCredentialProviders */
	static readonly ListPaymentCredentialProviders =
		"bedrock-agentcore:ListPaymentCredentialProviders";
	/** [List] bedrock-agentcore:ListPaymentInstruments */
	static readonly ListPaymentInstruments =
		"bedrock-agentcore:ListPaymentInstruments";
	/** [List] bedrock-agentcore:ListPaymentManagers */
	static readonly ListPaymentManagers = "bedrock-agentcore:ListPaymentManagers";
	/** [List] bedrock-agentcore:ListPaymentSessions */
	static readonly ListPaymentSessions = "bedrock-agentcore:ListPaymentSessions";
	/** [List] bedrock-agentcore:ListPolicies */
	static readonly ListPolicies = "bedrock-agentcore:ListPolicies";
	/** [List] bedrock-agentcore:ListPolicyEngineSummaries */
	static readonly ListPolicyEngineSummaries =
		"bedrock-agentcore:ListPolicyEngineSummaries";
	/** [List] bedrock-agentcore:ListPolicyEngines */
	static readonly ListPolicyEngines = "bedrock-agentcore:ListPolicyEngines";
	/** [List] bedrock-agentcore:ListPolicyGenerationAssets */
	static readonly ListPolicyGenerationAssets =
		"bedrock-agentcore:ListPolicyGenerationAssets";
	/** [List] bedrock-agentcore:ListPolicyGenerationSummaries */
	static readonly ListPolicyGenerationSummaries =
		"bedrock-agentcore:ListPolicyGenerationSummaries";
	/** [List] bedrock-agentcore:ListPolicyGenerations */
	static readonly ListPolicyGenerations =
		"bedrock-agentcore:ListPolicyGenerations";
	/** [List] bedrock-agentcore:ListPolicySummaries */
	static readonly ListPolicySummaries = "bedrock-agentcore:ListPolicySummaries";
	/** [List] bedrock-agentcore:ListRecommendations */
	static readonly ListRecommendations = "bedrock-agentcore:ListRecommendations";
	/** [List] bedrock-agentcore:ListRegistries */
	static readonly ListRegistries = "bedrock-agentcore:ListRegistries";
	/** [List] bedrock-agentcore:ListRegistryRecords */
	static readonly ListRegistryRecords = "bedrock-agentcore:ListRegistryRecords";
	/** [List] bedrock-agentcore:ListSessions */
	static readonly ListSessions = "bedrock-agentcore:ListSessions";
	/** [List] bedrock-agentcore:ListTagsForResource */
	static readonly ListTagsForResource = "bedrock-agentcore:ListTagsForResource";
	/** [Read] bedrock-agentcore:ListWorkloadIdentities */
	static readonly ListWorkloadIdentities =
		"bedrock-agentcore:ListWorkloadIdentities";
	/** [PermissionManagement] bedrock-agentcore:ManageAdminPolicy */
	static readonly ManageAdminPolicy = "bedrock-agentcore:ManageAdminPolicy";
	/** [PermissionManagement] bedrock-agentcore:ManageResourceScopedPolicy */
	static readonly ManageResourceScopedPolicy =
		"bedrock-agentcore:ManageResourceScopedPolicy";
	/** [PermissionManagement] bedrock-agentcore:PartiallyAuthorizeActions */
	static readonly PartiallyAuthorizeActions =
		"bedrock-agentcore:PartiallyAuthorizeActions";
	/** [Write] bedrock-agentcore:PassCapacityProvider */
	static readonly PassCapacityProvider =
		"bedrock-agentcore:PassCapacityProvider";
	/** [Write] bedrock-agentcore:ProcessPayment */
	static readonly ProcessPayment = "bedrock-agentcore:ProcessPayment";
	/** [Write] bedrock-agentcore:PutResourcePolicy */
	static readonly PutResourcePolicy = "bedrock-agentcore:PutResourcePolicy";
	/** [Write] bedrock-agentcore:PutSystemLogEvents */
	static readonly PutSystemLogEvents = "bedrock-agentcore:PutSystemLogEvents";
	/** [List] bedrock-agentcore:RetrieveMemoryRecords */
	static readonly RetrieveMemoryRecords =
		"bedrock-agentcore:RetrieveMemoryRecords";
	/** [Write] bedrock-agentcore:SaveBrowserSessionProfile */
	static readonly SaveBrowserSessionProfile =
		"bedrock-agentcore:SaveBrowserSessionProfile";
	/** [Read] bedrock-agentcore:SearchRegistryRecords */
	static readonly SearchRegistryRecords =
		"bedrock-agentcore:SearchRegistryRecords";
	/** [Write] bedrock-agentcore:SetTokenVaultCMK */
	static readonly actionSetTokenVaultCMK = "bedrock-agentcore:SetTokenVaultCMK";
	/** [Write] bedrock-agentcore:StartBatchEvaluation */
	static readonly StartBatchEvaluation =
		"bedrock-agentcore:StartBatchEvaluation";
	/** [Write] bedrock-agentcore:StartBrowserSession */
	static readonly StartBrowserSession = "bedrock-agentcore:StartBrowserSession";
	/** [Write] bedrock-agentcore:StartCodeInterpreterSession */
	static readonly StartCodeInterpreterSession =
		"bedrock-agentcore:StartCodeInterpreterSession";
	/** [Write] bedrock-agentcore:StartMemoryExtractionJob */
	static readonly StartMemoryExtractionJob =
		"bedrock-agentcore:StartMemoryExtractionJob";
	/** [Write] bedrock-agentcore:StartPolicyGeneration */
	static readonly StartPolicyGeneration =
		"bedrock-agentcore:StartPolicyGeneration";
	/** [Write] bedrock-agentcore:StartRecommendation */
	static readonly StartRecommendation = "bedrock-agentcore:StartRecommendation";
	/** [Write] bedrock-agentcore:StopBatchEvaluation */
	static readonly StopBatchEvaluation = "bedrock-agentcore:StopBatchEvaluation";
	/** [Write] bedrock-agentcore:StopBrowserSession */
	static readonly StopBrowserSession = "bedrock-agentcore:StopBrowserSession";
	/** [Write] bedrock-agentcore:StopCodeInterpreterSession */
	static readonly StopCodeInterpreterSession =
		"bedrock-agentcore:StopCodeInterpreterSession";
	/** [Write] bedrock-agentcore:StopRuntimeSession */
	static readonly StopRuntimeSession = "bedrock-agentcore:StopRuntimeSession";
	/** [Write] bedrock-agentcore:SubmitRegistryRecordForApproval */
	static readonly SubmitRegistryRecordForApproval =
		"bedrock-agentcore:SubmitRegistryRecordForApproval";
	/** [PermissionManagement] bedrock-agentcore:SynchronizeGatewayTargets */
	static readonly SynchronizeGatewayTargets =
		"bedrock-agentcore:SynchronizeGatewayTargets";
	/** [Tagging] bedrock-agentcore:TagResource */
	static readonly TagResource = "bedrock-agentcore:TagResource";
	/** [Tagging] bedrock-agentcore:UntagResource */
	static readonly UntagResource = "bedrock-agentcore:UntagResource";
	/** [Write] bedrock-agentcore:UpdateABTest */
	static readonly UpdateABTest = "bedrock-agentcore:UpdateABTest";
	/** [Write] bedrock-agentcore:UpdateAgentRuntime */
	static readonly UpdateAgentRuntime = "bedrock-agentcore:UpdateAgentRuntime";
	/** [Write] bedrock-agentcore:UpdateAgentRuntimeEndpoint */
	static readonly UpdateAgentRuntimeEndpoint =
		"bedrock-agentcore:UpdateAgentRuntimeEndpoint";
	/** [Write] bedrock-agentcore:UpdateApiKeyCredentialProvider */
	static readonly UpdateApiKeyCredentialProvider =
		"bedrock-agentcore:UpdateApiKeyCredentialProvider";
	/** [Write] bedrock-agentcore:UpdateBrowserStream */
	static readonly UpdateBrowserStream = "bedrock-agentcore:UpdateBrowserStream";
	/** [Write] bedrock-agentcore:UpdateCapacityProvider */
	static readonly UpdateCapacityProvider =
		"bedrock-agentcore:UpdateCapacityProvider";
	/** [Write] bedrock-agentcore:UpdateConfigurationBundle */
	static readonly UpdateConfigurationBundle =
		"bedrock-agentcore:UpdateConfigurationBundle";
	/** [Write] bedrock-agentcore:UpdateDataset */
	static readonly UpdateDataset = "bedrock-agentcore:UpdateDataset";
	/** [Write] bedrock-agentcore:UpdateDatasetExamples */
	static readonly UpdateDatasetExamples =
		"bedrock-agentcore:UpdateDatasetExamples";
	/** [Write] bedrock-agentcore:UpdateEvaluator */
	static readonly UpdateEvaluator = "bedrock-agentcore:UpdateEvaluator";
	/** [Write] bedrock-agentcore:UpdateGateway */
	static readonly UpdateGateway = "bedrock-agentcore:UpdateGateway";
	/** [Write] bedrock-agentcore:UpdateGatewayRateLimit */
	static readonly UpdateGatewayRateLimit =
		"bedrock-agentcore:UpdateGatewayRateLimit";
	/** [Write] bedrock-agentcore:UpdateGatewayRule */
	static readonly UpdateGatewayRule = "bedrock-agentcore:UpdateGatewayRule";
	/** [Write] bedrock-agentcore:UpdateGatewayTarget */
	static readonly UpdateGatewayTarget = "bedrock-agentcore:UpdateGatewayTarget";
	/** [Write] bedrock-agentcore:UpdateHarness */
	static readonly UpdateHarness = "bedrock-agentcore:UpdateHarness";
	/** [Write] bedrock-agentcore:UpdateHarnessEndpoint */
	static readonly UpdateHarnessEndpoint =
		"bedrock-agentcore:UpdateHarnessEndpoint";
	/** [Write] bedrock-agentcore:UpdateMemory */
	static readonly UpdateMemory = "bedrock-agentcore:UpdateMemory";
	/** [Write] bedrock-agentcore:UpdateOauth2CredentialProvider */
	static readonly UpdateOauth2CredentialProvider =
		"bedrock-agentcore:UpdateOauth2CredentialProvider";
	/** [Write] bedrock-agentcore:UpdateOnlineEvaluationConfig */
	static readonly UpdateOnlineEvaluationConfig =
		"bedrock-agentcore:UpdateOnlineEvaluationConfig";
	/** [Write] bedrock-agentcore:UpdatePaymentConnector */
	static readonly UpdatePaymentConnector =
		"bedrock-agentcore:UpdatePaymentConnector";
	/** [Write] bedrock-agentcore:UpdatePaymentCredentialProvider */
	static readonly UpdatePaymentCredentialProvider =
		"bedrock-agentcore:UpdatePaymentCredentialProvider";
	/** [Write] bedrock-agentcore:UpdatePaymentManager */
	static readonly UpdatePaymentManager =
		"bedrock-agentcore:UpdatePaymentManager";
	/** [Write] bedrock-agentcore:UpdatePolicy */
	static readonly UpdatePolicy = "bedrock-agentcore:UpdatePolicy";
	/** [Write] bedrock-agentcore:UpdatePolicyEngine */
	static readonly UpdatePolicyEngine = "bedrock-agentcore:UpdatePolicyEngine";
	/** [Write] bedrock-agentcore:UpdateRegistry */
	static readonly UpdateRegistry = "bedrock-agentcore:UpdateRegistry";
	/** [Write] bedrock-agentcore:UpdateRegistryRecord */
	static readonly UpdateRegistryRecord =
		"bedrock-agentcore:UpdateRegistryRecord";
	/** [Write] bedrock-agentcore:UpdateRegistryRecordStatus */
	static readonly UpdateRegistryRecordStatus =
		"bedrock-agentcore:UpdateRegistryRecordStatus";
	/** [Write] bedrock-agentcore:UpdateWorkloadIdentity */
	static readonly UpdateWorkloadIdentity =
		"bedrock-agentcore:UpdateWorkloadIdentity";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BedrockAgentcoreActions.CompleteResourceTokenAuth,
		BedrockAgentcoreActions.ConnectBrowserAutomationStream,
		BedrockAgentcoreActions.ConnectBrowserLiveViewStream,
		BedrockAgentcoreActions.GatewayGetWebACLForResource,
		BedrockAgentcoreActions.actionGetABTest,
		BedrockAgentcoreActions.actionGetAgentCard,
		BedrockAgentcoreActions.actionGetAgentRuntime,
		BedrockAgentcoreActions.actionGetAgentRuntimeEndpoint,
		BedrockAgentcoreActions.actionGetApiKeyCredentialProvider,
		BedrockAgentcoreActions.actionGetBatchEvaluation,
		BedrockAgentcoreActions.actionGetBrowser,
		BedrockAgentcoreActions.actionGetBrowserProfile,
		BedrockAgentcoreActions.actionGetBrowserSession,
		BedrockAgentcoreActions.actionGetCapacityProvider,
		BedrockAgentcoreActions.actionGetCodeInterpreter,
		BedrockAgentcoreActions.actionGetCodeInterpreterSession,
		BedrockAgentcoreActions.actionGetConfigurationBundle,
		BedrockAgentcoreActions.actionGetConfigurationBundleVersion,
		BedrockAgentcoreActions.actionGetDataset,
		BedrockAgentcoreActions.actionGetEvaluator,
		BedrockAgentcoreActions.actionGetEvent,
		BedrockAgentcoreActions.actionGetGateway,
		BedrockAgentcoreActions.actionGetGatewayRateLimit,
		BedrockAgentcoreActions.actionGetGatewayRule,
		BedrockAgentcoreActions.actionGetGatewayTarget,
		BedrockAgentcoreActions.actionGetHarness,
		BedrockAgentcoreActions.actionGetHarnessEndpoint,
		BedrockAgentcoreActions.actionGetMemory,
		BedrockAgentcoreActions.actionGetMemoryRecord,
		BedrockAgentcoreActions.actionGetOauth2CredentialProvider,
		BedrockAgentcoreActions.actionGetOnlineEvaluationConfig,
		BedrockAgentcoreActions.actionGetPaymentConnector,
		BedrockAgentcoreActions.actionGetPaymentCredentialProvider,
		BedrockAgentcoreActions.actionGetPaymentInstrument,
		BedrockAgentcoreActions.actionGetPaymentInstrumentBalance,
		BedrockAgentcoreActions.actionGetPaymentManager,
		BedrockAgentcoreActions.actionGetPaymentSession,
		BedrockAgentcoreActions.actionGetPolicy,
		BedrockAgentcoreActions.actionGetPolicyEngine,
		BedrockAgentcoreActions.actionGetPolicyEngineSummary,
		BedrockAgentcoreActions.actionGetPolicyGeneration,
		BedrockAgentcoreActions.actionGetPolicyGenerationSummary,
		BedrockAgentcoreActions.actionGetPolicySummary,
		BedrockAgentcoreActions.actionGetRecommendation,
		BedrockAgentcoreActions.actionGetRegistry,
		BedrockAgentcoreActions.actionGetRegistryRecord,
		BedrockAgentcoreActions.actionGetResourceApiKey,
		BedrockAgentcoreActions.actionGetResourceOauth2Token,
		BedrockAgentcoreActions.actionGetResourcePaymentToken,
		BedrockAgentcoreActions.actionGetResourcePolicy,
		BedrockAgentcoreActions.actionGetTokenVault,
		BedrockAgentcoreActions.actionGetWorkloadIdentity,
		BedrockAgentcoreActions.InvokeRegistryMcp,
		BedrockAgentcoreActions.ListApiKeyCredentialProviders,
		BedrockAgentcoreActions.ListOauth2CredentialProviders,
		BedrockAgentcoreActions.ListWorkloadIdentities,
		BedrockAgentcoreActions.SearchRegistryRecords,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BedrockAgentcoreActions.AddDatasetExamples,
		BedrockAgentcoreActions.BatchCreateMemoryRecords,
		BedrockAgentcoreActions.BatchDeleteMemoryRecords,
		BedrockAgentcoreActions.BatchPutGatewayRateLimits,
		BedrockAgentcoreActions.BatchUpdateMemoryRecords,
		BedrockAgentcoreActions.CreateABTest,
		BedrockAgentcoreActions.CreateAgentRuntime,
		BedrockAgentcoreActions.CreateAgentRuntimeEndpoint,
		BedrockAgentcoreActions.CreateApiKeyCredentialProvider,
		BedrockAgentcoreActions.CreateBrowser,
		BedrockAgentcoreActions.CreateBrowserProfile,
		BedrockAgentcoreActions.CreateCapacityProvider,
		BedrockAgentcoreActions.CreateCodeInterpreter,
		BedrockAgentcoreActions.CreateConfigurationBundle,
		BedrockAgentcoreActions.CreateDataset,
		BedrockAgentcoreActions.CreateDatasetVersion,
		BedrockAgentcoreActions.CreateEvaluator,
		BedrockAgentcoreActions.CreateEvent,
		BedrockAgentcoreActions.CreateGateway,
		BedrockAgentcoreActions.CreateGatewayRateLimit,
		BedrockAgentcoreActions.CreateGatewayRule,
		BedrockAgentcoreActions.CreateGatewayTarget,
		BedrockAgentcoreActions.CreateHarness,
		BedrockAgentcoreActions.CreateHarnessEndpoint,
		BedrockAgentcoreActions.CreateMemory,
		BedrockAgentcoreActions.CreateOauth2CredentialProvider,
		BedrockAgentcoreActions.CreateOnlineEvaluationConfig,
		BedrockAgentcoreActions.CreatePaymentConnector,
		BedrockAgentcoreActions.CreatePaymentCredentialProvider,
		BedrockAgentcoreActions.CreatePaymentInstrument,
		BedrockAgentcoreActions.CreatePaymentManager,
		BedrockAgentcoreActions.CreatePaymentSession,
		BedrockAgentcoreActions.CreatePolicy,
		BedrockAgentcoreActions.CreatePolicyEngine,
		BedrockAgentcoreActions.CreateRegistry,
		BedrockAgentcoreActions.CreateRegistryRecord,
		BedrockAgentcoreActions.CreateWorkloadIdentity,
		BedrockAgentcoreActions.DeleteABTest,
		BedrockAgentcoreActions.DeleteAgentRuntime,
		BedrockAgentcoreActions.DeleteAgentRuntimeEndpoint,
		BedrockAgentcoreActions.DeleteApiKeyCredentialProvider,
		BedrockAgentcoreActions.DeleteBatchEvaluation,
		BedrockAgentcoreActions.DeleteBrowser,
		BedrockAgentcoreActions.DeleteBrowserProfile,
		BedrockAgentcoreActions.DeleteCapacityProvider,
		BedrockAgentcoreActions.DeleteCapacityProviderSession,
		BedrockAgentcoreActions.DeleteCodeInterpreter,
		BedrockAgentcoreActions.DeleteConfigurationBundle,
		BedrockAgentcoreActions.DeleteDataset,
		BedrockAgentcoreActions.DeleteDatasetExamples,
		BedrockAgentcoreActions.DeleteEvaluator,
		BedrockAgentcoreActions.DeleteEvent,
		BedrockAgentcoreActions.DeleteGateway,
		BedrockAgentcoreActions.DeleteGatewayRateLimit,
		BedrockAgentcoreActions.DeleteGatewayRule,
		BedrockAgentcoreActions.DeleteGatewayTarget,
		BedrockAgentcoreActions.DeleteHarness,
		BedrockAgentcoreActions.DeleteHarnessEndpoint,
		BedrockAgentcoreActions.DeleteMemory,
		BedrockAgentcoreActions.DeleteMemoryRecord,
		BedrockAgentcoreActions.DeleteOauth2CredentialProvider,
		BedrockAgentcoreActions.DeleteOnlineEvaluationConfig,
		BedrockAgentcoreActions.DeletePaymentConnector,
		BedrockAgentcoreActions.DeletePaymentCredentialProvider,
		BedrockAgentcoreActions.DeletePaymentInstrument,
		BedrockAgentcoreActions.DeletePaymentManager,
		BedrockAgentcoreActions.DeletePaymentSession,
		BedrockAgentcoreActions.DeletePolicy,
		BedrockAgentcoreActions.DeletePolicyEngine,
		BedrockAgentcoreActions.DeleteRecommendation,
		BedrockAgentcoreActions.DeleteRegistry,
		BedrockAgentcoreActions.DeleteRegistryRecord,
		BedrockAgentcoreActions.DeleteResourcePolicy,
		BedrockAgentcoreActions.DeleteWorkloadIdentity,
		BedrockAgentcoreActions.Evaluate,
		BedrockAgentcoreActions.GatewayAssociateWebACL,
		BedrockAgentcoreActions.GatewayDisassociateWebACL,
		BedrockAgentcoreActions.actionGetWorkloadAccessToken,
		BedrockAgentcoreActions.actionGetWorkloadAccessTokenForJWT,
		BedrockAgentcoreActions.actionGetWorkloadAccessTokenForUserId,
		BedrockAgentcoreActions.InvokeAgentRuntime,
		BedrockAgentcoreActions.InvokeAgentRuntimeCommand,
		BedrockAgentcoreActions.InvokeAgentRuntimeCommandShell,
		BedrockAgentcoreActions.InvokeAgentRuntimeForUser,
		BedrockAgentcoreActions.InvokeAgentRuntimeWithWebSocketStream,
		BedrockAgentcoreActions.InvokeAgentRuntimeWithWebSocketStreamForUser,
		BedrockAgentcoreActions.InvokeCodeInterpreter,
		BedrockAgentcoreActions.InvokeHarness,
		BedrockAgentcoreActions.PassCapacityProvider,
		BedrockAgentcoreActions.ProcessPayment,
		BedrockAgentcoreActions.PutResourcePolicy,
		BedrockAgentcoreActions.PutSystemLogEvents,
		BedrockAgentcoreActions.SaveBrowserSessionProfile,
		BedrockAgentcoreActions.actionSetTokenVaultCMK,
		BedrockAgentcoreActions.StartBatchEvaluation,
		BedrockAgentcoreActions.StartBrowserSession,
		BedrockAgentcoreActions.StartCodeInterpreterSession,
		BedrockAgentcoreActions.StartMemoryExtractionJob,
		BedrockAgentcoreActions.StartPolicyGeneration,
		BedrockAgentcoreActions.StartRecommendation,
		BedrockAgentcoreActions.StopBatchEvaluation,
		BedrockAgentcoreActions.StopBrowserSession,
		BedrockAgentcoreActions.StopCodeInterpreterSession,
		BedrockAgentcoreActions.StopRuntimeSession,
		BedrockAgentcoreActions.SubmitRegistryRecordForApproval,
		BedrockAgentcoreActions.UpdateABTest,
		BedrockAgentcoreActions.UpdateAgentRuntime,
		BedrockAgentcoreActions.UpdateAgentRuntimeEndpoint,
		BedrockAgentcoreActions.UpdateApiKeyCredentialProvider,
		BedrockAgentcoreActions.UpdateBrowserStream,
		BedrockAgentcoreActions.UpdateCapacityProvider,
		BedrockAgentcoreActions.UpdateConfigurationBundle,
		BedrockAgentcoreActions.UpdateDataset,
		BedrockAgentcoreActions.UpdateDatasetExamples,
		BedrockAgentcoreActions.UpdateEvaluator,
		BedrockAgentcoreActions.UpdateGateway,
		BedrockAgentcoreActions.UpdateGatewayRateLimit,
		BedrockAgentcoreActions.UpdateGatewayRule,
		BedrockAgentcoreActions.UpdateGatewayTarget,
		BedrockAgentcoreActions.UpdateHarness,
		BedrockAgentcoreActions.UpdateHarnessEndpoint,
		BedrockAgentcoreActions.UpdateMemory,
		BedrockAgentcoreActions.UpdateOauth2CredentialProvider,
		BedrockAgentcoreActions.UpdateOnlineEvaluationConfig,
		BedrockAgentcoreActions.UpdatePaymentConnector,
		BedrockAgentcoreActions.UpdatePaymentCredentialProvider,
		BedrockAgentcoreActions.UpdatePaymentManager,
		BedrockAgentcoreActions.UpdatePolicy,
		BedrockAgentcoreActions.UpdatePolicyEngine,
		BedrockAgentcoreActions.UpdateRegistry,
		BedrockAgentcoreActions.UpdateRegistryRecord,
		BedrockAgentcoreActions.UpdateRegistryRecordStatus,
		BedrockAgentcoreActions.UpdateWorkloadIdentity,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BedrockAgentcoreActions.GatewayListResourcesForWebACL,
		BedrockAgentcoreActions.ListABTests,
		BedrockAgentcoreActions.ListActors,
		BedrockAgentcoreActions.ListAgentRuntimeEndpoints,
		BedrockAgentcoreActions.ListAgentRuntimeVersions,
		BedrockAgentcoreActions.ListAgentRuntimeVersionsByCapacityProvider,
		BedrockAgentcoreActions.ListAgentRuntimes,
		BedrockAgentcoreActions.ListBatchEvaluations,
		BedrockAgentcoreActions.ListBrowserProfiles,
		BedrockAgentcoreActions.ListBrowserSessions,
		BedrockAgentcoreActions.ListBrowsers,
		BedrockAgentcoreActions.ListCapacityProviders,
		BedrockAgentcoreActions.ListCodeInterpreterSessions,
		BedrockAgentcoreActions.ListCodeInterpreters,
		BedrockAgentcoreActions.ListConfigurationBundleVersions,
		BedrockAgentcoreActions.ListConfigurationBundles,
		BedrockAgentcoreActions.ListDatasetExamples,
		BedrockAgentcoreActions.ListDatasetVersions,
		BedrockAgentcoreActions.ListDatasets,
		BedrockAgentcoreActions.ListEvaluators,
		BedrockAgentcoreActions.ListEvents,
		BedrockAgentcoreActions.ListGatewayRateLimits,
		BedrockAgentcoreActions.ListGatewayRules,
		BedrockAgentcoreActions.ListGatewayTargets,
		BedrockAgentcoreActions.ListGateways,
		BedrockAgentcoreActions.ListHarnessEndpoints,
		BedrockAgentcoreActions.ListHarnessVersions,
		BedrockAgentcoreActions.ListHarnesses,
		BedrockAgentcoreActions.ListMemories,
		BedrockAgentcoreActions.ListMemoryExtractionJobs,
		BedrockAgentcoreActions.ListMemoryRecords,
		BedrockAgentcoreActions.ListOnlineEvaluationConfigs,
		BedrockAgentcoreActions.ListPaymentConnectors,
		BedrockAgentcoreActions.ListPaymentCredentialProviders,
		BedrockAgentcoreActions.ListPaymentInstruments,
		BedrockAgentcoreActions.ListPaymentManagers,
		BedrockAgentcoreActions.ListPaymentSessions,
		BedrockAgentcoreActions.ListPolicies,
		BedrockAgentcoreActions.ListPolicyEngineSummaries,
		BedrockAgentcoreActions.ListPolicyEngines,
		BedrockAgentcoreActions.ListPolicyGenerationAssets,
		BedrockAgentcoreActions.ListPolicyGenerationSummaries,
		BedrockAgentcoreActions.ListPolicyGenerations,
		BedrockAgentcoreActions.ListPolicySummaries,
		BedrockAgentcoreActions.ListRecommendations,
		BedrockAgentcoreActions.ListRegistries,
		BedrockAgentcoreActions.ListRegistryRecords,
		BedrockAgentcoreActions.ListSessions,
		BedrockAgentcoreActions.ListTagsForResource,
		BedrockAgentcoreActions.RetrieveMemoryRecords,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		BedrockAgentcoreActions.AllowVendedLogDeliveryForResource,
		BedrockAgentcoreActions.AuthorizeAction,
		BedrockAgentcoreActions.InvokeGateway,
		BedrockAgentcoreActions.InvokeWebSearch,
		BedrockAgentcoreActions.ManageAdminPolicy,
		BedrockAgentcoreActions.ManageResourceScopedPolicy,
		BedrockAgentcoreActions.PartiallyAuthorizeActions,
		BedrockAgentcoreActions.SynchronizeGatewayTargets,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BedrockAgentcoreActions.TagResource,
		BedrockAgentcoreActions.UntagResource,
	];
}

/**
 * Properties for building a ab-test ARN.
 */
export interface BedrockAgentcoreAbTestArnProps {
	/** The ABTestId component of the ARN. */
	readonly abTestId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ab-test ARN.
 */
export interface BedrockAgentcoreAbTestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ABTestId component. */
	readonly abTestId: string;
}

/**
 * Properties for building a apikeycredentialprovider ARN.
 */
export interface BedrockAgentcoreApikeycredentialproviderArnProps {
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
}

/**
 * Parsed components of a apikeycredentialprovider ARN.
 */
export interface BedrockAgentcoreApikeycredentialproviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TokenVaultId component. */
	readonly tokenVaultId: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a batch-evaluate ARN.
 */
export interface BedrockAgentcoreBatchEvaluateArnProps {
	/** The BatchEvaluationId component of the ARN. */
	readonly batchEvaluationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batch-evaluate ARN.
 */
export interface BedrockAgentcoreBatchEvaluateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BatchEvaluationId component. */
	readonly batchEvaluationId: string;
}

/**
 * Properties for building a browser ARN.
 */
export interface BedrockAgentcoreBrowserArnProps {
	/** The BrowserId component of the ARN. */
	readonly browserId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a browser ARN.
 */
export interface BedrockAgentcoreBrowserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BrowserId component. */
	readonly browserId: string;
}

/**
 * Properties for building a browser-custom ARN.
 */
export interface BedrockAgentcoreBrowserCustomArnProps {
	/** The BrowserId component of the ARN. */
	readonly browserId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a browser-custom ARN.
 */
export interface BedrockAgentcoreBrowserCustomArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BrowserId component. */
	readonly browserId: string;
}

/**
 * Properties for building a browser-profile ARN.
 */
export interface BedrockAgentcoreBrowserProfileArnProps {
	/** The BrowserProfileId component of the ARN. */
	readonly browserProfileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a browser-profile ARN.
 */
export interface BedrockAgentcoreBrowserProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BrowserProfileId component. */
	readonly browserProfileId: string;
}

/**
 * Properties for building a capacity-provider ARN.
 */
export interface BedrockAgentcoreCapacityProviderArnProps {
	/** The CapacityProviderId component of the ARN. */
	readonly capacityProviderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a capacity-provider ARN.
 */
export interface BedrockAgentcoreCapacityProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CapacityProviderId component. */
	readonly capacityProviderId: string;
}

/**
 * Properties for building a code-interpreter ARN.
 */
export interface BedrockAgentcoreCodeInterpreterArnProps {
	/** The CodeInterpreterId component of the ARN. */
	readonly codeInterpreterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-interpreter ARN.
 */
export interface BedrockAgentcoreCodeInterpreterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CodeInterpreterId component. */
	readonly codeInterpreterId: string;
}

/**
 * Properties for building a code-interpreter-custom ARN.
 */
export interface BedrockAgentcoreCodeInterpreterCustomArnProps {
	/** The CodeInterpreterId component of the ARN. */
	readonly codeInterpreterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-interpreter-custom ARN.
 */
export interface BedrockAgentcoreCodeInterpreterCustomArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CodeInterpreterId component. */
	readonly codeInterpreterId: string;
}

/**
 * Properties for building a configuration-bundle ARN.
 */
export interface BedrockAgentcoreConfigurationBundleArnProps {
	/** The ConfigurationBundleId component of the ARN. */
	readonly configurationBundleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration-bundle ARN.
 */
export interface BedrockAgentcoreConfigurationBundleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationBundleId component. */
	readonly configurationBundleId: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface BedrockAgentcoreDatasetArnProps {
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
export interface BedrockAgentcoreDatasetArnComponents {
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
 * Properties for building a evaluator ARN.
 */
export interface BedrockAgentcoreEvaluatorArnProps {
	/** The EvaluatorId component of the ARN. */
	readonly evaluatorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a evaluator ARN.
 */
export interface BedrockAgentcoreEvaluatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EvaluatorId component. */
	readonly evaluatorId: string;
}

/**
 * Properties for building a gateway ARN.
 */
export interface BedrockAgentcoreGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gateway ARN.
 */
export interface BedrockAgentcoreGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a harness ARN.
 */
export interface BedrockAgentcoreHarnessArnProps {
	/** The HarnessId component of the ARN. */
	readonly harnessId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a harness ARN.
 */
export interface BedrockAgentcoreHarnessArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HarnessId component. */
	readonly harnessId: string;
}

/**
 * Properties for building a harness-endpoint ARN.
 */
export interface BedrockAgentcoreHarnessEndpointArnProps {
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
}

/**
 * Parsed components of a harness-endpoint ARN.
 */
export interface BedrockAgentcoreHarnessEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HarnessId component. */
	readonly harnessId: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a memory ARN.
 */
export interface BedrockAgentcoreMemoryArnProps {
	/** The MemoryId component of the ARN. */
	readonly memoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a memory ARN.
 */
export interface BedrockAgentcoreMemoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MemoryId component. */
	readonly memoryId: string;
}

/**
 * Properties for building a oauth2credentialprovider ARN.
 */
export interface BedrockAgentcoreOauth2credentialproviderArnProps {
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
}

/**
 * Parsed components of a oauth2credentialprovider ARN.
 */
export interface BedrockAgentcoreOauth2credentialproviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TokenVaultId component. */
	readonly tokenVaultId: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a online-evaluation-config ARN.
 */
export interface BedrockAgentcoreOnlineEvaluationConfigArnProps {
	/** The OnlineEvaluationConfigId component of the ARN. */
	readonly onlineEvaluationConfigId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a online-evaluation-config ARN.
 */
export interface BedrockAgentcoreOnlineEvaluationConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OnlineEvaluationConfigId component. */
	readonly onlineEvaluationConfigId: string;
}

/**
 * Properties for building a payment-manager ARN.
 */
export interface BedrockAgentcorePaymentManagerArnProps {
	/** The PaymentManagerId component of the ARN. */
	readonly paymentManagerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a payment-manager ARN.
 */
export interface BedrockAgentcorePaymentManagerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PaymentManagerId component. */
	readonly paymentManagerId: string;
}

/**
 * Properties for building a paymentcredentialprovider ARN.
 */
export interface BedrockAgentcorePaymentcredentialproviderArnProps {
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
}

/**
 * Parsed components of a paymentcredentialprovider ARN.
 */
export interface BedrockAgentcorePaymentcredentialproviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TokenVaultId component. */
	readonly tokenVaultId: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface BedrockAgentcorePolicyArnProps {
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
}

/**
 * Parsed components of a policy ARN.
 */
export interface BedrockAgentcorePolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyEngineId component. */
	readonly policyEngineId: string;
	/** The PolicyId component. */
	readonly policyId: string;
}

/**
 * Properties for building a policy-engine ARN.
 */
export interface BedrockAgentcorePolicyEngineArnProps {
	/** The PolicyEngineId component of the ARN. */
	readonly policyEngineId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy-engine ARN.
 */
export interface BedrockAgentcorePolicyEngineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyEngineId component. */
	readonly policyEngineId: string;
}

/**
 * Properties for building a policy-generation ARN.
 */
export interface BedrockAgentcorePolicyGenerationArnProps {
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
}

/**
 * Parsed components of a policy-generation ARN.
 */
export interface BedrockAgentcorePolicyGenerationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyEngineId component. */
	readonly policyEngineId: string;
	/** The PolicyGenerationId component. */
	readonly policyGenerationId: string;
}

/**
 * Properties for building a recommendation ARN.
 */
export interface BedrockAgentcoreRecommendationArnProps {
	/** The RecommendationId component of the ARN. */
	readonly recommendationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommendation ARN.
 */
export interface BedrockAgentcoreRecommendationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RecommendationId component. */
	readonly recommendationId: string;
}

/**
 * Properties for building a registry ARN.
 */
export interface BedrockAgentcoreRegistryArnProps {
	/** The RegistryId component of the ARN. */
	readonly registryId: string;
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
export interface BedrockAgentcoreRegistryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryId component. */
	readonly registryId: string;
}

/**
 * Properties for building a registry-record ARN.
 */
export interface BedrockAgentcoreRegistryRecordArnProps {
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
}

/**
 * Parsed components of a registry-record ARN.
 */
export interface BedrockAgentcoreRegistryRecordArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryId component. */
	readonly registryId: string;
	/** The RecordId component. */
	readonly recordId: string;
}

/**
 * Properties for building a runtime ARN.
 */
export interface BedrockAgentcoreRuntimeArnProps {
	/** The RuntimeId component of the ARN. */
	readonly runtimeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a runtime ARN.
 */
export interface BedrockAgentcoreRuntimeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuntimeId component. */
	readonly runtimeId: string;
}

/**
 * Properties for building a runtime-endpoint ARN.
 */
export interface BedrockAgentcoreRuntimeEndpointArnProps {
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
}

/**
 * Parsed components of a runtime-endpoint ARN.
 */
export interface BedrockAgentcoreRuntimeEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuntimeId component. */
	readonly runtimeId: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a token-vault ARN.
 */
export interface BedrockAgentcoreTokenVaultArnProps {
	/** The TokenVaultId component of the ARN. */
	readonly tokenVaultId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a token-vault ARN.
 */
export interface BedrockAgentcoreTokenVaultArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TokenVaultId component. */
	readonly tokenVaultId: string;
}

/**
 * Properties for building a web-search ARN.
 */
export interface BedrockAgentcoreWebSearchArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a web-search ARN.
 */
export interface BedrockAgentcoreWebSearchArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a workload-identity ARN.
 */
export interface BedrockAgentcoreWorkloadIdentityArnProps {
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
}

/**
 * Parsed components of a workload-identity ARN.
 */
export interface BedrockAgentcoreWorkloadIdentityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
	/** The WorkloadIdentityName component. */
	readonly workloadIdentityName: string;
}

/**
 * Properties for building a workload-identity-directory ARN.
 */
export interface BedrockAgentcoreWorkloadIdentityDirectoryArnProps {
	/** The DirectoryId component of the ARN. */
	readonly directoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workload-identity-directory ARN.
 */
export interface BedrockAgentcoreWorkloadIdentityDirectoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

const AbTestArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):ab-test\/(?<abTestId>[^:/?]+)$/;
const ApikeycredentialproviderArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault\/(?<tokenVaultId>[^:/?]+)\/apikeycredentialprovider\/(?<name>[^:/?]+)$/;
const BatchEvaluateArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):batch-evaluate\/(?<batchEvaluationId>[^:/?]+)$/;
const BrowserArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):aws:browser\/(?<browserId>[^:/?]+)$/;
const BrowserCustomArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):browser-custom\/(?<browserId>[^:/?]+)$/;
const BrowserProfileArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):browser-profile\/(?<browserProfileId>[^:/?]+)$/;
const CapacityProviderArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):capacity-provider\/(?<capacityProviderId>[^:/?]+)$/;
const CodeInterpreterArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):aws:code-interpreter\/(?<codeInterpreterId>[^:/?]+)$/;
const CodeInterpreterCustomArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):code-interpreter-custom\/(?<codeInterpreterId>[^:/?]+)$/;
const ConfigurationBundleArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):configuration-bundle\/(?<configurationBundleId>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetId>[^:/?]+)$/;
const EvaluatorArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):evaluator\/(?<evaluatorId>[^:/?]+)$/;
const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const HarnessArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):harness\/(?<harnessId>[^:/?]+)$/;
const HarnessEndpointArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):harness\/(?<harnessId>[^:/?]+)\/harness-endpoint\/(?<name>[^:/?]+)$/;
const MemoryArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):memory\/(?<memoryId>[^:/?]+)$/;
const Oauth2credentialproviderArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault\/(?<tokenVaultId>[^:/?]+)\/oauth2credentialprovider\/(?<name>[^:/?]+)$/;
const OnlineEvaluationConfigArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):online-evaluation-config\/(?<onlineEvaluationConfigId>[^:/?]+)$/;
const PaymentManagerArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):payment-manager\/(?<paymentManagerId>[^:/?]+)$/;
const PaymentcredentialproviderArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault\/(?<tokenVaultId>[^:/?]+)\/paymentcredentialprovider\/(?<name>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine\/(?<policyEngineId>[^:/?]+)\/policy\/(?<policyId>[^:/?]+)$/;
const PolicyEngineArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine\/(?<policyEngineId>[^:/?]+)$/;
const PolicyGenerationArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):policy-engine\/(?<policyEngineId>[^:/?]+)\/policy-generation\/(?<policyGenerationId>[^:/?]+)$/;
const RecommendationArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):recommendation\/(?<recommendationId>[^:/?]+)$/;
const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)$/;
const RegistryRecordArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)\/record\/(?<recordId>[^:/?]+)$/;
const RuntimeArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):runtime\/(?<runtimeId>[^:/?]+)$/;
const RuntimeEndpointArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):runtime\/(?<runtimeId>[^:/?]+)\/runtime-endpoint\/(?<name>[^:/?]+)$/;
const TokenVaultArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):token-vault\/(?<tokenVaultId>[^:/?]+)$/;
const WebSearchArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):tool\/web-search\.v1$/;
const WorkloadIdentityArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):workload-identity-directory\/(?<directoryId>[^:/?]+)\/workload-identity\/(?<workloadIdentityName>[^:/?]+)$/;
const WorkloadIdentityDirectoryArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):workload-identity-directory\/(?<directoryId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bedrock-agentcore resources.
 */
export class BedrockAgentcoreResources {
	/**
	 * Builds an ARN for the ab-test resource.
	 */
	static abTest(props: BedrockAgentcoreAbTestArnProps): string {
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
	static parseAbTestArn(arn: string): BedrockAgentcoreAbTestArnComponents {
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
	static apikeycredentialprovider(
		props: BedrockAgentcoreApikeycredentialproviderArnProps,
	): string {
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
	static parseApikeycredentialproviderArn(
		arn: string,
	): BedrockAgentcoreApikeycredentialproviderArnComponents {
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
	static batchEvaluate(props: BedrockAgentcoreBatchEvaluateArnProps): string {
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
	static parseBatchEvaluateArn(
		arn: string,
	): BedrockAgentcoreBatchEvaluateArnComponents {
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
	static browser(props: BedrockAgentcoreBrowserArnProps): string {
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
	static parseBrowserArn(arn: string): BedrockAgentcoreBrowserArnComponents {
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
	static browserCustom(props: BedrockAgentcoreBrowserCustomArnProps): string {
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
	static parseBrowserCustomArn(
		arn: string,
	): BedrockAgentcoreBrowserCustomArnComponents {
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
	static browserProfile(props: BedrockAgentcoreBrowserProfileArnProps): string {
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
	static parseBrowserProfileArn(
		arn: string,
	): BedrockAgentcoreBrowserProfileArnComponents {
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
	static capacityProvider(
		props: BedrockAgentcoreCapacityProviderArnProps,
	): string {
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
	static parseCapacityProviderArn(
		arn: string,
	): BedrockAgentcoreCapacityProviderArnComponents {
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
	static codeInterpreter(
		props: BedrockAgentcoreCodeInterpreterArnProps,
	): string {
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
	static parseCodeInterpreterArn(
		arn: string,
	): BedrockAgentcoreCodeInterpreterArnComponents {
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
	static codeInterpreterCustom(
		props: BedrockAgentcoreCodeInterpreterCustomArnProps,
	): string {
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
	static parseCodeInterpreterCustomArn(
		arn: string,
	): BedrockAgentcoreCodeInterpreterCustomArnComponents {
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
	static configurationBundle(
		props: BedrockAgentcoreConfigurationBundleArnProps,
	): string {
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
	static parseConfigurationBundleArn(
		arn: string,
	): BedrockAgentcoreConfigurationBundleArnComponents {
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
	static dataset(props: BedrockAgentcoreDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): BedrockAgentcoreDatasetArnComponents {
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
	static evaluator(props: BedrockAgentcoreEvaluatorArnProps): string {
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
	static parseEvaluatorArn(
		arn: string,
	): BedrockAgentcoreEvaluatorArnComponents {
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
	static gateway(props: BedrockAgentcoreGatewayArnProps): string {
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
	static parseGatewayArn(arn: string): BedrockAgentcoreGatewayArnComponents {
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
	static harness(props: BedrockAgentcoreHarnessArnProps): string {
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
	static parseHarnessArn(arn: string): BedrockAgentcoreHarnessArnComponents {
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
	static harnessEndpoint(
		props: BedrockAgentcoreHarnessEndpointArnProps,
	): string {
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
	static parseHarnessEndpointArn(
		arn: string,
	): BedrockAgentcoreHarnessEndpointArnComponents {
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
	static memory(props: BedrockAgentcoreMemoryArnProps): string {
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
	static parseMemoryArn(arn: string): BedrockAgentcoreMemoryArnComponents {
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
	static oauth2credentialprovider(
		props: BedrockAgentcoreOauth2credentialproviderArnProps,
	): string {
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
	static parseOauth2credentialproviderArn(
		arn: string,
	): BedrockAgentcoreOauth2credentialproviderArnComponents {
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
	static onlineEvaluationConfig(
		props: BedrockAgentcoreOnlineEvaluationConfigArnProps,
	): string {
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
	static parseOnlineEvaluationConfigArn(
		arn: string,
	): BedrockAgentcoreOnlineEvaluationConfigArnComponents {
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
	static paymentManager(props: BedrockAgentcorePaymentManagerArnProps): string {
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
	static parsePaymentManagerArn(
		arn: string,
	): BedrockAgentcorePaymentManagerArnComponents {
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
	static paymentcredentialprovider(
		props: BedrockAgentcorePaymentcredentialproviderArnProps,
	): string {
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
	static parsePaymentcredentialproviderArn(
		arn: string,
	): BedrockAgentcorePaymentcredentialproviderArnComponents {
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
	static policy(props: BedrockAgentcorePolicyArnProps): string {
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
	static parsePolicyArn(arn: string): BedrockAgentcorePolicyArnComponents {
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
	static policyEngine(props: BedrockAgentcorePolicyEngineArnProps): string {
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
	static parsePolicyEngineArn(
		arn: string,
	): BedrockAgentcorePolicyEngineArnComponents {
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
	static policyGeneration(
		props: BedrockAgentcorePolicyGenerationArnProps,
	): string {
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
	static parsePolicyGenerationArn(
		arn: string,
	): BedrockAgentcorePolicyGenerationArnComponents {
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
	static recommendation(props: BedrockAgentcoreRecommendationArnProps): string {
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
	static parseRecommendationArn(
		arn: string,
	): BedrockAgentcoreRecommendationArnComponents {
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
	static registry(props: BedrockAgentcoreRegistryArnProps): string {
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
	static parseRegistryArn(arn: string): BedrockAgentcoreRegistryArnComponents {
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
	static registryRecord(props: BedrockAgentcoreRegistryRecordArnProps): string {
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
	static parseRegistryRecordArn(
		arn: string,
	): BedrockAgentcoreRegistryRecordArnComponents {
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
	static runtime(props: BedrockAgentcoreRuntimeArnProps): string {
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
	static parseRuntimeArn(arn: string): BedrockAgentcoreRuntimeArnComponents {
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
	static runtimeEndpoint(
		props: BedrockAgentcoreRuntimeEndpointArnProps,
	): string {
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
	static parseRuntimeEndpointArn(
		arn: string,
	): BedrockAgentcoreRuntimeEndpointArnComponents {
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
	static tokenVault(props: BedrockAgentcoreTokenVaultArnProps): string {
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
	static parseTokenVaultArn(
		arn: string,
	): BedrockAgentcoreTokenVaultArnComponents {
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
	static webSearch(props: BedrockAgentcoreWebSearchArnProps): string {
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
	static parseWebSearchArn(
		arn: string,
	): BedrockAgentcoreWebSearchArnComponents {
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
	static workloadIdentity(
		props: BedrockAgentcoreWorkloadIdentityArnProps,
	): string {
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
	static parseWorkloadIdentityArn(
		arn: string,
	): BedrockAgentcoreWorkloadIdentityArnComponents {
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
	static workloadIdentityDirectory(
		props: BedrockAgentcoreWorkloadIdentityDirectoryArnProps,
	): string {
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
	static parseWorkloadIdentityDirectoryArn(
		arn: string,
	): BedrockAgentcoreWorkloadIdentityDirectoryArnComponents {
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
	static readonly AddDatasetExamples: string[] = [
		"bedrock-agentcore:AddDatasetExamples",
	];
	/** IAM actions required for the BatchCreateMemoryRecords API call. */
	static readonly BatchCreateMemoryRecords: string[] = [
		"bedrock-agentcore:BatchCreateMemoryRecords",
	];
	/** IAM actions required for the BatchDeleteMemoryRecords API call. */
	static readonly BatchDeleteMemoryRecords: string[] = [
		"bedrock-agentcore:BatchDeleteMemoryRecords",
	];
	/** IAM actions required for the BatchPutGatewayRateLimits API call. */
	static readonly BatchPutGatewayRateLimits: string[] = [
		"bedrock-agentcore:BatchPutGatewayRateLimits",
	];
	/** IAM actions required for the BatchUpdateMemoryRecords API call. */
	static readonly BatchUpdateMemoryRecords: string[] = [
		"bedrock-agentcore:BatchUpdateMemoryRecords",
	];
	/** IAM actions required for the CompleteResourceTokenAuth API call. */
	static readonly CompleteResourceTokenAuth: string[] = [
		"bedrock-agentcore:CompleteResourceTokenAuth",
	];
	/** IAM actions required for the CreateABTest API call. */
	static readonly CreateABTest: string[] = [
		"bedrock-agentcore:CreateABTest",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAgentRuntime API call. */
	static readonly CreateAgentRuntime: string[] = [
		"bedrock-agentcore:CreateAgentRuntime",
		"bedrock-agentcore:CreateAgentRuntimeEndpoint",
		"bedrock-agentcore:PassCapacityProvider",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateAgentRuntimeEndpoint API call. */
	static readonly CreateAgentRuntimeEndpoint: string[] = [
		"bedrock-agentcore:CreateAgentRuntimeEndpoint",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateApiKeyCredentialProvider API call. */
	static readonly CreateApiKeyCredentialProvider: string[] = [
		"bedrock-agentcore:CreateApiKeyCredentialProvider",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateBrowser API call. */
	static readonly CreateBrowser: string[] = [
		"bedrock-agentcore:CreateBrowser",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateBrowserProfile API call. */
	static readonly CreateBrowserProfile: string[] = [
		"bedrock-agentcore:CreateBrowserProfile",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CreateCapacityProvider: string[] = [
		"bedrock-agentcore:CreateCapacityProvider",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateCodeInterpreter API call. */
	static readonly CreateCodeInterpreter: string[] = [
		"bedrock-agentcore:CreateCodeInterpreter",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateConfigurationBundle API call. */
	static readonly CreateConfigurationBundle: string[] = [
		"bedrock-agentcore:CreateConfigurationBundle",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"bedrock-agentcore:CreateDataset",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateDatasetVersion API call. */
	static readonly CreateDatasetVersion: string[] = [
		"bedrock-agentcore:CreateDatasetVersion",
	];
	/** IAM actions required for the CreateEvaluator API call. */
	static readonly CreateEvaluator: string[] = [
		"bedrock-agentcore:CreateEvaluator",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateEvent API call. */
	static readonly CreateEvent: string[] = ["bedrock-agentcore:CreateEvent"];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CreateGateway: string[] = [
		"bedrock-agentcore:CreateGateway",
		"iam:PassRole",
		"bedrock-agentcore:SynchronizeGatewayTargets",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateGatewayRateLimit API call. */
	static readonly CreateGatewayRateLimit: string[] = [
		"bedrock-agentcore:CreateGatewayRateLimit",
	];
	/** IAM actions required for the CreateGatewayRule API call. */
	static readonly CreateGatewayRule: string[] = [
		"bedrock-agentcore:CreateGatewayRule",
	];
	/** IAM actions required for the CreateGatewayTarget API call. */
	static readonly CreateGatewayTarget: string[] = [
		"bedrock-agentcore:CreateGatewayTarget",
		"bedrock-agentcore:SynchronizeGatewayTargets",
	];
	/** IAM actions required for the CreateHarness API call. */
	static readonly CreateHarness: string[] = [
		"bedrock-agentcore:CreateAgentRuntime",
		"bedrock-agentcore:CreateHarness",
		"bedrock-agentcore:CreateMemory",
		"bedrock-agentcore:GetMemory",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateHarnessEndpoint API call. */
	static readonly CreateHarnessEndpoint: string[] = [
		"bedrock-agentcore:CreateHarnessEndpoint",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateMemory API call. */
	static readonly CreateMemory: string[] = [
		"bedrock-agentcore:CreateMemory",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateOauth2CredentialProvider API call. */
	static readonly CreateOauth2CredentialProvider: string[] = [
		"bedrock-agentcore:CreateOauth2CredentialProvider",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateOnlineEvaluationConfig API call. */
	static readonly CreateOnlineEvaluationConfig: string[] = [
		"bedrock-agentcore:CreateOnlineEvaluationConfig",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreatePaymentConnector API call. */
	static readonly CreatePaymentConnector: string[] = [
		"bedrock-agentcore:CreatePaymentConnector",
	];
	/** IAM actions required for the CreatePaymentCredentialProvider API call. */
	static readonly CreatePaymentCredentialProvider: string[] = [
		"bedrock-agentcore:CreatePaymentCredentialProvider",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreatePaymentInstrument API call. */
	static readonly CreatePaymentInstrument: string[] = [
		"bedrock-agentcore:CreatePaymentInstrument",
	];
	/** IAM actions required for the CreatePaymentManager API call. */
	static readonly CreatePaymentManager: string[] = [
		"bedrock-agentcore:CreatePaymentManager",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreatePaymentSession API call. */
	static readonly CreatePaymentSession: string[] = [
		"bedrock-agentcore:CreatePaymentSession",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = ["bedrock-agentcore:CreatePolicy"];
	/** IAM actions required for the CreatePolicyEngine API call. */
	static readonly CreatePolicyEngine: string[] = [
		"bedrock-agentcore:CreatePolicyEngine",
	];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CreateRegistry: string[] = [
		"bedrock-agentcore:CreateRegistry",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateRegistryRecord API call. */
	static readonly CreateRegistryRecord: string[] = [
		"bedrock-agentcore:CreateRegistryRecord",
		"iam:PassRole",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the CreateWorkloadIdentity API call. */
	static readonly CreateWorkloadIdentity: string[] = [
		"bedrock-agentcore:CreateWorkloadIdentity",
		"bedrock-agentcore:TagResource",
	];
	/** IAM actions required for the DeleteABTest API call. */
	static readonly DeleteABTest: string[] = ["bedrock-agentcore:DeleteABTest"];
	/** IAM actions required for the DeleteAgentRuntime API call. */
	static readonly DeleteAgentRuntime: string[] = [
		"bedrock-agentcore:DeleteAgentRuntime",
		"bedrock-agentcore:DeleteAgentRuntimeEndpoint",
		"bedrock-agentcore:DeleteWorkloadIdentity",
	];
	/** IAM actions required for the DeleteAgentRuntimeEndpoint API call. */
	static readonly DeleteAgentRuntimeEndpoint: string[] = [
		"bedrock-agentcore:DeleteAgentRuntimeEndpoint",
	];
	/** IAM actions required for the DeleteApiKeyCredentialProvider API call. */
	static readonly DeleteApiKeyCredentialProvider: string[] = [
		"bedrock-agentcore:DeleteApiKeyCredentialProvider",
	];
	/** IAM actions required for the DeleteBatchEvaluation API call. */
	static readonly DeleteBatchEvaluation: string[] = [
		"bedrock-agentcore:DeleteBatchEvaluation",
	];
	/** IAM actions required for the DeleteBrowser API call. */
	static readonly DeleteBrowser: string[] = ["bedrock-agentcore:DeleteBrowser"];
	/** IAM actions required for the DeleteBrowserProfile API call. */
	static readonly DeleteBrowserProfile: string[] = [
		"bedrock-agentcore:DeleteBrowserProfile",
	];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DeleteCapacityProvider: string[] = [
		"bedrock-agentcore:DeleteCapacityProvider",
	];
	/** IAM actions required for the DeleteCapacityProviderSession API call. */
	static readonly DeleteCapacityProviderSession: string[] = [
		"bedrock-agentcore:DeleteCapacityProviderSession",
	];
	/** IAM actions required for the DeleteCodeInterpreter API call. */
	static readonly DeleteCodeInterpreter: string[] = [
		"bedrock-agentcore:DeleteCodeInterpreter",
	];
	/** IAM actions required for the DeleteConfigurationBundle API call. */
	static readonly DeleteConfigurationBundle: string[] = [
		"bedrock-agentcore:DeleteConfigurationBundle",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["bedrock-agentcore:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetExamples API call. */
	static readonly DeleteDatasetExamples: string[] = [
		"bedrock-agentcore:DeleteDatasetExamples",
	];
	/** IAM actions required for the DeleteEvaluator API call. */
	static readonly DeleteEvaluator: string[] = [
		"bedrock-agentcore:DeleteEvaluator",
	];
	/** IAM actions required for the DeleteEvent API call. */
	static readonly DeleteEvent: string[] = ["bedrock-agentcore:DeleteEvent"];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DeleteGateway: string[] = ["bedrock-agentcore:DeleteGateway"];
	/** IAM actions required for the DeleteGatewayRateLimit API call. */
	static readonly DeleteGatewayRateLimit: string[] = [
		"bedrock-agentcore:DeleteGatewayRateLimit",
	];
	/** IAM actions required for the DeleteGatewayRule API call. */
	static readonly DeleteGatewayRule: string[] = [
		"bedrock-agentcore:DeleteGatewayRule",
	];
	/** IAM actions required for the DeleteGatewayTarget API call. */
	static readonly DeleteGatewayTarget: string[] = [
		"bedrock-agentcore:DeleteGatewayTarget",
	];
	/** IAM actions required for the DeleteHarness API call. */
	static readonly DeleteHarness: string[] = [
		"bedrock-agentcore:DeleteAgentRuntime",
		"bedrock-agentcore:DeleteHarness",
	];
	/** IAM actions required for the DeleteHarnessEndpoint API call. */
	static readonly DeleteHarnessEndpoint: string[] = [
		"bedrock-agentcore:DeleteHarnessEndpoint",
	];
	/** IAM actions required for the DeleteMemory API call. */
	static readonly DeleteMemory: string[] = ["bedrock-agentcore:DeleteMemory"];
	/** IAM actions required for the DeleteMemoryRecord API call. */
	static readonly DeleteMemoryRecord: string[] = [
		"bedrock-agentcore:DeleteMemoryRecord",
	];
	/** IAM actions required for the DeleteOauth2CredentialProvider API call. */
	static readonly DeleteOauth2CredentialProvider: string[] = [
		"bedrock-agentcore:DeleteOauth2CredentialProvider",
	];
	/** IAM actions required for the DeleteOnlineEvaluationConfig API call. */
	static readonly DeleteOnlineEvaluationConfig: string[] = [
		"bedrock-agentcore:DeleteOnlineEvaluationConfig",
	];
	/** IAM actions required for the DeletePaymentConnector API call. */
	static readonly DeletePaymentConnector: string[] = [
		"bedrock-agentcore:DeletePaymentConnector",
	];
	/** IAM actions required for the DeletePaymentCredentialProvider API call. */
	static readonly DeletePaymentCredentialProvider: string[] = [
		"bedrock-agentcore:DeletePaymentCredentialProvider",
	];
	/** IAM actions required for the DeletePaymentInstrument API call. */
	static readonly DeletePaymentInstrument: string[] = [
		"bedrock-agentcore:DeletePaymentInstrument",
	];
	/** IAM actions required for the DeletePaymentManager API call. */
	static readonly DeletePaymentManager: string[] = [
		"bedrock-agentcore:DeletePaymentManager",
	];
	/** IAM actions required for the DeletePaymentSession API call. */
	static readonly DeletePaymentSession: string[] = [
		"bedrock-agentcore:DeletePaymentSession",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["bedrock-agentcore:DeletePolicy"];
	/** IAM actions required for the DeletePolicyEngine API call. */
	static readonly DeletePolicyEngine: string[] = [
		"bedrock-agentcore:DeletePolicyEngine",
	];
	/** IAM actions required for the DeleteRecommendation API call. */
	static readonly DeleteRecommendation: string[] = [
		"bedrock-agentcore:DeleteRecommendation",
	];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DeleteRegistry: string[] = [
		"bedrock-agentcore:DeleteRegistry",
	];
	/** IAM actions required for the DeleteRegistryRecord API call. */
	static readonly DeleteRegistryRecord: string[] = [
		"bedrock-agentcore:DeleteRegistryRecord",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"bedrock-agentcore:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteWorkloadIdentity API call. */
	static readonly DeleteWorkloadIdentity: string[] = [
		"bedrock-agentcore:DeleteWorkloadIdentity",
	];
	/** IAM actions required for the Evaluate API call. */
	static readonly Evaluate: string[] = ["bedrock-agentcore:Evaluate"];
	/** IAM actions required for the GetABTest API call. */
	static readonly opGetABTest: string[] = ["bedrock-agentcore:GetABTest"];
	/** IAM actions required for the GetAgentCard API call. */
	static readonly opGetAgentCard: string[] = ["bedrock-agentcore:GetAgentCard"];
	/** IAM actions required for the GetAgentRuntime API call. */
	static readonly opGetAgentRuntime: string[] = [
		"bedrock-agentcore:GetAgentRuntime",
	];
	/** IAM actions required for the GetAgentRuntimeEndpoint API call. */
	static readonly opGetAgentRuntimeEndpoint: string[] = [
		"bedrock-agentcore:GetAgentRuntimeEndpoint",
	];
	/** IAM actions required for the GetApiKeyCredentialProvider API call. */
	static readonly opGetApiKeyCredentialProvider: string[] = [
		"bedrock-agentcore:GetApiKeyCredentialProvider",
	];
	/** IAM actions required for the GetBatchEvaluation API call. */
	static readonly opGetBatchEvaluation: string[] = [
		"bedrock-agentcore:GetBatchEvaluation",
	];
	/** IAM actions required for the GetBrowser API call. */
	static readonly opGetBrowser: string[] = ["bedrock-agentcore:GetBrowser"];
	/** IAM actions required for the GetBrowserProfile API call. */
	static readonly opGetBrowserProfile: string[] = [
		"bedrock-agentcore:GetBrowserProfile",
	];
	/** IAM actions required for the GetBrowserSession API call. */
	static readonly opGetBrowserSession: string[] = [
		"bedrock-agentcore:GetBrowserSession",
	];
	/** IAM actions required for the GetCapacityProvider API call. */
	static readonly opGetCapacityProvider: string[] = [
		"bedrock-agentcore:GetCapacityProvider",
	];
	/** IAM actions required for the GetCodeInterpreter API call. */
	static readonly opGetCodeInterpreter: string[] = [
		"bedrock-agentcore:GetCodeInterpreter",
	];
	/** IAM actions required for the GetCodeInterpreterSession API call. */
	static readonly opGetCodeInterpreterSession: string[] = [
		"bedrock-agentcore:GetCodeInterpreterSession",
	];
	/** IAM actions required for the GetConfigurationBundle API call. */
	static readonly opGetConfigurationBundle: string[] = [
		"bedrock-agentcore:GetConfigurationBundle",
	];
	/** IAM actions required for the GetConfigurationBundleVersion API call. */
	static readonly opGetConfigurationBundleVersion: string[] = [
		"bedrock-agentcore:GetConfigurationBundleVersion",
	];
	/** IAM actions required for the GetDataset API call. */
	static readonly opGetDataset: string[] = ["bedrock-agentcore:GetDataset"];
	/** IAM actions required for the GetEvaluator API call. */
	static readonly opGetEvaluator: string[] = ["bedrock-agentcore:GetEvaluator"];
	/** IAM actions required for the GetEvent API call. */
	static readonly opGetEvent: string[] = ["bedrock-agentcore:GetEvent"];
	/** IAM actions required for the GetGateway API call. */
	static readonly opGetGateway: string[] = ["bedrock-agentcore:GetGateway"];
	/** IAM actions required for the GetGatewayRateLimit API call. */
	static readonly opGetGatewayRateLimit: string[] = [
		"bedrock-agentcore:GetGatewayRateLimit",
	];
	/** IAM actions required for the GetGatewayRule API call. */
	static readonly opGetGatewayRule: string[] = [
		"bedrock-agentcore:GetGatewayRule",
	];
	/** IAM actions required for the GetGatewayTarget API call. */
	static readonly opGetGatewayTarget: string[] = [
		"bedrock-agentcore:GetGatewayTarget",
	];
	/** IAM actions required for the GetHarness API call. */
	static readonly opGetHarness: string[] = ["bedrock-agentcore:GetHarness"];
	/** IAM actions required for the GetHarnessEndpoint API call. */
	static readonly opGetHarnessEndpoint: string[] = [
		"bedrock-agentcore:GetHarnessEndpoint",
	];
	/** IAM actions required for the GetMemory API call. */
	static readonly opGetMemory: string[] = ["bedrock-agentcore:GetMemory"];
	/** IAM actions required for the GetMemoryRecord API call. */
	static readonly opGetMemoryRecord: string[] = [
		"bedrock-agentcore:GetMemoryRecord",
	];
	/** IAM actions required for the GetOauth2CredentialProvider API call. */
	static readonly opGetOauth2CredentialProvider: string[] = [
		"bedrock-agentcore:GetOauth2CredentialProvider",
	];
	/** IAM actions required for the GetOnlineEvaluationConfig API call. */
	static readonly opGetOnlineEvaluationConfig: string[] = [
		"bedrock-agentcore:GetOnlineEvaluationConfig",
	];
	/** IAM actions required for the GetPaymentConnector API call. */
	static readonly opGetPaymentConnector: string[] = [
		"bedrock-agentcore:GetPaymentConnector",
	];
	/** IAM actions required for the GetPaymentCredentialProvider API call. */
	static readonly opGetPaymentCredentialProvider: string[] = [
		"bedrock-agentcore:GetPaymentCredentialProvider",
	];
	/** IAM actions required for the GetPaymentInstrument API call. */
	static readonly opGetPaymentInstrument: string[] = [
		"bedrock-agentcore:GetPaymentInstrument",
	];
	/** IAM actions required for the GetPaymentInstrumentBalance API call. */
	static readonly opGetPaymentInstrumentBalance: string[] = [
		"bedrock-agentcore:GetPaymentInstrumentBalance",
	];
	/** IAM actions required for the GetPaymentManager API call. */
	static readonly opGetPaymentManager: string[] = [
		"bedrock-agentcore:GetPaymentManager",
	];
	/** IAM actions required for the GetPaymentSession API call. */
	static readonly opGetPaymentSession: string[] = [
		"bedrock-agentcore:GetPaymentSession",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["bedrock-agentcore:GetPolicy"];
	/** IAM actions required for the GetPolicyEngine API call. */
	static readonly opGetPolicyEngine: string[] = [
		"bedrock-agentcore:GetPolicyEngine",
	];
	/** IAM actions required for the GetPolicyEngineSummary API call. */
	static readonly opGetPolicyEngineSummary: string[] = [
		"bedrock-agentcore:GetPolicyEngineSummary",
	];
	/** IAM actions required for the GetPolicyGeneration API call. */
	static readonly opGetPolicyGeneration: string[] = [
		"bedrock-agentcore:GetPolicyGeneration",
	];
	/** IAM actions required for the GetPolicyGenerationSummary API call. */
	static readonly opGetPolicyGenerationSummary: string[] = [
		"bedrock-agentcore:GetPolicyGenerationSummary",
	];
	/** IAM actions required for the GetPolicySummary API call. */
	static readonly opGetPolicySummary: string[] = [
		"bedrock-agentcore:GetPolicySummary",
	];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly opGetRecommendation: string[] = [
		"bedrock-agentcore:GetRecommendation",
	];
	/** IAM actions required for the GetRegistry API call. */
	static readonly opGetRegistry: string[] = ["bedrock-agentcore:GetRegistry"];
	/** IAM actions required for the GetRegistryRecord API call. */
	static readonly opGetRegistryRecord: string[] = [
		"bedrock-agentcore:GetRegistryRecord",
	];
	/** IAM actions required for the GetResourceApiKey API call. */
	static readonly opGetResourceApiKey: string[] = [
		"bedrock-agentcore:GetResourceApiKey",
	];
	/** IAM actions required for the GetResourceOauth2Token API call. */
	static readonly opGetResourceOauth2Token: string[] = [
		"bedrock-agentcore:GetResourceOauth2Token",
	];
	/** IAM actions required for the GetResourcePaymentToken API call. */
	static readonly opGetResourcePaymentToken: string[] = [
		"bedrock-agentcore:GetResourcePaymentToken",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"bedrock-agentcore:GetResourcePolicy",
	];
	/** IAM actions required for the GetTokenVault API call. */
	static readonly opGetTokenVault: string[] = [
		"bedrock-agentcore:GetTokenVault",
	];
	/** IAM actions required for the GetWorkloadAccessToken API call. */
	static readonly opGetWorkloadAccessToken: string[] = [
		"bedrock-agentcore:GetWorkloadAccessToken",
	];
	/** IAM actions required for the GetWorkloadAccessTokenForJWT API call. */
	static readonly opGetWorkloadAccessTokenForJWT: string[] = [
		"bedrock-agentcore:GetWorkloadAccessTokenForJWT",
	];
	/** IAM actions required for the GetWorkloadAccessTokenForUserId API call. */
	static readonly opGetWorkloadAccessTokenForUserId: string[] = [
		"bedrock-agentcore:GetWorkloadAccessTokenForUserId",
	];
	/** IAM actions required for the GetWorkloadIdentity API call. */
	static readonly opGetWorkloadIdentity: string[] = [
		"bedrock-agentcore:GetWorkloadIdentity",
	];
	/** IAM actions required for the InvokeAgentRuntime API call. */
	static readonly InvokeAgentRuntime: string[] = [
		"bedrock-agentcore:InvokeAgentRuntime",
		"bedrock-agentcore:InvokeAgentRuntimeForUser",
	];
	/** IAM actions required for the InvokeAgentRuntimeCommand API call. */
	static readonly InvokeAgentRuntimeCommand: string[] = [
		"bedrock-agentcore:InvokeAgentRuntimeCommand",
	];
	/** IAM actions required for the InvokeBrowser API call. */
	static readonly InvokeBrowser: string[] = [];
	/** IAM actions required for the InvokeCodeInterpreter API call. */
	static readonly InvokeCodeInterpreter: string[] = [
		"bedrock-agentcore:InvokeCodeInterpreter",
		"bedrock-agentcore:StartCodeInterpreterSession",
	];
	/** IAM actions required for the InvokeHarness API call. */
	static readonly InvokeHarness: string[] = [
		"bedrock-agentcore:InvokeAgentRuntime",
		"bedrock-agentcore:InvokeHarness",
	];
	/** IAM actions required for the ListABTests API call. */
	static readonly ListABTests: string[] = ["bedrock-agentcore:ListABTests"];
	/** IAM actions required for the ListActors API call. */
	static readonly ListActors: string[] = ["bedrock-agentcore:ListActors"];
	/** IAM actions required for the ListAgentRuntimeEndpoints API call. */
	static readonly ListAgentRuntimeEndpoints: string[] = [
		"bedrock-agentcore:ListAgentRuntimeEndpoints",
	];
	/** IAM actions required for the ListAgentRuntimeVersions API call. */
	static readonly ListAgentRuntimeVersions: string[] = [
		"bedrock-agentcore:ListAgentRuntimeVersions",
	];
	/** IAM actions required for the ListAgentRuntimeVersionsByCapacityProvider API call. */
	static readonly ListAgentRuntimeVersionsByCapacityProvider: string[] = [
		"bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider",
	];
	/** IAM actions required for the ListAgentRuntimes API call. */
	static readonly ListAgentRuntimes: string[] = [
		"bedrock-agentcore:ListAgentRuntimes",
	];
	/** IAM actions required for the ListApiKeyCredentialProviders API call. */
	static readonly ListApiKeyCredentialProviders: string[] = [
		"bedrock-agentcore:ListApiKeyCredentialProviders",
	];
	/** IAM actions required for the ListBatchEvaluations API call. */
	static readonly ListBatchEvaluations: string[] = [
		"bedrock-agentcore:ListBatchEvaluations",
	];
	/** IAM actions required for the ListBrowserProfiles API call. */
	static readonly ListBrowserProfiles: string[] = [
		"bedrock-agentcore:ListBrowserProfiles",
	];
	/** IAM actions required for the ListBrowserSessions API call. */
	static readonly ListBrowserSessions: string[] = [
		"bedrock-agentcore:ListBrowserSessions",
	];
	/** IAM actions required for the ListBrowsers API call. */
	static readonly ListBrowsers: string[] = ["bedrock-agentcore:ListBrowsers"];
	/** IAM actions required for the ListCapacityProviders API call. */
	static readonly ListCapacityProviders: string[] = [
		"bedrock-agentcore:ListCapacityProviders",
	];
	/** IAM actions required for the ListCodeInterpreterSessions API call. */
	static readonly ListCodeInterpreterSessions: string[] = [
		"bedrock-agentcore:ListCodeInterpreterSessions",
	];
	/** IAM actions required for the ListCodeInterpreters API call. */
	static readonly ListCodeInterpreters: string[] = [
		"bedrock-agentcore:ListCodeInterpreters",
	];
	/** IAM actions required for the ListConfigurationBundleVersions API call. */
	static readonly ListConfigurationBundleVersions: string[] = [
		"bedrock-agentcore:ListConfigurationBundleVersions",
	];
	/** IAM actions required for the ListConfigurationBundles API call. */
	static readonly ListConfigurationBundles: string[] = [
		"bedrock-agentcore:ListConfigurationBundles",
	];
	/** IAM actions required for the ListDatasetExamples API call. */
	static readonly ListDatasetExamples: string[] = [
		"bedrock-agentcore:ListDatasetExamples",
	];
	/** IAM actions required for the ListDatasetVersions API call. */
	static readonly ListDatasetVersions: string[] = [
		"bedrock-agentcore:ListDatasetVersions",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["bedrock-agentcore:ListDatasets"];
	/** IAM actions required for the ListEvaluators API call. */
	static readonly ListEvaluators: string[] = [
		"bedrock-agentcore:ListEvaluators",
	];
	/** IAM actions required for the ListEvents API call. */
	static readonly ListEvents: string[] = ["bedrock-agentcore:ListEvents"];
	/** IAM actions required for the ListGatewayRateLimits API call. */
	static readonly ListGatewayRateLimits: string[] = [
		"bedrock-agentcore:ListGatewayRateLimits",
	];
	/** IAM actions required for the ListGatewayRules API call. */
	static readonly ListGatewayRules: string[] = [
		"bedrock-agentcore:ListGatewayRules",
	];
	/** IAM actions required for the ListGatewayTargets API call. */
	static readonly ListGatewayTargets: string[] = [
		"bedrock-agentcore:ListGatewayTargets",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly ListGateways: string[] = ["bedrock-agentcore:ListGateways"];
	/** IAM actions required for the ListHarnessEndpoints API call. */
	static readonly ListHarnessEndpoints: string[] = [
		"bedrock-agentcore:ListHarnessEndpoints",
	];
	/** IAM actions required for the ListHarnessVersions API call. */
	static readonly ListHarnessVersions: string[] = [
		"bedrock-agentcore:ListHarnessVersions",
	];
	/** IAM actions required for the ListHarnesses API call. */
	static readonly ListHarnesses: string[] = ["bedrock-agentcore:ListHarnesses"];
	/** IAM actions required for the ListMemories API call. */
	static readonly ListMemories: string[] = ["bedrock-agentcore:ListMemories"];
	/** IAM actions required for the ListMemoryExtractionJobs API call. */
	static readonly ListMemoryExtractionJobs: string[] = [
		"bedrock-agentcore:ListMemoryExtractionJobs",
	];
	/** IAM actions required for the ListMemoryRecords API call. */
	static readonly ListMemoryRecords: string[] = [
		"bedrock-agentcore:ListMemoryRecords",
	];
	/** IAM actions required for the ListOauth2CredentialProviders API call. */
	static readonly ListOauth2CredentialProviders: string[] = [
		"bedrock-agentcore:ListOauth2CredentialProviders",
	];
	/** IAM actions required for the ListOnlineEvaluationConfigs API call. */
	static readonly ListOnlineEvaluationConfigs: string[] = [
		"bedrock-agentcore:ListOnlineEvaluationConfigs",
	];
	/** IAM actions required for the ListPaymentConnectors API call. */
	static readonly ListPaymentConnectors: string[] = [
		"bedrock-agentcore:ListPaymentConnectors",
	];
	/** IAM actions required for the ListPaymentCredentialProviders API call. */
	static readonly ListPaymentCredentialProviders: string[] = [
		"bedrock-agentcore:ListPaymentCredentialProviders",
	];
	/** IAM actions required for the ListPaymentInstruments API call. */
	static readonly ListPaymentInstruments: string[] = [
		"bedrock-agentcore:ListPaymentInstruments",
	];
	/** IAM actions required for the ListPaymentManagers API call. */
	static readonly ListPaymentManagers: string[] = [
		"bedrock-agentcore:ListPaymentManagers",
	];
	/** IAM actions required for the ListPaymentSessions API call. */
	static readonly ListPaymentSessions: string[] = [
		"bedrock-agentcore:ListPaymentSessions",
	];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["bedrock-agentcore:ListPolicies"];
	/** IAM actions required for the ListPolicyEngineSummaries API call. */
	static readonly ListPolicyEngineSummaries: string[] = [
		"bedrock-agentcore:ListPolicyEngineSummaries",
	];
	/** IAM actions required for the ListPolicyEngines API call. */
	static readonly ListPolicyEngines: string[] = [
		"bedrock-agentcore:ListPolicyEngines",
	];
	/** IAM actions required for the ListPolicyGenerationAssets API call. */
	static readonly ListPolicyGenerationAssets: string[] = [
		"bedrock-agentcore:ListPolicyGenerationAssets",
	];
	/** IAM actions required for the ListPolicyGenerationSummaries API call. */
	static readonly ListPolicyGenerationSummaries: string[] = [
		"bedrock-agentcore:ListPolicyGenerationSummaries",
	];
	/** IAM actions required for the ListPolicyGenerations API call. */
	static readonly ListPolicyGenerations: string[] = [
		"bedrock-agentcore:ListPolicyGenerations",
	];
	/** IAM actions required for the ListPolicySummaries API call. */
	static readonly ListPolicySummaries: string[] = [
		"bedrock-agentcore:ListPolicySummaries",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"bedrock-agentcore:ListRecommendations",
	];
	/** IAM actions required for the ListRegistries API call. */
	static readonly ListRegistries: string[] = [
		"bedrock-agentcore:ListRegistries",
	];
	/** IAM actions required for the ListRegistryRecords API call. */
	static readonly ListRegistryRecords: string[] = [
		"bedrock-agentcore:ListRegistryRecords",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["bedrock-agentcore:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"bedrock-agentcore:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkloadIdentities API call. */
	static readonly ListWorkloadIdentities: string[] = [
		"bedrock-agentcore:ListWorkloadIdentities",
	];
	/** IAM actions required for the ProcessPayment API call. */
	static readonly ProcessPayment: string[] = [
		"bedrock-agentcore:ProcessPayment",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"bedrock-agentcore:PutResourcePolicy",
	];
	/** IAM actions required for the RetrieveMemoryRecords API call. */
	static readonly RetrieveMemoryRecords: string[] = [
		"bedrock-agentcore:RetrieveMemoryRecords",
	];
	/** IAM actions required for the SaveBrowserSessionProfile API call. */
	static readonly SaveBrowserSessionProfile: string[] = [
		"bedrock-agentcore:SaveBrowserSessionProfile",
	];
	/** IAM actions required for the SearchRegistryRecords API call. */
	static readonly SearchRegistryRecords: string[] = [
		"bedrock-agentcore:SearchRegistryRecords",
	];
	/** IAM actions required for the SetTokenVaultCMK API call. */
	static readonly opSetTokenVaultCMK: string[] = [
		"bedrock-agentcore:SetTokenVaultCMK",
	];
	/** IAM actions required for the StartBatchEvaluation API call. */
	static readonly StartBatchEvaluation: string[] = [
		"bedrock-agentcore:StartBatchEvaluation",
	];
	/** IAM actions required for the StartBrowserSession API call. */
	static readonly StartBrowserSession: string[] = [
		"bedrock-agentcore:StartBrowserSession",
	];
	/** IAM actions required for the StartCodeInterpreterSession API call. */
	static readonly StartCodeInterpreterSession: string[] = [
		"bedrock-agentcore:StartCodeInterpreterSession",
	];
	/** IAM actions required for the StartMemoryExtractionJob API call. */
	static readonly StartMemoryExtractionJob: string[] = [
		"bedrock-agentcore:StartMemoryExtractionJob",
	];
	/** IAM actions required for the StartPolicyGeneration API call. */
	static readonly StartPolicyGeneration: string[] = [
		"bedrock-agentcore:StartPolicyGeneration",
	];
	/** IAM actions required for the StartRecommendation API call. */
	static readonly StartRecommendation: string[] = [
		"bedrock-agentcore:StartRecommendation",
	];
	/** IAM actions required for the StopBatchEvaluation API call. */
	static readonly StopBatchEvaluation: string[] = [
		"bedrock-agentcore:StopBatchEvaluation",
	];
	/** IAM actions required for the StopBrowserSession API call. */
	static readonly StopBrowserSession: string[] = [
		"bedrock-agentcore:StopBrowserSession",
	];
	/** IAM actions required for the StopCodeInterpreterSession API call. */
	static readonly StopCodeInterpreterSession: string[] = [
		"bedrock-agentcore:StopCodeInterpreterSession",
	];
	/** IAM actions required for the StopRuntimeSession API call. */
	static readonly StopRuntimeSession: string[] = [
		"bedrock-agentcore:StopRuntimeSession",
	];
	/** IAM actions required for the SubmitRegistryRecordForApproval API call. */
	static readonly SubmitRegistryRecordForApproval: string[] = [
		"bedrock-agentcore:SubmitRegistryRecordForApproval",
	];
	/** IAM actions required for the SynchronizeGatewayTargets API call. */
	static readonly SynchronizeGatewayTargets: string[] = [
		"bedrock-agentcore:SynchronizeGatewayTargets",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["bedrock-agentcore:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["bedrock-agentcore:UntagResource"];
	/** IAM actions required for the UpdateABTest API call. */
	static readonly UpdateABTest: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdateABTest",
	];
	/** IAM actions required for the UpdateAgentRuntime API call. */
	static readonly UpdateAgentRuntime: string[] = [
		"bedrock-agentcore:PassCapacityProvider",
		"iam:PassRole",
		"bedrock-agentcore:UpdateAgentRuntime",
	];
	/** IAM actions required for the UpdateAgentRuntimeEndpoint API call. */
	static readonly UpdateAgentRuntimeEndpoint: string[] = [
		"bedrock-agentcore:UpdateAgentRuntimeEndpoint",
	];
	/** IAM actions required for the UpdateApiKeyCredentialProvider API call. */
	static readonly UpdateApiKeyCredentialProvider: string[] = [
		"bedrock-agentcore:UpdateApiKeyCredentialProvider",
	];
	/** IAM actions required for the UpdateBrowserStream API call. */
	static readonly UpdateBrowserStream: string[] = [
		"bedrock-agentcore:UpdateBrowserStream",
	];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UpdateCapacityProvider: string[] = [
		"bedrock-agentcore:UpdateCapacityProvider",
	];
	/** IAM actions required for the UpdateConfigurationBundle API call. */
	static readonly UpdateConfigurationBundle: string[] = [
		"bedrock-agentcore:UpdateConfigurationBundle",
	];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UpdateDataset: string[] = ["bedrock-agentcore:UpdateDataset"];
	/** IAM actions required for the UpdateDatasetExamples API call. */
	static readonly UpdateDatasetExamples: string[] = [
		"bedrock-agentcore:UpdateDatasetExamples",
	];
	/** IAM actions required for the UpdateEvaluator API call. */
	static readonly UpdateEvaluator: string[] = [
		"bedrock-agentcore:UpdateEvaluator",
	];
	/** IAM actions required for the UpdateGateway API call. */
	static readonly UpdateGateway: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdateGateway",
	];
	/** IAM actions required for the UpdateGatewayRateLimit API call. */
	static readonly UpdateGatewayRateLimit: string[] = [
		"bedrock-agentcore:UpdateGatewayRateLimit",
	];
	/** IAM actions required for the UpdateGatewayRule API call. */
	static readonly UpdateGatewayRule: string[] = [
		"bedrock-agentcore:UpdateGatewayRule",
	];
	/** IAM actions required for the UpdateGatewayTarget API call. */
	static readonly UpdateGatewayTarget: string[] = [
		"bedrock-agentcore:SynchronizeGatewayTargets",
		"bedrock-agentcore:UpdateGatewayTarget",
	];
	/** IAM actions required for the UpdateHarness API call. */
	static readonly UpdateHarness: string[] = [
		"bedrock-agentcore:GetMemory",
		"iam:PassRole",
		"bedrock-agentcore:UpdateAgentRuntime",
		"bedrock-agentcore:UpdateHarness",
		"bedrock-agentcore:UpdateMemory",
	];
	/** IAM actions required for the UpdateHarnessEndpoint API call. */
	static readonly UpdateHarnessEndpoint: string[] = [
		"bedrock-agentcore:UpdateHarnessEndpoint",
	];
	/** IAM actions required for the UpdateMemory API call. */
	static readonly UpdateMemory: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdateMemory",
	];
	/** IAM actions required for the UpdateOauth2CredentialProvider API call. */
	static readonly UpdateOauth2CredentialProvider: string[] = [
		"bedrock-agentcore:UpdateOauth2CredentialProvider",
	];
	/** IAM actions required for the UpdateOnlineEvaluationConfig API call. */
	static readonly UpdateOnlineEvaluationConfig: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdateOnlineEvaluationConfig",
	];
	/** IAM actions required for the UpdatePaymentConnector API call. */
	static readonly UpdatePaymentConnector: string[] = [
		"bedrock-agentcore:UpdatePaymentConnector",
	];
	/** IAM actions required for the UpdatePaymentCredentialProvider API call. */
	static readonly UpdatePaymentCredentialProvider: string[] = [
		"bedrock-agentcore:UpdatePaymentCredentialProvider",
	];
	/** IAM actions required for the UpdatePaymentManager API call. */
	static readonly UpdatePaymentManager: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdatePaymentManager",
	];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UpdatePolicy: string[] = ["bedrock-agentcore:UpdatePolicy"];
	/** IAM actions required for the UpdatePolicyEngine API call. */
	static readonly UpdatePolicyEngine: string[] = [
		"bedrock-agentcore:UpdatePolicyEngine",
	];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UpdateRegistry: string[] = [
		"bedrock-agentcore:UpdateRegistry",
	];
	/** IAM actions required for the UpdateRegistryRecord API call. */
	static readonly UpdateRegistryRecord: string[] = [
		"iam:PassRole",
		"bedrock-agentcore:UpdateRegistryRecord",
	];
	/** IAM actions required for the UpdateRegistryRecordStatus API call. */
	static readonly UpdateRegistryRecordStatus: string[] = [
		"bedrock-agentcore:UpdateRegistryRecordStatus",
	];
	/** IAM actions required for the UpdateWorkloadIdentity API call. */
	static readonly UpdateWorkloadIdentity: string[] = [
		"bedrock-agentcore:UpdateWorkloadIdentity",
	];
}

/**
 * Condition key constants and builders for bedrock-agentcore.
 */
export class BedrockAgentcoreConditions {
	/** Condition keys applicable to the BatchCreateMemoryRecords action. */
	static readonly BatchCreateMemoryRecordsConditionKeys: string[] = [
		"bedrock-agentcore:namespace",
	];
	/** Condition keys applicable to the BatchUpdateMemoryRecords action. */
	static readonly BatchUpdateMemoryRecordsConditionKeys: string[] = [
		"bedrock-agentcore:namespace",
	];
	/** Condition keys applicable to the CompleteResourceTokenAuth action. */
	static readonly CompleteResourceTokenAuthConditionKeys: string[] = [
		"bedrock-agentcore:InboundJwtClaim/aud",
		"bedrock-agentcore:InboundJwtClaim/client_id",
		"bedrock-agentcore:InboundJwtClaim/iss",
		"bedrock-agentcore:InboundJwtClaim/scope",
		"bedrock-agentcore:InboundJwtClaim/sub",
		"bedrock-agentcore:userid",
	];
	/** Condition keys applicable to the CreateAgentRuntime action. */
	static readonly CreateAgentRuntimeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-agentcore:RuntimeAuthorizerType",
		"bedrock-agentcore:securityGroups",
		"bedrock-agentcore:subnets",
	];
	/** Condition keys applicable to the CreateAgentRuntimeEndpoint action. */
	static readonly CreateAgentRuntimeEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApiKeyCredentialProvider action. */
	static readonly CreateApiKeyCredentialProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBrowser action. */
	static readonly CreateBrowserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-agentcore:securityGroups",
		"bedrock-agentcore:subnets",
	];
	/** Condition keys applicable to the CreateBrowserProfile action. */
	static readonly CreateBrowserProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CreateCapacityProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeInterpreter action. */
	static readonly CreateCodeInterpreterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-agentcore:securityGroups",
		"bedrock-agentcore:subnets",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEvaluator action. */
	static readonly CreateEvaluatorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEvent action. */
	static readonly CreateEventConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
		"bedrock-agentcore:sessionId",
	];
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CreateGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHarness action. */
	static readonly CreateHarnessConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHarnessEndpoint action. */
	static readonly CreateHarnessEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMemory action. */
	static readonly CreateMemoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-agentcore:KmsKeyArn",
	];
	/** Condition keys applicable to the CreateOauth2CredentialProvider action. */
	static readonly CreateOauth2CredentialProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOnlineEvaluationConfig action. */
	static readonly CreateOnlineEvaluationConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePaymentCredentialProvider action. */
	static readonly CreatePaymentCredentialProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePaymentManager action. */
	static readonly CreatePaymentManagerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-agentcore:DiscoveryUrl",
	];
	/** Condition keys applicable to the CreatePolicyEngine action. */
	static readonly CreatePolicyEngineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkloadIdentity action. */
	static readonly CreateWorkloadIdentityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEvent action. */
	static readonly DeleteEventConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
		"bedrock-agentcore:sessionId",
	];
	/** Condition keys applicable to the GetEvent action. */
	static readonly actionGetEventConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
		"bedrock-agentcore:sessionId",
	];
	/** Condition keys applicable to the GetWorkloadAccessTokenForJWT action. */
	static readonly actionGetWorkloadAccessTokenForJWTConditionKeys: string[] = [
		"bedrock-agentcore:InboundJwtClaim/aud",
		"bedrock-agentcore:InboundJwtClaim/client_id",
		"bedrock-agentcore:InboundJwtClaim/iss",
		"bedrock-agentcore:InboundJwtClaim/scope",
		"bedrock-agentcore:InboundJwtClaim/sub",
	];
	/** Condition keys applicable to the GetWorkloadAccessTokenForUserId action. */
	static readonly actionGetWorkloadAccessTokenForUserIdConditionKeys: string[] =
		["bedrock-agentcore:userid"];
	/** Condition keys applicable to the ListEvents action. */
	static readonly ListEventsConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
		"bedrock-agentcore:sessionId",
	];
	/** Condition keys applicable to the ListMemoryRecords action. */
	static readonly ListMemoryRecordsConditionKeys: string[] = [
		"bedrock-agentcore:namespace",
		"bedrock-agentcore:strategyId",
	];
	/** Condition keys applicable to the ListSessions action. */
	static readonly ListSessionsConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
	];
	/** Condition keys applicable to the PutSystemLogEvents action. */
	static readonly PutSystemLogEventsConditionKeys: string[] = [
		"bedrock-agentcore:runtimeSessionId",
	];
	/** Condition keys applicable to the RetrieveMemoryRecords action. */
	static readonly RetrieveMemoryRecordsConditionKeys: string[] = [
		"bedrock-agentcore:namespace",
		"bedrock-agentcore:strategyId",
	];
	/** Condition keys applicable to the StartMemoryExtractionJob action. */
	static readonly StartMemoryExtractionJobConditionKeys: string[] = [
		"bedrock-agentcore:actorId",
		"bedrock-agentcore:sessionId",
		"bedrock-agentcore:strategyId",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentRuntime action. */
	static readonly UpdateAgentRuntimeConditionKeys: string[] = [
		"bedrock-agentcore:RuntimeAuthorizerType",
		"bedrock-agentcore:securityGroups",
		"bedrock-agentcore:subnets",
	];
	/** Condition keys applicable to the UpdatePaymentManager action. */
	static readonly UpdatePaymentManagerConditionKeys: string[] = [
		"bedrock-agentcore:DiscoveryUrl",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: bedrock-agentcore:AllowedQueryParameters (ArrayOfString) */
	static readonly ALLOWED_QUERY_PARAMETERS =
		"bedrock-agentcore:AllowedQueryParameters";
	/** Condition key: bedrock-agentcore:AllowedRequestHeaders (ArrayOfString) */
	static readonly ALLOWED_REQUEST_HEADERS =
		"bedrock-agentcore:AllowedRequestHeaders";
	/** Condition key: bedrock-agentcore:AllowedResponseHeaders (ArrayOfString) */
	static readonly ALLOWED_RESPONSE_HEADERS =
		"bedrock-agentcore:AllowedResponseHeaders";
	/** Condition key: bedrock-agentcore:CredentialProviderScope (ArrayOfString) */
	static readonly CREDENTIAL_PROVIDER_SCOPE =
		"bedrock-agentcore:CredentialProviderScope";
	/** Condition key: bedrock-agentcore:CredentialProviderType (String) */
	static readonly CREDENTIAL_PROVIDER_TYPE =
		"bedrock-agentcore:CredentialProviderType";
	/** Condition key: bedrock-agentcore:DiscoveryUrl (String) */
	static readonly DISCOVERY_URL = "bedrock-agentcore:DiscoveryUrl";
	/** Condition key: bedrock-agentcore:GatewayAuthorizerType (String) */
	static readonly GATEWAY_AUTHORIZER_TYPE =
		"bedrock-agentcore:GatewayAuthorizerType";
	/** Condition key: bedrock-agentcore:HttpTargetConfigurationType (String) */
	static readonly HTTP_TARGET_CONFIGURATION_TYPE =
		"bedrock-agentcore:HttpTargetConfigurationType";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/aud (ArrayOfString) */
	static readonly INBOUND_JWT_CLAIM_AUD =
		"bedrock-agentcore:InboundJwtClaim/aud";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/client_id (String) */
	static readonly INBOUND_JWT_CLAIM_CLIENT_ID =
		"bedrock-agentcore:InboundJwtClaim/client_id";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/iss (String) */
	static readonly INBOUND_JWT_CLAIM_ISS =
		"bedrock-agentcore:InboundJwtClaim/iss";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/scope (ArrayOfString) */
	static readonly INBOUND_JWT_CLAIM_SCOPE =
		"bedrock-agentcore:InboundJwtClaim/scope";
	/** Condition key: bedrock-agentcore:InboundJwtClaim/sub (String) */
	static readonly INBOUND_JWT_CLAIM_SUB =
		"bedrock-agentcore:InboundJwtClaim/sub";
	/** Condition key: bedrock-agentcore:InferenceTargetConfigurationType (String) */
	static readonly INFERENCE_TARGET_CONFIGURATION_TYPE =
		"bedrock-agentcore:InferenceTargetConfigurationType";
	/** Condition key: bedrock-agentcore:KmsKeyArn (String) */
	static readonly KMS_KEY_ARN = "bedrock-agentcore:KmsKeyArn";
	/** Condition key: bedrock-agentcore:McpTargetConfigurationType (String) */
	static readonly MCP_TARGET_CONFIGURATION_TYPE =
		"bedrock-agentcore:McpTargetConfigurationType";
	/** Condition key: bedrock-agentcore:PolicyEngineArn (String) */
	static readonly POLICY_ENGINE_ARN = "bedrock-agentcore:PolicyEngineArn";
	/** Condition key: bedrock-agentcore:PolicyEngineMode (String) */
	static readonly POLICY_ENGINE_MODE = "bedrock-agentcore:PolicyEngineMode";
	/** Condition key: bedrock-agentcore:PrivateEndpointType (String) */
	static readonly PRIVATE_ENDPOINT_TYPE =
		"bedrock-agentcore:PrivateEndpointType";
	/** Condition key: bedrock-agentcore:ProtocolType (String) */
	static readonly PROTOCOL_TYPE = "bedrock-agentcore:ProtocolType";
	/** Condition key: bedrock-agentcore:ResourceConfigurationIdentifier (String) */
	static readonly RESOURCE_CONFIGURATION_IDENTIFIER =
		"bedrock-agentcore:ResourceConfigurationIdentifier";
	/** Condition key: bedrock-agentcore:RuntimeAuthorizerType (String) */
	static readonly RUNTIME_AUTHORIZER_TYPE =
		"bedrock-agentcore:RuntimeAuthorizerType";
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
	 * Generates a condition block for `bedrock-agentcore:AllowedQueryParameters`.
	 */
	static allowedQueryParameters(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:AllowedQueryParameters": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:AllowedRequestHeaders`.
	 */
	static allowedRequestHeaders(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:AllowedRequestHeaders": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:AllowedResponseHeaders`.
	 */
	static allowedResponseHeaders(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:AllowedResponseHeaders": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:CredentialProviderScope`.
	 */
	static credentialProviderScope(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:CredentialProviderScope": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:CredentialProviderType`.
	 */
	static credentialProviderType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:CredentialProviderType": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:DiscoveryUrl`.
	 */
	static discoveryURL(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:DiscoveryUrl": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:GatewayAuthorizerType`.
	 */
	static gatewayAuthorizerType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:GatewayAuthorizerType": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:HttpTargetConfigurationType`.
	 */
	static httpTargetConfigurationType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:HttpTargetConfigurationType": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/aud`.
	 */
	static inboundJwtClaimAud(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:InboundJwtClaim/aud": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/client_id`.
	 */
	static inboundJwtClaimClientId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:InboundJwtClaim/client_id": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/iss`.
	 */
	static inboundJwtClaimIss(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:InboundJwtClaim/iss": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/scope`.
	 */
	static inboundJwtClaimScope(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:InboundJwtClaim/scope": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InboundJwtClaim/sub`.
	 */
	static inboundJwtClaimSub(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:InboundJwtClaim/sub": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:InferenceTargetConfigurationType`.
	 */
	static inferenceTargetConfigurationType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"bedrock-agentcore:InferenceTargetConfigurationType": value,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:KmsKeyArn`.
	 */
	static kmsKeyARN(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:KmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:McpTargetConfigurationType`.
	 */
	static mcpTargetConfigurationType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:McpTargetConfigurationType": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PolicyEngineArn`.
	 */
	static policyEngineARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:PolicyEngineArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PolicyEngineMode`.
	 */
	static policyEngineMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:PolicyEngineMode": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:PrivateEndpointType`.
	 */
	static privateEndpointType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:PrivateEndpointType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:ProtocolType`.
	 */
	static protocolType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:ProtocolType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:ResourceConfigurationIdentifier`.
	 */
	static resourceConfigurationIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"bedrock-agentcore:ResourceConfigurationIdentifier": value,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:RuntimeAuthorizerType`.
	 */
	static runtimeAuthorizerType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "bedrock-agentcore:RuntimeAuthorizerType": value },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:actorId`.
	 */
	static actorId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:actorId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:namespace": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:runtimeSessionId`.
	 */
	static runtimeSessionId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:runtimeSessionId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:securityGroups`.
	 */
	static securityGroups(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"bedrock-agentcore:securityGroups": values,
			},
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:sessionId`.
	 */
	static sessionId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:sessionId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:strategyId`.
	 */
	static strategyId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:strategyId": value } };
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:subnets`.
	 */
	static subnets(values: string[]): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "bedrock-agentcore:subnets": values },
		};
	}

	/**
	 * Generates a condition block for `bedrock-agentcore:userid`.
	 */
	static userid(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-agentcore:userid": value } };
	}
}
