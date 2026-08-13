// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/awsconnector.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the awsconnector service.
 */
export class AwsconnectorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "awsconnector";

	/** [Read] awsconnector:GetConnectorHealth */
	static readonly actionGetConnectorHealth = "awsconnector:GetConnectorHealth";
	/** [Write] awsconnector:RegisterConnector */
	static readonly RegisterConnector = "awsconnector:RegisterConnector";
	/** [Read] awsconnector:ValidateConnectorId */
	static readonly ValidateConnectorId = "awsconnector:ValidateConnectorId";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AwsconnectorActions.actionGetConnectorHealth,
		AwsconnectorActions.ValidateConnectorId,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AwsconnectorActions.RegisterConnector,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
