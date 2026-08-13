// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/networkmanager-chat.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the networkmanager-chat service.
 */
export class NetworkmanagerChatActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "networkmanager-chat";

	/** [Write] networkmanager-chat:CancelMessageResponse */
	static readonly CANCEL_MESSAGE_RESPONSE =
		"networkmanager-chat:CancelMessageResponse";
	/** [Write] networkmanager-chat:CreateConversation */
	static readonly CREATE_CONVERSATION =
		"networkmanager-chat:CreateConversation";
	/** [Write] networkmanager-chat:DeleteConversation */
	static readonly DELETE_CONVERSATION =
		"networkmanager-chat:DeleteConversation";
	/** [List] networkmanager-chat:ListConversationMessages */
	static readonly LIST_CONVERSATION_MESSAGES =
		"networkmanager-chat:ListConversationMessages";
	/** [List] networkmanager-chat:ListConversations */
	static readonly LIST_CONVERSATIONS = "networkmanager-chat:ListConversations";
	/** [Write] networkmanager-chat:NotifyConversationIsActive */
	static readonly NOTIFY_CONVERSATION_IS_ACTIVE =
		"networkmanager-chat:NotifyConversationIsActive";
	/** [Write] networkmanager-chat:SendConversationMessage */
	static readonly SEND_CONVERSATION_MESSAGE =
		"networkmanager-chat:SendConversationMessage";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NetworkmanagerChatActions.CANCEL_MESSAGE_RESPONSE,
		NetworkmanagerChatActions.CREATE_CONVERSATION,
		NetworkmanagerChatActions.DELETE_CONVERSATION,
		NetworkmanagerChatActions.NOTIFY_CONVERSATION_IS_ACTIVE,
		NetworkmanagerChatActions.SEND_CONVERSATION_MESSAGE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NetworkmanagerChatActions.LIST_CONVERSATION_MESSAGES,
		NetworkmanagerChatActions.LIST_CONVERSATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
