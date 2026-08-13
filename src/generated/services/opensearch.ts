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
	static readonly ApplicationAccessAll = "opensearch:ApplicationAccessAll";
	/** [Write] opensearch:CancelAutoOptimizeJob */
	static readonly CancelAutoOptimizeJob = "opensearch:CancelAutoOptimizeJob";
	/** [Write] opensearch:CancelDirectQuery */
	static readonly CancelDirectQuery = "opensearch:CancelDirectQuery";
	/** [Write] opensearch:DeleteAutoOptimizeJob */
	static readonly DeleteAutoOptimizeJob = "opensearch:DeleteAutoOptimizeJob";
	/** [Read] opensearch:GetAutoOptimizeJob */
	static readonly actionGetAutoOptimizeJob = "opensearch:GetAutoOptimizeJob";
	/** [Read] opensearch:GetDirectQuery */
	static readonly actionGetDirectQuery = "opensearch:GetDirectQuery";
	/** [Read] opensearch:GetDirectQueryResult */
	static readonly actionGetDirectQueryResult =
		"opensearch:GetDirectQueryResult";
	/** [List] opensearch:ListAutoOptimizeJobs */
	static readonly ListAutoOptimizeJobs = "opensearch:ListAutoOptimizeJobs";
	/** [Write] opensearch:StartDirectQuery */
	static readonly StartDirectQuery = "opensearch:StartDirectQuery";
	/** [Write] opensearch:SubmitAutoOptimizeJob */
	static readonly SubmitAutoOptimizeJob = "opensearch:SubmitAutoOptimizeJob";
	/** [PermissionManagement] opensearch:ViewLoginPage */
	static readonly ViewLoginPage = "opensearch:ViewLoginPage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OpenSearchActions.actionGetAutoOptimizeJob,
		OpenSearchActions.actionGetDirectQuery,
		OpenSearchActions.actionGetDirectQueryResult,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OpenSearchActions.CancelAutoOptimizeJob,
		OpenSearchActions.CancelDirectQuery,
		OpenSearchActions.DeleteAutoOptimizeJob,
		OpenSearchActions.StartDirectQuery,
		OpenSearchActions.SubmitAutoOptimizeJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OpenSearchActions.ListAutoOptimizeJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		OpenSearchActions.ApplicationAccessAll,
		OpenSearchActions.ViewLoginPage,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a application ARN.
 */
export interface OpenSearchApplicationArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface OpenSearchApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a datasource ARN.
 */
export interface OpenSearchDatasourceArnProps {
	/** The DataSourceName component of the ARN. */
	readonly dataSourceName: string;
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
export interface OpenSearchDatasourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSourceName component. */
	readonly dataSourceName: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):application\/(?<appId>[^:/?]+)$/;
