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
	static readonly ActivateMessageTemplate = "wisdom:ActivateMessageTemplate";
	/** [PermissionManagement] wisdom:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"wisdom:AllowVendedLogDeliveryForResource";
	/** [Write] wisdom:CreateAIAgent */
	static readonly CreateAIAgent = "wisdom:CreateAIAgent";
	/** [Write] wisdom:CreateAIAgentVersion */
	static readonly CreateAIAgentVersion = "wisdom:CreateAIAgentVersion";
	/** [Write] wisdom:CreateAIGuardrail */
	static readonly CreateAIGuardrail = "wisdom:CreateAIGuardrail";
	/** [Write] wisdom:CreateAIGuardrailVersion */
	static readonly CreateAIGuardrailVersion = "wisdom:CreateAIGuardrailVersion";
	/** [Write] wisdom:CreateAIPrompt */
	static readonly CreateAIPrompt = "wisdom:CreateAIPrompt";
	/** [Write] wisdom:CreateAIPromptVersion */
	static readonly CreateAIPromptVersion = "wisdom:CreateAIPromptVersion";
	/** [Write] wisdom:CreateAssistant */
	static readonly CreateAssistant = "wisdom:CreateAssistant";
	/** [Write] wisdom:CreateAssistantAssociation */
	static readonly CreateAssistantAssociation =
		"wisdom:CreateAssistantAssociation";
	/** [Write] wisdom:CreateContent */
	static readonly CreateContent = "wisdom:CreateContent";
	/** [Write] wisdom:CreateContentAssociation */
	static readonly CreateContentAssociation = "wisdom:CreateContentAssociation";
	/** [Write] wisdom:CreateKnowledgeBase */
	static readonly CreateKnowledgeBase = "wisdom:CreateKnowledgeBase";
	/** [Write] wisdom:CreateMessageTemplate */
	static readonly CreateMessageTemplate = "wisdom:CreateMessageTemplate";
	/** [Write] wisdom:CreateMessageTemplateAttachment */
	static readonly CreateMessageTemplateAttachment =
		"wisdom:CreateMessageTemplateAttachment";
	/** [Write] wisdom:CreateMessageTemplateVersion */
	static readonly CreateMessageTemplateVersion =
		"wisdom:CreateMessageTemplateVersion";
	/** [Write] wisdom:CreateQuickResponse */
	static readonly CreateQuickResponse = "wisdom:CreateQuickResponse";
	/** [Write] wisdom:CreateSession */
	static readonly CreateSession = "wisdom:CreateSession";
	/** [Write] wisdom:DeactivateMessageTemplate */
	static readonly DeactivateMessageTemplate =
		"wisdom:DeactivateMessageTemplate";
	/** [Write] wisdom:DeleteAIAgent */
	static readonly DeleteAIAgent = "wisdom:DeleteAIAgent";
	/** [Write] wisdom:DeleteAIAgentVersion */
	static readonly DeleteAIAgentVersion = "wisdom:DeleteAIAgentVersion";
	/** [Write] wisdom:DeleteAIGuardrail */
	static readonly DeleteAIGuardrail = "wisdom:DeleteAIGuardrail";
	/** [Write] wisdom:DeleteAIGuardrailVersion */
	static readonly DeleteAIGuardrailVersion = "wisdom:DeleteAIGuardrailVersion";
	/** [Write] wisdom:DeleteAIPrompt */
	static readonly DeleteAIPrompt = "wisdom:DeleteAIPrompt";
	/** [Write] wisdom:DeleteAIPromptVersion */
	static readonly DeleteAIPromptVersion = "wisdom:DeleteAIPromptVersion";
	/** [Write] wisdom:DeleteAssistant */
	static readonly DeleteAssistant = "wisdom:DeleteAssistant";
	/** [Write] wisdom:DeleteAssistantAssociation */
	static readonly DeleteAssistantAssociation =
		"wisdom:DeleteAssistantAssociation";
	/** [Write] wisdom:DeleteContent */
	static readonly DeleteContent = "wisdom:DeleteContent";
	/** [Write] wisdom:DeleteContentAssociation */
	static readonly DeleteContentAssociation = "wisdom:DeleteContentAssociation";
	/** [Write] wisdom:DeleteImportJob */
	static readonly DeleteImportJob = "wisdom:DeleteImportJob";
	/** [Write] wisdom:DeleteKnowledgeBase */
	static readonly DeleteKnowledgeBase = "wisdom:DeleteKnowledgeBase";
	/** [Write] wisdom:DeleteMessageTemplate */
	static readonly DeleteMessageTemplate = "wisdom:DeleteMessageTemplate";
	/** [Write] wisdom:DeleteMessageTemplateAttachment */
	static readonly DeleteMessageTemplateAttachment =
		"wisdom:DeleteMessageTemplateAttachment";
	/** [Write] wisdom:DeleteQuickResponse */
	static readonly DeleteQuickResponse = "wisdom:DeleteQuickResponse";
	/** [Read] wisdom:GetAIAgent */
	static readonly actionGetAIAgent = "wisdom:GetAIAgent";
	/** [Read] wisdom:GetAIGuardrail */
	static readonly actionGetAIGuardrail = "wisdom:GetAIGuardrail";
	/** [Read] wisdom:GetAIPrompt */
	static readonly actionGetAIPrompt = "wisdom:GetAIPrompt";
	/** [Read] wisdom:GetAssistant */
	static readonly actionGetAssistant = "wisdom:GetAssistant";
	/** [Read] wisdom:GetAssistantAssociation */
	static readonly actionGetAssistantAssociation =
		"wisdom:GetAssistantAssociation";
	/** [Read] wisdom:GetContent */
	static readonly actionGetContent = "wisdom:GetContent";
	/** [Read] wisdom:GetContentAssociation */
	static readonly actionGetContentAssociation = "wisdom:GetContentAssociation";
	/** [Read] wisdom:GetContentSummary */
	static readonly actionGetContentSummary = "wisdom:GetContentSummary";
	/** [Read] wisdom:GetImportJob */
	static readonly actionGetImportJob = "wisdom:GetImportJob";
	/** [Read] wisdom:GetKnowledgeBase */
	static readonly actionGetKnowledgeBase = "wisdom:GetKnowledgeBase";
	/** [Read] wisdom:GetMessageTemplate */
	static readonly actionGetMessageTemplate = "wisdom:GetMessageTemplate";
	/** [Read] wisdom:GetNextMessage */
	static readonly actionGetNextMessage = "wisdom:GetNextMessage";
	/** [Read] wisdom:GetQuickResponse */
	static readonly actionGetQuickResponse = "wisdom:GetQuickResponse";
	/** [Read] wisdom:GetRecommendations */
	static readonly actionGetRecommendations = "wisdom:GetRecommendations";
	/** [Read] wisdom:GetSession */
	static readonly actionGetSession = "wisdom:GetSession";
	/** [List] wisdom:ListAIAgentVersions */
	static readonly ListAIAgentVersions = "wisdom:ListAIAgentVersions";
	/** [List] wisdom:ListAIAgents */
	static readonly ListAIAgents = "wisdom:ListAIAgents";
	/** [List] wisdom:ListAIGuardrailVersions */
	static readonly ListAIGuardrailVersions = "wisdom:ListAIGuardrailVersions";
	/** [List] wisdom:ListAIGuardrails */
	static readonly ListAIGuardrails = "wisdom:ListAIGuardrails";
	/** [List] wisdom:ListAIPromptVersions */
	static readonly ListAIPromptVersions = "wisdom:ListAIPromptVersions";
	/** [List] wisdom:ListAIPrompts */
	static readonly ListAIPrompts = "wisdom:ListAIPrompts";
	/** [List] wisdom:ListAssistantAssociations */
	static readonly ListAssistantAssociations =
		"wisdom:ListAssistantAssociations";
	/** [List] wisdom:ListAssistants */
	static readonly ListAssistants = "wisdom:ListAssistants";
	/** [List] wisdom:ListContentAssociations */
	static readonly ListContentAssociations = "wisdom:ListContentAssociations";
	/** [List] wisdom:ListContents */
	static readonly ListContents = "wisdom:ListContents";
	/** [List] wisdom:ListImportJobs */
	static readonly ListImportJobs = "wisdom:ListImportJobs";
	/** [List] wisdom:ListKnowledgeBases */
	static readonly ListKnowledgeBases = "wisdom:ListKnowledgeBases";
	/** [List] wisdom:ListMessageTemplateVersions */
	static readonly ListMessageTemplateVersions =
		"wisdom:ListMessageTemplateVersions";
	/** [List] wisdom:ListMessageTemplates */
	static readonly ListMessageTemplates = "wisdom:ListMessageTemplates";
	/** [List] wisdom:ListMessages */
	static readonly ListMessages = "wisdom:ListMessages";
	/** [List] wisdom:ListModels */
	static readonly ListModels = "wisdom:ListModels";
	/** [List] wisdom:ListQuickResponses */
	static readonly ListQuickResponses = "wisdom:ListQuickResponses";
	/** [List] wisdom:ListSpans */
	static readonly ListSpans = "wisdom:ListSpans";
	/** [Read] wisdom:ListTagsForResource */
	static readonly ListTagsForResource = "wisdom:ListTagsForResource";
	/** [Write] wisdom:NotifyRecommendationsReceived */
	static readonly NotifyRecommendationsReceived =
		"wisdom:NotifyRecommendationsReceived";
	/** [Write] wisdom:PutFeedback */
	static readonly PutFeedback = "wisdom:PutFeedback";
	/** [Read] wisdom:QueryAssistant */
	static readonly QueryAssistant = "wisdom:QueryAssistant";
	/** [Write] wisdom:RemoveAssistantAIAgent */
	static readonly RemoveAssistantAIAgent = "wisdom:RemoveAssistantAIAgent";
	/** [Write] wisdom:RemoveKnowledgeBaseTemplateUri */
	static readonly RemoveKnowledgeBaseTemplateUri =
		"wisdom:RemoveKnowledgeBaseTemplateUri";
	/** [Read] wisdom:RenderMessageTemplate */
	static readonly RenderMessageTemplate = "wisdom:RenderMessageTemplate";
	/** [Read] wisdom:Retrieve */
	static readonly Retrieve = "wisdom:Retrieve";
	/** [Read] wisdom:SearchContent */
	static readonly SearchContent = "wisdom:SearchContent";
	/** [Read] wisdom:SearchMessageTemplates */
	static readonly SearchMessageTemplates = "wisdom:SearchMessageTemplates";
	/** [Read] wisdom:SearchQuickResponses */
	static readonly SearchQuickResponses = "wisdom:SearchQuickResponses";
	/** [Read] wisdom:SearchSessions */
	static readonly SearchSessions = "wisdom:SearchSessions";
	/** [Write] wisdom:SendMessage */
	static readonly SendMessage = "wisdom:SendMessage";
	/** [Write] wisdom:StartContentUpload */
	static readonly StartContentUpload = "wisdom:StartContentUpload";
	/** [Write] wisdom:StartImportJob */
	static readonly StartImportJob = "wisdom:StartImportJob";
	/** [Tagging] wisdom:TagResource */
	static readonly TagResource = "wisdom:TagResource";
	/** [Tagging] wisdom:UntagResource */
	static readonly UntagResource = "wisdom:UntagResource";
	/** [Write] wisdom:UpdateAIAgent */
	static readonly UpdateAIAgent = "wisdom:UpdateAIAgent";
	/** [Write] wisdom:UpdateAIGuardrail */
	static readonly UpdateAIGuardrail = "wisdom:UpdateAIGuardrail";
	/** [Write] wisdom:UpdateAIPrompt */
	static readonly UpdateAIPrompt = "wisdom:UpdateAIPrompt";
	/** [Write] wisdom:UpdateAssistantAIAgent */
	static readonly UpdateAssistantAIAgent = "wisdom:UpdateAssistantAIAgent";
	/** [Write] wisdom:UpdateContent */
	static readonly UpdateContent = "wisdom:UpdateContent";
	/** [Write] wisdom:UpdateKnowledgeBaseTemplateUri */
	static readonly UpdateKnowledgeBaseTemplateUri =
		"wisdom:UpdateKnowledgeBaseTemplateUri";
	/** [Write] wisdom:UpdateMessageTemplate */
	static readonly UpdateMessageTemplate = "wisdom:UpdateMessageTemplate";
	/** [Write] wisdom:UpdateMessageTemplateMetadata */
	static readonly UpdateMessageTemplateMetadata =
		"wisdom:UpdateMessageTemplateMetadata";
	/** [Write] wisdom:UpdateQuickResponse */
	static readonly UpdateQuickResponse = "wisdom:UpdateQuickResponse";
	/** [Write] wisdom:UpdateSession */
	static readonly UpdateSession = "wisdom:UpdateSession";
	/** [Write] wisdom:UpdateSessionData */
	static readonly UpdateSessionData = "wisdom:UpdateSessionData";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WisdomActions.actionGetAIAgent,
		WisdomActions.actionGetAIGuardrail,
		WisdomActions.actionGetAIPrompt,
		WisdomActions.actionGetAssistant,
		WisdomActions.actionGetAssistantAssociation,
		WisdomActions.actionGetContent,
		WisdomActions.actionGetContentAssociation,
		WisdomActions.actionGetContentSummary,
		WisdomActions.actionGetImportJob,
		WisdomActions.actionGetKnowledgeBase,
		WisdomActions.actionGetMessageTemplate,
		WisdomActions.actionGetNextMessage,
		WisdomActions.actionGetQuickResponse,
		WisdomActions.actionGetRecommendations,
		WisdomActions.actionGetSession,
		WisdomActions.ListTagsForResource,
		WisdomActions.QueryAssistant,
		WisdomActions.RenderMessageTemplate,
		WisdomActions.Retrieve,
		WisdomActions.SearchContent,
		WisdomActions.SearchMessageTemplates,
		WisdomActions.SearchQuickResponses,
		WisdomActions.SearchSessions,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WisdomActions.ActivateMessageTemplate,
		WisdomActions.CreateAIAgent,
		WisdomActions.CreateAIAgentVersion,
		WisdomActions.CreateAIGuardrail,
		WisdomActions.CreateAIGuardrailVersion,
		WisdomActions.CreateAIPrompt,
		WisdomActions.CreateAIPromptVersion,
		WisdomActions.CreateAssistant,
		WisdomActions.CreateAssistantAssociation,
		WisdomActions.CreateContent,
		WisdomActions.CreateContentAssociation,
		WisdomActions.CreateKnowledgeBase,
		WisdomActions.CreateMessageTemplate,
		WisdomActions.CreateMessageTemplateAttachment,
		WisdomActions.CreateMessageTemplateVersion,
		WisdomActions.CreateQuickResponse,
		WisdomActions.CreateSession,
		WisdomActions.DeactivateMessageTemplate,
		WisdomActions.DeleteAIAgent,
		WisdomActions.DeleteAIAgentVersion,
		WisdomActions.DeleteAIGuardrail,
		WisdomActions.DeleteAIGuardrailVersion,
		WisdomActions.DeleteAIPrompt,
		WisdomActions.DeleteAIPromptVersion,
		WisdomActions.DeleteAssistant,
		WisdomActions.DeleteAssistantAssociation,
		WisdomActions.DeleteContent,
		WisdomActions.DeleteContentAssociation,
		WisdomActions.DeleteImportJob,
		WisdomActions.DeleteKnowledgeBase,
		WisdomActions.DeleteMessageTemplate,
		WisdomActions.DeleteMessageTemplateAttachment,
		WisdomActions.DeleteQuickResponse,
		WisdomActions.NotifyRecommendationsReceived,
		WisdomActions.PutFeedback,
		WisdomActions.RemoveAssistantAIAgent,
		WisdomActions.RemoveKnowledgeBaseTemplateUri,
		WisdomActions.SendMessage,
		WisdomActions.StartContentUpload,
		WisdomActions.StartImportJob,
		WisdomActions.UpdateAIAgent,
		WisdomActions.UpdateAIGuardrail,
		WisdomActions.UpdateAIPrompt,
		WisdomActions.UpdateAssistantAIAgent,
		WisdomActions.UpdateContent,
		WisdomActions.UpdateKnowledgeBaseTemplateUri,
		WisdomActions.UpdateMessageTemplate,
		WisdomActions.UpdateMessageTemplateMetadata,
		WisdomActions.UpdateQuickResponse,
		WisdomActions.UpdateSession,
		WisdomActions.UpdateSessionData,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WisdomActions.ListAIAgentVersions,
		WisdomActions.ListAIAgents,
		WisdomActions.ListAIGuardrailVersions,
		WisdomActions.ListAIGuardrails,
		WisdomActions.ListAIPromptVersions,
		WisdomActions.ListAIPrompts,
		WisdomActions.ListAssistantAssociations,
		WisdomActions.ListAssistants,
		WisdomActions.ListContentAssociations,
		WisdomActions.ListContents,
		WisdomActions.ListImportJobs,
		WisdomActions.ListKnowledgeBases,
		WisdomActions.ListMessageTemplateVersions,
		WisdomActions.ListMessageTemplates,
		WisdomActions.ListMessages,
		WisdomActions.ListModels,
		WisdomActions.ListQuickResponses,
		WisdomActions.ListSpans,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		WisdomActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WisdomActions.TagResource,
		WisdomActions.UntagResource,
	];
}

