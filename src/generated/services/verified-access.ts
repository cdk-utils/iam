// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/verified-access.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the verified-access service.
 */
export class VerifiedAccessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "verified-access";

	/** [Write] verified-access:AllowVerifiedAccess */
	static readonly AllowVerifiedAccess = "verified-access:AllowVerifiedAccess";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		VerifiedAccessActions.AllowVerifiedAccess,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
