// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/uxc.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the uxc service.
 */
export class UxcActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "uxc";

	/** [Write] uxc:DeleteAccountColor */
	static readonly DELETE_ACCOUNT_COLOR = "uxc:DeleteAccountColor";
	/** [Read] uxc:GetAccountColor */
	static readonly GET_ACCOUNT_COLOR = "uxc:GetAccountColor";
	/** [Read] uxc:GetAccountCustomizations */
	static readonly GET_ACCOUNT_CUSTOMIZATIONS = "uxc:GetAccountCustomizations";
	/** [Read] uxc:ListServices */
	static readonly LIST_SERVICES = "uxc:ListServices";
	/** [Write] uxc:PutAccountColor */
	static readonly PUT_ACCOUNT_COLOR = "uxc:PutAccountColor";
	/** [Write] uxc:UpdateAccountCustomizations */
	static readonly UPDATE_ACCOUNT_CUSTOMIZATIONS =
		"uxc:UpdateAccountCustomizations";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		UxcActions.GET_ACCOUNT_COLOR,
		UxcActions.GET_ACCOUNT_CUSTOMIZATIONS,
		UxcActions.LIST_SERVICES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		UxcActions.DELETE_ACCOUNT_COLOR,
		UxcActions.PUT_ACCOUNT_COLOR,
		UxcActions.UPDATE_ACCOUNT_CUSTOMIZATIONS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for uxc.
 */
export class UxcOperations {
	/** IAM actions required for the GetAccountCustomizations API call. */
	static readonly GET_ACCOUNT_CUSTOMIZATIONS: string[] = [
		"uxc:GetAccountColor",
		"uxc:GetAccountCustomizations",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["uxc:ListServices"];
	/** IAM actions required for the UpdateAccountCustomizations API call. */
	static readonly UPDATE_ACCOUNT_CUSTOMIZATIONS: string[] = [
		"uxc:DeleteAccountColor",
		"uxc:PutAccountColor",
		"uxc:UpdateAccountCustomizations",
	];
}
