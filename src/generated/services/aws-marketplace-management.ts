// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aws-marketplace-management.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aws-marketplace-management service.
 */
export class AWSMarketplaceManagementActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aws-marketplace-management";

	/** [Read] aws-marketplace-management:GetAdditionalSellerNotificationRecipients */
	static readonly GET_ADDITIONAL_SELLER_NOTIFICATION_RECIPIENTS =
		"aws-marketplace-management:GetAdditionalSellerNotificationRecipients";
	/** [Read] aws-marketplace-management:GetBankAccountVerificationDetails */
	static readonly GET_BANK_ACCOUNT_VERIFICATION_DETAILS =
		"aws-marketplace-management:GetBankAccountVerificationDetails";
	/** [Read] aws-marketplace-management:GetSecondaryUserVerificationDetails */
	static readonly GET_SECONDARY_USER_VERIFICATION_DETAILS =
		"aws-marketplace-management:GetSecondaryUserVerificationDetails";
	/** [Read] aws-marketplace-management:GetSellerVerificationDetails */
	static readonly GET_SELLER_VERIFICATION_DETAILS =
		"aws-marketplace-management:GetSellerVerificationDetails";
	/** [Write] aws-marketplace-management:PutAdditionalSellerNotificationRecipients */
	static readonly PUT_ADDITIONAL_SELLER_NOTIFICATION_RECIPIENTS =
		"aws-marketplace-management:PutAdditionalSellerNotificationRecipients";
	/** [Write] aws-marketplace-management:PutBankAccountVerificationDetails */
	static readonly PUT_BANK_ACCOUNT_VERIFICATION_DETAILS =
		"aws-marketplace-management:PutBankAccountVerificationDetails";
	/** [Write] aws-marketplace-management:PutSecondaryUserVerificationDetails */
	static readonly PUT_SECONDARY_USER_VERIFICATION_DETAILS =
		"aws-marketplace-management:PutSecondaryUserVerificationDetails";
	/** [Write] aws-marketplace-management:PutSellerVerificationDetails */
	static readonly PUT_SELLER_VERIFICATION_DETAILS =
		"aws-marketplace-management:PutSellerVerificationDetails";
	/** [Write] aws-marketplace-management:uploadFiles */
	static readonly UPLOAD_FILES = "aws-marketplace-management:uploadFiles";
	/** [List] aws-marketplace-management:viewMarketing */
	static readonly VIEW_MARKETING = "aws-marketplace-management:viewMarketing";
	/** [List] aws-marketplace-management:viewReports */
	static readonly VIEW_REPORTS = "aws-marketplace-management:viewReports";
	/** [List] aws-marketplace-management:viewSettings */
	static readonly VIEW_SETTINGS = "aws-marketplace-management:viewSettings";
	/** [List] aws-marketplace-management:viewSupport */
	static readonly VIEW_SUPPORT = "aws-marketplace-management:viewSupport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AWSMarketplaceManagementActions.GET_ADDITIONAL_SELLER_NOTIFICATION_RECIPIENTS,
		AWSMarketplaceManagementActions.GET_BANK_ACCOUNT_VERIFICATION_DETAILS,
		AWSMarketplaceManagementActions.GET_SECONDARY_USER_VERIFICATION_DETAILS,
		AWSMarketplaceManagementActions.GET_SELLER_VERIFICATION_DETAILS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AWSMarketplaceManagementActions.PUT_ADDITIONAL_SELLER_NOTIFICATION_RECIPIENTS,
		AWSMarketplaceManagementActions.PUT_BANK_ACCOUNT_VERIFICATION_DETAILS,
		AWSMarketplaceManagementActions.PUT_SECONDARY_USER_VERIFICATION_DETAILS,
		AWSMarketplaceManagementActions.PUT_SELLER_VERIFICATION_DETAILS,
		AWSMarketplaceManagementActions.UPLOAD_FILES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AWSMarketplaceManagementActions.VIEW_MARKETING,
		AWSMarketplaceManagementActions.VIEW_REPORTS,
		AWSMarketplaceManagementActions.VIEW_SETTINGS,
		AWSMarketplaceManagementActions.VIEW_SUPPORT,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
