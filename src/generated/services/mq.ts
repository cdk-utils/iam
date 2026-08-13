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
	static readonly CreateBroker = "mq:CreateBroker";
	/** [Write] mq:CreateConfiguration */
	static readonly CreateConfiguration = "mq:CreateConfiguration";
	/** [Write] mq:CreateReplicaBroker */
	static readonly CreateReplicaBroker = "mq:CreateReplicaBroker";
	/** [Tagging] mq:CreateTags */
	static readonly CreateTags = "mq:CreateTags";
	/** [Write] mq:CreateUser */
	static readonly CreateUser = "mq:CreateUser";
	/** [Write] mq:DeleteBroker */
	static readonly DeleteBroker = "mq:DeleteBroker";
	/** [Write] mq:DeleteConfiguration */
	static readonly DeleteConfiguration = "mq:DeleteConfiguration";
	/** [Tagging] mq:DeleteTags */
	static readonly DeleteTags = "mq:DeleteTags";
	/** [Write] mq:DeleteUser */
	static readonly DeleteUser = "mq:DeleteUser";
	/** [Read] mq:DescribeBroker */
	static readonly DescribeBroker = "mq:DescribeBroker";
	/** [Read] mq:DescribeBrokerEngineTypes */
	static readonly DescribeBrokerEngineTypes = "mq:DescribeBrokerEngineTypes";
	/** [Read] mq:DescribeBrokerInstanceOptions */
	static readonly DescribeBrokerInstanceOptions =
		"mq:DescribeBrokerInstanceOptions";
	/** [Read] mq:DescribeConfiguration */
	static readonly DescribeConfiguration = "mq:DescribeConfiguration";
	/** [Read] mq:DescribeConfigurationRevision */
	static readonly DescribeConfigurationRevision =
		"mq:DescribeConfigurationRevision";
	/** [Read] mq:DescribeSharedResources */
	static readonly DescribeSharedResources = "mq:DescribeSharedResources";
	/** [Read] mq:DescribeUser */
	static readonly DescribeUser = "mq:DescribeUser";
	/** [List] mq:ListBrokers */
	static readonly ListBrokers = "mq:ListBrokers";
	/** [List] mq:ListConfigurationRevisions */
	static readonly ListConfigurationRevisions = "mq:ListConfigurationRevisions";
	/** [List] mq:ListConfigurations */
	static readonly ListConfigurations = "mq:ListConfigurations";
	/** [List] mq:ListTags */
	static readonly ListTags = "mq:ListTags";
	/** [List] mq:ListUsers */
	static readonly ListUsers = "mq:ListUsers";
	/** [Write] mq:Promote */
	static readonly Promote = "mq:Promote";
	/** [Write] mq:RebootBroker */
	static readonly RebootBroker = "mq:RebootBroker";
	/** [Write] mq:UpdateBroker */
	static readonly UpdateBroker = "mq:UpdateBroker";
	/** [Write] mq:UpdateBrokerAccessConfiguration */
	static readonly UpdateBrokerAccessConfiguration =
		"mq:UpdateBrokerAccessConfiguration";
	/** [Write] mq:UpdateConfiguration */
	static readonly UpdateConfiguration = "mq:UpdateConfiguration";
	/** [Write] mq:UpdateUser */
	static readonly UpdateUser = "mq:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MqActions.DescribeBroker,
		MqActions.DescribeBrokerEngineTypes,
		MqActions.DescribeBrokerInstanceOptions,
		MqActions.DescribeConfiguration,
		MqActions.DescribeConfigurationRevision,
		MqActions.DescribeSharedResources,
		MqActions.DescribeUser,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MqActions.CreateBroker,
		MqActions.CreateConfiguration,
		MqActions.CreateReplicaBroker,
		MqActions.CreateUser,
		MqActions.DeleteBroker,
		MqActions.DeleteConfiguration,
		MqActions.DeleteUser,
		MqActions.Promote,
		MqActions.RebootBroker,
		MqActions.UpdateBroker,
		MqActions.UpdateBrokerAccessConfiguration,
		MqActions.UpdateConfiguration,
		MqActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MqActions.ListBrokers,
		MqActions.ListConfigurationRevisions,
		MqActions.ListConfigurations,
		MqActions.ListTags,
		MqActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MqActions.CreateTags,
		MqActions.DeleteTags,
	];
}

