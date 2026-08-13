// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/greengrass.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the greengrass service.
 */
export class GreengrassActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "greengrass";

	/** [Write] greengrass:AssociateRoleToGroup */
	static readonly ASSOCIATE_ROLE_TO_GROUP = "greengrass:AssociateRoleToGroup";
	/** [PermissionManagement] greengrass:AssociateServiceRoleToAccount */
	static readonly ASSOCIATE_SERVICE_ROLE_TO_ACCOUNT =
		"greengrass:AssociateServiceRoleToAccount";
	/** [Write] greengrass:BatchAssociateClientDeviceWithCoreDevice */
	static readonly BATCH_ASSOCIATE_CLIENT_DEVICE_WITH_CORE_DEVICE =
		"greengrass:BatchAssociateClientDeviceWithCoreDevice";
	/** [Write] greengrass:BatchDisassociateClientDeviceFromCoreDevice */
	static readonly BATCH_DISASSOCIATE_CLIENT_DEVICE_FROM_CORE_DEVICE =
		"greengrass:BatchDisassociateClientDeviceFromCoreDevice";
	/** [Write] greengrass:CancelDeployment */
	static readonly CANCEL_DEPLOYMENT = "greengrass:CancelDeployment";
	/** [Write] greengrass:CreateComponentVersion */
	static readonly CREATE_COMPONENT_VERSION =
		"greengrass:CreateComponentVersion";
	/** [Write] greengrass:CreateConnectorDefinition */
	static readonly CREATE_CONNECTOR_DEFINITION =
		"greengrass:CreateConnectorDefinition";
	/** [Write] greengrass:CreateConnectorDefinitionVersion */
	static readonly CREATE_CONNECTOR_DEFINITION_VERSION =
		"greengrass:CreateConnectorDefinitionVersion";
	/** [Write] greengrass:CreateCoreDefinition */
	static readonly CREATE_CORE_DEFINITION = "greengrass:CreateCoreDefinition";
	/** [Write] greengrass:CreateCoreDefinitionVersion */
	static readonly CREATE_CORE_DEFINITION_VERSION =
		"greengrass:CreateCoreDefinitionVersion";
	/** [Write] greengrass:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "greengrass:CreateDeployment";
	/** [Write] greengrass:CreateDeviceDefinition */
	static readonly CREATE_DEVICE_DEFINITION =
		"greengrass:CreateDeviceDefinition";
	/** [Write] greengrass:CreateDeviceDefinitionVersion */
	static readonly CREATE_DEVICE_DEFINITION_VERSION =
		"greengrass:CreateDeviceDefinitionVersion";
	/** [Write] greengrass:CreateFunctionDefinition */
	static readonly CREATE_FUNCTION_DEFINITION =
		"greengrass:CreateFunctionDefinition";
	/** [Write] greengrass:CreateFunctionDefinitionVersion */
	static readonly CREATE_FUNCTION_DEFINITION_VERSION =
		"greengrass:CreateFunctionDefinitionVersion";
	/** [Write] greengrass:CreateGroup */
	static readonly CREATE_GROUP = "greengrass:CreateGroup";
	/** [Write] greengrass:CreateGroupCertificateAuthority */
	static readonly CREATE_GROUP_CERTIFICATE_AUTHORITY =
		"greengrass:CreateGroupCertificateAuthority";
	/** [Write] greengrass:CreateGroupVersion */
	static readonly CREATE_GROUP_VERSION = "greengrass:CreateGroupVersion";
	/** [Write] greengrass:CreateLoggerDefinition */
	static readonly CREATE_LOGGER_DEFINITION =
		"greengrass:CreateLoggerDefinition";
	/** [Write] greengrass:CreateLoggerDefinitionVersion */
	static readonly CREATE_LOGGER_DEFINITION_VERSION =
		"greengrass:CreateLoggerDefinitionVersion";
	/** [Write] greengrass:CreateResourceDefinition */
	static readonly CREATE_RESOURCE_DEFINITION =
		"greengrass:CreateResourceDefinition";
	/** [Write] greengrass:CreateResourceDefinitionVersion */
	static readonly CREATE_RESOURCE_DEFINITION_VERSION =
		"greengrass:CreateResourceDefinitionVersion";
	/** [Write] greengrass:CreateSoftwareUpdateJob */
	static readonly CREATE_SOFTWARE_UPDATE_JOB =
		"greengrass:CreateSoftwareUpdateJob";
	/** [Write] greengrass:CreateSubscriptionDefinition */
	static readonly CREATE_SUBSCRIPTION_DEFINITION =
		"greengrass:CreateSubscriptionDefinition";
	/** [Write] greengrass:CreateSubscriptionDefinitionVersion */
	static readonly CREATE_SUBSCRIPTION_DEFINITION_VERSION =
		"greengrass:CreateSubscriptionDefinitionVersion";
	/** [Write] greengrass:DeleteComponent */
	static readonly DELETE_COMPONENT = "greengrass:DeleteComponent";
	/** [Write] greengrass:DeleteConnectorDefinition */
	static readonly DELETE_CONNECTOR_DEFINITION =
		"greengrass:DeleteConnectorDefinition";
	/** [Write] greengrass:DeleteCoreDefinition */
	static readonly DELETE_CORE_DEFINITION = "greengrass:DeleteCoreDefinition";
	/** [Write] greengrass:DeleteCoreDevice */
	static readonly DELETE_CORE_DEVICE = "greengrass:DeleteCoreDevice";
	/** [Write] greengrass:DeleteDeployment */
	static readonly DELETE_DEPLOYMENT = "greengrass:DeleteDeployment";
	/** [Write] greengrass:DeleteDeviceDefinition */
	static readonly DELETE_DEVICE_DEFINITION =
		"greengrass:DeleteDeviceDefinition";
	/** [Write] greengrass:DeleteFunctionDefinition */
	static readonly DELETE_FUNCTION_DEFINITION =
		"greengrass:DeleteFunctionDefinition";
	/** [Write] greengrass:DeleteGroup */
	static readonly DELETE_GROUP = "greengrass:DeleteGroup";
	/** [Write] greengrass:DeleteLoggerDefinition */
	static readonly DELETE_LOGGER_DEFINITION =
		"greengrass:DeleteLoggerDefinition";
	/** [Write] greengrass:DeleteResourceDefinition */
	static readonly DELETE_RESOURCE_DEFINITION =
		"greengrass:DeleteResourceDefinition";
	/** [Write] greengrass:DeleteSubscriptionDefinition */
	static readonly DELETE_SUBSCRIPTION_DEFINITION =
		"greengrass:DeleteSubscriptionDefinition";
	/** [Read] greengrass:DescribeComponent */
	static readonly DESCRIBE_COMPONENT = "greengrass:DescribeComponent";
	/** [Write] greengrass:DisassociateRoleFromGroup */
	static readonly DISASSOCIATE_ROLE_FROM_GROUP =
		"greengrass:DisassociateRoleFromGroup";
	/** [Write] greengrass:DisassociateServiceRoleFromAccount */
	static readonly DISASSOCIATE_SERVICE_ROLE_FROM_ACCOUNT =
		"greengrass:DisassociateServiceRoleFromAccount";
	/** [Read] greengrass:Discover */
	static readonly DISCOVER = "greengrass:Discover";
	/** [Read] greengrass:GetAssociatedRole */
	static readonly GET_ASSOCIATED_ROLE = "greengrass:GetAssociatedRole";
	/** [Read] greengrass:GetBulkDeploymentStatus */
	static readonly GET_BULK_DEPLOYMENT_STATUS =
		"greengrass:GetBulkDeploymentStatus";
	/** [Read] greengrass:GetComponent */
	static readonly GET_COMPONENT = "greengrass:GetComponent";
	/** [Read] greengrass:GetComponentVersionArtifact */
	static readonly GET_COMPONENT_VERSION_ARTIFACT =
		"greengrass:GetComponentVersionArtifact";
	/** [Read] greengrass:GetConnectivityInfo */
	static readonly GET_CONNECTIVITY_INFO = "greengrass:GetConnectivityInfo";
	/** [Read] greengrass:GetConnectorDefinition */
	static readonly GET_CONNECTOR_DEFINITION =
		"greengrass:GetConnectorDefinition";
	/** [Read] greengrass:GetConnectorDefinitionVersion */
	static readonly GET_CONNECTOR_DEFINITION_VERSION =
		"greengrass:GetConnectorDefinitionVersion";
	/** [Read] greengrass:GetCoreDefinition */
	static readonly GET_CORE_DEFINITION = "greengrass:GetCoreDefinition";
	/** [Read] greengrass:GetCoreDefinitionVersion */
	static readonly GET_CORE_DEFINITION_VERSION =
		"greengrass:GetCoreDefinitionVersion";
	/** [Read] greengrass:GetCoreDevice */
	static readonly GET_CORE_DEVICE = "greengrass:GetCoreDevice";
	/** [Read] greengrass:GetDeployment */
	static readonly GET_DEPLOYMENT = "greengrass:GetDeployment";
	/** [Read] greengrass:GetDeploymentStatus */
	static readonly GET_DEPLOYMENT_STATUS = "greengrass:GetDeploymentStatus";
	/** [Read] greengrass:GetDeviceDefinition */
	static readonly GET_DEVICE_DEFINITION = "greengrass:GetDeviceDefinition";
	/** [Read] greengrass:GetDeviceDefinitionVersion */
	static readonly GET_DEVICE_DEFINITION_VERSION =
		"greengrass:GetDeviceDefinitionVersion";
	/** [Read] greengrass:GetFunctionDefinition */
	static readonly GET_FUNCTION_DEFINITION = "greengrass:GetFunctionDefinition";
	/** [Read] greengrass:GetFunctionDefinitionVersion */
	static readonly GET_FUNCTION_DEFINITION_VERSION =
		"greengrass:GetFunctionDefinitionVersion";
	/** [Read] greengrass:GetGroup */
	static readonly GET_GROUP = "greengrass:GetGroup";
	/** [Read] greengrass:GetGroupCertificateAuthority */
	static readonly GET_GROUP_CERTIFICATE_AUTHORITY =
		"greengrass:GetGroupCertificateAuthority";
	/** [Read] greengrass:GetGroupCertificateConfiguration */
	static readonly GET_GROUP_CERTIFICATE_CONFIGURATION =
		"greengrass:GetGroupCertificateConfiguration";
	/** [Read] greengrass:GetGroupVersion */
	static readonly GET_GROUP_VERSION = "greengrass:GetGroupVersion";
	/** [Read] greengrass:GetLoggerDefinition */
	static readonly GET_LOGGER_DEFINITION = "greengrass:GetLoggerDefinition";
	/** [Read] greengrass:GetLoggerDefinitionVersion */
	static readonly GET_LOGGER_DEFINITION_VERSION =
		"greengrass:GetLoggerDefinitionVersion";
	/** [Read] greengrass:GetResourceDefinition */
	static readonly GET_RESOURCE_DEFINITION = "greengrass:GetResourceDefinition";
	/** [Read] greengrass:GetResourceDefinitionVersion */
	static readonly GET_RESOURCE_DEFINITION_VERSION =
		"greengrass:GetResourceDefinitionVersion";
	/** [Read] greengrass:GetServiceRoleForAccount */
	static readonly GET_SERVICE_ROLE_FOR_ACCOUNT =
		"greengrass:GetServiceRoleForAccount";
	/** [Read] greengrass:GetSubscriptionDefinition */
	static readonly GET_SUBSCRIPTION_DEFINITION =
		"greengrass:GetSubscriptionDefinition";
	/** [Read] greengrass:GetSubscriptionDefinitionVersion */
	static readonly GET_SUBSCRIPTION_DEFINITION_VERSION =
		"greengrass:GetSubscriptionDefinitionVersion";
	/** [Read] greengrass:GetThingRuntimeConfiguration */
	static readonly GET_THING_RUNTIME_CONFIGURATION =
		"greengrass:GetThingRuntimeConfiguration";
	/** [Read] greengrass:ListBulkDeploymentDetailedReports */
	static readonly LIST_BULK_DEPLOYMENT_DETAILED_REPORTS =
		"greengrass:ListBulkDeploymentDetailedReports";
	/** [List] greengrass:ListBulkDeployments */
	static readonly LIST_BULK_DEPLOYMENTS = "greengrass:ListBulkDeployments";
	/** [List] greengrass:ListClientDevicesAssociatedWithCoreDevice */
	static readonly LIST_CLIENT_DEVICES_ASSOCIATED_WITH_CORE_DEVICE =
		"greengrass:ListClientDevicesAssociatedWithCoreDevice";
	/** [List] greengrass:ListComponentVersions */
	static readonly LIST_COMPONENT_VERSIONS = "greengrass:ListComponentVersions";
	/** [List] greengrass:ListComponents */
	static readonly LIST_COMPONENTS = "greengrass:ListComponents";
	/** [List] greengrass:ListConnectorDefinitionVersions */
	static readonly LIST_CONNECTOR_DEFINITION_VERSIONS =
		"greengrass:ListConnectorDefinitionVersions";
	/** [List] greengrass:ListConnectorDefinitions */
	static readonly LIST_CONNECTOR_DEFINITIONS =
		"greengrass:ListConnectorDefinitions";
	/** [List] greengrass:ListCoreDefinitionVersions */
	static readonly LIST_CORE_DEFINITION_VERSIONS =
		"greengrass:ListCoreDefinitionVersions";
	/** [List] greengrass:ListCoreDefinitions */
	static readonly LIST_CORE_DEFINITIONS = "greengrass:ListCoreDefinitions";
	/** [List] greengrass:ListCoreDevices */
	static readonly LIST_CORE_DEVICES = "greengrass:ListCoreDevices";
	/** [List] greengrass:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "greengrass:ListDeployments";
	/** [List] greengrass:ListDeviceDefinitionVersions */
	static readonly LIST_DEVICE_DEFINITION_VERSIONS =
		"greengrass:ListDeviceDefinitionVersions";
	/** [List] greengrass:ListDeviceDefinitions */
	static readonly LIST_DEVICE_DEFINITIONS = "greengrass:ListDeviceDefinitions";
	/** [List] greengrass:ListEffectiveDeployments */
	static readonly LIST_EFFECTIVE_DEPLOYMENTS =
		"greengrass:ListEffectiveDeployments";
	/** [List] greengrass:ListFunctionDefinitionVersions */
	static readonly LIST_FUNCTION_DEFINITION_VERSIONS =
		"greengrass:ListFunctionDefinitionVersions";
	/** [List] greengrass:ListFunctionDefinitions */
	static readonly LIST_FUNCTION_DEFINITIONS =
		"greengrass:ListFunctionDefinitions";
	/** [List] greengrass:ListGroupCertificateAuthorities */
	static readonly LIST_GROUP_CERTIFICATE_AUTHORITIES =
		"greengrass:ListGroupCertificateAuthorities";
	/** [List] greengrass:ListGroupVersions */
	static readonly LIST_GROUP_VERSIONS = "greengrass:ListGroupVersions";
	/** [List] greengrass:ListGroups */
	static readonly LIST_GROUPS = "greengrass:ListGroups";
	/** [List] greengrass:ListInstalledComponents */
	static readonly LIST_INSTALLED_COMPONENTS =
		"greengrass:ListInstalledComponents";
	/** [List] greengrass:ListLoggerDefinitionVersions */
	static readonly LIST_LOGGER_DEFINITION_VERSIONS =
		"greengrass:ListLoggerDefinitionVersions";
	/** [List] greengrass:ListLoggerDefinitions */
	static readonly LIST_LOGGER_DEFINITIONS = "greengrass:ListLoggerDefinitions";
	/** [List] greengrass:ListResourceDefinitionVersions */
	static readonly LIST_RESOURCE_DEFINITION_VERSIONS =
		"greengrass:ListResourceDefinitionVersions";
	/** [List] greengrass:ListResourceDefinitions */
	static readonly LIST_RESOURCE_DEFINITIONS =
		"greengrass:ListResourceDefinitions";
	/** [List] greengrass:ListSubscriptionDefinitionVersions */
	static readonly LIST_SUBSCRIPTION_DEFINITION_VERSIONS =
		"greengrass:ListSubscriptionDefinitionVersions";
	/** [List] greengrass:ListSubscriptionDefinitions */
	static readonly LIST_SUBSCRIPTION_DEFINITIONS =
		"greengrass:ListSubscriptionDefinitions";
	/** [Read] greengrass:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "greengrass:ListTagsForResource";
	/** [Write] greengrass:ResetDeployments */
	static readonly RESET_DEPLOYMENTS = "greengrass:ResetDeployments";
	/** [List] greengrass:ResolveComponentCandidates */
	static readonly RESOLVE_COMPONENT_CANDIDATES =
		"greengrass:ResolveComponentCandidates";
	/** [Write] greengrass:StartBulkDeployment */
	static readonly START_BULK_DEPLOYMENT = "greengrass:StartBulkDeployment";
	/** [Write] greengrass:StopBulkDeployment */
	static readonly STOP_BULK_DEPLOYMENT = "greengrass:StopBulkDeployment";
	/** [Tagging] greengrass:TagResource */
	static readonly TAG_RESOURCE = "greengrass:TagResource";
	/** [Tagging] greengrass:UntagResource */
	static readonly UNTAG_RESOURCE = "greengrass:UntagResource";
	/** [Write] greengrass:UpdateConnectivityInfo */
	static readonly UPDATE_CONNECTIVITY_INFO =
		"greengrass:UpdateConnectivityInfo";
	/** [Write] greengrass:UpdateConnectorDefinition */
	static readonly UPDATE_CONNECTOR_DEFINITION =
		"greengrass:UpdateConnectorDefinition";
	/** [Write] greengrass:UpdateCoreDefinition */
	static readonly UPDATE_CORE_DEFINITION = "greengrass:UpdateCoreDefinition";
	/** [Write] greengrass:UpdateDeviceDefinition */
	static readonly UPDATE_DEVICE_DEFINITION =
		"greengrass:UpdateDeviceDefinition";
	/** [Write] greengrass:UpdateFunctionDefinition */
	static readonly UPDATE_FUNCTION_DEFINITION =
		"greengrass:UpdateFunctionDefinition";
	/** [Write] greengrass:UpdateGroup */
	static readonly UPDATE_GROUP = "greengrass:UpdateGroup";
	/** [Write] greengrass:UpdateGroupCertificateConfiguration */
	static readonly UPDATE_GROUP_CERTIFICATE_CONFIGURATION =
		"greengrass:UpdateGroupCertificateConfiguration";
	/** [Write] greengrass:UpdateLoggerDefinition */
	static readonly UPDATE_LOGGER_DEFINITION =
		"greengrass:UpdateLoggerDefinition";
	/** [Write] greengrass:UpdateResourceDefinition */
	static readonly UPDATE_RESOURCE_DEFINITION =
		"greengrass:UpdateResourceDefinition";
	/** [Write] greengrass:UpdateSubscriptionDefinition */
	static readonly UPDATE_SUBSCRIPTION_DEFINITION =
		"greengrass:UpdateSubscriptionDefinition";
	/** [Write] greengrass:UpdateThingRuntimeConfiguration */
	static readonly UPDATE_THING_RUNTIME_CONFIGURATION =
		"greengrass:UpdateThingRuntimeConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GreengrassActions.DESCRIBE_COMPONENT,
		GreengrassActions.DISCOVER,
		GreengrassActions.GET_ASSOCIATED_ROLE,
		GreengrassActions.GET_BULK_DEPLOYMENT_STATUS,
		GreengrassActions.GET_COMPONENT,
		GreengrassActions.GET_COMPONENT_VERSION_ARTIFACT,
		GreengrassActions.GET_CONNECTIVITY_INFO,
		GreengrassActions.GET_CONNECTOR_DEFINITION,
		GreengrassActions.GET_CONNECTOR_DEFINITION_VERSION,
		GreengrassActions.GET_CORE_DEFINITION,
		GreengrassActions.GET_CORE_DEFINITION_VERSION,
		GreengrassActions.GET_CORE_DEVICE,
		GreengrassActions.GET_DEPLOYMENT,
		GreengrassActions.GET_DEPLOYMENT_STATUS,
		GreengrassActions.GET_DEVICE_DEFINITION,
		GreengrassActions.GET_DEVICE_DEFINITION_VERSION,
		GreengrassActions.GET_FUNCTION_DEFINITION,
		GreengrassActions.GET_FUNCTION_DEFINITION_VERSION,
		GreengrassActions.GET_GROUP,
		GreengrassActions.GET_GROUP_CERTIFICATE_AUTHORITY,
		GreengrassActions.GET_GROUP_CERTIFICATE_CONFIGURATION,
		GreengrassActions.GET_GROUP_VERSION,
		GreengrassActions.GET_LOGGER_DEFINITION,
		GreengrassActions.GET_LOGGER_DEFINITION_VERSION,
		GreengrassActions.GET_RESOURCE_DEFINITION,
		GreengrassActions.GET_RESOURCE_DEFINITION_VERSION,
		GreengrassActions.GET_SERVICE_ROLE_FOR_ACCOUNT,
		GreengrassActions.GET_SUBSCRIPTION_DEFINITION,
		GreengrassActions.GET_SUBSCRIPTION_DEFINITION_VERSION,
		GreengrassActions.GET_THING_RUNTIME_CONFIGURATION,
		GreengrassActions.LIST_BULK_DEPLOYMENT_DETAILED_REPORTS,
		GreengrassActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GreengrassActions.ASSOCIATE_ROLE_TO_GROUP,
		GreengrassActions.BATCH_ASSOCIATE_CLIENT_DEVICE_WITH_CORE_DEVICE,
		GreengrassActions.BATCH_DISASSOCIATE_CLIENT_DEVICE_FROM_CORE_DEVICE,
		GreengrassActions.CANCEL_DEPLOYMENT,
		GreengrassActions.CREATE_COMPONENT_VERSION,
		GreengrassActions.CREATE_CONNECTOR_DEFINITION,
		GreengrassActions.CREATE_CONNECTOR_DEFINITION_VERSION,
		GreengrassActions.CREATE_CORE_DEFINITION,
		GreengrassActions.CREATE_CORE_DEFINITION_VERSION,
		GreengrassActions.CREATE_DEPLOYMENT,
		GreengrassActions.CREATE_DEVICE_DEFINITION,
		GreengrassActions.CREATE_DEVICE_DEFINITION_VERSION,
		GreengrassActions.CREATE_FUNCTION_DEFINITION,
		GreengrassActions.CREATE_FUNCTION_DEFINITION_VERSION,
		GreengrassActions.CREATE_GROUP,
		GreengrassActions.CREATE_GROUP_CERTIFICATE_AUTHORITY,
		GreengrassActions.CREATE_GROUP_VERSION,
		GreengrassActions.CREATE_LOGGER_DEFINITION,
		GreengrassActions.CREATE_LOGGER_DEFINITION_VERSION,
		GreengrassActions.CREATE_RESOURCE_DEFINITION,
		GreengrassActions.CREATE_RESOURCE_DEFINITION_VERSION,
		GreengrassActions.CREATE_SOFTWARE_UPDATE_JOB,
		GreengrassActions.CREATE_SUBSCRIPTION_DEFINITION,
		GreengrassActions.CREATE_SUBSCRIPTION_DEFINITION_VERSION,
		GreengrassActions.DELETE_COMPONENT,
		GreengrassActions.DELETE_CONNECTOR_DEFINITION,
		GreengrassActions.DELETE_CORE_DEFINITION,
		GreengrassActions.DELETE_CORE_DEVICE,
		GreengrassActions.DELETE_DEPLOYMENT,
		GreengrassActions.DELETE_DEVICE_DEFINITION,
		GreengrassActions.DELETE_FUNCTION_DEFINITION,
		GreengrassActions.DELETE_GROUP,
		GreengrassActions.DELETE_LOGGER_DEFINITION,
		GreengrassActions.DELETE_RESOURCE_DEFINITION,
		GreengrassActions.DELETE_SUBSCRIPTION_DEFINITION,
		GreengrassActions.DISASSOCIATE_ROLE_FROM_GROUP,
		GreengrassActions.DISASSOCIATE_SERVICE_ROLE_FROM_ACCOUNT,
		GreengrassActions.RESET_DEPLOYMENTS,
		GreengrassActions.START_BULK_DEPLOYMENT,
		GreengrassActions.STOP_BULK_DEPLOYMENT,
		GreengrassActions.UPDATE_CONNECTIVITY_INFO,
		GreengrassActions.UPDATE_CONNECTOR_DEFINITION,
		GreengrassActions.UPDATE_CORE_DEFINITION,
		GreengrassActions.UPDATE_DEVICE_DEFINITION,
		GreengrassActions.UPDATE_FUNCTION_DEFINITION,
		GreengrassActions.UPDATE_GROUP,
		GreengrassActions.UPDATE_GROUP_CERTIFICATE_CONFIGURATION,
		GreengrassActions.UPDATE_LOGGER_DEFINITION,
		GreengrassActions.UPDATE_RESOURCE_DEFINITION,
		GreengrassActions.UPDATE_SUBSCRIPTION_DEFINITION,
		GreengrassActions.UPDATE_THING_RUNTIME_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GreengrassActions.LIST_BULK_DEPLOYMENTS,
		GreengrassActions.LIST_CLIENT_DEVICES_ASSOCIATED_WITH_CORE_DEVICE,
		GreengrassActions.LIST_COMPONENT_VERSIONS,
		GreengrassActions.LIST_COMPONENTS,
		GreengrassActions.LIST_CONNECTOR_DEFINITION_VERSIONS,
		GreengrassActions.LIST_CONNECTOR_DEFINITIONS,
		GreengrassActions.LIST_CORE_DEFINITION_VERSIONS,
		GreengrassActions.LIST_CORE_DEFINITIONS,
		GreengrassActions.LIST_CORE_DEVICES,
		GreengrassActions.LIST_DEPLOYMENTS,
		GreengrassActions.LIST_DEVICE_DEFINITION_VERSIONS,
		GreengrassActions.LIST_DEVICE_DEFINITIONS,
		GreengrassActions.LIST_EFFECTIVE_DEPLOYMENTS,
		GreengrassActions.LIST_FUNCTION_DEFINITION_VERSIONS,
		GreengrassActions.LIST_FUNCTION_DEFINITIONS,
		GreengrassActions.LIST_GROUP_CERTIFICATE_AUTHORITIES,
		GreengrassActions.LIST_GROUP_VERSIONS,
		GreengrassActions.LIST_GROUPS,
		GreengrassActions.LIST_INSTALLED_COMPONENTS,
		GreengrassActions.LIST_LOGGER_DEFINITION_VERSIONS,
		GreengrassActions.LIST_LOGGER_DEFINITIONS,
		GreengrassActions.LIST_RESOURCE_DEFINITION_VERSIONS,
		GreengrassActions.LIST_RESOURCE_DEFINITIONS,
		GreengrassActions.LIST_SUBSCRIPTION_DEFINITION_VERSIONS,
		GreengrassActions.LIST_SUBSCRIPTION_DEFINITIONS,
		GreengrassActions.RESOLVE_COMPONENT_CANDIDATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		GreengrassActions.ASSOCIATE_SERVICE_ROLE_TO_ACCOUNT,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GreengrassActions.TAG_RESOURCE,
		GreengrassActions.UNTAG_RESOURCE,
	];
}

const BulkDeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/bulk/deployments/(?<bulkDeploymentId>[^:/?]+)$",
);
const CertificateAuthorityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/groups/(?<groupId>[^:/?]+)/certificateauthorities/(?<certificateAuthorityId>[^:/?]+)$",
);
const ComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):components:(?<componentName>[^:/?]+)$",
);
const ComponentVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):components:(?<componentName>[^:/?]+):versions:(?<componentVersion>[^:/?]+)$",
);
const ConnectivityInfoArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/things/(?<thingName>[^:/?]+)/connectivityInfo$",
);
const ConnectorDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/connectors/(?<connectorDefinitionId>[^:/?]+)$",
);
const ConnectorDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/connectors/(?<connectorDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const CoreDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/cores/(?<coreDefinitionId>[^:/?]+)$",
);
const CoreDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/cores/(?<coreDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const CoreDeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):coreDevices:(?<coreDeviceThingName>[^:/?]+)$",
);
const DeploymentArnRegex = new RegExp(
	"^(?:arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/groups/(?<groupId>[^:/?]+)/deployments/(?<deploymentId>[^:/?]+)|arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):deployments:(?<deploymentId>[^:/?]+))$",
);
const DeviceDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/devices/(?<deviceDefinitionId>[^:/?]+)$",
);
const DeviceDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/devices/(?<deviceDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const FunctionDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/functions/(?<functionDefinitionId>[^:/?]+)$",
);
const FunctionDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/functions/(?<functionDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/groups/(?<groupId>[^:/?]+)$",
);
const GroupVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/groups/(?<groupId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const LoggerDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/loggers/(?<loggerDefinitionId>[^:/?]+)$",
);
const LoggerDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/loggers/(?<loggerDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const ResourceDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/resources/(?<resourceDefinitionId>[^:/?]+)$",
);
const ResourceDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/resources/(?<resourceDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const SubscriptionDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/subscriptions/(?<subscriptionDefinitionId>[^:/?]+)$",
);
const SubscriptionDefinitionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/definition/subscriptions/(?<subscriptionDefinitionId>[^:/?]+)/versions/(?<versionId>[^:/?]+)$",
);
const ThingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing/(?<thingName>[^:/?]+)$",
);
const ThingRuntimeConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):/greengrass/things/(?<thingName>[^:/?]+)/runtimeconfig$",
);

