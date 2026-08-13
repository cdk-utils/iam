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
	static readonly AssociateRoleToGroup = "greengrass:AssociateRoleToGroup";
	/** [PermissionManagement] greengrass:AssociateServiceRoleToAccount */
	static readonly AssociateServiceRoleToAccount =
		"greengrass:AssociateServiceRoleToAccount";
	/** [Write] greengrass:BatchAssociateClientDeviceWithCoreDevice */
	static readonly BatchAssociateClientDeviceWithCoreDevice =
		"greengrass:BatchAssociateClientDeviceWithCoreDevice";
	/** [Write] greengrass:BatchDisassociateClientDeviceFromCoreDevice */
	static readonly BatchDisassociateClientDeviceFromCoreDevice =
		"greengrass:BatchDisassociateClientDeviceFromCoreDevice";
	/** [Write] greengrass:CancelDeployment */
	static readonly CancelDeployment = "greengrass:CancelDeployment";
	/** [Write] greengrass:CreateComponentVersion */
	static readonly CreateComponentVersion = "greengrass:CreateComponentVersion";
	/** [Write] greengrass:CreateConnectorDefinition */
	static readonly CreateConnectorDefinition =
		"greengrass:CreateConnectorDefinition";
	/** [Write] greengrass:CreateConnectorDefinitionVersion */
	static readonly CreateConnectorDefinitionVersion =
		"greengrass:CreateConnectorDefinitionVersion";
	/** [Write] greengrass:CreateCoreDefinition */
	static readonly CreateCoreDefinition = "greengrass:CreateCoreDefinition";
	/** [Write] greengrass:CreateCoreDefinitionVersion */
	static readonly CreateCoreDefinitionVersion =
		"greengrass:CreateCoreDefinitionVersion";
	/** [Write] greengrass:CreateDeployment */
	static readonly CreateDeployment = "greengrass:CreateDeployment";
	/** [Write] greengrass:CreateDeviceDefinition */
	static readonly CreateDeviceDefinition = "greengrass:CreateDeviceDefinition";
	/** [Write] greengrass:CreateDeviceDefinitionVersion */
	static readonly CreateDeviceDefinitionVersion =
		"greengrass:CreateDeviceDefinitionVersion";
	/** [Write] greengrass:CreateFunctionDefinition */
	static readonly CreateFunctionDefinition =
		"greengrass:CreateFunctionDefinition";
	/** [Write] greengrass:CreateFunctionDefinitionVersion */
	static readonly CreateFunctionDefinitionVersion =
		"greengrass:CreateFunctionDefinitionVersion";
	/** [Write] greengrass:CreateGroup */
	static readonly CreateGroup = "greengrass:CreateGroup";
	/** [Write] greengrass:CreateGroupCertificateAuthority */
	static readonly CreateGroupCertificateAuthority =
		"greengrass:CreateGroupCertificateAuthority";
	/** [Write] greengrass:CreateGroupVersion */
	static readonly CreateGroupVersion = "greengrass:CreateGroupVersion";
	/** [Write] greengrass:CreateLoggerDefinition */
	static readonly CreateLoggerDefinition = "greengrass:CreateLoggerDefinition";
	/** [Write] greengrass:CreateLoggerDefinitionVersion */
	static readonly CreateLoggerDefinitionVersion =
		"greengrass:CreateLoggerDefinitionVersion";
	/** [Write] greengrass:CreateResourceDefinition */
	static readonly CreateResourceDefinition =
		"greengrass:CreateResourceDefinition";
	/** [Write] greengrass:CreateResourceDefinitionVersion */
	static readonly CreateResourceDefinitionVersion =
		"greengrass:CreateResourceDefinitionVersion";
	/** [Write] greengrass:CreateSoftwareUpdateJob */
	static readonly CreateSoftwareUpdateJob =
		"greengrass:CreateSoftwareUpdateJob";
	/** [Write] greengrass:CreateSubscriptionDefinition */
	static readonly CreateSubscriptionDefinition =
		"greengrass:CreateSubscriptionDefinition";
	/** [Write] greengrass:CreateSubscriptionDefinitionVersion */
	static readonly CreateSubscriptionDefinitionVersion =
		"greengrass:CreateSubscriptionDefinitionVersion";
	/** [Write] greengrass:DeleteComponent */
	static readonly DeleteComponent = "greengrass:DeleteComponent";
	/** [Write] greengrass:DeleteConnectorDefinition */
	static readonly DeleteConnectorDefinition =
		"greengrass:DeleteConnectorDefinition";
	/** [Write] greengrass:DeleteCoreDefinition */
	static readonly DeleteCoreDefinition = "greengrass:DeleteCoreDefinition";
	/** [Write] greengrass:DeleteCoreDevice */
	static readonly DeleteCoreDevice = "greengrass:DeleteCoreDevice";
	/** [Write] greengrass:DeleteDeployment */
	static readonly DeleteDeployment = "greengrass:DeleteDeployment";
	/** [Write] greengrass:DeleteDeviceDefinition */
	static readonly DeleteDeviceDefinition = "greengrass:DeleteDeviceDefinition";
	/** [Write] greengrass:DeleteFunctionDefinition */
	static readonly DeleteFunctionDefinition =
		"greengrass:DeleteFunctionDefinition";
	/** [Write] greengrass:DeleteGroup */
	static readonly DeleteGroup = "greengrass:DeleteGroup";
	/** [Write] greengrass:DeleteLoggerDefinition */
	static readonly DeleteLoggerDefinition = "greengrass:DeleteLoggerDefinition";
	/** [Write] greengrass:DeleteResourceDefinition */
	static readonly DeleteResourceDefinition =
		"greengrass:DeleteResourceDefinition";
	/** [Write] greengrass:DeleteSubscriptionDefinition */
	static readonly DeleteSubscriptionDefinition =
		"greengrass:DeleteSubscriptionDefinition";
	/** [Read] greengrass:DescribeComponent */
	static readonly DescribeComponent = "greengrass:DescribeComponent";
	/** [Write] greengrass:DisassociateRoleFromGroup */
	static readonly DisassociateRoleFromGroup =
		"greengrass:DisassociateRoleFromGroup";
	/** [Write] greengrass:DisassociateServiceRoleFromAccount */
	static readonly DisassociateServiceRoleFromAccount =
		"greengrass:DisassociateServiceRoleFromAccount";
	/** [Read] greengrass:Discover */
	static readonly Discover = "greengrass:Discover";
	/** [Read] greengrass:GetAssociatedRole */
	static readonly actionGetAssociatedRole = "greengrass:GetAssociatedRole";
	/** [Read] greengrass:GetBulkDeploymentStatus */
	static readonly actionGetBulkDeploymentStatus =
		"greengrass:GetBulkDeploymentStatus";
	/** [Read] greengrass:GetComponent */
	static readonly actionGetComponent = "greengrass:GetComponent";
	/** [Read] greengrass:GetComponentVersionArtifact */
	static readonly actionGetComponentVersionArtifact =
		"greengrass:GetComponentVersionArtifact";
	/** [Read] greengrass:GetConnectivityInfo */
	static readonly actionGetConnectivityInfo = "greengrass:GetConnectivityInfo";
	/** [Read] greengrass:GetConnectorDefinition */
	static readonly actionGetConnectorDefinition =
		"greengrass:GetConnectorDefinition";
	/** [Read] greengrass:GetConnectorDefinitionVersion */
	static readonly actionGetConnectorDefinitionVersion =
		"greengrass:GetConnectorDefinitionVersion";
	/** [Read] greengrass:GetCoreDefinition */
	static readonly actionGetCoreDefinition = "greengrass:GetCoreDefinition";
	/** [Read] greengrass:GetCoreDefinitionVersion */
	static readonly actionGetCoreDefinitionVersion =
		"greengrass:GetCoreDefinitionVersion";
	/** [Read] greengrass:GetCoreDevice */
	static readonly actionGetCoreDevice = "greengrass:GetCoreDevice";
	/** [Read] greengrass:GetDeployment */
	static readonly actionGetDeployment = "greengrass:GetDeployment";
	/** [Read] greengrass:GetDeploymentStatus */
	static readonly actionGetDeploymentStatus = "greengrass:GetDeploymentStatus";
	/** [Read] greengrass:GetDeviceDefinition */
	static readonly actionGetDeviceDefinition = "greengrass:GetDeviceDefinition";
	/** [Read] greengrass:GetDeviceDefinitionVersion */
	static readonly actionGetDeviceDefinitionVersion =
		"greengrass:GetDeviceDefinitionVersion";
	/** [Read] greengrass:GetFunctionDefinition */
	static readonly actionGetFunctionDefinition =
		"greengrass:GetFunctionDefinition";
	/** [Read] greengrass:GetFunctionDefinitionVersion */
	static readonly actionGetFunctionDefinitionVersion =
		"greengrass:GetFunctionDefinitionVersion";
	/** [Read] greengrass:GetGroup */
	static readonly actionGetGroup = "greengrass:GetGroup";
	/** [Read] greengrass:GetGroupCertificateAuthority */
	static readonly actionGetGroupCertificateAuthority =
		"greengrass:GetGroupCertificateAuthority";
	/** [Read] greengrass:GetGroupCertificateConfiguration */
	static readonly actionGetGroupCertificateConfiguration =
		"greengrass:GetGroupCertificateConfiguration";
	/** [Read] greengrass:GetGroupVersion */
	static readonly actionGetGroupVersion = "greengrass:GetGroupVersion";
	/** [Read] greengrass:GetLoggerDefinition */
	static readonly actionGetLoggerDefinition = "greengrass:GetLoggerDefinition";
	/** [Read] greengrass:GetLoggerDefinitionVersion */
	static readonly actionGetLoggerDefinitionVersion =
		"greengrass:GetLoggerDefinitionVersion";
	/** [Read] greengrass:GetResourceDefinition */
	static readonly actionGetResourceDefinition =
		"greengrass:GetResourceDefinition";
	/** [Read] greengrass:GetResourceDefinitionVersion */
	static readonly actionGetResourceDefinitionVersion =
		"greengrass:GetResourceDefinitionVersion";
	/** [Read] greengrass:GetServiceRoleForAccount */
	static readonly actionGetServiceRoleForAccount =
		"greengrass:GetServiceRoleForAccount";
	/** [Read] greengrass:GetSubscriptionDefinition */
	static readonly actionGetSubscriptionDefinition =
		"greengrass:GetSubscriptionDefinition";
	/** [Read] greengrass:GetSubscriptionDefinitionVersion */
	static readonly actionGetSubscriptionDefinitionVersion =
		"greengrass:GetSubscriptionDefinitionVersion";
	/** [Read] greengrass:GetThingRuntimeConfiguration */
	static readonly actionGetThingRuntimeConfiguration =
		"greengrass:GetThingRuntimeConfiguration";
	/** [Read] greengrass:ListBulkDeploymentDetailedReports */
	static readonly ListBulkDeploymentDetailedReports =
		"greengrass:ListBulkDeploymentDetailedReports";
	/** [List] greengrass:ListBulkDeployments */
	static readonly ListBulkDeployments = "greengrass:ListBulkDeployments";
	/** [List] greengrass:ListClientDevicesAssociatedWithCoreDevice */
	static readonly ListClientDevicesAssociatedWithCoreDevice =
		"greengrass:ListClientDevicesAssociatedWithCoreDevice";
	/** [List] greengrass:ListComponentVersions */
	static readonly ListComponentVersions = "greengrass:ListComponentVersions";
	/** [List] greengrass:ListComponents */
	static readonly ListComponents = "greengrass:ListComponents";
	/** [List] greengrass:ListConnectorDefinitionVersions */
	static readonly ListConnectorDefinitionVersions =
		"greengrass:ListConnectorDefinitionVersions";
	/** [List] greengrass:ListConnectorDefinitions */
	static readonly ListConnectorDefinitions =
		"greengrass:ListConnectorDefinitions";
	/** [List] greengrass:ListCoreDefinitionVersions */
	static readonly ListCoreDefinitionVersions =
		"greengrass:ListCoreDefinitionVersions";
	/** [List] greengrass:ListCoreDefinitions */
	static readonly ListCoreDefinitions = "greengrass:ListCoreDefinitions";
	/** [List] greengrass:ListCoreDevices */
	static readonly ListCoreDevices = "greengrass:ListCoreDevices";
	/** [List] greengrass:ListDeployments */
	static readonly ListDeployments = "greengrass:ListDeployments";
	/** [List] greengrass:ListDeviceDefinitionVersions */
	static readonly ListDeviceDefinitionVersions =
		"greengrass:ListDeviceDefinitionVersions";
	/** [List] greengrass:ListDeviceDefinitions */
	static readonly ListDeviceDefinitions = "greengrass:ListDeviceDefinitions";
	/** [List] greengrass:ListEffectiveDeployments */
	static readonly ListEffectiveDeployments =
		"greengrass:ListEffectiveDeployments";
	/** [List] greengrass:ListFunctionDefinitionVersions */
	static readonly ListFunctionDefinitionVersions =
		"greengrass:ListFunctionDefinitionVersions";
	/** [List] greengrass:ListFunctionDefinitions */
	static readonly ListFunctionDefinitions =
		"greengrass:ListFunctionDefinitions";
	/** [List] greengrass:ListGroupCertificateAuthorities */
	static readonly ListGroupCertificateAuthorities =
		"greengrass:ListGroupCertificateAuthorities";
	/** [List] greengrass:ListGroupVersions */
	static readonly ListGroupVersions = "greengrass:ListGroupVersions";
	/** [List] greengrass:ListGroups */
	static readonly ListGroups = "greengrass:ListGroups";
	/** [List] greengrass:ListInstalledComponents */
	static readonly ListInstalledComponents =
		"greengrass:ListInstalledComponents";
	/** [List] greengrass:ListLoggerDefinitionVersions */
	static readonly ListLoggerDefinitionVersions =
		"greengrass:ListLoggerDefinitionVersions";
	/** [List] greengrass:ListLoggerDefinitions */
	static readonly ListLoggerDefinitions = "greengrass:ListLoggerDefinitions";
	/** [List] greengrass:ListResourceDefinitionVersions */
	static readonly ListResourceDefinitionVersions =
		"greengrass:ListResourceDefinitionVersions";
	/** [List] greengrass:ListResourceDefinitions */
	static readonly ListResourceDefinitions =
		"greengrass:ListResourceDefinitions";
	/** [List] greengrass:ListSubscriptionDefinitionVersions */
	static readonly ListSubscriptionDefinitionVersions =
		"greengrass:ListSubscriptionDefinitionVersions";
	/** [List] greengrass:ListSubscriptionDefinitions */
	static readonly ListSubscriptionDefinitions =
		"greengrass:ListSubscriptionDefinitions";
	/** [Read] greengrass:ListTagsForResource */
	static readonly ListTagsForResource = "greengrass:ListTagsForResource";
	/** [Write] greengrass:ResetDeployments */
	static readonly ResetDeployments = "greengrass:ResetDeployments";
	/** [List] greengrass:ResolveComponentCandidates */
	static readonly ResolveComponentCandidates =
		"greengrass:ResolveComponentCandidates";
	/** [Write] greengrass:StartBulkDeployment */
	static readonly StartBulkDeployment = "greengrass:StartBulkDeployment";
	/** [Write] greengrass:StopBulkDeployment */
	static readonly StopBulkDeployment = "greengrass:StopBulkDeployment";
	/** [Tagging] greengrass:TagResource */
	static readonly TagResource = "greengrass:TagResource";
	/** [Tagging] greengrass:UntagResource */
	static readonly UntagResource = "greengrass:UntagResource";
	/** [Write] greengrass:UpdateConnectivityInfo */
	static readonly UpdateConnectivityInfo = "greengrass:UpdateConnectivityInfo";
	/** [Write] greengrass:UpdateConnectorDefinition */
	static readonly UpdateConnectorDefinition =
		"greengrass:UpdateConnectorDefinition";
	/** [Write] greengrass:UpdateCoreDefinition */
	static readonly UpdateCoreDefinition = "greengrass:UpdateCoreDefinition";
	/** [Write] greengrass:UpdateDeviceDefinition */
	static readonly UpdateDeviceDefinition = "greengrass:UpdateDeviceDefinition";
	/** [Write] greengrass:UpdateFunctionDefinition */
	static readonly UpdateFunctionDefinition =
		"greengrass:UpdateFunctionDefinition";
	/** [Write] greengrass:UpdateGroup */
	static readonly UpdateGroup = "greengrass:UpdateGroup";
	/** [Write] greengrass:UpdateGroupCertificateConfiguration */
	static readonly UpdateGroupCertificateConfiguration =
		"greengrass:UpdateGroupCertificateConfiguration";
	/** [Write] greengrass:UpdateLoggerDefinition */
	static readonly UpdateLoggerDefinition = "greengrass:UpdateLoggerDefinition";
	/** [Write] greengrass:UpdateResourceDefinition */
	static readonly UpdateResourceDefinition =
		"greengrass:UpdateResourceDefinition";
	/** [Write] greengrass:UpdateSubscriptionDefinition */
	static readonly UpdateSubscriptionDefinition =
		"greengrass:UpdateSubscriptionDefinition";
	/** [Write] greengrass:UpdateThingRuntimeConfiguration */
	static readonly UpdateThingRuntimeConfiguration =
		"greengrass:UpdateThingRuntimeConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GreengrassActions.DescribeComponent,
		GreengrassActions.Discover,
		GreengrassActions.actionGetAssociatedRole,
		GreengrassActions.actionGetBulkDeploymentStatus,
		GreengrassActions.actionGetComponent,
		GreengrassActions.actionGetComponentVersionArtifact,
		GreengrassActions.actionGetConnectivityInfo,
		GreengrassActions.actionGetConnectorDefinition,
		GreengrassActions.actionGetConnectorDefinitionVersion,
		GreengrassActions.actionGetCoreDefinition,
		GreengrassActions.actionGetCoreDefinitionVersion,
		GreengrassActions.actionGetCoreDevice,
		GreengrassActions.actionGetDeployment,
		GreengrassActions.actionGetDeploymentStatus,
		GreengrassActions.actionGetDeviceDefinition,
		GreengrassActions.actionGetDeviceDefinitionVersion,
		GreengrassActions.actionGetFunctionDefinition,
		GreengrassActions.actionGetFunctionDefinitionVersion,
		GreengrassActions.actionGetGroup,
		GreengrassActions.actionGetGroupCertificateAuthority,
		GreengrassActions.actionGetGroupCertificateConfiguration,
		GreengrassActions.actionGetGroupVersion,
		GreengrassActions.actionGetLoggerDefinition,
		GreengrassActions.actionGetLoggerDefinitionVersion,
		GreengrassActions.actionGetResourceDefinition,
		GreengrassActions.actionGetResourceDefinitionVersion,
		GreengrassActions.actionGetServiceRoleForAccount,
		GreengrassActions.actionGetSubscriptionDefinition,
		GreengrassActions.actionGetSubscriptionDefinitionVersion,
		GreengrassActions.actionGetThingRuntimeConfiguration,
		GreengrassActions.ListBulkDeploymentDetailedReports,
		GreengrassActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GreengrassActions.AssociateRoleToGroup,
		GreengrassActions.BatchAssociateClientDeviceWithCoreDevice,
		GreengrassActions.BatchDisassociateClientDeviceFromCoreDevice,
		GreengrassActions.CancelDeployment,
		GreengrassActions.CreateComponentVersion,
		GreengrassActions.CreateConnectorDefinition,
		GreengrassActions.CreateConnectorDefinitionVersion,
		GreengrassActions.CreateCoreDefinition,
		GreengrassActions.CreateCoreDefinitionVersion,
		GreengrassActions.CreateDeployment,
		GreengrassActions.CreateDeviceDefinition,
		GreengrassActions.CreateDeviceDefinitionVersion,
		GreengrassActions.CreateFunctionDefinition,
		GreengrassActions.CreateFunctionDefinitionVersion,
		GreengrassActions.CreateGroup,
		GreengrassActions.CreateGroupCertificateAuthority,
		GreengrassActions.CreateGroupVersion,
		GreengrassActions.CreateLoggerDefinition,
		GreengrassActions.CreateLoggerDefinitionVersion,
		GreengrassActions.CreateResourceDefinition,
		GreengrassActions.CreateResourceDefinitionVersion,
		GreengrassActions.CreateSoftwareUpdateJob,
		GreengrassActions.CreateSubscriptionDefinition,
		GreengrassActions.CreateSubscriptionDefinitionVersion,
		GreengrassActions.DeleteComponent,
		GreengrassActions.DeleteConnectorDefinition,
		GreengrassActions.DeleteCoreDefinition,
		GreengrassActions.DeleteCoreDevice,
		GreengrassActions.DeleteDeployment,
		GreengrassActions.DeleteDeviceDefinition,
		GreengrassActions.DeleteFunctionDefinition,
		GreengrassActions.DeleteGroup,
		GreengrassActions.DeleteLoggerDefinition,
		GreengrassActions.DeleteResourceDefinition,
		GreengrassActions.DeleteSubscriptionDefinition,
		GreengrassActions.DisassociateRoleFromGroup,
		GreengrassActions.DisassociateServiceRoleFromAccount,
		GreengrassActions.ResetDeployments,
		GreengrassActions.StartBulkDeployment,
		GreengrassActions.StopBulkDeployment,
		GreengrassActions.UpdateConnectivityInfo,
		GreengrassActions.UpdateConnectorDefinition,
		GreengrassActions.UpdateCoreDefinition,
		GreengrassActions.UpdateDeviceDefinition,
		GreengrassActions.UpdateFunctionDefinition,
		GreengrassActions.UpdateGroup,
		GreengrassActions.UpdateGroupCertificateConfiguration,
		GreengrassActions.UpdateLoggerDefinition,
		GreengrassActions.UpdateResourceDefinition,
		GreengrassActions.UpdateSubscriptionDefinition,
		GreengrassActions.UpdateThingRuntimeConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GreengrassActions.ListBulkDeployments,
		GreengrassActions.ListClientDevicesAssociatedWithCoreDevice,
		GreengrassActions.ListComponentVersions,
		GreengrassActions.ListComponents,
		GreengrassActions.ListConnectorDefinitionVersions,
		GreengrassActions.ListConnectorDefinitions,
		GreengrassActions.ListCoreDefinitionVersions,
		GreengrassActions.ListCoreDefinitions,
		GreengrassActions.ListCoreDevices,
		GreengrassActions.ListDeployments,
		GreengrassActions.ListDeviceDefinitionVersions,
		GreengrassActions.ListDeviceDefinitions,
		GreengrassActions.ListEffectiveDeployments,
		GreengrassActions.ListFunctionDefinitionVersions,
		GreengrassActions.ListFunctionDefinitions,
		GreengrassActions.ListGroupCertificateAuthorities,
		GreengrassActions.ListGroupVersions,
		GreengrassActions.ListGroups,
		GreengrassActions.ListInstalledComponents,
		GreengrassActions.ListLoggerDefinitionVersions,
		GreengrassActions.ListLoggerDefinitions,
		GreengrassActions.ListResourceDefinitionVersions,
		GreengrassActions.ListResourceDefinitions,
		GreengrassActions.ListSubscriptionDefinitionVersions,
		GreengrassActions.ListSubscriptionDefinitions,
		GreengrassActions.ResolveComponentCandidates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		GreengrassActions.AssociateServiceRoleToAccount,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GreengrassActions.TagResource,
		GreengrassActions.UntagResource,
	];
}

