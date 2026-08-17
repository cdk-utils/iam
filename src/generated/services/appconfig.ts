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
	static readonly CreateApplication = "appconfig:CreateApplication";
	/** [Write] appconfig:CreateConfigurationProfile */
	static readonly CreateConfigurationProfile =
		"appconfig:CreateConfigurationProfile";
	/** [Write] appconfig:CreateDeploymentStrategy */
	static readonly CreateDeploymentStrategy =
		"appconfig:CreateDeploymentStrategy";
	/** [Write] appconfig:CreateEnvironment */
	static readonly CreateEnvironment = "appconfig:CreateEnvironment";
	/** [Write] appconfig:CreateExperimentDefinition */
	static readonly CreateExperimentDefinition =
		"appconfig:CreateExperimentDefinition";
	/** [Write] appconfig:CreateExtension */
	static readonly CreateExtension = "appconfig:CreateExtension";
	/** [Write] appconfig:CreateExtensionAssociation */
	static readonly CreateExtensionAssociation =
		"appconfig:CreateExtensionAssociation";
	/** [Write] appconfig:CreateHostedConfigurationVersion */
	static readonly CreateHostedConfigurationVersion =
		"appconfig:CreateHostedConfigurationVersion";
	/** [Write] appconfig:DeleteApplication */
	static readonly DeleteApplication = "appconfig:DeleteApplication";
	/** [Write] appconfig:DeleteConfigurationProfile */
	static readonly DeleteConfigurationProfile =
		"appconfig:DeleteConfigurationProfile";
	/** [Write] appconfig:DeleteDeploymentStrategy */
	static readonly DeleteDeploymentStrategy =
		"appconfig:DeleteDeploymentStrategy";
	/** [Write] appconfig:DeleteEnvironment */
	static readonly DeleteEnvironment = "appconfig:DeleteEnvironment";
	/** [Write] appconfig:DeleteExperimentDefinition */
	static readonly DeleteExperimentDefinition =
		"appconfig:DeleteExperimentDefinition";
	/** [Write] appconfig:DeleteExtension */
	static readonly DeleteExtension = "appconfig:DeleteExtension";
	/** [Write] appconfig:DeleteExtensionAssociation */
	static readonly DeleteExtensionAssociation =
		"appconfig:DeleteExtensionAssociation";
	/** [Write] appconfig:DeleteHostedConfigurationVersion */
	static readonly DeleteHostedConfigurationVersion =
		"appconfig:DeleteHostedConfigurationVersion";
	/** [Read] appconfig:GetAccountSettings */
	static readonly actionGetAccountSettings = "appconfig:GetAccountSettings";
	/** [Read] appconfig:GetApplication */
	static readonly actionGetApplication = "appconfig:GetApplication";
	/** [Read] appconfig:GetConfiguration */
	static readonly actionGetConfiguration = "appconfig:GetConfiguration";
	/** [Read] appconfig:GetConfigurationProfile */
	static readonly actionGetConfigurationProfile =
		"appconfig:GetConfigurationProfile";
	/** [Read] appconfig:GetDeployment */
	static readonly actionGetDeployment = "appconfig:GetDeployment";
	/** [Read] appconfig:GetDeploymentStrategy */
	static readonly actionGetDeploymentStrategy =
		"appconfig:GetDeploymentStrategy";
	/** [Read] appconfig:GetEnvironment */
	static readonly actionGetEnvironment = "appconfig:GetEnvironment";
	/** [Read] appconfig:GetExperimentDefinition */
	static readonly actionGetExperimentDefinition =
		"appconfig:GetExperimentDefinition";
	/** [Read] appconfig:GetExperimentRun */
	static readonly actionGetExperimentRun = "appconfig:GetExperimentRun";
	/** [Read] appconfig:GetExtension */
	static readonly actionGetExtension = "appconfig:GetExtension";
	/** [Read] appconfig:GetExtensionAssociation */
	static readonly actionGetExtensionAssociation =
		"appconfig:GetExtensionAssociation";
	/** [Read] appconfig:GetHostedConfigurationVersion */
	static readonly actionGetHostedConfigurationVersion =
		"appconfig:GetHostedConfigurationVersion";
	/** [Read] appconfig:GetLatestConfiguration */
	static readonly actionGetLatestConfiguration =
		"appconfig:GetLatestConfiguration";
	/** [List] appconfig:ListApplications */
	static readonly ListApplications = "appconfig:ListApplications";
	/** [List] appconfig:ListConfigurationProfiles */
	static readonly ListConfigurationProfiles =
		"appconfig:ListConfigurationProfiles";
	/** [List] appconfig:ListDeploymentStrategies */
	static readonly ListDeploymentStrategies =
		"appconfig:ListDeploymentStrategies";
	/** [List] appconfig:ListDeployments */
	static readonly ListDeployments = "appconfig:ListDeployments";
	/** [List] appconfig:ListEnvironments */
	static readonly ListEnvironments = "appconfig:ListEnvironments";
	/** [List] appconfig:ListExperimentDefinitions */
	static readonly ListExperimentDefinitions =
		"appconfig:ListExperimentDefinitions";
	/** [List] appconfig:ListExperimentRunEvents */
	static readonly ListExperimentRunEvents = "appconfig:ListExperimentRunEvents";
	/** [List] appconfig:ListExperimentRuns */
	static readonly ListExperimentRuns = "appconfig:ListExperimentRuns";
	/** [List] appconfig:ListExtensionAssociations */
	static readonly ListExtensionAssociations =
		"appconfig:ListExtensionAssociations";
	/** [List] appconfig:ListExtensions */
	static readonly ListExtensions = "appconfig:ListExtensions";
	/** [List] appconfig:ListHostedConfigurationVersions */
	static readonly ListHostedConfigurationVersions =
		"appconfig:ListHostedConfigurationVersions";
	/** [Read] appconfig:ListTagsForResource */
	static readonly ListTagsForResource = "appconfig:ListTagsForResource";
	/** [Write] appconfig:StartConfigurationSession */
	static readonly StartConfigurationSession =
		"appconfig:StartConfigurationSession";
	/** [Write] appconfig:StartDeployment */
	static readonly StartDeployment = "appconfig:StartDeployment";
	/** [Write] appconfig:StartExperimentRun */
	static readonly StartExperimentRun = "appconfig:StartExperimentRun";
	/** [Write] appconfig:StopDeployment */
	static readonly StopDeployment = "appconfig:StopDeployment";
	/** [Write] appconfig:StopExperimentRun */
	static readonly StopExperimentRun = "appconfig:StopExperimentRun";
	/** [Tagging] appconfig:TagResource */
	static readonly TagResource = "appconfig:TagResource";
	/** [Tagging] appconfig:UntagResource */
	static readonly UntagResource = "appconfig:UntagResource";
	/** [Write] appconfig:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "appconfig:UpdateAccountSettings";
	/** [Write] appconfig:UpdateApplication */
	static readonly UpdateApplication = "appconfig:UpdateApplication";
	/** [Write] appconfig:UpdateConfigurationProfile */
	static readonly UpdateConfigurationProfile =
		"appconfig:UpdateConfigurationProfile";
	/** [Write] appconfig:UpdateDeploymentStrategy */
	static readonly UpdateDeploymentStrategy =
		"appconfig:UpdateDeploymentStrategy";
	/** [Write] appconfig:UpdateEnvironment */
	static readonly UpdateEnvironment = "appconfig:UpdateEnvironment";
	/** [Write] appconfig:UpdateExperimentDefinition */
	static readonly UpdateExperimentDefinition =
		"appconfig:UpdateExperimentDefinition";
	/** [Write] appconfig:UpdateExperimentRun */
	static readonly UpdateExperimentRun = "appconfig:UpdateExperimentRun";
	/** [Write] appconfig:UpdateExtension */
	static readonly UpdateExtension = "appconfig:UpdateExtension";
	/** [Write] appconfig:UpdateExtensionAssociation */
	static readonly UpdateExtensionAssociation =
		"appconfig:UpdateExtensionAssociation";
	/** [Write] appconfig:ValidateConfiguration */
	static readonly ValidateConfiguration = "appconfig:ValidateConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppconfigActions.actionGetAccountSettings,
		AppconfigActions.actionGetApplication,
		AppconfigActions.actionGetConfiguration,
		AppconfigActions.actionGetConfigurationProfile,
		AppconfigActions.actionGetDeployment,
		AppconfigActions.actionGetDeploymentStrategy,
		AppconfigActions.actionGetEnvironment,
		AppconfigActions.actionGetExperimentDefinition,
		AppconfigActions.actionGetExperimentRun,
		AppconfigActions.actionGetExtension,
		AppconfigActions.actionGetExtensionAssociation,
		AppconfigActions.actionGetHostedConfigurationVersion,
		AppconfigActions.actionGetLatestConfiguration,
		AppconfigActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppconfigActions.CreateApplication,
		AppconfigActions.CreateConfigurationProfile,
		AppconfigActions.CreateDeploymentStrategy,
		AppconfigActions.CreateEnvironment,
		AppconfigActions.CreateExperimentDefinition,
		AppconfigActions.CreateExtension,
		AppconfigActions.CreateExtensionAssociation,
		AppconfigActions.CreateHostedConfigurationVersion,
		AppconfigActions.DeleteApplication,
		AppconfigActions.DeleteConfigurationProfile,
		AppconfigActions.DeleteDeploymentStrategy,
		AppconfigActions.DeleteEnvironment,
		AppconfigActions.DeleteExperimentDefinition,
		AppconfigActions.DeleteExtension,
		AppconfigActions.DeleteExtensionAssociation,
		AppconfigActions.DeleteHostedConfigurationVersion,
		AppconfigActions.StartConfigurationSession,
		AppconfigActions.StartDeployment,
		AppconfigActions.StartExperimentRun,
		AppconfigActions.StopDeployment,
		AppconfigActions.StopExperimentRun,
		AppconfigActions.UpdateAccountSettings,
		AppconfigActions.UpdateApplication,
		AppconfigActions.UpdateConfigurationProfile,
		AppconfigActions.UpdateDeploymentStrategy,
		AppconfigActions.UpdateEnvironment,
		AppconfigActions.UpdateExperimentDefinition,
		AppconfigActions.UpdateExperimentRun,
		AppconfigActions.UpdateExtension,
		AppconfigActions.UpdateExtensionAssociation,
		AppconfigActions.ValidateConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppconfigActions.ListApplications,
		AppconfigActions.ListConfigurationProfiles,
		AppconfigActions.ListDeploymentStrategies,
		AppconfigActions.ListDeployments,
		AppconfigActions.ListEnvironments,
		AppconfigActions.ListExperimentDefinitions,
		AppconfigActions.ListExperimentRunEvents,
		AppconfigActions.ListExperimentRuns,
		AppconfigActions.ListExtensionAssociations,
		AppconfigActions.ListExtensions,
		AppconfigActions.ListHostedConfigurationVersions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppconfigActions.TagResource,
		AppconfigActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface AppconfigApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
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
export interface AppconfigApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a configuration ARN.
 */
