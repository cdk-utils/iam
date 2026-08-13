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
	static readonly ADD_CERTIFICATE_TO_DOMAIN =
		"apigateway:AddCertificateToDomain";
	/** [PermissionManagement] apigateway:CreateAccessAssociation */
	static readonly CREATE_ACCESS_ASSOCIATION =
		"apigateway:CreateAccessAssociation";
	/** [Write] apigateway:CreatePortal */
	static readonly CREATE_PORTAL = "apigateway:CreatePortal";
	/** [Write] apigateway:CreatePortalProduct */
	static readonly CREATE_PORTAL_PRODUCT = "apigateway:CreatePortalProduct";
	/** [Write] apigateway:CreateProductPage */
	static readonly CREATE_PRODUCT_PAGE = "apigateway:CreateProductPage";
	/** [Write] apigateway:CreateProductRestEndpointPage */
	static readonly CREATE_PRODUCT_REST_ENDPOINT_PAGE =
		"apigateway:CreateProductRestEndpointPage";
	/** [Write] apigateway:CreateRoutingRule */
	static readonly CREATE_ROUTING_RULE = "apigateway:CreateRoutingRule";
	/** [Write] apigateway:DELETE */
	static readonly DELETE = "apigateway:DELETE";
	/** [Write] apigateway:DeletePortal */
	static readonly DELETE_PORTAL = "apigateway:DeletePortal";
	/** [Write] apigateway:DeletePortalProduct */
	static readonly DELETE_PORTAL_PRODUCT = "apigateway:DeletePortalProduct";
	/** [PermissionManagement] apigateway:DeletePortalProductSharingPolicy */
	static readonly DELETE_PORTAL_PRODUCT_SHARING_POLICY =
		"apigateway:DeletePortalProductSharingPolicy";
	/** [Write] apigateway:DeleteProductPage */
	static readonly DELETE_PRODUCT_PAGE = "apigateway:DeleteProductPage";
	/** [Write] apigateway:DeleteProductRestEndpointPage */
	static readonly DELETE_PRODUCT_REST_ENDPOINT_PAGE =
		"apigateway:DeleteProductRestEndpointPage";
	/** [Write] apigateway:DeleteRoutingRule */
	static readonly DELETE_ROUTING_RULE = "apigateway:DeleteRoutingRule";
	/** [Write] apigateway:DisablePortal */
	static readonly DISABLE_PORTAL = "apigateway:DisablePortal";
	/** [Read] apigateway:GET */
	static readonly GET = "apigateway:GET";
	/** [Read] apigateway:GetPortal */
	static readonly GET_PORTAL = "apigateway:GetPortal";
	/** [Read] apigateway:GetPortalProduct */
	static readonly GET_PORTAL_PRODUCT = "apigateway:GetPortalProduct";
	/** [Read] apigateway:GetPortalProductSharingPolicy */
	static readonly GET_PORTAL_PRODUCT_SHARING_POLICY =
		"apigateway:GetPortalProductSharingPolicy";
	/** [Read] apigateway:GetProductPage */
	static readonly GET_PRODUCT_PAGE = "apigateway:GetProductPage";
	/** [Read] apigateway:GetProductRestEndpointPage */
	static readonly GET_PRODUCT_REST_ENDPOINT_PAGE =
		"apigateway:GetProductRestEndpointPage";
	/** [Read] apigateway:GetRoutingRule */
	static readonly GET_ROUTING_RULE = "apigateway:GetRoutingRule";
	/** [List] apigateway:ListPortalProducts */
	static readonly LIST_PORTAL_PRODUCTS = "apigateway:ListPortalProducts";
	/** [List] apigateway:ListPortals */
	static readonly LIST_PORTALS = "apigateway:ListPortals";
	/** [List] apigateway:ListProductPages */
	static readonly LIST_PRODUCT_PAGES = "apigateway:ListProductPages";
	/** [List] apigateway:ListProductRestEndpointPages */
	static readonly LIST_PRODUCT_REST_ENDPOINT_PAGES =
		"apigateway:ListProductRestEndpointPages";
	/** [List] apigateway:ListRoutingRules */
	static readonly LIST_ROUTING_RULES = "apigateway:ListRoutingRules";
	/** [Write] apigateway:PATCH */
	static readonly PATCH = "apigateway:PATCH";
	/** [Write] apigateway:POST */
	static readonly POST = "apigateway:POST";
	/** [Write] apigateway:PUT */
	static readonly PUT = "apigateway:PUT";
	/** [Write] apigateway:PreviewPortal */
	static readonly PREVIEW_PORTAL = "apigateway:PreviewPortal";
	/** [Write] apigateway:PublishPortal */
	static readonly PUBLISH_PORTAL = "apigateway:PublishPortal";
	/** [PermissionManagement] apigateway:PutPortalProductSharingPolicy */
	static readonly PUT_PORTAL_PRODUCT_SHARING_POLICY =
		"apigateway:PutPortalProductSharingPolicy";
	/** [PermissionManagement] apigateway:RejectAccessAssociation */
	static readonly REJECT_ACCESS_ASSOCIATION =
		"apigateway:RejectAccessAssociation";
	/** [PermissionManagement] apigateway:RemoveCertificateFromDomain */
	static readonly REMOVE_CERTIFICATE_FROM_DOMAIN =
		"apigateway:RemoveCertificateFromDomain";
	/** [PermissionManagement] apigateway:SetWebACL */
	static readonly SET_WEB_ACL = "apigateway:SetWebACL";
	/** [PermissionManagement] apigateway:UpdateDomainNameManagementPolicy */
	static readonly UPDATE_DOMAIN_NAME_MANAGEMENT_POLICY =
		"apigateway:UpdateDomainNameManagementPolicy";
	/** [PermissionManagement] apigateway:UpdateDomainNamePolicy */
	static readonly UPDATE_DOMAIN_NAME_POLICY =
		"apigateway:UpdateDomainNamePolicy";
	/** [Write] apigateway:UpdatePortal */
	static readonly UPDATE_PORTAL = "apigateway:UpdatePortal";
	/** [Write] apigateway:UpdatePortalProduct */
	static readonly UPDATE_PORTAL_PRODUCT = "apigateway:UpdatePortalProduct";
	/** [Write] apigateway:UpdateProductPage */
	static readonly UPDATE_PRODUCT_PAGE = "apigateway:UpdateProductPage";
	/** [Write] apigateway:UpdateProductRestEndpointPage */
	static readonly UPDATE_PRODUCT_REST_ENDPOINT_PAGE =
		"apigateway:UpdateProductRestEndpointPage";
	/** [PermissionManagement] apigateway:UpdateRestApiPolicy */
	static readonly UPDATE_REST_API_POLICY = "apigateway:UpdateRestApiPolicy";
	/** [Write] apigateway:UpdateRoutingRule */
	static readonly UPDATE_ROUTING_RULE = "apigateway:UpdateRoutingRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApiGatewayActions.GET,
		ApiGatewayActions.GET_PORTAL,
		ApiGatewayActions.GET_PORTAL_PRODUCT,
		ApiGatewayActions.GET_PORTAL_PRODUCT_SHARING_POLICY,
		ApiGatewayActions.GET_PRODUCT_PAGE,
		ApiGatewayActions.GET_PRODUCT_REST_ENDPOINT_PAGE,
		ApiGatewayActions.GET_ROUTING_RULE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApiGatewayActions.CREATE_PORTAL,
		ApiGatewayActions.CREATE_PORTAL_PRODUCT,
		ApiGatewayActions.CREATE_PRODUCT_PAGE,
		ApiGatewayActions.CREATE_PRODUCT_REST_ENDPOINT_PAGE,
		ApiGatewayActions.CREATE_ROUTING_RULE,
		ApiGatewayActions.DELETE,
		ApiGatewayActions.DELETE_PORTAL,
		ApiGatewayActions.DELETE_PORTAL_PRODUCT,
		ApiGatewayActions.DELETE_PRODUCT_PAGE,
		ApiGatewayActions.DELETE_PRODUCT_REST_ENDPOINT_PAGE,
		ApiGatewayActions.DELETE_ROUTING_RULE,
		ApiGatewayActions.DISABLE_PORTAL,
		ApiGatewayActions.PATCH,
		ApiGatewayActions.POST,
		ApiGatewayActions.PUT,
		ApiGatewayActions.PREVIEW_PORTAL,
		ApiGatewayActions.PUBLISH_PORTAL,
		ApiGatewayActions.UPDATE_PORTAL,
		ApiGatewayActions.UPDATE_PORTAL_PRODUCT,
		ApiGatewayActions.UPDATE_PRODUCT_PAGE,
		ApiGatewayActions.UPDATE_PRODUCT_REST_ENDPOINT_PAGE,
		ApiGatewayActions.UPDATE_ROUTING_RULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApiGatewayActions.LIST_PORTAL_PRODUCTS,
		ApiGatewayActions.LIST_PORTALS,
		ApiGatewayActions.LIST_PRODUCT_PAGES,
		ApiGatewayActions.LIST_PRODUCT_REST_ENDPOINT_PAGES,
		ApiGatewayActions.LIST_ROUTING_RULES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ApiGatewayActions.ADD_CERTIFICATE_TO_DOMAIN,
		ApiGatewayActions.CREATE_ACCESS_ASSOCIATION,
		ApiGatewayActions.DELETE_PORTAL_PRODUCT_SHARING_POLICY,
		ApiGatewayActions.PUT_PORTAL_PRODUCT_SHARING_POLICY,
		ApiGatewayActions.REJECT_ACCESS_ASSOCIATION,
		ApiGatewayActions.REMOVE_CERTIFICATE_FROM_DOMAIN,
		ApiGatewayActions.SET_WEB_ACL,
		ApiGatewayActions.UPDATE_DOMAIN_NAME_MANAGEMENT_POLICY,
		ApiGatewayActions.UPDATE_DOMAIN_NAME_POLICY,
		ApiGatewayActions.UPDATE_REST_API_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AccessLogSettingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/stages/(?<stageName>[^:/?]+)/accesslogsettings$",
);
const AccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/account$",
);
const APIArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)$",
);
const APIKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apikeys/(?<apiKeyId>[^:/?]+)$",
);
const APIKeysArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apikeys$",
);
const APIMappingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)/apimappings/(?<apiMappingId>[^:/?]+)$",
);
const APIMappingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)/apimappings$",
);
const ApisArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis$",
);
const AuthorizerArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/authorizers/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/authorizers/(?:[^:/?]+))$",
);
const AuthorizerParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/authorizers/(?<authorizerId>[^:/?]+)$",
);
const AuthorizersArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/authorizers|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/authorizers)$",
);
const AuthorizersParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/authorizers$",
);
const AuthorizersCacheArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/stages/(?<stageName>[^:/?]+)/cache/authorizers$",
);
const BasePathMappingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)/basepathmappings/(?<basePath>[^:/?]+)$",
);
const BasePathMappingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)/basepathmappings$",
);
const ClientCertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/clientcertificates/(?<clientCertificateId>[^:/?]+)$",
);
const ClientCertificatesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/clientcertificates$",
);
const CorsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/cors$",
);
const DeploymentArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/deployments/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/deployments/(?:[^:/?]+))$",
);
const DeploymentParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/deployments/(?<deploymentId>[^:/?]+)$",
);
const DeploymentsArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/deployments|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/deployments)$",
);
const DeploymentsParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/deployments$",
);
const DocumentationPartArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/documentation/parts/(?<documentationPartId>[^:/?]+)$",
);
const DocumentationPartsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/documentation/parts$",
);
const DocumentationVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/documentation/versions/(?<documentationVersionId>[^:/?]+)$",
);
const DocumentationVersionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/documentation/versions$",
);
const DomainNameArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)$",
);
const DomainNameAccessAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/domainnameaccessassociations/domainname/(?<domainName>[^:/?]+)/(?<sourceType>[^:/?]+)/(?<sourceId>[^:/?]+)$",
);
const DomainNameAccessAssociationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/domainnameaccessassociations$",
);
const DomainNamesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames$",
);
const ExportedAPIArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/exports/(?<specification>[^:/?]+)$",
);
const GatewayResponseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/gatewayresponses/(?<responseType>[^:/?]+)$",
);
const GatewayResponsesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/gatewayresponses$",
);
const IntegrationArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/integrations/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/resources/(?:[^:/?]+)/methods/(?:[^:/?]+)/integration)$",
);
const IntegrationParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/integrations/(?<integrationId>[^:/?]+)$",
);
const IntegrationResponseArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/integrations/(?:[^:/?]+)/integrationresponses/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/resources/(?:[^:/?]+)/methods/(?:[^:/?]+)/integration/responses/(?:[^:/?]+))$",
);
const IntegrationResponseParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/integrations/(?<integrationId>[^:/?]+)/integrationresponses/(?<integrationResponseId>[^:/?]+)$",
);
const IntegrationResponsesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/integrations/(?<integrationId>[^:/?]+)/integrationresponses$",
);
const IntegrationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/integrations$",
);
const MethodArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/resources/(?<resourceId>[^:/?]+)/methods/(?<httpMethodType>[^:/?]+)$",
);
const MethodResponseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/resources/(?<resourceId>[^:/?]+)/methods/(?<httpMethodType>[^:/?]+)/responses/(?<statusCode>[^:/?]+)$",
);
const ModelArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/models/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/models/(?:[^:/?]+))$",
);
const ModelParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/models/(?<modelId>[^:/?]+)$",
);
const ModelTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/models/(?<modelId>[^:/?]+)/template$",
);
const ModelsArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/models|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/models)$",
);
const ModelsParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/models$",
);
const PortalArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/portals/(?<portalId>[^:/?]+)$",
);
const PortalProductArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/portalproducts/(?<portalProductId>[^:/?]+)$",
);
const PrivateBasePathMappingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)\\+(?<domainIdentifier>[^:/?]+)/basepathmappings/(?<basePath>[^:/?]+)$",
);
const PrivateBasePathMappingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/domainnames/(?<domainName>[^:/?]+)\\+(?<domainIdentifier>[^:/?]+)/basepathmappings$",
);
const PrivateDomainNameArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/domainnames/(?<domainName>[^:/?]+)\\+(?<domainIdentifier>[^:/?]+)$",
);
const ProductPageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/portalproducts/(?<portalProductId>[^:/?]+)/productpages/(?<productPageId>[^:/?]+)$",
);
const ProductRestEndpointPageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/portalproducts/(?<portalProductId>[^:/?]+)/productrestendpointpages/(?<productRestEndpointPageId>[^:/?]+)$",
);
const RequestValidatorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/requestvalidators/(?<requestValidatorId>[^:/?]+)$",
);
const RequestValidatorsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/requestvalidators$",
);
const ResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/resources/(?<resourceId>[^:/?]+)$",
);
const ResourcesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/resources$",
);
const RestAPIArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)$",
);
const RestApisArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis$",
);
const RouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/routes/(?<routeId>[^:/?]+)$",
);
const RouteRequestParameterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/routes/(?<routeId>[^:/?]+)/requestparameters/(?<requestParameterKey>[^:/?]+)$",
);
const RouteResponseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/routes/(?<routeId>[^:/?]+)/routeresponses/(?<routeResponseId>[^:/?]+)$",
);
const RouteResponsesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/routes/(?<routeId>[^:/?]+)/routeresponses$",
);
const RouteSettingsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/stages/(?<stageName>[^:/?]+)/routesettings/(?<routeKey>[^:/?]+)$",
);
const RoutesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/routes$",
);
const RoutingRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*):(?<account>[^:]*):/domainnames/(?<domainName>[^:/?]+)/routingrules/(?<routingRuleId>[^:/?]+)$",
);
const SDKArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<restAPIId>[^:/?]+)/stages/(?<stageName>[^:/?]+)/sdks/(?<sdkType>[^:/?]+)$",
);
const StageArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/stages/(?:[^:/?]+)|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/stages/(?:[^:/?]+))$",
);
const StageParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/stages/(?<stageName>[^:/?]+)$",
);
const StagesArnRegex = new RegExp(
	"^(?:arn:(?:[^:]+):apigateway:(?:[^:]*)::/apis/(?:[^:/?]+)/stages|arn:(?:[^:]+):apigateway:(?:[^:]*)::/restapis/(?:[^:/?]+)/stages)$",
);
const StagesParseRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/apis/(?<apiId>[^:/?]+)/stages$",
);
const TagsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/tags/(?<urlEncodedResourceARN>[^:/?]+)$",
);
const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/models/(?<modelName>[^:/?]+)/template$",
);
const UsagePlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/usageplans/(?<usagePlanId>[^:/?]+)$",
);
const UsagePlanKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/usageplans/(?<usagePlanId>[^:/?]+)/keys/(?<id>[^:/?]+)$",
);
const UsagePlanKeysArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/usageplans/(?<usagePlanId>[^:/?]+)/keys$",
);
const UsagePlansArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/usageplans$",
);
const VPCLinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/vpclinks/(?<vpcLinkId>[^:/?]+)$",
);
const VPCLinksArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/vpclinks$",
);

