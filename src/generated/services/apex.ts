// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/apex.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the apex service.
 */
export class ApexActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "apex";

	/** [Read] apex:GetStatistics */
	static readonly actionGetStatistics = "apex:GetStatistics";
	/** [Read] apex:GetStatisticsTimeSeries */
	static readonly actionGetStatisticsTimeSeries =
		"apex:GetStatisticsTimeSeries";
	/** [Read] apex:Search */
	static readonly Search = "apex:Search";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApexActions.actionGetStatistics,
		ApexActions.actionGetStatisticsTimeSeries,
		ApexActions.Search,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
