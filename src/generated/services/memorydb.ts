// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/memorydb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the memorydb service.
 */
export class MemoryDBActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "memorydb";

	/** [Write] memorydb:BatchUpdateCluster */
	static readonly BATCH_UPDATE_CLUSTER = "memorydb:BatchUpdateCluster";
	/** [Write] memorydb:Connect */
	static readonly CONNECT = "memorydb:Connect";
	/** [Write] memorydb:CopySnapshot */
	static readonly COPY_SNAPSHOT = "memorydb:CopySnapshot";
	/** [Write] memorydb:CreateAcl */
	static readonly CREATE_ACL = "memorydb:CreateAcl";
	/** [Write] memorydb:CreateCluster */
	static readonly CREATE_CLUSTER = "memorydb:CreateCluster";
	/** [Write] memorydb:CreateMultiRegionCluster */
	static readonly CREATE_MULTI_REGION_CLUSTER =
		"memorydb:CreateMultiRegionCluster";
	/** [Write] memorydb:CreateParameterGroup */
	static readonly CREATE_PARAMETER_GROUP = "memorydb:CreateParameterGroup";
	/** [Write] memorydb:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "memorydb:CreateSnapshot";
	/** [Write] memorydb:CreateSubnetGroup */
	static readonly CREATE_SUBNET_GROUP = "memorydb:CreateSubnetGroup";
	/** [Write] memorydb:CreateUser */
	static readonly CREATE_USER = "memorydb:CreateUser";
	/** [Write] memorydb:DeleteAcl */
	static readonly DELETE_ACL = "memorydb:DeleteAcl";
	/** [Write] memorydb:DeleteCluster */
	static readonly DELETE_CLUSTER = "memorydb:DeleteCluster";
	/** [Write] memorydb:DeleteMultiRegionCluster */
	static readonly DELETE_MULTI_REGION_CLUSTER =
		"memorydb:DeleteMultiRegionCluster";
	/** [Write] memorydb:DeleteParameterGroup */
	static readonly DELETE_PARAMETER_GROUP = "memorydb:DeleteParameterGroup";
	/** [Write] memorydb:DeleteSnapshot */
	static readonly DELETE_SNAPSHOT = "memorydb:DeleteSnapshot";
	/** [Write] memorydb:DeleteSubnetGroup */
	static readonly DELETE_SUBNET_GROUP = "memorydb:DeleteSubnetGroup";
	/** [Write] memorydb:DeleteUser */
	static readonly DELETE_USER = "memorydb:DeleteUser";
	/** [Read] memorydb:DescribeAcls */
	static readonly DESCRIBE_ACLS = "memorydb:DescribeAcls";
	/** [Read] memorydb:DescribeClusters */
	static readonly DESCRIBE_CLUSTERS = "memorydb:DescribeClusters";
	/** [Read] memorydb:DescribeEngineVersions */
	static readonly DESCRIBE_ENGINE_VERSIONS = "memorydb:DescribeEngineVersions";
	/** [Read] memorydb:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "memorydb:DescribeEvents";
	/** [Read] memorydb:DescribeMultiRegionClusters */
	static readonly DESCRIBE_MULTI_REGION_CLUSTERS =
		"memorydb:DescribeMultiRegionClusters";
	/** [Read] memorydb:DescribeMultiRegionParameterGroups */
	static readonly DESCRIBE_MULTI_REGION_PARAMETER_GROUPS =
		"memorydb:DescribeMultiRegionParameterGroups";
	/** [Read] memorydb:DescribeMultiRegionParameters */
	static readonly DESCRIBE_MULTI_REGION_PARAMETERS =
		"memorydb:DescribeMultiRegionParameters";
	/** [Read] memorydb:DescribeParameterGroups */
	static readonly DESCRIBE_PARAMETER_GROUPS =
		"memorydb:DescribeParameterGroups";
	/** [Read] memorydb:DescribeParameters */
	static readonly DESCRIBE_PARAMETERS = "memorydb:DescribeParameters";
	/** [Read] memorydb:DescribeReservedNodes */
	static readonly DESCRIBE_RESERVED_NODES = "memorydb:DescribeReservedNodes";
	/** [Read] memorydb:DescribeReservedNodesOfferings */
	static readonly DESCRIBE_RESERVED_NODES_OFFERINGS =
		"memorydb:DescribeReservedNodesOfferings";
	/** [Read] memorydb:DescribeServiceUpdates */
	static readonly DESCRIBE_SERVICE_UPDATES = "memorydb:DescribeServiceUpdates";
	/** [Read] memorydb:DescribeSnapshots */
	static readonly DESCRIBE_SNAPSHOTS = "memorydb:DescribeSnapshots";
	/** [Read] memorydb:DescribeSubnetGroups */
	static readonly DESCRIBE_SUBNET_GROUPS = "memorydb:DescribeSubnetGroups";
	/** [Read] memorydb:DescribeUsers */
	static readonly DESCRIBE_USERS = "memorydb:DescribeUsers";
	/** [Write] memorydb:FailoverShard */
	static readonly FAILOVER_SHARD = "memorydb:FailoverShard";
	/** [Read] memorydb:ListAllowedMultiRegionClusterUpdates */
	static readonly LIST_ALLOWED_MULTI_REGION_CLUSTER_UPDATES =
		"memorydb:ListAllowedMultiRegionClusterUpdates";
	/** [Read] memorydb:ListAllowedNodeTypeUpdates */
	static readonly LIST_ALLOWED_NODE_TYPE_UPDATES =
		"memorydb:ListAllowedNodeTypeUpdates";
	/** [Read] memorydb:ListTags */
	static readonly LIST_TAGS = "memorydb:ListTags";
	/** [Write] memorydb:PauseMultiRegionClusterReplication */
	static readonly PAUSE_MULTI_REGION_CLUSTER_REPLICATION =
		"memorydb:PauseMultiRegionClusterReplication";
	/** [Write] memorydb:PurchaseReservedNodesOffering */
	static readonly PURCHASE_RESERVED_NODES_OFFERING =
		"memorydb:PurchaseReservedNodesOffering";
	/** [Write] memorydb:ResetParameterGroup */
	static readonly RESET_PARAMETER_GROUP = "memorydb:ResetParameterGroup";
	/** [Tagging] memorydb:TagResource */
	static readonly TAG_RESOURCE = "memorydb:TagResource";
	/** [Tagging] memorydb:UntagResource */
	static readonly UNTAG_RESOURCE = "memorydb:UntagResource";
	/** [Write] memorydb:UpdateAcl */
	static readonly UPDATE_ACL = "memorydb:UpdateAcl";
	/** [Write] memorydb:UpdateCluster */
	static readonly UPDATE_CLUSTER = "memorydb:UpdateCluster";
	/** [Write] memorydb:UpdateMultiRegionCluster */
	static readonly UPDATE_MULTI_REGION_CLUSTER =
		"memorydb:UpdateMultiRegionCluster";
	/** [Write] memorydb:UpdateParameterGroup */
	static readonly UPDATE_PARAMETER_GROUP = "memorydb:UpdateParameterGroup";
	/** [Write] memorydb:UpdateSubnetGroup */
	static readonly UPDATE_SUBNET_GROUP = "memorydb:UpdateSubnetGroup";
	/** [Write] memorydb:UpdateUser */
	static readonly UPDATE_USER = "memorydb:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MemoryDBActions.DESCRIBE_ACLS,
		MemoryDBActions.DESCRIBE_CLUSTERS,
		MemoryDBActions.DESCRIBE_ENGINE_VERSIONS,
		MemoryDBActions.DESCRIBE_EVENTS,
		MemoryDBActions.DESCRIBE_MULTI_REGION_CLUSTERS,
		MemoryDBActions.DESCRIBE_MULTI_REGION_PARAMETER_GROUPS,
		MemoryDBActions.DESCRIBE_MULTI_REGION_PARAMETERS,
		MemoryDBActions.DESCRIBE_PARAMETER_GROUPS,
		MemoryDBActions.DESCRIBE_PARAMETERS,
		MemoryDBActions.DESCRIBE_RESERVED_NODES,
		MemoryDBActions.DESCRIBE_RESERVED_NODES_OFFERINGS,
		MemoryDBActions.DESCRIBE_SERVICE_UPDATES,
		MemoryDBActions.DESCRIBE_SNAPSHOTS,
		MemoryDBActions.DESCRIBE_SUBNET_GROUPS,
		MemoryDBActions.DESCRIBE_USERS,
		MemoryDBActions.LIST_ALLOWED_MULTI_REGION_CLUSTER_UPDATES,
		MemoryDBActions.LIST_ALLOWED_NODE_TYPE_UPDATES,
		MemoryDBActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MemoryDBActions.BATCH_UPDATE_CLUSTER,
		MemoryDBActions.CONNECT,
		MemoryDBActions.COPY_SNAPSHOT,
		MemoryDBActions.CREATE_ACL,
		MemoryDBActions.CREATE_CLUSTER,
		MemoryDBActions.CREATE_MULTI_REGION_CLUSTER,
		MemoryDBActions.CREATE_PARAMETER_GROUP,
		MemoryDBActions.CREATE_SNAPSHOT,
		MemoryDBActions.CREATE_SUBNET_GROUP,
		MemoryDBActions.CREATE_USER,
		MemoryDBActions.DELETE_ACL,
		MemoryDBActions.DELETE_CLUSTER,
		MemoryDBActions.DELETE_MULTI_REGION_CLUSTER,
		MemoryDBActions.DELETE_PARAMETER_GROUP,
		MemoryDBActions.DELETE_SNAPSHOT,
		MemoryDBActions.DELETE_SUBNET_GROUP,
		MemoryDBActions.DELETE_USER,
		MemoryDBActions.FAILOVER_SHARD,
		MemoryDBActions.PAUSE_MULTI_REGION_CLUSTER_REPLICATION,
		MemoryDBActions.PURCHASE_RESERVED_NODES_OFFERING,
		MemoryDBActions.RESET_PARAMETER_GROUP,
		MemoryDBActions.UPDATE_ACL,
		MemoryDBActions.UPDATE_CLUSTER,
		MemoryDBActions.UPDATE_MULTI_REGION_CLUSTER,
		MemoryDBActions.UPDATE_PARAMETER_GROUP,
		MemoryDBActions.UPDATE_SUBNET_GROUP,
		MemoryDBActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MemoryDBActions.TAG_RESOURCE,
		MemoryDBActions.UNTAG_RESOURCE,
	];
}

const AclArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):acl/(?<aclName>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)$",
);
const MultiregionclusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb::(?<account>[^:]*):multiregioncluster/(?<clusterName>[^:/?]+)$",
);
const MultiregionparametergroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb::(?<account>[^:]*):multiregionparametergroup/(?<multiRegionParameterGroupName>[^:/?]+)$",
);
const ParametergroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):parametergroup/(?<parameterGroupName>[^:/?]+)$",
);
const ReservednodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):reservednode/(?<reservationId>[^:/?]+)$",
);
const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):snapshot/(?<snapshotName>[^:/?]+)$",
);
const SubnetgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):subnetgroup/(?<subnetGroupName>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):user/(?<userName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for memorydb resources.
 */
export class MemoryDBResources {
	/**
	 * Builds an ARN for the acl resource.
	 */
	static acl(props: {
		/** The AclName component of the ARN. */
		readonly aclName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:acl/${props.aclName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the acl resource.
	 */
	static isValidAclArn(arn: string): boolean {
		return AclArnRegex.test(arn);
	}

	/**
	 * Parses a acl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAclArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aclName: string;
	} {
		const match = AclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid acl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aclName: match.groups!.aclName,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}`;
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
		};
	}

	/**
	 * Builds an ARN for the multiregioncluster resource.
	 */
	static multiregioncluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb::${props.account ?? "*"}:multiregioncluster/${props.clusterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multiregioncluster resource.
	 */
	static isValidMultiregionclusterArn(arn: string): boolean {
		return MultiregionclusterArnRegex.test(arn);
	}

	/**
	 * Parses a multiregioncluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiregionclusterArn(arn: string): {
		partition: string;
		account: string;
		clusterName: string;
	} {
		const match = MultiregionclusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multiregioncluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the multiregionparametergroup resource.
	 */
	static multiregionparametergroup(props: {
		/** The MultiRegionParameterGroupName component of the ARN. */
		readonly multiRegionParameterGroupName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb::${props.account ?? "*"}:multiregionparametergroup/${props.multiRegionParameterGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multiregionparametergroup resource.
	 */
	static isValidMultiregionparametergroupArn(arn: string): boolean {
		return MultiregionparametergroupArnRegex.test(arn);
	}

	/**
	 * Parses a multiregionparametergroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiregionparametergroupArn(arn: string): {
		partition: string;
		account: string;
		multiRegionParameterGroupName: string;
	} {
		const match = MultiregionparametergroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multiregionparametergroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			multiRegionParameterGroupName:
				match.groups!.multiRegionParameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the parametergroup resource.
	 */
	static parametergroup(props: {
		/** The ParameterGroupName component of the ARN. */
		readonly parameterGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:parametergroup/${props.parameterGroupName}`;
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
		parameterGroupName: string;
	} {
		const match = ParametergroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parametergroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			parameterGroupName: match.groups!.parameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the reservednode resource.
	 */
	static reservednode(props: {
		/** The ReservationID component of the ARN. */
		readonly reservationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:reservednode/${props.reservationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reservednode resource.
	 */
	static isValidReservednodeArn(arn: string): boolean {
		return ReservednodeArnRegex.test(arn);
	}

	/**
	 * Parses a reservednode ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservednodeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reservationId: string;
	} {
		const match = ReservednodeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reservednode ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reservationId: match.groups!.reservationId,
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
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:snapshot/${props.snapshotName}`;
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
		/** The SubnetGroupName component of the ARN. */
		readonly subnetGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:subnetgroup/${props.subnetGroupName}`;
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
		subnetGroupName: string;
	} {
		const match = SubnetgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subnetgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subnetGroupName: match.groups!.subnetGroupName,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The UserName component of the ARN. */
		readonly userName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:memorydb:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.userName}`;
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
		userName: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userName: match.groups!.userName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for memorydb.
 */
export class MemoryDBOperations {
	/** IAM actions required for the BatchUpdateCluster API call. */
	static readonly BATCH_UPDATE_CLUSTER: string[] = [
		"memorydb:BatchUpdateCluster",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly COPY_SNAPSHOT: string[] = [
		"memorydb:CopySnapshot",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateACL API call. */
	static readonly CREATE_ACL: string[] = [
		"memorydb:CreateAcl",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"memorydb:CreateCluster",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateMultiRegionCluster API call. */
	static readonly CREATE_MULTI_REGION_CLUSTER: string[] = [
		"memorydb:CreateMultiRegionCluster",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateParameterGroup API call. */
	static readonly CREATE_PARAMETER_GROUP: string[] = [
		"memorydb:CreateParameterGroup",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CREATE_SNAPSHOT: string[] = [
		"memorydb:CreateSnapshot",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateSubnetGroup API call. */
	static readonly CREATE_SUBNET_GROUP: string[] = [
		"memorydb:CreateSubnetGroup",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"memorydb:CreateUser",
		"memorydb:TagResource",
	];
	/** IAM actions required for the DeleteACL API call. */
	static readonly DELETE_ACL: string[] = ["memorydb:DeleteAcl"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = [
		"memorydb:CreateSnapshot",
		"memorydb:DeleteCluster",
	];
	/** IAM actions required for the DeleteMultiRegionCluster API call. */
	static readonly DELETE_MULTI_REGION_CLUSTER: string[] = [
		"memorydb:DeleteMultiRegionCluster",
	];
	/** IAM actions required for the DeleteParameterGroup API call. */
	static readonly DELETE_PARAMETER_GROUP: string[] = [
		"memorydb:DeleteParameterGroup",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DELETE_SNAPSHOT: string[] = ["memorydb:DeleteSnapshot"];
	/** IAM actions required for the DeleteSubnetGroup API call. */
	static readonly DELETE_SUBNET_GROUP: string[] = [
		"memorydb:DeleteSubnetGroup",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["memorydb:DeleteUser"];
	/** IAM actions required for the DescribeACLs API call. */
	static readonly DESCRIBE_AC_LS: string[] = ["memorydb:DescribeAcls"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DESCRIBE_CLUSTERS: string[] = ["memorydb:DescribeClusters"];
	/** IAM actions required for the DescribeEngineVersions API call. */
	static readonly DESCRIBE_ENGINE_VERSIONS: string[] = [
		"memorydb:DescribeEngineVersions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["memorydb:DescribeEvents"];
	/** IAM actions required for the DescribeMultiRegionClusters API call. */
	static readonly DESCRIBE_MULTI_REGION_CLUSTERS: string[] = [
		"memorydb:DescribeMultiRegionClusters",
	];
	/** IAM actions required for the DescribeMultiRegionParameterGroups API call. */
	static readonly DESCRIBE_MULTI_REGION_PARAMETER_GROUPS: string[] = [
		"memorydb:DescribeMultiRegionParameterGroups",
	];
	/** IAM actions required for the DescribeMultiRegionParameters API call. */
	static readonly DESCRIBE_MULTI_REGION_PARAMETERS: string[] = [
		"memorydb:DescribeMultiRegionParameters",
	];
	/** IAM actions required for the DescribeParameterGroups API call. */
	static readonly DESCRIBE_PARAMETER_GROUPS: string[] = [
		"memorydb:DescribeParameterGroups",
	];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DESCRIBE_PARAMETERS: string[] = [
		"memorydb:DescribeParameters",
	];
	/** IAM actions required for the DescribeReservedNodes API call. */
	static readonly DESCRIBE_RESERVED_NODES: string[] = [
		"memorydb:DescribeReservedNodes",
	];
	/** IAM actions required for the DescribeReservedNodesOfferings API call. */
	static readonly DESCRIBE_RESERVED_NODES_OFFERINGS: string[] = [
		"memorydb:DescribeReservedNodesOfferings",
	];
	/** IAM actions required for the DescribeServiceUpdates API call. */
	static readonly DESCRIBE_SERVICE_UPDATES: string[] = [
		"memorydb:DescribeServiceUpdates",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DESCRIBE_SNAPSHOTS: string[] = ["memorydb:DescribeSnapshots"];
	/** IAM actions required for the DescribeSubnetGroups API call. */
	static readonly DESCRIBE_SUBNET_GROUPS: string[] = [
		"memorydb:DescribeSubnetGroups",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DESCRIBE_USERS: string[] = ["memorydb:DescribeUsers"];
	/** IAM actions required for the FailoverShard API call. */
	static readonly FAILOVER_SHARD: string[] = ["memorydb:FailoverShard"];
	/** IAM actions required for the ListAllowedMultiRegionClusterUpdates API call. */
	static readonly LIST_ALLOWED_MULTI_REGION_CLUSTER_UPDATES: string[] = [
		"memorydb:ListAllowedMultiRegionClusterUpdates",
	];
	/** IAM actions required for the ListAllowedNodeTypeUpdates API call. */
	static readonly LIST_ALLOWED_NODE_TYPE_UPDATES: string[] = [
		"memorydb:ListAllowedNodeTypeUpdates",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["memorydb:ListTags"];
	/** IAM actions required for the PurchaseReservedNodesOffering API call. */
	static readonly PURCHASE_RESERVED_NODES_OFFERING: string[] = [
		"memorydb:PurchaseReservedNodesOffering",
		"memorydb:TagResource",
	];
	/** IAM actions required for the ResetParameterGroup API call. */
	static readonly RESET_PARAMETER_GROUP: string[] = [
		"memorydb:ResetParameterGroup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["memorydb:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["memorydb:UntagResource"];
	/** IAM actions required for the UpdateACL API call. */
	static readonly UPDATE_ACL: string[] = ["memorydb:UpdateAcl"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["memorydb:UpdateCluster"];
	/** IAM actions required for the UpdateMultiRegionCluster API call. */
	static readonly UPDATE_MULTI_REGION_CLUSTER: string[] = [
		"memorydb:UpdateMultiRegionCluster",
	];
	/** IAM actions required for the UpdateParameterGroup API call. */
	static readonly UPDATE_PARAMETER_GROUP: string[] = [
		"memorydb:UpdateParameterGroup",
	];
	/** IAM actions required for the UpdateSubnetGroup API call. */
	static readonly UPDATE_SUBNET_GROUP: string[] = [
		"memorydb:UpdateSubnetGroup",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["memorydb:UpdateUser"];
}

/**
 * Condition key constants and builders for memorydb.
 */
export class MemoryDBConditions {
	/** Condition keys applicable to the BatchUpdateCluster action. */
	static readonly BATCH_UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Connect action. */
	static readonly CONNECT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopySnapshot action. */
	static readonly COPY_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcl action. */
	static readonly CREATE_ACL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:TLSEnabled",
	];
	/** Condition keys applicable to the CreateMultiRegionCluster action. */
	static readonly CREATE_MULTI_REGION_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:TLSEnabled",
	];
	/** Condition keys applicable to the CreateParameterGroup action. */
	static readonly CREATE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CREATE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubnetGroup action. */
	static readonly CREATE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:UserAuthenticationMode",
	];
	/** Condition keys applicable to the DeleteAcl action. */
	static readonly DELETE_ACL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCluster action. */
	static readonly DELETE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteMultiRegionCluster action. */
	static readonly DELETE_MULTI_REGION_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteParameterGroup action. */
	static readonly DELETE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSnapshot action. */
	static readonly DELETE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSubnetGroup action. */
	static readonly DELETE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DELETE_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAcls action. */
	static readonly DESCRIBE_ACLS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeClusters action. */
	static readonly DESCRIBE_CLUSTERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeMultiRegionClusters action. */
	static readonly DESCRIBE_MULTI_REGION_CLUSTERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeParameterGroups action. */
	static readonly DESCRIBE_PARAMETER_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeParameters action. */
	static readonly DESCRIBE_PARAMETERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReservedNodes action. */
	static readonly DESCRIBE_RESERVED_NODES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSnapshots action. */
	static readonly DESCRIBE_SNAPSHOTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSubnetGroups action. */
	static readonly DESCRIBE_SUBNET_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUsers action. */
	static readonly DESCRIBE_USERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the FailoverShard action. */
	static readonly FAILOVER_SHARD_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAllowedMultiRegionClusterUpdates action. */
	static readonly LIST_ALLOWED_MULTI_REGION_CLUSTER_UPDATES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListAllowedNodeTypeUpdates action. */
	static readonly LIST_ALLOWED_NODE_TYPE_UPDATES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTags action. */
	static readonly LIST_TAGS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PauseMultiRegionClusterReplication action. */
	static readonly PAUSE_MULTI_REGION_CLUSTER_REPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the PurchaseReservedNodesOffering action. */
	static readonly PURCHASE_RESERVED_NODES_OFFERING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResetParameterGroup action. */
	static readonly RESET_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAcl action. */
	static readonly UPDATE_ACL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateMultiRegionCluster action. */
	static readonly UPDATE_MULTI_REGION_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateParameterGroup action. */
	static readonly UPDATE_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSubnetGroup action. */
	static readonly UPDATE_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UPDATE_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"memorydb:UserAuthenticationMode",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: memorydb:TLSEnabled (Bool) */
	static readonly TLS_ENABLED = "memorydb:TLSEnabled";
	/** Condition key: memorydb:UserAuthenticationMode (String) */
	static readonly USER_AUTHENTICATION_MODE = "memorydb:UserAuthenticationMode";

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
	 * Generates a condition block for `memorydb:TLSEnabled`.
	 */
	static tlsEnabled(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "memorydb:TLSEnabled": value } };
	}

	/**
	 * Generates a condition block for `memorydb:UserAuthenticationMode`.
	 */
	static userAuthenticationMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "memorydb:UserAuthenticationMode": value } };
	}
}
