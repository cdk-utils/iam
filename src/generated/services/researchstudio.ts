// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/researchstudio.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the researchstudio service.
 */
export class ResearchstudioActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "researchstudio";

	/** [Write] researchstudio:AssignPrincipal */
	static readonly ASSIGN_PRINCIPAL = "researchstudio:AssignPrincipal";
	/** [Write] researchstudio:CreateApplication */
	static readonly CREATE_APPLICATION = "researchstudio:CreateApplication";
	/** [Write] researchstudio:DeleteApplication */
	static readonly DELETE_APPLICATION = "researchstudio:DeleteApplication";
	/** [Write] researchstudio:DeletePrincipal */
	static readonly DELETE_PRINCIPAL = "researchstudio:DeletePrincipal";
	/** [Read] researchstudio:GetApplication */
	static readonly GET_APPLICATION = "researchstudio:GetApplication";
	/** [List] researchstudio:ListApplications */
	static readonly LIST_APPLICATIONS = "researchstudio:ListApplications";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ResearchstudioActions.GET_APPLICATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ResearchstudioActions.ASSIGN_PRINCIPAL,
		ResearchstudioActions.CREATE_APPLICATION,
		ResearchstudioActions.DELETE_APPLICATION,
		ResearchstudioActions.DELETE_PRINCIPAL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ResearchstudioActions.LIST_APPLICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
