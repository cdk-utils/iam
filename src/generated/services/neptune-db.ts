// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/neptune-db.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the neptune-db service.
 */
export class NeptuneDBActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "neptune-db";

	/** [Write] neptune-db:CancelLoaderJob */
	static readonly CancelLoaderJob = "neptune-db:CancelLoaderJob";
	/** [Write] neptune-db:CancelMLDataProcessingJob */
	static readonly CancelMLDataProcessingJob =
		"neptune-db:CancelMLDataProcessingJob";
	/** [Write] neptune-db:CancelMLModelTrainingJob */
	static readonly CancelMLModelTrainingJob =
		"neptune-db:CancelMLModelTrainingJob";
	/** [Write] neptune-db:CancelMLModelTransformJob */
	static readonly CancelMLModelTransformJob =
		"neptune-db:CancelMLModelTransformJob";
	/** [Write] neptune-db:CancelQuery */
	static readonly CancelQuery = "neptune-db:CancelQuery";
	/** [Write] neptune-db:CreateMLEndpoint */
	static readonly CreateMLEndpoint = "neptune-db:CreateMLEndpoint";
	/** [Write] neptune-db:DeleteDataViaQuery */
	static readonly DeleteDataViaQuery = "neptune-db:DeleteDataViaQuery";
	/** [Write] neptune-db:DeleteMLEndpoint */
	static readonly DeleteMLEndpoint = "neptune-db:DeleteMLEndpoint";
	/** [Write] neptune-db:DeleteStatistics */
	static readonly DeleteStatistics = "neptune-db:DeleteStatistics";
	/** [Read] neptune-db:GetEngineStatus */
	static readonly actionGetEngineStatus = "neptune-db:GetEngineStatus";
	/** [Read] neptune-db:GetGraphSummary */
	static readonly actionGetGraphSummary = "neptune-db:GetGraphSummary";
	/** [Read] neptune-db:GetLoaderJobStatus */
	static readonly actionGetLoaderJobStatus = "neptune-db:GetLoaderJobStatus";
	/** [Read] neptune-db:GetMLDataProcessingJobStatus */
	static readonly actionGetMLDataProcessingJobStatus =
		"neptune-db:GetMLDataProcessingJobStatus";
	/** [Read] neptune-db:GetMLEndpointStatus */
	static readonly actionGetMLEndpointStatus = "neptune-db:GetMLEndpointStatus";
	/** [Read] neptune-db:GetMLModelTrainingJobStatus */
	static readonly actionGetMLModelTrainingJobStatus =
		"neptune-db:GetMLModelTrainingJobStatus";
	/** [Read] neptune-db:GetMLModelTransformJobStatus */
	static readonly actionGetMLModelTransformJobStatus =
		"neptune-db:GetMLModelTransformJobStatus";
	/** [Read] neptune-db:GetQueryStatus */
	static readonly actionGetQueryStatus = "neptune-db:GetQueryStatus";
	/** [Read] neptune-db:GetStatisticsStatus */
	static readonly actionGetStatisticsStatus = "neptune-db:GetStatisticsStatus";
	/** [Read] neptune-db:GetStreamRecords */
	static readonly actionGetStreamRecords = "neptune-db:GetStreamRecords";
	/** [List] neptune-db:ListLoaderJobs */
	static readonly ListLoaderJobs = "neptune-db:ListLoaderJobs";
	/** [List] neptune-db:ListMLDataProcessingJobs */
	static readonly ListMLDataProcessingJobs =
		"neptune-db:ListMLDataProcessingJobs";
	/** [List] neptune-db:ListMLEndpoints */
	static readonly ListMLEndpoints = "neptune-db:ListMLEndpoints";
	/** [List] neptune-db:ListMLModelTrainingJobs */
	static readonly ListMLModelTrainingJobs =
		"neptune-db:ListMLModelTrainingJobs";
	/** [List] neptune-db:ListMLModelTransformJobs */
	static readonly ListMLModelTransformJobs =
		"neptune-db:ListMLModelTransformJobs";
	/** [Write] neptune-db:ManageStatistics */
	static readonly ManageStatistics = "neptune-db:ManageStatistics";
	/** [Read] neptune-db:ReadDataViaQuery */
	static readonly ReadDataViaQuery = "neptune-db:ReadDataViaQuery";
	/** [Write] neptune-db:ResetDatabase */
	static readonly ResetDatabase = "neptune-db:ResetDatabase";
	/** [Write] neptune-db:StartLoaderJob */
	static readonly StartLoaderJob = "neptune-db:StartLoaderJob";
	/** [Write] neptune-db:StartMLDataProcessingJob */
	static readonly StartMLDataProcessingJob =
		"neptune-db:StartMLDataProcessingJob";
	/** [Write] neptune-db:StartMLModelTrainingJob */
	static readonly StartMLModelTrainingJob =
		"neptune-db:StartMLModelTrainingJob";
	/** [Write] neptune-db:StartMLModelTransformJob */
	static readonly StartMLModelTransformJob =
		"neptune-db:StartMLModelTransformJob";
	/** [Write] neptune-db:WriteDataViaQuery */
	static readonly WriteDataViaQuery = "neptune-db:WriteDataViaQuery";
	/** [Write] neptune-db:connect */
	static readonly connect = "neptune-db:connect";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NeptuneDBActions.actionGetEngineStatus,
		NeptuneDBActions.actionGetGraphSummary,
		NeptuneDBActions.actionGetLoaderJobStatus,
		NeptuneDBActions.actionGetMLDataProcessingJobStatus,
		NeptuneDBActions.actionGetMLEndpointStatus,
		NeptuneDBActions.actionGetMLModelTrainingJobStatus,
		NeptuneDBActions.actionGetMLModelTransformJobStatus,
		NeptuneDBActions.actionGetQueryStatus,
		NeptuneDBActions.actionGetStatisticsStatus,
		NeptuneDBActions.actionGetStreamRecords,
		NeptuneDBActions.ReadDataViaQuery,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NeptuneDBActions.CancelLoaderJob,
		NeptuneDBActions.CancelMLDataProcessingJob,
		NeptuneDBActions.CancelMLModelTrainingJob,
		NeptuneDBActions.CancelMLModelTransformJob,
		NeptuneDBActions.CancelQuery,
		NeptuneDBActions.CreateMLEndpoint,
		NeptuneDBActions.DeleteDataViaQuery,
		NeptuneDBActions.DeleteMLEndpoint,
		NeptuneDBActions.DeleteStatistics,
		NeptuneDBActions.ManageStatistics,
		NeptuneDBActions.ResetDatabase,
		NeptuneDBActions.StartLoaderJob,
		NeptuneDBActions.StartMLDataProcessingJob,
		NeptuneDBActions.StartMLModelTrainingJob,
		NeptuneDBActions.StartMLModelTransformJob,
		NeptuneDBActions.WriteDataViaQuery,
		NeptuneDBActions.connect,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NeptuneDBActions.ListLoaderJobs,
		NeptuneDBActions.ListMLDataProcessingJobs,
		NeptuneDBActions.ListMLEndpoints,
		NeptuneDBActions.ListMLModelTrainingJobs,
		NeptuneDBActions.ListMLModelTransformJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a database ARN.
 */
