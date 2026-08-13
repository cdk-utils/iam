// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/arsenal.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the arsenal service.
 */
export class ArsenalActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "arsenal";

	/** [Write] arsenal:RegisterOnPremisesAgent */
	static readonly RegisterOnPremisesAgent = "arsenal:RegisterOnPremisesAgent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ArsenalActions.RegisterOnPremisesAgent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
