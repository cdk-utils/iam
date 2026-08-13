// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/textract.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the textract service.
 */
export class TextractActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "textract";

	/** [Read] textract:AnalyzeDocument */
	static readonly AnalyzeDocument = "textract:AnalyzeDocument";
	/** [Read] textract:AnalyzeExpense */
	static readonly AnalyzeExpense = "textract:AnalyzeExpense";
	/** [Read] textract:AnalyzeID */
	static readonly AnalyzeID = "textract:AnalyzeID";
	/** [Write] textract:CreateAdapter */
	static readonly CreateAdapter = "textract:CreateAdapter";
	/** [Write] textract:CreateAdapterVersion */
	static readonly CreateAdapterVersion = "textract:CreateAdapterVersion";
	/** [Write] textract:DeleteAdapter */
	static readonly DeleteAdapter = "textract:DeleteAdapter";
	/** [Write] textract:DeleteAdapterVersion */
	static readonly DeleteAdapterVersion = "textract:DeleteAdapterVersion";
	/** [Read] textract:DetectDocumentText */
	static readonly DetectDocumentText = "textract:DetectDocumentText";
	/** [Read] textract:GetAdapter */
	static readonly actionGetAdapter = "textract:GetAdapter";
	/** [Read] textract:GetAdapterVersion */
	static readonly actionGetAdapterVersion = "textract:GetAdapterVersion";
	/** [Read] textract:GetDocumentAnalysis */
	static readonly actionGetDocumentAnalysis = "textract:GetDocumentAnalysis";
	/** [Read] textract:GetDocumentTextDetection */
	static readonly actionGetDocumentTextDetection =
		"textract:GetDocumentTextDetection";
	/** [Read] textract:GetExpenseAnalysis */
	static readonly actionGetExpenseAnalysis = "textract:GetExpenseAnalysis";
	/** [Read] textract:GetLendingAnalysis */
	static readonly actionGetLendingAnalysis = "textract:GetLendingAnalysis";
	/** [Read] textract:GetLendingAnalysisSummary */
	static readonly actionGetLendingAnalysisSummary =
		"textract:GetLendingAnalysisSummary";
	/** [Read] textract:ListAdapterVersions */
	static readonly ListAdapterVersions = "textract:ListAdapterVersions";
	/** [Read] textract:ListAdapters */
	static readonly ListAdapters = "textract:ListAdapters";
	/** [Read] textract:ListTagsForResource */
	static readonly ListTagsForResource = "textract:ListTagsForResource";
	/** [Write] textract:StartDocumentAnalysis */
	static readonly StartDocumentAnalysis = "textract:StartDocumentAnalysis";
	/** [Write] textract:StartDocumentTextDetection */
	static readonly StartDocumentTextDetection =
		"textract:StartDocumentTextDetection";
	/** [Write] textract:StartExpenseAnalysis */
	static readonly StartExpenseAnalysis = "textract:StartExpenseAnalysis";
	/** [Write] textract:StartLendingAnalysis */
	static readonly StartLendingAnalysis = "textract:StartLendingAnalysis";
	/** [Tagging] textract:TagResource */
	static readonly TagResource = "textract:TagResource";
	/** [Tagging] textract:UntagResource */
	static readonly UntagResource = "textract:UntagResource";
	/** [Write] textract:UpdateAdapter */
	static readonly UpdateAdapter = "textract:UpdateAdapter";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TextractActions.AnalyzeDocument,
		TextractActions.AnalyzeExpense,
		TextractActions.AnalyzeID,
		TextractActions.DetectDocumentText,
		TextractActions.actionGetAdapter,
		TextractActions.actionGetAdapterVersion,
		TextractActions.actionGetDocumentAnalysis,
		TextractActions.actionGetDocumentTextDetection,
		TextractActions.actionGetExpenseAnalysis,
		TextractActions.actionGetLendingAnalysis,
		TextractActions.actionGetLendingAnalysisSummary,
		TextractActions.ListAdapterVersions,
		TextractActions.ListAdapters,
		TextractActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TextractActions.CreateAdapter,
		TextractActions.CreateAdapterVersion,
		TextractActions.DeleteAdapter,
		TextractActions.DeleteAdapterVersion,
		TextractActions.StartDocumentAnalysis,
		TextractActions.StartDocumentTextDetection,
		TextractActions.StartExpenseAnalysis,
		TextractActions.StartLendingAnalysis,
		TextractActions.UpdateAdapter,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TextractActions.TagResource,
		TextractActions.UntagResource,
	];
}

/**
 * Properties for building a adapter ARN.
 */
export interface TextractAdapterArnProps {
	/** The AdapterId component of the ARN. */
	readonly adapterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a adapter ARN.
 */
export interface TextractAdapterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AdapterId component. */
	readonly adapterId: string;
}

/**
 * Properties for building a adapterversion ARN.
 */
export interface TextractAdapterversionArnProps {
	/** The AdapterId component of the ARN. */
	readonly adapterId: string;
	/** The AdapterVersion component of the ARN. */
	readonly adapterVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a adapterversion ARN.
 */
export interface TextractAdapterversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AdapterId component. */
	readonly adapterId: string;
	/** The AdapterVersion component. */
	readonly adapterVersion: string;
}

const AdapterArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):\/adapters\/(?<adapterId>[^:/?]+)$/;
const AdapterversionArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):\/adapters\/(?<adapterId>[^:/?]+)\/versions\/(?<adapterVersion>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for textract resources.
 */
export class TextractResources {
	/**
	 * Builds an ARN for the adapter resource.
	 */
	static adapter(props: TextractAdapterArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:/adapters/${props.adapterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the adapter resource.
	 */
	static isValidAdapterArn(arn: string): boolean {
		return AdapterArnRegex.test(arn);
	}

	/**
	 * Parses a adapter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdapterArn(arn: string): TextractAdapterArnComponents {
		const match = AdapterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid adapter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			adapterId: match.groups!.adapterId,
		};
	}

	/**
	 * Builds an ARN for the adapterversion resource.
	 */
	static adapterversion(props: TextractAdapterversionArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:/adapters/${props.adapterId}/versions/${props.adapterVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the adapterversion resource.
	 */
	static isValidAdapterversionArn(arn: string): boolean {
		return AdapterversionArnRegex.test(arn);
	}

	/**
	 * Parses a adapterversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdapterversionArn(
		arn: string,
	): TextractAdapterversionArnComponents {
		const match = AdapterversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid adapterversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			adapterId: match.groups!.adapterId,
			adapterVersion: match.groups!.adapterVersion,
		};
	}
}

/**
 * API operation to required IAM actions mapping for textract.
 */
export class TextractOperations {
	/** IAM actions required for the AnalyzeDocument API call. */
	static readonly AnalyzeDocument: string[] = ["textract:AnalyzeDocument"];
	/** IAM actions required for the AnalyzeExpense API call. */
	static readonly AnalyzeExpense: string[] = ["textract:AnalyzeExpense"];
	/** IAM actions required for the AnalyzeID API call. */
	static readonly AnalyzeID: string[] = ["textract:AnalyzeID"];
	/** IAM actions required for the CreateAdapter API call. */
	static readonly CreateAdapter: string[] = [
		"textract:CreateAdapter",
		"textract:TagResource",
	];
	/** IAM actions required for the CreateAdapterVersion API call. */
	static readonly CreateAdapterVersion: string[] = [
		"textract:CreateAdapterVersion",
		"textract:TagResource",
	];
	/** IAM actions required for the DeleteAdapter API call. */
	static readonly DeleteAdapter: string[] = ["textract:DeleteAdapter"];
	/** IAM actions required for the DeleteAdapterVersion API call. */
	static readonly DeleteAdapterVersion: string[] = [
		"textract:DeleteAdapterVersion",
	];
	/** IAM actions required for the DetectDocumentText API call. */
	static readonly DetectDocumentText: string[] = [
		"textract:DetectDocumentText",
	];
	/** IAM actions required for the GetAdapter API call. */
	static readonly opGetAdapter: string[] = ["textract:GetAdapter"];
	/** IAM actions required for the GetAdapterVersion API call. */
	static readonly opGetAdapterVersion: string[] = [
		"textract:GetAdapterVersion",
	];
	/** IAM actions required for the GetDocumentAnalysis API call. */
	static readonly opGetDocumentAnalysis: string[] = [
		"textract:GetDocumentAnalysis",
	];
	/** IAM actions required for the GetDocumentTextDetection API call. */
	static readonly opGetDocumentTextDetection: string[] = [
		"textract:GetDocumentTextDetection",
	];
	/** IAM actions required for the GetExpenseAnalysis API call. */
	static readonly opGetExpenseAnalysis: string[] = [
		"textract:GetExpenseAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysis API call. */
	static readonly opGetLendingAnalysis: string[] = [
		"textract:GetLendingAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysisSummary API call. */
	static readonly opGetLendingAnalysisSummary: string[] = [
		"textract:GetLendingAnalysisSummary",
	];
	/** IAM actions required for the ListAdapterVersions API call. */
	static readonly ListAdapterVersions: string[] = [
		"textract:ListAdapterVersions",
	];
	/** IAM actions required for the ListAdapters API call. */
	static readonly ListAdapters: string[] = ["textract:ListAdapters"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"textract:ListTagsForResource",
	];
	/** IAM actions required for the StartDocumentAnalysis API call. */
	static readonly StartDocumentAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartDocumentAnalysis",
	];
	/** IAM actions required for the StartDocumentTextDetection API call. */
	static readonly StartDocumentTextDetection: string[] = [
		"iam:PassRole",
		"textract:StartDocumentTextDetection",
	];
	/** IAM actions required for the StartExpenseAnalysis API call. */
	static readonly StartExpenseAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartExpenseAnalysis",
	];
	/** IAM actions required for the StartLendingAnalysis API call. */
	static readonly StartLendingAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartLendingAnalysis",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["textract:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["textract:UntagResource"];
	/** IAM actions required for the UpdateAdapter API call. */
	static readonly UpdateAdapter: string[] = ["textract:UpdateAdapter"];
}

/**
 * Condition key constants and builders for textract.
 */
export class TextractConditions {
	/** Condition keys applicable to the CreateAdapter action. */
	static readonly CreateAdapterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAdapterVersion action. */
	static readonly CreateAdapterVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
