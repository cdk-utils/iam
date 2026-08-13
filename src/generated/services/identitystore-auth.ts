// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/identitystore-auth.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the identitystore-auth service.
 */
export class IdentitystoreAuthActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "identitystore-auth";

	/** [Write] identitystore-auth:BatchDeleteSession */
	static readonly BATCH_DELETE_SESSION =
		"identitystore-auth:BatchDeleteSession";
	/** [Read] identitystore-auth:BatchGetSession */
	static readonly BATCH_GET_SESSION = "identitystore-auth:BatchGetSession";
	/** [List] identitystore-auth:ListSessions */
	static readonly LIST_SESSIONS = "identitystore-auth:ListSessions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IdentitystoreAuthActions.BATCH_GET_SESSION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IdentitystoreAuthActions.BATCH_DELETE_SESSION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IdentitystoreAuthActions.LIST_SESSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
