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
	static readonly NOTIFY_HEARTBEAT = "inspector2-telemetry:NotifyHeartbeat";
	/** [Write] inspector2-telemetry:SendTelemetry */
	static readonly SEND_TELEMETRY = "inspector2-telemetry:SendTelemetry";
	/** [Write] inspector2-telemetry:SendTelemetryEvent */
	static readonly SEND_TELEMETRY_EVENT =
		"inspector2-telemetry:SendTelemetryEvent";
	/** [Write] inspector2-telemetry:StartSession */
	static readonly START_SESSION = "inspector2-telemetry:StartSession";
	/** [Write] inspector2-telemetry:StopSession */
	static readonly STOP_SESSION = "inspector2-telemetry:StopSession";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Inspector2TelemetryActions.NOTIFY_HEARTBEAT,
		Inspector2TelemetryActions.SEND_TELEMETRY,
		Inspector2TelemetryActions.SEND_TELEMETRY_EVENT,
		Inspector2TelemetryActions.START_SESSION,
		Inspector2TelemetryActions.STOP_SESSION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
