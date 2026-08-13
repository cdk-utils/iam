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
	static readonly AssignPrincipal = "researchstudio:AssignPrincipal";
	/** [Write] researchstudio:CreateApplication */
	static readonly CreateApplication = "researchstudio:CreateApplication";
	/** [Write] researchstudio:DeleteApplication */
	static readonly DeleteApplication = "researchstudio:DeleteApplication";
	/** [Write] researchstudio:DeletePrincipal */
	static readonly DeletePrincipal = "researchstudio:DeletePrincipal";
	/** [Read] researchstudio:GetApplication */
	static readonly actionGetApplication = "researchstudio:GetApplication";
	/** [List] researchstudio:ListApplications */
	static readonly ListApplications = "researchstudio:ListApplications";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ResearchstudioActions.actionGetApplication,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ResearchstudioActions.AssignPrincipal,
		ResearchstudioActions.CreateApplication,
		ResearchstudioActions.DeleteApplication,
		ResearchstudioActions.DeletePrincipal,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ResearchstudioActions.ListApplications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
