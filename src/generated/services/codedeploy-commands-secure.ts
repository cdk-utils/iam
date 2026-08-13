// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codedeploy-commands-secure.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codedeploy-commands-secure service.
 */
export class CodedeployCommandsSecureActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codedeploy-commands-secure";

	/** [Read] codedeploy-commands-secure:GetDeploymentSpecification */
	static readonly actionGetDeploymentSpecification =
		"codedeploy-commands-secure:GetDeploymentSpecification";
	/** [Read] codedeploy-commands-secure:PollHostCommand */
	static readonly PollHostCommand =
		"codedeploy-commands-secure:PollHostCommand";
	/** [Write] codedeploy-commands-secure:PutHostCommandAcknowledgement */
	static readonly PutHostCommandAcknowledgement =
		"codedeploy-commands-secure:PutHostCommandAcknowledgement";
	/** [Write] codedeploy-commands-secure:PutHostCommandComplete */
	static readonly PutHostCommandComplete =
		"codedeploy-commands-secure:PutHostCommandComplete";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodedeployCommandsSecureActions.actionGetDeploymentSpecification,
		CodedeployCommandsSecureActions.PollHostCommand,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodedeployCommandsSecureActions.PutHostCommandAcknowledgement,
		CodedeployCommandsSecureActions.PutHostCommandComplete,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
