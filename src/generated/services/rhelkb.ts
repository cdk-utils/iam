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
	static readonly actionGetRhelURL = "rhelkb:GetRhelURL";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [RhelkbActions.actionGetRhelURL];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
