// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sagemaker-data-science-assistant.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sagemaker-data-science-assistant service.
 */
export class SagemakerDataScienceAssistantActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sagemaker-data-science-assistant";

	/** [Write] sagemaker-data-science-assistant:SendConversation */
	static readonly SendConversation =
		"sagemaker-data-science-assistant:SendConversation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SagemakerDataScienceAssistantActions.SendConversation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
