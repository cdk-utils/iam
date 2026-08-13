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
	static readonly AgenticRetrieveStream = "bedrock:AgenticRetrieveStream";
	/** [PermissionManagement] bedrock:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"bedrock:AllowVendedLogDeliveryForResource";
	/** [Read] bedrock:ApplyGuardrail */
	static readonly ApplyGuardrail = "bedrock:ApplyGuardrail";
	/** [Write] bedrock:AssociateAgentCollaborator */
	static readonly AssociateAgentCollaborator =
		"bedrock:AssociateAgentCollaborator";
	/** [Write] bedrock:AssociateAgentKnowledgeBase */
	static readonly AssociateAgentKnowledgeBase =
		"bedrock:AssociateAgentKnowledgeBase";
	/** [Write] bedrock:AssociateThirdPartyKnowledgeBase */
	static readonly AssociateThirdPartyKnowledgeBase =
		"bedrock:AssociateThirdPartyKnowledgeBase";
	/** [Write] bedrock:BatchDeleteAdvancedPromptOptimizationJob */
	static readonly BatchDeleteAdvancedPromptOptimizationJob =
		"bedrock:BatchDeleteAdvancedPromptOptimizationJob";
	/** [Write] bedrock:BatchDeleteEvaluationJob */
	static readonly BatchDeleteEvaluationJob = "bedrock:BatchDeleteEvaluationJob";
	/** [Read] bedrock:CallWithBearerToken */
	static readonly CallWithBearerToken = "bedrock:CallWithBearerToken";
	/** [Write] bedrock:CancelAutomatedReasoningPolicyBuildWorkflow */
	static readonly CancelAutomatedReasoningPolicyBuildWorkflow =
		"bedrock:CancelAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:CopyBlueprintStage */
	static readonly CopyBlueprintStage = "bedrock:CopyBlueprintStage";
	/** [Read] bedrock:CountTokens */
	static readonly CountTokens = "bedrock:CountTokens";
	/** [Write] bedrock:CreateAdvancedPromptOptimizationJob */
	static readonly CreateAdvancedPromptOptimizationJob =
		"bedrock:CreateAdvancedPromptOptimizationJob";
	/** [Write] bedrock:CreateAgent */
	static readonly CreateAgent = "bedrock:CreateAgent";
	/** [Write] bedrock:CreateAgentActionGroup */
	static readonly CreateAgentActionGroup = "bedrock:CreateAgentActionGroup";
	/** [Write] bedrock:CreateAgentAlias */
	static readonly CreateAgentAlias = "bedrock:CreateAgentAlias";
	/** [Write] bedrock:CreateAutomatedReasoningPolicy */
	static readonly CreateAutomatedReasoningPolicy =
		"bedrock:CreateAutomatedReasoningPolicy";
	/** [Write] bedrock:CreateAutomatedReasoningPolicyTestCase */
	static readonly CreateAutomatedReasoningPolicyTestCase =
		"bedrock:CreateAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:CreateAutomatedReasoningPolicyVersion */
	static readonly CreateAutomatedReasoningPolicyVersion =
		"bedrock:CreateAutomatedReasoningPolicyVersion";
	/** [Write] bedrock:CreateBlueprint */
	static readonly CreateBlueprint = "bedrock:CreateBlueprint";
	/** [Write] bedrock:CreateBlueprintVersion */
	static readonly CreateBlueprintVersion = "bedrock:CreateBlueprintVersion";
	/** [Write] bedrock:CreateCustomModel */
	static readonly CreateCustomModel = "bedrock:CreateCustomModel";
	/** [Write] bedrock:CreateCustomModelDeployment */
	static readonly CreateCustomModelDeployment =
		"bedrock:CreateCustomModelDeployment";
	/** [Write] bedrock:CreateDataAutomationLibrary */
	static readonly CreateDataAutomationLibrary =
		"bedrock:CreateDataAutomationLibrary";
	/** [Write] bedrock:CreateDataAutomationProject */
	static readonly CreateDataAutomationProject =
		"bedrock:CreateDataAutomationProject";
	/** [Write] bedrock:CreateDataSource */
	static readonly CreateDataSource = "bedrock:CreateDataSource";
	/** [Write] bedrock:CreateEvaluationJob */
	static readonly CreateEvaluationJob = "bedrock:CreateEvaluationJob";
	/** [Write] bedrock:CreateFlow */
	static readonly CreateFlow = "bedrock:CreateFlow";
	/** [Write] bedrock:CreateFlowAlias */
	static readonly CreateFlowAlias = "bedrock:CreateFlowAlias";
	/** [Write] bedrock:CreateFlowVersion */
	static readonly CreateFlowVersion = "bedrock:CreateFlowVersion";
	/** [Write] bedrock:CreateFoundationModelAgreement */
	static readonly CreateFoundationModelAgreement =
		"bedrock:CreateFoundationModelAgreement";
	/** [Write] bedrock:CreateGuardrail */
	static readonly CreateGuardrail = "bedrock:CreateGuardrail";
	/** [Write] bedrock:CreateGuardrailVersion */
	static readonly CreateGuardrailVersion = "bedrock:CreateGuardrailVersion";
	/** [Write] bedrock:CreateInferenceProfile */
	static readonly CreateInferenceProfile = "bedrock:CreateInferenceProfile";
	/** [Write] bedrock:CreateInvocation */
	static readonly CreateInvocation = "bedrock:CreateInvocation";
	/** [Write] bedrock:CreateKnowledgeBase */
	static readonly CreateKnowledgeBase = "bedrock:CreateKnowledgeBase";
	/** [Write] bedrock:CreateMarketplaceModelEndpoint */
	static readonly CreateMarketplaceModelEndpoint =
		"bedrock:CreateMarketplaceModelEndpoint";
	/** [Write] bedrock:CreateModelCopyJob */
	static readonly CreateModelCopyJob = "bedrock:CreateModelCopyJob";
	/** [Write] bedrock:CreateModelCustomizationJob */
	static readonly CreateModelCustomizationJob =
		"bedrock:CreateModelCustomizationJob";
	/** [Write] bedrock:CreateModelEvaluationJob */
	static readonly CreateModelEvaluationJob = "bedrock:CreateModelEvaluationJob";
	/** [Write] bedrock:CreateModelImportJob */
	static readonly CreateModelImportJob = "bedrock:CreateModelImportJob";
	/** [Write] bedrock:CreateModelInvocationJob */
	static readonly CreateModelInvocationJob = "bedrock:CreateModelInvocationJob";
	/** [Write] bedrock:CreatePrompt */
	static readonly CreatePrompt = "bedrock:CreatePrompt";
	/** [Write] bedrock:CreatePromptRouter */
	static readonly CreatePromptRouter = "bedrock:CreatePromptRouter";
	/** [Write] bedrock:CreatePromptVersion */
	static readonly CreatePromptVersion = "bedrock:CreatePromptVersion";
	/** [Write] bedrock:CreateProvisionedModelThroughput */
	static readonly CreateProvisionedModelThroughput =
		"bedrock:CreateProvisionedModelThroughput";
	/** [Write] bedrock:CreateSession */
	static readonly CreateSession = "bedrock:CreateSession";
	/** [Write] bedrock:DeleteAgent */
	static readonly DeleteAgent = "bedrock:DeleteAgent";
	/** [Write] bedrock:DeleteAgentActionGroup */
	static readonly DeleteAgentActionGroup = "bedrock:DeleteAgentActionGroup";
	/** [Write] bedrock:DeleteAgentAlias */
	static readonly DeleteAgentAlias = "bedrock:DeleteAgentAlias";
	/** [Write] bedrock:DeleteAgentMemory */
	static readonly DeleteAgentMemory = "bedrock:DeleteAgentMemory";
	/** [Write] bedrock:DeleteAgentVersion */
	static readonly DeleteAgentVersion = "bedrock:DeleteAgentVersion";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicy */
	static readonly DeleteAutomatedReasoningPolicy =
		"bedrock:DeleteAutomatedReasoningPolicy";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow */
	static readonly DeleteAutomatedReasoningPolicyBuildWorkflow =
		"bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:DeleteAutomatedReasoningPolicyTestCase */
	static readonly DeleteAutomatedReasoningPolicyTestCase =
		"bedrock:DeleteAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:DeleteBlueprint */
	static readonly DeleteBlueprint = "bedrock:DeleteBlueprint";
	/** [Write] bedrock:DeleteCustomModel */
	static readonly DeleteCustomModel = "bedrock:DeleteCustomModel";
	/** [Write] bedrock:DeleteCustomModelDeployment */
	static readonly DeleteCustomModelDeployment =
		"bedrock:DeleteCustomModelDeployment";
	/** [Write] bedrock:DeleteDataAutomationLibrary */
	static readonly DeleteDataAutomationLibrary =
		"bedrock:DeleteDataAutomationLibrary";
	/** [Write] bedrock:DeleteDataAutomationProject */
	static readonly DeleteDataAutomationProject =
		"bedrock:DeleteDataAutomationProject";
	/** [Write] bedrock:DeleteDataSource */
	static readonly DeleteDataSource = "bedrock:DeleteDataSource";
	/** [Write] bedrock:DeleteEnforcedGuardrailConfiguration */
	static readonly DeleteEnforcedGuardrailConfiguration =
		"bedrock:DeleteEnforcedGuardrailConfiguration";
	/** [Write] bedrock:DeleteFlow */
	static readonly DeleteFlow = "bedrock:DeleteFlow";
	/** [Write] bedrock:DeleteFlowAlias */
	static readonly DeleteFlowAlias = "bedrock:DeleteFlowAlias";
	/** [Write] bedrock:DeleteFlowVersion */
	static readonly DeleteFlowVersion = "bedrock:DeleteFlowVersion";
	/** [Write] bedrock:DeleteFoundationModelAgreement */
	static readonly DeleteFoundationModelAgreement =
		"bedrock:DeleteFoundationModelAgreement";
	/** [Write] bedrock:DeleteGuardrail */
	static readonly DeleteGuardrail = "bedrock:DeleteGuardrail";
	/** [Write] bedrock:DeleteImportedModel */
	static readonly DeleteImportedModel = "bedrock:DeleteImportedModel";
	/** [Write] bedrock:DeleteInferenceProfile */
	static readonly DeleteInferenceProfile = "bedrock:DeleteInferenceProfile";
	/** [Write] bedrock:DeleteKnowledgeBase */
	static readonly DeleteKnowledgeBase = "bedrock:DeleteKnowledgeBase";
	/** [Write] bedrock:DeleteKnowledgeBaseDocuments */
	static readonly DeleteKnowledgeBaseDocuments =
		"bedrock:DeleteKnowledgeBaseDocuments";
	/** [Write] bedrock:DeleteMarketplaceModelAgreement */
	static readonly DeleteMarketplaceModelAgreement =
		"bedrock:DeleteMarketplaceModelAgreement";
	/** [Write] bedrock:DeleteMarketplaceModelEndpoint */
	static readonly DeleteMarketplaceModelEndpoint =
		"bedrock:DeleteMarketplaceModelEndpoint";
	/** [Write] bedrock:DeleteModelInvocationLoggingConfiguration */
	static readonly DeleteModelInvocationLoggingConfiguration =
		"bedrock:DeleteModelInvocationLoggingConfiguration";
	/** [Write] bedrock:DeletePrompt */
	static readonly DeletePrompt = "bedrock:DeletePrompt";
	/** [Write] bedrock:DeletePromptRouter */
	static readonly DeletePromptRouter = "bedrock:DeletePromptRouter";
	/** [Write] bedrock:DeleteProvisionedModelThroughput */
	static readonly DeleteProvisionedModelThroughput =
		"bedrock:DeleteProvisionedModelThroughput";
	/** [Write] bedrock:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "bedrock:DeleteResourcePolicy";
	/** [Write] bedrock:DeleteSession */
	static readonly DeleteSession = "bedrock:DeleteSession";
	/** [Write] bedrock:DeregisterMarketplaceModelEndpoint */
	static readonly DeregisterMarketplaceModelEndpoint =
		"bedrock:DeregisterMarketplaceModelEndpoint";
	/** [Read] bedrock:DetectGeneratedContent */
	static readonly DetectGeneratedContent = "bedrock:DetectGeneratedContent";
	/** [Write] bedrock:DisassociateAgentCollaborator */
	static readonly DisassociateAgentCollaborator =
		"bedrock:DisassociateAgentCollaborator";
	/** [Write] bedrock:DisassociateAgentKnowledgeBase */
	static readonly DisassociateAgentKnowledgeBase =
		"bedrock:DisassociateAgentKnowledgeBase";
	/** [Write] bedrock:EndSession */
	static readonly EndSession = "bedrock:EndSession";
	/** [Read] bedrock:ExportAutomatedReasoningPolicyVersion */
	static readonly ExportAutomatedReasoningPolicyVersion =
		"bedrock:ExportAutomatedReasoningPolicyVersion";
	/** [Read] bedrock:GenerateQuery */
	static readonly GenerateQuery = "bedrock:GenerateQuery";
	/** [Read] bedrock:GetAccountDataRetention */
	static readonly actionGetAccountDataRetention =
		"bedrock:GetAccountDataRetention";
	/** [Read] bedrock:GetAdvancedPromptOptimizationJob */
	static readonly actionGetAdvancedPromptOptimizationJob =
		"bedrock:GetAdvancedPromptOptimizationJob";
	/** [Read] bedrock:GetAgent */
	static readonly actionGetAgent = "bedrock:GetAgent";
	/** [Read] bedrock:GetAgentActionGroup */
	static readonly actionGetAgentActionGroup = "bedrock:GetAgentActionGroup";
	/** [Read] bedrock:GetAgentAlias */
	static readonly actionGetAgentAlias = "bedrock:GetAgentAlias";
	/** [Read] bedrock:GetAgentCollaborator */
	static readonly actionGetAgentCollaborator = "bedrock:GetAgentCollaborator";
	/** [Read] bedrock:GetAgentKnowledgeBase */
	static readonly actionGetAgentKnowledgeBase = "bedrock:GetAgentKnowledgeBase";
	/** [Read] bedrock:GetAgentMemory */
	static readonly actionGetAgentMemory = "bedrock:GetAgentMemory";
	/** [Read] bedrock:GetAgentVersion */
	static readonly actionGetAgentVersion = "bedrock:GetAgentVersion";
	/** [Read] bedrock:GetAsyncInvoke */
	static readonly actionGetAsyncInvoke = "bedrock:GetAsyncInvoke";
	/** [Read] bedrock:GetAutomatedReasoningPolicy */
	static readonly actionGetAutomatedReasoningPolicy =
		"bedrock:GetAutomatedReasoningPolicy";
	/** [Read] bedrock:GetAutomatedReasoningPolicyAnnotations */
	static readonly actionGetAutomatedReasoningPolicyAnnotations =
		"bedrock:GetAutomatedReasoningPolicyAnnotations";
	/** [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflow */
	static readonly actionGetAutomatedReasoningPolicyBuildWorkflow =
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflow";
	/** [Read] bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets */
	static readonly actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets =
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets";
	/** [Read] bedrock:GetAutomatedReasoningPolicyNextScenario */
	static readonly actionGetAutomatedReasoningPolicyNextScenario =
		"bedrock:GetAutomatedReasoningPolicyNextScenario";
	/** [Read] bedrock:GetAutomatedReasoningPolicyTestCase */
	static readonly actionGetAutomatedReasoningPolicyTestCase =
		"bedrock:GetAutomatedReasoningPolicyTestCase";
	/** [Read] bedrock:GetAutomatedReasoningPolicyTestResult */
	static readonly actionGetAutomatedReasoningPolicyTestResult =
		"bedrock:GetAutomatedReasoningPolicyTestResult";
	/** [Read] bedrock:GetBlueprint */
	static readonly actionGetBlueprint = "bedrock:GetBlueprint";
	/** [Read] bedrock:GetBlueprintOptimizationStatus */
	static readonly actionGetBlueprintOptimizationStatus =
		"bedrock:GetBlueprintOptimizationStatus";
	/** [Read] bedrock:GetBlueprintRecommendation */
	static readonly actionGetBlueprintRecommendation =
		"bedrock:GetBlueprintRecommendation";
	/** [Read] bedrock:GetCustomModel */
	static readonly actionGetCustomModel = "bedrock:GetCustomModel";
	/** [Read] bedrock:GetCustomModelDeployment */
	static readonly actionGetCustomModelDeployment =
		"bedrock:GetCustomModelDeployment";
	/** [Read] bedrock:GetDataAutomationLibrary */
	static readonly actionGetDataAutomationLibrary =
		"bedrock:GetDataAutomationLibrary";
	/** [Read] bedrock:GetDataAutomationLibraryEntity */
	static readonly actionGetDataAutomationLibraryEntity =
		"bedrock:GetDataAutomationLibraryEntity";
	/** [Read] bedrock:GetDataAutomationLibraryIngestionJob */
	static readonly actionGetDataAutomationLibraryIngestionJob =
		"bedrock:GetDataAutomationLibraryIngestionJob";
	/** [Read] bedrock:GetDataAutomationProject */
	static readonly actionGetDataAutomationProject =
		"bedrock:GetDataAutomationProject";
	/** [Read] bedrock:GetDataAutomationStatus */
	static readonly actionGetDataAutomationStatus =
		"bedrock:GetDataAutomationStatus";
	/** [Read] bedrock:GetDataSource */
	static readonly actionGetDataSource = "bedrock:GetDataSource";
	/** [Read] bedrock:GetDocumentContent */
	static readonly actionGetDocumentContent = "bedrock:GetDocumentContent";
	/** [Read] bedrock:GetEvaluationJob */
	static readonly actionGetEvaluationJob = "bedrock:GetEvaluationJob";
	/** [Read] bedrock:GetExecutionFlowSnapshot */
	static readonly actionGetExecutionFlowSnapshot =
		"bedrock:GetExecutionFlowSnapshot";
	/** [Read] bedrock:GetFlow */
	static readonly actionGetFlow = "bedrock:GetFlow";
	/** [Read] bedrock:GetFlowAlias */
	static readonly actionGetFlowAlias = "bedrock:GetFlowAlias";
	/** [Read] bedrock:GetFlowExecution */
	static readonly actionGetFlowExecution = "bedrock:GetFlowExecution";
	/** [Read] bedrock:GetFlowVersion */
	static readonly actionGetFlowVersion = "bedrock:GetFlowVersion";
	/** [Read] bedrock:GetFoundationModel */
	static readonly actionGetFoundationModel = "bedrock:GetFoundationModel";
	/** [Read] bedrock:GetFoundationModelAvailability */
	static readonly actionGetFoundationModelAvailability =
		"bedrock:GetFoundationModelAvailability";
	/** [Read] bedrock:GetGuardrail */
	static readonly actionGetGuardrail = "bedrock:GetGuardrail";
	/** [Read] bedrock:GetImportedModel */
	static readonly actionGetImportedModel = "bedrock:GetImportedModel";
	/** [Read] bedrock:GetInferenceProfile */
	static readonly actionGetInferenceProfile = "bedrock:GetInferenceProfile";
	/** [Read] bedrock:GetIngestionJob */
	static readonly actionGetIngestionJob = "bedrock:GetIngestionJob";
	/** [Read] bedrock:GetInvocationStep */
	static readonly actionGetInvocationStep = "bedrock:GetInvocationStep";
	/** [Read] bedrock:GetKnowledgeBase */
	static readonly actionGetKnowledgeBase = "bedrock:GetKnowledgeBase";
	/** [Read] bedrock:GetKnowledgeBaseDocuments */
	static readonly actionGetKnowledgeBaseDocuments =
		"bedrock:GetKnowledgeBaseDocuments";
	/** [Read] bedrock:GetMarketplaceModelEndpoint */
	static readonly actionGetMarketplaceModelEndpoint =
		"bedrock:GetMarketplaceModelEndpoint";
	/** [Read] bedrock:GetModelCopyJob */
	static readonly actionGetModelCopyJob = "bedrock:GetModelCopyJob";
	/** [Read] bedrock:GetModelCustomizationJob */
	static readonly actionGetModelCustomizationJob =
		"bedrock:GetModelCustomizationJob";
	/** [Read] bedrock:GetModelEvaluationJob */
	static readonly actionGetModelEvaluationJob = "bedrock:GetModelEvaluationJob";
	/** [Read] bedrock:GetModelImportJob */
	static readonly actionGetModelImportJob = "bedrock:GetModelImportJob";
	/** [Read] bedrock:GetModelInvocationJob */
	static readonly actionGetModelInvocationJob = "bedrock:GetModelInvocationJob";
	/** [Read] bedrock:GetModelInvocationLoggingConfiguration */
	static readonly actionGetModelInvocationLoggingConfiguration =
		"bedrock:GetModelInvocationLoggingConfiguration";
	/** [Read] bedrock:GetPrompt */
	static readonly actionGetPrompt = "bedrock:GetPrompt";
	/** [Read] bedrock:GetPromptRouter */
	static readonly actionGetPromptRouter = "bedrock:GetPromptRouter";
	/** [Read] bedrock:GetProvisionedModelThroughput */
	static readonly actionGetProvisionedModelThroughput =
		"bedrock:GetProvisionedModelThroughput";
	/** [Read] bedrock:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "bedrock:GetResourcePolicy";
	/** [Read] bedrock:GetSession */
	static readonly actionGetSession = "bedrock:GetSession";
	/** [Read] bedrock:GetUseCaseForModelAccess */
	static readonly actionGetUseCaseForModelAccess =
		"bedrock:GetUseCaseForModelAccess";
	/** [Write] bedrock:IngestKnowledgeBaseDocuments */
	static readonly IngestKnowledgeBaseDocuments =
		"bedrock:IngestKnowledgeBaseDocuments";
	/** [Read] bedrock:InvokeAgent */
	static readonly InvokeAgent = "bedrock:InvokeAgent";
	/** [Read] bedrock:InvokeAutomatedReasoningPolicy */
	static readonly InvokeAutomatedReasoningPolicy =
		"bedrock:InvokeAutomatedReasoningPolicy";
	/** [Write] bedrock:InvokeBlueprintOptimizationAsync */
	static readonly InvokeBlueprintOptimizationAsync =
		"bedrock:InvokeBlueprintOptimizationAsync";
	/** [Write] bedrock:InvokeBlueprintRecommendationAsync */
	static readonly InvokeBlueprintRecommendationAsync =
		"bedrock:InvokeBlueprintRecommendationAsync";
	/** [Write] bedrock:InvokeBuilder */
	static readonly InvokeBuilder = "bedrock:InvokeBuilder";
	/** [Write] bedrock:InvokeDataAutomation */
	static readonly InvokeDataAutomation = "bedrock:InvokeDataAutomation";
	/** [Write] bedrock:InvokeDataAutomationAsync */
	static readonly InvokeDataAutomationAsync =
		"bedrock:InvokeDataAutomationAsync";
	/** [Write] bedrock:InvokeDataAutomationLibraryIngestionJob */
	static readonly InvokeDataAutomationLibraryIngestionJob =
		"bedrock:InvokeDataAutomationLibraryIngestionJob";
	/** [Read] bedrock:InvokeFlow */
	static readonly InvokeFlow = "bedrock:InvokeFlow";
	/** [Read] bedrock:InvokeGuardrailChecks */
	static readonly InvokeGuardrailChecks = "bedrock:InvokeGuardrailChecks";
	/** [Read] bedrock:InvokeInlineAgent */
	static readonly InvokeInlineAgent = "bedrock:InvokeInlineAgent";
	/** [Read] bedrock:InvokeModel */
	static readonly InvokeModel = "bedrock:InvokeModel";
	/** [Read] bedrock:InvokeModelWithResponseStream */
	static readonly InvokeModelWithResponseStream =
		"bedrock:InvokeModelWithResponseStream";
	/** [Read] bedrock:InvokeTool */
	static readonly InvokeTool = "bedrock:InvokeTool";
	/** [List] bedrock:ListAdvancedPromptOptimizationJobs */
	static readonly ListAdvancedPromptOptimizationJobs =
		"bedrock:ListAdvancedPromptOptimizationJobs";
	/** [List] bedrock:ListAgentActionGroups */
	static readonly ListAgentActionGroups = "bedrock:ListAgentActionGroups";
	/** [List] bedrock:ListAgentAliases */
	static readonly ListAgentAliases = "bedrock:ListAgentAliases";
	/** [List] bedrock:ListAgentCollaborators */
	static readonly ListAgentCollaborators = "bedrock:ListAgentCollaborators";
	/** [List] bedrock:ListAgentKnowledgeBases */
	static readonly ListAgentKnowledgeBases = "bedrock:ListAgentKnowledgeBases";
	/** [List] bedrock:ListAgentVersions */
	static readonly ListAgentVersions = "bedrock:ListAgentVersions";
	/** [List] bedrock:ListAgents */
	static readonly ListAgents = "bedrock:ListAgents";
	/** [List] bedrock:ListAsyncInvokes */
	static readonly ListAsyncInvokes = "bedrock:ListAsyncInvokes";
	/** [List] bedrock:ListAutomatedReasoningPolicies */
	static readonly ListAutomatedReasoningPolicies =
		"bedrock:ListAutomatedReasoningPolicies";
	/** [List] bedrock:ListAutomatedReasoningPolicyBuildWorkflows */
	static readonly ListAutomatedReasoningPolicyBuildWorkflows =
		"bedrock:ListAutomatedReasoningPolicyBuildWorkflows";
	/** [List] bedrock:ListAutomatedReasoningPolicyTestCases */
	static readonly ListAutomatedReasoningPolicyTestCases =
		"bedrock:ListAutomatedReasoningPolicyTestCases";
	/** [List] bedrock:ListAutomatedReasoningPolicyTestResults */
	static readonly ListAutomatedReasoningPolicyTestResults =
		"bedrock:ListAutomatedReasoningPolicyTestResults";
	/** [List] bedrock:ListBlueprints */
	static readonly ListBlueprints = "bedrock:ListBlueprints";
	/** [List] bedrock:ListCustomModelDeployments */
	static readonly ListCustomModelDeployments =
		"bedrock:ListCustomModelDeployments";
	/** [List] bedrock:ListCustomModels */
	static readonly ListCustomModels = "bedrock:ListCustomModels";
	/** [List] bedrock:ListDataAutomationLibraries */
	static readonly ListDataAutomationLibraries =
		"bedrock:ListDataAutomationLibraries";
	/** [List] bedrock:ListDataAutomationLibraryEntities */
	static readonly ListDataAutomationLibraryEntities =
		"bedrock:ListDataAutomationLibraryEntities";
	/** [List] bedrock:ListDataAutomationLibraryIngestionJobs */
	static readonly ListDataAutomationLibraryIngestionJobs =
		"bedrock:ListDataAutomationLibraryIngestionJobs";
	/** [List] bedrock:ListDataAutomationProjects */
	static readonly ListDataAutomationProjects =
		"bedrock:ListDataAutomationProjects";
	/** [List] bedrock:ListDataSources */
	static readonly ListDataSources = "bedrock:ListDataSources";
	/** [List] bedrock:ListEnforcedGuardrailsConfiguration */
	static readonly ListEnforcedGuardrailsConfiguration =
		"bedrock:ListEnforcedGuardrailsConfiguration";
	/** [List] bedrock:ListEvaluationJobs */
	static readonly ListEvaluationJobs = "bedrock:ListEvaluationJobs";
	/** [List] bedrock:ListFlowAliases */
	static readonly ListFlowAliases = "bedrock:ListFlowAliases";
	/** [List] bedrock:ListFlowExecutionEvents */
	static readonly ListFlowExecutionEvents = "bedrock:ListFlowExecutionEvents";
	/** [List] bedrock:ListFlowExecutions */
	static readonly ListFlowExecutions = "bedrock:ListFlowExecutions";
	/** [List] bedrock:ListFlowVersions */
	static readonly ListFlowVersions = "bedrock:ListFlowVersions";
	/** [List] bedrock:ListFlows */
	static readonly ListFlows = "bedrock:ListFlows";
	/** [List] bedrock:ListFoundationModelAgreementOffers */
	static readonly ListFoundationModelAgreementOffers =
		"bedrock:ListFoundationModelAgreementOffers";
	/** [List] bedrock:ListFoundationModels */
	static readonly ListFoundationModels = "bedrock:ListFoundationModels";
	/** [List] bedrock:ListGuardrails */
	static readonly ListGuardrails = "bedrock:ListGuardrails";
	/** [List] bedrock:ListImportedModels */
	static readonly ListImportedModels = "bedrock:ListImportedModels";
	/** [List] bedrock:ListInferenceProfiles */
	static readonly ListInferenceProfiles = "bedrock:ListInferenceProfiles";
	/** [List] bedrock:ListIngestionJobs */
	static readonly ListIngestionJobs = "bedrock:ListIngestionJobs";
	/** [List] bedrock:ListInvocationSteps */
	static readonly ListInvocationSteps = "bedrock:ListInvocationSteps";
	/** [List] bedrock:ListInvocations */
	static readonly ListInvocations = "bedrock:ListInvocations";
	/** [List] bedrock:ListKnowledgeBaseDocuments */
	static readonly ListKnowledgeBaseDocuments =
		"bedrock:ListKnowledgeBaseDocuments";
	/** [List] bedrock:ListKnowledgeBases */
	static readonly ListKnowledgeBases = "bedrock:ListKnowledgeBases";
	/** [Read] bedrock:ListMarketplaceModelEndpoints */
	static readonly ListMarketplaceModelEndpoints =
		"bedrock:ListMarketplaceModelEndpoints";
	/** [List] bedrock:ListModelCopyJobs */
	static readonly ListModelCopyJobs = "bedrock:ListModelCopyJobs";
	/** [List] bedrock:ListModelCustomizationJobs */
	static readonly ListModelCustomizationJobs =
		"bedrock:ListModelCustomizationJobs";
	/** [List] bedrock:ListModelEvaluationJobs */
	static readonly ListModelEvaluationJobs = "bedrock:ListModelEvaluationJobs";
	/** [List] bedrock:ListModelImportJobs */
	static readonly ListModelImportJobs = "bedrock:ListModelImportJobs";
	/** [List] bedrock:ListModelInvocationJobs */
	static readonly ListModelInvocationJobs = "bedrock:ListModelInvocationJobs";
	/** [List] bedrock:ListPromptRouters */
	static readonly ListPromptRouters = "bedrock:ListPromptRouters";
	/** [List] bedrock:ListPrompts */
	static readonly ListPrompts = "bedrock:ListPrompts";
	/** [List] bedrock:ListProvisionedModelThroughputs */
	static readonly ListProvisionedModelThroughputs =
		"bedrock:ListProvisionedModelThroughputs";
	/** [List] bedrock:ListSessions */
	static readonly ListSessions = "bedrock:ListSessions";
	/** [Read] bedrock:ListTagsForResource */
	static readonly ListTagsForResource = "bedrock:ListTagsForResource";
	/** [Read] bedrock:OptimizePrompt */
	static readonly OptimizePrompt = "bedrock:OptimizePrompt";
	/** [Write] bedrock:PrepareAgent */
	static readonly PrepareAgent = "bedrock:PrepareAgent";
	/** [Write] bedrock:PrepareFlow */
	static readonly PrepareFlow = "bedrock:PrepareFlow";
	/** [Write] bedrock:PutAccountDataRetention */
	static readonly PutAccountDataRetention = "bedrock:PutAccountDataRetention";
	/** [Write] bedrock:PutEnforcedGuardrailConfiguration */
	static readonly PutEnforcedGuardrailConfiguration =
		"bedrock:PutEnforcedGuardrailConfiguration";
	/** [Write] bedrock:PutFoundationModelEntitlement */
	static readonly PutFoundationModelEntitlement =
		"bedrock:PutFoundationModelEntitlement";
	/** [Write] bedrock:PutInvocationStep */
	static readonly PutInvocationStep = "bedrock:PutInvocationStep";
	/** [Write] bedrock:PutModelInvocationLoggingConfiguration */
	static readonly PutModelInvocationLoggingConfiguration =
		"bedrock:PutModelInvocationLoggingConfiguration";
	/** [Write] bedrock:PutResourcePolicy */
	static readonly PutResourcePolicy = "bedrock:PutResourcePolicy";
	/** [Write] bedrock:PutUseCaseForModelAccess */
	static readonly PutUseCaseForModelAccess = "bedrock:PutUseCaseForModelAccess";
	/** [Write] bedrock:RegisterMarketplaceModelEndpoint */
	static readonly RegisterMarketplaceModelEndpoint =
		"bedrock:RegisterMarketplaceModelEndpoint";
	/** [Read] bedrock:RenderPrompt */
	static readonly RenderPrompt = "bedrock:RenderPrompt";
	/** [Write] bedrock:Rerank */
	static readonly Rerank = "bedrock:Rerank";
	/** [Read] bedrock:Retrieve */
	static readonly Retrieve = "bedrock:Retrieve";
	/** [Write] bedrock:RetrieveAndGenerate */
	static readonly RetrieveAndGenerate = "bedrock:RetrieveAndGenerate";
	/** [Write] bedrock:StartAutomatedReasoningPolicyBuildWorkflow */
	static readonly StartAutomatedReasoningPolicyBuildWorkflow =
		"bedrock:StartAutomatedReasoningPolicyBuildWorkflow";
	/** [Write] bedrock:StartAutomatedReasoningPolicyTestWorkflow */
	static readonly StartAutomatedReasoningPolicyTestWorkflow =
		"bedrock:StartAutomatedReasoningPolicyTestWorkflow";
	/** [Write] bedrock:StartFlowExecution */
	static readonly StartFlowExecution = "bedrock:StartFlowExecution";
	/** [Write] bedrock:StartIngestionJob */
	static readonly StartIngestionJob = "bedrock:StartIngestionJob";
	/** [Write] bedrock:StopAdvancedPromptOptimizationJob */
	static readonly StopAdvancedPromptOptimizationJob =
		"bedrock:StopAdvancedPromptOptimizationJob";
	/** [Write] bedrock:StopEvaluationJob */
	static readonly StopEvaluationJob = "bedrock:StopEvaluationJob";
	/** [Write] bedrock:StopFlowExecution */
	static readonly StopFlowExecution = "bedrock:StopFlowExecution";
	/** [Write] bedrock:StopIngestionJob */
	static readonly StopIngestionJob = "bedrock:StopIngestionJob";
	/** [Write] bedrock:StopModelCustomizationJob */
	static readonly StopModelCustomizationJob =
		"bedrock:StopModelCustomizationJob";
	/** [Write] bedrock:StopModelInvocationJob */
	static readonly StopModelInvocationJob = "bedrock:StopModelInvocationJob";
	/** [Tagging] bedrock:TagResource */
	static readonly TagResource = "bedrock:TagResource";
	/** [Tagging] bedrock:UntagResource */
	static readonly UntagResource = "bedrock:UntagResource";
	/** [Write] bedrock:UpdateAgent */
	static readonly UpdateAgent = "bedrock:UpdateAgent";
	/** [Write] bedrock:UpdateAgentActionGroup */
	static readonly UpdateAgentActionGroup = "bedrock:UpdateAgentActionGroup";
	/** [Write] bedrock:UpdateAgentAlias */
	static readonly UpdateAgentAlias = "bedrock:UpdateAgentAlias";
	/** [Write] bedrock:UpdateAgentCollaborator */
	static readonly UpdateAgentCollaborator = "bedrock:UpdateAgentCollaborator";
	/** [Write] bedrock:UpdateAgentKnowledgeBase */
	static readonly UpdateAgentKnowledgeBase = "bedrock:UpdateAgentKnowledgeBase";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicy */
	static readonly UpdateAutomatedReasoningPolicy =
		"bedrock:UpdateAutomatedReasoningPolicy";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicyAnnotations */
	static readonly UpdateAutomatedReasoningPolicyAnnotations =
		"bedrock:UpdateAutomatedReasoningPolicyAnnotations";
	/** [Write] bedrock:UpdateAutomatedReasoningPolicyTestCase */
	static readonly UpdateAutomatedReasoningPolicyTestCase =
		"bedrock:UpdateAutomatedReasoningPolicyTestCase";
	/** [Write] bedrock:UpdateBlueprint */
	static readonly UpdateBlueprint = "bedrock:UpdateBlueprint";
	/** [Write] bedrock:UpdateCustomModelDeployment */
	static readonly UpdateCustomModelDeployment =
		"bedrock:UpdateCustomModelDeployment";
	/** [Write] bedrock:UpdateDataAutomationLibrary */
	static readonly UpdateDataAutomationLibrary =
		"bedrock:UpdateDataAutomationLibrary";
	/** [Write] bedrock:UpdateDataAutomationProject */
	static readonly UpdateDataAutomationProject =
		"bedrock:UpdateDataAutomationProject";
	/** [Write] bedrock:UpdateDataSource */
	static readonly UpdateDataSource = "bedrock:UpdateDataSource";
	/** [Write] bedrock:UpdateFlow */
	static readonly UpdateFlow = "bedrock:UpdateFlow";
	/** [Write] bedrock:UpdateFlowAlias */
	static readonly UpdateFlowAlias = "bedrock:UpdateFlowAlias";
	/** [Write] bedrock:UpdateGuardrail */
	static readonly UpdateGuardrail = "bedrock:UpdateGuardrail";
	/** [Write] bedrock:UpdateKnowledgeBase */
	static readonly UpdateKnowledgeBase = "bedrock:UpdateKnowledgeBase";
	/** [Write] bedrock:UpdateMarketplaceModelEndpoint */
	static readonly UpdateMarketplaceModelEndpoint =
		"bedrock:UpdateMarketplaceModelEndpoint";
	/** [Write] bedrock:UpdatePrompt */
	static readonly UpdatePrompt = "bedrock:UpdatePrompt";
	/** [Write] bedrock:UpdateProvisionedModelThroughput */
	static readonly UpdateProvisionedModelThroughput =
		"bedrock:UpdateProvisionedModelThroughput";
	/** [Write] bedrock:UpdateSession */
	static readonly UpdateSession = "bedrock:UpdateSession";
	/** [Read] bedrock:ValidateFlowDefinition */
	static readonly ValidateFlowDefinition = "bedrock:ValidateFlowDefinition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BedrockActions.AgenticRetrieveStream,
		BedrockActions.ApplyGuardrail,
		BedrockActions.CallWithBearerToken,
		BedrockActions.CountTokens,
		BedrockActions.DetectGeneratedContent,
		BedrockActions.ExportAutomatedReasoningPolicyVersion,
		BedrockActions.GenerateQuery,
		BedrockActions.actionGetAccountDataRetention,
		BedrockActions.actionGetAdvancedPromptOptimizationJob,
		BedrockActions.actionGetAgent,
		BedrockActions.actionGetAgentActionGroup,
		BedrockActions.actionGetAgentAlias,
		BedrockActions.actionGetAgentCollaborator,
		BedrockActions.actionGetAgentKnowledgeBase,
		BedrockActions.actionGetAgentMemory,
		BedrockActions.actionGetAgentVersion,
		BedrockActions.actionGetAsyncInvoke,
		BedrockActions.actionGetAutomatedReasoningPolicy,
		BedrockActions.actionGetAutomatedReasoningPolicyAnnotations,
		BedrockActions.actionGetAutomatedReasoningPolicyBuildWorkflow,
		BedrockActions.actionGetAutomatedReasoningPolicyBuildWorkflowResultAssets,
		BedrockActions.actionGetAutomatedReasoningPolicyNextScenario,
		BedrockActions.actionGetAutomatedReasoningPolicyTestCase,
		BedrockActions.actionGetAutomatedReasoningPolicyTestResult,
		BedrockActions.actionGetBlueprint,
		BedrockActions.actionGetBlueprintOptimizationStatus,
		BedrockActions.actionGetBlueprintRecommendation,
		BedrockActions.actionGetCustomModel,
		BedrockActions.actionGetCustomModelDeployment,
		BedrockActions.actionGetDataAutomationLibrary,
		BedrockActions.actionGetDataAutomationLibraryEntity,
		BedrockActions.actionGetDataAutomationLibraryIngestionJob,
		BedrockActions.actionGetDataAutomationProject,
		BedrockActions.actionGetDataAutomationStatus,
		BedrockActions.actionGetDataSource,
		BedrockActions.actionGetDocumentContent,
		BedrockActions.actionGetEvaluationJob,
		BedrockActions.actionGetExecutionFlowSnapshot,
		BedrockActions.actionGetFlow,
		BedrockActions.actionGetFlowAlias,
		BedrockActions.actionGetFlowExecution,
		BedrockActions.actionGetFlowVersion,
		BedrockActions.actionGetFoundationModel,
		BedrockActions.actionGetFoundationModelAvailability,
		BedrockActions.actionGetGuardrail,
		BedrockActions.actionGetImportedModel,
		BedrockActions.actionGetInferenceProfile,
		BedrockActions.actionGetIngestionJob,
		BedrockActions.actionGetInvocationStep,
		BedrockActions.actionGetKnowledgeBase,
		BedrockActions.actionGetKnowledgeBaseDocuments,
		BedrockActions.actionGetMarketplaceModelEndpoint,
		BedrockActions.actionGetModelCopyJob,
		BedrockActions.actionGetModelCustomizationJob,
		BedrockActions.actionGetModelEvaluationJob,
		BedrockActions.actionGetModelImportJob,
		BedrockActions.actionGetModelInvocationJob,
		BedrockActions.actionGetModelInvocationLoggingConfiguration,
		BedrockActions.actionGetPrompt,
		BedrockActions.actionGetPromptRouter,
		BedrockActions.actionGetProvisionedModelThroughput,
		BedrockActions.actionGetResourcePolicy,
		BedrockActions.actionGetSession,
		BedrockActions.actionGetUseCaseForModelAccess,
		BedrockActions.InvokeAgent,
		BedrockActions.InvokeAutomatedReasoningPolicy,
		BedrockActions.InvokeFlow,
		BedrockActions.InvokeGuardrailChecks,
		BedrockActions.InvokeInlineAgent,
		BedrockActions.InvokeModel,
		BedrockActions.InvokeModelWithResponseStream,
		BedrockActions.InvokeTool,
		BedrockActions.ListMarketplaceModelEndpoints,
		BedrockActions.ListTagsForResource,
		BedrockActions.OptimizePrompt,
		BedrockActions.RenderPrompt,
		BedrockActions.Retrieve,
		BedrockActions.ValidateFlowDefinition,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BedrockActions.AssociateAgentCollaborator,
		BedrockActions.AssociateAgentKnowledgeBase,
		BedrockActions.AssociateThirdPartyKnowledgeBase,
		BedrockActions.BatchDeleteAdvancedPromptOptimizationJob,
		BedrockActions.BatchDeleteEvaluationJob,
		BedrockActions.CancelAutomatedReasoningPolicyBuildWorkflow,
		BedrockActions.CopyBlueprintStage,
		BedrockActions.CreateAdvancedPromptOptimizationJob,
		BedrockActions.CreateAgent,
		BedrockActions.CreateAgentActionGroup,
		BedrockActions.CreateAgentAlias,
		BedrockActions.CreateAutomatedReasoningPolicy,
		BedrockActions.CreateAutomatedReasoningPolicyTestCase,
		BedrockActions.CreateAutomatedReasoningPolicyVersion,
		BedrockActions.CreateBlueprint,
		BedrockActions.CreateBlueprintVersion,
		BedrockActions.CreateCustomModel,
		BedrockActions.CreateCustomModelDeployment,
		BedrockActions.CreateDataAutomationLibrary,
		BedrockActions.CreateDataAutomationProject,
		BedrockActions.CreateDataSource,
		BedrockActions.CreateEvaluationJob,
		BedrockActions.CreateFlow,
		BedrockActions.CreateFlowAlias,
		BedrockActions.CreateFlowVersion,
		BedrockActions.CreateFoundationModelAgreement,
		BedrockActions.CreateGuardrail,
		BedrockActions.CreateGuardrailVersion,
		BedrockActions.CreateInferenceProfile,
		BedrockActions.CreateInvocation,
		BedrockActions.CreateKnowledgeBase,
		BedrockActions.CreateMarketplaceModelEndpoint,
		BedrockActions.CreateModelCopyJob,
		BedrockActions.CreateModelCustomizationJob,
		BedrockActions.CreateModelEvaluationJob,
		BedrockActions.CreateModelImportJob,
		BedrockActions.CreateModelInvocationJob,
		BedrockActions.CreatePrompt,
		BedrockActions.CreatePromptRouter,
		BedrockActions.CreatePromptVersion,
		BedrockActions.CreateProvisionedModelThroughput,
		BedrockActions.CreateSession,
		BedrockActions.DeleteAgent,
		BedrockActions.DeleteAgentActionGroup,
		BedrockActions.DeleteAgentAlias,
		BedrockActions.DeleteAgentMemory,
		BedrockActions.DeleteAgentVersion,
		BedrockActions.DeleteAutomatedReasoningPolicy,
		BedrockActions.DeleteAutomatedReasoningPolicyBuildWorkflow,
		BedrockActions.DeleteAutomatedReasoningPolicyTestCase,
		BedrockActions.DeleteBlueprint,
		BedrockActions.DeleteCustomModel,
		BedrockActions.DeleteCustomModelDeployment,
		BedrockActions.DeleteDataAutomationLibrary,
		BedrockActions.DeleteDataAutomationProject,
		BedrockActions.DeleteDataSource,
		BedrockActions.DeleteEnforcedGuardrailConfiguration,
		BedrockActions.DeleteFlow,
		BedrockActions.DeleteFlowAlias,
		BedrockActions.DeleteFlowVersion,
		BedrockActions.DeleteFoundationModelAgreement,
		BedrockActions.DeleteGuardrail,
		BedrockActions.DeleteImportedModel,
		BedrockActions.DeleteInferenceProfile,
		BedrockActions.DeleteKnowledgeBase,
		BedrockActions.DeleteKnowledgeBaseDocuments,
		BedrockActions.DeleteMarketplaceModelAgreement,
		BedrockActions.DeleteMarketplaceModelEndpoint,
		BedrockActions.DeleteModelInvocationLoggingConfiguration,
		BedrockActions.DeletePrompt,
		BedrockActions.DeletePromptRouter,
		BedrockActions.DeleteProvisionedModelThroughput,
		BedrockActions.DeleteResourcePolicy,
		BedrockActions.DeleteSession,
		BedrockActions.DeregisterMarketplaceModelEndpoint,
		BedrockActions.DisassociateAgentCollaborator,
		BedrockActions.DisassociateAgentKnowledgeBase,
		BedrockActions.EndSession,
		BedrockActions.IngestKnowledgeBaseDocuments,
		BedrockActions.InvokeBlueprintOptimizationAsync,
		BedrockActions.InvokeBlueprintRecommendationAsync,
		BedrockActions.InvokeBuilder,
		BedrockActions.InvokeDataAutomation,
		BedrockActions.InvokeDataAutomationAsync,
		BedrockActions.InvokeDataAutomationLibraryIngestionJob,
		BedrockActions.PrepareAgent,
		BedrockActions.PrepareFlow,
		BedrockActions.PutAccountDataRetention,
		BedrockActions.PutEnforcedGuardrailConfiguration,
		BedrockActions.PutFoundationModelEntitlement,
		BedrockActions.PutInvocationStep,
		BedrockActions.PutModelInvocationLoggingConfiguration,
		BedrockActions.PutResourcePolicy,
		BedrockActions.PutUseCaseForModelAccess,
		BedrockActions.RegisterMarketplaceModelEndpoint,
		BedrockActions.Rerank,
		BedrockActions.RetrieveAndGenerate,
		BedrockActions.StartAutomatedReasoningPolicyBuildWorkflow,
		BedrockActions.StartAutomatedReasoningPolicyTestWorkflow,
		BedrockActions.StartFlowExecution,
		BedrockActions.StartIngestionJob,
		BedrockActions.StopAdvancedPromptOptimizationJob,
		BedrockActions.StopEvaluationJob,
		BedrockActions.StopFlowExecution,
		BedrockActions.StopIngestionJob,
		BedrockActions.StopModelCustomizationJob,
		BedrockActions.StopModelInvocationJob,
		BedrockActions.UpdateAgent,
		BedrockActions.UpdateAgentActionGroup,
		BedrockActions.UpdateAgentAlias,
		BedrockActions.UpdateAgentCollaborator,
		BedrockActions.UpdateAgentKnowledgeBase,
		BedrockActions.UpdateAutomatedReasoningPolicy,
		BedrockActions.UpdateAutomatedReasoningPolicyAnnotations,
		BedrockActions.UpdateAutomatedReasoningPolicyTestCase,
		BedrockActions.UpdateBlueprint,
		BedrockActions.UpdateCustomModelDeployment,
		BedrockActions.UpdateDataAutomationLibrary,
		BedrockActions.UpdateDataAutomationProject,
		BedrockActions.UpdateDataSource,
		BedrockActions.UpdateFlow,
		BedrockActions.UpdateFlowAlias,
		BedrockActions.UpdateGuardrail,
		BedrockActions.UpdateKnowledgeBase,
		BedrockActions.UpdateMarketplaceModelEndpoint,
		BedrockActions.UpdatePrompt,
		BedrockActions.UpdateProvisionedModelThroughput,
		BedrockActions.UpdateSession,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BedrockActions.ListAdvancedPromptOptimizationJobs,
		BedrockActions.ListAgentActionGroups,
		BedrockActions.ListAgentAliases,
		BedrockActions.ListAgentCollaborators,
		BedrockActions.ListAgentKnowledgeBases,
		BedrockActions.ListAgentVersions,
		BedrockActions.ListAgents,
		BedrockActions.ListAsyncInvokes,
		BedrockActions.ListAutomatedReasoningPolicies,
		BedrockActions.ListAutomatedReasoningPolicyBuildWorkflows,
		BedrockActions.ListAutomatedReasoningPolicyTestCases,
		BedrockActions.ListAutomatedReasoningPolicyTestResults,
		BedrockActions.ListBlueprints,
		BedrockActions.ListCustomModelDeployments,
		BedrockActions.ListCustomModels,
		BedrockActions.ListDataAutomationLibraries,
		BedrockActions.ListDataAutomationLibraryEntities,
		BedrockActions.ListDataAutomationLibraryIngestionJobs,
		BedrockActions.ListDataAutomationProjects,
		BedrockActions.ListDataSources,
		BedrockActions.ListEnforcedGuardrailsConfiguration,
		BedrockActions.ListEvaluationJobs,
		BedrockActions.ListFlowAliases,
		BedrockActions.ListFlowExecutionEvents,
		BedrockActions.ListFlowExecutions,
		BedrockActions.ListFlowVersions,
		BedrockActions.ListFlows,
		BedrockActions.ListFoundationModelAgreementOffers,
		BedrockActions.ListFoundationModels,
		BedrockActions.ListGuardrails,
		BedrockActions.ListImportedModels,
		BedrockActions.ListInferenceProfiles,
		BedrockActions.ListIngestionJobs,
		BedrockActions.ListInvocationSteps,
		BedrockActions.ListInvocations,
		BedrockActions.ListKnowledgeBaseDocuments,
		BedrockActions.ListKnowledgeBases,
		BedrockActions.ListModelCopyJobs,
		BedrockActions.ListModelCustomizationJobs,
		BedrockActions.ListModelEvaluationJobs,
		BedrockActions.ListModelImportJobs,
		BedrockActions.ListModelInvocationJobs,
		BedrockActions.ListPromptRouters,
		BedrockActions.ListPrompts,
		BedrockActions.ListProvisionedModelThroughputs,
		BedrockActions.ListSessions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		BedrockActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BedrockActions.TagResource,
		BedrockActions.UntagResource,
	];
}

