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
	static readonly AddTagsToResource = "elasticache:AddTagsToResource";
	/** [Write] elasticache:AuthorizeCacheSecurityGroupIngress */
	static readonly AuthorizeCacheSecurityGroupIngress =
		"elasticache:AuthorizeCacheSecurityGroupIngress";
	/** [Write] elasticache:BatchApplyUpdateAction */
	static readonly BatchApplyUpdateAction = "elasticache:BatchApplyUpdateAction";
	/** [Write] elasticache:BatchStopUpdateAction */
	static readonly BatchStopUpdateAction = "elasticache:BatchStopUpdateAction";
	/** [Write] elasticache:CompleteMigration */
	static readonly CompleteMigration = "elasticache:CompleteMigration";
	/** [Write] elasticache:Connect */
	static readonly Connect = "elasticache:Connect";
	/** [Write] elasticache:CopyServerlessCacheSnapshot */
	static readonly CopyServerlessCacheSnapshot =
		"elasticache:CopyServerlessCacheSnapshot";
	/** [Write] elasticache:CopySnapshot */
	static readonly CopySnapshot = "elasticache:CopySnapshot";
	/** [Write] elasticache:CreateCacheCluster */
	static readonly CreateCacheCluster = "elasticache:CreateCacheCluster";
	/** [Write] elasticache:CreateCacheParameterGroup */
	static readonly CreateCacheParameterGroup =
		"elasticache:CreateCacheParameterGroup";
	/** [Write] elasticache:CreateCacheSecurityGroup */
	static readonly CreateCacheSecurityGroup =
		"elasticache:CreateCacheSecurityGroup";
	/** [Write] elasticache:CreateCacheSubnetGroup */
	static readonly CreateCacheSubnetGroup = "elasticache:CreateCacheSubnetGroup";
	/** [Write] elasticache:CreateGlobalReplicationGroup */
	static readonly CreateGlobalReplicationGroup =
		"elasticache:CreateGlobalReplicationGroup";
	/** [Write] elasticache:CreateReplicationGroup */
	static readonly CreateReplicationGroup = "elasticache:CreateReplicationGroup";
	/** [Write] elasticache:CreateServerlessCache */
	static readonly CreateServerlessCache = "elasticache:CreateServerlessCache";
	/** [Write] elasticache:CreateServerlessCacheSnapshot */
	static readonly CreateServerlessCacheSnapshot =
		"elasticache:CreateServerlessCacheSnapshot";
	/** [Write] elasticache:CreateSnapshot */
	static readonly CreateSnapshot = "elasticache:CreateSnapshot";
	/** [Write] elasticache:CreateUser */
	static readonly CreateUser = "elasticache:CreateUser";
	/** [Write] elasticache:CreateUserGroup */
	static readonly CreateUserGroup = "elasticache:CreateUserGroup";
	/** [Write] elasticache:DecreaseNodeGroupsInGlobalReplicationGroup */
	static readonly DecreaseNodeGroupsInGlobalReplicationGroup =
		"elasticache:DecreaseNodeGroupsInGlobalReplicationGroup";
	/** [Write] elasticache:DecreaseReplicaCount */
	static readonly DecreaseReplicaCount = "elasticache:DecreaseReplicaCount";
	/** [Write] elasticache:DeleteCacheCluster */
	static readonly DeleteCacheCluster = "elasticache:DeleteCacheCluster";
	/** [Write] elasticache:DeleteCacheParameterGroup */
	static readonly DeleteCacheParameterGroup =
		"elasticache:DeleteCacheParameterGroup";
	/** [Write] elasticache:DeleteCacheSecurityGroup */
	static readonly DeleteCacheSecurityGroup =
		"elasticache:DeleteCacheSecurityGroup";
	/** [Write] elasticache:DeleteCacheSubnetGroup */
	static readonly DeleteCacheSubnetGroup = "elasticache:DeleteCacheSubnetGroup";
	/** [Write] elasticache:DeleteGlobalReplicationGroup */
	static readonly DeleteGlobalReplicationGroup =
		"elasticache:DeleteGlobalReplicationGroup";
	/** [Write] elasticache:DeleteReplicationGroup */
	static readonly DeleteReplicationGroup = "elasticache:DeleteReplicationGroup";
	/** [Write] elasticache:DeleteServerlessCache */
	static readonly DeleteServerlessCache = "elasticache:DeleteServerlessCache";
	/** [Write] elasticache:DeleteServerlessCacheSnapshot */
	static readonly DeleteServerlessCacheSnapshot =
		"elasticache:DeleteServerlessCacheSnapshot";
	/** [Write] elasticache:DeleteSnapshot */
	static readonly DeleteSnapshot = "elasticache:DeleteSnapshot";
	/** [Write] elasticache:DeleteUser */
	static readonly DeleteUser = "elasticache:DeleteUser";
	/** [Write] elasticache:DeleteUserGroup */
	static readonly DeleteUserGroup = "elasticache:DeleteUserGroup";
	/** [List] elasticache:DescribeCacheClusters */
	static readonly DescribeCacheClusters = "elasticache:DescribeCacheClusters";
	/** [List] elasticache:DescribeCacheEngineVersions */
	static readonly DescribeCacheEngineVersions =
		"elasticache:DescribeCacheEngineVersions";
	/** [List] elasticache:DescribeCacheParameterGroups */
	static readonly DescribeCacheParameterGroups =
		"elasticache:DescribeCacheParameterGroups";
	/** [List] elasticache:DescribeCacheParameters */
	static readonly DescribeCacheParameters =
		"elasticache:DescribeCacheParameters";
	/** [List] elasticache:DescribeCacheSecurityGroups */
	static readonly DescribeCacheSecurityGroups =
		"elasticache:DescribeCacheSecurityGroups";
	/** [List] elasticache:DescribeCacheSubnetGroups */
	static readonly DescribeCacheSubnetGroups =
		"elasticache:DescribeCacheSubnetGroups";
	/** [List] elasticache:DescribeEngineDefaultParameters */
	static readonly DescribeEngineDefaultParameters =
		"elasticache:DescribeEngineDefaultParameters";
	/** [List] elasticache:DescribeEvents */
	static readonly DescribeEvents = "elasticache:DescribeEvents";
	/** [List] elasticache:DescribeGlobalReplicationGroups */
	static readonly DescribeGlobalReplicationGroups =
		"elasticache:DescribeGlobalReplicationGroups";
	/** [List] elasticache:DescribeReplicationGroups */
	static readonly DescribeReplicationGroups =
		"elasticache:DescribeReplicationGroups";
	/** [List] elasticache:DescribeReservedCacheNodes */
	static readonly DescribeReservedCacheNodes =
		"elasticache:DescribeReservedCacheNodes";
	/** [List] elasticache:DescribeReservedCacheNodesOfferings */
	static readonly DescribeReservedCacheNodesOfferings =
		"elasticache:DescribeReservedCacheNodesOfferings";
	/** [List] elasticache:DescribeServerlessCacheSnapshots */
	static readonly DescribeServerlessCacheSnapshots =
		"elasticache:DescribeServerlessCacheSnapshots";
	/** [List] elasticache:DescribeServerlessCaches */
	static readonly DescribeServerlessCaches =
		"elasticache:DescribeServerlessCaches";
	/** [List] elasticache:DescribeServiceUpdates */
	static readonly DescribeServiceUpdates = "elasticache:DescribeServiceUpdates";
	/** [List] elasticache:DescribeSnapshots */
	static readonly DescribeSnapshots = "elasticache:DescribeSnapshots";
	/** [List] elasticache:DescribeUpdateActions */
	static readonly DescribeUpdateActions = "elasticache:DescribeUpdateActions";
	/** [List] elasticache:DescribeUserGroups */
	static readonly DescribeUserGroups = "elasticache:DescribeUserGroups";
	/** [List] elasticache:DescribeUsers */
	static readonly DescribeUsers = "elasticache:DescribeUsers";
	/** [Write] elasticache:DisassociateGlobalReplicationGroup */
	static readonly DisassociateGlobalReplicationGroup =
		"elasticache:DisassociateGlobalReplicationGroup";
	/** [Write] elasticache:ExportServerlessCacheSnapshot */
	static readonly ExportServerlessCacheSnapshot =
		"elasticache:ExportServerlessCacheSnapshot";
	/** [Write] elasticache:FailoverGlobalReplicationGroup */
	static readonly FailoverGlobalReplicationGroup =
		"elasticache:FailoverGlobalReplicationGroup";
	/** [Write] elasticache:IncreaseNodeGroupsInGlobalReplicationGroup */
	static readonly IncreaseNodeGroupsInGlobalReplicationGroup =
		"elasticache:IncreaseNodeGroupsInGlobalReplicationGroup";
	/** [Write] elasticache:IncreaseReplicaCount */
	static readonly IncreaseReplicaCount = "elasticache:IncreaseReplicaCount";
	/** [Write] elasticache:InterruptClusterAzPower */
	static readonly InterruptClusterAzPower =
		"elasticache:InterruptClusterAzPower";
	/** [List] elasticache:ListAllowedNodeTypeModifications */
	static readonly ListAllowedNodeTypeModifications =
		"elasticache:ListAllowedNodeTypeModifications";
	/** [Read] elasticache:ListTagsForResource */
	static readonly ListTagsForResource = "elasticache:ListTagsForResource";
	/** [Write] elasticache:ModifyCacheCluster */
	static readonly ModifyCacheCluster = "elasticache:ModifyCacheCluster";
	/** [Write] elasticache:ModifyCacheParameterGroup */
	static readonly ModifyCacheParameterGroup =
		"elasticache:ModifyCacheParameterGroup";
	/** [Write] elasticache:ModifyCacheSubnetGroup */
	static readonly ModifyCacheSubnetGroup = "elasticache:ModifyCacheSubnetGroup";
	/** [Write] elasticache:ModifyGlobalReplicationGroup */
	static readonly ModifyGlobalReplicationGroup =
		"elasticache:ModifyGlobalReplicationGroup";
	/** [Write] elasticache:ModifyReplicationGroup */
	static readonly ModifyReplicationGroup = "elasticache:ModifyReplicationGroup";
	/** [Write] elasticache:ModifyReplicationGroupShardConfiguration */
	static readonly ModifyReplicationGroupShardConfiguration =
		"elasticache:ModifyReplicationGroupShardConfiguration";
	/** [Write] elasticache:ModifyServerlessCache */
	static readonly ModifyServerlessCache = "elasticache:ModifyServerlessCache";
	/** [Write] elasticache:ModifyUser */
	static readonly ModifyUser = "elasticache:ModifyUser";
	/** [Write] elasticache:ModifyUserGroup */
	static readonly ModifyUserGroup = "elasticache:ModifyUserGroup";
	/** [Write] elasticache:PurchaseReservedCacheNodesOffering */
	static readonly PurchaseReservedCacheNodesOffering =
		"elasticache:PurchaseReservedCacheNodesOffering";
	/** [Write] elasticache:RebalanceSlotsInGlobalReplicationGroup */
	static readonly RebalanceSlotsInGlobalReplicationGroup =
		"elasticache:RebalanceSlotsInGlobalReplicationGroup";
	/** [Write] elasticache:RebootCacheCluster */
	static readonly RebootCacheCluster = "elasticache:RebootCacheCluster";
	/** [Tagging] elasticache:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource = "elasticache:RemoveTagsFromResource";
	/** [Write] elasticache:ResetCacheParameterGroup */
	static readonly ResetCacheParameterGroup =
		"elasticache:ResetCacheParameterGroup";
	/** [Write] elasticache:RevokeCacheSecurityGroupIngress */
	static readonly RevokeCacheSecurityGroupIngress =
		"elasticache:RevokeCacheSecurityGroupIngress";
	/** [Write] elasticache:StartMigration */
	static readonly StartMigration = "elasticache:StartMigration";
	/** [Write] elasticache:TestFailover */
	static readonly TestFailover = "elasticache:TestFailover";
	/** [Write] elasticache:TestMigration */
	static readonly TestMigration = "elasticache:TestMigration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElastiCacheActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElastiCacheActions.AuthorizeCacheSecurityGroupIngress,
		ElastiCacheActions.BatchApplyUpdateAction,
		ElastiCacheActions.BatchStopUpdateAction,
		ElastiCacheActions.CompleteMigration,
		ElastiCacheActions.Connect,
		ElastiCacheActions.CopyServerlessCacheSnapshot,
		ElastiCacheActions.CopySnapshot,
		ElastiCacheActions.CreateCacheCluster,
		ElastiCacheActions.CreateCacheParameterGroup,
		ElastiCacheActions.CreateCacheSecurityGroup,
		ElastiCacheActions.CreateCacheSubnetGroup,
		ElastiCacheActions.CreateGlobalReplicationGroup,
		ElastiCacheActions.CreateReplicationGroup,
		ElastiCacheActions.CreateServerlessCache,
		ElastiCacheActions.CreateServerlessCacheSnapshot,
		ElastiCacheActions.CreateSnapshot,
		ElastiCacheActions.CreateUser,
		ElastiCacheActions.CreateUserGroup,
		ElastiCacheActions.DecreaseNodeGroupsInGlobalReplicationGroup,
		ElastiCacheActions.DecreaseReplicaCount,
		ElastiCacheActions.DeleteCacheCluster,
		ElastiCacheActions.DeleteCacheParameterGroup,
		ElastiCacheActions.DeleteCacheSecurityGroup,
		ElastiCacheActions.DeleteCacheSubnetGroup,
		ElastiCacheActions.DeleteGlobalReplicationGroup,
		ElastiCacheActions.DeleteReplicationGroup,
		ElastiCacheActions.DeleteServerlessCache,
		ElastiCacheActions.DeleteServerlessCacheSnapshot,
		ElastiCacheActions.DeleteSnapshot,
		ElastiCacheActions.DeleteUser,
		ElastiCacheActions.DeleteUserGroup,
		ElastiCacheActions.DisassociateGlobalReplicationGroup,
		ElastiCacheActions.ExportServerlessCacheSnapshot,
		ElastiCacheActions.FailoverGlobalReplicationGroup,
		ElastiCacheActions.IncreaseNodeGroupsInGlobalReplicationGroup,
		ElastiCacheActions.IncreaseReplicaCount,
		ElastiCacheActions.InterruptClusterAzPower,
		ElastiCacheActions.ModifyCacheCluster,
		ElastiCacheActions.ModifyCacheParameterGroup,
		ElastiCacheActions.ModifyCacheSubnetGroup,
		ElastiCacheActions.ModifyGlobalReplicationGroup,
		ElastiCacheActions.ModifyReplicationGroup,
		ElastiCacheActions.ModifyReplicationGroupShardConfiguration,
		ElastiCacheActions.ModifyServerlessCache,
		ElastiCacheActions.ModifyUser,
		ElastiCacheActions.ModifyUserGroup,
		ElastiCacheActions.PurchaseReservedCacheNodesOffering,
		ElastiCacheActions.RebalanceSlotsInGlobalReplicationGroup,
		ElastiCacheActions.RebootCacheCluster,
		ElastiCacheActions.ResetCacheParameterGroup,
		ElastiCacheActions.RevokeCacheSecurityGroupIngress,
		ElastiCacheActions.StartMigration,
		ElastiCacheActions.TestFailover,
		ElastiCacheActions.TestMigration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElastiCacheActions.DescribeCacheClusters,
		ElastiCacheActions.DescribeCacheEngineVersions,
		ElastiCacheActions.DescribeCacheParameterGroups,
		ElastiCacheActions.DescribeCacheParameters,
		ElastiCacheActions.DescribeCacheSecurityGroups,
		ElastiCacheActions.DescribeCacheSubnetGroups,
		ElastiCacheActions.DescribeEngineDefaultParameters,
		ElastiCacheActions.DescribeEvents,
		ElastiCacheActions.DescribeGlobalReplicationGroups,
		ElastiCacheActions.DescribeReplicationGroups,
		ElastiCacheActions.DescribeReservedCacheNodes,
		ElastiCacheActions.DescribeReservedCacheNodesOfferings,
		ElastiCacheActions.DescribeServerlessCacheSnapshots,
		ElastiCacheActions.DescribeServerlessCaches,
		ElastiCacheActions.DescribeServiceUpdates,
		ElastiCacheActions.DescribeSnapshots,
		ElastiCacheActions.DescribeUpdateActions,
		ElastiCacheActions.DescribeUserGroups,
		ElastiCacheActions.DescribeUsers,
		ElastiCacheActions.ListAllowedNodeTypeModifications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElastiCacheActions.AddTagsToResource,
		ElastiCacheActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface ElastiCacheClusterArnProps {
	/** The CacheClusterId component of the ARN. */
	readonly cacheClusterId: string;
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
export interface ElastiCacheClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CacheClusterId component. */
	readonly cacheClusterId: string;
}