/**
 * Properties for building a brokers ARN.
 */
export interface MqBrokersArnProps {
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
}

/**
 * Parsed components of a brokers ARN.
 */
export interface MqBrokersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BrokerName component. */
	readonly brokerName: string;
	/** The BrokerId component. */
	readonly brokerId: string;
}

/**
 * Properties for building a configurations ARN.
 */
export interface MqConfigurationsArnProps {
	/** The ConfigurationId component of the ARN. */
	readonly configurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configurations ARN.
 */
export interface MqConfigurationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationId component. */
	readonly configurationId: string;
}

const BrokersArnRegex =
	/^arn:(?<partition>[^:]+):mq:(?<region>[^:]*):(?<account>[^:]*):broker:(?<brokerName>[^:/?]+):(?<brokerId>[^:/?]+)$/;
const ConfigurationsArnRegex =
	/^arn:(?<partition>[^:]+):mq:(?<region>[^:]*):(?<account>[^:]*):configuration:(?<configurationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mq resources.
 */
export class MqResources {
	/**
	 * Builds an ARN for the brokers resource.
	 */
	static brokers(props: MqBrokersArnProps): string {
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
	static parseBrokersArn(arn: string): MqBrokersArnComponents {
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
	static configurations(props: MqConfigurationsArnProps): string {
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
	static parseConfigurationsArn(arn: string): MqConfigurationsArnComponents {
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
	static readonly CreateBroker: string[] = [
		"mq:CreateBroker",
		"mq:CreateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CreateConfiguration: string[] = [
		"mq:CreateConfiguration",
		"mq:CreateTags",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CreateTags: string[] = ["mq:CreateTags"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["mq:CreateUser"];
	/** IAM actions required for the DeleteBroker API call. */
	static readonly DeleteBroker: string[] = ["mq:DeleteBroker"];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DeleteConfiguration: string[] = ["mq:DeleteConfiguration"];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["mq:DeleteTags"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["mq:DeleteUser"];
	/** IAM actions required for the DescribeBroker API call. */
	static readonly DescribeBroker: string[] = ["mq:DescribeBroker"];
	/** IAM actions required for the DescribeBrokerEngineTypes API call. */
	static readonly DescribeBrokerEngineTypes: string[] = [
		"mq:DescribeBrokerEngineTypes",
	];
	/** IAM actions required for the DescribeBrokerInstanceOptions API call. */
	static readonly DescribeBrokerInstanceOptions: string[] = [
		"mq:DescribeBrokerInstanceOptions",
	];
	/** IAM actions required for the DescribeConfiguration API call. */
	static readonly DescribeConfiguration: string[] = [
		"mq:DescribeConfiguration",
	];
	/** IAM actions required for the DescribeConfigurationRevision API call. */
	static readonly DescribeConfigurationRevision: string[] = [
		"mq:DescribeConfigurationRevision",
	];
	/** IAM actions required for the DescribeSharedResources API call. */
	static readonly DescribeSharedResources: string[] = [
		"mq:DescribeSharedResources",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = ["mq:DescribeUser"];
	/** IAM actions required for the ListBrokers API call. */
	static readonly ListBrokers: string[] = ["mq:ListBrokers"];
	/** IAM actions required for the ListConfigurationRevisions API call. */
	static readonly ListConfigurationRevisions: string[] = [
		"mq:ListConfigurationRevisions",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly ListConfigurations: string[] = ["mq:ListConfigurations"];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["mq:ListTags"];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["mq:ListUsers"];
	/** IAM actions required for the Promote API call. */
	static readonly Promote: string[] = ["mq:Promote"];
	/** IAM actions required for the RebootBroker API call. */
	static readonly RebootBroker: string[] = ["mq:RebootBroker"];
	/** IAM actions required for the UpdateBroker API call. */
	static readonly UpdateBroker: string[] = [
		"iam:PassRole",
		"mq:UpdateBroker",
		"mq:UpdateBrokerAccessConfiguration",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UpdateConfiguration: string[] = ["mq:UpdateConfiguration"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["mq:UpdateUser"];
}

/**
 * Condition key constants and builders for mq.
 */
export class MqConditions {
	/** Condition keys applicable to the CreateBroker action. */
	static readonly CreateBrokerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfiguration action. */
	static readonly CreateConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CreateTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = ["aws:TagKeys"];

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
