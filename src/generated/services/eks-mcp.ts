// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/eks-mcp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the eks-mcp service.
 */
export class EKSMcpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "eks-mcp";

	/** [Write] eks-mcp:CallPrivilegedTool */
	static readonly CALL_PRIVILEGED_TOOL = "eks-mcp:CallPrivilegedTool";
	/** [Read] eks-mcp:CallReadOnlyTool */
	static readonly CALL_READ_ONLY_TOOL = "eks-mcp:CallReadOnlyTool";
	/** [Read] eks-mcp:InvokeMcp */
	static readonly INVOKE_MCP = "eks-mcp:InvokeMcp";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EKSMcpActions.CALL_READ_ONLY_TOOL,
		EKSMcpActions.INVOKE_MCP,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EKSMcpActions.CALL_PRIVILEGED_TOOL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
