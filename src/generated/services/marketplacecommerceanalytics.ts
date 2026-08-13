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
	static readonly GENERATE_DATA_SET =
		"marketplacecommerceanalytics:GenerateDataSet";
	/** [Write] marketplacecommerceanalytics:StartSupportDataExport */
	static readonly START_SUPPORT_DATA_EXPORT =
		"marketplacecommerceanalytics:StartSupportDataExport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MarketplacecommerceanalyticsActions.GENERATE_DATA_SET,
		MarketplacecommerceanalyticsActions.START_SUPPORT_DATA_EXPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for marketplacecommerceanalytics.
 */
export class MarketplacecommerceanalyticsOperations {
	/** IAM actions required for the GenerateDataSet API call. */
	static readonly GENERATE_DATA_SET: string[] = [];
	/** IAM actions required for the StartSupportDataExport API call. */
	static readonly START_SUPPORT_DATA_EXPORT: string[] = [];
}
