// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ecs-mcp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ecs-mcp service.
 */
export class ECSMcpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ecs-mcp";

	/** [Read] ecs-mcp:InvokeReadOnlyTools */
	static readonly INVOKE_READ_ONLY_TOOLS = "ecs-mcp:InvokeReadOnlyTools";
	/** [Read] ecs-mcp:UseMcp */
	static readonly USE_MCP = "ecs-mcp:UseMcp";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ECSMcpActions.INVOKE_READ_ONLY_TOOLS,
		ECSMcpActions.USE_MCP,
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
