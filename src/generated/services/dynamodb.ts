// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dynamodb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dynamodb service.
 */
export class DynamoDBActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dynamodb";

	/** [Write] dynamodb:AssociateTableReplica */
	static readonly AssociateTableReplica = "dynamodb:AssociateTableReplica";
	/** [Read] dynamodb:BatchGetItem */
	static readonly BatchGetItem = "dynamodb:BatchGetItem";
	/** [Write] dynamodb:BatchWriteItem */
	static readonly BatchWriteItem = "dynamodb:BatchWriteItem";
	/** [Read] dynamodb:ConditionCheckItem */
	static readonly ConditionCheckItem = "dynamodb:ConditionCheckItem";
	/** [Write] dynamodb:CreateBackup */
	static readonly CreateBackup = "dynamodb:CreateBackup";
	/** [Write] dynamodb:CreateGlobalTable */
	static readonly CreateGlobalTable = "dynamodb:CreateGlobalTable";
	/** [Write] dynamodb:CreateGlobalTableWitness */
	static readonly CreateGlobalTableWitness =
		"dynamodb:CreateGlobalTableWitness";
	/** [Write] dynamodb:CreateTable */
	static readonly CreateTable = "dynamodb:CreateTable";
	/** [Write] dynamodb:CreateTableReplica */
	static readonly CreateTableReplica = "dynamodb:CreateTableReplica";
	/** [Write] dynamodb:DeleteBackup */
	static readonly DeleteBackup = "dynamodb:DeleteBackup";
	/** [Write] dynamodb:DeleteGlobalTableWitness */
	static readonly DeleteGlobalTableWitness =
		"dynamodb:DeleteGlobalTableWitness";
	/** [Write] dynamodb:DeleteItem */
	static readonly DeleteItem = "dynamodb:DeleteItem";
	/** [PermissionManagement] dynamodb:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "dynamodb:DeleteResourcePolicy";
	/** [Write] dynamodb:DeleteTable */
	static readonly DeleteTable = "dynamodb:DeleteTable";
	/** [Write] dynamodb:DeleteTableReplica */
	static readonly DeleteTableReplica = "dynamodb:DeleteTableReplica";
	/** [Read] dynamodb:DescribeBackup */
	static readonly DescribeBackup = "dynamodb:DescribeBackup";
	/** [Read] dynamodb:DescribeContinuousBackups */
	static readonly DescribeContinuousBackups =
		"dynamodb:DescribeContinuousBackups";
	/** [Read] dynamodb:DescribeContributorInsights */
	static readonly DescribeContributorInsights =
		"dynamodb:DescribeContributorInsights";
	/** [Read] dynamodb:DescribeEndpoints */
	static readonly DescribeEndpoints = "dynamodb:DescribeEndpoints";
	/** [Read] dynamodb:DescribeExport */
	static readonly DescribeExport = "dynamodb:DescribeExport";
	/** [Read] dynamodb:DescribeGlobalTable */
	static readonly DescribeGlobalTable = "dynamodb:DescribeGlobalTable";
	/** [Read] dynamodb:DescribeGlobalTableSettings */
	static readonly DescribeGlobalTableSettings =
		"dynamodb:DescribeGlobalTableSettings";
	/** [Read] dynamodb:DescribeImport */
	static readonly DescribeImport = "dynamodb:DescribeImport";
	/** [Read] dynamodb:DescribeKinesisStreamingDestination */
	static readonly DescribeKinesisStreamingDestination =
		"dynamodb:DescribeKinesisStreamingDestination";
	/** [Read] dynamodb:DescribeLimits */
	static readonly DescribeLimits = "dynamodb:DescribeLimits";
	/** [Read] dynamodb:DescribeReservedCapacity */
	static readonly DescribeReservedCapacity =
		"dynamodb:DescribeReservedCapacity";
	/** [Read] dynamodb:DescribeReservedCapacityOfferings */
	static readonly DescribeReservedCapacityOfferings =
		"dynamodb:DescribeReservedCapacityOfferings";
	/** [Read] dynamodb:DescribeStream */
	static readonly DescribeStream = "dynamodb:DescribeStream";
	/** [Read] dynamodb:DescribeTable */
	static readonly DescribeTable = "dynamodb:DescribeTable";
	/** [Read] dynamodb:DescribeTableReplicaAutoScaling */
	static readonly DescribeTableReplicaAutoScaling =
		"dynamodb:DescribeTableReplicaAutoScaling";
	/** [Read] dynamodb:DescribeTimeToLive */
	static readonly DescribeTimeToLive = "dynamodb:DescribeTimeToLive";
	/** [Write] dynamodb:DisableKinesisStreamingDestination */
	static readonly DisableKinesisStreamingDestination =
		"dynamodb:DisableKinesisStreamingDestination";
	/** [Write] dynamodb:EnableKinesisStreamingDestination */
	static readonly EnableKinesisStreamingDestination =
		"dynamodb:EnableKinesisStreamingDestination";
	/** [Write] dynamodb:ExportTableToPointInTime */
	static readonly ExportTableToPointInTime =
		"dynamodb:ExportTableToPointInTime";
	/** [Read] dynamodb:GetAbacStatus */
	static readonly actionGetAbacStatus = "dynamodb:GetAbacStatus";
	/** [Read] dynamodb:GetItem */
	static readonly actionGetItem = "dynamodb:GetItem";
	/** [Read] dynamodb:GetRecords */
	static readonly actionGetRecords = "dynamodb:GetRecords";
	/** [Read] dynamodb:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "dynamodb:GetResourcePolicy";
	/** [Read] dynamodb:GetShardIterator */
	static readonly actionGetShardIterator = "dynamodb:GetShardIterator";
	/** [Write] dynamodb:ImportTable */
	static readonly ImportTable = "dynamodb:ImportTable";
	/** [Write] dynamodb:InjectError */
	static readonly InjectError = "dynamodb:InjectError";
	/** [List] dynamodb:ListBackups */
	static readonly ListBackups = "dynamodb:ListBackups";
	/** [List] dynamodb:ListContributorInsights */
	static readonly ListContributorInsights = "dynamodb:ListContributorInsights";
	/** [List] dynamodb:ListExports */
	static readonly ListExports = "dynamodb:ListExports";
	/** [List] dynamodb:ListGlobalTables */
	static readonly ListGlobalTables = "dynamodb:ListGlobalTables";
	/** [List] dynamodb:ListImports */
	static readonly ListImports = "dynamodb:ListImports";
	/** [Read] dynamodb:ListStreams */
	static readonly ListStreams = "dynamodb:ListStreams";
	/** [List] dynamodb:ListTables */
	static readonly ListTables = "dynamodb:ListTables";
	/** [Read] dynamodb:ListTagsOfResource */
	static readonly ListTagsOfResource = "dynamodb:ListTagsOfResource";
	/** [Write] dynamodb:PartiQLDelete */
	static readonly PartiQLDelete = "dynamodb:PartiQLDelete";
	/** [Write] dynamodb:PartiQLInsert */
	static readonly PartiQLInsert = "dynamodb:PartiQLInsert";
	/** [Read] dynamodb:PartiQLSelect */
	static readonly PartiQLSelect = "dynamodb:PartiQLSelect";
	/** [Write] dynamodb:PartiQLUpdate */
	static readonly PartiQLUpdate = "dynamodb:PartiQLUpdate";
	/** [Write] dynamodb:PurchaseReservedCapacityOfferings */
	static readonly PurchaseReservedCapacityOfferings =
		"dynamodb:PurchaseReservedCapacityOfferings";
	/** [Write] dynamodb:PutItem */
	static readonly PutItem = "dynamodb:PutItem";
	/** [PermissionManagement] dynamodb:PutResourcePolicy */
	static readonly PutResourcePolicy = "dynamodb:PutResourcePolicy";
	/** [Read] dynamodb:Query */
	static readonly Query = "dynamodb:Query";
	/** [Read] dynamodb:ReadDataForReplication */
	static readonly ReadDataForReplication = "dynamodb:ReadDataForReplication";
	/** [Write] dynamodb:ReplicateSettings */
	static readonly ReplicateSettings = "dynamodb:ReplicateSettings";
	/** [Write] dynamodb:RestoreTableFromAwsBackup */
	static readonly RestoreTableFromAwsBackup =
		"dynamodb:RestoreTableFromAwsBackup";
	/** [Write] dynamodb:RestoreTableFromBackup */
	static readonly RestoreTableFromBackup = "dynamodb:RestoreTableFromBackup";
	/** [Write] dynamodb:RestoreTableToPointInTime */
	static readonly RestoreTableToPointInTime =
		"dynamodb:RestoreTableToPointInTime";
	/** [Read] dynamodb:Scan */
	static readonly Scan = "dynamodb:Scan";
	/** [Read] dynamodb:SearchVectors */
	static readonly SearchVectors = "dynamodb:SearchVectors";
	/** [Write] dynamodb:StartAwsBackupJob */
	static readonly StartAwsBackupJob = "dynamodb:StartAwsBackupJob";
	/** [Tagging] dynamodb:TagResource */
	static readonly TagResource = "dynamodb:TagResource";
	/** [Tagging] dynamodb:UntagResource */
	static readonly UntagResource = "dynamodb:UntagResource";
	/** [PermissionManagement] dynamodb:UpdateAbacStatus */
	static readonly UpdateAbacStatus = "dynamodb:UpdateAbacStatus";
	/** [Write] dynamodb:UpdateContinuousBackups */
	static readonly UpdateContinuousBackups = "dynamodb:UpdateContinuousBackups";
	/** [Write] dynamodb:UpdateContributorInsights */
	static readonly UpdateContributorInsights =
		"dynamodb:UpdateContributorInsights";
	/** [Write] dynamodb:UpdateGlobalTable */
	static readonly UpdateGlobalTable = "dynamodb:UpdateGlobalTable";
	/** [Write] dynamodb:UpdateGlobalTableSettings */
	static readonly UpdateGlobalTableSettings =
		"dynamodb:UpdateGlobalTableSettings";
	/** [Write] dynamodb:UpdateGlobalTableVersion */
	static readonly UpdateGlobalTableVersion =
		"dynamodb:UpdateGlobalTableVersion";
	/** [Write] dynamodb:UpdateItem */
	static readonly UpdateItem = "dynamodb:UpdateItem";
	/** [Write] dynamodb:UpdateKinesisStreamingDestination */
	static readonly UpdateKinesisStreamingDestination =
		"dynamodb:UpdateKinesisStreamingDestination";
	/** [Write] dynamodb:UpdateTable */
	static readonly UpdateTable = "dynamodb:UpdateTable";
	/** [Write] dynamodb:UpdateTableReplicaAutoScaling */
	static readonly UpdateTableReplicaAutoScaling =
		"dynamodb:UpdateTableReplicaAutoScaling";
	/** [Write] dynamodb:UpdateTimeToLive */
	static readonly UpdateTimeToLive = "dynamodb:UpdateTimeToLive";
	/** [Write] dynamodb:WriteDataForReplication */
	static readonly WriteDataForReplication = "dynamodb:WriteDataForReplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DynamoDBActions.BatchGetItem,
		DynamoDBActions.ConditionCheckItem,
		DynamoDBActions.DescribeBackup,
		DynamoDBActions.DescribeContinuousBackups,
		DynamoDBActions.DescribeContributorInsights,
		DynamoDBActions.DescribeEndpoints,
		DynamoDBActions.DescribeExport,
		DynamoDBActions.DescribeGlobalTable,
		DynamoDBActions.DescribeGlobalTableSettings,
		DynamoDBActions.DescribeImport,
		DynamoDBActions.DescribeKinesisStreamingDestination,
		DynamoDBActions.DescribeLimits,
		DynamoDBActions.DescribeReservedCapacity,
		DynamoDBActions.DescribeReservedCapacityOfferings,
		DynamoDBActions.DescribeStream,
		DynamoDBActions.DescribeTable,
		DynamoDBActions.DescribeTableReplicaAutoScaling,
		DynamoDBActions.DescribeTimeToLive,
		DynamoDBActions.actionGetAbacStatus,
		DynamoDBActions.actionGetItem,
		DynamoDBActions.actionGetRecords,
		DynamoDBActions.actionGetResourcePolicy,
		DynamoDBActions.actionGetShardIterator,
		DynamoDBActions.ListStreams,
		DynamoDBActions.ListTagsOfResource,
		DynamoDBActions.PartiQLSelect,
		DynamoDBActions.Query,
		DynamoDBActions.ReadDataForReplication,
		DynamoDBActions.Scan,
		DynamoDBActions.SearchVectors,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DynamoDBActions.AssociateTableReplica,
		DynamoDBActions.BatchWriteItem,
		DynamoDBActions.CreateBackup,
		DynamoDBActions.CreateGlobalTable,
		DynamoDBActions.CreateGlobalTableWitness,
		DynamoDBActions.CreateTable,
		DynamoDBActions.CreateTableReplica,
		DynamoDBActions.DeleteBackup,
		DynamoDBActions.DeleteGlobalTableWitness,
		DynamoDBActions.DeleteItem,
		DynamoDBActions.DeleteTable,
		DynamoDBActions.DeleteTableReplica,
		DynamoDBActions.DisableKinesisStreamingDestination,
		DynamoDBActions.EnableKinesisStreamingDestination,
		DynamoDBActions.ExportTableToPointInTime,
		DynamoDBActions.ImportTable,
		DynamoDBActions.InjectError,
		DynamoDBActions.PartiQLDelete,
		DynamoDBActions.PartiQLInsert,
		DynamoDBActions.PartiQLUpdate,
		DynamoDBActions.PurchaseReservedCapacityOfferings,
		DynamoDBActions.PutItem,
		DynamoDBActions.ReplicateSettings,
		DynamoDBActions.RestoreTableFromAwsBackup,
		DynamoDBActions.RestoreTableFromBackup,
		DynamoDBActions.RestoreTableToPointInTime,
		DynamoDBActions.StartAwsBackupJob,
		DynamoDBActions.UpdateContinuousBackups,
		DynamoDBActions.UpdateContributorInsights,
		DynamoDBActions.UpdateGlobalTable,
		DynamoDBActions.UpdateGlobalTableSettings,
		DynamoDBActions.UpdateGlobalTableVersion,
		DynamoDBActions.UpdateItem,
		DynamoDBActions.UpdateKinesisStreamingDestination,
		DynamoDBActions.UpdateTable,
		DynamoDBActions.UpdateTableReplicaAutoScaling,
		DynamoDBActions.UpdateTimeToLive,
		DynamoDBActions.WriteDataForReplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DynamoDBActions.ListBackups,
		DynamoDBActions.ListContributorInsights,
		DynamoDBActions.ListExports,
		DynamoDBActions.ListGlobalTables,
		DynamoDBActions.ListImports,
		DynamoDBActions.ListTables,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		DynamoDBActions.DeleteResourcePolicy,
		DynamoDBActions.PutResourcePolicy,
		DynamoDBActions.UpdateAbacStatus,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DynamoDBActions.TagResource,
		DynamoDBActions.UntagResource,
	];
}

