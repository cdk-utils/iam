// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/wam.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the wam service.
 */
export class WamActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "wam";

	/** [Write] wam:AuthenticatePackager */
	static readonly AUTHENTICATE_PACKAGER = "wam:AuthenticatePackager";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [WamActions.AUTHENTICATE_PACKAGER];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