/**
 * Properties for building a advanced-prompt-optimization-job ARN.
 */
export interface BedrockAdvancedPromptOptimizationJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a advanced-prompt-optimization-job ARN.
 */
export interface BedrockAdvancedPromptOptimizationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a agent ARN.
 */
export interface BedrockAgentArnProps {
	/** The AgentId component of the ARN. */
	readonly agentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agent ARN.
 */
export interface BedrockAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentId component. */
	readonly agentId: string;
}

/**
 * Properties for building a agent-alias ARN.
 */
export interface BedrockAgentAliasArnProps {
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
}

/**
 * Parsed components of a agent-alias ARN.
 */
export interface BedrockAgentAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentId component. */
	readonly agentId: string;
	/** The AgentAliasId component. */
	readonly agentAliasId: string;
}

/**
 * Properties for building a application-inference-profile ARN.
 */
export interface BedrockApplicationInferenceProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application-inference-profile ARN.
 */
export interface BedrockApplicationInferenceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a async-invoke ARN.
 */
export interface BedrockAsyncInvokeArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a async-invoke ARN.
 */
export interface BedrockAsyncInvokeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a automated-reasoning-policy ARN.
 */
export interface BedrockAutomatedReasoningPolicyArnProps {
	/** The AutomatedReasoningPolicyId component of the ARN. */
	readonly automatedReasoningPolicyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automated-reasoning-policy ARN.
 */
export interface BedrockAutomatedReasoningPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomatedReasoningPolicyId component. */
	readonly automatedReasoningPolicyId: string;
}

