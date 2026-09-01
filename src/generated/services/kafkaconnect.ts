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
	static readonly CreateConnector = "kafkaconnect:CreateConnector";
	/** [Write] kafkaconnect:CreateCustomPlugin */
	static readonly CreateCustomPlugin = "kafkaconnect:CreateCustomPlugin";
	/** [Write] kafkaconnect:CreateWorkerConfiguration */
	static readonly CreateWorkerConfiguration =
		"kafkaconnect:CreateWorkerConfiguration";
	/** [Write] kafkaconnect:DeleteConnector */
	static readonly DeleteConnector = "kafkaconnect:DeleteConnector";
	/** [Write] kafkaconnect:DeleteCustomPlugin */
	static readonly DeleteCustomPlugin = "kafkaconnect:DeleteCustomPlugin";
	/** [Write] kafkaconnect:DeleteWorkerConfiguration */
	static readonly DeleteWorkerConfiguration =
		"kafkaconnect:DeleteWorkerConfiguration";
	/** [Read] kafkaconnect:DescribeConnector */
	static readonly DescribeConnector = "kafkaconnect:DescribeConnector";
	/** [Read] kafkaconnect:DescribeConnectorOperation */
	static readonly DescribeConnectorOperation =
		"kafkaconnect:DescribeConnectorOperation";
	/** [Read] kafkaconnect:DescribeCustomPlugin */
	static readonly DescribeCustomPlugin = "kafkaconnect:DescribeCustomPlugin";
	/** [Read] kafkaconnect:DescribeWorkerConfiguration */
	static readonly DescribeWorkerConfiguration =
		"kafkaconnect:DescribeWorkerConfiguration";
	/** [Read] kafkaconnect:ListConnectorOperations */
	static readonly ListConnectorOperations =
		"kafkaconnect:ListConnectorOperations";
	/** [Read] kafkaconnect:ListConnectors */
	static readonly ListConnectors = "kafkaconnect:ListConnectors";
	/** [Read] kafkaconnect:ListCustomPlugins */
	static readonly ListCustomPlugins = "kafkaconnect:ListCustomPlugins";
	/** [Read] kafkaconnect:ListTagsForResource */
	static readonly ListTagsForResource = "kafkaconnect:ListTagsForResource";
	/** [Read] kafkaconnect:ListWorkerConfigurations */
	static readonly ListWorkerConfigurations =
		"kafkaconnect:ListWorkerConfigurations";
	/** [Tagging] kafkaconnect:TagResource */
	static readonly TagResource = "kafkaconnect:TagResource";
	/** [Tagging] kafkaconnect:UntagResource */
	static readonly UntagResource = "kafkaconnect:UntagResource";
	/** [Write] kafkaconnect:UpdateConnector */
	static readonly UpdateConnector = "kafkaconnect:UpdateConnector";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KafkaconnectActions.DescribeConnector,
		KafkaconnectActions.DescribeConnectorOperation,
		KafkaconnectActions.DescribeCustomPlugin,
		KafkaconnectActions.DescribeWorkerConfiguration,
		KafkaconnectActions.ListConnectorOperations,
		KafkaconnectActions.ListConnectors,
		KafkaconnectActions.ListCustomPlugins,
		KafkaconnectActions.ListTagsForResource,
		KafkaconnectActions.ListWorkerConfigurations,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KafkaconnectActions.CreateConnector,
		KafkaconnectActions.CreateCustomPlugin,
		KafkaconnectActions.CreateWorkerConfiguration,
		KafkaconnectActions.DeleteConnector,
		KafkaconnectActions.DeleteCustomPlugin,
		KafkaconnectActions.DeleteWorkerConfiguration,
		KafkaconnectActions.UpdateConnector,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KafkaconnectActions.TagResource,
		KafkaconnectActions.UntagResource,
	];
}

/**
 * Properties for building a connector ARN.
 */
export interface KafkaconnectConnectorArnProps {
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
}

/**
 * Parsed components of a connector ARN.
 */
export interface KafkaconnectConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorName component. */
	readonly connectorName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a connector operation ARN.
 */
export interface KafkaconnectConnectorOperationArnProps {
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
}

/**
 * Parsed components of a connector operation ARN.
 */
export interface KafkaconnectConnectorOperationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorName component. */
	readonly connectorName: string;
	/** The ConnectorUUID component. */
	readonly connectorUuid: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a custom plugin ARN.
 */
