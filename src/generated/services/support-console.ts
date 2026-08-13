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
	static readonly CHECK_SUBSCRIPTION = "support-console:CheckSubscription";
	/** [Write] support-console:CreateCaseDraft */
	static readonly CREATE_CASE_DRAFT = "support-console:CreateCaseDraft";
	/** [Write] support-console:CreateContact */
	static readonly CREATE_CONTACT = "support-console:CreateContact";
	/** [Write] support-console:DeleteCaseDraft */
	static readonly DELETE_CASE_DRAFT = "support-console:DeleteCaseDraft";
	/** [Read] support-console:DescribeDynamicHelp */
	static readonly DESCRIBE_DYNAMIC_HELP = "support-console:DescribeDynamicHelp";
	/** [Read] support-console:GetAccountGovCloudEnabled */
	static readonly GET_ACCOUNT_GOV_CLOUD_ENABLED =
		"support-console:GetAccountGovCloudEnabled";
	/** [Read] support-console:GetAccountState */
	static readonly GET_ACCOUNT_STATE = "support-console:GetAccountState";
	/** [Read] support-console:GetBanner */
	static readonly GET_BANNER = "support-console:GetBanner";
	/** [Read] support-console:GetCaseDraft */
	static readonly GET_CASE_DRAFT = "support-console:GetCaseDraft";
	/** [Read] support-console:GetIssueClassificationPredictions */
	static readonly GET_ISSUE_CLASSIFICATION_PREDICTIONS =
		"support-console:GetIssueClassificationPredictions";
	/** [Read] support-console:GetIssueTextSummary */
	static readonly GET_ISSUE_TEXT_SUMMARY =
		"support-console:GetIssueTextSummary";
	/** [Read] support-console:GetQuestionnaire */
	static readonly GET_QUESTIONNAIRE = "support-console:GetQuestionnaire";
	/** [Write] support-console:SaveFeedback */
	static readonly SAVE_FEEDBACK = "support-console:SaveFeedback";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SupportConsoleActions.CHECK_SUBSCRIPTION,
		SupportConsoleActions.DESCRIBE_DYNAMIC_HELP,
		SupportConsoleActions.GET_ACCOUNT_GOV_CLOUD_ENABLED,
		SupportConsoleActions.GET_ACCOUNT_STATE,
		SupportConsoleActions.GET_BANNER,
		SupportConsoleActions.GET_CASE_DRAFT,
		SupportConsoleActions.GET_ISSUE_CLASSIFICATION_PREDICTIONS,
		SupportConsoleActions.GET_ISSUE_TEXT_SUMMARY,
		SupportConsoleActions.GET_QUESTIONNAIRE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SupportConsoleActions.CREATE_CASE_DRAFT,
		SupportConsoleActions.CREATE_CONTACT,
		SupportConsoleActions.DELETE_CASE_DRAFT,
		SupportConsoleActions.SAVE_FEEDBACK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
