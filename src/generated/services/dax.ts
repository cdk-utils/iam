// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dax.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dax service.
 */
export class DaxActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dax";

	/** [Read] dax:BatchGetItem */
	static readonly BATCH_GET_ITEM = "dax:BatchGetItem";
	/** [Write] dax:BatchWriteItem */
	static readonly BATCH_WRITE_ITEM = "dax:BatchWriteItem";
	/** [Read] dax:ConditionCheckItem */
	static readonly CONDITION_CHECK_ITEM = "dax:ConditionCheckItem";
	/** [Write] dax:CreateCluster */
	static readonly CREATE_CLUSTER = "dax:CreateCluster";
	/** [Write] dax:CreateParameterGroup */
	static readonly CREATE_PARAMETER_GROUP = "dax:CreateParameterGroup";
	/** [Write] dax:CreateSubnetGroup */
	static readonly CREATE_SUBNET_GROUP = "dax:CreateSubnetGroup";
	/** [Write] dax:DecreaseReplicationFactor */
	static readonly DECREASE_REPLICATION_FACTOR = "dax:DecreaseReplicationFactor";
	/** [Write] dax:DeleteCluster */
	static readonly DELETE_CLUSTER = "dax:DeleteCluster";
	/** [Write] dax:DeleteItem */
	static readonly DELETE_ITEM = "dax:DeleteItem";
	/** [Write] dax:DeleteParameterGroup */
	static readonly DELETE_PARAMETER_GROUP = "dax:DeleteParameterGroup";
	/** [Write] dax:DeleteSubnetGroup */
	static readonly DELETE_SUBNET_GROUP = "dax:DeleteSubnetGroup";
	/** [List] dax:DescribeClusters */
	static readonly DESCRIBE_CLUSTERS = "dax:DescribeClusters";
	/** [List] dax:DescribeDefaultParameters */
	static readonly DESCRIBE_DEFAULT_PARAMETERS = "dax:DescribeDefaultParameters";
	/** [List] dax:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "dax:DescribeEvents";
	/** [List] dax:DescribeParameterGroups */
	static readonly DESCRIBE_PARAMETER_GROUPS = "dax:DescribeParameterGroups";
	/** [Read] dax:DescribeParameters */
	static readonly DESCRIBE_PARAMETERS = "dax:DescribeParameters";
	/** [List] dax:DescribeSubnetGroups */
	static readonly DESCRIBE_SUBNET_GROUPS = "dax:DescribeSubnetGroups";
	/** [Read] dax:GetItem */
	static readonly GET_ITEM = "dax:GetItem";
	/** [Write] dax:IncreaseReplicationFactor */
	static readonly INCREASE_REPLICATION_FACTOR = "dax:IncreaseReplicationFactor";
	/** [Read] dax:ListTags */
	static readonly LIST_TAGS = "dax:ListTags";
	/** [Write] dax:PutItem */
	static readonly PUT_ITEM = "dax:PutItem";
	/** [Read] dax:Query */
	static readonly QUERY = "dax:Query";
	/** [Write] dax:RebootNode */
	static readonly REBOOT_NODE = "dax:RebootNode";
	/** [Read] dax:Scan */
	static readonly SCAN = "dax:Scan";
	/** [Tagging] dax:TagResource */
	static readonly TAG_RESOURCE = "dax:TagResource";
	/** [Tagging] dax:UntagResource */
	static readonly UNTAG_RESOURCE = "dax:UntagResource";
	/** [Write] dax:UpdateCluster */
	static readonly UPDATE_CLUSTER = "dax:UpdateCluster";
	/** [Write] dax:UpdateItem */
	static readonly UPDATE_ITEM = "dax:UpdateItem";
	/** [Write] dax:UpdateParameterGroup */
	static readonly UPDATE_PARAMETER_GROUP = "dax:UpdateParameterGroup";
	/** [Write] dax:UpdateSubnetGroup */
	static readonly UPDATE_SUBNET_GROUP = "dax:UpdateSubnetGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DaxActions.BATCH_GET_ITEM,
		DaxActions.CONDITION_CHECK_ITEM,
		DaxActions.DESCRIBE_PARAMETERS,
		DaxActions.GET_ITEM,
		DaxActions.LIST_TAGS,
		DaxActions.QUERY,
		DaxActions.SCAN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DaxActions.BATCH_WRITE_ITEM,
		DaxActions.CREATE_CLUSTER,
		DaxActions.CREATE_PARAMETER_GROUP,
		DaxActions.CREATE_SUBNET_GROUP,
		DaxActions.DECREASE_REPLICATION_FACTOR,
		DaxActions.DELETE_CLUSTER,
		DaxActions.DELETE_ITEM,
		DaxActions.DELETE_PARAMETER_GROUP,
		DaxActions.DELETE_SUBNET_GROUP,
		DaxActions.INCREASE_REPLICATION_FACTOR,
		DaxActions.PUT_ITEM,
		DaxActions.REBOOT_NODE,
		DaxActions.UPDATE_CLUSTER,
		DaxActions.UPDATE_ITEM,
		DaxActions.UPDATE_PARAMETER_GROUP,
		DaxActions.UPDATE_SUBNET_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DaxActions.DESCRIBE_CLUSTERS,
		DaxActions.DESCRIBE_DEFAULT_PARAMETERS,
		DaxActions.DESCRIBE_EVENTS,
		DaxActions.DESCRIBE_PARAMETER_GROUPS,
		DaxActions.DESCRIBE_SUBNET_GROUPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DaxActions.TAG_RESOURCE,
		DaxActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dax:(?<region>[^:]*):(?<account>[^:]*):cache/(?<clusterName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for dax resources.
 */
export class DaxResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dax:${props.region ?? "*"}:${props.account ?? "*"}:cache/${props.clusterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dax.
 */
export class DaxOperations {
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"dax:CreateCluster",
		"iam:PassRole",
		"dax:TagResource",
	];
	/** IAM actions required for the CreateParameterGroup API call. */
	static readonly CREATE_PARAMETER_GROUP: string[] = [
		"dax:CreateParameterGroup",
	];
	/** IAM actions required for the CreateSubnetGroup API call. */
	static readonly CREATE_SUBNET_GROUP: string[] = ["dax:CreateSubnetGroup"];
	/** IAM actions required for the DecreaseReplicationFactor API call. */
	static readonly DECREASE_REPLICATION_FACTOR: string[] = [
		"dax:DecreaseReplicationFactor",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["dax:DeleteCluster"];
	/** IAM actions required for the DeleteParameterGroup API call. */
	static readonly DELETE_PARAMETER_GROUP: string[] = [
		"dax:DeleteParameterGroup",
	];
	/** IAM actions required for the DeleteSubnetGroup API call. */
	static readonly DELETE_SUBNET_GROUP: string[] = ["dax:DeleteSubnetGroup"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DESCRIBE_CLUSTERS: string[] = ["dax:DescribeClusters"];
	/** IAM actions required for the DescribeDefaultParameters API call. */
	static readonly DESCRIBE_DEFAULT_PARAMETERS: string[] = [
		"dax:DescribeDefaultParameters",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["dax:DescribeEvents"];
	/** IAM actions required for the DescribeParameterGroups API call. */
	static readonly DESCRIBE_PARAMETER_GROUPS: string[] = [
		"dax:DescribeParameterGroups",
	];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DESCRIBE_PARAMETERS: string[] = ["dax:DescribeParameters"];
	/** IAM actions required for the DescribeSubnetGroups API call. */
	static readonly DESCRIBE_SUBNET_GROUPS: string[] = [
		"dax:DescribeSubnetGroups",
	];
	/** IAM actions required for the IncreaseReplicationFactor API call. */
	static readonly INCREASE_REPLICATION_FACTOR: string[] = [
		"dax:IncreaseReplicationFactor",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["dax:ListTags"];
	/** IAM actions required for the RebootNode API call. */
	static readonly REBOOT_NODE: string[] = ["dax:RebootNode"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["dax:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["dax:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["dax:UpdateCluster"];
	/** IAM actions required for the UpdateParameterGroup API call. */
	static readonly UPDATE_PARAMETER_GROUP: string[] = [
		"dax:UpdateParameterGroup",
	];
	/** IAM actions required for the UpdateSubnetGroup API call. */
	static readonly UPDATE_SUBNET_GROUP: string[] = ["dax:UpdateSubnetGroup"];
}

/**
 * Condition key constants and builders for dax.
 */
export class DaxConditions {
	/** Condition keys applicable to the DeleteItem action. */
	static readonly DELETE_ITEM_CONDITION_KEYS: string[] = [
		"dax:EnclosingOperation",
	];
	/** Condition keys applicable to the GetItem action. */
	static readonly GET_ITEM_CONDITION_KEYS: string[] = [
		"dax:EnclosingOperation",
	];
	/** Condition keys applicable to the PutItem action. */
	static readonly PUT_ITEM_CONDITION_KEYS: string[] = [
		"dax:EnclosingOperation",
	];
	/** Condition keys applicable to the UpdateItem action. */
	static readonly UPDATE_ITEM_CONDITION_KEYS: string[] = [
		"dax:EnclosingOperation",
	];

	/** Condition key: dax:EnclosingOperation (String) */
	static readonly ENCLOSING_OPERATION = "dax:EnclosingOperation";

	/**
	 * Generates a condition block for `dax:EnclosingOperation`.
	 */
	static enclosingOperation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "dax:EnclosingOperation": value } };
	}
}
