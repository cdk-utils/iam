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
	static readonly CreateExport = "bcm-data-exports:CreateExport";
	/** [Write] bcm-data-exports:DeleteExport */
	static readonly DeleteExport = "bcm-data-exports:DeleteExport";
	/** [Read] bcm-data-exports:GetExecution */
	static readonly actionGetExecution = "bcm-data-exports:GetExecution";
	/** [Read] bcm-data-exports:GetExport */
	static readonly actionGetExport = "bcm-data-exports:GetExport";
	/** [Read] bcm-data-exports:GetTable */
	static readonly actionGetTable = "bcm-data-exports:GetTable";
	/** [List] bcm-data-exports:ListExecutions */
	static readonly ListExecutions = "bcm-data-exports:ListExecutions";
	/** [List] bcm-data-exports:ListExports */
	static readonly ListExports = "bcm-data-exports:ListExports";
	/** [List] bcm-data-exports:ListTables */
	static readonly ListTables = "bcm-data-exports:ListTables";
	/** [Read] bcm-data-exports:ListTagsForResource */
	static readonly ListTagsForResource = "bcm-data-exports:ListTagsForResource";
	/** [Tagging] bcm-data-exports:TagResource */
	static readonly TagResource = "bcm-data-exports:TagResource";
	/** [Tagging] bcm-data-exports:UntagResource */
	static readonly UntagResource = "bcm-data-exports:UntagResource";
	/** [Write] bcm-data-exports:UpdateExport */
	static readonly UpdateExport = "bcm-data-exports:UpdateExport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BcmDataExportsActions.actionGetExecution,
		BcmDataExportsActions.actionGetExport,
		BcmDataExportsActions.actionGetTable,
		BcmDataExportsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BcmDataExportsActions.CreateExport,
		BcmDataExportsActions.DeleteExport,
		BcmDataExportsActions.UpdateExport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BcmDataExportsActions.ListExecutions,
		BcmDataExportsActions.ListExports,
		BcmDataExportsActions.ListTables,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BcmDataExportsActions.TagResource,
		BcmDataExportsActions.UntagResource,
	];
}

/**
 * Properties for building a billingview ARN.
 */
export interface BcmDataExportsBillingviewArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a billingview ARN.
 */
export interface BcmDataExportsBillingviewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a export ARN.
 */
export interface BcmDataExportsExportArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a export ARN.
 */
export interface BcmDataExportsExportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a table ARN.
 */
export interface BcmDataExportsTableArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
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
export interface BcmDataExportsTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const BillingviewArnRegex =
	/^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview\/(?<resourceId>[^:/?]+)$/;
const ExportArnRegex =
	/^arn:(?<partition>[^:]+):bcm-data-exports:(?<region>[^:]*):(?<account>[^:]*):export\/(?<identifier>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):bcm-data-exports:(?<region>[^:]*):(?<account>[^:]*):table\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bcm-data-exports resources.
 */
export class BcmDataExportsResources {
	/**
	 * Builds an ARN for the billingview resource.
	 */
	static billingview(props: BcmDataExportsBillingviewArnProps): string {
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
	static parseBillingviewArn(
		arn: string,
	): BcmDataExportsBillingviewArnComponents {
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
	static export(props: BcmDataExportsExportArnProps): string {
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
	static parseExportArn(arn: string): BcmDataExportsExportArnComponents {
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
	static table(props: BcmDataExportsTableArnProps): string {
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
	static parseTableArn(arn: string): BcmDataExportsTableArnComponents {
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
	static readonly CreateExport: string[] = [
		"bcm-data-exports:CreateExport",
		"sustainability:GetCarbonFootprintSummary",
		"cost-optimization-hub:GetRecommendation",
		"cost-optimization-hub:ListRecommendations",
		"bcm-data-exports:TagResource",
		"cur:PutReportDefinition",
	];
	/** IAM actions required for the DeleteExport API call. */
	static readonly DeleteExport: string[] = ["bcm-data-exports:DeleteExport"];
	/** IAM actions required for the GetExecution API call. */
	static readonly opGetExecution: string[] = ["bcm-data-exports:GetExecution"];
	/** IAM actions required for the GetExport API call. */
	static readonly opGetExport: string[] = ["bcm-data-exports:GetExport"];
	/** IAM actions required for the GetTable API call. */
	static readonly opGetTable: string[] = ["bcm-data-exports:GetTable"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = [
		"bcm-data-exports:ListExecutions",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly ListExports: string[] = ["bcm-data-exports:ListExports"];
	/** IAM actions required for the ListTables API call. */
	static readonly ListTables: string[] = ["bcm-data-exports:ListTables"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"bcm-data-exports:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["bcm-data-exports:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["bcm-data-exports:UntagResource"];
	/** IAM actions required for the UpdateExport API call. */
	static readonly UpdateExport: string[] = ["bcm-data-exports:UpdateExport"];
}

/**
 * Condition key constants and builders for bcm-data-exports.
 */
export class BcmDataExportsConditions {
	/** Condition keys applicable to the CreateExport action. */
	static readonly CreateExportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteExport action. */
	static readonly DeleteExportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExecution action. */
	static readonly actionGetExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExport action. */
	static readonly actionGetExportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListExecutions action. */
	static readonly ListExecutionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateExport action. */
	static readonly UpdateExportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