/**
 * Properties for building a automated-reasoning-policy-version ARN.
 */
export interface BedrockAutomatedReasoningPolicyVersionArnProps {
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
}

/**
 * Parsed components of a automated-reasoning-policy-version ARN.
 */
export interface BedrockAutomatedReasoningPolicyVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomatedReasoningPolicyId component. */
	readonly automatedReasoningPolicyId: string;
	/** The AutomatedReasoningPolicyVersion component. */
	readonly automatedReasoningPolicyVersion: string;
}

/**
 * Properties for building a bedrock-marketplace-model-endpoint ARN.
 */
export interface BedrockBedrockMarketplaceModelEndpointArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bedrock-marketplace-model-endpoint ARN.
 */
export interface BedrockBedrockMarketplaceModelEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a blueprint ARN.
 */
export interface BedrockBlueprintArnProps {
	/** The BlueprintId component of the ARN. */
	readonly blueprintId: string;
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
export interface BedrockBlueprintArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BlueprintId component. */
	readonly blueprintId: string;
}

/**
 * Properties for building a blueprint-optimization-invocation ARN.
 */
export interface BedrockBlueprintOptimizationInvocationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a blueprint-optimization-invocation ARN.
 */
export interface BedrockBlueprintOptimizationInvocationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a custom-model ARN.
 */