/**
 * Properties for building a globalreplicationgroup ARN.
 */
export interface ElastiCacheGlobalreplicationgroupArnProps {
	/** The GlobalReplicationGroupId component of the ARN. */
	readonly globalReplicationGroupId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a globalreplicationgroup ARN.
 */
export interface ElastiCacheGlobalreplicationgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalReplicationGroupId component. */
	readonly globalReplicationGroupId: string;
}

/**
 * Properties for building a parametergroup ARN.
 */
export interface ElastiCacheParametergroupArnProps {
	/** The CacheParameterGroupName component of the ARN. */
	readonly cacheParameterGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a parametergroup ARN.
 */
export interface ElastiCacheParametergroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CacheParameterGroupName component. */
	readonly cacheParameterGroupName: string;
}

/**
 * Properties for building a replicationgroup ARN.
 */
export interface ElastiCacheReplicationgroupArnProps {
	/** The ReplicationGroupId component of the ARN. */
	readonly replicationGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a replicationgroup ARN.
 */
export interface ElastiCacheReplicationgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReplicationGroupId component. */
	readonly replicationGroupId: string;
}

/**
 * Properties for building a reserved-instance ARN.
 */
export interface ElastiCacheReservedInstanceArnProps {
	/** The ReservedCacheNodeId component of the ARN. */
	readonly reservedCacheNodeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reserved-instance ARN.
 */
export interface ElastiCacheReservedInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReservedCacheNodeId component. */
	readonly reservedCacheNodeId: string;
}

