// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mobileanalytics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mobileanalytics service.
 */
export class MobileanalyticsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mobileanalytics";

	/** [Read] mobileanalytics:GetFinancialReports */
	static readonly actionGetFinancialReports =
		"mobileanalytics:GetFinancialReports";
	/** [Read] mobileanalytics:GetReports */
	static readonly actionGetReports = "mobileanalytics:GetReports";
	/** [Write] mobileanalytics:PutEvents */
	static readonly PutEvents = "mobileanalytics:PutEvents";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MobileanalyticsActions.actionGetFinancialReports,
		MobileanalyticsActions.actionGetReports,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MobileanalyticsActions.PutEvents,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
