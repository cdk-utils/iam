// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bedrock.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bedrock service.
 */
export class BedrockActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bedrock";

	/** [Read] bedrock:AgenticRetrieveStream */
	static readonly AGENTIC_RETRIEVE_STREAM = "bedrock:AgenticRetrieveStream";
	/** [PermissionManagement] bedrock:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"bedrock:AllowVendedLogDeliveryForResource";
	/** [Read] bedrock:ApplyGuardrail */
	static readonly APPLY_GUARDRAIL = "bedrock:ApplyGuardrail";
	/** [Write] bedrock:AssociateAgentCollaborator */
	static readonly ASSOCIATE_AGENT_COLLABORATOR =
		"bedrock:AssociateAgentCollaborator";
	/** [Write] bedrock:AssociateAgentKnowledgeBase */
	static readonly ASSOCIATE_AGENT_KNOWLEDGE_BASE =
		"bedrock:AssociateAgentKnowledgeBase";
	/** [Write] bedrock:AssociateThirdPartyKnowledgeBase */
	static readonly ASSOCIATE_THIRD_PARTY_KNOWLEDGE_BASE =
		"bedrock:AssociateThirdPartyKnowledgeBase";
	/** [Write] bedrock:BatchDeleteAdvancedPromptOptimizationJob */
	static readonly BATCH_DELETE_ADVANCED_PROMPT_OPTIMIZATION_JOB =
		"bedrock:BatchDeleteAdvancedPromptOptimizationJob";
	/** [Write] bedrock:BatchDeleteEvaluationJob */
	static readonly BATCH_DELETE_EVALUATION_JOB =
		"bedrock:BatchDeleteEvaluationJob";
	/** [Read] bedrock:CallWithBearerToken */
	static readonly CALL_WITH_BEARER_TOKEN = "bedrock:CallWithBearerToken";
	/** [Write] bedrock:CancelAutomatedReasoningPolicyBuildWorkflow */
	static readonly CANCEL_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW =
		"bedrock:CancelAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:CopyBlueprintStage */
	static readonly COPY_BLUEPRINT_STAGE = "bedrock:CopyBlueprintStage";
	/** [Read] bedrock:CountTokens */
	static readonly COUNT_TOKENS = "bedrock:CountTokens";
	/** [Write] bedrock:CreateAdvancedPromptOptimizationJob */
	static readonly CREATE_ADVANCED_PROMPT_OPTIMIZATION_JOB =
		"bedrock:CreateAdvancedPromptOptimizationJob";
	/** [Write] bedrock:CreateAgent */
	static readonly CREATE_AGENT = "bedrock:CreateAgent";
	/** [Write] bedrock:CreateAgentActionGroup */
	static readonly CREATE_AGENT_ACTION_GROUP = "bedrock:CreateAgentActionGroup";
	/** [Write] bedrock:CreateAgentAlias */
	static readonly CREATE_AGENT_ALIAS = "bedrock:CreateAgentAlias";
	/** [Write] bedrock:CreateAutomatedReasoningPolicy */
	static readonly CREATE_AUTOMATED_REASONING_POLICY =
		"bedrock:CreateAutomatedReasoningPolicy";
	/** [Write] bedrock:CreateAutomatedReasoningPolicyTestCase */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_TEST_CASE =
		"bedrock:CreateAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:CreateAutomatedReasoningPolicyVersion */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_VERSION =
		"bedrock:CreateAutomatedReasoningPolicyVersion";
	/** [Write] bedrock:CreateBlueprint */
	static readonly CREATE_BLUEPRINT = "bedrock:CreateBlueprint";
	/** [Write] bedrock:CreateBlueprintVersion */
	static readonly CREATE_BLUEPRINT_VERSION = "bedrock:CreateBlueprintVersion";
	/** [Write] bedrock:CreateCustomModel */
	static readonly CREATE_CUSTOM_MODEL = "bedrock:CreateCustomModel";
	/** [Write] bedrock:CreateCustomModelDeployment */
	static readonly CREATE_CUSTOM_MODEL_DEPLOYMENT =
		"bedrock:CreateCustomModelDeployment";
	/** [Write] bedrock:CreateDataAutomationLibrary */
	static readonly CREATE_DATA_AUTOMATION_LIBRARY =
		"bedrock:CreateDataAutomationLibrary";
	/** [Write] bedrock:CreateDataAutomationProject */
	static readonly CREATE_DATA_AUTOMATION_PROJECT =
		"bedrock:CreateDataAutomationProject";
	/** [Write] bedrock:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "bedrock:CreateDataSource";
	/** [Write] bedrock:CreateEvaluationJob */
	static readonly CREATE_EVALUATION_JOB = "bedrock:CreateEvaluationJob";
	/** [Write] bedrock:CreateFlow */
	static readonly CREATE_FLOW = "bedrock:CreateFlow";
	/** [Write] bedrock:CreateFlowAlias */
	static readonly CREATE_FLOW_ALIAS = "bedrock:CreateFlowAlias";
	/** [Write] bedrock:CreateFlowVersion */
	static readonly CREATE_FLOW_VERSION = "bedrock:CreateFlowVersion";
	/** [Write] bedrock:CreateFoundationModelAgreement */
	static readonly CREATE_FOUNDATION_MODEL_AGREEMENT =
		"bedrock:CreateFoundationModelAgreement";
	/** [Write] bedrock:CreateGuardrail */
	static readonly CREATE_GUARDRAIL = "bedrock:CreateGuardrail";
	/** [Write] bedrock:CreateGuardrailVersion */
	static readonly CREATE_GUARDRAIL_VERSION = "bedrock:CreateGuardrailVersion";
	/** [Write] bedrock:CreateInferenceProfile */
	static readonly CREATE_INFERENCE_PROFILE = "bedrock:CreateInferenceProfile";
	/** [Write] bedrock:CreateInvocation */
	static readonly CREATE_INVOCATION = "bedrock:CreateInvocation";
	/** [Write] bedrock:CreateKnowledgeBase */
	static readonly CREATE_KNOWLEDGE_BASE = "bedrock:CreateKnowledgeBase";
	/** [Write] bedrock:CreateMarketplaceModelEndpoint */
	static readonly CREATE_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:CreateMarketplaceModelEndpoint";
	/** [Write] bedrock:CreateModelCopyJob */
	static readonly CREATE_MODEL_COPY_JOB = "bedrock:CreateModelCopyJob";
	/** [Write] bedrock:CreateModelCustomizationJob */
	static readonly CREATE_MODEL_CUSTOMIZATION_JOB =
		"bedrock:CreateModelCustomizationJob";
	/** [Write] bedrock:CreateModelEvaluationJob */
	static readonly CREATE_MODEL_EVALUATION_JOB =
		"bedrock:CreateModelEvaluationJob";
	/** [Write] bedrock:CreateModelImportJob */
	static readonly CREATE_MODEL_IMPORT_JOB = "bedrock:CreateModelImportJob";
	/** [Write] bedrock:CreateModelInvocationJob */
	static readonly CREATE_MODEL_INVOCATION_JOB =
		"bedrock:CreateModelInvocationJob";
	/** [Write] bedrock:CreatePrompt */
	static readonly CREATE_PROMPT = "bedrock:CreatePrompt";
	/** [Write] bedrock:CreatePromptRouter */
	static readonly CREATE_PROMPT_ROUTER = "bedrock:CreatePromptRouter";
	/** [Write] bedrock:CreatePromptVersion */
	static readonly CREATE_PROMPT_VERSION = "bedrock:CreatePromptVersion";
	/** [Write] bedrock:CreateProvisionedModelThroughput */
	static readonly CREATE_PROVISIONED_MODEL_THROUGHPUT =
		"bedrock:CreateProvisionedModelThroughput";
	/** [Write] bedrock:CreateSession */
	static readonly CREATE_SESSION = "bedrock:CreateSession";
	/** [Write] bedrock:DeleteAgent */
	static readonly DELETE_AGENT = "bedrock:DeleteAgent";
	/** [Write] bedrock:DeleteAgentActionGroup */
	static readonly DELETE_AGENT_ACTION_GROUP = "bedrock:DeleteAgentActionGroup";
	/** [Write] bedrock:DeleteAgentAlias */
	static readonly DELETE_AGENT_ALIAS = "bedrock:DeleteAgentAlias";
	/** [Write] bedrock:DeleteAgentMemory */
	static readonly DELETE_AGENT_MEMORY = "bedrock:DeleteAgentMemory";
	/** [Write] bedrock:DeleteAgentVersion */
	static readonly DELETE_AGENT_VERSION = "bedrock:DeleteAgentVersion";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicy */
	static readonly DELETE_AUTOMATED_REASONING_POLICY =
		"bedrock:DeleteAutomatedReasoningPolicy";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow */
	static readonly DELETE_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW =
		"bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicyTestCase */
	static readonly DELETE_AUTOMATED_REASONING_POLICY_TEST_CASE =
		"bedrock:DeleteAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:DeleteBlueprint */
	static readonly DELETE_BLUEPRINT = "bedrock:DeleteBlueprint";
	/** [Write] bedrock:DeleteCustomModel */
	static readonly DELETE_CUSTOM_MODEL = "bedrock:DeleteCustomModel";
	/** [Write] bedrock:DeleteCustomModelDeployment */
	static readonly DELETE_CUSTOM_MODEL_DEPLOYMENT =
		"bedrock:DeleteCustomModelDeployment";
	/** [Write] bedrock:DeleteDataAutomationLibrary */
	static readonly DELETE_DATA_AUTOMATION_LIBRARY =
		"bedrock:DeleteDataAutomationLibrary";
	/** [Write] bedrock:DeleteDataAutomationProject */
	static readonly DELETE_DATA_AUTOMATION_PROJECT =
		"bedrock:DeleteDataAutomationProject";
	/** [Write] bedrock:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "bedrock:DeleteDataSource";
	/** [Write] bedrock:DeleteEnforcedGuardrailConfiguration */
	static readonly DELETE_ENFORCED_GUARDRAIL_CONFIGURATION =
		"bedrock:DeleteEnforcedGuardrailConfiguration";
	/** [Write] bedrock:DeleteFlow */
	static readonly DELETE_FLOW = "bedrock:DeleteFlow";
	/** [Write] bedrock:DeleteFlowAlias */
	static readonly DELETE_FLOW_ALIAS = "bedrock:DeleteFlowAlias";
	/** [Write] bedrock:DeleteFlowVersion */
	static readonly DELETE_FLOW_VERSION = "bedrock:DeleteFlowVersion";
	/** [Write] bedrock:DeleteFoundationModelAgreement */
	static readonly DELETE_FOUNDATION_MODEL_AGREEMENT =
		"bedrock:DeleteFoundationModelAgreement";
	/** [Write] bedrock:DeleteGuardrail */
	static readonly DELETE_GUARDRAIL = "bedrock:DeleteGuardrail";
	/** [Write] bedrock:DeleteImportedModel */
	static readonly DELETE_IMPORTED_MODEL = "bedrock:DeleteImportedModel";
	/** [Write] bedrock:DeleteInferenceProfile */
	static readonly DELETE_INFERENCE_PROFILE = "bedrock:DeleteInferenceProfile";
	/** [Write] bedrock:DeleteKnowledgeBase */
	static readonly DELETE_KNOWLEDGE_BASE = "bedrock:DeleteKnowledgeBase";
	/** [Write] bedrock:DeleteKnowledgeBaseDocuments */
	static readonly DELETE_KNOWLEDGE_BASE_DOCUMENTS =
		"bedrock:DeleteKnowledgeBaseDocuments";
	/** [Write] bedrock:DeleteMarketplaceModelAgreement */
	static readonly DELETE_MARKETPLACE_MODEL_AGREEMENT =
		"bedrock:DeleteMarketplaceModelAgreement";
	/** [Write] bedrock:DeleteMarketplaceModelEndpoint */
	static readonly DELETE_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:DeleteMarketplaceModelEndpoint";
	/** [Write] bedrock:DeleteModelInvocationLoggingConfiguration */
	static readonly DELETE_MODEL_INVOCATION_LOGGING_CONFIGURATION =
		"bedrock:DeleteModelInvocationLoggingConfiguration";
	/** [Write] bedrock:DeletePrompt */
	static readonly DELETE_PROMPT = "bedrock:DeletePrompt";
	/** [Write] bedrock:DeletePromptRouter */
	static readonly DELETE_PROMPT_ROUTER = "bedrock:DeletePromptRouter";
	/** [Write] bedrock:DeleteProvisionedModelThroughput */
	static readonly DELETE_PROVISIONED_MODEL_THROUGHPUT =
		"bedrock:DeleteProvisionedModelThroughput";
	/** [Write] bedrock:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "bedrock:DeleteResourcePolicy";
	/** [Write] bedrock:DeleteSession */
	static readonly DELETE_SESSION = "bedrock:DeleteSession";
	/** [Write] bedrock:DeregisterMarketplaceModelEndpoint */
	static readonly DEREGISTER_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:DeregisterMarketplaceModelEndpoint";
	/** [Read] bedrock:DetectGeneratedContent */
	static readonly DETECT_GENERATED_CONTENT = "bedrock:DetectGeneratedContent";
	/** [Write] bedrock:DisassociateAgentCollaborator */
	static readonly DISASSOCIATE_AGENT_COLLABORATOR =
		"bedrock:DisassociateAgentCollaborator";
	/** [Write] bedrock:DisassociateAgentKnowledgeBase */
	static readonly DISASSOCIATE_AGENT_KNOWLEDGE_BASE =
		"bedrock:DisassociateAgentKnowledgeBase";
	/** [Write] bedrock:EndSession */
	static readonly END_SESSION = "bedrock:EndSession";
	/** [Read] bedrock:ExportAutomatedReasoningPolicyVersion */
	static readonly EXPORT_AUTOMATED_REASONING_POLICY_VERSION =
		"bedrock:ExportAutomatedReasoningPolicyVersion";
	/** [Read] bedrock:GenerateQuery */
	static readonly GENERATE_QUERY = "bedrock:GenerateQuery";
	/** [Read] bedrock:GetAccountDataRetention */
	static readonly GET_ACCOUNT_DATA_RETENTION =
		"bedrock:GetAccountDataRetention";
	/** [Read] bedrock:GetAdvancedPromptOptimizationJob */
	static readonly GET_ADVANCED_PROMPT_OPTIMIZATION_JOB =
		"bedrock:GetAdvancedPromptOptimizationJob";
	/** [Read] bedrock:GetAgent */
	static readonly GET_AGENT = "bedrock:GetAgent";
	/** [Read] bedrock:GetAgentActionGroup */
	static readonly GET_AGENT_ACTION_GROUP = "bedrock:GetAgentActionGroup";
	/** [Read] bedrock:GetAgentAlias */
	static readonly GET_AGENT_ALIAS = "bedrock:GetAgentAlias";
	/** [Read] bedrock:GetAgentCollaborator */
	static readonly GET_AGENT_COLLABORATOR = "bedrock:GetAgentCollaborator";
	/** [Read] bedrock:GetAgentKnowledgeBase */
	static readonly GET_AGENT_KNOWLEDGE_BASE = "bedrock:GetAgentKnowledgeBase";
	/** [Read] bedrock:GetAgentMemory */
	static readonly GET_AGENT_MEMORY = "bedrock:GetAgentMemory";
	/** [Read] bedrock:GetAgentVersion */
	static readonly GET_AGENT_VERSION = "bedrock:GetAgentVersion";
	/** [Read] bedrock:GetAsyncInvoke */
	static readonly GET_ASYNC_INVOKE = "bedrock:GetAsyncInvoke";
	/** [Read] bedrock:GetAutomatedReasoningPolicy */
	static readonly GET_AUTOMATED_REASONING_POLICY =
		"bedrock:GetAutomatedReasoningPolicy";
	/** [Read] bedrock:GetAutomatedReasoningPolicyAnnotations */
	static readonly GET_AUTOMATED_REASONING_POLICY_ANNOTATIONS =
		"bedrock:GetAutomatedReasoningPolicyAnnotations";
	/** [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflow */
	static readonly GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW =
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflow";
	/** [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets */
	static readonly GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW_RESULT_ASSETS =
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets";
	/** [Read] bedrock:GetAutomatedReasoningPolicyNextScenario */
	static readonly GET_AUTOMATED_REASONING_POLICY_NEXT_SCENARIO =
		"bedrock:GetAutomatedReasoningPolicyNextScenario";
	/** [Read] bedrock:GetAutomatedReasoningPolicyTestCase */
	static readonly GET_AUTOMATED_REASONING_POLICY_TEST_CASE =
		"bedrock:GetAutomatedReasoningPolicyTestCase";
	/** [Read] bedrock:GetAutomatedReasoningPolicyTestResult */
	static readonly GET_AUTOMATED_REASONING_POLICY_TEST_RESULT =
		"bedrock:GetAutomatedReasoningPolicyTestResult";
	/** [Read] bedrock:GetBlueprint */
	static readonly GET_BLUEPRINT = "bedrock:GetBlueprint";
	/** [Read] bedrock:GetBlueprintOptimizationStatus */
	static readonly GET_BLUEPRINT_OPTIMIZATION_STATUS =
		"bedrock:GetBlueprintOptimizationStatus";
	/** [Read] bedrock:GetBlueprintRecommendation */
	static readonly GET_BLUEPRINT_RECOMMENDATION =
		"bedrock:GetBlueprintRecommendation";
	/** [Read] bedrock:GetCustomModel */
	static readonly GET_CUSTOM_MODEL = "bedrock:GetCustomModel";
	/** [Read] bedrock:GetCustomModelDeployment */
	static readonly GET_CUSTOM_MODEL_DEPLOYMENT =
		"bedrock:GetCustomModelDeployment";
	/** [Read] bedrock:GetDataAutomationLibrary */
	static readonly GET_DATA_AUTOMATION_LIBRARY =
		"bedrock:GetDataAutomationLibrary";
	/** [Read] bedrock:GetDataAutomationLibraryEntity */
	static readonly GET_DATA_AUTOMATION_LIBRARY_ENTITY =
		"bedrock:GetDataAutomationLibraryEntity";
	/** [Read] bedrock:GetDataAutomationLibraryIngestionJob */
	static readonly GET_DATA_AUTOMATION_LIBRARY_INGESTION_JOB =
		"bedrock:GetDataAutomationLibraryIngestionJob";
	/** [Read] bedrock:GetDataAutomationProject */
	static readonly GET_DATA_AUTOMATION_PROJECT =
		"bedrock:GetDataAutomationProject";
	/** [Read] bedrock:GetDataAutomationStatus */
	static readonly GET_DATA_AUTOMATION_STATUS =
		"bedrock:GetDataAutomationStatus";
	/** [Read] bedrock:GetDataSource */
	static readonly GET_DATA_SOURCE = "bedrock:GetDataSource";
	/** [Read] bedrock:GetDocumentContent */
	static readonly GET_DOCUMENT_CONTENT = "bedrock:GetDocumentContent";
	/** [Read] bedrock:GetEvaluationJob */
	static readonly GET_EVALUATION_JOB = "bedrock:GetEvaluationJob";
	/** [Read] bedrock:GetExecutionFlowSnapshot */
	static readonly GET_EXECUTION_FLOW_SNAPSHOT =
		"bedrock:GetExecutionFlowSnapshot";
	/** [Read] bedrock:GetFlow */
	static readonly GET_FLOW = "bedrock:GetFlow";
	/** [Read] bedrock:GetFlowAlias */
	static readonly GET_FLOW_ALIAS = "bedrock:GetFlowAlias";
	/** [Read] bedrock:GetFlowExecution */
	static readonly GET_FLOW_EXECUTION = "bedrock:GetFlowExecution";
	/** [Read] bedrock:GetFlowVersion */
	static readonly GET_FLOW_VERSION = "bedrock:GetFlowVersion";
	/** [Read] bedrock:GetFoundationModel */
	static readonly GET_FOUNDATION_MODEL = "bedrock:GetFoundationModel";
	/** [Read] bedrock:GetFoundationModelAvailability */
	static readonly GET_FOUNDATION_MODEL_AVAILABILITY =
		"bedrock:GetFoundationModelAvailability";
	/** [Read] bedrock:GetGuardrail */
	static readonly GET_GUARDRAIL = "bedrock:GetGuardrail";
	/** [Read] bedrock:GetImportedModel */
	static readonly GET_IMPORTED_MODEL = "bedrock:GetImportedModel";
	/** [Read] bedrock:GetInferenceProfile */
	static readonly GET_INFERENCE_PROFILE = "bedrock:GetInferenceProfile";
	/** [Read] bedrock:GetIngestionJob */
	static readonly GET_INGESTION_JOB = "bedrock:GetIngestionJob";
	/** [Read] bedrock:GetInvocationStep */
	static readonly GET_INVOCATION_STEP = "bedrock:GetInvocationStep";
	/** [Read] bedrock:GetKnowledgeBase */
	static readonly GET_KNOWLEDGE_BASE = "bedrock:GetKnowledgeBase";
	/** [Read] bedrock:GetKnowledgeBaseDocuments */
	static readonly GET_KNOWLEDGE_BASE_DOCUMENTS =
		"bedrock:GetKnowledgeBaseDocuments";
	/** [Read] bedrock:GetMarketplaceModelEndpoint */
	static readonly GET_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:GetMarketplaceModelEndpoint";
	/** [Read] bedrock:GetModelCopyJob */
	static readonly GET_MODEL_COPY_JOB = "bedrock:GetModelCopyJob";
	/** [Read] bedrock:GetModelCustomizationJob */
	static readonly GET_MODEL_CUSTOMIZATION_JOB =
		"bedrock:GetModelCustomizationJob";
	/** [Read] bedrock:GetModelEvaluationJob */
	static readonly GET_MODEL_EVALUATION_JOB = "bedrock:GetModelEvaluationJob";
	/** [Read] bedrock:GetModelImportJob */
	static readonly GET_MODEL_IMPORT_JOB = "bedrock:GetModelImportJob";
	/** [Read] bedrock:GetModelInvocationJob */
	static readonly GET_MODEL_INVOCATION_JOB = "bedrock:GetModelInvocationJob";
	/** [Read] bedrock:GetModelInvocationLoggingConfiguration */
	static readonly GET_MODEL_INVOCATION_LOGGING_CONFIGURATION =
		"bedrock:GetModelInvocationLoggingConfiguration";
	/** [Read] bedrock:GetPrompt */
	static readonly GET_PROMPT = "bedrock:GetPrompt";
	/** [Read] bedrock:GetPromptRouter */
	static readonly GET_PROMPT_ROUTER = "bedrock:GetPromptRouter";
	/** [Read] bedrock:GetProvisionedModelThroughput */
	static readonly GET_PROVISIONED_MODEL_THROUGHPUT =
		"bedrock:GetProvisionedModelThroughput";
	/** [Read] bedrock:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "bedrock:GetResourcePolicy";
	/** [Read] bedrock:GetSession */
	static readonly GET_SESSION = "bedrock:GetSession";
	/** [Read] bedrock:GetUseCaseForModelAccess */
	static readonly GET_USE_CASE_FOR_MODEL_ACCESS =
		"bedrock:GetUseCaseForModelAccess";
	/** [Write] bedrock:IngestKnowledgeBaseDocuments */
	static readonly INGEST_KNOWLEDGE_BASE_DOCUMENTS =
		"bedrock:IngestKnowledgeBaseDocuments";
	/** [Read] bedrock:InvokeAgent */
	static readonly INVOKE_AGENT = "bedrock:InvokeAgent";
	/** [Read] bedrock:InvokeAutomatedReasoningPolicy */
	static readonly INVOKE_AUTOMATED_REASONING_POLICY =
		"bedrock:InvokeAutomatedReasoningPolicy";
	/** [Write] bedrock:InvokeBlueprintOptimizationAsync */
	static readonly INVOKE_BLUEPRINT_OPTIMIZATION_ASYNC =
		"bedrock:InvokeBlueprintOptimizationAsync";
	/** [Write] bedrock:InvokeBlueprintRecommendationAsync */
	static readonly INVOKE_BLUEPRINT_RECOMMENDATION_ASYNC =
		"bedrock:InvokeBlueprintRecommendationAsync";
	/** [Write] bedrock:InvokeBuilder */
	static readonly INVOKE_BUILDER = "bedrock:InvokeBuilder";
	/** [Write] bedrock:InvokeDataAutomation */
	static readonly INVOKE_DATA_AUTOMATION = "bedrock:InvokeDataAutomation";
	/** [Write] bedrock:InvokeDataAutomationAsync */
	static readonly INVOKE_DATA_AUTOMATION_ASYNC =
		"bedrock:InvokeDataAutomationAsync";
	/** [Write] bedrock:InvokeDataAutomationLibraryIngestionJob */
	static readonly INVOKE_DATA_AUTOMATION_LIBRARY_INGESTION_JOB =
		"bedrock:InvokeDataAutomationLibraryIngestionJob";
	/** [Read] bedrock:InvokeFlow */
	static readonly INVOKE_FLOW = "bedrock:InvokeFlow";
	/** [Read] bedrock:InvokeGuardrailChecks */
	static readonly INVOKE_GUARDRAIL_CHECKS = "bedrock:InvokeGuardrailChecks";
	/** [Read] bedrock:InvokeInlineAgent */
	static readonly INVOKE_INLINE_AGENT = "bedrock:InvokeInlineAgent";
	/** [Read] bedrock:InvokeModel */
	static readonly INVOKE_MODEL = "bedrock:InvokeModel";
	/** [Read] bedrock:InvokeModelWithResponseStream */
	static readonly INVOKE_MODEL_WITH_RESPONSE_STREAM =
		"bedrock:InvokeModelWithResponseStream";
	/** [Read] bedrock:InvokeTool */
	static readonly INVOKE_TOOL = "bedrock:InvokeTool";
	/** [List] bedrock:ListAdvancedPromptOptimizationJobs */
	static readonly LIST_ADVANCED_PROMPT_OPTIMIZATION_JOBS =
		"bedrock:ListAdvancedPromptOptimizationJobs";
	/** [List] bedrock:ListAgentActionGroups */
	static readonly LIST_AGENT_ACTION_GROUPS = "bedrock:ListAgentActionGroups";
	/** [List] bedrock:ListAgentAliases */
	static readonly LIST_AGENT_ALIASES = "bedrock:ListAgentAliases";
	/** [List] bedrock:ListAgentCollaborators */
	static readonly LIST_AGENT_COLLABORATORS = "bedrock:ListAgentCollaborators";
	/** [List] bedrock:ListAgentKnowledgeBases */
	static readonly LIST_AGENT_KNOWLEDGE_BASES =
		"bedrock:ListAgentKnowledgeBases";
	/** [List] bedrock:ListAgentVersions */
	static readonly LIST_AGENT_VERSIONS = "bedrock:ListAgentVersions";
	/** [List] bedrock:ListAgents */
	static readonly LIST_AGENTS = "bedrock:ListAgents";
	/** [List] bedrock:ListAsyncInvokes */
	static readonly LIST_ASYNC_INVOKES = "bedrock:ListAsyncInvokes";
	/** [List] bedrock:ListAutomatedReasoningPolicies */
	static readonly LIST_AUTOMATED_REASONING_POLICIES =
		"bedrock:ListAutomatedReasoningPolicies";
	/** [List] bedrock:ListAutomatedReasoningPolicyBuildWorkflows */
	static readonly LIST_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOWS =
		"bedrock:ListAutomatedReasoningPolicyBuildWorkflows";
	/** [List] bedrock:ListAutomatedReasoningPolicyTestCases */
	static readonly LIST_AUTOMATED_REASONING_POLICY_TEST_CASES =
		"bedrock:ListAutomatedReasoningPolicyTestCases";
	/** [List] bedrock:ListAutomatedReasoningPolicyTestResults */
	static readonly LIST_AUTOMATED_REASONING_POLICY_TEST_RESULTS =
		"bedrock:ListAutomatedReasoningPolicyTestResults";
	/** [List] bedrock:ListBlueprints */
	static readonly LIST_BLUEPRINTS = "bedrock:ListBlueprints";
	/** [List] bedrock:ListCustomModelDeployments */
	static readonly LIST_CUSTOM_MODEL_DEPLOYMENTS =
		"bedrock:ListCustomModelDeployments";
	/** [List] bedrock:ListCustomModels */
	static readonly LIST_CUSTOM_MODELS = "bedrock:ListCustomModels";
	/** [List] bedrock:ListDataAutomationLibraries */
	static readonly LIST_DATA_AUTOMATION_LIBRARIES =
		"bedrock:ListDataAutomationLibraries";
	/** [List] bedrock:ListDataAutomationLibraryEntities */
	static readonly LIST_DATA_AUTOMATION_LIBRARY_ENTITIES =
		"bedrock:ListDataAutomationLibraryEntities";
	/** [List] bedrock:ListDataAutomationLibraryIngestionJobs */
	static readonly LIST_DATA_AUTOMATION_LIBRARY_INGESTION_JOBS =
		"bedrock:ListDataAutomationLibraryIngestionJobs";
	/** [List] bedrock:ListDataAutomationProjects */
	static readonly LIST_DATA_AUTOMATION_PROJECTS =
		"bedrock:ListDataAutomationProjects";
	/** [List] bedrock:ListDataSources */
	static readonly LIST_DATA_SOURCES = "bedrock:ListDataSources";
	/** [List] bedrock:ListEnforcedGuardrailsConfiguration */
	static readonly LIST_ENFORCED_GUARDRAILS_CONFIGURATION =
		"bedrock:ListEnforcedGuardrailsConfiguration";
	/** [List] bedrock:ListEvaluationJobs */
	static readonly LIST_EVALUATION_JOBS = "bedrock:ListEvaluationJobs";
	/** [List] bedrock:ListFlowAliases */
	static readonly LIST_FLOW_ALIASES = "bedrock:ListFlowAliases";
	/** [List] bedrock:ListFlowExecutionEvents */
	static readonly LIST_FLOW_EXECUTION_EVENTS =
		"bedrock:ListFlowExecutionEvents";
	/** [List] bedrock:ListFlowExecutions */
	static readonly LIST_FLOW_EXECUTIONS = "bedrock:ListFlowExecutions";
	/** [List] bedrock:ListFlowVersions */
	static readonly LIST_FLOW_VERSIONS = "bedrock:ListFlowVersions";
	/** [List] bedrock:ListFlows */
	static readonly LIST_FLOWS = "bedrock:ListFlows";
	/** [List] bedrock:ListFoundationModelAgreementOffers */
	static readonly LIST_FOUNDATION_MODEL_AGREEMENT_OFFERS =
		"bedrock:ListFoundationModelAgreementOffers";
	/** [List] bedrock:ListFoundationModels */
	static readonly LIST_FOUNDATION_MODELS = "bedrock:ListFoundationModels";
	/** [List] bedrock:ListGuardrails */
	static readonly LIST_GUARDRAILS = "bedrock:ListGuardrails";
	/** [List] bedrock:ListImportedModels */
	static readonly LIST_IMPORTED_MODELS = "bedrock:ListImportedModels";
	/** [List] bedrock:ListInferenceProfiles */
	static readonly LIST_INFERENCE_PROFILES = "bedrock:ListInferenceProfiles";
	/** [List] bedrock:ListIngestionJobs */
	static readonly LIST_INGESTION_JOBS = "bedrock:ListIngestionJobs";
	/** [List] bedrock:ListInvocationSteps */
	static readonly LIST_INVOCATION_STEPS = "bedrock:ListInvocationSteps";
	/** [List] bedrock:ListInvocations */
	static readonly LIST_INVOCATIONS = "bedrock:ListInvocations";
	/** [List] bedrock:ListKnowledgeBaseDocuments */
	static readonly LIST_KNOWLEDGE_BASE_DOCUMENTS =
		"bedrock:ListKnowledgeBaseDocuments";
	/** [List] bedrock:ListKnowledgeBases */
	static readonly LIST_KNOWLEDGE_BASES = "bedrock:ListKnowledgeBases";
	/** [Read] bedrock:ListMarketplaceModelEndpoints */
	static readonly LIST_MARKETPLACE_MODEL_ENDPOINTS =
		"bedrock:ListMarketplaceModelEndpoints";
	/** [List] bedrock:ListModelCopyJobs */
	static readonly LIST_MODEL_COPY_JOBS = "bedrock:ListModelCopyJobs";
	/** [List] bedrock:ListModelCustomizationJobs */
	static readonly LIST_MODEL_CUSTOMIZATION_JOBS =
		"bedrock:ListModelCustomizationJobs";
	/** [List] bedrock:ListModelEvaluationJobs */
	static readonly LIST_MODEL_EVALUATION_JOBS =
		"bedrock:ListModelEvaluationJobs";
	/** [List] bedrock:ListModelImportJobs */
	static readonly LIST_MODEL_IMPORT_JOBS = "bedrock:ListModelImportJobs";
	/** [List] bedrock:ListModelInvocationJobs */
	static readonly LIST_MODEL_INVOCATION_JOBS =
		"bedrock:ListModelInvocationJobs";
	/** [List] bedrock:ListPromptRouters */
	static readonly LIST_PROMPT_ROUTERS = "bedrock:ListPromptRouters";
	/** [List] bedrock:ListPrompts */
	static readonly LIST_PROMPTS = "bedrock:ListPrompts";
	/** [List] bedrock:ListProvisionedModelThroughputs */
	static readonly LIST_PROVISIONED_MODEL_THROUGHPUTS =
		"bedrock:ListProvisionedModelThroughputs";
	/** [List] bedrock:ListSessions */
	static readonly LIST_SESSIONS = "bedrock:ListSessions";
	/** [Read] bedrock:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "bedrock:ListTagsForResource";
	/** [Read] bedrock:OptimizePrompt */
	static readonly OPTIMIZE_PROMPT = "bedrock:OptimizePrompt";
	/** [Write] bedrock:PrepareAgent */
	static readonly PREPARE_AGENT = "bedrock:PrepareAgent";
	/** [Write] bedrock:PrepareFlow */
	static readonly PREPARE_FLOW = "bedrock:PrepareFlow";
	/** [Write] bedrock:PutAccountDataRetention */
	static readonly PUT_ACCOUNT_DATA_RETENTION =
		"bedrock:PutAccountDataRetention";
	/** [Write] bedrock:PutEnforcedGuardrailConfiguration */
	static readonly PUT_ENFORCED_GUARDRAIL_CONFIGURATION =
		"bedrock:PutEnforcedGuardrailConfiguration";
	/** [Write] bedrock:PutFoundationModelEntitlement */
	static readonly PUT_FOUNDATION_MODEL_ENTITLEMENT =
		"bedrock:PutFoundationModelEntitlement";
	/** [Write] bedrock:PutInvocationStep */
	static readonly PUT_INVOCATION_STEP = "bedrock:PutInvocationStep";
	/** [Write] bedrock:PutModelInvocationLoggingConfiguration */
	static readonly PUT_MODEL_INVOCATION_LOGGING_CONFIGURATION =
		"bedrock:PutModelInvocationLoggingConfiguration";
	/** [Write] bedrock:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "bedrock:PutResourcePolicy";
	/** [Write] bedrock:PutUseCaseForModelAccess */
	static readonly PUT_USE_CASE_FOR_MODEL_ACCESS =
		"bedrock:PutUseCaseForModelAccess";
	/** [Write] bedrock:RegisterMarketplaceModelEndpoint */
	static readonly REGISTER_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:RegisterMarketplaceModelEndpoint";
	/** [Read] bedrock:RenderPrompt */
	static readonly RENDER_PROMPT = "bedrock:RenderPrompt";
	/** [Write] bedrock:Rerank */
	static readonly RERANK = "bedrock:Rerank";
	/** [Read] bedrock:Retrieve */
	static readonly RETRIEVE = "bedrock:Retrieve";
	/** [Write] bedrock:RetrieveAndGenerate */
	static readonly RETRIEVE_AND_GENERATE = "bedrock:RetrieveAndGenerate";
	/** [Write] bedrock:StartAutomatedReasoningPolicyBuildWorkflow */
	static readonly START_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW =
		"bedrock:StartAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:StartAutomatedReasoningPolicyTestWorkflow */
	static readonly START_AUTOMATED_REASONING_POLICY_TEST_WORKFLOW =
		"bedrock:StartAutomatedReasoningPolicyTestWorkflow";
	/** [Write] bedrock:StartFlowExecution */
	static readonly START_FLOW_EXECUTION = "bedrock:StartFlowExecution";
	/** [Write] bedrock:StartIngestionJob */
	static readonly START_INGESTION_JOB = "bedrock:StartIngestionJob";
	/** [Write] bedrock:StopAdvancedPromptOptimizationJob */
	static readonly STOP_ADVANCED_PROMPT_OPTIMIZATION_JOB =
		"bedrock:StopAdvancedPromptOptimizationJob";
	/** [Write] bedrock:StopEvaluationJob */
	static readonly STOP_EVALUATION_JOB = "bedrock:StopEvaluationJob";
	/** [Write] bedrock:StopFlowExecution */
	static readonly STOP_FLOW_EXECUTION = "bedrock:StopFlowExecution";
	/** [Write] bedrock:StopIngestionJob */
	static readonly STOP_INGESTION_JOB = "bedrock:StopIngestionJob";
	/** [Write] bedrock:StopModelCustomizationJob */
	static readonly STOP_MODEL_CUSTOMIZATION_JOB =
		"bedrock:StopModelCustomizationJob";
	/** [Write] bedrock:StopModelInvocationJob */
	static readonly STOP_MODEL_INVOCATION_JOB = "bedrock:StopModelInvocationJob";
	/** [Tagging] bedrock:TagResource */
	static readonly TAG_RESOURCE = "bedrock:TagResource";
	/** [Tagging] bedrock:UntagResource */
	static readonly UNTAG_RESOURCE = "bedrock:UntagResource";
	/** [Write] bedrock:UpdateAgent */
	static readonly UPDATE_AGENT = "bedrock:UpdateAgent";
	/** [Write] bedrock:UpdateAgentActionGroup */
	static readonly UPDATE_AGENT_ACTION_GROUP = "bedrock:UpdateAgentActionGroup";
	/** [Write] bedrock:UpdateAgentAlias */
	static readonly UPDATE_AGENT_ALIAS = "bedrock:UpdateAgentAlias";
	/** [Write] bedrock:UpdateAgentCollaborator */
	static readonly UPDATE_AGENT_COLLABORATOR = "bedrock:UpdateAgentCollaborator";
	/** [Write] bedrock:UpdateAgentKnowledgeBase */
	static readonly UPDATE_AGENT_KNOWLEDGE_BASE =
		"bedrock:UpdateAgentKnowledgeBase";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicy */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY =
		"bedrock:UpdateAutomatedReasoningPolicy";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicyAnnotations */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY_ANNOTATIONS =
		"bedrock:UpdateAutomatedReasoningPolicyAnnotations";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicyTestCase */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY_TEST_CASE =
		"bedrock:UpdateAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:UpdateBlueprint */
	static readonly UPDATE_BLUEPRINT = "bedrock:UpdateBlueprint";
	/** [Write] bedrock:UpdateCustomModelDeployment */
	static readonly UPDATE_CUSTOM_MODEL_DEPLOYMENT =
		"bedrock:UpdateCustomModelDeployment";
	/** [Write] bedrock:UpdateDataAutomationLibrary */
	static readonly UPDATE_DATA_AUTOMATION_LIBRARY =
		"bedrock:UpdateDataAutomationLibrary";
	/** [Write] bedrock:UpdateDataAutomationProject */
	static readonly UPDATE_DATA_AUTOMATION_PROJECT =
		"bedrock:UpdateDataAutomationProject";
	/** [Write] bedrock:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "bedrock:UpdateDataSource";
	/** [Write] bedrock:UpdateFlow */
	static readonly UPDATE_FLOW = "bedrock:UpdateFlow";
	/** [Write] bedrock:UpdateFlowAlias */
	static readonly UPDATE_FLOW_ALIAS = "bedrock:UpdateFlowAlias";
	/** [Write] bedrock:UpdateGuardrail */
	static readonly UPDATE_GUARDRAIL = "bedrock:UpdateGuardrail";
	/** [Write] bedrock:UpdateKnowledgeBase */
	static readonly UPDATE_KNOWLEDGE_BASE = "bedrock:UpdateKnowledgeBase";
	/** [Write] bedrock:UpdateMarketplaceModelEndpoint */
	static readonly UPDATE_MARKETPLACE_MODEL_ENDPOINT =
		"bedrock:UpdateMarketplaceModelEndpoint";
	/** [Write] bedrock:UpdatePrompt */
	static readonly UPDATE_PROMPT = "bedrock:UpdatePrompt";
	/** [Write] bedrock:UpdateProvisionedModelThroughput */
	static readonly UPDATE_PROVISIONED_MODEL_THROUGHPUT =
		"bedrock:UpdateProvisionedModelThroughput";
	/** [Write] bedrock:UpdateSession */
	static readonly UPDATE_SESSION = "bedrock:UpdateSession";
	/** [Read] bedrock:ValidateFlowDefinition */
	static readonly VALIDATE_FLOW_DEFINITION = "bedrock:ValidateFlowDefinition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BedrockActions.AGENTIC_RETRIEVE_STREAM,
		BedrockActions.APPLY_GUARDRAIL,
		BedrockActions.CALL_WITH_BEARER_TOKEN,
		BedrockActions.COUNT_TOKENS,
		BedrockActions.DETECT_GENERATED_CONTENT,
		BedrockActions.EXPORT_AUTOMATED_REASONING_POLICY_VERSION,
		BedrockActions.GENERATE_QUERY,
		BedrockActions.GET_ACCOUNT_DATA_RETENTION,
		BedrockActions.GET_ADVANCED_PROMPT_OPTIMIZATION_JOB,
		BedrockActions.GET_AGENT,
		BedrockActions.GET_AGENT_ACTION_GROUP,
		BedrockActions.GET_AGENT_ALIAS,
		BedrockActions.GET_AGENT_COLLABORATOR,
		BedrockActions.GET_AGENT_KNOWLEDGE_BASE,
		BedrockActions.GET_AGENT_MEMORY,
		BedrockActions.GET_AGENT_VERSION,
		BedrockActions.GET_ASYNC_INVOKE,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_ANNOTATIONS,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW_RESULT_ASSETS,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_NEXT_SCENARIO,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_TEST_CASE,
		BedrockActions.GET_AUTOMATED_REASONING_POLICY_TEST_RESULT,
		BedrockActions.GET_BLUEPRINT,
		BedrockActions.GET_BLUEPRINT_OPTIMIZATION_STATUS,
		BedrockActions.GET_BLUEPRINT_RECOMMENDATION,
		BedrockActions.GET_CUSTOM_MODEL,
		BedrockActions.GET_CUSTOM_MODEL_DEPLOYMENT,
		BedrockActions.GET_DATA_AUTOMATION_LIBRARY,
		BedrockActions.GET_DATA_AUTOMATION_LIBRARY_ENTITY,
		BedrockActions.GET_DATA_AUTOMATION_LIBRARY_INGESTION_JOB,
		BedrockActions.GET_DATA_AUTOMATION_PROJECT,
		BedrockActions.GET_DATA_AUTOMATION_STATUS,
		BedrockActions.GET_DATA_SOURCE,
		BedrockActions.GET_DOCUMENT_CONTENT,
		BedrockActions.GET_EVALUATION_JOB,
		BedrockActions.GET_EXECUTION_FLOW_SNAPSHOT,
		BedrockActions.GET_FLOW,
		BedrockActions.GET_FLOW_ALIAS,
		BedrockActions.GET_FLOW_EXECUTION,
		BedrockActions.GET_FLOW_VERSION,
		BedrockActions.GET_FOUNDATION_MODEL,
		BedrockActions.GET_FOUNDATION_MODEL_AVAILABILITY,
		BedrockActions.GET_GUARDRAIL,
		BedrockActions.GET_IMPORTED_MODEL,
		BedrockActions.GET_INFERENCE_PROFILE,
		BedrockActions.GET_INGESTION_JOB,
		BedrockActions.GET_INVOCATION_STEP,
		BedrockActions.GET_KNOWLEDGE_BASE,
		BedrockActions.GET_KNOWLEDGE_BASE_DOCUMENTS,
		BedrockActions.GET_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.GET_MODEL_COPY_JOB,
		BedrockActions.GET_MODEL_CUSTOMIZATION_JOB,
		BedrockActions.GET_MODEL_EVALUATION_JOB,
		BedrockActions.GET_MODEL_IMPORT_JOB,
		BedrockActions.GET_MODEL_INVOCATION_JOB,
		BedrockActions.GET_MODEL_INVOCATION_LOGGING_CONFIGURATION,
		BedrockActions.GET_PROMPT,
		BedrockActions.GET_PROMPT_ROUTER,
		BedrockActions.GET_PROVISIONED_MODEL_THROUGHPUT,
		BedrockActions.GET_RESOURCE_POLICY,
		BedrockActions.GET_SESSION,
		BedrockActions.GET_USE_CASE_FOR_MODEL_ACCESS,
		BedrockActions.INVOKE_AGENT,
		BedrockActions.INVOKE_AUTOMATED_REASONING_POLICY,
		BedrockActions.INVOKE_FLOW,
		BedrockActions.INVOKE_GUARDRAIL_CHECKS,
		BedrockActions.INVOKE_INLINE_AGENT,
		BedrockActions.INVOKE_MODEL,
		BedrockActions.INVOKE_MODEL_WITH_RESPONSE_STREAM,
		BedrockActions.INVOKE_TOOL,
		BedrockActions.LIST_MARKETPLACE_MODEL_ENDPOINTS,
		BedrockActions.LIST_TAGS_FOR_RESOURCE,
		BedrockActions.OPTIMIZE_PROMPT,
		BedrockActions.RENDER_PROMPT,
		BedrockActions.RETRIEVE,
		BedrockActions.VALIDATE_FLOW_DEFINITION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BedrockActions.ASSOCIATE_AGENT_COLLABORATOR,
		BedrockActions.ASSOCIATE_AGENT_KNOWLEDGE_BASE,
		BedrockActions.ASSOCIATE_THIRD_PARTY_KNOWLEDGE_BASE,
		BedrockActions.BATCH_DELETE_ADVANCED_PROMPT_OPTIMIZATION_JOB,
		BedrockActions.BATCH_DELETE_EVALUATION_JOB,
		BedrockActions.CANCEL_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW,
		BedrockActions.COPY_BLUEPRINT_STAGE,
		BedrockActions.CREATE_ADVANCED_PROMPT_OPTIMIZATION_JOB,
		BedrockActions.CREATE_AGENT,
		BedrockActions.CREATE_AGENT_ACTION_GROUP,
		BedrockActions.CREATE_AGENT_ALIAS,
		BedrockActions.CREATE_AUTOMATED_REASONING_POLICY,
		BedrockActions.CREATE_AUTOMATED_REASONING_POLICY_TEST_CASE,
		BedrockActions.CREATE_AUTOMATED_REASONING_POLICY_VERSION,
		BedrockActions.CREATE_BLUEPRINT,
		BedrockActions.CREATE_BLUEPRINT_VERSION,
		BedrockActions.CREATE_CUSTOM_MODEL,
		BedrockActions.CREATE_CUSTOM_MODEL_DEPLOYMENT,
		BedrockActions.CREATE_DATA_AUTOMATION_LIBRARY,
		BedrockActions.CREATE_DATA_AUTOMATION_PROJECT,
		BedrockActions.CREATE_DATA_SOURCE,
		BedrockActions.CREATE_EVALUATION_JOB,
		BedrockActions.CREATE_FLOW,
		BedrockActions.CREATE_FLOW_ALIAS,
		BedrockActions.CREATE_FLOW_VERSION,
		BedrockActions.CREATE_FOUNDATION_MODEL_AGREEMENT,
		BedrockActions.CREATE_GUARDRAIL,
		BedrockActions.CREATE_GUARDRAIL_VERSION,
		BedrockActions.CREATE_INFERENCE_PROFILE,
		BedrockActions.CREATE_INVOCATION,
		BedrockActions.CREATE_KNOWLEDGE_BASE,
		BedrockActions.CREATE_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.CREATE_MODEL_COPY_JOB,
		BedrockActions.CREATE_MODEL_CUSTOMIZATION_JOB,
		BedrockActions.CREATE_MODEL_EVALUATION_JOB,
		BedrockActions.CREATE_MODEL_IMPORT_JOB,
		BedrockActions.CREATE_MODEL_INVOCATION_JOB,
		BedrockActions.CREATE_PROMPT,
		BedrockActions.CREATE_PROMPT_ROUTER,
		BedrockActions.CREATE_PROMPT_VERSION,
		BedrockActions.CREATE_PROVISIONED_MODEL_THROUGHPUT,
		BedrockActions.CREATE_SESSION,
		BedrockActions.DELETE_AGENT,
		BedrockActions.DELETE_AGENT_ACTION_GROUP,
		BedrockActions.DELETE_AGENT_ALIAS,
		BedrockActions.DELETE_AGENT_MEMORY,
		BedrockActions.DELETE_AGENT_VERSION,
		BedrockActions.DELETE_AUTOMATED_REASONING_POLICY,
		BedrockActions.DELETE_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW,
		BedrockActions.DELETE_AUTOMATED_REASONING_POLICY_TEST_CASE,
		BedrockActions.DELETE_BLUEPRINT,
		BedrockActions.DELETE_CUSTOM_MODEL,
		BedrockActions.DELETE_CUSTOM_MODEL_DEPLOYMENT,
		BedrockActions.DELETE_DATA_AUTOMATION_LIBRARY,
		BedrockActions.DELETE_DATA_AUTOMATION_PROJECT,
		BedrockActions.DELETE_DATA_SOURCE,
		BedrockActions.DELETE_ENFORCED_GUARDRAIL_CONFIGURATION,
		BedrockActions.DELETE_FLOW,
		BedrockActions.DELETE_FLOW_ALIAS,
		BedrockActions.DELETE_FLOW_VERSION,
		BedrockActions.DELETE_FOUNDATION_MODEL_AGREEMENT,
		BedrockActions.DELETE_GUARDRAIL,
		BedrockActions.DELETE_IMPORTED_MODEL,
		BedrockActions.DELETE_INFERENCE_PROFILE,
		BedrockActions.DELETE_KNOWLEDGE_BASE,
		BedrockActions.DELETE_KNOWLEDGE_BASE_DOCUMENTS,
		BedrockActions.DELETE_MARKETPLACE_MODEL_AGREEMENT,
		BedrockActions.DELETE_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.DELETE_MODEL_INVOCATION_LOGGING_CONFIGURATION,
		BedrockActions.DELETE_PROMPT,
		BedrockActions.DELETE_PROMPT_ROUTER,
		BedrockActions.DELETE_PROVISIONED_MODEL_THROUGHPUT,
		BedrockActions.DELETE_RESOURCE_POLICY,
		BedrockActions.DELETE_SESSION,
		BedrockActions.DEREGISTER_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.DISASSOCIATE_AGENT_COLLABORATOR,
		BedrockActions.DISASSOCIATE_AGENT_KNOWLEDGE_BASE,
		BedrockActions.END_SESSION,
		BedrockActions.INGEST_KNOWLEDGE_BASE_DOCUMENTS,
		BedrockActions.INVOKE_BLUEPRINT_OPTIMIZATION_ASYNC,
		BedrockActions.INVOKE_BLUEPRINT_RECOMMENDATION_ASYNC,
		BedrockActions.INVOKE_BUILDER,
		BedrockActions.INVOKE_DATA_AUTOMATION,
		BedrockActions.INVOKE_DATA_AUTOMATION_ASYNC,
		BedrockActions.INVOKE_DATA_AUTOMATION_LIBRARY_INGESTION_JOB,
		BedrockActions.PREPARE_AGENT,
		BedrockActions.PREPARE_FLOW,
		BedrockActions.PUT_ACCOUNT_DATA_RETENTION,
		BedrockActions.PUT_ENFORCED_GUARDRAIL_CONFIGURATION,
		BedrockActions.PUT_FOUNDATION_MODEL_ENTITLEMENT,
		BedrockActions.PUT_INVOCATION_STEP,
		BedrockActions.PUT_MODEL_INVOCATION_LOGGING_CONFIGURATION,
		BedrockActions.PUT_RESOURCE_POLICY,
		BedrockActions.PUT_USE_CASE_FOR_MODEL_ACCESS,
		BedrockActions.REGISTER_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.RERANK,
		BedrockActions.RETRIEVE_AND_GENERATE,
		BedrockActions.START_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW,
		BedrockActions.START_AUTOMATED_REASONING_POLICY_TEST_WORKFLOW,
		BedrockActions.START_FLOW_EXECUTION,
		BedrockActions.START_INGESTION_JOB,
		BedrockActions.STOP_ADVANCED_PROMPT_OPTIMIZATION_JOB,
		BedrockActions.STOP_EVALUATION_JOB,
		BedrockActions.STOP_FLOW_EXECUTION,
		BedrockActions.STOP_INGESTION_JOB,
		BedrockActions.STOP_MODEL_CUSTOMIZATION_JOB,
		BedrockActions.STOP_MODEL_INVOCATION_JOB,
		BedrockActions.UPDATE_AGENT,
		BedrockActions.UPDATE_AGENT_ACTION_GROUP,
		BedrockActions.UPDATE_AGENT_ALIAS,
		BedrockActions.UPDATE_AGENT_COLLABORATOR,
		BedrockActions.UPDATE_AGENT_KNOWLEDGE_BASE,
		BedrockActions.UPDATE_AUTOMATED_REASONING_POLICY,
		BedrockActions.UPDATE_AUTOMATED_REASONING_POLICY_ANNOTATIONS,
		BedrockActions.UPDATE_AUTOMATED_REASONING_POLICY_TEST_CASE,
		BedrockActions.UPDATE_BLUEPRINT,
		BedrockActions.UPDATE_CUSTOM_MODEL_DEPLOYMENT,
		BedrockActions.UPDATE_DATA_AUTOMATION_LIBRARY,
		BedrockActions.UPDATE_DATA_AUTOMATION_PROJECT,
		BedrockActions.UPDATE_DATA_SOURCE,
		BedrockActions.UPDATE_FLOW,
		BedrockActions.UPDATE_FLOW_ALIAS,
		BedrockActions.UPDATE_GUARDRAIL,
		BedrockActions.UPDATE_KNOWLEDGE_BASE,
		BedrockActions.UPDATE_MARKETPLACE_MODEL_ENDPOINT,
		BedrockActions.UPDATE_PROMPT,
		BedrockActions.UPDATE_PROVISIONED_MODEL_THROUGHPUT,
		BedrockActions.UPDATE_SESSION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BedrockActions.LIST_ADVANCED_PROMPT_OPTIMIZATION_JOBS,
		BedrockActions.LIST_AGENT_ACTION_GROUPS,
		BedrockActions.LIST_AGENT_ALIASES,
		BedrockActions.LIST_AGENT_COLLABORATORS,
		BedrockActions.LIST_AGENT_KNOWLEDGE_BASES,
		BedrockActions.LIST_AGENT_VERSIONS,
		BedrockActions.LIST_AGENTS,
		BedrockActions.LIST_ASYNC_INVOKES,
		BedrockActions.LIST_AUTOMATED_REASONING_POLICIES,
		BedrockActions.LIST_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOWS,
		BedrockActions.LIST_AUTOMATED_REASONING_POLICY_TEST_CASES,
		BedrockActions.LIST_AUTOMATED_REASONING_POLICY_TEST_RESULTS,
		BedrockActions.LIST_BLUEPRINTS,
		BedrockActions.LIST_CUSTOM_MODEL_DEPLOYMENTS,
		BedrockActions.LIST_CUSTOM_MODELS,
		BedrockActions.LIST_DATA_AUTOMATION_LIBRARIES,
		BedrockActions.LIST_DATA_AUTOMATION_LIBRARY_ENTITIES,
		BedrockActions.LIST_DATA_AUTOMATION_LIBRARY_INGESTION_JOBS,
		BedrockActions.LIST_DATA_AUTOMATION_PROJECTS,
		BedrockActions.LIST_DATA_SOURCES,
		BedrockActions.LIST_ENFORCED_GUARDRAILS_CONFIGURATION,
		BedrockActions.LIST_EVALUATION_JOBS,
		BedrockActions.LIST_FLOW_ALIASES,
		BedrockActions.LIST_FLOW_EXECUTION_EVENTS,
		BedrockActions.LIST_FLOW_EXECUTIONS,
		BedrockActions.LIST_FLOW_VERSIONS,
		BedrockActions.LIST_FLOWS,
		BedrockActions.LIST_FOUNDATION_MODEL_AGREEMENT_OFFERS,
		BedrockActions.LIST_FOUNDATION_MODELS,
		BedrockActions.LIST_GUARDRAILS,
		BedrockActions.LIST_IMPORTED_MODELS,
		BedrockActions.LIST_INFERENCE_PROFILES,
		BedrockActions.LIST_INGESTION_JOBS,
		BedrockActions.LIST_INVOCATION_STEPS,
		BedrockActions.LIST_INVOCATIONS,
		BedrockActions.LIST_KNOWLEDGE_BASE_DOCUMENTS,
		BedrockActions.LIST_KNOWLEDGE_BASES,
		BedrockActions.LIST_MODEL_COPY_JOBS,
		BedrockActions.LIST_MODEL_CUSTOMIZATION_JOBS,
		BedrockActions.LIST_MODEL_EVALUATION_JOBS,
		BedrockActions.LIST_MODEL_IMPORT_JOBS,
		BedrockActions.LIST_MODEL_INVOCATION_JOBS,
		BedrockActions.LIST_PROMPT_ROUTERS,
		BedrockActions.LIST_PROMPTS,
		BedrockActions.LIST_PROVISIONED_MODEL_THROUGHPUTS,
		BedrockActions.LIST_SESSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		BedrockActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BedrockActions.TAG_RESOURCE,
		BedrockActions.UNTAG_RESOURCE,
	];
}

const AdvancedPromptOptimizationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):advanced-prompt-optimization-job/(?<resourceId>[^:/?]+)$",
);
const AgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):agent/(?<agentId>[^:/?]+)$",
);
const AgentAliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):agent-alias/(?<agentId>[^:/?]+)/(?<agentAliasId>[^:/?]+)$",
);
const ApplicationInferenceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):application-inference-profile/(?<resourceId>[^:/?]+)$",
);
const AsyncInvokeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):async-invoke/(?<resourceId>[^:/?]+)$",
);
const AutomatedReasoningPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):automated-reasoning-policy/(?<automatedReasoningPolicyId>[^:/?]+)$",
);
const AutomatedReasoningPolicyVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):automated-reasoning-policy/(?<automatedReasoningPolicyId>[^:/?]+):(?<automatedReasoningPolicyVersion>[^:/?]+)$",
);
const BedrockMarketplaceModelEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):marketplace/model-endpoint/all-access$",
);
const BlueprintArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):blueprint/(?<blueprintId>[^:/?]+)$",
);
const BlueprintOptimizationInvocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):blueprint-optimization-invocation/(?<resourceId>[^:/?]+)$",
);
const CustomModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):custom-model/(?<resourceId>[^:/?]+)$",
);
const CustomModelDeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):custom-model-deployment/(?<resourceId>[^:/?]+)$",
);
const DataAutomationInvocationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-invocation/(?<jobId>[^:/?]+)$",
);
const DataAutomationLibraryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-library/(?<dataAutomationLibraryId>[^:/?]+)$",
);
const DataAutomationLibraryIngestionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-library-ingestion-job/(?<ingestionJobId>[^:/?]+)$",
);
const DataAutomationProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-profile/(?<profileId>[^:/?]+)$",
);
const DataAutomationProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-project/(?<projectId>[^:/?]+)$",
);
const DefaultPromptRouterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):default-prompt-router/(?<resourceId>[^:/?]+)$",
);
const EvaluationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):evaluation-job/(?<resourceId>[^:/?]+)$",
);
const FlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow/(?<flowId>[^:/?]+)$",
);
const FlowAliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow/(?<flowId>[^:/?]+)/alias/(?<flowAliasId>[^:/?]+)$",
);
const FlowExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow/(?<flowId>[^:/?]+)/alias/(?<flowAliasId>[^:/?]+)/execution/(?<flowExecutionId>[^:/?]+)$",
);
const FoundationModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*)::foundation-model/(?<resourceId>[^:/?]+)$",
);
const GuardrailArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):guardrail/(?<guardrailId>[^:/?]+)$",
);
const GuardrailProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):guardrail-profile/(?<resourceId>[^:/?]+)$",
);
const ImportedModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):imported-model/(?<resourceId>[^:/?]+)$",
);
const InferenceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):inference-profile/(?<resourceId>[^:/?]+)$",
);
const KnowledgeBaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):knowledge-base/(?<knowledgeBaseId>[^:/?]+)$",
);
const ModelCopyJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-copy-job/(?<resourceId>[^:/?]+)$",
);
const ModelCustomizationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-customization-job/(?<resourceId>[^:/?]+)$",
);
const ModelEvaluationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-evaluation-job/(?<resourceId>[^:/?]+)$",
);
const ModelImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-import-job/(?<resourceId>[^:/?]+)$",
);
const ModelInvocationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-invocation-job/(?<jobIdentifier>[^:/?]+)$",
);
const PromptArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt/(?<promptId>[^:/?]+)$",
);
const PromptRouterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt-router/(?<resourceId>[^:/?]+)$",
);
const PromptVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt/(?<promptId>[^:/?]+):(?<promptVersion>[^:/?]+)$",
);
const ProvisionedModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):provisioned-model/(?<resourceId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):session/(?<sessionId>[^:/?]+)$",
);
const SystemToolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock::(?<account>[^:]*):system-tool/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bedrock resources.
 */
