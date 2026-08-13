// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cassandra.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cassandra service.
 */
export class CassandraActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cassandra";

	/** [Write] cassandra:Alter */
	static readonly Alter = "cassandra:Alter";
	/** [Write] cassandra:AlterMultiRegionResource */
	static readonly AlterMultiRegionResource =
		"cassandra:AlterMultiRegionResource";
	/** [Write] cassandra:Create */
	static readonly Create = "cassandra:Create";
	/** [Write] cassandra:CreateMultiRegionResource */
	static readonly CreateMultiRegionResource =
		"cassandra:CreateMultiRegionResource";
	/** [Write] cassandra:Drop */
	static readonly Drop = "cassandra:Drop";
	/** [Write] cassandra:DropMultiRegionResource */
	static readonly DropMultiRegionResource = "cassandra:DropMultiRegionResource";
	/** [Read] cassandra:GetRecords */
	static readonly actionGetRecords = "cassandra:GetRecords";
	/** [Read] cassandra:GetShardIterator */
	static readonly actionGetShardIterator = "cassandra:GetShardIterator";
	/** [Read] cassandra:GetStream */
	static readonly actionGetStream = "cassandra:GetStream";
	/** [List] cassandra:ListStreams */
	static readonly ListStreams = "cassandra:ListStreams";
	/** [Write] cassandra:Modify */
	static readonly Modify = "cassandra:Modify";
	/** [Write] cassandra:ModifyMultiRegionResource */
	static readonly ModifyMultiRegionResource =
		"cassandra:ModifyMultiRegionResource";
	/** [Write] cassandra:Restore */
	static readonly Restore = "cassandra:Restore";
	/** [Write] cassandra:RestoreMultiRegionTable */
	static readonly RestoreMultiRegionTable = "cassandra:RestoreMultiRegionTable";
	/** [Read] cassandra:Select */
	static readonly Select = "cassandra:Select";
	/** [Read] cassandra:SelectMultiRegionResource */
	static readonly SelectMultiRegionResource =
		"cassandra:SelectMultiRegionResource";
	/** [Tagging] cassandra:TagMultiRegionResource */
	static readonly TagMultiRegionResource = "cassandra:TagMultiRegionResource";
	/** [Tagging] cassandra:TagResource */
	static readonly TagResource = "cassandra:TagResource";
	/** [Tagging] cassandra:UnTagMultiRegionResource */
	static readonly UnTagMultiRegionResource =
		"cassandra:UnTagMultiRegionResource";
	/** [Tagging] cassandra:UntagResource */
	static readonly UntagResource = "cassandra:UntagResource";
	/** [Write] cassandra:UpdatePartitioner */
	static readonly UpdatePartitioner = "cassandra:UpdatePartitioner";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CassandraActions.actionGetRecords,
		CassandraActions.actionGetShardIterator,
		CassandraActions.actionGetStream,
		CassandraActions.Select,
		CassandraActions.SelectMultiRegionResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CassandraActions.Alter,
		CassandraActions.AlterMultiRegionResource,
		CassandraActions.Create,
		CassandraActions.CreateMultiRegionResource,
		CassandraActions.Drop,
		CassandraActions.DropMultiRegionResource,
		CassandraActions.Modify,
		CassandraActions.ModifyMultiRegionResource,
		CassandraActions.Restore,
		CassandraActions.RestoreMultiRegionTable,
		CassandraActions.UpdatePartitioner,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [CassandraActions.ListStreams];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CassandraActions.TagMultiRegionResource,
		CassandraActions.TagResource,
		CassandraActions.UnTagMultiRegionResource,
		CassandraActions.UntagResource,
	];
}

/**
 * Properties for building a keyspace ARN.
 */
