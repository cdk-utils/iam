// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/proton.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the proton service.
 */
export class ProtonActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "proton";

	/** [Write] proton:AcceptEnvironmentAccountConnection */
	static readonly AcceptEnvironmentAccountConnection =
		"proton:AcceptEnvironmentAccountConnection";
	/** [Write] proton:CancelComponentDeployment */
	static readonly CancelComponentDeployment =
		"proton:CancelComponentDeployment";
	/** [Write] proton:CancelEnvironmentDeployment */
	static readonly CancelEnvironmentDeployment =
		"proton:CancelEnvironmentDeployment";
	/** [Write] proton:CancelServiceInstanceDeployment */
	static readonly CancelServiceInstanceDeployment =
		"proton:CancelServiceInstanceDeployment";
	/** [Write] proton:CancelServicePipelineDeployment */
	static readonly CancelServicePipelineDeployment =
		"proton:CancelServicePipelineDeployment";
	/** [Write] proton:CreateComponent */
	static readonly CreateComponent = "proton:CreateComponent";
	/** [Write] proton:CreateEnvironment */
	static readonly CreateEnvironment = "proton:CreateEnvironment";
	/** [Write] proton:CreateEnvironmentAccountConnection */
	static readonly CreateEnvironmentAccountConnection =
		"proton:CreateEnvironmentAccountConnection";
	/** [Write] proton:CreateEnvironmentTemplate */
	static readonly CreateEnvironmentTemplate =
		"proton:CreateEnvironmentTemplate";
	/** [Write] proton:CreateEnvironmentTemplateMajorVersion */
	static readonly CreateEnvironmentTemplateMajorVersion =
		"proton:CreateEnvironmentTemplateMajorVersion";
	/** [Write] proton:CreateEnvironmentTemplateMinorVersion */
	static readonly CreateEnvironmentTemplateMinorVersion =
		"proton:CreateEnvironmentTemplateMinorVersion";
	/** [Write] proton:CreateEnvironmentTemplateVersion */
	static readonly CreateEnvironmentTemplateVersion =
		"proton:CreateEnvironmentTemplateVersion";
	/** [Write] proton:CreateRepository */
	static readonly CreateRepository = "proton:CreateRepository";
	/** [Write] proton:CreateService */
	static readonly CreateService = "proton:CreateService";
	/** [Write] proton:CreateServiceInstance */
	static readonly CreateServiceInstance = "proton:CreateServiceInstance";
	/** [Write] proton:CreateServiceSyncConfig */
	static readonly CreateServiceSyncConfig = "proton:CreateServiceSyncConfig";
	/** [Write] proton:CreateServiceTemplate */
	static readonly CreateServiceTemplate = "proton:CreateServiceTemplate";
	/** [Write] proton:CreateServiceTemplateMajorVersion */
	static readonly CreateServiceTemplateMajorVersion =
		"proton:CreateServiceTemplateMajorVersion";
	/** [Write] proton:CreateServiceTemplateMinorVersion */
	static readonly CreateServiceTemplateMinorVersion =
		"proton:CreateServiceTemplateMinorVersion";
	/** [Write] proton:CreateServiceTemplateVersion */
	static readonly CreateServiceTemplateVersion =
		"proton:CreateServiceTemplateVersion";
	/** [Write] proton:CreateTemplateSyncConfig */
	static readonly CreateTemplateSyncConfig = "proton:CreateTemplateSyncConfig";
	/** [Write] proton:DeleteAccountRoles */
	static readonly DeleteAccountRoles = "proton:DeleteAccountRoles";
	/** [Write] proton:DeleteComponent */
	static readonly DeleteComponent = "proton:DeleteComponent";
	/** [Write] proton:DeleteDeployment */
	static readonly DeleteDeployment = "proton:DeleteDeployment";
	/** [Write] proton:DeleteEnvironment */
	static readonly DeleteEnvironment = "proton:DeleteEnvironment";
	/** [Write] proton:DeleteEnvironmentAccountConnection */
	static readonly DeleteEnvironmentAccountConnection =
		"proton:DeleteEnvironmentAccountConnection";
	/** [Write] proton:DeleteEnvironmentTemplate */
	static readonly DeleteEnvironmentTemplate =
		"proton:DeleteEnvironmentTemplate";
	/** [Write] proton:DeleteEnvironmentTemplateMajorVersion */
	static readonly DeleteEnvironmentTemplateMajorVersion =
		"proton:DeleteEnvironmentTemplateMajorVersion";
	/** [Write] proton:DeleteEnvironmentTemplateMinorVersion */
	static readonly DeleteEnvironmentTemplateMinorVersion =
		"proton:DeleteEnvironmentTemplateMinorVersion";
	/** [Write] proton:DeleteEnvironmentTemplateVersion */
	static readonly DeleteEnvironmentTemplateVersion =
		"proton:DeleteEnvironmentTemplateVersion";
	/** [Write] proton:DeleteRepository */
	static readonly DeleteRepository = "proton:DeleteRepository";
	/** [Write] proton:DeleteService */
	static readonly DeleteService = "proton:DeleteService";
	/** [Write] proton:DeleteServiceSyncConfig */
	static readonly DeleteServiceSyncConfig = "proton:DeleteServiceSyncConfig";
	/** [Write] proton:DeleteServiceTemplate */
	static readonly DeleteServiceTemplate = "proton:DeleteServiceTemplate";
	/** [Write] proton:DeleteServiceTemplateMajorVersion */
	static readonly DeleteServiceTemplateMajorVersion =
		"proton:DeleteServiceTemplateMajorVersion";
	/** [Write] proton:DeleteServiceTemplateMinorVersion */
	static readonly DeleteServiceTemplateMinorVersion =
		"proton:DeleteServiceTemplateMinorVersion";
	/** [Write] proton:DeleteServiceTemplateVersion */
	static readonly DeleteServiceTemplateVersion =
		"proton:DeleteServiceTemplateVersion";
	/** [Write] proton:DeleteTemplateSyncConfig */
	static readonly DeleteTemplateSyncConfig = "proton:DeleteTemplateSyncConfig";
	/** [Read] proton:GetAccountRoles */
	static readonly actionGetAccountRoles = "proton:GetAccountRoles";
	/** [Read] proton:GetAccountSettings */
	static readonly actionGetAccountSettings = "proton:GetAccountSettings";
	/** [Read] proton:GetComponent */
	static readonly actionGetComponent = "proton:GetComponent";
	/** [Read] proton:GetDeployment */
	static readonly actionGetDeployment = "proton:GetDeployment";
	/** [Read] proton:GetEnvironment */
	static readonly actionGetEnvironment = "proton:GetEnvironment";
	/** [Read] proton:GetEnvironmentAccountConnection */
	static readonly actionGetEnvironmentAccountConnection =
		"proton:GetEnvironmentAccountConnection";
	/** [Read] proton:GetEnvironmentTemplate */
	static readonly actionGetEnvironmentTemplate =
		"proton:GetEnvironmentTemplate";
	/** [Read] proton:GetEnvironmentTemplateMajorVersion */
	static readonly actionGetEnvironmentTemplateMajorVersion =
		"proton:GetEnvironmentTemplateMajorVersion";
	/** [Read] proton:GetEnvironmentTemplateMinorVersion */
	static readonly actionGetEnvironmentTemplateMinorVersion =
		"proton:GetEnvironmentTemplateMinorVersion";
	/** [Read] proton:GetEnvironmentTemplateVersion */
	static readonly actionGetEnvironmentTemplateVersion =
		"proton:GetEnvironmentTemplateVersion";
	/** [Read] proton:GetRepository */
	static readonly actionGetRepository = "proton:GetRepository";
	/** [Read] proton:GetRepositorySyncStatus */
	static readonly actionGetRepositorySyncStatus =
		"proton:GetRepositorySyncStatus";
	/** [Read] proton:GetResourceTemplateVersionStatusCounts */
	static readonly actionGetResourceTemplateVersionStatusCounts =
		"proton:GetResourceTemplateVersionStatusCounts";
	/** [Read] proton:GetResourcesSummary */
	static readonly actionGetResourcesSummary = "proton:GetResourcesSummary";
	/** [Read] proton:GetService */
	static readonly actionGetService = "proton:GetService";
	/** [Read] proton:GetServiceInstance */
	static readonly actionGetServiceInstance = "proton:GetServiceInstance";
	/** [Read] proton:GetServiceInstanceSyncStatus */
	static readonly actionGetServiceInstanceSyncStatus =
		"proton:GetServiceInstanceSyncStatus";
	/** [Read] proton:GetServiceSyncBlockerSummary */
	static readonly actionGetServiceSyncBlockerSummary =
		"proton:GetServiceSyncBlockerSummary";
	/** [Read] proton:GetServiceSyncConfig */
	static readonly actionGetServiceSyncConfig = "proton:GetServiceSyncConfig";
	/** [Read] proton:GetServiceTemplate */
	static readonly actionGetServiceTemplate = "proton:GetServiceTemplate";
	/** [Read] proton:GetServiceTemplateMajorVersion */
	static readonly actionGetServiceTemplateMajorVersion =
		"proton:GetServiceTemplateMajorVersion";
	/** [Read] proton:GetServiceTemplateMinorVersion */
	static readonly actionGetServiceTemplateMinorVersion =
		"proton:GetServiceTemplateMinorVersion";
	/** [Read] proton:GetServiceTemplateVersion */
	static readonly actionGetServiceTemplateVersion =
		"proton:GetServiceTemplateVersion";
	/** [Read] proton:GetTemplateSyncConfig */
	static readonly actionGetTemplateSyncConfig = "proton:GetTemplateSyncConfig";
	/** [Read] proton:GetTemplateSyncStatus */
	static readonly actionGetTemplateSyncStatus = "proton:GetTemplateSyncStatus";
	/** [List] proton:ListComponentOutputs */
	static readonly ListComponentOutputs = "proton:ListComponentOutputs";
	/** [List] proton:ListComponentProvisionedResources */
	static readonly ListComponentProvisionedResources =
		"proton:ListComponentProvisionedResources";
	/** [List] proton:ListComponents */
	static readonly ListComponents = "proton:ListComponents";
	/** [List] proton:ListDeployments */
	static readonly ListDeployments = "proton:ListDeployments";
	/** [List] proton:ListEnvironmentAccountConnections */
	static readonly ListEnvironmentAccountConnections =
		"proton:ListEnvironmentAccountConnections";
	/** [List] proton:ListEnvironmentOutputs */
	static readonly ListEnvironmentOutputs = "proton:ListEnvironmentOutputs";
	/** [List] proton:ListEnvironmentProvisionedResources */
	static readonly ListEnvironmentProvisionedResources =
		"proton:ListEnvironmentProvisionedResources";
	/** [List] proton:ListEnvironmentTemplateMajorVersions */
	static readonly ListEnvironmentTemplateMajorVersions =
		"proton:ListEnvironmentTemplateMajorVersions";
	/** [List] proton:ListEnvironmentTemplateMinorVersions */
	static readonly ListEnvironmentTemplateMinorVersions =
		"proton:ListEnvironmentTemplateMinorVersions";
	/** [List] proton:ListEnvironmentTemplateVersions */
	static readonly ListEnvironmentTemplateVersions =
		"proton:ListEnvironmentTemplateVersions";
	/** [List] proton:ListEnvironmentTemplates */
	static readonly ListEnvironmentTemplates = "proton:ListEnvironmentTemplates";
	/** [List] proton:ListEnvironments */
	static readonly ListEnvironments = "proton:ListEnvironments";
	/** [List] proton:ListRepositories */
	static readonly ListRepositories = "proton:ListRepositories";
	/** [List] proton:ListRepositorySyncDefinitions */
	static readonly ListRepositorySyncDefinitions =
		"proton:ListRepositorySyncDefinitions";
	/** [List] proton:ListServiceInstanceOutputs */
	static readonly ListServiceInstanceOutputs =
		"proton:ListServiceInstanceOutputs";
	/** [List] proton:ListServiceInstanceProvisionedResources */
	static readonly ListServiceInstanceProvisionedResources =
		"proton:ListServiceInstanceProvisionedResources";
	/** [List] proton:ListServiceInstances */
	static readonly ListServiceInstances = "proton:ListServiceInstances";
	/** [List] proton:ListServicePipelineOutputs */
	static readonly ListServicePipelineOutputs =
		"proton:ListServicePipelineOutputs";
	/** [List] proton:ListServicePipelineProvisionedResources */
	static readonly ListServicePipelineProvisionedResources =
		"proton:ListServicePipelineProvisionedResources";
	/** [List] proton:ListServiceTemplateMajorVersions */
	static readonly ListServiceTemplateMajorVersions =
		"proton:ListServiceTemplateMajorVersions";
	/** [List] proton:ListServiceTemplateMinorVersions */
	static readonly ListServiceTemplateMinorVersions =
		"proton:ListServiceTemplateMinorVersions";
	/** [List] proton:ListServiceTemplateVersions */
	static readonly ListServiceTemplateVersions =
		"proton:ListServiceTemplateVersions";
	/** [List] proton:ListServiceTemplates */
	static readonly ListServiceTemplates = "proton:ListServiceTemplates";
	/** [List] proton:ListServices */
	static readonly ListServices = "proton:ListServices";
	/** [Read] proton:ListTagsForResource */
	static readonly ListTagsForResource = "proton:ListTagsForResource";
	/** [Write] proton:NotifyResourceDeploymentStatusChange */
	static readonly NotifyResourceDeploymentStatusChange =
		"proton:NotifyResourceDeploymentStatusChange";
	/** [Write] proton:RejectEnvironmentAccountConnection */
	static readonly RejectEnvironmentAccountConnection =
		"proton:RejectEnvironmentAccountConnection";
	/** [Tagging] proton:TagResource */
	static readonly TagResource = "proton:TagResource";
	/** [Tagging] proton:UntagResource */
	static readonly UntagResource = "proton:UntagResource";
	/** [Write] proton:UpdateAccountRoles */
	static readonly UpdateAccountRoles = "proton:UpdateAccountRoles";
	/** [Write] proton:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "proton:UpdateAccountSettings";
	/** [Write] proton:UpdateComponent */
	static readonly UpdateComponent = "proton:UpdateComponent";
	/** [Write] proton:UpdateEnvironment */
	static readonly UpdateEnvironment = "proton:UpdateEnvironment";
	/** [Write] proton:UpdateEnvironmentAccountConnection */
	static readonly UpdateEnvironmentAccountConnection =
		"proton:UpdateEnvironmentAccountConnection";
	/** [Write] proton:UpdateEnvironmentTemplate */
	static readonly UpdateEnvironmentTemplate =
		"proton:UpdateEnvironmentTemplate";
	/** [Write] proton:UpdateEnvironmentTemplateMajorVersion */
	static readonly UpdateEnvironmentTemplateMajorVersion =
		"proton:UpdateEnvironmentTemplateMajorVersion";
	/** [Write] proton:UpdateEnvironmentTemplateMinorVersion */
	static readonly UpdateEnvironmentTemplateMinorVersion =
		"proton:UpdateEnvironmentTemplateMinorVersion";
	/** [Write] proton:UpdateEnvironmentTemplateVersion */
	static readonly UpdateEnvironmentTemplateVersion =
		"proton:UpdateEnvironmentTemplateVersion";
	/** [Write] proton:UpdateService */
	static readonly UpdateService = "proton:UpdateService";
	/** [Write] proton:UpdateServiceInstance */
	static readonly UpdateServiceInstance = "proton:UpdateServiceInstance";
	/** [Write] proton:UpdateServicePipeline */
	static readonly UpdateServicePipeline = "proton:UpdateServicePipeline";
	/** [Write] proton:UpdateServiceSyncBlocker */
	static readonly UpdateServiceSyncBlocker = "proton:UpdateServiceSyncBlocker";
	/** [Write] proton:UpdateServiceSyncConfig */
	static readonly UpdateServiceSyncConfig = "proton:UpdateServiceSyncConfig";
	/** [Write] proton:UpdateServiceTemplate */
	static readonly UpdateServiceTemplate = "proton:UpdateServiceTemplate";
	/** [Write] proton:UpdateServiceTemplateMajorVersion */
	static readonly UpdateServiceTemplateMajorVersion =
		"proton:UpdateServiceTemplateMajorVersion";
	/** [Write] proton:UpdateServiceTemplateMinorVersion */
	static readonly UpdateServiceTemplateMinorVersion =
		"proton:UpdateServiceTemplateMinorVersion";
	/** [Write] proton:UpdateServiceTemplateVersion */
	static readonly UpdateServiceTemplateVersion =
		"proton:UpdateServiceTemplateVersion";
	/** [Write] proton:UpdateTemplateSyncConfig */
	static readonly UpdateTemplateSyncConfig = "proton:UpdateTemplateSyncConfig";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ProtonActions.actionGetAccountRoles,
		ProtonActions.actionGetAccountSettings,
		ProtonActions.actionGetComponent,
		ProtonActions.actionGetDeployment,
		ProtonActions.actionGetEnvironment,
		ProtonActions.actionGetEnvironmentAccountConnection,
		ProtonActions.actionGetEnvironmentTemplate,
		ProtonActions.actionGetEnvironmentTemplateMajorVersion,
		ProtonActions.actionGetEnvironmentTemplateMinorVersion,
		ProtonActions.actionGetEnvironmentTemplateVersion,
		ProtonActions.actionGetRepository,
		ProtonActions.actionGetRepositorySyncStatus,
		ProtonActions.actionGetResourceTemplateVersionStatusCounts,
		ProtonActions.actionGetResourcesSummary,
		ProtonActions.actionGetService,
		ProtonActions.actionGetServiceInstance,
		ProtonActions.actionGetServiceInstanceSyncStatus,
		ProtonActions.actionGetServiceSyncBlockerSummary,
		ProtonActions.actionGetServiceSyncConfig,
		ProtonActions.actionGetServiceTemplate,
		ProtonActions.actionGetServiceTemplateMajorVersion,
		ProtonActions.actionGetServiceTemplateMinorVersion,
		ProtonActions.actionGetServiceTemplateVersion,
		ProtonActions.actionGetTemplateSyncConfig,
		ProtonActions.actionGetTemplateSyncStatus,
		ProtonActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ProtonActions.AcceptEnvironmentAccountConnection,
		ProtonActions.CancelComponentDeployment,
		ProtonActions.CancelEnvironmentDeployment,
		ProtonActions.CancelServiceInstanceDeployment,
		ProtonActions.CancelServicePipelineDeployment,
		ProtonActions.CreateComponent,
		ProtonActions.CreateEnvironment,
		ProtonActions.CreateEnvironmentAccountConnection,
		ProtonActions.CreateEnvironmentTemplate,
		ProtonActions.CreateEnvironmentTemplateMajorVersion,
		ProtonActions.CreateEnvironmentTemplateMinorVersion,
		ProtonActions.CreateEnvironmentTemplateVersion,
		ProtonActions.CreateRepository,
		ProtonActions.CreateService,
		ProtonActions.CreateServiceInstance,
		ProtonActions.CreateServiceSyncConfig,
		ProtonActions.CreateServiceTemplate,
		ProtonActions.CreateServiceTemplateMajorVersion,
		ProtonActions.CreateServiceTemplateMinorVersion,
		ProtonActions.CreateServiceTemplateVersion,
		ProtonActions.CreateTemplateSyncConfig,
		ProtonActions.DeleteAccountRoles,
		ProtonActions.DeleteComponent,
		ProtonActions.DeleteDeployment,
		ProtonActions.DeleteEnvironment,
		ProtonActions.DeleteEnvironmentAccountConnection,
		ProtonActions.DeleteEnvironmentTemplate,
		ProtonActions.DeleteEnvironmentTemplateMajorVersion,
		ProtonActions.DeleteEnvironmentTemplateMinorVersion,
		ProtonActions.DeleteEnvironmentTemplateVersion,
		ProtonActions.DeleteRepository,
		ProtonActions.DeleteService,
		ProtonActions.DeleteServiceSyncConfig,
		ProtonActions.DeleteServiceTemplate,
		ProtonActions.DeleteServiceTemplateMajorVersion,
		ProtonActions.DeleteServiceTemplateMinorVersion,
		ProtonActions.DeleteServiceTemplateVersion,
		ProtonActions.DeleteTemplateSyncConfig,
		ProtonActions.NotifyResourceDeploymentStatusChange,
		ProtonActions.RejectEnvironmentAccountConnection,
		ProtonActions.UpdateAccountRoles,
		ProtonActions.UpdateAccountSettings,
		ProtonActions.UpdateComponent,
		ProtonActions.UpdateEnvironment,
		ProtonActions.UpdateEnvironmentAccountConnection,
		ProtonActions.UpdateEnvironmentTemplate,
		ProtonActions.UpdateEnvironmentTemplateMajorVersion,
		ProtonActions.UpdateEnvironmentTemplateMinorVersion,
		ProtonActions.UpdateEnvironmentTemplateVersion,
		ProtonActions.UpdateService,
		ProtonActions.UpdateServiceInstance,
		ProtonActions.UpdateServicePipeline,
		ProtonActions.UpdateServiceSyncBlocker,
		ProtonActions.UpdateServiceSyncConfig,
		ProtonActions.UpdateServiceTemplate,
		ProtonActions.UpdateServiceTemplateMajorVersion,
		ProtonActions.UpdateServiceTemplateMinorVersion,
		ProtonActions.UpdateServiceTemplateVersion,
		ProtonActions.UpdateTemplateSyncConfig,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ProtonActions.ListComponentOutputs,
		ProtonActions.ListComponentProvisionedResources,
		ProtonActions.ListComponents,
		ProtonActions.ListDeployments,
		ProtonActions.ListEnvironmentAccountConnections,
		ProtonActions.ListEnvironmentOutputs,
		ProtonActions.ListEnvironmentProvisionedResources,
		ProtonActions.ListEnvironmentTemplateMajorVersions,
		ProtonActions.ListEnvironmentTemplateMinorVersions,
		ProtonActions.ListEnvironmentTemplateVersions,
		ProtonActions.ListEnvironmentTemplates,
		ProtonActions.ListEnvironments,
		ProtonActions.ListRepositories,
		ProtonActions.ListRepositorySyncDefinitions,
		ProtonActions.ListServiceInstanceOutputs,
		ProtonActions.ListServiceInstanceProvisionedResources,
		ProtonActions.ListServiceInstances,
		ProtonActions.ListServicePipelineOutputs,
		ProtonActions.ListServicePipelineProvisionedResources,
		ProtonActions.ListServiceTemplateMajorVersions,
		ProtonActions.ListServiceTemplateMinorVersions,
		ProtonActions.ListServiceTemplateVersions,
		ProtonActions.ListServiceTemplates,
		ProtonActions.ListServices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ProtonActions.TagResource,
		ProtonActions.UntagResource,
	];
}