export interface BedrockCustomModelArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a custom-model ARN.
 */
export interface BedrockCustomModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a custom-model-deployment ARN.
 */
export interface BedrockCustomModelDeploymentArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a custom-model-deployment ARN.
 */
export interface BedrockCustomModelDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a data-automation-invocation-job ARN.
 */
export interface BedrockDataAutomationInvocationJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-automation-invocation-job ARN.
 */
export interface BedrockDataAutomationInvocationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a data-automation-library ARN.
 */
export interface BedrockDataAutomationLibraryArnProps {
	/** The DataAutomationLibraryId component of the ARN. */
	readonly dataAutomationLibraryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-automation-library ARN.
 */
export interface BedrockDataAutomationLibraryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataAutomationLibraryId component. */
	readonly dataAutomationLibraryId: string;
}

/**
 * Properties for building a data-automation-library-ingestion-job ARN.
 */
export interface BedrockDataAutomationLibraryIngestionJobArnProps {
	/** The IngestionJobId component of the ARN. */
	readonly ingestionJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-automation-library-ingestion-job ARN.
 */
export interface BedrockDataAutomationLibraryIngestionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IngestionJobId component. */
	readonly ingestionJobId: string;
}

/**
 * Properties for building a data-automation-profile ARN.
 */
