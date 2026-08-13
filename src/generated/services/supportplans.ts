// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/supportplans.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the supportplans service.
 */
export class SupportplansActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "supportplans";

	/** [Write] supportplans:AcceptSupportAgreement */
	static readonly ACCEPT_SUPPORT_AGREEMENT =
		"supportplans:AcceptSupportAgreement";
	/** [Write] supportplans:CancelSupportAgreement */
	static readonly CANCEL_SUPPORT_AGREEMENT =
		"supportplans:CancelSupportAgreement";
	/** [Write] supportplans:CreateSupportAgreement */
	static readonly CREATE_SUPPORT_AGREEMENT =
		"supportplans:CreateSupportAgreement";
	/** [Write] supportplans:CreateSupportPlanSchedule */
	static readonly CREATE_SUPPORT_PLAN_SCHEDULE =
		"supportplans:CreateSupportPlanSchedule";
	/** [Read] supportplans:GetSupportAgreement */
	static readonly GET_SUPPORT_AGREEMENT = "supportplans:GetSupportAgreement";
	/** [Read] supportplans:GetSupportPlan */
	static readonly GET_SUPPORT_PLAN = "supportplans:GetSupportPlan";
	/** [Read] supportplans:GetSupportPlanUpdateStatus */
	static readonly GET_SUPPORT_PLAN_UPDATE_STATUS =
		"supportplans:GetSupportPlanUpdateStatus";
	/** [List] supportplans:ListSupportAgreementRevisions */
	static readonly LIST_SUPPORT_AGREEMENT_REVISIONS =
		"supportplans:ListSupportAgreementRevisions";
	/** [List] supportplans:ListSupportAgreements */
	static readonly LIST_SUPPORT_AGREEMENTS =
		"supportplans:ListSupportAgreements";
	/** [List] supportplans:ListSupportPlanModifiers */
	static readonly LIST_SUPPORT_PLAN_MODIFIERS =
		"supportplans:ListSupportPlanModifiers";
	/** [Write] supportplans:RejectSupportAgreement */
	static readonly REJECT_SUPPORT_AGREEMENT =
		"supportplans:RejectSupportAgreement";
	/** [Write] supportplans:StartSupportPlanUpdate */
	static readonly START_SUPPORT_PLAN_UPDATE =
		"supportplans:StartSupportPlanUpdate";
	/** [Write] supportplans:UpdateSupportAgreement */
	static readonly UPDATE_SUPPORT_AGREEMENT =
		"supportplans:UpdateSupportAgreement";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SupportplansActions.GET_SUPPORT_AGREEMENT,
		SupportplansActions.GET_SUPPORT_PLAN,
		SupportplansActions.GET_SUPPORT_PLAN_UPDATE_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SupportplansActions.ACCEPT_SUPPORT_AGREEMENT,
		SupportplansActions.CANCEL_SUPPORT_AGREEMENT,
		SupportplansActions.CREATE_SUPPORT_AGREEMENT,
		SupportplansActions.CREATE_SUPPORT_PLAN_SCHEDULE,
		SupportplansActions.REJECT_SUPPORT_AGREEMENT,
		SupportplansActions.START_SUPPORT_PLAN_UPDATE,
		SupportplansActions.UPDATE_SUPPORT_AGREEMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SupportplansActions.LIST_SUPPORT_AGREEMENT_REVISIONS,
		SupportplansActions.LIST_SUPPORT_AGREEMENTS,
		SupportplansActions.LIST_SUPPORT_PLAN_MODIFIERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