/**
 * Properties for building a component ARN.
 */
export interface ProtonComponentArnProps {
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
 * Parsed components of a component ARN.
 */
export interface ProtonComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a deployment ARN.
 */
export interface ProtonDeploymentArnProps {
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
 * Parsed components of a deployment ARN.
 */
export interface ProtonDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface ProtonEnvironmentArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface ProtonEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a environment-account-connection ARN.
 */
export interface ProtonEnvironmentAccountConnectionArnProps {
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
 * Parsed components of a environment-account-connection ARN.
 */
export interface ProtonEnvironmentAccountConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a environment-template ARN.
 */
export interface ProtonEnvironmentTemplateArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment-template ARN.
 */
export interface ProtonEnvironmentTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a environment-template-major-version ARN.
 */
export interface ProtonEnvironmentTemplateMajorVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersionId component of the ARN. */
	readonly majorVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment-template-major-version ARN.
 */
export interface ProtonEnvironmentTemplateMajorVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersionId component. */
	readonly majorVersionId: string;
}

/**
 * Properties for building a environment-template-minor-version ARN.
 */
export interface ProtonEnvironmentTemplateMinorVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersionId component of the ARN. */
	readonly majorVersionId: string;
	/** The MinorVersionId component of the ARN. */
	readonly minorVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment-template-minor-version ARN.
 */
export interface ProtonEnvironmentTemplateMinorVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersionId component. */
	readonly majorVersionId: string;
	/** The MinorVersionId component. */
	readonly minorVersionId: string;
}

/**
 * Properties for building a environment-template-version ARN.
 */
export interface ProtonEnvironmentTemplateVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersion component of the ARN. */
	readonly majorVersion: string;
	/** The MinorVersion component of the ARN. */
	readonly minorVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment-template-version ARN.
 */
export interface ProtonEnvironmentTemplateVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersion component. */
	readonly majorVersion: string;
	/** The MinorVersion component. */
	readonly minorVersion: string;
}