export interface BedrockDataAutomationProfileArnProps {
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
 * Parsed components of a data-automation-profile ARN.
 */
export interface BedrockDataAutomationProfileArnComponents {
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
 * Properties for building a data-automation-project ARN.
 */
export interface BedrockDataAutomationProjectArnProps {
	/** The ProjectId component of the ARN. */
	readonly projectId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-automation-project ARN.
 */
export interface BedrockDataAutomationProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectId component. */
	readonly projectId: string;
}

/**
 * Properties for building a default-prompt-router ARN.
 */
export interface BedrockDefaultPromptRouterArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a default-prompt-router ARN.
 */
export interface BedrockDefaultPromptRouterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a evaluation-job ARN.
 */
export interface BedrockEvaluationJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a evaluation-job ARN.
 */
export interface BedrockEvaluationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a flow ARN.
 */
export interface BedrockFlowArnProps {
	/** The FlowId component of the ARN. */
	readonly flowId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a flow ARN.
 */
export interface BedrockFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
}

/**
 * Properties for building a flow-alias ARN.
 */
export interface BedrockFlowAliasArnProps {
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
}

/**
 * Parsed components of a flow-alias ARN.
 */
export interface BedrockFlowAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The FlowAliasId component. */
	readonly flowAliasId: string;
}

/**
 * Properties for building a flow-execution ARN.
 */
export interface BedrockFlowExecutionArnProps {
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
}

/**
 * Parsed components of a flow-execution ARN.
 */
export interface BedrockFlowExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The FlowAliasId component. */
	readonly flowAliasId: string;
	/** The FlowExecutionId component. */
	readonly flowExecutionId: string;
}

/**
 * Properties for building a foundation-model ARN.
 */
export interface BedrockFoundationModelArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a foundation-model ARN.
 */
export interface BedrockFoundationModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a guardrail ARN.
 */
export interface BedrockGuardrailArnProps {
	/** The GuardrailId component of the ARN. */
	readonly guardrailId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a guardrail ARN.
 */
export interface BedrockGuardrailArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GuardrailId component. */
	readonly guardrailId: string;
}

/**
 * Properties for building a guardrail-profile ARN.
 */
export interface BedrockGuardrailProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a guardrail-profile ARN.
 */
export interface BedrockGuardrailProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a imported-model ARN.
 */
export interface BedrockImportedModelArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a imported-model ARN.
 */
export interface BedrockImportedModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a inference-profile ARN.
 */
export interface BedrockInferenceProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a inference-profile ARN.
 */
export interface BedrockInferenceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a knowledge-base ARN.
 */
export interface BedrockKnowledgeBaseArnProps {
	/** The KnowledgeBaseId component of the ARN. */
	readonly knowledgeBaseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a knowledge-base ARN.
 */
export interface BedrockKnowledgeBaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KnowledgeBaseId component. */
	readonly knowledgeBaseId: string;
}

/**
 * Properties for building a model-copy-job ARN.
 */
export interface BedrockModelCopyJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-copy-job ARN.
 */
export interface BedrockModelCopyJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a model-customization-job ARN.
 */
export interface BedrockModelCustomizationJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-customization-job ARN.
 */
export interface BedrockModelCustomizationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a model-evaluation-job ARN.
 */
export interface BedrockModelEvaluationJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-evaluation-job ARN.
 */
export interface BedrockModelEvaluationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a model-import-job ARN.
 */
export interface BedrockModelImportJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-import-job ARN.
 */
export interface BedrockModelImportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a model-invocation-job ARN.
 */
export interface BedrockModelInvocationJobArnProps {
	/** The JobIdentifier component of the ARN. */
	readonly jobIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-invocation-job ARN.
 */
export interface BedrockModelInvocationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobIdentifier component. */
	readonly jobIdentifier: string;
}

/**
 * Properties for building a prompt ARN.
 */
export interface BedrockPromptArnProps {
	/** The PromptId component of the ARN. */
	readonly promptId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a prompt ARN.
 */
export interface BedrockPromptArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PromptId component. */
	readonly promptId: string;
}

/**
 * Properties for building a prompt-router ARN.
 */
export interface BedrockPromptRouterArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a prompt-router ARN.
 */
export interface BedrockPromptRouterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a prompt-version ARN.
 */
export interface BedrockPromptVersionArnProps {
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
}

/**
 * Parsed components of a prompt-version ARN.
 */
export interface BedrockPromptVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PromptId component. */
	readonly promptId: string;
	/** The PromptVersion component. */
	readonly promptVersion: string;
}

/**
 * Properties for building a provisioned-model ARN.
 */
export interface BedrockProvisionedModelArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a provisioned-model ARN.
 */
export interface BedrockProvisionedModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface BedrockSessionArnProps {
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
export interface BedrockSessionArnComponents {
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
 * Properties for building a system-tool ARN.
 */
export interface BedrockSystemToolArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a system-tool ARN.
 */
export interface BedrockSystemToolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AdvancedPromptOptimizationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):advanced-prompt-optimization-job\/(?<resourceId>[^:/?]+)$/;
const AgentArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):agent\/(?<agentId>[^:/?]+)$/;
const AgentAliasArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):agent-alias\/(?<agentId>[^:/?]+)\/(?<agentAliasId>[^:/?]+)$/;
const ApplicationInferenceProfileArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):application-inference-profile\/(?<resourceId>[^:/?]+)$/;
const AsyncInvokeArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):async-invoke\/(?<resourceId>[^:/?]+)$/;
const AutomatedReasoningPolicyArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):automated-reasoning-policy\/(?<automatedReasoningPolicyId>[^:/?]+)$/;
const AutomatedReasoningPolicyVersionArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):automated-reasoning-policy\/(?<automatedReasoningPolicyId>[^:/?]+):(?<automatedReasoningPolicyVersion>[^:/?]+)$/;
const BedrockMarketplaceModelEndpointArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):marketplace\/model-endpoint\/all-access$/;
const BlueprintArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):blueprint\/(?<blueprintId>[^:/?]+)$/;
const BlueprintOptimizationInvocationArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):blueprint-optimization-invocation\/(?<resourceId>[^:/?]+)$/;
const CustomModelArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):custom-model\/(?<resourceId>[^:/?]+)$/;
const CustomModelDeploymentArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):custom-model-deployment\/(?<resourceId>[^:/?]+)$/;
const DataAutomationInvocationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-invocation\/(?<jobId>[^:/?]+)$/;
const DataAutomationLibraryArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-library\/(?<dataAutomationLibraryId>[^:/?]+)$/;
const DataAutomationLibraryIngestionJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-library-ingestion-job\/(?<ingestionJobId>[^:/?]+)$/;
const DataAutomationProfileArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-profile\/(?<profileId>[^:/?]+)$/;
const DataAutomationProjectArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):data-automation-project\/(?<projectId>[^:/?]+)$/;
const DefaultPromptRouterArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):default-prompt-router\/(?<resourceId>[^:/?]+)$/;
const EvaluationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):evaluation-job\/(?<resourceId>[^:/?]+)$/;
const FlowArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow\/(?<flowId>[^:/?]+)$/;
const FlowAliasArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow\/(?<flowId>[^:/?]+)\/alias\/(?<flowAliasId>[^:/?]+)$/;
const FlowExecutionArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):flow\/(?<flowId>[^:/?]+)\/alias\/(?<flowAliasId>[^:/?]+)\/execution\/(?<flowExecutionId>[^:/?]+)$/;
const FoundationModelArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*)::foundation-model\/(?<resourceId>[^:/?]+)$/;
const GuardrailArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):guardrail\/(?<guardrailId>[^:/?]+)$/;
const GuardrailProfileArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):guardrail-profile\/(?<resourceId>[^:/?]+)$/;
const ImportedModelArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):imported-model\/(?<resourceId>[^:/?]+)$/;
const InferenceProfileArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):inference-profile\/(?<resourceId>[^:/?]+)$/;
const KnowledgeBaseArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):knowledge-base\/(?<knowledgeBaseId>[^:/?]+)$/;
const ModelCopyJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-copy-job\/(?<resourceId>[^:/?]+)$/;
const ModelCustomizationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-customization-job\/(?<resourceId>[^:/?]+)$/;
const ModelEvaluationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-evaluation-job\/(?<resourceId>[^:/?]+)$/;
const ModelImportJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-import-job\/(?<resourceId>[^:/?]+)$/;
const ModelInvocationJobArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):model-invocation-job\/(?<jobIdentifier>[^:/?]+)$/;
const PromptArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt\/(?<promptId>[^:/?]+)$/;
const PromptRouterArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt-router\/(?<resourceId>[^:/?]+)$/;
const PromptVersionArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):prompt\/(?<promptId>[^:/?]+):(?<promptVersion>[^:/?]+)$/;
const ProvisionedModelArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):provisioned-model\/(?<resourceId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):bedrock:(?<region>[^:]*):(?<account>[^:]*):session\/(?<sessionId>[^:/?]+)$/;
const SystemToolArnRegex =
	/^arn:(?<partition>[^:]+):bedrock::(?<account>[^:]*):system-tool\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bedrock resources.
 */
