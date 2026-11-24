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
	/** [Read] finops-agent:GetOrganizationAccess */
	static readonly actionGetOrganizationAccess =
		"finops-agent:GetOrganizationAccess";
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
	/** [Write] finops-agent:UpdateOrganizationAccess */
	static readonly UpdateOrganizationAccess =
		"finops-agent:UpdateOrganizationAccess";

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
		FinopsAgentActions.actionGetOrganizationAccess,
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
		FinopsAgentActions.UpdateOrganizationAccess,
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

/**
 * Properties for building a agentspace ARN.
 */
export interface FinopsAgentAgentspaceArnProps {
	/** The AgentSpaceId component of the ARN. */
	readonly agentSpaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agentspace ARN.
 */
export interface FinopsAgentAgentspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
}

/**
 * Properties for building a automation ARN.
 */
export interface FinopsAgentAutomationArnProps {
	/** The AgentSpaceId component of the ARN. */
	readonly agentSpaceId: string;
	/** The AutomationId component of the ARN. */
	readonly automationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automation ARN.
 */
export interface FinopsAgentAutomationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The AutomationId component. */
	readonly automationId: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface FinopsAgentConnectionArnProps {
	/** The AgentSpaceId component of the ARN. */
	readonly agentSpaceId: string;
	/** The ConnectionId component of the ARN. */
	readonly connectionId: string;
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
export interface FinopsAgentConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The ConnectionId component. */
	readonly connectionId: string;
}

/**
 * Properties for building a document ARN.
 */
export interface FinopsAgentDocumentArnProps {
	/** The AgentSpaceId component of the ARN. */
	readonly agentSpaceId: string;
	/** The DocumentId component of the ARN. */
	readonly documentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a document ARN.
 */
export interface FinopsAgentDocumentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The DocumentId component. */
	readonly documentId: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface FinopsAgentIntegrationArnProps {
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
export interface FinopsAgentIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

const AgentspaceArnRegex =
	/^arn:(?<partition>[^:]+):finops-agent:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)$/;
const AutomationArnRegex =
	/^arn:(?<partition>[^:]+):finops-agent:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/automation\/(?<automationId>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):finops-agent:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/connection\/(?<connectionId>[^:/?]+)$/;
const DocumentArnRegex =
	/^arn:(?<partition>[^:]+):finops-agent:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/document\/(?<documentId>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):finops-agent:(?<region>[^:]*):(?<account>[^:]*):integration\/(?<integrationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for finops-agent resources.
 */
export class FinopsAgentResources {
	/**
	 * Builds an ARN for the agentspace resource.
	 */
	static agentspace(props: FinopsAgentAgentspaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:finops-agent:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agentspace resource.
	 */
	static isValidAgentspaceArn(arn: string): boolean {
		return AgentspaceArnRegex.test(arn);
	}

	/**
	 * Parses a agentspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentspaceArn(arn: string): FinopsAgentAgentspaceArnComponents {
		const match = AgentspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agentspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
		};
	}

	/**
	 * Builds an ARN for the automation resource.
	 */
	static automation(props: FinopsAgentAutomationArnProps): string {
		return `arn:${props.partition ?? "aws"}:finops-agent:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/automation/${props.automationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation resource.
	 */
	static isValidAutomationArn(arn: string): boolean {
		return AutomationArnRegex.test(arn);
	}

	/**
	 * Parses a automation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationArn(arn: string): FinopsAgentAutomationArnComponents {
		const match = AutomationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			automationId: match.groups!.automationId,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: FinopsAgentConnectionArnProps): string {
		return `arn:${props.partition ?? "aws"}:finops-agent:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/connection/${props.connectionId}`;
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
	static parseConnectionArn(arn: string): FinopsAgentConnectionArnComponents {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the document resource.
	 */
	static document(props: FinopsAgentDocumentArnProps): string {
		return `arn:${props.partition ?? "aws"}:finops-agent:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/document/${props.documentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the document resource.
	 */
	static isValidDocumentArn(arn: string): boolean {
		return DocumentArnRegex.test(arn);
	}

	/**
	 * Parses a document ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentArn(arn: string): FinopsAgentDocumentArnComponents {
		const match = DocumentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid document ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			documentId: match.groups!.documentId,
		};
	}

	/**
	 * Builds an ARN for the integration resource.
	 */
	static integration(props: FinopsAgentIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:finops-agent:${props.region ?? "*"}:${props.account ?? "*"}:integration/${props.integrationId}`;
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
	static parseIntegrationArn(arn: string): FinopsAgentIntegrationArnComponents {
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
}
