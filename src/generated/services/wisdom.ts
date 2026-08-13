// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/wisdom.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the wisdom service.
 */
export class WisdomActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "wisdom";

	/** [Write] wisdom:ActivateMessageTemplate */
	static readonly ACTIVATE_MESSAGE_TEMPLATE = "wisdom:ActivateMessageTemplate";
	/** [PermissionManagement] wisdom:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE = "wisdom:AllowVendedLogDeliveryForResource";
	/** [Write] wisdom:CreateAIAgent */
	static readonly CREATE_AI_AGENT = "wisdom:CreateAIAgent";
	/** [Write] wisdom:CreateAIAgentVersion */
	static readonly CREATE_AI_AGENT_VERSION = "wisdom:CreateAIAgentVersion";
	/** [Write] wisdom:CreateAIGuardrail */
	static readonly CREATE_AI_GUARDRAIL = "wisdom:CreateAIGuardrail";
	/** [Write] wisdom:CreateAIGuardrailVersion */
	static readonly CREATE_AI_GUARDRAIL_VERSION = "wisdom:CreateAIGuardrailVersion";
	/** [Write] wisdom:CreateAIPrompt */
	static readonly CREATE_AI_PROMPT = "wisdom:CreateAIPrompt";
	/** [Write] wisdom:CreateAIPromptVersion */
	static readonly CREATE_AI_PROMPT_VERSION = "wisdom:CreateAIPromptVersion";
	/** [Write] wisdom:CreateAssistant */
	static readonly CREATE_ASSISTANT = "wisdom:CreateAssistant";
	/** [Write] wisdom:CreateAssistantAssociation */
	static readonly CREATE_ASSISTANT_ASSOCIATION = "wisdom:CreateAssistantAssociation";
	/** [Write] wisdom:CreateContent */
	static readonly CREATE_CONTENT = "wisdom:CreateContent";
	/** [Write] wisdom:CreateContentAssociation */
	static readonly CREATE_CONTENT_ASSOCIATION = "wisdom:CreateContentAssociation";
	/** [Write] wisdom:CreateKnowledgeBase */
	static readonly CREATE_KNOWLEDGE_BASE = "wisdom:CreateKnowledgeBase";
	/** [Write] wisdom:CreateMessageTemplate */
	static readonly CREATE_MESSAGE_TEMPLATE = "wisdom:CreateMessageTemplate";
	/** [Write] wisdom:CreateMessageTemplateAttachment */
	static readonly CREATE_MESSAGE_TEMPLATE_ATTACHMENT = "wisdom:CreateMessageTemplateAttachment";
	/** [Write] wisdom:CreateMessageTemplateVersion */
	static readonly CREATE_MESSAGE_TEMPLATE_VERSION = "wisdom:CreateMessageTemplateVersion";
	/** [Write] wisdom:CreateQuickResponse */
	static readonly CREATE_QUICK_RESPONSE = "wisdom:CreateQuickResponse";
	/** [Write] wisdom:CreateSession */
	static readonly CREATE_SESSION = "wisdom:CreateSession";
	/** [Write] wisdom:DeactivateMessageTemplate */
	static readonly DEACTIVATE_MESSAGE_TEMPLATE = "wisdom:DeactivateMessageTemplate";
	/** [Write] wisdom:DeleteAIAgent */
	static readonly DELETE_AI_AGENT = "wisdom:DeleteAIAgent";
	/** [Write] wisdom:DeleteAIAgentVersion */
	static readonly DELETE_AI_AGENT_VERSION = "wisdom:DeleteAIAgentVersion";
	/** [Write] wisdom:DeleteAIGuardrail */
	static readonly DELETE_AI_GUARDRAIL = "wisdom:DeleteAIGuardrail";
	/** [Write] wisdom:DeleteAIGuardrailVersion */
	static readonly DELETE_AI_GUARDRAIL_VERSION = "wisdom:DeleteAIGuardrailVersion";
	/** [Write] wisdom:DeleteAIPrompt */
	static readonly DELETE_AI_PROMPT = "wisdom:DeleteAIPrompt";
	/** [Write] wisdom:DeleteAIPromptVersion */
	static readonly DELETE_AI_PROMPT_VERSION = "wisdom:DeleteAIPromptVersion";
	/** [Write] wisdom:DeleteAssistant */
	static readonly DELETE_ASSISTANT = "wisdom:DeleteAssistant";
	/** [Write] wisdom:DeleteAssistantAssociation */
	static readonly DELETE_ASSISTANT_ASSOCIATION = "wisdom:DeleteAssistantAssociation";
	/** [Write] wisdom:DeleteContent */
	static readonly DELETE_CONTENT = "wisdom:DeleteContent";
	/** [Write] wisdom:DeleteContentAssociation */
	static readonly DELETE_CONTENT_ASSOCIATION = "wisdom:DeleteContentAssociation";
	/** [Write] wisdom:DeleteImportJob */
	static readonly DELETE_IMPORT_JOB = "wisdom:DeleteImportJob";
	/** [Write] wisdom:DeleteKnowledgeBase */
	static readonly DELETE_KNOWLEDGE_BASE = "wisdom:DeleteKnowledgeBase";
	/** [Write] wisdom:DeleteMessageTemplate */
	static readonly DELETE_MESSAGE_TEMPLATE = "wisdom:DeleteMessageTemplate";
	/** [Write] wisdom:DeleteMessageTemplateAttachment */
	static readonly DELETE_MESSAGE_TEMPLATE_ATTACHMENT = "wisdom:DeleteMessageTemplateAttachment";
	/** [Write] wisdom:DeleteQuickResponse */
	static readonly DELETE_QUICK_RESPONSE = "wisdom:DeleteQuickResponse";
	/** [Read] wisdom:GetAIAgent */
	static readonly GET_AI_AGENT = "wisdom:GetAIAgent";
	/** [Read] wisdom:GetAIGuardrail */
	static readonly GET_AI_GUARDRAIL = "wisdom:GetAIGuardrail";
	/** [Read] wisdom:GetAIPrompt */
	static readonly GET_AI_PROMPT = "wisdom:GetAIPrompt";
	/** [Read] wisdom:GetAssistant */
	static readonly GET_ASSISTANT = "wisdom:GetAssistant";
	/** [Read] wisdom:GetAssistantAssociation */
	static readonly GET_ASSISTANT_ASSOCIATION = "wisdom:GetAssistantAssociation";
	/** [Read] wisdom:GetContent */
	static readonly GET_CONTENT = "wisdom:GetContent";
	/** [Read] wisdom:GetContentAssociation */
	static readonly GET_CONTENT_ASSOCIATION = "wisdom:GetContentAssociation";
	/** [Read] wisdom:GetContentSummary */
	static readonly GET_CONTENT_SUMMARY = "wisdom:GetContentSummary";
	/** [Read] wisdom:GetImportJob */
	static readonly GET_IMPORT_JOB = "wisdom:GetImportJob";
	/** [Read] wisdom:GetKnowledgeBase */
	static readonly GET_KNOWLEDGE_BASE = "wisdom:GetKnowledgeBase";
	/** [Read] wisdom:GetMessageTemplate */
	static readonly GET_MESSAGE_TEMPLATE = "wisdom:GetMessageTemplate";
	/** [Read] wisdom:GetNextMessage */
	static readonly GET_NEXT_MESSAGE = "wisdom:GetNextMessage";
	/** [Read] wisdom:GetQuickResponse */
	static readonly GET_QUICK_RESPONSE = "wisdom:GetQuickResponse";
	/** [Read] wisdom:GetRecommendations */
	static readonly GET_RECOMMENDATIONS = "wisdom:GetRecommendations";
	/** [Read] wisdom:GetSession */
	static readonly GET_SESSION = "wisdom:GetSession";
	/** [List] wisdom:ListAIAgentVersions */
	static readonly LIST_AI_AGENT_VERSIONS = "wisdom:ListAIAgentVersions";
	/** [List] wisdom:ListAIAgents */
	static readonly LIST_AI_AGENTS = "wisdom:ListAIAgents";
	/** [List] wisdom:ListAIGuardrailVersions */
	static readonly LIST_AI_GUARDRAIL_VERSIONS = "wisdom:ListAIGuardrailVersions";
	/** [List] wisdom:ListAIGuardrails */
	static readonly LIST_AI_GUARDRAILS = "wisdom:ListAIGuardrails";
	/** [List] wisdom:ListAIPromptVersions */
	static readonly LIST_AI_PROMPT_VERSIONS = "wisdom:ListAIPromptVersions";
	/** [List] wisdom:ListAIPrompts */
	static readonly LIST_AI_PROMPTS = "wisdom:ListAIPrompts";
	/** [List] wisdom:ListAssistantAssociations */
	static readonly LIST_ASSISTANT_ASSOCIATIONS = "wisdom:ListAssistantAssociations";
	/** [List] wisdom:ListAssistants */
	static readonly LIST_ASSISTANTS = "wisdom:ListAssistants";
	/** [List] wisdom:ListContentAssociations */
	static readonly LIST_CONTENT_ASSOCIATIONS = "wisdom:ListContentAssociations";
	/** [List] wisdom:ListContents */
	static readonly LIST_CONTENTS = "wisdom:ListContents";
	/** [List] wisdom:ListImportJobs */
	static readonly LIST_IMPORT_JOBS = "wisdom:ListImportJobs";
	/** [List] wisdom:ListKnowledgeBases */
	static readonly LIST_KNOWLEDGE_BASES = "wisdom:ListKnowledgeBases";
	/** [List] wisdom:ListMessageTemplateVersions */
	static readonly LIST_MESSAGE_TEMPLATE_VERSIONS = "wisdom:ListMessageTemplateVersions";
	/** [List] wisdom:ListMessageTemplates */
	static readonly LIST_MESSAGE_TEMPLATES = "wisdom:ListMessageTemplates";
	/** [List] wisdom:ListMessages */
	static readonly LIST_MESSAGES = "wisdom:ListMessages";
	/** [List] wisdom:ListModels */
	static readonly LIST_MODELS = "wisdom:ListModels";
	/** [List] wisdom:ListQuickResponses */
	static readonly LIST_QUICK_RESPONSES = "wisdom:ListQuickResponses";
	/** [List] wisdom:ListSpans */
	static readonly LIST_SPANS = "wisdom:ListSpans";
	/** [Read] wisdom:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "wisdom:ListTagsForResource";
	/** [Write] wisdom:NotifyRecommendationsReceived */
	static readonly NOTIFY_RECOMMENDATIONS_RECEIVED = "wisdom:NotifyRecommendationsReceived";
	/** [Write] wisdom:PutFeedback */
	static readonly PUT_FEEDBACK = "wisdom:PutFeedback";
	/** [Read] wisdom:QueryAssistant */
	static readonly QUERY_ASSISTANT = "wisdom:QueryAssistant";
	/** [Write] wisdom:RemoveAssistantAIAgent */
	static readonly REMOVE_ASSISTANT_AI_AGENT = "wisdom:RemoveAssistantAIAgent";
	/** [Write] wisdom:RemoveKnowledgeBaseTemplateUri */
	static readonly REMOVE_KNOWLEDGE_BASE_TEMPLATE_URI = "wisdom:RemoveKnowledgeBaseTemplateUri";
	/** [Read] wisdom:RenderMessageTemplate */
	static readonly RENDER_MESSAGE_TEMPLATE = "wisdom:RenderMessageTemplate";
	/** [Read] wisdom:Retrieve */
	static readonly RETRIEVE = "wisdom:Retrieve";
	/** [Read] wisdom:SearchContent */
	static readonly SEARCH_CONTENT = "wisdom:SearchContent";
	/** [Read] wisdom:SearchMessageTemplates */
	static readonly SEARCH_MESSAGE_TEMPLATES = "wisdom:SearchMessageTemplates";
	/** [Read] wisdom:SearchQuickResponses */
	static readonly SEARCH_QUICK_RESPONSES = "wisdom:SearchQuickResponses";
	/** [Read] wisdom:SearchSessions */
	static readonly SEARCH_SESSIONS = "wisdom:SearchSessions";
	/** [Write] wisdom:SendMessage */
	static readonly SEND_MESSAGE = "wisdom:SendMessage";
	/** [Write] wisdom:StartContentUpload */
	static readonly START_CONTENT_UPLOAD = "wisdom:StartContentUpload";
	/** [Write] wisdom:StartImportJob */
	static readonly START_IMPORT_JOB = "wisdom:StartImportJob";
	/** [Tagging] wisdom:TagResource */
	static readonly TAG_RESOURCE = "wisdom:TagResource";
	/** [Tagging] wisdom:UntagResource */
	static readonly UNTAG_RESOURCE = "wisdom:UntagResource";
	/** [Write] wisdom:UpdateAIAgent */
	static readonly UPDATE_AI_AGENT = "wisdom:UpdateAIAgent";
	/** [Write] wisdom:UpdateAIGuardrail */
	static readonly UPDATE_AI_GUARDRAIL = "wisdom:UpdateAIGuardrail";
	/** [Write] wisdom:UpdateAIPrompt */
	static readonly UPDATE_AI_PROMPT = "wisdom:UpdateAIPrompt";
	/** [Write] wisdom:UpdateAssistantAIAgent */
	static readonly UPDATE_ASSISTANT_AI_AGENT = "wisdom:UpdateAssistantAIAgent";
	/** [Write] wisdom:UpdateContent */
	static readonly UPDATE_CONTENT = "wisdom:UpdateContent";
	/** [Write] wisdom:UpdateKnowledgeBaseTemplateUri */
	static readonly UPDATE_KNOWLEDGE_BASE_TEMPLATE_URI = "wisdom:UpdateKnowledgeBaseTemplateUri";
	/** [Write] wisdom:UpdateMessageTemplate */
	static readonly UPDATE_MESSAGE_TEMPLATE = "wisdom:UpdateMessageTemplate";
	/** [Write] wisdom:UpdateMessageTemplateMetadata */
	static readonly UPDATE_MESSAGE_TEMPLATE_METADATA = "wisdom:UpdateMessageTemplateMetadata";
	/** [Write] wisdom:UpdateQuickResponse */
	static readonly UPDATE_QUICK_RESPONSE = "wisdom:UpdateQuickResponse";
	/** [Write] wisdom:UpdateSession */
	static readonly UPDATE_SESSION = "wisdom:UpdateSession";
	/** [Write] wisdom:UpdateSessionData */
	static readonly UPDATE_SESSION_DATA = "wisdom:UpdateSessionData";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [WisdomActions.GET_AI_AGENT, WisdomActions.GET_AI_GUARDRAIL, WisdomActions.GET_AI_PROMPT, WisdomActions.GET_ASSISTANT, WisdomActions.GET_ASSISTANT_ASSOCIATION, WisdomActions.GET_CONTENT, WisdomActions.GET_CONTENT_ASSOCIATION, WisdomActions.GET_CONTENT_SUMMARY, WisdomActions.GET_IMPORT_JOB, WisdomActions.GET_KNOWLEDGE_BASE, WisdomActions.GET_MESSAGE_TEMPLATE, WisdomActions.GET_NEXT_MESSAGE, WisdomActions.GET_QUICK_RESPONSE, WisdomActions.GET_RECOMMENDATIONS, WisdomActions.GET_SESSION, WisdomActions.LIST_TAGS_FOR_RESOURCE, WisdomActions.QUERY_ASSISTANT, WisdomActions.RENDER_MESSAGE_TEMPLATE, WisdomActions.RETRIEVE, WisdomActions.SEARCH_CONTENT, WisdomActions.SEARCH_MESSAGE_TEMPLATES, WisdomActions.SEARCH_QUICK_RESPONSES, WisdomActions.SEARCH_SESSIONS];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [WisdomActions.ACTIVATE_MESSAGE_TEMPLATE, WisdomActions.CREATE_AI_AGENT, WisdomActions.CREATE_AI_AGENT_VERSION, WisdomActions.CREATE_AI_GUARDRAIL, WisdomActions.CREATE_AI_GUARDRAIL_VERSION, WisdomActions.CREATE_AI_PROMPT, WisdomActions.CREATE_AI_PROMPT_VERSION, WisdomActions.CREATE_ASSISTANT, WisdomActions.CREATE_ASSISTANT_ASSOCIATION, WisdomActions.CREATE_CONTENT, WisdomActions.CREATE_CONTENT_ASSOCIATION, WisdomActions.CREATE_KNOWLEDGE_BASE, WisdomActions.CREATE_MESSAGE_TEMPLATE, WisdomActions.CREATE_MESSAGE_TEMPLATE_ATTACHMENT, WisdomActions.CREATE_MESSAGE_TEMPLATE_VERSION, WisdomActions.CREATE_QUICK_RESPONSE, WisdomActions.CREATE_SESSION, WisdomActions.DEACTIVATE_MESSAGE_TEMPLATE, WisdomActions.DELETE_AI_AGENT, WisdomActions.DELETE_AI_AGENT_VERSION, WisdomActions.DELETE_AI_GUARDRAIL, WisdomActions.DELETE_AI_GUARDRAIL_VERSION, WisdomActions.DELETE_AI_PROMPT, WisdomActions.DELETE_AI_PROMPT_VERSION, WisdomActions.DELETE_ASSISTANT, WisdomActions.DELETE_ASSISTANT_ASSOCIATION, WisdomActions.DELETE_CONTENT, WisdomActions.DELETE_CONTENT_ASSOCIATION, WisdomActions.DELETE_IMPORT_JOB, WisdomActions.DELETE_KNOWLEDGE_BASE, WisdomActions.DELETE_MESSAGE_TEMPLATE, WisdomActions.DELETE_MESSAGE_TEMPLATE_ATTACHMENT, WisdomActions.DELETE_QUICK_RESPONSE, WisdomActions.NOTIFY_RECOMMENDATIONS_RECEIVED, WisdomActions.PUT_FEEDBACK, WisdomActions.REMOVE_ASSISTANT_AI_AGENT, WisdomActions.REMOVE_KNOWLEDGE_BASE_TEMPLATE_URI, WisdomActions.SEND_MESSAGE, WisdomActions.START_CONTENT_UPLOAD, WisdomActions.START_IMPORT_JOB, WisdomActions.UPDATE_AI_AGENT, WisdomActions.UPDATE_AI_GUARDRAIL, WisdomActions.UPDATE_AI_PROMPT, WisdomActions.UPDATE_ASSISTANT_AI_AGENT, WisdomActions.UPDATE_CONTENT, WisdomActions.UPDATE_KNOWLEDGE_BASE_TEMPLATE_URI, WisdomActions.UPDATE_MESSAGE_TEMPLATE, WisdomActions.UPDATE_MESSAGE_TEMPLATE_METADATA, WisdomActions.UPDATE_QUICK_RESPONSE, WisdomActions.UPDATE_SESSION, WisdomActions.UPDATE_SESSION_DATA];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [WisdomActions.LIST_AI_AGENT_VERSIONS, WisdomActions.LIST_AI_AGENTS, WisdomActions.LIST_AI_GUARDRAIL_VERSIONS, WisdomActions.LIST_AI_GUARDRAILS, WisdomActions.LIST_AI_PROMPT_VERSIONS, WisdomActions.LIST_AI_PROMPTS, WisdomActions.LIST_ASSISTANT_ASSOCIATIONS, WisdomActions.LIST_ASSISTANTS, WisdomActions.LIST_CONTENT_ASSOCIATIONS, WisdomActions.LIST_CONTENTS, WisdomActions.LIST_IMPORT_JOBS, WisdomActions.LIST_KNOWLEDGE_BASES, WisdomActions.LIST_MESSAGE_TEMPLATE_VERSIONS, WisdomActions.LIST_MESSAGE_TEMPLATES, WisdomActions.LIST_MESSAGES, WisdomActions.LIST_MODELS, WisdomActions.LIST_QUICK_RESPONSES, WisdomActions.LIST_SPANS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [WisdomActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [WisdomActions.TAG_RESOURCE, WisdomActions.UNTAG_RESOURCE];
}

const AiAgentArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-agent/(?<assistantId>[^:/?]+)/(?<aiAgentId>[^:/?]+)$");
const AiGuardrailArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-guardrail/(?<assistantId>[^:/?]+)/(?<aiGuardrailId>[^:/?]+)$");
const AiPromptArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-prompt/(?<assistantId>[^:/?]+)/(?<aiPromptId>[^:/?]+)$");
const AssistantArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):assistant/(?<assistantId>[^:/?]+)$");
const AssistantAssociationArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):association/(?<assistantId>[^:/?]+)/(?<assistantAssociationId>[^:/?]+)$");
const ContentArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):content/(?<knowledgeBaseId>[^:/?]+)/(?<contentId>[^:/?]+)$");
const ContentAssociationArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):content-association/(?<knowledgeBaseId>[^:/?]+)/(?<contentId>[^:/?]+)/(?<contentAssociationId>[^:/?]+)$");
const KnowledgeBaseArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):knowledge-base/(?<knowledgeBaseId>[^:/?]+)$");
const MessageTemplateArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):message-template/(?<knowledgeBaseId>[^:/?]+)/(?<messageTemplateId>[^:/?]+)$");
const QuickResponseArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):quick-response/(?<knowledgeBaseId>[^:/?]+)/(?<quickResponseId>[^:/?]+)$");
const SessionArnRegex = new RegExp("^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):session/(?<assistantId>[^:/?]+)/(?<sessionId>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for wisdom resources.
 */
export class WisdomResources {
	/**
	 * Builds an ARN for the AIAgent resource.
	 */
	static aiAgent(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The AIAgentId component of the ARN. */
		readonly aiAgentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:ai-agent/${props.assistantId}/${props.aiAgentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AIAgent resource.
	 */
	static isValidAiAgentArn(arn: string): boolean {
		return AiAgentArnRegex.test(arn);
	}

	/**
	 * Parses a AIAgent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiAgentArn(arn: string): { partition: string; region: string; account: string; assistantId: string; aiAgentId: string } {
		const match = AiAgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AIAgent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			aiAgentId: match.groups!.aiAgentId,
		};
	}

	/**
	 * Builds an ARN for the AIGuardrail resource.
	 */
	static aiGuardrail(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The AIGuardrailId component of the ARN. */
		readonly aiGuardrailId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:ai-guardrail/${props.assistantId}/${props.aiGuardrailId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AIGuardrail resource.
	 */
	static isValidAiGuardrailArn(arn: string): boolean {
		return AiGuardrailArnRegex.test(arn);
	}

	/**
	 * Parses a AIGuardrail ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiGuardrailArn(arn: string): { partition: string; region: string; account: string; assistantId: string; aiGuardrailId: string } {
		const match = AiGuardrailArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AIGuardrail ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			aiGuardrailId: match.groups!.aiGuardrailId,
		};
	}

	/**
	 * Builds an ARN for the AIPrompt resource.
	 */
	static aiPrompt(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The AIPromptId component of the ARN. */
		readonly aiPromptId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:ai-prompt/${props.assistantId}/${props.aiPromptId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AIPrompt resource.
	 */
	static isValidAiPromptArn(arn: string): boolean {
		return AiPromptArnRegex.test(arn);
	}

	/**
	 * Parses a AIPrompt ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiPromptArn(arn: string): { partition: string; region: string; account: string; assistantId: string; aiPromptId: string } {
		const match = AiPromptArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AIPrompt ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			aiPromptId: match.groups!.aiPromptId,
		};
	}

	/**
	 * Builds an ARN for the Assistant resource.
	 */
	static assistant(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:assistant/${props.assistantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Assistant resource.
	 */
	static isValidAssistantArn(arn: string): boolean {
		return AssistantArnRegex.test(arn);
	}

	/**
	 * Parses a Assistant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssistantArn(arn: string): { partition: string; region: string; account: string; assistantId: string } {
		const match = AssistantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Assistant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
		};
	}

	/**
	 * Builds an ARN for the AssistantAssociation resource.
	 */
	static assistantAssociation(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The AssistantAssociationId component of the ARN. */
		readonly assistantAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:association/${props.assistantId}/${props.assistantAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AssistantAssociation resource.
	 */
	static isValidAssistantAssociationArn(arn: string): boolean {
		return AssistantAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a AssistantAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssistantAssociationArn(arn: string): { partition: string; region: string; account: string; assistantId: string; assistantAssociationId: string } {
		const match = AssistantAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AssistantAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			assistantAssociationId: match.groups!.assistantAssociationId,
		};
	}

	/**
	 * Builds an ARN for the Content resource.
	 */
	static content(props: {
		/** The KnowledgeBaseId component of the ARN. */
		readonly knowledgeBaseId: string;
		/** The ContentId component of the ARN. */
		readonly contentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:content/${props.knowledgeBaseId}/${props.contentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Content resource.
	 */
	static isValidContentArn(arn: string): boolean {
		return ContentArnRegex.test(arn);
	}

	/**
	 * Parses a Content ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContentArn(arn: string): { partition: string; region: string; account: string; knowledgeBaseId: string; contentId: string } {
		const match = ContentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Content ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
			contentId: match.groups!.contentId,
		};
	}

	/**
	 * Builds an ARN for the ContentAssociation resource.
	 */
	static contentAssociation(props: {
		/** The KnowledgeBaseId component of the ARN. */
		readonly knowledgeBaseId: string;
		/** The ContentId component of the ARN. */
		readonly contentId: string;
		/** The ContentAssociationId component of the ARN. */
		readonly contentAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:content-association/${props.knowledgeBaseId}/${props.contentId}/${props.contentAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ContentAssociation resource.
	 */
	static isValidContentAssociationArn(arn: string): boolean {
		return ContentAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a ContentAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContentAssociationArn(arn: string): { partition: string; region: string; account: string; knowledgeBaseId: string; contentId: string; contentAssociationId: string } {
		const match = ContentAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ContentAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
			contentId: match.groups!.contentId,
			contentAssociationId: match.groups!.contentAssociationId,
		};
	}

	/**
	 * Builds an ARN for the KnowledgeBase resource.
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
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:knowledge-base/${props.knowledgeBaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the KnowledgeBase resource.
	 */
	static isValidKnowledgeBaseArn(arn: string): boolean {
		return KnowledgeBaseArnRegex.test(arn);
	}

	/**
	 * Parses a KnowledgeBase ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKnowledgeBaseArn(arn: string): { partition: string; region: string; account: string; knowledgeBaseId: string } {
		const match = KnowledgeBaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid KnowledgeBase ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
		};
	}

	/**
	 * Builds an ARN for the MessageTemplate resource.
	 */
	static messageTemplate(props: {
		/** The KnowledgeBaseId component of the ARN. */
		readonly knowledgeBaseId: string;
		/** The MessageTemplateId component of the ARN. */
		readonly messageTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:message-template/${props.knowledgeBaseId}/${props.messageTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MessageTemplate resource.
	 */
	static isValidMessageTemplateArn(arn: string): boolean {
		return MessageTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a MessageTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMessageTemplateArn(arn: string): { partition: string; region: string; account: string; knowledgeBaseId: string; messageTemplateId: string } {
		const match = MessageTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MessageTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
			messageTemplateId: match.groups!.messageTemplateId,
		};
	}

	/**
	 * Builds an ARN for the QuickResponse resource.
	 */
	static quickResponse(props: {
		/** The KnowledgeBaseId component of the ARN. */
		readonly knowledgeBaseId: string;
		/** The QuickResponseId component of the ARN. */
		readonly quickResponseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:quick-response/${props.knowledgeBaseId}/${props.quickResponseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the QuickResponse resource.
	 */
	static isValidQuickResponseArn(arn: string): boolean {
		return QuickResponseArnRegex.test(arn);
	}

	/**
	 * Parses a QuickResponse ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuickResponseArn(arn: string): { partition: string; region: string; account: string; knowledgeBaseId: string; quickResponseId: string } {
		const match = QuickResponseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid QuickResponse ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			knowledgeBaseId: match.groups!.knowledgeBaseId,
			quickResponseId: match.groups!.quickResponseId,
		};
	}

	/**
	 * Builds an ARN for the Session resource.
	 */
	static session(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The SessionId component of the ARN. */
		readonly sessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.assistantId}/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a Session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): { partition: string; region: string; account: string; assistantId: string; sessionId: string } {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			sessionId: match.groups!.sessionId,
		};
	}

}

/**
 * API operation to required IAM actions mapping for wisdom.
 */
export class WisdomOperations {
	/** IAM actions required for the ActivateMessageTemplate API call. */
	static readonly ACTIVATE_MESSAGE_TEMPLATE: string[] = ["wisdom:ActivateMessageTemplate"];
	/** IAM actions required for the CreateAIAgent API call. */
	static readonly CREATE_AI_AGENT: string[] = ["wisdom:CreateAIAgent", "wisdom:TagResource"];
	/** IAM actions required for the CreateAIAgentVersion API call. */
	static readonly CREATE_AI_AGENT_VERSION: string[] = ["wisdom:CreateAIAgentVersion"];
	/** IAM actions required for the CreateAIGuardrail API call. */
	static readonly CREATE_AI_GUARDRAIL: string[] = ["wisdom:CreateAIGuardrail", "wisdom:TagResource"];
	/** IAM actions required for the CreateAIGuardrailVersion API call. */
	static readonly CREATE_AI_GUARDRAIL_VERSION: string[] = ["wisdom:CreateAIGuardrailVersion"];
	/** IAM actions required for the CreateAIPrompt API call. */
	static readonly CREATE_AI_PROMPT: string[] = ["wisdom:CreateAIPrompt", "wisdom:TagResource"];
	/** IAM actions required for the CreateAIPromptVersion API call. */
	static readonly CREATE_AI_PROMPT_VERSION: string[] = ["wisdom:CreateAIPromptVersion"];
	/** IAM actions required for the CreateAssistant API call. */
	static readonly CREATE_ASSISTANT: string[] = ["wisdom:CreateAssistant", "wisdom:TagResource"];
	/** IAM actions required for the CreateAssistantAssociation API call. */
	static readonly CREATE_ASSISTANT_ASSOCIATION: string[] = ["wisdom:CreateAssistantAssociation", "iam:PassRole", "wisdom:TagResource"];
	/** IAM actions required for the CreateContent API call. */
	static readonly CREATE_CONTENT: string[] = ["wisdom:CreateContent", "wisdom:TagResource"];
	/** IAM actions required for the CreateContentAssociation API call. */
	static readonly CREATE_CONTENT_ASSOCIATION: string[] = ["wisdom:CreateContentAssociation", "wisdom:TagResource"];
	/** IAM actions required for the CreateKnowledgeBase API call. */
	static readonly CREATE_KNOWLEDGE_BASE: string[] = ["wisdom:CreateKnowledgeBase", "wisdom:TagResource"];
	/** IAM actions required for the CreateMessageTemplate API call. */
	static readonly CREATE_MESSAGE_TEMPLATE: string[] = ["wisdom:CreateMessageTemplate", "wisdom:TagResource"];
	/** IAM actions required for the CreateMessageTemplateAttachment API call. */
	static readonly CREATE_MESSAGE_TEMPLATE_ATTACHMENT: string[] = ["wisdom:CreateMessageTemplateAttachment"];
	/** IAM actions required for the CreateMessageTemplateVersion API call. */
	static readonly CREATE_MESSAGE_TEMPLATE_VERSION: string[] = ["wisdom:CreateMessageTemplateVersion"];
	/** IAM actions required for the CreateQuickResponse API call. */
	static readonly CREATE_QUICK_RESPONSE: string[] = ["wisdom:CreateQuickResponse", "wisdom:TagResource"];
	/** IAM actions required for the CreateSession API call. */
	static readonly CREATE_SESSION: string[] = ["wisdom:CreateSession", "wisdom:TagResource"];
	/** IAM actions required for the DeactivateMessageTemplate API call. */
	static readonly DEACTIVATE_MESSAGE_TEMPLATE: string[] = ["wisdom:DeactivateMessageTemplate"];
	/** IAM actions required for the DeleteAIAgent API call. */
	static readonly DELETE_AI_AGENT: string[] = ["wisdom:DeleteAIAgent"];
	/** IAM actions required for the DeleteAIAgentVersion API call. */
	static readonly DELETE_AI_AGENT_VERSION: string[] = ["wisdom:DeleteAIAgentVersion"];
	/** IAM actions required for the DeleteAIGuardrail API call. */
	static readonly DELETE_AI_GUARDRAIL: string[] = ["wisdom:DeleteAIGuardrail"];
	/** IAM actions required for the DeleteAIGuardrailVersion API call. */
	static readonly DELETE_AI_GUARDRAIL_VERSION: string[] = ["wisdom:DeleteAIGuardrailVersion"];
	/** IAM actions required for the DeleteAIPrompt API call. */
	static readonly DELETE_AI_PROMPT: string[] = ["wisdom:DeleteAIPrompt"];
	/** IAM actions required for the DeleteAIPromptVersion API call. */
	static readonly DELETE_AI_PROMPT_VERSION: string[] = ["wisdom:DeleteAIPromptVersion"];
	/** IAM actions required for the DeleteAssistant API call. */
	static readonly DELETE_ASSISTANT: string[] = ["wisdom:DeleteAssistant"];
	/** IAM actions required for the DeleteAssistantAssociation API call. */
	static readonly DELETE_ASSISTANT_ASSOCIATION: string[] = ["wisdom:DeleteAssistantAssociation"];
	/** IAM actions required for the DeleteContent API call. */
	static readonly DELETE_CONTENT: string[] = ["wisdom:DeleteContent"];
	/** IAM actions required for the DeleteContentAssociation API call. */
	static readonly DELETE_CONTENT_ASSOCIATION: string[] = ["wisdom:DeleteContentAssociation"];
	/** IAM actions required for the DeleteImportJob API call. */
	static readonly DELETE_IMPORT_JOB: string[] = ["wisdom:DeleteImportJob"];
	/** IAM actions required for the DeleteKnowledgeBase API call. */
	static readonly DELETE_KNOWLEDGE_BASE: string[] = ["wisdom:DeleteKnowledgeBase"];
	/** IAM actions required for the DeleteMessageTemplate API call. */
	static readonly DELETE_MESSAGE_TEMPLATE: string[] = ["wisdom:DeleteMessageTemplate"];
	/** IAM actions required for the DeleteMessageTemplateAttachment API call. */
	static readonly DELETE_MESSAGE_TEMPLATE_ATTACHMENT: string[] = ["wisdom:DeleteMessageTemplateAttachment"];
	/** IAM actions required for the DeleteQuickResponse API call. */
	static readonly DELETE_QUICK_RESPONSE: string[] = ["wisdom:DeleteQuickResponse"];
	/** IAM actions required for the GetAIAgent API call. */
	static readonly GET_AI_AGENT: string[] = ["wisdom:GetAIAgent"];
	/** IAM actions required for the GetAIGuardrail API call. */
	static readonly GET_AI_GUARDRAIL: string[] = ["wisdom:GetAIGuardrail"];
	/** IAM actions required for the GetAIPrompt API call. */
	static readonly GET_AI_PROMPT: string[] = ["wisdom:GetAIPrompt"];
	/** IAM actions required for the GetAssistant API call. */
	static readonly GET_ASSISTANT: string[] = ["wisdom:GetAssistant"];
	/** IAM actions required for the GetAssistantAssociation API call. */
	static readonly GET_ASSISTANT_ASSOCIATION: string[] = ["wisdom:GetAssistantAssociation"];
	/** IAM actions required for the GetContent API call. */
	static readonly GET_CONTENT: string[] = ["wisdom:GetContent"];
	/** IAM actions required for the GetContentAssociation API call. */
	static readonly GET_CONTENT_ASSOCIATION: string[] = ["wisdom:GetContentAssociation"];
	/** IAM actions required for the GetContentSummary API call. */
	static readonly GET_CONTENT_SUMMARY: string[] = ["wisdom:GetContentSummary"];
	/** IAM actions required for the GetImportJob API call. */
	static readonly GET_IMPORT_JOB: string[] = ["wisdom:GetImportJob"];
	/** IAM actions required for the GetKnowledgeBase API call. */
	static readonly GET_KNOWLEDGE_BASE: string[] = ["wisdom:GetKnowledgeBase"];
	/** IAM actions required for the GetMessageTemplate API call. */
	static readonly GET_MESSAGE_TEMPLATE: string[] = ["wisdom:GetMessageTemplate"];
	/** IAM actions required for the GetNextMessage API call. */
	static readonly GET_NEXT_MESSAGE: string[] = ["wisdom:GetNextMessage"];
	/** IAM actions required for the GetQuickResponse API call. */
	static readonly GET_QUICK_RESPONSE: string[] = ["wisdom:GetQuickResponse"];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly GET_RECOMMENDATIONS: string[] = ["wisdom:GetRecommendations"];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["wisdom:GetSession"];
	/** IAM actions required for the ListAIAgentVersions API call. */
	static readonly LIST_AI_AGENT_VERSIONS: string[] = ["wisdom:ListAIAgentVersions"];
	/** IAM actions required for the ListAIAgents API call. */
	static readonly LIST_AI_AGENTS: string[] = ["wisdom:ListAIAgents"];
	/** IAM actions required for the ListAIGuardrailVersions API call. */
	static readonly LIST_AI_GUARDRAIL_VERSIONS: string[] = ["wisdom:ListAIGuardrailVersions"];
	/** IAM actions required for the ListAIGuardrails API call. */
	static readonly LIST_AI_GUARDRAILS: string[] = ["wisdom:ListAIGuardrails"];
	/** IAM actions required for the ListAIPromptVersions API call. */
	static readonly LIST_AI_PROMPT_VERSIONS: string[] = ["wisdom:ListAIPromptVersions"];
	/** IAM actions required for the ListAIPrompts API call. */
	static readonly LIST_AI_PROMPTS: string[] = ["wisdom:ListAIPrompts"];
	/** IAM actions required for the ListAssistantAssociations API call. */
	static readonly LIST_ASSISTANT_ASSOCIATIONS: string[] = ["wisdom:ListAssistantAssociations"];
	/** IAM actions required for the ListAssistants API call. */
	static readonly LIST_ASSISTANTS: string[] = ["wisdom:ListAssistants"];
	/** IAM actions required for the ListContentAssociations API call. */
	static readonly LIST_CONTENT_ASSOCIATIONS: string[] = ["wisdom:ListContentAssociations"];
	/** IAM actions required for the ListContents API call. */
	static readonly LIST_CONTENTS: string[] = ["wisdom:ListContents"];
	/** IAM actions required for the ListImportJobs API call. */
	static readonly LIST_IMPORT_JOBS: string[] = ["wisdom:ListImportJobs"];
	/** IAM actions required for the ListKnowledgeBases API call. */
	static readonly LIST_KNOWLEDGE_BASES: string[] = ["wisdom:ListKnowledgeBases"];
	/** IAM actions required for the ListMessageTemplateVersions API call. */
	static readonly LIST_MESSAGE_TEMPLATE_VERSIONS: string[] = ["wisdom:ListMessageTemplateVersions"];
	/** IAM actions required for the ListMessageTemplates API call. */
	static readonly LIST_MESSAGE_TEMPLATES: string[] = ["wisdom:ListMessageTemplates"];
	/** IAM actions required for the ListMessages API call. */
	static readonly LIST_MESSAGES: string[] = ["wisdom:ListMessages"];
	/** IAM actions required for the ListModels API call. */
	static readonly LIST_MODELS: string[] = ["wisdom:ListModels"];
	/** IAM actions required for the ListQuickResponses API call. */
	static readonly LIST_QUICK_RESPONSES: string[] = ["wisdom:ListQuickResponses"];
	/** IAM actions required for the ListSpans API call. */
	static readonly LIST_SPANS: string[] = ["wisdom:ListSpans"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["wisdom:ListTagsForResource"];
	/** IAM actions required for the NotifyRecommendationsReceived API call. */
	static readonly NOTIFY_RECOMMENDATIONS_RECEIVED: string[] = ["wisdom:NotifyRecommendationsReceived"];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PUT_FEEDBACK: string[] = ["wisdom:PutFeedback"];
	/** IAM actions required for the QueryAssistant API call. */
	static readonly QUERY_ASSISTANT: string[] = ["wisdom:QueryAssistant"];
	/** IAM actions required for the RemoveAssistantAIAgent API call. */
	static readonly REMOVE_ASSISTANT_AI_AGENT: string[] = ["wisdom:RemoveAssistantAIAgent"];
	/** IAM actions required for the RemoveKnowledgeBaseTemplateUri API call. */
	static readonly REMOVE_KNOWLEDGE_BASE_TEMPLATE_URI: string[] = ["wisdom:RemoveKnowledgeBaseTemplateUri"];
	/** IAM actions required for the RenderMessageTemplate API call. */
	static readonly RENDER_MESSAGE_TEMPLATE: string[] = ["wisdom:GetMessageTemplate", "wisdom:RenderMessageTemplate"];
	/** IAM actions required for the Retrieve API call. */
	static readonly RETRIEVE: string[] = ["wisdom:Retrieve"];
	/** IAM actions required for the SearchContent API call. */
	static readonly SEARCH_CONTENT: string[] = ["wisdom:SearchContent"];
	/** IAM actions required for the SearchMessageTemplates API call. */
	static readonly SEARCH_MESSAGE_TEMPLATES: string[] = ["wisdom:SearchMessageTemplates"];
	/** IAM actions required for the SearchQuickResponses API call. */
	static readonly SEARCH_QUICK_RESPONSES: string[] = ["wisdom:GetQuickResponse", "wisdom:SearchQuickResponses"];
	/** IAM actions required for the SearchSessions API call. */
	static readonly SEARCH_SESSIONS: string[] = ["wisdom:SearchSessions"];
	/** IAM actions required for the SendMessage API call. */
	static readonly SEND_MESSAGE: string[] = ["wisdom:SendMessage"];
	/** IAM actions required for the StartContentUpload API call. */
	static readonly START_CONTENT_UPLOAD: string[] = ["wisdom:StartContentUpload"];
	/** IAM actions required for the StartImportJob API call. */
	static readonly START_IMPORT_JOB: string[] = ["wisdom:StartImportJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["wisdom:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["wisdom:UntagResource"];
	/** IAM actions required for the UpdateAIAgent API call. */
	static readonly UPDATE_AI_AGENT: string[] = ["wisdom:UpdateAIAgent"];
	/** IAM actions required for the UpdateAIGuardrail API call. */
	static readonly UPDATE_AI_GUARDRAIL: string[] = ["wisdom:UpdateAIGuardrail"];
	/** IAM actions required for the UpdateAIPrompt API call. */
	static readonly UPDATE_AI_PROMPT: string[] = ["wisdom:UpdateAIPrompt"];
	/** IAM actions required for the UpdateAssistantAIAgent API call. */
	static readonly UPDATE_ASSISTANT_AI_AGENT: string[] = ["wisdom:UpdateAssistantAIAgent"];
	/** IAM actions required for the UpdateContent API call. */
	static readonly UPDATE_CONTENT: string[] = ["wisdom:UpdateContent"];
	/** IAM actions required for the UpdateKnowledgeBaseTemplateUri API call. */
	static readonly UPDATE_KNOWLEDGE_BASE_TEMPLATE_URI: string[] = ["wisdom:UpdateKnowledgeBaseTemplateUri"];
	/** IAM actions required for the UpdateMessageTemplate API call. */
	static readonly UPDATE_MESSAGE_TEMPLATE: string[] = ["wisdom:UpdateMessageTemplate"];
	/** IAM actions required for the UpdateMessageTemplateMetadata API call. */
	static readonly UPDATE_MESSAGE_TEMPLATE_METADATA: string[] = ["wisdom:UpdateMessageTemplateMetadata"];
	/** IAM actions required for the UpdateQuickResponse API call. */
	static readonly UPDATE_QUICK_RESPONSE: string[] = ["wisdom:UpdateQuickResponse"];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UPDATE_SESSION: string[] = ["wisdom:UpdateSession"];
	/** IAM actions required for the UpdateSessionData API call. */
	static readonly UPDATE_SESSION_DATA: string[] = ["wisdom:UpdateSessionData"];
}

/**
 * Condition key constants and builders for wisdom.
 */
export class WisdomConditions {
	/** Condition keys applicable to the CreateAIAgent action. */
	static readonly CREATE_AI_AGENT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAIAgentVersion action. */
	static readonly CREATE_AI_AGENT_VERSION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAIGuardrail action. */
	static readonly CREATE_AI_GUARDRAIL_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAIGuardrailVersion action. */
	static readonly CREATE_AI_GUARDRAIL_VERSION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAIPrompt action. */
	static readonly CREATE_AI_PROMPT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAIPromptVersion action. */
	static readonly CREATE_AI_PROMPT_VERSION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAssistant action. */
	static readonly CREATE_ASSISTANT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAssistantAssociation action. */
	static readonly CREATE_ASSISTANT_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateContent action. */
	static readonly CREATE_CONTENT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateContentAssociation action. */
	static readonly CREATE_CONTENT_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateKnowledgeBase action. */
	static readonly CREATE_KNOWLEDGE_BASE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateMessageTemplate action. */
	static readonly CREATE_MESSAGE_TEMPLATE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateQuickResponse action. */
	static readonly CREATE_QUICK_RESPONSE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CREATE_SESSION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the GetMessageTemplate action. */
	static readonly GET_MESSAGE_TEMPLATE_CONDITION_KEYS: string[] = ["wisdom:MessageTemplate/RoutingProfileArn"];
	/** Condition keys applicable to the RenderMessageTemplate action. */
	static readonly RENDER_MESSAGE_TEMPLATE_CONDITION_KEYS: string[] = ["wisdom:MessageTemplate/RoutingProfileArn"];
	/** Condition keys applicable to the SearchMessageTemplates action. */
	static readonly SEARCH_MESSAGE_TEMPLATES_CONDITION_KEYS: string[] = ["wisdom:SearchFilter/Qualifier", "wisdom:SearchFilter/RoutingProfileArn"];
	/** Condition keys applicable to the SearchQuickResponses action. */
	static readonly SEARCH_QUICK_RESPONSES_CONDITION_KEYS: string[] = ["wisdom:SearchFilter/RoutingProfileArn"];
	/** Condition keys applicable to the StartImportJob action. */
	static readonly START_IMPORT_JOB_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: wisdom:MessageTemplate/RoutingProfileArn (ArrayOfARN) */
	static readonly MESSAGE_TEMPLATE/ROUTING_PROFILE_ARN = "wisdom:MessageTemplate/RoutingProfileArn";
	/** Condition key: wisdom:SearchFilter/Qualifier (ArrayOfString) */
	static readonly SEARCH_FILTER/QUALIFIER = "wisdom:SearchFilter/Qualifier";
	/** Condition key: wisdom:SearchFilter/RoutingProfileArn (ARN) */
	static readonly SEARCH_FILTER/ROUTING_PROFILE_ARN = "wisdom:SearchFilter/RoutingProfileArn";

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
	 * Generates a condition block for `wisdom:MessageTemplate/RoutingProfileArn`.
	 */
	static messageTemplate/routingProfileARN(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "wisdom:MessageTemplate/RoutingProfileArn": values } };
	}

	/**
	 * Generates a condition block for `wisdom:SearchFilter/Qualifier`.
	 */
	static searchFilter/qualifier(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "wisdom:SearchFilter/Qualifier": values } };
	}

	/**
	 * Generates a condition block for `wisdom:SearchFilter/RoutingProfileArn`.
	 */
	static searchFilter/routingProfileARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "wisdom:SearchFilter/RoutingProfileArn": value } };
	}

}