export interface NeptuneDBDatabaseArnProps {
	/** The ClusterResourceId component of the ARN. */
	readonly clusterResourceId: string;
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
export interface NeptuneDBDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterResourceId component. */
	readonly clusterResourceId: string;
}

const DatabaseArnRegex =
	/^arn:(?<partition>[^:]+):neptune-db:(?<region>[^:]*):(?<account>[^:]*):(?<clusterResourceId>[^:/?]+)\/.*$/;

/**
 * ARN builders, validators, and parsers for neptune-db resources.
 */
export class NeptuneDBResources {
	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: NeptuneDBDatabaseArnProps): string {
		return `arn:${props.partition ?? "aws"}:neptune-db:${props.region ?? "*"}:${props.account ?? "*"}:${props.clusterResourceId}/*`;
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
	static parseDatabaseArn(arn: string): NeptuneDBDatabaseArnComponents {
		const match = DatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterResourceId: match.groups!.clusterResourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for neptune-db.
 */
export class NeptuneDBOperations {
	/** IAM actions required for the CancelGremlinQuery API call. */
	static readonly CancelGremlinQuery: string[] = [];
	/** IAM actions required for the CancelLoaderJob API call. */
	static readonly CancelLoaderJob: string[] = [];
	/** IAM actions required for the CancelMLDataProcessingJob API call. */
	static readonly CancelMLDataProcessingJob: string[] = [];
	/** IAM actions required for the CancelMLModelTrainingJob API call. */
	static readonly CancelMLModelTrainingJob: string[] = [];
	/** IAM actions required for the CancelMLModelTransformJob API call. */
	static readonly CancelMLModelTransformJob: string[] = [];
	/** IAM actions required for the CancelOpenCypherQuery API call. */
	static readonly CancelOpenCypherQuery: string[] = [];
	/** IAM actions required for the CreateMLEndpoint API call. */
	static readonly CreateMLEndpoint: string[] = [];
	/** IAM actions required for the DeleteMLEndpoint API call. */
	static readonly DeleteMLEndpoint: string[] = [];
	/** IAM actions required for the DeletePropertygraphStatistics API call. */
	static readonly DeletePropertygraphStatistics: string[] = [];
	/** IAM actions required for the DeleteSparqlStatistics API call. */
	static readonly DeleteSparqlStatistics: string[] = [];
	/** IAM actions required for the ExecuteFastReset API call. */
	static readonly ExecuteFastReset: string[] = [];
	/** IAM actions required for the ExecuteGremlinExplainQuery API call. */
	static readonly ExecuteGremlinExplainQuery: string[] = [];
	/** IAM actions required for the ExecuteGremlinProfileQuery API call. */
	static readonly ExecuteGremlinProfileQuery: string[] = [];
	/** IAM actions required for the ExecuteGremlinQuery API call. */
	static readonly ExecuteGremlinQuery: string[] = [];
	/** IAM actions required for the ExecuteOpenCypherExplainQuery API call. */
	static readonly ExecuteOpenCypherExplainQuery: string[] = [];
	/** IAM actions required for the ExecuteOpenCypherQuery API call. */
	static readonly ExecuteOpenCypherQuery: string[] = [];
	/** IAM actions required for the GetEngineStatus API call. */
	static readonly opGetEngineStatus: string[] = [];
	/** IAM actions required for the GetGremlinQueryStatus API call. */
	static readonly opGetGremlinQueryStatus: string[] = [];
	/** IAM actions required for the GetLoaderJobStatus API call. */
	static readonly opGetLoaderJobStatus: string[] = [];
	/** IAM actions required for the GetMLDataProcessingJob API call. */
	static readonly opGetMLDataProcessingJob: string[] = [];
	/** IAM actions required for the GetMLEndpoint API call. */
	static readonly opGetMLEndpoint: string[] = [];
	/** IAM actions required for the GetMLModelTrainingJob API call. */
	static readonly opGetMLModelTrainingJob: string[] = [];
	/** IAM actions required for the GetMLModelTransformJob API call. */
	static readonly opGetMLModelTransformJob: string[] = [];
	/** IAM actions required for the GetOpenCypherQueryStatus API call. */
	static readonly opGetOpenCypherQueryStatus: string[] = [];
	/** IAM actions required for the GetPropertygraphStatistics API call. */
	static readonly opGetPropertygraphStatistics: string[] = [];
	/** IAM actions required for the GetPropertygraphStream API call. */
	static readonly opGetPropertygraphStream: string[] = [];
	/** IAM actions required for the GetPropertygraphSummary API call. */
	static readonly opGetPropertygraphSummary: string[] = [];
	/** IAM actions required for the GetRDFGraphSummary API call. */
	static readonly opGetRDFGraphSummary: string[] = [];
	/** IAM actions required for the GetSparqlStatistics API call. */
	static readonly opGetSparqlStatistics: string[] = [];
	/** IAM actions required for the GetSparqlStream API call. */
	static readonly opGetSparqlStream: string[] = [];
	/** IAM actions required for the ListGremlinQueries API call. */
	static readonly ListGremlinQueries: string[] = [];
	/** IAM actions required for the ListLoaderJobs API call. */
	static readonly ListLoaderJobs: string[] = [];
	/** IAM actions required for the ListMLDataProcessingJobs API call. */
	static readonly ListMLDataProcessingJobs: string[] = [];
	/** IAM actions required for the ListMLEndpoints API call. */
	static readonly ListMLEndpoints: string[] = [];
	/** IAM actions required for the ListMLModelTrainingJobs API call. */
	static readonly ListMLModelTrainingJobs: string[] = [];
	/** IAM actions required for the ListMLModelTransformJobs API call. */
	static readonly ListMLModelTransformJobs: string[] = [];
	/** IAM actions required for the ListOpenCypherQueries API call. */
	static readonly ListOpenCypherQueries: string[] = [];
	/** IAM actions required for the ManagePropertygraphStatistics API call. */
	static readonly ManagePropertygraphStatistics: string[] = [];
	/** IAM actions required for the ManageSparqlStatistics API call. */
	static readonly ManageSparqlStatistics: string[] = [];
	/** IAM actions required for the StartLoaderJob API call. */
	static readonly StartLoaderJob: string[] = [];
	/** IAM actions required for the StartMLDataProcessingJob API call. */
	static readonly StartMLDataProcessingJob: string[] = [];
	/** IAM actions required for the StartMLModelTrainingJob API call. */
	static readonly StartMLModelTrainingJob: string[] = [];
	/** IAM actions required for the StartMLModelTransformJob API call. */
	static readonly StartMLModelTransformJob: string[] = [];
}

/**
 * Condition key constants and builders for neptune-db.
 */
export class NeptuneDBConditions {
	/** Condition keys applicable to the DeleteDataViaQuery action. */
	static readonly DeleteDataViaQueryConditionKeys: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the GetQueryStatus action. */
	static readonly actionGetQueryStatusConditionKeys: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the GetStreamRecords action. */
	static readonly actionGetStreamRecordsConditionKeys: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the ReadDataViaQuery action. */
	static readonly ReadDataViaQueryConditionKeys: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the WriteDataViaQuery action. */
	static readonly WriteDataViaQueryConditionKeys: string[] = [
		"neptune-db:QueryLanguage",
	];

	/** Condition key: neptune-db:QueryLanguage (String) */
	static readonly QUERY_LANGUAGE = "neptune-db:QueryLanguage";

	/**
	 * Generates a condition block for `neptune-db:QueryLanguage`.
	 */
	static queryLanguage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "neptune-db:QueryLanguage": value } };
	}
}
