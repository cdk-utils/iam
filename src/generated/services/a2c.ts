// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/a2c.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the a2c service.
 */
export class A2cActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "a2c";

	/** [Read] a2c:GetContainerizationJobDetails */
	static readonly actionGetContainerizationJobDetails =
		"a2c:GetContainerizationJobDetails";
	/** [Read] a2c:GetDeploymentJobDetails */
	static readonly actionGetDeploymentJobDetails = "a2c:GetDeploymentJobDetails";
	/** [Write] a2c:StartContainerizationJob */
	static readonly StartContainerizationJob = "a2c:StartContainerizationJob";
	/** [Write] a2c:StartDeploymentJob */
	static readonly StartDeploymentJob = "a2c:StartDeploymentJob";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		A2cActions.actionGetContainerizationJobDetails,
		A2cActions.actionGetDeploymentJobDetails,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		A2cActions.StartContainerizationJob,
		A2cActions.StartDeploymentJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