export class BedrockResources {
	/**
	 * Builds an ARN for the advanced-prompt-optimization-job resource.
	 */
	static advancedPromptOptimizationJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:advanced-prompt-optimization-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the advanced-prompt-optimization-job resource.
	 */
	static isValidAdvancedPromptOptimizationJobArn(arn: string): boolean {
		return AdvancedPromptOptimizationJobArnRegex.test(arn);
	}

	/**
	 * Parses a advanced-prompt-optimization-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdvancedPromptOptimizationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AdvancedPromptOptimizationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid advanced-prompt-optimization-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the agent resource.
	 */
	static agent(props: {
		/** The AgentId component of the ARN. */
		readonly agentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:agent/${props.agentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent resource.
	 */
	static isValidAgentArn(arn: string): boolean {
		return AgentArnRegex.test(arn);
	}

	/**
	 * Parses a agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentId: string;
	} {
		const match = AgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentId: match.groups!.agentId,
		};
	}

	/**
	 * Builds an ARN for the agent-alias resource.
	 */
	static agentAlias(props: {
		/** The AgentId component of the ARN. */
		readonly agentId: string;
		/** The AgentAliasId component of the ARN. */
		readonly agentAliasId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:agent-alias/${props.agentId}/${props.agentAliasId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent-alias resource.
	 */
	static isValidAgentAliasArn(arn: string): boolean {
		return AgentAliasArnRegex.test(arn);
	}

	/**
	 * Parses a agent-alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentId: string;
		agentAliasId: string;
	} {
		const match = AgentAliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent-alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentId: match.groups!.agentId,
			agentAliasId: match.groups!.agentAliasId,
		};
	}

	/**
	 * Builds an ARN for the application-inference-profile resource.
	 */
	static applicationInferenceProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:application-inference-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application-inference-profile resource.
	 */
	static isValidApplicationInferenceProfileArn(arn: string): boolean {
		return ApplicationInferenceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a application-inference-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationInferenceProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ApplicationInferenceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application-inference-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the async-invoke resource.
	 */
	static asyncInvoke(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:async-invoke/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the async-invoke resource.
	 */
	static isValidAsyncInvokeArn(arn: string): boolean {
		return AsyncInvokeArnRegex.test(arn);
	}

	/**
	 * Parses a async-invoke ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAsyncInvokeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AsyncInvokeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid async-invoke ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the automated-reasoning-policy resource.
	 */
	static automatedReasoningPolicy(props: {
		/** The AutomatedReasoningPolicyId component of the ARN. */
		readonly automatedReasoningPolicyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:automated-reasoning-policy/${props.automatedReasoningPolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automated-reasoning-policy resource.
	 */
	static isValidAutomatedReasoningPolicyArn(arn: string): boolean {
		return AutomatedReasoningPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a automated-reasoning-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomatedReasoningPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automatedReasoningPolicyId: string;
	} {
		const match = AutomatedReasoningPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automated-reasoning-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automatedReasoningPolicyId: match.groups!.automatedReasoningPolicyId,
		};
	}

	/**
	 * Builds an ARN for the automated-reasoning-policy-version resource.
	 */
	static automatedReasoningPolicyVersion(props: {
		/** The AutomatedReasoningPolicyId component of the ARN. */
		readonly automatedReasoningPolicyId: string;
		/** The AutomatedReasoningPolicyVersion component of the ARN. */
		readonly automatedReasoningPolicyVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:automated-reasoning-policy/${props.automatedReasoningPolicyId}:${props.automatedReasoningPolicyVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automated-reasoning-policy-version resource.
	 */
	static isValidAutomatedReasoningPolicyVersionArn(arn: string): boolean {
		return AutomatedReasoningPolicyVersionArnRegex.test(arn);
	}

	/**
	 * Parses a automated-reasoning-policy-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomatedReasoningPolicyVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automatedReasoningPolicyId: string;
		automatedReasoningPolicyVersion: string;
	} {
		const match = AutomatedReasoningPolicyVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automated-reasoning-policy-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automatedReasoningPolicyId: match.groups!.automatedReasoningPolicyId,
			automatedReasoningPolicyVersion:
				match.groups!.automatedReasoningPolicyVersion,
		};
	}

	/**
	 * Builds an ARN for the bedrock-marketplace-model-endpoint resource.
	 */
	static bedrockMarketplaceModelEndpoint(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:marketplace/model-endpoint/all-access`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bedrock-marketplace-model-endpoint resource.
	 */
	static isValidBedrockMarketplaceModelEndpointArn(arn: string): boolean {
		return BedrockMarketplaceModelEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a bedrock-marketplace-model-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBedrockMarketplaceModelEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = BedrockMarketplaceModelEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bedrock-marketplace-model-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the blueprint resource.
	 */
	static blueprint(props: {
		/** The BlueprintId component of the ARN. */
		readonly blueprintId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:blueprint/${props.blueprintId}`;
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
		blueprintId: string;
	} {
		const match = BlueprintArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid blueprint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			blueprintId: match.groups!.blueprintId,
		};
	}

	/**
	 * Builds an ARN for the blueprint-optimization-invocation resource.
	 */
	static blueprintOptimizationInvocation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:blueprint-optimization-invocation/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the blueprint-optimization-invocation resource.
	 */
	static isValidBlueprintOptimizationInvocationArn(arn: string): boolean {
		return BlueprintOptimizationInvocationArnRegex.test(arn);
	}

	/**
	 * Parses a blueprint-optimization-invocation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBlueprintOptimizationInvocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = BlueprintOptimizationInvocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid blueprint-optimization-invocation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the custom-model resource.
	 */
	static customModel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:custom-model/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custom-model resource.
	 */
	static isValidCustomModelArn(arn: string): boolean {
		return CustomModelArnRegex.test(arn);
	}

	/**
	 * Parses a custom-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustomModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custom-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the custom-model-deployment resource.
	 */
	static customModelDeployment(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:custom-model-deployment/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custom-model-deployment resource.
	 */
	static isValidCustomModelDeploymentArn(arn: string): boolean {
		return CustomModelDeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a custom-model-deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomModelDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustomModelDeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custom-model-deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the data-automation-invocation-job resource.
	 */
	static dataAutomationInvocationJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:data-automation-invocation/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-automation-invocation-job resource.
	 */
	static isValidDataAutomationInvocationJobArn(arn: string): boolean {
		return DataAutomationInvocationJobArnRegex.test(arn);
	}

	/**
	 * Parses a data-automation-invocation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAutomationInvocationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = DataAutomationInvocationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-automation-invocation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the data-automation-library resource.
	 */
	static dataAutomationLibrary(props: {
		/** The DataAutomationLibraryId component of the ARN. */
		readonly dataAutomationLibraryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:data-automation-library/${props.dataAutomationLibraryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-automation-library resource.
	 */
	static isValidDataAutomationLibraryArn(arn: string): boolean {
		return DataAutomationLibraryArnRegex.test(arn);
	}

	/**
	 * Parses a data-automation-library ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAutomationLibraryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataAutomationLibraryId: string;
	} {
		const match = DataAutomationLibraryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-automation-library ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataAutomationLibraryId: match.groups!.dataAutomationLibraryId,
		};
	}

	/**
	 * Builds an ARN for the data-automation-library-ingestion-job resource.
	 */
	static dataAutomationLibraryIngestionJob(props: {
		/** The IngestionJobId component of the ARN. */
		readonly ingestionJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:data-automation-library-ingestion-job/${props.ingestionJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-automation-library-ingestion-job resource.
	 */
	static isValidDataAutomationLibraryIngestionJobArn(arn: string): boolean {
		return DataAutomationLibraryIngestionJobArnRegex.test(arn);
	}

	/**
	 * Parses a data-automation-library-ingestion-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAutomationLibraryIngestionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ingestionJobId: string;
	} {
		const match = DataAutomationLibraryIngestionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid data-automation-library-ingestion-job ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ingestionJobId: match.groups!.ingestionJobId,
		};
	}

	/**
	 * Builds an ARN for the data-automation-profile resource.
	 */
	static dataAutomationProfile(props: {
		/** The ProfileId component of the ARN. */
		readonly profileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:data-automation-profile/${props.profileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-automation-profile resource.
	 */
	static isValidDataAutomationProfileArn(arn: string): boolean {
		return DataAutomationProfileArnRegex.test(arn);
	}

	/**
	 * Parses a data-automation-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAutomationProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileId: string;
	} {
		const match = DataAutomationProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-automation-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileId: match.groups!.profileId,
		};
	}

	/**
	 * Builds an ARN for the data-automation-project resource.
	 */
	static dataAutomationProject(props: {
		/** The ProjectId component of the ARN. */
		readonly projectId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:data-automation-project/${props.projectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-automation-project resource.
	 */
	static isValidDataAutomationProjectArn(arn: string): boolean {
		return DataAutomationProjectArnRegex.test(arn);
	}

	/**
	 * Parses a data-automation-project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAutomationProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectId: string;
	} {
		const match = DataAutomationProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-automation-project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectId: match.groups!.projectId,
		};
	}

	/**
	 * Builds an ARN for the default-prompt-router resource.
	 */
	static defaultPromptRouter(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:default-prompt-router/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the default-prompt-router resource.
	 */
	static isValidDefaultPromptRouterArn(arn: string): boolean {
		return DefaultPromptRouterArnRegex.test(arn);
	}

	/**
	 * Parses a default-prompt-router ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDefaultPromptRouterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DefaultPromptRouterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid default-prompt-router ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the evaluation-job resource.
	 */
	static evaluationJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:evaluation-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the evaluation-job resource.
	 */
	static isValidEvaluationJobArn(arn: string): boolean {
		return EvaluationJobArnRegex.test(arn);
	}

	/**
	 * Parses a evaluation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEvaluationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = EvaluationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid evaluation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the flow resource.
	 */
	static flow(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:flow/${props.flowId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow resource.
	 */
	static isValidFlowArn(arn: string): boolean {
		return FlowArnRegex.test(arn);
	}

	/**
	 * Parses a flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
	} {
		const match = FlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
		};
	}

	/**
	 * Builds an ARN for the flow-alias resource.
	 */
	static flowAlias(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The FlowAliasId component of the ARN. */
		readonly flowAliasId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:flow/${props.flowId}/alias/${props.flowAliasId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow-alias resource.
	 */
	static isValidFlowAliasArn(arn: string): boolean {
		return FlowAliasArnRegex.test(arn);
	}

	/**
	 * Parses a flow-alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		flowAliasId: string;
	} {
		const match = FlowAliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow-alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			flowAliasId: match.groups!.flowAliasId,
		};
	}

	/**
	 * Builds an ARN for the flow-execution resource.
	 */
	static flowExecution(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The FlowAliasId component of the ARN. */
		readonly flowAliasId: string;
		/** The FlowExecutionId component of the ARN. */
		readonly flowExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:flow/${props.flowId}/alias/${props.flowAliasId}/execution/${props.flowExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow-execution resource.
	 */
	static isValidFlowExecutionArn(arn: string): boolean {
		return FlowExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a flow-execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		flowAliasId: string;
		flowExecutionId: string;
	} {
		const match = FlowExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow-execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			flowAliasId: match.groups!.flowAliasId,
			flowExecutionId: match.groups!.flowExecutionId,
		};
	}

	/**
	 * Builds an ARN for the foundation-model resource.
	 */
	static foundationModel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}::foundation-model/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the foundation-model resource.
	 */
	static isValidFoundationModelArn(arn: string): boolean {
		return FoundationModelArnRegex.test(arn);
	}

	/**
	 * Parses a foundation-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFoundationModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FoundationModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid foundation-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the guardrail resource.
	 */
	static guardrail(props: {
		/** The GuardrailId component of the ARN. */
		readonly guardrailId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:guardrail/${props.guardrailId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the guardrail resource.
	 */
	static isValidGuardrailArn(arn: string): boolean {
		return GuardrailArnRegex.test(arn);
	}

	/**
	 * Parses a guardrail ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGuardrailArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		guardrailId: string;
	} {
		const match = GuardrailArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid guardrail ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			guardrailId: match.groups!.guardrailId,
		};
	}

	/**
	 * Builds an ARN for the guardrail-profile resource.
	 */
	static guardrailProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:guardrail-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the guardrail-profile resource.
	 */
	static isValidGuardrailProfileArn(arn: string): boolean {
		return GuardrailProfileArnRegex.test(arn);
	}

	/**
	 * Parses a guardrail-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGuardrailProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = GuardrailProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid guardrail-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the imported-model resource.
	 */
	static importedModel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:imported-model/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the imported-model resource.
	 */
	static isValidImportedModelArn(arn: string): boolean {
		return ImportedModelArnRegex.test(arn);
	}

	/**
	 * Parses a imported-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportedModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ImportedModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid imported-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the inference-profile resource.
	 */
	static inferenceProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:inference-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the inference-profile resource.
	 */
	static isValidInferenceProfileArn(arn: string): boolean {
		return InferenceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a inference-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInferenceProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = InferenceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid inference-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the knowledge-base resource.
	 */
	static knowledgeBase(props: {
		/** The KnowledgeBaseId component of the ARN. */
		readonly knowledgeBaseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:knowledge-base/${props.knowledgeBaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the knowledge-base resource.
	 */
	static isValidKnowledgeBaseArn(arn: string): boolean {
		return KnowledgeBaseArnRegex.test(arn);
	}

	/**
	 * Parses a knowledge-base ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKnowledgeBaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		knowledgeBaseId: string;
	} {
		const match = KnowledgeBaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid knowledge-base ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
		};
	}

	/**
	 * Builds an ARN for the model-copy-job resource.
	 */
	static modelCopyJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:model-copy-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-copy-job resource.
	 */
	static isValidModelCopyJobArn(arn: string): boolean {
		return ModelCopyJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-copy-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelCopyJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ModelCopyJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-copy-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the model-customization-job resource.
	 */
	static modelCustomizationJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:model-customization-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-customization-job resource.
	 */
	static isValidModelCustomizationJobArn(arn: string): boolean {
		return ModelCustomizationJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-customization-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelCustomizationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ModelCustomizationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-customization-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the model-evaluation-job resource.
	 */
	static modelEvaluationJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:model-evaluation-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-evaluation-job resource.
	 */
	static isValidModelEvaluationJobArn(arn: string): boolean {
		return ModelEvaluationJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-evaluation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelEvaluationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ModelEvaluationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-evaluation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the model-import-job resource.
	 */
	static modelImportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:model-import-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-import-job resource.
	 */
	static isValidModelImportJobArn(arn: string): boolean {
		return ModelImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-import-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ModelImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-import-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the model-invocation-job resource.
	 */
	static modelInvocationJob(props: {
		/** The JobIdentifier component of the ARN. */
		readonly jobIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:model-invocation-job/${props.jobIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-invocation-job resource.
	 */
	static isValidModelInvocationJobArn(arn: string): boolean {
		return ModelInvocationJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-invocation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelInvocationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobIdentifier: string;
	} {
		const match = ModelInvocationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-invocation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobIdentifier: match.groups!.jobIdentifier,
		};
	}

	/**
	 * Builds an ARN for the prompt resource.
	 */
	static prompt(props: {
		/** The PromptId component of the ARN. */
		readonly promptId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:prompt/${props.promptId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the prompt resource.
	 */
	static isValidPromptArn(arn: string): boolean {
		return PromptArnRegex.test(arn);
	}

	/**
	 * Parses a prompt ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePromptArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		promptId: string;
	} {
		const match = PromptArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid prompt ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			promptId: match.groups!.promptId,
		};
	}

	/**
	 * Builds an ARN for the prompt-router resource.
	 */
	static promptRouter(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:prompt-router/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the prompt-router resource.
	 */
	static isValidPromptRouterArn(arn: string): boolean {
		return PromptRouterArnRegex.test(arn);
	}

	/**
	 * Parses a prompt-router ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePromptRouterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = PromptRouterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid prompt-router ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the prompt-version resource.
	 */
	static promptVersion(props: {
		/** The PromptId component of the ARN. */
		readonly promptId: string;
		/** The PromptVersion component of the ARN. */
		readonly promptVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:prompt/${props.promptId}:${props.promptVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the prompt-version resource.
	 */
	static isValidPromptVersionArn(arn: string): boolean {
		return PromptVersionArnRegex.test(arn);
	}

	/**
	 * Parses a prompt-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePromptVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		promptId: string;
		promptVersion: string;
	} {
		const match = PromptVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid prompt-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			promptId: match.groups!.promptId,
			promptVersion: match.groups!.promptVersion,
		};
	}

	/**
	 * Builds an ARN for the provisioned-model resource.
	 */
	static provisionedModel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:provisioned-model/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the provisioned-model resource.
	 */
	static isValidProvisionedModelArn(arn: string): boolean {
		return ProvisionedModelArnRegex.test(arn);
	}

	/**
	 * Parses a provisioned-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProvisionedModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProvisionedModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid provisioned-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
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
		return `arn:${props.partition ?? "aws"}:bedrock:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.sessionId}`;
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
	 * Builds an ARN for the system-tool resource.
	 */
	static systemTool(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock::${props.account ?? "*"}:system-tool/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the system-tool resource.
	 */
	static isValidSystemToolArn(arn: string): boolean {
		return SystemToolArnRegex.test(arn);
	}

	/**
	 * Parses a system-tool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSystemToolArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = SystemToolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid system-tool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for bedrock.
 */
export class BedrockOperations {
	/** IAM actions required for the AgenticRetrieveStream API call. */
	static readonly AGENTIC_RETRIEVE_STREAM: string[] = [
		"bedrock:AgenticRetrieveStream",
		"bedrock:Retrieve",
	];
	/** IAM actions required for the ApplyGuardrail API call. */
	static readonly APPLY_GUARDRAIL: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeAutomatedReasoningPolicy",
	];
	/** IAM actions required for the AssociateAgentCollaborator API call. */
	static readonly ASSOCIATE_AGENT_COLLABORATOR: string[] = [
		"bedrock:AssociateAgentCollaborator",
	];
	/** IAM actions required for the AssociateAgentKnowledgeBase API call. */
	static readonly ASSOCIATE_AGENT_KNOWLEDGE_BASE: string[] = [
		"bedrock:AssociateAgentKnowledgeBase",
	];
	/** IAM actions required for the BatchDeleteAdvancedPromptOptimizationJob API call. */
	static readonly BATCH_DELETE_ADVANCED_PROMPT_OPTIMIZATION_JOB: string[] = [
		"bedrock:BatchDeleteAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the BatchDeleteEvaluationJob API call. */
	static readonly BATCH_DELETE_EVALUATION_JOB: string[] = [
		"bedrock:BatchDeleteEvaluationJob",
	];
	/** IAM actions required for the CancelAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly CANCEL_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW: string[] = [
		"bedrock:CancelAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the Converse API call. */
	static readonly CONVERSE: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the ConverseStream API call. */
	static readonly CONVERSE_STREAM: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModelWithResponseStream",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the CopyBlueprintStage API call. */
	static readonly COPY_BLUEPRINT_STAGE: string[] = [
		"bedrock:CopyBlueprintStage",
	];
	/** IAM actions required for the CountTokens API call. */
	static readonly COUNT_TOKENS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CountTokens",
	];
	/** IAM actions required for the CreateAdvancedPromptOptimizationJob API call. */
	static readonly CREATE_ADVANCED_PROMPT_OPTIMIZATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAdvancedPromptOptimizationJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAgent API call. */
	static readonly CREATE_AGENT: string[] = [
		"bedrock:CreateAgent",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAgentActionGroup API call. */
	static readonly CREATE_AGENT_ACTION_GROUP: string[] = [
		"bedrock:CreateAgentActionGroup",
	];
	/** IAM actions required for the CreateAgentAlias API call. */
	static readonly CREATE_AGENT_ALIAS: string[] = [
		"bedrock:CreateAgentAlias",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicy API call. */
	static readonly CREATE_AUTOMATED_REASONING_POLICY: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicy",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicyTestCase API call. */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_TEST_CASE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicyVersion API call. */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_VERSION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicyVersion",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateBlueprint API call. */
	static readonly CREATE_BLUEPRINT: string[] = [
		"bedrock:CreateBlueprint",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateBlueprintVersion API call. */
	static readonly CREATE_BLUEPRINT_VERSION: string[] = [
		"bedrock:CreateBlueprintVersion",
	];
	/** IAM actions required for the CreateCustomModel API call. */
	static readonly CREATE_CUSTOM_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateCustomModel",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateCustomModelDeployment API call. */
	static readonly CREATE_CUSTOM_MODEL_DEPLOYMENT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateCustomModelDeployment",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataAutomationLibrary API call. */
	static readonly CREATE_DATA_AUTOMATION_LIBRARY: string[] = [
		"bedrock:CreateDataAutomationLibrary",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataAutomationProject API call. */
	static readonly CREATE_DATA_AUTOMATION_PROJECT: string[] = [
		"bedrock:CreateDataAutomationProject",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = ["bedrock:CreateDataSource"];
	/** IAM actions required for the CreateEvaluationJob API call. */
	static readonly CREATE_EVALUATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateEvaluationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CREATE_FLOW: string[] = [
		"bedrock:CreateFlow",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlowAlias API call. */
	static readonly CREATE_FLOW_ALIAS: string[] = [
		"bedrock:CreateFlowAlias",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlowVersion API call. */
	static readonly CREATE_FLOW_VERSION: string[] = ["bedrock:CreateFlowVersion"];
	/** IAM actions required for the CreateFoundationModelAgreement API call. */
	static readonly CREATE_FOUNDATION_MODEL_AGREEMENT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateFoundationModelAgreement",
	];
	/** IAM actions required for the CreateGuardrail API call. */
	static readonly CREATE_GUARDRAIL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateGuardrail",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateGuardrailVersion API call. */
	static readonly CREATE_GUARDRAIL_VERSION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateGuardrailVersion",
	];
	/** IAM actions required for the CreateInferenceProfile API call. */
	static readonly CREATE_INFERENCE_PROFILE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateInferenceProfile",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateInvocation API call. */
	static readonly CREATE_INVOCATION: string[] = ["bedrock:CreateInvocation"];
	/** IAM actions required for the CreateKnowledgeBase API call. */
	static readonly CREATE_KNOWLEDGE_BASE: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:CreateKnowledgeBase",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateMarketplaceModelEndpoint API call. */
	static readonly CREATE_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateMarketplaceModelEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelCopyJob API call. */
	static readonly CREATE_MODEL_COPY_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelCopyJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelCustomizationJob API call. */
	static readonly CREATE_MODEL_CUSTOMIZATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelCustomizationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelImportJob API call. */
	static readonly CREATE_MODEL_IMPORT_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelImportJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelInvocationJob API call. */
	static readonly CREATE_MODEL_INVOCATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelInvocationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePrompt API call. */
	static readonly CREATE_PROMPT: string[] = [
		"bedrock:CreatePrompt",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePromptRouter API call. */
	static readonly CREATE_PROMPT_ROUTER: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreatePromptRouter",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePromptVersion API call. */
	static readonly CREATE_PROMPT_VERSION: string[] = [
		"bedrock:CreatePromptVersion",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateProvisionedModelThroughput API call. */
	static readonly CREATE_PROVISIONED_MODEL_THROUGHPUT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateProvisionedModelThroughput",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CREATE_SESSION: string[] = [
		"bedrock:CreateSession",
		"bedrock:TagResource",
	];
	/** IAM actions required for the DeleteAgent API call. */
	static readonly DELETE_AGENT: string[] = ["bedrock:DeleteAgent"];
	/** IAM actions required for the DeleteAgentActionGroup API call. */
	static readonly DELETE_AGENT_ACTION_GROUP: string[] = [
		"bedrock:DeleteAgentActionGroup",
	];
	/** IAM actions required for the DeleteAgentAlias API call. */
	static readonly DELETE_AGENT_ALIAS: string[] = ["bedrock:DeleteAgentAlias"];
	/** IAM actions required for the DeleteAgentMemory API call. */
	static readonly DELETE_AGENT_MEMORY: string[] = ["bedrock:DeleteAgentMemory"];
	/** IAM actions required for the DeleteAgentVersion API call. */
	static readonly DELETE_AGENT_VERSION: string[] = [
		"bedrock:DeleteAgentVersion",
	];
	/** IAM actions required for the DeleteAutomatedReasoningPolicy API call. */
	static readonly DELETE_AUTOMATED_REASONING_POLICY: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteAutomatedReasoningPolicy",
	];
	/** IAM actions required for the DeleteAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly DELETE_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW: string[] = [
		"bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the DeleteAutomatedReasoningPolicyTestCase API call. */
	static readonly DELETE_AUTOMATED_REASONING_POLICY_TEST_CASE: string[] = [
		"bedrock:DeleteAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the DeleteBlueprint API call. */
	static readonly DELETE_BLUEPRINT: string[] = ["bedrock:DeleteBlueprint"];
	/** IAM actions required for the DeleteCustomModel API call. */
	static readonly DELETE_CUSTOM_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteCustomModel",
	];
	/** IAM actions required for the DeleteCustomModelDeployment API call. */
	static readonly DELETE_CUSTOM_MODEL_DEPLOYMENT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteCustomModelDeployment",
	];
	/** IAM actions required for the DeleteDataAutomationLibrary API call. */
	static readonly DELETE_DATA_AUTOMATION_LIBRARY: string[] = [
		"bedrock:DeleteDataAutomationLibrary",
	];
	/** IAM actions required for the DeleteDataAutomationProject API call. */
	static readonly DELETE_DATA_AUTOMATION_PROJECT: string[] = [
		"bedrock:DeleteDataAutomationProject",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["bedrock:DeleteDataSource"];
	/** IAM actions required for the DeleteEnforcedGuardrailConfiguration API call. */
	static readonly DELETE_ENFORCED_GUARDRAIL_CONFIGURATION: string[] = [
		"bedrock:DeleteEnforcedGuardrailConfiguration",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DELETE_FLOW: string[] = ["bedrock:DeleteFlow"];
	/** IAM actions required for the DeleteFlowAlias API call. */
	static readonly DELETE_FLOW_ALIAS: string[] = ["bedrock:DeleteFlowAlias"];
	/** IAM actions required for the DeleteFlowVersion API call. */
	static readonly DELETE_FLOW_VERSION: string[] = ["bedrock:DeleteFlowVersion"];
	/** IAM actions required for the DeleteFoundationModelAgreement API call. */
	static readonly DELETE_FOUNDATION_MODEL_AGREEMENT: string[] = [
		"bedrock:DeleteFoundationModelAgreement",
	];
	/** IAM actions required for the DeleteGuardrail API call. */
	static readonly DELETE_GUARDRAIL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteGuardrail",
	];
	/** IAM actions required for the DeleteImportedModel API call. */
	static readonly DELETE_IMPORTED_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteImportedModel",
	];
	/** IAM actions required for the DeleteInferenceProfile API call. */
	static readonly DELETE_INFERENCE_PROFILE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteInferenceProfile",
	];
	/** IAM actions required for the DeleteKnowledgeBase API call. */
	static readonly DELETE_KNOWLEDGE_BASE: string[] = [
		"bedrock:DeleteKnowledgeBase",
	];
	/** IAM actions required for the DeleteKnowledgeBaseDocuments API call. */
	static readonly DELETE_KNOWLEDGE_BASE_DOCUMENTS: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:DeleteKnowledgeBaseDocuments",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the DeleteMarketplaceModelEndpoint API call. */
	static readonly DELETE_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteMarketplaceModelEndpoint",
	];
	/** IAM actions required for the DeleteModelInvocationLoggingConfiguration API call. */
	static readonly DELETE_MODEL_INVOCATION_LOGGING_CONFIGURATION: string[] = [
		"bedrock:DeleteModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the DeletePrompt API call. */
	static readonly DELETE_PROMPT: string[] = ["bedrock:DeletePrompt"];
	/** IAM actions required for the DeletePromptRouter API call. */
	static readonly DELETE_PROMPT_ROUTER: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeletePromptRouter",
	];
	/** IAM actions required for the DeleteProvisionedModelThroughput API call. */
	static readonly DELETE_PROVISIONED_MODEL_THROUGHPUT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteProvisionedModelThroughput",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"bedrock:DeleteResourcePolicy",
		"bedrock:PutResourcePolicy",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DELETE_SESSION: string[] = ["bedrock:DeleteSession"];
	/** IAM actions required for the DeregisterMarketplaceModelEndpoint API call. */
	static readonly DEREGISTER_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:DeregisterMarketplaceModelEndpoint",
	];
	/** IAM actions required for the DisassociateAgentCollaborator API call. */
	static readonly DISASSOCIATE_AGENT_COLLABORATOR: string[] = [
		"bedrock:DisassociateAgentCollaborator",
	];
	/** IAM actions required for the DisassociateAgentKnowledgeBase API call. */
	static readonly DISASSOCIATE_AGENT_KNOWLEDGE_BASE: string[] = [
		"bedrock:DisassociateAgentKnowledgeBase",
	];
	/** IAM actions required for the EndSession API call. */
	static readonly END_SESSION: string[] = ["bedrock:EndSession"];
	/** IAM actions required for the ExportAutomatedReasoningPolicyVersion API call. */
	static readonly EXPORT_AUTOMATED_REASONING_POLICY_VERSION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ExportAutomatedReasoningPolicyVersion",
	];
	/** IAM actions required for the GenerateQuery API call. */
	static readonly GENERATE_QUERY: string[] = [
		"bedrock:GenerateQuery",
		"bedrock:GetKnowledgeBase",
	];
	/** IAM actions required for the GetAccountDataRetention API call. */
	static readonly GET_ACCOUNT_DATA_RETENTION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAccountDataRetention",
	];
	/** IAM actions required for the GetAdvancedPromptOptimizationJob API call. */
	static readonly GET_ADVANCED_PROMPT_OPTIMIZATION_JOB: string[] = [
		"bedrock:GetAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the GetAgent API call. */
	static readonly GET_AGENT: string[] = ["bedrock:GetAgent"];
	/** IAM actions required for the GetAgentActionGroup API call. */
	static readonly GET_AGENT_ACTION_GROUP: string[] = [
		"bedrock:GetAgentActionGroup",
	];
	/** IAM actions required for the GetAgentAlias API call. */
	static readonly GET_AGENT_ALIAS: string[] = ["bedrock:GetAgentAlias"];
	/** IAM actions required for the GetAgentCollaborator API call. */
	static readonly GET_AGENT_COLLABORATOR: string[] = [
		"bedrock:GetAgentCollaborator",
	];
	/** IAM actions required for the GetAgentKnowledgeBase API call. */
	static readonly GET_AGENT_KNOWLEDGE_BASE: string[] = [
		"bedrock:GetAgentKnowledgeBase",
	];
	/** IAM actions required for the GetAgentMemory API call. */
	static readonly GET_AGENT_MEMORY: string[] = ["bedrock:GetAgentMemory"];
	/** IAM actions required for the GetAgentVersion API call. */
	static readonly GET_AGENT_VERSION: string[] = ["bedrock:GetAgentVersion"];
	/** IAM actions required for the GetAsyncInvoke API call. */
	static readonly GET_ASYNC_INVOKE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAsyncInvoke",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicy API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAutomatedReasoningPolicy",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyAnnotations API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_ANNOTATIONS: string[] = [
		"bedrock:GetAutomatedReasoningPolicyAnnotations",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW: string[] = [
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflowResultAssets API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW_RESULT_ASSETS: string[] =
		["bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets"];
	/** IAM actions required for the GetAutomatedReasoningPolicyNextScenario API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_NEXT_SCENARIO: string[] = [
		"bedrock:GetAutomatedReasoningPolicyNextScenario",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyTestCase API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_TEST_CASE: string[] = [
		"bedrock:GetAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyTestResult API call. */
	static readonly GET_AUTOMATED_REASONING_POLICY_TEST_RESULT: string[] = [
		"bedrock:GetAutomatedReasoningPolicyTestResult",
	];
	/** IAM actions required for the GetBlueprint API call. */
	static readonly GET_BLUEPRINT: string[] = ["bedrock:GetBlueprint"];
	/** IAM actions required for the GetBlueprintOptimizationStatus API call. */
	static readonly GET_BLUEPRINT_OPTIMIZATION_STATUS: string[] = [
		"bedrock:GetBlueprintOptimizationStatus",
	];
	/** IAM actions required for the GetCustomModel API call. */
	static readonly GET_CUSTOM_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetCustomModel",
	];
	/** IAM actions required for the GetCustomModelDeployment API call. */
	static readonly GET_CUSTOM_MODEL_DEPLOYMENT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetCustomModelDeployment",
	];
	/** IAM actions required for the GetDataAutomationLibrary API call. */
	static readonly GET_DATA_AUTOMATION_LIBRARY: string[] = [
		"bedrock:GetDataAutomationLibrary",
	];
	/** IAM actions required for the GetDataAutomationLibraryEntity API call. */
	static readonly GET_DATA_AUTOMATION_LIBRARY_ENTITY: string[] = [
		"bedrock:GetDataAutomationLibraryEntity",
	];
	/** IAM actions required for the GetDataAutomationLibraryIngestionJob API call. */
	static readonly GET_DATA_AUTOMATION_LIBRARY_INGESTION_JOB: string[] = [
		"bedrock:GetDataAutomationLibraryIngestionJob",
	];
	/** IAM actions required for the GetDataAutomationProject API call. */
	static readonly GET_DATA_AUTOMATION_PROJECT: string[] = [
		"bedrock:GetDataAutomationProject",
	];
	/** IAM actions required for the GetDataAutomationStatus API call. */
	static readonly GET_DATA_AUTOMATION_STATUS: string[] = [
		"bedrock:GetDataAutomationStatus",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["bedrock:GetDataSource"];
	/** IAM actions required for the GetDocumentContent API call. */
	static readonly GET_DOCUMENT_CONTENT: string[] = [
		"bedrock:GetDocumentContent",
		"bedrock:Retrieve",
	];
	/** IAM actions required for the GetEvaluationJob API call. */
	static readonly GET_EVALUATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetEvaluationJob",
	];
	/** IAM actions required for the GetExecutionFlowSnapshot API call. */
	static readonly GET_EXECUTION_FLOW_SNAPSHOT: string[] = [
		"bedrock:GetExecutionFlowSnapshot",
	];
	/** IAM actions required for the GetFlow API call. */
	static readonly GET_FLOW: string[] = ["bedrock:GetFlow"];
	/** IAM actions required for the GetFlowAlias API call. */
	static readonly GET_FLOW_ALIAS: string[] = ["bedrock:GetFlowAlias"];
	/** IAM actions required for the GetFlowExecution API call. */
	static readonly GET_FLOW_EXECUTION: string[] = ["bedrock:GetFlowExecution"];
	/** IAM actions required for the GetFlowVersion API call. */
	static readonly GET_FLOW_VERSION: string[] = ["bedrock:GetFlowVersion"];
	/** IAM actions required for the GetFoundationModel API call. */
	static readonly GET_FOUNDATION_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetFoundationModel",
	];
	/** IAM actions required for the GetFoundationModelAvailability API call. */
	static readonly GET_FOUNDATION_MODEL_AVAILABILITY: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetFoundationModelAvailability",
	];
	/** IAM actions required for the GetGuardrail API call. */
	static readonly GET_GUARDRAIL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetGuardrail",
	];
	/** IAM actions required for the GetImportedModel API call. */
	static readonly GET_IMPORTED_MODEL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetImportedModel",
	];
	/** IAM actions required for the GetInferenceProfile API call. */
	static readonly GET_INFERENCE_PROFILE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetInferenceProfile",
	];
	/** IAM actions required for the GetIngestionJob API call. */
	static readonly GET_INGESTION_JOB: string[] = ["bedrock:GetIngestionJob"];
	/** IAM actions required for the GetInvocationStep API call. */
	static readonly GET_INVOCATION_STEP: string[] = ["bedrock:GetInvocationStep"];
	/** IAM actions required for the GetKnowledgeBase API call. */
	static readonly GET_KNOWLEDGE_BASE: string[] = ["bedrock:GetKnowledgeBase"];
	/** IAM actions required for the GetKnowledgeBaseDocuments API call. */
	static readonly GET_KNOWLEDGE_BASE_DOCUMENTS: string[] = [
		"bedrock:GetKnowledgeBaseDocuments",
	];
	/** IAM actions required for the GetMarketplaceModelEndpoint API call. */
	static readonly GET_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetMarketplaceModelEndpoint",
	];
	/** IAM actions required for the GetModelCopyJob API call. */
	static readonly GET_MODEL_COPY_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelCopyJob",
	];
	/** IAM actions required for the GetModelCustomizationJob API call. */
	static readonly GET_MODEL_CUSTOMIZATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelCustomizationJob",
	];
	/** IAM actions required for the GetModelImportJob API call. */
	static readonly GET_MODEL_IMPORT_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelImportJob",
	];
	/** IAM actions required for the GetModelInvocationJob API call. */
	static readonly GET_MODEL_INVOCATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelInvocationJob",
	];
	/** IAM actions required for the GetModelInvocationLoggingConfiguration API call. */
	static readonly GET_MODEL_INVOCATION_LOGGING_CONFIGURATION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the GetPrompt API call. */
	static readonly GET_PROMPT: string[] = ["bedrock:GetPrompt"];
	/** IAM actions required for the GetPromptRouter API call. */
	static readonly GET_PROMPT_ROUTER: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetPromptRouter",
	];
	/** IAM actions required for the GetProvisionedModelThroughput API call. */
	static readonly GET_PROVISIONED_MODEL_THROUGHPUT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetProvisionedModelThroughput",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["bedrock:GetResourcePolicy"];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["bedrock:GetSession"];
	/** IAM actions required for the GetUseCaseForModelAccess API call. */
	static readonly GET_USE_CASE_FOR_MODEL_ACCESS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetUseCaseForModelAccess",
	];
	/** IAM actions required for the IngestKnowledgeBaseDocuments API call. */
	static readonly INGEST_KNOWLEDGE_BASE_DOCUMENTS: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:IngestKnowledgeBaseDocuments",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the InvokeAgent API call. */
	static readonly INVOKE_AGENT: string[] = ["bedrock:InvokeAgent"];
	/** IAM actions required for the InvokeBlueprintOptimizationAsync API call. */
	static readonly INVOKE_BLUEPRINT_OPTIMIZATION_ASYNC: string[] = [
		"bedrock:InvokeBlueprintOptimizationAsync",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeDataAutomation API call. */
	static readonly INVOKE_DATA_AUTOMATION: string[] = [
		"bedrock:InvokeDataAutomation",
	];
	/** IAM actions required for the InvokeDataAutomationAsync API call. */
	static readonly INVOKE_DATA_AUTOMATION_ASYNC: string[] = [
		"bedrock:InvokeDataAutomationAsync",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeDataAutomationLibraryIngestionJob API call. */
	static readonly INVOKE_DATA_AUTOMATION_LIBRARY_INGESTION_JOB: string[] = [
		"bedrock:InvokeDataAutomationLibraryIngestionJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeFlow API call. */
	static readonly INVOKE_FLOW: string[] = ["bedrock:InvokeFlow"];
	/** IAM actions required for the InvokeGuardrailChecks API call. */
	static readonly INVOKE_GUARDRAIL_CHECKS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeGuardrailChecks",
	];
	/** IAM actions required for the InvokeInlineAgent API call. */
	static readonly INVOKE_INLINE_AGENT: string[] = ["bedrock:InvokeInlineAgent"];
	/** IAM actions required for the InvokeModel API call. */
	static readonly INVOKE_MODEL: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the InvokeModelWithBidirectionalStream API call. */
	static readonly INVOKE_MODEL_WITH_BIDIRECTIONAL_STREAM: string[] = [
		"bedrock:InvokeModel",
	];
	/** IAM actions required for the InvokeModelWithResponseStream API call. */
	static readonly INVOKE_MODEL_WITH_RESPONSE_STREAM: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeModelWithResponseStream",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the ListAdvancedPromptOptimizationJobs API call. */
	static readonly LIST_ADVANCED_PROMPT_OPTIMIZATION_JOBS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAdvancedPromptOptimizationJobs",
	];
	/** IAM actions required for the ListAgentActionGroups API call. */
	static readonly LIST_AGENT_ACTION_GROUPS: string[] = [
		"bedrock:ListAgentActionGroups",
	];
	/** IAM actions required for the ListAgentAliases API call. */
	static readonly LIST_AGENT_ALIASES: string[] = ["bedrock:ListAgentAliases"];
	/** IAM actions required for the ListAgentCollaborators API call. */
	static readonly LIST_AGENT_COLLABORATORS: string[] = [
		"bedrock:ListAgentCollaborators",
	];
	/** IAM actions required for the ListAgentKnowledgeBases API call. */
	static readonly LIST_AGENT_KNOWLEDGE_BASES: string[] = [
		"bedrock:ListAgentKnowledgeBases",
	];
	/** IAM actions required for the ListAgentVersions API call. */
	static readonly LIST_AGENT_VERSIONS: string[] = ["bedrock:ListAgentVersions"];
	/** IAM actions required for the ListAgents API call. */
	static readonly LIST_AGENTS: string[] = ["bedrock:ListAgents"];
	/** IAM actions required for the ListAsyncInvokes API call. */
	static readonly LIST_ASYNC_INVOKES: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAsyncInvokes",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicies API call. */
	static readonly LIST_AUTOMATED_REASONING_POLICIES: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAutomatedReasoningPolicies",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyBuildWorkflows API call. */
	static readonly LIST_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOWS: string[] = [
		"bedrock:ListAutomatedReasoningPolicyBuildWorkflows",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyTestCases API call. */
	static readonly LIST_AUTOMATED_REASONING_POLICY_TEST_CASES: string[] = [
		"bedrock:ListAutomatedReasoningPolicyTestCases",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyTestResults API call. */
	static readonly LIST_AUTOMATED_REASONING_POLICY_TEST_RESULTS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAutomatedReasoningPolicyTestResults",
	];
	/** IAM actions required for the ListBlueprints API call. */
	static readonly LIST_BLUEPRINTS: string[] = ["bedrock:ListBlueprints"];
	/** IAM actions required for the ListCustomModelDeployments API call. */
	static readonly LIST_CUSTOM_MODEL_DEPLOYMENTS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListCustomModelDeployments",
	];
	/** IAM actions required for the ListCustomModels API call. */
	static readonly LIST_CUSTOM_MODELS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListCustomModels",
	];
	/** IAM actions required for the ListDataAutomationLibraries API call. */
	static readonly LIST_DATA_AUTOMATION_LIBRARIES: string[] = [
		"bedrock:ListDataAutomationLibraries",
	];
	/** IAM actions required for the ListDataAutomationLibraryEntities API call. */
	static readonly LIST_DATA_AUTOMATION_LIBRARY_ENTITIES: string[] = [
		"bedrock:ListDataAutomationLibraryEntities",
	];
	/** IAM actions required for the ListDataAutomationLibraryIngestionJobs API call. */
	static readonly LIST_DATA_AUTOMATION_LIBRARY_INGESTION_JOBS: string[] = [
		"bedrock:ListDataAutomationLibraryIngestionJobs",
	];
	/** IAM actions required for the ListDataAutomationProjects API call. */
	static readonly LIST_DATA_AUTOMATION_PROJECTS: string[] = [
		"bedrock:ListDataAutomationProjects",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["bedrock:ListDataSources"];
	/** IAM actions required for the ListEnforcedGuardrailsConfiguration API call. */
	static readonly LIST_ENFORCED_GUARDRAILS_CONFIGURATION: string[] = [
		"bedrock:ListEnforcedGuardrailsConfiguration",
	];
	/** IAM actions required for the ListEvaluationJobs API call. */
	static readonly LIST_EVALUATION_JOBS: string[] = [
		"bedrock:ListEvaluationJobs",
	];
	/** IAM actions required for the ListFlowAliases API call. */
	static readonly LIST_FLOW_ALIASES: string[] = ["bedrock:ListFlowAliases"];
	/** IAM actions required for the ListFlowExecutionEvents API call. */
	static readonly LIST_FLOW_EXECUTION_EVENTS: string[] = [
		"bedrock:ListFlowExecutionEvents",
	];
	/** IAM actions required for the ListFlowExecutions API call. */
	static readonly LIST_FLOW_EXECUTIONS: string[] = [
		"bedrock:ListFlowExecutions",
	];
	/** IAM actions required for the ListFlowVersions API call. */
	static readonly LIST_FLOW_VERSIONS: string[] = ["bedrock:ListFlowVersions"];
	/** IAM actions required for the ListFlows API call. */
	static readonly LIST_FLOWS: string[] = ["bedrock:ListFlows"];
	/** IAM actions required for the ListFoundationModelAgreementOffers API call. */
	static readonly LIST_FOUNDATION_MODEL_AGREEMENT_OFFERS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListFoundationModelAgreementOffers",
	];
	/** IAM actions required for the ListFoundationModels API call. */
	static readonly LIST_FOUNDATION_MODELS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListFoundationModels",
	];
	/** IAM actions required for the ListGuardrails API call. */
	static readonly LIST_GUARDRAILS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListGuardrails",
	];
	/** IAM actions required for the ListImportedModels API call. */
	static readonly LIST_IMPORTED_MODELS: string[] = [
		"bedrock:ListImportedModels",
	];
	/** IAM actions required for the ListInferenceProfiles API call. */
	static readonly LIST_INFERENCE_PROFILES: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListInferenceProfiles",
	];
	/** IAM actions required for the ListIngestionJobs API call. */
	static readonly LIST_INGESTION_JOBS: string[] = ["bedrock:ListIngestionJobs"];
	/** IAM actions required for the ListInvocationSteps API call. */
	static readonly LIST_INVOCATION_STEPS: string[] = [
		"bedrock:ListInvocationSteps",
		"bedrock:ListInvocations",
	];
	/** IAM actions required for the ListInvocations API call. */
	static readonly LIST_INVOCATIONS: string[] = ["bedrock:ListInvocations"];
	/** IAM actions required for the ListKnowledgeBaseDocuments API call. */
	static readonly LIST_KNOWLEDGE_BASE_DOCUMENTS: string[] = [
		"bedrock:ListKnowledgeBaseDocuments",
	];
	/** IAM actions required for the ListKnowledgeBases API call. */
	static readonly LIST_KNOWLEDGE_BASES: string[] = [
		"bedrock:ListKnowledgeBases",
	];
	/** IAM actions required for the ListMarketplaceModelEndpoints API call. */
	static readonly LIST_MARKETPLACE_MODEL_ENDPOINTS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListMarketplaceModelEndpoints",
	];
	/** IAM actions required for the ListModelCopyJobs API call. */
	static readonly LIST_MODEL_COPY_JOBS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelCopyJobs",
	];
	/** IAM actions required for the ListModelCustomizationJobs API call. */
	static readonly LIST_MODEL_CUSTOMIZATION_JOBS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelCustomizationJobs",
	];
	/** IAM actions required for the ListModelImportJobs API call. */
	static readonly LIST_MODEL_IMPORT_JOBS: string[] = [
		"bedrock:ListModelImportJobs",
	];
	/** IAM actions required for the ListModelInvocationJobs API call. */
	static readonly LIST_MODEL_INVOCATION_JOBS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelInvocationJobs",
	];
	/** IAM actions required for the ListPromptRouters API call. */
	static readonly LIST_PROMPT_ROUTERS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListPromptRouters",
	];
	/** IAM actions required for the ListPrompts API call. */
	static readonly LIST_PROMPTS: string[] = ["bedrock:ListPrompts"];
	/** IAM actions required for the ListProvisionedModelThroughputs API call. */
	static readonly LIST_PROVISIONED_MODEL_THROUGHPUTS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListProvisionedModelThroughputs",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["bedrock:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListTagsForResource",
	];
	/** IAM actions required for the OptimizePrompt API call. */
	static readonly OPTIMIZE_PROMPT: string[] = ["bedrock:OptimizePrompt"];
	/** IAM actions required for the PrepareAgent API call. */
	static readonly PREPARE_AGENT: string[] = ["bedrock:PrepareAgent"];
	/** IAM actions required for the PrepareFlow API call. */
	static readonly PREPARE_FLOW: string[] = ["bedrock:PrepareFlow"];
	/** IAM actions required for the PutAccountDataRetention API call. */
	static readonly PUT_ACCOUNT_DATA_RETENTION: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:PutAccountDataRetention",
	];
	/** IAM actions required for the PutEnforcedGuardrailConfiguration API call. */
	static readonly PUT_ENFORCED_GUARDRAIL_CONFIGURATION: string[] = [
		"bedrock:PutEnforcedGuardrailConfiguration",
	];
	/** IAM actions required for the PutInvocationStep API call. */
	static readonly PUT_INVOCATION_STEP: string[] = ["bedrock:PutInvocationStep"];
	/** IAM actions required for the PutModelInvocationLoggingConfiguration API call. */
	static readonly PUT_MODEL_INVOCATION_LOGGING_CONFIGURATION: string[] = [
		"bedrock:CallWithBearerToken",
		"iam:PassRole",
		"bedrock:PutModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["bedrock:PutResourcePolicy"];
	/** IAM actions required for the PutUseCaseForModelAccess API call. */
	static readonly PUT_USE_CASE_FOR_MODEL_ACCESS: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:PutUseCaseForModelAccess",
	];
	/** IAM actions required for the RegisterMarketplaceModelEndpoint API call. */
	static readonly REGISTER_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:RegisterMarketplaceModelEndpoint",
	];
	/** IAM actions required for the Rerank API call. */
	static readonly RERANK: string[] = ["bedrock:Rerank"];
	/** IAM actions required for the Retrieve API call. */
	static readonly RETRIEVE: string[] = ["bedrock:Retrieve"];
	/** IAM actions required for the RetrieveAndGenerate API call. */
	static readonly RETRIEVE_AND_GENERATE: string[] = [
		"bedrock:RetrieveAndGenerate",
	];
	/** IAM actions required for the RetrieveAndGenerateStream API call. */
	static readonly RETRIEVE_AND_GENERATE_STREAM: string[] = [
		"bedrock:RetrieveAndGenerate",
	];
	/** IAM actions required for the StartAsyncInvoke API call. */
	static readonly START_ASYNC_INVOKE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:TagResource",
	];
	/** IAM actions required for the StartAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly START_AUTOMATED_REASONING_POLICY_BUILD_WORKFLOW: string[] = [
		"bedrock:StartAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the StartAutomatedReasoningPolicyTestWorkflow API call. */
	static readonly START_AUTOMATED_REASONING_POLICY_TEST_WORKFLOW: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeAutomatedReasoningPolicy",
		"bedrock:StartAutomatedReasoningPolicyTestWorkflow",
	];
	/** IAM actions required for the StartFlowExecution API call. */
	static readonly START_FLOW_EXECUTION: string[] = [
		"bedrock:StartFlowExecution",
	];
	/** IAM actions required for the StartIngestionJob API call. */
	static readonly START_INGESTION_JOB: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the StopAdvancedPromptOptimizationJob API call. */
	static readonly STOP_ADVANCED_PROMPT_OPTIMIZATION_JOB: string[] = [
		"bedrock:StopAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the StopEvaluationJob API call. */
	static readonly STOP_EVALUATION_JOB: string[] = ["bedrock:StopEvaluationJob"];
	/** IAM actions required for the StopFlowExecution API call. */
	static readonly STOP_FLOW_EXECUTION: string[] = ["bedrock:StopFlowExecution"];
	/** IAM actions required for the StopIngestionJob API call. */
	static readonly STOP_INGESTION_JOB: string[] = ["bedrock:StopIngestionJob"];
	/** IAM actions required for the StopModelCustomizationJob API call. */
	static readonly STOP_MODEL_CUSTOMIZATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:StopModelCustomizationJob",
	];
	/** IAM actions required for the StopModelInvocationJob API call. */
	static readonly STOP_MODEL_INVOCATION_JOB: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:StopModelInvocationJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UntagResource",
	];
	/** IAM actions required for the UpdateAgent API call. */
	static readonly UPDATE_AGENT: string[] = [
		"iam:PassRole",
		"bedrock:UpdateAgent",
	];
	/** IAM actions required for the UpdateAgentActionGroup API call. */
	static readonly UPDATE_AGENT_ACTION_GROUP: string[] = [
		"bedrock:UpdateAgentActionGroup",
	];
	/** IAM actions required for the UpdateAgentAlias API call. */
	static readonly UPDATE_AGENT_ALIAS: string[] = ["bedrock:UpdateAgentAlias"];
	/** IAM actions required for the UpdateAgentCollaborator API call. */
	static readonly UPDATE_AGENT_COLLABORATOR: string[] = [
		"bedrock:UpdateAgentCollaborator",
	];
	/** IAM actions required for the UpdateAgentKnowledgeBase API call. */
	static readonly UPDATE_AGENT_KNOWLEDGE_BASE: string[] = [
		"bedrock:UpdateAgentKnowledgeBase",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicy API call. */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateAutomatedReasoningPolicy",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicyAnnotations API call. */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY_ANNOTATIONS: string[] = [
		"bedrock:UpdateAutomatedReasoningPolicyAnnotations",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicyTestCase API call. */
	static readonly UPDATE_AUTOMATED_REASONING_POLICY_TEST_CASE: string[] = [
		"bedrock:UpdateAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the UpdateBlueprint API call. */
	static readonly UPDATE_BLUEPRINT: string[] = ["bedrock:UpdateBlueprint"];
	/** IAM actions required for the UpdateCustomModelDeployment API call. */
	static readonly UPDATE_CUSTOM_MODEL_DEPLOYMENT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateCustomModelDeployment",
	];
	/** IAM actions required for the UpdateDataAutomationLibrary API call. */
	static readonly UPDATE_DATA_AUTOMATION_LIBRARY: string[] = [
		"bedrock:UpdateDataAutomationLibrary",
	];
	/** IAM actions required for the UpdateDataAutomationProject API call. */
	static readonly UPDATE_DATA_AUTOMATION_PROJECT: string[] = [
		"bedrock:UpdateDataAutomationProject",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = ["bedrock:UpdateDataSource"];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UPDATE_FLOW: string[] = [
		"iam:PassRole",
		"bedrock:UpdateFlow",
	];
	/** IAM actions required for the UpdateFlowAlias API call. */
	static readonly UPDATE_FLOW_ALIAS: string[] = ["bedrock:UpdateFlowAlias"];
	/** IAM actions required for the UpdateGuardrail API call. */
	static readonly UPDATE_GUARDRAIL: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateGuardrail",
	];
	/** IAM actions required for the UpdateKnowledgeBase API call. */
	static readonly UPDATE_KNOWLEDGE_BASE: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"iam:PassRole",
		"bedrock:UpdateKnowledgeBase",
	];
	/** IAM actions required for the UpdateMarketplaceModelEndpoint API call. */
	static readonly UPDATE_MARKETPLACE_MODEL_ENDPOINT: string[] = [
		"bedrock:CallWithBearerToken",
		"iam:PassRole",
		"bedrock:UpdateMarketplaceModelEndpoint",
	];
	/** IAM actions required for the UpdatePrompt API call. */
	static readonly UPDATE_PROMPT: string[] = ["bedrock:UpdatePrompt"];
	/** IAM actions required for the UpdateProvisionedModelThroughput API call. */
	static readonly UPDATE_PROVISIONED_MODEL_THROUGHPUT: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateProvisionedModelThroughput",
	];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UPDATE_SESSION: string[] = ["bedrock:UpdateSession"];
	/** IAM actions required for the ValidateFlowDefinition API call. */
	static readonly VALIDATE_FLOW_DEFINITION: string[] = [
		"bedrock:ValidateFlowDefinition",
	];
}

/**
 * Condition key constants and builders for bedrock.
 */
export class BedrockConditions {
	/** Condition keys applicable to the AssociateThirdPartyKnowledgeBase action. */
	static readonly ASSOCIATE_THIRD_PARTY_KNOWLEDGE_BASE_CONDITION_KEYS: string[] =
		["bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn"];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CALL_WITH_BEARER_TOKEN_CONDITION_KEYS: string[] = [
		"bedrock:BearerTokenType",
	];
	/** Condition keys applicable to the CreateAdvancedPromptOptimizationJob action. */
	static readonly CREATE_ADVANCED_PROMPT_OPTIMIZATION_JOB_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAgent action. */
	static readonly CREATE_AGENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAgentActionGroup action. */
	static readonly CREATE_AGENT_ACTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAgentAlias action. */
	static readonly CREATE_AGENT_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomatedReasoningPolicy action. */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomatedReasoningPolicyVersion action. */
	static readonly CREATE_AUTOMATED_REASONING_POLICY_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateBlueprint action. */
	static readonly CREATE_BLUEPRINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomModel action. */
	static readonly CREATE_CUSTOM_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomModelDeployment action. */
	static readonly CREATE_CUSTOM_MODEL_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataAutomationLibrary action. */
	static readonly CREATE_DATA_AUTOMATION_LIBRARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataAutomationProject action. */
	static readonly CREATE_DATA_AUTOMATION_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEvaluationJob action. */
	static readonly CREATE_EVALUATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlow action. */
	static readonly CREATE_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlowAlias action. */
	static readonly CREATE_FLOW_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGuardrail action. */
	static readonly CREATE_GUARDRAIL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceProfile action. */
	static readonly CREATE_INFERENCE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKnowledgeBase action. */
	static readonly CREATE_KNOWLEDGE_BASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelCopyJob action. */
	static readonly CREATE_MODEL_COPY_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelCustomizationJob action. */
	static readonly CREATE_MODEL_CUSTOMIZATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelEvaluationJob action. */
	static readonly CREATE_MODEL_EVALUATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelImportJob action. */
	static readonly CREATE_MODEL_IMPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelInvocationJob action. */
	static readonly CREATE_MODEL_INVOCATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrompt action. */
	static readonly CREATE_PROMPT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePromptRouter action. */
	static readonly CREATE_PROMPT_ROUTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePromptVersion action. */
	static readonly CREATE_PROMPT_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisionedModelThroughput action. */
	static readonly CREATE_PROVISIONED_MODEL_THROUGHPUT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CREATE_SESSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeBlueprintOptimizationAsync action. */
	static readonly INVOKE_BLUEPRINT_OPTIMIZATION_ASYNC_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the InvokeDataAutomationAsync action. */
	static readonly INVOKE_DATA_AUTOMATION_ASYNC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeDataAutomationLibraryIngestionJob action. */
	static readonly INVOKE_DATA_AUTOMATION_LIBRARY_INGESTION_JOB_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the InvokeInlineAgent action. */
	static readonly INVOKE_INLINE_AGENT_CONDITION_KEYS: string[] = [
		"bedrock:InlineAgentName",
	];
	/** Condition keys applicable to the InvokeModel action. */
	static readonly INVOKE_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock:GuardrailIdentifier",
		"bedrock:InferenceProfileArn",
		"bedrock:PromptRouterArn",
		"bedrock:ServiceTier",
	];
	/** Condition keys applicable to the InvokeModelWithResponseStream action. */
	static readonly INVOKE_MODEL_WITH_RESPONSE_STREAM_CONDITION_KEYS: string[] = [
		"bedrock:GuardrailIdentifier",
		"bedrock:InferenceProfileArn",
		"bedrock:PromptRouterArn",
		"bedrock:ServiceTier",
	];
	/** Condition keys applicable to the PutAccountDataRetention action. */
	static readonly PUT_ACCOUNT_DATA_RETENTION_CONDITION_KEYS: string[] = [
		"bedrock:DataRetentionMode",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
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
	/** Condition key: bedrock:BearerTokenType (String) */
	static readonly BEARER_TOKEN_TYPE = "bedrock:BearerTokenType";
	/** Condition key: bedrock:DataRetentionMode (String) */
	static readonly DATA_RETENTION_MODE = "bedrock:DataRetentionMode";
	/** Condition key: bedrock:GuardrailIdentifier (ARN) */
	static readonly GUARDRAIL_IDENTIFIER = "bedrock:GuardrailIdentifier";
	/** Condition key: bedrock:InferenceProfileArn (ARN) */
	static readonly INFERENCE_PROFILE_ARN = "bedrock:InferenceProfileArn";
	/** Condition key: bedrock:InlineAgentName (String) */
	static readonly INLINE_AGENT_NAME = "bedrock:InlineAgentName";
	/** Condition key: bedrock:PromptRouterArn (ARN) */
	static readonly PROMPT_ROUTER_ARN = "bedrock:PromptRouterArn";
	/** Condition key: bedrock:ServiceTier (String) */
	static readonly SERVICE_TIER = "bedrock:ServiceTier";
	/** Condition key: bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn (ARN) */
	static readonly THIRD_PARTY_KNOWLEDGE_BASE_CREDENTIALS_SECRET_ARN =
		"bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn";

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
	 * Generates a condition block for `bedrock:BearerTokenType`.
	 */
	static bearerTokenType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock:BearerTokenType": value } };
	}

	/**
	 * Generates a condition block for `bedrock:DataRetentionMode`.
	 */
	static dataRetentionMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock:DataRetentionMode": value } };
	}

	/**
	 * Generates a condition block for `bedrock:GuardrailIdentifier`.
	 */
	static guardrailIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "bedrock:GuardrailIdentifier": value } };
	}

	/**
	 * Generates a condition block for `bedrock:InferenceProfileArn`.
	 */
	static inferenceProfileARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "bedrock:InferenceProfileArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock:InlineAgentName`.
	 */
	static inlineAgentName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock:InlineAgentName": value } };
	}

	/**
	 * Generates a condition block for `bedrock:PromptRouterArn`.
	 */
	static promptRouterARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "bedrock:PromptRouterArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock:ServiceTier`.
	 */
	static serviceTier(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock:ServiceTier": value } };
	}

	/**
	 * Generates a condition block for `bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn`.
	 */
	static thirdPartyKnowledgeBaseCredentialsSecretARN(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: {
				"bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn": value,
			},
		};
	}
}
