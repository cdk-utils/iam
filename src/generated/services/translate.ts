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
	static readonly CreateParallelData = "translate:CreateParallelData";
	/** [Write] translate:DeleteParallelData */
	static readonly DeleteParallelData = "translate:DeleteParallelData";
	/** [Write] translate:DeleteTerminology */
	static readonly DeleteTerminology = "translate:DeleteTerminology";
	/** [Read] translate:DescribeTextTranslationJob */
	static readonly DescribeTextTranslationJob =
		"translate:DescribeTextTranslationJob";
	/** [Read] translate:GetParallelData */
	static readonly actionGetParallelData = "translate:GetParallelData";
	/** [Read] translate:GetTerminology */
	static readonly actionGetTerminology = "translate:GetTerminology";
	/** [Write] translate:ImportTerminology */
	static readonly ImportTerminology = "translate:ImportTerminology";
	/** [List] translate:ListLanguages */
	static readonly ListLanguages = "translate:ListLanguages";
	/** [List] translate:ListParallelData */
	static readonly ListParallelData = "translate:ListParallelData";
	/** [Read] translate:ListTagsForResource */
	static readonly ListTagsForResource = "translate:ListTagsForResource";
	/** [List] translate:ListTerminologies */
	static readonly ListTerminologies = "translate:ListTerminologies";
	/** [List] translate:ListTextTranslationJobs */
	static readonly ListTextTranslationJobs = "translate:ListTextTranslationJobs";
	/** [Write] translate:StartTextTranslationJob */
	static readonly StartTextTranslationJob = "translate:StartTextTranslationJob";
	/** [Write] translate:StopTextTranslationJob */
	static readonly StopTextTranslationJob = "translate:StopTextTranslationJob";
	/** [Tagging] translate:TagResource */
	static readonly TagResource = "translate:TagResource";
	/** [Read] translate:TranslateDocument */
	static readonly TranslateDocument = "translate:TranslateDocument";
	/** [Read] translate:TranslateText */
	static readonly TranslateText = "translate:TranslateText";
	/** [Tagging] translate:UntagResource */
	static readonly UntagResource = "translate:UntagResource";
	/** [Write] translate:UpdateParallelData */
	static readonly UpdateParallelData = "translate:UpdateParallelData";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TranslateActions.DescribeTextTranslationJob,
		TranslateActions.actionGetParallelData,
		TranslateActions.actionGetTerminology,
		TranslateActions.ListTagsForResource,
		TranslateActions.TranslateDocument,
		TranslateActions.TranslateText,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TranslateActions.CreateParallelData,
		TranslateActions.DeleteParallelData,
		TranslateActions.DeleteTerminology,
		TranslateActions.ImportTerminology,
		TranslateActions.StartTextTranslationJob,
		TranslateActions.StopTextTranslationJob,
		TranslateActions.UpdateParallelData,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TranslateActions.ListLanguages,
		TranslateActions.ListParallelData,
		TranslateActions.ListTerminologies,
		TranslateActions.ListTextTranslationJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TranslateActions.TagResource,
		TranslateActions.UntagResource,
	];
}

/**
 * Properties for building a parallel-data ARN.
 */
export interface TranslateParallelDataArnProps {
	/** The ResourceName component of the ARN. */
	readonly resourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a parallel-data ARN.
 */
export interface TranslateParallelDataArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

/**
 * Properties for building a terminology ARN.
 */
export interface TranslateTerminologyArnProps {
	/** The ResourceName component of the ARN. */
	readonly resourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a terminology ARN.
 */
export interface TranslateTerminologyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

const ParallelDataArnRegex =
	/^arn:(?<partition>[^:]+):translate:(?<region>[^:]*):(?<account>[^:]*):parallel-data\/(?<resourceName>[^:/?]+)$/;
const TerminologyArnRegex =
	/^arn:(?<partition>[^:]+):translate:(?<region>[^:]*):(?<account>[^:]*):terminology\/(?<resourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for translate resources.
 */
export class TranslateResources {
	/**
	 * Builds an ARN for the parallel-data resource.
	 */
	static parallelData(props: TranslateParallelDataArnProps): string {
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
	static parseParallelDataArn(arn: string): TranslateParallelDataArnComponents {
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
	static terminology(props: TranslateTerminologyArnProps): string {
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
	static parseTerminologyArn(arn: string): TranslateTerminologyArnComponents {
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
	static readonly CreateParallelData: string[] = [
		"translate:CreateParallelData",
		"translate:TagResource",
	];
	/** IAM actions required for the DeleteParallelData API call. */
	static readonly DeleteParallelData: string[] = [
		"translate:DeleteParallelData",
	];
	/** IAM actions required for the DeleteTerminology API call. */
	static readonly DeleteTerminology: string[] = ["translate:DeleteTerminology"];
	/** IAM actions required for the DescribeTextTranslationJob API call. */
	static readonly DescribeTextTranslationJob: string[] = [
		"translate:DescribeTextTranslationJob",
	];
	/** IAM actions required for the GetParallelData API call. */
	static readonly opGetParallelData: string[] = ["translate:GetParallelData"];
	/** IAM actions required for the GetTerminology API call. */
	static readonly opGetTerminology: string[] = ["translate:GetTerminology"];
	/** IAM actions required for the ImportTerminology API call. */
	static readonly ImportTerminology: string[] = [
		"translate:ImportTerminology",
		"translate:TagResource",
	];
	/** IAM actions required for the ListLanguages API call. */
	static readonly ListLanguages: string[] = ["translate:ListLanguages"];
	/** IAM actions required for the ListParallelData API call. */
	static readonly ListParallelData: string[] = ["translate:ListParallelData"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"translate:ListTagsForResource",
	];
	/** IAM actions required for the ListTerminologies API call. */
	static readonly ListTerminologies: string[] = ["translate:ListTerminologies"];
	/** IAM actions required for the ListTextTranslationJobs API call. */
	static readonly ListTextTranslationJobs: string[] = [
		"translate:ListTextTranslationJobs",
	];
	/** IAM actions required for the StartTextTranslationJob API call. */
	static readonly StartTextTranslationJob: string[] = [
		"iam:PassRole",
		"translate:StartTextTranslationJob",
	];
	/** IAM actions required for the StopTextTranslationJob API call. */
	static readonly StopTextTranslationJob: string[] = [
		"translate:StopTextTranslationJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["translate:TagResource"];
	/** IAM actions required for the TranslateDocument API call. */
	static readonly TranslateDocument: string[] = ["translate:TranslateDocument"];
	/** IAM actions required for the TranslateText API call. */
	static readonly TranslateText: string[] = ["translate:TranslateText"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["translate:UntagResource"];
	/** IAM actions required for the UpdateParallelData API call. */
	static readonly UpdateParallelData: string[] = [
		"translate:UpdateParallelData",
	];
}

/**
 * Condition key constants and builders for translate.
 */
export class TranslateConditions {
	/** Condition keys applicable to the CreateParallelData action. */
	static readonly CreateParallelDataConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportTerminology action. */
	static readonly ImportTerminologyConditionKeys: string[] = [
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
