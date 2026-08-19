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
	static readonly AcceptAgreementApprovalRequest =
		"aws-marketplace:AcceptAgreementApprovalRequest";
	/** [Write] aws-marketplace:AcceptAgreementCancellationRequest */
	static readonly AcceptAgreementCancellationRequest =
		"aws-marketplace:AcceptAgreementCancellationRequest";
	/** [Write] aws-marketplace:AcceptAgreementPaymentRequest */
	static readonly AcceptAgreementPaymentRequest =
		"aws-marketplace:AcceptAgreementPaymentRequest";
	/** [Write] aws-marketplace:AcceptAgreementRequest */
	static readonly AcceptAgreementRequest =
		"aws-marketplace:AcceptAgreementRequest";
	/** [Write] aws-marketplace:AssociateProductsWithPrivateMarketplace */
	static readonly AssociateProductsWithPrivateMarketplace =
		"aws-marketplace:AssociateProductsWithPrivateMarketplace";
	/** [Write] aws-marketplace:BatchCreateBillingAdjustmentRequest */
	static readonly BatchCreateBillingAdjustmentRequest =
		"aws-marketplace:BatchCreateBillingAdjustmentRequest";
	/** [Write] aws-marketplace:BatchMeterUsage */
	static readonly BatchMeterUsage = "aws-marketplace:BatchMeterUsage";
	/** [Write] aws-marketplace:CancelAgreement */
	static readonly CancelAgreement = "aws-marketplace:CancelAgreement";
	/** [Write] aws-marketplace:CancelAgreementCancellationRequest */
	static readonly CancelAgreementCancellationRequest =
		"aws-marketplace:CancelAgreementCancellationRequest";
	/** [Write] aws-marketplace:CancelAgreementPaymentRequest */
	static readonly CancelAgreementPaymentRequest =
		"aws-marketplace:CancelAgreementPaymentRequest";
	/** [Write] aws-marketplace:CancelAgreementRequest */
	static readonly CancelAgreementRequest =
		"aws-marketplace:CancelAgreementRequest";
	/** [Write] aws-marketplace:CancelChangeSet */
	static readonly CancelChangeSet = "aws-marketplace:CancelChangeSet";
	/** [Write] aws-marketplace:CreateAgreementRequest */
	static readonly CreateAgreementRequest =
		"aws-marketplace:CreateAgreementRequest";
	/** [Write] aws-marketplace:CreatePrivateMarketplaceRequests */
	static readonly CreatePrivateMarketplaceRequests =
		"aws-marketplace:CreatePrivateMarketplaceRequests";
	/** [Write] aws-marketplace:CreateVerificationEvidence */
	static readonly CreateVerificationEvidence =
		"aws-marketplace:CreateVerificationEvidence";
	/** [PermissionManagement] aws-marketplace:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "aws-marketplace:DeleteResourcePolicy";
	/** [Read] aws-marketplace:DescribeAgreement */
	static readonly DescribeAgreement = "aws-marketplace:DescribeAgreement";
	/** [Read] aws-marketplace:DescribeAssessment */
	static readonly DescribeAssessment = "aws-marketplace:DescribeAssessment";
	/** [Read] aws-marketplace:DescribeBuilds */
	static readonly DescribeBuilds = "aws-marketplace:DescribeBuilds";
	/** [Read] aws-marketplace:DescribeChangeSet */
	static readonly DescribeChangeSet = "aws-marketplace:DescribeChangeSet";
	/** [Read] aws-marketplace:DescribeEntity */
	static readonly DescribeEntity = "aws-marketplace:DescribeEntity";
	/** [List] aws-marketplace:DescribePrivateMarketplaceRequests */
	static readonly DescribePrivateMarketplaceRequests =
		"aws-marketplace:DescribePrivateMarketplaceRequests";
	/** [Read] aws-marketplace:DescribeProcurementSystemConfiguration */
	static readonly DescribeProcurementSystemConfiguration =
		"aws-marketplace:DescribeProcurementSystemConfiguration";
	/** [Write] aws-marketplace:DisassociateProductsFromPrivateMarketplace */
	static readonly DisassociateProductsFromPrivateMarketplace =
		"aws-marketplace:DisassociateProductsFromPrivateMarketplace";
	/** [Read] aws-marketplace:GetAgreementApprovalRequest */
	static readonly actionGetAgreementApprovalRequest =
		"aws-marketplace:GetAgreementApprovalRequest";
	/** [Read] aws-marketplace:GetAgreementCancellationRequest */
	static readonly actionGetAgreementCancellationRequest =
		"aws-marketplace:GetAgreementCancellationRequest";
	/** [Read] aws-marketplace:GetAgreementEntitlements */
	static readonly actionGetAgreementEntitlements =
		"aws-marketplace:GetAgreementEntitlements";
	/** [Read] aws-marketplace:GetAgreementPaymentRequest */
	static readonly actionGetAgreementPaymentRequest =
		"aws-marketplace:GetAgreementPaymentRequest";
	/** [Read] aws-marketplace:GetAgreementRequest */
	static readonly actionGetAgreementRequest =
		"aws-marketplace:GetAgreementRequest";
	/** [List] aws-marketplace:GetAgreementTerms */
	static readonly actionGetAgreementTerms = "aws-marketplace:GetAgreementTerms";
	/** [Read] aws-marketplace:GetBillingAdjustmentRequest */
	static readonly actionGetBillingAdjustmentRequest =
		"aws-marketplace:GetBillingAdjustmentRequest";
	/** [Read] aws-marketplace:GetBuyerDashboard */
	static readonly actionGetBuyerDashboard = "aws-marketplace:GetBuyerDashboard";
	/** [Read] aws-marketplace:GetEntitlements */
	static readonly actionGetEntitlements = "aws-marketplace:GetEntitlements";
	/** [Read] aws-marketplace:GetInvoiceSubmissionTask */
	static readonly actionGetInvoiceSubmissionTask =
		"aws-marketplace:GetInvoiceSubmissionTask";
	/** [Read] aws-marketplace:GetIssuedTaxInvoice */
	static readonly actionGetIssuedTaxInvoice =
		"aws-marketplace:GetIssuedTaxInvoice";
	/** [Read] aws-marketplace:GetListing */
	static readonly actionGetListing = "aws-marketplace:GetListing";
	/** [Read] aws-marketplace:GetOffer */
	static readonly actionGetOffer = "aws-marketplace:GetOffer";
	/** [Read] aws-marketplace:GetOfferSet */
	static readonly actionGetOfferSet = "aws-marketplace:GetOfferSet";
	/** [Read] aws-marketplace:GetOfferTerms */
	static readonly actionGetOfferTerms = "aws-marketplace:GetOfferTerms";
	/** [Read] aws-marketplace:GetProduct */
	static readonly actionGetProduct = "aws-marketplace:GetProduct";
	/** [Read] aws-marketplace:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "aws-marketplace:GetResourcePolicy";
	/** [Read] aws-marketplace:GetSellerDashboard */
	static readonly actionGetSellerDashboard =
		"aws-marketplace:GetSellerDashboard";
	/** [Read] aws-marketplace:GetTaxComplianceProfile */
	static readonly actionGetTaxComplianceProfile =
		"aws-marketplace:GetTaxComplianceProfile";
	/** [Read] aws-marketplace:GetVerification */
	static readonly actionGetVerification = "aws-marketplace:GetVerification";
	/** [Read] aws-marketplace:GetVerificationEvidence */
	static readonly actionGetVerificationEvidence =
		"aws-marketplace:GetVerificationEvidence";
	/** [List] aws-marketplace:ListAgreementApprovalRequests */
	static readonly ListAgreementApprovalRequests =
		"aws-marketplace:ListAgreementApprovalRequests";
	/** [List] aws-marketplace:ListAgreementCancellationRequests */
	static readonly ListAgreementCancellationRequests =
		"aws-marketplace:ListAgreementCancellationRequests";
	/** [List] aws-marketplace:ListAgreementCharges */
	static readonly ListAgreementCharges = "aws-marketplace:ListAgreementCharges";
	/** [List] aws-marketplace:ListAgreementInvoiceLineItems */
	static readonly ListAgreementInvoiceLineItems =
		"aws-marketplace:ListAgreementInvoiceLineItems";
	/** [List] aws-marketplace:ListAgreementPaymentRequests */
	static readonly ListAgreementPaymentRequests =
		"aws-marketplace:ListAgreementPaymentRequests";
	/** [List] aws-marketplace:ListAgreementRequests */
	static readonly ListAgreementRequests =
		"aws-marketplace:ListAgreementRequests";
	/** [List] aws-marketplace:ListAssessments */
	static readonly ListAssessments = "aws-marketplace:ListAssessments";
	/** [List] aws-marketplace:ListBillingAdjustmentRequests */
	static readonly ListBillingAdjustmentRequests =
		"aws-marketplace:ListBillingAdjustmentRequests";
	/** [Read] aws-marketplace:ListBuilds */
	static readonly ListBuilds = "aws-marketplace:ListBuilds";
	/** [List] aws-marketplace:ListChangeSets */
	static readonly ListChangeSets = "aws-marketplace:ListChangeSets";
	/** [List] aws-marketplace:ListEntities */
	static readonly ListEntities = "aws-marketplace:ListEntities";
	/** [Read] aws-marketplace:ListEntitlementDetails */
	static readonly ListEntitlementDetails =
		"aws-marketplace:ListEntitlementDetails";
	/** [List] aws-marketplace:ListFulfillmentOptions */
	static readonly ListFulfillmentOptions =
		"aws-marketplace:ListFulfillmentOptions";
	/** [List] aws-marketplace:ListInvoiceSubmissionTasks */
	static readonly ListInvoiceSubmissionTasks =
		"aws-marketplace:ListInvoiceSubmissionTasks";
	/** [List] aws-marketplace:ListIssuedTaxInvoices */
	static readonly ListIssuedTaxInvoices =
		"aws-marketplace:ListIssuedTaxInvoices";
	/** [List] aws-marketplace:ListPayables */
	static readonly ListPayables = "aws-marketplace:ListPayables";
	/** [List] aws-marketplace:ListPrivateListings */
	static readonly ListPrivateListings = "aws-marketplace:ListPrivateListings";
	/** [List] aws-marketplace:ListPrivateMarketplaceRequests */
	static readonly ListPrivateMarketplaceRequests =
		"aws-marketplace:ListPrivateMarketplaceRequests";
	/** [List] aws-marketplace:ListPurchaseOptions */
	static readonly ListPurchaseOptions = "aws-marketplace:ListPurchaseOptions";
	/** [Read] aws-marketplace:ListTagsForResource */
	static readonly ListTagsForResource = "aws-marketplace:ListTagsForResource";
	/** [List] aws-marketplace:ListTaxComplianceProfileChangeTasks */
	static readonly ListTaxComplianceProfileChangeTasks =
		"aws-marketplace:ListTaxComplianceProfileChangeTasks";
	/** [List] aws-marketplace:ListTaxComplianceProfiles */
	static readonly ListTaxComplianceProfiles =
		"aws-marketplace:ListTaxComplianceProfiles";
	/** [List] aws-marketplace:ListVerificationEvidence */
	static readonly ListVerificationEvidence =
		"aws-marketplace:ListVerificationEvidence";
	/** [List] aws-marketplace:ListVerifications */
	static readonly ListVerifications = "aws-marketplace:ListVerifications";
	/** [Write] aws-marketplace:MeterUsage */
	static readonly MeterUsage = "aws-marketplace:MeterUsage";
	/** [Write] aws-marketplace:PutDeploymentParameter */
	static readonly PutDeploymentParameter =
		"aws-marketplace:PutDeploymentParameter";
	/** [Write] aws-marketplace:PutProcurementSystemConfiguration */
	static readonly PutProcurementSystemConfiguration =
		"aws-marketplace:PutProcurementSystemConfiguration";
	/** [PermissionManagement] aws-marketplace:PutResourcePolicy */
	static readonly PutResourcePolicy = "aws-marketplace:PutResourcePolicy";
	/** [Write] aws-marketplace:RegisterUsage */
	static readonly RegisterUsage = "aws-marketplace:RegisterUsage";
	/** [Write] aws-marketplace:RejectAgreementApprovalRequest */
	static readonly RejectAgreementApprovalRequest =
		"aws-marketplace:RejectAgreementApprovalRequest";
	/** [Write] aws-marketplace:RejectAgreementCancellationRequest */
	static readonly RejectAgreementCancellationRequest =
		"aws-marketplace:RejectAgreementCancellationRequest";
	/** [Write] aws-marketplace:RejectAgreementPaymentRequest */
	static readonly RejectAgreementPaymentRequest =
		"aws-marketplace:RejectAgreementPaymentRequest";
	/** [Write] aws-marketplace:ResolveCustomer */
	static readonly ResolveCustomer = "aws-marketplace:ResolveCustomer";
	/** [List] aws-marketplace:SearchAgreements */
	static readonly SearchAgreements = "aws-marketplace:SearchAgreements";
	/** [List] aws-marketplace:SearchFacets */
	static readonly SearchFacets = "aws-marketplace:SearchFacets";
	/** [List] aws-marketplace:SearchListings */
	static readonly SearchListings = "aws-marketplace:SearchListings";
	/** [Write] aws-marketplace:SendAgreementCancellationRequest */
	static readonly SendAgreementCancellationRequest =
		"aws-marketplace:SendAgreementCancellationRequest";
	/** [Write] aws-marketplace:SendAgreementPaymentRequest */
	static readonly SendAgreementPaymentRequest =
		"aws-marketplace:SendAgreementPaymentRequest";
	/** [Write] aws-marketplace:StartBuild */
	static readonly StartBuild = "aws-marketplace:StartBuild";
	/** [Write] aws-marketplace:StartChangeSet */
	static readonly StartChangeSet = "aws-marketplace:StartChangeSet";
	/** [Write] aws-marketplace:StartInvoiceSubmissionTask */
	static readonly StartInvoiceSubmissionTask =
		"aws-marketplace:StartInvoiceSubmissionTask";
	/** [Write] aws-marketplace:StartTaxComplianceProfileChangeTask */
	static readonly StartTaxComplianceProfileChangeTask =
		"aws-marketplace:StartTaxComplianceProfileChangeTask";
	/** [Write] aws-marketplace:StartVerification */
	static readonly StartVerification = "aws-marketplace:StartVerification";
	/** [Write] aws-marketplace:Subscribe */
	static readonly Subscribe = "aws-marketplace:Subscribe";
	/** [Tagging] aws-marketplace:TagResource */
	static readonly TagResource = "aws-marketplace:TagResource";
	/** [Write] aws-marketplace:Unsubscribe */
	static readonly Unsubscribe = "aws-marketplace:Unsubscribe";
	/** [Tagging] aws-marketplace:UntagResource */
	static readonly UntagResource = "aws-marketplace:UntagResource";
	/** [Write] aws-marketplace:UpdateAgreementApprovalRequest */
	static readonly UpdateAgreementApprovalRequest =
		"aws-marketplace:UpdateAgreementApprovalRequest";
	/** [Write] aws-marketplace:UpdatePurchaseOrders */
	static readonly UpdatePurchaseOrders = "aws-marketplace:UpdatePurchaseOrders";
	/** [Write] aws-marketplace:UpdateVerificationEvidence */
	static readonly UpdateVerificationEvidence =
		"aws-marketplace:UpdateVerificationEvidence";
	/** [List] aws-marketplace:ViewSubscriptions */
	static readonly ViewSubscriptions = "aws-marketplace:ViewSubscriptions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AWSMarketplaceActions.DescribeAgreement,
		AWSMarketplaceActions.DescribeAssessment,
		AWSMarketplaceActions.DescribeBuilds,
		AWSMarketplaceActions.DescribeChangeSet,
		AWSMarketplaceActions.DescribeEntity,
		AWSMarketplaceActions.DescribeProcurementSystemConfiguration,
		AWSMarketplaceActions.actionGetAgreementApprovalRequest,
		AWSMarketplaceActions.actionGetAgreementCancellationRequest,
		AWSMarketplaceActions.actionGetAgreementEntitlements,
		AWSMarketplaceActions.actionGetAgreementPaymentRequest,
		AWSMarketplaceActions.actionGetAgreementRequest,
		AWSMarketplaceActions.actionGetBillingAdjustmentRequest,
		AWSMarketplaceActions.actionGetBuyerDashboard,
		AWSMarketplaceActions.actionGetEntitlements,
		AWSMarketplaceActions.actionGetInvoiceSubmissionTask,
		AWSMarketplaceActions.actionGetIssuedTaxInvoice,
		AWSMarketplaceActions.actionGetListing,
		AWSMarketplaceActions.actionGetOffer,
		AWSMarketplaceActions.actionGetOfferSet,
		AWSMarketplaceActions.actionGetOfferTerms,
		AWSMarketplaceActions.actionGetProduct,
		AWSMarketplaceActions.actionGetResourcePolicy,
		AWSMarketplaceActions.actionGetSellerDashboard,
		AWSMarketplaceActions.actionGetTaxComplianceProfile,
		AWSMarketplaceActions.actionGetVerification,
		AWSMarketplaceActions.actionGetVerificationEvidence,
		AWSMarketplaceActions.ListBuilds,
		AWSMarketplaceActions.ListEntitlementDetails,
		AWSMarketplaceActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AWSMarketplaceActions.AcceptAgreementApprovalRequest,
		AWSMarketplaceActions.AcceptAgreementCancellationRequest,
		AWSMarketplaceActions.AcceptAgreementPaymentRequest,
		AWSMarketplaceActions.AcceptAgreementRequest,
		AWSMarketplaceActions.AssociateProductsWithPrivateMarketplace,
		AWSMarketplaceActions.BatchCreateBillingAdjustmentRequest,
		AWSMarketplaceActions.BatchMeterUsage,
		AWSMarketplaceActions.CancelAgreement,
		AWSMarketplaceActions.CancelAgreementCancellationRequest,
		AWSMarketplaceActions.CancelAgreementPaymentRequest,
		AWSMarketplaceActions.CancelAgreementRequest,
		AWSMarketplaceActions.CancelChangeSet,
		AWSMarketplaceActions.CreateAgreementRequest,
		AWSMarketplaceActions.CreatePrivateMarketplaceRequests,
		AWSMarketplaceActions.CreateVerificationEvidence,
		AWSMarketplaceActions.DisassociateProductsFromPrivateMarketplace,
		AWSMarketplaceActions.MeterUsage,
		AWSMarketplaceActions.PutDeploymentParameter,
		AWSMarketplaceActions.PutProcurementSystemConfiguration,
		AWSMarketplaceActions.RegisterUsage,
		AWSMarketplaceActions.RejectAgreementApprovalRequest,
		AWSMarketplaceActions.RejectAgreementCancellationRequest,
		AWSMarketplaceActions.RejectAgreementPaymentRequest,
		AWSMarketplaceActions.ResolveCustomer,
		AWSMarketplaceActions.SendAgreementCancellationRequest,
		AWSMarketplaceActions.SendAgreementPaymentRequest,
		AWSMarketplaceActions.StartBuild,
		AWSMarketplaceActions.StartChangeSet,
		AWSMarketplaceActions.StartInvoiceSubmissionTask,
		AWSMarketplaceActions.StartTaxComplianceProfileChangeTask,
		AWSMarketplaceActions.StartVerification,
		AWSMarketplaceActions.Subscribe,
		AWSMarketplaceActions.Unsubscribe,
		AWSMarketplaceActions.UpdateAgreementApprovalRequest,
		AWSMarketplaceActions.UpdatePurchaseOrders,
		AWSMarketplaceActions.UpdateVerificationEvidence,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AWSMarketplaceActions.DescribePrivateMarketplaceRequests,
		AWSMarketplaceActions.actionGetAgreementTerms,
		AWSMarketplaceActions.ListAgreementApprovalRequests,
		AWSMarketplaceActions.ListAgreementCancellationRequests,
		AWSMarketplaceActions.ListAgreementCharges,
		AWSMarketplaceActions.ListAgreementInvoiceLineItems,
		AWSMarketplaceActions.ListAgreementPaymentRequests,
		AWSMarketplaceActions.ListAgreementRequests,
		AWSMarketplaceActions.ListAssessments,
		AWSMarketplaceActions.ListBillingAdjustmentRequests,
		AWSMarketplaceActions.ListChangeSets,
		AWSMarketplaceActions.ListEntities,
		AWSMarketplaceActions.ListFulfillmentOptions,
		AWSMarketplaceActions.ListInvoiceSubmissionTasks,
		AWSMarketplaceActions.ListIssuedTaxInvoices,
		AWSMarketplaceActions.ListPayables,
		AWSMarketplaceActions.ListPrivateListings,
		AWSMarketplaceActions.ListPrivateMarketplaceRequests,
		AWSMarketplaceActions.ListPurchaseOptions,
		AWSMarketplaceActions.ListTaxComplianceProfileChangeTasks,
		AWSMarketplaceActions.ListTaxComplianceProfiles,
		AWSMarketplaceActions.ListVerificationEvidence,
		AWSMarketplaceActions.ListVerifications,
		AWSMarketplaceActions.SearchAgreements,
		AWSMarketplaceActions.SearchFacets,
		AWSMarketplaceActions.SearchListings,
		AWSMarketplaceActions.ViewSubscriptions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		AWSMarketplaceActions.DeleteResourcePolicy,
		AWSMarketplaceActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AWSMarketplaceActions.TagResource,
		AWSMarketplaceActions.UntagResource,
	];
}

