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
	static readonly BatchUpdateCluster = "memorydb:BatchUpdateCluster";
	/** [Write] memorydb:Connect */
	static readonly Connect = "memorydb:Connect";
	/** [Write] memorydb:CopySnapshot */
	static readonly CopySnapshot = "memorydb:CopySnapshot";
	/** [Write] memorydb:CreateAcl */
	static readonly CreateAcl = "memorydb:CreateAcl";
	/** [Write] memorydb:CreateCluster */
	static readonly CreateCluster = "memorydb:CreateCluster";
	/** [Write] memorydb:CreateMultiRegionCluster */
	static readonly CreateMultiRegionCluster =
		"memorydb:CreateMultiRegionCluster";
	/** [Write] memorydb:CreateParameterGroup */
	static readonly CreateParameterGroup = "memorydb:CreateParameterGroup";
	/** [Write] memorydb:CreateSnapshot */
	static readonly CreateSnapshot = "memorydb:CreateSnapshot";
	/** [Write] memorydb:CreateSubnetGroup */
	static readonly CreateSubnetGroup = "memorydb:CreateSubnetGroup";
	/** [Write] memorydb:CreateUser */
	static readonly CreateUser = "memorydb:CreateUser";
	/** [Write] memorydb:DeleteAcl */
	static readonly DeleteAcl = "memorydb:DeleteAcl";
	/** [Write] memorydb:DeleteCluster */
	static readonly DeleteCluster = "memorydb:DeleteCluster";
	/** [Write] memorydb:DeleteMultiRegionCluster */
	static readonly DeleteMultiRegionCluster =
		"memorydb:DeleteMultiRegionCluster";
	/** [Write] memorydb:DeleteParameterGroup */
	static readonly DeleteParameterGroup = "memorydb:DeleteParameterGroup";
	/** [Write] memorydb:DeleteSnapshot */
	static readonly DeleteSnapshot = "memorydb:DeleteSnapshot";
	/** [Write] memorydb:DeleteSubnetGroup */
	static readonly DeleteSubnetGroup = "memorydb:DeleteSubnetGroup";
	/** [Write] memorydb:DeleteUser */
	static readonly DeleteUser = "memorydb:DeleteUser";
	/** [Read] memorydb:DescribeAcls */
	static readonly DescribeAcls = "memorydb:DescribeAcls";
	/** [Read] memorydb:DescribeClusters */
	static readonly DescribeClusters = "memorydb:DescribeClusters";
	/** [Read] memorydb:DescribeEngineVersions */
	static readonly DescribeEngineVersions = "memorydb:DescribeEngineVersions";
	/** [Read] memorydb:DescribeEvents */
	static readonly DescribeEvents = "memorydb:DescribeEvents";
	/** [Read] memorydb:DescribeMultiRegionClusters */
	static readonly DescribeMultiRegionClusters =
		"memorydb:DescribeMultiRegionClusters";
	/** [Read] memorydb:DescribeMultiRegionParameterGroups */
	static readonly DescribeMultiRegionParameterGroups =
		"memorydb:DescribeMultiRegionParameterGroups";
	/** [Read] memorydb:DescribeMultiRegionParameters */
	static readonly DescribeMultiRegionParameters =
		"memorydb:DescribeMultiRegionParameters";
	/** [Read] memorydb:DescribeParameterGroups */
	static readonly DescribeParameterGroups = "memorydb:DescribeParameterGroups";
	/** [Read] memorydb:DescribeParameters */
	static readonly DescribeParameters = "memorydb:DescribeParameters";
	/** [Read] memorydb:DescribeReservedNodes */
	static readonly DescribeReservedNodes = "memorydb:DescribeReservedNodes";
	/** [Read] memorydb:DescribeReservedNodesOfferings */
	static readonly DescribeReservedNodesOfferings =
		"memorydb:DescribeReservedNodesOfferings";
	/** [Read] memorydb:DescribeServiceUpdates */
	static readonly DescribeServiceUpdates = "memorydb:DescribeServiceUpdates";
	/** [Read] memorydb:DescribeSnapshots */
	static readonly DescribeSnapshots = "memorydb:DescribeSnapshots";
	/** [Read] memorydb:DescribeSubnetGroups */
	static readonly DescribeSubnetGroups = "memorydb:DescribeSubnetGroups";
	/** [Read] memorydb:DescribeUsers */
	static readonly DescribeUsers = "memorydb:DescribeUsers";
	/** [Write] memorydb:FailoverShard */
	static readonly FailoverShard = "memorydb:FailoverShard";
	/** [Read] memorydb:ListAllowedMultiRegionClusterUpdates */
	static readonly ListAllowedMultiRegionClusterUpdates =
		"memorydb:ListAllowedMultiRegionClusterUpdates";
	/** [Read] memorydb:ListAllowedNodeTypeUpdates */
	static readonly ListAllowedNodeTypeUpdates =
		"memorydb:ListAllowedNodeTypeUpdates";
	/** [Read] memorydb:ListTags */
	static readonly ListTags = "memorydb:ListTags";
	/** [Write] memorydb:PauseMultiRegionClusterReplication */
	static readonly PauseMultiRegionClusterReplication =
		"memorydb:PauseMultiRegionClusterReplication";
	/** [Write] memorydb:PurchaseReservedNodesOffering */
	static readonly PurchaseReservedNodesOffering =
		"memorydb:PurchaseReservedNodesOffering";
	/** [Write] memorydb:ResetParameterGroup */
	static readonly ResetParameterGroup = "memorydb:ResetParameterGroup";
	/** [Tagging] memorydb:TagResource */
	static readonly TagResource = "memorydb:TagResource";
	/** [Tagging] memorydb:UntagResource */
	static readonly UntagResource = "memorydb:UntagResource";
	/** [Write] memorydb:UpdateAcl */
	static readonly UpdateAcl = "memorydb:UpdateAcl";
	/** [Write] memorydb:UpdateCluster */
	static readonly UpdateCluster = "memorydb:UpdateCluster";
	/** [Write] memorydb:UpdateMultiRegionCluster */
	static readonly UpdateMultiRegionCluster =
		"memorydb:UpdateMultiRegionCluster";
	/** [Write] memorydb:UpdateParameterGroup */
	static readonly UpdateParameterGroup = "memorydb:UpdateParameterGroup";
	/** [Write] memorydb:UpdateSubnetGroup */
	static readonly UpdateSubnetGroup = "memorydb:UpdateSubnetGroup";
	/** [Write] memorydb:UpdateUser */
	static readonly UpdateUser = "memorydb:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MemoryDBActions.DescribeAcls,
		MemoryDBActions.DescribeClusters,
		MemoryDBActions.DescribeEngineVersions,
		MemoryDBActions.DescribeEvents,
		MemoryDBActions.DescribeMultiRegionClusters,
		MemoryDBActions.DescribeMultiRegionParameterGroups,
		MemoryDBActions.DescribeMultiRegionParameters,
		MemoryDBActions.DescribeParameterGroups,
		MemoryDBActions.DescribeParameters,
		MemoryDBActions.DescribeReservedNodes,
		MemoryDBActions.DescribeReservedNodesOfferings,
		MemoryDBActions.DescribeServiceUpdates,
		MemoryDBActions.DescribeSnapshots,
		MemoryDBActions.DescribeSubnetGroups,
		MemoryDBActions.DescribeUsers,
		MemoryDBActions.ListAllowedMultiRegionClusterUpdates,
		MemoryDBActions.ListAllowedNodeTypeUpdates,
		MemoryDBActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MemoryDBActions.BatchUpdateCluster,
		MemoryDBActions.Connect,
		MemoryDBActions.CopySnapshot,
		MemoryDBActions.CreateAcl,
		MemoryDBActions.CreateCluster,
		MemoryDBActions.CreateMultiRegionCluster,
		MemoryDBActions.CreateParameterGroup,
		MemoryDBActions.CreateSnapshot,
		MemoryDBActions.CreateSubnetGroup,
		MemoryDBActions.CreateUser,
		MemoryDBActions.DeleteAcl,
		MemoryDBActions.DeleteCluster,
		MemoryDBActions.DeleteMultiRegionCluster,
		MemoryDBActions.DeleteParameterGroup,
		MemoryDBActions.DeleteSnapshot,
		MemoryDBActions.DeleteSubnetGroup,
		MemoryDBActions.DeleteUser,
		MemoryDBActions.FailoverShard,
		MemoryDBActions.PauseMultiRegionClusterReplication,
		MemoryDBActions.PurchaseReservedNodesOffering,
		MemoryDBActions.ResetParameterGroup,
		MemoryDBActions.UpdateAcl,
		MemoryDBActions.UpdateCluster,
		MemoryDBActions.UpdateMultiRegionCluster,
		MemoryDBActions.UpdateParameterGroup,
		MemoryDBActions.UpdateSubnetGroup,
		MemoryDBActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MemoryDBActions.TagResource,
		MemoryDBActions.UntagResource,
	];
}

