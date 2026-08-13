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
	static readonly CREATE_DATABASE_BINARY_SNAPSHOT =
		"mediaimport:CreateDatabaseBinarySnapshot";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaimportActions.CREATE_DATABASE_BINARY_SNAPSHOT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
