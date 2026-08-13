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
	static readonly CANCEL_JOB = "importexport:CancelJob";
	/** [Write] importexport:CreateJob */
	static readonly CREATE_JOB = "importexport:CreateJob";
	/** [Read] importexport:GetShippingLabel */
	static readonly GET_SHIPPING_LABEL = "importexport:GetShippingLabel";
	/** [Read] importexport:GetStatus */
	static readonly GET_STATUS = "importexport:GetStatus";
	/** [List] importexport:ListJobs */
	static readonly LIST_JOBS = "importexport:ListJobs";
	/** [Write] importexport:UpdateJob */
	static readonly UPDATE_JOB = "importexport:UpdateJob";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ImportexportActions.GET_SHIPPING_LABEL,
		ImportexportActions.GET_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ImportexportActions.CANCEL_JOB,
		ImportexportActions.CREATE_JOB,
		ImportexportActions.UPDATE_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [ImportexportActions.LIST_JOBS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for importexport.
 */
export class ImportexportOperations {
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = [];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [];
	/** IAM actions required for the GetShippingLabel API call. */
	static readonly GET_SHIPPING_LABEL: string[] = [];
	/** IAM actions required for the GetStatus API call. */
	static readonly GET_STATUS: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = [];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UPDATE_JOB: string[] = [];
}
