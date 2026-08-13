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
	static readonly AssociateNode = "opsworks-cm:AssociateNode";
	/** [Write] opsworks-cm:CreateBackup */
	static readonly CreateBackup = "opsworks-cm:CreateBackup";
	/** [Write] opsworks-cm:CreateServer */
	static readonly CreateServer = "opsworks-cm:CreateServer";
	/** [Write] opsworks-cm:DeleteBackup */
	static readonly DeleteBackup = "opsworks-cm:DeleteBackup";
	/** [Write] opsworks-cm:DeleteServer */
	static readonly DeleteServer = "opsworks-cm:DeleteServer";
	/** [List] opsworks-cm:DescribeAccountAttributes */
	static readonly DescribeAccountAttributes =
		"opsworks-cm:DescribeAccountAttributes";
	/** [List] opsworks-cm:DescribeBackups */
	static readonly DescribeBackups = "opsworks-cm:DescribeBackups";
	/** [List] opsworks-cm:DescribeEvents */
	static readonly DescribeEvents = "opsworks-cm:DescribeEvents";
	/** [List] opsworks-cm:DescribeNodeAssociationStatus */
	static readonly DescribeNodeAssociationStatus =
		"opsworks-cm:DescribeNodeAssociationStatus";
	/** [List] opsworks-cm:DescribeServers */
	static readonly DescribeServers = "opsworks-cm:DescribeServers";
	/** [Write] opsworks-cm:DisassociateNode */
	static readonly DisassociateNode = "opsworks-cm:DisassociateNode";
	/** [Read] opsworks-cm:ExportServerEngineAttribute */
	static readonly ExportServerEngineAttribute =
		"opsworks-cm:ExportServerEngineAttribute";
	/** [Read] opsworks-cm:ListTagsForResource */
	static readonly ListTagsForResource = "opsworks-cm:ListTagsForResource";
	/** [Write] opsworks-cm:RestoreServer */
	static readonly RestoreServer = "opsworks-cm:RestoreServer";
	/** [Write] opsworks-cm:StartMaintenance */
	static readonly StartMaintenance = "opsworks-cm:StartMaintenance";
	/** [Tagging] opsworks-cm:TagResource */
	static readonly TagResource = "opsworks-cm:TagResource";
	/** [Tagging] opsworks-cm:UntagResource */
	static readonly UntagResource = "opsworks-cm:UntagResource";
	/** [Write] opsworks-cm:UpdateServer */
	static readonly UpdateServer = "opsworks-cm:UpdateServer";
	/** [Write] opsworks-cm:UpdateServerEngineAttributes */
	static readonly UpdateServerEngineAttributes =
		"opsworks-cm:UpdateServerEngineAttributes";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OpsworksCmActions.ExportServerEngineAttribute,
		OpsworksCmActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OpsworksCmActions.AssociateNode,
		OpsworksCmActions.CreateBackup,
		OpsworksCmActions.CreateServer,
		OpsworksCmActions.DeleteBackup,
		OpsworksCmActions.DeleteServer,
		OpsworksCmActions.DisassociateNode,
		OpsworksCmActions.RestoreServer,
		OpsworksCmActions.StartMaintenance,
		OpsworksCmActions.UpdateServer,
		OpsworksCmActions.UpdateServerEngineAttributes,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OpsworksCmActions.DescribeAccountAttributes,
		OpsworksCmActions.DescribeBackups,
		OpsworksCmActions.DescribeEvents,
		OpsworksCmActions.DescribeNodeAssociationStatus,
		OpsworksCmActions.DescribeServers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OpsworksCmActions.TagResource,
		OpsworksCmActions.UntagResource,
	];
}

/**
 * Properties for building a backup ARN.
 */
export interface OpsworksCmBackupArnProps {
	/** The ServerName component of the ARN. */
	readonly serverName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backup ARN.
 */
export interface OpsworksCmBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerName component. */
	readonly serverName: string;
}

/**
 * Properties for building a server ARN.
 */
export interface OpsworksCmServerArnProps {
	/** The ServerName component of the ARN. */
	readonly serverName: string;
	/** The UniqueId component of the ARN. */
	readonly uniqueId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a server ARN.
 */
export interface OpsworksCmServerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerName component. */
	readonly serverName: string;
	/** The UniqueId component. */
	readonly uniqueId: string;
}

const BackupArnRegex =
	/^arn:(?<partition>[^:]+):opsworks-cm::(?<account>[^:]*):backup\/(?<serverName>[^:/?]+)-\{Date-and-Time-Stamp-of-Backup\}$/;
const ServerArnRegex =
	/^arn:(?<partition>[^:]+):opsworks-cm::(?<account>[^:]*):server\/(?<serverName>[^:/?]+)\/(?<uniqueId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for opsworks-cm resources.
 */
export class OpsworksCmResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: OpsworksCmBackupArnProps): string {
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
	static parseBackupArn(arn: string): OpsworksCmBackupArnComponents {
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
	static server(props: OpsworksCmServerArnProps): string {
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
	static parseServerArn(arn: string): OpsworksCmServerArnComponents {
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
