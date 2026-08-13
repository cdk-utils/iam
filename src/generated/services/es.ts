// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/es.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the es service.
 */
export class EsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "es";

	/** [Write] es:AcceptInboundConnection */
	static readonly ACCEPT_INBOUND_CONNECTION = "es:AcceptInboundConnection";
	/** [Write] es:AcceptInboundCrossClusterSearchConnection */
	static readonly ACCEPT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION =
		"es:AcceptInboundCrossClusterSearchConnection";
	/** [Write] es:AddDataSource */
	static readonly ADD_DATA_SOURCE = "es:AddDataSource";
	/** [Write] es:AddDirectQueryDataSource */
	static readonly ADD_DIRECT_QUERY_DATA_SOURCE = "es:AddDirectQueryDataSource";
	/** [Tagging] es:AddTags */
	static readonly ADD_TAGS = "es:AddTags";
	/** [Write] es:AssociatePackage */
	static readonly ASSOCIATE_PACKAGE = "es:AssociatePackage";
	/** [Write] es:AssociatePackages */
	static readonly ASSOCIATE_PACKAGES = "es:AssociatePackages";
	/** [Write] es:AttachDataSource */
	static readonly ATTACH_DATA_SOURCE = "es:AttachDataSource";
	/** [Write] es:AuthorizeVpcEndpointAccess */
	static readonly AUTHORIZE_VPC_ENDPOINT_ACCESS =
		"es:AuthorizeVpcEndpointAccess";
	/** [Write] es:CancelDomainConfigChange */
	static readonly CANCEL_DOMAIN_CONFIG_CHANGE = "es:CancelDomainConfigChange";
	/** [Write] es:CancelElasticsearchServiceSoftwareUpdate */
	static readonly CANCEL_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE =
		"es:CancelElasticsearchServiceSoftwareUpdate";
	/** [Write] es:CancelServiceSoftwareUpdate */
	static readonly CANCEL_SERVICE_SOFTWARE_UPDATE =
		"es:CancelServiceSoftwareUpdate";
	/** [Write] es:CreateApplication */
	static readonly CREATE_APPLICATION = "es:CreateApplication";
	/** [Write] es:CreateDomain */
	static readonly CREATE_DOMAIN = "es:CreateDomain";
	/** [Write] es:CreateElasticsearchDomain */
	static readonly CREATE_ELASTICSEARCH_DOMAIN = "es:CreateElasticsearchDomain";
	/** [Write] es:CreateElasticsearchServiceRole */
	static readonly CREATE_ELASTICSEARCH_SERVICE_ROLE =
		"es:CreateElasticsearchServiceRole";
	/** [Write] es:CreateIndex */
	static readonly CREATE_INDEX = "es:CreateIndex";
	/** [Write] es:CreateOutboundConnection */
	static readonly CREATE_OUTBOUND_CONNECTION = "es:CreateOutboundConnection";
	/** [Write] es:CreateOutboundCrossClusterSearchConnection */
	static readonly CREATE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION =
		"es:CreateOutboundCrossClusterSearchConnection";
	/** [Write] es:CreatePackage */
	static readonly CREATE_PACKAGE = "es:CreatePackage";
	/** [Write] es:CreateServiceRole */
	static readonly CREATE_SERVICE_ROLE = "es:CreateServiceRole";
	/** [Write] es:CreateVpcEndpoint */
	static readonly CREATE_VPC_ENDPOINT = "es:CreateVpcEndpoint";
	/** [Write] es:DeleteApplication */
	static readonly DELETE_APPLICATION = "es:DeleteApplication";
	/** [Write] es:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "es:DeleteDataSource";
	/** [Write] es:DeleteDirectQueryDataSource */
	static readonly DELETE_DIRECT_QUERY_DATA_SOURCE =
		"es:DeleteDirectQueryDataSource";
	/** [Write] es:DeleteDomain */
	static readonly DELETE_DOMAIN = "es:DeleteDomain";
	/** [Write] es:DeleteElasticsearchDomain */
	static readonly DELETE_ELASTICSEARCH_DOMAIN = "es:DeleteElasticsearchDomain";
	/** [Write] es:DeleteElasticsearchServiceRole */
	static readonly DELETE_ELASTICSEARCH_SERVICE_ROLE =
		"es:DeleteElasticsearchServiceRole";
	/** [Write] es:DeleteInboundConnection */
	static readonly DELETE_INBOUND_CONNECTION = "es:DeleteInboundConnection";
	/** [Write] es:DeleteInboundCrossClusterSearchConnection */
	static readonly DELETE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION =
		"es:DeleteInboundCrossClusterSearchConnection";
	/** [Write] es:DeleteIndex */
	static readonly DELETE_INDEX = "es:DeleteIndex";
	/** [Write] es:DeleteOutboundConnection */
	static readonly DELETE_OUTBOUND_CONNECTION = "es:DeleteOutboundConnection";
	/** [Write] es:DeleteOutboundCrossClusterSearchConnection */
	static readonly DELETE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION =
		"es:DeleteOutboundCrossClusterSearchConnection";
	/** [Write] es:DeletePackage */
	static readonly DELETE_PACKAGE = "es:DeletePackage";
	/** [Write] es:DeleteVpcEndpoint */
	static readonly DELETE_VPC_ENDPOINT = "es:DeleteVpcEndpoint";
	/** [Write] es:DeregisterCapability */
	static readonly DEREGISTER_CAPABILITY = "es:DeregisterCapability";
	/** [Read] es:DescribeDataSourceAttachment */
	static readonly DESCRIBE_DATA_SOURCE_ATTACHMENT =
		"es:DescribeDataSourceAttachment";
	/** [Read] es:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "es:DescribeDomain";
	/** [Read] es:DescribeDomainAutoTunes */
	static readonly DESCRIBE_DOMAIN_AUTO_TUNES = "es:DescribeDomainAutoTunes";
	/** [Read] es:DescribeDomainChangeProgress */
	static readonly DESCRIBE_DOMAIN_CHANGE_PROGRESS =
		"es:DescribeDomainChangeProgress";
	/** [Read] es:DescribeDomainConfig */
	static readonly DESCRIBE_DOMAIN_CONFIG = "es:DescribeDomainConfig";
	/** [Read] es:DescribeDomainHealth */
	static readonly DESCRIBE_DOMAIN_HEALTH = "es:DescribeDomainHealth";
	/** [Read] es:DescribeDomainNodes */
	static readonly DESCRIBE_DOMAIN_NODES = "es:DescribeDomainNodes";
	/** [List] es:DescribeDomains */
	static readonly DESCRIBE_DOMAINS = "es:DescribeDomains";
	/** [Read] es:DescribeDryRunProgress */
	static readonly DESCRIBE_DRY_RUN_PROGRESS = "es:DescribeDryRunProgress";
	/** [Read] es:DescribeElasticsearchDomain */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAIN =
		"es:DescribeElasticsearchDomain";
	/** [Read] es:DescribeElasticsearchDomainConfig */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAIN_CONFIG =
		"es:DescribeElasticsearchDomainConfig";
	/** [List] es:DescribeElasticsearchDomains */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAINS =
		"es:DescribeElasticsearchDomains";
	/** [List] es:DescribeElasticsearchInstanceTypeLimits */
	static readonly DESCRIBE_ELASTICSEARCH_INSTANCE_TYPE_LIMITS =
		"es:DescribeElasticsearchInstanceTypeLimits";
	/** [List] es:DescribeInboundConnections */
	static readonly DESCRIBE_INBOUND_CONNECTIONS =
		"es:DescribeInboundConnections";
	/** [List] es:DescribeInboundCrossClusterSearchConnections */
	static readonly DESCRIBE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS =
		"es:DescribeInboundCrossClusterSearchConnections";
	/** [Read] es:DescribeInsightDetails */
	static readonly DESCRIBE_INSIGHT_DETAILS = "es:DescribeInsightDetails";
	/** [List] es:DescribeInstanceTypeLimits */
	static readonly DESCRIBE_INSTANCE_TYPE_LIMITS =
		"es:DescribeInstanceTypeLimits";
	/** [List] es:DescribeOutboundConnections */
	static readonly DESCRIBE_OUTBOUND_CONNECTIONS =
		"es:DescribeOutboundConnections";
	/** [List] es:DescribeOutboundCrossClusterSearchConnections */
	static readonly DESCRIBE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS =
		"es:DescribeOutboundCrossClusterSearchConnections";
	/** [Read] es:DescribePackages */
	static readonly DESCRIBE_PACKAGES = "es:DescribePackages";
	/** [List] es:DescribeReservedElasticsearchInstanceOfferings */
	static readonly DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERINGS =
		"es:DescribeReservedElasticsearchInstanceOfferings";
	/** [List] es:DescribeReservedElasticsearchInstances */
	static readonly DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCES =
		"es:DescribeReservedElasticsearchInstances";
	/** [List] es:DescribeReservedInstanceOfferings */
	static readonly DESCRIBE_RESERVED_INSTANCE_OFFERINGS =
		"es:DescribeReservedInstanceOfferings";
	/** [List] es:DescribeReservedInstances */
	static readonly DESCRIBE_RESERVED_INSTANCES = "es:DescribeReservedInstances";
	/** [List] es:DescribeVpcEndpoints */
	static readonly DESCRIBE_VPC_ENDPOINTS = "es:DescribeVpcEndpoints";
	/** [Write] es:DetachDataSource */
	static readonly DETACH_DATA_SOURCE = "es:DetachDataSource";
	/** [Write] es:DissociatePackage */
	static readonly DISSOCIATE_PACKAGE = "es:DissociatePackage";
	/** [Write] es:DissociatePackages */
	static readonly DISSOCIATE_PACKAGES = "es:DissociatePackages";
	/** [Read] es:ESCrossClusterGet */
	static readonly ES_CROSS_CLUSTER_GET = "es:ESCrossClusterGet";
	/** [Write] es:ESHttpDelete */
	static readonly ES_HTTP_DELETE = "es:ESHttpDelete";
	/** [Read] es:ESHttpGet */
	static readonly ES_HTTP_GET = "es:ESHttpGet";
	/** [Read] es:ESHttpHead */
	static readonly ES_HTTP_HEAD = "es:ESHttpHead";
	/** [Write] es:ESHttpPatch */
	static readonly ES_HTTP_PATCH = "es:ESHttpPatch";
	/** [Write] es:ESHttpPost */
	static readonly ES_HTTP_POST = "es:ESHttpPost";
	/** [Write] es:ESHttpPut */
	static readonly ES_HTTP_PUT = "es:ESHttpPut";
	/** [Read] es:GetApplication */
	static readonly GET_APPLICATION = "es:GetApplication";
	/** [Read] es:GetCapability */
	static readonly GET_CAPABILITY = "es:GetCapability";
	/** [List] es:GetCompatibleElasticsearchVersions */
	static readonly GET_COMPATIBLE_ELASTICSEARCH_VERSIONS =
		"es:GetCompatibleElasticsearchVersions";
	/** [List] es:GetCompatibleVersions */
	static readonly GET_COMPATIBLE_VERSIONS = "es:GetCompatibleVersions";
	/** [Read] es:GetDataSource */
	static readonly GET_DATA_SOURCE = "es:GetDataSource";
	/** [Read] es:GetDefaultApplicationSetting */
	static readonly GET_DEFAULT_APPLICATION_SETTING =
		"es:GetDefaultApplicationSetting";
	/** [Read] es:GetDirectQueryDataSource */
	static readonly GET_DIRECT_QUERY_DATA_SOURCE = "es:GetDirectQueryDataSource";
	/** [Read] es:GetDomainMaintenanceStatus */
	static readonly GET_DOMAIN_MAINTENANCE_STATUS =
		"es:GetDomainMaintenanceStatus";
	/** [Read] es:GetIndex */
	static readonly GET_INDEX = "es:GetIndex";
	/** [Read] es:GetMigration */
	static readonly GET_MIGRATION = "es:GetMigration";
	/** [Read] es:GetPackageVersionHistory */
	static readonly GET_PACKAGE_VERSION_HISTORY = "es:GetPackageVersionHistory";
	/** [Read] es:GetUpgradeHistory */
	static readonly GET_UPGRADE_HISTORY = "es:GetUpgradeHistory";
	/** [Read] es:GetUpgradeStatus */
	static readonly GET_UPGRADE_STATUS = "es:GetUpgradeStatus";
	/** [Write] es:InsightFeedback */
	static readonly INSIGHT_FEEDBACK = "es:InsightFeedback";
	/** [List] es:ListApplications */
	static readonly LIST_APPLICATIONS = "es:ListApplications";
	/** [List] es:ListDataSourceAttachments */
	static readonly LIST_DATA_SOURCE_ATTACHMENTS = "es:ListDataSourceAttachments";
	/** [List] es:ListDataSources */
	static readonly LIST_DATA_SOURCES = "es:ListDataSources";
	/** [List] es:ListDirectQueryDataSources */
	static readonly LIST_DIRECT_QUERY_DATA_SOURCES =
		"es:ListDirectQueryDataSources";
	/** [List] es:ListDomainMaintenances */
	static readonly LIST_DOMAIN_MAINTENANCES = "es:ListDomainMaintenances";
	/** [List] es:ListDomainNames */
	static readonly LIST_DOMAIN_NAMES = "es:ListDomainNames";
	/** [List] es:ListDomainsForPackage */
	static readonly LIST_DOMAINS_FOR_PACKAGE = "es:ListDomainsForPackage";
	/** [List] es:ListElasticsearchInstanceTypeDetails */
	static readonly LIST_ELASTICSEARCH_INSTANCE_TYPE_DETAILS =
		"es:ListElasticsearchInstanceTypeDetails";
	/** [List] es:ListElasticsearchInstanceTypes */
	static readonly LIST_ELASTICSEARCH_INSTANCE_TYPES =
		"es:ListElasticsearchInstanceTypes";
	/** [List] es:ListElasticsearchVersions */
	static readonly LIST_ELASTICSEARCH_VERSIONS = "es:ListElasticsearchVersions";
	/** [List] es:ListInsights */
	static readonly LIST_INSIGHTS = "es:ListInsights";
	/** [List] es:ListInstanceTypeDetails */
	static readonly LIST_INSTANCE_TYPE_DETAILS = "es:ListInstanceTypeDetails";
	/** [List] es:ListMigrations */
	static readonly LIST_MIGRATIONS = "es:ListMigrations";
	/** [List] es:ListPackagesForDomain */
	static readonly LIST_PACKAGES_FOR_DOMAIN = "es:ListPackagesForDomain";
	/** [List] es:ListScheduledActions */
	static readonly LIST_SCHEDULED_ACTIONS = "es:ListScheduledActions";
	/** [Read] es:ListTags */
	static readonly LIST_TAGS = "es:ListTags";
	/** [List] es:ListVersions */
	static readonly LIST_VERSIONS = "es:ListVersions";
	/** [List] es:ListVpcEndpointAccess */
	static readonly LIST_VPC_ENDPOINT_ACCESS = "es:ListVpcEndpointAccess";
	/** [List] es:ListVpcEndpoints */
	static readonly LIST_VPC_ENDPOINTS = "es:ListVpcEndpoints";
	/** [List] es:ListVpcEndpointsForDomain */
	static readonly LIST_VPC_ENDPOINTS_FOR_DOMAIN =
		"es:ListVpcEndpointsForDomain";
	/** [Write] es:PurchaseReservedElasticsearchInstanceOffering */
	static readonly PURCHASE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERING =
		"es:PurchaseReservedElasticsearchInstanceOffering";
	/** [Write] es:PurchaseReservedInstanceOffering */
	static readonly PURCHASE_RESERVED_INSTANCE_OFFERING =
		"es:PurchaseReservedInstanceOffering";
	/** [Write] es:PutDefaultApplicationSetting */
	static readonly PUT_DEFAULT_APPLICATION_SETTING =
		"es:PutDefaultApplicationSetting";
	/** [Write] es:RegisterCapability */
	static readonly REGISTER_CAPABILITY = "es:RegisterCapability";
	/** [Write] es:RejectInboundConnection */
	static readonly REJECT_INBOUND_CONNECTION = "es:RejectInboundConnection";
	/** [Write] es:RejectInboundCrossClusterSearchConnection */
	static readonly REJECT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION =
		"es:RejectInboundCrossClusterSearchConnection";
	/** [Tagging] es:RemoveTags */
	static readonly REMOVE_TAGS = "es:RemoveTags";
	/** [Write] es:RevokeVpcEndpointAccess */
	static readonly REVOKE_VPC_ENDPOINT_ACCESS = "es:RevokeVpcEndpointAccess";
	/** [Write] es:RollbackElasticsearchServiceSoftwareUpdate */
	static readonly ROLLBACK_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE =
		"es:RollbackElasticsearchServiceSoftwareUpdate";
	/** [Write] es:RollbackServiceSoftwareUpdate */
	static readonly ROLLBACK_SERVICE_SOFTWARE_UPDATE =
		"es:RollbackServiceSoftwareUpdate";
	/** [Write] es:StartDomainMaintenance */
	static readonly START_DOMAIN_MAINTENANCE = "es:StartDomainMaintenance";
	/** [Write] es:StartElasticsearchServiceSoftwareUpdate */
	static readonly START_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE =
		"es:StartElasticsearchServiceSoftwareUpdate";
	/** [Write] es:StartMigration */
	static readonly START_MIGRATION = "es:StartMigration";
	/** [Write] es:StartServiceSoftwareUpdate */
	static readonly START_SERVICE_SOFTWARE_UPDATE =
		"es:StartServiceSoftwareUpdate";
	/** [Write] es:UpdateApplication */
	static readonly UPDATE_APPLICATION = "es:UpdateApplication";
	/** [Write] es:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "es:UpdateDataSource";
	/** [Write] es:UpdateDirectQueryDataSource */
	static readonly UPDATE_DIRECT_QUERY_DATA_SOURCE =
		"es:UpdateDirectQueryDataSource";
	/** [Write] es:UpdateDomainConfig */
	static readonly UPDATE_DOMAIN_CONFIG = "es:UpdateDomainConfig";
	/** [Write] es:UpdateElasticsearchDomainConfig */
	static readonly UPDATE_ELASTICSEARCH_DOMAIN_CONFIG =
		"es:UpdateElasticsearchDomainConfig";
	/** [Write] es:UpdateIndex */
	static readonly UPDATE_INDEX = "es:UpdateIndex";
	/** [Write] es:UpdatePackage */
	static readonly UPDATE_PACKAGE = "es:UpdatePackage";
	/** [Write] es:UpdatePackageScope */
	static readonly UPDATE_PACKAGE_SCOPE = "es:UpdatePackageScope";
	/** [Write] es:UpdateScheduledAction */
	static readonly UPDATE_SCHEDULED_ACTION = "es:UpdateScheduledAction";
	/** [Write] es:UpdateVpcEndpoint */
	static readonly UPDATE_VPC_ENDPOINT = "es:UpdateVpcEndpoint";
	/** [Write] es:UpgradeDomain */
	static readonly UPGRADE_DOMAIN = "es:UpgradeDomain";
	/** [Write] es:UpgradeElasticsearchDomain */
	static readonly UPGRADE_ELASTICSEARCH_DOMAIN =
		"es:UpgradeElasticsearchDomain";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EsActions.DESCRIBE_DATA_SOURCE_ATTACHMENT,
		EsActions.DESCRIBE_DOMAIN,
		EsActions.DESCRIBE_DOMAIN_AUTO_TUNES,
		EsActions.DESCRIBE_DOMAIN_CHANGE_PROGRESS,
		EsActions.DESCRIBE_DOMAIN_CONFIG,
		EsActions.DESCRIBE_DOMAIN_HEALTH,
		EsActions.DESCRIBE_DOMAIN_NODES,
		EsActions.DESCRIBE_DRY_RUN_PROGRESS,
		EsActions.DESCRIBE_ELASTICSEARCH_DOMAIN,
		EsActions.DESCRIBE_ELASTICSEARCH_DOMAIN_CONFIG,
		EsActions.DESCRIBE_INSIGHT_DETAILS,
		EsActions.DESCRIBE_PACKAGES,
		EsActions.ES_CROSS_CLUSTER_GET,
		EsActions.ES_HTTP_GET,
		EsActions.ES_HTTP_HEAD,
		EsActions.GET_APPLICATION,
		EsActions.GET_CAPABILITY,
		EsActions.GET_DATA_SOURCE,
		EsActions.GET_DEFAULT_APPLICATION_SETTING,
		EsActions.GET_DIRECT_QUERY_DATA_SOURCE,
		EsActions.GET_DOMAIN_MAINTENANCE_STATUS,
		EsActions.GET_INDEX,
		EsActions.GET_MIGRATION,
		EsActions.GET_PACKAGE_VERSION_HISTORY,
		EsActions.GET_UPGRADE_HISTORY,
		EsActions.GET_UPGRADE_STATUS,
		EsActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EsActions.ACCEPT_INBOUND_CONNECTION,
		EsActions.ACCEPT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION,
		EsActions.ADD_DATA_SOURCE,
		EsActions.ADD_DIRECT_QUERY_DATA_SOURCE,
		EsActions.ASSOCIATE_PACKAGE,
		EsActions.ASSOCIATE_PACKAGES,
		EsActions.ATTACH_DATA_SOURCE,
		EsActions.AUTHORIZE_VPC_ENDPOINT_ACCESS,
		EsActions.CANCEL_DOMAIN_CONFIG_CHANGE,
		EsActions.CANCEL_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE,
		EsActions.CANCEL_SERVICE_SOFTWARE_UPDATE,
		EsActions.CREATE_APPLICATION,
		EsActions.CREATE_DOMAIN,
		EsActions.CREATE_ELASTICSEARCH_DOMAIN,
		EsActions.CREATE_ELASTICSEARCH_SERVICE_ROLE,
		EsActions.CREATE_INDEX,
		EsActions.CREATE_OUTBOUND_CONNECTION,
		EsActions.CREATE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION,
		EsActions.CREATE_PACKAGE,
		EsActions.CREATE_SERVICE_ROLE,
		EsActions.CREATE_VPC_ENDPOINT,
		EsActions.DELETE_APPLICATION,
		EsActions.DELETE_DATA_SOURCE,
		EsActions.DELETE_DIRECT_QUERY_DATA_SOURCE,
		EsActions.DELETE_DOMAIN,
		EsActions.DELETE_ELASTICSEARCH_DOMAIN,
		EsActions.DELETE_ELASTICSEARCH_SERVICE_ROLE,
		EsActions.DELETE_INBOUND_CONNECTION,
		EsActions.DELETE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION,
		EsActions.DELETE_INDEX,
		EsActions.DELETE_OUTBOUND_CONNECTION,
		EsActions.DELETE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION,
		EsActions.DELETE_PACKAGE,
		EsActions.DELETE_VPC_ENDPOINT,
		EsActions.DEREGISTER_CAPABILITY,
		EsActions.DETACH_DATA_SOURCE,
		EsActions.DISSOCIATE_PACKAGE,
		EsActions.DISSOCIATE_PACKAGES,
		EsActions.ES_HTTP_DELETE,
		EsActions.ES_HTTP_PATCH,
		EsActions.ES_HTTP_POST,
		EsActions.ES_HTTP_PUT,
		EsActions.INSIGHT_FEEDBACK,
		EsActions.PURCHASE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERING,
		EsActions.PURCHASE_RESERVED_INSTANCE_OFFERING,
		EsActions.PUT_DEFAULT_APPLICATION_SETTING,
		EsActions.REGISTER_CAPABILITY,
		EsActions.REJECT_INBOUND_CONNECTION,
		EsActions.REJECT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION,
		EsActions.REVOKE_VPC_ENDPOINT_ACCESS,
		EsActions.ROLLBACK_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE,
		EsActions.ROLLBACK_SERVICE_SOFTWARE_UPDATE,
		EsActions.START_DOMAIN_MAINTENANCE,
		EsActions.START_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE,
		EsActions.START_MIGRATION,
		EsActions.START_SERVICE_SOFTWARE_UPDATE,
		EsActions.UPDATE_APPLICATION,
		EsActions.UPDATE_DATA_SOURCE,
		EsActions.UPDATE_DIRECT_QUERY_DATA_SOURCE,
		EsActions.UPDATE_DOMAIN_CONFIG,
		EsActions.UPDATE_ELASTICSEARCH_DOMAIN_CONFIG,
		EsActions.UPDATE_INDEX,
		EsActions.UPDATE_PACKAGE,
		EsActions.UPDATE_PACKAGE_SCOPE,
		EsActions.UPDATE_SCHEDULED_ACTION,
		EsActions.UPDATE_VPC_ENDPOINT,
		EsActions.UPGRADE_DOMAIN,
		EsActions.UPGRADE_ELASTICSEARCH_DOMAIN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EsActions.DESCRIBE_DOMAINS,
		EsActions.DESCRIBE_ELASTICSEARCH_DOMAINS,
		EsActions.DESCRIBE_ELASTICSEARCH_INSTANCE_TYPE_LIMITS,
		EsActions.DESCRIBE_INBOUND_CONNECTIONS,
		EsActions.DESCRIBE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS,
		EsActions.DESCRIBE_INSTANCE_TYPE_LIMITS,
		EsActions.DESCRIBE_OUTBOUND_CONNECTIONS,
		EsActions.DESCRIBE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS,
		EsActions.DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERINGS,
		EsActions.DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCES,
		EsActions.DESCRIBE_RESERVED_INSTANCE_OFFERINGS,
		EsActions.DESCRIBE_RESERVED_INSTANCES,
		EsActions.DESCRIBE_VPC_ENDPOINTS,
		EsActions.GET_COMPATIBLE_ELASTICSEARCH_VERSIONS,
		EsActions.GET_COMPATIBLE_VERSIONS,
		EsActions.LIST_APPLICATIONS,
		EsActions.LIST_DATA_SOURCE_ATTACHMENTS,
		EsActions.LIST_DATA_SOURCES,
		EsActions.LIST_DIRECT_QUERY_DATA_SOURCES,
		EsActions.LIST_DOMAIN_MAINTENANCES,
		EsActions.LIST_DOMAIN_NAMES,
		EsActions.LIST_DOMAINS_FOR_PACKAGE,
		EsActions.LIST_ELASTICSEARCH_INSTANCE_TYPE_DETAILS,
		EsActions.LIST_ELASTICSEARCH_INSTANCE_TYPES,
		EsActions.LIST_ELASTICSEARCH_VERSIONS,
		EsActions.LIST_INSIGHTS,
		EsActions.LIST_INSTANCE_TYPE_DETAILS,
		EsActions.LIST_MIGRATIONS,
		EsActions.LIST_PACKAGES_FOR_DOMAIN,
		EsActions.LIST_SCHEDULED_ACTIONS,
		EsActions.LIST_VERSIONS,
		EsActions.LIST_VPC_ENDPOINT_ACCESS,
		EsActions.LIST_VPC_ENDPOINTS,
		EsActions.LIST_VPC_ENDPOINTS_FOR_DOMAIN,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EsActions.ADD_TAGS,
		EsActions.REMOVE_TAGS,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):application/(?<appId>[^:/?]+)$",
);
const DatasourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):datasource/(?<dataSourceName>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):es:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainName>[^:/?]+)$",
);
const EsRoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role/aws-service-role/es\\.amazonaws\\.com/AWSServiceRoleForAmazonOpenSearchService$",
);
const OpensearchserviceRoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role/aws-service-role/opensearchservice\\.amazonaws\\.com/AWSServiceRoleForAmazonOpenSearchService$",
);

