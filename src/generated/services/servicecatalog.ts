// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/servicecatalog.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the servicecatalog service.
 */
export class ServiceCatalogActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "servicecatalog";

	/** [Write] servicecatalog:AcceptPortfolioShare */
	static readonly AcceptPortfolioShare = "servicecatalog:AcceptPortfolioShare";
	/** [Write] servicecatalog:AssociateAttributeGroup */
	static readonly AssociateAttributeGroup =
		"servicecatalog:AssociateAttributeGroup";
	/** [Write] servicecatalog:AssociateBudgetWithResource */
	static readonly AssociateBudgetWithResource =
		"servicecatalog:AssociateBudgetWithResource";
	/** [Write] servicecatalog:AssociatePrincipalWithPortfolio */
	static readonly AssociatePrincipalWithPortfolio =
		"servicecatalog:AssociatePrincipalWithPortfolio";
	/** [Write] servicecatalog:AssociateProductWithPortfolio */
	static readonly AssociateProductWithPortfolio =
		"servicecatalog:AssociateProductWithPortfolio";
	/** [Write] servicecatalog:AssociateResource */
	static readonly AssociateResource = "servicecatalog:AssociateResource";
	/** [Write] servicecatalog:AssociateServiceActionWithProvisioningArtifact */
	static readonly AssociateServiceActionWithProvisioningArtifact =
		"servicecatalog:AssociateServiceActionWithProvisioningArtifact";
	/** [Write] servicecatalog:AssociateTagOptionWithResource */
	static readonly AssociateTagOptionWithResource =
		"servicecatalog:AssociateTagOptionWithResource";
	/** [Write] servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact */
	static readonly BatchAssociateServiceActionWithProvisioningArtifact =
		"servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact";
	/** [Write] servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact */
	static readonly BatchDisassociateServiceActionFromProvisioningArtifact =
		"servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact";
	/** [Write] servicecatalog:CopyProduct */
	static readonly CopyProduct = "servicecatalog:CopyProduct";
	/** [Write] servicecatalog:CreateApplication */
	static readonly CreateApplication = "servicecatalog:CreateApplication";
	/** [Write] servicecatalog:CreateAttributeGroup */
	static readonly CreateAttributeGroup = "servicecatalog:CreateAttributeGroup";
	/** [Write] servicecatalog:CreateConstraint */
	static readonly CreateConstraint = "servicecatalog:CreateConstraint";
	/** [Write] servicecatalog:CreatePortfolio */
	static readonly CreatePortfolio = "servicecatalog:CreatePortfolio";
	/** [PermissionManagement] servicecatalog:CreatePortfolioShare */
	static readonly CreatePortfolioShare = "servicecatalog:CreatePortfolioShare";
	/** [Write] servicecatalog:CreateProduct */
	static readonly CreateProduct = "servicecatalog:CreateProduct";
	/** [Write] servicecatalog:CreateProvisionedProductPlan */
	static readonly CreateProvisionedProductPlan =
		"servicecatalog:CreateProvisionedProductPlan";
	/** [Write] servicecatalog:CreateProvisioningArtifact */
	static readonly CreateProvisioningArtifact =
		"servicecatalog:CreateProvisioningArtifact";
	/** [Write] servicecatalog:CreateServiceAction */
	static readonly CreateServiceAction = "servicecatalog:CreateServiceAction";
	/** [Write] servicecatalog:CreateTagOption */
	static readonly CreateTagOption = "servicecatalog:CreateTagOption";
	/** [Write] servicecatalog:DeleteApplication */
	static readonly DeleteApplication = "servicecatalog:DeleteApplication";
	/** [Write] servicecatalog:DeleteAttributeGroup */
	static readonly DeleteAttributeGroup = "servicecatalog:DeleteAttributeGroup";
	/** [Write] servicecatalog:DeleteConstraint */
	static readonly DeleteConstraint = "servicecatalog:DeleteConstraint";
	/** [Write] servicecatalog:DeletePortfolio */
	static readonly DeletePortfolio = "servicecatalog:DeletePortfolio";
	/** [PermissionManagement] servicecatalog:DeletePortfolioShare */
	static readonly DeletePortfolioShare = "servicecatalog:DeletePortfolioShare";
	/** [Write] servicecatalog:DeleteProduct */
	static readonly DeleteProduct = "servicecatalog:DeleteProduct";
	/** [Write] servicecatalog:DeleteProvisionedProductPlan */
	static readonly DeleteProvisionedProductPlan =
		"servicecatalog:DeleteProvisionedProductPlan";
	/** [Write] servicecatalog:DeleteProvisioningArtifact */
	static readonly DeleteProvisioningArtifact =
		"servicecatalog:DeleteProvisioningArtifact";
	/** [Write] servicecatalog:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "servicecatalog:DeleteResourcePolicy";
	/** [Write] servicecatalog:DeleteServiceAction */
	static readonly DeleteServiceAction = "servicecatalog:DeleteServiceAction";
	/** [Write] servicecatalog:DeleteTagOption */
	static readonly DeleteTagOption = "servicecatalog:DeleteTagOption";
	/** [Read] servicecatalog:DescribeConstraint */
	static readonly DescribeConstraint = "servicecatalog:DescribeConstraint";
	/** [Read] servicecatalog:DescribeCopyProductStatus */
	static readonly DescribeCopyProductStatus =
		"servicecatalog:DescribeCopyProductStatus";
	/** [Read] servicecatalog:DescribePortfolio */
	static readonly DescribePortfolio = "servicecatalog:DescribePortfolio";
	/** [Read] servicecatalog:DescribePortfolioShareStatus */
	static readonly DescribePortfolioShareStatus =
		"servicecatalog:DescribePortfolioShareStatus";
	/** [List] servicecatalog:DescribePortfolioShares */
	static readonly DescribePortfolioShares =
		"servicecatalog:DescribePortfolioShares";
	/** [Read] servicecatalog:DescribeProduct */
	static readonly DescribeProduct = "servicecatalog:DescribeProduct";
	/** [Read] servicecatalog:DescribeProductAsAdmin */
	static readonly DescribeProductAsAdmin =
		"servicecatalog:DescribeProductAsAdmin";
	/** [Read] servicecatalog:DescribeProductView */
	static readonly DescribeProductView = "servicecatalog:DescribeProductView";
	/** [Read] servicecatalog:DescribeProvisionedProduct */
	static readonly DescribeProvisionedProduct =
		"servicecatalog:DescribeProvisionedProduct";
	/** [Read] servicecatalog:DescribeProvisionedProductPlan */
	static readonly DescribeProvisionedProductPlan =
		"servicecatalog:DescribeProvisionedProductPlan";
	/** [Read] servicecatalog:DescribeProvisioningArtifact */
	static readonly DescribeProvisioningArtifact =
		"servicecatalog:DescribeProvisioningArtifact";
	/** [Read] servicecatalog:DescribeProvisioningParameters */
	static readonly DescribeProvisioningParameters =
		"servicecatalog:DescribeProvisioningParameters";
	/** [Read] servicecatalog:DescribeRecord */
	static readonly DescribeRecord = "servicecatalog:DescribeRecord";
	/** [Read] servicecatalog:DescribeServiceAction */
	static readonly DescribeServiceAction =
		"servicecatalog:DescribeServiceAction";
	/** [Read] servicecatalog:DescribeServiceActionExecutionParameters */
	static readonly DescribeServiceActionExecutionParameters =
		"servicecatalog:DescribeServiceActionExecutionParameters";
	/** [Read] servicecatalog:DescribeTagOption */
	static readonly DescribeTagOption = "servicecatalog:DescribeTagOption";
	/** [Write] servicecatalog:DisableAWSOrganizationsAccess */
	static readonly DisableAWSOrganizationsAccess =
		"servicecatalog:DisableAWSOrganizationsAccess";
	/** [Write] servicecatalog:DisassociateAttributeGroup */
	static readonly DisassociateAttributeGroup =
		"servicecatalog:DisassociateAttributeGroup";
	/** [Write] servicecatalog:DisassociateBudgetFromResource */
	static readonly DisassociateBudgetFromResource =
		"servicecatalog:DisassociateBudgetFromResource";
	/** [Write] servicecatalog:DisassociatePrincipalFromPortfolio */
	static readonly DisassociatePrincipalFromPortfolio =
		"servicecatalog:DisassociatePrincipalFromPortfolio";
	/** [Write] servicecatalog:DisassociateProductFromPortfolio */
	static readonly DisassociateProductFromPortfolio =
		"servicecatalog:DisassociateProductFromPortfolio";
	/** [Write] servicecatalog:DisassociateResource */
	static readonly DisassociateResource = "servicecatalog:DisassociateResource";
	/** [Write] servicecatalog:DisassociateServiceActionFromProvisioningArtifact */
	static readonly DisassociateServiceActionFromProvisioningArtifact =
		"servicecatalog:DisassociateServiceActionFromProvisioningArtifact";
	/** [Write] servicecatalog:DisassociateTagOptionFromResource */
	static readonly DisassociateTagOptionFromResource =
		"servicecatalog:DisassociateTagOptionFromResource";
	/** [Write] servicecatalog:EnableAWSOrganizationsAccess */
	static readonly EnableAWSOrganizationsAccess =
		"servicecatalog:EnableAWSOrganizationsAccess";
	/** [Write] servicecatalog:ExecuteProvisionedProductPlan */
	static readonly ExecuteProvisionedProductPlan =
		"servicecatalog:ExecuteProvisionedProductPlan";
	/** [Write] servicecatalog:ExecuteProvisionedProductServiceAction */
	static readonly ExecuteProvisionedProductServiceAction =
		"servicecatalog:ExecuteProvisionedProductServiceAction";
	/** [Read] servicecatalog:GetAWSOrganizationsAccessStatus */
	static readonly actionGetAWSOrganizationsAccessStatus =
		"servicecatalog:GetAWSOrganizationsAccessStatus";
	/** [Read] servicecatalog:GetApplication */
	static readonly actionGetApplication = "servicecatalog:GetApplication";
	/** [Read] servicecatalog:GetAssociatedResource */
	static readonly actionGetAssociatedResource =
		"servicecatalog:GetAssociatedResource";
	/** [Read] servicecatalog:GetAttributeGroup */
	static readonly actionGetAttributeGroup = "servicecatalog:GetAttributeGroup";
	/** [Read] servicecatalog:GetConfiguration */
	static readonly actionGetConfiguration = "servicecatalog:GetConfiguration";
	/** [Read] servicecatalog:GetProvisionedProductOutputs */
	static readonly actionGetProvisionedProductOutputs =
		"servicecatalog:GetProvisionedProductOutputs";
	/** [Read] servicecatalog:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "servicecatalog:GetResourcePolicy";
	/** [Write] servicecatalog:ImportAsProvisionedProduct */
	static readonly ImportAsProvisionedProduct =
		"servicecatalog:ImportAsProvisionedProduct";
	/** [List] servicecatalog:ListAcceptedPortfolioShares */
	static readonly ListAcceptedPortfolioShares =
		"servicecatalog:ListAcceptedPortfolioShares";
	/** [List] servicecatalog:ListApplications */
	static readonly ListApplications = "servicecatalog:ListApplications";
	/** [List] servicecatalog:ListAssociatedAttributeGroups */
	static readonly ListAssociatedAttributeGroups =
		"servicecatalog:ListAssociatedAttributeGroups";
	/** [List] servicecatalog:ListAssociatedResources */
	static readonly ListAssociatedResources =
		"servicecatalog:ListAssociatedResources";
	/** [List] servicecatalog:ListAttributeGroups */
	static readonly ListAttributeGroups = "servicecatalog:ListAttributeGroups";
	/** [List] servicecatalog:ListAttributeGroupsForApplication */
	static readonly ListAttributeGroupsForApplication =
		"servicecatalog:ListAttributeGroupsForApplication";
	/** [List] servicecatalog:ListBudgetsForResource */
	static readonly ListBudgetsForResource =
		"servicecatalog:ListBudgetsForResource";
	/** [List] servicecatalog:ListConstraintsForPortfolio */
	static readonly ListConstraintsForPortfolio =
		"servicecatalog:ListConstraintsForPortfolio";
	/** [List] servicecatalog:ListLaunchPaths */
	static readonly ListLaunchPaths = "servicecatalog:ListLaunchPaths";
	/** [List] servicecatalog:ListOrganizationPortfolioAccess */
	static readonly ListOrganizationPortfolioAccess =
		"servicecatalog:ListOrganizationPortfolioAccess";
	/** [List] servicecatalog:ListPortfolioAccess */
	static readonly ListPortfolioAccess = "servicecatalog:ListPortfolioAccess";
	/** [List] servicecatalog:ListPortfolios */
	static readonly ListPortfolios = "servicecatalog:ListPortfolios";
	/** [List] servicecatalog:ListPortfoliosForProduct */
	static readonly ListPortfoliosForProduct =
		"servicecatalog:ListPortfoliosForProduct";
	/** [List] servicecatalog:ListPrincipalsForPortfolio */
	static readonly ListPrincipalsForPortfolio =
		"servicecatalog:ListPrincipalsForPortfolio";
	/** [List] servicecatalog:ListProvisionedProductPlans */
	static readonly ListProvisionedProductPlans =
		"servicecatalog:ListProvisionedProductPlans";
	/** [List] servicecatalog:ListProvisioningArtifacts */
	static readonly ListProvisioningArtifacts =
		"servicecatalog:ListProvisioningArtifacts";
	/** [List] servicecatalog:ListProvisioningArtifactsForServiceAction */
	static readonly ListProvisioningArtifactsForServiceAction =
		"servicecatalog:ListProvisioningArtifactsForServiceAction";
	/** [List] servicecatalog:ListRecordHistory */
	static readonly ListRecordHistory = "servicecatalog:ListRecordHistory";
	/** [List] servicecatalog:ListResourcesForTagOption */
	static readonly ListResourcesForTagOption =
		"servicecatalog:ListResourcesForTagOption";
	/** [List] servicecatalog:ListServiceActions */
	static readonly ListServiceActions = "servicecatalog:ListServiceActions";
	/** [List] servicecatalog:ListServiceActionsForProvisioningArtifact */
	static readonly ListServiceActionsForProvisioningArtifact =
		"servicecatalog:ListServiceActionsForProvisioningArtifact";
	/** [List] servicecatalog:ListStackInstancesForProvisionedProduct */
	static readonly ListStackInstancesForProvisionedProduct =
		"servicecatalog:ListStackInstancesForProvisionedProduct";
	/** [List] servicecatalog:ListTagOptions */
	static readonly ListTagOptions = "servicecatalog:ListTagOptions";
	/** [Read] servicecatalog:ListTagsForResource */
	static readonly ListTagsForResource = "servicecatalog:ListTagsForResource";
	/** [Write] servicecatalog:NotifyProvisionProductEngineWorkflowResult */
	static readonly NotifyProvisionProductEngineWorkflowResult =
		"servicecatalog:NotifyProvisionProductEngineWorkflowResult";
	/** [Write] servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult */
	static readonly NotifyTerminateProvisionedProductEngineWorkflowResult =
		"servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult";
	/** [Write] servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult */
	static readonly NotifyUpdateProvisionedProductEngineWorkflowResult =
		"servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult";
	/** [Write] servicecatalog:ProvisionProduct */
	static readonly ProvisionProduct = "servicecatalog:ProvisionProduct";
	/** [Write] servicecatalog:PutConfiguration */
	static readonly PutConfiguration = "servicecatalog:PutConfiguration";
	/** [Write] servicecatalog:PutResourcePolicy */
	static readonly PutResourcePolicy = "servicecatalog:PutResourcePolicy";
	/** [Write] servicecatalog:RejectPortfolioShare */
	static readonly RejectPortfolioShare = "servicecatalog:RejectPortfolioShare";
	/** [List] servicecatalog:ScanProvisionedProducts */
	static readonly ScanProvisionedProducts =
		"servicecatalog:ScanProvisionedProducts";
	/** [List] servicecatalog:SearchProducts */
	static readonly SearchProducts = "servicecatalog:SearchProducts";
	/** [List] servicecatalog:SearchProductsAsAdmin */
	static readonly SearchProductsAsAdmin =
		"servicecatalog:SearchProductsAsAdmin";
	/** [List] servicecatalog:SearchProvisionedProducts */
	static readonly SearchProvisionedProducts =
		"servicecatalog:SearchProvisionedProducts";
	/** [Write] servicecatalog:SyncResource */
	static readonly SyncResource = "servicecatalog:SyncResource";
	/** [Tagging] servicecatalog:TagResource */
	static readonly TagResource = "servicecatalog:TagResource";
	/** [Write] servicecatalog:TerminateProvisionedProduct */
	static readonly TerminateProvisionedProduct =
		"servicecatalog:TerminateProvisionedProduct";
	/** [Tagging] servicecatalog:UntagResource */
	static readonly UntagResource = "servicecatalog:UntagResource";
	/** [Write] servicecatalog:UpdateApplication */
	static readonly UpdateApplication = "servicecatalog:UpdateApplication";
	/** [Write] servicecatalog:UpdateAttributeGroup */
	static readonly UpdateAttributeGroup = "servicecatalog:UpdateAttributeGroup";
	/** [Write] servicecatalog:UpdateConstraint */
	static readonly UpdateConstraint = "servicecatalog:UpdateConstraint";
	/** [Write] servicecatalog:UpdatePortfolio */
	static readonly UpdatePortfolio = "servicecatalog:UpdatePortfolio";
	/** [PermissionManagement] servicecatalog:UpdatePortfolioShare */
	static readonly UpdatePortfolioShare = "servicecatalog:UpdatePortfolioShare";
	/** [Write] servicecatalog:UpdateProduct */
	static readonly UpdateProduct = "servicecatalog:UpdateProduct";
	/** [Write] servicecatalog:UpdateProvisionedProduct */
	static readonly UpdateProvisionedProduct =
		"servicecatalog:UpdateProvisionedProduct";
	/** [Write] servicecatalog:UpdateProvisionedProductProperties */
	static readonly UpdateProvisionedProductProperties =
		"servicecatalog:UpdateProvisionedProductProperties";
	/** [Write] servicecatalog:UpdateProvisioningArtifact */
	static readonly UpdateProvisioningArtifact =
		"servicecatalog:UpdateProvisioningArtifact";
	/** [Write] servicecatalog:UpdateServiceAction */
	static readonly UpdateServiceAction = "servicecatalog:UpdateServiceAction";
	/** [Write] servicecatalog:UpdateTagOption */
	static readonly UpdateTagOption = "servicecatalog:UpdateTagOption";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ServiceCatalogActions.DescribeConstraint,
		ServiceCatalogActions.DescribeCopyProductStatus,
		ServiceCatalogActions.DescribePortfolio,
		ServiceCatalogActions.DescribePortfolioShareStatus,
		ServiceCatalogActions.DescribeProduct,
		ServiceCatalogActions.DescribeProductAsAdmin,
		ServiceCatalogActions.DescribeProductView,
		ServiceCatalogActions.DescribeProvisionedProduct,
		ServiceCatalogActions.DescribeProvisionedProductPlan,
		ServiceCatalogActions.DescribeProvisioningArtifact,
		ServiceCatalogActions.DescribeProvisioningParameters,
		ServiceCatalogActions.DescribeRecord,
		ServiceCatalogActions.DescribeServiceAction,
		ServiceCatalogActions.DescribeServiceActionExecutionParameters,
		ServiceCatalogActions.DescribeTagOption,
		ServiceCatalogActions.actionGetAWSOrganizationsAccessStatus,
		ServiceCatalogActions.actionGetApplication,
		ServiceCatalogActions.actionGetAssociatedResource,
		ServiceCatalogActions.actionGetAttributeGroup,
		ServiceCatalogActions.actionGetConfiguration,
		ServiceCatalogActions.actionGetProvisionedProductOutputs,
		ServiceCatalogActions.actionGetResourcePolicy,
		ServiceCatalogActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ServiceCatalogActions.AcceptPortfolioShare,
		ServiceCatalogActions.AssociateAttributeGroup,
		ServiceCatalogActions.AssociateBudgetWithResource,
		ServiceCatalogActions.AssociatePrincipalWithPortfolio,
		ServiceCatalogActions.AssociateProductWithPortfolio,
		ServiceCatalogActions.AssociateResource,
		ServiceCatalogActions.AssociateServiceActionWithProvisioningArtifact,
		ServiceCatalogActions.AssociateTagOptionWithResource,
		ServiceCatalogActions.BatchAssociateServiceActionWithProvisioningArtifact,
		ServiceCatalogActions.BatchDisassociateServiceActionFromProvisioningArtifact,
		ServiceCatalogActions.CopyProduct,
		ServiceCatalogActions.CreateApplication,
		ServiceCatalogActions.CreateAttributeGroup,
		ServiceCatalogActions.CreateConstraint,
		ServiceCatalogActions.CreatePortfolio,
		ServiceCatalogActions.CreateProduct,
		ServiceCatalogActions.CreateProvisionedProductPlan,
		ServiceCatalogActions.CreateProvisioningArtifact,
		ServiceCatalogActions.CreateServiceAction,
		ServiceCatalogActions.CreateTagOption,
		ServiceCatalogActions.DeleteApplication,
		ServiceCatalogActions.DeleteAttributeGroup,
		ServiceCatalogActions.DeleteConstraint,
		ServiceCatalogActions.DeletePortfolio,
		ServiceCatalogActions.DeleteProduct,
		ServiceCatalogActions.DeleteProvisionedProductPlan,
		ServiceCatalogActions.DeleteProvisioningArtifact,
		ServiceCatalogActions.DeleteResourcePolicy,
		ServiceCatalogActions.DeleteServiceAction,
		ServiceCatalogActions.DeleteTagOption,
		ServiceCatalogActions.DisableAWSOrganizationsAccess,
		ServiceCatalogActions.DisassociateAttributeGroup,
		ServiceCatalogActions.DisassociateBudgetFromResource,
		ServiceCatalogActions.DisassociatePrincipalFromPortfolio,
		ServiceCatalogActions.DisassociateProductFromPortfolio,
		ServiceCatalogActions.DisassociateResource,
		ServiceCatalogActions.DisassociateServiceActionFromProvisioningArtifact,
		ServiceCatalogActions.DisassociateTagOptionFromResource,
		ServiceCatalogActions.EnableAWSOrganizationsAccess,
		ServiceCatalogActions.ExecuteProvisionedProductPlan,
		ServiceCatalogActions.ExecuteProvisionedProductServiceAction,
		ServiceCatalogActions.ImportAsProvisionedProduct,
		ServiceCatalogActions.NotifyProvisionProductEngineWorkflowResult,
		ServiceCatalogActions.NotifyTerminateProvisionedProductEngineWorkflowResult,
		ServiceCatalogActions.NotifyUpdateProvisionedProductEngineWorkflowResult,
		ServiceCatalogActions.ProvisionProduct,
		ServiceCatalogActions.PutConfiguration,
		ServiceCatalogActions.PutResourcePolicy,
		ServiceCatalogActions.RejectPortfolioShare,
		ServiceCatalogActions.SyncResource,
		ServiceCatalogActions.TerminateProvisionedProduct,
		ServiceCatalogActions.UpdateApplication,
		ServiceCatalogActions.UpdateAttributeGroup,
		ServiceCatalogActions.UpdateConstraint,
		ServiceCatalogActions.UpdatePortfolio,
		ServiceCatalogActions.UpdateProduct,
		ServiceCatalogActions.UpdateProvisionedProduct,
		ServiceCatalogActions.UpdateProvisionedProductProperties,
		ServiceCatalogActions.UpdateProvisioningArtifact,
		ServiceCatalogActions.UpdateServiceAction,
		ServiceCatalogActions.UpdateTagOption,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ServiceCatalogActions.DescribePortfolioShares,
		ServiceCatalogActions.ListAcceptedPortfolioShares,
		ServiceCatalogActions.ListApplications,
		ServiceCatalogActions.ListAssociatedAttributeGroups,
		ServiceCatalogActions.ListAssociatedResources,
		ServiceCatalogActions.ListAttributeGroups,
		ServiceCatalogActions.ListAttributeGroupsForApplication,
		ServiceCatalogActions.ListBudgetsForResource,
		ServiceCatalogActions.ListConstraintsForPortfolio,
		ServiceCatalogActions.ListLaunchPaths,
		ServiceCatalogActions.ListOrganizationPortfolioAccess,
		ServiceCatalogActions.ListPortfolioAccess,
		ServiceCatalogActions.ListPortfolios,
		ServiceCatalogActions.ListPortfoliosForProduct,
		ServiceCatalogActions.ListPrincipalsForPortfolio,
		ServiceCatalogActions.ListProvisionedProductPlans,
		ServiceCatalogActions.ListProvisioningArtifacts,
		ServiceCatalogActions.ListProvisioningArtifactsForServiceAction,
		ServiceCatalogActions.ListRecordHistory,
		ServiceCatalogActions.ListResourcesForTagOption,
		ServiceCatalogActions.ListServiceActions,
		ServiceCatalogActions.ListServiceActionsForProvisioningArtifact,
		ServiceCatalogActions.ListStackInstancesForProvisionedProduct,
		ServiceCatalogActions.ListTagOptions,
		ServiceCatalogActions.ScanProvisionedProducts,
		ServiceCatalogActions.SearchProducts,
		ServiceCatalogActions.SearchProductsAsAdmin,
		ServiceCatalogActions.SearchProvisionedProducts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ServiceCatalogActions.CreatePortfolioShare,
		ServiceCatalogActions.DeletePortfolioShare,
		ServiceCatalogActions.UpdatePortfolioShare,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ServiceCatalogActions.TagResource,
		ServiceCatalogActions.UntagResource,
	];
}

