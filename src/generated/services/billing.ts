// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/billing.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the billing service.
 */
export class BillingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "billing";

	/** [Write] billing:AssociateSourceViews */
	static readonly ASSOCIATE_SOURCE_VIEWS = "billing:AssociateSourceViews";
	/** [Write] billing:CreateBillingView */
	static readonly CREATE_BILLING_VIEW = "billing:CreateBillingView";
	/** [Write] billing:DeleteBillingView */
	static readonly DELETE_BILLING_VIEW = "billing:DeleteBillingView";
	/** [PermissionManagement] billing:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "billing:DeleteResourcePolicy";
	/** [Write] billing:DisassociateSourceViews */
	static readonly DISASSOCIATE_SOURCE_VIEWS = "billing:DisassociateSourceViews";
	/** [Read] billing:GetBillingData */
	static readonly GET_BILLING_DATA = "billing:GetBillingData";
	/** [Read] billing:GetBillingDetails */
	static readonly GET_BILLING_DETAILS = "billing:GetBillingDetails";
	/** [Read] billing:GetBillingNotifications */
	static readonly GET_BILLING_NOTIFICATIONS = "billing:GetBillingNotifications";
	/** [Read] billing:GetBillingPreferences */
	static readonly GET_BILLING_PREFERENCES = "billing:GetBillingPreferences";
	/** [Read] billing:GetBillingView */
	static readonly GET_BILLING_VIEW = "billing:GetBillingView";
	/** [Read] billing:GetBillingViewData */
	static readonly GET_BILLING_VIEW_DATA = "billing:GetBillingViewData";
	/** [Read] billing:GetContractInformation */
	static readonly GET_CONTRACT_INFORMATION = "billing:GetContractInformation";
	/** [Read] billing:GetCreditAllocationHistory */
	static readonly GET_CREDIT_ALLOCATION_HISTORY =
		"billing:GetCreditAllocationHistory";
	/** [Read] billing:GetCredits */
	static readonly GET_CREDITS = "billing:GetCredits";
	/** [Read] billing:GetEnterpriseSupportChargeSummary */
	static readonly GET_ENTERPRISE_SUPPORT_CHARGE_SUMMARY =
		"billing:GetEnterpriseSupportChargeSummary";
	/** [Read] billing:GetEnterpriseSupportContractDetails */
	static readonly GET_ENTERPRISE_SUPPORT_CONTRACT_DETAILS =
		"billing:GetEnterpriseSupportContractDetails";
	/** [Read] billing:GetIAMAccessPreference */
	static readonly GET_IAM_ACCESS_PREFERENCE = "billing:GetIAMAccessPreference";
	/** [PermissionManagement] billing:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "billing:GetResourcePolicy";
	/** [Read] billing:GetSellerOfRecord */
	static readonly GET_SELLER_OF_RECORD = "billing:GetSellerOfRecord";
	/** [Read] billing:ListBillingViews */
	static readonly LIST_BILLING_VIEWS = "billing:ListBillingViews";
	/** [List] billing:ListEnterpriseSupportLinkedAccountCharges */
	static readonly LIST_ENTERPRISE_SUPPORT_LINKED_ACCOUNT_CHARGES =
		"billing:ListEnterpriseSupportLinkedAccountCharges";
	/** [List] billing:ListSourceViewsForBillingView */
	static readonly LIST_SOURCE_VIEWS_FOR_BILLING_VIEW =
		"billing:ListSourceViewsForBillingView";
	/** [Read] billing:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "billing:ListTagsForResource";
	/** [Write] billing:PutContractInformation */
	static readonly PUT_CONTRACT_INFORMATION = "billing:PutContractInformation";
	/** [PermissionManagement] billing:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "billing:PutResourcePolicy";
	/** [Write] billing:RedeemCredits */
	static readonly REDEEM_CREDITS = "billing:RedeemCredits";
	/** [Tagging] billing:TagResource */
	static readonly TAG_RESOURCE = "billing:TagResource";
	/** [Tagging] billing:UntagResource */
	static readonly UNTAG_RESOURCE = "billing:UntagResource";
	/** [Write] billing:UpdateBillingPreferences */
	static readonly UPDATE_BILLING_PREFERENCES =
		"billing:UpdateBillingPreferences";
	/** [Write] billing:UpdateBillingView */
	static readonly UPDATE_BILLING_VIEW = "billing:UpdateBillingView";
	/** [Write] billing:UpdateIAMAccessPreference */
	static readonly UPDATE_IAM_ACCESS_PREFERENCE =
		"billing:UpdateIAMAccessPreference";
	/** [Read] billing:UseSourceView */
	static readonly USE_SOURCE_VIEW = "billing:UseSourceView";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BillingActions.GET_BILLING_DATA,
		BillingActions.GET_BILLING_DETAILS,
		BillingActions.GET_BILLING_NOTIFICATIONS,
		BillingActions.GET_BILLING_PREFERENCES,
		BillingActions.GET_BILLING_VIEW,
		BillingActions.GET_BILLING_VIEW_DATA,
		BillingActions.GET_CONTRACT_INFORMATION,
		BillingActions.GET_CREDIT_ALLOCATION_HISTORY,
		BillingActions.GET_CREDITS,
		BillingActions.GET_ENTERPRISE_SUPPORT_CHARGE_SUMMARY,
		BillingActions.GET_ENTERPRISE_SUPPORT_CONTRACT_DETAILS,
		BillingActions.GET_IAM_ACCESS_PREFERENCE,
		BillingActions.GET_SELLER_OF_RECORD,
		BillingActions.LIST_BILLING_VIEWS,
		BillingActions.LIST_TAGS_FOR_RESOURCE,
		BillingActions.USE_SOURCE_VIEW,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BillingActions.ASSOCIATE_SOURCE_VIEWS,
		BillingActions.CREATE_BILLING_VIEW,
		BillingActions.DELETE_BILLING_VIEW,
		BillingActions.DISASSOCIATE_SOURCE_VIEWS,
		BillingActions.PUT_CONTRACT_INFORMATION,
		BillingActions.REDEEM_CREDITS,
		BillingActions.UPDATE_BILLING_PREFERENCES,
		BillingActions.UPDATE_BILLING_VIEW,
		BillingActions.UPDATE_IAM_ACCESS_PREFERENCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BillingActions.LIST_ENTERPRISE_SUPPORT_LINKED_ACCOUNT_CHARGES,
		BillingActions.LIST_SOURCE_VIEWS_FOR_BILLING_VIEW,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		BillingActions.DELETE_RESOURCE_POLICY,
		BillingActions.GET_RESOURCE_POLICY,
		BillingActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BillingActions.TAG_RESOURCE,
		BillingActions.UNTAG_RESOURCE,
	];
}

const BillingviewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for billing resources.
 */
export class BillingResources {
	/**
	 * Builds an ARN for the billingview resource.
	 */
	static billingview(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billing::${props.account ?? "*"}:billingview/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the billingview resource.
	 */
	static isValidBillingviewArn(arn: string): boolean {
		return BillingviewArnRegex.test(arn);
	}

	/**
	 * Parses a billingview ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillingviewArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = BillingviewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid billingview ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for billing.
 */
export class BillingOperations {
	/** IAM actions required for the AssociateSourceViews API call. */
	static readonly ASSOCIATE_SOURCE_VIEWS: string[] = [
		"billing:AssociateSourceViews",
		"billing:UseSourceView",
	];
	/** IAM actions required for the CreateBillingView API call. */
	static readonly CREATE_BILLING_VIEW: string[] = [
		"billing:CreateBillingView",
		"billing:TagResource",
		"billing:UseSourceView",
	];
	/** IAM actions required for the DeleteBillingView API call. */
	static readonly DELETE_BILLING_VIEW: string[] = ["billing:DeleteBillingView"];
	/** IAM actions required for the DisassociateSourceViews API call. */
	static readonly DISASSOCIATE_SOURCE_VIEWS: string[] = [
		"billing:DisassociateSourceViews",
	];
	/** IAM actions required for the GetBillingPreferences API call. */
	static readonly GET_BILLING_PREFERENCES: string[] = [
		"billing:GetBillingPreferences",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetBillingView API call. */
	static readonly GET_BILLING_VIEW: string[] = ["billing:GetBillingView"];
	/** IAM actions required for the GetCreditAllocationHistory API call. */
	static readonly GET_CREDIT_ALLOCATION_HISTORY: string[] = [
		"billing:GetCreditAllocationHistory",
	];
	/** IAM actions required for the GetCredits API call. */
	static readonly GET_CREDITS: string[] = [
		"billing:GetCredits",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetEnterpriseSupportChargeSummary API call. */
	static readonly GET_ENTERPRISE_SUPPORT_CHARGE_SUMMARY: string[] = [
		"billing:GetEnterpriseSupportChargeSummary",
	];
	/** IAM actions required for the GetEnterpriseSupportContractDetails API call. */
	static readonly GET_ENTERPRISE_SUPPORT_CONTRACT_DETAILS: string[] = [
		"billing:GetEnterpriseSupportContractDetails",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["billing:GetResourcePolicy"];
	/** IAM actions required for the ListBillingViews API call. */
	static readonly LIST_BILLING_VIEWS: string[] = ["billing:ListBillingViews"];
	/** IAM actions required for the ListEnterpriseSupportLinkedAccountCharges API call. */
	static readonly LIST_ENTERPRISE_SUPPORT_LINKED_ACCOUNT_CHARGES: string[] = [
		"billing:ListEnterpriseSupportLinkedAccountCharges",
	];
	/** IAM actions required for the ListSourceViewsForBillingView API call. */
	static readonly LIST_SOURCE_VIEWS_FOR_BILLING_VIEW: string[] = [
		"billing:ListSourceViewsForBillingView",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"billing:ListTagsForResource",
	];
	/** IAM actions required for the RedeemCredits API call. */
	static readonly REDEEM_CREDITS: string[] = [
		"aws-portal:ModifyBilling",
		"billing:RedeemCredits",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["billing:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["billing:UntagResource"];
	/** IAM actions required for the UpdateBillingPreferences API call. */
	static readonly UPDATE_BILLING_PREFERENCES: string[] = [
		"aws-portal:ModifyBilling",
		"billing:UpdateBillingPreferences",
	];
	/** IAM actions required for the UpdateBillingView API call. */
	static readonly UPDATE_BILLING_VIEW: string[] = ["billing:UpdateBillingView"];
}

/**
 * Condition key constants and builders for billing.
 */
export class BillingConditions {
	/** Condition keys applicable to the AssociateSourceViews action. */
	static readonly ASSOCIATE_SOURCE_VIEWS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBillingView action. */
	static readonly CREATE_BILLING_VIEW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteBillingView action. */
	static readonly DELETE_BILLING_VIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DELETE_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateSourceViews action. */
	static readonly DISASSOCIATE_SOURCE_VIEWS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingData action. */
	static readonly GET_BILLING_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingDetails action. */
	static readonly GET_BILLING_DETAILS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingView action. */
	static readonly GET_BILLING_VIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourcePolicy action. */
	static readonly GET_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSourceViewsForBillingView action. */
	static readonly LIST_SOURCE_VIEWS_FOR_BILLING_VIEW_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateBillingView action. */
	static readonly UPDATE_BILLING_VIEW_CONDITION_KEYS: string[] = [
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
