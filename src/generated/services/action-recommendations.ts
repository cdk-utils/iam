// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/action-recommendations.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the action-recommendations service.
 */
export class ActionRecommendationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "action-recommendations";

	/** [List] action-recommendations:ListRecommendedActions */
	static readonly ListRecommendedActions =
		"action-recommendations:ListRecommendedActions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ActionRecommendationsActions.ListRecommendedActions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
