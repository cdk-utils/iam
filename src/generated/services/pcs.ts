// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pcs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pcs service.
 */
export class PcsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pcs";

	/** [Write] pcs:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"pcs:AllowVendedLogDeliveryForResource";
	/** [Write] pcs:CreateCluster */
	static readonly CreateCluster = "pcs:CreateCluster";
	/** [Write] pcs:CreateComputeNodeGroup */
	static readonly CreateComputeNodeGroup = "pcs:CreateComputeNodeGroup";
	/** [Write] pcs:CreateQueue */
	static readonly CreateQueue = "pcs:CreateQueue";
	/** [Write] pcs:DeleteCluster */
	static readonly DeleteCluster = "pcs:DeleteCluster";
	/** [Write] pcs:DeleteComputeNodeGroup */
	static readonly DeleteComputeNodeGroup = "pcs:DeleteComputeNodeGroup";
	/** [Write] pcs:DeleteQueue */
	static readonly DeleteQueue = "pcs:DeleteQueue";
	/** [Read] pcs:GetCluster */
	static readonly actionGetCluster = "pcs:GetCluster";
	/** [Read] pcs:GetComputeNodeGroup */
	static readonly actionGetComputeNodeGroup = "pcs:GetComputeNodeGroup";
	/** [Read] pcs:GetQueue */
	static readonly actionGetQueue = "pcs:GetQueue";
	/** [List] pcs:ListClusters */
	static readonly ListClusters = "pcs:ListClusters";
	/** [List] pcs:ListComputeNodeGroups */
	static readonly ListComputeNodeGroups = "pcs:ListComputeNodeGroups";
	/** [List] pcs:ListQueues */
	static readonly ListQueues = "pcs:ListQueues";
	/** [Read] pcs:ListTagsForResource */
	static readonly ListTagsForResource = "pcs:ListTagsForResource";
	/** [Write] pcs:RegisterComputeNodeGroupInstance */
	static readonly RegisterComputeNodeGroupInstance =
		"pcs:RegisterComputeNodeGroupInstance";
	/** [Tagging] pcs:TagResource */
	static readonly TagResource = "pcs:TagResource";
	/** [Tagging] pcs:UntagResource */
	static readonly UntagResource = "pcs:UntagResource";
	/** [Write] pcs:UpdateCluster */
	static readonly UpdateCluster = "pcs:UpdateCluster";
	/** [Write] pcs:UpdateComputeNodeGroup */
	static readonly UpdateComputeNodeGroup = "pcs:UpdateComputeNodeGroup";
	/** [Write] pcs:UpdateQueue */
	static readonly UpdateQueue = "pcs:UpdateQueue";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PcsActions.actionGetCluster,
		PcsActions.actionGetComputeNodeGroup,
		PcsActions.actionGetQueue,
		PcsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PcsActions.AllowVendedLogDeliveryForResource,
		PcsActions.CreateCluster,
		PcsActions.CreateComputeNodeGroup,
		PcsActions.CreateQueue,
		PcsActions.DeleteCluster,
		PcsActions.DeleteComputeNodeGroup,
		PcsActions.DeleteQueue,
		PcsActions.RegisterComputeNodeGroupInstance,
		PcsActions.UpdateCluster,
		PcsActions.UpdateComputeNodeGroup,
		PcsActions.UpdateQueue,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PcsActions.ListClusters,
		PcsActions.ListComputeNodeGroups,
		PcsActions.ListQueues,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PcsActions.TagResource,
		PcsActions.UntagResource,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface PcsClusterArnProps {
	/** The ClusterIdentifier component of the ARN. */
	readonly clusterIdentifier: string;
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
export interface PcsClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterIdentifier component. */
	readonly clusterIdentifier: string;
}

/**
 * Properties for building a computenodegroup ARN.
 */
export interface PcsComputenodegroupArnProps {
	/** The ClusterIdentifier component of the ARN. */
	readonly clusterIdentifier: string;
	/** The ComputeNodeGroupIdentifier component of the ARN. */
	readonly computeNodeGroupIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a computenodegroup ARN.
 */
export interface PcsComputenodegroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterIdentifier component. */
	readonly clusterIdentifier: string;
	/** The ComputeNodeGroupIdentifier component. */
	readonly computeNodeGroupIdentifier: string;
}

/**
 * Properties for building a queue ARN.
 */
