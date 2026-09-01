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
	static readonly AddAttachmentsToSet = "support:AddAttachmentsToSet";
	/** [Write] support:AddCommunicationToCase */
	static readonly AddCommunicationToCase = "support:AddCommunicationToCase";
	/** [Write] support:AddRelatedItemToCase */
	static readonly AddRelatedItemToCase = "support:AddRelatedItemToCase";
	/** [Write] support:CreateCase */
	static readonly CreateCase = "support:CreateCase";
	/** [Read] support:DescribeAttachment */
	static readonly DescribeAttachment = "support:DescribeAttachment";
	/** [Read] support:DescribeCaseAttributes */
	static readonly DescribeCaseAttributes = "support:DescribeCaseAttributes";
	/** [Read] support:DescribeCaseOptions */
	static readonly DescribeCaseOptions = "support:DescribeCaseOptions";
	/** [Read] support:DescribeCases */
	static readonly DescribeCases = "support:DescribeCases";
	/** [Read] support:DescribeCommunication */
	static readonly DescribeCommunication = "support:DescribeCommunication";
	/** [Read] support:DescribeCommunications */
	static readonly DescribeCommunications = "support:DescribeCommunications";
	/** [Read] support:DescribeCreateCaseOptions */
	static readonly DescribeCreateCaseOptions =
		"support:DescribeCreateCaseOptions";
	/** [Read] support:DescribeIssueTypes */
	static readonly DescribeIssueTypes = "support:DescribeIssueTypes";
	/** [Read] support:DescribeRelatedItems */
	static readonly DescribeRelatedItems = "support:DescribeRelatedItems";
	/** [Read] support:DescribeServices */
	static readonly DescribeServices = "support:DescribeServices";
	/** [Read] support:DescribeSeverityLevels */
	static readonly DescribeSeverityLevels = "support:DescribeSeverityLevels";
	/** [Read] support:DescribeSupportLevel */
	static readonly DescribeSupportLevel = "support:DescribeSupportLevel";
	/** [Read] support:DescribeSupportedLanguages */
	static readonly DescribeSupportedLanguages =
		"support:DescribeSupportedLanguages";
	/** [Read] support:DescribeTrustedAdvisorCheckRefreshStatuses */
	static readonly DescribeTrustedAdvisorCheckRefreshStatuses =
		"support:DescribeTrustedAdvisorCheckRefreshStatuses";
	/** [Read] support:DescribeTrustedAdvisorCheckResult */
	static readonly DescribeTrustedAdvisorCheckResult =
		"support:DescribeTrustedAdvisorCheckResult";
	/** [Read] support:DescribeTrustedAdvisorCheckSummaries */
	static readonly DescribeTrustedAdvisorCheckSummaries =
		"support:DescribeTrustedAdvisorCheckSummaries";
	/** [Read] support:DescribeTrustedAdvisorChecks */
	static readonly DescribeTrustedAdvisorChecks =
		"support:DescribeTrustedAdvisorChecks";
	/** [Write] support:DisconnectLiveContactForCase */
	static readonly DisconnectLiveContactForCase =
		"support:DisconnectLiveContactForCase";
	/** [Read] support:DownloadAttachment */
	static readonly DownloadAttachment = "support:DownloadAttachment";
	/** [Read] support:GetInteraction */
	static readonly actionGetInteraction = "support:GetInteraction";
	/** [Write] support:InitiateCallForCase */
	static readonly InitiateCallForCase = "support:InitiateCallForCase";
	/** [Write] support:InitiateChatForCase */
	static readonly InitiateChatForCase = "support:InitiateChatForCase";
	/** [Write] support:InitiateLiveContactForCase */
	static readonly InitiateLiveContactForCase =
		"support:InitiateLiveContactForCase";
	/** [Read] support:ListInteractionEntries */
	static readonly ListInteractionEntries = "support:ListInteractionEntries";
	/** [Read] support:ListInteractions */
	static readonly ListInteractions = "support:ListInteractions";
	/** [Write] support:PutCaseAttributes */
	static readonly PutCaseAttributes = "support:PutCaseAttributes";
	/** [Write] support:RateCaseCommunication */
	static readonly RateCaseCommunication = "support:RateCaseCommunication";
	/** [Write] support:RefreshTrustedAdvisorCheck */
	static readonly RefreshTrustedAdvisorCheck =
		"support:RefreshTrustedAdvisorCheck";
	/** [Write] support:ResolveCase */
	static readonly ResolveCase = "support:ResolveCase";
	/** [Write] support:ResolveInteraction */
	static readonly ResolveInteraction = "support:ResolveInteraction";
	/** [Read] support:SearchForCases */
	static readonly SearchForCases = "support:SearchForCases";
	/** [Write] support:StartInteraction */
	static readonly StartInteraction = "support:StartInteraction";
	/** [Write] support:UpdateCaseSeverity */
	static readonly UpdateCaseSeverity = "support:UpdateCaseSeverity";
	/** [Write] support:UpdateInteraction */
	static readonly UpdateInteraction = "support:UpdateInteraction";
	/** [Write] support:UploadAttachment */
	static readonly UploadAttachment = "support:UploadAttachment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SupportActions.DescribeAttachment,
		SupportActions.DescribeCaseAttributes,
		SupportActions.DescribeCaseOptions,
		SupportActions.DescribeCases,
		SupportActions.DescribeCommunication,
		SupportActions.DescribeCommunications,
		SupportActions.DescribeCreateCaseOptions,
		SupportActions.DescribeIssueTypes,
		SupportActions.DescribeRelatedItems,
		SupportActions.DescribeServices,
		SupportActions.DescribeSeverityLevels,
		SupportActions.DescribeSupportLevel,
		SupportActions.DescribeSupportedLanguages,
		SupportActions.DescribeTrustedAdvisorCheckRefreshStatuses,
		SupportActions.DescribeTrustedAdvisorCheckResult,
		SupportActions.DescribeTrustedAdvisorCheckSummaries,
		SupportActions.DescribeTrustedAdvisorChecks,
		SupportActions.DownloadAttachment,
		SupportActions.actionGetInteraction,
		SupportActions.ListInteractionEntries,
		SupportActions.ListInteractions,
		SupportActions.SearchForCases,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SupportActions.AddAttachmentsToSet,
		SupportActions.AddCommunicationToCase,
		SupportActions.AddRelatedItemToCase,
		SupportActions.CreateCase,
		SupportActions.DisconnectLiveContactForCase,
		SupportActions.InitiateCallForCase,
		SupportActions.InitiateChatForCase,
		SupportActions.InitiateLiveContactForCase,
		SupportActions.PutCaseAttributes,
		SupportActions.RateCaseCommunication,
		SupportActions.RefreshTrustedAdvisorCheck,
		SupportActions.ResolveCase,
		SupportActions.ResolveInteraction,
		SupportActions.StartInteraction,
		SupportActions.UpdateCaseSeverity,
		SupportActions.UpdateInteraction,
		SupportActions.UploadAttachment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for support.
 */
