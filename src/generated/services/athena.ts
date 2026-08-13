// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/athena.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the athena service.
 */
export class AthenaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "athena";

	/** [Read] athena:BatchGetNamedQuery */
	static readonly BATCH_GET_NAMED_QUERY = "athena:BatchGetNamedQuery";
	/** [Read] athena:BatchGetPreparedStatement */
	static readonly BATCH_GET_PREPARED_STATEMENT =
		"athena:BatchGetPreparedStatement";
	/** [Read] athena:BatchGetQueryExecution */
	static readonly BATCH_GET_QUERY_EXECUTION = "athena:BatchGetQueryExecution";
	/** [Write] athena:CancelCapacityReservation */
	static readonly CANCEL_CAPACITY_RESERVATION =
		"athena:CancelCapacityReservation";
	/** [Write] athena:CancelQueryExecution */
	static readonly CANCEL_QUERY_EXECUTION = "athena:CancelQueryExecution";
	/** [Write] athena:CreateCapacityReservation */
	static readonly CREATE_CAPACITY_RESERVATION =
		"athena:CreateCapacityReservation";
	/** [Write] athena:CreateDataCatalog */
	static readonly CREATE_DATA_CATALOG = "athena:CreateDataCatalog";
	/** [Write] athena:CreateNamedQuery */
	static readonly CREATE_NAMED_QUERY = "athena:CreateNamedQuery";
	/** [Write] athena:CreateNotebook */
	static readonly CREATE_NOTEBOOK = "athena:CreateNotebook";
	/** [Write] athena:CreatePreparedStatement */
	static readonly CREATE_PREPARED_STATEMENT = "athena:CreatePreparedStatement";
	/** [Write] athena:CreatePresignedNotebookUrl */
	static readonly CREATE_PRESIGNED_NOTEBOOK_URL =
		"athena:CreatePresignedNotebookUrl";
	/** [Write] athena:CreateWorkGroup */
	static readonly CREATE_WORK_GROUP = "athena:CreateWorkGroup";
	/** [Write] athena:DeleteCapacityReservation */
	static readonly DELETE_CAPACITY_RESERVATION =
		"athena:DeleteCapacityReservation";
	/** [Write] athena:DeleteDataCatalog */
	static readonly DELETE_DATA_CATALOG = "athena:DeleteDataCatalog";
	/** [Write] athena:DeleteNamedQuery */
	static readonly DELETE_NAMED_QUERY = "athena:DeleteNamedQuery";
	/** [Write] athena:DeleteNotebook */
	static readonly DELETE_NOTEBOOK = "athena:DeleteNotebook";
	/** [Write] athena:DeletePreparedStatement */
	static readonly DELETE_PREPARED_STATEMENT = "athena:DeletePreparedStatement";
	/** [Write] athena:DeleteWorkGroup */
	static readonly DELETE_WORK_GROUP = "athena:DeleteWorkGroup";
	/** [Write] athena:ExportNotebook */
	static readonly EXPORT_NOTEBOOK = "athena:ExportNotebook";
	/** [Read] athena:GetCalculationExecution */
	static readonly GET_CALCULATION_EXECUTION = "athena:GetCalculationExecution";
	/** [Read] athena:GetCalculationExecutionCode */
	static readonly GET_CALCULATION_EXECUTION_CODE =
		"athena:GetCalculationExecutionCode";
	/** [Read] athena:GetCalculationExecutionStatus */
	static readonly GET_CALCULATION_EXECUTION_STATUS =
		"athena:GetCalculationExecutionStatus";
	/** [Read] athena:GetCapacityAssignmentConfiguration */
	static readonly GET_CAPACITY_ASSIGNMENT_CONFIGURATION =
		"athena:GetCapacityAssignmentConfiguration";
	/** [Read] athena:GetCapacityReservation */
	static readonly GET_CAPACITY_RESERVATION = "athena:GetCapacityReservation";
	/** [Read] athena:GetCatalogs */
	static readonly GET_CATALOGS = "athena:GetCatalogs";
	/** [Read] athena:GetDataCatalog */
	static readonly GET_DATA_CATALOG = "athena:GetDataCatalog";
	/** [Read] athena:GetDatabase */
	static readonly GET_DATABASE = "athena:GetDatabase";
	/** [Read] athena:GetExecutionEngine */
	static readonly GET_EXECUTION_ENGINE = "athena:GetExecutionEngine";
	/** [Read] athena:GetExecutionEngines */
	static readonly GET_EXECUTION_ENGINES = "athena:GetExecutionEngines";
	/** [Read] athena:GetNamedQuery */
	static readonly GET_NAMED_QUERY = "athena:GetNamedQuery";
	/** [Read] athena:GetNamespace */
	static readonly GET_NAMESPACE = "athena:GetNamespace";
	/** [Read] athena:GetNamespaces */
	static readonly GET_NAMESPACES = "athena:GetNamespaces";
	/** [Read] athena:GetNotebookMetadata */
	static readonly GET_NOTEBOOK_METADATA = "athena:GetNotebookMetadata";
	/** [Read] athena:GetPreparedStatement */
	static readonly GET_PREPARED_STATEMENT = "athena:GetPreparedStatement";
	/** [Read] athena:GetQueryExecution */
	static readonly GET_QUERY_EXECUTION = "athena:GetQueryExecution";
	/** [Read] athena:GetQueryExecutions */
	static readonly GET_QUERY_EXECUTIONS = "athena:GetQueryExecutions";
	/** [Read] athena:GetQueryResults */
	static readonly GET_QUERY_RESULTS = "athena:GetQueryResults";
	/** [Read] athena:GetQueryResultsStream */
	static readonly GET_QUERY_RESULTS_STREAM = "athena:GetQueryResultsStream";
	/** [Read] athena:GetQueryRuntimeStatistics */
	static readonly GET_QUERY_RUNTIME_STATISTICS =
		"athena:GetQueryRuntimeStatistics";
	/** [Read] athena:GetResourceDashboard */
	static readonly GET_RESOURCE_DASHBOARD = "athena:GetResourceDashboard";
	/** [Read] athena:GetSession */
	static readonly GET_SESSION = "athena:GetSession";
	/** [Write] athena:GetSessionEndpoint */
	static readonly GET_SESSION_ENDPOINT = "athena:GetSessionEndpoint";
	/** [Read] athena:GetSessionStatus */
	static readonly GET_SESSION_STATUS = "athena:GetSessionStatus";
	/** [Read] athena:GetTable */
	static readonly GET_TABLE = "athena:GetTable";
	/** [Read] athena:GetTableMetadata */
	static readonly GET_TABLE_METADATA = "athena:GetTableMetadata";
	/** [Read] athena:GetTables */
	static readonly GET_TABLES = "athena:GetTables";
	/** [Read] athena:GetWorkGroup */
	static readonly GET_WORK_GROUP = "athena:GetWorkGroup";
	/** [Write] athena:ImportNotebook */
	static readonly IMPORT_NOTEBOOK = "athena:ImportNotebook";
	/** [List] athena:ListApplicationDPUSizes */
	static readonly LIST_APPLICATION_DPU_SIZES = "athena:ListApplicationDPUSizes";
	/** [List] athena:ListCalculationExecutions */
	static readonly LIST_CALCULATION_EXECUTIONS =
		"athena:ListCalculationExecutions";
	/** [List] athena:ListCapacityReservations */
	static readonly LIST_CAPACITY_RESERVATIONS =
		"athena:ListCapacityReservations";
	/** [List] athena:ListDataCatalogs */
	static readonly LIST_DATA_CATALOGS = "athena:ListDataCatalogs";
	/** [List] athena:ListDatabases */
	static readonly LIST_DATABASES = "athena:ListDatabases";
	/** [Read] athena:ListEngineVersions */
	static readonly LIST_ENGINE_VERSIONS = "athena:ListEngineVersions";
	/** [List] athena:ListExecutors */
	static readonly LIST_EXECUTORS = "athena:ListExecutors";
	/** [List] athena:ListNamedQueries */
	static readonly LIST_NAMED_QUERIES = "athena:ListNamedQueries";
	/** [List] athena:ListNotebookMetadata */
	static readonly LIST_NOTEBOOK_METADATA = "athena:ListNotebookMetadata";
	/** [List] athena:ListNotebookSessions */
	static readonly LIST_NOTEBOOK_SESSIONS = "athena:ListNotebookSessions";
	/** [List] athena:ListPreparedStatements */
	static readonly LIST_PREPARED_STATEMENTS = "athena:ListPreparedStatements";
	/** [Read] athena:ListQueryExecutions */
	static readonly LIST_QUERY_EXECUTIONS = "athena:ListQueryExecutions";
	/** [List] athena:ListSessions */
	static readonly LIST_SESSIONS = "athena:ListSessions";
	/** [Read] athena:ListTableMetadata */
	static readonly LIST_TABLE_METADATA = "athena:ListTableMetadata";
	/** [Read] athena:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "athena:ListTagsForResource";
	/** [List] athena:ListWorkGroups */
	static readonly LIST_WORK_GROUPS = "athena:ListWorkGroups";
	/** [Write] athena:PutCapacityAssignmentConfiguration */
	static readonly PUT_CAPACITY_ASSIGNMENT_CONFIGURATION =
		"athena:PutCapacityAssignmentConfiguration";
	/** [Write] athena:RunQuery */
	static readonly RUN_QUERY = "athena:RunQuery";
	/** [Write] athena:StartCalculationExecution */
	static readonly START_CALCULATION_EXECUTION =
		"athena:StartCalculationExecution";
	/** [Write] athena:StartQueryExecution */
	static readonly START_QUERY_EXECUTION = "athena:StartQueryExecution";
	/** [Write] athena:StartSession */
	static readonly START_SESSION = "athena:StartSession";
	/** [Write] athena:StopCalculationExecution */
	static readonly STOP_CALCULATION_EXECUTION =
		"athena:StopCalculationExecution";
	/** [Write] athena:StopQueryExecution */
	static readonly STOP_QUERY_EXECUTION = "athena:StopQueryExecution";
	/** [Tagging] athena:TagResource */
	static readonly TAG_RESOURCE = "athena:TagResource";
	/** [Write] athena:TerminateSession */
	static readonly TERMINATE_SESSION = "athena:TerminateSession";
	/** [Tagging] athena:UntagResource */
	static readonly UNTAG_RESOURCE = "athena:UntagResource";
	/** [Write] athena:UpdateCapacityReservation */
	static readonly UPDATE_CAPACITY_RESERVATION =
		"athena:UpdateCapacityReservation";
	/** [Write] athena:UpdateDataCatalog */
	static readonly UPDATE_DATA_CATALOG = "athena:UpdateDataCatalog";
	/** [Write] athena:UpdateNamedQuery */
	static readonly UPDATE_NAMED_QUERY = "athena:UpdateNamedQuery";
	/** [Write] athena:UpdateNotebook */
	static readonly UPDATE_NOTEBOOK = "athena:UpdateNotebook";
	/** [Write] athena:UpdateNotebookMetadata */
	static readonly UPDATE_NOTEBOOK_METADATA = "athena:UpdateNotebookMetadata";
	/** [Write] athena:UpdatePreparedStatement */
	static readonly UPDATE_PREPARED_STATEMENT = "athena:UpdatePreparedStatement";
	/** [Write] athena:UpdateWorkGroup */
	static readonly UPDATE_WORK_GROUP = "athena:UpdateWorkGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AthenaActions.BATCH_GET_NAMED_QUERY,
		AthenaActions.BATCH_GET_PREPARED_STATEMENT,
		AthenaActions.BATCH_GET_QUERY_EXECUTION,
		AthenaActions.GET_CALCULATION_EXECUTION,
		AthenaActions.GET_CALCULATION_EXECUTION_CODE,
		AthenaActions.GET_CALCULATION_EXECUTION_STATUS,
		AthenaActions.GET_CAPACITY_ASSIGNMENT_CONFIGURATION,
		AthenaActions.GET_CAPACITY_RESERVATION,
		AthenaActions.GET_CATALOGS,
		AthenaActions.GET_DATA_CATALOG,
		AthenaActions.GET_DATABASE,
		AthenaActions.GET_EXECUTION_ENGINE,
		AthenaActions.GET_EXECUTION_ENGINES,
		AthenaActions.GET_NAMED_QUERY,
		AthenaActions.GET_NAMESPACE,
		AthenaActions.GET_NAMESPACES,
		AthenaActions.GET_NOTEBOOK_METADATA,
		AthenaActions.GET_PREPARED_STATEMENT,
		AthenaActions.GET_QUERY_EXECUTION,
		AthenaActions.GET_QUERY_EXECUTIONS,
		AthenaActions.GET_QUERY_RESULTS,
		AthenaActions.GET_QUERY_RESULTS_STREAM,
		AthenaActions.GET_QUERY_RUNTIME_STATISTICS,
		AthenaActions.GET_RESOURCE_DASHBOARD,
		AthenaActions.GET_SESSION,
		AthenaActions.GET_SESSION_STATUS,
		AthenaActions.GET_TABLE,
		AthenaActions.GET_TABLE_METADATA,
		AthenaActions.GET_TABLES,
		AthenaActions.GET_WORK_GROUP,
		AthenaActions.LIST_ENGINE_VERSIONS,
		AthenaActions.LIST_QUERY_EXECUTIONS,
		AthenaActions.LIST_TABLE_METADATA,
		AthenaActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AthenaActions.CANCEL_CAPACITY_RESERVATION,
		AthenaActions.CANCEL_QUERY_EXECUTION,
		AthenaActions.CREATE_CAPACITY_RESERVATION,
		AthenaActions.CREATE_DATA_CATALOG,
		AthenaActions.CREATE_NAMED_QUERY,
		AthenaActions.CREATE_NOTEBOOK,
		AthenaActions.CREATE_PREPARED_STATEMENT,
		AthenaActions.CREATE_PRESIGNED_NOTEBOOK_URL,
		AthenaActions.CREATE_WORK_GROUP,
		AthenaActions.DELETE_CAPACITY_RESERVATION,
		AthenaActions.DELETE_DATA_CATALOG,
		AthenaActions.DELETE_NAMED_QUERY,
		AthenaActions.DELETE_NOTEBOOK,
		AthenaActions.DELETE_PREPARED_STATEMENT,
		AthenaActions.DELETE_WORK_GROUP,
		AthenaActions.EXPORT_NOTEBOOK,
		AthenaActions.GET_SESSION_ENDPOINT,
		AthenaActions.IMPORT_NOTEBOOK,
		AthenaActions.PUT_CAPACITY_ASSIGNMENT_CONFIGURATION,
		AthenaActions.RUN_QUERY,
		AthenaActions.START_CALCULATION_EXECUTION,
		AthenaActions.START_QUERY_EXECUTION,
		AthenaActions.START_SESSION,
		AthenaActions.STOP_CALCULATION_EXECUTION,
		AthenaActions.STOP_QUERY_EXECUTION,
		AthenaActions.TERMINATE_SESSION,
		AthenaActions.UPDATE_CAPACITY_RESERVATION,
		AthenaActions.UPDATE_DATA_CATALOG,
		AthenaActions.UPDATE_NAMED_QUERY,
		AthenaActions.UPDATE_NOTEBOOK,
		AthenaActions.UPDATE_NOTEBOOK_METADATA,
		AthenaActions.UPDATE_PREPARED_STATEMENT,
		AthenaActions.UPDATE_WORK_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AthenaActions.LIST_APPLICATION_DPU_SIZES,
		AthenaActions.LIST_CALCULATION_EXECUTIONS,
		AthenaActions.LIST_CAPACITY_RESERVATIONS,
		AthenaActions.LIST_DATA_CATALOGS,
		AthenaActions.LIST_DATABASES,
		AthenaActions.LIST_EXECUTORS,
		AthenaActions.LIST_NAMED_QUERIES,
		AthenaActions.LIST_NOTEBOOK_METADATA,
		AthenaActions.LIST_NOTEBOOK_SESSIONS,
		AthenaActions.LIST_PREPARED_STATEMENTS,
		AthenaActions.LIST_SESSIONS,
		AthenaActions.LIST_WORK_GROUPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AthenaActions.TAG_RESOURCE,
		AthenaActions.UNTAG_RESOURCE,
	];
}

const CapacityReservationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):capacity-reservation/(?<capacityReservationName>[^:/?]+)$",
);
const DatacatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):datacatalog/(?<dataCatalogName>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):workgroup/(?<workGroupName>[^:/?]+)/session/(?<sessionId>[^:/?]+)$",
);
const WorkgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):workgroup/(?<workGroupName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for athena resources.
 */
export class AthenaResources {
	/**
	 * Builds an ARN for the capacity-reservation resource.
	 */
	static capacityReservation(props: {
		/** The CapacityReservationName component of the ARN. */
		readonly capacityReservationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:athena:${props.region ?? "*"}:${props.account ?? "*"}:capacity-reservation/${props.capacityReservationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capacity-reservation resource.
	 */
	static isValidCapacityReservationArn(arn: string): boolean {
		return CapacityReservationArnRegex.test(arn);
	}

	/**
	 * Parses a capacity-reservation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapacityReservationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		capacityReservationName: string;
	} {
		const match = CapacityReservationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capacity-reservation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			capacityReservationName: match.groups!.capacityReservationName,
		};
	}

	/**
	 * Builds an ARN for the datacatalog resource.
	 */
	static datacatalog(props: {
		/** The DataCatalogName component of the ARN. */
		readonly dataCatalogName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:athena:${props.region ?? "*"}:${props.account ?? "*"}:datacatalog/${props.dataCatalogName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datacatalog resource.
	 */
	static isValidDatacatalogArn(arn: string): boolean {
		return DatacatalogArnRegex.test(arn);
	}

	/**
	 * Parses a datacatalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatacatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataCatalogName: string;
	} {
		const match = DatacatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datacatalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataCatalogName: match.groups!.dataCatalogName,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: {
		/** The WorkGroupName component of the ARN. */
		readonly workGroupName: string;
		/** The SessionId component of the ARN. */
		readonly sessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:athena:${props.region ?? "*"}:${props.account ?? "*"}:workgroup/${props.workGroupName}/session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workGroupName: string;
		sessionId: string;
	} {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workGroupName: match.groups!.workGroupName,
			sessionId: match.groups!.sessionId,
		};
	}

	/**
	 * Builds an ARN for the workgroup resource.
	 */
	static workgroup(props: {
		/** The WorkGroupName component of the ARN. */
		readonly workGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:athena:${props.region ?? "*"}:${props.account ?? "*"}:workgroup/${props.workGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workgroup resource.
	 */
	static isValidWorkgroupArn(arn: string): boolean {
		return WorkgroupArnRegex.test(arn);
	}

	/**
	 * Parses a workgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workGroupName: string;
	} {
		const match = WorkgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workGroupName: match.groups!.workGroupName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for athena.
 */
export class AthenaOperations {
	/** IAM actions required for the BatchGetNamedQuery API call. */
	static readonly BATCH_GET_NAMED_QUERY: string[] = [
		"athena:BatchGetNamedQuery",
	];
	/** IAM actions required for the BatchGetPreparedStatement API call. */
	static readonly BATCH_GET_PREPARED_STATEMENT: string[] = [
		"athena:BatchGetPreparedStatement",
	];
	/** IAM actions required for the BatchGetQueryExecution API call. */
	static readonly BATCH_GET_QUERY_EXECUTION: string[] = [
		"athena:BatchGetQueryExecution",
	];
	/** IAM actions required for the CancelCapacityReservation API call. */
	static readonly CANCEL_CAPACITY_RESERVATION: string[] = [
		"athena:CancelCapacityReservation",
	];
	/** IAM actions required for the CreateCapacityReservation API call. */
	static readonly CREATE_CAPACITY_RESERVATION: string[] = [
		"athena:CreateCapacityReservation",
		"athena:TagResource",
	];
	/** IAM actions required for the CreateDataCatalog API call. */
	static readonly CREATE_DATA_CATALOG: string[] = [
		"athena:CreateDataCatalog",
		"athena:TagResource",
	];
	/** IAM actions required for the CreateNamedQuery API call. */
	static readonly CREATE_NAMED_QUERY: string[] = ["athena:CreateNamedQuery"];
	/** IAM actions required for the CreateNotebook API call. */
	static readonly CREATE_NOTEBOOK: string[] = ["athena:CreateNotebook"];
	/** IAM actions required for the CreatePreparedStatement API call. */
	static readonly CREATE_PREPARED_STATEMENT: string[] = [
		"athena:CreatePreparedStatement",
	];
	/** IAM actions required for the CreatePresignedNotebookUrl API call. */
	static readonly CREATE_PRESIGNED_NOTEBOOK_URL: string[] = [
		"athena:CreatePresignedNotebookUrl",
	];
	/** IAM actions required for the CreateWorkGroup API call. */
	static readonly CREATE_WORK_GROUP: string[] = [
		"athena:CreateWorkGroup",
		"iam:PassRole",
		"athena:TagResource",
	];
	/** IAM actions required for the DeleteCapacityReservation API call. */
	static readonly DELETE_CAPACITY_RESERVATION: string[] = [
		"athena:DeleteCapacityReservation",
	];
	/** IAM actions required for the DeleteDataCatalog API call. */
	static readonly DELETE_DATA_CATALOG: string[] = ["athena:DeleteDataCatalog"];
	/** IAM actions required for the DeleteNamedQuery API call. */
	static readonly DELETE_NAMED_QUERY: string[] = ["athena:DeleteNamedQuery"];
	/** IAM actions required for the DeleteNotebook API call. */
	static readonly DELETE_NOTEBOOK: string[] = ["athena:DeleteNotebook"];
	/** IAM actions required for the DeletePreparedStatement API call. */
	static readonly DELETE_PREPARED_STATEMENT: string[] = [
		"athena:DeletePreparedStatement",
	];
	/** IAM actions required for the DeleteWorkGroup API call. */
	static readonly DELETE_WORK_GROUP: string[] = ["athena:DeleteWorkGroup"];
	/** IAM actions required for the ExportNotebook API call. */
	static readonly EXPORT_NOTEBOOK: string[] = ["athena:ExportNotebook"];
	/** IAM actions required for the GetCalculationExecution API call. */
	static readonly GET_CALCULATION_EXECUTION: string[] = [
		"athena:GetCalculationExecution",
	];
	/** IAM actions required for the GetCalculationExecutionCode API call. */
	static readonly GET_CALCULATION_EXECUTION_CODE: string[] = [
		"athena:GetCalculationExecutionCode",
	];
	/** IAM actions required for the GetCalculationExecutionStatus API call. */
	static readonly GET_CALCULATION_EXECUTION_STATUS: string[] = [
		"athena:GetCalculationExecutionStatus",
	];
	/** IAM actions required for the GetCapacityAssignmentConfiguration API call. */
	static readonly GET_CAPACITY_ASSIGNMENT_CONFIGURATION: string[] = [
		"athena:GetCapacityAssignmentConfiguration",
	];
	/** IAM actions required for the GetCapacityReservation API call. */
	static readonly GET_CAPACITY_RESERVATION: string[] = [
		"athena:GetCapacityReservation",
	];
	/** IAM actions required for the GetDataCatalog API call. */
	static readonly GET_DATA_CATALOG: string[] = ["athena:GetDataCatalog"];
	/** IAM actions required for the GetDatabase API call. */
	static readonly GET_DATABASE: string[] = ["athena:GetDatabase"];
	/** IAM actions required for the GetNamedQuery API call. */
	static readonly GET_NAMED_QUERY: string[] = ["athena:GetNamedQuery"];
	/** IAM actions required for the GetNotebookMetadata API call. */
	static readonly GET_NOTEBOOK_METADATA: string[] = [
		"athena:GetNotebookMetadata",
	];
	/** IAM actions required for the GetPreparedStatement API call. */
	static readonly GET_PREPARED_STATEMENT: string[] = [
		"athena:GetPreparedStatement",
	];
	/** IAM actions required for the GetQueryExecution API call. */
	static readonly GET_QUERY_EXECUTION: string[] = ["athena:GetQueryExecution"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly GET_QUERY_RESULTS: string[] = ["athena:GetQueryResults"];
	/** IAM actions required for the GetQueryRuntimeStatistics API call. */
	static readonly GET_QUERY_RUNTIME_STATISTICS: string[] = [
		"athena:GetQueryRuntimeStatistics",
	];
	/** IAM actions required for the GetResourceDashboard API call. */
	static readonly GET_RESOURCE_DASHBOARD: string[] = [
		"athena:GetResourceDashboard",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["athena:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly GET_SESSION_ENDPOINT: string[] = [
		"athena:GetSessionEndpoint",
	];
	/** IAM actions required for the GetSessionStatus API call. */
	static readonly GET_SESSION_STATUS: string[] = ["athena:GetSessionStatus"];
	/** IAM actions required for the GetTableMetadata API call. */
	static readonly GET_TABLE_METADATA: string[] = ["athena:GetTableMetadata"];
	/** IAM actions required for the GetWorkGroup API call. */
	static readonly GET_WORK_GROUP: string[] = ["athena:GetWorkGroup"];
	/** IAM actions required for the ImportNotebook API call. */
	static readonly IMPORT_NOTEBOOK: string[] = ["athena:ImportNotebook"];
	/** IAM actions required for the ListApplicationDPUSizes API call. */
	static readonly LIST_APPLICATION_DPU_SIZES: string[] = [
		"athena:ListApplicationDPUSizes",
	];
	/** IAM actions required for the ListCalculationExecutions API call. */
	static readonly LIST_CALCULATION_EXECUTIONS: string[] = [
		"athena:ListCalculationExecutions",
	];
	/** IAM actions required for the ListCapacityReservations API call. */
	static readonly LIST_CAPACITY_RESERVATIONS: string[] = [
		"athena:ListCapacityReservations",
	];
	/** IAM actions required for the ListDataCatalogs API call. */
	static readonly LIST_DATA_CATALOGS: string[] = ["athena:ListDataCatalogs"];
	/** IAM actions required for the ListDatabases API call. */
	static readonly LIST_DATABASES: string[] = ["athena:ListDatabases"];
	/** IAM actions required for the ListEngineVersions API call. */
	static readonly LIST_ENGINE_VERSIONS: string[] = [
		"athena:ListEngineVersions",
	];
	/** IAM actions required for the ListExecutors API call. */
	static readonly LIST_EXECUTORS: string[] = ["athena:ListExecutors"];
	/** IAM actions required for the ListNamedQueries API call. */
	static readonly LIST_NAMED_QUERIES: string[] = ["athena:ListNamedQueries"];
	/** IAM actions required for the ListNotebookMetadata API call. */
	static readonly LIST_NOTEBOOK_METADATA: string[] = [
		"athena:ListNotebookMetadata",
	];
	/** IAM actions required for the ListNotebookSessions API call. */
	static readonly LIST_NOTEBOOK_SESSIONS: string[] = [
		"athena:ListNotebookSessions",
	];
	/** IAM actions required for the ListPreparedStatements API call. */
	static readonly LIST_PREPARED_STATEMENTS: string[] = [
		"athena:ListPreparedStatements",
	];
	/** IAM actions required for the ListQueryExecutions API call. */
	static readonly LIST_QUERY_EXECUTIONS: string[] = [
		"athena:ListQueryExecutions",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["athena:ListSessions"];
	/** IAM actions required for the ListTableMetadata API call. */
	static readonly LIST_TABLE_METADATA: string[] = ["athena:ListTableMetadata"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"athena:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkGroups API call. */
	static readonly LIST_WORK_GROUPS: string[] = ["athena:ListWorkGroups"];
	/** IAM actions required for the PutCapacityAssignmentConfiguration API call. */
	static readonly PUT_CAPACITY_ASSIGNMENT_CONFIGURATION: string[] = [
		"athena:PutCapacityAssignmentConfiguration",
	];
	/** IAM actions required for the StartCalculationExecution API call. */
	static readonly START_CALCULATION_EXECUTION: string[] = [
		"athena:StartCalculationExecution",
	];
	/** IAM actions required for the StartQueryExecution API call. */
	static readonly START_QUERY_EXECUTION: string[] = [
		"athena:StartQueryExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly START_SESSION: string[] = [
		"athena:ListTagsForResource",
		"iam:PassRole",
		"athena:StartSession",
		"athena:TagResource",
	];
	/** IAM actions required for the StopCalculationExecution API call. */
	static readonly STOP_CALCULATION_EXECUTION: string[] = [
		"athena:StopCalculationExecution",
	];
	/** IAM actions required for the StopQueryExecution API call. */
	static readonly STOP_QUERY_EXECUTION: string[] = [
		"athena:StopQueryExecution",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["athena:TagResource"];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TERMINATE_SESSION: string[] = ["athena:TerminateSession"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["athena:UntagResource"];
	/** IAM actions required for the UpdateCapacityReservation API call. */
	static readonly UPDATE_CAPACITY_RESERVATION: string[] = [
		"athena:UpdateCapacityReservation",
	];
	/** IAM actions required for the UpdateDataCatalog API call. */
	static readonly UPDATE_DATA_CATALOG: string[] = ["athena:UpdateDataCatalog"];
	/** IAM actions required for the UpdateNamedQuery API call. */
	static readonly UPDATE_NAMED_QUERY: string[] = ["athena:UpdateNamedQuery"];
	/** IAM actions required for the UpdateNotebook API call. */
	static readonly UPDATE_NOTEBOOK: string[] = ["athena:UpdateNotebook"];
	/** IAM actions required for the UpdateNotebookMetadata API call. */
	static readonly UPDATE_NOTEBOOK_METADATA: string[] = [
		"athena:UpdateNotebookMetadata",
	];
	/** IAM actions required for the UpdatePreparedStatement API call. */
	static readonly UPDATE_PREPARED_STATEMENT: string[] = [
		"athena:UpdatePreparedStatement",
	];
	/** IAM actions required for the UpdateWorkGroup API call. */
	static readonly UPDATE_WORK_GROUP: string[] = [
		"iam:PassRole",
		"athena:UpdateWorkGroup",
	];
}

/**
 * Condition key constants and builders for athena.
 */
export class AthenaConditions {
	/** Condition keys applicable to the CreateCapacityReservation action. */
	static readonly CREATE_CAPACITY_RESERVATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataCatalog action. */
	static readonly CREATE_DATA_CATALOG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkGroup action. */
	static readonly CREATE_WORK_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly START_SESSION_CONDITION_KEYS: string[] = [
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
