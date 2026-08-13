// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/neptune-graph.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the neptune-graph service.
 */
export class NeptuneGraphActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "neptune-graph";

	/** [Write] neptune-graph:CancelExportTask */
	static readonly CANCEL_EXPORT_TASK = "neptune-graph:CancelExportTask";
	/** [Write] neptune-graph:CancelImportTask */
	static readonly CANCEL_IMPORT_TASK = "neptune-graph:CancelImportTask";
	/** [Write] neptune-graph:CancelQuery */
	static readonly CANCEL_QUERY = "neptune-graph:CancelQuery";
	/** [Write] neptune-graph:CreateGraph */
	static readonly CREATE_GRAPH = "neptune-graph:CreateGraph";
	/** [Write] neptune-graph:CreateGraphSnapshot */
	static readonly CREATE_GRAPH_SNAPSHOT = "neptune-graph:CreateGraphSnapshot";
	/** [Write] neptune-graph:CreateGraphUsingImportTask */
	static readonly CREATE_GRAPH_USING_IMPORT_TASK =
		"neptune-graph:CreateGraphUsingImportTask";
	/** [Write] neptune-graph:CreatePrivateGraphEndpoint */
	static readonly CREATE_PRIVATE_GRAPH_ENDPOINT =
		"neptune-graph:CreatePrivateGraphEndpoint";
	/** [Write] neptune-graph:DeleteDataViaQuery */
	static readonly DELETE_DATA_VIA_QUERY = "neptune-graph:DeleteDataViaQuery";
	/** [Write] neptune-graph:DeleteGraph */
	static readonly DELETE_GRAPH = "neptune-graph:DeleteGraph";
	/** [Write] neptune-graph:DeleteGraphSnapshot */
	static readonly DELETE_GRAPH_SNAPSHOT = "neptune-graph:DeleteGraphSnapshot";
	/** [Write] neptune-graph:DeletePrivateGraphEndpoint */
	static readonly DELETE_PRIVATE_GRAPH_ENDPOINT =
		"neptune-graph:DeletePrivateGraphEndpoint";
	/** [Read] neptune-graph:GetEngineStatus */
	static readonly GET_ENGINE_STATUS = "neptune-graph:GetEngineStatus";
	/** [Read] neptune-graph:GetExportTask */
	static readonly GET_EXPORT_TASK = "neptune-graph:GetExportTask";
	/** [Read] neptune-graph:GetGraph */
	static readonly GET_GRAPH = "neptune-graph:GetGraph";
	/** [Read] neptune-graph:GetGraphSnapshot */
	static readonly GET_GRAPH_SNAPSHOT = "neptune-graph:GetGraphSnapshot";
	/** [Read] neptune-graph:GetGraphSummary */
	static readonly GET_GRAPH_SUMMARY = "neptune-graph:GetGraphSummary";
	/** [Read] neptune-graph:GetImportTask */
	static readonly GET_IMPORT_TASK = "neptune-graph:GetImportTask";
	/** [Read] neptune-graph:GetPrivateGraphEndpoint */
	static readonly GET_PRIVATE_GRAPH_ENDPOINT =
		"neptune-graph:GetPrivateGraphEndpoint";
	/** [Read] neptune-graph:GetQueryStatus */
	static readonly GET_QUERY_STATUS = "neptune-graph:GetQueryStatus";
	/** [Read] neptune-graph:GetStatisticsStatus */
	static readonly GET_STATISTICS_STATUS = "neptune-graph:GetStatisticsStatus";
	/** [Read] neptune-graph:ListExportTasks */
	static readonly LIST_EXPORT_TASKS = "neptune-graph:ListExportTasks";
	/** [Read] neptune-graph:ListGraphSnapshots */
	static readonly LIST_GRAPH_SNAPSHOTS = "neptune-graph:ListGraphSnapshots";
	/** [Read] neptune-graph:ListGraphs */
	static readonly LIST_GRAPHS = "neptune-graph:ListGraphs";
	/** [Read] neptune-graph:ListImportTasks */
	static readonly LIST_IMPORT_TASKS = "neptune-graph:ListImportTasks";
	/** [Read] neptune-graph:ListPrivateGraphEndpoints */
	static readonly LIST_PRIVATE_GRAPH_ENDPOINTS =
		"neptune-graph:ListPrivateGraphEndpoints";
	/** [Read] neptune-graph:ListQueries */
	static readonly LIST_QUERIES = "neptune-graph:ListQueries";
	/** [Read] neptune-graph:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "neptune-graph:ListTagsForResource";
	/** [Read] neptune-graph:ReadDataViaQuery */
	static readonly READ_DATA_VIA_QUERY = "neptune-graph:ReadDataViaQuery";
	/** [Write] neptune-graph:ResetGraph */
	static readonly RESET_GRAPH = "neptune-graph:ResetGraph";
	/** [Write] neptune-graph:RestoreGraphFromSnapshot */
	static readonly RESTORE_GRAPH_FROM_SNAPSHOT =
		"neptune-graph:RestoreGraphFromSnapshot";
	/** [Write] neptune-graph:StartExportTask */
	static readonly START_EXPORT_TASK = "neptune-graph:StartExportTask";
	/** [Write] neptune-graph:StartGraph */
	static readonly START_GRAPH = "neptune-graph:StartGraph";
	/** [Write] neptune-graph:StartImportTask */
	static readonly START_IMPORT_TASK = "neptune-graph:StartImportTask";
	/** [Write] neptune-graph:StopGraph */
	static readonly STOP_GRAPH = "neptune-graph:StopGraph";
	/** [Tagging] neptune-graph:TagResource */
	static readonly TAG_RESOURCE = "neptune-graph:TagResource";
	/** [Tagging] neptune-graph:UntagResource */
	static readonly UNTAG_RESOURCE = "neptune-graph:UntagResource";
	/** [Write] neptune-graph:UpdateGraph */
	static readonly UPDATE_GRAPH = "neptune-graph:UpdateGraph";
	/** [Write] neptune-graph:WriteDataViaQuery */
	static readonly WRITE_DATA_VIA_QUERY = "neptune-graph:WriteDataViaQuery";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NeptuneGraphActions.GET_ENGINE_STATUS,
		NeptuneGraphActions.GET_EXPORT_TASK,
		NeptuneGraphActions.GET_GRAPH,
		NeptuneGraphActions.GET_GRAPH_SNAPSHOT,
		NeptuneGraphActions.GET_GRAPH_SUMMARY,
		NeptuneGraphActions.GET_IMPORT_TASK,
		NeptuneGraphActions.GET_PRIVATE_GRAPH_ENDPOINT,
		NeptuneGraphActions.GET_QUERY_STATUS,
		NeptuneGraphActions.GET_STATISTICS_STATUS,
		NeptuneGraphActions.LIST_EXPORT_TASKS,
		NeptuneGraphActions.LIST_GRAPH_SNAPSHOTS,
		NeptuneGraphActions.LIST_GRAPHS,
		NeptuneGraphActions.LIST_IMPORT_TASKS,
		NeptuneGraphActions.LIST_PRIVATE_GRAPH_ENDPOINTS,
		NeptuneGraphActions.LIST_QUERIES,
		NeptuneGraphActions.LIST_TAGS_FOR_RESOURCE,
		NeptuneGraphActions.READ_DATA_VIA_QUERY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NeptuneGraphActions.CANCEL_EXPORT_TASK,
		NeptuneGraphActions.CANCEL_IMPORT_TASK,
		NeptuneGraphActions.CANCEL_QUERY,
		NeptuneGraphActions.CREATE_GRAPH,
		NeptuneGraphActions.CREATE_GRAPH_SNAPSHOT,
		NeptuneGraphActions.CREATE_GRAPH_USING_IMPORT_TASK,
		NeptuneGraphActions.CREATE_PRIVATE_GRAPH_ENDPOINT,
		NeptuneGraphActions.DELETE_DATA_VIA_QUERY,
		NeptuneGraphActions.DELETE_GRAPH,
		NeptuneGraphActions.DELETE_GRAPH_SNAPSHOT,
		NeptuneGraphActions.DELETE_PRIVATE_GRAPH_ENDPOINT,
		NeptuneGraphActions.RESET_GRAPH,
		NeptuneGraphActions.RESTORE_GRAPH_FROM_SNAPSHOT,
		NeptuneGraphActions.START_EXPORT_TASK,
		NeptuneGraphActions.START_GRAPH,
		NeptuneGraphActions.START_IMPORT_TASK,
		NeptuneGraphActions.STOP_GRAPH,
		NeptuneGraphActions.UPDATE_GRAPH,
		NeptuneGraphActions.WRITE_DATA_VIA_QUERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NeptuneGraphActions.TAG_RESOURCE,
		NeptuneGraphActions.UNTAG_RESOURCE,
	];
}

const ExportTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):export-task/(?<resourceId>[^:/?]+)$",
);
const GraphArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):graph/(?<resourceId>[^:/?]+)$",
);
const GraphSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):graph-snapshot/(?<resourceId>[^:/?]+)$",
);
const ImportTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):import-task/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for neptune-graph resources.
 */
export class NeptuneGraphResources {
	/**
	 * Builds an ARN for the export-task resource.
	 */
	static exportTask(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:neptune-graph:${props.region ?? "*"}:${props.account ?? "*"}:export-task/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export-task resource.
	 */
	static isValidExportTaskArn(arn: string): boolean {
		return ExportTaskArnRegex.test(arn);
	}

	/**
	 * Parses a export-task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ExportTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export-task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the graph resource.
	 */
	static graph(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:neptune-graph:${props.region ?? "*"}:${props.account ?? "*"}:graph/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the graph resource.
	 */
	static isValidGraphArn(arn: string): boolean {
		return GraphArnRegex.test(arn);
	}

	/**
	 * Parses a graph ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGraphArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = GraphArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid graph ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the graph-snapshot resource.
	 */
	static graphSnapshot(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:neptune-graph:${props.region ?? "*"}:${props.account ?? "*"}:graph-snapshot/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the graph-snapshot resource.
	 */
	static isValidGraphSnapshotArn(arn: string): boolean {
		return GraphSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a graph-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGraphSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = GraphSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid graph-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the import-task resource.
	 */
	static importTask(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:neptune-graph:${props.region ?? "*"}:${props.account ?? "*"}:import-task/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the import-task resource.
	 */
	static isValidImportTaskArn(arn: string): boolean {
		return ImportTaskArnRegex.test(arn);
	}

	/**
	 * Parses a import-task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ImportTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid import-task ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for neptune-graph.
 */
export class NeptuneGraphOperations {
	/** IAM actions required for the CancelExportTask API call. */
	static readonly CANCEL_EXPORT_TASK: string[] = [
		"neptune-graph:CancelExportTask",
	];
	/** IAM actions required for the CancelImportTask API call. */
	static readonly CANCEL_IMPORT_TASK: string[] = [
		"neptune-graph:CancelImportTask",
	];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CANCEL_QUERY: string[] = [];
	/** IAM actions required for the CreateGraph API call. */
	static readonly CREATE_GRAPH: string[] = [
		"neptune-graph:CreateGraph",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreateGraphSnapshot API call. */
	static readonly CREATE_GRAPH_SNAPSHOT: string[] = [
		"neptune-graph:CreateGraphSnapshot",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreateGraphUsingImportTask API call. */
	static readonly CREATE_GRAPH_USING_IMPORT_TASK: string[] = [
		"neptune-graph:CreateGraphUsingImportTask",
		"iam:PassRole",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreatePrivateGraphEndpoint API call. */
	static readonly CREATE_PRIVATE_GRAPH_ENDPOINT: string[] = [
		"neptune-graph:CreatePrivateGraphEndpoint",
	];
	/** IAM actions required for the DeleteGraph API call. */
	static readonly DELETE_GRAPH: string[] = ["neptune-graph:DeleteGraph"];
	/** IAM actions required for the DeleteGraphSnapshot API call. */
	static readonly DELETE_GRAPH_SNAPSHOT: string[] = [
		"neptune-graph:DeleteGraphSnapshot",
	];
	/** IAM actions required for the DeletePrivateGraphEndpoint API call. */
	static readonly DELETE_PRIVATE_GRAPH_ENDPOINT: string[] = [
		"neptune-graph:DeletePrivateGraphEndpoint",
	];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly EXECUTE_QUERY: string[] = [];
	/** IAM actions required for the GetExportTask API call. */
	static readonly GET_EXPORT_TASK: string[] = ["neptune-graph:GetExportTask"];
	/** IAM actions required for the GetGraph API call. */
	static readonly GET_GRAPH: string[] = ["neptune-graph:GetGraph"];
	/** IAM actions required for the GetGraphSnapshot API call. */
	static readonly GET_GRAPH_SNAPSHOT: string[] = [
		"neptune-graph:GetGraphSnapshot",
	];
	/** IAM actions required for the GetGraphSummary API call. */
	static readonly GET_GRAPH_SUMMARY: string[] = [];
	/** IAM actions required for the GetImportTask API call. */
	static readonly GET_IMPORT_TASK: string[] = ["neptune-graph:GetImportTask"];
	/** IAM actions required for the GetPrivateGraphEndpoint API call. */
	static readonly GET_PRIVATE_GRAPH_ENDPOINT: string[] = [
		"neptune-graph:GetPrivateGraphEndpoint",
	];
	/** IAM actions required for the GetQuery API call. */
	static readonly GET_QUERY: string[] = [];
	/** IAM actions required for the ListExportTasks API call. */
	static readonly LIST_EXPORT_TASKS: string[] = [
		"neptune-graph:ListExportTasks",
	];
	/** IAM actions required for the ListGraphSnapshots API call. */
	static readonly LIST_GRAPH_SNAPSHOTS: string[] = [
		"neptune-graph:ListGraphSnapshots",
	];
	/** IAM actions required for the ListGraphs API call. */
	static readonly LIST_GRAPHS: string[] = ["neptune-graph:ListGraphs"];
	/** IAM actions required for the ListImportTasks API call. */
	static readonly LIST_IMPORT_TASKS: string[] = [
		"neptune-graph:ListImportTasks",
	];
	/** IAM actions required for the ListPrivateGraphEndpoints API call. */
	static readonly LIST_PRIVATE_GRAPH_ENDPOINTS: string[] = [
		"neptune-graph:ListPrivateGraphEndpoints",
	];
	/** IAM actions required for the ListQueries API call. */
	static readonly LIST_QUERIES: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"neptune-graph:ListTagsForResource",
	];
	/** IAM actions required for the ResetGraph API call. */
	static readonly RESET_GRAPH: string[] = ["neptune-graph:ResetGraph"];
	/** IAM actions required for the RestoreGraphFromSnapshot API call. */
	static readonly RESTORE_GRAPH_FROM_SNAPSHOT: string[] = [
		"neptune-graph:RestoreGraphFromSnapshot",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly START_EXPORT_TASK: string[] = [
		"iam:PassRole",
		"neptune-graph:StartExportTask",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the StartGraph API call. */
	static readonly START_GRAPH: string[] = ["neptune-graph:StartGraph"];
	/** IAM actions required for the StartImportTask API call. */
	static readonly START_IMPORT_TASK: string[] = [
		"iam:PassRole",
		"neptune-graph:StartImportTask",
	];
	/** IAM actions required for the StopGraph API call. */
	static readonly STOP_GRAPH: string[] = ["neptune-graph:StopGraph"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["neptune-graph:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["neptune-graph:UntagResource"];
	/** IAM actions required for the UpdateGraph API call. */
	static readonly UPDATE_GRAPH: string[] = ["neptune-graph:UpdateGraph"];
}

/**
 * Condition key constants and builders for neptune-graph.
 */
export class NeptuneGraphConditions {
	/** Condition keys applicable to the CancelExportTask action. */
	static readonly CANCEL_EXPORT_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CancelQuery action. */
	static readonly CANCEL_QUERY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateGraph action. */
	static readonly CREATE_GRAPH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the CreateGraphSnapshot action. */
	static readonly CREATE_GRAPH_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGraphUsingImportTask action. */
	static readonly CREATE_GRAPH_USING_IMPORT_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the CreatePrivateGraphEndpoint action. */
	static readonly CREATE_PRIVATE_GRAPH_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDataViaQuery action. */
	static readonly DELETE_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraph action. */
	static readonly DELETE_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraphSnapshot action. */
	static readonly DELETE_GRAPH_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePrivateGraphEndpoint action. */
	static readonly DELETE_PRIVATE_GRAPH_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEngineStatus action. */
	static readonly GET_ENGINE_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExportTask action. */
	static readonly GET_EXPORT_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraph action. */
	static readonly GET_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphSnapshot action. */
	static readonly GET_GRAPH_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphSummary action. */
	static readonly GET_GRAPH_SUMMARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPrivateGraphEndpoint action. */
	static readonly GET_PRIVATE_GRAPH_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetQueryStatus action. */
	static readonly GET_QUERY_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetStatisticsStatus action. */
	static readonly GET_STATISTICS_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPrivateGraphEndpoints action. */
	static readonly LIST_PRIVATE_GRAPH_ENDPOINTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListQueries action. */
	static readonly LIST_QUERIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReadDataViaQuery action. */
	static readonly READ_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ResetGraph action. */
	static readonly RESET_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreGraphFromSnapshot action. */
	static readonly RESTORE_GRAPH_FROM_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the StartExportTask action. */
	static readonly START_EXPORT_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartGraph action. */
	static readonly START_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopGraph action. */
	static readonly STOP_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateGraph action. */
	static readonly UPDATE_GRAPH_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the WriteDataViaQuery action. */
	static readonly WRITE_DATA_VIA_QUERY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: neptune-graph:PublicConnectivity (Bool) */
	static readonly PUBLIC_CONNECTIVITY = "neptune-graph:PublicConnectivity";

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
	 * Generates a condition block for `neptune-graph:PublicConnectivity`.
	 */
	static publicConnectivity(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "neptune-graph:PublicConnectivity": value } };
	}
}
