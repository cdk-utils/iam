// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/agent-discovery.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the agent-discovery service.
 */
export class AgentDiscoveryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "agent-discovery";

	/** [Read] agent-discovery:SearchPublicRecords */
	static readonly SearchPublicRecords = "agent-discovery:SearchPublicRecords";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AgentDiscoveryActions.SearchPublicRecords,
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

/**
 * API operation to required IAM actions mapping for agent-discovery.
 */
export class AgentDiscoveryOperations {
	/** IAM actions required for the SearchPublicRecords API call. */
	static readonly SearchPublicRecords: string[] = [
		"agent-discovery:SearchPublicRecords",
	];
}
