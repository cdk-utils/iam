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
	static readonly ACCEPT_QUALIFICATION_REQUEST =
		"mechanicalturk:AcceptQualificationRequest";
	/** [Write] mechanicalturk:ApproveAssignment */
	static readonly APPROVE_ASSIGNMENT = "mechanicalturk:ApproveAssignment";
	/** [Write] mechanicalturk:AssociateQualificationWithWorker */
	static readonly ASSOCIATE_QUALIFICATION_WITH_WORKER =
		"mechanicalturk:AssociateQualificationWithWorker";
	/** [Write] mechanicalturk:CreateAdditionalAssignmentsForHIT */
	static readonly CREATE_ADDITIONAL_ASSIGNMENTS_FOR_HIT =
		"mechanicalturk:CreateAdditionalAssignmentsForHIT";
	/** [Write] mechanicalturk:CreateHIT */
	static readonly CREATE_HIT = "mechanicalturk:CreateHIT";
	/** [Write] mechanicalturk:CreateHITType */
	static readonly CREATE_HIT_TYPE = "mechanicalturk:CreateHITType";
	/** [Write] mechanicalturk:CreateHITWithHITType */
	static readonly CREATE_HIT_WITH_HIT_TYPE =
		"mechanicalturk:CreateHITWithHITType";
	/** [Write] mechanicalturk:CreateQualificationType */
	static readonly CREATE_QUALIFICATION_TYPE =
		"mechanicalturk:CreateQualificationType";
	/** [Write] mechanicalturk:CreateWorkerBlock */
	static readonly CREATE_WORKER_BLOCK = "mechanicalturk:CreateWorkerBlock";
	/** [Write] mechanicalturk:DeleteHIT */
	static readonly DELETE_HIT = "mechanicalturk:DeleteHIT";
	/** [Write] mechanicalturk:DeleteQualificationType */
	static readonly DELETE_QUALIFICATION_TYPE =
		"mechanicalturk:DeleteQualificationType";
	/** [Write] mechanicalturk:DeleteWorkerBlock */
	static readonly DELETE_WORKER_BLOCK = "mechanicalturk:DeleteWorkerBlock";
	/** [Write] mechanicalturk:DisassociateQualificationFromWorker */
	static readonly DISASSOCIATE_QUALIFICATION_FROM_WORKER =
		"mechanicalturk:DisassociateQualificationFromWorker";
	/** [Read] mechanicalturk:GetAccountBalance */
	static readonly GET_ACCOUNT_BALANCE = "mechanicalturk:GetAccountBalance";
	/** [Read] mechanicalturk:GetAssignment */
	static readonly GET_ASSIGNMENT = "mechanicalturk:GetAssignment";
	/** [Read] mechanicalturk:GetFileUploadURL */
	static readonly GET_FILE_UPLOAD_URL = "mechanicalturk:GetFileUploadURL";
	/** [Read] mechanicalturk:GetHIT */
	static readonly GET_HIT = "mechanicalturk:GetHIT";
	/** [Read] mechanicalturk:GetQualificationScore */
	static readonly GET_QUALIFICATION_SCORE =
		"mechanicalturk:GetQualificationScore";
	/** [Read] mechanicalturk:GetQualificationType */
	static readonly GET_QUALIFICATION_TYPE =
		"mechanicalturk:GetQualificationType";
	/** [List] mechanicalturk:ListAssignmentsForHIT */
	static readonly LIST_ASSIGNMENTS_FOR_HIT =
		"mechanicalturk:ListAssignmentsForHIT";
	/** [List] mechanicalturk:ListBonusPayments */
	static readonly LIST_BONUS_PAYMENTS = "mechanicalturk:ListBonusPayments";
	/** [List] mechanicalturk:ListHITs */
	static readonly LIST_HI_TS = "mechanicalturk:ListHITs";
	/** [List] mechanicalturk:ListHITsForQualificationType */
	static readonly LIST_HI_TS_FOR_QUALIFICATION_TYPE =
		"mechanicalturk:ListHITsForQualificationType";
	/** [List] mechanicalturk:ListQualificationRequests */
	static readonly LIST_QUALIFICATION_REQUESTS =
		"mechanicalturk:ListQualificationRequests";
	/** [List] mechanicalturk:ListQualificationTypes */
	static readonly LIST_QUALIFICATION_TYPES =
		"mechanicalturk:ListQualificationTypes";
	/** [List] mechanicalturk:ListReviewPolicyResultsForHIT */
	static readonly LIST_REVIEW_POLICY_RESULTS_FOR_HIT =
		"mechanicalturk:ListReviewPolicyResultsForHIT";
	/** [List] mechanicalturk:ListReviewableHITs */
	static readonly LIST_REVIEWABLE_HI_TS = "mechanicalturk:ListReviewableHITs";
	/** [List] mechanicalturk:ListWorkerBlocks */
	static readonly LIST_WORKER_BLOCKS = "mechanicalturk:ListWorkerBlocks";
	/** [List] mechanicalturk:ListWorkersWithQualificationType */
	static readonly LIST_WORKERS_WITH_QUALIFICATION_TYPE =
		"mechanicalturk:ListWorkersWithQualificationType";
	/** [Write] mechanicalturk:NotifyWorkers */
	static readonly NOTIFY_WORKERS = "mechanicalturk:NotifyWorkers";
	/** [Write] mechanicalturk:RejectAssignment */
	static readonly REJECT_ASSIGNMENT = "mechanicalturk:RejectAssignment";
	/** [Write] mechanicalturk:RejectQualificationRequest */
	static readonly REJECT_QUALIFICATION_REQUEST =
		"mechanicalturk:RejectQualificationRequest";
	/** [Write] mechanicalturk:SendBonus */
	static readonly SEND_BONUS = "mechanicalturk:SendBonus";
	/** [Write] mechanicalturk:SendTestEventNotification */
	static readonly SEND_TEST_EVENT_NOTIFICATION =
		"mechanicalturk:SendTestEventNotification";
	/** [Write] mechanicalturk:UpdateExpirationForHIT */
	static readonly UPDATE_EXPIRATION_FOR_HIT =
		"mechanicalturk:UpdateExpirationForHIT";
	/** [Write] mechanicalturk:UpdateHITReviewStatus */
	static readonly UPDATE_HIT_REVIEW_STATUS =
		"mechanicalturk:UpdateHITReviewStatus";
	/** [Write] mechanicalturk:UpdateHITTypeOfHIT */
	static readonly UPDATE_HIT_TYPE_OF_HIT = "mechanicalturk:UpdateHITTypeOfHIT";
	/** [Write] mechanicalturk:UpdateNotificationSettings */
	static readonly UPDATE_NOTIFICATION_SETTINGS =
		"mechanicalturk:UpdateNotificationSettings";
	/** [Write] mechanicalturk:UpdateQualificationType */
	static readonly UPDATE_QUALIFICATION_TYPE =
		"mechanicalturk:UpdateQualificationType";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MechanicalturkActions.GET_ACCOUNT_BALANCE,
		MechanicalturkActions.GET_ASSIGNMENT,
		MechanicalturkActions.GET_FILE_UPLOAD_URL,
		MechanicalturkActions.GET_HIT,
		MechanicalturkActions.GET_QUALIFICATION_SCORE,
		MechanicalturkActions.GET_QUALIFICATION_TYPE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MechanicalturkActions.ACCEPT_QUALIFICATION_REQUEST,
		MechanicalturkActions.APPROVE_ASSIGNMENT,
		MechanicalturkActions.ASSOCIATE_QUALIFICATION_WITH_WORKER,
		MechanicalturkActions.CREATE_ADDITIONAL_ASSIGNMENTS_FOR_HIT,
		MechanicalturkActions.CREATE_HIT,
		MechanicalturkActions.CREATE_HIT_TYPE,
		MechanicalturkActions.CREATE_HIT_WITH_HIT_TYPE,
		MechanicalturkActions.CREATE_QUALIFICATION_TYPE,
		MechanicalturkActions.CREATE_WORKER_BLOCK,
		MechanicalturkActions.DELETE_HIT,
		MechanicalturkActions.DELETE_QUALIFICATION_TYPE,
		MechanicalturkActions.DELETE_WORKER_BLOCK,
		MechanicalturkActions.DISASSOCIATE_QUALIFICATION_FROM_WORKER,
		MechanicalturkActions.NOTIFY_WORKERS,
		MechanicalturkActions.REJECT_ASSIGNMENT,
		MechanicalturkActions.REJECT_QUALIFICATION_REQUEST,
		MechanicalturkActions.SEND_BONUS,
		MechanicalturkActions.SEND_TEST_EVENT_NOTIFICATION,
		MechanicalturkActions.UPDATE_EXPIRATION_FOR_HIT,
		MechanicalturkActions.UPDATE_HIT_REVIEW_STATUS,
		MechanicalturkActions.UPDATE_HIT_TYPE_OF_HIT,
		MechanicalturkActions.UPDATE_NOTIFICATION_SETTINGS,
		MechanicalturkActions.UPDATE_QUALIFICATION_TYPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MechanicalturkActions.LIST_ASSIGNMENTS_FOR_HIT,
		MechanicalturkActions.LIST_BONUS_PAYMENTS,
		MechanicalturkActions.LIST_HI_TS,
		MechanicalturkActions.LIST_HI_TS_FOR_QUALIFICATION_TYPE,
		MechanicalturkActions.LIST_QUALIFICATION_REQUESTS,
		MechanicalturkActions.LIST_QUALIFICATION_TYPES,
		MechanicalturkActions.LIST_REVIEW_POLICY_RESULTS_FOR_HIT,
		MechanicalturkActions.LIST_REVIEWABLE_HI_TS,
		MechanicalturkActions.LIST_WORKER_BLOCKS,
		MechanicalturkActions.LIST_WORKERS_WITH_QUALIFICATION_TYPE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for mechanicalturk.
 */
