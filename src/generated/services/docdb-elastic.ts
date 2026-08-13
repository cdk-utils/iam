// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/docdb-elastic.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the docdb-elastic service.
 */
export class DocdbElasticActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "docdb-elastic";

	/** [Write] docdb-elastic:ApplyPendingMaintenanceAction */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION =
		"docdb-elastic:ApplyPendingMaintenanceAction";
	/** [Write] docdb-elastic:CopyClusterSnapshot */
	static readonly COPY_CLUSTER_SNAPSHOT = "docdb-elastic:CopyClusterSnapshot";
	/** [Write] docdb-elastic:CreateCluster */
	static readonly CREATE_CLUSTER = "docdb-elastic:CreateCluster";
	/** [Write] docdb-elastic:CreateClusterSnapshot */
	static readonly CREATE_CLUSTER_SNAPSHOT =
		"docdb-elastic:CreateClusterSnapshot";
	/** [Write] docdb-elastic:DeleteCluster */
	static readonly DELETE_CLUSTER = "docdb-elastic:DeleteCluster";
	/** [Write] docdb-elastic:DeleteClusterSnapshot */
	static readonly DELETE_CLUSTER_SNAPSHOT =
		"docdb-elastic:DeleteClusterSnapshot";
	/** [Read] docdb-elastic:GetCluster */
	static readonly GET_CLUSTER = "docdb-elastic:GetCluster";
	/** [Read] docdb-elastic:GetClusterSnapshot */
	static readonly GET_CLUSTER_SNAPSHOT = "docdb-elastic:GetClusterSnapshot";
	/** [Read] docdb-elastic:GetPendingMaintenanceAction */
	static readonly GET_PENDING_MAINTENANCE_ACTION =
		"docdb-elastic:GetPendingMaintenanceAction";
	/** [List] docdb-elastic:ListClusterSnapshots */
	static readonly LIST_CLUSTER_SNAPSHOTS = "docdb-elastic:ListClusterSnapshots";
	/** [List] docdb-elastic:ListClusters */
	static readonly LIST_CLUSTERS = "docdb-elastic:ListClusters";
	/** [List] docdb-elastic:ListPendingMaintenanceActions */
	static readonly LIST_PENDING_MAINTENANCE_ACTIONS =
		"docdb-elastic:ListPendingMaintenanceActions";
	/** [List] docdb-elastic:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "docdb-elastic:ListTagsForResource";
	/** [Write] docdb-elastic:RestoreClusterFromSnapshot */
	static readonly RESTORE_CLUSTER_FROM_SNAPSHOT =
		"docdb-elastic:RestoreClusterFromSnapshot";
	/** [Write] docdb-elastic:StartCluster */
	static readonly START_CLUSTER = "docdb-elastic:StartCluster";
	/** [Write] docdb-elastic:StopCluster */
	static readonly STOP_CLUSTER = "docdb-elastic:StopCluster";
	/** [Tagging] docdb-elastic:TagResource */
	static readonly TAG_RESOURCE = "docdb-elastic:TagResource";
	/** [Tagging] docdb-elastic:UntagResource */
	static readonly UNTAG_RESOURCE = "docdb-elastic:UntagResource";
	/** [Write] docdb-elastic:UpdateCluster */
	static readonly UPDATE_CLUSTER = "docdb-elastic:UpdateCluster";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DocdbElasticActions.GET_CLUSTER,
		DocdbElasticActions.GET_CLUSTER_SNAPSHOT,
		DocdbElasticActions.GET_PENDING_MAINTENANCE_ACTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DocdbElasticActions.APPLY_PENDING_MAINTENANCE_ACTION,
		DocdbElasticActions.COPY_CLUSTER_SNAPSHOT,
		DocdbElasticActions.CREATE_CLUSTER,
		DocdbElasticActions.CREATE_CLUSTER_SNAPSHOT,
		DocdbElasticActions.DELETE_CLUSTER,
		DocdbElasticActions.DELETE_CLUSTER_SNAPSHOT,
		DocdbElasticActions.RESTORE_CLUSTER_FROM_SNAPSHOT,
		DocdbElasticActions.START_CLUSTER,
		DocdbElasticActions.STOP_CLUSTER,
		DocdbElasticActions.UPDATE_CLUSTER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DocdbElasticActions.LIST_CLUSTER_SNAPSHOTS,
		DocdbElasticActions.LIST_CLUSTERS,
		DocdbElasticActions.LIST_PENDING_MAINTENANCE_ACTIONS,
		DocdbElasticActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DocdbElasticActions.TAG_RESOURCE,
		DocdbElasticActions.UNTAG_RESOURCE,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):docdb-elastic:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<resourceId>[^:/?]+)$",
);
const ClusterSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):docdb-elastic:(?<region>[^:]*):(?<account>[^:]*):cluster-snapshot/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for docdb-elastic resources.
 */
