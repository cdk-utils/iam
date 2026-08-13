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
	static readonly CREATE_PIPE = "pipes:CreatePipe";
	/** [Write] pipes:DeletePipe */
	static readonly DELETE_PIPE = "pipes:DeletePipe";
	/** [Read] pipes:DescribePipe */
	static readonly DESCRIBE_PIPE = "pipes:DescribePipe";
	/** [List] pipes:ListPipes */
	static readonly LIST_PIPES = "pipes:ListPipes";
	/** [Read] pipes:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "pipes:ListTagsForResource";
	/** [Write] pipes:StartPipe */
	static readonly START_PIPE = "pipes:StartPipe";
	/** [Write] pipes:StopPipe */
	static readonly STOP_PIPE = "pipes:StopPipe";
	/** [Tagging] pipes:TagResource */
	static readonly TAG_RESOURCE = "pipes:TagResource";
	/** [Tagging] pipes:UntagResource */
	static readonly UNTAG_RESOURCE = "pipes:UntagResource";
	/** [Write] pipes:UpdatePipe */
	static readonly UPDATE_PIPE = "pipes:UpdatePipe";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PipesActions.DESCRIBE_PIPE,
		PipesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PipesActions.CREATE_PIPE,
		PipesActions.DELETE_PIPE,
		PipesActions.START_PIPE,
		PipesActions.STOP_PIPE,
		PipesActions.UPDATE_PIPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [PipesActions.LIST_PIPES];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PipesActions.TAG_RESOURCE,
		PipesActions.UNTAG_RESOURCE,
	];
}

const PipeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pipes:(?<region>[^:]*):(?<account>[^:]*):pipe/(?<name>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pipes resources.
 */
export class PipesResources {
	/**
	 * Builds an ARN for the pipe resource.
	 */
	static pipe(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePipeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static readonly CREATE_PIPE: string[] = [
		"pipes:CreatePipe",
		"iam:PassRole",
		"pipes:TagResource",
	];
	/** IAM actions required for the DeletePipe API call. */
	static readonly DELETE_PIPE: string[] = ["pipes:DeletePipe"];
	/** IAM actions required for the DescribePipe API call. */
	static readonly DESCRIBE_PIPE: string[] = ["pipes:DescribePipe"];
	/** IAM actions required for the ListPipes API call. */
	static readonly LIST_PIPES: string[] = ["pipes:ListPipes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"pipes:ListTagsForResource",
	];
	/** IAM actions required for the StartPipe API call. */
	static readonly START_PIPE: string[] = ["pipes:StartPipe"];
	/** IAM actions required for the StopPipe API call. */
	static readonly STOP_PIPE: string[] = ["pipes:StopPipe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["pipes:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["pipes:UntagResource"];
	/** IAM actions required for the UpdatePipe API call. */
	static readonly UPDATE_PIPE: string[] = ["iam:PassRole", "pipes:UpdatePipe"];
}

/**
 * Condition key constants and builders for pipes.
 */
export class PipesConditions {
	/** Condition keys applicable to the CreatePipe action. */
	static readonly CREATE_PIPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeletePipe action. */
	static readonly DELETE_PIPE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePipe action. */
	static readonly DESCRIBE_PIPE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartPipe action. */
	static readonly START_PIPE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopPipe action. */
	static readonly STOP_PIPE_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdatePipe action. */
	static readonly UPDATE_PIPE_CONDITION_KEYS: string[] = [
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
