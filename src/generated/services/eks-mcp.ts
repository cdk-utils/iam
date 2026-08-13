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
	static readonly CallPrivilegedTool = "eks-mcp:CallPrivilegedTool";
	/** [Read] eks-mcp:CallReadOnlyTool */
	static readonly CallReadOnlyTool = "eks-mcp:CallReadOnlyTool";
	/** [Read] eks-mcp:InvokeMcp */
	static readonly InvokeMcp = "eks-mcp:InvokeMcp";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EKSMcpActions.CallReadOnlyTool,
		EKSMcpActions.InvokeMcp,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EKSMcpActions.CallPrivilegedTool,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
