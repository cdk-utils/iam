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
	static readonly AcceptCall = "iq:AcceptCall";
	/** [Write] iq:ApprovePaymentRequest */
	static readonly ApprovePaymentRequest = "iq:ApprovePaymentRequest";
	/** [Write] iq:ApproveProposal */
	static readonly ApproveProposal = "iq:ApproveProposal";
	/** [Write] iq:ArchiveConversation */
	static readonly ArchiveConversation = "iq:ArchiveConversation";
	/** [Write] iq:CompleteProposal */
	static readonly CompleteProposal = "iq:CompleteProposal";
	/** [Write] iq:CreateConversation */
	static readonly CreateConversation = "iq:CreateConversation";
	/** [Write] iq:CreateExpert */
	static readonly CreateExpert = "iq:CreateExpert";
	/** [Write] iq:CreateListing */
	static readonly CreateListing = "iq:CreateListing";
	/** [Write] iq:CreateMilestoneProposal */
	static readonly CreateMilestoneProposal = "iq:CreateMilestoneProposal";
	/** [Write] iq:CreatePaymentRequest */
	static readonly CreatePaymentRequest = "iq:CreatePaymentRequest";
	/** [Write] iq:CreateProject */
	static readonly CreateProject = "iq:CreateProject";
	/** [Write] iq:CreateRequest */
	static readonly CreateRequest = "iq:CreateRequest";
	/** [Write] iq:CreateScheduledProposal */
	static readonly CreateScheduledProposal = "iq:CreateScheduledProposal";
	/** [Write] iq:CreateSeller */
	static readonly CreateSeller = "iq:CreateSeller";
	/** [Write] iq:CreateUpfrontProposal */
	static readonly CreateUpfrontProposal = "iq:CreateUpfrontProposal";
	/** [Write] iq:DeclineCall */
	static readonly DeclineCall = "iq:DeclineCall";
	/** [Write] iq:DeleteAttachment */
	static readonly DeleteAttachment = "iq:DeleteAttachment";
	/** [Write] iq:DisableIndividualPublicProfile */
	static readonly DisableIndividualPublicProfile =
		"iq:DisableIndividualPublicProfile";
	/** [Read] iq:DownloadAttachment */
	static readonly DownloadAttachment = "iq:DownloadAttachment";
	/** [Write] iq:EnableIndividualPublicProfile */
	static readonly EnableIndividualPublicProfile =
		"iq:EnableIndividualPublicProfile";
	/** [Write] iq:EndCall */
	static readonly EndCall = "iq:EndCall";
	/** [Read] iq:GetBuyer */
	static readonly actionGetBuyer = "iq:GetBuyer";
	/** [Read] iq:GetCall */
	static readonly actionGetCall = "iq:GetCall";
	/** [Read] iq:GetChatInfo */
	static readonly actionGetChatInfo = "iq:GetChatInfo";
	/** [Read] iq:GetChatMessages */
	static readonly actionGetChatMessages = "iq:GetChatMessages";
	/** [Read] iq:GetChatToken */
	static readonly actionGetChatToken = "iq:GetChatToken";
	/** [Read] iq:GetCompanyChatMessages */
	static readonly actionGetCompanyChatMessages = "iq:GetCompanyChatMessages";
	/** [Read] iq:GetCompanyProfile */
	static readonly actionGetCompanyProfile = "iq:GetCompanyProfile";
	/** [Read] iq:GetConversation */
	static readonly actionGetConversation = "iq:GetConversation";
	/** [Read] iq:GetExpert */
	static readonly actionGetExpert = "iq:GetExpert";
	/** [Read] iq:GetListing */
	static readonly actionGetListing = "iq:GetListing";
	/** [Read] iq:GetMarketplaceSeller */
	static readonly actionGetMarketplaceSeller = "iq:GetMarketplaceSeller";
	/** [Read] iq:GetPaymentRequest */
	static readonly actionGetPaymentRequest = "iq:GetPaymentRequest";
	/** [Read] iq:GetProposal */
	static readonly actionGetProposal = "iq:GetProposal";
	/** [Read] iq:GetRequest */
	static readonly actionGetRequest = "iq:GetRequest";
	/** [Read] iq:GetReview */
	static readonly actionGetReview = "iq:GetReview";
	/** [Write] iq:HideRequest */
	static readonly HideRequest = "iq:HideRequest";
	/** [Write] iq:InitiateCall */
	static readonly InitiateCall = "iq:InitiateCall";
	/** [Write] iq:LinkAwsCertification */
	static readonly LinkAwsCertification = "iq:LinkAwsCertification";
	/** [List] iq:ListAttachments */
	static readonly ListAttachments = "iq:ListAttachments";
	/** [Read] iq:ListConversations */
	static readonly ListConversations = "iq:ListConversations";
	/** [Read] iq:ListExpertAccessLogs */
	static readonly ListExpertAccessLogs = "iq:ListExpertAccessLogs";
	/** [Read] iq:ListListings */
	static readonly ListListings = "iq:ListListings";
	/** [Read] iq:ListPaymentRequests */
	static readonly ListPaymentRequests = "iq:ListPaymentRequests";
	/** [Read] iq:ListProposals */
	static readonly ListProposals = "iq:ListProposals";
	/** [Read] iq:ListRequests */
	static readonly ListRequests = "iq:ListRequests";
	/** [Read] iq:ListReviews */
	static readonly ListReviews = "iq:ListReviews";
	/** [Write] iq:MarkChatMessageRead */
	static readonly MarkChatMessageRead = "iq:MarkChatMessageRead";
	/** [Write] iq:RejectPaymentRequest */
	static readonly RejectPaymentRequest = "iq:RejectPaymentRequest";
	/** [Write] iq:RejectProposal */
	static readonly RejectProposal = "iq:RejectProposal";
	/** [Write] iq:SendCompanyChatMessage */
	static readonly SendCompanyChatMessage = "iq:SendCompanyChatMessage";
	/** [Write] iq:SendIndividualChatMessage */
	static readonly SendIndividualChatMessage = "iq:SendIndividualChatMessage";
	/** [Write] iq:UnarchiveConversation */
	static readonly UnarchiveConversation = "iq:UnarchiveConversation";
	/** [Write] iq:UnlinkAwsCertification */
	static readonly UnlinkAwsCertification = "iq:UnlinkAwsCertification";
	/** [Write] iq:UpdateCompanyProfile */
	static readonly UpdateCompanyProfile = "iq:UpdateCompanyProfile";
	/** [Write] iq:UpdateConversationMembers */
	static readonly UpdateConversationMembers = "iq:UpdateConversationMembers";
	/** [Write] iq:UpdateExpert */
	static readonly UpdateExpert = "iq:UpdateExpert";
	/** [Write] iq:UpdateListing */
	static readonly UpdateListing = "iq:UpdateListing";
	/** [Write] iq:UpdateRequest */
	static readonly UpdateRequest = "iq:UpdateRequest";
	/** [Write] iq:UploadAttachment */
	static readonly UploadAttachment = "iq:UploadAttachment";
	/** [Write] iq:WithdrawPaymentRequest */
	static readonly WithdrawPaymentRequest = "iq:WithdrawPaymentRequest";
	/** [Write] iq:WithdrawProposal */
	static readonly WithdrawProposal = "iq:WithdrawProposal";
	/** [Write] iq:WriteReview */
	static readonly WriteReview = "iq:WriteReview";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IqActions.DownloadAttachment,
		IqActions.actionGetBuyer,
		IqActions.actionGetCall,
		IqActions.actionGetChatInfo,
		IqActions.actionGetChatMessages,
		IqActions.actionGetChatToken,
		IqActions.actionGetCompanyChatMessages,
		IqActions.actionGetCompanyProfile,
		IqActions.actionGetConversation,
		IqActions.actionGetExpert,
		IqActions.actionGetListing,
		IqActions.actionGetMarketplaceSeller,
		IqActions.actionGetPaymentRequest,
		IqActions.actionGetProposal,
		IqActions.actionGetRequest,
		IqActions.actionGetReview,
		IqActions.ListConversations,
		IqActions.ListExpertAccessLogs,
		IqActions.ListListings,
		IqActions.ListPaymentRequests,
		IqActions.ListProposals,
		IqActions.ListRequests,
		IqActions.ListReviews,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IqActions.AcceptCall,
		IqActions.ApprovePaymentRequest,
		IqActions.ApproveProposal,
		IqActions.ArchiveConversation,
		IqActions.CompleteProposal,
		IqActions.CreateConversation,
		IqActions.CreateExpert,
		IqActions.CreateListing,
		IqActions.CreateMilestoneProposal,
		IqActions.CreatePaymentRequest,
		IqActions.CreateProject,
		IqActions.CreateRequest,
		IqActions.CreateScheduledProposal,
		IqActions.CreateSeller,
		IqActions.CreateUpfrontProposal,
		IqActions.DeclineCall,
		IqActions.DeleteAttachment,
		IqActions.DisableIndividualPublicProfile,
		IqActions.EnableIndividualPublicProfile,
		IqActions.EndCall,
		IqActions.HideRequest,
		IqActions.InitiateCall,
		IqActions.LinkAwsCertification,
		IqActions.MarkChatMessageRead,
		IqActions.RejectPaymentRequest,
		IqActions.RejectProposal,
		IqActions.SendCompanyChatMessage,
		IqActions.SendIndividualChatMessage,
		IqActions.UnarchiveConversation,
		IqActions.UnlinkAwsCertification,
		IqActions.UpdateCompanyProfile,
		IqActions.UpdateConversationMembers,
		IqActions.UpdateExpert,
		IqActions.UpdateListing,
		IqActions.UpdateRequest,
		IqActions.UploadAttachment,
		IqActions.WithdrawPaymentRequest,
		IqActions.WithdrawProposal,
		IqActions.WriteReview,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [IqActions.ListAttachments];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a attachment ARN.
 */
