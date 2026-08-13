// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/apigateway.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the apigateway service.
 */
export class ApiGatewayActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "apigateway";

	/** [PermissionManagement] apigateway:AddCertificateToDomain */
	static readonly AddCertificateToDomain = "apigateway:AddCertificateToDomain";
	/** [PermissionManagement] apigateway:CreateAccessAssociation */
	static readonly CreateAccessAssociation =
		"apigateway:CreateAccessAssociation";
	/** [Write] apigateway:CreatePortal */
	static readonly CreatePortal = "apigateway:CreatePortal";
	/** [Write] apigateway:CreatePortalProduct */
	static readonly CreatePortalProduct = "apigateway:CreatePortalProduct";
	/** [Write] apigateway:CreateProductPage */
	static readonly CreateProductPage = "apigateway:CreateProductPage";
	/** [Write] apigateway:CreateProductRestEndpointPage */
	static readonly CreateProductRestEndpointPage =
		"apigateway:CreateProductRestEndpointPage";
	/** [Write] apigateway:CreateRoutingRule */
	static readonly CreateRoutingRule = "apigateway:CreateRoutingRule";
	/** [Write] apigateway:DELETE */
	static readonly DELETE = "apigateway:DELETE";
	/** [Write] apigateway:DeletePortal */
	static readonly DeletePortal = "apigateway:DeletePortal";
	/** [Write] apigateway:DeletePortalProduct */
	static readonly DeletePortalProduct = "apigateway:DeletePortalProduct";
	/** [PermissionManagement] apigateway:DeletePortalProductSharingPolicy */
	static readonly DeletePortalProductSharingPolicy =
		"apigateway:DeletePortalProductSharingPolicy";
	/** [Write] apigateway:DeleteProductPage */
	static readonly DeleteProductPage = "apigateway:DeleteProductPage";
	/** [Write] apigateway:DeleteProductRestEndpointPage */
	static readonly DeleteProductRestEndpointPage =
		"apigateway:DeleteProductRestEndpointPage";
	/** [Write] apigateway:DeleteRoutingRule */
	static readonly DeleteRoutingRule = "apigateway:DeleteRoutingRule";
	/** [Write] apigateway:DisablePortal */
	static readonly DisablePortal = "apigateway:DisablePortal";
	/** [Read] apigateway:GET */
	static readonly GET = "apigateway:GET";
	/** [Read] apigateway:GetPortal */
	static readonly actionGetPortal = "apigateway:GetPortal";
	/** [Read] apigateway:GetPortalProduct */
	static readonly actionGetPortalProduct = "apigateway:GetPortalProduct";
	/** [Read] apigateway:GetPortalProductSharingPolicy */
	static readonly actionGetPortalProductSharingPolicy =
		"apigateway:GetPortalProductSharingPolicy";
	/** [Read] apigateway:GetProductPage */
	static readonly actionGetProductPage = "apigateway:GetProductPage";
	/** [Read] apigateway:GetProductRestEndpointPage */
	static readonly actionGetProductRestEndpointPage =
		"apigateway:GetProductRestEndpointPage";
	/** [Read] apigateway:GetRoutingRule */
	static readonly actionGetRoutingRule = "apigateway:GetRoutingRule";
	/** [List] apigateway:ListPortalProducts */
	static readonly ListPortalProducts = "apigateway:ListPortalProducts";
	/** [List] apigateway:ListPortals */
	static readonly ListPortals = "apigateway:ListPortals";
	/** [List] apigateway:ListProductPages */
	static readonly ListProductPages = "apigateway:ListProductPages";
	/** [List] apigateway:ListProductRestEndpointPages */
	static readonly ListProductRestEndpointPages =
		"apigateway:ListProductRestEndpointPages";
	/** [List] apigateway:ListRoutingRules */
	static readonly ListRoutingRules = "apigateway:ListRoutingRules";
	/** [Write] apigateway:PATCH */
	static readonly PATCH = "apigateway:PATCH";
	/** [Write] apigateway:POST */
	static readonly POST = "apigateway:POST";
	/** [Write] apigateway:PUT */
	static readonly PUT = "apigateway:PUT";
	/** [Write] apigateway:PreviewPortal */
	static readonly PreviewPortal = "apigateway:PreviewPortal";
	/** [Write] apigateway:PublishPortal */
	static readonly PublishPortal = "apigateway:PublishPortal";
	/** [PermissionManagement] apigateway:PutPortalProductSharingPolicy */
	static readonly PutPortalProductSharingPolicy =
		"apigateway:PutPortalProductSharingPolicy";
	/** [PermissionManagement] apigateway:RejectAccessAssociation */
	static readonly RejectAccessAssociation =
		"apigateway:RejectAccessAssociation";
	/** [PermissionManagement] apigateway:RemoveCertificateFromDomain */
	static readonly RemoveCertificateFromDomain =
		"apigateway:RemoveCertificateFromDomain";
	/** [PermissionManagement] apigateway:SetWebACL */
	static readonly actionSetWebACL = "apigateway:SetWebACL";
	/** [PermissionManagement] apigateway:UpdateDomainNameManagementPolicy */
	static readonly UpdateDomainNameManagementPolicy =
		"apigateway:UpdateDomainNameManagementPolicy";
	/** [PermissionManagement] apigateway:UpdateDomainNamePolicy */
	static readonly UpdateDomainNamePolicy = "apigateway:UpdateDomainNamePolicy";
	/** [Write] apigateway:UpdatePortal */
	static readonly UpdatePortal = "apigateway:UpdatePortal";
	/** [Write] apigateway:UpdatePortalProduct */
	static readonly UpdatePortalProduct = "apigateway:UpdatePortalProduct";
	/** [Write] apigateway:UpdateProductPage */
	static readonly UpdateProductPage = "apigateway:UpdateProductPage";
	/** [Write] apigateway:UpdateProductRestEndpointPage */
	static readonly UpdateProductRestEndpointPage =
		"apigateway:UpdateProductRestEndpointPage";
	/** [PermissionManagement] apigateway:UpdateRestApiPolicy */
	static readonly UpdateRestApiPolicy = "apigateway:UpdateRestApiPolicy";
	/** [Write] apigateway:UpdateRoutingRule */
	static readonly UpdateRoutingRule = "apigateway:UpdateRoutingRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApiGatewayActions.GET,
		ApiGatewayActions.actionGetPortal,
		ApiGatewayActions.actionGetPortalProduct,
		ApiGatewayActions.actionGetPortalProductSharingPolicy,
		ApiGatewayActions.actionGetProductPage,
		ApiGatewayActions.actionGetProductRestEndpointPage,
		ApiGatewayActions.actionGetRoutingRule,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApiGatewayActions.CreatePortal,
		ApiGatewayActions.CreatePortalProduct,
		ApiGatewayActions.CreateProductPage,
		ApiGatewayActions.CreateProductRestEndpointPage,
		ApiGatewayActions.CreateRoutingRule,
		ApiGatewayActions.DELETE,
		ApiGatewayActions.DeletePortal,
		ApiGatewayActions.DeletePortalProduct,
		ApiGatewayActions.DeleteProductPage,
		ApiGatewayActions.DeleteProductRestEndpointPage,
		ApiGatewayActions.DeleteRoutingRule,
		ApiGatewayActions.DisablePortal,
		ApiGatewayActions.PATCH,
		ApiGatewayActions.POST,
		ApiGatewayActions.PUT,
		ApiGatewayActions.PreviewPortal,
		ApiGatewayActions.PublishPortal,
		ApiGatewayActions.UpdatePortal,
		ApiGatewayActions.UpdatePortalProduct,
		ApiGatewayActions.UpdateProductPage,
		ApiGatewayActions.UpdateProductRestEndpointPage,
		ApiGatewayActions.UpdateRoutingRule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApiGatewayActions.ListPortalProducts,
		ApiGatewayActions.ListPortals,
		ApiGatewayActions.ListProductPages,
		ApiGatewayActions.ListProductRestEndpointPages,
		ApiGatewayActions.ListRoutingRules,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ApiGatewayActions.AddCertificateToDomain,
		ApiGatewayActions.CreateAccessAssociation,
		ApiGatewayActions.DeletePortalProductSharingPolicy,
		ApiGatewayActions.PutPortalProductSharingPolicy,
		ApiGatewayActions.RejectAccessAssociation,
		ApiGatewayActions.RemoveCertificateFromDomain,
		ApiGatewayActions.actionSetWebACL,
		ApiGatewayActions.UpdateDomainNameManagementPolicy,
		ApiGatewayActions.UpdateDomainNamePolicy,
		ApiGatewayActions.UpdateRestApiPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a AccessLogSettings ARN.
 */
export interface ApiGatewayAccessLogSettingsArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AccessLogSettings ARN.
 */
export interface ApiGatewayAccessLogSettingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The StageName component. */
	readonly stageName: string;
}

/**
 * Properties for building a Account ARN.
 */
export interface ApiGatewayAccountArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Account ARN.
 */
export interface ApiGatewayAccountArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Api ARN.
 */
export interface ApiGatewayAPIArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Api ARN.
 */
export interface ApiGatewayAPIArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a ApiKey ARN.
 */
export interface ApiGatewayAPIKeyArnProps {
	/** The ApiKeyId component of the ARN. */
	readonly apiKeyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApiKey ARN.
 */
export interface ApiGatewayAPIKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiKeyId component. */
	readonly apiKeyId: string;
}

/**
 * Properties for building a ApiKeys ARN.
 */
export interface ApiGatewayAPIKeysArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApiKeys ARN.
 */
export interface ApiGatewayAPIKeysArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ApiMapping ARN.
 */
export interface ApiGatewayAPIMappingArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The ApiMappingId component of the ARN. */
	readonly apiMappingId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApiMapping ARN.
 */
export interface ApiGatewayAPIMappingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The ApiMappingId component. */
	readonly apiMappingId: string;
}

/**
 * Properties for building a ApiMappings ARN.
 */
export interface ApiGatewayAPIMappingsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApiMappings ARN.
 */
export interface ApiGatewayAPIMappingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a Apis ARN.
 */
export interface ApiGatewayApisArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Apis ARN.
 */
export interface ApiGatewayApisArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a AuthorizerVariant1 ARN.
 */
export interface ApiGatewayAuthorizerVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The AuthorizerId component of the ARN. */
	readonly authorizerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a AuthorizerVariant2 ARN.
 */
export interface ApiGatewayAuthorizerVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The AuthorizerId component of the ARN. */
	readonly authorizerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Authorizer ARN.
 */
export interface ApiGatewayAuthorizerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The AuthorizerId component. */
	readonly authorizerId: string;
}

/**
 * Properties for building a AuthorizersVariant1 ARN.
 */
export interface ApiGatewayAuthorizersVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a AuthorizersVariant2 ARN.
 */
export interface ApiGatewayAuthorizersVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Authorizers ARN.
 */
export interface ApiGatewayAuthorizersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a AuthorizersCache ARN.
 */
export interface ApiGatewayAuthorizersCacheArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AuthorizersCache ARN.
 */
export interface ApiGatewayAuthorizersCacheArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The StageName component. */
	readonly stageName: string;
}

/**
 * Properties for building a BasePathMapping ARN.
 */
export interface ApiGatewayBasePathMappingArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The BasePath component of the ARN. */
	readonly basePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a BasePathMapping ARN.
 */
export interface ApiGatewayBasePathMappingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The BasePath component. */
	readonly basePath: string;
}

/**
 * Properties for building a BasePathMappings ARN.
 */
export interface ApiGatewayBasePathMappingsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a BasePathMappings ARN.
 */
export interface ApiGatewayBasePathMappingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a ClientCertificate ARN.
 */
export interface ApiGatewayClientCertificateArnProps {
	/** The ClientCertificateId component of the ARN. */
	readonly clientCertificateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ClientCertificate ARN.
 */
export interface ApiGatewayClientCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClientCertificateId component. */
	readonly clientCertificateId: string;
}

/**
 * Properties for building a ClientCertificates ARN.
 */
export interface ApiGatewayClientCertificatesArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ClientCertificates ARN.
 */
export interface ApiGatewayClientCertificatesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Cors ARN.
 */
export interface ApiGatewayCorsArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Cors ARN.
 */
export interface ApiGatewayCorsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a DeploymentVariant1 ARN.
 */
export interface ApiGatewayDeploymentVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The DeploymentId component of the ARN. */
	readonly deploymentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a DeploymentVariant2 ARN.
 */
export interface ApiGatewayDeploymentVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The DeploymentId component of the ARN. */
	readonly deploymentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Deployment ARN.
 */
export interface ApiGatewayDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The DeploymentId component. */
	readonly deploymentId: string;
}

/**
 * Properties for building a DeploymentsVariant1 ARN.
 */
export interface ApiGatewayDeploymentsVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a DeploymentsVariant2 ARN.
 */
export interface ApiGatewayDeploymentsVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Deployments ARN.
 */
export interface ApiGatewayDeploymentsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a DocumentationPart ARN.
 */
export interface ApiGatewayDocumentationPartArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The DocumentationPartId component of the ARN. */
	readonly documentationPartId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DocumentationPart ARN.
 */
export interface ApiGatewayDocumentationPartArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The DocumentationPartId component. */
	readonly documentationPartId: string;
}

/**
 * Properties for building a DocumentationParts ARN.
 */
export interface ApiGatewayDocumentationPartsArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DocumentationParts ARN.
 */
export interface ApiGatewayDocumentationPartsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a DocumentationVersion ARN.
 */
export interface ApiGatewayDocumentationVersionArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The DocumentationVersionId component of the ARN. */
	readonly documentationVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DocumentationVersion ARN.
 */
export interface ApiGatewayDocumentationVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The DocumentationVersionId component. */
	readonly documentationVersionId: string;
}

/**
 * Properties for building a DocumentationVersions ARN.
 */
export interface ApiGatewayDocumentationVersionsArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DocumentationVersions ARN.
 */
export interface ApiGatewayDocumentationVersionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a DomainName ARN.
 */
export interface ApiGatewayDomainNameArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DomainName ARN.
 */
export interface ApiGatewayDomainNameArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a DomainNameAccessAssociation ARN.
 */
export interface ApiGatewayDomainNameAccessAssociationArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The SourceType component of the ARN. */
	readonly sourceType: string;
	/** The SourceId component of the ARN. */
	readonly sourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DomainNameAccessAssociation ARN.
 */
export interface ApiGatewayDomainNameAccessAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The SourceType component. */
	readonly sourceType: string;
	/** The SourceId component. */
	readonly sourceId: string;
}

/**
 * Properties for building a DomainNameAccessAssociations ARN.
 */
export interface ApiGatewayDomainNameAccessAssociationsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DomainNameAccessAssociations ARN.
 */
export interface ApiGatewayDomainNameAccessAssociationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a DomainNames ARN.
 */
export interface ApiGatewayDomainNamesArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DomainNames ARN.
 */
export interface ApiGatewayDomainNamesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ExportedAPI ARN.
 */
export interface ApiGatewayExportedAPIArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The Specification component of the ARN. */
	readonly specification: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ExportedAPI ARN.
 */
export interface ApiGatewayExportedAPIArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The Specification component. */
	readonly specification: string;
}

/**
 * Properties for building a GatewayResponse ARN.
 */
export interface ApiGatewayGatewayResponseArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ResponseType component of the ARN. */
	readonly responseType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a GatewayResponse ARN.
 */
export interface ApiGatewayGatewayResponseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The ResponseType component. */
	readonly responseType: string;
}

/**
 * Properties for building a GatewayResponses ARN.
 */
export interface ApiGatewayGatewayResponsesArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a GatewayResponses ARN.
 */
export interface ApiGatewayGatewayResponsesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a IntegrationVariant1 ARN.
 */
export interface ApiGatewayIntegrationVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a IntegrationVariant2 ARN.
 */
export interface ApiGatewayIntegrationVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The HttpMethodType component of the ARN. */
	readonly httpMethodType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Integration ARN.
 */
export interface ApiGatewayIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a IntegrationResponseVariant1 ARN.
 */
export interface ApiGatewayIntegrationResponseVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** The IntegrationResponseId component of the ARN. */
	readonly integrationResponseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a IntegrationResponseVariant2 ARN.
 */
export interface ApiGatewayIntegrationResponseVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The HttpMethodType component of the ARN. */
	readonly httpMethodType: string;
	/** The StatusCode component of the ARN. */
	readonly statusCode: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a IntegrationResponse ARN.
 */
export interface ApiGatewayIntegrationResponseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
	/** The IntegrationResponseId component. */
	readonly integrationResponseId: string;
}

/**
 * Properties for building a IntegrationResponses ARN.
 */
export interface ApiGatewayIntegrationResponsesArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a IntegrationResponses ARN.
 */
export interface ApiGatewayIntegrationResponsesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a Integrations ARN.
 */
export interface ApiGatewayIntegrationsArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Integrations ARN.
 */
export interface ApiGatewayIntegrationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a Method ARN.
 */
export interface ApiGatewayMethodArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The HttpMethodType component of the ARN. */
	readonly httpMethodType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Method ARN.
 */
export interface ApiGatewayMethodArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
	/** The HttpMethodType component. */
	readonly httpMethodType: string;
}

/**
 * Properties for building a MethodResponse ARN.
 */
export interface ApiGatewayMethodResponseArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The HttpMethodType component of the ARN. */
	readonly httpMethodType: string;
	/** The StatusCode component of the ARN. */
	readonly statusCode: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a MethodResponse ARN.
 */
export interface ApiGatewayMethodResponseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
	/** The HttpMethodType component. */
	readonly httpMethodType: string;
	/** The StatusCode component. */
	readonly statusCode: string;
}

/**
 * Properties for building a ModelVariant1 ARN.
 */
export interface ApiGatewayModelVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The ModelId component of the ARN. */
	readonly modelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a ModelVariant2 ARN.
 */
export interface ApiGatewayModelVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The ModelName component of the ARN. */
	readonly modelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Model ARN.
 */
export interface ApiGatewayModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The ModelId component. */
	readonly modelId: string;
}

/**
 * Properties for building a ModelTemplate ARN.
 */
export interface ApiGatewayModelTemplateArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The ModelId component of the ARN. */
	readonly modelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ModelTemplate ARN.
 */
export interface ApiGatewayModelTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The ModelId component. */
	readonly modelId: string;
}

/**
 * Properties for building a ModelsVariant1 ARN.
 */
export interface ApiGatewayModelsVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a ModelsVariant2 ARN.
 */
export interface ApiGatewayModelsVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Models ARN.
 */
export interface ApiGatewayModelsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a Portal ARN.
 */
export interface ApiGatewayPortalArnProps {
	/** The PortalId component of the ARN. */
	readonly portalId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Portal ARN.
 */
export interface ApiGatewayPortalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalId component. */
	readonly portalId: string;
}

/**
 * Properties for building a PortalProduct ARN.
 */
export interface ApiGatewayPortalProductArnProps {
	/** The PortalProductId component of the ARN. */
	readonly portalProductId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PortalProduct ARN.
 */
export interface ApiGatewayPortalProductArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalProductId component. */
	readonly portalProductId: string;
}

/**
 * Properties for building a PrivateBasePathMapping ARN.
 */
export interface ApiGatewayPrivateBasePathMappingArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The DomainIdentifier component of the ARN. */
	readonly domainIdentifier: string;
	/** The BasePath component of the ARN. */
	readonly basePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PrivateBasePathMapping ARN.
 */
export interface ApiGatewayPrivateBasePathMappingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The DomainIdentifier component. */
	readonly domainIdentifier: string;
	/** The BasePath component. */
	readonly basePath: string;
}

/**
 * Properties for building a PrivateBasePathMappings ARN.
 */
export interface ApiGatewayPrivateBasePathMappingsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The DomainIdentifier component of the ARN. */
	readonly domainIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PrivateBasePathMappings ARN.
 */
export interface ApiGatewayPrivateBasePathMappingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The DomainIdentifier component. */
	readonly domainIdentifier: string;
}

/**
 * Properties for building a PrivateDomainName ARN.
 */
export interface ApiGatewayPrivateDomainNameArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The DomainIdentifier component of the ARN. */
	readonly domainIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PrivateDomainName ARN.
 */
export interface ApiGatewayPrivateDomainNameArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The DomainIdentifier component. */
	readonly domainIdentifier: string;
}

/**
 * Properties for building a ProductPage ARN.
 */
export interface ApiGatewayProductPageArnProps {
	/** The PortalProductId component of the ARN. */
	readonly portalProductId: string;
	/** The ProductPageId component of the ARN. */
	readonly productPageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProductPage ARN.
 */
export interface ApiGatewayProductPageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalProductId component. */
	readonly portalProductId: string;
	/** The ProductPageId component. */
	readonly productPageId: string;
}

/**
 * Properties for building a ProductRestEndpointPage ARN.
 */
export interface ApiGatewayProductRestEndpointPageArnProps {
	/** The PortalProductId component of the ARN. */
	readonly portalProductId: string;
	/** The ProductRestEndpointPageId component of the ARN. */
	readonly productRestEndpointPageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProductRestEndpointPage ARN.
 */
export interface ApiGatewayProductRestEndpointPageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalProductId component. */
	readonly portalProductId: string;
	/** The ProductRestEndpointPageId component. */
	readonly productRestEndpointPageId: string;
}

/**
 * Properties for building a RequestValidator ARN.
 */
export interface ApiGatewayRequestValidatorArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The RequestValidatorId component of the ARN. */
	readonly requestValidatorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RequestValidator ARN.
 */
export interface ApiGatewayRequestValidatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The RequestValidatorId component. */
	readonly requestValidatorId: string;
}

/**
 * Properties for building a RequestValidators ARN.
 */
export interface ApiGatewayRequestValidatorsArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RequestValidators ARN.
 */
export interface ApiGatewayRequestValidatorsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a Resource ARN.
 */
export interface ApiGatewayResourceArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
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
 * Parsed components of a Resource ARN.
 */
export interface ApiGatewayResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Resources ARN.
 */
export interface ApiGatewayResourcesArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Resources ARN.
 */
export interface ApiGatewayResourcesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a RestApi ARN.
 */
export interface ApiGatewayRestAPIArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RestApi ARN.
 */
export interface ApiGatewayRestAPIArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
}

/**
 * Properties for building a RestApis ARN.
 */
export interface ApiGatewayRestApisArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RestApis ARN.
 */
export interface ApiGatewayRestApisArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Route ARN.
 */
export interface ApiGatewayRouteArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The RouteId component of the ARN. */
	readonly routeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Route ARN.
 */
export interface ApiGatewayRouteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The RouteId component. */
	readonly routeId: string;
}

/**
 * Properties for building a RouteRequestParameter ARN.
 */
export interface ApiGatewayRouteRequestParameterArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The RouteId component of the ARN. */
	readonly routeId: string;
	/** The RequestParameterKey component of the ARN. */
	readonly requestParameterKey: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouteRequestParameter ARN.
 */
export interface ApiGatewayRouteRequestParameterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The RouteId component. */
	readonly routeId: string;
	/** The RequestParameterKey component. */
	readonly requestParameterKey: string;
}

/**
 * Properties for building a RouteResponse ARN.
 */
export interface ApiGatewayRouteResponseArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The RouteId component of the ARN. */
	readonly routeId: string;
	/** The RouteResponseId component of the ARN. */
	readonly routeResponseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouteResponse ARN.
 */
export interface ApiGatewayRouteResponseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The RouteId component. */
	readonly routeId: string;
	/** The RouteResponseId component. */
	readonly routeResponseId: string;
}

/**
 * Properties for building a RouteResponses ARN.
 */
export interface ApiGatewayRouteResponsesArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The RouteId component of the ARN. */
	readonly routeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouteResponses ARN.
 */
export interface ApiGatewayRouteResponsesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The RouteId component. */
	readonly routeId: string;
}

/**
 * Properties for building a RouteSettings ARN.
 */
export interface ApiGatewayRouteSettingsArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** The RouteKey component of the ARN. */
	readonly routeKey: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouteSettings ARN.
 */
export interface ApiGatewayRouteSettingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The StageName component. */
	readonly stageName: string;
	/** The RouteKey component. */
	readonly routeKey: string;
}

/**
 * Properties for building a Routes ARN.
 */
export interface ApiGatewayRoutesArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Routes ARN.
 */
export interface ApiGatewayRoutesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a RoutingRule ARN.
 */
export interface ApiGatewayRoutingRuleArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The RoutingRuleId component of the ARN. */
	readonly routingRuleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RoutingRule ARN.
 */
export interface ApiGatewayRoutingRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RoutingRuleId component. */
	readonly routingRuleId: string;
}

/**
 * Properties for building a Sdk ARN.
 */
export interface ApiGatewaySDKArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** The SdkType component of the ARN. */
	readonly sdkType: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Sdk ARN.
 */
export interface ApiGatewaySDKArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestApiId component. */
	readonly restAPIId: string;
	/** The StageName component. */
	readonly stageName: string;
	/** The SdkType component. */
	readonly sdkType: string;
}

/**
 * Properties for building a StageVariant1 ARN.
 */
export interface ApiGatewayStageVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a StageVariant2 ARN.
 */
export interface ApiGatewayStageVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Stage ARN.
 */
export interface ApiGatewayStageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The StageName component. */
	readonly stageName: string;
}

/**
 * Properties for building a StagesVariant1 ARN.
 */
export interface ApiGatewayStagesVariant1ArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Properties for building a StagesVariant2 ARN.
 */
export interface ApiGatewayStagesVariant2ArnProps {
	/** The RestApiId component of the ARN. */
	readonly restAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Stages ARN.
 */
export interface ApiGatewayStagesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
}

/**
 * Properties for building a Tags ARN.
 */
export interface ApiGatewayTagsArnProps {
	/** The UrlEncodedResourceARN component of the ARN. */
	readonly urlEncodedResourceARN: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Tags ARN.
 */
export interface ApiGatewayTagsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UrlEncodedResourceARN component. */
	readonly urlEncodedResourceARN: string;
}

/**
 * Properties for building a Template ARN.
 */
export interface ApiGatewayTemplateArnProps {
	/** The ModelName component of the ARN. */
	readonly modelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Template ARN.
 */
export interface ApiGatewayTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelName component. */
	readonly modelName: string;
}

/**
 * Properties for building a UsagePlan ARN.
 */
export interface ApiGatewayUsagePlanArnProps {
	/** The UsagePlanId component of the ARN. */
	readonly usagePlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a UsagePlan ARN.
 */
export interface ApiGatewayUsagePlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UsagePlanId component. */
	readonly usagePlanId: string;
}

/**
 * Properties for building a UsagePlanKey ARN.
 */