/**
 * Properties for building a bulkDeployment ARN.
 */
export interface GreengrassBulkDeploymentArnProps {
	/** The BulkDeploymentId component of the ARN. */
	readonly bulkDeploymentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bulkDeployment ARN.
 */
export interface GreengrassBulkDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BulkDeploymentId component. */
	readonly bulkDeploymentId: string;
}

/**
 * Properties for building a certificateAuthority ARN.
 */
export interface GreengrassCertificateAuthorityArnProps {
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
}

/**
 * Parsed components of a certificateAuthority ARN.
 */
export interface GreengrassCertificateAuthorityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
	/** The CertificateAuthorityId component. */
	readonly certificateAuthorityId: string;
}

/**
 * Properties for building a component ARN.
 */
export interface GreengrassComponentArnProps {
	/** The ComponentName component of the ARN. */
	readonly componentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a component ARN.
 */
export interface GreengrassComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComponentName component. */
	readonly componentName: string;
}

/**
 * Properties for building a componentVersion ARN.
 */
export interface GreengrassComponentVersionArnProps {
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
}

/**
 * Parsed components of a componentVersion ARN.
 */
export interface GreengrassComponentVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComponentName component. */
	readonly componentName: string;
	/** The ComponentVersion component. */
	readonly componentVersion: string;
}