export interface CassandraKeyspaceArnProps {
	/** The KeyspaceName component of the ARN. */
	readonly keyspaceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a keyspace ARN.
 */
export interface CassandraKeyspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyspaceName component. */
	readonly keyspaceName: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface CassandraStreamArnProps {
	/** The KeyspaceName component of the ARN. */
	readonly keyspaceName: string;
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** The StreamLabel component of the ARN. */
	readonly streamLabel: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stream ARN.
 */
export interface CassandraStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyspaceName component. */
	readonly keyspaceName: string;
	/** The TableName component. */
	readonly tableName: string;
	/** The StreamLabel component. */
	readonly streamLabel: string;
}

/**
 * Properties for building a table ARN.
 */
export interface CassandraTableArnProps {
	/** The KeyspaceName component of the ARN. */
	readonly keyspaceName: string;
	/** The TableName component of the ARN. */
	readonly tableName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a table ARN.
 */
export interface CassandraTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyspaceName component. */
	readonly keyspaceName: string;
	/** The TableName component. */
	readonly tableName: string;
}

const KeyspaceArnRegex =
	/^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):\/keyspace\/(?<keyspaceName>[^:/?]+)\/$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):\/keyspace\/(?<keyspaceName>[^:/?]+)\/table\/(?<tableName>[^:/?]+)\/stream\/(?<streamLabel>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):\/keyspace\/(?<keyspaceName>[^:/?]+)\/table\/(?<tableName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cassandra resources.
 */
export class CassandraResources {
	/**
	 * Builds an ARN for the keyspace resource.
	 */
	static keyspace(props: CassandraKeyspaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:cassandra:${props.region ?? "*"}:${props.account ?? "*"}:/keyspace/${props.keyspaceName}/`;
	}

	/**
	 * Validates whether a string is a valid ARN for the keyspace resource.
	 */
	static isValidKeyspaceArn(arn: string): boolean {
		return KeyspaceArnRegex.test(arn);
	}

	/**
	 * Parses a keyspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyspaceArn(arn: string): CassandraKeyspaceArnComponents {
		const match = KeyspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid keyspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyspaceName: match.groups!.keyspaceName,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: CassandraStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:cassandra:${props.region ?? "*"}:${props.account ?? "*"}:/keyspace/${props.keyspaceName}/table/${props.tableName}/stream/${props.streamLabel}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): CassandraStreamArnComponents {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyspaceName: match.groups!.keyspaceName,
			tableName: match.groups!.tableName,
			streamLabel: match.groups!.streamLabel,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: CassandraTableArnProps): string {
		return `arn:${props.partition ?? "aws"}:cassandra:${props.region ?? "*"}:${props.account ?? "*"}:/keyspace/${props.keyspaceName}/table/${props.tableName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): CassandraTableArnComponents {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyspaceName: match.groups!.keyspaceName,
			tableName: match.groups!.tableName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cassandra.
 */
export class CassandraOperations {
	/** IAM actions required for the CreateKeyspace API call. */
	static readonly CreateKeyspace: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CreateTable: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the CreateType API call. */
	static readonly CreateType: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
	];
	/** IAM actions required for the DeleteKeyspace API call. */
	static readonly DeleteKeyspace: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DeleteTable: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the DeleteType API call. */
	static readonly DeleteType: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the GetKeyspace API call. */
	static readonly opGetKeyspace: string[] = ["cassandra:Select"];
	/** IAM actions required for the GetRecords API call. */
	static readonly opGetRecords: string[] = ["cassandra:GetRecords"];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly opGetShardIterator: string[] = ["cassandra:GetShardIterator"];
	/** IAM actions required for the GetStream API call. */
	static readonly opGetStream: string[] = ["cassandra:GetStream"];
	/** IAM actions required for the GetTable API call. */
	static readonly opGetTable: string[] = ["cassandra:Select"];
	/** IAM actions required for the GetTableAutoScalingSettings API call. */
	static readonly opGetTableAutoScalingSettings: string[] = [
		"application-autoscaling:DescribeScalableTargets",
		"application-autoscaling:DescribeScalingPolicies",
		"cassandra:Select",
		"cassandra:SelectMultiRegionResource",
	];
	/** IAM actions required for the GetType API call. */
	static readonly opGetType: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListKeyspaces API call. */
	static readonly ListKeyspaces: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["cassandra:ListStreams"];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the ListTypes API call. */
	static readonly ListTypes: string[] = ["cassandra:Select"];
	/** IAM actions required for the RestoreTable API call. */
	static readonly RestoreTable: string[] = [
		"cassandra:Restore",
		"cassandra:RestoreMultiRegionTable",
		"cassandra:Select",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
		"cassandra:TagMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
		"cassandra:UnTagMultiRegionResource",
		"cassandra:UntagResource",
	];
	/** IAM actions required for the UpdateKeyspace API call. */
	static readonly UpdateKeyspace: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
		"application-autoscaling:DescribeScalableTargets",
		"application-autoscaling:DescribeScalableTargets",
		"application-autoscaling:DescribeScalingPolicies",
		"cassandra:Modify",
		"cassandra:ModifyMultiRegionResource",
		"application-autoscaling:PutScalingPolicy",
		"application-autoscaling:RegisterScalableTarget",
		"cassandra:Select",
		"cassandra:SelectMultiRegionResource",
		"cassandra:TagMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the UpdateTable API call. */
	static readonly UpdateTable: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
	];
}

/**
 * Condition key constants and builders for cassandra.
 */
export class CassandraConditions {
	/** Condition keys applicable to the Alter action. */
	static readonly AlterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AlterMultiRegionResource action. */
	static readonly AlterMultiRegionResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Create action. */
	static readonly CreateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMultiRegionResource action. */
	static readonly CreateMultiRegionResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMultiRegionResource action. */
	static readonly TagMultiRegionResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnTagMultiRegionResource action. */
	static readonly UnTagMultiRegionResourceConditionKeys: string[] = [
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
