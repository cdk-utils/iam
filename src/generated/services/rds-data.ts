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
	static readonly BATCH_EXECUTE_STATEMENT = "rds-data:BatchExecuteStatement";
	/** [Write] rds-data:BeginTransaction */
	static readonly BEGIN_TRANSACTION = "rds-data:BeginTransaction";
	/** [Write] rds-data:CommitTransaction */
	static readonly COMMIT_TRANSACTION = "rds-data:CommitTransaction";
	/** [Write] rds-data:ExecuteSql */
	static readonly EXECUTE_SQL = "rds-data:ExecuteSql";
	/** [Write] rds-data:ExecuteStatement */
	static readonly EXECUTE_STATEMENT = "rds-data:ExecuteStatement";
	/** [Write] rds-data:RollbackTransaction */
	static readonly ROLLBACK_TRANSACTION = "rds-data:RollbackTransaction";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RDSDataActions.BATCH_EXECUTE_STATEMENT,
		RDSDataActions.BEGIN_TRANSACTION,
		RDSDataActions.COMMIT_TRANSACTION,
		RDSDataActions.EXECUTE_SQL,
		RDSDataActions.EXECUTE_STATEMENT,
		RDSDataActions.ROLLBACK_TRANSACTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<dbClusterInstanceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rds-data resources.
 */
export class RDSDataResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The DbClusterInstanceName component of the ARN. */
		readonly dbClusterInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbClusterInstanceName: string;
	} {
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
	static readonly BATCH_EXECUTE_STATEMENT: string[] = [
		"rds-data:BatchExecuteStatement",
	];
	/** IAM actions required for the BeginTransaction API call. */
	static readonly BEGIN_TRANSACTION: string[] = ["rds-data:BeginTransaction"];
	/** IAM actions required for the CommitTransaction API call. */
	static readonly COMMIT_TRANSACTION: string[] = ["rds-data:CommitTransaction"];
	/** IAM actions required for the ExecuteSql API call. */
	static readonly EXECUTE_SQL: string[] = ["rds-data:ExecuteSql"];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly EXECUTE_STATEMENT: string[] = ["rds-data:ExecuteStatement"];
	/** IAM actions required for the RollbackTransaction API call. */
	static readonly ROLLBACK_TRANSACTION: string[] = [
		"rds-data:RollbackTransaction",
	];
}

/**
 * Condition key constants and builders for rds-data.
 */
export class RDSDataConditions {
	/** Condition keys applicable to the BatchExecuteStatement action. */
	static readonly BATCH_EXECUTE_STATEMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the BeginTransaction action. */
	static readonly BEGIN_TRANSACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CommitTransaction action. */
	static readonly COMMIT_TRANSACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExecuteSql action. */
	static readonly EXECUTE_SQL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ExecuteStatement action. */
	static readonly EXECUTE_STATEMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RollbackTransaction action. */
	static readonly ROLLBACK_TRANSACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
