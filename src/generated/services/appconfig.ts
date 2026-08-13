// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appconfig.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appconfig service.
 */
export class AppconfigActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appconfig";

	/** [Write] appconfig:CreateApplication */
	static readonly CREATE_APPLICATION = "appconfig:CreateApplication";
	/** [Write] appconfig:CreateConfigurationProfile */
	static readonly CREATE_CONFIGURATION_PROFILE =
		"appconfig:CreateConfigurationProfile";
	/** [Write] appconfig:CreateDeploymentStrategy */
	static readonly CREATE_DEPLOYMENT_STRATEGY =
		"appconfig:CreateDeploymentStrategy";
	/** [Write] appconfig:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "appconfig:CreateEnvironment";
	/** [Write] appconfig:CreateExtension */
	static readonly CREATE_EXTENSION = "appconfig:CreateExtension";
	/** [Write] appconfig:CreateExtensionAssociation */
	static readonly CREATE_EXTENSION_ASSOCIATION =
		"appconfig:CreateExtensionAssociation";
	/** [Write] appconfig:CreateHostedConfigurationVersion */
	static readonly CREATE_HOSTED_CONFIGURATION_VERSION =
		"appconfig:CreateHostedConfigurationVersion";
	/** [Write] appconfig:DeleteApplication */
	static readonly DELETE_APPLICATION = "appconfig:DeleteApplication";
	/** [Write] appconfig:DeleteConfigurationProfile */
	static readonly DELETE_CONFIGURATION_PROFILE =
		"appconfig:DeleteConfigurationProfile";
	/** [Write] appconfig:DeleteDeploymentStrategy */
	static readonly DELETE_DEPLOYMENT_STRATEGY =
		"appconfig:DeleteDeploymentStrategy";
	/** [Write] appconfig:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "appconfig:DeleteEnvironment";
	/** [Write] appconfig:DeleteExtension */
	static readonly DELETE_EXTENSION = "appconfig:DeleteExtension";
	/** [Write] appconfig:DeleteExtensionAssociation */
	static readonly DELETE_EXTENSION_ASSOCIATION =
		"appconfig:DeleteExtensionAssociation";
	/** [Write] appconfig:DeleteHostedConfigurationVersion */
	static readonly DELETE_HOSTED_CONFIGURATION_VERSION =
		"appconfig:DeleteHostedConfigurationVersion";
	/** [Read] appconfig:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "appconfig:GetAccountSettings";
	/** [Read] appconfig:GetApplication */
	static readonly GET_APPLICATION = "appconfig:GetApplication";
	/** [Read] appconfig:GetConfiguration */
	static readonly GET_CONFIGURATION = "appconfig:GetConfiguration";
	/** [Read] appconfig:GetConfigurationProfile */
	static readonly GET_CONFIGURATION_PROFILE =
		"appconfig:GetConfigurationProfile";
	/** [Read] appconfig:GetDeployment */
	static readonly GET_DEPLOYMENT = "appconfig:GetDeployment";
	/** [Read] appconfig:GetDeploymentStrategy */
	static readonly GET_DEPLOYMENT_STRATEGY = "appconfig:GetDeploymentStrategy";
	/** [Read] appconfig:GetEnvironment */
	static readonly GET_ENVIRONMENT = "appconfig:GetEnvironment";
	/** [Read] appconfig:GetExtension */
	static readonly GET_EXTENSION = "appconfig:GetExtension";
	/** [Read] appconfig:GetExtensionAssociation */
	static readonly GET_EXTENSION_ASSOCIATION =
		"appconfig:GetExtensionAssociation";
	/** [Read] appconfig:GetHostedConfigurationVersion */
	static readonly GET_HOSTED_CONFIGURATION_VERSION =
		"appconfig:GetHostedConfigurationVersion";
	/** [Read] appconfig:GetLatestConfiguration */
	static readonly GET_LATEST_CONFIGURATION = "appconfig:GetLatestConfiguration";
	/** [List] appconfig:ListApplications */
	static readonly LIST_APPLICATIONS = "appconfig:ListApplications";
	/** [List] appconfig:ListConfigurationProfiles */
	static readonly LIST_CONFIGURATION_PROFILES =
		"appconfig:ListConfigurationProfiles";
	/** [List] appconfig:ListDeploymentStrategies */
	static readonly LIST_DEPLOYMENT_STRATEGIES =
		"appconfig:ListDeploymentStrategies";
	/** [List] appconfig:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "appconfig:ListDeployments";
	/** [List] appconfig:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "appconfig:ListEnvironments";
	/** [List] appconfig:ListExtensionAssociations */
	static readonly LIST_EXTENSION_ASSOCIATIONS =
		"appconfig:ListExtensionAssociations";
	/** [List] appconfig:ListExtensions */
	static readonly LIST_EXTENSIONS = "appconfig:ListExtensions";
	/** [List] appconfig:ListHostedConfigurationVersions */
	static readonly LIST_HOSTED_CONFIGURATION_VERSIONS =
		"appconfig:ListHostedConfigurationVersions";
	/** [Read] appconfig:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appconfig:ListTagsForResource";
	/** [Write] appconfig:StartConfigurationSession */
	static readonly START_CONFIGURATION_SESSION =
		"appconfig:StartConfigurationSession";
	/** [Write] appconfig:StartDeployment */
	static readonly START_DEPLOYMENT = "appconfig:StartDeployment";
	/** [Write] appconfig:StopDeployment */
	static readonly STOP_DEPLOYMENT = "appconfig:StopDeployment";
	/** [Tagging] appconfig:TagResource */
	static readonly TAG_RESOURCE = "appconfig:TagResource";
	/** [Tagging] appconfig:UntagResource */
	static readonly UNTAG_RESOURCE = "appconfig:UntagResource";
	/** [Write] appconfig:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "appconfig:UpdateAccountSettings";
	/** [Write] appconfig:UpdateApplication */
	static readonly UPDATE_APPLICATION = "appconfig:UpdateApplication";
	/** [Write] appconfig:UpdateConfigurationProfile */
	static readonly UPDATE_CONFIGURATION_PROFILE =
		"appconfig:UpdateConfigurationProfile";
	/** [Write] appconfig:UpdateDeploymentStrategy */
	static readonly UPDATE_DEPLOYMENT_STRATEGY =
		"appconfig:UpdateDeploymentStrategy";
	/** [Write] appconfig:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "appconfig:UpdateEnvironment";
	/** [Write] appconfig:UpdateExtension */
	static readonly UPDATE_EXTENSION = "appconfig:UpdateExtension";
	/** [Write] appconfig:UpdateExtensionAssociation */
	static readonly UPDATE_EXTENSION_ASSOCIATION =
		"appconfig:UpdateExtensionAssociation";
	/** [Write] appconfig:ValidateConfiguration */
	static readonly VALIDATE_CONFIGURATION = "appconfig:ValidateConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppconfigActions.GET_ACCOUNT_SETTINGS,
		AppconfigActions.GET_APPLICATION,
		AppconfigActions.GET_CONFIGURATION,
		AppconfigActions.GET_CONFIGURATION_PROFILE,
		AppconfigActions.GET_DEPLOYMENT,
		AppconfigActions.GET_DEPLOYMENT_STRATEGY,
		AppconfigActions.GET_ENVIRONMENT,
		AppconfigActions.GET_EXTENSION,
		AppconfigActions.GET_EXTENSION_ASSOCIATION,
		AppconfigActions.GET_HOSTED_CONFIGURATION_VERSION,
		AppconfigActions.GET_LATEST_CONFIGURATION,
		AppconfigActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppconfigActions.CREATE_APPLICATION,
		AppconfigActions.CREATE_CONFIGURATION_PROFILE,
		AppconfigActions.CREATE_DEPLOYMENT_STRATEGY,
		AppconfigActions.CREATE_ENVIRONMENT,
		AppconfigActions.CREATE_EXTENSION,
		AppconfigActions.CREATE_EXTENSION_ASSOCIATION,
		AppconfigActions.CREATE_HOSTED_CONFIGURATION_VERSION,
		AppconfigActions.DELETE_APPLICATION,
		AppconfigActions.DELETE_CONFIGURATION_PROFILE,
		AppconfigActions.DELETE_DEPLOYMENT_STRATEGY,
		AppconfigActions.DELETE_ENVIRONMENT,
		AppconfigActions.DELETE_EXTENSION,
		AppconfigActions.DELETE_EXTENSION_ASSOCIATION,
		AppconfigActions.DELETE_HOSTED_CONFIGURATION_VERSION,
		AppconfigActions.START_CONFIGURATION_SESSION,
		AppconfigActions.START_DEPLOYMENT,
		AppconfigActions.STOP_DEPLOYMENT,
		AppconfigActions.UPDATE_ACCOUNT_SETTINGS,
		AppconfigActions.UPDATE_APPLICATION,
		AppconfigActions.UPDATE_CONFIGURATION_PROFILE,
		AppconfigActions.UPDATE_DEPLOYMENT_STRATEGY,
		AppconfigActions.UPDATE_ENVIRONMENT,
		AppconfigActions.UPDATE_EXTENSION,
		AppconfigActions.UPDATE_EXTENSION_ASSOCIATION,
		AppconfigActions.VALIDATE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppconfigActions.LIST_APPLICATIONS,
		AppconfigActions.LIST_CONFIGURATION_PROFILES,
		AppconfigActions.LIST_DEPLOYMENT_STRATEGIES,
		AppconfigActions.LIST_DEPLOYMENTS,
		AppconfigActions.LIST_ENVIRONMENTS,
		AppconfigActions.LIST_EXTENSION_ASSOCIATIONS,
		AppconfigActions.LIST_EXTENSIONS,
		AppconfigActions.LIST_HOSTED_CONFIGURATION_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppconfigActions.TAG_RESOURCE,
		AppconfigActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const ConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/environment/(?<environmentId>[^:/?]+)/configuration/(?<configurationProfileId>[^:/?]+)$",
);
const ConfigurationprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/configurationprofile/(?<configurationProfileId>[^:/?]+)$",
);
const DeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/environment/(?<environmentId>[^:/?]+)/deployment/(?<deploymentNumber>[^:/?]+)$",
);
const DeploymentstrategyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):deploymentstrategy/(?<deploymentStrategyId>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/environment/(?<environmentId>[^:/?]+)$",
);
const ExtensionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):extension/(?<extensionId>[^:/?]+)/(?<extensionVersionNumber>[^:/?]+)$",
);
const ExtensionassociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):extensionassociation/(?<extensionAssociationId>[^:/?]+)$",
);
const HostedconfigurationversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/configurationprofile/(?<configurationProfileId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appconfig resources.
 */
export class AppconfigResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
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
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The ConfigurationProfileId component of the ARN. */
		readonly configurationProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/environment/${props.environmentId}/configuration/${props.configurationProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration resource.
	 */
	static isValidConfigurationArn(arn: string): boolean {
		return ConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		environmentId: string;
		configurationProfileId: string;
	} {
		const match = ConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			environmentId: match.groups!.environmentId,
			configurationProfileId: match.groups!.configurationProfileId,
		};
	}

	/**
	 * Builds an ARN for the configurationprofile resource.
	 */
	static configurationprofile(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The ConfigurationProfileId component of the ARN. */
		readonly configurationProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/configurationprofile/${props.configurationProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configurationprofile resource.
	 */
	static isValidConfigurationprofileArn(arn: string): boolean {
		return ConfigurationprofileArnRegex.test(arn);
	}

	/**
	 * Parses a configurationprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		configurationProfileId: string;
	} {
		const match = ConfigurationprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configurationprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			configurationProfileId: match.groups!.configurationProfileId,
		};
	}

	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The DeploymentNumber component of the ARN. */
		readonly deploymentNumber: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/environment/${props.environmentId}/deployment/${props.deploymentNumber}`;
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
		applicationId: string;
		environmentId: string;
		deploymentNumber: string;
	} {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			environmentId: match.groups!.environmentId,
			deploymentNumber: match.groups!.deploymentNumber,
		};
	}

	/**
	 * Builds an ARN for the deploymentstrategy resource.
	 */
	static deploymentstrategy(props: {
		/** The DeploymentStrategyId component of the ARN. */
		readonly deploymentStrategyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:deploymentstrategy/${props.deploymentStrategyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deploymentstrategy resource.
	 */
	static isValidDeploymentstrategyArn(arn: string): boolean {
		return DeploymentstrategyArnRegex.test(arn);
	}

	/**
	 * Parses a deploymentstrategy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentstrategyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deploymentStrategyId: string;
	} {
		const match = DeploymentstrategyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deploymentstrategy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentStrategyId: match.groups!.deploymentStrategyId,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/environment/${props.environmentId}`;
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
		applicationId: string;
		environmentId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the extension resource.
	 */
	static extension(props: {
		/** The ExtensionId component of the ARN. */
		readonly extensionId: string;
		/** The ExtensionVersionNumber component of the ARN. */
		readonly extensionVersionNumber: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:extension/${props.extensionId}/${props.extensionVersionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the extension resource.
	 */
	static isValidExtensionArn(arn: string): boolean {
		return ExtensionArnRegex.test(arn);
	}

	/**
	 * Parses a extension ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExtensionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		extensionId: string;
		extensionVersionNumber: string;
	} {
		const match = ExtensionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid extension ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			extensionId: match.groups!.extensionId,
			extensionVersionNumber: match.groups!.extensionVersionNumber,
		};
	}

	/**
	 * Builds an ARN for the extensionassociation resource.
	 */
	static extensionassociation(props: {
		/** The ExtensionAssociationId component of the ARN. */
		readonly extensionAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:extensionassociation/${props.extensionAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the extensionassociation resource.
	 */
	static isValidExtensionassociationArn(arn: string): boolean {
		return ExtensionassociationArnRegex.test(arn);
	}

	/**
	 * Parses a extensionassociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExtensionassociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		extensionAssociationId: string;
	} {
		const match = ExtensionassociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid extensionassociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			extensionAssociationId: match.groups!.extensionAssociationId,
		};
	}

	/**
	 * Builds an ARN for the hostedconfigurationversion resource.
	 */
	static hostedconfigurationversion(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The ConfigurationProfileId component of the ARN. */
		readonly configurationProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/configurationprofile/${props.configurationProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hostedconfigurationversion resource.
	 */
	static isValidHostedconfigurationversionArn(arn: string): boolean {
		return HostedconfigurationversionArnRegex.test(arn);
	}

	/**
	 * Parses a hostedconfigurationversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHostedconfigurationversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		configurationProfileId: string;
	} {
		const match = HostedconfigurationversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hostedconfigurationversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			configurationProfileId: match.groups!.configurationProfileId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for appconfig.
 */
export class AppconfigOperations {
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"appconfig:CreateApplication",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateConfigurationProfile API call. */
	static readonly CREATE_CONFIGURATION_PROFILE: string[] = [
		"appconfig:CreateConfigurationProfile",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateDeploymentStrategy API call. */
	static readonly CREATE_DEPLOYMENT_STRATEGY: string[] = [
		"appconfig:CreateDeploymentStrategy",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"appconfig:CreateEnvironment",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExperimentDefinition API call. */
	static readonly CREATE_EXPERIMENT_DEFINITION: string[] = [
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExtension API call. */
	static readonly CREATE_EXTENSION: string[] = [
		"appconfig:CreateExtension",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExtensionAssociation API call. */
	static readonly CREATE_EXTENSION_ASSOCIATION: string[] = [
		"appconfig:CreateExtensionAssociation",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateHostedConfigurationVersion API call. */
	static readonly CREATE_HOSTED_CONFIGURATION_VERSION: string[] = [
		"appconfig:CreateHostedConfigurationVersion",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"appconfig:DeleteApplication",
	];
	/** IAM actions required for the DeleteConfigurationProfile API call. */
	static readonly DELETE_CONFIGURATION_PROFILE: string[] = [
		"appconfig:DeleteConfigurationProfile",
	];
	/** IAM actions required for the DeleteDeploymentStrategy API call. */
	static readonly DELETE_DEPLOYMENT_STRATEGY: string[] = [
		"appconfig:DeleteDeploymentStrategy",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = [
		"appconfig:DeleteEnvironment",
	];
	/** IAM actions required for the DeleteExperimentDefinition API call. */
	static readonly DELETE_EXPERIMENT_DEFINITION: string[] = [];
	/** IAM actions required for the DeleteExtension API call. */
	static readonly DELETE_EXTENSION: string[] = ["appconfig:DeleteExtension"];
	/** IAM actions required for the DeleteExtensionAssociation API call. */
	static readonly DELETE_EXTENSION_ASSOCIATION: string[] = [
		"appconfig:DeleteExtensionAssociation",
	];
	/** IAM actions required for the DeleteHostedConfigurationVersion API call. */
	static readonly DELETE_HOSTED_CONFIGURATION_VERSION: string[] = [
		"appconfig:DeleteHostedConfigurationVersion",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"appconfig:GetAccountSettings",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["appconfig:GetApplication"];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly GET_CONFIGURATION: string[] = ["appconfig:GetConfiguration"];
	/** IAM actions required for the GetConfigurationProfile API call. */
	static readonly GET_CONFIGURATION_PROFILE: string[] = [
		"appconfig:GetConfigurationProfile",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["appconfig:GetDeployment"];
	/** IAM actions required for the GetDeploymentStrategy API call. */
	static readonly GET_DEPLOYMENT_STRATEGY: string[] = [
		"appconfig:GetDeploymentStrategy",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["appconfig:GetEnvironment"];
	/** IAM actions required for the GetExperimentDefinition API call. */
	static readonly GET_EXPERIMENT_DEFINITION: string[] = [];
	/** IAM actions required for the GetExperimentRun API call. */
	static readonly GET_EXPERIMENT_RUN: string[] = [];
	/** IAM actions required for the GetExtension API call. */
	static readonly GET_EXTENSION: string[] = ["appconfig:GetExtension"];
	/** IAM actions required for the GetExtensionAssociation API call. */
	static readonly GET_EXTENSION_ASSOCIATION: string[] = [
		"appconfig:GetExtensionAssociation",
	];
	/** IAM actions required for the GetHostedConfigurationVersion API call. */
	static readonly GET_HOSTED_CONFIGURATION_VERSION: string[] = [
		"appconfig:GetHostedConfigurationVersion",
	];
	/** IAM actions required for the GetLatestConfiguration API call. */
	static readonly GET_LATEST_CONFIGURATION: string[] = [
		"appconfig:GetLatestConfiguration",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["appconfig:ListApplications"];
	/** IAM actions required for the ListConfigurationProfiles API call. */
	static readonly LIST_CONFIGURATION_PROFILES: string[] = [
		"appconfig:ListConfigurationProfiles",
	];
	/** IAM actions required for the ListDeploymentStrategies API call. */
	static readonly LIST_DEPLOYMENT_STRATEGIES: string[] = [
		"appconfig:ListDeploymentStrategies",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["appconfig:ListDeployments"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["appconfig:ListEnvironments"];
	/** IAM actions required for the ListExperimentDefinitions API call. */
	static readonly LIST_EXPERIMENT_DEFINITIONS: string[] = [];
	/** IAM actions required for the ListExperimentRunEvents API call. */
	static readonly LIST_EXPERIMENT_RUN_EVENTS: string[] = [];
	/** IAM actions required for the ListExperimentRuns API call. */
	static readonly LIST_EXPERIMENT_RUNS: string[] = [];
	/** IAM actions required for the ListExtensionAssociations API call. */
	static readonly LIST_EXTENSION_ASSOCIATIONS: string[] = [
		"appconfig:ListExtensionAssociations",
	];
	/** IAM actions required for the ListExtensions API call. */
	static readonly LIST_EXTENSIONS: string[] = ["appconfig:ListExtensions"];
	/** IAM actions required for the ListHostedConfigurationVersions API call. */
	static readonly LIST_HOSTED_CONFIGURATION_VERSIONS: string[] = [
		"appconfig:ListHostedConfigurationVersions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appconfig:ListTagsForResource",
	];
	/** IAM actions required for the StartConfigurationSession API call. */
	static readonly START_CONFIGURATION_SESSION: string[] = [
		"appconfig:StartConfigurationSession",
	];
	/** IAM actions required for the StartDeployment API call. */
	static readonly START_DEPLOYMENT: string[] = [
		"appconfig:StartDeployment",
		"appconfig:TagResource",
	];
	/** IAM actions required for the StartExperimentRun API call. */
	static readonly START_EXPERIMENT_RUN: string[] = ["appconfig:TagResource"];
	/** IAM actions required for the StopDeployment API call. */
	static readonly STOP_DEPLOYMENT: string[] = ["appconfig:StopDeployment"];
	/** IAM actions required for the StopExperimentRun API call. */
	static readonly STOP_EXPERIMENT_RUN: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appconfig:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appconfig:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"appconfig:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"appconfig:UpdateApplication",
	];
	/** IAM actions required for the UpdateConfigurationProfile API call. */
	static readonly UPDATE_CONFIGURATION_PROFILE: string[] = [
		"iam:PassRole",
		"appconfig:UpdateConfigurationProfile",
	];
	/** IAM actions required for the UpdateDeploymentStrategy API call. */
	static readonly UPDATE_DEPLOYMENT_STRATEGY: string[] = [
		"appconfig:UpdateDeploymentStrategy",
	];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = [
		"iam:PassRole",
		"appconfig:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateExperimentDefinition API call. */
	static readonly UPDATE_EXPERIMENT_DEFINITION: string[] = [];
	/** IAM actions required for the UpdateExperimentRun API call. */
	static readonly UPDATE_EXPERIMENT_RUN: string[] = [];
	/** IAM actions required for the UpdateExtension API call. */
	static readonly UPDATE_EXTENSION: string[] = [
		"iam:PassRole",
		"appconfig:UpdateExtension",
	];
	/** IAM actions required for the UpdateExtensionAssociation API call. */
	static readonly UPDATE_EXTENSION_ASSOCIATION: string[] = [
		"appconfig:UpdateExtensionAssociation",
	];
	/** IAM actions required for the ValidateConfiguration API call. */
	static readonly VALIDATE_CONFIGURATION: string[] = [
		"appconfig:ValidateConfiguration",
	];
}

/**
 * Condition key constants and builders for appconfig.
 */
export class AppconfigConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationProfile action. */
	static readonly CREATE_CONFIGURATION_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeploymentStrategy action. */
	static readonly CREATE_DEPLOYMENT_STRATEGY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtension action. */
	static readonly CREATE_EXTENSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtensionAssociation action. */
	static readonly CREATE_EXTENSION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly GET_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConfiguration action. */
	static readonly GET_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConfigurationProfile action. */
	static readonly GET_CONFIGURATION_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeployment action. */
	static readonly GET_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeploymentStrategy action. */
	static readonly GET_DEPLOYMENT_STRATEGY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly GET_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExtension action. */
	static readonly GET_EXTENSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExtensionAssociation action. */
	static readonly GET_EXTENSION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLatestConfiguration action. */
	static readonly GET_LATEST_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartConfigurationSession action. */
	static readonly START_CONFIGURATION_SESSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartDeployment action. */
	static readonly START_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UPDATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateConfigurationProfile action. */
	static readonly UPDATE_CONFIGURATION_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDeploymentStrategy action. */
	static readonly UPDATE_DEPLOYMENT_STRATEGY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UPDATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExtension action. */
	static readonly UPDATE_EXTENSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExtensionAssociation action. */
	static readonly UPDATE_EXTENSION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
