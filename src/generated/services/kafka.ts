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
	static readonly BatchAssociateScramSecret = "kafka:BatchAssociateScramSecret";
	/** [Write] kafka:BatchDisassociateScramSecret */
	static readonly BatchDisassociateScramSecret =
		"kafka:BatchDisassociateScramSecret";
	/** [Write] kafka:CreateChannel */
	static readonly CreateChannel = "kafka:CreateChannel";
	/** [Write] kafka:CreateCluster */
	static readonly CreateCluster = "kafka:CreateCluster";
	/** [Write] kafka:CreateClusterV2 */
	static readonly CreateClusterV2 = "kafka:CreateClusterV2";
	/** [Write] kafka:CreateConfiguration */
	static readonly CreateConfiguration = "kafka:CreateConfiguration";
	/** [Write] kafka:CreateReplicator */
	static readonly CreateReplicator = "kafka:CreateReplicator";
	/** [Write] kafka:CreateTopic */
	static readonly CreateTopic = "kafka:CreateTopic";
	/** [Write] kafka:CreateVpcConnection */
	static readonly CreateVpcConnection = "kafka:CreateVpcConnection";
	/** [Write] kafka:DeleteChannel */
	static readonly DeleteChannel = "kafka:DeleteChannel";
	/** [Write] kafka:DeleteCluster */
	static readonly DeleteCluster = "kafka:DeleteCluster";
	/** [Write] kafka:DeleteClusterPolicy */
	static readonly DeleteClusterPolicy = "kafka:DeleteClusterPolicy";
	/** [Write] kafka:DeleteConfiguration */
	static readonly DeleteConfiguration = "kafka:DeleteConfiguration";
	/** [Write] kafka:DeleteReplicator */
	static readonly DeleteReplicator = "kafka:DeleteReplicator";
	/** [Write] kafka:DeleteTopic */
	static readonly DeleteTopic = "kafka:DeleteTopic";
	/** [Write] kafka:DeleteVpcConnection */
	static readonly DeleteVpcConnection = "kafka:DeleteVpcConnection";
	/** [Read] kafka:DescribeChannel */
	static readonly DescribeChannel = "kafka:DescribeChannel";
	/** [Read] kafka:DescribeCluster */
	static readonly DescribeCluster = "kafka:DescribeCluster";
	/** [Read] kafka:DescribeClusterOperation */
	static readonly DescribeClusterOperation = "kafka:DescribeClusterOperation";
	/** [Read] kafka:DescribeClusterOperationV2 */
	static readonly DescribeClusterOperationV2 =
		"kafka:DescribeClusterOperationV2";
	/** [Read] kafka:DescribeClusterV2 */
	static readonly DescribeClusterV2 = "kafka:DescribeClusterV2";
	/** [Read] kafka:DescribeConfiguration */
	static readonly DescribeConfiguration = "kafka:DescribeConfiguration";
	/** [Read] kafka:DescribeConfigurationRevision */
	static readonly DescribeConfigurationRevision =
		"kafka:DescribeConfigurationRevision";
	/** [Read] kafka:DescribeReplicator */
	static readonly DescribeReplicator = "kafka:DescribeReplicator";
	/** [Read] kafka:DescribeTopic */
	static readonly DescribeTopic = "kafka:DescribeTopic";
	/** [Read] kafka:DescribeTopicPartitions */
	static readonly DescribeTopicPartitions = "kafka:DescribeTopicPartitions";
	/** [Read] kafka:DescribeVpcConnection */
	static readonly DescribeVpcConnection = "kafka:DescribeVpcConnection";
	/** [Read] kafka:GetBootstrapBrokers */
	static readonly actionGetBootstrapBrokers = "kafka:GetBootstrapBrokers";
	/** [Read] kafka:GetClusterPolicy */
	static readonly actionGetClusterPolicy = "kafka:GetClusterPolicy";
	/** [List] kafka:GetCompatibleKafkaVersions */
	static readonly actionGetCompatibleKafkaVersions =
		"kafka:GetCompatibleKafkaVersions";
	/** [List] kafka:ListChannels */
	static readonly ListChannels = "kafka:ListChannels";
	/** [List] kafka:ListClientVpcConnections */
	static readonly ListClientVpcConnections = "kafka:ListClientVpcConnections";
	/** [List] kafka:ListClusterOperations */
	static readonly ListClusterOperations = "kafka:ListClusterOperations";
	/** [List] kafka:ListClusterOperationsV2 */
	static readonly ListClusterOperationsV2 = "kafka:ListClusterOperationsV2";
	/** [List] kafka:ListClusters */
	static readonly ListClusters = "kafka:ListClusters";
	/** [List] kafka:ListClustersV2 */
	static readonly ListClustersV2 = "kafka:ListClustersV2";
	/** [List] kafka:ListConfigurationRevisions */
	static readonly ListConfigurationRevisions =
		"kafka:ListConfigurationRevisions";
	/** [List] kafka:ListConfigurations */
	static readonly ListConfigurations = "kafka:ListConfigurations";
	/** [List] kafka:ListKafkaVersions */
	static readonly ListKafkaVersions = "kafka:ListKafkaVersions";
	/** [List] kafka:ListNodes */
	static readonly ListNodes = "kafka:ListNodes";
	/** [List] kafka:ListReplicators */
	static readonly ListReplicators = "kafka:ListReplicators";
	/** [List] kafka:ListScramSecrets */
	static readonly ListScramSecrets = "kafka:ListScramSecrets";
	/** [Read] kafka:ListTagsForResource */
	static readonly ListTagsForResource = "kafka:ListTagsForResource";
	/** [List] kafka:ListTopics */
	static readonly ListTopics = "kafka:ListTopics";
	/** [List] kafka:ListVpcConnections */
	static readonly ListVpcConnections = "kafka:ListVpcConnections";
	/** [Write] kafka:PutClusterPolicy */
	static readonly PutClusterPolicy = "kafka:PutClusterPolicy";
	/** [Write] kafka:RebootBroker */
	static readonly RebootBroker = "kafka:RebootBroker";
	/** [Write] kafka:RejectClientVpcConnection */
	static readonly RejectClientVpcConnection = "kafka:RejectClientVpcConnection";
	/** [Tagging] kafka:TagResource */
	static readonly TagResource = "kafka:TagResource";
	/** [Tagging] kafka:UntagResource */
	static readonly UntagResource = "kafka:UntagResource";
	/** [Write] kafka:UpdateBrokerCount */
	static readonly UpdateBrokerCount = "kafka:UpdateBrokerCount";
	/** [Write] kafka:UpdateBrokerStorage */
	static readonly UpdateBrokerStorage = "kafka:UpdateBrokerStorage";
	/** [Write] kafka:UpdateBrokerType */
	static readonly UpdateBrokerType = "kafka:UpdateBrokerType";
	/** [Write] kafka:UpdateChannel */
	static readonly UpdateChannel = "kafka:UpdateChannel";
	/** [Write] kafka:UpdateClusterConfiguration */
	static readonly UpdateClusterConfiguration =
		"kafka:UpdateClusterConfiguration";
	/** [Write] kafka:UpdateClusterKafkaVersion */
	static readonly UpdateClusterKafkaVersion = "kafka:UpdateClusterKafkaVersion";
	/** [Write] kafka:UpdateConfiguration */
	static readonly UpdateConfiguration = "kafka:UpdateConfiguration";
	/** [Write] kafka:UpdateConnectivity */
	static readonly UpdateConnectivity = "kafka:UpdateConnectivity";
	/** [Write] kafka:UpdateMonitoring */
	static readonly UpdateMonitoring = "kafka:UpdateMonitoring";
	/** [Write] kafka:UpdateRebalancing */
	static readonly UpdateRebalancing = "kafka:UpdateRebalancing";
	/** [Write] kafka:UpdateReplicationInfo */
	static readonly UpdateReplicationInfo = "kafka:UpdateReplicationInfo";
	/** [Write] kafka:UpdateSecurity */
	static readonly UpdateSecurity = "kafka:UpdateSecurity";
	/** [Write] kafka:UpdateStorage */
	static readonly UpdateStorage = "kafka:UpdateStorage";
	/** [Write] kafka:UpdateTopic */
	static readonly UpdateTopic = "kafka:UpdateTopic";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KafkaActions.DescribeChannel,
		KafkaActions.DescribeCluster,
		KafkaActions.DescribeClusterOperation,
		KafkaActions.DescribeClusterOperationV2,
		KafkaActions.DescribeClusterV2,
		KafkaActions.DescribeConfiguration,
		KafkaActions.DescribeConfigurationRevision,
		KafkaActions.DescribeReplicator,
		KafkaActions.DescribeTopic,
		KafkaActions.DescribeTopicPartitions,
		KafkaActions.DescribeVpcConnection,
		KafkaActions.actionGetBootstrapBrokers,
		KafkaActions.actionGetClusterPolicy,
		KafkaActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KafkaActions.BatchAssociateScramSecret,
		KafkaActions.BatchDisassociateScramSecret,
		KafkaActions.CreateChannel,
		KafkaActions.CreateCluster,
		KafkaActions.CreateClusterV2,
		KafkaActions.CreateConfiguration,
		KafkaActions.CreateReplicator,
		KafkaActions.CreateTopic,
		KafkaActions.CreateVpcConnection,
		KafkaActions.DeleteChannel,
		KafkaActions.DeleteCluster,
		KafkaActions.DeleteClusterPolicy,
		KafkaActions.DeleteConfiguration,
		KafkaActions.DeleteReplicator,
		KafkaActions.DeleteTopic,
		KafkaActions.DeleteVpcConnection,
		KafkaActions.PutClusterPolicy,
		KafkaActions.RebootBroker,
		KafkaActions.RejectClientVpcConnection,
		KafkaActions.UpdateBrokerCount,
		KafkaActions.UpdateBrokerStorage,
		KafkaActions.UpdateBrokerType,
		KafkaActions.UpdateChannel,
		KafkaActions.UpdateClusterConfiguration,
		KafkaActions.UpdateClusterKafkaVersion,
		KafkaActions.UpdateConfiguration,
		KafkaActions.UpdateConnectivity,
		KafkaActions.UpdateMonitoring,
		KafkaActions.UpdateRebalancing,
		KafkaActions.UpdateReplicationInfo,
		KafkaActions.UpdateSecurity,
		KafkaActions.UpdateStorage,
		KafkaActions.UpdateTopic,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KafkaActions.actionGetCompatibleKafkaVersions,
		KafkaActions.ListChannels,
		KafkaActions.ListClientVpcConnections,
		KafkaActions.ListClusterOperations,
		KafkaActions.ListClusterOperationsV2,
		KafkaActions.ListClusters,
		KafkaActions.ListClustersV2,
		KafkaActions.ListConfigurationRevisions,
		KafkaActions.ListConfigurations,
		KafkaActions.ListKafkaVersions,
		KafkaActions.ListNodes,
		KafkaActions.ListReplicators,
		KafkaActions.ListScramSecrets,
		KafkaActions.ListTopics,
		KafkaActions.ListVpcConnections,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KafkaActions.TagResource,
		KafkaActions.UntagResource,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface KafkaChannelArnProps {
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
}

