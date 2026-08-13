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
	static readonly AssociateAccounts = "billingconductor:AssociateAccounts";
	/** [Write] billingconductor:AssociatePricingRules */
	static readonly AssociatePricingRules =
		"billingconductor:AssociatePricingRules";
	/** [Write] billingconductor:BatchAssociateResourcesToCustomLineItem */
	static readonly BatchAssociateResourcesToCustomLineItem =
		"billingconductor:BatchAssociateResourcesToCustomLineItem";
	/** [Write] billingconductor:BatchDisassociateResourcesFromCustomLineItem */
	static readonly BatchDisassociateResourcesFromCustomLineItem =
		"billingconductor:BatchDisassociateResourcesFromCustomLineItem";
	/** [Write] billingconductor:CreateBillingGroup */
	static readonly CreateBillingGroup = "billingconductor:CreateBillingGroup";
	/** [Write] billingconductor:CreateCustomLineItem */
	static readonly CreateCustomLineItem =
		"billingconductor:CreateCustomLineItem";
	/** [Write] billingconductor:CreatePricingPlan */
	static readonly CreatePricingPlan = "billingconductor:CreatePricingPlan";
	/** [Write] billingconductor:CreatePricingRule */
	static readonly CreatePricingRule = "billingconductor:CreatePricingRule";
	/** [Write] billingconductor:DeleteBillingGroup */
	static readonly DeleteBillingGroup = "billingconductor:DeleteBillingGroup";
	/** [Write] billingconductor:DeleteCustomLineItem */
	static readonly DeleteCustomLineItem =
		"billingconductor:DeleteCustomLineItem";
	/** [Write] billingconductor:DeletePricingPlan */
	static readonly DeletePricingPlan = "billingconductor:DeletePricingPlan";
	/** [Write] billingconductor:DeletePricingRule */
	static readonly DeletePricingRule = "billingconductor:DeletePricingRule";
	/** [Write] billingconductor:DisassociateAccounts */
	static readonly DisassociateAccounts =
		"billingconductor:DisassociateAccounts";
	/** [Write] billingconductor:DisassociatePricingRules */
	static readonly DisassociatePricingRules =
		"billingconductor:DisassociatePricingRules";
	/** [Read] billingconductor:GetBillingGroupCostReport */
	static readonly actionGetBillingGroupCostReport =
		"billingconductor:GetBillingGroupCostReport";
	/** [List] billingconductor:ListAccountAssociations */
	static readonly ListAccountAssociations =
		"billingconductor:ListAccountAssociations";
	/** [Read] billingconductor:ListBillingGroupCostReports */
	static readonly ListBillingGroupCostReports =
		"billingconductor:ListBillingGroupCostReports";
	/** [Read] billingconductor:ListBillingGroups */
	static readonly ListBillingGroups = "billingconductor:ListBillingGroups";
	/** [Read] billingconductor:ListCustomLineItemVersions */
	static readonly ListCustomLineItemVersions =
		"billingconductor:ListCustomLineItemVersions";
	/** [Read] billingconductor:ListCustomLineItems */
	static readonly ListCustomLineItems = "billingconductor:ListCustomLineItems";
	/** [Read] billingconductor:ListPricingPlans */
	static readonly ListPricingPlans = "billingconductor:ListPricingPlans";
	/** [List] billingconductor:ListPricingPlansAssociatedWithPricingRule */
	static readonly ListPricingPlansAssociatedWithPricingRule =
		"billingconductor:ListPricingPlansAssociatedWithPricingRule";
	/** [Read] billingconductor:ListPricingRules */
	static readonly ListPricingRules = "billingconductor:ListPricingRules";
	/** [List] billingconductor:ListPricingRulesAssociatedToPricingPlan */
	static readonly ListPricingRulesAssociatedToPricingPlan =
		"billingconductor:ListPricingRulesAssociatedToPricingPlan";
	/** [List] billingconductor:ListResourcesAssociatedToCustomLineItem */
	static readonly ListResourcesAssociatedToCustomLineItem =
		"billingconductor:ListResourcesAssociatedToCustomLineItem";
	/** [Read] billingconductor:ListTagsForResource */
	static readonly ListTagsForResource = "billingconductor:ListTagsForResource";
	/** [Tagging] billingconductor:TagResource */
	static readonly TagResource = "billingconductor:TagResource";
	/** [Tagging] billingconductor:UntagResource */
	static readonly UntagResource = "billingconductor:UntagResource";
	/** [Write] billingconductor:UpdateBillingGroup */
	static readonly UpdateBillingGroup = "billingconductor:UpdateBillingGroup";
	/** [Write] billingconductor:UpdateCustomLineItem */
	static readonly UpdateCustomLineItem =
		"billingconductor:UpdateCustomLineItem";
	/** [Write] billingconductor:UpdatePricingPlan */
	static readonly UpdatePricingPlan = "billingconductor:UpdatePricingPlan";
	/** [Write] billingconductor:UpdatePricingRule */
	static readonly UpdatePricingRule = "billingconductor:UpdatePricingRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BillingconductorActions.actionGetBillingGroupCostReport,
		BillingconductorActions.ListBillingGroupCostReports,
		BillingconductorActions.ListBillingGroups,
		BillingconductorActions.ListCustomLineItemVersions,
		BillingconductorActions.ListCustomLineItems,
		BillingconductorActions.ListPricingPlans,
		BillingconductorActions.ListPricingRules,
		BillingconductorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BillingconductorActions.AssociateAccounts,
		BillingconductorActions.AssociatePricingRules,
		BillingconductorActions.BatchAssociateResourcesToCustomLineItem,
		BillingconductorActions.BatchDisassociateResourcesFromCustomLineItem,
		BillingconductorActions.CreateBillingGroup,
		BillingconductorActions.CreateCustomLineItem,
		BillingconductorActions.CreatePricingPlan,
		BillingconductorActions.CreatePricingRule,
		BillingconductorActions.DeleteBillingGroup,
		BillingconductorActions.DeleteCustomLineItem,
		BillingconductorActions.DeletePricingPlan,
		BillingconductorActions.DeletePricingRule,
		BillingconductorActions.DisassociateAccounts,
		BillingconductorActions.DisassociatePricingRules,
		BillingconductorActions.UpdateBillingGroup,
		BillingconductorActions.UpdateCustomLineItem,
		BillingconductorActions.UpdatePricingPlan,
		BillingconductorActions.UpdatePricingRule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BillingconductorActions.ListAccountAssociations,
		BillingconductorActions.ListPricingPlansAssociatedWithPricingRule,
		BillingconductorActions.ListPricingRulesAssociatedToPricingPlan,
		BillingconductorActions.ListResourcesAssociatedToCustomLineItem,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BillingconductorActions.TagResource,
		BillingconductorActions.UntagResource,
	];
}

