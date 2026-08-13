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
	static readonly CREATE_SAVINGS_PLAN = "savingsplans:CreateSavingsPlan";
	/** [Write] savingsplans:DeleteQueuedSavingsPlan */
	static readonly DELETE_QUEUED_SAVINGS_PLAN =
		"savingsplans:DeleteQueuedSavingsPlan";
	/** [Read] savingsplans:DescribeSavingsPlanRates */
	static readonly DESCRIBE_SAVINGS_PLAN_RATES =
		"savingsplans:DescribeSavingsPlanRates";
	/** [Read] savingsplans:DescribeSavingsPlans */
	static readonly DESCRIBE_SAVINGS_PLANS = "savingsplans:DescribeSavingsPlans";
	/** [Read] savingsplans:DescribeSavingsPlansOfferingRates */
	static readonly DESCRIBE_SAVINGS_PLANS_OFFERING_RATES =
		"savingsplans:DescribeSavingsPlansOfferingRates";
	/** [Read] savingsplans:DescribeSavingsPlansOfferings */
	static readonly DESCRIBE_SAVINGS_PLANS_OFFERINGS =
		"savingsplans:DescribeSavingsPlansOfferings";
	/** [List] savingsplans:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "savingsplans:ListTagsForResource";
	/** [Write] savingsplans:ReturnSavingsPlan */
	static readonly RETURN_SAVINGS_PLAN = "savingsplans:ReturnSavingsPlan";
	/** [Tagging] savingsplans:TagResource */
	static readonly TAG_RESOURCE = "savingsplans:TagResource";
	/** [Tagging] savingsplans:UntagResource */
	static readonly UNTAG_RESOURCE = "savingsplans:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SavingsplansActions.DESCRIBE_SAVINGS_PLAN_RATES,
		SavingsplansActions.DESCRIBE_SAVINGS_PLANS,
		SavingsplansActions.DESCRIBE_SAVINGS_PLANS_OFFERING_RATES,
		SavingsplansActions.DESCRIBE_SAVINGS_PLANS_OFFERINGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SavingsplansActions.CREATE_SAVINGS_PLAN,
		SavingsplansActions.DELETE_QUEUED_SAVINGS_PLAN,
		SavingsplansActions.RETURN_SAVINGS_PLAN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SavingsplansActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SavingsplansActions.TAG_RESOURCE,
		SavingsplansActions.UNTAG_RESOURCE,
	];
}

const SavingsplanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):savingsplans::(?<account>[^:]*):savingsplan/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for savingsplans resources.
 */
export class SavingsplansResources {
	/**
	 * Builds an ARN for the savingsplan resource.
	 */
	static savingsplan(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSavingsplanArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_SAVINGS_PLAN: string[] = [
		"savingsplans:CreateSavingsPlan",
		"savingsplans:TagResource",
	];
	/** IAM actions required for the DeleteQueuedSavingsPlan API call. */
	static readonly DELETE_QUEUED_SAVINGS_PLAN: string[] = [
		"savingsplans:DeleteQueuedSavingsPlan",
	];
	/** IAM actions required for the DescribeSavingsPlanRates API call. */
	static readonly DESCRIBE_SAVINGS_PLAN_RATES: string[] = [
		"savingsplans:DescribeSavingsPlanRates",
	];
	/** IAM actions required for the DescribeSavingsPlans API call. */
	static readonly DESCRIBE_SAVINGS_PLANS: string[] = [
		"savingsplans:DescribeSavingsPlans",
	];
	/** IAM actions required for the DescribeSavingsPlansOfferingRates API call. */
	static readonly DESCRIBE_SAVINGS_PLANS_OFFERING_RATES: string[] = [
		"savingsplans:DescribeSavingsPlansOfferingRates",
	];
	/** IAM actions required for the DescribeSavingsPlansOfferings API call. */
	static readonly DESCRIBE_SAVINGS_PLANS_OFFERINGS: string[] = [
		"savingsplans:DescribeSavingsPlansOfferings",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"savingsplans:ListTagsForResource",
	];
	/** IAM actions required for the ReturnSavingsPlan API call. */
	static readonly RETURN_SAVINGS_PLAN: string[] = [
		"savingsplans:ReturnSavingsPlan",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["savingsplans:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["savingsplans:UntagResource"];
}

/**
 * Condition key constants and builders for savingsplans.
 */
export class SavingsplansConditions {
	/** Condition keys applicable to the CreateSavingsPlan action. */
	static readonly CREATE_SAVINGS_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteQueuedSavingsPlan action. */
	static readonly DELETE_QUEUED_SAVINGS_PLAN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSavingsPlanRates action. */
	static readonly DESCRIBE_SAVINGS_PLAN_RATES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeSavingsPlans action. */
	static readonly DESCRIBE_SAVINGS_PLANS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReturnSavingsPlan action. */
	static readonly RETURN_SAVINGS_PLAN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
