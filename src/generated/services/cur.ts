// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cur.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cur service.
 */
export class CurActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cur";

	/** [Write] cur:DeleteReportDefinition */
	static readonly DELETE_REPORT_DEFINITION = "cur:DeleteReportDefinition";
	/** [Read] cur:DescribeReportDefinitions */
	static readonly DESCRIBE_REPORT_DEFINITIONS = "cur:DescribeReportDefinitions";
	/** [Read] cur:GetClassicReport */
	static readonly GET_CLASSIC_REPORT = "cur:GetClassicReport";
	/** [Read] cur:GetClassicReportPreferences */
	static readonly GET_CLASSIC_REPORT_PREFERENCES =
		"cur:GetClassicReportPreferences";
	/** [Read] cur:GetUsageReport */
	static readonly GET_USAGE_REPORT = "cur:GetUsageReport";
	/** [Read] cur:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "cur:ListTagsForResource";
	/** [Write] cur:ModifyReportDefinition */
	static readonly MODIFY_REPORT_DEFINITION = "cur:ModifyReportDefinition";
	/** [Write] cur:PutClassicReportPreferences */
	static readonly PUT_CLASSIC_REPORT_PREFERENCES =
		"cur:PutClassicReportPreferences";
	/** [Write] cur:PutReportDefinition */
	static readonly PUT_REPORT_DEFINITION = "cur:PutReportDefinition";
	/** [Tagging] cur:TagResource */
	static readonly TAG_RESOURCE = "cur:TagResource";
	/** [Tagging] cur:UntagResource */
	static readonly UNTAG_RESOURCE = "cur:UntagResource";
	/** [Read] cur:ValidateReportDestination */
	static readonly VALIDATE_REPORT_DESTINATION = "cur:ValidateReportDestination";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CurActions.DESCRIBE_REPORT_DEFINITIONS,
		CurActions.GET_CLASSIC_REPORT,
		CurActions.GET_CLASSIC_REPORT_PREFERENCES,
		CurActions.GET_USAGE_REPORT,
		CurActions.LIST_TAGS_FOR_RESOURCE,
		CurActions.VALIDATE_REPORT_DESTINATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CurActions.DELETE_REPORT_DEFINITION,
		CurActions.MODIFY_REPORT_DEFINITION,
		CurActions.PUT_CLASSIC_REPORT_PREFERENCES,
		CurActions.PUT_REPORT_DEFINITION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CurActions.TAG_RESOURCE,
		CurActions.UNTAG_RESOURCE,
	];
}

const CurArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cur:(?<region>[^:]*):(?<account>[^:]*):definition/(?<reportName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cur resources.
 */
export class CurResources {
	/**
	 * Builds an ARN for the cur resource.
	 */
	static cur(props: {
		/** The ReportName component of the ARN. */
		readonly reportName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cur:${props.region ?? "*"}:${props.account ?? "*"}:definition/${props.reportName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cur resource.
	 */
	static isValidCurArn(arn: string): boolean {
		return CurArnRegex.test(arn);
	}

	/**
	 * Parses a cur ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCurArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reportName: string;
	} {
		const match = CurArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cur ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportName: match.groups!.reportName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cur.
 */
export class CurOperations {
	/** IAM actions required for the DeleteReportDefinition API call. */
	static readonly DELETE_REPORT_DEFINITION: string[] = [
		"cur:DeleteReportDefinition",
	];
	/** IAM actions required for the DescribeReportDefinitions API call. */
	static readonly DESCRIBE_REPORT_DEFINITIONS: string[] = [
		"cur:DescribeReportDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cur:ListTagsForResource",
	];
	/** IAM actions required for the ModifyReportDefinition API call. */
	static readonly MODIFY_REPORT_DEFINITION: string[] = [
		"cur:ModifyReportDefinition",
	];
	/** IAM actions required for the PutReportDefinition API call. */
	static readonly PUT_REPORT_DEFINITION: string[] = [
		"cur:PutReportDefinition",
		"cur:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cur:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cur:UntagResource"];
}

/**
 * Condition key constants and builders for cur.
 */
export class CurConditions {
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