const DatasourceArnRegex =
	/^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):datasource\/(?<dataSourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for opensearch resources.
 */
export class OpenSearchResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: OpenSearchApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): OpenSearchApplicationArnComponents {
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
	static datasource(props: OpenSearchDatasourceArnProps): string {
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
	static parseDatasourceArn(arn: string): OpenSearchDatasourceArnComponents {
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
	static readonly AcceptInboundConnection: string[] = [
		"es:AcceptInboundConnection",
		"es:AcceptInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the AddDataSource API call. */
	static readonly AddDataSource: string[] = [
		"es:AddDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the AddDirectQueryDataSource API call. */
	static readonly AddDirectQueryDataSource: string[] = [
		"es:AddDirectQueryDataSource",
		"es:AddTags",
		"iam:PassRole",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["es:AddTags"];
	/** IAM actions required for the AssociatePackage API call. */
	static readonly AssociatePackage: string[] = ["es:AssociatePackage"];
	/** IAM actions required for the AssociatePackages API call. */
	static readonly AssociatePackages: string[] = ["es:AssociatePackages"];
	/** IAM actions required for the AttachDataSource API call. */
	static readonly AttachDataSource: string[] = ["es:AttachDataSource"];
	/** IAM actions required for the AuthorizeVpcEndpointAccess API call. */
	static readonly AuthorizeVpcEndpointAccess: string[] = [
		"es:AuthorizeVpcEndpointAccess",
	];
	/** IAM actions required for the CancelDomainConfigChange API call. */
	static readonly CancelDomainConfigChange: string[] = [
		"es:CancelDomainConfigChange",
	];
	/** IAM actions required for the CancelServiceSoftwareUpdate API call. */
	static readonly CancelServiceSoftwareUpdate: string[] = [
		"es:CancelElasticsearchServiceSoftwareUpdate",
		"es:CancelServiceSoftwareUpdate",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"es:AddTags",
		"es:CreateApplication",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"es:AddTags",
		"es:CreateDomain",
		"es:CreateElasticsearchDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = ["es:CreateIndex"];
	/** IAM actions required for the CreateOutboundConnection API call. */
	static readonly CreateOutboundConnection: string[] = [
		"es:CreateOutboundConnection",
		"es:CreateOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CreatePackage: string[] = ["es:CreatePackage"];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CreateVpcEndpoint: string[] = ["es:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["es:DeleteApplication"];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = ["es:DeleteDataSource"];
	/** IAM actions required for the DeleteDirectQueryDataSource API call. */
	static readonly DeleteDirectQueryDataSource: string[] = [
		"es:DeleteDirectQueryDataSource",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = [
		"es:DeleteDomain",
		"es:DeleteElasticsearchDomain",
	];
	/** IAM actions required for the DeleteInboundConnection API call. */
	static readonly DeleteInboundConnection: string[] = [
		"es:DeleteInboundConnection",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = ["es:DeleteIndex"];
	/** IAM actions required for the DeleteOutboundConnection API call. */
	static readonly DeleteOutboundConnection: string[] = [
		"es:DeleteOutboundConnection",
		"es:DeleteOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DeletePackage: string[] = ["es:DeletePackage"];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DeleteVpcEndpoint: string[] = ["es:DeleteVpcEndpoint"];
	/** IAM actions required for the DeregisterCapability API call. */
	static readonly DeregisterCapability: string[] = ["es:DeregisterCapability"];
	/** IAM actions required for the DescribeDataSourceAttachment API call. */
	static readonly DescribeDataSourceAttachment: string[] = [
		"es:DescribeDataSourceAttachment",
	];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DescribeDomain: string[] = [
		"es:DescribeDomain",
		"es:DescribeElasticsearchDomain",
	];
	/** IAM actions required for the DescribeDomainAutoTunes API call. */
	static readonly DescribeDomainAutoTunes: string[] = [
		"es:DescribeDomainAutoTunes",
	];
	/** IAM actions required for the DescribeDomainChangeProgress API call. */
	static readonly DescribeDomainChangeProgress: string[] = [
		"es:DescribeDomainChangeProgress",
	];
	/** IAM actions required for the DescribeDomainConfig API call. */
	static readonly DescribeDomainConfig: string[] = [
		"es:DescribeDomainConfig",
		"es:DescribeElasticsearchDomainConfig",
	];
	/** IAM actions required for the DescribeDomainHealth API call. */
	static readonly DescribeDomainHealth: string[] = ["es:DescribeDomainHealth"];
	/** IAM actions required for the DescribeDomainNodes API call. */
	static readonly DescribeDomainNodes: string[] = ["es:DescribeDomainNodes"];
	/** IAM actions required for the DescribeDomains API call. */
	static readonly DescribeDomains: string[] = [
		"es:DescribeDomains",
		"es:DescribeElasticsearchDomains",
	];
	/** IAM actions required for the DescribeDryRunProgress API call. */
	static readonly DescribeDryRunProgress: string[] = [
		"es:DescribeDryRunProgress",
	];
	/** IAM actions required for the DescribeInboundConnections API call. */
	static readonly DescribeInboundConnections: string[] = [
		"es:DescribeInboundConnections",
		"es:DescribeInboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribeInsightDetails API call. */
	static readonly DescribeInsightDetails: string[] = [
		"es:DescribeInsightDetails",
	];
	/** IAM actions required for the DescribeInstanceTypeLimits API call. */
	static readonly DescribeInstanceTypeLimits: string[] = [
		"es:DescribeElasticsearchInstanceTypeLimits",
		"es:DescribeInstanceTypeLimits",
	];
	/** IAM actions required for the DescribeOutboundConnections API call. */
	static readonly DescribeOutboundConnections: string[] = [
		"es:DescribeOutboundConnections",
		"es:DescribeOutboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribePackages API call. */
	static readonly DescribePackages: string[] = ["es:DescribePackages"];
	/** IAM actions required for the DescribeReservedInstanceOfferings API call. */
	static readonly DescribeReservedInstanceOfferings: string[] = [
		"es:DescribeReservedElasticsearchInstanceOfferings",
		"es:DescribeReservedInstanceOfferings",
	];
	/** IAM actions required for the DescribeReservedInstances API call. */
	static readonly DescribeReservedInstances: string[] = [
		"es:DescribeReservedElasticsearchInstances",
		"es:DescribeReservedInstances",
	];
	/** IAM actions required for the DescribeVpcEndpoints API call. */
	static readonly DescribeVpcEndpoints: string[] = ["es:DescribeVpcEndpoints"];
	/** IAM actions required for the DetachDataSource API call. */
	static readonly DetachDataSource: string[] = ["es:DetachDataSource"];
	/** IAM actions required for the DissociatePackage API call. */
	static readonly DissociatePackage: string[] = ["es:DissociatePackage"];
	/** IAM actions required for the DissociatePackages API call. */
	static readonly DissociatePackages: string[] = ["es:DissociatePackages"];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["es:GetApplication"];
	/** IAM actions required for the GetCapability API call. */
	static readonly opGetCapability: string[] = ["es:GetCapability"];
	/** IAM actions required for the GetCompatibleVersions API call. */
	static readonly opGetCompatibleVersions: string[] = [
		"es:GetCompatibleElasticsearchVersions",
		"es:GetCompatibleVersions",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly opGetDataSource: string[] = ["es:GetDataSource"];
	/** IAM actions required for the GetDefaultApplicationSetting API call. */
	static readonly opGetDefaultApplicationSetting: string[] = [
		"es:GetDefaultApplicationSetting",
	];
	/** IAM actions required for the GetDirectQueryDataSource API call. */
	static readonly opGetDirectQueryDataSource: string[] = [
		"es:GetDirectQueryDataSource",
	];
	/** IAM actions required for the GetDomainMaintenanceStatus API call. */
	static readonly opGetDomainMaintenanceStatus: string[] = [
		"es:GetDomainMaintenanceStatus",
	];
	/** IAM actions required for the GetIndex API call. */
	static readonly opGetIndex: string[] = ["es:GetIndex"];
	/** IAM actions required for the GetMigration API call. */
	static readonly opGetMigration: string[] = ["es:GetMigration"];
	/** IAM actions required for the GetPackageVersionHistory API call. */
	static readonly opGetPackageVersionHistory: string[] = [
		"es:GetPackageVersionHistory",
	];
	/** IAM actions required for the GetUpgradeHistory API call. */
	static readonly opGetUpgradeHistory: string[] = ["es:GetUpgradeHistory"];
	/** IAM actions required for the GetUpgradeStatus API call. */
	static readonly opGetUpgradeStatus: string[] = ["es:GetUpgradeStatus"];
	/** IAM actions required for the InsightFeedback API call. */
	static readonly InsightFeedback: string[] = ["es:InsightFeedback"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["es:ListApplications"];
	/** IAM actions required for the ListDataSourceAttachments API call. */
	static readonly ListDataSourceAttachments: string[] = [
		"es:ListDataSourceAttachments",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly ListDataSources: string[] = ["es:ListDataSources"];
	/** IAM actions required for the ListDirectQueryDataSources API call. */
	static readonly ListDirectQueryDataSources: string[] = [
		"es:ListDirectQueryDataSources",
	];
	/** IAM actions required for the ListDomainMaintenances API call. */
	static readonly ListDomainMaintenances: string[] = [
		"es:ListDomainMaintenances",
	];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly ListDomainNames: string[] = ["es:ListDomainNames"];
	/** IAM actions required for the ListDomainsForPackage API call. */
	static readonly ListDomainsForPackage: string[] = [
		"es:ListDomainsForPackage",
	];
	/** IAM actions required for the ListInsights API call. */
	static readonly ListInsights: string[] = ["es:ListInsights"];
	/** IAM actions required for the ListInstanceTypeDetails API call. */
	static readonly ListInstanceTypeDetails: string[] = [
		"es:ListElasticsearchInstanceTypeDetails",
		"es:ListInstanceTypeDetails",
	];
	/** IAM actions required for the ListMigrations API call. */
	static readonly ListMigrations: string[] = ["es:ListMigrations"];
	/** IAM actions required for the ListPackagesForDomain API call. */
	static readonly ListPackagesForDomain: string[] = [
		"es:ListPackagesForDomain",
	];
	/** IAM actions required for the ListScheduledActions API call. */
	static readonly ListScheduledActions: string[] = ["es:ListScheduledActions"];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["es:ListTags"];
	/** IAM actions required for the ListVersions API call. */
	static readonly ListVersions: string[] = [
		"es:ListElasticsearchVersions",
		"es:ListVersions",
	];
	/** IAM actions required for the ListVpcEndpointAccess API call. */
	static readonly ListVpcEndpointAccess: string[] = [
		"es:ListVpcEndpointAccess",
	];
	/** IAM actions required for the ListVpcEndpoints API call. */
	static readonly ListVpcEndpoints: string[] = ["es:ListVpcEndpoints"];
	/** IAM actions required for the ListVpcEndpointsForDomain API call. */
	static readonly ListVpcEndpointsForDomain: string[] = [
		"es:ListVpcEndpointsForDomain",
	];
	/** IAM actions required for the PurchaseReservedInstanceOffering API call. */
	static readonly PurchaseReservedInstanceOffering: string[] = [
		"es:PurchaseReservedElasticsearchInstanceOffering",
		"es:PurchaseReservedInstanceOffering",
	];
	/** IAM actions required for the PutDefaultApplicationSetting API call. */
	static readonly PutDefaultApplicationSetting: string[] = [
		"es:PutDefaultApplicationSetting",
	];
	/** IAM actions required for the RegisterCapability API call. */
	static readonly RegisterCapability: string[] = ["es:RegisterCapability"];
	/** IAM actions required for the RejectInboundConnection API call. */
	static readonly RejectInboundConnection: string[] = [
		"es:RejectInboundConnection",
		"es:RejectInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly RemoveTags: string[] = ["es:RemoveTags"];
	/** IAM actions required for the RevokeVpcEndpointAccess API call. */
	static readonly RevokeVpcEndpointAccess: string[] = [
		"es:RevokeVpcEndpointAccess",
	];
	/** IAM actions required for the RollbackServiceSoftwareUpdate API call. */
	static readonly RollbackServiceSoftwareUpdate: string[] = [
		"es:RollbackElasticsearchServiceSoftwareUpdate",
		"es:RollbackServiceSoftwareUpdate",
	];
	/** IAM actions required for the StartDomainMaintenance API call. */
	static readonly StartDomainMaintenance: string[] = [
		"es:StartDomainMaintenance",
	];
	/** IAM actions required for the StartMigration API call. */
	static readonly StartMigration: string[] = ["es:StartMigration"];
	/** IAM actions required for the StartServiceSoftwareUpdate API call. */
	static readonly StartServiceSoftwareUpdate: string[] = [
		"es:StartElasticsearchServiceSoftwareUpdate",
		"es:StartServiceSoftwareUpdate",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = ["es:UpdateApplication"];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = [
		"iam:PassRole",
		"es:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDirectQueryDataSource API call. */
	static readonly UpdateDirectQueryDataSource: string[] = [
		"iam:PassRole",
		"es:UpdateDirectQueryDataSource",
	];
	/** IAM actions required for the UpdateDomainConfig API call. */
	static readonly UpdateDomainConfig: string[] = [
		"iam:PassRole",
		"es:UpdateDomainConfig",
		"es:UpdateElasticsearchDomainConfig",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UpdateIndex: string[] = ["es:UpdateIndex"];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UpdatePackage: string[] = ["es:UpdatePackage"];
	/** IAM actions required for the UpdatePackageScope API call. */
	static readonly UpdatePackageScope: string[] = ["es:UpdatePackageScope"];
	/** IAM actions required for the UpdateScheduledAction API call. */
	static readonly UpdateScheduledAction: string[] = [
		"es:UpdateScheduledAction",
	];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UpdateVpcEndpoint: string[] = ["es:UpdateVpcEndpoint"];
	/** IAM actions required for the UpgradeDomain API call. */
	static readonly UpgradeDomain: string[] = [
		"es:UpgradeDomain",
		"es:UpgradeElasticsearchDomain",
	];
}
