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
	static readonly CancelQuery = "timestream:CancelQuery";
	/** [Write] timestream:CreateBatchLoadTask */
	static readonly CreateBatchLoadTask = "timestream:CreateBatchLoadTask";
	/** [Write] timestream:CreateDatabase */
	static readonly CreateDatabase = "timestream:CreateDatabase";
	/** [Write] timestream:CreateScheduledQuery */
	static readonly CreateScheduledQuery = "timestream:CreateScheduledQuery";
	/** [Write] timestream:CreateTable */
	static readonly CreateTable = "timestream:CreateTable";
	/** [Write] timestream:DeleteDatabase */
	static readonly DeleteDatabase = "timestream:DeleteDatabase";
	/** [Write] timestream:DeleteScheduledQuery */
	static readonly DeleteScheduledQuery = "timestream:DeleteScheduledQuery";
	/** [Write] timestream:DeleteTable */
	static readonly DeleteTable = "timestream:DeleteTable";
	/** [Read] timestream:DescribeAccountSettings */
	static readonly DescribeAccountSettings =
		"timestream:DescribeAccountSettings";
	/** [Read] timestream:DescribeBatchLoadTask */
	static readonly DescribeBatchLoadTask = "timestream:DescribeBatchLoadTask";
	/** [Read] timestream:DescribeDatabase */
	static readonly DescribeDatabase = "timestream:DescribeDatabase";
	/** [List] timestream:DescribeEndpoints */
	static readonly DescribeEndpoints = "timestream:DescribeEndpoints";
	/** [Read] timestream:DescribeScheduledQuery */
	static readonly DescribeScheduledQuery = "timestream:DescribeScheduledQuery";
	/** [Read] timestream:DescribeTable */
	static readonly DescribeTable = "timestream:DescribeTable";
	/** [Write] timestream:ExecuteScheduledQuery */
	static readonly ExecuteScheduledQuery = "timestream:ExecuteScheduledQuery";
	/** [Read] timestream:GetAwsBackupStatus */
	static readonly actionGetAwsBackupStatus = "timestream:GetAwsBackupStatus";
	/** [Read] timestream:GetAwsRestoreStatus */
	static readonly actionGetAwsRestoreStatus = "timestream:GetAwsRestoreStatus";
	/** [List] timestream:ListBatchLoadTasks */
	static readonly ListBatchLoadTasks = "timestream:ListBatchLoadTasks";
	/** [List] timestream:ListDatabases */
	static readonly ListDatabases = "timestream:ListDatabases";
	/** [List] timestream:ListMeasures */
	static readonly ListMeasures = "timestream:ListMeasures";
	/** [List] timestream:ListScheduledQueries */
	static readonly ListScheduledQueries = "timestream:ListScheduledQueries";
	/** [List] timestream:ListTables */
	static readonly ListTables = "timestream:ListTables";
	/** [Read] timestream:ListTagsForResource */
	static readonly ListTagsForResource = "timestream:ListTagsForResource";
	/** [Read] timestream:PrepareQuery */
	static readonly PrepareQuery = "timestream:PrepareQuery";
	/** [Write] timestream:ResumeBatchLoadTask */
	static readonly ResumeBatchLoadTask = "timestream:ResumeBatchLoadTask";
	/** [Read] timestream:Select */
	static readonly Select = "timestream:Select";
	/** [Read] timestream:SelectValues */
	static readonly SelectValues = "timestream:SelectValues";
	/** [Write] timestream:StartAwsBackupJob */
	static readonly StartAwsBackupJob = "timestream:StartAwsBackupJob";
	/** [Write] timestream:StartAwsRestoreJob */
	static readonly StartAwsRestoreJob = "timestream:StartAwsRestoreJob";
	/** [Tagging] timestream:TagResource */
	static readonly TagResource = "timestream:TagResource";
	/** [Write] timestream:Unload */
	static readonly Unload = "timestream:Unload";
	/** [Tagging] timestream:UntagResource */
	static readonly UntagResource = "timestream:UntagResource";
	/** [Write] timestream:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "timestream:UpdateAccountSettings";
	/** [Write] timestream:UpdateDatabase */
	static readonly UpdateDatabase = "timestream:UpdateDatabase";
	/** [Write] timestream:UpdateScheduledQuery */
	static readonly UpdateScheduledQuery = "timestream:UpdateScheduledQuery";
	/** [Write] timestream:UpdateTable */
	static readonly UpdateTable = "timestream:UpdateTable";
	/** [Write] timestream:WriteRecords */
	static readonly WriteRecords = "timestream:WriteRecords";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TimestreamActions.DescribeAccountSettings,
		TimestreamActions.DescribeBatchLoadTask,
		TimestreamActions.DescribeDatabase,
		TimestreamActions.DescribeScheduledQuery,
		TimestreamActions.DescribeTable,
		TimestreamActions.actionGetAwsBackupStatus,
		TimestreamActions.actionGetAwsRestoreStatus,
		TimestreamActions.ListTagsForResource,
		TimestreamActions.PrepareQuery,
		TimestreamActions.Select,
		TimestreamActions.SelectValues,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TimestreamActions.CancelQuery,
		TimestreamActions.CreateBatchLoadTask,
		TimestreamActions.CreateDatabase,
		TimestreamActions.CreateScheduledQuery,
		TimestreamActions.CreateTable,
		TimestreamActions.DeleteDatabase,
		TimestreamActions.DeleteScheduledQuery,
		TimestreamActions.DeleteTable,
		TimestreamActions.ExecuteScheduledQuery,
		TimestreamActions.ResumeBatchLoadTask,
		TimestreamActions.StartAwsBackupJob,
		TimestreamActions.StartAwsRestoreJob,
		TimestreamActions.Unload,
		TimestreamActions.UpdateAccountSettings,
		TimestreamActions.UpdateDatabase,
		TimestreamActions.UpdateScheduledQuery,
		TimestreamActions.UpdateTable,
		TimestreamActions.WriteRecords,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TimestreamActions.DescribeEndpoints,
		TimestreamActions.ListBatchLoadTasks,
		TimestreamActions.ListDatabases,
		TimestreamActions.ListMeasures,
		TimestreamActions.ListScheduledQueries,
		TimestreamActions.ListTables,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TimestreamActions.TagResource,
		TimestreamActions.UntagResource,
	];
}

