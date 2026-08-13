// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/support-console.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the support-console service.
 */
export class SupportConsoleActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "support-console";

	/** [Read] support-console:CheckSubscription */
	static readonly CheckSubscription = "support-console:CheckSubscription";
	/** [Write] support-console:CreateCaseDraft */
	static readonly CreateCaseDraft = "support-console:CreateCaseDraft";
	/** [Write] support-console:CreateContact */
	static readonly CreateContact = "support-console:CreateContact";
	/** [Write] support-console:DeleteCaseDraft */
	static readonly DeleteCaseDraft = "support-console:DeleteCaseDraft";
	/** [Read] support-console:DescribeDynamicHelp */
	static readonly DescribeDynamicHelp = "support-console:DescribeDynamicHelp";
	/** [Read] support-console:GetAccountGovCloudEnabled */
	static readonly actionGetAccountGovCloudEnabled =
		"support-console:GetAccountGovCloudEnabled";
	/** [Read] support-console:GetAccountState */
	static readonly actionGetAccountState = "support-console:GetAccountState";
	/** [Read] support-console:GetBanner */
	static readonly actionGetBanner = "support-console:GetBanner";
	/** [Read] support-console:GetCaseDraft */
	static readonly actionGetCaseDraft = "support-console:GetCaseDraft";
	/** [Read] support-console:GetIssueClassificationPredictions */
	static readonly actionGetIssueClassificationPredictions =
		"support-console:GetIssueClassificationPredictions";
	/** [Read] support-console:GetIssueTextSummary */
	static readonly actionGetIssueTextSummary =
		"support-console:GetIssueTextSummary";
	/** [Read] support-console:GetQuestionnaire */
	static readonly actionGetQuestionnaire = "support-console:GetQuestionnaire";
	/** [Write] support-console:SaveFeedback */
	static readonly SaveFeedback = "support-console:SaveFeedback";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SupportConsoleActions.CheckSubscription,
		SupportConsoleActions.DescribeDynamicHelp,
		SupportConsoleActions.actionGetAccountGovCloudEnabled,
		SupportConsoleActions.actionGetAccountState,
		SupportConsoleActions.actionGetBanner,
		SupportConsoleActions.actionGetCaseDraft,
		SupportConsoleActions.actionGetIssueClassificationPredictions,
		SupportConsoleActions.actionGetIssueTextSummary,
		SupportConsoleActions.actionGetQuestionnaire,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SupportConsoleActions.CreateCaseDraft,
		SupportConsoleActions.CreateContact,
		SupportConsoleActions.DeleteCaseDraft,
		SupportConsoleActions.SaveFeedback,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