/**
 * Properties for building a AIAgent ARN.
 */
export interface WisdomAiAgentArnProps {
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
}

/**
 * Parsed components of a AIAgent ARN.
 */
export interface WisdomAiAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The AIAgentId component. */
	readonly aiAgentId: string;
}

/**
 * Properties for building a AIGuardrail ARN.
 */
export interface WisdomAiGuardrailArnProps {
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
}

/**
 * Parsed components of a AIGuardrail ARN.
 */
export interface WisdomAiGuardrailArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The AIGuardrailId component. */
	readonly aiGuardrailId: string;
}

/**
 * Properties for building a AIPrompt ARN.
 */
export interface WisdomAiPromptArnProps {
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
}

/**
 * Parsed components of a AIPrompt ARN.
 */
export interface WisdomAiPromptArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The AIPromptId component. */
	readonly aiPromptId: string;
}

/**
 * Properties for building a Assistant ARN.
 */
export interface WisdomAssistantArnProps {
	/** The AssistantId component of the ARN. */
	readonly assistantId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Assistant ARN.
 */
export interface WisdomAssistantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
}

/**
 * Properties for building a AssistantAssociation ARN.
 */
export interface WisdomAssistantAssociationArnProps {
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
}

/**
 * Parsed components of a AssistantAssociation ARN.
 */
