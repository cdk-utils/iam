// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/odb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the odb service.
 */
export class OdbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "odb";

	/** [Write] odb:AcceptMarketplaceRegistration */
	static readonly ACCEPT_MARKETPLACE_REGISTRATION =
		"odb:AcceptMarketplaceRegistration";
	/** [Write] odb:AssociateIamRoleToResource */
	static readonly ASSOCIATE_IAM_ROLE_TO_RESOURCE =
		"odb:AssociateIamRoleToResource";
	/** [Write] odb:CreateAutonomousDatabase */
	static readonly CREATE_AUTONOMOUS_DATABASE = "odb:CreateAutonomousDatabase";
	/** [Write] odb:CreateAutonomousDatabaseBackup */
	static readonly CREATE_AUTONOMOUS_DATABASE_BACKUP =
		"odb:CreateAutonomousDatabaseBackup";
	/** [Write] odb:CreateAutonomousDatabaseWallet */
	static readonly CREATE_AUTONOMOUS_DATABASE_WALLET =
		"odb:CreateAutonomousDatabaseWallet";
	/** [Write] odb:CreateCloudAutonomousVmCluster */
	static readonly CREATE_CLOUD_AUTONOMOUS_VM_CLUSTER =
		"odb:CreateCloudAutonomousVmCluster";
	/** [Write] odb:CreateCloudExadataInfrastructure */
	static readonly CREATE_CLOUD_EXADATA_INFRASTRUCTURE =
		"odb:CreateCloudExadataInfrastructure";
	/** [Write] odb:CreateCloudVmCluster */
	static readonly CREATE_CLOUD_VM_CLUSTER = "odb:CreateCloudVmCluster";
	/** [Write] odb:CreateDbNode */
	static readonly CREATE_DB_NODE = "odb:CreateDbNode";
	/** [Write] odb:CreateGrantShare */
	static readonly CREATE_GRANT_SHARE = "odb:CreateGrantShare";
	/** [Write] odb:CreateOdbNetwork */
	static readonly CREATE_ODB_NETWORK = "odb:CreateOdbNetwork";
	/** [Write] odb:CreateOdbPeeringConnection */
	static readonly CREATE_ODB_PEERING_CONNECTION =
		"odb:CreateOdbPeeringConnection";
	/** [Write] odb:CreateOutboundIntegration */
	static readonly CREATE_OUTBOUND_INTEGRATION = "odb:CreateOutboundIntegration";
	/** [Write] odb:DeleteAutonomousDatabase */
	static readonly DELETE_AUTONOMOUS_DATABASE = "odb:DeleteAutonomousDatabase";
	/** [Write] odb:DeleteAutonomousDatabaseBackup */
	static readonly DELETE_AUTONOMOUS_DATABASE_BACKUP =
		"odb:DeleteAutonomousDatabaseBackup";
	/** [Write] odb:DeleteCloudAutonomousVmCluster */
	static readonly DELETE_CLOUD_AUTONOMOUS_VM_CLUSTER =
		"odb:DeleteCloudAutonomousVmCluster";
	/** [Write] odb:DeleteCloudExadataInfrastructure */
	static readonly DELETE_CLOUD_EXADATA_INFRASTRUCTURE =
		"odb:DeleteCloudExadataInfrastructure";
	/** [Write] odb:DeleteCloudVmCluster */
	static readonly DELETE_CLOUD_VM_CLUSTER = "odb:DeleteCloudVmCluster";
	/** [Write] odb:DeleteDbNode */
	static readonly DELETE_DB_NODE = "odb:DeleteDbNode";
	/** [Write] odb:DeleteGrantShare */
	static readonly DELETE_GRANT_SHARE = "odb:DeleteGrantShare";
	/** [Write] odb:DeleteOdbNetwork */
	static readonly DELETE_ODB_NETWORK = "odb:DeleteOdbNetwork";
	/** [Write] odb:DeleteOdbPeeringConnection */
	static readonly DELETE_ODB_PEERING_CONNECTION =
		"odb:DeleteOdbPeeringConnection";
	/** [Write] odb:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "odb:DeleteResourcePolicy";
	/** [Write] odb:DisassociateIamRoleFromResource */
	static readonly DISASSOCIATE_IAM_ROLE_FROM_RESOURCE =
		"odb:DisassociateIamRoleFromResource";
	/** [Write] odb:FailoverAutonomousDatabase */
	static readonly FAILOVER_AUTONOMOUS_DATABASE =
		"odb:FailoverAutonomousDatabase";
	/** [Read] odb:GetAutonomousDatabase */
	static readonly GET_AUTONOMOUS_DATABASE = "odb:GetAutonomousDatabase";
	/** [Read] odb:GetAutonomousDatabaseBackup */
	static readonly GET_AUTONOMOUS_DATABASE_BACKUP =
		"odb:GetAutonomousDatabaseBackup";
	/** [Read] odb:GetAutonomousDatabaseWalletDetails */
	static readonly GET_AUTONOMOUS_DATABASE_WALLET_DETAILS =
		"odb:GetAutonomousDatabaseWalletDetails";
	/** [Read] odb:GetCloudAutonomousVmCluster */
	static readonly GET_CLOUD_AUTONOMOUS_VM_CLUSTER =
		"odb:GetCloudAutonomousVmCluster";
	/** [Read] odb:GetCloudExadataInfrastructure */
	static readonly GET_CLOUD_EXADATA_INFRASTRUCTURE =
		"odb:GetCloudExadataInfrastructure";
	/** [Read] odb:GetCloudExadataInfrastructureUnallocatedResources */
	static readonly GET_CLOUD_EXADATA_INFRASTRUCTURE_UNALLOCATED_RESOURCES =
		"odb:GetCloudExadataInfrastructureUnallocatedResources";
	/** [Read] odb:GetCloudVmCluster */
	static readonly GET_CLOUD_VM_CLUSTER = "odb:GetCloudVmCluster";
	/** [Read] odb:GetDbNode */
	static readonly GET_DB_NODE = "odb:GetDbNode";
	/** [Read] odb:GetDbServer */
	static readonly GET_DB_SERVER = "odb:GetDbServer";
	/** [Read] odb:GetOciOnboardingStatus */
	static readonly GET_OCI_ONBOARDING_STATUS = "odb:GetOciOnboardingStatus";
	/** [Read] odb:GetOdbNetwork */
	static readonly GET_ODB_NETWORK = "odb:GetOdbNetwork";
	/** [Read] odb:GetOdbPeeringConnection */
	static readonly GET_ODB_PEERING_CONNECTION = "odb:GetOdbPeeringConnection";
	/** [Read] odb:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "odb:GetResourcePolicy";
	/** [Write] odb:InitializeService */
	static readonly INITIALIZE_SERVICE = "odb:InitializeService";
	/** [List] odb:ListAutonomousDatabaseBackups */
	static readonly LIST_AUTONOMOUS_DATABASE_BACKUPS =
		"odb:ListAutonomousDatabaseBackups";
	/** [List] odb:ListAutonomousDatabaseCharacterSets */
	static readonly LIST_AUTONOMOUS_DATABASE_CHARACTER_SETS =
		"odb:ListAutonomousDatabaseCharacterSets";
	/** [List] odb:ListAutonomousDatabaseClones */
	static readonly LIST_AUTONOMOUS_DATABASE_CLONES =
		"odb:ListAutonomousDatabaseClones";
	/** [List] odb:ListAutonomousDatabasePeers */
	static readonly LIST_AUTONOMOUS_DATABASE_PEERS =
		"odb:ListAutonomousDatabasePeers";
	/** [List] odb:ListAutonomousDatabaseVersions */
	static readonly LIST_AUTONOMOUS_DATABASE_VERSIONS =
		"odb:ListAutonomousDatabaseVersions";
	/** [List] odb:ListAutonomousDatabases */
	static readonly LIST_AUTONOMOUS_DATABASES = "odb:ListAutonomousDatabases";
	/** [List] odb:ListAutonomousVirtualMachines */
	static readonly LIST_AUTONOMOUS_VIRTUAL_MACHINES =
		"odb:ListAutonomousVirtualMachines";
	/** [List] odb:ListCloudAutonomousVmClusters */
	static readonly LIST_CLOUD_AUTONOMOUS_VM_CLUSTERS =
		"odb:ListCloudAutonomousVmClusters";
	/** [List] odb:ListCloudExadataInfrastructures */
	static readonly LIST_CLOUD_EXADATA_INFRASTRUCTURES =
		"odb:ListCloudExadataInfrastructures";
	/** [List] odb:ListCloudVmClusters */
	static readonly LIST_CLOUD_VM_CLUSTERS = "odb:ListCloudVmClusters";
	/** [List] odb:ListDbNodes */
	static readonly LIST_DB_NODES = "odb:ListDbNodes";
	/** [List] odb:ListDbServers */
	static readonly LIST_DB_SERVERS = "odb:ListDbServers";
	/** [List] odb:ListDbSystemShapes */
	static readonly LIST_DB_SYSTEM_SHAPES = "odb:ListDbSystemShapes";
	/** [List] odb:ListFlexComponents */
	static readonly LIST_FLEX_COMPONENTS = "odb:ListFlexComponents";
	/** [List] odb:ListGiVersions */
	static readonly LIST_GI_VERSIONS = "odb:ListGiVersions";
	/** [List] odb:ListOdbNetworks */
	static readonly LIST_ODB_NETWORKS = "odb:ListOdbNetworks";
	/** [List] odb:ListOdbPeeringConnections */
	static readonly LIST_ODB_PEERING_CONNECTIONS =
		"odb:ListOdbPeeringConnections";
	/** [List] odb:ListSystemVersions */
	static readonly LIST_SYSTEM_VERSIONS = "odb:ListSystemVersions";
	/** [Read] odb:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "odb:ListTagsForResource";
	/** [Write] odb:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "odb:PutResourcePolicy";
	/** [Write] odb:RebootAutonomousDatabase */
	static readonly REBOOT_AUTONOMOUS_DATABASE = "odb:RebootAutonomousDatabase";
	/** [Write] odb:RebootDbNode */
	static readonly REBOOT_DB_NODE = "odb:RebootDbNode";
	/** [Write] odb:RestoreAutonomousDatabase */
	static readonly RESTORE_AUTONOMOUS_DATABASE = "odb:RestoreAutonomousDatabase";
	/** [Write] odb:ShrinkAutonomousDatabase */
	static readonly SHRINK_AUTONOMOUS_DATABASE = "odb:ShrinkAutonomousDatabase";
	/** [Write] odb:StartAutonomousDatabase */
	static readonly START_AUTONOMOUS_DATABASE = "odb:StartAutonomousDatabase";
	/** [Write] odb:StartDbNode */
	static readonly START_DB_NODE = "odb:StartDbNode";
	/** [Write] odb:StopAutonomousDatabase */
	static readonly STOP_AUTONOMOUS_DATABASE = "odb:StopAutonomousDatabase";
	/** [Write] odb:StopDbNode */
	static readonly STOP_DB_NODE = "odb:StopDbNode";
	/** [Write] odb:SwitchoverAutonomousDatabase */
	static readonly SWITCHOVER_AUTONOMOUS_DATABASE =
		"odb:SwitchoverAutonomousDatabase";
	/** [Tagging] odb:TagResource */
	static readonly TAG_RESOURCE = "odb:TagResource";
	/** [Tagging] odb:UntagResource */
	static readonly UNTAG_RESOURCE = "odb:UntagResource";
	/** [Write] odb:UpdateAutonomousDatabase */
	static readonly UPDATE_AUTONOMOUS_DATABASE = "odb:UpdateAutonomousDatabase";
	/** [Write] odb:UpdateAutonomousDatabaseBackup */
	static readonly UPDATE_AUTONOMOUS_DATABASE_BACKUP =
		"odb:UpdateAutonomousDatabaseBackup";
	/** [Write] odb:UpdateCloudExadataInfrastructure */
	static readonly UPDATE_CLOUD_EXADATA_INFRASTRUCTURE =
		"odb:UpdateCloudExadataInfrastructure";
	/** [Write] odb:UpdateGrantShare */
	static readonly UPDATE_GRANT_SHARE = "odb:UpdateGrantShare";
	/** [Write] odb:UpdateOdbNetwork */
	static readonly UPDATE_ODB_NETWORK = "odb:UpdateOdbNetwork";
	/** [Write] odb:UpdateOdbPeeringConnection */
	static readonly UPDATE_ODB_PEERING_CONNECTION =
		"odb:UpdateOdbPeeringConnection";
	/** [Write] odb:UpdateOutboundIntegration */
	static readonly UPDATE_OUTBOUND_INTEGRATION = "odb:UpdateOutboundIntegration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OdbActions.GET_AUTONOMOUS_DATABASE,
		OdbActions.GET_AUTONOMOUS_DATABASE_BACKUP,
		OdbActions.GET_AUTONOMOUS_DATABASE_WALLET_DETAILS,
		OdbActions.GET_CLOUD_AUTONOMOUS_VM_CLUSTER,
		OdbActions.GET_CLOUD_EXADATA_INFRASTRUCTURE,
		OdbActions.GET_CLOUD_EXADATA_INFRASTRUCTURE_UNALLOCATED_RESOURCES,
		OdbActions.GET_CLOUD_VM_CLUSTER,
		OdbActions.GET_DB_NODE,
		OdbActions.GET_DB_SERVER,
		OdbActions.GET_OCI_ONBOARDING_STATUS,
		OdbActions.GET_ODB_NETWORK,
		OdbActions.GET_ODB_PEERING_CONNECTION,
		OdbActions.GET_RESOURCE_POLICY,
		OdbActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OdbActions.ACCEPT_MARKETPLACE_REGISTRATION,
		OdbActions.ASSOCIATE_IAM_ROLE_TO_RESOURCE,
		OdbActions.CREATE_AUTONOMOUS_DATABASE,
		OdbActions.CREATE_AUTONOMOUS_DATABASE_BACKUP,
		OdbActions.CREATE_AUTONOMOUS_DATABASE_WALLET,
		OdbActions.CREATE_CLOUD_AUTONOMOUS_VM_CLUSTER,
		OdbActions.CREATE_CLOUD_EXADATA_INFRASTRUCTURE,
		OdbActions.CREATE_CLOUD_VM_CLUSTER,
		OdbActions.CREATE_DB_NODE,
		OdbActions.CREATE_GRANT_SHARE,
		OdbActions.CREATE_ODB_NETWORK,
		OdbActions.CREATE_ODB_PEERING_CONNECTION,
		OdbActions.CREATE_OUTBOUND_INTEGRATION,
		OdbActions.DELETE_AUTONOMOUS_DATABASE,
		OdbActions.DELETE_AUTONOMOUS_DATABASE_BACKUP,
		OdbActions.DELETE_CLOUD_AUTONOMOUS_VM_CLUSTER,
		OdbActions.DELETE_CLOUD_EXADATA_INFRASTRUCTURE,
		OdbActions.DELETE_CLOUD_VM_CLUSTER,
		OdbActions.DELETE_DB_NODE,
		OdbActions.DELETE_GRANT_SHARE,
		OdbActions.DELETE_ODB_NETWORK,
		OdbActions.DELETE_ODB_PEERING_CONNECTION,
		OdbActions.DELETE_RESOURCE_POLICY,
		OdbActions.DISASSOCIATE_IAM_ROLE_FROM_RESOURCE,
		OdbActions.FAILOVER_AUTONOMOUS_DATABASE,
		OdbActions.INITIALIZE_SERVICE,
		OdbActions.PUT_RESOURCE_POLICY,
		OdbActions.REBOOT_AUTONOMOUS_DATABASE,
		OdbActions.REBOOT_DB_NODE,
		OdbActions.RESTORE_AUTONOMOUS_DATABASE,
		OdbActions.SHRINK_AUTONOMOUS_DATABASE,
		OdbActions.START_AUTONOMOUS_DATABASE,
		OdbActions.START_DB_NODE,
		OdbActions.STOP_AUTONOMOUS_DATABASE,
		OdbActions.STOP_DB_NODE,
		OdbActions.SWITCHOVER_AUTONOMOUS_DATABASE,
		OdbActions.UPDATE_AUTONOMOUS_DATABASE,
		OdbActions.UPDATE_AUTONOMOUS_DATABASE_BACKUP,
		OdbActions.UPDATE_CLOUD_EXADATA_INFRASTRUCTURE,
		OdbActions.UPDATE_GRANT_SHARE,
		OdbActions.UPDATE_ODB_NETWORK,
		OdbActions.UPDATE_ODB_PEERING_CONNECTION,
		OdbActions.UPDATE_OUTBOUND_INTEGRATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OdbActions.LIST_AUTONOMOUS_DATABASE_BACKUPS,
		OdbActions.LIST_AUTONOMOUS_DATABASE_CHARACTER_SETS,
		OdbActions.LIST_AUTONOMOUS_DATABASE_CLONES,
		OdbActions.LIST_AUTONOMOUS_DATABASE_PEERS,
		OdbActions.LIST_AUTONOMOUS_DATABASE_VERSIONS,
		OdbActions.LIST_AUTONOMOUS_DATABASES,
		OdbActions.LIST_AUTONOMOUS_VIRTUAL_MACHINES,
		OdbActions.LIST_CLOUD_AUTONOMOUS_VM_CLUSTERS,
		OdbActions.LIST_CLOUD_EXADATA_INFRASTRUCTURES,
		OdbActions.LIST_CLOUD_VM_CLUSTERS,
		OdbActions.LIST_DB_NODES,
		OdbActions.LIST_DB_SERVERS,
		OdbActions.LIST_DB_SYSTEM_SHAPES,
		OdbActions.LIST_FLEX_COMPONENTS,
		OdbActions.LIST_GI_VERSIONS,
		OdbActions.LIST_ODB_NETWORKS,
		OdbActions.LIST_ODB_PEERING_CONNECTIONS,
		OdbActions.LIST_SYSTEM_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OdbActions.TAG_RESOURCE,
		OdbActions.UNTAG_RESOURCE,
	];
}

const AutonomousDatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):autonomous-database/(?<autonomousDatabaseId>[^:/?]+)$",
);
const AutonomousDatabaseBackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):autonomous-database-backup/(?<autonomousDatabaseBackupId>[^:/?]+)$",
);
const CloudAutonomousVmClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):cloud-autonomous-vm-cluster/(?<cloudAutonomousVmClusterId>[^:/?]+)$",
);
const CloudExadataInfrastructureArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):cloud-exadata-infrastructure/(?<cloudExadataInfrastructureId>[^:/?]+)$",
);
const CloudVmClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):cloud-vm-cluster/(?<cloudVmClusterId>[^:/?]+)$",
);
const DBNodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):db-node/(?<dbNodeId>[^:/?]+)$",
);
const OdbNetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):odb-network/(?<odbNetworkId>[^:/?]+)$",
);
const OdbPeeringConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):odb:(?<region>[^:]*):(?<account>[^:]*):odb-peering-connection/(?<odbPeeringConnectionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for odb resources.
 */
export class OdbResources {
	/**
	 * Builds an ARN for the autonomous-database resource.
	 */
	static autonomousDatabase(props: {
		/** The AutonomousDatabaseId component of the ARN. */
		readonly autonomousDatabaseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:autonomous-database/${props.autonomousDatabaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the autonomous-database resource.
	 */
	static isValidAutonomousDatabaseArn(arn: string): boolean {
		return AutonomousDatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a autonomous-database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutonomousDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		autonomousDatabaseId: string;
	} {
		const match = AutonomousDatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid autonomous-database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			autonomousDatabaseId: match.groups!.autonomousDatabaseId,
		};
	}

	/**
	 * Builds an ARN for the autonomous-database-backup resource.
	 */
	static autonomousDatabaseBackup(props: {
		/** The AutonomousDatabaseBackupId component of the ARN. */
		readonly autonomousDatabaseBackupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:autonomous-database-backup/${props.autonomousDatabaseBackupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the autonomous-database-backup resource.
	 */
	static isValidAutonomousDatabaseBackupArn(arn: string): boolean {
		return AutonomousDatabaseBackupArnRegex.test(arn);
	}

	/**
	 * Parses a autonomous-database-backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutonomousDatabaseBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		autonomousDatabaseBackupId: string;
	} {
		const match = AutonomousDatabaseBackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid autonomous-database-backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			autonomousDatabaseBackupId: match.groups!.autonomousDatabaseBackupId,
		};
	}

	/**
	 * Builds an ARN for the cloud-autonomous-vm-cluster resource.
	 */
	static cloudAutonomousVmCluster(props: {
		/** The CloudAutonomousVmClusterId component of the ARN. */
		readonly cloudAutonomousVmClusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:cloud-autonomous-vm-cluster/${props.cloudAutonomousVmClusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloud-autonomous-vm-cluster resource.
	 */
	static isValidCloudAutonomousVmClusterArn(arn: string): boolean {
		return CloudAutonomousVmClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cloud-autonomous-vm-cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudAutonomousVmClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudAutonomousVmClusterId: string;
	} {
		const match = CloudAutonomousVmClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloud-autonomous-vm-cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudAutonomousVmClusterId: match.groups!.cloudAutonomousVmClusterId,
		};
	}

	/**
	 * Builds an ARN for the cloud-exadata-infrastructure resource.
	 */
	static cloudExadataInfrastructure(props: {
		/** The CloudExadataInfrastructureId component of the ARN. */
		readonly cloudExadataInfrastructureId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:cloud-exadata-infrastructure/${props.cloudExadataInfrastructureId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloud-exadata-infrastructure resource.
	 */
	static isValidCloudExadataInfrastructureArn(arn: string): boolean {
		return CloudExadataInfrastructureArnRegex.test(arn);
	}

	/**
	 * Parses a cloud-exadata-infrastructure ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudExadataInfrastructureArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudExadataInfrastructureId: string;
	} {
		const match = CloudExadataInfrastructureArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloud-exadata-infrastructure ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudExadataInfrastructureId: match.groups!.cloudExadataInfrastructureId,
		};
	}

	/**
	 * Builds an ARN for the cloud-vm-cluster resource.
	 */
	static cloudVmCluster(props: {
		/** The CloudVmClusterId component of the ARN. */
		readonly cloudVmClusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:cloud-vm-cluster/${props.cloudVmClusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloud-vm-cluster resource.
	 */
	static isValidCloudVmClusterArn(arn: string): boolean {
		return CloudVmClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cloud-vm-cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudVmClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudVmClusterId: string;
	} {
		const match = CloudVmClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloud-vm-cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudVmClusterId: match.groups!.cloudVmClusterId,
		};
	}

	/**
	 * Builds an ARN for the db-node resource.
	 */
	static dbNode(props: {
		/** The DbNodeId component of the ARN. */
		readonly dbNodeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:db-node/${props.dbNodeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-node resource.
	 */
	static isValidDBNodeArn(arn: string): boolean {
		return DBNodeArnRegex.test(arn);
	}

	/**
	 * Parses a db-node ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBNodeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbNodeId: string;
	} {
		const match = DBNodeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-node ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbNodeId: match.groups!.dbNodeId,
		};
	}

	/**
	 * Builds an ARN for the odb-network resource.
	 */
	static odbNetwork(props: {
		/** The OdbNetworkId component of the ARN. */
		readonly odbNetworkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:odb-network/${props.odbNetworkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the odb-network resource.
	 */
	static isValidOdbNetworkArn(arn: string): boolean {
		return OdbNetworkArnRegex.test(arn);
	}

	/**
	 * Parses a odb-network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOdbNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		odbNetworkId: string;
	} {
		const match = OdbNetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid odb-network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			odbNetworkId: match.groups!.odbNetworkId,
		};
	}

	/**
	 * Builds an ARN for the odb-peering-connection resource.
	 */
	static odbPeeringConnection(props: {
		/** The OdbPeeringConnectionId component of the ARN. */
		readonly odbPeeringConnectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:odb:${props.region ?? "*"}:${props.account ?? "*"}:odb-peering-connection/${props.odbPeeringConnectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the odb-peering-connection resource.
	 */
	static isValidOdbPeeringConnectionArn(arn: string): boolean {
		return OdbPeeringConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a odb-peering-connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOdbPeeringConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		odbPeeringConnectionId: string;
	} {
		const match = OdbPeeringConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid odb-peering-connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			odbPeeringConnectionId: match.groups!.odbPeeringConnectionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for odb.
 */
export class OdbOperations {
	/** IAM actions required for the AcceptMarketplaceRegistration API call. */
	static readonly ACCEPT_MARKETPLACE_REGISTRATION: string[] = [
		"odb:AcceptMarketplaceRegistration",
	];
	/** IAM actions required for the AssociateIamRoleToResource API call. */
	static readonly ASSOCIATE_IAM_ROLE_TO_RESOURCE: string[] = [
		"odb:AssociateIamRoleToResource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAutonomousDatabase API call. */
	static readonly CREATE_AUTONOMOUS_DATABASE: string[] = [
		"odb:CreateAutonomousDatabase",
		"odb:TagResource",
	];
	/** IAM actions required for the CreateAutonomousDatabaseBackup API call. */
	static readonly CREATE_AUTONOMOUS_DATABASE_BACKUP: string[] = [
		"odb:CreateAutonomousDatabaseBackup",
	];
	/** IAM actions required for the CreateAutonomousDatabaseWallet API call. */
	static readonly CREATE_AUTONOMOUS_DATABASE_WALLET: string[] = [
		"odb:CreateAutonomousDatabaseWallet",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateCloudAutonomousVmCluster API call. */
	static readonly CREATE_CLOUD_AUTONOMOUS_VM_CLUSTER: string[] = [
		"odb:CreateCloudAutonomousVmCluster",
		"odb:TagResource",
	];
	/** IAM actions required for the CreateCloudExadataInfrastructure API call. */
	static readonly CREATE_CLOUD_EXADATA_INFRASTRUCTURE: string[] = [
		"odb:CreateCloudExadataInfrastructure",
		"odb:TagResource",
	];
	/** IAM actions required for the CreateCloudVmCluster API call. */
	static readonly CREATE_CLOUD_VM_CLUSTER: string[] = [
		"odb:CreateCloudVmCluster",
		"odb:CreateDbNode",
		"odb:TagResource",
	];
	/** IAM actions required for the CreateOdbNetwork API call. */
	static readonly CREATE_ODB_NETWORK: string[] = [
		"odb:CreateOdbNetwork",
		"odb:TagResource",
	];
	/** IAM actions required for the CreateOdbPeeringConnection API call. */
	static readonly CREATE_ODB_PEERING_CONNECTION: string[] = [
		"odb:CreateOdbPeeringConnection",
		"odb:TagResource",
	];
	/** IAM actions required for the DeleteAutonomousDatabase API call. */
	static readonly DELETE_AUTONOMOUS_DATABASE: string[] = [
		"odb:DeleteAutonomousDatabase",
	];
	/** IAM actions required for the DeleteAutonomousDatabaseBackup API call. */
	static readonly DELETE_AUTONOMOUS_DATABASE_BACKUP: string[] = [
		"odb:DeleteAutonomousDatabaseBackup",
	];
	/** IAM actions required for the DeleteCloudAutonomousVmCluster API call. */
	static readonly DELETE_CLOUD_AUTONOMOUS_VM_CLUSTER: string[] = [
		"odb:DeleteCloudAutonomousVmCluster",
	];
	/** IAM actions required for the DeleteCloudExadataInfrastructure API call. */
	static readonly DELETE_CLOUD_EXADATA_INFRASTRUCTURE: string[] = [
		"odb:DeleteCloudExadataInfrastructure",
	];
	/** IAM actions required for the DeleteCloudVmCluster API call. */
	static readonly DELETE_CLOUD_VM_CLUSTER: string[] = [
		"odb:DeleteCloudVmCluster",
		"odb:DeleteDbNode",
	];
	/** IAM actions required for the DeleteOdbNetwork API call. */
	static readonly DELETE_ODB_NETWORK: string[] = ["odb:DeleteOdbNetwork"];
	/** IAM actions required for the DeleteOdbPeeringConnection API call. */
	static readonly DELETE_ODB_PEERING_CONNECTION: string[] = [
		"odb:DeleteOdbPeeringConnection",
	];
	/** IAM actions required for the DisassociateIamRoleFromResource API call. */
	static readonly DISASSOCIATE_IAM_ROLE_FROM_RESOURCE: string[] = [
		"odb:DisassociateIamRoleFromResource",
	];
	/** IAM actions required for the FailoverAutonomousDatabase API call. */
	static readonly FAILOVER_AUTONOMOUS_DATABASE: string[] = [
		"odb:FailoverAutonomousDatabase",
	];
	/** IAM actions required for the GetAutonomousDatabase API call. */
	static readonly GET_AUTONOMOUS_DATABASE: string[] = [
		"odb:GetAutonomousDatabase",
	];
	/** IAM actions required for the GetAutonomousDatabaseBackup API call. */
	static readonly GET_AUTONOMOUS_DATABASE_BACKUP: string[] = [
		"odb:GetAutonomousDatabaseBackup",
	];
	/** IAM actions required for the GetAutonomousDatabaseWalletDetails API call. */
	static readonly GET_AUTONOMOUS_DATABASE_WALLET_DETAILS: string[] = [
		"odb:GetAutonomousDatabaseWalletDetails",
	];
	/** IAM actions required for the GetCloudAutonomousVmCluster API call. */
	static readonly GET_CLOUD_AUTONOMOUS_VM_CLUSTER: string[] = [
		"odb:GetCloudAutonomousVmCluster",
	];
	/** IAM actions required for the GetCloudExadataInfrastructure API call. */
	static readonly GET_CLOUD_EXADATA_INFRASTRUCTURE: string[] = [
		"odb:GetCloudExadataInfrastructure",
	];
	/** IAM actions required for the GetCloudExadataInfrastructureUnallocatedResources API call. */
	static readonly GET_CLOUD_EXADATA_INFRASTRUCTURE_UNALLOCATED_RESOURCES: string[] =
		["odb:GetCloudExadataInfrastructureUnallocatedResources"];
	/** IAM actions required for the GetCloudVmCluster API call. */
	static readonly GET_CLOUD_VM_CLUSTER: string[] = ["odb:GetCloudVmCluster"];
	/** IAM actions required for the GetDbNode API call. */
	static readonly GET_DB_NODE: string[] = ["odb:GetDbNode"];
	/** IAM actions required for the GetDbServer API call. */
	static readonly GET_DB_SERVER: string[] = ["odb:GetDbServer"];
	/** IAM actions required for the GetOciOnboardingStatus API call. */
	static readonly GET_OCI_ONBOARDING_STATUS: string[] = [
		"odb:GetOciOnboardingStatus",
	];
	/** IAM actions required for the GetOdbNetwork API call. */
	static readonly GET_ODB_NETWORK: string[] = ["odb:GetOdbNetwork"];
	/** IAM actions required for the GetOdbPeeringConnection API call. */
	static readonly GET_ODB_PEERING_CONNECTION: string[] = [
		"odb:GetOdbPeeringConnection",
	];
	/** IAM actions required for the InitializeService API call. */
	static readonly INITIALIZE_SERVICE: string[] = ["odb:InitializeService"];
	/** IAM actions required for the ListAutonomousDatabaseBackups API call. */
	static readonly LIST_AUTONOMOUS_DATABASE_BACKUPS: string[] = [
		"odb:ListAutonomousDatabaseBackups",
	];
	/** IAM actions required for the ListAutonomousDatabaseCharacterSets API call. */
	static readonly LIST_AUTONOMOUS_DATABASE_CHARACTER_SETS: string[] = [
		"odb:ListAutonomousDatabaseCharacterSets",
	];
	/** IAM actions required for the ListAutonomousDatabaseClones API call. */
	static readonly LIST_AUTONOMOUS_DATABASE_CLONES: string[] = [
		"odb:ListAutonomousDatabaseClones",
	];
	/** IAM actions required for the ListAutonomousDatabasePeers API call. */
	static readonly LIST_AUTONOMOUS_DATABASE_PEERS: string[] = [
		"odb:ListAutonomousDatabasePeers",
	];
	/** IAM actions required for the ListAutonomousDatabaseVersions API call. */
	static readonly LIST_AUTONOMOUS_DATABASE_VERSIONS: string[] = [
		"odb:ListAutonomousDatabaseVersions",
	];
	/** IAM actions required for the ListAutonomousDatabases API call. */
	static readonly LIST_AUTONOMOUS_DATABASES: string[] = [
		"odb:ListAutonomousDatabases",
	];
	/** IAM actions required for the ListAutonomousVirtualMachines API call. */
	static readonly LIST_AUTONOMOUS_VIRTUAL_MACHINES: string[] = [
		"odb:ListAutonomousVirtualMachines",
	];
	/** IAM actions required for the ListCloudAutonomousVmClusters API call. */
	static readonly LIST_CLOUD_AUTONOMOUS_VM_CLUSTERS: string[] = [
		"odb:ListCloudAutonomousVmClusters",
	];
	/** IAM actions required for the ListCloudExadataInfrastructures API call. */
	static readonly LIST_CLOUD_EXADATA_INFRASTRUCTURES: string[] = [
		"odb:ListCloudExadataInfrastructures",
	];
	/** IAM actions required for the ListCloudVmClusters API call. */
	static readonly LIST_CLOUD_VM_CLUSTERS: string[] = [
		"odb:ListCloudVmClusters",
	];
	/** IAM actions required for the ListDbNodes API call. */
	static readonly LIST_DB_NODES: string[] = ["odb:ListDbNodes"];
	/** IAM actions required for the ListDbServers API call. */
	static readonly LIST_DB_SERVERS: string[] = ["odb:ListDbServers"];
	/** IAM actions required for the ListDbSystemShapes API call. */
	static readonly LIST_DB_SYSTEM_SHAPES: string[] = ["odb:ListDbSystemShapes"];
	/** IAM actions required for the ListGiVersions API call. */
	static readonly LIST_GI_VERSIONS: string[] = ["odb:ListGiVersions"];
	/** IAM actions required for the ListOdbNetworks API call. */
	static readonly LIST_ODB_NETWORKS: string[] = ["odb:ListOdbNetworks"];
	/** IAM actions required for the ListOdbPeeringConnections API call. */
	static readonly LIST_ODB_PEERING_CONNECTIONS: string[] = [
		"odb:ListOdbPeeringConnections",
	];
	/** IAM actions required for the ListSystemVersions API call. */
	static readonly LIST_SYSTEM_VERSIONS: string[] = ["odb:ListSystemVersions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"odb:ListTagsForResource",
	];
	/** IAM actions required for the RebootAutonomousDatabase API call. */
	static readonly REBOOT_AUTONOMOUS_DATABASE: string[] = [
		"odb:RebootAutonomousDatabase",
	];
	/** IAM actions required for the RebootDbNode API call. */
	static readonly REBOOT_DB_NODE: string[] = ["odb:RebootDbNode"];
	/** IAM actions required for the RestoreAutonomousDatabase API call. */
	static readonly RESTORE_AUTONOMOUS_DATABASE: string[] = [
		"odb:RestoreAutonomousDatabase",
	];
	/** IAM actions required for the ShrinkAutonomousDatabase API call. */
	static readonly SHRINK_AUTONOMOUS_DATABASE: string[] = [
		"odb:ShrinkAutonomousDatabase",
	];
	/** IAM actions required for the StartAutonomousDatabase API call. */
	static readonly START_AUTONOMOUS_DATABASE: string[] = [
		"odb:StartAutonomousDatabase",
	];
	/** IAM actions required for the StartDbNode API call. */
	static readonly START_DB_NODE: string[] = ["odb:StartDbNode"];
	/** IAM actions required for the StopAutonomousDatabase API call. */
	static readonly STOP_AUTONOMOUS_DATABASE: string[] = [
		"odb:StopAutonomousDatabase",
	];
	/** IAM actions required for the StopDbNode API call. */
	static readonly STOP_DB_NODE: string[] = ["odb:StopDbNode"];
	/** IAM actions required for the SwitchoverAutonomousDatabase API call. */
	static readonly SWITCHOVER_AUTONOMOUS_DATABASE: string[] = [
		"odb:SwitchoverAutonomousDatabase",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["odb:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["odb:UntagResource"];
	/** IAM actions required for the UpdateAutonomousDatabase API call. */
	static readonly UPDATE_AUTONOMOUS_DATABASE: string[] = [
		"iam:PassRole",
		"odb:UpdateAutonomousDatabase",
	];
	/** IAM actions required for the UpdateAutonomousDatabaseBackup API call. */
	static readonly UPDATE_AUTONOMOUS_DATABASE_BACKUP: string[] = [
		"odb:UpdateAutonomousDatabaseBackup",
	];
	/** IAM actions required for the UpdateCloudExadataInfrastructure API call. */
	static readonly UPDATE_CLOUD_EXADATA_INFRASTRUCTURE: string[] = [
		"odb:UpdateCloudExadataInfrastructure",
	];
	/** IAM actions required for the UpdateOdbNetwork API call. */
	static readonly UPDATE_ODB_NETWORK: string[] = ["odb:UpdateOdbNetwork"];
	/** IAM actions required for the UpdateOdbPeeringConnection API call. */
	static readonly UPDATE_ODB_PEERING_CONNECTION: string[] = [
		"odb:UpdateOdbPeeringConnection",
	];
}

/**
 * Condition key constants and builders for odb.
 */
export class OdbConditions {
	/** Condition keys applicable to the CreateAutonomousDatabase action. */
	static readonly CREATE_AUTONOMOUS_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutonomousDatabaseBackup action. */
	static readonly CREATE_AUTONOMOUS_DATABASE_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCloudAutonomousVmCluster action. */
	static readonly CREATE_CLOUD_AUTONOMOUS_VM_CLUSTER_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCloudExadataInfrastructure action. */
	static readonly CREATE_CLOUD_EXADATA_INFRASTRUCTURE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCloudVmCluster action. */
	static readonly CREATE_CLOUD_VM_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOdbNetwork action. */
	static readonly CREATE_ODB_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOdbPeeringConnection action. */
	static readonly CREATE_ODB_PEERING_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
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
