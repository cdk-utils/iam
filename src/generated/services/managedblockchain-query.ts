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
	static readonly BATCH_GET_TOKEN_BALANCE =
		"managedblockchain-query:BatchGetTokenBalance";
	/** [Read] managedblockchain-query:GetAssetContract */
	static readonly GET_ASSET_CONTRACT =
		"managedblockchain-query:GetAssetContract";
	/** [Read] managedblockchain-query:GetTokenBalance */
	static readonly GET_TOKEN_BALANCE = "managedblockchain-query:GetTokenBalance";
	/** [Read] managedblockchain-query:GetTransaction */
	static readonly GET_TRANSACTION = "managedblockchain-query:GetTransaction";
	/** [List] managedblockchain-query:ListAssetContracts */
	static readonly LIST_ASSET_CONTRACTS =
		"managedblockchain-query:ListAssetContracts";
	/** [List] managedblockchain-query:ListFilteredTransactionEvents */
	static readonly LIST_FILTERED_TRANSACTION_EVENTS =
		"managedblockchain-query:ListFilteredTransactionEvents";
	/** [List] managedblockchain-query:ListTokenBalances */
	static readonly LIST_TOKEN_BALANCES =
		"managedblockchain-query:ListTokenBalances";
	/** [List] managedblockchain-query:ListTransactionEvents */
	static readonly LIST_TRANSACTION_EVENTS =
		"managedblockchain-query:ListTransactionEvents";
	/** [List] managedblockchain-query:ListTransactions */
	static readonly LIST_TRANSACTIONS =
		"managedblockchain-query:ListTransactions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ManagedblockchainQueryActions.BATCH_GET_TOKEN_BALANCE,
		ManagedblockchainQueryActions.GET_ASSET_CONTRACT,
		ManagedblockchainQueryActions.GET_TOKEN_BALANCE,
		ManagedblockchainQueryActions.GET_TRANSACTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ManagedblockchainQueryActions.LIST_ASSET_CONTRACTS,
		ManagedblockchainQueryActions.LIST_FILTERED_TRANSACTION_EVENTS,
		ManagedblockchainQueryActions.LIST_TOKEN_BALANCES,
		ManagedblockchainQueryActions.LIST_TRANSACTION_EVENTS,
		ManagedblockchainQueryActions.LIST_TRANSACTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for managedblockchain-query.
 */
export class ManagedblockchainQueryOperations {
	/** IAM actions required for the BatchGetTokenBalance API call. */
	static readonly BATCH_GET_TOKEN_BALANCE: string[] = [
		"managedblockchain-query:BatchGetTokenBalance",
	];
	/** IAM actions required for the GetAssetContract API call. */
	static readonly GET_ASSET_CONTRACT: string[] = [
		"managedblockchain-query:GetAssetContract",
	];
	/** IAM actions required for the GetTokenBalance API call. */
	static readonly GET_TOKEN_BALANCE: string[] = [
		"managedblockchain-query:GetTokenBalance",
	];
	/** IAM actions required for the GetTransaction API call. */
	static readonly GET_TRANSACTION: string[] = [
		"managedblockchain-query:GetTransaction",
	];
	/** IAM actions required for the ListAssetContracts API call. */
	static readonly LIST_ASSET_CONTRACTS: string[] = [
		"managedblockchain-query:ListAssetContracts",
	];
	/** IAM actions required for the ListFilteredTransactionEvents API call. */
	static readonly LIST_FILTERED_TRANSACTION_EVENTS: string[] = [
		"managedblockchain-query:ListFilteredTransactionEvents",
	];
	/** IAM actions required for the ListTokenBalances API call. */
	static readonly LIST_TOKEN_BALANCES: string[] = [
		"managedblockchain-query:ListTokenBalances",
	];
	/** IAM actions required for the ListTransactionEvents API call. */
	static readonly LIST_TRANSACTION_EVENTS: string[] = [
		"managedblockchain-query:ListTransactionEvents",
	];
	/** IAM actions required for the ListTransactions API call. */
	static readonly LIST_TRANSACTIONS: string[] = [
		"managedblockchain-query:ListTransactions",
	];
}