export interface AppconfigConfigurationArnProps {
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
}

/**
 * Parsed components of a configuration ARN.
 */
export interface AppconfigConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The ConfigurationProfileId component. */
	readonly configurationProfileId: string;
}

/**
 * Properties for building a configurationprofile ARN.
 */
export interface AppconfigConfigurationprofileArnProps {
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
}

/**
 * Parsed components of a configurationprofile ARN.
 */
export interface AppconfigConfigurationprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ConfigurationProfileId component. */
	readonly configurationProfileId: string;
}

/**
 * Properties for building a deployment ARN.
 */
export interface AppconfigDeploymentArnProps {
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
}

/**
 * Parsed components of a deployment ARN.
 */
export interface AppconfigDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The DeploymentNumber component. */
	readonly deploymentNumber: string;
}

/**
 * Properties for building a deploymentstrategy ARN.
 */
export interface AppconfigDeploymentstrategyArnProps {
	/** The DeploymentStrategyId component of the ARN. */
	readonly deploymentStrategyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deploymentstrategy ARN.
 */
export interface AppconfigDeploymentstrategyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentStrategyId component. */
	readonly deploymentStrategyId: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface AppconfigEnvironmentArnProps {
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
}

/**
 * Parsed components of a environment ARN.
 */
export interface AppconfigEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a experimentdefinition ARN.
 */
export interface AppconfigExperimentdefinitionArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The ExperimentDefinitionId component of the ARN. */
	readonly experimentDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experimentdefinition ARN.
 */
export interface AppconfigExperimentdefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ExperimentDefinitionId component. */
	readonly experimentDefinitionId: string;
}