/**
 * Properties for building a AllListings ARN.
 */
export interface AWSMarketplaceAllListingsArnProps {
	/** The CatalogName component of the ARN. */
	readonly catalogName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AllListings ARN.
 */
export interface AWSMarketplaceAllListingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
}

/**
 * Properties for building a AllPurchaseOptions ARN.
 */
export interface AWSMarketplaceAllPurchaseOptionsArnProps {
	/** The CatalogName component of the ARN. */
	readonly catalogName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AllPurchaseOptions ARN.
 */
export interface AWSMarketplaceAllPurchaseOptionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
}

/**
 * Properties for building a Assessment ARN.
 */
export interface AWSMarketplaceAssessmentArnProps {
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
}

/**
 * Parsed components of a Assessment ARN.
 */
export interface AWSMarketplaceAssessmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a ChangeSet ARN.
 */
export interface AWSMarketplaceChangeSetArnProps {
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
}

/**
 * Parsed components of a ChangeSet ARN.
 */
export interface AWSMarketplaceChangeSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Dashboard ARN.
 */
export interface AWSMarketplaceDashboardArnProps {
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
}

/**
 * Parsed components of a Dashboard ARN.
 */
export interface AWSMarketplaceDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The FactTable component. */
	readonly factTable: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a DeploymentParameter ARN.
 */
