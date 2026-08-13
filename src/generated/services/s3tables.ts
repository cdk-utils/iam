// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3tables.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3tables service.
 */
export class S3tablesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3tables";

	/** [Write] s3tables:CreateNamespace */
	static readonly CREATE_NAMESPACE = "s3tables:CreateNamespace";
	/** [Write] s3tables:CreateTable */
	static readonly CREATE_TABLE = "s3tables:CreateTable";
	/** [Write] s3tables:CreateTableBucket */
	static readonly CREATE_TABLE_BUCKET = "s3tables:CreateTableBucket";
	/** [Write] s3tables:DeleteNamespace */
	static readonly DELETE_NAMESPACE = "s3tables:DeleteNamespace";
	/** [Write] s3tables:DeleteTable */
	static readonly DELETE_TABLE = "s3tables:DeleteTable";
	/** [Write] s3tables:DeleteTableBucket */
	static readonly DELETE_TABLE_BUCKET = "s3tables:DeleteTableBucket";
	/** [Write] s3tables:DeleteTableBucketEncryption */
	static readonly DELETE_TABLE_BUCKET_ENCRYPTION =
		"s3tables:DeleteTableBucketEncryption";
	/** [Write] s3tables:DeleteTableBucketMetricsConfiguration */
	static readonly DELETE_TABLE_BUCKET_METRICS_CONFIGURATION =
		"s3tables:DeleteTableBucketMetricsConfiguration";
	/** [PermissionManagement] s3tables:DeleteTableBucketPolicy */
	static readonly DELETE_TABLE_BUCKET_POLICY =
		"s3tables:DeleteTableBucketPolicy";
	/** [Write] s3tables:DeleteTableBucketReplication */
	static readonly DELETE_TABLE_BUCKET_REPLICATION =
		"s3tables:DeleteTableBucketReplication";
	/** [PermissionManagement] s3tables:DeleteTablePolicy */
	static readonly DELETE_TABLE_POLICY = "s3tables:DeleteTablePolicy";
	/** [Write] s3tables:DeleteTableReplication */
	static readonly DELETE_TABLE_REPLICATION = "s3tables:DeleteTableReplication";
	/** [Read] s3tables:GetNamespace */
	static readonly GET_NAMESPACE = "s3tables:GetNamespace";
	/** [Read] s3tables:GetTable */
	static readonly GET_TABLE = "s3tables:GetTable";
	/** [Read] s3tables:GetTableBucket */
	static readonly GET_TABLE_BUCKET = "s3tables:GetTableBucket";
	/** [Read] s3tables:GetTableBucketEncryption */
	static readonly GET_TABLE_BUCKET_ENCRYPTION =
		"s3tables:GetTableBucketEncryption";
	/** [Read] s3tables:GetTableBucketMaintenanceConfiguration */
	static readonly GET_TABLE_BUCKET_MAINTENANCE_CONFIGURATION =
		"s3tables:GetTableBucketMaintenanceConfiguration";
	/** [Read] s3tables:GetTableBucketMetricsConfiguration */
	static readonly GET_TABLE_BUCKET_METRICS_CONFIGURATION =
		"s3tables:GetTableBucketMetricsConfiguration";
	/** [Read] s3tables:GetTableBucketPolicy */
	static readonly GET_TABLE_BUCKET_POLICY = "s3tables:GetTableBucketPolicy";
	/** [Read] s3tables:GetTableBucketReplication */
	static readonly GET_TABLE_BUCKET_REPLICATION =
		"s3tables:GetTableBucketReplication";
	/** [Read] s3tables:GetTableBucketStorageClass */
	static readonly GET_TABLE_BUCKET_STORAGE_CLASS =
		"s3tables:GetTableBucketStorageClass";
	/** [Read] s3tables:GetTableData */
	static readonly GET_TABLE_DATA = "s3tables:GetTableData";
	/** [Read] s3tables:GetTableEncryption */
	static readonly GET_TABLE_ENCRYPTION = "s3tables:GetTableEncryption";
	/** [Read] s3tables:GetTableMaintenanceConfiguration */
	static readonly GET_TABLE_MAINTENANCE_CONFIGURATION =
		"s3tables:GetTableMaintenanceConfiguration";
	/** [Read] s3tables:GetTableMaintenanceJobStatus */
	static readonly GET_TABLE_MAINTENANCE_JOB_STATUS =
		"s3tables:GetTableMaintenanceJobStatus";
	/** [Read] s3tables:GetTableMetadataLocation */
	static readonly GET_TABLE_METADATA_LOCATION =
		"s3tables:GetTableMetadataLocation";
	/** [Read] s3tables:GetTablePolicy */
	static readonly GET_TABLE_POLICY = "s3tables:GetTablePolicy";
	/** [Read] s3tables:GetTableRecordExpirationConfiguration */
	static readonly GET_TABLE_RECORD_EXPIRATION_CONFIGURATION =
		"s3tables:GetTableRecordExpirationConfiguration";
	/** [Read] s3tables:GetTableRecordExpirationJobStatus */
	static readonly GET_TABLE_RECORD_EXPIRATION_JOB_STATUS =
		"s3tables:GetTableRecordExpirationJobStatus";
	/** [Read] s3tables:GetTableReplication */
	static readonly GET_TABLE_REPLICATION = "s3tables:GetTableReplication";
	/** [Read] s3tables:GetTableReplicationStatus */
	static readonly GET_TABLE_REPLICATION_STATUS =
		"s3tables:GetTableReplicationStatus";
	/** [Read] s3tables:GetTableStorageClass */
	static readonly GET_TABLE_STORAGE_CLASS = "s3tables:GetTableStorageClass";
	/** [List] s3tables:ListNamespaces */
	static readonly LIST_NAMESPACES = "s3tables:ListNamespaces";
	/** [List] s3tables:ListTableBuckets */
	static readonly LIST_TABLE_BUCKETS = "s3tables:ListTableBuckets";
	/** [List] s3tables:ListTables */
	static readonly LIST_TABLES = "s3tables:ListTables";
	/** [List] s3tables:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "s3tables:ListTagsForResource";
	/** [Write] s3tables:PutTableBucketEncryption */
	static readonly PUT_TABLE_BUCKET_ENCRYPTION =
		"s3tables:PutTableBucketEncryption";
	/** [Write] s3tables:PutTableBucketMaintenanceConfiguration */
	static readonly PUT_TABLE_BUCKET_MAINTENANCE_CONFIGURATION =
		"s3tables:PutTableBucketMaintenanceConfiguration";
	/** [Write] s3tables:PutTableBucketMetricsConfiguration */
	static readonly PUT_TABLE_BUCKET_METRICS_CONFIGURATION =
		"s3tables:PutTableBucketMetricsConfiguration";
	/** [PermissionManagement] s3tables:PutTableBucketPolicy */
	static readonly PUT_TABLE_BUCKET_POLICY = "s3tables:PutTableBucketPolicy";
	/** [Write] s3tables:PutTableBucketReplication */
	static readonly PUT_TABLE_BUCKET_REPLICATION =
		"s3tables:PutTableBucketReplication";
	/** [Write] s3tables:PutTableBucketStorageClass */
	static readonly PUT_TABLE_BUCKET_STORAGE_CLASS =
		"s3tables:PutTableBucketStorageClass";
	/** [Write] s3tables:PutTableData */
	static readonly PUT_TABLE_DATA = "s3tables:PutTableData";
	/** [Write] s3tables:PutTableEncryption */
	static readonly PUT_TABLE_ENCRYPTION = "s3tables:PutTableEncryption";
	/** [Write] s3tables:PutTableMaintenanceConfiguration */
	static readonly PUT_TABLE_MAINTENANCE_CONFIGURATION =
		"s3tables:PutTableMaintenanceConfiguration";
	/** [PermissionManagement] s3tables:PutTablePolicy */
	static readonly PUT_TABLE_POLICY = "s3tables:PutTablePolicy";
	/** [Write] s3tables:PutTableRecordExpirationConfiguration */
	static readonly PUT_TABLE_RECORD_EXPIRATION_CONFIGURATION =
		"s3tables:PutTableRecordExpirationConfiguration";
	/** [Write] s3tables:PutTableReplication */
	static readonly PUT_TABLE_REPLICATION = "s3tables:PutTableReplication";
	/** [Write] s3tables:PutTableStorageClass */
	static readonly PUT_TABLE_STORAGE_CLASS = "s3tables:PutTableStorageClass";
	/** [Write] s3tables:RenameTable */
	static readonly RENAME_TABLE = "s3tables:RenameTable";
	/** [Tagging] s3tables:TagResource */
	static readonly TAG_RESOURCE = "s3tables:TagResource";
	/** [Tagging] s3tables:UntagResource */
	static readonly UNTAG_RESOURCE = "s3tables:UntagResource";
	/** [Write] s3tables:UpdateTableMetadataLocation */
	static readonly UPDATE_TABLE_METADATA_LOCATION =
		"s3tables:UpdateTableMetadataLocation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		S3tablesActions.GET_NAMESPACE,
		S3tablesActions.GET_TABLE,
		S3tablesActions.GET_TABLE_BUCKET,
		S3tablesActions.GET_TABLE_BUCKET_ENCRYPTION,
		S3tablesActions.GET_TABLE_BUCKET_MAINTENANCE_CONFIGURATION,
		S3tablesActions.GET_TABLE_BUCKET_METRICS_CONFIGURATION,
		S3tablesActions.GET_TABLE_BUCKET_POLICY,
		S3tablesActions.GET_TABLE_BUCKET_REPLICATION,
		S3tablesActions.GET_TABLE_BUCKET_STORAGE_CLASS,
		S3tablesActions.GET_TABLE_DATA,
		S3tablesActions.GET_TABLE_ENCRYPTION,
		S3tablesActions.GET_TABLE_MAINTENANCE_CONFIGURATION,
		S3tablesActions.GET_TABLE_MAINTENANCE_JOB_STATUS,
		S3tablesActions.GET_TABLE_METADATA_LOCATION,
		S3tablesActions.GET_TABLE_POLICY,
		S3tablesActions.GET_TABLE_RECORD_EXPIRATION_CONFIGURATION,
		S3tablesActions.GET_TABLE_RECORD_EXPIRATION_JOB_STATUS,
		S3tablesActions.GET_TABLE_REPLICATION,
		S3tablesActions.GET_TABLE_REPLICATION_STATUS,
		S3tablesActions.GET_TABLE_STORAGE_CLASS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		S3tablesActions.CREATE_NAMESPACE,
		S3tablesActions.CREATE_TABLE,
		S3tablesActions.CREATE_TABLE_BUCKET,
		S3tablesActions.DELETE_NAMESPACE,
		S3tablesActions.DELETE_TABLE,
		S3tablesActions.DELETE_TABLE_BUCKET,
		S3tablesActions.DELETE_TABLE_BUCKET_ENCRYPTION,
		S3tablesActions.DELETE_TABLE_BUCKET_METRICS_CONFIGURATION,
		S3tablesActions.DELETE_TABLE_BUCKET_REPLICATION,
		S3tablesActions.DELETE_TABLE_REPLICATION,
		S3tablesActions.PUT_TABLE_BUCKET_ENCRYPTION,
		S3tablesActions.PUT_TABLE_BUCKET_MAINTENANCE_CONFIGURATION,
		S3tablesActions.PUT_TABLE_BUCKET_METRICS_CONFIGURATION,
		S3tablesActions.PUT_TABLE_BUCKET_REPLICATION,
		S3tablesActions.PUT_TABLE_BUCKET_STORAGE_CLASS,
		S3tablesActions.PUT_TABLE_DATA,
		S3tablesActions.PUT_TABLE_ENCRYPTION,
		S3tablesActions.PUT_TABLE_MAINTENANCE_CONFIGURATION,
		S3tablesActions.PUT_TABLE_RECORD_EXPIRATION_CONFIGURATION,
		S3tablesActions.PUT_TABLE_REPLICATION,
		S3tablesActions.PUT_TABLE_STORAGE_CLASS,
		S3tablesActions.RENAME_TABLE,
		S3tablesActions.UPDATE_TABLE_METADATA_LOCATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		S3tablesActions.LIST_NAMESPACES,
		S3tablesActions.LIST_TABLE_BUCKETS,
		S3tablesActions.LIST_TABLES,
		S3tablesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		S3tablesActions.DELETE_TABLE_BUCKET_POLICY,
		S3tablesActions.DELETE_TABLE_POLICY,
		S3tablesActions.PUT_TABLE_BUCKET_POLICY,
		S3tablesActions.PUT_TABLE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		S3tablesActions.TAG_RESOURCE,
		S3tablesActions.UNTAG_RESOURCE,
	];
}

