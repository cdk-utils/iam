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
	static readonly CancelExportTask = "neptune-graph:CancelExportTask";
	/** [Write] neptune-graph:CancelImportTask */
	static readonly CancelImportTask = "neptune-graph:CancelImportTask";
	/** [Write] neptune-graph:CancelQuery */
	static readonly CancelQuery = "neptune-graph:CancelQuery";
	/** [Write] neptune-graph:CreateGraph */
	static readonly CreateGraph = "neptune-graph:CreateGraph";
	/** [Write] neptune-graph:CreateGraphSnapshot */
	static readonly CreateGraphSnapshot = "neptune-graph:CreateGraphSnapshot";
	/** [Write] neptune-graph:CreateGraphUsingImportTask */
	static readonly CreateGraphUsingImportTask =
		"neptune-graph:CreateGraphUsingImportTask";
	/** [Write] neptune-graph:CreatePrivateGraphEndpoint */
	static readonly CreatePrivateGraphEndpoint =
		"neptune-graph:CreatePrivateGraphEndpoint";
	/** [Write] neptune-graph:DeleteDataViaQuery */
	static readonly DeleteDataViaQuery = "neptune-graph:DeleteDataViaQuery";
	/** [Write] neptune-graph:DeleteGraph */
	static readonly DeleteGraph = "neptune-graph:DeleteGraph";
	/** [Write] neptune-graph:DeleteGraphSnapshot */
	static readonly DeleteGraphSnapshot = "neptune-graph:DeleteGraphSnapshot";
	/** [Write] neptune-graph:DeletePrivateGraphEndpoint */
	static readonly DeletePrivateGraphEndpoint =
		"neptune-graph:DeletePrivateGraphEndpoint";
	/** [Read] neptune-graph:GetEngineStatus */
	static readonly actionGetEngineStatus = "neptune-graph:GetEngineStatus";
	/** [Read] neptune-graph:GetExportTask */
	static readonly actionGetExportTask = "neptune-graph:GetExportTask";
	/** [Read] neptune-graph:GetGraph */
	static readonly actionGetGraph = "neptune-graph:GetGraph";
	/** [Read] neptune-graph:GetGraphSnapshot */
	static readonly actionGetGraphSnapshot = "neptune-graph:GetGraphSnapshot";
	/** [Read] neptune-graph:GetGraphSummary */
	static readonly actionGetGraphSummary = "neptune-graph:GetGraphSummary";
	/** [Read] neptune-graph:GetImportTask */
	static readonly actionGetImportTask = "neptune-graph:GetImportTask";
	/** [Read] neptune-graph:GetPrivateGraphEndpoint */
	static readonly actionGetPrivateGraphEndpoint =
		"neptune-graph:GetPrivateGraphEndpoint";
	/** [Read] neptune-graph:GetQueryStatus */
	static readonly actionGetQueryStatus = "neptune-graph:GetQueryStatus";
	/** [Read] neptune-graph:GetStatisticsStatus */
	static readonly actionGetStatisticsStatus =
		"neptune-graph:GetStatisticsStatus";
	/** [Read] neptune-graph:ListExportTasks */
	static readonly ListExportTasks = "neptune-graph:ListExportTasks";
	/** [Read] neptune-graph:ListGraphSnapshots */
	static readonly ListGraphSnapshots = "neptune-graph:ListGraphSnapshots";
	/** [Read] neptune-graph:ListGraphs */
	static readonly ListGraphs = "neptune-graph:ListGraphs";
	/** [Read] neptune-graph:ListImportTasks */
	static readonly ListImportTasks = "neptune-graph:ListImportTasks";
	/** [Read] neptune-graph:ListPrivateGraphEndpoints */
	static readonly ListPrivateGraphEndpoints =
		"neptune-graph:ListPrivateGraphEndpoints";
	/** [Read] neptune-graph:ListQueries */
	static readonly ListQueries = "neptune-graph:ListQueries";
	/** [Read] neptune-graph:ListTagsForResource */
	static readonly ListTagsForResource = "neptune-graph:ListTagsForResource";
	/** [Read] neptune-graph:ReadDataViaQuery */
	static readonly ReadDataViaQuery = "neptune-graph:ReadDataViaQuery";
	/** [Write] neptune-graph:ResetGraph */
	static readonly ResetGraph = "neptune-graph:ResetGraph";
	/** [Write] neptune-graph:RestoreGraphFromSnapshot */
	static readonly RestoreGraphFromSnapshot =
		"neptune-graph:RestoreGraphFromSnapshot";
	/** [Write] neptune-graph:StartExportTask */
	static readonly StartExportTask = "neptune-graph:StartExportTask";
	/** [Write] neptune-graph:StartGraph */
	static readonly StartGraph = "neptune-graph:StartGraph";
	/** [Write] neptune-graph:StartImportTask */
	static readonly StartImportTask = "neptune-graph:StartImportTask";
	/** [Write] neptune-graph:StopGraph */
	static readonly StopGraph = "neptune-graph:StopGraph";
	/** [Tagging] neptune-graph:TagResource */
	static readonly TagResource = "neptune-graph:TagResource";
	/** [Tagging] neptune-graph:UntagResource */
	static readonly UntagResource = "neptune-graph:UntagResource";
	/** [Write] neptune-graph:UpdateGraph */
	static readonly UpdateGraph = "neptune-graph:UpdateGraph";
	/** [Write] neptune-graph:WriteDataViaQuery */
	static readonly WriteDataViaQuery = "neptune-graph:WriteDataViaQuery";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NeptuneGraphActions.actionGetEngineStatus,
		NeptuneGraphActions.actionGetExportTask,
		NeptuneGraphActions.actionGetGraph,
		NeptuneGraphActions.actionGetGraphSnapshot,
		NeptuneGraphActions.actionGetGraphSummary,
		NeptuneGraphActions.actionGetImportTask,
		NeptuneGraphActions.actionGetPrivateGraphEndpoint,
		NeptuneGraphActions.actionGetQueryStatus,
		NeptuneGraphActions.actionGetStatisticsStatus,
		NeptuneGraphActions.ListExportTasks,
		NeptuneGraphActions.ListGraphSnapshots,
		NeptuneGraphActions.ListGraphs,
		NeptuneGraphActions.ListImportTasks,
		NeptuneGraphActions.ListPrivateGraphEndpoints,
		NeptuneGraphActions.ListQueries,
		NeptuneGraphActions.ListTagsForResource,
		NeptuneGraphActions.ReadDataViaQuery,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NeptuneGraphActions.CancelExportTask,
		NeptuneGraphActions.CancelImportTask,
		NeptuneGraphActions.CancelQuery,
		NeptuneGraphActions.CreateGraph,
		NeptuneGraphActions.CreateGraphSnapshot,
		NeptuneGraphActions.CreateGraphUsingImportTask,
		NeptuneGraphActions.CreatePrivateGraphEndpoint,
		NeptuneGraphActions.DeleteDataViaQuery,
		NeptuneGraphActions.DeleteGraph,
		NeptuneGraphActions.DeleteGraphSnapshot,
		NeptuneGraphActions.DeletePrivateGraphEndpoint,
		NeptuneGraphActions.ResetGraph,
		NeptuneGraphActions.RestoreGraphFromSnapshot,
		NeptuneGraphActions.StartExportTask,
		NeptuneGraphActions.StartGraph,
		NeptuneGraphActions.StartImportTask,
		NeptuneGraphActions.StopGraph,
		NeptuneGraphActions.UpdateGraph,
		NeptuneGraphActions.WriteDataViaQuery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NeptuneGraphActions.TagResource,
		NeptuneGraphActions.UntagResource,
	];
}

