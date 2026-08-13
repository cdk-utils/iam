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
	static readonly ApplyPendingMaintenanceAction =
		"docdb-elastic:ApplyPendingMaintenanceAction";
	/** [Write] docdb-elastic:CopyClusterSnapshot */
	static readonly CopyClusterSnapshot = "docdb-elastic:CopyClusterSnapshot";
	/** [Write] docdb-elastic:CreateCluster */
	static readonly CreateCluster = "docdb-elastic:CreateCluster";
	/** [Write] docdb-elastic:CreateClusterSnapshot */
	static readonly CreateClusterSnapshot = "docdb-elastic:CreateClusterSnapshot";
	/** [Write] docdb-elastic:DeleteCluster */
	static readonly DeleteCluster = "docdb-elastic:DeleteCluster";
	/** [Write] docdb-elastic:DeleteClusterSnapshot */
	static readonly DeleteClusterSnapshot = "docdb-elastic:DeleteClusterSnapshot";
	/** [Read] docdb-elastic:GetCluster */
	static readonly actionGetCluster = "docdb-elastic:GetCluster";
	/** [Read] docdb-elastic:GetClusterSnapshot */
	static readonly actionGetClusterSnapshot = "docdb-elastic:GetClusterSnapshot";
	/** [Read] docdb-elastic:GetPendingMaintenanceAction */
	static readonly actionGetPendingMaintenanceAction =
		"docdb-elastic:GetPendingMaintenanceAction";
	/** [List] docdb-elastic:ListClusterSnapshots */
	static readonly ListClusterSnapshots = "docdb-elastic:ListClusterSnapshots";
	/** [List] docdb-elastic:ListClusters */
	static readonly ListClusters = "docdb-elastic:ListClusters";
	/** [List] docdb-elastic:ListPendingMaintenanceActions */
	static readonly ListPendingMaintenanceActions =
		"docdb-elastic:ListPendingMaintenanceActions";
	/** [List] docdb-elastic:ListTagsForResource */
	static readonly ListTagsForResource = "docdb-elastic:ListTagsForResource";
	/** [Write] docdb-elastic:RestoreClusterFromSnapshot */
	static readonly RestoreClusterFromSnapshot =
		"docdb-elastic:RestoreClusterFromSnapshot";
	/** [Write] docdb-elastic:StartCluster */
	static readonly StartCluster = "docdb-elastic:StartCluster";
	/** [Write] docdb-elastic:StopCluster */
	static readonly StopCluster = "docdb-elastic:StopCluster";
	/** [Tagging] docdb-elastic:TagResource */
	static readonly TagResource = "docdb-elastic:TagResource";
	/** [Tagging] docdb-elastic:UntagResource */
	static readonly UntagResource = "docdb-elastic:UntagResource";
	/** [Write] docdb-elastic:UpdateCluster */
	static readonly UpdateCluster = "docdb-elastic:UpdateCluster";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DocdbElasticActions.actionGetCluster,
		DocdbElasticActions.actionGetClusterSnapshot,
		DocdbElasticActions.actionGetPendingMaintenanceAction,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DocdbElasticActions.ApplyPendingMaintenanceAction,
		DocdbElasticActions.CopyClusterSnapshot,
		DocdbElasticActions.CreateCluster,
		DocdbElasticActions.CreateClusterSnapshot,
		DocdbElasticActions.DeleteCluster,
		DocdbElasticActions.DeleteClusterSnapshot,
		DocdbElasticActions.RestoreClusterFromSnapshot,
		DocdbElasticActions.StartCluster,
		DocdbElasticActions.StopCluster,
		DocdbElasticActions.UpdateCluster,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DocdbElasticActions.ListClusterSnapshots,
		DocdbElasticActions.ListClusters,
		DocdbElasticActions.ListPendingMaintenanceActions,
		DocdbElasticActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DocdbElasticActions.TagResource,
		DocdbElasticActions.UntagResource,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface DocdbElasticClusterArnProps {
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
 * Parsed components of a cluster ARN.
 */
export interface DocdbElasticClusterArnComponents {
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
 * Properties for building a cluster-snapshot ARN.
 */
export interface DocdbElasticClusterSnapshotArnProps {
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
 * Parsed components of a cluster-snapshot ARN.
 */
export interface DocdbElasticClusterSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):docdb-elastic:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<resourceId>[^:/?]+)$/;
const ClusterSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):docdb-elastic:(?<region>[^:]*):(?<account>[^:]*):cluster-snapshot\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for docdb-elastic resources.
 */
