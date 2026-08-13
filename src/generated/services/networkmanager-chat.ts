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
	static readonly CancelMessageResponse =
		"networkmanager-chat:CancelMessageResponse";
	/** [Write] networkmanager-chat:CreateConversation */
	static readonly CreateConversation = "networkmanager-chat:CreateConversation";
	/** [Write] networkmanager-chat:DeleteConversation */
	static readonly DeleteConversation = "networkmanager-chat:DeleteConversation";
	/** [List] networkmanager-chat:ListConversationMessages */
	static readonly ListConversationMessages =
		"networkmanager-chat:ListConversationMessages";
	/** [List] networkmanager-chat:ListConversations */
	static readonly ListConversations = "networkmanager-chat:ListConversations";
	/** [Write] networkmanager-chat:NotifyConversationIsActive */
	static readonly NotifyConversationIsActive =
		"networkmanager-chat:NotifyConversationIsActive";
	/** [Write] networkmanager-chat:SendConversationMessage */
	static readonly SendConversationMessage =
		"networkmanager-chat:SendConversationMessage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkmanagerChatActions.CancelMessageResponse,
		NetworkmanagerChatActions.CreateConversation,
		NetworkmanagerChatActions.DeleteConversation,
		NetworkmanagerChatActions.NotifyConversationIsActive,
		NetworkmanagerChatActions.SendConversationMessage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkmanagerChatActions.ListConversationMessages,
		NetworkmanagerChatActions.ListConversations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
