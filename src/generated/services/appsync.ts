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
	static readonly AssociateApi = "appsync:AssociateApi";
	/** [Write] appsync:AssociateMergedGraphqlApi */
	static readonly AssociateMergedGraphqlApi =
		"appsync:AssociateMergedGraphqlApi";
	/** [Write] appsync:AssociateSourceGraphqlApi */
	static readonly AssociateSourceGraphqlApi =
		"appsync:AssociateSourceGraphqlApi";
	/** [Write] appsync:AssociateWebACL */
	static readonly AssociateWebACL = "appsync:AssociateWebACL";
	/** [Write] appsync:CreateApi */
	static readonly CreateApi = "appsync:CreateApi";
	/** [Write] appsync:CreateApiCache */
	static readonly CreateApiCache = "appsync:CreateApiCache";
	/** [Write] appsync:CreateApiKey */
	static readonly CreateApiKey = "appsync:CreateApiKey";
	/** [Write] appsync:CreateChannelNamespace */
	static readonly CreateChannelNamespace = "appsync:CreateChannelNamespace";
	/** [Write] appsync:CreateDataSource */
	static readonly CreateDataSource = "appsync:CreateDataSource";
	/** [Write] appsync:CreateDomainName */
	static readonly CreateDomainName = "appsync:CreateDomainName";
	/** [Write] appsync:CreateFunction */
	static readonly CreateFunction = "appsync:CreateFunction";
	/** [Write] appsync:CreateGraphqlApi */
	static readonly CreateGraphqlApi = "appsync:CreateGraphqlApi";
	/** [Write] appsync:CreateResolver */
	static readonly CreateResolver = "appsync:CreateResolver";
	/** [Write] appsync:CreateType */
	static readonly CreateType = "appsync:CreateType";
	/** [Write] appsync:DeleteApi */
	static readonly DeleteApi = "appsync:DeleteApi";
	/** [Write] appsync:DeleteApiCache */
	static readonly DeleteApiCache = "appsync:DeleteApiCache";
	/** [Write] appsync:DeleteApiKey */
	static readonly DeleteApiKey = "appsync:DeleteApiKey";
	/** [Write] appsync:DeleteChannelNamespace */
	static readonly DeleteChannelNamespace = "appsync:DeleteChannelNamespace";
	/** [Write] appsync:DeleteDataSource */
	static readonly DeleteDataSource = "appsync:DeleteDataSource";
	/** [Write] appsync:DeleteDomainName */
	static readonly DeleteDomainName = "appsync:DeleteDomainName";
	/** [Write] appsync:DeleteFunction */
	static readonly DeleteFunction = "appsync:DeleteFunction";
	/** [Write] appsync:DeleteGraphqlApi */
	static readonly DeleteGraphqlApi = "appsync:DeleteGraphqlApi";
	/** [Write] appsync:DeleteResolver */
	static readonly DeleteResolver = "appsync:DeleteResolver";
	/** [Write] appsync:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "appsync:DeleteResourcePolicy";
	/** [Write] appsync:DeleteType */
	static readonly DeleteType = "appsync:DeleteType";
	/** [Write] appsync:DisassociateApi */
	static readonly DisassociateApi = "appsync:DisassociateApi";
	/** [Write] appsync:DisassociateMergedGraphqlApi */
	static readonly DisassociateMergedGraphqlApi =
		"appsync:DisassociateMergedGraphqlApi";
	/** [Write] appsync:DisassociateSourceGraphqlApi */
	static readonly DisassociateSourceGraphqlApi =
		"appsync:DisassociateSourceGraphqlApi";
	/** [Write] appsync:DisassociateWebACL */
	static readonly DisassociateWebACL = "appsync:DisassociateWebACL";
	/** [Read] appsync:EvaluateCode */
	static readonly EvaluateCode = "appsync:EvaluateCode";
	/** [Read] appsync:EvaluateMappingTemplate */
	static readonly EvaluateMappingTemplate = "appsync:EvaluateMappingTemplate";
	/** [Write] appsync:EventConnect */
	static readonly EventConnect = "appsync:EventConnect";
	/** [Write] appsync:EventPublish */
	static readonly EventPublish = "appsync:EventPublish";
	/** [Write] appsync:EventSubscribe */
	static readonly EventSubscribe = "appsync:EventSubscribe";
	/** [Write] appsync:FlushApiCache */
	static readonly FlushApiCache = "appsync:FlushApiCache";
	/** [Read] appsync:GetApi */
	static readonly actionGetApi = "appsync:GetApi";
	/** [Read] appsync:GetApiAssociation */
	static readonly actionGetApiAssociation = "appsync:GetApiAssociation";
	/** [Read] appsync:GetApiCache */
	static readonly actionGetApiCache = "appsync:GetApiCache";
	/** [Read] appsync:GetChannelNamespace */
	static readonly actionGetChannelNamespace = "appsync:GetChannelNamespace";
	/** [Read] appsync:GetDataSource */
	static readonly actionGetDataSource = "appsync:GetDataSource";
	/** [Read] appsync:GetDataSourceIntrospection */
	static readonly actionGetDataSourceIntrospection =
		"appsync:GetDataSourceIntrospection";
	/** [Read] appsync:GetDomainName */
	static readonly actionGetDomainName = "appsync:GetDomainName";
	/** [Read] appsync:GetFunction */
	static readonly actionGetFunction = "appsync:GetFunction";
	/** [Read] appsync:GetGraphqlApi */
	static readonly actionGetGraphqlApi = "appsync:GetGraphqlApi";
	/** [Read] appsync:GetGraphqlApiEnvironmentVariables */
	static readonly actionGetGraphqlApiEnvironmentVariables =
		"appsync:GetGraphqlApiEnvironmentVariables";
	/** [Read] appsync:GetIntrospectionSchema */
	static readonly actionGetIntrospectionSchema =
		"appsync:GetIntrospectionSchema";
	/** [Read] appsync:GetResolver */
	static readonly actionGetResolver = "appsync:GetResolver";
	/** [Read] appsync:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "appsync:GetResourcePolicy";
	/** [Read] appsync:GetSchemaCreationStatus */
	static readonly actionGetSchemaCreationStatus =
		"appsync:GetSchemaCreationStatus";
	/** [Read] appsync:GetSourceApiAssociation */
	static readonly actionGetSourceApiAssociation =
		"appsync:GetSourceApiAssociation";
	/** [Read] appsync:GetType */
	static readonly actionGetType = "appsync:GetType";
	/** [Read] appsync:GetWebACLForResource */
	static readonly actionGetWebACLForResource = "appsync:GetWebACLForResource";
	/** [Write] appsync:GraphQL */
	static readonly GraphQL = "appsync:GraphQL";
	/** [List] appsync:ListApiKeys */
	static readonly ListApiKeys = "appsync:ListApiKeys";
	/** [List] appsync:ListApis */
	static readonly ListApis = "appsync:ListApis";
	/** [List] appsync:ListChannelNamespaces */
	static readonly ListChannelNamespaces = "appsync:ListChannelNamespaces";
	/** [List] appsync:ListDataSources */
	static readonly ListDataSources = "appsync:ListDataSources";
	/** [List] appsync:ListDomainNames */
	static readonly ListDomainNames = "appsync:ListDomainNames";
	/** [List] appsync:ListFunctions */
	static readonly ListFunctions = "appsync:ListFunctions";
	/** [List] appsync:ListGraphqlApis */
	static readonly ListGraphqlApis = "appsync:ListGraphqlApis";
	/** [List] appsync:ListResolvers */
	static readonly ListResolvers = "appsync:ListResolvers";
	/** [List] appsync:ListResolversByFunction */
	static readonly ListResolversByFunction = "appsync:ListResolversByFunction";
	/** [List] appsync:ListResourcesForWebACL */
	static readonly ListResourcesForWebACL = "appsync:ListResourcesForWebACL";
	/** [List] appsync:ListSourceApiAssociations */
	static readonly ListSourceApiAssociations =
		"appsync:ListSourceApiAssociations";
	/** [Read] appsync:ListTagsForResource */
	static readonly ListTagsForResource = "appsync:ListTagsForResource";
	/** [List] appsync:ListTypes */
	static readonly ListTypes = "appsync:ListTypes";
	/** [List] appsync:ListTypesByAssociation */
	static readonly ListTypesByAssociation = "appsync:ListTypesByAssociation";
	/** [Write] appsync:PutGraphqlApiEnvironmentVariables */
	static readonly PutGraphqlApiEnvironmentVariables =
		"appsync:PutGraphqlApiEnvironmentVariables";
	/** [Write] appsync:PutResourcePolicy */
	static readonly PutResourcePolicy = "appsync:PutResourcePolicy";
	/** [PermissionManagement] appsync:SetWebACL */
	static readonly actionSetWebACL = "appsync:SetWebACL";
	/** [Write] appsync:SourceGraphQL */
	static readonly SourceGraphQL = "appsync:SourceGraphQL";
	/** [Write] appsync:StartDataSourceIntrospection */
	static readonly StartDataSourceIntrospection =
		"appsync:StartDataSourceIntrospection";
	/** [Write] appsync:StartSchemaCreation */
	static readonly StartSchemaCreation = "appsync:StartSchemaCreation";
	/** [Write] appsync:StartSchemaMerge */
	static readonly StartSchemaMerge = "appsync:StartSchemaMerge";
	/** [Tagging] appsync:TagResource */
	static readonly TagResource = "appsync:TagResource";
	/** [Tagging] appsync:UntagResource */
	static readonly UntagResource = "appsync:UntagResource";
	/** [Write] appsync:UpdateApi */
	static readonly UpdateApi = "appsync:UpdateApi";
	/** [Write] appsync:UpdateApiCache */
	static readonly UpdateApiCache = "appsync:UpdateApiCache";
	/** [Write] appsync:UpdateApiKey */
	static readonly UpdateApiKey = "appsync:UpdateApiKey";
	/** [Write] appsync:UpdateChannelNamespace */
	static readonly UpdateChannelNamespace = "appsync:UpdateChannelNamespace";
	/** [Write] appsync:UpdateDataSource */
	static readonly UpdateDataSource = "appsync:UpdateDataSource";
	/** [Write] appsync:UpdateDomainName */
	static readonly UpdateDomainName = "appsync:UpdateDomainName";
	/** [Write] appsync:UpdateFunction */
	static readonly UpdateFunction = "appsync:UpdateFunction";
	/** [Write] appsync:UpdateGraphqlApi */
	static readonly UpdateGraphqlApi = "appsync:UpdateGraphqlApi";
	/** [Write] appsync:UpdateResolver */
	static readonly UpdateResolver = "appsync:UpdateResolver";
	/** [Write] appsync:UpdateSourceApiAssociation */
	static readonly UpdateSourceApiAssociation =
		"appsync:UpdateSourceApiAssociation";
	/** [Write] appsync:UpdateType */
	static readonly UpdateType = "appsync:UpdateType";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppsyncActions.EvaluateCode,
		AppsyncActions.EvaluateMappingTemplate,
		AppsyncActions.actionGetApi,
		AppsyncActions.actionGetApiAssociation,
		AppsyncActions.actionGetApiCache,
		AppsyncActions.actionGetChannelNamespace,
		AppsyncActions.actionGetDataSource,
		AppsyncActions.actionGetDataSourceIntrospection,
		AppsyncActions.actionGetDomainName,
		AppsyncActions.actionGetFunction,
		AppsyncActions.actionGetGraphqlApi,
		AppsyncActions.actionGetGraphqlApiEnvironmentVariables,
		AppsyncActions.actionGetIntrospectionSchema,
		AppsyncActions.actionGetResolver,
		AppsyncActions.actionGetResourcePolicy,
		AppsyncActions.actionGetSchemaCreationStatus,
		AppsyncActions.actionGetSourceApiAssociation,
		AppsyncActions.actionGetType,
		AppsyncActions.actionGetWebACLForResource,
		AppsyncActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppsyncActions.AssociateApi,
		AppsyncActions.AssociateMergedGraphqlApi,
		AppsyncActions.AssociateSourceGraphqlApi,
		AppsyncActions.AssociateWebACL,
		AppsyncActions.CreateApi,
		AppsyncActions.CreateApiCache,
		AppsyncActions.CreateApiKey,
		AppsyncActions.CreateChannelNamespace,
		AppsyncActions.CreateDataSource,
		AppsyncActions.CreateDomainName,
		AppsyncActions.CreateFunction,
		AppsyncActions.CreateGraphqlApi,
		AppsyncActions.CreateResolver,
		AppsyncActions.CreateType,
		AppsyncActions.DeleteApi,
		AppsyncActions.DeleteApiCache,
		AppsyncActions.DeleteApiKey,
		AppsyncActions.DeleteChannelNamespace,
		AppsyncActions.DeleteDataSource,
		AppsyncActions.DeleteDomainName,
		AppsyncActions.DeleteFunction,
		AppsyncActions.DeleteGraphqlApi,
		AppsyncActions.DeleteResolver,
		AppsyncActions.DeleteResourcePolicy,
		AppsyncActions.DeleteType,
		AppsyncActions.DisassociateApi,
		AppsyncActions.DisassociateMergedGraphqlApi,
		AppsyncActions.DisassociateSourceGraphqlApi,
		AppsyncActions.DisassociateWebACL,
		AppsyncActions.EventConnect,
		AppsyncActions.EventPublish,
		AppsyncActions.EventSubscribe,
		AppsyncActions.FlushApiCache,
		AppsyncActions.GraphQL,
		AppsyncActions.PutGraphqlApiEnvironmentVariables,
		AppsyncActions.PutResourcePolicy,
		AppsyncActions.SourceGraphQL,
		AppsyncActions.StartDataSourceIntrospection,
		AppsyncActions.StartSchemaCreation,
		AppsyncActions.StartSchemaMerge,
		AppsyncActions.UpdateApi,
		AppsyncActions.UpdateApiCache,
		AppsyncActions.UpdateApiKey,
		AppsyncActions.UpdateChannelNamespace,
		AppsyncActions.UpdateDataSource,
		AppsyncActions.UpdateDomainName,
		AppsyncActions.UpdateFunction,
		AppsyncActions.UpdateGraphqlApi,
		AppsyncActions.UpdateResolver,
		AppsyncActions.UpdateSourceApiAssociation,
		AppsyncActions.UpdateType,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppsyncActions.ListApiKeys,
		AppsyncActions.ListApis,
		AppsyncActions.ListChannelNamespaces,
		AppsyncActions.ListDataSources,
		AppsyncActions.ListDomainNames,
		AppsyncActions.ListFunctions,
		AppsyncActions.ListGraphqlApis,
		AppsyncActions.ListResolvers,
		AppsyncActions.ListResolversByFunction,
		AppsyncActions.ListResourcesForWebACL,
		AppsyncActions.ListSourceApiAssociations,
		AppsyncActions.ListTypes,
		AppsyncActions.ListTypesByAssociation,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		AppsyncActions.actionSetWebACL,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppsyncActions.TagResource,
		AppsyncActions.UntagResource,
	];
}

