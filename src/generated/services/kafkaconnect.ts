// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kafkaconnect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kafkaconnect service.
 */
export class KafkaconnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kafkaconnect";

	/** [Write] kafkaconnect:CreateConnector */
	static readonly CREATE_CONNECTOR = "kafkaconnect:CreateConnector";
	/** [Write] kafkaconnect:CreateCustomPlugin */
	static readonly CREATE_CUSTOM_PLUGIN = "kafkaconnect:CreateCustomPlugin";
	/** [Write] kafkaconnect:CreateWorkerConfiguration */
	static readonly CREATE_WORKER_CONFIGURATION =
		"kafkaconnect:CreateWorkerConfiguration";
	/** [Write] kafkaconnect:DeleteConnector */
	static readonly DELETE_CONNECTOR = "kafkaconnect:DeleteConnector";
	/** [Write] kafkaconnect:DeleteCustomPlugin */
	static readonly DELETE_CUSTOM_PLUGIN = "kafkaconnect:DeleteCustomPlugin";
	/** [Write] kafkaconnect:DeleteWorkerConfiguration */
	static readonly DELETE_WORKER_CONFIGURATION =
		"kafkaconnect:DeleteWorkerConfiguration";
	/** [Read] kafkaconnect:DescribeConnector */
	static readonly DESCRIBE_CONNECTOR = "kafkaconnect:DescribeConnector";
	/** [Read] kafkaconnect:DescribeConnectorOperation */
	static readonly DESCRIBE_CONNECTOR_OPERATION =
		"kafkaconnect:DescribeConnectorOperation";
	/** [Read] kafkaconnect:DescribeCustomPlugin */
	static readonly DESCRIBE_CUSTOM_PLUGIN = "kafkaconnect:DescribeCustomPlugin";
	/** [Read] kafkaconnect:DescribeWorkerConfiguration */
	static readonly DESCRIBE_WORKER_CONFIGURATION =
		"kafkaconnect:DescribeWorkerConfiguration";
	/** [Read] kafkaconnect:ListConnectorOperations */
	static readonly LIST_CONNECTOR_OPERATIONS =
		"kafkaconnect:ListConnectorOperations";
	/** [Read] kafkaconnect:ListConnectors */
	static readonly LIST_CONNECTORS = "kafkaconnect:ListConnectors";
	/** [Read] kafkaconnect:ListCustomPlugins */
	static readonly LIST_CUSTOM_PLUGINS = "kafkaconnect:ListCustomPlugins";
	/** [Read] kafkaconnect:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kafkaconnect:ListTagsForResource";
	/** [Read] kafkaconnect:ListWorkerConfigurations */
	static readonly LIST_WORKER_CONFIGURATIONS =
		"kafkaconnect:ListWorkerConfigurations";
	/** [Tagging] kafkaconnect:TagResource */
	static readonly TAG_RESOURCE = "kafkaconnect:TagResource";
	/** [Tagging] kafkaconnect:UntagResource */
	static readonly UNTAG_RESOURCE = "kafkaconnect:UntagResource";
	/** [Write] kafkaconnect:UpdateConnector */
	static readonly UPDATE_CONNECTOR = "kafkaconnect:UpdateConnector";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KafkaconnectActions.DESCRIBE_CONNECTOR,
		KafkaconnectActions.DESCRIBE_CONNECTOR_OPERATION,
		KafkaconnectActions.DESCRIBE_CUSTOM_PLUGIN,
		KafkaconnectActions.DESCRIBE_WORKER_CONFIGURATION,
		KafkaconnectActions.LIST_CONNECTOR_OPERATIONS,
		KafkaconnectActions.LIST_CONNECTORS,
		KafkaconnectActions.LIST_CUSTOM_PLUGINS,
		KafkaconnectActions.LIST_TAGS_FOR_RESOURCE,
		KafkaconnectActions.LIST_WORKER_CONFIGURATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KafkaconnectActions.CREATE_CONNECTOR,
		KafkaconnectActions.CREATE_CUSTOM_PLUGIN,
		KafkaconnectActions.CREATE_WORKER_CONFIGURATION,
		KafkaconnectActions.DELETE_CONNECTOR,
		KafkaconnectActions.DELETE_CUSTOM_PLUGIN,
		KafkaconnectActions.DELETE_WORKER_CONFIGURATION,
		KafkaconnectActions.UPDATE_CONNECTOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KafkaconnectActions.TAG_RESOURCE,
		KafkaconnectActions.UNTAG_RESOURCE,
	];
}

