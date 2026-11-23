// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workload-telemetry.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workload-telemetry service.
 */
export class WorkloadTelemetryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workload-telemetry";

	/** [Write] workload-telemetry:PutCertificateTelemetry */
	static readonly PutCertificateTelemetry =
		"workload-telemetry:PutCertificateTelemetry";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkloadTelemetryActions.PutCertificateTelemetry,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
