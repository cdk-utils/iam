// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sqlworkbench.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sqlworkbench service.
 */
export class SqlworkbenchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sqlworkbench";

	/** [Write] sqlworkbench:AssociateConnectionWithChart */
	static readonly ASSOCIATE_CONNECTION_WITH_CHART =
		"sqlworkbench:AssociateConnectionWithChart";
	/** [Write] sqlworkbench:AssociateConnectionWithTab */
	static readonly ASSOCIATE_CONNECTION_WITH_TAB =
		"sqlworkbench:AssociateConnectionWithTab";
	/** [Write] sqlworkbench:AssociateNotebookWithTab */
	static readonly ASSOCIATE_NOTEBOOK_WITH_TAB =
		"sqlworkbench:AssociateNotebookWithTab";
	/** [Write] sqlworkbench:AssociateQueryWithTab */
	static readonly ASSOCIATE_QUERY_WITH_TAB =
		"sqlworkbench:AssociateQueryWithTab";
	/** [Write] sqlworkbench:BatchDeleteFolder */
	static readonly BATCH_DELETE_FOLDER = "sqlworkbench:BatchDeleteFolder";
	/** [Read] sqlworkbench:BatchGetNotebookCell */
	static readonly BATCH_GET_NOTEBOOK_CELL = "sqlworkbench:BatchGetNotebookCell";
	/** [Write] sqlworkbench:CreateAccount */
	static readonly CREATE_ACCOUNT = "sqlworkbench:CreateAccount";
	/** [Write] sqlworkbench:CreateChart */
	static readonly CREATE_CHART = "sqlworkbench:CreateChart";
	/** [Write] sqlworkbench:CreateConnection */
	static readonly CREATE_CONNECTION = "sqlworkbench:CreateConnection";
	/** [Write] sqlworkbench:CreateFolder */
	static readonly CREATE_FOLDER = "sqlworkbench:CreateFolder";
	/** [Write] sqlworkbench:CreateNotebook */
	static readonly CREATE_NOTEBOOK = "sqlworkbench:CreateNotebook";
	/** [Write] sqlworkbench:CreateNotebookCell */
	static readonly CREATE_NOTEBOOK_CELL = "sqlworkbench:CreateNotebookCell";
	/** [Write] sqlworkbench:CreateNotebookFromVersion */
	static readonly CREATE_NOTEBOOK_FROM_VERSION =
		"sqlworkbench:CreateNotebookFromVersion";
	/** [Write] sqlworkbench:CreateNotebookVersion */
	static readonly CREATE_NOTEBOOK_VERSION =
		"sqlworkbench:CreateNotebookVersion";
	/** [Write] sqlworkbench:CreateSavedQuery */
	static readonly CREATE_SAVED_QUERY = "sqlworkbench:CreateSavedQuery";
	/** [Write] sqlworkbench:DeleteChart */
	static readonly DELETE_CHART = "sqlworkbench:DeleteChart";
	/** [Write] sqlworkbench:DeleteConnection */
	static readonly DELETE_CONNECTION = "sqlworkbench:DeleteConnection";
	/** [Write] sqlworkbench:DeleteNotebook */
	static readonly DELETE_NOTEBOOK = "sqlworkbench:DeleteNotebook";
	/** [Write] sqlworkbench:DeleteNotebookCell */
	static readonly DELETE_NOTEBOOK_CELL = "sqlworkbench:DeleteNotebookCell";
	/** [Write] sqlworkbench:DeleteNotebookVersion */
	static readonly DELETE_NOTEBOOK_VERSION =
		"sqlworkbench:DeleteNotebookVersion";
	/** [Write] sqlworkbench:DeleteQCustomContext */
	static readonly DELETE_Q_CUSTOM_CONTEXT = "sqlworkbench:DeleteQCustomContext";
	/** [Write] sqlworkbench:DeleteSavedQuery */
	static readonly DELETE_SAVED_QUERY = "sqlworkbench:DeleteSavedQuery";
	/** [Write] sqlworkbench:DeleteSqlGenerationContext */
	static readonly DELETE_SQL_GENERATION_CONTEXT =
		"sqlworkbench:DeleteSqlGenerationContext";
	/** [Write] sqlworkbench:DeleteTab */
	static readonly DELETE_TAB = "sqlworkbench:DeleteTab";
	/** [Write] sqlworkbench:DriverExecute */
	static readonly DRIVER_EXECUTE = "sqlworkbench:DriverExecute";
	/** [Write] sqlworkbench:DuplicateNotebook */
	static readonly DUPLICATE_NOTEBOOK = "sqlworkbench:DuplicateNotebook";
	/** [Read] sqlworkbench:ExportNotebook */
	static readonly EXPORT_NOTEBOOK = "sqlworkbench:ExportNotebook";
	/** [Write] sqlworkbench:GenerateSession */
	static readonly GENERATE_SESSION = "sqlworkbench:GenerateSession";
	/** [Read] sqlworkbench:GetAccountInfo */
	static readonly GET_ACCOUNT_INFO = "sqlworkbench:GetAccountInfo";
	/** [Read] sqlworkbench:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "sqlworkbench:GetAccountSettings";
	/** [Read] sqlworkbench:GetAutocompletionMetadata */
	static readonly GET_AUTOCOMPLETION_METADATA =
		"sqlworkbench:GetAutocompletionMetadata";
	/** [Read] sqlworkbench:GetAutocompletionResource */
	static readonly GET_AUTOCOMPLETION_RESOURCE =
		"sqlworkbench:GetAutocompletionResource";
	/** [Read] sqlworkbench:GetChart */
	static readonly GET_CHART = "sqlworkbench:GetChart";
	/** [Read] sqlworkbench:GetConnection */
	static readonly GET_CONNECTION = "sqlworkbench:GetConnection";
	/** [Read] sqlworkbench:GetNotebook */
	static readonly GET_NOTEBOOK = "sqlworkbench:GetNotebook";
	/** [Read] sqlworkbench:GetNotebookVersion */
	static readonly GET_NOTEBOOK_VERSION = "sqlworkbench:GetNotebookVersion";
	/** [Read] sqlworkbench:GetQCustomContext */
	static readonly GET_Q_CUSTOM_CONTEXT = "sqlworkbench:GetQCustomContext";
	/** [Read] sqlworkbench:GetQSqlPromptQuotas */
	static readonly GET_Q_SQL_PROMPT_QUOTAS = "sqlworkbench:GetQSqlPromptQuotas";
	/** [Read] sqlworkbench:GetQSqlRecommendations */
	static readonly GET_Q_SQL_RECOMMENDATIONS =
		"sqlworkbench:GetQSqlRecommendations";
	/** [Read] sqlworkbench:GetQueryExecutionHistory */
	static readonly GET_QUERY_EXECUTION_HISTORY =
		"sqlworkbench:GetQueryExecutionHistory";
	/** [Read] sqlworkbench:GetSavedQuery */
	static readonly GET_SAVED_QUERY = "sqlworkbench:GetSavedQuery";
	/** [Read] sqlworkbench:GetSchemaInference */
	static readonly GET_SCHEMA_INFERENCE = "sqlworkbench:GetSchemaInference";
	/** [Read] sqlworkbench:GetSqlGenerationContext */
	static readonly GET_SQL_GENERATION_CONTEXT =
		"sqlworkbench:GetSqlGenerationContext";
	/** [Read] sqlworkbench:GetSqlRecommendations */
	static readonly GET_SQL_RECOMMENDATIONS =
		"sqlworkbench:GetSqlRecommendations";
	/** [Read] sqlworkbench:GetUserInfo */
	static readonly GET_USER_INFO = "sqlworkbench:GetUserInfo";
	/** [Read] sqlworkbench:GetUserWorkspaceSettings */
	static readonly GET_USER_WORKSPACE_SETTINGS =
		"sqlworkbench:GetUserWorkspaceSettings";
	/** [Write] sqlworkbench:ImportNotebook */
	static readonly IMPORT_NOTEBOOK = "sqlworkbench:ImportNotebook";
	/** [List] sqlworkbench:ListConnections */
	static readonly LIST_CONNECTIONS = "sqlworkbench:ListConnections";
	/** [List] sqlworkbench:ListDatabases */
	static readonly LIST_DATABASES = "sqlworkbench:ListDatabases";
	/** [List] sqlworkbench:ListFiles */
	static readonly LIST_FILES = "sqlworkbench:ListFiles";
	/** [List] sqlworkbench:ListNotebookVersions */
	static readonly LIST_NOTEBOOK_VERSIONS = "sqlworkbench:ListNotebookVersions";
	/** [List] sqlworkbench:ListNotebooks */
	static readonly LIST_NOTEBOOKS = "sqlworkbench:ListNotebooks";
	/** [List] sqlworkbench:ListQueryExecutionHistory */
	static readonly LIST_QUERY_EXECUTION_HISTORY =
		"sqlworkbench:ListQueryExecutionHistory";
	/** [List] sqlworkbench:ListRedshiftClusters */
	static readonly LIST_REDSHIFT_CLUSTERS = "sqlworkbench:ListRedshiftClusters";
	/** [Read] sqlworkbench:ListSampleDatabases */
	static readonly LIST_SAMPLE_DATABASES = "sqlworkbench:ListSampleDatabases";
	/** [List] sqlworkbench:ListSavedQueryVersions */
	static readonly LIST_SAVED_QUERY_VERSIONS =
		"sqlworkbench:ListSavedQueryVersions";
	/** [List] sqlworkbench:ListTabs */
	static readonly LIST_TABS = "sqlworkbench:ListTabs";
	/** [Read] sqlworkbench:ListTaggedResources */
	static readonly LIST_TAGGED_RESOURCES = "sqlworkbench:ListTaggedResources";
	/** [Read] sqlworkbench:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "sqlworkbench:ListTagsForResource";
	/** [Write] sqlworkbench:PassAccountSettings */
	static readonly PASS_ACCOUNT_SETTINGS = "sqlworkbench:PassAccountSettings";
	/** [Write] sqlworkbench:PutQCustomContext */
	static readonly PUT_Q_CUSTOM_CONTEXT = "sqlworkbench:PutQCustomContext";
	/** [Write] sqlworkbench:PutSqlGenerationContext */
	static readonly PUT_SQL_GENERATION_CONTEXT =
		"sqlworkbench:PutSqlGenerationContext";
	/** [Write] sqlworkbench:PutTab */
	static readonly PUT_TAB = "sqlworkbench:PutTab";
	/** [Write] sqlworkbench:PutUserWorkspaceSettings */
	static readonly PUT_USER_WORKSPACE_SETTINGS =
		"sqlworkbench:PutUserWorkspaceSettings";
	/** [Write] sqlworkbench:RestoreNotebookVersion */
	static readonly RESTORE_NOTEBOOK_VERSION =
		"sqlworkbench:RestoreNotebookVersion";
	/** [Tagging] sqlworkbench:TagResource */
	static readonly TAG_RESOURCE = "sqlworkbench:TagResource";
	/** [Tagging] sqlworkbench:UntagResource */
	static readonly UNTAG_RESOURCE = "sqlworkbench:UntagResource";
	/** [Write] sqlworkbench:UpdateAccountConnectionSettings */
	static readonly UPDATE_ACCOUNT_CONNECTION_SETTINGS =
		"sqlworkbench:UpdateAccountConnectionSettings";
	/** [Write] sqlworkbench:UpdateAccountExportSettings */
	static readonly UPDATE_ACCOUNT_EXPORT_SETTINGS =
		"sqlworkbench:UpdateAccountExportSettings";
	/** [Write] sqlworkbench:UpdateAccountGeneralSettings */
	static readonly UPDATE_ACCOUNT_GENERAL_SETTINGS =
		"sqlworkbench:UpdateAccountGeneralSettings";
	/** [Write] sqlworkbench:UpdateAccountQSqlSettings */
	static readonly UPDATE_ACCOUNT_Q_SQL_SETTINGS =
		"sqlworkbench:UpdateAccountQSqlSettings";
	/** [Write] sqlworkbench:UpdateChart */
	static readonly UPDATE_CHART = "sqlworkbench:UpdateChart";
	/** [Write] sqlworkbench:UpdateConnection */
	static readonly UPDATE_CONNECTION = "sqlworkbench:UpdateConnection";
	/** [Write] sqlworkbench:UpdateFileFolder */
	static readonly UPDATE_FILE_FOLDER = "sqlworkbench:UpdateFileFolder";
	/** [Write] sqlworkbench:UpdateFolder */
	static readonly UPDATE_FOLDER = "sqlworkbench:UpdateFolder";
	/** [Write] sqlworkbench:UpdateNotebook */
	static readonly UPDATE_NOTEBOOK = "sqlworkbench:UpdateNotebook";
	/** [Write] sqlworkbench:UpdateNotebookCellContent */
	static readonly UPDATE_NOTEBOOK_CELL_CONTENT =
		"sqlworkbench:UpdateNotebookCellContent";
	/** [Write] sqlworkbench:UpdateNotebookCellLayout */
	static readonly UPDATE_NOTEBOOK_CELL_LAYOUT =
		"sqlworkbench:UpdateNotebookCellLayout";
	/** [Write] sqlworkbench:UpdateSavedQuery */
	static readonly UPDATE_SAVED_QUERY = "sqlworkbench:UpdateSavedQuery";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SqlworkbenchActions.BATCH_GET_NOTEBOOK_CELL,
		SqlworkbenchActions.EXPORT_NOTEBOOK,
		SqlworkbenchActions.GET_ACCOUNT_INFO,
		SqlworkbenchActions.GET_ACCOUNT_SETTINGS,
		SqlworkbenchActions.GET_AUTOCOMPLETION_METADATA,
		SqlworkbenchActions.GET_AUTOCOMPLETION_RESOURCE,
		SqlworkbenchActions.GET_CHART,
		SqlworkbenchActions.GET_CONNECTION,
		SqlworkbenchActions.GET_NOTEBOOK,
		SqlworkbenchActions.GET_NOTEBOOK_VERSION,
		SqlworkbenchActions.GET_Q_CUSTOM_CONTEXT,
		SqlworkbenchActions.GET_Q_SQL_PROMPT_QUOTAS,
		SqlworkbenchActions.GET_Q_SQL_RECOMMENDATIONS,
		SqlworkbenchActions.GET_QUERY_EXECUTION_HISTORY,
		SqlworkbenchActions.GET_SAVED_QUERY,
		SqlworkbenchActions.GET_SCHEMA_INFERENCE,
		SqlworkbenchActions.GET_SQL_GENERATION_CONTEXT,
		SqlworkbenchActions.GET_SQL_RECOMMENDATIONS,
		SqlworkbenchActions.GET_USER_INFO,
		SqlworkbenchActions.GET_USER_WORKSPACE_SETTINGS,
		SqlworkbenchActions.LIST_SAMPLE_DATABASES,
		SqlworkbenchActions.LIST_TAGGED_RESOURCES,
		SqlworkbenchActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SqlworkbenchActions.ASSOCIATE_CONNECTION_WITH_CHART,
		SqlworkbenchActions.ASSOCIATE_CONNECTION_WITH_TAB,
		SqlworkbenchActions.ASSOCIATE_NOTEBOOK_WITH_TAB,
		SqlworkbenchActions.ASSOCIATE_QUERY_WITH_TAB,
		SqlworkbenchActions.BATCH_DELETE_FOLDER,
		SqlworkbenchActions.CREATE_ACCOUNT,
		SqlworkbenchActions.CREATE_CHART,
		SqlworkbenchActions.CREATE_CONNECTION,
		SqlworkbenchActions.CREATE_FOLDER,
		SqlworkbenchActions.CREATE_NOTEBOOK,
		SqlworkbenchActions.CREATE_NOTEBOOK_CELL,
		SqlworkbenchActions.CREATE_NOTEBOOK_FROM_VERSION,
		SqlworkbenchActions.CREATE_NOTEBOOK_VERSION,
		SqlworkbenchActions.CREATE_SAVED_QUERY,
		SqlworkbenchActions.DELETE_CHART,
		SqlworkbenchActions.DELETE_CONNECTION,
		SqlworkbenchActions.DELETE_NOTEBOOK,
		SqlworkbenchActions.DELETE_NOTEBOOK_CELL,
		SqlworkbenchActions.DELETE_NOTEBOOK_VERSION,
		SqlworkbenchActions.DELETE_Q_CUSTOM_CONTEXT,
		SqlworkbenchActions.DELETE_SAVED_QUERY,
		SqlworkbenchActions.DELETE_SQL_GENERATION_CONTEXT,
		SqlworkbenchActions.DELETE_TAB,
		SqlworkbenchActions.DRIVER_EXECUTE,
		SqlworkbenchActions.DUPLICATE_NOTEBOOK,
		SqlworkbenchActions.GENERATE_SESSION,
		SqlworkbenchActions.IMPORT_NOTEBOOK,
		SqlworkbenchActions.PASS_ACCOUNT_SETTINGS,
		SqlworkbenchActions.PUT_Q_CUSTOM_CONTEXT,
		SqlworkbenchActions.PUT_SQL_GENERATION_CONTEXT,
		SqlworkbenchActions.PUT_TAB,
		SqlworkbenchActions.PUT_USER_WORKSPACE_SETTINGS,
		SqlworkbenchActions.RESTORE_NOTEBOOK_VERSION,
		SqlworkbenchActions.UPDATE_ACCOUNT_CONNECTION_SETTINGS,
		SqlworkbenchActions.UPDATE_ACCOUNT_EXPORT_SETTINGS,
		SqlworkbenchActions.UPDATE_ACCOUNT_GENERAL_SETTINGS,
		SqlworkbenchActions.UPDATE_ACCOUNT_Q_SQL_SETTINGS,
		SqlworkbenchActions.UPDATE_CHART,
		SqlworkbenchActions.UPDATE_CONNECTION,
		SqlworkbenchActions.UPDATE_FILE_FOLDER,
		SqlworkbenchActions.UPDATE_FOLDER,
		SqlworkbenchActions.UPDATE_NOTEBOOK,
		SqlworkbenchActions.UPDATE_NOTEBOOK_CELL_CONTENT,
		SqlworkbenchActions.UPDATE_NOTEBOOK_CELL_LAYOUT,
		SqlworkbenchActions.UPDATE_SAVED_QUERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SqlworkbenchActions.LIST_CONNECTIONS,
		SqlworkbenchActions.LIST_DATABASES,
		SqlworkbenchActions.LIST_FILES,
		SqlworkbenchActions.LIST_NOTEBOOK_VERSIONS,
		SqlworkbenchActions.LIST_NOTEBOOKS,
		SqlworkbenchActions.LIST_QUERY_EXECUTION_HISTORY,
		SqlworkbenchActions.LIST_REDSHIFT_CLUSTERS,
		SqlworkbenchActions.LIST_SAVED_QUERY_VERSIONS,
		SqlworkbenchActions.LIST_TABS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SqlworkbenchActions.TAG_RESOURCE,
		SqlworkbenchActions.UNTAG_RESOURCE,
	];
}

const ChartArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):chart/(?<resourceId>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):connection/(?<resourceId>[^:/?]+)$",
);
const NotebookArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):notebook/(?<resourceId>[^:/?]+)$",
);
const QueryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):query/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sqlworkbench resources.
 */
export class SqlworkbenchResources {
	/**
	 * Builds an ARN for the chart resource.
	 */
	static chart(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sqlworkbench:${props.region ?? "*"}:${props.account ?? "*"}:chart/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the chart resource.
	 */
	static isValidChartArn(arn: string): boolean {
		return ChartArnRegex.test(arn);
	}

	/**
	 * Parses a chart ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChartArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ChartArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid chart ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sqlworkbench:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the notebook resource.
	 */
	static notebook(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sqlworkbench:${props.region ?? "*"}:${props.account ?? "*"}:notebook/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notebook resource.
	 */
	static isValidNotebookArn(arn: string): boolean {
		return NotebookArnRegex.test(arn);
	}

	/**
	 * Parses a notebook ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotebookArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = NotebookArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notebook ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the query resource.
	 */
	static query(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sqlworkbench:${props.region ?? "*"}:${props.account ?? "*"}:query/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the query resource.
	 */
	static isValidQueryArn(arn: string): boolean {
		return QueryArnRegex.test(arn);
	}

	/**
	 * Parses a query ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = QueryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid query ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * Condition key constants and builders for sqlworkbench.
 */
export class SqlworkbenchConditions {
	/** Condition keys applicable to the CreateChart action. */
	static readonly CREATE_CHART_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebook action. */
	static readonly CREATE_NOTEBOOK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookCell action. */
	static readonly CREATE_NOTEBOOK_CELL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookFromVersion action. */
	static readonly CREATE_NOTEBOOK_FROM_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookVersion action. */
	static readonly CREATE_NOTEBOOK_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSavedQuery action. */
	static readonly CREATE_SAVED_QUERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DuplicateNotebook action. */
	static readonly DUPLICATE_NOTEBOOK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportNotebook action. */
	static readonly IMPORT_NOTEBOOK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RestoreNotebookVersion action. */
	static readonly RESTORE_NOTEBOOK_VERSION_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateChart action. */
	static readonly UPDATE_CHART_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateConnection action. */
	static readonly UPDATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebook action. */
	static readonly UPDATE_NOTEBOOK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebookCellContent action. */
	static readonly UPDATE_NOTEBOOK_CELL_CONTENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebookCellLayout action. */
	static readonly UPDATE_NOTEBOOK_CELL_LAYOUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSavedQuery action. */
	static readonly UPDATE_SAVED_QUERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
