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
	static readonly AcceptDelegationRequest = "iam:AcceptDelegationRequest";
	/** [Write] iam:AddClientIDToOpenIDConnectProvider */
	static readonly AddClientIDToOpenIDConnectProvider =
		"iam:AddClientIDToOpenIDConnectProvider";
	/** [Write] iam:AddRoleToInstanceProfile */
	static readonly AddRoleToInstanceProfile = "iam:AddRoleToInstanceProfile";
	/** [Write] iam:AddUserToGroup */
	static readonly AddUserToGroup = "iam:AddUserToGroup";
	/** [Write] iam:AssociateDelegationRequest */
	static readonly AssociateDelegationRequest = "iam:AssociateDelegationRequest";
	/** [PermissionManagement] iam:AttachGroupPolicy */
	static readonly AttachGroupPolicy = "iam:AttachGroupPolicy";
	/** [PermissionManagement] iam:AttachRolePolicy */
	static readonly AttachRolePolicy = "iam:AttachRolePolicy";
	/** [PermissionManagement] iam:AttachUserPolicy */
	static readonly AttachUserPolicy = "iam:AttachUserPolicy";
	/** [Write] iam:ChangePassword */
	static readonly ChangePassword = "iam:ChangePassword";
	/** [Write] iam:CreateAccessKey */
	static readonly CreateAccessKey = "iam:CreateAccessKey";
	/** [Write] iam:CreateAccountAlias */
	static readonly CreateAccountAlias = "iam:CreateAccountAlias";
	/** [Write] iam:CreateDelegationRequest */
	static readonly CreateDelegationRequest = "iam:CreateDelegationRequest";
	/** [Write] iam:CreateGroup */
	static readonly CreateGroup = "iam:CreateGroup";
	/** [Write] iam:CreateInstanceProfile */
	static readonly CreateInstanceProfile = "iam:CreateInstanceProfile";
	/** [Write] iam:CreateLoginProfile */
	static readonly CreateLoginProfile = "iam:CreateLoginProfile";
	/** [Write] iam:CreateOpenIDConnectProvider */
	static readonly CreateOpenIDConnectProvider =
		"iam:CreateOpenIDConnectProvider";
	/** [PermissionManagement] iam:CreatePolicy */
	static readonly CreatePolicy = "iam:CreatePolicy";
	/** [PermissionManagement] iam:CreatePolicyVersion */
	static readonly CreatePolicyVersion = "iam:CreatePolicyVersion";
	/** [Write] iam:CreateRole */
	static readonly CreateRole = "iam:CreateRole";
	/** [Write] iam:CreateSAMLProvider */
	static readonly CreateSAMLProvider = "iam:CreateSAMLProvider";
	/** [Write] iam:CreateServiceLinkedRole */
	static readonly CreateServiceLinkedRole = "iam:CreateServiceLinkedRole";
	/** [Write] iam:CreateServiceSpecificCredential */
	static readonly CreateServiceSpecificCredential =
		"iam:CreateServiceSpecificCredential";
	/** [Write] iam:CreateUser */
	static readonly CreateUser = "iam:CreateUser";
	/** [Write] iam:CreateVirtualMFADevice */
	static readonly CreateVirtualMFADevice = "iam:CreateVirtualMFADevice";
	/** [Write] iam:DeactivateMFADevice */
	static readonly DeactivateMFADevice = "iam:DeactivateMFADevice";
	/** [Write] iam:DeleteAccessKey */
	static readonly DeleteAccessKey = "iam:DeleteAccessKey";
	/** [Write] iam:DeleteAccountAlias */
	static readonly DeleteAccountAlias = "iam:DeleteAccountAlias";
	/** [PermissionManagement] iam:DeleteAccountPasswordPolicy */
	static readonly DeleteAccountPasswordPolicy =
		"iam:DeleteAccountPasswordPolicy";
	/** [Write] iam:DeleteCloudFrontPublicKey */
	static readonly DeleteCloudFrontPublicKey = "iam:DeleteCloudFrontPublicKey";
	/** [Write] iam:DeleteGroup */
	static readonly DeleteGroup = "iam:DeleteGroup";
	/** [PermissionManagement] iam:DeleteGroupPolicy */
	static readonly DeleteGroupPolicy = "iam:DeleteGroupPolicy";
	/** [Write] iam:DeleteInstanceProfile */
	static readonly DeleteInstanceProfile = "iam:DeleteInstanceProfile";
	/** [Write] iam:DeleteLoginProfile */
	static readonly DeleteLoginProfile = "iam:DeleteLoginProfile";
	/** [Write] iam:DeleteOpenIDConnectProvider */
	static readonly DeleteOpenIDConnectProvider =
		"iam:DeleteOpenIDConnectProvider";
	/** [PermissionManagement] iam:DeletePolicy */
	static readonly DeletePolicy = "iam:DeletePolicy";
	/** [PermissionManagement] iam:DeletePolicyVersion */
	static readonly DeletePolicyVersion = "iam:DeletePolicyVersion";
	/** [Write] iam:DeleteRole */
	static readonly DeleteRole = "iam:DeleteRole";
	/** [PermissionManagement] iam:DeleteRolePermissionsBoundary */
	static readonly DeleteRolePermissionsBoundary =
		"iam:DeleteRolePermissionsBoundary";
	/** [PermissionManagement] iam:DeleteRolePolicy */
	static readonly DeleteRolePolicy = "iam:DeleteRolePolicy";
	/** [Write] iam:DeleteSAMLProvider */
	static readonly DeleteSAMLProvider = "iam:DeleteSAMLProvider";
	/** [Write] iam:DeleteSSHPublicKey */
	static readonly DeleteSSHPublicKey = "iam:DeleteSSHPublicKey";
	/** [Write] iam:DeleteServerCertificate */
	static readonly DeleteServerCertificate = "iam:DeleteServerCertificate";
	/** [Write] iam:DeleteServiceLinkedRole */
	static readonly DeleteServiceLinkedRole = "iam:DeleteServiceLinkedRole";
	/** [Write] iam:DeleteServiceSpecificCredential */
	static readonly DeleteServiceSpecificCredential =
		"iam:DeleteServiceSpecificCredential";
	/** [Write] iam:DeleteSigningCertificate */
	static readonly DeleteSigningCertificate = "iam:DeleteSigningCertificate";
	/** [Write] iam:DeleteUser */
	static readonly DeleteUser = "iam:DeleteUser";
	/** [PermissionManagement] iam:DeleteUserPermissionsBoundary */
	static readonly DeleteUserPermissionsBoundary =
		"iam:DeleteUserPermissionsBoundary";
	/** [PermissionManagement] iam:DeleteUserPolicy */
	static readonly DeleteUserPolicy = "iam:DeleteUserPolicy";
	/** [Write] iam:DeleteVirtualMFADevice */
	static readonly DeleteVirtualMFADevice = "iam:DeleteVirtualMFADevice";
	/** [PermissionManagement] iam:DetachGroupPolicy */
	static readonly DetachGroupPolicy = "iam:DetachGroupPolicy";
	/** [PermissionManagement] iam:DetachRolePolicy */
	static readonly DetachRolePolicy = "iam:DetachRolePolicy";
	/** [PermissionManagement] iam:DetachUserPolicy */
	static readonly DetachUserPolicy = "iam:DetachUserPolicy";
	/** [Write] iam:DisableOrganizationsRootCredentialsManagement */
	static readonly DisableOrganizationsRootCredentialsManagement =
		"iam:DisableOrganizationsRootCredentialsManagement";
	/** [Write] iam:DisableOrganizationsRootSessions */
	static readonly DisableOrganizationsRootSessions =
		"iam:DisableOrganizationsRootSessions";
	/** [Write] iam:DisableOutboundWebIdentityFederation */
	static readonly DisableOutboundWebIdentityFederation =
		"iam:DisableOutboundWebIdentityFederation";
	/** [Write] iam:EnableMFADevice */
	static readonly EnableMFADevice = "iam:EnableMFADevice";
	/** [Write] iam:EnableOrganizationsRootCredentialsManagement */
	static readonly EnableOrganizationsRootCredentialsManagement =
		"iam:EnableOrganizationsRootCredentialsManagement";
	/** [Write] iam:EnableOrganizationsRootSessions */
	static readonly EnableOrganizationsRootSessions =
		"iam:EnableOrganizationsRootSessions";
	/** [Write] iam:EnableOutboundWebIdentityFederation */
	static readonly EnableOutboundWebIdentityFederation =
		"iam:EnableOutboundWebIdentityFederation";
	/** [Read] iam:GenerateCredentialReport */
	static readonly GenerateCredentialReport = "iam:GenerateCredentialReport";
	/** [Read] iam:GenerateOrganizationsAccessReport */
	static readonly GenerateOrganizationsAccessReport =
		"iam:GenerateOrganizationsAccessReport";
	/** [Read] iam:GenerateServiceLastAccessedDetails */
	static readonly GenerateServiceLastAccessedDetails =
		"iam:GenerateServiceLastAccessedDetails";
	/** [Read] iam:GetAccessKeyLastUsed */
	static readonly actionGetAccessKeyLastUsed = "iam:GetAccessKeyLastUsed";
	/** [Read] iam:GetAccountAuthorizationDetails */
	static readonly actionGetAccountAuthorizationDetails =
		"iam:GetAccountAuthorizationDetails";
	/** [Read] iam:GetAccountEmailAddress */
	static readonly actionGetAccountEmailAddress = "iam:GetAccountEmailAddress";
	/** [Read] iam:GetAccountName */
	static readonly actionGetAccountName = "iam:GetAccountName";
	/** [Read] iam:GetAccountPasswordPolicy */
	static readonly actionGetAccountPasswordPolicy =
		"iam:GetAccountPasswordPolicy";
	/** [Read] iam:GetAccountProperties */
	static readonly actionGetAccountProperties = "iam:GetAccountProperties";
	/** [List] iam:GetAccountSummary */
	static readonly actionGetAccountSummary = "iam:GetAccountSummary";
	/** [Read] iam:GetCloudFrontPublicKey */
	static readonly actionGetCloudFrontPublicKey = "iam:GetCloudFrontPublicKey";
	/** [Read] iam:GetContextKeysForCustomPolicy */
	static readonly actionGetContextKeysForCustomPolicy =
		"iam:GetContextKeysForCustomPolicy";
	/** [Read] iam:GetContextKeysForPrincipalPolicy */
	static readonly actionGetContextKeysForPrincipalPolicy =
		"iam:GetContextKeysForPrincipalPolicy";
	/** [Read] iam:GetCredentialReport */
	static readonly actionGetCredentialReport = "iam:GetCredentialReport";
	/** [Read] iam:GetDelegationRequest */
	static readonly actionGetDelegationRequest = "iam:GetDelegationRequest";
	/** [Read] iam:GetGroup */
	static readonly actionGetGroup = "iam:GetGroup";
	/** [Read] iam:GetGroupPolicy */
	static readonly actionGetGroupPolicy = "iam:GetGroupPolicy";
	/** [Read] iam:GetHumanReadableSummary */
	static readonly actionGetHumanReadableSummary = "iam:GetHumanReadableSummary";
	/** [Read] iam:GetInstanceProfile */
	static readonly actionGetInstanceProfile = "iam:GetInstanceProfile";
	/** [List] iam:GetLoginProfile */
	static readonly actionGetLoginProfile = "iam:GetLoginProfile";
	/** [Read] iam:GetMFADevice */
	static readonly actionGetMFADevice = "iam:GetMFADevice";
	/** [Read] iam:GetOpenIDConnectProvider */
	static readonly actionGetOpenIDConnectProvider =
		"iam:GetOpenIDConnectProvider";
	/** [Read] iam:GetOrganizationsAccessReport */
	static readonly actionGetOrganizationsAccessReport =
		"iam:GetOrganizationsAccessReport";
	/** [Read] iam:GetOutboundWebIdentityFederationInfo */
	static readonly actionGetOutboundWebIdentityFederationInfo =
		"iam:GetOutboundWebIdentityFederationInfo";
	/** [Read] iam:GetPolicy */
	static readonly actionGetPolicy = "iam:GetPolicy";
	/** [Read] iam:GetPolicyVersion */
	static readonly actionGetPolicyVersion = "iam:GetPolicyVersion";
	/** [Read] iam:GetRole */
	static readonly actionGetRole = "iam:GetRole";
	/** [Read] iam:GetRolePolicy */
	static readonly actionGetRolePolicy = "iam:GetRolePolicy";
	/** [Read] iam:GetRoleTemplateVersion */
	static readonly actionGetRoleTemplateVersion = "iam:GetRoleTemplateVersion";
	/** [Read] iam:GetSAMLProvider */
	static readonly actionGetSAMLProvider = "iam:GetSAMLProvider";
	/** [Read] iam:GetSSHPublicKey */
	static readonly actionGetSSHPublicKey = "iam:GetSSHPublicKey";
	/** [Read] iam:GetServerCertificate */
	static readonly actionGetServerCertificate = "iam:GetServerCertificate";
	/** [Read] iam:GetServiceLastAccessedDetails */
	static readonly actionGetServiceLastAccessedDetails =
		"iam:GetServiceLastAccessedDetails";
	/** [Read] iam:GetServiceLastAccessedDetailsWithEntities */
	static readonly actionGetServiceLastAccessedDetailsWithEntities =
		"iam:GetServiceLastAccessedDetailsWithEntities";
	/** [Read] iam:GetServiceLinkedRoleDeletionStatus */
	static readonly actionGetServiceLinkedRoleDeletionStatus =
		"iam:GetServiceLinkedRoleDeletionStatus";
	/** [Read] iam:GetUser */
	static readonly actionGetUser = "iam:GetUser";
	/** [Read] iam:GetUserPolicy */
	static readonly actionGetUserPolicy = "iam:GetUserPolicy";
	/** [List] iam:ListAccessKeys */
	static readonly ListAccessKeys = "iam:ListAccessKeys";
	/** [List] iam:ListAccountAliases */
	static readonly ListAccountAliases = "iam:ListAccountAliases";
	/** [List] iam:ListAttachedGroupPolicies */
	static readonly ListAttachedGroupPolicies = "iam:ListAttachedGroupPolicies";
	/** [List] iam:ListAttachedRolePolicies */
	static readonly ListAttachedRolePolicies = "iam:ListAttachedRolePolicies";
	/** [List] iam:ListAttachedUserPolicies */
	static readonly ListAttachedUserPolicies = "iam:ListAttachedUserPolicies";
	/** [List] iam:ListCloudFrontPublicKeys */
	static readonly ListCloudFrontPublicKeys = "iam:ListCloudFrontPublicKeys";
	/** [List] iam:ListDelegationRequests */
	static readonly ListDelegationRequests = "iam:ListDelegationRequests";
	/** [List] iam:ListEntitiesForPolicy */
	static readonly ListEntitiesForPolicy = "iam:ListEntitiesForPolicy";
	/** [List] iam:ListGroupPolicies */
	static readonly ListGroupPolicies = "iam:ListGroupPolicies";
	/** [List] iam:ListGroups */
	static readonly ListGroups = "iam:ListGroups";
	/** [List] iam:ListGroupsForUser */
	static readonly ListGroupsForUser = "iam:ListGroupsForUser";
	/** [List] iam:ListInstanceProfileTags */
	static readonly ListInstanceProfileTags = "iam:ListInstanceProfileTags";
	/** [List] iam:ListInstanceProfiles */
	static readonly ListInstanceProfiles = "iam:ListInstanceProfiles";
	/** [List] iam:ListInstanceProfilesForRole */
	static readonly ListInstanceProfilesForRole =
		"iam:ListInstanceProfilesForRole";
	/** [List] iam:ListMFADeviceTags */
	static readonly ListMFADeviceTags = "iam:ListMFADeviceTags";
	/** [List] iam:ListMFADevices */
	static readonly ListMFADevices = "iam:ListMFADevices";
	/** [List] iam:ListOpenIDConnectProviderTags */
	static readonly ListOpenIDConnectProviderTags =
		"iam:ListOpenIDConnectProviderTags";
	/** [List] iam:ListOpenIDConnectProviders */
	static readonly ListOpenIDConnectProviders = "iam:ListOpenIDConnectProviders";
	/** [List] iam:ListOrganizationsFeatures */
	static readonly ListOrganizationsFeatures = "iam:ListOrganizationsFeatures";
	/** [List] iam:ListPolicies */
	static readonly ListPolicies = "iam:ListPolicies";
	/** [List] iam:ListPoliciesGrantingServiceAccess */
	static readonly ListPoliciesGrantingServiceAccess =
		"iam:ListPoliciesGrantingServiceAccess";
	/** [List] iam:ListPolicyTags */
	static readonly ListPolicyTags = "iam:ListPolicyTags";
	/** [List] iam:ListPolicyVersions */
	static readonly ListPolicyVersions = "iam:ListPolicyVersions";
	/** [List] iam:ListRolePolicies */
	static readonly ListRolePolicies = "iam:ListRolePolicies";
	/** [List] iam:ListRoleTags */
	static readonly ListRoleTags = "iam:ListRoleTags";
	/** [List] iam:ListRoles */
	static readonly ListRoles = "iam:ListRoles";
	/** [List] iam:ListSAMLProviderTags */
	static readonly ListSAMLProviderTags = "iam:ListSAMLProviderTags";
	/** [List] iam:ListSAMLProviders */
	static readonly ListSAMLProviders = "iam:ListSAMLProviders";
	/** [List] iam:ListSSHPublicKeys */
	static readonly ListSSHPublicKeys = "iam:ListSSHPublicKeys";
	/** [List] iam:ListSTSRegionalEndpointsStatus */
	static readonly ListSTSRegionalEndpointsStatus =
		"iam:ListSTSRegionalEndpointsStatus";
	/** [List] iam:ListServerCertificateTags */
	static readonly ListServerCertificateTags = "iam:ListServerCertificateTags";
	/** [List] iam:ListServerCertificates */
	static readonly ListServerCertificates = "iam:ListServerCertificates";
	/** [List] iam:ListServiceSpecificCredentials */
	static readonly ListServiceSpecificCredentials =
		"iam:ListServiceSpecificCredentials";
	/** [List] iam:ListSigningCertificates */
	static readonly ListSigningCertificates = "iam:ListSigningCertificates";
	/** [List] iam:ListUserPolicies */
	static readonly ListUserPolicies = "iam:ListUserPolicies";
	/** [List] iam:ListUserTags */
	static readonly ListUserTags = "iam:ListUserTags";
	/** [List] iam:ListUsers */
	static readonly ListUsers = "iam:ListUsers";
	/** [List] iam:ListVirtualMFADevices */
	static readonly ListVirtualMFADevices = "iam:ListVirtualMFADevices";
	/** [Write] iam:PassRole */
	static readonly PassRole = "iam:PassRole";
	/** [Write] iam:PutAccountProperties */
	static readonly PutAccountProperties = "iam:PutAccountProperties";
	/** [PermissionManagement] iam:PutGroupPolicy */
	static readonly PutGroupPolicy = "iam:PutGroupPolicy";
	/** [PermissionManagement] iam:PutRolePermissionsBoundary */
	static readonly PutRolePermissionsBoundary = "iam:PutRolePermissionsBoundary";
	/** [PermissionManagement] iam:PutRolePolicy */
	static readonly PutRolePolicy = "iam:PutRolePolicy";
	/** [PermissionManagement] iam:PutUserPermissionsBoundary */
	static readonly PutUserPermissionsBoundary = "iam:PutUserPermissionsBoundary";
	/** [PermissionManagement] iam:PutUserPolicy */
	static readonly PutUserPolicy = "iam:PutUserPolicy";
	/** [Write] iam:RejectDelegationRequest */
	static readonly RejectDelegationRequest = "iam:RejectDelegationRequest";
	/** [Write] iam:RemoveClientIDFromOpenIDConnectProvider */
	static readonly RemoveClientIDFromOpenIDConnectProvider =
		"iam:RemoveClientIDFromOpenIDConnectProvider";
	/** [Write] iam:RemoveRoleFromInstanceProfile */
	static readonly RemoveRoleFromInstanceProfile =
		"iam:RemoveRoleFromInstanceProfile";
	/** [Write] iam:RemoveUserFromGroup */
	static readonly RemoveUserFromGroup = "iam:RemoveUserFromGroup";
	/** [Write] iam:ResetServiceSpecificCredential */
	static readonly ResetServiceSpecificCredential =
		"iam:ResetServiceSpecificCredential";
	/** [Write] iam:ResyncMFADevice */
	static readonly ResyncMFADevice = "iam:ResyncMFADevice";
	/** [Write] iam:SendDelegationToken */
	static readonly SendDelegationToken = "iam:SendDelegationToken";
	/** [PermissionManagement] iam:SetDefaultPolicyVersion */
	static readonly actionSetDefaultPolicyVersion = "iam:SetDefaultPolicyVersion";
	/** [Write] iam:SetSTSRegionalEndpointStatus */
	static readonly actionSetSTSRegionalEndpointStatus =
		"iam:SetSTSRegionalEndpointStatus";
	/** [Write] iam:SetSecurityTokenServicePreferences */
	static readonly actionSetSecurityTokenServicePreferences =
		"iam:SetSecurityTokenServicePreferences";
	/** [Read] iam:SimulateCustomPolicy */
	static readonly SimulateCustomPolicy = "iam:SimulateCustomPolicy";
	/** [Read] iam:SimulatePrincipalPolicy */
	static readonly SimulatePrincipalPolicy = "iam:SimulatePrincipalPolicy";
	/** [Tagging] iam:TagInstanceProfile */
	static readonly TagInstanceProfile = "iam:TagInstanceProfile";
	/** [Tagging] iam:TagMFADevice */
	static readonly TagMFADevice = "iam:TagMFADevice";
	/** [Tagging] iam:TagOpenIDConnectProvider */
	static readonly TagOpenIDConnectProvider = "iam:TagOpenIDConnectProvider";
	/** [Tagging] iam:TagPolicy */
	static readonly TagPolicy = "iam:TagPolicy";
	/** [Tagging] iam:TagRole */
	static readonly TagRole = "iam:TagRole";
	/** [Tagging] iam:TagSAMLProvider */
	static readonly TagSAMLProvider = "iam:TagSAMLProvider";
	/** [Tagging] iam:TagServerCertificate */
	static readonly TagServerCertificate = "iam:TagServerCertificate";
	/** [Tagging] iam:TagUser */
	static readonly TagUser = "iam:TagUser";
	/** [Tagging] iam:UntagInstanceProfile */
	static readonly UntagInstanceProfile = "iam:UntagInstanceProfile";
	/** [Tagging] iam:UntagMFADevice */
	static readonly UntagMFADevice = "iam:UntagMFADevice";
	/** [Tagging] iam:UntagOpenIDConnectProvider */
	static readonly UntagOpenIDConnectProvider = "iam:UntagOpenIDConnectProvider";
	/** [Tagging] iam:UntagPolicy */
	static readonly UntagPolicy = "iam:UntagPolicy";
	/** [Tagging] iam:UntagRole */
	static readonly UntagRole = "iam:UntagRole";
	/** [Tagging] iam:UntagSAMLProvider */
	static readonly UntagSAMLProvider = "iam:UntagSAMLProvider";
	/** [Tagging] iam:UntagServerCertificate */
	static readonly UntagServerCertificate = "iam:UntagServerCertificate";
	/** [Tagging] iam:UntagUser */
	static readonly UntagUser = "iam:UntagUser";
	/** [Write] iam:UpdateAccessKey */
	static readonly UpdateAccessKey = "iam:UpdateAccessKey";
	/** [Write] iam:UpdateAccountEmailAddress */
	static readonly UpdateAccountEmailAddress = "iam:UpdateAccountEmailAddress";
	/** [Write] iam:UpdateAccountName */
	static readonly UpdateAccountName = "iam:UpdateAccountName";
	/** [Write] iam:UpdateAccountPasswordPolicy */
	static readonly UpdateAccountPasswordPolicy =
		"iam:UpdateAccountPasswordPolicy";
	/** [PermissionManagement] iam:UpdateAssumeRolePolicy */
	static readonly UpdateAssumeRolePolicy = "iam:UpdateAssumeRolePolicy";
	/** [Write] iam:UpdateCloudFrontPublicKey */
	static readonly UpdateCloudFrontPublicKey = "iam:UpdateCloudFrontPublicKey";
	/** [Write] iam:UpdateGroup */
	static readonly UpdateGroup = "iam:UpdateGroup";
	/** [Write] iam:UpdateLoginProfile */
	static readonly UpdateLoginProfile = "iam:UpdateLoginProfile";
	/** [Write] iam:UpdateOpenIDConnectProviderThumbprint */
	static readonly UpdateOpenIDConnectProviderThumbprint =
		"iam:UpdateOpenIDConnectProviderThumbprint";
	/** [Write] iam:UpdateRole */
	static readonly UpdateRole = "iam:UpdateRole";
	/** [Write] iam:UpdateRoleDescription */
	static readonly UpdateRoleDescription = "iam:UpdateRoleDescription";
	/** [Write] iam:UpdateSAMLProvider */
	static readonly UpdateSAMLProvider = "iam:UpdateSAMLProvider";
	/** [Write] iam:UpdateSSHPublicKey */
	static readonly UpdateSSHPublicKey = "iam:UpdateSSHPublicKey";
	/** [Write] iam:UpdateServerCertificate */
	static readonly UpdateServerCertificate = "iam:UpdateServerCertificate";
	/** [Write] iam:UpdateServiceSpecificCredential */
	static readonly UpdateServiceSpecificCredential =
		"iam:UpdateServiceSpecificCredential";
	/** [Write] iam:UpdateSigningCertificate */
	static readonly UpdateSigningCertificate = "iam:UpdateSigningCertificate";
	/** [Write] iam:UpdateUser */
	static readonly UpdateUser = "iam:UpdateUser";
	/** [Write] iam:UploadCloudFrontPublicKey */
	static readonly UploadCloudFrontPublicKey = "iam:UploadCloudFrontPublicKey";
	/** [Write] iam:UploadSSHPublicKey */
	static readonly UploadSSHPublicKey = "iam:UploadSSHPublicKey";
	/** [Write] iam:UploadServerCertificate */
	static readonly UploadServerCertificate = "iam:UploadServerCertificate";
	/** [Write] iam:UploadSigningCertificate */
	static readonly UploadSigningCertificate = "iam:UploadSigningCertificate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IAMActions.GenerateCredentialReport,
		IAMActions.GenerateOrganizationsAccessReport,
		IAMActions.GenerateServiceLastAccessedDetails,
		IAMActions.actionGetAccessKeyLastUsed,
		IAMActions.actionGetAccountAuthorizationDetails,
		IAMActions.actionGetAccountEmailAddress,
		IAMActions.actionGetAccountName,
		IAMActions.actionGetAccountPasswordPolicy,
		IAMActions.actionGetAccountProperties,
		IAMActions.actionGetCloudFrontPublicKey,
		IAMActions.actionGetContextKeysForCustomPolicy,
		IAMActions.actionGetContextKeysForPrincipalPolicy,
		IAMActions.actionGetCredentialReport,
		IAMActions.actionGetDelegationRequest,
		IAMActions.actionGetGroup,
		IAMActions.actionGetGroupPolicy,
		IAMActions.actionGetHumanReadableSummary,
		IAMActions.actionGetInstanceProfile,
		IAMActions.actionGetMFADevice,
		IAMActions.actionGetOpenIDConnectProvider,
		IAMActions.actionGetOrganizationsAccessReport,
		IAMActions.actionGetOutboundWebIdentityFederationInfo,
		IAMActions.actionGetPolicy,
		IAMActions.actionGetPolicyVersion,
		IAMActions.actionGetRole,
		IAMActions.actionGetRolePolicy,
		IAMActions.actionGetRoleTemplateVersion,
		IAMActions.actionGetSAMLProvider,
		IAMActions.actionGetSSHPublicKey,
		IAMActions.actionGetServerCertificate,
		IAMActions.actionGetServiceLastAccessedDetails,
		IAMActions.actionGetServiceLastAccessedDetailsWithEntities,
		IAMActions.actionGetServiceLinkedRoleDeletionStatus,
		IAMActions.actionGetUser,
		IAMActions.actionGetUserPolicy,
		IAMActions.SimulateCustomPolicy,
		IAMActions.SimulatePrincipalPolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IAMActions.AcceptDelegationRequest,
		IAMActions.AddClientIDToOpenIDConnectProvider,
		IAMActions.AddRoleToInstanceProfile,
		IAMActions.AddUserToGroup,
		IAMActions.AssociateDelegationRequest,
		IAMActions.ChangePassword,
		IAMActions.CreateAccessKey,
		IAMActions.CreateAccountAlias,
		IAMActions.CreateDelegationRequest,
		IAMActions.CreateGroup,
		IAMActions.CreateInstanceProfile,
		IAMActions.CreateLoginProfile,
		IAMActions.CreateOpenIDConnectProvider,
		IAMActions.CreateRole,
		IAMActions.CreateSAMLProvider,
		IAMActions.CreateServiceLinkedRole,
		IAMActions.CreateServiceSpecificCredential,
		IAMActions.CreateUser,
		IAMActions.CreateVirtualMFADevice,
		IAMActions.DeactivateMFADevice,
		IAMActions.DeleteAccessKey,
		IAMActions.DeleteAccountAlias,
		IAMActions.DeleteCloudFrontPublicKey,
		IAMActions.DeleteGroup,
		IAMActions.DeleteInstanceProfile,
		IAMActions.DeleteLoginProfile,
		IAMActions.DeleteOpenIDConnectProvider,
		IAMActions.DeleteRole,
		IAMActions.DeleteSAMLProvider,
		IAMActions.DeleteSSHPublicKey,
		IAMActions.DeleteServerCertificate,
		IAMActions.DeleteServiceLinkedRole,
		IAMActions.DeleteServiceSpecificCredential,
		IAMActions.DeleteSigningCertificate,
		IAMActions.DeleteUser,
		IAMActions.DeleteVirtualMFADevice,
		IAMActions.DisableOrganizationsRootCredentialsManagement,
		IAMActions.DisableOrganizationsRootSessions,
		IAMActions.DisableOutboundWebIdentityFederation,
		IAMActions.EnableMFADevice,
		IAMActions.EnableOrganizationsRootCredentialsManagement,
		IAMActions.EnableOrganizationsRootSessions,
		IAMActions.EnableOutboundWebIdentityFederation,
		IAMActions.PassRole,
		IAMActions.PutAccountProperties,
		IAMActions.RejectDelegationRequest,
		IAMActions.RemoveClientIDFromOpenIDConnectProvider,
		IAMActions.RemoveRoleFromInstanceProfile,
		IAMActions.RemoveUserFromGroup,
		IAMActions.ResetServiceSpecificCredential,
		IAMActions.ResyncMFADevice,
		IAMActions.SendDelegationToken,
		IAMActions.actionSetSTSRegionalEndpointStatus,
		IAMActions.actionSetSecurityTokenServicePreferences,
		IAMActions.UpdateAccessKey,
		IAMActions.UpdateAccountEmailAddress,
		IAMActions.UpdateAccountName,
		IAMActions.UpdateAccountPasswordPolicy,
		IAMActions.UpdateCloudFrontPublicKey,
		IAMActions.UpdateGroup,
		IAMActions.UpdateLoginProfile,
		IAMActions.UpdateOpenIDConnectProviderThumbprint,
		IAMActions.UpdateRole,
		IAMActions.UpdateRoleDescription,
		IAMActions.UpdateSAMLProvider,
		IAMActions.UpdateSSHPublicKey,
		IAMActions.UpdateServerCertificate,
		IAMActions.UpdateServiceSpecificCredential,
		IAMActions.UpdateSigningCertificate,
		IAMActions.UpdateUser,
		IAMActions.UploadCloudFrontPublicKey,
		IAMActions.UploadSSHPublicKey,
		IAMActions.UploadServerCertificate,
		IAMActions.UploadSigningCertificate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IAMActions.actionGetAccountSummary,
		IAMActions.actionGetLoginProfile,
		IAMActions.ListAccessKeys,
		IAMActions.ListAccountAliases,
		IAMActions.ListAttachedGroupPolicies,
		IAMActions.ListAttachedRolePolicies,
		IAMActions.ListAttachedUserPolicies,
		IAMActions.ListCloudFrontPublicKeys,
		IAMActions.ListDelegationRequests,
		IAMActions.ListEntitiesForPolicy,
		IAMActions.ListGroupPolicies,
		IAMActions.ListGroups,
		IAMActions.ListGroupsForUser,
		IAMActions.ListInstanceProfileTags,
		IAMActions.ListInstanceProfiles,
		IAMActions.ListInstanceProfilesForRole,
		IAMActions.ListMFADeviceTags,
		IAMActions.ListMFADevices,
		IAMActions.ListOpenIDConnectProviderTags,
		IAMActions.ListOpenIDConnectProviders,
		IAMActions.ListOrganizationsFeatures,
		IAMActions.ListPolicies,
		IAMActions.ListPoliciesGrantingServiceAccess,
		IAMActions.ListPolicyTags,
		IAMActions.ListPolicyVersions,
		IAMActions.ListRolePolicies,
		IAMActions.ListRoleTags,
		IAMActions.ListRoles,
		IAMActions.ListSAMLProviderTags,
		IAMActions.ListSAMLProviders,
		IAMActions.ListSSHPublicKeys,
		IAMActions.ListSTSRegionalEndpointsStatus,
		IAMActions.ListServerCertificateTags,
		IAMActions.ListServerCertificates,
		IAMActions.ListServiceSpecificCredentials,
		IAMActions.ListSigningCertificates,
		IAMActions.ListUserPolicies,
		IAMActions.ListUserTags,
		IAMActions.ListUsers,
		IAMActions.ListVirtualMFADevices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		IAMActions.AttachGroupPolicy,
		IAMActions.AttachRolePolicy,
		IAMActions.AttachUserPolicy,
		IAMActions.CreatePolicy,
		IAMActions.CreatePolicyVersion,
		IAMActions.DeleteAccountPasswordPolicy,
		IAMActions.DeleteGroupPolicy,
		IAMActions.DeletePolicy,
		IAMActions.DeletePolicyVersion,
		IAMActions.DeleteRolePermissionsBoundary,
		IAMActions.DeleteRolePolicy,
		IAMActions.DeleteUserPermissionsBoundary,
		IAMActions.DeleteUserPolicy,
		IAMActions.DetachGroupPolicy,
		IAMActions.DetachRolePolicy,
		IAMActions.DetachUserPolicy,
		IAMActions.PutGroupPolicy,
		IAMActions.PutRolePermissionsBoundary,
		IAMActions.PutRolePolicy,
		IAMActions.PutUserPermissionsBoundary,
		IAMActions.PutUserPolicy,
		IAMActions.actionSetDefaultPolicyVersion,
		IAMActions.UpdateAssumeRolePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IAMActions.TagInstanceProfile,
		IAMActions.TagMFADevice,
		IAMActions.TagOpenIDConnectProvider,
		IAMActions.TagPolicy,
		IAMActions.TagRole,
		IAMActions.TagSAMLProvider,
		IAMActions.TagServerCertificate,
		IAMActions.TagUser,
		IAMActions.UntagInstanceProfile,
		IAMActions.UntagMFADevice,
		IAMActions.UntagOpenIDConnectProvider,
		IAMActions.UntagPolicy,
		IAMActions.UntagRole,
		IAMActions.UntagSAMLProvider,
		IAMActions.UntagServerCertificate,
		IAMActions.UntagUser,
	];
}

