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
	static readonly GET_CONNECTOR_HEALTH = "awsconnector:GetConnectorHealth";
	/** [Write] awsconnector:RegisterConnector */
	static readonly REGISTER_CONNECTOR = "awsconnector:RegisterConnector";
	/** [Read] awsconnector:ValidateConnectorId */
	static readonly VALIDATE_CONNECTOR_ID = "awsconnector:ValidateConnectorId";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AwsconnectorActions.GET_CONNECTOR_HEALTH,
		AwsconnectorActions.VALIDATE_CONNECTOR_ID,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AwsconnectorActions.REGISTER_CONNECTOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
