// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediaimport.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediaimport service.
 */
export class MediaimportActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediaimport";

	/** [Write] mediaimport:CreateDatabaseBinarySnapshot */
	static readonly CreateDatabaseBinarySnapshot =
		"mediaimport:CreateDatabaseBinarySnapshot";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaimportActions.CreateDatabaseBinarySnapshot,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
