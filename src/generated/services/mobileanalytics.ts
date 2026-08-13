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
	static readonly GET_FINANCIAL_REPORTS = "mobileanalytics:GetFinancialReports";
	/** [Read] mobileanalytics:GetReports */
	static readonly GET_REPORTS = "mobileanalytics:GetReports";
	/** [Write] mobileanalytics:PutEvents */
	static readonly PUT_EVENTS = "mobileanalytics:PutEvents";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MobileanalyticsActions.GET_FINANCIAL_REPORTS,
		MobileanalyticsActions.GET_REPORTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [MobileanalyticsActions.PUT_EVENTS];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
