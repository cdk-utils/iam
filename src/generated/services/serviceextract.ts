// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/serviceextract.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the serviceextract service.
 */
export class ServiceextractActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "serviceextract";

	/** [Read] serviceextract:GetConfig */
	static readonly actionGetConfig = "serviceextract:GetConfig";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ServiceextractActions.actionGetConfig,
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
