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
	static readonly CREATE_CUSTOMER_VERIFICATION_DETAILS =
		"customer-verification:CreateCustomerVerificationDetails";
	/** [Write] customer-verification:CreateUploadUrls */
	static readonly CREATE_UPLOAD_URLS = "customer-verification:CreateUploadUrls";
	/** [Read] customer-verification:GetCustomerVerificationDetails */
	static readonly GET_CUSTOMER_VERIFICATION_DETAILS =
		"customer-verification:GetCustomerVerificationDetails";
	/** [Read] customer-verification:GetCustomerVerificationEligibility */
	static readonly GET_CUSTOMER_VERIFICATION_ELIGIBILITY =
		"customer-verification:GetCustomerVerificationEligibility";
	/** [Write] customer-verification:UpdateCustomerVerificationDetails */
	static readonly UPDATE_CUSTOMER_VERIFICATION_DETAILS =
		"customer-verification:UpdateCustomerVerificationDetails";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CustomerVerificationActions.GET_CUSTOMER_VERIFICATION_DETAILS,
		CustomerVerificationActions.GET_CUSTOMER_VERIFICATION_ELIGIBILITY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CustomerVerificationActions.CREATE_CUSTOMER_VERIFICATION_DETAILS,
		CustomerVerificationActions.CREATE_UPLOAD_URLS,
		CustomerVerificationActions.UPDATE_CUSTOMER_VERIFICATION_DETAILS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