/**
 * Properties for building a billinggroup ARN.
 */
export interface BillingconductorBillinggroupArnProps {
	/** The BillingGroupId component of the ARN. */
	readonly billingGroupId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a billinggroup ARN.
 */
export interface BillingconductorBillinggroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BillingGroupId component. */
	readonly billingGroupId: string;
}

/**
 * Properties for building a customlineitem ARN.
 */
export interface BillingconductorCustomlineitemArnProps {
	/** The CustomLineItemId component of the ARN. */
	readonly customLineItemId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customlineitem ARN.
 */
export interface BillingconductorCustomlineitemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CustomLineItemId component. */
	readonly customLineItemId: string;
}

/**
 * Properties for building a pricingplan ARN.
 */
export interface BillingconductorPricingplanArnProps {
	/** The PricingPlanId component of the ARN. */
	readonly pricingPlanId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pricingplan ARN.
 */
export interface BillingconductorPricingplanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PricingPlanId component. */
	readonly pricingPlanId: string;
}

/**
 * Properties for building a pricingrule ARN.
 */
export interface BillingconductorPricingruleArnProps {
	/** The PricingRuleId component of the ARN. */
	readonly pricingRuleId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pricingrule ARN.
 */
export interface BillingconductorPricingruleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PricingRuleId component. */
	readonly pricingRuleId: string;
}

const BillinggroupArnRegex =
	/^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):billinggroup\/(?<billingGroupId>[^:/?]+)$/;
const CustomlineitemArnRegex =
	/^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):customlineitem\/(?<customLineItemId>[^:/?]+)$/;
const PricingplanArnRegex =
	/^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):pricingplan\/(?<pricingPlanId>[^:/?]+)$/;