export interface KafkaconnectCustomPluginArnProps {
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
}

/**
 * Parsed components of a custom plugin ARN.
 */
export interface KafkaconnectCustomPluginArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CustomPluginName component. */
	readonly customPluginName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a worker configuration ARN.
 */
export interface KafkaconnectWorkerConfigurationArnProps {
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
}

/**
 * Parsed components of a worker configuration ARN.
 */
export interface KafkaconnectWorkerConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkerConfigurationName component. */
	readonly workerConfigurationName: string;
	/** The UUID component. */
	readonly uuid: string;
}

const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const ConnectorOperationArnRegex =
	/^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):connector-operation\/(?<connectorName>[^:/?]+)\/(?<connectorUuid>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const CustomPluginArnRegex =
	/^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):custom-plugin\/(?<customPluginName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const WorkerConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):kafkaconnect:(?<region>[^:]*):(?<account>[^:]*):worker-configuration\/(?<workerConfigurationName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kafkaconnect resources.
 */
export class KafkaconnectResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: KafkaconnectConnectorArnProps): string {
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
	static parseConnectorArn(arn: string): KafkaconnectConnectorArnComponents {
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
	static connectorOperation(
		props: KafkaconnectConnectorOperationArnProps,
	): string {
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
	static parseConnectorOperationArn(
		arn: string,
	): KafkaconnectConnectorOperationArnComponents {
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
	static customPlugin(props: KafkaconnectCustomPluginArnProps): string {
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
	static parseCustomPluginArn(
		arn: string,
	): KafkaconnectCustomPluginArnComponents {
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
	static workerConfiguration(
		props: KafkaconnectWorkerConfigurationArnProps,
	): string {
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
	static parseWorkerConfigurationArn(
		arn: string,
	): KafkaconnectWorkerConfigurationArnComponents {
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
	static readonly CreateConnector: string[] = [
		"kafkaconnect:CreateConnector",
		"iam:PassRole",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the CreateCustomPlugin API call. */
	static readonly CreateCustomPlugin: string[] = [
		"kafkaconnect:CreateCustomPlugin",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the CreateWorkerConfiguration API call. */
	static readonly CreateWorkerConfiguration: string[] = [
		"kafkaconnect:CreateWorkerConfiguration",
		"kafkaconnect:TagResource",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["kafkaconnect:DeleteConnector"];
	/** IAM actions required for the DeleteCustomPlugin API call. */
	static readonly DeleteCustomPlugin: string[] = [
		"kafkaconnect:DeleteCustomPlugin",
	];
	/** IAM actions required for the DeleteWorkerConfiguration API call. */
	static readonly DeleteWorkerConfiguration: string[] = [
		"kafkaconnect:DeleteWorkerConfiguration",
	];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DescribeConnector: string[] = [
		"kafkaconnect:DescribeConnector",
	];
	/** IAM actions required for the DescribeConnectorOperation API call. */
	static readonly DescribeConnectorOperation: string[] = [
		"kafkaconnect:DescribeConnector",
		"kafkaconnect:DescribeConnectorOperation",
	];
	/** IAM actions required for the DescribeCustomPlugin API call. */
	static readonly DescribeCustomPlugin: string[] = [
		"kafkaconnect:DescribeCustomPlugin",
	];
	/** IAM actions required for the DescribeWorkerConfiguration API call. */
	static readonly DescribeWorkerConfiguration: string[] = [
		"kafkaconnect:DescribeWorkerConfiguration",
	];
	/** IAM actions required for the ListConnectorOperations API call. */
	static readonly ListConnectorOperations: string[] = [
		"kafkaconnect:ListConnectorOperations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["kafkaconnect:ListConnectors"];
	/** IAM actions required for the ListCustomPlugins API call. */
	static readonly ListCustomPlugins: string[] = [
		"kafkaconnect:ListCustomPlugins",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kafkaconnect:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkerConfigurations API call. */
	static readonly ListWorkerConfigurations: string[] = [
		"kafkaconnect:ListWorkerConfigurations",
	];
	/** IAM actions required for the RestartConnector API call. */
	static readonly RestartConnector: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kafkaconnect:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kafkaconnect:UntagResource"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UpdateConnector: string[] = ["kafkaconnect:UpdateConnector"];
}

/**
 * Condition key constants and builders for kafkaconnect.
 */
export class KafkaconnectConditions {
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
