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
	static readonly CreateRescoreExecutionPlan =
		"kendra-ranking:CreateRescoreExecutionPlan";
	/** [Write] kendra-ranking:DeleteRescoreExecutionPlan */
	static readonly DeleteRescoreExecutionPlan =
		"kendra-ranking:DeleteRescoreExecutionPlan";
	/** [Read] kendra-ranking:DescribeRescoreExecutionPlan */
	static readonly DescribeRescoreExecutionPlan =
		"kendra-ranking:DescribeRescoreExecutionPlan";
	/** [List] kendra-ranking:ListRescoreExecutionPlans */
	static readonly ListRescoreExecutionPlans =
		"kendra-ranking:ListRescoreExecutionPlans";
	/** [Read] kendra-ranking:ListTagsForResource */
	static readonly ListTagsForResource = "kendra-ranking:ListTagsForResource";
	/** [Read] kendra-ranking:Rescore */
	static readonly Rescore = "kendra-ranking:Rescore";
	/** [Tagging] kendra-ranking:TagResource */
	static readonly TagResource = "kendra-ranking:TagResource";
	/** [Tagging] kendra-ranking:UntagResource */
	static readonly UntagResource = "kendra-ranking:UntagResource";
	/** [Write] kendra-ranking:UpdateRescoreExecutionPlan */
	static readonly UpdateRescoreExecutionPlan =
		"kendra-ranking:UpdateRescoreExecutionPlan";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KendraRankingActions.DescribeRescoreExecutionPlan,
		KendraRankingActions.ListTagsForResource,
		KendraRankingActions.Rescore,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KendraRankingActions.CreateRescoreExecutionPlan,
		KendraRankingActions.DeleteRescoreExecutionPlan,
		KendraRankingActions.UpdateRescoreExecutionPlan,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KendraRankingActions.ListRescoreExecutionPlans,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KendraRankingActions.TagResource,
		KendraRankingActions.UntagResource,
	];
}

/**
 * Properties for building a rescore-execution-plan ARN.
 */
export interface KendraRankingRescoreExecutionPlanArnProps {
	/** The RescoreExecutionPlanId component of the ARN. */
	readonly rescoreExecutionPlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rescore-execution-plan ARN.
 */
export interface KendraRankingRescoreExecutionPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RescoreExecutionPlanId component. */
	readonly rescoreExecutionPlanId: string;
}

const RescoreExecutionPlanArnRegex =
	/^arn:(?<partition>[^:]+):kendra-ranking:(?<region>[^:]*):(?<account>[^:]*):rescore-execution-plan\/(?<rescoreExecutionPlanId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kendra-ranking resources.
 */
export class KendraRankingResources {
	/**
	 * Builds an ARN for the rescore-execution-plan resource.
	 */
	static rescoreExecutionPlan(
		props: KendraRankingRescoreExecutionPlanArnProps,
	): string {
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
	static parseRescoreExecutionPlanArn(
		arn: string,
	): KendraRankingRescoreExecutionPlanArnComponents {
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
	static readonly CreateRescoreExecutionPlan: string[] = [
		"kendra-ranking:CreateRescoreExecutionPlan",
		"kendra-ranking:TagResource",
	];
	/** IAM actions required for the DeleteRescoreExecutionPlan API call. */
	static readonly DeleteRescoreExecutionPlan: string[] = [
		"kendra-ranking:DeleteRescoreExecutionPlan",
	];
	/** IAM actions required for the DescribeRescoreExecutionPlan API call. */
	static readonly DescribeRescoreExecutionPlan: string[] = [
		"kendra-ranking:DescribeRescoreExecutionPlan",
	];
	/** IAM actions required for the ListRescoreExecutionPlans API call. */
	static readonly ListRescoreExecutionPlans: string[] = [
		"kendra-ranking:ListRescoreExecutionPlans",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kendra-ranking:ListTagsForResource",
	];
	/** IAM actions required for the Rescore API call. */
	static readonly Rescore: string[] = ["kendra-ranking:Rescore"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kendra-ranking:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kendra-ranking:UntagResource"];
	/** IAM actions required for the UpdateRescoreExecutionPlan API call. */
	static readonly UpdateRescoreExecutionPlan: string[] = [
		"kendra-ranking:UpdateRescoreExecutionPlan",
	];
}

/**
 * Condition key constants and builders for kendra-ranking.
 */
export class KendraRankingConditions {
	/** Condition keys applicable to the CreateRescoreExecutionPlan action. */
	static readonly CreateRescoreExecutionPlanConditionKeys: string[] = [
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