export class MechanicalturkOperations {
	/** IAM actions required for the AcceptQualificationRequest API call. */
	static readonly ACCEPT_QUALIFICATION_REQUEST: string[] = [
		"mechanicalturk:AcceptQualificationRequest",
	];
	/** IAM actions required for the ApproveAssignment API call. */
	static readonly APPROVE_ASSIGNMENT: string[] = [
		"mechanicalturk:ApproveAssignment",
	];
	/** IAM actions required for the AssociateQualificationWithWorker API call. */
	static readonly ASSOCIATE_QUALIFICATION_WITH_WORKER: string[] = [
		"mechanicalturk:AssociateQualificationWithWorker",
	];
	/** IAM actions required for the CreateAdditionalAssignmentsForHIT API call. */
	static readonly CREATE_ADDITIONAL_ASSIGNMENTS_FOR_HIT: string[] = [
		"mechanicalturk:CreateAdditionalAssignmentsForHIT",
	];
	/** IAM actions required for the CreateHIT API call. */
	static readonly CREATE_HIT: string[] = ["mechanicalturk:CreateHIT"];
	/** IAM actions required for the CreateHITType API call. */
	static readonly CREATE_HIT_TYPE: string[] = ["mechanicalturk:CreateHITType"];
	/** IAM actions required for the CreateHITWithHITType API call. */
	static readonly CREATE_HIT_WITH_HIT_TYPE: string[] = [
		"mechanicalturk:CreateHITWithHITType",
	];
	/** IAM actions required for the CreateQualificationType API call. */
	static readonly CREATE_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:CreateQualificationType",
	];
	/** IAM actions required for the CreateWorkerBlock API call. */
	static readonly CREATE_WORKER_BLOCK: string[] = [
		"mechanicalturk:CreateWorkerBlock",
	];
	/** IAM actions required for the DeleteHIT API call. */
	static readonly DELETE_HIT: string[] = ["mechanicalturk:DeleteHIT"];
	/** IAM actions required for the DeleteQualificationType API call. */
	static readonly DELETE_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:DeleteQualificationType",
	];
	/** IAM actions required for the DeleteWorkerBlock API call. */
	static readonly DELETE_WORKER_BLOCK: string[] = [
		"mechanicalturk:DeleteWorkerBlock",
	];
	/** IAM actions required for the DisassociateQualificationFromWorker API call. */
	static readonly DISASSOCIATE_QUALIFICATION_FROM_WORKER: string[] = [
		"mechanicalturk:DisassociateQualificationFromWorker",
	];
	/** IAM actions required for the GetAccountBalance API call. */
	static readonly GET_ACCOUNT_BALANCE: string[] = [
		"mechanicalturk:GetAccountBalance",
	];
	/** IAM actions required for the GetAssignment API call. */
	static readonly GET_ASSIGNMENT: string[] = ["mechanicalturk:GetAssignment"];
	/** IAM actions required for the GetFileUploadURL API call. */
	static readonly GET_FILE_UPLOAD_URL: string[] = [
		"mechanicalturk:GetFileUploadURL",
	];
	/** IAM actions required for the GetHIT API call. */
	static readonly GET_HIT: string[] = ["mechanicalturk:GetHIT"];
	/** IAM actions required for the GetQualificationScore API call. */
	static readonly GET_QUALIFICATION_SCORE: string[] = [
		"mechanicalturk:GetQualificationScore",
	];
	/** IAM actions required for the GetQualificationType API call. */
	static readonly GET_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:GetQualificationType",
	];
	/** IAM actions required for the ListAssignmentsForHIT API call. */
	static readonly LIST_ASSIGNMENTS_FOR_HIT: string[] = [
		"mechanicalturk:ListAssignmentsForHIT",
	];
	/** IAM actions required for the ListBonusPayments API call. */
	static readonly LIST_BONUS_PAYMENTS: string[] = [
		"mechanicalturk:ListBonusPayments",
	];
	/** IAM actions required for the ListHITs API call. */
	static readonly LIST_HI_TS: string[] = ["mechanicalturk:ListHITs"];
	/** IAM actions required for the ListHITsForQualificationType API call. */
	static readonly LIST_HI_TS_FOR_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:ListHITsForQualificationType",
	];
	/** IAM actions required for the ListQualificationRequests API call. */
	static readonly LIST_QUALIFICATION_REQUESTS: string[] = [
		"mechanicalturk:ListQualificationRequests",
	];
	/** IAM actions required for the ListQualificationTypes API call. */
	static readonly LIST_QUALIFICATION_TYPES: string[] = [
		"mechanicalturk:ListQualificationTypes",
	];
	/** IAM actions required for the ListReviewPolicyResultsForHIT API call. */
	static readonly LIST_REVIEW_POLICY_RESULTS_FOR_HIT: string[] = [
		"mechanicalturk:ListReviewPolicyResultsForHIT",
	];
	/** IAM actions required for the ListReviewableHITs API call. */
	static readonly LIST_REVIEWABLE_HI_TS: string[] = [
		"mechanicalturk:ListReviewableHITs",
	];
	/** IAM actions required for the ListWorkerBlocks API call. */
	static readonly LIST_WORKER_BLOCKS: string[] = [
		"mechanicalturk:ListWorkerBlocks",
	];
	/** IAM actions required for the ListWorkersWithQualificationType API call. */
	static readonly LIST_WORKERS_WITH_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:ListWorkersWithQualificationType",
	];
	/** IAM actions required for the NotifyWorkers API call. */
	static readonly NOTIFY_WORKERS: string[] = ["mechanicalturk:NotifyWorkers"];
	/** IAM actions required for the RejectAssignment API call. */
	static readonly REJECT_ASSIGNMENT: string[] = [
		"mechanicalturk:RejectAssignment",
	];
	/** IAM actions required for the RejectQualificationRequest API call. */
	static readonly REJECT_QUALIFICATION_REQUEST: string[] = [
		"mechanicalturk:RejectQualificationRequest",
	];
	/** IAM actions required for the SendBonus API call. */
	static readonly SEND_BONUS: string[] = ["mechanicalturk:SendBonus"];
	/** IAM actions required for the SendTestEventNotification API call. */
	static readonly SEND_TEST_EVENT_NOTIFICATION: string[] = [
		"mechanicalturk:SendTestEventNotification",
	];
	/** IAM actions required for the UpdateExpirationForHIT API call. */
	static readonly UPDATE_EXPIRATION_FOR_HIT: string[] = [
		"mechanicalturk:UpdateExpirationForHIT",
	];
	/** IAM actions required for the UpdateHITReviewStatus API call. */
	static readonly UPDATE_HIT_REVIEW_STATUS: string[] = [
		"mechanicalturk:UpdateHITReviewStatus",
	];
	/** IAM actions required for the UpdateHITTypeOfHIT API call. */
	static readonly UPDATE_HIT_TYPE_OF_HIT: string[] = [
		"mechanicalturk:UpdateHITTypeOfHIT",
	];
	/** IAM actions required for the UpdateNotificationSettings API call. */
	static readonly UPDATE_NOTIFICATION_SETTINGS: string[] = [
		"mechanicalturk:UpdateNotificationSettings",
	];
	/** IAM actions required for the UpdateQualificationType API call. */
	static readonly UPDATE_QUALIFICATION_TYPE: string[] = [
		"mechanicalturk:UpdateQualificationType",
	];
}