export class DocdbElasticResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:docdb-elastic:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the cluster-snapshot resource.
	 */
	static clusterSnapshot(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:docdb-elastic:${props.region ?? "*"}:${props.account ?? "*"}:cluster-snapshot/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-snapshot resource.
	 */
	static isValidClusterSnapshotArn(arn: string): boolean {
		return ClusterSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ClusterSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-snapshot ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for docdb-elastic.
 */
export class DocdbElasticOperations {
	/** IAM actions required for the ApplyPendingMaintenanceAction API call. */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION: string[] = [
		"docdb-elastic:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the CopyClusterSnapshot API call. */
	static readonly COPY_CLUSTER_SNAPSHOT: string[] = [
		"docdb-elastic:CopyClusterSnapshot",
		"docdb-elastic:CreateClusterSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"docdb-elastic:CreateCluster",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the CreateClusterSnapshot API call. */
	static readonly CREATE_CLUSTER_SNAPSHOT: string[] = [
		"docdb-elastic:CreateClusterSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["docdb-elastic:DeleteCluster"];
	/** IAM actions required for the DeleteClusterSnapshot API call. */
	static readonly DELETE_CLUSTER_SNAPSHOT: string[] = [
		"docdb-elastic:DeleteClusterSnapshot",
	];
	/** IAM actions required for the GetCluster API call. */
	static readonly GET_CLUSTER: string[] = ["docdb-elastic:GetCluster"];
	/** IAM actions required for the GetClusterSnapshot API call. */
	static readonly GET_CLUSTER_SNAPSHOT: string[] = [
		"docdb-elastic:GetClusterSnapshot",
	];
	/** IAM actions required for the GetPendingMaintenanceAction API call. */
	static readonly GET_PENDING_MAINTENANCE_ACTION: string[] = [
		"docdb-elastic:GetPendingMaintenanceAction",
	];
	/** IAM actions required for the ListClusterSnapshots API call. */
	static readonly LIST_CLUSTER_SNAPSHOTS: string[] = [
		"docdb-elastic:ListClusterSnapshots",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["docdb-elastic:ListClusters"];
	/** IAM actions required for the ListPendingMaintenanceActions API call. */
	static readonly LIST_PENDING_MAINTENANCE_ACTIONS: string[] = [
		"docdb-elastic:ListPendingMaintenanceActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"docdb-elastic:ListTagsForResource",
	];
	/** IAM actions required for the RestoreClusterFromSnapshot API call. */
	static readonly RESTORE_CLUSTER_FROM_SNAPSHOT: string[] = [
		"docdb-elastic:CreateCluster",
		"docdb-elastic:RestoreClusterFromSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the StartCluster API call. */
	static readonly START_CLUSTER: string[] = ["docdb-elastic:StartCluster"];
	/** IAM actions required for the StopCluster API call. */
	static readonly STOP_CLUSTER: string[] = ["docdb-elastic:StopCluster"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["docdb-elastic:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["docdb-elastic:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["docdb-elastic:UpdateCluster"];
}

/**
 * Condition key constants and builders for docdb-elastic.
 */
export class DocdbElasticConditions {
	/** Condition keys applicable to the ApplyPendingMaintenanceAction action. */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyClusterSnapshot action. */
	static readonly COPY_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSnapshot action. */
	static readonly CREATE_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCluster action. */
	static readonly DELETE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteClusterSnapshot action. */
	static readonly DELETE_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCluster action. */
	static readonly GET_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetClusterSnapshot action. */
	static readonly GET_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPendingMaintenanceAction action. */
	static readonly GET_PENDING_MAINTENANCE_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPendingMaintenanceActions action. */
	static readonly LIST_PENDING_MAINTENANCE_ACTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreClusterFromSnapshot action. */
	static readonly RESTORE_CLUSTER_FROM_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCluster action. */
	static readonly START_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopCluster action. */
	static readonly STOP_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
