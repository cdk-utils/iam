// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/finops-agent.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the finops-agent service.
 */
export class FinopsAgentActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "finops-agent";

	/** [Write] finops-agent:AcceptAgentRequest */
	static readonly AcceptAgentRequest = "finops-agent:AcceptAgentRequest";
	/** [Write] finops-agent:CancelTask */
	static readonly CancelTask = "finops-agent:CancelTask";
	/** [Write] finops-agent:CancelTurn */
	static readonly CancelTurn = "finops-agent:CancelTurn";
	/** [Write] finops-agent:CreateAgentSpace */
	static readonly CreateAgentSpace = "finops-agent:CreateAgentSpace";
	/** [Write] finops-agent:CreateAutomation */
	static readonly CreateAutomation = "finops-agent:CreateAutomation";
	/** [Write] finops-agent:CreateConnection */
	static readonly CreateConnection = "finops-agent:CreateConnection";
	/** [Write] finops-agent:CreateConversation */
	static readonly CreateConversation = "finops-agent:CreateConversation";
	/** [Write] finops-agent:CreateDocument */
	static readonly CreateDocument = "finops-agent:CreateDocument";
	/** [Write] finops-agent:CreateIntegration */
	static readonly CreateIntegration = "finops-agent:CreateIntegration";
	/** [Write] finops-agent:CreateOneTimeLoginSession */
	static readonly CreateOneTimeLoginSession =
		"finops-agent:CreateOneTimeLoginSession";
	/** [Write] finops-agent:CreateTask */
	static readonly CreateTask = "finops-agent:CreateTask";
	/** [Write] finops-agent:CreateTurn */
	static readonly CreateTurn = "finops-agent:CreateTurn";
	/** [Write] finops-agent:DeleteAgentSpace */
	static readonly DeleteAgentSpace = "finops-agent:DeleteAgentSpace";
	/** [Write] finops-agent:DeleteArtifact */
	static readonly DeleteArtifact = "finops-agent:DeleteArtifact";
	/** [Write] finops-agent:DeleteAutomation */
	static readonly DeleteAutomation = "finops-agent:DeleteAutomation";
	/** [Write] finops-agent:DeleteConnection */
	static readonly DeleteConnection = "finops-agent:DeleteConnection";
	/** [Write] finops-agent:DeleteDocument */
	static readonly DeleteDocument = "finops-agent:DeleteDocument";
	/** [Write] finops-agent:DeleteIntegration */
	static readonly DeleteIntegration = "finops-agent:DeleteIntegration";
	/** [Read] finops-agent:GetAgentRequest */
	static readonly actionGetAgentRequest = "finops-agent:GetAgentRequest";
	/** [Read] finops-agent:GetAgentSpace */
	static readonly actionGetAgentSpace = "finops-agent:GetAgentSpace";
	/** [Read] finops-agent:GetArtifactContent */
	static readonly actionGetArtifactContent = "finops-agent:GetArtifactContent";
	/** [Read] finops-agent:GetArtifactMetadata */
	static readonly actionGetArtifactMetadata =
		"finops-agent:GetArtifactMetadata";
	/** [Read] finops-agent:GetAutomation */
	static readonly actionGetAutomation = "finops-agent:GetAutomation";
	/** [Read] finops-agent:GetConnection */
	static readonly actionGetConnection = "finops-agent:GetConnection";
	/** [Read] finops-agent:GetDocumentContent */
	static readonly actionGetDocumentContent = "finops-agent:GetDocumentContent";
	/** [Read] finops-agent:GetDocumentMetadata */
	static readonly actionGetDocumentMetadata =
		"finops-agent:GetDocumentMetadata";
	/** [Read] finops-agent:GetIntegration */
	static readonly actionGetIntegration = "finops-agent:GetIntegration";
	/** [Read] finops-agent:GetTask */
	static readonly actionGetTask = "finops-agent:GetTask";
	/** [Read] finops-agent:GetTurn */
	static readonly actionGetTurn = "finops-agent:GetTurn";
	/** [List] finops-agent:ListAgentSpaces */
	static readonly ListAgentSpaces = "finops-agent:ListAgentSpaces";
	/** [List] finops-agent:ListArtifacts */
	static readonly ListArtifacts = "finops-agent:ListArtifacts";
	/** [List] finops-agent:ListAutomations */
	static readonly ListAutomations = "finops-agent:ListAutomations";
	/** [List] finops-agent:ListConnections */
	static readonly ListConnections = "finops-agent:ListConnections";
	/** [List] finops-agent:ListConversations */
	static readonly ListConversations = "finops-agent:ListConversations";
	/** [List] finops-agent:ListDocuments */
	static readonly ListDocuments = "finops-agent:ListDocuments";
	/** [List] finops-agent:ListIntegrations */
	static readonly ListIntegrations = "finops-agent:ListIntegrations";
	/** [List] finops-agent:ListRecords */
	static readonly ListRecords = "finops-agent:ListRecords";
	/** [List] finops-agent:ListTasks */
	static readonly ListTasks = "finops-agent:ListTasks";
	/** [List] finops-agent:ListTurns */
	static readonly ListTurns = "finops-agent:ListTurns";
	/** [Write] finops-agent:RejectAgentRequest */
	static readonly RejectAgentRequest = "finops-agent:RejectAgentRequest";
	/** [Write] finops-agent:RestoreDocument */
	static readonly RestoreDocument = "finops-agent:RestoreDocument";
	/** [Write] finops-agent:SendFeedback */
	static readonly SendFeedback = "finops-agent:SendFeedback";
	/** [Write] finops-agent:UpdateAgentSpace */
	static readonly UpdateAgentSpace = "finops-agent:UpdateAgentSpace";
	/** [Write] finops-agent:UpdateAutomation */
	static readonly UpdateAutomation = "finops-agent:UpdateAutomation";
	/** [Write] finops-agent:UpdateConnection */
	static readonly UpdateConnection = "finops-agent:UpdateConnection";
	/** [Write] finops-agent:UpdateDocument */
	static readonly UpdateDocument = "finops-agent:UpdateDocument";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FinopsAgentActions.actionGetAgentRequest,
		FinopsAgentActions.actionGetAgentSpace,
		FinopsAgentActions.actionGetArtifactContent,
		FinopsAgentActions.actionGetArtifactMetadata,
		FinopsAgentActions.actionGetAutomation,
		FinopsAgentActions.actionGetConnection,
		FinopsAgentActions.actionGetDocumentContent,
		FinopsAgentActions.actionGetDocumentMetadata,
		FinopsAgentActions.actionGetIntegration,
		FinopsAgentActions.actionGetTask,
		FinopsAgentActions.actionGetTurn,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FinopsAgentActions.AcceptAgentRequest,
		FinopsAgentActions.CancelTask,
		FinopsAgentActions.CancelTurn,
		FinopsAgentActions.CreateAgentSpace,
		FinopsAgentActions.CreateAutomation,
		FinopsAgentActions.CreateConnection,
		FinopsAgentActions.CreateConversation,
		FinopsAgentActions.CreateDocument,
		FinopsAgentActions.CreateIntegration,
		FinopsAgentActions.CreateOneTimeLoginSession,
		FinopsAgentActions.CreateTask,
		FinopsAgentActions.CreateTurn,
		FinopsAgentActions.DeleteAgentSpace,
		FinopsAgentActions.DeleteArtifact,
		FinopsAgentActions.DeleteAutomation,
		FinopsAgentActions.DeleteConnection,
		FinopsAgentActions.DeleteDocument,
		FinopsAgentActions.DeleteIntegration,
		FinopsAgentActions.RejectAgentRequest,
		FinopsAgentActions.RestoreDocument,
		FinopsAgentActions.SendFeedback,
		FinopsAgentActions.UpdateAgentSpace,
		FinopsAgentActions.UpdateAutomation,
		FinopsAgentActions.UpdateConnection,
		FinopsAgentActions.UpdateDocument,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FinopsAgentActions.ListAgentSpaces,
		FinopsAgentActions.ListArtifacts,
		FinopsAgentActions.ListAutomations,
		FinopsAgentActions.ListConnections,
		FinopsAgentActions.ListConversations,
		FinopsAgentActions.ListDocuments,
		FinopsAgentActions.ListIntegrations,
		FinopsAgentActions.ListRecords,
		FinopsAgentActions.ListTasks,
		FinopsAgentActions.ListTurns,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
