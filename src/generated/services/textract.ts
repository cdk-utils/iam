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
	static readonly ANALYZE_DOCUMENT = "textract:AnalyzeDocument";
	/** [Read] textract:AnalyzeExpense */
	static readonly ANALYZE_EXPENSE = "textract:AnalyzeExpense";
	/** [Read] textract:AnalyzeID */
	static readonly ANALYZE_ID = "textract:AnalyzeID";
	/** [Write] textract:CreateAdapter */
	static readonly CREATE_ADAPTER = "textract:CreateAdapter";
	/** [Write] textract:CreateAdapterVersion */
	static readonly CREATE_ADAPTER_VERSION = "textract:CreateAdapterVersion";
	/** [Write] textract:DeleteAdapter */
	static readonly DELETE_ADAPTER = "textract:DeleteAdapter";
	/** [Write] textract:DeleteAdapterVersion */
	static readonly DELETE_ADAPTER_VERSION = "textract:DeleteAdapterVersion";
	/** [Read] textract:DetectDocumentText */
	static readonly DETECT_DOCUMENT_TEXT = "textract:DetectDocumentText";
	/** [Read] textract:GetAdapter */
	static readonly GET_ADAPTER = "textract:GetAdapter";
	/** [Read] textract:GetAdapterVersion */
	static readonly GET_ADAPTER_VERSION = "textract:GetAdapterVersion";
	/** [Read] textract:GetDocumentAnalysis */
	static readonly GET_DOCUMENT_ANALYSIS = "textract:GetDocumentAnalysis";
	/** [Read] textract:GetDocumentTextDetection */
	static readonly GET_DOCUMENT_TEXT_DETECTION =
		"textract:GetDocumentTextDetection";
	/** [Read] textract:GetExpenseAnalysis */
	static readonly GET_EXPENSE_ANALYSIS = "textract:GetExpenseAnalysis";
	/** [Read] textract:GetLendingAnalysis */
	static readonly GET_LENDING_ANALYSIS = "textract:GetLendingAnalysis";
	/** [Read] textract:GetLendingAnalysisSummary */
	static readonly GET_LENDING_ANALYSIS_SUMMARY =
		"textract:GetLendingAnalysisSummary";
	/** [Read] textract:ListAdapterVersions */
	static readonly LIST_ADAPTER_VERSIONS = "textract:ListAdapterVersions";
	/** [Read] textract:ListAdapters */
	static readonly LIST_ADAPTERS = "textract:ListAdapters";
	/** [Read] textract:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "textract:ListTagsForResource";
	/** [Write] textract:StartDocumentAnalysis */
	static readonly START_DOCUMENT_ANALYSIS = "textract:StartDocumentAnalysis";
	/** [Write] textract:StartDocumentTextDetection */
	static readonly START_DOCUMENT_TEXT_DETECTION =
		"textract:StartDocumentTextDetection";
	/** [Write] textract:StartExpenseAnalysis */
	static readonly START_EXPENSE_ANALYSIS = "textract:StartExpenseAnalysis";
	/** [Write] textract:StartLendingAnalysis */
	static readonly START_LENDING_ANALYSIS = "textract:StartLendingAnalysis";
	/** [Tagging] textract:TagResource */
	static readonly TAG_RESOURCE = "textract:TagResource";
	/** [Tagging] textract:UntagResource */
	static readonly UNTAG_RESOURCE = "textract:UntagResource";
	/** [Write] textract:UpdateAdapter */
	static readonly UPDATE_ADAPTER = "textract:UpdateAdapter";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TextractActions.ANALYZE_DOCUMENT,
		TextractActions.ANALYZE_EXPENSE,
		TextractActions.ANALYZE_ID,
		TextractActions.DETECT_DOCUMENT_TEXT,
		TextractActions.GET_ADAPTER,
		TextractActions.GET_ADAPTER_VERSION,
		TextractActions.GET_DOCUMENT_ANALYSIS,
		TextractActions.GET_DOCUMENT_TEXT_DETECTION,
		TextractActions.GET_EXPENSE_ANALYSIS,
		TextractActions.GET_LENDING_ANALYSIS,
		TextractActions.GET_LENDING_ANALYSIS_SUMMARY,
		TextractActions.LIST_ADAPTER_VERSIONS,
		TextractActions.LIST_ADAPTERS,
		TextractActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TextractActions.CREATE_ADAPTER,
		TextractActions.CREATE_ADAPTER_VERSION,
		TextractActions.DELETE_ADAPTER,
		TextractActions.DELETE_ADAPTER_VERSION,
		TextractActions.START_DOCUMENT_ANALYSIS,
		TextractActions.START_DOCUMENT_TEXT_DETECTION,
		TextractActions.START_EXPENSE_ANALYSIS,
		TextractActions.START_LENDING_ANALYSIS,
		TextractActions.UPDATE_ADAPTER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TextractActions.TAG_RESOURCE,
		TextractActions.UNTAG_RESOURCE,
	];
}

const AdapterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):/adapters/(?<adapterId>[^:/?]+)$",
);
const AdapterversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):/adapters/(?<adapterId>[^:/?]+)/versions/(?<adapterVersion>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for textract resources.
 */
export class TextractResources {
	/**
	 * Builds an ARN for the adapter resource.
	 */
	static adapter(props: {
		/** The AdapterId component of the ARN. */
		readonly adapterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAdapterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		adapterId: string;
	} {
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
	static adapterversion(props: {
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
	}): string {
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
	static parseAdapterversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		adapterId: string;
		adapterVersion: string;
	} {
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
	static readonly ANALYZE_DOCUMENT: string[] = ["textract:AnalyzeDocument"];
	/** IAM actions required for the AnalyzeExpense API call. */
	static readonly ANALYZE_EXPENSE: string[] = ["textract:AnalyzeExpense"];
	/** IAM actions required for the AnalyzeID API call. */
	static readonly ANALYZE_ID: string[] = ["textract:AnalyzeID"];
	/** IAM actions required for the CreateAdapter API call. */
	static readonly CREATE_ADAPTER: string[] = [
		"textract:CreateAdapter",
		"textract:TagResource",
	];
	/** IAM actions required for the CreateAdapterVersion API call. */
	static readonly CREATE_ADAPTER_VERSION: string[] = [
		"textract:CreateAdapterVersion",
		"textract:TagResource",
	];
	/** IAM actions required for the DeleteAdapter API call. */
	static readonly DELETE_ADAPTER: string[] = ["textract:DeleteAdapter"];
	/** IAM actions required for the DeleteAdapterVersion API call. */
	static readonly DELETE_ADAPTER_VERSION: string[] = [
		"textract:DeleteAdapterVersion",
	];
	/** IAM actions required for the DetectDocumentText API call. */
	static readonly DETECT_DOCUMENT_TEXT: string[] = [
		"textract:DetectDocumentText",
	];
	/** IAM actions required for the GetAdapter API call. */
	static readonly GET_ADAPTER: string[] = ["textract:GetAdapter"];
	/** IAM actions required for the GetAdapterVersion API call. */
	static readonly GET_ADAPTER_VERSION: string[] = [
		"textract:GetAdapterVersion",
	];
	/** IAM actions required for the GetDocumentAnalysis API call. */
	static readonly GET_DOCUMENT_ANALYSIS: string[] = [
		"textract:GetDocumentAnalysis",
	];
	/** IAM actions required for the GetDocumentTextDetection API call. */
	static readonly GET_DOCUMENT_TEXT_DETECTION: string[] = [
		"textract:GetDocumentTextDetection",
	];
	/** IAM actions required for the GetExpenseAnalysis API call. */
	static readonly GET_EXPENSE_ANALYSIS: string[] = [
		"textract:GetExpenseAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysis API call. */
	static readonly GET_LENDING_ANALYSIS: string[] = [
		"textract:GetLendingAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysisSummary API call. */
	static readonly GET_LENDING_ANALYSIS_SUMMARY: string[] = [
		"textract:GetLendingAnalysisSummary",
	];
	/** IAM actions required for the ListAdapterVersions API call. */
	static readonly LIST_ADAPTER_VERSIONS: string[] = [
		"textract:ListAdapterVersions",
	];
	/** IAM actions required for the ListAdapters API call. */
	static readonly LIST_ADAPTERS: string[] = ["textract:ListAdapters"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"textract:ListTagsForResource",
	];
	/** IAM actions required for the StartDocumentAnalysis API call. */
	static readonly START_DOCUMENT_ANALYSIS: string[] = [
		"iam:PassRole",
		"textract:StartDocumentAnalysis",
	];
	/** IAM actions required for the StartDocumentTextDetection API call. */
	static readonly START_DOCUMENT_TEXT_DETECTION: string[] = [
		"iam:PassRole",
		"textract:StartDocumentTextDetection",
	];
	/** IAM actions required for the StartExpenseAnalysis API call. */
	static readonly START_EXPENSE_ANALYSIS: string[] = [
		"iam:PassRole",
		"textract:StartExpenseAnalysis",
	];
	/** IAM actions required for the StartLendingAnalysis API call. */
	static readonly START_LENDING_ANALYSIS: string[] = [
		"iam:PassRole",
		"textract:StartLendingAnalysis",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["textract:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["textract:UntagResource"];
	/** IAM actions required for the UpdateAdapter API call. */
	static readonly UPDATE_ADAPTER: string[] = ["textract:UpdateAdapter"];
}

/**
 * Condition key constants and builders for textract.
 */
export class TextractConditions {
	/** Condition keys applicable to the CreateAdapter action. */
	static readonly CREATE_ADAPTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAdapterVersion action. */
	static readonly CREATE_ADAPTER_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