/**
 * ARN builders, validators, and parsers for es resources.
 */
export class EsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:opensearch:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the datasource resource.
	 */
	static datasource(props: {
		/** The DataSourceName component of the ARN. */
		readonly dataSourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:opensearch:${props.region ?? "*"}:${props.account ?? "*"}:datasource/${props.dataSourceName}`;
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
		dataSourceName: string;
	} {
		const match = DatasourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSourceName: match.groups!.dataSourceName,
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
		return `arn:${props.partition ?? "aws"}:es:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainName}`;
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
	 * Builds an ARN for the es_role resource.
	 */
	static esRole(props: {
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`;
	}

	/**
	 * Validates whether a string is a valid ARN for the es_role resource.
	 */
	static isValidEsRoleArn(arn: string): boolean {
		return EsRoleArnRegex.test(arn);
	}

	/**
	 * Parses a es_role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEsRoleArn(arn: string): { partition: string; account: string } {
		const match = EsRoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid es_role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the opensearchservice_role resource.
	 */
	static opensearchserviceRole(props: {
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`;
	}

	/**
	 * Validates whether a string is a valid ARN for the opensearchservice_role resource.
	 */
	static isValidOpensearchserviceRoleArn(arn: string): boolean {
		return OpensearchserviceRoleArnRegex.test(arn);
	}

	/**
	 * Parses a opensearchservice_role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpensearchserviceRoleArn(arn: string): {
		partition: string;
		account: string;
	} {
		const match = OpensearchserviceRoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid opensearchservice_role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for es.
 */
export class EsOperations {
	/** IAM actions required for the AcceptInboundCrossClusterSearchConnection API call. */
	static readonly ACCEPT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION: string[] = [
		"es:AcceptInboundConnection",
		"es:AcceptInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["es:AddTags"];
	/** IAM actions required for the AssociatePackage API call. */
	static readonly ASSOCIATE_PACKAGE: string[] = [
		"es:AssociatePackage",
		"iam:PassRole",
	];
	/** IAM actions required for the AuthorizeVpcEndpointAccess API call. */
	static readonly AUTHORIZE_VPC_ENDPOINT_ACCESS: string[] = [
		"es:AuthorizeVpcEndpointAccess",
	];
	/** IAM actions required for the CancelDomainConfigChange API call. */
	static readonly CANCEL_DOMAIN_CONFIG_CHANGE: string[] = [
		"es:CancelDomainConfigChange",
	];
	/** IAM actions required for the CancelElasticsearchServiceSoftwareUpdate API call. */
	static readonly CANCEL_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE: string[] = [
		"es:CancelElasticsearchServiceSoftwareUpdate",
		"es:CancelServiceSoftwareUpdate",
	];
	/** IAM actions required for the CreateElasticsearchDomain API call. */
	static readonly CREATE_ELASTICSEARCH_DOMAIN: string[] = [
		"es:AddTags",
		"es:CreateDomain",
		"es:CreateElasticsearchDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOutboundCrossClusterSearchConnection API call. */
	static readonly CREATE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION: string[] = [
		"es:CreateOutboundConnection",
		"es:CreateOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CREATE_PACKAGE: string[] = ["es:CreatePackage"];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CREATE_VPC_ENDPOINT: string[] = ["es:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteElasticsearchDomain API call. */
	static readonly DELETE_ELASTICSEARCH_DOMAIN: string[] = [
		"es:DeleteDomain",
		"es:DeleteElasticsearchDomain",
	];
	/** IAM actions required for the DeleteElasticsearchServiceRole API call. */
	static readonly DELETE_ELASTICSEARCH_SERVICE_ROLE: string[] = [
		"es:DeleteElasticsearchServiceRole",
	];
	/** IAM actions required for the DeleteInboundCrossClusterSearchConnection API call. */
	static readonly DELETE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION: string[] = [
		"es:DeleteInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeleteOutboundCrossClusterSearchConnection API call. */
	static readonly DELETE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTION: string[] = [
		"es:DeleteOutboundConnection",
		"es:DeleteOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DELETE_PACKAGE: string[] = ["es:DeletePackage"];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DELETE_VPC_ENDPOINT: string[] = ["es:DeleteVpcEndpoint"];
	/** IAM actions required for the DescribeDomainAutoTunes API call. */
	static readonly DESCRIBE_DOMAIN_AUTO_TUNES: string[] = [
		"es:DescribeDomainAutoTunes",
	];
	/** IAM actions required for the DescribeDomainChangeProgress API call. */
	static readonly DESCRIBE_DOMAIN_CHANGE_PROGRESS: string[] = [
		"es:DescribeDomainChangeProgress",
	];
	/** IAM actions required for the DescribeElasticsearchDomain API call. */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAIN: string[] = [
		"es:DescribeDomain",
		"es:DescribeElasticsearchDomain",
	];
	/** IAM actions required for the DescribeElasticsearchDomainConfig API call. */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAIN_CONFIG: string[] = [
		"es:DescribeDomainConfig",
		"es:DescribeElasticsearchDomainConfig",
	];
	/** IAM actions required for the DescribeElasticsearchDomains API call. */
	static readonly DESCRIBE_ELASTICSEARCH_DOMAINS: string[] = [
		"es:DescribeDomains",
		"es:DescribeElasticsearchDomains",
	];
	/** IAM actions required for the DescribeElasticsearchInstanceTypeLimits API call. */
	static readonly DESCRIBE_ELASTICSEARCH_INSTANCE_TYPE_LIMITS: string[] = [
		"es:DescribeElasticsearchInstanceTypeLimits",
		"es:DescribeInstanceTypeLimits",
	];
	/** IAM actions required for the DescribeInboundCrossClusterSearchConnections API call. */
	static readonly DESCRIBE_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS: string[] =
		[
			"es:DescribeInboundConnections",
			"es:DescribeInboundCrossClusterSearchConnections",
		];
	/** IAM actions required for the DescribeOutboundCrossClusterSearchConnections API call. */
	static readonly DESCRIBE_OUTBOUND_CROSS_CLUSTER_SEARCH_CONNECTIONS: string[] =
		[
			"es:DescribeOutboundConnections",
			"es:DescribeOutboundCrossClusterSearchConnections",
		];
	/** IAM actions required for the DescribePackages API call. */
	static readonly DESCRIBE_PACKAGES: string[] = ["es:DescribePackages"];
	/** IAM actions required for the DescribeReservedElasticsearchInstanceOfferings API call. */
	static readonly DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERINGS: string[] =
		[
			"es:DescribeReservedElasticsearchInstanceOfferings",
			"es:DescribeReservedInstanceOfferings",
		];
	/** IAM actions required for the DescribeReservedElasticsearchInstances API call. */
	static readonly DESCRIBE_RESERVED_ELASTICSEARCH_INSTANCES: string[] = [
		"es:DescribeReservedElasticsearchInstances",
		"es:DescribeReservedInstances",
	];
	/** IAM actions required for the DescribeVpcEndpoints API call. */
	static readonly DESCRIBE_VPC_ENDPOINTS: string[] = [
		"es:DescribeVpcEndpoints",
	];
	/** IAM actions required for the DissociatePackage API call. */
	static readonly DISSOCIATE_PACKAGE: string[] = ["es:DissociatePackage"];
	/** IAM actions required for the GetCompatibleElasticsearchVersions API call. */
	static readonly GET_COMPATIBLE_ELASTICSEARCH_VERSIONS: string[] = [
		"es:GetCompatibleElasticsearchVersions",
		"es:GetCompatibleVersions",
	];
	/** IAM actions required for the GetPackageVersionHistory API call. */
	static readonly GET_PACKAGE_VERSION_HISTORY: string[] = [
		"es:GetPackageVersionHistory",
	];
	/** IAM actions required for the GetUpgradeHistory API call. */
	static readonly GET_UPGRADE_HISTORY: string[] = ["es:GetUpgradeHistory"];
	/** IAM actions required for the GetUpgradeStatus API call. */
	static readonly GET_UPGRADE_STATUS: string[] = ["es:GetUpgradeStatus"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly LIST_DOMAIN_NAMES: string[] = ["es:ListDomainNames"];
	/** IAM actions required for the ListDomainsForPackage API call. */
	static readonly LIST_DOMAINS_FOR_PACKAGE: string[] = [
		"es:ListDomainsForPackage",
	];
	/** IAM actions required for the ListElasticsearchInstanceTypes API call. */
	static readonly LIST_ELASTICSEARCH_INSTANCE_TYPES: string[] = [
		"es:ListElasticsearchInstanceTypes",
	];
	/** IAM actions required for the ListElasticsearchVersions API call. */
	static readonly LIST_ELASTICSEARCH_VERSIONS: string[] = [
		"es:ListElasticsearchVersions",
		"es:ListVersions",
	];
	/** IAM actions required for the ListPackagesForDomain API call. */
	static readonly LIST_PACKAGES_FOR_DOMAIN: string[] = [
		"es:ListPackagesForDomain",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["es:ListTags"];
	/** IAM actions required for the ListVpcEndpointAccess API call. */
	static readonly LIST_VPC_ENDPOINT_ACCESS: string[] = [
		"es:ListVpcEndpointAccess",
	];
	/** IAM actions required for the ListVpcEndpoints API call. */
	static readonly LIST_VPC_ENDPOINTS: string[] = ["es:ListVpcEndpoints"];
	/** IAM actions required for the ListVpcEndpointsForDomain API call. */
	static readonly LIST_VPC_ENDPOINTS_FOR_DOMAIN: string[] = [
		"es:ListVpcEndpointsForDomain",
	];
	/** IAM actions required for the PurchaseReservedElasticsearchInstanceOffering API call. */
	static readonly PURCHASE_RESERVED_ELASTICSEARCH_INSTANCE_OFFERING: string[] =
		[
			"es:PurchaseReservedElasticsearchInstanceOffering",
			"es:PurchaseReservedInstanceOffering",
		];
	/** IAM actions required for the RejectInboundCrossClusterSearchConnection API call. */
	static readonly REJECT_INBOUND_CROSS_CLUSTER_SEARCH_CONNECTION: string[] = [
		"es:RejectInboundConnection",
		"es:RejectInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["es:RemoveTags"];
	/** IAM actions required for the RevokeVpcEndpointAccess API call. */
	static readonly REVOKE_VPC_ENDPOINT_ACCESS: string[] = [
		"es:RevokeVpcEndpointAccess",
	];
	/** IAM actions required for the StartElasticsearchServiceSoftwareUpdate API call. */
	static readonly START_ELASTICSEARCH_SERVICE_SOFTWARE_UPDATE: string[] = [
		"es:StartElasticsearchServiceSoftwareUpdate",
		"es:StartServiceSoftwareUpdate",
	];
	/** IAM actions required for the UpdateElasticsearchDomainConfig API call. */
	static readonly UPDATE_ELASTICSEARCH_DOMAIN_CONFIG: string[] = [
		"iam:PassRole",
		"es:UpdateDomainConfig",
		"es:UpdateElasticsearchDomainConfig",
	];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UPDATE_PACKAGE: string[] = ["es:UpdatePackage"];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UPDATE_VPC_ENDPOINT: string[] = ["es:UpdateVpcEndpoint"];
	/** IAM actions required for the UpgradeElasticsearchDomain API call. */
	static readonly UPGRADE_ELASTICSEARCH_DOMAIN: string[] = [
		"es:UpgradeDomain",
		"es:UpgradeElasticsearchDomain",
	];
}

/**
 * Condition key constants and builders for es.
 */
export class EsConditions {
	/** Condition keys applicable to the AddDirectQueryDataSource action. */
	static readonly ADD_DIRECT_QUERY_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateElasticsearchDomain action. */
	static readonly CREATE_ELASTICSEARCH_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
