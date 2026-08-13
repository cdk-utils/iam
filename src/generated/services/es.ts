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
	static readonly AcceptInboundConnection = "es:AcceptInboundConnection";
	/** [Write] es:AcceptInboundCrossClusterSearchConnection */
	static readonly AcceptInboundCrossClusterSearchConnection =
		"es:AcceptInboundCrossClusterSearchConnection";
	/** [Write] es:AddDataSource */
	static readonly AddDataSource = "es:AddDataSource";
	/** [Write] es:AddDirectQueryDataSource */
	static readonly AddDirectQueryDataSource = "es:AddDirectQueryDataSource";
	/** [Tagging] es:AddTags */
	static readonly AddTags = "es:AddTags";
	/** [Write] es:AssociatePackage */
	static readonly AssociatePackage = "es:AssociatePackage";
	/** [Write] es:AssociatePackages */
	static readonly AssociatePackages = "es:AssociatePackages";
	/** [Write] es:AttachDataSource */
	static readonly AttachDataSource = "es:AttachDataSource";
	/** [Write] es:AuthorizeVpcEndpointAccess */
	static readonly AuthorizeVpcEndpointAccess = "es:AuthorizeVpcEndpointAccess";
	/** [Write] es:CancelDomainConfigChange */
	static readonly CancelDomainConfigChange = "es:CancelDomainConfigChange";
	/** [Write] es:CancelElasticsearchServiceSoftwareUpdate */
	static readonly CancelElasticsearchServiceSoftwareUpdate =
		"es:CancelElasticsearchServiceSoftwareUpdate";
	/** [Write] es:CancelServiceSoftwareUpdate */
	static readonly CancelServiceSoftwareUpdate =
		"es:CancelServiceSoftwareUpdate";
	/** [Write] es:CreateApplication */
	static readonly CreateApplication = "es:CreateApplication";
	/** [Write] es:CreateDomain */
	static readonly CreateDomain = "es:CreateDomain";
	/** [Write] es:CreateElasticsearchDomain */
	static readonly CreateElasticsearchDomain = "es:CreateElasticsearchDomain";
	/** [Write] es:CreateElasticsearchServiceRole */
	static readonly CreateElasticsearchServiceRole =
		"es:CreateElasticsearchServiceRole";
	/** [Write] es:CreateIndex */
	static readonly CreateIndex = "es:CreateIndex";
	/** [Write] es:CreateOutboundConnection */
	static readonly CreateOutboundConnection = "es:CreateOutboundConnection";
	/** [Write] es:CreateOutboundCrossClusterSearchConnection */
	static readonly CreateOutboundCrossClusterSearchConnection =
		"es:CreateOutboundCrossClusterSearchConnection";
	/** [Write] es:CreatePackage */
	static readonly CreatePackage = "es:CreatePackage";
	/** [Write] es:CreateServiceRole */
	static readonly CreateServiceRole = "es:CreateServiceRole";
	/** [Write] es:CreateVpcEndpoint */
	static readonly CreateVpcEndpoint = "es:CreateVpcEndpoint";
	/** [Write] es:DeleteApplication */
	static readonly DeleteApplication = "es:DeleteApplication";
	/** [Write] es:DeleteDataSource */
	static readonly DeleteDataSource = "es:DeleteDataSource";
	/** [Write] es:DeleteDirectQueryDataSource */
	static readonly DeleteDirectQueryDataSource =
		"es:DeleteDirectQueryDataSource";
	/** [Write] es:DeleteDomain */
	static readonly DeleteDomain = "es:DeleteDomain";
	/** [Write] es:DeleteElasticsearchDomain */
	static readonly DeleteElasticsearchDomain = "es:DeleteElasticsearchDomain";
	/** [Write] es:DeleteElasticsearchServiceRole */
	static readonly DeleteElasticsearchServiceRole =
		"es:DeleteElasticsearchServiceRole";
	/** [Write] es:DeleteInboundConnection */
	static readonly DeleteInboundConnection = "es:DeleteInboundConnection";
	/** [Write] es:DeleteInboundCrossClusterSearchConnection */
	static readonly DeleteInboundCrossClusterSearchConnection =
		"es:DeleteInboundCrossClusterSearchConnection";
	/** [Write] es:DeleteIndex */
	static readonly DeleteIndex = "es:DeleteIndex";
	/** [Write] es:DeleteOutboundConnection */
	static readonly DeleteOutboundConnection = "es:DeleteOutboundConnection";
	/** [Write] es:DeleteOutboundCrossClusterSearchConnection */
	static readonly DeleteOutboundCrossClusterSearchConnection =
		"es:DeleteOutboundCrossClusterSearchConnection";
	/** [Write] es:DeletePackage */
	static readonly DeletePackage = "es:DeletePackage";
	/** [Write] es:DeleteVpcEndpoint */
	static readonly DeleteVpcEndpoint = "es:DeleteVpcEndpoint";
	/** [Write] es:DeregisterCapability */
	static readonly DeregisterCapability = "es:DeregisterCapability";
	/** [Read] es:DescribeDataSourceAttachment */
	static readonly DescribeDataSourceAttachment =
		"es:DescribeDataSourceAttachment";
	/** [Read] es:DescribeDomain */
	static readonly DescribeDomain = "es:DescribeDomain";
	/** [Read] es:DescribeDomainAutoTunes */
	static readonly DescribeDomainAutoTunes = "es:DescribeDomainAutoTunes";
	/** [Read] es:DescribeDomainChangeProgress */
	static readonly DescribeDomainChangeProgress =
		"es:DescribeDomainChangeProgress";
	/** [Read] es:DescribeDomainConfig */
	static readonly DescribeDomainConfig = "es:DescribeDomainConfig";
	/** [Read] es:DescribeDomainHealth */
	static readonly DescribeDomainHealth = "es:DescribeDomainHealth";
	/** [Read] es:DescribeDomainNodes */
	static readonly DescribeDomainNodes = "es:DescribeDomainNodes";
	/** [List] es:DescribeDomains */
	static readonly DescribeDomains = "es:DescribeDomains";
	/** [Read] es:DescribeDryRunProgress */
	static readonly DescribeDryRunProgress = "es:DescribeDryRunProgress";
	/** [Read] es:DescribeElasticsearchDomain */
	static readonly DescribeElasticsearchDomain =
		"es:DescribeElasticsearchDomain";
	/** [Read] es:DescribeElasticsearchDomainConfig */
	static readonly DescribeElasticsearchDomainConfig =
		"es:DescribeElasticsearchDomainConfig";
	/** [List] es:DescribeElasticsearchDomains */
	static readonly DescribeElasticsearchDomains =
		"es:DescribeElasticsearchDomains";
	/** [List] es:DescribeElasticsearchInstanceTypeLimits */
	static readonly DescribeElasticsearchInstanceTypeLimits =
		"es:DescribeElasticsearchInstanceTypeLimits";
	/** [List] es:DescribeInboundConnections */
	static readonly DescribeInboundConnections = "es:DescribeInboundConnections";
	/** [List] es:DescribeInboundCrossClusterSearchConnections */
	static readonly DescribeInboundCrossClusterSearchConnections =
		"es:DescribeInboundCrossClusterSearchConnections";
	/** [Read] es:DescribeInsightDetails */
	static readonly DescribeInsightDetails = "es:DescribeInsightDetails";
	/** [List] es:DescribeInstanceTypeLimits */
	static readonly DescribeInstanceTypeLimits = "es:DescribeInstanceTypeLimits";
	/** [List] es:DescribeOutboundConnections */
	static readonly DescribeOutboundConnections =
		"es:DescribeOutboundConnections";
	/** [List] es:DescribeOutboundCrossClusterSearchConnections */
	static readonly DescribeOutboundCrossClusterSearchConnections =
		"es:DescribeOutboundCrossClusterSearchConnections";
	/** [Read] es:DescribePackages */
	static readonly DescribePackages = "es:DescribePackages";
	/** [List] es:DescribeReservedElasticsearchInstanceOfferings */
	static readonly DescribeReservedElasticsearchInstanceOfferings =
		"es:DescribeReservedElasticsearchInstanceOfferings";
	/** [List] es:DescribeReservedElasticsearchInstances */
	static readonly DescribeReservedElasticsearchInstances =
		"es:DescribeReservedElasticsearchInstances";
	/** [List] es:DescribeReservedInstanceOfferings */
	static readonly DescribeReservedInstanceOfferings =
		"es:DescribeReservedInstanceOfferings";
	/** [List] es:DescribeReservedInstances */
	static readonly DescribeReservedInstances = "es:DescribeReservedInstances";
	/** [List] es:DescribeVpcEndpoints */
	static readonly DescribeVpcEndpoints = "es:DescribeVpcEndpoints";
	/** [Write] es:DetachDataSource */
	static readonly DetachDataSource = "es:DetachDataSource";
	/** [Write] es:DissociatePackage */
	static readonly DissociatePackage = "es:DissociatePackage";
	/** [Write] es:DissociatePackages */
	static readonly DissociatePackages = "es:DissociatePackages";
	/** [Read] es:ESCrossClusterGet */
	static readonly ESCrossClusterGet = "es:ESCrossClusterGet";
	/** [Write] es:ESHttpDelete */
	static readonly ESHttpDelete = "es:ESHttpDelete";
	/** [Read] es:ESHttpGet */
	static readonly ESHttpGet = "es:ESHttpGet";
	/** [Read] es:ESHttpHead */
	static readonly ESHttpHead = "es:ESHttpHead";
	/** [Write] es:ESHttpPatch */
	static readonly ESHttpPatch = "es:ESHttpPatch";
	/** [Write] es:ESHttpPost */
	static readonly ESHttpPost = "es:ESHttpPost";
	/** [Write] es:ESHttpPut */
	static readonly ESHttpPut = "es:ESHttpPut";
	/** [Read] es:GetApplication */
	static readonly actionGetApplication = "es:GetApplication";
	/** [Read] es:GetCapability */
	static readonly actionGetCapability = "es:GetCapability";
	/** [List] es:GetCompatibleElasticsearchVersions */
	static readonly actionGetCompatibleElasticsearchVersions =
		"es:GetCompatibleElasticsearchVersions";
	/** [List] es:GetCompatibleVersions */
	static readonly actionGetCompatibleVersions = "es:GetCompatibleVersions";
	/** [Read] es:GetDataSource */
	static readonly actionGetDataSource = "es:GetDataSource";
	/** [Read] es:GetDefaultApplicationSetting */
	static readonly actionGetDefaultApplicationSetting =
		"es:GetDefaultApplicationSetting";
	/** [Read] es:GetDirectQueryDataSource */
	static readonly actionGetDirectQueryDataSource =
		"es:GetDirectQueryDataSource";
	/** [Read] es:GetDomainMaintenanceStatus */
	static readonly actionGetDomainMaintenanceStatus =
		"es:GetDomainMaintenanceStatus";
	/** [Read] es:GetIndex */
	static readonly actionGetIndex = "es:GetIndex";
	/** [Read] es:GetMigration */
	static readonly actionGetMigration = "es:GetMigration";
	/** [Read] es:GetPackageVersionHistory */
	static readonly actionGetPackageVersionHistory =
		"es:GetPackageVersionHistory";
	/** [Read] es:GetUpgradeHistory */
	static readonly actionGetUpgradeHistory = "es:GetUpgradeHistory";
	/** [Read] es:GetUpgradeStatus */
	static readonly actionGetUpgradeStatus = "es:GetUpgradeStatus";
	/** [Write] es:InsightFeedback */
	static readonly InsightFeedback = "es:InsightFeedback";
	/** [List] es:ListApplications */
	static readonly ListApplications = "es:ListApplications";
	/** [List] es:ListDataSourceAttachments */
	static readonly ListDataSourceAttachments = "es:ListDataSourceAttachments";
	/** [List] es:ListDataSources */
	static readonly ListDataSources = "es:ListDataSources";
	/** [List] es:ListDirectQueryDataSources */
	static readonly ListDirectQueryDataSources = "es:ListDirectQueryDataSources";
	/** [List] es:ListDomainMaintenances */
	static readonly ListDomainMaintenances = "es:ListDomainMaintenances";
	/** [List] es:ListDomainNames */
	static readonly ListDomainNames = "es:ListDomainNames";
	/** [List] es:ListDomainsForPackage */
	static readonly ListDomainsForPackage = "es:ListDomainsForPackage";
	/** [List] es:ListElasticsearchInstanceTypeDetails */
	static readonly ListElasticsearchInstanceTypeDetails =
		"es:ListElasticsearchInstanceTypeDetails";
	/** [List] es:ListElasticsearchInstanceTypes */
	static readonly ListElasticsearchInstanceTypes =
		"es:ListElasticsearchInstanceTypes";
	/** [List] es:ListElasticsearchVersions */
	static readonly ListElasticsearchVersions = "es:ListElasticsearchVersions";
	/** [List] es:ListInsights */
	static readonly ListInsights = "es:ListInsights";
	/** [List] es:ListInstanceTypeDetails */
	static readonly ListInstanceTypeDetails = "es:ListInstanceTypeDetails";
	/** [List] es:ListMigrations */
	static readonly ListMigrations = "es:ListMigrations";
	/** [List] es:ListPackagesForDomain */
	static readonly ListPackagesForDomain = "es:ListPackagesForDomain";
	/** [List] es:ListScheduledActions */
	static readonly ListScheduledActions = "es:ListScheduledActions";
	/** [Read] es:ListTags */
	static readonly ListTags = "es:ListTags";
	/** [List] es:ListVersions */
	static readonly ListVersions = "es:ListVersions";
	/** [List] es:ListVpcEndpointAccess */
	static readonly ListVpcEndpointAccess = "es:ListVpcEndpointAccess";
	/** [List] es:ListVpcEndpoints */
	static readonly ListVpcEndpoints = "es:ListVpcEndpoints";
	/** [List] es:ListVpcEndpointsForDomain */
	static readonly ListVpcEndpointsForDomain = "es:ListVpcEndpointsForDomain";
	/** [Write] es:PurchaseReservedElasticsearchInstanceOffering */
	static readonly PurchaseReservedElasticsearchInstanceOffering =
		"es:PurchaseReservedElasticsearchInstanceOffering";
	/** [Write] es:PurchaseReservedInstanceOffering */
	static readonly PurchaseReservedInstanceOffering =
		"es:PurchaseReservedInstanceOffering";
	/** [Write] es:PutDefaultApplicationSetting */
	static readonly PutDefaultApplicationSetting =
		"es:PutDefaultApplicationSetting";
	/** [Write] es:RegisterCapability */
	static readonly RegisterCapability = "es:RegisterCapability";
	/** [Write] es:RejectInboundConnection */
	static readonly RejectInboundConnection = "es:RejectInboundConnection";
	/** [Write] es:RejectInboundCrossClusterSearchConnection */
	static readonly RejectInboundCrossClusterSearchConnection =
		"es:RejectInboundCrossClusterSearchConnection";
	/** [Tagging] es:RemoveTags */
	static readonly RemoveTags = "es:RemoveTags";
	/** [Write] es:RevokeVpcEndpointAccess */
	static readonly RevokeVpcEndpointAccess = "es:RevokeVpcEndpointAccess";
	/** [Write] es:RollbackElasticsearchServiceSoftwareUpdate */
	static readonly RollbackElasticsearchServiceSoftwareUpdate =
		"es:RollbackElasticsearchServiceSoftwareUpdate";
	/** [Write] es:RollbackServiceSoftwareUpdate */
	static readonly RollbackServiceSoftwareUpdate =
		"es:RollbackServiceSoftwareUpdate";
	/** [Write] es:StartDomainMaintenance */
	static readonly StartDomainMaintenance = "es:StartDomainMaintenance";
	/** [Write] es:StartElasticsearchServiceSoftwareUpdate */
	static readonly StartElasticsearchServiceSoftwareUpdate =
		"es:StartElasticsearchServiceSoftwareUpdate";
	/** [Write] es:StartMigration */
	static readonly StartMigration = "es:StartMigration";
	/** [Write] es:StartServiceSoftwareUpdate */
	static readonly StartServiceSoftwareUpdate = "es:StartServiceSoftwareUpdate";
	/** [Write] es:UpdateApplication */
	static readonly UpdateApplication = "es:UpdateApplication";
	/** [Write] es:UpdateDataSource */
	static readonly UpdateDataSource = "es:UpdateDataSource";
	/** [Write] es:UpdateDirectQueryDataSource */
	static readonly UpdateDirectQueryDataSource =
		"es:UpdateDirectQueryDataSource";
	/** [Write] es:UpdateDomainConfig */
	static readonly UpdateDomainConfig = "es:UpdateDomainConfig";
	/** [Write] es:UpdateElasticsearchDomainConfig */
	static readonly UpdateElasticsearchDomainConfig =
		"es:UpdateElasticsearchDomainConfig";
	/** [Write] es:UpdateIndex */
	static readonly UpdateIndex = "es:UpdateIndex";
	/** [Write] es:UpdatePackage */
	static readonly UpdatePackage = "es:UpdatePackage";
	/** [Write] es:UpdatePackageScope */
	static readonly UpdatePackageScope = "es:UpdatePackageScope";
	/** [Write] es:UpdateScheduledAction */
	static readonly UpdateScheduledAction = "es:UpdateScheduledAction";
	/** [Write] es:UpdateVpcEndpoint */
	static readonly UpdateVpcEndpoint = "es:UpdateVpcEndpoint";
	/** [Write] es:UpgradeDomain */
	static readonly UpgradeDomain = "es:UpgradeDomain";
	/** [Write] es:UpgradeElasticsearchDomain */
	static readonly UpgradeElasticsearchDomain = "es:UpgradeElasticsearchDomain";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EsActions.DescribeDataSourceAttachment,
		EsActions.DescribeDomain,
		EsActions.DescribeDomainAutoTunes,
		EsActions.DescribeDomainChangeProgress,
		EsActions.DescribeDomainConfig,
		EsActions.DescribeDomainHealth,
		EsActions.DescribeDomainNodes,
		EsActions.DescribeDryRunProgress,
		EsActions.DescribeElasticsearchDomain,
		EsActions.DescribeElasticsearchDomainConfig,
		EsActions.DescribeInsightDetails,
		EsActions.DescribePackages,
		EsActions.ESCrossClusterGet,
		EsActions.ESHttpGet,
		EsActions.ESHttpHead,
		EsActions.actionGetApplication,
		EsActions.actionGetCapability,
		EsActions.actionGetDataSource,
		EsActions.actionGetDefaultApplicationSetting,
		EsActions.actionGetDirectQueryDataSource,
		EsActions.actionGetDomainMaintenanceStatus,
		EsActions.actionGetIndex,
		EsActions.actionGetMigration,
		EsActions.actionGetPackageVersionHistory,
		EsActions.actionGetUpgradeHistory,
		EsActions.actionGetUpgradeStatus,
		EsActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EsActions.AcceptInboundConnection,
		EsActions.AcceptInboundCrossClusterSearchConnection,
		EsActions.AddDataSource,
		EsActions.AddDirectQueryDataSource,
		EsActions.AssociatePackage,
		EsActions.AssociatePackages,
		EsActions.AttachDataSource,
		EsActions.AuthorizeVpcEndpointAccess,
		EsActions.CancelDomainConfigChange,
		EsActions.CancelElasticsearchServiceSoftwareUpdate,
		EsActions.CancelServiceSoftwareUpdate,
		EsActions.CreateApplication,
		EsActions.CreateDomain,
		EsActions.CreateElasticsearchDomain,
		EsActions.CreateElasticsearchServiceRole,
		EsActions.CreateIndex,
		EsActions.CreateOutboundConnection,
		EsActions.CreateOutboundCrossClusterSearchConnection,
		EsActions.CreatePackage,
		EsActions.CreateServiceRole,
		EsActions.CreateVpcEndpoint,
		EsActions.DeleteApplication,
		EsActions.DeleteDataSource,
		EsActions.DeleteDirectQueryDataSource,
		EsActions.DeleteDomain,
		EsActions.DeleteElasticsearchDomain,
		EsActions.DeleteElasticsearchServiceRole,
		EsActions.DeleteInboundConnection,
		EsActions.DeleteInboundCrossClusterSearchConnection,
		EsActions.DeleteIndex,
		EsActions.DeleteOutboundConnection,
		EsActions.DeleteOutboundCrossClusterSearchConnection,
		EsActions.DeletePackage,
		EsActions.DeleteVpcEndpoint,
		EsActions.DeregisterCapability,
		EsActions.DetachDataSource,
		EsActions.DissociatePackage,
		EsActions.DissociatePackages,
		EsActions.ESHttpDelete,
		EsActions.ESHttpPatch,
		EsActions.ESHttpPost,
		EsActions.ESHttpPut,
		EsActions.InsightFeedback,
		EsActions.PurchaseReservedElasticsearchInstanceOffering,
		EsActions.PurchaseReservedInstanceOffering,
		EsActions.PutDefaultApplicationSetting,
		EsActions.RegisterCapability,
		EsActions.RejectInboundConnection,
		EsActions.RejectInboundCrossClusterSearchConnection,
		EsActions.RevokeVpcEndpointAccess,
		EsActions.RollbackElasticsearchServiceSoftwareUpdate,
		EsActions.RollbackServiceSoftwareUpdate,
		EsActions.StartDomainMaintenance,
		EsActions.StartElasticsearchServiceSoftwareUpdate,
		EsActions.StartMigration,
		EsActions.StartServiceSoftwareUpdate,
		EsActions.UpdateApplication,
		EsActions.UpdateDataSource,
		EsActions.UpdateDirectQueryDataSource,
		EsActions.UpdateDomainConfig,
		EsActions.UpdateElasticsearchDomainConfig,
		EsActions.UpdateIndex,
		EsActions.UpdatePackage,
		EsActions.UpdatePackageScope,
		EsActions.UpdateScheduledAction,
		EsActions.UpdateVpcEndpoint,
		EsActions.UpgradeDomain,
		EsActions.UpgradeElasticsearchDomain,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EsActions.DescribeDomains,
		EsActions.DescribeElasticsearchDomains,
		EsActions.DescribeElasticsearchInstanceTypeLimits,
		EsActions.DescribeInboundConnections,
		EsActions.DescribeInboundCrossClusterSearchConnections,
		EsActions.DescribeInstanceTypeLimits,
		EsActions.DescribeOutboundConnections,
		EsActions.DescribeOutboundCrossClusterSearchConnections,
		EsActions.DescribeReservedElasticsearchInstanceOfferings,
		EsActions.DescribeReservedElasticsearchInstances,
		EsActions.DescribeReservedInstanceOfferings,
		EsActions.DescribeReservedInstances,
		EsActions.DescribeVpcEndpoints,
		EsActions.actionGetCompatibleElasticsearchVersions,
		EsActions.actionGetCompatibleVersions,
		EsActions.ListApplications,
		EsActions.ListDataSourceAttachments,
		EsActions.ListDataSources,
		EsActions.ListDirectQueryDataSources,
		EsActions.ListDomainMaintenances,
		EsActions.ListDomainNames,
		EsActions.ListDomainsForPackage,
		EsActions.ListElasticsearchInstanceTypeDetails,
		EsActions.ListElasticsearchInstanceTypes,
		EsActions.ListElasticsearchVersions,
		EsActions.ListInsights,
		EsActions.ListInstanceTypeDetails,
		EsActions.ListMigrations,
		EsActions.ListPackagesForDomain,
		EsActions.ListScheduledActions,
		EsActions.ListVersions,
		EsActions.ListVpcEndpointAccess,
		EsActions.ListVpcEndpoints,
		EsActions.ListVpcEndpointsForDomain,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EsActions.AddTags,
		EsActions.RemoveTags,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface EsApplicationArnProps {
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
export interface EsApplicationArnComponents {
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
export interface EsDatasourceArnProps {
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
export interface EsDatasourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSourceName component. */
	readonly dataSourceName: string;
}

/**
 * Properties for building a domain ARN.
 */
export interface EsDomainArnProps {
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
export interface EsDomainArnComponents {
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
 * Properties for building a es_role ARN.
 */
export interface EsEsRoleArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a es_role ARN.
 */
export interface EsEsRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a opensearchservice_role ARN.
 */
export interface EsOpensearchserviceRoleArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a opensearchservice_role ARN.
 */
export interface EsOpensearchserviceRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):application\/(?<appId>[^:/?]+)$/;
const DatasourceArnRegex =
	/^arn:(?<partition>[^:]+):opensearch:(?<region>[^:]*):(?<account>[^:]*):datasource\/(?<dataSourceName>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):es:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainName>[^:/?]+)$/;
const EsRoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role\/aws-service-role\/es\.amazonaws\.com\/AWSServiceRoleForAmazonOpenSearchService$/;
const OpensearchserviceRoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role\/aws-service-role\/opensearchservice\.amazonaws\.com\/AWSServiceRoleForAmazonOpenSearchService$/;

/**
 * ARN builders, validators, and parsers for es resources.
 */
export class EsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: EsApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): EsApplicationArnComponents {
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
	static datasource(props: EsDatasourceArnProps): string {
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
	static parseDatasourceArn(arn: string): EsDatasourceArnComponents {
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
	static domain(props: EsDomainArnProps): string {
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
	static parseDomainArn(arn: string): EsDomainArnComponents {
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
	static esRole(props: EsEsRoleArnProps): string {
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
	static parseEsRoleArn(arn: string): EsEsRoleArnComponents {
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
	static opensearchserviceRole(props: EsOpensearchserviceRoleArnProps): string {
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
	static parseOpensearchserviceRoleArn(
		arn: string,
	): EsOpensearchserviceRoleArnComponents {
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
	static readonly AcceptInboundCrossClusterSearchConnection: string[] = [
		"es:AcceptInboundConnection",
		"es:AcceptInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["es:AddTags"];
	/** IAM actions required for the AssociatePackage API call. */
	static readonly AssociatePackage: string[] = [
		"es:AssociatePackage",
		"iam:PassRole",
	];
	/** IAM actions required for the AuthorizeVpcEndpointAccess API call. */
	static readonly AuthorizeVpcEndpointAccess: string[] = [
		"es:AuthorizeVpcEndpointAccess",
	];
	/** IAM actions required for the CancelDomainConfigChange API call. */
	static readonly CancelDomainConfigChange: string[] = [
		"es:CancelDomainConfigChange",
	];
	/** IAM actions required for the CancelElasticsearchServiceSoftwareUpdate API call. */
	static readonly CancelElasticsearchServiceSoftwareUpdate: string[] = [
		"es:CancelElasticsearchServiceSoftwareUpdate",
		"es:CancelServiceSoftwareUpdate",
	];
	/** IAM actions required for the CreateElasticsearchDomain API call. */
	static readonly CreateElasticsearchDomain: string[] = [
		"es:AddTags",
		"es:CreateDomain",
		"es:CreateElasticsearchDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOutboundCrossClusterSearchConnection API call. */
	static readonly CreateOutboundCrossClusterSearchConnection: string[] = [
		"es:CreateOutboundConnection",
		"es:CreateOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CreatePackage: string[] = ["es:CreatePackage"];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CreateVpcEndpoint: string[] = ["es:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteElasticsearchDomain API call. */
	static readonly DeleteElasticsearchDomain: string[] = [
		"es:DeleteDomain",
		"es:DeleteElasticsearchDomain",
	];
	/** IAM actions required for the DeleteElasticsearchServiceRole API call. */
	static readonly DeleteElasticsearchServiceRole: string[] = [
		"es:DeleteElasticsearchServiceRole",
	];
	/** IAM actions required for the DeleteInboundCrossClusterSearchConnection API call. */
	static readonly DeleteInboundCrossClusterSearchConnection: string[] = [
		"es:DeleteInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeleteOutboundCrossClusterSearchConnection API call. */
	static readonly DeleteOutboundCrossClusterSearchConnection: string[] = [
		"es:DeleteOutboundConnection",
		"es:DeleteOutboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DeletePackage: string[] = ["es:DeletePackage"];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DeleteVpcEndpoint: string[] = ["es:DeleteVpcEndpoint"];
	/** IAM actions required for the DescribeDomainAutoTunes API call. */
	static readonly DescribeDomainAutoTunes: string[] = [
		"es:DescribeDomainAutoTunes",
	];
	/** IAM actions required for the DescribeDomainChangeProgress API call. */
	static readonly DescribeDomainChangeProgress: string[] = [
		"es:DescribeDomainChangeProgress",
	];
	/** IAM actions required for the DescribeElasticsearchDomain API call. */
	static readonly DescribeElasticsearchDomain: string[] = [
		"es:DescribeDomain",
		"es:DescribeElasticsearchDomain",
	];
	/** IAM actions required for the DescribeElasticsearchDomainConfig API call. */
	static readonly DescribeElasticsearchDomainConfig: string[] = [
		"es:DescribeDomainConfig",
		"es:DescribeElasticsearchDomainConfig",
	];
	/** IAM actions required for the DescribeElasticsearchDomains API call. */
	static readonly DescribeElasticsearchDomains: string[] = [
		"es:DescribeDomains",
		"es:DescribeElasticsearchDomains",
	];
	/** IAM actions required for the DescribeElasticsearchInstanceTypeLimits API call. */
	static readonly DescribeElasticsearchInstanceTypeLimits: string[] = [
		"es:DescribeElasticsearchInstanceTypeLimits",
		"es:DescribeInstanceTypeLimits",
	];
	/** IAM actions required for the DescribeInboundCrossClusterSearchConnections API call. */
	static readonly DescribeInboundCrossClusterSearchConnections: string[] = [
		"es:DescribeInboundConnections",
		"es:DescribeInboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribeOutboundCrossClusterSearchConnections API call. */
	static readonly DescribeOutboundCrossClusterSearchConnections: string[] = [
		"es:DescribeOutboundConnections",
		"es:DescribeOutboundCrossClusterSearchConnections",
	];
	/** IAM actions required for the DescribePackages API call. */
	static readonly DescribePackages: string[] = ["es:DescribePackages"];
	/** IAM actions required for the DescribeReservedElasticsearchInstanceOfferings API call. */
	static readonly DescribeReservedElasticsearchInstanceOfferings: string[] = [
		"es:DescribeReservedElasticsearchInstanceOfferings",
		"es:DescribeReservedInstanceOfferings",
	];
	/** IAM actions required for the DescribeReservedElasticsearchInstances API call. */
	static readonly DescribeReservedElasticsearchInstances: string[] = [
		"es:DescribeReservedElasticsearchInstances",
		"es:DescribeReservedInstances",
	];
	/** IAM actions required for the DescribeVpcEndpoints API call. */
	static readonly DescribeVpcEndpoints: string[] = ["es:DescribeVpcEndpoints"];
	/** IAM actions required for the DissociatePackage API call. */
	static readonly DissociatePackage: string[] = ["es:DissociatePackage"];
	/** IAM actions required for the GetCompatibleElasticsearchVersions API call. */
	static readonly opGetCompatibleElasticsearchVersions: string[] = [
		"es:GetCompatibleElasticsearchVersions",
		"es:GetCompatibleVersions",
	];
	/** IAM actions required for the GetPackageVersionHistory API call. */
	static readonly opGetPackageVersionHistory: string[] = [
		"es:GetPackageVersionHistory",
	];
	/** IAM actions required for the GetUpgradeHistory API call. */
	static readonly opGetUpgradeHistory: string[] = ["es:GetUpgradeHistory"];
	/** IAM actions required for the GetUpgradeStatus API call. */
	static readonly opGetUpgradeStatus: string[] = ["es:GetUpgradeStatus"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly ListDomainNames: string[] = ["es:ListDomainNames"];
	/** IAM actions required for the ListDomainsForPackage API call. */
	static readonly ListDomainsForPackage: string[] = [
		"es:ListDomainsForPackage",
	];
	/** IAM actions required for the ListElasticsearchInstanceTypes API call. */
	static readonly ListElasticsearchInstanceTypes: string[] = [
		"es:ListElasticsearchInstanceTypes",
	];
	/** IAM actions required for the ListElasticsearchVersions API call. */
	static readonly ListElasticsearchVersions: string[] = [
		"es:ListElasticsearchVersions",
		"es:ListVersions",
	];
	/** IAM actions required for the ListPackagesForDomain API call. */
	static readonly ListPackagesForDomain: string[] = [
		"es:ListPackagesForDomain",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["es:ListTags"];
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
	/** IAM actions required for the PurchaseReservedElasticsearchInstanceOffering API call. */
	static readonly PurchaseReservedElasticsearchInstanceOffering: string[] = [
		"es:PurchaseReservedElasticsearchInstanceOffering",
		"es:PurchaseReservedInstanceOffering",
	];
	/** IAM actions required for the RejectInboundCrossClusterSearchConnection API call. */
	static readonly RejectInboundCrossClusterSearchConnection: string[] = [
		"es:RejectInboundConnection",
		"es:RejectInboundCrossClusterSearchConnection",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly RemoveTags: string[] = ["es:RemoveTags"];
	/** IAM actions required for the RevokeVpcEndpointAccess API call. */
	static readonly RevokeVpcEndpointAccess: string[] = [
		"es:RevokeVpcEndpointAccess",
	];
	/** IAM actions required for the StartElasticsearchServiceSoftwareUpdate API call. */
	static readonly StartElasticsearchServiceSoftwareUpdate: string[] = [
		"es:StartElasticsearchServiceSoftwareUpdate",
		"es:StartServiceSoftwareUpdate",
	];
	/** IAM actions required for the UpdateElasticsearchDomainConfig API call. */
	static readonly UpdateElasticsearchDomainConfig: string[] = [
		"iam:PassRole",
		"es:UpdateDomainConfig",
		"es:UpdateElasticsearchDomainConfig",
	];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UpdatePackage: string[] = ["es:UpdatePackage"];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UpdateVpcEndpoint: string[] = ["es:UpdateVpcEndpoint"];
	/** IAM actions required for the UpgradeElasticsearchDomain API call. */
	static readonly UpgradeElasticsearchDomain: string[] = [
		"es:UpgradeDomain",
		"es:UpgradeElasticsearchDomain",
	];
}

/**
 * Condition key constants and builders for es.
 */
export class EsConditions {
	/** Condition keys applicable to the AddDirectQueryDataSource action. */
	static readonly AddDirectQueryDataSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddTags action. */
	static readonly AddTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateElasticsearchDomain action. */
	static readonly CreateElasticsearchDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly RemoveTagsConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
