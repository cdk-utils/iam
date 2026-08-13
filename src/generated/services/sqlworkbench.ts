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
	static readonly AssociateConnectionWithChart =
		"sqlworkbench:AssociateConnectionWithChart";
	/** [Write] sqlworkbench:AssociateConnectionWithTab */
	static readonly AssociateConnectionWithTab =
		"sqlworkbench:AssociateConnectionWithTab";
	/** [Write] sqlworkbench:AssociateNotebookWithTab */
	static readonly AssociateNotebookWithTab =
		"sqlworkbench:AssociateNotebookWithTab";
	/** [Write] sqlworkbench:AssociateQueryWithTab */
	static readonly AssociateQueryWithTab = "sqlworkbench:AssociateQueryWithTab";
	/** [Write] sqlworkbench:BatchDeleteFolder */
	static readonly BatchDeleteFolder = "sqlworkbench:BatchDeleteFolder";
	/** [Read] sqlworkbench:BatchGetNotebookCell */
	static readonly BatchGetNotebookCell = "sqlworkbench:BatchGetNotebookCell";
	/** [Write] sqlworkbench:CreateAccount */
	static readonly CreateAccount = "sqlworkbench:CreateAccount";
	/** [Write] sqlworkbench:CreateChart */
	static readonly CreateChart = "sqlworkbench:CreateChart";
	/** [Write] sqlworkbench:CreateConnection */
	static readonly CreateConnection = "sqlworkbench:CreateConnection";
	/** [Write] sqlworkbench:CreateFolder */
	static readonly CreateFolder = "sqlworkbench:CreateFolder";
	/** [Write] sqlworkbench:CreateNotebook */
	static readonly CreateNotebook = "sqlworkbench:CreateNotebook";
	/** [Write] sqlworkbench:CreateNotebookCell */
	static readonly CreateNotebookCell = "sqlworkbench:CreateNotebookCell";
	/** [Write] sqlworkbench:CreateNotebookFromVersion */
	static readonly CreateNotebookFromVersion =
		"sqlworkbench:CreateNotebookFromVersion";
	/** [Write] sqlworkbench:CreateNotebookVersion */
	static readonly CreateNotebookVersion = "sqlworkbench:CreateNotebookVersion";
	/** [Write] sqlworkbench:CreateSavedQuery */
	static readonly CreateSavedQuery = "sqlworkbench:CreateSavedQuery";
	/** [Write] sqlworkbench:DeleteChart */
	static readonly DeleteChart = "sqlworkbench:DeleteChart";
	/** [Write] sqlworkbench:DeleteConnection */
	static readonly DeleteConnection = "sqlworkbench:DeleteConnection";
	/** [Write] sqlworkbench:DeleteNotebook */
	static readonly DeleteNotebook = "sqlworkbench:DeleteNotebook";
	/** [Write] sqlworkbench:DeleteNotebookCell */
	static readonly DeleteNotebookCell = "sqlworkbench:DeleteNotebookCell";
	/** [Write] sqlworkbench:DeleteNotebookVersion */
	static readonly DeleteNotebookVersion = "sqlworkbench:DeleteNotebookVersion";
	/** [Write] sqlworkbench:DeleteQCustomContext */
	static readonly DeleteQCustomContext = "sqlworkbench:DeleteQCustomContext";
	/** [Write] sqlworkbench:DeleteSavedQuery */
	static readonly DeleteSavedQuery = "sqlworkbench:DeleteSavedQuery";
	/** [Write] sqlworkbench:DeleteSqlGenerationContext */
	static readonly DeleteSqlGenerationContext =
		"sqlworkbench:DeleteSqlGenerationContext";
	/** [Write] sqlworkbench:DeleteTab */
	static readonly DeleteTab = "sqlworkbench:DeleteTab";
	/** [Write] sqlworkbench:DriverExecute */
	static readonly DriverExecute = "sqlworkbench:DriverExecute";
	/** [Write] sqlworkbench:DuplicateNotebook */
	static readonly DuplicateNotebook = "sqlworkbench:DuplicateNotebook";
	/** [Read] sqlworkbench:ExportNotebook */
	static readonly ExportNotebook = "sqlworkbench:ExportNotebook";
	/** [Write] sqlworkbench:GenerateSession */
	static readonly GenerateSession = "sqlworkbench:GenerateSession";
	/** [Read] sqlworkbench:GetAccountInfo */
	static readonly actionGetAccountInfo = "sqlworkbench:GetAccountInfo";
	/** [Read] sqlworkbench:GetAccountSettings */
	static readonly actionGetAccountSettings = "sqlworkbench:GetAccountSettings";
	/** [Read] sqlworkbench:GetAutocompletionMetadata */
	static readonly actionGetAutocompletionMetadata =
		"sqlworkbench:GetAutocompletionMetadata";
	/** [Read] sqlworkbench:GetAutocompletionResource */
	static readonly actionGetAutocompletionResource =
		"sqlworkbench:GetAutocompletionResource";
	/** [Read] sqlworkbench:GetChart */
	static readonly actionGetChart = "sqlworkbench:GetChart";
	/** [Read] sqlworkbench:GetConnection */
	static readonly actionGetConnection = "sqlworkbench:GetConnection";
	/** [Read] sqlworkbench:GetNotebook */
	static readonly actionGetNotebook = "sqlworkbench:GetNotebook";
	/** [Read] sqlworkbench:GetNotebookVersion */
	static readonly actionGetNotebookVersion = "sqlworkbench:GetNotebookVersion";
	/** [Read] sqlworkbench:GetQCustomContext */
	static readonly actionGetQCustomContext = "sqlworkbench:GetQCustomContext";
	/** [Read] sqlworkbench:GetQSqlPromptQuotas */
	static readonly actionGetQSqlPromptQuotas =
		"sqlworkbench:GetQSqlPromptQuotas";
	/** [Read] sqlworkbench:GetQSqlRecommendations */
	static readonly actionGetQSqlRecommendations =
		"sqlworkbench:GetQSqlRecommendations";
	/** [Read] sqlworkbench:GetQueryExecutionHistory */
	static readonly actionGetQueryExecutionHistory =
		"sqlworkbench:GetQueryExecutionHistory";
	/** [Read] sqlworkbench:GetSavedQuery */
	static readonly actionGetSavedQuery = "sqlworkbench:GetSavedQuery";
	/** [Read] sqlworkbench:GetSchemaInference */
	static readonly actionGetSchemaInference = "sqlworkbench:GetSchemaInference";
	/** [Read] sqlworkbench:GetSqlGenerationContext */
	static readonly actionGetSqlGenerationContext =
		"sqlworkbench:GetSqlGenerationContext";
	/** [Read] sqlworkbench:GetSqlRecommendations */
	static readonly actionGetSqlRecommendations =
		"sqlworkbench:GetSqlRecommendations";
	/** [Read] sqlworkbench:GetUserInfo */
	static readonly actionGetUserInfo = "sqlworkbench:GetUserInfo";
	/** [Read] sqlworkbench:GetUserWorkspaceSettings */
	static readonly actionGetUserWorkspaceSettings =
		"sqlworkbench:GetUserWorkspaceSettings";
	/** [Write] sqlworkbench:ImportNotebook */
	static readonly ImportNotebook = "sqlworkbench:ImportNotebook";
	/** [List] sqlworkbench:ListConnections */
	static readonly ListConnections = "sqlworkbench:ListConnections";
	/** [List] sqlworkbench:ListDatabases */
	static readonly ListDatabases = "sqlworkbench:ListDatabases";
	/** [List] sqlworkbench:ListFiles */
	static readonly ListFiles = "sqlworkbench:ListFiles";
	/** [List] sqlworkbench:ListNotebookVersions */
	static readonly ListNotebookVersions = "sqlworkbench:ListNotebookVersions";
	/** [List] sqlworkbench:ListNotebooks */
	static readonly ListNotebooks = "sqlworkbench:ListNotebooks";
	/** [List] sqlworkbench:ListQueryExecutionHistory */
	static readonly ListQueryExecutionHistory =
		"sqlworkbench:ListQueryExecutionHistory";
	/** [List] sqlworkbench:ListRedshiftClusters */
	static readonly ListRedshiftClusters = "sqlworkbench:ListRedshiftClusters";
	/** [Read] sqlworkbench:ListSampleDatabases */
	static readonly ListSampleDatabases = "sqlworkbench:ListSampleDatabases";
	/** [List] sqlworkbench:ListSavedQueryVersions */
	static readonly ListSavedQueryVersions =
		"sqlworkbench:ListSavedQueryVersions";
	/** [List] sqlworkbench:ListTabs */
	static readonly ListTabs = "sqlworkbench:ListTabs";
	/** [Read] sqlworkbench:ListTaggedResources */
	static readonly ListTaggedResources = "sqlworkbench:ListTaggedResources";
	/** [Read] sqlworkbench:ListTagsForResource */
	static readonly ListTagsForResource = "sqlworkbench:ListTagsForResource";
	/** [Write] sqlworkbench:PassAccountSettings */
	static readonly PassAccountSettings = "sqlworkbench:PassAccountSettings";
	/** [Write] sqlworkbench:PutQCustomContext */
	static readonly PutQCustomContext = "sqlworkbench:PutQCustomContext";
	/** [Write] sqlworkbench:PutSqlGenerationContext */
	static readonly PutSqlGenerationContext =
		"sqlworkbench:PutSqlGenerationContext";
	/** [Write] sqlworkbench:PutTab */
	static readonly PutTab = "sqlworkbench:PutTab";
	/** [Write] sqlworkbench:PutUserWorkspaceSettings */
	static readonly PutUserWorkspaceSettings =
		"sqlworkbench:PutUserWorkspaceSettings";
	/** [Write] sqlworkbench:RestoreNotebookVersion */
	static readonly RestoreNotebookVersion =
		"sqlworkbench:RestoreNotebookVersion";
	/** [Tagging] sqlworkbench:TagResource */
	static readonly TagResource = "sqlworkbench:TagResource";
	/** [Tagging] sqlworkbench:UntagResource */
	static readonly UntagResource = "sqlworkbench:UntagResource";
	/** [Write] sqlworkbench:UpdateAccountConnectionSettings */
	static readonly UpdateAccountConnectionSettings =
		"sqlworkbench:UpdateAccountConnectionSettings";
	/** [Write] sqlworkbench:UpdateAccountExportSettings */
	static readonly UpdateAccountExportSettings =
		"sqlworkbench:UpdateAccountExportSettings";
	/** [Write] sqlworkbench:UpdateAccountGeneralSettings */
	static readonly UpdateAccountGeneralSettings =
		"sqlworkbench:UpdateAccountGeneralSettings";
	/** [Write] sqlworkbench:UpdateAccountQSqlSettings */
	static readonly UpdateAccountQSqlSettings =
		"sqlworkbench:UpdateAccountQSqlSettings";
	/** [Write] sqlworkbench:UpdateChart */
	static readonly UpdateChart = "sqlworkbench:UpdateChart";
	/** [Write] sqlworkbench:UpdateConnection */
	static readonly UpdateConnection = "sqlworkbench:UpdateConnection";
	/** [Write] sqlworkbench:UpdateFileFolder */
	static readonly UpdateFileFolder = "sqlworkbench:UpdateFileFolder";
	/** [Write] sqlworkbench:UpdateFolder */
	static readonly UpdateFolder = "sqlworkbench:UpdateFolder";
	/** [Write] sqlworkbench:UpdateNotebook */
	static readonly UpdateNotebook = "sqlworkbench:UpdateNotebook";
	/** [Write] sqlworkbench:UpdateNotebookCellContent */
	static readonly UpdateNotebookCellContent =
		"sqlworkbench:UpdateNotebookCellContent";
	/** [Write] sqlworkbench:UpdateNotebookCellLayout */
	static readonly UpdateNotebookCellLayout =
		"sqlworkbench:UpdateNotebookCellLayout";
	/** [Write] sqlworkbench:UpdateSavedQuery */
	static readonly UpdateSavedQuery = "sqlworkbench:UpdateSavedQuery";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SqlworkbenchActions.BatchGetNotebookCell,
		SqlworkbenchActions.ExportNotebook,
		SqlworkbenchActions.actionGetAccountInfo,
		SqlworkbenchActions.actionGetAccountSettings,
		SqlworkbenchActions.actionGetAutocompletionMetadata,
		SqlworkbenchActions.actionGetAutocompletionResource,
		SqlworkbenchActions.actionGetChart,
		SqlworkbenchActions.actionGetConnection,
		SqlworkbenchActions.actionGetNotebook,
		SqlworkbenchActions.actionGetNotebookVersion,
		SqlworkbenchActions.actionGetQCustomContext,
		SqlworkbenchActions.actionGetQSqlPromptQuotas,
		SqlworkbenchActions.actionGetQSqlRecommendations,
		SqlworkbenchActions.actionGetQueryExecutionHistory,
		SqlworkbenchActions.actionGetSavedQuery,
		SqlworkbenchActions.actionGetSchemaInference,
		SqlworkbenchActions.actionGetSqlGenerationContext,
		SqlworkbenchActions.actionGetSqlRecommendations,
		SqlworkbenchActions.actionGetUserInfo,
		SqlworkbenchActions.actionGetUserWorkspaceSettings,
		SqlworkbenchActions.ListSampleDatabases,
		SqlworkbenchActions.ListTaggedResources,
		SqlworkbenchActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SqlworkbenchActions.AssociateConnectionWithChart,
		SqlworkbenchActions.AssociateConnectionWithTab,
		SqlworkbenchActions.AssociateNotebookWithTab,
		SqlworkbenchActions.AssociateQueryWithTab,
		SqlworkbenchActions.BatchDeleteFolder,
		SqlworkbenchActions.CreateAccount,
		SqlworkbenchActions.CreateChart,
		SqlworkbenchActions.CreateConnection,
		SqlworkbenchActions.CreateFolder,
		SqlworkbenchActions.CreateNotebook,
		SqlworkbenchActions.CreateNotebookCell,
		SqlworkbenchActions.CreateNotebookFromVersion,
		SqlworkbenchActions.CreateNotebookVersion,
		SqlworkbenchActions.CreateSavedQuery,
		SqlworkbenchActions.DeleteChart,
		SqlworkbenchActions.DeleteConnection,
		SqlworkbenchActions.DeleteNotebook,
		SqlworkbenchActions.DeleteNotebookCell,
		SqlworkbenchActions.DeleteNotebookVersion,
		SqlworkbenchActions.DeleteQCustomContext,
		SqlworkbenchActions.DeleteSavedQuery,
		SqlworkbenchActions.DeleteSqlGenerationContext,
		SqlworkbenchActions.DeleteTab,
		SqlworkbenchActions.DriverExecute,
		SqlworkbenchActions.DuplicateNotebook,
		SqlworkbenchActions.GenerateSession,
		SqlworkbenchActions.ImportNotebook,
		SqlworkbenchActions.PassAccountSettings,
		SqlworkbenchActions.PutQCustomContext,
		SqlworkbenchActions.PutSqlGenerationContext,
		SqlworkbenchActions.PutTab,
		SqlworkbenchActions.PutUserWorkspaceSettings,
		SqlworkbenchActions.RestoreNotebookVersion,
		SqlworkbenchActions.UpdateAccountConnectionSettings,
		SqlworkbenchActions.UpdateAccountExportSettings,
		SqlworkbenchActions.UpdateAccountGeneralSettings,
		SqlworkbenchActions.UpdateAccountQSqlSettings,
		SqlworkbenchActions.UpdateChart,
		SqlworkbenchActions.UpdateConnection,
		SqlworkbenchActions.UpdateFileFolder,
		SqlworkbenchActions.UpdateFolder,
		SqlworkbenchActions.UpdateNotebook,
		SqlworkbenchActions.UpdateNotebookCellContent,
		SqlworkbenchActions.UpdateNotebookCellLayout,
		SqlworkbenchActions.UpdateSavedQuery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SqlworkbenchActions.ListConnections,
		SqlworkbenchActions.ListDatabases,
		SqlworkbenchActions.ListFiles,
		SqlworkbenchActions.ListNotebookVersions,
		SqlworkbenchActions.ListNotebooks,
		SqlworkbenchActions.ListQueryExecutionHistory,
		SqlworkbenchActions.ListRedshiftClusters,
		SqlworkbenchActions.ListSavedQueryVersions,
		SqlworkbenchActions.ListTabs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SqlworkbenchActions.TagResource,
		SqlworkbenchActions.UntagResource,
	];
}

