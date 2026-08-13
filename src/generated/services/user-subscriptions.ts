// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/user-subscriptions.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the user-subscriptions service.
 */
export class UserSubscriptionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "user-subscriptions";

	/** [Write] user-subscriptions:CreateClaim */
	static readonly CreateClaim = "user-subscriptions:CreateClaim";
	/** [Write] user-subscriptions:CreateClaimAddOn */
	static readonly CreateClaimAddOn = "user-subscriptions:CreateClaimAddOn";
	/** [Write] user-subscriptions:DeleteAutoTopUpRule */
	static readonly DeleteAutoTopUpRule =
		"user-subscriptions:DeleteAutoTopUpRule";
	/** [Write] user-subscriptions:DeleteClaim */
	static readonly DeleteClaim = "user-subscriptions:DeleteClaim";
	/** [Read] user-subscriptions:GetAutoTopUpRule */
	static readonly actionGetAutoTopUpRule =
		"user-subscriptions:GetAutoTopUpRule";
	/** [Read] user-subscriptions:GetEffectiveUsageLimit */
	static readonly actionGetEffectiveUsageLimit =
		"user-subscriptions:GetEffectiveUsageLimit";
	/** [Read] user-subscriptions:GetUsageLimitHistory */
	static readonly actionGetUsageLimitHistory =
		"user-subscriptions:GetUsageLimitHistory";
	/** [List] user-subscriptions:ListApplicationClaims */
	static readonly ListApplicationClaims =
		"user-subscriptions:ListApplicationClaims";
	/** [List] user-subscriptions:ListClaimAddOns */
	static readonly ListClaimAddOns = "user-subscriptions:ListClaimAddOns";
	/** [List] user-subscriptions:ListClaims */
	static readonly ListClaims = "user-subscriptions:ListClaims";
	/** [List] user-subscriptions:ListEntitlements */
	static readonly ListEntitlements = "user-subscriptions:ListEntitlements";
	/** [List] user-subscriptions:ListUsageLimits */
	static readonly ListUsageLimits = "user-subscriptions:ListUsageLimits";
	/** [List] user-subscriptions:ListUserSubscriptions */
	static readonly ListUserSubscriptions =
		"user-subscriptions:ListUserSubscriptions";
	/** [Write] user-subscriptions:SetAutoTopUpRule */
	static readonly actionSetAutoTopUpRule =
		"user-subscriptions:SetAutoTopUpRule";
	/** [Write] user-subscriptions:SetOverageConfig */
	static readonly actionSetOverageConfig =
		"user-subscriptions:SetOverageConfig";
	/** [Write] user-subscriptions:SetUsageLimit */
	static readonly actionSetUsageLimit = "user-subscriptions:SetUsageLimit";
	/** [Write] user-subscriptions:UpdateClaim */
	static readonly UpdateClaim = "user-subscriptions:UpdateClaim";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		UserSubscriptionsActions.actionGetAutoTopUpRule,
		UserSubscriptionsActions.actionGetEffectiveUsageLimit,
		UserSubscriptionsActions.actionGetUsageLimitHistory,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		UserSubscriptionsActions.CreateClaim,
		UserSubscriptionsActions.CreateClaimAddOn,
		UserSubscriptionsActions.DeleteAutoTopUpRule,
		UserSubscriptionsActions.DeleteClaim,
		UserSubscriptionsActions.actionSetAutoTopUpRule,
		UserSubscriptionsActions.actionSetOverageConfig,
		UserSubscriptionsActions.actionSetUsageLimit,
		UserSubscriptionsActions.UpdateClaim,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		UserSubscriptionsActions.ListApplicationClaims,
		UserSubscriptionsActions.ListClaimAddOns,
		UserSubscriptionsActions.ListClaims,
		UserSubscriptionsActions.ListEntitlements,
		UserSubscriptionsActions.ListUsageLimits,
		UserSubscriptionsActions.ListUserSubscriptions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Condition key constants and builders for user-subscriptions.
 */
export class UserSubscriptionsConditions {
	/** Condition keys applicable to the CreateClaim action. */
	static readonly CreateClaimConditionKeys: string[] = [
		"user-subscriptions:CreateForSelf",
	];

	/** Condition key: user-subscriptions:CreateForSelf (Bool) */
	static readonly CREATE_FOR_SELF = "user-subscriptions:CreateForSelf";

	/**
	 * Generates a condition block for `user-subscriptions:CreateForSelf`.
	 */
	static createForSelf(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "user-subscriptions:CreateForSelf": value } };
	}
}