/**
 * ARN builders, validators, and parsers for apigateway resources.
 */
export class ApiGatewayResources {
	/**
	 * Builds an ARN for the AccessLogSettings resource.
	 */
	static accessLogSettings(props: {
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
	}): string {
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
	static parseAccessLogSettingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		stageName: string;
	} {
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
	static account(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccountArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static api(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAPIArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static apiKey(props: {
		/** The ApiKeyId component of the ARN. */
		readonly apiKeyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAPIKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiKeyId: string;
	} {
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
	static apiKeys(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAPIKeysArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static apiMapping(props: {
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
	}): string {
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
	static parseAPIMappingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		apiMappingId: string;
	} {
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
	static apiMappings(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAPIMappingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
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
	static apis(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApisArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static authorizerVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/authorizers/${props.authorizerId}`;
	}

	/**
	 * Builds an ARN for the AuthorizerVariant2 resource.
	 */
	static authorizerVariant2(props: {
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
	}): string {
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
	static parseAuthorizerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		authorizerId: string;
	} {
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
	static authorizersVariant1(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/authorizers`;
	}

	/**
	 * Builds an ARN for the AuthorizersVariant2 resource.
	 */
	static authorizersVariant2(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAuthorizersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static authorizersCache(props: {
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
	}): string {
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
	static parseAuthorizersCacheArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		stageName: string;
	} {
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
	static basePathMapping(props: {
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
	}): string {
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
	static parseBasePathMappingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		basePath: string;
	} {
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
	static basePathMappings(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBasePathMappingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
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
	static clientCertificate(props: {
		/** The ClientCertificateId component of the ARN. */
		readonly clientCertificateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClientCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clientCertificateId: string;
	} {
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
	static clientCertificates(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClientCertificatesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static cors(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCorsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static deploymentVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/deployments/${props.deploymentId}`;
	}

	/**
	 * Builds an ARN for the DeploymentVariant2 resource.
	 */
	static deploymentVariant2(props: {
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
	}): string {
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
	static parseDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		deploymentId: string;
	} {
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
	static deploymentsVariant1(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/deployments`;
	}

	/**
	 * Builds an ARN for the DeploymentsVariant2 resource.
	 */
	static deploymentsVariant2(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeploymentsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static documentationPart(props: {
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
	}): string {
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
	static parseDocumentationPartArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		documentationPartId: string;
	} {
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
	static documentationParts(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDocumentationPartsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static documentationVersion(props: {
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
	}): string {
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
	static parseDocumentationVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		documentationVersionId: string;
	} {
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
	static documentationVersions(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDocumentationVersionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static domainName(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainNameArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
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
	static domainNameAccessAssociation(props: {
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
	}): string {
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
	static parseDomainNameAccessAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		sourceType: string;
		sourceId: string;
	} {
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
	static domainNameAccessAssociations(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainNameAccessAssociationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static domainNames(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainNamesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static exportedAPI(props: {
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
	}): string {
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
	static parseExportedAPIArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		specification: string;
	} {
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
	static gatewayResponse(props: {
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
	}): string {
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
	static parseGatewayResponseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		responseType: string;
	} {
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
	static gatewayResponses(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGatewayResponsesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static integrationVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations/${props.integrationId}`;
	}

	/**
	 * Builds an ARN for the IntegrationVariant2 resource.
	 */
	static integrationVariant2(props: {
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
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		integrationId: string;
	} {
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
	static integrationResponseVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/integrations/${props.integrationId}/integrationresponses/${props.integrationResponseId}`;
	}

	/**
	 * Builds an ARN for the IntegrationResponseVariant2 resource.
	 */
	static integrationResponseVariant2(props: {
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
	}): string {
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
	static parseIntegrationResponseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		integrationId: string;
		integrationResponseId: string;
	} {
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
	static integrationResponses(props: {
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
	}): string {
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
	static parseIntegrationResponsesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		integrationId: string;
	} {
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
	static integrations(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIntegrationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static method(props: {
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
	}): string {
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
	static parseMethodArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		resourceId: string;
		httpMethodType: string;
	} {
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
	static methodResponse(props: {
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
	}): string {
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
	static parseMethodResponseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		resourceId: string;
		httpMethodType: string;
		statusCode: string;
	} {
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
	static modelVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/models/${props.modelId}`;
	}

	/**
	 * Builds an ARN for the ModelVariant2 resource.
	 */
	static modelVariant2(props: {
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
	}): string {
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
	static parseModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		modelId: string;
	} {
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
	static modelTemplate(props: {
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
	}): string {
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
	static parseModelTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		modelId: string;
	} {
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
	static modelsVariant1(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/models`;
	}

	/**
	 * Builds an ARN for the ModelsVariant2 resource.
	 */
	static modelsVariant2(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseModelsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static portal(props: {
		/** The PortalId component of the ARN. */
		readonly portalId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePortalArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portalId: string;
	} {
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
	static portalProduct(props: {
		/** The PortalProductId component of the ARN. */
		readonly portalProductId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePortalProductArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portalProductId: string;
	} {
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
	static privateBasePathMapping(props: {
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
	}): string {
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
	static parsePrivateBasePathMappingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		domainIdentifier: string;
		basePath: string;
	} {
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
	static privateBasePathMappings(props: {
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
	}): string {
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
	static parsePrivateBasePathMappingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		domainIdentifier: string;
	} {
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
	static privateDomainName(props: {
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
	}): string {
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
	static parsePrivateDomainNameArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		domainIdentifier: string;
	} {
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
	static productPage(props: {
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
	}): string {
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
	static parseProductPageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portalProductId: string;
		productPageId: string;
	} {
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
	static productRestEndpointPage(props: {
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
	}): string {
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
	static parseProductRestEndpointPageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portalProductId: string;
		productRestEndpointPageId: string;
	} {
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
	static requestValidator(props: {
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
	}): string {
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
	static parseRequestValidatorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		requestValidatorId: string;
	} {
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
	static requestValidators(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRequestValidatorsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static resource(props: {
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
	}): string {
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
	static parseResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		resourceId: string;
	} {
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
	static resources(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourcesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static restAPI(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRestAPIArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
	} {
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
	static restApis(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRestApisArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static route(props: {
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
	}): string {
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
	static parseRouteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		routeId: string;
	} {
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
	static routeRequestParameter(props: {
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
	}): string {
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
	static parseRouteRequestParameterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		routeId: string;
		requestParameterKey: string;
	} {
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
	static routeResponse(props: {
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
	}): string {
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
	static parseRouteResponseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		routeId: string;
		routeResponseId: string;
	} {
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
	static routeResponses(props: {
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
	}): string {
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
	static parseRouteResponsesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		routeId: string;
	} {
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
	static routeSettings(props: {
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
	}): string {
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
	static parseRouteSettingsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		stageName: string;
		routeKey: string;
	} {
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
	static routes(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRoutesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static routingRule(props: {
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
	}): string {
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
	static parseRoutingRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		routingRuleId: string;
	} {
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
	static sdk(props: {
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
	}): string {
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
	static parseSDKArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restAPIId: string;
		stageName: string;
		sdkType: string;
	} {
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
	static stageVariant1(props: {
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
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages/${props.stageName}`;
	}

	/**
	 * Builds an ARN for the StageVariant2 resource.
	 */
	static stageVariant2(props: {
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
	}): string {
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
	static parseStageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		stageName: string;
	} {
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
	static stagesVariant1(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/apis/${props.apiId}/stages`;
	}

	/**
	 * Builds an ARN for the StagesVariant2 resource.
	 */
	static stagesVariant2(props: {
		/** The RestApiId component of the ARN. */
		readonly restAPIId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStagesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
	} {
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
	static tags(props: {
		/** The UrlEncodedResourceARN component of the ARN. */
		readonly urlEncodedResourceARN: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTagsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		urlEncodedResourceARN: string;
	} {
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
	static template(props: {
		/** The ModelName component of the ARN. */
		readonly modelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelName: string;
	} {
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
	static usagePlan(props: {
		/** The UsagePlanId component of the ARN. */
		readonly usagePlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUsagePlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		usagePlanId: string;
	} {
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
	static usagePlanKey(props: {
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
	}): string {
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
	static parseUsagePlanKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		usagePlanId: string;
		id: string;
	} {
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
	static usagePlanKeys(props: {
		/** The UsagePlanId component of the ARN. */
		readonly usagePlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUsagePlanKeysArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		usagePlanId: string;
	} {
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
	static usagePlans(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUsagePlansArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static vpcLink(props: {
		/** The VpcLinkId component of the ARN. */
		readonly vpcLinkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVPCLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcLinkId: string;
	} {
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
	static vpcLinks(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVPCLinksArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static readonly CREATE_API: string[] = ["apigateway:POST", "iam:PassRole"];
	/** IAM actions required for the CreateApiKey API call. */
	static readonly CREATE_API_KEY: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateApiMapping API call. */
	static readonly CREATE_API_MAPPING: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateAuthorizer API call. */
	static readonly CREATE_AUTHORIZER: string[] = [
		"apigateway:POST",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBasePathMapping API call. */
	static readonly CREATE_BASE_PATH_MAPPING: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CREATE_DEPLOYMENT: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDocumentationPart API call. */
	static readonly CREATE_DOCUMENTATION_PART: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDocumentationVersion API call. */
	static readonly CREATE_DOCUMENTATION_VERSION: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateDomainName API call. */
	static readonly CREATE_DOMAIN_NAME: string[] = [
		"apigateway:AddCertificateToDomain",
		"apigateway:POST",
		"apigateway:PUT",
		"apigateway:UpdateDomainNamePolicy",
	];
	/** IAM actions required for the CreateDomainNameAccessAssociation API call. */
	static readonly CREATE_DOMAIN_NAME_ACCESS_ASSOCIATION: string[] = [
		"apigateway:CreateAccessAssociation",
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CREATE_INTEGRATION: string[] = [
		"apigateway:POST",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateIntegrationResponse API call. */
	static readonly CREATE_INTEGRATION_RESPONSE: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateModel API call. */
	static readonly CREATE_MODEL: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreatePortal API call. */
	static readonly CREATE_PORTAL: string[] = [
		"apigateway:CreatePortal",
		"apigateway:GetPortalProduct",
		"apigateway:POST",
	];
	/** IAM actions required for the CreatePortalProduct API call. */
	static readonly CREATE_PORTAL_PRODUCT: string[] = [
		"apigateway:CreatePortalProduct",
		"apigateway:POST",
	];
	/** IAM actions required for the CreateProductPage API call. */
	static readonly CREATE_PRODUCT_PAGE: string[] = [
		"apigateway:CreateProductPage",
	];
	/** IAM actions required for the CreateProductRestEndpointPage API call. */
	static readonly CREATE_PRODUCT_REST_ENDPOINT_PAGE: string[] = [
		"apigateway:CreateProductRestEndpointPage",
	];
	/** IAM actions required for the CreateRequestValidator API call. */
	static readonly CREATE_REQUEST_VALIDATOR: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateResource API call. */
	static readonly CREATE_RESOURCE: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRestApi API call. */
	static readonly CREATE_REST_API: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CREATE_ROUTE: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRouteResponse API call. */
	static readonly CREATE_ROUTE_RESPONSE: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateRoutingRule API call. */
	static readonly CREATE_ROUTING_RULE: string[] = [
		"apigateway:CreateRoutingRule",
	];
	/** IAM actions required for the CreateStage API call. */
	static readonly CREATE_STAGE: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateUsagePlan API call. */
	static readonly CREATE_USAGE_PLAN: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the CreateUsagePlanKey API call. */
	static readonly CREATE_USAGE_PLAN_KEY: string[] = ["apigateway:POST"];
	/** IAM actions required for the CreateVpcLink API call. */
	static readonly CREATE_VPC_LINK: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the DeleteAccessLogSettings API call. */
	static readonly DELETE_ACCESS_LOG_SETTINGS: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApi API call. */
	static readonly DELETE_API: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApiKey API call. */
	static readonly DELETE_API_KEY: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteApiMapping API call. */
	static readonly DELETE_API_MAPPING: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteAuthorizer API call. */
	static readonly DELETE_AUTHORIZER: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteBasePathMapping API call. */
	static readonly DELETE_BASE_PATH_MAPPING: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteClientCertificate API call. */
	static readonly DELETE_CLIENT_CERTIFICATE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteCorsConfiguration API call. */
	static readonly DELETE_CORS_CONFIGURATION: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DELETE_DEPLOYMENT: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDocumentationPart API call. */
	static readonly DELETE_DOCUMENTATION_PART: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteDocumentationVersion API call. */
	static readonly DELETE_DOCUMENTATION_VERSION: string[] = [
		"apigateway:DELETE",
	];
	/** IAM actions required for the DeleteDomainName API call. */
	static readonly DELETE_DOMAIN_NAME: string[] = [
		"apigateway:DELETE",
		"apigateway:RemoveCertificateFromDomain",
	];
	/** IAM actions required for the DeleteDomainNameAccessAssociation API call. */
	static readonly DELETE_DOMAIN_NAME_ACCESS_ASSOCIATION: string[] = [
		"apigateway:DELETE",
	];
	/** IAM actions required for the DeleteGatewayResponse API call. */
	static readonly DELETE_GATEWAY_RESPONSE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteIntegrationResponse API call. */
	static readonly DELETE_INTEGRATION_RESPONSE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteMethod API call. */
	static readonly DELETE_METHOD: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteMethodResponse API call. */
	static readonly DELETE_METHOD_RESPONSE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DELETE_MODEL: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeletePortal API call. */
	static readonly DELETE_PORTAL: string[] = ["apigateway:DeletePortal"];
	/** IAM actions required for the DeletePortalProduct API call. */
	static readonly DELETE_PORTAL_PRODUCT: string[] = [
		"apigateway:DeletePortalProduct",
	];
	/** IAM actions required for the DeletePortalProductSharingPolicy API call. */
	static readonly DELETE_PORTAL_PRODUCT_SHARING_POLICY: string[] = [
		"apigateway:DeletePortalProductSharingPolicy",
	];
	/** IAM actions required for the DeleteProductPage API call. */
	static readonly DELETE_PRODUCT_PAGE: string[] = [
		"apigateway:DeleteProductPage",
	];
	/** IAM actions required for the DeleteProductRestEndpointPage API call. */
	static readonly DELETE_PRODUCT_REST_ENDPOINT_PAGE: string[] = [
		"apigateway:DeleteProductRestEndpointPage",
	];
	/** IAM actions required for the DeleteRequestValidator API call. */
	static readonly DELETE_REQUEST_VALIDATOR: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DELETE_RESOURCE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRestApi API call. */
	static readonly DELETE_REST_API: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DELETE_ROUTE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRouteRequestParameter API call. */
	static readonly DELETE_ROUTE_REQUEST_PARAMETER: string[] = [
		"apigateway:DELETE",
	];
	/** IAM actions required for the DeleteRouteResponse API call. */
	static readonly DELETE_ROUTE_RESPONSE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRouteSettings API call. */
	static readonly DELETE_ROUTE_SETTINGS: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteRoutingRule API call. */
	static readonly DELETE_ROUTING_RULE: string[] = [
		"apigateway:DeleteRoutingRule",
	];
	/** IAM actions required for the DeleteStage API call. */
	static readonly DELETE_STAGE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteUsagePlan API call. */
	static readonly DELETE_USAGE_PLAN: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteUsagePlanKey API call. */
	static readonly DELETE_USAGE_PLAN_KEY: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DeleteVpcLink API call. */
	static readonly DELETE_VPC_LINK: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the DisablePortal API call. */
	static readonly DISABLE_PORTAL: string[] = ["apigateway:DisablePortal"];
	/** IAM actions required for the ExportApi API call. */
	static readonly EXPORT_API: string[] = ["apigateway:GET"];
	/** IAM actions required for the FlushStageAuthorizersCache API call. */
	static readonly FLUSH_STAGE_AUTHORIZERS_CACHE: string[] = [
		"apigateway:DELETE",
	];
	/** IAM actions required for the FlushStageCache API call. */
	static readonly FLUSH_STAGE_CACHE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the GenerateClientCertificate API call. */
	static readonly GENERATE_CLIENT_CERTIFICATE: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the GetAccount API call. */
	static readonly GET_ACCOUNT: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApi API call. */
	static readonly GET_API: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiKey API call. */
	static readonly GET_API_KEY: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiKeys API call. */
	static readonly GET_API_KEYS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiMapping API call. */
	static readonly GET_API_MAPPING: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApiMappings API call. */
	static readonly GET_API_MAPPINGS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetApis API call. */
	static readonly GET_APIS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetAuthorizer API call. */
	static readonly GET_AUTHORIZER: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetAuthorizers API call. */
	static readonly GET_AUTHORIZERS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetBasePathMapping API call. */
	static readonly GET_BASE_PATH_MAPPING: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetBasePathMappings API call. */
	static readonly GET_BASE_PATH_MAPPINGS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetClientCertificate API call. */
	static readonly GET_CLIENT_CERTIFICATE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetClientCertificates API call. */
	static readonly GET_CLIENT_CERTIFICATES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDeployments API call. */
	static readonly GET_DEPLOYMENTS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationPart API call. */
	static readonly GET_DOCUMENTATION_PART: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationParts API call. */
	static readonly GET_DOCUMENTATION_PARTS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationVersion API call. */
	static readonly GET_DOCUMENTATION_VERSION: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDocumentationVersions API call. */
	static readonly GET_DOCUMENTATION_VERSIONS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDomainName API call. */
	static readonly GET_DOMAIN_NAME: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetDomainNameAccessAssociations API call. */
	static readonly GET_DOMAIN_NAME_ACCESS_ASSOCIATIONS: string[] = [
		"apigateway:GET",
	];
	/** IAM actions required for the GetDomainNames API call. */
	static readonly GET_DOMAIN_NAMES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetExport API call. */
	static readonly GET_EXPORT: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetGatewayResponse API call. */
	static readonly GET_GATEWAY_RESPONSE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetGatewayResponses API call. */
	static readonly GET_GATEWAY_RESPONSES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly GET_INTEGRATION: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrationResponse API call. */
	static readonly GET_INTEGRATION_RESPONSE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrationResponses API call. */
	static readonly GET_INTEGRATION_RESPONSES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetIntegrations API call. */
	static readonly GET_INTEGRATIONS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetMethod API call. */
	static readonly GET_METHOD: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetMethodResponse API call. */
	static readonly GET_METHOD_RESPONSE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModel API call. */
	static readonly GET_MODEL: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModelTemplate API call. */
	static readonly GET_MODEL_TEMPLATE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetModels API call. */
	static readonly GET_MODELS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetPortal API call. */
	static readonly GET_PORTAL: string[] = ["apigateway:GetPortal"];
	/** IAM actions required for the GetPortalProduct API call. */
	static readonly GET_PORTAL_PRODUCT: string[] = [
		"apigateway:GetPortalProduct",
	];
	/** IAM actions required for the GetPortalProductSharingPolicy API call. */
	static readonly GET_PORTAL_PRODUCT_SHARING_POLICY: string[] = [
		"apigateway:GetPortalProductSharingPolicy",
	];
	/** IAM actions required for the GetProductPage API call. */
	static readonly GET_PRODUCT_PAGE: string[] = ["apigateway:GetProductPage"];
	/** IAM actions required for the GetProductRestEndpointPage API call. */
	static readonly GET_PRODUCT_REST_ENDPOINT_PAGE: string[] = [
		"apigateway:GetProductRestEndpointPage",
	];
	/** IAM actions required for the GetRequestValidator API call. */
	static readonly GET_REQUEST_VALIDATOR: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRequestValidators API call. */
	static readonly GET_REQUEST_VALIDATORS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetResource API call. */
	static readonly GET_RESOURCE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetResources API call. */
	static readonly GET_RESOURCES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRestApi API call. */
	static readonly GET_REST_API: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRestApis API call. */
	static readonly GET_REST_APIS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoute API call. */
	static readonly GET_ROUTE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRouteResponse API call. */
	static readonly GET_ROUTE_RESPONSE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRouteResponses API call. */
	static readonly GET_ROUTE_RESPONSES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoutes API call. */
	static readonly GET_ROUTES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetRoutingRule API call. */
	static readonly GET_ROUTING_RULE: string[] = ["apigateway:GetRoutingRule"];
	/** IAM actions required for the GetSdk API call. */
	static readonly GET_SDK: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetSdkType API call. */
	static readonly GET_SDK_TYPE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetSdkTypes API call. */
	static readonly GET_SDK_TYPES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetStage API call. */
	static readonly GET_STAGE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetStages API call. */
	static readonly GET_STAGES: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetTags API call. */
	static readonly GET_TAGS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsage API call. */
	static readonly GET_USAGE: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlan API call. */
	static readonly GET_USAGE_PLAN: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlanKey API call. */
	static readonly GET_USAGE_PLAN_KEY: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlanKeys API call. */
	static readonly GET_USAGE_PLAN_KEYS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetUsagePlans API call. */
	static readonly GET_USAGE_PLANS: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetVpcLink API call. */
	static readonly GET_VPC_LINK: string[] = ["apigateway:GET"];
	/** IAM actions required for the GetVpcLinks API call. */
	static readonly GET_VPC_LINKS: string[] = ["apigateway:GET"];
	/** IAM actions required for the ImportApi API call. */
	static readonly IMPORT_API: string[] = [
		"apigateway:POST",
		"apigateway:PUT",
		"iam:PassRole",
	];
	/** IAM actions required for the ImportApiKeys API call. */
	static readonly IMPORT_API_KEYS: string[] = ["apigateway:POST"];
	/** IAM actions required for the ImportDocumentationParts API call. */
	static readonly IMPORT_DOCUMENTATION_PARTS: string[] = ["apigateway:PUT"];
	/** IAM actions required for the ImportRestApi API call. */
	static readonly IMPORT_REST_API: string[] = [
		"apigateway:POST",
		"iam:PassRole",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the ListPortalProducts API call. */
	static readonly LIST_PORTAL_PRODUCTS: string[] = [
		"apigateway:ListPortalProducts",
	];
	/** IAM actions required for the ListPortals API call. */
	static readonly LIST_PORTALS: string[] = ["apigateway:ListPortals"];
	/** IAM actions required for the ListProductPages API call. */
	static readonly LIST_PRODUCT_PAGES: string[] = [
		"apigateway:ListProductPages",
	];
	/** IAM actions required for the ListProductRestEndpointPages API call. */
	static readonly LIST_PRODUCT_REST_ENDPOINT_PAGES: string[] = [
		"apigateway:ListProductRestEndpointPages",
	];
	/** IAM actions required for the ListRoutingRules API call. */
	static readonly LIST_ROUTING_RULES: string[] = [
		"apigateway:ListRoutingRules",
	];
	/** IAM actions required for the PreviewPortal API call. */
	static readonly PREVIEW_PORTAL: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:PreviewPortal",
	];
	/** IAM actions required for the PublishPortal API call. */
	static readonly PUBLISH_PORTAL: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:PublishPortal",
	];
	/** IAM actions required for the PutGatewayResponse API call. */
	static readonly PUT_GATEWAY_RESPONSE: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PUT_INTEGRATION: string[] = [
		"apigateway:PUT",
		"iam:PassRole",
	];
	/** IAM actions required for the PutIntegrationResponse API call. */
	static readonly PUT_INTEGRATION_RESPONSE: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutMethod API call. */
	static readonly PUT_METHOD: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutMethodResponse API call. */
	static readonly PUT_METHOD_RESPONSE: string[] = ["apigateway:PUT"];
	/** IAM actions required for the PutPortalProductSharingPolicy API call. */
	static readonly PUT_PORTAL_PRODUCT_SHARING_POLICY: string[] = [
		"apigateway:PutPortalProductSharingPolicy",
	];
	/** IAM actions required for the PutRestApi API call. */
	static readonly PUT_REST_API: string[] = [
		"apigateway:PUT",
		"iam:PassRole",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the PutRoutingRule API call. */
	static readonly PUT_ROUTING_RULE: string[] = ["apigateway:UpdateRoutingRule"];
	/** IAM actions required for the ReimportApi API call. */
	static readonly REIMPORT_API: string[] = [
		"apigateway:DELETE",
		"apigateway:POST",
		"apigateway:PUT",
		"iam:PassRole",
	];
	/** IAM actions required for the RejectDomainNameAccessAssociation API call. */
	static readonly REJECT_DOMAIN_NAME_ACCESS_ASSOCIATION: string[] = [
		"apigateway:RejectAccessAssociation",
	];
	/** IAM actions required for the ResetAuthorizersCache API call. */
	static readonly RESET_AUTHORIZERS_CACHE: string[] = ["apigateway:DELETE"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"apigateway:PATCH",
		"apigateway:POST",
		"apigateway:PUT",
	];
	/** IAM actions required for the TestInvokeAuthorizer API call. */
	static readonly TEST_INVOKE_AUTHORIZER: string[] = ["apigateway:POST"];
	/** IAM actions required for the TestInvokeMethod API call. */
	static readonly TEST_INVOKE_METHOD: string[] = ["apigateway:POST"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"apigateway:DELETE",
		"apigateway:PATCH",
	];
	/** IAM actions required for the UpdateAccount API call. */
	static readonly UPDATE_ACCOUNT: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateApi API call. */
	static readonly UPDATE_API: string[] = ["apigateway:PATCH", "iam:PassRole"];
	/** IAM actions required for the UpdateApiKey API call. */
	static readonly UPDATE_API_KEY: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateApiMapping API call. */
	static readonly UPDATE_API_MAPPING: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateAuthorizer API call. */
	static readonly UPDATE_AUTHORIZER: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateBasePathMapping API call. */
	static readonly UPDATE_BASE_PATH_MAPPING: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateClientCertificate API call. */
	static readonly UPDATE_CLIENT_CERTIFICATE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDeployment API call. */
	static readonly UPDATE_DEPLOYMENT: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDocumentationPart API call. */
	static readonly UPDATE_DOCUMENTATION_PART: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDocumentationVersion API call. */
	static readonly UPDATE_DOCUMENTATION_VERSION: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateDomainName API call. */
	static readonly UPDATE_DOMAIN_NAME: string[] = [
		"apigateway:AddCertificateToDomain",
		"apigateway:PATCH",
		"apigateway:RemoveCertificateFromDomain",
		"apigateway:UpdateDomainNameManagementPolicy",
		"apigateway:UpdateDomainNamePolicy",
	];
	/** IAM actions required for the UpdateGatewayResponse API call. */
	static readonly UPDATE_GATEWAY_RESPONSE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateIntegration API call. */
	static readonly UPDATE_INTEGRATION: string[] = [
		"apigateway:PATCH",
		"iam:PassRole",
	];
	/** IAM actions required for the UpdateIntegrationResponse API call. */
	static readonly UPDATE_INTEGRATION_RESPONSE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateMethod API call. */
	static readonly UPDATE_METHOD: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateMethodResponse API call. */
	static readonly UPDATE_METHOD_RESPONSE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UPDATE_MODEL: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdatePortal API call. */
	static readonly UPDATE_PORTAL: string[] = [
		"apigateway:GetPortalProduct",
		"apigateway:UpdatePortal",
	];
	/** IAM actions required for the UpdatePortalProduct API call. */
	static readonly UPDATE_PORTAL_PRODUCT: string[] = [
		"apigateway:UpdatePortalProduct",
	];
	/** IAM actions required for the UpdateProductPage API call. */
	static readonly UPDATE_PRODUCT_PAGE: string[] = [
		"apigateway:UpdateProductPage",
	];
	/** IAM actions required for the UpdateProductRestEndpointPage API call. */
	static readonly UPDATE_PRODUCT_REST_ENDPOINT_PAGE: string[] = [
		"apigateway:UpdateProductRestEndpointPage",
	];
	/** IAM actions required for the UpdateRequestValidator API call. */
	static readonly UPDATE_REQUEST_VALIDATOR: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UPDATE_RESOURCE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateRestApi API call. */
	static readonly UPDATE_REST_API: string[] = [
		"apigateway:PATCH",
		"apigateway:UpdateRestApiPolicy",
	];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UPDATE_ROUTE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateRouteResponse API call. */
	static readonly UPDATE_ROUTE_RESPONSE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateStage API call. */
	static readonly UPDATE_STAGE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateUsage API call. */
	static readonly UPDATE_USAGE: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateUsagePlan API call. */
	static readonly UPDATE_USAGE_PLAN: string[] = ["apigateway:PATCH"];
	/** IAM actions required for the UpdateVpcLink API call. */
	static readonly UPDATE_VPC_LINK: string[] = ["apigateway:PATCH"];
}

/**
 * Condition key constants and builders for apigateway.
 */
export class ApiGatewayConditions {
	/** Condition keys applicable to the CreatePortal action. */
	static readonly CREATE_PORTAL_CONDITION_KEYS: string[] = [
		"apigateway:Request/CognitoUserPoolArn",
		"apigateway:Request/PortalDisplayName",
		"apigateway:Request/PortalDomainName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePortalProduct action. */
	static readonly CREATE_PORTAL_PRODUCT_CONDITION_KEYS: string[] = [
		"apigateway:Request/PortalProductDisplayName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProductPage action. */
	static readonly CREATE_PRODUCT_PAGE_CONDITION_KEYS: string[] = [
		"apigateway:Request/ProductPageTitle",
	];
	/** Condition keys applicable to the CreateProductRestEndpointPage action. */
	static readonly CREATE_PRODUCT_REST_ENDPOINT_PAGE_CONDITION_KEYS: string[] = [
		"apigateway:Request/Method",
		"apigateway:Request/ProductRestEndpointPageEndpointPrefix",
		"apigateway:Request/RestApiId",
		"apigateway:Request/Stage",
	];
	/** Condition keys applicable to the CreateRoutingRule action. */
	static readonly CREATE_ROUTING_RULE_CONDITION_KEYS: string[] = [
		"apigateway:Request/ConditionBasePaths",
		"apigateway:Request/Priority",
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DELETE action. */
	static readonly DELETE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRoutingRule action. */
	static readonly DELETE_ROUTING_RULE_CONDITION_KEYS: string[] = [
		"apigateway:Resource/ConditionBasePaths",
		"apigateway:Resource/Priority",
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRoutingRule action. */
	static readonly GET_ROUTING_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRoutingRules action. */
	static readonly LIST_ROUTING_RULES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PATCH action. */
	static readonly PATCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the POST action. */
	static readonly POST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PUT action. */
	static readonly PUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePortal action. */
	static readonly UPDATE_PORTAL_CONDITION_KEYS: string[] = [
		"apigateway:Request/CognitoUserPoolArn",
		"apigateway:Request/PortalDisplayName",
		"apigateway:Request/PortalDomainName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePortalProduct action. */
	static readonly UPDATE_PORTAL_PRODUCT_CONDITION_KEYS: string[] = [
		"apigateway:Request/PortalProductDisplayName",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateProductPage action. */
	static readonly UPDATE_PRODUCT_PAGE_CONDITION_KEYS: string[] = [
		"apigateway:Request/ProductPageTitle",
	];
	/** Condition keys applicable to the UpdateProductRestEndpointPage action. */
	static readonly UPDATE_PRODUCT_REST_ENDPOINT_PAGE_CONDITION_KEYS: string[] = [
		"apigateway:Request/ProductRestEndpointPageEndpointPrefix",
	];
	/** Condition keys applicable to the UpdateRoutingRule action. */
	static readonly UPDATE_ROUTING_RULE_CONDITION_KEYS: string[] = [
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
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
