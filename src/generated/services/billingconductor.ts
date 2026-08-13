// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/billingconductor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the billingconductor service.
 */
export class BillingconductorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "billingconductor";

	/** [Write] billingconductor:AssociateAccounts */
	static readonly ASSOCIATE_ACCOUNTS = "billingconductor:AssociateAccounts";
	/** [Write] billingconductor:AssociatePricingRules */
	static readonly ASSOCIATE_PRICING_RULES =
		"billingconductor:AssociatePricingRules";
	/** [Write] billingconductor:BatchAssociateResourcesToCustomLineItem */
	static readonly BATCH_ASSOCIATE_RESOURCES_TO_CUSTOM_LINE_ITEM =
		"billingconductor:BatchAssociateResourcesToCustomLineItem";
	/** [Write] billingconductor:BatchDisassociateResourcesFromCustomLineItem */
	static readonly BATCH_DISASSOCIATE_RESOURCES_FROM_CUSTOM_LINE_ITEM =
		"billingconductor:BatchDisassociateResourcesFromCustomLineItem";
	/** [Write] billingconductor:CreateBillingGroup */
	static readonly CREATE_BILLING_GROUP = "billingconductor:CreateBillingGroup";
	/** [Write] billingconductor:CreateCustomLineItem */
	static readonly CREATE_CUSTOM_LINE_ITEM =
		"billingconductor:CreateCustomLineItem";
	/** [Write] billingconductor:CreatePricingPlan */
	static readonly CREATE_PRICING_PLAN = "billingconductor:CreatePricingPlan";
	/** [Write] billingconductor:CreatePricingRule */
	static readonly CREATE_PRICING_RULE = "billingconductor:CreatePricingRule";
	/** [Write] billingconductor:DeleteBillingGroup */
	static readonly DELETE_BILLING_GROUP = "billingconductor:DeleteBillingGroup";
	/** [Write] billingconductor:DeleteCustomLineItem */
	static readonly DELETE_CUSTOM_LINE_ITEM =
		"billingconductor:DeleteCustomLineItem";
	/** [Write] billingconductor:DeletePricingPlan */
	static readonly DELETE_PRICING_PLAN = "billingconductor:DeletePricingPlan";
	/** [Write] billingconductor:DeletePricingRule */
	static readonly DELETE_PRICING_RULE = "billingconductor:DeletePricingRule";
	/** [Write] billingconductor:DisassociateAccounts */
	static readonly DISASSOCIATE_ACCOUNTS =
		"billingconductor:DisassociateAccounts";
	/** [Write] billingconductor:DisassociatePricingRules */
	static readonly DISASSOCIATE_PRICING_RULES =
		"billingconductor:DisassociatePricingRules";
	/** [Read] billingconductor:GetBillingGroupCostReport */
	static readonly GET_BILLING_GROUP_COST_REPORT =
		"billingconductor:GetBillingGroupCostReport";
	/** [List] billingconductor:ListAccountAssociations */
	static readonly LIST_ACCOUNT_ASSOCIATIONS =
		"billingconductor:ListAccountAssociations";
	/** [Read] billingconductor:ListBillingGroupCostReports */
	static readonly LIST_BILLING_GROUP_COST_REPORTS =
		"billingconductor:ListBillingGroupCostReports";
	/** [Read] billingconductor:ListBillingGroups */
	static readonly LIST_BILLING_GROUPS = "billingconductor:ListBillingGroups";
	/** [Read] billingconductor:ListCustomLineItemVersions */
	static readonly LIST_CUSTOM_LINE_ITEM_VERSIONS =
		"billingconductor:ListCustomLineItemVersions";
	/** [Read] billingconductor:ListCustomLineItems */
	static readonly LIST_CUSTOM_LINE_ITEMS =
		"billingconductor:ListCustomLineItems";
	/** [Read] billingconductor:ListPricingPlans */
	static readonly LIST_PRICING_PLANS = "billingconductor:ListPricingPlans";
	/** [List] billingconductor:ListPricingPlansAssociatedWithPricingRule */
	static readonly LIST_PRICING_PLANS_ASSOCIATED_WITH_PRICING_RULE =
		"billingconductor:ListPricingPlansAssociatedWithPricingRule";
	/** [Read] billingconductor:ListPricingRules */
	static readonly LIST_PRICING_RULES = "billingconductor:ListPricingRules";
	/** [List] billingconductor:ListPricingRulesAssociatedToPricingPlan */
	static readonly LIST_PRICING_RULES_ASSOCIATED_TO_PRICING_PLAN =
		"billingconductor:ListPricingRulesAssociatedToPricingPlan";
	/** [List] billingconductor:ListResourcesAssociatedToCustomLineItem */
	static readonly LIST_RESOURCES_ASSOCIATED_TO_CUSTOM_LINE_ITEM =
		"billingconductor:ListResourcesAssociatedToCustomLineItem";
	/** [Read] billingconductor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"billingconductor:ListTagsForResource";
	/** [Tagging] billingconductor:TagResource */
	static readonly TAG_RESOURCE = "billingconductor:TagResource";
	/** [Tagging] billingconductor:UntagResource */
	static readonly UNTAG_RESOURCE = "billingconductor:UntagResource";
	/** [Write] billingconductor:UpdateBillingGroup */
	static readonly UPDATE_BILLING_GROUP = "billingconductor:UpdateBillingGroup";
	/** [Write] billingconductor:UpdateCustomLineItem */
	static readonly UPDATE_CUSTOM_LINE_ITEM =
		"billingconductor:UpdateCustomLineItem";
	/** [Write] billingconductor:UpdatePricingPlan */
	static readonly UPDATE_PRICING_PLAN = "billingconductor:UpdatePricingPlan";
	/** [Write] billingconductor:UpdatePricingRule */
	static readonly UPDATE_PRICING_RULE = "billingconductor:UpdatePricingRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BillingconductorActions.GET_BILLING_GROUP_COST_REPORT,
		BillingconductorActions.LIST_BILLING_GROUP_COST_REPORTS,
		BillingconductorActions.LIST_BILLING_GROUPS,
		BillingconductorActions.LIST_CUSTOM_LINE_ITEM_VERSIONS,
		BillingconductorActions.LIST_CUSTOM_LINE_ITEMS,
		BillingconductorActions.LIST_PRICING_PLANS,
		BillingconductorActions.LIST_PRICING_RULES,
		BillingconductorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BillingconductorActions.ASSOCIATE_ACCOUNTS,
		BillingconductorActions.ASSOCIATE_PRICING_RULES,
		BillingconductorActions.BATCH_ASSOCIATE_RESOURCES_TO_CUSTOM_LINE_ITEM,
		BillingconductorActions.BATCH_DISASSOCIATE_RESOURCES_FROM_CUSTOM_LINE_ITEM,
		BillingconductorActions.CREATE_BILLING_GROUP,
		BillingconductorActions.CREATE_CUSTOM_LINE_ITEM,
		BillingconductorActions.CREATE_PRICING_PLAN,
		BillingconductorActions.CREATE_PRICING_RULE,
		BillingconductorActions.DELETE_BILLING_GROUP,
		BillingconductorActions.DELETE_CUSTOM_LINE_ITEM,
		BillingconductorActions.DELETE_PRICING_PLAN,
		BillingconductorActions.DELETE_PRICING_RULE,
		BillingconductorActions.DISASSOCIATE_ACCOUNTS,
		BillingconductorActions.DISASSOCIATE_PRICING_RULES,
		BillingconductorActions.UPDATE_BILLING_GROUP,
		BillingconductorActions.UPDATE_CUSTOM_LINE_ITEM,
		BillingconductorActions.UPDATE_PRICING_PLAN,
		BillingconductorActions.UPDATE_PRICING_RULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BillingconductorActions.LIST_ACCOUNT_ASSOCIATIONS,
		BillingconductorActions.LIST_PRICING_PLANS_ASSOCIATED_WITH_PRICING_RULE,
		BillingconductorActions.LIST_PRICING_RULES_ASSOCIATED_TO_PRICING_PLAN,
		BillingconductorActions.LIST_RESOURCES_ASSOCIATED_TO_CUSTOM_LINE_ITEM,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BillingconductorActions.TAG_RESOURCE,
		BillingconductorActions.UNTAG_RESOURCE,
	];
}

const BillinggroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):billinggroup/(?<billingGroupId>[^:/?]+)$",
);
const CustomlineitemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):customlineitem/(?<customLineItemId>[^:/?]+)$",
);
const PricingplanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):pricingplan/(?<pricingPlanId>[^:/?]+)$",
);
const PricingruleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):pricingrule/(?<pricingRuleId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for billingconductor resources.
 */
export class BillingconductorResources {
	/**
	 * Builds an ARN for the billinggroup resource.
	 */
	static billinggroup(props: {
		/** The BillingGroupId component of the ARN. */
		readonly billingGroupId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billingconductor::${props.account ?? "*"}:billinggroup/${props.billingGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the billinggroup resource.
	 */
	static isValidBillinggroupArn(arn: string): boolean {
		return BillinggroupArnRegex.test(arn);
	}

	/**
	 * Parses a billinggroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillinggroupArn(arn: string): {
		partition: string;
		account: string;
		billingGroupId: string;
	} {
		const match = BillinggroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid billinggroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			billingGroupId: match.groups!.billingGroupId,
		};
	}

	/**
	 * Builds an ARN for the customlineitem resource.
	 */
	static customlineitem(props: {
		/** The CustomLineItemId component of the ARN. */
		readonly customLineItemId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billingconductor::${props.account ?? "*"}:customlineitem/${props.customLineItemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customlineitem resource.
	 */
	static isValidCustomlineitemArn(arn: string): boolean {
		return CustomlineitemArnRegex.test(arn);
	}

	/**
	 * Parses a customlineitem ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomlineitemArn(arn: string): {
		partition: string;
		account: string;
		customLineItemId: string;
	} {
		const match = CustomlineitemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customlineitem ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			customLineItemId: match.groups!.customLineItemId,
		};
	}

	/**
	 * Builds an ARN for the pricingplan resource.
	 */
	static pricingplan(props: {
		/** The PricingPlanId component of the ARN. */
		readonly pricingPlanId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billingconductor::${props.account ?? "*"}:pricingplan/${props.pricingPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pricingplan resource.
	 */
	static isValidPricingplanArn(arn: string): boolean {
		return PricingplanArnRegex.test(arn);
	}

	/**
	 * Parses a pricingplan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePricingplanArn(arn: string): {
		partition: string;
		account: string;
		pricingPlanId: string;
	} {
		const match = PricingplanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pricingplan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			pricingPlanId: match.groups!.pricingPlanId,
		};
	}

	/**
	 * Builds an ARN for the pricingrule resource.
	 */
	static pricingrule(props: {
		/** The PricingRuleId component of the ARN. */
		readonly pricingRuleId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billingconductor::${props.account ?? "*"}:pricingrule/${props.pricingRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pricingrule resource.
	 */
	static isValidPricingruleArn(arn: string): boolean {
		return PricingruleArnRegex.test(arn);
	}

	/**
	 * Parses a pricingrule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePricingruleArn(arn: string): {
		partition: string;
		account: string;
		pricingRuleId: string;
	} {
		const match = PricingruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pricingrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			pricingRuleId: match.groups!.pricingRuleId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for billingconductor.
 */
export class BillingconductorOperations {
	/** IAM actions required for the AssociateAccounts API call. */
	static readonly ASSOCIATE_ACCOUNTS: string[] = [
		"billingconductor:AssociateAccounts",
	];
	/** IAM actions required for the AssociatePricingRules API call. */
	static readonly ASSOCIATE_PRICING_RULES: string[] = [
		"billingconductor:AssociatePricingRules",
	];
	/** IAM actions required for the BatchAssociateResourcesToCustomLineItem API call. */
	static readonly BATCH_ASSOCIATE_RESOURCES_TO_CUSTOM_LINE_ITEM: string[] = [
		"billingconductor:BatchAssociateResourcesToCustomLineItem",
	];
	/** IAM actions required for the BatchDisassociateResourcesFromCustomLineItem API call. */
	static readonly BATCH_DISASSOCIATE_RESOURCES_FROM_CUSTOM_LINE_ITEM: string[] =
		["billingconductor:BatchDisassociateResourcesFromCustomLineItem"];
	/** IAM actions required for the CreateBillingGroup API call. */
	static readonly CREATE_BILLING_GROUP: string[] = [
		"billingconductor:CreateBillingGroup",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreateCustomLineItem API call. */
	static readonly CREATE_CUSTOM_LINE_ITEM: string[] = [
		"billingconductor:CreateCustomLineItem",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreatePricingPlan API call. */
	static readonly CREATE_PRICING_PLAN: string[] = [
		"billingconductor:CreatePricingPlan",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreatePricingRule API call. */
	static readonly CREATE_PRICING_RULE: string[] = [
		"billingconductor:CreatePricingRule",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the DeleteBillingGroup API call. */
	static readonly DELETE_BILLING_GROUP: string[] = [
		"billingconductor:DeleteBillingGroup",
	];
	/** IAM actions required for the DeleteCustomLineItem API call. */
	static readonly DELETE_CUSTOM_LINE_ITEM: string[] = [
		"billingconductor:DeleteCustomLineItem",
	];
	/** IAM actions required for the DeletePricingPlan API call. */
	static readonly DELETE_PRICING_PLAN: string[] = [
		"billingconductor:DeletePricingPlan",
	];
	/** IAM actions required for the DeletePricingRule API call. */
	static readonly DELETE_PRICING_RULE: string[] = [
		"billingconductor:DeletePricingRule",
	];
	/** IAM actions required for the DisassociateAccounts API call. */
	static readonly DISASSOCIATE_ACCOUNTS: string[] = [
		"billingconductor:DisassociateAccounts",
	];
	/** IAM actions required for the DisassociatePricingRules API call. */
	static readonly DISASSOCIATE_PRICING_RULES: string[] = [
		"billingconductor:DisassociatePricingRules",
	];
	/** IAM actions required for the GetBillingGroupCostReport API call. */
	static readonly GET_BILLING_GROUP_COST_REPORT: string[] = [
		"billingconductor:GetBillingGroupCostReport",
	];
	/** IAM actions required for the ListAccountAssociations API call. */
	static readonly LIST_ACCOUNT_ASSOCIATIONS: string[] = [
		"billingconductor:ListAccountAssociations",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the ListBillingGroupCostReports API call. */
	static readonly LIST_BILLING_GROUP_COST_REPORTS: string[] = [
		"billingconductor:ListBillingGroupCostReports",
	];
	/** IAM actions required for the ListBillingGroups API call. */
	static readonly LIST_BILLING_GROUPS: string[] = [
		"billingconductor:ListBillingGroups",
	];
	/** IAM actions required for the ListCustomLineItemVersions API call. */
	static readonly LIST_CUSTOM_LINE_ITEM_VERSIONS: string[] = [
		"billingconductor:ListCustomLineItemVersions",
	];
	/** IAM actions required for the ListCustomLineItems API call. */
	static readonly LIST_CUSTOM_LINE_ITEMS: string[] = [
		"billingconductor:ListCustomLineItems",
	];
	/** IAM actions required for the ListPricingPlans API call. */
	static readonly LIST_PRICING_PLANS: string[] = [
		"billingconductor:ListPricingPlans",
	];
	/** IAM actions required for the ListPricingPlansAssociatedWithPricingRule API call. */
	static readonly LIST_PRICING_PLANS_ASSOCIATED_WITH_PRICING_RULE: string[] = [
		"billingconductor:ListPricingPlansAssociatedWithPricingRule",
	];
	/** IAM actions required for the ListPricingRules API call. */
	static readonly LIST_PRICING_RULES: string[] = [
		"billingconductor:ListPricingRules",
	];
	/** IAM actions required for the ListPricingRulesAssociatedToPricingPlan API call. */
	static readonly LIST_PRICING_RULES_ASSOCIATED_TO_PRICING_PLAN: string[] = [
		"billingconductor:ListPricingRulesAssociatedToPricingPlan",
	];
	/** IAM actions required for the ListResourcesAssociatedToCustomLineItem API call. */
	static readonly LIST_RESOURCES_ASSOCIATED_TO_CUSTOM_LINE_ITEM: string[] = [
		"billingconductor:ListResourcesAssociatedToCustomLineItem",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"billingconductor:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["billingconductor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["billingconductor:UntagResource"];
	/** IAM actions required for the UpdateBillingGroup API call. */
	static readonly UPDATE_BILLING_GROUP: string[] = [
		"billingconductor:UpdateBillingGroup",
	];
	/** IAM actions required for the UpdateCustomLineItem API call. */
	static readonly UPDATE_CUSTOM_LINE_ITEM: string[] = [
		"billingconductor:UpdateCustomLineItem",
	];
	/** IAM actions required for the UpdatePricingPlan API call. */
	static readonly UPDATE_PRICING_PLAN: string[] = [
		"billingconductor:UpdatePricingPlan",
	];
	/** IAM actions required for the UpdatePricingRule API call. */
	static readonly UPDATE_PRICING_RULE: string[] = [
		"billingconductor:UpdatePricingRule",
	];
}

/**
 * Condition key constants and builders for billingconductor.
 */
export class BillingconductorConditions {
	/** Condition keys applicable to the CreateBillingGroup action. */
	static readonly CREATE_BILLING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomLineItem action. */
	static readonly CREATE_CUSTOM_LINE_ITEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePricingPlan action. */
	static readonly CREATE_PRICING_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePricingRule action. */
	static readonly CREATE_PRICING_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
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
