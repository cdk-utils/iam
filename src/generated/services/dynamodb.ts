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
	static readonly ASSOCIATE_TABLE_REPLICA = "dynamodb:AssociateTableReplica";
	/** [Read] dynamodb:BatchGetItem */
	static readonly BATCH_GET_ITEM = "dynamodb:BatchGetItem";
	/** [Write] dynamodb:BatchWriteItem */
	static readonly BATCH_WRITE_ITEM = "dynamodb:BatchWriteItem";
	/** [Read] dynamodb:ConditionCheckItem */
	static readonly CONDITION_CHECK_ITEM = "dynamodb:ConditionCheckItem";
	/** [Write] dynamodb:CreateBackup */
	static readonly CREATE_BACKUP = "dynamodb:CreateBackup";
	/** [Write] dynamodb:CreateGlobalTable */
	static readonly CREATE_GLOBAL_TABLE = "dynamodb:CreateGlobalTable";
	/** [Write] dynamodb:CreateGlobalTableWitness */
	static readonly CREATE_GLOBAL_TABLE_WITNESS =
		"dynamodb:CreateGlobalTableWitness";
	/** [Write] dynamodb:CreateTable */
	static readonly CREATE_TABLE = "dynamodb:CreateTable";
	/** [Write] dynamodb:CreateTableReplica */
	static readonly CREATE_TABLE_REPLICA = "dynamodb:CreateTableReplica";
	/** [Write] dynamodb:DeleteBackup */
	static readonly DELETE_BACKUP = "dynamodb:DeleteBackup";
	/** [Write] dynamodb:DeleteGlobalTableWitness */
	static readonly DELETE_GLOBAL_TABLE_WITNESS =
		"dynamodb:DeleteGlobalTableWitness";
	/** [Write] dynamodb:DeleteItem */
	static readonly DELETE_ITEM = "dynamodb:DeleteItem";
	/** [PermissionManagement] dynamodb:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "dynamodb:DeleteResourcePolicy";
	/** [Write] dynamodb:DeleteTable */
	static readonly DELETE_TABLE = "dynamodb:DeleteTable";
	/** [Write] dynamodb:DeleteTableReplica */
	static readonly DELETE_TABLE_REPLICA = "dynamodb:DeleteTableReplica";
	/** [Read] dynamodb:DescribeBackup */
	static readonly DESCRIBE_BACKUP = "dynamodb:DescribeBackup";
	/** [Read] dynamodb:DescribeContinuousBackups */
	static readonly DESCRIBE_CONTINUOUS_BACKUPS =
		"dynamodb:DescribeContinuousBackups";
	/** [Read] dynamodb:DescribeContributorInsights */
	static readonly DESCRIBE_CONTRIBUTOR_INSIGHTS =
		"dynamodb:DescribeContributorInsights";
	/** [Read] dynamodb:DescribeEndpoints */
	static readonly DESCRIBE_ENDPOINTS = "dynamodb:DescribeEndpoints";
	/** [Read] dynamodb:DescribeExport */
	static readonly DESCRIBE_EXPORT = "dynamodb:DescribeExport";
	/** [Read] dynamodb:DescribeGlobalTable */
	static readonly DESCRIBE_GLOBAL_TABLE = "dynamodb:DescribeGlobalTable";
	/** [Read] dynamodb:DescribeGlobalTableSettings */
	static readonly DESCRIBE_GLOBAL_TABLE_SETTINGS =
		"dynamodb:DescribeGlobalTableSettings";
	/** [Read] dynamodb:DescribeImport */
	static readonly DESCRIBE_IMPORT = "dynamodb:DescribeImport";
	/** [Read] dynamodb:DescribeKinesisStreamingDestination */
	static readonly DESCRIBE_KINESIS_STREAMING_DESTINATION =
		"dynamodb:DescribeKinesisStreamingDestination";
	/** [Read] dynamodb:DescribeLimits */
	static readonly DESCRIBE_LIMITS = "dynamodb:DescribeLimits";
	/** [Read] dynamodb:DescribeReservedCapacity */
	static readonly DESCRIBE_RESERVED_CAPACITY =
		"dynamodb:DescribeReservedCapacity";
	/** [Read] dynamodb:DescribeReservedCapacityOfferings */
	static readonly DESCRIBE_RESERVED_CAPACITY_OFFERINGS =
		"dynamodb:DescribeReservedCapacityOfferings";
	/** [Read] dynamodb:DescribeStream */
	static readonly DESCRIBE_STREAM = "dynamodb:DescribeStream";
	/** [Read] dynamodb:DescribeTable */
	static readonly DESCRIBE_TABLE = "dynamodb:DescribeTable";
	/** [Read] dynamodb:DescribeTableReplicaAutoScaling */
	static readonly DESCRIBE_TABLE_REPLICA_AUTO_SCALING =
		"dynamodb:DescribeTableReplicaAutoScaling";
	/** [Read] dynamodb:DescribeTimeToLive */
	static readonly DESCRIBE_TIME_TO_LIVE = "dynamodb:DescribeTimeToLive";
	/** [Write] dynamodb:DisableKinesisStreamingDestination */
	static readonly DISABLE_KINESIS_STREAMING_DESTINATION =
		"dynamodb:DisableKinesisStreamingDestination";
	/** [Write] dynamodb:EnableKinesisStreamingDestination */
	static readonly ENABLE_KINESIS_STREAMING_DESTINATION =
		"dynamodb:EnableKinesisStreamingDestination";
	/** [Write] dynamodb:ExportTableToPointInTime */
	static readonly EXPORT_TABLE_TO_POINT_IN_TIME =
		"dynamodb:ExportTableToPointInTime";
	/** [Read] dynamodb:GetAbacStatus */
	static readonly GET_ABAC_STATUS = "dynamodb:GetAbacStatus";
	/** [Read] dynamodb:GetItem */
	static readonly GET_ITEM = "dynamodb:GetItem";
	/** [Read] dynamodb:GetRecords */
	static readonly GET_RECORDS = "dynamodb:GetRecords";
	/** [Read] dynamodb:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "dynamodb:GetResourcePolicy";
	/** [Read] dynamodb:GetShardIterator */
	static readonly GET_SHARD_ITERATOR = "dynamodb:GetShardIterator";
	/** [Write] dynamodb:ImportTable */
	static readonly IMPORT_TABLE = "dynamodb:ImportTable";
	/** [Write] dynamodb:InjectError */
	static readonly INJECT_ERROR = "dynamodb:InjectError";
	/** [List] dynamodb:ListBackups */
	static readonly LIST_BACKUPS = "dynamodb:ListBackups";
	/** [List] dynamodb:ListContributorInsights */
	static readonly LIST_CONTRIBUTOR_INSIGHTS =
		"dynamodb:ListContributorInsights";
	/** [List] dynamodb:ListExports */
	static readonly LIST_EXPORTS = "dynamodb:ListExports";
	/** [List] dynamodb:ListGlobalTables */
	static readonly LIST_GLOBAL_TABLES = "dynamodb:ListGlobalTables";
	/** [List] dynamodb:ListImports */
	static readonly LIST_IMPORTS = "dynamodb:ListImports";
	/** [Read] dynamodb:ListStreams */
	static readonly LIST_STREAMS = "dynamodb:ListStreams";
	/** [List] dynamodb:ListTables */
	static readonly LIST_TABLES = "dynamodb:ListTables";
	/** [Read] dynamodb:ListTagsOfResource */
	static readonly LIST_TAGS_OF_RESOURCE = "dynamodb:ListTagsOfResource";
	/** [Write] dynamodb:PartiQLDelete */
	static readonly PARTI_QL_DELETE = "dynamodb:PartiQLDelete";
	/** [Write] dynamodb:PartiQLInsert */
	static readonly PARTI_QL_INSERT = "dynamodb:PartiQLInsert";
	/** [Read] dynamodb:PartiQLSelect */
	static readonly PARTI_QL_SELECT = "dynamodb:PartiQLSelect";
	/** [Write] dynamodb:PartiQLUpdate */
	static readonly PARTI_QL_UPDATE = "dynamodb:PartiQLUpdate";
	/** [Write] dynamodb:PurchaseReservedCapacityOfferings */
	static readonly PURCHASE_RESERVED_CAPACITY_OFFERINGS =
		"dynamodb:PurchaseReservedCapacityOfferings";
	/** [Write] dynamodb:PutItem */
	static readonly PUT_ITEM = "dynamodb:PutItem";
	/** [PermissionManagement] dynamodb:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "dynamodb:PutResourcePolicy";
	/** [Read] dynamodb:Query */
	static readonly QUERY = "dynamodb:Query";
	/** [Read] dynamodb:ReadDataForReplication */
	static readonly READ_DATA_FOR_REPLICATION = "dynamodb:ReadDataForReplication";
	/** [Write] dynamodb:ReplicateSettings */
	static readonly REPLICATE_SETTINGS = "dynamodb:ReplicateSettings";
	/** [Write] dynamodb:RestoreTableFromAwsBackup */
	static readonly RESTORE_TABLE_FROM_AWS_BACKUP =
		"dynamodb:RestoreTableFromAwsBackup";
	/** [Write] dynamodb:RestoreTableFromBackup */
	static readonly RESTORE_TABLE_FROM_BACKUP = "dynamodb:RestoreTableFromBackup";
	/** [Write] dynamodb:RestoreTableToPointInTime */
	static readonly RESTORE_TABLE_TO_POINT_IN_TIME =
		"dynamodb:RestoreTableToPointInTime";
	/** [Read] dynamodb:Scan */
	static readonly SCAN = "dynamodb:Scan";
	/** [Read] dynamodb:SearchVectors */
	static readonly SEARCH_VECTORS = "dynamodb:SearchVectors";
	/** [Write] dynamodb:StartAwsBackupJob */
	static readonly START_AWS_BACKUP_JOB = "dynamodb:StartAwsBackupJob";
	/** [Tagging] dynamodb:TagResource */
	static readonly TAG_RESOURCE = "dynamodb:TagResource";
	/** [Tagging] dynamodb:UntagResource */
	static readonly UNTAG_RESOURCE = "dynamodb:UntagResource";
	/** [PermissionManagement] dynamodb:UpdateAbacStatus */
	static readonly UPDATE_ABAC_STATUS = "dynamodb:UpdateAbacStatus";
	/** [Write] dynamodb:UpdateContinuousBackups */
	static readonly UPDATE_CONTINUOUS_BACKUPS =
		"dynamodb:UpdateContinuousBackups";
	/** [Write] dynamodb:UpdateContributorInsights */
	static readonly UPDATE_CONTRIBUTOR_INSIGHTS =
		"dynamodb:UpdateContributorInsights";
	/** [Write] dynamodb:UpdateGlobalTable */
	static readonly UPDATE_GLOBAL_TABLE = "dynamodb:UpdateGlobalTable";
	/** [Write] dynamodb:UpdateGlobalTableSettings */
	static readonly UPDATE_GLOBAL_TABLE_SETTINGS =
		"dynamodb:UpdateGlobalTableSettings";
	/** [Write] dynamodb:UpdateGlobalTableVersion */
	static readonly UPDATE_GLOBAL_TABLE_VERSION =
		"dynamodb:UpdateGlobalTableVersion";
	/** [Write] dynamodb:UpdateItem */
	static readonly UPDATE_ITEM = "dynamodb:UpdateItem";
	/** [Write] dynamodb:UpdateKinesisStreamingDestination */
	static readonly UPDATE_KINESIS_STREAMING_DESTINATION =
		"dynamodb:UpdateKinesisStreamingDestination";
	/** [Write] dynamodb:UpdateTable */
	static readonly UPDATE_TABLE = "dynamodb:UpdateTable";
	/** [Write] dynamodb:UpdateTableReplicaAutoScaling */
	static readonly UPDATE_TABLE_REPLICA_AUTO_SCALING =
		"dynamodb:UpdateTableReplicaAutoScaling";
	/** [Write] dynamodb:UpdateTimeToLive */
	static readonly UPDATE_TIME_TO_LIVE = "dynamodb:UpdateTimeToLive";
	/** [Write] dynamodb:WriteDataForReplication */
	static readonly WRITE_DATA_FOR_REPLICATION =
		"dynamodb:WriteDataForReplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DynamoDBActions.BATCH_GET_ITEM,
		DynamoDBActions.CONDITION_CHECK_ITEM,
		DynamoDBActions.DESCRIBE_BACKUP,
		DynamoDBActions.DESCRIBE_CONTINUOUS_BACKUPS,
		DynamoDBActions.DESCRIBE_CONTRIBUTOR_INSIGHTS,
		DynamoDBActions.DESCRIBE_ENDPOINTS,
		DynamoDBActions.DESCRIBE_EXPORT,
		DynamoDBActions.DESCRIBE_GLOBAL_TABLE,
		DynamoDBActions.DESCRIBE_GLOBAL_TABLE_SETTINGS,
		DynamoDBActions.DESCRIBE_IMPORT,
		DynamoDBActions.DESCRIBE_KINESIS_STREAMING_DESTINATION,
		DynamoDBActions.DESCRIBE_LIMITS,
		DynamoDBActions.DESCRIBE_RESERVED_CAPACITY,
		DynamoDBActions.DESCRIBE_RESERVED_CAPACITY_OFFERINGS,
		DynamoDBActions.DESCRIBE_STREAM,
		DynamoDBActions.DESCRIBE_TABLE,
		DynamoDBActions.DESCRIBE_TABLE_REPLICA_AUTO_SCALING,
		DynamoDBActions.DESCRIBE_TIME_TO_LIVE,
		DynamoDBActions.GET_ABAC_STATUS,
		DynamoDBActions.GET_ITEM,
		DynamoDBActions.GET_RECORDS,
		DynamoDBActions.GET_RESOURCE_POLICY,
		DynamoDBActions.GET_SHARD_ITERATOR,
		DynamoDBActions.LIST_STREAMS,
		DynamoDBActions.LIST_TAGS_OF_RESOURCE,
		DynamoDBActions.PARTI_QL_SELECT,
		DynamoDBActions.QUERY,
		DynamoDBActions.READ_DATA_FOR_REPLICATION,
		DynamoDBActions.SCAN,
		DynamoDBActions.SEARCH_VECTORS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DynamoDBActions.ASSOCIATE_TABLE_REPLICA,
		DynamoDBActions.BATCH_WRITE_ITEM,
		DynamoDBActions.CREATE_BACKUP,
		DynamoDBActions.CREATE_GLOBAL_TABLE,
		DynamoDBActions.CREATE_GLOBAL_TABLE_WITNESS,
		DynamoDBActions.CREATE_TABLE,
		DynamoDBActions.CREATE_TABLE_REPLICA,
		DynamoDBActions.DELETE_BACKUP,
		DynamoDBActions.DELETE_GLOBAL_TABLE_WITNESS,
		DynamoDBActions.DELETE_ITEM,
		DynamoDBActions.DELETE_TABLE,
		DynamoDBActions.DELETE_TABLE_REPLICA,
		DynamoDBActions.DISABLE_KINESIS_STREAMING_DESTINATION,
		DynamoDBActions.ENABLE_KINESIS_STREAMING_DESTINATION,
		DynamoDBActions.EXPORT_TABLE_TO_POINT_IN_TIME,
		DynamoDBActions.IMPORT_TABLE,
		DynamoDBActions.INJECT_ERROR,
		DynamoDBActions.PARTI_QL_DELETE,
		DynamoDBActions.PARTI_QL_INSERT,
		DynamoDBActions.PARTI_QL_UPDATE,
		DynamoDBActions.PURCHASE_RESERVED_CAPACITY_OFFERINGS,
		DynamoDBActions.PUT_ITEM,
		DynamoDBActions.REPLICATE_SETTINGS,
		DynamoDBActions.RESTORE_TABLE_FROM_AWS_BACKUP,
		DynamoDBActions.RESTORE_TABLE_FROM_BACKUP,
		DynamoDBActions.RESTORE_TABLE_TO_POINT_IN_TIME,
		DynamoDBActions.START_AWS_BACKUP_JOB,
		DynamoDBActions.UPDATE_CONTINUOUS_BACKUPS,
		DynamoDBActions.UPDATE_CONTRIBUTOR_INSIGHTS,
		DynamoDBActions.UPDATE_GLOBAL_TABLE,
		DynamoDBActions.UPDATE_GLOBAL_TABLE_SETTINGS,
		DynamoDBActions.UPDATE_GLOBAL_TABLE_VERSION,
		DynamoDBActions.UPDATE_ITEM,
		DynamoDBActions.UPDATE_KINESIS_STREAMING_DESTINATION,
		DynamoDBActions.UPDATE_TABLE,
		DynamoDBActions.UPDATE_TABLE_REPLICA_AUTO_SCALING,
		DynamoDBActions.UPDATE_TIME_TO_LIVE,
		DynamoDBActions.WRITE_DATA_FOR_REPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DynamoDBActions.LIST_BACKUPS,
		DynamoDBActions.LIST_CONTRIBUTOR_INSIGHTS,
		DynamoDBActions.LIST_EXPORTS,
		DynamoDBActions.LIST_GLOBAL_TABLES,
		DynamoDBActions.LIST_IMPORTS,
		DynamoDBActions.LIST_TABLES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		DynamoDBActions.DELETE_RESOURCE_POLICY,
		DynamoDBActions.PUT_RESOURCE_POLICY,
		DynamoDBActions.UPDATE_ABAC_STATUS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DynamoDBActions.TAG_RESOURCE,
		DynamoDBActions.UNTAG_RESOURCE,
	];
}

const BackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)/backup/(?<backupName>[^:/?]+)$",
);
const ExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)/export/(?<exportName>[^:/?]+)$",
);
const GlobalTableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb::(?<account>[^:]*):global-table/(?<globalTableName>[^:/?]+)$",
);
const ImportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)/import/(?<importName>[^:/?]+)$",
);
const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)/index/(?<indexName>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)/stream/(?<streamLabel>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dynamodb:(?<region>[^:]*):(?<account>[^:]*):table/(?<tableName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for dynamodb resources.
 */
export class DynamoDBResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: {
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
	}): string {
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
	static parseBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
		backupName: string;
	} {
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
	static export(props: {
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
	}): string {
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
	static parseExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
		exportName: string;
	} {
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
	static globalTable(props: {
		/** The GlobalTableName component of the ARN. */
		readonly globalTableName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGlobalTableArn(arn: string): {
		partition: string;
		account: string;
		globalTableName: string;
	} {
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
	static import(props: {
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
	}): string {
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
	static parseImportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
		importName: string;
	} {
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
	static index(props: {
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
	}): string {
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
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
		indexName: string;
	} {
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
	static stream(props: {
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
	}): string {
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
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
		streamLabel: string;
	} {
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
	static table(props: {
		/** The TableName component of the ARN. */
		readonly tableName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableName: string;
	} {
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
	static readonly BATCH_EXECUTE_STATEMENT: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the BatchGetItem API call. */
	static readonly BATCH_GET_ITEM: string[] = ["dynamodb:BatchGetItem"];
	/** IAM actions required for the BatchWriteItem API call. */
	static readonly BATCH_WRITE_ITEM: string[] = ["dynamodb:BatchWriteItem"];
	/** IAM actions required for the CreateBackup API call. */
	static readonly CREATE_BACKUP: string[] = ["dynamodb:CreateBackup"];
	/** IAM actions required for the CreateGlobalTable API call. */
	static readonly CREATE_GLOBAL_TABLE: string[] = [
		"dynamodb:CreateGlobalTable",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CREATE_TABLE: string[] = [
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
	static readonly DELETE_BACKUP: string[] = ["dynamodb:DeleteBackup"];
	/** IAM actions required for the DeleteItem API call. */
	static readonly DELETE_ITEM: string[] = [
		"dynamodb:DeleteItem",
		"dynamodb:WriteDataForReplication",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"dynamodb:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DELETE_TABLE: string[] = ["dynamodb:DeleteTable"];
	/** IAM actions required for the DescribeBackup API call. */
	static readonly DESCRIBE_BACKUP: string[] = ["dynamodb:DescribeBackup"];
	/** IAM actions required for the DescribeContinuousBackups API call. */
	static readonly DESCRIBE_CONTINUOUS_BACKUPS: string[] = [
		"dynamodb:DescribeContinuousBackups",
	];
	/** IAM actions required for the DescribeContributorInsights API call. */
	static readonly DESCRIBE_CONTRIBUTOR_INSIGHTS: string[] = [
		"dynamodb:DescribeContributorInsights",
	];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DESCRIBE_ENDPOINTS: string[] = ["dynamodb:DescribeEndpoints"];
	/** IAM actions required for the DescribeExport API call. */
	static readonly DESCRIBE_EXPORT: string[] = ["dynamodb:DescribeExport"];
	/** IAM actions required for the DescribeGlobalTable API call. */
	static readonly DESCRIBE_GLOBAL_TABLE: string[] = [
		"dynamodb:DescribeGlobalTable",
	];
	/** IAM actions required for the DescribeGlobalTableSettings API call. */
	static readonly DESCRIBE_GLOBAL_TABLE_SETTINGS: string[] = [
		"dynamodb:DescribeGlobalTableSettings",
	];
	/** IAM actions required for the DescribeImport API call. */
	static readonly DESCRIBE_IMPORT: string[] = ["dynamodb:DescribeImport"];
	/** IAM actions required for the DescribeKinesisStreamingDestination API call. */
	static readonly DESCRIBE_KINESIS_STREAMING_DESTINATION: string[] = [
		"dynamodb:DescribeKinesisStreamingDestination",
	];
	/** IAM actions required for the DescribeLimits API call. */
	static readonly DESCRIBE_LIMITS: string[] = ["dynamodb:DescribeLimits"];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DESCRIBE_STREAM: string[] = [
		"dynamodb:DescribeStream",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DESCRIBE_TABLE: string[] = [
		"dynamodb:DescribeTable",
		"dynamodb:ReadDataForReplication",
		"dynamodb:ReplicateSettings",
	];
	/** IAM actions required for the DescribeTableReplicaAutoScaling API call. */
	static readonly DESCRIBE_TABLE_REPLICA_AUTO_SCALING: string[] = [
		"dynamodb:DescribeTableReplicaAutoScaling",
	];
	/** IAM actions required for the DescribeTimeToLive API call. */
	static readonly DESCRIBE_TIME_TO_LIVE: string[] = [
		"dynamodb:DescribeTimeToLive",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the DisableKinesisStreamingDestination API call. */
	static readonly DISABLE_KINESIS_STREAMING_DESTINATION: string[] = [
		"dynamodb:DisableKinesisStreamingDestination",
	];
	/** IAM actions required for the EnableKinesisStreamingDestination API call. */
	static readonly ENABLE_KINESIS_STREAMING_DESTINATION: string[] = [
		"dynamodb:EnableKinesisStreamingDestination",
	];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly EXECUTE_STATEMENT: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the ExecuteTransaction API call. */
	static readonly EXECUTE_TRANSACTION: string[] = [
		"dynamodb:PartiQLDelete",
		"dynamodb:PartiQLInsert",
		"dynamodb:PartiQLSelect",
		"dynamodb:PartiQLUpdate",
	];
	/** IAM actions required for the ExportTableToPointInTime API call. */
	static readonly EXPORT_TABLE_TO_POINT_IN_TIME: string[] = [
		"dynamodb:ExportTableToPointInTime",
	];
	/** IAM actions required for the GetItem API call. */
	static readonly GET_ITEM: string[] = [
		"dynamodb:GetItem",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the GetRecords API call. */
	static readonly GET_RECORDS: string[] = [
		"dynamodb:GetRecords",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"dynamodb:GetResourcePolicy",
	];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly GET_SHARD_ITERATOR: string[] = [
		"dynamodb:GetShardIterator",
		"dynamodb:ReadDataForReplication",
	];
	/** IAM actions required for the ImportTable API call. */
	static readonly IMPORT_TABLE: string[] = ["dynamodb:ImportTable"];
	/** IAM actions required for the ListBackups API call. */
	static readonly LIST_BACKUPS: string[] = ["dynamodb:ListBackups"];
	/** IAM actions required for the ListContributorInsights API call. */
	static readonly LIST_CONTRIBUTOR_INSIGHTS: string[] = [
		"dynamodb:ListContributorInsights",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["dynamodb:ListExports"];
	/** IAM actions required for the ListGlobalTables API call. */
	static readonly LIST_GLOBAL_TABLES: string[] = ["dynamodb:ListGlobalTables"];
	/** IAM actions required for the ListImports API call. */
	static readonly LIST_IMPORTS: string[] = ["dynamodb:ListImports"];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["dynamodb:ListStreams"];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["dynamodb:ListTables"];
	/** IAM actions required for the ListTagsOfResource API call. */
	static readonly LIST_TAGS_OF_RESOURCE: string[] = [
		"dynamodb:ListTagsOfResource",
	];
	/** IAM actions required for the PutItem API call. */
	static readonly PUT_ITEM: string[] = [
		"dynamodb:PutItem",
		"dynamodb:WriteDataForReplication",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"dynamodb:PutResourcePolicy",
	];
	/** IAM actions required for the Query API call. */
	static readonly QUERY: string[] = ["dynamodb:Query"];
	/** IAM actions required for the RestoreTableFromBackup API call. */
	static readonly RESTORE_TABLE_FROM_BACKUP: string[] = [
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
	static readonly RESTORE_TABLE_TO_POINT_IN_TIME: string[] = [
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
	static readonly SCAN: string[] = ["dynamodb:Scan"];
	/** IAM actions required for the SearchVectors API call. */
	static readonly SEARCH_VECTORS: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["dynamodb:TagResource"];
	/** IAM actions required for the TransactGetItems API call. */
	static readonly TRANSACT_GET_ITEMS: string[] = ["dynamodb:GetItem"];
	/** IAM actions required for the TransactWriteItems API call. */
	static readonly TRANSACT_WRITE_ITEMS: string[] = [
		"dynamodb:ConditionCheckItem",
		"dynamodb:DeleteItem",
		"dynamodb:PutItem",
		"dynamodb:UpdateItem",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["dynamodb:UntagResource"];
	/** IAM actions required for the UpdateContinuousBackups API call. */
	static readonly UPDATE_CONTINUOUS_BACKUPS: string[] = [
		"dynamodb:UpdateContinuousBackups",
	];
	/** IAM actions required for the UpdateContributorInsights API call. */
	static readonly UPDATE_CONTRIBUTOR_INSIGHTS: string[] = [
		"dynamodb:UpdateContributorInsights",
	];
	/** IAM actions required for the UpdateGlobalTable API call. */
	static readonly UPDATE_GLOBAL_TABLE: string[] = [
		"dynamodb:UpdateGlobalTable",
	];
	/** IAM actions required for the UpdateGlobalTableSettings API call. */
	static readonly UPDATE_GLOBAL_TABLE_SETTINGS: string[] = [
		"dynamodb:UpdateGlobalTableSettings",
	];
	/** IAM actions required for the UpdateItem API call. */
	static readonly UPDATE_ITEM: string[] = ["dynamodb:UpdateItem"];
	/** IAM actions required for the UpdateKinesisStreamingDestination API call. */
	static readonly UPDATE_KINESIS_STREAMING_DESTINATION: string[] = [
		"dynamodb:UpdateKinesisStreamingDestination",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UPDATE_TABLE: string[] = [
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
	static readonly UPDATE_TABLE_REPLICA_AUTO_SCALING: string[] = [
		"dynamodb:UpdateTableReplicaAutoScaling",
	];
	/** IAM actions required for the UpdateTimeToLive API call. */
	static readonly UPDATE_TIME_TO_LIVE: string[] = [
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
	static readonly BATCH_GET_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the BatchWriteItem action. */
	static readonly BATCH_WRITE_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
	];
	/** Condition keys applicable to the ConditionCheckItem action. */
	static readonly CONDITION_CHECK_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CREATE_TABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteItem action. */
	static readonly DELETE_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the GetItem action. */
	static readonly GET_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the InjectError action. */
	static readonly INJECT_ERROR_CONDITION_KEYS: string[] = [
		"dynamodb:FisActionId",
		"dynamodb:FisTargetArns",
	];
	/** Condition keys applicable to the PartiQLDelete action. */
	static readonly PARTI_QL_DELETE_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the PartiQLInsert action. */
	static readonly PARTI_QL_INSERT_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
	];
	/** Condition keys applicable to the PartiQLSelect action. */
	static readonly PARTI_QL_SELECT_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:FullTableScan",
		"dynamodb:LeadingKeys",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the PartiQLUpdate action. */
	static readonly PARTI_QL_UPDATE_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the PutItem action. */
	static readonly PUT_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];
	/** Condition keys applicable to the Query action. */
	static readonly QUERY_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the Scan action. */
	static readonly SCAN_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
		"dynamodb:Select",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateItem action. */
	static readonly UPDATE_ITEM_CONDITION_KEYS: string[] = [
		"dynamodb:Attributes",
		"dynamodb:EnclosingOperation",
		"dynamodb:LeadingKeys",
		"dynamodb:ReturnConsumedCapacity",
		"dynamodb:ReturnValues",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
