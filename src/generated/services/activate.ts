// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/activate.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the activate service.
 */
export class ActivateActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "activate";

	/** [Write] activate:CreateForm */
	static readonly CreateForm = "activate:CreateForm";
	/** [Read] activate:GetAccountContact */
	static readonly actionGetAccountContact = "activate:GetAccountContact";
	/** [Read] activate:GetContentInfo */
	static readonly actionGetContentInfo = "activate:GetContentInfo";
	/** [Read] activate:GetCosts */
	static readonly actionGetCosts = "activate:GetCosts";
	/** [Read] activate:GetCredits */
	static readonly actionGetCredits = "activate:GetCredits";
	/** [Read] activate:GetMemberInfo */
	static readonly actionGetMemberInfo = "activate:GetMemberInfo";
	/** [Read] activate:GetProgram */
	static readonly actionGetProgram = "activate:GetProgram";
	/** [Write] activate:PutMemberInfo */
	static readonly PutMemberInfo = "activate:PutMemberInfo";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ActivateActions.actionGetAccountContact,
		ActivateActions.actionGetContentInfo,
		ActivateActions.actionGetCosts,
		ActivateActions.actionGetCredits,
		ActivateActions.actionGetMemberInfo,
		ActivateActions.actionGetProgram,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ActivateActions.CreateForm,
		ActivateActions.PutMemberInfo,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
