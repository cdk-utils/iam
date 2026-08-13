// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/opsworks-cm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the opsworks-cm service.
 */
export class OpsworksCmActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "opsworks-cm";

	/** [Write] opsworks-cm:AssociateNode */
	static readonly ASSOCIATE_NODE = "opsworks-cm:AssociateNode";
	/** [Write] opsworks-cm:CreateBackup */
	static readonly CREATE_BACKUP = "opsworks-cm:CreateBackup";
	/** [Write] opsworks-cm:CreateServer */
	static readonly CREATE_SERVER = "opsworks-cm:CreateServer";
	/** [Write] opsworks-cm:DeleteBackup */
	static readonly DELETE_BACKUP = "opsworks-cm:DeleteBackup";
	/** [Write] opsworks-cm:DeleteServer */
	static readonly DELETE_SERVER = "opsworks-cm:DeleteServer";
	/** [List] opsworks-cm:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES =
		"opsworks-cm:DescribeAccountAttributes";
	/** [List] opsworks-cm:DescribeBackups */
	static readonly DESCRIBE_BACKUPS = "opsworks-cm:DescribeBackups";
	/** [List] opsworks-cm:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "opsworks-cm:DescribeEvents";
	/** [List] opsworks-cm:DescribeNodeAssociationStatus */
	static readonly DESCRIBE_NODE_ASSOCIATION_STATUS =
		"opsworks-cm:DescribeNodeAssociationStatus";
	/** [List] opsworks-cm:DescribeServers */
	static readonly DESCRIBE_SERVERS = "opsworks-cm:DescribeServers";
	/** [Write] opsworks-cm:DisassociateNode */
	static readonly DISASSOCIATE_NODE = "opsworks-cm:DisassociateNode";
	/** [Read] opsworks-cm:ExportServerEngineAttribute */
	static readonly EXPORT_SERVER_ENGINE_ATTRIBUTE =
		"opsworks-cm:ExportServerEngineAttribute";
	/** [Read] opsworks-cm:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "opsworks-cm:ListTagsForResource";
	/** [Write] opsworks-cm:RestoreServer */
	static readonly RESTORE_SERVER = "opsworks-cm:RestoreServer";
	/** [Write] opsworks-cm:StartMaintenance */
	static readonly START_MAINTENANCE = "opsworks-cm:StartMaintenance";
	/** [Tagging] opsworks-cm:TagResource */
	static readonly TAG_RESOURCE = "opsworks-cm:TagResource";
	/** [Tagging] opsworks-cm:UntagResource */
	static readonly UNTAG_RESOURCE = "opsworks-cm:UntagResource";
	/** [Write] opsworks-cm:UpdateServer */
	static readonly UPDATE_SERVER = "opsworks-cm:UpdateServer";
	/** [Write] opsworks-cm:UpdateServerEngineAttributes */
	static readonly UPDATE_SERVER_ENGINE_ATTRIBUTES =
		"opsworks-cm:UpdateServerEngineAttributes";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OpsworksCmActions.EXPORT_SERVER_ENGINE_ATTRIBUTE,
		OpsworksCmActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OpsworksCmActions.ASSOCIATE_NODE,
		OpsworksCmActions.CREATE_BACKUP,
		OpsworksCmActions.CREATE_SERVER,
		OpsworksCmActions.DELETE_BACKUP,
		OpsworksCmActions.DELETE_SERVER,
		OpsworksCmActions.DISASSOCIATE_NODE,
		OpsworksCmActions.RESTORE_SERVER,
		OpsworksCmActions.START_MAINTENANCE,
		OpsworksCmActions.UPDATE_SERVER,
		OpsworksCmActions.UPDATE_SERVER_ENGINE_ATTRIBUTES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OpsworksCmActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		OpsworksCmActions.DESCRIBE_BACKUPS,
		OpsworksCmActions.DESCRIBE_EVENTS,
		OpsworksCmActions.DESCRIBE_NODE_ASSOCIATION_STATUS,
		OpsworksCmActions.DESCRIBE_SERVERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OpsworksCmActions.TAG_RESOURCE,
		OpsworksCmActions.UNTAG_RESOURCE,
	];
}

const BackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opsworks-cm::(?<account>[^:]*):backup/(?<serverName>[^:/?]+)-\\{Date-and-Time-Stamp-of-Backup\\}$",
);
const ServerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opsworks-cm::(?<account>[^:]*):server/(?<serverName>[^:/?]+)/(?<uniqueId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for opsworks-cm resources.
 */
export class OpsworksCmResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: {
		/** The ServerName component of the ARN. */
		readonly serverName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:opsworks-cm::${props.account ?? "*"}:backup/${props.serverName}-{Date-and-Time-Stamp-of-Backup}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backup resource.
	 */
	static isValidBackupArn(arn: string): boolean {
		return BackupArnRegex.test(arn);
	}

	/**
	 * Parses a backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupArn(arn: string): {
		partition: string;
		account: string;
		serverName: string;
	} {
		const match = BackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			serverName: match.groups!.serverName,
		};
	}

	/**
	 * Builds an ARN for the server resource.
	 */
	static server(props: {
		/** The ServerName component of the ARN. */
		readonly serverName: string;
		/** The UniqueId component of the ARN. */
		readonly uniqueId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:opsworks-cm::${props.account ?? "*"}:server/${props.serverName}/${props.uniqueId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the server resource.
	 */
	static isValidServerArn(arn: string): boolean {
		return ServerArnRegex.test(arn);
	}

	/**
	 * Parses a server ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServerArn(arn: string): {
		partition: string;
		account: string;
		serverName: string;
		uniqueId: string;
	} {
		const match = ServerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid server ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			serverName: match.groups!.serverName,
			uniqueId: match.groups!.uniqueId,
		};
	}
}
