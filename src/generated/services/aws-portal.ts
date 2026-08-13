// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aws-portal.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aws-portal service.
 */
export class AWSPortalActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aws-portal";

	/** [Read] aws-portal:GetConsoleActionSetEnforced */
	static readonly GET_CONSOLE_ACTION_SET_ENFORCED =
		"aws-portal:GetConsoleActionSetEnforced";
	/** [Write] aws-portal:ModifyAccount */
	static readonly MODIFY_ACCOUNT = "aws-portal:ModifyAccount";
	/** [Write] aws-portal:ModifyBilling */
	static readonly MODIFY_BILLING = "aws-portal:ModifyBilling";
	/** [Write] aws-portal:ModifyPaymentMethods */
	static readonly MODIFY_PAYMENT_METHODS = "aws-portal:ModifyPaymentMethods";
	/** [Write] aws-portal:UpdateConsoleActionSetEnforced */
	static readonly UPDATE_CONSOLE_ACTION_SET_ENFORCED =
		"aws-portal:UpdateConsoleActionSetEnforced";
	/** [Read] aws-portal:ViewAccount */
	static readonly VIEW_ACCOUNT = "aws-portal:ViewAccount";
	/** [Read] aws-portal:ViewBilling */
	static readonly VIEW_BILLING = "aws-portal:ViewBilling";
	/** [Read] aws-portal:ViewPaymentMethods */
	static readonly VIEW_PAYMENT_METHODS = "aws-portal:ViewPaymentMethods";
	/** [Read] aws-portal:ViewUsage */
	static readonly VIEW_USAGE = "aws-portal:ViewUsage";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AWSPortalActions.GET_CONSOLE_ACTION_SET_ENFORCED,
		AWSPortalActions.VIEW_ACCOUNT,
		AWSPortalActions.VIEW_BILLING,
		AWSPortalActions.VIEW_PAYMENT_METHODS,
		AWSPortalActions.VIEW_USAGE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AWSPortalActions.MODIFY_ACCOUNT,
		AWSPortalActions.MODIFY_BILLING,
		AWSPortalActions.MODIFY_PAYMENT_METHODS,
		AWSPortalActions.UPDATE_CONSOLE_ACTION_SET_ENFORCED,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