export interface AWSMarketplaceDeploymentParameterArnProps {
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
}

/**
 * Parsed components of a DeploymentParameter ARN.
 */
export interface AWSMarketplaceDeploymentParameterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The ProductId component. */
	readonly productId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Entity ARN.
 */
export interface AWSMarketplaceEntityArnProps {
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
}

/**
 * Parsed components of a Entity ARN.
 */
export interface AWSMarketplaceEntityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The EntityType component. */
	readonly entityType: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a InvoiceSubmissionTask ARN.
 */
export interface AWSMarketplaceInvoiceSubmissionTaskArnProps {
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
}

/**
 * Parsed components of a InvoiceSubmissionTask ARN.
 */
export interface AWSMarketplaceInvoiceSubmissionTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a IssuedTaxInvoice ARN.
 */
export interface AWSMarketplaceIssuedTaxInvoiceArnProps {
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
}

/**
 * Parsed components of a IssuedTaxInvoice ARN.
 */
export interface AWSMarketplaceIssuedTaxInvoiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Listing ARN.
 */
export interface AWSMarketplaceListingArnProps {
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
}

/**
 * Parsed components of a Listing ARN.
 */
export interface AWSMarketplaceListingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The ListingId component. */
	readonly listingId: string;
}

/**
 * Properties for building a Offer ARN.
 */
