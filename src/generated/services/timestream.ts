// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/timestream.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the timestream service.
 */
export class TimestreamActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "timestream";

	/** [Write] timestream:CancelQuery */
	static readonly CANCEL_QUERY = "timestream:CancelQuery";
	/** [Write] timestream:CreateBatchLoadTask */
	static readonly CREATE_BATCH_LOAD_TASK = "timestream:CreateBatchLoadTask";
	/** [Write] timestream:CreateDatabase */
	static readonly CREATE_DATABASE = "timestream:CreateDatabase";
	/** [Write] timestream:CreateScheduledQuery */
	static readonly CREATE_SCHEDULED_QUERY = "timestream:CreateScheduledQuery";
	/** [Write] timestream:CreateTable */
	static readonly CREATE_TABLE = "timestream:CreateTable";
	/** [Write] timestream:DeleteDatabase */
	static readonly DELETE_DATABASE = "timestream:DeleteDatabase";
	/** [Write] timestream:DeleteScheduledQuery */
	static readonly DELETE_SCHEDULED_QUERY = "timestream:DeleteScheduledQuery";
	/** [Write] timestream:DeleteTable */
	static readonly DELETE_TABLE = "timestream:DeleteTable";
	/** [Read] timestream:DescribeAccountSettings */
	static readonly DESCRIBE_ACCOUNT_SETTINGS =
		"timestream:DescribeAccountSettings";
	/** [Read] timestream:DescribeBatchLoadTask */
	static readonly DESCRIBE_BATCH_LOAD_TASK = "timestream:DescribeBatchLoadTask";
	/** [Read] timestream:DescribeDatabase */
	static readonly DESCRIBE_DATABASE = "timestream:DescribeDatabase";
	/** [List] timestream:DescribeEndpoints */
	static readonly DESCRIBE_ENDPOINTS = "timestream:DescribeEndpoints";
	/** [Read] timestream:DescribeScheduledQuery */
	static readonly DESCRIBE_SCHEDULED_QUERY =
		"timestream:DescribeScheduledQuery";
	/** [Read] timestream:DescribeTable */
	static readonly DESCRIBE_TABLE = "timestream:DescribeTable";
	/** [Write] timestream:ExecuteScheduledQuery */
	static readonly EXECUTE_SCHEDULED_QUERY = "timestream:ExecuteScheduledQuery";
	/** [Read] timestream:GetAwsBackupStatus */
	static readonly GET_AWS_BACKUP_STATUS = "timestream:GetAwsBackupStatus";
	/** [Read] timestream:GetAwsRestoreStatus */
	static readonly GET_AWS_RESTORE_STATUS = "timestream:GetAwsRestoreStatus";
	/** [List] timestream:ListBatchLoadTasks */
	static readonly LIST_BATCH_LOAD_TASKS = "timestream:ListBatchLoadTasks";
	/** [List] timestream:ListDatabases */
	static readonly LIST_DATABASES = "timestream:ListDatabases";
	/** [List] timestream:ListMeasures */
	static readonly LIST_MEASURES = "timestream:ListMeasures";
	/** [List] timestream:ListScheduledQueries */
	static readonly LIST_SCHEDULED_QUERIES = "timestream:ListScheduledQueries";
	/** [List] timestream:ListTables */
	static readonly LIST_TABLES = "timestream:ListTables";
	/** [Read] timestream:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "timestream:ListTagsForResource";
	/** [Read] timestream:PrepareQuery */
	static readonly PREPARE_QUERY = "timestream:PrepareQuery";
	/** [Write] timestream:ResumeBatchLoadTask */
	static readonly RESUME_BATCH_LOAD_TASK = "timestream:ResumeBatchLoadTask";
	/** [Read] timestream:Select */
	static readonly SELECT = "timestream:Select";
	/** [Read] timestream:SelectValues */
	static readonly SELECT_VALUES = "timestream:SelectValues";
	/** [Write] timestream:StartAwsBackupJob */
	static readonly START_AWS_BACKUP_JOB = "timestream:StartAwsBackupJob";
	/** [Write] timestream:StartAwsRestoreJob */
	static readonly START_AWS_RESTORE_JOB = "timestream:StartAwsRestoreJob";
	/** [Tagging] timestream:TagResource */
	static readonly TAG_RESOURCE = "timestream:TagResource";
	/** [Write] timestream:Unload */
	static readonly UNLOAD = "timestream:Unload";
	/** [Tagging] timestream:UntagResource */
	static readonly UNTAG_RESOURCE = "timestream:UntagResource";
	/** [Write] timestream:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "timestream:UpdateAccountSettings";
	/** [Write] timestream:UpdateDatabase */
	static readonly UPDATE_DATABASE = "timestream:UpdateDatabase";
	/** [Write] timestream:UpdateScheduledQuery */
	static readonly UPDATE_SCHEDULED_QUERY = "timestream:UpdateScheduledQuery";
	/** [Write] timestream:UpdateTable */
	static readonly UPDATE_TABLE = "timestream:UpdateTable";
	/** [Write] timestream:WriteRecords */
	static readonly WRITE_RECORDS = "timestream:WriteRecords";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TimestreamActions.DESCRIBE_ACCOUNT_SETTINGS,
		TimestreamActions.DESCRIBE_BATCH_LOAD_TASK,
		TimestreamActions.DESCRIBE_DATABASE,
		TimestreamActions.DESCRIBE_SCHEDULED_QUERY,
		TimestreamActions.DESCRIBE_TABLE,
		TimestreamActions.GET_AWS_BACKUP_STATUS,
		TimestreamActions.GET_AWS_RESTORE_STATUS,
		TimestreamActions.LIST_TAGS_FOR_RESOURCE,
		TimestreamActions.PREPARE_QUERY,
		TimestreamActions.SELECT,
		TimestreamActions.SELECT_VALUES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TimestreamActions.CANCEL_QUERY,
		TimestreamActions.CREATE_BATCH_LOAD_TASK,
		TimestreamActions.CREATE_DATABASE,
		TimestreamActions.CREATE_SCHEDULED_QUERY,
		TimestreamActions.CREATE_TABLE,
		TimestreamActions.DELETE_DATABASE,
		TimestreamActions.DELETE_SCHEDULED_QUERY,
		TimestreamActions.DELETE_TABLE,
		TimestreamActions.EXECUTE_SCHEDULED_QUERY,
		TimestreamActions.RESUME_BATCH_LOAD_TASK,
		TimestreamActions.START_AWS_BACKUP_JOB,
		TimestreamActions.START_AWS_RESTORE_JOB,
		TimestreamActions.UNLOAD,
		TimestreamActions.UPDATE_ACCOUNT_SETTINGS,
		TimestreamActions.UPDATE_DATABASE,
		TimestreamActions.UPDATE_SCHEDULED_QUERY,
		TimestreamActions.UPDATE_TABLE,
		TimestreamActions.WRITE_RECORDS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TimestreamActions.DESCRIBE_ENDPOINTS,
		TimestreamActions.LIST_BATCH_LOAD_TASKS,
		TimestreamActions.LIST_DATABASES,
		TimestreamActions.LIST_MEASURES,
		TimestreamActions.LIST_SCHEDULED_QUERIES,
		TimestreamActions.LIST_TABLES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TimestreamActions.TAG_RESOURCE,
		TimestreamActions.UNTAG_RESOURCE,
	];
}

const DatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):database/(?<databaseName>[^:/?]+)$",
);
const ScheduledQueryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):scheduled-query/(?<scheduledQueryName>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):database/(?<databaseName>[^:/?]+)/table/(?<tableName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for timestream resources.
 */
export class TimestreamResources {
	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: {
		/** The DatabaseName component of the ARN. */
		readonly databaseName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:timestream:${props.region ?? "*"}:${props.account ?? "*"}:database/${props.databaseName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the database resource.
	 */
	static isValidDatabaseArn(arn: string): boolean {
		return DatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		databaseName: string;
	} {
		const match = DatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			databaseName: match.groups!.databaseName,
		};
	}

	/**
	 * Builds an ARN for the scheduled-query resource.
	 */
	static scheduledQuery(props: {
		/** The ScheduledQueryName component of the ARN. */
		readonly scheduledQueryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:timestream:${props.region ?? "*"}:${props.account ?? "*"}:scheduled-query/${props.scheduledQueryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scheduled-query resource.
	 */
	static isValidScheduledQueryArn(arn: string): boolean {
		return ScheduledQueryArnRegex.test(arn);
	}

	/**
	 * Parses a scheduled-query ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduledQueryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scheduledQueryName: string;
	} {
		const match = ScheduledQueryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scheduled-query ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scheduledQueryName: match.groups!.scheduledQueryName,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: {
		/** The DatabaseName component of the ARN. */
		readonly databaseName: string;
		/** The TableName component of the ARN. */
		readonly tableName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:timestream:${props.region ?? "*"}:${props.account ?? "*"}:database/${props.databaseName}/table/${props.tableName}`;
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
		databaseName: string;
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
			databaseName: match.groups!.databaseName,
			tableName: match.groups!.tableName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for timestream.
 */
export class TimestreamOperations {
	/** IAM actions required for the CancelQuery API call. */
	static readonly CANCEL_QUERY: string[] = ["timestream:CancelQuery"];
	/** IAM actions required for the CreateBatchLoadTask API call. */
	static readonly CREATE_BATCH_LOAD_TASK: string[] = [
		"timestream:CreateBatchLoadTask",
		"timestream:WriteRecords",
	];
	/** IAM actions required for the CreateDatabase API call. */
	static readonly CREATE_DATABASE: string[] = [
		"timestream:CreateDatabase",
		"timestream:TagResource",
	];
	/** IAM actions required for the CreateScheduledQuery API call. */
	static readonly CREATE_SCHEDULED_QUERY: string[] = [
		"timestream:CreateScheduledQuery",
		"iam:PassRole",
		"timestream:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CREATE_TABLE: string[] = [
		"timestream:CreateTable",
		"timestream:TagResource",
	];
	/** IAM actions required for the DeleteDatabase API call. */
	static readonly DELETE_DATABASE: string[] = ["timestream:DeleteDatabase"];
	/** IAM actions required for the DeleteScheduledQuery API call. */
	static readonly DELETE_SCHEDULED_QUERY: string[] = [
		"timestream:DeleteScheduledQuery",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DELETE_TABLE: string[] = ["timestream:DeleteTable"];
	/** IAM actions required for the DescribeAccountSettings API call. */
	static readonly DESCRIBE_ACCOUNT_SETTINGS: string[] = [
		"timestream:DescribeAccountSettings",
	];
	/** IAM actions required for the DescribeBatchLoadTask API call. */
	static readonly DESCRIBE_BATCH_LOAD_TASK: string[] = [
		"timestream:DescribeBatchLoadTask",
	];
	/** IAM actions required for the DescribeDatabase API call. */
	static readonly DESCRIBE_DATABASE: string[] = ["timestream:DescribeDatabase"];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DESCRIBE_ENDPOINTS: string[] = [
		"timestream:DescribeEndpoints",
	];
	/** IAM actions required for the DescribeScheduledQuery API call. */
	static readonly DESCRIBE_SCHEDULED_QUERY: string[] = [
		"timestream:DescribeScheduledQuery",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DESCRIBE_TABLE: string[] = ["timestream:DescribeTable"];
	/** IAM actions required for the ExecuteScheduledQuery API call. */
	static readonly EXECUTE_SCHEDULED_QUERY: string[] = [
		"timestream:ExecuteScheduledQuery",
	];
	/** IAM actions required for the ListBatchLoadTasks API call. */
	static readonly LIST_BATCH_LOAD_TASKS: string[] = [
		"timestream:ListBatchLoadTasks",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly LIST_DATABASES: string[] = ["timestream:ListDatabases"];
	/** IAM actions required for the ListScheduledQueries API call. */
	static readonly LIST_SCHEDULED_QUERIES: string[] = [
		"timestream:ListScheduledQueries",
	];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["timestream:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"timestream:ListTagsForResource",
	];
	/** IAM actions required for the PrepareQuery API call. */
	static readonly PREPARE_QUERY: string[] = ["timestream:Select"];
	/** IAM actions required for the Query API call. */
	static readonly QUERY: string[] = [
		"timestream:DescribeTable",
		"timestream:ListDatabases",
		"timestream:ListMeasures",
		"timestream:ListTables",
		"timestream:Select",
		"timestream:SelectValues",
		"timestream:Unload",
	];
	/** IAM actions required for the ResumeBatchLoadTask API call. */
	static readonly RESUME_BATCH_LOAD_TASK: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["timestream:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["timestream:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"iam:PassRole",
		"timestream:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateDatabase API call. */
	static readonly UPDATE_DATABASE: string[] = ["timestream:UpdateDatabase"];
	/** IAM actions required for the UpdateScheduledQuery API call. */
	static readonly UPDATE_SCHEDULED_QUERY: string[] = [
		"timestream:UpdateScheduledQuery",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UPDATE_TABLE: string[] = ["timestream:UpdateTable"];
	/** IAM actions required for the WriteRecords API call. */
	static readonly WRITE_RECORDS: string[] = ["timestream:WriteRecords"];
}

/**
 * Condition key constants and builders for timestream.
 */
export class TimestreamConditions {
	/** Condition keys applicable to the CreateDatabase action. */
	static readonly CREATE_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledQuery action. */
	static readonly CREATE_SCHEDULED_QUERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CREATE_TABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
