// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/freetier.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the freetier service.
 */
export class FreetierActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "freetier";

	/** [Read] freetier:GetAccountActivity */
	static readonly GET_ACCOUNT_ACTIVITY = "freetier:GetAccountActivity";
	/** [Read] freetier:GetAccountPlanState */
	static readonly GET_ACCOUNT_PLAN_STATE = "freetier:GetAccountPlanState";
	/** [Read] freetier:GetFreeTierAlertPreference */
	static readonly GET_FREE_TIER_ALERT_PREFERENCE =
		"freetier:GetFreeTierAlertPreference";
	/** [Read] freetier:GetFreeTierUsage */
	static readonly GET_FREE_TIER_USAGE = "freetier:GetFreeTierUsage";
	/** [List] freetier:ListAccountActivities */
	static readonly LIST_ACCOUNT_ACTIVITIES = "freetier:ListAccountActivities";
	/** [Write] freetier:PutFreeTierAlertPreference */
	static readonly PUT_FREE_TIER_ALERT_PREFERENCE =
		"freetier:PutFreeTierAlertPreference";
	/** [Write] freetier:UpgradeAccountPlan */
	static readonly UPGRADE_ACCOUNT_PLAN = "freetier:UpgradeAccountPlan";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FreetierActions.GET_ACCOUNT_ACTIVITY,
		FreetierActions.GET_ACCOUNT_PLAN_STATE,
		FreetierActions.GET_FREE_TIER_ALERT_PREFERENCE,
		FreetierActions.GET_FREE_TIER_USAGE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FreetierActions.PUT_FREE_TIER_ALERT_PREFERENCE,
		FreetierActions.UPGRADE_ACCOUNT_PLAN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FreetierActions.LIST_ACCOUNT_ACTIVITIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for freetier.
 */
export class FreetierOperations {
	/** IAM actions required for the GetAccountActivity API call. */
	static readonly GET_ACCOUNT_ACTIVITY: string[] = [
		"freetier:GetAccountActivity",
	];
	/** IAM actions required for the GetAccountPlanState API call. */
	static readonly GET_ACCOUNT_PLAN_STATE: string[] = [
		"freetier:GetAccountPlanState",
	];
	/** IAM actions required for the GetFreeTierUsage API call. */
	static readonly GET_FREE_TIER_USAGE: string[] = [
		"freetier:GetFreeTierUsage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListAccountActivities API call. */
	static readonly LIST_ACCOUNT_ACTIVITIES: string[] = [
		"freetier:ListAccountActivities",
	];
	/** IAM actions required for the UpgradeAccountPlan API call. */
	static readonly UPGRADE_ACCOUNT_PLAN: string[] = [
		"freetier:UpgradeAccountPlan",
	];
}