export class DocdbElasticResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: DocdbElasticClusterArnProps): string {
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
	static parseClusterArn(arn: string): DocdbElasticClusterArnComponents {
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
	static clusterSnapshot(props: DocdbElasticClusterSnapshotArnProps): string {
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
	static parseClusterSnapshotArn(
		arn: string,
	): DocdbElasticClusterSnapshotArnComponents {
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
	static readonly ApplyPendingMaintenanceAction: string[] = [
		"docdb-elastic:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the CopyClusterSnapshot API call. */
	static readonly CopyClusterSnapshot: string[] = [
		"docdb-elastic:CopyClusterSnapshot",
		"docdb-elastic:CreateClusterSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"docdb-elastic:CreateCluster",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the CreateClusterSnapshot API call. */
	static readonly CreateClusterSnapshot: string[] = [
		"docdb-elastic:CreateClusterSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["docdb-elastic:DeleteCluster"];
	/** IAM actions required for the DeleteClusterSnapshot API call. */
	static readonly DeleteClusterSnapshot: string[] = [
		"docdb-elastic:DeleteClusterSnapshot",
	];
	/** IAM actions required for the GetCluster API call. */
	static readonly opGetCluster: string[] = ["docdb-elastic:GetCluster"];
	/** IAM actions required for the GetClusterSnapshot API call. */
	static readonly opGetClusterSnapshot: string[] = [
		"docdb-elastic:GetClusterSnapshot",
	];
	/** IAM actions required for the GetPendingMaintenanceAction API call. */
	static readonly opGetPendingMaintenanceAction: string[] = [
		"docdb-elastic:GetPendingMaintenanceAction",
	];
	/** IAM actions required for the ListClusterSnapshots API call. */
	static readonly ListClusterSnapshots: string[] = [
		"docdb-elastic:ListClusterSnapshots",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["docdb-elastic:ListClusters"];
	/** IAM actions required for the ListPendingMaintenanceActions API call. */
	static readonly ListPendingMaintenanceActions: string[] = [
		"docdb-elastic:ListPendingMaintenanceActions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"docdb-elastic:ListTagsForResource",
	];
	/** IAM actions required for the RestoreClusterFromSnapshot API call. */
	static readonly RestoreClusterFromSnapshot: string[] = [
		"docdb-elastic:CreateCluster",
		"docdb-elastic:RestoreClusterFromSnapshot",
		"docdb-elastic:TagResource",
	];
	/** IAM actions required for the StartCluster API call. */
	static readonly StartCluster: string[] = ["docdb-elastic:StartCluster"];
	/** IAM actions required for the StopCluster API call. */
	static readonly StopCluster: string[] = ["docdb-elastic:StopCluster"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["docdb-elastic:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["docdb-elastic:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = ["docdb-elastic:UpdateCluster"];
}

/**
 * Condition key constants and builders for docdb-elastic.
 */
export class DocdbElasticConditions {
	/** Condition keys applicable to the ApplyPendingMaintenanceAction action. */
	static readonly ApplyPendingMaintenanceActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyClusterSnapshot action. */
	static readonly CopyClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSnapshot action. */
	static readonly CreateClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCluster action. */
	static readonly DeleteClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteClusterSnapshot action. */
	static readonly DeleteClusterSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCluster action. */
	static readonly actionGetClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetClusterSnapshot action. */
	static readonly actionGetClusterSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPendingMaintenanceAction action. */
	static readonly actionGetPendingMaintenanceActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPendingMaintenanceActions action. */
	static readonly ListPendingMaintenanceActionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreClusterFromSnapshot action. */
	static readonly RestoreClusterFromSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCluster action. */
	static readonly StartClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopCluster action. */
	static readonly StopClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UpdateClusterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
