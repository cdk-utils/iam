// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kafka-cluster.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kafka-cluster service.
 */
export class KafkaClusterActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kafka-cluster";

	/** [Write] kafka-cluster:AlterCluster */
	static readonly ALTER_CLUSTER = "kafka-cluster:AlterCluster";
	/** [Write] kafka-cluster:AlterClusterDynamicConfiguration */
	static readonly ALTER_CLUSTER_DYNAMIC_CONFIGURATION =
		"kafka-cluster:AlterClusterDynamicConfiguration";
	/** [Write] kafka-cluster:AlterGroup */
	static readonly ALTER_GROUP = "kafka-cluster:AlterGroup";
	/** [Write] kafka-cluster:AlterTopic */
	static readonly ALTER_TOPIC = "kafka-cluster:AlterTopic";
	/** [Write] kafka-cluster:AlterTopicDynamicConfiguration */
	static readonly ALTER_TOPIC_DYNAMIC_CONFIGURATION =
		"kafka-cluster:AlterTopicDynamicConfiguration";
	/** [Write] kafka-cluster:AlterTransactionalId */
	static readonly ALTER_TRANSACTIONAL_ID = "kafka-cluster:AlterTransactionalId";
	/** [Write] kafka-cluster:Connect */
	static readonly CONNECT = "kafka-cluster:Connect";
	/** [Write] kafka-cluster:CreateTopic */
	static readonly CREATE_TOPIC = "kafka-cluster:CreateTopic";
	/** [Write] kafka-cluster:DeleteGroup */
	static readonly DELETE_GROUP = "kafka-cluster:DeleteGroup";
	/** [Write] kafka-cluster:DeleteTopic */
	static readonly DELETE_TOPIC = "kafka-cluster:DeleteTopic";
	/** [List] kafka-cluster:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "kafka-cluster:DescribeCluster";
	/** [List] kafka-cluster:DescribeClusterDynamicConfiguration */
	static readonly DESCRIBE_CLUSTER_DYNAMIC_CONFIGURATION =
		"kafka-cluster:DescribeClusterDynamicConfiguration";
	/** [List] kafka-cluster:DescribeGroup */
	static readonly DESCRIBE_GROUP = "kafka-cluster:DescribeGroup";
	/** [List] kafka-cluster:DescribeTopic */
	static readonly DESCRIBE_TOPIC = "kafka-cluster:DescribeTopic";
	/** [List] kafka-cluster:DescribeTopicDynamicConfiguration */
	static readonly DESCRIBE_TOPIC_DYNAMIC_CONFIGURATION =
		"kafka-cluster:DescribeTopicDynamicConfiguration";
	/** [List] kafka-cluster:DescribeTransactionalId */
	static readonly DESCRIBE_TRANSACTIONAL_ID =
		"kafka-cluster:DescribeTransactionalId";
	/** [Read] kafka-cluster:ReadData */
	static readonly READ_DATA = "kafka-cluster:ReadData";
	/** [Write] kafka-cluster:WriteData */
	static readonly WRITE_DATA = "kafka-cluster:WriteData";
	/** [Write] kafka-cluster:WriteDataIdempotently */
	static readonly WRITE_DATA_IDEMPOTENTLY =
		"kafka-cluster:WriteDataIdempotently";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [KafkaClusterActions.READ_DATA];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KafkaClusterActions.ALTER_CLUSTER,
		KafkaClusterActions.ALTER_CLUSTER_DYNAMIC_CONFIGURATION,
		KafkaClusterActions.ALTER_GROUP,
		KafkaClusterActions.ALTER_TOPIC,
		KafkaClusterActions.ALTER_TOPIC_DYNAMIC_CONFIGURATION,
		KafkaClusterActions.ALTER_TRANSACTIONAL_ID,
		KafkaClusterActions.CONNECT,
		KafkaClusterActions.CREATE_TOPIC,
		KafkaClusterActions.DELETE_GROUP,
		KafkaClusterActions.DELETE_TOPIC,
		KafkaClusterActions.WRITE_DATA,
		KafkaClusterActions.WRITE_DATA_IDEMPOTENTLY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KafkaClusterActions.DESCRIBE_CLUSTER,
		KafkaClusterActions.DESCRIBE_CLUSTER_DYNAMIC_CONFIGURATION,
		KafkaClusterActions.DESCRIBE_GROUP,
		KafkaClusterActions.DESCRIBE_TOPIC,
		KafkaClusterActions.DESCRIBE_TOPIC_DYNAMIC_CONFIGURATION,
		KafkaClusterActions.DESCRIBE_TRANSACTIONAL_ID,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):group/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<groupName>[^:/?]+)$",
);
const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):topic/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<topicName>[^:/?]+)$",
);
const TransactionalIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):transactional-id/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<transactionalId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kafka-cluster resources.
 */
export class KafkaClusterResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ClusterUuid component of the ARN. */
		readonly clusterUuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}/${props.clusterUuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		clusterUuid: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			clusterUuid: match.groups!.clusterUuid,
		};
	}

	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ClusterUuid component of the ARN. */
		readonly clusterUuid: string;
		/** The GroupName component of the ARN. */
		readonly groupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:group/${props.clusterName}/${props.clusterUuid}/${props.groupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		clusterUuid: string;
		groupName: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			clusterUuid: match.groups!.clusterUuid,
			groupName: match.groups!.groupName,
		};
	}

	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ClusterUuid component of the ARN. */
		readonly clusterUuid: string;
		/** The TopicName component of the ARN. */
		readonly topicName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:topic/${props.clusterName}/${props.clusterUuid}/${props.topicName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topic resource.
	 */
	static isValidTopicArn(arn: string): boolean {
		return TopicArnRegex.test(arn);
	}

	/**
	 * Parses a topic ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		clusterUuid: string;
		topicName: string;
	} {
		const match = TopicArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topic ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			clusterUuid: match.groups!.clusterUuid,
			topicName: match.groups!.topicName,
		};
	}

	/**
	 * Builds an ARN for the transactional-id resource.
	 */
	static transactionalId(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ClusterUuid component of the ARN. */
		readonly clusterUuid: string;
		/** The TransactionalId component of the ARN. */
		readonly transactionalId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:transactional-id/${props.clusterName}/${props.clusterUuid}/${props.transactionalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the transactional-id resource.
	 */
	static isValidTransactionalIdArn(arn: string): boolean {
		return TransactionalIdArnRegex.test(arn);
	}

	/**
	 * Parses a transactional-id ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTransactionalIdArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		clusterUuid: string;
		transactionalId: string;
	} {
		const match = TransactionalIdArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid transactional-id ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			clusterUuid: match.groups!.clusterUuid,
			transactionalId: match.groups!.transactionalId,
		};
	}
}

/**
 * Condition key constants and builders for kafka-cluster.
 */
export class KafkaClusterConditions {
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