/**
 * Properties for building a backup ARN.
 */
export interface DynamoDBBackupArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The BackupName component of the ARN. */
	readonly backupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backup ARN.
 */
export interface DynamoDBBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The BackupName component. */
	readonly backupName: string;
}

/**
 * Properties for building a export ARN.
 */
export interface DynamoDBExportArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The ExportName component of the ARN. */
	readonly exportName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a export ARN.
 */
export interface DynamoDBExportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The ExportName component. */
	readonly exportName: string;
}

/**
 * Properties for building a global-table ARN.
 */
export interface DynamoDBGlobalTableArnProps {
	/** The GlobalTableName component of the ARN. */
	readonly globalTableName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a global-table ARN.
 */
export interface DynamoDBGlobalTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalTableName component. */
	readonly globalTableName: string;
}

/**
 * Properties for building a import ARN.
 */
export interface DynamoDBImportArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The ImportName component of the ARN. */
	readonly importName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a import ARN.
 */
export interface DynamoDBImportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The ImportName component. */
	readonly importName: string;
}

/**
 * Properties for building a index ARN.
 */
export interface DynamoDBIndexArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The IndexName component of the ARN. */
	readonly indexName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a index ARN.
 */
export interface DynamoDBIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The IndexName component. */
	readonly indexName: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface DynamoDBStreamArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The StreamLabel component of the ARN. */
	readonly streamLabel: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stream ARN.
 */