const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3tables:(?<region>[^:]*):(?<account>[^:]*):bucket/(?<tableBucketName>[^:/?]+)/table/(?<tableId>[^:/?]+)$",
);
const TableBucketArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3tables:(?<region>[^:]*):(?<account>[^:]*):bucket/(?<tableBucketName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for s3tables resources.
 */
export class S3tablesResources {
	/**
	 * Builds an ARN for the Table resource.
	 */
	static table(props: {
		/** The TableBucketName component of the ARN. */
		readonly tableBucketName: string;
		/** The TableID component of the ARN. */
		readonly tableId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3tables:${props.region ?? "*"}:${props.account ?? "*"}:bucket/${props.tableBucketName}/table/${props.tableId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a Table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableBucketName: string;
		tableId: string;
	} {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableBucketName: match.groups!.tableBucketName,
			tableId: match.groups!.tableId,
		};
	}

	/**
	 * Builds an ARN for the TableBucket resource.
	 */
	static tableBucket(props: {
		/** The TableBucketName component of the ARN. */
		readonly tableBucketName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3tables:${props.region ?? "*"}:${props.account ?? "*"}:bucket/${props.tableBucketName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TableBucket resource.
	 */
	static isValidTableBucketArn(arn: string): boolean {
		return TableBucketArnRegex.test(arn);
	}

	/**
	 * Parses a TableBucket ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableBucketArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tableBucketName: string;
	} {
		const match = TableBucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TableBucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tableBucketName: match.groups!.tableBucketName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for s3tables.
 */
export class S3tablesOperations {
	/** IAM actions required for the CreateNamespace API call. */
	static readonly CREATE_NAMESPACE: string[] = ["s3tables:CreateNamespace"];
	/** IAM actions required for the CreateTable API call. */
	static readonly CREATE_TABLE: string[] = [
		"s3tables:CreateTable",
		"s3tables:PutTableEncryption",
		"s3tables:PutTableStorageClass",
		"s3tables:TagResource",
	];
	/** IAM actions required for the CreateTableBucket API call. */
	static readonly CREATE_TABLE_BUCKET: string[] = [
		"s3tables:CreateTableBucket",
		"s3tables:PutTableBucketEncryption",
		"s3tables:PutTableBucketPolicy",
		"s3tables:PutTableBucketStorageClass",
		"s3tables:TagResource",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DELETE_NAMESPACE: string[] = ["s3tables:DeleteNamespace"];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DELETE_TABLE: string[] = ["s3tables:DeleteTable"];
	/** IAM actions required for the DeleteTableBucket API call. */
	static readonly DELETE_TABLE_BUCKET: string[] = [
		"s3tables:DeleteTableBucket",
	];
	/** IAM actions required for the DeleteTableBucketEncryption API call. */
	static readonly DELETE_TABLE_BUCKET_ENCRYPTION: string[] = [
		"s3tables:DeleteTableBucketEncryption",
	];
	/** IAM actions required for the DeleteTableBucketMetricsConfiguration API call. */
	static readonly DELETE_TABLE_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3tables:DeleteTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the DeleteTableBucketPolicy API call. */
	static readonly DELETE_TABLE_BUCKET_POLICY: string[] = [
		"s3tables:DeleteTableBucketPolicy",
	];
	/** IAM actions required for the DeleteTableBucketReplication API call. */
	static readonly DELETE_TABLE_BUCKET_REPLICATION: string[] = [
		"s3tables:DeleteTableBucketReplication",
	];
	/** IAM actions required for the DeleteTablePolicy API call. */
	static readonly DELETE_TABLE_POLICY: string[] = [
		"s3tables:DeleteTablePolicy",
	];
	/** IAM actions required for the DeleteTableReplication API call. */
	static readonly DELETE_TABLE_REPLICATION: string[] = [
		"s3tables:DeleteTableReplication",
	];
	/** IAM actions required for the GetNamespace API call. */
	static readonly GET_NAMESPACE: string[] = ["s3tables:GetNamespace"];
	/** IAM actions required for the GetTable API call. */
	static readonly GET_TABLE: string[] = ["s3tables:GetTable"];
	/** IAM actions required for the GetTableBucket API call. */
	static readonly GET_TABLE_BUCKET: string[] = ["s3tables:GetTableBucket"];
	/** IAM actions required for the GetTableBucketEncryption API call. */
	static readonly GET_TABLE_BUCKET_ENCRYPTION: string[] = [
		"s3tables:GetTableBucketEncryption",
	];
	/** IAM actions required for the GetTableBucketMaintenanceConfiguration API call. */
	static readonly GET_TABLE_BUCKET_MAINTENANCE_CONFIGURATION: string[] = [
		"s3tables:GetTableBucketMaintenanceConfiguration",
	];
	/** IAM actions required for the GetTableBucketMetricsConfiguration API call. */
	static readonly GET_TABLE_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3tables:GetTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the GetTableBucketPolicy API call. */
	static readonly GET_TABLE_BUCKET_POLICY: string[] = [
		"s3tables:GetTableBucketPolicy",
	];
	/** IAM actions required for the GetTableBucketReplication API call. */
	static readonly GET_TABLE_BUCKET_REPLICATION: string[] = [
		"s3tables:GetTableBucketReplication",
	];
	/** IAM actions required for the GetTableBucketStorageClass API call. */
	static readonly GET_TABLE_BUCKET_STORAGE_CLASS: string[] = [
		"s3tables:GetTableBucketStorageClass",
	];
	/** IAM actions required for the GetTableEncryption API call. */
	static readonly GET_TABLE_ENCRYPTION: string[] = [
		"s3tables:GetTableEncryption",
	];
	/** IAM actions required for the GetTableMaintenanceConfiguration API call. */
	static readonly GET_TABLE_MAINTENANCE_CONFIGURATION: string[] = [
		"s3tables:GetTableMaintenanceConfiguration",
	];
	/** IAM actions required for the GetTableMaintenanceJobStatus API call. */
	static readonly GET_TABLE_MAINTENANCE_JOB_STATUS: string[] = [
		"s3tables:GetTableMaintenanceJobStatus",
	];
	/** IAM actions required for the GetTableMetadataLocation API call. */
	static readonly GET_TABLE_METADATA_LOCATION: string[] = [
		"s3tables:GetTableMetadataLocation",
	];
	/** IAM actions required for the GetTablePolicy API call. */
	static readonly GET_TABLE_POLICY: string[] = ["s3tables:GetTablePolicy"];
	/** IAM actions required for the GetTableRecordExpirationConfiguration API call. */
	static readonly GET_TABLE_RECORD_EXPIRATION_CONFIGURATION: string[] = [
		"s3tables:GetTableRecordExpirationConfiguration",
	];
	/** IAM actions required for the GetTableRecordExpirationJobStatus API call. */
	static readonly GET_TABLE_RECORD_EXPIRATION_JOB_STATUS: string[] = [
		"s3tables:GetTableRecordExpirationJobStatus",
	];
	/** IAM actions required for the GetTableReplication API call. */
	static readonly GET_TABLE_REPLICATION: string[] = [
		"s3tables:GetTableReplication",
	];
	/** IAM actions required for the GetTableReplicationStatus API call. */
	static readonly GET_TABLE_REPLICATION_STATUS: string[] = [
		"s3tables:GetTableReplicationStatus",
	];
	/** IAM actions required for the GetTableStorageClass API call. */
	static readonly GET_TABLE_STORAGE_CLASS: string[] = [
		"s3tables:GetTableStorageClass",
	];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly LIST_NAMESPACES: string[] = ["s3tables:ListNamespaces"];
	/** IAM actions required for the ListTableBuckets API call. */
	static readonly LIST_TABLE_BUCKETS: string[] = ["s3tables:ListTableBuckets"];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["s3tables:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"s3tables:ListTagsForResource",
	];
	/** IAM actions required for the PutTableBucketEncryption API call. */
	static readonly PUT_TABLE_BUCKET_ENCRYPTION: string[] = [
		"s3tables:PutTableBucketEncryption",
	];
	/** IAM actions required for the PutTableBucketMaintenanceConfiguration API call. */
	static readonly PUT_TABLE_BUCKET_MAINTENANCE_CONFIGURATION: string[] = [
		"s3tables:PutTableBucketMaintenanceConfiguration",
	];
	/** IAM actions required for the PutTableBucketMetricsConfiguration API call. */
	static readonly PUT_TABLE_BUCKET_METRICS_CONFIGURATION: string[] = [
		"s3tables:PutTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the PutTableBucketPolicy API call. */
	static readonly PUT_TABLE_BUCKET_POLICY: string[] = [
		"s3tables:PutTableBucketPolicy",
	];
	/** IAM actions required for the PutTableBucketReplication API call. */
	static readonly PUT_TABLE_BUCKET_REPLICATION: string[] = [
		"iam:PassRole",
		"s3tables:PutTableBucketReplication",
	];
	/** IAM actions required for the PutTableBucketStorageClass API call. */
	static readonly PUT_TABLE_BUCKET_STORAGE_CLASS: string[] = [
		"s3tables:PutTableBucketStorageClass",
	];
	/** IAM actions required for the PutTableMaintenanceConfiguration API call. */
	static readonly PUT_TABLE_MAINTENANCE_CONFIGURATION: string[] = [
		"s3tables:PutTableMaintenanceConfiguration",
	];
	/** IAM actions required for the PutTablePolicy API call. */
	static readonly PUT_TABLE_POLICY: string[] = ["s3tables:PutTablePolicy"];
	/** IAM actions required for the PutTableRecordExpirationConfiguration API call. */
	static readonly PUT_TABLE_RECORD_EXPIRATION_CONFIGURATION: string[] = [
		"s3tables:PutTableRecordExpirationConfiguration",
	];
	/** IAM actions required for the PutTableReplication API call. */
	static readonly PUT_TABLE_REPLICATION: string[] = [
		"iam:PassRole",
		"s3tables:PutTableReplication",
	];
	/** IAM actions required for the RenameTable API call. */
	static readonly RENAME_TABLE: string[] = ["s3tables:RenameTable"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["s3tables:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["s3tables:UntagResource"];
	/** IAM actions required for the UpdateTableMetadataLocation API call. */
	static readonly UPDATE_TABLE_METADATA_LOCATION: string[] = [
		"s3tables:UpdateTableMetadataLocation",
	];
}

/**
 * Condition key constants and builders for s3tables.
 */
export class S3tablesConditions {
	/** Condition keys applicable to the CreateTable action. */
	static readonly CREATE_TABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:TableBucketTag/${TagKey}",
		"s3tables:namespace",
	];
	/** Condition keys applicable to the CreateTableBucket action. */
	static readonly CREATE_TABLE_BUCKET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteNamespace action. */
	static readonly DELETE_NAMESPACE_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
	];
	/** Condition keys applicable to the DeleteTable action. */
	static readonly DELETE_TABLE_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the DeleteTablePolicy action. */
	static readonly DELETE_TABLE_POLICY_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the DeleteTableReplication action. */
	static readonly DELETE_TABLE_REPLICATION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetNamespace action. */
	static readonly GET_NAMESPACE_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
	];
	/** Condition keys applicable to the GetTable action. */
	static readonly GET_TABLE_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableData action. */
	static readonly GET_TABLE_DATA_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableEncryption action. */
	static readonly GET_TABLE_ENCRYPTION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableMaintenanceConfiguration action. */
	static readonly GET_TABLE_MAINTENANCE_CONFIGURATION_CONDITION_KEYS: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableMaintenanceJobStatus action. */
	static readonly GET_TABLE_MAINTENANCE_JOB_STATUS_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableMetadataLocation action. */
	static readonly GET_TABLE_METADATA_LOCATION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTablePolicy action. */
	static readonly GET_TABLE_POLICY_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableRecordExpirationConfiguration action. */
	static readonly GET_TABLE_RECORD_EXPIRATION_CONFIGURATION_CONDITION_KEYS: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableRecordExpirationJobStatus action. */
	static readonly GET_TABLE_RECORD_EXPIRATION_JOB_STATUS_CONDITION_KEYS: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableReplication action. */
	static readonly GET_TABLE_REPLICATION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableReplicationStatus action. */
	static readonly GET_TABLE_REPLICATION_STATUS_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableStorageClass action. */
	static readonly GET_TABLE_STORAGE_CLASS_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the ListTables action. */
	static readonly LIST_TABLES_CONDITION_KEYS: string[] = ["s3tables:namespace"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutTableBucketEncryption action. */
	static readonly PUT_TABLE_BUCKET_ENCRYPTION_CONDITION_KEYS: string[] = [
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
	];
	/** Condition keys applicable to the PutTableBucketStorageClass action. */
	static readonly PUT_TABLE_BUCKET_STORAGE_CLASS_CONDITION_KEYS: string[] = [
		"s3tables:StorageClass",
	];
	/** Condition keys applicable to the PutTableData action. */
	static readonly PUT_TABLE_DATA_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableEncryption action. */
	static readonly PUT_TABLE_ENCRYPTION_CONDITION_KEYS: string[] = [
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:namespace",
	];
	/** Condition keys applicable to the PutTableMaintenanceConfiguration action. */
	static readonly PUT_TABLE_MAINTENANCE_CONFIGURATION_CONDITION_KEYS: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the PutTablePolicy action. */
	static readonly PUT_TABLE_POLICY_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableRecordExpirationConfiguration action. */
	static readonly PUT_TABLE_RECORD_EXPIRATION_CONFIGURATION_CONDITION_KEYS: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the PutTableReplication action. */
	static readonly PUT_TABLE_REPLICATION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableStorageClass action. */
	static readonly PUT_TABLE_STORAGE_CLASS_CONDITION_KEYS: string[] = [
		"s3tables:StorageClass",
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the RenameTable action. */
	static readonly RENAME_TABLE_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateTableMetadataLocation action. */
	static readonly UPDATE_TABLE_METADATA_LOCATION_CONDITION_KEYS: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: s3tables:KMSKeyArn (ARN) */
	static readonly KMS_KEY_ARN = "s3tables:KMSKeyArn";
	/** Condition key: s3tables:SSEAlgorithm (String) */
	static readonly SSE_ALGORITHM = "s3tables:SSEAlgorithm";
	/** Condition key: s3tables:StorageClass (String) */
	static readonly STORAGE_CLASS = "s3tables:StorageClass";
	/** Condition key: s3tables:TableBucketTag/${TagKey} (String) */
	static readonly TABLE_BUCKET_TAG = "s3tables:TableBucketTag/${TagKey}";
	/** Condition key: s3tables:namespace (String) */
	static readonly NAMESPACE = "s3tables:namespace";
	/** Condition key: s3tables:tableName (String) */
	static readonly TABLE_NAME = "s3tables:tableName";

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
	 * Generates a condition block for `s3tables:KMSKeyArn`.
	 */
	static kmsKeyARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3tables:KMSKeyArn": value } };
	}

	/**
	 * Generates a condition block for `s3tables:SSEAlgorithm`.
	 */
	static sseAlgorithm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3tables:SSEAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `s3tables:StorageClass`.
	 */
	static storageClass(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3tables:StorageClass": value } };
	}

	/**
	 * Generates a condition block for `s3tables:TableBucketTag/${TagKey}`.
	 */
	static tableBucketTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3tables:TableBucketTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3tables:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3tables:namespace": value } };
	}

	/**
	 * Generates a condition block for `s3tables:tableName`.
	 */
	static tableName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3tables:tableName": value } };
	}
}
