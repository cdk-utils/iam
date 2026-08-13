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
	static readonly GET_DEPLOYMENT_SPECIFICATION =
		"codedeploy-commands-secure:GetDeploymentSpecification";
	/** [Read] codedeploy-commands-secure:PollHostCommand */
	static readonly POLL_HOST_COMMAND =
		"codedeploy-commands-secure:PollHostCommand";
	/** [Write] codedeploy-commands-secure:PutHostCommandAcknowledgement */
	static readonly PUT_HOST_COMMAND_ACKNOWLEDGEMENT =
		"codedeploy-commands-secure:PutHostCommandAcknowledgement";
	/** [Write] codedeploy-commands-secure:PutHostCommandComplete */
	static readonly PUT_HOST_COMMAND_COMPLETE =
		"codedeploy-commands-secure:PutHostCommandComplete";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodedeployCommandsSecureActions.GET_DEPLOYMENT_SPECIFICATION,
		CodedeployCommandsSecureActions.POLL_HOST_COMMAND,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodedeployCommandsSecureActions.PUT_HOST_COMMAND_ACKNOWLEDGEMENT,
		CodedeployCommandsSecureActions.PUT_HOST_COMMAND_COMPLETE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
