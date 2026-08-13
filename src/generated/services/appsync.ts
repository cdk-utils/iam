// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appsync.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appsync service.
 */
export class AppsyncActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appsync";

	/** [Write] appsync:AssociateApi */
	static readonly ASSOCIATE_API = "appsync:AssociateApi";
	/** [Write] appsync:AssociateMergedGraphqlApi */
	static readonly ASSOCIATE_MERGED_GRAPHQL_API =
		"appsync:AssociateMergedGraphqlApi";
	/** [Write] appsync:AssociateSourceGraphqlApi */
	static readonly ASSOCIATE_SOURCE_GRAPHQL_API =
		"appsync:AssociateSourceGraphqlApi";
	/** [Write] appsync:AssociateWebACL */
	static readonly ASSOCIATE_WEB_ACL = "appsync:AssociateWebACL";
	/** [Write] appsync:CreateApi */
	static readonly CREATE_API = "appsync:CreateApi";
	/** [Write] appsync:CreateApiCache */
	static readonly CREATE_API_CACHE = "appsync:CreateApiCache";
	/** [Write] appsync:CreateApiKey */
	static readonly CREATE_API_KEY = "appsync:CreateApiKey";
	/** [Write] appsync:CreateChannelNamespace */
	static readonly CREATE_CHANNEL_NAMESPACE = "appsync:CreateChannelNamespace";
	/** [Write] appsync:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "appsync:CreateDataSource";
	/** [Write] appsync:CreateDomainName */
	static readonly CREATE_DOMAIN_NAME = "appsync:CreateDomainName";
	/** [Write] appsync:CreateFunction */
	static readonly CREATE_FUNCTION = "appsync:CreateFunction";
	/** [Write] appsync:CreateGraphqlApi */
	static readonly CREATE_GRAPHQL_API = "appsync:CreateGraphqlApi";
	/** [Write] appsync:CreateResolver */
	static readonly CREATE_RESOLVER = "appsync:CreateResolver";
	/** [Write] appsync:CreateType */
	static readonly CREATE_TYPE = "appsync:CreateType";
	/** [Write] appsync:DeleteApi */
	static readonly DELETE_API = "appsync:DeleteApi";
	/** [Write] appsync:DeleteApiCache */
	static readonly DELETE_API_CACHE = "appsync:DeleteApiCache";
	/** [Write] appsync:DeleteApiKey */
	static readonly DELETE_API_KEY = "appsync:DeleteApiKey";
	/** [Write] appsync:DeleteChannelNamespace */
	static readonly DELETE_CHANNEL_NAMESPACE = "appsync:DeleteChannelNamespace";
	/** [Write] appsync:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "appsync:DeleteDataSource";
	/** [Write] appsync:DeleteDomainName */
	static readonly DELETE_DOMAIN_NAME = "appsync:DeleteDomainName";
	/** [Write] appsync:DeleteFunction */
	static readonly DELETE_FUNCTION = "appsync:DeleteFunction";
	/** [Write] appsync:DeleteGraphqlApi */
	static readonly DELETE_GRAPHQL_API = "appsync:DeleteGraphqlApi";
	/** [Write] appsync:DeleteResolver */
	static readonly DELETE_RESOLVER = "appsync:DeleteResolver";
	/** [Write] appsync:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "appsync:DeleteResourcePolicy";
	/** [Write] appsync:DeleteType */
	static readonly DELETE_TYPE = "appsync:DeleteType";
	/** [Write] appsync:DisassociateApi */
	static readonly DISASSOCIATE_API = "appsync:DisassociateApi";
	/** [Write] appsync:DisassociateMergedGraphqlApi */
	static readonly DISASSOCIATE_MERGED_GRAPHQL_API =
		"appsync:DisassociateMergedGraphqlApi";
	/** [Write] appsync:DisassociateSourceGraphqlApi */
	static readonly DISASSOCIATE_SOURCE_GRAPHQL_API =
		"appsync:DisassociateSourceGraphqlApi";
	/** [Write] appsync:DisassociateWebACL */
	static readonly DISASSOCIATE_WEB_ACL = "appsync:DisassociateWebACL";
	/** [Read] appsync:EvaluateCode */
	static readonly EVALUATE_CODE = "appsync:EvaluateCode";
	/** [Read] appsync:EvaluateMappingTemplate */
	static readonly EVALUATE_MAPPING_TEMPLATE = "appsync:EvaluateMappingTemplate";
	/** [Write] appsync:EventConnect */
	static readonly EVENT_CONNECT = "appsync:EventConnect";
	/** [Write] appsync:EventPublish */
	static readonly EVENT_PUBLISH = "appsync:EventPublish";
	/** [Write] appsync:EventSubscribe */
	static readonly EVENT_SUBSCRIBE = "appsync:EventSubscribe";
	/** [Write] appsync:FlushApiCache */
	static readonly FLUSH_API_CACHE = "appsync:FlushApiCache";
	/** [Read] appsync:GetApi */
	static readonly GET_API = "appsync:GetApi";
	/** [Read] appsync:GetApiAssociation */
	static readonly GET_API_ASSOCIATION = "appsync:GetApiAssociation";
	/** [Read] appsync:GetApiCache */
	static readonly GET_API_CACHE = "appsync:GetApiCache";
	/** [Read] appsync:GetChannelNamespace */
	static readonly GET_CHANNEL_NAMESPACE = "appsync:GetChannelNamespace";
	/** [Read] appsync:GetDataSource */
	static readonly GET_DATA_SOURCE = "appsync:GetDataSource";
	/** [Read] appsync:GetDataSourceIntrospection */
	static readonly GET_DATA_SOURCE_INTROSPECTION =
		"appsync:GetDataSourceIntrospection";
	/** [Read] appsync:GetDomainName */
	static readonly GET_DOMAIN_NAME = "appsync:GetDomainName";
	/** [Read] appsync:GetFunction */
	static readonly GET_FUNCTION = "appsync:GetFunction";
	/** [Read] appsync:GetGraphqlApi */
	static readonly GET_GRAPHQL_API = "appsync:GetGraphqlApi";
	/** [Read] appsync:GetGraphqlApiEnvironmentVariables */
	static readonly GET_GRAPHQL_API_ENVIRONMENT_VARIABLES =
		"appsync:GetGraphqlApiEnvironmentVariables";
	/** [Read] appsync:GetIntrospectionSchema */
	static readonly GET_INTROSPECTION_SCHEMA = "appsync:GetIntrospectionSchema";
	/** [Read] appsync:GetResolver */
	static readonly GET_RESOLVER = "appsync:GetResolver";
	/** [Read] appsync:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "appsync:GetResourcePolicy";
	/** [Read] appsync:GetSchemaCreationStatus */
	static readonly GET_SCHEMA_CREATION_STATUS =
		"appsync:GetSchemaCreationStatus";
	/** [Read] appsync:GetSourceApiAssociation */
	static readonly GET_SOURCE_API_ASSOCIATION =
		"appsync:GetSourceApiAssociation";
	/** [Read] appsync:GetType */
	static readonly GET_TYPE = "appsync:GetType";
	/** [Read] appsync:GetWebACLForResource */
	static readonly GET_WEB_ACL_FOR_RESOURCE = "appsync:GetWebACLForResource";
	/** [Write] appsync:GraphQL */
	static readonly GRAPH_QL = "appsync:GraphQL";
	/** [List] appsync:ListApiKeys */
	static readonly LIST_API_KEYS = "appsync:ListApiKeys";
	/** [List] appsync:ListApis */
	static readonly LIST_APIS = "appsync:ListApis";
	/** [List] appsync:ListChannelNamespaces */
	static readonly LIST_CHANNEL_NAMESPACES = "appsync:ListChannelNamespaces";
	/** [List] appsync:ListDataSources */
	static readonly LIST_DATA_SOURCES = "appsync:ListDataSources";
	/** [List] appsync:ListDomainNames */
	static readonly LIST_DOMAIN_NAMES = "appsync:ListDomainNames";
	/** [List] appsync:ListFunctions */
	static readonly LIST_FUNCTIONS = "appsync:ListFunctions";
	/** [List] appsync:ListGraphqlApis */
	static readonly LIST_GRAPHQL_APIS = "appsync:ListGraphqlApis";
	/** [List] appsync:ListResolvers */
	static readonly LIST_RESOLVERS = "appsync:ListResolvers";
	/** [List] appsync:ListResolversByFunction */
	static readonly LIST_RESOLVERS_BY_FUNCTION =
		"appsync:ListResolversByFunction";
	/** [List] appsync:ListResourcesForWebACL */
	static readonly LIST_RESOURCES_FOR_WEB_ACL = "appsync:ListResourcesForWebACL";
	/** [List] appsync:ListSourceApiAssociations */
	static readonly LIST_SOURCE_API_ASSOCIATIONS =
		"appsync:ListSourceApiAssociations";
	/** [Read] appsync:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appsync:ListTagsForResource";
	/** [List] appsync:ListTypes */
	static readonly LIST_TYPES = "appsync:ListTypes";
	/** [List] appsync:ListTypesByAssociation */
	static readonly LIST_TYPES_BY_ASSOCIATION = "appsync:ListTypesByAssociation";
	/** [Write] appsync:PutGraphqlApiEnvironmentVariables */
	static readonly PUT_GRAPHQL_API_ENVIRONMENT_VARIABLES =
		"appsync:PutGraphqlApiEnvironmentVariables";
	/** [Write] appsync:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "appsync:PutResourcePolicy";
	/** [PermissionManagement] appsync:SetWebACL */
	static readonly SET_WEB_ACL = "appsync:SetWebACL";
	/** [Write] appsync:SourceGraphQL */
	static readonly SOURCE_GRAPH_QL = "appsync:SourceGraphQL";
	/** [Write] appsync:StartDataSourceIntrospection */
	static readonly START_DATA_SOURCE_INTROSPECTION =
		"appsync:StartDataSourceIntrospection";
	/** [Write] appsync:StartSchemaCreation */
	static readonly START_SCHEMA_CREATION = "appsync:StartSchemaCreation";
	/** [Write] appsync:StartSchemaMerge */
	static readonly START_SCHEMA_MERGE = "appsync:StartSchemaMerge";
	/** [Tagging] appsync:TagResource */
	static readonly TAG_RESOURCE = "appsync:TagResource";
	/** [Tagging] appsync:UntagResource */
	static readonly UNTAG_RESOURCE = "appsync:UntagResource";
	/** [Write] appsync:UpdateApi */
	static readonly UPDATE_API = "appsync:UpdateApi";
	/** [Write] appsync:UpdateApiCache */
	static readonly UPDATE_API_CACHE = "appsync:UpdateApiCache";
	/** [Write] appsync:UpdateApiKey */
	static readonly UPDATE_API_KEY = "appsync:UpdateApiKey";
	/** [Write] appsync:UpdateChannelNamespace */
	static readonly UPDATE_CHANNEL_NAMESPACE = "appsync:UpdateChannelNamespace";
	/** [Write] appsync:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "appsync:UpdateDataSource";
	/** [Write] appsync:UpdateDomainName */
	static readonly UPDATE_DOMAIN_NAME = "appsync:UpdateDomainName";
	/** [Write] appsync:UpdateFunction */
	static readonly UPDATE_FUNCTION = "appsync:UpdateFunction";
	/** [Write] appsync:UpdateGraphqlApi */
	static readonly UPDATE_GRAPHQL_API = "appsync:UpdateGraphqlApi";
	/** [Write] appsync:UpdateResolver */
	static readonly UPDATE_RESOLVER = "appsync:UpdateResolver";
	/** [Write] appsync:UpdateSourceApiAssociation */
	static readonly UPDATE_SOURCE_API_ASSOCIATION =
		"appsync:UpdateSourceApiAssociation";
	/** [Write] appsync:UpdateType */
	static readonly UPDATE_TYPE = "appsync:UpdateType";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppsyncActions.EVALUATE_CODE,
		AppsyncActions.EVALUATE_MAPPING_TEMPLATE,
		AppsyncActions.GET_API,
		AppsyncActions.GET_API_ASSOCIATION,
		AppsyncActions.GET_API_CACHE,
		AppsyncActions.GET_CHANNEL_NAMESPACE,
		AppsyncActions.GET_DATA_SOURCE,
		AppsyncActions.GET_DATA_SOURCE_INTROSPECTION,
		AppsyncActions.GET_DOMAIN_NAME,
		AppsyncActions.GET_FUNCTION,
		AppsyncActions.GET_GRAPHQL_API,
		AppsyncActions.GET_GRAPHQL_API_ENVIRONMENT_VARIABLES,
		AppsyncActions.GET_INTROSPECTION_SCHEMA,
		AppsyncActions.GET_RESOLVER,
		AppsyncActions.GET_RESOURCE_POLICY,
		AppsyncActions.GET_SCHEMA_CREATION_STATUS,
		AppsyncActions.GET_SOURCE_API_ASSOCIATION,
		AppsyncActions.GET_TYPE,
		AppsyncActions.GET_WEB_ACL_FOR_RESOURCE,
		AppsyncActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppsyncActions.ASSOCIATE_API,
		AppsyncActions.ASSOCIATE_MERGED_GRAPHQL_API,
		AppsyncActions.ASSOCIATE_SOURCE_GRAPHQL_API,
		AppsyncActions.ASSOCIATE_WEB_ACL,
		AppsyncActions.CREATE_API,
		AppsyncActions.CREATE_API_CACHE,
		AppsyncActions.CREATE_API_KEY,
		AppsyncActions.CREATE_CHANNEL_NAMESPACE,
		AppsyncActions.CREATE_DATA_SOURCE,
		AppsyncActions.CREATE_DOMAIN_NAME,
		AppsyncActions.CREATE_FUNCTION,
		AppsyncActions.CREATE_GRAPHQL_API,
		AppsyncActions.CREATE_RESOLVER,
		AppsyncActions.CREATE_TYPE,
		AppsyncActions.DELETE_API,
		AppsyncActions.DELETE_API_CACHE,
		AppsyncActions.DELETE_API_KEY,
		AppsyncActions.DELETE_CHANNEL_NAMESPACE,
		AppsyncActions.DELETE_DATA_SOURCE,
		AppsyncActions.DELETE_DOMAIN_NAME,
		AppsyncActions.DELETE_FUNCTION,
		AppsyncActions.DELETE_GRAPHQL_API,
		AppsyncActions.DELETE_RESOLVER,
		AppsyncActions.DELETE_RESOURCE_POLICY,
		AppsyncActions.DELETE_TYPE,
		AppsyncActions.DISASSOCIATE_API,
		AppsyncActions.DISASSOCIATE_MERGED_GRAPHQL_API,
		AppsyncActions.DISASSOCIATE_SOURCE_GRAPHQL_API,
		AppsyncActions.DISASSOCIATE_WEB_ACL,
		AppsyncActions.EVENT_CONNECT,
		AppsyncActions.EVENT_PUBLISH,
		AppsyncActions.EVENT_SUBSCRIBE,
		AppsyncActions.FLUSH_API_CACHE,
		AppsyncActions.GRAPH_QL,
		AppsyncActions.PUT_GRAPHQL_API_ENVIRONMENT_VARIABLES,
		AppsyncActions.PUT_RESOURCE_POLICY,
		AppsyncActions.SOURCE_GRAPH_QL,
		AppsyncActions.START_DATA_SOURCE_INTROSPECTION,
		AppsyncActions.START_SCHEMA_CREATION,
		AppsyncActions.START_SCHEMA_MERGE,
		AppsyncActions.UPDATE_API,
		AppsyncActions.UPDATE_API_CACHE,
		AppsyncActions.UPDATE_API_KEY,
		AppsyncActions.UPDATE_CHANNEL_NAMESPACE,
		AppsyncActions.UPDATE_DATA_SOURCE,
		AppsyncActions.UPDATE_DOMAIN_NAME,
		AppsyncActions.UPDATE_FUNCTION,
		AppsyncActions.UPDATE_GRAPHQL_API,
		AppsyncActions.UPDATE_RESOLVER,
		AppsyncActions.UPDATE_SOURCE_API_ASSOCIATION,
		AppsyncActions.UPDATE_TYPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppsyncActions.LIST_API_KEYS,
		AppsyncActions.LIST_APIS,
		AppsyncActions.LIST_CHANNEL_NAMESPACES,
		AppsyncActions.LIST_DATA_SOURCES,
		AppsyncActions.LIST_DOMAIN_NAMES,
		AppsyncActions.LIST_FUNCTIONS,
		AppsyncActions.LIST_GRAPHQL_APIS,
		AppsyncActions.LIST_RESOLVERS,
		AppsyncActions.LIST_RESOLVERS_BY_FUNCTION,
		AppsyncActions.LIST_RESOURCES_FOR_WEB_ACL,
		AppsyncActions.LIST_SOURCE_API_ASSOCIATIONS,
		AppsyncActions.LIST_TYPES,
		AppsyncActions.LIST_TYPES_BY_ASSOCIATION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		AppsyncActions.SET_WEB_ACL,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppsyncActions.TAG_RESOURCE,
		AppsyncActions.UNTAG_RESOURCE,
	];
}

const APIArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<apiId>[^:/?]+)$",
);
const ChannelNamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<apiId>[^:/?]+)/channelNamespace/(?<channelNamespaceName>[^:/?]+)$",
);
const DatasourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)/datasources/(?<datasourceName>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):domainnames/(?<domainName>[^:/?]+)$",
);
const FieldArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)/types/(?<typeName>[^:/?]+)/fields/(?<fieldName>[^:/?]+)$",
);
const FunctionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)/functions/(?<functionId>[^:/?]+)$",
);
const GraphqlapiArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)$",
);
const MergedAPIAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<sourceGraphQlapiId>[^:/?]+)/mergedApiAssociations/(?<associationid>[^:/?]+)$",
);
const SourceAPIAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<mergedGraphQlapiId>[^:/?]+)/sourceApiAssociations/(?<associationid>[^:/?]+)$",
);
const TypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)/types/(?<typeName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appsync resources.
 */
export class AppsyncResources {
	/**
	 * Builds an ARN for the api resource.
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
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.apiId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the api resource.
	 */
	static isValidAPIArn(arn: string): boolean {
		return APIArnRegex.test(arn);
	}

	/**
	 * Parses a api ARN into its components.
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
			throw new Error(`Invalid api ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
		};
	}

	/**
	 * Builds an ARN for the channelNamespace resource.
	 */
	static channelNamespace(props: {
		/** The ApiId component of the ARN. */
		readonly apiId: string;
		/** The ChannelNamespaceName component of the ARN. */
		readonly channelNamespaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.apiId}/channelNamespace/${props.channelNamespaceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channelNamespace resource.
	 */
	static isValidChannelNamespaceArn(arn: string): boolean {
		return ChannelNamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a channelNamespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		channelNamespaceName: string;
	} {
		const match = ChannelNamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channelNamespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			channelNamespaceName: match.groups!.channelNamespaceName,
		};
	}

	/**
	 * Builds an ARN for the datasource resource.
	 */
	static datasource(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** The DatasourceName component of the ARN. */
		readonly datasourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}/datasources/${props.datasourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasource resource.
	 */
	static isValidDatasourceArn(arn: string): boolean {
		return DatasourceArnRegex.test(arn);
	}

	/**
	 * Parses a datasource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		graphQlapiId: string;
		datasourceName: string;
	} {
		const match = DatasourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
			datasourceName: match.groups!.datasourceName,
		};
	}

	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:domainnames/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the field resource.
	 */
	static field(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** The TypeName component of the ARN. */
		readonly typeName: string;
		/** The FieldName component of the ARN. */
		readonly fieldName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}/types/${props.typeName}/fields/${props.fieldName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the field resource.
	 */
	static isValidFieldArn(arn: string): boolean {
		return FieldArnRegex.test(arn);
	}

	/**
	 * Parses a field ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFieldArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		graphQlapiId: string;
		typeName: string;
		fieldName: string;
	} {
		const match = FieldArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid field ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
			typeName: match.groups!.typeName,
			fieldName: match.groups!.fieldName,
		};
	}

	/**
	 * Builds an ARN for the function resource.
	 */
	static function(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** The FunctionId component of the ARN. */
		readonly functionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}/functions/${props.functionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function resource.
	 */
	static isValidFunctionArn(arn: string): boolean {
		return FunctionArnRegex.test(arn);
	}

	/**
	 * Parses a function ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		graphQlapiId: string;
		functionId: string;
	} {
		const match = FunctionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
			functionId: match.groups!.functionId,
		};
	}

	/**
	 * Builds an ARN for the graphqlapi resource.
	 */
	static graphqlapi(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the graphqlapi resource.
	 */
	static isValidGraphqlapiArn(arn: string): boolean {
		return GraphqlapiArnRegex.test(arn);
	}

	/**
	 * Parses a graphqlapi ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGraphqlapiArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		graphQlapiId: string;
	} {
		const match = GraphqlapiArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid graphqlapi ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
		};
	}

	/**
	 * Builds an ARN for the mergedApiAssociation resource.
	 */
	static mergedAPIAssociation(props: {
		/** The SourceGraphQLAPIId component of the ARN. */
		readonly sourceGraphQlapiId: string;
		/** The Associationid component of the ARN. */
		readonly associationid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.sourceGraphQlapiId}/mergedApiAssociations/${props.associationid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mergedApiAssociation resource.
	 */
	static isValidMergedAPIAssociationArn(arn: string): boolean {
		return MergedAPIAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a mergedApiAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMergedAPIAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceGraphQlapiId: string;
		associationid: string;
	} {
		const match = MergedAPIAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mergedApiAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceGraphQlapiId: match.groups!.sourceGraphQlapiId,
			associationid: match.groups!.associationid,
		};
	}

	/**
	 * Builds an ARN for the sourceApiAssociation resource.
	 */
	static sourceAPIAssociation(props: {
		/** The MergedGraphQLAPIId component of the ARN. */
		readonly mergedGraphQlapiId: string;
		/** The Associationid component of the ARN. */
		readonly associationid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.mergedGraphQlapiId}/sourceApiAssociations/${props.associationid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sourceApiAssociation resource.
	 */
	static isValidSourceAPIAssociationArn(arn: string): boolean {
		return SourceAPIAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a sourceApiAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceAPIAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mergedGraphQlapiId: string;
		associationid: string;
	} {
		const match = SourceAPIAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sourceApiAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mergedGraphQlapiId: match.groups!.mergedGraphQlapiId,
			associationid: match.groups!.associationid,
		};
	}

	/**
	 * Builds an ARN for the type resource.
	 */
	static type(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** The TypeName component of the ARN. */
		readonly typeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}/types/${props.typeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the type resource.
	 */
	static isValidTypeArn(arn: string): boolean {
		return TypeArnRegex.test(arn);
	}

	/**
	 * Parses a type ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		graphQlapiId: string;
		typeName: string;
	} {
		const match = TypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid type ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
			typeName: match.groups!.typeName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for appsync.
 */
export class AppsyncOperations {
	/** IAM actions required for the AssociateApi API call. */
	static readonly ASSOCIATE_API: string[] = ["appsync:AssociateApi"];
	/** IAM actions required for the AssociateMergedGraphqlApi API call. */
	static readonly ASSOCIATE_MERGED_GRAPHQL_API: string[] = [
		"appsync:AssociateMergedGraphqlApi",
		"appsync:AssociateSourceGraphqlApi",
	];
	/** IAM actions required for the AssociateSourceGraphqlApi API call. */
	static readonly ASSOCIATE_SOURCE_GRAPHQL_API: string[] = [
		"appsync:AssociateMergedGraphqlApi",
		"appsync:AssociateSourceGraphqlApi",
	];
	/** IAM actions required for the CreateApi API call. */
	static readonly CREATE_API: string[] = [
		"appsync:CreateApi",
		"iam:PassRole",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateApiCache API call. */
	static readonly CREATE_API_CACHE: string[] = ["appsync:CreateApiCache"];
	/** IAM actions required for the CreateApiKey API call. */
	static readonly CREATE_API_KEY: string[] = ["appsync:CreateApiKey"];
	/** IAM actions required for the CreateChannelNamespace API call. */
	static readonly CREATE_CHANNEL_NAMESPACE: string[] = [
		"appsync:CreateChannelNamespace",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = [
		"appsync:CreateDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDomainName API call. */
	static readonly CREATE_DOMAIN_NAME: string[] = [
		"appsync:CreateDomainName",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateFunction API call. */
	static readonly CREATE_FUNCTION: string[] = ["appsync:CreateFunction"];
	/** IAM actions required for the CreateGraphqlApi API call. */
	static readonly CREATE_GRAPHQL_API: string[] = [
		"appsync:CreateGraphqlApi",
		"iam:PassRole",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateResolver API call. */
	static readonly CREATE_RESOLVER: string[] = ["appsync:CreateResolver"];
	/** IAM actions required for the CreateType API call. */
	static readonly CREATE_TYPE: string[] = ["appsync:CreateType"];
	/** IAM actions required for the DeleteApi API call. */
	static readonly DELETE_API: string[] = ["appsync:DeleteApi"];
	/** IAM actions required for the DeleteApiCache API call. */
	static readonly DELETE_API_CACHE: string[] = ["appsync:DeleteApiCache"];
	/** IAM actions required for the DeleteApiKey API call. */
	static readonly DELETE_API_KEY: string[] = ["appsync:DeleteApiKey"];
	/** IAM actions required for the DeleteChannelNamespace API call. */
	static readonly DELETE_CHANNEL_NAMESPACE: string[] = [
		"appsync:DeleteChannelNamespace",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["appsync:DeleteDataSource"];
	/** IAM actions required for the DeleteDomainName API call. */
	static readonly DELETE_DOMAIN_NAME: string[] = ["appsync:DeleteDomainName"];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DELETE_FUNCTION: string[] = ["appsync:DeleteFunction"];
	/** IAM actions required for the DeleteGraphqlApi API call. */
	static readonly DELETE_GRAPHQL_API: string[] = ["appsync:DeleteGraphqlApi"];
	/** IAM actions required for the DeleteResolver API call. */
	static readonly DELETE_RESOLVER: string[] = ["appsync:DeleteResolver"];
	/** IAM actions required for the DeleteType API call. */
	static readonly DELETE_TYPE: string[] = ["appsync:DeleteType"];
	/** IAM actions required for the DisassociateApi API call. */
	static readonly DISASSOCIATE_API: string[] = ["appsync:DisassociateApi"];
	/** IAM actions required for the DisassociateMergedGraphqlApi API call. */
	static readonly DISASSOCIATE_MERGED_GRAPHQL_API: string[] = [
		"appsync:DisassociateMergedGraphqlApi",
	];
	/** IAM actions required for the DisassociateSourceGraphqlApi API call. */
	static readonly DISASSOCIATE_SOURCE_GRAPHQL_API: string[] = [
		"appsync:DisassociateSourceGraphqlApi",
	];
	/** IAM actions required for the EvaluateCode API call. */
	static readonly EVALUATE_CODE: string[] = ["appsync:EvaluateCode"];
	/** IAM actions required for the EvaluateMappingTemplate API call. */
	static readonly EVALUATE_MAPPING_TEMPLATE: string[] = [
		"appsync:EvaluateMappingTemplate",
	];
	/** IAM actions required for the FlushApiCache API call. */
	static readonly FLUSH_API_CACHE: string[] = ["appsync:FlushApiCache"];
	/** IAM actions required for the GetApi API call. */
	static readonly GET_API: string[] = ["appsync:GetApi"];
	/** IAM actions required for the GetApiAssociation API call. */
	static readonly GET_API_ASSOCIATION: string[] = ["appsync:GetApiAssociation"];
	/** IAM actions required for the GetApiCache API call. */
	static readonly GET_API_CACHE: string[] = ["appsync:GetApiCache"];
	/** IAM actions required for the GetChannelNamespace API call. */
	static readonly GET_CHANNEL_NAMESPACE: string[] = [
		"appsync:GetChannelNamespace",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["appsync:GetDataSource"];
	/** IAM actions required for the GetDataSourceIntrospection API call. */
	static readonly GET_DATA_SOURCE_INTROSPECTION: string[] = [
		"appsync:GetDataSourceIntrospection",
	];
	/** IAM actions required for the GetDomainName API call. */
	static readonly GET_DOMAIN_NAME: string[] = ["appsync:GetDomainName"];
	/** IAM actions required for the GetFunction API call. */
	static readonly GET_FUNCTION: string[] = ["appsync:GetFunction"];
	/** IAM actions required for the GetGraphqlApi API call. */
	static readonly GET_GRAPHQL_API: string[] = ["appsync:GetGraphqlApi"];
	/** IAM actions required for the GetGraphqlApiEnvironmentVariables API call. */
	static readonly GET_GRAPHQL_API_ENVIRONMENT_VARIABLES: string[] = [
		"appsync:GetGraphqlApiEnvironmentVariables",
	];
	/** IAM actions required for the GetIntrospectionSchema API call. */
	static readonly GET_INTROSPECTION_SCHEMA: string[] = [
		"appsync:GetIntrospectionSchema",
	];
	/** IAM actions required for the GetResolver API call. */
	static readonly GET_RESOLVER: string[] = ["appsync:GetResolver"];
	/** IAM actions required for the GetSchemaCreationStatus API call. */
	static readonly GET_SCHEMA_CREATION_STATUS: string[] = [
		"appsync:GetSchemaCreationStatus",
	];
	/** IAM actions required for the GetSourceApiAssociation API call. */
	static readonly GET_SOURCE_API_ASSOCIATION: string[] = [
		"appsync:GetSourceApiAssociation",
	];
	/** IAM actions required for the GetType API call. */
	static readonly GET_TYPE: string[] = ["appsync:GetType"];
	/** IAM actions required for the ListApiKeys API call. */
	static readonly LIST_API_KEYS: string[] = ["appsync:ListApiKeys"];
	/** IAM actions required for the ListApis API call. */
	static readonly LIST_APIS: string[] = ["appsync:ListApis"];
	/** IAM actions required for the ListChannelNamespaces API call. */
	static readonly LIST_CHANNEL_NAMESPACES: string[] = [
		"appsync:ListChannelNamespaces",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["appsync:ListDataSources"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly LIST_DOMAIN_NAMES: string[] = ["appsync:ListDomainNames"];
	/** IAM actions required for the ListFunctions API call. */
	static readonly LIST_FUNCTIONS: string[] = ["appsync:ListFunctions"];
	/** IAM actions required for the ListGraphqlApis API call. */
	static readonly LIST_GRAPHQL_APIS: string[] = ["appsync:ListGraphqlApis"];
	/** IAM actions required for the ListResolvers API call. */
	static readonly LIST_RESOLVERS: string[] = ["appsync:ListResolvers"];
	/** IAM actions required for the ListResolversByFunction API call. */
	static readonly LIST_RESOLVERS_BY_FUNCTION: string[] = [
		"appsync:ListResolversByFunction",
	];
	/** IAM actions required for the ListSourceApiAssociations API call. */
	static readonly LIST_SOURCE_API_ASSOCIATIONS: string[] = [
		"appsync:ListSourceApiAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appsync:ListTagsForResource",
	];
	/** IAM actions required for the ListTypes API call. */
	static readonly LIST_TYPES: string[] = ["appsync:ListTypes"];
	/** IAM actions required for the ListTypesByAssociation API call. */
	static readonly LIST_TYPES_BY_ASSOCIATION: string[] = [
		"appsync:ListTypesByAssociation",
	];
	/** IAM actions required for the PutGraphqlApiEnvironmentVariables API call. */
	static readonly PUT_GRAPHQL_API_ENVIRONMENT_VARIABLES: string[] = [
		"appsync:PutGraphqlApiEnvironmentVariables",
	];
	/** IAM actions required for the StartDataSourceIntrospection API call. */
	static readonly START_DATA_SOURCE_INTROSPECTION: string[] = [
		"appsync:StartDataSourceIntrospection",
	];
	/** IAM actions required for the StartSchemaCreation API call. */
	static readonly START_SCHEMA_CREATION: string[] = [
		"appsync:StartSchemaCreation",
	];
	/** IAM actions required for the StartSchemaMerge API call. */
	static readonly START_SCHEMA_MERGE: string[] = ["appsync:StartSchemaMerge"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appsync:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appsync:UntagResource"];
	/** IAM actions required for the UpdateApi API call. */
	static readonly UPDATE_API: string[] = ["iam:PassRole", "appsync:UpdateApi"];
	/** IAM actions required for the UpdateApiCache API call. */
	static readonly UPDATE_API_CACHE: string[] = ["appsync:UpdateApiCache"];
	/** IAM actions required for the UpdateApiKey API call. */
	static readonly UPDATE_API_KEY: string[] = ["appsync:UpdateApiKey"];
	/** IAM actions required for the UpdateChannelNamespace API call. */
	static readonly UPDATE_CHANNEL_NAMESPACE: string[] = [
		"appsync:UpdateChannelNamespace",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"appsync:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDomainName API call. */
	static readonly UPDATE_DOMAIN_NAME: string[] = ["appsync:UpdateDomainName"];
	/** IAM actions required for the UpdateFunction API call. */
	static readonly UPDATE_FUNCTION: string[] = ["appsync:UpdateFunction"];
	/** IAM actions required for the UpdateGraphqlApi API call. */
	static readonly UPDATE_GRAPHQL_API: string[] = [
		"iam:PassRole",
		"appsync:UpdateGraphqlApi",
	];
	/** IAM actions required for the UpdateResolver API call. */
	static readonly UPDATE_RESOLVER: string[] = ["appsync:UpdateResolver"];
	/** IAM actions required for the UpdateSourceApiAssociation API call. */
	static readonly UPDATE_SOURCE_API_ASSOCIATION: string[] = [
		"appsync:UpdateSourceApiAssociation",
	];
	/** IAM actions required for the UpdateType API call. */
	static readonly UPDATE_TYPE: string[] = ["appsync:UpdateType"];
}

/**
 * Condition key constants and builders for appsync.
 */
export class AppsyncConditions {
	/** Condition keys applicable to the CreateApi action. */
	static readonly CREATE_API_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelNamespace action. */
	static readonly CREATE_CHANNEL_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomainName action. */
	static readonly CREATE_DOMAIN_NAME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGraphqlApi action. */
	static readonly CREATE_GRAPHQL_API_CONDITION_KEYS: string[] = [
		"appsync:Visibility",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApi action. */
	static readonly DELETE_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteChannelNamespace action. */
	static readonly DELETE_CHANNEL_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDomainName action. */
	static readonly DELETE_DOMAIN_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraphqlApi action. */
	static readonly DELETE_GRAPHQL_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetApi action. */
	static readonly GET_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetChannelNamespace action. */
	static readonly GET_CHANNEL_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDomainName action. */
	static readonly GET_DOMAIN_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphqlApi action. */
	static readonly GET_GRAPHQL_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListApis action. */
	static readonly LIST_APIS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListChannelNamespaces action. */
	static readonly LIST_CHANNEL_NAMESPACES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListDomainNames action. */
	static readonly LIST_DOMAIN_NAMES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
	/** Condition keys applicable to the UpdateApi action. */
	static readonly UPDATE_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateChannelNamespace action. */
	static readonly UPDATE_CHANNEL_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDomainName action. */
	static readonly UPDATE_DOMAIN_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateGraphqlApi action. */
	static readonly UPDATE_GRAPHQL_API_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: appsync:Visibility (String) */
	static readonly VISIBILITY = "appsync:Visibility";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `appsync:Visibility`.
	 */
	static visibility(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "appsync:Visibility": value } };
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
