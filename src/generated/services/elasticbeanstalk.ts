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
	static readonly ABORT_ENVIRONMENT_UPDATE =
		"elasticbeanstalk:AbortEnvironmentUpdate";
	/** [Tagging] elasticbeanstalk:AddTags */
	static readonly ADD_TAGS = "elasticbeanstalk:AddTags";
	/** [Write] elasticbeanstalk:ApplyEnvironmentManagedAction */
	static readonly APPLY_ENVIRONMENT_MANAGED_ACTION =
		"elasticbeanstalk:ApplyEnvironmentManagedAction";
	/** [Write] elasticbeanstalk:AssociateEnvironmentOperationsRole */
	static readonly ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE =
		"elasticbeanstalk:AssociateEnvironmentOperationsRole";
	/** [Read] elasticbeanstalk:CheckDNSAvailability */
	static readonly CHECK_DNS_AVAILABILITY =
		"elasticbeanstalk:CheckDNSAvailability";
	/** [Write] elasticbeanstalk:ComposeEnvironments */
	static readonly COMPOSE_ENVIRONMENTS = "elasticbeanstalk:ComposeEnvironments";
	/** [Write] elasticbeanstalk:CreateApplication */
	static readonly CREATE_APPLICATION = "elasticbeanstalk:CreateApplication";
	/** [Write] elasticbeanstalk:CreateApplicationVersion */
	static readonly CREATE_APPLICATION_VERSION =
		"elasticbeanstalk:CreateApplicationVersion";
	/** [Write] elasticbeanstalk:CreateConfigurationTemplate */
	static readonly CREATE_CONFIGURATION_TEMPLATE =
		"elasticbeanstalk:CreateConfigurationTemplate";
	/** [Write] elasticbeanstalk:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "elasticbeanstalk:CreateEnvironment";
	/** [Write] elasticbeanstalk:CreatePlatformVersion */
	static readonly CREATE_PLATFORM_VERSION =
		"elasticbeanstalk:CreatePlatformVersion";
	/** [Write] elasticbeanstalk:CreateStorageLocation */
	static readonly CREATE_STORAGE_LOCATION =
		"elasticbeanstalk:CreateStorageLocation";
	/** [Write] elasticbeanstalk:DeleteApplication */
	static readonly DELETE_APPLICATION = "elasticbeanstalk:DeleteApplication";
	/** [Write] elasticbeanstalk:DeleteApplicationVersion */
	static readonly DELETE_APPLICATION_VERSION =
		"elasticbeanstalk:DeleteApplicationVersion";
	/** [Write] elasticbeanstalk:DeleteConfigurationTemplate */
	static readonly DELETE_CONFIGURATION_TEMPLATE =
		"elasticbeanstalk:DeleteConfigurationTemplate";
	/** [Write] elasticbeanstalk:DeleteEnvironmentConfiguration */
	static readonly DELETE_ENVIRONMENT_CONFIGURATION =
		"elasticbeanstalk:DeleteEnvironmentConfiguration";
	/** [Write] elasticbeanstalk:DeletePlatformVersion */
	static readonly DELETE_PLATFORM_VERSION =
		"elasticbeanstalk:DeletePlatformVersion";
	/** [Read] elasticbeanstalk:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES =
		"elasticbeanstalk:DescribeAccountAttributes";
	/** [List] elasticbeanstalk:DescribeApplicationVersions */
	static readonly DESCRIBE_APPLICATION_VERSIONS =
		"elasticbeanstalk:DescribeApplicationVersions";
	/** [List] elasticbeanstalk:DescribeApplications */
	static readonly DESCRIBE_APPLICATIONS =
		"elasticbeanstalk:DescribeApplications";
	/** [Read] elasticbeanstalk:DescribeConfigurationOptions */
	static readonly DESCRIBE_CONFIGURATION_OPTIONS =
		"elasticbeanstalk:DescribeConfigurationOptions";
	/** [Read] elasticbeanstalk:DescribeConfigurationSettings */
	static readonly DESCRIBE_CONFIGURATION_SETTINGS =
		"elasticbeanstalk:DescribeConfigurationSettings";
	/** [Read] elasticbeanstalk:DescribeEnvironmentHealth */
	static readonly DESCRIBE_ENVIRONMENT_HEALTH =
		"elasticbeanstalk:DescribeEnvironmentHealth";
	/** [Read] elasticbeanstalk:DescribeEnvironmentManagedActionHistory */
	static readonly DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY =
		"elasticbeanstalk:DescribeEnvironmentManagedActionHistory";
	/** [Read] elasticbeanstalk:DescribeEnvironmentManagedActions */
	static readonly DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS =
		"elasticbeanstalk:DescribeEnvironmentManagedActions";
	/** [Read] elasticbeanstalk:DescribeEnvironmentResources */
	static readonly DESCRIBE_ENVIRONMENT_RESOURCES =
		"elasticbeanstalk:DescribeEnvironmentResources";
	/** [List] elasticbeanstalk:DescribeEnvironments */
	static readonly DESCRIBE_ENVIRONMENTS =
		"elasticbeanstalk:DescribeEnvironments";
	/** [Read] elasticbeanstalk:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "elasticbeanstalk:DescribeEvents";
	/** [Read] elasticbeanstalk:DescribeInstancesHealth */
	static readonly DESCRIBE_INSTANCES_HEALTH =
		"elasticbeanstalk:DescribeInstancesHealth";
	/** [Read] elasticbeanstalk:DescribePlatformVersion */
	static readonly DESCRIBE_PLATFORM_VERSION =
		"elasticbeanstalk:DescribePlatformVersion";
	/** [Write] elasticbeanstalk:DisassociateEnvironmentOperationsRole */
	static readonly DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE =
		"elasticbeanstalk:DisassociateEnvironmentOperationsRole";
	/** [List] elasticbeanstalk:ListAvailableSolutionStacks */
	static readonly LIST_AVAILABLE_SOLUTION_STACKS =
		"elasticbeanstalk:ListAvailableSolutionStacks";
	/** [List] elasticbeanstalk:ListPlatformBranches */
	static readonly LIST_PLATFORM_BRANCHES =
		"elasticbeanstalk:ListPlatformBranches";
	/** [List] elasticbeanstalk:ListPlatformVersions */
	static readonly LIST_PLATFORM_VERSIONS =
		"elasticbeanstalk:ListPlatformVersions";
	/** [Read] elasticbeanstalk:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"elasticbeanstalk:ListTagsForResource";
	/** [Write] elasticbeanstalk:PutInstanceStatistics */
	static readonly PUT_INSTANCE_STATISTICS =
		"elasticbeanstalk:PutInstanceStatistics";
	/** [Write] elasticbeanstalk:RebuildEnvironment */
	static readonly REBUILD_ENVIRONMENT = "elasticbeanstalk:RebuildEnvironment";
	/** [Tagging] elasticbeanstalk:RemoveTags */
	static readonly REMOVE_TAGS = "elasticbeanstalk:RemoveTags";
	/** [Read] elasticbeanstalk:RequestEnvironmentInfo */
	static readonly REQUEST_ENVIRONMENT_INFO =
		"elasticbeanstalk:RequestEnvironmentInfo";
	/** [Write] elasticbeanstalk:RestartAppServer */
	static readonly RESTART_APP_SERVER = "elasticbeanstalk:RestartAppServer";
	/** [Read] elasticbeanstalk:RetrieveEnvironmentInfo */
	static readonly RETRIEVE_ENVIRONMENT_INFO =
		"elasticbeanstalk:RetrieveEnvironmentInfo";
	/** [Write] elasticbeanstalk:SwapEnvironmentCNAMEs */
	static readonly SWAP_ENVIRONMENT_CNAM_ES =
		"elasticbeanstalk:SwapEnvironmentCNAMEs";
	/** [Write] elasticbeanstalk:TerminateEnvironment */
	static readonly TERMINATE_ENVIRONMENT =
		"elasticbeanstalk:TerminateEnvironment";
	/** [Write] elasticbeanstalk:UpdateApplication */
	static readonly UPDATE_APPLICATION = "elasticbeanstalk:UpdateApplication";
	/** [Write] elasticbeanstalk:UpdateApplicationResourceLifecycle */
	static readonly UPDATE_APPLICATION_RESOURCE_LIFECYCLE =
		"elasticbeanstalk:UpdateApplicationResourceLifecycle";
	/** [Write] elasticbeanstalk:UpdateApplicationVersion */
	static readonly UPDATE_APPLICATION_VERSION =
		"elasticbeanstalk:UpdateApplicationVersion";
	/** [Write] elasticbeanstalk:UpdateConfigurationTemplate */
	static readonly UPDATE_CONFIGURATION_TEMPLATE =
		"elasticbeanstalk:UpdateConfigurationTemplate";
	/** [Write] elasticbeanstalk:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "elasticbeanstalk:UpdateEnvironment";
	/** [Tagging] elasticbeanstalk:UpdateTagsForResource */
	static readonly UPDATE_TAGS_FOR_RESOURCE =
		"elasticbeanstalk:UpdateTagsForResource";
	/** [Read] elasticbeanstalk:ValidateConfigurationSettings */
	static readonly VALIDATE_CONFIGURATION_SETTINGS =
		"elasticbeanstalk:ValidateConfigurationSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElasticBeanstalkActions.CHECK_DNS_AVAILABILITY,
		ElasticBeanstalkActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		ElasticBeanstalkActions.DESCRIBE_CONFIGURATION_OPTIONS,
		ElasticBeanstalkActions.DESCRIBE_CONFIGURATION_SETTINGS,
		ElasticBeanstalkActions.DESCRIBE_ENVIRONMENT_HEALTH,
		ElasticBeanstalkActions.DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY,
		ElasticBeanstalkActions.DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS,
		ElasticBeanstalkActions.DESCRIBE_ENVIRONMENT_RESOURCES,
		ElasticBeanstalkActions.DESCRIBE_EVENTS,
		ElasticBeanstalkActions.DESCRIBE_INSTANCES_HEALTH,
		ElasticBeanstalkActions.DESCRIBE_PLATFORM_VERSION,
		ElasticBeanstalkActions.LIST_TAGS_FOR_RESOURCE,
		ElasticBeanstalkActions.REQUEST_ENVIRONMENT_INFO,
		ElasticBeanstalkActions.RETRIEVE_ENVIRONMENT_INFO,
		ElasticBeanstalkActions.VALIDATE_CONFIGURATION_SETTINGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElasticBeanstalkActions.ABORT_ENVIRONMENT_UPDATE,
		ElasticBeanstalkActions.APPLY_ENVIRONMENT_MANAGED_ACTION,
		ElasticBeanstalkActions.ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE,
		ElasticBeanstalkActions.COMPOSE_ENVIRONMENTS,
		ElasticBeanstalkActions.CREATE_APPLICATION,
		ElasticBeanstalkActions.CREATE_APPLICATION_VERSION,
		ElasticBeanstalkActions.CREATE_CONFIGURATION_TEMPLATE,
		ElasticBeanstalkActions.CREATE_ENVIRONMENT,
		ElasticBeanstalkActions.CREATE_PLATFORM_VERSION,
		ElasticBeanstalkActions.CREATE_STORAGE_LOCATION,
		ElasticBeanstalkActions.DELETE_APPLICATION,
		ElasticBeanstalkActions.DELETE_APPLICATION_VERSION,
		ElasticBeanstalkActions.DELETE_CONFIGURATION_TEMPLATE,
		ElasticBeanstalkActions.DELETE_ENVIRONMENT_CONFIGURATION,
		ElasticBeanstalkActions.DELETE_PLATFORM_VERSION,
		ElasticBeanstalkActions.DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE,
		ElasticBeanstalkActions.PUT_INSTANCE_STATISTICS,
		ElasticBeanstalkActions.REBUILD_ENVIRONMENT,
		ElasticBeanstalkActions.RESTART_APP_SERVER,
		ElasticBeanstalkActions.SWAP_ENVIRONMENT_CNAM_ES,
		ElasticBeanstalkActions.TERMINATE_ENVIRONMENT,
		ElasticBeanstalkActions.UPDATE_APPLICATION,
		ElasticBeanstalkActions.UPDATE_APPLICATION_RESOURCE_LIFECYCLE,
		ElasticBeanstalkActions.UPDATE_APPLICATION_VERSION,
		ElasticBeanstalkActions.UPDATE_CONFIGURATION_TEMPLATE,
		ElasticBeanstalkActions.UPDATE_ENVIRONMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElasticBeanstalkActions.DESCRIBE_APPLICATION_VERSIONS,
		ElasticBeanstalkActions.DESCRIBE_APPLICATIONS,
		ElasticBeanstalkActions.DESCRIBE_ENVIRONMENTS,
		ElasticBeanstalkActions.LIST_AVAILABLE_SOLUTION_STACKS,
		ElasticBeanstalkActions.LIST_PLATFORM_BRANCHES,
		ElasticBeanstalkActions.LIST_PLATFORM_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElasticBeanstalkActions.ADD_TAGS,
		ElasticBeanstalkActions.REMOVE_TAGS,
		ElasticBeanstalkActions.UPDATE_TAGS_FOR_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationName>[^:/?]+)$",
);
const ApplicationversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):applicationversion/(?<applicationName>[^:/?]+)/(?<versionLabel>[^:/?]+)$",
);
const ConfigurationtemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):configurationtemplate/(?<applicationName>[^:/?]+)/(?<templateName>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*):(?<account>[^:]*):environment/(?<applicationName>[^:/?]+)/(?<environmentName>[^:/?]+)$",
);
const PlatformArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*)::platform/(?<platformNameWithVersion>[^:/?]+)$",
);
const SolutionstackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticbeanstalk:(?<region>[^:]*)::solutionstack/(?<solutionStackName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elasticbeanstalk resources.
 */
export class ElasticBeanstalkResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
	} {
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
	static applicationversion(props: {
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
	}): string {
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
	static parseApplicationversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		versionLabel: string;
	} {
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
	static configurationtemplate(props: {
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
	}): string {
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
	static parseConfigurationtemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		templateName: string;
	} {
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
	static environment(props: {
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
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		environmentName: string;
	} {
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
	static platform(props: {
		/** The PlatformNameWithVersion component of the ARN. */
		readonly platformNameWithVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePlatformArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		platformNameWithVersion: string;
	} {
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
	static solutionstack(props: {
		/** The SolutionStackName component of the ARN. */
		readonly solutionStackName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSolutionstackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		solutionStackName: string;
	} {
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
	static readonly ABORT_ENVIRONMENT_UPDATE: string[] = [];
	/** IAM actions required for the ApplyEnvironmentManagedAction API call. */
	static readonly APPLY_ENVIRONMENT_MANAGED_ACTION: string[] = [];
	/** IAM actions required for the AssociateEnvironmentOperationsRole API call. */
	static readonly ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE: string[] = [];
	/** IAM actions required for the CheckDNSAvailability API call. */
	static readonly CHECK_DNS_AVAILABILITY: string[] = [];
	/** IAM actions required for the ComposeEnvironments API call. */
	static readonly COMPOSE_ENVIRONMENTS: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [];
	/** IAM actions required for the CreateApplicationVersion API call. */
	static readonly CREATE_APPLICATION_VERSION: string[] = [];
	/** IAM actions required for the CreateConfigurationTemplate API call. */
	static readonly CREATE_CONFIGURATION_TEMPLATE: string[] = [];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [];
	/** IAM actions required for the CreatePlatformVersion API call. */
	static readonly CREATE_PLATFORM_VERSION: string[] = [];
	/** IAM actions required for the CreateStorageLocation API call. */
	static readonly CREATE_STORAGE_LOCATION: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [];
	/** IAM actions required for the DeleteApplicationVersion API call. */
	static readonly DELETE_APPLICATION_VERSION: string[] = [];
	/** IAM actions required for the DeleteConfigurationTemplate API call. */
	static readonly DELETE_CONFIGURATION_TEMPLATE: string[] = [];
	/** IAM actions required for the DeleteEnvironmentConfiguration API call. */
	static readonly DELETE_ENVIRONMENT_CONFIGURATION: string[] = [];
	/** IAM actions required for the DeletePlatformVersion API call. */
	static readonly DELETE_PLATFORM_VERSION: string[] = [];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES: string[] = [];
	/** IAM actions required for the DescribeApplicationVersions API call. */
	static readonly DESCRIBE_APPLICATION_VERSIONS: string[] = [];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DESCRIBE_APPLICATIONS: string[] = [];
	/** IAM actions required for the DescribeConfigurationOptions API call. */
	static readonly DESCRIBE_CONFIGURATION_OPTIONS: string[] = [];
	/** IAM actions required for the DescribeConfigurationSettings API call. */
	static readonly DESCRIBE_CONFIGURATION_SETTINGS: string[] = [];
	/** IAM actions required for the DescribeEnvironmentHealth API call. */
	static readonly DESCRIBE_ENVIRONMENT_HEALTH: string[] = [];
	/** IAM actions required for the DescribeEnvironmentManagedActionHistory API call. */
	static readonly DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY: string[] = [];
	/** IAM actions required for the DescribeEnvironmentManagedActions API call. */
	static readonly DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS: string[] = [];
	/** IAM actions required for the DescribeEnvironmentResources API call. */
	static readonly DESCRIBE_ENVIRONMENT_RESOURCES: string[] = [];
	/** IAM actions required for the DescribeEnvironments API call. */
	static readonly DESCRIBE_ENVIRONMENTS: string[] = [
		"elasticbeanstalk:DescribeEnvironments",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = [];
	/** IAM actions required for the DescribeInstancesHealth API call. */
	static readonly DESCRIBE_INSTANCES_HEALTH: string[] = [];
	/** IAM actions required for the DescribePlatformVersion API call. */
	static readonly DESCRIBE_PLATFORM_VERSION: string[] = [];
	/** IAM actions required for the DisassociateEnvironmentOperationsRole API call. */
	static readonly DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE: string[] = [];
	/** IAM actions required for the ListAvailableSolutionStacks API call. */
	static readonly LIST_AVAILABLE_SOLUTION_STACKS: string[] = [];
	/** IAM actions required for the ListPlatformBranches API call. */
	static readonly LIST_PLATFORM_BRANCHES: string[] = [];
	/** IAM actions required for the ListPlatformVersions API call. */
	static readonly LIST_PLATFORM_VERSIONS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the RebuildEnvironment API call. */
	static readonly REBUILD_ENVIRONMENT: string[] = [];
	/** IAM actions required for the RequestEnvironmentInfo API call. */
	static readonly REQUEST_ENVIRONMENT_INFO: string[] = [];
	/** IAM actions required for the RestartAppServer API call. */
	static readonly RESTART_APP_SERVER: string[] = [];
	/** IAM actions required for the RetrieveEnvironmentInfo API call. */
	static readonly RETRIEVE_ENVIRONMENT_INFO: string[] = [];
	/** IAM actions required for the SwapEnvironmentCNAMEs API call. */
	static readonly SWAP_ENVIRONMENT_CNAM_ES: string[] = [];
	/** IAM actions required for the TerminateEnvironment API call. */
	static readonly TERMINATE_ENVIRONMENT: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [];
	/** IAM actions required for the UpdateApplicationResourceLifecycle API call. */
	static readonly UPDATE_APPLICATION_RESOURCE_LIFECYCLE: string[] = [];
	/** IAM actions required for the UpdateApplicationVersion API call. */
	static readonly UPDATE_APPLICATION_VERSION: string[] = [];
	/** IAM actions required for the UpdateConfigurationTemplate API call. */
	static readonly UPDATE_CONFIGURATION_TEMPLATE: string[] = [];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = [];
	/** IAM actions required for the UpdateTagsForResource API call. */
	static readonly UPDATE_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the ValidateConfigurationSettings API call. */
	static readonly VALIDATE_CONFIGURATION_SETTINGS: string[] = [];
}

/**
 * Condition key constants and builders for elasticbeanstalk.
 */
export class ElasticBeanstalkConditions {
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationTemplate action. */
	static readonly CREATE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] = [
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
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the CreatePlatformVersion action. */
	static readonly CREATE_PLATFORM_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the SwapEnvironmentCNAMEs action. */
	static readonly SWAP_ENVIRONMENT_CNAM_ES_CONDITION_KEYS: string[] = [
		"elasticbeanstalk:FromEnvironment",
	];
	/** Condition keys applicable to the UpdateConfigurationTemplate action. */
	static readonly UPDATE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] = [
		"elasticbeanstalk:FromApplication",
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromEnvironment",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UPDATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"elasticbeanstalk:FromApplicationVersion",
		"elasticbeanstalk:FromConfigurationTemplate",
		"elasticbeanstalk:FromPlatform",
		"elasticbeanstalk:FromSolutionStack",
	];
	/** Condition keys applicable to the UpdateTagsForResource action. */
	static readonly UPDATE_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