/**
 * Properties for building a repository ARN.
 */
export interface ProtonRepositoryArnProps {
	/** The Provider component of the ARN. */
	readonly provider: string;
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a repository ARN.
 */
export interface ProtonRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Provider component. */
	readonly provider: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a service ARN.
 */
export interface ProtonServiceArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service ARN.
 */
export interface ProtonServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a service-instance ARN.
 */
export interface ProtonServiceInstanceArnProps {
	/** The ServiceName component of the ARN. */
	readonly serviceName: string;
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-instance ARN.
 */
export interface ProtonServiceInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a service-template ARN.
 */
export interface ProtonServiceTemplateArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-template ARN.
 */
export interface ProtonServiceTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a service-template-major-version ARN.
 */
export interface ProtonServiceTemplateMajorVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersionId component of the ARN. */
	readonly majorVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-template-major-version ARN.
 */
export interface ProtonServiceTemplateMajorVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersionId component. */
	readonly majorVersionId: string;
}

/**
 * Properties for building a service-template-minor-version ARN.
 */
export interface ProtonServiceTemplateMinorVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersionId component of the ARN. */
	readonly majorVersionId: string;
	/** The MinorVersionId component of the ARN. */
	readonly minorVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-template-minor-version ARN.
 */
export interface ProtonServiceTemplateMinorVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersionId component. */
	readonly majorVersionId: string;
	/** The MinorVersionId component. */
	readonly minorVersionId: string;
}

