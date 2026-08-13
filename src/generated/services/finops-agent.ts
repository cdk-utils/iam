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
	static readonly ACCEPT_AGENT_REQUEST = "finops-agent:AcceptAgentRequest";
	/** [Write] finops-agent:CancelTask */
	static readonly CANCEL_TASK = "finops-agent:CancelTask";
	/** [Write] finops-agent:CancelTurn */
	static readonly CANCEL_TURN = "finops-agent:CancelTurn";
	/** [Write] finops-agent:CreateAgentSpace */
	static readonly CREATE_AGENT_SPACE = "finops-agent:CreateAgentSpace";
	/** [Write] finops-agent:CreateAutomation */
	static readonly CREATE_AUTOMATION = "finops-agent:CreateAutomation";
	/** [Write] finops-agent:CreateConnection */
	static readonly CREATE_CONNECTION = "finops-agent:CreateConnection";
	/** [Write] finops-agent:CreateConversation */
	static readonly CREATE_CONVERSATION = "finops-agent:CreateConversation";
	/** [Write] finops-agent:CreateDocument */
	static readonly CREATE_DOCUMENT = "finops-agent:CreateDocument";
	/** [Write] finops-agent:CreateIntegration */
	static readonly CREATE_INTEGRATION = "finops-agent:CreateIntegration";
	/** [Write] finops-agent:CreateOneTimeLoginSession */
	static readonly CREATE_ONE_TIME_LOGIN_SESSION =
		"finops-agent:CreateOneTimeLoginSession";
	/** [Write] finops-agent:CreateTask */
	static readonly CREATE_TASK = "finops-agent:CreateTask";
	/** [Write] finops-agent:CreateTurn */
	static readonly CREATE_TURN = "finops-agent:CreateTurn";
	/** [Write] finops-agent:DeleteAgentSpace */
	static readonly DELETE_AGENT_SPACE = "finops-agent:DeleteAgentSpace";
	/** [Write] finops-agent:DeleteArtifact */
	static readonly DELETE_ARTIFACT = "finops-agent:DeleteArtifact";
	/** [Write] finops-agent:DeleteAutomation */
	static readonly DELETE_AUTOMATION = "finops-agent:DeleteAutomation";
	/** [Write] finops-agent:DeleteConnection */
	static readonly DELETE_CONNECTION = "finops-agent:DeleteConnection";
	/** [Write] finops-agent:DeleteDocument */
	static readonly DELETE_DOCUMENT = "finops-agent:DeleteDocument";
	/** [Write] finops-agent:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "finops-agent:DeleteIntegration";
	/** [Read] finops-agent:GetAgentRequest */
	static readonly GET_AGENT_REQUEST = "finops-agent:GetAgentRequest";
	/** [Read] finops-agent:GetAgentSpace */
	static readonly GET_AGENT_SPACE = "finops-agent:GetAgentSpace";
	/** [Read] finops-agent:GetArtifactContent */
	static readonly GET_ARTIFACT_CONTENT = "finops-agent:GetArtifactContent";
	/** [Read] finops-agent:GetArtifactMetadata */
	static readonly GET_ARTIFACT_METADATA = "finops-agent:GetArtifactMetadata";
	/** [Read] finops-agent:GetAutomation */
	static readonly GET_AUTOMATION = "finops-agent:GetAutomation";
	/** [Read] finops-agent:GetConnection */
	static readonly GET_CONNECTION = "finops-agent:GetConnection";
	/** [Read] finops-agent:GetDocumentContent */
	static readonly GET_DOCUMENT_CONTENT = "finops-agent:GetDocumentContent";
	/** [Read] finops-agent:GetDocumentMetadata */
	static readonly GET_DOCUMENT_METADATA = "finops-agent:GetDocumentMetadata";
	/** [Read] finops-agent:GetIntegration */
	static readonly GET_INTEGRATION = "finops-agent:GetIntegration";
	/** [Read] finops-agent:GetTask */
	static readonly GET_TASK = "finops-agent:GetTask";
	/** [Read] finops-agent:GetTurn */
	static readonly GET_TURN = "finops-agent:GetTurn";
	/** [List] finops-agent:ListAgentSpaces */
	static readonly LIST_AGENT_SPACES = "finops-agent:ListAgentSpaces";
	/** [List] finops-agent:ListArtifacts */
	static readonly LIST_ARTIFACTS = "finops-agent:ListArtifacts";
	/** [List] finops-agent:ListAutomations */
	static readonly LIST_AUTOMATIONS = "finops-agent:ListAutomations";
	/** [List] finops-agent:ListConnections */
	static readonly LIST_CONNECTIONS = "finops-agent:ListConnections";
	/** [List] finops-agent:ListConversations */
	static readonly LIST_CONVERSATIONS = "finops-agent:ListConversations";
	/** [List] finops-agent:ListDocuments */
	static readonly LIST_DOCUMENTS = "finops-agent:ListDocuments";
	/** [List] finops-agent:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "finops-agent:ListIntegrations";
	/** [List] finops-agent:ListRecords */
	static readonly LIST_RECORDS = "finops-agent:ListRecords";
	/** [List] finops-agent:ListTasks */
	static readonly LIST_TASKS = "finops-agent:ListTasks";
	/** [List] finops-agent:ListTurns */
	static readonly LIST_TURNS = "finops-agent:ListTurns";
	/** [Write] finops-agent:RejectAgentRequest */
	static readonly REJECT_AGENT_REQUEST = "finops-agent:RejectAgentRequest";
	/** [Write] finops-agent:RestoreDocument */
	static readonly RESTORE_DOCUMENT = "finops-agent:RestoreDocument";
	/** [Write] finops-agent:SendFeedback */
	static readonly SEND_FEEDBACK = "finops-agent:SendFeedback";
	/** [Write] finops-agent:UpdateAgentSpace */
	static readonly UPDATE_AGENT_SPACE = "finops-agent:UpdateAgentSpace";
	/** [Write] finops-agent:UpdateAutomation */
	static readonly UPDATE_AUTOMATION = "finops-agent:UpdateAutomation";
	/** [Write] finops-agent:UpdateConnection */
	static readonly UPDATE_CONNECTION = "finops-agent:UpdateConnection";
	/** [Write] finops-agent:UpdateDocument */
	static readonly UPDATE_DOCUMENT = "finops-agent:UpdateDocument";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FinopsAgentActions.GET_AGENT_REQUEST,
		FinopsAgentActions.GET_AGENT_SPACE,
		FinopsAgentActions.GET_ARTIFACT_CONTENT,
		FinopsAgentActions.GET_ARTIFACT_METADATA,
		FinopsAgentActions.GET_AUTOMATION,
		FinopsAgentActions.GET_CONNECTION,
		FinopsAgentActions.GET_DOCUMENT_CONTENT,
		FinopsAgentActions.GET_DOCUMENT_METADATA,
		FinopsAgentActions.GET_INTEGRATION,
		FinopsAgentActions.GET_TASK,
		FinopsAgentActions.GET_TURN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FinopsAgentActions.ACCEPT_AGENT_REQUEST,
		FinopsAgentActions.CANCEL_TASK,
		FinopsAgentActions.CANCEL_TURN,
		FinopsAgentActions.CREATE_AGENT_SPACE,
		FinopsAgentActions.CREATE_AUTOMATION,
		FinopsAgentActions.CREATE_CONNECTION,
		FinopsAgentActions.CREATE_CONVERSATION,
		FinopsAgentActions.CREATE_DOCUMENT,
		FinopsAgentActions.CREATE_INTEGRATION,
		FinopsAgentActions.CREATE_ONE_TIME_LOGIN_SESSION,
		FinopsAgentActions.CREATE_TASK,
		FinopsAgentActions.CREATE_TURN,
		FinopsAgentActions.DELETE_AGENT_SPACE,
		FinopsAgentActions.DELETE_ARTIFACT,
		FinopsAgentActions.DELETE_AUTOMATION,
		FinopsAgentActions.DELETE_CONNECTION,
		FinopsAgentActions.DELETE_DOCUMENT,
		FinopsAgentActions.DELETE_INTEGRATION,
		FinopsAgentActions.REJECT_AGENT_REQUEST,
		FinopsAgentActions.RESTORE_DOCUMENT,
		FinopsAgentActions.SEND_FEEDBACK,
		FinopsAgentActions.UPDATE_AGENT_SPACE,
		FinopsAgentActions.UPDATE_AUTOMATION,
		FinopsAgentActions.UPDATE_CONNECTION,
		FinopsAgentActions.UPDATE_DOCUMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FinopsAgentActions.LIST_AGENT_SPACES,
		FinopsAgentActions.LIST_ARTIFACTS,
		FinopsAgentActions.LIST_AUTOMATIONS,
		FinopsAgentActions.LIST_CONNECTIONS,
		FinopsAgentActions.LIST_CONVERSATIONS,
		FinopsAgentActions.LIST_DOCUMENTS,
		FinopsAgentActions.LIST_INTEGRATIONS,
		FinopsAgentActions.LIST_RECORDS,
		FinopsAgentActions.LIST_TASKS,
		FinopsAgentActions.LIST_TURNS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
