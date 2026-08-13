// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mq.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mq service.
 */
export class MqActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mq";

	/** [Write] mq:CreateBroker */
	static readonly CREATE_BROKER = "mq:CreateBroker";
	/** [Write] mq:CreateConfiguration */
	static readonly CREATE_CONFIGURATION = "mq:CreateConfiguration";
	/** [Write] mq:CreateReplicaBroker */
	static readonly CREATE_REPLICA_BROKER = "mq:CreateReplicaBroker";
	/** [Tagging] mq:CreateTags */
	static readonly CREATE_TAGS = "mq:CreateTags";
	/** [Write] mq:CreateUser */
	static readonly CREATE_USER = "mq:CreateUser";
	/** [Write] mq:DeleteBroker */
	static readonly DELETE_BROKER = "mq:DeleteBroker";
	/** [Write] mq:DeleteConfiguration */
	static readonly DELETE_CONFIGURATION = "mq:DeleteConfiguration";
	/** [Tagging] mq:DeleteTags */
	static readonly DELETE_TAGS = "mq:DeleteTags";
	/** [Write] mq:DeleteUser */
	static readonly DELETE_USER = "mq:DeleteUser";
	/** [Read] mq:DescribeBroker */
	static readonly DESCRIBE_BROKER = "mq:DescribeBroker";
	/** [Read] mq:DescribeBrokerEngineTypes */
	static readonly DESCRIBE_BROKER_ENGINE_TYPES = "mq:DescribeBrokerEngineTypes";
	/** [Read] mq:DescribeBrokerInstanceOptions */
	static readonly DESCRIBE_BROKER_INSTANCE_OPTIONS =
		"mq:DescribeBrokerInstanceOptions";
	/** [Read] mq:DescribeConfiguration */
	static readonly DESCRIBE_CONFIGURATION = "mq:DescribeConfiguration";
	/** [Read] mq:DescribeConfigurationRevision */
	static readonly DESCRIBE_CONFIGURATION_REVISION =
		"mq:DescribeConfigurationRevision";
	/** [Read] mq:DescribeSharedResources */
	static readonly DESCRIBE_SHARED_RESOURCES = "mq:DescribeSharedResources";
	/** [Read] mq:DescribeUser */
	static readonly DESCRIBE_USER = "mq:DescribeUser";
	/** [List] mq:ListBrokers */
	static readonly LIST_BROKERS = "mq:ListBrokers";
	/** [List] mq:ListConfigurationRevisions */
	static readonly LIST_CONFIGURATION_REVISIONS =
		"mq:ListConfigurationRevisions";
	/** [List] mq:ListConfigurations */
	static readonly LIST_CONFIGURATIONS = "mq:ListConfigurations";
	/** [List] mq:ListTags */
	static readonly LIST_TAGS = "mq:ListTags";
	/** [List] mq:ListUsers */
	static readonly LIST_USERS = "mq:ListUsers";
	/** [Write] mq:Promote */
	static readonly PROMOTE = "mq:Promote";
	/** [Write] mq:RebootBroker */
	static readonly REBOOT_BROKER = "mq:RebootBroker";
	/** [Write] mq:UpdateBroker */
	static readonly UPDATE_BROKER = "mq:UpdateBroker";
	/** [Write] mq:UpdateBrokerAccessConfiguration */
	static readonly UPDATE_BROKER_ACCESS_CONFIGURATION =
		"mq:UpdateBrokerAccessConfiguration";
	/** [Write] mq:UpdateConfiguration */
	static readonly UPDATE_CONFIGURATION = "mq:UpdateConfiguration";
	/** [Write] mq:UpdateUser */
	static readonly UPDATE_USER = "mq:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MqActions.DESCRIBE_BROKER,
		MqActions.DESCRIBE_BROKER_ENGINE_TYPES,
		MqActions.DESCRIBE_BROKER_INSTANCE_OPTIONS,
		MqActions.DESCRIBE_CONFIGURATION,
		MqActions.DESCRIBE_CONFIGURATION_REVISION,
		MqActions.DESCRIBE_SHARED_RESOURCES,
		MqActions.DESCRIBE_USER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MqActions.CREATE_BROKER,
		MqActions.CREATE_CONFIGURATION,
		MqActions.CREATE_REPLICA_BROKER,
		MqActions.CREATE_USER,
		MqActions.DELETE_BROKER,
		MqActions.DELETE_CONFIGURATION,
		MqActions.DELETE_USER,
		MqActions.PROMOTE,
		MqActions.REBOOT_BROKER,
		MqActions.UPDATE_BROKER,
		MqActions.UPDATE_BROKER_ACCESS_CONFIGURATION,
		MqActions.UPDATE_CONFIGURATION,
		MqActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MqActions.LIST_BROKERS,
		MqActions.LIST_CONFIGURATION_REVISIONS,
		MqActions.LIST_CONFIGURATIONS,
		MqActions.LIST_TAGS,
		MqActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MqActions.CREATE_TAGS,
		MqActions.DELETE_TAGS,
	];
}

const BrokersArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mq:(?<region>[^:]*):(?<account>[^:]*):broker:(?<brokerName>[^:/?]+):(?<brokerId>[^:/?]+)$",
);
const ConfigurationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mq:(?<region>[^:]*):(?<account>[^:]*):configuration:(?<configurationId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mq resources.
 */
export class MqResources {
	/**
	 * Builds an ARN for the brokers resource.
	 */
	static brokers(props: {
		/** The BrokerName component of the ARN. */
		readonly brokerName: string;
		/** The BrokerId component of the ARN. */
		readonly brokerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mq:${props.region ?? "*"}:${props.account ?? "*"}:broker:${props.brokerName}:${props.brokerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the brokers resource.
	 */
	static isValidBrokersArn(arn: string): boolean {
		return BrokersArnRegex.test(arn);
	}

	/**
	 * Parses a brokers ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrokersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		brokerName: string;
		brokerId: string;
	} {
		const match = BrokersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid brokers ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			brokerName: match.groups!.brokerName,
			brokerId: match.groups!.brokerId,
		};
	}

	/**
	 * Builds an ARN for the configurations resource.
	 */
	static configurations(props: {
		/** The ConfigurationId component of the ARN. */
		readonly configurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mq:${props.region ?? "*"}:${props.account ?? "*"}:configuration:${props.configurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configurations resource.
	 */
	static isValidConfigurationsArn(arn: string): boolean {
		return ConfigurationsArnRegex.test(arn);
	}

	/**
	 * Parses a configurations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationId: string;
	} {
		const match = ConfigurationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configurations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationId: match.groups!.configurationId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mq.
 */
export class MqOperations {
	/** IAM actions required for the CreateBroker API call. */
	static readonly CREATE_BROKER: string[] = [
		"mq:CreateBroker",
		"mq:CreateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CREATE_CONFIGURATION: string[] = [
		"mq:CreateConfiguration",
		"mq:CreateTags",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = ["mq:CreateTags"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["mq:CreateUser"];
	/** IAM actions required for the DeleteBroker API call. */
	static readonly DELETE_BROKER: string[] = ["mq:DeleteBroker"];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DELETE_CONFIGURATION: string[] = ["mq:DeleteConfiguration"];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["mq:DeleteTags"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["mq:DeleteUser"];
	/** IAM actions required for the DescribeBroker API call. */
	static readonly DESCRIBE_BROKER: string[] = ["mq:DescribeBroker"];
	/** IAM actions required for the DescribeBrokerEngineTypes API call. */
	static readonly DESCRIBE_BROKER_ENGINE_TYPES: string[] = [
		"mq:DescribeBrokerEngineTypes",
	];
	/** IAM actions required for the DescribeBrokerInstanceOptions API call. */
	static readonly DESCRIBE_BROKER_INSTANCE_OPTIONS: string[] = [
		"mq:DescribeBrokerInstanceOptions",
	];
	/** IAM actions required for the DescribeConfiguration API call. */
	static readonly DESCRIBE_CONFIGURATION: string[] = [
		"mq:DescribeConfiguration",
	];
	/** IAM actions required for the DescribeConfigurationRevision API call. */
	static readonly DESCRIBE_CONFIGURATION_REVISION: string[] = [
		"mq:DescribeConfigurationRevision",
	];
	/** IAM actions required for the DescribeSharedResources API call. */
	static readonly DESCRIBE_SHARED_RESOURCES: string[] = [
		"mq:DescribeSharedResources",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = ["mq:DescribeUser"];
	/** IAM actions required for the ListBrokers API call. */
	static readonly LIST_BROKERS: string[] = ["mq:ListBrokers"];
	/** IAM actions required for the ListConfigurationRevisions API call. */
	static readonly LIST_CONFIGURATION_REVISIONS: string[] = [
		"mq:ListConfigurationRevisions",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly LIST_CONFIGURATIONS: string[] = ["mq:ListConfigurations"];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["mq:ListTags"];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["mq:ListUsers"];
	/** IAM actions required for the Promote API call. */
	static readonly PROMOTE: string[] = ["mq:Promote"];
	/** IAM actions required for the RebootBroker API call. */
	static readonly REBOOT_BROKER: string[] = ["mq:RebootBroker"];
	/** IAM actions required for the UpdateBroker API call. */
	static readonly UPDATE_BROKER: string[] = [
		"iam:PassRole",
		"mq:UpdateBroker",
		"mq:UpdateBrokerAccessConfiguration",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UPDATE_CONFIGURATION: string[] = ["mq:UpdateConfiguration"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["mq:UpdateUser"];
}

/**
 * Condition key constants and builders for mq.
 */
export class MqConditions {
	/** Condition keys applicable to the CreateBroker action. */
	static readonly CREATE_BROKER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfiguration action. */
	static readonly CREATE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CREATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
