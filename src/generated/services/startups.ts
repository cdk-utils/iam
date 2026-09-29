// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/startups.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the startups service.
 */
export class StartupsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "startups";

	/** [Read] startups:GetSpendSummary */
	static readonly actionGetSpendSummary = "startups:GetSpendSummary";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		StartupsActions.actionGetSpendSummary,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
