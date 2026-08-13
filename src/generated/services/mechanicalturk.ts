// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mechanicalturk.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mechanicalturk service.
 */
export class MechanicalturkActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mechanicalturk";

	/** [Write] mechanicalturk:AcceptQualificationRequest */
	static readonly AcceptQualificationRequest =
		"mechanicalturk:AcceptQualificationRequest";
	/** [Write] mechanicalturk:ApproveAssignment */
	static readonly ApproveAssignment = "mechanicalturk:ApproveAssignment";
	/** [Write] mechanicalturk:AssociateQualificationWithWorker */
	static readonly AssociateQualificationWithWorker =
		"mechanicalturk:AssociateQualificationWithWorker";
	/** [Write] mechanicalturk:CreateAdditionalAssignmentsForHIT */
	static readonly CreateAdditionalAssignmentsForHIT =
		"mechanicalturk:CreateAdditionalAssignmentsForHIT";
	/** [Write] mechanicalturk:CreateHIT */
	static readonly CreateHIT = "mechanicalturk:CreateHIT";
	/** [Write] mechanicalturk:CreateHITType */
	static readonly CreateHITType = "mechanicalturk:CreateHITType";
	/** [Write] mechanicalturk:CreateHITWithHITType */
	static readonly CreateHITWithHITType = "mechanicalturk:CreateHITWithHITType";
	/** [Write] mechanicalturk:CreateQualificationType */
	static readonly CreateQualificationType =
		"mechanicalturk:CreateQualificationType";
	/** [Write] mechanicalturk:CreateWorkerBlock */
	static readonly CreateWorkerBlock = "mechanicalturk:CreateWorkerBlock";
	/** [Write] mechanicalturk:DeleteHIT */
	static readonly DeleteHIT = "mechanicalturk:DeleteHIT";
	/** [Write] mechanicalturk:DeleteQualificationType */
	static readonly DeleteQualificationType =
		"mechanicalturk:DeleteQualificationType";
	/** [Write] mechanicalturk:DeleteWorkerBlock */
	static readonly DeleteWorkerBlock = "mechanicalturk:DeleteWorkerBlock";
	/** [Write] mechanicalturk:DisassociateQualificationFromWorker */
	static readonly DisassociateQualificationFromWorker =
		"mechanicalturk:DisassociateQualificationFromWorker";
	/** [Read] mechanicalturk:GetAccountBalance */
	static readonly actionGetAccountBalance = "mechanicalturk:GetAccountBalance";
	/** [Read] mechanicalturk:GetAssignment */
	static readonly actionGetAssignment = "mechanicalturk:GetAssignment";
	/** [Read] mechanicalturk:GetFileUploadURL */
	static readonly actionGetFileUploadURL = "mechanicalturk:GetFileUploadURL";
	/** [Read] mechanicalturk:GetHIT */
	static readonly actionGetHIT = "mechanicalturk:GetHIT";
	/** [Read] mechanicalturk:GetQualificationScore */
	static readonly actionGetQualificationScore =
		"mechanicalturk:GetQualificationScore";
	/** [Read] mechanicalturk:GetQualificationType */
	static readonly actionGetQualificationType =
		"mechanicalturk:GetQualificationType";
	/** [List] mechanicalturk:ListAssignmentsForHIT */
	static readonly ListAssignmentsForHIT =
		"mechanicalturk:ListAssignmentsForHIT";
	/** [List] mechanicalturk:ListBonusPayments */
	static readonly ListBonusPayments = "mechanicalturk:ListBonusPayments";
	/** [List] mechanicalturk:ListHITs */
	static readonly ListHITs = "mechanicalturk:ListHITs";
	/** [List] mechanicalturk:ListHITsForQualificationType */
	static readonly ListHITsForQualificationType =
		"mechanicalturk:ListHITsForQualificationType";
	/** [List] mechanicalturk:ListQualificationRequests */
	static readonly ListQualificationRequests =
		"mechanicalturk:ListQualificationRequests";
	/** [List] mechanicalturk:ListQualificationTypes */
	static readonly ListQualificationTypes =
		"mechanicalturk:ListQualificationTypes";
	/** [List] mechanicalturk:ListReviewPolicyResultsForHIT */
	static readonly ListReviewPolicyResultsForHIT =
		"mechanicalturk:ListReviewPolicyResultsForHIT";
	/** [List] mechanicalturk:ListReviewableHITs */
	static readonly ListReviewableHITs = "mechanicalturk:ListReviewableHITs";
	/** [List] mechanicalturk:ListWorkerBlocks */
	static readonly ListWorkerBlocks = "mechanicalturk:ListWorkerBlocks";
	/** [List] mechanicalturk:ListWorkersWithQualificationType */
	static readonly ListWorkersWithQualificationType =
		"mechanicalturk:ListWorkersWithQualificationType";
	/** [Write] mechanicalturk:NotifyWorkers */
	static readonly NotifyWorkers = "mechanicalturk:NotifyWorkers";
	/** [Write] mechanicalturk:RejectAssignment */
	static readonly RejectAssignment = "mechanicalturk:RejectAssignment";
	/** [Write] mechanicalturk:RejectQualificationRequest */
	static readonly RejectQualificationRequest =
		"mechanicalturk:RejectQualificationRequest";
	/** [Write] mechanicalturk:SendBonus */
	static readonly SendBonus = "mechanicalturk:SendBonus";
	/** [Write] mechanicalturk:SendTestEventNotification */
	static readonly SendTestEventNotification =
		"mechanicalturk:SendTestEventNotification";
	/** [Write] mechanicalturk:UpdateExpirationForHIT */
	static readonly UpdateExpirationForHIT =
		"mechanicalturk:UpdateExpirationForHIT";
	/** [Write] mechanicalturk:UpdateHITReviewStatus */
	static readonly UpdateHITReviewStatus =
		"mechanicalturk:UpdateHITReviewStatus";
	/** [Write] mechanicalturk:UpdateHITTypeOfHIT */
	static readonly UpdateHITTypeOfHIT = "mechanicalturk:UpdateHITTypeOfHIT";
	/** [Write] mechanicalturk:UpdateNotificationSettings */
	static readonly UpdateNotificationSettings =
		"mechanicalturk:UpdateNotificationSettings";
	/** [Write] mechanicalturk:UpdateQualificationType */
	static readonly UpdateQualificationType =
		"mechanicalturk:UpdateQualificationType";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MechanicalturkActions.actionGetAccountBalance,
		MechanicalturkActions.actionGetAssignment,
		MechanicalturkActions.actionGetFileUploadURL,
		MechanicalturkActions.actionGetHIT,
		MechanicalturkActions.actionGetQualificationScore,
		MechanicalturkActions.actionGetQualificationType,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MechanicalturkActions.AcceptQualificationRequest,
		MechanicalturkActions.ApproveAssignment,
		MechanicalturkActions.AssociateQualificationWithWorker,
		MechanicalturkActions.CreateAdditionalAssignmentsForHIT,
		MechanicalturkActions.CreateHIT,
		MechanicalturkActions.CreateHITType,
		MechanicalturkActions.CreateHITWithHITType,
		MechanicalturkActions.CreateQualificationType,
		MechanicalturkActions.CreateWorkerBlock,
		MechanicalturkActions.DeleteHIT,
		MechanicalturkActions.DeleteQualificationType,
		MechanicalturkActions.DeleteWorkerBlock,
		MechanicalturkActions.DisassociateQualificationFromWorker,
		MechanicalturkActions.NotifyWorkers,
		MechanicalturkActions.RejectAssignment,
		MechanicalturkActions.RejectQualificationRequest,
		MechanicalturkActions.SendBonus,
		MechanicalturkActions.SendTestEventNotification,
		MechanicalturkActions.UpdateExpirationForHIT,
		MechanicalturkActions.UpdateHITReviewStatus,
		MechanicalturkActions.UpdateHITTypeOfHIT,
		MechanicalturkActions.UpdateNotificationSettings,
		MechanicalturkActions.UpdateQualificationType,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MechanicalturkActions.ListAssignmentsForHIT,
		MechanicalturkActions.ListBonusPayments,
		MechanicalturkActions.ListHITs,
		MechanicalturkActions.ListHITsForQualificationType,
		MechanicalturkActions.ListQualificationRequests,
		MechanicalturkActions.ListQualificationTypes,
		MechanicalturkActions.ListReviewPolicyResultsForHIT,
		MechanicalturkActions.ListReviewableHITs,
		MechanicalturkActions.ListWorkerBlocks,
		MechanicalturkActions.ListWorkersWithQualificationType,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for mechanicalturk.
 */
