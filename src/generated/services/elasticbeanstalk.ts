// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elasticbeanstalk.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elasticbeanstalk service.
 */
export class ElasticBeanstalkActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elasticbeanstalk";

	/** [Write] elasticbeanstalk:AbortEnvironmentUpdate */
	static readonly AbortEnvironmentUpdate =
		"elasticbeanstalk:AbortEnvironmentUpdate";
	/** [Tagging] elasticbeanstalk:AddTags */
	static readonly AddTags = "elasticbeanstalk:AddTags";
	/** [Write] elasticbeanstalk:ApplyEnvironmentManagedAction */
	static readonly ApplyEnvironmentManagedAction =
		"elasticbeanstalk:ApplyEnvironmentManagedAction";
	/** [Write] elasticbeanstalk:AssociateEnvironmentOperationsRole */
	static readonly AssociateEnvironmentOperationsRole =
		"elasticbeanstalk:AssociateEnvironmentOperationsRole";
	/** [Read] elasticbeanstalk:CheckDNSAvailability */
	static readonly CheckDNSAvailability =
		"elasticbeanstalk:CheckDNSAvailability";
	/** [Write] elasticbeanstalk:ComposeEnvironments */
	static readonly ComposeEnvironments = "elasticbeanstalk:ComposeEnvironments";
	/** [Write] elasticbeanstalk:CreateApplication */
	static readonly CreateApplication = "elasticbeanstalk:CreateApplication";
	/** [Write] elasticbeanstalk:CreateApplicationVersion */
	static readonly CreateApplicationVersion =
		"elasticbeanstalk:CreateApplicationVersion";
	/** [Write] elasticbeanstalk:CreateConfigurationTemplate */
	static readonly CreateConfigurationTemplate =
		"elasticbeanstalk:CreateConfigurationTemplate";
	/** [Write] elasticbeanstalk:CreateEnvironment */
	static readonly CreateEnvironment = "elasticbeanstalk:CreateEnvironment";
	/** [Write] elasticbeanstalk:CreatePlatformVersion */
	static readonly CreatePlatformVersion =
		"elasticbeanstalk:CreatePlatformVersion";
	/** [Write] elasticbeanstalk:CreateStorageLocation */
	static readonly CreateStorageLocation =
		"elasticbeanstalk:CreateStorageLocation";
	/** [Write] elasticbeanstalk:DeleteApplication */
	static readonly DeleteApplication = "elasticbeanstalk:DeleteApplication";
	/** [Write] elasticbeanstalk:DeleteApplicationVersion */
	static readonly DeleteApplicationVersion =
		"elasticbeanstalk:DeleteApplicationVersion";
	/** [Write] elasticbeanstalk:DeleteConfigurationTemplate */
	static readonly DeleteConfigurationTemplate =
		"elasticbeanstalk:DeleteConfigurationTemplate";
	/** [Write] elasticbeanstalk:DeleteEnvironmentConfiguration */
	static readonly DeleteEnvironmentConfiguration =
		"elasticbeanstalk:DeleteEnvironmentConfiguration";
	/** [Write] elasticbeanstalk:DeletePlatformVersion */
	static readonly DeletePlatformVersion =
		"elasticbeanstalk:DeletePlatformVersion";
	/** [Read] elasticbeanstalk:DescribeAccountAttributes */
	static readonly DescribeAccountAttributes =
		"elasticbeanstalk:DescribeAccountAttributes";
	/** [List] elasticbeanstalk:DescribeApplicationVersions */
	static readonly DescribeApplicationVersions =
		"elasticbeanstalk:DescribeApplicationVersions";
	/** [List] elasticbeanstalk:DescribeApplications */
	static readonly DescribeApplications =
		"elasticbeanstalk:DescribeApplications";
	/** [Read] elasticbeanstalk:DescribeConfigurationOptions */
	static readonly DescribeConfigurationOptions =
		"elasticbeanstalk:DescribeConfigurationOptions";
	/** [Read] elasticbeanstalk:DescribeConfigurationSettings */
	static readonly DescribeConfigurationSettings =
		"elasticbeanstalk:DescribeConfigurationSettings";
	/** [Read] elasticbeanstalk:DescribeEnvironmentHealth */
	static readonly DescribeEnvironmentHealth =
		"elasticbeanstalk:DescribeEnvironmentHealth";
	/** [Read] elasticbeanstalk:DescribeEnvironmentManagedActionHistory */
	static readonly DescribeEnvironmentManagedActionHistory =
		"elasticbeanstalk:DescribeEnvironmentManagedActionHistory";
	/** [Read] elasticbeanstalk:DescribeEnvironmentManagedActions */
	static readonly DescribeEnvironmentManagedActions =
		"elasticbeanstalk:DescribeEnvironmentManagedActions";
	/** [Read] elasticbeanstalk:DescribeEnvironmentResources */
	static readonly DescribeEnvironmentResources =
		"elasticbeanstalk:DescribeEnvironmentResources";
	/** [List] elasticbeanstalk:DescribeEnvironments */
	static readonly DescribeEnvironments =
		"elasticbeanstalk:DescribeEnvironments";
	/** [Read] elasticbeanstalk:DescribeEvents */
	static readonly DescribeEvents = "elasticbeanstalk:DescribeEvents";
	/** [Read] elasticbeanstalk:DescribeInstancesHealth */
	static readonly DescribeInstancesHealth =
		"elasticbeanstalk:DescribeInstancesHealth";
	/** [Read] elasticbeanstalk:DescribePlatformVersion */
	static readonly DescribePlatformVersion =
		"elasticbeanstalk:DescribePlatformVersion";
	/** [Write] elasticbeanstalk:DisassociateEnvironmentOperationsRole */
	static readonly DisassociateEnvironmentOperationsRole =
		"elasticbeanstalk:DisassociateEnvironmentOperationsRole";
	/** [List] elasticbeanstalk:ListAvailableSolutionStacks */
	static readonly ListAvailableSolutionStacks =
		"elasticbeanstalk:ListAvailableSolutionStacks";
	/** [List] elasticbeanstalk:ListPlatformBranches */
	static readonly ListPlatformBranches =
		"elasticbeanstalk:ListPlatformBranches";
	/** [List] elasticbeanstalk:ListPlatformVersions */
	static readonly ListPlatformVersions =
		"elasticbeanstalk:ListPlatformVersions";
	/** [Read] elasticbeanstalk:ListTagsForResource */
	static readonly ListTagsForResource = "elasticbeanstalk:ListTagsForResource";
	/** [Write] elasticbeanstalk:PutInstanceStatistics */
	static readonly PutInstanceStatistics =
		"elasticbeanstalk:PutInstanceStatistics";
	/** [Write] elasticbeanstalk:RebuildEnvironment */
	static readonly RebuildEnvironment = "elasticbeanstalk:RebuildEnvironment";
	/** [Tagging] elasticbeanstalk:RemoveTags */
	static readonly RemoveTags = "elasticbeanstalk:RemoveTags";
	/** [Read] elasticbeanstalk:RequestEnvironmentInfo */
	static readonly RequestEnvironmentInfo =
		"elasticbeanstalk:RequestEnvironmentInfo";
	/** [Write] elasticbeanstalk:RestartAppServer */
	static readonly RestartAppServer = "elasticbeanstalk:RestartAppServer";
	/** [Read] elasticbeanstalk:RetrieveEnvironmentInfo */
	static readonly RetrieveEnvironmentInfo =
		"elasticbeanstalk:RetrieveEnvironmentInfo";
	/** [Write] elasticbeanstalk:SwapEnvironmentCNAMEs */
	static readonly SwapEnvironmentCNAMEs =
		"elasticbeanstalk:SwapEnvironmentCNAMEs";
	/** [Write] elasticbeanstalk:TerminateEnvironment */
	static readonly TerminateEnvironment =
		"elasticbeanstalk:TerminateEnvironment";
	/** [Write] elasticbeanstalk:UpdateApplication */
	static readonly UpdateApplication = "elasticbeanstalk:UpdateApplication";
	/** [Write] elasticbeanstalk:UpdateApplicationResourceLifecycle */
	static readonly UpdateApplicationResourceLifecycle =
		"elasticbeanstalk:UpdateApplicationResourceLifecycle";
	/** [Write] elasticbeanstalk:UpdateApplicationVersion */
	static readonly UpdateApplicationVersion =
		"elasticbeanstalk:UpdateApplicationVersion";
	/** [Write] elasticbeanstalk:UpdateConfigurationTemplate */
	static readonly UpdateConfigurationTemplate =
		"elasticbeanstalk:UpdateConfigurationTemplate";
	/** [Write] elasticbeanstalk:UpdateEnvironment */
	static readonly UpdateEnvironment = "elasticbeanstalk:UpdateEnvironment";
	/** [Tagging] elasticbeanstalk:UpdateTagsForResource */
	static readonly UpdateTagsForResource =
		"elasticbeanstalk:UpdateTagsForResource";
	/** [Read] elasticbeanstalk:ValidateConfigurationSettings */
	static readonly ValidateConfigurationSettings =
		"elasticbeanstalk:ValidateConfigurationSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElasticBeanstalkActions.CheckDNSAvailability,
		ElasticBeanstalkActions.DescribeAccountAttributes,
		ElasticBeanstalkActions.DescribeConfigurationOptions,
		ElasticBeanstalkActions.DescribeConfigurationSettings,
		ElasticBeanstalkActions.DescribeEnvironmentHealth,
		ElasticBeanstalkActions.DescribeEnvironmentManagedActionHistory,
		ElasticBeanstalkActions.DescribeEnvironmentManagedActions,
		ElasticBeanstalkActions.DescribeEnvironmentResources,
		ElasticBeanstalkActions.DescribeEvents,
		ElasticBeanstalkActions.DescribeInstancesHealth,
		ElasticBeanstalkActions.DescribePlatformVersion,
		ElasticBeanstalkActions.ListTagsForResource,
		ElasticBeanstalkActions.RequestEnvironmentInfo,
		ElasticBeanstalkActions.RetrieveEnvironmentInfo,
		ElasticBeanstalkActions.ValidateConfigurationSettings,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElasticBeanstalkActions.AbortEnvironmentUpdate,
		ElasticBeanstalkActions.ApplyEnvironmentManagedAction,
		ElasticBeanstalkActions.AssociateEnvironmentOperationsRole,
		ElasticBeanstalkActions.ComposeEnvironments,
		ElasticBeanstalkActions.CreateApplication,
		ElasticBeanstalkActions.CreateApplicationVersion,
		ElasticBeanstalkActions.CreateConfigurationTemplate,
		ElasticBeanstalkActions.CreateEnvironment,
		ElasticBeanstalkActions.CreatePlatformVersion,
		ElasticBeanstalkActions.CreateStorageLocation,
		ElasticBeanstalkActions.DeleteApplication,
		ElasticBeanstalkActions.DeleteApplicationVersion,
		ElasticBeanstalkActions.DeleteConfigurationTemplate,
		ElasticBeanstalkActions.DeleteEnvironmentConfiguration,
		ElasticBeanstalkActions.DeletePlatformVersion,
		ElasticBeanstalkActions.DisassociateEnvironmentOperationsRole,
		ElasticBeanstalkActions.PutInstanceStatistics,
		ElasticBeanstalkActions.RebuildEnvironment,
		ElasticBeanstalkActions.RestartAppServer,
		ElasticBeanstalkActions.SwapEnvironmentCNAMEs,
		ElasticBeanstalkActions.TerminateEnvironment,
		ElasticBeanstalkActions.UpdateApplication,
		ElasticBeanstalkActions.UpdateApplicationResourceLifecycle,
		ElasticBeanstalkActions.UpdateApplicationVersion,
		ElasticBeanstalkActions.UpdateConfigurationTemplate,
		ElasticBeanstalkActions.UpdateEnvironment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElasticBeanstalkActions.DescribeApplicationVersions,
		ElasticBeanstalkActions.DescribeApplications,
		ElasticBeanstalkActions.DescribeEnvironments,
		ElasticBeanstalkActions.ListAvailableSolutionStacks,
		ElasticBeanstalkActions.ListPlatformBranches,
		ElasticBeanstalkActions.ListPlatformVersions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElasticBeanstalkActions.AddTags,
		ElasticBeanstalkActions.RemoveTags,
		ElasticBeanstalkActions.UpdateTagsForResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface ElasticBeanstalkApplicationArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
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
export interface ElasticBeanstalkApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
}

