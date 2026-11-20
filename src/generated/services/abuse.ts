// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/abuse.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the abuse service.
 */
export class AbuseActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "abuse";

	/** [Write] abuse:CreateAbuseReport */
	static readonly CreateAbuseReport = "abuse:CreateAbuseReport";
	/** [Read] abuse:GetAbuseReportStatus */
	static readonly actionGetAbuseReportStatus = "abuse:GetAbuseReportStatus";
	/** [Read] abuse:ListAbuseReportStatuses */
	static readonly ListAbuseReportStatuses = "abuse:ListAbuseReportStatuses";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AbuseActions.actionGetAbuseReportStatus,
		AbuseActions.ListAbuseReportStatuses,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [AbuseActions.CreateAbuseReport];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for abuse.
 */
export class AbuseOperations {
	/** IAM actions required for the CreateAbuseReport API call. */
	static readonly CreateAbuseReport: string[] = ["abuse:CreateAbuseReport"];
	/** IAM actions required for the GetAbuseReportStatus API call. */
	static readonly opGetAbuseReportStatus: string[] = [
		"abuse:GetAbuseReportStatus",
	];
	/** IAM actions required for the ListAbuseReportStatuses API call. */
	static readonly ListAbuseReportStatuses: string[] = [
		"abuse:ListAbuseReportStatuses",
	];
}