export interface IqAttachmentArnProps {
	/** The AttachmentId component of the ARN. */
	readonly attachmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a attachment ARN.
 */
export interface IqAttachmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AttachmentId component. */
	readonly attachmentId: string;
}

/**
 * Properties for building a buyer ARN.
 */
export interface IqBuyerArnProps {
	/** The BuyerId component of the ARN. */
	readonly buyerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a buyer ARN.
 */
export interface IqBuyerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BuyerId component. */
	readonly buyerId: string;
}

/**
 * Properties for building a call ARN.
 */
export interface IqCallArnProps {
	/** The CallId component of the ARN. */
	readonly callId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a call ARN.
 */
export interface IqCallArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CallId component. */
	readonly callId: string;
}

/**
 * Properties for building a company ARN.
 */
export interface IqCompanyArnProps {
	/** The CompanyId component of the ARN. */
	readonly companyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a company ARN.
 */
export interface IqCompanyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CompanyId component. */
	readonly companyId: string;
}

/**
 * Properties for building a conversation ARN.
 */
export interface IqConversationArnProps {
	/** The ConversationId component of the ARN. */
	readonly conversationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a conversation ARN.
 */
export interface IqConversationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConversationId component. */
	readonly conversationId: string;
}

/**
 * Properties for building a expert ARN.
 */