export interface ApiGatewayUsagePlanKeyArnProps {
	/** The UsagePlanId component of the ARN. */
	readonly usagePlanId: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a UsagePlanKey ARN.
 */
export interface ApiGatewayUsagePlanKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UsagePlanId component. */
	readonly usagePlanId: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a UsagePlanKeys ARN.
 */
export interface ApiGatewayUsagePlanKeysArnProps {
	/** The UsagePlanId component of the ARN. */
	readonly usagePlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a UsagePlanKeys ARN.
 */
export interface ApiGatewayUsagePlanKeysArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UsagePlanId component. */
	readonly usagePlanId: string;
}

/**
 * Properties for building a UsagePlans ARN.
 */
export interface ApiGatewayUsagePlansArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a UsagePlans ARN.
 */
export interface ApiGatewayUsagePlansArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a VpcLink ARN.
 */
export interface ApiGatewayVPCLinkArnProps {
	/** The VpcLinkId component of the ARN. */
	readonly vpcLinkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VpcLink ARN.
 */
export interface ApiGatewayVPCLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcLinkId component. */
	readonly vpcLinkId: string;
}

/**
 * Properties for building a VpcLinks ARN.
 */
export interface ApiGatewayVPCLinksArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VpcLinks ARN.
 */
export interface ApiGatewayVPCLinksArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const AccessLogSettingsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)\/accesslogsettings$/;
const AccountArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/account$/;
const APIArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)$/;
const APIKeyArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apikeys\/(?<apiKeyId>[^:/?]+)$/;
const APIKeysArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apikeys$/;
const APIMappingArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\/apimappings\/(?<apiMappingId>[^:/?]+)$/;
const APIMappingsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\/apimappings$/;
const ApisArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis$/;
const AuthorizerArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/authorizers\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/authorizers\/(?:[^:/?]+))$/;
const AuthorizerParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/authorizers\/(?<authorizerId>[^:/?]+)$/;
const AuthorizersArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/authorizers|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/authorizers)$/;
const AuthorizersParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/authorizers$/;
const AuthorizersCacheArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)\/cache\/authorizers$/;
const BasePathMappingArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\/basepathmappings\/(?<basePath>[^:/?]+)$/;
const BasePathMappingsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\/basepathmappings$/;
const ClientCertificateArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/clientcertificates\/(?<clientCertificateId>[^:/?]+)$/;
const ClientCertificatesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/clientcertificates$/;
const CorsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/cors$/;
const DeploymentArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/deployments\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/deployments\/(?:[^:/?]+))$/;
const DeploymentParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/deployments\/(?<deploymentId>[^:/?]+)$/;
const DeploymentsArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/deployments|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/deployments)$/;
const DeploymentsParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/deployments$/;
const DocumentationPartArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/documentation\/parts\/(?<documentationPartId>[^:/?]+)$/;
const DocumentationPartsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/documentation\/parts$/;
const DocumentationVersionArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/documentation\/versions\/(?<documentationVersionId>[^:/?]+)$/;
const DocumentationVersionsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/documentation\/versions$/;
const DomainNameArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)$/;
const DomainNameAccessAssociationArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/domainnameaccessassociations\/domainname\/(?<domainName>[^:/?]+)\/(?<sourceType>[^:/?]+)\/(?<sourceId>[^:/?]+)$/;
const DomainNameAccessAssociationsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/domainnameaccessassociations$/;
const DomainNamesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames$/;
const ExportedAPIArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/exports\/(?<specification>[^:/?]+)$/;
const GatewayResponseArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/gatewayresponses\/(?<responseType>[^:/?]+)$/;
const GatewayResponsesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/gatewayresponses$/;
const IntegrationArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/integrations\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/resources\/(?:[^:/?]+)\/methods\/(?:[^:/?]+)\/integration)$/;
const IntegrationParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/integrations\/(?<integrationId>[^:/?]+)$/;
const IntegrationResponseArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/integrations\/(?:[^:/?]+)\/integrationresponses\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/resources\/(?:[^:/?]+)\/methods\/(?:[^:/?]+)\/integration\/responses\/(?:[^:/?]+))$/;
const IntegrationResponseParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/integrations\/(?<integrationId>[^:/?]+)\/integrationresponses\/(?<integrationResponseId>[^:/?]+)$/;
const IntegrationResponsesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/integrations\/(?<integrationId>[^:/?]+)\/integrationresponses$/;
const IntegrationsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/integrations$/;
const MethodArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/resources\/(?<resourceId>[^:/?]+)\/methods\/(?<httpMethodType>[^:/?]+)$/;
const MethodResponseArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/resources\/(?<resourceId>[^:/?]+)\/methods\/(?<httpMethodType>[^:/?]+)\/responses\/(?<statusCode>[^:/?]+)$/;
const ModelArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/models\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/models\/(?:[^:/?]+))$/;
const ModelParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/models\/(?<modelId>[^:/?]+)$/;
const ModelTemplateArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/models\/(?<modelId>[^:/?]+)\/template$/;
const ModelsArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/models|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/models)$/;
const ModelsParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/models$/;
const PortalArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/portals\/(?<portalId>[^:/?]+)$/;
const PortalProductArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/portalproducts\/(?<portalProductId>[^:/?]+)$/;
const PrivateBasePathMappingArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\+(?<domainIdentifier>[^:/?]+)\/basepathmappings\/(?<basePath>[^:/?]+)$/;
const PrivateBasePathMappingsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/domainnames\/(?<domainName>[^:/?]+)\+(?<domainIdentifier>[^:/?]+)\/basepathmappings$/;
const PrivateDomainNameArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/domainnames\/(?<domainName>[^:/?]+)\+(?<domainIdentifier>[^:/?]+)$/;
const ProductPageArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/portalproducts\/(?<portalProductId>[^:/?]+)\/productpages\/(?<productPageId>[^:/?]+)$/;
const ProductRestEndpointPageArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/portalproducts\/(?<portalProductId>[^:/?]+)\/productrestendpointpages\/(?<productRestEndpointPageId>[^:/?]+)$/;
const RequestValidatorArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/requestvalidators\/(?<requestValidatorId>[^:/?]+)$/;
const RequestValidatorsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/requestvalidators$/;
const ResourceArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/resources\/(?<resourceId>[^:/?]+)$/;
const ResourcesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/resources$/;
const RestAPIArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)$/;
const RestApisArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis$/;
const RouteArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/routes\/(?<routeId>[^:/?]+)$/;
const RouteRequestParameterArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/routes\/(?<routeId>[^:/?]+)\/requestparameters\/(?<requestParameterKey>[^:/?]+)$/;
const RouteResponseArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/routes\/(?<routeId>[^:/?]+)\/routeresponses\/(?<routeResponseId>[^:/?]+)$/;
const RouteResponsesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/routes\/(?<routeId>[^:/?]+)\/routeresponses$/;
const RouteSettingsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)\/routesettings\/(?<routeKey>[^:/?]+)$/;
const RoutesArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/routes$/;
const RoutingRuleArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):\/domainnames\/(?<domainName>[^:/?]+)\/routingrules\/(?<routingRuleId>[^:/?]+)$/;
const SDKArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<restAPIId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)\/sdks\/(?<sdkType>[^:/?]+)$/;
const StageArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/stages\/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/stages\/(?:[^:/?]+))$/;
const StageParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)$/;
const StagesArnRegex =
	/^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::\/apis\/(?:[^:/?]+)\/stages|arn:(?:[^:]+):apigateway:(?:[^:]*)::\/restapis\/(?:[^:/?]+)\/stages)$/;
const StagesParseRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/apis\/(?<apiId>[^:/?]+)\/stages$/;
const TagsArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/tags\/(?<urlEncodedResourceARN>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/models\/(?<modelName>[^:/?]+)\/template$/;
const UsagePlanArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/usageplans\/(?<usagePlanId>[^:/?]+)$/;
const UsagePlanKeyArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/usageplans\/(?<usagePlanId>[^:/?]+)\/keys\/(?<id>[^:/?]+)$/;
const UsagePlanKeysArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/usageplans\/(?<usagePlanId>[^:/?]+)\/keys$/;
const UsagePlansArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/usageplans$/;
const VPCLinkArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/vpclinks\/(?<vpcLinkId>[^:/?]+)$/;
const VPCLinksArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/vpclinks$/;

/**
 * ARN builders, validators, and parsers for apigateway resources.
 */
export class ApiGatewayResources {
	/**
	 * Builds an ARN for the AccessLogSettings resource.
	 */
	static accessLogSettings(props: ApiGatewayAccessLogSettingsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages/${props.stageName}/accesslogsettings`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AccessLogSettings resource.
	 */
	static isValidAccessLogSettingsArn(arn: string): boolean {
		return AccessLogSettingsArnRegex.test(arn);
	}

	/**
	 * Parses a AccessLogSettings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessLogSettingsArn(
		arn: string,
	): ApiGatewayAccessLogSettingsArnComponents {
		const match = AccessLogSettingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AccessLogSettings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stageName: match.groups!.stageName,
		};
	}

	/**
	 * Builds an ARN for the Account resource.
	 */
	static account(props: ApiGatewayAccountArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/account`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Account resource.
	 */
	static isValidAccountArn(arn: string): boolean {
		return AccountArnRegex.test(arn);
	}

	/**
	 * Parses a Account ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccountArn(arn: string): ApiGatewayAccountArnComponents {
		const match = AccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Account ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Api resource.
	 */
	static api(props: ApiGatewayAPIArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Api resource.
	 */
	static isValidAPIArn(arn: string): boolean {
		return APIArnRegex.test(arn);
	}

	/**
	 * Parses a Api ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIArn(arn: string): ApiGatewayAPIArnComponents {
		const match = APIArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Api ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the ApiKey resource.
	 */
	static apiKey(props: ApiGatewayAPIKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apikeys/${props.apiKeyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApiKey resource.
	 */
	static isValidAPIKeyArn(arn: string): boolean {
		return APIKeyArnRegex.test(arn);
	}

	/**
	 * Parses a ApiKey ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIKeyArn(arn: string): ApiGatewayAPIKeyArnComponents {
		const match = APIKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApiKey ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiKeyId: match.groups!.apiKeyId,
		};
	}

	/**
	 * Builds an ARN for the ApiKeys resource.
	 */
	static apiKeys(props: ApiGatewayAPIKeysArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apikeys`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApiKeys resource.
	 */
	static isValidAPIKeysArn(arn: string): boolean {
		return APIKeysArnRegex.test(arn);
	}

	/**
	 * Parses a ApiKeys ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIKeysArn(arn: string): ApiGatewayAPIKeysArnComponents {
		const match = APIKeysArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApiKeys ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ApiMapping resource.
	 */
	static apiMapping(props: ApiGatewayAPIMappingArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}/apimappings/${props.apiMappingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApiMapping resource.
	 */
	static isValidAPIMappingArn(arn: string): boolean {
		return APIMappingArnRegex.test(arn);
	}

	/**
	 * Parses a ApiMapping ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIMappingArn(arn: string): ApiGatewayAPIMappingArnComponents {
		const match = APIMappingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApiMapping ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			apiMappingId: match.groups!.apiMappingId,
		};
	}

	/**
	 * Builds an ARN for the ApiMappings resource.
	 */
	static apiMappings(props: ApiGatewayAPIMappingsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}/apimappings`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApiMappings resource.
	 */
	static isValidAPIMappingsArn(arn: string): boolean {
		return APIMappingsArnRegex.test(arn);
	}

	/**
	 * Parses a ApiMappings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIMappingsArn(arn: string): ApiGatewayAPIMappingsArnComponents {
		const match = APIMappingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApiMappings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the Apis resource.
	 */
	static apis(props: ApiGatewayApisArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Apis resource.
	 */
	static isValidApisArn(arn: string): boolean {
		return ApisArnRegex.test(arn);
	}

	/**
	 * Parses a Apis ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApisArn(arn: string): ApiGatewayApisArnComponents {
		const match = ApisArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Apis ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the AuthorizerVariant1 resource.
	 */
	static authorizerVariant1(
		props: ApiGatewayAuthorizerVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/authorizers/${props.authorizerId}`;
	}

	/**
	 * Builds an ARN for the AuthorizerVariant2 resource.
	 */
	static authorizerVariant2(
		props: ApiGatewayAuthorizerVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/authorizers/${props.authorizerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Authorizer resource.
	 */
	static isValidAuthorizerArn(arn: string): boolean {
		return AuthorizerArnRegex.test(arn);
	}

	/**
	 * Parses a Authorizer ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthorizerArn(arn: string): ApiGatewayAuthorizerArnComponents {
		const match = AuthorizerParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Authorizer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			authorizerId: match.groups!.authorizerId,
		};
	}

	/**
	 * Builds an ARN for the AuthorizersVariant1 resource.
	 */
	static authorizersVariant1(
		props: ApiGatewayAuthorizersVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/authorizers`;
	}

	/**
	 * Builds an ARN for the AuthorizersVariant2 resource.
	 */
	static authorizersVariant2(
		props: ApiGatewayAuthorizersVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/authorizers`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Authorizers resource.
	 */
	static isValidAuthorizersArn(arn: string): boolean {
		return AuthorizersArnRegex.test(arn);
	}

	/**
	 * Parses a Authorizers ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthorizersArn(arn: string): ApiGatewayAuthorizersArnComponents {
		const match = AuthorizersParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Authorizers ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the AuthorizersCache resource.
	 */
	static authorizersCache(props: ApiGatewayAuthorizersCacheArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages/${props.stageName}/cache/authorizers`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AuthorizersCache resource.
	 */
	static isValidAuthorizersCacheArn(arn: string): boolean {
		return AuthorizersCacheArnRegex.test(arn);
	}

	/**
	 * Parses a AuthorizersCache ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthorizersCacheArn(
		arn: string,
	): ApiGatewayAuthorizersCacheArnComponents {
		const match = AuthorizersCacheArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AuthorizersCache ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stageName: match.groups!.stageName,
		};
	}

	/**
	 * Builds an ARN for the BasePathMapping resource.
	 */
	static basePathMapping(props: ApiGatewayBasePathMappingArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}/basepathmappings/${props.basePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the BasePathMapping resource.
	 */
	static isValidBasePathMappingArn(arn: string): boolean {
		return BasePathMappingArnRegex.test(arn);
	}

	/**
	 * Parses a BasePathMapping ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBasePathMappingArn(
		arn: string,
	): ApiGatewayBasePathMappingArnComponents {
		const match = BasePathMappingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid BasePathMapping ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			basePath: match.groups!.basePath,
		};
	}

	/**
	 * Builds an ARN for the BasePathMappings resource.
	 */
	static basePathMappings(props: ApiGatewayBasePathMappingsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}/basepathmappings`;
	}

	/**
	 * Validates whether a string is a valid ARN for the BasePathMappings resource.
	 */
	static isValidBasePathMappingsArn(arn: string): boolean {
		return BasePathMappingsArnRegex.test(arn);
	}

	/**
	 * Parses a BasePathMappings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBasePathMappingsArn(
		arn: string,
	): ApiGatewayBasePathMappingsArnComponents {
		const match = BasePathMappingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid BasePathMappings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the ClientCertificate resource.
	 */
	static clientCertificate(props: ApiGatewayClientCertificateArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/clientcertificates/${props.clientCertificateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ClientCertificate resource.
	 */
	static isValidClientCertificateArn(arn: string): boolean {
		return ClientCertificateArnRegex.test(arn);
	}

	/**
	 * Parses a ClientCertificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClientCertificateArn(
		arn: string,
	): ApiGatewayClientCertificateArnComponents {
		const match = ClientCertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ClientCertificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clientCertificateId: match.groups!.clientCertificateId,
		};
	}

	/**
	 * Builds an ARN for the ClientCertificates resource.
	 */
	static clientCertificates(
		props: ApiGatewayClientCertificatesArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/clientcertificates`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ClientCertificates resource.
	 */
	static isValidClientCertificatesArn(arn: string): boolean {
		return ClientCertificatesArnRegex.test(arn);
	}

	/**
	 * Parses a ClientCertificates ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClientCertificatesArn(
		arn: string,
	): ApiGatewayClientCertificatesArnComponents {
		const match = ClientCertificatesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ClientCertificates ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Cors resource.
	 */
	static cors(props: ApiGatewayCorsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/cors`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Cors resource.
	 */
	static isValidCorsArn(arn: string): boolean {
		return CorsArnRegex.test(arn);
	}

	/**
	 * Parses a Cors ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCorsArn(arn: string): ApiGatewayCorsArnComponents {
		const match = CorsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Cors ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the DeploymentVariant1 resource.
	 */
	static deploymentVariant1(
		props: ApiGatewayDeploymentVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/deployments/${props.deploymentId}`;
	}

	/**
	 * Builds an ARN for the DeploymentVariant2 resource.
	 */
	static deploymentVariant2(
		props: ApiGatewayDeploymentVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/deployments/${props.deploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a Deployment ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(arn: string): ApiGatewayDeploymentArnComponents {
		const match = DeploymentParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			deploymentId: match.groups!.deploymentId,
		};
	}

	/**
	 * Builds an ARN for the DeploymentsVariant1 resource.
	 */
	static deploymentsVariant1(
		props: ApiGatewayDeploymentsVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/deployments`;
	}

	/**
	 * Builds an ARN for the DeploymentsVariant2 resource.
	 */
	static deploymentsVariant2(
		props: ApiGatewayDeploymentsVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/deployments`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Deployments resource.
	 */
	static isValidDeploymentsArn(arn: string): boolean {
		return DeploymentsArnRegex.test(arn);
	}

	/**
	 * Parses a Deployments ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentsArn(arn: string): ApiGatewayDeploymentsArnComponents {
		const match = DeploymentsParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Deployments ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the DocumentationPart resource.
	 */
	static documentationPart(props: ApiGatewayDocumentationPartArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/documentation/parts/${props.documentationPartId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DocumentationPart resource.
	 */
	static isValidDocumentationPartArn(arn: string): boolean {
		return DocumentationPartArnRegex.test(arn);
	}

	/**
	 * Parses a DocumentationPart ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentationPartArn(
		arn: string,
	): ApiGatewayDocumentationPartArnComponents {
		const match = DocumentationPartArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DocumentationPart ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			documentationPartId: match.groups!.documentationPartId,
		};
	}

	/**
	 * Builds an ARN for the DocumentationParts resource.
	 */
	static documentationParts(
		props: ApiGatewayDocumentationPartsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/documentation/parts`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DocumentationParts resource.
	 */
	static isValidDocumentationPartsArn(arn: string): boolean {
		return DocumentationPartsArnRegex.test(arn);
	}

	/**
	 * Parses a DocumentationParts ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentationPartsArn(
		arn: string,
	): ApiGatewayDocumentationPartsArnComponents {
		const match = DocumentationPartsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DocumentationParts ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the DocumentationVersion resource.
	 */
	static documentationVersion(
		props: ApiGatewayDocumentationVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/documentation/versions/${props.documentationVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DocumentationVersion resource.
	 */
	static isValidDocumentationVersionArn(arn: string): boolean {
		return DocumentationVersionArnRegex.test(arn);
	}

	/**
	 * Parses a DocumentationVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentationVersionArn(
		arn: string,
	): ApiGatewayDocumentationVersionArnComponents {
		const match = DocumentationVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DocumentationVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			documentationVersionId: match.groups!.documentationVersionId,
		};
	}

	/**
	 * Builds an ARN for the DocumentationVersions resource.
	 */
	static documentationVersions(
		props: ApiGatewayDocumentationVersionsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/documentation/versions`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DocumentationVersions resource.
	 */
	static isValidDocumentationVersionsArn(arn: string): boolean {
		return DocumentationVersionsArnRegex.test(arn);
	}

	/**
	 * Parses a DocumentationVersions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentationVersionsArn(
		arn: string,
	): ApiGatewayDocumentationVersionsArnComponents {
		const match = DocumentationVersionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DocumentationVersions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the DomainName resource.
	 */
	static domainName(props: ApiGatewayDomainNameArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DomainName resource.
	 */
	static isValidDomainNameArn(arn: string): boolean {
		return DomainNameArnRegex.test(arn);
	}

	/**
	 * Parses a DomainName ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainNameArn(arn: string): ApiGatewayDomainNameArnComponents {
		const match = DomainNameArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DomainName ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the DomainNameAccessAssociation resource.
	 */
	static domainNameAccessAssociation(
		props: ApiGatewayDomainNameAccessAssociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/domainnameaccessassociations/domainname/${props.domainName}/${props.sourceType}/${props.sourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DomainNameAccessAssociation resource.
	 */
	static isValidDomainNameAccessAssociationArn(arn: string): boolean {
		return DomainNameAccessAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a DomainNameAccessAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainNameAccessAssociationArn(
		arn: string,
	): ApiGatewayDomainNameAccessAssociationArnComponents {
		const match = DomainNameAccessAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DomainNameAccessAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			sourceType: match.groups!.sourceType,
			sourceId: match.groups!.sourceId,
		};
	}

	/**
	 * Builds an ARN for the DomainNameAccessAssociations resource.
	 */
	static domainNameAccessAssociations(
		props: ApiGatewayDomainNameAccessAssociationsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/domainnameaccessassociations`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DomainNameAccessAssociations resource.
	 */
	static isValidDomainNameAccessAssociationsArn(arn: string): boolean {
		return DomainNameAccessAssociationsArnRegex.test(arn);
	}

	/**
	 * Parses a DomainNameAccessAssociations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainNameAccessAssociationsArn(
		arn: string,
	): ApiGatewayDomainNameAccessAssociationsArnComponents {
		const match = DomainNameAccessAssociationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DomainNameAccessAssociations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the DomainNames resource.
	 */
	static domainNames(props: ApiGatewayDomainNamesArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DomainNames resource.
	 */
	static isValidDomainNamesArn(arn: string): boolean {
		return DomainNamesArnRegex.test(arn);
	}

	/**
	 * Parses a DomainNames ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainNamesArn(arn: string): ApiGatewayDomainNamesArnComponents {
		const match = DomainNamesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DomainNames ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ExportedAPI resource.
	 */
	static exportedAPI(props: ApiGatewayExportedAPIArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/exports/${props.specification}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ExportedAPI resource.
	 */
	static isValidExportedAPIArn(arn: string): boolean {
		return ExportedAPIArnRegex.test(arn);
	}

	/**
	 * Parses a ExportedAPI ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportedAPIArn(arn: string): ApiGatewayExportedAPIArnComponents {
		const match = ExportedAPIArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ExportedAPI ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			specification: match.groups!.specification,
		};
	}

	/**
	 * Builds an ARN for the GatewayResponse resource.
	 */
	static gatewayResponse(props: ApiGatewayGatewayResponseArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/gatewayresponses/${props.responseType}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the GatewayResponse resource.
	 */
	static isValidGatewayResponseArn(arn: string): boolean {
		return GatewayResponseArnRegex.test(arn);
	}

	/**
	 * Parses a GatewayResponse ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayResponseArn(
		arn: string,
	): ApiGatewayGatewayResponseArnComponents {
		const match = GatewayResponseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid GatewayResponse ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			responseType: match.groups!.responseType,
		};
	}

	/**
	 * Builds an ARN for the GatewayResponses resource.
	 */
	static gatewayResponses(props: ApiGatewayGatewayResponsesArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/gatewayresponses`;
	}

	/**
	 * Validates whether a string is a valid ARN for the GatewayResponses resource.
	 */
	static isValidGatewayResponsesArn(arn: string): boolean {
		return GatewayResponsesArnRegex.test(arn);
	}

	/**
	 * Parses a GatewayResponses ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayResponsesArn(
		arn: string,
	): ApiGatewayGatewayResponsesArnComponents {
		const match = GatewayResponsesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid GatewayResponses ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the IntegrationVariant1 resource.
	 */
	static integrationVariant1(
		props: ApiGatewayIntegrationVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations/${props.integrationId}`;
	}

	/**
	 * Builds an ARN for the IntegrationVariant2 resource.
	 */
	static integrationVariant2(
		props: ApiGatewayIntegrationVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources/${props.resourceId}/methods/${props.httpMethodType}/integration`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a Integration ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(arn: string): ApiGatewayIntegrationArnComponents {
		const match = IntegrationParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the IntegrationResponseVariant1 resource.
	 */
	static integrationResponseVariant1(
		props: ApiGatewayIntegrationResponseVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations/${props.integrationId}/integrationresponses/${props.integrationResponseId}`;
	}

	/**
	 * Builds an ARN for the IntegrationResponseVariant2 resource.
	 */
	static integrationResponseVariant2(
		props: ApiGatewayIntegrationResponseVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources/${props.resourceId}/methods/${props.httpMethodType}/integration/responses/${props.statusCode}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the IntegrationResponse resource.
	 */
	static isValidIntegrationResponseArn(arn: string): boolean {
		return IntegrationResponseArnRegex.test(arn);
	}

	/**
	 * Parses a IntegrationResponse ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationResponseArn(
		arn: string,
	): ApiGatewayIntegrationResponseArnComponents {
		const match = IntegrationResponseParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid IntegrationResponse ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			integrationId: match.groups!.integrationId,
			integrationResponseId: match.groups!.integrationResponseId,
		};
	}

	/**
	 * Builds an ARN for the IntegrationResponses resource.
	 */
	static integrationResponses(
		props: ApiGatewayIntegrationResponsesArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations/${props.integrationId}/integrationresponses`;
	}

	/**
	 * Validates whether a string is a valid ARN for the IntegrationResponses resource.
	 */
	static isValidIntegrationResponsesArn(arn: string): boolean {
		return IntegrationResponsesArnRegex.test(arn);
	}

	/**
	 * Parses a IntegrationResponses ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationResponsesArn(
		arn: string,
	): ApiGatewayIntegrationResponsesArnComponents {
		const match = IntegrationResponsesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid IntegrationResponses ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the Integrations resource.
	 */
	static integrations(props: ApiGatewayIntegrationsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Integrations resource.
	 */
	static isValidIntegrationsArn(arn: string): boolean {
		return IntegrationsArnRegex.test(arn);
	}

	/**
	 * Parses a Integrations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationsArn(
		arn: string,
	): ApiGatewayIntegrationsArnComponents {
		const match = IntegrationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Integrations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the Method resource.
	 */
	static method(props: ApiGatewayMethodArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources/${props.resourceId}/methods/${props.httpMethodType}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Method resource.
	 */
	static isValidMethodArn(arn: string): boolean {
		return MethodArnRegex.test(arn);
	}

	/**
	 * Parses a Method ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMethodArn(arn: string): ApiGatewayMethodArnComponents {
		const match = MethodArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Method ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			resourceId: match.groups!.resourceId,
			httpMethodType: match.groups!.httpMethodType,
		};
	}

	/**
	 * Builds an ARN for the MethodResponse resource.
	 */
	static methodResponse(props: ApiGatewayMethodResponseArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources/${props.resourceId}/methods/${props.httpMethodType}/responses/${props.statusCode}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MethodResponse resource.
	 */
	static isValidMethodResponseArn(arn: string): boolean {
		return MethodResponseArnRegex.test(arn);
	}

	/**
	 * Parses a MethodResponse ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMethodResponseArn(
		arn: string,
	): ApiGatewayMethodResponseArnComponents {
		const match = MethodResponseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MethodResponse ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			resourceId: match.groups!.resourceId,
			httpMethodType: match.groups!.httpMethodType,
			statusCode: match.groups!.statusCode,
		};
	}

	/**
	 * Builds an ARN for the ModelVariant1 resource.
	 */
	static modelVariant1(props: ApiGatewayModelVariant1ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/models/${props.modelId}`;
	}

	/**
	 * Builds an ARN for the ModelVariant2 resource.
	 */
	static modelVariant2(props: ApiGatewayModelVariant2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/models/${props.modelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Model resource.
	 */
	static isValidModelArn(arn: string): boolean {
		return ModelArnRegex.test(arn);
	}

	/**
	 * Parses a Model ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelArn(arn: string): ApiGatewayModelArnComponents {
		const match = ModelParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			modelId: match.groups!.modelId,
		};
	}

	/**
	 * Builds an ARN for the ModelTemplate resource.
	 */
	static modelTemplate(props: ApiGatewayModelTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/models/${props.modelId}/template`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ModelTemplate resource.
	 */
	static isValidModelTemplateArn(arn: string): boolean {
		return ModelTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a ModelTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelTemplateArn(
		arn: string,
	): ApiGatewayModelTemplateArnComponents {
		const match = ModelTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ModelTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			modelId: match.groups!.modelId,
		};
	}

	/**
	 * Builds an ARN for the ModelsVariant1 resource.
	 */
	static modelsVariant1(props: ApiGatewayModelsVariant1ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/models`;
	}

	/**
	 * Builds an ARN for the ModelsVariant2 resource.
	 */
	static modelsVariant2(props: ApiGatewayModelsVariant2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/models`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Models resource.
	 */
	static isValidModelsArn(arn: string): boolean {
		return ModelsArnRegex.test(arn);
	}

	/**
	 * Parses a Models ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelsArn(arn: string): ApiGatewayModelsArnComponents {
		const match = ModelsParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Models ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the Portal resource.
	 */
	static portal(props: ApiGatewayPortalArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/portals/${props.portalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Portal resource.
	 */
	static isValidPortalArn(arn: string): boolean {
		return PortalArnRegex.test(arn);
	}

	/**
	 * Parses a Portal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePortalArn(arn: string): ApiGatewayPortalArnComponents {
		const match = PortalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Portal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalId: match.groups!.portalId,
		};
	}

	/**
	 * Builds an ARN for the PortalProduct resource.
	 */
	static portalProduct(props: ApiGatewayPortalProductArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/portalproducts/${props.portalProductId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PortalProduct resource.
	 */
	static isValidPortalProductArn(arn: string): boolean {
		return PortalProductArnRegex.test(arn);
	}

	/**
	 * Parses a PortalProduct ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePortalProductArn(
		arn: string,
	): ApiGatewayPortalProductArnComponents {
		const match = PortalProductArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PortalProduct ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalProductId: match.groups!.portalProductId,
		};
	}

	/**
	 * Builds an ARN for the PrivateBasePathMapping resource.
	 */
	static privateBasePathMapping(
		props: ApiGatewayPrivateBasePathMappingArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}+${props.domainIdentifier}/basepathmappings/${props.basePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PrivateBasePathMapping resource.
	 */
	static isValidPrivateBasePathMappingArn(arn: string): boolean {
		return PrivateBasePathMappingArnRegex.test(arn);
	}

	/**
	 * Parses a PrivateBasePathMapping ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrivateBasePathMappingArn(
		arn: string,
	): ApiGatewayPrivateBasePathMappingArnComponents {
		const match = PrivateBasePathMappingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PrivateBasePathMapping ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			domainIdentifier: match.groups!.domainIdentifier,
			basePath: match.groups!.basePath,
		};
	}

	/**
	 * Builds an ARN for the PrivateBasePathMappings resource.
	 */
	static privateBasePathMappings(
		props: ApiGatewayPrivateBasePathMappingsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/domainnames/${props.domainName}+${props.domainIdentifier}/basepathmappings`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PrivateBasePathMappings resource.
	 */
	static isValidPrivateBasePathMappingsArn(arn: string): boolean {
		return PrivateBasePathMappingsArnRegex.test(arn);
	}

	/**
	 * Parses a PrivateBasePathMappings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrivateBasePathMappingsArn(
		arn: string,
	): ApiGatewayPrivateBasePathMappingsArnComponents {
		const match = PrivateBasePathMappingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PrivateBasePathMappings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			domainIdentifier: match.groups!.domainIdentifier,
		};
	}

	/**
	 * Builds an ARN for the PrivateDomainName resource.
	 */
	static privateDomainName(props: ApiGatewayPrivateDomainNameArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/domainnames/${props.domainName}+${props.domainIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PrivateDomainName resource.
	 */
	static isValidPrivateDomainNameArn(arn: string): boolean {
		return PrivateDomainNameArnRegex.test(arn);
	}

	/**
	 * Parses a PrivateDomainName ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrivateDomainNameArn(
		arn: string,
	): ApiGatewayPrivateDomainNameArnComponents {
		const match = PrivateDomainNameArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PrivateDomainName ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			domainIdentifier: match.groups!.domainIdentifier,
		};
	}

	/**
	 * Builds an ARN for the ProductPage resource.
	 */
	static productPage(props: ApiGatewayProductPageArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/portalproducts/${props.portalProductId}/productpages/${props.productPageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProductPage resource.
	 */
	static isValidProductPageArn(arn: string): boolean {
		return ProductPageArnRegex.test(arn);
	}

	/**
	 * Parses a ProductPage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductPageArn(arn: string): ApiGatewayProductPageArnComponents {
		const match = ProductPageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProductPage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalProductId: match.groups!.portalProductId,
			productPageId: match.groups!.productPageId,
		};
	}

	/**
	 * Builds an ARN for the ProductRestEndpointPage resource.
	 */
	static productRestEndpointPage(
		props: ApiGatewayProductRestEndpointPageArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/portalproducts/${props.portalProductId}/productrestendpointpages/${props.productRestEndpointPageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProductRestEndpointPage resource.
	 */
	static isValidProductRestEndpointPageArn(arn: string): boolean {
		return ProductRestEndpointPageArnRegex.test(arn);
	}

	/**
	 * Parses a ProductRestEndpointPage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductRestEndpointPageArn(
		arn: string,
	): ApiGatewayProductRestEndpointPageArnComponents {
		const match = ProductRestEndpointPageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProductRestEndpointPage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalProductId: match.groups!.portalProductId,
			productRestEndpointPageId: match.groups!.productRestEndpointPageId,
		};
	}

	/**
	 * Builds an ARN for the RequestValidator resource.
	 */
	static requestValidator(props: ApiGatewayRequestValidatorArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/requestvalidators/${props.requestValidatorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RequestValidator resource.
	 */
	static isValidRequestValidatorArn(arn: string): boolean {
		return RequestValidatorArnRegex.test(arn);
	}

	/**
	 * Parses a RequestValidator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRequestValidatorArn(
		arn: string,
	): ApiGatewayRequestValidatorArnComponents {
		const match = RequestValidatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RequestValidator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			requestValidatorId: match.groups!.requestValidatorId,
		};
	}

	/**
	 * Builds an ARN for the RequestValidators resource.
	 */
	static requestValidators(props: ApiGatewayRequestValidatorsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/requestvalidators`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RequestValidators resource.
	 */
	static isValidRequestValidatorsArn(arn: string): boolean {
		return RequestValidatorsArnRegex.test(arn);
	}

	/**
	 * Parses a RequestValidators ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRequestValidatorsArn(
		arn: string,
	): ApiGatewayRequestValidatorsArnComponents {
		const match = RequestValidatorsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RequestValidators ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the Resource resource.
	 */
	static resource(props: ApiGatewayResourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Resource resource.
	 */
	static isValidResourceArn(arn: string): boolean {
		return ResourceArnRegex.test(arn);
	}

	/**
	 * Parses a Resource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceArn(arn: string): ApiGatewayResourceArnComponents {
		const match = ResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Resource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Resources resource.
	 */
	static resources(props: ApiGatewayResourcesArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/resources`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Resources resource.
	 */
	static isValidResourcesArn(arn: string): boolean {
		return ResourcesArnRegex.test(arn);
	}

	/**
	 * Parses a Resources ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourcesArn(arn: string): ApiGatewayResourcesArnComponents {
		const match = ResourcesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Resources ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the RestApi resource.
	 */
	static restAPI(props: ApiGatewayRestAPIArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RestApi resource.
	 */
	static isValidRestAPIArn(arn: string): boolean {
		return RestAPIArnRegex.test(arn);
	}

	/**
	 * Parses a RestApi ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRestAPIArn(arn: string): ApiGatewayRestAPIArnComponents {
		const match = RestAPIArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RestApi ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
		};
	}

	/**
	 * Builds an ARN for the RestApis resource.
	 */
	static restApis(props: ApiGatewayRestApisArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RestApis resource.
	 */
	static isValidRestApisArn(arn: string): boolean {
		return RestApisArnRegex.test(arn);
	}

	/**
	 * Parses a RestApis ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRestApisArn(arn: string): ApiGatewayRestApisArnComponents {
		const match = RestApisArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RestApis ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Route resource.
	 */
	static route(props: ApiGatewayRouteArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/routes/${props.routeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Route resource.
	 */
	static isValidRouteArn(arn: string): boolean {
		return RouteArnRegex.test(arn);
	}

	/**
	 * Parses a Route ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteArn(arn: string): ApiGatewayRouteArnComponents {
		const match = RouteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Route ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			routeId: match.groups!.routeId,
		};
	}

	/**
	 * Builds an ARN for the RouteRequestParameter resource.
	 */
	static routeRequestParameter(
		props: ApiGatewayRouteRequestParameterArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/routes/${props.routeId}/requestparameters/${props.requestParameterKey}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouteRequestParameter resource.
	 */
	static isValidRouteRequestParameterArn(arn: string): boolean {
		return RouteRequestParameterArnRegex.test(arn);
	}

	/**
	 * Parses a RouteRequestParameter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteRequestParameterArn(
		arn: string,
	): ApiGatewayRouteRequestParameterArnComponents {
		const match = RouteRequestParameterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouteRequestParameter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			routeId: match.groups!.routeId,
			requestParameterKey: match.groups!.requestParameterKey,
		};
	}

	/**
	 * Builds an ARN for the RouteResponse resource.
	 */
	static routeResponse(props: ApiGatewayRouteResponseArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/routes/${props.routeId}/routeresponses/${props.routeResponseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouteResponse resource.
	 */
	static isValidRouteResponseArn(arn: string): boolean {
		return RouteResponseArnRegex.test(arn);
	}

	/**
	 * Parses a RouteResponse ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteResponseArn(
		arn: string,
	): ApiGatewayRouteResponseArnComponents {
		const match = RouteResponseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouteResponse ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			routeId: match.groups!.routeId,
			routeResponseId: match.groups!.routeResponseId,
		};
	}

	/**
	 * Builds an ARN for the RouteResponses resource.
	 */
	static routeResponses(props: ApiGatewayRouteResponsesArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/routes/${props.routeId}/routeresponses`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouteResponses resource.
	 */
	static isValidRouteResponsesArn(arn: string): boolean {
		return RouteResponsesArnRegex.test(arn);
	}

	/**
	 * Parses a RouteResponses ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteResponsesArn(
		arn: string,
	): ApiGatewayRouteResponsesArnComponents {
		const match = RouteResponsesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouteResponses ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			routeId: match.groups!.routeId,
		};
	}

	/**
	 * Builds an ARN for the RouteSettings resource.
	 */
	static routeSettings(props: ApiGatewayRouteSettingsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages/${props.stageName}/routesettings/${props.routeKey}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouteSettings resource.
	 */
	static isValidRouteSettingsArn(arn: string): boolean {
		return RouteSettingsArnRegex.test(arn);
	}

	/**
	 * Parses a RouteSettings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteSettingsArn(
		arn: string,
	): ApiGatewayRouteSettingsArnComponents {
		const match = RouteSettingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouteSettings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stageName: match.groups!.stageName,
			routeKey: match.groups!.routeKey,
		};
	}

	/**
	 * Builds an ARN for the Routes resource.
	 */
	static routes(props: ApiGatewayRoutesArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/routes`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Routes resource.
	 */
	static isValidRoutesArn(arn: string): boolean {
		return RoutesArnRegex.test(arn);
	}

	/**
	 * Parses a Routes ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoutesArn(arn: string): ApiGatewayRoutesArnComponents {
		const match = RoutesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Routes ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the RoutingRule resource.
	 */
	static routingRule(props: ApiGatewayRoutingRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}:${props.account ?? "*"}:/domainnames/${props.domainName}/routingrules/${props.routingRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RoutingRule resource.
	 */
	static isValidRoutingRuleArn(arn: string): boolean {
		return RoutingRuleArnRegex.test(arn);
	}

	/**
	 * Parses a RoutingRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoutingRuleArn(arn: string): ApiGatewayRoutingRuleArnComponents {
		const match = RoutingRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RoutingRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			routingRuleId: match.groups!.routingRuleId,
		};
	}

	/**
	 * Builds an ARN for the Sdk resource.
	 */
	static sdk(props: ApiGatewaySDKArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/stages/${props.stageName}/sdks/${props.sdkType}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Sdk resource.
	 */
	static isValidSDKArn(arn: string): boolean {
		return SDKArnRegex.test(arn);
	}

	/**
	 * Parses a Sdk ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSDKArn(arn: string): ApiGatewaySDKArnComponents {
		const match = SDKArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Sdk ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restAPIId: match.groups!.restAPIId,
			stageName: match.groups!.stageName,
			sdkType: match.groups!.sdkType,
		};
	}

	/**
	 * Builds an ARN for the StageVariant1 resource.
	 */
	static stageVariant1(props: ApiGatewayStageVariant1ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages/${props.stageName}`;
	}

	/**
	 * Builds an ARN for the StageVariant2 resource.
	 */
	static stageVariant2(props: ApiGatewayStageVariant2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/stages/${props.stageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Stage resource.
	 */
	static isValidStageArn(arn: string): boolean {
		return StageArnRegex.test(arn);
	}

	/**
	 * Parses a Stage ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStageArn(arn: string): ApiGatewayStageArnComponents {
		const match = StageParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Stage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stageName: match.groups!.stageName,
		};
	}

	/**
	 * Builds an ARN for the StagesVariant1 resource.
	 */
	static stagesVariant1(props: ApiGatewayStagesVariant1ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages`;
	}

	/**
	 * Builds an ARN for the StagesVariant2 resource.
	 */
	static stagesVariant2(props: ApiGatewayStagesVariant2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.restAPIId}/stages`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Stages resource.
	 */
	static isValidStagesArn(arn: string): boolean {
		return StagesArnRegex.test(arn);
	}

	/**
	 * Parses a Stages ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStagesArn(arn: string): ApiGatewayStagesArnComponents {
		const match = StagesParseRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Stages ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the Tags resource.
	 */
	static tags(props: ApiGatewayTagsArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/tags/${props.urlEncodedResourceARN}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Tags resource.
	 */
	static isValidTagsArn(arn: string): boolean {
		return TagsArnRegex.test(arn);
	}

	/**
	 * Parses a Tags ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTagsArn(arn: string): ApiGatewayTagsArnComponents {
		const match = TagsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Tags ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			urlEncodedResourceARN: match.groups!.urlEncodedResourceARN,
		};
	}

	/**
	 * Builds an ARN for the Template resource.
	 */
	static template(props: ApiGatewayTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/models/${props.modelName}/template`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a Template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): ApiGatewayTemplateArnComponents {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelName: match.groups!.modelName,
		};
	}

	/**
	 * Builds an ARN for the UsagePlan resource.
	 */
	static usagePlan(props: ApiGatewayUsagePlanArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/usageplans/${props.usagePlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the UsagePlan resource.
	 */
	static isValidUsagePlanArn(arn: string): boolean {
		return UsagePlanArnRegex.test(arn);
	}

	/**
	 * Parses a UsagePlan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsagePlanArn(arn: string): ApiGatewayUsagePlanArnComponents {
		const match = UsagePlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid UsagePlan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			usagePlanId: match.groups!.usagePlanId,
		};
	}

	/**
	 * Builds an ARN for the UsagePlanKey resource.
	 */
	static usagePlanKey(props: ApiGatewayUsagePlanKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/usageplans/${props.usagePlanId}/keys/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the UsagePlanKey resource.
	 */
	static isValidUsagePlanKeyArn(arn: string): boolean {
		return UsagePlanKeyArnRegex.test(arn);
	}

	/**
	 * Parses a UsagePlanKey ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsagePlanKeyArn(
		arn: string,
	): ApiGatewayUsagePlanKeyArnComponents {
		const match = UsagePlanKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid UsagePlanKey ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			usagePlanId: match.groups!.usagePlanId,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the UsagePlanKeys resource.
	 */
	static usagePlanKeys(props: ApiGatewayUsagePlanKeysArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/usageplans/${props.usagePlanId}/keys`;
	}

	/**
	 * Validates whether a string is a valid ARN for the UsagePlanKeys resource.
	 */
	static isValidUsagePlanKeysArn(arn: string): boolean {
		return UsagePlanKeysArnRegex.test(arn);
	}

	/**
	 * Parses a UsagePlanKeys ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsagePlanKeysArn(
		arn: string,
	): ApiGatewayUsagePlanKeysArnComponents {
		const match = UsagePlanKeysArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid UsagePlanKeys ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			usagePlanId: match.groups!.usagePlanId,
		};
	}

	/**
	 * Builds an ARN for the UsagePlans resource.
	 */
	static usagePlans(props: ApiGatewayUsagePlansArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/usageplans`;
	}

	/**
	 * Validates whether a string is a valid ARN for the UsagePlans resource.
	 */
	static isValidUsagePlansArn(arn: string): boolean {
		return UsagePlansArnRegex.test(arn);
	}

	/**
	 * Parses a UsagePlans ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsagePlansArn(arn: string): ApiGatewayUsagePlansArnComponents {
		const match = UsagePlansArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid UsagePlans ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the VpcLink resource.
	 */
	static vpcLink(props: ApiGatewayVPCLinkArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/vpclinks/${props.vpcLinkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VpcLink resource.
	 */
	static isValidVPCLinkArn(arn: string): boolean {
		return VPCLinkArnRegex.test(arn);
	}

	/**
	 * Parses a VpcLink ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCLinkArn(arn: string): ApiGatewayVPCLinkArnComponents {
		const match = VPCLinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VpcLink ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcLinkId: match.groups!.vpcLinkId,
		};
	}

	/**
	 * Builds an ARN for the VpcLinks resource.
	 */
	static vpcLinks(props: ApiGatewayVPCLinksArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/vpclinks`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VpcLinks resource.
	 */
	static isValidVPCLinksArn(arn: string): boolean {
		return VPCLinksArnRegex.test(arn);
	}

	/**
	 * Parses a VpcLinks ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCLinksArn(arn: string): ApiGatewayVPCLinksArnComponents {
		const match = VPCLinksArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VpcLinks ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for apigateway.
 */
export class ApiGatewayOperations {
	/** IAM actions required for the CreateApi API call. */
	static readonly CreateApi: string[] = ["apigateway:POST", "iam:PassRole"];
	/** IAM actions required for the CreateApiKey API call. */
	static readonly CreateApiKey: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateApiMapping API call. */
	static readonly CreateApiMapping: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateAuthorizer API call. */
	static readonly CreateAuthorizer: string[] = [
		"apigateway:POST",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBasePathMapping API call. */
	static readonly CreateBasePathMapping: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDocumentationPart API call. */
	static readonly CreateDocumentationPart: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDocumentationVersion API call. */
	static readonly CreateDocumentationVersion: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDomainName API call. */
	static readonly CreateDomainName: string[] = [
		"apigateway:AddCertificateToDomain",
		"apigateway:POST",
		"apigateway:PUT",
		"apigateway:UpdateDomainNamePolicy",
	];
	/** IAM actions required for the CreateDomainNameAccessAssociation API call. */
	static readonly CreateDomainNameAccessAssociation: string[] = [
		"apigateway:CreateAccessAssociation",
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [
		"apigateway:POST",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateIntegrationResponse API call. */
	static readonly CreateIntegrationResponse: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateModel API call. */
	static readonly CreateModel: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreatePortal API call. */
	static readonly CreatePortal: string[] = [
		"apigateway:CreatePortal",
		"apigateway:GetPortalProduct",
		"apigateway:POST",
	];
	/** IAM actions required for the CreatePortalProduct API call. */
	static readonly CreatePortalProduct: string[] = [
		"apigateway:CreatePortalProduct",
		"apigateway:POST",
	];
	/** IAM actions required for the CreateProductPage API call. */
	static readonly CreateProductPage: string[] = [
		"apigateway:CreateProductPage",
	];
	/** IAM actions required for the CreateProductRestEndpointPage API call. */
	static readonly CreateProductRestEndpointPage: string[] = [
		"apigateway:CreateProductRestEndpointPage",
	];
	/** IAM actions required for the CreateRequestValidator API call. */
	static readonly CreateRequestValidator: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateResource API call. */
	static readonly CreateResource: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRestApi API call. */
	static readonly CreateRestApi: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CreateRoute: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRouteResponse API call. */
	static readonly CreateRouteResponse: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRoutingRule API call. */
	static readonly CreateRoutingRule: string[] = [
		"apigateway:CreateRoutingRule",
	];
	/** IAM actions required for the CreateStage API call. */
	static readonly CreateStage: string[] = ["apigateway:POST", "apigateway:PUT"];
	/** IAM actions required for the CreateUsagePlan API call. */
	static readonly CreateUsagePlan: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateUsagePlanKey API call. */
	static readonly CreateUsagePlanKey: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateVpcLink API call. */
	static readonly CreateVpcLink: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the DeleteAccessLogSettings API call. */
	static readonly DeleteAccessLogSettings: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApi API call. */
	static readonly DeleteApi: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApiKey API call. */
	static readonly DeleteApiKey: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApiMapping API call. */
	static readonly DeleteApiMapping: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteAuthorizer API call. */
	static readonly DeleteAuthorizer: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteBasePathMapping API call. */
	static readonly DeleteBasePathMapping: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteClientCertificate API call. */
	static readonly DeleteClientCertificate: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteCorsConfiguration API call. */
	static readonly DeleteCorsConfiguration: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DeleteDeployment: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDocumentationPart API call. */
	static readonly DeleteDocumentationPart: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDocumentationVersion API call. */
	static readonly DeleteDocumentationVersion: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDomainName API call. */
	static readonly DeleteDomainName: string[] = [
		"apigateway:DELETE",
		"apigateway:RemoveCertificateFromDomain",
	];
	/** IAM actions required for the DeleteDomainNameAccessAssociation API call. */
	static readonly DeleteDomainNameAccessAssociation: string[] = [
		"apigateway:DELETE",
	];
	/** IAM actions required for the DeleteGatewayResponse API call. */
	static readonly DeleteGatewayResponse: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteIntegrationResponse API call. */
	static readonly DeleteIntegrationResponse: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteMethod API call. */
	static readonly DeleteMethod: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteMethodResponse API call. */
	static readonly DeleteMethodResponse: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DeleteModel: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeletePortal API call. */
	static readonly DeletePortal: string[] = ["apigateway:DeletePortal"];
	/** IAM actions required for the DeletePortalProduct API call. */
	static readonly DeletePortalProduct: string[] = [
		"apigateway:DeletePortalProduct",
	];
	/** IAM actions required for the DeletePortalProductSharingPolicy API call. */
	static readonly DeletePortalProductSharingPolicy: string[] = [
		"apigateway:DeletePortalProductSharingPolicy",
	];
	/** IAM actions required for the DeleteProductPage API call. */
	static readonly DeleteProductPage: string[] = [
		"apigateway:DeleteProductPage",
	];
	/** IAM actions required for the DeleteProductRestEndpointPage API call. */
	static readonly DeleteProductRestEndpointPage: string[] = [
		"apigateway:DeleteProductRestEndpointPage",
	];
	/** IAM actions required for the DeleteRequestValidator API call. */
	static readonly DeleteRequestValidator: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DeleteResource: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRestApi API call. */
	static readonly DeleteRestApi: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DeleteRoute: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRouteRequestParameter API call. */
	static readonly DeleteRouteRequestParameter: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRouteResponse API call. */
	static readonly DeleteRouteResponse: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRouteSettings API call. */
	static readonly DeleteRouteSettings: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRoutingRule API call. */
	static readonly DeleteRoutingRule: string[] = [
		"apigateway:DeleteRoutingRule",
	];
	/** IAM actions required for the DeleteStage API call. */
	static readonly DeleteStage: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteUsagePlan API call. */
	static readonly DeleteUsagePlan: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteUsagePlanKey API call. */
	static readonly DeleteUsagePlanKey: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteVpcLink API call. */
	static readonly DeleteVpcLink: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DisablePortal API call. */
	static readonly DisablePortal: string[] = ["apigateway:DisablePortal"];
	/** IAM actions required for the ExportApi API call. */
	static readonly ExportApi: string[] = ["apigateway:GET"];
	/** IAM actions required for the FlushStageAuthorizersCache API call. */
	static readonly FlushStageAuthorizersCache: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the FlushStageCache API call. */
	static readonly FlushStageCache: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the GenerateClientCertificate API call. */
	static readonly GenerateClientCertificate: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the GetAccount API call. */
	static readonly opGetAccount: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApi API call. */
	static readonly opGetApi: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiKey API call. */
	static readonly opGetApiKey: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiKeys API call. */
	static readonly opGetApiKeys: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiMapping API call. */
	static readonly opGetApiMapping: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiMappings API call. */
	static readonly opGetApiMappings: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApis API call. */
	static readonly opGetApis: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetAuthorizer API call. */
	static readonly opGetAuthorizer: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetAuthorizers API call. */
	static readonly opGetAuthorizers: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetBasePathMapping API call. */
	static readonly opGetBasePathMapping: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetBasePathMappings API call. */
	static readonly opGetBasePathMappings: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetClientCertificate API call. */
	static readonly opGetClientCertificate: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetClientCertificates API call. */
	static readonly opGetClientCertificates: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDeployments API call. */
	static readonly opGetDeployments: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationPart API call. */
	static readonly opGetDocumentationPart: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationParts API call. */
	static readonly opGetDocumentationParts: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationVersion API call. */
	static readonly opGetDocumentationVersion: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationVersions API call. */
	static readonly opGetDocumentationVersions: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDomainName API call. */
	static readonly opGetDomainName: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDomainNameAccessAssociations API call. */
	static readonly opGetDomainNameAccessAssociations: string[] = [
		"apigateway:GET",
	];
	/** IAM actions required for the GetDomainNames API call. */
	static readonly opGetDomainNames: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetExport API call. */
	static readonly opGetExport: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetGatewayResponse API call. */
	static readonly opGetGatewayResponse: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetGatewayResponses API call. */
	static readonly opGetGatewayResponses: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly opGetIntegration: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrationResponse API call. */
	static readonly opGetIntegrationResponse: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrationResponses API call. */
	static readonly opGetIntegrationResponses: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrations API call. */
	static readonly opGetIntegrations: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetMethod API call. */
	static readonly opGetMethod: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetMethodResponse API call. */
	static readonly opGetMethodResponse: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModel API call. */
	static readonly opGetModel: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModelTemplate API call. */
	static readonly opGetModelTemplate: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModels API call. */
	static readonly opGetModels: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetPortal API call. */
	static readonly opGetPortal: string[] = ["apigateway:GetPortal"];
	/** IAM actions required for the GetPortalProduct API call. */
	static readonly opGetPortalProduct: string[] = [
		"apigateway:GetPortalProduct",
	];
	/** IAM actions required for the GetPortalProductSharingPolicy API call. */
	static readonly opGetPortalProductSharingPolicy: string[] = [
		"apigateway:GetPortalProductSharingPolicy",
	];
	/** IAM actions required for the GetProductPage API call. */
	static readonly opGetProductPage: string[] = ["apigateway:GetProductPage"];
	/** IAM actions required for the GetProductRestEndpointPage API call. */
	static readonly opGetProductRestEndpointPage: string[] = [
		"apigateway:GetProductRestEndpointPage",
	];
	/** IAM actions required for the GetRequestValidator API call. */
	static readonly opGetRequestValidator: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRequestValidators API call. */
	static readonly opGetRequestValidators: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetResource API call. */
	static readonly opGetResource: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetResources API call. */
	static readonly opGetResources: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRestApi API call. */
	static readonly opGetRestApi: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRestApis API call. */
	static readonly opGetRestApis: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoute API call. */
	static readonly opGetRoute: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRouteResponse API call. */
	static readonly opGetRouteResponse: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRouteResponses API call. */
	static readonly opGetRouteResponses: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoutes API call. */
	static readonly opGetRoutes: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoutingRule API call. */
	static readonly opGetRoutingRule: string[] = ["apigateway:GetRoutingRule"];
	/** IAM actions required for the GetSdk API call. */
	static readonly opGetSdk: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetSdkType API call. */
	static readonly opGetSdkType: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetSdkTypes API call. */
	static readonly opGetSdkTypes: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetStage API call. */
	static readonly opGetStage: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetStages API call. */
	static readonly opGetStages: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetTags API call. */
	static readonly opGetTags: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsage API call. */
	static readonly opGetUsage: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlan API call. */
	static readonly opGetUsagePlan: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlanKey API call. */
	static readonly opGetUsagePlanKey: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlanKeys API call. */
	static readonly opGetUsagePlanKeys: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlans API call. */
	static readonly opGetUsagePlans: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetVpcLink API call. */
	static readonly opGetVpcLink: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetVpcLinks API call. */
	static readonly opGetVpcLinks: string[] = ["apigateway:GET"];
	/** IAM actions required for the ImportApi API call. */
	static readonly ImportApi: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
		"iam:PassRole",
	];
	/** IAM actions required for the ImportApiKeys API call. */
	static readonly ImportApiKeys: string[] = ["apigateway:POST"];
	/** IAM actions required for the ImportDocumentationParts API call. */
	static readonly ImportDocumentationParts: string[] = ["apigateway:PUT"];
	/** IAM actions required for the ImportRestApi API call. */
	static readonly ImportRestApi: string[] = [
		"apigateway:POST",
		"iam:PassRole",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the ListPortalProducts API call. */
	static readonly ListPortalProducts: string[] = [
		"apigateway:ListPortalProducts",
	];
	/** IAM actions required for the ListPortals API call. */
	static readonly ListPortals: string[] = ["apigateway:ListPortals"];
	/** IAM actions required for the ListProductPages API call. */
	static readonly ListProductPages: string[] = ["apigateway:ListProductPages"];
	/** IAM actions required for the ListProductRestEndpointPages API call. */
	static readonly ListProductRestEndpointPages: string[] = [
		"apigateway:ListProductRestEndpointPages",
	];
	/** IAM actions required for the ListRoutingRules API call. */
	static readonly ListRoutingRules: string[] = ["apigateway:ListRoutingRules"];
	/** IAM actions required for the PreviewPortal API call. */
	static readonly PreviewPortal: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:PreviewPortal",
	];
	/** IAM actions required for the PublishPortal API call. */
	static readonly PublishPortal: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:PublishPortal",
	];
	/** IAM actions required for the PutGatewayResponse API call. */
	static readonly PutGatewayResponse: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PutIntegration: string[] = ["apigateway:PUT", "iam:PassRole"];
	/** IAM actions required for the PutIntegrationResponse API call. */
	static readonly PutIntegrationResponse: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutMethod API call. */
	static readonly PutMethod: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutMethodResponse API call. */
	static readonly PutMethodResponse: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutPortalProductSharingPolicy API call. */
	static readonly PutPortalProductSharingPolicy: string[] = [
		"apigateway:PutPortalProductSharingPolicy",
	];
	/** IAM actions required for the PutRestApi API call. */
	static readonly PutRestApi: string[] = [
		"apigateway:PUT",
		"iam:PassRole",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the PutRoutingRule API call. */
	static readonly PutRoutingRule: string[] = ["apigateway:UpdateRoutingRule"];
	/** IAM actions required for the ReimportApi API call. */
	static readonly ReimportApi: string[] = [
		"apigateway:DELETE",
		"apigateway:POST",
		"apigateway:PUT",
		"iam:PassRole",
	];
	/** IAM actions required for the RejectDomainNameAccessAssociation API call. */
	static readonly RejectDomainNameAccessAssociation: string[] = [
		"apigateway:RejectAccessAssociation",
	];
	/** IAM actions required for the ResetAuthorizersCache API call. */
	static readonly ResetAuthorizersCache: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"apigateway:PATCH",
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the TestInvokeAuthorizer API call. */
	static readonly TestInvokeAuthorizer: string[] = ["apigateway:POST"];
	/** IAM actions required for the TestInvokeMethod API call. */
	static readonly TestInvokeMethod: string[] = ["apigateway:POST"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"apigateway:DELETE",
		"apigateway:PATCH",
	];
	/** IAM actions required for the UpdateAccount API call. */
	static readonly UpdateAccount: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateApi API call. */
	static readonly UpdateApi: string[] = ["apigateway:PATCH", "iam:PassRole"];
	/** IAM actions required for the UpdateApiKey API call. */
	static readonly UpdateApiKey: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateApiMapping API call. */
	static readonly UpdateApiMapping: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateAuthorizer API call. */
	static readonly UpdateAuthorizer: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateBasePathMapping API call. */
	static readonly UpdateBasePathMapping: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateClientCertificate API call. */
	static readonly UpdateClientCertificate: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDeployment API call. */
	static readonly UpdateDeployment: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDocumentationPart API call. */
	static readonly UpdateDocumentationPart: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDocumentationVersion API call. */
	static readonly UpdateDocumentationVersion: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDomainName API call. */
	static readonly UpdateDomainName: string[] = [
		"apigateway:AddCertificateToDomain",
		"apigateway:PATCH",
		"apigateway:RemoveCertificateFromDomain",
		"apigateway:UpdateDomainNameManagementPolicy",
		"apigateway:UpdateDomainNamePolicy",
	];
	/** IAM actions required for the UpdateGatewayResponse API call. */
	static readonly UpdateGatewayResponse: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateIntegration API call. */
	static readonly UpdateIntegration: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateIntegrationResponse API call. */
	static readonly UpdateIntegrationResponse: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateMethod API call. */
	static readonly UpdateMethod: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateMethodResponse API call. */
	static readonly UpdateMethodResponse: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UpdateModel: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdatePortal API call. */
	static readonly UpdatePortal: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:UpdatePortal",
	];
	/** IAM actions required for the UpdatePortalProduct API call. */
	static readonly UpdatePortalProduct: string[] = [
		"apigateway:UpdatePortalProduct",
	];
	/** IAM actions required for the UpdateProductPage API call. */
	static readonly UpdateProductPage: string[] = [
		"apigateway:UpdateProductPage",
	];
	/** IAM actions required for the UpdateProductRestEndpointPage API call. */
	static readonly UpdateProductRestEndpointPage: string[] = [
		"apigateway:UpdateProductRestEndpointPage",
	];
	/** IAM actions required for the UpdateRequestValidator API call. */
	static readonly UpdateRequestValidator: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UpdateResource: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateRestApi API call. */
	static readonly UpdateRestApi: string[] = [
		"apigateway:PATCH",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UpdateRoute: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateRouteResponse API call. */
	static readonly UpdateRouteResponse: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateStage API call. */
	static readonly UpdateStage: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateUsage API call. */
	static readonly UpdateUsage: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateUsagePlan API call. */
	static readonly UpdateUsagePlan: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateVpcLink API call. */
	static readonly UpdateVpcLink: string[] = ["apigateway:PATCH"];
}

/**
 * Condition key constants and builders for apigateway.
 */
export class ApiGatewayConditions {
	/** Condition keys applicable to the CreatePortal action. */
	static readonly CreatePortalConditionKeys: string[] = [
		"apigateway:Request/CognitoUserPoolArn",
		"apigateway:Request/PortalDisplayName",
		"apigateway:Request/PortalDomainName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePortalProduct action. */
	static readonly CreatePortalProductConditionKeys: string[] = [
		"apigateway:Request/PortalProductDisplayName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProductPage action. */
	static readonly CreateProductPageConditionKeys: string[] = [
		"apigateway:Request/ProductPageTitle",
	];
	/** Condition keys applicable to the CreateProductRestEndpointPage action. */
	static readonly CreateProductRestEndpointPageConditionKeys: string[] = [
		"apigateway:Request/Method",
		"apigateway:Request/ProductRestEndpointPageEndpointPrefix",
		"apigateway:Request/RestApiId",
		"apigateway:Request/Stage",
	];
	/** Condition keys applicable to the CreateRoutingRule action. */
	static readonly CreateRoutingRuleConditionKeys: string[] = [
		"apigateway:Request/ConditionBasePaths",
		"apigateway:Request/Priority",
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DELETE action. */
	static readonly DELETEConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRoutingRule action. */
	static readonly DeleteRoutingRuleConditionKeys: string[] = [
		"apigateway:Resource/ConditionBasePaths",
		"apigateway:Resource/Priority",
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRoutingRule action. */
	static readonly actionGetRoutingRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRoutingRules action. */
	static readonly ListRoutingRulesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PATCH action. */
	static readonly PATCHConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the POST action. */
	static readonly POSTConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PUT action. */
	static readonly PUTConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePortal action. */
	static readonly UpdatePortalConditionKeys: string[] = [
		"apigateway:Request/CognitoUserPoolArn",
		"apigateway:Request/PortalDisplayName",
		"apigateway:Request/PortalDomainName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePortalProduct action. */
	static readonly UpdatePortalProductConditionKeys: string[] = [
		"apigateway:Request/PortalProductDisplayName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProductPage action. */
	static readonly UpdateProductPageConditionKeys: string[] = [
		"apigateway:Request/ProductPageTitle",
	];
	/** Condition keys applicable to the UpdateProductRestEndpointPage action. */
	static readonly UpdateProductRestEndpointPageConditionKeys: string[] = [
		"apigateway:Request/ProductRestEndpointPageEndpointPrefix",
	];
	/** Condition keys applicable to the UpdateRoutingRule action. */
	static readonly UpdateRoutingRuleConditionKeys: string[] = [
		"apigateway:Request/ConditionBasePaths",
		"apigateway:Request/Priority",
		"apigateway:Resource/ConditionBasePaths",
		"apigateway:Resource/Priority",
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: apigateway:Request/AccessAssociationSource (String) */
	static readonly REQUEST_ACCESS_ASSOCIATION_SOURCE =
		"apigateway:Request/AccessAssociationSource";
	/** Condition key: apigateway:Request/AccessLoggingDestination (String) */
	static readonly REQUEST_ACCESS_LOGGING_DESTINATION =
		"apigateway:Request/AccessLoggingDestination";
	/** Condition key: apigateway:Request/AccessLoggingFormat (String) */
	static readonly REQUEST_ACCESS_LOGGING_FORMAT =
		"apigateway:Request/AccessLoggingFormat";
	/** Condition key: apigateway:Request/ApiKeyRequired (ArrayOfBool) */
	static readonly REQUEST_API_KEY_REQUIRED =
		"apigateway:Request/ApiKeyRequired";
	/** Condition key: apigateway:Request/ApiName (String) */
	static readonly REQUEST_API_NAME = "apigateway:Request/ApiName";
	/** Condition key: apigateway:Request/AuthorizerType (ArrayOfString) */
	static readonly REQUEST_AUTHORIZER_TYPE = "apigateway:Request/AuthorizerType";
	/** Condition key: apigateway:Request/AuthorizerUri (ArrayOfString) */
	static readonly REQUEST_AUTHORIZER_URI = "apigateway:Request/AuthorizerUri";
	/** Condition key: apigateway:Request/CognitoUserPoolArn (ARN) */
	static readonly REQUEST_COGNITO_USER_POOL_ARN =
		"apigateway:Request/CognitoUserPoolArn";
	/** Condition key: apigateway:Request/ConditionBasePaths (ArrayOfString) */
	static readonly REQUEST_CONDITION_BASE_PATHS =
		"apigateway:Request/ConditionBasePaths";
	/** Condition key: apigateway:Request/DisableExecuteApiEndpoint (Bool) */
	static readonly REQUEST_DISABLE_EXECUTE_API_ENDPOINT =
		"apigateway:Request/DisableExecuteApiEndpoint";
	/** Condition key: apigateway:Request/DomainNameArn (ARN) */
	static readonly REQUEST_DOMAIN_NAME_ARN = "apigateway:Request/DomainNameArn";
	/** Condition key: apigateway:Request/EndpointType (ArrayOfString) */
	static readonly REQUEST_ENDPOINT_TYPE = "apigateway:Request/EndpointType";
	/** Condition key: apigateway:Request/Method (String) */
	static readonly REQUEST_METHOD = "apigateway:Request/Method";
	/** Condition key: apigateway:Request/MtlsTrustStoreUri (String) */
	static readonly REQUEST_MTLS_TRUST_STORE_URI =
		"apigateway:Request/MtlsTrustStoreUri";
	/** Condition key: apigateway:Request/MtlsTrustStoreVersion (String) */
	static readonly REQUEST_MTLS_TRUST_STORE_VERSION =
		"apigateway:Request/MtlsTrustStoreVersion";
	/** Condition key: apigateway:Request/PortalDisplayName (String) */
	static readonly REQUEST_PORTAL_DISPLAY_NAME =
		"apigateway:Request/PortalDisplayName";
	/** Condition key: apigateway:Request/PortalDomainName (String) */
	static readonly REQUEST_PORTAL_DOMAIN_NAME =
		"apigateway:Request/PortalDomainName";
	/** Condition key: apigateway:Request/PortalProductDisplayName (String) */
	static readonly REQUEST_PORTAL_PRODUCT_DISPLAY_NAME =
		"apigateway:Request/PortalProductDisplayName";
	/** Condition key: apigateway:Request/Priority (Numeric) */
	static readonly REQUEST_PRIORITY = "apigateway:Request/Priority";
	/** Condition key: apigateway:Request/ProductPageTitle (String) */
	static readonly REQUEST_PRODUCT_PAGE_TITLE =
		"apigateway:Request/ProductPageTitle";
	/** Condition key: apigateway:Request/ProductRestEndpointPageEndpointPrefix (String) */
	static readonly REQUEST_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX =
		"apigateway:Request/ProductRestEndpointPageEndpointPrefix";
	/** Condition key: apigateway:Request/RestApiId (String) */
	static readonly REQUEST_REST_API_ID = "apigateway:Request/RestApiId";
	/** Condition key: apigateway:Request/RouteAuthorizationType (ArrayOfString) */
	static readonly REQUEST_ROUTE_AUTHORIZATION_TYPE =
		"apigateway:Request/RouteAuthorizationType";
	/** Condition key: apigateway:Request/RoutingMode (String) */
	static readonly REQUEST_ROUTING_MODE = "apigateway:Request/RoutingMode";
	/** Condition key: apigateway:Request/SecurityPolicy (ArrayOfString) */
	static readonly REQUEST_SECURITY_POLICY = "apigateway:Request/SecurityPolicy";
	/** Condition key: apigateway:Request/Stage (String) */
	static readonly REQUEST_STAGE = "apigateway:Request/Stage";
	/** Condition key: apigateway:Request/StageName (String) */
	static readonly REQUEST_STAGE_NAME = "apigateway:Request/StageName";
	/** Condition key: apigateway:Resource/AccessLoggingDestination (String) */
	static readonly RESOURCE_ACCESS_LOGGING_DESTINATION =
		"apigateway:Resource/AccessLoggingDestination";
	/** Condition key: apigateway:Resource/AccessLoggingFormat (String) */
	static readonly RESOURCE_ACCESS_LOGGING_FORMAT =
		"apigateway:Resource/AccessLoggingFormat";
	/** Condition key: apigateway:Resource/ApiKeyRequired (ArrayOfBool) */
	static readonly RESOURCE_API_KEY_REQUIRED =
		"apigateway:Resource/ApiKeyRequired";
	/** Condition key: apigateway:Resource/ApiName (String) */
	static readonly RESOURCE_API_NAME = "apigateway:Resource/ApiName";
	/** Condition key: apigateway:Resource/AuthorizerType (ArrayOfString) */
	static readonly RESOURCE_AUTHORIZER_TYPE =
		"apigateway:Resource/AuthorizerType";
	/** Condition key: apigateway:Resource/AuthorizerUri (ArrayOfString) */
	static readonly RESOURCE_AUTHORIZER_URI = "apigateway:Resource/AuthorizerUri";
	/** Condition key: apigateway:Resource/CognitoUserPoolArn (ARN) */
	static readonly RESOURCE_COGNITO_USER_POOL_ARN =
		"apigateway:Resource/CognitoUserPoolArn";
	/** Condition key: apigateway:Resource/ConditionBasePaths (ArrayOfString) */
	static readonly RESOURCE_CONDITION_BASE_PATHS =
		"apigateway:Resource/ConditionBasePaths";
	/** Condition key: apigateway:Resource/DisableExecuteApiEndpoint (Bool) */
	static readonly RESOURCE_DISABLE_EXECUTE_API_ENDPOINT =
		"apigateway:Resource/DisableExecuteApiEndpoint";
	/** Condition key: apigateway:Resource/EndpointType (ArrayOfString) */
	static readonly RESOURCE_ENDPOINT_TYPE = "apigateway:Resource/EndpointType";
	/** Condition key: apigateway:Resource/Method (String) */
	static readonly RESOURCE_METHOD = "apigateway:Resource/Method";
	/** Condition key: apigateway:Resource/MtlsTrustStoreUri (String) */
	static readonly RESOURCE_MTLS_TRUST_STORE_URI =
		"apigateway:Resource/MtlsTrustStoreUri";
	/** Condition key: apigateway:Resource/MtlsTrustStoreVersion (String) */
	static readonly RESOURCE_MTLS_TRUST_STORE_VERSION =
		"apigateway:Resource/MtlsTrustStoreVersion";
	/** Condition key: apigateway:Resource/PortalDisplayName (String) */
	static readonly RESOURCE_PORTAL_DISPLAY_NAME =
		"apigateway:Resource/PortalDisplayName";
	/** Condition key: apigateway:Resource/PortalDomainName (String) */
	static readonly RESOURCE_PORTAL_DOMAIN_NAME =
		"apigateway:Resource/PortalDomainName";
	/** Condition key: apigateway:Resource/PortalProductDisplayName (String) */
	static readonly RESOURCE_PORTAL_PRODUCT_DISPLAY_NAME =
		"apigateway:Resource/PortalProductDisplayName";
	/** Condition key: apigateway:Resource/PortalPublishStatus (String) */
	static readonly RESOURCE_PORTAL_PUBLISH_STATUS =
		"apigateway:Resource/PortalPublishStatus";
	/** Condition key: apigateway:Resource/Priority (Numeric) */
	static readonly RESOURCE_PRIORITY = "apigateway:Resource/Priority";
	/** Condition key: apigateway:Resource/ProductPageTitle (String) */
	static readonly RESOURCE_PRODUCT_PAGE_TITLE =
		"apigateway:Resource/ProductPageTitle";
	/** Condition key: apigateway:Resource/ProductRestEndpointPageEndpointPrefix (String) */
	static readonly RESOURCE_PRODUCT_REST_ENDPOINT_PAGE_ENDPOINT_PREFIX =
		"apigateway:Resource/ProductRestEndpointPageEndpointPrefix";
	/** Condition key: apigateway:Resource/RestApiId (String) */
	static readonly RESOURCE_REST_API_ID = "apigateway:Resource/RestApiId";
	/** Condition key: apigateway:Resource/RouteAuthorizationType (ArrayOfString) */
	static readonly RESOURCE_ROUTE_AUTHORIZATION_TYPE =
		"apigateway:Resource/RouteAuthorizationType";
	/** Condition key: apigateway:Resource/RoutingMode (String) */
	static readonly RESOURCE_ROUTING_MODE = "apigateway:Resource/RoutingMode";
	/** Condition key: apigateway:Resource/SecurityPolicy (ArrayOfString) */
	static readonly RESOURCE_SECURITY_POLICY =
		"apigateway:Resource/SecurityPolicy";
	/** Condition key: apigateway:Resource/Stage (String) */
	static readonly RESOURCE_STAGE = "apigateway:Resource/Stage";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `apigateway:Request/AccessAssociationSource`.
	 */
	static requestAccessAssociationSource(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Request/AccessAssociationSource": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/AccessLoggingDestination`.
	 */
	static requestAccessLoggingDestination(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Request/AccessLoggingDestination": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/AccessLoggingFormat`.
	 */
	static requestAccessLoggingFormat(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Request/AccessLoggingFormat": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/ApiKeyRequired`.
	 */
	static requestAPIKeyRequired(
		values: boolean[],
	): Record<string, Record<string, boolean[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/ApiKeyRequired": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/ApiName`.
	 */
	static requestAPIName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/ApiName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/AuthorizerType`.
	 */
	static requestAuthorizerType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/AuthorizerType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/AuthorizerUri`.
	 */
	static requestAuthorizerURI(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/AuthorizerUri": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/CognitoUserPoolArn`.
	 */
	static requestCognitoUserPoolARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apigateway:Request/CognitoUserPoolArn": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/ConditionBasePaths`.
	 */
	static requestConditionBasePaths(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/ConditionBasePaths": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/DisableExecuteApiEndpoint`.
	 */
	static requestDisableExecuteAPIEndpoint(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "apigateway:Request/DisableExecuteApiEndpoint": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/DomainNameArn`.
	 */
	static requestDomainNameARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apigateway:Request/DomainNameArn": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/EndpointType`.
	 */
	static requestEndpointType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/EndpointType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/Method`.
	 */
	static requestMethod(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/Method": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/MtlsTrustStoreUri`.
	 */
	static requestMtlsTrustStoreURI(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/MtlsTrustStoreUri": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/MtlsTrustStoreVersion`.
	 */
	static requestMtlsTrustStoreVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Request/MtlsTrustStoreVersion": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/PortalDisplayName`.
	 */
	static requestPortalDisplayName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/PortalDisplayName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/PortalDomainName`.
	 */
	static requestPortalDomainName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/PortalDomainName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/PortalProductDisplayName`.
	 */
	static requestPortalProductDisplayName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Request/PortalProductDisplayName": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/Priority`.
	 */
	static requestPriority(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "apigateway:Request/Priority": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/ProductPageTitle`.
	 */
	static requestProductPageTitle(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/ProductPageTitle": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/ProductRestEndpointPageEndpointPrefix`.
	 */
	static requestProductRestEndpointPageEndpointPrefix(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"apigateway:Request/ProductRestEndpointPageEndpointPrefix": value,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/RestApiId`.
	 */
	static requestRestAPIId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/RestApiId": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/RouteAuthorizationType`.
	 */
	static requestRouteAuthorizationType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/RouteAuthorizationType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/RoutingMode`.
	 */
	static requestRoutingMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/RoutingMode": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/SecurityPolicy`.
	 */
	static requestSecurityPolicy(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Request/SecurityPolicy": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Request/Stage`.
	 */
	static requestStage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/Stage": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Request/StageName`.
	 */
	static requestStageName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Request/StageName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/AccessLoggingDestination`.
	 */
	static resourceAccessLoggingDestination(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Resource/AccessLoggingDestination": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/AccessLoggingFormat`.
	 */
	static resourceAccessLoggingFormat(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Resource/AccessLoggingFormat": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/ApiKeyRequired`.
	 */
	static resourceAPIKeyRequired(
		values: boolean[],
	): Record<string, Record<string, boolean[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/ApiKeyRequired": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/ApiName`.
	 */
	static resourceAPIName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/ApiName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/AuthorizerType`.
	 */
	static resourceAuthorizerType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/AuthorizerType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/AuthorizerUri`.
	 */
	static resourceAuthorizerURI(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/AuthorizerUri": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/CognitoUserPoolArn`.
	 */
	static resourceCognitoUserPoolARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apigateway:Resource/CognitoUserPoolArn": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/ConditionBasePaths`.
	 */
	static resourceConditionBasePaths(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/ConditionBasePaths": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/DisableExecuteApiEndpoint`.
	 */
	static resourceDisableExecuteAPIEndpoint(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "apigateway:Resource/DisableExecuteApiEndpoint": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/EndpointType`.
	 */
	static resourceEndpointType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/EndpointType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/Method`.
	 */
	static resourceMethod(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/Method": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/MtlsTrustStoreUri`.
	 */
	static resourceMtlsTrustStoreURI(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/MtlsTrustStoreUri": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/MtlsTrustStoreVersion`.
	 */
	static resourceMtlsTrustStoreVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Resource/MtlsTrustStoreVersion": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/PortalDisplayName`.
	 */
	static resourcePortalDisplayName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/PortalDisplayName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/PortalDomainName`.
	 */
	static resourcePortalDomainName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/PortalDomainName": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/PortalProductDisplayName`.
	 */
	static resourcePortalProductDisplayName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Resource/PortalProductDisplayName": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/PortalPublishStatus`.
	 */
	static resourcePortalPublishStatus(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "apigateway:Resource/PortalPublishStatus": value },
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/Priority`.
	 */
	static resourcePriority(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "apigateway:Resource/Priority": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/ProductPageTitle`.
	 */
	static resourceProductPageTitle(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/ProductPageTitle": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/ProductRestEndpointPageEndpointPrefix`.
	 */
	static resourceProductRestEndpointPageEndpointPrefix(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"apigateway:Resource/ProductRestEndpointPageEndpointPrefix": value,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/RestApiId`.
	 */
	static resourceRestAPIId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/RestApiId": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/RouteAuthorizationType`.
	 */
	static resourceRouteAuthorizationType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/RouteAuthorizationType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/RoutingMode`.
	 */
	static resourceRoutingMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/RoutingMode": value } };
	}

	/**
	 * Generates a condition block for `apigateway:Resource/SecurityPolicy`.
	 */
	static resourceSecurityPolicy(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"apigateway:Resource/SecurityPolicy": values,
			},
		};
	}

	/**
	 * Generates a condition block for `apigateway:Resource/Stage`.
	 */
	static resourceStage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apigateway:Resource/Stage": value } };
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
