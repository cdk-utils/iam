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
	static readonly actionGetAdditionalSellerNotificationRecipients =
		"aws-marketplace-management:GetAdditionalSellerNotificationRecipients";
	/** [Read] aws-marketplace-management:GetBankAccountVerificationDetails */
	static readonly actionGetBankAccountVerificationDetails =
		"aws-marketplace-management:GetBankAccountVerificationDetails";
	/** [Read] aws-marketplace-management:GetSecondaryUserVerificationDetails */
	static readonly actionGetSecondaryUserVerificationDetails =
		"aws-marketplace-management:GetSecondaryUserVerificationDetails";
	/** [Read] aws-marketplace-management:GetSellerVerificationDetails */
	static readonly actionGetSellerVerificationDetails =
		"aws-marketplace-management:GetSellerVerificationDetails";
	/** [Write] aws-marketplace-management:PutAdditionalSellerNotificationRecipients */
	static readonly PutAdditionalSellerNotificationRecipients =
		"aws-marketplace-management:PutAdditionalSellerNotificationRecipients";
	/** [Write] aws-marketplace-management:PutBankAccountVerificationDetails */
	static readonly PutBankAccountVerificationDetails =
		"aws-marketplace-management:PutBankAccountVerificationDetails";
	/** [Write] aws-marketplace-management:PutSecondaryUserVerificationDetails */
	static readonly PutSecondaryUserVerificationDetails =
		"aws-marketplace-management:PutSecondaryUserVerificationDetails";
	/** [Write] aws-marketplace-management:PutSellerVerificationDetails */
	static readonly PutSellerVerificationDetails =
		"aws-marketplace-management:PutSellerVerificationDetails";
	/** [Write] aws-marketplace-management:uploadFiles */
	static readonly uploadFiles = "aws-marketplace-management:uploadFiles";
	/** [List] aws-marketplace-management:viewMarketing */
	static readonly viewMarketing = "aws-marketplace-management:viewMarketing";
	/** [List] aws-marketplace-management:viewReports */
	static readonly viewReports = "aws-marketplace-management:viewReports";
	/** [List] aws-marketplace-management:viewSettings */
	static readonly viewSettings = "aws-marketplace-management:viewSettings";
	/** [List] aws-marketplace-management:viewSupport */
	static readonly viewSupport = "aws-marketplace-management:viewSupport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AWSMarketplaceManagementActions.actionGetAdditionalSellerNotificationRecipients,
		AWSMarketplaceManagementActions.actionGetBankAccountVerificationDetails,
		AWSMarketplaceManagementActions.actionGetSecondaryUserVerificationDetails,
		AWSMarketplaceManagementActions.actionGetSellerVerificationDetails,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AWSMarketplaceManagementActions.PutAdditionalSellerNotificationRecipients,
		AWSMarketplaceManagementActions.PutBankAccountVerificationDetails,
		AWSMarketplaceManagementActions.PutSecondaryUserVerificationDetails,
		AWSMarketplaceManagementActions.PutSellerVerificationDetails,
		AWSMarketplaceManagementActions.uploadFiles,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AWSMarketplaceManagementActions.viewMarketing,
		AWSMarketplaceManagementActions.viewReports,
		AWSMarketplaceManagementActions.viewSettings,
		AWSMarketplaceManagementActions.viewSupport,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