export class MechanicalturkOperations {
	/** IAM actions required for the AcceptQualificationRequest API call. */
	static readonly AcceptQualificationRequest: string[] = [
		"mechanicalturk:AcceptQualificationRequest",
	];
	/** IAM actions required for the ApproveAssignment API call. */
	static readonly ApproveAssignment: string[] = [
		"mechanicalturk:ApproveAssignment",
	];
	/** IAM actions required for the AssociateQualificationWithWorker API call. */
	static readonly AssociateQualificationWithWorker: string[] = [
		"mechanicalturk:AssociateQualificationWithWorker",
	];
	/** IAM actions required for the CreateAdditionalAssignmentsForHIT API call. */
	static readonly CreateAdditionalAssignmentsForHIT: string[] = [
		"mechanicalturk:CreateAdditionalAssignmentsForHIT",
	];
	/** IAM actions required for the CreateHIT API call. */
	static readonly CreateHIT: string[] = ["mechanicalturk:CreateHIT"];
	/** IAM actions required for the CreateHITType API call. */
	static readonly CreateHITType: string[] = ["mechanicalturk:CreateHITType"];
	/** IAM actions required for the CreateHITWithHITType API call. */
	static readonly CreateHITWithHITType: string[] = [
		"mechanicalturk:CreateHITWithHITType",
	];
	/** IAM actions required for the CreateQualificationType API call. */
	static readonly CreateQualificationType: string[] = [
		"mechanicalturk:CreateQualificationType",
	];
	/** IAM actions required for the CreateWorkerBlock API call. */
	static readonly CreateWorkerBlock: string[] = [
		"mechanicalturk:CreateWorkerBlock",
	];
	/** IAM actions required for the DeleteHIT API call. */
	static readonly DeleteHIT: string[] = ["mechanicalturk:DeleteHIT"];
	/** IAM actions required for the DeleteQualificationType API call. */
	static readonly DeleteQualificationType: string[] = [
		"mechanicalturk:DeleteQualificationType",
	];
	/** IAM actions required for the DeleteWorkerBlock API call. */
	static readonly DeleteWorkerBlock: string[] = [
		"mechanicalturk:DeleteWorkerBlock",
	];
	/** IAM actions required for the DisassociateQualificationFromWorker API call. */
	static readonly DisassociateQualificationFromWorker: string[] = [
		"mechanicalturk:DisassociateQualificationFromWorker",
	];
	/** IAM actions required for the GetAccountBalance API call. */
	static readonly opGetAccountBalance: string[] = [
		"mechanicalturk:GetAccountBalance",
	];
	/** IAM actions required for the GetAssignment API call. */
	static readonly opGetAssignment: string[] = ["mechanicalturk:GetAssignment"];
	/** IAM actions required for the GetFileUploadURL API call. */
	static readonly opGetFileUploadURL: string[] = [
		"mechanicalturk:GetFileUploadURL",
	];
	/** IAM actions required for the GetHIT API call. */
	static readonly opGetHIT: string[] = ["mechanicalturk:GetHIT"];
	/** IAM actions required for the GetQualificationScore API call. */
	static readonly opGetQualificationScore: string[] = [
		"mechanicalturk:GetQualificationScore",
	];
	/** IAM actions required for the GetQualificationType API call. */
	static readonly opGetQualificationType: string[] = [
		"mechanicalturk:GetQualificationType",
	];
	/** IAM actions required for the ListAssignmentsForHIT API call. */
	static readonly ListAssignmentsForHIT: string[] = [
		"mechanicalturk:ListAssignmentsForHIT",
	];
	/** IAM actions required for the ListBonusPayments API call. */
	static readonly ListBonusPayments: string[] = [
		"mechanicalturk:ListBonusPayments",
	];
	/** IAM actions required for the ListHITs API call. */
	static readonly ListHITs: string[] = ["mechanicalturk:ListHITs"];
	/** IAM actions required for the ListHITsForQualificationType API call. */
	static readonly ListHITsForQualificationType: string[] = [
		"mechanicalturk:ListHITsForQualificationType",
	];
	/** IAM actions required for the ListQualificationRequests API call. */
	static readonly ListQualificationRequests: string[] = [
		"mechanicalturk:ListQualificationRequests",
	];
	/** IAM actions required for the ListQualificationTypes API call. */
	static readonly ListQualificationTypes: string[] = [
		"mechanicalturk:ListQualificationTypes",
	];
	/** IAM actions required for the ListReviewPolicyResultsForHIT API call. */
	static readonly ListReviewPolicyResultsForHIT: string[] = [
		"mechanicalturk:ListReviewPolicyResultsForHIT",
	];
	/** IAM actions required for the ListReviewableHITs API call. */
	static readonly ListReviewableHITs: string[] = [
		"mechanicalturk:ListReviewableHITs",
	];
	/** IAM actions required for the ListWorkerBlocks API call. */
	static readonly ListWorkerBlocks: string[] = [
		"mechanicalturk:ListWorkerBlocks",
	];
	/** IAM actions required for the ListWorkersWithQualificationType API call. */
	static readonly ListWorkersWithQualificationType: string[] = [
		"mechanicalturk:ListWorkersWithQualificationType",
	];
	/** IAM actions required for the NotifyWorkers API call. */
	static readonly NotifyWorkers: string[] = ["mechanicalturk:NotifyWorkers"];
	/** IAM actions required for the RejectAssignment API call. */
	static readonly RejectAssignment: string[] = [
		"mechanicalturk:RejectAssignment",
	];
	/** IAM actions required for the RejectQualificationRequest API call. */
	static readonly RejectQualificationRequest: string[] = [
		"mechanicalturk:RejectQualificationRequest",
	];
	/** IAM actions required for the SendBonus API call. */
	static readonly SendBonus: string[] = ["mechanicalturk:SendBonus"];
	/** IAM actions required for the SendTestEventNotification API call. */
	static readonly SendTestEventNotification: string[] = [
		"mechanicalturk:SendTestEventNotification",
	];
	/** IAM actions required for the UpdateExpirationForHIT API call. */
	static readonly UpdateExpirationForHIT: string[] = [
		"mechanicalturk:UpdateExpirationForHIT",
	];
	/** IAM actions required for the UpdateHITReviewStatus API call. */
	static readonly UpdateHITReviewStatus: string[] = [
		"mechanicalturk:UpdateHITReviewStatus",
	];
	/** IAM actions required for the UpdateHITTypeOfHIT API call. */
	static readonly UpdateHITTypeOfHIT: string[] = [
		"mechanicalturk:UpdateHITTypeOfHIT",
	];
	/** IAM actions required for the UpdateNotificationSettings API call. */
	static readonly UpdateNotificationSettings: string[] = [
		"mechanicalturk:UpdateNotificationSettings",
	];
	/** IAM actions required for the UpdateQualificationType API call. */
	static readonly UpdateQualificationType: string[] = [
		"mechanicalturk:UpdateQualificationType",
	];
}
