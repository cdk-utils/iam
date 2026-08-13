// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/translate.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the translate service.
 */
export class TranslateActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "translate";

	/** [Write] translate:CreateParallelData */
	static readonly CREATE_PARALLEL_DATA = "translate:CreateParallelData";
	/** [Write] translate:DeleteParallelData */
	static readonly DELETE_PARALLEL_DATA = "translate:DeleteParallelData";
	/** [Write] translate:DeleteTerminology */
	static readonly DELETE_TERMINOLOGY = "translate:DeleteTerminology";
	/** [Read] translate:DescribeTextTranslationJob */
	static readonly DESCRIBE_TEXT_TRANSLATION_JOB =
		"translate:DescribeTextTranslationJob";
	/** [Read] translate:GetParallelData */
	static readonly GET_PARALLEL_DATA = "translate:GetParallelData";
	/** [Read] translate:GetTerminology */
	static readonly GET_TERMINOLOGY = "translate:GetTerminology";
	/** [Write] translate:ImportTerminology */
	static readonly IMPORT_TERMINOLOGY = "translate:ImportTerminology";
	/** [List] translate:ListLanguages */
	static readonly LIST_LANGUAGES = "translate:ListLanguages";
	/** [List] translate:ListParallelData */
	static readonly LIST_PARALLEL_DATA = "translate:ListParallelData";
	/** [Read] translate:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "translate:ListTagsForResource";
	/** [List] translate:ListTerminologies */
	static readonly LIST_TERMINOLOGIES = "translate:ListTerminologies";
	/** [List] translate:ListTextTranslationJobs */
	static readonly LIST_TEXT_TRANSLATION_JOBS =
		"translate:ListTextTranslationJobs";
	/** [Write] translate:StartTextTranslationJob */
	static readonly START_TEXT_TRANSLATION_JOB =
		"translate:StartTextTranslationJob";
	/** [Write] translate:StopTextTranslationJob */
	static readonly STOP_TEXT_TRANSLATION_JOB =
		"translate:StopTextTranslationJob";
	/** [Tagging] translate:TagResource */
	static readonly TAG_RESOURCE = "translate:TagResource";
	/** [Read] translate:TranslateDocument */
	static readonly TRANSLATE_DOCUMENT = "translate:TranslateDocument";
	/** [Read] translate:TranslateText */
	static readonly TRANSLATE_TEXT = "translate:TranslateText";
	/** [Tagging] translate:UntagResource */
	static readonly UNTAG_RESOURCE = "translate:UntagResource";
	/** [Write] translate:UpdateParallelData */
	static readonly UPDATE_PARALLEL_DATA = "translate:UpdateParallelData";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TranslateActions.DESCRIBE_TEXT_TRANSLATION_JOB,
		TranslateActions.GET_PARALLEL_DATA,
		TranslateActions.GET_TERMINOLOGY,
		TranslateActions.LIST_TAGS_FOR_RESOURCE,
		TranslateActions.TRANSLATE_DOCUMENT,
		TranslateActions.TRANSLATE_TEXT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TranslateActions.CREATE_PARALLEL_DATA,
		TranslateActions.DELETE_PARALLEL_DATA,
		TranslateActions.DELETE_TERMINOLOGY,
		TranslateActions.IMPORT_TERMINOLOGY,
		TranslateActions.START_TEXT_TRANSLATION_JOB,
		TranslateActions.STOP_TEXT_TRANSLATION_JOB,
		TranslateActions.UPDATE_PARALLEL_DATA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TranslateActions.LIST_LANGUAGES,
		TranslateActions.LIST_PARALLEL_DATA,
		TranslateActions.LIST_TERMINOLOGIES,
		TranslateActions.LIST_TEXT_TRANSLATION_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TranslateActions.TAG_RESOURCE,
		TranslateActions.UNTAG_RESOURCE,
	];
}

const ParallelDataArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):translate:(?<region>[^:]*):(?<account>[^:]*):parallel-data/(?<resourceName>[^:/?]+)$",
);
const TerminologyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):translate:(?<region>[^:]*):(?<account>[^:]*):terminology/(?<resourceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for translate resources.
 */
export class TranslateResources {
	/**
	 * Builds an ARN for the parallel-data resource.
	 */
	static parallelData(props: {
		/** The ResourceName component of the ARN. */
		readonly resourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:translate:${props.region ?? "*"}:${props.account ?? "*"}:parallel-data/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the parallel-data resource.
	 */
	static isValidParallelDataArn(arn: string): boolean {
		return ParallelDataArnRegex.test(arn);
	}

	/**
	 * Parses a parallel-data ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseParallelDataArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceName: string;
	} {
		const match = ParallelDataArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parallel-data ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceName: match.groups!.resourceName,
		};
	}

	/**
	 * Builds an ARN for the terminology resource.
	 */
	static terminology(props: {
		/** The ResourceName component of the ARN. */
		readonly resourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:translate:${props.region ?? "*"}:${props.account ?? "*"}:terminology/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the terminology resource.
	 */
	static isValidTerminologyArn(arn: string): boolean {
		return TerminologyArnRegex.test(arn);
	}

	/**
	 * Parses a terminology ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTerminologyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceName: string;
	} {
		const match = TerminologyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid terminology ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceName: match.groups!.resourceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for translate.
 */
export class TranslateOperations {
	/** IAM actions required for the CreateParallelData API call. */
	static readonly CREATE_PARALLEL_DATA: string[] = [
		"translate:CreateParallelData",
		"translate:TagResource",
	];
	/** IAM actions required for the DeleteParallelData API call. */
	static readonly DELETE_PARALLEL_DATA: string[] = [
		"translate:DeleteParallelData",
	];
	/** IAM actions required for the DeleteTerminology API call. */
	static readonly DELETE_TERMINOLOGY: string[] = [
		"translate:DeleteTerminology",
	];
	/** IAM actions required for the DescribeTextTranslationJob API call. */
	static readonly DESCRIBE_TEXT_TRANSLATION_JOB: string[] = [
		"translate:DescribeTextTranslationJob",
	];
	/** IAM actions required for the GetParallelData API call. */
	static readonly GET_PARALLEL_DATA: string[] = ["translate:GetParallelData"];
	/** IAM actions required for the GetTerminology API call. */
	static readonly GET_TERMINOLOGY: string[] = ["translate:GetTerminology"];
	/** IAM actions required for the ImportTerminology API call. */
	static readonly IMPORT_TERMINOLOGY: string[] = [
		"translate:ImportTerminology",
		"translate:TagResource",
	];
	/** IAM actions required for the ListLanguages API call. */
	static readonly LIST_LANGUAGES: string[] = ["translate:ListLanguages"];
	/** IAM actions required for the ListParallelData API call. */
	static readonly LIST_PARALLEL_DATA: string[] = ["translate:ListParallelData"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"translate:ListTagsForResource",
	];
	/** IAM actions required for the ListTerminologies API call. */
	static readonly LIST_TERMINOLOGIES: string[] = [
		"translate:ListTerminologies",
	];
	/** IAM actions required for the ListTextTranslationJobs API call. */
	static readonly LIST_TEXT_TRANSLATION_JOBS: string[] = [
		"translate:ListTextTranslationJobs",
	];
	/** IAM actions required for the StartTextTranslationJob API call. */
	static readonly START_TEXT_TRANSLATION_JOB: string[] = [
		"iam:PassRole",
		"translate:StartTextTranslationJob",
	];
	/** IAM actions required for the StopTextTranslationJob API call. */
	static readonly STOP_TEXT_TRANSLATION_JOB: string[] = [
		"translate:StopTextTranslationJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["translate:TagResource"];
	/** IAM actions required for the TranslateDocument API call. */
	static readonly TRANSLATE_DOCUMENT: string[] = [
		"translate:TranslateDocument",
	];
	/** IAM actions required for the TranslateText API call. */
	static readonly TRANSLATE_TEXT: string[] = ["translate:TranslateText"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["translate:UntagResource"];
	/** IAM actions required for the UpdateParallelData API call. */
	static readonly UPDATE_PARALLEL_DATA: string[] = [
		"translate:UpdateParallelData",
	];
}

/**
 * Condition key constants and builders for translate.
 */
export class TranslateConditions {
	/** Condition keys applicable to the CreateParallelData action. */
	static readonly CREATE_PARALLEL_DATA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportTerminology action. */
	static readonly IMPORT_TERMINOLOGY_CONDITION_KEYS: string[] = [
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
