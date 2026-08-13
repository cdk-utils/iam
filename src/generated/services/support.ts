// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/support.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the support service.
 */
export class SupportActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "support";

	/** [Write] support:AddAttachmentsToSet */
	static readonly ADD_ATTACHMENTS_TO_SET = "support:AddAttachmentsToSet";
	/** [Write] support:AddCommunicationToCase */
	static readonly ADD_COMMUNICATION_TO_CASE = "support:AddCommunicationToCase";
	/** [Write] support:CreateCase */
	static readonly CREATE_CASE = "support:CreateCase";
	/** [Read] support:DescribeAttachment */
	static readonly DESCRIBE_ATTACHMENT = "support:DescribeAttachment";
	/** [Read] support:DescribeCaseAttributes */
	static readonly DESCRIBE_CASE_ATTRIBUTES = "support:DescribeCaseAttributes";
	/** [Read] support:DescribeCaseOptions */
	static readonly DESCRIBE_CASE_OPTIONS = "support:DescribeCaseOptions";
	/** [Read] support:DescribeCases */
	static readonly DESCRIBE_CASES = "support:DescribeCases";
	/** [Read] support:DescribeCommunication */
	static readonly DESCRIBE_COMMUNICATION = "support:DescribeCommunication";
	/** [Read] support:DescribeCommunications */
	static readonly DESCRIBE_COMMUNICATIONS = "support:DescribeCommunications";
	/** [Read] support:DescribeCreateCaseOptions */
	static readonly DESCRIBE_CREATE_CASE_OPTIONS =
		"support:DescribeCreateCaseOptions";
	/** [Read] support:DescribeIssueTypes */
	static readonly DESCRIBE_ISSUE_TYPES = "support:DescribeIssueTypes";
	/** [Read] support:DescribeServices */
	static readonly DESCRIBE_SERVICES = "support:DescribeServices";
	/** [Read] support:DescribeSeverityLevels */
	static readonly DESCRIBE_SEVERITY_LEVELS = "support:DescribeSeverityLevels";
	/** [Read] support:DescribeSupportLevel */
	static readonly DESCRIBE_SUPPORT_LEVEL = "support:DescribeSupportLevel";
	/** [Read] support:DescribeSupportedLanguages */
	static readonly DESCRIBE_SUPPORTED_LANGUAGES =
		"support:DescribeSupportedLanguages";
	/** [Read] support:DescribeTrustedAdvisorCheckRefreshStatuses */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES =
		"support:DescribeTrustedAdvisorCheckRefreshStatuses";
	/** [Read] support:DescribeTrustedAdvisorCheckResult */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_RESULT =
		"support:DescribeTrustedAdvisorCheckResult";
	/** [Read] support:DescribeTrustedAdvisorCheckSummaries */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_SUMMARIES =
		"support:DescribeTrustedAdvisorCheckSummaries";
	/** [Read] support:DescribeTrustedAdvisorChecks */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECKS =
		"support:DescribeTrustedAdvisorChecks";
	/** [Read] support:GetInteraction */
	static readonly GET_INTERACTION = "support:GetInteraction";
	/** [Write] support:InitiateCallForCase */
	static readonly INITIATE_CALL_FOR_CASE = "support:InitiateCallForCase";
	/** [Write] support:InitiateChatForCase */
	static readonly INITIATE_CHAT_FOR_CASE = "support:InitiateChatForCase";
	/** [Write] support:InitiateLiveContactForCase */
	static readonly INITIATE_LIVE_CONTACT_FOR_CASE =
		"support:InitiateLiveContactForCase";
	/** [Read] support:ListInteractionEntries */
	static readonly LIST_INTERACTION_ENTRIES = "support:ListInteractionEntries";
	/** [Read] support:ListInteractions */
	static readonly LIST_INTERACTIONS = "support:ListInteractions";
	/** [Write] support:PutCaseAttributes */
	static readonly PUT_CASE_ATTRIBUTES = "support:PutCaseAttributes";
	/** [Write] support:RateCaseCommunication */
	static readonly RATE_CASE_COMMUNICATION = "support:RateCaseCommunication";
	/** [Write] support:RefreshTrustedAdvisorCheck */
	static readonly REFRESH_TRUSTED_ADVISOR_CHECK =
		"support:RefreshTrustedAdvisorCheck";
	/** [Write] support:ResolveCase */
	static readonly RESOLVE_CASE = "support:ResolveCase";
	/** [Write] support:ResolveInteraction */
	static readonly RESOLVE_INTERACTION = "support:ResolveInteraction";
	/** [Read] support:SearchForCases */
	static readonly SEARCH_FOR_CASES = "support:SearchForCases";
	/** [Write] support:StartInteraction */
	static readonly START_INTERACTION = "support:StartInteraction";
	/** [Write] support:UpdateCaseSeverity */
	static readonly UPDATE_CASE_SEVERITY = "support:UpdateCaseSeverity";
	/** [Write] support:UpdateInteraction */
	static readonly UPDATE_INTERACTION = "support:UpdateInteraction";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SupportActions.DESCRIBE_ATTACHMENT,
		SupportActions.DESCRIBE_CASE_ATTRIBUTES,
		SupportActions.DESCRIBE_CASE_OPTIONS,
		SupportActions.DESCRIBE_CASES,
		SupportActions.DESCRIBE_COMMUNICATION,
		SupportActions.DESCRIBE_COMMUNICATIONS,
		SupportActions.DESCRIBE_CREATE_CASE_OPTIONS,
		SupportActions.DESCRIBE_ISSUE_TYPES,
		SupportActions.DESCRIBE_SERVICES,
		SupportActions.DESCRIBE_SEVERITY_LEVELS,
		SupportActions.DESCRIBE_SUPPORT_LEVEL,
		SupportActions.DESCRIBE_SUPPORTED_LANGUAGES,
		SupportActions.DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES,
		SupportActions.DESCRIBE_TRUSTED_ADVISOR_CHECK_RESULT,
		SupportActions.DESCRIBE_TRUSTED_ADVISOR_CHECK_SUMMARIES,
		SupportActions.DESCRIBE_TRUSTED_ADVISOR_CHECKS,
		SupportActions.GET_INTERACTION,
		SupportActions.LIST_INTERACTION_ENTRIES,
		SupportActions.LIST_INTERACTIONS,
		SupportActions.SEARCH_FOR_CASES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SupportActions.ADD_ATTACHMENTS_TO_SET,
		SupportActions.ADD_COMMUNICATION_TO_CASE,
		SupportActions.CREATE_CASE,
		SupportActions.INITIATE_CALL_FOR_CASE,
		SupportActions.INITIATE_CHAT_FOR_CASE,
		SupportActions.INITIATE_LIVE_CONTACT_FOR_CASE,
		SupportActions.PUT_CASE_ATTRIBUTES,
		SupportActions.RATE_CASE_COMMUNICATION,
		SupportActions.REFRESH_TRUSTED_ADVISOR_CHECK,
		SupportActions.RESOLVE_CASE,
		SupportActions.RESOLVE_INTERACTION,
		SupportActions.START_INTERACTION,
		SupportActions.UPDATE_CASE_SEVERITY,
		SupportActions.UPDATE_INTERACTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for support.
 */
