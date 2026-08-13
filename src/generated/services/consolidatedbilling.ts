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
	static readonly GET_ACCOUNT_BILLING_ROLE =
		"consolidatedbilling:GetAccountBillingRole";
	/** [List] consolidatedbilling:ListLinkedAccounts */
	static readonly LIST_LINKED_ACCOUNTS =
		"consolidatedbilling:ListLinkedAccounts";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ConsolidatedbillingActions.GET_ACCOUNT_BILLING_ROLE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ConsolidatedbillingActions.LIST_LINKED_ACCOUNTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