export interface IqExpertArnProps {
	/** The ExpertId component of the ARN. */
	readonly expertId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a expert ARN.
 */
export interface IqExpertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExpertId component. */
	readonly expertId: string;
}

/**
 * Properties for building a listing ARN.
 */
export interface IqListingArnProps {
	/** The ListingId component of the ARN. */
	readonly listingId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a listing ARN.
 */
export interface IqListingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ListingId component. */
	readonly listingId: string;
}

/**
 * Properties for building a paymentRequest ARN.
 */
export interface IqPaymentRequestArnProps {
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
}

/**
 * Parsed components of a paymentRequest ARN.
 */
export interface IqPaymentRequestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConversationId component. */
	readonly conversationId: string;
	/** The ProposalId component. */
	readonly proposalId: string;
	/** The PaymentRequestId component. */
	readonly paymentRequestId: string;
}

/**
 * Properties for building a paymentSchedule ARN.
 */
export interface IqPaymentScheduleArnProps {
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
}

/**
 * Parsed components of a paymentSchedule ARN.
 */
export interface IqPaymentScheduleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConversationId component. */
	readonly conversationId: string;
	/** The ProposalId component. */
	readonly proposalId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a permission ARN.
 */
export interface IqPermissionArnProps {
	/** The PermissionRequestId component of the ARN. */
	readonly permissionRequestId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a permission ARN.
 */
export interface IqPermissionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PermissionRequestId component. */
	readonly permissionRequestId: string;
}

/**
 * Properties for building a proposal ARN.
 */
export interface IqProposalArnProps {
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
}

/**
 * Parsed components of a proposal ARN.
 */
export interface IqProposalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConversationId component. */
	readonly conversationId: string;
	/** The ProposalId component. */
	readonly proposalId: string;
}

/**
 * Properties for building a request ARN.
 */