export interface AWSMarketplaceOfferArnProps {
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
}

/**
 * Parsed components of a Offer ARN.
 */
export interface AWSMarketplaceOfferArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The OfferId component. */
	readonly offerId: string;
}

/**
 * Properties for building a OfferSet ARN.
 */
export interface AWSMarketplaceOfferSetArnProps {
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
}

/**
 * Parsed components of a OfferSet ARN.
 */
export interface AWSMarketplaceOfferSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The OfferSetId component. */
	readonly offerSetId: string;
}

/**
 * Properties for building a Product ARN.
 */
export interface AWSMarketplaceProductArnProps {
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
}

/**
 * Parsed components of a Product ARN.
 */
export interface AWSMarketplaceProductArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The ProductId component. */
	readonly productId: string;
}

/**
 * Properties for building a PurchaseOption ARN.
 */
export interface AWSMarketplacePurchaseOptionArnProps {
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
}

/**
 * Parsed components of a PurchaseOption ARN.
 */
export interface AWSMarketplacePurchaseOptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CatalogName component. */
	readonly catalogName: string;
	/** The PurchaseOptionId component. */
	readonly purchaseOptionId: string;
}

/**
 * Properties for building a SellerDashboard ARN.
 */
export interface AWSMarketplaceSellerDashboardArnProps {
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
}

