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
	static readonly ALLOW_VERIFIED_ACCESS = "verified-access:AllowVerifiedAccess";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VerifiedAccessActions.ALLOW_VERIFIED_ACCESS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
