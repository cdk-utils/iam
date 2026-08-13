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
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"pcs:AllowVendedLogDeliveryForResource";
	/** [Write] pcs:CreateCluster */
	static readonly CREATE_CLUSTER = "pcs:CreateCluster";
	/** [Write] pcs:CreateComputeNodeGroup */
	static readonly CREATE_COMPUTE_NODE_GROUP = "pcs:CreateComputeNodeGroup";
	/** [Write] pcs:CreateQueue */
	static readonly CREATE_QUEUE = "pcs:CreateQueue";
	/** [Write] pcs:DeleteCluster */
	static readonly DELETE_CLUSTER = "pcs:DeleteCluster";
	/** [Write] pcs:DeleteComputeNodeGroup */
	static readonly DELETE_COMPUTE_NODE_GROUP = "pcs:DeleteComputeNodeGroup";
	/** [Write] pcs:DeleteQueue */
	static readonly DELETE_QUEUE = "pcs:DeleteQueue";
	/** [Read] pcs:GetCluster */
	static readonly GET_CLUSTER = "pcs:GetCluster";
	/** [Read] pcs:GetComputeNodeGroup */
	static readonly GET_COMPUTE_NODE_GROUP = "pcs:GetComputeNodeGroup";
	/** [Read] pcs:GetQueue */
	static readonly GET_QUEUE = "pcs:GetQueue";
	/** [List] pcs:ListClusters */
	static readonly LIST_CLUSTERS = "pcs:ListClusters";
	/** [List] pcs:ListComputeNodeGroups */
	static readonly LIST_COMPUTE_NODE_GROUPS = "pcs:ListComputeNodeGroups";
	/** [List] pcs:ListQueues */
	static readonly LIST_QUEUES = "pcs:ListQueues";
	/** [Read] pcs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "pcs:ListTagsForResource";
	/** [Write] pcs:RegisterComputeNodeGroupInstance */
	static readonly REGISTER_COMPUTE_NODE_GROUP_INSTANCE =
		"pcs:RegisterComputeNodeGroupInstance";
	/** [Tagging] pcs:TagResource */
	static readonly TAG_RESOURCE = "pcs:TagResource";
	/** [Tagging] pcs:UntagResource */
	static readonly UNTAG_RESOURCE = "pcs:UntagResource";
	/** [Write] pcs:UpdateCluster */
	static readonly UPDATE_CLUSTER = "pcs:UpdateCluster";
	/** [Write] pcs:UpdateComputeNodeGroup */
	static readonly UPDATE_COMPUTE_NODE_GROUP = "pcs:UpdateComputeNodeGroup";
	/** [Write] pcs:UpdateQueue */
	static readonly UPDATE_QUEUE = "pcs:UpdateQueue";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PcsActions.GET_CLUSTER,
		PcsActions.GET_COMPUTE_NODE_GROUP,
		PcsActions.GET_QUEUE,
		PcsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PcsActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		PcsActions.CREATE_CLUSTER,
		PcsActions.CREATE_COMPUTE_NODE_GROUP,
		PcsActions.CREATE_QUEUE,
		PcsActions.DELETE_CLUSTER,
		PcsActions.DELETE_COMPUTE_NODE_GROUP,
		PcsActions.DELETE_QUEUE,
		PcsActions.REGISTER_COMPUTE_NODE_GROUP_INSTANCE,
		PcsActions.UPDATE_CLUSTER,
		PcsActions.UPDATE_COMPUTE_NODE_GROUP,
		PcsActions.UPDATE_QUEUE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PcsActions.LIST_CLUSTERS,
		PcsActions.LIST_COMPUTE_NODE_GROUPS,
		PcsActions.LIST_QUEUES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PcsActions.TAG_RESOURCE,
		PcsActions.UNTAG_RESOURCE,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterIdentifier>[^:/?]+)$",
);
const ComputenodegroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterIdentifier>[^:/?]+)/computenodegroup/(?<computeNodeGroupIdentifier>[^:/?]+)$",
);
const QueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pcs:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterIdentifier>[^:/?]+)/queue/(?<queueIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pcs resources.
 */
export class PcsResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterIdentifier component of the ARN. */
		readonly clusterIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterIdentifier: string;
	} {
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
	static computenodegroup(props: {
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
	}): string {
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
	static parseComputenodegroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterIdentifier: string;
		computeNodeGroupIdentifier: string;
	} {
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
	static queue(props: {
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
	}): string {
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
	static parseQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterIdentifier: string;
		queueIdentifier: string;
	} {
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
	static readonly CREATE_CLUSTER: string[] = [
		"pcs:CreateCluster",
		"pcs:TagResource",
	];
	/** IAM actions required for the CreateComputeNodeGroup API call. */
	static readonly CREATE_COMPUTE_NODE_GROUP: string[] = [
		"pcs:CreateComputeNodeGroup",
		"iam:PassRole",
		"pcs:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CREATE_QUEUE: string[] = [
		"pcs:CreateQueue",
		"pcs:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["pcs:DeleteCluster"];
	/** IAM actions required for the DeleteComputeNodeGroup API call. */
	static readonly DELETE_COMPUTE_NODE_GROUP: string[] = [
		"pcs:DeleteComputeNodeGroup",
	];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DELETE_QUEUE: string[] = ["pcs:DeleteQueue"];
	/** IAM actions required for the GetCluster API call. */
	static readonly GET_CLUSTER: string[] = ["pcs:GetCluster"];
	/** IAM actions required for the GetComputeNodeGroup API call. */
	static readonly GET_COMPUTE_NODE_GROUP: string[] = [
		"pcs:GetComputeNodeGroup",
	];
	/** IAM actions required for the GetQueue API call. */
	static readonly GET_QUEUE: string[] = ["pcs:GetQueue"];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["pcs:ListClusters"];
	/** IAM actions required for the ListComputeNodeGroups API call. */
	static readonly LIST_COMPUTE_NODE_GROUPS: string[] = [
		"pcs:ListComputeNodeGroups",
	];
	/** IAM actions required for the ListQueues API call. */
	static readonly LIST_QUEUES: string[] = ["pcs:ListQueues"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"pcs:ListTagsForResource",
	];
	/** IAM actions required for the RegisterComputeNodeGroupInstance API call. */
	static readonly REGISTER_COMPUTE_NODE_GROUP_INSTANCE: string[] = [
		"pcs:RegisterComputeNodeGroupInstance",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["pcs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["pcs:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["pcs:UpdateCluster"];
	/** IAM actions required for the UpdateComputeNodeGroup API call. */
	static readonly UPDATE_COMPUTE_NODE_GROUP: string[] = [
		"iam:PassRole",
		"pcs:UpdateComputeNodeGroup",
	];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UPDATE_QUEUE: string[] = ["pcs:UpdateQueue"];
}

/**
 * Condition key constants and builders for pcs.
 */
export class PcsConditions {
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputeNodeGroup action. */
	static readonly CREATE_COMPUTE_NODE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CREATE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