/**
 * Properties for building a database ARN.
 */
export interface TimestreamDatabaseArnProps {
	/** The DatabaseName component of the ARN. */
	readonly databaseName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a database ARN.
 */
export interface TimestreamDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
}

/**
 * Properties for building a scheduled-query ARN.
 */
export interface TimestreamScheduledQueryArnProps {
	/** The ScheduledQueryName component of the ARN. */
	readonly scheduledQueryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scheduled-query ARN.
 */
export interface TimestreamScheduledQueryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScheduledQueryName component. */
	readonly scheduledQueryName: string;
}

/**
 * Properties for building a table ARN.
 */
export interface TimestreamTableArnProps {
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
}

/**
 * Parsed components of a table ARN.
 */
export interface TimestreamTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatabaseName component. */
	readonly databaseName: string;
	/** The TableName component. */
	readonly tableName: string;
}

const DatabaseArnRegex =
	/^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):database\/(?<databaseName>[^:/?]+)$/;
const ScheduledQueryArnRegex =
	/^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):scheduled-query\/(?<scheduledQueryName>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):timestream:(?<region>[^:]*):(?<account>[^:]*):database\/(?<databaseName>[^:/?]+)\/table\/(?<tableName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for timestream resources.
 */
export class TimestreamResources {
	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: TimestreamDatabaseArnProps): string {
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
	static parseDatabaseArn(arn: string): TimestreamDatabaseArnComponents {
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
	static scheduledQuery(props: TimestreamScheduledQueryArnProps): string {
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
	static parseScheduledQueryArn(
		arn: string,
	): TimestreamScheduledQueryArnComponents {
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
	static table(props: TimestreamTableArnProps): string {
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
	static parseTableArn(arn: string): TimestreamTableArnComponents {
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
	static readonly CancelQuery: string[] = ["timestream:CancelQuery"];
	/** IAM actions required for the CreateBatchLoadTask API call. */
	static readonly CreateBatchLoadTask: string[] = [
		"timestream:CreateBatchLoadTask",
		"timestream:WriteRecords",
	];
	/** IAM actions required for the CreateDatabase API call. */
	static readonly CreateDatabase: string[] = [
		"timestream:CreateDatabase",
		"timestream:TagResource",
	];
	/** IAM actions required for the CreateScheduledQuery API call. */
	static readonly CreateScheduledQuery: string[] = [
		"timestream:CreateScheduledQuery",
		"iam:PassRole",
		"timestream:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CreateTable: string[] = [
		"timestream:CreateTable",
		"timestream:TagResource",
	];
	/** IAM actions required for the DeleteDatabase API call. */
	static readonly DeleteDatabase: string[] = ["timestream:DeleteDatabase"];
	/** IAM actions required for the DeleteScheduledQuery API call. */
	static readonly DeleteScheduledQuery: string[] = [
		"timestream:DeleteScheduledQuery",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DeleteTable: string[] = ["timestream:DeleteTable"];
	/** IAM actions required for the DescribeAccountSettings API call. */
	static readonly DescribeAccountSettings: string[] = [
		"timestream:DescribeAccountSettings",
	];
	/** IAM actions required for the DescribeBatchLoadTask API call. */
	static readonly DescribeBatchLoadTask: string[] = [
		"timestream:DescribeBatchLoadTask",
	];
	/** IAM actions required for the DescribeDatabase API call. */
	static readonly DescribeDatabase: string[] = ["timestream:DescribeDatabase"];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DescribeEndpoints: string[] = [
		"timestream:DescribeEndpoints",
	];
	/** IAM actions required for the DescribeScheduledQuery API call. */
	static readonly DescribeScheduledQuery: string[] = [
		"timestream:DescribeScheduledQuery",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DescribeTable: string[] = ["timestream:DescribeTable"];
	/** IAM actions required for the ExecuteScheduledQuery API call. */
	static readonly ExecuteScheduledQuery: string[] = [
		"timestream:ExecuteScheduledQuery",
	];
	/** IAM actions required for the ListBatchLoadTasks API call. */
	static readonly ListBatchLoadTasks: string[] = [
		"timestream:ListBatchLoadTasks",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly ListDatabases: string[] = ["timestream:ListDatabases"];
	/** IAM actions required for the ListScheduledQueries API call. */
	static readonly ListScheduledQueries: string[] = [
		"timestream:ListScheduledQueries",
	];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["timestream:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"timestream:ListTagsForResource",
	];
	/** IAM actions required for the PrepareQuery API call. */
	static readonly PrepareQuery: string[] = ["timestream:Select"];
	/** IAM actions required for the Query API call. */
	static readonly Query: string[] = [
		"timestream:DescribeTable",
		"timestream:ListDatabases",
		"timestream:ListMeasures",
		"timestream:ListTables",
		"timestream:Select",
		"timestream:SelectValues",
		"timestream:Unload",
	];
	/** IAM actions required for the ResumeBatchLoadTask API call. */
	static readonly ResumeBatchLoadTask: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["timestream:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["timestream:UntagResource"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"iam:PassRole",
		"timestream:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateDatabase API call. */
	static readonly UpdateDatabase: string[] = ["timestream:UpdateDatabase"];
	/** IAM actions required for the UpdateScheduledQuery API call. */
	static readonly UpdateScheduledQuery: string[] = [
		"timestream:UpdateScheduledQuery",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UpdateTable: string[] = ["timestream:UpdateTable"];
	/** IAM actions required for the WriteRecords API call. */
	static readonly WriteRecords: string[] = ["timestream:WriteRecords"];
}

/**
 * Condition key constants and builders for timestream.
 */
export class TimestreamConditions {
	/** Condition keys applicable to the CreateDatabase action. */
	static readonly CreateDatabaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledQuery action. */
	static readonly CreateScheduledQueryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTable action. */
	static readonly CreateTableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
