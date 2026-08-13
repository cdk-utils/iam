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
	static readonly BatchGetNamedQuery = "athena:BatchGetNamedQuery";
	/** [Read] athena:BatchGetPreparedStatement */
	static readonly BatchGetPreparedStatement =
		"athena:BatchGetPreparedStatement";
	/** [Read] athena:BatchGetQueryExecution */
	static readonly BatchGetQueryExecution = "athena:BatchGetQueryExecution";
	/** [Write] athena:CancelCapacityReservation */
	static readonly CancelCapacityReservation =
		"athena:CancelCapacityReservation";
	/** [Write] athena:CancelQueryExecution */
	static readonly CancelQueryExecution = "athena:CancelQueryExecution";
	/** [Write] athena:CreateCapacityReservation */
	static readonly CreateCapacityReservation =
		"athena:CreateCapacityReservation";
	/** [Write] athena:CreateDataCatalog */
	static readonly CreateDataCatalog = "athena:CreateDataCatalog";
	/** [Write] athena:CreateNamedQuery */
	static readonly CreateNamedQuery = "athena:CreateNamedQuery";
	/** [Write] athena:CreateNotebook */
	static readonly CreateNotebook = "athena:CreateNotebook";
	/** [Write] athena:CreatePreparedStatement */
	static readonly CreatePreparedStatement = "athena:CreatePreparedStatement";
	/** [Write] athena:CreatePresignedNotebookUrl */
	static readonly CreatePresignedNotebookUrl =
		"athena:CreatePresignedNotebookUrl";
	/** [Write] athena:CreateWorkGroup */
	static readonly CreateWorkGroup = "athena:CreateWorkGroup";
	/** [Write] athena:DeleteCapacityReservation */
	static readonly DeleteCapacityReservation =
		"athena:DeleteCapacityReservation";
	/** [Write] athena:DeleteDataCatalog */
	static readonly DeleteDataCatalog = "athena:DeleteDataCatalog";
	/** [Write] athena:DeleteNamedQuery */
	static readonly DeleteNamedQuery = "athena:DeleteNamedQuery";
	/** [Write] athena:DeleteNotebook */
	static readonly DeleteNotebook = "athena:DeleteNotebook";
	/** [Write] athena:DeletePreparedStatement */
	static readonly DeletePreparedStatement = "athena:DeletePreparedStatement";
	/** [Write] athena:DeleteWorkGroup */
	static readonly DeleteWorkGroup = "athena:DeleteWorkGroup";
	/** [Write] athena:ExportNotebook */
	static readonly ExportNotebook = "athena:ExportNotebook";
	/** [Read] athena:GetCalculationExecution */
	static readonly actionGetCalculationExecution =
		"athena:GetCalculationExecution";
	/** [Read] athena:GetCalculationExecutionCode */
	static readonly actionGetCalculationExecutionCode =
		"athena:GetCalculationExecutionCode";
	/** [Read] athena:GetCalculationExecutionStatus */
	static readonly actionGetCalculationExecutionStatus =
		"athena:GetCalculationExecutionStatus";
	/** [Read] athena:GetCapacityAssignmentConfiguration */
	static readonly actionGetCapacityAssignmentConfiguration =
		"athena:GetCapacityAssignmentConfiguration";
	/** [Read] athena:GetCapacityReservation */
	static readonly actionGetCapacityReservation =
		"athena:GetCapacityReservation";
	/** [Read] athena:GetCatalogs */
	static readonly actionGetCatalogs = "athena:GetCatalogs";
	/** [Read] athena:GetDataCatalog */
	static readonly actionGetDataCatalog = "athena:GetDataCatalog";
	/** [Read] athena:GetDatabase */
	static readonly actionGetDatabase = "athena:GetDatabase";
	/** [Read] athena:GetExecutionEngine */
	static readonly actionGetExecutionEngine = "athena:GetExecutionEngine";
	/** [Read] athena:GetExecutionEngines */
	static readonly actionGetExecutionEngines = "athena:GetExecutionEngines";
	/** [Read] athena:GetNamedQuery */
	static readonly actionGetNamedQuery = "athena:GetNamedQuery";
	/** [Read] athena:GetNamespace */
	static readonly actionGetNamespace = "athena:GetNamespace";
	/** [Read] athena:GetNamespaces */
	static readonly actionGetNamespaces = "athena:GetNamespaces";
	/** [Read] athena:GetNotebookMetadata */
	static readonly actionGetNotebookMetadata = "athena:GetNotebookMetadata";
	/** [Read] athena:GetPreparedStatement */
	static readonly actionGetPreparedStatement = "athena:GetPreparedStatement";
	/** [Read] athena:GetQueryExecution */
	static readonly actionGetQueryExecution = "athena:GetQueryExecution";
	/** [Read] athena:GetQueryExecutions */
	static readonly actionGetQueryExecutions = "athena:GetQueryExecutions";
	/** [Read] athena:GetQueryResults */
	static readonly actionGetQueryResults = "athena:GetQueryResults";
	/** [Read] athena:GetQueryResultsStream */
	static readonly actionGetQueryResultsStream = "athena:GetQueryResultsStream";
	/** [Read] athena:GetQueryRuntimeStatistics */
	static readonly actionGetQueryRuntimeStatistics =
		"athena:GetQueryRuntimeStatistics";
	/** [Read] athena:GetResourceDashboard */
	static readonly actionGetResourceDashboard = "athena:GetResourceDashboard";
	/** [Read] athena:GetSession */
	static readonly actionGetSession = "athena:GetSession";
	/** [Write] athena:GetSessionEndpoint */
	static readonly actionGetSessionEndpoint = "athena:GetSessionEndpoint";
	/** [Read] athena:GetSessionStatus */
	static readonly actionGetSessionStatus = "athena:GetSessionStatus";
	/** [Read] athena:GetTable */
	static readonly actionGetTable = "athena:GetTable";
	/** [Read] athena:GetTableMetadata */
	static readonly actionGetTableMetadata = "athena:GetTableMetadata";
	/** [Read] athena:GetTables */
	static readonly actionGetTables = "athena:GetTables";
	/** [Read] athena:GetWorkGroup */
	static readonly actionGetWorkGroup = "athena:GetWorkGroup";
	/** [Write] athena:ImportNotebook */
	static readonly ImportNotebook = "athena:ImportNotebook";
	/** [List] athena:ListApplicationDPUSizes */
	static readonly ListApplicationDPUSizes = "athena:ListApplicationDPUSizes";
	/** [List] athena:ListCalculationExecutions */
	static readonly ListCalculationExecutions =
		"athena:ListCalculationExecutions";
	/** [List] athena:ListCapacityReservations */
	static readonly ListCapacityReservations = "athena:ListCapacityReservations";
	/** [List] athena:ListDataCatalogs */
	static readonly ListDataCatalogs = "athena:ListDataCatalogs";
	/** [List] athena:ListDatabases */
	static readonly ListDatabases = "athena:ListDatabases";
	/** [Read] athena:ListEngineVersions */
	static readonly ListEngineVersions = "athena:ListEngineVersions";
	/** [List] athena:ListExecutors */
	static readonly ListExecutors = "athena:ListExecutors";
	/** [List] athena:ListNamedQueries */
	static readonly ListNamedQueries = "athena:ListNamedQueries";
	/** [List] athena:ListNotebookMetadata */
	static readonly ListNotebookMetadata = "athena:ListNotebookMetadata";
	/** [List] athena:ListNotebookSessions */
	static readonly ListNotebookSessions = "athena:ListNotebookSessions";
	/** [List] athena:ListPreparedStatements */
	static readonly ListPreparedStatements = "athena:ListPreparedStatements";
	/** [Read] athena:ListQueryExecutions */
	static readonly ListQueryExecutions = "athena:ListQueryExecutions";
	/** [List] athena:ListSessions */
	static readonly ListSessions = "athena:ListSessions";
	/** [Read] athena:ListTableMetadata */
	static readonly ListTableMetadata = "athena:ListTableMetadata";
	/** [Read] athena:ListTagsForResource */
	static readonly ListTagsForResource = "athena:ListTagsForResource";
	/** [List] athena:ListWorkGroups */
	static readonly ListWorkGroups = "athena:ListWorkGroups";
	/** [Write] athena:PutCapacityAssignmentConfiguration */
	static readonly PutCapacityAssignmentConfiguration =
		"athena:PutCapacityAssignmentConfiguration";
	/** [Write] athena:RunQuery */
	static readonly RunQuery = "athena:RunQuery";
	/** [Write] athena:StartCalculationExecution */
	static readonly StartCalculationExecution =
		"athena:StartCalculationExecution";
	/** [Write] athena:StartQueryExecution */
	static readonly StartQueryExecution = "athena:StartQueryExecution";
	/** [Write] athena:StartSession */
	static readonly StartSession = "athena:StartSession";
	/** [Write] athena:StopCalculationExecution */
	static readonly StopCalculationExecution = "athena:StopCalculationExecution";
	/** [Write] athena:StopQueryExecution */
	static readonly StopQueryExecution = "athena:StopQueryExecution";
	/** [Tagging] athena:TagResource */
	static readonly TagResource = "athena:TagResource";
	/** [Write] athena:TerminateSession */
	static readonly TerminateSession = "athena:TerminateSession";
	/** [Tagging] athena:UntagResource */
	static readonly UntagResource = "athena:UntagResource";
	/** [Write] athena:UpdateCapacityReservation */
	static readonly UpdateCapacityReservation =
		"athena:UpdateCapacityReservation";
	/** [Write] athena:UpdateDataCatalog */
	static readonly UpdateDataCatalog = "athena:UpdateDataCatalog";
	/** [Write] athena:UpdateNamedQuery */
	static readonly UpdateNamedQuery = "athena:UpdateNamedQuery";
	/** [Write] athena:UpdateNotebook */
	static readonly UpdateNotebook = "athena:UpdateNotebook";
	/** [Write] athena:UpdateNotebookMetadata */
	static readonly UpdateNotebookMetadata = "athena:UpdateNotebookMetadata";
	/** [Write] athena:UpdatePreparedStatement */
	static readonly UpdatePreparedStatement = "athena:UpdatePreparedStatement";
	/** [Write] athena:UpdateWorkGroup */
	static readonly UpdateWorkGroup = "athena:UpdateWorkGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AthenaActions.BatchGetNamedQuery,
		AthenaActions.BatchGetPreparedStatement,
		AthenaActions.BatchGetQueryExecution,
		AthenaActions.actionGetCalculationExecution,
		AthenaActions.actionGetCalculationExecutionCode,
		AthenaActions.actionGetCalculationExecutionStatus,
		AthenaActions.actionGetCapacityAssignmentConfiguration,
		AthenaActions.actionGetCapacityReservation,
		AthenaActions.actionGetCatalogs,
		AthenaActions.actionGetDataCatalog,
		AthenaActions.actionGetDatabase,
		AthenaActions.actionGetExecutionEngine,
		AthenaActions.actionGetExecutionEngines,
		AthenaActions.actionGetNamedQuery,
		AthenaActions.actionGetNamespace,
		AthenaActions.actionGetNamespaces,
		AthenaActions.actionGetNotebookMetadata,
		AthenaActions.actionGetPreparedStatement,
		AthenaActions.actionGetQueryExecution,
		AthenaActions.actionGetQueryExecutions,
		AthenaActions.actionGetQueryResults,
		AthenaActions.actionGetQueryResultsStream,
		AthenaActions.actionGetQueryRuntimeStatistics,
		AthenaActions.actionGetResourceDashboard,
		AthenaActions.actionGetSession,
		AthenaActions.actionGetSessionStatus,
		AthenaActions.actionGetTable,
		AthenaActions.actionGetTableMetadata,
		AthenaActions.actionGetTables,
		AthenaActions.actionGetWorkGroup,
		AthenaActions.ListEngineVersions,
		AthenaActions.ListQueryExecutions,
		AthenaActions.ListTableMetadata,
		AthenaActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AthenaActions.CancelCapacityReservation,
		AthenaActions.CancelQueryExecution,
		AthenaActions.CreateCapacityReservation,
		AthenaActions.CreateDataCatalog,
		AthenaActions.CreateNamedQuery,
		AthenaActions.CreateNotebook,
		AthenaActions.CreatePreparedStatement,
		AthenaActions.CreatePresignedNotebookUrl,
		AthenaActions.CreateWorkGroup,
		AthenaActions.DeleteCapacityReservation,
		AthenaActions.DeleteDataCatalog,
		AthenaActions.DeleteNamedQuery,
		AthenaActions.DeleteNotebook,
		AthenaActions.DeletePreparedStatement,
		AthenaActions.DeleteWorkGroup,
		AthenaActions.ExportNotebook,
		AthenaActions.actionGetSessionEndpoint,
		AthenaActions.ImportNotebook,
		AthenaActions.PutCapacityAssignmentConfiguration,
		AthenaActions.RunQuery,
		AthenaActions.StartCalculationExecution,
		AthenaActions.StartQueryExecution,
		AthenaActions.StartSession,
		AthenaActions.StopCalculationExecution,
		AthenaActions.StopQueryExecution,
		AthenaActions.TerminateSession,
		AthenaActions.UpdateCapacityReservation,
		AthenaActions.UpdateDataCatalog,
		AthenaActions.UpdateNamedQuery,
		AthenaActions.UpdateNotebook,
		AthenaActions.UpdateNotebookMetadata,
		AthenaActions.UpdatePreparedStatement,
		AthenaActions.UpdateWorkGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AthenaActions.ListApplicationDPUSizes,
		AthenaActions.ListCalculationExecutions,
		AthenaActions.ListCapacityReservations,
		AthenaActions.ListDataCatalogs,
		AthenaActions.ListDatabases,
		AthenaActions.ListExecutors,
		AthenaActions.ListNamedQueries,
		AthenaActions.ListNotebookMetadata,
		AthenaActions.ListNotebookSessions,
		AthenaActions.ListPreparedStatements,
		AthenaActions.ListSessions,
		AthenaActions.ListWorkGroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AthenaActions.TagResource,
		AthenaActions.UntagResource,
	];
}