/**
 * Properties for building a applicationversion ARN.
 */
export interface ElasticBeanstalkApplicationversionArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** The VersionLabel component of the ARN. */
	readonly versionLabel: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a applicationversion ARN.
 */
export interface ElasticBeanstalkApplicationversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The VersionLabel component. */
	readonly versionLabel: string;
}

/**
 * Properties for building a configurationtemplate ARN.
 */
export interface ElasticBeanstalkConfigurationtemplateArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configurationtemplate ARN.
 */
export interface ElasticBeanstalkConfigurationtemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The TemplateName component. */
	readonly templateName: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface ElasticBeanstalkEnvironmentArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** The EnvironmentName component of the ARN. */
	readonly environmentName: string;
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
export interface ElasticBeanstalkEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
}

/**
 * Properties for building a platform ARN.
 */
export interface ElasticBeanstalkPlatformArnProps {
	/** The PlatformNameWithVersion component of the ARN. */
	readonly platformNameWithVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a platform ARN.
 */
export interface ElasticBeanstalkPlatformArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PlatformNameWithVersion component. */
	readonly platformNameWithVersion: string;
}

/**
 * Properties for building a solutionstack ARN.
 */
export interface ElasticBeanstalkSolutionstackArnProps {
	/** The SolutionStackName component of the ARN. */
	readonly solutionStackName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a solutionstack ARN.
 */
export interface ElasticBeanstalkSolutionstackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SolutionStackName component. */
	readonly solutionStackName: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationName>[^:/?]+)$/;
const ApplicationversionArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):applicationversion\/(?<applicationName>[^:/?]+)\/(?<versionLabel>[^:/?]+)$/;
const ConfigurationtemplateArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):configurationtemplate\/(?<applicationName>[^:/?]+)\/(?<templateName>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<applicationName>[^:/?]+)\/(?<environmentName>[^:/?]+)$/;
const PlatformArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*)::platform\/(?<platformNameWithVersion>[^:/?]+)$/;
const SolutionstackArnRegex =
	/^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*)::solutionstack\/(?<solutionStackName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elasticbeanstalk resources.
 */
export class ElasticBeanstalkResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: ElasticBeanstalkApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationName}`;
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
	static parseApplicationArn(
		arn: string,
	): ElasticBeanstalkApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
		};
	}

	/**
	 * Builds an ARN for the applicationversion resource.
	 */
	static applicationversion(
		props: ElasticBeanstalkApplicationversionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}:${props.account ?? "*"}:applicationversion/${props.applicationName}/${props.versionLabel}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the applicationversion resource.
	 */
	static isValidApplicationversionArn(arn: string): boolean {
		return ApplicationversionArnRegex.test(arn);
	}

	/**
	 * Parses a applicationversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationversionArn(
		arn: string,
	): ElasticBeanstalkApplicationversionArnComponents {
		const match = ApplicationversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid applicationversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			versionLabel: match.groups!.versionLabel,
		};
	}

	/**
	 * Builds an ARN for the configurationtemplate resource.
	 */
	static configurationtemplate(
		props: ElasticBeanstalkConfigurationtemplateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}:${props.account ?? "*"}:configurationtemplate/${props.applicationName}/${props.templateName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configurationtemplate resource.
	 */
	static isValidConfigurationtemplateArn(arn: string): boolean {
		return ConfigurationtemplateArnRegex.test(arn);
	}

	/**
	 * Parses a configurationtemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationtemplateArn(
		arn: string,
	): ElasticBeanstalkConfigurationtemplateArnComponents {
		const match = ConfigurationtemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configurationtemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			templateName: match.groups!.templateName,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: ElasticBeanstalkEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.applicationName}/${props.environmentName}`;
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
	static parseEnvironmentArn(
		arn: string,
	): ElasticBeanstalkEnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			environmentName: match.groups!.environmentName,
		};
	}

	/**
	 * Builds an ARN for the platform resource.
	 */
	static platform(props: ElasticBeanstalkPlatformArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}::platform/${props.platformNameWithVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the platform resource.
	 */
	static isValidPlatformArn(arn: string): boolean {
		return PlatformArnRegex.test(arn);
	}

	/**
	 * Parses a platform ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlatformArn(arn: string): ElasticBeanstalkPlatformArnComponents {
		const match = PlatformArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid platform ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			platformNameWithVersion: match.groups!.platformNameWithVersion,
		};
	}

	/**
	 * Builds an ARN for the solutionstack resource.
	 */
	static solutionstack(props: ElasticBeanstalkSolutionstackArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticbeanstalk:${props.region ?? "*"}::solutionstack/${props.solutionStackName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the solutionstack resource.
	 */
	static isValidSolutionstackArn(arn: string): boolean {
		return SolutionstackArnRegex.test(arn);
	}

	/**
	 * Parses a solutionstack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSolutionstackArn(
		arn: string,
	): ElasticBeanstalkSolutionstackArnComponents {
		const match = SolutionstackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid solutionstack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			solutionStackName: match.groups!.solutionStackName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for elasticbeanstalk.
 */
export class ElasticBeanstalkOperations {
	/** IAM actions required for the AbortEnvironmentUpdate API call. */
	static readonly AbortEnvironmentUpdate: string[] = [];
	/** IAM actions required for the ApplyEnvironmentManagedAction API call. */
	static readonly ApplyEnvironmentManagedAction: string[] = [];
	/** IAM actions required for the AssociateEnvironmentOperationsRole API call. */
	static readonly AssociateEnvironmentOperationsRole: string[] = [];
	/** IAM actions required for the CheckDNSAvailability API call. */
	static readonly CheckDNSAvailability: string[] = [];
	/** IAM actions required for the ComposeEnvironments API call. */
	static readonly ComposeEnvironments: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [];
	/** IAM actions required for the CreateApplicationVersion API call. */
	static readonly CreateApplicationVersion: string[] = [];
	/** IAM actions required for the CreateConfigurationTemplate API call. */
	static readonly CreateConfigurationTemplate: string[] = [];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [];
	/** IAM actions required for the CreatePlatformVersion API call. */
	static readonly CreatePlatformVersion: string[] = [];
	/** IAM actions required for the CreateStorageLocation API call. */
	static readonly CreateStorageLocation: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [];
	/** IAM actions required for the DeleteApplicationVersion API call. */
	static readonly DeleteApplicationVersion: string[] = [];
	/** IAM actions required for the DeleteConfigurationTemplate API call. */
	static readonly DeleteConfigurationTemplate: string[] = [];
	/** IAM actions required for the DeleteEnvironmentConfiguration API call. */
	static readonly DeleteEnvironmentConfiguration: string[] = [];
	/** IAM actions required for the DeletePlatformVersion API call. */
	static readonly DeletePlatformVersion: string[] = [];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DescribeAccountAttributes: string[] = [];
	/** IAM actions required for the DescribeApplicationVersions API call. */
	static readonly DescribeApplicationVersions: string[] = [];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DescribeApplications: string[] = [];
	/** IAM actions required for the DescribeConfigurationOptions API call. */
	static readonly DescribeConfigurationOptions: string[] = [];
	/** IAM actions required for the DescribeConfigurationSettings API call. */
	static readonly DescribeConfigurationSettings: string[] = [];
	/** IAM actions required for the DescribeEnvironmentHealth API call. */
	static readonly DescribeEnvironmentHealth: string[] = [];
	/** IAM actions required for the DescribeEnvironmentManagedActionHistory API call. */
	static readonly DescribeEnvironmentManagedActionHistory: string[] = [];
	/** IAM actions required for the DescribeEnvironmentManagedActions API call. */
	static readonly DescribeEnvironmentManagedActions: string[] = [];
	/** IAM actions required for the DescribeEnvironmentResources API call. */
	static readonly DescribeEnvironmentResources: string[] = [];
	/** IAM actions required for the DescribeEnvironments API call. */
	static readonly DescribeEnvironments: string[] = [
		"elasticbeanstalk:DescribeEnvironments",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = [];
	/** IAM actions required for the DescribeInstancesHealth API call. */
	static readonly DescribeInstancesHealth: string[] = [];
	/** IAM actions required for the DescribePlatformVersion API call. */
	static readonly DescribePlatformVersion: string[] = [];
	/** IAM actions required for the DisassociateEnvironmentOperationsRole API call. */
	static readonly DisassociateEnvironmentOperationsRole: string[] = [];
	/** IAM actions required for the ListAvailableSolutionStacks API call. */
	static readonly ListAvailableSolutionStacks: string[] = [];
	/** IAM actions required for the ListPlatformBranches API call. */
	static readonly ListPlatformBranches: string[] = [];
	/** IAM actions required for the ListPlatformVersions API call. */
	static readonly ListPlatformVersions: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the RebuildEnvironment API call. */
	static readonly RebuildEnvironment: string[] = [];
	/** IAM actions required for the RequestEnvironmentInfo API call. */
	static readonly RequestEnvironmentInfo: string[] = [];
	/** IAM actions required for the RestartAppServer API call. */
	static readonly RestartAppServer: string[] = [];
	/** IAM actions required for the RetrieveEnvironmentInfo API call. */
	static readonly RetrieveEnvironmentInfo: string[] = [];
	/** IAM actions required for the SwapEnvironmentCNAMEs API call. */
	static readonly SwapEnvironmentCNAMEs: string[] = [];
	/** IAM actions required for the TerminateEnvironment API call. */
	static readonly TerminateEnvironment: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [];
	/** IAM actions required for the UpdateApplicationResourceLifecycle API call. */
	static readonly UpdateApplicationResourceLifecycle: string[] = [];
	/** IAM actions required for the UpdateApplicationVersion API call. */
	static readonly UpdateApplicationVersion: string[] = [];
	/** IAM actions required for the UpdateConfigurationTemplate API call. */
	static readonly UpdateConfigurationTemplate: string[] = [];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [];
	/** IAM actions required for the UpdateTagsForResource API call. */
	static readonly UpdateTagsForResource: string[] = [];
	/** IAM actions required for the ValidateConfigurationSettings API call. */
	static readonly ValidateConfigurationSettings: string[] = [];
}

/**
 * Condition key constants and builders for elasticbeanstalk.
 */
export class ElasticBeanstalkConditions {
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
	/** Condition keys applicable to the CreateConfigurationTemplate action. */
	static readonly CreateConfigurationTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticbeanstalk:FromApplication",
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromEnvironment",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the CreatePlatformVersion action. */
	static readonly CreatePlatformVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly RemoveTagsConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the SwapEnvironmentCNAMEs action. */
	static readonly SwapEnvironmentCNAMEsConditionKeys: string[] = [
		"elasticbeanstalk:FromEnvironment",
	];
	/** Condition keys applicable to the UpdateConfigurationTemplate action. */
	static readonly UpdateConfigurationTemplateConditionKeys: string[] = [
		"elasticbeanstalk:FromApplication",
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromEnvironment",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the UpdateTagsForResource action. */
	static readonly UpdateTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: elasticbeanstalk:FromApplication (ARN) */
	static readonly FROM_APPLICATION = "elasticbeanstalk:FromApplication";
	/** Condition key: elasticbeanstalk:FromApplicationVersion (ARN) */
	static readonly FROM_APPLICATION_VERSION =
		"elasticbeanstalk:FromApplicationVersion";
	/** Condition key: elasticbeanstalk:FromConfigurationTemplate (ARN) */
	static readonly FROM_CONFIGURATION_TEMPLATE =
		"elasticbeanstalk:FromConfigurationTemplate";
	/** Condition key: elasticbeanstalk:FromEnvironment (ARN) */
	static readonly FROM_ENVIRONMENT = "elasticbeanstalk:FromEnvironment";
	/** Condition key: elasticbeanstalk:FromPlatform (ARN) */
	static readonly FROM_PLATFORM = "elasticbeanstalk:FromPlatform";
	/** Condition key: elasticbeanstalk:FromSolutionStack (ARN) */
	static readonly FROM_SOLUTION_STACK = "elasticbeanstalk:FromSolutionStack";
	/** Condition key: elasticbeanstalk:InApplication (ARN) */
	static readonly IN_APPLICATION = "elasticbeanstalk:InApplication";

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
	 * Generates a condition block for `elasticbeanstalk:FromApplication`.
	 */
	static fromApplication(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:FromApplication": value } };
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:FromApplicationVersion`.
	 */
	static fromApplicationVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:FromApplicationVersion": value } };
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:FromConfigurationTemplate`.
	 */
	static fromConfigurationTemplate(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "elasticbeanstalk:FromConfigurationTemplate": value },
		};
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:FromEnvironment`.
	 */
	static fromEnvironment(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:FromEnvironment": value } };
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:FromPlatform`.
	 */
	static fromPlatform(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:FromPlatform": value } };
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:FromSolutionStack`.
	 */
	static fromSolutionStack(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:FromSolutionStack": value } };
	}

	/**
	 * Generates a condition block for `elasticbeanstalk:InApplication`.
	 */
	static inApplication(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticbeanstalk:InApplication": value } };
	}
}
