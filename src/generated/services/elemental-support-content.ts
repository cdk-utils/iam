// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elemental-support-content.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elemental-support-content service.
 */
export class ElementalSupportContentActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elemental-support-content";

	/** [Read] elemental-support-content:Query */
	static readonly Query = "elemental-support-content:Query";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElementalSupportContentActions.Query,
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
