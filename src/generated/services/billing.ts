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
	static readonly AssociateSourceViews = "billing:AssociateSourceViews";
	/** [Write] billing:CreateBillingView */
	static readonly CreateBillingView = "billing:CreateBillingView";
	/** [Write] billing:DeleteBillingView */
	static readonly DeleteBillingView = "billing:DeleteBillingView";
	/** [PermissionManagement] billing:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "billing:DeleteResourcePolicy";
	/** [Write] billing:DisassociateSourceViews */
	static readonly DisassociateSourceViews = "billing:DisassociateSourceViews";
	/** [Read] billing:GetBillingData */
	static readonly actionGetBillingData = "billing:GetBillingData";
	/** [Read] billing:GetBillingDetails */
	static readonly actionGetBillingDetails = "billing:GetBillingDetails";
	/** [Read] billing:GetBillingNotifications */
	static readonly actionGetBillingNotifications =
		"billing:GetBillingNotifications";
	/** [Read] billing:GetBillingPreferences */
	static readonly actionGetBillingPreferences = "billing:GetBillingPreferences";
	/** [Read] billing:GetBillingView */
	static readonly actionGetBillingView = "billing:GetBillingView";
	/** [Read] billing:GetBillingViewData */
	static readonly actionGetBillingViewData = "billing:GetBillingViewData";
	/** [Read] billing:GetContractInformation */
	static readonly actionGetContractInformation =
		"billing:GetContractInformation";
	/** [Read] billing:GetCreditAllocationHistory */
	static readonly actionGetCreditAllocationHistory =
		"billing:GetCreditAllocationHistory";
	/** [Read] billing:GetCredits */
	static readonly actionGetCredits = "billing:GetCredits";
	/** [Read] billing:GetEnterpriseSupportChargeSummary */
	static readonly actionGetEnterpriseSupportChargeSummary =
		"billing:GetEnterpriseSupportChargeSummary";
	/** [Read] billing:GetEnterpriseSupportContractDetails */
	static readonly actionGetEnterpriseSupportContractDetails =
		"billing:GetEnterpriseSupportContractDetails";
	/** [Read] billing:GetIAMAccessPreference */
	static readonly actionGetIAMAccessPreference =
		"billing:GetIAMAccessPreference";
	/** [PermissionManagement] billing:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "billing:GetResourcePolicy";
	/** [Read] billing:GetSellerOfRecord */
	static readonly actionGetSellerOfRecord = "billing:GetSellerOfRecord";
	/** [Read] billing:ListBillingViews */
	static readonly ListBillingViews = "billing:ListBillingViews";
	/** [List] billing:ListEnterpriseSupportLinkedAccountCharges */
	static readonly ListEnterpriseSupportLinkedAccountCharges =
		"billing:ListEnterpriseSupportLinkedAccountCharges";
	/** [List] billing:ListSourceViewsForBillingView */
	static readonly ListSourceViewsForBillingView =
		"billing:ListSourceViewsForBillingView";
	/** [Read] billing:ListTagsForResource */
	static readonly ListTagsForResource = "billing:ListTagsForResource";
	/** [Write] billing:PutContractInformation */
	static readonly PutContractInformation = "billing:PutContractInformation";
	/** [PermissionManagement] billing:PutResourcePolicy */
	static readonly PutResourcePolicy = "billing:PutResourcePolicy";
	/** [Write] billing:RedeemCredits */
	static readonly RedeemCredits = "billing:RedeemCredits";
	/** [Tagging] billing:TagResource */
	static readonly TagResource = "billing:TagResource";
	/** [Tagging] billing:UntagResource */
	static readonly UntagResource = "billing:UntagResource";
	/** [Write] billing:UpdateBillingPreferences */
	static readonly UpdateBillingPreferences = "billing:UpdateBillingPreferences";
	/** [Write] billing:UpdateBillingView */
	static readonly UpdateBillingView = "billing:UpdateBillingView";
	/** [Write] billing:UpdateIAMAccessPreference */
	static readonly UpdateIAMAccessPreference =
		"billing:UpdateIAMAccessPreference";
	/** [Read] billing:UseSourceView */
	static readonly UseSourceView = "billing:UseSourceView";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BillingActions.actionGetBillingData,
		BillingActions.actionGetBillingDetails,
		BillingActions.actionGetBillingNotifications,
		BillingActions.actionGetBillingPreferences,
		BillingActions.actionGetBillingView,
		BillingActions.actionGetBillingViewData,
		BillingActions.actionGetContractInformation,
		BillingActions.actionGetCreditAllocationHistory,
		BillingActions.actionGetCredits,
		BillingActions.actionGetEnterpriseSupportChargeSummary,
		BillingActions.actionGetEnterpriseSupportContractDetails,
		BillingActions.actionGetIAMAccessPreference,
		BillingActions.actionGetSellerOfRecord,
		BillingActions.ListBillingViews,
		BillingActions.ListTagsForResource,
		BillingActions.UseSourceView,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BillingActions.AssociateSourceViews,
		BillingActions.CreateBillingView,
		BillingActions.DeleteBillingView,
		BillingActions.DisassociateSourceViews,
		BillingActions.PutContractInformation,
		BillingActions.RedeemCredits,
		BillingActions.UpdateBillingPreferences,
		BillingActions.UpdateBillingView,
		BillingActions.UpdateIAMAccessPreference,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BillingActions.ListEnterpriseSupportLinkedAccountCharges,
		BillingActions.ListSourceViewsForBillingView,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		BillingActions.DeleteResourcePolicy,
		BillingActions.actionGetResourcePolicy,
		BillingActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BillingActions.TagResource,
		BillingActions.UntagResource,
	];
}