/**
 * Properties for building a connectivityInfo ARN.
 */
export interface GreengrassConnectivityInfoArnProps {
	/** The ThingName component of the ARN. */
	readonly thingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectivityInfo ARN.
 */
export interface GreengrassConnectivityInfoArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingName component. */
	readonly thingName: string;
}

/**
 * Properties for building a connectorDefinition ARN.
 */
export interface GreengrassConnectorDefinitionArnProps {
	/** The ConnectorDefinitionId component of the ARN. */
	readonly connectorDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectorDefinition ARN.
 */
export interface GreengrassConnectorDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorDefinitionId component. */
	readonly connectorDefinitionId: string;
}

/**
 * Properties for building a connectorDefinitionVersion ARN.
 */
export interface GreengrassConnectorDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a connectorDefinitionVersion ARN.
 */
export interface GreengrassConnectorDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorDefinitionId component. */
	readonly connectorDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a coreDefinition ARN.
 */
export interface GreengrassCoreDefinitionArnProps {
	/** The CoreDefinitionId component of the ARN. */
	readonly coreDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a coreDefinition ARN.
 */
export interface GreengrassCoreDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CoreDefinitionId component. */
	readonly coreDefinitionId: string;
}

/**
 * Properties for building a coreDefinitionVersion ARN.
 */