/**
 * Properties for building a export-task ARN.
 */
export interface NeptuneGraphExportTaskArnProps {
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
 * Parsed components of a export-task ARN.
 */
export interface NeptuneGraphExportTaskArnComponents {
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
 * Properties for building a graph ARN.
 */
export interface NeptuneGraphGraphArnProps {
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
 * Parsed components of a graph ARN.
 */
export interface NeptuneGraphGraphArnComponents {
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
 * Properties for building a graph-snapshot ARN.
 */
export interface NeptuneGraphGraphSnapshotArnProps {
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
 * Parsed components of a graph-snapshot ARN.
 */
export interface NeptuneGraphGraphSnapshotArnComponents {
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
 * Properties for building a import-task ARN.
 */
export interface NeptuneGraphImportTaskArnProps {
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
 * Parsed components of a import-task ARN.
 */
export interface NeptuneGraphImportTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ExportTaskArnRegex =
	/^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):export-task\/(?<resourceId>[^:/?]+)$/;
const GraphArnRegex =
	/^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):graph\/(?<resourceId>[^:/?]+)$/;
const GraphSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):graph-snapshot\/(?<resourceId>[^:/?]+)$/;
const ImportTaskArnRegex =
	/^arn:(?<partition>[^:]+):neptune-graph:(?<region>[^:]*):(?<account>[^:]*):import-task\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for neptune-graph resources.
 */
export class NeptuneGraphResources {
	/**
	 * Builds an ARN for the export-task resource.
	 */
	static exportTask(props: NeptuneGraphExportTaskArnProps): string {
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
	static parseExportTaskArn(arn: string): NeptuneGraphExportTaskArnComponents {
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
	static graph(props: NeptuneGraphGraphArnProps): string {
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
	static parseGraphArn(arn: string): NeptuneGraphGraphArnComponents {
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
	static graphSnapshot(props: NeptuneGraphGraphSnapshotArnProps): string {
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
	static parseGraphSnapshotArn(
		arn: string,
	): NeptuneGraphGraphSnapshotArnComponents {
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
	static importTask(props: NeptuneGraphImportTaskArnProps): string {
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
	static parseImportTaskArn(arn: string): NeptuneGraphImportTaskArnComponents {
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
	static readonly CancelExportTask: string[] = [
		"neptune-graph:CancelExportTask",
	];
	/** IAM actions required for the CancelImportTask API call. */
	static readonly CancelImportTask: string[] = [
		"neptune-graph:CancelImportTask",
	];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CancelQuery: string[] = [];
	/** IAM actions required for the CreateGraph API call. */
	static readonly CreateGraph: string[] = [
		"neptune-graph:CreateGraph",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreateGraphSnapshot API call. */
	static readonly CreateGraphSnapshot: string[] = [
		"neptune-graph:CreateGraphSnapshot",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreateGraphUsingImportTask API call. */
	static readonly CreateGraphUsingImportTask: string[] = [
		"neptune-graph:CreateGraphUsingImportTask",
		"iam:PassRole",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the CreatePrivateGraphEndpoint API call. */
	static readonly CreatePrivateGraphEndpoint: string[] = [
		"neptune-graph:CreatePrivateGraphEndpoint",
	];
	/** IAM actions required for the DeleteGraph API call. */
	static readonly DeleteGraph: string[] = ["neptune-graph:DeleteGraph"];
	/** IAM actions required for the DeleteGraphSnapshot API call. */
	static readonly DeleteGraphSnapshot: string[] = [
		"neptune-graph:DeleteGraphSnapshot",
	];
	/** IAM actions required for the DeletePrivateGraphEndpoint API call. */
	static readonly DeletePrivateGraphEndpoint: string[] = [
		"neptune-graph:DeletePrivateGraphEndpoint",
	];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly ExecuteQuery: string[] = [];
	/** IAM actions required for the GetExportTask API call. */
	static readonly opGetExportTask: string[] = ["neptune-graph:GetExportTask"];
	/** IAM actions required for the GetGraph API call. */
	static readonly opGetGraph: string[] = ["neptune-graph:GetGraph"];
	/** IAM actions required for the GetGraphSnapshot API call. */
	static readonly opGetGraphSnapshot: string[] = [
		"neptune-graph:GetGraphSnapshot",
	];
	/** IAM actions required for the GetGraphSummary API call. */
	static readonly opGetGraphSummary: string[] = [];
	/** IAM actions required for the GetImportTask API call. */
	static readonly opGetImportTask: string[] = ["neptune-graph:GetImportTask"];
	/** IAM actions required for the GetPrivateGraphEndpoint API call. */
	static readonly opGetPrivateGraphEndpoint: string[] = [
		"neptune-graph:GetPrivateGraphEndpoint",
	];
	/** IAM actions required for the GetQuery API call. */
	static readonly opGetQuery: string[] = [];
	/** IAM actions required for the ListExportTasks API call. */
	static readonly ListExportTasks: string[] = ["neptune-graph:ListExportTasks"];
	/** IAM actions required for the ListGraphSnapshots API call. */
	static readonly ListGraphSnapshots: string[] = [
		"neptune-graph:ListGraphSnapshots",
	];
	/** IAM actions required for the ListGraphs API call. */
	static readonly ListGraphs: string[] = ["neptune-graph:ListGraphs"];
	/** IAM actions required for the ListImportTasks API call. */
	static readonly ListImportTasks: string[] = ["neptune-graph:ListImportTasks"];
	/** IAM actions required for the ListPrivateGraphEndpoints API call. */
	static readonly ListPrivateGraphEndpoints: string[] = [
		"neptune-graph:ListPrivateGraphEndpoints",
	];
	/** IAM actions required for the ListQueries API call. */
	static readonly ListQueries: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"neptune-graph:ListTagsForResource",
	];
	/** IAM actions required for the ResetGraph API call. */
	static readonly ResetGraph: string[] = ["neptune-graph:ResetGraph"];
	/** IAM actions required for the RestoreGraphFromSnapshot API call. */
	static readonly RestoreGraphFromSnapshot: string[] = [
		"neptune-graph:RestoreGraphFromSnapshot",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly StartExportTask: string[] = [
		"iam:PassRole",
		"neptune-graph:StartExportTask",
		"neptune-graph:TagResource",
	];
	/** IAM actions required for the StartGraph API call. */
	static readonly StartGraph: string[] = ["neptune-graph:StartGraph"];
	/** IAM actions required for the StartImportTask API call. */
	static readonly StartImportTask: string[] = [
		"iam:PassRole",
		"neptune-graph:StartImportTask",
	];
	/** IAM actions required for the StopGraph API call. */
	static readonly StopGraph: string[] = ["neptune-graph:StopGraph"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["neptune-graph:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["neptune-graph:UntagResource"];
	/** IAM actions required for the UpdateGraph API call. */
	static readonly UpdateGraph: string[] = ["neptune-graph:UpdateGraph"];
}

/**
 * Condition key constants and builders for neptune-graph.
 */
export class NeptuneGraphConditions {
	/** Condition keys applicable to the CancelExportTask action. */
	static readonly CancelExportTaskConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CancelQuery action. */
	static readonly CancelQueryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateGraph action. */
	static readonly CreateGraphConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the CreateGraphSnapshot action. */
	static readonly CreateGraphSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGraphUsingImportTask action. */
	static readonly CreateGraphUsingImportTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the CreatePrivateGraphEndpoint action. */
	static readonly CreatePrivateGraphEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDataViaQuery action. */
	static readonly DeleteDataViaQueryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraph action. */
	static readonly DeleteGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteGraphSnapshot action. */
	static readonly DeleteGraphSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePrivateGraphEndpoint action. */
	static readonly DeletePrivateGraphEndpointConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEngineStatus action. */
	static readonly actionGetEngineStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExportTask action. */
	static readonly actionGetExportTaskConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraph action. */
	static readonly actionGetGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphSnapshot action. */
	static readonly actionGetGraphSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGraphSummary action. */
	static readonly actionGetGraphSummaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPrivateGraphEndpoint action. */
	static readonly actionGetPrivateGraphEndpointConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetQueryStatus action. */
	static readonly actionGetQueryStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetStatisticsStatus action. */
	static readonly actionGetStatisticsStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPrivateGraphEndpoints action. */
	static readonly ListPrivateGraphEndpointsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListQueries action. */
	static readonly ListQueriesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReadDataViaQuery action. */
	static readonly ReadDataViaQueryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ResetGraph action. */
	static readonly ResetGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreGraphFromSnapshot action. */
	static readonly RestoreGraphFromSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the StartExportTask action. */
	static readonly StartExportTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartGraph action. */
	static readonly StartGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopGraph action. */
	static readonly StopGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateGraph action. */
	static readonly UpdateGraphConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"neptune-graph:PublicConnectivity",
	];
	/** Condition keys applicable to the WriteDataViaQuery action. */
	static readonly WriteDataViaQueryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