/**
 * Properties for building a billingview ARN.
 */
export interface BillingBillingviewArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a billingview ARN.
 */
export interface BillingBillingviewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const BillingviewArnRegex =
	/^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for billing resources.
 */
export class BillingResources {
	/**
	 * Builds an ARN for the billingview resource.
	 */
	static billingview(props: BillingBillingviewArnProps): string {
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
	static parseBillingviewArn(arn: string): BillingBillingviewArnComponents {
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
	static readonly AssociateSourceViews: string[] = [
		"billing:AssociateSourceViews",
		"billing:UseSourceView",
	];
	/** IAM actions required for the CreateBillingView API call. */
	static readonly CreateBillingView: string[] = [
		"billing:CreateBillingView",
		"billing:TagResource",
		"billing:UseSourceView",
	];
	/** IAM actions required for the DeleteBillingView API call. */
	static readonly DeleteBillingView: string[] = ["billing:DeleteBillingView"];
	/** IAM actions required for the DisassociateSourceViews API call. */
	static readonly DisassociateSourceViews: string[] = [
		"billing:DisassociateSourceViews",
	];
	/** IAM actions required for the GetBillingPreferences API call. */
	static readonly opGetBillingPreferences: string[] = [
		"billing:GetBillingPreferences",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetBillingView API call. */
	static readonly opGetBillingView: string[] = ["billing:GetBillingView"];
	/** IAM actions required for the GetCreditAllocationHistory API call. */
	static readonly opGetCreditAllocationHistory: string[] = [
		"billing:GetCreditAllocationHistory",
	];
	/** IAM actions required for the GetCredits API call. */
	static readonly opGetCredits: string[] = [
		"billing:GetCredits",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetEnterpriseSupportChargeSummary API call. */
	static readonly opGetEnterpriseSupportChargeSummary: string[] = [
		"billing:GetEnterpriseSupportChargeSummary",
	];
	/** IAM actions required for the GetEnterpriseSupportContractDetails API call. */
	static readonly opGetEnterpriseSupportContractDetails: string[] = [
		"billing:GetEnterpriseSupportContractDetails",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["billing:GetResourcePolicy"];
	/** IAM actions required for the ListBillingViews API call. */
	static readonly ListBillingViews: string[] = ["billing:ListBillingViews"];
	/** IAM actions required for the ListEnterpriseSupportLinkedAccountCharges API call. */
	static readonly ListEnterpriseSupportLinkedAccountCharges: string[] = [
		"billing:ListEnterpriseSupportLinkedAccountCharges",
	];
	/** IAM actions required for the ListSourceViewsForBillingView API call. */
	static readonly ListSourceViewsForBillingView: string[] = [
		"billing:ListSourceViewsForBillingView",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"billing:ListTagsForResource",
	];
	/** IAM actions required for the RedeemCredits API call. */
	static readonly RedeemCredits: string[] = [
		"aws-portal:ModifyBilling",
		"billing:RedeemCredits",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["billing:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["billing:UntagResource"];
	/** IAM actions required for the UpdateBillingPreferences API call. */
	static readonly UpdateBillingPreferences: string[] = [
		"aws-portal:ModifyBilling",
		"billing:UpdateBillingPreferences",
	];
	/** IAM actions required for the UpdateBillingView API call. */
	static readonly UpdateBillingView: string[] = ["billing:UpdateBillingView"];
}

/**
 * Condition key constants and builders for billing.
 */
export class BillingConditions {
	/** Condition keys applicable to the AssociateSourceViews action. */
	static readonly AssociateSourceViewsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBillingView action. */
	static readonly CreateBillingViewConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteBillingView action. */
	static readonly DeleteBillingViewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DeleteResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateSourceViews action. */
	static readonly DisassociateSourceViewsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingData action. */
	static readonly actionGetBillingDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingDetails action. */
	static readonly actionGetBillingDetailsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetBillingView action. */
	static readonly actionGetBillingViewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourcePolicy action. */
	static readonly actionGetResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSourceViewsForBillingView action. */
	static readonly ListSourceViewsForBillingViewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateBillingView action. */
	static readonly UpdateBillingViewConditionKeys: string[] = [
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
