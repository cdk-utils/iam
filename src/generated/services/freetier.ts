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
	static readonly actionGetAccountActivity = "freetier:GetAccountActivity";
	/** [Read] freetier:GetAccountPlanState */
	static readonly actionGetAccountPlanState = "freetier:GetAccountPlanState";
	/** [Read] freetier:GetFreeTierAlertPreference */
	static readonly actionGetFreeTierAlertPreference =
		"freetier:GetFreeTierAlertPreference";
	/** [Read] freetier:GetFreeTierUsage */
	static readonly actionGetFreeTierUsage = "freetier:GetFreeTierUsage";
	/** [List] freetier:ListAccountActivities */
	static readonly ListAccountActivities = "freetier:ListAccountActivities";
	/** [Write] freetier:PutFreeTierAlertPreference */
	static readonly PutFreeTierAlertPreference =
		"freetier:PutFreeTierAlertPreference";
	/** [Write] freetier:UpgradeAccountPlan */
	static readonly UpgradeAccountPlan = "freetier:UpgradeAccountPlan";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FreetierActions.actionGetAccountActivity,
		FreetierActions.actionGetAccountPlanState,
		FreetierActions.actionGetFreeTierAlertPreference,
		FreetierActions.actionGetFreeTierUsage,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FreetierActions.PutFreeTierAlertPreference,
		FreetierActions.UpgradeAccountPlan,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FreetierActions.ListAccountActivities,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for freetier.
 */
export class FreetierOperations {
	/** IAM actions required for the GetAccountActivity API call. */
	static readonly opGetAccountActivity: string[] = [
		"freetier:GetAccountActivity",
	];
	/** IAM actions required for the GetAccountPlanState API call. */
	static readonly opGetAccountPlanState: string[] = [
		"freetier:GetAccountPlanState",
	];
	/** IAM actions required for the GetFreeTierUsage API call. */
	static readonly opGetFreeTierUsage: string[] = [
		"freetier:GetFreeTierUsage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListAccountActivities API call. */
	static readonly ListAccountActivities: string[] = [
		"freetier:ListAccountActivities",
	];
	/** IAM actions required for the UpgradeAccountPlan API call. */
	static readonly UpgradeAccountPlan: string[] = [
		"freetier:UpgradeAccountPlan",
	];
}
