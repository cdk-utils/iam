// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/tiros.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the tiros service.
 */
export class TirosActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "tiros";

	/** [Write] tiros:CreateQuery */
	static readonly CREATE_QUERY = "tiros:CreateQuery";
	/** [Write] tiros:ExtendQuery */
	static readonly EXTEND_QUERY = "tiros:ExtendQuery";
	/** [Read] tiros:GetQueryAnswer */
	static readonly GET_QUERY_ANSWER = "tiros:GetQueryAnswer";
	/** [Read] tiros:GetQueryExplanation */
	static readonly GET_QUERY_EXPLANATION = "tiros:GetQueryExplanation";
	/** [Read] tiros:GetQueryExtensionAccounts */
	static readonly GET_QUERY_EXTENSION_ACCOUNTS =
		"tiros:GetQueryExtensionAccounts";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TirosActions.GET_QUERY_ANSWER,
		TirosActions.GET_QUERY_EXPLANATION,
		TirosActions.GET_QUERY_EXTENSION_ACCOUNTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TirosActions.CREATE_QUERY,
		TirosActions.EXTEND_QUERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
