// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iam.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iam service.
 */
export class IAMActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iam";

	/** [Write] iam:AcceptDelegationRequest */
	static readonly ACCEPT_DELEGATION_REQUEST = "iam:AcceptDelegationRequest";
	/** [Write] iam:AddClientIDToOpenIDConnectProvider */
	static readonly ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER =
		"iam:AddClientIDToOpenIDConnectProvider";
	/** [Write] iam:AddRoleToInstanceProfile */
	static readonly ADD_ROLE_TO_INSTANCE_PROFILE = "iam:AddRoleToInstanceProfile";
	/** [Write] iam:AddUserToGroup */
	static readonly ADD_USER_TO_GROUP = "iam:AddUserToGroup";
	/** [Write] iam:AssociateDelegationRequest */
	static readonly ASSOCIATE_DELEGATION_REQUEST =
		"iam:AssociateDelegationRequest";
	/** [PermissionManagement] iam:AttachGroupPolicy */
	static readonly ATTACH_GROUP_POLICY = "iam:AttachGroupPolicy";
	/** [PermissionManagement] iam:AttachRolePolicy */
	static readonly ATTACH_ROLE_POLICY = "iam:AttachRolePolicy";
	/** [PermissionManagement] iam:AttachUserPolicy */
	static readonly ATTACH_USER_POLICY = "iam:AttachUserPolicy";
	/** [Write] iam:ChangePassword */
	static readonly CHANGE_PASSWORD = "iam:ChangePassword";
	/** [Write] iam:CreateAccessKey */
	static readonly CREATE_ACCESS_KEY = "iam:CreateAccessKey";
	/** [Write] iam:CreateAccountAlias */
	static readonly CREATE_ACCOUNT_ALIAS = "iam:CreateAccountAlias";
	/** [Write] iam:CreateDelegationRequest */
	static readonly CREATE_DELEGATION_REQUEST = "iam:CreateDelegationRequest";
	/** [Write] iam:CreateGroup */
	static readonly CREATE_GROUP = "iam:CreateGroup";
	/** [Write] iam:CreateInstanceProfile */
	static readonly CREATE_INSTANCE_PROFILE = "iam:CreateInstanceProfile";
	/** [Write] iam:CreateLoginProfile */
	static readonly CREATE_LOGIN_PROFILE = "iam:CreateLoginProfile";
	/** [Write] iam:CreateOpenIDConnectProvider */
	static readonly CREATE_OPEN_ID_CONNECT_PROVIDER =
		"iam:CreateOpenIDConnectProvider";
	/** [PermissionManagement] iam:CreatePolicy */
	static readonly CREATE_POLICY = "iam:CreatePolicy";
	/** [PermissionManagement] iam:CreatePolicyVersion */
	static readonly CREATE_POLICY_VERSION = "iam:CreatePolicyVersion";
	/** [Write] iam:CreateRole */
	static readonly CREATE_ROLE = "iam:CreateRole";
	/** [Write] iam:CreateSAMLProvider */
	static readonly CREATE_SAML_PROVIDER = "iam:CreateSAMLProvider";
	/** [Write] iam:CreateServiceLinkedRole */
	static readonly CREATE_SERVICE_LINKED_ROLE = "iam:CreateServiceLinkedRole";
	/** [Write] iam:CreateServiceSpecificCredential */
	static readonly CREATE_SERVICE_SPECIFIC_CREDENTIAL =
		"iam:CreateServiceSpecificCredential";
	/** [Write] iam:CreateUser */
	static readonly CREATE_USER = "iam:CreateUser";
	/** [Write] iam:CreateVirtualMFADevice */
	static readonly CREATE_VIRTUAL_MFA_DEVICE = "iam:CreateVirtualMFADevice";
	/** [Write] iam:DeactivateMFADevice */
	static readonly DEACTIVATE_MFA_DEVICE = "iam:DeactivateMFADevice";
	/** [Write] iam:DeleteAccessKey */
	static readonly DELETE_ACCESS_KEY = "iam:DeleteAccessKey";
	/** [Write] iam:DeleteAccountAlias */
	static readonly DELETE_ACCOUNT_ALIAS = "iam:DeleteAccountAlias";
	/** [PermissionManagement] iam:DeleteAccountPasswordPolicy */
	static readonly DELETE_ACCOUNT_PASSWORD_POLICY =
		"iam:DeleteAccountPasswordPolicy";
	/** [Write] iam:DeleteCloudFrontPublicKey */
	static readonly DELETE_CLOUD_FRONT_PUBLIC_KEY =
		"iam:DeleteCloudFrontPublicKey";
	/** [Write] iam:DeleteGroup */
	static readonly DELETE_GROUP = "iam:DeleteGroup";
	/** [PermissionManagement] iam:DeleteGroupPolicy */
	static readonly DELETE_GROUP_POLICY = "iam:DeleteGroupPolicy";
	/** [Write] iam:DeleteInstanceProfile */
	static readonly DELETE_INSTANCE_PROFILE = "iam:DeleteInstanceProfile";
	/** [Write] iam:DeleteLoginProfile */
	static readonly DELETE_LOGIN_PROFILE = "iam:DeleteLoginProfile";
	/** [Write] iam:DeleteOpenIDConnectProvider */
	static readonly DELETE_OPEN_ID_CONNECT_PROVIDER =
		"iam:DeleteOpenIDConnectProvider";
	/** [PermissionManagement] iam:DeletePolicy */
	static readonly DELETE_POLICY = "iam:DeletePolicy";
	/** [PermissionManagement] iam:DeletePolicyVersion */
	static readonly DELETE_POLICY_VERSION = "iam:DeletePolicyVersion";
	/** [Write] iam:DeleteRole */
	static readonly DELETE_ROLE = "iam:DeleteRole";
	/** [PermissionManagement] iam:DeleteRolePermissionsBoundary */
	static readonly DELETE_ROLE_PERMISSIONS_BOUNDARY =
		"iam:DeleteRolePermissionsBoundary";
	/** [PermissionManagement] iam:DeleteRolePolicy */
	static readonly DELETE_ROLE_POLICY = "iam:DeleteRolePolicy";
	/** [Write] iam:DeleteSAMLProvider */
	static readonly DELETE_SAML_PROVIDER = "iam:DeleteSAMLProvider";
	/** [Write] iam:DeleteSSHPublicKey */
	static readonly DELETE_SSH_PUBLIC_KEY = "iam:DeleteSSHPublicKey";
	/** [Write] iam:DeleteServerCertificate */
	static readonly DELETE_SERVER_CERTIFICATE = "iam:DeleteServerCertificate";
	/** [Write] iam:DeleteServiceLinkedRole */
	static readonly DELETE_SERVICE_LINKED_ROLE = "iam:DeleteServiceLinkedRole";
	/** [Write] iam:DeleteServiceSpecificCredential */
	static readonly DELETE_SERVICE_SPECIFIC_CREDENTIAL =
		"iam:DeleteServiceSpecificCredential";
	/** [Write] iam:DeleteSigningCertificate */
	static readonly DELETE_SIGNING_CERTIFICATE = "iam:DeleteSigningCertificate";
	/** [Write] iam:DeleteUser */
	static readonly DELETE_USER = "iam:DeleteUser";
	/** [PermissionManagement] iam:DeleteUserPermissionsBoundary */
	static readonly DELETE_USER_PERMISSIONS_BOUNDARY =
		"iam:DeleteUserPermissionsBoundary";
	/** [PermissionManagement] iam:DeleteUserPolicy */
	static readonly DELETE_USER_POLICY = "iam:DeleteUserPolicy";
	/** [Write] iam:DeleteVirtualMFADevice */
	static readonly DELETE_VIRTUAL_MFA_DEVICE = "iam:DeleteVirtualMFADevice";
	/** [PermissionManagement] iam:DetachGroupPolicy */
	static readonly DETACH_GROUP_POLICY = "iam:DetachGroupPolicy";
	/** [PermissionManagement] iam:DetachRolePolicy */
	static readonly DETACH_ROLE_POLICY = "iam:DetachRolePolicy";
	/** [PermissionManagement] iam:DetachUserPolicy */
	static readonly DETACH_USER_POLICY = "iam:DetachUserPolicy";
	/** [Write] iam:DisableOrganizationsRootCredentialsManagement */
	static readonly DISABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT =
		"iam:DisableOrganizationsRootCredentialsManagement";
	/** [Write] iam:DisableOrganizationsRootSessions */
	static readonly DISABLE_ORGANIZATIONS_ROOT_SESSIONS =
		"iam:DisableOrganizationsRootSessions";
	/** [Write] iam:DisableOutboundWebIdentityFederation */
	static readonly DISABLE_OUTBOUND_WEB_IDENTITY_FEDERATION =
		"iam:DisableOutboundWebIdentityFederation";
	/** [Write] iam:EnableMFADevice */
	static readonly ENABLE_MFA_DEVICE = "iam:EnableMFADevice";
	/** [Write] iam:EnableOrganizationsRootCredentialsManagement */
	static readonly ENABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT =
		"iam:EnableOrganizationsRootCredentialsManagement";
	/** [Write] iam:EnableOrganizationsRootSessions */
	static readonly ENABLE_ORGANIZATIONS_ROOT_SESSIONS =
		"iam:EnableOrganizationsRootSessions";
	/** [Write] iam:EnableOutboundWebIdentityFederation */
	static readonly ENABLE_OUTBOUND_WEB_IDENTITY_FEDERATION =
		"iam:EnableOutboundWebIdentityFederation";
	/** [Read] iam:GenerateCredentialReport */
	static readonly GENERATE_CREDENTIAL_REPORT = "iam:GenerateCredentialReport";
	/** [Read] iam:GenerateOrganizationsAccessReport */
	static readonly GENERATE_ORGANIZATIONS_ACCESS_REPORT =
		"iam:GenerateOrganizationsAccessReport";
	/** [Read] iam:GenerateServiceLastAccessedDetails */
	static readonly GENERATE_SERVICE_LAST_ACCESSED_DETAILS =
		"iam:GenerateServiceLastAccessedDetails";
	/** [Read] iam:GetAccessKeyLastUsed */
	static readonly GET_ACCESS_KEY_LAST_USED = "iam:GetAccessKeyLastUsed";
	/** [Read] iam:GetAccountAuthorizationDetails */
	static readonly GET_ACCOUNT_AUTHORIZATION_DETAILS =
		"iam:GetAccountAuthorizationDetails";
	/** [Read] iam:GetAccountEmailAddress */
	static readonly GET_ACCOUNT_EMAIL_ADDRESS = "iam:GetAccountEmailAddress";
	/** [Read] iam:GetAccountName */
	static readonly GET_ACCOUNT_NAME = "iam:GetAccountName";
	/** [Read] iam:GetAccountPasswordPolicy */
	static readonly GET_ACCOUNT_PASSWORD_POLICY = "iam:GetAccountPasswordPolicy";
	/** [List] iam:GetAccountSummary */
	static readonly GET_ACCOUNT_SUMMARY = "iam:GetAccountSummary";
	/** [Read] iam:GetCloudFrontPublicKey */
	static readonly GET_CLOUD_FRONT_PUBLIC_KEY = "iam:GetCloudFrontPublicKey";
	/** [Read] iam:GetContextKeysForCustomPolicy */
	static readonly GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY =
		"iam:GetContextKeysForCustomPolicy";
	/** [Read] iam:GetContextKeysForPrincipalPolicy */
	static readonly GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY =
		"iam:GetContextKeysForPrincipalPolicy";
	/** [Read] iam:GetCredentialReport */
	static readonly GET_CREDENTIAL_REPORT = "iam:GetCredentialReport";
	/** [Read] iam:GetDelegationRequest */
	static readonly GET_DELEGATION_REQUEST = "iam:GetDelegationRequest";
	/** [Read] iam:GetGroup */
	static readonly GET_GROUP = "iam:GetGroup";
	/** [Read] iam:GetGroupPolicy */
	static readonly GET_GROUP_POLICY = "iam:GetGroupPolicy";
	/** [Read] iam:GetHumanReadableSummary */
	static readonly GET_HUMAN_READABLE_SUMMARY = "iam:GetHumanReadableSummary";
	/** [Read] iam:GetInstanceProfile */
	static readonly GET_INSTANCE_PROFILE = "iam:GetInstanceProfile";
	/** [List] iam:GetLoginProfile */
	static readonly GET_LOGIN_PROFILE = "iam:GetLoginProfile";
	/** [Read] iam:GetMFADevice */
	static readonly GET_MFA_DEVICE = "iam:GetMFADevice";
	/** [Read] iam:GetOpenIDConnectProvider */
	static readonly GET_OPEN_ID_CONNECT_PROVIDER = "iam:GetOpenIDConnectProvider";
	/** [Read] iam:GetOrganizationsAccessReport */
	static readonly GET_ORGANIZATIONS_ACCESS_REPORT =
		"iam:GetOrganizationsAccessReport";
	/** [Read] iam:GetOutboundWebIdentityFederationInfo */
	static readonly GET_OUTBOUND_WEB_IDENTITY_FEDERATION_INFO =
		"iam:GetOutboundWebIdentityFederationInfo";
	/** [Read] iam:GetPolicy */
	static readonly GET_POLICY = "iam:GetPolicy";
	/** [Read] iam:GetPolicyVersion */
	static readonly GET_POLICY_VERSION = "iam:GetPolicyVersion";
	/** [Read] iam:GetRole */
	static readonly GET_ROLE = "iam:GetRole";
	/** [Read] iam:GetRolePolicy */
	static readonly GET_ROLE_POLICY = "iam:GetRolePolicy";
	/** [Read] iam:GetSAMLProvider */
	static readonly GET_SAML_PROVIDER = "iam:GetSAMLProvider";
	/** [Read] iam:GetSSHPublicKey */
	static readonly GET_SSH_PUBLIC_KEY = "iam:GetSSHPublicKey";
	/** [Read] iam:GetServerCertificate */
	static readonly GET_SERVER_CERTIFICATE = "iam:GetServerCertificate";
	/** [Read] iam:GetServiceLastAccessedDetails */
	static readonly GET_SERVICE_LAST_ACCESSED_DETAILS =
		"iam:GetServiceLastAccessedDetails";
	/** [Read] iam:GetServiceLastAccessedDetailsWithEntities */
	static readonly GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES =
		"iam:GetServiceLastAccessedDetailsWithEntities";
	/** [Read] iam:GetServiceLinkedRoleDeletionStatus */
	static readonly GET_SERVICE_LINKED_ROLE_DELETION_STATUS =
		"iam:GetServiceLinkedRoleDeletionStatus";
	/** [Read] iam:GetUser */
	static readonly GET_USER = "iam:GetUser";
	/** [Read] iam:GetUserPolicy */
	static readonly GET_USER_POLICY = "iam:GetUserPolicy";
	/** [List] iam:ListAccessKeys */
	static readonly LIST_ACCESS_KEYS = "iam:ListAccessKeys";
	/** [List] iam:ListAccountAliases */
	static readonly LIST_ACCOUNT_ALIASES = "iam:ListAccountAliases";
	/** [List] iam:ListAttachedGroupPolicies */
	static readonly LIST_ATTACHED_GROUP_POLICIES =
		"iam:ListAttachedGroupPolicies";
	/** [List] iam:ListAttachedRolePolicies */
	static readonly LIST_ATTACHED_ROLE_POLICIES = "iam:ListAttachedRolePolicies";
	/** [List] iam:ListAttachedUserPolicies */
	static readonly LIST_ATTACHED_USER_POLICIES = "iam:ListAttachedUserPolicies";
	/** [List] iam:ListCloudFrontPublicKeys */
	static readonly LIST_CLOUD_FRONT_PUBLIC_KEYS = "iam:ListCloudFrontPublicKeys";
	/** [List] iam:ListDelegationRequests */
	static readonly LIST_DELEGATION_REQUESTS = "iam:ListDelegationRequests";
	/** [List] iam:ListEntitiesForPolicy */
	static readonly LIST_ENTITIES_FOR_POLICY = "iam:ListEntitiesForPolicy";
	/** [List] iam:ListGroupPolicies */
	static readonly LIST_GROUP_POLICIES = "iam:ListGroupPolicies";
	/** [List] iam:ListGroups */
	static readonly LIST_GROUPS = "iam:ListGroups";
	/** [List] iam:ListGroupsForUser */
	static readonly LIST_GROUPS_FOR_USER = "iam:ListGroupsForUser";
	/** [List] iam:ListInstanceProfileTags */
	static readonly LIST_INSTANCE_PROFILE_TAGS = "iam:ListInstanceProfileTags";
	/** [List] iam:ListInstanceProfiles */
	static readonly LIST_INSTANCE_PROFILES = "iam:ListInstanceProfiles";
	/** [List] iam:ListInstanceProfilesForRole */
	static readonly LIST_INSTANCE_PROFILES_FOR_ROLE =
		"iam:ListInstanceProfilesForRole";
	/** [List] iam:ListMFADeviceTags */
	static readonly LIST_MFA_DEVICE_TAGS = "iam:ListMFADeviceTags";
	/** [List] iam:ListMFADevices */
	static readonly LIST_MFA_DEVICES = "iam:ListMFADevices";
	/** [List] iam:ListOpenIDConnectProviderTags */
	static readonly LIST_OPEN_ID_CONNECT_PROVIDER_TAGS =
		"iam:ListOpenIDConnectProviderTags";
	/** [List] iam:ListOpenIDConnectProviders */
	static readonly LIST_OPEN_ID_CONNECT_PROVIDERS =
		"iam:ListOpenIDConnectProviders";
	/** [List] iam:ListOrganizationsFeatures */
	static readonly LIST_ORGANIZATIONS_FEATURES = "iam:ListOrganizationsFeatures";
	/** [List] iam:ListPolicies */
	static readonly LIST_POLICIES = "iam:ListPolicies";
	/** [List] iam:ListPoliciesGrantingServiceAccess */
	static readonly LIST_POLICIES_GRANTING_SERVICE_ACCESS =
		"iam:ListPoliciesGrantingServiceAccess";
	/** [List] iam:ListPolicyTags */
	static readonly LIST_POLICY_TAGS = "iam:ListPolicyTags";
	/** [List] iam:ListPolicyVersions */
	static readonly LIST_POLICY_VERSIONS = "iam:ListPolicyVersions";
	/** [List] iam:ListRolePolicies */
	static readonly LIST_ROLE_POLICIES = "iam:ListRolePolicies";
	/** [List] iam:ListRoleTags */
	static readonly LIST_ROLE_TAGS = "iam:ListRoleTags";
	/** [List] iam:ListRoles */
	static readonly LIST_ROLES = "iam:ListRoles";
	/** [List] iam:ListSAMLProviderTags */
	static readonly LIST_SAML_PROVIDER_TAGS = "iam:ListSAMLProviderTags";
	/** [List] iam:ListSAMLProviders */
	static readonly LIST_SAML_PROVIDERS = "iam:ListSAMLProviders";
	/** [List] iam:ListSSHPublicKeys */
	static readonly LIST_SSH_PUBLIC_KEYS = "iam:ListSSHPublicKeys";
	/** [List] iam:ListSTSRegionalEndpointsStatus */
	static readonly LIST_STS_REGIONAL_ENDPOINTS_STATUS =
		"iam:ListSTSRegionalEndpointsStatus";
	/** [List] iam:ListServerCertificateTags */
	static readonly LIST_SERVER_CERTIFICATE_TAGS =
		"iam:ListServerCertificateTags";
	/** [List] iam:ListServerCertificates */
	static readonly LIST_SERVER_CERTIFICATES = "iam:ListServerCertificates";
	/** [List] iam:ListServiceSpecificCredentials */
	static readonly LIST_SERVICE_SPECIFIC_CREDENTIALS =
		"iam:ListServiceSpecificCredentials";
	/** [List] iam:ListSigningCertificates */
	static readonly LIST_SIGNING_CERTIFICATES = "iam:ListSigningCertificates";
	/** [List] iam:ListUserPolicies */
	static readonly LIST_USER_POLICIES = "iam:ListUserPolicies";
	/** [List] iam:ListUserTags */
	static readonly LIST_USER_TAGS = "iam:ListUserTags";
	/** [List] iam:ListUsers */
	static readonly LIST_USERS = "iam:ListUsers";
	/** [List] iam:ListVirtualMFADevices */
	static readonly LIST_VIRTUAL_MFA_DEVICES = "iam:ListVirtualMFADevices";
	/** [Write] iam:PassRole */
	static readonly PASS_ROLE = "iam:PassRole";
	/** [PermissionManagement] iam:PutGroupPolicy */
	static readonly PUT_GROUP_POLICY = "iam:PutGroupPolicy";
	/** [PermissionManagement] iam:PutRolePermissionsBoundary */
	static readonly PUT_ROLE_PERMISSIONS_BOUNDARY =
		"iam:PutRolePermissionsBoundary";
	/** [PermissionManagement] iam:PutRolePolicy */
	static readonly PUT_ROLE_POLICY = "iam:PutRolePolicy";
	/** [PermissionManagement] iam:PutUserPermissionsBoundary */
	static readonly PUT_USER_PERMISSIONS_BOUNDARY =
		"iam:PutUserPermissionsBoundary";
	/** [PermissionManagement] iam:PutUserPolicy */
	static readonly PUT_USER_POLICY = "iam:PutUserPolicy";
	/** [Write] iam:RejectDelegationRequest */
	static readonly REJECT_DELEGATION_REQUEST = "iam:RejectDelegationRequest";
	/** [Write] iam:RemoveClientIDFromOpenIDConnectProvider */
	static readonly REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER =
		"iam:RemoveClientIDFromOpenIDConnectProvider";
	/** [Write] iam:RemoveRoleFromInstanceProfile */
	static readonly REMOVE_ROLE_FROM_INSTANCE_PROFILE =
		"iam:RemoveRoleFromInstanceProfile";
	/** [Write] iam:RemoveUserFromGroup */
	static readonly REMOVE_USER_FROM_GROUP = "iam:RemoveUserFromGroup";
	/** [Write] iam:ResetServiceSpecificCredential */
	static readonly RESET_SERVICE_SPECIFIC_CREDENTIAL =
		"iam:ResetServiceSpecificCredential";
	/** [Write] iam:ResyncMFADevice */
	static readonly RESYNC_MFA_DEVICE = "iam:ResyncMFADevice";
	/** [Write] iam:SendDelegationToken */
	static readonly SEND_DELEGATION_TOKEN = "iam:SendDelegationToken";
	/** [PermissionManagement] iam:SetDefaultPolicyVersion */
	static readonly SET_DEFAULT_POLICY_VERSION = "iam:SetDefaultPolicyVersion";
	/** [Write] iam:SetSTSRegionalEndpointStatus */
	static readonly SET_STS_REGIONAL_ENDPOINT_STATUS =
		"iam:SetSTSRegionalEndpointStatus";
	/** [Write] iam:SetSecurityTokenServicePreferences */
	static readonly SET_SECURITY_TOKEN_SERVICE_PREFERENCES =
		"iam:SetSecurityTokenServicePreferences";
	/** [Read] iam:SimulateCustomPolicy */
	static readonly SIMULATE_CUSTOM_POLICY = "iam:SimulateCustomPolicy";
	/** [Read] iam:SimulatePrincipalPolicy */
	static readonly SIMULATE_PRINCIPAL_POLICY = "iam:SimulatePrincipalPolicy";
	/** [Tagging] iam:TagInstanceProfile */
	static readonly TAG_INSTANCE_PROFILE = "iam:TagInstanceProfile";
	/** [Tagging] iam:TagMFADevice */
	static readonly TAG_MFA_DEVICE = "iam:TagMFADevice";
	/** [Tagging] iam:TagOpenIDConnectProvider */
	static readonly TAG_OPEN_ID_CONNECT_PROVIDER = "iam:TagOpenIDConnectProvider";
	/** [Tagging] iam:TagPolicy */
	static readonly TAG_POLICY = "iam:TagPolicy";
	/** [Tagging] iam:TagRole */
	static readonly TAG_ROLE = "iam:TagRole";
	/** [Tagging] iam:TagSAMLProvider */
	static readonly TAG_SAML_PROVIDER = "iam:TagSAMLProvider";
	/** [Tagging] iam:TagServerCertificate */
	static readonly TAG_SERVER_CERTIFICATE = "iam:TagServerCertificate";
	/** [Tagging] iam:TagUser */
	static readonly TAG_USER = "iam:TagUser";
	/** [Tagging] iam:UntagInstanceProfile */
	static readonly UNTAG_INSTANCE_PROFILE = "iam:UntagInstanceProfile";
	/** [Tagging] iam:UntagMFADevice */
	static readonly UNTAG_MFA_DEVICE = "iam:UntagMFADevice";
	/** [Tagging] iam:UntagOpenIDConnectProvider */
	static readonly UNTAG_OPEN_ID_CONNECT_PROVIDER =
		"iam:UntagOpenIDConnectProvider";
	/** [Tagging] iam:UntagPolicy */
	static readonly UNTAG_POLICY = "iam:UntagPolicy";
	/** [Tagging] iam:UntagRole */
	static readonly UNTAG_ROLE = "iam:UntagRole";
	/** [Tagging] iam:UntagSAMLProvider */
	static readonly UNTAG_SAML_PROVIDER = "iam:UntagSAMLProvider";
	/** [Tagging] iam:UntagServerCertificate */
	static readonly UNTAG_SERVER_CERTIFICATE = "iam:UntagServerCertificate";
	/** [Tagging] iam:UntagUser */
	static readonly UNTAG_USER = "iam:UntagUser";
	/** [Write] iam:UpdateAccessKey */
	static readonly UPDATE_ACCESS_KEY = "iam:UpdateAccessKey";
	/** [Write] iam:UpdateAccountEmailAddress */
	static readonly UPDATE_ACCOUNT_EMAIL_ADDRESS =
		"iam:UpdateAccountEmailAddress";
	/** [Write] iam:UpdateAccountName */
	static readonly UPDATE_ACCOUNT_NAME = "iam:UpdateAccountName";
	/** [Write] iam:UpdateAccountPasswordPolicy */
	static readonly UPDATE_ACCOUNT_PASSWORD_POLICY =
		"iam:UpdateAccountPasswordPolicy";
	/** [PermissionManagement] iam:UpdateAssumeRolePolicy */
	static readonly UPDATE_ASSUME_ROLE_POLICY = "iam:UpdateAssumeRolePolicy";
	/** [Write] iam:UpdateCloudFrontPublicKey */
	static readonly UPDATE_CLOUD_FRONT_PUBLIC_KEY =
		"iam:UpdateCloudFrontPublicKey";
	/** [Write] iam:UpdateGroup */
	static readonly UPDATE_GROUP = "iam:UpdateGroup";
	/** [Write] iam:UpdateLoginProfile */
	static readonly UPDATE_LOGIN_PROFILE = "iam:UpdateLoginProfile";
	/** [Write] iam:UpdateOpenIDConnectProviderThumbprint */
	static readonly UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT =
		"iam:UpdateOpenIDConnectProviderThumbprint";
	/** [Write] iam:UpdateRole */
	static readonly UPDATE_ROLE = "iam:UpdateRole";
	/** [Write] iam:UpdateRoleDescription */
	static readonly UPDATE_ROLE_DESCRIPTION = "iam:UpdateRoleDescription";
	/** [Write] iam:UpdateSAMLProvider */
	static readonly UPDATE_SAML_PROVIDER = "iam:UpdateSAMLProvider";
	/** [Write] iam:UpdateSSHPublicKey */
	static readonly UPDATE_SSH_PUBLIC_KEY = "iam:UpdateSSHPublicKey";
	/** [Write] iam:UpdateServerCertificate */
	static readonly UPDATE_SERVER_CERTIFICATE = "iam:UpdateServerCertificate";
	/** [Write] iam:UpdateServiceSpecificCredential */
	static readonly UPDATE_SERVICE_SPECIFIC_CREDENTIAL =
		"iam:UpdateServiceSpecificCredential";
	/** [Write] iam:UpdateSigningCertificate */
	static readonly UPDATE_SIGNING_CERTIFICATE = "iam:UpdateSigningCertificate";
	/** [Write] iam:UpdateUser */
	static readonly UPDATE_USER = "iam:UpdateUser";
	/** [Write] iam:UploadCloudFrontPublicKey */
	static readonly UPLOAD_CLOUD_FRONT_PUBLIC_KEY =
		"iam:UploadCloudFrontPublicKey";
	/** [Write] iam:UploadSSHPublicKey */
	static readonly UPLOAD_SSH_PUBLIC_KEY = "iam:UploadSSHPublicKey";
	/** [Write] iam:UploadServerCertificate */
	static readonly UPLOAD_SERVER_CERTIFICATE = "iam:UploadServerCertificate";
	/** [Write] iam:UploadSigningCertificate */
	static readonly UPLOAD_SIGNING_CERTIFICATE = "iam:UploadSigningCertificate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IAMActions.GENERATE_CREDENTIAL_REPORT,
		IAMActions.GENERATE_ORGANIZATIONS_ACCESS_REPORT,
		IAMActions.GENERATE_SERVICE_LAST_ACCESSED_DETAILS,
		IAMActions.GET_ACCESS_KEY_LAST_USED,
		IAMActions.GET_ACCOUNT_AUTHORIZATION_DETAILS,
		IAMActions.GET_ACCOUNT_EMAIL_ADDRESS,
		IAMActions.GET_ACCOUNT_NAME,
		IAMActions.GET_ACCOUNT_PASSWORD_POLICY,
		IAMActions.GET_CLOUD_FRONT_PUBLIC_KEY,
		IAMActions.GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY,
		IAMActions.GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY,
		IAMActions.GET_CREDENTIAL_REPORT,
		IAMActions.GET_DELEGATION_REQUEST,
		IAMActions.GET_GROUP,
		IAMActions.GET_GROUP_POLICY,
		IAMActions.GET_HUMAN_READABLE_SUMMARY,
		IAMActions.GET_INSTANCE_PROFILE,
		IAMActions.GET_MFA_DEVICE,
		IAMActions.GET_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.GET_ORGANIZATIONS_ACCESS_REPORT,
		IAMActions.GET_OUTBOUND_WEB_IDENTITY_FEDERATION_INFO,
		IAMActions.GET_POLICY,
		IAMActions.GET_POLICY_VERSION,
		IAMActions.GET_ROLE,
		IAMActions.GET_ROLE_POLICY,
		IAMActions.GET_SAML_PROVIDER,
		IAMActions.GET_SSH_PUBLIC_KEY,
		IAMActions.GET_SERVER_CERTIFICATE,
		IAMActions.GET_SERVICE_LAST_ACCESSED_DETAILS,
		IAMActions.GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES,
		IAMActions.GET_SERVICE_LINKED_ROLE_DELETION_STATUS,
		IAMActions.GET_USER,
		IAMActions.GET_USER_POLICY,
		IAMActions.SIMULATE_CUSTOM_POLICY,
		IAMActions.SIMULATE_PRINCIPAL_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IAMActions.ACCEPT_DELEGATION_REQUEST,
		IAMActions.ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.ADD_ROLE_TO_INSTANCE_PROFILE,
		IAMActions.ADD_USER_TO_GROUP,
		IAMActions.ASSOCIATE_DELEGATION_REQUEST,
		IAMActions.CHANGE_PASSWORD,
		IAMActions.CREATE_ACCESS_KEY,
		IAMActions.CREATE_ACCOUNT_ALIAS,
		IAMActions.CREATE_DELEGATION_REQUEST,
		IAMActions.CREATE_GROUP,
		IAMActions.CREATE_INSTANCE_PROFILE,
		IAMActions.CREATE_LOGIN_PROFILE,
		IAMActions.CREATE_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.CREATE_ROLE,
		IAMActions.CREATE_SAML_PROVIDER,
		IAMActions.CREATE_SERVICE_LINKED_ROLE,
		IAMActions.CREATE_SERVICE_SPECIFIC_CREDENTIAL,
		IAMActions.CREATE_USER,
		IAMActions.CREATE_VIRTUAL_MFA_DEVICE,
		IAMActions.DEACTIVATE_MFA_DEVICE,
		IAMActions.DELETE_ACCESS_KEY,
		IAMActions.DELETE_ACCOUNT_ALIAS,
		IAMActions.DELETE_CLOUD_FRONT_PUBLIC_KEY,
		IAMActions.DELETE_GROUP,
		IAMActions.DELETE_INSTANCE_PROFILE,
		IAMActions.DELETE_LOGIN_PROFILE,
		IAMActions.DELETE_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.DELETE_ROLE,
		IAMActions.DELETE_SAML_PROVIDER,
		IAMActions.DELETE_SSH_PUBLIC_KEY,
		IAMActions.DELETE_SERVER_CERTIFICATE,
		IAMActions.DELETE_SERVICE_LINKED_ROLE,
		IAMActions.DELETE_SERVICE_SPECIFIC_CREDENTIAL,
		IAMActions.DELETE_SIGNING_CERTIFICATE,
		IAMActions.DELETE_USER,
		IAMActions.DELETE_VIRTUAL_MFA_DEVICE,
		IAMActions.DISABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT,
		IAMActions.DISABLE_ORGANIZATIONS_ROOT_SESSIONS,
		IAMActions.DISABLE_OUTBOUND_WEB_IDENTITY_FEDERATION,
		IAMActions.ENABLE_MFA_DEVICE,
		IAMActions.ENABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT,
		IAMActions.ENABLE_ORGANIZATIONS_ROOT_SESSIONS,
		IAMActions.ENABLE_OUTBOUND_WEB_IDENTITY_FEDERATION,
		IAMActions.PASS_ROLE,
		IAMActions.REJECT_DELEGATION_REQUEST,
		IAMActions.REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.REMOVE_ROLE_FROM_INSTANCE_PROFILE,
		IAMActions.REMOVE_USER_FROM_GROUP,
		IAMActions.RESET_SERVICE_SPECIFIC_CREDENTIAL,
		IAMActions.RESYNC_MFA_DEVICE,
		IAMActions.SEND_DELEGATION_TOKEN,
		IAMActions.SET_STS_REGIONAL_ENDPOINT_STATUS,
		IAMActions.SET_SECURITY_TOKEN_SERVICE_PREFERENCES,
		IAMActions.UPDATE_ACCESS_KEY,
		IAMActions.UPDATE_ACCOUNT_EMAIL_ADDRESS,
		IAMActions.UPDATE_ACCOUNT_NAME,
		IAMActions.UPDATE_ACCOUNT_PASSWORD_POLICY,
		IAMActions.UPDATE_CLOUD_FRONT_PUBLIC_KEY,
		IAMActions.UPDATE_GROUP,
		IAMActions.UPDATE_LOGIN_PROFILE,
		IAMActions.UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT,
		IAMActions.UPDATE_ROLE,
		IAMActions.UPDATE_ROLE_DESCRIPTION,
		IAMActions.UPDATE_SAML_PROVIDER,
		IAMActions.UPDATE_SSH_PUBLIC_KEY,
		IAMActions.UPDATE_SERVER_CERTIFICATE,
		IAMActions.UPDATE_SERVICE_SPECIFIC_CREDENTIAL,
		IAMActions.UPDATE_SIGNING_CERTIFICATE,
		IAMActions.UPDATE_USER,
		IAMActions.UPLOAD_CLOUD_FRONT_PUBLIC_KEY,
		IAMActions.UPLOAD_SSH_PUBLIC_KEY,
		IAMActions.UPLOAD_SERVER_CERTIFICATE,
		IAMActions.UPLOAD_SIGNING_CERTIFICATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IAMActions.GET_ACCOUNT_SUMMARY,
		IAMActions.GET_LOGIN_PROFILE,
		IAMActions.LIST_ACCESS_KEYS,
		IAMActions.LIST_ACCOUNT_ALIASES,
		IAMActions.LIST_ATTACHED_GROUP_POLICIES,
		IAMActions.LIST_ATTACHED_ROLE_POLICIES,
		IAMActions.LIST_ATTACHED_USER_POLICIES,
		IAMActions.LIST_CLOUD_FRONT_PUBLIC_KEYS,
		IAMActions.LIST_DELEGATION_REQUESTS,
		IAMActions.LIST_ENTITIES_FOR_POLICY,
		IAMActions.LIST_GROUP_POLICIES,
		IAMActions.LIST_GROUPS,
		IAMActions.LIST_GROUPS_FOR_USER,
		IAMActions.LIST_INSTANCE_PROFILE_TAGS,
		IAMActions.LIST_INSTANCE_PROFILES,
		IAMActions.LIST_INSTANCE_PROFILES_FOR_ROLE,
		IAMActions.LIST_MFA_DEVICE_TAGS,
		IAMActions.LIST_MFA_DEVICES,
		IAMActions.LIST_OPEN_ID_CONNECT_PROVIDER_TAGS,
		IAMActions.LIST_OPEN_ID_CONNECT_PROVIDERS,
		IAMActions.LIST_ORGANIZATIONS_FEATURES,
		IAMActions.LIST_POLICIES,
		IAMActions.LIST_POLICIES_GRANTING_SERVICE_ACCESS,
		IAMActions.LIST_POLICY_TAGS,
		IAMActions.LIST_POLICY_VERSIONS,
		IAMActions.LIST_ROLE_POLICIES,
		IAMActions.LIST_ROLE_TAGS,
		IAMActions.LIST_ROLES,
		IAMActions.LIST_SAML_PROVIDER_TAGS,
		IAMActions.LIST_SAML_PROVIDERS,
		IAMActions.LIST_SSH_PUBLIC_KEYS,
		IAMActions.LIST_STS_REGIONAL_ENDPOINTS_STATUS,
		IAMActions.LIST_SERVER_CERTIFICATE_TAGS,
		IAMActions.LIST_SERVER_CERTIFICATES,
		IAMActions.LIST_SERVICE_SPECIFIC_CREDENTIALS,
		IAMActions.LIST_SIGNING_CERTIFICATES,
		IAMActions.LIST_USER_POLICIES,
		IAMActions.LIST_USER_TAGS,
		IAMActions.LIST_USERS,
		IAMActions.LIST_VIRTUAL_MFA_DEVICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		IAMActions.ATTACH_GROUP_POLICY,
		IAMActions.ATTACH_ROLE_POLICY,
		IAMActions.ATTACH_USER_POLICY,
		IAMActions.CREATE_POLICY,
		IAMActions.CREATE_POLICY_VERSION,
		IAMActions.DELETE_ACCOUNT_PASSWORD_POLICY,
		IAMActions.DELETE_GROUP_POLICY,
		IAMActions.DELETE_POLICY,
		IAMActions.DELETE_POLICY_VERSION,
		IAMActions.DELETE_ROLE_PERMISSIONS_BOUNDARY,
		IAMActions.DELETE_ROLE_POLICY,
		IAMActions.DELETE_USER_PERMISSIONS_BOUNDARY,
		IAMActions.DELETE_USER_POLICY,
		IAMActions.DETACH_GROUP_POLICY,
		IAMActions.DETACH_ROLE_POLICY,
		IAMActions.DETACH_USER_POLICY,
		IAMActions.PUT_GROUP_POLICY,
		IAMActions.PUT_ROLE_PERMISSIONS_BOUNDARY,
		IAMActions.PUT_ROLE_POLICY,
		IAMActions.PUT_USER_PERMISSIONS_BOUNDARY,
		IAMActions.PUT_USER_POLICY,
		IAMActions.SET_DEFAULT_POLICY_VERSION,
		IAMActions.UPDATE_ASSUME_ROLE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IAMActions.TAG_INSTANCE_PROFILE,
		IAMActions.TAG_MFA_DEVICE,
		IAMActions.TAG_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.TAG_POLICY,
		IAMActions.TAG_ROLE,
		IAMActions.TAG_SAML_PROVIDER,
		IAMActions.TAG_SERVER_CERTIFICATE,
		IAMActions.TAG_USER,
		IAMActions.UNTAG_INSTANCE_PROFILE,
		IAMActions.UNTAG_MFA_DEVICE,
		IAMActions.UNTAG_OPEN_ID_CONNECT_PROVIDER,
		IAMActions.UNTAG_POLICY,
		IAMActions.UNTAG_ROLE,
		IAMActions.UNTAG_SAML_PROVIDER,
		IAMActions.UNTAG_SERVER_CERTIFICATE,
		IAMActions.UNTAG_USER,
	];
}

const AccessReportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):access-report/(?<entityPath>[^:/?]+)$",
);
const AssumedRoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):assumed-role/(?<roleName>[^:/?]+)/(?<roleSessionName>[^:/?]+)$",
);
const DelegationRequestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):delegation-request/(?<delegationRequestId>[^:/?]+)$",
);
const FederatedUserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):federated-user/(?<userName>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):group/(?<groupNameWithPath>[^:/?]+)$",
);
const InstanceProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):instance-profile/(?<instanceProfileNameWithPath>[^:/?]+)$",
);
const MFAArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):mfa/(?<mfaTokenIdWithPath>[^:/?]+)$",
);
const OidcProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):oidc-provider/(?<oidcProviderName>[^:/?]+)$",
);
const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):policy/(?<policyNameWithPath>[^:/?]+)$",
);
const RoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role/(?<roleNameWithPath>[^:/?]+)$",
);
const SamlProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):saml-provider/(?<samlProviderName>[^:/?]+)$",
);
const ServerCertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):server-certificate/(?<certificateNameWithPath>[^:/?]+)$",
);
const SMSMFAArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):sms-mfa/(?<mfaTokenIdWithPath>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):user/(?<userNameWithPath>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iam resources.
 */
export class IAMResources {
	/**
	 * Builds an ARN for the access-report resource.
	 */
	static accessReport(props: {
		/** The EntityPath component of the ARN. */
		readonly entityPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:access-report/${props.entityPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-report resource.
	 */
	static isValidAccessReportArn(arn: string): boolean {
		return AccessReportArnRegex.test(arn);
	}

	/**
	 * Parses a access-report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessReportArn(arn: string): {
		partition: string;
		account: string;
		entityPath: string;
	} {
		const match = AccessReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			entityPath: match.groups!.entityPath,
		};
	}

	/**
	 * Builds an ARN for the assumed-role resource.
	 */
	static assumedRole(props: {
		/** The RoleName component of the ARN. */
		readonly roleName: string;
		/** The RoleSessionName component of the ARN. */
		readonly roleSessionName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:assumed-role/${props.roleName}/${props.roleSessionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assumed-role resource.
	 */
	static isValidAssumedRoleArn(arn: string): boolean {
		return AssumedRoleArnRegex.test(arn);
	}

	/**
	 * Parses a assumed-role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssumedRoleArn(arn: string): {
		partition: string;
		account: string;
		roleName: string;
		roleSessionName: string;
	} {
		const match = AssumedRoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assumed-role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			roleName: match.groups!.roleName,
			roleSessionName: match.groups!.roleSessionName,
		};
	}

	/**
	 * Builds an ARN for the delegation-request resource.
	 */
	static delegationRequest(props: {
		/** The DelegationRequestId component of the ARN. */
		readonly delegationRequestId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:delegation-request/${props.delegationRequestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the delegation-request resource.
	 */
	static isValidDelegationRequestArn(arn: string): boolean {
		return DelegationRequestArnRegex.test(arn);
	}

	/**
	 * Parses a delegation-request ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDelegationRequestArn(arn: string): {
		partition: string;
		account: string;
		delegationRequestId: string;
	} {
		const match = DelegationRequestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid delegation-request ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			delegationRequestId: match.groups!.delegationRequestId,
		};
	}

	/**
	 * Builds an ARN for the federated-user resource.
	 */
	static federatedUser(props: {
		/** The UserName component of the ARN. */
		readonly userName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:federated-user/${props.userName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the federated-user resource.
	 */
	static isValidFederatedUserArn(arn: string): boolean {
		return FederatedUserArnRegex.test(arn);
	}

	/**
	 * Parses a federated-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFederatedUserArn(arn: string): {
		partition: string;
		account: string;
		userName: string;
	} {
		const match = FederatedUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid federated-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			userName: match.groups!.userName,
		};
	}

	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The GroupNameWithPath component of the ARN. */
		readonly groupNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:group/${props.groupNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		account: string;
		groupNameWithPath: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			groupNameWithPath: match.groups!.groupNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the instance-profile resource.
	 */
	static instanceProfile(props: {
		/** The InstanceProfileNameWithPath component of the ARN. */
		readonly instanceProfileNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:instance-profile/${props.instanceProfileNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance-profile resource.
	 */
	static isValidInstanceProfileArn(arn: string): boolean {
		return InstanceProfileArnRegex.test(arn);
	}

	/**
	 * Parses a instance-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceProfileArn(arn: string): {
		partition: string;
		account: string;
		instanceProfileNameWithPath: string;
	} {
		const match = InstanceProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			instanceProfileNameWithPath: match.groups!.instanceProfileNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the mfa resource.
	 */
	static mfa(props: {
		/** The MfaTokenIdWithPath component of the ARN. */
		readonly mfaTokenIdWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:mfa/${props.mfaTokenIdWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mfa resource.
	 */
	static isValidMFAArn(arn: string): boolean {
		return MFAArnRegex.test(arn);
	}

	/**
	 * Parses a mfa ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMFAArn(arn: string): {
		partition: string;
		account: string;
		mfaTokenIdWithPath: string;
	} {
		const match = MFAArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mfa ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			mfaTokenIdWithPath: match.groups!.mfaTokenIdWithPath,
		};
	}

	/**
	 * Builds an ARN for the oidc-provider resource.
	 */
	static oidcProvider(props: {
		/** The OidcProviderName component of the ARN. */
		readonly oidcProviderName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:oidc-provider/${props.oidcProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oidc-provider resource.
	 */
	static isValidOidcProviderArn(arn: string): boolean {
		return OidcProviderArnRegex.test(arn);
	}

	/**
	 * Parses a oidc-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOidcProviderArn(arn: string): {
		partition: string;
		account: string;
		oidcProviderName: string;
	} {
		const match = OidcProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oidc-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			oidcProviderName: match.groups!.oidcProviderName,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: {
		/** The PolicyNameWithPath component of the ARN. */
		readonly policyNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:policy/${props.policyNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy resource.
	 */
	static isValidPolicyArn(arn: string): boolean {
		return PolicyArnRegex.test(arn);
	}

	/**
	 * Parses a policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyArn(arn: string): {
		partition: string;
		account: string;
		policyNameWithPath: string;
	} {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			policyNameWithPath: match.groups!.policyNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the role resource.
	 */
	static role(props: {
		/** The RoleNameWithPath component of the ARN. */
		readonly roleNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:role/${props.roleNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the role resource.
	 */
	static isValidRoleArn(arn: string): boolean {
		return RoleArnRegex.test(arn);
	}

	/**
	 * Parses a role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoleArn(arn: string): {
		partition: string;
		account: string;
		roleNameWithPath: string;
	} {
		const match = RoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			roleNameWithPath: match.groups!.roleNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the saml-provider resource.
	 */
	static samlProvider(props: {
		/** The SamlProviderName component of the ARN. */
		readonly samlProviderName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:saml-provider/${props.samlProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the saml-provider resource.
	 */
	static isValidSamlProviderArn(arn: string): boolean {
		return SamlProviderArnRegex.test(arn);
	}

	/**
	 * Parses a saml-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSamlProviderArn(arn: string): {
		partition: string;
		account: string;
		samlProviderName: string;
	} {
		const match = SamlProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid saml-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			samlProviderName: match.groups!.samlProviderName,
		};
	}

	/**
	 * Builds an ARN for the server-certificate resource.
	 */
	static serverCertificate(props: {
		/** The CertificateNameWithPath component of the ARN. */
		readonly certificateNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:server-certificate/${props.certificateNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the server-certificate resource.
	 */
	static isValidServerCertificateArn(arn: string): boolean {
		return ServerCertificateArnRegex.test(arn);
	}

	/**
	 * Parses a server-certificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServerCertificateArn(arn: string): {
		partition: string;
		account: string;
		certificateNameWithPath: string;
	} {
		const match = ServerCertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid server-certificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			certificateNameWithPath: match.groups!.certificateNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the sms-mfa resource.
	 */
	static smsMFA(props: {
		/** The MfaTokenIdWithPath component of the ARN. */
		readonly mfaTokenIdWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:sms-mfa/${props.mfaTokenIdWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sms-mfa resource.
	 */
	static isValidSMSMFAArn(arn: string): boolean {
		return SMSMFAArnRegex.test(arn);
	}

	/**
	 * Parses a sms-mfa ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSMSMFAArn(arn: string): {
		partition: string;
		account: string;
		mfaTokenIdWithPath: string;
	} {
		const match = SMSMFAArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sms-mfa ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			mfaTokenIdWithPath: match.groups!.mfaTokenIdWithPath,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The UserNameWithPath component of the ARN. */
		readonly userNameWithPath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:user/${props.userNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		account: string;
		userNameWithPath: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			userNameWithPath: match.groups!.userNameWithPath,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iam.
 */
export class IAMOperations {
	/** IAM actions required for the AcceptDelegationRequest API call. */
	static readonly ACCEPT_DELEGATION_REQUEST: string[] = [
		"iam:AcceptDelegationRequest",
	];
	/** IAM actions required for the AddClientIDToOpenIDConnectProvider API call. */
	static readonly ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:AddClientIDToOpenIDConnectProvider",
	];
	/** IAM actions required for the AddRoleToInstanceProfile API call. */
	static readonly ADD_ROLE_TO_INSTANCE_PROFILE: string[] = [
		"iam:AddRoleToInstanceProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the AddUserToGroup API call. */
	static readonly ADD_USER_TO_GROUP: string[] = ["iam:AddUserToGroup"];
	/** IAM actions required for the AssociateDelegationRequest API call. */
	static readonly ASSOCIATE_DELEGATION_REQUEST: string[] = [
		"iam:AssociateDelegationRequest",
	];
	/** IAM actions required for the AttachGroupPolicy API call. */
	static readonly ATTACH_GROUP_POLICY: string[] = ["iam:AttachGroupPolicy"];
	/** IAM actions required for the AttachRolePolicy API call. */
	static readonly ATTACH_ROLE_POLICY: string[] = ["iam:AttachRolePolicy"];
	/** IAM actions required for the AttachUserPolicy API call. */
	static readonly ATTACH_USER_POLICY: string[] = ["iam:AttachUserPolicy"];
	/** IAM actions required for the ChangePassword API call. */
	static readonly CHANGE_PASSWORD: string[] = ["iam:ChangePassword"];
	/** IAM actions required for the CreateAccessKey API call. */
	static readonly CREATE_ACCESS_KEY: string[] = ["iam:CreateAccessKey"];
	/** IAM actions required for the CreateAccountAlias API call. */
	static readonly CREATE_ACCOUNT_ALIAS: string[] = ["iam:CreateAccountAlias"];
	/** IAM actions required for the CreateDelegationRequest API call. */
	static readonly CREATE_DELEGATION_REQUEST: string[] = [
		"iam:CreateDelegationRequest",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = ["iam:CreateGroup"];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CREATE_INSTANCE_PROFILE: string[] = [
		"iam:CreateInstanceProfile",
		"iam:TagInstanceProfile",
	];
	/** IAM actions required for the CreateLoginProfile API call. */
	static readonly CREATE_LOGIN_PROFILE: string[] = ["iam:CreateLoginProfile"];
	/** IAM actions required for the CreateOpenIDConnectProvider API call. */
	static readonly CREATE_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:CreateOpenIDConnectProvider",
		"iam:TagOpenIDConnectProvider",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = [
		"iam:CreatePolicy",
		"iam:TagPolicy",
	];
	/** IAM actions required for the CreatePolicyVersion API call. */
	static readonly CREATE_POLICY_VERSION: string[] = ["iam:CreatePolicyVersion"];
	/** IAM actions required for the CreateRole API call. */
	static readonly CREATE_ROLE: string[] = ["iam:CreateRole", "iam:TagRole"];
	/** IAM actions required for the CreateSAMLProvider API call. */
	static readonly CREATE_SAML_PROVIDER: string[] = [
		"iam:CreateSAMLProvider",
		"iam:TagSAMLProvider",
	];
	/** IAM actions required for the CreateServiceLinkedRole API call. */
	static readonly CREATE_SERVICE_LINKED_ROLE: string[] = [
		"iam:CreateServiceLinkedRole",
		"iam:PutRolePolicy",
	];
	/** IAM actions required for the CreateServiceSpecificCredential API call. */
	static readonly CREATE_SERVICE_SPECIFIC_CREDENTIAL: string[] = [
		"iam:CreateServiceSpecificCredential",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["iam:CreateUser", "iam:TagUser"];
	/** IAM actions required for the CreateVirtualMFADevice API call. */
	static readonly CREATE_VIRTUAL_MFA_DEVICE: string[] = [
		"iam:CreateVirtualMFADevice",
		"iam:TagMFADevice",
	];
	/** IAM actions required for the DeactivateMFADevice API call. */
	static readonly DEACTIVATE_MFA_DEVICE: string[] = ["iam:DeactivateMFADevice"];
	/** IAM actions required for the DeleteAccessKey API call. */
	static readonly DELETE_ACCESS_KEY: string[] = ["iam:DeleteAccessKey"];
	/** IAM actions required for the DeleteAccountAlias API call. */
	static readonly DELETE_ACCOUNT_ALIAS: string[] = ["iam:DeleteAccountAlias"];
	/** IAM actions required for the DeleteAccountPasswordPolicy API call. */
	static readonly DELETE_ACCOUNT_PASSWORD_POLICY: string[] = [
		"iam:DeleteAccountPasswordPolicy",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["iam:DeleteGroup"];
	/** IAM actions required for the DeleteGroupPolicy API call. */
	static readonly DELETE_GROUP_POLICY: string[] = ["iam:DeleteGroupPolicy"];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DELETE_INSTANCE_PROFILE: string[] = [
		"iam:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteLoginProfile API call. */
	static readonly DELETE_LOGIN_PROFILE: string[] = ["iam:DeleteLoginProfile"];
	/** IAM actions required for the DeleteOpenIDConnectProvider API call. */
	static readonly DELETE_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:DeleteOpenIDConnectProvider",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["iam:DeletePolicy"];
	/** IAM actions required for the DeletePolicyVersion API call. */
	static readonly DELETE_POLICY_VERSION: string[] = ["iam:DeletePolicyVersion"];
	/** IAM actions required for the DeleteRole API call. */
	static readonly DELETE_ROLE: string[] = ["iam:DeleteRole"];
	/** IAM actions required for the DeleteRolePermissionsBoundary API call. */
	static readonly DELETE_ROLE_PERMISSIONS_BOUNDARY: string[] = [
		"iam:DeleteRolePermissionsBoundary",
	];
	/** IAM actions required for the DeleteRolePolicy API call. */
	static readonly DELETE_ROLE_POLICY: string[] = ["iam:DeleteRolePolicy"];
	/** IAM actions required for the DeleteSAMLProvider API call. */
	static readonly DELETE_SAML_PROVIDER: string[] = ["iam:DeleteSAMLProvider"];
	/** IAM actions required for the DeleteSSHPublicKey API call. */
	static readonly DELETE_SSH_PUBLIC_KEY: string[] = ["iam:DeleteSSHPublicKey"];
	/** IAM actions required for the DeleteServerCertificate API call. */
	static readonly DELETE_SERVER_CERTIFICATE: string[] = [
		"iam:DeleteServerCertificate",
	];
	/** IAM actions required for the DeleteServiceLinkedRole API call. */
	static readonly DELETE_SERVICE_LINKED_ROLE: string[] = [
		"iam:DeleteServiceLinkedRole",
	];
	/** IAM actions required for the DeleteServiceSpecificCredential API call. */
	static readonly DELETE_SERVICE_SPECIFIC_CREDENTIAL: string[] = [
		"iam:DeleteServiceSpecificCredential",
	];
	/** IAM actions required for the DeleteSigningCertificate API call. */
	static readonly DELETE_SIGNING_CERTIFICATE: string[] = [
		"iam:DeleteSigningCertificate",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["iam:DeleteUser"];
	/** IAM actions required for the DeleteUserPermissionsBoundary API call. */
	static readonly DELETE_USER_PERMISSIONS_BOUNDARY: string[] = [
		"iam:DeleteUserPermissionsBoundary",
	];
	/** IAM actions required for the DeleteUserPolicy API call. */
	static readonly DELETE_USER_POLICY: string[] = ["iam:DeleteUserPolicy"];
	/** IAM actions required for the DeleteVirtualMFADevice API call. */
	static readonly DELETE_VIRTUAL_MFA_DEVICE: string[] = [
		"iam:DeleteVirtualMFADevice",
	];
	/** IAM actions required for the DetachGroupPolicy API call. */
	static readonly DETACH_GROUP_POLICY: string[] = ["iam:DetachGroupPolicy"];
	/** IAM actions required for the DetachRolePolicy API call. */
	static readonly DETACH_ROLE_POLICY: string[] = ["iam:DetachRolePolicy"];
	/** IAM actions required for the DetachUserPolicy API call. */
	static readonly DETACH_USER_POLICY: string[] = ["iam:DetachUserPolicy"];
	/** IAM actions required for the DisableOrganizationsRootCredentialsManagement API call. */
	static readonly DISABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT: string[] =
		[];
	/** IAM actions required for the DisableOrganizationsRootSessions API call. */
	static readonly DISABLE_ORGANIZATIONS_ROOT_SESSIONS: string[] = [];
	/** IAM actions required for the DisableOutboundWebIdentityFederation API call. */
	static readonly DISABLE_OUTBOUND_WEB_IDENTITY_FEDERATION: string[] = [
		"iam:DisableOutboundWebIdentityFederation",
	];
	/** IAM actions required for the EnableMFADevice API call. */
	static readonly ENABLE_MFA_DEVICE: string[] = ["iam:EnableMFADevice"];
	/** IAM actions required for the EnableOrganizationsRootCredentialsManagement API call. */
	static readonly ENABLE_ORGANIZATIONS_ROOT_CREDENTIALS_MANAGEMENT: string[] =
		[];
	/** IAM actions required for the EnableOrganizationsRootSessions API call. */
	static readonly ENABLE_ORGANIZATIONS_ROOT_SESSIONS: string[] = [];
	/** IAM actions required for the EnableOutboundWebIdentityFederation API call. */
	static readonly ENABLE_OUTBOUND_WEB_IDENTITY_FEDERATION: string[] = [
		"iam:EnableOutboundWebIdentityFederation",
	];
	/** IAM actions required for the GenerateCredentialReport API call. */
	static readonly GENERATE_CREDENTIAL_REPORT: string[] = [
		"iam:GenerateCredentialReport",
	];
	/** IAM actions required for the GenerateOrganizationsAccessReport API call. */
	static readonly GENERATE_ORGANIZATIONS_ACCESS_REPORT: string[] = [
		"iam:GenerateOrganizationsAccessReport",
	];
	/** IAM actions required for the GenerateServiceLastAccessedDetails API call. */
	static readonly GENERATE_SERVICE_LAST_ACCESSED_DETAILS: string[] = [
		"iam:GenerateServiceLastAccessedDetails",
	];
	/** IAM actions required for the GetAccessKeyLastUsed API call. */
	static readonly GET_ACCESS_KEY_LAST_USED: string[] = [
		"iam:GetAccessKeyLastUsed",
	];
	/** IAM actions required for the GetAccountAuthorizationDetails API call. */
	static readonly GET_ACCOUNT_AUTHORIZATION_DETAILS: string[] = [
		"iam:GetAccountAuthorizationDetails",
	];
	/** IAM actions required for the GetAccountPasswordPolicy API call. */
	static readonly GET_ACCOUNT_PASSWORD_POLICY: string[] = [
		"iam:GetAccountPasswordPolicy",
	];
	/** IAM actions required for the GetAccountSummary API call. */
	static readonly GET_ACCOUNT_SUMMARY: string[] = ["iam:GetAccountSummary"];
	/** IAM actions required for the GetContextKeysForCustomPolicy API call. */
	static readonly GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY: string[] = [
		"iam:GetContextKeysForCustomPolicy",
	];
	/** IAM actions required for the GetContextKeysForPrincipalPolicy API call. */
	static readonly GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY: string[] = [
		"iam:GetContextKeysForPrincipalPolicy",
	];
	/** IAM actions required for the GetCredentialReport API call. */
	static readonly GET_CREDENTIAL_REPORT: string[] = ["iam:GetCredentialReport"];
	/** IAM actions required for the GetDelegationRequest API call. */
	static readonly GET_DELEGATION_REQUEST: string[] = [
		"iam:GetDelegationRequest",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["iam:GetGroup"];
	/** IAM actions required for the GetGroupPolicy API call. */
	static readonly GET_GROUP_POLICY: string[] = ["iam:GetGroupPolicy"];
	/** IAM actions required for the GetHumanReadableSummary API call. */
	static readonly GET_HUMAN_READABLE_SUMMARY: string[] = [
		"iam:GetHumanReadableSummary",
	];
	/** IAM actions required for the GetInstanceProfile API call. */
	static readonly GET_INSTANCE_PROFILE: string[] = ["iam:GetInstanceProfile"];
	/** IAM actions required for the GetLoginProfile API call. */
	static readonly GET_LOGIN_PROFILE: string[] = ["iam:GetLoginProfile"];
	/** IAM actions required for the GetMFADevice API call. */
	static readonly GET_MFA_DEVICE: string[] = ["iam:GetMFADevice"];
	/** IAM actions required for the GetOpenIDConnectProvider API call. */
	static readonly GET_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:GetOpenIDConnectProvider",
	];
	/** IAM actions required for the GetOrganizationsAccessReport API call. */
	static readonly GET_ORGANIZATIONS_ACCESS_REPORT: string[] = [
		"iam:GetOrganizationsAccessReport",
	];
	/** IAM actions required for the GetOutboundWebIdentityFederationInfo API call. */
	static readonly GET_OUTBOUND_WEB_IDENTITY_FEDERATION_INFO: string[] = [
		"iam:GetOutboundWebIdentityFederationInfo",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["iam:GetPolicy"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly GET_POLICY_VERSION: string[] = ["iam:GetPolicyVersion"];
	/** IAM actions required for the GetRole API call. */
	static readonly GET_ROLE: string[] = ["iam:GetRole"];
	/** IAM actions required for the GetRolePolicy API call. */
	static readonly GET_ROLE_POLICY: string[] = ["iam:GetRolePolicy"];
	/** IAM actions required for the GetSAMLProvider API call. */
	static readonly GET_SAML_PROVIDER: string[] = ["iam:GetSAMLProvider"];
	/** IAM actions required for the GetSSHPublicKey API call. */
	static readonly GET_SSH_PUBLIC_KEY: string[] = ["iam:GetSSHPublicKey"];
	/** IAM actions required for the GetServerCertificate API call. */
	static readonly GET_SERVER_CERTIFICATE: string[] = [
		"iam:GetServerCertificate",
	];
	/** IAM actions required for the GetServiceLastAccessedDetails API call. */
	static readonly GET_SERVICE_LAST_ACCESSED_DETAILS: string[] = [
		"iam:GetServiceLastAccessedDetails",
	];
	/** IAM actions required for the GetServiceLastAccessedDetailsWithEntities API call. */
	static readonly GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES: string[] = [
		"iam:GetServiceLastAccessedDetailsWithEntities",
	];
	/** IAM actions required for the GetServiceLinkedRoleDeletionStatus API call. */
	static readonly GET_SERVICE_LINKED_ROLE_DELETION_STATUS: string[] = [
		"iam:GetServiceLinkedRoleDeletionStatus",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = ["iam:GetUser"];
	/** IAM actions required for the GetUserPolicy API call. */
	static readonly GET_USER_POLICY: string[] = ["iam:GetUserPolicy"];
	/** IAM actions required for the ListAccessKeys API call. */
	static readonly LIST_ACCESS_KEYS: string[] = ["iam:ListAccessKeys"];
	/** IAM actions required for the ListAccountAliases API call. */
	static readonly LIST_ACCOUNT_ALIASES: string[] = ["iam:ListAccountAliases"];
	/** IAM actions required for the ListAttachedGroupPolicies API call. */
	static readonly LIST_ATTACHED_GROUP_POLICIES: string[] = [
		"iam:ListAttachedGroupPolicies",
	];
	/** IAM actions required for the ListAttachedRolePolicies API call. */
	static readonly LIST_ATTACHED_ROLE_POLICIES: string[] = [
		"iam:ListAttachedRolePolicies",
	];
	/** IAM actions required for the ListAttachedUserPolicies API call. */
	static readonly LIST_ATTACHED_USER_POLICIES: string[] = [
		"iam:ListAttachedUserPolicies",
	];
	/** IAM actions required for the ListDelegationRequests API call. */
	static readonly LIST_DELEGATION_REQUESTS: string[] = [
		"iam:ListDelegationRequests",
	];
	/** IAM actions required for the ListEntitiesForPolicy API call. */
	static readonly LIST_ENTITIES_FOR_POLICY: string[] = [
		"iam:ListEntitiesForPolicy",
	];
	/** IAM actions required for the ListGroupPolicies API call. */
	static readonly LIST_GROUP_POLICIES: string[] = ["iam:ListGroupPolicies"];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["iam:ListGroups"];
	/** IAM actions required for the ListGroupsForUser API call. */
	static readonly LIST_GROUPS_FOR_USER: string[] = ["iam:ListGroupsForUser"];
	/** IAM actions required for the ListInstanceProfileTags API call. */
	static readonly LIST_INSTANCE_PROFILE_TAGS: string[] = [
		"iam:ListInstanceProfileTags",
	];
	/** IAM actions required for the ListInstanceProfiles API call. */
	static readonly LIST_INSTANCE_PROFILES: string[] = [
		"iam:ListInstanceProfiles",
	];
	/** IAM actions required for the ListInstanceProfilesForRole API call. */
	static readonly LIST_INSTANCE_PROFILES_FOR_ROLE: string[] = [
		"iam:ListInstanceProfilesForRole",
	];
	/** IAM actions required for the ListMFADeviceTags API call. */
	static readonly LIST_MFA_DEVICE_TAGS: string[] = ["iam:ListMFADeviceTags"];
	/** IAM actions required for the ListMFADevices API call. */
	static readonly LIST_MFA_DEVICES: string[] = ["iam:ListMFADevices"];
	/** IAM actions required for the ListOpenIDConnectProviderTags API call. */
	static readonly LIST_OPEN_ID_CONNECT_PROVIDER_TAGS: string[] = [
		"iam:ListOpenIDConnectProviderTags",
	];
	/** IAM actions required for the ListOpenIDConnectProviders API call. */
	static readonly LIST_OPEN_ID_CONNECT_PROVIDERS: string[] = [
		"iam:ListOpenIDConnectProviders",
	];
	/** IAM actions required for the ListOrganizationsFeatures API call. */
	static readonly LIST_ORGANIZATIONS_FEATURES: string[] = [];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["iam:ListPolicies"];
	/** IAM actions required for the ListPoliciesGrantingServiceAccess API call. */
	static readonly LIST_POLICIES_GRANTING_SERVICE_ACCESS: string[] = [
		"iam:ListPoliciesGrantingServiceAccess",
	];
	/** IAM actions required for the ListPolicyTags API call. */
	static readonly LIST_POLICY_TAGS: string[] = ["iam:ListPolicyTags"];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly LIST_POLICY_VERSIONS: string[] = ["iam:ListPolicyVersions"];
	/** IAM actions required for the ListRolePolicies API call. */
	static readonly LIST_ROLE_POLICIES: string[] = ["iam:ListRolePolicies"];
	/** IAM actions required for the ListRoleTags API call. */
	static readonly LIST_ROLE_TAGS: string[] = ["iam:ListRoleTags"];
	/** IAM actions required for the ListRoles API call. */
	static readonly LIST_ROLES: string[] = ["iam:ListRoles"];
	/** IAM actions required for the ListSAMLProviderTags API call. */
	static readonly LIST_SAML_PROVIDER_TAGS: string[] = [
		"iam:ListSAMLProviderTags",
	];
	/** IAM actions required for the ListSAMLProviders API call. */
	static readonly LIST_SAML_PROVIDERS: string[] = ["iam:ListSAMLProviders"];
	/** IAM actions required for the ListSSHPublicKeys API call. */
	static readonly LIST_SSH_PUBLIC_KEYS: string[] = ["iam:ListSSHPublicKeys"];
	/** IAM actions required for the ListServerCertificateTags API call. */
	static readonly LIST_SERVER_CERTIFICATE_TAGS: string[] = [
		"iam:ListServerCertificateTags",
	];
	/** IAM actions required for the ListServerCertificates API call. */
	static readonly LIST_SERVER_CERTIFICATES: string[] = [
		"iam:ListServerCertificates",
	];
	/** IAM actions required for the ListServiceSpecificCredentials API call. */
	static readonly LIST_SERVICE_SPECIFIC_CREDENTIALS: string[] = [
		"iam:ListServiceSpecificCredentials",
	];
	/** IAM actions required for the ListSigningCertificates API call. */
	static readonly LIST_SIGNING_CERTIFICATES: string[] = [
		"iam:ListSigningCertificates",
	];
	/** IAM actions required for the ListUserPolicies API call. */
	static readonly LIST_USER_POLICIES: string[] = ["iam:ListUserPolicies"];
	/** IAM actions required for the ListUserTags API call. */
	static readonly LIST_USER_TAGS: string[] = ["iam:ListUserTags"];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["iam:ListUsers"];
	/** IAM actions required for the ListVirtualMFADevices API call. */
	static readonly LIST_VIRTUAL_MFA_DEVICES: string[] = [
		"iam:ListVirtualMFADevices",
	];
	/** IAM actions required for the PutGroupPolicy API call. */
	static readonly PUT_GROUP_POLICY: string[] = ["iam:PutGroupPolicy"];
	/** IAM actions required for the PutRolePermissionsBoundary API call. */
	static readonly PUT_ROLE_PERMISSIONS_BOUNDARY: string[] = [
		"iam:PutRolePermissionsBoundary",
	];
	/** IAM actions required for the PutRolePolicy API call. */
	static readonly PUT_ROLE_POLICY: string[] = ["iam:PutRolePolicy"];
	/** IAM actions required for the PutUserPermissionsBoundary API call. */
	static readonly PUT_USER_PERMISSIONS_BOUNDARY: string[] = [
		"iam:PutUserPermissionsBoundary",
	];
	/** IAM actions required for the PutUserPolicy API call. */
	static readonly PUT_USER_POLICY: string[] = ["iam:PutUserPolicy"];
	/** IAM actions required for the RejectDelegationRequest API call. */
	static readonly REJECT_DELEGATION_REQUEST: string[] = [
		"iam:RejectDelegationRequest",
	];
	/** IAM actions required for the RemoveClientIDFromOpenIDConnectProvider API call. */
	static readonly REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:RemoveClientIDFromOpenIDConnectProvider",
	];
	/** IAM actions required for the RemoveRoleFromInstanceProfile API call. */
	static readonly REMOVE_ROLE_FROM_INSTANCE_PROFILE: string[] = [
		"iam:RemoveRoleFromInstanceProfile",
	];
	/** IAM actions required for the RemoveUserFromGroup API call. */
	static readonly REMOVE_USER_FROM_GROUP: string[] = [
		"iam:RemoveUserFromGroup",
	];
	/** IAM actions required for the ResetServiceSpecificCredential API call. */
	static readonly RESET_SERVICE_SPECIFIC_CREDENTIAL: string[] = [
		"iam:ResetServiceSpecificCredential",
	];
	/** IAM actions required for the ResyncMFADevice API call. */
	static readonly RESYNC_MFA_DEVICE: string[] = ["iam:ResyncMFADevice"];
	/** IAM actions required for the SendDelegationToken API call. */
	static readonly SEND_DELEGATION_TOKEN: string[] = ["iam:SendDelegationToken"];
	/** IAM actions required for the SetDefaultPolicyVersion API call. */
	static readonly SET_DEFAULT_POLICY_VERSION: string[] = [
		"iam:SetDefaultPolicyVersion",
	];
	/** IAM actions required for the SetSecurityTokenServicePreferences API call. */
	static readonly SET_SECURITY_TOKEN_SERVICE_PREFERENCES: string[] = [
		"iam:SetSecurityTokenServicePreferences",
	];
	/** IAM actions required for the SimulateCustomPolicy API call. */
	static readonly SIMULATE_CUSTOM_POLICY: string[] = [
		"iam:SimulateCustomPolicy",
	];
	/** IAM actions required for the SimulatePrincipalPolicy API call. */
	static readonly SIMULATE_PRINCIPAL_POLICY: string[] = [
		"iam:SimulatePrincipalPolicy",
	];
	/** IAM actions required for the TagInstanceProfile API call. */
	static readonly TAG_INSTANCE_PROFILE: string[] = ["iam:TagInstanceProfile"];
	/** IAM actions required for the TagMFADevice API call. */
	static readonly TAG_MFA_DEVICE: string[] = ["iam:TagMFADevice"];
	/** IAM actions required for the TagOpenIDConnectProvider API call. */
	static readonly TAG_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:TagOpenIDConnectProvider",
	];
	/** IAM actions required for the TagPolicy API call. */
	static readonly TAG_POLICY: string[] = ["iam:TagPolicy"];
	/** IAM actions required for the TagRole API call. */
	static readonly TAG_ROLE: string[] = ["iam:TagRole"];
	/** IAM actions required for the TagSAMLProvider API call. */
	static readonly TAG_SAML_PROVIDER: string[] = ["iam:TagSAMLProvider"];
	/** IAM actions required for the TagServerCertificate API call. */
	static readonly TAG_SERVER_CERTIFICATE: string[] = [
		"iam:TagServerCertificate",
	];
	/** IAM actions required for the TagUser API call. */
	static readonly TAG_USER: string[] = ["iam:TagUser"];
	/** IAM actions required for the UntagInstanceProfile API call. */
	static readonly UNTAG_INSTANCE_PROFILE: string[] = [
		"iam:UntagInstanceProfile",
	];
	/** IAM actions required for the UntagMFADevice API call. */
	static readonly UNTAG_MFA_DEVICE: string[] = ["iam:UntagMFADevice"];
	/** IAM actions required for the UntagOpenIDConnectProvider API call. */
	static readonly UNTAG_OPEN_ID_CONNECT_PROVIDER: string[] = [
		"iam:UntagOpenIDConnectProvider",
	];
	/** IAM actions required for the UntagPolicy API call. */
	static readonly UNTAG_POLICY: string[] = ["iam:UntagPolicy"];
	/** IAM actions required for the UntagRole API call. */
	static readonly UNTAG_ROLE: string[] = ["iam:UntagRole"];
	/** IAM actions required for the UntagSAMLProvider API call. */
	static readonly UNTAG_SAML_PROVIDER: string[] = ["iam:UntagSAMLProvider"];
	/** IAM actions required for the UntagServerCertificate API call. */
	static readonly UNTAG_SERVER_CERTIFICATE: string[] = [
		"iam:UntagServerCertificate",
	];
	/** IAM actions required for the UntagUser API call. */
	static readonly UNTAG_USER: string[] = ["iam:UntagUser"];
	/** IAM actions required for the UpdateAccessKey API call. */
	static readonly UPDATE_ACCESS_KEY: string[] = ["iam:UpdateAccessKey"];
	/** IAM actions required for the UpdateAccountPasswordPolicy API call. */
	static readonly UPDATE_ACCOUNT_PASSWORD_POLICY: string[] = [
		"iam:UpdateAccountPasswordPolicy",
	];
	/** IAM actions required for the UpdateAssumeRolePolicy API call. */
	static readonly UPDATE_ASSUME_ROLE_POLICY: string[] = [
		"iam:UpdateAssumeRolePolicy",
	];
	/** IAM actions required for the UpdateDelegationRequest API call. */
	static readonly UPDATE_DELEGATION_REQUEST: string[] = [];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["iam:UpdateGroup"];
	/** IAM actions required for the UpdateLoginProfile API call. */
	static readonly UPDATE_LOGIN_PROFILE: string[] = ["iam:UpdateLoginProfile"];
	/** IAM actions required for the UpdateOpenIDConnectProviderThumbprint API call. */
	static readonly UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT: string[] = [
		"iam:UpdateOpenIDConnectProviderThumbprint",
	];
	/** IAM actions required for the UpdateRole API call. */
	static readonly UPDATE_ROLE: string[] = ["iam:UpdateRole"];
	/** IAM actions required for the UpdateRoleDescription API call. */
	static readonly UPDATE_ROLE_DESCRIPTION: string[] = [
		"iam:UpdateRoleDescription",
	];
	/** IAM actions required for the UpdateSAMLProvider API call. */
	static readonly UPDATE_SAML_PROVIDER: string[] = ["iam:UpdateSAMLProvider"];
	/** IAM actions required for the UpdateSSHPublicKey API call. */
	static readonly UPDATE_SSH_PUBLIC_KEY: string[] = ["iam:UpdateSSHPublicKey"];
	/** IAM actions required for the UpdateServerCertificate API call. */
	static readonly UPDATE_SERVER_CERTIFICATE: string[] = [
		"iam:UpdateServerCertificate",
	];
	/** IAM actions required for the UpdateServiceSpecificCredential API call. */
	static readonly UPDATE_SERVICE_SPECIFIC_CREDENTIAL: string[] = [
		"iam:UpdateServiceSpecificCredential",
	];
	/** IAM actions required for the UpdateSigningCertificate API call. */
	static readonly UPDATE_SIGNING_CERTIFICATE: string[] = [
		"iam:UpdateSigningCertificate",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["iam:UpdateUser"];
	/** IAM actions required for the UploadSSHPublicKey API call. */
	static readonly UPLOAD_SSH_PUBLIC_KEY: string[] = ["iam:UploadSSHPublicKey"];
	/** IAM actions required for the UploadServerCertificate API call. */
	static readonly UPLOAD_SERVER_CERTIFICATE: string[] = [
		"iam:TagServerCertificate",
		"iam:UploadServerCertificate",
	];
	/** IAM actions required for the UploadSigningCertificate API call. */
	static readonly UPLOAD_SIGNING_CERTIFICATE: string[] = [
		"iam:UploadSigningCertificate",
	];
}

/**
 * Condition key constants and builders for iam.
 */
export class IAMConditions {
	/** Condition keys applicable to the AttachGroupPolicy action. */
	static readonly ATTACH_GROUP_POLICY_CONDITION_KEYS: string[] = [
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the AttachRolePolicy action. */
	static readonly ATTACH_ROLE_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the AttachUserPolicy action. */
	static readonly ATTACH_USER_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the CreateDelegationRequest action. */
	static readonly CREATE_DELEGATION_REQUEST_CONDITION_KEYS: string[] = [
		"iam:DelegationDuration",
		"iam:NotificationChannel",
		"iam:TemplateArn",
	];
	/** Condition keys applicable to the CreateInstanceProfile action. */
	static readonly CREATE_INSTANCE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOpenIDConnectProvider action. */
	static readonly CREATE_OPEN_ID_CONNECT_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CREATE_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRole action. */
	static readonly CREATE_ROLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the CreateSAMLProvider action. */
	static readonly CREATE_SAML_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceLinkedRole action. */
	static readonly CREATE_SERVICE_LINKED_ROLE_CONDITION_KEYS: string[] = [
		"iam:AWSServiceName",
	];
	/** Condition keys applicable to the CreateServiceSpecificCredential action. */
	static readonly CREATE_SERVICE_SPECIFIC_CREDENTIAL_CONDITION_KEYS: string[] =
		[
			"iam:ServiceSpecificCredentialAgeDays",
			"iam:ServiceSpecificCredentialServiceName",
		];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the CreateVirtualMFADevice action. */
	static readonly CREATE_VIRTUAL_MFA_DEVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRole action. */
	static readonly DELETE_ROLE_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteRolePermissionsBoundary action. */
	static readonly DELETE_ROLE_PERMISSIONS_BOUNDARY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteRolePolicy action. */
	static readonly DELETE_ROLE_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteServiceSpecificCredential action. */
	static readonly DELETE_SERVICE_SPECIFIC_CREDENTIAL_CONDITION_KEYS: string[] =
		["iam:ServiceSpecificCredentialServiceName"];
	/** Condition keys applicable to the DeleteUserPermissionsBoundary action. */
	static readonly DELETE_USER_PERMISSIONS_BOUNDARY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteUserPolicy action. */
	static readonly DELETE_USER_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DetachGroupPolicy action. */
	static readonly DETACH_GROUP_POLICY_CONDITION_KEYS: string[] = [
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the DetachRolePolicy action. */
	static readonly DETACH_ROLE_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the DetachUserPolicy action. */
	static readonly DETACH_USER_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the EnableMFADevice action. */
	static readonly ENABLE_MFA_DEVICE_CONDITION_KEYS: string[] = [
		"iam:FIDO-FIPS-140-2-certification",
		"iam:FIDO-FIPS-140-3-certification",
		"iam:FIDO-certification",
		"iam:RegisterSecurityKey",
	];
	/** Condition keys applicable to the GenerateOrganizationsAccessReport action. */
	static readonly GENERATE_ORGANIZATIONS_ACCESS_REPORT_CONDITION_KEYS: string[] =
		["iam:OrganizationsPolicyId"];
	/** Condition keys applicable to the GetRole action. */
	static readonly GET_ROLE_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the ListDelegationRequests action. */
	static readonly LIST_DELEGATION_REQUESTS_CONDITION_KEYS: string[] = [
		"iam:DelegationRequestOwner",
	];
	/** Condition keys applicable to the PassRole action. */
	static readonly PASS_ROLE_CONDITION_KEYS: string[] = [
		"iam:AssociatedResourceArn",
		"iam:PassedToService",
	];
	/** Condition keys applicable to the PutRolePermissionsBoundary action. */
	static readonly PUT_ROLE_PERMISSIONS_BOUNDARY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the PutRolePolicy action. */
	static readonly PUT_ROLE_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the PutUserPermissionsBoundary action. */
	static readonly PUT_USER_PERMISSIONS_BOUNDARY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the PutUserPolicy action. */
	static readonly PUT_USER_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the ResetServiceSpecificCredential action. */
	static readonly RESET_SERVICE_SPECIFIC_CREDENTIAL_CONDITION_KEYS: string[] = [
		"iam:ServiceSpecificCredentialServiceName",
	];
	/** Condition keys applicable to the TagInstanceProfile action. */
	static readonly TAG_INSTANCE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMFADevice action. */
	static readonly TAG_MFA_DEVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagOpenIDConnectProvider action. */
	static readonly TAG_OPEN_ID_CONNECT_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagPolicy action. */
	static readonly TAG_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagRole action. */
	static readonly TAG_ROLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagSAMLProvider action. */
	static readonly TAG_SAML_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagServerCertificate action. */
	static readonly TAG_SERVER_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagUser action. */
	static readonly TAG_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagInstanceProfile action. */
	static readonly UNTAG_INSTANCE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagMFADevice action. */
	static readonly UNTAG_MFA_DEVICE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagOpenIDConnectProvider action. */
	static readonly UNTAG_OPEN_ID_CONNECT_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagPolicy action. */
	static readonly UNTAG_POLICY_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagRole action. */
	static readonly UNTAG_ROLE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagSAMLProvider action. */
	static readonly UNTAG_SAML_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagServerCertificate action. */
	static readonly UNTAG_SERVER_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagUser action. */
	static readonly UNTAG_USER_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAssumeRolePolicy action. */
	static readonly UPDATE_ASSUME_ROLE_POLICY_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateRole action. */
	static readonly UPDATE_ROLE_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateRoleDescription action. */
	static readonly UPDATE_ROLE_DESCRIPTION_CONDITION_KEYS: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateServiceSpecificCredential action. */
	static readonly UPDATE_SERVICE_SPECIFIC_CREDENTIAL_CONDITION_KEYS: string[] =
		["iam:ServiceSpecificCredentialServiceName"];
	/** Condition keys applicable to the UploadServerCertificate action. */
	static readonly UPLOAD_SERVER_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: iam:AWSServiceName (String) */
	static readonly AWS_SERVICE_NAME = "iam:AWSServiceName";
	/** Condition key: iam:AssociatedResourceArn (ARN) */
	static readonly ASSOCIATED_RESOURCE_ARN = "iam:AssociatedResourceArn";
	/** Condition key: iam:DelegationDuration (String) */
	static readonly DELEGATION_DURATION = "iam:DelegationDuration";
	/** Condition key: iam:DelegationRequestOwner (ARN) */
	static readonly DELEGATION_REQUEST_OWNER = "iam:DelegationRequestOwner";
	/** Condition key: iam:FIDO-FIPS-140-2-certification (String) */
	static readonly FIDO_FIPS_140_2_CERTIFICATION =
		"iam:FIDO-FIPS-140-2-certification";
	/** Condition key: iam:FIDO-FIPS-140-3-certification (String) */
	static readonly FIDO_FIPS_140_3_CERTIFICATION =
		"iam:FIDO-FIPS-140-3-certification";
	/** Condition key: iam:FIDO-certification (String) */
	static readonly FIDO_CERTIFICATION = "iam:FIDO-certification";
	/** Condition key: iam:NotificationChannel (String) */
	static readonly NOTIFICATION_CHANNEL = "iam:NotificationChannel";
	/** Condition key: iam:OrganizationsPolicyId (String) */
	static readonly ORGANIZATIONS_POLICY_ID = "iam:OrganizationsPolicyId";
	/** Condition key: iam:PassedToService (String) */
	static readonly PASSED_TO_SERVICE = "iam:PassedToService";
	/** Condition key: iam:PermissionsBoundary (ARN) */
	static readonly PERMISSIONS_BOUNDARY = "iam:PermissionsBoundary";
	/** Condition key: iam:PolicyARN (ARN) */
	static readonly POLICY_ARN = "iam:PolicyARN";
	/** Condition key: iam:RegisterSecurityKey (String) */
	static readonly REGISTER_SECURITY_KEY = "iam:RegisterSecurityKey";
	/** Condition key: iam:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "iam:ResourceTag/${TagKey}";
	/** Condition key: iam:ServiceSpecificCredentialAgeDays (Numeric) */
	static readonly SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS =
		"iam:ServiceSpecificCredentialAgeDays";
	/** Condition key: iam:ServiceSpecificCredentialServiceName (String) */
	static readonly SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME =
		"iam:ServiceSpecificCredentialServiceName";
	/** Condition key: iam:TemplateArn (ARN) */
	static readonly TEMPLATE_ARN = "iam:TemplateArn";

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

	/**
	 * Generates a condition block for `iam:AWSServiceName`.
	 */
	static awsServiceName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:AWSServiceName": value } };
	}

	/**
	 * Generates a condition block for `iam:AssociatedResourceArn`.
	 */
	static associatedResourceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:AssociatedResourceArn": value } };
	}

	/**
	 * Generates a condition block for `iam:DelegationDuration`.
	 */
	static delegationDuration(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:DelegationDuration": value } };
	}

	/**
	 * Generates a condition block for `iam:DelegationRequestOwner`.
	 */
	static delegationRequestOwner(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:DelegationRequestOwner": value } };
	}

	/**
	 * Generates a condition block for `iam:FIDO-FIPS-140-2-certification`.
	 */
	static fidoFips1402Certification(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:FIDO-FIPS-140-2-certification": value } };
	}

	/**
	 * Generates a condition block for `iam:FIDO-FIPS-140-3-certification`.
	 */
	static fidoFips1403Certification(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:FIDO-FIPS-140-3-certification": value } };
	}

	/**
	 * Generates a condition block for `iam:FIDO-certification`.
	 */
	static fidoCertification(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:FIDO-certification": value } };
	}

	/**
	 * Generates a condition block for `iam:NotificationChannel`.
	 */
	static notificationChannel(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:NotificationChannel": value } };
	}

	/**
	 * Generates a condition block for `iam:OrganizationsPolicyId`.
	 */
	static organizationsPolicyId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:OrganizationsPolicyId": value } };
	}

	/**
	 * Generates a condition block for `iam:PassedToService`.
	 */
	static passedToService(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:PassedToService": value } };
	}

	/**
	 * Generates a condition block for `iam:PermissionsBoundary`.
	 */
	static permissionsBoundary(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:PermissionsBoundary": value } };
	}

	/**
	 * Generates a condition block for `iam:PolicyARN`.
	 */
	static policyARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:PolicyARN": value } };
	}

	/**
	 * Generates a condition block for `iam:RegisterSecurityKey`.
	 */
	static registerSecurityKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:RegisterSecurityKey": value } };
	}

	/**
	 * Generates a condition block for `iam:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iam:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `iam:ServiceSpecificCredentialAgeDays`.
	 */
	static serviceSpecificCredentialAgeDays(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "iam:ServiceSpecificCredentialAgeDays": value } };
	}

	/**
	 * Generates a condition block for `iam:ServiceSpecificCredentialServiceName`.
	 */
	static serviceSpecificCredentialServiceName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "iam:ServiceSpecificCredentialServiceName": value },
		};
	}

	/**
	 * Generates a condition block for `iam:TemplateArn`.
	 */
	static templateARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:TemplateArn": value } };
	}
}