/**
 * Properties for building a api ARN.
 */
export interface AppsyncAPIArnProps {
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
 * Parsed components of a api ARN.
 */
export interface AppsyncAPIArnComponents {
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
 * Properties for building a channelNamespace ARN.
 */
export interface AppsyncChannelNamespaceArnProps {
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
}

/**
 * Parsed components of a channelNamespace ARN.
 */
export interface AppsyncChannelNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The ChannelNamespaceName component. */
	readonly channelNamespaceName: string;
}

/**
 * Properties for building a datasource ARN.
 */
export interface AppsyncDatasourceArnProps {
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
}

/**
 * Parsed components of a datasource ARN.
 */
export interface AppsyncDatasourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
	/** The DatasourceName component. */
	readonly datasourceName: string;
}

/**
 * Properties for building a domain ARN.
 */
export interface AppsyncDomainArnProps {
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
 * Parsed components of a domain ARN.
 */
export interface AppsyncDomainArnComponents {
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
 * Properties for building a field ARN.
 */
export interface AppsyncFieldArnProps {
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
}

/**
 * Parsed components of a field ARN.
 */
export interface AppsyncFieldArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
	/** The TypeName component. */
	readonly typeName: string;
	/** The FieldName component. */
	readonly fieldName: string;
}

/**
 * Properties for building a function ARN.
 */
export interface AppsyncFunctionArnProps {
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
}

/**
 * Parsed components of a function ARN.
 */
export interface AppsyncFunctionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
	/** The FunctionId component. */
	readonly functionId: string;
}

