// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/consolidatedbilling.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the consolidatedbilling service.
 */
export class ConsolidatedbillingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "consolidatedbilling";

	/** [Read] consolidatedbilling:GetAccountBillingRole */
	static readonly actionGetAccountBillingRole =
		"consolidatedbilling:GetAccountBillingRole";
	/** [List] consolidatedbilling:ListLinkedAccounts */
	static readonly ListLinkedAccounts = "consolidatedbilling:ListLinkedAccounts";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ConsolidatedbillingActions.actionGetAccountBillingRole,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ConsolidatedbillingActions.ListLinkedAccounts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
