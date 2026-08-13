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
	static readonly CreateNamespace = "s3tables:CreateNamespace";
	/** [Write] s3tables:CreateTable */
	static readonly CreateTable = "s3tables:CreateTable";
	/** [Write] s3tables:CreateTableBucket */
	static readonly CreateTableBucket = "s3tables:CreateTableBucket";
	/** [Write] s3tables:DeleteNamespace */
	static readonly DeleteNamespace = "s3tables:DeleteNamespace";
	/** [Write] s3tables:DeleteTable */
	static readonly DeleteTable = "s3tables:DeleteTable";
	/** [Write] s3tables:DeleteTableBucket */
	static readonly DeleteTableBucket = "s3tables:DeleteTableBucket";
	/** [Write] s3tables:DeleteTableBucketEncryption */
	static readonly DeleteTableBucketEncryption =
		"s3tables:DeleteTableBucketEncryption";
	/** [Write] s3tables:DeleteTableBucketMetricsConfiguration */
	static readonly DeleteTableBucketMetricsConfiguration =
		"s3tables:DeleteTableBucketMetricsConfiguration";
	/** [PermissionManagement] s3tables:DeleteTableBucketPolicy */
	static readonly DeleteTableBucketPolicy = "s3tables:DeleteTableBucketPolicy";
	/** [Write] s3tables:DeleteTableBucketReplication */
	static readonly DeleteTableBucketReplication =
		"s3tables:DeleteTableBucketReplication";
	/** [PermissionManagement] s3tables:DeleteTablePolicy */
	static readonly DeleteTablePolicy = "s3tables:DeleteTablePolicy";
	/** [Write] s3tables:DeleteTableReplication */
	static readonly DeleteTableReplication = "s3tables:DeleteTableReplication";
	/** [Read] s3tables:GetNamespace */
	static readonly actionGetNamespace = "s3tables:GetNamespace";
	/** [Read] s3tables:GetTable */
	static readonly actionGetTable = "s3tables:GetTable";
	/** [Read] s3tables:GetTableBucket */
	static readonly actionGetTableBucket = "s3tables:GetTableBucket";
	/** [Read] s3tables:GetTableBucketEncryption */
	static readonly actionGetTableBucketEncryption =
		"s3tables:GetTableBucketEncryption";
	/** [Read] s3tables:GetTableBucketMaintenanceConfiguration */
	static readonly actionGetTableBucketMaintenanceConfiguration =
		"s3tables:GetTableBucketMaintenanceConfiguration";
	/** [Read] s3tables:GetTableBucketMetricsConfiguration */
	static readonly actionGetTableBucketMetricsConfiguration =
		"s3tables:GetTableBucketMetricsConfiguration";
	/** [Read] s3tables:GetTableBucketPolicy */
	static readonly actionGetTableBucketPolicy = "s3tables:GetTableBucketPolicy";
	/** [Read] s3tables:GetTableBucketReplication */
	static readonly actionGetTableBucketReplication =
		"s3tables:GetTableBucketReplication";
	/** [Read] s3tables:GetTableBucketStorageClass */
	static readonly actionGetTableBucketStorageClass =
		"s3tables:GetTableBucketStorageClass";
	/** [Read] s3tables:GetTableData */
	static readonly actionGetTableData = "s3tables:GetTableData";
	/** [Read] s3tables:GetTableEncryption */
	static readonly actionGetTableEncryption = "s3tables:GetTableEncryption";
	/** [Read] s3tables:GetTableMaintenanceConfiguration */
	static readonly actionGetTableMaintenanceConfiguration =
		"s3tables:GetTableMaintenanceConfiguration";
	/** [Read] s3tables:GetTableMaintenanceJobStatus */
	static readonly actionGetTableMaintenanceJobStatus =
		"s3tables:GetTableMaintenanceJobStatus";
	/** [Read] s3tables:GetTableMetadataLocation */
	static readonly actionGetTableMetadataLocation =
		"s3tables:GetTableMetadataLocation";
	/** [Read] s3tables:GetTablePolicy */
	static readonly actionGetTablePolicy = "s3tables:GetTablePolicy";
	/** [Read] s3tables:GetTableRecordExpirationConfiguration */
	static readonly actionGetTableRecordExpirationConfiguration =
		"s3tables:GetTableRecordExpirationConfiguration";
	/** [Read] s3tables:GetTableRecordExpirationJobStatus */
	static readonly actionGetTableRecordExpirationJobStatus =
		"s3tables:GetTableRecordExpirationJobStatus";
	/** [Read] s3tables:GetTableReplication */
	static readonly actionGetTableReplication = "s3tables:GetTableReplication";
	/** [Read] s3tables:GetTableReplicationStatus */
	static readonly actionGetTableReplicationStatus =
		"s3tables:GetTableReplicationStatus";
	/** [Read] s3tables:GetTableStorageClass */
	static readonly actionGetTableStorageClass = "s3tables:GetTableStorageClass";
	/** [List] s3tables:ListNamespaces */
	static readonly ListNamespaces = "s3tables:ListNamespaces";
	/** [List] s3tables:ListTableBuckets */
	static readonly ListTableBuckets = "s3tables:ListTableBuckets";
	/** [List] s3tables:ListTables */
	static readonly ListTables = "s3tables:ListTables";
	/** [List] s3tables:ListTagsForResource */
	static readonly ListTagsForResource = "s3tables:ListTagsForResource";
	/** [Write] s3tables:PutTableBucketEncryption */
	static readonly PutTableBucketEncryption =
		"s3tables:PutTableBucketEncryption";
	/** [Write] s3tables:PutTableBucketMaintenanceConfiguration */
	static readonly PutTableBucketMaintenanceConfiguration =
		"s3tables:PutTableBucketMaintenanceConfiguration";
	/** [Write] s3tables:PutTableBucketMetricsConfiguration */
	static readonly PutTableBucketMetricsConfiguration =
		"s3tables:PutTableBucketMetricsConfiguration";
	/** [PermissionManagement] s3tables:PutTableBucketPolicy */
	static readonly PutTableBucketPolicy = "s3tables:PutTableBucketPolicy";
	/** [Write] s3tables:PutTableBucketReplication */
	static readonly PutTableBucketReplication =
		"s3tables:PutTableBucketReplication";
	/** [Write] s3tables:PutTableBucketStorageClass */
	static readonly PutTableBucketStorageClass =
		"s3tables:PutTableBucketStorageClass";
	/** [Write] s3tables:PutTableData */
	static readonly PutTableData = "s3tables:PutTableData";
	/** [Write] s3tables:PutTableEncryption */
	static readonly PutTableEncryption = "s3tables:PutTableEncryption";
	/** [Write] s3tables:PutTableMaintenanceConfiguration */
	static readonly PutTableMaintenanceConfiguration =
		"s3tables:PutTableMaintenanceConfiguration";
	/** [PermissionManagement] s3tables:PutTablePolicy */
	static readonly PutTablePolicy = "s3tables:PutTablePolicy";
	/** [Write] s3tables:PutTableRecordExpirationConfiguration */
	static readonly PutTableRecordExpirationConfiguration =
		"s3tables:PutTableRecordExpirationConfiguration";
	/** [Write] s3tables:PutTableReplication */
	static readonly PutTableReplication = "s3tables:PutTableReplication";
	/** [Write] s3tables:PutTableStorageClass */
	static readonly PutTableStorageClass = "s3tables:PutTableStorageClass";
	/** [Write] s3tables:RenameTable */
	static readonly RenameTable = "s3tables:RenameTable";
	/** [Tagging] s3tables:TagResource */
	static readonly TagResource = "s3tables:TagResource";
	/** [Tagging] s3tables:UntagResource */
	static readonly UntagResource = "s3tables:UntagResource";
	/** [Write] s3tables:UpdateTableMetadataLocation */
	static readonly UpdateTableMetadataLocation =
		"s3tables:UpdateTableMetadataLocation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3tablesActions.actionGetNamespace,
		S3tablesActions.actionGetTable,
		S3tablesActions.actionGetTableBucket,
		S3tablesActions.actionGetTableBucketEncryption,
		S3tablesActions.actionGetTableBucketMaintenanceConfiguration,
		S3tablesActions.actionGetTableBucketMetricsConfiguration,
		S3tablesActions.actionGetTableBucketPolicy,
		S3tablesActions.actionGetTableBucketReplication,
		S3tablesActions.actionGetTableBucketStorageClass,
		S3tablesActions.actionGetTableData,
		S3tablesActions.actionGetTableEncryption,
		S3tablesActions.actionGetTableMaintenanceConfiguration,
		S3tablesActions.actionGetTableMaintenanceJobStatus,
		S3tablesActions.actionGetTableMetadataLocation,
		S3tablesActions.actionGetTablePolicy,
		S3tablesActions.actionGetTableRecordExpirationConfiguration,
		S3tablesActions.actionGetTableRecordExpirationJobStatus,
		S3tablesActions.actionGetTableReplication,
		S3tablesActions.actionGetTableReplicationStatus,
		S3tablesActions.actionGetTableStorageClass,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3tablesActions.CreateNamespace,
		S3tablesActions.CreateTable,
		S3tablesActions.CreateTableBucket,
		S3tablesActions.DeleteNamespace,
		S3tablesActions.DeleteTable,
		S3tablesActions.DeleteTableBucket,
		S3tablesActions.DeleteTableBucketEncryption,
		S3tablesActions.DeleteTableBucketMetricsConfiguration,
		S3tablesActions.DeleteTableBucketReplication,
		S3tablesActions.DeleteTableReplication,
		S3tablesActions.PutTableBucketEncryption,
		S3tablesActions.PutTableBucketMaintenanceConfiguration,
		S3tablesActions.PutTableBucketMetricsConfiguration,
		S3tablesActions.PutTableBucketReplication,
		S3tablesActions.PutTableBucketStorageClass,
		S3tablesActions.PutTableData,
		S3tablesActions.PutTableEncryption,
		S3tablesActions.PutTableMaintenanceConfiguration,
		S3tablesActions.PutTableRecordExpirationConfiguration,
		S3tablesActions.PutTableReplication,
		S3tablesActions.PutTableStorageClass,
		S3tablesActions.RenameTable,
		S3tablesActions.UpdateTableMetadataLocation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3tablesActions.ListNamespaces,
		S3tablesActions.ListTableBuckets,
		S3tablesActions.ListTables,
		S3tablesActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3tablesActions.DeleteTableBucketPolicy,
		S3tablesActions.DeleteTablePolicy,
		S3tablesActions.PutTableBucketPolicy,
		S3tablesActions.PutTablePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3tablesActions.TagResource,
		S3tablesActions.UntagResource,
	];
}

