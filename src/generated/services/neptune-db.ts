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
	static readonly CANCEL_LOADER_JOB = "neptune-db:CancelLoaderJob";
	/** [Write] neptune-db:CancelMLDataProcessingJob */
	static readonly CANCEL_ML_DATA_PROCESSING_JOB =
		"neptune-db:CancelMLDataProcessingJob";
	/** [Write] neptune-db:CancelMLModelTrainingJob */
	static readonly CANCEL_ML_MODEL_TRAINING_JOB =
		"neptune-db:CancelMLModelTrainingJob";
	/** [Write] neptune-db:CancelMLModelTransformJob */
	static readonly CANCEL_ML_MODEL_TRANSFORM_JOB =
		"neptune-db:CancelMLModelTransformJob";
	/** [Write] neptune-db:CancelQuery */
	static readonly CANCEL_QUERY = "neptune-db:CancelQuery";
	/** [Write] neptune-db:CreateMLEndpoint */
	static readonly CREATE_ML_ENDPOINT = "neptune-db:CreateMLEndpoint";
	/** [Write] neptune-db:DeleteDataViaQuery */
	static readonly DELETE_DATA_VIA_QUERY = "neptune-db:DeleteDataViaQuery";
	/** [Write] neptune-db:DeleteMLEndpoint */
	static readonly DELETE_ML_ENDPOINT = "neptune-db:DeleteMLEndpoint";
	/** [Write] neptune-db:DeleteStatistics */
	static readonly DELETE_STATISTICS = "neptune-db:DeleteStatistics";
	/** [Read] neptune-db:GetEngineStatus */
	static readonly GET_ENGINE_STATUS = "neptune-db:GetEngineStatus";
	/** [Read] neptune-db:GetGraphSummary */
	static readonly GET_GRAPH_SUMMARY = "neptune-db:GetGraphSummary";
	/** [Read] neptune-db:GetLoaderJobStatus */
	static readonly GET_LOADER_JOB_STATUS = "neptune-db:GetLoaderJobStatus";
	/** [Read] neptune-db:GetMLDataProcessingJobStatus */
	static readonly GET_ML_DATA_PROCESSING_JOB_STATUS =
		"neptune-db:GetMLDataProcessingJobStatus";
	/** [Read] neptune-db:GetMLEndpointStatus */
	static readonly GET_ML_ENDPOINT_STATUS = "neptune-db:GetMLEndpointStatus";
	/** [Read] neptune-db:GetMLModelTrainingJobStatus */
	static readonly GET_ML_MODEL_TRAINING_JOB_STATUS =
		"neptune-db:GetMLModelTrainingJobStatus";
	/** [Read] neptune-db:GetMLModelTransformJobStatus */
	static readonly GET_ML_MODEL_TRANSFORM_JOB_STATUS =
		"neptune-db:GetMLModelTransformJobStatus";
	/** [Read] neptune-db:GetQueryStatus */
	static readonly GET_QUERY_STATUS = "neptune-db:GetQueryStatus";
	/** [Read] neptune-db:GetStatisticsStatus */
	static readonly GET_STATISTICS_STATUS = "neptune-db:GetStatisticsStatus";
	/** [Read] neptune-db:GetStreamRecords */
	static readonly GET_STREAM_RECORDS = "neptune-db:GetStreamRecords";
	/** [List] neptune-db:ListLoaderJobs */
	static readonly LIST_LOADER_JOBS = "neptune-db:ListLoaderJobs";
	/** [List] neptune-db:ListMLDataProcessingJobs */
	static readonly LIST_ML_DATA_PROCESSING_JOBS =
		"neptune-db:ListMLDataProcessingJobs";
	/** [List] neptune-db:ListMLEndpoints */
	static readonly LIST_ML_ENDPOINTS = "neptune-db:ListMLEndpoints";
	/** [List] neptune-db:ListMLModelTrainingJobs */
	static readonly LIST_ML_MODEL_TRAINING_JOBS =
		"neptune-db:ListMLModelTrainingJobs";
	/** [List] neptune-db:ListMLModelTransformJobs */
	static readonly LIST_ML_MODEL_TRANSFORM_JOBS =
		"neptune-db:ListMLModelTransformJobs";
	/** [Write] neptune-db:ManageStatistics */
	static readonly MANAGE_STATISTICS = "neptune-db:ManageStatistics";
	/** [Read] neptune-db:ReadDataViaQuery */
	static readonly READ_DATA_VIA_QUERY = "neptune-db:ReadDataViaQuery";
	/** [Write] neptune-db:ResetDatabase */
	static readonly RESET_DATABASE = "neptune-db:ResetDatabase";
	/** [Write] neptune-db:StartLoaderJob */
	static readonly START_LOADER_JOB = "neptune-db:StartLoaderJob";
	/** [Write] neptune-db:StartMLDataProcessingJob */
	static readonly START_ML_DATA_PROCESSING_JOB =
		"neptune-db:StartMLDataProcessingJob";
	/** [Write] neptune-db:StartMLModelTrainingJob */
	static readonly START_ML_MODEL_TRAINING_JOB =
		"neptune-db:StartMLModelTrainingJob";
	/** [Write] neptune-db:StartMLModelTransformJob */
	static readonly START_ML_MODEL_TRANSFORM_JOB =
		"neptune-db:StartMLModelTransformJob";
	/** [Write] neptune-db:WriteDataViaQuery */
	static readonly WRITE_DATA_VIA_QUERY = "neptune-db:WriteDataViaQuery";
	/** [Write] neptune-db:connect */
	static readonly CONNECT = "neptune-db:connect";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NeptuneDBActions.GET_ENGINE_STATUS,
		NeptuneDBActions.GET_GRAPH_SUMMARY,
		NeptuneDBActions.GET_LOADER_JOB_STATUS,
		NeptuneDBActions.GET_ML_DATA_PROCESSING_JOB_STATUS,
		NeptuneDBActions.GET_ML_ENDPOINT_STATUS,
		NeptuneDBActions.GET_ML_MODEL_TRAINING_JOB_STATUS,
		NeptuneDBActions.GET_ML_MODEL_TRANSFORM_JOB_STATUS,
		NeptuneDBActions.GET_QUERY_STATUS,
		NeptuneDBActions.GET_STATISTICS_STATUS,
		NeptuneDBActions.GET_STREAM_RECORDS,
		NeptuneDBActions.READ_DATA_VIA_QUERY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NeptuneDBActions.CANCEL_LOADER_JOB,
		NeptuneDBActions.CANCEL_ML_DATA_PROCESSING_JOB,
		NeptuneDBActions.CANCEL_ML_MODEL_TRAINING_JOB,
		NeptuneDBActions.CANCEL_ML_MODEL_TRANSFORM_JOB,
		NeptuneDBActions.CANCEL_QUERY,
		NeptuneDBActions.CREATE_ML_ENDPOINT,
		NeptuneDBActions.DELETE_DATA_VIA_QUERY,
		NeptuneDBActions.DELETE_ML_ENDPOINT,
		NeptuneDBActions.DELETE_STATISTICS,
		NeptuneDBActions.MANAGE_STATISTICS,
		NeptuneDBActions.RESET_DATABASE,
		NeptuneDBActions.START_LOADER_JOB,
		NeptuneDBActions.START_ML_DATA_PROCESSING_JOB,
		NeptuneDBActions.START_ML_MODEL_TRAINING_JOB,
		NeptuneDBActions.START_ML_MODEL_TRANSFORM_JOB,
		NeptuneDBActions.WRITE_DATA_VIA_QUERY,
		NeptuneDBActions.CONNECT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NeptuneDBActions.LIST_LOADER_JOBS,
		NeptuneDBActions.LIST_ML_DATA_PROCESSING_JOBS,
		NeptuneDBActions.LIST_ML_ENDPOINTS,
		NeptuneDBActions.LIST_ML_MODEL_TRAINING_JOBS,
		NeptuneDBActions.LIST_ML_MODEL_TRANSFORM_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const DatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):neptune-db:(?<region>[^:]*):(?<account>[^:]*):(?<clusterResourceId>[^:/?]+)/.*$",
);