export interface PcsQueueArnProps {
	/** The ClusterIdentifier component of the ARN. */
	readonly clusterIdentifier: string;
	/** The QueueIdentifier component of the ARN. */
	readonly queueIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a queue ARN.
 */
export interface PcsQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterIdentifier component. */
	readonly clusterIdentifier: string;
	/** The QueueIdentifier component. */
	readonly queueIdentifier: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterIdentifier>[^:/?]+)$/;
const ComputenodegroupArnRegex =
	/^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterIdentifier>[^:/?]+)\/computenodegroup\/(?<computeNodeGroupIdentifier>[^:/?]+)$/;
const QueueArnRegex =
	/^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterIdentifier>[^:/?]+)\/queue\/(?<queueIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pcs resources.
 */
export class PcsResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: PcsClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:pcs:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterIdentifier}`;
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
	static parseClusterArn(arn: string): PcsClusterArnComponents {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterIdentifier: match.groups!.clusterIdentifier,
		};
	}

	/**
	 * Builds an ARN for the computenodegroup resource.
	 */
	static computenodegroup(props: PcsComputenodegroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:pcs:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterIdentifier}/computenodegroup/${props.computeNodeGroupIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the computenodegroup resource.
	 */
	static isValidComputenodegroupArn(arn: string): boolean {
		return ComputenodegroupArnRegex.test(arn);
	}

	/**
	 * Parses a computenodegroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComputenodegroupArn(
		arn: string,
	): PcsComputenodegroupArnComponents {
		const match = ComputenodegroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid computenodegroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterIdentifier: match.groups!.clusterIdentifier,
			computeNodeGroupIdentifier: match.groups!.computeNodeGroupIdentifier,
		};
	}

	/**
	 * Builds an ARN for the queue resource.
	 */
	static queue(props: PcsQueueArnProps): string {
		return `arn:${props.partition ?? "aws"}:pcs:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterIdentifier}/queue/${props.queueIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the queue resource.
	 */
	static isValidQueueArn(arn: string): boolean {
		return QueueArnRegex.test(arn);
	}

	/**
	 * Parses a queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueueArn(arn: string): PcsQueueArnComponents {
		const match = QueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterIdentifier: match.groups!.clusterIdentifier,
			queueIdentifier: match.groups!.queueIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pcs.
 */
export class PcsOperations {
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"pcs:CreateCluster",
		"pcs:TagResource",
	];
	/** IAM actions required for the CreateComputeNodeGroup API call. */
	static readonly CreateComputeNodeGroup: string[] = [
		"pcs:CreateComputeNodeGroup",
		"iam:PassRole",
		"pcs:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CreateQueue: string[] = [
		"pcs:CreateQueue",
		"pcs:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["pcs:DeleteCluster"];
	/** IAM actions required for the DeleteComputeNodeGroup API call. */
	static readonly DeleteComputeNodeGroup: string[] = [
		"pcs:DeleteComputeNodeGroup",
	];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DeleteQueue: string[] = ["pcs:DeleteQueue"];
	/** IAM actions required for the GetCluster API call. */
	static readonly opGetCluster: string[] = ["pcs:GetCluster"];
	/** IAM actions required for the GetComputeNodeGroup API call. */
	static readonly opGetComputeNodeGroup: string[] = ["pcs:GetComputeNodeGroup"];
	/** IAM actions required for the GetQueue API call. */
	static readonly opGetQueue: string[] = ["pcs:GetQueue"];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["pcs:ListClusters"];
	/** IAM actions required for the ListComputeNodeGroups API call. */
	static readonly ListComputeNodeGroups: string[] = [
		"pcs:ListComputeNodeGroups",
	];
	/** IAM actions required for the ListQueues API call. */
	static readonly ListQueues: string[] = ["pcs:ListQueues"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["pcs:ListTagsForResource"];
	/** IAM actions required for the RegisterComputeNodeGroupInstance API call. */
	static readonly RegisterComputeNodeGroupInstance: string[] = [
		"pcs:RegisterComputeNodeGroupInstance",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["pcs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["pcs:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = ["pcs:UpdateCluster"];
	/** IAM actions required for the UpdateComputeNodeGroup API call. */
	static readonly UpdateComputeNodeGroup: string[] = [
		"iam:PassRole",
		"pcs:UpdateComputeNodeGroup",
	];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UpdateQueue: string[] = ["pcs:UpdateQueue"];
}

/**
 * Condition key constants and builders for pcs.
 */
export class PcsConditions {
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputeNodeGroup action. */
	static readonly CreateComputeNodeGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CreateQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