/**
 * Properties for building a securitygroup ARN.
 */
export interface ElastiCacheSecuritygroupArnProps {
	/** The CacheSecurityGroupName component of the ARN. */
	readonly cacheSecurityGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a securitygroup ARN.
 */
export interface ElastiCacheSecuritygroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CacheSecurityGroupName component. */
	readonly cacheSecurityGroupName: string;
}

/**
 * Properties for building a serverlesscache ARN.
 */
export interface ElastiCacheServerlesscacheArnProps {
	/** The ServerlessCacheName component of the ARN. */
	readonly serverlessCacheName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a serverlesscache ARN.
 */
export interface ElastiCacheServerlesscacheArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerlessCacheName component. */
	readonly serverlessCacheName: string;
}

/**
 * Properties for building a serverlesscachesnapshot ARN.
 */
export interface ElastiCacheServerlesscachesnapshotArnProps {
	/** The ServerlessCacheSnapshotName component of the ARN. */
	readonly serverlessCacheSnapshotName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a serverlesscachesnapshot ARN.
 */
export interface ElastiCacheServerlesscachesnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerlessCacheSnapshotName component. */
	readonly serverlessCacheSnapshotName: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface ElastiCacheSnapshotArnProps {
	/** The SnapshotName component of the ARN. */
	readonly snapshotName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface ElastiCacheSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotName component. */
	readonly snapshotName: string;
}

/**
 * Properties for building a subnetgroup ARN.
 */
export interface ElastiCacheSubnetgroupArnProps {
	/** The CacheSubnetGroupName component of the ARN. */
	readonly cacheSubnetGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subnetgroup ARN.
 */
export interface ElastiCacheSubnetgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CacheSubnetGroupName component. */
	readonly cacheSubnetGroupName: string;
}

/**
 * Properties for building a user ARN.
 */
export interface ElastiCacheUserArnProps {
	/** The UserId component of the ARN. */
	readonly userId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface ElastiCacheUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserId component. */
	readonly userId: string;
}

/**
 * Properties for building a usergroup ARN.
 */
export interface ElastiCacheUsergroupArnProps {
	/** The UserGroupId component of the ARN. */
	readonly userGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a usergroup ARN.
 */
export interface ElastiCacheUsergroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserGroupId component. */
	readonly userGroupId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<cacheClusterId>[^:/?]+)$/;
const GlobalreplicationgroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache::(?<account>[^:]*):globalreplicationgroup:(?<globalReplicationGroupId>[^:/?]+)$/;
const ParametergroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):parametergroup:(?<cacheParameterGroupName>[^:/?]+)$/;
const ReplicationgroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):replicationgroup:(?<replicationGroupId>[^:/?]+)$/;
const ReservedInstanceArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):reserved-instance:(?<reservedCacheNodeId>[^:/?]+)$/;
const SecuritygroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):securitygroup:(?<cacheSecurityGroupName>[^:/?]+)$/;
const ServerlesscacheArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):serverlesscache:(?<serverlessCacheName>[^:/?]+)$/;
const ServerlesscachesnapshotArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):serverlesscachesnapshot:(?<serverlessCacheSnapshotName>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<snapshotName>[^:/?]+)$/;
const SubnetgroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):subnetgroup:(?<cacheSubnetGroupName>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):user:(?<userId>[^:/?]+)$/;
const UsergroupArnRegex =
	/^arn:(?<partition>[^:]+):elasticache:(?<region>[^:]*):(?<account>[^:]*):usergroup:(?<userGroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elasticache resources.
 */
export class ElastiCacheResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: ElastiCacheClusterArnProps): string {
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
	static parseClusterArn(arn: string): ElastiCacheClusterArnComponents {
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
	static globalreplicationgroup(
		props: ElastiCacheGlobalreplicationgroupArnProps,
	): string {
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
	static parseGlobalreplicationgroupArn(
		arn: string,
	): ElastiCacheGlobalreplicationgroupArnComponents {
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
	static parametergroup(props: ElastiCacheParametergroupArnProps): string {
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
	static parseParametergroupArn(
		arn: string,
	): ElastiCacheParametergroupArnComponents {
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
	static replicationgroup(props: ElastiCacheReplicationgroupArnProps): string {
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
	static parseReplicationgroupArn(
		arn: string,
	): ElastiCacheReplicationgroupArnComponents {
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
	static reservedInstance(props: ElastiCacheReservedInstanceArnProps): string {
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
	static parseReservedInstanceArn(
		arn: string,
	): ElastiCacheReservedInstanceArnComponents {
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
	static securitygroup(props: ElastiCacheSecuritygroupArnProps): string {
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
	static parseSecuritygroupArn(
		arn: string,
	): ElastiCacheSecuritygroupArnComponents {
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
	static serverlesscache(props: ElastiCacheServerlesscacheArnProps): string {
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
	static parseServerlesscacheArn(
		arn: string,
	): ElastiCacheServerlesscacheArnComponents {
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
	static serverlesscachesnapshot(
		props: ElastiCacheServerlesscachesnapshotArnProps,
	): string {
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
	static parseServerlesscachesnapshotArn(
		arn: string,
	): ElastiCacheServerlesscachesnapshotArnComponents {
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
	static snapshot(props: ElastiCacheSnapshotArnProps): string {
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
	static parseSnapshotArn(arn: string): ElastiCacheSnapshotArnComponents {
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
	static subnetgroup(props: ElastiCacheSubnetgroupArnProps): string {
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
	static parseSubnetgroupArn(arn: string): ElastiCacheSubnetgroupArnComponents {
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
	static user(props: ElastiCacheUserArnProps): string {
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
	static parseUserArn(arn: string): ElastiCacheUserArnComponents {
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
	static usergroup(props: ElastiCacheUsergroupArnProps): string {
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
	static parseUsergroupArn(arn: string): ElastiCacheUsergroupArnComponents {
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
	static readonly AddTagsToResource: string[] = [
		"elasticache:AddTagsToResource",
	];
	/** IAM actions required for the AuthorizeCacheSecurityGroupIngress API call. */
	static readonly AuthorizeCacheSecurityGroupIngress: string[] = [
		"elasticache:AuthorizeCacheSecurityGroupIngress",
	];
	/** IAM actions required for the BatchApplyUpdateAction API call. */
	static readonly BatchApplyUpdateAction: string[] = [
		"elasticache:BatchApplyUpdateAction",
	];
	/** IAM actions required for the BatchStopUpdateAction API call. */
	static readonly BatchStopUpdateAction: string[] = [
		"elasticache:BatchStopUpdateAction",
	];
	/** IAM actions required for the CompleteMigration API call. */
	static readonly CompleteMigration: string[] = [
		"elasticache:CompleteMigration",
	];
	/** IAM actions required for the CopyServerlessCacheSnapshot API call. */
	static readonly CopyServerlessCacheSnapshot: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CopyServerlessCacheSnapshot",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly CopySnapshot: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CopySnapshot",
	];
	/** IAM actions required for the CreateCacheCluster API call. */
	static readonly CreateCacheCluster: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheCluster",
	];
	/** IAM actions required for the CreateCacheParameterGroup API call. */
	static readonly CreateCacheParameterGroup: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheParameterGroup",
	];
	/** IAM actions required for the CreateCacheSecurityGroup API call. */
	static readonly CreateCacheSecurityGroup: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheSecurityGroup",
	];
	/** IAM actions required for the CreateCacheSubnetGroup API call. */
	static readonly CreateCacheSubnetGroup: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateCacheSubnetGroup",
	];
	/** IAM actions required for the CreateGlobalReplicationGroup API call. */
	static readonly CreateGlobalReplicationGroup: string[] = [
		"elasticache:CreateGlobalReplicationGroup",
	];
	/** IAM actions required for the CreateReplicationGroup API call. */
	static readonly CreateReplicationGroup: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateReplicationGroup",
	];
	/** IAM actions required for the CreateServerlessCache API call. */
	static readonly CreateServerlessCache: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateServerlessCache",
	];
	/** IAM actions required for the CreateServerlessCacheSnapshot API call. */
	static readonly CreateServerlessCacheSnapshot: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateServerlessCacheSnapshot",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateSnapshot",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateUser",
	];
	/** IAM actions required for the CreateUserGroup API call. */
	static readonly CreateUserGroup: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:CreateUserGroup",
	];
	/** IAM actions required for the DecreaseNodeGroupsInGlobalReplicationGroup API call. */
	static readonly DecreaseNodeGroupsInGlobalReplicationGroup: string[] = [
		"elasticache:DecreaseNodeGroupsInGlobalReplicationGroup",
	];
	/** IAM actions required for the DecreaseReplicaCount API call. */
	static readonly DecreaseReplicaCount: string[] = [
		"elasticache:DecreaseReplicaCount",
	];
	/** IAM actions required for the DeleteCacheCluster API call. */
	static readonly DeleteCacheCluster: string[] = [
		"elasticache:CreateSnapshot",
		"elasticache:DeleteCacheCluster",
	];
	/** IAM actions required for the DeleteCacheParameterGroup API call. */
	static readonly DeleteCacheParameterGroup: string[] = [
		"elasticache:DeleteCacheParameterGroup",
	];
	/** IAM actions required for the DeleteCacheSecurityGroup API call. */
	static readonly DeleteCacheSecurityGroup: string[] = [
		"elasticache:DeleteCacheSecurityGroup",
	];
	/** IAM actions required for the DeleteCacheSubnetGroup API call. */
	static readonly DeleteCacheSubnetGroup: string[] = [
		"elasticache:DeleteCacheSubnetGroup",
	];
	/** IAM actions required for the DeleteGlobalReplicationGroup API call. */
	static readonly DeleteGlobalReplicationGroup: string[] = [
		"elasticache:DeleteGlobalReplicationGroup",
	];
	/** IAM actions required for the DeleteReplicationGroup API call. */
	static readonly DeleteReplicationGroup: string[] = [
		"elasticache:CreateSnapshot",
		"elasticache:DeleteReplicationGroup",
	];
	/** IAM actions required for the DeleteServerlessCache API call. */
	static readonly DeleteServerlessCache: string[] = [
		"elasticache:CreateServerlessCacheSnapshot",
		"elasticache:DeleteServerlessCache",
	];
	/** IAM actions required for the DeleteServerlessCacheSnapshot API call. */
	static readonly DeleteServerlessCacheSnapshot: string[] = [
		"elasticache:DeleteServerlessCacheSnapshot",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DeleteSnapshot: string[] = ["elasticache:DeleteSnapshot"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["elasticache:DeleteUser"];
	/** IAM actions required for the DeleteUserGroup API call. */
	static readonly DeleteUserGroup: string[] = ["elasticache:DeleteUserGroup"];
	/** IAM actions required for the DescribeCacheClusters API call. */
	static readonly DescribeCacheClusters: string[] = [
		"elasticache:DescribeCacheClusters",
	];
	/** IAM actions required for the DescribeCacheEngineVersions API call. */
	static readonly DescribeCacheEngineVersions: string[] = [
		"elasticache:DescribeCacheEngineVersions",
	];
	/** IAM actions required for the DescribeCacheParameterGroups API call. */
	static readonly DescribeCacheParameterGroups: string[] = [
		"elasticache:DescribeCacheParameterGroups",
	];
	/** IAM actions required for the DescribeCacheParameters API call. */
	static readonly DescribeCacheParameters: string[] = [
		"elasticache:DescribeCacheParameters",
	];
	/** IAM actions required for the DescribeCacheSecurityGroups API call. */
	static readonly DescribeCacheSecurityGroups: string[] = [
		"elasticache:DescribeCacheSecurityGroups",
	];
	/** IAM actions required for the DescribeCacheSubnetGroups API call. */
	static readonly DescribeCacheSubnetGroups: string[] = [
		"elasticache:DescribeCacheSubnetGroups",
	];
	/** IAM actions required for the DescribeEngineDefaultParameters API call. */
	static readonly DescribeEngineDefaultParameters: string[] = [
		"elasticache:DescribeEngineDefaultParameters",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["elasticache:DescribeEvents"];
	/** IAM actions required for the DescribeGlobalReplicationGroups API call. */
	static readonly DescribeGlobalReplicationGroups: string[] = [
		"elasticache:DescribeGlobalReplicationGroups",
	];
	/** IAM actions required for the DescribeReplicationGroups API call. */
	static readonly DescribeReplicationGroups: string[] = [
		"elasticache:DescribeReplicationGroups",
	];
	/** IAM actions required for the DescribeReservedCacheNodes API call. */
	static readonly DescribeReservedCacheNodes: string[] = [
		"elasticache:DescribeReservedCacheNodes",
	];
	/** IAM actions required for the DescribeReservedCacheNodesOfferings API call. */
	static readonly DescribeReservedCacheNodesOfferings: string[] = [
		"elasticache:DescribeReservedCacheNodesOfferings",
	];
	/** IAM actions required for the DescribeServerlessCacheSnapshots API call. */
	static readonly DescribeServerlessCacheSnapshots: string[] = [
		"elasticache:DescribeServerlessCacheSnapshots",
	];
	/** IAM actions required for the DescribeServerlessCaches API call. */
	static readonly DescribeServerlessCaches: string[] = [
		"elasticache:DescribeServerlessCaches",
	];
	/** IAM actions required for the DescribeServiceUpdates API call. */
	static readonly DescribeServiceUpdates: string[] = [
		"elasticache:DescribeServiceUpdates",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DescribeSnapshots: string[] = [
		"elasticache:DescribeSnapshots",
	];
	/** IAM actions required for the DescribeUpdateActions API call. */
	static readonly DescribeUpdateActions: string[] = [
		"elasticache:DescribeUpdateActions",
	];
	/** IAM actions required for the DescribeUserGroups API call. */
	static readonly DescribeUserGroups: string[] = [
		"elasticache:DescribeUserGroups",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DescribeUsers: string[] = ["elasticache:DescribeUsers"];
	/** IAM actions required for the DisassociateGlobalReplicationGroup API call. */
	static readonly DisassociateGlobalReplicationGroup: string[] = [
		"elasticache:DisassociateGlobalReplicationGroup",
	];
	/** IAM actions required for the ExportServerlessCacheSnapshot API call. */
	static readonly ExportServerlessCacheSnapshot: string[] = [
		"elasticache:ExportServerlessCacheSnapshot",
	];
	/** IAM actions required for the FailoverGlobalReplicationGroup API call. */
	static readonly FailoverGlobalReplicationGroup: string[] = [
		"elasticache:FailoverGlobalReplicationGroup",
	];
	/** IAM actions required for the IncreaseNodeGroupsInGlobalReplicationGroup API call. */
	static readonly IncreaseNodeGroupsInGlobalReplicationGroup: string[] = [
		"elasticache:IncreaseNodeGroupsInGlobalReplicationGroup",
	];
	/** IAM actions required for the IncreaseReplicaCount API call. */
	static readonly IncreaseReplicaCount: string[] = [
		"elasticache:IncreaseReplicaCount",
	];
	/** IAM actions required for the ListAllowedNodeTypeModifications API call. */
	static readonly ListAllowedNodeTypeModifications: string[] = [
		"elasticache:ListAllowedNodeTypeModifications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"elasticache:ListTagsForResource",
	];
	/** IAM actions required for the ModifyCacheCluster API call. */
	static readonly ModifyCacheCluster: string[] = [
		"elasticache:ModifyCacheCluster",
	];
	/** IAM actions required for the ModifyCacheParameterGroup API call. */
	static readonly ModifyCacheParameterGroup: string[] = [
		"elasticache:ModifyCacheParameterGroup",
	];
	/** IAM actions required for the ModifyCacheSubnetGroup API call. */
	static readonly ModifyCacheSubnetGroup: string[] = [
		"elasticache:ModifyCacheSubnetGroup",
	];
	/** IAM actions required for the ModifyGlobalReplicationGroup API call. */
	static readonly ModifyGlobalReplicationGroup: string[] = [
		"elasticache:ModifyGlobalReplicationGroup",
	];
	/** IAM actions required for the ModifyReplicationGroup API call. */
	static readonly ModifyReplicationGroup: string[] = [
		"elasticache:ModifyReplicationGroup",
	];
	/** IAM actions required for the ModifyReplicationGroupShardConfiguration API call. */
	static readonly ModifyReplicationGroupShardConfiguration: string[] = [
		"elasticache:ModifyReplicationGroupShardConfiguration",
	];
	/** IAM actions required for the ModifyServerlessCache API call. */
	static readonly ModifyServerlessCache: string[] = [
		"elasticache:ModifyServerlessCache",
	];
	/** IAM actions required for the ModifyUser API call. */
	static readonly ModifyUser: string[] = ["elasticache:ModifyUser"];
	/** IAM actions required for the ModifyUserGroup API call. */
	static readonly ModifyUserGroup: string[] = ["elasticache:ModifyUserGroup"];
	/** IAM actions required for the PurchaseReservedCacheNodesOffering API call. */
	static readonly PurchaseReservedCacheNodesOffering: string[] = [
		"elasticache:AddTagsToResource",
		"elasticache:PurchaseReservedCacheNodesOffering",
	];
	/** IAM actions required for the RebalanceSlotsInGlobalReplicationGroup API call. */
	static readonly RebalanceSlotsInGlobalReplicationGroup: string[] = [
		"elasticache:RebalanceSlotsInGlobalReplicationGroup",
	];
	/** IAM actions required for the RebootCacheCluster API call. */
	static readonly RebootCacheCluster: string[] = [
		"elasticache:RebootCacheCluster",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"elasticache:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetCacheParameterGroup API call. */
	static readonly ResetCacheParameterGroup: string[] = [
		"elasticache:ResetCacheParameterGroup",
	];
	/** IAM actions required for the RevokeCacheSecurityGroupIngress API call. */
	static readonly RevokeCacheSecurityGroupIngress: string[] = [
		"elasticache:RevokeCacheSecurityGroupIngress",
	];
	/** IAM actions required for the StartMigration API call. */
	static readonly StartMigration: string[] = ["elasticache:StartMigration"];
	/** IAM actions required for the TestFailover API call. */
	static readonly TestFailover: string[] = ["elasticache:TestFailover"];
	/** IAM actions required for the TestMigration API call. */
	static readonly TestMigration: string[] = ["elasticache:TestMigration"];
}

/**
 * Condition key constants and builders for elasticache.
 */
export class ElastiCacheConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AuthorizeCacheSecurityGroupIngress action. */
	static readonly AuthorizeCacheSecurityGroupIngressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchApplyUpdateAction action. */
	static readonly BatchApplyUpdateActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchStopUpdateAction action. */
	static readonly BatchStopUpdateActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CompleteMigration action. */
	static readonly CompleteMigrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Connect action. */
	static readonly ConnectConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyServerlessCacheSnapshot action. */
	static readonly CopyServerlessCacheSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CopySnapshot action. */
	static readonly CopySnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:KmsKeyId",
	];
	/** Condition keys applicable to the CreateCacheCluster action. */
	static readonly CreateCacheClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateCacheParameterGroup action. */
	static readonly CreateCacheParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the CreateCacheSecurityGroup action. */
	static readonly CreateCacheSecurityGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCacheSubnetGroup action. */
	static readonly CreateCacheSubnetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGlobalReplicationGroup action. */
	static readonly CreateGlobalReplicationGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReplicationGroup action. */
	static readonly CreateReplicationGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateServerlessCache action. */
	static readonly CreateServerlessCacheConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServerlessCacheSnapshot action. */
	static readonly CreateServerlessCacheSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CreateSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"elasticache:UserAuthenticationMode",
	];
	/** Condition keys applicable to the CreateUserGroup action. */
	static readonly CreateUserGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DecreaseNodeGroupsInGlobalReplicationGroup action. */
	static readonly DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys: string[] =
		["elasticache:NumNodeGroups"];
	/** Condition keys applicable to the DecreaseReplicaCount action. */
	static readonly DecreaseReplicaCountConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:ReplicasPerNodeGroup",
	];
	/** Condition keys applicable to the DeleteCacheParameterGroup action. */
	static readonly DeleteCacheParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the DeleteCacheSecurityGroup action. */
	static readonly DeleteCacheSecurityGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCacheSubnetGroup action. */
	static readonly DeleteCacheSubnetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSnapshot action. */
	static readonly DeleteSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DeleteUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUserGroup action. */
	static readonly DeleteUserGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheClusters action. */
	static readonly DescribeCacheClustersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheParameterGroups action. */
	static readonly DescribeCacheParameterGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheParameters action. */
	static readonly DescribeCacheParametersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheSecurityGroups action. */
	static readonly DescribeCacheSecurityGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCacheSubnetGroups action. */
	static readonly DescribeCacheSubnetGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReplicationGroups action. */
	static readonly DescribeReplicationGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReservedCacheNodes action. */
	static readonly DescribeReservedCacheNodesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSnapshots action. */
	static readonly DescribeSnapshotsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUpdateActions action. */
	static readonly DescribeUpdateActionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUserGroups action. */
	static readonly DescribeUserGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUsers action. */
	static readonly DescribeUsersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the IncreaseNodeGroupsInGlobalReplicationGroup action. */
	static readonly IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys: string[] =
		["elasticache:NumNodeGroups"];
	/** Condition keys applicable to the IncreaseReplicaCount action. */
	static readonly IncreaseReplicaCountConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:ReplicasPerNodeGroup",
	];
	/** Condition keys applicable to the InterruptClusterAzPower action. */
	static readonly InterruptClusterAzPowerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAllowedNodeTypeModifications action. */
	static readonly ListAllowedNodeTypeModificationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyCacheCluster action. */
	static readonly ModifyCacheClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyCacheParameterGroup action. */
	static readonly ModifyCacheParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the ModifyCacheSubnetGroup action. */
	static readonly ModifyCacheSubnetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyGlobalReplicationGroup action. */
	static readonly ModifyGlobalReplicationGroupConditionKeys: string[] = [
		"elasticache:AutomaticFailoverEnabled",
		"elasticache:CacheNodeType",
		"elasticache:EngineVersion",
	];
	/** Condition keys applicable to the ModifyReplicationGroup action. */
	static readonly ModifyReplicationGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyReplicationGroupShardConfiguration action. */
	static readonly ModifyReplicationGroupShardConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "elasticache:NumNodeGroups"];
	/** Condition keys applicable to the ModifyUser action. */
	static readonly ModifyUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:UserAuthenticationMode",
	];
	/** Condition keys applicable to the ModifyUserGroup action. */
	static readonly ModifyUserGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PurchaseReservedCacheNodesOffering action. */
	static readonly PurchaseReservedCacheNodesOfferingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RebootCacheCluster action. */
	static readonly RebootCacheClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResetCacheParameterGroup action. */
	static readonly ResetCacheParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"elasticache:CacheParameterGroupName",
	];
	/** Condition keys applicable to the RevokeCacheSecurityGroupIngress action. */
	static readonly RevokeCacheSecurityGroupIngressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartMigration action. */
	static readonly StartMigrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TestFailover action. */
	static readonly TestFailoverConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TestMigration action. */
	static readonly TestMigrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