/**
 * Parsed components of a channel ARN.
 */
export interface KafkaChannelArnComponents {
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
	/** The ChannelName component. */
	readonly channelName: string;
	/** The Uuid component. */
	readonly uuid: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface KafkaClusterArnProps {
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
}

/**
 * Parsed components of a cluster ARN.
 */
export interface KafkaClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The Uuid component. */
	readonly uuid: string;
}

/**
 * Properties for building a configuration ARN.
 */
export interface KafkaConfigurationArnProps {
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
}

/**
 * Parsed components of a configuration ARN.
 */
export interface KafkaConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationName component. */
	readonly configurationName: string;
	/** The Uuid component. */
	readonly uuid: string;
}

/**
 * Properties for building a group ARN.
 */
export interface KafkaGroupArnProps {
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
export interface KafkaGroupArnComponents {
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
 * Properties for building a replicator ARN.
 */
export interface KafkaReplicatorArnProps {
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
}

/**
 * Parsed components of a replicator ARN.
 */
export interface KafkaReplicatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReplicatorName component. */
	readonly replicatorName: string;
	/** The Uuid component. */
	readonly uuid: string;
}

/**
 * Properties for building a topic ARN.
 */
export interface KafkaTopicArnProps {
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
export interface KafkaTopicArnComponents {
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
export interface KafkaTransactionalIdArnProps {
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
export interface KafkaTransactionalIdArnComponents {
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

/**
 * Properties for building a vpc-connection ARN.
 */
export interface KafkaVPCConnectionArnProps {
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
}

/**
 * Parsed components of a vpc-connection ARN.
 */
export interface KafkaVPCConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcOwnerAccount component. */
	readonly vpcOwnerAccount: string;
	/** The ClusterOwnerAccount component. */
	readonly clusterOwnerAccount: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The Uuid component. */
	readonly uuid: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<channelName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const ConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):configuration\/(?<configurationName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):group\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<groupName>[^:/?]+)$/;
const ReplicatorArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):replicator\/(?<replicatorName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const TopicArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):topic\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<topicName>[^:/?]+)$/;
const TransactionalIdArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<account>[^:]*):transactional-id\/(?<clusterName>[^:/?]+)\/(?<clusterUuid>[^:/?]+)\/(?<transactionalId>[^:/?]+)$/;
const VPCConnectionArnRegex =
	/^arn:(?<partition>[^:]+):kafka:(?<region>[^:]*):(?<vpcOwnerAccount>[^:/?]+):vpc-connection\/(?<clusterOwnerAccount>[^:/?]+)\/(?<clusterName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kafka resources.
 */
export class KafkaResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: KafkaChannelArnProps): string {
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
	static parseChannelArn(arn: string): KafkaChannelArnComponents {
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
	static cluster(props: KafkaClusterArnProps): string {
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
	static parseClusterArn(arn: string): KafkaClusterArnComponents {
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
	static configuration(props: KafkaConfigurationArnProps): string {
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
	static parseConfigurationArn(arn: string): KafkaConfigurationArnComponents {
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
	static group(props: KafkaGroupArnProps): string {
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
	static parseGroupArn(arn: string): KafkaGroupArnComponents {
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
	static replicator(props: KafkaReplicatorArnProps): string {
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
	static parseReplicatorArn(arn: string): KafkaReplicatorArnComponents {
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
	static topic(props: KafkaTopicArnProps): string {
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
	static parseTopicArn(arn: string): KafkaTopicArnComponents {
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
	static transactionalId(props: KafkaTransactionalIdArnProps): string {
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
	): KafkaTransactionalIdArnComponents {
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
	static vpcConnection(props: KafkaVPCConnectionArnProps): string {
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
	static parseVPCConnectionArn(arn: string): KafkaVPCConnectionArnComponents {
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
	static readonly BatchAssociateScramSecret: string[] = [
		"kafka:BatchAssociateScramSecret",
	];
	/** IAM actions required for the BatchDisassociateScramSecret API call. */
	static readonly BatchDisassociateScramSecret: string[] = [
		"kafka:BatchDisassociateScramSecret",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"kafka:CreateChannel",
		"iam:PassRole",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"kafka:CreateCluster",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateClusterV2 API call. */
	static readonly CreateClusterV2: string[] = [
		"kafka:CreateClusterV2",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateConfiguration API call. */
	static readonly CreateConfiguration: string[] = ["kafka:CreateConfiguration"];
	/** IAM actions required for the CreateReplicator API call. */
	static readonly CreateReplicator: string[] = [
		"kafka:CreateReplicator",
		"kafka:DescribeClusterV2",
		"kafka:GetBootstrapBrokers",
		"iam:PassRole",
		"kafka:TagResource",
	];
	/** IAM actions required for the CreateTopic API call. */
	static readonly CreateTopic: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:CreateTopic",
	];
	/** IAM actions required for the CreateVpcConnection API call. */
	static readonly CreateVpcConnection: string[] = [
		"kafka:CreateVpcConnection",
		"kafka:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["kafka:DeleteChannel"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["kafka:DeleteCluster"];
	/** IAM actions required for the DeleteClusterPolicy API call. */
	static readonly DeleteClusterPolicy: string[] = ["kafka:DeleteClusterPolicy"];
	/** IAM actions required for the DeleteConfiguration API call. */
	static readonly DeleteConfiguration: string[] = ["kafka:DeleteConfiguration"];
	/** IAM actions required for the DeleteReplicator API call. */
	static readonly DeleteReplicator: string[] = ["kafka:DeleteReplicator"];
	/** IAM actions required for the DeleteTopic API call. */
	static readonly DeleteTopic: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DeleteTopic",
		"kafka-cluster:DescribeTopic",
	];
	/** IAM actions required for the DeleteVpcConnection API call. */
	static readonly DeleteVpcConnection: string[] = ["kafka:DeleteVpcConnection"];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DescribeChannel: string[] = ["kafka:DescribeChannel"];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = ["kafka:DescribeCluster"];
	/** IAM actions required for the DescribeClusterOperation API call. */
	static readonly DescribeClusterOperation: string[] = [
		"kafka:DescribeClusterOperation",
	];
	/** IAM actions required for the DescribeClusterOperationV2 API call. */
	static readonly DescribeClusterOperationV2: string[] = [
		"kafka:DescribeClusterOperationV2",
	];
	/** IAM actions required for the DescribeClusterV2 API call. */
	static readonly DescribeClusterV2: string[] = ["kafka:DescribeClusterV2"];
	/** IAM actions required for the DescribeConfiguration API call. */
	static readonly DescribeConfiguration: string[] = [
		"kafka:DescribeConfiguration",
	];
	/** IAM actions required for the DescribeConfigurationRevision API call. */
	static readonly DescribeConfigurationRevision: string[] = [
		"kafka:DescribeConfigurationRevision",
	];
	/** IAM actions required for the DescribeReplicator API call. */
	static readonly DescribeReplicator: string[] = [
		"kafka:DescribeReplicator",
		"kafka:ListTagsForResource",
	];
	/** IAM actions required for the DescribeTopic API call. */
	static readonly DescribeTopic: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
		"kafka-cluster:DescribeTopicDynamicConfiguration",
	];
	/** IAM actions required for the DescribeTopicPartitions API call. */
	static readonly DescribeTopicPartitions: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
		"kafka-cluster:DescribeTopicDynamicConfiguration",
	];
	/** IAM actions required for the DescribeVpcConnection API call. */
	static readonly DescribeVpcConnection: string[] = [
		"kafka:DescribeVpcConnection",
	];
	/** IAM actions required for the GetBootstrapBrokers API call. */
	static readonly opGetBootstrapBrokers: string[] = [
		"kafka:GetBootstrapBrokers",
	];
	/** IAM actions required for the GetClusterPolicy API call. */
	static readonly opGetClusterPolicy: string[] = ["kafka:GetClusterPolicy"];
	/** IAM actions required for the GetCompatibleKafkaVersions API call. */
	static readonly opGetCompatibleKafkaVersions: string[] = [
		"kafka:GetCompatibleKafkaVersions",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["kafka:ListChannels"];
	/** IAM actions required for the ListClientVpcConnections API call. */
	static readonly ListClientVpcConnections: string[] = [
		"kafka:ListClientVpcConnections",
	];
	/** IAM actions required for the ListClusterOperations API call. */
	static readonly ListClusterOperations: string[] = [
		"kafka:ListClusterOperations",
	];
	/** IAM actions required for the ListClusterOperationsV2 API call. */
	static readonly ListClusterOperationsV2: string[] = [
		"kafka:ListClusterOperationsV2",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["kafka:ListClusters"];
	/** IAM actions required for the ListClustersV2 API call. */
	static readonly ListClustersV2: string[] = ["kafka:ListClustersV2"];
	/** IAM actions required for the ListConfigurationRevisions API call. */
	static readonly ListConfigurationRevisions: string[] = [
		"kafka:ListConfigurationRevisions",
	];
	/** IAM actions required for the ListConfigurations API call. */
	static readonly ListConfigurations: string[] = ["kafka:ListConfigurations"];
	/** IAM actions required for the ListKafkaVersions API call. */
	static readonly ListKafkaVersions: string[] = ["kafka:ListKafkaVersions"];
	/** IAM actions required for the ListNodes API call. */
	static readonly ListNodes: string[] = ["kafka:ListNodes"];
	/** IAM actions required for the ListReplicators API call. */
	static readonly ListReplicators: string[] = ["kafka:ListReplicators"];
	/** IAM actions required for the ListScramSecrets API call. */
	static readonly ListScramSecrets: string[] = ["kafka:ListScramSecrets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["kafka:ListTagsForResource"];
	/** IAM actions required for the ListTopics API call. */
	static readonly ListTopics: string[] = [
		"kafka-cluster:Connect",
		"kafka-cluster:DescribeTopic",
	];
	/** IAM actions required for the ListVpcConnections API call. */
	static readonly ListVpcConnections: string[] = ["kafka:ListVpcConnections"];
	/** IAM actions required for the PutClusterPolicy API call. */
	static readonly PutClusterPolicy: string[] = ["kafka:PutClusterPolicy"];
	/** IAM actions required for the RebootBroker API call. */
	static readonly RebootBroker: string[] = ["kafka:RebootBroker"];
	/** IAM actions required for the RejectClientVpcConnection API call. */
	static readonly RejectClientVpcConnection: string[] = [
		"kafka:RejectClientVpcConnection",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kafka:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kafka:UntagResource"];
	/** IAM actions required for the UpdateBrokerCount API call. */
	static readonly UpdateBrokerCount: string[] = ["kafka:UpdateBrokerCount"];
	/** IAM actions required for the UpdateBrokerStorage API call. */
	static readonly UpdateBrokerStorage: string[] = ["kafka:UpdateBrokerStorage"];
	/** IAM actions required for the UpdateBrokerType API call. */
	static readonly UpdateBrokerType: string[] = ["kafka:UpdateBrokerType"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["kafka:UpdateChannel"];
	/** IAM actions required for the UpdateClusterConfiguration API call. */
	static readonly UpdateClusterConfiguration: string[] = [
		"kafka:UpdateClusterConfiguration",
	];
	/** IAM actions required for the UpdateClusterKafkaVersion API call. */
	static readonly UpdateClusterKafkaVersion: string[] = [
		"kafka:UpdateClusterKafkaVersion",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UpdateConfiguration: string[] = ["kafka:UpdateConfiguration"];
	/** IAM actions required for the UpdateConnectivity API call. */
	static readonly UpdateConnectivity: string[] = ["kafka:UpdateConnectivity"];
	/** IAM actions required for the UpdateMonitoring API call. */
	static readonly UpdateMonitoring: string[] = ["kafka:UpdateMonitoring"];
	/** IAM actions required for the UpdateRebalancing API call. */
	static readonly UpdateRebalancing: string[] = ["kafka:UpdateRebalancing"];
	/** IAM actions required for the UpdateReplicationInfo API call. */
	static readonly UpdateReplicationInfo: string[] = [
		"kafka:UpdateReplicationInfo",
	];
	/** IAM actions required for the UpdateSecurity API call. */
	static readonly UpdateSecurity: string[] = ["kafka:UpdateSecurity"];
	/** IAM actions required for the UpdateStorage API call. */
	static readonly UpdateStorage: string[] = ["kafka:UpdateStorage"];
	/** IAM actions required for the UpdateTopic API call. */
	static readonly UpdateTopic: string[] = [
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
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterV2 action. */
	static readonly CreateClusterV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReplicator action. */
	static readonly CreateReplicatorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcConnection action. */
	static readonly CreateVpcConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateConnectivity action. */
	static readonly UpdateConnectivityConditionKeys: string[] = [
		"kafka:publicAccessEnabled",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