/**
 * Properties for building a Application ARN.
 */
export interface ServiceCatalogApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Application ARN.
 */
export interface ServiceCatalogApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a AttributeGroup ARN.
 */
export interface ServiceCatalogAttributeGroupArnProps {
	/** The AttributeGroupId component of the ARN. */
	readonly attributeGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AttributeGroup ARN.
 */
export interface ServiceCatalogAttributeGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AttributeGroupId component. */
	readonly attributeGroupId: string;
}

/**
 * Properties for building a Portfolio ARN.
 */
export interface ServiceCatalogPortfolioArnProps {
	/** The PortfolioId component of the ARN. */
	readonly portfolioId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Portfolio ARN.
 */
export interface ServiceCatalogPortfolioArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortfolioId component. */
	readonly portfolioId: string;
}

/**
 * Properties for building a Product ARN.
 */
export interface ServiceCatalogProductArnProps {
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
export interface ServiceCatalogProductArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductId component. */
	readonly productId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):servicecatalog:(?<region>[^:]*):(?<account>[^:]*):\/applications\/(?<applicationId>[^:/?]+)$/;
const AttributeGroupArnRegex =
	/^arn:(?<partition>[^:]+):servicecatalog:(?<region>[^:]*):(?<account>[^:]*):\/attribute-groups\/(?<attributeGroupId>[^:/?]+)$/;
