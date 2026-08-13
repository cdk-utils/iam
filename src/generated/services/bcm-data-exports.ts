// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bcm-data-exports.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bcm-data-exports service.
 */
export class BcmDataExportsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bcm-data-exports";

	/** [Write] bcm-data-exports:CreateExport */
	static readonly CREATE_EXPORT = "bcm-data-exports:CreateExport";
	/** [Write] bcm-data-exports:DeleteExport */
	static readonly DELETE_EXPORT = "bcm-data-exports:DeleteExport";
	/** [Read] bcm-data-exports:GetExecution */
	static readonly GET_EXECUTION = "bcm-data-exports:GetExecution";
	/** [Read] bcm-data-exports:GetExport */
	static readonly GET_EXPORT = "bcm-data-exports:GetExport";
	/** [Read] bcm-data-exports:GetTable */
	static readonly GET_TABLE = "bcm-data-exports:GetTable";
	/** [List] bcm-data-exports:ListExecutions */
	static readonly LIST_EXECUTIONS = "bcm-data-exports:ListExecutions";
	/** [List] bcm-data-exports:ListExports */
	static readonly LIST_EXPORTS = "bcm-data-exports:ListExports";
	/** [List] bcm-data-exports:ListTables */
	static readonly LIST_TABLES = "bcm-data-exports:ListTables";
	/** [Read] bcm-data-exports:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"bcm-data-exports:ListTagsForResource";
	/** [Tagging] bcm-data-exports:TagResource */
	static readonly TAG_RESOURCE = "bcm-data-exports:TagResource";
	/** [Tagging] bcm-data-exports:UntagResource */
	static readonly UNTAG_RESOURCE = "bcm-data-exports:UntagResource";
	/** [Write] bcm-data-exports:UpdateExport */
	static readonly UPDATE_EXPORT = "bcm-data-exports:UpdateExport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BcmDataExportsActions.GET_EXECUTION,
		BcmDataExportsActions.GET_EXPORT,
		BcmDataExportsActions.GET_TABLE,
		BcmDataExportsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BcmDataExportsActions.CREATE_EXPORT,
		BcmDataExportsActions.DELETE_EXPORT,
		BcmDataExportsActions.UPDATE_EXPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BcmDataExportsActions.LIST_EXECUTIONS,
		BcmDataExportsActions.LIST_EXPORTS,
		BcmDataExportsActions.LIST_TABLES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BcmDataExportsActions.TAG_RESOURCE,
		BcmDataExportsActions.UNTAG_RESOURCE,
	];
}

const BillingviewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview/(?<resourceId>[^:/?]+)$",
);
const ExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bcm-data-exports:(?<region>[^:]*):(?<account>[^:]*):export/(?<identifier>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bcm-data-exports:(?<region>[^:]*):(?<account>[^:]*):table/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bcm-data-exports resources.
 */
export class BcmDataExportsResources {
	/**
	 * Builds an ARN for the billingview resource.
	 */
	static billingview(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billing::${props.account ?? "*"}:billingview/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the billingview resource.
	 */
	static isValidBillingviewArn(arn: string): boolean {
		return BillingviewArnRegex.test(arn);
	}

	/**
	 * Parses a billingview ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillingviewArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = BillingviewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid billingview ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the export resource.
	 */
	static export(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bcm-data-exports:${props.region ?? "*"}:${props.account ?? "*"}:export/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export resource.
	 */
	static isValidExportArn(arn: string): boolean {
		return ExportArnRegex.test(arn);
	}

	/**
	 * Parses a export ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
		const match = ExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bcm-data-exports:${props.region ?? "*"}:${props.account ?? "*"}:table/${props.identifier}`;
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
		identifier: string;
	} {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for bcm-data-exports.
 */
export class BcmDataExportsOperations {
	/** IAM actions required for the CreateExport API call. */
	static readonly CREATE_EXPORT: string[] = [
		"bcm-data-exports:CreateExport",
		"sustainability:GetCarbonFootprintSummary",
		"cost-optimization-hub:GetRecommendation",
		"cost-optimization-hub:ListRecommendations",
		"bcm-data-exports:TagResource",
		"cur:PutReportDefinition",
	];
	/** IAM actions required for the DeleteExport API call. */
	static readonly DELETE_EXPORT: string[] = ["bcm-data-exports:DeleteExport"];
	/** IAM actions required for the GetExecution API call. */
	static readonly GET_EXECUTION: string[] = ["bcm-data-exports:GetExecution"];
	/** IAM actions required for the GetExport API call. */
	static readonly GET_EXPORT: string[] = ["bcm-data-exports:GetExport"];
	/** IAM actions required for the GetTable API call. */
	static readonly GET_TABLE: string[] = ["bcm-data-exports:GetTable"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = [
		"bcm-data-exports:ListExecutions",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["bcm-data-exports:ListExports"];
	/** IAM actions required for the ListTables API call. */
	static readonly LIST_TABLES: string[] = ["bcm-data-exports:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"bcm-data-exports:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["bcm-data-exports:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["bcm-data-exports:UntagResource"];
	/** IAM actions required for the UpdateExport API call. */
	static readonly UPDATE_EXPORT: string[] = ["bcm-data-exports:UpdateExport"];
}

/**
 * Condition key constants and builders for bcm-data-exports.
 */
export class BcmDataExportsConditions {
	/** Condition keys applicable to the CreateExport action. */
	static readonly CREATE_EXPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteExport action. */
	static readonly DELETE_EXPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExecution action. */
	static readonly GET_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExport action. */
	static readonly GET_EXPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListExecutions action. */
	static readonly LIST_EXECUTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateExport action. */
	static readonly UPDATE_EXPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
