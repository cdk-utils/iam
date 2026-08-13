// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/importexport.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the importexport service.
 */
export class ImportexportActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "importexport";

	/** [Write] importexport:CancelJob */
	static readonly CancelJob = "importexport:CancelJob";
	/** [Write] importexport:CreateJob */
	static readonly CreateJob = "importexport:CreateJob";
	/** [Read] importexport:GetShippingLabel */
	static readonly actionGetShippingLabel = "importexport:GetShippingLabel";
	/** [Read] importexport:GetStatus */
	static readonly actionGetStatus = "importexport:GetStatus";
	/** [List] importexport:ListJobs */
	static readonly ListJobs = "importexport:ListJobs";
	/** [Write] importexport:UpdateJob */
	static readonly UpdateJob = "importexport:UpdateJob";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ImportexportActions.actionGetShippingLabel,
		ImportexportActions.actionGetStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ImportexportActions.CancelJob,
		ImportexportActions.CreateJob,
		ImportexportActions.UpdateJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [ImportexportActions.ListJobs];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for importexport.
 */
export class ImportexportOperations {
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = [];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [];
	/** IAM actions required for the GetShippingLabel API call. */
	static readonly opGetShippingLabel: string[] = [];
	/** IAM actions required for the GetStatus API call. */
	static readonly opGetStatus: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = [];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UpdateJob: string[] = [];
}