/**
 * Properties for building a graphqlapi ARN.
 */
export interface AppsyncGraphqlapiArnProps {
	/** The GraphQLAPIId component of the ARN. */
	readonly graphQlapiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a graphqlapi ARN.
 */
export interface AppsyncGraphqlapiArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
}

/**
 * Properties for building a mergedApiAssociation ARN.
 */
export interface AppsyncMergedAPIAssociationArnProps {
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
}

/**
 * Parsed components of a mergedApiAssociation ARN.
 */
export interface AppsyncMergedAPIAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceGraphQLAPIId component. */
	readonly sourceGraphQlapiId: string;
	/** The Associationid component. */
	readonly associationid: string;
}

/**
 * Properties for building a sourceApiAssociation ARN.
 */
export interface AppsyncSourceAPIAssociationArnProps {
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
}

/**
 * Parsed components of a sourceApiAssociation ARN.
 */
export interface AppsyncSourceAPIAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MergedGraphQLAPIId component. */
	readonly mergedGraphQlapiId: string;
	/** The Associationid component. */
	readonly associationid: string;
}

/**
 * Properties for building a type ARN.
 */
export interface AppsyncTypeArnProps {
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
}

/**
 * Parsed components of a type ARN.
 */
export interface AppsyncTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
	/** The TypeName component. */
	readonly typeName: string;
}

const APIArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<apiId>[^:/?]+)$/;
const ChannelNamespaceArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<apiId>[^:/?]+)\/channelNamespace\/(?<channelNamespaceName>[^:/?]+)$/;
const DatasourceArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)\/datasources\/(?<datasourceName>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):domainnames\/(?<domainName>[^:/?]+)$/;
const FieldArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)\/types\/(?<typeName>[^:/?]+)\/fields\/(?<fieldName>[^:/?]+)$/;
const FunctionArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)\/functions\/(?<functionId>[^:/?]+)$/;
const GraphqlapiArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)$/;
const MergedAPIAssociationArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<sourceGraphQlapiId>[^:/?]+)\/mergedApiAssociations\/(?<associationid>[^:/?]+)$/;
const SourceAPIAssociationArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<mergedGraphQlapiId>[^:/?]+)\/sourceApiAssociations\/(?<associationid>[^:/?]+)$/;
const TypeArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)\/types\/(?<typeName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appsync resources.
 */
export class AppsyncResources {
	/**
	 * Builds an ARN for the api resource.
	 */
	static api(props: AppsyncAPIArnProps): string {
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
	static parseAPIArn(arn: string): AppsyncAPIArnComponents {
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
	static channelNamespace(props: AppsyncChannelNamespaceArnProps): string {
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
	static parseChannelNamespaceArn(
		arn: string,
	): AppsyncChannelNamespaceArnComponents {
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
	static datasource(props: AppsyncDatasourceArnProps): string {
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
	static parseDatasourceArn(arn: string): AppsyncDatasourceArnComponents {
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
	static domain(props: AppsyncDomainArnProps): string {
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
	static parseDomainArn(arn: string): AppsyncDomainArnComponents {
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
	static field(props: AppsyncFieldArnProps): string {
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
	static parseFieldArn(arn: string): AppsyncFieldArnComponents {
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
	static function(props: AppsyncFunctionArnProps): string {
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
	static parseFunctionArn(arn: string): AppsyncFunctionArnComponents {
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
	static graphqlapi(props: AppsyncGraphqlapiArnProps): string {
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
	static parseGraphqlapiArn(arn: string): AppsyncGraphqlapiArnComponents {
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
	static mergedAPIAssociation(
		props: AppsyncMergedAPIAssociationArnProps,
	): string {
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
	static parseMergedAPIAssociationArn(
		arn: string,
	): AppsyncMergedAPIAssociationArnComponents {
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
	static sourceAPIAssociation(
		props: AppsyncSourceAPIAssociationArnProps,
	): string {
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
	static parseSourceAPIAssociationArn(
		arn: string,
	): AppsyncSourceAPIAssociationArnComponents {
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
	static type(props: AppsyncTypeArnProps): string {
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
	static parseTypeArn(arn: string): AppsyncTypeArnComponents {
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
	static readonly AssociateApi: string[] = ["appsync:AssociateApi"];
	/** IAM actions required for the AssociateMergedGraphqlApi API call. */
	static readonly AssociateMergedGraphqlApi: string[] = [
		"appsync:AssociateMergedGraphqlApi",
		"appsync:AssociateSourceGraphqlApi",
	];
	/** IAM actions required for the AssociateSourceGraphqlApi API call. */
	static readonly AssociateSourceGraphqlApi: string[] = [
		"appsync:AssociateMergedGraphqlApi",
		"appsync:AssociateSourceGraphqlApi",
	];
	/** IAM actions required for the CreateApi API call. */
	static readonly CreateApi: string[] = [
		"appsync:CreateApi",
		"iam:PassRole",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateApiCache API call. */
	static readonly CreateApiCache: string[] = ["appsync:CreateApiCache"];
	/** IAM actions required for the CreateApiKey API call. */
	static readonly CreateApiKey: string[] = ["appsync:CreateApiKey"];
	/** IAM actions required for the CreateChannelNamespace API call. */
	static readonly CreateChannelNamespace: string[] = [
		"appsync:CreateChannelNamespace",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CreateDataSource: string[] = [
		"appsync:CreateDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDomainName API call. */
	static readonly CreateDomainName: string[] = [
		"appsync:CreateDomainName",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateFunction API call. */
	static readonly CreateFunction: string[] = ["appsync:CreateFunction"];
	/** IAM actions required for the CreateGraphqlApi API call. */
	static readonly CreateGraphqlApi: string[] = [
		"appsync:CreateGraphqlApi",
		"iam:PassRole",
		"appsync:TagResource",
	];
	/** IAM actions required for the CreateResolver API call. */
	static readonly CreateResolver: string[] = ["appsync:CreateResolver"];
	/** IAM actions required for the CreateType API call. */
	static readonly CreateType: string[] = ["appsync:CreateType"];
	/** IAM actions required for the DeleteApi API call. */
	static readonly DeleteApi: string[] = ["appsync:DeleteApi"];
	/** IAM actions required for the DeleteApiCache API call. */
	static readonly DeleteApiCache: string[] = ["appsync:DeleteApiCache"];
	/** IAM actions required for the DeleteApiKey API call. */
	static readonly DeleteApiKey: string[] = ["appsync:DeleteApiKey"];
	/** IAM actions required for the DeleteChannelNamespace API call. */
	static readonly DeleteChannelNamespace: string[] = [
		"appsync:DeleteChannelNamespace",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = ["appsync:DeleteDataSource"];
	/** IAM actions required for the DeleteDomainName API call. */
	static readonly DeleteDomainName: string[] = ["appsync:DeleteDomainName"];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DeleteFunction: string[] = ["appsync:DeleteFunction"];
	/** IAM actions required for the DeleteGraphqlApi API call. */
	static readonly DeleteGraphqlApi: string[] = ["appsync:DeleteGraphqlApi"];
	/** IAM actions required for the DeleteResolver API call. */
	static readonly DeleteResolver: string[] = ["appsync:DeleteResolver"];
	/** IAM actions required for the DeleteType API call. */
	static readonly DeleteType: string[] = ["appsync:DeleteType"];
	/** IAM actions required for the DisassociateApi API call. */
	static readonly DisassociateApi: string[] = ["appsync:DisassociateApi"];
	/** IAM actions required for the DisassociateMergedGraphqlApi API call. */
	static readonly DisassociateMergedGraphqlApi: string[] = [
		"appsync:DisassociateMergedGraphqlApi",
	];
	/** IAM actions required for the DisassociateSourceGraphqlApi API call. */
	static readonly DisassociateSourceGraphqlApi: string[] = [
		"appsync:DisassociateSourceGraphqlApi",
	];
	/** IAM actions required for the EvaluateCode API call. */
	static readonly EvaluateCode: string[] = ["appsync:EvaluateCode"];
	/** IAM actions required for the EvaluateMappingTemplate API call. */
	static readonly EvaluateMappingTemplate: string[] = [
		"appsync:EvaluateMappingTemplate",
	];
	/** IAM actions required for the FlushApiCache API call. */
	static readonly FlushApiCache: string[] = ["appsync:FlushApiCache"];
	/** IAM actions required for the GetApi API call. */
	static readonly opGetApi: string[] = ["appsync:GetApi"];
	/** IAM actions required for the GetApiAssociation API call. */
	static readonly opGetApiAssociation: string[] = ["appsync:GetApiAssociation"];
	/** IAM actions required for the GetApiCache API call. */
	static readonly opGetApiCache: string[] = ["appsync:GetApiCache"];
	/** IAM actions required for the GetChannelNamespace API call. */
	static readonly opGetChannelNamespace: string[] = [
		"appsync:GetChannelNamespace",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly opGetDataSource: string[] = ["appsync:GetDataSource"];
	/** IAM actions required for the GetDataSourceIntrospection API call. */
	static readonly opGetDataSourceIntrospection: string[] = [
		"appsync:GetDataSourceIntrospection",
	];
	/** IAM actions required for the GetDomainName API call. */
	static readonly opGetDomainName: string[] = ["appsync:GetDomainName"];
	/** IAM actions required for the GetFunction API call. */
	static readonly opGetFunction: string[] = ["appsync:GetFunction"];
	/** IAM actions required for the GetGraphqlApi API call. */
	static readonly opGetGraphqlApi: string[] = ["appsync:GetGraphqlApi"];
	/** IAM actions required for the GetGraphqlApiEnvironmentVariables API call. */
	static readonly opGetGraphqlApiEnvironmentVariables: string[] = [
		"appsync:GetGraphqlApiEnvironmentVariables",
	];
	/** IAM actions required for the GetIntrospectionSchema API call. */
	static readonly opGetIntrospectionSchema: string[] = [
		"appsync:GetIntrospectionSchema",
	];
	/** IAM actions required for the GetResolver API call. */
	static readonly opGetResolver: string[] = ["appsync:GetResolver"];
	/** IAM actions required for the GetSchemaCreationStatus API call. */
	static readonly opGetSchemaCreationStatus: string[] = [
		"appsync:GetSchemaCreationStatus",
	];
	/** IAM actions required for the GetSourceApiAssociation API call. */
	static readonly opGetSourceApiAssociation: string[] = [
		"appsync:GetSourceApiAssociation",
	];
	/** IAM actions required for the GetType API call. */
	static readonly opGetType: string[] = ["appsync:GetType"];
	/** IAM actions required for the ListApiKeys API call. */
	static readonly ListApiKeys: string[] = ["appsync:ListApiKeys"];
	/** IAM actions required for the ListApis API call. */
	static readonly ListApis: string[] = ["appsync:ListApis"];
	/** IAM actions required for the ListChannelNamespaces API call. */
	static readonly ListChannelNamespaces: string[] = [
		"appsync:ListChannelNamespaces",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly ListDataSources: string[] = ["appsync:ListDataSources"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly ListDomainNames: string[] = ["appsync:ListDomainNames"];
	/** IAM actions required for the ListFunctions API call. */
	static readonly ListFunctions: string[] = ["appsync:ListFunctions"];
	/** IAM actions required for the ListGraphqlApis API call. */
	static readonly ListGraphqlApis: string[] = ["appsync:ListGraphqlApis"];
	/** IAM actions required for the ListResolvers API call. */
	static readonly ListResolvers: string[] = ["appsync:ListResolvers"];
	/** IAM actions required for the ListResolversByFunction API call. */
	static readonly ListResolversByFunction: string[] = [
		"appsync:ListResolversByFunction",
	];
	/** IAM actions required for the ListSourceApiAssociations API call. */
	static readonly ListSourceApiAssociations: string[] = [
		"appsync:ListSourceApiAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appsync:ListTagsForResource",
	];
	/** IAM actions required for the ListTypes API call. */
	static readonly ListTypes: string[] = ["appsync:ListTypes"];
	/** IAM actions required for the ListTypesByAssociation API call. */
	static readonly ListTypesByAssociation: string[] = [
		"appsync:ListTypesByAssociation",
	];
	/** IAM actions required for the PutGraphqlApiEnvironmentVariables API call. */
	static readonly PutGraphqlApiEnvironmentVariables: string[] = [
		"appsync:PutGraphqlApiEnvironmentVariables",
	];
	/** IAM actions required for the StartDataSourceIntrospection API call. */
	static readonly StartDataSourceIntrospection: string[] = [
		"appsync:StartDataSourceIntrospection",
	];
	/** IAM actions required for the StartSchemaCreation API call. */
	static readonly StartSchemaCreation: string[] = [
		"appsync:StartSchemaCreation",
	];
	/** IAM actions required for the StartSchemaMerge API call. */
	static readonly StartSchemaMerge: string[] = ["appsync:StartSchemaMerge"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appsync:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appsync:UntagResource"];
	/** IAM actions required for the UpdateApi API call. */
	static readonly UpdateApi: string[] = ["iam:PassRole", "appsync:UpdateApi"];
	/** IAM actions required for the UpdateApiCache API call. */
	static readonly UpdateApiCache: string[] = ["appsync:UpdateApiCache"];
	/** IAM actions required for the UpdateApiKey API call. */
	static readonly UpdateApiKey: string[] = ["appsync:UpdateApiKey"];
	/** IAM actions required for the UpdateChannelNamespace API call. */
	static readonly UpdateChannelNamespace: string[] = [
		"appsync:UpdateChannelNamespace",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = [
		"iam:PassRole",
		"appsync:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDomainName API call. */
	static readonly UpdateDomainName: string[] = ["appsync:UpdateDomainName"];
	/** IAM actions required for the UpdateFunction API call. */
	static readonly UpdateFunction: string[] = ["appsync:UpdateFunction"];
	/** IAM actions required for the UpdateGraphqlApi API call. */
	static readonly UpdateGraphqlApi: string[] = [
		"iam:PassRole",
		"appsync:UpdateGraphqlApi",
	];
	/** IAM actions required for the UpdateResolver API call. */
	static readonly UpdateResolver: string[] = ["appsync:UpdateResolver"];
	/** IAM actions required for the UpdateSourceApiAssociation API call. */
	static readonly UpdateSourceApiAssociation: string[] = [
		"appsync:UpdateSourceApiAssociation",
	];
	/** IAM actions required for the UpdateType API call. */
	static readonly UpdateType: string[] = ["appsync:UpdateType"];
}

/**
 * Condition key constants and builders for appsync.
 */
export class AppsyncConditions {
	/** Condition keys applicable to the CreateApi action. */
	static readonly CreateApiConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelNamespace action. */
	static readonly CreateChannelNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomainName action. */
	static readonly CreateDomainNameConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGraphqlApi action. */
	static readonly CreateGraphqlApiConditionKeys: string[] = [
		"appsync:Visibility",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApi action. */
	static readonly DeleteApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteChannelNamespace action. */
	static readonly DeleteChannelNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDomainName action. */
	static readonly DeleteDomainNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraphqlApi action. */
	static readonly DeleteGraphqlApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetApi action. */
	static readonly actionGetApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetChannelNamespace action. */
	static readonly actionGetChannelNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDomainName action. */
	static readonly actionGetDomainNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphqlApi action. */
	static readonly actionGetGraphqlApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListApis action. */
	static readonly ListApisConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListChannelNamespaces action. */
	static readonly ListChannelNamespacesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListDomainNames action. */
	static readonly ListDomainNamesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
	/** Condition keys applicable to the UpdateApi action. */
	static readonly UpdateApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateChannelNamespace action. */
	static readonly UpdateChannelNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDomainName action. */
	static readonly UpdateDomainNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateGraphqlApi action. */
	static readonly UpdateGraphqlApiConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: appsync:Visibility (String) */
	static readonly VISIBILITY = "appsync:Visibility";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