const PortfolioArnRegex =
	/^arn:(?<partition>[^:]+):catalog:(?<region>[^:]*):(?<account>[^:]*):portfolio\/(?<portfolioId>[^:/?]+)$/;
const ProductArnRegex =
	/^arn:(?<partition>[^:]+):catalog:(?<region>[^:]*):(?<account>[^:]*):product\/(?<productId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for servicecatalog resources.
 */
export class ServiceCatalogResources {
	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: ServiceCatalogApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:servicecatalog:${props.region ?? "*"}:${props.account ?? "*"}:/applications/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a Application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(
		arn: string,
	): ServiceCatalogApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the AttributeGroup resource.
	 */
	static attributeGroup(props: ServiceCatalogAttributeGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:servicecatalog:${props.region ?? "*"}:${props.account ?? "*"}:/attribute-groups/${props.attributeGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AttributeGroup resource.
	 */
	static isValidAttributeGroupArn(arn: string): boolean {
		return AttributeGroupArnRegex.test(arn);
	}

	/**
	 * Parses a AttributeGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttributeGroupArn(
		arn: string,
	): ServiceCatalogAttributeGroupArnComponents {
		const match = AttributeGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AttributeGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			attributeGroupId: match.groups!.attributeGroupId,
		};
	}

	/**
	 * Builds an ARN for the Portfolio resource.
	 */
	static portfolio(props: ServiceCatalogPortfolioArnProps): string {
		return `arn:${props.partition ?? "aws"}:catalog:${props.region ?? "*"}:${props.account ?? "*"}:portfolio/${props.portfolioId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Portfolio resource.
	 */
	static isValidPortfolioArn(arn: string): boolean {
		return PortfolioArnRegex.test(arn);
	}

	/**
	 * Parses a Portfolio ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePortfolioArn(arn: string): ServiceCatalogPortfolioArnComponents {
		const match = PortfolioArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Portfolio ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portfolioId: match.groups!.portfolioId,
		};
	}

	/**
	 * Builds an ARN for the Product resource.
	 */
	static product(props: ServiceCatalogProductArnProps): string {
		return `arn:${props.partition ?? "aws"}:catalog:${props.region ?? "*"}:${props.account ?? "*"}:product/${props.productId}`;
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
	static parseProductArn(arn: string): ServiceCatalogProductArnComponents {
		const match = ProductArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Product ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productId: match.groups!.productId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for servicecatalog.
 */
export class ServiceCatalogOperations {
	/** IAM actions required for the AcceptPortfolioShare API call. */
	static readonly AcceptPortfolioShare: string[] = [
		"servicecatalog:AcceptPortfolioShare",
	];
	/** IAM actions required for the AssociateAttributeGroup API call. */
	static readonly AssociateAttributeGroup: string[] = [
		"servicecatalog:AssociateAttributeGroup",
	];
	/** IAM actions required for the AssociateBudgetWithResource API call. */
	static readonly AssociateBudgetWithResource: string[] = [
		"servicecatalog:AssociateBudgetWithResource",
	];
	/** IAM actions required for the AssociatePrincipalWithPortfolio API call. */
	static readonly AssociatePrincipalWithPortfolio: string[] = [
		"servicecatalog:AssociatePrincipalWithPortfolio",
	];
	/** IAM actions required for the AssociateProductWithPortfolio API call. */
	static readonly AssociateProductWithPortfolio: string[] = [
		"servicecatalog:AssociateProductWithPortfolio",
	];
	/** IAM actions required for the AssociateResource API call. */
	static readonly AssociateResource: string[] = [
		"servicecatalog:AssociateResource",
	];
	/** IAM actions required for the AssociateServiceActionWithProvisioningArtifact API call. */
	static readonly AssociateServiceActionWithProvisioningArtifact: string[] = [
		"servicecatalog:AssociateServiceActionWithProvisioningArtifact",
	];
	/** IAM actions required for the AssociateTagOptionWithResource API call. */
	static readonly AssociateTagOptionWithResource: string[] = [
		"servicecatalog:AssociateTagOptionWithResource",
	];
	/** IAM actions required for the BatchAssociateServiceActionWithProvisioningArtifact API call. */
	static readonly BatchAssociateServiceActionWithProvisioningArtifact: string[] =
		["servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact"];
	/** IAM actions required for the BatchDisassociateServiceActionFromProvisioningArtifact API call. */
	static readonly BatchDisassociateServiceActionFromProvisioningArtifact: string[] =
		["servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact"];
	/** IAM actions required for the CopyProduct API call. */
	static readonly CopyProduct: string[] = ["servicecatalog:CopyProduct"];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"servicecatalog:CreateApplication",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateAttributeGroup API call. */
	static readonly CreateAttributeGroup: string[] = [
		"servicecatalog:CreateAttributeGroup",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateConstraint API call. */
	static readonly CreateConstraint: string[] = [
		"servicecatalog:CreateConstraint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePortfolio API call. */
	static readonly CreatePortfolio: string[] = [
		"servicecatalog:CreatePortfolio",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreatePortfolioShare API call. */
	static readonly CreatePortfolioShare: string[] = [
		"servicecatalog:CreatePortfolioShare",
	];
	/** IAM actions required for the CreateProduct API call. */
	static readonly CreateProduct: string[] = [
		"servicecatalog:CreateProduct",
		"codestar-connections:PassConnection",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateProvisionedProductPlan API call. */
	static readonly CreateProvisionedProductPlan: string[] = [
		"servicecatalog:CreateProvisionedProductPlan",
	];
	/** IAM actions required for the CreateProvisioningArtifact API call. */
	static readonly CreateProvisioningArtifact: string[] = [
		"servicecatalog:CreateProvisioningArtifact",
	];
	/** IAM actions required for the CreateServiceAction API call. */
	static readonly CreateServiceAction: string[] = [
		"servicecatalog:CreateServiceAction",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTagOption API call. */
	static readonly CreateTagOption: string[] = [
		"servicecatalog:CreateTagOption",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"servicecatalog:DeleteApplication",
	];
	/** IAM actions required for the DeleteAttributeGroup API call. */
	static readonly DeleteAttributeGroup: string[] = [
		"servicecatalog:DeleteAttributeGroup",
	];
	/** IAM actions required for the DeleteConstraint API call. */
	static readonly DeleteConstraint: string[] = [
		"servicecatalog:DeleteConstraint",
	];
	/** IAM actions required for the DeletePortfolio API call. */
	static readonly DeletePortfolio: string[] = [
		"servicecatalog:DeletePortfolio",
	];
	/** IAM actions required for the DeletePortfolioShare API call. */
	static readonly DeletePortfolioShare: string[] = [
		"servicecatalog:DeletePortfolioShare",
	];
	/** IAM actions required for the DeleteProduct API call. */
	static readonly DeleteProduct: string[] = ["servicecatalog:DeleteProduct"];
	/** IAM actions required for the DeleteProvisionedProductPlan API call. */
	static readonly DeleteProvisionedProductPlan: string[] = [
		"servicecatalog:DeleteProvisionedProductPlan",
	];
	/** IAM actions required for the DeleteProvisioningArtifact API call. */
	static readonly DeleteProvisioningArtifact: string[] = [
		"servicecatalog:DeleteProvisioningArtifact",
	];
	/** IAM actions required for the DeleteServiceAction API call. */
	static readonly DeleteServiceAction: string[] = [
		"servicecatalog:DeleteServiceAction",
	];
	/** IAM actions required for the DeleteTagOption API call. */
	static readonly DeleteTagOption: string[] = [
		"servicecatalog:DeleteTagOption",
	];
	/** IAM actions required for the DescribeConstraint API call. */
	static readonly DescribeConstraint: string[] = [
		"servicecatalog:DescribeConstraint",
	];
	/** IAM actions required for the DescribeCopyProductStatus API call. */
	static readonly DescribeCopyProductStatus: string[] = [
		"servicecatalog:DescribeCopyProductStatus",
	];
	/** IAM actions required for the DescribePortfolio API call. */
	static readonly DescribePortfolio: string[] = [
		"servicecatalog:DescribePortfolio",
	];
	/** IAM actions required for the DescribePortfolioShareStatus API call. */
	static readonly DescribePortfolioShareStatus: string[] = [
		"servicecatalog:DescribePortfolioShareStatus",
	];
	/** IAM actions required for the DescribePortfolioShares API call. */
	static readonly DescribePortfolioShares: string[] = [
		"servicecatalog:DescribePortfolioShares",
	];
	/** IAM actions required for the DescribeProduct API call. */
	static readonly DescribeProduct: string[] = [
		"servicecatalog:DescribeProduct",
	];
	/** IAM actions required for the DescribeProductAsAdmin API call. */
	static readonly DescribeProductAsAdmin: string[] = [
		"servicecatalog:DescribeProductAsAdmin",
	];
	/** IAM actions required for the DescribeProductView API call. */
	static readonly DescribeProductView: string[] = [
		"servicecatalog:DescribeProductView",
	];
	/** IAM actions required for the DescribeProvisionedProduct API call. */
	static readonly DescribeProvisionedProduct: string[] = [
		"servicecatalog:DescribeProvisionedProduct",
	];
	/** IAM actions required for the DescribeProvisionedProductPlan API call. */
	static readonly DescribeProvisionedProductPlan: string[] = [
		"servicecatalog:DescribeProvisionedProductPlan",
	];
	/** IAM actions required for the DescribeProvisioningArtifact API call. */
	static readonly DescribeProvisioningArtifact: string[] = [
		"servicecatalog:DescribeProvisioningArtifact",
	];
	/** IAM actions required for the DescribeProvisioningParameters API call. */
	static readonly DescribeProvisioningParameters: string[] = [
		"servicecatalog:DescribeProvisioningParameters",
	];
	/** IAM actions required for the DescribeRecord API call. */
	static readonly DescribeRecord: string[] = ["servicecatalog:DescribeRecord"];
	/** IAM actions required for the DescribeServiceAction API call. */
	static readonly DescribeServiceAction: string[] = [
		"servicecatalog:DescribeServiceAction",
	];
	/** IAM actions required for the DescribeServiceActionExecutionParameters API call. */
	static readonly DescribeServiceActionExecutionParameters: string[] = [
		"servicecatalog:DescribeServiceActionExecutionParameters",
	];
	/** IAM actions required for the DescribeTagOption API call. */
	static readonly DescribeTagOption: string[] = [
		"servicecatalog:DescribeTagOption",
	];
	/** IAM actions required for the DisableAWSOrganizationsAccess API call. */
	static readonly DisableAWSOrganizationsAccess: string[] = [
		"servicecatalog:DisableAWSOrganizationsAccess",
	];
	/** IAM actions required for the DisassociateAttributeGroup API call. */
	static readonly DisassociateAttributeGroup: string[] = [
		"servicecatalog:DisassociateAttributeGroup",
	];
	/** IAM actions required for the DisassociateBudgetFromResource API call. */
	static readonly DisassociateBudgetFromResource: string[] = [
		"servicecatalog:DisassociateBudgetFromResource",
	];
	/** IAM actions required for the DisassociatePrincipalFromPortfolio API call. */
	static readonly DisassociatePrincipalFromPortfolio: string[] = [
		"servicecatalog:DisassociatePrincipalFromPortfolio",
	];
	/** IAM actions required for the DisassociateProductFromPortfolio API call. */
	static readonly DisassociateProductFromPortfolio: string[] = [
		"servicecatalog:DisassociateProductFromPortfolio",
	];
	/** IAM actions required for the DisassociateResource API call. */
	static readonly DisassociateResource: string[] = [
		"servicecatalog:DisassociateResource",
	];
	/** IAM actions required for the DisassociateServiceActionFromProvisioningArtifact API call. */
	static readonly DisassociateServiceActionFromProvisioningArtifact: string[] =
		["servicecatalog:DisassociateServiceActionFromProvisioningArtifact"];
	/** IAM actions required for the DisassociateTagOptionFromResource API call. */
	static readonly DisassociateTagOptionFromResource: string[] = [
		"servicecatalog:DisassociateTagOptionFromResource",
	];
	/** IAM actions required for the EnableAWSOrganizationsAccess API call. */
	static readonly EnableAWSOrganizationsAccess: string[] = [
		"servicecatalog:EnableAWSOrganizationsAccess",
	];
	/** IAM actions required for the ExecuteProvisionedProductPlan API call. */
	static readonly ExecuteProvisionedProductPlan: string[] = [
		"servicecatalog:ExecuteProvisionedProductPlan",
	];
	/** IAM actions required for the ExecuteProvisionedProductServiceAction API call. */
	static readonly ExecuteProvisionedProductServiceAction: string[] = [
		"servicecatalog:ExecuteProvisionedProductServiceAction",
	];
	/** IAM actions required for the GetAWSOrganizationsAccessStatus API call. */
	static readonly opGetAWSOrganizationsAccessStatus: string[] = [
		"servicecatalog:GetAWSOrganizationsAccessStatus",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"servicecatalog:GetApplication",
	];
	/** IAM actions required for the GetAssociatedResource API call. */
	static readonly opGetAssociatedResource: string[] = [
		"servicecatalog:GetAssociatedResource",
	];
	/** IAM actions required for the GetAttributeGroup API call. */
	static readonly opGetAttributeGroup: string[] = [
		"servicecatalog:GetAttributeGroup",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly opGetConfiguration: string[] = [
		"servicecatalog:GetConfiguration",
	];
	/** IAM actions required for the GetProvisionedProductOutputs API call. */
	static readonly opGetProvisionedProductOutputs: string[] = [
		"servicecatalog:GetProvisionedProductOutputs",
	];
	/** IAM actions required for the ImportAsProvisionedProduct API call. */
	static readonly ImportAsProvisionedProduct: string[] = [
		"servicecatalog:ImportAsProvisionedProduct",
	];
	/** IAM actions required for the ListAcceptedPortfolioShares API call. */
	static readonly ListAcceptedPortfolioShares: string[] = [
		"servicecatalog:ListAcceptedPortfolioShares",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"servicecatalog:ListApplications",
	];
	/** IAM actions required for the ListAssociatedAttributeGroups API call. */
	static readonly ListAssociatedAttributeGroups: string[] = [
		"servicecatalog:ListAssociatedAttributeGroups",
	];
	/** IAM actions required for the ListAssociatedResources API call. */
	static readonly ListAssociatedResources: string[] = [
		"servicecatalog:ListAssociatedResources",
	];
	/** IAM actions required for the ListAttributeGroups API call. */
	static readonly ListAttributeGroups: string[] = [
		"servicecatalog:ListAttributeGroups",
	];
	/** IAM actions required for the ListAttributeGroupsForApplication API call. */
	static readonly ListAttributeGroupsForApplication: string[] = [
		"servicecatalog:ListAttributeGroupsForApplication",
	];
	/** IAM actions required for the ListBudgetsForResource API call. */
	static readonly ListBudgetsForResource: string[] = [
		"servicecatalog:ListBudgetsForResource",
	];
	/** IAM actions required for the ListConstraintsForPortfolio API call. */
	static readonly ListConstraintsForPortfolio: string[] = [
		"servicecatalog:ListConstraintsForPortfolio",
	];
	/** IAM actions required for the ListLaunchPaths API call. */
	static readonly ListLaunchPaths: string[] = [
		"servicecatalog:ListLaunchPaths",
	];
	/** IAM actions required for the ListOrganizationPortfolioAccess API call. */
	static readonly ListOrganizationPortfolioAccess: string[] = [
		"servicecatalog:ListOrganizationPortfolioAccess",
	];
	/** IAM actions required for the ListPortfolioAccess API call. */
	static readonly ListPortfolioAccess: string[] = [
		"servicecatalog:ListPortfolioAccess",
	];
	/** IAM actions required for the ListPortfolios API call. */
	static readonly ListPortfolios: string[] = ["servicecatalog:ListPortfolios"];
	/** IAM actions required for the ListPortfoliosForProduct API call. */
	static readonly ListPortfoliosForProduct: string[] = [
		"servicecatalog:ListPortfoliosForProduct",
	];
	/** IAM actions required for the ListPrincipalsForPortfolio API call. */
	static readonly ListPrincipalsForPortfolio: string[] = [
		"servicecatalog:ListPrincipalsForPortfolio",
	];
	/** IAM actions required for the ListProvisionedProductPlans API call. */
	static readonly ListProvisionedProductPlans: string[] = [
		"servicecatalog:ListProvisionedProductPlans",
	];
	/** IAM actions required for the ListProvisioningArtifacts API call. */
	static readonly ListProvisioningArtifacts: string[] = [
		"servicecatalog:ListProvisioningArtifacts",
	];
	/** IAM actions required for the ListProvisioningArtifactsForServiceAction API call. */
	static readonly ListProvisioningArtifactsForServiceAction: string[] = [
		"servicecatalog:ListProvisioningArtifactsForServiceAction",
	];
	/** IAM actions required for the ListRecordHistory API call. */
	static readonly ListRecordHistory: string[] = [
		"servicecatalog:ListRecordHistory",
	];
	/** IAM actions required for the ListResourcesForTagOption API call. */
	static readonly ListResourcesForTagOption: string[] = [
		"servicecatalog:ListResourcesForTagOption",
	];
	/** IAM actions required for the ListServiceActions API call. */
	static readonly ListServiceActions: string[] = [
		"servicecatalog:ListServiceActions",
	];
	/** IAM actions required for the ListServiceActionsForProvisioningArtifact API call. */
	static readonly ListServiceActionsForProvisioningArtifact: string[] = [
		"servicecatalog:ListServiceActionsForProvisioningArtifact",
	];
	/** IAM actions required for the ListStackInstancesForProvisionedProduct API call. */
	static readonly ListStackInstancesForProvisionedProduct: string[] = [
		"servicecatalog:ListStackInstancesForProvisionedProduct",
	];
	/** IAM actions required for the ListTagOptions API call. */
	static readonly ListTagOptions: string[] = ["servicecatalog:ListTagOptions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"servicecatalog:ListTagsForResource",
	];
	/** IAM actions required for the NotifyProvisionProductEngineWorkflowResult API call. */
	static readonly NotifyProvisionProductEngineWorkflowResult: string[] = [
		"servicecatalog:NotifyProvisionProductEngineWorkflowResult",
	];
	/** IAM actions required for the NotifyTerminateProvisionedProductEngineWorkflowResult API call. */
	static readonly NotifyTerminateProvisionedProductEngineWorkflowResult: string[] =
		["servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult"];
	/** IAM actions required for the NotifyUpdateProvisionedProductEngineWorkflowResult API call. */
	static readonly NotifyUpdateProvisionedProductEngineWorkflowResult: string[] =
		["servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult"];
	/** IAM actions required for the ProvisionProduct API call. */
	static readonly ProvisionProduct: string[] = [
		"servicecatalog:ProvisionProduct",
	];
	/** IAM actions required for the PutConfiguration API call. */
	static readonly PutConfiguration: string[] = [
		"servicecatalog:PutConfiguration",
	];
	/** IAM actions required for the RejectPortfolioShare API call. */
	static readonly RejectPortfolioShare: string[] = [
		"servicecatalog:RejectPortfolioShare",
	];
	/** IAM actions required for the ScanProvisionedProducts API call. */
	static readonly ScanProvisionedProducts: string[] = [
		"servicecatalog:ScanProvisionedProducts",
	];
	/** IAM actions required for the SearchProducts API call. */
	static readonly SearchProducts: string[] = ["servicecatalog:SearchProducts"];
	/** IAM actions required for the SearchProductsAsAdmin API call. */
	static readonly SearchProductsAsAdmin: string[] = [
		"servicecatalog:SearchProductsAsAdmin",
	];
	/** IAM actions required for the SearchProvisionedProducts API call. */
	static readonly SearchProvisionedProducts: string[] = [
		"servicecatalog:SearchProvisionedProducts",
	];
	/** IAM actions required for the SyncResource API call. */
	static readonly SyncResource: string[] = ["servicecatalog:SyncResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["servicecatalog:TagResource"];
	/** IAM actions required for the TerminateProvisionedProduct API call. */
	static readonly TerminateProvisionedProduct: string[] = [
		"servicecatalog:TerminateProvisionedProduct",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["servicecatalog:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"servicecatalog:UpdateApplication",
	];
	/** IAM actions required for the UpdateAttributeGroup API call. */
	static readonly UpdateAttributeGroup: string[] = [
		"servicecatalog:UpdateAttributeGroup",
	];
	/** IAM actions required for the UpdateConstraint API call. */
	static readonly UpdateConstraint: string[] = [
		"iam:PassRole",
		"servicecatalog:UpdateConstraint",
	];
	/** IAM actions required for the UpdatePortfolio API call. */
	static readonly UpdatePortfolio: string[] = [
		"servicecatalog:TagResource",
		"servicecatalog:UntagResource",
		"servicecatalog:UpdatePortfolio",
	];
	/** IAM actions required for the UpdatePortfolioShare API call. */
	static readonly UpdatePortfolioShare: string[] = [
		"servicecatalog:UpdatePortfolioShare",
	];
	/** IAM actions required for the UpdateProduct API call. */
	static readonly UpdateProduct: string[] = [
		"codestar-connections:PassConnection",
		"servicecatalog:TagResource",
		"servicecatalog:UntagResource",
		"servicecatalog:UpdateProduct",
	];
	/** IAM actions required for the UpdateProvisionedProduct API call. */
	static readonly UpdateProvisionedProduct: string[] = [
		"servicecatalog:UpdateProvisionedProduct",
	];
	/** IAM actions required for the UpdateProvisionedProductProperties API call. */
	static readonly UpdateProvisionedProductProperties: string[] = [
		"servicecatalog:UpdateProvisionedProductProperties",
	];
	/** IAM actions required for the UpdateProvisioningArtifact API call. */
	static readonly UpdateProvisioningArtifact: string[] = [
		"servicecatalog:UpdateProvisioningArtifact",
	];
	/** IAM actions required for the UpdateServiceAction API call. */
	static readonly UpdateServiceAction: string[] = [
		"iam:PassRole",
		"servicecatalog:UpdateServiceAction",
	];
	/** IAM actions required for the UpdateTagOption API call. */
	static readonly UpdateTagOption: string[] = [
		"servicecatalog:UpdateTagOption",
	];
}

/**
 * Condition key constants and builders for servicecatalog.
 */
export class ServiceCatalogConditions {
	/** Condition keys applicable to the AssociateResource action. */
	static readonly AssociateResourceConditionKeys: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAttributeGroup action. */
	static readonly CreateAttributeGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePortfolio action. */
	static readonly CreatePortfolioConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProduct action. */
	static readonly CreateProductConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisionedProductPlan action. */
	static readonly CreateProvisionedProductPlanConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DeleteProvisionedProductPlan action. */
	static readonly DeleteProvisionedProductPlanConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeProvisionedProduct action. */
	static readonly DescribeProvisionedProductConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeProvisionedProductPlan action. */
	static readonly DescribeProvisionedProductPlanConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeRecord action. */
	static readonly DescribeRecordConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeServiceActionExecutionParameters action. */
	static readonly DescribeServiceActionExecutionParametersConditionKeys: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the DisassociateResource action. */
	static readonly DisassociateResourceConditionKeys: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the ExecuteProvisionedProductPlan action. */
	static readonly ExecuteProvisionedProductPlanConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ExecuteProvisionedProductServiceAction action. */
	static readonly ExecuteProvisionedProductServiceActionConditionKeys: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the GetAssociatedResource action. */
	static readonly actionGetAssociatedResourceConditionKeys: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the ListProvisionedProductPlans action. */
	static readonly ListProvisionedProductPlansConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ListRecordHistory action. */
	static readonly ListRecordHistoryConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ListServiceActionsForProvisioningArtifact action. */
	static readonly ListServiceActionsForProvisioningArtifactConditionKeys: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the ListStackInstancesForProvisionedProduct action. */
	static readonly ListStackInstancesForProvisionedProductConditionKeys: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the ScanProvisionedProducts action. */
	static readonly ScanProvisionedProductsConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the SearchProvisionedProducts action. */
	static readonly SearchProvisionedProductsConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TerminateProvisionedProduct action. */
	static readonly TerminateProvisionedProductConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdatePortfolio action. */
	static readonly UpdatePortfolioConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProduct action. */
	static readonly UpdateProductConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProvisionedProduct action. */
	static readonly UpdateProvisionedProductConditionKeys: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: servicecatalog:Resource (String) */
	static readonly RESOURCE = "servicecatalog:Resource";
	/** Condition key: servicecatalog:ResourceType (String) */
	static readonly RESOURCE_TYPE = "servicecatalog:ResourceType";
	/** Condition key: servicecatalog:accountLevel (String) */
	static readonly ACCOUNT_LEVEL = "servicecatalog:accountLevel";
	/** Condition key: servicecatalog:roleLevel (String) */
	static readonly ROLE_LEVEL = "servicecatalog:roleLevel";
	/** Condition key: servicecatalog:userLevel (String) */
	static readonly USER_LEVEL = "servicecatalog:userLevel";

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

	/**
	 * Generates a condition block for `servicecatalog:Resource`.
	 */
	static resource(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicecatalog:Resource": value } };
	}

	/**
	 * Generates a condition block for `servicecatalog:ResourceType`.
	 */
	static resourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicecatalog:ResourceType": value } };
	}

	/**
	 * Generates a condition block for `servicecatalog:accountLevel`.
	 */
	static accountLevel(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicecatalog:accountLevel": value } };
	}

	/**
	 * Generates a condition block for `servicecatalog:roleLevel`.
	 */
	static roleLevel(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicecatalog:roleLevel": value } };
	}

	/**
	 * Generates a condition block for `servicecatalog:userLevel`.
	 */
	static userLevel(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicecatalog:userLevel": value } };
	}
}