export interface GreengrassCoreDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a coreDefinitionVersion ARN.
 */
export interface GreengrassCoreDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CoreDefinitionId component. */
	readonly coreDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a coreDevice ARN.
 */
export interface GreengrassCoreDeviceArnProps {
	/** The CoreDeviceThingName component of the ARN. */
	readonly coreDeviceThingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a coreDevice ARN.
 */
export interface GreengrassCoreDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CoreDeviceThingName component. */
	readonly coreDeviceThingName: string;
}

/**
 * Properties for building a deploymentVariant1 ARN.
 */
export interface GreengrassDeploymentVariant1ArnProps {
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
}

/**
 * Properties for building a deploymentVariant2 ARN.
 */
export interface GreengrassDeploymentVariant2ArnProps {
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
 * Parsed components of a deployment ARN.
 */
export interface GreengrassDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
	/** The DeploymentId component. */
	readonly deploymentId: string;
}

/**
 * Properties for building a deviceDefinition ARN.
 */
export interface GreengrassDeviceDefinitionArnProps {
	/** The DeviceDefinitionId component of the ARN. */
	readonly deviceDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deviceDefinition ARN.
 */
export interface GreengrassDeviceDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceDefinitionId component. */
	readonly deviceDefinitionId: string;
}

/**
 * Properties for building a deviceDefinitionVersion ARN.
 */
export interface GreengrassDeviceDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a deviceDefinitionVersion ARN.
 */
export interface GreengrassDeviceDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceDefinitionId component. */
	readonly deviceDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a functionDefinition ARN.
 */
export interface GreengrassFunctionDefinitionArnProps {
	/** The FunctionDefinitionId component of the ARN. */
	readonly functionDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a functionDefinition ARN.
 */
export interface GreengrassFunctionDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionDefinitionId component. */
	readonly functionDefinitionId: string;
}

/**
 * Properties for building a functionDefinitionVersion ARN.
 */
export interface GreengrassFunctionDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a functionDefinitionVersion ARN.
 */
export interface GreengrassFunctionDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionDefinitionId component. */
	readonly functionDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a group ARN.
 */
export interface GreengrassGroupArnProps {
	/** The GroupId component of the ARN. */
	readonly groupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a group ARN.
 */
export interface GreengrassGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
}

/**
 * Properties for building a groupVersion ARN.
 */
export interface GreengrassGroupVersionArnProps {
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
}

/**
 * Parsed components of a groupVersion ARN.
 */
export interface GreengrassGroupVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a loggerDefinition ARN.
 */
export interface GreengrassLoggerDefinitionArnProps {
	/** The LoggerDefinitionId component of the ARN. */
	readonly loggerDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a loggerDefinition ARN.
 */
export interface GreengrassLoggerDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LoggerDefinitionId component. */
	readonly loggerDefinitionId: string;
}

/**
 * Properties for building a loggerDefinitionVersion ARN.
 */
export interface GreengrassLoggerDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a loggerDefinitionVersion ARN.
 */
export interface GreengrassLoggerDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LoggerDefinitionId component. */
	readonly loggerDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a resourceDefinition ARN.
 */