/**
 * Properties for building a access-report ARN.
 */
export interface IAMAccessReportArnProps {
	/** The EntityPath component of the ARN. */
	readonly entityPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-report ARN.
 */
export interface IAMAccessReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EntityPath component. */
	readonly entityPath: string;
}

/**
 * Properties for building a assumed-role ARN.
 */
export interface IAMAssumedRoleArnProps {
	/** The RoleName component of the ARN. */
	readonly roleName: string;
	/** The RoleSessionName component of the ARN. */
	readonly roleSessionName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a assumed-role ARN.
 */
export interface IAMAssumedRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RoleName component. */
	readonly roleName: string;
	/** The RoleSessionName component. */
	readonly roleSessionName: string;
}

/**
 * Properties for building a delegation-request ARN.
 */
export interface IAMDelegationRequestArnProps {
	/** The DelegationRequestId component of the ARN. */
	readonly delegationRequestId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a delegation-request ARN.
 */
export interface IAMDelegationRequestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DelegationRequestId component. */
	readonly delegationRequestId: string;
}

/**
 * Properties for building a federated-user ARN.
 */
export interface IAMFederatedUserArnProps {
	/** The UserName component of the ARN. */
	readonly userName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a federated-user ARN.
 */
export interface IAMFederatedUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserName component. */
	readonly userName: string;
}

