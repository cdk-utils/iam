// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rds-data.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rds-data service.
 */
export class RDSDataActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rds-data";

	/** [Write] rds-data:BatchExecuteStatement */
	static readonly BatchExecuteStatement = "rds-data:BatchExecuteStatement";
	/** [Write] rds-data:BeginTransaction */
	static readonly BeginTransaction = "rds-data:BeginTransaction";
	/** [Write] rds-data:CommitTransaction */
	static readonly CommitTransaction = "rds-data:CommitTransaction";
	/** [Write] rds-data:ExecuteSql */
	static readonly ExecuteSql = "rds-data:ExecuteSql";
	/** [Write] rds-data:ExecuteStatement */
	static readonly ExecuteStatement = "rds-data:ExecuteStatement";
	/** [Write] rds-data:RollbackTransaction */
	static readonly RollbackTransaction = "rds-data:RollbackTransaction";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RDSDataActions.BatchExecuteStatement,
		RDSDataActions.BeginTransaction,
		RDSDataActions.CommitTransaction,
		RDSDataActions.ExecuteSql,
		RDSDataActions.ExecuteStatement,
		RDSDataActions.RollbackTransaction,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a cluster ARN.
 */
export interface RDSDataClusterArnProps {
	/** The DbClusterInstanceName component of the ARN. */
	readonly dbClusterInstanceName: string;
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
export interface RDSDataClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbClusterInstanceName component. */
	readonly dbClusterInstanceName: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<dbClusterInstanceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rds-data resources.
 */
export class RDSDataResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: RDSDataClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.dbClusterInstanceName}`;
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
	static parseClusterArn(arn: string): RDSDataClusterArnComponents {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbClusterInstanceName: match.groups!.dbClusterInstanceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rds-data.
 */
export class RDSDataOperations {
	/** IAM actions required for the BatchExecuteStatement API call. */
	static readonly BatchExecuteStatement: string[] = [
		"rds-data:BatchExecuteStatement",
	];
	/** IAM actions required for the BeginTransaction API call. */
	static readonly BeginTransaction: string[] = ["rds-data:BeginTransaction"];
	/** IAM actions required for the CommitTransaction API call. */
	static readonly CommitTransaction: string[] = ["rds-data:CommitTransaction"];
	/** IAM actions required for the ExecuteSql API call. */
	static readonly ExecuteSql: string[] = ["rds-data:ExecuteSql"];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly ExecuteStatement: string[] = ["rds-data:ExecuteStatement"];
	/** IAM actions required for the RollbackTransaction API call. */
	static readonly RollbackTransaction: string[] = [
		"rds-data:RollbackTransaction",
	];
}

/**
 * Condition key constants and builders for rds-data.
 */
export class RDSDataConditions {
	/** Condition keys applicable to the BatchExecuteStatement action. */
	static readonly BatchExecuteStatementConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the BeginTransaction action. */
	static readonly BeginTransactionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CommitTransaction action. */
	static readonly CommitTransactionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExecuteSql action. */
	static readonly ExecuteSqlConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExecuteStatement action. */
	static readonly ExecuteStatementConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RollbackTransaction action. */
	static readonly RollbackTransactionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
