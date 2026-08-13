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
	static readonly CREATE_FORM = "activate:CreateForm";
	/** [Read] activate:GetAccountContact */
	static readonly GET_ACCOUNT_CONTACT = "activate:GetAccountContact";
	/** [Read] activate:GetContentInfo */
	static readonly GET_CONTENT_INFO = "activate:GetContentInfo";
	/** [Read] activate:GetCosts */
	static readonly GET_COSTS = "activate:GetCosts";
	/** [Read] activate:GetCredits */
	static readonly GET_CREDITS = "activate:GetCredits";
	/** [Read] activate:GetMemberInfo */
	static readonly GET_MEMBER_INFO = "activate:GetMemberInfo";
	/** [Read] activate:GetProgram */
	static readonly GET_PROGRAM = "activate:GetProgram";
	/** [Write] activate:PutMemberInfo */
	static readonly PUT_MEMBER_INFO = "activate:PutMemberInfo";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ActivateActions.GET_ACCOUNT_CONTACT,
		ActivateActions.GET_CONTENT_INFO,
		ActivateActions.GET_COSTS,
		ActivateActions.GET_CREDITS,
		ActivateActions.GET_MEMBER_INFO,
		ActivateActions.GET_PROGRAM,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ActivateActions.CREATE_FORM,
		ActivateActions.PUT_MEMBER_INFO,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