/**
 * Properties for building a capacity-reservation ARN.
 */
export interface AthenaCapacityReservationArnProps {
	/** The CapacityReservationName component of the ARN. */
	readonly capacityReservationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a capacity-reservation ARN.
 */
export interface AthenaCapacityReservationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CapacityReservationName component. */
	readonly capacityReservationName: string;
}

/**
 * Properties for building a datacatalog ARN.
 */
export interface AthenaDatacatalogArnProps {
	/** The DataCatalogName component of the ARN. */
	readonly dataCatalogName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datacatalog ARN.
 */
export interface AthenaDatacatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataCatalogName component. */
	readonly dataCatalogName: string;
}

/**
 * Properties for building a session ARN.
 */
export interface AthenaSessionArnProps {
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
}

/**
 * Parsed components of a session ARN.
 */
export interface AthenaSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkGroupName component. */
	readonly workGroupName: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

/**
 * Properties for building a workgroup ARN.
 */
export interface AthenaWorkgroupArnProps {
	/** The WorkGroupName component of the ARN. */
	readonly workGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workgroup ARN.
 */
export interface AthenaWorkgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkGroupName component. */
	readonly workGroupName: string;
}

const CapacityReservationArnRegex =
	/^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):capacity-reservation\/(?<capacityReservationName>[^:/?]+)$/;