/**
 * Parsed components of a SellerDashboard ARN.
 */
export interface AWSMarketplaceSellerDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Catalog component. */
	readonly catalog: string;
	/** The FactTable component. */
	readonly factTable: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a TaxComplianceProfile ARN.
 */
export interface AWSMarketplaceTaxComplianceProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TaxComplianceProfile ARN.
 */
export interface AWSMarketplaceTaxComplianceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a TaxComplianceProfileChangeTask ARN.
 */
export interface AWSMarketplaceTaxComplianceProfileChangeTaskArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TaxComplianceProfileChangeTask ARN.
 */
export interface AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a VerificationEvidence ARN.
 */
export interface AWSMarketplaceVerificationEvidenceArnProps {
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
}

/**
 * Parsed components of a VerificationEvidence ARN.
 */
export interface AWSMarketplaceVerificationEvidenceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VerificationType component. */
	readonly verificationType: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AllListingsArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/listing\/.*$/;
const AllPurchaseOptionsArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/purchaseOption\/.*$/;
const AssessmentArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*)::(?<catalog>[^:/?]+)\/Assessment\/(?<resourceId>[^:/?]+)$/;
const ChangeSetArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):(?<catalog>[^:/?]+)\/ChangeSet\/(?<resourceId>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace::(?<account>[^:]*):(?<catalog>[^:/?]+)\/ReportingData\/(?<factTable>[^:/?]+)\/Dashboard\/(?<dashboardName>[^:/?]+)$/;
const DeploymentParameterArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):DeploymentParameter:catalogs\/(?<catalogName>[^:/?]+)\/products\/(?<productId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const EntityArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):(?<catalog>[^:/?]+)\/(?<entityType>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const InvoiceSubmissionTaskArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):catalog\/(?<catalog>[^:/?]+)\/invoice-submission-task\/(?<resourceId>[^:/?]+)$/;
const IssuedTaxInvoiceArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):catalog\/(?<catalog>[^:/?]+)\/issued-tax-invoice\/(?<resourceId>[^:/?]+)$/;
const ListingArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/listing\/(?<listingId>[^:/?]+)$/;
const OfferArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/offer\/(?<offerId>[^:/?]+)$/;
const OfferSetArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/offerSet\/(?<offerSetId>[^:/?]+)$/;
const ProductArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/product\/(?<productId>[^:/?]+)$/;
const PurchaseOptionArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:::catalog\/(?<catalogName>[^:/?]+)\/purchaseOption\/(?<purchaseOptionId>[^:/?]+)$/;
const SellerDashboardArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace::(?<account>[^:]*):(?<catalog>[^:/?]+)\/ReportingData\/(?<factTable>[^:/?]+)\/Dashboard\/(?<dashboardName>[^:/?]+)$/;
const TaxComplianceProfileArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):tax-compliance-profile\/(?<resourceId>[^:/?]+)$/;
const TaxComplianceProfileChangeTaskArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):tax-compliance-profile-change-task\/(?<resourceId>[^:/?]+)$/;
const VerificationEvidenceArnRegex =
	/^arn:(?<partition>[^:]+):aws-marketplace:(?<region>[^:]*):(?<account>[^:]*):verification-type\/(?<verificationType>[^:/?]+)\/verification-evidence\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aws-marketplace resources.
 */
