// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/inspector-scan.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the inspector-scan service.
 */
export class InspectorScanActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "inspector-scan";

	/** [Read] inspector-scan:ScanSbom */
	static readonly SCAN_SBOM = "inspector-scan:ScanSbom";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [InspectorScanActions.SCAN_SBOM];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for inspector-scan.
 */
export class InspectorScanOperations {
	/** IAM actions required for the ScanSbom API call. */
	static readonly SCAN_SBOM: string[] = ["inspector-scan:ScanSbom"];
}
