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
	static readonly AcceptSupportAgreement =
		"supportplans:AcceptSupportAgreement";
	/** [Write] supportplans:CancelSupportAgreement */
	static readonly CancelSupportAgreement =
		"supportplans:CancelSupportAgreement";
	/** [Write] supportplans:CreateSupportAgreement */
	static readonly CreateSupportAgreement =
		"supportplans:CreateSupportAgreement";
	/** [Write] supportplans:CreateSupportPlanSchedule */
	static readonly CreateSupportPlanSchedule =
		"supportplans:CreateSupportPlanSchedule";
	/** [Read] supportplans:GetSupportAgreement */
	static readonly actionGetSupportAgreement =
		"supportplans:GetSupportAgreement";
	/** [Read] supportplans:GetSupportPlan */
	static readonly actionGetSupportPlan = "supportplans:GetSupportPlan";
	/** [Read] supportplans:GetSupportPlanUpdateStatus */
	static readonly actionGetSupportPlanUpdateStatus =
		"supportplans:GetSupportPlanUpdateStatus";
	/** [List] supportplans:ListSupportAgreementRevisions */
	static readonly ListSupportAgreementRevisions =
		"supportplans:ListSupportAgreementRevisions";
	/** [List] supportplans:ListSupportAgreements */
	static readonly ListSupportAgreements = "supportplans:ListSupportAgreements";
	/** [List] supportplans:ListSupportPlanModifiers */
	static readonly ListSupportPlanModifiers =
		"supportplans:ListSupportPlanModifiers";
	/** [Write] supportplans:RejectSupportAgreement */
	static readonly RejectSupportAgreement =
		"supportplans:RejectSupportAgreement";
	/** [Write] supportplans:StartSupportPlanUpdate */
	static readonly StartSupportPlanUpdate =
		"supportplans:StartSupportPlanUpdate";
	/** [Write] supportplans:UpdateSupportAgreement */
	static readonly UpdateSupportAgreement =
		"supportplans:UpdateSupportAgreement";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SupportplansActions.actionGetSupportAgreement,
		SupportplansActions.actionGetSupportPlan,
		SupportplansActions.actionGetSupportPlanUpdateStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SupportplansActions.AcceptSupportAgreement,
		SupportplansActions.CancelSupportAgreement,
		SupportplansActions.CreateSupportAgreement,
		SupportplansActions.CreateSupportPlanSchedule,
		SupportplansActions.RejectSupportAgreement,
		SupportplansActions.StartSupportPlanUpdate,
		SupportplansActions.UpdateSupportAgreement,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SupportplansActions.ListSupportAgreementRevisions,
		SupportplansActions.ListSupportAgreements,
		SupportplansActions.ListSupportPlanModifiers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