/**
 * ARN builders, validators, and parsers for neptune-db resources.
 */
export class NeptuneDBResources {
	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: {
		/** The ClusterResourceId component of the ARN. */
		readonly clusterResourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterResourceId: string;
	} {
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
	static readonly CANCEL_GREMLIN_QUERY: string[] = [];
	/** IAM actions required for the CancelLoaderJob API call. */
	static readonly CANCEL_LOADER_JOB: string[] = [];
	/** IAM actions required for the CancelMLDataProcessingJob API call. */
	static readonly CANCEL_ML_DATA_PROCESSING_JOB: string[] = [];
	/** IAM actions required for the CancelMLModelTrainingJob API call. */
	static readonly CANCEL_ML_MODEL_TRAINING_JOB: string[] = [];
	/** IAM actions required for the CancelMLModelTransformJob API call. */
	static readonly CANCEL_ML_MODEL_TRANSFORM_JOB: string[] = [];
	/** IAM actions required for the CancelOpenCypherQuery API call. */
	static readonly CANCEL_OPEN_CYPHER_QUERY: string[] = [];
	/** IAM actions required for the CreateMLEndpoint API call. */
	static readonly CREATE_ML_ENDPOINT: string[] = [];
	/** IAM actions required for the DeleteMLEndpoint API call. */
	static readonly DELETE_ML_ENDPOINT: string[] = [];
	/** IAM actions required for the DeletePropertygraphStatistics API call. */
	static readonly DELETE_PROPERTYGRAPH_STATISTICS: string[] = [];
	/** IAM actions required for the DeleteSparqlStatistics API call. */
	static readonly DELETE_SPARQL_STATISTICS: string[] = [];
	/** IAM actions required for the ExecuteFastReset API call. */
	static readonly EXECUTE_FAST_RESET: string[] = [];
	/** IAM actions required for the ExecuteGremlinExplainQuery API call. */
	static readonly EXECUTE_GREMLIN_EXPLAIN_QUERY: string[] = [];
	/** IAM actions required for the ExecuteGremlinProfileQuery API call. */
	static readonly EXECUTE_GREMLIN_PROFILE_QUERY: string[] = [];
	/** IAM actions required for the ExecuteGremlinQuery API call. */
	static readonly EXECUTE_GREMLIN_QUERY: string[] = [];
	/** IAM actions required for the ExecuteOpenCypherExplainQuery API call. */
	static readonly EXECUTE_OPEN_CYPHER_EXPLAIN_QUERY: string[] = [];
	/** IAM actions required for the ExecuteOpenCypherQuery API call. */
	static readonly EXECUTE_OPEN_CYPHER_QUERY: string[] = [];
	/** IAM actions required for the GetEngineStatus API call. */
	static readonly GET_ENGINE_STATUS: string[] = [];
	/** IAM actions required for the GetGremlinQueryStatus API call. */
	static readonly GET_GREMLIN_QUERY_STATUS: string[] = [];
	/** IAM actions required for the GetLoaderJobStatus API call. */
	static readonly GET_LOADER_JOB_STATUS: string[] = [];
	/** IAM actions required for the GetMLDataProcessingJob API call. */
	static readonly GET_ML_DATA_PROCESSING_JOB: string[] = [];
	/** IAM actions required for the GetMLEndpoint API call. */
	static readonly GET_ML_ENDPOINT: string[] = [];
	/** IAM actions required for the GetMLModelTrainingJob API call. */
	static readonly GET_ML_MODEL_TRAINING_JOB: string[] = [];
	/** IAM actions required for the GetMLModelTransformJob API call. */
	static readonly GET_ML_MODEL_TRANSFORM_JOB: string[] = [];
	/** IAM actions required for the GetOpenCypherQueryStatus API call. */
	static readonly GET_OPEN_CYPHER_QUERY_STATUS: string[] = [];
	/** IAM actions required for the GetPropertygraphStatistics API call. */
	static readonly GET_PROPERTYGRAPH_STATISTICS: string[] = [];
	/** IAM actions required for the GetPropertygraphStream API call. */
	static readonly GET_PROPERTYGRAPH_STREAM: string[] = [];
	/** IAM actions required for the GetPropertygraphSummary API call. */
	static readonly GET_PROPERTYGRAPH_SUMMARY: string[] = [];
	/** IAM actions required for the GetRDFGraphSummary API call. */
	static readonly GET_RDF_GRAPH_SUMMARY: string[] = [];
	/** IAM actions required for the GetSparqlStatistics API call. */
	static readonly GET_SPARQL_STATISTICS: string[] = [];
	/** IAM actions required for the GetSparqlStream API call. */
	static readonly GET_SPARQL_STREAM: string[] = [];
	/** IAM actions required for the ListGremlinQueries API call. */
	static readonly LIST_GREMLIN_QUERIES: string[] = [];
	/** IAM actions required for the ListLoaderJobs API call. */
	static readonly LIST_LOADER_JOBS: string[] = [];
	/** IAM actions required for the ListMLDataProcessingJobs API call. */
	static readonly LIST_ML_DATA_PROCESSING_JOBS: string[] = [];
	/** IAM actions required for the ListMLEndpoints API call. */
	static readonly LIST_ML_ENDPOINTS: string[] = [];
	/** IAM actions required for the ListMLModelTrainingJobs API call. */
	static readonly LIST_ML_MODEL_TRAINING_JOBS: string[] = [];
	/** IAM actions required for the ListMLModelTransformJobs API call. */
	static readonly LIST_ML_MODEL_TRANSFORM_JOBS: string[] = [];
	/** IAM actions required for the ListOpenCypherQueries API call. */
	static readonly LIST_OPEN_CYPHER_QUERIES: string[] = [];
	/** IAM actions required for the ManagePropertygraphStatistics API call. */
	static readonly MANAGE_PROPERTYGRAPH_STATISTICS: string[] = [];
	/** IAM actions required for the ManageSparqlStatistics API call. */
	static readonly MANAGE_SPARQL_STATISTICS: string[] = [];
	/** IAM actions required for the StartLoaderJob API call. */
	static readonly START_LOADER_JOB: string[] = [];
	/** IAM actions required for the StartMLDataProcessingJob API call. */
	static readonly START_ML_DATA_PROCESSING_JOB: string[] = [];
	/** IAM actions required for the StartMLModelTrainingJob API call. */
	static readonly START_ML_MODEL_TRAINING_JOB: string[] = [];
	/** IAM actions required for the StartMLModelTransformJob API call. */
	static readonly START_ML_MODEL_TRANSFORM_JOB: string[] = [];
}

/**
 * Condition key constants and builders for neptune-db.
 */
export class NeptuneDBConditions {
	/** Condition keys applicable to the DeleteDataViaQuery action. */
	static readonly DELETE_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the GetQueryStatus action. */
	static readonly GET_QUERY_STATUS_CONDITION_KEYS: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the GetStreamRecords action. */
	static readonly GET_STREAM_RECORDS_CONDITION_KEYS: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the ReadDataViaQuery action. */
	static readonly READ_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
		"neptune-db:QueryLanguage",
	];
	/** Condition keys applicable to the WriteDataViaQuery action. */
	static readonly WRITE_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
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
