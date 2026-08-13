// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kafka.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kafka service.
 */
export class KafkaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kafka";

	/** [Write] kafka:BatchAssociateScramSecret */
	static readonly BATCH_ASSOCIATE_SCRAM_SECRET =
		"kafka:BatchAssociateScramSecret";
	/** [Write] kafka:BatchDisassociateScramSecret */
	static readonly BATCH_DISASSOCIATE_SCRAM_SECRET =
		"kafka:BatchDisassociateScramSecret";
	/** [Write] kafka:CreateChannel */
	static readonly CREATE_CHANNEL = "kafka:CreateChannel";
	/** [Write] kafka:CreateCluster */
	static readonly CREATE_CLUSTER = "kafka:CreateCluster";
	/** [Write] kafka:CreateClusterV2 */
	static readonly CREATE_CLUSTER_V2 = "kafka:CreateClusterV2";
	/** [Write] kafka:CreateConfiguration */
	static readonly CREATE_CONFIGURATION = "kafka:CreateConfiguration";
	/** [Write] kafka:CreateReplicator */
	static readonly CREATE_REPLICATOR = "kafka:CreateReplicator";
	/** [Write] kafka:CreateTopic */
	static readonly CREATE_TOPIC = "kafka:CreateTopic";
	/** [Write] kafka:CreateVpcConnection */
	static readonly CREATE_VPC_CONNECTION = "kafka:CreateVpcConnection";
	/** [Write] kafka:DeleteChannel */
	static readonly DELETE_CHANNEL = "kafka:DeleteChannel";
	/** [Write] kafka:DeleteCluster */
	static readonly DELETE_CLUSTER = "kafka:DeleteCluster";
	/** [Write] kafka:DeleteClusterPolicy */
	static readonly DELETE_CLUSTER_POLICY = "kafka:DeleteClusterPolicy";
	/** [Write] kafka:DeleteConfiguration */
	static readonly DELETE_CONFIGURATION = "kafka:DeleteConfiguration";
	/** [Write] kafka:DeleteReplicator */
	static readonly DELETE_REPLICATOR = "kafka:DeleteReplicator";
	/** [Write] kafka:DeleteTopic */
	static readonly DELETE_TOPIC = "kafka:DeleteTopic";
	/** [Write] kafka:DeleteVpcConnection */
	static readonly DELETE_VPC_CONNECTION = "kafka:DeleteVpcConnection";
	/** [Read] kafka:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "kafka:DescribeChannel";
	/** [Read] kafka:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "kafka:DescribeCluster";
	/** [Read] kafka:DescribeClusterOperation */
	static readonly DESCRIBE_CLUSTER_OPERATION = "kafka:DescribeClusterOperation";
	/** [Read] kafka:DescribeClusterOperationV2 */
	static readonly DESCRIBE_CLUSTER_OPERATION_V2 =
		"kafka:DescribeClusterOperationV2";
	/** [Read] kafka:DescribeClusterV2 */
	static readonly DESCRIBE_CLUSTER_V2 = "kafka:DescribeClusterV2";
	/** [Read] kafka:DescribeConfiguration */
	static readonly DESCRIBE_CONFIGURATION = "kafka:DescribeConfiguration";
	/** [Read] kafka:DescribeConfigurationRevision */
	static readonly DESCRIBE_CONFIGURATION_REVISION =
		"kafka:DescribeConfigurationRevision";
	/** [Read] kafka:DescribeReplicator */
	static readonly DESCRIBE_REPLICATOR = "kafka:DescribeReplicator";
	/** [Read] kafka:DescribeTopic */
	static readonly DESCRIBE_TOPIC = "kafka:DescribeTopic";
	/** [Read] kafka:DescribeTopicPartitions */
	static readonly DESCRIBE_TOPIC_PARTITIONS = "kafka:DescribeTopicPartitions";
	/** [Read] kafka:DescribeVpcConnection */
	static readonly DESCRIBE_VPC_CONNECTION = "kafka:DescribeVpcConnection";
	/** [Read] kafka:GetBootstrapBrokers */
	static readonly GET_BOOTSTRAP_BROKERS = "kafka:GetBootstrapBrokers";
	/** [Read] kafka:GetClusterPolicy */
	static readonly GET_CLUSTER_POLICY = "kafka:GetClusterPolicy";
	/** [List] kafka:GetCompatibleKafkaVersions */
	static readonly GET_COMPATIBLE_KAFKA_VERSIONS =
		"kafka:GetCompatibleKafkaVersions";
	/** [List] kafka:ListChannels */
	static readonly LIST_CHANNELS = "kafka:ListChannels";
	/** [List] kafka:ListClientVpcConnections */
	static readonly LIST_CLIENT_VPC_CONNECTIONS =
		"kafka:ListClientVpcConnections";
	/** [List] kafka:ListClusterOperations */
	static readonly LIST_CLUSTER_OPERATIONS = "kafka:ListClusterOperations";
	/** [List] kafka:ListClusterOperationsV2 */
	static readonly LIST_CLUSTER_OPERATIONS_V2 = "kafka:ListClusterOperationsV2";
	/** [List] kafka:ListClusters */
	static readonly LIST_CLUSTERS = "kafka:ListClusters";
	/** [List] kafka:ListClustersV2 */
	static readonly LIST_CLUSTERS_V2 = "kafka:ListClustersV2";
	/** [List] kafka:ListConfigurationRevisions */
	static readonly LIST_CONFIGURATION_REVISIONS =
		"kafka:ListConfigurationRevisions";
	/** [List] kafka:ListConfigurations */
	static readonly LIST_CONFIGURATIONS = "kafka:ListConfigurations";
	/** [List] kafka:ListKafkaVersions */
	static readonly LIST_KAFKA_VERSIONS = "kafka:ListKafkaVersions";
	/** [List] kafka:ListNodes */
	static readonly LIST_NODES = "kafka:ListNodes";
	/** [List] kafka:ListReplicators */
	static readonly LIST_REPLICATORS = "kafka:ListReplicators";
	/** [List] kafka:ListScramSecrets */
	static readonly LIST_SCRAM_SECRETS = "kafka:ListScramSecrets";
	/** [Read] kafka:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kafka:ListTagsForResource";
	/** [List] kafka:ListTopics */
	static readonly LIST_TOPICS = "kafka:ListTopics";
	/** [List] kafka:ListVpcConnections */
	static readonly LIST_VPC_CONNECTIONS = "kafka:ListVpcConnections";
	/** [Write] kafka:PutClusterPolicy */
	static readonly PUT_CLUSTER_POLICY = "kafka:PutClusterPolicy";
	/** [Write] kafka:RebootBroker */
	static readonly REBOOT_BROKER = "kafka:RebootBroker";
	/** [Write] kafka:RejectClientVpcConnection */
	static readonly REJECT_CLIENT_VPC_CONNECTION =
		"kafka:RejectClientVpcConnection";
	/** [Tagging] kafka:TagResource */
	static readonly TAG_RESOURCE = "kafka:TagResource";
	/** [Tagging] kafka:UntagResource */
	static readonly UNTAG_RESOURCE = "kafka:UntagResource";
	/** [Write] kafka:UpdateBrokerCount */
	static readonly UPDATE_BROKER_COUNT = "kafka:UpdateBrokerCount";
	/** [Write] kafka:UpdateBrokerStorage */
	static readonly UPDATE_BROKER_STORAGE = "kafka:UpdateBrokerStorage";
	/** [Write] kafka:UpdateBrokerType */
	static readonly UPDATE_BROKER_TYPE = "kafka:UpdateBrokerType";
	/** [Write] kafka:UpdateChannel */
	static readonly UPDATE_CHANNEL = "kafka:UpdateChannel";
	/** [Write] kafka:UpdateClusterConfiguration */
	static readonly UPDATE_CLUSTER_CONFIGURATION =
		"kafka:UpdateClusterConfiguration";
	/** [Write] kafka:UpdateClusterKafkaVersion */
	static readonly UPDATE_CLUSTER_KAFKA_VERSION =
		"kafka:UpdateClusterKafkaVersion";
	/** [Write] kafka:UpdateConfiguration */
	static readonly UPDATE_CONFIGURATION = "kafka:UpdateConfiguration";
	/** [Write] kafka:UpdateConnectivity */
	static readonly UPDATE_CONNECTIVITY = "kafka:UpdateConnectivity";
	/** [Write] kafka:UpdateMonitoring */
	static readonly UPDATE_MONITORING = "kafka:UpdateMonitoring";
	/** [Write] kafka:UpdateRebalancing */
	static readonly UPDATE_REBALANCING = "kafka:UpdateRebalancing";
	/** [Write] kafka:UpdateReplicationInfo */
	static readonly UPDATE_REPLICATION_INFO = "kafka:UpdateReplicationInfo";
	/** [Write] kafka:UpdateSecurity */
	static readonly UPDATE_SECURITY = "kafka:UpdateSecurity";
	/** [Write] kafka:UpdateStorage */
	static readonly UPDATE_STORAGE = "kafka:UpdateStorage";
	/** [Write] kafka:UpdateTopic */
	static readonly UPDATE_TOPIC = "kafka:UpdateTopic";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KafkaActions.DESCRIBE_CHANNEL,
		KafkaActions.DESCRIBE_CLUSTER,
		KafkaActions.DESCRIBE_CLUSTER_OPERATION,
		KafkaActions.DESCRIBE_CLUSTER_OPERATION_V2,
		KafkaActions.DESCRIBE_CLUSTER_V2,
		KafkaActions.DESCRIBE_CONFIGURATION,
		KafkaActions.DESCRIBE_CONFIGURATION_REVISION,
		KafkaActions.DESCRIBE_REPLICATOR,
		KafkaActions.DESCRIBE_TOPIC,
		KafkaActions.DESCRIBE_TOPIC_PARTITIONS,
		KafkaActions.DESCRIBE_VPC_CONNECTION,
		KafkaActions.GET_BOOTSTRAP_BROKERS,
		KafkaActions.GET_CLUSTER_POLICY,
		KafkaActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KafkaActions.BATCH_ASSOCIATE_SCRAM_SECRET,
		KafkaActions.BATCH_DISASSOCIATE_SCRAM_SECRET,
		KafkaActions.CREATE_CHANNEL,
		KafkaActions.CREATE_CLUSTER,
		KafkaActions.CREATE_CLUSTER_V2,
		KafkaActions.CREATE_CONFIGURATION,
		KafkaActions.CREATE_REPLICATOR,
		KafkaActions.CREATE_TOPIC,
		KafkaActions.CREATE_VPC_CONNECTION,
		KafkaActions.DELETE_CHANNEL,
		KafkaActions.DELETE_CLUSTER,
		KafkaActions.DELETE_CLUSTER_POLICY,
		KafkaActions.DELETE_CONFIGURATION,
		KafkaActions.DELETE_REPLICATOR,
		KafkaActions.DELETE_TOPIC,
		KafkaActions.DELETE_VPC_CONNECTION,
		KafkaActions.PUT_CLUSTER_POLICY,
		KafkaActions.REBOOT_BROKER,
		KafkaActions.REJECT_CLIENT_VPC_CONNECTION,
		KafkaActions.UPDATE_BROKER_COUNT,
		KafkaActions.UPDATE_BROKER_STORAGE,
		KafkaActions.UPDATE_BROKER_TYPE,
		KafkaActions.UPDATE_CHANNEL,
		KafkaActions.UPDATE_CLUSTER_CONFIGURATION,
		KafkaActions.UPDATE_CLUSTER_KAFKA_VERSION,
		KafkaActions.UPDATE_CONFIGURATION,
		KafkaActions.UPDATE_CONNECTIVITY,
		KafkaActions.UPDATE_MONITORING,
		KafkaActions.UPDATE_REBALANCING,
		KafkaActions.UPDATE_REPLICATION_INFO,
		KafkaActions.UPDATE_SECURITY,
		KafkaActions.UPDATE_STORAGE,
		KafkaActions.UPDATE_TOPIC,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KafkaActions.GET_COMPATIBLE_KAFKA_VERSIONS,
		KafkaActions.LIST_CHANNELS,
		KafkaActions.LIST_CLIENT_VPC_CONNECTIONS,
		KafkaActions.LIST_CLUSTER_OPERATIONS,
		KafkaActions.LIST_CLUSTER_OPERATIONS_V2,
		KafkaActions.LIST_CLUSTERS,
		KafkaActions.LIST_CLUSTERS_V2,
		KafkaActions.LIST_CONFIGURATION_REVISIONS,
		KafkaActions.LIST_CONFIGURATIONS,
		KafkaActions.LIST_KAFKA_VERSIONS,
		KafkaActions.LIST_NODES,
		KafkaActions.LIST_REPLICATORS,
		KafkaActions.LIST_SCRAM_SECRETS,
		KafkaActions.LIST_TOPICS,
		KafkaActions.LIST_VPC_CONNECTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KafkaActions.TAG_RESOURCE,
		KafkaActions.UNTAG_RESOURCE,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):channel/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<channelName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const ConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):configuration/(?<configurationName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):group/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<groupName>[^:/?]+)$",
);
const ReplicatorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):replicator/(?<replicatorName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):topic/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<topicName>[^:/?]+)$",
);
const TransactionalIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):transactional-id/(?<clusterName>[^:/?]+)/(?<clusterUuid>[^:/?]+)/(?<transactionalId>[^:/?]+)$",
);
const VPCConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<vpcOwnerAccount>[^:/?]+):vpc-connection/(?<clusterOwnerAccount>[^:/?]+)/(?<clusterName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kafka resources.
 */
export class KafkaResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The ClusterUuid component of the ARN. */
		readonly clusterUuid: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The Uuid component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.clusterName}/${props.clusterUuid}/${props.channelName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		clusterUuid: string;
		channelName: string;
		uuid: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			clusterUuid: match.groups!.clusterUuid,
			channelName: match.groups!.channelName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The Uuid component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}/${props.uuid}`;
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
		uuid: string;
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
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: {
		/** The ConfigurationName component of the ARN. */
		readonly configurationName: string;
		/** The Uuid component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:configuration/${props.configurationName}/${props.uuid}`;
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
		configurationName: string;
		uuid: string;
	} {
		const match = ConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationName: match.groups!.configurationName,
			uuid: match.groups!.uuid,
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
	 * Builds an ARN for the replicator resource.
	 */
	static replicator(props: {
		/** The ReplicatorName component of the ARN. */
		readonly replicatorName: string;
		/** The Uuid component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.account ?? "*"}:replicator/${props.replicatorName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the replicator resource.
	 */
	static isValidReplicatorArn(arn: string): boolean {
		return ReplicatorArnRegex.test(arn);
	}

	/**
	 * Parses a replicator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicatorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		replicatorName: string;
		uuid: string;
	} {
		const match = ReplicatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid replicator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			replicatorName: match.groups!.replicatorName,
			uuid: match.groups!.uuid,
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

	/**
	 * Builds an ARN for the vpc-connection resource.
	 */
	static vpcConnection(props: {
		/** The VpcOwnerAccount component of the ARN. */
		readonly vpcOwnerAccount: string;
		/** The ClusterOwnerAccount component of the ARN. */
		readonly clusterOwnerAccount: string;
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The Uuid component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kafka:${props.region ?? "*"}:${props.vpcOwnerAccount}:vpc-connection/${props.clusterOwnerAccount}/${props.clusterName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpc-connection resource.
	 */
	static isValidVPCConnectionArn(arn: string): boolean {
		return VPCConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a vpc-connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcOwnerAccount: string;
		clusterOwnerAccount: string;
		clusterName: string;
		uuid: string;
	} {
		const match = VPCConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpc-connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcOwnerAccount: match.groups!.vpcOwnerAccount,
			clusterOwnerAccount: match.groups!.clusterOwnerAccount,
			clusterName: match.groups!.clusterName,
			uuid: match.groups!.uuid,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kafka.
 */
export class KafkaOperations {
	/** IAM actions required for the BatchAssociateScramSecret API call. */
	static readonly BATCH_ASSOCIATE_SCRAM_SECRET: string[] = [
		"kafka:BatchAssociateScramSecret",
	];
	/** IAM actions required for the BatchDisassociateScramSecret API call. */
	static readonly BATCH_DISASSOCIATE_SCRAM_SECRET: string[] = [
		"kafka:BatchDisassociateScramSecret",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"kafka:CreateChannel",
		"iam:PassRole",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"kafka:CreateCluster",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateClusterV2 API call. */
	static readonly CREATE_CLUSTER_V2: string[] = [
		"kafka:CreateClusterV2",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CREATE_CONFIGURATION: string[] = [
		"kafka:CreateConfiguration",
	];
	/** IAM actions required for the CreateReplicator API call. */
	static readonly CREATE_REPLICATOR: string[] = [
		"kafka:CreateReplicator",
		"kafka:DescribeClusterV2",
		"kafka:GetBootstrapBrokers",
		"iam:PassRole",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateTopic API call. */
	static readonly CREATE_TOPIC: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:CreateTopic",
	];
	/** IAM actions required for the CreateVpcConnection API call. */
	static readonly CREATE_VPC_CONNECTION: string[] = [
		"kafka:CreateVpcConnection",
		"kafka:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["kafka:DeleteChannel"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["kafka:DeleteCluster"];
	/** IAM actions required for the DeleteClusterPolicy API call. */
	static readonly DELETE_CLUSTER_POLICY: string[] = [
		"kafka:DeleteClusterPolicy",
	];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DELETE_CONFIGURATION: string[] = [
		"kafka:DeleteConfiguration",
	];
	/** IAM actions required for the DeleteReplicator API call. */
	static readonly DELETE_REPLICATOR: string[] = ["kafka:DeleteReplicator"];
	/** IAM actions required for the DeleteTopic API call. */
	static readonly DELETE_TOPIC: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DeleteTopic",
		"kafka-cluster:DescribeTopic",
	];
	/** IAM actions required for the DeleteVpcConnection API call. */
	static readonly DELETE_VPC_CONNECTION: string[] = [
		"kafka:DeleteVpcConnection",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DESCRIBE_CHANNEL: string[] = ["kafka:DescribeChannel"];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = ["kafka:DescribeCluster"];
	/** IAM actions required for the DescribeClusterOperation API call. */
	static readonly DESCRIBE_CLUSTER_OPERATION: string[] = [
		"kafka:DescribeClusterOperation",
	];
	/** IAM actions required for the DescribeClusterOperationV2 API call. */
	static readonly DESCRIBE_CLUSTER_OPERATION_V2: string[] = [
		"kafka:DescribeClusterOperationV2",
	];
	/** IAM actions required for the DescribeClusterV2 API call. */
	static readonly DESCRIBE_CLUSTER_V2: string[] = ["kafka:DescribeClusterV2"];
	/** IAM actions required for the DescribeConfiguration API call. */
	static readonly DESCRIBE_CONFIGURATION: string[] = [
		"kafka:DescribeConfiguration",
	];
	/** IAM actions required for the DescribeConfigurationRevision API call. */
	static readonly DESCRIBE_CONFIGURATION_REVISION: string[] = [
		"kafka:DescribeConfigurationRevision",
	];
	/** IAM actions required for the DescribeReplicator API call. */
	static readonly DESCRIBE_REPLICATOR: string[] = [
		"kafka:DescribeReplicator",
		"kafka:ListTagsForResource",
	];
	/** IAM actions required for the DescribeTopic API call. */
	static readonly DESCRIBE_TOPIC: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
		"kafka-cluster:DescribeTopicDynamicConfiguration",
	];
	/** IAM actions required for the DescribeTopicPartitions API call. */
	static readonly DESCRIBE_TOPIC_PARTITIONS: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
		"kafka-cluster:DescribeTopicDynamicConfiguration",
	];
	/** IAM actions required for the DescribeVpcConnection API call. */
	static readonly DESCRIBE_VPC_CONNECTION: string[] = [
		"kafka:DescribeVpcConnection",
	];
	/** IAM actions required for the GetBootstrapBrokers API call. */
	static readonly GET_BOOTSTRAP_BROKERS: string[] = [
		"kafka:GetBootstrapBrokers",
	];
	/** IAM actions required for the GetClusterPolicy API call. */
	static readonly GET_CLUSTER_POLICY: string[] = ["kafka:GetClusterPolicy"];
	/** IAM actions required for the GetCompatibleKafkaVersions API call. */
	static readonly GET_COMPATIBLE_KAFKA_VERSIONS: string[] = [
		"kafka:GetCompatibleKafkaVersions",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["kafka:ListChannels"];
	/** IAM actions required for the ListClientVpcConnections API call. */
	static readonly LIST_CLIENT_VPC_CONNECTIONS: string[] = [
		"kafka:ListClientVpcConnections",
	];
	/** IAM actions required for the ListClusterOperations API call. */
	static readonly LIST_CLUSTER_OPERATIONS: string[] = [
		"kafka:ListClusterOperations",
	];
	/** IAM actions required for the ListClusterOperationsV2 API call. */
	static readonly LIST_CLUSTER_OPERATIONS_V2: string[] = [
		"kafka:ListClusterOperationsV2",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["kafka:ListClusters"];
	/** IAM actions required for the ListClustersV2 API call. */
	static readonly LIST_CLUSTERS_V2: string[] = ["kafka:ListClustersV2"];
	/** IAM actions required for the ListConfigurationRevisions API call. */
	static readonly LIST_CONFIGURATION_REVISIONS: string[] = [
		"kafka:ListConfigurationRevisions",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly LIST_CONFIGURATIONS: string[] = ["kafka:ListConfigurations"];
	/** IAM actions required for the ListKafkaVersions API call. */
	static readonly LIST_KAFKA_VERSIONS: string[] = ["kafka:ListKafkaVersions"];
	/** IAM actions required for the ListNodes API call. */
	static readonly LIST_NODES: string[] = ["kafka:ListNodes"];
	/** IAM actions required for the ListReplicators API call. */
	static readonly LIST_REPLICATORS: string[] = ["kafka:ListReplicators"];
	/** IAM actions required for the ListScramSecrets API call. */
	static readonly LIST_SCRAM_SECRETS: string[] = ["kafka:ListScramSecrets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kafka:ListTagsForResource",
	];
	/** IAM actions required for the ListTopics API call. */
	static readonly LIST_TOPICS: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
	];
	/** IAM actions required for the ListVpcConnections API call. */
	static readonly LIST_VPC_CONNECTIONS: string[] = ["kafka:ListVpcConnections"];
	/** IAM actions required for the PutClusterPolicy API call. */
	static readonly PUT_CLUSTER_POLICY: string[] = ["kafka:PutClusterPolicy"];
	/** IAM actions required for the RebootBroker API call. */
	static readonly REBOOT_BROKER: string[] = ["kafka:RebootBroker"];
	/** IAM actions required for the RejectClientVpcConnection API call. */
	static readonly REJECT_CLIENT_VPC_CONNECTION: string[] = [
		"kafka:RejectClientVpcConnection",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kafka:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kafka:UntagResource"];
	/** IAM actions required for the UpdateBrokerCount API call. */
	static readonly UPDATE_BROKER_COUNT: string[] = ["kafka:UpdateBrokerCount"];
	/** IAM actions required for the UpdateBrokerStorage API call. */
	static readonly UPDATE_BROKER_STORAGE: string[] = [
		"kafka:UpdateBrokerStorage",
	];
	/** IAM actions required for the UpdateBrokerType API call. */
	static readonly UPDATE_BROKER_TYPE: string[] = ["kafka:UpdateBrokerType"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["kafka:UpdateChannel"];
	/** IAM actions required for the UpdateClusterConfiguration API call. */
	static readonly UPDATE_CLUSTER_CONFIGURATION: string[] = [
		"kafka:UpdateClusterConfiguration",
	];
	/** IAM actions required for the UpdateClusterKafkaVersion API call. */
	static readonly UPDATE_CLUSTER_KAFKA_VERSION: string[] = [
		"kafka:UpdateClusterKafkaVersion",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UPDATE_CONFIGURATION: string[] = [
		"kafka:UpdateConfiguration",
	];
	/** IAM actions required for the UpdateConnectivity API call. */
	static readonly UPDATE_CONNECTIVITY: string[] = ["kafka:UpdateConnectivity"];
	/** IAM actions required for the UpdateMonitoring API call. */
	static readonly UPDATE_MONITORING: string[] = ["kafka:UpdateMonitoring"];
	/** IAM actions required for the UpdateRebalancing API call. */
	static readonly UPDATE_REBALANCING: string[] = ["kafka:UpdateRebalancing"];
	/** IAM actions required for the UpdateReplicationInfo API call. */
	static readonly UPDATE_REPLICATION_INFO: string[] = [
		"kafka:UpdateReplicationInfo",
	];
	/** IAM actions required for the UpdateSecurity API call. */
	static readonly UPDATE_SECURITY: string[] = ["kafka:UpdateSecurity"];
	/** IAM actions required for the UpdateStorage API call. */
	static readonly UPDATE_STORAGE: string[] = ["kafka:UpdateStorage"];
	/** IAM actions required for the UpdateTopic API call. */
	static readonly UPDATE_TOPIC: string[] = [
		"kafka-cluster:AlterTopic",
		"kafka-cluster:AlterTopicDynamicConfiguration",
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
	];
}

/**
 * Condition key constants and builders for kafka.
 */
export class KafkaConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterV2 action. */
	static readonly CREATE_CLUSTER_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReplicator action. */
	static readonly CREATE_REPLICATOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcConnection action. */
	static readonly CREATE_VPC_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateConnectivity action. */
	static readonly UPDATE_CONNECTIVITY_CONDITION_KEYS: string[] = [
		"kafka:publicAccessEnabled",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: kafka:publicAccessEnabled (Bool) */
	static readonly PUBLIC_ACCESS_ENABLED = "kafka:publicAccessEnabled";

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
	 * Generates a condition block for `kafka:publicAccessEnabled`.
	 */
	static publicAccessEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "kafka:publicAccessEnabled": value } };
	}
}