export class AWSMarketplaceResources {
	/**
	 * Builds an ARN for the AllListings resource.
	 */
	static allListings(props: AWSMarketplaceAllListingsArnProps): string {
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
	static parseAllListingsArn(
		arn: string,
	): AWSMarketplaceAllListingsArnComponents {
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
	static allPurchaseOptions(
		props: AWSMarketplaceAllPurchaseOptionsArnProps,
	): string {
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
	static parseAllPurchaseOptionsArn(
		arn: string,
	): AWSMarketplaceAllPurchaseOptionsArnComponents {
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
	static assessment(props: AWSMarketplaceAssessmentArnProps): string {
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
	static parseAssessmentArn(
		arn: string,
	): AWSMarketplaceAssessmentArnComponents {
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
	static changeSet(props: AWSMarketplaceChangeSetArnProps): string {
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
	static parseChangeSetArn(arn: string): AWSMarketplaceChangeSetArnComponents {
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
	static dashboard(props: AWSMarketplaceDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): AWSMarketplaceDashboardArnComponents {
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
	static deploymentParameter(
		props: AWSMarketplaceDeploymentParameterArnProps,
	): string {
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
	static parseDeploymentParameterArn(
		arn: string,
	): AWSMarketplaceDeploymentParameterArnComponents {
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
	static entity(props: AWSMarketplaceEntityArnProps): string {
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
	static parseEntityArn(arn: string): AWSMarketplaceEntityArnComponents {
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
	static invoiceSubmissionTask(
		props: AWSMarketplaceInvoiceSubmissionTaskArnProps,
	): string {
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
	static parseInvoiceSubmissionTaskArn(
		arn: string,
	): AWSMarketplaceInvoiceSubmissionTaskArnComponents {
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
	static issuedTaxInvoice(
		props: AWSMarketplaceIssuedTaxInvoiceArnProps,
	): string {
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
	static parseIssuedTaxInvoiceArn(
		arn: string,
	): AWSMarketplaceIssuedTaxInvoiceArnComponents {
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
	static listing(props: AWSMarketplaceListingArnProps): string {
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
	static parseListingArn(arn: string): AWSMarketplaceListingArnComponents {
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
	static offer(props: AWSMarketplaceOfferArnProps): string {
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
	static parseOfferArn(arn: string): AWSMarketplaceOfferArnComponents {
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
	static offerSet(props: AWSMarketplaceOfferSetArnProps): string {
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
	static parseOfferSetArn(arn: string): AWSMarketplaceOfferSetArnComponents {
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
	static product(props: AWSMarketplaceProductArnProps): string {
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
	static parseProductArn(arn: string): AWSMarketplaceProductArnComponents {
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
	static purchaseOption(props: AWSMarketplacePurchaseOptionArnProps): string {
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
	static parsePurchaseOptionArn(
		arn: string,
	): AWSMarketplacePurchaseOptionArnComponents {
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
	static sellerDashboard(props: AWSMarketplaceSellerDashboardArnProps): string {
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
	static parseSellerDashboardArn(
		arn: string,
	): AWSMarketplaceSellerDashboardArnComponents {
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
	static taxComplianceProfile(
		props: AWSMarketplaceTaxComplianceProfileArnProps,
	): string {
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
	static parseTaxComplianceProfileArn(
		arn: string,
	): AWSMarketplaceTaxComplianceProfileArnComponents {
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
	static taxComplianceProfileChangeTask(
		props: AWSMarketplaceTaxComplianceProfileChangeTaskArnProps,
	): string {
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
	static parseTaxComplianceProfileChangeTaskArn(
		arn: string,
	): AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents {
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
	static verificationEvidence(
		props: AWSMarketplaceVerificationEvidenceArnProps,
	): string {
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
	static parseVerificationEvidenceArn(
		arn: string,
	): AWSMarketplaceVerificationEvidenceArnComponents {
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
	static readonly AcceptAgreementCancellationRequest: string[] = [
		"aws-marketplace:AcceptAgreementCancellationRequest",
		"aws-marketplace:CancelAgreement",
	];
	/** IAM actions required for the AcceptAgreementPaymentRequest API call. */
	static readonly AcceptAgreementPaymentRequest: string[] = [
		"aws-marketplace:AcceptAgreementPaymentRequest",
		"aws-marketplace:UpdatePurchaseOrders",
	];
	/** IAM actions required for the AcceptAgreementRequest API call. */
	static readonly AcceptAgreementRequest: string[] = [
		"aws-marketplace:AcceptAgreementRequest",
		"aws-marketplace:Subscribe",
		"aws-marketplace:UpdatePurchaseOrders",
	];
	/** IAM actions required for the BatchCreateBillingAdjustmentRequest API call. */
	static readonly BatchCreateBillingAdjustmentRequest: string[] = [
		"aws-marketplace:BatchCreateBillingAdjustmentRequest",
	];
	/** IAM actions required for the BatchDescribeEntities API call. */
	static readonly BatchDescribeEntities: string[] = [
		"aws-marketplace:DescribeEntity",
	];
	/** IAM actions required for the BatchMeterUsage API call. */
	static readonly BatchMeterUsage: string[] = [
		"aws-marketplace:BatchMeterUsage",
	];
	/** IAM actions required for the CancelAgreement API call. */
	static readonly CancelAgreement: string[] = [
		"aws-marketplace:CancelAgreement",
		"aws-marketplace:Unsubscribe",
	];
	/** IAM actions required for the CancelAgreementCancellationRequest API call. */
	static readonly CancelAgreementCancellationRequest: string[] = [
		"aws-marketplace:CancelAgreementCancellationRequest",
	];
	/** IAM actions required for the CancelAgreementPaymentRequest API call. */
	static readonly CancelAgreementPaymentRequest: string[] = [
		"aws-marketplace:CancelAgreementPaymentRequest",
	];
	/** IAM actions required for the CancelChangeSet API call. */
	static readonly CancelChangeSet: string[] = [
		"aws-marketplace:CancelChangeSet",
	];
	/** IAM actions required for the CreateAgreementRequest API call. */
	static readonly CreateAgreementRequest: string[] = [
		"aws-marketplace:CreateAgreementRequest",
		"aws-marketplace:Subscribe",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"aws-marketplace:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeAgreement API call. */
	static readonly DescribeAgreement: string[] = [
		"aws-marketplace:DescribeAgreement",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the DescribeAssessment API call. */
	static readonly DescribeAssessment: string[] = [
		"aws-marketplace:DescribeAssessment",
	];
	/** IAM actions required for the DescribeChangeSet API call. */
	static readonly DescribeChangeSet: string[] = [
		"aws-marketplace:DescribeChangeSet",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DescribeEntity: string[] = ["aws-marketplace:DescribeEntity"];
	/** IAM actions required for the GetAgreementCancellationRequest API call. */
	static readonly opGetAgreementCancellationRequest: string[] = [
		"aws-marketplace:GetAgreementCancellationRequest",
	];
	/** IAM actions required for the GetAgreementEntitlements API call. */
	static readonly opGetAgreementEntitlements: string[] = [
		"aws-marketplace:GetAgreementEntitlements",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the GetAgreementPaymentRequest API call. */
	static readonly opGetAgreementPaymentRequest: string[] = [
		"aws-marketplace:GetAgreementPaymentRequest",
	];
	/** IAM actions required for the GetAgreementTerms API call. */
	static readonly opGetAgreementTerms: string[] = [
		"aws-marketplace:GetAgreementTerms",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the GetBillingAdjustmentRequest API call. */
	static readonly opGetBillingAdjustmentRequest: string[] = [
		"aws-marketplace:GetBillingAdjustmentRequest",
	];
	/** IAM actions required for the GetBuyerDashboard API call. */
	static readonly opGetBuyerDashboard: string[] = [
		"aws-marketplace:GetBuyerDashboard",
	];
	/** IAM actions required for the GetEntitlements API call. */
	static readonly opGetEntitlements: string[] = [
		"aws-marketplace:GetEntitlements",
	];
	/** IAM actions required for the GetListing API call. */
	static readonly opGetListing: string[] = ["aws-marketplace:GetListing"];
	/** IAM actions required for the GetOffer API call. */
	static readonly opGetOffer: string[] = ["aws-marketplace:GetOffer"];
	/** IAM actions required for the GetOfferSet API call. */
	static readonly opGetOfferSet: string[] = ["aws-marketplace:GetOfferSet"];
	/** IAM actions required for the GetOfferTerms API call. */
	static readonly opGetOfferTerms: string[] = ["aws-marketplace:GetOfferTerms"];
	/** IAM actions required for the GetProduct API call. */
	static readonly opGetProduct: string[] = ["aws-marketplace:GetProduct"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"aws-marketplace:GetResourcePolicy",
	];
	/** IAM actions required for the ListAgreementCancellationRequests API call. */
	static readonly ListAgreementCancellationRequests: string[] = [
		"aws-marketplace:ListAgreementCancellationRequests",
	];
	/** IAM actions required for the ListAgreementCharges API call. */
	static readonly ListAgreementCharges: string[] = [
		"aws-marketplace:ListAgreementCharges",
	];
	/** IAM actions required for the ListAgreementInvoiceLineItems API call. */
	static readonly ListAgreementInvoiceLineItems: string[] = [
		"aws-marketplace:ListAgreementInvoiceLineItems",
	];
	/** IAM actions required for the ListAgreementPaymentRequests API call. */
	static readonly ListAgreementPaymentRequests: string[] = [
		"aws-marketplace:ListAgreementPaymentRequests",
	];
	/** IAM actions required for the ListAssessments API call. */
	static readonly ListAssessments: string[] = [
		"aws-marketplace:ListAssessments",
	];
	/** IAM actions required for the ListBillingAdjustmentRequests API call. */
	static readonly ListBillingAdjustmentRequests: string[] = [
		"aws-marketplace:ListBillingAdjustmentRequests",
	];
	/** IAM actions required for the ListChangeSets API call. */
	static readonly ListChangeSets: string[] = ["aws-marketplace:ListChangeSets"];
	/** IAM actions required for the ListEntities API call. */
	static readonly ListEntities: string[] = [
		"aws-marketplace:DescribeEntity",
		"aws-marketplace:ListEntities",
	];
	/** IAM actions required for the ListFulfillmentOptions API call. */
	static readonly ListFulfillmentOptions: string[] = [
		"aws-marketplace:ListFulfillmentOptions",
	];
	/** IAM actions required for the ListPurchaseOptions API call. */
	static readonly ListPurchaseOptions: string[] = [
		"aws-marketplace:ListPrivateListings",
		"aws-marketplace:ListPurchaseOptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"aws-marketplace:ListTagsForResource",
	];
	/** IAM actions required for the MeterUsage API call. */
	static readonly MeterUsage: string[] = ["aws-marketplace:MeterUsage"];
	/** IAM actions required for the PutDeploymentParameter API call. */
	static readonly PutDeploymentParameter: string[] = [
		"aws-marketplace:PutDeploymentParameter",
		"aws-marketplace:TagResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"aws-marketplace:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterUsage API call. */
	static readonly RegisterUsage: string[] = ["aws-marketplace:RegisterUsage"];
	/** IAM actions required for the RejectAgreementCancellationRequest API call. */
	static readonly RejectAgreementCancellationRequest: string[] = [
		"aws-marketplace:RejectAgreementCancellationRequest",
	];
	/** IAM actions required for the RejectAgreementPaymentRequest API call. */
	static readonly RejectAgreementPaymentRequest: string[] = [
		"aws-marketplace:RejectAgreementPaymentRequest",
	];
	/** IAM actions required for the ResolveCustomer API call. */
	static readonly ResolveCustomer: string[] = [
		"aws-marketplace:ResolveCustomer",
	];
	/** IAM actions required for the SearchAgreements API call. */
	static readonly SearchAgreements: string[] = [
		"aws-marketplace:SearchAgreements",
		"aws-marketplace:ViewSubscriptions",
	];
	/** IAM actions required for the SearchFacets API call. */
	static readonly SearchFacets: string[] = ["aws-marketplace:SearchFacets"];
	/** IAM actions required for the SearchListings API call. */
	static readonly SearchListings: string[] = ["aws-marketplace:SearchListings"];
	/** IAM actions required for the SendAgreementCancellationRequest API call. */
	static readonly SendAgreementCancellationRequest: string[] = [
		"aws-marketplace:SendAgreementCancellationRequest",
	];
	/** IAM actions required for the SendAgreementPaymentRequest API call. */
	static readonly SendAgreementPaymentRequest: string[] = [
		"aws-marketplace:SendAgreementPaymentRequest",
	];
	/** IAM actions required for the StartChangeSet API call. */
	static readonly StartChangeSet: string[] = [
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
	static readonly TagResource: string[] = ["aws-marketplace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aws-marketplace:UntagResource"];
	/** IAM actions required for the UpdatePurchaseOrders API call. */
	static readonly UpdatePurchaseOrders: string[] = [
		"aws-marketplace:UpdatePurchaseOrders",
	];
}

/**
 * Condition key constants and builders for aws-marketplace.
 */
export class AWSMarketplaceConditions {
	/** Condition keys applicable to the AcceptAgreementCancellationRequest action. */
	static readonly AcceptAgreementCancellationRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the AcceptAgreementPaymentRequest action. */
	static readonly AcceptAgreementPaymentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the AcceptAgreementRequest action. */
	static readonly AcceptAgreementRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:ProductId",
	];
	/** Condition keys applicable to the BatchCreateBillingAdjustmentRequest action. */
	static readonly BatchCreateBillingAdjustmentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the CancelAgreement action. */
	static readonly CancelAgreementConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the CancelAgreementCancellationRequest action. */
	static readonly CancelAgreementCancellationRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the CancelAgreementPaymentRequest action. */
	static readonly CancelAgreementPaymentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the CreateAgreementRequest action. */
	static readonly CreateAgreementRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:ProductId",
	];
	/** Condition keys applicable to the CreateVerificationEvidence action. */
	static readonly CreateVerificationEvidenceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeAgreement action. */
	static readonly DescribeAgreementConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetAgreementCancellationRequest action. */
	static readonly actionGetAgreementCancellationRequestConditionKeys: string[] =
		["aws-marketplace:AgreementType", "aws-marketplace:PartyType"];
	/** Condition keys applicable to the GetAgreementEntitlements action. */
	static readonly actionGetAgreementEntitlementsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the GetAgreementPaymentRequest action. */
	static readonly actionGetAgreementPaymentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetAgreementTerms action. */
	static readonly actionGetAgreementTermsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetBillingAdjustmentRequest action. */
	static readonly actionGetBillingAdjustmentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the GetVerification action. */
	static readonly actionGetVerificationConditionKeys: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the ListAgreementCancellationRequests action. */
	static readonly ListAgreementCancellationRequestsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListAgreementCharges action. */
	static readonly ListAgreementChargesConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
	];
	/** Condition keys applicable to the ListAgreementInvoiceLineItems action. */
	static readonly ListAgreementInvoiceLineItemsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListAgreementPaymentRequests action. */
	static readonly ListAgreementPaymentRequestsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListBillingAdjustmentRequests action. */
	static readonly ListBillingAdjustmentRequestsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListVerifications action. */
	static readonly ListVerificationsConditionKeys: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the PutDeploymentParameter action. */
	static readonly PutDeploymentParameterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RejectAgreementCancellationRequest action. */
	static readonly RejectAgreementCancellationRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the RejectAgreementPaymentRequest action. */
	static readonly RejectAgreementPaymentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the SearchAgreements action. */
	static readonly SearchAgreementsConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the SendAgreementCancellationRequest action. */
	static readonly SendAgreementCancellationRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the SendAgreementPaymentRequest action. */
	static readonly SendAgreementPaymentRequestConditionKeys: string[] = [
		"aws-marketplace:AgreementType",
		"aws-marketplace:PartyType",
	];
	/** Condition keys applicable to the StartChangeSet action. */
	static readonly StartChangeSetConditionKeys: string[] = [
		"aws-marketplace:Intent",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"catalog:ChangeType",
	];
	/** Condition keys applicable to the StartInvoiceSubmissionTask action. */
	static readonly StartInvoiceSubmissionTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTaxComplianceProfileChangeTask action. */
	static readonly StartTaxComplianceProfileChangeTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartVerification action. */
	static readonly StartVerificationConditionKeys: string[] = [
		"aws-marketplace:VerificationType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrders action. */
	static readonly UpdatePurchaseOrdersConditionKeys: string[] = [
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
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
