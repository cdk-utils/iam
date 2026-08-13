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
	static readonly InvokeReadOnlyTools = "ecs-mcp:InvokeReadOnlyTools";
	/** [Read] ecs-mcp:UseMcp */
	static readonly UseMcp = "ecs-mcp:UseMcp";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ECSMcpActions.InvokeReadOnlyTools,
		ECSMcpActions.UseMcp,
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