export class SupportOperations {
	/** IAM actions required for the AddAttachmentsToSet API call. */
	static readonly ADD_ATTACHMENTS_TO_SET: string[] = [
		"support:AddAttachmentsToSet",
	];
	/** IAM actions required for the AddCommunicationToCase API call. */
	static readonly ADD_COMMUNICATION_TO_CASE: string[] = [
		"support:AddCommunicationToCase",
	];
	/** IAM actions required for the CreateCase API call. */
	static readonly CREATE_CASE: string[] = ["support:CreateCase"];
	/** IAM actions required for the DescribeAttachment API call. */
	static readonly DESCRIBE_ATTACHMENT: string[] = [
		"support:DescribeAttachment",
	];
	/** IAM actions required for the DescribeCases API call. */
	static readonly DESCRIBE_CASES: string[] = ["support:DescribeCases"];
	/** IAM actions required for the DescribeCommunications API call. */
	static readonly DESCRIBE_COMMUNICATIONS: string[] = [
		"support:DescribeCommunications",
	];
	/** IAM actions required for the DescribeCreateCaseOptions API call. */
	static readonly DESCRIBE_CREATE_CASE_OPTIONS: string[] = [
		"support:DescribeCreateCaseOptions",
	];
	/** IAM actions required for the DescribeServices API call. */
	static readonly DESCRIBE_SERVICES: string[] = ["support:DescribeServices"];
	/** IAM actions required for the DescribeSeverityLevels API call. */
	static readonly DESCRIBE_SEVERITY_LEVELS: string[] = [
		"support:DescribeSeverityLevels",
	];
	/** IAM actions required for the DescribeSupportedLanguages API call. */
	static readonly DESCRIBE_SUPPORTED_LANGUAGES: string[] = [
		"support:DescribeSupportedLanguages",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckRefreshStatuses API call. */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES: string[] = [
		"support:DescribeTrustedAdvisorCheckRefreshStatuses",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckResult API call. */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_RESULT: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationResources",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckSummaries API call. */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECK_SUMMARIES: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:GetRecommendation",
		"trustedadvisor:ListRecommendations",
	];
	/** IAM actions required for the DescribeTrustedAdvisorChecks API call. */
	static readonly DESCRIBE_TRUSTED_ADVISOR_CHECKS: string[] = [
		"trustedadvisor:DescribeChecks",
		"support:DescribeTrustedAdvisorChecks",
		"trustedadvisor:ListChecks",
	];
	/** IAM actions required for the RefreshTrustedAdvisorCheck API call. */
	static readonly REFRESH_TRUSTED_ADVISOR_CHECK: string[] = [
		"support:RefreshTrustedAdvisorCheck",
	];
	/** IAM actions required for the ResolveCase API call. */
	static readonly RESOLVE_CASE: string[] = ["support:ResolveCase"];
}
