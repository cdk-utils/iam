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
	static readonly LIST_RECOMMENDED_ACTIONS =
		"action-recommendations:ListRecommendedActions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ActionRecommendationsActions.LIST_RECOMMENDED_ACTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
