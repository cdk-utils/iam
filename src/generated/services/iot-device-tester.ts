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
	static readonly CHECK_VERSION = "iot-device-tester:CheckVersion";
	/** [Read] iot-device-tester:DownloadTestSuite */
	static readonly DOWNLOAD_TEST_SUITE = "iot-device-tester:DownloadTestSuite";
	/** [Read] iot-device-tester:LatestIdt */
	static readonly LATEST_IDT = "iot-device-tester:LatestIdt";
	/** [Write] iot-device-tester:SendMetrics */
	static readonly SEND_METRICS = "iot-device-tester:SendMetrics";
	/** [Read] iot-device-tester:SupportedVersion */
	static readonly SUPPORTED_VERSION = "iot-device-tester:SupportedVersion";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotDeviceTesterActions.CHECK_VERSION,
		IotDeviceTesterActions.DOWNLOAD_TEST_SUITE,
		IotDeviceTesterActions.LATEST_IDT,
		IotDeviceTesterActions.SUPPORTED_VERSION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotDeviceTesterActions.SEND_METRICS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
