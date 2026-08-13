// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cognito-idp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cognito-idp service.
 */
export class CognitoIdpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cognito-idp";

	/** [Write] cognito-idp:AddCustomAttributes */
	static readonly ADD_CUSTOM_ATTRIBUTES = "cognito-idp:AddCustomAttributes";
	/** [Write] cognito-idp:AddUserPoolClientSecret */
	static readonly ADD_USER_POOL_CLIENT_SECRET =
		"cognito-idp:AddUserPoolClientSecret";
	/** [Write] cognito-idp:AdminAddUserToGroup */
	static readonly ADMIN_ADD_USER_TO_GROUP = "cognito-idp:AdminAddUserToGroup";
	/** [Write] cognito-idp:AdminConfirmSignUp */
	static readonly ADMIN_CONFIRM_SIGN_UP = "cognito-idp:AdminConfirmSignUp";
	/** [Write] cognito-idp:AdminCreateUser */
	static readonly ADMIN_CREATE_USER = "cognito-idp:AdminCreateUser";
	/** [Write] cognito-idp:AdminDeleteUser */
	static readonly ADMIN_DELETE_USER = "cognito-idp:AdminDeleteUser";
	/** [Write] cognito-idp:AdminDeleteUserAttributes */
	static readonly ADMIN_DELETE_USER_ATTRIBUTES =
		"cognito-idp:AdminDeleteUserAttributes";
	/** [Write] cognito-idp:AdminDisableProviderForUser */
	static readonly ADMIN_DISABLE_PROVIDER_FOR_USER =
		"cognito-idp:AdminDisableProviderForUser";
	/** [Write] cognito-idp:AdminDisableUser */
	static readonly ADMIN_DISABLE_USER = "cognito-idp:AdminDisableUser";
	/** [Write] cognito-idp:AdminEnableUser */
	static readonly ADMIN_ENABLE_USER = "cognito-idp:AdminEnableUser";
	/** [Write] cognito-idp:AdminForgetDevice */
	static readonly ADMIN_FORGET_DEVICE = "cognito-idp:AdminForgetDevice";
	/** [Read] cognito-idp:AdminGetDevice */
	static readonly ADMIN_GET_DEVICE = "cognito-idp:AdminGetDevice";
	/** [Read] cognito-idp:AdminGetUser */
	static readonly ADMIN_GET_USER = "cognito-idp:AdminGetUser";
	/** [Read] cognito-idp:AdminGetUserAuthFactors */
	static readonly ADMIN_GET_USER_AUTH_FACTORS =
		"cognito-idp:AdminGetUserAuthFactors";
	/** [Write] cognito-idp:AdminInitiateAuth */
	static readonly ADMIN_INITIATE_AUTH = "cognito-idp:AdminInitiateAuth";
	/** [Write] cognito-idp:AdminLinkProviderForUser */
	static readonly ADMIN_LINK_PROVIDER_FOR_USER =
		"cognito-idp:AdminLinkProviderForUser";
	/** [List] cognito-idp:AdminListDevices */
	static readonly ADMIN_LIST_DEVICES = "cognito-idp:AdminListDevices";
	/** [List] cognito-idp:AdminListGroupsForUser */
	static readonly ADMIN_LIST_GROUPS_FOR_USER =
		"cognito-idp:AdminListGroupsForUser";
	/** [Read] cognito-idp:AdminListUserAuthEvents */
	static readonly ADMIN_LIST_USER_AUTH_EVENTS =
		"cognito-idp:AdminListUserAuthEvents";
	/** [Write] cognito-idp:AdminRemoveUserFromGroup */
	static readonly ADMIN_REMOVE_USER_FROM_GROUP =
		"cognito-idp:AdminRemoveUserFromGroup";
	/** [Write] cognito-idp:AdminResetUserPassword */
	static readonly ADMIN_RESET_USER_PASSWORD =
		"cognito-idp:AdminResetUserPassword";
	/** [Write] cognito-idp:AdminRespondToAuthChallenge */
	static readonly ADMIN_RESPOND_TO_AUTH_CHALLENGE =
		"cognito-idp:AdminRespondToAuthChallenge";
	/** [Write] cognito-idp:AdminSetUserMFAPreference */
	static readonly ADMIN_SET_USER_MFA_PREFERENCE =
		"cognito-idp:AdminSetUserMFAPreference";
	/** [Write] cognito-idp:AdminSetUserPassword */
	static readonly ADMIN_SET_USER_PASSWORD = "cognito-idp:AdminSetUserPassword";
	/** [Write] cognito-idp:AdminSetUserSettings */
	static readonly ADMIN_SET_USER_SETTINGS = "cognito-idp:AdminSetUserSettings";
	/** [Write] cognito-idp:AdminUpdateAuthEventFeedback */
	static readonly ADMIN_UPDATE_AUTH_EVENT_FEEDBACK =
		"cognito-idp:AdminUpdateAuthEventFeedback";
	/** [Write] cognito-idp:AdminUpdateDeviceStatus */
	static readonly ADMIN_UPDATE_DEVICE_STATUS =
		"cognito-idp:AdminUpdateDeviceStatus";
	/** [Write] cognito-idp:AdminUpdateUserAttributes */
	static readonly ADMIN_UPDATE_USER_ATTRIBUTES =
		"cognito-idp:AdminUpdateUserAttributes";
	/** [Write] cognito-idp:AdminUserGlobalSignOut */
	static readonly ADMIN_USER_GLOBAL_SIGN_OUT =
		"cognito-idp:AdminUserGlobalSignOut";
	/** [Write] cognito-idp:AssociateSoftwareToken */
	static readonly ASSOCIATE_SOFTWARE_TOKEN =
		"cognito-idp:AssociateSoftwareToken";
	/** [Write] cognito-idp:AssociateWebACL */
	static readonly ASSOCIATE_WEB_ACL = "cognito-idp:AssociateWebACL";
	/** [Write] cognito-idp:ChangePassword */
	static readonly CHANGE_PASSWORD = "cognito-idp:ChangePassword";
	/** [Write] cognito-idp:ConfirmDevice */
	static readonly CONFIRM_DEVICE = "cognito-idp:ConfirmDevice";
	/** [Write] cognito-idp:ConfirmForgotPassword */
	static readonly CONFIRM_FORGOT_PASSWORD = "cognito-idp:ConfirmForgotPassword";
	/** [Write] cognito-idp:ConfirmSignUp */
	static readonly CONFIRM_SIGN_UP = "cognito-idp:ConfirmSignUp";
	/** [Write] cognito-idp:CreateGroup */
	static readonly CREATE_GROUP = "cognito-idp:CreateGroup";
	/** [Write] cognito-idp:CreateIdentityProvider */
	static readonly CREATE_IDENTITY_PROVIDER =
		"cognito-idp:CreateIdentityProvider";
	/** [Write] cognito-idp:CreateManagedLoginBranding */
	static readonly CREATE_MANAGED_LOGIN_BRANDING =
		"cognito-idp:CreateManagedLoginBranding";
	/** [Write] cognito-idp:CreateResourceServer */
	static readonly CREATE_RESOURCE_SERVER = "cognito-idp:CreateResourceServer";
	/** [Write] cognito-idp:CreateTerms */
	static readonly CREATE_TERMS = "cognito-idp:CreateTerms";
	/** [Write] cognito-idp:CreateUserImportJob */
	static readonly CREATE_USER_IMPORT_JOB = "cognito-idp:CreateUserImportJob";
	/** [Write] cognito-idp:CreateUserPool */
	static readonly CREATE_USER_POOL = "cognito-idp:CreateUserPool";
	/** [Write] cognito-idp:CreateUserPoolClient */
	static readonly CREATE_USER_POOL_CLIENT = "cognito-idp:CreateUserPoolClient";
	/** [Write] cognito-idp:CreateUserPoolDomain */
	static readonly CREATE_USER_POOL_DOMAIN = "cognito-idp:CreateUserPoolDomain";
	/** [Write] cognito-idp:CreateUserPoolReplica */
	static readonly CREATE_USER_POOL_REPLICA =
		"cognito-idp:CreateUserPoolReplica";
	/** [Write] cognito-idp:DeleteGroup */
	static readonly DELETE_GROUP = "cognito-idp:DeleteGroup";
	/** [Write] cognito-idp:DeleteIdentityProvider */
	static readonly DELETE_IDENTITY_PROVIDER =
		"cognito-idp:DeleteIdentityProvider";
	/** [Write] cognito-idp:DeleteManagedLoginBranding */
	static readonly DELETE_MANAGED_LOGIN_BRANDING =
		"cognito-idp:DeleteManagedLoginBranding";
	/** [Write] cognito-idp:DeleteResourceServer */
	static readonly DELETE_RESOURCE_SERVER = "cognito-idp:DeleteResourceServer";
	/** [Write] cognito-idp:DeleteTerms */
	static readonly DELETE_TERMS = "cognito-idp:DeleteTerms";
	/** [Write] cognito-idp:DeleteUser */
	static readonly DELETE_USER = "cognito-idp:DeleteUser";
	/** [Write] cognito-idp:DeleteUserAttributes */
	static readonly DELETE_USER_ATTRIBUTES = "cognito-idp:DeleteUserAttributes";
	/** [Write] cognito-idp:DeleteUserPool */
	static readonly DELETE_USER_POOL = "cognito-idp:DeleteUserPool";
	/** [Write] cognito-idp:DeleteUserPoolClient */
	static readonly DELETE_USER_POOL_CLIENT = "cognito-idp:DeleteUserPoolClient";
	/** [Write] cognito-idp:DeleteUserPoolClientSecret */
	static readonly DELETE_USER_POOL_CLIENT_SECRET =
		"cognito-idp:DeleteUserPoolClientSecret";
	/** [Write] cognito-idp:DeleteUserPoolDomain */
	static readonly DELETE_USER_POOL_DOMAIN = "cognito-idp:DeleteUserPoolDomain";
	/** [Write] cognito-idp:DeleteUserPoolReplica */
	static readonly DELETE_USER_POOL_REPLICA =
		"cognito-idp:DeleteUserPoolReplica";
	/** [Read] cognito-idp:DescribeIdentityProvider */
	static readonly DESCRIBE_IDENTITY_PROVIDER =
		"cognito-idp:DescribeIdentityProvider";
	/** [Read] cognito-idp:DescribeManagedLoginBranding */
	static readonly DESCRIBE_MANAGED_LOGIN_BRANDING =
		"cognito-idp:DescribeManagedLoginBranding";
	/** [Read] cognito-idp:DescribeManagedLoginBrandingByClient */
	static readonly DESCRIBE_MANAGED_LOGIN_BRANDING_BY_CLIENT =
		"cognito-idp:DescribeManagedLoginBrandingByClient";
	/** [Read] cognito-idp:DescribeResourceServer */
	static readonly DESCRIBE_RESOURCE_SERVER =
		"cognito-idp:DescribeResourceServer";
	/** [Read] cognito-idp:DescribeRiskConfiguration */
	static readonly DESCRIBE_RISK_CONFIGURATION =
		"cognito-idp:DescribeRiskConfiguration";
	/** [Read] cognito-idp:DescribeTerms */
	static readonly DESCRIBE_TERMS = "cognito-idp:DescribeTerms";
	/** [Read] cognito-idp:DescribeUserImportJob */
	static readonly DESCRIBE_USER_IMPORT_JOB =
		"cognito-idp:DescribeUserImportJob";
	/** [Read] cognito-idp:DescribeUserPool */
	static readonly DESCRIBE_USER_POOL = "cognito-idp:DescribeUserPool";
	/** [Read] cognito-idp:DescribeUserPoolClient */
	static readonly DESCRIBE_USER_POOL_CLIENT =
		"cognito-idp:DescribeUserPoolClient";
	/** [Read] cognito-idp:DescribeUserPoolDomain */
	static readonly DESCRIBE_USER_POOL_DOMAIN =
		"cognito-idp:DescribeUserPoolDomain";
	/** [Write] cognito-idp:DisassociateWebACL */
	static readonly DISASSOCIATE_WEB_ACL = "cognito-idp:DisassociateWebACL";
	/** [Write] cognito-idp:ForgetDevice */
	static readonly FORGET_DEVICE = "cognito-idp:ForgetDevice";
	/** [Write] cognito-idp:ForgotPassword */
	static readonly FORGOT_PASSWORD = "cognito-idp:ForgotPassword";
	/** [Read] cognito-idp:GetCSVHeader */
	static readonly GET_CSV_HEADER = "cognito-idp:GetCSVHeader";
	/** [Read] cognito-idp:GetDevice */
	static readonly GET_DEVICE = "cognito-idp:GetDevice";
	/** [Read] cognito-idp:GetGroup */
	static readonly GET_GROUP = "cognito-idp:GetGroup";
	/** [Read] cognito-idp:GetIdentityProviderByIdentifier */
	static readonly GET_IDENTITY_PROVIDER_BY_IDENTIFIER =
		"cognito-idp:GetIdentityProviderByIdentifier";
	/** [Read] cognito-idp:GetLogDeliveryConfiguration */
	static readonly GET_LOG_DELIVERY_CONFIGURATION =
		"cognito-idp:GetLogDeliveryConfiguration";
	/** [Read] cognito-idp:GetProvisionedLimit */
	static readonly GET_PROVISIONED_LIMIT = "cognito-idp:GetProvisionedLimit";
	/** [Read] cognito-idp:GetSigningCertificate */
	static readonly GET_SIGNING_CERTIFICATE = "cognito-idp:GetSigningCertificate";
	/** [Write] cognito-idp:GetTokensFromRefreshToken */
	static readonly GET_TOKENS_FROM_REFRESH_TOKEN =
		"cognito-idp:GetTokensFromRefreshToken";
	/** [Read] cognito-idp:GetUICustomization */
	static readonly GET_UI_CUSTOMIZATION = "cognito-idp:GetUICustomization";
	/** [Read] cognito-idp:GetUser */
	static readonly GET_USER = "cognito-idp:GetUser";
	/** [Read] cognito-idp:GetUserAttributeVerificationCode */
	static readonly GET_USER_ATTRIBUTE_VERIFICATION_CODE =
		"cognito-idp:GetUserAttributeVerificationCode";
	/** [Read] cognito-idp:GetUserPoolMfaConfig */
	static readonly GET_USER_POOL_MFA_CONFIG = "cognito-idp:GetUserPoolMfaConfig";
	/** [Read] cognito-idp:GetWebACLForResource */
	static readonly GET_WEB_ACL_FOR_RESOURCE = "cognito-idp:GetWebACLForResource";
	/** [Write] cognito-idp:GlobalSignOut */
	static readonly GLOBAL_SIGN_OUT = "cognito-idp:GlobalSignOut";
	/** [Write] cognito-idp:InitiateAuth */
	static readonly INITIATE_AUTH = "cognito-idp:InitiateAuth";
	/** [List] cognito-idp:ListDevices */
	static readonly LIST_DEVICES = "cognito-idp:ListDevices";
	/** [List] cognito-idp:ListGroups */
	static readonly LIST_GROUPS = "cognito-idp:ListGroups";
	/** [List] cognito-idp:ListIdentityProviders */
	static readonly LIST_IDENTITY_PROVIDERS = "cognito-idp:ListIdentityProviders";
	/** [List] cognito-idp:ListResourceServers */
	static readonly LIST_RESOURCE_SERVERS = "cognito-idp:ListResourceServers";
	/** [List] cognito-idp:ListResourcesForWebACL */
	static readonly LIST_RESOURCES_FOR_WEB_ACL =
		"cognito-idp:ListResourcesForWebACL";
	/** [List] cognito-idp:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "cognito-idp:ListTagsForResource";
	/** [List] cognito-idp:ListTerms */
	static readonly LIST_TERMS = "cognito-idp:ListTerms";
	/** [List] cognito-idp:ListUserImportJobs */
	static readonly LIST_USER_IMPORT_JOBS = "cognito-idp:ListUserImportJobs";
	/** [List] cognito-idp:ListUserPoolClientSecrets */
	static readonly LIST_USER_POOL_CLIENT_SECRETS =
		"cognito-idp:ListUserPoolClientSecrets";
	/** [List] cognito-idp:ListUserPoolClients */
	static readonly LIST_USER_POOL_CLIENTS = "cognito-idp:ListUserPoolClients";
	/** [List] cognito-idp:ListUserPoolReplicas */
	static readonly LIST_USER_POOL_REPLICAS = "cognito-idp:ListUserPoolReplicas";
	/** [List] cognito-idp:ListUserPools */
	static readonly LIST_USER_POOLS = "cognito-idp:ListUserPools";
	/** [List] cognito-idp:ListUsers */
	static readonly LIST_USERS = "cognito-idp:ListUsers";
	/** [List] cognito-idp:ListUsersInGroup */
	static readonly LIST_USERS_IN_GROUP = "cognito-idp:ListUsersInGroup";
	/** [Write] cognito-idp:ResendConfirmationCode */
	static readonly RESEND_CONFIRMATION_CODE =
		"cognito-idp:ResendConfirmationCode";
	/** [Write] cognito-idp:RespondToAuthChallenge */
	static readonly RESPOND_TO_AUTH_CHALLENGE =
		"cognito-idp:RespondToAuthChallenge";
	/** [Write] cognito-idp:RevokeToken */
	static readonly REVOKE_TOKEN = "cognito-idp:RevokeToken";
	/** [Write] cognito-idp:SetLogDeliveryConfiguration */
	static readonly SET_LOG_DELIVERY_CONFIGURATION =
		"cognito-idp:SetLogDeliveryConfiguration";
	/** [Write] cognito-idp:SetRiskConfiguration */
	static readonly SET_RISK_CONFIGURATION = "cognito-idp:SetRiskConfiguration";
	/** [Write] cognito-idp:SetUICustomization */
	static readonly SET_UI_CUSTOMIZATION = "cognito-idp:SetUICustomization";
	/** [Write] cognito-idp:SetUserMFAPreference */
	static readonly SET_USER_MFA_PREFERENCE = "cognito-idp:SetUserMFAPreference";
	/** [Write] cognito-idp:SetUserPoolMfaConfig */
	static readonly SET_USER_POOL_MFA_CONFIG = "cognito-idp:SetUserPoolMfaConfig";
	/** [Write] cognito-idp:SetUserSettings */
	static readonly SET_USER_SETTINGS = "cognito-idp:SetUserSettings";
	/** [Write] cognito-idp:SignUp */
	static readonly SIGN_UP = "cognito-idp:SignUp";
	/** [Write] cognito-idp:StartUserImportJob */
	static readonly START_USER_IMPORT_JOB = "cognito-idp:StartUserImportJob";
	/** [Write] cognito-idp:StopUserImportJob */
	static readonly STOP_USER_IMPORT_JOB = "cognito-idp:StopUserImportJob";
	/** [Tagging] cognito-idp:TagResource */
	static readonly TAG_RESOURCE = "cognito-idp:TagResource";
	/** [Tagging] cognito-idp:UntagResource */
	static readonly UNTAG_RESOURCE = "cognito-idp:UntagResource";
	/** [Write] cognito-idp:UpdateAuthEventFeedback */
	static readonly UPDATE_AUTH_EVENT_FEEDBACK =
		"cognito-idp:UpdateAuthEventFeedback";
	/** [Write] cognito-idp:UpdateDeviceStatus */
	static readonly UPDATE_DEVICE_STATUS = "cognito-idp:UpdateDeviceStatus";
	/** [Write] cognito-idp:UpdateGroup */
	static readonly UPDATE_GROUP = "cognito-idp:UpdateGroup";
	/** [Write] cognito-idp:UpdateIdentityProvider */
	static readonly UPDATE_IDENTITY_PROVIDER =
		"cognito-idp:UpdateIdentityProvider";
	/** [Write] cognito-idp:UpdateManagedLoginBranding */
	static readonly UPDATE_MANAGED_LOGIN_BRANDING =
		"cognito-idp:UpdateManagedLoginBranding";
	/** [Write] cognito-idp:UpdateProvisionedLimit */
	static readonly UPDATE_PROVISIONED_LIMIT =
		"cognito-idp:UpdateProvisionedLimit";
	/** [Write] cognito-idp:UpdateResourceServer */
	static readonly UPDATE_RESOURCE_SERVER = "cognito-idp:UpdateResourceServer";
	/** [Write] cognito-idp:UpdateTerms */
	static readonly UPDATE_TERMS = "cognito-idp:UpdateTerms";
	/** [Write] cognito-idp:UpdateUserAttributes */
	static readonly UPDATE_USER_ATTRIBUTES = "cognito-idp:UpdateUserAttributes";
	/** [Write] cognito-idp:UpdateUserPool */
	static readonly UPDATE_USER_POOL = "cognito-idp:UpdateUserPool";
	/** [Write] cognito-idp:UpdateUserPoolClient */
	static readonly UPDATE_USER_POOL_CLIENT = "cognito-idp:UpdateUserPoolClient";
	/** [Write] cognito-idp:UpdateUserPoolDomain */
	static readonly UPDATE_USER_POOL_DOMAIN = "cognito-idp:UpdateUserPoolDomain";
	/** [Write] cognito-idp:UpdateUserPoolReplica */
	static readonly UPDATE_USER_POOL_REPLICA =
		"cognito-idp:UpdateUserPoolReplica";
	/** [Write] cognito-idp:VerifySoftwareToken */
	static readonly VERIFY_SOFTWARE_TOKEN = "cognito-idp:VerifySoftwareToken";
	/** [Write] cognito-idp:VerifyUserAttribute */
	static readonly VERIFY_USER_ATTRIBUTE = "cognito-idp:VerifyUserAttribute";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CognitoIdpActions.ADMIN_GET_DEVICE,
		CognitoIdpActions.ADMIN_GET_USER,
		CognitoIdpActions.ADMIN_GET_USER_AUTH_FACTORS,
		CognitoIdpActions.ADMIN_LIST_USER_AUTH_EVENTS,
		CognitoIdpActions.DESCRIBE_IDENTITY_PROVIDER,
		CognitoIdpActions.DESCRIBE_MANAGED_LOGIN_BRANDING,
		CognitoIdpActions.DESCRIBE_MANAGED_LOGIN_BRANDING_BY_CLIENT,
		CognitoIdpActions.DESCRIBE_RESOURCE_SERVER,
		CognitoIdpActions.DESCRIBE_RISK_CONFIGURATION,
		CognitoIdpActions.DESCRIBE_TERMS,
		CognitoIdpActions.DESCRIBE_USER_IMPORT_JOB,
		CognitoIdpActions.DESCRIBE_USER_POOL,
		CognitoIdpActions.DESCRIBE_USER_POOL_CLIENT,
		CognitoIdpActions.DESCRIBE_USER_POOL_DOMAIN,
		CognitoIdpActions.GET_CSV_HEADER,
		CognitoIdpActions.GET_DEVICE,
		CognitoIdpActions.GET_GROUP,
		CognitoIdpActions.GET_IDENTITY_PROVIDER_BY_IDENTIFIER,
		CognitoIdpActions.GET_LOG_DELIVERY_CONFIGURATION,
		CognitoIdpActions.GET_PROVISIONED_LIMIT,
		CognitoIdpActions.GET_SIGNING_CERTIFICATE,
		CognitoIdpActions.GET_UI_CUSTOMIZATION,
		CognitoIdpActions.GET_USER,
		CognitoIdpActions.GET_USER_ATTRIBUTE_VERIFICATION_CODE,
		CognitoIdpActions.GET_USER_POOL_MFA_CONFIG,
		CognitoIdpActions.GET_WEB_ACL_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CognitoIdpActions.ADD_CUSTOM_ATTRIBUTES,
		CognitoIdpActions.ADD_USER_POOL_CLIENT_SECRET,
		CognitoIdpActions.ADMIN_ADD_USER_TO_GROUP,
		CognitoIdpActions.ADMIN_CONFIRM_SIGN_UP,
		CognitoIdpActions.ADMIN_CREATE_USER,
		CognitoIdpActions.ADMIN_DELETE_USER,
		CognitoIdpActions.ADMIN_DELETE_USER_ATTRIBUTES,
		CognitoIdpActions.ADMIN_DISABLE_PROVIDER_FOR_USER,
		CognitoIdpActions.ADMIN_DISABLE_USER,
		CognitoIdpActions.ADMIN_ENABLE_USER,
		CognitoIdpActions.ADMIN_FORGET_DEVICE,
		CognitoIdpActions.ADMIN_INITIATE_AUTH,
		CognitoIdpActions.ADMIN_LINK_PROVIDER_FOR_USER,
		CognitoIdpActions.ADMIN_REMOVE_USER_FROM_GROUP,
		CognitoIdpActions.ADMIN_RESET_USER_PASSWORD,
		CognitoIdpActions.ADMIN_RESPOND_TO_AUTH_CHALLENGE,
		CognitoIdpActions.ADMIN_SET_USER_MFA_PREFERENCE,
		CognitoIdpActions.ADMIN_SET_USER_PASSWORD,
		CognitoIdpActions.ADMIN_SET_USER_SETTINGS,
		CognitoIdpActions.ADMIN_UPDATE_AUTH_EVENT_FEEDBACK,
		CognitoIdpActions.ADMIN_UPDATE_DEVICE_STATUS,
		CognitoIdpActions.ADMIN_UPDATE_USER_ATTRIBUTES,
		CognitoIdpActions.ADMIN_USER_GLOBAL_SIGN_OUT,
		CognitoIdpActions.ASSOCIATE_SOFTWARE_TOKEN,
		CognitoIdpActions.ASSOCIATE_WEB_ACL,
		CognitoIdpActions.CHANGE_PASSWORD,
		CognitoIdpActions.CONFIRM_DEVICE,
		CognitoIdpActions.CONFIRM_FORGOT_PASSWORD,
		CognitoIdpActions.CONFIRM_SIGN_UP,
		CognitoIdpActions.CREATE_GROUP,
		CognitoIdpActions.CREATE_IDENTITY_PROVIDER,
		CognitoIdpActions.CREATE_MANAGED_LOGIN_BRANDING,
		CognitoIdpActions.CREATE_RESOURCE_SERVER,
		CognitoIdpActions.CREATE_TERMS,
		CognitoIdpActions.CREATE_USER_IMPORT_JOB,
		CognitoIdpActions.CREATE_USER_POOL,
		CognitoIdpActions.CREATE_USER_POOL_CLIENT,
		CognitoIdpActions.CREATE_USER_POOL_DOMAIN,
		CognitoIdpActions.CREATE_USER_POOL_REPLICA,
		CognitoIdpActions.DELETE_GROUP,
		CognitoIdpActions.DELETE_IDENTITY_PROVIDER,
		CognitoIdpActions.DELETE_MANAGED_LOGIN_BRANDING,
		CognitoIdpActions.DELETE_RESOURCE_SERVER,
		CognitoIdpActions.DELETE_TERMS,
		CognitoIdpActions.DELETE_USER,
		CognitoIdpActions.DELETE_USER_ATTRIBUTES,
		CognitoIdpActions.DELETE_USER_POOL,
		CognitoIdpActions.DELETE_USER_POOL_CLIENT,
		CognitoIdpActions.DELETE_USER_POOL_CLIENT_SECRET,
		CognitoIdpActions.DELETE_USER_POOL_DOMAIN,
		CognitoIdpActions.DELETE_USER_POOL_REPLICA,
		CognitoIdpActions.DISASSOCIATE_WEB_ACL,
		CognitoIdpActions.FORGET_DEVICE,
		CognitoIdpActions.FORGOT_PASSWORD,
		CognitoIdpActions.GET_TOKENS_FROM_REFRESH_TOKEN,
		CognitoIdpActions.GLOBAL_SIGN_OUT,
		CognitoIdpActions.INITIATE_AUTH,
		CognitoIdpActions.RESEND_CONFIRMATION_CODE,
		CognitoIdpActions.RESPOND_TO_AUTH_CHALLENGE,
		CognitoIdpActions.REVOKE_TOKEN,
		CognitoIdpActions.SET_LOG_DELIVERY_CONFIGURATION,
		CognitoIdpActions.SET_RISK_CONFIGURATION,
		CognitoIdpActions.SET_UI_CUSTOMIZATION,
		CognitoIdpActions.SET_USER_MFA_PREFERENCE,
		CognitoIdpActions.SET_USER_POOL_MFA_CONFIG,
		CognitoIdpActions.SET_USER_SETTINGS,
		CognitoIdpActions.SIGN_UP,
		CognitoIdpActions.START_USER_IMPORT_JOB,
		CognitoIdpActions.STOP_USER_IMPORT_JOB,
		CognitoIdpActions.UPDATE_AUTH_EVENT_FEEDBACK,
		CognitoIdpActions.UPDATE_DEVICE_STATUS,
		CognitoIdpActions.UPDATE_GROUP,
		CognitoIdpActions.UPDATE_IDENTITY_PROVIDER,
		CognitoIdpActions.UPDATE_MANAGED_LOGIN_BRANDING,
		CognitoIdpActions.UPDATE_PROVISIONED_LIMIT,
		CognitoIdpActions.UPDATE_RESOURCE_SERVER,
		CognitoIdpActions.UPDATE_TERMS,
		CognitoIdpActions.UPDATE_USER_ATTRIBUTES,
		CognitoIdpActions.UPDATE_USER_POOL,
		CognitoIdpActions.UPDATE_USER_POOL_CLIENT,
		CognitoIdpActions.UPDATE_USER_POOL_DOMAIN,
		CognitoIdpActions.UPDATE_USER_POOL_REPLICA,
		CognitoIdpActions.VERIFY_SOFTWARE_TOKEN,
		CognitoIdpActions.VERIFY_USER_ATTRIBUTE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CognitoIdpActions.ADMIN_LIST_DEVICES,
		CognitoIdpActions.ADMIN_LIST_GROUPS_FOR_USER,
		CognitoIdpActions.LIST_DEVICES,
		CognitoIdpActions.LIST_GROUPS,
		CognitoIdpActions.LIST_IDENTITY_PROVIDERS,
		CognitoIdpActions.LIST_RESOURCE_SERVERS,
		CognitoIdpActions.LIST_RESOURCES_FOR_WEB_ACL,
		CognitoIdpActions.LIST_TAGS_FOR_RESOURCE,
		CognitoIdpActions.LIST_TERMS,
		CognitoIdpActions.LIST_USER_IMPORT_JOBS,
		CognitoIdpActions.LIST_USER_POOL_CLIENT_SECRETS,
		CognitoIdpActions.LIST_USER_POOL_CLIENTS,
		CognitoIdpActions.LIST_USER_POOL_REPLICAS,
		CognitoIdpActions.LIST_USER_POOLS,
		CognitoIdpActions.LIST_USERS,
		CognitoIdpActions.LIST_USERS_IN_GROUP,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CognitoIdpActions.TAG_RESOURCE,
		CognitoIdpActions.UNTAG_RESOURCE,
	];
}

const UserpoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cognito-idp:(?<region>[^:]*):(?<account>[^:]*):userpool/(?<userPoolId>[^:/?]+)$",
);
const WebaclArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/webacl/(?<name>[^:/?]+)/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cognito-idp resources.
 */
export class CognitoIdpResources {
	/**
	 * Builds an ARN for the userpool resource.
	 */
	static userpool(props: {
		/** The UserPoolId component of the ARN. */
		readonly userPoolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cognito-idp:${props.region ?? "*"}:${props.account ?? "*"}:userpool/${props.userPoolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the userpool resource.
	 */
	static isValidUserpoolArn(arn: string): boolean {
		return UserpoolArnRegex.test(arn);
	}

	/**
	 * Parses a userpool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserpoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userPoolId: string;
	} {
		const match = UserpoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid userpool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userPoolId: match.groups!.userPoolId,
		};
	}

	/**
	 * Builds an ARN for the webacl resource.
	 */
	static webacl(props: {
		/** The Scope component of the ARN. */
		readonly scope: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/webacl/${props.name}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webacl resource.
	 */
	static isValidWebaclArn(arn: string): boolean {
		return WebaclArnRegex.test(arn);
	}

	/**
	 * Parses a webacl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebaclArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scope: string;
		name: string;
		id: string;
	} {
		const match = WebaclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webacl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cognito-idp.
 */
export class CognitoIdpOperations {
	/** IAM actions required for the AddCustomAttributes API call. */
	static readonly ADD_CUSTOM_ATTRIBUTES: string[] = [
		"cognito-idp:AddCustomAttributes",
	];
	/** IAM actions required for the AddUserPoolClientSecret API call. */
	static readonly ADD_USER_POOL_CLIENT_SECRET: string[] = [
		"cognito-idp:AddUserPoolClientSecret",
	];
	/** IAM actions required for the AdminAddUserToGroup API call. */
	static readonly ADMIN_ADD_USER_TO_GROUP: string[] = [
		"cognito-idp:AdminAddUserToGroup",
	];
	/** IAM actions required for the AdminConfirmSignUp API call. */
	static readonly ADMIN_CONFIRM_SIGN_UP: string[] = [
		"cognito-idp:AdminConfirmSignUp",
	];
	/** IAM actions required for the AdminCreateUser API call. */
	static readonly ADMIN_CREATE_USER: string[] = ["cognito-idp:AdminCreateUser"];
	/** IAM actions required for the AdminDeleteUser API call. */
	static readonly ADMIN_DELETE_USER: string[] = ["cognito-idp:AdminDeleteUser"];
	/** IAM actions required for the AdminDeleteUserAttributes API call. */
	static readonly ADMIN_DELETE_USER_ATTRIBUTES: string[] = [
		"cognito-idp:AdminDeleteUserAttributes",
	];
	/** IAM actions required for the AdminDisableProviderForUser API call. */
	static readonly ADMIN_DISABLE_PROVIDER_FOR_USER: string[] = [
		"cognito-idp:AdminDisableProviderForUser",
	];
	/** IAM actions required for the AdminDisableUser API call. */
	static readonly ADMIN_DISABLE_USER: string[] = [
		"cognito-idp:AdminDisableUser",
	];
	/** IAM actions required for the AdminEnableUser API call. */
	static readonly ADMIN_ENABLE_USER: string[] = ["cognito-idp:AdminEnableUser"];
	/** IAM actions required for the AdminForgetDevice API call. */
	static readonly ADMIN_FORGET_DEVICE: string[] = [
		"cognito-idp:AdminForgetDevice",
	];
	/** IAM actions required for the AdminGetDevice API call. */
	static readonly ADMIN_GET_DEVICE: string[] = ["cognito-idp:AdminGetDevice"];
	/** IAM actions required for the AdminGetUser API call. */
	static readonly ADMIN_GET_USER: string[] = ["cognito-idp:AdminGetUser"];
	/** IAM actions required for the AdminGetUserAuthFactors API call. */
	static readonly ADMIN_GET_USER_AUTH_FACTORS: string[] = [
		"cognito-idp:AdminGetUserAuthFactors",
	];
	/** IAM actions required for the AdminInitiateAuth API call. */
	static readonly ADMIN_INITIATE_AUTH: string[] = [
		"cognito-idp:AdminInitiateAuth",
	];
	/** IAM actions required for the AdminLinkProviderForUser API call. */
	static readonly ADMIN_LINK_PROVIDER_FOR_USER: string[] = [
		"cognito-idp:AdminLinkProviderForUser",
	];
	/** IAM actions required for the AdminListDevices API call. */
	static readonly ADMIN_LIST_DEVICES: string[] = [
		"cognito-idp:AdminListDevices",
	];
	/** IAM actions required for the AdminListGroupsForUser API call. */
	static readonly ADMIN_LIST_GROUPS_FOR_USER: string[] = [
		"cognito-idp:AdminListGroupsForUser",
	];
	/** IAM actions required for the AdminListUserAuthEvents API call. */
	static readonly ADMIN_LIST_USER_AUTH_EVENTS: string[] = [
		"cognito-idp:AdminListUserAuthEvents",
	];
	/** IAM actions required for the AdminRemoveUserFromGroup API call. */
	static readonly ADMIN_REMOVE_USER_FROM_GROUP: string[] = [
		"cognito-idp:AdminRemoveUserFromGroup",
	];
	/** IAM actions required for the AdminResetUserPassword API call. */
	static readonly ADMIN_RESET_USER_PASSWORD: string[] = [
		"cognito-idp:AdminResetUserPassword",
	];
	/** IAM actions required for the AdminRespondToAuthChallenge API call. */
	static readonly ADMIN_RESPOND_TO_AUTH_CHALLENGE: string[] = [
		"cognito-idp:AdminRespondToAuthChallenge",
	];
	/** IAM actions required for the AdminSetUserMFAPreference API call. */
	static readonly ADMIN_SET_USER_MFA_PREFERENCE: string[] = [
		"cognito-idp:AdminSetUserMFAPreference",
	];
	/** IAM actions required for the AdminSetUserPassword API call. */
	static readonly ADMIN_SET_USER_PASSWORD: string[] = [
		"cognito-idp:AdminSetUserPassword",
	];
	/** IAM actions required for the AdminSetUserSettings API call. */
	static readonly ADMIN_SET_USER_SETTINGS: string[] = [
		"cognito-idp:AdminSetUserSettings",
	];
	/** IAM actions required for the AdminUpdateAuthEventFeedback API call. */
	static readonly ADMIN_UPDATE_AUTH_EVENT_FEEDBACK: string[] = [
		"cognito-idp:AdminUpdateAuthEventFeedback",
	];
	/** IAM actions required for the AdminUpdateDeviceStatus API call. */
	static readonly ADMIN_UPDATE_DEVICE_STATUS: string[] = [
		"cognito-idp:AdminUpdateDeviceStatus",
	];
	/** IAM actions required for the AdminUpdateUserAttributes API call. */
	static readonly ADMIN_UPDATE_USER_ATTRIBUTES: string[] = [
		"cognito-idp:AdminUpdateUserAttributes",
	];
	/** IAM actions required for the AdminUserGlobalSignOut API call. */
	static readonly ADMIN_USER_GLOBAL_SIGN_OUT: string[] = [
		"cognito-idp:AdminUserGlobalSignOut",
	];
	/** IAM actions required for the AssociateSoftwareToken API call. */
	static readonly ASSOCIATE_SOFTWARE_TOKEN: string[] = [
		"cognito-idp:AssociateSoftwareToken",
	];
	/** IAM actions required for the ChangePassword API call. */
	static readonly CHANGE_PASSWORD: string[] = ["cognito-idp:ChangePassword"];
	/** IAM actions required for the CompleteWebAuthnRegistration API call. */
	static readonly COMPLETE_WEB_AUTHN_REGISTRATION: string[] = [];
	/** IAM actions required for the ConfirmDevice API call. */
	static readonly CONFIRM_DEVICE: string[] = ["cognito-idp:ConfirmDevice"];
	/** IAM actions required for the ConfirmForgotPassword API call. */
	static readonly CONFIRM_FORGOT_PASSWORD: string[] = [
		"cognito-idp:ConfirmForgotPassword",
	];
	/** IAM actions required for the ConfirmSignUp API call. */
	static readonly CONFIRM_SIGN_UP: string[] = ["cognito-idp:ConfirmSignUp"];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"cognito-idp:CreateGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateIdentityProvider API call. */
	static readonly CREATE_IDENTITY_PROVIDER: string[] = [
		"cognito-idp:CreateIdentityProvider",
	];
	/** IAM actions required for the CreateManagedLoginBranding API call. */
	static readonly CREATE_MANAGED_LOGIN_BRANDING: string[] = [
		"cognito-idp:CreateManagedLoginBranding",
	];
	/** IAM actions required for the CreateResourceServer API call. */
	static readonly CREATE_RESOURCE_SERVER: string[] = [
		"cognito-idp:CreateResourceServer",
	];
	/** IAM actions required for the CreateTerms API call. */
	static readonly CREATE_TERMS: string[] = ["cognito-idp:CreateTerms"];
	/** IAM actions required for the CreateUserImportJob API call. */
	static readonly CREATE_USER_IMPORT_JOB: string[] = [
		"cognito-idp:CreateUserImportJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateUserPool API call. */
	static readonly CREATE_USER_POOL: string[] = [
		"cognito-idp:CreateUserPool",
		"iam:PassRole",
		"cognito-idp:TagResource",
	];
	/** IAM actions required for the CreateUserPoolClient API call. */
	static readonly CREATE_USER_POOL_CLIENT: string[] = [
		"cognito-idp:CreateUserPoolClient",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateUserPoolDomain API call. */
	static readonly CREATE_USER_POOL_DOMAIN: string[] = [
		"cognito-idp:CreateUserPoolDomain",
	];
	/** IAM actions required for the CreateUserPoolReplica API call. */
	static readonly CREATE_USER_POOL_REPLICA: string[] = [
		"cognito-idp:CreateUserPoolReplica",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["cognito-idp:DeleteGroup"];
	/** IAM actions required for the DeleteIdentityProvider API call. */
	static readonly DELETE_IDENTITY_PROVIDER: string[] = [
		"cognito-idp:DeleteIdentityProvider",
	];
	/** IAM actions required for the DeleteManagedLoginBranding API call. */
	static readonly DELETE_MANAGED_LOGIN_BRANDING: string[] = [
		"cognito-idp:DeleteManagedLoginBranding",
	];
	/** IAM actions required for the DeleteResourceServer API call. */
	static readonly DELETE_RESOURCE_SERVER: string[] = [
		"cognito-idp:DeleteResourceServer",
	];
	/** IAM actions required for the DeleteTerms API call. */
	static readonly DELETE_TERMS: string[] = ["cognito-idp:DeleteTerms"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["cognito-idp:DeleteUser"];
	/** IAM actions required for the DeleteUserAttributes API call. */
	static readonly DELETE_USER_ATTRIBUTES: string[] = [
		"cognito-idp:DeleteUserAttributes",
	];
	/** IAM actions required for the DeleteUserPool API call. */
	static readonly DELETE_USER_POOL: string[] = ["cognito-idp:DeleteUserPool"];
	/** IAM actions required for the DeleteUserPoolClient API call. */
	static readonly DELETE_USER_POOL_CLIENT: string[] = [
		"cognito-idp:DeleteUserPoolClient",
	];
	/** IAM actions required for the DeleteUserPoolClientSecret API call. */
	static readonly DELETE_USER_POOL_CLIENT_SECRET: string[] = [
		"cognito-idp:DeleteUserPoolClientSecret",
	];
	/** IAM actions required for the DeleteUserPoolDomain API call. */
	static readonly DELETE_USER_POOL_DOMAIN: string[] = [
		"cognito-idp:DeleteUserPoolDomain",
	];
	/** IAM actions required for the DeleteUserPoolReplica API call. */
	static readonly DELETE_USER_POOL_REPLICA: string[] = [
		"cognito-idp:DeleteUserPoolReplica",
	];
	/** IAM actions required for the DeleteWebAuthnCredential API call. */
	static readonly DELETE_WEB_AUTHN_CREDENTIAL: string[] = [];
	/** IAM actions required for the DescribeIdentityProvider API call. */
	static readonly DESCRIBE_IDENTITY_PROVIDER: string[] = [
		"cognito-idp:DescribeIdentityProvider",
	];
	/** IAM actions required for the DescribeManagedLoginBranding API call. */
	static readonly DESCRIBE_MANAGED_LOGIN_BRANDING: string[] = [
		"cognito-idp:DescribeManagedLoginBranding",
	];
	/** IAM actions required for the DescribeManagedLoginBrandingByClient API call. */
	static readonly DESCRIBE_MANAGED_LOGIN_BRANDING_BY_CLIENT: string[] = [
		"cognito-idp:DescribeManagedLoginBrandingByClient",
	];
	/** IAM actions required for the DescribeResourceServer API call. */
	static readonly DESCRIBE_RESOURCE_SERVER: string[] = [
		"cognito-idp:DescribeResourceServer",
	];
	/** IAM actions required for the DescribeRiskConfiguration API call. */
	static readonly DESCRIBE_RISK_CONFIGURATION: string[] = [
		"cognito-idp:DescribeRiskConfiguration",
	];
	/** IAM actions required for the DescribeTerms API call. */
	static readonly DESCRIBE_TERMS: string[] = ["cognito-idp:DescribeTerms"];
	/** IAM actions required for the DescribeUserImportJob API call. */
	static readonly DESCRIBE_USER_IMPORT_JOB: string[] = [
		"cognito-idp:DescribeUserImportJob",
	];
	/** IAM actions required for the DescribeUserPool API call. */
	static readonly DESCRIBE_USER_POOL: string[] = [
		"cognito-idp:DescribeUserPool",
	];
	/** IAM actions required for the DescribeUserPoolClient API call. */
	static readonly DESCRIBE_USER_POOL_CLIENT: string[] = [
		"cognito-idp:DescribeUserPoolClient",
	];
	/** IAM actions required for the DescribeUserPoolDomain API call. */
	static readonly DESCRIBE_USER_POOL_DOMAIN: string[] = [
		"cognito-idp:DescribeUserPoolDomain",
	];
	/** IAM actions required for the ForgetDevice API call. */
	static readonly FORGET_DEVICE: string[] = ["cognito-idp:ForgetDevice"];
	/** IAM actions required for the ForgotPassword API call. */
	static readonly FORGOT_PASSWORD: string[] = ["cognito-idp:ForgotPassword"];
	/** IAM actions required for the GetCSVHeader API call. */
	static readonly GET_CSV_HEADER: string[] = ["cognito-idp:GetCSVHeader"];
	/** IAM actions required for the GetDevice API call. */
	static readonly GET_DEVICE: string[] = ["cognito-idp:GetDevice"];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["cognito-idp:GetGroup"];
	/** IAM actions required for the GetIdentityProviderByIdentifier API call. */
	static readonly GET_IDENTITY_PROVIDER_BY_IDENTIFIER: string[] = [
		"cognito-idp:GetIdentityProviderByIdentifier",
	];
	/** IAM actions required for the GetLogDeliveryConfiguration API call. */
	static readonly GET_LOG_DELIVERY_CONFIGURATION: string[] = [
		"cognito-idp:GetLogDeliveryConfiguration",
	];
	/** IAM actions required for the GetProvisionedLimit API call. */
	static readonly GET_PROVISIONED_LIMIT: string[] = [
		"cognito-idp:GetProvisionedLimit",
	];
	/** IAM actions required for the GetSigningCertificate API call. */
	static readonly GET_SIGNING_CERTIFICATE: string[] = [
		"cognito-idp:GetSigningCertificate",
	];
	/** IAM actions required for the GetTokensFromRefreshToken API call. */
	static readonly GET_TOKENS_FROM_REFRESH_TOKEN: string[] = [
		"cognito-idp:GetTokensFromRefreshToken",
	];
	/** IAM actions required for the GetUICustomization API call. */
	static readonly GET_UI_CUSTOMIZATION: string[] = [
		"cognito-idp:GetUICustomization",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = ["cognito-idp:GetUser"];
	/** IAM actions required for the GetUserAttributeVerificationCode API call. */
	static readonly GET_USER_ATTRIBUTE_VERIFICATION_CODE: string[] = [
		"cognito-idp:GetUserAttributeVerificationCode",
	];
	/** IAM actions required for the GetUserAuthFactors API call. */
	static readonly GET_USER_AUTH_FACTORS: string[] = [];
	/** IAM actions required for the GetUserPoolMfaConfig API call. */
	static readonly GET_USER_POOL_MFA_CONFIG: string[] = [
		"cognito-idp:GetUserPoolMfaConfig",
	];
	/** IAM actions required for the GlobalSignOut API call. */
	static readonly GLOBAL_SIGN_OUT: string[] = ["cognito-idp:GlobalSignOut"];
	/** IAM actions required for the InitiateAuth API call. */
	static readonly INITIATE_AUTH: string[] = ["cognito-idp:InitiateAuth"];
	/** IAM actions required for the ListDevices API call. */
	static readonly LIST_DEVICES: string[] = ["cognito-idp:ListDevices"];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["cognito-idp:ListGroups"];
	/** IAM actions required for the ListIdentityProviders API call. */
	static readonly LIST_IDENTITY_PROVIDERS: string[] = [
		"cognito-idp:ListIdentityProviders",
	];
	/** IAM actions required for the ListResourceServers API call. */
	static readonly LIST_RESOURCE_SERVERS: string[] = [
		"cognito-idp:ListResourceServers",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cognito-idp:ListTagsForResource",
	];
	/** IAM actions required for the ListTerms API call. */
	static readonly LIST_TERMS: string[] = ["cognito-idp:ListTerms"];
	/** IAM actions required for the ListUserImportJobs API call. */
	static readonly LIST_USER_IMPORT_JOBS: string[] = [
		"cognito-idp:ListUserImportJobs",
	];
	/** IAM actions required for the ListUserPoolClientSecrets API call. */
	static readonly LIST_USER_POOL_CLIENT_SECRETS: string[] = [
		"cognito-idp:ListUserPoolClientSecrets",
	];
	/** IAM actions required for the ListUserPoolClients API call. */
	static readonly LIST_USER_POOL_CLIENTS: string[] = [
		"cognito-idp:ListUserPoolClients",
	];
	/** IAM actions required for the ListUserPoolReplicas API call. */
	static readonly LIST_USER_POOL_REPLICAS: string[] = [
		"cognito-idp:ListUserPoolReplicas",
	];
	/** IAM actions required for the ListUserPools API call. */
	static readonly LIST_USER_POOLS: string[] = ["cognito-idp:ListUserPools"];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["cognito-idp:ListUsers"];
	/** IAM actions required for the ListUsersInGroup API call. */
	static readonly LIST_USERS_IN_GROUP: string[] = [
		"cognito-idp:ListUsersInGroup",
	];
	/** IAM actions required for the ListWebAuthnCredentials API call. */
	static readonly LIST_WEB_AUTHN_CREDENTIALS: string[] = [];
	/** IAM actions required for the ResendConfirmationCode API call. */
	static readonly RESEND_CONFIRMATION_CODE: string[] = [
		"cognito-idp:ResendConfirmationCode",
	];
	/** IAM actions required for the RespondToAuthChallenge API call. */
	static readonly RESPOND_TO_AUTH_CHALLENGE: string[] = [
		"cognito-idp:RespondToAuthChallenge",
	];
	/** IAM actions required for the RevokeToken API call. */
	static readonly REVOKE_TOKEN: string[] = ["cognito-idp:RevokeToken"];
	/** IAM actions required for the SetLogDeliveryConfiguration API call. */
	static readonly SET_LOG_DELIVERY_CONFIGURATION: string[] = [
		"cognito-idp:SetLogDeliveryConfiguration",
	];
	/** IAM actions required for the SetRiskConfiguration API call. */
	static readonly SET_RISK_CONFIGURATION: string[] = [
		"cognito-idp:SetRiskConfiguration",
	];
	/** IAM actions required for the SetUICustomization API call. */
	static readonly SET_UI_CUSTOMIZATION: string[] = [
		"cognito-idp:SetUICustomization",
	];
	/** IAM actions required for the SetUserMFAPreference API call. */
	static readonly SET_USER_MFA_PREFERENCE: string[] = [
		"cognito-idp:SetUserMFAPreference",
	];
	/** IAM actions required for the SetUserPoolMfaConfig API call. */
	static readonly SET_USER_POOL_MFA_CONFIG: string[] = [
		"iam:PassRole",
		"cognito-idp:SetUserPoolMfaConfig",
	];
	/** IAM actions required for the SetUserSettings API call. */
	static readonly SET_USER_SETTINGS: string[] = ["cognito-idp:SetUserSettings"];
	/** IAM actions required for the SignUp API call. */
	static readonly SIGN_UP: string[] = ["cognito-idp:SignUp"];
	/** IAM actions required for the StartUserImportJob API call. */
	static readonly START_USER_IMPORT_JOB: string[] = [
		"cognito-idp:StartUserImportJob",
	];
	/** IAM actions required for the StartWebAuthnRegistration API call. */
	static readonly START_WEB_AUTHN_REGISTRATION: string[] = [];
	/** IAM actions required for the StopUserImportJob API call. */
	static readonly STOP_USER_IMPORT_JOB: string[] = [
		"cognito-idp:StopUserImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cognito-idp:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cognito-idp:UntagResource"];
	/** IAM actions required for the UpdateAuthEventFeedback API call. */
	static readonly UPDATE_AUTH_EVENT_FEEDBACK: string[] = [
		"cognito-idp:UpdateAuthEventFeedback",
	];
	/** IAM actions required for the UpdateDeviceStatus API call. */
	static readonly UPDATE_DEVICE_STATUS: string[] = [
		"cognito-idp:UpdateDeviceStatus",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = [
		"iam:PassRole",
		"cognito-idp:UpdateGroup",
	];
	/** IAM actions required for the UpdateIdentityProvider API call. */
	static readonly UPDATE_IDENTITY_PROVIDER: string[] = [
		"cognito-idp:UpdateIdentityProvider",
	];
	/** IAM actions required for the UpdateManagedLoginBranding API call. */
	static readonly UPDATE_MANAGED_LOGIN_BRANDING: string[] = [
		"cognito-idp:UpdateManagedLoginBranding",
	];
	/** IAM actions required for the UpdateProvisionedLimit API call. */
	static readonly UPDATE_PROVISIONED_LIMIT: string[] = [
		"cognito-idp:UpdateProvisionedLimit",
	];
	/** IAM actions required for the UpdateResourceServer API call. */
	static readonly UPDATE_RESOURCE_SERVER: string[] = [
		"cognito-idp:UpdateResourceServer",
	];
	/** IAM actions required for the UpdateTerms API call. */
	static readonly UPDATE_TERMS: string[] = ["cognito-idp:UpdateTerms"];
	/** IAM actions required for the UpdateUserAttributes API call. */
	static readonly UPDATE_USER_ATTRIBUTES: string[] = [
		"cognito-idp:UpdateUserAttributes",
	];
	/** IAM actions required for the UpdateUserPool API call. */
	static readonly UPDATE_USER_POOL: string[] = [
		"iam:PassRole",
		"cognito-idp:TagResource",
		"cognito-idp:UntagResource",
		"cognito-idp:UpdateUserPool",
	];
	/** IAM actions required for the UpdateUserPoolClient API call. */
	static readonly UPDATE_USER_POOL_CLIENT: string[] = [
		"iam:PassRole",
		"cognito-idp:UpdateUserPoolClient",
	];
	/** IAM actions required for the UpdateUserPoolDomain API call. */
	static readonly UPDATE_USER_POOL_DOMAIN: string[] = [
		"cognito-idp:UpdateUserPoolDomain",
	];
	/** IAM actions required for the UpdateUserPoolReplica API call. */
	static readonly UPDATE_USER_POOL_REPLICA: string[] = [
		"cognito-idp:UpdateUserPoolReplica",
	];
	/** IAM actions required for the VerifySoftwareToken API call. */
	static readonly VERIFY_SOFTWARE_TOKEN: string[] = [
		"cognito-idp:VerifySoftwareToken",
	];
	/** IAM actions required for the VerifyUserAttribute API call. */
	static readonly VERIFY_USER_ATTRIBUTE: string[] = [
		"cognito-idp:VerifyUserAttribute",
	];
}

/**
 * Condition key constants and builders for cognito-idp.
 */
export class CognitoIdpConditions {
	/** Condition keys applicable to the CreateUserPool action. */
	static readonly CREATE_USER_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateUserPool action. */
	static readonly UPDATE_USER_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
