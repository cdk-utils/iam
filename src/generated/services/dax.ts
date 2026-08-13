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
	static readonly BatchGetItem = "dax:BatchGetItem";
	/** [Write] dax:BatchWriteItem */
	static readonly BatchWriteItem = "dax:BatchWriteItem";
	/** [Read] dax:ConditionCheckItem */
	static readonly ConditionCheckItem = "dax:ConditionCheckItem";
	/** [Write] dax:CreateCluster */
	static readonly CreateCluster = "dax:CreateCluster";
	/** [Write] dax:CreateParameterGroup */
	static readonly CreateParameterGroup = "dax:CreateParameterGroup";
	/** [Write] dax:CreateSubnetGroup */
	static readonly CreateSubnetGroup = "dax:CreateSubnetGroup";
	/** [Write] dax:DecreaseReplicationFactor */
	static readonly DecreaseReplicationFactor = "dax:DecreaseReplicationFactor";
	/** [Write] dax:DeleteCluster */
	static readonly DeleteCluster = "dax:DeleteCluster";
	/** [Write] dax:DeleteItem */
	static readonly DeleteItem = "dax:DeleteItem";
	/** [Write] dax:DeleteParameterGroup */
	static readonly DeleteParameterGroup = "dax:DeleteParameterGroup";
	/** [Write] dax:DeleteSubnetGroup */
	static readonly DeleteSubnetGroup = "dax:DeleteSubnetGroup";
	/** [List] dax:DescribeClusters */
	static readonly DescribeClusters = "dax:DescribeClusters";
	/** [List] dax:DescribeDefaultParameters */
	static readonly DescribeDefaultParameters = "dax:DescribeDefaultParameters";
	/** [List] dax:DescribeEvents */
	static readonly DescribeEvents = "dax:DescribeEvents";
	/** [List] dax:DescribeParameterGroups */
	static readonly DescribeParameterGroups = "dax:DescribeParameterGroups";
	/** [Read] dax:DescribeParameters */
	static readonly DescribeParameters = "dax:DescribeParameters";
	/** [List] dax:DescribeSubnetGroups */
	static readonly DescribeSubnetGroups = "dax:DescribeSubnetGroups";
	/** [Read] dax:GetItem */
	static readonly actionGetItem = "dax:GetItem";
	/** [Write] dax:IncreaseReplicationFactor */
	static readonly IncreaseReplicationFactor = "dax:IncreaseReplicationFactor";
	/** [Read] dax:ListTags */
	static readonly ListTags = "dax:ListTags";
	/** [Write] dax:PutItem */
	static readonly PutItem = "dax:PutItem";
	/** [Read] dax:Query */
	static readonly Query = "dax:Query";
	/** [Write] dax:RebootNode */
	static readonly RebootNode = "dax:RebootNode";
	/** [Read] dax:Scan */
	static readonly Scan = "dax:Scan";
	/** [Tagging] dax:TagResource */
	static readonly TagResource = "dax:TagResource";
	/** [Tagging] dax:UntagResource */
	static readonly UntagResource = "dax:UntagResource";
	/** [Write] dax:UpdateCluster */
	static readonly UpdateCluster = "dax:UpdateCluster";
	/** [Write] dax:UpdateItem */
	static readonly UpdateItem = "dax:UpdateItem";
	/** [Write] dax:UpdateParameterGroup */
	static readonly UpdateParameterGroup = "dax:UpdateParameterGroup";
	/** [Write] dax:UpdateSubnetGroup */
	static readonly UpdateSubnetGroup = "dax:UpdateSubnetGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DaxActions.BatchGetItem,
		DaxActions.ConditionCheckItem,
		DaxActions.DescribeParameters,
		DaxActions.actionGetItem,
		DaxActions.ListTags,
		DaxActions.Query,
		DaxActions.Scan,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DaxActions.BatchWriteItem,
		DaxActions.CreateCluster,
		DaxActions.CreateParameterGroup,
		DaxActions.CreateSubnetGroup,
		DaxActions.DecreaseReplicationFactor,
		DaxActions.DeleteCluster,
		DaxActions.DeleteItem,
		DaxActions.DeleteParameterGroup,
		DaxActions.DeleteSubnetGroup,
		DaxActions.IncreaseReplicationFactor,
		DaxActions.PutItem,
		DaxActions.RebootNode,
		DaxActions.UpdateCluster,
		DaxActions.UpdateItem,
		DaxActions.UpdateParameterGroup,
		DaxActions.UpdateSubnetGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DaxActions.DescribeClusters,
		DaxActions.DescribeDefaultParameters,
		DaxActions.DescribeEvents,
		DaxActions.DescribeParameterGroups,
		DaxActions.DescribeSubnetGroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DaxActions.TagResource,
		DaxActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface DaxApplicationArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface DaxApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):dax:(?<region>[^:]*):(?<account>[^:]*):cache\/(?<clusterName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for dax resources.
 */
export class DaxResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: DaxApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): DaxApplicationArnComponents {
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
	static readonly CreateCluster: string[] = [
		"dax:CreateCluster",
		"iam:PassRole",
		"dax:TagResource",
	];
	/** IAM actions required for the CreateParameterGroup API call. */
	static readonly CreateParameterGroup: string[] = ["dax:CreateParameterGroup"];
	/** IAM actions required for the CreateSubnetGroup API call. */
	static readonly CreateSubnetGroup: string[] = ["dax:CreateSubnetGroup"];
	/** IAM actions required for the DecreaseReplicationFactor API call. */
	static readonly DecreaseReplicationFactor: string[] = [
		"dax:DecreaseReplicationFactor",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["dax:DeleteCluster"];
	/** IAM actions required for the DeleteParameterGroup API call. */
	static readonly DeleteParameterGroup: string[] = ["dax:DeleteParameterGroup"];
	/** IAM actions required for the DeleteSubnetGroup API call. */
	static readonly DeleteSubnetGroup: string[] = ["dax:DeleteSubnetGroup"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DescribeClusters: string[] = ["dax:DescribeClusters"];
	/** IAM actions required for the DescribeDefaultParameters API call. */
	static readonly DescribeDefaultParameters: string[] = [
		"dax:DescribeDefaultParameters",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["dax:DescribeEvents"];
	/** IAM actions required for the DescribeParameterGroups API call. */
	static readonly DescribeParameterGroups: string[] = [
		"dax:DescribeParameterGroups",
	];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DescribeParameters: string[] = ["dax:DescribeParameters"];
	/** IAM actions required for the DescribeSubnetGroups API call. */
	static readonly DescribeSubnetGroups: string[] = ["dax:DescribeSubnetGroups"];
	/** IAM actions required for the IncreaseReplicationFactor API call. */
	static readonly IncreaseReplicationFactor: string[] = [
		"dax:IncreaseReplicationFactor",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["dax:ListTags"];
	/** IAM actions required for the RebootNode API call. */
	static readonly RebootNode: string[] = ["dax:RebootNode"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["dax:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["dax:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = ["dax:UpdateCluster"];
	/** IAM actions required for the UpdateParameterGroup API call. */
	static readonly UpdateParameterGroup: string[] = ["dax:UpdateParameterGroup"];
	/** IAM actions required for the UpdateSubnetGroup API call. */
	static readonly UpdateSubnetGroup: string[] = ["dax:UpdateSubnetGroup"];
}

/**
 * Condition key constants and builders for dax.
 */
export class DaxConditions {
	/** Condition keys applicable to the DeleteItem action. */
	static readonly DeleteItemConditionKeys: string[] = [
		"dax:EnclosingOperation",
	];
	/** Condition keys applicable to the GetItem action. */
	static readonly actionGetItemConditionKeys: string[] = [
		"dax:EnclosingOperation",
	];
	/** Condition keys applicable to the PutItem action. */
	static readonly PutItemConditionKeys: string[] = ["dax:EnclosingOperation"];
	/** Condition keys applicable to the UpdateItem action. */
	static readonly UpdateItemConditionKeys: string[] = [
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