const DatacatalogArnRegex =
	/^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):datacatalog\/(?<dataCatalogName>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):workgroup\/(?<workGroupName>[^:/?]+)\/session\/(?<sessionId>[^:/?]+)$/;
const WorkgroupArnRegex =
	/^arn:(?<partition>[^:]+):athena:(?<region>[^:]*):(?<account>[^:]*):workgroup\/(?<workGroupName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for athena resources.
 */
export class AthenaResources {
	/**
	 * Builds an ARN for the capacity-reservation resource.
	 */
	static capacityReservation(props: AthenaCapacityReservationArnProps): string {
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
	static parseCapacityReservationArn(
		arn: string,
	): AthenaCapacityReservationArnComponents {
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
	static datacatalog(props: AthenaDatacatalogArnProps): string {
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
	static parseDatacatalogArn(arn: string): AthenaDatacatalogArnComponents {
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
	static session(props: AthenaSessionArnProps): string {
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
	static parseSessionArn(arn: string): AthenaSessionArnComponents {
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
	static workgroup(props: AthenaWorkgroupArnProps): string {
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
	static parseWorkgroupArn(arn: string): AthenaWorkgroupArnComponents {
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
	static readonly BatchGetNamedQuery: string[] = ["athena:BatchGetNamedQuery"];
	/** IAM actions required for the BatchGetPreparedStatement API call. */
	static readonly BatchGetPreparedStatement: string[] = [
		"athena:BatchGetPreparedStatement",
	];
	/** IAM actions required for the BatchGetQueryExecution API call. */
	static readonly BatchGetQueryExecution: string[] = [
		"athena:BatchGetQueryExecution",
	];
	/** IAM actions required for the CancelCapacityReservation API call. */
	static readonly CancelCapacityReservation: string[] = [
		"athena:CancelCapacityReservation",
	];
	/** IAM actions required for the CreateCapacityReservation API call. */
	static readonly CreateCapacityReservation: string[] = [
		"athena:CreateCapacityReservation",
		"athena:TagResource",
	];
	/** IAM actions required for the CreateDataCatalog API call. */
	static readonly CreateDataCatalog: string[] = [
		"athena:CreateDataCatalog",
		"athena:TagResource",
	];
	/** IAM actions required for the CreateNamedQuery API call. */
	static readonly CreateNamedQuery: string[] = ["athena:CreateNamedQuery"];
	/** IAM actions required for the CreateNotebook API call. */
	static readonly CreateNotebook: string[] = ["athena:CreateNotebook"];
	/** IAM actions required for the CreatePreparedStatement API call. */
	static readonly CreatePreparedStatement: string[] = [
		"athena:CreatePreparedStatement",
	];
	/** IAM actions required for the CreatePresignedNotebookUrl API call. */
	static readonly CreatePresignedNotebookUrl: string[] = [
		"athena:CreatePresignedNotebookUrl",
	];
	/** IAM actions required for the CreateWorkGroup API call. */
	static readonly CreateWorkGroup: string[] = [
		"athena:CreateWorkGroup",
		"iam:PassRole",
		"athena:TagResource",
	];
	/** IAM actions required for the DeleteCapacityReservation API call. */
	static readonly DeleteCapacityReservation: string[] = [
		"athena:DeleteCapacityReservation",
	];
	/** IAM actions required for the DeleteDataCatalog API call. */
	static readonly DeleteDataCatalog: string[] = ["athena:DeleteDataCatalog"];
	/** IAM actions required for the DeleteNamedQuery API call. */
	static readonly DeleteNamedQuery: string[] = ["athena:DeleteNamedQuery"];
	/** IAM actions required for the DeleteNotebook API call. */
	static readonly DeleteNotebook: string[] = ["athena:DeleteNotebook"];
	/** IAM actions required for the DeletePreparedStatement API call. */
	static readonly DeletePreparedStatement: string[] = [
		"athena:DeletePreparedStatement",
	];
	/** IAM actions required for the DeleteWorkGroup API call. */
	static readonly DeleteWorkGroup: string[] = ["athena:DeleteWorkGroup"];
	/** IAM actions required for the ExportNotebook API call. */
	static readonly ExportNotebook: string[] = ["athena:ExportNotebook"];
	/** IAM actions required for the GetCalculationExecution API call. */
	static readonly opGetCalculationExecution: string[] = [
		"athena:GetCalculationExecution",
	];
	/** IAM actions required for the GetCalculationExecutionCode API call. */
	static readonly opGetCalculationExecutionCode: string[] = [
		"athena:GetCalculationExecutionCode",
	];
	/** IAM actions required for the GetCalculationExecutionStatus API call. */
	static readonly opGetCalculationExecutionStatus: string[] = [
		"athena:GetCalculationExecutionStatus",
	];
	/** IAM actions required for the GetCapacityAssignmentConfiguration API call. */
	static readonly opGetCapacityAssignmentConfiguration: string[] = [
		"athena:GetCapacityAssignmentConfiguration",
	];
	/** IAM actions required for the GetCapacityReservation API call. */
	static readonly opGetCapacityReservation: string[] = [
		"athena:GetCapacityReservation",
	];
	/** IAM actions required for the GetDataCatalog API call. */
	static readonly opGetDataCatalog: string[] = ["athena:GetDataCatalog"];
	/** IAM actions required for the GetDatabase API call. */
	static readonly opGetDatabase: string[] = ["athena:GetDatabase"];
	/** IAM actions required for the GetNamedQuery API call. */
	static readonly opGetNamedQuery: string[] = ["athena:GetNamedQuery"];
	/** IAM actions required for the GetNotebookMetadata API call. */
	static readonly opGetNotebookMetadata: string[] = [
		"athena:GetNotebookMetadata",
	];
	/** IAM actions required for the GetPreparedStatement API call. */
	static readonly opGetPreparedStatement: string[] = [
		"athena:GetPreparedStatement",
	];
	/** IAM actions required for the GetQueryExecution API call. */
	static readonly opGetQueryExecution: string[] = ["athena:GetQueryExecution"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly opGetQueryResults: string[] = ["athena:GetQueryResults"];
	/** IAM actions required for the GetQueryRuntimeStatistics API call. */
	static readonly opGetQueryRuntimeStatistics: string[] = [
		"athena:GetQueryRuntimeStatistics",
	];
	/** IAM actions required for the GetResourceDashboard API call. */
	static readonly opGetResourceDashboard: string[] = [
		"athena:GetResourceDashboard",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["athena:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly opGetSessionEndpoint: string[] = [
		"athena:GetSessionEndpoint",
	];
	/** IAM actions required for the GetSessionStatus API call. */
	static readonly opGetSessionStatus: string[] = ["athena:GetSessionStatus"];
	/** IAM actions required for the GetTableMetadata API call. */
	static readonly opGetTableMetadata: string[] = ["athena:GetTableMetadata"];
	/** IAM actions required for the GetWorkGroup API call. */
	static readonly opGetWorkGroup: string[] = ["athena:GetWorkGroup"];
	/** IAM actions required for the ImportNotebook API call. */
	static readonly ImportNotebook: string[] = ["athena:ImportNotebook"];
	/** IAM actions required for the ListApplicationDPUSizes API call. */
	static readonly ListApplicationDPUSizes: string[] = [
		"athena:ListApplicationDPUSizes",
	];
	/** IAM actions required for the ListCalculationExecutions API call. */
	static readonly ListCalculationExecutions: string[] = [
		"athena:ListCalculationExecutions",
	];
	/** IAM actions required for the ListCapacityReservations API call. */
	static readonly ListCapacityReservations: string[] = [
		"athena:ListCapacityReservations",
	];
	/** IAM actions required for the ListDataCatalogs API call. */
	static readonly ListDataCatalogs: string[] = ["athena:ListDataCatalogs"];
	/** IAM actions required for the ListDatabases API call. */
	static readonly ListDatabases: string[] = ["athena:ListDatabases"];
	/** IAM actions required for the ListEngineVersions API call. */
	static readonly ListEngineVersions: string[] = ["athena:ListEngineVersions"];
	/** IAM actions required for the ListExecutors API call. */
	static readonly ListExecutors: string[] = ["athena:ListExecutors"];
	/** IAM actions required for the ListNamedQueries API call. */
	static readonly ListNamedQueries: string[] = ["athena:ListNamedQueries"];
	/** IAM actions required for the ListNotebookMetadata API call. */
	static readonly ListNotebookMetadata: string[] = [
		"athena:ListNotebookMetadata",
	];
	/** IAM actions required for the ListNotebookSessions API call. */
	static readonly ListNotebookSessions: string[] = [
		"athena:ListNotebookSessions",
	];
	/** IAM actions required for the ListPreparedStatements API call. */
	static readonly ListPreparedStatements: string[] = [
		"athena:ListPreparedStatements",
	];
	/** IAM actions required for the ListQueryExecutions API call. */
	static readonly ListQueryExecutions: string[] = [
		"athena:ListQueryExecutions",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["athena:ListSessions"];
	/** IAM actions required for the ListTableMetadata API call. */
	static readonly ListTableMetadata: string[] = ["athena:ListTableMetadata"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"athena:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkGroups API call. */
	static readonly ListWorkGroups: string[] = ["athena:ListWorkGroups"];
	/** IAM actions required for the PutCapacityAssignmentConfiguration API call. */
	static readonly PutCapacityAssignmentConfiguration: string[] = [
		"athena:PutCapacityAssignmentConfiguration",
	];
	/** IAM actions required for the StartCalculationExecution API call. */
	static readonly StartCalculationExecution: string[] = [
		"athena:StartCalculationExecution",
	];
	/** IAM actions required for the StartQueryExecution API call. */
	static readonly StartQueryExecution: string[] = [
		"athena:StartQueryExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly StartSession: string[] = [
		"athena:ListTagsForResource",
		"iam:PassRole",
		"athena:StartSession",
		"athena:TagResource",
	];
	/** IAM actions required for the StopCalculationExecution API call. */
	static readonly StopCalculationExecution: string[] = [
		"athena:StopCalculationExecution",
	];
	/** IAM actions required for the StopQueryExecution API call. */
	static readonly StopQueryExecution: string[] = ["athena:StopQueryExecution"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["athena:TagResource"];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TerminateSession: string[] = ["athena:TerminateSession"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["athena:UntagResource"];
	/** IAM actions required for the UpdateCapacityReservation API call. */
	static readonly UpdateCapacityReservation: string[] = [
		"athena:UpdateCapacityReservation",
	];
	/** IAM actions required for the UpdateDataCatalog API call. */
	static readonly UpdateDataCatalog: string[] = ["athena:UpdateDataCatalog"];
	/** IAM actions required for the UpdateNamedQuery API call. */
	static readonly UpdateNamedQuery: string[] = ["athena:UpdateNamedQuery"];
	/** IAM actions required for the UpdateNotebook API call. */
	static readonly UpdateNotebook: string[] = ["athena:UpdateNotebook"];
	/** IAM actions required for the UpdateNotebookMetadata API call. */
	static readonly UpdateNotebookMetadata: string[] = [
		"athena:UpdateNotebookMetadata",
	];
	/** IAM actions required for the UpdatePreparedStatement API call. */
	static readonly UpdatePreparedStatement: string[] = [
		"athena:UpdatePreparedStatement",
	];
	/** IAM actions required for the UpdateWorkGroup API call. */
	static readonly UpdateWorkGroup: string[] = [
		"iam:PassRole",
		"athena:UpdateWorkGroup",
	];
}

/**
 * Condition key constants and builders for athena.
 */
export class AthenaConditions {
	/** Condition keys applicable to the CreateCapacityReservation action. */
	static readonly CreateCapacityReservationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataCatalog action. */
	static readonly CreateDataCatalogConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkGroup action. */
	static readonly CreateWorkGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly StartSessionConditionKeys: string[] = [
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
