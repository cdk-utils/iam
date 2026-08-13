// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aws-marketplace.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aws-marketplace service.
 */
export class AWSMarketplaceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aws-marketplace";

	/** [Write] aws-marketplace:AcceptAgreementApprovalRequest */
	static readonly ACCEPT_AGREEMENT_APPROVAL_REQUEST =
		"aws-marketplace:AcceptAgreementApprovalRequest";
	/** [Write] aws-marketplace:AcceptAgreementCancellationRequest */
	static readonly ACCEPT_AGREEMENT_CANCELLATION_REQUEST =
		"aws-marketplace:AcceptAgreementCancellationRequest";
	/** [Write] aws-marketplace:AcceptAgreementPaymentRequest */
	static readonly ACCEPT_AGREEMENT_PAYMENT_REQUEST =
		"aws-marketplace:AcceptAgreementPaymentRequest";
	/** [Write] aws-marketplace:AcceptAgreementRequest */
	static readonly ACCEPT_AGREEMENT_REQUEST =
		"aws-marketplace:AcceptAgreementRequest";
	/** [Write] aws-marketplace:AssociateProductsWithPrivateMarketplace */
	static readonly ASSOCIATE_PRODUCTS_WITH_PRIVATE_MARKETPLACE =
		"aws-marketplace:AssociateProductsWithPrivateMarketplace";
	/** [Write] aws-marketplace:BatchCreateBillingAdjustmentRequest */
	static readonly BATCH_CREATE_BILLING_ADJUSTMENT_REQUEST =
		"aws-marketplace:BatchCreateBillingAdjustmentRequest";
	/** [Write] aws-marketplace:BatchMeterUsage */
	static readonly BATCH_METER_USAGE = "aws-marketplace:BatchMeterUsage";
	/** [Write] aws-marketplace:CancelAgreement */
	static readonly CANCEL_AGREEMENT = "aws-marketplace:CancelAgreement";
	/** [Write] aws-marketplace:CancelAgreementCancellationRequest */
	static readonly CANCEL_AGREEMENT_CANCELLATION_REQUEST =
		"aws-marketplace:CancelAgreementCancellationRequest";
	/** [Write] aws-marketplace:CancelAgreementPaymentRequest */
	static readonly CANCEL_AGREEMENT_PAYMENT_REQUEST =
		"aws-marketplace:CancelAgreementPaymentRequest";
	/** [Write] aws-marketplace:CancelAgreementRequest */
	static readonly CANCEL_AGREEMENT_REQUEST =
		"aws-marketplace:CancelAgreementRequest";
	/** [Write] aws-marketplace:CancelChangeSet */
	static readonly CANCEL_CHANGE_SET = "aws-marketplace:CancelChangeSet";
	/** [Write] aws-marketplace:CreateAgreementRequest */
	static readonly CREATE_AGREEMENT_REQUEST =
		"aws-marketplace:CreateAgreementRequest";
	/** [Write] aws-marketplace:CreatePrivateMarketplaceRequests */
	static readonly CREATE_PRIVATE_MARKETPLACE_REQUESTS =
		"aws-marketplace:CreatePrivateMarketplaceRequests";
	/** [Write] aws-marketplace:CreateVerificationEvidence */
	static readonly CREATE_VERIFICATION_EVIDENCE =
		"aws-marketplace:CreateVerificationEvidence";
	/** [PermissionManagement] aws-marketplace:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"aws-marketplace:DeleteResourcePolicy";
	/** [Read] aws-marketplace:DescribeAgreement */
	static readonly DESCRIBE_AGREEMENT = "aws-marketplace:DescribeAgreement";
	/** [Read] aws-marketplace:DescribeAssessment */
	static readonly DESCRIBE_ASSESSMENT = "aws-marketplace:DescribeAssessment";
	/** [Read] aws-marketplace:DescribeBuilds */
	static readonly DESCRIBE_BUILDS = "aws-marketplace:DescribeBuilds";
	/** [Read] aws-marketplace:DescribeChangeSet */
	static readonly DESCRIBE_CHANGE_SET = "aws-marketplace:DescribeChangeSet";
	/** [Read] aws-marketplace:DescribeEntity */
	static readonly DESCRIBE_ENTITY = "aws-marketplace:DescribeEntity";
	/** [List] aws-marketplace:DescribePrivateMarketplaceRequests */
	static readonly DESCRIBE_PRIVATE_MARKETPLACE_REQUESTS =
		"aws-marketplace:DescribePrivateMarketplaceRequests";
	/** [Read] aws-marketplace:DescribeProcurementSystemConfiguration */
	static readonly DESCRIBE_PROCUREMENT_SYSTEM_CONFIGURATION =
		"aws-marketplace:DescribeProcurementSystemConfiguration";
	/** [Write] aws-marketplace:DisassociateProductsFromPrivateMarketplace */
	static readonly DISASSOCIATE_PRODUCTS_FROM_PRIVATE_MARKETPLACE =
		"aws-marketplace:DisassociateProductsFromPrivateMarketplace";
	/** [Read] aws-marketplace:GetAgreementApprovalRequest */
	static readonly GET_AGREEMENT_APPROVAL_REQUEST =
		"aws-marketplace:GetAgreementApprovalRequest";
	/** [Read] aws-marketplace:GetAgreementCancellationRequest */
	static readonly GET_AGREEMENT_CANCELLATION_REQUEST =
		"aws-marketplace:GetAgreementCancellationRequest";
	/** [Read] aws-marketplace:GetAgreementEntitlements */
	static readonly GET_AGREEMENT_ENTITLEMENTS =
		"aws-marketplace:GetAgreementEntitlements";
	/** [Read] aws-marketplace:GetAgreementPaymentRequest */
	static readonly GET_AGREEMENT_PAYMENT_REQUEST =
		"aws-marketplace:GetAgreementPaymentRequest";
	/** [Read] aws-marketplace:GetAgreementRequest */
	static readonly GET_AGREEMENT_REQUEST = "aws-marketplace:GetAgreementRequest";
	/** [List] aws-marketplace:GetAgreementTerms */
	static readonly GET_AGREEMENT_TERMS = "aws-marketplace:GetAgreementTerms";
	/** [Read] aws-marketplace:GetBillingAdjustmentRequest */
	static readonly GET_BILLING_ADJUSTMENT_REQUEST =
		"aws-marketplace:GetBillingAdjustmentRequest";
	/** [Read] aws-marketplace:GetBuyerDashboard */
	static readonly GET_BUYER_DASHBOARD = "aws-marketplace:GetBuyerDashboard";
	/** [Read] aws-marketplace:GetEntitlements */
	static readonly GET_ENTITLEMENTS = "aws-marketplace:GetEntitlements";
	/** [Read] aws-marketplace:GetInvoiceSubmissionTask */
	static readonly GET_INVOICE_SUBMISSION_TASK =
		"aws-marketplace:GetInvoiceSubmissionTask";
	/** [Read] aws-marketplace:GetIssuedTaxInvoice */
	static readonly GET_ISSUED_TAX_INVOICE =
		"aws-marketplace:GetIssuedTaxInvoice";
	/** [Read] aws-marketplace:GetListing */
	static readonly GET_LISTING = "aws-marketplace:GetListing";
	/** [Read] aws-marketplace:GetOffer */
	static readonly GET_OFFER = "aws-marketplace:GetOffer";
	/** [Read] aws-marketplace:GetOfferSet */
	static readonly GET_OFFER_SET = "aws-marketplace:GetOfferSet";
	/** [Read] aws-marketplace:GetOfferTerms */
	static readonly GET_OFFER_TERMS = "aws-marketplace:GetOfferTerms";
	/** [Read] aws-marketplace:GetProduct */
	static readonly GET_PRODUCT = "aws-marketplace:GetProduct";
	/** [Read] aws-marketplace:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "aws-marketplace:GetResourcePolicy";
	/** [Read] aws-marketplace:GetSellerDashboard */
	static readonly GET_SELLER_DASHBOARD = "aws-marketplace:GetSellerDashboard";
	/** [Read] aws-marketplace:GetTaxComplianceProfile */
	static readonly GET_TAX_COMPLIANCE_PROFILE =
		"aws-marketplace:GetTaxComplianceProfile";
	/** [Read] aws-marketplace:GetVerification */
	static readonly GET_VERIFICATION = "aws-marketplace:GetVerification";
	/** [Read] aws-marketplace:GetVerificationEvidence */
	static readonly GET_VERIFICATION_EVIDENCE =
		"aws-marketplace:GetVerificationEvidence";
	/** [List] aws-marketplace:ListAgreementApprovalRequests */
	static readonly LIST_AGREEMENT_APPROVAL_REQUESTS =
		"aws-marketplace:ListAgreementApprovalRequests";
	/** [List] aws-marketplace:ListAgreementCancellationRequests */
	static readonly LIST_AGREEMENT_CANCELLATION_REQUESTS =
		"aws-marketplace:ListAgreementCancellationRequests";
	/** [List] aws-marketplace:ListAgreementCharges */
	static readonly LIST_AGREEMENT_CHARGES =
		"aws-marketplace:ListAgreementCharges";
	/** [List] aws-marketplace:ListAgreementInvoiceLineItems */
	static readonly LIST_AGREEMENT_INVOICE_LINE_ITEMS =
		"aws-marketplace:ListAgreementInvoiceLineItems";
	/** [List] aws-marketplace:ListAgreementPaymentRequests */
	static readonly LIST_AGREEMENT_PAYMENT_REQUESTS =
		"aws-marketplace:ListAgreementPaymentRequests";
	/** [List] aws-marketplace:ListAgreementRequests */
	static readonly LIST_AGREEMENT_REQUESTS =
		"aws-marketplace:ListAgreementRequests";
	/** [List] aws-marketplace:ListAssessments */
	static readonly LIST_ASSESSMENTS = "aws-marketplace:ListAssessments";
	/** [List] aws-marketplace:ListBillingAdjustmentRequests */
	static readonly LIST_BILLING_ADJUSTMENT_REQUESTS =
		"aws-marketplace:ListBillingAdjustmentRequests";
	/** [Read] aws-marketplace:ListBuilds */
	static readonly LIST_BUILDS = "aws-marketplace:ListBuilds";
	/** [List] aws-marketplace:ListChangeSets */
	static readonly LIST_CHANGE_SETS = "aws-marketplace:ListChangeSets";
	/** [List] aws-marketplace:ListEntities */
	static readonly LIST_ENTITIES = "aws-marketplace:ListEntities";
	/** [Read] aws-marketplace:ListEntitlementDetails */
	static readonly LIST_ENTITLEMENT_DETAILS =
		"aws-marketplace:ListEntitlementDetails";
	/** [List] aws-marketplace:ListFulfillmentOptions */
	static readonly LIST_FULFILLMENT_OPTIONS =
		"aws-marketplace:ListFulfillmentOptions";
	/** [List] aws-marketplace:ListInvoiceSubmissionTasks */
	static readonly LIST_INVOICE_SUBMISSION_TASKS =
		"aws-marketplace:ListInvoiceSubmissionTasks";
	/** [List] aws-marketplace:ListIssuedTaxInvoices */
	static readonly LIST_ISSUED_TAX_INVOICES =
		"aws-marketplace:ListIssuedTaxInvoices";
	/** [List] aws-marketplace:ListPayables */
	static readonly LIST_PAYABLES = "aws-marketplace:ListPayables";
	/** [List] aws-marketplace:ListPrivateListings */
	static readonly LIST_PRIVATE_LISTINGS = "aws-marketplace:ListPrivateListings";
	/** [List] aws-marketplace:ListPrivateMarketplaceRequests */
	static readonly LIST_PRIVATE_MARKETPLACE_REQUESTS =
		"aws-marketplace:ListPrivateMarketplaceRequests";
	/** [List] aws-marketplace:ListPurchaseOptions */
	static readonly LIST_PURCHASE_OPTIONS = "aws-marketplace:ListPurchaseOptions";
	/** [Read] aws-marketplace:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"aws-marketplace:ListTagsForResource";
	/** [List] aws-marketplace:ListTaxComplianceProfileChangeTasks */
	static readonly LIST_TAX_COMPLIANCE_PROFILE_CHANGE_TASKS =
		"aws-marketplace:ListTaxComplianceProfileChangeTasks";
	/** [List] aws-marketplace:ListTaxComplianceProfiles */
	static readonly LIST_TAX_COMPLIANCE_PROFILES =
		"aws-marketplace:ListTaxComplianceProfiles";
	/** [List] aws-marketplace:ListVerificationEvidence */
	static readonly LIST_VERIFICATION_EVIDENCE =
		"aws-marketplace:ListVerificationEvidence";
	/** [List] aws-marketplace:ListVerifications */
	static readonly LIST_VERIFICATIONS = "aws-marketplace:ListVerifications";
	/** [Write] aws-marketplace:MeterUsage */
	static readonly METER_USAGE = "aws-marketplace:MeterUsage";
	/** [Write] aws-marketplace:PutDeploymentParameter */
	static readonly PUT_DEPLOYMENT_PARAMETER =
		"aws-marketplace:PutDeploymentParameter";
	/** [Write] aws-marketplace:PutProcurementSystemConfiguration */
	static readonly PUT_PROCUREMENT_SYSTEM_CONFIGURATION =
		"aws-marketplace:PutProcurementSystemConfiguration";
	/** [PermissionManagement] aws-marketplace:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "aws-marketplace:PutResourcePolicy";
	/** [Write] aws-marketplace:RegisterUsage */
	static readonly REGISTER_USAGE = "aws-marketplace:RegisterUsage";
	/** [Write] aws-marketplace:RejectAgreementApprovalRequest */
	static readonly REJECT_AGREEMENT_APPROVAL_REQUEST =
		"aws-marketplace:RejectAgreementApprovalRequest";
	/** [Write] aws-marketplace:RejectAgreementCancellationRequest */
	static readonly REJECT_AGREEMENT_CANCELLATION_REQUEST =
		"aws-marketplace:RejectAgreementCancellationRequest";
	/** [Write] aws-marketplace:RejectAgreementPaymentRequest */
	static readonly REJECT_AGREEMENT_PAYMENT_REQUEST =
		"aws-marketplace:RejectAgreementPaymentRequest";
	/** [Write] aws-marketplace:ResolveCustomer */
	static readonly RESOLVE_CUSTOMER = "aws-marketplace:ResolveCustomer";
	/** [List] aws-marketplace:SearchAgreements */
	static readonly SEARCH_AGREEMENTS = "aws-marketplace:SearchAgreements";
	/** [List] aws-marketplace:SearchFacets */
	static readonly SEARCH_FACETS = "aws-marketplace:SearchFacets";
	/** [List] aws-marketplace:SearchListings */
	static readonly SEARCH_LISTINGS = "aws-marketplace:SearchListings";
	/** [Write] aws-marketplace:SendAgreementCancellationRequest */
	static readonly SEND_AGREEMENT_CANCELLATION_REQUEST =
		"aws-marketplace:SendAgreementCancellationRequest";
	/** [Write] aws-marketplace:SendAgreementPaymentRequest */
	static readonly SEND_AGREEMENT_PAYMENT_REQUEST =
		"aws-marketplace:SendAgreementPaymentRequest";
	/** [Write] aws-marketplace:StartBuild */
	static readonly START_BUILD = "aws-marketplace:StartBuild";
	/** [Write] aws-marketplace:StartChangeSet */
	static readonly START_CHANGE_SET = "aws-marketplace:StartChangeSet";
	/** [Write] aws-marketplace:StartInvoiceSubmissionTask */
	static readonly START_INVOICE_SUBMISSION_TASK =
		"aws-marketplace:StartInvoiceSubmissionTask";
	/** [Write] aws-marketplace:StartTaxComplianceProfileChangeTask */
	static readonly START_TAX_COMPLIANCE_PROFILE_CHANGE_TASK =
		"aws-marketplace:StartTaxComplianceProfileChangeTask";
	/** [Write] aws-marketplace:StartVerification */
	static readonly START_VERIFICATION = "aws-marketplace:StartVerification";
	/** [Write] aws-marketplace:Subscribe */
	static readonly SUBSCRIBE = "aws-marketplace:Subscribe";
	/** [Tagging] aws-marketplace:TagResource */
	static readonly TAG_RESOURCE = "aws-marketplace:TagResource";
	/** [Write] aws-marketplace:Unsubscribe */
	static readonly UNSUBSCRIBE = "aws-marketplace:Unsubscribe";
	/** [Tagging] aws-marketplace:UntagResource */
	static readonly UNTAG_RESOURCE = "aws-marketplace:UntagResource";
	/** [Write] aws-marketplace:UpdateAgreementApprovalRequest */
	static readonly UPDATE_AGREEMENT_APPROVAL_REQUEST =
		"aws-marketplace:UpdateAgreementApprovalRequest";
	/** [Write] aws-marketplace:UpdatePurchaseOrders */
	static readonly UPDATE_PURCHASE_ORDERS =
		"aws-marketplace:UpdatePurchaseOrders";
	/** [Write] aws-marketplace:UpdateVerificationEvidence */
	static readonly UPDATE_VERIFICATION_EVIDENCE =
		"aws-marketplace:UpdateVerificationEvidence";
	/** [List] aws-marketplace:ViewSubscriptions */
	static readonly VIEW_SUBSCRIPTIONS = "aws-marketplace:ViewSubscriptions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AWSMarketplaceActions.DESCRIBE_AGREEMENT,
		AWSMarketplaceActions.DESCRIBE_ASSESSMENT,
		AWSMarketplaceActions.DESCRIBE_BUILDS,
		AWSMarketplaceActions.DESCRIBE_CHANGE_SET,
		AWSMarketplaceActions.DESCRIBE_ENTITY,
		AWSMarketplaceActions.DESCRIBE_PROCUREMENT_SYSTEM_CONFIGURATION,
		AWSMarketplaceActions.GET_AGREEMENT_APPROVAL_REQUEST,
		AWSMarketplaceActions.GET_AGREEMENT_CANCELLATION_REQUEST,
		AWSMarketplaceActions.GET_AGREEMENT_ENTITLEMENTS,
		AWSMarketplaceActions.GET_AGREEMENT_PAYMENT_REQUEST,
		AWSMarketplaceActions.GET_AGREEMENT_REQUEST,
		AWSMarketplaceActions.GET_BILLING_ADJUSTMENT_REQUEST,
		AWSMarketplaceActions.GET_BUYER_DASHBOARD,
		AWSMarketplaceActions.GET_ENTITLEMENTS,
		AWSMarketplaceActions.GET_INVOICE_SUBMISSION_TASK,
		AWSMarketplaceActions.GET_ISSUED_TAX_INVOICE,
		AWSMarketplaceActions.GET_LISTING,
		AWSMarketplaceActions.GET_OFFER,
		AWSMarketplaceActions.GET_OFFER_SET,
		AWSMarketplaceActions.GET_OFFER_TERMS,
		AWSMarketplaceActions.GET_PRODUCT,
		AWSMarketplaceActions.GET_RESOURCE_POLICY,
		AWSMarketplaceActions.GET_SELLER_DASHBOARD,
		AWSMarketplaceActions.GET_TAX_COMPLIANCE_PROFILE,
		AWSMarketplaceActions.GET_VERIFICATION,
		AWSMarketplaceActions.GET_VERIFICATION_EVIDENCE,
		AWSMarketplaceActions.LIST_BUILDS,
		AWSMarketplaceActions.LIST_ENTITLEMENT_DETAILS,
		AWSMarketplaceActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AWSMarketplaceActions.ACCEPT_AGREEMENT_APPROVAL_REQUEST,
		AWSMarketplaceActions.ACCEPT_AGREEMENT_CANCELLATION_REQUEST,
		AWSMarketplaceActions.ACCEPT_AGREEMENT_PAYMENT_REQUEST,
		AWSMarketplaceActions.ACCEPT_AGREEMENT_REQUEST,
		AWSMarketplaceActions.ASSOCIATE_PRODUCTS_WITH_PRIVATE_MARKETPLACE,
		AWSMarketplaceActions.BATCH_CREATE_BILLING_ADJUSTMENT_REQUEST,
		AWSMarketplaceActions.BATCH_METER_USAGE,
		AWSMarketplaceActions.CANCEL_AGREEMENT,
		AWSMarketplaceActions.CANCEL_AGREEMENT_CANCELLATION_REQUEST,
		AWSMarketplaceActions.CANCEL_AGREEMENT_PAYMENT_REQUEST,
		AWSMarketplaceActions.CANCEL_AGREEMENT_REQUEST,
		AWSMarketplaceActions.CANCEL_CHANGE_SET,
		AWSMarketplaceActions.CREATE_AGREEMENT_REQUEST,
		AWSMarketplaceActions.CREATE_PRIVATE_MARKETPLACE_REQUESTS,
		AWSMarketplaceActions.CREATE_VERIFICATION_EVIDENCE,
		AWSMarketplaceActions.DISASSOCIATE_PRODUCTS_FROM_PRIVATE_MARKETPLACE,
		AWSMarketplaceActions.METER_USAGE,
		AWSMarketplaceActions.PUT_DEPLOYMENT_PARAMETER,
		AWSMarketplaceActions.PUT_PROCUREMENT_SYSTEM_CONFIGURATION,
		AWSMarketplaceActions.REGISTER_USAGE,
		AWSMarketplaceActions.REJECT_AGREEMENT_APPROVAL_REQUEST,
		AWSMarketplaceActions.REJECT_AGREEMENT_CANCELLATION_REQUEST,
		AWSMarketplaceActions.REJECT_AGREEMENT_PAYMENT_REQUEST,
		AWSMarketplaceActions.RESOLVE_CUSTOMER,
		AWSMarketplaceActions.SEND_AGREEMENT_CANCELLATION_REQUEST,
		AWSMarketplaceActions.SEND_AGREEMENT_PAYMENT_REQUEST,
		AWSMarketplaceActions.START_BUILD,
		AWSMarketplaceActions.START_CHANGE_SET,
		AWSMarketplaceActions.START_INVOICE_SUBMISSION_TASK,
		AWSMarketplaceActions.START_TAX_COMPLIANCE_PROFILE_CHANGE_TASK,
		AWSMarketplaceActions.START_VERIFICATION,
		AWSMarketplaceActions.SUBSCRIBE,
		AWSMarketplaceActions.UNSUBSCRIBE,
		AWSMarketplaceActions.UPDATE_AGREEMENT_APPROVAL_REQUEST,
		AWSMarketplaceActions.UPDATE_PURCHASE_ORDERS,
		AWSMarketplaceActions.UPDATE_VERIFICATION_EVIDENCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AWSMarketplaceActions.DESCRIBE_PRIVATE_MARKETPLACE_REQUESTS,
		AWSMarketplaceActions.GET_AGREEMENT_TERMS,
		AWSMarketplaceActions.LIST_AGREEMENT_APPROVAL_REQUESTS,
		AWSMarketplaceActions.LIST_AGREEMENT_CANCELLATION_REQUESTS,
		AWSMarketplaceActions.LIST_AGREEMENT_CHARGES,
		AWSMarketplaceActions.LIST_AGREEMENT_INVOICE_LINE_ITEMS,
		AWSMarketplaceActions.LIST_AGREEMENT_PAYMENT_REQUESTS,
		AWSMarketplaceActions.LIST_AGREEMENT_REQUESTS,
		AWSMarketplaceActions.LIST_ASSESSMENTS,
		AWSMarketplaceActions.LIST_BILLING_ADJUSTMENT_REQUESTS,
		AWSMarketplaceActions.LIST_CHANGE_SETS,
		AWSMarketplaceActions.LIST_ENTITIES,
		AWSMarketplaceActions.LIST_FULFILLMENT_OPTIONS,
		AWSMarketplaceActions.LIST_INVOICE_SUBMISSION_TASKS,
		AWSMarketplaceActions.LIST_ISSUED_TAX_INVOICES,
		AWSMarketplaceActions.LIST_PAYABLES,
		AWSMarketplaceActions.LIST_PRIVATE_LISTINGS,
		AWSMarketplaceActions.LIST_PRIVATE_MARKETPLACE_REQUESTS,
		AWSMarketplaceActions.LIST_PURCHASE_OPTIONS,
		AWSMarketplaceActions.LIST_TAX_COMPLIANCE_PROFILE_CHANGE_TASKS,
		AWSMarketplaceActions.LIST_TAX_COMPLIANCE_PROFILES,
		AWSMarketplaceActions.LIST_VERIFICATION_EVIDENCE,
		AWSMarketplaceActions.LIST_VERIFICATIONS,
		AWSMarketplaceActions.SEARCH_AGREEMENTS,
		AWSMarketplaceActions.SEARCH_FACETS,
		AWSMarketplaceActions.SEARCH_LISTINGS,
		AWSMarketplaceActions.VIEW_SUBSCRIPTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		AWSMarketplaceActions.DELETE_RESOURCE_POLICY,
		AWSMarketplaceActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AWSMarketplaceActions.TAG_RESOURCE,
		AWSMarketplaceActions.UNTAG_RESOURCE,
	];
}

const AllListingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/listing/.*$",
);
const AllPurchaseOptionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/purchaseOption/.*$",
);
const AssessmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*)::(?<catalog>[^:/?]+)/Assessment/(?<resourceId>[^:/?]+)$",
);
const ChangeSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):(?<catalog>[^:/?]+)/ChangeSet/(?<resourceId>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace::(?<account>[^:]*):(?<catalog>[^:/?]+)/ReportingData/(?<factTable>[^:/?]+)/Dashboard/(?<dashboardName>[^:/?]+)$",
);
const DeploymentParameterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):DeploymentParameter:catalogs/(?<catalogName>[^:/?]+)/products/(?<productId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const EntityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):(?<catalog>[^:/?]+)/(?<entityType>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const InvoiceSubmissionTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/invoice-submission-task/(?<resourceId>[^:/?]+)$",
);
const IssuedTaxInvoiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/issued-tax-invoice/(?<resourceId>[^:/?]+)$",
);
const ListingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/listing/(?<listingId>[^:/?]+)$",
);
const OfferArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/offer/(?<offerId>[^:/?]+)$",
);
const OfferSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/offerSet/(?<offerSetId>[^:/?]+)$",
);
const ProductArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/product/(?<productId>[^:/?]+)$",
);
const PurchaseOptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:::catalog/(?<catalogName>[^:/?]+)/purchaseOption/(?<purchaseOptionId>[^:/?]+)$",
);
const SellerDashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace::(?<account>[^:]*):(?<catalog>[^:/?]+)/ReportingData/(?<factTable>[^:/?]+)/Dashboard/(?<dashboardName>[^:/?]+)$",
);
const TaxComplianceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):tax-compliance-profile/(?<resourceId>[^:/?]+)$",
);
const TaxComplianceProfileChangeTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):tax-compliance-profile-change-task/(?<resourceId>[^:/?]+)$",
);
const VerificationEvidenceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):verification-type/(?<verificationType>[^:/?]+)/verification-evidence/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for aws-marketplace resources.
 */
