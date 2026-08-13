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
	static readonly REGISTER_ON_PREMISES_AGENT =
		"arsenal:RegisterOnPremisesAgent";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ArsenalActions.REGISTER_ON_PREMISES_AGENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
