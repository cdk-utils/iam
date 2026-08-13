// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sagemaker-unified-studio-mcp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sagemaker-unified-studio-mcp service.
 */
export class SagemakerUnifiedStudioMcpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sagemaker-unified-studio-mcp";

	/** [Read] sagemaker-unified-studio-mcp:AuthorizeVpce */
	static readonly AUTHORIZE_VPCE = "sagemaker-unified-studio-mcp:AuthorizeVpce";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SagemakerUnifiedStudioMcpActions.AUTHORIZE_VPCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