/**
 * Properties for building a Table ARN.
 */
export interface S3tablesTableArnProps {
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
}

/**
 * Parsed components of a Table ARN.
 */
export interface S3tablesTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableBucketName component. */
	readonly tableBucketName: string;
	/** The TableID component. */
	readonly tableId: string;
}

/**
 * Properties for building a TableBucket ARN.
 */
export interface S3tablesTableBucketArnProps {
	/** The TableBucketName component of the ARN. */
	readonly tableBucketName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TableBucket ARN.
 */
export interface S3tablesTableBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TableBucketName component. */
	readonly tableBucketName: string;
}

const TableArnRegex =
	/^arn:(?<partition>[^:]+):s3tables:(?<region>[^:]*):(?<account>[^:]*):bucket\/(?<tableBucketName>[^:/?]+)\/table\/(?<tableId>[^:/?]+)$/;
const TableBucketArnRegex =
	/^arn:(?<partition>[^:]+):s3tables:(?<region>[^:]*):(?<account>[^:]*):bucket\/(?<tableBucketName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3tables resources.
 */
export class S3tablesResources {
	/**
	 * Builds an ARN for the Table resource.
	 */
	static table(props: S3tablesTableArnProps): string {
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
	static parseTableArn(arn: string): S3tablesTableArnComponents {
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
	static tableBucket(props: S3tablesTableBucketArnProps): string {
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
	static parseTableBucketArn(arn: string): S3tablesTableBucketArnComponents {
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
	static readonly CreateNamespace: string[] = ["s3tables:CreateNamespace"];
	/** IAM actions required for the CreateTable API call. */
	static readonly CreateTable: string[] = [
		"s3tables:CreateTable",
		"s3tables:PutTableEncryption",
		"s3tables:PutTableStorageClass",
		"s3tables:TagResource",
	];
	/** IAM actions required for the CreateTableBucket API call. */
	static readonly CreateTableBucket: string[] = [
		"s3tables:CreateTableBucket",
		"s3tables:PutTableBucketEncryption",
		"s3tables:PutTableBucketPolicy",
		"s3tables:PutTableBucketStorageClass",
		"s3tables:TagResource",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DeleteNamespace: string[] = ["s3tables:DeleteNamespace"];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DeleteTable: string[] = ["s3tables:DeleteTable"];
	/** IAM actions required for the DeleteTableBucket API call. */
	static readonly DeleteTableBucket: string[] = ["s3tables:DeleteTableBucket"];
	/** IAM actions required for the DeleteTableBucketEncryption API call. */
	static readonly DeleteTableBucketEncryption: string[] = [
		"s3tables:DeleteTableBucketEncryption",
	];
	/** IAM actions required for the DeleteTableBucketMetricsConfiguration API call. */
	static readonly DeleteTableBucketMetricsConfiguration: string[] = [
		"s3tables:DeleteTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the DeleteTableBucketPolicy API call. */
	static readonly DeleteTableBucketPolicy: string[] = [
		"s3tables:DeleteTableBucketPolicy",
	];
	/** IAM actions required for the DeleteTableBucketReplication API call. */
	static readonly DeleteTableBucketReplication: string[] = [
		"s3tables:DeleteTableBucketReplication",
	];
	/** IAM actions required for the DeleteTablePolicy API call. */
	static readonly DeleteTablePolicy: string[] = ["s3tables:DeleteTablePolicy"];
	/** IAM actions required for the DeleteTableReplication API call. */
	static readonly DeleteTableReplication: string[] = [
		"s3tables:DeleteTableReplication",
	];
	/** IAM actions required for the GetNamespace API call. */
	static readonly opGetNamespace: string[] = ["s3tables:GetNamespace"];
	/** IAM actions required for the GetTable API call. */
	static readonly opGetTable: string[] = ["s3tables:GetTable"];
	/** IAM actions required for the GetTableBucket API call. */
	static readonly opGetTableBucket: string[] = ["s3tables:GetTableBucket"];
	/** IAM actions required for the GetTableBucketEncryption API call. */
	static readonly opGetTableBucketEncryption: string[] = [
		"s3tables:GetTableBucketEncryption",
	];
	/** IAM actions required for the GetTableBucketMaintenanceConfiguration API call. */
	static readonly opGetTableBucketMaintenanceConfiguration: string[] = [
		"s3tables:GetTableBucketMaintenanceConfiguration",
	];
	/** IAM actions required for the GetTableBucketMetricsConfiguration API call. */
	static readonly opGetTableBucketMetricsConfiguration: string[] = [
		"s3tables:GetTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the GetTableBucketPolicy API call. */
	static readonly opGetTableBucketPolicy: string[] = [
		"s3tables:GetTableBucketPolicy",
	];
	/** IAM actions required for the GetTableBucketReplication API call. */
	static readonly opGetTableBucketReplication: string[] = [
		"s3tables:GetTableBucketReplication",
	];
	/** IAM actions required for the GetTableBucketStorageClass API call. */
	static readonly opGetTableBucketStorageClass: string[] = [
		"s3tables:GetTableBucketStorageClass",
	];
	/** IAM actions required for the GetTableEncryption API call. */
	static readonly opGetTableEncryption: string[] = [
		"s3tables:GetTableEncryption",
	];
	/** IAM actions required for the GetTableMaintenanceConfiguration API call. */
	static readonly opGetTableMaintenanceConfiguration: string[] = [
		"s3tables:GetTableMaintenanceConfiguration",
	];
	/** IAM actions required for the GetTableMaintenanceJobStatus API call. */
	static readonly opGetTableMaintenanceJobStatus: string[] = [
		"s3tables:GetTableMaintenanceJobStatus",
	];
	/** IAM actions required for the GetTableMetadataLocation API call. */
	static readonly opGetTableMetadataLocation: string[] = [
		"s3tables:GetTableMetadataLocation",
	];
	/** IAM actions required for the GetTablePolicy API call. */
	static readonly opGetTablePolicy: string[] = ["s3tables:GetTablePolicy"];
	/** IAM actions required for the GetTableRecordExpirationConfiguration API call. */
	static readonly opGetTableRecordExpirationConfiguration: string[] = [
		"s3tables:GetTableRecordExpirationConfiguration",
	];
	/** IAM actions required for the GetTableRecordExpirationJobStatus API call. */
	static readonly opGetTableRecordExpirationJobStatus: string[] = [
		"s3tables:GetTableRecordExpirationJobStatus",
	];
	/** IAM actions required for the GetTableReplication API call. */
	static readonly opGetTableReplication: string[] = [
		"s3tables:GetTableReplication",
	];
	/** IAM actions required for the GetTableReplicationStatus API call. */
	static readonly opGetTableReplicationStatus: string[] = [
		"s3tables:GetTableReplicationStatus",
	];
	/** IAM actions required for the GetTableStorageClass API call. */
	static readonly opGetTableStorageClass: string[] = [
		"s3tables:GetTableStorageClass",
	];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly ListNamespaces: string[] = ["s3tables:ListNamespaces"];
	/** IAM actions required for the ListTableBuckets API call. */
	static readonly ListTableBuckets: string[] = ["s3tables:ListTableBuckets"];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["s3tables:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"s3tables:ListTagsForResource",
	];
	/** IAM actions required for the PutTableBucketEncryption API call. */
	static readonly PutTableBucketEncryption: string[] = [
		"s3tables:PutTableBucketEncryption",
	];
	/** IAM actions required for the PutTableBucketMaintenanceConfiguration API call. */
	static readonly PutTableBucketMaintenanceConfiguration: string[] = [
		"s3tables:PutTableBucketMaintenanceConfiguration",
	];
	/** IAM actions required for the PutTableBucketMetricsConfiguration API call. */
	static readonly PutTableBucketMetricsConfiguration: string[] = [
		"s3tables:PutTableBucketMetricsConfiguration",
	];
	/** IAM actions required for the PutTableBucketPolicy API call. */
	static readonly PutTableBucketPolicy: string[] = [
		"s3tables:PutTableBucketPolicy",
	];
	/** IAM actions required for the PutTableBucketReplication API call. */
	static readonly PutTableBucketReplication: string[] = [
		"iam:PassRole",
		"s3tables:PutTableBucketReplication",
	];
	/** IAM actions required for the PutTableBucketStorageClass API call. */
	static readonly PutTableBucketStorageClass: string[] = [
		"s3tables:PutTableBucketStorageClass",
	];
	/** IAM actions required for the PutTableMaintenanceConfiguration API call. */
	static readonly PutTableMaintenanceConfiguration: string[] = [
		"s3tables:PutTableMaintenanceConfiguration",
	];
	/** IAM actions required for the PutTablePolicy API call. */
	static readonly PutTablePolicy: string[] = ["s3tables:PutTablePolicy"];
	/** IAM actions required for the PutTableRecordExpirationConfiguration API call. */
	static readonly PutTableRecordExpirationConfiguration: string[] = [
		"s3tables:PutTableRecordExpirationConfiguration",
	];
	/** IAM actions required for the PutTableReplication API call. */
	static readonly PutTableReplication: string[] = [
		"iam:PassRole",
		"s3tables:PutTableReplication",
	];
	/** IAM actions required for the RenameTable API call. */
	static readonly RenameTable: string[] = ["s3tables:RenameTable"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["s3tables:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["s3tables:UntagResource"];
	/** IAM actions required for the UpdateTableMetadataLocation API call. */
	static readonly UpdateTableMetadataLocation: string[] = [
		"s3tables:UpdateTableMetadataLocation",
	];
}

/**
 * Condition key constants and builders for s3tables.
 */
export class S3tablesConditions {
	/** Condition keys applicable to the CreateTable action. */
	static readonly CreateTableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:TableBucketTag/${TagKey}",
		"s3tables:namespace",
	];
	/** Condition keys applicable to the CreateTableBucket action. */
	static readonly CreateTableBucketConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteNamespace action. */
	static readonly DeleteNamespaceConditionKeys: string[] = [
		"s3tables:namespace",
	];
	/** Condition keys applicable to the DeleteTable action. */
	static readonly DeleteTableConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the DeleteTablePolicy action. */
	static readonly DeleteTablePolicyConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the DeleteTableReplication action. */
	static readonly DeleteTableReplicationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetNamespace action. */
	static readonly actionGetNamespaceConditionKeys: string[] = [
		"s3tables:namespace",
	];
	/** Condition keys applicable to the GetTable action. */
	static readonly actionGetTableConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableData action. */
	static readonly actionGetTableDataConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableEncryption action. */
	static readonly actionGetTableEncryptionConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableMaintenanceConfiguration action. */
	static readonly actionGetTableMaintenanceConfigurationConditionKeys: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableMaintenanceJobStatus action. */
	static readonly actionGetTableMaintenanceJobStatusConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableMetadataLocation action. */
	static readonly actionGetTableMetadataLocationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTablePolicy action. */
	static readonly actionGetTablePolicyConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableRecordExpirationConfiguration action. */
	static readonly actionGetTableRecordExpirationConfigurationConditionKeys: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableRecordExpirationJobStatus action. */
	static readonly actionGetTableRecordExpirationJobStatusConditionKeys: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the GetTableReplication action. */
	static readonly actionGetTableReplicationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableReplicationStatus action. */
	static readonly actionGetTableReplicationStatusConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the GetTableStorageClass action. */
	static readonly actionGetTableStorageClassConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the ListTables action. */
	static readonly ListTablesConditionKeys: string[] = ["s3tables:namespace"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutTableBucketEncryption action. */
	static readonly PutTableBucketEncryptionConditionKeys: string[] = [
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
	];
	/** Condition keys applicable to the PutTableBucketStorageClass action. */
	static readonly PutTableBucketStorageClassConditionKeys: string[] = [
		"s3tables:StorageClass",
	];
	/** Condition keys applicable to the PutTableData action. */
	static readonly PutTableDataConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableEncryption action. */
	static readonly PutTableEncryptionConditionKeys: string[] = [
		"s3tables:KMSKeyArn",
		"s3tables:SSEAlgorithm",
		"s3tables:namespace",
	];
	/** Condition keys applicable to the PutTableMaintenanceConfiguration action. */
	static readonly PutTableMaintenanceConfigurationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTablePolicy action. */
	static readonly PutTablePolicyConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableRecordExpirationConfiguration action. */
	static readonly PutTableRecordExpirationConfigurationConditionKeys: string[] =
		["s3tables:namespace", "s3tables:tableName"];
	/** Condition keys applicable to the PutTableReplication action. */
	static readonly PutTableReplicationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the PutTableStorageClass action. */
	static readonly PutTableStorageClassConditionKeys: string[] = [
		"s3tables:StorageClass",
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the RenameTable action. */
	static readonly RenameTableConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3tables:TableBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateTableMetadataLocation action. */
	static readonly UpdateTableMetadataLocationConditionKeys: string[] = [
		"s3tables:namespace",
		"s3tables:tableName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
