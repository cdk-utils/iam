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
	static readonly CreateQuery = "tiros:CreateQuery";
	/** [Write] tiros:ExtendQuery */
	static readonly ExtendQuery = "tiros:ExtendQuery";
	/** [Read] tiros:GetQueryAnswer */
	static readonly actionGetQueryAnswer = "tiros:GetQueryAnswer";
	/** [Read] tiros:GetQueryExplanation */
	static readonly actionGetQueryExplanation = "tiros:GetQueryExplanation";
	/** [Read] tiros:GetQueryExtensionAccounts */
	static readonly actionGetQueryExtensionAccounts =
		"tiros:GetQueryExtensionAccounts";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TirosActions.actionGetQueryAnswer,
		TirosActions.actionGetQueryExplanation,
		TirosActions.actionGetQueryExtensionAccounts,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TirosActions.CreateQuery,
		TirosActions.ExtendQuery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
