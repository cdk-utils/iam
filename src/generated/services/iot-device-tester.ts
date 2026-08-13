// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iot-device-tester.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iot-device-tester service.
 */
export class IotDeviceTesterActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iot-device-tester";

	/** [Read] iot-device-tester:CheckVersion */
	static readonly CheckVersion = "iot-device-tester:CheckVersion";
	/** [Read] iot-device-tester:DownloadTestSuite */
	static readonly DownloadTestSuite = "iot-device-tester:DownloadTestSuite";
	/** [Read] iot-device-tester:LatestIdt */
	static readonly LatestIdt = "iot-device-tester:LatestIdt";
	/** [Write] iot-device-tester:SendMetrics */
	static readonly SendMetrics = "iot-device-tester:SendMetrics";
	/** [Read] iot-device-tester:SupportedVersion */
	static readonly SupportedVersion = "iot-device-tester:SupportedVersion";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotDeviceTesterActions.CheckVersion,
		IotDeviceTesterActions.DownloadTestSuite,
		IotDeviceTesterActions.LatestIdt,
		IotDeviceTesterActions.SupportedVersion,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotDeviceTesterActions.SendMetrics,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
