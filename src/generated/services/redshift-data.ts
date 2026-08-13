// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/redshift-data.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the redshift-data service.
 */
export class RedshiftDataActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "redshift-data";

	/** [Write] redshift-data:BatchExecuteStatement */
	static readonly BATCH_EXECUTE_STATEMENT =
		"redshift-data:BatchExecuteStatement";
	/** [Write] redshift-data:CancelStatement */
	static readonly CANCEL_STATEMENT = "redshift-data:CancelStatement";
	/** [Read] redshift-data:DescribeStatement */
	static readonly DESCRIBE_STATEMENT = "redshift-data:DescribeStatement";
	/** [Read] redshift-data:DescribeTable */
	static readonly DESCRIBE_TABLE = "redshift-data:DescribeTable";
	/** [Write] redshift-data:ExecuteStatement */
	static readonly EXECUTE_STATEMENT = "redshift-data:ExecuteStatement";
	/** [Read] redshift-data:GetStagingBucketLocation */
	static readonly GET_STAGING_BUCKET_LOCATION =
		"redshift-data:GetStagingBucketLocation";
	/** [Read] redshift-data:GetStatementResult */
	static readonly GET_STATEMENT_RESULT = "redshift-data:GetStatementResult";
	/** [Read] redshift-data:ListDatabases */
	static readonly LIST_DATABASES = "redshift-data:ListDatabases";
	/** [Read] redshift-data:ListSchemas */
	static readonly LIST_SCHEMAS = "redshift-data:ListSchemas";
	/** [List] redshift-data:ListSessions */
	static readonly LIST_SESSIONS = "redshift-data:ListSessions";
	/** [List] redshift-data:ListStatements */
	static readonly LIST_STATEMENTS = "redshift-data:ListStatements";
	/** [List] redshift-data:ListTables */
	static readonly LIST_TABLES = "redshift-data:ListTables";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RedshiftDataActions.DESCRIBE_STATEMENT,
		RedshiftDataActions.DESCRIBE_TABLE,
		RedshiftDataActions.GET_STAGING_BUCKET_LOCATION,
		RedshiftDataActions.GET_STATEMENT_RESULT,
		RedshiftDataActions.LIST_DATABASES,
		RedshiftDataActions.LIST_SCHEMAS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RedshiftDataActions.BATCH_EXECUTE_STATEMENT,
		RedshiftDataActions.CANCEL_STATEMENT,
		RedshiftDataActions.EXECUTE_STATEMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RedshiftDataActions.LIST_SESSIONS,
		RedshiftDataActions.LIST_STATEMENTS,
		RedshiftDataActions.LIST_TABLES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<clusterName>[^:/?]+)$",
);
const ManagedWorkgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):managed-workgroup/(?<managedWorkgroupId>[^:/?]+)$",
);
const WorkgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):workgroup/(?<workgroupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for redshift-data resources.
 */
export class RedshiftDataResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.clusterName}`;
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
		clusterName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the managed-workgroup resource.
	 */
	static managedWorkgroup(props: {
		/** The ManagedWorkgroupId component of the ARN. */
		readonly managedWorkgroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:managed-workgroup/${props.managedWorkgroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-workgroup resource.
	 */
	static isValidManagedWorkgroupArn(arn: string): boolean {
		return ManagedWorkgroupArnRegex.test(arn);
	}

	/**
	 * Parses a managed-workgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedWorkgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		managedWorkgroupId: string;
	} {
		const match = ManagedWorkgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-workgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			managedWorkgroupId: match.groups!.managedWorkgroupId,
		};
	}

	/**
	 * Builds an ARN for the workgroup resource.
	 */
	static workgroup(props: {
		/** The WorkgroupId component of the ARN. */
		readonly workgroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:workgroup/${props.workgroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workgroup resource.
	 */
	static isValidWorkgroupArn(arn: string): boolean {
		return WorkgroupArnRegex.test(arn);
	}

	/**
	 * Parses a workgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workgroupId: string;
	} {
		const match = WorkgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workgroupId: match.groups!.workgroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for redshift-data.
 */
export class RedshiftDataOperations {
	/** IAM actions required for the BatchExecuteStatement API call. */
	static readonly BATCH_EXECUTE_STATEMENT: string[] = [
		"redshift-data:BatchExecuteStatement",
	];
	/** IAM actions required for the CancelStatement API call. */
	static readonly CANCEL_STATEMENT: string[] = [
		"redshift-data:CancelStatement",
	];
	/** IAM actions required for the DescribeStatement API call. */
	static readonly DESCRIBE_STATEMENT: string[] = [
		"redshift-data:DescribeStatement",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DESCRIBE_TABLE: string[] = ["redshift-data:DescribeTable"];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly EXECUTE_STATEMENT: string[] = [
		"redshift-data:ExecuteStatement",
	];
	/** IAM actions required for the GetStatementResult API call. */
	static readonly GET_STATEMENT_RESULT: string[] = [
		"redshift-data:GetStatementResult",
	];
	/** IAM actions required for the GetStatementResultV2 API call. */
	static readonly GET_STATEMENT_RESULT_V2: string[] = [
		"redshift-data:GetStatementResult",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly LIST_DATABASES: string[] = ["redshift-data:ListDatabases"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly LIST_SCHEMAS: string[] = ["redshift-data:ListSchemas"];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["redshift-data:ListSessions"];
	/** IAM actions required for the ListStatements API call. */
	static readonly LIST_STATEMENTS: string[] = ["redshift-data:ListStatements"];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["redshift-data:ListTables"];
}

/**
 * Condition key constants and builders for redshift-data.
 */
export class RedshiftDataConditions {
	/** Condition keys applicable to the BatchExecuteStatement action. */
	static readonly BATCH_EXECUTE_STATEMENT_CONDITION_KEYS: string[] = [
		"redshift-data:glue-catalog-arn",
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the CancelStatement action. */
	static readonly CANCEL_STATEMENT_CONDITION_KEYS: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the DescribeStatement action. */
	static readonly DESCRIBE_STATEMENT_CONDITION_KEYS: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the ExecuteStatement action. */
	static readonly EXECUTE_STATEMENT_CONDITION_KEYS: string[] = [
		"redshift-data:glue-catalog-arn",
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the GetStatementResult action. */
	static readonly GET_STATEMENT_RESULT_CONDITION_KEYS: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the ListSessions action. */
	static readonly LIST_SESSIONS_CONDITION_KEYS: string[] = [
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the ListStatements action. */
	static readonly LIST_STATEMENTS_CONDITION_KEYS: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: redshift-data:glue-catalog-arn (ARN) */
	static readonly GLUE_CATALOG_ARN = "redshift-data:glue-catalog-arn";
	/** Condition key: redshift-data:session-owner-iam-userid (String) */
	static readonly SESSION_OWNER_IAM_USERID =
		"redshift-data:session-owner-iam-userid";
	/** Condition key: redshift-data:statement-owner-iam-userid (String) */
	static readonly STATEMENT_OWNER_IAM_USERID =
		"redshift-data:statement-owner-iam-userid";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `redshift-data:glue-catalog-arn`.
	 */
	static glueCatalogARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "redshift-data:glue-catalog-arn": value } };
	}

	/**
	 * Generates a condition block for `redshift-data:session-owner-iam-userid`.
	 */
	static sessionOwnerIAMUserid(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "redshift-data:session-owner-iam-userid": value },
		};
	}

	/**
	 * Generates a condition block for `redshift-data:statement-owner-iam-userid`.
	 */
	static statementOwnerIAMUserid(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "redshift-data:statement-owner-iam-userid": value },
		};
	}
}