/**
 * Properties for building a chart ARN.
 */
export interface SqlworkbenchChartArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a chart ARN.
 */
export interface SqlworkbenchChartArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface SqlworkbenchConnectionArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connection ARN.
 */
export interface SqlworkbenchConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a notebook ARN.
 */
export interface SqlworkbenchNotebookArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notebook ARN.
 */
export interface SqlworkbenchNotebookArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a query ARN.
 */
export interface SqlworkbenchQueryArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a query ARN.
 */
export interface SqlworkbenchQueryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ChartArnRegex =
	/^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):chart\/(?<resourceId>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<resourceId>[^:/?]+)$/;
const NotebookArnRegex =
	/^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):notebook\/(?<resourceId>[^:/?]+)$/;
const QueryArnRegex =
	/^arn:(?<partition>[^:]+):sqlworkbench:(?<region>[^:]*):(?<account>[^:]*):query\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sqlworkbench resources.
 */
export class SqlworkbenchResources {
	/**
	 * Builds an ARN for the chart resource.
	 */
	static chart(props: SqlworkbenchChartArnProps): string {
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
	static parseChartArn(arn: string): SqlworkbenchChartArnComponents {
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
	static connection(props: SqlworkbenchConnectionArnProps): string {
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
	static parseConnectionArn(arn: string): SqlworkbenchConnectionArnComponents {
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
	static notebook(props: SqlworkbenchNotebookArnProps): string {
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
	static parseNotebookArn(arn: string): SqlworkbenchNotebookArnComponents {
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
	static query(props: SqlworkbenchQueryArnProps): string {
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
	static parseQueryArn(arn: string): SqlworkbenchQueryArnComponents {
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
	static readonly CreateChartConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebook action. */
	static readonly CreateNotebookConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookCell action. */
	static readonly CreateNotebookCellConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookFromVersion action. */
	static readonly CreateNotebookFromVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotebookVersion action. */
	static readonly CreateNotebookVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSavedQuery action. */
	static readonly CreateSavedQueryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DuplicateNotebook action. */
	static readonly DuplicateNotebookConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportNotebook action. */
	static readonly ImportNotebookConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RestoreNotebookVersion action. */
	static readonly RestoreNotebookVersionConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateChart action. */
	static readonly UpdateChartConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateConnection action. */
	static readonly UpdateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebook action. */
	static readonly UpdateNotebookConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebookCellContent action. */
	static readonly UpdateNotebookCellContentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNotebookCellLayout action. */
	static readonly UpdateNotebookCellLayoutConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSavedQuery action. */
	static readonly UpdateSavedQueryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
