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
	static readonly DeleteReportDefinition = "cur:DeleteReportDefinition";
	/** [Read] cur:DescribeReportDefinitions */
	static readonly DescribeReportDefinitions = "cur:DescribeReportDefinitions";
	/** [Read] cur:GetClassicReport */
	static readonly actionGetClassicReport = "cur:GetClassicReport";
	/** [Read] cur:GetClassicReportPreferences */
	static readonly actionGetClassicReportPreferences =
		"cur:GetClassicReportPreferences";
	/** [Read] cur:GetUsageReport */
	static readonly actionGetUsageReport = "cur:GetUsageReport";
	/** [Read] cur:ListTagsForResource */
	static readonly ListTagsForResource = "cur:ListTagsForResource";
	/** [Write] cur:ModifyReportDefinition */
	static readonly ModifyReportDefinition = "cur:ModifyReportDefinition";
	/** [Write] cur:PutClassicReportPreferences */
	static readonly PutClassicReportPreferences =
		"cur:PutClassicReportPreferences";
	/** [Write] cur:PutReportDefinition */
	static readonly PutReportDefinition = "cur:PutReportDefinition";
	/** [Tagging] cur:TagResource */
	static readonly TagResource = "cur:TagResource";
	/** [Tagging] cur:UntagResource */
	static readonly UntagResource = "cur:UntagResource";
	/** [Read] cur:ValidateReportDestination */
	static readonly ValidateReportDestination = "cur:ValidateReportDestination";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CurActions.DescribeReportDefinitions,
		CurActions.actionGetClassicReport,
		CurActions.actionGetClassicReportPreferences,
		CurActions.actionGetUsageReport,
		CurActions.ListTagsForResource,
		CurActions.ValidateReportDestination,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CurActions.DeleteReportDefinition,
		CurActions.ModifyReportDefinition,
		CurActions.PutClassicReportPreferences,
		CurActions.PutReportDefinition,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CurActions.TagResource,
		CurActions.UntagResource,
	];
}

/**
 * Properties for building a cur ARN.
 */
export interface CurCurArnProps {
	/** The ReportName component of the ARN. */
	readonly reportName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cur ARN.
 */
export interface CurCurArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportName component. */
	readonly reportName: string;
}

const CurArnRegex =
	/^arn:(?<partition>[^:]+):cur:(?<region>[^:]*):(?<account>[^:]*):definition\/(?<reportName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cur resources.
 */
export class CurResources {
	/**
	 * Builds an ARN for the cur resource.
	 */
	static cur(props: CurCurArnProps): string {
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
	static parseCurArn(arn: string): CurCurArnComponents {
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
	static readonly DeleteReportDefinition: string[] = [
		"cur:DeleteReportDefinition",
	];
	/** IAM actions required for the DescribeReportDefinitions API call. */
	static readonly DescribeReportDefinitions: string[] = [
		"cur:DescribeReportDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["cur:ListTagsForResource"];
	/** IAM actions required for the ModifyReportDefinition API call. */
	static readonly ModifyReportDefinition: string[] = [
		"cur:ModifyReportDefinition",
	];
	/** IAM actions required for the PutReportDefinition API call. */
	static readonly PutReportDefinition: string[] = [
		"cur:PutReportDefinition",
		"cur:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["cur:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["cur:UntagResource"];
}

/**
 * Condition key constants and builders for cur.
 */
export class CurConditions {
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