export interface WisdomAssistantAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The AssistantAssociationId component. */
	readonly assistantAssociationId: string;
}

/**
 * Properties for building a Content ARN.
 */
export interface WisdomContentArnProps {
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
}

/**
 * Parsed components of a Content ARN.
 */
export interface WisdomContentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KnowledgeBaseId component. */
	readonly knowledgeBaseId: string;
	/** The ContentId component. */
	readonly contentId: string;
}

/**
 * Properties for building a ContentAssociation ARN.
 */
export interface WisdomContentAssociationArnProps {
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
}

/**
 * Parsed components of a ContentAssociation ARN.
 */
export interface WisdomContentAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KnowledgeBaseId component. */
	readonly knowledgeBaseId: string;
	/** The ContentId component. */
	readonly contentId: string;
	/** The ContentAssociationId component. */
	readonly contentAssociationId: string;
}

/**
 * Properties for building a KnowledgeBase ARN.
 */
export interface WisdomKnowledgeBaseArnProps {
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
 * Parsed components of a KnowledgeBase ARN.
 */
export interface WisdomKnowledgeBaseArnComponents {
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
 * Properties for building a MessageTemplate ARN.
 */
export interface WisdomMessageTemplateArnProps {
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
}

/**
 * Parsed components of a MessageTemplate ARN.
 */
export interface WisdomMessageTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KnowledgeBaseId component. */
	readonly knowledgeBaseId: string;
	/** The MessageTemplateId component. */
	readonly messageTemplateId: string;
}

/**
 * Properties for building a QuickResponse ARN.
 */
export interface WisdomQuickResponseArnProps {
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
}

/**
 * Parsed components of a QuickResponse ARN.
 */
export interface WisdomQuickResponseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KnowledgeBaseId component. */
	readonly knowledgeBaseId: string;
	/** The QuickResponseId component. */
	readonly quickResponseId: string;
}

