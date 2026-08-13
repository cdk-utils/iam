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
	static readonly DeleteAccountColor = "uxc:DeleteAccountColor";
	/** [Read] uxc:GetAccountColor */
	static readonly actionGetAccountColor = "uxc:GetAccountColor";
	/** [Read] uxc:GetAccountCustomizations */
	static readonly actionGetAccountCustomizations =
		"uxc:GetAccountCustomizations";
	/** [Read] uxc:ListServices */
	static readonly ListServices = "uxc:ListServices";
	/** [Write] uxc:PutAccountColor */
	static readonly PutAccountColor = "uxc:PutAccountColor";
	/** [Write] uxc:UpdateAccountCustomizations */
	static readonly UpdateAccountCustomizations =
		"uxc:UpdateAccountCustomizations";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		UxcActions.actionGetAccountColor,
		UxcActions.actionGetAccountCustomizations,
		UxcActions.ListServices,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		UxcActions.DeleteAccountColor,
		UxcActions.PutAccountColor,
		UxcActions.UpdateAccountCustomizations,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for uxc.
 */
export class UxcOperations {
	/** IAM actions required for the GetAccountCustomizations API call. */
	static readonly opGetAccountCustomizations: string[] = [
		"uxc:GetAccountColor",
		"uxc:GetAccountCustomizations",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["uxc:ListServices"];
	/** IAM actions required for the UpdateAccountCustomizations API call. */
	static readonly UpdateAccountCustomizations: string[] = [
		"uxc:DeleteAccountColor",
		"uxc:PutAccountColor",
		"uxc:UpdateAccountCustomizations",
	];
}