const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const ConnectorOperationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):connector-operation/(?<connectorName>[^:/?]+)/(?<connectorUuid>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const CustomPluginArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):custom-plugin/(?<customPluginName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const WorkerConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):worker-configuration/(?<workerConfigurationName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kafkaconnect resources.
 */
export class KafkaconnectResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: {
		/** The ConnectorName component of the ARN. */
		readonly connectorName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafkaconnect:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorName: string;
		uuid: string;
	} {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorName: match.groups!.connectorName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the connector operation resource.
	 */
	static connectorOperation(props: {
		/** The ConnectorName component of the ARN. */
		readonly connectorName: string;
		/** The ConnectorUUID component of the ARN. */
		readonly connectorUuid: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafkaconnect:${props.region ?? "*"}:${props.account ?? "*"}:connector-operation/${props.connectorName}/${props.connectorUuid}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connector operation resource.
	 */
	static isValidConnectorOperationArn(arn: string): boolean {
		return ConnectorOperationArnRegex.test(arn);
	}

	/**
	 * Parses a connector operation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorOperationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorName: string;
		connectorUuid: string;
		uuid: string;
	} {
		const match = ConnectorOperationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector operation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorName: match.groups!.connectorName,
			connectorUuid: match.groups!.connectorUuid,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the custom plugin resource.
	 */
	static customPlugin(props: {
		/** The CustomPluginName component of the ARN. */
		readonly customPluginName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafkaconnect:${props.region ?? "*"}:${props.account ?? "*"}:custom-plugin/${props.customPluginName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custom plugin resource.
	 */
	static isValidCustomPluginArn(arn: string): boolean {
		return CustomPluginArnRegex.test(arn);
	}

	/**
	 * Parses a custom plugin ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomPluginArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		customPluginName: string;
		uuid: string;
	} {
		const match = CustomPluginArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custom plugin ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			customPluginName: match.groups!.customPluginName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the worker configuration resource.
	 */
	static workerConfiguration(props: {
		/** The WorkerConfigurationName component of the ARN. */
		readonly workerConfigurationName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafkaconnect:${props.region ?? "*"}:${props.account ?? "*"}:worker-configuration/${props.workerConfigurationName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the worker configuration resource.
	 */
	static isValidWorkerConfigurationArn(arn: string): boolean {
		return WorkerConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a worker configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkerConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workerConfigurationName: string;
		uuid: string;
	} {
		const match = WorkerConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid worker configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workerConfigurationName: match.groups!.workerConfigurationName,
			uuid: match.groups!.uuid,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kafkaconnect.
 */
export class KafkaconnectOperations {
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"kafkaconnect:CreateConnector",
		"iam:PassRole",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the CreateCustomPlugin API call. */
	static readonly CREATE_CUSTOM_PLUGIN: string[] = [
		"kafkaconnect:CreateCustomPlugin",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the CreateWorkerConfiguration API call. */
	static readonly CREATE_WORKER_CONFIGURATION: string[] = [
		"kafkaconnect:CreateWorkerConfiguration",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["kafkaconnect:DeleteConnector"];
	/** IAM actions required for the DeleteCustomPlugin API call. */
	static readonly DELETE_CUSTOM_PLUGIN: string[] = [
		"kafkaconnect:DeleteCustomPlugin",
	];
	/** IAM actions required for the DeleteWorkerConfiguration API call. */
	static readonly DELETE_WORKER_CONFIGURATION: string[] = [
		"kafkaconnect:DeleteWorkerConfiguration",
	];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DESCRIBE_CONNECTOR: string[] = [
		"kafkaconnect:DescribeConnector",
	];
	/** IAM actions required for the DescribeConnectorOperation API call. */
	static readonly DESCRIBE_CONNECTOR_OPERATION: string[] = [
		"kafkaconnect:DescribeConnector",
		"kafkaconnect:DescribeConnectorOperation",
	];
	/** IAM actions required for the DescribeCustomPlugin API call. */
	static readonly DESCRIBE_CUSTOM_PLUGIN: string[] = [
		"kafkaconnect:DescribeCustomPlugin",
	];
	/** IAM actions required for the DescribeWorkerConfiguration API call. */
	static readonly DESCRIBE_WORKER_CONFIGURATION: string[] = [
		"kafkaconnect:DescribeWorkerConfiguration",
	];
	/** IAM actions required for the ListConnectorOperations API call. */
	static readonly LIST_CONNECTOR_OPERATIONS: string[] = [
		"kafkaconnect:ListConnectorOperations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["kafkaconnect:ListConnectors"];
	/** IAM actions required for the ListCustomPlugins API call. */
	static readonly LIST_CUSTOM_PLUGINS: string[] = [
		"kafkaconnect:ListCustomPlugins",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kafkaconnect:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkerConfigurations API call. */
	static readonly LIST_WORKER_CONFIGURATIONS: string[] = [
		"kafkaconnect:ListWorkerConfigurations",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kafkaconnect:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kafkaconnect:UntagResource"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UPDATE_CONNECTOR: string[] = ["kafkaconnect:UpdateConnector"];
}

/**
 * Condition key constants and builders for kafkaconnect.
 */
export class KafkaconnectConditions {
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
