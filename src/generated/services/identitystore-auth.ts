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
	static readonly BatchDeleteSession = "identitystore-auth:BatchDeleteSession";
	/** [Read] identitystore-auth:BatchGetSession */
	static readonly BatchGetSession = "identitystore-auth:BatchGetSession";
	/** [List] identitystore-auth:ListSessions */
	static readonly ListSessions = "identitystore-auth:ListSessions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IdentitystoreAuthActions.BatchGetSession,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IdentitystoreAuthActions.BatchDeleteSession,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IdentitystoreAuthActions.ListSessions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
