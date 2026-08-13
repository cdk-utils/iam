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
	static readonly GET_CONTAINERIZATION_JOB_DETAILS =
		"a2c:GetContainerizationJobDetails";
	/** [Read] a2c:GetDeploymentJobDetails */
	static readonly GET_DEPLOYMENT_JOB_DETAILS = "a2c:GetDeploymentJobDetails";
	/** [Write] a2c:StartContainerizationJob */
	static readonly START_CONTAINERIZATION_JOB = "a2c:StartContainerizationJob";
	/** [Write] a2c:StartDeploymentJob */
	static readonly START_DEPLOYMENT_JOB = "a2c:StartDeploymentJob";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		A2cActions.GET_CONTAINERIZATION_JOB_DETAILS,
		A2cActions.GET_DEPLOYMENT_JOB_DETAILS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		A2cActions.START_CONTAINERIZATION_JOB,
		A2cActions.START_DEPLOYMENT_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