/**
 * Properties for building a acl ARN.
 */
export interface MemoryDBAclArnProps {
	/** The AclName component of the ARN. */
	readonly aclName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a acl ARN.
 */
export interface MemoryDBAclArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AclName component. */
	readonly aclName: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface MemoryDBClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
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
export interface MemoryDBClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a multiregioncluster ARN.
 */
export interface MemoryDBMultiregionclusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a multiregioncluster ARN.
 */
export interface MemoryDBMultiregionclusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a multiregionparametergroup ARN.
 */
export interface MemoryDBMultiregionparametergroupArnProps {
	/** The MultiRegionParameterGroupName component of the ARN. */
	readonly multiRegionParameterGroupName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a multiregionparametergroup ARN.
 */
export interface MemoryDBMultiregionparametergroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MultiRegionParameterGroupName component. */
	readonly multiRegionParameterGroupName: string;
}

/**
 * Properties for building a parametergroup ARN.
 */
export interface MemoryDBParametergroupArnProps {
	/** The ParameterGroupName component of the ARN. */
	readonly parameterGroupName: string;
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
export interface MemoryDBParametergroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ParameterGroupName component. */
	readonly parameterGroupName: string;
}

/**
 * Properties for building a reservednode ARN.
 */
export interface MemoryDBReservednodeArnProps {
	/** The ReservationID component of the ARN. */
	readonly reservationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reservednode ARN.
 */
export interface MemoryDBReservednodeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReservationID component. */
	readonly reservationId: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface MemoryDBSnapshotArnProps {
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
export interface MemoryDBSnapshotArnComponents {
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
export interface MemoryDBSubnetgroupArnProps {
	/** The SubnetGroupName component of the ARN. */
	readonly subnetGroupName: string;
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
export interface MemoryDBSubnetgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubnetGroupName component. */
	readonly subnetGroupName: string;
}

/**
 * Properties for building a user ARN.
 */
export interface MemoryDBUserArnProps {
	/** The UserName component of the ARN. */
	readonly userName: string;
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
export interface MemoryDBUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserName component. */
	readonly userName: string;
}

const AclArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):acl\/(?<aclName>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)$/;
const MultiregionclusterArnRegex =
	/^arn:(?<partition>[^:]+):memorydb::(?<account>[^:]*):multiregioncluster\/(?<clusterName>[^:/?]+)$/;
const MultiregionparametergroupArnRegex =
	/^arn:(?<partition>[^:]+):memorydb::(?<account>[^:]*):multiregionparametergroup\/(?<multiRegionParameterGroupName>[^:/?]+)$/;
const ParametergroupArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):parametergroup\/(?<parameterGroupName>[^:/?]+)$/;
const ReservednodeArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):reservednode\/(?<reservationId>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):snapshot\/(?<snapshotName>[^:/?]+)$/;
const SubnetgroupArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):subnetgroup\/(?<subnetGroupName>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):memorydb:(?<region>[^:]*):(?<account>[^:]*):user\/(?<userName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for memorydb resources.
 */
export class MemoryDBResources {
	/**
	 * Builds an ARN for the acl resource.
	 */
	static acl(props: MemoryDBAclArnProps): string {
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
	static parseAclArn(arn: string): MemoryDBAclArnComponents {
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
	static cluster(props: MemoryDBClusterArnProps): string {
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
	static parseClusterArn(arn: string): MemoryDBClusterArnComponents {
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
	static multiregioncluster(props: MemoryDBMultiregionclusterArnProps): string {
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
	static parseMultiregionclusterArn(
		arn: string,
	): MemoryDBMultiregionclusterArnComponents {
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
	static multiregionparametergroup(
		props: MemoryDBMultiregionparametergroupArnProps,
	): string {
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
	static parseMultiregionparametergroupArn(
		arn: string,
	): MemoryDBMultiregionparametergroupArnComponents {
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
	static parametergroup(props: MemoryDBParametergroupArnProps): string {
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
	static parseParametergroupArn(
		arn: string,
	): MemoryDBParametergroupArnComponents {
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
	static reservednode(props: MemoryDBReservednodeArnProps): string {
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
	static parseReservednodeArn(arn: string): MemoryDBReservednodeArnComponents {
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
	static snapshot(props: MemoryDBSnapshotArnProps): string {
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
	static parseSnapshotArn(arn: string): MemoryDBSnapshotArnComponents {
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
	static subnetgroup(props: MemoryDBSubnetgroupArnProps): string {
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
	static parseSubnetgroupArn(arn: string): MemoryDBSubnetgroupArnComponents {
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
	static user(props: MemoryDBUserArnProps): string {
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
	static parseUserArn(arn: string): MemoryDBUserArnComponents {
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
	static readonly BatchUpdateCluster: string[] = [
		"memorydb:BatchUpdateCluster",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly CopySnapshot: string[] = [
		"memorydb:CopySnapshot",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateACL API call. */
	static readonly CreateACL: string[] = [
		"memorydb:CreateAcl",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"memorydb:CreateCluster",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateMultiRegionCluster API call. */
	static readonly CreateMultiRegionCluster: string[] = [
		"memorydb:CreateMultiRegionCluster",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateParameterGroup API call. */
	static readonly CreateParameterGroup: string[] = [
		"memorydb:CreateParameterGroup",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = [
		"memorydb:CreateSnapshot",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateSubnetGroup API call. */
	static readonly CreateSubnetGroup: string[] = [
		"memorydb:CreateSubnetGroup",
		"memorydb:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"memorydb:CreateUser",
		"memorydb:TagResource",
	];
	/** IAM actions required for the DeleteACL API call. */
	static readonly DeleteACL: string[] = ["memorydb:DeleteAcl"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = [
		"memorydb:CreateSnapshot",
		"memorydb:DeleteCluster",
	];
	/** IAM actions required for the DeleteMultiRegionCluster API call. */
	static readonly DeleteMultiRegionCluster: string[] = [
		"memorydb:DeleteMultiRegionCluster",
	];
	/** IAM actions required for the DeleteParameterGroup API call. */
	static readonly DeleteParameterGroup: string[] = [
		"memorydb:DeleteParameterGroup",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DeleteSnapshot: string[] = ["memorydb:DeleteSnapshot"];
	/** IAM actions required for the DeleteSubnetGroup API call. */
	static readonly DeleteSubnetGroup: string[] = ["memorydb:DeleteSubnetGroup"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["memorydb:DeleteUser"];
	/** IAM actions required for the DescribeACLs API call. */
	static readonly DescribeACLs: string[] = ["memorydb:DescribeAcls"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DescribeClusters: string[] = ["memorydb:DescribeClusters"];
	/** IAM actions required for the DescribeEngineVersions API call. */
	static readonly DescribeEngineVersions: string[] = [
		"memorydb:DescribeEngineVersions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["memorydb:DescribeEvents"];
	/** IAM actions required for the DescribeMultiRegionClusters API call. */
	static readonly DescribeMultiRegionClusters: string[] = [
		"memorydb:DescribeMultiRegionClusters",
	];
	/** IAM actions required for the DescribeMultiRegionParameterGroups API call. */
	static readonly DescribeMultiRegionParameterGroups: string[] = [
		"memorydb:DescribeMultiRegionParameterGroups",
	];
	/** IAM actions required for the DescribeMultiRegionParameters API call. */
	static readonly DescribeMultiRegionParameters: string[] = [
		"memorydb:DescribeMultiRegionParameters",
	];
	/** IAM actions required for the DescribeParameterGroups API call. */
	static readonly DescribeParameterGroups: string[] = [
		"memorydb:DescribeParameterGroups",
	];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DescribeParameters: string[] = [
		"memorydb:DescribeParameters",
	];
	/** IAM actions required for the DescribeReservedNodes API call. */
	static readonly DescribeReservedNodes: string[] = [
		"memorydb:DescribeReservedNodes",
	];
	/** IAM actions required for the DescribeReservedNodesOfferings API call. */
	static readonly DescribeReservedNodesOfferings: string[] = [
		"memorydb:DescribeReservedNodesOfferings",
	];
	/** IAM actions required for the DescribeServiceUpdates API call. */
	static readonly DescribeServiceUpdates: string[] = [
		"memorydb:DescribeServiceUpdates",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DescribeSnapshots: string[] = ["memorydb:DescribeSnapshots"];
	/** IAM actions required for the DescribeSubnetGroups API call. */
	static readonly DescribeSubnetGroups: string[] = [
		"memorydb:DescribeSubnetGroups",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DescribeUsers: string[] = ["memorydb:DescribeUsers"];
	/** IAM actions required for the FailoverShard API call. */
	static readonly FailoverShard: string[] = ["memorydb:FailoverShard"];
	/** IAM actions required for the ListAllowedMultiRegionClusterUpdates API call. */
	static readonly ListAllowedMultiRegionClusterUpdates: string[] = [
		"memorydb:ListAllowedMultiRegionClusterUpdates",
	];
	/** IAM actions required for the ListAllowedNodeTypeUpdates API call. */
	static readonly ListAllowedNodeTypeUpdates: string[] = [
		"memorydb:ListAllowedNodeTypeUpdates",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["memorydb:ListTags"];
	/** IAM actions required for the PurchaseReservedNodesOffering API call. */
	static readonly PurchaseReservedNodesOffering: string[] = [
		"memorydb:PurchaseReservedNodesOffering",
		"memorydb:TagResource",
	];
	/** IAM actions required for the ResetParameterGroup API call. */
	static readonly ResetParameterGroup: string[] = [
		"memorydb:ResetParameterGroup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["memorydb:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["memorydb:UntagResource"];
	/** IAM actions required for the UpdateACL API call. */
	static readonly UpdateACL: string[] = ["memorydb:UpdateAcl"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = ["memorydb:UpdateCluster"];
	/** IAM actions required for the UpdateMultiRegionCluster API call. */
	static readonly UpdateMultiRegionCluster: string[] = [
		"memorydb:UpdateMultiRegionCluster",
	];
	/** IAM actions required for the UpdateParameterGroup API call. */
	static readonly UpdateParameterGroup: string[] = [
		"memorydb:UpdateParameterGroup",
	];
	/** IAM actions required for the UpdateSubnetGroup API call. */
	static readonly UpdateSubnetGroup: string[] = ["memorydb:UpdateSubnetGroup"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["memorydb:UpdateUser"];
}

/**
 * Condition key constants and builders for memorydb.
 */
export class MemoryDBConditions {
	/** Condition keys applicable to the BatchUpdateCluster action. */
	static readonly BatchUpdateClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Connect action. */
	static readonly ConnectConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopySnapshot action. */
	static readonly CopySnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcl action. */
	static readonly CreateAclConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:TLSEnabled",
	];
	/** Condition keys applicable to the CreateMultiRegionCluster action. */
	static readonly CreateMultiRegionClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:TLSEnabled",
	];
	/** Condition keys applicable to the CreateParameterGroup action. */
	static readonly CreateParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CreateSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubnetGroup action. */
	static readonly CreateSubnetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"memorydb:UserAuthenticationMode",
	];
	/** Condition keys applicable to the DeleteAcl action. */
	static readonly DeleteAclConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCluster action. */
	static readonly DeleteClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteMultiRegionCluster action. */
	static readonly DeleteMultiRegionClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteParameterGroup action. */
	static readonly DeleteParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSnapshot action. */
	static readonly DeleteSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSubnetGroup action. */
	static readonly DeleteSubnetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DeleteUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAcls action. */
	static readonly DescribeAclsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeClusters action. */
	static readonly DescribeClustersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeMultiRegionClusters action. */
	static readonly DescribeMultiRegionClustersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeParameterGroups action. */
	static readonly DescribeParameterGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeParameters action. */
	static readonly DescribeParametersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeReservedNodes action. */
	static readonly DescribeReservedNodesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSnapshots action. */
	static readonly DescribeSnapshotsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSubnetGroups action. */
	static readonly DescribeSubnetGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUsers action. */
	static readonly DescribeUsersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the FailoverShard action. */
	static readonly FailoverShardConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAllowedMultiRegionClusterUpdates action. */
	static readonly ListAllowedMultiRegionClusterUpdatesConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListAllowedNodeTypeUpdates action. */
	static readonly ListAllowedNodeTypeUpdatesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTags action. */
	static readonly ListTagsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PauseMultiRegionClusterReplication action. */
	static readonly PauseMultiRegionClusterReplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PurchaseReservedNodesOffering action. */
	static readonly PurchaseReservedNodesOfferingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResetParameterGroup action. */
	static readonly ResetParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAcl action. */
	static readonly UpdateAclConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UpdateClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateMultiRegionCluster action. */
	static readonly UpdateMultiRegionClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateParameterGroup action. */
	static readonly UpdateParameterGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSubnetGroup action. */
	static readonly UpdateSubnetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UpdateUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"memorydb:UserAuthenticationMode",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
