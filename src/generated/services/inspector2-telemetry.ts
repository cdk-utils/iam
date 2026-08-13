// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/inspector2-telemetry.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the inspector2-telemetry service.
 */
export class Inspector2TelemetryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "inspector2-telemetry";

	/** [Write] inspector2-telemetry:NotifyHeartbeat */
	static readonly NotifyHeartbeat = "inspector2-telemetry:NotifyHeartbeat";
	/** [Write] inspector2-telemetry:SendTelemetry */
	static readonly SendTelemetry = "inspector2-telemetry:SendTelemetry";
	/** [Write] inspector2-telemetry:SendTelemetryEvent */
	static readonly SendTelemetryEvent =
		"inspector2-telemetry:SendTelemetryEvent";
	/** [Write] inspector2-telemetry:StartSession */
	static readonly StartSession = "inspector2-telemetry:StartSession";
	/** [Write] inspector2-telemetry:StopSession */
	static readonly StopSession = "inspector2-telemetry:StopSession";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Inspector2TelemetryActions.NotifyHeartbeat,
		Inspector2TelemetryActions.SendTelemetry,
		Inspector2TelemetryActions.SendTelemetryEvent,
		Inspector2TelemetryActions.StartSession,
		Inspector2TelemetryActions.StopSession,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
