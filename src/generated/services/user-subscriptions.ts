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
	static readonly CREATE_CLAIM = "user-subscriptions:CreateClaim";
	/** [Write] user-subscriptions:CreateClaimAddOn */
	static readonly CREATE_CLAIM_ADD_ON = "user-subscriptions:CreateClaimAddOn";
	/** [Write] user-subscriptions:DeleteAutoTopUpRule */
	static readonly DELETE_AUTO_TOP_UP_RULE =
		"user-subscriptions:DeleteAutoTopUpRule";
	/** [Write] user-subscriptions:DeleteClaim */
	static readonly DELETE_CLAIM = "user-subscriptions:DeleteClaim";
	/** [Read] user-subscriptions:GetAutoTopUpRule */
	static readonly GET_AUTO_TOP_UP_RULE = "user-subscriptions:GetAutoTopUpRule";
	/** [Read] user-subscriptions:GetEffectiveUsageLimit */
	static readonly GET_EFFECTIVE_USAGE_LIMIT =
		"user-subscriptions:GetEffectiveUsageLimit";
	/** [Read] user-subscriptions:GetUsageLimitHistory */
	static readonly GET_USAGE_LIMIT_HISTORY =
		"user-subscriptions:GetUsageLimitHistory";
	/** [List] user-subscriptions:ListApplicationClaims */
	static readonly LIST_APPLICATION_CLAIMS =
		"user-subscriptions:ListApplicationClaims";
	/** [List] user-subscriptions:ListClaimAddOns */
	static readonly LIST_CLAIM_ADD_ONS = "user-subscriptions:ListClaimAddOns";
	/** [List] user-subscriptions:ListClaims */
	static readonly LIST_CLAIMS = "user-subscriptions:ListClaims";
	/** [List] user-subscriptions:ListEntitlements */
	static readonly LIST_ENTITLEMENTS = "user-subscriptions:ListEntitlements";
	/** [List] user-subscriptions:ListUsageLimits */
	static readonly LIST_USAGE_LIMITS = "user-subscriptions:ListUsageLimits";
	/** [List] user-subscriptions:ListUserSubscriptions */
	static readonly LIST_USER_SUBSCRIPTIONS =
		"user-subscriptions:ListUserSubscriptions";
	/** [Write] user-subscriptions:SetAutoTopUpRule */
	static readonly SET_AUTO_TOP_UP_RULE = "user-subscriptions:SetAutoTopUpRule";
	/** [Write] user-subscriptions:SetOverageConfig */
	static readonly SET_OVERAGE_CONFIG = "user-subscriptions:SetOverageConfig";
	/** [Write] user-subscriptions:SetUsageLimit */
	static readonly SET_USAGE_LIMIT = "user-subscriptions:SetUsageLimit";
	/** [Write] user-subscriptions:UpdateClaim */
	static readonly UPDATE_CLAIM = "user-subscriptions:UpdateClaim";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		UserSubscriptionsActions.GET_AUTO_TOP_UP_RULE,
		UserSubscriptionsActions.GET_EFFECTIVE_USAGE_LIMIT,
		UserSubscriptionsActions.GET_USAGE_LIMIT_HISTORY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		UserSubscriptionsActions.CREATE_CLAIM,
		UserSubscriptionsActions.CREATE_CLAIM_ADD_ON,
		UserSubscriptionsActions.DELETE_AUTO_TOP_UP_RULE,
		UserSubscriptionsActions.DELETE_CLAIM,
		UserSubscriptionsActions.SET_AUTO_TOP_UP_RULE,
		UserSubscriptionsActions.SET_OVERAGE_CONFIG,
		UserSubscriptionsActions.SET_USAGE_LIMIT,
		UserSubscriptionsActions.UPDATE_CLAIM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		UserSubscriptionsActions.LIST_APPLICATION_CLAIMS,
		UserSubscriptionsActions.LIST_CLAIM_ADD_ONS,
		UserSubscriptionsActions.LIST_CLAIMS,
		UserSubscriptionsActions.LIST_ENTITLEMENTS,
		UserSubscriptionsActions.LIST_USAGE_LIMITS,
		UserSubscriptionsActions.LIST_USER_SUBSCRIPTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * Condition key constants and builders for user-subscriptions.
 */
export class UserSubscriptionsConditions {
	/** Condition keys applicable to the CreateClaim action. */
	static readonly CREATE_CLAIM_CONDITION_KEYS: string[] = [
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
