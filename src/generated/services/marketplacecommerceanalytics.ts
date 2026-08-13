// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/marketplacecommerceanalytics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the marketplacecommerceanalytics service.
 */
export class MarketplacecommerceanalyticsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "marketplacecommerceanalytics";

	/** [Write] marketplacecommerceanalytics:GenerateDataSet */
	static readonly GenerateDataSet =
		"marketplacecommerceanalytics:GenerateDataSet";
	/** [Write] marketplacecommerceanalytics:StartSupportDataExport */
	static readonly StartSupportDataExport =
		"marketplacecommerceanalytics:StartSupportDataExport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MarketplacecommerceanalyticsActions.GenerateDataSet,
		MarketplacecommerceanalyticsActions.StartSupportDataExport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for marketplacecommerceanalytics.
 */
export class MarketplacecommerceanalyticsOperations {
	/** IAM actions required for the GenerateDataSet API call. */
	static readonly GenerateDataSet: string[] = [];
	/** IAM actions required for the StartSupportDataExport API call. */
	static readonly StartSupportDataExport: string[] = [];
}