export interface DynamoDBStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The StreamLabel component. */
	readonly streamLabel: string;
}

/**
 * Properties for building a table ARN.
 */
export interface DynamoDBTableArnProps {
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a table ARN.
 */
export interface DynamoDBTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableName component. */
	readonly tableName: string;
}

const BackupArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)\/backup\/(?<backupName>[^:/?]+)$/;
const ExportArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)\/export\/(?<exportName>[^:/?]+)$/;
const GlobalTableArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb::(?<account>[^:]*):global-table\/(?<globalTableName>[^:/?]+)$/;
const ImportArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)\/import\/(?<importName>[^:/?]+)$/;
const IndexArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)\/index\/(?<indexName>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)\/stream\/(?<streamLabel>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table\/(?<tableName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for dynamodb resources.
 */
export class DynamoDBResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: DynamoDBBackupArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}/backup/${props.backupName}`;
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
	static parseBackupArn(arn: string): DynamoDBBackupArnComponents {
		const match = BackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
			backupName: match.groups!.backupName,
		};
	}

	/**
	 * Builds an ARN for the export resource.
	 */
	static export(props: DynamoDBExportArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}/export/${props.exportName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export resource.
	 */
	static isValidExportArn(arn: string): boolean {
		return ExportArnRegex.test(arn);
	}

	/**
	 * Parses a export ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportArn(arn: string): DynamoDBExportArnComponents {
		const match = ExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
			exportName: match.groups!.exportName,
		};
	}

	/**
	 * Builds an ARN for the global-table resource.
	 */
	static globalTable(props: DynamoDBGlobalTableArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb::${props.account ?? "*"}:global-table/${props.globalTableName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the global-table resource.
	 */
	static isValidGlobalTableArn(arn: string): boolean {
		return GlobalTableArnRegex.test(arn);
	}

	/**
	 * Parses a global-table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGlobalTableArn(arn: string): DynamoDBGlobalTableArnComponents {
		const match = GlobalTableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid global-table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalTableName: match.groups!.globalTableName,
		};
	}

	/**
	 * Builds an ARN for the import resource.
	 */
	static import(props: DynamoDBImportArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}/import/${props.importName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the import resource.
	 */
	static isValidImportArn(arn: string): boolean {
		return ImportArnRegex.test(arn);
	}

	/**
	 * Parses a import ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportArn(arn: string): DynamoDBImportArnComponents {
		const match = ImportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid import ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
			importName: match.groups!.importName,
		};
	}

	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: DynamoDBIndexArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}/index/${props.indexName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): DynamoDBIndexArnComponents {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
			indexName: match.groups!.indexName,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: DynamoDBStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}/stream/${props.streamLabel}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): DynamoDBStreamArnComponents {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
			streamLabel: match.groups!.streamLabel,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: DynamoDBTableArnProps): string {
		return `arn:${props.partition ?? "aws"}:dynamodb:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.tableName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): DynamoDBTableArnComponents {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableName: match.groups!.tableName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dynamodb.
 */
export class DynamoDBOperations {
	/** IAM actions required for the BatchExecuteStatement API call. */
	static readonly BatchExecuteStatement: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the BatchGetItem API call. */
	static readonly BatchGetItem: string[] = ["dynamodb:BatchGetItem"];
	/** IAM actions required for the BatchWriteItem API call. */
	static readonly BatchWriteItem: string[] = ["dynamodb:BatchWriteItem"];
	/** IAM actions required for the CreateBackup API call. */
	static readonly CreateBackup: string[] = ["dynamodb:CreateBackup"];
	/** IAM actions required for the CreateGlobalTable API call. */
	static readonly CreateGlobalTable: string[] = ["dynamodb:CreateGlobalTable"];
	/** IAM actions required for the CreateTable API call. */
	static readonly CreateTable: string[] = [
		"dynamodb:AssociateTableReplica",
		"dynamodb:BatchWriteItem",
		"dynamodb:CreateTable",
		"dynamodb:CreateTableReplica",
		"dynamodb:DeleteItem",
		"dynamodb:GetItem",
		"dynamodb:PutItem",
		"dynamodb:PutResourcePolicy",
		"dynamodb:Query",
		"dynamodb:Scan",
		"dynamodb:TagResource",
		"dynamodb:UpdateItem",
	];
	/** IAM actions required for the DeleteBackup API call. */
	static readonly DeleteBackup: string[] = ["dynamodb:DeleteBackup"];
	/** IAM actions required for the DeleteItem API call. */
	static readonly DeleteItem: string[] = [
		"dynamodb:DeleteItem",
		"dynamodb:WriteDataForReplication",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"dynamodb:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DeleteTable: string[] = ["dynamodb:DeleteTable"];
	/** IAM actions required for the DescribeBackup API call. */
	static readonly DescribeBackup: string[] = ["dynamodb:DescribeBackup"];
	/** IAM actions required for the DescribeContinuousBackups API call. */
	static readonly DescribeContinuousBackups: string[] = [
		"dynamodb:DescribeContinuousBackups",
	];
	/** IAM actions required for the DescribeContributorInsights API call. */
	static readonly DescribeContributorInsights: string[] = [
		"dynamodb:DescribeContributorInsights",
	];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DescribeEndpoints: string[] = ["dynamodb:DescribeEndpoints"];
	/** IAM actions required for the DescribeExport API call. */
	static readonly DescribeExport: string[] = ["dynamodb:DescribeExport"];
	/** IAM actions required for the DescribeGlobalTable API call. */
	static readonly DescribeGlobalTable: string[] = [
		"dynamodb:DescribeGlobalTable",
	];
	/** IAM actions required for the DescribeGlobalTableSettings API call. */
	static readonly DescribeGlobalTableSettings: string[] = [
		"dynamodb:DescribeGlobalTableSettings",
	];
	/** IAM actions required for the DescribeImport API call. */
	static readonly DescribeImport: string[] = ["dynamodb:DescribeImport"];
	/** IAM actions required for the DescribeKinesisStreamingDestination API call. */
	static readonly DescribeKinesisStreamingDestination: string[] = [
		"dynamodb:DescribeKinesisStreamingDestination",
	];
	/** IAM actions required for the DescribeLimits API call. */
	static readonly DescribeLimits: string[] = ["dynamodb:DescribeLimits"];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DescribeStream: string[] = [
		"dynamodb:DescribeStream",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DescribeTable: string[] = [
		"dynamodb:DescribeTable",
		"dynamodb:ReadDataForReplication",
		"dynamodb:ReplicateSettings",
	];
	/** IAM actions required for the DescribeTableReplicaAutoScaling API call. */
	static readonly DescribeTableReplicaAutoScaling: string[] = [
		"dynamodb:DescribeTableReplicaAutoScaling",
	];
	/** IAM actions required for the DescribeTimeToLive API call. */
	static readonly DescribeTimeToLive: string[] = [
		"dynamodb:DescribeTimeToLive",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the DisableKinesisStreamingDestination API call. */
	static readonly DisableKinesisStreamingDestination: string[] = [
		"dynamodb:DisableKinesisStreamingDestination",
	];
	/** IAM actions required for the EnableKinesisStreamingDestination API call. */
	static readonly EnableKinesisStreamingDestination: string[] = [
		"dynamodb:EnableKinesisStreamingDestination",
	];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly ExecuteStatement: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the ExecuteTransaction API call. */
	static readonly ExecuteTransaction: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the ExportTableToPointInTime API call. */
	static readonly ExportTableToPointInTime: string[] = [
		"dynamodb:ExportTableToPointInTime",
	];
	/** IAM actions required for the GetItem API call. */
	static readonly opGetItem: string[] = [
		"dynamodb:GetItem",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the GetRecords API call. */
	static readonly opGetRecords: string[] = [
		"dynamodb:GetRecords",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"dynamodb:GetResourcePolicy",
	];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly opGetShardIterator: string[] = [
		"dynamodb:GetShardIterator",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the ImportTable API call. */
	static readonly ImportTable: string[] = ["dynamodb:ImportTable"];
	/** IAM actions required for the ListBackups API call. */
	static readonly ListBackups: string[] = ["dynamodb:ListBackups"];
	/** IAM actions required for the ListContributorInsights API call. */
	static readonly ListContributorInsights: string[] = [
		"dynamodb:ListContributorInsights",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly ListExports: string[] = ["dynamodb:ListExports"];
	/** IAM actions required for the ListGlobalTables API call. */
	static readonly ListGlobalTables: string[] = ["dynamodb:ListGlobalTables"];
	/** IAM actions required for the ListImports API call. */
	static readonly ListImports: string[] = ["dynamodb:ListImports"];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["dynamodb:ListStreams"];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["dynamodb:ListTables"];
	/** IAM actions required for the ListTagsOfResource API call. */
	static readonly ListTagsOfResource: string[] = [
		"dynamodb:ListTagsOfResource",
	];
	/** IAM actions required for the PutItem API call. */
	static readonly PutItem: string[] = [
		"dynamodb:PutItem",
		"dynamodb:WriteDataForReplication",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["dynamodb:PutResourcePolicy"];
	/** IAM actions required for the Query API call. */
	static readonly Query: string[] = ["dynamodb:Query"];
	/** IAM actions required for the RestoreTableFromBackup API call. */
	static readonly RestoreTableFromBackup: string[] = [
		"dynamodb:BatchWriteItem",
		"dynamodb:DeleteItem",
		"dynamodb:GetItem",
		"dynamodb:PutItem",
		"dynamodb:Query",
		"dynamodb:RestoreTableFromBackup",
		"dynamodb:Scan",
		"dynamodb:UpdateItem",
	];
	/** IAM actions required for the RestoreTableToPointInTime API call. */
	static readonly RestoreTableToPointInTime: string[] = [
		"dynamodb:AssociateTableReplica",
		"dynamodb:BatchWriteItem",
		"dynamodb:CreateTableReplica",
		"dynamodb:DeleteItem",
		"dynamodb:GetItem",
		"dynamodb:PutItem",
		"dynamodb:Query",
		"dynamodb:Scan",
		"dynamodb:UpdateItem",
	];
	/** IAM actions required for the Scan API call. */
	static readonly Scan: string[] = ["dynamodb:Scan"];
	/** IAM actions required for the SearchVectors API call. */
	static readonly SearchVectors: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["dynamodb:TagResource"];
	/** IAM actions required for the TransactGetItems API call. */
	static readonly TransactGetItems: string[] = ["dynamodb:GetItem"];
	/** IAM actions required for the TransactWriteItems API call. */
	static readonly TransactWriteItems: string[] = [
		"dynamodb:ConditionCheckItem",
		"dynamodb:DeleteItem",
		"dynamodb:PutItem",
		"dynamodb:UpdateItem",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["dynamodb:UntagResource"];
	/** IAM actions required for the UpdateContinuousBackups API call. */
	static readonly UpdateContinuousBackups: string[] = [
		"dynamodb:UpdateContinuousBackups",
	];
	/** IAM actions required for the UpdateContributorInsights API call. */
	static readonly UpdateContributorInsights: string[] = [
		"dynamodb:UpdateContributorInsights",
	];
	/** IAM actions required for the UpdateGlobalTable API call. */
	static readonly UpdateGlobalTable: string[] = ["dynamodb:UpdateGlobalTable"];
	/** IAM actions required for the UpdateGlobalTableSettings API call. */
	static readonly UpdateGlobalTableSettings: string[] = [
		"dynamodb:UpdateGlobalTableSettings",
	];
	/** IAM actions required for the UpdateItem API call. */
	static readonly UpdateItem: string[] = ["dynamodb:UpdateItem"];
	/** IAM actions required for the UpdateKinesisStreamingDestination API call. */
	static readonly UpdateKinesisStreamingDestination: string[] = [
		"dynamodb:UpdateKinesisStreamingDestination",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UpdateTable: string[] = [
		"dynamodb:BatchWriteItem",
		"dynamodb:CreateGlobalTableWitness",
		"dynamodb:CreateTable",
		"dynamodb:CreateTableReplica",
		"dynamodb:DeleteGlobalTableWitness",
		"dynamodb:DeleteItem",
		"dynamodb:GetItem",
		"dynamodb:PutItem",
		"dynamodb:Query",
		"dynamodb:ReplicateSettings",
		"dynamodb:Scan",
		"dynamodb:TagResource",
		"dynamodb:UpdateItem",
		"dynamodb:UpdateTable",
		"dynamodb:WriteDataForReplication",
	];
	/** IAM actions required for the UpdateTableReplicaAutoScaling API call. */
	static readonly UpdateTableReplicaAutoScaling: string[] = [
		"dynamodb:UpdateTableReplicaAutoScaling",
	];
	/** IAM actions required for the UpdateTimeToLive API call. */
	static readonly UpdateTimeToLive: string[] = [
		"dynamodb:ReplicateSettings",
		"dynamodb:UpdateTimeToLive",
		"dynamodb:WriteDataForReplication",
	];
}

/**
 * Condition key constants and builders for dynamodb.
 */
export class DynamoDBConditions {
	/** Condition keys applicable to the BatchGetItem action. */
	static readonly BatchGetItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the BatchWriteItem action. */
	static readonly BatchWriteItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
	];
	/** Condition keys applicable to the ConditionCheckItem action. */
	static readonly ConditionCheckItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CreateTableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteItem action. */
	static readonly DeleteItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the GetItem action. */
	static readonly actionGetItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the InjectError action. */
	static readonly InjectErrorConditionKeys: string[] = [
		"dynamodb:FisActionId",
		"dynamodb:FisTargetArns",
	];
	/** Condition keys applicable to the PartiQLDelete action. */
	static readonly PartiQLDeleteConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the PartiQLInsert action. */
	static readonly PartiQLInsertConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
	];
	/** Condition keys applicable to the PartiQLSelect action. */
	static readonly PartiQLSelectConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:FullTableScan",
		"dynamodb:LeadingKeys",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the PartiQLUpdate action. */
	static readonly PartiQLUpdateConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the PutItem action. */
	static readonly PutItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the Query action. */
	static readonly QueryConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the Scan action. */
	static readonly ScanConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateItem action. */
	static readonly UpdateItemConditionKeys: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: dynamodb:Attributes (ArrayOfString) */
	static readonly ATTRIBUTES = "dynamodb:Attributes";
	/** Condition key: dynamodb:EnclosingOperation (String) */
	static readonly ENCLOSING_OPERATION = "dynamodb:EnclosingOperation";
	/** Condition key: dynamodb:FirstPartitionKeyValues (ArrayOfString) */
	static readonly FIRST_PARTITION_KEY_VALUES =
		"dynamodb:FirstPartitionKeyValues";
	/** Condition key: dynamodb:FisActionId (String) */
	static readonly FIS_ACTION_ID = "dynamodb:FisActionId";
	/** Condition key: dynamodb:FisTargetArns (ArrayOfARN) */
	static readonly FIS_TARGET_ARNS = "dynamodb:FisTargetArns";
	/** Condition key: dynamodb:FourthPartitionKeyValues (ArrayOfString) */
	static readonly FOURTH_PARTITION_KEY_VALUES =
		"dynamodb:FourthPartitionKeyValues";
	/** Condition key: dynamodb:FullTableScan (Bool) */
	static readonly FULL_TABLE_SCAN = "dynamodb:FullTableScan";
	/** Condition key: dynamodb:LeadingKeys (ArrayOfString) */
	static readonly LEADING_KEYS = "dynamodb:LeadingKeys";
	/** Condition key: dynamodb:ReturnConsumedCapacity (String) */
	static readonly RETURN_CONSUMED_CAPACITY = "dynamodb:ReturnConsumedCapacity";
	/** Condition key: dynamodb:ReturnValues (String) */
	static readonly RETURN_VALUES = "dynamodb:ReturnValues";
	/** Condition key: dynamodb:SecondPartitionKeyValues (ArrayOfString) */
	static readonly SECOND_PARTITION_KEY_VALUES =
		"dynamodb:SecondPartitionKeyValues";
	/** Condition key: dynamodb:Select (String) */
	static readonly SELECT = "dynamodb:Select";
	/** Condition key: dynamodb:ThirdPartitionKeyValues (ArrayOfString) */
	static readonly THIRD_PARTITION_KEY_VALUES =
		"dynamodb:ThirdPartitionKeyValues";

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
	 * Generates a condition block for `dynamodb:Attributes`.
	 */
	static attributes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "dynamodb:Attributes": values } };
	}

	/**
	 * Generates a condition block for `dynamodb:EnclosingOperation`.
	 */
	static enclosingOperation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dynamodb:EnclosingOperation": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:FirstPartitionKeyValues`.
	 */
	static firstPartitionKeyValues(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"dynamodb:FirstPartitionKeyValues": values,
			},
		};
	}

	/**
	 * Generates a condition block for `dynamodb:FisActionId`.
	 */
	static fisActionId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dynamodb:FisActionId": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:FisTargetArns`.
	 */
	static fisTargetArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "dynamodb:FisTargetArns": values } };
	}

	/**
	 * Generates a condition block for `dynamodb:FourthPartitionKeyValues`.
	 */
	static fourthPartitionKeyValues(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"dynamodb:FourthPartitionKeyValues": values,
			},
		};
	}

	/**
	 * Generates a condition block for `dynamodb:FullTableScan`.
	 */
	static fullTableScan(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "dynamodb:FullTableScan": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:LeadingKeys`.
	 */
	static leadingKeys(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "dynamodb:LeadingKeys": values } };
	}

	/**
	 * Generates a condition block for `dynamodb:ReturnConsumedCapacity`.
	 */
	static returnConsumedCapacity(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dynamodb:ReturnConsumedCapacity": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:ReturnValues`.
	 */
	static returnValues(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dynamodb:ReturnValues": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:SecondPartitionKeyValues`.
	 */
	static secondPartitionKeyValues(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"dynamodb:SecondPartitionKeyValues": values,
			},
		};
	}

	/**
	 * Generates a condition block for `dynamodb:Select`.
	 */
	static select(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dynamodb:Select": value } };
	}

	/**
	 * Generates a condition block for `dynamodb:ThirdPartitionKeyValues`.
	 */
	static thirdPartitionKeyValues(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"dynamodb:ThirdPartitionKeyValues": values,
			},
		};
	}
}
