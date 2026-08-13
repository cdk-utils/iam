// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rhelkb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rhelkb service.
 */
export class RhelkbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rhelkb";

	/** [Read] rhelkb:GetRhelURL */
	static readonly GET_RHEL_URL = "rhelkb:GetRhelURL";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [RhelkbActions.GET_RHEL_URL];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