export interface IqRequestArnProps {
	/** The RequestId component of the ARN. */
	readonly requestId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a request ARN.
 */
export interface IqRequestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RequestId component. */
	readonly requestId: string;
}

/**
 * Properties for building a seller ARN.
 */
export interface IqSellerArnProps {
	/** The SellerAwsAccountId component of the ARN. */
	readonly sellerAWSAccountId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a seller ARN.
 */
export interface IqSellerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SellerAwsAccountId component. */
	readonly sellerAWSAccountId: string;
}

/**
 * Properties for building a token ARN.
 */
export interface IqTokenArnProps {
	/** The TokenId component of the ARN. */
	readonly tokenId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a token ARN.
 */
export interface IqTokenArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TokenId component. */
	readonly tokenId: string;
}

const AttachmentArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::attachment\/(?<attachmentId>[^:/?]+)$/;
const BuyerArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::buyer\/(?<buyerId>[^:/?]+)$/;
const CallArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::call\/(?<callId>[^:/?]+)$/;
const CompanyArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::company\/(?<companyId>[^:/?]+)$/;
const ConversationArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::conversation\/(?<conversationId>[^:/?]+)$/;
const ExpertArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::expert\/(?<expertId>[^:/?]+)$/;
const ListingArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::listing\/(?<listingId>[^:/?]+)$/;
const PaymentRequestArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::paymentRequest\/(?<conversationId>[^:/?]+)\/(?<proposalId>[^:/?]+)\/(?<paymentRequestId>[^:/?]+)$/;
const PaymentScheduleArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::paymentSchedule\/(?<conversationId>[^:/?]+)\/(?<proposalId>[^:/?]+)\/(?<versionId>[^:/?]+)$/;
const PermissionArnRegex =
	/^arn:(?<partition>[^:]+):iq-permission:(?<region>[^:]*)::permission\/(?<permissionRequestId>[^:/?]+)$/;
const ProposalArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::proposal\/(?<conversationId>[^:/?]+)\/(?<proposalId>[^:/?]+)$/;
const RequestArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::request\/(?<requestId>[^:/?]+)$/;
const SellerArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::seller\/(?<sellerAWSAccountId>[^:/?]+)$/;
const TokenArnRegex =
	/^arn:(?<partition>[^:]+):iq:(?<region>[^:]*)::token\/(?<tokenId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iq resources.
 */
export class IqResources {
	/**
	 * Builds an ARN for the attachment resource.
	 */
	static attachment(props: IqAttachmentArnProps): string {
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
	static parseAttachmentArn(arn: string): IqAttachmentArnComponents {
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
	static buyer(props: IqBuyerArnProps): string {
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
	static parseBuyerArn(arn: string): IqBuyerArnComponents {
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
	static call(props: IqCallArnProps): string {
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
	static parseCallArn(arn: string): IqCallArnComponents {
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
	static company(props: IqCompanyArnProps): string {
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
	static parseCompanyArn(arn: string): IqCompanyArnComponents {
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
	static conversation(props: IqConversationArnProps): string {
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
	static parseConversationArn(arn: string): IqConversationArnComponents {
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
	static expert(props: IqExpertArnProps): string {
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
	static parseExpertArn(arn: string): IqExpertArnComponents {
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
	static listing(props: IqListingArnProps): string {
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
	static parseListingArn(arn: string): IqListingArnComponents {
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
	static paymentRequest(props: IqPaymentRequestArnProps): string {
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
	static parsePaymentRequestArn(arn: string): IqPaymentRequestArnComponents {
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
	static paymentSchedule(props: IqPaymentScheduleArnProps): string {
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
	static parsePaymentScheduleArn(arn: string): IqPaymentScheduleArnComponents {
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
	static permission(props: IqPermissionArnProps): string {
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
	static parsePermissionArn(arn: string): IqPermissionArnComponents {
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
	static proposal(props: IqProposalArnProps): string {
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
	static parseProposalArn(arn: string): IqProposalArnComponents {
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
	static request(props: IqRequestArnProps): string {
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
	static parseRequestArn(arn: string): IqRequestArnComponents {
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
	static seller(props: IqSellerArnProps): string {
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
	static parseSellerArn(arn: string): IqSellerArnComponents {
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
	static token(props: IqTokenArnProps): string {
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
	static parseTokenArn(arn: string): IqTokenArnComponents {
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
