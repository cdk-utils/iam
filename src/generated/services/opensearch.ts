// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/opensearch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the opensearch service.
 */
export class OpenSearchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "opensearch";

	/** [PermissionManagement] opensearch:ApplicationAccessAll */
	static readonly APPLICATION_ACCESS_ALL = "opensearch:ApplicationAccessAll";
	/** [Write] opensearch:CancelAutoOptimizeJob */
	static readonly CANCEL_AUTO_OPTIMIZE_JOB = "opensearch:CancelAutoOptimizeJob";
	/** [Write] opensearch:CancelDirectQuery */
	static readonly CANCEL_DIRECT_QUERY = "opensearch:CancelDirectQuery";
	/** [Write] opensearch:DeleteAutoOptimizeJob */
	static readonly DELETE_AUTO_OPTIMIZE_JOB = "opensearch:DeleteAutoOptimizeJob";
	/** [Read] opensearch:GetAutoOptimizeJob */
	static readonly GET_AUTO_OPTIMIZE_JOB = "opensearch:GetAutoOptimizeJob";
	/** [Read] opensearch:GetDirectQuery */
	static readonly GET_DIRECT_QUERY = "opensearch:GetDirectQuery";
	/** [Read] opensearch:GetDirectQueryResult */
	static readonly GET_DIRECT_QUERY_RESULT = "opensearch:GetDirectQueryResult";
	/** [List] opensearch:ListAutoOptimizeJobs */
	static readonly LIST_AUTO_OPTIMIZE_JOBS = "opensearch:ListAutoOptimizeJobs";
	/** [Write] opensearch:StartDirectQuery */
	static readonly START_DIRECT_QUERY = "opensearch:StartDirectQuery";
	/** [Write] opensearch:SubmitAutoOptimizeJob */
	static readonly SUBMIT_AUTO_OPTIMIZE_JOB = "opensearch:SubmitAutoOptimizeJob";
	/** [PermissionManagement] opensearch:ViewLoginPage */
	static readonly VIEW_LOGIN_PAGE = "opensearch:ViewLoginPage";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OpenSearchActions.GET_AUTO_OPTIMIZE_JOB,
		OpenSearchActions.GET_DIRECT_QUERY,
		OpenSearchActions.GET_DIRECT_QUERY_RESULT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OpenSearchActions.CANCEL_AUTO_OPTIMIZE_JOB,
		OpenSearchActions.CANCEL_DIRECT_QUERY,
		OpenSearchActions.DELETE_AUTO_OPTIMIZE_JOB,
		OpenSearchActions.START_DIRECT_QUERY,
		OpenSearchActions.SUBMIT_AUTO_OPTIMIZE_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OpenSearchActions.LIST_AUTO_OPTIMIZE_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		OpenSearchActions.APPLICATION_ACCESS_ALL,
		OpenSearchActions.VIEW_LOGIN_PAGE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):application/(?<appId>[^:/?]+)$",
);
const DatasourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):datasource/(?<dataSourceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for opensearch resources.
 */
export class OpenSearchResources {
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
}

/**
 * API operation to required IAM actions mapping for opensearch.
 */
export class OpenSearchOperations {
	/** IAM actions required for the AcceptInboundConnection API call. */
	static readonly ACCEPT_INBOUND_CONNECTION: string[] = [
		"es:AcceptInboundConnection",
		"es:AcceptInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the AddDataSource API call. */
	static readonly ADD_DATA_SOURCE: string[] = [
		"es:AddDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the AddDirectQueryDataSource API call. */
	static readonly ADD_DIRECT_QUERY_DATA_SOURCE: string[] = [
		"es:AddDirectQueryDataSource",
		"es:AddTags",
		"iam:PassRole",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["es:AddTags"];
	/** IAM actions required for the AssociatePackage API call. */
	static readonly ASSOCIATE_PACKAGE: string[] = ["es:AssociatePackage"];
	/** IAM actions required for the AssociatePackages API call. */
	static readonly ASSOCIATE_PACKAGES: string[] = ["es:AssociatePackages"];
	/** IAM actions required for the AttachDataSource API call. */
	static readonly ATTACH_DATA_SOURCE: string[] = ["es:AttachDataSource"];
	/** IAM actions required for the AuthorizeVpcEndpointAccess API call. */
	static readonly AUTHORIZE_VPC_ENDPOINT_ACCESS: string[] = [
		"es:AuthorizeVpcEndpointAccess",
	];
	/** IAM actions required for the CancelDomainConfigChange API call. */
	static readonly CANCEL_DOMAIN_CONFIG_CHANGE: string[] = [
		"es:CancelDomainConfigChange",
	];
	/** IAM actions required for the CancelServiceSoftwareUpdate API call. */
	static readonly CANCEL_SERVICE_SOFTWARE_UPDATE: string[] = [
		"es:CancelElasticsearchServiceSoftwareUpdate",
		"es:CancelServiceSoftwareUpdate",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"es:AddTags",
		"es:CreateApplication",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"es:AddTags",
		"es:CreateDomain",
		"es:CreateElasticsearchDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = ["es:CreateIndex"];
	/** IAM actions required for the CreateOutboundConnection API call. */
	static readonly CREATE_OUTBOUND_CONNECTION: string[] = [
		"es:CreateOutboundConnection",
		"es:CreateOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CREATE_PACKAGE: string[] = ["es:CreatePackage"];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CREATE_VPC_ENDPOINT: string[] = ["es:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = ["es:DeleteApplication"];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["es:DeleteDataSource"];
	/** IAM actions required for the DeleteDirectQueryDataSource API call. */
	static readonly DELETE_DIRECT_QUERY_DATA_SOURCE: string[] = [
		"es:DeleteDirectQueryDataSource",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = [
		"es:DeleteDomain",
		"es:DeleteElasticsearchDomain",
	];
	/** IAM actions required for the DeleteInboundConnection API call. */
	static readonly DELETE_INBOUND_CONNECTION: string[] = [
		"es:DeleteInboundConnection",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = ["es:DeleteIndex"];
	/** IAM actions required for the DeleteOutboundConnection API call. */
	static readonly DELETE_OUTBOUND_CONNECTION: string[] = [
		"es:DeleteOutboundConnection",
		"es:DeleteOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DELETE_PACKAGE: string[] = ["es:DeletePackage"];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DELETE_VPC_ENDPOINT: string[] = ["es:DeleteVpcEndpoint"];
	/** IAM actions required for the DeregisterCapability API call. */
	static readonly DEREGISTER_CAPABILITY: string[] = ["es:DeregisterCapability"];
	/** IAM actions required for the DescribeDataSourceAttachment API call. */
	static readonly DESCRIBE_DATA_SOURCE_ATTACHMENT: string[] = [
		"es:DescribeDataSourceAttachment",
	];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DESCRIBE_DOMAIN: string[] = [
		"es:DescribeDomain",
		"es:DescribeElasticsearchDomain",
	];
	/** IAM actions required for the DescribeDomainAutoTunes API call. */
	static readonly DESCRIBE_DOMAIN_AUTO_TUNES: string[] = [
		"es:DescribeDomainAutoTunes",
	];
	/** IAM actions required for the DescribeDomainChangeProgress API call. */
	static readonly DESCRIBE_DOMAIN_CHANGE_PROGRESS: string[] = [
		"es:DescribeDomainChangeProgress",
	];
	/** IAM actions required for the DescribeDomainConfig API call. */
	static readonly DESCRIBE_DOMAIN_CONFIG: string[] = [
		"es:DescribeDomainConfig",
		"es:DescribeElasticsearchDomainConfig",
	];
	/** IAM actions required for the DescribeDomainHealth API call. */
	static readonly DESCRIBE_DOMAIN_HEALTH: string[] = [
		"es:DescribeDomainHealth",
	];
	/** IAM actions required for the DescribeDomainNodes API call. */
	static readonly DESCRIBE_DOMAIN_NODES: string[] = ["es:DescribeDomainNodes"];
	/** IAM actions required for the DescribeDomains API call. */
	static readonly DESCRIBE_DOMAINS: string[] = [
		"es:DescribeDomains",
		"es:DescribeElasticsearchDomains",
	];
	/** IAM actions required for the DescribeDryRunProgress API call. */
	static readonly DESCRIBE_DRY_RUN_PROGRESS: string[] = [
		"es:DescribeDryRunProgress",
	];
	/** IAM actions required for the DescribeInboundConnections API call. */
	static readonly DESCRIBE_INBOUND_CONNECTIONS: string[] = [
		"es:DescribeInboundConnections",
		"es:DescribeInboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribeInsightDetails API call. */
	static readonly DESCRIBE_INSIGHT_DETAILS: string[] = [
		"es:DescribeInsightDetails",
	];
	/** IAM actions required for the DescribeInstanceTypeLimits API call. */
	static readonly DESCRIBE_INSTANCE_TYPE_LIMITS: string[] = [
		"es:DescribeElasticsearchInstanceTypeLimits",
		"es:DescribeInstanceTypeLimits",
	];
	/** IAM actions required for the DescribeOutboundConnections API call. */
	static readonly DESCRIBE_OUTBOUND_CONNECTIONS: string[] = [
		"es:DescribeOutboundConnections",
		"es:DescribeOutboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribePackages API call. */
	static readonly DESCRIBE_PACKAGES: string[] = ["es:DescribePackages"];
	/** IAM actions required for the DescribeReservedInstanceOfferings API call. */
	static readonly DESCRIBE_RESERVED_INSTANCE_OFFERINGS: string[] = [
		"es:DescribeReservedElasticsearchInstanceOfferings",
		"es:DescribeReservedInstanceOfferings",
	];
	/** IAM actions required for the DescribeReservedInstances API call. */
	static readonly DESCRIBE_RESERVED_INSTANCES: string[] = [
		"es:DescribeReservedElasticsearchInstances",
		"es:DescribeReservedInstances",
	];
	/** IAM actions required for the DescribeVpcEndpoints API call. */
	static readonly DESCRIBE_VPC_ENDPOINTS: string[] = [
		"es:DescribeVpcEndpoints",
	];
	/** IAM actions required for the DetachDataSource API call. */
	static readonly DETACH_DATA_SOURCE: string[] = ["es:DetachDataSource"];
	/** IAM actions required for the DissociatePackage API call. */
	static readonly DISSOCIATE_PACKAGE: string[] = ["es:DissociatePackage"];
	/** IAM actions required for the DissociatePackages API call. */
	static readonly DISSOCIATE_PACKAGES: string[] = ["es:DissociatePackages"];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["es:GetApplication"];
	/** IAM actions required for the GetCapability API call. */
	static readonly GET_CAPABILITY: string[] = ["es:GetCapability"];
	/** IAM actions required for the GetCompatibleVersions API call. */
	static readonly GET_COMPATIBLE_VERSIONS: string[] = [
		"es:GetCompatibleElasticsearchVersions",
		"es:GetCompatibleVersions",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["es:GetDataSource"];
	/** IAM actions required for the GetDefaultApplicationSetting API call. */
	static readonly GET_DEFAULT_APPLICATION_SETTING: string[] = [
		"es:GetDefaultApplicationSetting",
	];
	/** IAM actions required for the GetDirectQueryDataSource API call. */
	static readonly GET_DIRECT_QUERY_DATA_SOURCE: string[] = [
		"es:GetDirectQueryDataSource",
	];
	/** IAM actions required for the GetDomainMaintenanceStatus API call. */
	static readonly GET_DOMAIN_MAINTENANCE_STATUS: string[] = [
		"es:GetDomainMaintenanceStatus",
	];
	/** IAM actions required for the GetIndex API call. */
	static readonly GET_INDEX: string[] = ["es:GetIndex"];
	/** IAM actions required for the GetMigration API call. */
	static readonly GET_MIGRATION: string[] = ["es:GetMigration"];
	/** IAM actions required for the GetPackageVersionHistory API call. */
	static readonly GET_PACKAGE_VERSION_HISTORY: string[] = [
		"es:GetPackageVersionHistory",
	];
	/** IAM actions required for the GetUpgradeHistory API call. */
	static readonly GET_UPGRADE_HISTORY: string[] = ["es:GetUpgradeHistory"];
	/** IAM actions required for the GetUpgradeStatus API call. */
	static readonly GET_UPGRADE_STATUS: string[] = ["es:GetUpgradeStatus"];
	/** IAM actions required for the InsightFeedback API call. */
	static readonly INSIGHT_FEEDBACK: string[] = ["es:InsightFeedback"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["es:ListApplications"];
	/** IAM actions required for the ListDataSourceAttachments API call. */
	static readonly LIST_DATA_SOURCE_ATTACHMENTS: string[] = [
		"es:ListDataSourceAttachments",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["es:ListDataSources"];
	/** IAM actions required for the ListDirectQueryDataSources API call. */
	static readonly LIST_DIRECT_QUERY_DATA_SOURCES: string[] = [
		"es:ListDirectQueryDataSources",
	];
	/** IAM actions required for the ListDomainMaintenances API call. */
	static readonly LIST_DOMAIN_MAINTENANCES: string[] = [
		"es:ListDomainMaintenances",
	];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly LIST_DOMAIN_NAMES: string[] = ["es:ListDomainNames"];
	/** IAM actions required for the ListDomainsForPackage API call. */
	static readonly LIST_DOMAINS_FOR_PACKAGE: string[] = [
		"es:ListDomainsForPackage",
	];
	/** IAM actions required for the ListInsights API call. */
	static readonly LIST_INSIGHTS: string[] = ["es:ListInsights"];
	/** IAM actions required for the ListInstanceTypeDetails API call. */
	static readonly LIST_INSTANCE_TYPE_DETAILS: string[] = [
		"es:ListElasticsearchInstanceTypeDetails",
		"es:ListInstanceTypeDetails",
	];
	/** IAM actions required for the ListMigrations API call. */
	static readonly LIST_MIGRATIONS: string[] = ["es:ListMigrations"];
	/** IAM actions required for the ListPackagesForDomain API call. */
	static readonly LIST_PACKAGES_FOR_DOMAIN: string[] = [
		"es:ListPackagesForDomain",
	];
	/** IAM actions required for the ListScheduledActions API call. */
	static readonly LIST_SCHEDULED_ACTIONS: string[] = [
		"es:ListScheduledActions",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["es:ListTags"];
	/** IAM actions required for the ListVersions API call. */
	static readonly LIST_VERSIONS: string[] = [
		"es:ListElasticsearchVersions",
		"es:ListVersions",
	];
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
	/** IAM actions required for the PurchaseReservedInstanceOffering API call. */
	static readonly PURCHASE_RESERVED_INSTANCE_OFFERING: string[] = [
		"es:PurchaseReservedElasticsearchInstanceOffering",
		"es:PurchaseReservedInstanceOffering",
	];
	/** IAM actions required for the PutDefaultApplicationSetting API call. */
	static readonly PUT_DEFAULT_APPLICATION_SETTING: string[] = [
		"es:PutDefaultApplicationSetting",
	];
	/** IAM actions required for the RegisterCapability API call. */
	static readonly REGISTER_CAPABILITY: string[] = ["es:RegisterCapability"];
	/** IAM actions required for the RejectInboundConnection API call. */
	static readonly REJECT_INBOUND_CONNECTION: string[] = [
		"es:RejectInboundConnection",
		"es:RejectInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["es:RemoveTags"];
	/** IAM actions required for the RevokeVpcEndpointAccess API call. */
	static readonly REVOKE_VPC_ENDPOINT_ACCESS: string[] = [
		"es:RevokeVpcEndpointAccess",
	];
	/** IAM actions required for the RollbackServiceSoftwareUpdate API call. */
	static readonly ROLLBACK_SERVICE_SOFTWARE_UPDATE: string[] = [
		"es:RollbackElasticsearchServiceSoftwareUpdate",
		"es:RollbackServiceSoftwareUpdate",
	];
	/** IAM actions required for the StartDomainMaintenance API call. */
	static readonly START_DOMAIN_MAINTENANCE: string[] = [
		"es:StartDomainMaintenance",
	];
	/** IAM actions required for the StartMigration API call. */
	static readonly START_MIGRATION: string[] = ["es:StartMigration"];
	/** IAM actions required for the StartServiceSoftwareUpdate API call. */
	static readonly START_SERVICE_SOFTWARE_UPDATE: string[] = [
		"es:StartElasticsearchServiceSoftwareUpdate",
		"es:StartServiceSoftwareUpdate",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = ["es:UpdateApplication"];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"es:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDirectQueryDataSource API call. */
	static readonly UPDATE_DIRECT_QUERY_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"es:UpdateDirectQueryDataSource",
	];
	/** IAM actions required for the UpdateDomainConfig API call. */
	static readonly UPDATE_DOMAIN_CONFIG: string[] = [
		"iam:PassRole",
		"es:UpdateDomainConfig",
		"es:UpdateElasticsearchDomainConfig",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UPDATE_INDEX: string[] = ["es:UpdateIndex"];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UPDATE_PACKAGE: string[] = ["es:UpdatePackage"];
	/** IAM actions required for the UpdatePackageScope API call. */
	static readonly UPDATE_PACKAGE_SCOPE: string[] = ["es:UpdatePackageScope"];
	/** IAM actions required for the UpdateScheduledAction API call. */
	static readonly UPDATE_SCHEDULED_ACTION: string[] = [
		"es:UpdateScheduledAction",
	];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UPDATE_VPC_ENDPOINT: string[] = ["es:UpdateVpcEndpoint"];
	/** IAM actions required for the UpgradeDomain API call. */
	static readonly UPGRADE_DOMAIN: string[] = [
		"es:UpgradeDomain",
		"es:UpgradeElasticsearchDomain",
	];
}