export class BedrockResources {
	/**
	 * Builds an ARN for the advanced-prompt-optimization-job resource.
	 */
	static advancedPromptOptimizationJob(
		props: BedrockAdvancedPromptOptimizationJobArnProps,
	): string {
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
	static parseAdvancedPromptOptimizationJobArn(
		arn: string,
	): BedrockAdvancedPromptOptimizationJobArnComponents {
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
	static agent(props: BedrockAgentArnProps): string {
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
	static parseAgentArn(arn: string): BedrockAgentArnComponents {
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
	static agentAlias(props: BedrockAgentAliasArnProps): string {
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
	static parseAgentAliasArn(arn: string): BedrockAgentAliasArnComponents {
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
	static applicationInferenceProfile(
		props: BedrockApplicationInferenceProfileArnProps,
	): string {
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
	static parseApplicationInferenceProfileArn(
		arn: string,
	): BedrockApplicationInferenceProfileArnComponents {
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
	static asyncInvoke(props: BedrockAsyncInvokeArnProps): string {
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
	static parseAsyncInvokeArn(arn: string): BedrockAsyncInvokeArnComponents {
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
	static automatedReasoningPolicy(
		props: BedrockAutomatedReasoningPolicyArnProps,
	): string {
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
	static parseAutomatedReasoningPolicyArn(
		arn: string,
	): BedrockAutomatedReasoningPolicyArnComponents {
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
	static automatedReasoningPolicyVersion(
		props: BedrockAutomatedReasoningPolicyVersionArnProps,
	): string {
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
	static parseAutomatedReasoningPolicyVersionArn(
		arn: string,
	): BedrockAutomatedReasoningPolicyVersionArnComponents {
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
	static bedrockMarketplaceModelEndpoint(
		props: BedrockBedrockMarketplaceModelEndpointArnProps,
	): string {
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
	static parseBedrockMarketplaceModelEndpointArn(
		arn: string,
	): BedrockBedrockMarketplaceModelEndpointArnComponents {
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
	static blueprint(props: BedrockBlueprintArnProps): string {
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
	static parseBlueprintArn(arn: string): BedrockBlueprintArnComponents {
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
	static blueprintOptimizationInvocation(
		props: BedrockBlueprintOptimizationInvocationArnProps,
	): string {
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
	static parseBlueprintOptimizationInvocationArn(
		arn: string,
	): BedrockBlueprintOptimizationInvocationArnComponents {
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
	static customModel(props: BedrockCustomModelArnProps): string {
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
	static parseCustomModelArn(arn: string): BedrockCustomModelArnComponents {
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
	static customModelDeployment(
		props: BedrockCustomModelDeploymentArnProps,
	): string {
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
	static parseCustomModelDeploymentArn(
		arn: string,
	): BedrockCustomModelDeploymentArnComponents {
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
	static dataAutomationInvocationJob(
		props: BedrockDataAutomationInvocationJobArnProps,
	): string {
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
	static parseDataAutomationInvocationJobArn(
		arn: string,
	): BedrockDataAutomationInvocationJobArnComponents {
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
	static dataAutomationLibrary(
		props: BedrockDataAutomationLibraryArnProps,
	): string {
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
	static parseDataAutomationLibraryArn(
		arn: string,
	): BedrockDataAutomationLibraryArnComponents {
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
	static dataAutomationLibraryIngestionJob(
		props: BedrockDataAutomationLibraryIngestionJobArnProps,
	): string {
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
	static parseDataAutomationLibraryIngestionJobArn(
		arn: string,
	): BedrockDataAutomationLibraryIngestionJobArnComponents {
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
	static dataAutomationProfile(
		props: BedrockDataAutomationProfileArnProps,
	): string {
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
	static parseDataAutomationProfileArn(
		arn: string,
	): BedrockDataAutomationProfileArnComponents {
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
	static dataAutomationProject(
		props: BedrockDataAutomationProjectArnProps,
	): string {
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
	static parseDataAutomationProjectArn(
		arn: string,
	): BedrockDataAutomationProjectArnComponents {
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
	static defaultPromptRouter(
		props: BedrockDefaultPromptRouterArnProps,
	): string {
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
	static parseDefaultPromptRouterArn(
		arn: string,
	): BedrockDefaultPromptRouterArnComponents {
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
	static evaluationJob(props: BedrockEvaluationJobArnProps): string {
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
	static parseEvaluationJobArn(arn: string): BedrockEvaluationJobArnComponents {
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
	static flow(props: BedrockFlowArnProps): string {
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
	static parseFlowArn(arn: string): BedrockFlowArnComponents {
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
	static flowAlias(props: BedrockFlowAliasArnProps): string {
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
	static parseFlowAliasArn(arn: string): BedrockFlowAliasArnComponents {
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
	static flowExecution(props: BedrockFlowExecutionArnProps): string {
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
	static parseFlowExecutionArn(arn: string): BedrockFlowExecutionArnComponents {
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
	static foundationModel(props: BedrockFoundationModelArnProps): string {
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
	static parseFoundationModelArn(
		arn: string,
	): BedrockFoundationModelArnComponents {
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
	static guardrail(props: BedrockGuardrailArnProps): string {
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
	static parseGuardrailArn(arn: string): BedrockGuardrailArnComponents {
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
	static guardrailProfile(props: BedrockGuardrailProfileArnProps): string {
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
	static parseGuardrailProfileArn(
		arn: string,
	): BedrockGuardrailProfileArnComponents {
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
	static importedModel(props: BedrockImportedModelArnProps): string {
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
	static parseImportedModelArn(arn: string): BedrockImportedModelArnComponents {
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
	static inferenceProfile(props: BedrockInferenceProfileArnProps): string {
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
	static parseInferenceProfileArn(
		arn: string,
	): BedrockInferenceProfileArnComponents {
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
	static knowledgeBase(props: BedrockKnowledgeBaseArnProps): string {
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
	static parseKnowledgeBaseArn(arn: string): BedrockKnowledgeBaseArnComponents {
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
	static modelCopyJob(props: BedrockModelCopyJobArnProps): string {
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
	static parseModelCopyJobArn(arn: string): BedrockModelCopyJobArnComponents {
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
	static modelCustomizationJob(
		props: BedrockModelCustomizationJobArnProps,
	): string {
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
	static parseModelCustomizationJobArn(
		arn: string,
	): BedrockModelCustomizationJobArnComponents {
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
	static modelEvaluationJob(props: BedrockModelEvaluationJobArnProps): string {
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
	static parseModelEvaluationJobArn(
		arn: string,
	): BedrockModelEvaluationJobArnComponents {
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
	static modelImportJob(props: BedrockModelImportJobArnProps): string {
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
	static parseModelImportJobArn(
		arn: string,
	): BedrockModelImportJobArnComponents {
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
	static modelInvocationJob(props: BedrockModelInvocationJobArnProps): string {
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
	static parseModelInvocationJobArn(
		arn: string,
	): BedrockModelInvocationJobArnComponents {
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
	static prompt(props: BedrockPromptArnProps): string {
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
	static parsePromptArn(arn: string): BedrockPromptArnComponents {
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
	static promptRouter(props: BedrockPromptRouterArnProps): string {
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
	static parsePromptRouterArn(arn: string): BedrockPromptRouterArnComponents {
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
	static promptVersion(props: BedrockPromptVersionArnProps): string {
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
	static parsePromptVersionArn(arn: string): BedrockPromptVersionArnComponents {
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
	static provisionedModel(props: BedrockProvisionedModelArnProps): string {
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
	static parseProvisionedModelArn(
		arn: string,
	): BedrockProvisionedModelArnComponents {
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
	static session(props: BedrockSessionArnProps): string {
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
	static parseSessionArn(arn: string): BedrockSessionArnComponents {
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
	static systemTool(props: BedrockSystemToolArnProps): string {
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
	static parseSystemToolArn(arn: string): BedrockSystemToolArnComponents {
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
	static readonly AgenticRetrieveStream: string[] = [
		"bedrock:AgenticRetrieveStream",
		"bedrock:Retrieve",
	];
	/** IAM actions required for the ApplyGuardrail API call. */
	static readonly ApplyGuardrail: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeAutomatedReasoningPolicy",
	];
	/** IAM actions required for the AssociateAgentCollaborator API call. */
	static readonly AssociateAgentCollaborator: string[] = [
		"bedrock:AssociateAgentCollaborator",
	];
	/** IAM actions required for the AssociateAgentKnowledgeBase API call. */
	static readonly AssociateAgentKnowledgeBase: string[] = [
		"bedrock:AssociateAgentKnowledgeBase",
	];
	/** IAM actions required for the BatchDeleteAdvancedPromptOptimizationJob API call. */
	static readonly BatchDeleteAdvancedPromptOptimizationJob: string[] = [
		"bedrock:BatchDeleteAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the BatchDeleteEvaluationJob API call. */
	static readonly BatchDeleteEvaluationJob: string[] = [
		"bedrock:BatchDeleteEvaluationJob",
	];
	/** IAM actions required for the CancelAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly CancelAutomatedReasoningPolicyBuildWorkflow: string[] = [
		"bedrock:CancelAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the Converse API call. */
	static readonly Converse: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the ConverseStream API call. */
	static readonly ConverseStream: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModelWithResponseStream",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the CopyBlueprintStage API call. */
	static readonly CopyBlueprintStage: string[] = ["bedrock:CopyBlueprintStage"];
	/** IAM actions required for the CountTokens API call. */
	static readonly CountTokens: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CountTokens",
	];
	/** IAM actions required for the CreateAdvancedPromptOptimizationJob API call. */
	static readonly CreateAdvancedPromptOptimizationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAdvancedPromptOptimizationJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAgent API call. */
	static readonly CreateAgent: string[] = [
		"bedrock:CreateAgent",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAgentActionGroup API call. */
	static readonly CreateAgentActionGroup: string[] = [
		"bedrock:CreateAgentActionGroup",
	];
	/** IAM actions required for the CreateAgentAlias API call. */
	static readonly CreateAgentAlias: string[] = [
		"bedrock:CreateAgentAlias",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicy API call. */
	static readonly CreateAutomatedReasoningPolicy: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicy",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicyTestCase API call. */
	static readonly CreateAutomatedReasoningPolicyTestCase: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the CreateAutomatedReasoningPolicyVersion API call. */
	static readonly CreateAutomatedReasoningPolicyVersion: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateAutomatedReasoningPolicyVersion",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateBlueprint API call. */
	static readonly CreateBlueprint: string[] = [
		"bedrock:CreateBlueprint",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateBlueprintVersion API call. */
	static readonly CreateBlueprintVersion: string[] = [
		"bedrock:CreateBlueprintVersion",
	];
	/** IAM actions required for the CreateCustomModel API call. */
	static readonly CreateCustomModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateCustomModel",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateCustomModelDeployment API call. */
	static readonly CreateCustomModelDeployment: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateCustomModelDeployment",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataAutomationLibrary API call. */
	static readonly CreateDataAutomationLibrary: string[] = [
		"bedrock:CreateDataAutomationLibrary",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataAutomationProject API call. */
	static readonly CreateDataAutomationProject: string[] = [
		"bedrock:CreateDataAutomationProject",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CreateDataSource: string[] = ["bedrock:CreateDataSource"];
	/** IAM actions required for the CreateEvaluationJob API call. */
	static readonly CreateEvaluationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateEvaluationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CreateFlow: string[] = [
		"bedrock:CreateFlow",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlowAlias API call. */
	static readonly CreateFlowAlias: string[] = [
		"bedrock:CreateFlowAlias",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateFlowVersion API call. */
	static readonly CreateFlowVersion: string[] = ["bedrock:CreateFlowVersion"];
	/** IAM actions required for the CreateFoundationModelAgreement API call. */
	static readonly CreateFoundationModelAgreement: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateFoundationModelAgreement",
	];
	/** IAM actions required for the CreateGuardrail API call. */
	static readonly CreateGuardrail: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateGuardrail",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateGuardrailVersion API call. */
	static readonly CreateGuardrailVersion: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateGuardrailVersion",
	];
	/** IAM actions required for the CreateInferenceProfile API call. */
	static readonly CreateInferenceProfile: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateInferenceProfile",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateInvocation API call. */
	static readonly CreateInvocation: string[] = ["bedrock:CreateInvocation"];
	/** IAM actions required for the CreateKnowledgeBase API call. */
	static readonly CreateKnowledgeBase: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:CreateKnowledgeBase",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateMarketplaceModelEndpoint API call. */
	static readonly CreateMarketplaceModelEndpoint: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateMarketplaceModelEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelCopyJob API call. */
	static readonly CreateModelCopyJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelCopyJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelCustomizationJob API call. */
	static readonly CreateModelCustomizationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelCustomizationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelImportJob API call. */
	static readonly CreateModelImportJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelImportJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateModelInvocationJob API call. */
	static readonly CreateModelInvocationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateModelInvocationJob",
		"iam:PassRole",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePrompt API call. */
	static readonly CreatePrompt: string[] = [
		"bedrock:CreatePrompt",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePromptRouter API call. */
	static readonly CreatePromptRouter: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreatePromptRouter",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreatePromptVersion API call. */
	static readonly CreatePromptVersion: string[] = [
		"bedrock:CreatePromptVersion",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateProvisionedModelThroughput API call. */
	static readonly CreateProvisionedModelThroughput: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:CreateProvisionedModelThroughput",
		"bedrock:TagResource",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CreateSession: string[] = [
		"bedrock:CreateSession",
		"bedrock:TagResource",
	];
	/** IAM actions required for the DeleteAgent API call. */
	static readonly DeleteAgent: string[] = ["bedrock:DeleteAgent"];
	/** IAM actions required for the DeleteAgentActionGroup API call. */
	static readonly DeleteAgentActionGroup: string[] = [
		"bedrock:DeleteAgentActionGroup",
	];
	/** IAM actions required for the DeleteAgentAlias API call. */
	static readonly DeleteAgentAlias: string[] = ["bedrock:DeleteAgentAlias"];
	/** IAM actions required for the DeleteAgentMemory API call. */
	static readonly DeleteAgentMemory: string[] = ["bedrock:DeleteAgentMemory"];
	/** IAM actions required for the DeleteAgentVersion API call. */
	static readonly DeleteAgentVersion: string[] = ["bedrock:DeleteAgentVersion"];
	/** IAM actions required for the DeleteAutomatedReasoningPolicy API call. */
	static readonly DeleteAutomatedReasoningPolicy: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteAutomatedReasoningPolicy",
	];
	/** IAM actions required for the DeleteAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly DeleteAutomatedReasoningPolicyBuildWorkflow: string[] = [
		"bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the DeleteAutomatedReasoningPolicyTestCase API call. */
	static readonly DeleteAutomatedReasoningPolicyTestCase: string[] = [
		"bedrock:DeleteAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the DeleteBlueprint API call. */
	static readonly DeleteBlueprint: string[] = ["bedrock:DeleteBlueprint"];
	/** IAM actions required for the DeleteCustomModel API call. */
	static readonly DeleteCustomModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteCustomModel",
	];
	/** IAM actions required for the DeleteCustomModelDeployment API call. */
	static readonly DeleteCustomModelDeployment: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteCustomModelDeployment",
	];
	/** IAM actions required for the DeleteDataAutomationLibrary API call. */
	static readonly DeleteDataAutomationLibrary: string[] = [
		"bedrock:DeleteDataAutomationLibrary",
	];
	/** IAM actions required for the DeleteDataAutomationProject API call. */
	static readonly DeleteDataAutomationProject: string[] = [
		"bedrock:DeleteDataAutomationProject",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = ["bedrock:DeleteDataSource"];
	/** IAM actions required for the DeleteEnforcedGuardrailConfiguration API call. */
	static readonly DeleteEnforcedGuardrailConfiguration: string[] = [
		"bedrock:DeleteEnforcedGuardrailConfiguration",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DeleteFlow: string[] = ["bedrock:DeleteFlow"];
	/** IAM actions required for the DeleteFlowAlias API call. */
	static readonly DeleteFlowAlias: string[] = ["bedrock:DeleteFlowAlias"];
	/** IAM actions required for the DeleteFlowVersion API call. */
	static readonly DeleteFlowVersion: string[] = ["bedrock:DeleteFlowVersion"];
	/** IAM actions required for the DeleteFoundationModelAgreement API call. */
	static readonly DeleteFoundationModelAgreement: string[] = [
		"bedrock:DeleteFoundationModelAgreement",
	];
	/** IAM actions required for the DeleteGuardrail API call. */
	static readonly DeleteGuardrail: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteGuardrail",
	];
	/** IAM actions required for the DeleteImportedModel API call. */
	static readonly DeleteImportedModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteImportedModel",
	];
	/** IAM actions required for the DeleteInferenceProfile API call. */
	static readonly DeleteInferenceProfile: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteInferenceProfile",
	];
	/** IAM actions required for the DeleteKnowledgeBase API call. */
	static readonly DeleteKnowledgeBase: string[] = [
		"bedrock:DeleteKnowledgeBase",
	];
	/** IAM actions required for the DeleteKnowledgeBaseDocuments API call. */
	static readonly DeleteKnowledgeBaseDocuments: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:DeleteKnowledgeBaseDocuments",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the DeleteMarketplaceModelEndpoint API call. */
	static readonly DeleteMarketplaceModelEndpoint: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteMarketplaceModelEndpoint",
	];
	/** IAM actions required for the DeleteModelInvocationLoggingConfiguration API call. */
	static readonly DeleteModelInvocationLoggingConfiguration: string[] = [
		"bedrock:DeleteModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the DeletePrompt API call. */
	static readonly DeletePrompt: string[] = ["bedrock:DeletePrompt"];
	/** IAM actions required for the DeletePromptRouter API call. */
	static readonly DeletePromptRouter: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeletePromptRouter",
	];
	/** IAM actions required for the DeleteProvisionedModelThroughput API call. */
	static readonly DeleteProvisionedModelThroughput: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:DeleteProvisionedModelThroughput",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"bedrock:DeleteResourcePolicy",
		"bedrock:PutResourcePolicy",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DeleteSession: string[] = ["bedrock:DeleteSession"];
	/** IAM actions required for the DeregisterMarketplaceModelEndpoint API call. */
	static readonly DeregisterMarketplaceModelEndpoint: string[] = [
		"bedrock:DeregisterMarketplaceModelEndpoint",
	];
	/** IAM actions required for the DisassociateAgentCollaborator API call. */
	static readonly DisassociateAgentCollaborator: string[] = [
		"bedrock:DisassociateAgentCollaborator",
	];
	/** IAM actions required for the DisassociateAgentKnowledgeBase API call. */
	static readonly DisassociateAgentKnowledgeBase: string[] = [
		"bedrock:DisassociateAgentKnowledgeBase",
	];
	/** IAM actions required for the EndSession API call. */
	static readonly EndSession: string[] = ["bedrock:EndSession"];
	/** IAM actions required for the ExportAutomatedReasoningPolicyVersion API call. */
	static readonly ExportAutomatedReasoningPolicyVersion: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ExportAutomatedReasoningPolicyVersion",
	];
	/** IAM actions required for the GenerateQuery API call. */
	static readonly GenerateQuery: string[] = [
		"bedrock:GenerateQuery",
		"bedrock:GetKnowledgeBase",
	];
	/** IAM actions required for the GetAccountDataRetention API call. */
	static readonly opGetAccountDataRetention: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAccountDataRetention",
	];
	/** IAM actions required for the GetAdvancedPromptOptimizationJob API call. */
	static readonly opGetAdvancedPromptOptimizationJob: string[] = [
		"bedrock:GetAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the GetAgent API call. */
	static readonly opGetAgent: string[] = ["bedrock:GetAgent"];
	/** IAM actions required for the GetAgentActionGroup API call. */
	static readonly opGetAgentActionGroup: string[] = [
		"bedrock:GetAgentActionGroup",
	];
	/** IAM actions required for the GetAgentAlias API call. */
	static readonly opGetAgentAlias: string[] = ["bedrock:GetAgentAlias"];
	/** IAM actions required for the GetAgentCollaborator API call. */
	static readonly opGetAgentCollaborator: string[] = [
		"bedrock:GetAgentCollaborator",
	];
	/** IAM actions required for the GetAgentKnowledgeBase API call. */
	static readonly opGetAgentKnowledgeBase: string[] = [
		"bedrock:GetAgentKnowledgeBase",
	];
	/** IAM actions required for the GetAgentMemory API call. */
	static readonly opGetAgentMemory: string[] = ["bedrock:GetAgentMemory"];
	/** IAM actions required for the GetAgentVersion API call. */
	static readonly opGetAgentVersion: string[] = ["bedrock:GetAgentVersion"];
	/** IAM actions required for the GetAsyncInvoke API call. */
	static readonly opGetAsyncInvoke: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAsyncInvoke",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicy API call. */
	static readonly opGetAutomatedReasoningPolicy: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetAutomatedReasoningPolicy",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyAnnotations API call. */
	static readonly opGetAutomatedReasoningPolicyAnnotations: string[] = [
		"bedrock:GetAutomatedReasoningPolicyAnnotations",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly opGetAutomatedReasoningPolicyBuildWorkflow: string[] = [
		"bedrock:GetAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyBuildWorkflowResultAssets API call. */
	static readonly opGetAutomatedReasoningPolicyBuildWorkflowResultAssets: string[] =
		["bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets"];
	/** IAM actions required for the GetAutomatedReasoningPolicyNextScenario API call. */
	static readonly opGetAutomatedReasoningPolicyNextScenario: string[] = [
		"bedrock:GetAutomatedReasoningPolicyNextScenario",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyTestCase API call. */
	static readonly opGetAutomatedReasoningPolicyTestCase: string[] = [
		"bedrock:GetAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the GetAutomatedReasoningPolicyTestResult API call. */
	static readonly opGetAutomatedReasoningPolicyTestResult: string[] = [
		"bedrock:GetAutomatedReasoningPolicyTestResult",
	];
	/** IAM actions required for the GetBlueprint API call. */
	static readonly opGetBlueprint: string[] = ["bedrock:GetBlueprint"];
	/** IAM actions required for the GetBlueprintOptimizationStatus API call. */
	static readonly opGetBlueprintOptimizationStatus: string[] = [
		"bedrock:GetBlueprintOptimizationStatus",
	];
	/** IAM actions required for the GetCustomModel API call. */
	static readonly opGetCustomModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetCustomModel",
	];
	/** IAM actions required for the GetCustomModelDeployment API call. */
	static readonly opGetCustomModelDeployment: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetCustomModelDeployment",
	];
	/** IAM actions required for the GetDataAutomationLibrary API call. */
	static readonly opGetDataAutomationLibrary: string[] = [
		"bedrock:GetDataAutomationLibrary",
	];
	/** IAM actions required for the GetDataAutomationLibraryEntity API call. */
	static readonly opGetDataAutomationLibraryEntity: string[] = [
		"bedrock:GetDataAutomationLibraryEntity",
	];
	/** IAM actions required for the GetDataAutomationLibraryIngestionJob API call. */
	static readonly opGetDataAutomationLibraryIngestionJob: string[] = [
		"bedrock:GetDataAutomationLibraryIngestionJob",
	];
	/** IAM actions required for the GetDataAutomationProject API call. */
	static readonly opGetDataAutomationProject: string[] = [
		"bedrock:GetDataAutomationProject",
	];
	/** IAM actions required for the GetDataAutomationStatus API call. */
	static readonly opGetDataAutomationStatus: string[] = [
		"bedrock:GetDataAutomationStatus",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly opGetDataSource: string[] = ["bedrock:GetDataSource"];
	/** IAM actions required for the GetDocumentContent API call. */
	static readonly opGetDocumentContent: string[] = [
		"bedrock:GetDocumentContent",
		"bedrock:Retrieve",
	];
	/** IAM actions required for the GetEvaluationJob API call. */
	static readonly opGetEvaluationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetEvaluationJob",
	];
	/** IAM actions required for the GetExecutionFlowSnapshot API call. */
	static readonly opGetExecutionFlowSnapshot: string[] = [
		"bedrock:GetExecutionFlowSnapshot",
	];
	/** IAM actions required for the GetFlow API call. */
	static readonly opGetFlow: string[] = ["bedrock:GetFlow"];
	/** IAM actions required for the GetFlowAlias API call. */
	static readonly opGetFlowAlias: string[] = ["bedrock:GetFlowAlias"];
	/** IAM actions required for the GetFlowExecution API call. */
	static readonly opGetFlowExecution: string[] = ["bedrock:GetFlowExecution"];
	/** IAM actions required for the GetFlowVersion API call. */
	static readonly opGetFlowVersion: string[] = ["bedrock:GetFlowVersion"];
	/** IAM actions required for the GetFoundationModel API call. */
	static readonly opGetFoundationModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetFoundationModel",
	];
	/** IAM actions required for the GetFoundationModelAvailability API call. */
	static readonly opGetFoundationModelAvailability: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetFoundationModelAvailability",
	];
	/** IAM actions required for the GetGuardrail API call. */
	static readonly opGetGuardrail: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetGuardrail",
	];
	/** IAM actions required for the GetImportedModel API call. */
	static readonly opGetImportedModel: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetImportedModel",
	];
	/** IAM actions required for the GetInferenceProfile API call. */
	static readonly opGetInferenceProfile: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetInferenceProfile",
	];
	/** IAM actions required for the GetIngestionJob API call. */
	static readonly opGetIngestionJob: string[] = ["bedrock:GetIngestionJob"];
	/** IAM actions required for the GetInvocationStep API call. */
	static readonly opGetInvocationStep: string[] = ["bedrock:GetInvocationStep"];
	/** IAM actions required for the GetKnowledgeBase API call. */
	static readonly opGetKnowledgeBase: string[] = ["bedrock:GetKnowledgeBase"];
	/** IAM actions required for the GetKnowledgeBaseDocuments API call. */
	static readonly opGetKnowledgeBaseDocuments: string[] = [
		"bedrock:GetKnowledgeBaseDocuments",
	];
	/** IAM actions required for the GetMarketplaceModelEndpoint API call. */
	static readonly opGetMarketplaceModelEndpoint: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetMarketplaceModelEndpoint",
	];
	/** IAM actions required for the GetModelCopyJob API call. */
	static readonly opGetModelCopyJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelCopyJob",
	];
	/** IAM actions required for the GetModelCustomizationJob API call. */
	static readonly opGetModelCustomizationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelCustomizationJob",
	];
	/** IAM actions required for the GetModelImportJob API call. */
	static readonly opGetModelImportJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelImportJob",
	];
	/** IAM actions required for the GetModelInvocationJob API call. */
	static readonly opGetModelInvocationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelInvocationJob",
	];
	/** IAM actions required for the GetModelInvocationLoggingConfiguration API call. */
	static readonly opGetModelInvocationLoggingConfiguration: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the GetPrompt API call. */
	static readonly opGetPrompt: string[] = ["bedrock:GetPrompt"];
	/** IAM actions required for the GetPromptRouter API call. */
	static readonly opGetPromptRouter: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetPromptRouter",
	];
	/** IAM actions required for the GetProvisionedModelThroughput API call. */
	static readonly opGetProvisionedModelThroughput: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetProvisionedModelThroughput",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["bedrock:GetResourcePolicy"];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["bedrock:GetSession"];
	/** IAM actions required for the GetUseCaseForModelAccess API call. */
	static readonly opGetUseCaseForModelAccess: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:GetUseCaseForModelAccess",
	];
	/** IAM actions required for the IngestKnowledgeBaseDocuments API call. */
	static readonly IngestKnowledgeBaseDocuments: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:IngestKnowledgeBaseDocuments",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the InvokeAgent API call. */
	static readonly InvokeAgent: string[] = ["bedrock:InvokeAgent"];
	/** IAM actions required for the InvokeBlueprintOptimizationAsync API call. */
	static readonly InvokeBlueprintOptimizationAsync: string[] = [
		"bedrock:InvokeBlueprintOptimizationAsync",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeDataAutomation API call. */
	static readonly InvokeDataAutomation: string[] = [
		"bedrock:InvokeDataAutomation",
	];
	/** IAM actions required for the InvokeDataAutomationAsync API call. */
	static readonly InvokeDataAutomationAsync: string[] = [
		"bedrock:InvokeDataAutomationAsync",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeDataAutomationLibraryIngestionJob API call. */
	static readonly InvokeDataAutomationLibraryIngestionJob: string[] = [
		"bedrock:InvokeDataAutomationLibraryIngestionJob",
		"bedrock:TagResource",
	];
	/** IAM actions required for the InvokeFlow API call. */
	static readonly InvokeFlow: string[] = ["bedrock:InvokeFlow"];
	/** IAM actions required for the InvokeGuardrailChecks API call. */
	static readonly InvokeGuardrailChecks: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeGuardrailChecks",
	];
	/** IAM actions required for the InvokeInlineAgent API call. */
	static readonly InvokeInlineAgent: string[] = ["bedrock:InvokeInlineAgent"];
	/** IAM actions required for the InvokeModel API call. */
	static readonly InvokeModel: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the InvokeModelWithBidirectionalStream API call. */
	static readonly InvokeModelWithBidirectionalStream: string[] = [
		"bedrock:InvokeModel",
	];
	/** IAM actions required for the InvokeModelWithResponseStream API call. */
	static readonly InvokeModelWithResponseStream: string[] = [
		"bedrock:ApplyGuardrail",
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:InvokeModelWithResponseStream",
		"bedrock:InvokeTool",
	];
	/** IAM actions required for the ListAdvancedPromptOptimizationJobs API call. */
	static readonly ListAdvancedPromptOptimizationJobs: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAdvancedPromptOptimizationJobs",
	];
	/** IAM actions required for the ListAgentActionGroups API call. */
	static readonly ListAgentActionGroups: string[] = [
		"bedrock:ListAgentActionGroups",
	];
	/** IAM actions required for the ListAgentAliases API call. */
	static readonly ListAgentAliases: string[] = ["bedrock:ListAgentAliases"];
	/** IAM actions required for the ListAgentCollaborators API call. */
	static readonly ListAgentCollaborators: string[] = [
		"bedrock:ListAgentCollaborators",
	];
	/** IAM actions required for the ListAgentKnowledgeBases API call. */
	static readonly ListAgentKnowledgeBases: string[] = [
		"bedrock:ListAgentKnowledgeBases",
	];
	/** IAM actions required for the ListAgentVersions API call. */
	static readonly ListAgentVersions: string[] = ["bedrock:ListAgentVersions"];
	/** IAM actions required for the ListAgents API call. */
	static readonly ListAgents: string[] = ["bedrock:ListAgents"];
	/** IAM actions required for the ListAsyncInvokes API call. */
	static readonly ListAsyncInvokes: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAsyncInvokes",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicies API call. */
	static readonly ListAutomatedReasoningPolicies: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAutomatedReasoningPolicies",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyBuildWorkflows API call. */
	static readonly ListAutomatedReasoningPolicyBuildWorkflows: string[] = [
		"bedrock:ListAutomatedReasoningPolicyBuildWorkflows",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyTestCases API call. */
	static readonly ListAutomatedReasoningPolicyTestCases: string[] = [
		"bedrock:ListAutomatedReasoningPolicyTestCases",
	];
	/** IAM actions required for the ListAutomatedReasoningPolicyTestResults API call. */
	static readonly ListAutomatedReasoningPolicyTestResults: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListAutomatedReasoningPolicyTestResults",
	];
	/** IAM actions required for the ListBlueprints API call. */
	static readonly ListBlueprints: string[] = ["bedrock:ListBlueprints"];
	/** IAM actions required for the ListCustomModelDeployments API call. */
	static readonly ListCustomModelDeployments: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListCustomModelDeployments",
	];
	/** IAM actions required for the ListCustomModels API call. */
	static readonly ListCustomModels: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListCustomModels",
	];
	/** IAM actions required for the ListDataAutomationLibraries API call. */
	static readonly ListDataAutomationLibraries: string[] = [
		"bedrock:ListDataAutomationLibraries",
	];
	/** IAM actions required for the ListDataAutomationLibraryEntities API call. */
	static readonly ListDataAutomationLibraryEntities: string[] = [
		"bedrock:ListDataAutomationLibraryEntities",
	];
	/** IAM actions required for the ListDataAutomationLibraryIngestionJobs API call. */
	static readonly ListDataAutomationLibraryIngestionJobs: string[] = [
		"bedrock:ListDataAutomationLibraryIngestionJobs",
	];
	/** IAM actions required for the ListDataAutomationProjects API call. */
	static readonly ListDataAutomationProjects: string[] = [
		"bedrock:ListDataAutomationProjects",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly ListDataSources: string[] = ["bedrock:ListDataSources"];
	/** IAM actions required for the ListEnforcedGuardrailsConfiguration API call. */
	static readonly ListEnforcedGuardrailsConfiguration: string[] = [
		"bedrock:ListEnforcedGuardrailsConfiguration",
	];
	/** IAM actions required for the ListEvaluationJobs API call. */
	static readonly ListEvaluationJobs: string[] = ["bedrock:ListEvaluationJobs"];
	/** IAM actions required for the ListFlowAliases API call. */
	static readonly ListFlowAliases: string[] = ["bedrock:ListFlowAliases"];
	/** IAM actions required for the ListFlowExecutionEvents API call. */
	static readonly ListFlowExecutionEvents: string[] = [
		"bedrock:ListFlowExecutionEvents",
	];
	/** IAM actions required for the ListFlowExecutions API call. */
	static readonly ListFlowExecutions: string[] = ["bedrock:ListFlowExecutions"];
	/** IAM actions required for the ListFlowVersions API call. */
	static readonly ListFlowVersions: string[] = ["bedrock:ListFlowVersions"];
	/** IAM actions required for the ListFlows API call. */
	static readonly ListFlows: string[] = ["bedrock:ListFlows"];
	/** IAM actions required for the ListFoundationModelAgreementOffers API call. */
	static readonly ListFoundationModelAgreementOffers: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListFoundationModelAgreementOffers",
	];
	/** IAM actions required for the ListFoundationModels API call. */
	static readonly ListFoundationModels: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListFoundationModels",
	];
	/** IAM actions required for the ListGuardrails API call. */
	static readonly ListGuardrails: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListGuardrails",
	];
	/** IAM actions required for the ListImportedModels API call. */
	static readonly ListImportedModels: string[] = ["bedrock:ListImportedModels"];
	/** IAM actions required for the ListInferenceProfiles API call. */
	static readonly ListInferenceProfiles: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListInferenceProfiles",
	];
	/** IAM actions required for the ListIngestionJobs API call. */
	static readonly ListIngestionJobs: string[] = ["bedrock:ListIngestionJobs"];
	/** IAM actions required for the ListInvocationSteps API call. */
	static readonly ListInvocationSteps: string[] = [
		"bedrock:ListInvocationSteps",
		"bedrock:ListInvocations",
	];
	/** IAM actions required for the ListInvocations API call. */
	static readonly ListInvocations: string[] = ["bedrock:ListInvocations"];
	/** IAM actions required for the ListKnowledgeBaseDocuments API call. */
	static readonly ListKnowledgeBaseDocuments: string[] = [
		"bedrock:ListKnowledgeBaseDocuments",
	];
	/** IAM actions required for the ListKnowledgeBases API call. */
	static readonly ListKnowledgeBases: string[] = ["bedrock:ListKnowledgeBases"];
	/** IAM actions required for the ListMarketplaceModelEndpoints API call. */
	static readonly ListMarketplaceModelEndpoints: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListMarketplaceModelEndpoints",
	];
	/** IAM actions required for the ListModelCopyJobs API call. */
	static readonly ListModelCopyJobs: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelCopyJobs",
	];
	/** IAM actions required for the ListModelCustomizationJobs API call. */
	static readonly ListModelCustomizationJobs: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelCustomizationJobs",
	];
	/** IAM actions required for the ListModelImportJobs API call. */
	static readonly ListModelImportJobs: string[] = [
		"bedrock:ListModelImportJobs",
	];
	/** IAM actions required for the ListModelInvocationJobs API call. */
	static readonly ListModelInvocationJobs: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListModelInvocationJobs",
	];
	/** IAM actions required for the ListPromptRouters API call. */
	static readonly ListPromptRouters: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListPromptRouters",
	];
	/** IAM actions required for the ListPrompts API call. */
	static readonly ListPrompts: string[] = ["bedrock:ListPrompts"];
	/** IAM actions required for the ListProvisionedModelThroughputs API call. */
	static readonly ListProvisionedModelThroughputs: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListProvisionedModelThroughputs",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["bedrock:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:ListTagsForResource",
	];
	/** IAM actions required for the OptimizePrompt API call. */
	static readonly OptimizePrompt: string[] = ["bedrock:OptimizePrompt"];
	/** IAM actions required for the PrepareAgent API call. */
	static readonly PrepareAgent: string[] = ["bedrock:PrepareAgent"];
	/** IAM actions required for the PrepareFlow API call. */
	static readonly PrepareFlow: string[] = ["bedrock:PrepareFlow"];
	/** IAM actions required for the PutAccountDataRetention API call. */
	static readonly PutAccountDataRetention: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:PutAccountDataRetention",
	];
	/** IAM actions required for the PutEnforcedGuardrailConfiguration API call. */
	static readonly PutEnforcedGuardrailConfiguration: string[] = [
		"bedrock:PutEnforcedGuardrailConfiguration",
	];
	/** IAM actions required for the PutInvocationStep API call. */
	static readonly PutInvocationStep: string[] = ["bedrock:PutInvocationStep"];
	/** IAM actions required for the PutModelInvocationLoggingConfiguration API call. */
	static readonly PutModelInvocationLoggingConfiguration: string[] = [
		"bedrock:CallWithBearerToken",
		"iam:PassRole",
		"bedrock:PutModelInvocationLoggingConfiguration",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["bedrock:PutResourcePolicy"];
	/** IAM actions required for the PutUseCaseForModelAccess API call. */
	static readonly PutUseCaseForModelAccess: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:PutUseCaseForModelAccess",
	];
	/** IAM actions required for the RegisterMarketplaceModelEndpoint API call. */
	static readonly RegisterMarketplaceModelEndpoint: string[] = [
		"bedrock:RegisterMarketplaceModelEndpoint",
	];
	/** IAM actions required for the Rerank API call. */
	static readonly Rerank: string[] = ["bedrock:Rerank"];
	/** IAM actions required for the Retrieve API call. */
	static readonly Retrieve: string[] = ["bedrock:Retrieve"];
	/** IAM actions required for the RetrieveAndGenerate API call. */
	static readonly RetrieveAndGenerate: string[] = [
		"bedrock:RetrieveAndGenerate",
	];
	/** IAM actions required for the RetrieveAndGenerateStream API call. */
	static readonly RetrieveAndGenerateStream: string[] = [
		"bedrock:RetrieveAndGenerate",
	];
	/** IAM actions required for the StartAsyncInvoke API call. */
	static readonly StartAsyncInvoke: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeModel",
		"bedrock:TagResource",
	];
	/** IAM actions required for the StartAutomatedReasoningPolicyBuildWorkflow API call. */
	static readonly StartAutomatedReasoningPolicyBuildWorkflow: string[] = [
		"bedrock:StartAutomatedReasoningPolicyBuildWorkflow",
	];
	/** IAM actions required for the StartAutomatedReasoningPolicyTestWorkflow API call. */
	static readonly StartAutomatedReasoningPolicyTestWorkflow: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:InvokeAutomatedReasoningPolicy",
		"bedrock:StartAutomatedReasoningPolicyTestWorkflow",
	];
	/** IAM actions required for the StartFlowExecution API call. */
	static readonly StartFlowExecution: string[] = ["bedrock:StartFlowExecution"];
	/** IAM actions required for the StartIngestionJob API call. */
	static readonly StartIngestionJob: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"bedrock:StartIngestionJob",
	];
	/** IAM actions required for the StopAdvancedPromptOptimizationJob API call. */
	static readonly StopAdvancedPromptOptimizationJob: string[] = [
		"bedrock:StopAdvancedPromptOptimizationJob",
	];
	/** IAM actions required for the StopEvaluationJob API call. */
	static readonly StopEvaluationJob: string[] = ["bedrock:StopEvaluationJob"];
	/** IAM actions required for the StopFlowExecution API call. */
	static readonly StopFlowExecution: string[] = ["bedrock:StopFlowExecution"];
	/** IAM actions required for the StopIngestionJob API call. */
	static readonly StopIngestionJob: string[] = ["bedrock:StopIngestionJob"];
	/** IAM actions required for the StopModelCustomizationJob API call. */
	static readonly StopModelCustomizationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:StopModelCustomizationJob",
	];
	/** IAM actions required for the StopModelInvocationJob API call. */
	static readonly StopModelInvocationJob: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:StopModelInvocationJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UntagResource",
	];
	/** IAM actions required for the UpdateAgent API call. */
	static readonly UpdateAgent: string[] = [
		"iam:PassRole",
		"bedrock:UpdateAgent",
	];
	/** IAM actions required for the UpdateAgentActionGroup API call. */
	static readonly UpdateAgentActionGroup: string[] = [
		"bedrock:UpdateAgentActionGroup",
	];
	/** IAM actions required for the UpdateAgentAlias API call. */
	static readonly UpdateAgentAlias: string[] = ["bedrock:UpdateAgentAlias"];
	/** IAM actions required for the UpdateAgentCollaborator API call. */
	static readonly UpdateAgentCollaborator: string[] = [
		"bedrock:UpdateAgentCollaborator",
	];
	/** IAM actions required for the UpdateAgentKnowledgeBase API call. */
	static readonly UpdateAgentKnowledgeBase: string[] = [
		"bedrock:UpdateAgentKnowledgeBase",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicy API call. */
	static readonly UpdateAutomatedReasoningPolicy: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateAutomatedReasoningPolicy",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicyAnnotations API call. */
	static readonly UpdateAutomatedReasoningPolicyAnnotations: string[] = [
		"bedrock:UpdateAutomatedReasoningPolicyAnnotations",
	];
	/** IAM actions required for the UpdateAutomatedReasoningPolicyTestCase API call. */
	static readonly UpdateAutomatedReasoningPolicyTestCase: string[] = [
		"bedrock:UpdateAutomatedReasoningPolicyTestCase",
	];
	/** IAM actions required for the UpdateBlueprint API call. */
	static readonly UpdateBlueprint: string[] = ["bedrock:UpdateBlueprint"];
	/** IAM actions required for the UpdateCustomModelDeployment API call. */
	static readonly UpdateCustomModelDeployment: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateCustomModelDeployment",
	];
	/** IAM actions required for the UpdateDataAutomationLibrary API call. */
	static readonly UpdateDataAutomationLibrary: string[] = [
		"bedrock:UpdateDataAutomationLibrary",
	];
	/** IAM actions required for the UpdateDataAutomationProject API call. */
	static readonly UpdateDataAutomationProject: string[] = [
		"bedrock:UpdateDataAutomationProject",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = ["bedrock:UpdateDataSource"];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UpdateFlow: string[] = ["iam:PassRole", "bedrock:UpdateFlow"];
	/** IAM actions required for the UpdateFlowAlias API call. */
	static readonly UpdateFlowAlias: string[] = ["bedrock:UpdateFlowAlias"];
	/** IAM actions required for the UpdateGuardrail API call. */
	static readonly UpdateGuardrail: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateGuardrail",
	];
	/** IAM actions required for the UpdateKnowledgeBase API call. */
	static readonly UpdateKnowledgeBase: string[] = [
		"bedrock:AssociateThirdPartyKnowledgeBase",
		"iam:PassRole",
		"bedrock:UpdateKnowledgeBase",
	];
	/** IAM actions required for the UpdateMarketplaceModelEndpoint API call. */
	static readonly UpdateMarketplaceModelEndpoint: string[] = [
		"bedrock:CallWithBearerToken",
		"iam:PassRole",
		"bedrock:UpdateMarketplaceModelEndpoint",
	];
	/** IAM actions required for the UpdatePrompt API call. */
	static readonly UpdatePrompt: string[] = ["bedrock:UpdatePrompt"];
	/** IAM actions required for the UpdateProvisionedModelThroughput API call. */
	static readonly UpdateProvisionedModelThroughput: string[] = [
		"bedrock:CallWithBearerToken",
		"bedrock:UpdateProvisionedModelThroughput",
	];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UpdateSession: string[] = ["bedrock:UpdateSession"];
	/** IAM actions required for the ValidateFlowDefinition API call. */
	static readonly ValidateFlowDefinition: string[] = [
		"bedrock:ValidateFlowDefinition",
	];
}

/**
 * Condition key constants and builders for bedrock.
 */
export class BedrockConditions {
	/** Condition keys applicable to the AssociateThirdPartyKnowledgeBase action. */
	static readonly AssociateThirdPartyKnowledgeBaseConditionKeys: string[] = [
		"bedrock:ThirdPartyKnowledgeBaseCredentialsSecretArn",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CallWithBearerTokenConditionKeys: string[] = [
		"bedrock:BearerTokenType",
	];
	/** Condition keys applicable to the CreateAdvancedPromptOptimizationJob action. */
	static readonly CreateAdvancedPromptOptimizationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAgent action. */
	static readonly CreateAgentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAgentActionGroup action. */
	static readonly CreateAgentActionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAgentAlias action. */
	static readonly CreateAgentAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomatedReasoningPolicy action. */
	static readonly CreateAutomatedReasoningPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomatedReasoningPolicyVersion action. */
	static readonly CreateAutomatedReasoningPolicyVersionConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateBlueprint action. */
	static readonly CreateBlueprintConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomModel action. */
	static readonly CreateCustomModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomModelDeployment action. */
	static readonly CreateCustomModelDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataAutomationLibrary action. */
	static readonly CreateDataAutomationLibraryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataAutomationProject action. */
	static readonly CreateDataAutomationProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEvaluationJob action. */
	static readonly CreateEvaluationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlow action. */
	static readonly CreateFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlowAlias action. */
	static readonly CreateFlowAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGuardrail action. */
	static readonly CreateGuardrailConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceProfile action. */
	static readonly CreateInferenceProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKnowledgeBase action. */
	static readonly CreateKnowledgeBaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelCopyJob action. */
	static readonly CreateModelCopyJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelCustomizationJob action. */
	static readonly CreateModelCustomizationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelEvaluationJob action. */
	static readonly CreateModelEvaluationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelImportJob action. */
	static readonly CreateModelImportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelInvocationJob action. */
	static readonly CreateModelInvocationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrompt action. */
	static readonly CreatePromptConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePromptRouter action. */
	static readonly CreatePromptRouterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePromptVersion action. */
	static readonly CreatePromptVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisionedModelThroughput action. */
	static readonly CreateProvisionedModelThroughputConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CreateSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeBlueprintOptimizationAsync action. */
	static readonly InvokeBlueprintOptimizationAsyncConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeDataAutomationAsync action. */
	static readonly InvokeDataAutomationAsyncConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeDataAutomationLibraryIngestionJob action. */
	static readonly InvokeDataAutomationLibraryIngestionJobConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the InvokeInlineAgent action. */
	static readonly InvokeInlineAgentConditionKeys: string[] = [
		"bedrock:InlineAgentName",
	];
	/** Condition keys applicable to the InvokeModel action. */
	static readonly InvokeModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock:GuardrailIdentifier",
		"bedrock:InferenceProfileArn",
		"bedrock:PromptRouterArn",
		"bedrock:ServiceTier",
	];
	/** Condition keys applicable to the InvokeModelWithResponseStream action. */
	static readonly InvokeModelWithResponseStreamConditionKeys: string[] = [
		"bedrock:GuardrailIdentifier",
		"bedrock:InferenceProfileArn",
		"bedrock:PromptRouterArn",
		"bedrock:ServiceTier",
	];
	/** Condition keys applicable to the PutAccountDataRetention action. */
	static readonly PutAccountDataRetentionConditionKeys: string[] = [
		"bedrock:DataRetentionMode",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
