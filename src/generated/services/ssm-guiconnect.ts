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
	static readonly CancelConnection = "ssm-guiconnect:CancelConnection";
	/** [Write] ssm-guiconnect:DeleteConnectionRecordingPreferences */
	static readonly DeleteConnectionRecordingPreferences =
		"ssm-guiconnect:DeleteConnectionRecordingPreferences";
	/** [Read] ssm-guiconnect:GetConnection */
	static readonly actionGetConnection = "ssm-guiconnect:GetConnection";
	/** [Read] ssm-guiconnect:GetConnectionRecordingPreferences */
	static readonly actionGetConnectionRecordingPreferences =
		"ssm-guiconnect:GetConnectionRecordingPreferences";
	/** [List] ssm-guiconnect:ListConnections */
	static readonly ListConnections = "ssm-guiconnect:ListConnections";
	/** [Write] ssm-guiconnect:StartConnection */
	static readonly StartConnection = "ssm-guiconnect:StartConnection";
	/** [Write] ssm-guiconnect:UpdateConnectionRecordingPreferences */
	static readonly UpdateConnectionRecordingPreferences =
		"ssm-guiconnect:UpdateConnectionRecordingPreferences";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMGuiconnectActions.actionGetConnection,
		SSMGuiconnectActions.actionGetConnectionRecordingPreferences,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMGuiconnectActions.CancelConnection,
		SSMGuiconnectActions.DeleteConnectionRecordingPreferences,
		SSMGuiconnectActions.StartConnection,
		SSMGuiconnectActions.UpdateConnectionRecordingPreferences,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMGuiconnectActions.ListConnections,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for ssm-guiconnect.
 */
export class SSMGuiconnectOperations {
	/** IAM actions required for the DeleteConnectionRecordingPreferences API call. */
	static readonly DeleteConnectionRecordingPreferences: string[] = [
		"ssm-guiconnect:DeleteConnectionRecordingPreferences",
	];
	/** IAM actions required for the GetConnectionRecordingPreferences API call. */
	static readonly opGetConnectionRecordingPreferences: string[] = [
		"ssm-guiconnect:GetConnectionRecordingPreferences",
	];
	/** IAM actions required for the UpdateConnectionRecordingPreferences API call. */
	static readonly UpdateConnectionRecordingPreferences: string[] = [
		"ssm-guiconnect:UpdateConnectionRecordingPreferences",
	];
}