/**
 * Properties for building a experimentrun ARN.
 */
export interface AppconfigExperimentrunArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The ExperimentDefinitionId component of the ARN. */
	readonly experimentDefinitionId: string;
	/** The ExperimentRunNumber component of the ARN. */
	readonly experimentRunNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experimentrun ARN.
 */
export interface AppconfigExperimentrunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ExperimentDefinitionId component. */
	readonly experimentDefinitionId: string;
	/** The ExperimentRunNumber component. */
	readonly experimentRunNumber: string;
}

/**
 * Properties for building a extension ARN.
 */
export interface AppconfigExtensionArnProps {
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
}

/**
 * Parsed components of a extension ARN.
 */
export interface AppconfigExtensionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExtensionId component. */
	readonly extensionId: string;
	/** The ExtensionVersionNumber component. */
	readonly extensionVersionNumber: string;
}

/**
 * Properties for building a extensionassociation ARN.
 */
export interface AppconfigExtensionassociationArnProps {
	/** The ExtensionAssociationId component of the ARN. */
	readonly extensionAssociationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a extensionassociation ARN.
 */
export interface AppconfigExtensionassociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExtensionAssociationId component. */
	readonly extensionAssociationId: string;
}

/**
 * Properties for building a hostedconfigurationversion ARN.
 */