/**
 * Properties for building a Session ARN.
 */
export interface WisdomSessionArnProps {
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
}

/**
 * Parsed components of a Session ARN.
 */
export interface WisdomSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

const AiAgentArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-agent\/(?<assistantId>[^:/?]+)\/(?<aiAgentId>[^:/?]+)$/;
const AiGuardrailArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-guardrail\/(?<assistantId>[^:/?]+)\/(?<aiGuardrailId>[^:/?]+)$/;
const AiPromptArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-prompt\/(?<assistantId>[^:/?]+)\/(?<aiPromptId>[^:/?]+)$/;
const AssistantArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):assistant\/(?<assistantId>[^:/?]+)$/;
const AssistantAssociationArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):association\/(?<assistantId>[^:/?]+)\/(?<assistantAssociationId>[^:/?]+)$/;
const ContentArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):content\/(?<knowledgeBaseId>[^:/?]+)\/(?<contentId>[^:/?]+)$/;
const ContentAssociationArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):content-association\/(?<knowledgeBaseId>[^:/?]+)\/(?<contentId>[^:/?]+)\/(?<contentAssociationId>[^:/?]+)$/;
const KnowledgeBaseArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):knowledge-base\/(?<knowledgeBaseId>[^:/?]+)$/;
const MessageTemplateArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):message-template\/(?<knowledgeBaseId>[^:/?]+)\/(?<messageTemplateId>[^:/?]+)$/;
const QuickResponseArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):quick-response\/(?<knowledgeBaseId>[^:/?]+)\/(?<quickResponseId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):session\/(?<assistantId>[^:/?]+)\/(?<sessionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for wisdom resources.
 */
export class WisdomResources {
	/**
	 * Builds an ARN for the AIAgent resource.
	 */
	static aiAgent(props: WisdomAiAgentArnProps): string {
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
	static parseAiAgentArn(arn: string): WisdomAiAgentArnComponents {
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
	static aiGuardrail(props: WisdomAiGuardrailArnProps): string {
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
	static parseAiGuardrailArn(arn: string): WisdomAiGuardrailArnComponents {
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
	static aiPrompt(props: WisdomAiPromptArnProps): string {
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
	static parseAiPromptArn(arn: string): WisdomAiPromptArnComponents {
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
	static assistant(props: WisdomAssistantArnProps): string {
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
	static parseAssistantArn(arn: string): WisdomAssistantArnComponents {
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
	static assistantAssociation(
		props: WisdomAssistantAssociationArnProps,
	): string {
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
	static parseAssistantAssociationArn(
		arn: string,
	): WisdomAssistantAssociationArnComponents {
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
	static content(props: WisdomContentArnProps): string {
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
	static parseContentArn(arn: string): WisdomContentArnComponents {
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
	static contentAssociation(props: WisdomContentAssociationArnProps): string {
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
	static parseContentAssociationArn(
		arn: string,
	): WisdomContentAssociationArnComponents {
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
	static knowledgeBase(props: WisdomKnowledgeBaseArnProps): string {
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
	static parseKnowledgeBaseArn(arn: string): WisdomKnowledgeBaseArnComponents {
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
	static messageTemplate(props: WisdomMessageTemplateArnProps): string {
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
	static parseMessageTemplateArn(
		arn: string,
	): WisdomMessageTemplateArnComponents {
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
	static quickResponse(props: WisdomQuickResponseArnProps): string {
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
	static parseQuickResponseArn(arn: string): WisdomQuickResponseArnComponents {
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
	static session(props: WisdomSessionArnProps): string {
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
	static parseSessionArn(arn: string): WisdomSessionArnComponents {
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
	static readonly ActivateMessageTemplate: string[] = [
		"wisdom:ActivateMessageTemplate",
	];
	/** IAM actions required for the CreateAIAgent API call. */
	static readonly CreateAIAgent: string[] = [
		"wisdom:CreateAIAgent",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateAIAgentVersion API call. */
	static readonly CreateAIAgentVersion: string[] = [
		"wisdom:CreateAIAgentVersion",
	];
	/** IAM actions required for the CreateAIGuardrail API call. */
	static readonly CreateAIGuardrail: string[] = [
		"wisdom:CreateAIGuardrail",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateAIGuardrailVersion API call. */
	static readonly CreateAIGuardrailVersion: string[] = [
		"wisdom:CreateAIGuardrailVersion",
	];
	/** IAM actions required for the CreateAIPrompt API call. */
	static readonly CreateAIPrompt: string[] = [
		"wisdom:CreateAIPrompt",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateAIPromptVersion API call. */
	static readonly CreateAIPromptVersion: string[] = [
		"wisdom:CreateAIPromptVersion",
	];
	/** IAM actions required for the CreateAssistant API call. */
	static readonly CreateAssistant: string[] = [
		"wisdom:CreateAssistant",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateAssistantAssociation API call. */
	static readonly CreateAssistantAssociation: string[] = [
		"wisdom:CreateAssistantAssociation",
		"iam:PassRole",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateContent API call. */
	static readonly CreateContent: string[] = [
		"wisdom:CreateContent",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateContentAssociation API call. */
	static readonly CreateContentAssociation: string[] = [
		"wisdom:CreateContentAssociation",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateKnowledgeBase API call. */
	static readonly CreateKnowledgeBase: string[] = [
		"wisdom:CreateKnowledgeBase",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateMessageTemplate API call. */
	static readonly CreateMessageTemplate: string[] = [
		"wisdom:CreateMessageTemplate",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateMessageTemplateAttachment API call. */
	static readonly CreateMessageTemplateAttachment: string[] = [
		"wisdom:CreateMessageTemplateAttachment",
	];
	/** IAM actions required for the CreateMessageTemplateVersion API call. */
	static readonly CreateMessageTemplateVersion: string[] = [
		"wisdom:CreateMessageTemplateVersion",
	];
	/** IAM actions required for the CreateQuickResponse API call. */
	static readonly CreateQuickResponse: string[] = [
		"wisdom:CreateQuickResponse",
		"wisdom:TagResource",
	];
	/** IAM actions required for the CreateSession API call. */
	static readonly CreateSession: string[] = [
		"wisdom:CreateSession",
		"wisdom:TagResource",
	];
	/** IAM actions required for the DeactivateMessageTemplate API call. */
	static readonly DeactivateMessageTemplate: string[] = [
		"wisdom:DeactivateMessageTemplate",
	];
	/** IAM actions required for the DeleteAIAgent API call. */
	static readonly DeleteAIAgent: string[] = ["wisdom:DeleteAIAgent"];
	/** IAM actions required for the DeleteAIAgentVersion API call. */
	static readonly DeleteAIAgentVersion: string[] = [
		"wisdom:DeleteAIAgentVersion",
	];
	/** IAM actions required for the DeleteAIGuardrail API call. */
	static readonly DeleteAIGuardrail: string[] = ["wisdom:DeleteAIGuardrail"];
	/** IAM actions required for the DeleteAIGuardrailVersion API call. */
	static readonly DeleteAIGuardrailVersion: string[] = [
		"wisdom:DeleteAIGuardrailVersion",
	];
	/** IAM actions required for the DeleteAIPrompt API call. */
	static readonly DeleteAIPrompt: string[] = ["wisdom:DeleteAIPrompt"];
	/** IAM actions required for the DeleteAIPromptVersion API call. */
	static readonly DeleteAIPromptVersion: string[] = [
		"wisdom:DeleteAIPromptVersion",
	];
	/** IAM actions required for the DeleteAssistant API call. */
	static readonly DeleteAssistant: string[] = ["wisdom:DeleteAssistant"];
	/** IAM actions required for the DeleteAssistantAssociation API call. */
	static readonly DeleteAssistantAssociation: string[] = [
		"wisdom:DeleteAssistantAssociation",
	];
	/** IAM actions required for the DeleteContent API call. */
	static readonly DeleteContent: string[] = ["wisdom:DeleteContent"];
	/** IAM actions required for the DeleteContentAssociation API call. */
	static readonly DeleteContentAssociation: string[] = [
		"wisdom:DeleteContentAssociation",
	];
	/** IAM actions required for the DeleteImportJob API call. */
	static readonly DeleteImportJob: string[] = ["wisdom:DeleteImportJob"];
	/** IAM actions required for the DeleteKnowledgeBase API call. */
	static readonly DeleteKnowledgeBase: string[] = [
		"wisdom:DeleteKnowledgeBase",
	];
	/** IAM actions required for the DeleteMessageTemplate API call. */
	static readonly DeleteMessageTemplate: string[] = [
		"wisdom:DeleteMessageTemplate",
	];
	/** IAM actions required for the DeleteMessageTemplateAttachment API call. */
	static readonly DeleteMessageTemplateAttachment: string[] = [
		"wisdom:DeleteMessageTemplateAttachment",
	];
	/** IAM actions required for the DeleteQuickResponse API call. */
	static readonly DeleteQuickResponse: string[] = [
		"wisdom:DeleteQuickResponse",
	];
	/** IAM actions required for the GetAIAgent API call. */
	static readonly opGetAIAgent: string[] = ["wisdom:GetAIAgent"];
	/** IAM actions required for the GetAIGuardrail API call. */
	static readonly opGetAIGuardrail: string[] = ["wisdom:GetAIGuardrail"];
	/** IAM actions required for the GetAIPrompt API call. */
	static readonly opGetAIPrompt: string[] = ["wisdom:GetAIPrompt"];
	/** IAM actions required for the GetAssistant API call. */
	static readonly opGetAssistant: string[] = ["wisdom:GetAssistant"];
	/** IAM actions required for the GetAssistantAssociation API call. */
	static readonly opGetAssistantAssociation: string[] = [
		"wisdom:GetAssistantAssociation",
	];
	/** IAM actions required for the GetContent API call. */
	static readonly opGetContent: string[] = ["wisdom:GetContent"];
	/** IAM actions required for the GetContentAssociation API call. */
	static readonly opGetContentAssociation: string[] = [
		"wisdom:GetContentAssociation",
	];
	/** IAM actions required for the GetContentSummary API call. */
	static readonly opGetContentSummary: string[] = ["wisdom:GetContentSummary"];
	/** IAM actions required for the GetImportJob API call. */
	static readonly opGetImportJob: string[] = ["wisdom:GetImportJob"];
	/** IAM actions required for the GetKnowledgeBase API call. */
	static readonly opGetKnowledgeBase: string[] = ["wisdom:GetKnowledgeBase"];
	/** IAM actions required for the GetMessageTemplate API call. */
	static readonly opGetMessageTemplate: string[] = [
		"wisdom:GetMessageTemplate",
	];
	/** IAM actions required for the GetNextMessage API call. */
	static readonly opGetNextMessage: string[] = ["wisdom:GetNextMessage"];
	/** IAM actions required for the GetQuickResponse API call. */
	static readonly opGetQuickResponse: string[] = ["wisdom:GetQuickResponse"];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly opGetRecommendations: string[] = [
		"wisdom:GetRecommendations",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["wisdom:GetSession"];
	/** IAM actions required for the ListAIAgentVersions API call. */
	static readonly ListAIAgentVersions: string[] = [
		"wisdom:ListAIAgentVersions",
	];
	/** IAM actions required for the ListAIAgents API call. */
	static readonly ListAIAgents: string[] = ["wisdom:ListAIAgents"];
	/** IAM actions required for the ListAIGuardrailVersions API call. */
	static readonly ListAIGuardrailVersions: string[] = [
		"wisdom:ListAIGuardrailVersions",
	];
	/** IAM actions required for the ListAIGuardrails API call. */
	static readonly ListAIGuardrails: string[] = ["wisdom:ListAIGuardrails"];
	/** IAM actions required for the ListAIPromptVersions API call. */
	static readonly ListAIPromptVersions: string[] = [
		"wisdom:ListAIPromptVersions",
	];
	/** IAM actions required for the ListAIPrompts API call. */
	static readonly ListAIPrompts: string[] = ["wisdom:ListAIPrompts"];
	/** IAM actions required for the ListAssistantAssociations API call. */
	static readonly ListAssistantAssociations: string[] = [
		"wisdom:ListAssistantAssociations",
	];
	/** IAM actions required for the ListAssistants API call. */
	static readonly ListAssistants: string[] = ["wisdom:ListAssistants"];
	/** IAM actions required for the ListContentAssociations API call. */
	static readonly ListContentAssociations: string[] = [
		"wisdom:ListContentAssociations",
	];
	/** IAM actions required for the ListContents API call. */
	static readonly ListContents: string[] = ["wisdom:ListContents"];
	/** IAM actions required for the ListImportJobs API call. */
	static readonly ListImportJobs: string[] = ["wisdom:ListImportJobs"];
	/** IAM actions required for the ListKnowledgeBases API call. */
	static readonly ListKnowledgeBases: string[] = ["wisdom:ListKnowledgeBases"];
	/** IAM actions required for the ListMessageTemplateVersions API call. */
	static readonly ListMessageTemplateVersions: string[] = [
		"wisdom:ListMessageTemplateVersions",
	];
	/** IAM actions required for the ListMessageTemplates API call. */
	static readonly ListMessageTemplates: string[] = [
		"wisdom:ListMessageTemplates",
	];
	/** IAM actions required for the ListMessages API call. */
	static readonly ListMessages: string[] = ["wisdom:ListMessages"];
	/** IAM actions required for the ListModels API call. */
	static readonly ListModels: string[] = ["wisdom:ListModels"];
	/** IAM actions required for the ListQuickResponses API call. */
	static readonly ListQuickResponses: string[] = ["wisdom:ListQuickResponses"];
	/** IAM actions required for the ListSpans API call. */
	static readonly ListSpans: string[] = ["wisdom:ListSpans"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"wisdom:ListTagsForResource",
	];
	/** IAM actions required for the NotifyRecommendationsReceived API call. */
	static readonly NotifyRecommendationsReceived: string[] = [
		"wisdom:NotifyRecommendationsReceived",
	];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PutFeedback: string[] = ["wisdom:PutFeedback"];
	/** IAM actions required for the QueryAssistant API call. */
	static readonly QueryAssistant: string[] = ["wisdom:QueryAssistant"];
	/** IAM actions required for the RemoveAssistantAIAgent API call. */
	static readonly RemoveAssistantAIAgent: string[] = [
		"wisdom:RemoveAssistantAIAgent",
	];
	/** IAM actions required for the RemoveKnowledgeBaseTemplateUri API call. */
	static readonly RemoveKnowledgeBaseTemplateUri: string[] = [
		"wisdom:RemoveKnowledgeBaseTemplateUri",
	];
	/** IAM actions required for the RenderMessageTemplate API call. */
	static readonly RenderMessageTemplate: string[] = [
		"wisdom:GetMessageTemplate",
		"wisdom:RenderMessageTemplate",
	];
	/** IAM actions required for the Retrieve API call. */
	static readonly Retrieve: string[] = ["wisdom:Retrieve"];
	/** IAM actions required for the SearchContent API call. */
	static readonly SearchContent: string[] = ["wisdom:SearchContent"];
	/** IAM actions required for the SearchMessageTemplates API call. */
	static readonly SearchMessageTemplates: string[] = [
		"wisdom:SearchMessageTemplates",
	];
	/** IAM actions required for the SearchQuickResponses API call. */
	static readonly SearchQuickResponses: string[] = [
		"wisdom:GetQuickResponse",
		"wisdom:SearchQuickResponses",
	];
	/** IAM actions required for the SearchSessions API call. */
	static readonly SearchSessions: string[] = ["wisdom:SearchSessions"];
	/** IAM actions required for the SendMessage API call. */
	static readonly SendMessage: string[] = ["wisdom:SendMessage"];
	/** IAM actions required for the StartContentUpload API call. */
	static readonly StartContentUpload: string[] = ["wisdom:StartContentUpload"];
	/** IAM actions required for the StartImportJob API call. */
	static readonly StartImportJob: string[] = ["wisdom:StartImportJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["wisdom:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["wisdom:UntagResource"];
	/** IAM actions required for the UpdateAIAgent API call. */
	static readonly UpdateAIAgent: string[] = ["wisdom:UpdateAIAgent"];
	/** IAM actions required for the UpdateAIGuardrail API call. */
	static readonly UpdateAIGuardrail: string[] = ["wisdom:UpdateAIGuardrail"];
	/** IAM actions required for the UpdateAIPrompt API call. */
	static readonly UpdateAIPrompt: string[] = ["wisdom:UpdateAIPrompt"];
	/** IAM actions required for the UpdateAssistantAIAgent API call. */
	static readonly UpdateAssistantAIAgent: string[] = [
		"wisdom:UpdateAssistantAIAgent",
	];
	/** IAM actions required for the UpdateContent API call. */
	static readonly UpdateContent: string[] = ["wisdom:UpdateContent"];
	/** IAM actions required for the UpdateKnowledgeBaseTemplateUri API call. */
	static readonly UpdateKnowledgeBaseTemplateUri: string[] = [
		"wisdom:UpdateKnowledgeBaseTemplateUri",
	];
	/** IAM actions required for the UpdateMessageTemplate API call. */
	static readonly UpdateMessageTemplate: string[] = [
		"wisdom:UpdateMessageTemplate",
	];
	/** IAM actions required for the UpdateMessageTemplateMetadata API call. */
	static readonly UpdateMessageTemplateMetadata: string[] = [
		"wisdom:UpdateMessageTemplateMetadata",
	];
	/** IAM actions required for the UpdateQuickResponse API call. */
	static readonly UpdateQuickResponse: string[] = [
		"wisdom:UpdateQuickResponse",
	];
	/** IAM actions required for the UpdateSession API call. */
	static readonly UpdateSession: string[] = ["wisdom:UpdateSession"];
	/** IAM actions required for the UpdateSessionData API call. */
	static readonly UpdateSessionData: string[] = ["wisdom:UpdateSessionData"];
}

/**
 * Condition key constants and builders for wisdom.
 */
export class WisdomConditions {
	/** Condition keys applicable to the CreateAIAgent action. */
	static readonly CreateAIAgentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIAgentVersion action. */
	static readonly CreateAIAgentVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIGuardrail action. */
	static readonly CreateAIGuardrailConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIGuardrailVersion action. */
	static readonly CreateAIGuardrailVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIPrompt action. */
	static readonly CreateAIPromptConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIPromptVersion action. */
	static readonly CreateAIPromptVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssistant action. */
	static readonly CreateAssistantConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssistantAssociation action. */
	static readonly CreateAssistantAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContent action. */
	static readonly CreateContentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContentAssociation action. */
	static readonly CreateContentAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKnowledgeBase action. */
	static readonly CreateKnowledgeBaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMessageTemplate action. */
	static readonly CreateMessageTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuickResponse action. */
	static readonly CreateQuickResponseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSession action. */
	static readonly CreateSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetMessageTemplate action. */
	static readonly actionGetMessageTemplateConditionKeys: string[] = [
		"wisdom:MessageTemplate/RoutingProfileArn",
	];
	/** Condition keys applicable to the RenderMessageTemplate action. */
	static readonly RenderMessageTemplateConditionKeys: string[] = [
		"wisdom:MessageTemplate/RoutingProfileArn",
	];
	/** Condition keys applicable to the SearchMessageTemplates action. */
	static readonly SearchMessageTemplatesConditionKeys: string[] = [
		"wisdom:SearchFilter/Qualifier",
		"wisdom:SearchFilter/RoutingProfileArn",
	];
	/** Condition keys applicable to the SearchQuickResponses action. */
	static readonly SearchQuickResponsesConditionKeys: string[] = [
		"wisdom:SearchFilter/RoutingProfileArn",
	];
	/** Condition keys applicable to the StartImportJob action. */
	static readonly StartImportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: wisdom:MessageTemplate/RoutingProfileArn (ArrayOfARN) */
	static readonly MESSAGE_TEMPLATE_ROUTING_PROFILE_ARN =
		"wisdom:MessageTemplate/RoutingProfileArn";
	/** Condition key: wisdom:SearchFilter/Qualifier (ArrayOfString) */
	static readonly SEARCH_FILTER_QUALIFIER = "wisdom:SearchFilter/Qualifier";
	/** Condition key: wisdom:SearchFilter/RoutingProfileArn (ARN) */
	static readonly SEARCH_FILTER_ROUTING_PROFILE_ARN =
		"wisdom:SearchFilter/RoutingProfileArn";

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
	 * Generates a condition block for `wisdom:MessageTemplate/RoutingProfileArn`.
	 */
	static messageTemplateRoutingProfileARN(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"wisdom:MessageTemplate/RoutingProfileArn": values,
			},
		};
	}

	/**
	 * Generates a condition block for `wisdom:SearchFilter/Qualifier`.
	 */
	static searchFilterQualifier(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "wisdom:SearchFilter/Qualifier": values },
		};
	}

	/**
	 * Generates a condition block for `wisdom:SearchFilter/RoutingProfileArn`.
	 */
	static searchFilterRoutingProfileARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "wisdom:SearchFilter/RoutingProfileArn": value } };
	}
}