export interface GreengrassResourceDefinitionArnProps {
	/** The ResourceDefinitionId component of the ARN. */
	readonly resourceDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resourceDefinition ARN.
 */
export interface GreengrassResourceDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceDefinitionId component. */
	readonly resourceDefinitionId: string;
}

/**
 * Properties for building a resourceDefinitionVersion ARN.
 */
export interface GreengrassResourceDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a resourceDefinitionVersion ARN.
 */
export interface GreengrassResourceDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceDefinitionId component. */
	readonly resourceDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a subscriptionDefinition ARN.
 */
export interface GreengrassSubscriptionDefinitionArnProps {
	/** The SubscriptionDefinitionId component of the ARN. */
	readonly subscriptionDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscriptionDefinition ARN.
 */
export interface GreengrassSubscriptionDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionDefinitionId component. */
	readonly subscriptionDefinitionId: string;
}

/**
 * Properties for building a subscriptionDefinitionVersion ARN.
 */
export interface GreengrassSubscriptionDefinitionVersionArnProps {
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
}

/**
 * Parsed components of a subscriptionDefinitionVersion ARN.
 */
export interface GreengrassSubscriptionDefinitionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionDefinitionId component. */
	readonly subscriptionDefinitionId: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a thing ARN.
 */
export interface GreengrassThingArnProps {
	/** The ThingName component of the ARN. */
	readonly thingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thing ARN.
 */
export interface GreengrassThingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingName component. */
	readonly thingName: string;
}

/**
 * Properties for building a thingRuntimeConfig ARN.
 */
export interface GreengrassThingRuntimeConfigArnProps {
	/** The ThingName component of the ARN. */
	readonly thingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thingRuntimeConfig ARN.
 */
export interface GreengrassThingRuntimeConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingName component. */
	readonly thingName: string;
}

const BulkDeploymentArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/bulk\/deployments\/(?<bulkDeploymentId>[^:/?]+)$/;
const CertificateAuthorityArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/groups\/(?<groupId>[^:/?]+)\/certificateauthorities\/(?<certificateAuthorityId>[^:/?]+)$/;
const ComponentArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):components:(?<componentName>[^:/?]+)$/;
const ComponentVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):components:(?<componentName>[^:/?]+):versions:(?<componentVersion>[^:/?]+)$/;
const ConnectivityInfoArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/things\/(?<thingName>[^:/?]+)\/connectivityInfo$/;
const ConnectorDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/connectors\/(?<connectorDefinitionId>[^:/?]+)$/;
const ConnectorDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/connectors\/(?<connectorDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const CoreDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/cores\/(?<coreDefinitionId>[^:/?]+)$/;
const CoreDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/cores\/(?<coreDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const CoreDeviceArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):coreDevices:(?<coreDeviceThingName>[^:/?]+)$/;
const DeploymentArnRegex =
	/^(?:arn:(?:[^:]+):greengrass:(?:[^:]*):(?:[^:]*):\/greengrass\/groups\/(?:[^:/?]+)\/deployments\/(?:[^:/?]+)|arn:(?:[^:]+):greengrass:(?:[^:]*):(?:[^:]*):deployments:(?:[^:/?]+))$/;
const DeploymentParseRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/groups\/(?<groupId>[^:/?]+)\/deployments\/(?<deploymentId>[^:/?]+)$/;
const DeviceDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/devices\/(?<deviceDefinitionId>[^:/?]+)$/;
const DeviceDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/devices\/(?<deviceDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const FunctionDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/functions\/(?<functionDefinitionId>[^:/?]+)$/;
const FunctionDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/functions\/(?<functionDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/groups\/(?<groupId>[^:/?]+)$/;
const GroupVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/groups\/(?<groupId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const LoggerDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/loggers\/(?<loggerDefinitionId>[^:/?]+)$/;
const LoggerDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/loggers\/(?<loggerDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const ResourceDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/resources\/(?<resourceDefinitionId>[^:/?]+)$/;
const ResourceDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/resources\/(?<resourceDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const SubscriptionDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/subscriptions\/(?<subscriptionDefinitionId>[^:/?]+)$/;
const SubscriptionDefinitionVersionArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/definition\/subscriptions\/(?<subscriptionDefinitionId>[^:/?]+)\/versions\/(?<versionId>[^:/?]+)$/;
const ThingArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing\/(?<thingName>[^:/?]+)$/;
const ThingRuntimeConfigArnRegex =
	/^arn:(?<partition>[^:]+):greengrass:(?<region>[^:]*):(?<account>[^:]*):\/greengrass\/things\/(?<thingName>[^:/?]+)\/runtimeconfig$/;

/**
 * ARN builders, validators, and parsers for greengrass resources.
 */
export class GreengrassResources {
	/**
	 * Builds an ARN for the bulkDeployment resource.
	 */
	static bulkDeployment(props: GreengrassBulkDeploymentArnProps): string {
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
	static parseBulkDeploymentArn(
		arn: string,
	): GreengrassBulkDeploymentArnComponents {
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
	static certificateAuthority(
		props: GreengrassCertificateAuthorityArnProps,
	): string {
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
	static parseCertificateAuthorityArn(
		arn: string,
	): GreengrassCertificateAuthorityArnComponents {
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
	static component(props: GreengrassComponentArnProps): string {
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
	static parseComponentArn(arn: string): GreengrassComponentArnComponents {
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
	static componentVersion(props: GreengrassComponentVersionArnProps): string {
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
	static parseComponentVersionArn(
		arn: string,
	): GreengrassComponentVersionArnComponents {
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
	static connectivityInfo(props: GreengrassConnectivityInfoArnProps): string {
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
	static parseConnectivityInfoArn(
		arn: string,
	): GreengrassConnectivityInfoArnComponents {
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
	static connectorDefinition(
		props: GreengrassConnectorDefinitionArnProps,
	): string {
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
	static parseConnectorDefinitionArn(
		arn: string,
	): GreengrassConnectorDefinitionArnComponents {
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
	static connectorDefinitionVersion(
		props: GreengrassConnectorDefinitionVersionArnProps,
	): string {
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
	static parseConnectorDefinitionVersionArn(
		arn: string,
	): GreengrassConnectorDefinitionVersionArnComponents {
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
	static coreDefinition(props: GreengrassCoreDefinitionArnProps): string {
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
	static parseCoreDefinitionArn(
		arn: string,
	): GreengrassCoreDefinitionArnComponents {
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
	static coreDefinitionVersion(
		props: GreengrassCoreDefinitionVersionArnProps,
	): string {
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
	static parseCoreDefinitionVersionArn(
		arn: string,
	): GreengrassCoreDefinitionVersionArnComponents {
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
	static coreDevice(props: GreengrassCoreDeviceArnProps): string {
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
	static parseCoreDeviceArn(arn: string): GreengrassCoreDeviceArnComponents {
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
	static deploymentVariant1(
		props: GreengrassDeploymentVariant1ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:/greengrass/groups/${props.groupId}/deployments/${props.deploymentId}`;
	}

	/**
	 * Builds an ARN for the deploymentVariant2 resource.
	 */
	static deploymentVariant2(
		props: GreengrassDeploymentVariant2ArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:greengrass:${props.region ?? "*"}:${props.account ?? "*"}:deployments:${props.deploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a deployment ARN into its components (uses first ARN variant format).
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(arn: string): GreengrassDeploymentArnComponents {
		const match = DeploymentParseRegex.exec(arn);
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
	static deviceDefinition(props: GreengrassDeviceDefinitionArnProps): string {
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
	static parseDeviceDefinitionArn(
		arn: string,
	): GreengrassDeviceDefinitionArnComponents {
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
	static deviceDefinitionVersion(
		props: GreengrassDeviceDefinitionVersionArnProps,
	): string {
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
	static parseDeviceDefinitionVersionArn(
		arn: string,
	): GreengrassDeviceDefinitionVersionArnComponents {
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
	static functionDefinition(
		props: GreengrassFunctionDefinitionArnProps,
	): string {
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
	static parseFunctionDefinitionArn(
		arn: string,
	): GreengrassFunctionDefinitionArnComponents {
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
	static functionDefinitionVersion(
		props: GreengrassFunctionDefinitionVersionArnProps,
	): string {
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
	static parseFunctionDefinitionVersionArn(
		arn: string,
	): GreengrassFunctionDefinitionVersionArnComponents {
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
	static group(props: GreengrassGroupArnProps): string {
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
	static parseGroupArn(arn: string): GreengrassGroupArnComponents {
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
	static groupVersion(props: GreengrassGroupVersionArnProps): string {
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
	static parseGroupVersionArn(
		arn: string,
	): GreengrassGroupVersionArnComponents {
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
	static loggerDefinition(props: GreengrassLoggerDefinitionArnProps): string {
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
	static parseLoggerDefinitionArn(
		arn: string,
	): GreengrassLoggerDefinitionArnComponents {
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
	static loggerDefinitionVersion(
		props: GreengrassLoggerDefinitionVersionArnProps,
	): string {
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
	static parseLoggerDefinitionVersionArn(
		arn: string,
	): GreengrassLoggerDefinitionVersionArnComponents {
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
	static resourceDefinition(
		props: GreengrassResourceDefinitionArnProps,
	): string {
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
	static parseResourceDefinitionArn(
		arn: string,
	): GreengrassResourceDefinitionArnComponents {
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
	static resourceDefinitionVersion(
		props: GreengrassResourceDefinitionVersionArnProps,
	): string {
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
	static parseResourceDefinitionVersionArn(
		arn: string,
	): GreengrassResourceDefinitionVersionArnComponents {
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
	static subscriptionDefinition(
		props: GreengrassSubscriptionDefinitionArnProps,
	): string {
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
	static parseSubscriptionDefinitionArn(
		arn: string,
	): GreengrassSubscriptionDefinitionArnComponents {
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
	static subscriptionDefinitionVersion(
		props: GreengrassSubscriptionDefinitionVersionArnProps,
	): string {
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
	static parseSubscriptionDefinitionVersionArn(
		arn: string,
	): GreengrassSubscriptionDefinitionVersionArnComponents {
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
	static thing(props: GreengrassThingArnProps): string {
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
	static parseThingArn(arn: string): GreengrassThingArnComponents {
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
	static thingRuntimeConfig(
		props: GreengrassThingRuntimeConfigArnProps,
	): string {
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
	static parseThingRuntimeConfigArn(
		arn: string,
	): GreengrassThingRuntimeConfigArnComponents {
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
	static readonly AssociateRoleToGroup: string[] = [
		"greengrass:AssociateRoleToGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the AssociateServiceRoleToAccount API call. */
	static readonly AssociateServiceRoleToAccount: string[] = [
		"greengrass:AssociateServiceRoleToAccount",
		"iam:PassRole",
	];
	/** IAM actions required for the BatchAssociateClientDeviceWithCoreDevice API call. */
	static readonly BatchAssociateClientDeviceWithCoreDevice: string[] = [
		"greengrass:BatchAssociateClientDeviceWithCoreDevice",
	];
	/** IAM actions required for the BatchDisassociateClientDeviceFromCoreDevice API call. */
	static readonly BatchDisassociateClientDeviceFromCoreDevice: string[] = [
		"greengrass:BatchDisassociateClientDeviceFromCoreDevice",
	];
	/** IAM actions required for the CancelDeployment API call. */
	static readonly CancelDeployment: string[] = ["greengrass:CancelDeployment"];
	/** IAM actions required for the CreateComponentVersion API call. */
	static readonly CreateComponentVersion: string[] = [
		"greengrass:CreateComponentVersion",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateConnectorDefinition API call. */
	static readonly CreateConnectorDefinition: string[] = [
		"greengrass:CreateConnectorDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateConnectorDefinitionVersion API call. */
	static readonly CreateConnectorDefinitionVersion: string[] = [
		"greengrass:CreateConnectorDefinitionVersion",
	];
	/** IAM actions required for the CreateCoreDefinition API call. */
	static readonly CreateCoreDefinition: string[] = [
		"greengrass:CreateCoreDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateCoreDefinitionVersion API call. */
	static readonly CreateCoreDefinitionVersion: string[] = [
		"greengrass:CreateCoreDefinitionVersion",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = [
		"greengrass:CreateDeployment",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateDeviceDefinition API call. */
	static readonly CreateDeviceDefinition: string[] = [
		"greengrass:CreateDeviceDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateDeviceDefinitionVersion API call. */
	static readonly CreateDeviceDefinitionVersion: string[] = [
		"greengrass:CreateDeviceDefinitionVersion",
	];
	/** IAM actions required for the CreateFunctionDefinition API call. */
	static readonly CreateFunctionDefinition: string[] = [
		"greengrass:CreateFunctionDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateFunctionDefinitionVersion API call. */
	static readonly CreateFunctionDefinitionVersion: string[] = [
		"greengrass:CreateFunctionDefinitionVersion",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = [
		"greengrass:CreateGroup",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateGroupCertificateAuthority API call. */
	static readonly CreateGroupCertificateAuthority: string[] = [
		"greengrass:CreateGroupCertificateAuthority",
	];
	/** IAM actions required for the CreateGroupVersion API call. */
	static readonly CreateGroupVersion: string[] = [
		"greengrass:CreateGroupVersion",
	];
	/** IAM actions required for the CreateLoggerDefinition API call. */
	static readonly CreateLoggerDefinition: string[] = [
		"greengrass:CreateLoggerDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateLoggerDefinitionVersion API call. */
	static readonly CreateLoggerDefinitionVersion: string[] = [
		"greengrass:CreateLoggerDefinitionVersion",
	];
	/** IAM actions required for the CreateResourceDefinition API call. */
	static readonly CreateResourceDefinition: string[] = [
		"greengrass:CreateResourceDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateResourceDefinitionVersion API call. */
	static readonly CreateResourceDefinitionVersion: string[] = [
		"greengrass:CreateResourceDefinitionVersion",
	];
	/** IAM actions required for the CreateSoftwareUpdateJob API call. */
	static readonly CreateSoftwareUpdateJob: string[] = [
		"greengrass:CreateSoftwareUpdateJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSubscriptionDefinition API call. */
	static readonly CreateSubscriptionDefinition: string[] = [
		"greengrass:CreateSubscriptionDefinition",
		"greengrass:TagResource",
	];
	/** IAM actions required for the CreateSubscriptionDefinitionVersion API call. */
	static readonly CreateSubscriptionDefinitionVersion: string[] = [
		"greengrass:CreateSubscriptionDefinitionVersion",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DeleteComponent: string[] = ["greengrass:DeleteComponent"];
	/** IAM actions required for the DeleteConnectorDefinition API call. */
	static readonly DeleteConnectorDefinition: string[] = [
		"greengrass:DeleteConnectorDefinition",
	];
	/** IAM actions required for the DeleteCoreDefinition API call. */
	static readonly DeleteCoreDefinition: string[] = [
		"greengrass:DeleteCoreDefinition",
	];
	/** IAM actions required for the DeleteCoreDevice API call. */
	static readonly DeleteCoreDevice: string[] = ["greengrass:DeleteCoreDevice"];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DeleteDeployment: string[] = ["greengrass:DeleteDeployment"];
	/** IAM actions required for the DeleteDeviceDefinition API call. */
	static readonly DeleteDeviceDefinition: string[] = [
		"greengrass:DeleteDeviceDefinition",
	];
	/** IAM actions required for the DeleteFunctionDefinition API call. */
	static readonly DeleteFunctionDefinition: string[] = [
		"greengrass:DeleteFunctionDefinition",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["greengrass:DeleteGroup"];
	/** IAM actions required for the DeleteLoggerDefinition API call. */
	static readonly DeleteLoggerDefinition: string[] = [
		"greengrass:DeleteLoggerDefinition",
	];
	/** IAM actions required for the DeleteResourceDefinition API call. */
	static readonly DeleteResourceDefinition: string[] = [
		"greengrass:DeleteResourceDefinition",
	];
	/** IAM actions required for the DeleteSubscriptionDefinition API call. */
	static readonly DeleteSubscriptionDefinition: string[] = [
		"greengrass:DeleteSubscriptionDefinition",
	];
	/** IAM actions required for the DescribeComponent API call. */
	static readonly DescribeComponent: string[] = [
		"greengrass:DescribeComponent",
	];
	/** IAM actions required for the DisassociateRoleFromGroup API call. */
	static readonly DisassociateRoleFromGroup: string[] = [
		"greengrass:DisassociateRoleFromGroup",
	];
	/** IAM actions required for the DisassociateServiceRoleFromAccount API call. */
	static readonly DisassociateServiceRoleFromAccount: string[] = [
		"greengrass:DisassociateServiceRoleFromAccount",
	];
	/** IAM actions required for the GetAssociatedRole API call. */
	static readonly opGetAssociatedRole: string[] = [
		"greengrass:GetAssociatedRole",
	];
	/** IAM actions required for the GetBulkDeploymentStatus API call. */
	static readonly opGetBulkDeploymentStatus: string[] = [
		"greengrass:GetBulkDeploymentStatus",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly opGetComponent: string[] = ["greengrass:GetComponent"];
	/** IAM actions required for the GetComponentVersionArtifact API call. */
	static readonly opGetComponentVersionArtifact: string[] = [
		"greengrass:GetComponentVersionArtifact",
	];
	/** IAM actions required for the GetConnectivityInfo API call. */
	static readonly opGetConnectivityInfo: string[] = [
		"greengrass:GetConnectivityInfo",
	];
	/** IAM actions required for the GetConnectorDefinition API call. */
	static readonly opGetConnectorDefinition: string[] = [
		"greengrass:GetConnectorDefinition",
	];
	/** IAM actions required for the GetConnectorDefinitionVersion API call. */
	static readonly opGetConnectorDefinitionVersion: string[] = [
		"greengrass:GetConnectorDefinitionVersion",
	];
	/** IAM actions required for the GetCoreDefinition API call. */
	static readonly opGetCoreDefinition: string[] = [
		"greengrass:GetCoreDefinition",
	];
	/** IAM actions required for the GetCoreDefinitionVersion API call. */
	static readonly opGetCoreDefinitionVersion: string[] = [
		"greengrass:GetCoreDefinitionVersion",
	];
	/** IAM actions required for the GetCoreDevice API call. */
	static readonly opGetCoreDevice: string[] = ["greengrass:GetCoreDevice"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["greengrass:GetDeployment"];
	/** IAM actions required for the GetDeploymentStatus API call. */
	static readonly opGetDeploymentStatus: string[] = [
		"greengrass:GetDeploymentStatus",
	];
	/** IAM actions required for the GetDeviceDefinition API call. */
	static readonly opGetDeviceDefinition: string[] = [
		"greengrass:GetDeviceDefinition",
	];
	/** IAM actions required for the GetDeviceDefinitionVersion API call. */
	static readonly opGetDeviceDefinitionVersion: string[] = [
		"greengrass:GetDeviceDefinitionVersion",
	];
	/** IAM actions required for the GetFunctionDefinition API call. */
	static readonly opGetFunctionDefinition: string[] = [
		"greengrass:GetFunctionDefinition",
	];
	/** IAM actions required for the GetFunctionDefinitionVersion API call. */
	static readonly opGetFunctionDefinitionVersion: string[] = [
		"greengrass:GetFunctionDefinitionVersion",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = ["greengrass:GetGroup"];
	/** IAM actions required for the GetGroupCertificateAuthority API call. */
	static readonly opGetGroupCertificateAuthority: string[] = [
		"greengrass:GetGroupCertificateAuthority",
	];
	/** IAM actions required for the GetGroupCertificateConfiguration API call. */
	static readonly opGetGroupCertificateConfiguration: string[] = [
		"greengrass:GetGroupCertificateConfiguration",
	];
	/** IAM actions required for the GetGroupVersion API call. */
	static readonly opGetGroupVersion: string[] = ["greengrass:GetGroupVersion"];
	/** IAM actions required for the GetLoggerDefinition API call. */
	static readonly opGetLoggerDefinition: string[] = [
		"greengrass:GetLoggerDefinition",
	];
	/** IAM actions required for the GetLoggerDefinitionVersion API call. */
	static readonly opGetLoggerDefinitionVersion: string[] = [
		"greengrass:GetLoggerDefinitionVersion",
	];
	/** IAM actions required for the GetResourceDefinition API call. */
	static readonly opGetResourceDefinition: string[] = [
		"greengrass:GetResourceDefinition",
	];
	/** IAM actions required for the GetResourceDefinitionVersion API call. */
	static readonly opGetResourceDefinitionVersion: string[] = [
		"greengrass:GetResourceDefinitionVersion",
	];
	/** IAM actions required for the GetServiceRoleForAccount API call. */
	static readonly opGetServiceRoleForAccount: string[] = [
		"greengrass:GetServiceRoleForAccount",
	];
	/** IAM actions required for the GetSubscriptionDefinition API call. */
	static readonly opGetSubscriptionDefinition: string[] = [
		"greengrass:GetSubscriptionDefinition",
	];
	/** IAM actions required for the GetSubscriptionDefinitionVersion API call. */
	static readonly opGetSubscriptionDefinitionVersion: string[] = [
		"greengrass:GetSubscriptionDefinitionVersion",
	];
	/** IAM actions required for the GetThingRuntimeConfiguration API call. */
	static readonly opGetThingRuntimeConfiguration: string[] = [
		"greengrass:GetThingRuntimeConfiguration",
	];
	/** IAM actions required for the ListBulkDeploymentDetailedReports API call. */
	static readonly ListBulkDeploymentDetailedReports: string[] = [
		"greengrass:ListBulkDeploymentDetailedReports",
	];
	/** IAM actions required for the ListBulkDeployments API call. */
	static readonly ListBulkDeployments: string[] = [
		"greengrass:ListBulkDeployments",
	];
	/** IAM actions required for the ListClientDevicesAssociatedWithCoreDevice API call. */
	static readonly ListClientDevicesAssociatedWithCoreDevice: string[] = [
		"greengrass:ListClientDevicesAssociatedWithCoreDevice",
	];
	/** IAM actions required for the ListComponentVersions API call. */
	static readonly ListComponentVersions: string[] = [
		"greengrass:ListComponentVersions",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = ["greengrass:ListComponents"];
	/** IAM actions required for the ListConnectorDefinitionVersions API call. */
	static readonly ListConnectorDefinitionVersions: string[] = [
		"greengrass:ListConnectorDefinitionVersions",
	];
	/** IAM actions required for the ListConnectorDefinitions API call. */
	static readonly ListConnectorDefinitions: string[] = [
		"greengrass:ListConnectorDefinitions",
	];
	/** IAM actions required for the ListCoreDefinitionVersions API call. */
	static readonly ListCoreDefinitionVersions: string[] = [
		"greengrass:ListCoreDefinitionVersions",
	];
	/** IAM actions required for the ListCoreDefinitions API call. */
	static readonly ListCoreDefinitions: string[] = [
		"greengrass:ListCoreDefinitions",
	];
	/** IAM actions required for the ListCoreDevices API call. */
	static readonly ListCoreDevices: string[] = ["greengrass:ListCoreDevices"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["greengrass:ListDeployments"];
	/** IAM actions required for the ListDeviceDefinitionVersions API call. */
	static readonly ListDeviceDefinitionVersions: string[] = [
		"greengrass:ListDeviceDefinitionVersions",
	];
	/** IAM actions required for the ListDeviceDefinitions API call. */
	static readonly ListDeviceDefinitions: string[] = [
		"greengrass:ListDeviceDefinitions",
	];
	/** IAM actions required for the ListEffectiveDeployments API call. */
	static readonly ListEffectiveDeployments: string[] = [
		"greengrass:ListEffectiveDeployments",
	];
	/** IAM actions required for the ListFunctionDefinitionVersions API call. */
	static readonly ListFunctionDefinitionVersions: string[] = [
		"greengrass:ListFunctionDefinitionVersions",
	];
	/** IAM actions required for the ListFunctionDefinitions API call. */
	static readonly ListFunctionDefinitions: string[] = [
		"greengrass:ListFunctionDefinitions",
	];
	/** IAM actions required for the ListGroupCertificateAuthorities API call. */
	static readonly ListGroupCertificateAuthorities: string[] = [
		"greengrass:ListGroupCertificateAuthorities",
	];
	/** IAM actions required for the ListGroupVersions API call. */
	static readonly ListGroupVersions: string[] = [
		"greengrass:ListGroupVersions",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["greengrass:ListGroups"];
	/** IAM actions required for the ListInstalledComponents API call. */
	static readonly ListInstalledComponents: string[] = [
		"greengrass:ListInstalledComponents",
	];
	/** IAM actions required for the ListLoggerDefinitionVersions API call. */
	static readonly ListLoggerDefinitionVersions: string[] = [
		"greengrass:ListLoggerDefinitionVersions",
	];
	/** IAM actions required for the ListLoggerDefinitions API call. */
	static readonly ListLoggerDefinitions: string[] = [
		"greengrass:ListLoggerDefinitions",
	];
	/** IAM actions required for the ListResourceDefinitionVersions API call. */
	static readonly ListResourceDefinitionVersions: string[] = [
		"greengrass:ListResourceDefinitionVersions",
	];
	/** IAM actions required for the ListResourceDefinitions API call. */
	static readonly ListResourceDefinitions: string[] = [
		"greengrass:ListResourceDefinitions",
	];
	/** IAM actions required for the ListSubscriptionDefinitionVersions API call. */
	static readonly ListSubscriptionDefinitionVersions: string[] = [
		"greengrass:ListSubscriptionDefinitionVersions",
	];
	/** IAM actions required for the ListSubscriptionDefinitions API call. */
	static readonly ListSubscriptionDefinitions: string[] = [
		"greengrass:ListSubscriptionDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"greengrass:ListTagsForResource",
	];
	/** IAM actions required for the ResetDeployments API call. */
	static readonly ResetDeployments: string[] = ["greengrass:ResetDeployments"];
	/** IAM actions required for the ResolveComponentCandidates API call. */
	static readonly ResolveComponentCandidates: string[] = [];
	/** IAM actions required for the StartBulkDeployment API call. */
	static readonly StartBulkDeployment: string[] = [
		"iam:PassRole",
		"greengrass:StartBulkDeployment",
		"greengrass:TagResource",
	];
	/** IAM actions required for the StopBulkDeployment API call. */
	static readonly StopBulkDeployment: string[] = [
		"greengrass:StopBulkDeployment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["greengrass:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["greengrass:UntagResource"];
	/** IAM actions required for the UpdateConnectivityInfo API call. */
	static readonly UpdateConnectivityInfo: string[] = [
		"greengrass:UpdateConnectivityInfo",
	];
	/** IAM actions required for the UpdateConnectorDefinition API call. */
	static readonly UpdateConnectorDefinition: string[] = [
		"greengrass:UpdateConnectorDefinition",
	];
	/** IAM actions required for the UpdateCoreDefinition API call. */
	static readonly UpdateCoreDefinition: string[] = [
		"greengrass:UpdateCoreDefinition",
	];
	/** IAM actions required for the UpdateDeviceDefinition API call. */
	static readonly UpdateDeviceDefinition: string[] = [
		"greengrass:UpdateDeviceDefinition",
	];
	/** IAM actions required for the UpdateFunctionDefinition API call. */
	static readonly UpdateFunctionDefinition: string[] = [
		"greengrass:UpdateFunctionDefinition",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = ["greengrass:UpdateGroup"];
	/** IAM actions required for the UpdateGroupCertificateConfiguration API call. */
	static readonly UpdateGroupCertificateConfiguration: string[] = [
		"greengrass:UpdateGroupCertificateConfiguration",
	];
	/** IAM actions required for the UpdateLoggerDefinition API call. */
	static readonly UpdateLoggerDefinition: string[] = [
		"greengrass:UpdateLoggerDefinition",
	];
	/** IAM actions required for the UpdateResourceDefinition API call. */
	static readonly UpdateResourceDefinition: string[] = [
		"greengrass:UpdateResourceDefinition",
	];
	/** IAM actions required for the UpdateSubscriptionDefinition API call. */
	static readonly UpdateSubscriptionDefinition: string[] = [
		"greengrass:UpdateSubscriptionDefinition",
	];
	/** IAM actions required for the UpdateThingRuntimeConfiguration API call. */
	static readonly UpdateThingRuntimeConfiguration: string[] = [
		"greengrass:UpdateThingRuntimeConfiguration",
	];
}

/**
 * Condition key constants and builders for greengrass.
 */
export class GreengrassConditions {
	/** Condition keys applicable to the CreateComponentVersion action. */
	static readonly CreateComponentVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectorDefinition action. */
	static readonly CreateConnectorDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCoreDefinition action. */
	static readonly CreateCoreDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeployment action. */
	static readonly CreateDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeviceDefinition action. */
	static readonly CreateDeviceDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFunctionDefinition action. */
	static readonly CreateFunctionDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CreateGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggerDefinition action. */
	static readonly CreateLoggerDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceDefinition action. */
	static readonly CreateResourceDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscriptionDefinition action. */
	static readonly CreateSubscriptionDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartBulkDeployment action. */
	static readonly StartBulkDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
