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
	static readonly ACCEPT_PORTFOLIO_SHARE =
		"servicecatalog:AcceptPortfolioShare";
	/** [Write] servicecatalog:AssociateAttributeGroup */
	static readonly ASSOCIATE_ATTRIBUTE_GROUP =
		"servicecatalog:AssociateAttributeGroup";
	/** [Write] servicecatalog:AssociateBudgetWithResource */
	static readonly ASSOCIATE_BUDGET_WITH_RESOURCE =
		"servicecatalog:AssociateBudgetWithResource";
	/** [Write] servicecatalog:AssociatePrincipalWithPortfolio */
	static readonly ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO =
		"servicecatalog:AssociatePrincipalWithPortfolio";
	/** [Write] servicecatalog:AssociateProductWithPortfolio */
	static readonly ASSOCIATE_PRODUCT_WITH_PORTFOLIO =
		"servicecatalog:AssociateProductWithPortfolio";
	/** [Write] servicecatalog:AssociateResource */
	static readonly ASSOCIATE_RESOURCE = "servicecatalog:AssociateResource";
	/** [Write] servicecatalog:AssociateServiceActionWithProvisioningArtifact */
	static readonly ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT =
		"servicecatalog:AssociateServiceActionWithProvisioningArtifact";
	/** [Write] servicecatalog:AssociateTagOptionWithResource */
	static readonly ASSOCIATE_TAG_OPTION_WITH_RESOURCE =
		"servicecatalog:AssociateTagOptionWithResource";
	/** [Write] servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact */
	static readonly BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT =
		"servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact";
	/** [Write] servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact */
	static readonly BATCH_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT =
		"servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact";
	/** [Write] servicecatalog:CopyProduct */
	static readonly COPY_PRODUCT = "servicecatalog:CopyProduct";
	/** [Write] servicecatalog:CreateApplication */
	static readonly CREATE_APPLICATION = "servicecatalog:CreateApplication";
	/** [Write] servicecatalog:CreateAttributeGroup */
	static readonly CREATE_ATTRIBUTE_GROUP =
		"servicecatalog:CreateAttributeGroup";
	/** [Write] servicecatalog:CreateConstraint */
	static readonly CREATE_CONSTRAINT = "servicecatalog:CreateConstraint";
	/** [Write] servicecatalog:CreatePortfolio */
	static readonly CREATE_PORTFOLIO = "servicecatalog:CreatePortfolio";
	/** [PermissionManagement] servicecatalog:CreatePortfolioShare */
	static readonly CREATE_PORTFOLIO_SHARE =
		"servicecatalog:CreatePortfolioShare";
	/** [Write] servicecatalog:CreateProduct */
	static readonly CREATE_PRODUCT = "servicecatalog:CreateProduct";
	/** [Write] servicecatalog:CreateProvisionedProductPlan */
	static readonly CREATE_PROVISIONED_PRODUCT_PLAN =
		"servicecatalog:CreateProvisionedProductPlan";
	/** [Write] servicecatalog:CreateProvisioningArtifact */
	static readonly CREATE_PROVISIONING_ARTIFACT =
		"servicecatalog:CreateProvisioningArtifact";
	/** [Write] servicecatalog:CreateServiceAction */
	static readonly CREATE_SERVICE_ACTION = "servicecatalog:CreateServiceAction";
	/** [Write] servicecatalog:CreateTagOption */
	static readonly CREATE_TAG_OPTION = "servicecatalog:CreateTagOption";
	/** [Write] servicecatalog:DeleteApplication */
	static readonly DELETE_APPLICATION = "servicecatalog:DeleteApplication";
	/** [Write] servicecatalog:DeleteAttributeGroup */
	static readonly DELETE_ATTRIBUTE_GROUP =
		"servicecatalog:DeleteAttributeGroup";
	/** [Write] servicecatalog:DeleteConstraint */
	static readonly DELETE_CONSTRAINT = "servicecatalog:DeleteConstraint";
	/** [Write] servicecatalog:DeletePortfolio */
	static readonly DELETE_PORTFOLIO = "servicecatalog:DeletePortfolio";
	/** [PermissionManagement] servicecatalog:DeletePortfolioShare */
	static readonly DELETE_PORTFOLIO_SHARE =
		"servicecatalog:DeletePortfolioShare";
	/** [Write] servicecatalog:DeleteProduct */
	static readonly DELETE_PRODUCT = "servicecatalog:DeleteProduct";
	/** [Write] servicecatalog:DeleteProvisionedProductPlan */
	static readonly DELETE_PROVISIONED_PRODUCT_PLAN =
		"servicecatalog:DeleteProvisionedProductPlan";
	/** [Write] servicecatalog:DeleteProvisioningArtifact */
	static readonly DELETE_PROVISIONING_ARTIFACT =
		"servicecatalog:DeleteProvisioningArtifact";
	/** [Write] servicecatalog:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"servicecatalog:DeleteResourcePolicy";
	/** [Write] servicecatalog:DeleteServiceAction */
	static readonly DELETE_SERVICE_ACTION = "servicecatalog:DeleteServiceAction";
	/** [Write] servicecatalog:DeleteTagOption */
	static readonly DELETE_TAG_OPTION = "servicecatalog:DeleteTagOption";
	/** [Read] servicecatalog:DescribeConstraint */
	static readonly DESCRIBE_CONSTRAINT = "servicecatalog:DescribeConstraint";
	/** [Read] servicecatalog:DescribeCopyProductStatus */
	static readonly DESCRIBE_COPY_PRODUCT_STATUS =
		"servicecatalog:DescribeCopyProductStatus";
	/** [Read] servicecatalog:DescribePortfolio */
	static readonly DESCRIBE_PORTFOLIO = "servicecatalog:DescribePortfolio";
	/** [Read] servicecatalog:DescribePortfolioShareStatus */
	static readonly DESCRIBE_PORTFOLIO_SHARE_STATUS =
		"servicecatalog:DescribePortfolioShareStatus";
	/** [List] servicecatalog:DescribePortfolioShares */
	static readonly DESCRIBE_PORTFOLIO_SHARES =
		"servicecatalog:DescribePortfolioShares";
	/** [Read] servicecatalog:DescribeProduct */
	static readonly DESCRIBE_PRODUCT = "servicecatalog:DescribeProduct";
	/** [Read] servicecatalog:DescribeProductAsAdmin */
	static readonly DESCRIBE_PRODUCT_AS_ADMIN =
		"servicecatalog:DescribeProductAsAdmin";
	/** [Read] servicecatalog:DescribeProductView */
	static readonly DESCRIBE_PRODUCT_VIEW = "servicecatalog:DescribeProductView";
	/** [Read] servicecatalog:DescribeProvisionedProduct */
	static readonly DESCRIBE_PROVISIONED_PRODUCT =
		"servicecatalog:DescribeProvisionedProduct";
	/** [Read] servicecatalog:DescribeProvisionedProductPlan */
	static readonly DESCRIBE_PROVISIONED_PRODUCT_PLAN =
		"servicecatalog:DescribeProvisionedProductPlan";
	/** [Read] servicecatalog:DescribeProvisioningArtifact */
	static readonly DESCRIBE_PROVISIONING_ARTIFACT =
		"servicecatalog:DescribeProvisioningArtifact";
	/** [Read] servicecatalog:DescribeProvisioningParameters */
	static readonly DESCRIBE_PROVISIONING_PARAMETERS =
		"servicecatalog:DescribeProvisioningParameters";
	/** [Read] servicecatalog:DescribeRecord */
	static readonly DESCRIBE_RECORD = "servicecatalog:DescribeRecord";
	/** [Read] servicecatalog:DescribeServiceAction */
	static readonly DESCRIBE_SERVICE_ACTION =
		"servicecatalog:DescribeServiceAction";
	/** [Read] servicecatalog:DescribeServiceActionExecutionParameters */
	static readonly DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS =
		"servicecatalog:DescribeServiceActionExecutionParameters";
	/** [Read] servicecatalog:DescribeTagOption */
	static readonly DESCRIBE_TAG_OPTION = "servicecatalog:DescribeTagOption";
	/** [Write] servicecatalog:DisableAWSOrganizationsAccess */
	static readonly DISABLE_AWS_ORGANIZATIONS_ACCESS =
		"servicecatalog:DisableAWSOrganizationsAccess";
	/** [Write] servicecatalog:DisassociateAttributeGroup */
	static readonly DISASSOCIATE_ATTRIBUTE_GROUP =
		"servicecatalog:DisassociateAttributeGroup";
	/** [Write] servicecatalog:DisassociateBudgetFromResource */
	static readonly DISASSOCIATE_BUDGET_FROM_RESOURCE =
		"servicecatalog:DisassociateBudgetFromResource";
	/** [Write] servicecatalog:DisassociatePrincipalFromPortfolio */
	static readonly DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO =
		"servicecatalog:DisassociatePrincipalFromPortfolio";
	/** [Write] servicecatalog:DisassociateProductFromPortfolio */
	static readonly DISASSOCIATE_PRODUCT_FROM_PORTFOLIO =
		"servicecatalog:DisassociateProductFromPortfolio";
	/** [Write] servicecatalog:DisassociateResource */
	static readonly DISASSOCIATE_RESOURCE = "servicecatalog:DisassociateResource";
	/** [Write] servicecatalog:DisassociateServiceActionFromProvisioningArtifact */
	static readonly DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT =
		"servicecatalog:DisassociateServiceActionFromProvisioningArtifact";
	/** [Write] servicecatalog:DisassociateTagOptionFromResource */
	static readonly DISASSOCIATE_TAG_OPTION_FROM_RESOURCE =
		"servicecatalog:DisassociateTagOptionFromResource";
	/** [Write] servicecatalog:EnableAWSOrganizationsAccess */
	static readonly ENABLE_AWS_ORGANIZATIONS_ACCESS =
		"servicecatalog:EnableAWSOrganizationsAccess";
	/** [Write] servicecatalog:ExecuteProvisionedProductPlan */
	static readonly EXECUTE_PROVISIONED_PRODUCT_PLAN =
		"servicecatalog:ExecuteProvisionedProductPlan";
	/** [Write] servicecatalog:ExecuteProvisionedProductServiceAction */
	static readonly EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION =
		"servicecatalog:ExecuteProvisionedProductServiceAction";
	/** [Read] servicecatalog:GetAWSOrganizationsAccessStatus */
	static readonly GET_AWS_ORGANIZATIONS_ACCESS_STATUS =
		"servicecatalog:GetAWSOrganizationsAccessStatus";
	/** [Read] servicecatalog:GetApplication */
	static readonly GET_APPLICATION = "servicecatalog:GetApplication";
	/** [Read] servicecatalog:GetAssociatedResource */
	static readonly GET_ASSOCIATED_RESOURCE =
		"servicecatalog:GetAssociatedResource";
	/** [Read] servicecatalog:GetAttributeGroup */
	static readonly GET_ATTRIBUTE_GROUP = "servicecatalog:GetAttributeGroup";
	/** [Read] servicecatalog:GetConfiguration */
	static readonly GET_CONFIGURATION = "servicecatalog:GetConfiguration";
	/** [Read] servicecatalog:GetProvisionedProductOutputs */
	static readonly GET_PROVISIONED_PRODUCT_OUTPUTS =
		"servicecatalog:GetProvisionedProductOutputs";
	/** [Read] servicecatalog:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "servicecatalog:GetResourcePolicy";
	/** [Write] servicecatalog:ImportAsProvisionedProduct */
	static readonly IMPORT_AS_PROVISIONED_PRODUCT =
		"servicecatalog:ImportAsProvisionedProduct";
	/** [List] servicecatalog:ListAcceptedPortfolioShares */
	static readonly LIST_ACCEPTED_PORTFOLIO_SHARES =
		"servicecatalog:ListAcceptedPortfolioShares";
	/** [List] servicecatalog:ListApplications */
	static readonly LIST_APPLICATIONS = "servicecatalog:ListApplications";
	/** [List] servicecatalog:ListAssociatedAttributeGroups */
	static readonly LIST_ASSOCIATED_ATTRIBUTE_GROUPS =
		"servicecatalog:ListAssociatedAttributeGroups";
	/** [List] servicecatalog:ListAssociatedResources */
	static readonly LIST_ASSOCIATED_RESOURCES =
		"servicecatalog:ListAssociatedResources";
	/** [List] servicecatalog:ListAttributeGroups */
	static readonly LIST_ATTRIBUTE_GROUPS = "servicecatalog:ListAttributeGroups";
	/** [List] servicecatalog:ListAttributeGroupsForApplication */
	static readonly LIST_ATTRIBUTE_GROUPS_FOR_APPLICATION =
		"servicecatalog:ListAttributeGroupsForApplication";
	/** [List] servicecatalog:ListBudgetsForResource */
	static readonly LIST_BUDGETS_FOR_RESOURCE =
		"servicecatalog:ListBudgetsForResource";
	/** [List] servicecatalog:ListConstraintsForPortfolio */
	static readonly LIST_CONSTRAINTS_FOR_PORTFOLIO =
		"servicecatalog:ListConstraintsForPortfolio";
	/** [List] servicecatalog:ListLaunchPaths */
	static readonly LIST_LAUNCH_PATHS = "servicecatalog:ListLaunchPaths";
	/** [List] servicecatalog:ListOrganizationPortfolioAccess */
	static readonly LIST_ORGANIZATION_PORTFOLIO_ACCESS =
		"servicecatalog:ListOrganizationPortfolioAccess";
	/** [List] servicecatalog:ListPortfolioAccess */
	static readonly LIST_PORTFOLIO_ACCESS = "servicecatalog:ListPortfolioAccess";
	/** [List] servicecatalog:ListPortfolios */
	static readonly LIST_PORTFOLIOS = "servicecatalog:ListPortfolios";
	/** [List] servicecatalog:ListPortfoliosForProduct */
	static readonly LIST_PORTFOLIOS_FOR_PRODUCT =
		"servicecatalog:ListPortfoliosForProduct";
	/** [List] servicecatalog:ListPrincipalsForPortfolio */
	static readonly LIST_PRINCIPALS_FOR_PORTFOLIO =
		"servicecatalog:ListPrincipalsForPortfolio";
	/** [List] servicecatalog:ListProvisionedProductPlans */
	static readonly LIST_PROVISIONED_PRODUCT_PLANS =
		"servicecatalog:ListProvisionedProductPlans";
	/** [List] servicecatalog:ListProvisioningArtifacts */
	static readonly LIST_PROVISIONING_ARTIFACTS =
		"servicecatalog:ListProvisioningArtifacts";
	/** [List] servicecatalog:ListProvisioningArtifactsForServiceAction */
	static readonly LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION =
		"servicecatalog:ListProvisioningArtifactsForServiceAction";
	/** [List] servicecatalog:ListRecordHistory */
	static readonly LIST_RECORD_HISTORY = "servicecatalog:ListRecordHistory";
	/** [List] servicecatalog:ListResourcesForTagOption */
	static readonly LIST_RESOURCES_FOR_TAG_OPTION =
		"servicecatalog:ListResourcesForTagOption";
	/** [List] servicecatalog:ListServiceActions */
	static readonly LIST_SERVICE_ACTIONS = "servicecatalog:ListServiceActions";
	/** [List] servicecatalog:ListServiceActionsForProvisioningArtifact */
	static readonly LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT =
		"servicecatalog:ListServiceActionsForProvisioningArtifact";
	/** [List] servicecatalog:ListStackInstancesForProvisionedProduct */
	static readonly LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT =
		"servicecatalog:ListStackInstancesForProvisionedProduct";
	/** [List] servicecatalog:ListTagOptions */
	static readonly LIST_TAG_OPTIONS = "servicecatalog:ListTagOptions";
	/** [Read] servicecatalog:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "servicecatalog:ListTagsForResource";
	/** [Write] servicecatalog:NotifyProvisionProductEngineWorkflowResult */
	static readonly NOTIFY_PROVISION_PRODUCT_ENGINE_WORKFLOW_RESULT =
		"servicecatalog:NotifyProvisionProductEngineWorkflowResult";
	/** [Write] servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult */
	static readonly NOTIFY_TERMINATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT =
		"servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult";
	/** [Write] servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult */
	static readonly NOTIFY_UPDATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT =
		"servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult";
	/** [Write] servicecatalog:ProvisionProduct */
	static readonly PROVISION_PRODUCT = "servicecatalog:ProvisionProduct";
	/** [Write] servicecatalog:PutConfiguration */
	static readonly PUT_CONFIGURATION = "servicecatalog:PutConfiguration";
	/** [Write] servicecatalog:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "servicecatalog:PutResourcePolicy";
	/** [Write] servicecatalog:RejectPortfolioShare */
	static readonly REJECT_PORTFOLIO_SHARE =
		"servicecatalog:RejectPortfolioShare";
	/** [List] servicecatalog:ScanProvisionedProducts */
	static readonly SCAN_PROVISIONED_PRODUCTS =
		"servicecatalog:ScanProvisionedProducts";
	/** [List] servicecatalog:SearchProducts */
	static readonly SEARCH_PRODUCTS = "servicecatalog:SearchProducts";
	/** [List] servicecatalog:SearchProductsAsAdmin */
	static readonly SEARCH_PRODUCTS_AS_ADMIN =
		"servicecatalog:SearchProductsAsAdmin";
	/** [List] servicecatalog:SearchProvisionedProducts */
	static readonly SEARCH_PROVISIONED_PRODUCTS =
		"servicecatalog:SearchProvisionedProducts";
	/** [Write] servicecatalog:SyncResource */
	static readonly SYNC_RESOURCE = "servicecatalog:SyncResource";
	/** [Tagging] servicecatalog:TagResource */
	static readonly TAG_RESOURCE = "servicecatalog:TagResource";
	/** [Write] servicecatalog:TerminateProvisionedProduct */
	static readonly TERMINATE_PROVISIONED_PRODUCT =
		"servicecatalog:TerminateProvisionedProduct";
	/** [Tagging] servicecatalog:UntagResource */
	static readonly UNTAG_RESOURCE = "servicecatalog:UntagResource";
	/** [Write] servicecatalog:UpdateApplication */
	static readonly UPDATE_APPLICATION = "servicecatalog:UpdateApplication";
	/** [Write] servicecatalog:UpdateAttributeGroup */
	static readonly UPDATE_ATTRIBUTE_GROUP =
		"servicecatalog:UpdateAttributeGroup";
	/** [Write] servicecatalog:UpdateConstraint */
	static readonly UPDATE_CONSTRAINT = "servicecatalog:UpdateConstraint";
	/** [Write] servicecatalog:UpdatePortfolio */
	static readonly UPDATE_PORTFOLIO = "servicecatalog:UpdatePortfolio";
	/** [PermissionManagement] servicecatalog:UpdatePortfolioShare */
	static readonly UPDATE_PORTFOLIO_SHARE =
		"servicecatalog:UpdatePortfolioShare";
	/** [Write] servicecatalog:UpdateProduct */
	static readonly UPDATE_PRODUCT = "servicecatalog:UpdateProduct";
	/** [Write] servicecatalog:UpdateProvisionedProduct */
	static readonly UPDATE_PROVISIONED_PRODUCT =
		"servicecatalog:UpdateProvisionedProduct";
	/** [Write] servicecatalog:UpdateProvisionedProductProperties */
	static readonly UPDATE_PROVISIONED_PRODUCT_PROPERTIES =
		"servicecatalog:UpdateProvisionedProductProperties";
	/** [Write] servicecatalog:UpdateProvisioningArtifact */
	static readonly UPDATE_PROVISIONING_ARTIFACT =
		"servicecatalog:UpdateProvisioningArtifact";
	/** [Write] servicecatalog:UpdateServiceAction */
	static readonly UPDATE_SERVICE_ACTION = "servicecatalog:UpdateServiceAction";
	/** [Write] servicecatalog:UpdateTagOption */
	static readonly UPDATE_TAG_OPTION = "servicecatalog:UpdateTagOption";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ServiceCatalogActions.DESCRIBE_CONSTRAINT,
		ServiceCatalogActions.DESCRIBE_COPY_PRODUCT_STATUS,
		ServiceCatalogActions.DESCRIBE_PORTFOLIO,
		ServiceCatalogActions.DESCRIBE_PORTFOLIO_SHARE_STATUS,
		ServiceCatalogActions.DESCRIBE_PRODUCT,
		ServiceCatalogActions.DESCRIBE_PRODUCT_AS_ADMIN,
		ServiceCatalogActions.DESCRIBE_PRODUCT_VIEW,
		ServiceCatalogActions.DESCRIBE_PROVISIONED_PRODUCT,
		ServiceCatalogActions.DESCRIBE_PROVISIONED_PRODUCT_PLAN,
		ServiceCatalogActions.DESCRIBE_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.DESCRIBE_PROVISIONING_PARAMETERS,
		ServiceCatalogActions.DESCRIBE_RECORD,
		ServiceCatalogActions.DESCRIBE_SERVICE_ACTION,
		ServiceCatalogActions.DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS,
		ServiceCatalogActions.DESCRIBE_TAG_OPTION,
		ServiceCatalogActions.GET_AWS_ORGANIZATIONS_ACCESS_STATUS,
		ServiceCatalogActions.GET_APPLICATION,
		ServiceCatalogActions.GET_ASSOCIATED_RESOURCE,
		ServiceCatalogActions.GET_ATTRIBUTE_GROUP,
		ServiceCatalogActions.GET_CONFIGURATION,
		ServiceCatalogActions.GET_PROVISIONED_PRODUCT_OUTPUTS,
		ServiceCatalogActions.GET_RESOURCE_POLICY,
		ServiceCatalogActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ServiceCatalogActions.ACCEPT_PORTFOLIO_SHARE,
		ServiceCatalogActions.ASSOCIATE_ATTRIBUTE_GROUP,
		ServiceCatalogActions.ASSOCIATE_BUDGET_WITH_RESOURCE,
		ServiceCatalogActions.ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO,
		ServiceCatalogActions.ASSOCIATE_PRODUCT_WITH_PORTFOLIO,
		ServiceCatalogActions.ASSOCIATE_RESOURCE,
		ServiceCatalogActions.ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.ASSOCIATE_TAG_OPTION_WITH_RESOURCE,
		ServiceCatalogActions.BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.BATCH_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.COPY_PRODUCT,
		ServiceCatalogActions.CREATE_APPLICATION,
		ServiceCatalogActions.CREATE_ATTRIBUTE_GROUP,
		ServiceCatalogActions.CREATE_CONSTRAINT,
		ServiceCatalogActions.CREATE_PORTFOLIO,
		ServiceCatalogActions.CREATE_PRODUCT,
		ServiceCatalogActions.CREATE_PROVISIONED_PRODUCT_PLAN,
		ServiceCatalogActions.CREATE_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.CREATE_SERVICE_ACTION,
		ServiceCatalogActions.CREATE_TAG_OPTION,
		ServiceCatalogActions.DELETE_APPLICATION,
		ServiceCatalogActions.DELETE_ATTRIBUTE_GROUP,
		ServiceCatalogActions.DELETE_CONSTRAINT,
		ServiceCatalogActions.DELETE_PORTFOLIO,
		ServiceCatalogActions.DELETE_PRODUCT,
		ServiceCatalogActions.DELETE_PROVISIONED_PRODUCT_PLAN,
		ServiceCatalogActions.DELETE_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.DELETE_RESOURCE_POLICY,
		ServiceCatalogActions.DELETE_SERVICE_ACTION,
		ServiceCatalogActions.DELETE_TAG_OPTION,
		ServiceCatalogActions.DISABLE_AWS_ORGANIZATIONS_ACCESS,
		ServiceCatalogActions.DISASSOCIATE_ATTRIBUTE_GROUP,
		ServiceCatalogActions.DISASSOCIATE_BUDGET_FROM_RESOURCE,
		ServiceCatalogActions.DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO,
		ServiceCatalogActions.DISASSOCIATE_PRODUCT_FROM_PORTFOLIO,
		ServiceCatalogActions.DISASSOCIATE_RESOURCE,
		ServiceCatalogActions.DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.DISASSOCIATE_TAG_OPTION_FROM_RESOURCE,
		ServiceCatalogActions.ENABLE_AWS_ORGANIZATIONS_ACCESS,
		ServiceCatalogActions.EXECUTE_PROVISIONED_PRODUCT_PLAN,
		ServiceCatalogActions.EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION,
		ServiceCatalogActions.IMPORT_AS_PROVISIONED_PRODUCT,
		ServiceCatalogActions.NOTIFY_PROVISION_PRODUCT_ENGINE_WORKFLOW_RESULT,
		ServiceCatalogActions.NOTIFY_TERMINATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT,
		ServiceCatalogActions.NOTIFY_UPDATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT,
		ServiceCatalogActions.PROVISION_PRODUCT,
		ServiceCatalogActions.PUT_CONFIGURATION,
		ServiceCatalogActions.PUT_RESOURCE_POLICY,
		ServiceCatalogActions.REJECT_PORTFOLIO_SHARE,
		ServiceCatalogActions.SYNC_RESOURCE,
		ServiceCatalogActions.TERMINATE_PROVISIONED_PRODUCT,
		ServiceCatalogActions.UPDATE_APPLICATION,
		ServiceCatalogActions.UPDATE_ATTRIBUTE_GROUP,
		ServiceCatalogActions.UPDATE_CONSTRAINT,
		ServiceCatalogActions.UPDATE_PORTFOLIO,
		ServiceCatalogActions.UPDATE_PRODUCT,
		ServiceCatalogActions.UPDATE_PROVISIONED_PRODUCT,
		ServiceCatalogActions.UPDATE_PROVISIONED_PRODUCT_PROPERTIES,
		ServiceCatalogActions.UPDATE_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.UPDATE_SERVICE_ACTION,
		ServiceCatalogActions.UPDATE_TAG_OPTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ServiceCatalogActions.DESCRIBE_PORTFOLIO_SHARES,
		ServiceCatalogActions.LIST_ACCEPTED_PORTFOLIO_SHARES,
		ServiceCatalogActions.LIST_APPLICATIONS,
		ServiceCatalogActions.LIST_ASSOCIATED_ATTRIBUTE_GROUPS,
		ServiceCatalogActions.LIST_ASSOCIATED_RESOURCES,
		ServiceCatalogActions.LIST_ATTRIBUTE_GROUPS,
		ServiceCatalogActions.LIST_ATTRIBUTE_GROUPS_FOR_APPLICATION,
		ServiceCatalogActions.LIST_BUDGETS_FOR_RESOURCE,
		ServiceCatalogActions.LIST_CONSTRAINTS_FOR_PORTFOLIO,
		ServiceCatalogActions.LIST_LAUNCH_PATHS,
		ServiceCatalogActions.LIST_ORGANIZATION_PORTFOLIO_ACCESS,
		ServiceCatalogActions.LIST_PORTFOLIO_ACCESS,
		ServiceCatalogActions.LIST_PORTFOLIOS,
		ServiceCatalogActions.LIST_PORTFOLIOS_FOR_PRODUCT,
		ServiceCatalogActions.LIST_PRINCIPALS_FOR_PORTFOLIO,
		ServiceCatalogActions.LIST_PROVISIONED_PRODUCT_PLANS,
		ServiceCatalogActions.LIST_PROVISIONING_ARTIFACTS,
		ServiceCatalogActions.LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION,
		ServiceCatalogActions.LIST_RECORD_HISTORY,
		ServiceCatalogActions.LIST_RESOURCES_FOR_TAG_OPTION,
		ServiceCatalogActions.LIST_SERVICE_ACTIONS,
		ServiceCatalogActions.LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT,
		ServiceCatalogActions.LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT,
		ServiceCatalogActions.LIST_TAG_OPTIONS,
		ServiceCatalogActions.SCAN_PROVISIONED_PRODUCTS,
		ServiceCatalogActions.SEARCH_PRODUCTS,
		ServiceCatalogActions.SEARCH_PRODUCTS_AS_ADMIN,
		ServiceCatalogActions.SEARCH_PROVISIONED_PRODUCTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ServiceCatalogActions.CREATE_PORTFOLIO_SHARE,
		ServiceCatalogActions.DELETE_PORTFOLIO_SHARE,
		ServiceCatalogActions.UPDATE_PORTFOLIO_SHARE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ServiceCatalogActions.TAG_RESOURCE,
		ServiceCatalogActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):servicecatalog:(?<region>[^:]*):(?<account>[^:]*):/applications/(?<applicationId>[^:/?]+)$",
);
const AttributeGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):servicecatalog:(?<region>[^:]*):(?<account>[^:]*):/attribute-groups/(?<attributeGroupId>[^:/?]+)$",
);
const PortfolioArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):catalog:(?<region>[^:]*):(?<account>[^:]*):portfolio/(?<portfolioId>[^:/?]+)$",
);
const ProductArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):catalog:(?<region>[^:]*):(?<account>[^:]*):product/(?<productId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for servicecatalog resources.
 */
export class ServiceCatalogResources {
	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static attributeGroup(props: {
		/** The AttributeGroupId component of the ARN. */
		readonly attributeGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAttributeGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		attributeGroupId: string;
	} {
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
	static portfolio(props: {
		/** The PortfolioId component of the ARN. */
		readonly portfolioId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePortfolioArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portfolioId: string;
	} {
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
	static product(props: {
		/** The ProductId component of the ARN. */
		readonly productId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProductArn(arn: string): {
		partition: string;
		region: string;
		account: string;
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
			productId: match.groups!.productId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for servicecatalog.
 */
export class ServiceCatalogOperations {
	/** IAM actions required for the AcceptPortfolioShare API call. */
	static readonly ACCEPT_PORTFOLIO_SHARE: string[] = [
		"servicecatalog:AcceptPortfolioShare",
	];
	/** IAM actions required for the AssociateAttributeGroup API call. */
	static readonly ASSOCIATE_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:AssociateAttributeGroup",
	];
	/** IAM actions required for the AssociateBudgetWithResource API call. */
	static readonly ASSOCIATE_BUDGET_WITH_RESOURCE: string[] = [
		"servicecatalog:AssociateBudgetWithResource",
	];
	/** IAM actions required for the AssociatePrincipalWithPortfolio API call. */
	static readonly ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO: string[] = [
		"servicecatalog:AssociatePrincipalWithPortfolio",
	];
	/** IAM actions required for the AssociateProductWithPortfolio API call. */
	static readonly ASSOCIATE_PRODUCT_WITH_PORTFOLIO: string[] = [
		"servicecatalog:AssociateProductWithPortfolio",
	];
	/** IAM actions required for the AssociateResource API call. */
	static readonly ASSOCIATE_RESOURCE: string[] = [
		"servicecatalog:AssociateResource",
	];
	/** IAM actions required for the AssociateServiceActionWithProvisioningArtifact API call. */
	static readonly ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT: string[] =
		["servicecatalog:AssociateServiceActionWithProvisioningArtifact"];
	/** IAM actions required for the AssociateTagOptionWithResource API call. */
	static readonly ASSOCIATE_TAG_OPTION_WITH_RESOURCE: string[] = [
		"servicecatalog:AssociateTagOptionWithResource",
	];
	/** IAM actions required for the BatchAssociateServiceActionWithProvisioningArtifact API call. */
	static readonly BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT: string[] =
		["servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact"];
	/** IAM actions required for the BatchDisassociateServiceActionFromProvisioningArtifact API call. */
	static readonly BATCH_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT: string[] =
		["servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact"];
	/** IAM actions required for the CopyProduct API call. */
	static readonly COPY_PRODUCT: string[] = ["servicecatalog:CopyProduct"];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"servicecatalog:CreateApplication",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateAttributeGroup API call. */
	static readonly CREATE_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:CreateAttributeGroup",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateConstraint API call. */
	static readonly CREATE_CONSTRAINT: string[] = [
		"servicecatalog:CreateConstraint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePortfolio API call. */
	static readonly CREATE_PORTFOLIO: string[] = [
		"servicecatalog:CreatePortfolio",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreatePortfolioShare API call. */
	static readonly CREATE_PORTFOLIO_SHARE: string[] = [
		"servicecatalog:CreatePortfolioShare",
	];
	/** IAM actions required for the CreateProduct API call. */
	static readonly CREATE_PRODUCT: string[] = [
		"servicecatalog:CreateProduct",
		"codestar-connections:PassConnection",
		"servicecatalog:TagResource",
	];
	/** IAM actions required for the CreateProvisionedProductPlan API call. */
	static readonly CREATE_PROVISIONED_PRODUCT_PLAN: string[] = [
		"servicecatalog:CreateProvisionedProductPlan",
	];
	/** IAM actions required for the CreateProvisioningArtifact API call. */
	static readonly CREATE_PROVISIONING_ARTIFACT: string[] = [
		"servicecatalog:CreateProvisioningArtifact",
	];
	/** IAM actions required for the CreateServiceAction API call. */
	static readonly CREATE_SERVICE_ACTION: string[] = [
		"servicecatalog:CreateServiceAction",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTagOption API call. */
	static readonly CREATE_TAG_OPTION: string[] = [
		"servicecatalog:CreateTagOption",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"servicecatalog:DeleteApplication",
	];
	/** IAM actions required for the DeleteAttributeGroup API call. */
	static readonly DELETE_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:DeleteAttributeGroup",
	];
	/** IAM actions required for the DeleteConstraint API call. */
	static readonly DELETE_CONSTRAINT: string[] = [
		"servicecatalog:DeleteConstraint",
	];
	/** IAM actions required for the DeletePortfolio API call. */
	static readonly DELETE_PORTFOLIO: string[] = [
		"servicecatalog:DeletePortfolio",
	];
	/** IAM actions required for the DeletePortfolioShare API call. */
	static readonly DELETE_PORTFOLIO_SHARE: string[] = [
		"servicecatalog:DeletePortfolioShare",
	];
	/** IAM actions required for the DeleteProduct API call. */
	static readonly DELETE_PRODUCT: string[] = ["servicecatalog:DeleteProduct"];
	/** IAM actions required for the DeleteProvisionedProductPlan API call. */
	static readonly DELETE_PROVISIONED_PRODUCT_PLAN: string[] = [
		"servicecatalog:DeleteProvisionedProductPlan",
	];
	/** IAM actions required for the DeleteProvisioningArtifact API call. */
	static readonly DELETE_PROVISIONING_ARTIFACT: string[] = [
		"servicecatalog:DeleteProvisioningArtifact",
	];
	/** IAM actions required for the DeleteServiceAction API call. */
	static readonly DELETE_SERVICE_ACTION: string[] = [
		"servicecatalog:DeleteServiceAction",
	];
	/** IAM actions required for the DeleteTagOption API call. */
	static readonly DELETE_TAG_OPTION: string[] = [
		"servicecatalog:DeleteTagOption",
	];
	/** IAM actions required for the DescribeConstraint API call. */
	static readonly DESCRIBE_CONSTRAINT: string[] = [
		"servicecatalog:DescribeConstraint",
	];
	/** IAM actions required for the DescribeCopyProductStatus API call. */
	static readonly DESCRIBE_COPY_PRODUCT_STATUS: string[] = [
		"servicecatalog:DescribeCopyProductStatus",
	];
	/** IAM actions required for the DescribePortfolio API call. */
	static readonly DESCRIBE_PORTFOLIO: string[] = [
		"servicecatalog:DescribePortfolio",
	];
	/** IAM actions required for the DescribePortfolioShareStatus API call. */
	static readonly DESCRIBE_PORTFOLIO_SHARE_STATUS: string[] = [
		"servicecatalog:DescribePortfolioShareStatus",
	];
	/** IAM actions required for the DescribePortfolioShares API call. */
	static readonly DESCRIBE_PORTFOLIO_SHARES: string[] = [
		"servicecatalog:DescribePortfolioShares",
	];
	/** IAM actions required for the DescribeProduct API call. */
	static readonly DESCRIBE_PRODUCT: string[] = [
		"servicecatalog:DescribeProduct",
	];
	/** IAM actions required for the DescribeProductAsAdmin API call. */
	static readonly DESCRIBE_PRODUCT_AS_ADMIN: string[] = [
		"servicecatalog:DescribeProductAsAdmin",
	];
	/** IAM actions required for the DescribeProductView API call. */
	static readonly DESCRIBE_PRODUCT_VIEW: string[] = [
		"servicecatalog:DescribeProductView",
	];
	/** IAM actions required for the DescribeProvisionedProduct API call. */
	static readonly DESCRIBE_PROVISIONED_PRODUCT: string[] = [
		"servicecatalog:DescribeProvisionedProduct",
	];
	/** IAM actions required for the DescribeProvisionedProductPlan API call. */
	static readonly DESCRIBE_PROVISIONED_PRODUCT_PLAN: string[] = [
		"servicecatalog:DescribeProvisionedProductPlan",
	];
	/** IAM actions required for the DescribeProvisioningArtifact API call. */
	static readonly DESCRIBE_PROVISIONING_ARTIFACT: string[] = [
		"servicecatalog:DescribeProvisioningArtifact",
	];
	/** IAM actions required for the DescribeProvisioningParameters API call. */
	static readonly DESCRIBE_PROVISIONING_PARAMETERS: string[] = [
		"servicecatalog:DescribeProvisioningParameters",
	];
	/** IAM actions required for the DescribeRecord API call. */
	static readonly DESCRIBE_RECORD: string[] = ["servicecatalog:DescribeRecord"];
	/** IAM actions required for the DescribeServiceAction API call. */
	static readonly DESCRIBE_SERVICE_ACTION: string[] = [
		"servicecatalog:DescribeServiceAction",
	];
	/** IAM actions required for the DescribeServiceActionExecutionParameters API call. */
	static readonly DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS: string[] = [
		"servicecatalog:DescribeServiceActionExecutionParameters",
	];
	/** IAM actions required for the DescribeTagOption API call. */
	static readonly DESCRIBE_TAG_OPTION: string[] = [
		"servicecatalog:DescribeTagOption",
	];
	/** IAM actions required for the DisableAWSOrganizationsAccess API call. */
	static readonly DISABLE_AWS_ORGANIZATIONS_ACCESS: string[] = [
		"servicecatalog:DisableAWSOrganizationsAccess",
	];
	/** IAM actions required for the DisassociateAttributeGroup API call. */
	static readonly DISASSOCIATE_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:DisassociateAttributeGroup",
	];
	/** IAM actions required for the DisassociateBudgetFromResource API call. */
	static readonly DISASSOCIATE_BUDGET_FROM_RESOURCE: string[] = [
		"servicecatalog:DisassociateBudgetFromResource",
	];
	/** IAM actions required for the DisassociatePrincipalFromPortfolio API call. */
	static readonly DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO: string[] = [
		"servicecatalog:DisassociatePrincipalFromPortfolio",
	];
	/** IAM actions required for the DisassociateProductFromPortfolio API call. */
	static readonly DISASSOCIATE_PRODUCT_FROM_PORTFOLIO: string[] = [
		"servicecatalog:DisassociateProductFromPortfolio",
	];
	/** IAM actions required for the DisassociateResource API call. */
	static readonly DISASSOCIATE_RESOURCE: string[] = [
		"servicecatalog:DisassociateResource",
	];
	/** IAM actions required for the DisassociateServiceActionFromProvisioningArtifact API call. */
	static readonly DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT: string[] =
		["servicecatalog:DisassociateServiceActionFromProvisioningArtifact"];
	/** IAM actions required for the DisassociateTagOptionFromResource API call. */
	static readonly DISASSOCIATE_TAG_OPTION_FROM_RESOURCE: string[] = [
		"servicecatalog:DisassociateTagOptionFromResource",
	];
	/** IAM actions required for the EnableAWSOrganizationsAccess API call. */
	static readonly ENABLE_AWS_ORGANIZATIONS_ACCESS: string[] = [
		"servicecatalog:EnableAWSOrganizationsAccess",
	];
	/** IAM actions required for the ExecuteProvisionedProductPlan API call. */
	static readonly EXECUTE_PROVISIONED_PRODUCT_PLAN: string[] = [
		"servicecatalog:ExecuteProvisionedProductPlan",
	];
	/** IAM actions required for the ExecuteProvisionedProductServiceAction API call. */
	static readonly EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION: string[] = [
		"servicecatalog:ExecuteProvisionedProductServiceAction",
	];
	/** IAM actions required for the GetAWSOrganizationsAccessStatus API call. */
	static readonly GET_AWS_ORGANIZATIONS_ACCESS_STATUS: string[] = [
		"servicecatalog:GetAWSOrganizationsAccessStatus",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["servicecatalog:GetApplication"];
	/** IAM actions required for the GetAssociatedResource API call. */
	static readonly GET_ASSOCIATED_RESOURCE: string[] = [
		"servicecatalog:GetAssociatedResource",
	];
	/** IAM actions required for the GetAttributeGroup API call. */
	static readonly GET_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:GetAttributeGroup",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly GET_CONFIGURATION: string[] = [
		"servicecatalog:GetConfiguration",
	];
	/** IAM actions required for the GetProvisionedProductOutputs API call. */
	static readonly GET_PROVISIONED_PRODUCT_OUTPUTS: string[] = [
		"servicecatalog:GetProvisionedProductOutputs",
	];
	/** IAM actions required for the ImportAsProvisionedProduct API call. */
	static readonly IMPORT_AS_PROVISIONED_PRODUCT: string[] = [
		"servicecatalog:ImportAsProvisionedProduct",
	];
	/** IAM actions required for the ListAcceptedPortfolioShares API call. */
	static readonly LIST_ACCEPTED_PORTFOLIO_SHARES: string[] = [
		"servicecatalog:ListAcceptedPortfolioShares",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"servicecatalog:ListApplications",
	];
	/** IAM actions required for the ListAssociatedAttributeGroups API call. */
	static readonly LIST_ASSOCIATED_ATTRIBUTE_GROUPS: string[] = [
		"servicecatalog:ListAssociatedAttributeGroups",
	];
	/** IAM actions required for the ListAssociatedResources API call. */
	static readonly LIST_ASSOCIATED_RESOURCES: string[] = [
		"servicecatalog:ListAssociatedResources",
	];
	/** IAM actions required for the ListAttributeGroups API call. */
	static readonly LIST_ATTRIBUTE_GROUPS: string[] = [
		"servicecatalog:ListAttributeGroups",
	];
	/** IAM actions required for the ListAttributeGroupsForApplication API call. */
	static readonly LIST_ATTRIBUTE_GROUPS_FOR_APPLICATION: string[] = [
		"servicecatalog:ListAttributeGroupsForApplication",
	];
	/** IAM actions required for the ListBudgetsForResource API call. */
	static readonly LIST_BUDGETS_FOR_RESOURCE: string[] = [
		"servicecatalog:ListBudgetsForResource",
	];
	/** IAM actions required for the ListConstraintsForPortfolio API call. */
	static readonly LIST_CONSTRAINTS_FOR_PORTFOLIO: string[] = [
		"servicecatalog:ListConstraintsForPortfolio",
	];
	/** IAM actions required for the ListLaunchPaths API call. */
	static readonly LIST_LAUNCH_PATHS: string[] = [
		"servicecatalog:ListLaunchPaths",
	];
	/** IAM actions required for the ListOrganizationPortfolioAccess API call. */
	static readonly LIST_ORGANIZATION_PORTFOLIO_ACCESS: string[] = [
		"servicecatalog:ListOrganizationPortfolioAccess",
	];
	/** IAM actions required for the ListPortfolioAccess API call. */
	static readonly LIST_PORTFOLIO_ACCESS: string[] = [
		"servicecatalog:ListPortfolioAccess",
	];
	/** IAM actions required for the ListPortfolios API call. */
	static readonly LIST_PORTFOLIOS: string[] = ["servicecatalog:ListPortfolios"];
	/** IAM actions required for the ListPortfoliosForProduct API call. */
	static readonly LIST_PORTFOLIOS_FOR_PRODUCT: string[] = [
		"servicecatalog:ListPortfoliosForProduct",
	];
	/** IAM actions required for the ListPrincipalsForPortfolio API call. */
	static readonly LIST_PRINCIPALS_FOR_PORTFOLIO: string[] = [
		"servicecatalog:ListPrincipalsForPortfolio",
	];
	/** IAM actions required for the ListProvisionedProductPlans API call. */
	static readonly LIST_PROVISIONED_PRODUCT_PLANS: string[] = [
		"servicecatalog:ListProvisionedProductPlans",
	];
	/** IAM actions required for the ListProvisioningArtifacts API call. */
	static readonly LIST_PROVISIONING_ARTIFACTS: string[] = [
		"servicecatalog:ListProvisioningArtifacts",
	];
	/** IAM actions required for the ListProvisioningArtifactsForServiceAction API call. */
	static readonly LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION: string[] = [
		"servicecatalog:ListProvisioningArtifactsForServiceAction",
	];
	/** IAM actions required for the ListRecordHistory API call. */
	static readonly LIST_RECORD_HISTORY: string[] = [
		"servicecatalog:ListRecordHistory",
	];
	/** IAM actions required for the ListResourcesForTagOption API call. */
	static readonly LIST_RESOURCES_FOR_TAG_OPTION: string[] = [
		"servicecatalog:ListResourcesForTagOption",
	];
	/** IAM actions required for the ListServiceActions API call. */
	static readonly LIST_SERVICE_ACTIONS: string[] = [
		"servicecatalog:ListServiceActions",
	];
	/** IAM actions required for the ListServiceActionsForProvisioningArtifact API call. */
	static readonly LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT: string[] = [
		"servicecatalog:ListServiceActionsForProvisioningArtifact",
	];
	/** IAM actions required for the ListStackInstancesForProvisionedProduct API call. */
	static readonly LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT: string[] = [
		"servicecatalog:ListStackInstancesForProvisionedProduct",
	];
	/** IAM actions required for the ListTagOptions API call. */
	static readonly LIST_TAG_OPTIONS: string[] = [
		"servicecatalog:ListTagOptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"servicecatalog:ListTagsForResource",
	];
	/** IAM actions required for the NotifyProvisionProductEngineWorkflowResult API call. */
	static readonly NOTIFY_PROVISION_PRODUCT_ENGINE_WORKFLOW_RESULT: string[] = [
		"servicecatalog:NotifyProvisionProductEngineWorkflowResult",
	];
	/** IAM actions required for the NotifyTerminateProvisionedProductEngineWorkflowResult API call. */
	static readonly NOTIFY_TERMINATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT: string[] =
		["servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult"];
	/** IAM actions required for the NotifyUpdateProvisionedProductEngineWorkflowResult API call. */
	static readonly NOTIFY_UPDATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT: string[] =
		["servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult"];
	/** IAM actions required for the ProvisionProduct API call. */
	static readonly PROVISION_PRODUCT: string[] = [
		"servicecatalog:ProvisionProduct",
	];
	/** IAM actions required for the PutConfiguration API call. */
	static readonly PUT_CONFIGURATION: string[] = [
		"servicecatalog:PutConfiguration",
	];
	/** IAM actions required for the RejectPortfolioShare API call. */
	static readonly REJECT_PORTFOLIO_SHARE: string[] = [
		"servicecatalog:RejectPortfolioShare",
	];
	/** IAM actions required for the ScanProvisionedProducts API call. */
	static readonly SCAN_PROVISIONED_PRODUCTS: string[] = [
		"servicecatalog:ScanProvisionedProducts",
	];
	/** IAM actions required for the SearchProducts API call. */
	static readonly SEARCH_PRODUCTS: string[] = ["servicecatalog:SearchProducts"];
	/** IAM actions required for the SearchProductsAsAdmin API call. */
	static readonly SEARCH_PRODUCTS_AS_ADMIN: string[] = [
		"servicecatalog:SearchProductsAsAdmin",
	];
	/** IAM actions required for the SearchProvisionedProducts API call. */
	static readonly SEARCH_PROVISIONED_PRODUCTS: string[] = [
		"servicecatalog:SearchProvisionedProducts",
	];
	/** IAM actions required for the SyncResource API call. */
	static readonly SYNC_RESOURCE: string[] = ["servicecatalog:SyncResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["servicecatalog:TagResource"];
	/** IAM actions required for the TerminateProvisionedProduct API call. */
	static readonly TERMINATE_PROVISIONED_PRODUCT: string[] = [
		"servicecatalog:TerminateProvisionedProduct",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["servicecatalog:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"servicecatalog:UpdateApplication",
	];
	/** IAM actions required for the UpdateAttributeGroup API call. */
	static readonly UPDATE_ATTRIBUTE_GROUP: string[] = [
		"servicecatalog:UpdateAttributeGroup",
	];
	/** IAM actions required for the UpdateConstraint API call. */
	static readonly UPDATE_CONSTRAINT: string[] = [
		"iam:PassRole",
		"servicecatalog:UpdateConstraint",
	];
	/** IAM actions required for the UpdatePortfolio API call. */
	static readonly UPDATE_PORTFOLIO: string[] = [
		"servicecatalog:TagResource",
		"servicecatalog:UntagResource",
		"servicecatalog:UpdatePortfolio",
	];
	/** IAM actions required for the UpdatePortfolioShare API call. */
	static readonly UPDATE_PORTFOLIO_SHARE: string[] = [
		"servicecatalog:UpdatePortfolioShare",
	];
	/** IAM actions required for the UpdateProduct API call. */
	static readonly UPDATE_PRODUCT: string[] = [
		"codestar-connections:PassConnection",
		"servicecatalog:TagResource",
		"servicecatalog:UntagResource",
		"servicecatalog:UpdateProduct",
	];
	/** IAM actions required for the UpdateProvisionedProduct API call. */
	static readonly UPDATE_PROVISIONED_PRODUCT: string[] = [
		"servicecatalog:UpdateProvisionedProduct",
	];
	/** IAM actions required for the UpdateProvisionedProductProperties API call. */
	static readonly UPDATE_PROVISIONED_PRODUCT_PROPERTIES: string[] = [
		"servicecatalog:UpdateProvisionedProductProperties",
	];
	/** IAM actions required for the UpdateProvisioningArtifact API call. */
	static readonly UPDATE_PROVISIONING_ARTIFACT: string[] = [
		"servicecatalog:UpdateProvisioningArtifact",
	];
	/** IAM actions required for the UpdateServiceAction API call. */
	static readonly UPDATE_SERVICE_ACTION: string[] = [
		"iam:PassRole",
		"servicecatalog:UpdateServiceAction",
	];
	/** IAM actions required for the UpdateTagOption API call. */
	static readonly UPDATE_TAG_OPTION: string[] = [
		"servicecatalog:UpdateTagOption",
	];
}

/**
 * Condition key constants and builders for servicecatalog.
 */
export class ServiceCatalogConditions {
	/** Condition keys applicable to the AssociateResource action. */
	static readonly ASSOCIATE_RESOURCE_CONDITION_KEYS: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAttributeGroup action. */
	static readonly CREATE_ATTRIBUTE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePortfolio action. */
	static readonly CREATE_PORTFOLIO_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProduct action. */
	static readonly CREATE_PRODUCT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisionedProductPlan action. */
	static readonly CREATE_PROVISIONED_PRODUCT_PLAN_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DeleteProvisionedProductPlan action. */
	static readonly DELETE_PROVISIONED_PRODUCT_PLAN_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeProvisionedProduct action. */
	static readonly DESCRIBE_PROVISIONED_PRODUCT_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeProvisionedProductPlan action. */
	static readonly DESCRIBE_PROVISIONED_PRODUCT_PLAN_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeRecord action. */
	static readonly DESCRIBE_RECORD_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the DescribeServiceActionExecutionParameters action. */
	static readonly DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS_CONDITION_KEYS: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the DisassociateResource action. */
	static readonly DISASSOCIATE_RESOURCE_CONDITION_KEYS: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the ExecuteProvisionedProductPlan action. */
	static readonly EXECUTE_PROVISIONED_PRODUCT_PLAN_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ExecuteProvisionedProductServiceAction action. */
	static readonly EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION_CONDITION_KEYS: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the GetAssociatedResource action. */
	static readonly GET_ASSOCIATED_RESOURCE_CONDITION_KEYS: string[] = [
		"servicecatalog:Resource",
		"servicecatalog:ResourceType",
	];
	/** Condition keys applicable to the ListProvisionedProductPlans action. */
	static readonly LIST_PROVISIONED_PRODUCT_PLANS_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ListRecordHistory action. */
	static readonly LIST_RECORD_HISTORY_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the ListServiceActionsForProvisioningArtifact action. */
	static readonly LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT_CONDITION_KEYS: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the ListStackInstancesForProvisionedProduct action. */
	static readonly LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT_CONDITION_KEYS: string[] =
		[
			"servicecatalog:accountLevel",
			"servicecatalog:roleLevel",
			"servicecatalog:userLevel",
		];
	/** Condition keys applicable to the ScanProvisionedProducts action. */
	static readonly SCAN_PROVISIONED_PRODUCTS_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the SearchProvisionedProducts action. */
	static readonly SEARCH_PROVISIONED_PRODUCTS_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TerminateProvisionedProduct action. */
	static readonly TERMINATE_PROVISIONED_PRODUCT_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdatePortfolio action. */
	static readonly UPDATE_PORTFOLIO_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProduct action. */
	static readonly UPDATE_PRODUCT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProvisionedProduct action. */
	static readonly UPDATE_PROVISIONED_PRODUCT_CONDITION_KEYS: string[] = [
		"servicecatalog:accountLevel",
		"servicecatalog:roleLevel",
		"servicecatalog:userLevel",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