/**
 * Properties for building a group ARN.
 */
export interface IAMGroupArnProps {
	/** The GroupNameWithPath component of the ARN. */
	readonly groupNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a group ARN.
 */
export interface IAMGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupNameWithPath component. */
	readonly groupNameWithPath: string;
}

/**
 * Properties for building a instance-profile ARN.
 */
export interface IAMInstanceProfileArnProps {
	/** The InstanceProfileNameWithPath component of the ARN. */
	readonly instanceProfileNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance-profile ARN.
 */
export interface IAMInstanceProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceProfileNameWithPath component. */
	readonly instanceProfileNameWithPath: string;
}

/**
 * Properties for building a mfa ARN.
 */
export interface IAMMFAArnProps {
	/** The MfaTokenIdWithPath component of the ARN. */
	readonly mfaTokenIdWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mfa ARN.
 */
export interface IAMMFAArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MfaTokenIdWithPath component. */
	readonly mfaTokenIdWithPath: string;
}

/**
 * Properties for building a oidc-provider ARN.
 */
export interface IAMOidcProviderArnProps {
	/** The OidcProviderName component of the ARN. */
	readonly oidcProviderName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a oidc-provider ARN.
 */
export interface IAMOidcProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OidcProviderName component. */
	readonly oidcProviderName: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface IAMPolicyArnProps {
	/** The PolicyNameWithPath component of the ARN. */
	readonly policyNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy ARN.
 */
export interface IAMPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyNameWithPath component. */
	readonly policyNameWithPath: string;
}

/**
 * Properties for building a role ARN.
 */
export interface IAMRoleArnProps {
	/** The RoleNameWithPath component of the ARN. */
	readonly roleNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a role ARN.
 */
export interface IAMRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RoleNameWithPath component. */
	readonly roleNameWithPath: string;
}

/**
 * Properties for building a role-template ARN.
 */
export interface IAMRoleTemplateArnProps {
	/** The AWSServicePrincipal component of the ARN. */
	readonly awsServicePrincipal: string;
	/** The RoleTemplateName component of the ARN. */
	readonly roleTemplateName: string;
	/** The RoleTemplateMajorVersion component of the ARN. */
	readonly roleTemplateMajorVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a role-template ARN.
 */
export interface IAMRoleTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AWSServicePrincipal component. */
	readonly awsServicePrincipal: string;
	/** The RoleTemplateName component. */
	readonly roleTemplateName: string;
	/** The RoleTemplateMajorVersion component. */
	readonly roleTemplateMajorVersion: string;
}

/**
 * Properties for building a saml-provider ARN.
 */
export interface IAMSamlProviderArnProps {
	/** The SamlProviderName component of the ARN. */
	readonly samlProviderName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a saml-provider ARN.
 */
export interface IAMSamlProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SamlProviderName component. */
	readonly samlProviderName: string;
}

/**
 * Properties for building a server-certificate ARN.
 */
export interface IAMServerCertificateArnProps {
	/** The CertificateNameWithPath component of the ARN. */
	readonly certificateNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a server-certificate ARN.
 */
export interface IAMServerCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateNameWithPath component. */
	readonly certificateNameWithPath: string;
}

/**
 * Properties for building a sms-mfa ARN.
 */
export interface IAMSMSMFAArnProps {
	/** The MfaTokenIdWithPath component of the ARN. */
	readonly mfaTokenIdWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sms-mfa ARN.
 */
export interface IAMSMSMFAArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MfaTokenIdWithPath component. */
	readonly mfaTokenIdWithPath: string;
}

/**
 * Properties for building a user ARN.
 */
export interface IAMUserArnProps {
	/** The UserNameWithPath component of the ARN. */
	readonly userNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface IAMUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserNameWithPath component. */
	readonly userNameWithPath: string;
}

const AccessReportArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):access-report\/(?<entityPath>[^:/?]+)$/;
const AssumedRoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):assumed-role\/(?<roleName>[^:/?]+)\/(?<roleSessionName>[^:/?]+)$/;
const DelegationRequestArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):delegation-request\/(?<delegationRequestId>[^:/?]+)$/;
const FederatedUserArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):federated-user\/(?<userName>[^:/?]+)$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):group\/(?<groupNameWithPath>[^:/?]+)$/;
const InstanceProfileArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):instance-profile\/(?<instanceProfileNameWithPath>[^:/?]+)$/;
const MFAArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):mfa\/(?<mfaTokenIdWithPath>[^:/?]+)$/;
const OidcProviderArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):oidc-provider\/(?<oidcProviderName>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):policy\/(?<policyNameWithPath>[^:/?]+)$/;
const RoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role\/(?<roleNameWithPath>[^:/?]+)$/;
const RoleTemplateArnRegex =
	/^arn:(?<partition>[^:]+):iam::aws:role-template\/(?<awsServicePrincipal>[^:/?]+)\/(?<roleTemplateName>[^:/?]+):(?<roleTemplateMajorVersion>[^:/?]+)$/;
const SamlProviderArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):saml-provider\/(?<samlProviderName>[^:/?]+)$/;
const ServerCertificateArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):server-certificate\/(?<certificateNameWithPath>[^:/?]+)$/;
const SMSMFAArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):sms-mfa\/(?<mfaTokenIdWithPath>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):user\/(?<userNameWithPath>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iam resources.
 */
export class IAMResources {
	/**
	 * Builds an ARN for the access-report resource.
	 */
	static accessReport(props: IAMAccessReportArnProps): string {
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
	static parseAccessReportArn(arn: string): IAMAccessReportArnComponents {
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
	static assumedRole(props: IAMAssumedRoleArnProps): string {
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
	static parseAssumedRoleArn(arn: string): IAMAssumedRoleArnComponents {
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
	static delegationRequest(props: IAMDelegationRequestArnProps): string {
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
	static parseDelegationRequestArn(
		arn: string,
	): IAMDelegationRequestArnComponents {
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
	static federatedUser(props: IAMFederatedUserArnProps): string {
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
	static parseFederatedUserArn(arn: string): IAMFederatedUserArnComponents {
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
	static group(props: IAMGroupArnProps): string {
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
	static parseGroupArn(arn: string): IAMGroupArnComponents {
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
	static instanceProfile(props: IAMInstanceProfileArnProps): string {
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
	static parseInstanceProfileArn(arn: string): IAMInstanceProfileArnComponents {
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
	static mfa(props: IAMMFAArnProps): string {
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
	static parseMFAArn(arn: string): IAMMFAArnComponents {
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
	static oidcProvider(props: IAMOidcProviderArnProps): string {
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
	static parseOidcProviderArn(arn: string): IAMOidcProviderArnComponents {
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
	static policy(props: IAMPolicyArnProps): string {
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
	static parsePolicyArn(arn: string): IAMPolicyArnComponents {
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
	static role(props: IAMRoleArnProps): string {
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
	static parseRoleArn(arn: string): IAMRoleArnComponents {
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
	 * Builds an ARN for the role-template resource.
	 */
	static roleTemplate(props: IAMRoleTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:iam::aws:role-template/${props.awsServicePrincipal}/${props.roleTemplateName}:${props.roleTemplateMajorVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the role-template resource.
	 */
	static isValidRoleTemplateArn(arn: string): boolean {
		return RoleTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a role-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoleTemplateArn(arn: string): IAMRoleTemplateArnComponents {
		const match = RoleTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid role-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			awsServicePrincipal: match.groups!.awsServicePrincipal,
			roleTemplateName: match.groups!.roleTemplateName,
			roleTemplateMajorVersion: match.groups!.roleTemplateMajorVersion,
		};
	}

	/**
	 * Builds an ARN for the saml-provider resource.
	 */
	static samlProvider(props: IAMSamlProviderArnProps): string {
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
	static parseSamlProviderArn(arn: string): IAMSamlProviderArnComponents {
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
	static serverCertificate(props: IAMServerCertificateArnProps): string {
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
	static parseServerCertificateArn(
		arn: string,
	): IAMServerCertificateArnComponents {
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
	static smsMFA(props: IAMSMSMFAArnProps): string {
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
	static parseSMSMFAArn(arn: string): IAMSMSMFAArnComponents {
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
	static user(props: IAMUserArnProps): string {
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
	static parseUserArn(arn: string): IAMUserArnComponents {
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
	static readonly AcceptDelegationRequest: string[] = [
		"iam:AcceptDelegationRequest",
	];
	/** IAM actions required for the AcquireRole API call. */
	static readonly AcquireRole: string[] = [
		"iam:AttachRolePolicy",
		"iam:CreateRole",
		"iam:GetRole",
		"iam:GetRoleTemplateVersion",
		"iam:PutRolePermissionsBoundary",
		"iam:PutRolePolicy",
		"iam:TagRole",
	];
	/** IAM actions required for the AddClientIDToOpenIDConnectProvider API call. */
	static readonly AddClientIDToOpenIDConnectProvider: string[] = [
		"iam:AddClientIDToOpenIDConnectProvider",
	];
	/** IAM actions required for the AddRoleToInstanceProfile API call. */
	static readonly AddRoleToInstanceProfile: string[] = [
		"iam:AddRoleToInstanceProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the AddUserToGroup API call. */
	static readonly AddUserToGroup: string[] = ["iam:AddUserToGroup"];
	/** IAM actions required for the AssociateDelegationRequest API call. */
	static readonly AssociateDelegationRequest: string[] = [
		"iam:AssociateDelegationRequest",
	];
	/** IAM actions required for the AttachGroupPolicy API call. */
	static readonly AttachGroupPolicy: string[] = ["iam:AttachGroupPolicy"];
	/** IAM actions required for the AttachRolePolicy API call. */
	static readonly AttachRolePolicy: string[] = ["iam:AttachRolePolicy"];
	/** IAM actions required for the AttachUserPolicy API call. */
	static readonly AttachUserPolicy: string[] = ["iam:AttachUserPolicy"];
	/** IAM actions required for the ChangePassword API call. */
	static readonly ChangePassword: string[] = ["iam:ChangePassword"];
	/** IAM actions required for the CreateAccessKey API call. */
	static readonly CreateAccessKey: string[] = ["iam:CreateAccessKey"];
	/** IAM actions required for the CreateAccountAlias API call. */
	static readonly CreateAccountAlias: string[] = ["iam:CreateAccountAlias"];
	/** IAM actions required for the CreateDelegationRequest API call. */
	static readonly CreateDelegationRequest: string[] = [
		"iam:CreateDelegationRequest",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = ["iam:CreateGroup"];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CreateInstanceProfile: string[] = [
		"iam:CreateInstanceProfile",
		"iam:TagInstanceProfile",
	];
	/** IAM actions required for the CreateLoginProfile API call. */
	static readonly CreateLoginProfile: string[] = ["iam:CreateLoginProfile"];
	/** IAM actions required for the CreateOpenIDConnectProvider API call. */
	static readonly CreateOpenIDConnectProvider: string[] = [
		"iam:CreateOpenIDConnectProvider",
		"iam:TagOpenIDConnectProvider",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = [
		"iam:CreatePolicy",
		"iam:TagPolicy",
	];
	/** IAM actions required for the CreatePolicyVersion API call. */
	static readonly CreatePolicyVersion: string[] = ["iam:CreatePolicyVersion"];
	/** IAM actions required for the CreateRole API call. */
	static readonly CreateRole: string[] = ["iam:CreateRole", "iam:TagRole"];
	/** IAM actions required for the CreateSAMLProvider API call. */
	static readonly CreateSAMLProvider: string[] = [
		"iam:CreateSAMLProvider",
		"iam:TagSAMLProvider",
	];
	/** IAM actions required for the CreateServiceLinkedRole API call. */
	static readonly CreateServiceLinkedRole: string[] = [
		"iam:CreateServiceLinkedRole",
		"iam:PutRolePolicy",
	];
	/** IAM actions required for the CreateServiceSpecificCredential API call. */
	static readonly CreateServiceSpecificCredential: string[] = [
		"iam:CreateServiceSpecificCredential",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["iam:CreateUser", "iam:TagUser"];
	/** IAM actions required for the CreateVirtualMFADevice API call. */
	static readonly CreateVirtualMFADevice: string[] = [
		"iam:CreateVirtualMFADevice",
		"iam:TagMFADevice",
	];
	/** IAM actions required for the DeactivateMFADevice API call. */
	static readonly DeactivateMFADevice: string[] = ["iam:DeactivateMFADevice"];
	/** IAM actions required for the DeleteAccessKey API call. */
	static readonly DeleteAccessKey: string[] = ["iam:DeleteAccessKey"];
	/** IAM actions required for the DeleteAccountAlias API call. */
	static readonly DeleteAccountAlias: string[] = ["iam:DeleteAccountAlias"];
	/** IAM actions required for the DeleteAccountPasswordPolicy API call. */
	static readonly DeleteAccountPasswordPolicy: string[] = [
		"iam:DeleteAccountPasswordPolicy",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["iam:DeleteGroup"];
	/** IAM actions required for the DeleteGroupPolicy API call. */
	static readonly DeleteGroupPolicy: string[] = ["iam:DeleteGroupPolicy"];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DeleteInstanceProfile: string[] = [
		"iam:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteLoginProfile API call. */
	static readonly DeleteLoginProfile: string[] = ["iam:DeleteLoginProfile"];
	/** IAM actions required for the DeleteOpenIDConnectProvider API call. */
	static readonly DeleteOpenIDConnectProvider: string[] = [
		"iam:DeleteOpenIDConnectProvider",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["iam:DeletePolicy"];
	/** IAM actions required for the DeletePolicyVersion API call. */
	static readonly DeletePolicyVersion: string[] = ["iam:DeletePolicyVersion"];
	/** IAM actions required for the DeleteRole API call. */
	static readonly DeleteRole: string[] = ["iam:DeleteRole"];
	/** IAM actions required for the DeleteRolePermissionsBoundary API call. */
	static readonly DeleteRolePermissionsBoundary: string[] = [
		"iam:DeleteRolePermissionsBoundary",
	];
	/** IAM actions required for the DeleteRolePolicy API call. */
	static readonly DeleteRolePolicy: string[] = ["iam:DeleteRolePolicy"];
	/** IAM actions required for the DeleteSAMLProvider API call. */
	static readonly DeleteSAMLProvider: string[] = ["iam:DeleteSAMLProvider"];
	/** IAM actions required for the DeleteSSHPublicKey API call. */
	static readonly DeleteSSHPublicKey: string[] = ["iam:DeleteSSHPublicKey"];
	/** IAM actions required for the DeleteServerCertificate API call. */
	static readonly DeleteServerCertificate: string[] = [
		"iam:DeleteServerCertificate",
	];
	/** IAM actions required for the DeleteServiceLinkedRole API call. */
	static readonly DeleteServiceLinkedRole: string[] = [
		"iam:DeleteServiceLinkedRole",
	];
	/** IAM actions required for the DeleteServiceSpecificCredential API call. */
	static readonly DeleteServiceSpecificCredential: string[] = [
		"iam:DeleteServiceSpecificCredential",
	];
	/** IAM actions required for the DeleteSigningCertificate API call. */
	static readonly DeleteSigningCertificate: string[] = [
		"iam:DeleteSigningCertificate",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["iam:DeleteUser"];
	/** IAM actions required for the DeleteUserPermissionsBoundary API call. */
	static readonly DeleteUserPermissionsBoundary: string[] = [
		"iam:DeleteUserPermissionsBoundary",
	];
	/** IAM actions required for the DeleteUserPolicy API call. */
	static readonly DeleteUserPolicy: string[] = ["iam:DeleteUserPolicy"];
	/** IAM actions required for the DeleteVirtualMFADevice API call. */
	static readonly DeleteVirtualMFADevice: string[] = [
		"iam:DeleteVirtualMFADevice",
	];
	/** IAM actions required for the DetachGroupPolicy API call. */
	static readonly DetachGroupPolicy: string[] = ["iam:DetachGroupPolicy"];
	/** IAM actions required for the DetachRolePolicy API call. */
	static readonly DetachRolePolicy: string[] = ["iam:DetachRolePolicy"];
	/** IAM actions required for the DetachUserPolicy API call. */
	static readonly DetachUserPolicy: string[] = ["iam:DetachUserPolicy"];
	/** IAM actions required for the DisableOrganizationsRootCredentialsManagement API call. */
	static readonly DisableOrganizationsRootCredentialsManagement: string[] = [];
	/** IAM actions required for the DisableOrganizationsRootSessions API call. */
	static readonly DisableOrganizationsRootSessions: string[] = [];
	/** IAM actions required for the DisableOutboundWebIdentityFederation API call. */
	static readonly DisableOutboundWebIdentityFederation: string[] = [
		"iam:DisableOutboundWebIdentityFederation",
	];
	/** IAM actions required for the EnableMFADevice API call. */
	static readonly EnableMFADevice: string[] = ["iam:EnableMFADevice"];
	/** IAM actions required for the EnableOrganizationsRootCredentialsManagement API call. */
	static readonly EnableOrganizationsRootCredentialsManagement: string[] = [];
	/** IAM actions required for the EnableOrganizationsRootSessions API call. */
	static readonly EnableOrganizationsRootSessions: string[] = [];
	/** IAM actions required for the EnableOutboundWebIdentityFederation API call. */
	static readonly EnableOutboundWebIdentityFederation: string[] = [
		"iam:EnableOutboundWebIdentityFederation",
	];
	/** IAM actions required for the GenerateCredentialReport API call. */
	static readonly GenerateCredentialReport: string[] = [
		"iam:GenerateCredentialReport",
	];
	/** IAM actions required for the GenerateOrganizationsAccessReport API call. */
	static readonly GenerateOrganizationsAccessReport: string[] = [
		"iam:GenerateOrganizationsAccessReport",
	];
	/** IAM actions required for the GenerateServiceLastAccessedDetails API call. */
	static readonly GenerateServiceLastAccessedDetails: string[] = [
		"iam:GenerateServiceLastAccessedDetails",
	];
	/** IAM actions required for the GetAccessKeyLastUsed API call. */
	static readonly opGetAccessKeyLastUsed: string[] = [
		"iam:GetAccessKeyLastUsed",
	];
	/** IAM actions required for the GetAccountAuthorizationDetails API call. */
	static readonly opGetAccountAuthorizationDetails: string[] = [
		"iam:GetAccountAuthorizationDetails",
	];
	/** IAM actions required for the GetAccountPasswordPolicy API call. */
	static readonly opGetAccountPasswordPolicy: string[] = [
		"iam:GetAccountPasswordPolicy",
	];
	/** IAM actions required for the GetAccountProperties API call. */
	static readonly opGetAccountProperties: string[] = [
		"iam:GetAccountProperties",
	];
	/** IAM actions required for the GetAccountSummary API call. */
	static readonly opGetAccountSummary: string[] = ["iam:GetAccountSummary"];
	/** IAM actions required for the GetContextKeysForCustomPolicy API call. */
	static readonly opGetContextKeysForCustomPolicy: string[] = [
		"iam:GetContextKeysForCustomPolicy",
	];
	/** IAM actions required for the GetContextKeysForPrincipalPolicy API call. */
	static readonly opGetContextKeysForPrincipalPolicy: string[] = [
		"iam:GetContextKeysForPrincipalPolicy",
	];
	/** IAM actions required for the GetCredentialReport API call. */
	static readonly opGetCredentialReport: string[] = ["iam:GetCredentialReport"];
	/** IAM actions required for the GetDelegationRequest API call. */
	static readonly opGetDelegationRequest: string[] = [
		"iam:GetDelegationRequest",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = ["iam:GetGroup"];
	/** IAM actions required for the GetGroupPolicy API call. */
	static readonly opGetGroupPolicy: string[] = ["iam:GetGroupPolicy"];
	/** IAM actions required for the GetHumanReadableSummary API call. */
	static readonly opGetHumanReadableSummary: string[] = [
		"iam:GetHumanReadableSummary",
	];
	/** IAM actions required for the GetInstanceProfile API call. */
	static readonly opGetInstanceProfile: string[] = ["iam:GetInstanceProfile"];
	/** IAM actions required for the GetLoginProfile API call. */
	static readonly opGetLoginProfile: string[] = ["iam:GetLoginProfile"];
	/** IAM actions required for the GetMFADevice API call. */
	static readonly opGetMFADevice: string[] = ["iam:GetMFADevice"];
	/** IAM actions required for the GetOpenIDConnectProvider API call. */
	static readonly opGetOpenIDConnectProvider: string[] = [
		"iam:GetOpenIDConnectProvider",
	];
	/** IAM actions required for the GetOrganizationsAccessReport API call. */
	static readonly opGetOrganizationsAccessReport: string[] = [
		"iam:GetOrganizationsAccessReport",
	];
	/** IAM actions required for the GetOutboundWebIdentityFederationInfo API call. */
	static readonly opGetOutboundWebIdentityFederationInfo: string[] = [
		"iam:GetOutboundWebIdentityFederationInfo",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["iam:GetPolicy"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly opGetPolicyVersion: string[] = ["iam:GetPolicyVersion"];
	/** IAM actions required for the GetRole API call. */
	static readonly opGetRole: string[] = ["iam:GetRole"];
	/** IAM actions required for the GetRolePolicy API call. */
	static readonly opGetRolePolicy: string[] = ["iam:GetRolePolicy"];
	/** IAM actions required for the GetRoleTemplateVersion API call. */
	static readonly opGetRoleTemplateVersion: string[] = [
		"iam:GetRoleTemplateVersion",
	];
	/** IAM actions required for the GetSAMLProvider API call. */
	static readonly opGetSAMLProvider: string[] = ["iam:GetSAMLProvider"];
	/** IAM actions required for the GetSSHPublicKey API call. */
	static readonly opGetSSHPublicKey: string[] = ["iam:GetSSHPublicKey"];
	/** IAM actions required for the GetServerCertificate API call. */
	static readonly opGetServerCertificate: string[] = [
		"iam:GetServerCertificate",
	];
	/** IAM actions required for the GetServiceLastAccessedDetails API call. */
	static readonly opGetServiceLastAccessedDetails: string[] = [
		"iam:GetServiceLastAccessedDetails",
	];
	/** IAM actions required for the GetServiceLastAccessedDetailsWithEntities API call. */
	static readonly opGetServiceLastAccessedDetailsWithEntities: string[] = [
		"iam:GetServiceLastAccessedDetailsWithEntities",
	];
	/** IAM actions required for the GetServiceLinkedRoleDeletionStatus API call. */
	static readonly opGetServiceLinkedRoleDeletionStatus: string[] = [
		"iam:GetServiceLinkedRoleDeletionStatus",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly opGetUser: string[] = ["iam:GetUser"];
	/** IAM actions required for the GetUserPolicy API call. */
	static readonly opGetUserPolicy: string[] = ["iam:GetUserPolicy"];
	/** IAM actions required for the ListAccessKeys API call. */
	static readonly ListAccessKeys: string[] = ["iam:ListAccessKeys"];
	/** IAM actions required for the ListAccountAliases API call. */
	static readonly ListAccountAliases: string[] = ["iam:ListAccountAliases"];
	/** IAM actions required for the ListAttachedGroupPolicies API call. */
	static readonly ListAttachedGroupPolicies: string[] = [
		"iam:ListAttachedGroupPolicies",
	];
	/** IAM actions required for the ListAttachedRolePolicies API call. */
	static readonly ListAttachedRolePolicies: string[] = [
		"iam:ListAttachedRolePolicies",
	];
	/** IAM actions required for the ListAttachedUserPolicies API call. */
	static readonly ListAttachedUserPolicies: string[] = [
		"iam:ListAttachedUserPolicies",
	];
	/** IAM actions required for the ListDelegationRequests API call. */
	static readonly ListDelegationRequests: string[] = [
		"iam:ListDelegationRequests",
	];
	/** IAM actions required for the ListEntitiesForPolicy API call. */
	static readonly ListEntitiesForPolicy: string[] = [
		"iam:ListEntitiesForPolicy",
	];
	/** IAM actions required for the ListGroupPolicies API call. */
	static readonly ListGroupPolicies: string[] = ["iam:ListGroupPolicies"];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["iam:ListGroups"];
	/** IAM actions required for the ListGroupsForUser API call. */
	static readonly ListGroupsForUser: string[] = ["iam:ListGroupsForUser"];
	/** IAM actions required for the ListInstanceProfileTags API call. */
	static readonly ListInstanceProfileTags: string[] = [
		"iam:ListInstanceProfileTags",
	];
	/** IAM actions required for the ListInstanceProfiles API call. */
	static readonly ListInstanceProfiles: string[] = ["iam:ListInstanceProfiles"];
	/** IAM actions required for the ListInstanceProfilesForRole API call. */
	static readonly ListInstanceProfilesForRole: string[] = [
		"iam:ListInstanceProfilesForRole",
	];
	/** IAM actions required for the ListMFADeviceTags API call. */
	static readonly ListMFADeviceTags: string[] = ["iam:ListMFADeviceTags"];
	/** IAM actions required for the ListMFADevices API call. */
	static readonly ListMFADevices: string[] = ["iam:ListMFADevices"];
	/** IAM actions required for the ListOpenIDConnectProviderTags API call. */
	static readonly ListOpenIDConnectProviderTags: string[] = [
		"iam:ListOpenIDConnectProviderTags",
	];
	/** IAM actions required for the ListOpenIDConnectProviders API call. */
	static readonly ListOpenIDConnectProviders: string[] = [
		"iam:ListOpenIDConnectProviders",
	];
	/** IAM actions required for the ListOrganizationsFeatures API call. */
	static readonly ListOrganizationsFeatures: string[] = [];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["iam:ListPolicies"];
	/** IAM actions required for the ListPoliciesGrantingServiceAccess API call. */
	static readonly ListPoliciesGrantingServiceAccess: string[] = [
		"iam:ListPoliciesGrantingServiceAccess",
	];
	/** IAM actions required for the ListPolicyTags API call. */
	static readonly ListPolicyTags: string[] = ["iam:ListPolicyTags"];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly ListPolicyVersions: string[] = ["iam:ListPolicyVersions"];
	/** IAM actions required for the ListRolePolicies API call. */
	static readonly ListRolePolicies: string[] = ["iam:ListRolePolicies"];
	/** IAM actions required for the ListRoleTags API call. */
	static readonly ListRoleTags: string[] = ["iam:ListRoleTags"];
	/** IAM actions required for the ListRoles API call. */
	static readonly ListRoles: string[] = ["iam:ListRoles"];
	/** IAM actions required for the ListSAMLProviderTags API call. */
	static readonly ListSAMLProviderTags: string[] = ["iam:ListSAMLProviderTags"];
	/** IAM actions required for the ListSAMLProviders API call. */
	static readonly ListSAMLProviders: string[] = ["iam:ListSAMLProviders"];
	/** IAM actions required for the ListSSHPublicKeys API call. */
	static readonly ListSSHPublicKeys: string[] = ["iam:ListSSHPublicKeys"];
	/** IAM actions required for the ListServerCertificateTags API call. */
	static readonly ListServerCertificateTags: string[] = [
		"iam:ListServerCertificateTags",
	];
	/** IAM actions required for the ListServerCertificates API call. */
	static readonly ListServerCertificates: string[] = [
		"iam:ListServerCertificates",
	];
	/** IAM actions required for the ListServiceSpecificCredentials API call. */
	static readonly ListServiceSpecificCredentials: string[] = [
		"iam:ListServiceSpecificCredentials",
	];
	/** IAM actions required for the ListSigningCertificates API call. */
	static readonly ListSigningCertificates: string[] = [
		"iam:ListSigningCertificates",
	];
	/** IAM actions required for the ListUserPolicies API call. */
	static readonly ListUserPolicies: string[] = ["iam:ListUserPolicies"];
	/** IAM actions required for the ListUserTags API call. */
	static readonly ListUserTags: string[] = ["iam:ListUserTags"];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["iam:ListUsers"];
	/** IAM actions required for the ListVirtualMFADevices API call. */
	static readonly ListVirtualMFADevices: string[] = [
		"iam:ListVirtualMFADevices",
	];
	/** IAM actions required for the PutAccountProperties API call. */
	static readonly PutAccountProperties: string[] = [
		"iam:CreateServiceLinkedRole",
		"iam:PutAccountProperties",
	];
	/** IAM actions required for the PutGroupPolicy API call. */
	static readonly PutGroupPolicy: string[] = ["iam:PutGroupPolicy"];
	/** IAM actions required for the PutRolePermissionsBoundary API call. */
	static readonly PutRolePermissionsBoundary: string[] = [
		"iam:PutRolePermissionsBoundary",
	];
	/** IAM actions required for the PutRolePolicy API call. */
	static readonly PutRolePolicy: string[] = ["iam:PutRolePolicy"];
	/** IAM actions required for the PutUserPermissionsBoundary API call. */
	static readonly PutUserPermissionsBoundary: string[] = [
		"iam:PutUserPermissionsBoundary",
	];
	/** IAM actions required for the PutUserPolicy API call. */
	static readonly PutUserPolicy: string[] = ["iam:PutUserPolicy"];
	/** IAM actions required for the RejectDelegationRequest API call. */
	static readonly RejectDelegationRequest: string[] = [
		"iam:RejectDelegationRequest",
	];
	/** IAM actions required for the RemoveClientIDFromOpenIDConnectProvider API call. */
	static readonly RemoveClientIDFromOpenIDConnectProvider: string[] = [
		"iam:RemoveClientIDFromOpenIDConnectProvider",
	];
	/** IAM actions required for the RemoveRoleFromInstanceProfile API call. */
	static readonly RemoveRoleFromInstanceProfile: string[] = [
		"iam:RemoveRoleFromInstanceProfile",
	];
	/** IAM actions required for the RemoveUserFromGroup API call. */
	static readonly RemoveUserFromGroup: string[] = ["iam:RemoveUserFromGroup"];
	/** IAM actions required for the ResetServiceSpecificCredential API call. */
	static readonly ResetServiceSpecificCredential: string[] = [
		"iam:ResetServiceSpecificCredential",
	];
	/** IAM actions required for the ResyncMFADevice API call. */
	static readonly ResyncMFADevice: string[] = ["iam:ResyncMFADevice"];
	/** IAM actions required for the SendDelegationToken API call. */
	static readonly SendDelegationToken: string[] = ["iam:SendDelegationToken"];
	/** IAM actions required for the SetDefaultPolicyVersion API call. */
	static readonly opSetDefaultPolicyVersion: string[] = [
		"iam:SetDefaultPolicyVersion",
	];
	/** IAM actions required for the SetSecurityTokenServicePreferences API call. */
	static readonly opSetSecurityTokenServicePreferences: string[] = [
		"iam:SetSecurityTokenServicePreferences",
	];
	/** IAM actions required for the SimulateCustomPolicy API call. */
	static readonly SimulateCustomPolicy: string[] = ["iam:SimulateCustomPolicy"];
	/** IAM actions required for the SimulatePrincipalPolicy API call. */
	static readonly SimulatePrincipalPolicy: string[] = [
		"iam:SimulatePrincipalPolicy",
	];
	/** IAM actions required for the TagInstanceProfile API call. */
	static readonly TagInstanceProfile: string[] = ["iam:TagInstanceProfile"];
	/** IAM actions required for the TagMFADevice API call. */
	static readonly TagMFADevice: string[] = ["iam:TagMFADevice"];
	/** IAM actions required for the TagOpenIDConnectProvider API call. */
	static readonly TagOpenIDConnectProvider: string[] = [
		"iam:TagOpenIDConnectProvider",
	];
	/** IAM actions required for the TagPolicy API call. */
	static readonly TagPolicy: string[] = ["iam:TagPolicy"];
	/** IAM actions required for the TagRole API call. */
	static readonly TagRole: string[] = ["iam:TagRole"];
	/** IAM actions required for the TagSAMLProvider API call. */
	static readonly TagSAMLProvider: string[] = ["iam:TagSAMLProvider"];
	/** IAM actions required for the TagServerCertificate API call. */
	static readonly TagServerCertificate: string[] = ["iam:TagServerCertificate"];
	/** IAM actions required for the TagUser API call. */
	static readonly TagUser: string[] = ["iam:TagUser"];
	/** IAM actions required for the UntagInstanceProfile API call. */
	static readonly UntagInstanceProfile: string[] = ["iam:UntagInstanceProfile"];
	/** IAM actions required for the UntagMFADevice API call. */
	static readonly UntagMFADevice: string[] = ["iam:UntagMFADevice"];
	/** IAM actions required for the UntagOpenIDConnectProvider API call. */
	static readonly UntagOpenIDConnectProvider: string[] = [
		"iam:UntagOpenIDConnectProvider",
	];
	/** IAM actions required for the UntagPolicy API call. */
	static readonly UntagPolicy: string[] = ["iam:UntagPolicy"];
	/** IAM actions required for the UntagRole API call. */
	static readonly UntagRole: string[] = ["iam:UntagRole"];
	/** IAM actions required for the UntagSAMLProvider API call. */
	static readonly UntagSAMLProvider: string[] = ["iam:UntagSAMLProvider"];
	/** IAM actions required for the UntagServerCertificate API call. */
	static readonly UntagServerCertificate: string[] = [
		"iam:UntagServerCertificate",
	];
	/** IAM actions required for the UntagUser API call. */
	static readonly UntagUser: string[] = ["iam:UntagUser"];
	/** IAM actions required for the UpdateAccessKey API call. */
	static readonly UpdateAccessKey: string[] = ["iam:UpdateAccessKey"];
	/** IAM actions required for the UpdateAccountPasswordPolicy API call. */
	static readonly UpdateAccountPasswordPolicy: string[] = [
		"iam:UpdateAccountPasswordPolicy",
	];
	/** IAM actions required for the UpdateAssumeRolePolicy API call. */
	static readonly UpdateAssumeRolePolicy: string[] = [
		"iam:UpdateAssumeRolePolicy",
	];
	/** IAM actions required for the UpdateDelegationRequest API call. */
	static readonly UpdateDelegationRequest: string[] = [];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = ["iam:UpdateGroup"];
	/** IAM actions required for the UpdateLoginProfile API call. */
	static readonly UpdateLoginProfile: string[] = ["iam:UpdateLoginProfile"];
	/** IAM actions required for the UpdateOpenIDConnectProviderThumbprint API call. */
	static readonly UpdateOpenIDConnectProviderThumbprint: string[] = [
		"iam:UpdateOpenIDConnectProviderThumbprint",
	];
	/** IAM actions required for the UpdateRole API call. */
	static readonly UpdateRole: string[] = ["iam:UpdateRole"];
	/** IAM actions required for the UpdateRoleDescription API call. */
	static readonly UpdateRoleDescription: string[] = [
		"iam:UpdateRoleDescription",
	];
	/** IAM actions required for the UpdateSAMLProvider API call. */
	static readonly UpdateSAMLProvider: string[] = ["iam:UpdateSAMLProvider"];
	/** IAM actions required for the UpdateSSHPublicKey API call. */
	static readonly UpdateSSHPublicKey: string[] = ["iam:UpdateSSHPublicKey"];
	/** IAM actions required for the UpdateServerCertificate API call. */
	static readonly UpdateServerCertificate: string[] = [
		"iam:UpdateServerCertificate",
	];
	/** IAM actions required for the UpdateServiceSpecificCredential API call. */
	static readonly UpdateServiceSpecificCredential: string[] = [
		"iam:UpdateServiceSpecificCredential",
	];
	/** IAM actions required for the UpdateSigningCertificate API call. */
	static readonly UpdateSigningCertificate: string[] = [
		"iam:UpdateSigningCertificate",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["iam:UpdateUser"];
	/** IAM actions required for the UploadSSHPublicKey API call. */
	static readonly UploadSSHPublicKey: string[] = ["iam:UploadSSHPublicKey"];
	/** IAM actions required for the UploadServerCertificate API call. */
	static readonly UploadServerCertificate: string[] = [
		"iam:TagServerCertificate",
		"iam:UploadServerCertificate",
	];
	/** IAM actions required for the UploadSigningCertificate API call. */
	static readonly UploadSigningCertificate: string[] = [
		"iam:UploadSigningCertificate",
	];
}

/**
 * Condition key constants and builders for iam.
 */
export class IAMConditions {
	/** Condition keys applicable to the AttachGroupPolicy action. */
	static readonly AttachGroupPolicyConditionKeys: string[] = ["iam:PolicyARN"];
	/** Condition keys applicable to the AttachRolePolicy action. */
	static readonly AttachRolePolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the AttachUserPolicy action. */
	static readonly AttachUserPolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the CreateDelegationRequest action. */
	static readonly CreateDelegationRequestConditionKeys: string[] = [
		"iam:DelegationDuration",
		"iam:NotificationChannel",
		"iam:TemplateArn",
	];
	/** Condition keys applicable to the CreateInstanceProfile action. */
	static readonly CreateInstanceProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOpenIDConnectProvider action. */
	static readonly CreateOpenIDConnectProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CreatePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRole action. */
	static readonly CreateRoleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iam:PermissionsBoundary",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the CreateSAMLProvider action. */
	static readonly CreateSAMLProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceLinkedRole action. */
	static readonly CreateServiceLinkedRoleConditionKeys: string[] = [
		"iam:AWSServiceName",
	];
	/** Condition keys applicable to the CreateServiceSpecificCredential action. */
	static readonly CreateServiceSpecificCredentialConditionKeys: string[] = [
		"iam:ServiceSpecificCredentialAgeDays",
		"iam:ServiceSpecificCredentialServiceName",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the CreateVirtualMFADevice action. */
	static readonly CreateVirtualMFADeviceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRole action. */
	static readonly DeleteRoleConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteRolePermissionsBoundary action. */
	static readonly DeleteRolePermissionsBoundaryConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteRolePolicy action. */
	static readonly DeleteRolePolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteServiceSpecificCredential action. */
	static readonly DeleteServiceSpecificCredentialConditionKeys: string[] = [
		"iam:ServiceSpecificCredentialServiceName",
	];
	/** Condition keys applicable to the DeleteUserPermissionsBoundary action. */
	static readonly DeleteUserPermissionsBoundaryConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DeleteUserPolicy action. */
	static readonly DeleteUserPolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the DetachGroupPolicy action. */
	static readonly DetachGroupPolicyConditionKeys: string[] = ["iam:PolicyARN"];
	/** Condition keys applicable to the DetachRolePolicy action. */
	static readonly DetachRolePolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the DetachUserPolicy action. */
	static readonly DetachUserPolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:PolicyARN",
	];
	/** Condition keys applicable to the EnableMFADevice action. */
	static readonly EnableMFADeviceConditionKeys: string[] = [
		"iam:FIDO-FIPS-140-2-certification",
		"iam:FIDO-FIPS-140-3-certification",
		"iam:FIDO-certification",
		"iam:RegisterSecurityKey",
	];
	/** Condition keys applicable to the GenerateOrganizationsAccessReport action. */
	static readonly GenerateOrganizationsAccessReportConditionKeys: string[] = [
		"iam:OrganizationsPolicyId",
	];
	/** Condition keys applicable to the GetAccountProperties action. */
	static readonly actionGetAccountPropertiesConditionKeys: string[] = [
		"iam:AccountPropertyNamespaces",
	];
	/** Condition keys applicable to the GetRole action. */
	static readonly actionGetRoleConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the ListDelegationRequests action. */
	static readonly ListDelegationRequestsConditionKeys: string[] = [
		"iam:DelegationRequestOwner",
	];
	/** Condition keys applicable to the PassRole action. */
	static readonly PassRoleConditionKeys: string[] = [
		"iam:AssociatedResourceArn",
		"iam:PassedToService",
	];
	/** Condition keys applicable to the PutAccountProperties action. */
	static readonly PutAccountPropertiesConditionKeys: string[] = [
		"iam:AccountPropertyNamespaces",
	];
	/** Condition keys applicable to the PutRolePermissionsBoundary action. */
	static readonly PutRolePermissionsBoundaryConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the PutRolePolicy action. */
	static readonly PutRolePolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the PutUserPermissionsBoundary action. */
	static readonly PutUserPermissionsBoundaryConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the PutUserPolicy action. */
	static readonly PutUserPolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the ResetServiceSpecificCredential action. */
	static readonly ResetServiceSpecificCredentialConditionKeys: string[] = [
		"iam:ServiceSpecificCredentialServiceName",
	];
	/** Condition keys applicable to the TagInstanceProfile action. */
	static readonly TagInstanceProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagMFADevice action. */
	static readonly TagMFADeviceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagOpenIDConnectProvider action. */
	static readonly TagOpenIDConnectProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagPolicy action. */
	static readonly TagPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagRole action. */
	static readonly TagRoleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iam:RoleTemplateARN",
	];
	/** Condition keys applicable to the TagSAMLProvider action. */
	static readonly TagSAMLProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagServerCertificate action. */
	static readonly TagServerCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagUser action. */
	static readonly TagUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagInstanceProfile action. */
	static readonly UntagInstanceProfileConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagMFADevice action. */
	static readonly UntagMFADeviceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagOpenIDConnectProvider action. */
	static readonly UntagOpenIDConnectProviderConditionKeys: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagPolicy action. */
	static readonly UntagPolicyConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagRole action. */
	static readonly UntagRoleConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagSAMLProvider action. */
	static readonly UntagSAMLProviderConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagServerCertificate action. */
	static readonly UntagServerCertificateConditionKeys: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagUser action. */
	static readonly UntagUserConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAssumeRolePolicy action. */
	static readonly UpdateAssumeRolePolicyConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateRole action. */
	static readonly UpdateRoleConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateRoleDescription action. */
	static readonly UpdateRoleDescriptionConditionKeys: string[] = [
		"iam:PermissionsBoundary",
	];
	/** Condition keys applicable to the UpdateServiceSpecificCredential action. */
	static readonly UpdateServiceSpecificCredentialConditionKeys: string[] = [
		"iam:ServiceSpecificCredentialServiceName",
	];
	/** Condition keys applicable to the UploadServerCertificate action. */
	static readonly UploadServerCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: iam:AWSServiceName (String) */
	static readonly AWS_SERVICE_NAME = "iam:AWSServiceName";
	/** Condition key: iam:AccountPropertyNamespaces (ArrayOfString) */
	static readonly ACCOUNT_PROPERTY_NAMESPACES = "iam:AccountPropertyNamespaces";
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
	/** Condition key: iam:RoleTemplateARN (ARN) */
	static readonly ROLE_TEMPLATE_ARN = "iam:RoleTemplateARN";
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
	 * Generates a condition block for `iam:AccountPropertyNamespaces`.
	 */
	static accountPropertyNamespaces(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "iam:AccountPropertyNamespaces": values },
		};
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
	 * Generates a condition block for `iam:RoleTemplateARN`.
	 */
	static roleTemplateARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iam:RoleTemplateARN": value } };
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
