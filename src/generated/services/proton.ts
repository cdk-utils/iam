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
	static readonly ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:AcceptEnvironmentAccountConnection";
	/** [Write] proton:CancelComponentDeployment */
	static readonly CANCEL_COMPONENT_DEPLOYMENT =
		"proton:CancelComponentDeployment";
	/** [Write] proton:CancelEnvironmentDeployment */
	static readonly CANCEL_ENVIRONMENT_DEPLOYMENT =
		"proton:CancelEnvironmentDeployment";
	/** [Write] proton:CancelServiceInstanceDeployment */
	static readonly CANCEL_SERVICE_INSTANCE_DEPLOYMENT =
		"proton:CancelServiceInstanceDeployment";
	/** [Write] proton:CancelServicePipelineDeployment */
	static readonly CANCEL_SERVICE_PIPELINE_DEPLOYMENT =
		"proton:CancelServicePipelineDeployment";
	/** [Write] proton:CreateComponent */
	static readonly CREATE_COMPONENT = "proton:CreateComponent";
	/** [Write] proton:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "proton:CreateEnvironment";
	/** [Write] proton:CreateEnvironmentAccountConnection */
	static readonly CREATE_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:CreateEnvironmentAccountConnection";
	/** [Write] proton:CreateEnvironmentTemplate */
	static readonly CREATE_ENVIRONMENT_TEMPLATE =
		"proton:CreateEnvironmentTemplate";
	/** [Write] proton:CreateEnvironmentTemplateMajorVersion */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION =
		"proton:CreateEnvironmentTemplateMajorVersion";
	/** [Write] proton:CreateEnvironmentTemplateMinorVersion */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_MINOR_VERSION =
		"proton:CreateEnvironmentTemplateMinorVersion";
	/** [Write] proton:CreateEnvironmentTemplateVersion */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_VERSION =
		"proton:CreateEnvironmentTemplateVersion";
	/** [Write] proton:CreateRepository */
	static readonly CREATE_REPOSITORY = "proton:CreateRepository";
	/** [Write] proton:CreateService */
	static readonly CREATE_SERVICE = "proton:CreateService";
	/** [Write] proton:CreateServiceInstance */
	static readonly CREATE_SERVICE_INSTANCE = "proton:CreateServiceInstance";
	/** [Write] proton:CreateServiceSyncConfig */
	static readonly CREATE_SERVICE_SYNC_CONFIG = "proton:CreateServiceSyncConfig";
	/** [Write] proton:CreateServiceTemplate */
	static readonly CREATE_SERVICE_TEMPLATE = "proton:CreateServiceTemplate";
	/** [Write] proton:CreateServiceTemplateMajorVersion */
	static readonly CREATE_SERVICE_TEMPLATE_MAJOR_VERSION =
		"proton:CreateServiceTemplateMajorVersion";
	/** [Write] proton:CreateServiceTemplateMinorVersion */
	static readonly CREATE_SERVICE_TEMPLATE_MINOR_VERSION =
		"proton:CreateServiceTemplateMinorVersion";
	/** [Write] proton:CreateServiceTemplateVersion */
	static readonly CREATE_SERVICE_TEMPLATE_VERSION =
		"proton:CreateServiceTemplateVersion";
	/** [Write] proton:CreateTemplateSyncConfig */
	static readonly CREATE_TEMPLATE_SYNC_CONFIG =
		"proton:CreateTemplateSyncConfig";
	/** [Write] proton:DeleteAccountRoles */
	static readonly DELETE_ACCOUNT_ROLES = "proton:DeleteAccountRoles";
	/** [Write] proton:DeleteComponent */
	static readonly DELETE_COMPONENT = "proton:DeleteComponent";
	/** [Write] proton:DeleteDeployment */
	static readonly DELETE_DEPLOYMENT = "proton:DeleteDeployment";
	/** [Write] proton:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "proton:DeleteEnvironment";
	/** [Write] proton:DeleteEnvironmentAccountConnection */
	static readonly DELETE_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:DeleteEnvironmentAccountConnection";
	/** [Write] proton:DeleteEnvironmentTemplate */
	static readonly DELETE_ENVIRONMENT_TEMPLATE =
		"proton:DeleteEnvironmentTemplate";
	/** [Write] proton:DeleteEnvironmentTemplateMajorVersion */
	static readonly DELETE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION =
		"proton:DeleteEnvironmentTemplateMajorVersion";
	/** [Write] proton:DeleteEnvironmentTemplateMinorVersion */
	static readonly DELETE_ENVIRONMENT_TEMPLATE_MINOR_VERSION =
		"proton:DeleteEnvironmentTemplateMinorVersion";
	/** [Write] proton:DeleteEnvironmentTemplateVersion */
	static readonly DELETE_ENVIRONMENT_TEMPLATE_VERSION =
		"proton:DeleteEnvironmentTemplateVersion";
	/** [Write] proton:DeleteRepository */
	static readonly DELETE_REPOSITORY = "proton:DeleteRepository";
	/** [Write] proton:DeleteService */
	static readonly DELETE_SERVICE = "proton:DeleteService";
	/** [Write] proton:DeleteServiceSyncConfig */
	static readonly DELETE_SERVICE_SYNC_CONFIG = "proton:DeleteServiceSyncConfig";
	/** [Write] proton:DeleteServiceTemplate */
	static readonly DELETE_SERVICE_TEMPLATE = "proton:DeleteServiceTemplate";
	/** [Write] proton:DeleteServiceTemplateMajorVersion */
	static readonly DELETE_SERVICE_TEMPLATE_MAJOR_VERSION =
		"proton:DeleteServiceTemplateMajorVersion";
	/** [Write] proton:DeleteServiceTemplateMinorVersion */
	static readonly DELETE_SERVICE_TEMPLATE_MINOR_VERSION =
		"proton:DeleteServiceTemplateMinorVersion";
	/** [Write] proton:DeleteServiceTemplateVersion */
	static readonly DELETE_SERVICE_TEMPLATE_VERSION =
		"proton:DeleteServiceTemplateVersion";
	/** [Write] proton:DeleteTemplateSyncConfig */
	static readonly DELETE_TEMPLATE_SYNC_CONFIG =
		"proton:DeleteTemplateSyncConfig";
	/** [Read] proton:GetAccountRoles */
	static readonly GET_ACCOUNT_ROLES = "proton:GetAccountRoles";
	/** [Read] proton:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "proton:GetAccountSettings";
	/** [Read] proton:GetComponent */
	static readonly GET_COMPONENT = "proton:GetComponent";
	/** [Read] proton:GetDeployment */
	static readonly GET_DEPLOYMENT = "proton:GetDeployment";
	/** [Read] proton:GetEnvironment */
	static readonly GET_ENVIRONMENT = "proton:GetEnvironment";
	/** [Read] proton:GetEnvironmentAccountConnection */
	static readonly GET_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:GetEnvironmentAccountConnection";
	/** [Read] proton:GetEnvironmentTemplate */
	static readonly GET_ENVIRONMENT_TEMPLATE = "proton:GetEnvironmentTemplate";
	/** [Read] proton:GetEnvironmentTemplateMajorVersion */
	static readonly GET_ENVIRONMENT_TEMPLATE_MAJOR_VERSION =
		"proton:GetEnvironmentTemplateMajorVersion";
	/** [Read] proton:GetEnvironmentTemplateMinorVersion */
	static readonly GET_ENVIRONMENT_TEMPLATE_MINOR_VERSION =
		"proton:GetEnvironmentTemplateMinorVersion";
	/** [Read] proton:GetEnvironmentTemplateVersion */
	static readonly GET_ENVIRONMENT_TEMPLATE_VERSION =
		"proton:GetEnvironmentTemplateVersion";
	/** [Read] proton:GetRepository */
	static readonly GET_REPOSITORY = "proton:GetRepository";
	/** [Read] proton:GetRepositorySyncStatus */
	static readonly GET_REPOSITORY_SYNC_STATUS = "proton:GetRepositorySyncStatus";
	/** [Read] proton:GetResourceTemplateVersionStatusCounts */
	static readonly GET_RESOURCE_TEMPLATE_VERSION_STATUS_COUNTS =
		"proton:GetResourceTemplateVersionStatusCounts";
	/** [Read] proton:GetResourcesSummary */
	static readonly GET_RESOURCES_SUMMARY = "proton:GetResourcesSummary";
	/** [Read] proton:GetService */
	static readonly GET_SERVICE = "proton:GetService";
	/** [Read] proton:GetServiceInstance */
	static readonly GET_SERVICE_INSTANCE = "proton:GetServiceInstance";
	/** [Read] proton:GetServiceInstanceSyncStatus */
	static readonly GET_SERVICE_INSTANCE_SYNC_STATUS =
		"proton:GetServiceInstanceSyncStatus";
	/** [Read] proton:GetServiceSyncBlockerSummary */
	static readonly GET_SERVICE_SYNC_BLOCKER_SUMMARY =
		"proton:GetServiceSyncBlockerSummary";
	/** [Read] proton:GetServiceSyncConfig */
	static readonly GET_SERVICE_SYNC_CONFIG = "proton:GetServiceSyncConfig";
	/** [Read] proton:GetServiceTemplate */
	static readonly GET_SERVICE_TEMPLATE = "proton:GetServiceTemplate";
	/** [Read] proton:GetServiceTemplateMajorVersion */
	static readonly GET_SERVICE_TEMPLATE_MAJOR_VERSION =
		"proton:GetServiceTemplateMajorVersion";
	/** [Read] proton:GetServiceTemplateMinorVersion */
	static readonly GET_SERVICE_TEMPLATE_MINOR_VERSION =
		"proton:GetServiceTemplateMinorVersion";
	/** [Read] proton:GetServiceTemplateVersion */
	static readonly GET_SERVICE_TEMPLATE_VERSION =
		"proton:GetServiceTemplateVersion";
	/** [Read] proton:GetTemplateSyncConfig */
	static readonly GET_TEMPLATE_SYNC_CONFIG = "proton:GetTemplateSyncConfig";
	/** [Read] proton:GetTemplateSyncStatus */
	static readonly GET_TEMPLATE_SYNC_STATUS = "proton:GetTemplateSyncStatus";
	/** [List] proton:ListComponentOutputs */
	static readonly LIST_COMPONENT_OUTPUTS = "proton:ListComponentOutputs";
	/** [List] proton:ListComponentProvisionedResources */
	static readonly LIST_COMPONENT_PROVISIONED_RESOURCES =
		"proton:ListComponentProvisionedResources";
	/** [List] proton:ListComponents */
	static readonly LIST_COMPONENTS = "proton:ListComponents";
	/** [List] proton:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "proton:ListDeployments";
	/** [List] proton:ListEnvironmentAccountConnections */
	static readonly LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS =
		"proton:ListEnvironmentAccountConnections";
	/** [List] proton:ListEnvironmentOutputs */
	static readonly LIST_ENVIRONMENT_OUTPUTS = "proton:ListEnvironmentOutputs";
	/** [List] proton:ListEnvironmentProvisionedResources */
	static readonly LIST_ENVIRONMENT_PROVISIONED_RESOURCES =
		"proton:ListEnvironmentProvisionedResources";
	/** [List] proton:ListEnvironmentTemplateMajorVersions */
	static readonly LIST_ENVIRONMENT_TEMPLATE_MAJOR_VERSIONS =
		"proton:ListEnvironmentTemplateMajorVersions";
	/** [List] proton:ListEnvironmentTemplateMinorVersions */
	static readonly LIST_ENVIRONMENT_TEMPLATE_MINOR_VERSIONS =
		"proton:ListEnvironmentTemplateMinorVersions";
	/** [List] proton:ListEnvironmentTemplateVersions */
	static readonly LIST_ENVIRONMENT_TEMPLATE_VERSIONS =
		"proton:ListEnvironmentTemplateVersions";
	/** [List] proton:ListEnvironmentTemplates */
	static readonly LIST_ENVIRONMENT_TEMPLATES =
		"proton:ListEnvironmentTemplates";
	/** [List] proton:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "proton:ListEnvironments";
	/** [List] proton:ListRepositories */
	static readonly LIST_REPOSITORIES = "proton:ListRepositories";
	/** [List] proton:ListRepositorySyncDefinitions */
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS =
		"proton:ListRepositorySyncDefinitions";
	/** [List] proton:ListServiceInstanceOutputs */
	static readonly LIST_SERVICE_INSTANCE_OUTPUTS =
		"proton:ListServiceInstanceOutputs";
	/** [List] proton:ListServiceInstanceProvisionedResources */
	static readonly LIST_SERVICE_INSTANCE_PROVISIONED_RESOURCES =
		"proton:ListServiceInstanceProvisionedResources";
	/** [List] proton:ListServiceInstances */
	static readonly LIST_SERVICE_INSTANCES = "proton:ListServiceInstances";
	/** [List] proton:ListServicePipelineOutputs */
	static readonly LIST_SERVICE_PIPELINE_OUTPUTS =
		"proton:ListServicePipelineOutputs";
	/** [List] proton:ListServicePipelineProvisionedResources */
	static readonly LIST_SERVICE_PIPELINE_PROVISIONED_RESOURCES =
		"proton:ListServicePipelineProvisionedResources";
	/** [List] proton:ListServiceTemplateMajorVersions */
	static readonly LIST_SERVICE_TEMPLATE_MAJOR_VERSIONS =
		"proton:ListServiceTemplateMajorVersions";
	/** [List] proton:ListServiceTemplateMinorVersions */
	static readonly LIST_SERVICE_TEMPLATE_MINOR_VERSIONS =
		"proton:ListServiceTemplateMinorVersions";
	/** [List] proton:ListServiceTemplateVersions */
	static readonly LIST_SERVICE_TEMPLATE_VERSIONS =
		"proton:ListServiceTemplateVersions";
	/** [List] proton:ListServiceTemplates */
	static readonly LIST_SERVICE_TEMPLATES = "proton:ListServiceTemplates";
	/** [List] proton:ListServices */
	static readonly LIST_SERVICES = "proton:ListServices";
	/** [Read] proton:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "proton:ListTagsForResource";
	/** [Write] proton:NotifyResourceDeploymentStatusChange */
	static readonly NOTIFY_RESOURCE_DEPLOYMENT_STATUS_CHANGE =
		"proton:NotifyResourceDeploymentStatusChange";
	/** [Write] proton:RejectEnvironmentAccountConnection */
	static readonly REJECT_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:RejectEnvironmentAccountConnection";
	/** [Tagging] proton:TagResource */
	static readonly TAG_RESOURCE = "proton:TagResource";
	/** [Tagging] proton:UntagResource */
	static readonly UNTAG_RESOURCE = "proton:UntagResource";
	/** [Write] proton:UpdateAccountRoles */
	static readonly UPDATE_ACCOUNT_ROLES = "proton:UpdateAccountRoles";
	/** [Write] proton:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "proton:UpdateAccountSettings";
	/** [Write] proton:UpdateComponent */
	static readonly UPDATE_COMPONENT = "proton:UpdateComponent";
	/** [Write] proton:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "proton:UpdateEnvironment";
	/** [Write] proton:UpdateEnvironmentAccountConnection */
	static readonly UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION =
		"proton:UpdateEnvironmentAccountConnection";
	/** [Write] proton:UpdateEnvironmentTemplate */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE =
		"proton:UpdateEnvironmentTemplate";
	/** [Write] proton:UpdateEnvironmentTemplateMajorVersion */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION =
		"proton:UpdateEnvironmentTemplateMajorVersion";
	/** [Write] proton:UpdateEnvironmentTemplateMinorVersion */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE_MINOR_VERSION =
		"proton:UpdateEnvironmentTemplateMinorVersion";
	/** [Write] proton:UpdateEnvironmentTemplateVersion */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE_VERSION =
		"proton:UpdateEnvironmentTemplateVersion";
	/** [Write] proton:UpdateService */
	static readonly UPDATE_SERVICE = "proton:UpdateService";
	/** [Write] proton:UpdateServiceInstance */
	static readonly UPDATE_SERVICE_INSTANCE = "proton:UpdateServiceInstance";
	/** [Write] proton:UpdateServicePipeline */
	static readonly UPDATE_SERVICE_PIPELINE = "proton:UpdateServicePipeline";
	/** [Write] proton:UpdateServiceSyncBlocker */
	static readonly UPDATE_SERVICE_SYNC_BLOCKER =
		"proton:UpdateServiceSyncBlocker";
	/** [Write] proton:UpdateServiceSyncConfig */
	static readonly UPDATE_SERVICE_SYNC_CONFIG = "proton:UpdateServiceSyncConfig";
	/** [Write] proton:UpdateServiceTemplate */
	static readonly UPDATE_SERVICE_TEMPLATE = "proton:UpdateServiceTemplate";
	/** [Write] proton:UpdateServiceTemplateMajorVersion */
	static readonly UPDATE_SERVICE_TEMPLATE_MAJOR_VERSION =
		"proton:UpdateServiceTemplateMajorVersion";
	/** [Write] proton:UpdateServiceTemplateMinorVersion */
	static readonly UPDATE_SERVICE_TEMPLATE_MINOR_VERSION =
		"proton:UpdateServiceTemplateMinorVersion";
	/** [Write] proton:UpdateServiceTemplateVersion */
	static readonly UPDATE_SERVICE_TEMPLATE_VERSION =
		"proton:UpdateServiceTemplateVersion";
	/** [Write] proton:UpdateTemplateSyncConfig */
	static readonly UPDATE_TEMPLATE_SYNC_CONFIG =
		"proton:UpdateTemplateSyncConfig";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ProtonActions.GET_ACCOUNT_ROLES,
		ProtonActions.GET_ACCOUNT_SETTINGS,
		ProtonActions.GET_COMPONENT,
		ProtonActions.GET_DEPLOYMENT,
		ProtonActions.GET_ENVIRONMENT,
		ProtonActions.GET_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.GET_ENVIRONMENT_TEMPLATE,
		ProtonActions.GET_ENVIRONMENT_TEMPLATE_MAJOR_VERSION,
		ProtonActions.GET_ENVIRONMENT_TEMPLATE_MINOR_VERSION,
		ProtonActions.GET_ENVIRONMENT_TEMPLATE_VERSION,
		ProtonActions.GET_REPOSITORY,
		ProtonActions.GET_REPOSITORY_SYNC_STATUS,
		ProtonActions.GET_RESOURCE_TEMPLATE_VERSION_STATUS_COUNTS,
		ProtonActions.GET_RESOURCES_SUMMARY,
		ProtonActions.GET_SERVICE,
		ProtonActions.GET_SERVICE_INSTANCE,
		ProtonActions.GET_SERVICE_INSTANCE_SYNC_STATUS,
		ProtonActions.GET_SERVICE_SYNC_BLOCKER_SUMMARY,
		ProtonActions.GET_SERVICE_SYNC_CONFIG,
		ProtonActions.GET_SERVICE_TEMPLATE,
		ProtonActions.GET_SERVICE_TEMPLATE_MAJOR_VERSION,
		ProtonActions.GET_SERVICE_TEMPLATE_MINOR_VERSION,
		ProtonActions.GET_SERVICE_TEMPLATE_VERSION,
		ProtonActions.GET_TEMPLATE_SYNC_CONFIG,
		ProtonActions.GET_TEMPLATE_SYNC_STATUS,
		ProtonActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ProtonActions.ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.CANCEL_COMPONENT_DEPLOYMENT,
		ProtonActions.CANCEL_ENVIRONMENT_DEPLOYMENT,
		ProtonActions.CANCEL_SERVICE_INSTANCE_DEPLOYMENT,
		ProtonActions.CANCEL_SERVICE_PIPELINE_DEPLOYMENT,
		ProtonActions.CREATE_COMPONENT,
		ProtonActions.CREATE_ENVIRONMENT,
		ProtonActions.CREATE_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.CREATE_ENVIRONMENT_TEMPLATE,
		ProtonActions.CREATE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION,
		ProtonActions.CREATE_ENVIRONMENT_TEMPLATE_MINOR_VERSION,
		ProtonActions.CREATE_ENVIRONMENT_TEMPLATE_VERSION,
		ProtonActions.CREATE_REPOSITORY,
		ProtonActions.CREATE_SERVICE,
		ProtonActions.CREATE_SERVICE_INSTANCE,
		ProtonActions.CREATE_SERVICE_SYNC_CONFIG,
		ProtonActions.CREATE_SERVICE_TEMPLATE,
		ProtonActions.CREATE_SERVICE_TEMPLATE_MAJOR_VERSION,
		ProtonActions.CREATE_SERVICE_TEMPLATE_MINOR_VERSION,
		ProtonActions.CREATE_SERVICE_TEMPLATE_VERSION,
		ProtonActions.CREATE_TEMPLATE_SYNC_CONFIG,
		ProtonActions.DELETE_ACCOUNT_ROLES,
		ProtonActions.DELETE_COMPONENT,
		ProtonActions.DELETE_DEPLOYMENT,
		ProtonActions.DELETE_ENVIRONMENT,
		ProtonActions.DELETE_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.DELETE_ENVIRONMENT_TEMPLATE,
		ProtonActions.DELETE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION,
		ProtonActions.DELETE_ENVIRONMENT_TEMPLATE_MINOR_VERSION,
		ProtonActions.DELETE_ENVIRONMENT_TEMPLATE_VERSION,
		ProtonActions.DELETE_REPOSITORY,
		ProtonActions.DELETE_SERVICE,
		ProtonActions.DELETE_SERVICE_SYNC_CONFIG,
		ProtonActions.DELETE_SERVICE_TEMPLATE,
		ProtonActions.DELETE_SERVICE_TEMPLATE_MAJOR_VERSION,
		ProtonActions.DELETE_SERVICE_TEMPLATE_MINOR_VERSION,
		ProtonActions.DELETE_SERVICE_TEMPLATE_VERSION,
		ProtonActions.DELETE_TEMPLATE_SYNC_CONFIG,
		ProtonActions.NOTIFY_RESOURCE_DEPLOYMENT_STATUS_CHANGE,
		ProtonActions.REJECT_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.UPDATE_ACCOUNT_ROLES,
		ProtonActions.UPDATE_ACCOUNT_SETTINGS,
		ProtonActions.UPDATE_COMPONENT,
		ProtonActions.UPDATE_ENVIRONMENT,
		ProtonActions.UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION,
		ProtonActions.UPDATE_ENVIRONMENT_TEMPLATE,
		ProtonActions.UPDATE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION,
		ProtonActions.UPDATE_ENVIRONMENT_TEMPLATE_MINOR_VERSION,
		ProtonActions.UPDATE_ENVIRONMENT_TEMPLATE_VERSION,
		ProtonActions.UPDATE_SERVICE,
		ProtonActions.UPDATE_SERVICE_INSTANCE,
		ProtonActions.UPDATE_SERVICE_PIPELINE,
		ProtonActions.UPDATE_SERVICE_SYNC_BLOCKER,
		ProtonActions.UPDATE_SERVICE_SYNC_CONFIG,
		ProtonActions.UPDATE_SERVICE_TEMPLATE,
		ProtonActions.UPDATE_SERVICE_TEMPLATE_MAJOR_VERSION,
		ProtonActions.UPDATE_SERVICE_TEMPLATE_MINOR_VERSION,
		ProtonActions.UPDATE_SERVICE_TEMPLATE_VERSION,
		ProtonActions.UPDATE_TEMPLATE_SYNC_CONFIG,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ProtonActions.LIST_COMPONENT_OUTPUTS,
		ProtonActions.LIST_COMPONENT_PROVISIONED_RESOURCES,
		ProtonActions.LIST_COMPONENTS,
		ProtonActions.LIST_DEPLOYMENTS,
		ProtonActions.LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS,
		ProtonActions.LIST_ENVIRONMENT_OUTPUTS,
		ProtonActions.LIST_ENVIRONMENT_PROVISIONED_RESOURCES,
		ProtonActions.LIST_ENVIRONMENT_TEMPLATE_MAJOR_VERSIONS,
		ProtonActions.LIST_ENVIRONMENT_TEMPLATE_MINOR_VERSIONS,
		ProtonActions.LIST_ENVIRONMENT_TEMPLATE_VERSIONS,
		ProtonActions.LIST_ENVIRONMENT_TEMPLATES,
		ProtonActions.LIST_ENVIRONMENTS,
		ProtonActions.LIST_REPOSITORIES,
		ProtonActions.LIST_REPOSITORY_SYNC_DEFINITIONS,
		ProtonActions.LIST_SERVICE_INSTANCE_OUTPUTS,
		ProtonActions.LIST_SERVICE_INSTANCE_PROVISIONED_RESOURCES,
		ProtonActions.LIST_SERVICE_INSTANCES,
		ProtonActions.LIST_SERVICE_PIPELINE_OUTPUTS,
		ProtonActions.LIST_SERVICE_PIPELINE_PROVISIONED_RESOURCES,
		ProtonActions.LIST_SERVICE_TEMPLATE_MAJOR_VERSIONS,
		ProtonActions.LIST_SERVICE_TEMPLATE_MINOR_VERSIONS,
		ProtonActions.LIST_SERVICE_TEMPLATE_VERSIONS,
		ProtonActions.LIST_SERVICE_TEMPLATES,
		ProtonActions.LIST_SERVICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ProtonActions.TAG_RESOURCE,
		ProtonActions.UNTAG_RESOURCE,
	];
}

const ComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):component/(?<id>[^:/?]+)$",
);
const DeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):deployment/(?<id>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment/(?<name>[^:/?]+)$",
);
const EnvironmentAccountConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-account-connection/(?<id>[^:/?]+)$",
);
const EnvironmentTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template/(?<name>[^:/?]+)$",
);
const EnvironmentTemplateMajorVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)$",
);
const EnvironmentTemplateMinorVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)\\.(?<minorVersionId>[^:/?]+)$",
);
const EnvironmentTemplateVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):environment-template/(?<templateName>[^:/?]+):(?<majorVersion>[^:/?]+)\\.(?<minorVersion>[^:/?]+)$",
);
const RepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):repository/(?<provider>[^:/?]+):(?<name>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service/(?<name>[^:/?]+)$",
);
const ServiceInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceName>[^:/?]+)/service-instance/(?<name>[^:/?]+)$",
);
const ServiceTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template/(?<name>[^:/?]+)$",
);
const ServiceTemplateMajorVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)$",
);
const ServiceTemplateMinorVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template/(?<templateName>[^:/?]+):(?<majorVersionId>[^:/?]+)\\.(?<minorVersionId>[^:/?]+)$",
);
const ServiceTemplateVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):proton:(?<region>[^:]*):(?<account>[^:]*):service-template/(?<templateName>[^:/?]+):(?<majorVersion>[^:/?]+)\\.(?<minorVersion>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for proton resources.
 */
export class ProtonResources {
	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static deployment(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static environment(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static environmentAccountConnection(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentAccountConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static environmentTemplate(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static environmentTemplateMajorVersion(props: {
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
	}): string {
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
	static parseEnvironmentTemplateMajorVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersionId: string;
	} {
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
	static environmentTemplateMinorVersion(props: {
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
	}): string {
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
	static parseEnvironmentTemplateMinorVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersionId: string;
		minorVersionId: string;
	} {
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
	static environmentTemplateVersion(props: {
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
	}): string {
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
	static parseEnvironmentTemplateVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersion: string;
		minorVersion: string;
	} {
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
	static repository(props: {
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
	}): string {
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
	static parseRepositoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		provider: string;
		name: string;
	} {
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
	static service(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static serviceInstance(props: {
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
	}): string {
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
	static parseServiceInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceName: string;
		name: string;
	} {
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
	static serviceTemplate(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static serviceTemplateMajorVersion(props: {
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
	}): string {
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
	static parseServiceTemplateMajorVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersionId: string;
	} {
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
	static serviceTemplateMinorVersion(props: {
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
	}): string {
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
	static parseServiceTemplateMinorVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersionId: string;
		minorVersionId: string;
	} {
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
	static serviceTemplateVersion(props: {
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
	}): string {
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
	static parseServiceTemplateVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
		majorVersion: string;
		minorVersion: string;
	} {
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
	static readonly ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"proton:AcceptEnvironmentAccountConnection",
	];
	/** IAM actions required for the CancelComponentDeployment API call. */
	static readonly CANCEL_COMPONENT_DEPLOYMENT: string[] = [
		"proton:CancelComponentDeployment",
	];
	/** IAM actions required for the CancelEnvironmentDeployment API call. */
	static readonly CANCEL_ENVIRONMENT_DEPLOYMENT: string[] = [
		"proton:CancelEnvironmentDeployment",
	];
	/** IAM actions required for the CancelServiceInstanceDeployment API call. */
	static readonly CANCEL_SERVICE_INSTANCE_DEPLOYMENT: string[] = [
		"proton:CancelServiceInstanceDeployment",
	];
	/** IAM actions required for the CancelServicePipelineDeployment API call. */
	static readonly CANCEL_SERVICE_PIPELINE_DEPLOYMENT: string[] = [
		"proton:CancelServicePipelineDeployment",
	];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CREATE_COMPONENT: string[] = [
		"proton:CreateComponent",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"proton:CreateEnvironment",
		"iam:PassRole",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentAccountConnection API call. */
	static readonly CREATE_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"proton:CreateEnvironmentAccountConnection",
		"iam:PassRole",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentTemplate API call. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE: string[] = [
		"proton:CreateEnvironmentTemplate",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentTemplateVersion API call. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_VERSION: string[] = [
		"proton:CreateEnvironmentTemplateVersion",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CREATE_REPOSITORY: string[] = [
		"proton:CreateRepository",
		"codestar-connections:PassConnection",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"proton:CreateService",
		"codestar-connections:PassConnection",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceInstance API call. */
	static readonly CREATE_SERVICE_INSTANCE: string[] = [
		"proton:CreateServiceInstance",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceSyncConfig API call. */
	static readonly CREATE_SERVICE_SYNC_CONFIG: string[] = [
		"proton:CreateServiceSyncConfig",
	];
	/** IAM actions required for the CreateServiceTemplate API call. */
	static readonly CREATE_SERVICE_TEMPLATE: string[] = [
		"proton:CreateServiceTemplate",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateServiceTemplateVersion API call. */
	static readonly CREATE_SERVICE_TEMPLATE_VERSION: string[] = [
		"proton:CreateServiceTemplateVersion",
		"proton:TagResource",
	];
	/** IAM actions required for the CreateTemplateSyncConfig API call. */
	static readonly CREATE_TEMPLATE_SYNC_CONFIG: string[] = [
		"proton:CreateTemplateSyncConfig",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DELETE_COMPONENT: string[] = ["proton:DeleteComponent"];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DELETE_DEPLOYMENT: string[] = ["proton:DeleteDeployment"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["proton:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentAccountConnection API call. */
	static readonly DELETE_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"proton:DeleteEnvironmentAccountConnection",
	];
	/** IAM actions required for the DeleteEnvironmentTemplate API call. */
	static readonly DELETE_ENVIRONMENT_TEMPLATE: string[] = [
		"proton:DeleteEnvironmentTemplate",
	];
	/** IAM actions required for the DeleteEnvironmentTemplateVersion API call. */
	static readonly DELETE_ENVIRONMENT_TEMPLATE_VERSION: string[] = [
		"proton:DeleteEnvironmentTemplateVersion",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DELETE_REPOSITORY: string[] = ["proton:DeleteRepository"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["proton:DeleteService"];
	/** IAM actions required for the DeleteServiceSyncConfig API call. */
	static readonly DELETE_SERVICE_SYNC_CONFIG: string[] = [
		"proton:DeleteServiceSyncConfig",
	];
	/** IAM actions required for the DeleteServiceTemplate API call. */
	static readonly DELETE_SERVICE_TEMPLATE: string[] = [
		"proton:DeleteServiceTemplate",
	];
	/** IAM actions required for the DeleteServiceTemplateVersion API call. */
	static readonly DELETE_SERVICE_TEMPLATE_VERSION: string[] = [
		"proton:DeleteServiceTemplateVersion",
	];
	/** IAM actions required for the DeleteTemplateSyncConfig API call. */
	static readonly DELETE_TEMPLATE_SYNC_CONFIG: string[] = [
		"proton:DeleteTemplateSyncConfig",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"proton:GetAccountSettings",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly GET_COMPONENT: string[] = ["proton:GetComponent"];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = [
		"proton:GetComponent",
		"proton:GetDeployment",
		"proton:GetEnvironment",
		"proton:GetService",
		"proton:GetServiceInstance",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["proton:GetEnvironment"];
	/** IAM actions required for the GetEnvironmentAccountConnection API call. */
	static readonly GET_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"proton:GetEnvironmentAccountConnection",
	];
	/** IAM actions required for the GetEnvironmentTemplate API call. */
	static readonly GET_ENVIRONMENT_TEMPLATE: string[] = [
		"proton:GetEnvironmentTemplate",
	];
	/** IAM actions required for the GetEnvironmentTemplateVersion API call. */
	static readonly GET_ENVIRONMENT_TEMPLATE_VERSION: string[] = [
		"proton:GetEnvironmentTemplateVersion",
	];
	/** IAM actions required for the GetRepository API call. */
	static readonly GET_REPOSITORY: string[] = ["proton:GetRepository"];
	/** IAM actions required for the GetRepositorySyncStatus API call. */
	static readonly GET_REPOSITORY_SYNC_STATUS: string[] = [
		"proton:GetRepositorySyncStatus",
	];
	/** IAM actions required for the GetResourcesSummary API call. */
	static readonly GET_RESOURCES_SUMMARY: string[] = [
		"proton:GetResourcesSummary",
	];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["proton:GetService"];
	/** IAM actions required for the GetServiceInstance API call. */
	static readonly GET_SERVICE_INSTANCE: string[] = [
		"proton:GetServiceInstance",
	];
	/** IAM actions required for the GetServiceInstanceSyncStatus API call. */
	static readonly GET_SERVICE_INSTANCE_SYNC_STATUS: string[] = [
		"proton:GetServiceInstanceSyncStatus",
	];
	/** IAM actions required for the GetServiceSyncBlockerSummary API call. */
	static readonly GET_SERVICE_SYNC_BLOCKER_SUMMARY: string[] = [
		"proton:GetServiceSyncBlockerSummary",
	];
	/** IAM actions required for the GetServiceSyncConfig API call. */
	static readonly GET_SERVICE_SYNC_CONFIG: string[] = [
		"proton:GetServiceSyncConfig",
	];
	/** IAM actions required for the GetServiceTemplate API call. */
	static readonly GET_SERVICE_TEMPLATE: string[] = [
		"proton:GetServiceTemplate",
	];
	/** IAM actions required for the GetServiceTemplateVersion API call. */
	static readonly GET_SERVICE_TEMPLATE_VERSION: string[] = [
		"proton:GetServiceTemplateVersion",
	];
	/** IAM actions required for the GetTemplateSyncConfig API call. */
	static readonly GET_TEMPLATE_SYNC_CONFIG: string[] = [
		"proton:GetTemplateSyncConfig",
	];
	/** IAM actions required for the GetTemplateSyncStatus API call. */
	static readonly GET_TEMPLATE_SYNC_STATUS: string[] = [
		"proton:GetTemplateSyncStatus",
	];
	/** IAM actions required for the ListComponentOutputs API call. */
	static readonly LIST_COMPONENT_OUTPUTS: string[] = [
		"proton:ListComponentOutputs",
	];
	/** IAM actions required for the ListComponentProvisionedResources API call. */
	static readonly LIST_COMPONENT_PROVISIONED_RESOURCES: string[] = [
		"proton:ListComponentProvisionedResources",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = ["proton:ListComponents"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["proton:ListDeployments"];
	/** IAM actions required for the ListEnvironmentAccountConnections API call. */
	static readonly LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS: string[] = [
		"proton:ListEnvironmentAccountConnections",
	];
	/** IAM actions required for the ListEnvironmentOutputs API call. */
	static readonly LIST_ENVIRONMENT_OUTPUTS: string[] = [
		"proton:ListEnvironmentOutputs",
	];
	/** IAM actions required for the ListEnvironmentProvisionedResources API call. */
	static readonly LIST_ENVIRONMENT_PROVISIONED_RESOURCES: string[] = [
		"proton:ListEnvironmentProvisionedResources",
	];
	/** IAM actions required for the ListEnvironmentTemplateVersions API call. */
	static readonly LIST_ENVIRONMENT_TEMPLATE_VERSIONS: string[] = [
		"proton:ListEnvironmentTemplateVersions",
	];
	/** IAM actions required for the ListEnvironmentTemplates API call. */
	static readonly LIST_ENVIRONMENT_TEMPLATES: string[] = [
		"proton:ListEnvironmentTemplates",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["proton:ListEnvironments"];
	/** IAM actions required for the ListRepositories API call. */
	static readonly LIST_REPOSITORIES: string[] = ["proton:ListRepositories"];
	/** IAM actions required for the ListRepositorySyncDefinitions API call. */
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS: string[] = [
		"proton:ListRepositorySyncDefinitions",
	];
	/** IAM actions required for the ListServiceInstanceOutputs API call. */
	static readonly LIST_SERVICE_INSTANCE_OUTPUTS: string[] = [
		"proton:ListServiceInstanceOutputs",
	];
	/** IAM actions required for the ListServiceInstanceProvisionedResources API call. */
	static readonly LIST_SERVICE_INSTANCE_PROVISIONED_RESOURCES: string[] = [
		"proton:ListServiceInstanceProvisionedResources",
	];
	/** IAM actions required for the ListServiceInstances API call. */
	static readonly LIST_SERVICE_INSTANCES: string[] = [
		"proton:ListServiceInstances",
	];
	/** IAM actions required for the ListServicePipelineOutputs API call. */
	static readonly LIST_SERVICE_PIPELINE_OUTPUTS: string[] = [
		"proton:ListServicePipelineOutputs",
	];
	/** IAM actions required for the ListServicePipelineProvisionedResources API call. */
	static readonly LIST_SERVICE_PIPELINE_PROVISIONED_RESOURCES: string[] = [
		"proton:ListServicePipelineProvisionedResources",
	];
	/** IAM actions required for the ListServiceTemplateVersions API call. */
	static readonly LIST_SERVICE_TEMPLATE_VERSIONS: string[] = [
		"proton:ListServiceTemplateVersions",
	];
	/** IAM actions required for the ListServiceTemplates API call. */
	static readonly LIST_SERVICE_TEMPLATES: string[] = [
		"proton:ListServiceTemplates",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["proton:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"proton:ListTagsForResource",
	];
	/** IAM actions required for the NotifyResourceDeploymentStatusChange API call. */
	static readonly NOTIFY_RESOURCE_DEPLOYMENT_STATUS_CHANGE: string[] = [
		"proton:NotifyResourceDeploymentStatusChange",
	];
	/** IAM actions required for the RejectEnvironmentAccountConnection API call. */
	static readonly REJECT_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"proton:RejectEnvironmentAccountConnection",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["proton:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["proton:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"iam:PassRole",
		"proton:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UPDATE_COMPONENT: string[] = ["proton:UpdateComponent"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = [
		"iam:PassRole",
		"proton:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateEnvironmentAccountConnection API call. */
	static readonly UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION: string[] = [
		"iam:PassRole",
		"proton:UpdateEnvironmentAccountConnection",
	];
	/** IAM actions required for the UpdateEnvironmentTemplate API call. */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE: string[] = [
		"proton:UpdateEnvironmentTemplate",
	];
	/** IAM actions required for the UpdateEnvironmentTemplateVersion API call. */
	static readonly UPDATE_ENVIRONMENT_TEMPLATE_VERSION: string[] = [
		"proton:UpdateEnvironmentTemplateVersion",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = ["proton:UpdateService"];
	/** IAM actions required for the UpdateServiceInstance API call. */
	static readonly UPDATE_SERVICE_INSTANCE: string[] = [
		"proton:UpdateServiceInstance",
	];
	/** IAM actions required for the UpdateServicePipeline API call. */
	static readonly UPDATE_SERVICE_PIPELINE: string[] = [
		"proton:UpdateServicePipeline",
	];
	/** IAM actions required for the UpdateServiceSyncBlocker API call. */
	static readonly UPDATE_SERVICE_SYNC_BLOCKER: string[] = [
		"proton:UpdateServiceSyncBlocker",
	];
	/** IAM actions required for the UpdateServiceSyncConfig API call. */
	static readonly UPDATE_SERVICE_SYNC_CONFIG: string[] = [];
	/** IAM actions required for the UpdateServiceTemplate API call. */
	static readonly UPDATE_SERVICE_TEMPLATE: string[] = [
		"proton:UpdateServiceTemplate",
	];
	/** IAM actions required for the UpdateServiceTemplateVersion API call. */
	static readonly UPDATE_SERVICE_TEMPLATE_VERSION: string[] = [
		"proton:UpdateServiceTemplateVersion",
	];
	/** IAM actions required for the UpdateTemplateSyncConfig API call. */
	static readonly UPDATE_TEMPLATE_SYNC_CONFIG: string[] = [
		"proton:UpdateTemplateSyncConfig",
	];
}

/**
 * Condition key constants and builders for proton.
 */
export class ProtonConditions {
	/** Condition keys applicable to the CancelEnvironmentDeployment action. */
	static readonly CANCEL_ENVIRONMENT_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the CancelServiceInstanceDeployment action. */
	static readonly CANCEL_SERVICE_INSTANCE_DEPLOYMENT_CONDITION_KEYS: string[] =
		["proton:ServiceTemplate"];
	/** Condition keys applicable to the CancelServicePipelineDeployment action. */
	static readonly CANCEL_SERVICE_PIPELINE_DEPLOYMENT_CONDITION_KEYS: string[] =
		["proton:ServiceTemplate"];
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CREATE_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the CreateEnvironmentAccountConnection action. */
	static readonly CREATE_ENVIRONMENT_ACCOUNT_CONNECTION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEnvironmentTemplate action. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironmentTemplateMajorVersion action. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_MAJOR_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEnvironmentTemplateMinorVersion action. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_MINOR_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEnvironmentTemplateVersion action. */
	static readonly CREATE_ENVIRONMENT_TEMPLATE_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CREATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CreateServiceInstance action. */
	static readonly CREATE_SERVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the CreateServiceTemplate action. */
	static readonly CREATE_SERVICE_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceTemplateMajorVersion action. */
	static readonly CREATE_SERVICE_TEMPLATE_MAJOR_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateServiceTemplateMinorVersion action. */
	static readonly CREATE_SERVICE_TEMPLATE_MINOR_VERSION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateServiceTemplateVersion action. */
	static readonly CREATE_SERVICE_TEMPLATE_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DELETE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DELETE_SERVICE_CONDITION_KEYS: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UPDATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"proton:EnvironmentTemplate",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UPDATE_SERVICE_CONDITION_KEYS: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the UpdateServiceInstance action. */
	static readonly UPDATE_SERVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"proton:ServiceTemplate",
	];
	/** Condition keys applicable to the UpdateServicePipeline action. */
	static readonly UPDATE_SERVICE_PIPELINE_CONDITION_KEYS: string[] = [
		"proton:ServiceTemplate",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
