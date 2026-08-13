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
	static readonly GET_CONFIG = "serviceextract:GetConfig";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [ServiceextractActions.GET_CONFIG];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
