// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/managedblockchain-query.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the managedblockchain-query service.
 */
export class ManagedblockchainQueryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "managedblockchain-query";

	/** [Read] managedblockchain-query:BatchGetTokenBalance */
	static readonly BatchGetTokenBalance =
		"managedblockchain-query:BatchGetTokenBalance";
	/** [Read] managedblockchain-query:GetAssetContract */
	static readonly actionGetAssetContract =
		"managedblockchain-query:GetAssetContract";
	/** [Read] managedblockchain-query:GetTokenBalance */
	static readonly actionGetTokenBalance =
		"managedblockchain-query:GetTokenBalance";
	/** [Read] managedblockchain-query:GetTransaction */
	static readonly actionGetTransaction =
		"managedblockchain-query:GetTransaction";
	/** [List] managedblockchain-query:ListAssetContracts */
	static readonly ListAssetContracts =
		"managedblockchain-query:ListAssetContracts";
	/** [List] managedblockchain-query:ListFilteredTransactionEvents */
	static readonly ListFilteredTransactionEvents =
		"managedblockchain-query:ListFilteredTransactionEvents";
	/** [List] managedblockchain-query:ListTokenBalances */
	static readonly ListTokenBalances =
		"managedblockchain-query:ListTokenBalances";
	/** [List] managedblockchain-query:ListTransactionEvents */
	static readonly ListTransactionEvents =
		"managedblockchain-query:ListTransactionEvents";
	/** [List] managedblockchain-query:ListTransactions */
	static readonly ListTransactions = "managedblockchain-query:ListTransactions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ManagedblockchainQueryActions.BatchGetTokenBalance,
		ManagedblockchainQueryActions.actionGetAssetContract,
		ManagedblockchainQueryActions.actionGetTokenBalance,
		ManagedblockchainQueryActions.actionGetTransaction,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ManagedblockchainQueryActions.ListAssetContracts,
		ManagedblockchainQueryActions.ListFilteredTransactionEvents,
		ManagedblockchainQueryActions.ListTokenBalances,
		ManagedblockchainQueryActions.ListTransactionEvents,
		ManagedblockchainQueryActions.ListTransactions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for managedblockchain-query.
 */
export class ManagedblockchainQueryOperations {
	/** IAM actions required for the BatchGetTokenBalance API call. */
	static readonly BatchGetTokenBalance: string[] = [
		"managedblockchain-query:BatchGetTokenBalance",
	];
	/** IAM actions required for the GetAssetContract API call. */
	static readonly opGetAssetContract: string[] = [
		"managedblockchain-query:GetAssetContract",
	];
	/** IAM actions required for the GetTokenBalance API call. */
	static readonly opGetTokenBalance: string[] = [
		"managedblockchain-query:GetTokenBalance",
	];
	/** IAM actions required for the GetTransaction API call. */
	static readonly opGetTransaction: string[] = [
		"managedblockchain-query:GetTransaction",
	];
	/** IAM actions required for the ListAssetContracts API call. */
	static readonly ListAssetContracts: string[] = [
		"managedblockchain-query:ListAssetContracts",
	];
	/** IAM actions required for the ListFilteredTransactionEvents API call. */
	static readonly ListFilteredTransactionEvents: string[] = [
		"managedblockchain-query:ListFilteredTransactionEvents",
	];
	/** IAM actions required for the ListTokenBalances API call. */
	static readonly ListTokenBalances: string[] = [
		"managedblockchain-query:ListTokenBalances",
	];
	/** IAM actions required for the ListTransactionEvents API call. */
	static readonly ListTransactionEvents: string[] = [
		"managedblockchain-query:ListTransactionEvents",
	];
	/** IAM actions required for the ListTransactions API call. */
	static readonly ListTransactions: string[] = [
		"managedblockchain-query:ListTransactions",
	];
}
