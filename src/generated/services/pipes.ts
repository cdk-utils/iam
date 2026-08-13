// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pipes.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pipes service.
 */
export class PipesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pipes";

	/** [Write] pipes:CreatePipe */
	static readonly CreatePipe = "pipes:CreatePipe";
	/** [Write] pipes:DeletePipe */
	static readonly DeletePipe = "pipes:DeletePipe";
	/** [Read] pipes:DescribePipe */
	static readonly DescribePipe = "pipes:DescribePipe";
	/** [List] pipes:ListPipes */
	static readonly ListPipes = "pipes:ListPipes";
	/** [Read] pipes:ListTagsForResource */
	static readonly ListTagsForResource = "pipes:ListTagsForResource";
	/** [Write] pipes:StartPipe */
	static readonly StartPipe = "pipes:StartPipe";
	/** [Write] pipes:StopPipe */
	static readonly StopPipe = "pipes:StopPipe";
	/** [Tagging] pipes:TagResource */
	static readonly TagResource = "pipes:TagResource";
	/** [Tagging] pipes:UntagResource */
	static readonly UntagResource = "pipes:UntagResource";
	/** [Write] pipes:UpdatePipe */
	static readonly UpdatePipe = "pipes:UpdatePipe";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PipesActions.DescribePipe,
		PipesActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PipesActions.CreatePipe,
		PipesActions.DeletePipe,
		PipesActions.StartPipe,
		PipesActions.StopPipe,
		PipesActions.UpdatePipe,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [PipesActions.ListPipes];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PipesActions.TagResource,
		PipesActions.UntagResource,
	];
}

/**
 * Properties for building a pipe ARN.
 */
export interface PipesPipeArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipe ARN.
 */
export interface PipesPipeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

const PipeArnRegex =
	/^arn:(?<partition>[^:]+):pipes:(?<region>[^:]*):(?<account>[^:]*):pipe\/(?<name>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pipes resources.
 */
export class PipesResources {
	/**
	 * Builds an ARN for the pipe resource.
	 */
	static pipe(props: PipesPipeArnProps): string {
		return `arn:${props.partition ?? "aws"}:pipes:${props.region ?? "*"}:${props.account ?? "*"}:pipe/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipe resource.
	 */
	static isValidPipeArn(arn: string): boolean {
		return PipeArnRegex.test(arn);
	}

	/**
	 * Parses a pipe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipeArn(arn: string): PipesPipeArnComponents {
		const match = PipeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pipes.
 */
export class PipesOperations {
	/** IAM actions required for the CreatePipe API call. */
	static readonly CreatePipe: string[] = [
		"pipes:CreatePipe",
		"iam:PassRole",
		"pipes:TagResource",
	];
	/** IAM actions required for the DeletePipe API call. */
	static readonly DeletePipe: string[] = ["pipes:DeletePipe"];
	/** IAM actions required for the DescribePipe API call. */
	static readonly DescribePipe: string[] = ["pipes:DescribePipe"];
	/** IAM actions required for the ListPipes API call. */
	static readonly ListPipes: string[] = ["pipes:ListPipes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["pipes:ListTagsForResource"];
	/** IAM actions required for the StartPipe API call. */
	static readonly StartPipe: string[] = ["pipes:StartPipe"];
	/** IAM actions required for the StopPipe API call. */
	static readonly StopPipe: string[] = ["pipes:StopPipe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["pipes:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["pipes:UntagResource"];
	/** IAM actions required for the UpdatePipe API call. */
	static readonly UpdatePipe: string[] = ["iam:PassRole", "pipes:UpdatePipe"];
}

/**
 * Condition key constants and builders for pipes.
 */
export class PipesConditions {
	/** Condition keys applicable to the CreatePipe action. */
	static readonly CreatePipeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeletePipe action. */
	static readonly DeletePipeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePipe action. */
	static readonly DescribePipeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartPipe action. */
	static readonly StartPipeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopPipe action. */
	static readonly StopPipeConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdatePipe action. */
	static readonly UpdatePipeConditionKeys: string[] = [
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
