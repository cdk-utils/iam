// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bcm-recommended-actions.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bcm-recommended-actions service.
 */
export class BcmRecommendedActionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bcm-recommended-actions";

	/** [List] bcm-recommended-actions:ListRecommendedActions */
	static readonly LIST_RECOMMENDED_ACTIONS =
		"bcm-recommended-actions:ListRecommendedActions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BcmRecommendedActionsActions.LIST_RECOMMENDED_ACTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for bcm-recommended-actions.
 */
export class BcmRecommendedActionsOperations {
	/** IAM actions required for the ListRecommendedActions API call. */
	static readonly LIST_RECOMMENDED_ACTIONS: string[] = [
		"bcm-recommended-actions:ListRecommendedActions",
	];
}