/**
 * ARN builders, validators, and parsers for greengrass resources.
 */
export class GreengrassResources {
	/**
	 * Builds an ARN for the bulkDeployment resource.
	 */
	static bulkDeployment(props: {
		/** The BulkDeploymentId component of the ARN. */
		readonly bulkDeploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/bulk/deployments/${props.bulkDeploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bulkDeployment resource.
	 */
	static isValidBulkDeploymentArn(arn: string): boolean {
		return BulkDeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a bulkDeployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBulkDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bulkDeploymentId: string;
	} {
		const match = BulkDeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bulkDeployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bulkDeploymentId: match.groups!.bulkDeploymentId,
		};
	}

	/**
	 * Builds an ARN for the certificateAuthority resource.
	 */
	static certificateAuthority(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** The CertificateAuthorityId component of the ARN. */
		readonly certificateAuthorityId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/groups/${props.groupId}/certificateauthorities/${props.certificateAuthorityId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificateAuthority resource.
	 */
	static isValidCertificateAuthorityArn(arn: string): boolean {
		return CertificateAuthorityArnRegex.test(arn);
	}

	/**
	 * Parses a certificateAuthority ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateAuthorityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
		certificateAuthorityId: string;
	} {
		const match = CertificateAuthorityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificateAuthority ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
			certificateAuthorityId: match.groups!.certificateAuthorityId,
		};
	}

	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: {
		/** The ComponentName component of the ARN. */
		readonly componentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:components:${props.componentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the component resource.
	 */
	static isValidComponentArn(arn: string): boolean {
		return ComponentArnRegex.test(arn);
	}

	/**
	 * Parses a component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		componentName: string;
	} {
		const match = ComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			componentName: match.groups!.componentName,
		};
	}

	/**
	 * Builds an ARN for the componentVersion resource.
	 */
	static componentVersion(props: {
		/** The ComponentName component of the ARN. */
		readonly componentName: string;
		/** The ComponentVersion component of the ARN. */
		readonly componentVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:components:${props.componentName}:versions:${props.componentVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the componentVersion resource.
	 */
	static isValidComponentVersionArn(arn: string): boolean {
		return ComponentVersionArnRegex.test(arn);
	}

	/**
	 * Parses a componentVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		componentName: string;
		componentVersion: string;
	} {
		const match = ComponentVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid componentVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			componentName: match.groups!.componentName,
			componentVersion: match.groups!.componentVersion,
		};
	}

	/**
	 * Builds an ARN for the connectivityInfo resource.
	 */
	static connectivityInfo(props: {
		/** The ThingName component of the ARN. */
		readonly thingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/things/${props.thingName}/connectivityInfo`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectivityInfo resource.
	 */
	static isValidConnectivityInfoArn(arn: string): boolean {
		return ConnectivityInfoArnRegex.test(arn);
	}

	/**
	 * Parses a connectivityInfo ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectivityInfoArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingName: string;
	} {
		const match = ConnectivityInfoArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectivityInfo ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingName: match.groups!.thingName,
		};
	}

	/**
	 * Builds an ARN for the connectorDefinition resource.
	 */
	static connectorDefinition(props: {
		/** The ConnectorDefinitionId component of the ARN. */
		readonly connectorDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/connectors/${props.connectorDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectorDefinition resource.
	 */
	static isValidConnectorDefinitionArn(arn: string): boolean {
		return ConnectorDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a connectorDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorDefinitionId: string;
	} {
		const match = ConnectorDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectorDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorDefinitionId: match.groups!.connectorDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the connectorDefinitionVersion resource.
	 */
	static connectorDefinitionVersion(props: {
		/** The ConnectorDefinitionId component of the ARN. */
		readonly connectorDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/connectors/${props.connectorDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectorDefinitionVersion resource.
	 */
	static isValidConnectorDefinitionVersionArn(arn: string): boolean {
		return ConnectorDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a connectorDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorDefinitionId: string;
		versionId: string;
	} {
		const match = ConnectorDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectorDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorDefinitionId: match.groups!.connectorDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the coreDefinition resource.
	 */
	static coreDefinition(props: {
		/** The CoreDefinitionId component of the ARN. */
		readonly coreDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/cores/${props.coreDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the coreDefinition resource.
	 */
	static isValidCoreDefinitionArn(arn: string): boolean {
		return CoreDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a coreDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCoreDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		coreDefinitionId: string;
	} {
		const match = CoreDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid coreDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			coreDefinitionId: match.groups!.coreDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the coreDefinitionVersion resource.
	 */
	static coreDefinitionVersion(props: {
		/** The CoreDefinitionId component of the ARN. */
		readonly coreDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/cores/${props.coreDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the coreDefinitionVersion resource.
	 */
	static isValidCoreDefinitionVersionArn(arn: string): boolean {
		return CoreDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a coreDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCoreDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		coreDefinitionId: string;
		versionId: string;
	} {
		const match = CoreDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid coreDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			coreDefinitionId: match.groups!.coreDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the coreDevice resource.
	 */
	static coreDevice(props: {
		/** The CoreDeviceThingName component of the ARN. */
		readonly coreDeviceThingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:coreDevices:${props.coreDeviceThingName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the coreDevice resource.
	 */
	static isValidCoreDeviceArn(arn: string): boolean {
		return CoreDeviceArnRegex.test(arn);
	}

	/**
	 * Parses a coreDevice ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCoreDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		coreDeviceThingName: string;
	} {
		const match = CoreDeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid coreDevice ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			coreDeviceThingName: match.groups!.coreDeviceThingName,
		};
	}

	/**
	 * Builds an ARN for the deploymentVariant1 resource.
	 */
	static deploymentVariant1(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** The DeploymentId component of the ARN. */
		readonly deploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/groups/${props.groupId}/deployments/${props.deploymentId}`;
	}

	/**
	 * Builds an ARN for the deploymentVariant2 resource.
	 */
	static deploymentVariant2(props: {
		/** The DeploymentId component of the ARN. */
		readonly deploymentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:deployments:${props.deploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
		deploymentId: string;
	} {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
			deploymentId: match.groups!.deploymentId,
		};
	}

	/**
	 * Builds an ARN for the deviceDefinition resource.
	 */
	static deviceDefinition(props: {
		/** The DeviceDefinitionId component of the ARN. */
		readonly deviceDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/devices/${props.deviceDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deviceDefinition resource.
	 */
	static isValidDeviceDefinitionArn(arn: string): boolean {
		return DeviceDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a deviceDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceDefinitionId: string;
	} {
		const match = DeviceDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deviceDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceDefinitionId: match.groups!.deviceDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the deviceDefinitionVersion resource.
	 */
	static deviceDefinitionVersion(props: {
		/** The DeviceDefinitionId component of the ARN. */
		readonly deviceDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/devices/${props.deviceDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deviceDefinitionVersion resource.
	 */
	static isValidDeviceDefinitionVersionArn(arn: string): boolean {
		return DeviceDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a deviceDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceDefinitionId: string;
		versionId: string;
	} {
		const match = DeviceDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deviceDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceDefinitionId: match.groups!.deviceDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the functionDefinition resource.
	 */
	static functionDefinition(props: {
		/** The FunctionDefinitionId component of the ARN. */
		readonly functionDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/functions/${props.functionDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the functionDefinition resource.
	 */
	static isValidFunctionDefinitionArn(arn: string): boolean {
		return FunctionDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a functionDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionDefinitionId: string;
	} {
		const match = FunctionDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid functionDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionDefinitionId: match.groups!.functionDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the functionDefinitionVersion resource.
	 */
	static functionDefinitionVersion(props: {
		/** The FunctionDefinitionId component of the ARN. */
		readonly functionDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/functions/${props.functionDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the functionDefinitionVersion resource.
	 */
	static isValidFunctionDefinitionVersionArn(arn: string): boolean {
		return FunctionDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a functionDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionDefinitionId: string;
		versionId: string;
	} {
		const match = FunctionDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid functionDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionDefinitionId: match.groups!.functionDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/groups/${props.groupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
		};
	}

	/**
	 * Builds an ARN for the groupVersion resource.
	 */
	static groupVersion(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/groups/${props.groupId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the groupVersion resource.
	 */
	static isValidGroupVersionArn(arn: string): boolean {
		return GroupVersionArnRegex.test(arn);
	}

	/**
	 * Parses a groupVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
		versionId: string;
	} {
		const match = GroupVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid groupVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the loggerDefinition resource.
	 */
	static loggerDefinition(props: {
		/** The LoggerDefinitionId component of the ARN. */
		readonly loggerDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/loggers/${props.loggerDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loggerDefinition resource.
	 */
	static isValidLoggerDefinitionArn(arn: string): boolean {
		return LoggerDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a loggerDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoggerDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		loggerDefinitionId: string;
	} {
		const match = LoggerDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loggerDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loggerDefinitionId: match.groups!.loggerDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the loggerDefinitionVersion resource.
	 */
	static loggerDefinitionVersion(props: {
		/** The LoggerDefinitionId component of the ARN. */
		readonly loggerDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/loggers/${props.loggerDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loggerDefinitionVersion resource.
	 */
	static isValidLoggerDefinitionVersionArn(arn: string): boolean {
		return LoggerDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a loggerDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoggerDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		loggerDefinitionId: string;
		versionId: string;
	} {
		const match = LoggerDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loggerDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loggerDefinitionId: match.groups!.loggerDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the resourceDefinition resource.
	 */
	static resourceDefinition(props: {
		/** The ResourceDefinitionId component of the ARN. */
		readonly resourceDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/resources/${props.resourceDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourceDefinition resource.
	 */
	static isValidResourceDefinitionArn(arn: string): boolean {
		return ResourceDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a resourceDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceDefinitionId: string;
	} {
		const match = ResourceDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourceDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceDefinitionId: match.groups!.resourceDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the resourceDefinitionVersion resource.
	 */
	static resourceDefinitionVersion(props: {
		/** The ResourceDefinitionId component of the ARN. */
		readonly resourceDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/resources/${props.resourceDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourceDefinitionVersion resource.
	 */
	static isValidResourceDefinitionVersionArn(arn: string): boolean {
		return ResourceDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a resourceDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceDefinitionId: string;
		versionId: string;
	} {
		const match = ResourceDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourceDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceDefinitionId: match.groups!.resourceDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the subscriptionDefinition resource.
	 */
	static subscriptionDefinition(props: {
		/** The SubscriptionDefinitionId component of the ARN. */
		readonly subscriptionDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/subscriptions/${props.subscriptionDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscriptionDefinition resource.
	 */
	static isValidSubscriptionDefinitionArn(arn: string): boolean {
		return SubscriptionDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a subscriptionDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriptionDefinitionId: string;
	} {
		const match = SubscriptionDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscriptionDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriptionDefinitionId: match.groups!.subscriptionDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the subscriptionDefinitionVersion resource.
	 */
	static subscriptionDefinitionVersion(props: {
		/** The SubscriptionDefinitionId component of the ARN. */
		readonly subscriptionDefinitionId: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/definition/subscriptions/${props.subscriptionDefinitionId}/versions/${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscriptionDefinitionVersion resource.
	 */
	static isValidSubscriptionDefinitionVersionArn(arn: string): boolean {
		return SubscriptionDefinitionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a subscriptionDefinitionVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionDefinitionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriptionDefinitionId: string;
		versionId: string;
	} {
		const match = SubscriptionDefinitionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscriptionDefinitionVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriptionDefinitionId: match.groups!.subscriptionDefinitionId,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the thing resource.
	 */
	static thing(props: {
		/** The ThingName component of the ARN. */
		readonly thingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thing/${props.thingName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thing resource.
	 */
	static isValidThingArn(arn: string): boolean {
		return ThingArnRegex.test(arn);
	}

	/**
	 * Parses a thing ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingName: string;
	} {
		const match = ThingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thing ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingName: match.groups!.thingName,
		};
	}

	/**
	 * Builds an ARN for the thingRuntimeConfig resource.
	 */
	static thingRuntimeConfig(props: {
		/** The ThingName component of the ARN. */
		readonly thingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/things/${props.thingName}/runtimeconfig`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thingRuntimeConfig resource.
	 */
	static isValidThingRuntimeConfigArn(arn: string): boolean {
		return ThingRuntimeConfigArnRegex.test(arn);
	}

	/**
	 * Parses a thingRuntimeConfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThingRuntimeConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingName: string;
	} {
		const match = ThingRuntimeConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thingRuntimeConfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingName: match.groups!.thingName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for greengrass.
 */
export class GreengrassOperations {
	/** IAM actions required for the AssociateRoleToGroup API call. */
	static readonly ASSOCIATE_ROLE_TO_GROUP: string[] = [
		"greengrass:AssociateRoleToGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the AssociateServiceRoleToAccount API call. */
	static readonly ASSOCIATE_SERVICE_ROLE_TO_ACCOUNT: string[] = [
		"greengrass:AssociateServiceRoleToAccount",
		"iam:PassRole",
	];
	/** IAM actions required for the BatchAssociateClientDeviceWithCoreDevice API call. */
	static readonly BATCH_ASSOCIATE_CLIENT_DEVICE_WITH_CORE_DEVICE: string[] = [
		"greengrass:BatchAssociateClientDeviceWithCoreDevice",
	];
	/** IAM actions required for the BatchDisassociateClientDeviceFromCoreDevice API call. */
	static readonly BATCH_DISASSOCIATE_CLIENT_DEVICE_FROM_CORE_DEVICE: string[] =
		["greengrass:BatchDisassociateClientDeviceFromCoreDevice"];
	/** IAM actions required for the CancelDeployment API call. */
	static readonly CANCEL_DEPLOYMENT: string[] = ["greengrass:CancelDeployment"];
	/** IAM actions required for the CreateComponentVersion API call. */
	static readonly CREATE_COMPONENT_VERSION: string[] = [
		"greengrass:CreateComponentVersion",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateConnectorDefinition API call. */
	static readonly CREATE_CONNECTOR_DEFINITION: string[] = [
		"greengrass:CreateConnectorDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateConnectorDefinitionVersion API call. */
	static readonly CREATE_CONNECTOR_DEFINITION_VERSION: string[] = [
		"greengrass:CreateConnectorDefinitionVersion",
	];
	/** IAM actions required for the CreateCoreDefinition API call. */
	static readonly CREATE_CORE_DEFINITION: string[] = [
		"greengrass:CreateCoreDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateCoreDefinitionVersion API call. */
	static readonly CREATE_CORE_DEFINITION_VERSION: string[] = [
		"greengrass:CreateCoreDefinitionVersion",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CREATE_DEPLOYMENT: string[] = [
		"greengrass:CreateDeployment",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateDeviceDefinition API call. */
	static readonly CREATE_DEVICE_DEFINITION: string[] = [
		"greengrass:CreateDeviceDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateDeviceDefinitionVersion API call. */
	static readonly CREATE_DEVICE_DEFINITION_VERSION: string[] = [
		"greengrass:CreateDeviceDefinitionVersion",
	];
	/** IAM actions required for the CreateFunctionDefinition API call. */
	static readonly CREATE_FUNCTION_DEFINITION: string[] = [
		"greengrass:CreateFunctionDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateFunctionDefinitionVersion API call. */
	static readonly CREATE_FUNCTION_DEFINITION_VERSION: string[] = [
		"greengrass:CreateFunctionDefinitionVersion",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"greengrass:CreateGroup",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateGroupCertificateAuthority API call. */
	static readonly CREATE_GROUP_CERTIFICATE_AUTHORITY: string[] = [
		"greengrass:CreateGroupCertificateAuthority",
	];
	/** IAM actions required for the CreateGroupVersion API call. */
	static readonly CREATE_GROUP_VERSION: string[] = [
		"greengrass:CreateGroupVersion",
	];
	/** IAM actions required for the CreateLoggerDefinition API call. */
	static readonly CREATE_LOGGER_DEFINITION: string[] = [
		"greengrass:CreateLoggerDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateLoggerDefinitionVersion API call. */
	static readonly CREATE_LOGGER_DEFINITION_VERSION: string[] = [
		"greengrass:CreateLoggerDefinitionVersion",
	];
	/** IAM actions required for the CreateResourceDefinition API call. */
	static readonly CREATE_RESOURCE_DEFINITION: string[] = [
		"greengrass:CreateResourceDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateResourceDefinitionVersion API call. */
	static readonly CREATE_RESOURCE_DEFINITION_VERSION: string[] = [
		"greengrass:CreateResourceDefinitionVersion",
	];
	/** IAM actions required for the CreateSoftwareUpdateJob API call. */
	static readonly CREATE_SOFTWARE_UPDATE_JOB: string[] = [
		"greengrass:CreateSoftwareUpdateJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSubscriptionDefinition API call. */
	static readonly CREATE_SUBSCRIPTION_DEFINITION: string[] = [
		"greengrass:CreateSubscriptionDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateSubscriptionDefinitionVersion API call. */
	static readonly CREATE_SUBSCRIPTION_DEFINITION_VERSION: string[] = [
		"greengrass:CreateSubscriptionDefinitionVersion",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DELETE_COMPONENT: string[] = ["greengrass:DeleteComponent"];
	/** IAM actions required for the DeleteConnectorDefinition API call. */
	static readonly DELETE_CONNECTOR_DEFINITION: string[] = [
		"greengrass:DeleteConnectorDefinition",
	];
	/** IAM actions required for the DeleteCoreDefinition API call. */
	static readonly DELETE_CORE_DEFINITION: string[] = [
		"greengrass:DeleteCoreDefinition",
	];
	/** IAM actions required for the DeleteCoreDevice API call. */
	static readonly DELETE_CORE_DEVICE: string[] = [
		"greengrass:DeleteCoreDevice",
	];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DELETE_DEPLOYMENT: string[] = ["greengrass:DeleteDeployment"];
	/** IAM actions required for the DeleteDeviceDefinition API call. */
	static readonly DELETE_DEVICE_DEFINITION: string[] = [
		"greengrass:DeleteDeviceDefinition",
	];
	/** IAM actions required for the DeleteFunctionDefinition API call. */
	static readonly DELETE_FUNCTION_DEFINITION: string[] = [
		"greengrass:DeleteFunctionDefinition",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["greengrass:DeleteGroup"];
	/** IAM actions required for the DeleteLoggerDefinition API call. */
	static readonly DELETE_LOGGER_DEFINITION: string[] = [
		"greengrass:DeleteLoggerDefinition",
	];
	/** IAM actions required for the DeleteResourceDefinition API call. */
	static readonly DELETE_RESOURCE_DEFINITION: string[] = [
		"greengrass:DeleteResourceDefinition",
	];
	/** IAM actions required for the DeleteSubscriptionDefinition API call. */
	static readonly DELETE_SUBSCRIPTION_DEFINITION: string[] = [
		"greengrass:DeleteSubscriptionDefinition",
	];
	/** IAM actions required for the DescribeComponent API call. */
	static readonly DESCRIBE_COMPONENT: string[] = [
		"greengrass:DescribeComponent",
	];
	/** IAM actions required for the DisassociateRoleFromGroup API call. */
	static readonly DISASSOCIATE_ROLE_FROM_GROUP: string[] = [
		"greengrass:DisassociateRoleFromGroup",
	];
	/** IAM actions required for the DisassociateServiceRoleFromAccount API call. */
	static readonly DISASSOCIATE_SERVICE_ROLE_FROM_ACCOUNT: string[] = [
		"greengrass:DisassociateServiceRoleFromAccount",
	];
	/** IAM actions required for the GetAssociatedRole API call. */
	static readonly GET_ASSOCIATED_ROLE: string[] = [
		"greengrass:GetAssociatedRole",
	];
	/** IAM actions required for the GetBulkDeploymentStatus API call. */
	static readonly GET_BULK_DEPLOYMENT_STATUS: string[] = [
		"greengrass:GetBulkDeploymentStatus",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly GET_COMPONENT: string[] = ["greengrass:GetComponent"];
	/** IAM actions required for the GetComponentVersionArtifact API call. */
	static readonly GET_COMPONENT_VERSION_ARTIFACT: string[] = [
		"greengrass:GetComponentVersionArtifact",
	];
	/** IAM actions required for the GetConnectivityInfo API call. */
	static readonly GET_CONNECTIVITY_INFO: string[] = [
		"greengrass:GetConnectivityInfo",
	];
	/** IAM actions required for the GetConnectorDefinition API call. */
	static readonly GET_CONNECTOR_DEFINITION: string[] = [
		"greengrass:GetConnectorDefinition",
	];
	/** IAM actions required for the GetConnectorDefinitionVersion API call. */
	static readonly GET_CONNECTOR_DEFINITION_VERSION: string[] = [
		"greengrass:GetConnectorDefinitionVersion",
	];
	/** IAM actions required for the GetCoreDefinition API call. */
	static readonly GET_CORE_DEFINITION: string[] = [
		"greengrass:GetCoreDefinition",
	];
	/** IAM actions required for the GetCoreDefinitionVersion API call. */
	static readonly GET_CORE_DEFINITION_VERSION: string[] = [
		"greengrass:GetCoreDefinitionVersion",
	];
	/** IAM actions required for the GetCoreDevice API call. */
	static readonly GET_CORE_DEVICE: string[] = ["greengrass:GetCoreDevice"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["greengrass:GetDeployment"];
	/** IAM actions required for the GetDeploymentStatus API call. */
	static readonly GET_DEPLOYMENT_STATUS: string[] = [
		"greengrass:GetDeploymentStatus",
	];
	/** IAM actions required for the GetDeviceDefinition API call. */
	static readonly GET_DEVICE_DEFINITION: string[] = [
		"greengrass:GetDeviceDefinition",
	];
	/** IAM actions required for the GetDeviceDefinitionVersion API call. */
	static readonly GET_DEVICE_DEFINITION_VERSION: string[] = [
		"greengrass:GetDeviceDefinitionVersion",
	];
	/** IAM actions required for the GetFunctionDefinition API call. */
	static readonly GET_FUNCTION_DEFINITION: string[] = [
		"greengrass:GetFunctionDefinition",
	];
	/** IAM actions required for the GetFunctionDefinitionVersion API call. */
	static readonly GET_FUNCTION_DEFINITION_VERSION: string[] = [
		"greengrass:GetFunctionDefinitionVersion",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["greengrass:GetGroup"];
	/** IAM actions required for the GetGroupCertificateAuthority API call. */
	static readonly GET_GROUP_CERTIFICATE_AUTHORITY: string[] = [
		"greengrass:GetGroupCertificateAuthority",
	];
	/** IAM actions required for the GetGroupCertificateConfiguration API call. */
	static readonly GET_GROUP_CERTIFICATE_CONFIGURATION: string[] = [
		"greengrass:GetGroupCertificateConfiguration",
	];
	/** IAM actions required for the GetGroupVersion API call. */
	static readonly GET_GROUP_VERSION: string[] = ["greengrass:GetGroupVersion"];
	/** IAM actions required for the GetLoggerDefinition API call. */
	static readonly GET_LOGGER_DEFINITION: string[] = [
		"greengrass:GetLoggerDefinition",
	];
	/** IAM actions required for the GetLoggerDefinitionVersion API call. */
	static readonly GET_LOGGER_DEFINITION_VERSION: string[] = [
		"greengrass:GetLoggerDefinitionVersion",
	];
	/** IAM actions required for the GetResourceDefinition API call. */
	static readonly GET_RESOURCE_DEFINITION: string[] = [
		"greengrass:GetResourceDefinition",
	];
	/** IAM actions required for the GetResourceDefinitionVersion API call. */
	static readonly GET_RESOURCE_DEFINITION_VERSION: string[] = [
		"greengrass:GetResourceDefinitionVersion",
	];
	/** IAM actions required for the GetServiceRoleForAccount API call. */
	static readonly GET_SERVICE_ROLE_FOR_ACCOUNT: string[] = [
		"greengrass:GetServiceRoleForAccount",
	];
	/** IAM actions required for the GetSubscriptionDefinition API call. */
	static readonly GET_SUBSCRIPTION_DEFINITION: string[] = [
		"greengrass:GetSubscriptionDefinition",
	];
	/** IAM actions required for the GetSubscriptionDefinitionVersion API call. */
	static readonly GET_SUBSCRIPTION_DEFINITION_VERSION: string[] = [
		"greengrass:GetSubscriptionDefinitionVersion",
	];
	/** IAM actions required for the GetThingRuntimeConfiguration API call. */
	static readonly GET_THING_RUNTIME_CONFIGURATION: string[] = [
		"greengrass:GetThingRuntimeConfiguration",
	];
	/** IAM actions required for the ListBulkDeploymentDetailedReports API call. */
	static readonly LIST_BULK_DEPLOYMENT_DETAILED_REPORTS: string[] = [
		"greengrass:ListBulkDeploymentDetailedReports",
	];
	/** IAM actions required for the ListBulkDeployments API call. */
	static readonly LIST_BULK_DEPLOYMENTS: string[] = [
		"greengrass:ListBulkDeployments",
	];
	/** IAM actions required for the ListClientDevicesAssociatedWithCoreDevice API call. */
	static readonly LIST_CLIENT_DEVICES_ASSOCIATED_WITH_CORE_DEVICE: string[] = [
		"greengrass:ListClientDevicesAssociatedWithCoreDevice",
	];
	/** IAM actions required for the ListComponentVersions API call. */
	static readonly LIST_COMPONENT_VERSIONS: string[] = [
		"greengrass:ListComponentVersions",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = ["greengrass:ListComponents"];
	/** IAM actions required for the ListConnectorDefinitionVersions API call. */
	static readonly LIST_CONNECTOR_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListConnectorDefinitionVersions",
	];
	/** IAM actions required for the ListConnectorDefinitions API call. */
	static readonly LIST_CONNECTOR_DEFINITIONS: string[] = [
		"greengrass:ListConnectorDefinitions",
	];
	/** IAM actions required for the ListCoreDefinitionVersions API call. */
	static readonly LIST_CORE_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListCoreDefinitionVersions",
	];
	/** IAM actions required for the ListCoreDefinitions API call. */
	static readonly LIST_CORE_DEFINITIONS: string[] = [
		"greengrass:ListCoreDefinitions",
	];
	/** IAM actions required for the ListCoreDevices API call. */
	static readonly LIST_CORE_DEVICES: string[] = ["greengrass:ListCoreDevices"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["greengrass:ListDeployments"];
	/** IAM actions required for the ListDeviceDefinitionVersions API call. */
	static readonly LIST_DEVICE_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListDeviceDefinitionVersions",
	];
	/** IAM actions required for the ListDeviceDefinitions API call. */
	static readonly LIST_DEVICE_DEFINITIONS: string[] = [
		"greengrass:ListDeviceDefinitions",
	];
	/** IAM actions required for the ListEffectiveDeployments API call. */
	static readonly LIST_EFFECTIVE_DEPLOYMENTS: string[] = [
		"greengrass:ListEffectiveDeployments",
	];
	/** IAM actions required for the ListFunctionDefinitionVersions API call. */
	static readonly LIST_FUNCTION_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListFunctionDefinitionVersions",
	];
	/** IAM actions required for the ListFunctionDefinitions API call. */
	static readonly LIST_FUNCTION_DEFINITIONS: string[] = [
		"greengrass:ListFunctionDefinitions",
	];
	/** IAM actions required for the ListGroupCertificateAuthorities API call. */
	static readonly LIST_GROUP_CERTIFICATE_AUTHORITIES: string[] = [
		"greengrass:ListGroupCertificateAuthorities",
	];
	/** IAM actions required for the ListGroupVersions API call. */
	static readonly LIST_GROUP_VERSIONS: string[] = [
		"greengrass:ListGroupVersions",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["greengrass:ListGroups"];
	/** IAM actions required for the ListInstalledComponents API call. */
	static readonly LIST_INSTALLED_COMPONENTS: string[] = [
		"greengrass:ListInstalledComponents",
	];
	/** IAM actions required for the ListLoggerDefinitionVersions API call. */
	static readonly LIST_LOGGER_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListLoggerDefinitionVersions",
	];
	/** IAM actions required for the ListLoggerDefinitions API call. */
	static readonly LIST_LOGGER_DEFINITIONS: string[] = [
		"greengrass:ListLoggerDefinitions",
	];
	/** IAM actions required for the ListResourceDefinitionVersions API call. */
	static readonly LIST_RESOURCE_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListResourceDefinitionVersions",
	];
	/** IAM actions required for the ListResourceDefinitions API call. */
	static readonly LIST_RESOURCE_DEFINITIONS: string[] = [
		"greengrass:ListResourceDefinitions",
	];
	/** IAM actions required for the ListSubscriptionDefinitionVersions API call. */
	static readonly LIST_SUBSCRIPTION_DEFINITION_VERSIONS: string[] = [
		"greengrass:ListSubscriptionDefinitionVersions",
	];
	/** IAM actions required for the ListSubscriptionDefinitions API call. */
	static readonly LIST_SUBSCRIPTION_DEFINITIONS: string[] = [
		"greengrass:ListSubscriptionDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"greengrass:ListTagsForResource",
	];
	/** IAM actions required for the ResetDeployments API call. */
	static readonly RESET_DEPLOYMENTS: string[] = ["greengrass:ResetDeployments"];
	/** IAM actions required for the ResolveComponentCandidates API call. */
	static readonly RESOLVE_COMPONENT_CANDIDATES: string[] = [];
	/** IAM actions required for the StartBulkDeployment API call. */
	static readonly START_BULK_DEPLOYMENT: string[] = [
		"iam:PassRole",
		"greengrass:StartBulkDeployment",
		"greengrass:TagResource",
	];
	/** IAM actions required for the StopBulkDeployment API call. */
	static readonly STOP_BULK_DEPLOYMENT: string[] = [
		"greengrass:StopBulkDeployment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["greengrass:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["greengrass:UntagResource"];
	/** IAM actions required for the UpdateConnectivityInfo API call. */
	static readonly UPDATE_CONNECTIVITY_INFO: string[] = [
		"greengrass:UpdateConnectivityInfo",
	];
	/** IAM actions required for the UpdateConnectorDefinition API call. */
	static readonly UPDATE_CONNECTOR_DEFINITION: string[] = [
		"greengrass:UpdateConnectorDefinition",
	];
	/** IAM actions required for the UpdateCoreDefinition API call. */
	static readonly UPDATE_CORE_DEFINITION: string[] = [
		"greengrass:UpdateCoreDefinition",
	];
	/** IAM actions required for the UpdateDeviceDefinition API call. */
	static readonly UPDATE_DEVICE_DEFINITION: string[] = [
		"greengrass:UpdateDeviceDefinition",
	];
	/** IAM actions required for the UpdateFunctionDefinition API call. */
	static readonly UPDATE_FUNCTION_DEFINITION: string[] = [
		"greengrass:UpdateFunctionDefinition",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["greengrass:UpdateGroup"];
	/** IAM actions required for the UpdateGroupCertificateConfiguration API call. */
	static readonly UPDATE_GROUP_CERTIFICATE_CONFIGURATION: string[] = [
		"greengrass:UpdateGroupCertificateConfiguration",
	];
	/** IAM actions required for the UpdateLoggerDefinition API call. */
	static readonly UPDATE_LOGGER_DEFINITION: string[] = [
		"greengrass:UpdateLoggerDefinition",
	];
	/** IAM actions required for the UpdateResourceDefinition API call. */
	static readonly UPDATE_RESOURCE_DEFINITION: string[] = [
		"greengrass:UpdateResourceDefinition",
	];
	/** IAM actions required for the UpdateSubscriptionDefinition API call. */
	static readonly UPDATE_SUBSCRIPTION_DEFINITION: string[] = [
		"greengrass:UpdateSubscriptionDefinition",
	];
	/** IAM actions required for the UpdateThingRuntimeConfiguration API call. */
	static readonly UPDATE_THING_RUNTIME_CONFIGURATION: string[] = [
		"greengrass:UpdateThingRuntimeConfiguration",
	];
}

/**
 * Condition key constants and builders for greengrass.
 */
export class GreengrassConditions {
	/** Condition keys applicable to the CreateComponentVersion action. */
	static readonly CREATE_COMPONENT_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectorDefinition action. */
	static readonly CREATE_CONNECTOR_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCoreDefinition action. */
	static readonly CREATE_CORE_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeployment action. */
	static readonly CREATE_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeviceDefinition action. */
	static readonly CREATE_DEVICE_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFunctionDefinition action. */
	static readonly CREATE_FUNCTION_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggerDefinition action. */
	static readonly CREATE_LOGGER_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceDefinition action. */
	static readonly CREATE_RESOURCE_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscriptionDefinition action. */
	static readonly CREATE_SUBSCRIPTION_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartBulkDeployment action. */
	static readonly START_BULK_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
