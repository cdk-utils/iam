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
	static readonly BatchExecuteStatement = "redshift-data:BatchExecuteStatement";
	/** [Write] redshift-data:CancelStatement */
	static readonly CancelStatement = "redshift-data:CancelStatement";
	/** [Read] redshift-data:DescribeStatement */
	static readonly DescribeStatement = "redshift-data:DescribeStatement";
	/** [Read] redshift-data:DescribeTable */
	static readonly DescribeTable = "redshift-data:DescribeTable";
	/** [Write] redshift-data:ExecuteStatement */
	static readonly ExecuteStatement = "redshift-data:ExecuteStatement";
	/** [Read] redshift-data:GetStagingBucketLocation */
	static readonly actionGetStagingBucketLocation =
		"redshift-data:GetStagingBucketLocation";
	/** [Read] redshift-data:GetStatementResult */
	static readonly actionGetStatementResult = "redshift-data:GetStatementResult";
	/** [Read] redshift-data:ListDatabases */
	static readonly ListDatabases = "redshift-data:ListDatabases";
	/** [Read] redshift-data:ListSchemas */
	static readonly ListSchemas = "redshift-data:ListSchemas";
	/** [List] redshift-data:ListSessions */
	static readonly ListSessions = "redshift-data:ListSessions";
	/** [List] redshift-data:ListStatements */
	static readonly ListStatements = "redshift-data:ListStatements";
	/** [List] redshift-data:ListTables */
	static readonly ListTables = "redshift-data:ListTables";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RedshiftDataActions.DescribeStatement,
		RedshiftDataActions.DescribeTable,
		RedshiftDataActions.actionGetStagingBucketLocation,
		RedshiftDataActions.actionGetStatementResult,
		RedshiftDataActions.ListDatabases,
		RedshiftDataActions.ListSchemas,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RedshiftDataActions.BatchExecuteStatement,
		RedshiftDataActions.CancelStatement,
		RedshiftDataActions.ExecuteStatement,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RedshiftDataActions.ListSessions,
		RedshiftDataActions.ListStatements,
		RedshiftDataActions.ListTables,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a cluster ARN.
 */
export interface RedshiftDataClusterArnProps {
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
 * Parsed components of a cluster ARN.
 */
export interface RedshiftDataClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a managed-workgroup ARN.
 */
export interface RedshiftDataManagedWorkgroupArnProps {
	/** The ManagedWorkgroupId component of the ARN. */
	readonly managedWorkgroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a managed-workgroup ARN.
 */
export interface RedshiftDataManagedWorkgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ManagedWorkgroupId component. */
	readonly managedWorkgroupId: string;
}

/**
 * Properties for building a workgroup ARN.
 */
export interface RedshiftDataWorkgroupArnProps {
	/** The WorkgroupId component of the ARN. */
	readonly workgroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workgroup ARN.
 */
export interface RedshiftDataWorkgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkgroupId component. */
	readonly workgroupId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<clusterName>[^:/?]+)$/;
const ManagedWorkgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):managed-workgroup\/(?<managedWorkgroupId>[^:/?]+)$/;
const WorkgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):workgroup\/(?<workgroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for redshift-data resources.
 */
export class RedshiftDataResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: RedshiftDataClusterArnProps): string {
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
	static parseClusterArn(arn: string): RedshiftDataClusterArnComponents {
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
	static managedWorkgroup(props: RedshiftDataManagedWorkgroupArnProps): string {
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
	static parseManagedWorkgroupArn(
		arn: string,
	): RedshiftDataManagedWorkgroupArnComponents {
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
	static workgroup(props: RedshiftDataWorkgroupArnProps): string {
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
	static parseWorkgroupArn(arn: string): RedshiftDataWorkgroupArnComponents {
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
	static readonly BatchExecuteStatement: string[] = [
		"redshift-data:BatchExecuteStatement",
	];
	/** IAM actions required for the CancelStatement API call. */
	static readonly CancelStatement: string[] = ["redshift-data:CancelStatement"];
	/** IAM actions required for the DescribeStatement API call. */
	static readonly DescribeStatement: string[] = [
		"redshift-data:DescribeStatement",
	];
	/** IAM actions required for the DescribeTable API call. */
	static readonly DescribeTable: string[] = ["redshift-data:DescribeTable"];
	/** IAM actions required for the ExecuteStatement API call. */
	static readonly ExecuteStatement: string[] = [
		"redshift-data:ExecuteStatement",
	];
	/** IAM actions required for the GetStatementResult API call. */
	static readonly opGetStatementResult: string[] = [
		"redshift-data:GetStatementResult",
	];
	/** IAM actions required for the GetStatementResultV2 API call. */
	static readonly opGetStatementResultV2: string[] = [
		"redshift-data:GetStatementResult",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly ListDatabases: string[] = ["redshift-data:ListDatabases"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly ListSchemas: string[] = ["redshift-data:ListSchemas"];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["redshift-data:ListSessions"];
	/** IAM actions required for the ListStatements API call. */
	static readonly ListStatements: string[] = ["redshift-data:ListStatements"];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["redshift-data:ListTables"];
}

/**
 * Condition key constants and builders for redshift-data.
 */
export class RedshiftDataConditions {
	/** Condition keys applicable to the BatchExecuteStatement action. */
	static readonly BatchExecuteStatementConditionKeys: string[] = [
		"redshift-data:glue-catalog-arn",
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the CancelStatement action. */
	static readonly CancelStatementConditionKeys: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the DescribeStatement action. */
	static readonly DescribeStatementConditionKeys: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the ExecuteStatement action. */
	static readonly ExecuteStatementConditionKeys: string[] = [
		"redshift-data:glue-catalog-arn",
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the GetStatementResult action. */
	static readonly actionGetStatementResultConditionKeys: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];
	/** Condition keys applicable to the ListSessions action. */
	static readonly ListSessionsConditionKeys: string[] = [
		"redshift-data:session-owner-iam-userid",
	];
	/** Condition keys applicable to the ListStatements action. */
	static readonly ListStatementsConditionKeys: string[] = [
		"redshift-data:statement-owner-iam-userid",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
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
