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
	static readonly actionGetConsoleActionSetEnforced =
		"aws-portal:GetConsoleActionSetEnforced";
	/** [Write] aws-portal:ModifyAccount */
	static readonly ModifyAccount = "aws-portal:ModifyAccount";
	/** [Write] aws-portal:ModifyBilling */
	static readonly ModifyBilling = "aws-portal:ModifyBilling";
	/** [Write] aws-portal:ModifyPaymentMethods */
	static readonly ModifyPaymentMethods = "aws-portal:ModifyPaymentMethods";
	/** [Write] aws-portal:UpdateConsoleActionSetEnforced */
	static readonly UpdateConsoleActionSetEnforced =
		"aws-portal:UpdateConsoleActionSetEnforced";
	/** [Read] aws-portal:ViewAccount */
	static readonly ViewAccount = "aws-portal:ViewAccount";
	/** [Read] aws-portal:ViewBilling */
	static readonly ViewBilling = "aws-portal:ViewBilling";
	/** [Read] aws-portal:ViewPaymentMethods */
	static readonly ViewPaymentMethods = "aws-portal:ViewPaymentMethods";
	/** [Read] aws-portal:ViewUsage */
	static readonly ViewUsage = "aws-portal:ViewUsage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AWSPortalActions.actionGetConsoleActionSetEnforced,
		AWSPortalActions.ViewAccount,
		AWSPortalActions.ViewBilling,
		AWSPortalActions.ViewPaymentMethods,
		AWSPortalActions.ViewUsage,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AWSPortalActions.ModifyAccount,
		AWSPortalActions.ModifyBilling,
		AWSPortalActions.ModifyPaymentMethods,
		AWSPortalActions.UpdateConsoleActionSetEnforced,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