const PricingruleArnRegex =
	/^arn:(?<partition>[^:]+):billingconductor::(?<account>[^:]*):pricingrule\/(?<pricingRuleId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for billingconductor resources.
 */
export class BillingconductorResources {
	/**
	 * Builds an ARN for the billinggroup resource.
	 */
	static billinggroup(props: BillingconductorBillinggroupArnProps): string {
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
	static parseBillinggroupArn(
		arn: string,
	): BillingconductorBillinggroupArnComponents {
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
	static customlineitem(props: BillingconductorCustomlineitemArnProps): string {
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
	static parseCustomlineitemArn(
		arn: string,
	): BillingconductorCustomlineitemArnComponents {
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
	static pricingplan(props: BillingconductorPricingplanArnProps): string {
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
	static parsePricingplanArn(
		arn: string,
	): BillingconductorPricingplanArnComponents {
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
	static pricingrule(props: BillingconductorPricingruleArnProps): string {
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
	static parsePricingruleArn(
		arn: string,
	): BillingconductorPricingruleArnComponents {
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
	static readonly AssociateAccounts: string[] = [
		"billingconductor:AssociateAccounts",
	];
	/** IAM actions required for the AssociatePricingRules API call. */
	static readonly AssociatePricingRules: string[] = [
		"billingconductor:AssociatePricingRules",
	];
	/** IAM actions required for the BatchAssociateResourcesToCustomLineItem API call. */
	static readonly BatchAssociateResourcesToCustomLineItem: string[] = [
		"billingconductor:BatchAssociateResourcesToCustomLineItem",
	];
	/** IAM actions required for the BatchDisassociateResourcesFromCustomLineItem API call. */
	static readonly BatchDisassociateResourcesFromCustomLineItem: string[] = [
		"billingconductor:BatchDisassociateResourcesFromCustomLineItem",
	];
	/** IAM actions required for the CreateBillingGroup API call. */
	static readonly CreateBillingGroup: string[] = [
		"billingconductor:CreateBillingGroup",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreateCustomLineItem API call. */
	static readonly CreateCustomLineItem: string[] = [
		"billingconductor:CreateCustomLineItem",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreatePricingPlan API call. */
	static readonly CreatePricingPlan: string[] = [
		"billingconductor:CreatePricingPlan",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the CreatePricingRule API call. */
	static readonly CreatePricingRule: string[] = [
		"billingconductor:CreatePricingRule",
		"billingconductor:TagResource",
	];
	/** IAM actions required for the DeleteBillingGroup API call. */
	static readonly DeleteBillingGroup: string[] = [
		"billingconductor:DeleteBillingGroup",
	];
	/** IAM actions required for the DeleteCustomLineItem API call. */
	static readonly DeleteCustomLineItem: string[] = [
		"billingconductor:DeleteCustomLineItem",
	];
	/** IAM actions required for the DeletePricingPlan API call. */
	static readonly DeletePricingPlan: string[] = [
		"billingconductor:DeletePricingPlan",
	];
	/** IAM actions required for the DeletePricingRule API call. */
	static readonly DeletePricingRule: string[] = [
		"billingconductor:DeletePricingRule",
	];
	/** IAM actions required for the DisassociateAccounts API call. */
	static readonly DisassociateAccounts: string[] = [
		"billingconductor:DisassociateAccounts",
	];
	/** IAM actions required for the DisassociatePricingRules API call. */
	static readonly DisassociatePricingRules: string[] = [
		"billingconductor:DisassociatePricingRules",
	];
	/** IAM actions required for the GetBillingGroupCostReport API call. */
	static readonly opGetBillingGroupCostReport: string[] = [
		"billingconductor:GetBillingGroupCostReport",
	];
	/** IAM actions required for the ListAccountAssociations API call. */
	static readonly ListAccountAssociations: string[] = [
		"billingconductor:ListAccountAssociations",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the ListBillingGroupCostReports API call. */
	static readonly ListBillingGroupCostReports: string[] = [
		"billingconductor:ListBillingGroupCostReports",
	];
	/** IAM actions required for the ListBillingGroups API call. */
	static readonly ListBillingGroups: string[] = [
		"billingconductor:ListBillingGroups",
	];
	/** IAM actions required for the ListCustomLineItemVersions API call. */
	static readonly ListCustomLineItemVersions: string[] = [
		"billingconductor:ListCustomLineItemVersions",
	];
	/** IAM actions required for the ListCustomLineItems API call. */
	static readonly ListCustomLineItems: string[] = [
		"billingconductor:ListCustomLineItems",
	];
	/** IAM actions required for the ListPricingPlans API call. */
	static readonly ListPricingPlans: string[] = [
		"billingconductor:ListPricingPlans",
	];
	/** IAM actions required for the ListPricingPlansAssociatedWithPricingRule API call. */
	static readonly ListPricingPlansAssociatedWithPricingRule: string[] = [
		"billingconductor:ListPricingPlansAssociatedWithPricingRule",
	];
	/** IAM actions required for the ListPricingRules API call. */
	static readonly ListPricingRules: string[] = [
		"billingconductor:ListPricingRules",
	];
	/** IAM actions required for the ListPricingRulesAssociatedToPricingPlan API call. */
	static readonly ListPricingRulesAssociatedToPricingPlan: string[] = [
		"billingconductor:ListPricingRulesAssociatedToPricingPlan",
	];
	/** IAM actions required for the ListResourcesAssociatedToCustomLineItem API call. */
	static readonly ListResourcesAssociatedToCustomLineItem: string[] = [
		"billingconductor:ListResourcesAssociatedToCustomLineItem",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"billingconductor:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["billingconductor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["billingconductor:UntagResource"];
	/** IAM actions required for the UpdateBillingGroup API call. */
	static readonly UpdateBillingGroup: string[] = [
		"billingconductor:UpdateBillingGroup",
	];
	/** IAM actions required for the UpdateCustomLineItem API call. */
	static readonly UpdateCustomLineItem: string[] = [
		"billingconductor:UpdateCustomLineItem",
	];
	/** IAM actions required for the UpdatePricingPlan API call. */
	static readonly UpdatePricingPlan: string[] = [
		"billingconductor:UpdatePricingPlan",
	];
	/** IAM actions required for the UpdatePricingRule API call. */
	static readonly UpdatePricingRule: string[] = [
		"billingconductor:UpdatePricingRule",
	];
}

/**
 * Condition key constants and builders for billingconductor.
 */
export class BillingconductorConditions {
	/** Condition keys applicable to the CreateBillingGroup action. */
	static readonly CreateBillingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomLineItem action. */
	static readonly CreateCustomLineItemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePricingPlan action. */
	static readonly CreatePricingPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePricingRule action. */
	static readonly CreatePricingRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
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
