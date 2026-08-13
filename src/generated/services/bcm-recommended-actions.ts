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
	static readonly ListRecommendedActions =
		"bcm-recommended-actions:ListRecommendedActions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BcmRecommendedActionsActions.ListRecommendedActions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for bcm-recommended-actions.
 */
export class BcmRecommendedActionsOperations {
	/** IAM actions required for the ListRecommendedActions API call. */
	static readonly ListRecommendedActions: string[] = [
		"bcm-recommended-actions:ListRecommendedActions",
	];
}