/**
 * Properties for building a service-template-version ARN.
 */
export interface ProtonServiceTemplateVersionArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** The MajorVersion component of the ARN. */
	readonly majorVersion: string;
	/** The MinorVersion component of the ARN. */
	readonly minorVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-template-version ARN.
 */
export interface ProtonServiceTemplateVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
	/** The MajorVersion component. */
	readonly majorVersion: string;
	/** The MinorVersion component. */
	readonly minorVersion: string;
}

const ComponentArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):component\/(?<id>[^:/?]+)$/;
const DeploymentArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):deployment\/(?<id>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<name>[^:/?]+)$/;
const EnvironmentAccountConnectionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-account-connection\/(?<id>[^:/?]+)$/;
const EnvironmentTemplateArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template\/(?<name>[^:/?]+)$/;
const EnvironmentTemplateMajorVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template\/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)$/;
const EnvironmentTemplateMinorVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template\/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)\.(?<minorVersionId>[^:/?]+)$/;
const EnvironmentTemplateVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template\/(?<templateName>[^:/?]+):(?<majorVersion>[^:/?]+)\.(?<minorVersion>[^:/?]+)$/;
const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):repository\/(?<provider>[^:/?]+):(?<name>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service\/(?<name>[^:/?]+)$/;
const ServiceInstanceArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceName>[^:/?]+)\/service-instance\/(?<name>[^:/?]+)$/;
const ServiceTemplateArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template\/(?<name>[^:/?]+)$/;
const ServiceTemplateMajorVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template\/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)$/;
const ServiceTemplateMinorVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template\/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)\.(?<minorVersionId>[^:/?]+)$/;
const ServiceTemplateVersionArnRegex =
	/^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template\/(?<templateName>[^:/?]+):(?<majorVersion>[^:/?]+)\.(?<minorVersion>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for proton resources.
 */
export class ProtonResources {
	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: ProtonComponentArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:component/${props.id}`;
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
	static parseComponentArn(arn: string): ProtonComponentArnComponents {
		const match = ComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: ProtonDeploymentArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:deployment/${props.id}`;
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
	static parseDeploymentArn(arn: string): ProtonDeploymentArnComponents {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: ProtonEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): ProtonEnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the environment-account-connection resource.
	 */
	static environmentAccountConnection(
		props: ProtonEnvironmentAccountConnectionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment-account-connection/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment-account-connection resource.
	 */
	static isValidEnvironmentAccountConnectionArn(arn: string): boolean {
		return EnvironmentAccountConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a environment-account-connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentAccountConnectionArn(
		arn: string,
	): ProtonEnvironmentAccountConnectionArnComponents {
		const match = EnvironmentAccountConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment-account-connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the environment-template resource.
	 */
	static environmentTemplate(props: ProtonEnvironmentTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment-template/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment-template resource.
	 */
	static isValidEnvironmentTemplateArn(arn: string): boolean {
		return EnvironmentTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a environment-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentTemplateArn(
		arn: string,
	): ProtonEnvironmentTemplateArnComponents {
		const match = EnvironmentTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the environment-template-major-version resource.
	 */
	static environmentTemplateMajorVersion(
		props: ProtonEnvironmentTemplateMajorVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment-template/${props.templateName}:${props.majorVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment-template-major-version resource.
	 */
	static isValidEnvironmentTemplateMajorVersionArn(arn: string): boolean {
		return EnvironmentTemplateMajorVersionArnRegex.test(arn);
	}

	/**
	 * Parses a environment-template-major-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentTemplateMajorVersionArn(
		arn: string,
	): ProtonEnvironmentTemplateMajorVersionArnComponents {
		const match = EnvironmentTemplateMajorVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment-template-major-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersionId: match.groups!.majorVersionId,
		};
	}

	/**
	 * Builds an ARN for the environment-template-minor-version resource.
	 */
	static environmentTemplateMinorVersion(
		props: ProtonEnvironmentTemplateMinorVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment-template/${props.templateName}:${props.majorVersionId}.${props.minorVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment-template-minor-version resource.
	 */
	static isValidEnvironmentTemplateMinorVersionArn(arn: string): boolean {
		return EnvironmentTemplateMinorVersionArnRegex.test(arn);
	}

	/**
	 * Parses a environment-template-minor-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentTemplateMinorVersionArn(
		arn: string,
	): ProtonEnvironmentTemplateMinorVersionArnComponents {
		const match = EnvironmentTemplateMinorVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment-template-minor-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersionId: match.groups!.majorVersionId,
			minorVersionId: match.groups!.minorVersionId,
		};
	}

	/**
	 * Builds an ARN for the environment-template-version resource.
	 */
	static environmentTemplateVersion(
		props: ProtonEnvironmentTemplateVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:environment-template/${props.templateName}:${props.majorVersion}.${props.minorVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment-template-version resource.
	 */
	static isValidEnvironmentTemplateVersionArn(arn: string): boolean {
		return EnvironmentTemplateVersionArnRegex.test(arn);
	}

	/**
	 * Parses a environment-template-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentTemplateVersionArn(
		arn: string,
	): ProtonEnvironmentTemplateVersionArnComponents {
		const match = EnvironmentTemplateVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment-template-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersion: match.groups!.majorVersion,
			minorVersion: match.groups!.minorVersion,
		};
	}

	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: ProtonRepositoryArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:repository/${props.provider}:${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the repository resource.
	 */
	static isValidRepositoryArn(arn: string): boolean {
		return RepositoryArnRegex.test(arn);
	}

	/**
	 * Parses a repository ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRepositoryArn(arn: string): ProtonRepositoryArnComponents {
		const match = RepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			provider: match.groups!.provider,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: ProtonServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): ProtonServiceArnComponents {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the service-instance resource.
	 */
	static serviceInstance(props: ProtonServiceInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceName}/service-instance/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-instance resource.
	 */
	static isValidServiceInstanceArn(arn: string): boolean {
		return ServiceInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a service-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceInstanceArn(
		arn: string,
	): ProtonServiceInstanceArnComponents {
		const match = ServiceInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceName: match.groups!.serviceName,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the service-template resource.
	 */
	static serviceTemplate(props: ProtonServiceTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service-template/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-template resource.
	 */
	static isValidServiceTemplateArn(arn: string): boolean {
		return ServiceTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a service-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceTemplateArn(
		arn: string,
	): ProtonServiceTemplateArnComponents {
		const match = ServiceTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the service-template-major-version resource.
	 */
	static serviceTemplateMajorVersion(
		props: ProtonServiceTemplateMajorVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service-template/${props.templateName}:${props.majorVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-template-major-version resource.
	 */
	static isValidServiceTemplateMajorVersionArn(arn: string): boolean {
		return ServiceTemplateMajorVersionArnRegex.test(arn);
	}

	/**
	 * Parses a service-template-major-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceTemplateMajorVersionArn(
		arn: string,
	): ProtonServiceTemplateMajorVersionArnComponents {
		const match = ServiceTemplateMajorVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-template-major-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersionId: match.groups!.majorVersionId,
		};
	}

	/**
	 * Builds an ARN for the service-template-minor-version resource.
	 */
	static serviceTemplateMinorVersion(
		props: ProtonServiceTemplateMinorVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service-template/${props.templateName}:${props.majorVersionId}.${props.minorVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-template-minor-version resource.
	 */
	static isValidServiceTemplateMinorVersionArn(arn: string): boolean {
		return ServiceTemplateMinorVersionArnRegex.test(arn);
	}

	/**
	 * Parses a service-template-minor-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceTemplateMinorVersionArn(
		arn: string,
	): ProtonServiceTemplateMinorVersionArnComponents {
		const match = ServiceTemplateMinorVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-template-minor-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersionId: match.groups!.majorVersionId,
			minorVersionId: match.groups!.minorVersionId,
		};
	}

	/**
	 * Builds an ARN for the service-template-version resource.
	 */
	static serviceTemplateVersion(
		props: ProtonServiceTemplateVersionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:proton:${props.region ?? "*"}:${props.account ?? "*"}:service-template/${props.templateName}:${props.majorVersion}.${props.minorVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-template-version resource.
	 */
	static isValidServiceTemplateVersionArn(arn: string): boolean {
		return ServiceTemplateVersionArnRegex.test(arn);
	}

	/**
	 * Parses a service-template-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceTemplateVersionArn(
		arn: string,
	): ProtonServiceTemplateVersionArnComponents {
		const match = ServiceTemplateVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-template-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
			majorVersion: match.groups!.majorVersion,
			minorVersion: match.groups!.minorVersion,
		};
	}
}

/**
 * API operation to required IAM actions mapping for proton.
 */
export class ProtonOperations {
	/** IAM actions required for the AcceptEnvironmentAccountConnection API call. */
	static readonly AcceptEnvironmentAccountConnection: string[] = [
		"proton:AcceptEnvironmentAccountConnection",
	];
	/** IAM actions required for the CancelComponentDeployment API call. */
	static readonly CancelComponentDeployment: string[] = [
		"proton:CancelComponentDeployment",
	];
	/** IAM actions required for the CancelEnvironmentDeployment API call. */
	static readonly CancelEnvironmentDeployment: string[] = [
		"proton:CancelEnvironmentDeployment",
	];
	/** IAM actions required for the CancelServiceInstanceDeployment API call. */
	static readonly CancelServiceInstanceDeployment: string[] = [
		"proton:CancelServiceInstanceDeployment",
	];
	/** IAM actions required for the CancelServicePipelineDeployment API call. */
	static readonly CancelServicePipelineDeployment: string[] = [
		"proton:CancelServicePipelineDeployment",
	];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CreateComponent: string[] = [
		"proton:CreateComponent",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"proton:CreateEnvironment",
		"iam:PassRole",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentAccountConnection API call. */
	static readonly CreateEnvironmentAccountConnection: string[] = [
		"proton:CreateEnvironmentAccountConnection",
		"iam:PassRole",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentTemplate API call. */
	static readonly CreateEnvironmentTemplate: string[] = [
		"proton:CreateEnvironmentTemplate",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentTemplateVersion API call. */
	static readonly CreateEnvironmentTemplateVersion: string[] = [
		"proton:CreateEnvironmentTemplateVersion",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CreateRepository: string[] = [
		"proton:CreateRepository",
		"codestar-connections:PassConnection",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"proton:CreateService",
		"codestar-connections:PassConnection",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceInstance API call. */
	static readonly CreateServiceInstance: string[] = [
		"proton:CreateServiceInstance",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceSyncConfig API call. */
	static readonly CreateServiceSyncConfig: string[] = [
		"proton:CreateServiceSyncConfig",
	];
	/** IAM actions required for the CreateServiceTemplate API call. */
	static readonly CreateServiceTemplate: string[] = [
		"proton:CreateServiceTemplate",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceTemplateVersion API call. */
	static readonly CreateServiceTemplateVersion: string[] = [
		"proton:CreateServiceTemplateVersion",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateTemplateSyncConfig API call. */
	static readonly CreateTemplateSyncConfig: string[] = [
		"proton:CreateTemplateSyncConfig",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DeleteComponent: string[] = ["proton:DeleteComponent"];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DeleteDeployment: string[] = ["proton:DeleteDeployment"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["proton:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentAccountConnection API call. */
	static readonly DeleteEnvironmentAccountConnection: string[] = [
		"proton:DeleteEnvironmentAccountConnection",
	];
	/** IAM actions required for the DeleteEnvironmentTemplate API call. */
	static readonly DeleteEnvironmentTemplate: string[] = [
		"proton:DeleteEnvironmentTemplate",
	];
	/** IAM actions required for the DeleteEnvironmentTemplateVersion API call. */
	static readonly DeleteEnvironmentTemplateVersion: string[] = [
		"proton:DeleteEnvironmentTemplateVersion",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DeleteRepository: string[] = ["proton:DeleteRepository"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = ["proton:DeleteService"];
	/** IAM actions required for the DeleteServiceSyncConfig API call. */
	static readonly DeleteServiceSyncConfig: string[] = [
		"proton:DeleteServiceSyncConfig",
	];
	/** IAM actions required for the DeleteServiceTemplate API call. */
	static readonly DeleteServiceTemplate: string[] = [
		"proton:DeleteServiceTemplate",
	];
	/** IAM actions required for the DeleteServiceTemplateVersion API call. */
	static readonly DeleteServiceTemplateVersion: string[] = [
		"proton:DeleteServiceTemplateVersion",
	];
	/** IAM actions required for the DeleteTemplateSyncConfig API call. */
	static readonly DeleteTemplateSyncConfig: string[] = [
		"proton:DeleteTemplateSyncConfig",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"proton:GetAccountSettings",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly opGetComponent: string[] = ["proton:GetComponent"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = [
		"proton:GetComponent",
		"proton:GetDeployment",
		"proton:GetEnvironment",
		"proton:GetService",
		"proton:GetServiceInstance",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["proton:GetEnvironment"];
	/** IAM actions required for the GetEnvironmentAccountConnection API call. */
	static readonly opGetEnvironmentAccountConnection: string[] = [
		"proton:GetEnvironmentAccountConnection",
	];
	/** IAM actions required for the GetEnvironmentTemplate API call. */
	static readonly opGetEnvironmentTemplate: string[] = [
		"proton:GetEnvironmentTemplate",
	];
	/** IAM actions required for the GetEnvironmentTemplateVersion API call. */
	static readonly opGetEnvironmentTemplateVersion: string[] = [
		"proton:GetEnvironmentTemplateVersion",
	];
	/** IAM actions required for the GetRepository API call. */
	static readonly opGetRepository: string[] = ["proton:GetRepository"];
	/** IAM actions required for the GetRepositorySyncStatus API call. */
	static readonly opGetRepositorySyncStatus: string[] = [
		"proton:GetRepositorySyncStatus",
	];
	/** IAM actions required for the GetResourcesSummary API call. */
	static readonly opGetResourcesSummary: string[] = [
		"proton:GetResourcesSummary",
	];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["proton:GetService"];
	/** IAM actions required for the GetServiceInstance API call. */
	static readonly opGetServiceInstance: string[] = [
		"proton:GetServiceInstance",
	];
	/** IAM actions required for the GetServiceInstanceSyncStatus API call. */
	static readonly opGetServiceInstanceSyncStatus: string[] = [
		"proton:GetServiceInstanceSyncStatus",
	];
	/** IAM actions required for the GetServiceSyncBlockerSummary API call. */
	static readonly opGetServiceSyncBlockerSummary: string[] = [
		"proton:GetServiceSyncBlockerSummary",
	];
	/** IAM actions required for the GetServiceSyncConfig API call. */
	static readonly opGetServiceSyncConfig: string[] = [
		"proton:GetServiceSyncConfig",
	];
	/** IAM actions required for the GetServiceTemplate API call. */
	static readonly opGetServiceTemplate: string[] = [
		"proton:GetServiceTemplate",
	];
	/** IAM actions required for the GetServiceTemplateVersion API call. */
	static readonly opGetServiceTemplateVersion: string[] = [
		"proton:GetServiceTemplateVersion",
	];
	/** IAM actions required for the GetTemplateSyncConfig API call. */
	static readonly opGetTemplateSyncConfig: string[] = [
		"proton:GetTemplateSyncConfig",
	];
	/** IAM actions required for the GetTemplateSyncStatus API call. */
	static readonly opGetTemplateSyncStatus: string[] = [
		"proton:GetTemplateSyncStatus",
	];
	/** IAM actions required for the ListComponentOutputs API call. */
	static readonly ListComponentOutputs: string[] = [
		"proton:ListComponentOutputs",
	];
	/** IAM actions required for the ListComponentProvisionedResources API call. */
	static readonly ListComponentProvisionedResources: string[] = [
		"proton:ListComponentProvisionedResources",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = ["proton:ListComponents"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["proton:ListDeployments"];
	/** IAM actions required for the ListEnvironmentAccountConnections API call. */
	static readonly ListEnvironmentAccountConnections: string[] = [
		"proton:ListEnvironmentAccountConnections",
	];
	/** IAM actions required for the ListEnvironmentOutputs API call. */
	static readonly ListEnvironmentOutputs: string[] = [
		"proton:ListEnvironmentOutputs",
	];
	/** IAM actions required for the ListEnvironmentProvisionedResources API call. */
	static readonly ListEnvironmentProvisionedResources: string[] = [
		"proton:ListEnvironmentProvisionedResources",
	];
	/** IAM actions required for the ListEnvironmentTemplateVersions API call. */
	static readonly ListEnvironmentTemplateVersions: string[] = [
		"proton:ListEnvironmentTemplateVersions",
	];
	/** IAM actions required for the ListEnvironmentTemplates API call. */
	static readonly ListEnvironmentTemplates: string[] = [
		"proton:ListEnvironmentTemplates",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["proton:ListEnvironments"];
	/** IAM actions required for the ListRepositories API call. */
	static readonly ListRepositories: string[] = ["proton:ListRepositories"];
	/** IAM actions required for the ListRepositorySyncDefinitions API call. */
	static readonly ListRepositorySyncDefinitions: string[] = [
		"proton:ListRepositorySyncDefinitions",
	];
	/** IAM actions required for the ListServiceInstanceOutputs API call. */
	static readonly ListServiceInstanceOutputs: string[] = [
		"proton:ListServiceInstanceOutputs",
	];
	/** IAM actions required for the ListServiceInstanceProvisionedResources API call. */
	static readonly ListServiceInstanceProvisionedResources: string[] = [
		"proton:ListServiceInstanceProvisionedResources",
	];
	/** IAM actions required for the ListServiceInstances API call. */
	static readonly ListServiceInstances: string[] = [
		"proton:ListServiceInstances",
	];
	/** IAM actions required for the ListServicePipelineOutputs API call. */
	static readonly ListServicePipelineOutputs: string[] = [
		"proton:ListServicePipelineOutputs",
	];
	/** IAM actions required for the ListServicePipelineProvisionedResources API call. */
	static readonly ListServicePipelineProvisionedResources: string[] = [
		"proton:ListServicePipelineProvisionedResources",
	];
	/** IAM actions required for the ListServiceTemplateVersions API call. */
	static readonly ListServiceTemplateVersions: string[] = [
		"proton:ListServiceTemplateVersions",
	];
	/** IAM actions required for the ListServiceTemplates API call. */
	static readonly ListServiceTemplates: string[] = [
		"proton:ListServiceTemplates",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["proton:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"proton:ListTagsForResource",
	];
	/** IAM actions required for the NotifyResourceDeploymentStatusChange API call. */
	static readonly NotifyResourceDeploymentStatusChange: string[] = [
		"proton:NotifyResourceDeploymentStatusChange",
	];
	/** IAM actions required for the RejectEnvironmentAccountConnection API call. */
	static readonly RejectEnvironmentAccountConnection: string[] = [
		"proton:RejectEnvironmentAccountConnection",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["proton:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["proton:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"iam:PassRole",
		"proton:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UpdateComponent: string[] = ["proton:UpdateComponent"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [
		"iam:PassRole",
		"proton:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateEnvironmentAccountConnection API call. */
	static readonly UpdateEnvironmentAccountConnection: string[] = [
		"iam:PassRole",
		"proton:UpdateEnvironmentAccountConnection",
	];
	/** IAM actions required for the UpdateEnvironmentTemplate API call. */
	static readonly UpdateEnvironmentTemplate: string[] = [
		"proton:UpdateEnvironmentTemplate",
	];
	/** IAM actions required for the UpdateEnvironmentTemplateVersion API call. */
	static readonly UpdateEnvironmentTemplateVersion: string[] = [
		"proton:UpdateEnvironmentTemplateVersion",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UpdateService: string[] = ["proton:UpdateService"];
	/** IAM actions required for the UpdateServiceInstance API call. */
	static readonly UpdateServiceInstance: string[] = [
		"proton:UpdateServiceInstance",
	];
	/** IAM actions required for the UpdateServicePipeline API call. */
	static readonly UpdateServicePipeline: string[] = [
		"proton:UpdateServicePipeline",
	];
	/** IAM actions required for the UpdateServiceSyncBlocker API call. */
	static readonly UpdateServiceSyncBlocker: string[] = [
		"proton:UpdateServiceSyncBlocker",
	];
	/** IAM actions required for the UpdateServiceSyncConfig API call. */
	static readonly UpdateServiceSyncConfig: string[] = [];
	/** IAM actions required for the UpdateServiceTemplate API call. */
	static readonly UpdateServiceTemplate: string[] = [
		"proton:UpdateServiceTemplate",
	];
	/** IAM actions required for the UpdateServiceTemplateVersion API call. */
	static readonly UpdateServiceTemplateVersion: string[] = [
		"proton:UpdateServiceTemplateVersion",
	];
	/** IAM actions required for the UpdateTemplateSyncConfig API call. */
	static readonly UpdateTemplateSyncConfig: string[] = [
		"proton:UpdateTemplateSyncConfig",
	];
}

/**
 * Condition key constants and builders for proton.
 */
export class ProtonConditions {
	/** Condition keys applicable to the CancelEnvironmentDeployment action. */
	static readonly CancelEnvironmentDeploymentConditionKeys: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the CancelServiceInstanceDeployment action. */
	static readonly CancelServiceInstanceDeploymentConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CancelServicePipelineDeployment action. */
	static readonly CancelServicePipelineDeploymentConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CreateComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the CreateEnvironmentAccountConnection action. */
	static readonly CreateEnvironmentAccountConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironmentTemplate action. */
	static readonly CreateEnvironmentTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironmentTemplateMajorVersion action. */
	static readonly CreateEnvironmentTemplateMajorVersionConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEnvironmentTemplateMinorVersion action. */
	static readonly CreateEnvironmentTemplateMinorVersionConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEnvironmentTemplateVersion action. */
	static readonly CreateEnvironmentTemplateVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CreateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CreateServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CreateServiceInstance action. */
	static readonly CreateServiceInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CreateServiceTemplate action. */
	static readonly CreateServiceTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceTemplateMajorVersion action. */
	static readonly CreateServiceTemplateMajorVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceTemplateMinorVersion action. */
	static readonly CreateServiceTemplateMinorVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceTemplateVersion action. */
	static readonly CreateServiceTemplateVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DeleteEnvironmentConditionKeys: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DeleteServiceConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UpdateServiceConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the UpdateServiceInstance action. */
	static readonly UpdateServiceInstanceConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the UpdateServicePipeline action. */
	static readonly UpdateServicePipelineConditionKeys: string[] = [
		"proton:ServiceTemplate",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: proton:EnvironmentTemplate (String) */
	static readonly ENVIRONMENT_TEMPLATE = "proton:EnvironmentTemplate";
	/** Condition key: proton:ServiceTemplate (String) */
	static readonly SERVICE_TEMPLATE = "proton:ServiceTemplate";

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

	/**
	 * Generates a condition block for `proton:EnvironmentTemplate`.
	 */
	static environmentTemplate(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "proton:EnvironmentTemplate": value } };
	}

	/**
	 * Generates a condition block for `proton:ServiceTemplate`.
	 */
	static serviceTemplate(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "proton:ServiceTemplate": value } };
	}
}