export class AWSMarketplaceResources {
	/**
	 * Builds an ARN for the AllListings resource.
	 */
	static allListings(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/listing/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllListings resource.
	 */
	static isValidAllListingsArn(arn: string): boolean {
		return AllListingsArnRegex.test(arn);
	}

	/**
	 * Parses a AllListings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllListingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
	} {
		const match = AllListingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllListings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
		};
	}

	/**
	 * Builds an ARN for the AllPurchaseOptions resource.
	 */
	static allPurchaseOptions(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/purchaseOption/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllPurchaseOptions resource.
	 */
	static isValidAllPurchaseOptionsArn(arn: string): boolean {
		return AllPurchaseOptionsArnRegex.test(arn);
	}

	/**
	 * Parses a AllPurchaseOptions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllPurchaseOptionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
	} {
		const match = AllPurchaseOptionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllPurchaseOptions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
		};
	}

	/**
	 * Builds an ARN for the Assessment resource.
	 */
	static assessment(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}::${props.catalog}/Assessment/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Assessment resource.
	 */
	static isValidAssessmentArn(arn: string): boolean {
		return AssessmentArnRegex.test(arn);
	}

	/**
	 * Parses a Assessment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssessmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		resourceId: string;
	} {
		const match = AssessmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Assessment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the ChangeSet resource.
	 */
	static changeSet(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:${props.catalog}/ChangeSet/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ChangeSet resource.
	 */
	static isValidChangeSetArn(arn: string): boolean {
		return ChangeSetArnRegex.test(arn);
	}

	/**
	 * Parses a ChangeSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChangeSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		resourceId: string;
	} {
		const match = ChangeSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ChangeSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Dashboard resource.
	 */
	static dashboard(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The FactTable component of the ARN. */
		readonly factTable: string;
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace::${props.account ?? "*"}:${props.catalog}/ReportingData/${props.factTable}/Dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a Dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		account: string;
		catalog: string;
		factTable: string;
		dashboardName: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			factTable: match.groups!.factTable,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the DeploymentParameter resource.
	 */
	static deploymentParameter(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The ProductId component of the ARN. */
		readonly productId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:DeploymentParameter:catalogs/${props.catalogName}/products/${props.productId}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DeploymentParameter resource.
	 */
	static isValidDeploymentParameterArn(arn: string): boolean {
		return DeploymentParameterArnRegex.test(arn);
	}

	/**
	 * Parses a DeploymentParameter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentParameterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		productId: string;
		resourceId: string;
	} {
		const match = DeploymentParameterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DeploymentParameter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			productId: match.groups!.productId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Entity resource.
	 */
	static entity(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The EntityType component of the ARN. */
		readonly entityType: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:${props.catalog}/${props.entityType}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Entity resource.
	 */
	static isValidEntityArn(arn: string): boolean {
		return EntityArnRegex.test(arn);
	}

	/**
	 * Parses a Entity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		entityType: string;
		resourceId: string;
	} {
		const match = EntityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Entity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			entityType: match.groups!.entityType,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the InvoiceSubmissionTask resource.
	 */
	static invoiceSubmissionTask(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/invoice-submission-task/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the InvoiceSubmissionTask resource.
	 */
	static isValidInvoiceSubmissionTaskArn(arn: string): boolean {
		return InvoiceSubmissionTaskArnRegex.test(arn);
	}

	/**
	 * Parses a InvoiceSubmissionTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInvoiceSubmissionTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		resourceId: string;
	} {
		const match = InvoiceSubmissionTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid InvoiceSubmissionTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the IssuedTaxInvoice resource.
	 */
	static issuedTaxInvoice(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/issued-tax-invoice/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the IssuedTaxInvoice resource.
	 */
	static isValidIssuedTaxInvoiceArn(arn: string): boolean {
		return IssuedTaxInvoiceArnRegex.test(arn);
	}

	/**
	 * Parses a IssuedTaxInvoice ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIssuedTaxInvoiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		resourceId: string;
	} {
		const match = IssuedTaxInvoiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid IssuedTaxInvoice ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Listing resource.
	 */
	static listing(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The ListingId component of the ARN. */
		readonly listingId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/listing/${props.listingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Listing resource.
	 */
	static isValidListingArn(arn: string): boolean {
		return ListingArnRegex.test(arn);
	}

	/**
	 * Parses a Listing ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		listingId: string;
	} {
		const match = ListingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Listing ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			listingId: match.groups!.listingId,
		};
	}

	/**
	 * Builds an ARN for the Offer resource.
	 */
	static offer(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The OfferId component of the ARN. */
		readonly offerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/offer/${props.offerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Offer resource.
	 */
	static isValidOfferArn(arn: string): boolean {
		return OfferArnRegex.test(arn);
	}

	/**
	 * Parses a Offer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOfferArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		offerId: string;
	} {
		const match = OfferArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Offer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			offerId: match.groups!.offerId,
		};
	}

	/**
	 * Builds an ARN for the OfferSet resource.
	 */
	static offerSet(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The OfferSetId component of the ARN. */
		readonly offerSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/offerSet/${props.offerSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OfferSet resource.
	 */
	static isValidOfferSetArn(arn: string): boolean {
		return OfferSetArnRegex.test(arn);
	}

	/**
	 * Parses a OfferSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOfferSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		offerSetId: string;
	} {
		const match = OfferSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OfferSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			offerSetId: match.groups!.offerSetId,
		};
	}

	/**
	 * Builds an ARN for the Product resource.
	 */
	static product(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The ProductId component of the ARN. */
		readonly productId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/product/${props.productId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Product resource.
	 */
	static isValidProductArn(arn: string): boolean {
		return ProductArnRegex.test(arn);
	}

	/**
	 * Parses a Product ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		productId: string;
	} {
		const match = ProductArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Product ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			productId: match.groups!.productId,
		};
	}

	/**
	 * Builds an ARN for the PurchaseOption resource.
	 */
	static purchaseOption(props: {
		/** The CatalogName component of the ARN. */
		readonly catalogName: string;
		/** The PurchaseOptionId component of the ARN. */
		readonly purchaseOptionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:::catalog/${props.catalogName}/purchaseOption/${props.purchaseOptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PurchaseOption resource.
	 */
	static isValidPurchaseOptionArn(arn: string): boolean {
		return PurchaseOptionArnRegex.test(arn);
	}

	/**
	 * Parses a PurchaseOption ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePurchaseOptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalogName: string;
		purchaseOptionId: string;
	} {
		const match = PurchaseOptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PurchaseOption ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalogName: match.groups!.catalogName,
			purchaseOptionId: match.groups!.purchaseOptionId,
		};
	}

	/**
	 * Builds an ARN for the SellerDashboard resource.
	 */
	static sellerDashboard(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The FactTable component of the ARN. */
		readonly factTable: string;
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace::${props.account ?? "*"}:${props.catalog}/ReportingData/${props.factTable}/Dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SellerDashboard resource.
	 */
	static isValidSellerDashboardArn(arn: string): boolean {
		return SellerDashboardArnRegex.test(arn);
	}

	/**
	 * Parses a SellerDashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSellerDashboardArn(arn: string): {
		partition: string;
		account: string;
		catalog: string;
		factTable: string;
		dashboardName: string;
	} {
		const match = SellerDashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SellerDashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			factTable: match.groups!.factTable,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the TaxComplianceProfile resource.
	 */
	static taxComplianceProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:tax-compliance-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TaxComplianceProfile resource.
	 */
	static isValidTaxComplianceProfileArn(arn: string): boolean {
		return TaxComplianceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a TaxComplianceProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaxComplianceProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TaxComplianceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TaxComplianceProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the TaxComplianceProfileChangeTask resource.
	 */
	static taxComplianceProfileChangeTask(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:tax-compliance-profile-change-task/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TaxComplianceProfileChangeTask resource.
	 */
	static isValidTaxComplianceProfileChangeTaskArn(arn: string): boolean {
		return TaxComplianceProfileChangeTaskArnRegex.test(arn);
	}

	/**
	 * Parses a TaxComplianceProfileChangeTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaxComplianceProfileChangeTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TaxComplianceProfileChangeTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TaxComplianceProfileChangeTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the VerificationEvidence resource.
	 */
	static verificationEvidence(props: {
		/** The VerificationType component of the ARN. */
		readonly verificationType: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aws-marketplace:${props.region ?? "*"}:${props.account ?? "*"}:verification-type/${props.verificationType}/verification-evidence/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VerificationEvidence resource.
	 */
	static isValidVerificationEvidenceArn(arn: string): boolean {
		return VerificationEvidenceArnRegex.test(arn);
	}

	/**
	 * Parses a VerificationEvidence ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVerificationEvidenceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		verificationType: string;
		resourceId: string;
	} {
		const match = VerificationEvidenceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VerificationEvidence ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			verificationType: match.groups!.verificationType,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aws-marketplace.
 */
export class AWSMarketplaceOperations {
	/** IAM actions required for the AcceptAgreementCancellationRequest API call. */
	static readonly ACCEPT_AGREEMENT_CANCELLATION_REQUEST: string[] = [
		"aws-marketplace:AcceptAgreementCancellationRequest",
		"aws-marketplace:CancelAgreement",
	];
	/** IAM actions required for the AcceptAgreementPaymentRequest API call. */
	static readonly ACCEPT_AGREEMENT_PAYMENT_REQUEST: string[] = [
		"aws-marketplace:AcceptAgreementPaymentRequest",
		"aws-marketplace:UpdatePurchaseOrders",
	];
	/** IAM actions required for the AcceptAgreementRequest API call. */
	static readonly ACCEPT_AGREEMENT_REQUEST: string[] = [
		"aws-marketplace:AcceptAgreementRequest",
		"aws-marketplace:Subscribe",
		"aws-marketplace:UpdatePurchaseOrders",
	];
	/** IAM actions required for the BatchCreateBillingAdjustmentRequest API call. */
	static readonly BATCH_CREATE_BILLING_ADJUSTMENT_REQUEST: string[] = [
		"aws-marketplace:BatchCreateBillingAdjustmentRequest",
	];
	/** IAM actions required for the BatchDescribeEntities API call. */
	static readonly BATCH_DESCRIBE_ENTITIES: string[] = [
		"aws-marketplace:DescribeEntity",
	];
	/** IAM actions required for the BatchMeterUsage API call. */
	static readonly BATCH_METER_USAGE: string[] = [
		"aws-marketplace:BatchMeterUsage",
	];
	/** IAM actions required for the CancelAgreement API call. */
	static readonly CANCEL_AGREEMENT: string[] = [
		"aws-marketplace:CancelAgreement",
		"aws-marketplace:Unsubscribe",
	];
	/** IAM actions required for the CancelAgreementCancellationRequest API call. */
	static readonly CANCEL_AGREEMENT_CANCELLATION_REQUEST: string[] = [
		"aws-marketplace:CancelAgreementCancellationRequest",
	];
	/** IAM actions required for the CancelAgreementPaymentRequest API call. */
	static readonly CANCEL_AGREEMENT_PAYMENT_REQUEST: string[] = [
		"aws-marketplace:CancelAgreementPaymentRequest",
	];
	/** IAM actions required for the CancelChangeSet API call. */
	static readonly CANCEL_CHANGE_SET: string[] = [
		"aws-marketplace:CancelChangeSet",
	];
	/** IAM actions required for the CreateAgreementRequest API call. */
	static readonly CREATE_AGREEMENT_REQUEST: string[] = [
		"aws-marketplace:CreateAgreementRequest",
		"aws-marketplace:Subscribe",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"aws-marketplace:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeAgreement API call. */
	static readonly DESCRIBE_AGREEMENT: string[] = [
		"aws-marketplace:DescribeAgreement",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the DescribeChangeSet API call. */
	static readonly DESCRIBE_CHANGE_SET: string[] = [
		"aws-marketplace:DescribeChangeSet",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DESCRIBE_ENTITY: string[] = [
		"aws-marketplace:DescribeEntity",
	];
	/** IAM actions required for the GetAgreementCancellationRequest API call. */
	static readonly GET_AGREEMENT_CANCELLATION_REQUEST: string[] = [
		"aws-marketplace:GetAgreementCancellationRequest",
	];
	/** IAM actions required for the GetAgreementEntitlements API call. */
	static readonly GET_AGREEMENT_ENTITLEMENTS: string[] = [
		"aws-marketplace:GetAgreementEntitlements",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the GetAgreementPaymentRequest API call. */
	static readonly GET_AGREEMENT_PAYMENT_REQUEST: string[] = [
		"aws-marketplace:GetAgreementPaymentRequest",
	];
	/** IAM actions required for the GetAgreementTerms API call. */
	static readonly GET_AGREEMENT_TERMS: string[] = [
		"aws-marketplace:GetAgreementTerms",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the GetBillingAdjustmentRequest API call. */
	static readonly GET_BILLING_ADJUSTMENT_REQUEST: string[] = [
		"aws-marketplace:GetBillingAdjustmentRequest",
	];
	/** IAM actions required for the GetBuyerDashboard API call. */
	static readonly GET_BUYER_DASHBOARD: string[] = [
		"aws-marketplace:GetBuyerDashboard",
	];
	/** IAM actions required for the GetEntitlements API call. */
	static readonly GET_ENTITLEMENTS: string[] = [
		"aws-marketplace:GetEntitlements",
	];
	/** IAM actions required for the GetListing API call. */
	static readonly GET_LISTING: string[] = ["aws-marketplace:GetListing"];
	/** IAM actions required for the GetOffer API call. */
	static readonly GET_OFFER: string[] = ["aws-marketplace:GetOffer"];
	/** IAM actions required for the GetOfferSet API call. */
	static readonly GET_OFFER_SET: string[] = ["aws-marketplace:GetOfferSet"];
	/** IAM actions required for the GetOfferTerms API call. */
	static readonly GET_OFFER_TERMS: string[] = ["aws-marketplace:GetOfferTerms"];
	/** IAM actions required for the GetProduct API call. */
	static readonly GET_PRODUCT: string[] = ["aws-marketplace:GetProduct"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"aws-marketplace:GetResourcePolicy",
	];
	/** IAM actions required for the ListAgreementCancellationRequests API call. */
	static readonly LIST_AGREEMENT_CANCELLATION_REQUESTS: string[] = [
		"aws-marketplace:ListAgreementCancellationRequests",
	];
	/** IAM actions required for the ListAgreementCharges API call. */
	static readonly LIST_AGREEMENT_CHARGES: string[] = [
		"aws-marketplace:ListAgreementCharges",
	];
	/** IAM actions required for the ListAgreementInvoiceLineItems API call. */
	static readonly LIST_AGREEMENT_INVOICE_LINE_ITEMS: string[] = [
		"aws-marketplace:ListAgreementInvoiceLineItems",
	];
	/** IAM actions required for the ListAgreementPaymentRequests API call. */
	static readonly LIST_AGREEMENT_PAYMENT_REQUESTS: string[] = [
		"aws-marketplace:ListAgreementPaymentRequests",
	];
	/** IAM actions required for the ListBillingAdjustmentRequests API call. */
	static readonly LIST_BILLING_ADJUSTMENT_REQUESTS: string[] = [
		"aws-marketplace:ListBillingAdjustmentRequests",
	];
	/** IAM actions required for the ListChangeSets API call. */
	static readonly LIST_CHANGE_SETS: string[] = [
		"aws-marketplace:ListChangeSets",
	];
	/** IAM actions required for the ListEntities API call. */
	static readonly LIST_ENTITIES: string[] = [
		"aws-marketplace:DescribeEntity",
		"aws-marketplace:ListEntities",
	];
	/** IAM actions required for the ListFulfillmentOptions API call. */
	static readonly LIST_FULFILLMENT_OPTIONS: string[] = [
		"aws-marketplace:ListFulfillmentOptions",
	];
	/** IAM actions required for the ListPurchaseOptions API call. */
	static readonly LIST_PURCHASE_OPTIONS: string[] = [
		"aws-marketplace:ListPrivateListings",
		"aws-marketplace:ListPurchaseOptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aws-marketplace:ListTagsForResource",
	];
	/** IAM actions required for the MeterUsage API call. */
	static readonly METER_USAGE: string[] = ["aws-marketplace:MeterUsage"];
	/** IAM actions required for the PutDeploymentParameter API call. */
	static readonly PUT_DEPLOYMENT_PARAMETER: string[] = [
		"aws-marketplace:PutDeploymentParameter",
		"aws-marketplace:TagResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"aws-marketplace:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterUsage API call. */
	static readonly REGISTER_USAGE: string[] = ["aws-marketplace:RegisterUsage"];
	/** IAM actions required for the RejectAgreementCancellationRequest API call. */
	static readonly REJECT_AGREEMENT_CANCELLATION_REQUEST: string[] = [
		"aws-marketplace:RejectAgreementCancellationRequest",
	];
	/** IAM actions required for the RejectAgreementPaymentRequest API call. */
	static readonly REJECT_AGREEMENT_PAYMENT_REQUEST: string[] = [
		"aws-marketplace:RejectAgreementPaymentRequest",
	];
	/** IAM actions required for the ResolveCustomer API call. */
	static readonly RESOLVE_CUSTOMER: string[] = [
		"aws-marketplace:ResolveCustomer",
	];
	/** IAM actions required for the SearchAgreements API call. */
	static readonly SEARCH_AGREEMENTS: string[] = [
		"aws-marketplace:SearchAgreements",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the SearchFacets API call. */
	static readonly SEARCH_FACETS: string[] = ["aws-marketplace:SearchFacets"];
	/** IAM actions required for the SearchListings API call. */
	static readonly SEARCH_LISTINGS: string[] = [
		"aws-marketplace:SearchListings",
	];
	/** IAM actions required for the SendAgreementCancellationRequest API call. */
	static readonly SEND_AGREEMENT_CANCELLATION_REQUEST: string[] = [
		"aws-marketplace:SendAgreementCancellationRequest",
	];
	/** IAM actions required for the SendAgreementPaymentRequest API call. */
	static readonly SEND_AGREEMENT_PAYMENT_REQUEST: string[] = [
		"aws-marketplace:SendAgreementPaymentRequest",
	];
	/** IAM actions required for the StartChangeSet API call. */
	static readonly START_CHANGE_SET: string[] = [
		"aws-marketplace:DescribeAgreement",
		"aws-marketplace:DescribeChangeSet",
		"aws-marketplace:DescribeEntity",
		"aws-marketplace:GetAgreementTerms",
		"iam:PassRole",
		"dataexchange:PublishDataSet",
		"aws-marketplace:StartChangeSet",
		"aws-marketplace:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aws-marketplace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aws-marketplace:UntagResource"];
	/** IAM actions required for the UpdatePurchaseOrders API call. */
	static readonly UPDATE_PURCHASE_ORDERS: string[] = [
		"aws-marketplace:UpdatePurchaseOrders",
	];
}

/**
 * Condition key constants and builders for aws-marketplace.
 */
export class AWSMarketplaceConditions {
	/** Condition keys applicable to the AcceptAgreementCancellationRequest action. */
	static readonly ACCEPT_AGREEMENT_CANCELLATION_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the AcceptAgreementPaymentRequest action. */
	static readonly ACCEPT_AGREEMENT_PAYMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the AcceptAgreementRequest action. */
	static readonly ACCEPT_AGREEMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:ProductId",
	];
	/** Condition keys applicable to the BatchCreateBillingAdjustmentRequest action. */
	static readonly BATCH_CREATE_BILLING_ADJUSTMENT_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the CancelAgreement action. */
	static readonly CANCEL_AGREEMENT_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the CancelAgreementCancellationRequest action. */
	static readonly CANCEL_AGREEMENT_CANCELLATION_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the CancelAgreementPaymentRequest action. */
	static readonly CANCEL_AGREEMENT_PAYMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the CreateAgreementRequest action. */
	static readonly CREATE_AGREEMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:ProductId",
	];
	/** Condition keys applicable to the CreateVerificationEvidence action. */
	static readonly CREATE_VERIFICATION_EVIDENCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeAgreement action. */
	static readonly DESCRIBE_AGREEMENT_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetAgreementCancellationRequest action. */
	static readonly GET_AGREEMENT_CANCELLATION_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the GetAgreementEntitlements action. */
	static readonly GET_AGREEMENT_ENTITLEMENTS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the GetAgreementPaymentRequest action. */
	static readonly GET_AGREEMENT_PAYMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetAgreementTerms action. */
	static readonly GET_AGREEMENT_TERMS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetBillingAdjustmentRequest action. */
	static readonly GET_BILLING_ADJUSTMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetVerification action. */
	static readonly GET_VERIFICATION_CONDITION_KEYS: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the ListAgreementCancellationRequests action. */
	static readonly LIST_AGREEMENT_CANCELLATION_REQUESTS_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the ListAgreementCharges action. */
	static readonly LIST_AGREEMENT_CHARGES_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the ListAgreementInvoiceLineItems action. */
	static readonly LIST_AGREEMENT_INVOICE_LINE_ITEMS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListAgreementPaymentRequests action. */
	static readonly LIST_AGREEMENT_PAYMENT_REQUESTS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListBillingAdjustmentRequests action. */
	static readonly LIST_BILLING_ADJUSTMENT_REQUESTS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListVerifications action. */
	static readonly LIST_VERIFICATIONS_CONDITION_KEYS: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the PutDeploymentParameter action. */
	static readonly PUT_DEPLOYMENT_PARAMETER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RejectAgreementCancellationRequest action. */
	static readonly REJECT_AGREEMENT_CANCELLATION_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the RejectAgreementPaymentRequest action. */
	static readonly REJECT_AGREEMENT_PAYMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the SearchAgreements action. */
	static readonly SEARCH_AGREEMENTS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the SendAgreementCancellationRequest action. */
	static readonly SEND_AGREEMENT_CANCELLATION_REQUEST_CONDITION_KEYS: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the SendAgreementPaymentRequest action. */
	static readonly SEND_AGREEMENT_PAYMENT_REQUEST_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the StartChangeSet action. */
	static readonly START_CHANGE_SET_CONDITION_KEYS: string[] = [
		"aws-marketplace:Intent",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"catalog:ChangeType",
	];
	/** Condition keys applicable to the StartInvoiceSubmissionTask action. */
	static readonly START_INVOICE_SUBMISSION_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTaxComplianceProfileChangeTask action. */
	static readonly START_TAX_COMPLIANCE_PROFILE_CHANGE_TASK_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the StartVerification action. */
	static readonly START_VERIFICATION_CONDITION_KEYS: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrders action. */
	static readonly UPDATE_PURCHASE_ORDERS_CONDITION_KEYS: string[] = [
		"aws-marketplace:AgreementType",
	];

	/** Condition key: aws-marketplace:AgreementType (ArrayOfString) */
	static readonly AGREEMENT_TYPE = "aws-marketplace:AgreementType";
	/** Condition key: aws-marketplace:Intent (String) */
	static readonly INTENT = "aws-marketplace:Intent";
	/** Condition key: aws-marketplace:PartyType (String) */
	static readonly PARTY_TYPE = "aws-marketplace:PartyType";
	/** Condition key: aws-marketplace:ProductId (ArrayOfString) */
	static readonly PRODUCT_ID = "aws-marketplace:ProductId";
	/** Condition key: aws-marketplace:VerificationType (String) */
	static readonly VERIFICATION_TYPE = "aws-marketplace:VerificationType";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: catalog:ChangeType (String) */
	static readonly CHANGE_TYPE = "catalog:ChangeType";

	/**
	 * Generates a condition block for `aws-marketplace:AgreementType`.
	 */
	static agreementType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "aws-marketplace:AgreementType": values },
		};
	}

	/**
	 * Generates a condition block for `aws-marketplace:Intent`.
	 */
	static intent(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws-marketplace:Intent": value } };
	}

	/**
	 * Generates a condition block for `aws-marketplace:PartyType`.
	 */
	static partyType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws-marketplace:PartyType": value } };
	}

	/**
	 * Generates a condition block for `aws-marketplace:ProductId`.
	 */
	static productId(values: string[]): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "aws-marketplace:ProductId": values },
		};
	}

	/**
	 * Generates a condition block for `aws-marketplace:VerificationType`.
	 */
	static verificationType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "aws-marketplace:VerificationType": value } };
	}

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