export class SupportOperations {
	/** IAM actions required for the AddAttachmentsToSet API call. */
	static readonly AddAttachmentsToSet: string[] = [
		"support:AddAttachmentsToSet",
	];
	/** IAM actions required for the AddCommunicationToCase API call. */
	static readonly AddCommunicationToCase: string[] = [
		"support:AddCommunicationToCase",
	];
	/** IAM actions required for the CompleteAttachmentUpload API call. */
	static readonly CompleteAttachmentUpload: string[] = [
		"support:AddAttachmentsToSet",
		"support:UploadAttachment",
	];
	/** IAM actions required for the CreateCase API call. */
	static readonly CreateCase: string[] = ["support:CreateCase"];
	/** IAM actions required for the DescribeAttachment API call. */
	static readonly DescribeAttachment: string[] = ["support:DescribeAttachment"];
	/** IAM actions required for the DescribeAttachmentUploadStatus API call. */
	static readonly DescribeAttachmentUploadStatus: string[] = [
		"support:AddAttachmentsToSet",
		"support:UploadAttachment",
	];
	/** IAM actions required for the DescribeCases API call. */
	static readonly DescribeCases: string[] = ["support:DescribeCases"];
	/** IAM actions required for the DescribeCommunications API call. */
	static readonly DescribeCommunications: string[] = [
		"support:DescribeCommunications",
	];
	/** IAM actions required for the DescribeCreateCaseOptions API call. */
	static readonly DescribeCreateCaseOptions: string[] = [
		"support:DescribeCreateCaseOptions",
	];
	/** IAM actions required for the DescribeServices API call. */
	static readonly DescribeServices: string[] = ["support:DescribeServices"];
	/** IAM actions required for the DescribeSeverityLevels API call. */
	static readonly DescribeSeverityLevels: string[] = [
		"support:DescribeSeverityLevels",
	];
	/** IAM actions required for the DescribeSupportedLanguages API call. */
	static readonly DescribeSupportedLanguages: string[] = [
		"support:DescribeSupportedLanguages",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckRefreshStatuses API call. */
	static readonly DescribeTrustedAdvisorCheckRefreshStatuses: string[] = [
		"support:DescribeTrustedAdvisorCheckRefreshStatuses",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckResult API call. */
	static readonly DescribeTrustedAdvisorCheckResult: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationResources",
		"trustedadvisor:ListRecommendationsForResource",
	];
	/** IAM actions required for the DescribeTrustedAdvisorCheckSummaries API call. */
	static readonly DescribeTrustedAdvisorCheckSummaries: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:GetRecommendation",
		"trustedadvisor:ListRecommendations",
	];
	/** IAM actions required for the DescribeTrustedAdvisorChecks API call. */
	static readonly DescribeTrustedAdvisorChecks: string[] = [
		"trustedadvisor:DescribeChecks",
		"support:DescribeTrustedAdvisorChecks",
		"trustedadvisor:ListChecks",
	];
	/** IAM actions required for the GetAttachmentDownloadLink API call. */
	static readonly opGetAttachmentDownloadLink: string[] = [
		"support:DescribeAttachment",
		"support:DownloadAttachment",
	];
	/** IAM actions required for the GetAttachmentUploadLinks API call. */
	static readonly opGetAttachmentUploadLinks: string[] = [
		"support:AddAttachmentsToSet",
		"support:UploadAttachment",
	];
	/** IAM actions required for the RefreshTrustedAdvisorCheck API call. */
	static readonly RefreshTrustedAdvisorCheck: string[] = [
		"support:RefreshTrustedAdvisorCheck",
	];
	/** IAM actions required for the ResolveCase API call. */
	static readonly ResolveCase: string[] = ["support:ResolveCase"];
}
