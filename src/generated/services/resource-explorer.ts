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
	static readonly ListResourceTypes = "resource-explorer:ListResourceTypes";
	/** [List] resource-explorer:ListResources */
	static readonly ListResources = "resource-explorer:ListResources";
	/** [Read] resource-explorer:ListTags */
	static readonly ListTags = "resource-explorer:ListTags";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [ResourceExplorerActions.ListTags];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ResourceExplorerActions.ListResourceTypes,
		ResourceExplorerActions.ListResources,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
