// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iq.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iq service.
 */
export class IqActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iq";

	/** [Write] iq:AcceptCall */
	static readonly ACCEPT_CALL = "iq:AcceptCall";
	/** [Write] iq:ApprovePaymentRequest */
	static readonly APPROVE_PAYMENT_REQUEST = "iq:ApprovePaymentRequest";
	/** [Write] iq:ApproveProposal */
	static readonly APPROVE_PROPOSAL = "iq:ApproveProposal";
	/** [Write] iq:ArchiveConversation */
	static readonly ARCHIVE_CONVERSATION = "iq:ArchiveConversation";
	/** [Write] iq:CompleteProposal */
	static readonly COMPLETE_PROPOSAL = "iq:CompleteProposal";
	/** [Write] iq:CreateConversation */
	static readonly CREATE_CONVERSATION = "iq:CreateConversation";
	/** [Write] iq:CreateExpert */
	static readonly CREATE_EXPERT = "iq:CreateExpert";
	/** [Write] iq:CreateListing */
	static readonly CREATE_LISTING = "iq:CreateListing";
	/** [Write] iq:CreateMilestoneProposal */
	static readonly CREATE_MILESTONE_PROPOSAL = "iq:CreateMilestoneProposal";
	/** [Write] iq:CreatePaymentRequest */
	static readonly CREATE_PAYMENT_REQUEST = "iq:CreatePaymentRequest";
	/** [Write] iq:CreateProject */
	static readonly CREATE_PROJECT = "iq:CreateProject";
	/** [Write] iq:CreateRequest */
	static readonly CREATE_REQUEST = "iq:CreateRequest";
	/** [Write] iq:CreateScheduledProposal */
	static readonly CREATE_SCHEDULED_PROPOSAL = "iq:CreateScheduledProposal";
	/** [Write] iq:CreateSeller */
	static readonly CREATE_SELLER = "iq:CreateSeller";
	/** [Write] iq:CreateUpfrontProposal */
	static readonly CREATE_UPFRONT_PROPOSAL = "iq:CreateUpfrontProposal";
	/** [Write] iq:DeclineCall */
	static readonly DECLINE_CALL = "iq:DeclineCall";
	/** [Write] iq:DeleteAttachment */
	static readonly DELETE_ATTACHMENT = "iq:DeleteAttachment";
	/** [Write] iq:DisableIndividualPublicProfile */
	static readonly DISABLE_INDIVIDUAL_PUBLIC_PROFILE =
		"iq:DisableIndividualPublicProfile";
	/** [Read] iq:DownloadAttachment */
	static readonly DOWNLOAD_ATTACHMENT = "iq:DownloadAttachment";
	/** [Write] iq:EnableIndividualPublicProfile */
	static readonly ENABLE_INDIVIDUAL_PUBLIC_PROFILE =
		"iq:EnableIndividualPublicProfile";
	/** [Write] iq:EndCall */
	static readonly END_CALL = "iq:EndCall";
	/** [Read] iq:GetBuyer */
	static readonly GET_BUYER = "iq:GetBuyer";
	/** [Read] iq:GetCall */
	static readonly GET_CALL = "iq:GetCall";
	/** [Read] iq:GetChatInfo */
	static readonly GET_CHAT_INFO = "iq:GetChatInfo";
	/** [Read] iq:GetChatMessages */
	static readonly GET_CHAT_MESSAGES = "iq:GetChatMessages";
	/** [Read] iq:GetChatToken */
	static readonly GET_CHAT_TOKEN = "iq:GetChatToken";
	/** [Read] iq:GetCompanyChatMessages */
	static readonly GET_COMPANY_CHAT_MESSAGES = "iq:GetCompanyChatMessages";
	/** [Read] iq:GetCompanyProfile */
	static readonly GET_COMPANY_PROFILE = "iq:GetCompanyProfile";
	/** [Read] iq:GetConversation */
	static readonly GET_CONVERSATION = "iq:GetConversation";
	/** [Read] iq:GetExpert */
	static readonly GET_EXPERT = "iq:GetExpert";
	/** [Read] iq:GetListing */
	static readonly GET_LISTING = "iq:GetListing";
	/** [Read] iq:GetMarketplaceSeller */
	static readonly GET_MARKETPLACE_SELLER = "iq:GetMarketplaceSeller";
	/** [Read] iq:GetPaymentRequest */
	static readonly GET_PAYMENT_REQUEST = "iq:GetPaymentRequest";
	/** [Read] iq:GetProposal */
	static readonly GET_PROPOSAL = "iq:GetProposal";
	/** [Read] iq:GetRequest */
	static readonly GET_REQUEST = "iq:GetRequest";
	/** [Read] iq:GetReview */
	static readonly GET_REVIEW = "iq:GetReview";
	/** [Write] iq:HideRequest */
	static readonly HIDE_REQUEST = "iq:HideRequest";
	/** [Write] iq:InitiateCall */
	static readonly INITIATE_CALL = "iq:InitiateCall";
	/** [Write] iq:LinkAwsCertification */
	static readonly LINK_AWS_CERTIFICATION = "iq:LinkAwsCertification";
	/** [List] iq:ListAttachments */
	static readonly LIST_ATTACHMENTS = "iq:ListAttachments";
	/** [Read] iq:ListConversations */
	static readonly LIST_CONVERSATIONS = "iq:ListConversations";
	/** [Read] iq:ListExpertAccessLogs */
	static readonly LIST_EXPERT_ACCESS_LOGS = "iq:ListExpertAccessLogs";
	/** [Read] iq:ListListings */
	static readonly LIST_LISTINGS = "iq:ListListings";
	/** [Read] iq:ListPaymentRequests */
	static readonly LIST_PAYMENT_REQUESTS = "iq:ListPaymentRequests";
	/** [Read] iq:ListProposals */
	static readonly LIST_PROPOSALS = "iq:ListProposals";
	/** [Read] iq:ListRequests */
	static readonly LIST_REQUESTS = "iq:ListRequests";
	/** [Read] iq:ListReviews */
	static readonly LIST_REVIEWS = "iq:ListReviews";
	/** [Write] iq:MarkChatMessageRead */
	static readonly MARK_CHAT_MESSAGE_READ = "iq:MarkChatMessageRead";
	/** [Write] iq:RejectPaymentRequest */
	static readonly REJECT_PAYMENT_REQUEST = "iq:RejectPaymentRequest";
	/** [Write] iq:RejectProposal */
	static readonly REJECT_PROPOSAL = "iq:RejectProposal";
	/** [Write] iq:SendCompanyChatMessage */
	static readonly SEND_COMPANY_CHAT_MESSAGE = "iq:SendCompanyChatMessage";
	/** [Write] iq:SendIndividualChatMessage */
	static readonly SEND_INDIVIDUAL_CHAT_MESSAGE = "iq:SendIndividualChatMessage";
	/** [Write] iq:UnarchiveConversation */
	static readonly UNARCHIVE_CONVERSATION = "iq:UnarchiveConversation";
	/** [Write] iq:UnlinkAwsCertification */
	static readonly UNLINK_AWS_CERTIFICATION = "iq:UnlinkAwsCertification";
	/** [Write] iq:UpdateCompanyProfile */
	static readonly UPDATE_COMPANY_PROFILE = "iq:UpdateCompanyProfile";
	/** [Write] iq:UpdateConversationMembers */
	static readonly UPDATE_CONVERSATION_MEMBERS = "iq:UpdateConversationMembers";
	/** [Write] iq:UpdateExpert */
	static readonly UPDATE_EXPERT = "iq:UpdateExpert";
	/** [Write] iq:UpdateListing */
	static readonly UPDATE_LISTING = "iq:UpdateListing";
	/** [Write] iq:UpdateRequest */
	static readonly UPDATE_REQUEST = "iq:UpdateRequest";
	/** [Write] iq:UploadAttachment */
	static readonly UPLOAD_ATTACHMENT = "iq:UploadAttachment";
	/** [Write] iq:WithdrawPaymentRequest */
	static readonly WITHDRAW_PAYMENT_REQUEST = "iq:WithdrawPaymentRequest";
	/** [Write] iq:WithdrawProposal */
	static readonly WITHDRAW_PROPOSAL = "iq:WithdrawProposal";
	/** [Write] iq:WriteReview */
	static readonly WRITE_REVIEW = "iq:WriteReview";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IqActions.DOWNLOAD_ATTACHMENT,
		IqActions.GET_BUYER,
		IqActions.GET_CALL,
		IqActions.GET_CHAT_INFO,
		IqActions.GET_CHAT_MESSAGES,
		IqActions.GET_CHAT_TOKEN,
		IqActions.GET_COMPANY_CHAT_MESSAGES,
		IqActions.GET_COMPANY_PROFILE,
		IqActions.GET_CONVERSATION,
		IqActions.GET_EXPERT,
		IqActions.GET_LISTING,
		IqActions.GET_MARKETPLACE_SELLER,
		IqActions.GET_PAYMENT_REQUEST,
		IqActions.GET_PROPOSAL,
		IqActions.GET_REQUEST,
		IqActions.GET_REVIEW,
		IqActions.LIST_CONVERSATIONS,
		IqActions.LIST_EXPERT_ACCESS_LOGS,
		IqActions.LIST_LISTINGS,
		IqActions.LIST_PAYMENT_REQUESTS,
		IqActions.LIST_PROPOSALS,
		IqActions.LIST_REQUESTS,
		IqActions.LIST_REVIEWS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IqActions.ACCEPT_CALL,
		IqActions.APPROVE_PAYMENT_REQUEST,
		IqActions.APPROVE_PROPOSAL,
		IqActions.ARCHIVE_CONVERSATION,
		IqActions.COMPLETE_PROPOSAL,
		IqActions.CREATE_CONVERSATION,
		IqActions.CREATE_EXPERT,
		IqActions.CREATE_LISTING,
		IqActions.CREATE_MILESTONE_PROPOSAL,
		IqActions.CREATE_PAYMENT_REQUEST,
		IqActions.CREATE_PROJECT,
		IqActions.CREATE_REQUEST,
		IqActions.CREATE_SCHEDULED_PROPOSAL,
		IqActions.CREATE_SELLER,
		IqActions.CREATE_UPFRONT_PROPOSAL,
		IqActions.DECLINE_CALL,
		IqActions.DELETE_ATTACHMENT,
		IqActions.DISABLE_INDIVIDUAL_PUBLIC_PROFILE,
		IqActions.ENABLE_INDIVIDUAL_PUBLIC_PROFILE,
		IqActions.END_CALL,
		IqActions.HIDE_REQUEST,
		IqActions.INITIATE_CALL,
		IqActions.LINK_AWS_CERTIFICATION,
		IqActions.MARK_CHAT_MESSAGE_READ,
		IqActions.REJECT_PAYMENT_REQUEST,
		IqActions.REJECT_PROPOSAL,
		IqActions.SEND_COMPANY_CHAT_MESSAGE,
		IqActions.SEND_INDIVIDUAL_CHAT_MESSAGE,
		IqActions.UNARCHIVE_CONVERSATION,
		IqActions.UNLINK_AWS_CERTIFICATION,
		IqActions.UPDATE_COMPANY_PROFILE,
		IqActions.UPDATE_CONVERSATION_MEMBERS,
		IqActions.UPDATE_EXPERT,
		IqActions.UPDATE_LISTING,
		IqActions.UPDATE_REQUEST,
		IqActions.UPLOAD_ATTACHMENT,
		IqActions.WITHDRAW_PAYMENT_REQUEST,
		IqActions.WITHDRAW_PROPOSAL,
		IqActions.WRITE_REVIEW,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [IqActions.LIST_ATTACHMENTS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AttachmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::attachment/(?<attachmentId>[^:/?]+)$",
);
const BuyerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::buyer/(?<buyerId>[^:/?]+)$",
);
const CallArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::call/(?<callId>[^:/?]+)$",
);
const CompanyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::company/(?<companyId>[^:/?]+)$",
);
const ConversationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::conversation/(?<conversationId>[^:/?]+)$",
);
const ExpertArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::expert/(?<expertId>[^:/?]+)$",
);
const ListingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::listing/(?<listingId>[^:/?]+)$",
);
const PaymentRequestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::paymentRequest/(?<conversationId>[^:/?]+)/(?<proposalId>[^:/?]+)/(?<paymentRequestId>[^:/?]+)$",
);
const PaymentScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::paymentSchedule/(?<conversationId>[^:/?]+)/(?<proposalId>[^:/?]+)/(?<versionId>[^:/?]+)$",
);
const PermissionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq-permission:(?<region>[^:]*)::permission/(?<permissionRequestId>[^:/?]+)$",
);
const ProposalArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::proposal/(?<conversationId>[^:/?]+)/(?<proposalId>[^:/?]+)$",
);
const RequestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::request/(?<requestId>[^:/?]+)$",
);
const SellerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::seller/(?<sellerAWSAccountId>[^:/?]+)$",
);
const TokenArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::token/(?<tokenId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iq resources.
 */
export class IqResources {
	/**
	 * Builds an ARN for the attachment resource.
	 */
	static attachment(props: {
		/** The AttachmentId component of the ARN. */
		readonly attachmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::attachment/${props.attachmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attachment resource.
	 */
	static isValidAttachmentArn(arn: string): boolean {
		return AttachmentArnRegex.test(arn);
	}

	/**
	 * Parses a attachment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttachmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		attachmentId: string;
	} {
		const match = AttachmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attachment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			attachmentId: match.groups!.attachmentId,
		};
	}

	/**
	 * Builds an ARN for the buyer resource.
	 */
	static buyer(props: {
		/** The BuyerId component of the ARN. */
		readonly buyerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::buyer/${props.buyerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the buyer resource.
	 */
	static isValidBuyerArn(arn: string): boolean {
		return BuyerArnRegex.test(arn);
	}

	/**
	 * Parses a buyer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBuyerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		buyerId: string;
	} {
		const match = BuyerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid buyer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			buyerId: match.groups!.buyerId,
		};
	}

	/**
	 * Builds an ARN for the call resource.
	 */
	static call(props: {
		/** The CallId component of the ARN. */
		readonly callId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::call/${props.callId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the call resource.
	 */
	static isValidCallArn(arn: string): boolean {
		return CallArnRegex.test(arn);
	}

	/**
	 * Parses a call ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCallArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		callId: string;
	} {
		const match = CallArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid call ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			callId: match.groups!.callId,
		};
	}

	/**
	 * Builds an ARN for the company resource.
	 */
	static company(props: {
		/** The CompanyId component of the ARN. */
		readonly companyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::company/${props.companyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the company resource.
	 */
	static isValidCompanyArn(arn: string): boolean {
		return CompanyArnRegex.test(arn);
	}

	/**
	 * Parses a company ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCompanyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		companyId: string;
	} {
		const match = CompanyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid company ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			companyId: match.groups!.companyId,
		};
	}

	/**
	 * Builds an ARN for the conversation resource.
	 */
	static conversation(props: {
		/** The ConversationId component of the ARN. */
		readonly conversationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::conversation/${props.conversationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the conversation resource.
	 */
	static isValidConversationArn(arn: string): boolean {
		return ConversationArnRegex.test(arn);
	}

	/**
	 * Parses a conversation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConversationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		conversationId: string;
	} {
		const match = ConversationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid conversation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			conversationId: match.groups!.conversationId,
		};
	}

	/**
	 * Builds an ARN for the expert resource.
	 */
	static expert(props: {
		/** The ExpertId component of the ARN. */
		readonly expertId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::expert/${props.expertId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the expert resource.
	 */
	static isValidExpertArn(arn: string): boolean {
		return ExpertArnRegex.test(arn);
	}

	/**
	 * Parses a expert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExpertArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		expertId: string;
	} {
		const match = ExpertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid expert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			expertId: match.groups!.expertId,
		};
	}

	/**
	 * Builds an ARN for the listing resource.
	 */
	static listing(props: {
		/** The ListingId component of the ARN. */
		readonly listingId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::listing/${props.listingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listing resource.
	 */
	static isValidListingArn(arn: string): boolean {
		return ListingArnRegex.test(arn);
	}

	/**
	 * Parses a listing ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		listingId: string;
	} {
		const match = ListingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listing ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			listingId: match.groups!.listingId,
		};
	}

	/**
	 * Builds an ARN for the paymentRequest resource.
	 */
	static paymentRequest(props: {
		/** The ConversationId component of the ARN. */
		readonly conversationId: string;
		/** The ProposalId component of the ARN. */
		readonly proposalId: string;
		/** The PaymentRequestId component of the ARN. */
		readonly paymentRequestId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::paymentRequest/${props.conversationId}/${props.proposalId}/${props.paymentRequestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the paymentRequest resource.
	 */
	static isValidPaymentRequestArn(arn: string): boolean {
		return PaymentRequestArnRegex.test(arn);
	}

	/**
	 * Parses a paymentRequest ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePaymentRequestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		conversationId: string;
		proposalId: string;
		paymentRequestId: string;
	} {
		const match = PaymentRequestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid paymentRequest ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			conversationId: match.groups!.conversationId,
			proposalId: match.groups!.proposalId,
			paymentRequestId: match.groups!.paymentRequestId,
		};
	}

	/**
	 * Builds an ARN for the paymentSchedule resource.
	 */
	static paymentSchedule(props: {
		/** The ConversationId component of the ARN. */
		readonly conversationId: string;
		/** The ProposalId component of the ARN. */
		readonly proposalId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::paymentSchedule/${props.conversationId}/${props.proposalId}/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the paymentSchedule resource.
	 */
	static isValidPaymentScheduleArn(arn: string): boolean {
		return PaymentScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a paymentSchedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePaymentScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		conversationId: string;
		proposalId: string;
		versionId: string;
	} {
		const match = PaymentScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid paymentSchedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			conversationId: match.groups!.conversationId,
			proposalId: match.groups!.proposalId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the permission resource.
	 */
	static permission(props: {
		/** The PermissionRequestId component of the ARN. */
		readonly permissionRequestId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq-permission:${props.region ?? "*"}::permission/${props.permissionRequestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the permission resource.
	 */
	static isValidPermissionArn(arn: string): boolean {
		return PermissionArnRegex.test(arn);
	}

	/**
	 * Parses a permission ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePermissionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		permissionRequestId: string;
	} {
		const match = PermissionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid permission ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			permissionRequestId: match.groups!.permissionRequestId,
		};
	}

	/**
	 * Builds an ARN for the proposal resource.
	 */
	static proposal(props: {
		/** The ConversationId component of the ARN. */
		readonly conversationId: string;
		/** The ProposalId component of the ARN. */
		readonly proposalId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::proposal/${props.conversationId}/${props.proposalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the proposal resource.
	 */
	static isValidProposalArn(arn: string): boolean {
		return ProposalArnRegex.test(arn);
	}

	/**
	 * Parses a proposal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProposalArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		conversationId: string;
		proposalId: string;
	} {
		const match = ProposalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid proposal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			conversationId: match.groups!.conversationId,
			proposalId: match.groups!.proposalId,
		};
	}

	/**
	 * Builds an ARN for the request resource.
	 */
	static request(props: {
		/** The RequestId component of the ARN. */
		readonly requestId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::request/${props.requestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the request resource.
	 */
	static isValidRequestArn(arn: string): boolean {
		return RequestArnRegex.test(arn);
	}

	/**
	 * Parses a request ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRequestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		requestId: string;
	} {
		const match = RequestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid request ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			requestId: match.groups!.requestId,
		};
	}

	/**
	 * Builds an ARN for the seller resource.
	 */
	static seller(props: {
		/** The SellerAwsAccountId component of the ARN. */
		readonly sellerAWSAccountId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::seller/${props.sellerAWSAccountId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the seller resource.
	 */
	static isValidSellerArn(arn: string): boolean {
		return SellerArnRegex.test(arn);
	}

	/**
	 * Parses a seller ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSellerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sellerAWSAccountId: string;
	} {
		const match = SellerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid seller ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sellerAWSAccountId: match.groups!.sellerAWSAccountId,
		};
	}

	/**
	 * Builds an ARN for the token resource.
	 */
	static token(props: {
		/** The TokenId component of the ARN. */
		readonly tokenId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iq:${props.region ?? "*"}::token/${props.tokenId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the token resource.
	 */
	static isValidTokenArn(arn: string): boolean {
		return TokenArnRegex.test(arn);
	}

	/**
	 * Parses a token ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTokenArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tokenId: string;
	} {
		const match = TokenArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid token ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tokenId: match.groups!.tokenId,
		};
	}
}
