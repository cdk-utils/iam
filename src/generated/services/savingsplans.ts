// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/savingsplans.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the savingsplans service.
 */
export class SavingsplansActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "savingsplans";

	/** [Write] savingsplans:CreateSavingsPlan */
	static readonly CreateSavingsPlan = "savingsplans:CreateSavingsPlan";
	/** [Write] savingsplans:DeleteQueuedSavingsPlan */
	static readonly DeleteQueuedSavingsPlan =
		"savingsplans:DeleteQueuedSavingsPlan";
	/** [Read] savingsplans:DescribeSavingsPlanRates */
	static readonly DescribeSavingsPlanRates =
		"savingsplans:DescribeSavingsPlanRates";
	/** [Read] savingsplans:DescribeSavingsPlans */
	static readonly DescribeSavingsPlans = "savingsplans:DescribeSavingsPlans";
	/** [Read] savingsplans:DescribeSavingsPlansOfferingRates */
	static readonly DescribeSavingsPlansOfferingRates =
		"savingsplans:DescribeSavingsPlansOfferingRates";
	/** [Read] savingsplans:DescribeSavingsPlansOfferings */
	static readonly DescribeSavingsPlansOfferings =
		"savingsplans:DescribeSavingsPlansOfferings";
	/** [List] savingsplans:ListTagsForResource */
	static readonly ListTagsForResource = "savingsplans:ListTagsForResource";
	/** [Write] savingsplans:ReturnSavingsPlan */
	static readonly ReturnSavingsPlan = "savingsplans:ReturnSavingsPlan";
	/** [Tagging] savingsplans:TagResource */
	static readonly TagResource = "savingsplans:TagResource";
	/** [Tagging] savingsplans:UntagResource */
	static readonly UntagResource = "savingsplans:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SavingsplansActions.DescribeSavingsPlanRates,
		SavingsplansActions.DescribeSavingsPlans,
		SavingsplansActions.DescribeSavingsPlansOfferingRates,
		SavingsplansActions.DescribeSavingsPlansOfferings,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SavingsplansActions.CreateSavingsPlan,
		SavingsplansActions.DeleteQueuedSavingsPlan,
		SavingsplansActions.ReturnSavingsPlan,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SavingsplansActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SavingsplansActions.TagResource,
		SavingsplansActions.UntagResource,
	];
}

/**
 * Properties for building a savingsplan ARN.
 */
export interface SavingsplansSavingsplanArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a savingsplan ARN.
 */
export interface SavingsplansSavingsplanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const SavingsplanArnRegex =
	/^arn:(?<partition>[^:]+):savingsplans::(?<account>[^:]*):savingsplan\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for savingsplans resources.
 */
export class SavingsplansResources {
	/**
	 * Builds an ARN for the savingsplan resource.
	 */
	static savingsplan(props: SavingsplansSavingsplanArnProps): string {
		return `arn:${props.partition ?? "aws"}:savingsplans::${props.account ?? "*"}:savingsplan/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the savingsplan resource.
	 */
	static isValidSavingsplanArn(arn: string): boolean {
		return SavingsplanArnRegex.test(arn);
	}

	/**
	 * Parses a savingsplan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSavingsplanArn(
		arn: string,
	): SavingsplansSavingsplanArnComponents {
		const match = SavingsplanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid savingsplan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for savingsplans.
 */
export class SavingsplansOperations {
	/** IAM actions required for the CreateSavingsPlan API call. */
	static readonly CreateSavingsPlan: string[] = [
		"savingsplans:CreateSavingsPlan",
		"savingsplans:TagResource",
	];
	/** IAM actions required for the DeleteQueuedSavingsPlan API call. */
	static readonly DeleteQueuedSavingsPlan: string[] = [
		"savingsplans:DeleteQueuedSavingsPlan",
	];
	/** IAM actions required for the DescribeSavingsPlanRates API call. */
	static readonly DescribeSavingsPlanRates: string[] = [
		"savingsplans:DescribeSavingsPlanRates",
	];
	/** IAM actions required for the DescribeSavingsPlans API call. */
	static readonly DescribeSavingsPlans: string[] = [
		"savingsplans:DescribeSavingsPlans",
	];
	/** IAM actions required for the DescribeSavingsPlansOfferingRates API call. */
	static readonly DescribeSavingsPlansOfferingRates: string[] = [
		"savingsplans:DescribeSavingsPlansOfferingRates",
	];
	/** IAM actions required for the DescribeSavingsPlansOfferings API call. */
	static readonly DescribeSavingsPlansOfferings: string[] = [
		"savingsplans:DescribeSavingsPlansOfferings",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"savingsplans:ListTagsForResource",
	];
	/** IAM actions required for the ReturnSavingsPlan API call. */
	static readonly ReturnSavingsPlan: string[] = [
		"savingsplans:ReturnSavingsPlan",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["savingsplans:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["savingsplans:UntagResource"];
}

/**
 * Condition key constants and builders for savingsplans.
 */
export class SavingsplansConditions {
	/** Condition keys applicable to the CreateSavingsPlan action. */
	static readonly CreateSavingsPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteQueuedSavingsPlan action. */
	static readonly DeleteQueuedSavingsPlanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSavingsPlanRates action. */
	static readonly DescribeSavingsPlanRatesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSavingsPlans action. */
	static readonly DescribeSavingsPlansConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReturnSavingsPlan action. */
	static readonly ReturnSavingsPlanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