export interface AppconfigHostedconfigurationversionArnProps {
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
}

/**
 * Parsed components of a hostedconfigurationversion ARN.
 */
export interface AppconfigHostedconfigurationversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ConfigurationProfileId component. */
	readonly configurationProfileId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const ConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/environment\/(?<environmentId>[^:/?]+)\/configuration\/(?<configurationProfileId>[^:/?]+)$/;
const ConfigurationprofileArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/configurationprofile\/(?<configurationProfileId>[^:/?]+)$/;
const DeploymentArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/environment\/(?<environmentId>[^:/?]+)\/deployment\/(?<deploymentNumber>[^:/?]+)$/;
const DeploymentstrategyArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):deploymentstrategy\/(?<deploymentStrategyId>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/environment\/(?<environmentId>[^:/?]+)$/;
const ExperimentdefinitionArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/experimentdefinition\/(?<experimentDefinitionId>[^:/?]+)$/;
const ExperimentrunArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/experimentdefinition\/(?<experimentDefinitionId>[^:/?]+)\/experimentrun\/(?<experimentRunNumber>[^:/?]+)$/;
const ExtensionArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):extension\/(?<extensionId>[^:/?]+)\/(?<extensionVersionNumber>[^:/?]+)$/;
const ExtensionassociationArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):extensionassociation\/(?<extensionAssociationId>[^:/?]+)$/;
const HostedconfigurationversionArnRegex =
	/^arn:(?<partition>[^:]+):appconfig:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/configurationprofile\/(?<configurationProfileId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appconfig resources.
 */
export class AppconfigResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: AppconfigApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): AppconfigApplicationArnComponents {
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
	static configuration(props: AppconfigConfigurationArnProps): string {
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
	static parseConfigurationArn(
		arn: string,
	): AppconfigConfigurationArnComponents {
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
	static configurationprofile(
		props: AppconfigConfigurationprofileArnProps,
	): string {
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
	static parseConfigurationprofileArn(
		arn: string,
	): AppconfigConfigurationprofileArnComponents {
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
	static deployment(props: AppconfigDeploymentArnProps): string {
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
	static parseDeploymentArn(arn: string): AppconfigDeploymentArnComponents {
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
	static deploymentstrategy(
		props: AppconfigDeploymentstrategyArnProps,
	): string {
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
	static parseDeploymentstrategyArn(
		arn: string,
	): AppconfigDeploymentstrategyArnComponents {
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
	static environment(props: AppconfigEnvironmentArnProps): string {
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
	static parseEnvironmentArn(arn: string): AppconfigEnvironmentArnComponents {
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
	 * Builds an ARN for the experimentdefinition resource.
	 */
	static experimentdefinition(
		props: AppconfigExperimentdefinitionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/experimentdefinition/${props.experimentDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experimentdefinition resource.
	 */
	static isValidExperimentdefinitionArn(arn: string): boolean {
		return ExperimentdefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a experimentdefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentdefinitionArn(
		arn: string,
	): AppconfigExperimentdefinitionArnComponents {
		const match = ExperimentdefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experimentdefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			experimentDefinitionId: match.groups!.experimentDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the experimentrun resource.
	 */
	static experimentrun(props: AppconfigExperimentrunArnProps): string {
		return `arn:${props.partition ?? "aws"}:appconfig:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/experimentdefinition/${props.experimentDefinitionId}/experimentrun/${props.experimentRunNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experimentrun resource.
	 */
	static isValidExperimentrunArn(arn: string): boolean {
		return ExperimentrunArnRegex.test(arn);
	}

	/**
	 * Parses a experimentrun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentrunArn(
		arn: string,
	): AppconfigExperimentrunArnComponents {
		const match = ExperimentrunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experimentrun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			experimentDefinitionId: match.groups!.experimentDefinitionId,
			experimentRunNumber: match.groups!.experimentRunNumber,
		};
	}

	/**
	 * Builds an ARN for the extension resource.
	 */
	static extension(props: AppconfigExtensionArnProps): string {
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
	static parseExtensionArn(arn: string): AppconfigExtensionArnComponents {
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
	static extensionassociation(
		props: AppconfigExtensionassociationArnProps,
	): string {
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
	static parseExtensionassociationArn(
		arn: string,
	): AppconfigExtensionassociationArnComponents {
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
	static hostedconfigurationversion(
		props: AppconfigHostedconfigurationversionArnProps,
	): string {
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
	static parseHostedconfigurationversionArn(
		arn: string,
	): AppconfigHostedconfigurationversionArnComponents {
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
	static readonly CreateApplication: string[] = [
		"appconfig:CreateApplication",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateConfigurationProfile API call. */
	static readonly CreateConfigurationProfile: string[] = [
		"appconfig:CreateConfigurationProfile",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateDeploymentStrategy API call. */
	static readonly CreateDeploymentStrategy: string[] = [
		"appconfig:CreateDeploymentStrategy",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"appconfig:CreateEnvironment",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExperimentDefinition API call. */
	static readonly CreateExperimentDefinition: string[] = [
		"appconfig:CreateExperimentDefinition",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExtension API call. */
	static readonly CreateExtension: string[] = [
		"appconfig:CreateExtension",
		"iam:PassRole",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateExtensionAssociation API call. */
	static readonly CreateExtensionAssociation: string[] = [
		"appconfig:CreateExtensionAssociation",
		"appconfig:TagResource",
	];
	/** IAM actions required for the CreateHostedConfigurationVersion API call. */
	static readonly CreateHostedConfigurationVersion: string[] = [
		"appconfig:CreateHostedConfigurationVersion",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["appconfig:DeleteApplication"];
	/** IAM actions required for the DeleteConfigurationProfile API call. */
	static readonly DeleteConfigurationProfile: string[] = [
		"appconfig:DeleteConfigurationProfile",
	];
	/** IAM actions required for the DeleteDeploymentStrategy API call. */
	static readonly DeleteDeploymentStrategy: string[] = [
		"appconfig:DeleteDeploymentStrategy",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["appconfig:DeleteEnvironment"];
	/** IAM actions required for the DeleteExperimentDefinition API call. */
	static readonly DeleteExperimentDefinition: string[] = [
		"appconfig:DeleteExperimentDefinition",
	];
	/** IAM actions required for the DeleteExtension API call. */
	static readonly DeleteExtension: string[] = ["appconfig:DeleteExtension"];
	/** IAM actions required for the DeleteExtensionAssociation API call. */
	static readonly DeleteExtensionAssociation: string[] = [
		"appconfig:DeleteExtensionAssociation",
	];
	/** IAM actions required for the DeleteHostedConfigurationVersion API call. */
	static readonly DeleteHostedConfigurationVersion: string[] = [
		"appconfig:DeleteHostedConfigurationVersion",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"appconfig:GetAccountSettings",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["appconfig:GetApplication"];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly opGetConfiguration: string[] = ["appconfig:GetConfiguration"];
	/** IAM actions required for the GetConfigurationProfile API call. */
	static readonly opGetConfigurationProfile: string[] = [
		"appconfig:GetConfigurationProfile",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["appconfig:GetDeployment"];
	/** IAM actions required for the GetDeploymentStrategy API call. */
	static readonly opGetDeploymentStrategy: string[] = [
		"appconfig:GetDeploymentStrategy",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["appconfig:GetEnvironment"];
	/** IAM actions required for the GetExperimentDefinition API call. */
	static readonly opGetExperimentDefinition: string[] = [
		"appconfig:GetExperimentDefinition",
	];
	/** IAM actions required for the GetExperimentRun API call. */
	static readonly opGetExperimentRun: string[] = ["appconfig:GetExperimentRun"];
	/** IAM actions required for the GetExtension API call. */
	static readonly opGetExtension: string[] = ["appconfig:GetExtension"];
	/** IAM actions required for the GetExtensionAssociation API call. */
	static readonly opGetExtensionAssociation: string[] = [
		"appconfig:GetExtensionAssociation",
	];
	/** IAM actions required for the GetHostedConfigurationVersion API call. */
	static readonly opGetHostedConfigurationVersion: string[] = [
		"appconfig:GetHostedConfigurationVersion",
	];
	/** IAM actions required for the GetLatestConfiguration API call. */
	static readonly opGetLatestConfiguration: string[] = [
		"appconfig:GetLatestConfiguration",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["appconfig:ListApplications"];
	/** IAM actions required for the ListConfigurationProfiles API call. */
	static readonly ListConfigurationProfiles: string[] = [
		"appconfig:ListConfigurationProfiles",
	];
	/** IAM actions required for the ListDeploymentStrategies API call. */
	static readonly ListDeploymentStrategies: string[] = [
		"appconfig:ListDeploymentStrategies",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["appconfig:ListDeployments"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["appconfig:ListEnvironments"];
	/** IAM actions required for the ListExperimentDefinitions API call. */
	static readonly ListExperimentDefinitions: string[] = [
		"appconfig:ListExperimentDefinitions",
	];
	/** IAM actions required for the ListExperimentRunEvents API call. */
	static readonly ListExperimentRunEvents: string[] = [
		"appconfig:ListExperimentRunEvents",
	];
	/** IAM actions required for the ListExperimentRuns API call. */
	static readonly ListExperimentRuns: string[] = [
		"appconfig:ListExperimentRuns",
	];
	/** IAM actions required for the ListExtensionAssociations API call. */
	static readonly ListExtensionAssociations: string[] = [
		"appconfig:ListExtensionAssociations",
	];
	/** IAM actions required for the ListExtensions API call. */
	static readonly ListExtensions: string[] = ["appconfig:ListExtensions"];
	/** IAM actions required for the ListHostedConfigurationVersions API call. */
	static readonly ListHostedConfigurationVersions: string[] = [
		"appconfig:ListHostedConfigurationVersions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appconfig:ListTagsForResource",
	];
	/** IAM actions required for the StartConfigurationSession API call. */
	static readonly StartConfigurationSession: string[] = [
		"appconfig:StartConfigurationSession",
	];
	/** IAM actions required for the StartDeployment API call. */
	static readonly StartDeployment: string[] = [
		"appconfig:StartDeployment",
		"appconfig:TagResource",
	];
	/** IAM actions required for the StartExperimentRun API call. */
	static readonly StartExperimentRun: string[] = [
		"appconfig:StartExperimentRun",
		"appconfig:TagResource",
	];
	/** IAM actions required for the StopDeployment API call. */
	static readonly StopDeployment: string[] = ["appconfig:StopDeployment"];
	/** IAM actions required for the StopExperimentRun API call. */
	static readonly StopExperimentRun: string[] = ["appconfig:StopExperimentRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appconfig:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appconfig:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"appconfig:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = ["appconfig:UpdateApplication"];
	/** IAM actions required for the UpdateConfigurationProfile API call. */
	static readonly UpdateConfigurationProfile: string[] = [
		"iam:PassRole",
		"appconfig:UpdateConfigurationProfile",
	];
	/** IAM actions required for the UpdateDeploymentStrategy API call. */
	static readonly UpdateDeploymentStrategy: string[] = [
		"appconfig:UpdateDeploymentStrategy",
	];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [
		"iam:PassRole",
		"appconfig:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateExperimentDefinition API call. */
	static readonly UpdateExperimentDefinition: string[] = [
		"appconfig:UpdateExperimentDefinition",
	];
	/** IAM actions required for the UpdateExperimentRun API call. */
	static readonly UpdateExperimentRun: string[] = [
		"appconfig:UpdateExperimentRun",
	];
	/** IAM actions required for the UpdateExtension API call. */
	static readonly UpdateExtension: string[] = [
		"iam:PassRole",
		"appconfig:UpdateExtension",
	];
	/** IAM actions required for the UpdateExtensionAssociation API call. */
	static readonly UpdateExtensionAssociation: string[] = [
		"appconfig:UpdateExtensionAssociation",
	];
	/** IAM actions required for the ValidateConfiguration API call. */
	static readonly ValidateConfiguration: string[] = [
		"appconfig:ValidateConfiguration",
	];
}

/**
 * Condition key constants and builders for appconfig.
 */
export class AppconfigConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationProfile action. */
	static readonly CreateConfigurationProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeploymentStrategy action. */
	static readonly CreateDeploymentStrategyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExperimentDefinition action. */
	static readonly CreateExperimentDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtension action. */
	static readonly CreateExtensionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExtensionAssociation action. */
	static readonly CreateExtensionAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly actionGetApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConfiguration action. */
	static readonly actionGetConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConfigurationProfile action. */
	static readonly actionGetConfigurationProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeployment action. */
	static readonly actionGetDeploymentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeploymentStrategy action. */
	static readonly actionGetDeploymentStrategyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly actionGetEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperimentDefinition action. */
	static readonly actionGetExperimentDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperimentRun action. */
	static readonly actionGetExperimentRunConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExtension action. */
	static readonly actionGetExtensionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExtensionAssociation action. */
	static readonly actionGetExtensionAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLatestConfiguration action. */
	static readonly actionGetLatestConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartConfigurationSession action. */
	static readonly StartConfigurationSessionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartDeployment action. */
	static readonly StartDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartExperimentRun action. */
	static readonly StartExperimentRunConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopExperimentRun action. */
	static readonly StopExperimentRunConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UpdateApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateConfigurationProfile action. */
	static readonly UpdateConfigurationProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDeploymentStrategy action. */
	static readonly UpdateDeploymentStrategyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExperimentDefinition action. */
	static readonly UpdateExperimentDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExperimentRun action. */
	static readonly UpdateExperimentRunConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExtension action. */
	static readonly UpdateExtensionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateExtensionAssociation action. */
	static readonly UpdateExtensionAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
