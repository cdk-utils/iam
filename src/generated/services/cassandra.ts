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
	static readonly ALTER = "cassandra:Alter";
	/** [Write] cassandra:AlterMultiRegionResource */
	static readonly ALTER_MULTI_REGION_RESOURCE =
		"cassandra:AlterMultiRegionResource";
	/** [Write] cassandra:Create */
	static readonly CREATE = "cassandra:Create";
	/** [Write] cassandra:CreateMultiRegionResource */
	static readonly CREATE_MULTI_REGION_RESOURCE =
		"cassandra:CreateMultiRegionResource";
	/** [Write] cassandra:Drop */
	static readonly DROP = "cassandra:Drop";
	/** [Write] cassandra:DropMultiRegionResource */
	static readonly DROP_MULTI_REGION_RESOURCE =
		"cassandra:DropMultiRegionResource";
	/** [Read] cassandra:GetRecords */
	static readonly GET_RECORDS = "cassandra:GetRecords";
	/** [Read] cassandra:GetShardIterator */
	static readonly GET_SHARD_ITERATOR = "cassandra:GetShardIterator";
	/** [Read] cassandra:GetStream */
	static readonly GET_STREAM = "cassandra:GetStream";
	/** [List] cassandra:ListStreams */
	static readonly LIST_STREAMS = "cassandra:ListStreams";
	/** [Write] cassandra:Modify */
	static readonly MODIFY = "cassandra:Modify";
	/** [Write] cassandra:ModifyMultiRegionResource */
	static readonly MODIFY_MULTI_REGION_RESOURCE =
		"cassandra:ModifyMultiRegionResource";
	/** [Write] cassandra:Restore */
	static readonly RESTORE = "cassandra:Restore";
	/** [Write] cassandra:RestoreMultiRegionTable */
	static readonly RESTORE_MULTI_REGION_TABLE =
		"cassandra:RestoreMultiRegionTable";
	/** [Read] cassandra:Select */
	static readonly SELECT = "cassandra:Select";
	/** [Read] cassandra:SelectMultiRegionResource */
	static readonly SELECT_MULTI_REGION_RESOURCE =
		"cassandra:SelectMultiRegionResource";
	/** [Tagging] cassandra:TagMultiRegionResource */
	static readonly TAG_MULTI_REGION_RESOURCE =
		"cassandra:TagMultiRegionResource";
	/** [Tagging] cassandra:TagResource */
	static readonly TAG_RESOURCE = "cassandra:TagResource";
	/** [Tagging] cassandra:UnTagMultiRegionResource */
	static readonly UN_TAG_MULTI_REGION_RESOURCE =
		"cassandra:UnTagMultiRegionResource";
	/** [Tagging] cassandra:UntagResource */
	static readonly UNTAG_RESOURCE = "cassandra:UntagResource";
	/** [Write] cassandra:UpdatePartitioner */
	static readonly UPDATE_PARTITIONER = "cassandra:UpdatePartitioner";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CassandraActions.GET_RECORDS,
		CassandraActions.GET_SHARD_ITERATOR,
		CassandraActions.GET_STREAM,
		CassandraActions.SELECT,
		CassandraActions.SELECT_MULTI_REGION_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CassandraActions.ALTER,
		CassandraActions.ALTER_MULTI_REGION_RESOURCE,
		CassandraActions.CREATE,
		CassandraActions.CREATE_MULTI_REGION_RESOURCE,
		CassandraActions.DROP,
		CassandraActions.DROP_MULTI_REGION_RESOURCE,
		CassandraActions.MODIFY,
		CassandraActions.MODIFY_MULTI_REGION_RESOURCE,
		CassandraActions.RESTORE,
		CassandraActions.RESTORE_MULTI_REGION_TABLE,
		CassandraActions.UPDATE_PARTITIONER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [CassandraActions.LIST_STREAMS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CassandraActions.TAG_MULTI_REGION_RESOURCE,
		CassandraActions.TAG_RESOURCE,
		CassandraActions.UN_TAG_MULTI_REGION_RESOURCE,
		CassandraActions.UNTAG_RESOURCE,
	];
}

const KeyspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):/keyspace/(?<keyspaceName>[^:/?]+)/$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):/keyspace/(?<keyspaceName>[^:/?]+)/table/(?<tableName>[^:/?]+)/stream/(?<streamLabel>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cassandra:(?<region>[^:]*):(?<account>[^:]*):/keyspace/(?<keyspaceName>[^:/?]+)/table/(?<tableName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cassandra resources.
 */
export class CassandraResources {
	/**
	 * Builds an ARN for the keyspace resource.
	 */
	static keyspace(props: {
		/** The KeyspaceName component of the ARN. */
		readonly keyspaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseKeyspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyspaceName: string;
	} {
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
	static stream(props: {
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
	}): string {
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
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyspaceName: string;
		tableName: string;
		streamLabel: string;
	} {
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
	static table(props: {
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
	}): string {
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
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyspaceName: string;
		tableName: string;
	} {
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
	static readonly CREATE_KEYSPACE: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the CreateTable API call. */
	static readonly CREATE_TABLE: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the CreateType API call. */
	static readonly CREATE_TYPE: string[] = [
		"cassandra:Create",
		"cassandra:CreateMultiRegionResource",
	];
	/** IAM actions required for the DeleteKeyspace API call. */
	static readonly DELETE_KEYSPACE: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the DeleteTable API call. */
	static readonly DELETE_TABLE: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the DeleteType API call. */
	static readonly DELETE_TYPE: string[] = [
		"cassandra:Drop",
		"cassandra:DropMultiRegionResource",
	];
	/** IAM actions required for the GetKeyspace API call. */
	static readonly GET_KEYSPACE: string[] = ["cassandra:Select"];
	/** IAM actions required for the GetRecords API call. */
	static readonly GET_RECORDS: string[] = ["cassandra:GetRecords"];
	/** IAM actions required for the GetShardIterator API call. */
	static readonly GET_SHARD_ITERATOR: string[] = ["cassandra:GetShardIterator"];
	/** IAM actions required for the GetStream API call. */
	static readonly GET_STREAM: string[] = ["cassandra:GetStream"];
	/** IAM actions required for the GetTable API call. */
	static readonly GET_TABLE: string[] = ["cassandra:Select"];
	/** IAM actions required for the GetTableAutoScalingSettings API call. */
	static readonly GET_TABLE_AUTO_SCALING_SETTINGS: string[] = [
		"application-autoscaling:DescribeScalableTargets",
		"application-autoscaling:DescribeScalingPolicies",
		"cassandra:Select",
		"cassandra:SelectMultiRegionResource",
	];
	/** IAM actions required for the GetType API call. */
	static readonly GET_TYPE: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListKeyspaces API call. */
	static readonly LIST_KEYSPACES: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["cassandra:ListStreams"];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["cassandra:Select"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the ListTypes API call. */
	static readonly LIST_TYPES: string[] = ["cassandra:Select"];
	/** IAM actions required for the RestoreTable API call. */
	static readonly RESTORE_TABLE: string[] = [
		"cassandra:Restore",
		"cassandra:RestoreMultiRegionTable",
		"cassandra:Select",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
		"cassandra:TagMultiRegionResource",
		"cassandra:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
		"cassandra:UnTagMultiRegionResource",
		"cassandra:UntagResource",
	];
	/** IAM actions required for the UpdateKeyspace API call. */
	static readonly UPDATE_KEYSPACE: string[] = [
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
	static readonly UPDATE_TABLE: string[] = [
		"cassandra:Alter",
		"cassandra:AlterMultiRegionResource",
	];
}

/**
 * Condition key constants and builders for cassandra.
 */
export class CassandraConditions {
	/** Condition keys applicable to the Alter action. */
	static readonly ALTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AlterMultiRegionResource action. */
	static readonly ALTER_MULTI_REGION_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Create action. */
	static readonly CREATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMultiRegionResource action. */
	static readonly CREATE_MULTI_REGION_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMultiRegionResource action. */
	static readonly TAG_MULTI_REGION_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnTagMultiRegionResource action. */
	static readonly UN_TAG_MULTI_REGION_RESOURCE_CONDITION_KEYS: string[] = [
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
