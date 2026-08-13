// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/resource-explorer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the resource-explorer service.
 */
export class ResourceExplorerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "resource-explorer";

	/** [List] resource-explorer:ListResourceTypes */
	static readonly LIST_RESOURCE_TYPES = "resource-explorer:ListResourceTypes";
	/** [List] resource-explorer:ListResources */
	static readonly LIST_RESOURCES = "resource-explorer:ListResources";
	/** [Read] resource-explorer:ListTags */
	static readonly LIST_TAGS = "resource-explorer:ListTags";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [ResourceExplorerActions.LIST_TAGS];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ResourceExplorerActions.LIST_RESOURCE_TYPES,
		ResourceExplorerActions.LIST_RESOURCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
