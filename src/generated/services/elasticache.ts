// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elasticache.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elasticache service.
 */
export class ElastiCacheActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elasticache";

	/** [Tagging] elasticache:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "elasticache:AddTagsToResource";
	/** [Write] elasticache:AuthorizeCacheSecurityGroupIngress */
	static readonly AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS =
		"elasticache:AuthorizeCacheSecurityGroupIngress";
	/** [Write] elasticache:BatchApplyUpdateAction */
	static readonly BATCH_APPLY_UPDATE_ACTION =
		"elasticache:BatchApplyUpdateAction";
	/** [Write] elasticache:BatchStopUpdateAction */
	static readonly BATCH_STOP_UPDATE_ACTION =
		"elasticache:BatchStopUpdateAction";
	/** [Write] elasticache:CompleteMigration */
	static readonly COMPLETE_MIGRATION = "elasticache:CompleteMigration";
	/** [Write] elasticache:Connect */
	static readonly CONNECT = "elasticache:Connect";
	/** [Write] elasticache:CopyServerlessCacheSnapshot */
	static readonly COPY_SERVERLESS_CACHE_SNAPSHOT =
		"elasticache:CopyServerlessCacheSnapshot";
	/** [Write] elasticache:CopySnapshot */
	static readonly COPY_SNAPSHOT = "elasticache:CopySnapshot";
	/** [Write] elasticache:CreateCacheCluster */
	static readonly CREATE_CACHE_CLUSTER = "elasticache:CreateCacheCluster";
	/** [Write] elasticache:CreateCacheParameterGroup */
	static readonly CREATE_CACHE_PARAMETER_GROUP =
		"elasticache:CreateCacheParameterGroup";
	/** [Write] elasticache:CreateCacheSecurityGroup */
	static readonly CREATE_CACHE_SECURITY_GROUP =
		"elasticache:CreateCacheSecurityGroup";
	/** [Write] elasticache:CreateCacheSubnetGroup */
	static readonly CREATE_CACHE_SUBNET_GROUP =
		"elasticache:CreateCacheSubnetGroup";
	/** [Write] elasticache:CreateGlobalReplicationGroup */
	static readonly CREATE_GLOBAL_REPLICATION_GROUP =
		"elasticache:CreateGlobalReplicationGroup";
	/** [Write] elasticache:CreateReplicationGroup */
	static readonly CREATE_REPLICATION_GROUP =
		"elasticache:CreateReplicationGroup";
	/** [Write] elasticache:CreateServerlessCache */
	static readonly CREATE_SERVERLESS_CACHE = "elasticache:CreateServerlessCache";
	/** [Write] elasticache:CreateServerlessCacheSnapshot */
	static readonly CREATE_SERVERLESS_CACHE_SNAPSHOT =
		"elasticache:CreateServerlessCacheSnapshot";
	/** [Write] elasticache:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "elasticache:CreateSnapshot";
	/** [Write] elasticache:CreateUser */
	static readonly CREATE_USER = "elasticache:CreateUser";
	/** [Write] elasticache:CreateUserGroup */
	static readonly CREATE_USER_GROUP = "elasticache:CreateUserGroup";
	/** [Write] elasticache:DecreaseNodeGroupsInGlobalReplicationGroup */
	static readonly DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP =
		"elasticache:DecreaseNodeGroupsInGlobalReplicationGroup";
	/** [Write] elasticache:DecreaseReplicaCount */
	static readonly DECREASE_REPLICA_COUNT = "elasticache:DecreaseReplicaCount";
	/** [Write] elasticache:DeleteCacheCluster */
	static readonly DELETE_CACHE_CLUSTER = "elasticache:DeleteCacheCluster";
	/** [Write] elasticache:DeleteCacheParameterGroup */
	static readonly DELETE_CACHE_PARAMETER_GROUP =
		"elasticache:DeleteCacheParameterGroup";
	/** [Write] elasticache:DeleteCacheSecurityGroup */
	static readonly DELETE_CACHE_SECURITY_GROUP =
		"elasticache:DeleteCacheSecurityGroup";
	/** [Write] elasticache:DeleteCacheSubnetGroup */
	static readonly DELETE_CACHE_SUBNET_GROUP =
		"elasticache:DeleteCacheSubnetGroup";
	/** [Write] elasticache:DeleteGlobalReplicationGroup */
	static readonly DELETE_GLOBAL_REPLICATION_GROUP =
		"elasticache:DeleteGlobalReplicationGroup";
	/** [Write] elasticache:DeleteReplicationGroup */
	static readonly DELETE_REPLICATION_GROUP =
		"elasticache:DeleteReplicationGroup";
	/** [Write] elasticache:DeleteServerlessCache */
	static readonly DELETE_SERVERLESS_CACHE = "elasticache:DeleteServerlessCache";
	/** [Write] elasticache:DeleteServerlessCacheSnapshot */
	static readonly DELETE_SERVERLESS_CACHE_SNAPSHOT =
		"elasticache:DeleteServerlessCacheSnapshot";
	/** [Write] elasticache:DeleteSnapshot */
	static readonly DELETE_SNAPSHOT = "elasticache:DeleteSnapshot";
	/** [Write] elasticache:DeleteUser */
	static readonly DELETE_USER = "elasticache:DeleteUser";
	/** [Write] elasticache:DeleteUserGroup */
	static readonly DELETE_USER_GROUP = "elasticache:DeleteUserGroup";
	/** [List] elasticache:DescribeCacheClusters */
	static readonly DESCRIBE_CACHE_CLUSTERS = "elasticache:DescribeCacheClusters";
	/** [List] elasticache:DescribeCacheEngineVersions */
	static readonly DESCRIBE_CACHE_ENGINE_VERSIONS =
		"elasticache:DescribeCacheEngineVersions";
	/** [List] elasticache:DescribeCacheParameterGroups */
	static readonly DESCRIBE_CACHE_PARAMETER_GROUPS =
		"elasticache:DescribeCacheParameterGroups";
	/** [List] elasticache:DescribeCacheParameters */
	static readonly DESCRIBE_CACHE_PARAMETERS =
		"elasticache:DescribeCacheParameters";
	/** [List] elasticache:DescribeCacheSecurityGroups */
	static readonly DESCRIBE_CACHE_SECURITY_GROUPS =
		"elasticache:DescribeCacheSecurityGroups";
	/** [List] elasticache:DescribeCacheSubnetGroups */
	static readonly DESCRIBE_CACHE_SUBNET_GROUPS =
		"elasticache:DescribeCacheSubnetGroups";
	/** [List] elasticache:DescribeEngineDefaultParameters */
	static readonly DESCRIBE_ENGINE_DEFAULT_PARAMETERS =
		"elasticache:DescribeEngineDefaultParameters";
	/** [List] elasticache:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "elasticache:DescribeEvents";
	/** [List] elasticache:DescribeGlobalReplicationGroups */
	static readonly DESCRIBE_GLOBAL_REPLICATION_GROUPS =
		"elasticache:DescribeGlobalReplicationGroups";
	/** [List] elasticache:DescribeReplicationGroups */
	static readonly DESCRIBE_REPLICATION_GROUPS =
		"elasticache:DescribeReplicationGroups";
	/** [List] elasticache:DescribeReservedCacheNodes */
	static readonly DESCRIBE_RESERVED_CACHE_NODES =
		"elasticache:DescribeReservedCacheNodes";
	/** [List] elasticache:DescribeReservedCacheNodesOfferings */
	static readonly DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS =
		"elasticache:DescribeReservedCacheNodesOfferings";
	/** [List] elasticache:DescribeServerlessCacheSnapshots */
	static readonly DESCRIBE_SERVERLESS_CACHE_SNAPSHOTS =
		"elasticache:DescribeServerlessCacheSnapshots";
	/** [List] elasticache:DescribeServerlessCaches */
	static readonly DESCRIBE_SERVERLESS_CACHES =
		"elasticache:DescribeServerlessCaches";
	/** [List] elasticache:DescribeServiceUpdates */
	static readonly DESCRIBE_SERVICE_UPDATES =
		"elasticache:DescribeServiceUpdates";
	/** [List] elasticache:DescribeSnapshots */
	static readonly DESCRIBE_SNAPSHOTS = "elasticache:DescribeSnapshots";
	/** [List] elasticache:DescribeUpdateActions */
	static readonly DESCRIBE_UPDATE_ACTIONS = "elasticache:DescribeUpdateActions";
	/** [List] elasticache:DescribeUserGroups */
	static readonly DESCRIBE_USER_GROUPS = "elasticache:DescribeUserGroups";
	/** [List] elasticache:DescribeUsers */
	static readonly DESCRIBE_USERS = "elasticache:DescribeUsers";
	/** [Write] elasticache:DisassociateGlobalReplicationGroup */
	static readonly DISASSOCIATE_GLOBAL_REPLICATION_GROUP =
		"elasticache:DisassociateGlobalReplicationGroup";
	/** [Write] elasticache:ExportServerlessCacheSnapshot */
	static readonly EXPORT_SERVERLESS_CACHE_SNAPSHOT =
		"elasticache:ExportServerlessCacheSnapshot";
	/** [Write] elasticache:FailoverGlobalReplicationGroup */
	static readonly FAILOVER_GLOBAL_REPLICATION_GROUP =
		"elasticache:FailoverGlobalReplicationGroup";
	/** [Write] elasticache:IncreaseNodeGroupsInGlobalReplicationGroup */
	static readonly INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP =
		"elasticache:IncreaseNodeGroupsInGlobalReplicationGroup";
	/** [Write] elasticache:IncreaseReplicaCount */
	static readonly INCREASE_REPLICA_COUNT = "elasticache:IncreaseReplicaCount";
	/** [Write] elasticache:InterruptClusterAzPower */
	static readonly INTERRUPT_CLUSTER_AZ_POWER =
		"elasticache:InterruptClusterAzPower";
	/** [List] elasticache:ListAllowedNodeTypeModifications */
	static readonly LIST_ALLOWED_NODE_TYPE_MODIFICATIONS =
		"elasticache:ListAllowedNodeTypeModifications";
	/** [Read] elasticache:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "elasticache:ListTagsForResource";
	/** [Write] elasticache:ModifyCacheCluster */
	static readonly MODIFY_CACHE_CLUSTER = "elasticache:ModifyCacheCluster";
	/** [Write] elasticache:ModifyCacheParameterGroup */
	static readonly MODIFY_CACHE_PARAMETER_GROUP =
		"elasticache:ModifyCacheParameterGroup";
	/** [Write] elasticache:ModifyCacheSubnetGroup */
	static readonly MODIFY_CACHE_SUBNET_GROUP =
		"elasticache:ModifyCacheSubnetGroup";
	/** [Write] elasticache:ModifyGlobalReplicationGroup */
	static readonly MODIFY_GLOBAL_REPLICATION_GROUP =
		"elasticache:ModifyGlobalReplicationGroup";
	/** [Write] elasticache:ModifyReplicationGroup */
	static readonly MODIFY_REPLICATION_GROUP =
		"elasticache:ModifyReplicationGroup";
	/** [Write] elasticache:ModifyReplicationGroupShardConfiguration */
	static readonly MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION =
		"elasticache:ModifyReplicationGroupShardConfiguration";
	/** [Write] elasticache:ModifyServerlessCache */
	static readonly MODIFY_SERVERLESS_CACHE = "elasticache:ModifyServerlessCache";
	/** [Write] elasticache:ModifyUser */
	static readonly MODIFY_USER = "elasticache:ModifyUser";
	/** [Write] elasticache:ModifyUserGroup */
	static readonly MODIFY_USER_GROUP = "elasticache:ModifyUserGroup";
	/** [Write] elasticache:PurchaseReservedCacheNodesOffering */
	static readonly PURCHASE_RESERVED_CACHE_NODES_OFFERING =
		"elasticache:PurchaseReservedCacheNodesOffering";
	/** [Write] elasticache:RebalanceSlotsInGlobalReplicationGroup */
	static readonly REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP =
		"elasticache:RebalanceSlotsInGlobalReplicationGroup";
	/** [Write] elasticache:RebootCacheCluster */
	static readonly REBOOT_CACHE_CLUSTER = "elasticache:RebootCacheCluster";
	/** [Tagging] elasticache:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE =
		"elasticache:RemoveTagsFromResource";
	/** [Write] elasticache:ResetCacheParameterGroup */
	static readonly RESET_CACHE_PARAMETER_GROUP =
		"elasticache:ResetCacheParameterGroup";
	/** [Write] elasticache:RevokeCacheSecurityGroupIngress */
	static readonly REVOKE_CACHE_SECURITY_GROUP_INGRESS =
		"elasticache:RevokeCacheSecurityGroupIngress";
	/** [Write] elasticache:StartMigration */
	static readonly START_MIGRATION = "elasticache:StartMigration";
	/** [Write] elasticache:TestFailover */
	static readonly TEST_FAILOVER = "elasticache:TestFailover";
	/** [Write] elasticache:TestMigration */
	static readonly TEST_MIGRATION = "elasticache:TestMigration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElastiCacheActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElastiCacheActions.AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS,
		ElastiCacheActions.BATCH_APPLY_UPDATE_ACTION,
		ElastiCacheActions.BATCH_STOP_UPDATE_ACTION,
		ElastiCacheActions.COMPLETE_MIGRATION,
		ElastiCacheActions.CONNECT,
		ElastiCacheActions.COPY_SERVERLESS_CACHE_SNAPSHOT,
		ElastiCacheActions.COPY_SNAPSHOT,
		ElastiCacheActions.CREATE_CACHE_CLUSTER,
		ElastiCacheActions.CREATE_CACHE_PARAMETER_GROUP,
		ElastiCacheActions.CREATE_CACHE_SECURITY_GROUP,
		ElastiCacheActions.CREATE_CACHE_SUBNET_GROUP,
		ElastiCacheActions.CREATE_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.CREATE_REPLICATION_GROUP,
		ElastiCacheActions.CREATE_SERVERLESS_CACHE,
		ElastiCacheActions.CREATE_SERVERLESS_CACHE_SNAPSHOT,
		ElastiCacheActions.CREATE_SNAPSHOT,
		ElastiCacheActions.CREATE_USER,
		ElastiCacheActions.CREATE_USER_GROUP,
		ElastiCacheActions.DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.DECREASE_REPLICA_COUNT,
		ElastiCacheActions.DELETE_CACHE_CLUSTER,
		ElastiCacheActions.DELETE_CACHE_PARAMETER_GROUP,
		ElastiCacheActions.DELETE_CACHE_SECURITY_GROUP,
		ElastiCacheActions.DELETE_CACHE_SUBNET_GROUP,
		ElastiCacheActions.DELETE_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.DELETE_REPLICATION_GROUP,
		ElastiCacheActions.DELETE_SERVERLESS_CACHE,
		ElastiCacheActions.DELETE_SERVERLESS_CACHE_SNAPSHOT,
		ElastiCacheActions.DELETE_SNAPSHOT,
		ElastiCacheActions.DELETE_USER,
		ElastiCacheActions.DELETE_USER_GROUP,
		ElastiCacheActions.DISASSOCIATE_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.EXPORT_SERVERLESS_CACHE_SNAPSHOT,
		ElastiCacheActions.FAILOVER_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.INCREASE_REPLICA_COUNT,
		ElastiCacheActions.INTERRUPT_CLUSTER_AZ_POWER,
		ElastiCacheActions.MODIFY_CACHE_CLUSTER,
		ElastiCacheActions.MODIFY_CACHE_PARAMETER_GROUP,
		ElastiCacheActions.MODIFY_CACHE_SUBNET_GROUP,
		ElastiCacheActions.MODIFY_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.MODIFY_REPLICATION_GROUP,
		ElastiCacheActions.MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION,
		ElastiCacheActions.MODIFY_SERVERLESS_CACHE,
		ElastiCacheActions.MODIFY_USER,
		ElastiCacheActions.MODIFY_USER_GROUP,
		ElastiCacheActions.PURCHASE_RESERVED_CACHE_NODES_OFFERING,
		ElastiCacheActions.REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP,
		ElastiCacheActions.REBOOT_CACHE_CLUSTER,
		ElastiCacheActions.RESET_CACHE_PARAMETER_GROUP,
		ElastiCacheActions.REVOKE_CACHE_SECURITY_GROUP_INGRESS,
		ElastiCacheActions.START_MIGRATION,
		ElastiCacheActions.TEST_FAILOVER,
		ElastiCacheActions.TEST_MIGRATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElastiCacheActions.DESCRIBE_CACHE_CLUSTERS,
		ElastiCacheActions.DESCRIBE_CACHE_ENGINE_VERSIONS,
		ElastiCacheActions.DESCRIBE_CACHE_PARAMETER_GROUPS,
		ElastiCacheActions.DESCRIBE_CACHE_PARAMETERS,
		ElastiCacheActions.DESCRIBE_CACHE_SECURITY_GROUPS,
		ElastiCacheActions.DESCRIBE_CACHE_SUBNET_GROUPS,
		ElastiCacheActions.DESCRIBE_ENGINE_DEFAULT_PARAMETERS,
		ElastiCacheActions.DESCRIBE_EVENTS,
		ElastiCacheActions.DESCRIBE_GLOBAL_REPLICATION_GROUPS,
		ElastiCacheActions.DESCRIBE_REPLICATION_GROUPS,
		ElastiCacheActions.DESCRIBE_RESERVED_CACHE_NODES,
		ElastiCacheActions.DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS,
		ElastiCacheActions.DESCRIBE_SERVERLESS_CACHE_SNAPSHOTS,
		ElastiCacheActions.DESCRIBE_SERVERLESS_CACHES,
		ElastiCacheActions.DESCRIBE_SERVICE_UPDATES,
		ElastiCacheActions.DESCRIBE_SNAPSHOTS,
		ElastiCacheActions.DESCRIBE_UPDATE_ACTIONS,
		ElastiCacheActions.DESCRIBE_USER_GROUPS,
		ElastiCacheActions.DESCRIBE_USERS,
		ElastiCacheActions.LIST_ALLOWED_NODE_TYPE_MODIFICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElastiCacheActions.ADD_TAGS_TO_RESOURCE,
		ElastiCacheActions.REMOVE_TAGS_FROM_RESOURCE,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<cacheClusterId>[^:/?]+)$",
);
const GlobalreplicationgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache::(?<account>[^:]*):globalreplicationgroup:(?<globalReplicationGroupId>[^:/?]+)$",
);
const ParametergroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):parametergroup:(?<cacheParameterGroupName>[^:/?]+)$",
);
const ReplicationgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):replicationgroup:(?<replicationGroupId>[^:/?]+)$",
);
const ReservedInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):reserved-instance:(?<reservedCacheNodeId>[^:/?]+)$",
);
const SecuritygroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):securitygroup:(?<cacheSecurityGroupName>[^:/?]+)$",
);
const ServerlesscacheArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):serverlesscache:(?<serverlessCacheName>[^:/?]+)$",
);
const ServerlesscachesnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):serverlesscachesnapshot:(?<serverlessCacheSnapshotName>[^:/?]+)$",
);
const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<snapshotName>[^:/?]+)$",
);
const SubnetgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):subnetgroup:(?<cacheSubnetGroupName>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):user:(?<userId>[^:/?]+)$",
);
const UsergroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):usergroup:(?<userGroupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elasticache resources.
 */
export class ElastiCacheResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The CacheClusterId component of the ARN. */
		readonly cacheClusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.cacheClusterId}`;
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
		cacheClusterId: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cacheClusterId: match.groups!.cacheClusterId,
		};
	}

	/**
	 * Builds an ARN for the globalreplicationgroup resource.
	 */
	static globalreplicationgroup(props: {
		/** The GlobalReplicationGroupId component of the ARN. */
		readonly globalReplicationGroupId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache::${props.account ?? "*"}:globalreplicationgroup:${props.globalReplicationGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the globalreplicationgroup resource.
	 */
	static isValidGlobalreplicationgroupArn(arn: string): boolean {
		return GlobalreplicationgroupArnRegex.test(arn);
	}

	/**
	 * Parses a globalreplicationgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGlobalreplicationgroupArn(arn: string): {
		partition: string;
		account: string;
		globalReplicationGroupId: string;
	} {
		const match = GlobalreplicationgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid globalreplicationgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalReplicationGroupId: match.groups!.globalReplicationGroupId,
		};
	}

	/**
	 * Builds an ARN for the parametergroup resource.
	 */
	static parametergroup(props: {
		/** The CacheParameterGroupName component of the ARN. */
		readonly cacheParameterGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:parametergroup:${props.cacheParameterGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the parametergroup resource.
	 */
	static isValidParametergroupArn(arn: string): boolean {
		return ParametergroupArnRegex.test(arn);
	}

	/**
	 * Parses a parametergroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseParametergroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cacheParameterGroupName: string;
	} {
		const match = ParametergroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parametergroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cacheParameterGroupName: match.groups!.cacheParameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the replicationgroup resource.
	 */
	static replicationgroup(props: {
		/** The ReplicationGroupId component of the ARN. */
		readonly replicationGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:replicationgroup:${props.replicationGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the replicationgroup resource.
	 */
	static isValidReplicationgroupArn(arn: string): boolean {
		return ReplicationgroupArnRegex.test(arn);
	}

	/**
	 * Parses a replicationgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		replicationGroupId: string;
	} {
		const match = ReplicationgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid replicationgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			replicationGroupId: match.groups!.replicationGroupId,
		};
	}

	/**
	 * Builds an ARN for the reserved-instance resource.
	 */
	static reservedInstance(props: {
		/** The ReservedCacheNodeId component of the ARN. */
		readonly reservedCacheNodeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:reserved-instance:${props.reservedCacheNodeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reserved-instance resource.
	 */
	static isValidReservedInstanceArn(arn: string): boolean {
		return ReservedInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a reserved-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservedInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reservedCacheNodeId: string;
	} {
		const match = ReservedInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reserved-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reservedCacheNodeId: match.groups!.reservedCacheNodeId,
		};
	}

	/**
	 * Builds an ARN for the securitygroup resource.
	 */
	static securitygroup(props: {
		/** The CacheSecurityGroupName component of the ARN. */
		readonly cacheSecurityGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:securitygroup:${props.cacheSecurityGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securitygroup resource.
	 */
	static isValidSecuritygroupArn(arn: string): boolean {
		return SecuritygroupArnRegex.test(arn);
	}

	/**
	 * Parses a securitygroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecuritygroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cacheSecurityGroupName: string;
	} {
		const match = SecuritygroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid securitygroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cacheSecurityGroupName: match.groups!.cacheSecurityGroupName,
		};
	}

	/**
	 * Builds an ARN for the serverlesscache resource.
	 */
	static serverlesscache(props: {
		/** The ServerlessCacheName component of the ARN. */
		readonly serverlessCacheName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:serverlesscache:${props.serverlessCacheName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the serverlesscache resource.
	 */
	static isValidServerlesscacheArn(arn: string): boolean {
		return ServerlesscacheArnRegex.test(arn);
	}

	/**
	 * Parses a serverlesscache ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServerlesscacheArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverlessCacheName: string;
	} {
		const match = ServerlesscacheArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid serverlesscache ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverlessCacheName: match.groups!.serverlessCacheName,
		};
	}

	/**
	 * Builds an ARN for the serverlesscachesnapshot resource.
	 */
	static serverlesscachesnapshot(props: {
		/** The ServerlessCacheSnapshotName component of the ARN. */
		readonly serverlessCacheSnapshotName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:serverlesscachesnapshot:${props.serverlessCacheSnapshotName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the serverlesscachesnapshot resource.
	 */
	static isValidServerlesscachesnapshotArn(arn: string): boolean {
		return ServerlesscachesnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a serverlesscachesnapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServerlesscachesnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverlessCacheSnapshotName: string;
	} {
		const match = ServerlesscachesnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid serverlesscachesnapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverlessCacheSnapshotName: match.groups!.serverlessCacheSnapshotName,
		};
	}

	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: {
		/** The SnapshotName component of the ARN. */
		readonly snapshotName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:snapshot:${props.snapshotName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot resource.
	 */
	static isValidSnapshotArn(arn: string): boolean {
		return SnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		snapshotName: string;
	} {
		const match = SnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotName: match.groups!.snapshotName,
		};
	}

	/**
	 * Builds an ARN for the subnetgroup resource.
	 */
	static subnetgroup(props: {
		/** The CacheSubnetGroupName component of the ARN. */
		readonly cacheSubnetGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:subnetgroup:${props.cacheSubnetGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subnetgroup resource.
	 */
	static isValidSubnetgroupArn(arn: string): boolean {
		return SubnetgroupArnRegex.test(arn);
	}

	/**
	 * Parses a subnetgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubnetgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cacheSubnetGroupName: string;
	} {
		const match = SubnetgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subnetgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cacheSubnetGroupName: match.groups!.cacheSubnetGroupName,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:user:${props.userId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userId: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userId: match.groups!.userId,
		};
	}

	/**
	 * Builds an ARN for the usergroup resource.
	 */
	static usergroup(props: {
		/** The UserGroupId component of the ARN. */
		readonly userGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticache:${props.region ?? "*"}:${props.account ?? "*"}:usergroup:${props.userGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the usergroup resource.
	 */
	static isValidUsergroupArn(arn: string): boolean {
		return UsergroupArnRegex.test(arn);
	}

	/**
	 * Parses a usergroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsergroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userGroupId: string;
	} {
		const match = UsergroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid usergroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userGroupId: match.groups!.userGroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for elasticache.
 */
export class ElastiCacheOperations {
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = [
		"elasticache:AddTagsToResource",
	];
	/** IAM actions required for the AuthorizeCacheSecurityGroupIngress API call. */
	static readonly AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS: string[] = [
		"elasticache:AuthorizeCacheSecurityGroupIngress",
	];
	/** IAM actions required for the BatchApplyUpdateAction API call. */
	static readonly BATCH_APPLY_UPDATE_ACTION: string[] = [
		"elasticache:BatchApplyUpdateAction",
	];
	/** IAM actions required for the BatchStopUpdateAction API call. */
	static readonly BATCH_STOP_UPDATE_ACTION: string[] = [
		"elasticache:BatchStopUpdateAction",
	];
	/** IAM actions required for the CompleteMigration API call. */
	static readonly COMPLETE_MIGRATION: string[] = [
		"elasticache:CompleteMigration",
	];
	/** IAM actions required for the CopyServerlessCacheSnapshot API call. */
	static readonly COPY_SERVERLESS_CACHE_SNAPSHOT: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CopyServerlessCacheSnapshot",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly COPY_SNAPSHOT: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CopySnapshot",
	];
	/** IAM actions required for the CreateCacheCluster API call. */
	static readonly CREATE_CACHE_CLUSTER: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheCluster",
	];
	/** IAM actions required for the CreateCacheParameterGroup API call. */
	static readonly CREATE_CACHE_PARAMETER_GROUP: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheParameterGroup",
	];
	/** IAM actions required for the CreateCacheSecurityGroup API call. */
	static readonly CREATE_CACHE_SECURITY_GROUP: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheSecurityGroup",
	];
	/** IAM actions required for the CreateCacheSubnetGroup API call. */
	static readonly CREATE_CACHE_SUBNET_GROUP: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheSubnetGroup",
	];
	/** IAM actions required for the CreateGlobalReplicationGroup API call. */
	static readonly CREATE_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:CreateGlobalReplicationGroup",
	];
	/** IAM actions required for the CreateReplicationGroup API call. */
	static readonly CREATE_REPLICATION_GROUP: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateReplicationGroup",
	];
	/** IAM actions required for the CreateServerlessCache API call. */
	static readonly CREATE_SERVERLESS_CACHE: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateServerlessCache",
	];
	/** IAM actions required for the CreateServerlessCacheSnapshot API call. */
	static readonly CREATE_SERVERLESS_CACHE_SNAPSHOT: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateServerlessCacheSnapshot",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CREATE_SNAPSHOT: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateSnapshot",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateUser",
	];
	/** IAM actions required for the CreateUserGroup API call. */
	static readonly CREATE_USER_GROUP: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateUserGroup",
	];
	/** IAM actions required for the DecreaseNodeGroupsInGlobalReplicationGroup API call. */
	static readonly DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:DecreaseNodeGroupsInGlobalReplicationGroup",
	];
	/** IAM actions required for the DecreaseReplicaCount API call. */
	static readonly DECREASE_REPLICA_COUNT: string[] = [
		"elasticache:DecreaseReplicaCount",
	];
	/** IAM actions required for the DeleteCacheCluster API call. */
	static readonly DELETE_CACHE_CLUSTER: string[] = [
		"elasticache:CreateSnapshot",
		"elasticache:DeleteCacheCluster",
	];
	/** IAM actions required for the DeleteCacheParameterGroup API call. */
	static readonly DELETE_CACHE_PARAMETER_GROUP: string[] = [
		"elasticache:DeleteCacheParameterGroup",
	];
	/** IAM actions required for the DeleteCacheSecurityGroup API call. */
	static readonly DELETE_CACHE_SECURITY_GROUP: string[] = [
		"elasticache:DeleteCacheSecurityGroup",
	];
	/** IAM actions required for the DeleteCacheSubnetGroup API call. */
	static readonly DELETE_CACHE_SUBNET_GROUP: string[] = [
		"elasticache:DeleteCacheSubnetGroup",
	];
	/** IAM actions required for the DeleteGlobalReplicationGroup API call. */
	static readonly DELETE_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:DeleteGlobalReplicationGroup",
	];
	/** IAM actions required for the DeleteReplicationGroup API call. */
	static readonly DELETE_REPLICATION_GROUP: string[] = [
		"elasticache:CreateSnapshot",
		"elasticache:DeleteReplicationGroup",
	];
	/** IAM actions required for the DeleteServerlessCache API call. */
	static readonly DELETE_SERVERLESS_CACHE: string[] = [
		"elasticache:CreateServerlessCacheSnapshot",
		"elasticache:DeleteServerlessCache",
	];
	/** IAM actions required for the DeleteServerlessCacheSnapshot API call. */
	static readonly DELETE_SERVERLESS_CACHE_SNAPSHOT: string[] = [
		"elasticache:DeleteServerlessCacheSnapshot",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DELETE_SNAPSHOT: string[] = ["elasticache:DeleteSnapshot"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["elasticache:DeleteUser"];
	/** IAM actions required for the DeleteUserGroup API call. */
	static readonly DELETE_USER_GROUP: string[] = ["elasticache:DeleteUserGroup"];
	/** IAM actions required for the DescribeCacheClusters API call. */
	static readonly DESCRIBE_CACHE_CLUSTERS: string[] = [
		"elasticache:DescribeCacheClusters",
	];
	/** IAM actions required for the DescribeCacheEngineVersions API call. */
	static readonly DESCRIBE_CACHE_ENGINE_VERSIONS: string[] = [
		"elasticache:DescribeCacheEngineVersions",
	];
	/** IAM actions required for the DescribeCacheParameterGroups API call. */
	static readonly DESCRIBE_CACHE_PARAMETER_GROUPS: string[] = [
		"elasticache:DescribeCacheParameterGroups",
	];
	/** IAM actions required for the DescribeCacheParameters API call. */
	static readonly DESCRIBE_CACHE_PARAMETERS: string[] = [
		"elasticache:DescribeCacheParameters",
	];
	/** IAM actions required for the DescribeCacheSecurityGroups API call. */
	static readonly DESCRIBE_CACHE_SECURITY_GROUPS: string[] = [
		"elasticache:DescribeCacheSecurityGroups",
	];
	/** IAM actions required for the DescribeCacheSubnetGroups API call. */
	static readonly DESCRIBE_CACHE_SUBNET_GROUPS: string[] = [
		"elasticache:DescribeCacheSubnetGroups",
	];
	/** IAM actions required for the DescribeEngineDefaultParameters API call. */
	static readonly DESCRIBE_ENGINE_DEFAULT_PARAMETERS: string[] = [
		"elasticache:DescribeEngineDefaultParameters",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["elasticache:DescribeEvents"];
	/** IAM actions required for the DescribeGlobalReplicationGroups API call. */
	static readonly DESCRIBE_GLOBAL_REPLICATION_GROUPS: string[] = [
		"elasticache:DescribeGlobalReplicationGroups",
	];
	/** IAM actions required for the DescribeReplicationGroups API call. */
	static readonly DESCRIBE_REPLICATION_GROUPS: string[] = [
		"elasticache:DescribeReplicationGroups",
	];
	/** IAM actions required for the DescribeReservedCacheNodes API call. */
	static readonly DESCRIBE_RESERVED_CACHE_NODES: string[] = [
		"elasticache:DescribeReservedCacheNodes",
	];
	/** IAM actions required for the DescribeReservedCacheNodesOfferings API call. */
	static readonly DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS: string[] = [
		"elasticache:DescribeReservedCacheNodesOfferings",
	];
	/** IAM actions required for the DescribeServerlessCacheSnapshots API call. */
	static readonly DESCRIBE_SERVERLESS_CACHE_SNAPSHOTS: string[] = [
		"elasticache:DescribeServerlessCacheSnapshots",
	];
	/** IAM actions required for the DescribeServerlessCaches API call. */
	static readonly DESCRIBE_SERVERLESS_CACHES: string[] = [
		"elasticache:DescribeServerlessCaches",
	];
	/** IAM actions required for the DescribeServiceUpdates API call. */
	static readonly DESCRIBE_SERVICE_UPDATES: string[] = [
		"elasticache:DescribeServiceUpdates",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DESCRIBE_SNAPSHOTS: string[] = [
		"elasticache:DescribeSnapshots",
	];
	/** IAM actions required for the DescribeUpdateActions API call. */
	static readonly DESCRIBE_UPDATE_ACTIONS: string[] = [
		"elasticache:DescribeUpdateActions",
	];
	/** IAM actions required for the DescribeUserGroups API call. */
	static readonly DESCRIBE_USER_GROUPS: string[] = [
		"elasticache:DescribeUserGroups",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DESCRIBE_USERS: string[] = ["elasticache:DescribeUsers"];
	/** IAM actions required for the DisassociateGlobalReplicationGroup API call. */
	static readonly DISASSOCIATE_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:DisassociateGlobalReplicationGroup",
	];
	/** IAM actions required for the ExportServerlessCacheSnapshot API call. */
	static readonly EXPORT_SERVERLESS_CACHE_SNAPSHOT: string[] = [
		"elasticache:ExportServerlessCacheSnapshot",
	];
	/** IAM actions required for the FailoverGlobalReplicationGroup API call. */
	static readonly FAILOVER_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:FailoverGlobalReplicationGroup",
	];
	/** IAM actions required for the IncreaseNodeGroupsInGlobalReplicationGroup API call. */
	static readonly INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:IncreaseNodeGroupsInGlobalReplicationGroup",
	];
	/** IAM actions required for the IncreaseReplicaCount API call. */
	static readonly INCREASE_REPLICA_COUNT: string[] = [
		"elasticache:IncreaseReplicaCount",
	];
	/** IAM actions required for the ListAllowedNodeTypeModifications API call. */
	static readonly LIST_ALLOWED_NODE_TYPE_MODIFICATIONS: string[] = [
		"elasticache:ListAllowedNodeTypeModifications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"elasticache:ListTagsForResource",
	];
	/** IAM actions required for the ModifyCacheCluster API call. */
	static readonly MODIFY_CACHE_CLUSTER: string[] = [
		"elasticache:ModifyCacheCluster",
	];
	/** IAM actions required for the ModifyCacheParameterGroup API call. */
	static readonly MODIFY_CACHE_PARAMETER_GROUP: string[] = [
		"elasticache:ModifyCacheParameterGroup",
	];
	/** IAM actions required for the ModifyCacheSubnetGroup API call. */
	static readonly MODIFY_CACHE_SUBNET_GROUP: string[] = [
		"elasticache:ModifyCacheSubnetGroup",
	];
	/** IAM actions required for the ModifyGlobalReplicationGroup API call. */
	static readonly MODIFY_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:ModifyGlobalReplicationGroup",
	];
	/** IAM actions required for the ModifyReplicationGroup API call. */
	static readonly MODIFY_REPLICATION_GROUP: string[] = [
		"elasticache:ModifyReplicationGroup",
	];
	/** IAM actions required for the ModifyReplicationGroupShardConfiguration API call. */
	static readonly MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION: string[] = [
		"elasticache:ModifyReplicationGroupShardConfiguration",
	];
	/** IAM actions required for the ModifyServerlessCache API call. */
	static readonly MODIFY_SERVERLESS_CACHE: string[] = [
		"elasticache:ModifyServerlessCache",
	];
	/** IAM actions required for the ModifyUser API call. */
	static readonly MODIFY_USER: string[] = ["elasticache:ModifyUser"];
	/** IAM actions required for the ModifyUserGroup API call. */
	static readonly MODIFY_USER_GROUP: string[] = ["elasticache:ModifyUserGroup"];
	/** IAM actions required for the PurchaseReservedCacheNodesOffering API call. */
	static readonly PURCHASE_RESERVED_CACHE_NODES_OFFERING: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:PurchaseReservedCacheNodesOffering",
	];
	/** IAM actions required for the RebalanceSlotsInGlobalReplicationGroup API call. */
	static readonly REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP: string[] = [
		"elasticache:RebalanceSlotsInGlobalReplicationGroup",
	];
	/** IAM actions required for the RebootCacheCluster API call. */
	static readonly REBOOT_CACHE_CLUSTER: string[] = [
		"elasticache:RebootCacheCluster",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [
		"elasticache:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetCacheParameterGroup API call. */
	static readonly RESET_CACHE_PARAMETER_GROUP: string[] = [
		"elasticache:ResetCacheParameterGroup",
	];
	/** IAM actions required for the RevokeCacheSecurityGroupIngress API call. */
	static readonly REVOKE_CACHE_SECURITY_GROUP_INGRESS: string[] = [
		"elasticache:RevokeCacheSecurityGroupIngress",
	];
	/** IAM actions required for the StartMigration API call. */
	static readonly START_MIGRATION: string[] = ["elasticache:StartMigration"];
	/** IAM actions required for the TestFailover API call. */
	static readonly TEST_FAILOVER: string[] = ["elasticache:TestFailover"];
	/** IAM actions required for the TestMigration API call. */
	static readonly TEST_MIGRATION: string[] = ["elasticache:TestMigration"];
}

/**
 * Condition key constants and builders for elasticache.
 */
export class ElastiCacheConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AuthorizeCacheSecurityGroupIngress action. */
	static readonly AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchApplyUpdateAction action. */
	static readonly BATCH_APPLY_UPDATE_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchStopUpdateAction action. */
	static readonly BATCH_STOP_UPDATE_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CompleteMigration action. */
	static readonly COMPLETE_MIGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Connect action. */
	static readonly CONNECT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyServerlessCacheSnapshot action. */
	static readonly COPY_SERVERLESS_CACHE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CopySnapshot action. */
	static readonly COPY_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:KmsKeyId",
	];
	/** Condition keys applicable to the CreateCacheCluster action. */
	static readonly CREATE_CACHE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateCacheParameterGroup action. */
	static readonly CREATE_CACHE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the CreateCacheSecurityGroup action. */
	static readonly CREATE_CACHE_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCacheSubnetGroup action. */
	static readonly CREATE_CACHE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGlobalReplicationGroup action. */
	static readonly CREATE_GLOBAL_REPLICATION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationGroup action. */
	static readonly CREATE_REPLICATION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateServerlessCache action. */
	static readonly CREATE_SERVERLESS_CACHE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServerlessCacheSnapshot action. */
	static readonly CREATE_SERVERLESS_CACHE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CREATE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:UserAuthenticationMode",
	];
	/** Condition keys applicable to the CreateUserGroup action. */
	static readonly CREATE_USER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DecreaseNodeGroupsInGlobalReplicationGroup action. */
	static readonly DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP_CONDITION_KEYS: string[] =
		["elasticache:NumNodeGroups"];
	/** Condition keys applicable to the DecreaseReplicaCount action. */
	static readonly DECREASE_REPLICA_COUNT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:ReplicasPerNodeGroup",
	];
	/** Condition keys applicable to the DeleteCacheParameterGroup action. */
	static readonly DELETE_CACHE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the DeleteCacheSecurityGroup action. */
	static readonly DELETE_CACHE_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCacheSubnetGroup action. */
	static readonly DELETE_CACHE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSnapshot action. */
	static readonly DELETE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DELETE_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUserGroup action. */
	static readonly DELETE_USER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheClusters action. */
	static readonly DESCRIBE_CACHE_CLUSTERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheParameterGroups action. */
	static readonly DESCRIBE_CACHE_PARAMETER_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheParameters action. */
	static readonly DESCRIBE_CACHE_PARAMETERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheSecurityGroups action. */
	static readonly DESCRIBE_CACHE_SECURITY_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheSubnetGroups action. */
	static readonly DESCRIBE_CACHE_SUBNET_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReplicationGroups action. */
	static readonly DESCRIBE_REPLICATION_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReservedCacheNodes action. */
	static readonly DESCRIBE_RESERVED_CACHE_NODES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSnapshots action. */
	static readonly DESCRIBE_SNAPSHOTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUpdateActions action. */
	static readonly DESCRIBE_UPDATE_ACTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUserGroups action. */
	static readonly DESCRIBE_USER_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUsers action. */
	static readonly DESCRIBE_USERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the IncreaseNodeGroupsInGlobalReplicationGroup action. */
	static readonly INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP_CONDITION_KEYS: string[] =
		["elasticache:NumNodeGroups"];
	/** Condition keys applicable to the IncreaseReplicaCount action. */
	static readonly INCREASE_REPLICA_COUNT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:ReplicasPerNodeGroup",
	];
	/** Condition keys applicable to the InterruptClusterAzPower action. */
	static readonly INTERRUPT_CLUSTER_AZ_POWER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAllowedNodeTypeModifications action. */
	static readonly LIST_ALLOWED_NODE_TYPE_MODIFICATIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyCacheCluster action. */
	static readonly MODIFY_CACHE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyCacheParameterGroup action. */
	static readonly MODIFY_CACHE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the ModifyCacheSubnetGroup action. */
	static readonly MODIFY_CACHE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyGlobalReplicationGroup action. */
	static readonly MODIFY_GLOBAL_REPLICATION_GROUP_CONDITION_KEYS: string[] = [
		"elasticache:AutomaticFailoverEnabled",
		"elasticache:CacheNodeType",
		"elasticache:EngineVersion",
	];
	/** Condition keys applicable to the ModifyReplicationGroup action. */
	static readonly MODIFY_REPLICATION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyReplicationGroupShardConfiguration action. */
	static readonly MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "elasticache:NumNodeGroups"];
	/** Condition keys applicable to the ModifyUser action. */
	static readonly MODIFY_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:UserAuthenticationMode",
	];
	/** Condition keys applicable to the ModifyUserGroup action. */
	static readonly MODIFY_USER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PurchaseReservedCacheNodesOffering action. */
	static readonly PURCHASE_RESERVED_CACHE_NODES_OFFERING_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the RebootCacheCluster action. */
	static readonly REBOOT_CACHE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResetCacheParameterGroup action. */
	static readonly RESET_CACHE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the RevokeCacheSecurityGroupIngress action. */
	static readonly REVOKE_CACHE_SECURITY_GROUP_INGRESS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StartMigration action. */
	static readonly START_MIGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TestFailover action. */
	static readonly TEST_FAILOVER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TestMigration action. */
	static readonly TEST_MIGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: elasticache:AtRestEncryptionEnabled (Bool) */
	static readonly AT_REST_ENCRYPTION_ENABLED =
		"elasticache:AtRestEncryptionEnabled";
	/** Condition key: elasticache:AuthTokenEnabled (Bool) */
	static readonly AUTH_TOKEN_ENABLED = "elasticache:AuthTokenEnabled";
	/** Condition key: elasticache:AutomaticFailoverEnabled (Bool) */
	static readonly AUTOMATIC_FAILOVER_ENABLED =
		"elasticache:AutomaticFailoverEnabled";
	/** Condition key: elasticache:CacheNodeType (String) */
	static readonly CACHE_NODE_TYPE = "elasticache:CacheNodeType";
	/** Condition key: elasticache:CacheParameterGroupName (String) */
	static readonly CACHE_PARAMETER_GROUP_NAME =
		"elasticache:CacheParameterGroupName";
	/** Condition key: elasticache:ClusterModeEnabled (Bool) */
	static readonly CLUSTER_MODE_ENABLED = "elasticache:ClusterModeEnabled";
	/** Condition key: elasticache:DataStorageUnit (String) */
	static readonly DATA_STORAGE_UNIT = "elasticache:DataStorageUnit";
	/** Condition key: elasticache:Durability (String) */
	static readonly DURABILITY = "elasticache:Durability";
	/** Condition key: elasticache:EngineType (String) */
	static readonly ENGINE_TYPE = "elasticache:EngineType";
	/** Condition key: elasticache:EngineVersion (String) */
	static readonly ENGINE_VERSION = "elasticache:EngineVersion";
	/** Condition key: elasticache:KmsKeyId (String) */
	static readonly KMS_KEY_ID = "elasticache:KmsKeyId";
	/** Condition key: elasticache:MaximumDataStorage (Numeric) */
	static readonly MAXIMUM_DATA_STORAGE = "elasticache:MaximumDataStorage";
	/** Condition key: elasticache:MaximumECPUPerSecond (Numeric) */
	static readonly MAXIMUM_ECPU_PER_SECOND = "elasticache:MaximumECPUPerSecond";
	/** Condition key: elasticache:MinimumDataStorage (Numeric) */
	static readonly MINIMUM_DATA_STORAGE = "elasticache:MinimumDataStorage";
	/** Condition key: elasticache:MinimumECPUPerSecond (Numeric) */
	static readonly MINIMUM_ECPU_PER_SECOND = "elasticache:MinimumECPUPerSecond";
	/** Condition key: elasticache:MultiAZEnabled (Bool) */
	static readonly MULTI_AZ_ENABLED = "elasticache:MultiAZEnabled";
	/** Condition key: elasticache:NumNodeGroups (Numeric) */
	static readonly NUM_NODE_GROUPS = "elasticache:NumNodeGroups";
	/** Condition key: elasticache:ReplicasPerNodeGroup (Numeric) */
	static readonly REPLICAS_PER_NODE_GROUP = "elasticache:ReplicasPerNodeGroup";
	/** Condition key: elasticache:SnapshotRetentionLimit (Numeric) */
	static readonly SNAPSHOT_RETENTION_LIMIT =
		"elasticache:SnapshotRetentionLimit";
	/** Condition key: elasticache:TransitEncryptionEnabled (Bool) */
	static readonly TRANSIT_ENCRYPTION_ENABLED =
		"elasticache:TransitEncryptionEnabled";
	/** Condition key: elasticache:UserAuthenticationMode (String) */
	static readonly USER_AUTHENTICATION_MODE =
		"elasticache:UserAuthenticationMode";

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
	 * Generates a condition block for `elasticache:AtRestEncryptionEnabled`.
	 */
	static atRestEncryptionEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:AtRestEncryptionEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:AuthTokenEnabled`.
	 */
	static authTokenEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:AuthTokenEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:AutomaticFailoverEnabled`.
	 */
	static automaticFailoverEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:AutomaticFailoverEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:CacheNodeType`.
	 */
	static cacheNodeType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:CacheNodeType": value } };
	}

	/**
	 * Generates a condition block for `elasticache:CacheParameterGroupName`.
	 */
	static cacheParameterGroupName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:CacheParameterGroupName": value } };
	}

	/**
	 * Generates a condition block for `elasticache:ClusterModeEnabled`.
	 */
	static clusterModeEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:ClusterModeEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:DataStorageUnit`.
	 */
	static dataStorageUnit(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:DataStorageUnit": value } };
	}

	/**
	 * Generates a condition block for `elasticache:Durability`.
	 */
	static durability(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:Durability": value } };
	}

	/**
	 * Generates a condition block for `elasticache:EngineType`.
	 */
	static engineType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:EngineType": value } };
	}

	/**
	 * Generates a condition block for `elasticache:EngineVersion`.
	 */
	static engineVersion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:EngineVersion": value } };
	}

	/**
	 * Generates a condition block for `elasticache:KmsKeyId`.
	 */
	static kmsKeyId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:KmsKeyId": value } };
	}

	/**
	 * Generates a condition block for `elasticache:MaximumDataStorage`.
	 */
	static maximumDataStorage(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:MaximumDataStorage": value } };
	}

	/**
	 * Generates a condition block for `elasticache:MaximumECPUPerSecond`.
	 */
	static maximumEcpuPerSecond(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:MaximumECPUPerSecond": value } };
	}

	/**
	 * Generates a condition block for `elasticache:MinimumDataStorage`.
	 */
	static minimumDataStorage(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:MinimumDataStorage": value } };
	}

	/**
	 * Generates a condition block for `elasticache:MinimumECPUPerSecond`.
	 */
	static minimumEcpuPerSecond(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:MinimumECPUPerSecond": value } };
	}

	/**
	 * Generates a condition block for `elasticache:MultiAZEnabled`.
	 */
	static multiAzEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:MultiAZEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:NumNodeGroups`.
	 */
	static numNodeGroups(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:NumNodeGroups": value } };
	}

	/**
	 * Generates a condition block for `elasticache:ReplicasPerNodeGroup`.
	 */
	static replicasPerNodeGroup(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:ReplicasPerNodeGroup": value } };
	}

	/**
	 * Generates a condition block for `elasticache:SnapshotRetentionLimit`.
	 */
	static snapshotRetentionLimit(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "elasticache:SnapshotRetentionLimit": value } };
	}

	/**
	 * Generates a condition block for `elasticache:TransitEncryptionEnabled`.
	 */
	static transitEncryptionEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticache:TransitEncryptionEnabled": value } };
	}

	/**
	 * Generates a condition block for `elasticache:UserAuthenticationMode`.
	 */
	static userAuthenticationMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticache:UserAuthenticationMode": value } };
	}
}
