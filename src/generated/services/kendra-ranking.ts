// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kendra-ranking.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kendra-ranking service.
 */
export class KendraRankingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kendra-ranking";

	/** [Write] kendra-ranking:CreateRescoreExecutionPlan */
	static readonly CREATE_RESCORE_EXECUTION_PLAN =
		"kendra-ranking:CreateRescoreExecutionPlan";
	/** [Write] kendra-ranking:DeleteRescoreExecutionPlan */
	static readonly DELETE_RESCORE_EXECUTION_PLAN =
		"kendra-ranking:DeleteRescoreExecutionPlan";
	/** [Read] kendra-ranking:DescribeRescoreExecutionPlan */
	static readonly DESCRIBE_RESCORE_EXECUTION_PLAN =
		"kendra-ranking:DescribeRescoreExecutionPlan";
	/** [List] kendra-ranking:ListRescoreExecutionPlans */
	static readonly LIST_RESCORE_EXECUTION_PLANS =
		"kendra-ranking:ListRescoreExecutionPlans";
	/** [Read] kendra-ranking:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kendra-ranking:ListTagsForResource";
	/** [Read] kendra-ranking:Rescore */
	static readonly RESCORE = "kendra-ranking:Rescore";
	/** [Tagging] kendra-ranking:TagResource */
	static readonly TAG_RESOURCE = "kendra-ranking:TagResource";
	/** [Tagging] kendra-ranking:UntagResource */
	static readonly UNTAG_RESOURCE = "kendra-ranking:UntagResource";
	/** [Write] kendra-ranking:UpdateRescoreExecutionPlan */
	static readonly UPDATE_RESCORE_EXECUTION_PLAN =
		"kendra-ranking:UpdateRescoreExecutionPlan";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KendraRankingActions.DESCRIBE_RESCORE_EXECUTION_PLAN,
		KendraRankingActions.LIST_TAGS_FOR_RESOURCE,
		KendraRankingActions.RESCORE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KendraRankingActions.CREATE_RESCORE_EXECUTION_PLAN,
		KendraRankingActions.DELETE_RESCORE_EXECUTION_PLAN,
		KendraRankingActions.UPDATE_RESCORE_EXECUTION_PLAN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KendraRankingActions.LIST_RESCORE_EXECUTION_PLANS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KendraRankingActions.TAG_RESOURCE,
		KendraRankingActions.UNTAG_RESOURCE,
	];
}

const RescoreExecutionPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra-ranking:(?<region>[^:]*):(?<account>[^:]*):rescore-execution-plan/(?<rescoreExecutionPlanId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kendra-ranking resources.
 */
export class KendraRankingResources {
	/**
	 * Builds an ARN for the rescore-execution-plan resource.
	 */
	static rescoreExecutionPlan(props: {
		/** The RescoreExecutionPlanId component of the ARN. */
		readonly rescoreExecutionPlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra-ranking:${props.region ?? "*"}:${props.account ?? "*"}:rescore-execution-plan/${props.rescoreExecutionPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rescore-execution-plan resource.
	 */
	static isValidRescoreExecutionPlanArn(arn: string): boolean {
		return RescoreExecutionPlanArnRegex.test(arn);
	}

	/**
	 * Parses a rescore-execution-plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRescoreExecutionPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		rescoreExecutionPlanId: string;
	} {
		const match = RescoreExecutionPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rescore-execution-plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			rescoreExecutionPlanId: match.groups!.rescoreExecutionPlanId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kendra-ranking.
 */
export class KendraRankingOperations {
	/** IAM actions required for the CreateRescoreExecutionPlan API call. */
	static readonly CREATE_RESCORE_EXECUTION_PLAN: string[] = [
		"kendra-ranking:CreateRescoreExecutionPlan",
		"kendra-ranking:TagResource",
	];
	/** IAM actions required for the DeleteRescoreExecutionPlan API call. */
	static readonly DELETE_RESCORE_EXECUTION_PLAN: string[] = [
		"kendra-ranking:DeleteRescoreExecutionPlan",
	];
	/** IAM actions required for the DescribeRescoreExecutionPlan API call. */
	static readonly DESCRIBE_RESCORE_EXECUTION_PLAN: string[] = [
		"kendra-ranking:DescribeRescoreExecutionPlan",
	];
	/** IAM actions required for the ListRescoreExecutionPlans API call. */
	static readonly LIST_RESCORE_EXECUTION_PLANS: string[] = [
		"kendra-ranking:ListRescoreExecutionPlans",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kendra-ranking:ListTagsForResource",
	];
	/** IAM actions required for the Rescore API call. */
	static readonly RESCORE: string[] = ["kendra-ranking:Rescore"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kendra-ranking:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kendra-ranking:UntagResource"];
	/** IAM actions required for the UpdateRescoreExecutionPlan API call. */
	static readonly UPDATE_RESCORE_EXECUTION_PLAN: string[] = [
		"kendra-ranking:UpdateRescoreExecutionPlan",
	];
}

/**
 * Condition key constants and builders for kendra-ranking.
 */
export class KendraRankingConditions {
	/** Condition keys applicable to the CreateRescoreExecutionPlan action. */
	static readonly CREATE_RESCORE_EXECUTION_PLAN_CONDITION_KEYS: string[] = [
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
