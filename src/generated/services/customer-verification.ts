// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/customer-verification.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the customer-verification service.
 */
export class CustomerVerificationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "customer-verification";

	/** [Write] customer-verification:CreateCustomerVerificationDetails */
	static readonly CreateCustomerVerificationDetails =
		"customer-verification:CreateCustomerVerificationDetails";
	/** [Write] customer-verification:CreateUploadUrls */
	static readonly CreateUploadUrls = "customer-verification:CreateUploadUrls";
	/** [Read] customer-verification:GetCustomerVerificationDetails */
	static readonly actionGetCustomerVerificationDetails =
		"customer-verification:GetCustomerVerificationDetails";
	/** [Read] customer-verification:GetCustomerVerificationEligibility */
	static readonly actionGetCustomerVerificationEligibility =
		"customer-verification:GetCustomerVerificationEligibility";
	/** [Write] customer-verification:UpdateCustomerVerificationDetails */
	static readonly UpdateCustomerVerificationDetails =
		"customer-verification:UpdateCustomerVerificationDetails";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CustomerVerificationActions.actionGetCustomerVerificationDetails,
		CustomerVerificationActions.actionGetCustomerVerificationEligibility,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CustomerVerificationActions.CreateCustomerVerificationDetails,
		CustomerVerificationActions.CreateUploadUrls,
		CustomerVerificationActions.UpdateCustomerVerificationDetails,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
