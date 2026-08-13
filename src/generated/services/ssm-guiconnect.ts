// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm-guiconnect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssm-guiconnect service.
 */
export class SSMGuiconnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm-guiconnect";

	/** [Write] ssm-guiconnect:CancelConnection */
	static readonly CANCEL_CONNECTION = "ssm-guiconnect:CancelConnection";
	/** [Write] ssm-guiconnect:DeleteConnectionRecordingPreferences */
	static readonly DELETE_CONNECTION_RECORDING_PREFERENCES =
		"ssm-guiconnect:DeleteConnectionRecordingPreferences";
	/** [Read] ssm-guiconnect:GetConnection */
	static readonly GET_CONNECTION = "ssm-guiconnect:GetConnection";
	/** [Read] ssm-guiconnect:GetConnectionRecordingPreferences */
	static readonly GET_CONNECTION_RECORDING_PREFERENCES =
		"ssm-guiconnect:GetConnectionRecordingPreferences";
	/** [List] ssm-guiconnect:ListConnections */
	static readonly LIST_CONNECTIONS = "ssm-guiconnect:ListConnections";
	/** [Write] ssm-guiconnect:StartConnection */
	static readonly START_CONNECTION = "ssm-guiconnect:StartConnection";
	/** [Write] ssm-guiconnect:UpdateConnectionRecordingPreferences */
	static readonly UPDATE_CONNECTION_RECORDING_PREFERENCES =
		"ssm-guiconnect:UpdateConnectionRecordingPreferences";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSMGuiconnectActions.GET_CONNECTION,
		SSMGuiconnectActions.GET_CONNECTION_RECORDING_PREFERENCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSMGuiconnectActions.CANCEL_CONNECTION,
		SSMGuiconnectActions.DELETE_CONNECTION_RECORDING_PREFERENCES,
		SSMGuiconnectActions.START_CONNECTION,
		SSMGuiconnectActions.UPDATE_CONNECTION_RECORDING_PREFERENCES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSMGuiconnectActions.LIST_CONNECTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for ssm-guiconnect.
 */
export class SSMGuiconnectOperations {
	/** IAM actions required for the DeleteConnectionRecordingPreferences API call. */
	static readonly DELETE_CONNECTION_RECORDING_PREFERENCES: string[] = [
		"ssm-guiconnect:DeleteConnectionRecordingPreferences",
	];
	/** IAM actions required for the GetConnectionRecordingPreferences API call. */
	static readonly GET_CONNECTION_RECORDING_PREFERENCES: string[] = [
		"ssm-guiconnect:GetConnectionRecordingPreferences",
	];
	/** IAM actions required for the UpdateConnectionRecordingPreferences API call. */
	static readonly UPDATE_CONNECTION_RECORDING_PREFERENCES: string[] = [
		"ssm-guiconnect:UpdateConnectionRecordingPreferences",
	];
}
