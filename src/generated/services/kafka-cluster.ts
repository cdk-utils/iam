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
	static readonly AlterCluster = "kafka-cluster:AlterCluster";
	/** [Write] kafka-cluster:AlterClusterDynamicConfiguration */
	static readonly AlterClusterDynamicConfiguration =
		"kafka-cluster:AlterClusterDynamicConfiguration";
	/** [Write] kafka-cluster:AlterGroup */
	static readonly AlterGroup = "kafka-cluster:AlterGroup";
	/** [Write] kafka-cluster:AlterTopic */
	static readonly AlterTopic = "kafka-cluster:AlterTopic";
	/** [Write] kafka-cluster:AlterTopicDynamicConfiguration */
	static readonly AlterTopicDynamicConfiguration =
		"kafka-cluster:AlterTopicDynamicConfiguration";
	/** [Write] kafka-cluster:AlterTransactionalId */
	static readonly AlterTransactionalId = "kafka-cluster:AlterTransactionalId";
	/** [Write] kafka-cluster:Connect */
	static readonly Connect = "kafka-cluster:Connect";
	/** [Write] kafka-cluster:CreateTopic */
	static readonly CreateTopic = "kafka-cluster:CreateTopic";
	/** [Write] kafka-cluster:DeleteGroup */
	static readonly DeleteGroup = "kafka-cluster:DeleteGroup";
	/** [Write] kafka-cluster:DeleteTopic */
	static readonly DeleteTopic = "kafka-cluster:DeleteTopic";
	/** [List] kafka-cluster:DescribeCluster */
	static readonly DescribeCluster = "kafka-cluster:DescribeCluster";
	/** [List] kafka-cluster:DescribeClusterDynamicConfiguration */
	static readonly DescribeClusterDynamicConfiguration =
		"kafka-cluster:DescribeClusterDynamicConfiguration";
	/** [List] kafka-cluster:DescribeGroup */
	static readonly DescribeGroup = "kafka-cluster:DescribeGroup";
	/** [List] kafka-cluster:DescribeTopic */
	static readonly DescribeTopic = "kafka-cluster:DescribeTopic";
	/** [List] kafka-cluster:DescribeTopicDynamicConfiguration */
	static readonly DescribeTopicDynamicConfiguration =
		"kafka-cluster:DescribeTopicDynamicConfiguration";
	/** [List] kafka-cluster:DescribeTransactionalId */
	static readonly DescribeTransactionalId =
		"kafka-cluster:DescribeTransactionalId";
	/** [Read] kafka-cluster:ReadData */
	static readonly ReadData = "kafka-cluster:ReadData";
	/** [Write] kafka-cluster:WriteData */
	static readonly WriteData = "kafka-cluster:WriteData";
	/** [Write] kafka-cluster:WriteDataIdempotently */
	static readonly WriteDataIdempotently = "kafka-cluster:WriteDataIdempotently";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [KafkaClusterActions.ReadData];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KafkaClusterActions.AlterCluster,
		KafkaClusterActions.AlterClusterDynamicConfiguration,
		KafkaClusterActions.AlterGroup,
		KafkaClusterActions.AlterTopic,
		KafkaClusterActions.AlterTopicDynamicConfiguration,
		KafkaClusterActions.AlterTransactionalId,
		KafkaClusterActions.Connect,
		KafkaClusterActions.CreateTopic,
		KafkaClusterActions.DeleteGroup,
		KafkaClusterActions.DeleteTopic,
		KafkaClusterActions.WriteData,
		KafkaClusterActions.WriteDataIdempotently,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KafkaClusterActions.DescribeCluster,
		KafkaClusterActions.DescribeClusterDynamicConfiguration,
		KafkaClusterActions.DescribeGroup,
		KafkaClusterActions.DescribeTopic,
		KafkaClusterActions.DescribeTopicDynamicConfiguration,
		KafkaClusterActions.DescribeTransactionalId,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a cluster ARN.
 */
export interface KafkaClusterClusterArnProps {
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
}

/**
 * Parsed components of a cluster ARN.
 */
export interface KafkaClusterClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ClusterUuid component. */
	readonly clusterUuid: string;
}

/**
 * Properties for building a group ARN.
 */
export interface KafkaClusterGroupArnProps {
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
}

/**
 * Parsed components of a group ARN.
 */
export interface KafkaClusterGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ClusterUuid component. */
	readonly clusterUuid: string;
	/** The GroupName component. */
	readonly groupName: string;
}

/**
 * Properties for building a topic ARN.
 */
export interface KafkaClusterTopicArnProps {
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
}

/**
 * Parsed components of a topic ARN.
 */
export interface KafkaClusterTopicArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ClusterUuid component. */
	readonly clusterUuid: string;
	/** The TopicName component. */
	readonly topicName: string;
}

/**
 * Properties for building a transactional-id ARN.
 */
export interface KafkaClusterTransactionalIdArnProps {
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
}

/**
 * Parsed components of a transactional-id ARN.
 */
export interface KafkaClusterTransactionalIdArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The ClusterUuid component. */
	readonly clusterUuid: string;
	/** The TransactionalId component. */
	readonly transactionalId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):group\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<groupName>[^:/?]+)$/;
const TopicArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):topic\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<topicName>[^:/?]+)$/;
const TransactionalIdArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):transactional-id\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<transactionalId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kafka-cluster resources.
 */
export class KafkaClusterResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: KafkaClusterClusterArnProps): string {
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
	static parseClusterArn(arn: string): KafkaClusterClusterArnComponents {
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
	static group(props: KafkaClusterGroupArnProps): string {
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
	static parseGroupArn(arn: string): KafkaClusterGroupArnComponents {
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
	static topic(props: KafkaClusterTopicArnProps): string {
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
	static parseTopicArn(arn: string): KafkaClusterTopicArnComponents {
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
	static transactionalId(props: KafkaClusterTransactionalIdArnProps): string {
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
	static parseTransactionalIdArn(
		arn: string,
	): KafkaClusterTransactionalIdArnComponents {
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
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
